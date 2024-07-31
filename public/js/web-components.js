(function (exports) {
  'use strict';

  function _applyDecoratedDescriptor(i, e, r, n, l) {
    var a = {};
    return Object.keys(n).forEach(function (i) {
      a[i] = n[i];
    }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) {
      return n(i, e, r) || r;
    }, a), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a;
  }
  function _initializerDefineProperty(e, i, r, l) {
    r && Object.defineProperty(e, i, {
      enumerable: r.enumerable,
      configurable: r.configurable,
      writable: r.writable,
      value: r.initializer ? r.initializer.call(l) : void 0
    });
  }

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2 = globalThis,
    e$2 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    s$2 = Symbol(),
    o$3 = new WeakMap();
  let n$3 = class n {
    constructor(t, e, o) {
      if (this._$cssResult$ = !0, o !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t, this.t = e;
    }
    get styleSheet() {
      let t = this.o;
      const s = this.t;
      if (e$2 && void 0 === t) {
        const e = void 0 !== s && 1 === s.length;
        e && (t = o$3.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && o$3.set(s, t));
      }
      return t;
    }
    toString() {
      return this.cssText;
    }
  };
  const r$4 = t => new n$3("string" == typeof t ? t : t + "", void 0, s$2),
    S$1 = (s, o) => {
      if (e$2) s.adoptedStyleSheets = o.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet);else for (const e of o) {
        const o = document.createElement("style"),
          n = t$2.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
      }
    },
    c$2 = e$2 ? t => t : t => t instanceof CSSStyleSheet ? (t => {
      let e = "";
      for (const s of t.cssRules) e += s.cssText;
      return r$4(e);
    })(t) : t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const {
      is: i$1,
      defineProperty: e$1,
      getOwnPropertyDescriptor: r$3,
      getOwnPropertyNames: h$1,
      getOwnPropertySymbols: o$2,
      getPrototypeOf: n$2
    } = Object,
    a$1 = globalThis,
    c$1 = a$1.trustedTypes,
    l$1 = c$1 ? c$1.emptyScript : "",
    p$1 = a$1.reactiveElementPolyfillSupport,
    d$1 = (t, s) => t,
    u$1 = {
      toAttribute(t, s) {
        switch (s) {
          case Boolean:
            t = t ? l$1 : null;
            break;
          case Object:
          case Array:
            t = null == t ? t : JSON.stringify(t);
        }
        return t;
      },
      fromAttribute(t, s) {
        let i = t;
        switch (s) {
          case Boolean:
            i = null !== t;
            break;
          case Number:
            i = null === t ? null : Number(t);
            break;
          case Object:
          case Array:
            try {
              i = JSON.parse(t);
            } catch (t) {
              i = null;
            }
        }
        return i;
      }
    },
    f$1 = (t, s) => !i$1(t, s),
    y$1 = {
      attribute: !0,
      type: String,
      converter: u$1,
      reflect: !1,
      hasChanged: f$1
    };
  Symbol.metadata ??= Symbol("metadata"), a$1.litPropertyMetadata ??= new WeakMap();
  class b extends HTMLElement {
    static addInitializer(t) {
      this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t, s = y$1) {
      if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
        const i = Symbol(),
          r = this.getPropertyDescriptor(t, i, s);
        void 0 !== r && e$1(this.prototype, t, r);
      }
    }
    static getPropertyDescriptor(t, s, i) {
      const {
        get: e,
        set: h
      } = r$3(this.prototype, t) ?? {
        get() {
          return this[s];
        },
        set(t) {
          this[s] = t;
        }
      };
      return {
        get() {
          return e?.call(this);
        },
        set(s) {
          const r = e?.call(this);
          h.call(this, s), this.requestUpdate(t, r, i);
        },
        configurable: !0,
        enumerable: !0
      };
    }
    static getPropertyOptions(t) {
      return this.elementProperties.get(t) ?? y$1;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d$1("elementProperties"))) return;
      const t = n$2(this);
      t.finalize(), void 0 !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d$1("finalized"))) return;
      if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
        const t = this.properties,
          s = [...h$1(t), ...o$2(t)];
        for (const i of s) this.createProperty(i, t[i]);
      }
      const t = this[Symbol.metadata];
      if (null !== t) {
        const s = litPropertyMetadata.get(t);
        if (void 0 !== s) for (const [t, i] of s) this.elementProperties.set(t, i);
      }
      this._$Eh = new Map();
      for (const [t, s] of this.elementProperties) {
        const i = this._$Eu(t, s);
        void 0 !== i && this._$Eh.set(i, t);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
      const i = [];
      if (Array.isArray(s)) {
        const e = new Set(s.flat(1 / 0).reverse());
        for (const s of e) i.unshift(c$2(s));
      } else void 0 !== s && i.push(c$2(s));
      return i;
    }
    static _$Eu(t, s) {
      const i = s.attribute;
      return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise(t => this.enableUpdating = t), this._$AL = new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(t => t(this));
    }
    addController(t) {
      (this._$EO ??= new Set()).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
      this._$EO?.delete(t);
    }
    _$E_() {
      const t = new Map(),
        s = this.constructor.elementProperties;
      for (const i of s.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
      t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
      const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S$1(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(t => t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
      this._$EO?.forEach(t => t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
      this._$AK(t, i);
    }
    _$EC(t, s) {
      const i = this.constructor.elementProperties.get(t),
        e = this.constructor._$Eu(t, i);
      if (void 0 !== e && !0 === i.reflect) {
        const r = (void 0 !== i.converter?.toAttribute ? i.converter : u$1).toAttribute(s, i.type);
        this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
      }
    }
    _$AK(t, s) {
      const i = this.constructor,
        e = i._$Eh.get(t);
      if (void 0 !== e && this._$Em !== e) {
        const t = i.getPropertyOptions(e),
          r = "function" == typeof t.converter ? {
            fromAttribute: t.converter
          } : void 0 !== t.converter?.fromAttribute ? t.converter : u$1;
        this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
      }
    }
    requestUpdate(t, s, i) {
      if (void 0 !== t) {
        if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? f$1)(this[t], s)) return;
        this.P(t, s, i);
      }
      !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
      this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set()).add(t);
    }
    async _$ET() {
      this.isUpdatePending = !0;
      try {
        await this._$ES;
      } catch (t) {
        Promise.reject(t);
      }
      const t = this.scheduleUpdate();
      return null != t && (await t), !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t, s] of this._$Ep) this[t] = s;
          this._$Ep = void 0;
        }
        const t = this.constructor.elementProperties;
        if (t.size > 0) for (const [s, i] of t) !0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
      }
      let t = !1;
      const s = this._$AL;
      try {
        t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach(t => t.hostUpdate?.()), this.update(s)) : this._$EU();
      } catch (s) {
        throw t = !1, this._$EU(), s;
      }
      t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
      this._$EO?.forEach(t => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
      this._$AL = new Map(), this.isUpdatePending = !1;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t) {
      return !0;
    }
    update(t) {
      this._$Ej &&= this._$Ej.forEach(t => this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
  }
  b.elementStyles = [], b.shadowRootOptions = {
    mode: "open"
  }, b[d$1("elementProperties")] = new Map(), b[d$1("finalized")] = new Map(), p$1?.({
    ReactiveElement: b
  }), (a$1.reactiveElementVersions ??= []).push("2.0.4");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1 = globalThis,
    i = t$1.trustedTypes,
    s$1 = i ? i.createPolicy("lit-html", {
      createHTML: t => t
    }) : void 0,
    e = "$lit$",
    h = `lit$${Math.random().toFixed(9).slice(2)}$`,
    o$1 = "?" + h,
    n$1 = `<${o$1}>`,
    r$2 = document,
    l = () => r$2.createComment(""),
    c = t => null === t || "object" != typeof t && "function" != typeof t,
    a = Array.isArray,
    u = t => a(t) || "function" == typeof t?.[Symbol.iterator],
    d = "[ \t\n\f\r]",
    f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    v = /-->/g,
    _ = />/g,
    m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"),
    p = /'/g,
    g = /"/g,
    $ = /^(?:script|style|textarea|title)$/i,
    y = t => (i, ...s) => ({
      _$litType$: t,
      strings: i,
      values: s
    }),
    x = y(1),
    w = Symbol.for("lit-noChange"),
    T = Symbol.for("lit-nothing"),
    A = new WeakMap(),
    E = r$2.createTreeWalker(r$2, 129);
  function C(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s$1 ? s$1.createHTML(i) : i;
  }
  const P = (t, i) => {
    const s = t.length - 1,
      o = [];
    let r,
      l = 2 === i ? "<svg>" : "",
      c = f;
    for (let i = 0; i < s; i++) {
      const s = t[i];
      let a,
        u,
        d = -1,
        y = 0;
      for (; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);) y = c.lastIndex, c === f ? "!--" === u[1] ? c = v : void 0 !== u[1] ? c = _ : void 0 !== u[2] ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = m) : void 0 !== u[3] && (c = m) : c === m ? ">" === u[0] ? (c = r ?? f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? m : '"' === u[3] ? g : p) : c === g || c === p ? c = m : c === v || c === _ ? c = f : (c = m, r = void 0);
      const x = c === m && t[i + 1].startsWith("/>") ? " " : "";
      l += c === f ? s + n$1 : d >= 0 ? (o.push(a), s.slice(0, d) + e + s.slice(d) + h + x) : s + h + (-2 === d ? i : x);
    }
    return [C(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : "")), o];
  };
  class V {
    constructor({
      strings: t,
      _$litType$: s
    }, n) {
      let r;
      this.parts = [];
      let c = 0,
        a = 0;
      const u = t.length - 1,
        d = this.parts,
        [f, v] = P(t, s);
      if (this.el = V.createElement(f, n), E.currentNode = this.el.content, 2 === s) {
        const t = this.el.content.firstChild;
        t.replaceWith(...t.childNodes);
      }
      for (; null !== (r = E.nextNode()) && d.length < u;) {
        if (1 === r.nodeType) {
          if (r.hasAttributes()) for (const t of r.getAttributeNames()) if (t.endsWith(e)) {
            const i = v[a++],
              s = r.getAttribute(t).split(h),
              e = /([.?@])?(.*)/.exec(i);
            d.push({
              type: 1,
              index: c,
              name: e[2],
              strings: s,
              ctor: "." === e[1] ? k : "?" === e[1] ? H : "@" === e[1] ? I : R
            }), r.removeAttribute(t);
          } else t.startsWith(h) && (d.push({
            type: 6,
            index: c
          }), r.removeAttribute(t));
          if ($.test(r.tagName)) {
            const t = r.textContent.split(h),
              s = t.length - 1;
            if (s > 0) {
              r.textContent = i ? i.emptyScript : "";
              for (let i = 0; i < s; i++) r.append(t[i], l()), E.nextNode(), d.push({
                type: 2,
                index: ++c
              });
              r.append(t[s], l());
            }
          }
        } else if (8 === r.nodeType) if (r.data === o$1) d.push({
          type: 2,
          index: c
        });else {
          let t = -1;
          for (; -1 !== (t = r.data.indexOf(h, t + 1));) d.push({
            type: 7,
            index: c
          }), t += h.length - 1;
        }
        c++;
      }
    }
    static createElement(t, i) {
      const s = r$2.createElement("template");
      return s.innerHTML = t, s;
    }
  }
  function N(t, i, s = t, e) {
    if (i === w) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = N(t, h._$AS(t, i.values), h, e)), i;
  }
  class S {
    constructor(t, i) {
      this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t) {
      const {
          el: {
            content: i
          },
          parts: s
        } = this._$AD,
        e = (t?.creationScope ?? r$2).importNode(i, !0);
      E.currentNode = e;
      let h = E.nextNode(),
        o = 0,
        n = 0,
        l = s[0];
      for (; void 0 !== l;) {
        if (o === l.index) {
          let i;
          2 === l.type ? i = new M(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new L(h, this, t)), this._$AV.push(i), l = s[++n];
        }
        o !== l?.index && (h = E.nextNode(), o++);
      }
      return E.currentNode = r$2, e;
    }
    p(t) {
      let i = 0;
      for (const s of this._$AV) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
  }
  class M {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e) {
      this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
      let t = this._$AA.parentNode;
      const i = this._$AM;
      return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t, i = this) {
      t = N(this, t, i), c(t) ? t === T || null == t || "" === t ? (this._$AH !== T && this._$AR(), this._$AH = T) : t !== this._$AH && t !== w && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : u(t) ? this.k(t) : this._(t);
    }
    S(t) {
      return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
      this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
    }
    _(t) {
      this._$AH !== T && c(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r$2.createTextNode(t)), this._$AH = t;
    }
    $(t) {
      const {
          values: i,
          _$litType$: s
        } = t,
        e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = V.createElement(C(s.h, s.h[0]), this.options)), s);
      if (this._$AH?._$AD === e) this._$AH.p(i);else {
        const t = new S(e, this),
          s = t.u(this.options);
        t.p(i), this.T(s), this._$AH = t;
      }
    }
    _$AC(t) {
      let i = A.get(t.strings);
      return void 0 === i && A.set(t.strings, i = new V(t)), i;
    }
    k(t) {
      a(this._$AH) || (this._$AH = [], this._$AR());
      const i = this._$AH;
      let s,
        e = 0;
      for (const h of t) e === i.length ? i.push(s = new M(this.S(l()), this.S(l()), this, this.options)) : s = i[e], s._$AI(h), e++;
      e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
      for (this._$AP?.(!1, !0, i); t && t !== this._$AB;) {
        const i = t.nextSibling;
        t.remove(), t = i;
      }
    }
    setConnected(t) {
      void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
  }
  class R {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t, i, s, e, h) {
      this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = T;
    }
    _$AI(t, i = this, s, e) {
      const h = this.strings;
      let o = !1;
      if (void 0 === h) t = N(this, t, i, 0), o = !c(t) || t !== this._$AH && t !== w, o && (this._$AH = t);else {
        const e = t;
        let n, r;
        for (t = h[0], n = 0; n < h.length - 1; n++) r = N(this, e[s + n], i, n), r === w && (r = this._$AH[n]), o ||= !c(r) || r !== this._$AH[n], r === T ? t = T : t !== T && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
      }
      o && !e && this.j(t);
    }
    j(t) {
      t === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
  }
  class k extends R {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t) {
      this.element[this.name] = t === T ? void 0 : t;
    }
  }
  class H extends R {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t) {
      this.element.toggleAttribute(this.name, !!t && t !== T);
    }
  }
  class I extends R {
    constructor(t, i, s, e, h) {
      super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
      if ((t = N(this, t, i, 0) ?? T) === w) return;
      const s = this._$AH,
        e = t === T && s !== T || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive,
        h = t !== T && (s === T || e);
      e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
  }
  class L {
    constructor(t, i, s) {
      this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t) {
      N(this, t);
    }
  }
  const Z = t$1.litHtmlPolyfillSupport;
  Z?.(V, M), (t$1.litHtmlVersions ??= []).push("3.1.4");
  const j = (t, i, s) => {
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
      const t = s?.renderBefore ?? null;
      e._$litPart$ = h = new M(i.insertBefore(l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
  };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  class s extends b {
    constructor() {
      super(...arguments), this.renderOptions = {
        host: this
      }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
      const i = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = j(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
      return w;
    }
  }
  s._$litElement$ = !0, s[("finalized")] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: s
  });
  const r$1 = globalThis.litElementPolyfillSupport;
  r$1?.({
    LitElement: s
  });
  (globalThis.litElementVersions ??= []).push("4.0.6");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t = t => (e, o) => {
    void 0 !== o ? o.addInitializer(() => {
      customElements.define(t, e);
    }) : customElements.define(t, e);
  };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o = {
      attribute: !0,
      type: String,
      converter: u$1,
      reflect: !1,
      hasChanged: f$1
    },
    r = (t = o, e, r) => {
      const {
        kind: n,
        metadata: i
      } = r;
      let s = globalThis.litPropertyMetadata.get(i);
      if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map()), s.set(r.name, t), "accessor" === n) {
        const {
          name: o
        } = r;
        return {
          set(r) {
            const n = e.get.call(this);
            e.set.call(this, r), this.requestUpdate(o, n, t);
          },
          init(e) {
            return void 0 !== e && this.P(o, void 0, t), e;
          }
        };
      }
      if ("setter" === n) {
        const {
          name: o
        } = r;
        return function (r) {
          const n = this[o];
          e.call(this, r), this.requestUpdate(o, n, t);
        };
      }
      throw Error("Unsupported decorator location: " + n);
    };
  function n(t) {
    return (e, o) => "object" == typeof o ? r(t, e, o) : ((t, e, o) => {
      const r = e.hasOwnProperty(o);
      return e.constructor.createProperty(o, r ? {
        ...t,
        wrapped: !0
      } : t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
    })(t, e, o);
  }

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  const baseStyle = `py-2 px-3 rounded-md w-full border
    hover:shadow-md hover:transition-all hover:duration-100 
    active:transition-all active:duration-100
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-1 focus:border-transparent focus:shadow-md
`;
  const variantStyles = {
    primary: `bg-zinc-900 text-zinc-300 dark:bg-zinc-100 dark:text-zinc-600 focus:ring-zinc-50
        hover:bg-zinc-700 hover:text-zinc-100 dark:hover:bg-zinc-50 dark:hover:text-zinc-800 
        active:bg-zinc-950 active:border-zinc-800 dark:active:bg-zinc-200 dark:active:border-zinc-200 
        disabled:hover:bg-zinc-900 disabled:border-zinc-100 disabled:text-zinc-300
        dark:disabled:hover:bg-zinc-50 dark:disabled:border-zinc-100 dark:disabled:text-zinc-600`,
    ghost: `bg-zinc-200 text-zinc-800 border-zinc-400 focus:ring-zinc-950   dark:bg-zinc-950 dark:text-zinc-200 dark:focus:ring-zinc-200
            hover:bg-zinc-300 hover:text-zinc-900           dark:hover:bg-zinc-800 dark:hover:text-zinc-200 
            active:bg-zinc-400 active:border-zinc-400       dark:active:bg-zinc-950 dark:active:border-zinc-200 
        disabled:hover:bg-zinc-900 disabled:border-zinc-100 disabled:text-zinc-300
        dark:disabled:hover:bg-zinc-50 dark:disabled:border-zinc-100 dark:disabled:text-zinc-600`,
    secondary: 'bg-blue-900 text-gray-200 hover:bg-blue-800 hover:text-white active:bg-blue-950 active:border-blue-950 disabled:hover:bg-zinc-800 disabled:border-zinc-700 disabled:text-zinc-600 ',
    danger: 'bg-red-900 text-gray-200 hover:bg-red-800 hover:text-white active:bg-red-950 active:border-red-950 disabled:hover:bg-zinc-800 disabled:border-zinc-700 disabled:text-zinc-600 '
  };
  let XButton = (_dec = t('x-button'), _dec2 = n({
    type: String
  }), _dec3 = n({
    type: String
  }), _dec4 = n({
    type: String
  }), _dec5 = n({
    type: String
  }), _dec6 = n({
    type: () => {}
  }), _dec(_class = (_class2 = class XButton extends s {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "text", _descriptor, this);
      _initializerDefineProperty(this, "variant", _descriptor2, this);
      _initializerDefineProperty(this, "type", _descriptor3, this);
      _initializerDefineProperty(this, "form", _descriptor4, this);
      //@property({type: String}) xOnClick = '';
      _initializerDefineProperty(this, "onClick", _descriptor5, this);
    }
    //x-on:click="${this.xOnClick}"
    render() {
      return x`
            <link rel="stylesheet" href="/css/styles.css">            
            <button         
                class="${baseStyle} ${variantStyles[this.variant]}"
                type="${this.type}"
                ${this.form ? `form="${this.form}"` : ''}
                onClick="alert('test')"  
            >
                ${this.text}                
            </button>
        `;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "variant", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'primary';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'button';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "form", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "onClick", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return () => {};
    }
  })), _class2)) || _class);

  exports.XButton = XButton;

  return exports;

})({});
//# sourceMappingURL=web-components.js.map
