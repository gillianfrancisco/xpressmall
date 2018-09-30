// BOLD: POv2 checkout fix
// test
if (typeof(Storage) !== "undefined") {
  if(!sessionStorage._bold_history) {
    sessionStorage.setItem('_bold_history', document.URL);
  } else {
    var bold_history = sessionStorage._bold_history.split(',');
    bold_history.push(document.URL);
    sessionStorage.setItem('_bold_history', bold_history);
  }
}

if((typeof Storage !== "undefined" && sessionStorage._bold_options_checkout_fix != 'true') && (window.location.href.indexOf('checkout') > 0 || ( Shopify && Shopify.ClientAttributesCollection ))){
  sessionStorage.setItem('_bold_options_checkout_fix', 'true');
  var url = '/cart.json?' + Date.now();
  var myshopify_url = Shopify.Checkout.apiHost;
  var error_url = 'https://option.boldapps.net/v2/' + myshopify_url + '/frontend_error';
  var request = new XMLHttpRequest();

  var make_request_data = function(){
    var data = {};
    var today = new Date();
    var formatted_time = today.getHours() + ":" + (today.getMinutes() < 10 ? '0' : '' ) + today.getMinutes() + ":" + today.getSeconds();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){
      dd='0'+dd;
    }
    if(mm<10){
      mm='0'+mm;
    }

    var formatted_date = yyyy + '/' + mm + '/' + dd;
    data['endpoint'] = 'laststand v1.1.4';
    data['status'] = 'LIC'; //Laststand Incorrect Cart
    data['cart_token'] = 'Shopify_Checkout_token='+Shopify.Checkout.token;

    var request_data = {};
    request_data['myshopify_url'] = myshopify_url;
    request_data['url'] = document.location.href;
    request_data['cart_before_update'] = typeof cartJSON != 'undefined' ? cartJSON : null;
    request_data['bold_update_req'] = typeof bold_update_req != 'undefined'  ? bold_update_req : null;
    request_data['items_to_update'] = typeof bold_items != 'undefined'  ? bold_items : null;
    request_data['document_referrer'] = document.referrer;
    request_data['date_time'] = formatted_date + '_' + formatted_time;
    request_data['user_agent'] = navigator.userAgent;
    request_data['Shopify'] = Shopify;
    request_data['sessionStorage'] = sessionStorage;
    data['request_data'] = JSON.stringify(request_data);

    return data;
  }
  request.open('GET', url, true);

  request.onload = function(data){
    var cartJSON = JSON.parse(data.currentTarget.response);
    var bold_update_req = false;
    var cartJSON_items = {};
    var bold_items = {};
    var boldProductOneTime = {};
    var boldOrderOneTime = {};

    for (var bold_index = 0; bold_index < cartJSON.items.length; bold_index++) {
      var cartJSON_item = cartJSON.items[bold_index];
      var cartJSON_properties = cartJSON_item.properties;
      var boldVariantIds, boldVariantQtys;

      cartJSON_items[cartJSON_item.variant_id] = cartJSON_items[cartJSON_item.variant_id] ? cartJSON_items[cartJSON_item.variant_id] + cartJSON_item.quantity: cartJSON_item.quantity;

      if( cartJSON_properties ){
        if( cartJSON_properties._boldVariantIds){
          boldVariantIds = cartJSON_properties._boldVariantIds.split(',');
          if( cartJSON_properties._boldVariantQtys ) {
            boldVariantQtys = cartJSON_properties._boldVariantQtys.split(',');
          }

          for( var item_index = 0; item_index < boldVariantIds.length; item_index++){
            if( !bold_items[boldVariantIds[item_index]] ) {
              bold_items[boldVariantIds[item_index]] = (boldVariantQtys ? parseInt(boldVariantQtys[item_index]) : 1) * cartJSON_item.quantity;
            } else {
              bold_items[boldVariantIds[item_index]] += (boldVariantQtys ? parseInt(boldVariantQtys[item_index]) : 1) * cartJSON_item.quantity;
            }
          }
        } // end of cartJSON_properties._boldVariantIds if statement

        if( cartJSON_properties._boldProductOneTime ){
          boldProductOneTime[cartJSON_item.id] = {};
          boldProductOneTime[cartJSON_item.id][cartJSON_properties._boldProductOneTime] = 1;
        }

        if ( cartJSON_properties._boldOrderOneTime ){
          boldOrderOneTime[cartJSON_properties._boldOrderOneTime] = 1;
        }
      }  // end of cartJSON_properties if statement
    } // end of for loop

    for ( var product_index in boldProductOneTime ) {
      for( var variant_index in boldProductOneTime[product_index] ){
        bold_items[variant_index] = 1;
      }
    }

    for ( var variant_index in boldOrderOneTime ){
      bold_items[variant_index] = 1;
    }

    for( var item in bold_items ) {
      if( cartJSON_items[item]) {
        bold_items[item]= bold_items[item] - cartJSON_items[item];

        if( bold_items[item] > 0 ){
          bold_update_req = true;
        }
      } else {
        bold_update_req = true;
      }
    } // end of for loop

    if (bold_update_req || cartJSON.items.length === 0) {
      var request = new XMLHttpRequest();
      var data = make_request_data(myshopify_url);
      data['status_text'] = cartJSON.items.length != 0 ? 'User is in checkout with shadow variants missing; attempting to add shadow variants' : 'Received an empty cart from cart.js cannot attempt to add shadow variants';
      data['cart_token'] = typeof cartJSON != 'undefined' ? cartJSON.token : data['cart_token'];

      request.open('POST', error_url, true);
      if(typeof data === 'object' && error_url.indexOf('frontend_error') == -1){
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      }

      request.onload = function() {
        if(typeof Storage !== "undefined") {
          sessionStorage.removeItem('_bold_history');
        }
        if (request.status >= 200 && request.status < 400) {
          var response;
          try {
            response = JSON.parse(request.responseText);
          } catch (e) {
            response = request.responseText;
          } finally {
            if(typeof success_callback === 'function'){
              success_callback(response)
            }
          }
        } else {
          if(typeof error_callback === 'function'){
            error_callback(request.responseText);
          }
        }
      };
      request.send(( typeof data === 'object' ? JSON.stringify(data) : data ));
      
      if(bold_update_req){
        var request = new XMLHttpRequest();
        var url = '/cart/update.js?';
        for( var item in bold_items ){
          url += 'updates['+ item + ']=' + bold_items[item] + '&';
        }
        url = url.substring(0, url.length-1);

        request.open('POST', url, true);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            window.location = '/checkout';
          } else {
            console.log(request.responseText);
          }
        }
        request.send();
      } // end of bold_update_req of statement
    } // end of bold_update_req if statement
  };
  request.onerror = function (data){
    var data = make_request_data(myshopify_url);
    data['status_text'] = 'Cannot access cart.js cannot attempt to add shadow variants';
    request.open('POST', error_url, true);

    if(typeof data === 'object' && error_url.indexOf('frontend_error') == -1){
      request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    }

    request.onload = function() {
      if(typeof Storage !== "undefined") {
        sessionStorage.removeItem('_bold_history');
      }
      if (request.status >= 200 && request.status < 400) {
        var response;
        try {
          response = JSON.parse(request.responseText);
        } catch (e) {
          response = request.responseText;
        } finally {
          if(typeof success_callback === 'function'){
            success_callback(response)
          }
        }
      } else {
        if(typeof error_callback === 'function'){
          error_callback(request.responseText);
        }
      }
    };
    request.send(( typeof data === 'object' ? JSON.stringify(data) : data ));
  };
  request.send();
} else if (typeof Storage !== "undefined" && !(window.location.href.indexOf('checkout') > 0 || ( Shopify && Shopify.ClientAttributesCollection ))){
  sessionStorage.setItem('_bold_options_checkout_fix', 'false');
}