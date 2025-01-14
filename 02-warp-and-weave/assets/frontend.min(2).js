/*! Thrive Themes 2021-02-15
 * http://www.thrivethemes.com/
 * Copyright (c) 2021 Thrive Themes */

'use strict';
function _possibleConstructorReturn(t, e) {
  return !e || ('object' !== _typeof(e) && 'function' != typeof e)
    ? _assertThisInitialized(t)
    : e;
}
function _assertThisInitialized(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function _getPrototypeOf(t) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function _inherits(t, e) {
  if ('function' != typeof e && null !== e)
    throw new TypeError('Super expression must either be null or a function');
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function (t, e) {
      return (t.__proto__ = e), t;
    })(t, e);
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
  for (var i = 0; i < e.length; i++) {
    var n = e[i];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function _createClass(t, e, i) {
  return (
    e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t
  );
}
function _typeof(t) {
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
!(function (c) {
  var d,
    f,
    o,
    p,
    m,
    s = { '.js': [], '.json': [], '.css': [], '.html': [] },
    l = 'function' == typeof require ? require : null;
  return (
    (p = function (t) {
      var e = new Error("Could not find module '" + t + "'");
      return (e.code = 'MODULE_NOT_FOUND'), e;
    }),
    (m = function (t, e, i) {
      var n, o;
      if ('function' == typeof t[e + i]) return e + i;
      for (n = 0; (o = s[i][n]); ++n)
        if ('function' == typeof t[e + o]) return e + o;
      return null;
    }),
    (d = function (t, e, i, n, o, s) {
      var r, a, c, l, u, h;
      for (
        ('.' !== (r = (i = i.split('/')).pop()) && '..' !== r) ||
        (i.push(r), (r = ''));
        null != (a = i.shift());

      )
        if (
          a &&
          '.' !== a &&
          ('..' === a
            ? ((t = e.pop()), (s = s.slice(0, s.lastIndexOf('/'))))
            : (e.push(t), (t = t[a]), (s += '/' + a)),
          !t)
        )
          throw p(n);
      if (
        (r &&
          'function' != typeof t[r] &&
          ((h = m(t, r, '.js')) || (h = m(t, r, '.json')),
          h || (h = m(t, r, '.css')),
          h || (h = m(t, r, '.html')),
          h
            ? (r = h)
            : 2 !== o &&
              'object' === _typeof(t[r]) &&
              (e.push(t), (t = t[r]), (s += '/' + r), (r = ''))),
        !r)
      )
        return 1 !== o && t[':mainpath:']
          ? d(t, e, t[':mainpath:'], n, 1, s)
          : d(t, e, 'index', n, 2, s);
      if (!(u = t[r])) throw p(n);
      return u.hasOwnProperty('module')
        ? u.module.exports
        : ((c = {}),
          (u.module = l = { exports: c, id: s + '/' + r }),
          u.call(c, c, l, f(t, e, s)),
          l.exports);
    }),
    (o = function (t, e, i, n) {
      var o,
        s = i,
        r = i.charAt(0),
        a = 0;
      if ('/' === r) {
        if (((s = s.slice(1)), !(t = c['/']))) {
          if (l) return l(i);
          throw p(i);
        }
        (n = '/'), (e = []);
      } else if ('.' !== r) {
        if (((o = s.split('/', 1)[0]), !(t = c[o]))) {
          if (l) return l(i);
          throw p(i);
        }
        (n = o),
          (e = []),
          (s = s.slice(o.length + 1)) ||
            (a = (s = t[':mainpath:']) ? 1 : ((s = 'index'), 2));
      }
      return d(t, e, s, i, a, n);
    }),
    (f = function (e, i, n) {
      return function (t) {
        return o(e, [].concat(i), t, n);
      };
    })(c, [], '')
  );
})({
  workspace: {
    inc: {
      assets: {
        js: {
          frontend: {
            'jquery-plugins.js': function (t, e, i) {
              var s;
              (s = ThriveTheme.$),
                (e.exports = {
                  isOnScreen: function () {
                    var t =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : ['top', 'right', 'bottom', 'left'];
                    t = 'string' == typeof t ? [t] : t;
                    var e = s(window),
                      i = { top: e.scrollTop(), left: e.scrollLeft() },
                      n = this.offset(),
                      o = !0;
                    return (
                      (i.right = i.left + e.width()),
                      (i.bottom = i.top + e.height()),
                      (n.right = n.left + this.outerWidth()),
                      (n.bottom = n.top + this.outerHeight()),
                      t.forEach(function (t) {
                        switch (t) {
                          case 'top':
                            o = o && n.top < i.bottom && n.top > i.top;
                            break;
                          case 'bottom':
                            o = o && n.bottom < i.bottom && n.bottom > i.top;
                            break;
                          case 'right':
                            o = o && n.right < i.right && n.right > i.left;
                            break;
                          case 'left':
                            o = o && n.left > i.left && n.left < i.right;
                            break;
                          default:
                            o = !(
                              i.right < n.left ||
                              i.left > n.right ||
                              i.bottom < n.top ||
                              i.top > n.bottom
                            );
                        }
                      }),
                      o
                    );
                  },
                });
            },
            'main.js': function (t, e, i) {
              var a, n, o, s, r;
              (window.ThriveTheme = { $: jQuery.noConflict() }),
                (a = ThriveTheme.$),
                (n = 'undefined' == typeof TCB_Front ? {} : TCB_Front),
                (o = i('./models/comments')),
                (s = i('./models/dynamic-video')),
                (r = i('./models/dynamic-audio')),
                i('./woo')(a, window, n).initializeWooCommerceFunctionality(),
                n &&
                  n.identifiers &&
                  ((n.identifiers.parentStickyParent += ',.theme-section'),
                  (n.identifiers.pageStickyParent +=
                    ',#wrapper,.theme-section'),
                  (n.identifiers.stickyParentType += ',.theme-section'),
                  (n.identifiers.parentZindexFix = ''.concat(
                    n.identifiers.parentZindexFix
                      ? n.identifiers.parentZindexFix + ','
                      : '',
                    '.theme-section'
                  ))),
                a.fn.extend(i('./jquery-plugins')),
                (ThriveTheme.localize = thrive_front_localize),
                (ThriveTheme.utils = i('./utils/general')),
                (ThriveTheme.initElements = function () {
                  (ThriveTheme.$sections = {
                    sidebar: a('#theme-sidebar-section'),
                    content: a('#theme-content-section'),
                  }),
                    (ThriveTheme.hasAdminBar =
                      window.document.body.classList.contains('admin-bar')),
                    (ThriveTheme.sidebar = i('./models/sidebar')(
                      a,
                      ThriveTheme.$sections.sidebar,
                      TCB_Front
                    )),
                    (ThriveTheme.progressBar = i('./models/progress-bar')(
                      a,
                      a('.thrive-progress-bar')
                    ));
                }),
                a(function () {
                  var t, e;
                  ThriveTheme.initElements(),
                    tve_frontend_options.is_editor_page
                      ? ((e = TVE.CONST.theme.is_theme_template
                          ? ((t = ThriveTheme.localize.tar_post_url),
                            '.tar-redirect')
                          : ((t = ThriveTheme.localize.template_url),
                            '.theme-template-redirect')),
                        TVE.main.sidebar_extra.$el.find(e).attr('href', t))
                      : (a('.comment-form').each(function (t, e) {
                          var i = a(e);
                          0 === i.closest('.woocommerce-Reviews').length &&
                            new o(i);
                        }),
                        a('.thrv_responsive_video[data-type=dynamic]').each(
                          function (t, e) {
                            new s(a(e));
                          }
                        ),
                        a('.thrv_audio[data-type=dynamic]').each(function (
                          t,
                          e
                        ) {
                          new r(a(e));
                        }),
                        a('.thrv_contents_table')
                          .not('#tve_editor .thrv_contents_table')
                          .tableOfContents({ target: '.tcb-post-content' })
                          .addClass('tve-rendered'),
                        a('.tve-dynamic-toc')
                          .tableOfContents({ target: '.tcb-post-content' })
                          .addClass('tve-rendered'),
                        n.toc && n.toc.initToc(n.$body)),
                    thrive_front_localize.is_singular ||
                      a('body')
                        .on(
                          'tcb_post_list_identifier.tcb',
                          '#main',
                          function (t) {
                            return (t.identifier = '#main'), t;
                          }
                        )
                        .on(
                          'tcb_pagination_extra_classes.tcb',
                          '#main',
                          function (t) {
                            var e = i('./models/pagination-infinite-scroll');
                            return (
                              (t.paginationClasses = { infinite_scroll: e }), t
                            );
                          }
                        )
                        .on(
                          'tcb_after_numeric_pagination_render',
                          '.tcb-pagination[data-list="#main"]',
                          function (t, e) {
                            var i =
                                thrive_front_localize.pagination_url.template,
                              n = function (t) {
                                return 1 === parseInt(t)
                                  ? thrive_front_localize.pagination_url.base
                                  : i.replace('[thrive_page_number]', t);
                              };
                            for (var o in (e.$pageNumberContainer
                              .find('.tcb-pagination-link')
                              .each(function (t, e) {
                                a(e).find('a').attr('href', n(e.dataset.page));
                              }),
                            e.buttons)) {
                              var s = e.buttons[o],
                                r = s.hasClass(
                                  'tcb-disabled-pagination-button'
                                );
                              s.find('a').attr(
                                'href',
                                r ? '' : n(s.attr('data-page'))
                              );
                            }
                          }
                        ),
                    a(window).trigger('theme.frontend.init');
                });
            },
            models: {
              'comments.js': function (t, e, i) {
                var s, r, n, a, o;
                (s = ThriveTheme.$),
                  (r = i('../utils/validation')),
                  (a = '.' + (n = 'error-message')),
                  (o = (function () {
                    function e(t) {
                      _classCallCheck(this, e),
                        (this.$form = t),
                        this.addErrorFields(),
                        this.$form.submit(function (t) {
                          e.submitAction(t, s(this));
                        });
                    }
                    return (
                      _createClass(
                        e,
                        [
                          {
                            key: 'addErrorFields',
                            value: function () {
                              this.$form
                                .find(
                                  ':input:visible:not(input[type=radio]),textarea:visible'
                                )
                                .after('<span class="' + n + '"></span>');
                            },
                          },
                        ],
                        [
                          {
                            key: 'submitAction',
                            value: function (t, e) {
                              var n = JSON.parse(
                                  e
                                    .closest('#comments')
                                    .find('.thrive-theme-comments-error-msg')
                                    .html()
                                ),
                                i = e.find(
                                  '.comment-form-text textarea, .comment-form-item :input'
                                ),
                                o = !0;
                              if (
                                (e.find(a).hide(),
                                i.each(function (t, e) {
                                  var i = s(this).next(a);
                                  e.required &&
                                    !e.value &&
                                    (i.text(n.required).show(), (o = !1)),
                                    r.validateField(
                                      e.name,
                                      e.value,
                                      e.required
                                    ) || (i.text(n[e.name]).show(), (o = !1)),
                                    0 < i.text().length &&
                                      e.setAttribute(
                                        'class',
                                        (
                                          (e.getAttribute('class') || '') +
                                          ' comment-it-error'
                                        ).trim()
                                      );
                                }),
                                !o)
                              )
                                return (
                                  t.preventDefault(), t.stopPropagation(), !1
                                );
                              i.each(function (t, e) {
                                e.value = r.escapeHtml(e.value);
                              });
                            },
                          },
                        ]
                      ),
                      e
                    );
                  })()),
                  (e.exports = o);
              },
              'dynamic-audio.js': function (t, e, i) {
                var n, o;
                (n = ThriveTheme.$),
                  (o = (function () {
                    function e(t) {
                      _classCallCheck(this, e),
                        (this.$dynamicAudio = t),
                        this.initAttributes(),
                        this.makeAutoplayAudio();
                    }
                    return (
                      _createClass(e, [
                        {
                          key: 'initAttributes',
                          value: function () {
                            var i = this;
                            this.$dynamicAudio
                              .find('.tve_audio_container')
                              .each(function (t, e) {
                                n.each(e.attributes, function (t, e) {
                                  !['class', 'data-css', 'style'].includes(
                                    e.name
                                  ) &&
                                    e.value.length &&
                                    i.$dynamicAudio.attr(e.name, e.value);
                                });
                              });
                          },
                        },
                        {
                          key: 'makeAutoplayAudio',
                          value: function () {
                            0 < arguments.length && void 0 !== arguments[0]
                              ? arguments[0]
                              : ThriveTheme.localize.is_editor;
                            this.$dynamicAudio.find('audio').each(function () {
                              var t = this;
                              if (this.hasAttribute('data-autoplay')) {
                                var e = this.play();
                                null !== e &&
                                  e.catch(function () {
                                    t.play();
                                  });
                              }
                            }),
                              this.$dynamicAudio
                                .find(
                                  'iframe[data-provider="soundcloud"][data-autoplay="1"]'
                                )
                                .each(function () {
                                  var t =
                                    this.getAttribute('src').replace(
                                      '&auto_play=0',
                                      ''
                                    ) + '&auto_play=1';
                                  this.setAttribute('src', t);
                                });
                          },
                        },
                        {
                          key: 'getData',
                          value: function (t) {
                            return this.$dynamicAudio.attr('data-'.concat(t));
                          },
                        },
                      ]),
                      e
                    );
                  })()),
                  (e.exports = o);
              },
              'dynamic-video.js': function (t, e, i) {
                var n, o;
                (n = ThriveTheme.$),
                  (o = (function () {
                    function e(t) {
                      _classCallCheck(this, e),
                        (this.$dynamicVideo = t),
                        this.initAttributes(),
                        this.makeAutoplayVideo();
                    }
                    return (
                      _createClass(e, [
                        {
                          key: 'initAttributes',
                          value: function () {
                            var i = this;
                            this.$dynamicVideo
                              .find('.tve_responsive_video_container')
                              .each(function (t, e) {
                                n.each(e.attributes, function (t, e) {
                                  !['class', 'data-css', 'style'].includes(
                                    e.name
                                  ) &&
                                    e.value.length &&
                                    i.$dynamicVideo.attr(e.name, e.value);
                                });
                              });
                          },
                        },
                        {
                          key: 'makeAutoplayVideo',
                          value: function () {
                            var t,
                              e,
                              i =
                                0 < arguments.length && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : ThriveTheme.localize.is_editor,
                              n = this.$dynamicVideo.find('iframe, video'),
                              o = this.getData('provider');
                            if (!i && '1' === this.getData('autoplay')) {
                              switch (o) {
                                case 'youtube':
                                case 'vimeo':
                                  t = '&autoplay=1';
                                  break;
                                case 'wistia':
                                  t = '&autoPlay=true';
                              }
                              switch (o) {
                                case 'youtube':
                                  t += '&mute=1';
                                  break;
                                case 'vimeo':
                                  t += '&muted=1';
                                  break;
                                case 'wistia':
                                  t += '&muted=true';
                              }
                              if (
                                'youtube' === o ||
                                'vimeo' === o ||
                                'wistia' === o
                              )
                                (e = this.getData('src')) &&
                                  0 !== e.length &&
                                  -1 === e.indexOf(t) &&
                                  ('?' === e.charAt(e.length - 1) &&
                                    (t = t.substr(1)),
                                  n.attr('src', e + t));
                              else if ('custom' === o || 'self' === o) {
                                var s = n.get(0);
                                (s.muted = !0), s.paused && s.play();
                              }
                            }
                          },
                        },
                        {
                          key: 'getData',
                          value: function (t) {
                            return this.$dynamicVideo.attr('data-'.concat(t));
                          },
                        },
                      ]),
                      e
                    );
                  })()),
                  (e.exports = o);
              },
              'pagination-infinite-scroll.js': function (t, e, i) {
                var n, o;
                (n = ThriveTheme.$),
                  (o = (function (t) {
                    function i(t, e) {
                      return (
                        _classCallCheck(this, i),
                        _possibleConstructorReturn(
                          this,
                          _getPrototypeOf(i).call(this, t, e)
                        )
                      );
                    }
                    return (
                      _inherits(i, TCB_Front.Pagination),
                      _createClass(i, [
                        {
                          key: 'addLoadListeners',
                          value: function () {
                            var t = this;
                            n(window).scroll(function () {
                              t.list.$element.isOnScreen('bottom') && t.load();
                            });
                          },
                        },
                        {
                          key: 'load',
                          value: function () {
                            var e = this;
                            if (!this.isLoading()) {
                              this.enableLoading('load-bot');
                              var t = this.list.listArgs;
                              (t.query.paged += 1),
                                this.list.getItems(function (t) {
                                  e.list.insertItems(t), e.disableLoading();
                                }, t);
                            }
                          },
                        },
                        { key: 'render', value: function () {} },
                      ]),
                      i
                    );
                  })()),
                  (e.exports = o);
              },
              'progress-bar.js': function (t, e, i) {
                e.exports = function (i, t) {
                  var n =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : window,
                    o = i(window),
                    s = i(document),
                    r = i('body'),
                    a = i('#thrive-header');
                  return new ((function () {
                    function e() {
                      var t =
                        0 < arguments.length && void 0 !== arguments[0]
                          ? arguments[0]
                          : i();
                      _classCallCheck(this, e),
                        (this.$element = t),
                        (this.$postContent = i(
                          '.tcb-post-content:not(.tcb-post-list .tcb-post-content)'
                        )),
                        (this.$countdown = i(
                          'span[data-shortcode="thrive_remaining_time"]'
                        )),
                        (this.prevScroll = 0),
                        this.$postContent.length &&
                          ((this.postContentOffsetTop =
                            this.$postContent.offset().top),
                          'undefined' != typeof ResizeObserver &&
                            new ResizeObserver(
                              this.initialState.bind(this)
                            ).observe(this.$postContent[0]),
                          this.init());
                    }
                    return (
                      _createClass(e, [
                        {
                          key: 'init',
                          value: function () {
                            var t = this;
                            this.initialState(),
                              n.tve_frontend_options.is_editor_page ||
                                (this.setPosition(),
                                o
                                  .off('scroll.progress')
                                  .on('scroll.progress', function () {
                                    (t.scrollTop = s.scrollTop()), t.onScroll();
                                  })
                                  .trigger('scroll.progress'));
                          },
                        },
                        {
                          key: 'initialState',
                          value: function () {
                            var t =
                              this.$postContent[0].getBoundingClientRect();
                            (this.contentTop =
                              t.top - o.height() + s.scrollTop()),
                              (this.totalDistance = t.bottom - t.top),
                              (this.totalMinutes =
                                ThriveTheme.utils.readingMinutes(
                                  this.$postContent
                                )),
                              this.setCountdown(0);
                          },
                        },
                        {
                          key: 'onScroll',
                          value: function () {
                            if (this.isPostContentIntoView()) {
                              var t =
                                (100 * (this.scrollTop - this.contentTop)) /
                                this.totalDistance;
                              this.setProgress(t),
                                this.setCountdown(t),
                                this.setPosition(),
                                (this.scrollDir =
                                  this.scrollTop >= this.prevScroll
                                    ? 'Down'
                                    : 'Up'),
                                (this.prevScroll = this.scrollTop);
                            }
                            0 === this.scrollTop && this.setProgress(0),
                              this.toggleBar();
                          },
                        },
                        {
                          key: 'toggleBar',
                          value: function (t) {
                            if (void 0 === t)
                              if (
                                'under' === this.$element.attr('data-position')
                              ) {
                                var e =
                                  a.hasClass('tve-scroll-sticky') ||
                                  (a.hasClass('tve-scroll-appear') &&
                                    'Up' === this.scrollDir);
                                t =
                                  0 !== this.scrollTop &&
                                  e &&
                                  parseInt(a.css('top')) >= r.offset().top;
                              } else t = 0 !== this.scrollTop;
                            this.$element.toggleClass('show', t);
                          },
                        },
                        {
                          key: 'setProgress',
                          value: function (t) {
                            this.$element.attr('value', t);
                          },
                        },
                        {
                          key: 'setCountdown',
                          value: function (t) {
                            if (this.$countdown.length) {
                              var e =
                                  0 === t
                                    ? this.totalMinutes
                                    : this.totalMinutes -
                                      Math.floor(this.totalMinutes * (t / 100)),
                                i = a.find(
                                  '.thrive-symbol-shortcode-scroll span[data-shortcode="thrive_remaining_time"]'
                                );
                              i.length &&
                                (this.$countdown = this.$countdown.add(i)),
                                this.$countdown.html(e <= 0 ? '<1' : e);
                            }
                          },
                        },
                        {
                          key: 'setPosition',
                          value: function () {
                            var t = TCB_Front.bodyOffsetTop(),
                              e = 0;
                            if (
                              'under' === this.$element.attr('data-position') &&
                              a.length
                            ) {
                              var i = a.find('.thrive-symbol-shortcode-scroll');
                              e = i.length
                                ? i[0].getBoundingClientRect().bottom
                                : a[0].getBoundingClientRect().bottom;
                            }
                            this.$element.css('top', e || t);
                          },
                        },
                        {
                          key: 'isPostContentIntoView',
                          value: function () {
                            return (
                              this.postContentOffsetTop <=
                              this.scrollTop + o.height()
                            );
                          },
                        },
                      ]),
                      e
                    );
                  })())(t);
                };
              },
              sidebar: {
                'off-screen.js': function (t, e, i) {
                  e.exports = function () {
                    var o =
                        0 < arguments.length && void 0 !== arguments[0]
                          ? arguments[0]
                          : jQuery,
                      s =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : window,
                      r =
                        2 < arguments.length && void 0 !== arguments[2]
                          ? arguments[2]
                          : document.body;
                    return (function () {
                      function i(t) {
                        _classCallCheck(this, i),
                          (this.sidebarInstance = t),
                          (this.$element = t.$element),
                          (this.element = t.$element[0]),
                          (this.$main = t.$element.parent()),
                          (this.inEditor =
                            t.constructor.inEditor &&
                            TVE.Theme &&
                            TVE.Theme.template);
                        var e = t.getJsonData('off-screen');
                        this.setConfig(e);
                      }
                      return (
                        _createClass(i, null, [
                          {
                            key: 'clickListener',
                            get: function () {
                              return 'click.off-screen';
                            },
                          },
                          {
                            key: 'defaultSettings',
                            get: function () {
                              return {
                                display: { desktop: 'slide', mobile: 'slide' },
                                visibleOnLoad: { desktop: !0, mobile: !1 },
                                visibleInEditor: !0,
                                hasOverlay: { desktop: !1 },
                                hasDefaultTrigger: { desktop: !0 },
                                hasCloseIcon: { desktop: !0 },
                                sidebarWidth: null,
                                triggerPosition: { desktop: 'center' },
                                collapsedIcon: 'icon-menu-left-solid',
                                expandedIcon: 'icon-menu-right-solid',
                                closeIcon: 'icon-close-solid',
                              };
                            },
                          },
                          {
                            key: 'triggerSelector',
                            get: function () {
                              return '.tve-off-screen-sidebar-trigger';
                            },
                          },
                          {
                            key: 'closeIconSelector',
                            get: function () {
                              return '.tve-sidebar-close-icon';
                            },
                          },
                        ]),
                        _createClass(i, [
                          {
                            key: 'init',
                            value: function () {
                              var t = this;
                              return (
                                (this.sidebarSide = this.$main.hasClass(
                                  'flip-sections'
                                )
                                  ? 'left'
                                  : 'right'),
                                r.setAttribute(
                                  'data-off-screen-side',
                                  this.sidebarSide
                                ),
                                r.setAttribute(
                                  'data-off-screen-type',
                                  this.getConfig('display', this.getDevice())
                                ),
                                r.classList.add('theme-has-off-screen-sidebar'),
                                this.updateSidebarWidth(),
                                this.initDefaultTrigger(),
                                this.initCloseIcon(),
                                this.toggleCloseIcon(
                                  this.getConfig(
                                    'hasCloseIcon',
                                    this.getDevice()
                                  )
                                ),
                                r.classList.remove(
                                  'visible-off-screen-sidebar'
                                ),
                                this.element.classList.remove(
                                  'theme-has-off-screen-overlay'
                                ),
                                this.element.classList.remove(
                                  'sidebar-off-screen-on-'.concat(
                                    this.getDevice()
                                  )
                                ),
                                (this.element.style.display = 'block'),
                                this.inEditor
                                  ? this.getConfig('visibleInEditor') &&
                                    setTimeout(function () {
                                      return t.toggle(!0);
                                    }, 24)
                                  : (this.setSidebarTop(),
                                    o(document)
                                      .off('keyup.off-screen')
                                      .on(
                                        'keyup.off-screen',
                                        this.onKeyUp.bind(this)
                                      ),
                                    this.getConfig(
                                      'hasOverlay',
                                      this.getDevice()
                                    ) &&
                                      this.$element
                                        .off(i.clickListener)
                                        .on(
                                          i.clickListener,
                                          this.onClick.bind(this)
                                        ),
                                    this.isVisibleOnLoad() &&
                                      setTimeout(function () {
                                        return t.toggle(!0);
                                      }, 24),
                                    this.$element.appendTo(o('#wrapper'))),
                                this
                              );
                            },
                          },
                          {
                            key: 'isVisibleOnLoad',
                            value: function () {
                              var t =
                                  0 < arguments.length &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.getDevice(),
                                e = null;
                              return (
                                !this.inEditor &&
                                  'mobile' !== t &&
                                  ThriveTheme.localize.is_user_logged_in &&
                                  ThriveTheme.localize.sidebar_visibility &&
                                  void 0 !==
                                    ThriveTheme.localize.sidebar_visibility[
                                      t
                                    ] &&
                                  (e = !!parseInt(
                                    ThriveTheme.localize.sidebar_visibility[t]
                                  )),
                                null === e &&
                                  (e = this.getConfig('visibleOnLoad', t)),
                                e
                              );
                            },
                          },
                          {
                            key: 'initDefaultTrigger',
                            value: function () {
                              var t = this;
                              (this.$trigger = this.$element.find(
                                i.triggerSelector
                              )),
                                this.inEditor
                                  ? (this.$trigger.data(
                                      'tcb-elem-type',
                                      'sidebar-trigger'
                                    ),
                                    this.$trigger.attr(
                                      'data-selector',
                                      i.triggerSelector
                                    ))
                                  : this.$trigger
                                      .off(i.clickListener)
                                      .on(i.clickListener, function () {
                                        t.toggle(!t.isVisible());
                                      }),
                                this.$trigger.css({
                                  display: this.getConfig(
                                    'hasDefaultTrigger',
                                    this.getDevice()
                                  )
                                    ? 'flex'
                                    : 'none',
                                });
                              var e = this.getConfig(
                                'triggerPosition',
                                this.getDevice()
                              );
                              r.classList.contains('admin-bar') &&
                                'top' === e &&
                                this.$trigger.css({
                                  top: s.TCB_Front.bodyOffsetTop(),
                                }),
                                this.element.setAttribute(
                                  'data-trigger-position',
                                  e
                                );
                            },
                          },
                          {
                            key: 'initCloseIcon',
                            value: function () {
                              var t = this;
                              this.inEditor
                                ? this.$element
                                    .find(i.closeIconSelector)
                                    .attr('data-selector', i.closeIconSelector)
                                    .addClass('tve_no_icons tve_no_drag')
                                : o(document)
                                    .off(i.clickListener)
                                    .on(
                                      i.clickListener,
                                      i.closeIconSelector,
                                      function () {
                                        return t.toggle(!1);
                                      }
                                    );
                            },
                          },
                          {
                            key: 'destroy',
                            value: function () {
                              return (
                                r.classList.remove(
                                  'theme-has-off-screen-sidebar'
                                ),
                                r.classList.remove(
                                  'visible-off-screen-sidebar'
                                ),
                                this.element.style.removeProperty('top'),
                                this.element.style.removeProperty('height'),
                                this.element.style.removeProperty('display'),
                                this.element.style.removeProperty('min-width'),
                                this.element.classList.remove(
                                  'sidebar-off-screen-on-'.concat(
                                    this.getDevice()
                                  )
                                ),
                                this.$trigger && this.$trigger.hide(),
                                this.toggleCloseIcon(!1),
                                'wrapper' ===
                                  this.$element.parent().attr('id') &&
                                  this.$element.insertBefore(
                                    o('.main-columns-separator')
                                  ),
                                this
                              );
                            },
                          },
                          {
                            key: 'toggle',
                            value: function (t) {
                              var e = this;
                              void 0 === t && (t = !this.isVisible());
                              var i = this.getDevice();
                              return (
                                this.$element.hasClass(
                                  'tcb-'.concat(i, '-hidden')
                                ) && (t = !1),
                                t && this.getConfig('hasOverlay', i)
                                  ? (this.element.classList.add(
                                      'theme-has-off-screen-overlay'
                                    ),
                                    setTimeout(function () {
                                      r.classList.toggle(
                                        'visible-off-screen-sidebar',
                                        t
                                      );
                                    }, 42))
                                  : (r.classList.toggle(
                                      'visible-off-screen-sidebar',
                                      t
                                    ),
                                    setTimeout(function () {
                                      e.element.classList.remove(
                                        'theme-has-off-screen-overlay'
                                      );
                                    }, 420)),
                                !this.sidebarInstance.constructor.inEditor &&
                                  ThriveTheme.localize.is_user_logged_in &&
                                  'mobile' !== i &&
                                  this.updateUserSidebarSettings(t),
                                setTimeout(s.TCB_Front.resizePageSection, 500),
                                this
                              );
                            },
                          },
                          {
                            key: 'setConfig',
                            value: function () {
                              var t =
                                0 < arguments.length && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                              return (this.config = t), this;
                            },
                          },
                          {
                            key: 'getConfig',
                            value: function () {
                              var t =
                                  0 < arguments.length &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : '',
                                e =
                                  1 < arguments.length &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : null,
                                i = this.config;
                              return (
                                t &&
                                  ((i = i[t]),
                                  e &&
                                    (i = this.sidebarInstance.getConfigByDevice(
                                      i,
                                      e
                                    ))),
                                i
                              );
                            },
                          },
                          {
                            key: 'updateSidebarWidth',
                            value: function (t) {
                              var e = o(s).width();
                              if (void 0 === t) {
                                switch (this.getDevice()) {
                                  case 'desktop':
                                    var i = getComputedStyle(
                                      this.element.parentElement
                                    );
                                    t =
                                      'wrap' === i.flexWrap
                                        ? parseInt(i.width) / 2
                                        : (parseFloat(
                                            i.getPropertyValue('--sidebar-size')
                                          ) *
                                            parseInt(i.width)) /
                                            100 -
                                          parseFloat(
                                            i.getPropertyValue(
                                              '--separator-size'
                                            )
                                          ) /
                                            2;
                                    break;
                                  case 'tablet':
                                    t = e / 2;
                                    break;
                                  case 'mobile':
                                    t = e - 24;
                                }
                                var n = this.$element.css('min-width');
                                n.includes('%')
                                  ? (n = (parseInt(n) * e) / 100)
                                  : ((n = parseInt(n)), isNaN(n) && (n = 0)),
                                  (t = Math.max(n, t));
                              }
                              return (
                                e <= t && (t = e - 24),
                                parseInt(this.$element.css('min-width')) &&
                                  this.$element.css(
                                    'min-width',
                                    ''.concat(t, 'px')
                                  ),
                                r.style.setProperty(
                                  '--off-screen-sidebar-size',
                                  ''.concat(t, 'px')
                                ),
                                t
                              );
                            },
                          },
                          {
                            key: 'toggleCloseIcon',
                            value: function () {
                              var t =
                                !(
                                  0 < arguments.length &&
                                  void 0 !== arguments[0]
                                ) || arguments[0];
                              this.$element.find(i.closeIconSelector).toggle(t);
                            },
                          },
                          {
                            key: 'setSidebarTop',
                            value: function () {
                              var t = s.TCB_Front.bodyOffsetTop();
                              this.$element.css({
                                top: ''.concat(t, 'px'),
                                height: 'calc(100vh - '.concat(t, 'px)'),
                              });
                            },
                          },
                          {
                            key: 'updateUserSidebarSettings',
                            value: function (t) {
                              ('object' !==
                                _typeof(
                                  ThriveTheme.localize.sidebar_visibility
                                ) ||
                                Array.isArray(
                                  ThriveTheme.localize.sidebar_visibility
                                )) &&
                                (ThriveTheme.localize.sidebar_visibility = {}),
                                (ThriveTheme.localize.sidebar_visibility[
                                  this.getDevice()
                                ] = t ? 1 : 0),
                                o.ajax({
                                  url: ''.concat(
                                    ThriveTheme.localize.routes.frontend,
                                    '/user_options'
                                  ),
                                  headers: {
                                    'X-WP-Nonce': tve_frontend_options.nonce,
                                  },
                                  type: 'POST',
                                  data: {
                                    template: ThriveTheme.localize.ID,
                                    option: 'sidebar_visibility',
                                    value:
                                      ThriveTheme.localize.sidebar_visibility,
                                  },
                                });
                            },
                          },
                          {
                            key: 'onClick',
                            value: function (t) {
                              t.target.classList.contains('sidebar-section') &&
                                this.toggle(!1);
                            },
                          },
                          {
                            key: 'onKeyUp',
                            value: function (t) {
                              'Escape' === t.key && this.toggle(!1);
                            },
                          },
                          {
                            key: 'isVisible',
                            value: function () {
                              return r.classList.contains(
                                'visible-off-screen-sidebar'
                              );
                            },
                          },
                          {
                            key: 'getDevice',
                            value: function () {
                              return void 0 === s.TCB_Front
                                ? TVE.main.device
                                : s.TCB_Front.getDisplayType();
                            },
                          },
                        ]),
                        i
                      );
                    })();
                  };
                },
                'sticky.js': function (t, e, i) {
                  e.exports = function (i) {
                    var n = i(window),
                      o = i(document),
                      s = i('body'),
                      r = window.innerHeight,
                      a = n.width(),
                      c = s.offset().top;
                    return (function () {
                      function e(t) {
                        _classCallCheck(this, e),
                          (this.$element = t.$element),
                          (this.element = t.$element[0]),
                          (this.$content =
                            this.$element.find('.section-content')),
                          (this.$parent = t.$element.parent()),
                          this.setConfig(t.getJsonData('sticky')),
                          t.constructor.inEditor ||
                            ('undefined' != typeof ResizeObserver &&
                              new ResizeObserver(
                                this.onBodyResize.bind(this)
                              ).observe(s[0]),
                            n
                              .off('ultimatum.form.display')
                              .on(
                                'ultimatum.form.display',
                                this.onBodyResize.bind(this)
                              ));
                      }
                      return (
                        _createClass(
                          e,
                          [
                            {
                              key: 'needsExtraScroll',
                              value: function () {
                                return this.elementHeight > r;
                              },
                            },
                            {
                              key: 'shouldBeSticky',
                              value: function () {
                                var t = 768 < a;
                                if (t) {
                                  var e =
                                      ThriveTheme.$sections.content.outerHeight(),
                                    i =
                                      ThriveTheme.$sections.content.offset()
                                        .top;
                                  (this.offset.top >= i + e ||
                                    this.offset.top +
                                      this.$element.outerHeight() <
                                      i) &&
                                    (t = !1);
                                }
                                return t;
                              },
                            },
                            {
                              key: 'setConfig',
                              value: function (t) {
                                this.config = t;
                              },
                            },
                            {
                              key: 'isSticky',
                              value: function () {
                                return this.element.classList.contains(
                                  'tve-is-sticky'
                                );
                              },
                            },
                          ],
                          [
                            {
                              key: 'defaultSettings',
                              get: function () {
                                return {
                                  sticky: !1,
                                  delta: 0,
                                  stickyUntil: 'main',
                                  element: '',
                                };
                              },
                            },
                          ]
                        ),
                        _createClass(e, [
                          {
                            key: 'init',
                            value: function () {
                              var t = this;
                              this.isSticky() && this.destroy(),
                                (r = window.innerHeight),
                                (a = n.width()),
                                (c = s.offset().top),
                                (this.delta = parseInt(this.config.delta)),
                                (this.offset = this.$element.offset()),
                                this.$sidebarClone.hide(),
                                (this.prevScroll = 0),
                                (this._sentinelTop = null),
                                (this.stickySide = this.$parent.hasClass(
                                  'flip-sections'
                                )
                                  ? 'left'
                                  : 'right'),
                                (this.elementWidth =
                                  this.$element.outerWidth()),
                                (this.parentTopPadding = parseInt(
                                  this.$parent.css('padding-top')
                                )),
                                n.off('scroll.sidebar'),
                                this.shouldBeSticky() &&
                                  (this.element.classList.add(
                                    'tve-sticky-sidebar'
                                  ),
                                  (this.element.style.alignItems =
                                    this.$content.css('justify-content')),
                                  (this.elementHeight =
                                    this.$content.outerHeight()),
                                  this.needsExtraScroll() ||
                                    (this.elementHeight =
                                      this.$element.outerHeight()),
                                  this.$sidebarClone.css(
                                    'height',
                                    ''.concat(this.elementHeight, 'px')
                                  ),
                                  n
                                    .on('scroll.sidebar', function () {
                                      (t.scrollTop = o.scrollTop()),
                                        (t.scrollDir =
                                          t.scrollTop >= t.prevScroll
                                            ? 'Down'
                                            : 'Up'),
                                        (t.prevScroll = t.scrollTop),
                                        (t.elementTop = parseInt(
                                          t.element.style.top
                                        )),
                                        t.onScroll(),
                                        t['onScroll'.concat(t.scrollDir)]();
                                    })
                                    .trigger('scroll.sidebar'));
                            },
                          },
                          {
                            key: 'onScroll',
                            value: function () {
                              this.hasReachedSentinel() ||
                                this.needsExtraScroll() ||
                                (this.offset.top <=
                                this.scrollTop + this.delta + c
                                  ? (this.isSticky() || this.makeItSticky(),
                                    (this.element.style.position = 'fixed'),
                                    (this.element.style.left = ''.concat(
                                      this.offset.left,
                                      'px'
                                    )),
                                    (this.element.style.top = ''.concat(
                                      this.delta + c,
                                      'px'
                                    )))
                                  : this.isSticky() && this.destroy());
                            },
                          },
                          {
                            key: 'onScrollDown',
                            value: function () {
                              if (
                                this.hasReachedSentinel() &&
                                this.isSticky()
                              ) {
                                var t =
                                  this.sentinelTop +
                                  this.parentTopPadding -
                                  this.elementHeight -
                                  this.offset.top;
                                this.needsExtraScroll() && (t -= this.delta),
                                  this.element.style.removeProperty('left'),
                                  this.element.style.removeProperty('bottom'),
                                  this.element.style.removeProperty('position'),
                                  (this.element.style.top = ''.concat(t, 'px'));
                              } else if (
                                this.needsExtraScroll() &&
                                ('fixed' !== this.element.style.position ||
                                  !this.element.style.bottom)
                              )
                                if (
                                  'fixed' === this.element.style.position &&
                                  this.element.style.top
                                ) {
                                  var e = this.$element.offset();
                                  this.element.style.removeProperty('position'),
                                    this.element.style.removeProperty('left'),
                                    (this.element.style.top = ''.concat(
                                      e.top + this.delta - this.offset.top,
                                      'px'
                                    ));
                                } else {
                                  var i = this.offset.top + this.elementHeight;
                                  this.elementTop &&
                                    (i +=
                                      this.elementTop - this.parentTopPadding),
                                    this.scrollTop + r > i + this.delta &&
                                      (this.isSticky() || this.makeItSticky(),
                                      (this.element.style.position = 'fixed'),
                                      (this.element.style.left = ''.concat(
                                        this.offset.left,
                                        'px'
                                      )),
                                      (this.element.style.bottom = ''.concat(
                                        this.delta,
                                        'px'
                                      )),
                                      this.element.style.removeProperty('top'));
                                }
                            },
                          },
                          {
                            key: 'onScrollUp',
                            value: function () {
                              if (
                                this.needsExtraScroll() &&
                                this.isSticky() &&
                                !this.hasReachedSentinel()
                              )
                                if (
                                  'fixed' === this.element.style.position &&
                                  this.element.style.bottom
                                ) {
                                  var t = this.$element.offset();
                                  this.element.style.removeProperty('position'),
                                    this.element.style.removeProperty('left'),
                                    this.element.style.removeProperty('bottom'),
                                    (this.element.style.top = ''.concat(
                                      t.top +
                                        this.parentTopPadding -
                                        this.offset.top,
                                      'px'
                                    ));
                                } else {
                                  if (
                                    'fixed' === this.element.style.position &&
                                    this.offset.top >
                                      this.scrollTop + this.delta + c
                                  )
                                    this.destroy();
                                  else
                                    this.$element.offset().top >
                                      this.scrollTop + this.delta + c &&
                                      ((this.element.style.position = 'fixed'),
                                      (this.element.style.left = ''.concat(
                                        this.offset.left,
                                        'px'
                                      )),
                                      (this.element.style.top = ''.concat(
                                        c + this.delta,
                                        'px'
                                      )));
                                }
                            },
                          },
                          {
                            key: 'hasReachedSentinel',
                            value: function () {
                              return this.scrollTop + r > this.sentinelTop;
                            },
                          },
                          {
                            key: 'onBodyResize',
                            value: function () {
                              (this._sentinelTop = null),
                                (this.offset = this.$element.offset()),
                                (c = s.offset().top);
                            },
                          },
                          {
                            key: 'makeItSticky',
                            value: function () {
                              this.$sidebarClone.show(),
                                this.element.classList.add('tve-is-sticky'),
                                (this.element.style[this.stickySide] =
                                  this.$parent.css(
                                    'padding-'.concat(this.stickySide)
                                  )),
                                this.element.style.setProperty(
                                  'width',
                                  ''.concat(this.elementWidth, 'px'),
                                  'important'
                                ),
                                this.needsExtraScroll() ||
                                  ((this.element.style.minHeight =
                                    'calc(100vh - '.concat(
                                      c + this.delta,
                                      'px)'
                                    )),
                                  (this.elementHeight =
                                    this.$element.outerHeight()),
                                  (this._sentinelTop = null));
                            },
                          },
                          {
                            key: 'destroy',
                            value: function () {
                              this.$sidebarClone.remove(),
                                this.element.classList.remove('tve-is-sticky'),
                                this.element.style.removeProperty(
                                  this.stickySide
                                ),
                                this.element.style.removeProperty('position'),
                                this.element.style.removeProperty('bottom'),
                                this.element.style.removeProperty('width'),
                                this.element.style.removeProperty('left'),
                                this.element.style.removeProperty('top'),
                                this.needsExtraScroll() ||
                                  this.element.style.removeProperty(
                                    'min-height'
                                  );
                            },
                          },
                          {
                            key: 'sentinelTop',
                            get: function () {
                              if (null === this._sentinelTop) {
                                switch (this.config.stickyUntil) {
                                  case 'end':
                                    this._sentinelTop = Math.max(
                                      document.body.scrollHeight,
                                      document.body.offsetHeight,
                                      document.documentElement.clientHeight,
                                      document.documentElement.scrollHeight,
                                      document.documentElement.offsetHeight
                                    );
                                    break;
                                  case 'element':
                                    if (
                                      ((this.config.element =
                                        this.config.element
                                          .replace(/([^a-zA-Z0-9_-])/g, '')
                                          .trim()),
                                      '' !== this.config.element)
                                    ) {
                                      var t = i(
                                        '#'.concat(this.config.element)
                                      );
                                      t.length &&
                                        t.offset().top >
                                          this.offset.top +
                                            this.elementHeight &&
                                        (this._sentinelTop = t.offset().top);
                                    }
                                }
                                null === this._sentinelTop &&
                                  (this._sentinelTop =
                                    this.$parent.offset().top +
                                    this.$parent.outerHeight());
                              }
                              return this._sentinelTop;
                            },
                          },
                          {
                            key: '$sidebarClone',
                            get: function () {
                              var t = this.$parent.find('.sidebar-empty-clone');
                              return t.length
                                ? t
                                : i(
                                    '<div class="sidebar-section sidebar-empty-clone"></div>'
                                  ).insertAfter(this.$element);
                            },
                          },
                        ]),
                        e
                      );
                    })();
                  };
                },
              },
              'sidebar.js': function (t, e, o) {
                e.exports = function (i, t, s) {
                  var n =
                      3 < arguments.length && void 0 !== arguments[3]
                        ? arguments[3]
                        : window,
                    e =
                      4 < arguments.length && void 0 !== arguments[4]
                        ? arguments[4]
                        : document.body,
                    r = o('./sidebar/sticky')(i),
                    a = o('./sidebar/off-screen')(i, n, e),
                    c = n.outerWidth;
                  return new ((function () {
                    function o() {
                      var e = this,
                        t =
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : i();
                      _classCallCheck(this, o),
                        (this.$element = t),
                        (this.$content = t.find('.section-content')),
                        t &&
                          t.length &&
                          (this.init(),
                          o.inEditor
                            ? (this.sidebarTypeInit().fixContentHeight(),
                              'undefined' != typeof ResizeObserver &&
                                new ResizeObserver(function () {
                                  e.fixContentHeight();
                                }).observe(this.$content[0]))
                            : (i(n).on('resize', function (t) {
                                (t.detail && t.detail.fromTcb) ||
                                  c === n.outerWidth ||
                                  ((c = n.outerWidth),
                                  e.sidebarTypeInit().fixContentHeight());
                              }),
                              i(function () {
                                return e.sidebarTypeInit().fixContentHeight();
                              })));
                    }
                    return (
                      _createClass(o, null, [
                        {
                          key: 'getDefaultValues',
                          value: function () {
                            var t;
                            switch (
                              0 < arguments.length && void 0 !== arguments[0]
                                ? arguments[0]
                                : ''
                            ) {
                              case 'sticky':
                                t = r.defaultSettings;
                                break;
                              case 'off-screen':
                                t = a.defaultSettings;
                                break;
                              case 'display-type':
                                t = { desktop: 'normal' };
                                break;
                              default:
                                t = {};
                            }
                            return t;
                          },
                        },
                        {
                          key: 'inEditor',
                          get: function () {
                            return !!n.tve_frontend_options.is_editor_page;
                          },
                        },
                      ]),
                      _createClass(o, [
                        {
                          key: 'init',
                          value: function () {
                            this.$element.data('sticky', new r(this)),
                              this.$element.data('off-screen', new a(this));
                          },
                        },
                        {
                          key: 'sidebarTypeInit',
                          value: function () {
                            var e = this;
                            ['sticky', 'off-screen'].forEach(function (t) {
                              return e._get(t) && e._get(t).destroy();
                            });
                            var t = this.getDisplayType();
                            return (
                              (('sticky' === t && !o.inEditor) ||
                                'off-screen' === t) &&
                                this._get(t).init(),
                              this
                            );
                          },
                        },
                        {
                          key: '_get',
                          value: function (t) {
                            return this.$element.data(t);
                          },
                        },
                        {
                          key: 'getJsonData',
                          value: function () {
                            var e =
                                0 < arguments.length && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : '',
                              t =
                                1 < arguments.length && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : null,
                              i =
                                2 < arguments.length && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : null,
                              n = this.$element.attr('data-'.concat(e));
                            try {
                              n = JSON.parse(n);
                            } catch (t) {
                              n = o.getDefaultValues(e);
                            }
                            return (
                              t && (n = n[t]),
                              i && (n = this.getConfigByDevice(n, i)),
                              n
                            );
                          },
                        },
                        {
                          key: 'getConfigByDevice',
                          value: function (t) {
                            var e =
                                1 < arguments.length && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : s.getDisplayType(),
                              i = this.getDisplayType(e),
                              n = [e];
                            for (
                              'mobile' === e &&
                                i === this.getDisplayType('tablet') &&
                                n.push('tablet'),
                                n.push('desktop');
                              void 0 === t[n[0]] && n.length;

                            )
                              n.shift();
                            return n[0] ? t[n[0]] : null;
                          },
                        },
                        {
                          key: 'setJsonData',
                          value: function () {
                            var t,
                              e =
                                0 < arguments.length && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : '',
                              i = 1 < arguments.length ? arguments[1] : void 0,
                              n =
                                2 < arguments.length && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : '',
                              o =
                                3 < arguments.length && void 0 !== arguments[3]
                                  ? arguments[3]
                                  : null;
                            'object' === _typeof(i)
                              ? (t = i)
                              : ((t = this.getJsonData(e)),
                                o ? (t[i][o] = n) : (t[i] = n));
                            try {
                              this.$element.attr(
                                'data-'.concat(e),
                                JSON.stringify(t)
                              );
                            } catch (t) {
                              this.$element.attr(
                                'data-'.concat(e),
                                JSON.stringify(this.getJsonData(e))
                              );
                            }
                            return this;
                          },
                        },
                        {
                          key: 'isSticky',
                          value: function () {
                            var t =
                              0 < arguments.length && void 0 !== arguments[0]
                                ? arguments[0]
                                : s.getDisplayType();
                            return 'sticky' === this.getDisplayType(t);
                          },
                        },
                        {
                          key: 'isOffScreen',
                          value: function () {
                            var t =
                              0 < arguments.length && void 0 !== arguments[0]
                                ? arguments[0]
                                : s.getDisplayType();
                            return 'off-screen' === this.getDisplayType(t);
                          },
                        },
                        {
                          key: 'getDisplayType',
                          value: function () {
                            var t,
                              e =
                                0 < arguments.length && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : s.getDisplayType(),
                              i = this.getJsonData('display-type');
                            return (
                              'mobile' !== e &&
                              this.getJsonData('sticky', 'sticky')
                                ? this.getJsonData(
                                    'sticky',
                                    'visibleOn'
                                  ).includes(e) && (t = 'sticky')
                                : (t = i[e]),
                              t ||
                                (t =
                                  'mobile' === e && i.tablet
                                    ? i.tablet
                                    : i.desktop),
                              'sticky' === t &&
                                'mobile' === e &&
                                (t =
                                  'sticky' === i.tablet
                                    ? 'sticky' === i.desktop
                                      ? 'normal'
                                      : i.desktop
                                    : i.tablet),
                              t
                            );
                          },
                        },
                        {
                          key: 'offScreenRefresh',
                          value: function () {
                            var t =
                              0 < arguments.length &&
                              void 0 !== arguments[0] &&
                              arguments[0];
                            if (this.isOffScreen()) {
                              var e = this._get('off-screen'),
                                i = e.isVisible();
                              t && e.destroy();
                              var n = this.getJsonData('off-screen');
                              e.setConfig(n).init(),
                                (i || (o.inEditor && n.visibleInEditor)) &&
                                  e.toggle(!0);
                            }
                          },
                        },
                        {
                          key: 'updateConfig',
                          value: function () {
                            var t =
                                0 < arguments.length && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : this.getDisplayType(),
                              e = this._get(t);
                            return (
                              e &&
                                'function' == typeof e.setConfig &&
                                e.setConfig(this.getJsonData(t)),
                              this
                            );
                          },
                        },
                        {
                          key: 'fixContentHeight',
                          value: function () {
                            if (
                              'normal' !== this.$content.css('justify-content')
                            ) {
                              this.$content.css('display', 'block');
                              var t = Array.from(
                                this.$content.children()
                              ).reduce(function (t, e) {
                                return t + i(e).outerHeight(!0);
                              }, 0);
                              this.$content.height() > t &&
                                this.$content.css('display', 'flex');
                            }
                          },
                        },
                      ]),
                      o
                    );
                  })())(t);
                };
              },
              woo: {
                'abstract.js': function (t, e, i) {
                  e.exports = function (t, e) {
                    return (function (t) {
                      function r() {
                        return (
                          _classCallCheck(this, r),
                          _possibleConstructorReturn(
                            this,
                            _getPrototypeOf(r).apply(this, arguments)
                          )
                        );
                      }
                      return (
                        _inherits(r, e.woocommerce.AbstractWoo),
                        _createClass(
                          r,
                          [
                            {
                              key: 'ajaxRenderFunction',
                              value: function (t, e) {
                                var i = this,
                                  n =
                                    !(
                                      2 < arguments.length &&
                                      void 0 !== arguments[2]
                                    ) || arguments[2],
                                  o =
                                    3 < arguments.length &&
                                    void 0 !== arguments[3]
                                      ? arguments[3]
                                      : 'POST',
                                  s = r.backendRenderFunction(t);
                                return (
                                  this.loading(!0),
                                  TVE.$.ajax({
                                    url: ''.concat(
                                      TVE.CONST.theme.routes.woo,
                                      '/render'
                                    ),
                                    type: o,
                                    data: {
                                      fn: s,
                                      args: e,
                                      output_buffer: n ? 1 : 0,
                                      query_vars: TVE.Theme.CONST.query_vars,
                                    },
                                    headers: {
                                      'X-WP-Nonce': TVE.CONST.rest_nonce,
                                    },
                                  }).always(function (t) {
                                    i.loading(!1);
                                  })
                                );
                              },
                            },
                            {
                              key: 'loading',
                              value: function () {
                                var t =
                                  !(
                                    0 < arguments.length &&
                                    void 0 !== arguments[0]
                                  ) || arguments[0];
                                this.$template.toggleClass('ttb-loading', t);
                              },
                            },
                          ],
                          [
                            {
                              key: 'backendRenderFunction',
                              value: function (t) {
                                return {
                                  related: 'woocommerce_related_products',
                                  upsells: 'woocommerce_upsell_display',
                                  shop: 'woocommerce_content',
                                }[t];
                              },
                            },
                          ]
                        ),
                        r
                      );
                    })();
                  };
                },
                'cart.js': function (t, e, i) {
                  e.exports = function (n) {
                    var o =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : window,
                      t = 2 < arguments.length ? arguments[2] : void 0,
                      e = i('./abstract')(n, t);
                    return (function (t) {
                      function i(t) {
                        var e;
                        return (
                          _classCallCheck(this, i),
                          (e = _possibleConstructorReturn(
                            this,
                            _getPrototypeOf(i).call(this, t)
                          )),
                          n(
                            '.cart tbody .product-quantity:not(:has(>div))'
                          ).each(function () {
                            n(this).wrapInner("<div class = 'quantity'></div>");
                          }),
                          n(o.document.body).on(
                            'updated_shipping_method',
                            function (t) {
                              n('.shipping input:checked')
                                .next('label')
                                .addClass('checked');
                            }
                          ),
                          o.tve_frontend_options.is_editor_page &&
                            e.initializeSelectors(),
                          e
                        );
                      }
                      return (
                        _inherits(i, e),
                        _createClass(
                          i,
                          [
                            {
                              key: 'initializeSelectors',
                              value: function () {
                                var e = this;
                                n(TVE.identifier('wc-cart-product-quantity'))
                                  .find('input')
                                  .attr('readonly', 'readonly'),
                                  n(
                                    TVE.identifier('wc-cart-coupon-input')
                                  ).attr('readonly', 'readonly'),
                                  n(
                                    TVE.identifier('wc-cart-apply-coupon')
                                  ).prop('disabled', !1),
                                  i.subElements.forEach(function (t) {
                                    var i = TVE.identifier(t);
                                    e.$template.find(i).each(function (t, e) {
                                      e.classList.add('tve_no_icons'),
                                        e.classList.add('wc-element-cursor'),
                                        e.setAttribute('data-selector', i);
                                    });
                                  }),
                                  this.$template
                                    .find(TVE.identifier('article'))
                                    .addClass(
                                      'tcb-selector-not_editable tcb-selector-no_highlight'
                                    );
                              },
                            },
                          ],
                          [
                            {
                              key: 'subElements',
                              get: function () {
                                return [
                                  'wc-cart-table-headers',
                                  'wc-cart-product-image',
                                  'wc-cart-product-name',
                                  'wc-cart-product-price',
                                  'wc-cart-product-quantity',
                                  'wc-cart-coupon-input',
                                  'wc-cart-apply-coupon',
                                  'wc-cart-details',
                                  'wc-cart-details-header',
                                  'wc-cart-details-row-header',
                                  'wc-cart-price',
                                  'wc-cart-active-shipping',
                                  'wc-cart-shipping-method',
                                  'wc-cart-shipping-text',
                                  'wc-cart-shipping-address',
                                  'wc-cart-change-address',
                                  'wc-cart-to-checkout-button',
                                  'wc-cart-product-list',
                                  'wc-cart-related-heading',
                                  'wc-cart-related-product-image',
                                  'wc-cart-related-product-title',
                                  'wc-cart-related-product-price',
                                  'wc-cart-related-product-button',
                                  'wc-cart-remove-product',
                                ];
                              },
                            },
                          ]
                        ),
                        i
                      );
                    })();
                  };
                },
                'checkout.js': function (t, e, n) {
                  e.exports = function (o) {
                    var e =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : window,
                      t = 2 < arguments.length ? arguments[2] : void 0,
                      i = n('./abstract')(o, t);
                    return (function (t) {
                      function n(t) {
                        var i;
                        return (
                          _classCallCheck(this, n),
                          (i = _possibleConstructorReturn(
                            this,
                            _getPrototypeOf(n).call(this, t)
                          )).addNecessaryClasses(),
                          o(e.document.body).on(
                            'updated_checkout',
                            function (t, e) {
                              'success' === e.result &&
                                (i.addNecessaryClasses(),
                                o('#payment .input-radio').click(function () {
                                  o('#payment .checked').removeClass('checked'),
                                    o('#payment input:checked')
                                      .parent('li')
                                      .addClass('checked');
                                }));
                            }
                          ),
                          e.tve_frontend_options.is_editor_page &&
                            i.initializeSelectors(),
                          i
                        );
                      }
                      return (
                        _inherits(n, i),
                        _createClass(
                          n,
                          [
                            {
                              key: 'initializeSelectors',
                              value: function () {
                                var e = this;
                                o(TVE.identifier('wc-input-box')).attr(
                                  'readonly',
                                  'readonly'
                                ),
                                  o(TVE.identifier('wc-dropdown')).on(
                                    'mousedown',
                                    function () {
                                      var t = this;
                                      setTimeout(function () {
                                        return t.blur();
                                      }, 0);
                                    }
                                  ),
                                  n.subElements.forEach(function (t) {
                                    var i = TVE.identifier(t);
                                    e.$template.find(i).each(function (t, e) {
                                      e.classList.add('tve_no_icons'),
                                        e.classList.add('wc-element-cursor'),
                                        e.setAttribute('data-selector', i);
                                    });
                                  });
                              },
                            },
                          ],
                          [
                            {
                              key: 'subElements',
                              get: function () {
                                return [
                                  'wc-input-label',
                                  'wc-input-box',
                                  'wc-textarea-input',
                                  'wc-field-header',
                                  'wc-ordered-product-name',
                                  'wc-order-details-header',
                                  'wc-ordered-product-price',
                                  'wc-final-price',
                                  'wc-checked-shipping-method',
                                  'wc-unchecked-shipping-method',
                                  'wc-place-order-button',
                                  'wc-checked-payment-method',
                                  'wc-unchecked-payment-method',
                                  'wc-payment-method-description',
                                  'wc-privacy-policy',
                                  'wc-dropdown',
                                  'wc-additional-section',
                                  'wc-additional-section-anchor',
                                  'wc-paypal-info',
                                ];
                              },
                            },
                          ]
                        ),
                        _createClass(n, [
                          {
                            key: 'addNecessaryClasses',
                            value: function () {
                              o('#shipping_method input:checked')
                                .next('label')
                                .addClass('checked')
                                .find('span, bdi')
                                .addClass('checked'),
                                o('#payment input:checked')
                                  .parent('li')
                                  .addClass('checked');
                            },
                          },
                        ]),
                        n
                      );
                    })();
                  };
                },
                'product.js': function (t, e, i) {
                  e.exports = function (s) {
                    var n =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : window,
                      t = 2 < arguments.length ? arguments[2] : void 0,
                      e = i('./abstract')(s, t);
                    return (function (t) {
                      function o() {
                        var t,
                          e =
                            0 < arguments.length && void 0 !== arguments[0]
                              ? arguments[0]
                              : null;
                        return (
                          _classCallCheck(this, o),
                          (t = _possibleConstructorReturn(
                            this,
                            _getPrototypeOf(o).call(this, e)
                          )).$template.length &&
                            ((t.ID = parseInt(
                              t.$template
                                .find('.post-wrapper.product ')
                                .attr('id')
                                .replace('product-', '')
                            )),
                            (t.$gallery = t.$template.find(o.gallerySelector))),
                          t.init(),
                          t
                        );
                      }
                      return (
                        _inherits(o, e),
                        _createClass(o, null, [
                          {
                            key: 'subElements',
                            get: function () {
                              return [
                                'wc-product-short-description',
                                'wc-product-main-add-to-cart',
                                'wc-product-add-to-cart',
                                'wc-product-star-rating',
                                'wc-product-category',
                                'wc-product-category-links',
                                'wc-product-sku',
                                'wc-product-gallery',
                                'wc-product-image',
                                'wc-product-title',
                                'wc-product-price',
                                'wc-product-out-of-stock',
                                'wc-product-sale',
                                'wc-product-tags',
                                'wc-product-tags-links',
                                'wc-product-customer-review-count',
                                'wc-product-quantity',
                                'wc-product-select',
                                'wc-product-select-label',
                                'wc-product-tab',
                                'wc-product-description-content',
                                'wc-product-additional-label',
                                'wc-product-additional-value',
                                'wc-product-upsells-heading',
                                'wc-product-related-heading',
                                'wc-product-review-empty-text',
                                'wc-product-review-first-text',
                                'wc-product-review-label',
                                'wc-product-review-star-rating',
                                'wc-product-review-textarea',
                                'wc-product-review-submit',
                                'wc-product-review-author',
                                'wc-product-review-author-image',
                                'wc-product-review-date',
                                'wc-product-review-comment',
                                'wc-product-review-item-star-rating',
                                'wc-product-review-container',
                                'wc-product-review-only-logged-in-text',
                              ];
                            },
                          },
                          {
                            key: 'selector',
                            get: function () {
                              return '.product-template-wrapper';
                            },
                          },
                          {
                            key: 'gallerySelector',
                            get: function () {
                              return '.woocommerce-product-gallery';
                            },
                          },
                        ]),
                        _createClass(
                          o,
                          [
                            {
                              key: 'initializeSelectors',
                              value: function () {
                                var e = this;
                                ['.upsells', '.related'].forEach(function (t) {
                                  return e.$template
                                    .find(t)
                                    .attr(
                                      'data-selector',
                                      ''.concat(t, '.products')
                                    );
                                }),
                                  o.subElements.forEach(function (t) {
                                    var o = TVE.identifier(t);
                                    e.$template.find(o).each(function (t, e) {
                                      var i =
                                          TVE.identifier('product-template'),
                                        n = e.closest(
                                          '.products[data-selector]'
                                        );
                                      n
                                        ? (i = o.includes(n.dataset.selector)
                                            ? i
                                            : ''
                                                .concat(i, ' ')
                                                .concat(n.dataset.selector))
                                        : e.closest('.woocommerce-tabs')
                                        ? (i = ''.concat(
                                            i,
                                            ' .woocommerce-tabs'
                                          ))
                                        : e.closest('.summary') &&
                                          (i = ''.concat(i, ' .summary')),
                                        e.classList.add('tve_no_icons'),
                                        e.setAttribute(
                                          'data-selector',
                                          o
                                            .split(',')
                                            .map(function (t) {
                                              return ''
                                                .concat(i, ' ')
                                                .concat(t);
                                            })
                                            .join(', ')
                                        );
                                    });
                                  }),
                                  this.$template
                                    .find(TVE.identifier('article'))
                                    .addClass(
                                      'tcb-selector-not_editable tcb-selector-no_highlight'
                                    ),
                                  this.$template
                                    .find('#respond')
                                    .addClass(
                                      'tcb-selector-not_editable tcb-selector-no_highlight'
                                    ),
                                  this.$template
                                    .find('.single_add_to_cart_button')
                                    .removeClass(
                                      'disabled wc-variation-selection-needed'
                                    );
                              },
                            },
                            {
                              key: 'init',
                              value: function () {
                                this.toggleZoom(),
                                  n.tve_frontend_options.is_editor_page &&
                                    this.initializeSelectors();
                              },
                            },
                            {
                              key: 'toggleZoom',
                              value: function () {
                                return (
                                  void 0 !== n.wc_single_product_params &&
                                    (n.wc_single_product_params.zoom_enabled =
                                      !parseInt(
                                        this.$template.attr(
                                          'data-hide-magnifier'
                                        )
                                      )),
                                  this
                                );
                              },
                            },
                            {
                              key: 'tabsInit',
                              value: function () {
                                return (
                                  this.$template
                                    .find(
                                      '.wc-tabs-wrapper, .woocommerce-tabs, #rating'
                                    )
                                    .trigger('init'),
                                  this
                                );
                              },
                            },
                            {
                              key: 'selectTab',
                              value: function () {
                                var t =
                                    0 < arguments.length &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : 'description',
                                  e = TVE.Theme.$wrapper.find(
                                    ''.concat(o.selector, ' .woocommerce-tabs')
                                  );
                                if (e.length) {
                                  e
                                    .find('.wc-tabs > .active')
                                    .removeClass('active'),
                                    e.find('.wc-tab').hide();
                                  var i,
                                    n = e.find('#tab-title-'.concat(t));
                                  (i = n.length
                                    ? e.find('#tab-'.concat(t))
                                    : ((n = e
                                        .find('.wc-tabs')
                                        .children()
                                        .first()),
                                      e.find('.wc-tab').first())),
                                    n.addClass('active'),
                                    i.show();
                                }
                              },
                            },
                            {
                              key: 'redoGallery',
                              value: function () {
                                return (
                                  this.$gallery.each(function (t, e) {
                                    var i = s(e);
                                    i.trigger(
                                      'wc-product-gallery-before-init',
                                      [e, n.wc_single_product_params]
                                    ),
                                      i.wc_product_gallery(
                                        n.wc_single_product_params
                                      ),
                                      i.trigger(
                                        'wc-product-gallery-after-init',
                                        [e, n.wc_single_product_params]
                                      );
                                  }),
                                  this
                                );
                              },
                            },
                            {
                              key: 'updateGalleryColumnsClass',
                              value: function (t) {
                                void 0 === t &&
                                  (t = this.getData('gallery-columns'));
                                var e = this.$gallery.attr('class');
                                (e = e.replace(
                                  /woocommerce-product-gallery--columns-\d/g,
                                  'woocommerce-product-gallery--columns-'.concat(
                                    t
                                  )
                                )),
                                  this.$gallery.attr('class', e);
                              },
                            },
                            {
                              key: 'initializeProductViewCartButtons',
                              value: function (t) {
                                t.find('.ajax_add_to_cart').removeClass(
                                  'ajax_add_to_cart'
                                );
                                var e = t.find('.add_to_cart_button'),
                                  i = t.find('a.added_to_cart'),
                                  n = function () {
                                    e.after(
                                      '<a class="added_to_cart" style="display:none;"></div>'
                                    );
                                  };
                                0 === i.length
                                  ? n()
                                  : e.length !== i.length && (i.remove(), n());
                              },
                            },
                            {
                              key: 'updateProductsSection',
                              value: function (e) {
                                var i = this,
                                  t =
                                    1 < arguments.length &&
                                    void 0 !== arguments[1]
                                      ? arguments[1]
                                      : [
                                          'columns',
                                          'posts_per_page',
                                          'orderby',
                                          'order',
                                        ],
                                  n = {};
                                return (
                                  t.forEach(function (t) {
                                    n[t] = i.getData(t, e);
                                  }),
                                  this.ajaxRenderFunction(e, n).done(function (
                                    t
                                  ) {
                                    t.content &&
                                      (i
                                        .getProductsSection(e)
                                        .html(s(t.content).html()),
                                      i.initializeProductViewCartButtons(
                                        i.$template
                                      ),
                                      i.initializeSelectors());
                                  })
                                );
                              },
                            },
                          ],
                          [
                            {
                              key: 'defaultAttr',
                              value: function () {
                                var t =
                                    0 < arguments.length &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : '',
                                  e = {
                                    'align-items': 'left',
                                    'related-align-items': 'left',
                                    'upsells-align-items': 'left',
                                    columns: 4,
                                    'gallery-columns': 4,
                                    'related-columns': 4,
                                    'upsells-columns': 4,
                                    posts_per_page: 8,
                                    'related-posts_per_page': 4,
                                    'upsells-posts_per_page': 4,
                                    orderby: 'date',
                                    'related-orderby': 'rand',
                                    'upsells-orderby': 'rand',
                                    order: 'desc',
                                    'related-order': 'desc',
                                    'upsells-order': 'desc',
                                    'hide-related': !1,
                                    'hide-magnifier': !1,
                                  };
                                return t ? e[t] : e;
                              },
                            },
                          ]
                        ),
                        o
                      );
                    })();
                  };
                },
                'shop.js': function (t, e, o) {
                  e.exports = function (t, i) {
                    var n = o('./abstract')(t, i);
                    return (function (t) {
                      function e() {
                        return (
                          _classCallCheck(this, e),
                          _possibleConstructorReturn(
                            this,
                            _getPrototypeOf(e).apply(this, arguments)
                          )
                        );
                      }
                      return (
                        _inherits(e, i.woocommerce.Shop),
                        _createClass(
                          e,
                          [
                            {
                              key: 'updateProductsSection',
                              value: function () {
                                var e = this,
                                  t =
                                    (0 < arguments.length &&
                                      void 0 !== arguments[0] &&
                                      arguments[0],
                                    1 < arguments.length &&
                                    void 0 !== arguments[1]
                                      ? arguments[1]
                                      : [
                                          'columns',
                                          'posts_per_page',
                                          'orderby',
                                          'order',
                                        ]),
                                  i = {};
                                return (
                                  t.forEach(function (t) {
                                    i[t] = e.getData(t);
                                  }),
                                  new n(this.$template)
                                    .ajaxRenderFunction('shop', i)
                                    .done(function (t) {
                                      t.content &&
                                        (e.$template.html(t.content),
                                        e.toggleProductElements(),
                                        e.initializeCartButtons(e.$template),
                                        TVE.WooCommerceFn.content.initShopSubElements(
                                          e.$template
                                        ));
                                    })
                                );
                              },
                            },
                          ],
                          [
                            {
                              key: 'selector',
                              get: function () {
                                return '.shop-template-wrapper';
                              },
                            },
                          ]
                        ),
                        e
                      );
                    })();
                  };
                },
              },
            },
            utils: {
              'general.js': function (t, e, i) {
                ThriveTheme.$,
                  (e.exports = {
                    addHttp: function (t) {
                      return (
                        (t = t.trim()) &&
                          !/^(?:f|ht)tps?\:\/\//.test(t) &&
                          (t = 'http://' + t),
                        t
                      );
                    },
                    readingMinutes: function (t) {
                      return Math.floor(this.countWords(t) / 200);
                    },
                    countWords: function (t) {
                      var e = t.clone();
                      e.find(
                        'noscript, img, style, script, .tcb-post-list-dynamic-style, .thrive-colors-palette-config, .thrive-group-edit-config, .thrive-local-colors-config, .tve_custom_style, .thrive-shortcode-config, .tqb-shortcode-wrapper, .thrive-quiz-builder-shortcode'
                      ).remove();
                      var i = e.text(),
                        n = 0;
                      return (
                        'string' == typeof i &&
                          (n = i.match(
                            /[a-zA-Z0-9_'\u0392-\u03c9\u0400-\u04FF\u0027]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|[\u0531-\u0556\u0561-\u0586\u0559\u055A\u055B]+|\w+/g
                          )),
                        n ? n.length : 0
                      );
                    },
                    throttle: function (n, o) {
                      var s =
                          2 < arguments.length &&
                          void 0 !== arguments[2] &&
                          arguments[2],
                        r = null,
                        a = !0;
                      return function () {
                        var t = this,
                          e = arguments,
                          i = function () {
                            n.apply(t, e), (r = null);
                          };
                        s && a && ((a = !1), i()), r || (r = setTimeout(i, o));
                      };
                    },
                  });
              },
              'validation.js': function (t, e, i) {
                var o = i('./general'),
                  n = (function () {
                    function n() {
                      _classCallCheck(this, n);
                    }
                    return (
                      _createClass(n, null, [
                        {
                          key: 'validateField',
                          value: function (t, e) {
                            if (
                              !(
                                !(
                                  2 < arguments.length &&
                                  void 0 !== arguments[2]
                                ) || arguments[2]
                              ) &&
                              0 === e.trim().length
                            )
                              return !0;
                            var i = 'validate_' + t;
                            return 'function' != typeof n[i] || n[i](e);
                          },
                        },
                        {
                          key: 'validateEmail',
                          value: function (t) {
                            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                              t
                            );
                          },
                        },
                        {
                          key: 'validateUrl',
                          value: function (t) {
                            return (
                              null !==
                              o
                                .addHttp(t)
                                .match(
                                  /(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
                                )
                            );
                          },
                        },
                        {
                          key: 'escapeHtml',
                          value: function (t) {
                            var e = {
                              '&': '&amp;',
                              '<': '&lt;',
                              '>': '&gt;',
                              '"': '&quot;',
                              "'": '&#39;',
                              '`': '&#x60;',
                              '=': '&#x3D;',
                            };
                            return String(t).replace(
                              /[&<>"'`=\/]/g,
                              function (t) {
                                return e[t] ? e[t] : t;
                              }
                            );
                          },
                        },
                      ]),
                      n
                    );
                  })();
                e.exports = n;
              },
            },
            'woo.js': function (t, e, c) {
              e.exports = function (s) {
                var r =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : window,
                  a = 2 < arguments.length ? arguments[2] : void 0;
                return (function () {
                  function o() {
                    _classCallCheck(this, o);
                  }
                  return (
                    _createClass(o, null, [
                      {
                        key: 'initializeWooCommerceFunctionality',
                        value: function () {
                          if (void 0 !== a && 0 < Object.keys(a).length) {
                            c('./models/woo/abstract')(s, a);
                            var t = c('./models/woo/product')(s, r, a),
                              e = c('./models/woo/checkout')(s, r, a),
                              i = c('./models/woo/cart')(s, r, a);
                            if (
                              ((ThriveTheme.Product = new t()),
                              (ThriveTheme.Checkout = new e()),
                              (ThriveTheme.Cart = new i()),
                              !tve_frontend_options.is_editor_page)
                            ) {
                              var n = c('./models/woo/shop')(s, a);
                              new n(s(r.document).find(n.selector));
                            }
                            o.initHooks();
                          }
                        },
                      },
                      {
                        key: 'initHooks',
                        value: function () {
                          o.initQuantityButtons(),
                            s(document).ready(function () {
                              o.initCartContentClass();
                            });
                        },
                      },
                      {
                        key: 'initQuantityButtons',
                        value: function () {
                          s(document).on(
                            'click',
                            '.tve-woo-quantity-button',
                            function (t) {
                              var e = s(t.currentTarget).siblings(
                                  'input[type="number"]'
                                ),
                                i = Number(e.val());
                              switch (t.currentTarget.dataset.op) {
                                case 'plus':
                                  e.val(i + 1);
                                  break;
                                case 'minus':
                                  i > e.attr('min') && e.val(i - 1);
                              }
                              e.trigger('change');
                            }
                          );
                        },
                      },
                      {
                        key: 'initCartContentClass',
                        value: function () {
                          s('body').on(
                            'tcb_mini_cart_content_generated',
                            function (t, e) {
                              var i = e.$cart,
                                n = '';
                              if (0 < i.closest('.thrv_header').length)
                                n = 'thrv_header';
                              else if (0 < i.closest('.thrv_footer').length)
                                n = 'thrv_footer';
                              else {
                                var o = i.closest('.theme-section');
                                if (0 < o.length) {
                                  var s = o
                                    .attr('class')
                                    .match(/(thrive-section-\d*)/g);
                                  if (s) n = s[0];
                                  else {
                                    var r = o
                                      .prop('id')
                                      .match(/theme-(.*)-section/)[1];
                                    n = ''.concat(r, '-section');
                                  }
                                }
                              }
                              n.length && e.$cartContentWrapper.addClass(n);
                            }
                          );
                        },
                      },
                    ]),
                    o
                  );
                })();
              };
            },
          },
        },
      },
    },
  },
})('workspace/inc/assets/js/frontend/main');
