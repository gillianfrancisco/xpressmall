// Lib Area
! function(t) {
    var i = t(window);
    t.fn.visible = function(t, e, o) {
        if (!(this.length < 1)) {
            var r = this.length > 1 ? this.eq(0) : this,
                n = r.get(0),
                f = i.width(),
                h = i.height(),
                o = o ? o : "both",
                l = e === !0 ? n.offsetWidth * n.offsetHeight : !0;
            if ("function" == typeof n.getBoundingClientRect) {
                var g = n.getBoundingClientRect(),
                    u = g.top >= 0 && g.top < h,
                    s = g.bottom > 0 && g.bottom <= h,
                    c = g.left >= 0 && g.left < f,
                    a = g.right > 0 && g.right <= f,
                    v = t ? u || s : u && s,
                    b = t ? c || a : c && a;
                if ("both" === o) return l && v && b;
                if ("vertical" === o) return l && v;
                if ("horizontal" === o) return l && b
            } else {
                var d = i.scrollTop(),
                    p = d + h,
                    w = i.scrollLeft(),
                    m = w + f,
                    y = r.offset(),
                    z = y.top,
                    B = z + r.height(),
                    C = y.left,
                    R = C + r.width(),
                    j = t === !0 ? B : z,
                    q = t === !0 ? z : B,
                    H = t === !0 ? R : C,
                    L = t === !0 ? C : R;
                if ("both" === o) return !!l && p >= q && j >= d && m >= L && H >= w;
                if ("vertical" === o) return !!l && p >= q && j >= d;
                if ("horizontal" === o) return !!l && m >= L && H >= w
            }
        }
    }
}(jQuery);
// Compare Array
// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

