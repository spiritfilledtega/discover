(this["webpackJsonp@sushiswap/landing"] = this["webpackJsonp@sushiswap/landing"] || []).push([
  [0], {
    127: function(e, t, s) {
      "use strict";
      s.r(t);
      s(66), s(67), s(68), s(69);
      var r = s(1),
        i = s.n(r),
        a = s(46),
        n = s(47),
        c = s.n(n),
        o = s(25),
        l = s(41),
        h = s(49),
        m = s.n(h),
        d = s(50),
        u = s.n(d),
        x = s(130);
      l.a.use(u.a).use(m.a).use(x.a).init({
        backend: {
          loadPath: "./locales/{{lng}}.json"
        },
        react: {
          useSuspense: !0
        },
        fallbackLng: "en",
        preload: ["en"],
        keySeparator: !1,
        interpolation: {
          escapeValue: !1
        }
      });
      l.a;
      var p, b = s(17),
        j = s(3),
        g = s(4),
        f = s.n(g),
        w = s(54),
        O = s(24),
        v = s(55),
        N = s.p + "static/media/logo.dec926df.png",
        y = s(0),
        k = function(e) {
          var t = e.setIsOpen,
            s = e.isOpen;
          return Object(y.jsx)(y.Fragment, {
            children: Object(y.jsx)(v.a, {
              show: s,
              enter: "ease-out duration-150",
              enterFrom: "opacity-0 scale-95",
              enterTo: "opacity-100 scale-100",
              leave: "ease-in duration-100",
              leaveFrom: "opacity-100 scale-100",
              leaveTo: "opacity-0 scale-95",
              children: Object(y.jsx)("div", {
                className: "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",
                children: Object(y.jsx)("div", {
                  className: "rounded-lg shadow-md",
                  children: Object(y.jsxs)("div", {
                    className: "rounded-lg shadow-xs overflow-hidden",
                    role: "menu",
                    "aria-orientation": "vertical",
                    "aria-labelledby": "main-menu",
                    style: {
                      background: "#0c0e20"
                    },
                    children: [Object(y.jsxs)("div", {
                      className: "px-5 pt-4 flex items-center justify-between",
                      children: [Object(y.jsx)("div", {
                        children: Object(y.jsx)("img", {
                          className: "h-8 w-auto",
                          src: N,
                          alt: ""
                        })
                      }), Object(y.jsx)("div", {
                        className: "-mr-2",
                        children: Object(y.jsx)("button", {
                          type: "button",
                          className: "inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none transition duration-150 ease-in-out",
                          "aria-label": "Close menu",
                          onClick: function() {
                            return t(!s)
                          },
                          children: Object(y.jsx)("svg", {
                            className: "h-6 w-6",
                            stroke: "currentColor",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            children: Object(y.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M6 18L18 6M6 6l12 12"
                            })
                          })
                        })
                      })]
                    }), Object(y.jsxs)("div", {
                      className: "space-y-1 px-2 pt-2 pb-3",
                      children: [Object(y.jsx)("a", {
                        href: "https://forum.sushi.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "block px-3 py-2 rounded-md text-base font-medium text-white focus:outline-none transition duration-150 ease-in-out",
                        role: "menuitem",
                        children: "Forum"
                      }), Object(y.jsx)("a", {
                        href: "https://snapshot.org/#/sushi",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "block px-3 py-2 rounded-md text-base font-medium text-white focus:outline-none transition duration-150 ease-in-out",
                        role: "menuitem",
                        children: "Snapshot"
                      }), Object(y.jsx)("a", {
                        href: "https://docs.sushi.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "block px-3 py-2 rounded-md text-base font-medium text-white focus:outline-none transition duration-150 ease-in-out",
                        role: "menuitem",
                        children: "Docs"
                      }), Object(y.jsx)("a", {
                        href: "https://app.sushi.com",
                        className: "block px-3 py-2 rounded-md text-base font-medium text-white focus:outline-none transition duration-150 ease-in-out",
                        role: "menuitem",
                        children: "Enter App"
                      })]
                    })]
                  })
                })
              })
            })
          })
        },
        _ = s(56),
        A = s(57).a.div(p || (p = Object(_.a)(["\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n    border: double 3px transparent;\n    border-radius: 80px;\n    background-image: linear-gradient(#0d0e21, #0d0e21), radial-gradient(circle at top left, #016eda, #d900c0);\n    background-origin: border-box;\n    background-clip: padding-box, border-box;\n"]))),
        U = function(e) {
          var t = e.setIsOpen,
            s = e.isOpen;
          return Object(y.jsx)(y.Fragment, {
            children: Object(y.jsxs)("nav", {
              className: "relative max-w-screen-lg mx-auto flex items-center justify-between px-4 sm:px-6",
              children: [Object(y.jsx)("div", {
                className: "flex items-center flex-1",
                children: Object(y.jsxs)("div", {
                  className: "flex items-center justify-between w-full md:w-auto",
                  children: [Object(y.jsx)(b.b, {
                    to: "/",
                    "aria-label": "Home",
                    children: Object(y.jsx)("img", {
                      className: "h-8 w-auto sm:h-10",
                      src: N,
                      alt: "Logo"
                    })
                  }), Object(y.jsx)(b.b, {
                    to: "/",
                    className: "text-xl font-bold leading-6 text-white sm:truncate ml-2",
                    children: "Sushi"
                  }), Object(y.jsx)("div", {
                    className: "-mr-2 flex items-center md:hidden",
                    children: Object(y.jsx)("button", {
                      type: "button",
                      className: "inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none transition duration-150 ease-in-out",
                      id: "main-menu",
                      "aria-label": "Main menu",
                      "aria-haspopup": "true",
                      onClick: function() {
                        return t(!s)
                      },
                      children: Object(y.jsx)("svg", {
                        className: "h-6 w-6",
                        stroke: "currentColor",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: Object(y.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M4 6h16M4 12h16M4 18h16"
                        })
                      })
                    })
                  })]
                })
              }), Object(y.jsxs)("div", {
                className: "hidden space-x-10 items-center md:flex content-center",
                children: [Object(y.jsx)(b.b, {
                  to: "/team",
                  className: "font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out",
                  children: "Meet Sushi"
                }), Object(y.jsx)("a", {
                  href: "https://analytics.sushi.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out",
                  children: "Analytics"
                }), Object(y.jsx)("a", {
                  href: "https://app.sushi.com",
                  className: "inline-flex items-center text-sm leading-5 font-medium text-white",
                  children: Object(y.jsx)(A, {
                    children: "Enter App"
                  })
                })]
              })]
            })
          })
        },
        E = function() {
          return Object(y.jsx)(y.Fragment, {
            children: Object(y.jsx)("footer", {
              className: "bg-neutral-900 py-2 px-2 sm:px-8 sm:py-4",
              children: Object(y.jsxs)("div", {
                className: "max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8",
                children: [Object(y.jsx)("h2", {
                  className: "sr-only",
                  children: "Footer"
                }), Object(y.jsx)("div", {
                  className: "w-full",
                  children: Object(y.jsxs)("div", {
                    className: "grid sm:grid-cols-2 md:grid-cols-5 gap-10",
                    children: [Object(y.jsxs)("div", {
                      className: "pt-2 sm:pt-4 col-span-2 sm:col-span-1 md:col-span-2 sm:pr-16",
                      children: [Object(y.jsxs)("div", {
                        className: "flex items-center",
                        children: [Object(y.jsx)(b.b, {
                          to: "/",
                          "aria-label": "Home",
                          children: Object(y.jsx)("img", {
                            className: "h-8 w-auto sm:h-10",
                            src: N,
                            alt: "Logo"
                          })
                        }), Object(y.jsx)(b.b, {
                          to: "/",
                          className: "text-xl font-bold leading-6 text-white sm:truncate ml-2",
                          children: "Sushi"
                        })]
                      }), Object(y.jsx)("div", {
                        className: "text-sm text-gray-400 ml-2 mt-4",
                        children: "Sushi is the home of DeFi. Our community is building a comprehensive, decentralized trading platform for the future of finance. Join us!"
                      }), Object(y.jsxs)("div", {
                        className: "flex space-x-6 md:order-2 ml-2 mt-4 ",
                        children: [Object(y.jsxs)("a", {
                          href: "https://sushichef.medium.com/",
                          className: "text-gray-400 hover:text-gray-300",
                          children: [Object(y.jsx)("span", {
                            className: "sr-only",
                            children: "Medium"
                          }), Object(y.jsx)("svg", {
                            className: "h-6 w-6",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "currentColor",
                            clipRule: "evenodd",
                            children: Object(y.jsx)("path", {
                              d: "M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"
                            })
                          })]
                        }), Object(y.jsxs)("a", {
                          href: "https://twitter.com/sushiswap",
                          className: "text-gray-400 hover:text-gray-300",
                          children: [Object(y.jsx)("span", {
                            className: "sr-only",
                            children: "Twitter"
                          }), Object(y.jsx)("svg", {
                            className: "h-6 w-6",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            children: Object(y.jsx)("path", {
                              d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                            })
                          })]
                        }), Object(y.jsxs)("a", {
                          href: "https://github.com/sushiswap",
                          className: "text-gray-400 hover:text-gray-300",
                          children: [Object(y.jsx)("span", {
                            className: "sr-only",
                            children: "GitHub"
                          }), Object(y.jsx)("svg", {
                            className: "h-6 w-6",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            children: Object(y.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                              clipRule: "evenodd"
                            })
                          })]
                        })]
                      })]
                    }), Object(y.jsxs)("div", {
                      className: "items-start",
                      children: [Object(y.jsx)("h3", {
                        className: "text-sm font-semibold text-white tracking-wider uppercase",
                        children: "Products"
                      }), Object(y.jsxs)("ul", {
                        className: "mt-4 space-y-4",
                        children: [Object(y.jsx)("li", {
                          children: Object(y.jsx)("a", {
                            href: "https://app.sushi.com/swap",
                            className: "text-base text-gray-400 hover:text-white",
                            children: "SushiSwap AMM"
                          })
                        }), Object(y.jsx)("li", {
                          children: Object(y.jsx)("a", {
                            href: "https://app.sushi.com/bento",
                            className: "text-base text-gray-400 hover:text-white",
                            children: "BentoBox Dapps"
                          })
                        }), Object(y.jsx)("li", {
                          children: Object(y.jsx)("a", {
                            href: "https://app.sushi.com/bento/kashi",
                            className: "text-base text-gray-400 hover:text-white",
                            children: "Kashi Lending"
                          })
                        }), Object(y.jsx)("li", {
                          children: Object(y.jsx)("a", {
                            href: "https://api.sushipro.io",
                            className: "text-base text-gray-400 hover:text-white",
                            children: "API"
                          })
                        })]
                      })]
                    }), Object(y.jsxs)("div", {
                      children: [Object(y.jsx)("h3", {
                        className: "text-sm font-semibold text-white tracking-wider uppercase",
                        children: "Support"
                      }), Object(y.jsxs)("ul", {
                        className: "mt-4 space-y-4",
                        children: [Object(y.jsx)("li", {
                          children: Object(y.jsx)("a", {
                            href: "https://docs.sushi.com",
                            className: "text-base text-gray-400 hover:text-white",
                            children: "Tutorials"
                          })
                        }), Object(y.jsx)("li", {
                          children: Object(y.jsx)("a", {
                            href: "https://dev.sushi.com",
                            className: "text-base text-gray-400 hover:text-white",
                            children: "Documentation"
                          })
                        }), Object(y.jsx)("li", {
                          children: Object(y.jsx)("a", {
                            href: "https://discord.gg/CD2YdZzb7Z",
                            className: "text-base text-gray-400 hover:text-white",
                            children: "Discord"
                          })
                        }), Object(y.jsx)("li", {
                          children: Object(y.jsx)("a", {
                            href: "https://forum.sushi.com",
                            className: "text-base text-gray-400 hover:text-white",
                            children: "Forum"
                          })
                        })]
                      })]
                    }), Object(y.jsxs)("div", {
                      children: [Object(y.jsx)("h3", {
                        className: "text-sm font-semibold text-white tracking-wider uppercase",
                        children: "Protocol"
                      }), Object(y.jsxs)("ul", {
                        className: "mt-4 space-y-4",
                        children: [Object(y.jsx)("li", {
                          children: Object(y.jsx)(b.b, {
                            to: "/team",
                            className: "text-base text-gray-400 hover:text-white",
                            children: "Meet Sushi"
                          })
                        }), Object(y.jsx)("li", {
                          children: Object(y.jsx)("a", {
                            href: "https://snapshot.org/#/sushi",
                            className: "text-base text-gray-400 hover:text-white",
                            children: "Vote"
                          })
                        }), Object(y.jsx)("li", {
                          children: Object(y.jsx)("a", {
                            href: "https://app.sushi.com/add/ETH",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-base text-gray-400 hover:text-white",
                            children: "Create a Pair"
                          })
                        }), Object(y.jsx)("li", {
                          children: Object(y.jsx)("a", {
                            href: "https://forms.gle/dUpFdzZiJBYGPi2k8",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-base text-gray-400 hover:text-white",
                            children: "Register for Onsen"
                          })
                        })]
                      })]
                    })]
                  })
                })]
              })
            })
          })
        },
        C = s(61),
        T = function(e) {
          var t = e.children;
          return Object(y.jsx)("div", {
            children: Object(y.jsx)(C.a, {
              offset: 0,
              children: function() {
                return Object(y.jsx)("div", {
                  className: "flex flex-row space-x-6 mx-auto overflow-x-scroll no-scrollbar",
                  children: t
                })
              }
            })
          })
        },
        F = s(62),
        L = s.n(F),
        S = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2
        }),
        R = function(e) {
          return L()(e).format("0.[00]a")
        };
      var P = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (isNaN(e) || "" === e || void 0 === e) return t ? "$0" : 0;
          var s = parseFloat(e);
          if (s > 5e8) return (t ? "$" : "") + R(s.toFixed(0));
          if (0 === s) return t ? "$0" : 0;
          if (s < 1e-4 && s > 0) return t ? "< $0.0001" : "< 0.0001";
          if (s > 1e3) return t ? "$" + Number(parseFloat(s).toFixed(0)).toLocaleString() : "" + Number(parseFloat(s).toFixed(0)).toLocaleString();
          if (t) {
            if (s < .1) return "$" + Number(parseFloat(s).toFixed(4));
            var r = S.format(s);
            return "$" + r.slice(1, r.length)
          }
          return Number(parseFloat(s).toFixed(5))
        },
        H = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (isNaN(e) || "" === e || void 0 === e) return t ? {
            prefix: "$",
            number: 0,
            suffix: ""
          } : {
            prefix: "",
            number: 0,
            suffix: ""
          };
          var s = parseFloat(e);
          if (s > 5e8) {
            var r = R(s.toFixed(0)),
              i = r.split(""),
              a = i.pop(),
              n = i.join("");
            return t ? {
              prefix: "$",
              number: n,
              suffix: a
            } : {
              prefix: "",
              number: n,
              suffix: a
            }
          }
          if (0 === s) return t ? {
            prefix: "$",
            number: 0,
            suffix: ""
          } : {
            prefix: "",
            number: 0,
            suffix: ""
          };
          if (s < 1e-4 && s > 0) return t ? {
            prefix: "< $",
            number: 1e-4,
            suffix: ""
          } : {
            prefix: "<",
            number: 1e-4,
            suffix: ""
          };
          if (s > 1e3) {
            var c = Number(parseFloat(s).toFixed(0)).toLocaleString();
            return t ? {
              prefix: "$",
              number: c,
              suffix: ""
            } : {
              prefix: "",
              number: c,
              suffix: ""
            }
          }
          if (t) {
            if (s < .1) return {
              prefix: "$",
              number: Number(parseFloat(s).toFixed(4)),
              suffix: ""
            };
            var o = S.format(s);
            return {
              prefix: "$",
              number: o.slice(1, o.length),
              suffix: ""
            }
          }
          return Number(parseFloat(s).toFixed(5))
        },
        M = s(40),
        D = s.n(M),
        I = (s(126), function(e) {
          var t = e.imgUrl,
            s = e.marginLeft,
            r = e.title,
            i = e.description,
            a = e.cta,
            n = e.ctaLink,
            c = e.customSize,
            o = e.paddingRight,
            l = void 0 !== o && o;
          return Object(y.jsx)(y.Fragment, {
            children: Object(y.jsx)("div", {
              className: "flex flex-row space-x-6 " + (s && "ml-0 sm:ml-20") + (l && " pr-10"),
              children: Object(y.jsx)("div", {
                className: "flow-root bg-neutral-800 rounded-lg px-8 pb-8",
                style: {
                  width: "281px",
                  height: "255px"
                },
                children: Object(y.jsxs)("div", {
                  className: "-mt-16 mx-auto text-center",
                  children: [Object(y.jsx)("div", {
                    className: "inline-flex items-center justify-center rounded-full shadow-lg relative overflow-hidden",
                    style: {
                      backgroundImage: "linear-gradient(224.43deg, #0D0415 -16.69%, #1B2152 86.36%)",
                      backgroundPosition: "center bottom",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      width: "123px",
                      height: "123px"
                    },
                    children: Object(y.jsx)("img", {
                      className: "".concat(c || "w-20 h-20", " p-2"),
                      alt: "",
                      src: t
                    })
                  }), Object(y.jsx)("h3", {
                    className: "mt-2 text-lg font-semibold text-white tracking-tight",
                    children: r
                  }), Object(y.jsx)("p", {
                    className: "mt-2 text-sm text-gray-500",
                    children: i
                  }), Object(y.jsx)("div", {
                    className: "rounded-md shadow mt-4",
                    style: {
                      backgroundImage: "linear-gradient(to right, #016eda, #d900c0)"
                    },
                    children: Object(y.jsx)("a", {
                      href: n,
                      className: "text-white w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md",
                      children: a
                    })
                  })]
                })
              })
            })
          })
        }),
        W = function(e) {
          var t = e.imgUrl,
            s = e.marginLeft,
            r = e.title,
            i = e.description,
            a = e.paddingRight,
            n = void 0 !== a && a;
          return Object(y.jsx)(y.Fragment, {
            children: Object(y.jsx)("div", {
              className: "flex flex-row space-x-6 " + (s && "ml-0 sm:ml-20") + (n ? " pr-10" : ""),
              children: Object(y.jsx)("div", {
                className: "flow-root bg-neutral-800 rounded-lg px-8 py-8",
                style: {
                  width: "281px",
                  height: "255px"
                },
                children: Object(y.jsxs)("div", {
                  className: "mx-auto text-center",
                  children: [Object(y.jsx)("img", {
                    className: "text-center mx-auto",
                    style: {
                      width: "111px",
                      height: "111px"
                    },
                    src: t,
                    alt: ""
                  }), Object(y.jsx)("h3", {
                    className: "mt-2 text-4xl font-semibold text-white tracking-tight",
                    children: r
                  }), Object(y.jsx)("p", {
                    className: "mt-2 text-base text-gray-500",
                    children: i
                  })]
                })
              })
            })
          })
        },
        B = function(e) {
          var t = e.logoUrl,
            s = e.name,
            r = e.url;
          return Object(y.jsx)(y.Fragment, {
            children: Object(y.jsx)("a", {
              href: r,
              target: "_blank",
              rel: "noopener noreferrer",
              children: Object(y.jsx)("div", {
                className: "flex flex-row space-x-6",
                children: Object(y.jsx)("div", {
                  className: "flow-root rounded-lg mx-auto",
                  children: Object(y.jsxs)("div", {
                    className: "mx-auto text-center",
                    children: [Object(y.jsx)("img", {
                      className: "text-center mx-auto h-auto",
                      style: {
                        width: "111px"
                      },
                      src: t,
                      alt: ""
                    }), Object(y.jsx)("p", {
                      className: "mt-2 text-base text-gray-500",
                      children: s
                    })]
                  })
                })
              })
            })
          })
        },
        G = function() {
          var e = Object(r.useState)(!1),
            t = Object(O.a)(e, 2),
            s = t[0],
            a = t[1],
            n = Object(r.useState)(),
            c = Object(O.a)(n, 2),
            o = c[0],
            l = c[1];
          Object(r.useEffect)((function() {
            (function() {
              var e = Object(w.a)(f.a.mark((function e() {
                var t, s, r, i, a, n;
                return f.a.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, Promise.all([D.a.sushi.priceUSD(), D.a.exchange.factory()]);
                    case 2:
                      t = e.sent, console.log(t), s = H(t[0], !0), r = H(t[1].liquidityUSD, !0), i = H(t[1].volumeUSD, !0), a = H(t[1].pairCount, !1), n = {
                        primary: [{
                          formatted: P(t[0], !0),
                          number: Number(s.number),
                          title: "$SUSHI Price",
                          decimalPlaces: 2,
                          prefix: s.prefix,
                          suffix: s.suffix
                        }, {
                          formatted: P(t[1].liquidityUSD, !0),
                          number: Number(r.number),
                          title: "Total Liquidity",
                          decimalPlaces: 0,
                          prefix: r.prefix,
                          suffix: r.suffix
                        }, {
                          formatted: P(t[1].volumeUSD, !0),
                          number: Number(i),
                          title: "Total Volume",
                          decimalPlaces: 0,
                          prefix: i.prefix,
                          suffix: i.suffix
                        }, {
                          formatted: P(t[1].pairCount, !1),
                          number: Number(a),
                          title: "Total Pairs",
                          decimalPlaces: 0
                        }],
                        secondary: []
                      }, console.log(n), l(n);
                    case 11:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })));
              return function() {
                return e.apply(this, arguments)
              }
            })()()
          }), []);
          var h = i.a.createRef();
          return Object(y.jsxs)(y.Fragment, {
            children: [Object(y.jsxs)("div", {
              className: "min-h-screen relative overflow-hidden",
              style: {
                backgroundColor: "#0D0415"
              },
              children: [Object(y.jsxs)("div", {
                className: "relative pt-6",
                style: {
                  backgroundImage: "url('https://raw.githubusercontent.com/sushiswap/sushi-content/master/images/neon-street.jpg')",
                  backgroundPosition: "center -5rem",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                },
                children: [Object(y.jsx)(U, {
                  setIsOpen: a,
                  isOpen: s
                }), Object(y.jsx)(k, {
                  setIsOpen: a,
                  isOpen: s
                }), Object(y.jsx)("div", {
                  className: "max-w-2xl mx-auto px-5 sm:px-4 pt-6",
                  children: Object(y.jsxs)("div", {
                    className: "flex flex-col space-y-4 items-center",
                    children: [Object(y.jsx)("img", {
                      className: "w-32 sm:w-52 mx-auto",
                      src: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/products/thicker-neon.png",
                      alt: ""
                    }), Object(y.jsx)("div", {
                      className: "text-4xl sm:text-5xl font-semibold text-white text-center",
                      style: {
                        maxWidth: "698px"
                      },
                      children: "Be a DeFi Chef with Sushi."
                    }), Object(y.jsx)("div", {
                      className: "pt-4 text-lg font-base text-center",
                      style: {
                        color: "#E3E3E3"
                      },
                      children: "Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, community driven platform. Welcome home to DeFi."
                    }), Object(y.jsxs)("div", {
                      className: "w-full sm:w-auto pt-6 max-w-lg mx-auto sm:flex sm:justify-center sm:space-x-6",
                      children: [Object(y.jsx)("div", {
                        className: "rounded-md shadow-lg",
                        style: {
                          backgroundImage: "linear-gradient(to right, #016eda, #d900c0)"
                        },
                        children: Object(y.jsx)("a", {
                          href: "https://app.sushi.com/swap",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "shadow-strong text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md",
                          children: "Enter App"
                        })
                      }), Object(y.jsx)("div", {
                        className: "w-full sm:w-auto mt-3 rounded-md shadow sm:mt-0 sm:ml-3 bg-neutral-700",
                        children: Object(y.jsx)("button", {
                          onClick: function() {
                            return h.current.scrollIntoView({
                              behavior: "smooth",
                              block: "start"
                            })
                          },
                          className: "text-white w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md",
                          children: "Learn More"
                        })
                      })]
                    })]
                  })
                }), Object(y.jsx)("div", {
                  className: "max-w-5xl mx-auto px-4 pt-16",
                  children: Object(y.jsx)("div", {
                    className: "grid grid-cols-2 lg:grid-cols-4 gap-6",
                    children: o && o.primary.map((function(e) {
                      return Object(y.jsxs)("div", {
                        className: "bg-neutral-800 flex flex-col items-center px-6 sm:px-14 py-8 rounded-md text-center",
                        children: [Object(y.jsx)("div", {
                          className: "text-4xl font-semibold text-white",
                          children: e.formatted
                        }), Object(y.jsx)("div", {
                          className: "text-sm",
                          style: {
                            color: "#7F7F7F"
                          },
                          children: e.title
                        })]
                      }, e.title)
                    }))
                  })
                }), Object(y.jsx)("div", {
                  className: "2xl:max-w-7xl mx-auto px-10 pt-8",
                  children: Object(y.jsx)(T, {
                    children: o && o.secondary.map((function(e) {
                      return Object(y.jsxs)("div", {
                        className: "ml-40 flex flex-col items-center px-14 py-8 rounded-md",
                        children: [Object(y.jsx)("div", {
                          className: "text-4xl font-semibold text-white",
                          children: e.value
                        }), Object(y.jsx)("div", {
                          className: "text-sm",
                          style: {
                            color: "#7F7F7F"
                          },
                          children: e.title
                        })]
                      }, e.title)
                    }))
                  })
                })]
              }), Object(y.jsx)("div", {
                className: "max-w-3xl mx-auto px-4 pt-10 sm:pt-28 pb-4",
                children: Object(y.jsxs)("div", {
                  className: "text-2xl sm:text-4xl font-semibold text-white text-center",
                  style: {
                    maxWidth: "902px"
                  },
                  ref: h,
                  children: ["Michelin star-worthy DeFi innovations crafted by our master chefs", " "]
                })
              }), Object(y.jsx)("div", {
                className: "2xl:max-w-screen-2xl mx-auto pt-10",
                children: Object(y.jsxs)("div", {
                  className: "flex flex-row space-x-6 items-center mx-auto px-10 pt-20 pb-8 overflow-x-scroll no-scrollbar",
                  children: [Object(y.jsx)(I, {
                    imgUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/products/chopsticks.png",
                    marginLeft: !0,
                    title: "Multi-chain AMM",
                    description: "The most competitive rates for DeFi bluechips anywhere. Switch to other chains in one click.",
                    cta: "Enter Exchange",
                    ctaLink: "https://app.sushi.com",
                    customSize: "w-20 h-22"
                  }), Object(y.jsx)(I, {
                    imgUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/products/kashi-color-flat.png",
                    title: "Kashi Lending & Leverage",
                    description: "Isolated lending markets, elastic interest rates. Leverage long short or create your own market.",
                    cta: "Enter Kashi",
                    ctaLink: "https://app.sushi.com/bento/kashi"
                  }), Object(y.jsx)(I, {
                    imgUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/products/bento-color.png",
                    title: "BentoBox dApps",
                    description: "An innovative ecosystem to use dapps gas-efficiently and gain extra yield. Onchain mini dapps.",
                    cta: "Enter BentoBox",
                    ctaLink: "https://app.sushi.com/bento",
                    customSize: "w-20 h-16"
                  }), Object(y.jsx)(I, {
                    imgUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/products/xsushi.png",
                    title: "xSUSHI staking",
                    description: "Earn governance rights and 0.05% of all swaps from all chains in one simple place.",
                    cta: "Enter SushiBar",
                    ctaLink: "https://app.sushi.com/stake"
                  }), Object(y.jsx)(I, {
                    imgUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/products/onsen-icon.png",
                    title: "Onsen Program",
                    description: "Accelerate your project with onsen. Find the best yields anywhere in DeFi hands down.",
                    cta: "Browse Yields",
                    ctaLink: "https://app.sushi.com/yield",
                    paddingRight: !0
                  })]
                })
              }), Object(y.jsx)("div", {
                className: "max-w-2xl mx-auto px-4 pt-10 sm:pt-28",
                children: Object(y.jsxs)("div", {
                  className: "text-2xl sm:text-4xl font-semibold text-white text-center",
                  style: {
                    maxWidth: "902px"
                  },
                  children: ["An evolving community for an evolving DeFi landscape.", " "]
                })
              }), Object(y.jsx)("div", {
                className: "2xl:max-w-screen-2xl mx-auto pt-10",
                children: Object(y.jsxs)("div", {
                  className: "flex flex-row space-x-6 items-center mx-auto px-10 py-8 overflow-x-scroll no-scrollbar",
                  children: [Object(y.jsx)(W, {
                    imgUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/icons/wallet.png",
                    marginLeft: !0,
                    title: "20+",
                    description: "Wallets Supported"
                  }), Object(y.jsx)(W, {
                    imgUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/icons/intersection.png",
                    title: "14",
                    description: "Chains Supported"
                  }), Object(y.jsx)(W, {
                    imgUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/icons/group.png",
                    title: "25k+",
                    description: "Discord Members"
                  }), Object(y.jsx)(W, {
                    imgUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/icons/sushi-outline.png",
                    title: "150k+",
                    description: "Sushi Holders",
                    paddingRight: !0
                  })]
                })
              }), Object(y.jsx)("div", {
                className: "max-w-2xl mx-auto px-4 pt-10 sm:pt-28",
                children: Object(y.jsx)("div", {
                  className: "text-2xl sm:text-4xl font-semibold text-white text-center",
                  style: {
                    maxWidth: "902px"
                  },
                  children: "Meet the partners helping us cook up the tastiest dishes in DeFi."
                })
              }), Object(y.jsx)("div", {
                className: "max-w-6xl pt-10 pb-32 mx-auto",
                children: Object(y.jsxs)("div", {
                  className: "grid grid-cols-2 lg:grid-cols-6 gap-6",
                  children: [Object(y.jsx)(B, {
                    logoUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/partners/yearn-neon.png",
                    name: "Yearn Finance",
                    url: "https://yearn.finance/"
                  }), Object(y.jsx)(B, {
                    logoUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/partners/cream-neon.png",
                    name: "CREAM Finance",
                    url: "https://cream.finance/"
                  }), Object(y.jsx)(B, {
                    logoUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/partners/aave-neon.png",
                    name: "Aave",
                    url: "https://aave.com/"
                  }), Object(y.jsx)(B, {
                    logoUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/partners/pickle-neon.png",
                    name: "Pickle Finance",
                    url: "https://pickle.finance/"
                  }), Object(y.jsx)(B, {
                    logoUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/partners/akro-neon.png",
                    name: "Akropolis",
                    url: "https://akropolis.io/"
                  }), Object(y.jsx)(B, {
                    logoUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/partners/keep3r-neon.png",
                    name: "Keep3r Network",
                    url: "https://keep3r.network/"
                  })]
                })
              })]
            }), Object(y.jsx)(E, {})]
          })
        },
        Y = [{
          imageUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/1.jpg",
          name: "0xMaki",
          title: "Fearless Leader",
          bio: "Hi everyone, this is my brief intro to the world because we are WHAT? You guessed it - the best.",
          twitter: "@0xMaki",
          twitterUrl: "https://twitter.com/0xMaki"
        }, {
          imageUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/2.jpg",
          name: "Joseph Delong",
          title: "CTO",
          bio: "Hi everyone, this is my brief intro to the world because we are WHAT? You guessed it - the best.",
          twitter: "@josephdelong",
          twitterUrl: "https://twitter.com/josephdelong"
        }, {
          imageUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/3.jpg",
          name: "Omakase",
          title: "Core Developer",
          bio: "Hi everyone, this is my brief intro to the world because we are WHAT? You guessed it - the best.",
          twitter: "@OmakaseBar",
          twitterUrl: "https://twitter.com/OmakaseBar"
        }, {
          imageUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/4.jpg",
          name: "Jiro Ono",
          title: "Core Developer",
          bio: "Hi everyone, this is my brief intro to the world because we are WHAT? You guessed it - the best.",
          twitter: "@0xJiro",
          twitterUrl: "https://twitter.com/0xJiro"
        }, {
          imageUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/5.jpg",
          name: "LevX",
          title: "Core Developer",
          bio: "Hi everyone, this is my brief intro to the world because we are WHAT? You guessed it - the best.",
          twitter: "@LevxApp",
          twitterUrl: "https://twitter.com/LevxApp"
        }, {
          imageUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/6.jpg",
          name: "0xKeno",
          title: "Core Developer",
          bio: "Hi everyone, this is my brief intro to the world because we are WHAT? You guessed it - the best.",
          twitter: "@0xKeno",
          twitterUrl: "https://twitter.com/0xKeno"
        }, {
          imageUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/7.jpg",
          name: "I'm Software",
          title: "Core Developer",
          bio: "Hi everyone, this is my brief intro to the world because we are WHAT? You guessed it - the best.",
          twitter: "@MatthewLilley",
          twitterUrl: "https://twitter.com/MatthewLilley"
        }, {
          imageUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/8.jpg",
          name: "0xNori",
          title: "Security Team Lead",
          bio: "Hi everyone, this is my brief intro to the world because we are WHAT? You guessed it - the best.",
          twitter: "@0xNori",
          twitterUrl: "https://twitter.com/0xNori"
        }, {
          imageUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/9.jpg",
          name: "Gonpachi",
          title: "Miso Team Lead",
          bio: "Hi everyone, this is my brief intro to the world because we are WHAT? You guessed it - the best.",
          twitter: "@chefgonpachi",
          twitterUrl: "https://twitter.com/chefgonpachi"
        }, {
          imageUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/10.jpg",
          name: "Chester LaCroix",
          title: "UX/UI Design Lead",
          bio: "Hi everyone, this is my brief intro to the world because we are WHAT? You guessed it - the best.",
          twitter: "@chester_lacroix",
          twitterUrl: "https://twitter.com/chester_lacroix"
        }, {
          imageUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/11.jpg",
          name: "Kastrye",
          title: "Brand Graphic Designer",
          bio: "Hi everyone, this is my brief intro to the world because we are WHAT? You guessed it - the best.",
          twitter: "@kastrye",
          twitterUrl: "https://twitter.com/kastrye"
        }, {
          imageUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/12.jpg",
          name: "Ayoki",
          title: "BD & Marketing Lead",
          bio: "Hi everyone, this is my brief intro to the world because we are WHAT? You guessed it - the best.",
          twitter: "@AyokiRoll",
          twitterUrl: "https://twitter.com/AyokiRoll"
        }, {
          imageUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/13.jpg",
          name: "0xChu",
          title: "Product Manager",
          bio: "Hi everyone, this is my brief intro to the world because we are WHAT? You guessed it - the best.",
          twitter: "@0xChu",
          twitterUrl: "https://twitter.com/0xChu"
        }, {
          imageUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/14.jpg",
          name: "AG",
          title: "Asia Lead",
          bio: "Hi everyone, this is my brief intro to the world because we are WHAT? You guessed it - the best.",
          twitter: "@agsushiswap",
          twitterUrl: "https://twitter.com/agsushiswap"
        }, {
          imageUrl: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/15.jpg",
          name: "0xCabbage",
          title: "UX/UI Design",
          bio: "Hi everyone, this is my brief intro to the world because we are WHAT? You guessed it - the best.",
          twitter: "@Cabbage0x",
          twitterUrl: "https://twitter.com/Cabbage0x"
        }],
        V = function(e) {
          var t = e.details;
          return Object(y.jsx)(y.Fragment, {
            children: Object(y.jsx)("div", {
              className: "flex flex-row space-x-6 pt-10",
              children: Object(y.jsx)("div", {
                className: "flow-root",
                children: Object(y.jsxs)("div", {
                  className: "mx-auto",
                  children: [Object(y.jsx)("img", {
                    className: "text-center mx-auto rounded-md",
                    style: {
                      border: "2px solid #202231"
                    },
                    src: t.imageUrl,
                    alt: ""
                  }), Object(y.jsx)("h3", {
                    className: "mt-4 text-xl text-white tracking-tight",
                    children: t.name
                  }), Object(y.jsx)("p", {
                    className: "text-medium text-gray-500",
                    children: t.title
                  }), Object(y.jsxs)("a", {
                    href: t.twitterUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center mt-6",
                    children: [Object(y.jsx)("svg", {
                      className: "h-5 w-5 mr-2",
                      fill: "#6a7281",
                      viewBox: "0 0 24 24",
                      "aria-hidden": "true",
                      children: Object(y.jsx)("path", {
                        d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      })
                    }), Object(y.jsx)("p", {
                      className: "font-bold text-gray-500",
                      children: t.twitter
                    })]
                  })]
                })
              })
            })
          })
        },
        $ = function() {
          var e = Object(r.useState)(!1),
            t = Object(O.a)(e, 2),
            s = t[0],
            i = t[1];
          return Object(y.jsxs)(y.Fragment, {
            children: [Object(y.jsx)("div", {
              className: "min-h-screen relative overflow-hidden",
              style: {
                backgroundColor: "#0D0415"
              },
              children: Object(y.jsxs)("div", {
                className: "relative min-h-screen pt-6",
                children: [Object(y.jsx)(U, {
                  setIsOpen: i,
                  isOpen: s
                }), Object(y.jsx)(k, {
                  setIsOpen: i,
                  isOpen: s
                }), Object(y.jsxs)("div", {
                  className: "max-w-5xl px-4 pt-20 mx-auto",
                  children: [Object(y.jsx)("div", {
                    className: "text-4xl font-semibold text-white",
                    children: "Meet the Team"
                  }), Object(y.jsxs)("div", {
                    className: "mt-4 text-lg font-light text-white",
                    style: {
                      lineHeight: "24px"
                    },
                    children: ["Get to know the chefs behind the scenes cooking ", Object(y.jsx)("br", {}), "up the tastiest dishes DeFi has to offer."]
                  }), Object(y.jsxs)("div", {
                    className: "pt-10",
                    children: [Object(y.jsx)("img", {
                      className: "w-full h-auto rounded-lg",
                      src: "https://raw.githubusercontent.com/sushiswap/sushi-content/master/core/group.jpg"
                    }), Object(y.jsx)("a", {
                      href: "https://twitter.com/Poison_Hikari",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: Object(y.jsx)("div", {
                        className: "pt-4 text-gray-500",
                        children: "Artwork by @Poison_Hikari"
                      })
                    })]
                  })]
                }), Object(y.jsx)("div", {
                  className: "max-w-5xl px-4 pt-8 md:pt-12 lg:pt-16 pb-48 mx-auto",
                  children: Object(y.jsx)("div", {
                    className: "grid grid-cols-2 lg:grid-cols-5 gap-6",
                    children: Y && Y.map((function(e) {
                      return Object(y.jsx)(V, {
                        details: e
                      }, e.name)
                    }))
                  })
                })]
              })
            }), Object(y.jsx)(E, {})]
          })
        },
        z = function() {
          return Object(y.jsx)(y.Fragment, {
            children: Object(y.jsx)(b.a, {
              children: Object(y.jsxs)(j.d, {
                children: [Object(y.jsx)(j.b, {
                  exact: !0,
                  path: "/",
                  component: G
                }), Object(y.jsx)(j.b, {
                  exact: !0,
                  path: "/team",
                  component: $
                }), Object(y.jsx)(j.a, {
                  to: "/"
                })]
              })
            })
          })
        },
        K = Object({
          NODE_ENV: "production",
          PUBLIC_URL: ".",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0,
          FAST_REFRESH: !0,
          REACT_APP_VERCEL_GIT_COMMIT_SHA: "b7d3da3c9e5c018f5ade545ab597fe21e03f6da0",
          REACT_APP_VERCEL_URL: "sushiswap-landing-802xs0eb6-teamsushi.vercel.app",
          REACT_APP_VERCEL_ENV: "preview",
          REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "omakasebar",
          REACT_APP_VERCEL_GIT_PROVIDER: "github",
          REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_NAME: "omakasebar",
          REACT_APP_VERCEL_GIT_REPO_OWNER: "sushiswap",
          REACT_APP_VERCEL_GIT_REPO_SLUG: "sushiswap-landing",
          REACT_APP_VERCEL_GIT_COMMIT_MESSAGE: "fix: discord total",
          REACT_APP_VERCEL_GIT_REPO_ID: "320403753",
          REACT_APP_VERCEL_GIT_COMMIT_REF: "v2"
        }).REACT_APP_GOOGLE_ANALYTICS_ID;
      "string" === typeof K ? (o.a.initialize(K), o.a.set({
        customBrowserType: a.isMobile ? "web3" in window || "ethereum" in window ? "mobileWeb3" : "mobileRegular" : "desktop"
      })) : o.a.initialize("test", {
        testMode: !0,
        debug: !0
      }), window.addEventListener("error", (function(e) {
        o.a.exception({
          description: "".concat(e.message, " @ ").concat(e.filename, ":").concat(e.lineno, ":").concat(e.colno),
          fatal: !0
        })
      })), c.a.render(Object(y.jsx)(z, {}), document.getElementById("root"))
    },
    66: function(e, t, s) {}
  },
  [
    [127, 1, 2]
  ]
]);