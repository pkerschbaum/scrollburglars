!(function (e) {
  var t = {};
  function __webpack_require__(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return (
      e[i].call(r.exports, r, r.exports, __webpack_require__),
      (r.l = !0),
      r.exports
    );
  }
  (__webpack_require__.m = e),
    (__webpack_require__.c = t),
    (__webpack_require__.d = function (e, t, i) {
      __webpack_require__.o(e, t) ||
        Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (__webpack_require__.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (__webpack_require__.t = function (e, t) {
      if ((1 & t && (e = __webpack_require__(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (__webpack_require__.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          __webpack_require__.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (__webpack_require__.n = function (e) {
      var t =
        e && e.__esModule
          ? function getDefault() {
              return e.default;
            }
          : function getModuleExports() {
              return e;
            };
      return __webpack_require__.d(t, 'a', t), t;
    }),
    (__webpack_require__.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (__webpack_require__.p = ''),
    __webpack_require__((__webpack_require__.s = 14));
})([
  function (e, t) {
    e.exports = {
      conversations: { domain: 'conversations.app-us1.com' },
      diffuser: { domain: 'prism.app-us1.com' },
      tracking: { domain: 'trackcmp.net' },
      webpersonalization: { domain: 'wp-ui.app-us1.com' },
      cdnDomain: 'diffuser-cdn.app-us1.com',
    };
  },
  function (e, t, i) {
    var r = i(4);
    e.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (e, t) {
    e.exports = function (e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e;
    };
  },
  function (e, t, i) {
    var r = i(5);
    e.exports = r;
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t, i) {
    i(6);
  },
  function (e, t, i) {
    var r = i(1),
      n = i(7).f,
      o = Function.prototype,
      c = o.toString,
      s = /^\s*function ([^ (]*)/;
    !r ||
      'name' in o ||
      n(o, 'name', {
        configurable: !0,
        get: function () {
          try {
            return c.call(this).match(s)[1];
          } catch (e) {
            return '';
          }
        },
      });
  },
  function (e, t, i) {
    var r = i(1),
      n = i(8),
      o = i(12),
      c = i(13),
      s = Object.defineProperty;
    t.f = r
      ? s
      : function defineProperty(e, t, i) {
          if ((o(e), (t = c(t, !0)), o(i), n))
            try {
              return s(e, t, i);
            } catch (e) {}
          if ('get' in i || 'set' in i)
            throw TypeError('Accessors not supported');
          return 'value' in i && (e[t] = i.value), e;
        };
  },
  function (e, t, i) {
    var r = i(1),
      n = i(4),
      o = i(9);
    e.exports =
      !r &&
      !n(function () {
        return (
          7 !=
          Object.defineProperty(o('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, i) {
    var r = i(10),
      n = i(2),
      o = r.document,
      c = n(o) && n(o.createElement);
    e.exports = function (e) {
      return c ? o.createElement(e) : {};
    };
  },
  function (e, t, i) {
    (function (t) {
      var check = function (e) {
        return e && e.Math == Math && e;
      };
      e.exports =
        check('object' == typeof globalThis && globalThis) ||
        check('object' == typeof window && window) ||
        check('object' == typeof self && self) ||
        check('object' == typeof t && t) ||
        Function('return this')();
    }.call(this, i(11)));
  },
  function (e, t) {
    var i;
    i = (function () {
      return this;
    })();
    try {
      i = i || new Function('return this')();
    } catch (e) {
      'object' == typeof window && (i = window);
    }
    e.exports = i;
  },
  function (e, t, i) {
    var r = i(2);
    e.exports = function (e) {
      if (!r(e)) throw TypeError(String(e) + ' is not an object');
      return e;
    };
  },
  function (e, t, i) {
    var r = i(2);
    e.exports = function (e, t) {
      if (!r(e)) return e;
      var i, n;
      if (t && 'function' == typeof (i = e.toString) && !r((n = i.call(e))))
        return n;
      if ('function' == typeof (i = e.valueOf) && !r((n = i.call(e)))) return n;
      if (!t && 'function' == typeof (i = e.toString) && !r((n = i.call(e))))
        return n;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (e, t, i) {
    'use strict';
    i.r(t);
    i(3);
    var r = {
        loadScript: function loadScript(e, t) {
          var i = document.querySelector('head'),
            r = document.createElement('script'),
            n = !1;
          (r.type = 'text/javascript'),
            (r.charset = 'utf-8'),
            (r.src = e),
            (r.async = !0),
            t &&
              (r.onload = r.onreadystatechange =
                function () {
                  n ||
                    (this.readyState && 'complete' !== this.readyState) ||
                    ((n = !0), t());
                }),
            i.appendChild(r);
        },
        buildQueryParams: function buildQueryParams(e) {
          return Object.keys(e)
            .filter(function (t) {
              return e[t];
            })
            .map(function (t) {
              return t + '=' + encodeURIComponent(e[t]);
            })
            .join('&');
        },
        getQueryParam: function getQueryParam(e) {
          e = e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
          var t = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(
            window.location.search
          );
          return null === t ? '' : decodeURIComponent(t[1].replace(/\+/g, ' '));
        },
        getLocation: function getLocation() {
          return this.removeVgoParam(window.location.href);
        },
        getPathname: function getPathname() {
          return this.removeVgoParam(
            window.location.pathname +
              window.location.search +
              window.location.hash
          );
        },
        removeVgoParam: function removeVgoParam(e) {
          return e.replace(/vgo_ee=[^\&]+&?/, '').replace(/[?&]$/, '');
        },
        getReferrer: function getReferrer() {
          return document.referrer;
        },
        async: function async(e, t) {
          setTimeout(e, t);
        },
      },
      n = i(0),
      o = i.n(n);
    function _defineProperties(e, t) {
      for (var i = 0; i < t.length; i++) {
        var r = t[i];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var c = (function () {
      function Service(e, t) {
        !(function _classCallCheck(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, Service),
          (this._visitor = e),
          (this._settings = t || {});
      }
      return (
        (function _createClass(e, t, i) {
          return (
            t && _defineProperties(e.prototype, t),
            i && _defineProperties(e, i),
            e
          );
        })(Service, [
          { key: 'connect', value: function connect() {} },
          { key: 'update', value: function update() {} },
          {
            key: 'settings',
            get: function get() {
              return this._settings;
            },
          },
          {
            key: 'visitor',
            get: function get() {
              return this._visitor;
            },
          },
          {
            key: 'domain',
            get: function get() {
              var e = this.constructor.name.toLowerCase();
              return o.a[e].domain;
            },
          },
        ]),
        Service
      );
    })();
    function _typeof(e) {
      return (_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function _typeof(e) {
              return typeof e;
            }
          : function _typeof(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    function conversations_defineProperties(e, t) {
      for (var i = 0; i < t.length; i++) {
        var r = t[i];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function _possibleConstructorReturn(e, t) {
      return !t || ('object' !== _typeof(t) && 'function' != typeof t)
        ? (function _assertThisInitialized(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function _get(e, t, i) {
      return (_get =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function _get(e, t, i) {
              var r = (function _superPropBase(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = _getPrototypeOf(e));

                );
                return e;
              })(e, t);
              if (r) {
                var n = Object.getOwnPropertyDescriptor(r, t);
                return n.get ? n.get.call(i) : n.value;
              }
            })(e, t, i || e);
    }
    function _getPrototypeOf(e) {
      return (_getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function _setPrototypeOf(e, t) {
      return (_setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function tracking_typeof(e) {
      return (tracking_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function _typeof(e) {
              return typeof e;
            }
          : function _typeof(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    function _defineProperty(e, t, i) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = i),
        e
      );
    }
    function tracking_classCallCheck(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function tracking_defineProperties(e, t) {
      for (var i = 0; i < t.length; i++) {
        var r = t[i];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function tracking_possibleConstructorReturn(e, t) {
      return !t || ('object' !== tracking_typeof(t) && 'function' != typeof t)
        ? (function tracking_assertThisInitialized(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function tracking_get(e, t, i) {
      return (tracking_get =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function _get(e, t, i) {
              var r = (function tracking_superPropBase(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = tracking_getPrototypeOf(e));

                );
                return e;
              })(e, t);
              if (r) {
                var n = Object.getOwnPropertyDescriptor(r, t);
                return n.get ? n.get.call(i) : n.value;
              }
            })(e, t, i || e);
    }
    function tracking_getPrototypeOf(e) {
      return (tracking_getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function tracking_setPrototypeOf(e, t) {
      return (tracking_setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var s = 'trackid',
      a = 'prismid',
      u = 'url',
      f = 'email';
    function web_personalization_typeof(e) {
      return (web_personalization_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function _typeof(e) {
              return typeof e;
            }
          : function _typeof(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    function web_personalization_defineProperties(e, t) {
      for (var i = 0; i < t.length; i++) {
        var r = t[i];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function web_personalization_possibleConstructorReturn(e, t) {
      return !t ||
        ('object' !== web_personalization_typeof(t) && 'function' != typeof t)
        ? (function web_personalization_assertThisInitialized(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function web_personalization_get(e, t, i) {
      return (web_personalization_get =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function _get(e, t, i) {
              var r = (function web_personalization_superPropBase(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = web_personalization_getPrototypeOf(e));

                );
                return e;
              })(e, t);
              if (r) {
                var n = Object.getOwnPropertyDescriptor(r, t);
                return n.get ? n.get.call(i) : n.value;
              }
            })(e, t, i || e);
    }
    function web_personalization_getPrototypeOf(e) {
      return (web_personalization_getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function web_personalization_setPrototypeOf(e, t) {
      return (web_personalization_setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var l = {
      conversations: (function (e) {
        function Conversations(e, t) {
          var i;
          return (
            (function conversations_classCallCheck(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, Conversations),
            ((i = _possibleConstructorReturn(
              this,
              _getPrototypeOf(Conversations).call(this, e, t)
            ))._updateQueue = []),
            i
          );
        }
        return (
          (function _inherits(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && _setPrototypeOf(e, t);
          })(Conversations, e),
          (function conversations_createClass(e, t, i) {
            return (
              t && conversations_defineProperties(e.prototype, t),
              i && conversations_defineProperties(e, i),
              e
            );
          })(Conversations, [
            {
              key: 'connect',
              value: function connect() {
                var e = this;
                _get(
                  _getPrototypeOf(Conversations.prototype),
                  'connect',
                  this
                ).call(this);
                var t = 'https://'
                  .concat(o.a.cdnDomain, '/conversations/')
                  .concat('', 'widget.js');
                r.async(
                  function () {
                    r.loadScript(t, function () {
                      (window.conversationsGlobalObject.accountId =
                        e._visitor.accountId),
                        (window.conversationsGlobalObject.visitorId =
                          e._visitor.id),
                        e.visitor.email &&
                          (window.conversationsGlobalObject.email =
                            e._visitor.email),
                        r.async(function () {
                          return window.conversationsGlobalObject.connect();
                        }, 1),
                        e._processUpdateQueue();
                    });
                  },
                  this.settings.delay ? 1e3 * +this.settings.delay : 1
                );
              },
            },
            {
              key: '_queueUpdate',
              value: function _queueUpdate(e) {
                this._updateQueue.push(e);
              },
            },
            {
              key: '_processUpdateQueue',
              value: function _processUpdateQueue() {
                var e = this;
                this._updateQueue.forEach(function (t) {
                  return e.update(t);
                });
              },
            },
            {
              key: 'update',
              value: function update(e) {
                window.conversationsGlobalObject
                  ? window.conversationsGlobalObject.update(e)
                  : this._queueUpdate(e);
              },
            },
          ]),
          Conversations
        );
      })(c),
      tracking: (function (e) {
        function Tracking() {
          return (
            tracking_classCallCheck(this, Tracking),
            tracking_possibleConstructorReturn(
              this,
              tracking_getPrototypeOf(Tracking).apply(this, arguments)
            )
          );
        }
        return (
          (function tracking_inherits(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && tracking_setPrototypeOf(e, t);
          })(Tracking, e),
          (function tracking_createClass(e, t, i) {
            return (
              t && tracking_defineProperties(e.prototype, t),
              i && tracking_defineProperties(e, i),
              e
            );
          })(Tracking, [
            {
              key: 'connect',
              value: function connect() {
                var e;
                tracking_get(
                  tracking_getPrototypeOf(Tracking.prototype),
                  'connect',
                  this
                ).call(this);
                var t =
                  (_defineProperty((e = {}), s, this.visitor.accountId),
                  _defineProperty(e, a, this.visitor.id),
                  _defineProperty(e, u, this.visitor.url),
                  e);
                this.visitor.email && (t[f] = this.visitor.email);
                var i = r.buildQueryParams(t),
                  n = 'https://'
                    .concat(this.domain, '/t_prism_sitemessages.php?')
                    .concat(i);
                r.loadScript(n);
              },
            },
          ]),
          Tracking
        );
      })(c),
      wp: (function (e) {
        function WebPersonalization(e) {
          var t;
          return (
            (function web_personalization_classCallCheck(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, WebPersonalization),
            ((t = web_personalization_possibleConstructorReturn(
              this,
              web_personalization_getPrototypeOf(WebPersonalization).call(
                this,
                e
              )
            ))._updateQueue = []),
            t
          );
        }
        return (
          (function web_personalization_inherits(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && web_personalization_setPrototypeOf(e, t);
          })(WebPersonalization, e),
          (function web_personalization_createClass(e, t, i) {
            return (
              t && web_personalization_defineProperties(e.prototype, t),
              i && web_personalization_defineProperties(e, i),
              e
            );
          })(WebPersonalization, [
            {
              key: 'connect',
              value: function connect() {
                var e = this;
                web_personalization_get(
                  web_personalization_getPrototypeOf(
                    WebPersonalization.prototype
                  ),
                  'connect',
                  this
                ).call(this);
                var t = 'https://'.concat(this.domain, '/wp-controller.js');
                r.loadScript(t, function () {
                  window.wpGlobalObject &&
                    ((window.wpGlobalObject.accountId = e.visitor.accountId),
                    (window.wpGlobalObject.visitorId = e.visitor.id),
                    (window.wpGlobalObject.url = e.visitor.url),
                    e.visitor.email &&
                      (window.wpGlobalObject.email = e.visitor.email),
                    window.wpGlobalObject.connect(),
                    e._processUpdateQueue());
                });
              },
            },
            {
              key: '_queueUpdate',
              value: function _queueUpdate(e) {
                this._updateQueue.push(e);
              },
            },
            {
              key: '_processUpdateQueue',
              value: function _processUpdateQueue() {
                var e = this;
                this._updateQueue.forEach(function (t) {
                  return e.update(t);
                });
              },
            },
            {
              key: 'update',
              value: function update(e) {
                window.wpGlobalObject
                  ? window.wpGlobalObject.update(e)
                  : this._queueUpdate(e);
              },
            },
          ]),
          WebPersonalization
        );
      })(c),
    };
    function visitor_defineProperties(e, t) {
      for (var i = 0; i < t.length; i++) {
        var r = t[i];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var p = (function () {
      function Visitor(e) {
        !(function visitor_classCallCheck(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, Visitor),
          (this._id = null),
          (this._accountId = e),
          (this._email = null),
          (this._referrer = r.getReferrer()),
          (this._url = r.getLocation()),
          (this._hasWhitelistedServices = !1),
          (this._whitelistedServices = []),
          (this._addedServices = []),
          (this._processedServices = {}),
          (this._trackByDefault = !1);
      }
      return (
        (function visitor_createClass(e, t, i) {
          return (
            t && visitor_defineProperties(e.prototype, t),
            i && visitor_defineProperties(e, i),
            e
          );
        })(Visitor, [
          {
            key: 'hasProcessedService',
            value: function hasProcessedService(e) {
              return void 0 !== this.processedServices[e];
            },
          },
          {
            key: 'registerProcessedService',
            value: function registerProcessedService(e, t) {
              this.processedServices[e] = t;
            },
          },
          {
            key: 'setWhitelistedServices',
            value: function setWhitelistedServices(e) {
              var t = this;
              (this.hasWhitelistedServices = !0),
                e &&
                  ('string' == typeof e && (e = e.split(',')),
                  e.forEach(function (e) {
                    void 0 !== l[e] &&
                      -1 === t.whitelistedServices.indexOf(e) &&
                      t.whitelistedServices.push(e);
                  }));
            },
          },
          {
            key: 'updateUrl',
            value: function updateUrl(e) {
              this.url = e || r.getLocation();
            },
          },
          {
            key: 'id',
            get: function get() {
              return this._id;
            },
            set: function set(e) {
              this._id = e;
            },
          },
          {
            key: 'email',
            get: function get() {
              return this._email;
            },
            set: function set(e) {
              this._email = e;
            },
          },
          {
            key: 'referrer',
            get: function get() {
              return this._referrer;
            },
            set: function set(e) {
              this._referrer = e;
            },
          },
          {
            key: 'accountId',
            get: function get() {
              return this._accountId;
            },
          },
          {
            key: 'url',
            get: function get() {
              return this._url;
            },
            set: function set(e) {
              this._url = e;
            },
          },
          {
            key: 'trackByDefault',
            get: function get() {
              return this._trackByDefault;
            },
            set: function set(e) {
              var t = e;
              switch (e) {
                case 'true':
                  t = !0;
                  break;
                case 'false':
                  t = !1;
              }
              this._trackByDefault = t;
            },
          },
          {
            key: 'whitelistedServices',
            get: function get() {
              return this._whitelistedServices;
            },
            set: function set(e) {
              this._whitelistedServices = e;
            },
          },
          {
            key: 'addedServices',
            get: function get() {
              return this._addedServices;
            },
          },
          {
            key: 'processedServices',
            get: function get() {
              return this._processedServices;
            },
          },
          {
            key: 'hasWhitelistedServices',
            get: function get() {
              return this._hasWhitelistedServices;
            },
            set: function set(e) {
              this._hasWhitelistedServices = !!e;
            },
          },
        ]),
        Visitor
      );
    })();
    function getDiffuserCookieName(e) {
      return ''.concat('prism_').concat(e);
    }
    function getDiffuserCookieExpiration() {
      return new Date(new Date().getTime() + 2592e6);
    }
    function setDiffuserCookie(e, t) {
      var i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        r = getDiffuserCookieName(e),
        n = getDiffuserCookieExpiration(),
        o =
          '.' +
          window.location.hostname
            .split('.')
            .slice(-2 - i)
            .join('.');
      if (
        ((document.cookie = ''
          .concat(r, '=')
          .concat(t, ';domain=')
          .concat(o, ';path=/;expires=')
          .concat(n.toUTCString())),
        e)
      ) {
        var c = getDiffuserCookie(e);
        if (!c && i < 10) return setDiffuserCookie(e, t, i + 1);
      }
    }
    function getDiffuserCookie(e) {
      if (!e) throw 'No account id';
      return (
        (function getCookies() {
          return document.cookie.split('; ').reduce(function (e, t) {
            var i = t.split('=');
            return (e[i[0]] = i[1]), e;
          }, {});
        })()[getDiffuserCookieName(e)] || ''
      );
    }
    function diffuser_defineProperty(e, t, i) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = i),
        e
      );
    }
    function diffuser_defineProperties(e, t) {
      for (var i = 0; i < t.length; i++) {
        var r = t[i];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var _ = 'a',
      d = 'e',
      y = 'r',
      h = 't',
      v = 'u',
      b = 'ee',
      g = (function () {
        function Diffuser(e) {
          if (
            ((function diffuser_classCallCheck(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, Diffuser),
            (this.visitorGlobalObjectAlias = e),
            (this._visitors = {}),
            (this._accountId = null),
            (this._settings = {}),
            (this.initialized = !1),
            (this.updateQueue = []),
            void 0 === window[e])
          )
            throw 'Embed code is not configured';
          (this._hasProcessedSingleton = { conversations: !1 }),
            (this._queue = window[e].q);
        }
        return (
          (function diffuser_createClass(e, t, i) {
            return (
              t && diffuser_defineProperties(e.prototype, t),
              i && diffuser_defineProperties(e, i),
              e
            );
          })(Diffuser, [
            {
              key: 'setVisitorId',
              value: function setVisitorId(e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : '',
                  i = this._getVisitor(t);
                (i.id = e), setDiffuserCookie(t, e);
              },
            },
            {
              key: 'setEmail',
              value: function setEmail(e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : '',
                  i = this._getVisitor(t);
                i.email = e;
              },
            },
            {
              key: 'setWhitelistedServices',
              value: function setWhitelistedServices(e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : '',
                  i = this._getVisitor(t);
                i.setWhitelistedServices(e);
              },
            },
            {
              key: 'connect',
              value: function connect() {
                this._processQueue(), this._replaceVisitorGlobalObject();
              },
            },
            {
              key: '_getVisitor',
              value: function _getVisitor(e) {
                if (!e && !this._accountId) throw 'Account id is not set';
                return this._visitors[e || this._accountId];
              },
            },
            {
              key: '_processQueue',
              value: function _processQueue() {
                var e = this;
                this.queue.forEach(function (t) {
                  e._processJob.apply(e, t);
                });
              },
            },
            {
              key: '_replaceVisitorGlobalObject',
              value: function _replaceVisitorGlobalObject() {
                window[this.visitorGlobalObjectAlias] =
                  this._processJob.bind(this);
              },
            },
            {
              key: '_getMethodNameFromJobName',
              value: function _getMethodNameFromJobName(e) {
                return (
                  (e = e.charAt(0).toUpperCase() + e.slice(1)),
                  ''.concat('_execute').concat(e)
                );
              },
            },
            {
              key: '_processJob',
              value: function _processJob() {
                var e = Array.prototype.slice.call(arguments),
                  t = e.shift(),
                  i = this._getMethodNameFromJobName(t);
                if (void 0 === this[i]) throw 'Invalid method';
                this[i].apply(this, e);
              },
            },
            {
              key: '_getServicesToProcess',
              value: function _getServicesToProcess(e) {
                return e.addedServices.length
                  ? e.addedServices
                  : e.hasWhitelistedServices
                  ? e.whitelistedServices
                  : Object.keys(l);
              },
            },
            {
              key: '_connectToNewService',
              value: function _connectToNewService(e, t) {
                if (void 0 !== this._hasProcessedSingleton[t]) {
                  if (this._hasProcessedSingleton[t]) return;
                  this._hasProcessedSingleton[t] = !0;
                }
                var i = new l[t](e, this.settings[t]);
                e.registerProcessedService(t, i), i.connect();
              },
            },
            {
              key: '_setInitialized',
              value: function _setInitialized() {
                (this.initialized = !0), this._processUpdateQueue();
              },
            },
            {
              key: '_processServices',
              value: function _processServices(e) {
                var t = this;
                if (!e || !e.id) return this._setInitialized(), !1;
                this._getServicesToProcess(e).forEach(function (i) {
                  e.hasProcessedService(i) || t._connectToNewService(e, i);
                }),
                  this._setInitialized();
              },
            },
            {
              key: '_executeSetAccount',
              value: function _executeSetAccount(e) {
                this._visitors[e] || (this._visitors[e] = new p(e)),
                  (this._accountId = e);
              },
            },
            {
              key: '_executeSetTrackByDefault',
              value: function _executeSetTrackByDefault(e) {
                this._getVisitor().trackByDefault = e;
              },
            },
            {
              key: '_executeSetEmail',
              value: function _executeSetEmail(e) {
                this._getVisitor().email = e;
              },
            },
            {
              key: '_executeAddService',
              value: function _executeAddService(e) {
                var t = this._getVisitor();
                void 0 !== l[e] &&
                  -1 === t.addedServices.indexOf(e) &&
                  t.addedServices.push(e);
              },
            },
            {
              key: '_executeProcess',
              value: function _executeProcess(e) {
                var t = this,
                  i = this._getVisitor();
                (!1 === i.trackByDefault && 'allowTracking' !== e) ||
                  r.async(function () {
                    t._makeRequestToDiffuser(i, t._processServices.bind(t, i));
                  }, 1);
              },
            },
            {
              key: '_makeRequestToDiffuser',
              value: function _makeRequestToDiffuser(e, t) {
                var i,
                  n =
                    (diffuser_defineProperty((i = {}), _, e.accountId),
                    diffuser_defineProperty(i, d, e.email),
                    diffuser_defineProperty(i, b, r.getQueryParam('vgo_ee')),
                    diffuser_defineProperty(i, v, e.url),
                    diffuser_defineProperty(i, y, e.referrer),
                    diffuser_defineProperty(
                      i,
                      h,
                      getDiffuserCookie(e.accountId)
                    ),
                    i);
                this._removeQueryParam();
                var o = r.buildQueryParams(n),
                  c = 'https://'.concat(this.domain, '?').concat(o);
                r.loadScript(c, t);
              },
            },
            {
              key: '_queueUpdate',
              value: function _queueUpdate(e) {
                this.updateQueue.push(e);
              },
            },
            {
              key: '_processUpdateQueue',
              value: function _processUpdateQueue() {
                var e = this;
                this.updateQueue.forEach(function (t) {
                  return e._executeUpdate(t);
                }),
                  (this.updateQueue = []);
              },
            },
            {
              key: '_executeUpdate',
              value: function _executeUpdate(e) {
                var t = this;
                e || this.initialized
                  ? Object.values(this._visitors).map(function (i) {
                      return t._updateVisitor(i, e);
                    })
                  : this._queueUpdate(r.getLocation());
              },
            },
            {
              key: '_updateVisitor',
              value: function _updateVisitor(e, t) {
                var i = this;
                (e.whitelistedServices = []), e.updateUrl(t);
                var r = e.processedServices;
                this._makeRequestToDiffuser(e, function () {
                  if (!e || !e.id) return i._setInitialized(), !1;
                  var t = i._getServicesToProcess(e),
                    n = Object.keys(r);
                  t.concat(
                    n.filter(function (e) {
                      return t.indexOf(e) < 0;
                    })
                  ).forEach(function (o) {
                    if (-1 === n.indexOf(o)) i._connectToNewService(e, o);
                    else {
                      var c = -1 !== t.indexOf(o);
                      r[o].update(c);
                    }
                  });
                });
              },
            },
            {
              key: '_removeQueryParam',
              value: function _removeQueryParam() {
                -1 !== window.location.href.indexOf('vgo_ee') &&
                  window.history.replaceState(
                    {},
                    document.title,
                    r.getPathname()
                  );
              },
            },
            {
              key: '_executeSettings',
              value: function _executeSettings(e) {
                this.settings = e;
              },
            },
            {
              key: 'settings',
              get: function get() {
                return this._settings;
              },
              set: function set(e) {
                this._settings = e;
              },
            },
            {
              key: 'accountId',
              get: function get() {
                return this._accountId;
              },
            },
            {
              key: 'visitorGlobalObjectAlias',
              get: function get() {
                return this._visitorGlobalObjectAlias;
              },
              set: function set(e) {
                this._visitorGlobalObjectAlias = e;
              },
            },
            {
              key: 'queue',
              get: function get() {
                return this._queue;
              },
              set: function set(e) {
                this._queue = e;
              },
            },
            {
              key: 'domain',
              get: function get() {
                var e = this.constructor.name.toLowerCase();
                return o.a[e].domain;
              },
            },
          ]),
          Diffuser
        );
      })();
    !window.prismGlobalObjectAlias &&
      window.visitorGlobalObjectAlias &&
      (window.prismGlobalObjectAlias = window.visitorGlobalObjectAlias),
      window.prismGlobalObjectAlias &&
        !window.visitorGlobalObjectAlias &&
        (window.visitorGlobalObjectAlias = window.prismGlobalObjectAlias),
      window.pgo && (window[window.visitorGlobalObjectAlias] = window.pgo),
      window.visitorGlobalObject ||
        ((window.visitorGlobalObject = new g(window.visitorGlobalObjectAlias)),
        window.visitorGlobalObject.connect());
  },
]);