var loadScript = function(url, callback, errcallback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) { // If the browser is Internet Explorer.
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
        setTimeout(function() {
            if (script.onreadystatechange !== null) {
                if (errcallback !== undefined) errcallback();
            }
        }, 3000);
    } else { // For any other browser.
        script.onload = function() {
            callback();
        };
        script.onerror = function() {
            if (errcallback !== undefined) errcallback();
        }
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};
GOCCApp = function($) {
    window.spuritJQ = $;
    var template = {
          "popup": [{
                  "title": "Normal",
                  "key": "normal",
                  "control_enable": "#popup,#title,#des,#product-heading,#product-body,#fbbtn,#twbtn,#pibtn,#continue,#checkout,#tocartbtn",
                  "json": $('.json-popup[data-key="normal"]').html(),
              },
              {
                  "title": "Mini",
                  "key": "mini",
                  "control_enable": "#popup,#product-title,#success-alert,#continue,#checkout,#tocartbtn",
                  "json": $('.json-popup[data-key="mini"]').html(),
              },
              {
                  "title": "2 Column",
                  "key": "2-column",
                  "control_enable": "#popup,#product-title,#success-alert,#additional-quantity,#additional-subtotal,#additional-total,#additional,#item-count-text,#cart-note,#continue,#checkout,#tocartbtn",
                  "json": $('.json-popup[data-key="2-column"]').html(),
              }
          ],
          "stickybar": [{
                  "title": "Template 1",
                  "key": "stick-1",
                  "control_enable": "#stickybar,#stickybar-title,#stickybar-buynow,#stickybar-enable",
                  "json": $('.json-stickybar[data-key="stick-1"]').html(),
              },
              {
                  "title": "Template 2",
                  "key": "stick-2",
                  "control_enable": "#stickybar,#stickybar-title,#stickybar-buynow,#stickybar-enable",
                  "json": $('.json-stickybar[data-key="stick-2"]').html(),
              },
              {
                  "title": "Template 3",
                  "key": "stick-3",
                  "control_enable": "#stickybar,#stickybar-title,#stickybar-buynow,#stickybar-enable",
                  "json": $('.json-stickybar[data-key="stick-3"]').html(),
              },
              {
                  "title": "Template 4",
                  "key": "stick-4",
                  "control_enable": "#stickybar,#stickybar-title,#stickybar-buynow,#stickybar-enable",
                  "json": $('.json-stickybar[data-key="stick-4"]').html(),
              },
              {
                  "title": "Template 5",
                  "key": "stick-5",
                  "control_enable": "#stickybar,#stickybar-title,#stickybar-buynow,#stickybar-enable",
                  "json": $('.json-stickybar[data-key="stick-5"]').html(),
              },
              {
                  "title": "Template 6",
                  "key": "stick-6",
                  "control_enable": "#stickybar,#stickybar-title,#stickybar-buynow,#stickybar-enable",
                  "json": $('.json-stickybar[data-key="stick-6"]').html(),
              },
              {
                  "title": "Template 7",
                  "key": "stick-7",
                  "control_enable": "#stickybar,#stickybar-title,#stickybar-buynow,#stickybar-enable",
                  "json": $('.json-stickybar[data-key="stick-7"]').html(),
              },
              {
                  "title": "Basic",
                  "key": "basic",
                  "control_enable": "#stickybar,#stickybar-buynow,#stickybar-enable",
                  "json": $('.json-stickybar[data-key="basic"]').html(),
              },
              {
                  "title": "Modern",
                  "key": "modern",
                  "control_enable": "#stickybar,#stickybar-buynow,#stickybar-enable",
                  "json": $('.json-stickybar[data-key="modern"]').html(),
              }

          ],
          "stickycart": [{
              "title": "Template 1",
              "key": "stickcart-1",
              "control_enable": "#stickycart",
              "json": $('.json-stickycart[data-key="stickcart-1"]').html()
          }, ]
      }
    $('.g-popup-parent[selected] .g-empty').text(GOCCConfigs.empty_cart_text);
    var Cart = {
        Update: function(cart_json, modal_template = '',action){
            if (modal_template == '') {
                var modal_template = $('.g-popup-parent[selected]').attr('data-template');
            }
            if (modal_template == "mini") {
                $('.g-stickycart .g-badge').text(cart_json.item_count);
                if (cart_json.item_count > 0) {
                    $('.g-stickycart .g-badge').show();
                    $('.cartProductImage,.cartProductContent').show();
                    $('.g-popup-parent[selected] .g-empty').hide();
                    $('.g-popup-parent[selected] .headerCartContent > .g-continue').remove();
                } else {
                    $('.g-stickycart .g-badge').hide();
                    $('.g-popup-parent[selected] .cartProductImage,.cartProductContent').hide();
                    var continue_btn = $('.g-popup-parent[selected] .g-continue')[0].cloneNode(true);
                    $('.g-popup-parent[selected] .g-empty').show();
                    $('.g-popup-parent[selected] .headerCartContent').append($(continue_btn).show())
                }
                $('.g-popup-parent[selected] table.popup_list_custom tbody').empty();
                var cart_items = cart_json.items;
                if (cart_items && cart_items.length) {
                    $('.g-popup-parent[selected] .cartProductImage img').attr('src', cart_items[0].image);
                    $('.g-popup-parent[selected] .g-product-title').text(cart_items[0].title);
                }
            }
            if (modal_template == "normal") {
                $('.g-stickycart .g-badge').text(cart_json.item_count);
                if (cart_json.item_count > 0) {
                    $('.g-stickycart .g-badge').show();
                    $('table.popup_list_custom').show();
                    $('.g-popup-parent[selected] .g-popup .g-title').show();
                    $('.g-popup-parent[selected] .g-popup .g-des').show();
                    $('.g-popup-parent[selected] .g-popup .social').show();
                    $('.g-popup-parent[selected] .g-popup .subtotal').show();
                    $('.g-popup-parent[selected] .g-popup #checkout').show();
                    $('.g-popup-parent[selected] .g-popup .g-empty').hide();
                    $('.g-popup-parent[selected] .g-popup .footer').css('text-align', 'initial');
                } else {
                    $('.g-stickycart .g-badge').hide();
                    $('table.popup_list_custom').hide();
                    $('.g-popup-parent[selected] .g-popup .g-title').hide();
                    $('.g-popup-parent[selected] .g-popup .g-des').hide();
                    $('.g-popup-parent[selected] .g-popup .social').hide();
                    $('.g-popup-parent[selected] .g-popup .subtotal').hide();
                    $('.g-popup-parent[selected] .g-popup #checkout').hide();
                    $('.g-popup-parent[selected] .g-popup .g-empty').show();
                    $('.g-popup-parent[selected] .g-popup .footer').css('text-align', 'center');
                }
                $('.g-popup-parent[selected] table.popup_list_custom tbody').empty();
                var cart_items = cart_json.items;
                if (cart_items && cart_items.length) {
                    var subtotal = 0;
                    var cartobj = {};
                    $.each(cart_items, function(key, item) {
                        var price = item.price / 100;
                        var subprice = parseFloat(parseFloat(price * item.quantity).toFixed(2));
                        subtotal += subprice;
                        var row = '<tr><td class="thumb"><img src="' + item.image + '" alt="' + item.title + '"></td> <td class="name">' + item.title + '</td> <td class="price"><span class="money">' + GOCCConfigs.money_character + price + '</span></td> <td class="quantity">' + item.quantity + '</td> <td class="total" data-total="65"><span class="money">' + GOCCConfigs.money_character + subprice + '</span></td><td class="td_remove"><div><a data-id="' + item.id + '" class="remove_item">x</a></div></td></tr>';
                        $('.g-popup-parent[selected] table.popup_list_custom tbody').append(row);
                        cartobj[item.id] = item.quantity;
                    });
                    $(".g-popup-parent[selected] .subtotal").empty().append('<span class="money">'+GOCCConfigs.money_character + parseFloat(subtotal).toFixed(2)).attr('data-subtotal', parseFloat(subtotal).toFixed(2)+'</span>');
                    $('.g-popup-parent[selected] .g-popup a.social_sharing_link').attr('data-href', '/pages/share-cart?data=' + encodeURI(JSON.stringify(cartobj)));
                }
            }
            if (modal_template == "2-column") {
                var count_text = $('.g-item-count-text').html();
                $('.g-stickycart .g-badge').text(cart_json.item_count);
                if (cart_json.item_count > 0) {
                    var regex_count = /<span class="item_count">.*<\/span>/gm;
                    var temp_c = count_text.replace("{number}", "<span class=\"item_count\">"+cart_json.item_count+"</span>");
                  	temp_c = temp_c.replace(regex_count, "<span class=\"item_count\">"+cart_json.item_count+"</span>");
                    $('.g-item-count-text').html(temp_c);
                    $('.g-stickycart .g-badge').show();
                    $('.g-popup-parent[selected] .clearfix').show();
                    $('.g-popup-parent[selected] .g-empty').hide();
                    $('.g-popup-parent[selected] .headerCartContent > .g-continue').remove();
                } else {
                    $('.g-stickycart .g-badge').hide();
                    $('.g-popup-parent[selected] .clearfix').hide();
                    var continue_btn = $('.g-popup-parent[selected] .g-continue')[0].cloneNode(true);
                    $('.g-popup-parent[selected] .g-empty').show();
                    $('.g-popup-parent[selected] .headerCartContent').append($(continue_btn).show())
                }
                $('.g-popup-parent[selected] table.popup_list_custom tbody').empty();
                var cart_items = cart_json.items;
                if (cart_items && cart_items.length) {
                    $('.g-popup-parent[selected] .product-image-container img').attr('src', cart_items[0].image);
                    $('.g-popup-parent[selected] .g-product-title').text(cart_items[0].product_title);
                    $('.g-popup-parent[selected] .g-product-option').text(cart_items[0].variant_title);
                    $('.g-popup-parent[selected] .layer_cart_product_quantity').text(cart_items[0].quantity);
                    $('.g-popup-parent[selected] .layer_cart_product_subtotal').empty().append('<span class="money">'+GOCCConfigs.money_character + parseFloat(parseInt(cart_items[0].quantity) * (parseInt(cart_items[0].price) / 100)).toFixed(2)+'</span>');
                    $('.g-popup-parent[selected] .layer_cart_total_quantity').text(cart_json.item_count);
                    $('.g-popup-parent[selected] .layer_cart_total_price').empty().append('<span class="money">'+GOCCConfigs.money_character + parseFloat(parseInt(cart_json.total_price) / 100).toFixed(2)+'</span>');
                }
            }
          	f_atc_action(action);
        }
    };
    var cart = {};
    var cursor_on = false;
    $('.g-stickycart').bind("mouseenter", function(e) {
        if (!cursor_on) $('.g-stickycart .g-badge').trigger(e.type);
    });
    $('.g-stickycart .g-badge').bind("mouseenter", function(e) {
        cursor_on = true;
    });
    $('.g-stickycart').bind("mouseleave", function(e) {
        if (cursor_on) $('.g-stickycart .g-badge').trigger(e.type);
    });
    $('.g-stickycart .g-badge').bind("mouseleave", function(e) {
        cursor_on = false;
    });

    $('body').on('click','.g-popup .social_sharing_link',function(){
      	var social = $(this).attr('data-share');
    	var url_ = '';
        var uri_ = encodeURI('https://' + GOCCConfigs.shop_url + $(this).attr('data-href'));
        if (social == 'fb') {
            var _preurl = "https://www.facebook.com/sharer/sharer.php?u=";
            url_ = _preurl + uri_;
        }
        if (social == 'tw') {
            var _preurl = "https://twitter.com/share?text=&url=";
            url_ = _preurl + uri_;
        }
        if (social == 'pi') {
            var _preurl = "https://www.pinterest.com/pin/create/button/?description=&url=";
            url_ = _preurl + uri_;
        }
        window.open(url_, null, 'height=350,width=560,status=yes,toolbar=no,menubar=no,location=no,resize=yes');
        return false;
    });


    if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
        "use strict";
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
    }(jQuery), + function(t) {
        "use strict";

        function e(e, o) {
            return this.each(function() {
                var s = t(this),
                    n = s.data("bs.modal"),
                    r = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
                n || s.data("bs.modal", n = new i(this, r)), "string" == typeof e ? n[e](o) : r.show && n.show(o)
            })
        }
        var i = function(e, i) {
            this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, i.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t)
        }, i.prototype.show = function(e) {
            var o = this,
                s = t.Event("show.bs.modal", {
                    relatedTarget: e
                });
            this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                o.$element.one("mouseup.dismiss.bs.modal", function(e) {
                    t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var s = t.support.transition && o.$element.hasClass("fade");
                o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), s && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
                var n = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                s ? o.$dialog.one("bsTransitionEnd", function() {
                    o.$element.trigger("focus").trigger(n)
                }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(n)
            }))
        }, i.prototype.hide = function(e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
        }, i.prototype.enforceFocus = function() {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, i.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, i.prototype.resize = function() {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, i.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, i.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, i.prototype.backdrop = function(e) {
            var o = this,
                s = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var n = t.support.transition && s;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var r = function() {
                    o.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
            } else e && e()
        }, i.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, i.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, i.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, i.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, i.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, i.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, i.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var o = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
            return t.fn.modal = o, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
            var o = t(this),
                s = o.attr("href"),
                n = t(o.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
                r = n.data("bs.modal") ? "toggle" : t.extend({
                    remote: !/#/.test(s) && s
                }, n.data(), o.data());
            o.is("a") && i.preventDefault(), n.one("show.bs.modal", function(t) {
                t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
                    o.is(":visible") && o.trigger("focus")
                })
            }), e.call(n, r, this)
        })
    }(jQuery), + function(t) {
        "use strict";

        function e() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }
        t.fn.emulateTransitionEnd = function(e) {
            var i = !1,
                o = this;
            t(this).one("bsTransitionEnd", function() {
                i = !0
            });
            var s = function() {
                i || t(o).trigger(t.support.transition.end)
            };
            return setTimeout(s, e), this
        }, t(function() {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery);
    $('.modal').off().on('shown.bs.modal', function() {
        $(document).off('focusin.modal');
    });
    loadScript('//cdnjs.cloudflare.com/ajax/libs/velocity/1.2.2/velocity.min.js', function() {
    	loadScript('//cdnjs.cloudflare.com/ajax/libs/velocity/1.2.2/velocity.ui.min.js', function() {});
    });

    $(".modal").each(function(l) {
        $(this).on("show.bs.modal", function(l) {
            var o = $(this).attr("data-easein");
            "shake" == o ? $(".modal-dialog").velocity("callout." + o) : "pulse" == o ? $(".modal-dialog").velocity("callout." + o) : "tada" == o ? $(".modal-dialog").velocity("callout." + o) : "flash" == o ? $(".modal-dialog").velocity("callout." + o) : "bounce" == o ? $(".modal-dialog").velocity("callout." + o) : "swing" == o ? $(".modal-dialog").velocity("callout." + o) : $(".modal-dialog").velocity("transition." + o)
        })
    });
    var ModalShow = function(){
        $('.modal[selected]').modal('show');
        $('.modal[selected]').css('display', 'flex');
    }
    var InitSelector = function() {
        //   Custom Select
        var p, x, i, j, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select":*/
        p = $('.g-stickybar[selected]')[0];
        x = p.getElementsByClassName("custom-select");
        for (i = 0; i < x.length; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            // Remove old select
            $(selElmnt).parent().find('.select-selected').remove();
            $(selElmnt).parent().find('.select-items').remove();
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            if (selElmnt.selectedIndex == -1) selElmnt.selectedIndex = 0;
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 0; j < selElmnt.length; j++) {
                /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function(e) {
                    /*when an item is clicked, update the original select box,
                    and the selected item:*/
                    var y, i, k, s, h;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < s.length; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            for (k = 0; k < y.length; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function(e) {
                /*when the select box is clicked, close any other select boxes,
                and open/close the current select box:*/
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
                $(this).closest('.custom-select').find('select').change();
            });
        }

        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
            except the current select box:*/
            var x, y, i, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            for (i = 0; i < y.length; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < x.length; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);
    }
    $('body').on('click', '.g-stickybar .qty_action.g-sub', function() {
        var current_val = parseInt($(this).siblings('input').val());
        if (current_val > 1) {
            $(this).siblings('input').val(current_val - 1).change();
        } else {
            $(this).siblings('input').val(1);
        }
    });
    $('body').on('click', '.g-stickybar .qty_action.g-add', function() {
        var current_val = parseInt($(this).siblings('input').val());
        if (current_val >= 1) {
            $(this).siblings('input').val(current_val + 1).change();
        } else {
            $(this).siblings('input').val(1);
        }
    });
    $(document).ready(function() {
        var installed = false;
        $("script").each(function() {
            if ($(this).text().indexOf("globocheckout_init.js?") != -1 && $(this).text().indexOf("asyncLoad") != -1 && $(this).text().indexOf("initSchema") == -1) {
                installed = true;
            }
        });
        if (installed) {
            $('.g-stickycart-wrapper,.g-stickybar-wrapper,.g-popup-wrapper').show();
            var translation = {
                "bar_buynow_text": $('.g-stickybar[selected] button.g-stickybar-buynow').text()
            }
            get_cart();
            var atc_slt = document.querySelectorAll(GOCCConfigs.selector.addtocart_selector);
            if(GOCCConfigs.atc_action != 3){
            	if (atc_slt.length){
                  $.each($(atc_slt),function(k,ele){
                      if($(ele).visible()){
					  	$(ele).replaceWith(ele.cloneNode(true));
                      }
                      else {
//                       	$(ele).addClass('hiddenI');
                      }
                  });
                }
            }
            if (GOCCConfigs.atc_action == 1) {
                //show_popup== 1 means go to checkout page
                $('body').on('click', GOCCConfigs.selector.addtocart_selector, function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                  	var data = $(this).closest('form').serialize();
                    add_to_cart(this,"goto_checkout");
                });
            } else if (GOCCConfigs.atc_action == 0) {
                // Ajax
                $('body').on('click', GOCCConfigs.selector.addtocart_selector, function(e) {
                    e.preventDefault();
                    add_to_cart(this, "show_popup");
                });
                $('body').on('click', '.g-popup #checkout', function(e) {
                    e.preventDefault();
                    window.location.href = "/checkout";
                });
                $('body').on('click', '.g-popup #tocart', function(e) {
                    e.preventDefault();
                    window.location.href = "/cart";
                });
            }else if (GOCCConfigs.atc_action == 2) {
                //atc_action==2 means go to Cart page
                $('body').on('click', GOCCConfigs.selector.addtocart_selector, function(e) {
                    $(this).closest('form').submit();
                    e.preventDefault();
                    setTimeout(function(){ window.location.href = "/cart"; }, 200);
                });
            }
            $('body').on('click','a.remove_item',function(){
            	Cartchange(this, 'updates[' + $(this).attr('data-id') + ']=0' , '');
            })
            $('body').on('click', 'a.closeCartModal', function() {
                $('.modal').modal('hide');
            });
            $('body').on('click', '#continue_shopping', function() {
                $('a.closeCartModal').click();
            });
            $('.g-stickycart').on('click', function() {
                var action = $(this).attr('data-action');
                if (action == 'goto_cart') window.location.href = '/cart';
                if (action == 'goto_checkout') window.location.href = '/checkout';
                if (action == 'show_popup') {
                    get_cart(action);
                }
            });

            // Share Cart
            var is_share_page = $('#globo_share_cart').length;
            if (is_share_page > 0) {
                var url_string = window.location.href;
                var url = new URL(url_string);
                var dataJson = JSON.parse(url.searchParams.get("data"));
                $.each(dataJson, function(key, val) {
                    $.ajax('/cart/add.js', {
                        data: {
                            id: key,
                            quantity: val
                        },
                        async: false,
                        type: "POST",
                        complete: function(result) {
                            console.log(result);
                        }
                    });
                });
                window.location.href = '/cart';
            }



            // Sticky Bar
            if (getPageType() == "product") {
                var form_selector = $('form[action*="/cart/add"]')
                $(form_selector).addClass("theme-id-"+GOCCConfigs.theme_store_id)
                $('.g-stickycart-wrapper').addClass("theme-id-"+GOCCConfigs.theme_store_id)
                $('.g-stickybar-wrapper').addClass("theme-id-"+GOCCConfigs.theme_store_id)
                $('.g-popup-wrapper').addClass("theme-id-"+GOCCConfigs.theme_store_id)
                var option_selector = form_selector.find('select:visible');
              	var radio_selector = form_selector.find('input[name*=option]')
                if($(radio_selector).length==0) radio_selector = form_selector.find('input[data-product-option]')
                if($(radio_selector).length==0) radio_selector = form_selector.find('input[type="radio"]:visible')
                $('.g-stickybar[selected] .item.option').empty();
//                 if(option_selector.length>0){
// 					$.each(option_selector, function(key, select) {
//                         $('.g-stickybar[selected] .item.option').append(select.cloneNode(true));
//                     });
//                 }else {
//                   	$('.g-stickybar[selected] .item.option').append(buildSelect());
//                 }
				$('.g-stickybar[selected] .item.option').append(buildSelect());
                $('.g-stickybar[selected] .item.option select').wrap("<div class='custom-select'></div>");
                InitSelector();
                var new_selector = $('.g-stickybar[selected] .item.option select');
                UpdateBarAndForm(form_selector ,translation);
                $.each(new_selector, function(key, single_sel){
                    $(single_sel).on('change', function() {
                        var sel_option = $(form_selector).find('option[value="'+$(this).val()+'"]');
                      	if(sel_option.length==0) sel_option = $(form_selector).find('option:contains("'+$(this).val()+'")');
                      	if(sel_option)
                          sel_option.parent('select').val($(this).val()).change();
                      	var radio_option = $(form_selector).find('input[value="'+$(this).val()+'"]');
                      	if(radio_option)
                          radio_option.prop("checked", true).change();
                    });
                });
                option_selector.on('change', function() {
                  	UpdateBarAndForm(form_selector ,translation);
                });
                radio_selector.on('change', function() {
                	UpdateBarAndForm(form_selector ,translation);
                });
              	// Quantity Event if has qty in original form
                $('body').on('change', '.g-stickybar[selected] .item.quantity input', function(){
                	$(form_selector).find('input[name="quantity"]').val(this.value);
                });
              	var original_qty_input = $(form_selector).find('input[name="quantity"]');
                if(original_qty_input.length>0){
					$(original_qty_input).on('change input', function(){
                        $('.g-stickybar[selected] .item.quantity input').val(this.value);
                    });
                }
                $('body').on('click', '.g-stickybar[selected] .bar-action .action', function() {
                    if (atc_slt.length) {
                        var action = $(this).closest('.g-stickybar').attr('data-action');
                        add_to_cart(this, action);
                    }
                });


              	var data_template = $('.g-stickybar[selected]').attr('data-template');
              	var sticky_bar_is_visible = true;
              	template.stickybar.forEach(function(entry) {
                    if(entry.key==data_template){
                    	var json = JSON.parse(entry.json);
                      	if(json['#stickybar-display']=='none')
                          	sticky_bar_is_visible = false;
                    }
                });


                var data_display = $('.g-stickybar[selected]').attr('data-display');
                if(sticky_bar_is_visible){
                	if (data_display == "addtocart_is_not_visible") {
                        if (!$(GOCCConfigs.selector.addtocart_selector).visible()) {
                            $('.g-stickybar[selected]').css('display', 'flex');
                        } else {
                            $('.g-stickybar[selected]').css('display', 'none');
                        }
                        $(window).on('scroll', function() {
                            if (!$(GOCCConfigs.selector.addtocart_selector).visible()) {
                                $('.g-stickybar[selected]').css('display', 'flex');
                            } else {
                                $('.g-stickybar[selected]').css('display', 'none');
                            }
                        });
                    } else {
                        $('.g-stickybar[selected]').css('display', 'flex');
                    }
                }

                $(window).on('resize', function() {
                    AdaptTitle();
                });

            }


        }else{
            $('.g-stickycart-wrapper,.g-stickybar-wrapper,.g-popup-wrapper').hide();
        }
    });
    var add_to_cart = function(self, action) {
        // Submit form using ajax
        var form_data = $('form[action*="/cart/add"]').serializeArray();
        var qty = 1;
        var q = parseInt($('.g-stickybar[selected] .quantity input').val());
        if (typeof q !== 'undefined' && q > 1) qty = q;
        $.ajax('/cart/add.js', {
            data: $('form[action*="/cart/add"]').serialize() + '&quantity=' + qty,
            type: "POST",
            complete: function(result) {
                if (result.status == 200) {
                    // if success show modal
                    get_cart(action);
                } else if (result.status == 422) {
                    $.ajax({
                        url: '/cart.js',
                        type: 'GET',
                        complete: function(res) {
                            cart = JSON.parse(res.responseText);
                            var id_varriant = form_data.filter((x) => {
                                return x.name == 'id';
                            })[0].value;
                          	var cur_qty_var = getValueFromObject(cart.items, id_varriant, 'quantity');
                          	if(cur_qty_var=='') cur_qty_var = 0;
                            var qty_varriant = parseInt(cur_qty_var) + qty;
                            if (id_varriant && id_varriant > 0) {
                                Cartchange(self, 'updates[' + id_varriant + ']=' + qty_varriant,action);
                            }
                        }
                    });
                }
            }
        });
    };
    var f_atc_action = function(action){
        let locale='';
        if(typeof action === "undefined") return false;
      	if(typeof GOCCConfigs.locale !== 'undefined') locale = '?locale='+GOCCConfigs.locale;
    	if (action == "show_popup")
            ModalShow();
        if (action == "goto_cart")
            window.location.href = "/cart"+locale;
        if (action == "goto_checkout")
            window.location.href = "/checkout"+locale;
    }
    var get_cart = function(action) {
        $.ajax('/cart.js', {
            type: "GET",
            complete: function(result) {
                if (result.status == 200) {
                    // if success show modal
                    var cart_data = JSON.parse(result.responseText);
                    Cart.Update(cart_data,'',action);
                }
            }
        });
    };
    var Cartchange = function(ele, data,action='') {
        $.ajax('/cart/update.js', {
            type: "POST",
            data: data,
            complete: function(result) {
                if (result.status == 200) {
                    var cart_data = JSON.parse(result.responseText);
                    cart = cart_data;
                    Cart.Update(cart_data,'',action);
                }
            }
        });
    };

    function closest(el, selector) {
        var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

        while (el) {
            if (matchesSelector.call(el, selector)) {
                break;
            }
            el = el.parentElement;
        }
        return el;
    };

    function getValueFromObject(obj, id, field) {
        var value = '';
        if (obj.length) {
            $.each(obj, function(k, item) {
                if (item.id == id) {
                    value = item[field];
                }
            });
        }
        return value;
    }

    function findVariant(product, variant_id) {
        var res;
        $.each(product.variants, function(key, variant) {
            if (parseInt(variant.id) == parseInt(variant_id)) {
                res = variant
                return false;
            }
        });
        if(typeof res === 'undefined') res = product.variants[0];
        return res;
    }
    function UpdateBarAndForm(form_selector ,translation) {
      	setTimeout(function(){
        	var url_string = window.location.href;
            var url = new URL(url_string);
            var variant_id = parseInt(url.searchParams.get("variant"));
            if (typeof variant_id === 'undefined' || isNaN(variant_id)) {
                var variant_id = form_selector.find('select[name="id"]').val();
            }
            if(typeof GOCCConfigs.product !== "undefined"){
                var product = GOCCConfigs.product;
            }else if($('script[data-product-json]').length>0){
                var product = JSON.parse($('script[data-product-json]').text());
            }else if($('script[class="product-json"]').length>0){
                var product = JSON.parse($('script[class="product-json"]').text());
            }else if($('script#ProductJson-product-template').length>0){
                var product = JSON.parse($('script#ProductJson-product-template').text());
            }
            var variant = findVariant(product, variant_id);
            if (variant) {
                if (variant.options.length > 0) {
                    for (var i = 0; i < variant.options.length ; i++){
                        $('.g-stickybar[selected] .custom-select select').eq(i).val(variant.options[i]);
                    }
                    $('.g-stickybar[selected] .custom-select').each(function(key,sel){
                        var s = $(sel).find('select')[0].selectedIndex;
                        $(sel).find('.select-items div').removeClass('same-as-selected').eq(s).addClass('same-as-selected');
                        $(sel).find('.select-selected').html($(sel).find('select').val());
                    });
                }
                $('.g-stickybar[selected] .g-stickybar-title').text(variant.name);
                var html_rating = $('.spr-starrating.spr-summary-starrating').html();
                $('.g-stickybar[selected] .g-rating').empty();
                if (typeof html_rating !== "undefined")
                    $('.g-stickybar[selected] .g-rating').html(html_rating);
                $('.g-stickybar[selected] .g-price .money_character').text(GOCCConfigs.money_character);
                $('.g-stickybar[selected] .g-price .price_compare').text((variant.compare_at_price / 100).formatMoney(2, '.', ','));
                if (variant.compare_at_price == null || variant.compare_at_price == 0) $('.g-stickybar .g-price .g-compare').hide();
                else $('.g-stickybar[selected] .g-price .g-compare').show();
                $('.g-stickybar[selected] .g-price .price_regular').text((variant.price / 100).formatMoney(2, '.', ','));
                if (variant.featured_image == null) {
                    var img = product.featured_image;
                } else {
                    var img = variant.featured_image.src;
                }
                $('.g-stickybar[selected] .item.thumb > img').attr('src', img);
              	$('.g-stickybar .thumb img,.g-stickycart .thumb img,.g-popup-wrapper .thumb img').on('load',function(){
                	$(this).addClass('loaded');
                });
                if (!variant.available) {
                  	$.each($(GOCCConfigs.selector.addtocart_selector),function(k,ele){
                        if($(ele).visible()){
                             $(ele).addClass('disabled').attr('disabled', 'disabled').val(GOCCConfigs.sold_out_text).text(GOCCConfigs.sold_out_text);
                        }
                    });
                    $('.g-stickybar[selected] .bar-action .g-stickybar-buynow').addClass('disabled').attr('disabled', 'disabled').text(GOCCConfigs.sold_out_text);
                } else {
                  	$.each($(GOCCConfigs.selector.addtocart_selector),function(k,ele){
                        if($(ele).visible()){
                            $(ele).removeClass('disabled').removeAttr('disabled').val(GOCCConfigs.add_to_cart_text).text(GOCCConfigs.add_to_cart_text);
                        }
                    });
                    $('.g-stickybar[selected] .bar-action .g-stickybar-buynow').removeClass('disabled').removeAttr('disabled').text(translation.bar_buynow_text);
                }
                // Case title is too long.
                AdaptTitle();
            }
        }, 50);

    }
    function SyncToBar(ele){
    	var url_string = window.location.href;
        var url = new URL(url_string);

    }
    function AdaptTitle() {
        var line_height = parseInt($('.g-stickybar[selected] .g-stickybar-title').css('line-height'));
        var curr_height = $('.g-stickybar[selected] .g-stickybar-title').height();
        if (curr_height > 2 * line_height) {
            $('.g-stickybar[selected] .g-stickybar-title').css('max-height', 2 * line_height + 'px');
            $('.g-stickybar[selected] .g-stickybar-title').addClass('shorten');
        } else {
            $('.g-stickybar[selected] .g-stickybar-title').removeClass('shorten');
        }
    }
    function buildSelect(){
      	var html = '';
      	if(GOCCConfigs.product.variants.length>0){
          	var arrOption = new Array(GOCCConfigs.product.options.length);
          	for (var i = 0; i < arrOption.length; i++) {
              arrOption[i] = [];
            }
            for(var i=0;i<GOCCConfigs.product.variants.length;i++){
                pushItemToArray(arrOption,GOCCConfigs.product.variants[i].options);
            }
            if(arrOption.length == 1&&arrOption[0] == 'Default Title'){
              return '';
            }
            for(var i=0;i<arrOption.length;i++){
            	html += '<select>';
                for (var j=0;j<arrOption[i].length;j++){
                	html+= '<option value="'+arrOption[i][j]+'">'+arrOption[i][j]+'</option>';
                }
              	html += '</select>';
            }
        }
      	return html;
    }
    function pushItemToArray(arrOption,items){
      for (var i = 0 ;i < items.length;i++){
      	if(arrOption[i].indexOf(items[i])<0){
          arrOption[i].push(items[i]);
        }
      }
    }
    function getPageType() {
        var url = window.location.toString();
        if (url.match(/\/products\//) !== null || url.match(/\/products_preview/) !== null) {
            return 'product';
        } else if (url.match(/\/cart/) !== null) {
            return 'cart';
        } else if (url.match(/\/collections\//) !== null) {
            return 'collection';
        } else if (url.match(/\/pages\//) !== null) {
            return 'page';
        } else {
            return '';
        }
    };
}
Number.prototype.formatMoney = function(c, d, t){
    var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

try {
    if (typeof jQuery === 'undefined' || (jQuery.fn.jquery.split(".")[0] < 2 && jQuery.fn.jquery.split(".")[1] < 7)) {
        var doNoConflict = true;
        if (typeof jQuery === 'undefined') {
            doNoConflict = false;
        }
        loadScript('//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js', function() {
            if (doNoConflict) {
                jQuery17 = jQuery.noConflict(true);
            } else {
                jQuery17 = jQuery;
            }
            GOCCApp(jQuery17);
        });
    } else {
        GOCCApp(jQuery);
    }
} catch (e) {
    console.log('GOCCApp app exception: ' + e)
}
