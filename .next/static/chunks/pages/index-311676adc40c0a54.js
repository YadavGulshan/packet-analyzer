(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5301: function (e, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return r(1459);
        },
      ]);
    },
    1459: function (e, n, r) {
      'use strict';
      r.r(n),
        r.d(n, {
          default: function () {
            return N;
          },
        });
      var c = r(5893),
        a = r(7294),
        s = r(5988),
        i = r.n(s),
        t = r(7054),
        l = r(682),
        o = r(6021),
        d = r(9368),
        f = r(307),
        h = r(9710),
        u = r(4716),
        j = r(5005),
        x = function () {
          return (0, c.jsxs)('div', {
            className: 'jsx-b3e1b6a7c9b96113',
            children: [
              (0, c.jsx)(t.Z, {
                bg: 'light',
                expand: !1,
                children: (0, c.jsxs)(l.Z, {
                  fluid: !0,
                  children: [
                    (0, c.jsx)(t.Z.Toggle, {
                      'aria-controls': 'offcanvasNavbar',
                    }),
                    (0, c.jsx)(t.Z.Brand, {
                      href: '#',
                      className: 'mx-auto middle_title',
                      children: 'Navbar Offcanvas',
                    }),
                    (0, c.jsxs)(t.Z.Offcanvas, {
                      id: 'offcanvasNavbar',
                      'aria-labelledby': 'offcanvasNavbarLabel',
                      placement: 'start',
                      children: [
                        (0, c.jsx)(o.Z.Header, {
                          closeButton: !0,
                          children: (0, c.jsx)(o.Z.Title, {
                            id: 'offcanvasNavbarLabel',
                            children: 'Offcanvas',
                          }),
                        }),
                        (0, c.jsxs)(o.Z.Body, {
                          children: [
                            (0, c.jsxs)(d.Z, {
                              className: 'justify-content-end flex-grow-1 pe-3',
                              children: [
                                (0, c.jsx)(d.Z.Link, {
                                  href: '#action1',
                                  children: 'Home',
                                }),
                                (0, c.jsx)(d.Z.Link, {
                                  href: '#action2',
                                  children: 'Link',
                                }),
                                (0, c.jsxs)(f.Z, {
                                  title: 'Dropdown',
                                  id: 'offcanvasNavbarDropdown',
                                  children: [
                                    (0, c.jsx)(f.Z.Item, {
                                      href: '#action3',
                                      children: 'Action',
                                    }),
                                    (0, c.jsx)(f.Z.Item, {
                                      href: '#action4',
                                      children: 'Another action',
                                    }),
                                    (0, c.jsx)(f.Z.Divider, {}),
                                    (0, c.jsx)(f.Z.Item, {
                                      href: '#action5',
                                      children: 'Something else here',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, c.jsxs)(h.Z, {
                              className: 'd-flex',
                              children: [
                                (0, c.jsx)(u.Z, {
                                  type: 'search',
                                  placeholder: 'Search',
                                  className: 'me-2',
                                  'aria-label': 'Search',
                                }),
                                (0, c.jsx)(j.Z, {
                                  variant: 'outline-success',
                                  children: 'Search',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, c.jsx)(i(), { id: 'b3e1b6a7c9b96113', children: '' }),
            ],
          });
        },
        b = r(8523);
      function p(e, n, r) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = r),
          e
        );
      }
      function v(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {},
            c = Object.keys(r);
          'function' === typeof Object.getOwnPropertySymbols &&
            (c = c.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              }),
            )),
            c.forEach(function (n) {
              p(e, n, r[n]);
            });
        }
        return e;
      }
      var m = function () {
          var e = (0, a.useState)(null),
            n = (e[0], e[1]);
          return (0, c.jsxs)('div', {
            children: [
              (0, c.jsx)('h3', {
                className: '_title1',
                children: 'Drop Your Pcom File Here',
              }),
              (0, c.jsx)(b.ZP, {
                onDrop: function (e) {
                  n(
                    e.map(function (e) {
                      return e.name;
                    }),
                  );
                },
                accept: 'image/*',
                minSize: 1024,
                maxSize: 3072e3,
                maxFiles: 1,
                children: function (e) {
                  var n = e.getRootProps,
                    r = e.getInputProps,
                    a = e.isDragActive,
                    s = e.isDragAccept,
                    i = e.isDragReject,
                    t = s ? 'accept' : i ? 'reject' : '';
                  return (0, c.jsxs)(
                    'div',
                    v({}, n({ className: 'dropzone '.concat(t) }), {
                      children: [
                        (0, c.jsx)('input', v({}, r())),
                        (0, c.jsx)('span', {
                          children: a ? '\ud83d\udcc2' : '\ud83d\udcc1',
                        }),
                        (0, c.jsx)('p', {
                          children:
                            "Drag'nv'rop images, or click to select files",
                        }),
                      ],
                    }),
                  );
                },
              }),
            ],
          });
        },
        Z = r(1608),
        g = r(1555);
      function N() {
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(x, {}),
            (0, c.jsx)(l.Z, {
              children: (0, c.jsxs)(Z.Z, {
                children: [
                  (0, c.jsx)(g.Z, {}),
                  (0, c.jsx)(g.Z, { xs: 10, children: (0, c.jsx)(m, {}) }),
                  (0, c.jsx)(g.Z, {}),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [173, 774, 888, 179], function () {
      return (n = 5301), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
