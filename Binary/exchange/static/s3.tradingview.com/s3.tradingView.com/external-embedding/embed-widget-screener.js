! function() {
  "use strict";
  var t, e = function(t, r) {
    return (e = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(t, e) {
        t.__proto__ = e
      } || function(t, e) {
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
      })(t, r)
  };
  var r = ((t = {})["color-brand"] = "#2196f3", t["color-gull-gray"] = "#9db2bd", t["color-scooter"] = "#38acdb", t["color-curious-blue"] = "#299dcd", t);
  var i = document.createElement("a");

  function n(t) {
    i.href = t, i.host || (i.href = i.href);
    var e = i.host;
    i.pathname;
    return "http:" === i.protocol && (e = e.replace(/:80$/, "")), "https:" === i.protocol && (e = e.replace(/:443$/, "")), {
      host: e,
      pathname: ("/" === i.pathname[0] ? "" : "/") + i.pathname,
      href: i.href
    }
  }
  var o, a, s = {
    events: {
      width: 510,
      height: 600,
      isTransparent: !1,
      hideImportanceIndicator: !1,
      autosize: !1
    },
    hotlists: {
      width: 400,
      height: 600,
      isTransparent: !1,
      dateRange: "12M",
      showSymbolLogo: !1
    },
    screener: {
      width: 1100,
      height: 512,
      defaultColumn: "overview",
      defaultScreen: "general",
      market: "forex",
      showToolbar: !0,
      isTransparent: !1
    },
    tickers: {
      isTransparent: !1,
      showSymbolLogo: !1
    },
    financials: {
      width: 480,
      height: 830,
      autosize: !1,
      symbol: "NASDAQ:AAPL",
      isTransparent: !1,
      displayMode: "regular",
      largeChartUrl: ""
    },
    timeline: {
      width: 480,
      height: 830,
      autosize: !1,
      symbol: "BITSTAMP:BTCUSD",
      isTransparent: !1,
      displayMode: "regular",
      largeChartUrl: ""
    },
    "crypto-mkt-screener": {
      width: 1e3,
      height: 490,
      defaultColumn: "overview",
      market: "crypto",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      isTransparent: !1
    },
    "forex-cross-rates": {
      width: 770,
      height: 400,
      isTransparent: !1,
      currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"],
      frameElementId: null,
      autosize: !1
    },
    "forex-heat-map": {
      width: 770,
      height: 400,
      isTransparent: !1,
      currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"],
      frameElementId: null,
      autosize: !1
    },
    "market-overview": {
      width: 400,
      height: 650,
      isTransparent: !1,
      dateRange: "12M",
      showSymbolLogo: !0
    },
    "market-quotes": {
      width: 770,
      height: 450,
      isTransparent: !1,
      showSymbolLogo: !1
    },
    "mini-symbol-overview": {
      width: 350,
      height: 220,
      symbol: "FX:EURUSD",
      dateRange: "12M",
      trendLineColor: "#37a6ef",
      underLineColor: "#e3f2fd",
      isTransparent: !1,
      autosize: !1,
      largeChartUrl: ""
    },
    "single-quote": {
      width: 350,
      symbol: "FX:EURUSD",
      isTransparent: !1
    },
    "symbol-profile": {
      width: 480,
      height: 650,
      symbol: "NASDAQ:AAPL",
      isTransparent: !1
    },
    "symbol-info": {
      width: 1e3,
      symbol: "NASDAQ:AAPL",
      isTransparent: !1
    },
    "technical-analysis": {
      interval: "1m",
      width: 425,
      isTransparent: !1,
      height: 450,
      symbol: "NASDAQ:AAPL",
      showIntervalTabs: !0
    },
    "ticker-tape": {
      isTransparent: !1,
      displayMode: "adaptive",
      showSymbolLogo: !1
    }
  };
  ! function(t) {
    ! function(t) {
      t.SetSymbol = "set-symbol", t.SetInterval = "set-interval"
    }(t.Names || (t.Names = {}))
  }(o || (o = {})),
  function(t) {
    ! function(t) {
      t.SymbolClick = "tv-widget-symbol-click", t.WidgetLoad = "tv-widget-load", t.ResizeIframe = "tv-widget-resize-iframe", t.NoData = "tv-widget-no-data"
    }(t.Names || (t.Names = {}))
  }(a || (a = {}));
  var c = ["locale", "symbol"],
    l = function() {
      var t = this;
      this._getScriptsInfo().forEach((function(e) {
        t._replaceScript(e)
      }))
    },
    h = {
      widgetId: {
        configurable: !0
      },
      widgetUtmName: {
        configurable: !0
      },
      defaultSettings: {
        configurable: !0
      },
      propertiesToWorkWith: {
        configurable: !0
      },
      useWidgetHostForProduction: {
        configurable: !0
      },
      propertiesToSkipInHash: {
        configurable: !0
      },
      propertiesToAddToGetParams: {
        configurable: !0
      }
    };
  h.widgetId.get = function() {
    throw new Error("Method must be overridden")
  }, h.widgetUtmName.get = function() {
    return this.widgetId
  }, h.defaultSettings.get = function() {
    return s[this.widgetId]
  }, h.propertiesToWorkWith.get = function() {
    return []
  }, h.useWidgetHostForProduction.get = function() {
    return !1
  }, l.prototype.filterRawSettings = function(t) {
    var e = this,
      r = {};
    return Object.keys(t).forEach((function(i) {
      -1 !== e.propertiesToWorkWith.indexOf(i) && (r[i] = t[i])
    })), r
  }, h.propertiesToSkipInHash.get = function() {
    return ["customer", "locale"]
  }, h.propertiesToAddToGetParams.get = function() {
    return ["locale"]
  }, l.prototype._getScriptsInfo = function() {
    var t = function() {
      if (document.currentScript) return document.currentScript.src;
      for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++)
        if ("interactive" === t[e].readyState) return t[e].src;
      try {
        throw new Error
      } catch (i) {
        var r = /\((.*?):\d+:\d+\)\s*$/m.exec(i.stack);
        if (r) return r[1]
      }
      return null
    }();
    if (!t) return console.error("Could not self-replace the script, widget embedding has been aborted"), [];
    for (var e = n(t), r = e.host, i = e.href, o = document.getElementsByTagName("script"), a = [], s = 0; s < o.length; s++) {
      var c = o.item(s);
      c.src && n(c.src).href === i && a.push(c)
    }
    var l, h = (void 0 === (l = r) && (l = location.host), -1 !== ["i18n.tradingview.com", "partial.tradingview.com", "www.tradingview.com", "wwwcn.tradingview.com"].indexOf(l) || -1 !== ["d33t3vvu2t2yu5.cloudfront.net", "dwq4do82y8xi7.cloudfront.net", "s.tradingview.com", "s3.tradingview.com"].indexOf(l) || l.match(/^[a-z]{2}\.tradingview\.com/) || l.match(/prod-[^.]+.tradingview.com/) ? "battle" : l.includes("tradingview.com") || l.includes("staging") ? "staging" : l.match(/webcharts/) ? "staging_local" : (l.match(/^localhost(:\d+)?$/), "local"));
    return a.map((function(t) {
      return {
        scriptHost: r,
        scriptEnv: h,
        scriptElement: t
      }
    }))
  }, l.prototype._replaceScript = function(t) {
    var e = this,
      i = t.scriptEnv,
      n = t.scriptHost,
      o = t.scriptElement;
    this.script = o;
    var s = this._scriptContentToJSON(),
      c = function(t) {
        if (null === t) return null;
        var e = t.querySelector("#tradingview-copyright"),
          r = t.querySelector("#tradingview-quotes"),
          i = e || r;
        return i && t.removeChild(i), i
      }(this.script.parentNode),
      l = !!this.script.parentNode.querySelector(".tradingview-widget-copyright");
    this.hasCopyright = c || l, s && (this.settings = this.filterRawSettings(s)), s && this._isValidSettings() || (console.error("Invalid settings provided, fall back to defaults"), this.settings = this.filterRawSettings(this.defaultSettings));
    var h, d = "32px",
      p = isNaN(this.settings.height) ? this.settings.height : this.settings.height + "px",
      u = isNaN(this.settings.width) ? this.settings.width : this.settings.width + "px",
      g = this.script.parentNode.classList.contains("tradingview-widget-container");
    this.script.parentNode && g ? this.iframeContainer = this.script.parentNode : this.iframeContainer = document.createElement("div"), this.iframeContainer.style.width = u, this.iframeContainer.style.height = p, this.iframeContainer.appendChild(((h = document.createElement("style")).innerHTML = "\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\tfont-family: 'Trebuchet MS', Arial, sans-serif !important;\n\t\tcolor: " + r["color-gull-gray"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: " + r["color-brand"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: " + r["color-gull-gray"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: " + r["color-gull-gray"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: " + r["color-scooter"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: " + r["color-curious-blue"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: " + r["color-brand"] + " !important;\n\t}\n\t", h));
    var m = c && !this.settings.whitelabel,
      f = this.hasCopyright ? "calc(" + p + " - " + "32px)" : p;
    this.settings.utm_source = location.hostname, this.settings.utm_medium = l ? "widget_new" : "widget", this.settings.utm_campaign = this.widgetUtmName, this.iframe = this._createIframe(f, u, n, i, o.id);
    var y = this.iframeContainer.querySelector(".tradingview-widget-container__widget");
    if (y ? (this.script.parentNode.replaceChild(this.iframe, y), this.script.parentNode.removeChild(this.script)) : g ? (this.iframeContainer.appendChild(this.iframe), this.script.parentNode.removeChild(this.script)) : (this.iframeContainer.appendChild(this.iframe), this.script.parentNode.replaceChild(this.iframeContainer, this.script)), function(t, e, r) {
        var i = e.contentWindow;
        if (!i) return console.error("Cannot listen to the event from the provided iframe, contentWindow is not available"),
          function() {};

        function n(e) {
          e.source && e.source === i && e.data && e.data.name && e.data.name === t && r(e.data.data)
        }
        window.addEventListener("message", n, !1)
      }(a.Names.ResizeIframe, this.iframe, (function(t) {
        t.width && (e.iframe.style.width = t.width + "px", e.iframeContainer.style.width = t.width + "px"), e.iframe.style.height = t.height + "px", e.iframeContainer.style.height = t.height + (e.hasCopyright ? 32 : 0) + "px"
      })), m) {
      var w = document.createElement("div");
      w.style.height = d, w.style.lineHeight = d, w.style.width = u, w.style.textAlign = "center", w.style.verticalAlign = "middle", w.innerHTML = c.innerHTML, this.iframeContainer.appendChild(w)
    }
  }, l.prototype._iframeSrcBase = function(t, e) {
    var r = "https://www.tradingview-widget.com",
      i = this.useWidgetHostForProduction ? r : "https://s.tradingview.com";
    return this.settings.useWidgetHost ? i = r : "local" === e ? i = "http://" + t : "staging" === e && (i = -1 !== t.indexOf("beta.tradingview.com") ? "https://betacdn.tradingview.com" : "https://" + t), i += "/embed-widget/" + this.widgetId + "/", this.settings.customer && -1 !== this.propertiesToSkipInHash.indexOf("customer") && (i += this.settings.customer + "/"), i
  }, l.prototype._isValidSettings = function() {
    var t = function(t) {
      if (void 0 === t) return !0;
      var e = parseInt(t) + "%" == t + "";
      return parseInt(t) + "" == t + "" || e || "auto" === t
    };
    return t(this.settings.width) && t(this.settings.height)
  }, l.prototype._buildGetQueryString = function() {
    var t = this.propertiesToAddToGetParams.filter((function(t) {
      return -1 !== c.indexOf(t)
    }));
    return 0 === t.length ? "" : "?" + function(t) {
      var e = [];
      for (var r in t) t.hasOwnProperty(r) && null != t[r] && e.push({
        key: r,
        pair: encodeURIComponent(r) + "=" + encodeURIComponent(t[r])
      });
      return e.sort((function(t, e) {
        return t.key > e.key ? 1 : t.key < e.key ? -1 : 0
      })).map((function(t) {
        return t.pair
      })).join("&")
    }(function(t, e) {
      for (var r = Object.create(Object.getPrototypeOf(t)), i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o])
      }
      return r
    }(this.settings, t))
  }, l.prototype._buildHashString = function(t) {
    var e = this,
      r = {};
    return t && (r.frameElementId = t), Object.keys(this.settings).forEach((function(t) {
      -1 === e.propertiesToSkipInHash.indexOf(t) && (r[t] = e.settings[t])
    })), Object.keys(r).length > 0 ? "#" + encodeURIComponent(JSON.stringify(r)) : ""
  }, l.prototype._scriptContentToJSON = function() {
    var t = this.script.innerHTML.trim();
    try {
      return JSON.parse(t)
    } catch (e) {
      return console.error("Widget settings parse error: " + e), null
    }
  }, l.prototype._createIframe = function(t, e, r, i, n) {
    var o = document.createElement("iframe");
    n && (o.id = n), this.settings.enableScrolling || o.setAttribute("scrolling", "no"), o.setAttribute("allowtransparency", !0), o.setAttribute("frameborder", 0), o.style.boxSizing = "border-box", o.style.height = t, o.style.width = e;
    var a = this._iframeSrcBase(r, i) + this._buildGetQueryString() + this._buildHashString(n);
    return o.setAttribute("src", a), o
  }, Object.defineProperties(l.prototype, h), new(function(t) {
    function r() {
      return null !== t && t.apply(this, arguments) || this
    }
    return function(t, r) {
      function i() {
        this.constructor = t
      }
      e(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
    }(r, t), Object.defineProperty(r.prototype, "widgetId", {
      get: function() {
        var t = this.settings;
        return t && "crypto_mkt" === t.screener_type ? "crypto-mkt-screener" : "screener"
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "useWidgetHostForProduction", {
      get: function() {
        return !0
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "widgetUtmName", {
      get: function() {
        var t = this.settings;
        if (t) {
          if ("forex" === t.market) return "forexscreener";
          if ("crypto_mkt" === t.screener_type) return "cryptomktscreener";
          if ("crypto" === t.market) return "cryptoscreener"
        }
        return "screener"
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "propertiesToWorkWith", {
      get: function() {
        return ["colorTheme", "customer", "defaultColumn", "defaultScreen", "displayCurrency", "height", "largeChartUrl", "locale", "market", "screener_type", "showToolbar", "isTransparent", "useWidgetHost", "whitelabel", "width"]
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.filterRawSettings = function(e) {
      var r = t.prototype.filterRawSettings.call(this, e);
      return void 0 !== e.transparency && (r.isTransparent = e.transparency), "crypto_mkt" === r.screener_type && (r.market = "crypto"), r.enableScrolling = !0, r
    }, r
  }(l))
}();