!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 41));
})({
  41: function (e, t, n) {
    e.exports = n(42);
  },
  42: function (e, t) {
    if (((window.TVE_Dash = window.TVE_Dash || {}), !r || !r.$j)) {
      var n = window.$,
        r = { $j: jQuery.noConflict() };
      n && (window.$ = n);
    }
    !(function (e) {
      TVE_Dash.ajax_sent = !1;
      var t = {},
        n = {};
      (TVE_Dash.add_load_item = function (r, a, o) {
        if (('function' != typeof o && (o = e.noop), TVE_Dash.ajax_sent)) {
          var s = {},
            i = {};
          return (s[r] = a), (i[r] = o), this.send_ajax(s, i), !0;
        }
        return a
          ? (t[r] &&
              console.error &&
              console.error(r + ' ajax action already defined'),
            (t[r] = a),
            (n[r] = o),
            !0)
          : (console.error && console.error('missing ajax data'), !1);
      }),
        (TVE_Dash.ajax_load_css = function (t) {
          e.each(t, function (t, n) {
            e('link#' + (t += '-css')).length ||
              e(
                '<link rel="stylesheet" id="' +
                  t +
                  '" type="text/css" href="' +
                  n +
                  '"/>'
              ).appendTo('head');
          });
        }),
        (TVE_Dash.ajax_load_js = function (t) {
          var n = document.body;
          e.each(t, function (r, a) {
            if (-1 !== r.indexOf('_before')) return !0;
            var o = document.createElement('script');
            t[r + '_before'] &&
              e(
                '<script type="text/javascript">' +
                  t[r + '_before'] +
                  '</script>'
              ).after(n.lastChild);
            r && (o.id = r + '-script'), (o.src = a), n.appendChild(o);
          });
        }),
        (TVE_Dash.send_ajax = function (t, n) {
          e.ajax({
            url: tve_dash_front.ajaxurl,
            xhrFields: { withCredentials: !0 },
            data: { action: 'tve_dash_front_ajax', tve_dash_data: t },
            dataType: 'json',
            type: 'post',
          }).done(function (t) {
            t &&
              e.isPlainObject(t) &&
              (t.__resources &&
                (t.__resources.css && TVE_Dash.ajax_load_css(t.__resources.css),
                t.__resources.js && TVE_Dash.ajax_load_js(t.__resources.js),
                delete t.__resources),
              e.each(t, function (e, t) {
                if ('function' != typeof n[e]) return !0;
                n[e].call(null, t);
              }));
          });
        }),
        (TVE_Dash.forceImageLoad = function (e) {
          Array.prototype.forEach.call(
            e.getElementsByTagName('img'),
            function (e) {
              e.getAttribute('src').includes('data:image') &&
                e.setAttribute(
                  'src',
                  e.getAttribute('data-opt-src') || e.getAttribute('data-src')
                );
            }
          );
        }),
        e(function () {
          (window.TVE_Dash = window.TVE_Dash || TVE_Dash),
            setTimeout(function () {
              var r = new e.Event('tve-dash.load');
              return (
                e(document).trigger(r),
                !e.isEmptyObject(t) &&
                  !(
                    !tve_dash_front.force_ajax_send && tve_dash_front.is_crawler
                  ) &&
                  (TVE_Dash.send_ajax(t, n), void (TVE_Dash.ajax_sent = !0))
              );
            });
        });
    })(r.$j);
  },
});
