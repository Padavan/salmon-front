"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  var preact_module_exports = {};
  __export(preact_module_exports, {
    Component: () => _,
    Fragment: () => d,
    cloneElement: () => B,
    createContext: () => D,
    createElement: () => v,
    createRef: () => p,
    h: () => v,
    hydrate: () => q,
    isValidElement: () => i,
    options: () => l,
    render: () => S,
    toChildArray: () => A
  });
  function a(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function h(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function v(l3, u3, i3) {
    var t3, o4, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o4 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return y(l3, f3, t3, o4, null);
  }
  function y(n2, i3, t3, o4, r3) {
    var f3 = { type: n2, props: i3, key: t3, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null != l.vnode && l.vnode(f3), f3;
  }
  function p() {
    return { current: null };
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function k(n2, l3) {
    if (null == l3)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? k(n2) : null;
  }
  function b(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return b(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t3, o4, r3;
        n3.__d && (o4 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [o4] : null, u3, null == o4 ? k(t3) : o4, t3.__h), z(u3, t3), t3.__e != o4 && b(t3)));
      });
  }
  function w(n2, l3, u3, i3, t3, o4, r3, f3, s2, a3) {
    var h2, v3, p3, _2, b3, m3, g3, w3 = i3 && i3.__k || c, A2 = w3.length;
    for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
      if (null != (_2 = u3.__k[h2] = null == (_2 = l3[h2]) || "boolean" == typeof _2 ? null : "string" == typeof _2 || "number" == typeof _2 || "bigint" == typeof _2 ? y(null, _2, null, null, _2) : Array.isArray(_2) ? y(d, { children: _2 }, null, null, null) : _2.__b > 0 ? y(_2.type, _2.props, _2.key, null, _2.__v) : _2)) {
        if (_2.__ = u3, _2.__b = u3.__b + 1, null === (p3 = w3[h2]) || p3 && _2.key == p3.key && _2.type === p3.type)
          w3[h2] = void 0;
        else
          for (v3 = 0; v3 < A2; v3++) {
            if ((p3 = w3[v3]) && _2.key == p3.key && _2.type === p3.type) {
              w3[v3] = void 0;
              break;
            }
            p3 = null;
          }
        j(n2, _2, p3 = p3 || e, t3, o4, r3, f3, s2, a3), b3 = _2.__e, (v3 = _2.ref) && p3.ref != v3 && (g3 || (g3 = []), p3.ref && g3.push(p3.ref, null, _2), g3.push(v3, _2.__c || b3, _2)), null != b3 ? (null == m3 && (m3 = b3), "function" == typeof _2.type && null != _2.__k && _2.__k === p3.__k ? _2.__d = s2 = x(_2, s2, n2) : s2 = P(n2, _2, p3, w3, b3, s2), a3 || "option" !== u3.type ? "function" == typeof u3.type && (u3.__d = s2) : n2.value = "") : s2 && p3.__e == s2 && s2.parentNode != n2 && (s2 = k(p3));
      }
    for (u3.__e = m3, h2 = A2; h2--; )
      null != w3[h2] && ("function" == typeof u3.type && null != w3[h2].__e && w3[h2].__e == u3.__d && (u3.__d = k(i3, h2 + 1)), N(w3[h2], w3[h2]));
    if (g3)
      for (h2 = 0; h2 < g3.length; h2++)
        M(g3[h2], g3[++h2], g3[++h2]);
  }
  function x(n2, l3, u3) {
    var i3, t3;
    for (i3 = 0; i3 < n2.__k.length; i3++)
      (t3 = n2.__k[i3]) && (t3.__ = n2, l3 = "function" == typeof t3.type ? x(t3, l3, u3) : P(u3, t3, t3, n2.__k, t3.__e, l3));
    return l3;
  }
  function A(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
      A(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function P(n2, l3, u3, i3, t3, o4) {
    var r3, f3, e4;
    if (void 0 !== l3.__d)
      r3 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != o4 || null == t3.parentNode)
      n:
        if (null == o4 || o4.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o4, e4 = 0; (f3 = f3.nextSibling) && e4 < i3.length; e4 += 2)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o4), r3 = o4;
        }
    return void 0 !== r3 ? r3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var o4;
    for (o4 in u3)
      "children" === o4 || "key" === o4 || o4 in l3 || H(n2, o4, null, u3[o4], i3);
    for (o4 in l3)
      t3 && "function" != typeof l3[o4] || "children" === o4 || "key" === o4 || "value" === o4 || "checked" === o4 || u3[o4] === l3[o4] || H(n2, o4, l3[o4], u3[o4], i3);
  }
  function $(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || s.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t3) {
    var o4;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o4 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o4] = u3, u3 ? i3 || n2.addEventListener(l3, o4 ? T : I, o4) : n2.removeEventListener(l3, o4 ? T : I, o4);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null != u3 && (false !== u3 || "a" === l3[0] && "r" === l3[1]) ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, o4, r3, f3, e4, c3) {
    var s2, h2, v3, y3, p3, k3, b3, m3, g3, x3, A2, P2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e4 = u3.__e = i3.__e, u3.__h = null, r3 = [e4]), (s2 = l.__b) && s2(u3);
    try {
      n:
        if ("function" == typeof P2) {
          if (m3 = u3.props, g3 = (s2 = P2.contextType) && t3[s2.__c], x3 = s2 ? g3 ? g3.props.value : s2.__ : t3, i3.__c ? b3 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u3.__c = h2 = new P2(m3, x3) : (u3.__c = h2 = new _(m3, x3), h2.constructor = P2, h2.render = O), g3 && g3.sub(h2), h2.props = m3, h2.state || (h2.state = {}), h2.context = x3, h2.__n = t3, v3 = h2.__d = true, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != P2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P2.getDerivedStateFromProps(m3, h2.__s))), y3 = h2.props, p3 = h2.state, v3)
            null == P2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
          else {
            if (null == P2.getDerivedStateFromProps && m3 !== y3 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m3, x3), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(m3, h2.__s, x3) || u3.__v === i3.__v) {
              h2.props = m3, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h2.__h.length && f3.push(h2);
              break n;
            }
            null != h2.componentWillUpdate && h2.componentWillUpdate(m3, h2.__s, x3), null != h2.componentDidUpdate && h2.__h.push(function() {
              h2.componentDidUpdate(y3, p3, k3);
            });
          }
          h2.context = x3, h2.props = m3, h2.state = h2.__s, (s2 = l.__r) && s2(u3), h2.__d = false, h2.__v = u3, h2.__P = n2, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, null != h2.getChildContext && (t3 = a(a({}, t3), h2.getChildContext())), v3 || null == h2.getSnapshotBeforeUpdate || (k3 = h2.getSnapshotBeforeUpdate(y3, p3)), A2 = null != s2 && s2.type === d && null == s2.key ? s2.props.children : s2, w(n2, Array.isArray(A2) ? A2 : [A2], u3, i3, t3, o4, r3, f3, e4, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o4, r3, f3, c3);
      (s2 = l.diffed) && s2(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != r3) && (u3.__e = e4, u3.__h = !!c3, r3[r3.indexOf(e4)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l3, u3, i3, t3, o4, r3, f3, c3) {
    var s2, a3, v3, y3 = i3.props, p3 = u3.props, d2 = u3.type, _2 = 0;
    if ("svg" === d2 && (o4 = true), null != r3) {
      for (; _2 < r3.length; _2++)
        if ((s2 = r3[_2]) && (s2 === l3 || (d2 ? s2.localName == d2 : 3 == s2.nodeType))) {
          l3 = s2, r3[_2] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === d2)
        return document.createTextNode(p3);
      l3 = o4 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p3.is && p3), r3 = null, c3 = false;
    }
    if (null === d2)
      y3 === p3 || c3 && l3.data === p3 || (l3.data = p3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), a3 = (y3 = i3.props || e).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
        if (null != r3)
          for (y3 = {}, _2 = 0; _2 < l3.attributes.length; _2++)
            y3[l3.attributes[_2].name] = l3.attributes[_2].value;
        (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p3, y3, o4, c3), v3)
        u3.__k = [];
      else if (_2 = u3.props.children, w(l3, Array.isArray(_2) ? _2 : [_2], u3, i3, t3, o4 && "foreignObject" !== d2, r3, f3, r3 ? r3[0] : i3.__k && k(i3, 0), c3), null != r3)
        for (_2 = r3.length; _2--; )
          null != r3[_2] && h(r3[_2]);
      c3 || ("value" in p3 && void 0 !== (_2 = p3.value) && (_2 !== l3.value || "progress" === d2 && !_2) && H(l3, "value", _2, y3.value, false), "checked" in p3 && void 0 !== (_2 = p3.checked) && _2 !== l3.checked && H(l3, "checked", _2, y3.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, o4;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = n2.__k)
      for (o4 = 0; o4 < t3.length; o4++)
        t3[o4] && N(t3[o4], u3, "function" != typeof n2.type);
    i3 || null == n2.__e || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function S(u3, i3, t3) {
    var o4, r3, f3;
    l.__ && l.__(u3, i3), r3 = (o4 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, f3 = [], j(i3, u3 = (!o4 && t3 || i3).__k = v(d, null, [u3]), r3 || e, e, void 0 !== i3.ownerSVGElement, !o4 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !o4 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o4), z(f3, u3);
  }
  function q(n2, l3) {
    S(n2, l3, q);
  }
  function B(l3, u3, i3) {
    var t3, o4, r3, f3 = a({}, l3.props);
    for (r3 in u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o4 = u3[r3] : f3[r3] = u3[r3];
    return arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), y(l3.type, f3, t3 || l3.key, o4 || l3.ref, null);
  }
  function D(n2, l3) {
    var u3 = { __c: l3 = "__cC" + f++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, i3;
      return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
        return i3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(m);
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  var n, l, u, i, t, o, r, f, e, c, s;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      e = {};
      c = [];
      s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = c.slice, l = { __e: function(n2, l3) {
        for (var u3, i3, t3; l3 = l3.__; )
          if ((u3 = l3.__c) && !u3.__)
            try {
              if ((i3 = u3.constructor) && null != i3.getDerivedStateFromError && (u3.setState(i3.getDerivedStateFromError(n2)), t3 = u3.__d), null != u3.componentDidCatch && (u3.componentDidCatch(n2), t3 = u3.__d), t3)
                return u3.__E = u3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return null != n2 && void 0 === n2.constructor;
      }, _.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n2 && (n2 = n2(a({}, u3), this.props)), n2 && a(u3, n2), null != n2 && this.__v && (l3 && this.__h.push(l3), m(this));
      }, _.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
      }, _.prototype.render = d, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;
    }
  });

  // node_modules/preact-router/dist/preact-router.js
  var require_preact_router = __commonJS({
    "node_modules/preact-router/dist/preact-router.js"(exports, module) {
      !function(t3, e4) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e4((init_preact_module(), __toCommonJS(preact_module_exports))) : "function" == typeof define && define.amd ? define(["preact"], e4) : t3.preactRouter = e4(t3.preact);
      }(exports, function(t3) {
        function e4(t4, e5) {
          for (var n3 in e5)
            t4[n3] = e5[n3];
          return t4;
        }
        function n2(t4, e5, n3) {
          var r4, o5 = /(?:\?([^#]*))?(#.*)?$/, u4 = t4.match(o5), a4 = {};
          if (u4 && u4[1])
            for (var p4 = u4[1].split("&"), c4 = 0; c4 < p4.length; c4++) {
              var f4 = p4[c4].split("=");
              a4[decodeURIComponent(f4[0])] = decodeURIComponent(f4.slice(1).join("="));
            }
          t4 = i3(t4.replace(o5, "")), e5 = i3(e5 || "");
          for (var l4 = Math.max(t4.length, e5.length), s3 = 0; s3 < l4; s3++)
            if (e5[s3] && ":" === e5[s3].charAt(0)) {
              var h3 = e5[s3].replace(/(^:|[+*?]+$)/g, ""), d3 = (e5[s3].match(/[+*?]+$/) || C2)[0] || "", g4 = ~d3.indexOf("+"), y4 = ~d3.indexOf("*"), m4 = t4[s3] || "";
              if (!m4 && !y4 && (d3.indexOf("?") < 0 || g4)) {
                r4 = false;
                break;
              }
              if (a4[h3] = decodeURIComponent(m4), g4 || y4) {
                a4[h3] = t4.slice(s3).map(decodeURIComponent).join("/");
                break;
              }
            } else if (e5[s3] !== t4[s3]) {
              r4 = false;
              break;
            }
          return (true === n3.default || false !== r4) && a4;
        }
        function r3(t4, e5) {
          return t4.rank < e5.rank ? 1 : t4.rank > e5.rank ? -1 : t4.index - e5.index;
        }
        function o4(t4, e5) {
          return t4.index = e5, t4.rank = p3(t4), t4.props;
        }
        function i3(t4) {
          return t4.replace(/(^\/+|\/+$)/g, "").split("/");
        }
        function u3(t4) {
          return ":" == t4.charAt(0) ? 1 + "*+?".indexOf(t4.charAt(t4.length - 1)) || 4 : 5;
        }
        function a3(t4) {
          return i3(t4).map(u3).join("");
        }
        function p3(t4) {
          return t4.props.default ? 0 : a3(t4.props.path);
        }
        function c3(t4, e5) {
          void 0 === e5 && (e5 = "push"), b3 && b3[e5] ? b3[e5](t4) : "undefined" != typeof history && history[e5 + "State"] && history[e5 + "State"](null, null, t4);
        }
        function f3() {
          var t4;
          return t4 = b3 && b3.location ? b3.location : b3 && b3.getCurrentLocation ? b3.getCurrentLocation() : "undefined" != typeof location ? location : x3, "" + (t4.pathname || "") + (t4.search || "");
        }
        function l3(t4, e5) {
          return void 0 === e5 && (e5 = false), "string" != typeof t4 && t4.url && (e5 = t4.replace, t4 = t4.url), s2(t4) && c3(t4, e5 ? "replace" : "push"), h2(t4);
        }
        function s2(t4) {
          for (var e5 = U.length; e5--; )
            if (U[e5].canRoute(t4))
              return true;
          return false;
        }
        function h2(t4) {
          for (var e5 = false, n3 = 0; n3 < U.length; n3++)
            true === U[n3].routeTo(t4) && (e5 = true);
          for (var r4 = k3.length; r4--; )
            k3[r4](t4);
          return e5;
        }
        function d2(t4) {
          if (t4 && t4.getAttribute) {
            var e5 = t4.getAttribute("href"), n3 = t4.getAttribute("target");
            if (e5 && e5.match(/^\//g) && (!n3 || n3.match(/^_?self$/i)))
              return l3(e5);
          }
        }
        function g3(t4) {
          if (!(t4.ctrlKey || t4.metaKey || t4.altKey || t4.shiftKey || 0 !== t4.button))
            return d2(t4.currentTarget || t4.target || this), y3(t4);
        }
        function y3(t4) {
          return t4 && (t4.stopImmediatePropagation && t4.stopImmediatePropagation(), t4.stopPropagation && t4.stopPropagation(), t4.preventDefault()), false;
        }
        function m3(t4) {
          if (!(t4.ctrlKey || t4.metaKey || t4.altKey || t4.shiftKey || 0 !== t4.button)) {
            var e5 = t4.target;
            do {
              if ("A" === (e5.nodeName + "").toUpperCase() && e5.getAttribute("href")) {
                if (e5.hasAttribute("native"))
                  return;
                if (d2(e5))
                  return y3(t4);
              }
            } while (e5 = e5.parentNode);
          }
        }
        function v3() {
          A2 || ("function" == typeof addEventListener && (b3 || addEventListener("popstate", function() {
            h2(f3());
          }), addEventListener("click", m3)), A2 = true);
        }
        var C2 = {}, b3 = null, U = [], k3 = [], x3 = {}, A2 = false, R = function(i4) {
          function u4(t4) {
            i4.call(this, t4), t4.history && (b3 = t4.history), this.state = { url: t4.url || f3() }, v3();
          }
          return i4 && (u4.__proto__ = i4), u4.prototype = Object.create(i4 && i4.prototype), u4.prototype.constructor = u4, u4.prototype.shouldComponentUpdate = function(t4) {
            return true !== t4.static || (t4.url !== this.props.url || t4.onChange !== this.props.onChange);
          }, u4.prototype.canRoute = function(e5) {
            return this.getMatchingChildren(t3.toChildArray(this.props.children), e5, false).length > 0;
          }, u4.prototype.routeTo = function(t4) {
            this.setState({ url: t4 });
            var e5 = this.canRoute(t4);
            return this.updating || this.forceUpdate(), e5;
          }, u4.prototype.componentWillMount = function() {
            U.push(this), this.updating = true;
          }, u4.prototype.componentDidMount = function() {
            var t4 = this;
            b3 && (this.unlisten = b3.listen(function(e5) {
              t4.routeTo("" + (e5.pathname || "") + (e5.search || ""));
            })), this.updating = false;
          }, u4.prototype.componentWillUnmount = function() {
            "function" == typeof this.unlisten && this.unlisten(), U.splice(U.indexOf(this), 1);
          }, u4.prototype.componentWillUpdate = function() {
            this.updating = true;
          }, u4.prototype.componentDidUpdate = function() {
            this.updating = false;
          }, u4.prototype.getMatchingChildren = function(i5, u5, a4) {
            return i5.filter(o4).sort(r3).map(function(r4) {
              var o5 = n2(u5, r4.props.path, r4.props);
              if (o5) {
                if (false !== a4) {
                  var i6 = { url: u5, matches: o5 };
                  return e4(i6, o5), delete i6.ref, delete i6.key, t3.cloneElement(r4, i6);
                }
                return r4;
              }
            }).filter(Boolean);
          }, u4.prototype.render = function(e5, n3) {
            var r4 = e5.children, o5 = e5.onChange, i5 = n3.url, u5 = this.getMatchingChildren(t3.toChildArray(r4), i5, true), a4 = u5[0] || null, p4 = this.previousUrl;
            return i5 !== p4 && (this.previousUrl = i5, "function" == typeof o5 && o5({ router: this, url: i5, previous: p4, active: u5, current: a4 })), a4;
          }, u4;
        }(t3.Component), K = function(n3) {
          return t3.createElement("a", e4({ onClick: g3 }, n3));
        }, E = function(e5) {
          return t3.createElement(e5.component, e5);
        };
        return R.subscribers = k3, R.getCurrentUrl = f3, R.route = l3, R.Router = R, R.Route = E, R.Link = K, R.exec = n2, R;
      });
    }
  });

  // node_modules/preact-router/match.js
  var require_match = __commonJS({
    "node_modules/preact-router/match.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Link = exports.Match = void 0;
      var _extends = Object.assign || function(target) {
        for (var i3 = 1; i3 < arguments.length; i3++) {
          var source = arguments[i3];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _preact = (init_preact_module(), __toCommonJS(preact_module_exports));
      var _preactRouter = require_preact_router();
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i3 in obj) {
          if (keys.indexOf(i3) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i3))
            continue;
          target[i3] = obj[i3];
        }
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var Match = exports.Match = function(_Component) {
        _inherits(Match2, _Component);
        function Match2() {
          var _temp, _this, _ret;
          _classCallCheck(this, Match2);
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function(url) {
            _this.nextUrl = url;
            _this.setState({});
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        Match2.prototype.componentDidMount = function componentDidMount() {
          _preactRouter.subscribers.push(this.update);
        };
        Match2.prototype.componentWillUnmount = function componentWillUnmount() {
          _preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
        };
        Match2.prototype.render = function render(props) {
          var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(), path = url.replace(/\?.+$/, "");
          this.nextUrl = null;
          return props.children({
            url,
            path,
            matches: (0, _preactRouter.exec)(path, props.path, {}) !== false
          });
        };
        return Match2;
      }(_preact.Component);
      var Link4 = function Link5(_ref) {
        var activeClassName = _ref.activeClassName, path = _ref.path, props = _objectWithoutProperties(_ref, ["activeClassName", "path"]);
        return (0, _preact.h)(
          Match,
          { path: path || props.href },
          function(_ref2) {
            var matches = _ref2.matches;
            return (0, _preact.h)(_preactRouter.Link, _extends({}, props, { "class": [props.class || props.className, matches && activeClassName].filter(Boolean).join(" ") }));
          }
        );
      };
      exports.Link = Link4;
      exports.default = Match;
      Match.Link = Link4;
    }
  });

  // src/index.tsx
  init_preact_module();

  // src/App.tsx
  var import_preact_router = __toESM(require_preact_router());

  // src/components/Header/Header.tsx
  var import_match = __toESM(require_match());

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  init_preact_module();
  init_preact_module();
  var o2 = 0;
  function e2(_2, e4, n2, t3, f3) {
    var l3, s2, u3 = {};
    for (s2 in e4)
      "ref" == s2 ? l3 = e4[s2] : u3[s2] = e4[s2];
    var a3 = { type: _2, props: u3, key: n2, ref: l3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --o2, __source: t3, __self: f3 };
    if ("function" == typeof _2 && (l3 = _2.defaultProps))
      for (s2 in l3)
        void 0 === u3[s2] && (u3[s2] = l3[s2]);
    return l.vnode && l.vnode(a3), a3;
  }

  // src/components/Header/Header.tsx
  var Header = () => /* @__PURE__ */ e2("header", { className: "header", children: [
    /* @__PURE__ */ e2("h1", { children: "ch" }),
    /* @__PURE__ */ e2("nav", { className: "nav", children: [
      /* @__PURE__ */ e2(import_match.Link, { activeClassName: "header__active", href: "/", children: "Home" }),
      /* @__PURE__ */ e2(import_match.Link, { activeClassName: "header__active", href: "/catalog", children: "Catalog" })
    ] })
  ] });
  var Header_default = Header;

  // node_modules/preact/hooks/dist/hooks.module.js
  init_preact_module();
  var t2;
  var u2;
  var r2;
  var o3 = 0;
  var i2 = [];
  var c2 = l.__b;
  var f2 = l.__r;
  var e3 = l.diffed;
  var a2 = l.__c;
  var v2 = l.unmount;
  function m2(t3, r3) {
    l.__h && l.__h(u2, t3, o3 || r3), o3 = 0;
    var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({}), i3.__[t3];
  }
  function l2(n2) {
    return o3 = 1, p2(w2, n2);
  }
  function p2(n2, r3, o4) {
    var i3 = m2(t2++, 2);
    return i3.t = n2, i3.__c || (i3.__ = [o4 ? o4(r3) : w2(void 0, r3), function(n3) {
      var t3 = i3.t(i3.__[0], n3);
      i3.__[0] !== t3 && (i3.__ = [t3, i3.__[1]], i3.__c.setState({}));
    }], i3.__c = u2), i3.__;
  }
  function y2(r3, o4) {
    var i3 = m2(t2++, 3);
    !l.__s && k2(i3.__H, o4) && (i3.__ = r3, i3.__H = o4, u2.__H.__h.push(i3));
  }
  function x2() {
    i2.forEach(function(t3) {
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u3) {
          t3.__H.__h = [], l.__e(u3, t3.__v);
        }
    }), i2 = [];
  }
  l.__b = function(n2) {
    u2 = null, c2 && c2(n2);
  }, l.__r = function(n2) {
    f2 && f2(n2), t2 = 0;
    var r3 = (u2 = n2.__c).__H;
    r3 && (r3.__h.forEach(g2), r3.__h.forEach(j2), r3.__h = []);
  }, l.diffed = function(t3) {
    e3 && e3(t3);
    var o4 = t3.__c;
    o4 && o4.__H && o4.__H.__h.length && (1 !== i2.push(o4) && r2 === l.requestAnimationFrame || ((r2 = l.requestAnimationFrame) || function(n2) {
      var t4, u3 = function() {
        clearTimeout(r3), b2 && cancelAnimationFrame(t4), setTimeout(n2);
      }, r3 = setTimeout(u3, 100);
      b2 && (t4 = requestAnimationFrame(u3));
    })(x2)), u2 = void 0;
  }, l.__c = function(t3, u3) {
    u3.some(function(t4) {
      try {
        t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || j2(n2);
        });
      } catch (r3) {
        u3.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), u3 = [], l.__e(r3, t4.__v);
      }
    }), a2 && a2(t3, u3);
  }, l.unmount = function(t3) {
    v2 && v2(t3);
    var u3 = t3.__c;
    if (u3 && u3.__H)
      try {
        u3.__H.__.forEach(g2);
      } catch (t4) {
        l.__e(t4, u3.__v);
      }
  };
  var b2 = "function" == typeof requestAnimationFrame;
  function g2(n2) {
    var t3 = u2;
    "function" == typeof n2.__c && n2.__c(), u2 = t3;
  }
  function j2(n2) {
    var t3 = u2;
    n2.__c = n2.__(), u2 = t3;
  }
  function k2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
      return t4 !== n2[u3];
    });
  }
  function w2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // src/components/Home/Home.tsx
  var CRUD_URL = "http://localhost:3000";
  var Home = () => {
    const [fetching, setFetching] = l2(false);
    const refreshFileList = async () => {
      setFetching(true);
      try {
        await fetch(CRUD_URL + "/hello").then((res) => console.log(res)).catch((e4) => console.error(e4));
      } catch (e4) {
        console.error(e4);
      }
      setFetching(false);
    };
    const onFileUpload = async (e4) => {
      const data = new FormData();
      data.append("file", e4.target.files[0]);
      setFetching(true);
      try {
        fetch(
          CRUD_URL + "/upload",
          {
            mode: "no-cors",
            method: "POST",
            body: data
            // headers: {
            // 'Content-Type': 'multipart/form-data; boundary=—-WebKitFormBoundaryfgtsKTYLsT7PNUVD'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            // },
          }
        );
      } catch (e5) {
        console.error(e5);
      }
      ;
      setFetching(false);
    };
    return /* @__PURE__ */ e2("div", { children: [
      /* @__PURE__ */ e2("h1", { children: "Home" }),
      /* @__PURE__ */ e2("p", { children: "This is the Home component." }),
      /* @__PURE__ */ e2("div", { children: /* @__PURE__ */ e2("button", { onClick: refreshFileList, disabled: fetching, children: "Refresh" }) }),
      /* @__PURE__ */ e2("form", { action: "/upload", method: "post", children: /* @__PURE__ */ e2(
        "input",
        {
          type: "file",
          name: "file",
          disabled: fetching,
          placeholder: "Add file",
          onChange: onFileUpload
        }
      ) }),
      /* @__PURE__ */ e2("div", {}),
      fetching && /* @__PURE__ */ e2("h3", { children: "Loading..." })
    ] });
  };

  // env-ns:env
  var API_URL = "http://localhost:3000";

  // src/hooks/useCreateThread.ts
  var useCreateThread = () => {
    const [isFetching, setFetching] = l2(false);
    const [error, setError] = l2(null);
    const createThread = async (title, text) => {
      const data = {
        title,
        text
      };
      console.log("stringify: ", JSON.stringify(data));
      setFetching(true);
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");
      try {
        await fetch(
          API_URL + "/board/thread/create",
          {
            method: "post",
            mode: "cors",
            cache: "default",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }
        );
      } catch (e4) {
        if (e4 instanceof Error) {
          setError(e4);
        }
        console.error(e4);
      }
      ;
      setFetching(false);
    };
    return {
      isFetching,
      createThread,
      error
    };
  };

  // src/components/ErrorMessage/ErrorMessage.tsx
  var ErrorMessage = ({ message }) => {
    return /* @__PURE__ */ e2("div", { children: message });
  };

  // src/components/CreateThread/CreateThread.tsx
  var CreateThread = () => {
    const [title, setTitle] = l2("");
    const [text, setText] = l2("");
    const { isFetching, createThread, error } = useCreateThread();
    const handleTitleInput = (e4) => {
      if (e4.target instanceof HTMLInputElement) {
        setTitle(e4.target.value);
      }
    };
    const handleTextAreInput = (e4) => {
      if (e4.target instanceof HTMLInputElement) {
        setText(e4.target.value);
      }
    };
    const handleCreateButton = () => {
      createThread(title, text);
    };
    return /* @__PURE__ */ e2("div", { className: "create-thread__container", children: [
      /* @__PURE__ */ e2("h2", { children: " Create New Thread " }),
      /* @__PURE__ */ e2("label", { for: "title", children: "Title" }),
      /* @__PURE__ */ e2(
        "input",
        {
          className: "create-thread__title",
          type: "text",
          name: "title",
          onChange: handleTitleInput,
          disabled: isFetching
        }
      ),
      /* @__PURE__ */ e2("label", { for: "text", children: "Text" }),
      /* @__PURE__ */ e2(
        "textarea",
        {
          className: "create-thread__text",
          name: "text",
          onChange: handleTextAreInput,
          rows: 10,
          maxLength: 4e3,
          disabled: isFetching
        }
      ),
      /* @__PURE__ */ e2("div", { className: "create-thread__buttonContainer", children: /* @__PURE__ */ e2("button", { onClick: handleCreateButton, disabled: isFetching, children: "createThread" }) }),
      error !== null && /* @__PURE__ */ e2(ErrorMessage, { message: error.message })
    ] });
  };

  // src/components/ThreadBox/ThreadBox.tsx
  var import_match2 = __toESM(require_match());
  var ThreadBox = ({ thread }) => {
    return /* @__PURE__ */ e2(import_match2.Link, { href: `/thread/${thread.id}`, children: /* @__PURE__ */ e2("div", { className: "thread-box", children: /* @__PURE__ */ e2("div", { className: "thread-box__content", children: [
      /* @__PURE__ */ e2("h4", { children: thread.title }),
      /* @__PURE__ */ e2("p", { children: thread.text })
    ] }) }) });
  };

  // src/hooks/useThread.ts
  var useThread = () => {
    const [isFetching, setFetching] = l2(false);
    const [threadList, setThreadList] = l2([]);
    const getThreadList = async () => {
      setFetching(true);
      const headers = new Headers({
        "Content-Type": "application/json"
      });
      console.log("thread", API_URL);
      try {
        const response = await fetch(API_URL + "/board/threads", {
          method: "GET",
          mode: "no-cors",
          headers
        });
        console.log("response", response);
        const responseJson = await response.json();
        console.log("data", responseJson);
        setThreadList(responseJson.data);
      } catch (error) {
        console.error(error);
      }
      setFetching(false);
    };
    return {
      isFetching,
      threadList,
      getThreadList
    };
  };

  // src/components/Catalog/Catalog.tsx
  var Catalog = () => {
    const { isFetching, getThreadList, threadList } = useThread();
    y2(() => {
      getThreadList();
    }, []);
    return /* @__PURE__ */ e2("div", { className: "catalog-container", children: [
      /* @__PURE__ */ e2("button", { onClick: getThreadList, children: "Refresh List" }),
      isFetching && /* @__PURE__ */ e2("div", { children: "Loading..." }),
      /* @__PURE__ */ e2("p", { children: "Catalog layout" }),
      /* @__PURE__ */ e2("div", { children: threadList.map((t3) => /* @__PURE__ */ e2(ThreadBox, { thread: t3 }, t3.id)) }),
      /* @__PURE__ */ e2("div", { className: "catalog-container__center", children: /* @__PURE__ */ e2(CreateThread, {}) })
    ] });
  };

  // src/components/Thread/Thread.tsx
  var import_match3 = __toESM(require_match());
  var Thread = (props) => {
    const [newComment, setNewComment] = l2("");
    const [fetching, setFetching] = l2(false);
    console.log("props", props);
    const id = props.matches.id;
    const addComment = () => {
      setFetching(true);
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");
      const data = { threadId: id, comment: newComment };
      fetch("/api/add-comment", {
        method: "post",
        mode: "no-cors",
        headers,
        body: JSON.stringify(data)
      });
      setFetching(false);
    };
    const handleComment = (e4) => {
      if (e4.target instanceof HTMLInputElement) {
        setNewComment(e4.target.value);
      }
    };
    return /* @__PURE__ */ e2("div", { children: [
      /* @__PURE__ */ e2(import_match3.Link, { href: `/catalog`, children: "Go to catalogs" }),
      /* @__PURE__ */ e2("div", { className: "comments-container", children: /* @__PURE__ */ e2("div", { className: "comments-container", children: [
        /* @__PURE__ */ e2("textarea", { value: newComment, onChange: handleComment, disabled: fetching }),
        /* @__PURE__ */ e2("button", { onClick: addComment, children: "Add" })
      ] }) })
    ] });
  };

  // src/App.tsx
  var App = () => /* @__PURE__ */ e2("div", { id: "app", children: [
    /* @__PURE__ */ e2(Header_default, {}),
    /* @__PURE__ */ e2("div", { style: { marginTop: "56px" }, children: /* @__PURE__ */ e2(import_preact_router.default, { children: [
      /* @__PURE__ */ e2(Home, { path: "/" }),
      /* @__PURE__ */ e2(Catalog, { path: "/catalog" }),
      /* @__PURE__ */ e2(Thread, { path: "/thread/:id" })
    ] }) })
  ] });
  var App_default = App;

  // src/index.tsx
  S(/* @__PURE__ */ e2(App_default, {}), document.body);
})();
