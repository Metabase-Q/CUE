function gn(n, t) {
  return n == null || t == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Y0(n, t) {
  return n == null || t == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function mu(n) {
  let t, e, r;
  n.length !== 2 ? (t = gn, e = (u, f) => gn(n(u), f), r = (u, f) => n(u) - f) : (t = n === gn || n === Y0 ? n : q0, e = n, r = n);
  function i(u, f, c = 0, s = u.length) {
    if (c < s) {
      if (t(f, f) !== 0)
        return s;
      do {
        const h = c + s >>> 1;
        e(u[h], f) < 0 ? c = h + 1 : s = h;
      } while (c < s);
    }
    return c;
  }
  function o(u, f, c = 0, s = u.length) {
    if (c < s) {
      if (t(f, f) !== 0)
        return s;
      do {
        const h = c + s >>> 1;
        e(u[h], f) <= 0 ? c = h + 1 : s = h;
      } while (c < s);
    }
    return c;
  }
  function a(u, f, c = 0, s = u.length) {
    const h = i(u, f, c, s - 1);
    return h > c && r(u[h - 1], f) > -r(u[h], f) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function q0() {
  return 0;
}
function zs(n) {
  return n === null ? NaN : +n;
}
function* Ds(n, t) {
  if (t === void 0)
    for (let e of n)
      e != null && (e = +e) >= e && (yield e);
  else {
    let e = -1;
    for (let r of n)
      (r = t(r, ++e, n)) != null && (r = +r) >= r && (yield r);
  }
}
const Os = mu(gn), U0 = Os.right, _6 = Os.left, v6 = mu(zs).center, He = U0;
function w6(n, t) {
  if (!((t = +t) >= 0))
    throw new RangeError("invalid r");
  let e = n.length;
  if (!((e = Math.floor(e)) >= 0))
    throw new RangeError("invalid length");
  if (!e || !t)
    return n;
  const r = yu(t), i = n.slice();
  return r(n, i, 0, e, 1), r(i, n, 0, e, 1), r(n, i, 0, e, 1), n;
}
const H0 = Fs(yu), x6 = Fs(X0);
function Fs(n) {
  return function(t, e, r = e) {
    if (!((e = +e) >= 0))
      throw new RangeError("invalid rx");
    if (!((r = +r) >= 0))
      throw new RangeError("invalid ry");
    let { data: i, width: o, height: a } = t;
    if (!((o = Math.floor(o)) >= 0))
      throw new RangeError("invalid width");
    if (!((a = Math.floor(a !== void 0 ? a : i.length / o)) >= 0))
      throw new RangeError("invalid height");
    if (!o || !a || !e && !r)
      return t;
    const u = e && n(e), f = r && n(r), c = i.slice();
    return u && f ? (se(u, c, i, o, a), se(u, i, c, o, a), se(u, c, i, o, a), le(f, i, c, o, a), le(f, c, i, o, a), le(f, i, c, o, a)) : u ? (se(u, i, c, o, a), se(u, c, i, o, a), se(u, i, c, o, a)) : f && (le(f, i, c, o, a), le(f, c, i, o, a), le(f, i, c, o, a)), t;
  };
}
function se(n, t, e, r, i) {
  for (let o = 0, a = r * i; o < a; )
    n(t, e, o, o += r, 1);
}
function le(n, t, e, r, i) {
  for (let o = 0, a = r * i; o < r; ++o)
    n(t, e, o, o + a, r);
}
function X0(n) {
  const t = yu(n);
  return (e, r, i, o, a) => {
    i <<= 2, o <<= 2, a <<= 2, t(e, r, i + 0, o + 0, a), t(e, r, i + 1, o + 1, a), t(e, r, i + 2, o + 2, a), t(e, r, i + 3, o + 3, a);
  };
}
function yu(n) {
  const t = Math.floor(n);
  if (t === n)
    return G0(n);
  const e = n - t, r = 2 * n + 1;
  return (i, o, a, u, f) => {
    if (!((u -= f) >= a))
      return;
    let c = t * o[a];
    const s = f * t, h = s + f;
    for (let l = a, d = a + s; l < d; l += f)
      c += o[Math.min(u, l)];
    for (let l = a, d = u; l <= d; l += f)
      c += o[Math.min(u, l + s)], i[l] = (c + e * (o[Math.max(a, l - h)] + o[Math.min(u, l + h)])) / r, c -= o[Math.max(a, l - s)];
  };
}
function G0(n) {
  const t = 2 * n + 1;
  return (e, r, i, o, a) => {
    if (!((o -= a) >= i))
      return;
    let u = n * r[i];
    const f = a * n;
    for (let c = i, s = i + f; c < s; c += a)
      u += r[Math.min(o, c)];
    for (let c = i, s = o; c <= s; c += a)
      u += r[Math.min(o, c + f)], e[c] = u / t, u -= r[Math.max(i, c - f)];
  };
}
function bu(n, t) {
  let e = 0;
  if (t === void 0)
    for (let r of n)
      r != null && (r = +r) >= r && ++e;
  else {
    let r = -1;
    for (let i of n)
      (i = t(i, ++r, n)) != null && (i = +i) >= i && ++e;
  }
  return e;
}
function V0(n) {
  return n.length | 0;
}
function W0(n) {
  return !(n > 0);
}
function Z0(n) {
  return typeof n != "object" || "length" in n ? n : Array.from(n);
}
function Q0(n) {
  return (t) => n(...t);
}
function M6(...n) {
  const t = typeof n[n.length - 1] == "function" && Q0(n.pop());
  n = n.map(Z0);
  const e = n.map(V0), r = n.length - 1, i = new Array(r + 1).fill(0), o = [];
  if (r < 0 || e.some(W0))
    return o;
  for (; ; ) {
    o.push(i.map((u, f) => n[f][u]));
    let a = r;
    for (; ++i[a] === e[a]; ) {
      if (a === 0)
        return t ? o.map(t) : o;
      i[a--] = 0;
    }
  }
}
function T6(n, t) {
  var e = 0, r = 0;
  return Float64Array.from(n, t === void 0 ? (i) => e += +i || 0 : (i) => e += +t(i, r++, n) || 0);
}
function K0(n, t) {
  let e = 0, r, i = 0, o = 0;
  if (t === void 0)
    for (let a of n)
      a != null && (a = +a) >= a && (r = a - i, i += r / ++e, o += r * (a - i));
  else {
    let a = -1;
    for (let u of n)
      (u = t(u, ++a, n)) != null && (u = +u) >= u && (r = u - i, i += r / ++e, o += r * (u - i));
  }
  if (e > 1)
    return o / (e - 1);
}
function J0(n, t) {
  const e = K0(n, t);
  return e && Math.sqrt(e);
}
function hi(n, t) {
  let e, r;
  if (t === void 0)
    for (const i of n)
      i != null && (e === void 0 ? i >= i && (e = r = i) : (e > i && (e = i), r < i && (r = i)));
  else {
    let i = -1;
    for (let o of n)
      (o = t(o, ++i, n)) != null && (e === void 0 ? o >= o && (e = r = o) : (e > o && (e = o), r < o && (r = o)));
  }
  return [e, r];
}
class vn {
  constructor() {
    this._partials = new Float64Array(32), this._n = 0;
  }
  add(t) {
    const e = this._partials;
    let r = 0;
    for (let i = 0; i < this._n && i < 32; i++) {
      const o = e[i], a = t + o, u = Math.abs(t) < Math.abs(o) ? t - (a - o) : o - (a - t);
      u && (e[r++] = u), t = a;
    }
    return e[r] = t, this._n = r + 1, this;
  }
  valueOf() {
    const t = this._partials;
    let e = this._n, r, i, o, a = 0;
    if (e > 0) {
      for (a = t[--e]; e > 0 && (r = a, i = t[--e], a = r + i, o = i - (a - r), !o); )
        ;
      e > 0 && (o < 0 && t[e - 1] < 0 || o > 0 && t[e - 1] > 0) && (i = o * 2, r = a + i, i == r - a && (a = r));
    }
    return a;
  }
}
function S6(n, t) {
  const e = new vn();
  if (t === void 0)
    for (let r of n)
      (r = +r) && e.add(r);
  else {
    let r = -1;
    for (let i of n)
      (i = +t(i, ++r, n)) && e.add(i);
  }
  return +e;
}
function A6(n, t) {
  const e = new vn();
  let r = -1;
  return Float64Array.from(
    n,
    t === void 0 ? (i) => e.add(+i || 0) : (i) => e.add(+t(i, ++r, n) || 0)
  );
}
class Si extends Map {
  constructor(t, e = Ys) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), t != null)
      for (const [r, i] of t)
        this.set(r, i);
  }
  get(t) {
    return super.get(ba(this, t));
  }
  has(t) {
    return super.has(ba(this, t));
  }
  set(t, e) {
    return super.set(Bs(this, t), e);
  }
  delete(t) {
    return super.delete(Ls(this, t));
  }
}
class Zt extends Set {
  constructor(t, e = Ys) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), t != null)
      for (const r of t)
        this.add(r);
  }
  has(t) {
    return super.has(ba(this, t));
  }
  add(t) {
    return super.add(Bs(this, t));
  }
  delete(t) {
    return super.delete(Ls(this, t));
  }
}
function ba({ _intern: n, _key: t }, e) {
  const r = t(e);
  return n.has(r) ? n.get(r) : e;
}
function Bs({ _intern: n, _key: t }, e) {
  const r = t(e);
  return n.has(r) ? n.get(r) : (n.set(r, e), e);
}
function Ls({ _intern: n, _key: t }, e) {
  const r = t(e);
  return n.has(r) && (e = n.get(r), n.delete(r)), e;
}
function Ys(n) {
  return n !== null && typeof n == "object" ? n.valueOf() : n;
}
function Ne(n) {
  return n;
}
function j0(n, ...t) {
  return Xe(n, Ne, Ne, t);
}
function n1(n, ...t) {
  return Xe(n, Array.from, Ne, t);
}
function qs(n, t) {
  for (let e = 1, r = t.length; e < r; ++e)
    n = n.flatMap((i) => i.pop().map(([o, a]) => [...i, o, a]));
  return n;
}
function k6(n, ...t) {
  return qs(n1(n, ...t), t);
}
function E6(n, t, ...e) {
  return qs(e1(n, t, ...e), e);
}
function t1(n, t, ...e) {
  return Xe(n, Ne, t, e);
}
function e1(n, t, ...e) {
  return Xe(n, Array.from, t, e);
}
function $6(n, ...t) {
  return Xe(n, Ne, Us, t);
}
function N6(n, ...t) {
  return Xe(n, Array.from, Us, t);
}
function Us(n) {
  if (n.length !== 1)
    throw new Error("duplicate key");
  return n[0];
}
function Xe(n, t, e, r) {
  return function i(o, a) {
    if (a >= r.length)
      return e(o);
    const u = new Si(), f = r[a++];
    let c = -1;
    for (const s of o) {
      const h = f(s, ++c, o), l = u.get(h);
      l ? l.push(s) : u.set(h, [s]);
    }
    for (const [s, h] of u)
      u.set(s, i(h, a));
    return t(u);
  }(n, 0);
}
function r1(n, t) {
  return Array.from(t, (e) => n[e]);
}
function Ef(n, ...t) {
  if (typeof n[Symbol.iterator] != "function")
    throw new TypeError("values is not iterable");
  n = Array.from(n);
  let [e] = t;
  if (e && e.length !== 2 || t.length > 1) {
    const r = Uint32Array.from(n, (i, o) => o);
    return t.length > 1 ? (t = t.map((i) => n.map(i)), r.sort((i, o) => {
      for (const a of t) {
        const u = Ce(a[i], a[o]);
        if (u)
          return u;
      }
    })) : (e = n.map(e), r.sort((i, o) => Ce(e[i], e[o]))), r1(n, r);
  }
  return n.sort(_u(e));
}
function _u(n = gn) {
  if (n === gn)
    return Ce;
  if (typeof n != "function")
    throw new TypeError("compare is not a function");
  return (t, e) => {
    const r = n(t, e);
    return r || r === 0 ? r : (n(e, e) === 0) - (n(t, t) === 0);
  };
}
function Ce(n, t) {
  return (n == null || !(n >= n)) - (t == null || !(t >= t)) || (n < t ? -1 : n > t ? 1 : 0);
}
function C6(n, t, e) {
  return (t.length !== 2 ? Ef(t1(n, t, e), ([r, i], [o, a]) => gn(i, a) || gn(r, o)) : Ef(j0(n, e), ([r, i], [o, a]) => t(i, a) || gn(r, o))).map(([r]) => r);
}
var i1 = Array.prototype, o1 = i1.slice;
function Ur(n) {
  return () => n;
}
var _a = Math.sqrt(50), va = Math.sqrt(10), wa = Math.sqrt(2);
function Re(n, t, e) {
  var r, i = -1, o, a, u;
  if (t = +t, n = +n, e = +e, n === t && e > 0)
    return [n];
  if ((r = t < n) && (o = n, n = t, t = o), (u = wr(n, t, e)) === 0 || !isFinite(u))
    return [];
  if (u > 0) {
    let f = Math.round(n / u), c = Math.round(t / u);
    for (f * u < n && ++f, c * u > t && --c, a = new Array(o = c - f + 1); ++i < o; )
      a[i] = (f + i) * u;
  } else {
    u = -u;
    let f = Math.round(n * u), c = Math.round(t * u);
    for (f / u < n && ++f, c / u > t && --c, a = new Array(o = c - f + 1); ++i < o; )
      a[i] = (f + i) / u;
  }
  return r && a.reverse(), a;
}
function wr(n, t, e) {
  var r = (t - n) / Math.max(0, e), i = Math.floor(Math.log(r) / Math.LN10), o = r / Math.pow(10, i);
  return i >= 0 ? (o >= _a ? 10 : o >= va ? 5 : o >= wa ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= _a ? 10 : o >= va ? 5 : o >= wa ? 2 : 1);
}
function Ai(n, t, e) {
  var r = Math.abs(t - n) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), o = r / i;
  return o >= _a ? i *= 10 : o >= va ? i *= 5 : o >= wa && (i *= 2), t < n ? -i : i;
}
function a1(n, t, e) {
  let r;
  for (; ; ) {
    const i = wr(n, t, e);
    if (i === r || i === 0 || !isFinite(i))
      return [n, t];
    i > 0 ? (n = Math.floor(n / i) * i, t = Math.ceil(t / i) * i) : i < 0 && (n = Math.ceil(n * i) / i, t = Math.floor(t * i) / i), r = i;
  }
}
function Hs(n) {
  return Math.ceil(Math.log(bu(n)) / Math.LN2) + 1;
}
function R6() {
  var n = Ne, t = hi, e = Hs;
  function r(i) {
    Array.isArray(i) || (i = Array.from(i));
    var o, a = i.length, u, f, c = new Array(a);
    for (o = 0; o < a; ++o)
      c[o] = n(i[o], o, i);
    var s = t(c), h = s[0], l = s[1], d = e(c, h, l);
    if (!Array.isArray(d)) {
      const y = l, v = +d;
      if (t === hi && ([h, l] = a1(h, l, v)), d = Re(h, l, v), d[0] <= h && (f = wr(h, l, v)), d[d.length - 1] >= l)
        if (y >= l && t === hi) {
          const _ = wr(h, l, v);
          isFinite(_) && (_ > 0 ? l = (Math.floor(l / _) + 1) * _ : _ < 0 && (l = (Math.ceil(l * -_) + 1) / -_));
        } else
          d.pop();
    }
    for (var p = d.length; d[0] <= h; )
      d.shift(), --p;
    for (; d[p - 1] > l; )
      d.pop(), --p;
    var m = new Array(p + 1), g;
    for (o = 0; o <= p; ++o)
      g = m[o] = [], g.x0 = o > 0 ? d[o - 1] : h, g.x1 = o < p ? d[o] : l;
    if (isFinite(f)) {
      if (f > 0)
        for (o = 0; o < a; ++o)
          (u = c[o]) != null && h <= u && u <= l && m[Math.min(p, Math.floor((u - h) / f))].push(i[o]);
      else if (f < 0) {
        for (o = 0; o < a; ++o)
          if ((u = c[o]) != null && h <= u && u <= l) {
            const y = Math.floor((h - u) * f);
            m[Math.min(p, y + (d[y] <= u))].push(i[o]);
          }
      }
    } else
      for (o = 0; o < a; ++o)
        (u = c[o]) != null && h <= u && u <= l && m[He(d, u, 0, p)].push(i[o]);
    return m;
  }
  return r.value = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : Ur(i), r) : n;
  }, r.domain = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : Ur([i[0], i[1]]), r) : t;
  }, r.thresholds = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Array.isArray(i) ? Ur(o1.call(i)) : Ur(i), r) : e;
  }, r;
}
function xr(n, t) {
  let e;
  if (t === void 0)
    for (const r of n)
      r != null && (e < r || e === void 0 && r >= r) && (e = r);
  else {
    let r = -1;
    for (let i of n)
      (i = t(i, ++r, n)) != null && (e < i || e === void 0 && i >= i) && (e = i);
  }
  return e;
}
function Xs(n, t) {
  let e, r = -1, i = -1;
  if (t === void 0)
    for (const o of n)
      ++i, o != null && (e < o || e === void 0 && o >= o) && (e = o, r = i);
  else
    for (let o of n)
      (o = t(o, ++i, n)) != null && (e < o || e === void 0 && o >= o) && (e = o, r = i);
  return r;
}
function Mr(n, t) {
  let e;
  if (t === void 0)
    for (const r of n)
      r != null && (e > r || e === void 0 && r >= r) && (e = r);
  else {
    let r = -1;
    for (let i of n)
      (i = t(i, ++r, n)) != null && (e > i || e === void 0 && i >= i) && (e = i);
  }
  return e;
}
function Gs(n, t) {
  let e, r = -1, i = -1;
  if (t === void 0)
    for (const o of n)
      ++i, o != null && (e > o || e === void 0 && o >= o) && (e = o, r = i);
  else
    for (let o of n)
      (o = t(o, ++i, n)) != null && (e > o || e === void 0 && o >= o) && (e = o, r = i);
  return r;
}
function vu(n, t, e = 0, r = n.length - 1, i) {
  for (i = i === void 0 ? Ce : _u(i); r > e; ) {
    if (r - e > 600) {
      const f = r - e + 1, c = t - e + 1, s = Math.log(f), h = 0.5 * Math.exp(2 * s / 3), l = 0.5 * Math.sqrt(s * h * (f - h) / f) * (c - f / 2 < 0 ? -1 : 1), d = Math.max(e, Math.floor(t - c * h / f + l)), p = Math.min(r, Math.floor(t + (f - c) * h / f + l));
      vu(n, t, d, p, i);
    }
    const o = n[t];
    let a = e, u = r;
    for (Ke(n, e, t), i(n[r], o) > 0 && Ke(n, e, r); a < u; ) {
      for (Ke(n, a, u), ++a, --u; i(n[a], o) < 0; )
        ++a;
      for (; i(n[u], o) > 0; )
        --u;
    }
    i(n[e], o) === 0 ? Ke(n, e, u) : (++u, Ke(n, u, r)), u <= t && (e = u + 1), t <= u && (r = u - 1);
  }
  return n;
}
function Ke(n, t, e) {
  const r = n[t];
  n[t] = n[e], n[e] = r;
}
function u1(n, t = gn) {
  let e, r = !1;
  if (t.length === 1) {
    let i;
    for (const o of n) {
      const a = t(o);
      (r ? gn(a, i) > 0 : gn(a, a) === 0) && (e = o, i = a, r = !0);
    }
  } else
    for (const i of n)
      (r ? t(i, e) > 0 : t(i, i) === 0) && (e = i, r = !0);
  return e;
}
function ki(n, t, e) {
  if (n = Float64Array.from(Ds(n, e)), !!(r = n.length)) {
    if ((t = +t) <= 0 || r < 2)
      return Mr(n);
    if (t >= 1)
      return xr(n);
    var r, i = (r - 1) * t, o = Math.floor(i), a = xr(vu(n, o).subarray(0, o + 1)), u = Mr(n.subarray(o + 1));
    return a + (u - a) * (i - o);
  }
}
function f1(n, t, e = zs) {
  if (!!(r = n.length)) {
    if ((t = +t) <= 0 || r < 2)
      return +e(n[0], 0, n);
    if (t >= 1)
      return +e(n[r - 1], r - 1, n);
    var r, i = (r - 1) * t, o = Math.floor(i), a = +e(n[o], o, n), u = +e(n[o + 1], o + 1, n);
    return a + (u - a) * (i - o);
  }
}
function c1(n, t, e) {
  if (n = Float64Array.from(Ds(n, e)), !!(r = n.length)) {
    if ((t = +t) <= 0 || r < 2)
      return Gs(n);
    if (t >= 1)
      return Xs(n);
    var r, i = Math.floor((r - 1) * t), o = (u, f) => Ce(n[u], n[f]), a = vu(Uint32Array.from(n, (u, f) => f), i, 0, r - 1, o);
    return u1(a.subarray(0, i + 1), (u) => n[u]);
  }
}
function P6(n, t, e) {
  return Math.ceil((e - t) / (2 * (ki(n, 0.75) - ki(n, 0.25)) * Math.pow(bu(n), -1 / 3)));
}
function I6(n, t, e) {
  return Math.ceil((e - t) * Math.cbrt(bu(n)) / (3.49 * J0(n)));
}
function z6(n, t) {
  let e = 0, r = 0;
  if (t === void 0)
    for (let i of n)
      i != null && (i = +i) >= i && (++e, r += i);
  else {
    let i = -1;
    for (let o of n)
      (o = t(o, ++i, n)) != null && (o = +o) >= o && (++e, r += o);
  }
  if (e)
    return r / e;
}
function D6(n, t) {
  return ki(n, 0.5, t);
}
function O6(n, t) {
  return c1(n, 0.5, t);
}
function* s1(n) {
  for (const t of n)
    yield* t;
}
function Vs(n) {
  return Array.from(s1(n));
}
function F6(n, t) {
  const e = new Si();
  if (t === void 0)
    for (let o of n)
      o != null && o >= o && e.set(o, (e.get(o) || 0) + 1);
  else {
    let o = -1;
    for (let a of n)
      (a = t(a, ++o, n)) != null && a >= a && e.set(a, (e.get(a) || 0) + 1);
  }
  let r, i = 0;
  for (const [o, a] of e)
    a > i && (i = a, r = o);
  return r;
}
function B6(n, t = l1) {
  const e = [];
  let r, i = !1;
  for (const o of n)
    i && e.push(t(r, o)), r = o, i = !0;
  return e;
}
function l1(n, t) {
  return [n, t];
}
function Rt(n, t, e) {
  n = +n, t = +t, e = (i = arguments.length) < 2 ? (t = n, n = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((t - n) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = n + r * e;
  return o;
}
function L6(n, t = gn) {
  if (typeof n[Symbol.iterator] != "function")
    throw new TypeError("values is not iterable");
  let e = Array.from(n);
  const r = new Float64Array(e.length);
  t.length !== 2 && (e = e.map(t), t = gn);
  const i = (u, f) => t(e[u], e[f]);
  let o, a;
  return Uint32Array.from(e, (u, f) => f).sort(t === gn ? (u, f) => Ce(e[u], e[f]) : _u(i)).forEach((u, f) => {
    const c = i(u, o === void 0 ? u : o);
    c >= 0 ? ((o === void 0 || c > 0) && (o = u, a = f), r[u] = a) : r[u] = NaN;
  }), r;
}
function Y6(n, t = gn) {
  let e, r = !1;
  if (t.length === 1) {
    let i;
    for (const o of n) {
      const a = t(o);
      (r ? gn(a, i) < 0 : gn(a, a) === 0) && (e = o, i = a, r = !0);
    }
  } else
    for (const i of n)
      (r ? t(i, e) < 0 : t(i, i) === 0) && (e = i, r = !0);
  return e;
}
function h1(n, t = gn) {
  if (t.length === 1)
    return Gs(n, t);
  let e, r = -1, i = -1;
  for (const o of n)
    ++i, (r < 0 ? t(o, o) === 0 : t(o, e) < 0) && (e = o, r = i);
  return r;
}
function q6(n, t = gn) {
  if (t.length === 1)
    return Xs(n, t);
  let e, r = -1, i = -1;
  for (const o of n)
    ++i, (r < 0 ? t(o, o) === 0 : t(o, e) > 0) && (e = o, r = i);
  return r;
}
function U6(n, t) {
  const e = h1(n, t);
  return e < 0 ? void 0 : e;
}
const H6 = d1(Math.random);
function d1(n) {
  return function(e, r = 0, i = e.length) {
    let o = i - (r = +r);
    for (; o; ) {
      const a = n() * o-- | 0, u = e[o + r];
      e[o + r] = e[a + r], e[a + r] = u;
    }
    return e;
  };
}
function X6(n, t) {
  let e = 0;
  if (t === void 0)
    for (let r of n)
      (r = +r) && (e += r);
  else {
    let r = -1;
    for (let i of n)
      (i = +t(i, ++r, n)) && (e += i);
  }
  return e;
}
function g1(n) {
  if (!(o = n.length))
    return [];
  for (var t = -1, e = Mr(n, p1), r = new Array(e); ++t < e; )
    for (var i = -1, o, a = r[t] = new Array(o); ++i < o; )
      a[i] = n[i][t];
  return r;
}
function p1(n) {
  return n.length;
}
function G6() {
  return g1(arguments);
}
function V6(n, t) {
  if (typeof t != "function")
    throw new TypeError("test is not a function");
  let e = -1;
  for (const r of n)
    if (!t(r, ++e, n))
      return !1;
  return !0;
}
function W6(n, t) {
  if (typeof t != "function")
    throw new TypeError("test is not a function");
  let e = -1;
  for (const r of n)
    if (t(r, ++e, n))
      return !0;
  return !1;
}
function Z6(n, t) {
  if (typeof t != "function")
    throw new TypeError("test is not a function");
  const e = [];
  let r = -1;
  for (const i of n)
    t(i, ++r, n) && e.push(i);
  return e;
}
function $f(n, t) {
  if (typeof n[Symbol.iterator] != "function")
    throw new TypeError("values is not iterable");
  if (typeof t != "function")
    throw new TypeError("mapper is not a function");
  return Array.from(n, (e, r) => t(e, r, n));
}
function Q6(n, t, e) {
  if (typeof t != "function")
    throw new TypeError("reducer is not a function");
  const r = n[Symbol.iterator]();
  let i, o, a = -1;
  if (arguments.length < 3) {
    if ({ done: i, value: e } = r.next(), i)
      return;
    ++a;
  }
  for (; { done: i, value: o } = r.next(), !i; )
    e = t(e, o, ++a, n);
  return e;
}
function K6(n) {
  if (typeof n[Symbol.iterator] != "function")
    throw new TypeError("values is not iterable");
  return Array.from(n).reverse();
}
function J6(n, ...t) {
  n = new Zt(n);
  for (const e of t)
    for (const r of e)
      n.delete(r);
  return n;
}
function j6(n, t) {
  const e = t[Symbol.iterator](), r = new Zt();
  for (const i of n) {
    if (r.has(i))
      return !1;
    let o, a;
    for (; ({ value: o, done: a } = e.next()) && !a; ) {
      if (Object.is(i, o))
        return !1;
      r.add(o);
    }
  }
  return !0;
}
function nw(n, ...t) {
  n = new Zt(n), t = t.map(m1);
  n:
    for (const e of n)
      for (const r of t)
        if (!r.has(e)) {
          n.delete(e);
          continue n;
        }
  return n;
}
function m1(n) {
  return n instanceof Zt ? n : new Zt(n);
}
function y1(n, t) {
  const e = n[Symbol.iterator](), r = /* @__PURE__ */ new Set();
  for (const i of t) {
    const o = Nf(i);
    if (r.has(o))
      continue;
    let a, u;
    for (; { value: a, done: u } = e.next(); ) {
      if (u)
        return !1;
      const f = Nf(a);
      if (r.add(f), Object.is(o, f))
        break;
    }
  }
  return !0;
}
function Nf(n) {
  return n !== null && typeof n == "object" ? n.valueOf() : n;
}
function tw(n, t) {
  return y1(t, n);
}
function ew(...n) {
  const t = new Zt();
  for (const e of n)
    for (const r of e)
      t.add(r);
  return t;
}
function b1(n) {
  return n;
}
var di = 1, gi = 2, xa = 3, or = 4, Cf = 1e-6;
function _1(n) {
  return "translate(" + n + ",0)";
}
function v1(n) {
  return "translate(0," + n + ")";
}
function w1(n) {
  return (t) => +n(t);
}
function x1(n, t) {
  return t = Math.max(0, n.bandwidth() - t * 2) / 2, n.round() && (t = Math.round(t)), (e) => +n(e) + t;
}
function M1() {
  return !this.__axis;
}
function go(n, t) {
  var e = [], r = null, i = null, o = 6, a = 6, u = 3, f = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, c = n === di || n === or ? -1 : 1, s = n === or || n === gi ? "x" : "y", h = n === di || n === xa ? _1 : v1;
  function l(d) {
    var p = r == null ? t.ticks ? t.ticks.apply(t, e) : t.domain() : r, m = i == null ? t.tickFormat ? t.tickFormat.apply(t, e) : b1 : i, g = Math.max(o, 0) + u, y = t.range(), v = +y[0] + f, _ = +y[y.length - 1] + f, b = (t.bandwidth ? x1 : w1)(t.copy(), f), w = d.selection ? d.selection() : d, x = w.selectAll(".domain").data([null]), E = w.selectAll(".tick").data(p, t).order(), $ = E.exit(), P = E.enter().append("g").attr("class", "tick"), S = E.select("line"), T = E.select("text");
    x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), E = E.merge(P), S = S.merge(P.append("line").attr("stroke", "currentColor").attr(s + "2", c * o)), T = T.merge(P.append("text").attr("fill", "currentColor").attr(s, c * g).attr("dy", n === di ? "0em" : n === xa ? "0.71em" : "0.32em")), d !== w && (x = x.transition(d), E = E.transition(d), S = S.transition(d), T = T.transition(d), $ = $.transition(d).attr("opacity", Cf).attr("transform", function(R) {
      return isFinite(R = b(R)) ? h(R + f) : this.getAttribute("transform");
    }), P.attr("opacity", Cf).attr("transform", function(R) {
      var C = this.parentNode.__axis;
      return h((C && isFinite(C = C(R)) ? C : b(R)) + f);
    })), $.remove(), x.attr("d", n === or || n === gi ? a ? "M" + c * a + "," + v + "H" + f + "V" + _ + "H" + c * a : "M" + f + "," + v + "V" + _ : a ? "M" + v + "," + c * a + "V" + f + "H" + _ + "V" + c * a : "M" + v + "," + f + "H" + _), E.attr("opacity", 1).attr("transform", function(R) {
      return h(b(R) + f);
    }), S.attr(s + "2", c * o), T.attr(s, c * g).text(m), w.filter(M1).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", n === gi ? "start" : n === or ? "end" : "middle"), w.each(function() {
      this.__axis = b;
    });
  }
  return l.scale = function(d) {
    return arguments.length ? (t = d, l) : t;
  }, l.ticks = function() {
    return e = Array.from(arguments), l;
  }, l.tickArguments = function(d) {
    return arguments.length ? (e = d == null ? [] : Array.from(d), l) : e.slice();
  }, l.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), l) : r && r.slice();
  }, l.tickFormat = function(d) {
    return arguments.length ? (i = d, l) : i;
  }, l.tickSize = function(d) {
    return arguments.length ? (o = a = +d, l) : o;
  }, l.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, l) : o;
  }, l.tickSizeOuter = function(d) {
    return arguments.length ? (a = +d, l) : a;
  }, l.tickPadding = function(d) {
    return arguments.length ? (u = +d, l) : u;
  }, l.offset = function(d) {
    return arguments.length ? (f = +d, l) : f;
  }, l;
}
function rw(n) {
  return go(di, n);
}
function iw(n) {
  return go(gi, n);
}
function T1(n) {
  return go(xa, n);
}
function S1(n) {
  return go(or, n);
}
var A1 = { value: () => {
} };
function Ge() {
  for (var n = 0, t = arguments.length, e = {}, r; n < t; ++n) {
    if (!(r = arguments[n] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new pi(e);
}
function pi(n) {
  this._ = n;
}
function k1(n, t) {
  return n.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !t.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
pi.prototype = Ge.prototype = {
  constructor: pi,
  on: function(n, t) {
    var e = this._, r = k1(n + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; )
        if ((i = (n = r[o]).type) && (i = E1(e[i], n.name)))
          return i;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++o < a; )
      if (i = (n = r[o]).type)
        e[i] = Rf(e[i], n.name, t);
      else if (t == null)
        for (i in e)
          e[i] = Rf(e[i], n.name, null);
    return this;
  },
  copy: function() {
    var n = {}, t = this._;
    for (var e in t)
      n[e] = t[e].slice();
    return new pi(n);
  },
  call: function(n, t) {
    if ((i = arguments.length - 2) > 0)
      for (var e = new Array(i), r = 0, i, o; r < i; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    for (o = this._[n], r = 0, i = o.length; r < i; ++r)
      o[r].value.apply(t, e);
  },
  apply: function(n, t, e) {
    if (!this._.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    for (var r = this._[n], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(t, e);
  }
};
function E1(n, t) {
  for (var e = 0, r = n.length, i; e < r; ++e)
    if ((i = n[e]).name === t)
      return i.value;
}
function Rf(n, t, e) {
  for (var r = 0, i = n.length; r < i; ++r)
    if (n[r].name === t) {
      n[r] = A1, n = n.slice(0, r).concat(n.slice(r + 1));
      break;
    }
  return e != null && n.push({ name: t, value: e }), n;
}
var Ma = "http://www.w3.org/1999/xhtml";
const Pf = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ma,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function po(n) {
  var t = n += "", e = t.indexOf(":");
  return e >= 0 && (t = n.slice(0, e)) !== "xmlns" && (n = n.slice(e + 1)), Pf.hasOwnProperty(t) ? { space: Pf[t], local: n } : n;
}
function $1(n) {
  return function() {
    var t = this.ownerDocument, e = this.namespaceURI;
    return e === Ma && t.documentElement.namespaceURI === Ma ? t.createElement(n) : t.createElementNS(e, n);
  };
}
function N1(n) {
  return function() {
    return this.ownerDocument.createElementNS(n.space, n.local);
  };
}
function wu(n) {
  var t = po(n);
  return (t.local ? N1 : $1)(t);
}
function C1() {
}
function xu(n) {
  return n == null ? C1 : function() {
    return this.querySelector(n);
  };
}
function R1(n) {
  typeof n != "function" && (n = xu(n));
  for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = t[i], a = o.length, u = r[i] = new Array(a), f, c, s = 0; s < a; ++s)
      (f = o[s]) && (c = n.call(f, f.__data__, s, o)) && ("__data__" in f && (c.__data__ = f.__data__), u[s] = c);
  return new Bn(r, this._parents);
}
function Ws(n) {
  return n == null ? [] : Array.isArray(n) ? n : Array.from(n);
}
function P1() {
  return [];
}
function Zs(n) {
  return n == null ? P1 : function() {
    return this.querySelectorAll(n);
  };
}
function I1(n) {
  return function() {
    return Ws(n.apply(this, arguments));
  };
}
function z1(n) {
  typeof n == "function" ? n = I1(n) : n = Zs(n);
  for (var t = this._groups, e = t.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = t[o], u = a.length, f, c = 0; c < u; ++c)
      (f = a[c]) && (r.push(n.call(f, f.__data__, c, a)), i.push(f));
  return new Bn(r, i);
}
function Qs(n) {
  return function() {
    return this.matches(n);
  };
}
function Ks(n) {
  return function(t) {
    return t.matches(n);
  };
}
var D1 = Array.prototype.find;
function O1(n) {
  return function() {
    return D1.call(this.children, n);
  };
}
function F1() {
  return this.firstElementChild;
}
function B1(n) {
  return this.select(n == null ? F1 : O1(typeof n == "function" ? n : Ks(n)));
}
var L1 = Array.prototype.filter;
function Y1() {
  return Array.from(this.children);
}
function q1(n) {
  return function() {
    return L1.call(this.children, n);
  };
}
function U1(n) {
  return this.selectAll(n == null ? Y1 : q1(typeof n == "function" ? n : Ks(n)));
}
function H1(n) {
  typeof n != "function" && (n = Qs(n));
  for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = t[i], a = o.length, u = r[i] = [], f, c = 0; c < a; ++c)
      (f = o[c]) && n.call(f, f.__data__, c, o) && u.push(f);
  return new Bn(r, this._parents);
}
function Js(n) {
  return new Array(n.length);
}
function X1() {
  return new Bn(this._enter || this._groups.map(Js), this._parents);
}
function Ei(n, t) {
  this.ownerDocument = n.ownerDocument, this.namespaceURI = n.namespaceURI, this._next = null, this._parent = n, this.__data__ = t;
}
Ei.prototype = {
  constructor: Ei,
  appendChild: function(n) {
    return this._parent.insertBefore(n, this._next);
  },
  insertBefore: function(n, t) {
    return this._parent.insertBefore(n, t);
  },
  querySelector: function(n) {
    return this._parent.querySelector(n);
  },
  querySelectorAll: function(n) {
    return this._parent.querySelectorAll(n);
  }
};
function G1(n) {
  return function() {
    return n;
  };
}
function V1(n, t, e, r, i, o) {
  for (var a = 0, u, f = t.length, c = o.length; a < c; ++a)
    (u = t[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new Ei(n, o[a]);
  for (; a < f; ++a)
    (u = t[a]) && (i[a] = u);
}
function W1(n, t, e, r, i, o, a) {
  var u, f, c = /* @__PURE__ */ new Map(), s = t.length, h = o.length, l = new Array(s), d;
  for (u = 0; u < s; ++u)
    (f = t[u]) && (l[u] = d = a.call(f, f.__data__, u, t) + "", c.has(d) ? i[u] = f : c.set(d, f));
  for (u = 0; u < h; ++u)
    d = a.call(n, o[u], u, o) + "", (f = c.get(d)) ? (r[u] = f, f.__data__ = o[u], c.delete(d)) : e[u] = new Ei(n, o[u]);
  for (u = 0; u < s; ++u)
    (f = t[u]) && c.get(l[u]) === f && (i[u] = f);
}
function Z1(n) {
  return n.__data__;
}
function Q1(n, t) {
  if (!arguments.length)
    return Array.from(this, Z1);
  var e = t ? W1 : V1, r = this._parents, i = this._groups;
  typeof n != "function" && (n = G1(n));
  for (var o = i.length, a = new Array(o), u = new Array(o), f = new Array(o), c = 0; c < o; ++c) {
    var s = r[c], h = i[c], l = h.length, d = K1(n.call(s, s && s.__data__, c, r)), p = d.length, m = u[c] = new Array(p), g = a[c] = new Array(p), y = f[c] = new Array(l);
    e(s, h, m, g, y, d, t);
    for (var v = 0, _ = 0, b, w; v < p; ++v)
      if (b = m[v]) {
        for (v >= _ && (_ = v + 1); !(w = g[_]) && ++_ < p; )
          ;
        b._next = w || null;
      }
  }
  return a = new Bn(a, r), a._enter = u, a._exit = f, a;
}
function K1(n) {
  return typeof n == "object" && "length" in n ? n : Array.from(n);
}
function J1() {
  return new Bn(this._exit || this._groups.map(Js), this._parents);
}
function j1(n, t, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof n == "function" ? (r = n(r), r && (r = r.selection())) : r = r.append(n + ""), t != null && (i = t(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function nd(n) {
  for (var t = n.selection ? n.selection() : n, e = this._groups, r = t._groups, i = e.length, o = r.length, a = Math.min(i, o), u = new Array(i), f = 0; f < a; ++f)
    for (var c = e[f], s = r[f], h = c.length, l = u[f] = new Array(h), d, p = 0; p < h; ++p)
      (d = c[p] || s[p]) && (l[p] = d);
  for (; f < i; ++f)
    u[f] = e[f];
  return new Bn(u, this._parents);
}
function td() {
  for (var n = this._groups, t = -1, e = n.length; ++t < e; )
    for (var r = n[t], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function ed(n) {
  n || (n = rd);
  function t(h, l) {
    return h && l ? n(h.__data__, l.__data__) : !h - !l;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], u = a.length, f = i[o] = new Array(u), c, s = 0; s < u; ++s)
      (c = a[s]) && (f[s] = c);
    f.sort(t);
  }
  return new Bn(i, this._parents).order();
}
function rd(n, t) {
  return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function id() {
  var n = arguments[0];
  return arguments[0] = this, n.apply(null, arguments), this;
}
function od() {
  return Array.from(this);
}
function ad() {
  for (var n = this._groups, t = 0, e = n.length; t < e; ++t)
    for (var r = n[t], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a)
        return a;
    }
  return null;
}
function ud() {
  let n = 0;
  for (const t of this)
    ++n;
  return n;
}
function fd() {
  return !this.node();
}
function cd(n) {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var i = t[e], o = 0, a = i.length, u; o < a; ++o)
      (u = i[o]) && n.call(u, u.__data__, o, i);
  return this;
}
function sd(n) {
  return function() {
    this.removeAttribute(n);
  };
}
function ld(n) {
  return function() {
    this.removeAttributeNS(n.space, n.local);
  };
}
function hd(n, t) {
  return function() {
    this.setAttribute(n, t);
  };
}
function dd(n, t) {
  return function() {
    this.setAttributeNS(n.space, n.local, t);
  };
}
function gd(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    e == null ? this.removeAttribute(n) : this.setAttribute(n, e);
  };
}
function pd(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    e == null ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e);
  };
}
function md(n, t) {
  var e = po(n);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((t == null ? e.local ? ld : sd : typeof t == "function" ? e.local ? pd : gd : e.local ? dd : hd)(e, t));
}
function js(n) {
  return n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView;
}
function yd(n) {
  return function() {
    this.style.removeProperty(n);
  };
}
function bd(n, t, e) {
  return function() {
    this.style.setProperty(n, t, e);
  };
}
function _d(n, t, e) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(n) : this.style.setProperty(n, r, e);
  };
}
function vd(n, t, e) {
  return arguments.length > 1 ? this.each((t == null ? yd : typeof t == "function" ? _d : bd)(n, t, e == null ? "" : e)) : Pe(this.node(), n);
}
function Pe(n, t) {
  return n.style.getPropertyValue(t) || js(n).getComputedStyle(n, null).getPropertyValue(t);
}
function wd(n) {
  return function() {
    delete this[n];
  };
}
function xd(n, t) {
  return function() {
    this[n] = t;
  };
}
function Md(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    e == null ? delete this[n] : this[n] = e;
  };
}
function Td(n, t) {
  return arguments.length > 1 ? this.each((t == null ? wd : typeof t == "function" ? Md : xd)(n, t)) : this.node()[n];
}
function nl(n) {
  return n.trim().split(/^|\s+/);
}
function Mu(n) {
  return n.classList || new tl(n);
}
function tl(n) {
  this._node = n, this._names = nl(n.getAttribute("class") || "");
}
tl.prototype = {
  add: function(n) {
    var t = this._names.indexOf(n);
    t < 0 && (this._names.push(n), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(n) {
    var t = this._names.indexOf(n);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(n) {
    return this._names.indexOf(n) >= 0;
  }
};
function el(n, t) {
  for (var e = Mu(n), r = -1, i = t.length; ++r < i; )
    e.add(t[r]);
}
function rl(n, t) {
  for (var e = Mu(n), r = -1, i = t.length; ++r < i; )
    e.remove(t[r]);
}
function Sd(n) {
  return function() {
    el(this, n);
  };
}
function Ad(n) {
  return function() {
    rl(this, n);
  };
}
function kd(n, t) {
  return function() {
    (t.apply(this, arguments) ? el : rl)(this, n);
  };
}
function Ed(n, t) {
  var e = nl(n + "");
  if (arguments.length < 2) {
    for (var r = Mu(this.node()), i = -1, o = e.length; ++i < o; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? kd : t ? Sd : Ad)(e, t));
}
function $d() {
  this.textContent = "";
}
function Nd(n) {
  return function() {
    this.textContent = n;
  };
}
function Cd(n) {
  return function() {
    var t = n.apply(this, arguments);
    this.textContent = t == null ? "" : t;
  };
}
function Rd(n) {
  return arguments.length ? this.each(n == null ? $d : (typeof n == "function" ? Cd : Nd)(n)) : this.node().textContent;
}
function Pd() {
  this.innerHTML = "";
}
function Id(n) {
  return function() {
    this.innerHTML = n;
  };
}
function zd(n) {
  return function() {
    var t = n.apply(this, arguments);
    this.innerHTML = t == null ? "" : t;
  };
}
function Dd(n) {
  return arguments.length ? this.each(n == null ? Pd : (typeof n == "function" ? zd : Id)(n)) : this.node().innerHTML;
}
function Od() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Fd() {
  return this.each(Od);
}
function Bd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ld() {
  return this.each(Bd);
}
function Yd(n) {
  var t = typeof n == "function" ? n : wu(n);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function qd() {
  return null;
}
function Ud(n, t) {
  var e = typeof n == "function" ? n : wu(n), r = t == null ? qd : typeof t == "function" ? t : xu(t);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Hd() {
  var n = this.parentNode;
  n && n.removeChild(this);
}
function Xd() {
  return this.each(Hd);
}
function Gd() {
  var n = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(n, this.nextSibling) : n;
}
function Vd() {
  var n = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(n, this.nextSibling) : n;
}
function Wd(n) {
  return this.select(n ? Vd : Gd);
}
function Zd(n) {
  return arguments.length ? this.property("__data__", n) : this.node().__data__;
}
function Qd(n) {
  return function(t) {
    n.call(this, t, this.__data__);
  };
}
function Kd(n) {
  return n.trim().split(/^|\s+/).map(function(t) {
    var e = "", r = t.indexOf(".");
    return r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: e };
  });
}
function Jd(n) {
  return function() {
    var t = this.__on;
    if (!!t) {
      for (var e = 0, r = -1, i = t.length, o; e < i; ++e)
        o = t[e], (!n.type || o.type === n.type) && o.name === n.name ? this.removeEventListener(o.type, o.listener, o.options) : t[++r] = o;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function jd(n, t, e) {
  return function() {
    var r = this.__on, i, o = Qd(t);
    if (r) {
      for (var a = 0, u = r.length; a < u; ++a)
        if ((i = r[a]).type === n.type && i.name === n.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = t;
          return;
        }
    }
    this.addEventListener(n.type, o, e), i = { type: n.type, name: n.name, value: t, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function ng(n, t, e) {
  var r = Kd(n + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var f = 0, c = u.length, s; f < c; ++f)
        for (i = 0, s = u[f]; i < o; ++i)
          if ((a = r[i]).type === s.type && a.name === s.name)
            return s.value;
    }
    return;
  }
  for (u = t ? jd : Jd, i = 0; i < o; ++i)
    this.each(u(r[i], t, e));
  return this;
}
function il(n, t, e) {
  var r = js(n), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(t, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(t, !1, !1)), n.dispatchEvent(i);
}
function tg(n, t) {
  return function() {
    return il(this, n, t);
  };
}
function eg(n, t) {
  return function() {
    return il(this, n, t.apply(this, arguments));
  };
}
function rg(n, t) {
  return this.each((typeof t == "function" ? eg : tg)(n, t));
}
function* ig() {
  for (var n = this._groups, t = 0, e = n.length; t < e; ++t)
    for (var r = n[t], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Tu = [null];
function Bn(n, t) {
  this._groups = n, this._parents = t;
}
function Ve() {
  return new Bn([[document.documentElement]], Tu);
}
function og() {
  return this;
}
Bn.prototype = Ve.prototype = {
  constructor: Bn,
  select: R1,
  selectAll: z1,
  selectChild: B1,
  selectChildren: U1,
  filter: H1,
  data: Q1,
  enter: X1,
  exit: J1,
  join: j1,
  merge: nd,
  selection: og,
  order: td,
  sort: ed,
  call: id,
  nodes: od,
  node: ad,
  size: ud,
  empty: fd,
  each: cd,
  attr: md,
  style: vd,
  property: Td,
  classed: Ed,
  text: Rd,
  html: Dd,
  raise: Fd,
  lower: Ld,
  append: Yd,
  insert: Ud,
  remove: Xd,
  clone: Wd,
  datum: Zd,
  on: ng,
  dispatch: rg,
  [Symbol.iterator]: ig
};
function Tn(n) {
  return typeof n == "string" ? new Bn([[document.querySelector(n)]], [document.documentElement]) : new Bn([[n]], Tu);
}
function ag(n) {
  return Tn(wu(n).call(document.documentElement));
}
var ug = 0;
function fg() {
  return new Ta();
}
function Ta() {
  this._ = "@" + (++ug).toString(36);
}
Ta.prototype = fg.prototype = {
  constructor: Ta,
  get: function(n) {
    for (var t = this._; !(t in n); )
      if (!(n = n.parentNode))
        return;
    return n[t];
  },
  set: function(n, t) {
    return n[this._] = t;
  },
  remove: function(n) {
    return this._ in n && delete n[this._];
  },
  toString: function() {
    return this._;
  }
};
function ol(n) {
  let t;
  for (; t = n.sourceEvent; )
    n = t;
  return n;
}
function Wn(n, t) {
  if (n = ol(n), t === void 0 && (t = n.currentTarget), t) {
    var e = t.ownerSVGElement || t;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop];
    }
  }
  return [n.pageX, n.pageY];
}
function ow(n, t) {
  return n.target && (n = ol(n), t === void 0 && (t = n.currentTarget), n = n.touches || [n]), Array.from(n, (e) => Wn(e, t));
}
function aw(n) {
  return typeof n == "string" ? new Bn([document.querySelectorAll(n)], [document.documentElement]) : new Bn([Ws(n)], Tu);
}
const cg = { passive: !1 }, Tr = { capture: !0, passive: !1 };
function Do(n) {
  n.stopImmediatePropagation();
}
function Te(n) {
  n.preventDefault(), n.stopImmediatePropagation();
}
function Su(n) {
  var t = n.document.documentElement, e = Tn(n).on("dragstart.drag", Te, Tr);
  "onselectstart" in t ? e.on("selectstart.drag", Te, Tr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Au(n, t) {
  var e = n.document.documentElement, r = Tn(n).on("dragstart.drag", null);
  t && (r.on("click.drag", Te, Tr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Hr = (n) => () => n;
function Sa(n, {
  sourceEvent: t,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: u,
  dx: f,
  dy: c,
  dispatch: s
}) {
  Object.defineProperties(this, {
    type: { value: n, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: u, enumerable: !0, configurable: !0 },
    dx: { value: f, enumerable: !0, configurable: !0 },
    dy: { value: c, enumerable: !0, configurable: !0 },
    _: { value: s }
  });
}
Sa.prototype.on = function() {
  var n = this._.on.apply(this._, arguments);
  return n === this._ ? this : n;
};
function sg(n) {
  return !n.ctrlKey && !n.button;
}
function lg() {
  return this.parentNode;
}
function hg(n, t) {
  return t == null ? { x: n.x, y: n.y } : t;
}
function dg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function uw() {
  var n = sg, t = lg, e = hg, r = dg, i = {}, o = Ge("start", "drag", "end"), a = 0, u, f, c, s, h = 0;
  function l(b) {
    b.on("mousedown.drag", d).filter(r).on("touchstart.drag", g).on("touchmove.drag", y, cg).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(b, w) {
    if (!(s || !n.call(this, b, w))) {
      var x = _(this, t.call(this, b, w), b, w, "mouse");
      !x || (Tn(b.view).on("mousemove.drag", p, Tr).on("mouseup.drag", m, Tr), Su(b.view), Do(b), c = !1, u = b.clientX, f = b.clientY, x("start", b));
    }
  }
  function p(b) {
    if (Te(b), !c) {
      var w = b.clientX - u, x = b.clientY - f;
      c = w * w + x * x > h;
    }
    i.mouse("drag", b);
  }
  function m(b) {
    Tn(b.view).on("mousemove.drag mouseup.drag", null), Au(b.view, c), Te(b), i.mouse("end", b);
  }
  function g(b, w) {
    if (!!n.call(this, b, w)) {
      var x = b.changedTouches, E = t.call(this, b, w), $ = x.length, P, S;
      for (P = 0; P < $; ++P)
        (S = _(this, E, b, w, x[P].identifier, x[P])) && (Do(b), S("start", b, x[P]));
    }
  }
  function y(b) {
    var w = b.changedTouches, x = w.length, E, $;
    for (E = 0; E < x; ++E)
      ($ = i[w[E].identifier]) && (Te(b), $("drag", b, w[E]));
  }
  function v(b) {
    var w = b.changedTouches, x = w.length, E, $;
    for (s && clearTimeout(s), s = setTimeout(function() {
      s = null;
    }, 500), E = 0; E < x; ++E)
      ($ = i[w[E].identifier]) && (Do(b), $("end", b, w[E]));
  }
  function _(b, w, x, E, $, P) {
    var S = o.copy(), T = Wn(P || x, w), R, C, M;
    if ((M = e.call(b, new Sa("beforestart", {
      sourceEvent: x,
      target: l,
      identifier: $,
      active: a,
      x: T[0],
      y: T[1],
      dx: 0,
      dy: 0,
      dispatch: S
    }), E)) != null)
      return R = M.x - T[0] || 0, C = M.y - T[1] || 0, function A(k, N, I) {
        var z = T, O;
        switch (k) {
          case "start":
            i[$] = A, O = a++;
            break;
          case "end":
            delete i[$], --a;
          case "drag":
            T = Wn(I || N, w), O = a;
            break;
        }
        S.call(
          k,
          b,
          new Sa(k, {
            sourceEvent: N,
            subject: M,
            target: l,
            identifier: $,
            active: O,
            x: T[0] + R,
            y: T[1] + C,
            dx: T[0] - z[0],
            dy: T[1] - z[1],
            dispatch: S
          }),
          E
        );
      };
  }
  return l.filter = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : Hr(!!b), l) : n;
  }, l.container = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : Hr(b), l) : t;
  }, l.subject = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : Hr(b), l) : e;
  }, l.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : Hr(!!b), l) : r;
  }, l.on = function() {
    var b = o.on.apply(o, arguments);
    return b === o ? l : b;
  }, l.clickDistance = function(b) {
    return arguments.length ? (h = (b = +b) * b, l) : Math.sqrt(h);
  }, l;
}
function We(n, t, e) {
  n.prototype = t.prototype = e, e.constructor = n;
}
function Or(n, t) {
  var e = Object.create(n.prototype);
  for (var r in t)
    e[r] = t[r];
  return e;
}
function Ft() {
}
var Qt = 0.7, Ie = 1 / Qt, Se = "\\s*([+-]?\\d+)\\s*", Sr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", lt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", gg = /^#([0-9a-f]{3,8})$/, pg = new RegExp(`^rgb\\(${Se},${Se},${Se}\\)$`), mg = new RegExp(`^rgb\\(${lt},${lt},${lt}\\)$`), yg = new RegExp(`^rgba\\(${Se},${Se},${Se},${Sr}\\)$`), bg = new RegExp(`^rgba\\(${lt},${lt},${lt},${Sr}\\)$`), _g = new RegExp(`^hsl\\(${Sr},${lt},${lt}\\)$`), vg = new RegExp(`^hsla\\(${Sr},${lt},${lt},${Sr}\\)$`), If = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
We(Ft, Kt, {
  copy(n) {
    return Object.assign(new this.constructor(), this, n);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: zf,
  formatHex: zf,
  formatHex8: wg,
  formatHsl: xg,
  formatRgb: Df,
  toString: Df
});
function zf() {
  return this.rgb().formatHex();
}
function wg() {
  return this.rgb().formatHex8();
}
function xg() {
  return al(this).formatHsl();
}
function Df() {
  return this.rgb().formatRgb();
}
function Kt(n) {
  var t, e;
  return n = (n + "").trim().toLowerCase(), (t = gg.exec(n)) ? (e = t[1].length, t = parseInt(t[1], 16), e === 6 ? Of(t) : e === 3 ? new bn(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : e === 8 ? Xr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : e === 4 ? Xr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = pg.exec(n)) ? new bn(t[1], t[2], t[3], 1) : (t = mg.exec(n)) ? new bn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = yg.exec(n)) ? Xr(t[1], t[2], t[3], t[4]) : (t = bg.exec(n)) ? Xr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = _g.exec(n)) ? Lf(t[1], t[2] / 100, t[3] / 100, 1) : (t = vg.exec(n)) ? Lf(t[1], t[2] / 100, t[3] / 100, t[4]) : If.hasOwnProperty(n) ? Of(If[n]) : n === "transparent" ? new bn(NaN, NaN, NaN, 0) : null;
}
function Of(n) {
  return new bn(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function Xr(n, t, e, r) {
  return r <= 0 && (n = t = e = NaN), new bn(n, t, e, r);
}
function ku(n) {
  return n instanceof Ft || (n = Kt(n)), n ? (n = n.rgb(), new bn(n.r, n.g, n.b, n.opacity)) : new bn();
}
function Ar(n, t, e, r) {
  return arguments.length === 1 ? ku(n) : new bn(n, t, e, r == null ? 1 : r);
}
function bn(n, t, e, r) {
  this.r = +n, this.g = +t, this.b = +e, this.opacity = +r;
}
We(bn, Ar, Or(Ft, {
  brighter(n) {
    return n = n == null ? Ie : Math.pow(Ie, n), new bn(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? Qt : Math.pow(Qt, n), new bn(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new bn(Vt(this.r), Vt(this.g), Vt(this.b), $i(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ff,
  formatHex: Ff,
  formatHex8: Mg,
  formatRgb: Bf,
  toString: Bf
}));
function Ff() {
  return `#${Xt(this.r)}${Xt(this.g)}${Xt(this.b)}`;
}
function Mg() {
  return `#${Xt(this.r)}${Xt(this.g)}${Xt(this.b)}${Xt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Bf() {
  const n = $i(this.opacity);
  return `${n === 1 ? "rgb(" : "rgba("}${Vt(this.r)}, ${Vt(this.g)}, ${Vt(this.b)}${n === 1 ? ")" : `, ${n})`}`;
}
function $i(n) {
  return isNaN(n) ? 1 : Math.max(0, Math.min(1, n));
}
function Vt(n) {
  return Math.max(0, Math.min(255, Math.round(n) || 0));
}
function Xt(n) {
  return n = Vt(n), (n < 16 ? "0" : "") + n.toString(16);
}
function Lf(n, t, e, r) {
  return r <= 0 ? n = t = e = NaN : e <= 0 || e >= 1 ? n = t = NaN : t <= 0 && (n = NaN), new et(n, t, e, r);
}
function al(n) {
  if (n instanceof et)
    return new et(n.h, n.s, n.l, n.opacity);
  if (n instanceof Ft || (n = Kt(n)), !n)
    return new et();
  if (n instanceof et)
    return n;
  n = n.rgb();
  var t = n.r / 255, e = n.g / 255, r = n.b / 255, i = Math.min(t, e, r), o = Math.max(t, e, r), a = NaN, u = o - i, f = (o + i) / 2;
  return u ? (t === o ? a = (e - r) / u + (e < r) * 6 : e === o ? a = (r - t) / u + 2 : a = (t - e) / u + 4, u /= f < 0.5 ? o + i : 2 - o - i, a *= 60) : u = f > 0 && f < 1 ? 0 : a, new et(a, u, f, n.opacity);
}
function Aa(n, t, e, r) {
  return arguments.length === 1 ? al(n) : new et(n, t, e, r == null ? 1 : r);
}
function et(n, t, e, r) {
  this.h = +n, this.s = +t, this.l = +e, this.opacity = +r;
}
We(et, Aa, Or(Ft, {
  brighter(n) {
    return n = n == null ? Ie : Math.pow(Ie, n), new et(this.h, this.s, this.l * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? Qt : Math.pow(Qt, n), new et(this.h, this.s, this.l * n, this.opacity);
  },
  rgb() {
    var n = this.h % 360 + (this.h < 0) * 360, t = isNaN(n) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * t, i = 2 * e - r;
    return new bn(
      Oo(n >= 240 ? n - 240 : n + 120, i, r),
      Oo(n, i, r),
      Oo(n < 120 ? n + 240 : n - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new et(Yf(this.h), Gr(this.s), Gr(this.l), $i(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const n = $i(this.opacity);
    return `${n === 1 ? "hsl(" : "hsla("}${Yf(this.h)}, ${Gr(this.s) * 100}%, ${Gr(this.l) * 100}%${n === 1 ? ")" : `, ${n})`}`;
  }
}));
function Yf(n) {
  return n = (n || 0) % 360, n < 0 ? n + 360 : n;
}
function Gr(n) {
  return Math.max(0, Math.min(1, n || 0));
}
function Oo(n, t, e) {
  return (n < 60 ? t + (e - t) * n / 60 : n < 180 ? e : n < 240 ? t + (e - t) * (240 - n) / 60 : t) * 255;
}
const ul = Math.PI / 180, fl = 180 / Math.PI, Ni = 18, cl = 0.96422, sl = 1, ll = 0.82521, hl = 4 / 29, Ae = 6 / 29, dl = 3 * Ae * Ae, Tg = Ae * Ae * Ae;
function gl(n) {
  if (n instanceof ot)
    return new ot(n.l, n.a, n.b, n.opacity);
  if (n instanceof st)
    return ml(n);
  n instanceof bn || (n = ku(n));
  var t = Yo(n.r), e = Yo(n.g), r = Yo(n.b), i = Fo((0.2225045 * t + 0.7168786 * e + 0.0606169 * r) / sl), o, a;
  return t === e && e === r ? o = a = i : (o = Fo((0.4360747 * t + 0.3850649 * e + 0.1430804 * r) / cl), a = Fo((0.0139322 * t + 0.0971045 * e + 0.7141733 * r) / ll)), new ot(116 * i - 16, 500 * (o - i), 200 * (i - a), n.opacity);
}
function fw(n, t) {
  return new ot(n, 0, 0, t == null ? 1 : t);
}
function ka(n, t, e, r) {
  return arguments.length === 1 ? gl(n) : new ot(n, t, e, r == null ? 1 : r);
}
function ot(n, t, e, r) {
  this.l = +n, this.a = +t, this.b = +e, this.opacity = +r;
}
We(ot, ka, Or(Ft, {
  brighter(n) {
    return new ot(this.l + Ni * (n == null ? 1 : n), this.a, this.b, this.opacity);
  },
  darker(n) {
    return new ot(this.l - Ni * (n == null ? 1 : n), this.a, this.b, this.opacity);
  },
  rgb() {
    var n = (this.l + 16) / 116, t = isNaN(this.a) ? n : n + this.a / 500, e = isNaN(this.b) ? n : n - this.b / 200;
    return t = cl * Bo(t), n = sl * Bo(n), e = ll * Bo(e), new bn(
      Lo(3.1338561 * t - 1.6168667 * n - 0.4906146 * e),
      Lo(-0.9787684 * t + 1.9161415 * n + 0.033454 * e),
      Lo(0.0719453 * t - 0.2289914 * n + 1.4052427 * e),
      this.opacity
    );
  }
}));
function Fo(n) {
  return n > Tg ? Math.pow(n, 1 / 3) : n / dl + hl;
}
function Bo(n) {
  return n > Ae ? n * n * n : dl * (n - hl);
}
function Lo(n) {
  return 255 * (n <= 31308e-7 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - 0.055);
}
function Yo(n) {
  return (n /= 255) <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
}
function pl(n) {
  if (n instanceof st)
    return new st(n.h, n.c, n.l, n.opacity);
  if (n instanceof ot || (n = gl(n)), n.a === 0 && n.b === 0)
    return new st(NaN, 0 < n.l && n.l < 100 ? 0 : NaN, n.l, n.opacity);
  var t = Math.atan2(n.b, n.a) * fl;
  return new st(t < 0 ? t + 360 : t, Math.sqrt(n.a * n.a + n.b * n.b), n.l, n.opacity);
}
function cw(n, t, e, r) {
  return arguments.length === 1 ? pl(n) : new st(e, t, n, r == null ? 1 : r);
}
function Ea(n, t, e, r) {
  return arguments.length === 1 ? pl(n) : new st(n, t, e, r == null ? 1 : r);
}
function st(n, t, e, r) {
  this.h = +n, this.c = +t, this.l = +e, this.opacity = +r;
}
function ml(n) {
  if (isNaN(n.h))
    return new ot(n.l, 0, 0, n.opacity);
  var t = n.h * ul;
  return new ot(n.l, Math.cos(t) * n.c, Math.sin(t) * n.c, n.opacity);
}
We(st, Ea, Or(Ft, {
  brighter(n) {
    return new st(this.h, this.c, this.l + Ni * (n == null ? 1 : n), this.opacity);
  },
  darker(n) {
    return new st(this.h, this.c, this.l - Ni * (n == null ? 1 : n), this.opacity);
  },
  rgb() {
    return ml(this).rgb();
  }
}));
var yl = -0.14861, Eu = 1.78277, $u = -0.29227, mo = -0.90649, kr = 1.97294, qf = kr * mo, Uf = kr * Eu, Hf = Eu * $u - mo * yl;
function Sg(n) {
  if (n instanceof Wt)
    return new Wt(n.h, n.s, n.l, n.opacity);
  n instanceof bn || (n = ku(n));
  var t = n.r / 255, e = n.g / 255, r = n.b / 255, i = (Hf * r + qf * t - Uf * e) / (Hf + qf - Uf), o = r - i, a = (kr * (e - i) - $u * o) / mo, u = Math.sqrt(a * a + o * o) / (kr * i * (1 - i)), f = u ? Math.atan2(a, o) * fl - 120 : NaN;
  return new Wt(f < 0 ? f + 360 : f, u, i, n.opacity);
}
function ht(n, t, e, r) {
  return arguments.length === 1 ? Sg(n) : new Wt(n, t, e, r == null ? 1 : r);
}
function Wt(n, t, e, r) {
  this.h = +n, this.s = +t, this.l = +e, this.opacity = +r;
}
We(Wt, ht, Or(Ft, {
  brighter(n) {
    return n = n == null ? Ie : Math.pow(Ie, n), new Wt(this.h, this.s, this.l * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? Qt : Math.pow(Qt, n), new Wt(this.h, this.s, this.l * n, this.opacity);
  },
  rgb() {
    var n = isNaN(this.h) ? 0 : (this.h + 120) * ul, t = +this.l, e = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(n), i = Math.sin(n);
    return new bn(
      255 * (t + e * (yl * r + Eu * i)),
      255 * (t + e * ($u * r + mo * i)),
      255 * (t + e * (kr * r)),
      this.opacity
    );
  }
}));
function bl(n, t, e, r, i) {
  var o = n * n, a = o * n;
  return ((1 - 3 * n + 3 * o - a) * t + (4 - 6 * o + 3 * a) * e + (1 + 3 * n + 3 * o - 3 * a) * r + a * i) / 6;
}
function Ag(n) {
  var t = n.length - 1;
  return function(e) {
    var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, t - 1) : Math.floor(e * t), i = n[r], o = n[r + 1], a = r > 0 ? n[r - 1] : 2 * i - o, u = r < t - 1 ? n[r + 2] : 2 * o - i;
    return bl((e - r / t) * t, a, i, o, u);
  };
}
function kg(n) {
  var t = n.length;
  return function(e) {
    var r = Math.floor(((e %= 1) < 0 ? ++e : e) * t), i = n[(r + t - 1) % t], o = n[r % t], a = n[(r + 1) % t], u = n[(r + 2) % t];
    return bl((e - r / t) * t, i, o, a, u);
  };
}
const yo = (n) => () => n;
function _l(n, t) {
  return function(e) {
    return n + e * t;
  };
}
function Eg(n, t, e) {
  return n = Math.pow(n, e), t = Math.pow(t, e) - n, e = 1 / e, function(r) {
    return Math.pow(n + r * t, e);
  };
}
function bo(n, t) {
  var e = t - n;
  return e ? _l(n, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : yo(isNaN(n) ? t : n);
}
function $g(n) {
  return (n = +n) == 1 ? _n : function(t, e) {
    return e - t ? Eg(t, e, n) : yo(isNaN(t) ? e : t);
  };
}
function _n(n, t) {
  var e = t - n;
  return e ? _l(n, e) : yo(isNaN(n) ? t : n);
}
const Ci = function n(t) {
  var e = $g(t);
  function r(i, o) {
    var a = e((i = Ar(i)).r, (o = Ar(o)).r), u = e(i.g, o.g), f = e(i.b, o.b), c = _n(i.opacity, o.opacity);
    return function(s) {
      return i.r = a(s), i.g = u(s), i.b = f(s), i.opacity = c(s), i + "";
    };
  }
  return r.gamma = n, r;
}(1);
function vl(n) {
  return function(t) {
    var e = t.length, r = new Array(e), i = new Array(e), o = new Array(e), a, u;
    for (a = 0; a < e; ++a)
      u = Ar(t[a]), r[a] = u.r || 0, i[a] = u.g || 0, o[a] = u.b || 0;
    return r = n(r), i = n(i), o = n(o), u.opacity = 1, function(f) {
      return u.r = r(f), u.g = i(f), u.b = o(f), u + "";
    };
  };
}
var Ng = vl(Ag), sw = vl(kg);
function wl(n, t) {
  t || (t = []);
  var e = n ? Math.min(t.length, n.length) : 0, r = t.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i)
      r[i] = n[i] * (1 - o) + t[i] * o;
    return r;
  };
}
function xl(n) {
  return ArrayBuffer.isView(n) && !(n instanceof DataView);
}
function lw(n, t) {
  return (xl(t) ? wl : Ml)(n, t);
}
function Ml(n, t) {
  var e = t ? t.length : 0, r = n ? Math.min(e, n.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a)
    i[a] = ie(n[a], t[a]);
  for (; a < e; ++a)
    o[a] = t[a];
  return function(u) {
    for (a = 0; a < r; ++a)
      o[a] = i[a](u);
    return o;
  };
}
function Cg(n, t) {
  var e = new Date();
  return n = +n, t = +t, function(r) {
    return e.setTime(n * (1 - r) + t * r), e;
  };
}
function tt(n, t) {
  return n = +n, t = +t, function(e) {
    return n * (1 - e) + t * e;
  };
}
function Rg(n, t) {
  var e = {}, r = {}, i;
  (n === null || typeof n != "object") && (n = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in n ? e[i] = ie(n[i], t[i]) : r[i] = t[i];
  return function(o) {
    for (i in e)
      r[i] = e[i](o);
    return r;
  };
}
var $a = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, qo = new RegExp($a.source, "g");
function Pg(n) {
  return function() {
    return n;
  };
}
function Ig(n) {
  return function(t) {
    return n(t) + "";
  };
}
function Tl(n, t) {
  var e = $a.lastIndex = qo.lastIndex = 0, r, i, o, a = -1, u = [], f = [];
  for (n = n + "", t = t + ""; (r = $a.exec(n)) && (i = qo.exec(t)); )
    (o = i.index) > e && (o = t.slice(e, o), u[a] ? u[a] += o : u[++a] = o), (r = r[0]) === (i = i[0]) ? u[a] ? u[a] += i : u[++a] = i : (u[++a] = null, f.push({ i: a, x: tt(r, i) })), e = qo.lastIndex;
  return e < t.length && (o = t.slice(e), u[a] ? u[a] += o : u[++a] = o), u.length < 2 ? f[0] ? Ig(f[0].x) : Pg(t) : (t = f.length, function(c) {
    for (var s = 0, h; s < t; ++s)
      u[(h = f[s]).i] = h.x(c);
    return u.join("");
  });
}
function ie(n, t) {
  var e = typeof t, r;
  return t == null || e === "boolean" ? yo(t) : (e === "number" ? tt : e === "string" ? (r = Kt(t)) ? (t = r, Ci) : Tl : t instanceof Kt ? Ci : t instanceof Date ? Cg : xl(t) ? wl : Array.isArray(t) ? Ml : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Rg : tt)(n, t);
}
function hw(n) {
  var t = n.length;
  return function(e) {
    return n[Math.max(0, Math.min(t - 1, Math.floor(e * t)))];
  };
}
function dw(n, t) {
  var e = bo(+n, +t);
  return function(r) {
    var i = e(r);
    return i - 360 * Math.floor(i / 360);
  };
}
function Nu(n, t) {
  return n = +n, t = +t, function(e) {
    return Math.round(n * (1 - e) + t * e);
  };
}
var Xf = 180 / Math.PI, Na = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Sl(n, t, e, r, i, o) {
  var a, u, f;
  return (a = Math.sqrt(n * n + t * t)) && (n /= a, t /= a), (f = n * e + t * r) && (e -= n * f, r -= t * f), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, f /= u), n * r < t * e && (n = -n, t = -t, f = -f, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(t, n) * Xf,
    skewX: Math.atan(f) * Xf,
    scaleX: a,
    scaleY: u
  };
}
var Vr;
function zg(n) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(n + "");
  return t.isIdentity ? Na : Sl(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Dg(n) {
  return n == null || (Vr || (Vr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Vr.setAttribute("transform", n), !(n = Vr.transform.baseVal.consolidate())) ? Na : (n = n.matrix, Sl(n.a, n.b, n.c, n.d, n.e, n.f));
}
function Al(n, t, e, r) {
  function i(c) {
    return c.length ? c.pop() + " " : "";
  }
  function o(c, s, h, l, d, p) {
    if (c !== h || s !== l) {
      var m = d.push("translate(", null, t, null, e);
      p.push({ i: m - 4, x: tt(c, h) }, { i: m - 2, x: tt(s, l) });
    } else
      (h || l) && d.push("translate(" + h + t + l + e);
  }
  function a(c, s, h, l) {
    c !== s ? (c - s > 180 ? s += 360 : s - c > 180 && (c += 360), l.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: tt(c, s) })) : s && h.push(i(h) + "rotate(" + s + r);
  }
  function u(c, s, h, l) {
    c !== s ? l.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: tt(c, s) }) : s && h.push(i(h) + "skewX(" + s + r);
  }
  function f(c, s, h, l, d, p) {
    if (c !== h || s !== l) {
      var m = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: m - 4, x: tt(c, h) }, { i: m - 2, x: tt(s, l) });
    } else
      (h !== 1 || l !== 1) && d.push(i(d) + "scale(" + h + "," + l + ")");
  }
  return function(c, s) {
    var h = [], l = [];
    return c = n(c), s = n(s), o(c.translateX, c.translateY, s.translateX, s.translateY, h, l), a(c.rotate, s.rotate, h, l), u(c.skewX, s.skewX, h, l), f(c.scaleX, c.scaleY, s.scaleX, s.scaleY, h, l), c = s = null, function(d) {
      for (var p = -1, m = l.length, g; ++p < m; )
        h[(g = l[p]).i] = g.x(d);
      return h.join("");
    };
  };
}
var Og = Al(zg, "px, ", "px)", "deg)"), Fg = Al(Dg, ", ", ")", ")"), Bg = 1e-12;
function Gf(n) {
  return ((n = Math.exp(n)) + 1 / n) / 2;
}
function Lg(n) {
  return ((n = Math.exp(n)) - 1 / n) / 2;
}
function Yg(n) {
  return ((n = Math.exp(2 * n)) - 1) / (n + 1);
}
const qg = function n(t, e, r) {
  function i(o, a) {
    var u = o[0], f = o[1], c = o[2], s = a[0], h = a[1], l = a[2], d = s - u, p = h - f, m = d * d + p * p, g, y;
    if (m < Bg)
      y = Math.log(l / c) / t, g = function(E) {
        return [
          u + E * d,
          f + E * p,
          c * Math.exp(t * E * y)
        ];
      };
    else {
      var v = Math.sqrt(m), _ = (l * l - c * c + r * m) / (2 * c * e * v), b = (l * l - c * c - r * m) / (2 * l * e * v), w = Math.log(Math.sqrt(_ * _ + 1) - _), x = Math.log(Math.sqrt(b * b + 1) - b);
      y = (x - w) / t, g = function(E) {
        var $ = E * y, P = Gf(w), S = c / (e * v) * (P * Yg(t * $ + w) - Lg(w));
        return [
          u + S * d,
          f + S * p,
          c * P / Gf(t * $ + w)
        ];
      };
    }
    return g.duration = y * 1e3 * t / Math.SQRT2, g;
  }
  return i.rho = function(o) {
    var a = Math.max(1e-3, +o), u = a * a, f = u * u;
    return n(a, u, f);
  }, i;
}(Math.SQRT2, 2, 4);
function kl(n) {
  return function(t, e) {
    var r = n((t = Aa(t)).h, (e = Aa(e)).h), i = _n(t.s, e.s), o = _n(t.l, e.l), a = _n(t.opacity, e.opacity);
    return function(u) {
      return t.h = r(u), t.s = i(u), t.l = o(u), t.opacity = a(u), t + "";
    };
  };
}
const gw = kl(bo);
var pw = kl(_n);
function mw(n, t) {
  var e = _n((n = ka(n)).l, (t = ka(t)).l), r = _n(n.a, t.a), i = _n(n.b, t.b), o = _n(n.opacity, t.opacity);
  return function(a) {
    return n.l = e(a), n.a = r(a), n.b = i(a), n.opacity = o(a), n + "";
  };
}
function El(n) {
  return function(t, e) {
    var r = n((t = Ea(t)).h, (e = Ea(e)).h), i = _n(t.c, e.c), o = _n(t.l, e.l), a = _n(t.opacity, e.opacity);
    return function(u) {
      return t.h = r(u), t.c = i(u), t.l = o(u), t.opacity = a(u), t + "";
    };
  };
}
const yw = El(bo);
var bw = El(_n);
function $l(n) {
  return function t(e) {
    e = +e;
    function r(i, o) {
      var a = n((i = ht(i)).h, (o = ht(o)).h), u = _n(i.s, o.s), f = _n(i.l, o.l), c = _n(i.opacity, o.opacity);
      return function(s) {
        return i.h = a(s), i.s = u(s), i.l = f(Math.pow(s, e)), i.opacity = c(s), i + "";
      };
    }
    return r.gamma = t, r;
  }(1);
}
const _w = $l(bo);
var Cu = $l(_n);
function Ug(n, t) {
  t === void 0 && (t = n, n = ie);
  for (var e = 0, r = t.length - 1, i = t[0], o = new Array(r < 0 ? 0 : r); e < r; )
    o[e] = n(i, i = t[++e]);
  return function(a) {
    var u = Math.max(0, Math.min(r - 1, Math.floor(a *= r)));
    return o[u](a - u);
  };
}
function vw(n, t) {
  for (var e = new Array(t), r = 0; r < t; ++r)
    e[r] = n(r / (t - 1));
  return e;
}
var ze = 0, ar = 0, Je = 0, Nl = 1e3, Ri, ur, Pi = 0, Jt = 0, _o = 0, Er = typeof performance == "object" && performance.now ? performance : Date, Cl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(n) {
  setTimeout(n, 17);
};
function vo() {
  return Jt || (Cl(Hg), Jt = Er.now() + _o);
}
function Hg() {
  Jt = 0;
}
function $r() {
  this._call = this._time = this._next = null;
}
$r.prototype = Ru.prototype = {
  constructor: $r,
  restart: function(n, t, e) {
    if (typeof n != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? vo() : +e) + (t == null ? 0 : +t), !this._next && ur !== this && (ur ? ur._next = this : Ri = this, ur = this), this._call = n, this._time = e, Ca();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ca());
  }
};
function Ru(n, t, e) {
  var r = new $r();
  return r.restart(n, t, e), r;
}
function Xg() {
  vo(), ++ze;
  for (var n = Ri, t; n; )
    (t = Jt - n._time) >= 0 && n._call.call(void 0, t), n = n._next;
  --ze;
}
function Vf() {
  Jt = (Pi = Er.now()) + _o, ze = ar = 0;
  try {
    Xg();
  } finally {
    ze = 0, Vg(), Jt = 0;
  }
}
function Gg() {
  var n = Er.now(), t = n - Pi;
  t > Nl && (_o -= t, Pi = n);
}
function Vg() {
  for (var n, t = Ri, e, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), n = t, t = t._next) : (e = t._next, t._next = null, t = n ? n._next = e : Ri = e);
  ur = n, Ca(r);
}
function Ca(n) {
  if (!ze) {
    ar && (ar = clearTimeout(ar));
    var t = n - Jt;
    t > 24 ? (n < 1 / 0 && (ar = setTimeout(Vf, n - Er.now() - _o)), Je && (Je = clearInterval(Je))) : (Je || (Pi = Er.now(), Je = setInterval(Gg, Nl)), ze = 1, Cl(Vf));
  }
}
function Wf(n, t, e) {
  var r = new $r();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), n(i + t);
  }, t, e), r;
}
function ww(n, t, e) {
  var r = new $r(), i = t;
  return t == null ? (r.restart(n, t, e), r) : (r._restart = r.restart, r.restart = function(o, a, u) {
    a = +a, u = u == null ? vo() : +u, r._restart(function f(c) {
      c += i, r._restart(f, i += a, u), o(c);
    }, a, u);
  }, r.restart(n, t, e), r);
}
var Wg = Ge("start", "end", "cancel", "interrupt"), Zg = [], Rl = 0, Ra = 1, Pa = 2, mi = 3, Zf = 4, Ia = 5, yi = 6;
function wo(n, t, e, r, i, o) {
  var a = n.__transition;
  if (!a)
    n.__transition = {};
  else if (e in a)
    return;
  Qg(n, e, {
    name: t,
    index: r,
    group: i,
    on: Wg,
    tween: Zg,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Rl
  });
}
function Pu(n, t) {
  var e = at(n, t);
  if (e.state > Rl)
    throw new Error("too late; already scheduled");
  return e;
}
function pt(n, t) {
  var e = at(n, t);
  if (e.state > mi)
    throw new Error("too late; already running");
  return e;
}
function at(n, t) {
  var e = n.__transition;
  if (!e || !(e = e[t]))
    throw new Error("transition not found");
  return e;
}
function Qg(n, t, e) {
  var r = n.__transition, i;
  r[t] = e, e.timer = Ru(o, 0, e.time);
  function o(c) {
    e.state = Ra, e.timer.restart(a, e.delay, e.time), e.delay <= c && a(c - e.delay);
  }
  function a(c) {
    var s, h, l, d;
    if (e.state !== Ra)
      return f();
    for (s in r)
      if (d = r[s], d.name === e.name) {
        if (d.state === mi)
          return Wf(a);
        d.state === Zf ? (d.state = yi, d.timer.stop(), d.on.call("interrupt", n, n.__data__, d.index, d.group), delete r[s]) : +s < t && (d.state = yi, d.timer.stop(), d.on.call("cancel", n, n.__data__, d.index, d.group), delete r[s]);
      }
    if (Wf(function() {
      e.state === mi && (e.state = Zf, e.timer.restart(u, e.delay, e.time), u(c));
    }), e.state = Pa, e.on.call("start", n, n.__data__, e.index, e.group), e.state === Pa) {
      for (e.state = mi, i = new Array(l = e.tween.length), s = 0, h = -1; s < l; ++s)
        (d = e.tween[s].value.call(n, n.__data__, e.index, e.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function u(c) {
    for (var s = c < e.duration ? e.ease.call(null, c / e.duration) : (e.timer.restart(f), e.state = Ia, 1), h = -1, l = i.length; ++h < l; )
      i[h].call(n, s);
    e.state === Ia && (e.on.call("end", n, n.__data__, e.index, e.group), f());
  }
  function f() {
    e.state = yi, e.timer.stop(), delete r[t];
    for (var c in r)
      return;
    delete n.__transition;
  }
}
function ke(n, t) {
  var e = n.__transition, r, i, o = !0, a;
  if (!!e) {
    t = t == null ? null : t + "";
    for (a in e) {
      if ((r = e[a]).name !== t) {
        o = !1;
        continue;
      }
      i = r.state > Pa && r.state < Ia, r.state = yi, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", n, n.__data__, r.index, r.group), delete e[a];
    }
    o && delete n.__transition;
  }
}
function Kg(n) {
  return this.each(function() {
    ke(this, n);
  });
}
function Jg(n, t) {
  var e, r;
  return function() {
    var i = pt(this, n), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, u = r.length; a < u; ++a)
        if (r[a].name === t) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function jg(n, t, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var o = pt(this, n), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var u = { name: t, value: e }, f = 0, c = i.length; f < c; ++f)
        if (i[f].name === t) {
          i[f] = u;
          break;
        }
      f === c && i.push(u);
    }
    o.tween = i;
  };
}
function np(n, t) {
  var e = this._id;
  if (n += "", arguments.length < 2) {
    for (var r = at(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === n)
        return a.value;
    return null;
  }
  return this.each((t == null ? Jg : jg)(e, n, t));
}
function Iu(n, t, e) {
  var r = n._id;
  return n.each(function() {
    var i = pt(this, r);
    (i.value || (i.value = {}))[t] = e.apply(this, arguments);
  }), function(i) {
    return at(i, r).value[t];
  };
}
function Pl(n, t) {
  var e;
  return (typeof t == "number" ? tt : t instanceof Kt ? Ci : (e = Kt(t)) ? (t = e, Ci) : Tl)(n, t);
}
function tp(n) {
  return function() {
    this.removeAttribute(n);
  };
}
function ep(n) {
  return function() {
    this.removeAttributeNS(n.space, n.local);
  };
}
function rp(n, t, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(n);
    return a === i ? null : a === r ? o : o = t(r = a, e);
  };
}
function ip(n, t, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(n.space, n.local);
    return a === i ? null : a === r ? o : o = t(r = a, e);
  };
}
function op(n, t, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), f;
    return u == null ? void this.removeAttribute(n) : (a = this.getAttribute(n), f = u + "", a === f ? null : a === r && f === i ? o : (i = f, o = t(r = a, u)));
  };
}
function ap(n, t, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), f;
    return u == null ? void this.removeAttributeNS(n.space, n.local) : (a = this.getAttributeNS(n.space, n.local), f = u + "", a === f ? null : a === r && f === i ? o : (i = f, o = t(r = a, u)));
  };
}
function up(n, t) {
  var e = po(n), r = e === "transform" ? Fg : Pl;
  return this.attrTween(n, typeof t == "function" ? (e.local ? ap : op)(e, r, Iu(this, "attr." + n, t)) : t == null ? (e.local ? ep : tp)(e) : (e.local ? ip : rp)(e, r, t));
}
function fp(n, t) {
  return function(e) {
    this.setAttribute(n, t.call(this, e));
  };
}
function cp(n, t) {
  return function(e) {
    this.setAttributeNS(n.space, n.local, t.call(this, e));
  };
}
function sp(n, t) {
  var e, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (e = (r = o) && cp(n, o)), e;
  }
  return i._value = t, i;
}
function lp(n, t) {
  var e, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (e = (r = o) && fp(n, o)), e;
  }
  return i._value = t, i;
}
function hp(n, t) {
  var e = "attr." + n;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  var r = po(n);
  return this.tween(e, (r.local ? sp : lp)(r, t));
}
function dp(n, t) {
  return function() {
    Pu(this, n).delay = +t.apply(this, arguments);
  };
}
function gp(n, t) {
  return t = +t, function() {
    Pu(this, n).delay = t;
  };
}
function pp(n) {
  var t = this._id;
  return arguments.length ? this.each((typeof n == "function" ? dp : gp)(t, n)) : at(this.node(), t).delay;
}
function mp(n, t) {
  return function() {
    pt(this, n).duration = +t.apply(this, arguments);
  };
}
function yp(n, t) {
  return t = +t, function() {
    pt(this, n).duration = t;
  };
}
function bp(n) {
  var t = this._id;
  return arguments.length ? this.each((typeof n == "function" ? mp : yp)(t, n)) : at(this.node(), t).duration;
}
function _p(n, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    pt(this, n).ease = t;
  };
}
function vp(n) {
  var t = this._id;
  return arguments.length ? this.each(_p(t, n)) : at(this.node(), t).ease;
}
function wp(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    pt(this, n).ease = e;
  };
}
function xp(n) {
  if (typeof n != "function")
    throw new Error();
  return this.each(wp(this._id, n));
}
function Mp(n) {
  typeof n != "function" && (n = Qs(n));
  for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = t[i], a = o.length, u = r[i] = [], f, c = 0; c < a; ++c)
      (f = o[c]) && n.call(f, f.__data__, c, o) && u.push(f);
  return new dt(r, this._parents, this._name, this._id);
}
function Tp(n) {
  if (n._id !== this._id)
    throw new Error();
  for (var t = this._groups, e = n._groups, r = t.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
    for (var f = t[u], c = e[u], s = f.length, h = a[u] = new Array(s), l, d = 0; d < s; ++d)
      (l = f[d] || c[d]) && (h[d] = l);
  for (; u < r; ++u)
    a[u] = t[u];
  return new dt(a, this._parents, this._name, this._id);
}
function Sp(n) {
  return (n + "").trim().split(/^|\s+/).every(function(t) {
    var e = t.indexOf(".");
    return e >= 0 && (t = t.slice(0, e)), !t || t === "start";
  });
}
function Ap(n, t, e) {
  var r, i, o = Sp(t) ? Pu : pt;
  return function() {
    var a = o(this, n), u = a.on;
    u !== r && (i = (r = u).copy()).on(t, e), a.on = i;
  };
}
function kp(n, t) {
  var e = this._id;
  return arguments.length < 2 ? at(this.node(), e).on.on(n) : this.each(Ap(e, n, t));
}
function Ep(n) {
  return function() {
    var t = this.parentNode;
    for (var e in this.__transition)
      if (+e !== n)
        return;
    t && t.removeChild(this);
  };
}
function $p() {
  return this.on("end.remove", Ep(this._id));
}
function Np(n) {
  var t = this._name, e = this._id;
  typeof n != "function" && (n = xu(n));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var u = r[a], f = u.length, c = o[a] = new Array(f), s, h, l = 0; l < f; ++l)
      (s = u[l]) && (h = n.call(s, s.__data__, l, u)) && ("__data__" in s && (h.__data__ = s.__data__), c[l] = h, wo(c[l], t, e, l, c, at(s, e)));
  return new dt(o, this._parents, t, e);
}
function Cp(n) {
  var t = this._name, e = this._id;
  typeof n != "function" && (n = Zs(n));
  for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
    for (var f = r[u], c = f.length, s, h = 0; h < c; ++h)
      if (s = f[h]) {
        for (var l = n.call(s, s.__data__, h, f), d, p = at(s, e), m = 0, g = l.length; m < g; ++m)
          (d = l[m]) && wo(d, t, e, m, l, p);
        o.push(l), a.push(s);
      }
  return new dt(o, a, t, e);
}
var Rp = Ve.prototype.constructor;
function Pp() {
  return new Rp(this._groups, this._parents);
}
function Ip(n, t) {
  var e, r, i;
  return function() {
    var o = Pe(this, n), a = (this.style.removeProperty(n), Pe(this, n));
    return o === a ? null : o === e && a === r ? i : i = t(e = o, r = a);
  };
}
function Il(n) {
  return function() {
    this.style.removeProperty(n);
  };
}
function zp(n, t, e) {
  var r, i = e + "", o;
  return function() {
    var a = Pe(this, n);
    return a === i ? null : a === r ? o : o = t(r = a, e);
  };
}
function Dp(n, t, e) {
  var r, i, o;
  return function() {
    var a = Pe(this, n), u = e(this), f = u + "";
    return u == null && (f = u = (this.style.removeProperty(n), Pe(this, n))), a === f ? null : a === r && f === i ? o : (i = f, o = t(r = a, u));
  };
}
function Op(n, t) {
  var e, r, i, o = "style." + t, a = "end." + o, u;
  return function() {
    var f = pt(this, n), c = f.on, s = f.value[o] == null ? u || (u = Il(t)) : void 0;
    (c !== e || i !== s) && (r = (e = c).copy()).on(a, i = s), f.on = r;
  };
}
function Fp(n, t, e) {
  var r = (n += "") == "transform" ? Og : Pl;
  return t == null ? this.styleTween(n, Ip(n, r)).on("end.style." + n, Il(n)) : typeof t == "function" ? this.styleTween(n, Dp(n, r, Iu(this, "style." + n, t))).each(Op(this._id, n)) : this.styleTween(n, zp(n, r, t), e).on("end.style." + n, null);
}
function Bp(n, t, e) {
  return function(r) {
    this.style.setProperty(n, t.call(this, r), e);
  };
}
function Lp(n, t, e) {
  var r, i;
  function o() {
    var a = t.apply(this, arguments);
    return a !== i && (r = (i = a) && Bp(n, a, e)), r;
  }
  return o._value = t, o;
}
function Yp(n, t, e) {
  var r = "style." + (n += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (t == null)
    return this.tween(r, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(r, Lp(n, t, e == null ? "" : e));
}
function qp(n) {
  return function() {
    this.textContent = n;
  };
}
function Up(n) {
  return function() {
    var t = n(this);
    this.textContent = t == null ? "" : t;
  };
}
function Hp(n) {
  return this.tween("text", typeof n == "function" ? Up(Iu(this, "text", n)) : qp(n == null ? "" : n + ""));
}
function Xp(n) {
  return function(t) {
    this.textContent = n.call(this, t);
  };
}
function Gp(n) {
  var t, e;
  function r() {
    var i = n.apply(this, arguments);
    return i !== e && (t = (e = i) && Xp(i)), t;
  }
  return r._value = n, r;
}
function Vp(n) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (n == null)
    return this.tween(t, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(t, Gp(n));
}
function Wp() {
  for (var n = this._name, t = this._id, e = zl(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, f, c = 0; c < u; ++c)
      if (f = a[c]) {
        var s = at(f, t);
        wo(f, n, e, c, a, {
          time: s.time + s.delay + s.duration,
          delay: 0,
          duration: s.duration,
          ease: s.ease
        });
      }
  return new dt(r, this._parents, n, e);
}
function Zp() {
  var n, t, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var u = { value: a }, f = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var c = pt(this, r), s = c.on;
      s !== n && (t = (n = s).copy(), t._.cancel.push(u), t._.interrupt.push(u), t._.end.push(f)), c.on = t;
    }), i === 0 && o();
  });
}
var Qp = 0;
function dt(n, t, e, r) {
  this._groups = n, this._parents = t, this._name = e, this._id = r;
}
function Kp(n) {
  return Ve().transition(n);
}
function zl() {
  return ++Qp;
}
var mt = Ve.prototype;
dt.prototype = Kp.prototype = {
  constructor: dt,
  select: Np,
  selectAll: Cp,
  selectChild: mt.selectChild,
  selectChildren: mt.selectChildren,
  filter: Mp,
  merge: Tp,
  selection: Pp,
  transition: Wp,
  call: mt.call,
  nodes: mt.nodes,
  node: mt.node,
  size: mt.size,
  empty: mt.empty,
  each: mt.each,
  on: kp,
  attr: up,
  attrTween: hp,
  style: Fp,
  styleTween: Yp,
  text: Hp,
  textTween: Vp,
  remove: $p,
  tween: np,
  delay: pp,
  duration: bp,
  ease: vp,
  easeVarying: xp,
  end: Zp,
  [Symbol.iterator]: mt[Symbol.iterator]
};
const xw = (n) => +n;
function Mw(n) {
  return n * n;
}
function Tw(n) {
  return n * (2 - n);
}
function Sw(n) {
  return ((n *= 2) <= 1 ? n * n : --n * (2 - n) + 1) / 2;
}
function Aw(n) {
  return n * n * n;
}
function kw(n) {
  return --n * n * n + 1;
}
function Jp(n) {
  return ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2;
}
var zu = 3, Ew = function n(t) {
  t = +t;
  function e(r) {
    return Math.pow(r, t);
  }
  return e.exponent = n, e;
}(zu), $w = function n(t) {
  t = +t;
  function e(r) {
    return 1 - Math.pow(1 - r, t);
  }
  return e.exponent = n, e;
}(zu), Nw = function n(t) {
  t = +t;
  function e(r) {
    return ((r *= 2) <= 1 ? Math.pow(r, t) : 2 - Math.pow(2 - r, t)) / 2;
  }
  return e.exponent = n, e;
}(zu), Dl = Math.PI, Ol = Dl / 2;
function Cw(n) {
  return +n == 1 ? 1 : 1 - Math.cos(n * Ol);
}
function Rw(n) {
  return Math.sin(n * Ol);
}
function Pw(n) {
  return (1 - Math.cos(Dl * n)) / 2;
}
function zt(n) {
  return (Math.pow(2, -10 * n) - 9765625e-10) * 1.0009775171065494;
}
function Iw(n) {
  return zt(1 - +n);
}
function zw(n) {
  return 1 - zt(n);
}
function Dw(n) {
  return ((n *= 2) <= 1 ? zt(1 - n) : 2 - zt(n - 1)) / 2;
}
function Ow(n) {
  return 1 - Math.sqrt(1 - n * n);
}
function Fw(n) {
  return Math.sqrt(1 - --n * n);
}
function Bw(n) {
  return ((n *= 2) <= 1 ? 1 - Math.sqrt(1 - n * n) : Math.sqrt(1 - (n -= 2) * n) + 1) / 2;
}
var za = 4 / 11, jp = 6 / 11, n2 = 8 / 11, t2 = 3 / 4, e2 = 9 / 11, r2 = 10 / 11, i2 = 15 / 16, o2 = 21 / 22, a2 = 63 / 64, Wr = 1 / za / za;
function Lw(n) {
  return 1 - Da(1 - n);
}
function Da(n) {
  return (n = +n) < za ? Wr * n * n : n < n2 ? Wr * (n -= jp) * n + t2 : n < r2 ? Wr * (n -= e2) * n + i2 : Wr * (n -= o2) * n + a2;
}
function Yw(n) {
  return ((n *= 2) <= 1 ? 1 - Da(1 - n) : Da(n - 1) + 1) / 2;
}
var Du = 1.70158, qw = function n(t) {
  t = +t;
  function e(r) {
    return (r = +r) * r * (t * (r - 1) + r);
  }
  return e.overshoot = n, e;
}(Du), Uw = function n(t) {
  t = +t;
  function e(r) {
    return --r * r * ((r + 1) * t + r) + 1;
  }
  return e.overshoot = n, e;
}(Du), Hw = function n(t) {
  t = +t;
  function e(r) {
    return ((r *= 2) < 1 ? r * r * ((t + 1) * r - t) : (r -= 2) * r * ((t + 1) * r + t) + 2) / 2;
  }
  return e.overshoot = n, e;
}(Du), De = 2 * Math.PI, Ou = 1, Fu = 0.3, Xw = function n(t, e) {
  var r = Math.asin(1 / (t = Math.max(1, t))) * (e /= De);
  function i(o) {
    return t * zt(- --o) * Math.sin((r - o) / e);
  }
  return i.amplitude = function(o) {
    return n(o, e * De);
  }, i.period = function(o) {
    return n(t, o);
  }, i;
}(Ou, Fu), Gw = function n(t, e) {
  var r = Math.asin(1 / (t = Math.max(1, t))) * (e /= De);
  function i(o) {
    return 1 - t * zt(o = +o) * Math.sin((o + r) / e);
  }
  return i.amplitude = function(o) {
    return n(o, e * De);
  }, i.period = function(o) {
    return n(t, o);
  }, i;
}(Ou, Fu), Vw = function n(t, e) {
  var r = Math.asin(1 / (t = Math.max(1, t))) * (e /= De);
  function i(o) {
    return ((o = o * 2 - 1) < 0 ? t * zt(-o) * Math.sin((r - o) / e) : 2 - t * zt(o) * Math.sin((r + o) / e)) / 2;
  }
  return i.amplitude = function(o) {
    return n(o, e * De);
  }, i.period = function(o) {
    return n(t, o);
  }, i;
}(Ou, Fu), u2 = {
  time: null,
  delay: 0,
  duration: 250,
  ease: Jp
};
function f2(n, t) {
  for (var e; !(e = n.__transition) || !(e = e[t]); )
    if (!(n = n.parentNode))
      throw new Error(`transition ${t} not found`);
  return e;
}
function c2(n) {
  var t, e;
  n instanceof dt ? (t = n._id, n = n._name) : (t = zl(), (e = u2).time = vo(), n = n == null ? null : n + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, f, c = 0; c < u; ++c)
      (f = a[c]) && wo(f, n, t, c, a, e || f2(f, t));
  return new dt(r, this._parents, n, t);
}
Ve.prototype.interrupt = Kg;
Ve.prototype.transition = c2;
var s2 = [null];
function Ww(n, t) {
  var e = n.__transition, r, i;
  if (e) {
    t = t == null ? null : t + "";
    for (i in e)
      if ((r = e[i]).state > Ra && r.name === t)
        return new dt([[n]], s2, t, +i);
  }
  return null;
}
const Uo = (n) => () => n;
function l2(n, {
  sourceEvent: t,
  target: e,
  selection: r,
  mode: i,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: n, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: e, enumerable: !0, configurable: !0 },
    selection: { value: r, enumerable: !0, configurable: !0 },
    mode: { value: i, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function h2(n) {
  n.stopImmediatePropagation();
}
function Ho(n) {
  n.preventDefault(), n.stopImmediatePropagation();
}
var Qf = { name: "drag" }, Xo = { name: "space" }, he = { name: "handle" }, de = { name: "center" };
const { abs: Kf, max: An, min: kn } = Math;
function Jf(n) {
  return [+n[0], +n[1]];
}
function Oa(n) {
  return [Jf(n[0]), Jf(n[1])];
}
var bi = {
  name: "x",
  handles: ["w", "e"].map(Nr),
  input: function(n, t) {
    return n == null ? null : [[+n[0], t[0][1]], [+n[1], t[1][1]]];
  },
  output: function(n) {
    return n && [n[0][0], n[1][0]];
  }
}, _i = {
  name: "y",
  handles: ["n", "s"].map(Nr),
  input: function(n, t) {
    return n == null ? null : [[t[0][0], +n[0]], [t[1][0], +n[1]]];
  },
  output: function(n) {
    return n && [n[0][1], n[1][1]];
  }
}, d2 = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(Nr),
  input: function(n) {
    return n == null ? null : Oa(n);
  },
  output: function(n) {
    return n;
  }
}, yt = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
}, jf = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
}, nc = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
}, g2 = {
  overlay: 1,
  selection: 1,
  n: null,
  e: 1,
  s: null,
  w: -1,
  nw: -1,
  ne: 1,
  se: 1,
  sw: -1
}, p2 = {
  overlay: 1,
  selection: 1,
  n: -1,
  e: null,
  s: 1,
  w: null,
  nw: -1,
  ne: -1,
  se: 1,
  sw: 1
};
function Nr(n) {
  return { type: n };
}
function m2(n) {
  return !n.ctrlKey && !n.button;
}
function y2() {
  var n = this.ownerSVGElement || this;
  return n.hasAttribute("viewBox") ? (n = n.viewBox.baseVal, [[n.x, n.y], [n.x + n.width, n.y + n.height]]) : [[0, 0], [n.width.baseVal.value, n.height.baseVal.value]];
}
function b2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Go(n) {
  for (; !n.__brush; )
    if (!(n = n.parentNode))
      return;
  return n.__brush;
}
function _2(n) {
  return n[0][0] === n[1][0] || n[0][1] === n[1][1];
}
function Zw(n) {
  var t = n.__brush;
  return t ? t.dim.output(t.selection) : null;
}
function Qw() {
  return Bu(bi);
}
function Kw() {
  return Bu(_i);
}
function Jw() {
  return Bu(d2);
}
function Bu(n) {
  var t = y2, e = m2, r = b2, i = !0, o = Ge("start", "brush", "end"), a = 6, u;
  function f(g) {
    var y = g.property("__brush", m).selectAll(".overlay").data([Nr("overlay")]);
    y.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", yt.overlay).merge(y).each(function() {
      var _ = Go(this).extent;
      Tn(this).attr("x", _[0][0]).attr("y", _[0][1]).attr("width", _[1][0] - _[0][0]).attr("height", _[1][1] - _[0][1]);
    }), g.selectAll(".selection").data([Nr("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", yt.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
    var v = g.selectAll(".handle").data(n.handles, function(_) {
      return _.type;
    });
    v.exit().remove(), v.enter().append("rect").attr("class", function(_) {
      return "handle handle--" + _.type;
    }).attr("cursor", function(_) {
      return yt[_.type];
    }), g.each(c).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", l).filter(r).on("touchstart.brush", l).on("touchmove.brush", d).on("touchend.brush touchcancel.brush", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  f.move = function(g, y, v) {
    g.tween ? g.on("start.brush", function(_) {
      s(this, arguments).beforestart().start(_);
    }).on("interrupt.brush end.brush", function(_) {
      s(this, arguments).end(_);
    }).tween("brush", function() {
      var _ = this, b = _.__brush, w = s(_, arguments), x = b.selection, E = n.input(typeof y == "function" ? y.apply(this, arguments) : y, b.extent), $ = ie(x, E);
      function P(S) {
        b.selection = S === 1 && E === null ? null : $(S), c.call(_), w.brush();
      }
      return x !== null && E !== null ? P : P(1);
    }) : g.each(function() {
      var _ = this, b = arguments, w = _.__brush, x = n.input(typeof y == "function" ? y.apply(_, b) : y, w.extent), E = s(_, b).beforestart();
      ke(_), w.selection = x === null ? null : x, c.call(_), E.start(v).brush(v).end(v);
    });
  }, f.clear = function(g, y) {
    f.move(g, null, y);
  };
  function c() {
    var g = Tn(this), y = Go(this).selection;
    y ? (g.selectAll(".selection").style("display", null).attr("x", y[0][0]).attr("y", y[0][1]).attr("width", y[1][0] - y[0][0]).attr("height", y[1][1] - y[0][1]), g.selectAll(".handle").style("display", null).attr("x", function(v) {
      return v.type[v.type.length - 1] === "e" ? y[1][0] - a / 2 : y[0][0] - a / 2;
    }).attr("y", function(v) {
      return v.type[0] === "s" ? y[1][1] - a / 2 : y[0][1] - a / 2;
    }).attr("width", function(v) {
      return v.type === "n" || v.type === "s" ? y[1][0] - y[0][0] + a : a;
    }).attr("height", function(v) {
      return v.type === "e" || v.type === "w" ? y[1][1] - y[0][1] + a : a;
    })) : g.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
  }
  function s(g, y, v) {
    var _ = g.__brush.emitter;
    return _ && (!v || !_.clean) ? _ : new h(g, y, v);
  }
  function h(g, y, v) {
    this.that = g, this.args = y, this.state = g.__brush, this.active = 0, this.clean = v;
  }
  h.prototype = {
    beforestart: function() {
      return ++this.active === 1 && (this.state.emitter = this, this.starting = !0), this;
    },
    start: function(g, y) {
      return this.starting ? (this.starting = !1, this.emit("start", g, y)) : this.emit("brush", g), this;
    },
    brush: function(g, y) {
      return this.emit("brush", g, y), this;
    },
    end: function(g, y) {
      return --this.active === 0 && (delete this.state.emitter, this.emit("end", g, y)), this;
    },
    emit: function(g, y, v) {
      var _ = Tn(this.that).datum();
      o.call(
        g,
        this.that,
        new l2(g, {
          sourceEvent: y,
          target: f,
          selection: n.output(this.state.selection),
          mode: v,
          dispatch: o
        }),
        _
      );
    }
  };
  function l(g) {
    if (u && !g.touches || !e.apply(this, arguments))
      return;
    var y = this, v = g.target.__data__.type, _ = (i && g.metaKey ? v = "overlay" : v) === "selection" ? Qf : i && g.altKey ? de : he, b = n === _i ? null : g2[v], w = n === bi ? null : p2[v], x = Go(y), E = x.extent, $ = x.selection, P = E[0][0], S, T, R = E[0][1], C, M, A = E[1][0], k, N, I = E[1][1], z, O, B = 0, q = 0, tn, Z = b && w && i && g.shiftKey, en, mn, j = Array.from(g.touches || [g], (X) => {
      const ln = X.identifier;
      return X = Wn(X, y), X.point0 = X.slice(), X.identifier = ln, X;
    });
    ke(y);
    var pn = s(y, arguments, !0).beforestart();
    if (v === "overlay") {
      $ && (tn = !0);
      const X = [j[0], j[1] || j[0]];
      x.selection = $ = [[
        S = n === _i ? P : kn(X[0][0], X[1][0]),
        C = n === bi ? R : kn(X[0][1], X[1][1])
      ], [
        k = n === _i ? A : An(X[0][0], X[1][0]),
        z = n === bi ? I : An(X[0][1], X[1][1])
      ]], j.length > 1 && sn(g);
    } else
      S = $[0][0], C = $[0][1], k = $[1][0], z = $[1][1];
    T = S, M = C, N = k, O = z;
    var F = Tn(y).attr("pointer-events", "none"), G = F.selectAll(".overlay").attr("cursor", yt[v]);
    if (g.touches)
      pn.moved = D, pn.ended = rn;
    else {
      var K = Tn(g.view).on("mousemove.brush", D, !0).on("mouseup.brush", rn, !0);
      i && K.on("keydown.brush", Cn, !0).on("keyup.brush", Rn, !0), Su(g.view);
    }
    c.call(y), pn.start(g, _.name);
    function D(X) {
      for (const ln of X.changedTouches || [X])
        for (const Qe of j)
          Qe.identifier === ln.identifier && (Qe.cur = Wn(ln, y));
      if (Z && !en && !mn && j.length === 1) {
        const ln = j[0];
        Kf(ln.cur[0] - ln[0]) > Kf(ln.cur[1] - ln[1]) ? mn = !0 : en = !0;
      }
      for (const ln of j)
        ln.cur && (ln[0] = ln.cur[0], ln[1] = ln.cur[1]);
      tn = !0, Ho(X), sn(X);
    }
    function sn(X) {
      const ln = j[0], Qe = ln.point0;
      var Et;
      switch (B = ln[0] - Qe[0], q = ln[1] - Qe[1], _) {
        case Xo:
        case Qf: {
          b && (B = An(P - S, kn(A - k, B)), T = S + B, N = k + B), w && (q = An(R - C, kn(I - z, q)), M = C + q, O = z + q);
          break;
        }
        case he: {
          j[1] ? (b && (T = An(P, kn(A, j[0][0])), N = An(P, kn(A, j[1][0])), b = 1), w && (M = An(R, kn(I, j[0][1])), O = An(R, kn(I, j[1][1])), w = 1)) : (b < 0 ? (B = An(P - S, kn(A - S, B)), T = S + B, N = k) : b > 0 && (B = An(P - k, kn(A - k, B)), T = S, N = k + B), w < 0 ? (q = An(R - C, kn(I - C, q)), M = C + q, O = z) : w > 0 && (q = An(R - z, kn(I - z, q)), M = C, O = z + q));
          break;
        }
        case de: {
          b && (T = An(P, kn(A, S - B * b)), N = An(P, kn(A, k + B * b))), w && (M = An(R, kn(I, C - q * w)), O = An(R, kn(I, z + q * w)));
          break;
        }
      }
      N < T && (b *= -1, Et = S, S = k, k = Et, Et = T, T = N, N = Et, v in jf && G.attr("cursor", yt[v = jf[v]])), O < M && (w *= -1, Et = C, C = z, z = Et, Et = M, M = O, O = Et, v in nc && G.attr("cursor", yt[v = nc[v]])), x.selection && ($ = x.selection), en && (T = $[0][0], N = $[1][0]), mn && (M = $[0][1], O = $[1][1]), ($[0][0] !== T || $[0][1] !== M || $[1][0] !== N || $[1][1] !== O) && (x.selection = [[T, M], [N, O]], c.call(y), pn.brush(X, _.name));
    }
    function rn(X) {
      if (h2(X), X.touches) {
        if (X.touches.length)
          return;
        u && clearTimeout(u), u = setTimeout(function() {
          u = null;
        }, 500);
      } else
        Au(X.view, tn), K.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      F.attr("pointer-events", "all"), G.attr("cursor", yt.overlay), x.selection && ($ = x.selection), _2($) && (x.selection = null, c.call(y)), pn.end(X, _.name);
    }
    function Cn(X) {
      switch (X.keyCode) {
        case 16: {
          Z = b && w;
          break;
        }
        case 18: {
          _ === he && (b && (k = N - B * b, S = T + B * b), w && (z = O - q * w, C = M + q * w), _ = de, sn(X));
          break;
        }
        case 32: {
          (_ === he || _ === de) && (b < 0 ? k = N - B : b > 0 && (S = T - B), w < 0 ? z = O - q : w > 0 && (C = M - q), _ = Xo, G.attr("cursor", yt.selection), sn(X));
          break;
        }
        default:
          return;
      }
      Ho(X);
    }
    function Rn(X) {
      switch (X.keyCode) {
        case 16: {
          Z && (en = mn = Z = !1, sn(X));
          break;
        }
        case 18: {
          _ === de && (b < 0 ? k = N : b > 0 && (S = T), w < 0 ? z = O : w > 0 && (C = M), _ = he, sn(X));
          break;
        }
        case 32: {
          _ === Xo && (X.altKey ? (b && (k = N - B * b, S = T + B * b), w && (z = O - q * w, C = M + q * w), _ = de) : (b < 0 ? k = N : b > 0 && (S = T), w < 0 ? z = O : w > 0 && (C = M), _ = he), G.attr("cursor", yt[v]), sn(X));
          break;
        }
        default:
          return;
      }
      Ho(X);
    }
  }
  function d(g) {
    s(this, arguments).moved(g);
  }
  function p(g) {
    s(this, arguments).ended(g);
  }
  function m() {
    var g = this.__brush || { selection: null };
    return g.extent = Oa(t.apply(this, arguments)), g.dim = n, g;
  }
  return f.extent = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : Uo(Oa(g)), f) : t;
  }, f.filter = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Uo(!!g), f) : e;
  }, f.touchable = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Uo(!!g), f) : r;
  }, f.handleSize = function(g) {
    return arguments.length ? (a = +g, f) : a;
  }, f.keyModifiers = function(g) {
    return arguments.length ? (i = !!g, f) : i;
  }, f.on = function() {
    var g = o.on.apply(o, arguments);
    return g === o ? f : g;
  }, f;
}
var tc = Math.abs, ge = Math.cos, pe = Math.sin, Fl = Math.PI, Zr = Fl / 2, ec = Fl * 2, rc = Math.max, Vo = 1e-12;
function Wo(n, t) {
  return Array.from({ length: t - n }, (e, r) => n + r);
}
function v2(n) {
  return function(t, e) {
    return n(
      t.source.value + t.target.value,
      e.source.value + e.target.value
    );
  };
}
function jw() {
  return Lu(!1, !1);
}
function n8() {
  return Lu(!1, !0);
}
function t8() {
  return Lu(!0, !1);
}
function Lu(n, t) {
  var e = 0, r = null, i = null, o = null;
  function a(u) {
    var f = u.length, c = new Array(f), s = Wo(0, f), h = new Array(f * f), l = new Array(f), d = 0, p;
    u = Float64Array.from({ length: f * f }, t ? (m, g) => u[g % f][g / f | 0] : (m, g) => u[g / f | 0][g % f]);
    for (let m = 0; m < f; ++m) {
      let g = 0;
      for (let y = 0; y < f; ++y)
        g += u[m * f + y] + n * u[y * f + m];
      d += c[m] = g;
    }
    d = rc(0, ec - e * f) / d, p = d ? e : ec / f;
    {
      let m = 0;
      r && s.sort((g, y) => r(c[g], c[y]));
      for (const g of s) {
        const y = m;
        if (n) {
          const v = Wo(~f + 1, f).filter((_) => _ < 0 ? u[~_ * f + g] : u[g * f + _]);
          i && v.sort((_, b) => i(_ < 0 ? -u[~_ * f + g] : u[g * f + _], b < 0 ? -u[~b * f + g] : u[g * f + b]));
          for (const _ of v)
            if (_ < 0) {
              const b = h[~_ * f + g] || (h[~_ * f + g] = { source: null, target: null });
              b.target = { index: g, startAngle: m, endAngle: m += u[~_ * f + g] * d, value: u[~_ * f + g] };
            } else {
              const b = h[g * f + _] || (h[g * f + _] = { source: null, target: null });
              b.source = { index: g, startAngle: m, endAngle: m += u[g * f + _] * d, value: u[g * f + _] };
            }
          l[g] = { index: g, startAngle: y, endAngle: m, value: c[g] };
        } else {
          const v = Wo(0, f).filter((_) => u[g * f + _] || u[_ * f + g]);
          i && v.sort((_, b) => i(u[g * f + _], u[g * f + b]));
          for (const _ of v) {
            let b;
            if (g < _ ? (b = h[g * f + _] || (h[g * f + _] = { source: null, target: null }), b.source = { index: g, startAngle: m, endAngle: m += u[g * f + _] * d, value: u[g * f + _] }) : (b = h[_ * f + g] || (h[_ * f + g] = { source: null, target: null }), b.target = { index: g, startAngle: m, endAngle: m += u[g * f + _] * d, value: u[g * f + _] }, g === _ && (b.source = b.target)), b.source && b.target && b.source.value < b.target.value) {
              const w = b.source;
              b.source = b.target, b.target = w;
            }
          }
          l[g] = { index: g, startAngle: y, endAngle: m, value: c[g] };
        }
        m += p;
      }
    }
    return h = Object.values(h), h.groups = l, o ? h.sort(o) : h;
  }
  return a.padAngle = function(u) {
    return arguments.length ? (e = rc(0, u), a) : e;
  }, a.sortGroups = function(u) {
    return arguments.length ? (r = u, a) : r;
  }, a.sortSubgroups = function(u) {
    return arguments.length ? (i = u, a) : i;
  }, a.sortChords = function(u) {
    return arguments.length ? (u == null ? o = null : (o = v2(u))._ = u, a) : o && o._;
  }, a;
}
const Fa = Math.PI, Ba = 2 * Fa, qt = 1e-6, w2 = Ba - qt;
function La() {
  this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
}
function oe() {
  return new La();
}
La.prototype = oe.prototype = {
  constructor: La,
  moveTo: function(n, t) {
    this._ += "M" + (this._x0 = this._x1 = +n) + "," + (this._y0 = this._y1 = +t);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(n, t) {
    this._ += "L" + (this._x1 = +n) + "," + (this._y1 = +t);
  },
  quadraticCurveTo: function(n, t, e, r) {
    this._ += "Q" + +n + "," + +t + "," + (this._x1 = +e) + "," + (this._y1 = +r);
  },
  bezierCurveTo: function(n, t, e, r, i, o) {
    this._ += "C" + +n + "," + +t + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o);
  },
  arcTo: function(n, t, e, r, i) {
    n = +n, t = +t, e = +e, r = +r, i = +i;
    var o = this._x1, a = this._y1, u = e - n, f = r - t, c = o - n, s = a - t, h = c * c + s * s;
    if (i < 0)
      throw new Error("negative radius: " + i);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = n) + "," + (this._y1 = t);
    else if (h > qt)
      if (!(Math.abs(s * u - f * c) > qt) || !i)
        this._ += "L" + (this._x1 = n) + "," + (this._y1 = t);
      else {
        var l = e - o, d = r - a, p = u * u + f * f, m = l * l + d * d, g = Math.sqrt(p), y = Math.sqrt(h), v = i * Math.tan((Fa - Math.acos((p + h - m) / (2 * g * y))) / 2), _ = v / y, b = v / g;
        Math.abs(_ - 1) > qt && (this._ += "L" + (n + _ * c) + "," + (t + _ * s)), this._ += "A" + i + "," + i + ",0,0," + +(s * l > c * d) + "," + (this._x1 = n + b * u) + "," + (this._y1 = t + b * f);
      }
  },
  arc: function(n, t, e, r, i, o) {
    n = +n, t = +t, e = +e, o = !!o;
    var a = e * Math.cos(r), u = e * Math.sin(r), f = n + a, c = t + u, s = 1 ^ o, h = o ? r - i : i - r;
    if (e < 0)
      throw new Error("negative radius: " + e);
    this._x1 === null ? this._ += "M" + f + "," + c : (Math.abs(this._x1 - f) > qt || Math.abs(this._y1 - c) > qt) && (this._ += "L" + f + "," + c), e && (h < 0 && (h = h % Ba + Ba), h > w2 ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (n - a) + "," + (t - u) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = f) + "," + (this._y1 = c) : h > qt && (this._ += "A" + e + "," + e + ",0," + +(h >= Fa) + "," + s + "," + (this._x1 = n + e * Math.cos(i)) + "," + (this._y1 = t + e * Math.sin(i))));
  },
  rect: function(n, t, e, r) {
    this._ += "M" + (this._x0 = this._x1 = +n) + "," + (this._y0 = this._y1 = +t) + "h" + +e + "v" + +r + "h" + -e + "Z";
  },
  toString: function() {
    return this._;
  }
};
var x2 = Array.prototype.slice;
function Yt(n) {
  return function() {
    return n;
  };
}
function M2(n) {
  return n.source;
}
function T2(n) {
  return n.target;
}
function ic(n) {
  return n.radius;
}
function S2(n) {
  return n.startAngle;
}
function A2(n) {
  return n.endAngle;
}
function k2() {
  return 0;
}
function E2() {
  return 10;
}
function Bl(n) {
  var t = M2, e = T2, r = ic, i = ic, o = S2, a = A2, u = k2, f = null;
  function c() {
    var s, h = t.apply(this, arguments), l = e.apply(this, arguments), d = u.apply(this, arguments) / 2, p = x2.call(arguments), m = +r.apply(this, (p[0] = h, p)), g = o.apply(this, p) - Zr, y = a.apply(this, p) - Zr, v = +i.apply(this, (p[0] = l, p)), _ = o.apply(this, p) - Zr, b = a.apply(this, p) - Zr;
    if (f || (f = s = oe()), d > Vo && (tc(y - g) > d * 2 + Vo ? y > g ? (g += d, y -= d) : (g -= d, y += d) : g = y = (g + y) / 2, tc(b - _) > d * 2 + Vo ? b > _ ? (_ += d, b -= d) : (_ -= d, b += d) : _ = b = (_ + b) / 2), f.moveTo(m * ge(g), m * pe(g)), f.arc(0, 0, m, g, y), g !== _ || y !== b)
      if (n) {
        var w = +n.apply(this, arguments), x = v - w, E = (_ + b) / 2;
        f.quadraticCurveTo(0, 0, x * ge(_), x * pe(_)), f.lineTo(v * ge(E), v * pe(E)), f.lineTo(x * ge(b), x * pe(b));
      } else
        f.quadraticCurveTo(0, 0, v * ge(_), v * pe(_)), f.arc(0, 0, v, _, b);
    if (f.quadraticCurveTo(0, 0, m * ge(g), m * pe(g)), f.closePath(), s)
      return f = null, s + "" || null;
  }
  return n && (c.headRadius = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : Yt(+s), c) : n;
  }), c.radius = function(s) {
    return arguments.length ? (r = i = typeof s == "function" ? s : Yt(+s), c) : r;
  }, c.sourceRadius = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : Yt(+s), c) : r;
  }, c.targetRadius = function(s) {
    return arguments.length ? (i = typeof s == "function" ? s : Yt(+s), c) : i;
  }, c.startAngle = function(s) {
    return arguments.length ? (o = typeof s == "function" ? s : Yt(+s), c) : o;
  }, c.endAngle = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : Yt(+s), c) : a;
  }, c.padAngle = function(s) {
    return arguments.length ? (u = typeof s == "function" ? s : Yt(+s), c) : u;
  }, c.source = function(s) {
    return arguments.length ? (t = s, c) : t;
  }, c.target = function(s) {
    return arguments.length ? (e = s, c) : e;
  }, c.context = function(s) {
    return arguments.length ? (f = s == null ? null : s, c) : f;
  }, c;
}
function e8() {
  return Bl();
}
function r8() {
  return Bl(E2);
}
var $2 = Array.prototype, Ll = $2.slice;
function N2(n, t) {
  return n - t;
}
function C2(n) {
  for (var t = 0, e = n.length, r = n[e - 1][1] * n[0][0] - n[e - 1][0] * n[0][1]; ++t < e; )
    r += n[t - 1][1] * n[t][0] - n[t - 1][0] * n[t][1];
  return r;
}
const $t = (n) => () => n;
function R2(n, t) {
  for (var e = -1, r = t.length, i; ++e < r; )
    if (i = P2(n, t[e]))
      return i;
  return 0;
}
function P2(n, t) {
  for (var e = t[0], r = t[1], i = -1, o = 0, a = n.length, u = a - 1; o < a; u = o++) {
    var f = n[o], c = f[0], s = f[1], h = n[u], l = h[0], d = h[1];
    if (I2(f, h, t))
      return 0;
    s > r != d > r && e < (l - c) * (r - s) / (d - s) + c && (i = -i);
  }
  return i;
}
function I2(n, t, e) {
  var r;
  return z2(n, t, e) && D2(n[r = +(n[0] === t[0])], e[r], t[r]);
}
function z2(n, t, e) {
  return (t[0] - n[0]) * (e[1] - n[1]) === (e[0] - n[0]) * (t[1] - n[1]);
}
function D2(n, t, e) {
  return n <= t && t <= e || e <= t && t <= n;
}
function O2() {
}
var bt = [
  [],
  [[[1, 1.5], [0.5, 1]]],
  [[[1.5, 1], [1, 1.5]]],
  [[[1.5, 1], [0.5, 1]]],
  [[[1, 0.5], [1.5, 1]]],
  [[[1, 1.5], [0.5, 1]], [[1, 0.5], [1.5, 1]]],
  [[[1, 0.5], [1, 1.5]]],
  [[[1, 0.5], [0.5, 1]]],
  [[[0.5, 1], [1, 0.5]]],
  [[[1, 1.5], [1, 0.5]]],
  [[[0.5, 1], [1, 0.5]], [[1.5, 1], [1, 1.5]]],
  [[[1.5, 1], [1, 0.5]]],
  [[[0.5, 1], [1.5, 1]]],
  [[[1, 1.5], [1.5, 1]]],
  [[[0.5, 1], [1, 1.5]]],
  []
];
function oc() {
  var n = 1, t = 1, e = Hs, r = f;
  function i(c) {
    var s = e(c);
    if (Array.isArray(s))
      s = s.slice().sort(N2);
    else {
      const h = hi(c), l = Ai(h[0], h[1], s);
      s = Re(Math.floor(h[0] / l) * l, Math.floor(h[1] / l - 1) * l, s);
    }
    return s.map((h) => o(c, h));
  }
  function o(c, s) {
    var h = [], l = [];
    return a(c, s, function(d) {
      r(d, c, s), C2(d) > 0 ? h.push([d]) : l.push(d);
    }), l.forEach(function(d) {
      for (var p = 0, m = h.length, g; p < m; ++p)
        if (R2((g = h[p])[0], d) !== -1) {
          g.push(d);
          return;
        }
    }), {
      type: "MultiPolygon",
      value: s,
      coordinates: h
    };
  }
  function a(c, s, h) {
    var l = new Array(), d = new Array(), p, m, g, y, v, _;
    for (p = m = -1, y = c[0] >= s, bt[y << 1].forEach(b); ++p < n - 1; )
      g = y, y = c[p + 1] >= s, bt[g | y << 1].forEach(b);
    for (bt[y << 0].forEach(b); ++m < t - 1; ) {
      for (p = -1, y = c[m * n + n] >= s, v = c[m * n] >= s, bt[y << 1 | v << 2].forEach(b); ++p < n - 1; )
        g = y, y = c[m * n + n + p + 1] >= s, _ = v, v = c[m * n + p + 1] >= s, bt[g | y << 1 | v << 2 | _ << 3].forEach(b);
      bt[y | v << 3].forEach(b);
    }
    for (p = -1, v = c[m * n] >= s, bt[v << 2].forEach(b); ++p < n - 1; )
      _ = v, v = c[m * n + p + 1] >= s, bt[v << 2 | _ << 3].forEach(b);
    bt[v << 3].forEach(b);
    function b(w) {
      var x = [w[0][0] + p, w[0][1] + m], E = [w[1][0] + p, w[1][1] + m], $ = u(x), P = u(E), S, T;
      (S = d[$]) ? (T = l[P]) ? (delete d[S.end], delete l[T.start], S === T ? (S.ring.push(E), h(S.ring)) : l[S.start] = d[T.end] = { start: S.start, end: T.end, ring: S.ring.concat(T.ring) }) : (delete d[S.end], S.ring.push(E), d[S.end = P] = S) : (S = l[P]) ? (T = d[$]) ? (delete l[S.start], delete d[T.end], S === T ? (S.ring.push(E), h(S.ring)) : l[T.start] = d[S.end] = { start: T.start, end: S.end, ring: T.ring.concat(S.ring) }) : (delete l[S.start], S.ring.unshift(x), l[S.start = $] = S) : l[$] = d[P] = { start: $, end: P, ring: [x, E] };
    }
  }
  function u(c) {
    return c[0] * 2 + c[1] * (n + 1) * 4;
  }
  function f(c, s, h) {
    c.forEach(function(l) {
      var d = l[0], p = l[1], m = d | 0, g = p | 0, y, v = s[g * n + m];
      d > 0 && d < n && m === d && (y = s[g * n + m - 1], l[0] = d + (h - y) / (v - y) - 0.5), p > 0 && p < t && g === p && (y = s[(g - 1) * n + m], l[1] = p + (h - y) / (v - y) - 0.5);
    });
  }
  return i.contour = o, i.size = function(c) {
    if (!arguments.length)
      return [n, t];
    var s = Math.floor(c[0]), h = Math.floor(c[1]);
    if (!(s >= 0 && h >= 0))
      throw new Error("invalid size");
    return n = s, t = h, i;
  }, i.thresholds = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : Array.isArray(c) ? $t(Ll.call(c)) : $t(c), i) : e;
  }, i.smooth = function(c) {
    return arguments.length ? (r = c ? f : O2, i) : r === f;
  }, i;
}
function F2(n) {
  return n[0];
}
function B2(n) {
  return n[1];
}
function L2() {
  return 1;
}
function i8() {
  var n = F2, t = B2, e = L2, r = 960, i = 500, o = 20, a = 2, u = o * 3, f = r + u * 2 >> a, c = i + u * 2 >> a, s = $t(20);
  function h(v) {
    var _ = new Float32Array(f * c), b = Math.pow(2, -a), w = -1;
    for (const C of v) {
      var x = (n(C, ++w, v) + u) * b, E = (t(C, w, v) + u) * b, $ = +e(C, w, v);
      if (x >= 0 && x < f && E >= 0 && E < c) {
        var P = Math.floor(x), S = Math.floor(E), T = x - P - 0.5, R = E - S - 0.5;
        _[P + S * f] += (1 - T) * (1 - R) * $, _[P + 1 + S * f] += T * (1 - R) * $, _[P + 1 + (S + 1) * f] += T * R * $, _[P + (S + 1) * f] += (1 - T) * R * $;
      }
    }
    return H0({ data: _, width: f, height: c }, o * b), _;
  }
  function l(v) {
    var _ = h(v), b = s(_), w = Math.pow(2, 2 * a);
    return Array.isArray(b) || (b = Re(Number.MIN_VALUE, xr(_) / w, b)), oc().size([f, c]).thresholds(b.map((x) => x * w))(_).map((x, E) => (x.value = +b[E], d(x)));
  }
  l.contours = function(v) {
    var _ = h(v), b = oc().size([f, c]), w = Math.pow(2, 2 * a), x = (E) => {
      E = +E;
      var $ = d(b.contour(_, E * w));
      return $.value = E, $;
    };
    return Object.defineProperty(x, "max", { get: () => xr(_) / w }), x;
  };
  function d(v) {
    return v.coordinates.forEach(p), v;
  }
  function p(v) {
    v.forEach(m);
  }
  function m(v) {
    v.forEach(g);
  }
  function g(v) {
    v[0] = v[0] * Math.pow(2, a) - u, v[1] = v[1] * Math.pow(2, a) - u;
  }
  function y() {
    return u = o * 3, f = r + u * 2 >> a, c = i + u * 2 >> a, l;
  }
  return l.x = function(v) {
    return arguments.length ? (n = typeof v == "function" ? v : $t(+v), l) : n;
  }, l.y = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : $t(+v), l) : t;
  }, l.weight = function(v) {
    return arguments.length ? (e = typeof v == "function" ? v : $t(+v), l) : e;
  }, l.size = function(v) {
    if (!arguments.length)
      return [r, i];
    var _ = +v[0], b = +v[1];
    if (!(_ >= 0 && b >= 0))
      throw new Error("invalid size");
    return r = _, i = b, y();
  }, l.cellSize = function(v) {
    if (!arguments.length)
      return 1 << a;
    if (!((v = +v) >= 1))
      throw new Error("invalid cell size");
    return a = Math.floor(Math.log(v) / Math.LN2), y();
  }, l.thresholds = function(v) {
    return arguments.length ? (s = typeof v == "function" ? v : Array.isArray(v) ? $t(Ll.call(v)) : $t(v), l) : s;
  }, l.bandwidth = function(v) {
    if (!arguments.length)
      return Math.sqrt(o * (o + 1));
    if (!((v = +v) >= 0))
      throw new Error("invalid bandwidth");
    return o = (Math.sqrt(4 * v * v + 1) - 1) / 2, y();
  }, l;
}
const Tt = 11102230246251565e-32, En = 134217729, Y2 = (3 + 8 * Tt) * Tt;
function Zo(n, t, e, r, i) {
  let o, a, u, f, c = t[0], s = r[0], h = 0, l = 0;
  s > c == s > -c ? (o = c, c = t[++h]) : (o = s, s = r[++l]);
  let d = 0;
  if (h < n && l < e)
    for (s > c == s > -c ? (a = c + o, u = o - (a - c), c = t[++h]) : (a = s + o, u = o - (a - s), s = r[++l]), o = a, u !== 0 && (i[d++] = u); h < n && l < e; )
      s > c == s > -c ? (a = o + c, f = a - o, u = o - (a - f) + (c - f), c = t[++h]) : (a = o + s, f = a - o, u = o - (a - f) + (s - f), s = r[++l]), o = a, u !== 0 && (i[d++] = u);
  for (; h < n; )
    a = o + c, f = a - o, u = o - (a - f) + (c - f), c = t[++h], o = a, u !== 0 && (i[d++] = u);
  for (; l < e; )
    a = o + s, f = a - o, u = o - (a - f) + (s - f), s = r[++l], o = a, u !== 0 && (i[d++] = u);
  return (o !== 0 || d === 0) && (i[d++] = o), d;
}
function q2(n, t) {
  let e = t[0];
  for (let r = 1; r < n; r++)
    e += t[r];
  return e;
}
function Fr(n) {
  return new Float64Array(n);
}
const U2 = (3 + 16 * Tt) * Tt, H2 = (2 + 12 * Tt) * Tt, X2 = (9 + 64 * Tt) * Tt * Tt, me = Fr(4), ac = Fr(8), uc = Fr(12), fc = Fr(16), Pn = Fr(4);
function G2(n, t, e, r, i, o, a) {
  let u, f, c, s, h, l, d, p, m, g, y, v, _, b, w, x, E, $;
  const P = n - i, S = e - i, T = t - o, R = r - o;
  b = P * R, l = En * P, d = l - (l - P), p = P - d, l = En * R, m = l - (l - R), g = R - m, w = p * g - (b - d * m - p * m - d * g), x = T * S, l = En * T, d = l - (l - T), p = T - d, l = En * S, m = l - (l - S), g = S - m, E = p * g - (x - d * m - p * m - d * g), y = w - E, h = w - y, me[0] = w - (y + h) + (h - E), v = b + y, h = v - b, _ = b - (v - h) + (y - h), y = _ - x, h = _ - y, me[1] = _ - (y + h) + (h - x), $ = v + y, h = $ - v, me[2] = v - ($ - h) + (y - h), me[3] = $;
  let C = q2(4, me), M = H2 * a;
  if (C >= M || -C >= M || (h = n - P, u = n - (P + h) + (h - i), h = e - S, c = e - (S + h) + (h - i), h = t - T, f = t - (T + h) + (h - o), h = r - R, s = r - (R + h) + (h - o), u === 0 && f === 0 && c === 0 && s === 0) || (M = X2 * a + Y2 * Math.abs(C), C += P * s + R * u - (T * c + S * f), C >= M || -C >= M))
    return C;
  b = u * R, l = En * u, d = l - (l - u), p = u - d, l = En * R, m = l - (l - R), g = R - m, w = p * g - (b - d * m - p * m - d * g), x = f * S, l = En * f, d = l - (l - f), p = f - d, l = En * S, m = l - (l - S), g = S - m, E = p * g - (x - d * m - p * m - d * g), y = w - E, h = w - y, Pn[0] = w - (y + h) + (h - E), v = b + y, h = v - b, _ = b - (v - h) + (y - h), y = _ - x, h = _ - y, Pn[1] = _ - (y + h) + (h - x), $ = v + y, h = $ - v, Pn[2] = v - ($ - h) + (y - h), Pn[3] = $;
  const A = Zo(4, me, 4, Pn, ac);
  b = P * s, l = En * P, d = l - (l - P), p = P - d, l = En * s, m = l - (l - s), g = s - m, w = p * g - (b - d * m - p * m - d * g), x = T * c, l = En * T, d = l - (l - T), p = T - d, l = En * c, m = l - (l - c), g = c - m, E = p * g - (x - d * m - p * m - d * g), y = w - E, h = w - y, Pn[0] = w - (y + h) + (h - E), v = b + y, h = v - b, _ = b - (v - h) + (y - h), y = _ - x, h = _ - y, Pn[1] = _ - (y + h) + (h - x), $ = v + y, h = $ - v, Pn[2] = v - ($ - h) + (y - h), Pn[3] = $;
  const k = Zo(A, ac, 4, Pn, uc);
  b = u * s, l = En * u, d = l - (l - u), p = u - d, l = En * s, m = l - (l - s), g = s - m, w = p * g - (b - d * m - p * m - d * g), x = f * c, l = En * f, d = l - (l - f), p = f - d, l = En * c, m = l - (l - c), g = c - m, E = p * g - (x - d * m - p * m - d * g), y = w - E, h = w - y, Pn[0] = w - (y + h) + (h - E), v = b + y, h = v - b, _ = b - (v - h) + (y - h), y = _ - x, h = _ - y, Pn[1] = _ - (y + h) + (h - x), $ = v + y, h = $ - v, Pn[2] = v - ($ - h) + (y - h), Pn[3] = $;
  const N = Zo(k, uc, 4, Pn, fc);
  return fc[N - 1];
}
function Qr(n, t, e, r, i, o) {
  const a = (t - o) * (e - i), u = (n - i) * (r - o), f = a - u;
  if (a === 0 || u === 0 || a > 0 != u > 0)
    return f;
  const c = Math.abs(a + u);
  return Math.abs(f) >= U2 * c ? f : -G2(n, t, e, r, i, o, c);
}
const cc = Math.pow(2, -52), Kr = new Uint32Array(512);
class Ii {
  static from(t, e = K2, r = J2) {
    const i = t.length, o = new Float64Array(i * 2);
    for (let a = 0; a < i; a++) {
      const u = t[a];
      o[2 * a] = e(u), o[2 * a + 1] = r(u);
    }
    return new Ii(o);
  }
  constructor(t) {
    const e = t.length >> 1;
    if (e > 0 && typeof t[0] != "number")
      throw new Error("Expected coords to contain numbers.");
    this.coords = t;
    const r = Math.max(2 * e - 5, 0);
    this._triangles = new Uint32Array(r * 3), this._halfedges = new Int32Array(r * 3), this._hashSize = Math.ceil(Math.sqrt(e)), this._hullPrev = new Uint32Array(e), this._hullNext = new Uint32Array(e), this._hullTri = new Uint32Array(e), this._hullHash = new Int32Array(this._hashSize).fill(-1), this._ids = new Uint32Array(e), this._dists = new Float64Array(e), this.update();
  }
  update() {
    const { coords: t, _hullPrev: e, _hullNext: r, _hullTri: i, _hullHash: o } = this, a = t.length >> 1;
    let u = 1 / 0, f = 1 / 0, c = -1 / 0, s = -1 / 0;
    for (let S = 0; S < a; S++) {
      const T = t[2 * S], R = t[2 * S + 1];
      T < u && (u = T), R < f && (f = R), T > c && (c = T), R > s && (s = R), this._ids[S] = S;
    }
    const h = (u + c) / 2, l = (f + s) / 2;
    let d = 1 / 0, p, m, g;
    for (let S = 0; S < a; S++) {
      const T = Qo(h, l, t[2 * S], t[2 * S + 1]);
      T < d && (p = S, d = T);
    }
    const y = t[2 * p], v = t[2 * p + 1];
    d = 1 / 0;
    for (let S = 0; S < a; S++) {
      if (S === p)
        continue;
      const T = Qo(y, v, t[2 * S], t[2 * S + 1]);
      T < d && T > 0 && (m = S, d = T);
    }
    let _ = t[2 * m], b = t[2 * m + 1], w = 1 / 0;
    for (let S = 0; S < a; S++) {
      if (S === p || S === m)
        continue;
      const T = Z2(y, v, _, b, t[2 * S], t[2 * S + 1]);
      T < w && (g = S, w = T);
    }
    let x = t[2 * g], E = t[2 * g + 1];
    if (w === 1 / 0) {
      for (let R = 0; R < a; R++)
        this._dists[R] = t[2 * R] - t[0] || t[2 * R + 1] - t[1];
      we(this._ids, this._dists, 0, a - 1);
      const S = new Uint32Array(a);
      let T = 0;
      for (let R = 0, C = -1 / 0; R < a; R++) {
        const M = this._ids[R];
        this._dists[M] > C && (S[T++] = M, C = this._dists[M]);
      }
      this.hull = S.subarray(0, T), this.triangles = new Uint32Array(0), this.halfedges = new Uint32Array(0);
      return;
    }
    if (Qr(y, v, _, b, x, E) < 0) {
      const S = m, T = _, R = b;
      m = g, _ = x, b = E, g = S, x = T, E = R;
    }
    const $ = Q2(y, v, _, b, x, E);
    this._cx = $.x, this._cy = $.y;
    for (let S = 0; S < a; S++)
      this._dists[S] = Qo(t[2 * S], t[2 * S + 1], $.x, $.y);
    we(this._ids, this._dists, 0, a - 1), this._hullStart = p;
    let P = 3;
    r[p] = e[g] = m, r[m] = e[p] = g, r[g] = e[m] = p, i[p] = 0, i[m] = 1, i[g] = 2, o.fill(-1), o[this._hashKey(y, v)] = p, o[this._hashKey(_, b)] = m, o[this._hashKey(x, E)] = g, this.trianglesLen = 0, this._addTriangle(p, m, g, -1, -1, -1);
    for (let S = 0, T, R; S < this._ids.length; S++) {
      const C = this._ids[S], M = t[2 * C], A = t[2 * C + 1];
      if (S > 0 && Math.abs(M - T) <= cc && Math.abs(A - R) <= cc || (T = M, R = A, C === p || C === m || C === g))
        continue;
      let k = 0;
      for (let B = 0, q = this._hashKey(M, A); B < this._hashSize && (k = o[(q + B) % this._hashSize], !(k !== -1 && k !== r[k])); B++)
        ;
      k = e[k];
      let N = k, I;
      for (; I = r[N], Qr(M, A, t[2 * N], t[2 * N + 1], t[2 * I], t[2 * I + 1]) >= 0; )
        if (N = I, N === k) {
          N = -1;
          break;
        }
      if (N === -1)
        continue;
      let z = this._addTriangle(N, C, r[N], -1, -1, i[N]);
      i[C] = this._legalize(z + 2), i[N] = z, P++;
      let O = r[N];
      for (; I = r[O], Qr(M, A, t[2 * O], t[2 * O + 1], t[2 * I], t[2 * I + 1]) < 0; )
        z = this._addTriangle(O, C, I, i[C], -1, i[O]), i[C] = this._legalize(z + 2), r[O] = O, P--, O = I;
      if (N === k)
        for (; I = e[N], Qr(M, A, t[2 * I], t[2 * I + 1], t[2 * N], t[2 * N + 1]) < 0; )
          z = this._addTriangle(I, C, N, -1, i[N], i[I]), this._legalize(z + 2), i[I] = z, r[N] = N, P--, N = I;
      this._hullStart = e[C] = N, r[N] = e[O] = C, r[C] = O, o[this._hashKey(M, A)] = C, o[this._hashKey(t[2 * N], t[2 * N + 1])] = N;
    }
    this.hull = new Uint32Array(P);
    for (let S = 0, T = this._hullStart; S < P; S++)
      this.hull[S] = T, T = r[T];
    this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(t, e) {
    return Math.floor(V2(t - this._cx, e - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(t) {
    const { _triangles: e, _halfedges: r, coords: i } = this;
    let o = 0, a = 0;
    for (; ; ) {
      const u = r[t], f = t - t % 3;
      if (a = f + (t + 2) % 3, u === -1) {
        if (o === 0)
          break;
        t = Kr[--o];
        continue;
      }
      const c = u - u % 3, s = f + (t + 1) % 3, h = c + (u + 2) % 3, l = e[a], d = e[t], p = e[s], m = e[h];
      if (W2(
        i[2 * l],
        i[2 * l + 1],
        i[2 * d],
        i[2 * d + 1],
        i[2 * p],
        i[2 * p + 1],
        i[2 * m],
        i[2 * m + 1]
      )) {
        e[t] = m, e[u] = l;
        const y = r[h];
        if (y === -1) {
          let _ = this._hullStart;
          do {
            if (this._hullTri[_] === h) {
              this._hullTri[_] = t;
              break;
            }
            _ = this._hullPrev[_];
          } while (_ !== this._hullStart);
        }
        this._link(t, y), this._link(u, r[a]), this._link(a, h);
        const v = c + (u + 1) % 3;
        o < Kr.length && (Kr[o++] = v);
      } else {
        if (o === 0)
          break;
        t = Kr[--o];
      }
    }
    return a;
  }
  _link(t, e) {
    this._halfedges[t] = e, e !== -1 && (this._halfedges[e] = t);
  }
  _addTriangle(t, e, r, i, o, a) {
    const u = this.trianglesLen;
    return this._triangles[u] = t, this._triangles[u + 1] = e, this._triangles[u + 2] = r, this._link(u, i), this._link(u + 1, o), this._link(u + 2, a), this.trianglesLen += 3, u;
  }
}
function V2(n, t) {
  const e = n / (Math.abs(n) + Math.abs(t));
  return (t > 0 ? 3 - e : 1 + e) / 4;
}
function Qo(n, t, e, r) {
  const i = n - e, o = t - r;
  return i * i + o * o;
}
function W2(n, t, e, r, i, o, a, u) {
  const f = n - a, c = t - u, s = e - a, h = r - u, l = i - a, d = o - u, p = f * f + c * c, m = s * s + h * h, g = l * l + d * d;
  return f * (h * g - m * d) - c * (s * g - m * l) + p * (s * d - h * l) < 0;
}
function Z2(n, t, e, r, i, o) {
  const a = e - n, u = r - t, f = i - n, c = o - t, s = a * a + u * u, h = f * f + c * c, l = 0.5 / (a * c - u * f), d = (c * s - u * h) * l, p = (a * h - f * s) * l;
  return d * d + p * p;
}
function Q2(n, t, e, r, i, o) {
  const a = e - n, u = r - t, f = i - n, c = o - t, s = a * a + u * u, h = f * f + c * c, l = 0.5 / (a * c - u * f), d = n + (c * s - u * h) * l, p = t + (a * h - f * s) * l;
  return { x: d, y: p };
}
function we(n, t, e, r) {
  if (r - e <= 20)
    for (let i = e + 1; i <= r; i++) {
      const o = n[i], a = t[o];
      let u = i - 1;
      for (; u >= e && t[n[u]] > a; )
        n[u + 1] = n[u--];
      n[u + 1] = o;
    }
  else {
    const i = e + r >> 1;
    let o = e + 1, a = r;
    je(n, i, o), t[n[e]] > t[n[r]] && je(n, e, r), t[n[o]] > t[n[r]] && je(n, o, r), t[n[e]] > t[n[o]] && je(n, e, o);
    const u = n[o], f = t[u];
    for (; ; ) {
      do
        o++;
      while (t[n[o]] < f);
      do
        a--;
      while (t[n[a]] > f);
      if (a < o)
        break;
      je(n, o, a);
    }
    n[e + 1] = n[a], n[a] = u, r - o + 1 >= a - e ? (we(n, t, o, r), we(n, t, e, a - 1)) : (we(n, t, e, a - 1), we(n, t, o, r));
  }
}
function je(n, t, e) {
  const r = n[t];
  n[t] = n[e], n[e] = r;
}
function K2(n) {
  return n[0];
}
function J2(n) {
  return n[1];
}
const sc = 1e-6;
class Gt {
  constructor() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }
  moveTo(t, e) {
    this._ += `M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  }
  lineTo(t, e) {
    this._ += `L${this._x1 = +t},${this._y1 = +e}`;
  }
  arc(t, e, r) {
    t = +t, e = +e, r = +r;
    const i = t + r, o = e;
    if (r < 0)
      throw new Error("negative radius");
    this._x1 === null ? this._ += `M${i},${o}` : (Math.abs(this._x1 - i) > sc || Math.abs(this._y1 - o) > sc) && (this._ += "L" + i + "," + o), r && (this._ += `A${r},${r},0,1,1,${t - r},${e}A${r},${r},0,1,1,${this._x1 = i},${this._y1 = o}`);
  }
  rect(t, e, r, i) {
    this._ += `M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +e}h${+r}v${+i}h${-r}Z`;
  }
  value() {
    return this._ || null;
  }
}
class Ya {
  constructor() {
    this._ = [];
  }
  moveTo(t, e) {
    this._.push([t, e]);
  }
  closePath() {
    this._.push(this._[0].slice());
  }
  lineTo(t, e) {
    this._.push([t, e]);
  }
  value() {
    return this._.length ? this._ : null;
  }
}
class j2 {
  constructor(t, [e, r, i, o] = [0, 0, 960, 500]) {
    if (!((i = +i) >= (e = +e)) || !((o = +o) >= (r = +r)))
      throw new Error("invalid bounds");
    this.delaunay = t, this._circumcenters = new Float64Array(t.points.length * 2), this.vectors = new Float64Array(t.points.length * 2), this.xmax = i, this.xmin = e, this.ymax = o, this.ymin = r, this._init();
  }
  update() {
    return this.delaunay.update(), this._init(), this;
  }
  _init() {
    const { delaunay: { points: t, hull: e, triangles: r }, vectors: i } = this, o = this.circumcenters = this._circumcenters.subarray(0, r.length / 3 * 2);
    for (let d = 0, p = 0, m = r.length, g, y; d < m; d += 3, p += 2) {
      const v = r[d] * 2, _ = r[d + 1] * 2, b = r[d + 2] * 2, w = t[v], x = t[v + 1], E = t[_], $ = t[_ + 1], P = t[b], S = t[b + 1], T = E - w, R = $ - x, C = P - w, M = S - x, A = (T * M - R * C) * 2;
      if (Math.abs(A) < 1e-9) {
        let k = 1e9;
        const N = r[0] * 2;
        k *= Math.sign((t[N] - w) * M - (t[N + 1] - x) * C), g = (w + P) / 2 - k * M, y = (x + S) / 2 + k * C;
      } else {
        const k = 1 / A, N = T * T + R * R, I = C * C + M * M;
        g = w + (M * N - R * I) * k, y = x + (T * I - C * N) * k;
      }
      o[p] = g, o[p + 1] = y;
    }
    let a = e[e.length - 1], u, f = a * 4, c, s = t[2 * a], h, l = t[2 * a + 1];
    i.fill(0);
    for (let d = 0; d < e.length; ++d)
      a = e[d], u = f, c = s, h = l, f = a * 4, s = t[2 * a], l = t[2 * a + 1], i[u + 2] = i[f] = h - l, i[u + 3] = i[f + 1] = s - c;
  }
  render(t) {
    const e = t == null ? t = new Gt() : void 0, { delaunay: { halfedges: r, inedges: i, hull: o }, circumcenters: a, vectors: u } = this;
    if (o.length <= 1)
      return null;
    for (let s = 0, h = r.length; s < h; ++s) {
      const l = r[s];
      if (l < s)
        continue;
      const d = Math.floor(s / 3) * 2, p = Math.floor(l / 3) * 2, m = a[d], g = a[d + 1], y = a[p], v = a[p + 1];
      this._renderSegment(m, g, y, v, t);
    }
    let f, c = o[o.length - 1];
    for (let s = 0; s < o.length; ++s) {
      f = c, c = o[s];
      const h = Math.floor(i[c] / 3) * 2, l = a[h], d = a[h + 1], p = f * 4, m = this._project(l, d, u[p + 2], u[p + 3]);
      m && this._renderSegment(l, d, m[0], m[1], t);
    }
    return e && e.value();
  }
  renderBounds(t) {
    const e = t == null ? t = new Gt() : void 0;
    return t.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin), e && e.value();
  }
  renderCell(t, e) {
    const r = e == null ? e = new Gt() : void 0, i = this._clip(t);
    if (i === null || !i.length)
      return;
    e.moveTo(i[0], i[1]);
    let o = i.length;
    for (; i[0] === i[o - 2] && i[1] === i[o - 1] && o > 1; )
      o -= 2;
    for (let a = 2; a < o; a += 2)
      (i[a] !== i[a - 2] || i[a + 1] !== i[a - 1]) && e.lineTo(i[a], i[a + 1]);
    return e.closePath(), r && r.value();
  }
  *cellPolygons() {
    const { delaunay: { points: t } } = this;
    for (let e = 0, r = t.length / 2; e < r; ++e) {
      const i = this.cellPolygon(e);
      i && (i.index = e, yield i);
    }
  }
  cellPolygon(t) {
    const e = new Ya();
    return this.renderCell(t, e), e.value();
  }
  _renderSegment(t, e, r, i, o) {
    let a;
    const u = this._regioncode(t, e), f = this._regioncode(r, i);
    u === 0 && f === 0 ? (o.moveTo(t, e), o.lineTo(r, i)) : (a = this._clipSegment(t, e, r, i, u, f)) && (o.moveTo(a[0], a[1]), o.lineTo(a[2], a[3]));
  }
  contains(t, e, r) {
    return e = +e, e !== e || (r = +r, r !== r) ? !1 : this.delaunay._step(t, e, r) === t;
  }
  *neighbors(t) {
    const e = this._clip(t);
    if (e)
      for (const r of this.delaunay.neighbors(t)) {
        const i = this._clip(r);
        if (i) {
          n:
            for (let o = 0, a = e.length; o < a; o += 2)
              for (let u = 0, f = i.length; u < f; u += 2)
                if (e[o] == i[u] && e[o + 1] == i[u + 1] && e[(o + 2) % a] == i[(u + f - 2) % f] && e[(o + 3) % a] == i[(u + f - 1) % f]) {
                  yield r;
                  break n;
                }
        }
      }
  }
  _cell(t) {
    const { circumcenters: e, delaunay: { inedges: r, halfedges: i, triangles: o } } = this, a = r[t];
    if (a === -1)
      return null;
    const u = [];
    let f = a;
    do {
      const c = Math.floor(f / 3);
      if (u.push(e[c * 2], e[c * 2 + 1]), f = f % 3 === 2 ? f - 2 : f + 1, o[f] !== t)
        break;
      f = i[f];
    } while (f !== a && f !== -1);
    return u;
  }
  _clip(t) {
    if (t === 0 && this.delaunay.hull.length === 1)
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    const e = this._cell(t);
    if (e === null)
      return null;
    const { vectors: r } = this, i = t * 4;
    return r[i] || r[i + 1] ? this._clipInfinite(t, e, r[i], r[i + 1], r[i + 2], r[i + 3]) : this._clipFinite(t, e);
  }
  _clipFinite(t, e) {
    const r = e.length;
    let i = null, o, a, u = e[r - 2], f = e[r - 1], c, s = this._regioncode(u, f), h, l = 0;
    for (let d = 0; d < r; d += 2)
      if (o = u, a = f, u = e[d], f = e[d + 1], c = s, s = this._regioncode(u, f), c === 0 && s === 0)
        h = l, l = 0, i ? i.push(u, f) : i = [u, f];
      else {
        let p, m, g, y, v;
        if (c === 0) {
          if ((p = this._clipSegment(o, a, u, f, c, s)) === null)
            continue;
          [m, g, y, v] = p;
        } else {
          if ((p = this._clipSegment(u, f, o, a, s, c)) === null)
            continue;
          [y, v, m, g] = p, h = l, l = this._edgecode(m, g), h && l && this._edge(t, h, l, i, i.length), i ? i.push(m, g) : i = [m, g];
        }
        h = l, l = this._edgecode(y, v), h && l && this._edge(t, h, l, i, i.length), i ? i.push(y, v) : i = [y, v];
      }
    if (i)
      h = l, l = this._edgecode(i[0], i[1]), h && l && this._edge(t, h, l, i, i.length);
    else if (this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2))
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    return i;
  }
  _clipSegment(t, e, r, i, o, a) {
    for (; ; ) {
      if (o === 0 && a === 0)
        return [t, e, r, i];
      if (o & a)
        return null;
      let u, f, c = o || a;
      c & 8 ? (u = t + (r - t) * (this.ymax - e) / (i - e), f = this.ymax) : c & 4 ? (u = t + (r - t) * (this.ymin - e) / (i - e), f = this.ymin) : c & 2 ? (f = e + (i - e) * (this.xmax - t) / (r - t), u = this.xmax) : (f = e + (i - e) * (this.xmin - t) / (r - t), u = this.xmin), o ? (t = u, e = f, o = this._regioncode(t, e)) : (r = u, i = f, a = this._regioncode(r, i));
    }
  }
  _clipInfinite(t, e, r, i, o, a) {
    let u = Array.from(e), f;
    if ((f = this._project(u[0], u[1], r, i)) && u.unshift(f[0], f[1]), (f = this._project(u[u.length - 2], u[u.length - 1], o, a)) && u.push(f[0], f[1]), u = this._clipFinite(t, u))
      for (let c = 0, s = u.length, h, l = this._edgecode(u[s - 2], u[s - 1]); c < s; c += 2)
        h = l, l = this._edgecode(u[c], u[c + 1]), h && l && (c = this._edge(t, h, l, u, c), s = u.length);
    else
      this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2) && (u = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax]);
    return u;
  }
  _edge(t, e, r, i, o) {
    for (; e !== r; ) {
      let a, u;
      switch (e) {
        case 5:
          e = 4;
          continue;
        case 4:
          e = 6, a = this.xmax, u = this.ymin;
          break;
        case 6:
          e = 2;
          continue;
        case 2:
          e = 10, a = this.xmax, u = this.ymax;
          break;
        case 10:
          e = 8;
          continue;
        case 8:
          e = 9, a = this.xmin, u = this.ymax;
          break;
        case 9:
          e = 1;
          continue;
        case 1:
          e = 5, a = this.xmin, u = this.ymin;
          break;
      }
      (i[o] !== a || i[o + 1] !== u) && this.contains(t, a, u) && (i.splice(o, 0, a, u), o += 2);
    }
    if (i.length > 4)
      for (let a = 0; a < i.length; a += 2) {
        const u = (a + 2) % i.length, f = (a + 4) % i.length;
        (i[a] === i[u] && i[u] === i[f] || i[a + 1] === i[u + 1] && i[u + 1] === i[f + 1]) && (i.splice(u, 2), a -= 2);
      }
    return o;
  }
  _project(t, e, r, i) {
    let o = 1 / 0, a, u, f;
    if (i < 0) {
      if (e <= this.ymin)
        return null;
      (a = (this.ymin - e) / i) < o && (f = this.ymin, u = t + (o = a) * r);
    } else if (i > 0) {
      if (e >= this.ymax)
        return null;
      (a = (this.ymax - e) / i) < o && (f = this.ymax, u = t + (o = a) * r);
    }
    if (r > 0) {
      if (t >= this.xmax)
        return null;
      (a = (this.xmax - t) / r) < o && (u = this.xmax, f = e + (o = a) * i);
    } else if (r < 0) {
      if (t <= this.xmin)
        return null;
      (a = (this.xmin - t) / r) < o && (u = this.xmin, f = e + (o = a) * i);
    }
    return [u, f];
  }
  _edgecode(t, e) {
    return (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) | (e === this.ymin ? 4 : e === this.ymax ? 8 : 0);
  }
  _regioncode(t, e) {
    return (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) | (e < this.ymin ? 4 : e > this.ymax ? 8 : 0);
  }
}
const nm = 2 * Math.PI, ye = Math.pow;
function tm(n) {
  return n[0];
}
function em(n) {
  return n[1];
}
function rm(n) {
  const { triangles: t, coords: e } = n;
  for (let r = 0; r < t.length; r += 3) {
    const i = 2 * t[r], o = 2 * t[r + 1], a = 2 * t[r + 2];
    if ((e[a] - e[i]) * (e[o + 1] - e[i + 1]) - (e[o] - e[i]) * (e[a + 1] - e[i + 1]) > 1e-10)
      return !1;
  }
  return !0;
}
function im(n, t, e) {
  return [n + Math.sin(n + t) * e, t + Math.cos(n - t) * e];
}
class Yl {
  static from(t, e = tm, r = em, i) {
    return new Yl("length" in t ? om(t, e, r, i) : Float64Array.from(am(t, e, r, i)));
  }
  constructor(t) {
    this._delaunator = new Ii(t), this.inedges = new Int32Array(t.length / 2), this._hullIndex = new Int32Array(t.length / 2), this.points = this._delaunator.coords, this._init();
  }
  update() {
    return this._delaunator.update(), this._init(), this;
  }
  _init() {
    const t = this._delaunator, e = this.points;
    if (t.hull && t.hull.length > 2 && rm(t)) {
      this.collinear = Int32Array.from({ length: e.length / 2 }, (l, d) => d).sort((l, d) => e[2 * l] - e[2 * d] || e[2 * l + 1] - e[2 * d + 1]);
      const f = this.collinear[0], c = this.collinear[this.collinear.length - 1], s = [e[2 * f], e[2 * f + 1], e[2 * c], e[2 * c + 1]], h = 1e-8 * Math.hypot(s[3] - s[1], s[2] - s[0]);
      for (let l = 0, d = e.length / 2; l < d; ++l) {
        const p = im(e[2 * l], e[2 * l + 1], h);
        e[2 * l] = p[0], e[2 * l + 1] = p[1];
      }
      this._delaunator = new Ii(e);
    } else
      delete this.collinear;
    const r = this.halfedges = this._delaunator.halfedges, i = this.hull = this._delaunator.hull, o = this.triangles = this._delaunator.triangles, a = this.inedges.fill(-1), u = this._hullIndex.fill(-1);
    for (let f = 0, c = r.length; f < c; ++f) {
      const s = o[f % 3 === 2 ? f - 2 : f + 1];
      (r[f] === -1 || a[s] === -1) && (a[s] = f);
    }
    for (let f = 0, c = i.length; f < c; ++f)
      u[i[f]] = f;
    i.length <= 2 && i.length > 0 && (this.triangles = new Int32Array(3).fill(-1), this.halfedges = new Int32Array(3).fill(-1), this.triangles[0] = i[0], a[i[0]] = 1, i.length === 2 && (a[i[1]] = 0, this.triangles[1] = i[1], this.triangles[2] = i[1]));
  }
  voronoi(t) {
    return new j2(this, t);
  }
  *neighbors(t) {
    const { inedges: e, hull: r, _hullIndex: i, halfedges: o, triangles: a, collinear: u } = this;
    if (u) {
      const h = u.indexOf(t);
      h > 0 && (yield u[h - 1]), h < u.length - 1 && (yield u[h + 1]);
      return;
    }
    const f = e[t];
    if (f === -1)
      return;
    let c = f, s = -1;
    do {
      if (yield s = a[c], c = c % 3 === 2 ? c - 2 : c + 1, a[c] !== t)
        return;
      if (c = o[c], c === -1) {
        const h = r[(i[t] + 1) % r.length];
        h !== s && (yield h);
        return;
      }
    } while (c !== f);
  }
  find(t, e, r = 0) {
    if (t = +t, t !== t || (e = +e, e !== e))
      return -1;
    const i = r;
    let o;
    for (; (o = this._step(r, t, e)) >= 0 && o !== r && o !== i; )
      r = o;
    return o;
  }
  _step(t, e, r) {
    const { inedges: i, hull: o, _hullIndex: a, halfedges: u, triangles: f, points: c } = this;
    if (i[t] === -1 || !c.length)
      return (t + 1) % (c.length >> 1);
    let s = t, h = ye(e - c[t * 2], 2) + ye(r - c[t * 2 + 1], 2);
    const l = i[t];
    let d = l;
    do {
      let p = f[d];
      const m = ye(e - c[p * 2], 2) + ye(r - c[p * 2 + 1], 2);
      if (m < h && (h = m, s = p), d = d % 3 === 2 ? d - 2 : d + 1, f[d] !== t)
        break;
      if (d = u[d], d === -1) {
        if (d = o[(a[t] + 1) % o.length], d !== p && ye(e - c[d * 2], 2) + ye(r - c[d * 2 + 1], 2) < h)
          return d;
        break;
      }
    } while (d !== l);
    return s;
  }
  render(t) {
    const e = t == null ? t = new Gt() : void 0, { points: r, halfedges: i, triangles: o } = this;
    for (let a = 0, u = i.length; a < u; ++a) {
      const f = i[a];
      if (f < a)
        continue;
      const c = o[a] * 2, s = o[f] * 2;
      t.moveTo(r[c], r[c + 1]), t.lineTo(r[s], r[s + 1]);
    }
    return this.renderHull(t), e && e.value();
  }
  renderPoints(t, e) {
    e === void 0 && (!t || typeof t.moveTo != "function") && (e = t, t = null), e = e == null ? 2 : +e;
    const r = t == null ? t = new Gt() : void 0, { points: i } = this;
    for (let o = 0, a = i.length; o < a; o += 2) {
      const u = i[o], f = i[o + 1];
      t.moveTo(u + e, f), t.arc(u, f, e, 0, nm);
    }
    return r && r.value();
  }
  renderHull(t) {
    const e = t == null ? t = new Gt() : void 0, { hull: r, points: i } = this, o = r[0] * 2, a = r.length;
    t.moveTo(i[o], i[o + 1]);
    for (let u = 1; u < a; ++u) {
      const f = 2 * r[u];
      t.lineTo(i[f], i[f + 1]);
    }
    return t.closePath(), e && e.value();
  }
  hullPolygon() {
    const t = new Ya();
    return this.renderHull(t), t.value();
  }
  renderTriangle(t, e) {
    const r = e == null ? e = new Gt() : void 0, { points: i, triangles: o } = this, a = o[t *= 3] * 2, u = o[t + 1] * 2, f = o[t + 2] * 2;
    return e.moveTo(i[a], i[a + 1]), e.lineTo(i[u], i[u + 1]), e.lineTo(i[f], i[f + 1]), e.closePath(), r && r.value();
  }
  *trianglePolygons() {
    const { triangles: t } = this;
    for (let e = 0, r = t.length / 3; e < r; ++e)
      yield this.trianglePolygon(e);
  }
  trianglePolygon(t) {
    const e = new Ya();
    return this.renderTriangle(t, e), e.value();
  }
}
function om(n, t, e, r) {
  const i = n.length, o = new Float64Array(i * 2);
  for (let a = 0; a < i; ++a) {
    const u = n[a];
    o[a * 2] = t.call(r, u, a, n), o[a * 2 + 1] = e.call(r, u, a, n);
  }
  return o;
}
function* am(n, t, e, r) {
  let i = 0;
  for (const o of n)
    yield t.call(r, o, i, n), yield e.call(r, o, i, n), ++i;
}
var lc = {}, Ko = {}, Jo = 34, nr = 10, jo = 13;
function ql(n) {
  return new Function("d", "return {" + n.map(function(t, e) {
    return JSON.stringify(t) + ": d[" + e + '] || ""';
  }).join(",") + "}");
}
function um(n, t) {
  var e = ql(n);
  return function(r, i) {
    return t(e(r), i, n);
  };
}
function hc(n) {
  var t = /* @__PURE__ */ Object.create(null), e = [];
  return n.forEach(function(r) {
    for (var i in r)
      i in t || e.push(t[i] = i);
  }), e;
}
function Hn(n, t) {
  var e = n + "", r = e.length;
  return r < t ? new Array(t - r + 1).join(0) + e : e;
}
function fm(n) {
  return n < 0 ? "-" + Hn(-n, 6) : n > 9999 ? "+" + Hn(n, 6) : Hn(n, 4);
}
function cm(n) {
  var t = n.getUTCHours(), e = n.getUTCMinutes(), r = n.getUTCSeconds(), i = n.getUTCMilliseconds();
  return isNaN(n) ? "Invalid Date" : fm(n.getUTCFullYear()) + "-" + Hn(n.getUTCMonth() + 1, 2) + "-" + Hn(n.getUTCDate(), 2) + (i ? "T" + Hn(t, 2) + ":" + Hn(e, 2) + ":" + Hn(r, 2) + "." + Hn(i, 3) + "Z" : r ? "T" + Hn(t, 2) + ":" + Hn(e, 2) + ":" + Hn(r, 2) + "Z" : e || t ? "T" + Hn(t, 2) + ":" + Hn(e, 2) + "Z" : "");
}
function Yu(n) {
  var t = new RegExp('["' + n + `
\r]`), e = n.charCodeAt(0);
  function r(h, l) {
    var d, p, m = i(h, function(g, y) {
      if (d)
        return d(g, y - 1);
      p = g, d = l ? um(g, l) : ql(g);
    });
    return m.columns = p || [], m;
  }
  function i(h, l) {
    var d = [], p = h.length, m = 0, g = 0, y, v = p <= 0, _ = !1;
    h.charCodeAt(p - 1) === nr && --p, h.charCodeAt(p - 1) === jo && --p;
    function b() {
      if (v)
        return Ko;
      if (_)
        return _ = !1, lc;
      var x, E = m, $;
      if (h.charCodeAt(E) === Jo) {
        for (; m++ < p && h.charCodeAt(m) !== Jo || h.charCodeAt(++m) === Jo; )
          ;
        return (x = m) >= p ? v = !0 : ($ = h.charCodeAt(m++)) === nr ? _ = !0 : $ === jo && (_ = !0, h.charCodeAt(m) === nr && ++m), h.slice(E + 1, x - 1).replace(/""/g, '"');
      }
      for (; m < p; ) {
        if (($ = h.charCodeAt(x = m++)) === nr)
          _ = !0;
        else if ($ === jo)
          _ = !0, h.charCodeAt(m) === nr && ++m;
        else if ($ !== e)
          continue;
        return h.slice(E, x);
      }
      return v = !0, h.slice(E, p);
    }
    for (; (y = b()) !== Ko; ) {
      for (var w = []; y !== lc && y !== Ko; )
        w.push(y), y = b();
      l && (w = l(w, g++)) == null || d.push(w);
    }
    return d;
  }
  function o(h, l) {
    return h.map(function(d) {
      return l.map(function(p) {
        return s(d[p]);
      }).join(n);
    });
  }
  function a(h, l) {
    return l == null && (l = hc(h)), [l.map(s).join(n)].concat(o(h, l)).join(`
`);
  }
  function u(h, l) {
    return l == null && (l = hc(h)), o(h, l).join(`
`);
  }
  function f(h) {
    return h.map(c).join(`
`);
  }
  function c(h) {
    return h.map(s).join(n);
  }
  function s(h) {
    return h == null ? "" : h instanceof Date ? cm(h) : t.test(h += "") ? '"' + h.replace(/"/g, '""') + '"' : h;
  }
  return {
    parse: r,
    parseRows: i,
    format: a,
    formatBody: u,
    formatRows: f,
    formatRow: c,
    formatValue: s
  };
}
var ae = Yu(","), sm = ae.parse, o8 = ae.parseRows, a8 = ae.format, u8 = ae.formatBody, f8 = ae.formatRows, c8 = ae.formatRow, s8 = ae.formatValue, ue = Yu("	"), lm = ue.parse, l8 = ue.parseRows, h8 = ue.format, d8 = ue.formatBody, g8 = ue.formatRows, p8 = ue.formatRow, m8 = ue.formatValue;
function y8(n) {
  for (var t in n) {
    var e = n[t].trim(), r, i;
    if (!e)
      e = null;
    else if (e === "true")
      e = !0;
    else if (e === "false")
      e = !1;
    else if (e === "NaN")
      e = NaN;
    else if (!isNaN(r = +e))
      e = r;
    else if (i = e.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))
      hm && !!i[4] && !i[7] && (e = e.replace(/-/g, "/").replace(/T/, " ")), e = new Date(e);
    else
      continue;
    n[t] = e;
  }
  return n;
}
const hm = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();
function dm(n) {
  if (!n.ok)
    throw new Error(n.status + " " + n.statusText);
  return n.blob();
}
function b8(n, t) {
  return fetch(n, t).then(dm);
}
function gm(n) {
  if (!n.ok)
    throw new Error(n.status + " " + n.statusText);
  return n.arrayBuffer();
}
function _8(n, t) {
  return fetch(n, t).then(gm);
}
function pm(n) {
  if (!n.ok)
    throw new Error(n.status + " " + n.statusText);
  return n.text();
}
function qu(n, t) {
  return fetch(n, t).then(pm);
}
function Ul(n) {
  return function(t, e, r) {
    return arguments.length === 2 && typeof e == "function" && (r = e, e = void 0), qu(t, e).then(function(i) {
      return n(i, r);
    });
  };
}
function v8(n, t, e, r) {
  arguments.length === 3 && typeof e == "function" && (r = e, e = void 0);
  var i = Yu(n);
  return qu(t, e).then(function(o) {
    return i.parse(o, r);
  });
}
var w8 = Ul(sm), x8 = Ul(lm);
function M8(n, t) {
  return new Promise(function(e, r) {
    var i = new Image();
    for (var o in t)
      i[o] = t[o];
    i.onerror = r, i.onload = function() {
      e(i);
    }, i.src = n;
  });
}
function mm(n) {
  if (!n.ok)
    throw new Error(n.status + " " + n.statusText);
  if (!(n.status === 204 || n.status === 205))
    return n.json();
}
function T8(n, t) {
  return fetch(n, t).then(mm);
}
function Uu(n) {
  return (t, e) => qu(t, e).then((r) => new DOMParser().parseFromString(r, n));
}
const S8 = Uu("application/xml");
var A8 = Uu("text/html"), k8 = Uu("image/svg+xml");
function E8(n, t) {
  var e, r = 1;
  n == null && (n = 0), t == null && (t = 0);
  function i() {
    var o, a = e.length, u, f = 0, c = 0;
    for (o = 0; o < a; ++o)
      u = e[o], f += u.x, c += u.y;
    for (f = (f / a - n) * r, c = (c / a - t) * r, o = 0; o < a; ++o)
      u = e[o], u.x -= f, u.y -= c;
  }
  return i.initialize = function(o) {
    e = o;
  }, i.x = function(o) {
    return arguments.length ? (n = +o, i) : n;
  }, i.y = function(o) {
    return arguments.length ? (t = +o, i) : t;
  }, i.strength = function(o) {
    return arguments.length ? (r = +o, i) : r;
  }, i;
}
function ym(n) {
  const t = +this._x.call(null, n), e = +this._y.call(null, n);
  return Hl(this.cover(t, e), t, e, n);
}
function Hl(n, t, e, r) {
  if (isNaN(t) || isNaN(e))
    return n;
  var i, o = n._root, a = { data: r }, u = n._x0, f = n._y0, c = n._x1, s = n._y1, h, l, d, p, m, g, y, v;
  if (!o)
    return n._root = a, n;
  for (; o.length; )
    if ((m = t >= (h = (u + c) / 2)) ? u = h : c = h, (g = e >= (l = (f + s) / 2)) ? f = l : s = l, i = o, !(o = o[y = g << 1 | m]))
      return i[y] = a, n;
  if (d = +n._x.call(null, o.data), p = +n._y.call(null, o.data), t === d && e === p)
    return a.next = o, i ? i[y] = a : n._root = a, n;
  do
    i = i ? i[y] = new Array(4) : n._root = new Array(4), (m = t >= (h = (u + c) / 2)) ? u = h : c = h, (g = e >= (l = (f + s) / 2)) ? f = l : s = l;
  while ((y = g << 1 | m) === (v = (p >= l) << 1 | d >= h));
  return i[v] = o, i[y] = a, n;
}
function bm(n) {
  var t, e, r = n.length, i, o, a = new Array(r), u = new Array(r), f = 1 / 0, c = 1 / 0, s = -1 / 0, h = -1 / 0;
  for (e = 0; e < r; ++e)
    isNaN(i = +this._x.call(null, t = n[e])) || isNaN(o = +this._y.call(null, t)) || (a[e] = i, u[e] = o, i < f && (f = i), i > s && (s = i), o < c && (c = o), o > h && (h = o));
  if (f > s || c > h)
    return this;
  for (this.cover(f, c).cover(s, h), e = 0; e < r; ++e)
    Hl(this, a[e], u[e], n[e]);
  return this;
}
function _m(n, t) {
  if (isNaN(n = +n) || isNaN(t = +t))
    return this;
  var e = this._x0, r = this._y0, i = this._x1, o = this._y1;
  if (isNaN(e))
    i = (e = Math.floor(n)) + 1, o = (r = Math.floor(t)) + 1;
  else {
    for (var a = i - e || 1, u = this._root, f, c; e > n || n >= i || r > t || t >= o; )
      switch (c = (t < r) << 1 | n < e, f = new Array(4), f[c] = u, u = f, a *= 2, c) {
        case 0:
          i = e + a, o = r + a;
          break;
        case 1:
          e = i - a, o = r + a;
          break;
        case 2:
          i = e + a, r = o - a;
          break;
        case 3:
          e = i - a, r = o - a;
          break;
      }
    this._root && this._root.length && (this._root = u);
  }
  return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this;
}
function vm() {
  var n = [];
  return this.visit(function(t) {
    if (!t.length)
      do
        n.push(t.data);
      while (t = t.next);
  }), n;
}
function wm(n) {
  return arguments.length ? this.cover(+n[0][0], +n[0][1]).cover(+n[1][0], +n[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function On(n, t, e, r, i) {
  this.node = n, this.x0 = t, this.y0 = e, this.x1 = r, this.y1 = i;
}
function xm(n, t, e) {
  var r, i = this._x0, o = this._y0, a, u, f, c, s = this._x1, h = this._y1, l = [], d = this._root, p, m;
  for (d && l.push(new On(d, i, o, s, h)), e == null ? e = 1 / 0 : (i = n - e, o = t - e, s = n + e, h = t + e, e *= e); p = l.pop(); )
    if (!(!(d = p.node) || (a = p.x0) > s || (u = p.y0) > h || (f = p.x1) < i || (c = p.y1) < o))
      if (d.length) {
        var g = (a + f) / 2, y = (u + c) / 2;
        l.push(
          new On(d[3], g, y, f, c),
          new On(d[2], a, y, g, c),
          new On(d[1], g, u, f, y),
          new On(d[0], a, u, g, y)
        ), (m = (t >= y) << 1 | n >= g) && (p = l[l.length - 1], l[l.length - 1] = l[l.length - 1 - m], l[l.length - 1 - m] = p);
      } else {
        var v = n - +this._x.call(null, d.data), _ = t - +this._y.call(null, d.data), b = v * v + _ * _;
        if (b < e) {
          var w = Math.sqrt(e = b);
          i = n - w, o = t - w, s = n + w, h = t + w, r = d.data;
        }
      }
  return r;
}
function Mm(n) {
  if (isNaN(s = +this._x.call(null, n)) || isNaN(h = +this._y.call(null, n)))
    return this;
  var t, e = this._root, r, i, o, a = this._x0, u = this._y0, f = this._x1, c = this._y1, s, h, l, d, p, m, g, y;
  if (!e)
    return this;
  if (e.length)
    for (; ; ) {
      if ((p = s >= (l = (a + f) / 2)) ? a = l : f = l, (m = h >= (d = (u + c) / 2)) ? u = d : c = d, t = e, !(e = e[g = m << 1 | p]))
        return this;
      if (!e.length)
        break;
      (t[g + 1 & 3] || t[g + 2 & 3] || t[g + 3 & 3]) && (r = t, y = g);
    }
  for (; e.data !== n; )
    if (i = e, !(e = e.next))
      return this;
  return (o = e.next) && delete e.next, i ? (o ? i.next = o : delete i.next, this) : t ? (o ? t[g] = o : delete t[g], (e = t[0] || t[1] || t[2] || t[3]) && e === (t[3] || t[2] || t[1] || t[0]) && !e.length && (r ? r[y] = e : this._root = e), this) : (this._root = o, this);
}
function Tm(n) {
  for (var t = 0, e = n.length; t < e; ++t)
    this.remove(n[t]);
  return this;
}
function Sm() {
  return this._root;
}
function Am() {
  var n = 0;
  return this.visit(function(t) {
    if (!t.length)
      do
        ++n;
      while (t = t.next);
  }), n;
}
function km(n) {
  var t = [], e, r = this._root, i, o, a, u, f;
  for (r && t.push(new On(r, this._x0, this._y0, this._x1, this._y1)); e = t.pop(); )
    if (!n(r = e.node, o = e.x0, a = e.y0, u = e.x1, f = e.y1) && r.length) {
      var c = (o + u) / 2, s = (a + f) / 2;
      (i = r[3]) && t.push(new On(i, c, s, u, f)), (i = r[2]) && t.push(new On(i, o, s, c, f)), (i = r[1]) && t.push(new On(i, c, a, u, s)), (i = r[0]) && t.push(new On(i, o, a, c, s));
    }
  return this;
}
function Em(n) {
  var t = [], e = [], r;
  for (this._root && t.push(new On(this._root, this._x0, this._y0, this._x1, this._y1)); r = t.pop(); ) {
    var i = r.node;
    if (i.length) {
      var o, a = r.x0, u = r.y0, f = r.x1, c = r.y1, s = (a + f) / 2, h = (u + c) / 2;
      (o = i[0]) && t.push(new On(o, a, u, s, h)), (o = i[1]) && t.push(new On(o, s, u, f, h)), (o = i[2]) && t.push(new On(o, a, h, s, c)), (o = i[3]) && t.push(new On(o, s, h, f, c));
    }
    e.push(r);
  }
  for (; r = e.pop(); )
    n(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function $m(n) {
  return n[0];
}
function Nm(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function Cm(n) {
  return n[1];
}
function Rm(n) {
  return arguments.length ? (this._y = n, this) : this._y;
}
function Hu(n, t, e) {
  var r = new Xu(t == null ? $m : t, e == null ? Cm : e, NaN, NaN, NaN, NaN);
  return n == null ? r : r.addAll(n);
}
function Xu(n, t, e, r, i, o) {
  this._x = n, this._y = t, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0;
}
function dc(n) {
  for (var t = { data: n.data }, e = t; n = n.next; )
    e = e.next = { data: n.data };
  return t;
}
var Un = Hu.prototype = Xu.prototype;
Un.copy = function() {
  var n = new Xu(this._x, this._y, this._x0, this._y0, this._x1, this._y1), t = this._root, e, r;
  if (!t)
    return n;
  if (!t.length)
    return n._root = dc(t), n;
  for (e = [{ source: t, target: n._root = new Array(4) }]; t = e.pop(); )
    for (var i = 0; i < 4; ++i)
      (r = t.source[i]) && (r.length ? e.push({ source: r, target: t.target[i] = new Array(4) }) : t.target[i] = dc(r));
  return n;
};
Un.add = ym;
Un.addAll = bm;
Un.cover = _m;
Un.data = vm;
Un.extent = wm;
Un.find = xm;
Un.remove = Mm;
Un.removeAll = Tm;
Un.root = Sm;
Un.size = Am;
Un.visit = km;
Un.visitAfter = Em;
Un.x = Nm;
Un.y = Rm;
function yn(n) {
  return function() {
    return n;
  };
}
function Pt(n) {
  return (n() - 0.5) * 1e-6;
}
function Pm(n) {
  return n.x + n.vx;
}
function Im(n) {
  return n.y + n.vy;
}
function $8(n) {
  var t, e, r, i = 1, o = 1;
  typeof n != "function" && (n = yn(n == null ? 1 : +n));
  function a() {
    for (var c, s = t.length, h, l, d, p, m, g, y = 0; y < o; ++y)
      for (h = Hu(t, Pm, Im).visitAfter(u), c = 0; c < s; ++c)
        l = t[c], m = e[l.index], g = m * m, d = l.x + l.vx, p = l.y + l.vy, h.visit(v);
    function v(_, b, w, x, E) {
      var $ = _.data, P = _.r, S = m + P;
      if ($) {
        if ($.index > l.index) {
          var T = d - $.x - $.vx, R = p - $.y - $.vy, C = T * T + R * R;
          C < S * S && (T === 0 && (T = Pt(r), C += T * T), R === 0 && (R = Pt(r), C += R * R), C = (S - (C = Math.sqrt(C))) / C * i, l.vx += (T *= C) * (S = (P *= P) / (g + P)), l.vy += (R *= C) * S, $.vx -= T * (S = 1 - S), $.vy -= R * S);
        }
        return;
      }
      return b > d + S || x < d - S || w > p + S || E < p - S;
    }
  }
  function u(c) {
    if (c.data)
      return c.r = e[c.data.index];
    for (var s = c.r = 0; s < 4; ++s)
      c[s] && c[s].r > c.r && (c.r = c[s].r);
  }
  function f() {
    if (!!t) {
      var c, s = t.length, h;
      for (e = new Array(s), c = 0; c < s; ++c)
        h = t[c], e[h.index] = +n(h, c, t);
    }
  }
  return a.initialize = function(c, s) {
    t = c, r = s, f();
  }, a.iterations = function(c) {
    return arguments.length ? (o = +c, a) : o;
  }, a.strength = function(c) {
    return arguments.length ? (i = +c, a) : i;
  }, a.radius = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : yn(+c), f(), a) : n;
  }, a;
}
function zm(n) {
  return n.index;
}
function gc(n, t) {
  var e = n.get(t);
  if (!e)
    throw new Error("node not found: " + t);
  return e;
}
function N8(n) {
  var t = zm, e = h, r, i = yn(30), o, a, u, f, c, s = 1;
  n == null && (n = []);
  function h(g) {
    return 1 / Math.min(u[g.source.index], u[g.target.index]);
  }
  function l(g) {
    for (var y = 0, v = n.length; y < s; ++y)
      for (var _ = 0, b, w, x, E, $, P, S; _ < v; ++_)
        b = n[_], w = b.source, x = b.target, E = x.x + x.vx - w.x - w.vx || Pt(c), $ = x.y + x.vy - w.y - w.vy || Pt(c), P = Math.sqrt(E * E + $ * $), P = (P - o[_]) / P * g * r[_], E *= P, $ *= P, x.vx -= E * (S = f[_]), x.vy -= $ * S, w.vx += E * (S = 1 - S), w.vy += $ * S;
  }
  function d() {
    if (!!a) {
      var g, y = a.length, v = n.length, _ = new Map(a.map((w, x) => [t(w, x, a), w])), b;
      for (g = 0, u = new Array(y); g < v; ++g)
        b = n[g], b.index = g, typeof b.source != "object" && (b.source = gc(_, b.source)), typeof b.target != "object" && (b.target = gc(_, b.target)), u[b.source.index] = (u[b.source.index] || 0) + 1, u[b.target.index] = (u[b.target.index] || 0) + 1;
      for (g = 0, f = new Array(v); g < v; ++g)
        b = n[g], f[g] = u[b.source.index] / (u[b.source.index] + u[b.target.index]);
      r = new Array(v), p(), o = new Array(v), m();
    }
  }
  function p() {
    if (!!a)
      for (var g = 0, y = n.length; g < y; ++g)
        r[g] = +e(n[g], g, n);
  }
  function m() {
    if (!!a)
      for (var g = 0, y = n.length; g < y; ++g)
        o[g] = +i(n[g], g, n);
  }
  return l.initialize = function(g, y) {
    a = g, c = y, d();
  }, l.links = function(g) {
    return arguments.length ? (n = g, d(), l) : n;
  }, l.id = function(g) {
    return arguments.length ? (t = g, l) : t;
  }, l.iterations = function(g) {
    return arguments.length ? (s = +g, l) : s;
  }, l.strength = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : yn(+g), p(), l) : e;
  }, l.distance = function(g) {
    return arguments.length ? (i = typeof g == "function" ? g : yn(+g), m(), l) : i;
  }, l;
}
const Dm = 1664525, Om = 1013904223, pc = 4294967296;
function Fm() {
  let n = 1;
  return () => (n = (Dm * n + Om) % pc) / pc;
}
function Bm(n) {
  return n.x;
}
function Lm(n) {
  return n.y;
}
var Ym = 10, qm = Math.PI * (3 - Math.sqrt(5));
function C8(n) {
  var t, e = 1, r = 1e-3, i = 1 - Math.pow(r, 1 / 300), o = 0, a = 0.6, u = /* @__PURE__ */ new Map(), f = Ru(h), c = Ge("tick", "end"), s = Fm();
  n == null && (n = []);
  function h() {
    l(), c.call("tick", t), e < r && (f.stop(), c.call("end", t));
  }
  function l(m) {
    var g, y = n.length, v;
    m === void 0 && (m = 1);
    for (var _ = 0; _ < m; ++_)
      for (e += (o - e) * i, u.forEach(function(b) {
        b(e);
      }), g = 0; g < y; ++g)
        v = n[g], v.fx == null ? v.x += v.vx *= a : (v.x = v.fx, v.vx = 0), v.fy == null ? v.y += v.vy *= a : (v.y = v.fy, v.vy = 0);
    return t;
  }
  function d() {
    for (var m = 0, g = n.length, y; m < g; ++m) {
      if (y = n[m], y.index = m, y.fx != null && (y.x = y.fx), y.fy != null && (y.y = y.fy), isNaN(y.x) || isNaN(y.y)) {
        var v = Ym * Math.sqrt(0.5 + m), _ = m * qm;
        y.x = v * Math.cos(_), y.y = v * Math.sin(_);
      }
      (isNaN(y.vx) || isNaN(y.vy)) && (y.vx = y.vy = 0);
    }
  }
  function p(m) {
    return m.initialize && m.initialize(n, s), m;
  }
  return d(), t = {
    tick: l,
    restart: function() {
      return f.restart(h), t;
    },
    stop: function() {
      return f.stop(), t;
    },
    nodes: function(m) {
      return arguments.length ? (n = m, d(), u.forEach(p), t) : n;
    },
    alpha: function(m) {
      return arguments.length ? (e = +m, t) : e;
    },
    alphaMin: function(m) {
      return arguments.length ? (r = +m, t) : r;
    },
    alphaDecay: function(m) {
      return arguments.length ? (i = +m, t) : +i;
    },
    alphaTarget: function(m) {
      return arguments.length ? (o = +m, t) : o;
    },
    velocityDecay: function(m) {
      return arguments.length ? (a = 1 - m, t) : 1 - a;
    },
    randomSource: function(m) {
      return arguments.length ? (s = m, u.forEach(p), t) : s;
    },
    force: function(m, g) {
      return arguments.length > 1 ? (g == null ? u.delete(m) : u.set(m, p(g)), t) : u.get(m);
    },
    find: function(m, g, y) {
      var v = 0, _ = n.length, b, w, x, E, $;
      for (y == null ? y = 1 / 0 : y *= y, v = 0; v < _; ++v)
        E = n[v], b = m - E.x, w = g - E.y, x = b * b + w * w, x < y && ($ = E, y = x);
      return $;
    },
    on: function(m, g) {
      return arguments.length > 1 ? (c.on(m, g), t) : c.on(m);
    }
  };
}
function R8() {
  var n, t, e, r, i = yn(-30), o, a = 1, u = 1 / 0, f = 0.81;
  function c(d) {
    var p, m = n.length, g = Hu(n, Bm, Lm).visitAfter(h);
    for (r = d, p = 0; p < m; ++p)
      t = n[p], g.visit(l);
  }
  function s() {
    if (!!n) {
      var d, p = n.length, m;
      for (o = new Array(p), d = 0; d < p; ++d)
        m = n[d], o[m.index] = +i(m, d, n);
    }
  }
  function h(d) {
    var p = 0, m, g, y = 0, v, _, b;
    if (d.length) {
      for (v = _ = b = 0; b < 4; ++b)
        (m = d[b]) && (g = Math.abs(m.value)) && (p += m.value, y += g, v += g * m.x, _ += g * m.y);
      d.x = v / y, d.y = _ / y;
    } else {
      m = d, m.x = m.data.x, m.y = m.data.y;
      do
        p += o[m.data.index];
      while (m = m.next);
    }
    d.value = p;
  }
  function l(d, p, m, g) {
    if (!d.value)
      return !0;
    var y = d.x - t.x, v = d.y - t.y, _ = g - p, b = y * y + v * v;
    if (_ * _ / f < b)
      return b < u && (y === 0 && (y = Pt(e), b += y * y), v === 0 && (v = Pt(e), b += v * v), b < a && (b = Math.sqrt(a * b)), t.vx += y * d.value * r / b, t.vy += v * d.value * r / b), !0;
    if (d.length || b >= u)
      return;
    (d.data !== t || d.next) && (y === 0 && (y = Pt(e), b += y * y), v === 0 && (v = Pt(e), b += v * v), b < a && (b = Math.sqrt(a * b)));
    do
      d.data !== t && (_ = o[d.data.index] * r / b, t.vx += y * _, t.vy += v * _);
    while (d = d.next);
  }
  return c.initialize = function(d, p) {
    n = d, e = p, s();
  }, c.strength = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : yn(+d), s(), c) : i;
  }, c.distanceMin = function(d) {
    return arguments.length ? (a = d * d, c) : Math.sqrt(a);
  }, c.distanceMax = function(d) {
    return arguments.length ? (u = d * d, c) : Math.sqrt(u);
  }, c.theta = function(d) {
    return arguments.length ? (f = d * d, c) : Math.sqrt(f);
  }, c;
}
function P8(n, t, e) {
  var r, i = yn(0.1), o, a;
  typeof n != "function" && (n = yn(+n)), t == null && (t = 0), e == null && (e = 0);
  function u(c) {
    for (var s = 0, h = r.length; s < h; ++s) {
      var l = r[s], d = l.x - t || 1e-6, p = l.y - e || 1e-6, m = Math.sqrt(d * d + p * p), g = (a[s] - m) * o[s] * c / m;
      l.vx += d * g, l.vy += p * g;
    }
  }
  function f() {
    if (!!r) {
      var c, s = r.length;
      for (o = new Array(s), a = new Array(s), c = 0; c < s; ++c)
        a[c] = +n(r[c], c, r), o[c] = isNaN(a[c]) ? 0 : +i(r[c], c, r);
    }
  }
  return u.initialize = function(c) {
    r = c, f();
  }, u.strength = function(c) {
    return arguments.length ? (i = typeof c == "function" ? c : yn(+c), f(), u) : i;
  }, u.radius = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : yn(+c), f(), u) : n;
  }, u.x = function(c) {
    return arguments.length ? (t = +c, u) : t;
  }, u.y = function(c) {
    return arguments.length ? (e = +c, u) : e;
  }, u;
}
function I8(n) {
  var t = yn(0.1), e, r, i;
  typeof n != "function" && (n = yn(n == null ? 0 : +n));
  function o(u) {
    for (var f = 0, c = e.length, s; f < c; ++f)
      s = e[f], s.vx += (i[f] - s.x) * r[f] * u;
  }
  function a() {
    if (!!e) {
      var u, f = e.length;
      for (r = new Array(f), i = new Array(f), u = 0; u < f; ++u)
        r[u] = isNaN(i[u] = +n(e[u], u, e)) ? 0 : +t(e[u], u, e);
    }
  }
  return o.initialize = function(u) {
    e = u, a();
  }, o.strength = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : yn(+u), a(), o) : t;
  }, o.x = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : yn(+u), a(), o) : n;
  }, o;
}
function z8(n) {
  var t = yn(0.1), e, r, i;
  typeof n != "function" && (n = yn(n == null ? 0 : +n));
  function o(u) {
    for (var f = 0, c = e.length, s; f < c; ++f)
      s = e[f], s.vy += (i[f] - s.y) * r[f] * u;
  }
  function a() {
    if (!!e) {
      var u, f = e.length;
      for (r = new Array(f), i = new Array(f), u = 0; u < f; ++u)
        r[u] = isNaN(i[u] = +n(e[u], u, e)) ? 0 : +t(e[u], u, e);
    }
  }
  return o.initialize = function(u) {
    e = u, a();
  }, o.strength = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : yn(+u), a(), o) : t;
  }, o.y = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : yn(+u), a(), o) : n;
  }, o;
}
function Um(n) {
  return Math.abs(n = Math.round(n)) >= 1e21 ? n.toLocaleString("en").replace(/,/g, "") : n.toString(10);
}
function zi(n, t) {
  if ((e = (n = t ? n.toExponential(t - 1) : n.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = n.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +n.slice(e + 1)
  ];
}
function Oe(n) {
  return n = zi(Math.abs(n)), n ? n[1] : NaN;
}
function Hm(n, t) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, u = n[0], f = 0; i > 0 && u > 0 && (f + u + 1 > r && (u = Math.max(1, r - f)), o.push(e.substring(i -= u, i + u)), !((f += u + 1) > r)); )
      u = n[a = (a + 1) % n.length];
    return o.reverse().join(t);
  };
}
function Xm(n) {
  return function(t) {
    return t.replace(/[0-9]/g, function(e) {
      return n[+e];
    });
  };
}
var Gm = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Cr(n) {
  if (!(t = Gm.exec(n)))
    throw new Error("invalid format: " + n);
  var t;
  return new Gu({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Cr.prototype = Gu.prototype;
function Gu(n) {
  this.fill = n.fill === void 0 ? " " : n.fill + "", this.align = n.align === void 0 ? ">" : n.align + "", this.sign = n.sign === void 0 ? "-" : n.sign + "", this.symbol = n.symbol === void 0 ? "" : n.symbol + "", this.zero = !!n.zero, this.width = n.width === void 0 ? void 0 : +n.width, this.comma = !!n.comma, this.precision = n.precision === void 0 ? void 0 : +n.precision, this.trim = !!n.trim, this.type = n.type === void 0 ? "" : n.type + "";
}
Gu.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Vm(n) {
  n:
    for (var t = n.length, e = 1, r = -1, i; e < t; ++e)
      switch (n[e]) {
        case ".":
          r = i = e;
          break;
        case "0":
          r === 0 && (r = e), i = e;
          break;
        default:
          if (!+n[e])
            break n;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? n.slice(0, r) + n.slice(i + 1) : n;
}
var Xl;
function Wm(n, t) {
  var e = zi(n, t);
  if (!e)
    return n + "";
  var r = e[0], i = e[1], o = i - (Xl = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + zi(n, Math.max(0, t + o - 1))[0];
}
function mc(n, t) {
  var e = zi(n, t);
  if (!e)
    return n + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const yc = {
  "%": (n, t) => (n * 100).toFixed(t),
  b: (n) => Math.round(n).toString(2),
  c: (n) => n + "",
  d: Um,
  e: (n, t) => n.toExponential(t),
  f: (n, t) => n.toFixed(t),
  g: (n, t) => n.toPrecision(t),
  o: (n) => Math.round(n).toString(8),
  p: (n, t) => mc(n * 100, t),
  r: mc,
  s: Wm,
  X: (n) => Math.round(n).toString(16).toUpperCase(),
  x: (n) => Math.round(n).toString(16)
};
function bc(n) {
  return n;
}
var _c = Array.prototype.map, vc = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Zm(n) {
  var t = n.grouping === void 0 || n.thousands === void 0 ? bc : Hm(_c.call(n.grouping, Number), n.thousands + ""), e = n.currency === void 0 ? "" : n.currency[0] + "", r = n.currency === void 0 ? "" : n.currency[1] + "", i = n.decimal === void 0 ? "." : n.decimal + "", o = n.numerals === void 0 ? bc : Xm(_c.call(n.numerals, String)), a = n.percent === void 0 ? "%" : n.percent + "", u = n.minus === void 0 ? "\u2212" : n.minus + "", f = n.nan === void 0 ? "NaN" : n.nan + "";
  function c(h) {
    h = Cr(h);
    var l = h.fill, d = h.align, p = h.sign, m = h.symbol, g = h.zero, y = h.width, v = h.comma, _ = h.precision, b = h.trim, w = h.type;
    w === "n" ? (v = !0, w = "g") : yc[w] || (_ === void 0 && (_ = 12), b = !0, w = "g"), (g || l === "0" && d === "=") && (g = !0, l = "0", d = "=");
    var x = m === "$" ? e : m === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "", E = m === "$" ? r : /[%p]/.test(w) ? a : "", $ = yc[w], P = /[defgprs%]/.test(w);
    _ = _ === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
    function S(T) {
      var R = x, C = E, M, A, k;
      if (w === "c")
        C = $(T) + C, T = "";
      else {
        T = +T;
        var N = T < 0 || 1 / T < 0;
        if (T = isNaN(T) ? f : $(Math.abs(T), _), b && (T = Vm(T)), N && +T == 0 && p !== "+" && (N = !1), R = (N ? p === "(" ? p : u : p === "-" || p === "(" ? "" : p) + R, C = (w === "s" ? vc[8 + Xl / 3] : "") + C + (N && p === "(" ? ")" : ""), P) {
          for (M = -1, A = T.length; ++M < A; )
            if (k = T.charCodeAt(M), 48 > k || k > 57) {
              C = (k === 46 ? i + T.slice(M + 1) : T.slice(M)) + C, T = T.slice(0, M);
              break;
            }
        }
      }
      v && !g && (T = t(T, 1 / 0));
      var I = R.length + T.length + C.length, z = I < y ? new Array(y - I + 1).join(l) : "";
      switch (v && g && (T = t(z + T, z.length ? y - C.length : 1 / 0), z = ""), d) {
        case "<":
          T = R + T + C + z;
          break;
        case "=":
          T = R + z + T + C;
          break;
        case "^":
          T = z.slice(0, I = z.length >> 1) + R + T + C + z.slice(I);
          break;
        default:
          T = z + R + T + C;
          break;
      }
      return o(T);
    }
    return S.toString = function() {
      return h + "";
    }, S;
  }
  function s(h, l) {
    var d = c((h = Cr(h), h.type = "f", h)), p = Math.max(-8, Math.min(8, Math.floor(Oe(l) / 3))) * 3, m = Math.pow(10, -p), g = vc[8 + p / 3];
    return function(y) {
      return d(m * y) + g;
    };
  }
  return {
    format: c,
    formatPrefix: s
  };
}
var Jr, Vu, Gl;
Qm({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Qm(n) {
  return Jr = Zm(n), Vu = Jr.format, Gl = Jr.formatPrefix, Jr;
}
function Km(n) {
  return Math.max(0, -Oe(Math.abs(n)));
}
function Jm(n, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Oe(t) / 3))) * 3 - Oe(Math.abs(n)));
}
function jm(n, t) {
  return n = Math.abs(n), t = Math.abs(t) - n, Math.max(0, Oe(t) - Oe(n)) + 1;
}
var U = 1e-6, Rr = 1e-12, Q = Math.PI, dn = Q / 2, Di = Q / 4, Ln = Q * 2, on = 180 / Q, H = Q / 180, J = Math.abs, Ze = Math.atan, Yn = Math.atan2, Y = Math.cos, jr = Math.ceil, Vl = Math.exp, qa = Math.hypot, Oi = Math.log, na = Math.pow, L = Math.sin, Jn = Math.sign || function(n) {
  return n > 0 ? 1 : n < 0 ? -1 : 0;
}, wn = Math.sqrt, Wu = Math.tan;
function Wl(n) {
  return n > 1 ? 0 : n < -1 ? Q : Math.acos(n);
}
function qn(n) {
  return n > 1 ? dn : n < -1 ? -dn : Math.asin(n);
}
function wc(n) {
  return (n = L(n / 2)) * n;
}
function cn() {
}
function Fi(n, t) {
  n && Mc.hasOwnProperty(n.type) && Mc[n.type](n, t);
}
var xc = {
  Feature: function(n, t) {
    Fi(n.geometry, t);
  },
  FeatureCollection: function(n, t) {
    for (var e = n.features, r = -1, i = e.length; ++r < i; )
      Fi(e[r].geometry, t);
  }
}, Mc = {
  Sphere: function(n, t) {
    t.sphere();
  },
  Point: function(n, t) {
    n = n.coordinates, t.point(n[0], n[1], n[2]);
  },
  MultiPoint: function(n, t) {
    for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
      n = e[r], t.point(n[0], n[1], n[2]);
  },
  LineString: function(n, t) {
    Ua(n.coordinates, t, 0);
  },
  MultiLineString: function(n, t) {
    for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
      Ua(e[r], t, 0);
  },
  Polygon: function(n, t) {
    Tc(n.coordinates, t);
  },
  MultiPolygon: function(n, t) {
    for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
      Tc(e[r], t);
  },
  GeometryCollection: function(n, t) {
    for (var e = n.geometries, r = -1, i = e.length; ++r < i; )
      Fi(e[r], t);
  }
};
function Ua(n, t, e) {
  var r = -1, i = n.length - e, o;
  for (t.lineStart(); ++r < i; )
    o = n[r], t.point(o[0], o[1], o[2]);
  t.lineEnd();
}
function Tc(n, t) {
  var e = -1, r = n.length;
  for (t.polygonStart(); ++e < r; )
    Ua(n[e], t, 1);
  t.polygonEnd();
}
function ut(n, t) {
  n && xc.hasOwnProperty(n.type) ? xc[n.type](n, t) : Fi(n, t);
}
var Bi = new vn(), Li = new vn(), Zl, Ql, Ha, Xa, Ga, gt = {
  point: cn,
  lineStart: cn,
  lineEnd: cn,
  polygonStart: function() {
    Bi = new vn(), gt.lineStart = ny, gt.lineEnd = ty;
  },
  polygonEnd: function() {
    var n = +Bi;
    Li.add(n < 0 ? Ln + n : n), this.lineStart = this.lineEnd = this.point = cn;
  },
  sphere: function() {
    Li.add(Ln);
  }
};
function ny() {
  gt.point = ey;
}
function ty() {
  Kl(Zl, Ql);
}
function ey(n, t) {
  gt.point = Kl, Zl = n, Ql = t, n *= H, t *= H, Ha = n, Xa = Y(t = t / 2 + Di), Ga = L(t);
}
function Kl(n, t) {
  n *= H, t *= H, t = t / 2 + Di;
  var e = n - Ha, r = e >= 0 ? 1 : -1, i = r * e, o = Y(t), a = L(t), u = Ga * a, f = Xa * o + u * Y(i), c = u * r * L(i);
  Bi.add(Yn(c, f)), Ha = n, Xa = o, Ga = a;
}
function D8(n) {
  return Li = new vn(), ut(n, gt), Li * 2;
}
function Yi(n) {
  return [Yn(n[1], n[0]), qn(n[2])];
}
function jt(n) {
  var t = n[0], e = n[1], r = Y(e);
  return [r * Y(t), r * L(t), L(e)];
}
function ni(n, t) {
  return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
}
function Fe(n, t) {
  return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]];
}
function ta(n, t) {
  n[0] += t[0], n[1] += t[1], n[2] += t[2];
}
function ti(n, t) {
  return [n[0] * t, n[1] * t, n[2] * t];
}
function qi(n) {
  var t = wn(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
  n[0] /= t, n[1] /= t, n[2] /= t;
}
var fn, Gn, hn, Zn, Ut, Jl, jl, Ee, mr, Nt, St, vt = {
  point: Va,
  lineStart: Sc,
  lineEnd: Ac,
  polygonStart: function() {
    vt.point = th, vt.lineStart = ry, vt.lineEnd = iy, mr = new vn(), gt.polygonStart();
  },
  polygonEnd: function() {
    gt.polygonEnd(), vt.point = Va, vt.lineStart = Sc, vt.lineEnd = Ac, Bi < 0 ? (fn = -(hn = 180), Gn = -(Zn = 90)) : mr > U ? Zn = 90 : mr < -U && (Gn = -90), St[0] = fn, St[1] = hn;
  },
  sphere: function() {
    fn = -(hn = 180), Gn = -(Zn = 90);
  }
};
function Va(n, t) {
  Nt.push(St = [fn = n, hn = n]), t < Gn && (Gn = t), t > Zn && (Zn = t);
}
function nh(n, t) {
  var e = jt([n * H, t * H]);
  if (Ee) {
    var r = Fe(Ee, e), i = [r[1], -r[0], 0], o = Fe(i, r);
    qi(o), o = Yi(o);
    var a = n - Ut, u = a > 0 ? 1 : -1, f = o[0] * on * u, c, s = J(a) > 180;
    s ^ (u * Ut < f && f < u * n) ? (c = o[1] * on, c > Zn && (Zn = c)) : (f = (f + 360) % 360 - 180, s ^ (u * Ut < f && f < u * n) ? (c = -o[1] * on, c < Gn && (Gn = c)) : (t < Gn && (Gn = t), t > Zn && (Zn = t))), s ? n < Ut ? Vn(fn, n) > Vn(fn, hn) && (hn = n) : Vn(n, hn) > Vn(fn, hn) && (fn = n) : hn >= fn ? (n < fn && (fn = n), n > hn && (hn = n)) : n > Ut ? Vn(fn, n) > Vn(fn, hn) && (hn = n) : Vn(n, hn) > Vn(fn, hn) && (fn = n);
  } else
    Nt.push(St = [fn = n, hn = n]);
  t < Gn && (Gn = t), t > Zn && (Zn = t), Ee = e, Ut = n;
}
function Sc() {
  vt.point = nh;
}
function Ac() {
  St[0] = fn, St[1] = hn, vt.point = Va, Ee = null;
}
function th(n, t) {
  if (Ee) {
    var e = n - Ut;
    mr.add(J(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
  } else
    Jl = n, jl = t;
  gt.point(n, t), nh(n, t);
}
function ry() {
  gt.lineStart();
}
function iy() {
  th(Jl, jl), gt.lineEnd(), J(mr) > U && (fn = -(hn = 180)), St[0] = fn, St[1] = hn, Ee = null;
}
function Vn(n, t) {
  return (t -= n) < 0 ? t + 360 : t;
}
function oy(n, t) {
  return n[0] - t[0];
}
function kc(n, t) {
  return n[0] <= n[1] ? n[0] <= t && t <= n[1] : t < n[0] || n[1] < t;
}
function O8(n) {
  var t, e, r, i, o, a, u;
  if (Zn = hn = -(fn = Gn = 1 / 0), Nt = [], ut(n, vt), e = Nt.length) {
    for (Nt.sort(oy), t = 1, r = Nt[0], o = [r]; t < e; ++t)
      i = Nt[t], kc(r, i[0]) || kc(r, i[1]) ? (Vn(r[0], i[1]) > Vn(r[0], r[1]) && (r[1] = i[1]), Vn(i[0], r[1]) > Vn(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
    for (a = -1 / 0, e = o.length - 1, t = 0, r = o[e]; t <= e; r = i, ++t)
      i = o[t], (u = Vn(r[1], i[0])) > a && (a = u, fn = i[0], hn = r[1]);
  }
  return Nt = St = null, fn === 1 / 0 || Gn === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[fn, Gn], [hn, Zn]];
}
var fr, Ui, Hi, Xi, Gi, Vi, Wi, Zi, Wa, Za, Qa, eh, rh, In, zn, Dn, it = {
  sphere: cn,
  point: Zu,
  lineStart: Ec,
  lineEnd: $c,
  polygonStart: function() {
    it.lineStart = fy, it.lineEnd = cy;
  },
  polygonEnd: function() {
    it.lineStart = Ec, it.lineEnd = $c;
  }
};
function Zu(n, t) {
  n *= H, t *= H;
  var e = Y(t);
  Br(e * Y(n), e * L(n), L(t));
}
function Br(n, t, e) {
  ++fr, Hi += (n - Hi) / fr, Xi += (t - Xi) / fr, Gi += (e - Gi) / fr;
}
function Ec() {
  it.point = ay;
}
function ay(n, t) {
  n *= H, t *= H;
  var e = Y(t);
  In = e * Y(n), zn = e * L(n), Dn = L(t), it.point = uy, Br(In, zn, Dn);
}
function uy(n, t) {
  n *= H, t *= H;
  var e = Y(t), r = e * Y(n), i = e * L(n), o = L(t), a = Yn(wn((a = zn * o - Dn * i) * a + (a = Dn * r - In * o) * a + (a = In * i - zn * r) * a), In * r + zn * i + Dn * o);
  Ui += a, Vi += a * (In + (In = r)), Wi += a * (zn + (zn = i)), Zi += a * (Dn + (Dn = o)), Br(In, zn, Dn);
}
function $c() {
  it.point = Zu;
}
function fy() {
  it.point = sy;
}
function cy() {
  ih(eh, rh), it.point = Zu;
}
function sy(n, t) {
  eh = n, rh = t, n *= H, t *= H, it.point = ih;
  var e = Y(t);
  In = e * Y(n), zn = e * L(n), Dn = L(t), Br(In, zn, Dn);
}
function ih(n, t) {
  n *= H, t *= H;
  var e = Y(t), r = e * Y(n), i = e * L(n), o = L(t), a = zn * o - Dn * i, u = Dn * r - In * o, f = In * i - zn * r, c = qa(a, u, f), s = qn(c), h = c && -s / c;
  Wa.add(h * a), Za.add(h * u), Qa.add(h * f), Ui += s, Vi += s * (In + (In = r)), Wi += s * (zn + (zn = i)), Zi += s * (Dn + (Dn = o)), Br(In, zn, Dn);
}
function F8(n) {
  fr = Ui = Hi = Xi = Gi = Vi = Wi = Zi = 0, Wa = new vn(), Za = new vn(), Qa = new vn(), ut(n, it);
  var t = +Wa, e = +Za, r = +Qa, i = qa(t, e, r);
  return i < Rr && (t = Vi, e = Wi, r = Zi, Ui < U && (t = Hi, e = Xi, r = Gi), i = qa(t, e, r), i < Rr) ? [NaN, NaN] : [Yn(e, t) * on, qn(r / i) * on];
}
function be(n) {
  return function() {
    return n;
  };
}
function Ka(n, t) {
  function e(r, i) {
    return r = n(r, i), t(r[0], r[1]);
  }
  return n.invert && t.invert && (e.invert = function(r, i) {
    return r = t.invert(r, i), r && n.invert(r[0], r[1]);
  }), e;
}
function Ja(n, t) {
  return [J(n) > Q ? n + Math.round(-n / Ln) * Ln : n, t];
}
Ja.invert = Ja;
function Qu(n, t, e) {
  return (n %= Ln) ? t || e ? Ka(Cc(n), Rc(t, e)) : Cc(n) : t || e ? Rc(t, e) : Ja;
}
function Nc(n) {
  return function(t, e) {
    return t += n, [t > Q ? t - Ln : t < -Q ? t + Ln : t, e];
  };
}
function Cc(n) {
  var t = Nc(n);
  return t.invert = Nc(-n), t;
}
function Rc(n, t) {
  var e = Y(n), r = L(n), i = Y(t), o = L(t);
  function a(u, f) {
    var c = Y(f), s = Y(u) * c, h = L(u) * c, l = L(f), d = l * e + s * r;
    return [
      Yn(h * i - d * o, s * e - l * r),
      qn(d * i + h * o)
    ];
  }
  return a.invert = function(u, f) {
    var c = Y(f), s = Y(u) * c, h = L(u) * c, l = L(f), d = l * i - h * o;
    return [
      Yn(h * i + l * o, s * e + d * r),
      qn(d * e - s * r)
    ];
  }, a;
}
function ly(n) {
  n = Qu(n[0] * H, n[1] * H, n.length > 2 ? n[2] * H : 0);
  function t(e) {
    return e = n(e[0] * H, e[1] * H), e[0] *= on, e[1] *= on, e;
  }
  return t.invert = function(e) {
    return e = n.invert(e[0] * H, e[1] * H), e[0] *= on, e[1] *= on, e;
  }, t;
}
function oh(n, t, e, r, i, o) {
  if (!!e) {
    var a = Y(t), u = L(t), f = r * e;
    i == null ? (i = t + r * Ln, o = t - f / 2) : (i = Pc(a, i), o = Pc(a, o), (r > 0 ? i < o : i > o) && (i += r * Ln));
    for (var c, s = i; r > 0 ? s > o : s < o; s -= f)
      c = Yi([a, -u * Y(s), -u * L(s)]), n.point(c[0], c[1]);
  }
}
function Pc(n, t) {
  t = jt(t), t[0] -= n, qi(t);
  var e = Wl(-t[1]);
  return ((-t[2] < 0 ? -e : e) + Ln - U) % Ln;
}
function B8() {
  var n = be([0, 0]), t = be(90), e = be(6), r, i, o = { point: a };
  function a(f, c) {
    r.push(f = i(f, c)), f[0] *= on, f[1] *= on;
  }
  function u() {
    var f = n.apply(this, arguments), c = t.apply(this, arguments) * H, s = e.apply(this, arguments) * H;
    return r = [], i = Qu(-f[0] * H, -f[1] * H, 0).invert, oh(o, c, s, 1), f = { type: "Polygon", coordinates: [r] }, r = i = null, f;
  }
  return u.center = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : be([+f[0], +f[1]]), u) : n;
  }, u.radius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : be(+f), u) : t;
  }, u.precision = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : be(+f), u) : e;
  }, u;
}
function ah() {
  var n = [], t;
  return {
    point: function(e, r, i) {
      t.push([e, r, i]);
    },
    lineStart: function() {
      n.push(t = []);
    },
    lineEnd: cn,
    rejoin: function() {
      n.length > 1 && n.push(n.pop().concat(n.shift()));
    },
    result: function() {
      var e = n;
      return n = [], t = null, e;
    }
  };
}
function vi(n, t) {
  return J(n[0] - t[0]) < U && J(n[1] - t[1]) < U;
}
function ei(n, t, e, r) {
  this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
}
function uh(n, t, e, r, i) {
  var o = [], a = [], u, f;
  if (n.forEach(function(p) {
    if (!((m = p.length - 1) <= 0)) {
      var m, g = p[0], y = p[m], v;
      if (vi(g, y)) {
        if (!g[2] && !y[2]) {
          for (i.lineStart(), u = 0; u < m; ++u)
            i.point((g = p[u])[0], g[1]);
          i.lineEnd();
          return;
        }
        y[0] += 2 * U;
      }
      o.push(v = new ei(g, p, null, !0)), a.push(v.o = new ei(g, null, v, !1)), o.push(v = new ei(y, p, null, !1)), a.push(v.o = new ei(y, null, v, !0));
    }
  }), !!o.length) {
    for (a.sort(t), Ic(o), Ic(a), u = 0, f = a.length; u < f; ++u)
      a[u].e = e = !e;
    for (var c = o[0], s, h; ; ) {
      for (var l = c, d = !0; l.v; )
        if ((l = l.n) === c)
          return;
      s = l.z, i.lineStart();
      do {
        if (l.v = l.o.v = !0, l.e) {
          if (d)
            for (u = 0, f = s.length; u < f; ++u)
              i.point((h = s[u])[0], h[1]);
          else
            r(l.x, l.n.x, 1, i);
          l = l.n;
        } else {
          if (d)
            for (s = l.p.z, u = s.length - 1; u >= 0; --u)
              i.point((h = s[u])[0], h[1]);
          else
            r(l.x, l.p.x, -1, i);
          l = l.p;
        }
        l = l.o, s = l.z, d = !d;
      } while (!l.v);
      i.lineEnd();
    }
  }
}
function Ic(n) {
  if (!!(t = n.length)) {
    for (var t, e = 0, r = n[0], i; ++e < t; )
      r.n = i = n[e], i.p = r, r = i;
    r.n = i = n[0], i.p = r;
  }
}
function ea(n) {
  return J(n[0]) <= Q ? n[0] : Jn(n[0]) * ((J(n[0]) + Q) % Ln - Q);
}
function fh(n, t) {
  var e = ea(t), r = t[1], i = L(r), o = [L(e), -Y(e), 0], a = 0, u = 0, f = new vn();
  i === 1 ? r = dn + U : i === -1 && (r = -dn - U);
  for (var c = 0, s = n.length; c < s; ++c)
    if (!!(l = (h = n[c]).length))
      for (var h, l, d = h[l - 1], p = ea(d), m = d[1] / 2 + Di, g = L(m), y = Y(m), v = 0; v < l; ++v, p = b, g = x, y = E, d = _) {
        var _ = h[v], b = ea(_), w = _[1] / 2 + Di, x = L(w), E = Y(w), $ = b - p, P = $ >= 0 ? 1 : -1, S = P * $, T = S > Q, R = g * x;
        if (f.add(Yn(R * P * L(S), y * E + R * Y(S))), a += T ? $ + P * Ln : $, T ^ p >= e ^ b >= e) {
          var C = Fe(jt(d), jt(_));
          qi(C);
          var M = Fe(o, C);
          qi(M);
          var A = (T ^ $ >= 0 ? -1 : 1) * qn(M[2]);
          (r > A || r === A && (C[0] || C[1])) && (u += T ^ $ >= 0 ? 1 : -1);
        }
      }
  return (a < -U || a < U && f < -Rr) ^ u & 1;
}
function ch(n, t, e, r) {
  return function(i) {
    var o = t(i), a = ah(), u = t(a), f = !1, c, s, h, l = {
      point: d,
      lineStart: m,
      lineEnd: g,
      polygonStart: function() {
        l.point = y, l.lineStart = v, l.lineEnd = _, s = [], c = [];
      },
      polygonEnd: function() {
        l.point = d, l.lineStart = m, l.lineEnd = g, s = Vs(s);
        var b = fh(c, r);
        s.length ? (f || (i.polygonStart(), f = !0), uh(s, dy, b, e, i)) : b && (f || (i.polygonStart(), f = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), f && (i.polygonEnd(), f = !1), s = c = null;
      },
      sphere: function() {
        i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
      }
    };
    function d(b, w) {
      n(b, w) && i.point(b, w);
    }
    function p(b, w) {
      o.point(b, w);
    }
    function m() {
      l.point = p, o.lineStart();
    }
    function g() {
      l.point = d, o.lineEnd();
    }
    function y(b, w) {
      h.push([b, w]), u.point(b, w);
    }
    function v() {
      u.lineStart(), h = [];
    }
    function _() {
      y(h[0][0], h[0][1]), u.lineEnd();
      var b = u.clean(), w = a.result(), x, E = w.length, $, P, S;
      if (h.pop(), c.push(h), h = null, !!E) {
        if (b & 1) {
          if (P = w[0], ($ = P.length - 1) > 0) {
            for (f || (i.polygonStart(), f = !0), i.lineStart(), x = 0; x < $; ++x)
              i.point((S = P[x])[0], S[1]);
            i.lineEnd();
          }
          return;
        }
        E > 1 && b & 2 && w.push(w.pop().concat(w.shift())), s.push(w.filter(hy));
      }
    }
    return l;
  };
}
function hy(n) {
  return n.length > 1;
}
function dy(n, t) {
  return ((n = n.x)[0] < 0 ? n[1] - dn - U : dn - n[1]) - ((t = t.x)[0] < 0 ? t[1] - dn - U : dn - t[1]);
}
const zc = ch(
  function() {
    return !0;
  },
  gy,
  my,
  [-Q, -dn]
);
function gy(n) {
  var t = NaN, e = NaN, r = NaN, i;
  return {
    lineStart: function() {
      n.lineStart(), i = 1;
    },
    point: function(o, a) {
      var u = o > 0 ? Q : -Q, f = J(o - t);
      J(f - Q) < U ? (n.point(t, e = (e + a) / 2 > 0 ? dn : -dn), n.point(r, e), n.lineEnd(), n.lineStart(), n.point(u, e), n.point(o, e), i = 0) : r !== u && f >= Q && (J(t - r) < U && (t -= r * U), J(o - u) < U && (o -= u * U), e = py(t, e, o, a), n.point(r, e), n.lineEnd(), n.lineStart(), n.point(u, e), i = 0), n.point(t = o, e = a), r = u;
    },
    lineEnd: function() {
      n.lineEnd(), t = e = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function py(n, t, e, r) {
  var i, o, a = L(n - e);
  return J(a) > U ? Ze((L(t) * (o = Y(r)) * L(e) - L(r) * (i = Y(t)) * L(n)) / (i * o * a)) : (t + r) / 2;
}
function my(n, t, e, r) {
  var i;
  if (n == null)
    i = e * dn, r.point(-Q, i), r.point(0, i), r.point(Q, i), r.point(Q, 0), r.point(Q, -i), r.point(0, -i), r.point(-Q, -i), r.point(-Q, 0), r.point(-Q, i);
  else if (J(n[0] - t[0]) > U) {
    var o = n[0] < t[0] ? Q : -Q;
    i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
  } else
    r.point(t[0], t[1]);
}
function yy(n) {
  var t = Y(n), e = 6 * H, r = t > 0, i = J(t) > U;
  function o(s, h, l, d) {
    oh(d, n, e, l, s, h);
  }
  function a(s, h) {
    return Y(s) * Y(h) > t;
  }
  function u(s) {
    var h, l, d, p, m;
    return {
      lineStart: function() {
        p = d = !1, m = 1;
      },
      point: function(g, y) {
        var v = [g, y], _, b = a(g, y), w = r ? b ? 0 : c(g, y) : b ? c(g + (g < 0 ? Q : -Q), y) : 0;
        if (!h && (p = d = b) && s.lineStart(), b !== d && (_ = f(h, v), (!_ || vi(h, _) || vi(v, _)) && (v[2] = 1)), b !== d)
          m = 0, b ? (s.lineStart(), _ = f(v, h), s.point(_[0], _[1])) : (_ = f(h, v), s.point(_[0], _[1], 2), s.lineEnd()), h = _;
        else if (i && h && r ^ b) {
          var x;
          !(w & l) && (x = f(v, h, !0)) && (m = 0, r ? (s.lineStart(), s.point(x[0][0], x[0][1]), s.point(x[1][0], x[1][1]), s.lineEnd()) : (s.point(x[1][0], x[1][1]), s.lineEnd(), s.lineStart(), s.point(x[0][0], x[0][1], 3)));
        }
        b && (!h || !vi(h, v)) && s.point(v[0], v[1]), h = v, d = b, l = w;
      },
      lineEnd: function() {
        d && s.lineEnd(), h = null;
      },
      clean: function() {
        return m | (p && d) << 1;
      }
    };
  }
  function f(s, h, l) {
    var d = jt(s), p = jt(h), m = [1, 0, 0], g = Fe(d, p), y = ni(g, g), v = g[0], _ = y - v * v;
    if (!_)
      return !l && s;
    var b = t * y / _, w = -t * v / _, x = Fe(m, g), E = ti(m, b), $ = ti(g, w);
    ta(E, $);
    var P = x, S = ni(E, P), T = ni(P, P), R = S * S - T * (ni(E, E) - 1);
    if (!(R < 0)) {
      var C = wn(R), M = ti(P, (-S - C) / T);
      if (ta(M, E), M = Yi(M), !l)
        return M;
      var A = s[0], k = h[0], N = s[1], I = h[1], z;
      k < A && (z = A, A = k, k = z);
      var O = k - A, B = J(O - Q) < U, q = B || O < U;
      if (!B && I < N && (z = N, N = I, I = z), q ? B ? N + I > 0 ^ M[1] < (J(M[0] - A) < U ? N : I) : N <= M[1] && M[1] <= I : O > Q ^ (A <= M[0] && M[0] <= k)) {
        var tn = ti(P, (-S + C) / T);
        return ta(tn, E), [M, Yi(tn)];
      }
    }
  }
  function c(s, h) {
    var l = r ? n : Q - n, d = 0;
    return s < -l ? d |= 1 : s > l && (d |= 2), h < -l ? d |= 4 : h > l && (d |= 8), d;
  }
  return ch(a, u, o, r ? [0, -n] : [-Q, n - Q]);
}
function by(n, t, e, r, i, o) {
  var a = n[0], u = n[1], f = t[0], c = t[1], s = 0, h = 1, l = f - a, d = c - u, p;
  if (p = e - a, !(!l && p > 0)) {
    if (p /= l, l < 0) {
      if (p < s)
        return;
      p < h && (h = p);
    } else if (l > 0) {
      if (p > h)
        return;
      p > s && (s = p);
    }
    if (p = i - a, !(!l && p < 0)) {
      if (p /= l, l < 0) {
        if (p > h)
          return;
        p > s && (s = p);
      } else if (l > 0) {
        if (p < s)
          return;
        p < h && (h = p);
      }
      if (p = r - u, !(!d && p > 0)) {
        if (p /= d, d < 0) {
          if (p < s)
            return;
          p < h && (h = p);
        } else if (d > 0) {
          if (p > h)
            return;
          p > s && (s = p);
        }
        if (p = o - u, !(!d && p < 0)) {
          if (p /= d, d < 0) {
            if (p > h)
              return;
            p > s && (s = p);
          } else if (d > 0) {
            if (p < s)
              return;
            p < h && (h = p);
          }
          return s > 0 && (n[0] = a + s * l, n[1] = u + s * d), h < 1 && (t[0] = a + h * l, t[1] = u + h * d), !0;
        }
      }
    }
  }
}
var cr = 1e9, ri = -cr;
function Ku(n, t, e, r) {
  function i(c, s) {
    return n <= c && c <= e && t <= s && s <= r;
  }
  function o(c, s, h, l) {
    var d = 0, p = 0;
    if (c == null || (d = a(c, h)) !== (p = a(s, h)) || f(c, s) < 0 ^ h > 0)
      do
        l.point(d === 0 || d === 3 ? n : e, d > 1 ? r : t);
      while ((d = (d + h + 4) % 4) !== p);
    else
      l.point(s[0], s[1]);
  }
  function a(c, s) {
    return J(c[0] - n) < U ? s > 0 ? 0 : 3 : J(c[0] - e) < U ? s > 0 ? 2 : 1 : J(c[1] - t) < U ? s > 0 ? 1 : 0 : s > 0 ? 3 : 2;
  }
  function u(c, s) {
    return f(c.x, s.x);
  }
  function f(c, s) {
    var h = a(c, 1), l = a(s, 1);
    return h !== l ? h - l : h === 0 ? s[1] - c[1] : h === 1 ? c[0] - s[0] : h === 2 ? c[1] - s[1] : s[0] - c[0];
  }
  return function(c) {
    var s = c, h = ah(), l, d, p, m, g, y, v, _, b, w, x, E = {
      point: $,
      lineStart: R,
      lineEnd: C,
      polygonStart: S,
      polygonEnd: T
    };
    function $(A, k) {
      i(A, k) && s.point(A, k);
    }
    function P() {
      for (var A = 0, k = 0, N = d.length; k < N; ++k)
        for (var I = d[k], z = 1, O = I.length, B = I[0], q, tn, Z = B[0], en = B[1]; z < O; ++z)
          q = Z, tn = en, B = I[z], Z = B[0], en = B[1], tn <= r ? en > r && (Z - q) * (r - tn) > (en - tn) * (n - q) && ++A : en <= r && (Z - q) * (r - tn) < (en - tn) * (n - q) && --A;
      return A;
    }
    function S() {
      s = h, l = [], d = [], x = !0;
    }
    function T() {
      var A = P(), k = x && A, N = (l = Vs(l)).length;
      (k || N) && (c.polygonStart(), k && (c.lineStart(), o(null, null, 1, c), c.lineEnd()), N && uh(l, u, A, o, c), c.polygonEnd()), s = c, l = d = p = null;
    }
    function R() {
      E.point = M, d && d.push(p = []), w = !0, b = !1, v = _ = NaN;
    }
    function C() {
      l && (M(m, g), y && b && h.rejoin(), l.push(h.result())), E.point = $, b && s.lineEnd();
    }
    function M(A, k) {
      var N = i(A, k);
      if (d && p.push([A, k]), w)
        m = A, g = k, y = N, w = !1, N && (s.lineStart(), s.point(A, k));
      else if (N && b)
        s.point(A, k);
      else {
        var I = [v = Math.max(ri, Math.min(cr, v)), _ = Math.max(ri, Math.min(cr, _))], z = [A = Math.max(ri, Math.min(cr, A)), k = Math.max(ri, Math.min(cr, k))];
        by(I, z, n, t, e, r) ? (b || (s.lineStart(), s.point(I[0], I[1])), s.point(z[0], z[1]), N || s.lineEnd(), x = !1) : N && (s.lineStart(), s.point(A, k), x = !1);
      }
      v = A, _ = k, b = N;
    }
    return E;
  };
}
function L8() {
  var n = 0, t = 0, e = 960, r = 500, i, o, a;
  return a = {
    stream: function(u) {
      return i && o === u ? i : i = Ku(n, t, e, r)(o = u);
    },
    extent: function(u) {
      return arguments.length ? (n = +u[0][0], t = +u[0][1], e = +u[1][0], r = +u[1][1], i = o = null, a) : [[n, t], [e, r]];
    }
  };
}
var ja, nu, wi, xi, Be = {
  sphere: cn,
  point: cn,
  lineStart: _y,
  lineEnd: cn,
  polygonStart: cn,
  polygonEnd: cn
};
function _y() {
  Be.point = wy, Be.lineEnd = vy;
}
function vy() {
  Be.point = Be.lineEnd = cn;
}
function wy(n, t) {
  n *= H, t *= H, nu = n, wi = L(t), xi = Y(t), Be.point = xy;
}
function xy(n, t) {
  n *= H, t *= H;
  var e = L(t), r = Y(t), i = J(n - nu), o = Y(i), a = L(i), u = r * a, f = xi * e - wi * r * o, c = wi * e + xi * r * o;
  ja.add(Yn(wn(u * u + f * f), c)), nu = n, wi = e, xi = r;
}
function My(n) {
  return ja = new vn(), ut(n, Be), +ja;
}
var tu = [null, null], Ty = { type: "LineString", coordinates: tu };
function eu(n, t) {
  return tu[0] = n, tu[1] = t, My(Ty);
}
var Dc = {
  Feature: function(n, t) {
    return Qi(n.geometry, t);
  },
  FeatureCollection: function(n, t) {
    for (var e = n.features, r = -1, i = e.length; ++r < i; )
      if (Qi(e[r].geometry, t))
        return !0;
    return !1;
  }
}, Oc = {
  Sphere: function() {
    return !0;
  },
  Point: function(n, t) {
    return Fc(n.coordinates, t);
  },
  MultiPoint: function(n, t) {
    for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
      if (Fc(e[r], t))
        return !0;
    return !1;
  },
  LineString: function(n, t) {
    return Bc(n.coordinates, t);
  },
  MultiLineString: function(n, t) {
    for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
      if (Bc(e[r], t))
        return !0;
    return !1;
  },
  Polygon: function(n, t) {
    return Lc(n.coordinates, t);
  },
  MultiPolygon: function(n, t) {
    for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
      if (Lc(e[r], t))
        return !0;
    return !1;
  },
  GeometryCollection: function(n, t) {
    for (var e = n.geometries, r = -1, i = e.length; ++r < i; )
      if (Qi(e[r], t))
        return !0;
    return !1;
  }
};
function Qi(n, t) {
  return n && Oc.hasOwnProperty(n.type) ? Oc[n.type](n, t) : !1;
}
function Fc(n, t) {
  return eu(n, t) === 0;
}
function Bc(n, t) {
  for (var e, r, i, o = 0, a = n.length; o < a; o++) {
    if (r = eu(n[o], t), r === 0 || o > 0 && (i = eu(n[o], n[o - 1]), i > 0 && e <= i && r <= i && (e + r - i) * (1 - Math.pow((e - r) / i, 2)) < Rr * i))
      return !0;
    e = r;
  }
  return !1;
}
function Lc(n, t) {
  return !!fh(n.map(Sy), sh(t));
}
function Sy(n) {
  return n = n.map(sh), n.pop(), n;
}
function sh(n) {
  return [n[0] * H, n[1] * H];
}
function Y8(n, t) {
  return (n && Dc.hasOwnProperty(n.type) ? Dc[n.type] : Qi)(n, t);
}
function Yc(n, t, e) {
  var r = Rt(n, t - U, e).concat(t);
  return function(i) {
    return r.map(function(o) {
      return [i, o];
    });
  };
}
function qc(n, t, e) {
  var r = Rt(n, t - U, e).concat(t);
  return function(i) {
    return r.map(function(o) {
      return [o, i];
    });
  };
}
function Ay() {
  var n, t, e, r, i, o, a, u, f = 10, c = f, s = 90, h = 360, l, d, p, m, g = 2.5;
  function y() {
    return { type: "MultiLineString", coordinates: v() };
  }
  function v() {
    return Rt(jr(r / s) * s, e, s).map(p).concat(Rt(jr(u / h) * h, a, h).map(m)).concat(Rt(jr(t / f) * f, n, f).filter(function(_) {
      return J(_ % s) > U;
    }).map(l)).concat(Rt(jr(o / c) * c, i, c).filter(function(_) {
      return J(_ % h) > U;
    }).map(d));
  }
  return y.lines = function() {
    return v().map(function(_) {
      return { type: "LineString", coordinates: _ };
    });
  }, y.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        p(r).concat(
          m(a).slice(1),
          p(e).reverse().slice(1),
          m(u).reverse().slice(1)
        )
      ]
    };
  }, y.extent = function(_) {
    return arguments.length ? y.extentMajor(_).extentMinor(_) : y.extentMinor();
  }, y.extentMajor = function(_) {
    return arguments.length ? (r = +_[0][0], e = +_[1][0], u = +_[0][1], a = +_[1][1], r > e && (_ = r, r = e, e = _), u > a && (_ = u, u = a, a = _), y.precision(g)) : [[r, u], [e, a]];
  }, y.extentMinor = function(_) {
    return arguments.length ? (t = +_[0][0], n = +_[1][0], o = +_[0][1], i = +_[1][1], t > n && (_ = t, t = n, n = _), o > i && (_ = o, o = i, i = _), y.precision(g)) : [[t, o], [n, i]];
  }, y.step = function(_) {
    return arguments.length ? y.stepMajor(_).stepMinor(_) : y.stepMinor();
  }, y.stepMajor = function(_) {
    return arguments.length ? (s = +_[0], h = +_[1], y) : [s, h];
  }, y.stepMinor = function(_) {
    return arguments.length ? (f = +_[0], c = +_[1], y) : [f, c];
  }, y.precision = function(_) {
    return arguments.length ? (g = +_, l = Yc(o, i, 90), d = qc(t, n, g), p = Yc(u, a, 90), m = qc(r, e, g), y) : g;
  }, y.extentMajor([[-180, -90 + U], [180, 90 - U]]).extentMinor([[-180, -80 - U], [180, 80 + U]]);
}
function q8() {
  return Ay()();
}
function U8(n, t) {
  var e = n[0] * H, r = n[1] * H, i = t[0] * H, o = t[1] * H, a = Y(r), u = L(r), f = Y(o), c = L(o), s = a * Y(e), h = a * L(e), l = f * Y(i), d = f * L(i), p = 2 * qn(wn(wc(o - r) + a * f * wc(i - e))), m = L(p), g = p ? function(y) {
    var v = L(y *= p) / m, _ = L(p - y) / m, b = _ * s + v * l, w = _ * h + v * d, x = _ * u + v * c;
    return [
      Yn(w, b) * on,
      Yn(x, wn(b * b + w * w)) * on
    ];
  } : function() {
    return [e * on, r * on];
  };
  return g.distance = p, g;
}
const Pr = (n) => n;
var ra = new vn(), ru = new vn(), lh, hh, iu, ou, Ct = {
  point: cn,
  lineStart: cn,
  lineEnd: cn,
  polygonStart: function() {
    Ct.lineStart = ky, Ct.lineEnd = $y;
  },
  polygonEnd: function() {
    Ct.lineStart = Ct.lineEnd = Ct.point = cn, ra.add(J(ru)), ru = new vn();
  },
  result: function() {
    var n = ra / 2;
    return ra = new vn(), n;
  }
};
function ky() {
  Ct.point = Ey;
}
function Ey(n, t) {
  Ct.point = dh, lh = iu = n, hh = ou = t;
}
function dh(n, t) {
  ru.add(ou * n - iu * t), iu = n, ou = t;
}
function $y() {
  dh(lh, hh);
}
const Uc = Ct;
var Le = 1 / 0, Ki = Le, Ir = -Le, Ji = Ir, Ny = {
  point: Cy,
  lineStart: cn,
  lineEnd: cn,
  polygonStart: cn,
  polygonEnd: cn,
  result: function() {
    var n = [[Le, Ki], [Ir, Ji]];
    return Ir = Ji = -(Ki = Le = 1 / 0), n;
  }
};
function Cy(n, t) {
  n < Le && (Le = n), n > Ir && (Ir = n), t < Ki && (Ki = t), t > Ji && (Ji = t);
}
const ji = Ny;
var au = 0, uu = 0, sr = 0, no = 0, to = 0, xe = 0, fu = 0, cu = 0, lr = 0, gh, ph, ft, ct, rt = {
  point: ne,
  lineStart: Hc,
  lineEnd: Xc,
  polygonStart: function() {
    rt.lineStart = Iy, rt.lineEnd = zy;
  },
  polygonEnd: function() {
    rt.point = ne, rt.lineStart = Hc, rt.lineEnd = Xc;
  },
  result: function() {
    var n = lr ? [fu / lr, cu / lr] : xe ? [no / xe, to / xe] : sr ? [au / sr, uu / sr] : [NaN, NaN];
    return au = uu = sr = no = to = xe = fu = cu = lr = 0, n;
  }
};
function ne(n, t) {
  au += n, uu += t, ++sr;
}
function Hc() {
  rt.point = Ry;
}
function Ry(n, t) {
  rt.point = Py, ne(ft = n, ct = t);
}
function Py(n, t) {
  var e = n - ft, r = t - ct, i = wn(e * e + r * r);
  no += i * (ft + n) / 2, to += i * (ct + t) / 2, xe += i, ne(ft = n, ct = t);
}
function Xc() {
  rt.point = ne;
}
function Iy() {
  rt.point = Dy;
}
function zy() {
  mh(gh, ph);
}
function Dy(n, t) {
  rt.point = mh, ne(gh = ft = n, ph = ct = t);
}
function mh(n, t) {
  var e = n - ft, r = t - ct, i = wn(e * e + r * r);
  no += i * (ft + n) / 2, to += i * (ct + t) / 2, xe += i, i = ct * n - ft * t, fu += i * (ft + n), cu += i * (ct + t), lr += i * 3, ne(ft = n, ct = t);
}
const Gc = rt;
function yh(n) {
  this._context = n;
}
yh.prototype = {
  _radius: 4.5,
  pointRadius: function(n) {
    return this._radius = n, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._context.closePath(), this._point = NaN;
  },
  point: function(n, t) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(n, t), this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(n, t);
        break;
      }
      default: {
        this._context.moveTo(n + this._radius, t), this._context.arc(n, t, this._radius, 0, Ln);
        break;
      }
    }
  },
  result: cn
};
var su = new vn(), ia, bh, _h, hr, dr, eo = {
  point: cn,
  lineStart: function() {
    eo.point = Oy;
  },
  lineEnd: function() {
    ia && vh(bh, _h), eo.point = cn;
  },
  polygonStart: function() {
    ia = !0;
  },
  polygonEnd: function() {
    ia = null;
  },
  result: function() {
    var n = +su;
    return su = new vn(), n;
  }
};
function Oy(n, t) {
  eo.point = vh, bh = hr = n, _h = dr = t;
}
function vh(n, t) {
  hr -= n, dr -= t, su.add(wn(hr * hr + dr * dr)), hr = n, dr = t;
}
const Vc = eo;
function wh() {
  this._string = [];
}
wh.prototype = {
  _radius: 4.5,
  _circle: Wc(4.5),
  pointRadius: function(n) {
    return (n = +n) !== this._radius && (this._radius = n, this._circle = null), this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._string.push("Z"), this._point = NaN;
  },
  point: function(n, t) {
    switch (this._point) {
      case 0: {
        this._string.push("M", n, ",", t), this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", n, ",", t);
        break;
      }
      default: {
        this._circle == null && (this._circle = Wc(this._radius)), this._string.push("M", n, ",", t, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var n = this._string.join("");
      return this._string = [], n;
    } else
      return null;
  }
};
function Wc(n) {
  return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z";
}
function H8(n, t) {
  var e = 4.5, r, i;
  function o(a) {
    return a && (typeof e == "function" && i.pointRadius(+e.apply(this, arguments)), ut(a, r(i))), i.result();
  }
  return o.area = function(a) {
    return ut(a, r(Uc)), Uc.result();
  }, o.measure = function(a) {
    return ut(a, r(Vc)), Vc.result();
  }, o.bounds = function(a) {
    return ut(a, r(ji)), ji.result();
  }, o.centroid = function(a) {
    return ut(a, r(Gc)), Gc.result();
  }, o.projection = function(a) {
    return arguments.length ? (r = a == null ? (n = null, Pr) : (n = a).stream, o) : n;
  }, o.context = function(a) {
    return arguments.length ? (i = a == null ? (t = null, new wh()) : new yh(t = a), typeof e != "function" && i.pointRadius(e), o) : t;
  }, o.pointRadius = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : (i.pointRadius(+a), +a), o) : e;
  }, o.projection(n).context(t);
}
function X8(n) {
  return {
    stream: Lr(n)
  };
}
function Lr(n) {
  return function(t) {
    var e = new lu();
    for (var r in n)
      e[r] = n[r];
    return e.stream = t, e;
  };
}
function lu() {
}
lu.prototype = {
  constructor: lu,
  point: function(n, t) {
    this.stream.point(n, t);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function Ju(n, t, e) {
  var r = n.clipExtent && n.clipExtent();
  return n.scale(150).translate([0, 0]), r != null && n.clipExtent(null), ut(e, n.stream(ji)), t(ji.result()), r != null && n.clipExtent(r), n;
}
function xo(n, t, e) {
  return Ju(n, function(r) {
    var i = t[1][0] - t[0][0], o = t[1][1] - t[0][1], a = Math.min(i / (r[1][0] - r[0][0]), o / (r[1][1] - r[0][1])), u = +t[0][0] + (i - a * (r[1][0] + r[0][0])) / 2, f = +t[0][1] + (o - a * (r[1][1] + r[0][1])) / 2;
    n.scale(150 * a).translate([u, f]);
  }, e);
}
function ju(n, t, e) {
  return xo(n, [[0, 0], t], e);
}
function nf(n, t, e) {
  return Ju(n, function(r) {
    var i = +t, o = i / (r[1][0] - r[0][0]), a = (i - o * (r[1][0] + r[0][0])) / 2, u = -o * r[0][1];
    n.scale(150 * o).translate([a, u]);
  }, e);
}
function tf(n, t, e) {
  return Ju(n, function(r) {
    var i = +t, o = i / (r[1][1] - r[0][1]), a = -o * r[0][0], u = (i - o * (r[1][1] + r[0][1])) / 2;
    n.scale(150 * o).translate([a, u]);
  }, e);
}
var Zc = 16, Fy = Y(30 * H);
function Qc(n, t) {
  return +t ? Ly(n, t) : By(n);
}
function By(n) {
  return Lr({
    point: function(t, e) {
      t = n(t, e), this.stream.point(t[0], t[1]);
    }
  });
}
function Ly(n, t) {
  function e(r, i, o, a, u, f, c, s, h, l, d, p, m, g) {
    var y = c - r, v = s - i, _ = y * y + v * v;
    if (_ > 4 * t && m--) {
      var b = a + l, w = u + d, x = f + p, E = wn(b * b + w * w + x * x), $ = qn(x /= E), P = J(J(x) - 1) < U || J(o - h) < U ? (o + h) / 2 : Yn(w, b), S = n(P, $), T = S[0], R = S[1], C = T - r, M = R - i, A = v * C - y * M;
      (A * A / _ > t || J((y * C + v * M) / _ - 0.5) > 0.3 || a * l + u * d + f * p < Fy) && (e(r, i, o, a, u, f, T, R, P, b /= E, w /= E, x, m, g), g.point(T, R), e(T, R, P, b, w, x, c, s, h, l, d, p, m, g));
    }
  }
  return function(r) {
    var i, o, a, u, f, c, s, h, l, d, p, m, g = {
      point: y,
      lineStart: v,
      lineEnd: b,
      polygonStart: function() {
        r.polygonStart(), g.lineStart = w;
      },
      polygonEnd: function() {
        r.polygonEnd(), g.lineStart = v;
      }
    };
    function y($, P) {
      $ = n($, P), r.point($[0], $[1]);
    }
    function v() {
      h = NaN, g.point = _, r.lineStart();
    }
    function _($, P) {
      var S = jt([$, P]), T = n($, P);
      e(h, l, s, d, p, m, h = T[0], l = T[1], s = $, d = S[0], p = S[1], m = S[2], Zc, r), r.point(h, l);
    }
    function b() {
      g.point = y, r.lineEnd();
    }
    function w() {
      v(), g.point = x, g.lineEnd = E;
    }
    function x($, P) {
      _(i = $, P), o = h, a = l, u = d, f = p, c = m, g.point = _;
    }
    function E() {
      e(h, l, s, d, p, m, o, a, i, u, f, c, Zc, r), g.lineEnd = b, b();
    }
    return g;
  };
}
var Yy = Lr({
  point: function(n, t) {
    this.stream.point(n * H, t * H);
  }
});
function qy(n) {
  return Lr({
    point: function(t, e) {
      var r = n(t, e);
      return this.stream.point(r[0], r[1]);
    }
  });
}
function Uy(n, t, e, r, i) {
  function o(a, u) {
    return a *= r, u *= i, [t + n * a, e - n * u];
  }
  return o.invert = function(a, u) {
    return [(a - t) / n * r, (e - u) / n * i];
  }, o;
}
function Kc(n, t, e, r, i, o) {
  if (!o)
    return Uy(n, t, e, r, i);
  var a = Y(o), u = L(o), f = a * n, c = u * n, s = a / n, h = u / n, l = (u * e - a * t) / n, d = (u * t + a * e) / n;
  function p(m, g) {
    return m *= r, g *= i, [f * m - c * g + t, e - c * m - f * g];
  }
  return p.invert = function(m, g) {
    return [r * (s * m - h * g + l), i * (d - h * m - s * g)];
  }, p;
}
function At(n) {
  return xh(function() {
    return n;
  })();
}
function xh(n) {
  var t, e = 150, r = 480, i = 250, o = 0, a = 0, u = 0, f = 0, c = 0, s, h = 0, l = 1, d = 1, p = null, m = zc, g = null, y, v, _, b = Pr, w = 0.5, x, E, $, P, S;
  function T(A) {
    return $(A[0] * H, A[1] * H);
  }
  function R(A) {
    return A = $.invert(A[0], A[1]), A && [A[0] * on, A[1] * on];
  }
  T.stream = function(A) {
    return P && S === A ? P : P = Yy(qy(s)(m(x(b(S = A)))));
  }, T.preclip = function(A) {
    return arguments.length ? (m = A, p = void 0, M()) : m;
  }, T.postclip = function(A) {
    return arguments.length ? (b = A, g = y = v = _ = null, M()) : b;
  }, T.clipAngle = function(A) {
    return arguments.length ? (m = +A ? yy(p = A * H) : (p = null, zc), M()) : p * on;
  }, T.clipExtent = function(A) {
    return arguments.length ? (b = A == null ? (g = y = v = _ = null, Pr) : Ku(g = +A[0][0], y = +A[0][1], v = +A[1][0], _ = +A[1][1]), M()) : g == null ? null : [[g, y], [v, _]];
  }, T.scale = function(A) {
    return arguments.length ? (e = +A, C()) : e;
  }, T.translate = function(A) {
    return arguments.length ? (r = +A[0], i = +A[1], C()) : [r, i];
  }, T.center = function(A) {
    return arguments.length ? (o = A[0] % 360 * H, a = A[1] % 360 * H, C()) : [o * on, a * on];
  }, T.rotate = function(A) {
    return arguments.length ? (u = A[0] % 360 * H, f = A[1] % 360 * H, c = A.length > 2 ? A[2] % 360 * H : 0, C()) : [u * on, f * on, c * on];
  }, T.angle = function(A) {
    return arguments.length ? (h = A % 360 * H, C()) : h * on;
  }, T.reflectX = function(A) {
    return arguments.length ? (l = A ? -1 : 1, C()) : l < 0;
  }, T.reflectY = function(A) {
    return arguments.length ? (d = A ? -1 : 1, C()) : d < 0;
  }, T.precision = function(A) {
    return arguments.length ? (x = Qc(E, w = A * A), M()) : wn(w);
  }, T.fitExtent = function(A, k) {
    return xo(T, A, k);
  }, T.fitSize = function(A, k) {
    return ju(T, A, k);
  }, T.fitWidth = function(A, k) {
    return nf(T, A, k);
  }, T.fitHeight = function(A, k) {
    return tf(T, A, k);
  };
  function C() {
    var A = Kc(e, 0, 0, l, d, h).apply(null, t(o, a)), k = Kc(e, r - A[0], i - A[1], l, d, h);
    return s = Qu(u, f, c), E = Ka(t, k), $ = Ka(s, E), x = Qc(E, w), M();
  }
  function M() {
    return P = S = null, T;
  }
  return function() {
    return t = n.apply(this, arguments), T.invert = t.invert && R, C();
  };
}
function ef(n) {
  var t = 0, e = Q / 3, r = xh(n), i = r(t, e);
  return i.parallels = function(o) {
    return arguments.length ? r(t = o[0] * H, e = o[1] * H) : [t * on, e * on];
  }, i;
}
function Hy(n) {
  var t = Y(n);
  function e(r, i) {
    return [r * t, L(i) / t];
  }
  return e.invert = function(r, i) {
    return [r / t, qn(i * t)];
  }, e;
}
function Xy(n, t) {
  var e = L(n), r = (e + L(t)) / 2;
  if (J(r) < U)
    return Hy(n);
  var i = 1 + e * (2 * r - e), o = wn(i) / r;
  function a(u, f) {
    var c = wn(i - 2 * r * L(f)) / r;
    return [c * L(u *= r), o - c * Y(u)];
  }
  return a.invert = function(u, f) {
    var c = o - f, s = Yn(u, J(c)) * Jn(c);
    return c * r < 0 && (s -= Q * Jn(u) * Jn(c)), [s / r, qn((i - (u * u + c * c) * r * r) / (2 * r))];
  }, a;
}
function hu() {
  return ef(Xy).scale(155.424).center([0, 33.6442]);
}
function Gy() {
  return hu().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}
function Vy(n) {
  var t = n.length;
  return {
    point: function(e, r) {
      for (var i = -1; ++i < t; )
        n[i].point(e, r);
    },
    sphere: function() {
      for (var e = -1; ++e < t; )
        n[e].sphere();
    },
    lineStart: function() {
      for (var e = -1; ++e < t; )
        n[e].lineStart();
    },
    lineEnd: function() {
      for (var e = -1; ++e < t; )
        n[e].lineEnd();
    },
    polygonStart: function() {
      for (var e = -1; ++e < t; )
        n[e].polygonStart();
    },
    polygonEnd: function() {
      for (var e = -1; ++e < t; )
        n[e].polygonEnd();
    }
  };
}
function G8() {
  var n, t, e = Gy(), r, i = hu().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), o, a = hu().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), u, f, c = { point: function(l, d) {
    f = [l, d];
  } };
  function s(l) {
    var d = l[0], p = l[1];
    return f = null, r.point(d, p), f || (o.point(d, p), f) || (u.point(d, p), f);
  }
  s.invert = function(l) {
    var d = e.scale(), p = e.translate(), m = (l[0] - p[0]) / d, g = (l[1] - p[1]) / d;
    return (g >= 0.12 && g < 0.234 && m >= -0.425 && m < -0.214 ? i : g >= 0.166 && g < 0.234 && m >= -0.214 && m < -0.115 ? a : e).invert(l);
  }, s.stream = function(l) {
    return n && t === l ? n : n = Vy([e.stream(t = l), i.stream(l), a.stream(l)]);
  }, s.precision = function(l) {
    return arguments.length ? (e.precision(l), i.precision(l), a.precision(l), h()) : e.precision();
  }, s.scale = function(l) {
    return arguments.length ? (e.scale(l), i.scale(l * 0.35), a.scale(l), s.translate(e.translate())) : e.scale();
  }, s.translate = function(l) {
    if (!arguments.length)
      return e.translate();
    var d = e.scale(), p = +l[0], m = +l[1];
    return r = e.translate(l).clipExtent([[p - 0.455 * d, m - 0.238 * d], [p + 0.455 * d, m + 0.238 * d]]).stream(c), o = i.translate([p - 0.307 * d, m + 0.201 * d]).clipExtent([[p - 0.425 * d + U, m + 0.12 * d + U], [p - 0.214 * d - U, m + 0.234 * d - U]]).stream(c), u = a.translate([p - 0.205 * d, m + 0.212 * d]).clipExtent([[p - 0.214 * d + U, m + 0.166 * d + U], [p - 0.115 * d - U, m + 0.234 * d - U]]).stream(c), h();
  }, s.fitExtent = function(l, d) {
    return xo(s, l, d);
  }, s.fitSize = function(l, d) {
    return ju(s, l, d);
  }, s.fitWidth = function(l, d) {
    return nf(s, l, d);
  }, s.fitHeight = function(l, d) {
    return tf(s, l, d);
  };
  function h() {
    return n = t = null, s;
  }
  return s.scale(1070);
}
function Mh(n) {
  return function(t, e) {
    var r = Y(t), i = Y(e), o = n(r * i);
    return o === 1 / 0 ? [2, 0] : [
      o * i * L(t),
      o * L(e)
    ];
  };
}
function Yr(n) {
  return function(t, e) {
    var r = wn(t * t + e * e), i = n(r), o = L(i), a = Y(i);
    return [
      Yn(t * o, r * a),
      qn(r && e * o / r)
    ];
  };
}
var Th = Mh(function(n) {
  return wn(2 / (1 + n));
});
Th.invert = Yr(function(n) {
  return 2 * qn(n / 2);
});
function V8() {
  return At(Th).scale(124.75).clipAngle(180 - 1e-3);
}
var Sh = Mh(function(n) {
  return (n = Wl(n)) && n / L(n);
});
Sh.invert = Yr(function(n) {
  return n;
});
function W8() {
  return At(Sh).scale(79.4188).clipAngle(180 - 1e-3);
}
function Mo(n, t) {
  return [n, Oi(Wu((dn + t) / 2))];
}
Mo.invert = function(n, t) {
  return [n, 2 * Ze(Vl(t)) - dn];
};
function Z8() {
  return Ah(Mo).scale(961 / Ln);
}
function Ah(n) {
  var t = At(n), e = t.center, r = t.scale, i = t.translate, o = t.clipExtent, a = null, u, f, c;
  t.scale = function(h) {
    return arguments.length ? (r(h), s()) : r();
  }, t.translate = function(h) {
    return arguments.length ? (i(h), s()) : i();
  }, t.center = function(h) {
    return arguments.length ? (e(h), s()) : e();
  }, t.clipExtent = function(h) {
    return arguments.length ? (h == null ? a = u = f = c = null : (a = +h[0][0], u = +h[0][1], f = +h[1][0], c = +h[1][1]), s()) : a == null ? null : [[a, u], [f, c]];
  };
  function s() {
    var h = Q * r(), l = t(ly(t.rotate()).invert([0, 0]));
    return o(a == null ? [[l[0] - h, l[1] - h], [l[0] + h, l[1] + h]] : n === Mo ? [[Math.max(l[0] - h, a), u], [Math.min(l[0] + h, f), c]] : [[a, Math.max(l[1] - h, u)], [f, Math.min(l[1] + h, c)]]);
  }
  return s();
}
function ii(n) {
  return Wu((dn + n) / 2);
}
function Wy(n, t) {
  var e = Y(n), r = n === t ? L(n) : Oi(e / Y(t)) / Oi(ii(t) / ii(n)), i = e * na(ii(n), r) / r;
  if (!r)
    return Mo;
  function o(a, u) {
    i > 0 ? u < -dn + U && (u = -dn + U) : u > dn - U && (u = dn - U);
    var f = i / na(ii(u), r);
    return [f * L(r * a), i - f * Y(r * a)];
  }
  return o.invert = function(a, u) {
    var f = i - u, c = Jn(r) * wn(a * a + f * f), s = Yn(a, J(f)) * Jn(f);
    return f * r < 0 && (s -= Q * Jn(a) * Jn(f)), [s / r, 2 * Ze(na(i / c, 1 / r)) - dn];
  }, o;
}
function Q8() {
  return ef(Wy).scale(109.5).parallels([30, 30]);
}
function ro(n, t) {
  return [n, t];
}
ro.invert = ro;
function K8() {
  return At(ro).scale(152.63);
}
function Zy(n, t) {
  var e = Y(n), r = n === t ? L(n) : (e - Y(t)) / (t - n), i = e / r + n;
  if (J(r) < U)
    return ro;
  function o(a, u) {
    var f = i - u, c = r * a;
    return [f * L(c), i - f * Y(c)];
  }
  return o.invert = function(a, u) {
    var f = i - u, c = Yn(a, J(f)) * Jn(f);
    return f * r < 0 && (c -= Q * Jn(a) * Jn(f)), [c / r, i - Jn(r) * wn(a * a + f * f)];
  }, o;
}
function J8() {
  return ef(Zy).scale(131.154).center([0, 13.9389]);
}
var yr = 1.340264, br = -0.081106, _r = 893e-6, vr = 3796e-6, io = wn(3) / 2, Qy = 12;
function kh(n, t) {
  var e = qn(io * L(t)), r = e * e, i = r * r * r;
  return [
    n * Y(e) / (io * (yr + 3 * br * r + i * (7 * _r + 9 * vr * r))),
    e * (yr + br * r + i * (_r + vr * r))
  ];
}
kh.invert = function(n, t) {
  for (var e = t, r = e * e, i = r * r * r, o = 0, a, u, f; o < Qy && (u = e * (yr + br * r + i * (_r + vr * r)) - t, f = yr + 3 * br * r + i * (7 * _r + 9 * vr * r), e -= a = u / f, r = e * e, i = r * r * r, !(J(a) < Rr)); ++o)
    ;
  return [
    io * n * (yr + 3 * br * r + i * (7 * _r + 9 * vr * r)) / Y(e),
    qn(L(e) / io)
  ];
};
function j8() {
  return At(kh).scale(177.158);
}
function Eh(n, t) {
  var e = Y(t), r = Y(n) * e;
  return [e * L(n) / r, L(t) / r];
}
Eh.invert = Yr(Ze);
function n5() {
  return At(Eh).scale(144.049).clipAngle(60);
}
function t5() {
  var n = 1, t = 0, e = 0, r = 1, i = 1, o = 0, a, u, f = null, c, s, h, l = 1, d = 1, p = Lr({
    point: function(b, w) {
      var x = _([b, w]);
      this.stream.point(x[0], x[1]);
    }
  }), m = Pr, g, y;
  function v() {
    return l = n * r, d = n * i, g = y = null, _;
  }
  function _(b) {
    var w = b[0] * l, x = b[1] * d;
    if (o) {
      var E = x * a - w * u;
      w = w * a + x * u, x = E;
    }
    return [w + t, x + e];
  }
  return _.invert = function(b) {
    var w = b[0] - t, x = b[1] - e;
    if (o) {
      var E = x * a + w * u;
      w = w * a - x * u, x = E;
    }
    return [w / l, x / d];
  }, _.stream = function(b) {
    return g && y === b ? g : g = p(m(y = b));
  }, _.postclip = function(b) {
    return arguments.length ? (m = b, f = c = s = h = null, v()) : m;
  }, _.clipExtent = function(b) {
    return arguments.length ? (m = b == null ? (f = c = s = h = null, Pr) : Ku(f = +b[0][0], c = +b[0][1], s = +b[1][0], h = +b[1][1]), v()) : f == null ? null : [[f, c], [s, h]];
  }, _.scale = function(b) {
    return arguments.length ? (n = +b, v()) : n;
  }, _.translate = function(b) {
    return arguments.length ? (t = +b[0], e = +b[1], v()) : [t, e];
  }, _.angle = function(b) {
    return arguments.length ? (o = b % 360 * H, u = L(o), a = Y(o), v()) : o * on;
  }, _.reflectX = function(b) {
    return arguments.length ? (r = b ? -1 : 1, v()) : r < 0;
  }, _.reflectY = function(b) {
    return arguments.length ? (i = b ? -1 : 1, v()) : i < 0;
  }, _.fitExtent = function(b, w) {
    return xo(_, b, w);
  }, _.fitSize = function(b, w) {
    return ju(_, b, w);
  }, _.fitWidth = function(b, w) {
    return nf(_, b, w);
  }, _.fitHeight = function(b, w) {
    return tf(_, b, w);
  }, _;
}
function $h(n, t) {
  var e = t * t, r = e * e;
  return [
    n * (0.8707 - 0.131979 * e + r * (-0.013791 + r * (3971e-6 * e - 1529e-6 * r))),
    t * (1.007226 + e * (0.015085 + r * (-0.044475 + 0.028874 * e - 5916e-6 * r)))
  ];
}
$h.invert = function(n, t) {
  var e = t, r = 25, i;
  do {
    var o = e * e, a = o * o;
    e -= i = (e * (1.007226 + o * (0.015085 + a * (-0.044475 + 0.028874 * o - 5916e-6 * a))) - t) / (1.007226 + o * (0.015085 * 3 + a * (-0.044475 * 7 + 0.028874 * 9 * o - 5916e-6 * 11 * a)));
  } while (J(i) > U && --r > 0);
  return [
    n / (0.8707 + (o = e * e) * (-0.131979 + o * (-0.013791 + o * o * o * (3971e-6 - 1529e-6 * o)))),
    e
  ];
};
function e5() {
  return At($h).scale(175.295);
}
function Nh(n, t) {
  return [Y(t) * L(n), L(t)];
}
Nh.invert = Yr(qn);
function r5() {
  return At(Nh).scale(249.5).clipAngle(90 + U);
}
function Ch(n, t) {
  var e = Y(t), r = 1 + Y(n) * e;
  return [e * L(n) / r, L(t) / r];
}
Ch.invert = Yr(function(n) {
  return 2 * Ze(n);
});
function i5() {
  return At(Ch).scale(250).clipAngle(142);
}
function Rh(n, t) {
  return [Oi(Wu((dn + t) / 2)), -n];
}
Rh.invert = function(n, t) {
  return [-t, 2 * Ze(Vl(n)) - dn];
};
function o5() {
  var n = Ah(Rh), t = n.center, e = n.rotate;
  return n.center = function(r) {
    return arguments.length ? t([-r[1], r[0]]) : (r = t(), [r[1], -r[0]]);
  }, n.rotate = function(r) {
    return arguments.length ? e([r[0], r[1], r.length > 2 ? r[2] + 90 : 90]) : (r = e(), [r[0], r[1], r[2] - 90]);
  }, e([0, 0, 90]).scale(159.155);
}
function Ky(n, t) {
  return n.parent === t.parent ? 1 : 2;
}
function Jy(n) {
  return n.reduce(jy, 0) / n.length;
}
function jy(n, t) {
  return n + t.x;
}
function nb(n) {
  return 1 + n.reduce(tb, 0);
}
function tb(n, t) {
  return Math.max(n, t.y);
}
function eb(n) {
  for (var t; t = n.children; )
    n = t[0];
  return n;
}
function rb(n) {
  for (var t; t = n.children; )
    n = t[t.length - 1];
  return n;
}
function a5() {
  var n = Ky, t = 1, e = 1, r = !1;
  function i(o) {
    var a, u = 0;
    o.eachAfter(function(l) {
      var d = l.children;
      d ? (l.x = Jy(d), l.y = nb(d)) : (l.x = a ? u += n(l, a) : 0, l.y = 0, a = l);
    });
    var f = eb(o), c = rb(o), s = f.x - n(f, c) / 2, h = c.x + n(c, f) / 2;
    return o.eachAfter(r ? function(l) {
      l.x = (l.x - o.x) * t, l.y = (o.y - l.y) * e;
    } : function(l) {
      l.x = (l.x - s) / (h - s) * t, l.y = (1 - (o.y ? l.y / o.y : 1)) * e;
    });
  }
  return i.separation = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.size = function(o) {
    return arguments.length ? (r = !1, t = +o[0], e = +o[1], i) : r ? null : [t, e];
  }, i.nodeSize = function(o) {
    return arguments.length ? (r = !0, t = +o[0], e = +o[1], i) : r ? [t, e] : null;
  }, i;
}
function ib(n) {
  var t = 0, e = n.children, r = e && e.length;
  if (!r)
    t = 1;
  else
    for (; --r >= 0; )
      t += e[r].value;
  n.value = t;
}
function ob() {
  return this.eachAfter(ib);
}
function ab(n, t) {
  let e = -1;
  for (const r of this)
    n.call(t, r, ++e, this);
  return this;
}
function ub(n, t) {
  for (var e = this, r = [e], i, o, a = -1; e = r.pop(); )
    if (n.call(t, e, ++a, this), i = e.children)
      for (o = i.length - 1; o >= 0; --o)
        r.push(i[o]);
  return this;
}
function fb(n, t) {
  for (var e = this, r = [e], i = [], o, a, u, f = -1; e = r.pop(); )
    if (i.push(e), o = e.children)
      for (a = 0, u = o.length; a < u; ++a)
        r.push(o[a]);
  for (; e = i.pop(); )
    n.call(t, e, ++f, this);
  return this;
}
function cb(n, t) {
  let e = -1;
  for (const r of this)
    if (n.call(t, r, ++e, this))
      return r;
}
function sb(n) {
  return this.eachAfter(function(t) {
    for (var e = +n(t.data) || 0, r = t.children, i = r && r.length; --i >= 0; )
      e += r[i].value;
    t.value = e;
  });
}
function lb(n) {
  return this.eachBefore(function(t) {
    t.children && t.children.sort(n);
  });
}
function hb(n) {
  for (var t = this, e = db(t, n), r = [t]; t !== e; )
    t = t.parent, r.push(t);
  for (var i = r.length; n !== e; )
    r.splice(i, 0, n), n = n.parent;
  return r;
}
function db(n, t) {
  if (n === t)
    return n;
  var e = n.ancestors(), r = t.ancestors(), i = null;
  for (n = e.pop(), t = r.pop(); n === t; )
    i = n, n = e.pop(), t = r.pop();
  return i;
}
function gb() {
  for (var n = this, t = [n]; n = n.parent; )
    t.push(n);
  return t;
}
function pb() {
  return Array.from(this);
}
function mb() {
  var n = [];
  return this.eachBefore(function(t) {
    t.children || n.push(t);
  }), n;
}
function yb() {
  var n = this, t = [];
  return n.each(function(e) {
    e !== n && t.push({ source: e.parent, target: e });
  }), t;
}
function* bb() {
  var n = this, t, e = [n], r, i, o;
  do
    for (t = e.reverse(), e = []; n = t.pop(); )
      if (yield n, r = n.children)
        for (i = 0, o = r.length; i < o; ++i)
          e.push(r[i]);
  while (e.length);
}
function Ph(n, t) {
  n instanceof Map ? (n = [void 0, n], t === void 0 && (t = wb)) : t === void 0 && (t = vb);
  for (var e = new Ye(n), r, i = [e], o, a, u, f; r = i.pop(); )
    if ((a = t(r.data)) && (f = (a = Array.from(a)).length))
      for (r.children = a, u = f - 1; u >= 0; --u)
        i.push(o = a[u] = new Ye(a[u])), o.parent = r, o.depth = r.depth + 1;
  return e.eachBefore(Ih);
}
function _b() {
  return Ph(this).eachBefore(xb);
}
function vb(n) {
  return n.children;
}
function wb(n) {
  return Array.isArray(n) ? n[1] : null;
}
function xb(n) {
  n.data.value !== void 0 && (n.value = n.data.value), n.data = n.data.data;
}
function Ih(n) {
  var t = 0;
  do
    n.height = t;
  while ((n = n.parent) && n.height < ++t);
}
function Ye(n) {
  this.data = n, this.depth = this.height = 0, this.parent = null;
}
Ye.prototype = Ph.prototype = {
  constructor: Ye,
  count: ob,
  each: ab,
  eachAfter: fb,
  eachBefore: ub,
  find: cb,
  sum: sb,
  sort: lb,
  path: hb,
  ancestors: gb,
  descendants: pb,
  leaves: mb,
  links: yb,
  copy: _b,
  [Symbol.iterator]: bb
};
function Mi(n) {
  return n == null ? null : zh(n);
}
function zh(n) {
  if (typeof n != "function")
    throw new Error();
  return n;
}
function Ht() {
  return 0;
}
function ve(n) {
  return function() {
    return n;
  };
}
const Mb = 1664525, Tb = 1013904223, Jc = 4294967296;
function rf() {
  let n = 1;
  return () => (n = (Mb * n + Tb) % Jc) / Jc;
}
function Sb(n) {
  return typeof n == "object" && "length" in n ? n : Array.from(n);
}
function Ab(n, t) {
  let e = n.length, r, i;
  for (; e; )
    i = t() * e-- | 0, r = n[e], n[e] = n[i], n[i] = r;
  return n;
}
function u5(n) {
  return Dh(n, rf());
}
function Dh(n, t) {
  for (var e = 0, r = (n = Ab(Array.from(n), t)).length, i = [], o, a; e < r; )
    o = n[e], a && Oh(a, o) ? ++e : (a = Eb(i = kb(i, o)), e = 0);
  return a;
}
function kb(n, t) {
  var e, r;
  if (oa(t, n))
    return [t];
  for (e = 0; e < n.length; ++e)
    if (oi(t, n[e]) && oa(gr(n[e], t), n))
      return [n[e], t];
  for (e = 0; e < n.length - 1; ++e)
    for (r = e + 1; r < n.length; ++r)
      if (oi(gr(n[e], n[r]), t) && oi(gr(n[e], t), n[r]) && oi(gr(n[r], t), n[e]) && oa(Fh(n[e], n[r], t), n))
        return [n[e], n[r], t];
  throw new Error();
}
function oi(n, t) {
  var e = n.r - t.r, r = t.x - n.x, i = t.y - n.y;
  return e < 0 || e * e < r * r + i * i;
}
function Oh(n, t) {
  var e = n.r - t.r + Math.max(n.r, t.r, 1) * 1e-9, r = t.x - n.x, i = t.y - n.y;
  return e > 0 && e * e > r * r + i * i;
}
function oa(n, t) {
  for (var e = 0; e < t.length; ++e)
    if (!Oh(n, t[e]))
      return !1;
  return !0;
}
function Eb(n) {
  switch (n.length) {
    case 1:
      return $b(n[0]);
    case 2:
      return gr(n[0], n[1]);
    case 3:
      return Fh(n[0], n[1], n[2]);
  }
}
function $b(n) {
  return {
    x: n.x,
    y: n.y,
    r: n.r
  };
}
function gr(n, t) {
  var e = n.x, r = n.y, i = n.r, o = t.x, a = t.y, u = t.r, f = o - e, c = a - r, s = u - i, h = Math.sqrt(f * f + c * c);
  return {
    x: (e + o + f / h * s) / 2,
    y: (r + a + c / h * s) / 2,
    r: (h + i + u) / 2
  };
}
function Fh(n, t, e) {
  var r = n.x, i = n.y, o = n.r, a = t.x, u = t.y, f = t.r, c = e.x, s = e.y, h = e.r, l = r - a, d = r - c, p = i - u, m = i - s, g = f - o, y = h - o, v = r * r + i * i - o * o, _ = v - a * a - u * u + f * f, b = v - c * c - s * s + h * h, w = d * p - l * m, x = (p * b - m * _) / (w * 2) - r, E = (m * g - p * y) / w, $ = (d * _ - l * b) / (w * 2) - i, P = (l * y - d * g) / w, S = E * E + P * P - 1, T = 2 * (o + x * E + $ * P), R = x * x + $ * $ - o * o, C = -(Math.abs(S) > 1e-6 ? (T + Math.sqrt(T * T - 4 * S * R)) / (2 * S) : R / T);
  return {
    x: r + x + E * C,
    y: i + $ + P * C,
    r: C
  };
}
function jc(n, t, e) {
  var r = n.x - t.x, i, o, a = n.y - t.y, u, f, c = r * r + a * a;
  c ? (o = t.r + e.r, o *= o, f = n.r + e.r, f *= f, o > f ? (i = (c + f - o) / (2 * c), u = Math.sqrt(Math.max(0, f / c - i * i)), e.x = n.x - i * r - u * a, e.y = n.y - i * a + u * r) : (i = (c + o - f) / (2 * c), u = Math.sqrt(Math.max(0, o / c - i * i)), e.x = t.x + i * r - u * a, e.y = t.y + i * a + u * r)) : (e.x = t.x + e.r, e.y = t.y);
}
function ns(n, t) {
  var e = n.r + t.r - 1e-6, r = t.x - n.x, i = t.y - n.y;
  return e > 0 && e * e > r * r + i * i;
}
function ts(n) {
  var t = n._, e = n.next._, r = t.r + e.r, i = (t.x * e.r + e.x * t.r) / r, o = (t.y * e.r + e.y * t.r) / r;
  return i * i + o * o;
}
function ai(n) {
  this._ = n, this.next = null, this.previous = null;
}
function Bh(n, t) {
  if (!(o = (n = Sb(n)).length))
    return 0;
  var e, r, i, o, a, u, f, c, s, h, l;
  if (e = n[0], e.x = 0, e.y = 0, !(o > 1))
    return e.r;
  if (r = n[1], e.x = -r.r, r.x = e.r, r.y = 0, !(o > 2))
    return e.r + r.r;
  jc(r, e, i = n[2]), e = new ai(e), r = new ai(r), i = new ai(i), e.next = i.previous = r, r.next = e.previous = i, i.next = r.previous = e;
  n:
    for (f = 3; f < o; ++f) {
      jc(e._, r._, i = n[f]), i = new ai(i), c = r.next, s = e.previous, h = r._.r, l = e._.r;
      do
        if (h <= l) {
          if (ns(c._, i._)) {
            r = c, e.next = r, r.previous = e, --f;
            continue n;
          }
          h += c._.r, c = c.next;
        } else {
          if (ns(s._, i._)) {
            e = s, e.next = r, r.previous = e, --f;
            continue n;
          }
          l += s._.r, s = s.previous;
        }
      while (c !== s.next);
      for (i.previous = e, i.next = r, e.next = r.previous = r = i, a = ts(e); (i = i.next) !== r; )
        (u = ts(i)) < a && (e = i, a = u);
      r = e.next;
    }
  for (e = [r._], i = r; (i = i.next) !== r; )
    e.push(i._);
  for (i = Dh(e, t), f = 0; f < o; ++f)
    e = n[f], e.x -= i.x, e.y -= i.y;
  return i.r;
}
function f5(n) {
  return Bh(n, rf()), n;
}
function Nb(n) {
  return Math.sqrt(n.value);
}
function c5() {
  var n = null, t = 1, e = 1, r = Ht;
  function i(o) {
    const a = rf();
    return o.x = t / 2, o.y = e / 2, n ? o.eachBefore(es(n)).eachAfter(aa(r, 0.5, a)).eachBefore(rs(1)) : o.eachBefore(es(Nb)).eachAfter(aa(Ht, 1, a)).eachAfter(aa(r, o.r / Math.min(t, e), a)).eachBefore(rs(Math.min(t, e) / (2 * o.r))), o;
  }
  return i.radius = function(o) {
    return arguments.length ? (n = Mi(o), i) : n;
  }, i.size = function(o) {
    return arguments.length ? (t = +o[0], e = +o[1], i) : [t, e];
  }, i.padding = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : ve(+o), i) : r;
  }, i;
}
function es(n) {
  return function(t) {
    t.children || (t.r = Math.max(0, +n(t) || 0));
  };
}
function aa(n, t, e) {
  return function(r) {
    if (i = r.children) {
      var i, o, a = i.length, u = n(r) * t || 0, f;
      if (u)
        for (o = 0; o < a; ++o)
          i[o].r += u;
      if (f = Bh(i, e), u)
        for (o = 0; o < a; ++o)
          i[o].r -= u;
      r.r = f + u;
    }
  };
}
function rs(n) {
  return function(t) {
    var e = t.parent;
    t.r *= n, e && (t.x = e.x + n * t.x, t.y = e.y + n * t.y);
  };
}
function Lh(n) {
  n.x0 = Math.round(n.x0), n.y0 = Math.round(n.y0), n.x1 = Math.round(n.x1), n.y1 = Math.round(n.y1);
}
function To(n, t, e, r, i) {
  for (var o = n.children, a, u = -1, f = o.length, c = n.value && (r - t) / n.value; ++u < f; )
    a = o[u], a.y0 = e, a.y1 = i, a.x0 = t, a.x1 = t += a.value * c;
}
function s5() {
  var n = 1, t = 1, e = 0, r = !1;
  function i(a) {
    var u = a.height + 1;
    return a.x0 = a.y0 = e, a.x1 = n, a.y1 = t / u, a.eachBefore(o(t, u)), r && a.eachBefore(Lh), a;
  }
  function o(a, u) {
    return function(f) {
      f.children && To(f, f.x0, a * (f.depth + 1) / u, f.x1, a * (f.depth + 2) / u);
      var c = f.x0, s = f.y0, h = f.x1 - e, l = f.y1 - e;
      h < c && (c = h = (c + h) / 2), l < s && (s = l = (s + l) / 2), f.x0 = c, f.y0 = s, f.x1 = h, f.y1 = l;
    };
  }
  return i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.size = function(a) {
    return arguments.length ? (n = +a[0], t = +a[1], i) : [n, t];
  }, i.padding = function(a) {
    return arguments.length ? (e = +a, i) : e;
  }, i;
}
var Cb = { depth: -1 }, is = {}, ua = {};
function Rb(n) {
  return n.id;
}
function Pb(n) {
  return n.parentId;
}
function l5() {
  var n = Rb, t = Pb, e;
  function r(i) {
    var o = Array.from(i), a = n, u = t, f, c, s, h, l, d, p, m, g = /* @__PURE__ */ new Map();
    if (e != null) {
      const y = o.map((b, w) => Ib(e(b, w, i))), v = y.map(os), _ = new Set(y).add("");
      for (const b of v)
        _.has(b) || (_.add(b), y.push(b), v.push(os(b)), o.push(ua));
      a = (b, w) => y[w], u = (b, w) => v[w];
    }
    for (s = 0, f = o.length; s < f; ++s)
      c = o[s], d = o[s] = new Ye(c), (p = a(c, s, i)) != null && (p += "") && (m = d.id = p, g.set(m, g.has(m) ? is : d)), (p = u(c, s, i)) != null && (p += "") && (d.parent = p);
    for (s = 0; s < f; ++s)
      if (d = o[s], p = d.parent) {
        if (l = g.get(p), !l)
          throw new Error("missing: " + p);
        if (l === is)
          throw new Error("ambiguous: " + p);
        l.children ? l.children.push(d) : l.children = [d], d.parent = l;
      } else {
        if (h)
          throw new Error("multiple roots");
        h = d;
      }
    if (!h)
      throw new Error("no root");
    if (e != null) {
      for (; h.data === ua && h.children.length === 1; )
        h = h.children[0], --f;
      for (let y = o.length - 1; y >= 0 && (d = o[y], d.data === ua); --y)
        d.data = null;
    }
    if (h.parent = Cb, h.eachBefore(function(y) {
      y.depth = y.parent.depth + 1, --f;
    }).eachBefore(Ih), h.parent = null, f > 0)
      throw new Error("cycle");
    return h;
  }
  return r.id = function(i) {
    return arguments.length ? (n = Mi(i), r) : n;
  }, r.parentId = function(i) {
    return arguments.length ? (t = Mi(i), r) : t;
  }, r.path = function(i) {
    return arguments.length ? (e = Mi(i), r) : e;
  }, r;
}
function Ib(n) {
  n = `${n}`;
  let t = n.length;
  return du(n, t - 1) && !du(n, t - 2) && (n = n.slice(0, -1)), n[0] === "/" ? n : `/${n}`;
}
function os(n) {
  let t = n.length;
  if (t < 2)
    return "";
  for (; --t > 1 && !du(n, t); )
    ;
  return n.slice(0, t);
}
function du(n, t) {
  if (n[t] === "/") {
    let e = 0;
    for (; t > 0 && n[--t] === "\\"; )
      ++e;
    if ((e & 1) === 0)
      return !0;
  }
  return !1;
}
function zb(n, t) {
  return n.parent === t.parent ? 1 : 2;
}
function fa(n) {
  var t = n.children;
  return t ? t[0] : n.t;
}
function ca(n) {
  var t = n.children;
  return t ? t[t.length - 1] : n.t;
}
function Db(n, t, e) {
  var r = e / (t.i - n.i);
  t.c -= r, t.s += e, n.c += r, t.z += e, t.m += e;
}
function Ob(n) {
  for (var t = 0, e = 0, r = n.children, i = r.length, o; --i >= 0; )
    o = r[i], o.z += t, o.m += t, t += o.s + (e += o.c);
}
function Fb(n, t, e) {
  return n.a.parent === t.parent ? n.a : e;
}
function Ti(n, t) {
  this._ = n, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = t;
}
Ti.prototype = Object.create(Ye.prototype);
function Bb(n) {
  for (var t = new Ti(n, 0), e, r = [t], i, o, a, u; e = r.pop(); )
    if (o = e._.children)
      for (e.children = new Array(u = o.length), a = u - 1; a >= 0; --a)
        r.push(i = e.children[a] = new Ti(o[a], a)), i.parent = e;
  return (t.parent = new Ti(null, 0)).children = [t], t;
}
function h5() {
  var n = zb, t = 1, e = 1, r = null;
  function i(c) {
    var s = Bb(c);
    if (s.eachAfter(o), s.parent.m = -s.z, s.eachBefore(a), r)
      c.eachBefore(f);
    else {
      var h = c, l = c, d = c;
      c.eachBefore(function(v) {
        v.x < h.x && (h = v), v.x > l.x && (l = v), v.depth > d.depth && (d = v);
      });
      var p = h === l ? 1 : n(h, l) / 2, m = p - h.x, g = t / (l.x + p + m), y = e / (d.depth || 1);
      c.eachBefore(function(v) {
        v.x = (v.x + m) * g, v.y = v.depth * y;
      });
    }
    return c;
  }
  function o(c) {
    var s = c.children, h = c.parent.children, l = c.i ? h[c.i - 1] : null;
    if (s) {
      Ob(c);
      var d = (s[0].z + s[s.length - 1].z) / 2;
      l ? (c.z = l.z + n(c._, l._), c.m = c.z - d) : c.z = d;
    } else
      l && (c.z = l.z + n(c._, l._));
    c.parent.A = u(c, l, c.parent.A || h[0]);
  }
  function a(c) {
    c._.x = c.z + c.parent.m, c.m += c.parent.m;
  }
  function u(c, s, h) {
    if (s) {
      for (var l = c, d = c, p = s, m = l.parent.children[0], g = l.m, y = d.m, v = p.m, _ = m.m, b; p = ca(p), l = fa(l), p && l; )
        m = fa(m), d = ca(d), d.a = c, b = p.z + v - l.z - g + n(p._, l._), b > 0 && (Db(Fb(p, c, h), c, b), g += b, y += b), v += p.m, g += l.m, _ += m.m, y += d.m;
      p && !ca(d) && (d.t = p, d.m += v - y), l && !fa(m) && (m.t = l, m.m += g - _, h = c);
    }
    return h;
  }
  function f(c) {
    c.x *= t, c.y = c.depth * e;
  }
  return i.separation = function(c) {
    return arguments.length ? (n = c, i) : n;
  }, i.size = function(c) {
    return arguments.length ? (r = !1, t = +c[0], e = +c[1], i) : r ? null : [t, e];
  }, i.nodeSize = function(c) {
    return arguments.length ? (r = !0, t = +c[0], e = +c[1], i) : r ? [t, e] : null;
  }, i;
}
function of(n, t, e, r, i) {
  for (var o = n.children, a, u = -1, f = o.length, c = n.value && (i - e) / n.value; ++u < f; )
    a = o[u], a.x0 = t, a.x1 = r, a.y0 = e, a.y1 = e += a.value * c;
}
var Yh = (1 + Math.sqrt(5)) / 2;
function qh(n, t, e, r, i, o) {
  for (var a = [], u = t.children, f, c, s = 0, h = 0, l = u.length, d, p, m = t.value, g, y, v, _, b, w, x; s < l; ) {
    d = i - e, p = o - r;
    do
      g = u[h++].value;
    while (!g && h < l);
    for (y = v = g, w = Math.max(p / d, d / p) / (m * n), x = g * g * w, b = Math.max(v / x, x / y); h < l; ++h) {
      if (g += c = u[h].value, c < y && (y = c), c > v && (v = c), x = g * g * w, _ = Math.max(v / x, x / y), _ > b) {
        g -= c;
        break;
      }
      b = _;
    }
    a.push(f = { value: g, dice: d < p, children: u.slice(s, h) }), f.dice ? To(f, e, r, i, m ? r += p * g / m : o) : of(f, e, r, m ? e += d * g / m : i, o), m -= g, s = h;
  }
  return a;
}
const Lb = function n(t) {
  function e(r, i, o, a, u) {
    qh(t, r, i, o, a, u);
  }
  return e.ratio = function(r) {
    return n((r = +r) > 1 ? r : 1);
  }, e;
}(Yh);
function d5() {
  var n = Lb, t = !1, e = 1, r = 1, i = [0], o = Ht, a = Ht, u = Ht, f = Ht, c = Ht;
  function s(l) {
    return l.x0 = l.y0 = 0, l.x1 = e, l.y1 = r, l.eachBefore(h), i = [0], t && l.eachBefore(Lh), l;
  }
  function h(l) {
    var d = i[l.depth], p = l.x0 + d, m = l.y0 + d, g = l.x1 - d, y = l.y1 - d;
    g < p && (p = g = (p + g) / 2), y < m && (m = y = (m + y) / 2), l.x0 = p, l.y0 = m, l.x1 = g, l.y1 = y, l.children && (d = i[l.depth + 1] = o(l) / 2, p += c(l) - d, m += a(l) - d, g -= u(l) - d, y -= f(l) - d, g < p && (p = g = (p + g) / 2), y < m && (m = y = (m + y) / 2), n(l, p, m, g, y));
  }
  return s.round = function(l) {
    return arguments.length ? (t = !!l, s) : t;
  }, s.size = function(l) {
    return arguments.length ? (e = +l[0], r = +l[1], s) : [e, r];
  }, s.tile = function(l) {
    return arguments.length ? (n = zh(l), s) : n;
  }, s.padding = function(l) {
    return arguments.length ? s.paddingInner(l).paddingOuter(l) : s.paddingInner();
  }, s.paddingInner = function(l) {
    return arguments.length ? (o = typeof l == "function" ? l : ve(+l), s) : o;
  }, s.paddingOuter = function(l) {
    return arguments.length ? s.paddingTop(l).paddingRight(l).paddingBottom(l).paddingLeft(l) : s.paddingTop();
  }, s.paddingTop = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : ve(+l), s) : a;
  }, s.paddingRight = function(l) {
    return arguments.length ? (u = typeof l == "function" ? l : ve(+l), s) : u;
  }, s.paddingBottom = function(l) {
    return arguments.length ? (f = typeof l == "function" ? l : ve(+l), s) : f;
  }, s.paddingLeft = function(l) {
    return arguments.length ? (c = typeof l == "function" ? l : ve(+l), s) : c;
  }, s;
}
function g5(n, t, e, r, i) {
  var o = n.children, a, u = o.length, f, c = new Array(u + 1);
  for (c[0] = f = a = 0; a < u; ++a)
    c[a + 1] = f += o[a].value;
  s(0, u, n.value, t, e, r, i);
  function s(h, l, d, p, m, g, y) {
    if (h >= l - 1) {
      var v = o[h];
      v.x0 = p, v.y0 = m, v.x1 = g, v.y1 = y;
      return;
    }
    for (var _ = c[h], b = d / 2 + _, w = h + 1, x = l - 1; w < x; ) {
      var E = w + x >>> 1;
      c[E] < b ? w = E + 1 : x = E;
    }
    b - c[w - 1] < c[w] - b && h + 1 < w && --w;
    var $ = c[w] - _, P = d - $;
    if (g - p > y - m) {
      var S = d ? (p * P + g * $) / d : g;
      s(h, w, $, p, m, S, y), s(w, l, P, S, m, g, y);
    } else {
      var T = d ? (m * P + y * $) / d : y;
      s(h, w, $, p, m, g, T), s(w, l, P, p, T, g, y);
    }
  }
}
function p5(n, t, e, r, i) {
  (n.depth & 1 ? of : To)(n, t, e, r, i);
}
const m5 = function n(t) {
  function e(r, i, o, a, u) {
    if ((f = r._squarify) && f.ratio === t)
      for (var f, c, s, h, l = -1, d, p = f.length, m = r.value; ++l < p; ) {
        for (c = f[l], s = c.children, h = c.value = 0, d = s.length; h < d; ++h)
          c.value += s[h].value;
        c.dice ? To(c, i, o, a, m ? o += (u - o) * c.value / m : u) : of(c, i, o, m ? i += (a - i) * c.value / m : a, u), m -= c.value;
      }
    else
      r._squarify = f = qh(t, r, i, o, a, u), f.ratio = t;
  }
  return e.ratio = function(r) {
    return n((r = +r) > 1 ? r : 1);
  }, e;
}(Yh);
function y5(n) {
  for (var t = -1, e = n.length, r, i = n[e - 1], o = 0; ++t < e; )
    r = i, i = n[t], o += r[1] * i[0] - r[0] * i[1];
  return o / 2;
}
function b5(n) {
  for (var t = -1, e = n.length, r = 0, i = 0, o, a = n[e - 1], u, f = 0; ++t < e; )
    o = a, a = n[t], f += u = o[0] * a[1] - a[0] * o[1], r += (o[0] + a[0]) * u, i += (o[1] + a[1]) * u;
  return f *= 3, [r / f, i / f];
}
function Yb(n, t, e) {
  return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0]);
}
function qb(n, t) {
  return n[0] - t[0] || n[1] - t[1];
}
function as(n) {
  const t = n.length, e = [0, 1];
  let r = 2, i;
  for (i = 2; i < t; ++i) {
    for (; r > 1 && Yb(n[e[r - 2]], n[e[r - 1]], n[i]) <= 0; )
      --r;
    e[r++] = i;
  }
  return e.slice(0, r);
}
function _5(n) {
  if ((e = n.length) < 3)
    return null;
  var t, e, r = new Array(e), i = new Array(e);
  for (t = 0; t < e; ++t)
    r[t] = [+n[t][0], +n[t][1], t];
  for (r.sort(qb), t = 0; t < e; ++t)
    i[t] = [r[t][0], -r[t][1]];
  var o = as(r), a = as(i), u = a[0] === o[0], f = a[a.length - 1] === o[o.length - 1], c = [];
  for (t = o.length - 1; t >= 0; --t)
    c.push(n[r[o[t]][2]]);
  for (t = +u; t < a.length - f; ++t)
    c.push(n[r[a[t]][2]]);
  return c;
}
function v5(n, t) {
  for (var e = n.length, r = n[e - 1], i = t[0], o = t[1], a = r[0], u = r[1], f, c, s = !1, h = 0; h < e; ++h)
    r = n[h], f = r[0], c = r[1], c > o != u > o && i < (a - f) * (o - c) / (u - c) + f && (s = !s), a = f, u = c;
  return s;
}
function w5(n) {
  for (var t = -1, e = n.length, r = n[e - 1], i, o, a = r[0], u = r[1], f = 0; ++t < e; )
    i = a, o = u, r = n[t], a = r[0], u = r[1], i -= a, o -= u, f += Math.hypot(i, o);
  return f;
}
const Sn = Math.random, x5 = function n(t) {
  function e(r, i) {
    return r = r == null ? 0 : +r, i = i == null ? 1 : +i, arguments.length === 1 ? (i = r, r = 0) : i -= r, function() {
      return t() * i + r;
    };
  }
  return e.source = n, e;
}(Sn), M5 = function n(t) {
  function e(r, i) {
    return arguments.length < 2 && (i = r, r = 0), r = Math.floor(r), i = Math.floor(i) - r, function() {
      return Math.floor(t() * i + r);
    };
  }
  return e.source = n, e;
}(Sn), Uh = function n(t) {
  function e(r, i) {
    var o, a;
    return r = r == null ? 0 : +r, i = i == null ? 1 : +i, function() {
      var u;
      if (o != null)
        u = o, o = null;
      else
        do
          o = t() * 2 - 1, u = t() * 2 - 1, a = o * o + u * u;
        while (!a || a > 1);
      return r + i * u * Math.sqrt(-2 * Math.log(a) / a);
    };
  }
  return e.source = n, e;
}(Sn), T5 = function n(t) {
  var e = Uh.source(t);
  function r() {
    var i = e.apply(this, arguments);
    return function() {
      return Math.exp(i());
    };
  }
  return r.source = n, r;
}(Sn), Ub = function n(t) {
  function e(r) {
    return (r = +r) <= 0 ? () => 0 : function() {
      for (var i = 0, o = r; o > 1; --o)
        i += t();
      return i + o * t();
    };
  }
  return e.source = n, e;
}(Sn), S5 = function n(t) {
  var e = Ub.source(t);
  function r(i) {
    if ((i = +i) == 0)
      return t;
    var o = e(i);
    return function() {
      return o() / i;
    };
  }
  return r.source = n, r;
}(Sn), A5 = function n(t) {
  function e(r) {
    return function() {
      return -Math.log1p(-t()) / r;
    };
  }
  return e.source = n, e;
}(Sn), k5 = function n(t) {
  function e(r) {
    if ((r = +r) < 0)
      throw new RangeError("invalid alpha");
    return r = 1 / -r, function() {
      return Math.pow(1 - t(), r);
    };
  }
  return e.source = n, e;
}(Sn), E5 = function n(t) {
  function e(r) {
    if ((r = +r) < 0 || r > 1)
      throw new RangeError("invalid p");
    return function() {
      return Math.floor(t() + r);
    };
  }
  return e.source = n, e;
}(Sn), Hb = function n(t) {
  function e(r) {
    if ((r = +r) < 0 || r > 1)
      throw new RangeError("invalid p");
    return r === 0 ? () => 1 / 0 : r === 1 ? () => 1 : (r = Math.log1p(-r), function() {
      return 1 + Math.floor(Math.log1p(-t()) / r);
    });
  }
  return e.source = n, e;
}(Sn), Hh = function n(t) {
  var e = Uh.source(t)();
  function r(i, o) {
    if ((i = +i) < 0)
      throw new RangeError("invalid k");
    if (i === 0)
      return () => 0;
    if (o = o == null ? 1 : +o, i === 1)
      return () => -Math.log1p(-t()) * o;
    var a = (i < 1 ? i + 1 : i) - 1 / 3, u = 1 / (3 * Math.sqrt(a)), f = i < 1 ? () => Math.pow(t(), 1 / i) : () => 1;
    return function() {
      do {
        do
          var c = e(), s = 1 + u * c;
        while (s <= 0);
        s *= s * s;
        var h = 1 - t();
      } while (h >= 1 - 0.0331 * c * c * c * c && Math.log(h) >= 0.5 * c * c + a * (1 - s + Math.log(s)));
      return a * s * f() * o;
    };
  }
  return r.source = n, r;
}(Sn), Xb = function n(t) {
  var e = Hh.source(t);
  function r(i, o) {
    var a = e(i), u = e(o);
    return function() {
      var f = a();
      return f === 0 ? 0 : f / (f + u());
    };
  }
  return r.source = n, r;
}(Sn), Gb = function n(t) {
  var e = Hb.source(t), r = Xb.source(t);
  function i(o, a) {
    return o = +o, (a = +a) >= 1 ? () => o : a <= 0 ? () => 0 : function() {
      for (var u = 0, f = o, c = a; f * c > 16 && f * (1 - c) > 16; ) {
        var s = Math.floor((f + 1) * c), h = r(s, f - s + 1)();
        h <= c ? (u += s, f -= s, c = (c - h) / (1 - h)) : (f = s - 1, c /= h);
      }
      for (var l = c < 0.5, d = l ? c : 1 - c, p = e(d), m = p(), g = 0; m <= f; ++g)
        m += p();
      return u + (l ? g : f - g);
    };
  }
  return i.source = n, i;
}(Sn), $5 = function n(t) {
  function e(r, i, o) {
    var a;
    return (r = +r) == 0 ? a = (u) => -Math.log(u) : (r = 1 / r, a = (u) => Math.pow(u, r)), i = i == null ? 0 : +i, o = o == null ? 1 : +o, function() {
      return i + o * a(-Math.log1p(-t()));
    };
  }
  return e.source = n, e;
}(Sn), N5 = function n(t) {
  function e(r, i) {
    return r = r == null ? 0 : +r, i = i == null ? 1 : +i, function() {
      return r + i * Math.tan(Math.PI * t());
    };
  }
  return e.source = n, e;
}(Sn), C5 = function n(t) {
  function e(r, i) {
    return r = r == null ? 0 : +r, i = i == null ? 1 : +i, function() {
      var o = t();
      return r + i * Math.log(o / (1 - o));
    };
  }
  return e.source = n, e;
}(Sn), R5 = function n(t) {
  var e = Hh.source(t), r = Gb.source(t);
  function i(o) {
    return function() {
      for (var a = 0, u = o; u > 16; ) {
        var f = Math.floor(0.875 * u), c = e(f)();
        if (c > u)
          return a + r(f - 1, u / c)();
        a += f, u -= c;
      }
      for (var s = -Math.log1p(-t()), h = 0; s <= u; ++h)
        s -= Math.log1p(-t());
      return a + h;
    };
  }
  return i.source = n, i;
}(Sn), Vb = 1664525, Wb = 1013904223, us = 1 / 4294967296;
function P5(n = Math.random()) {
  let t = (0 <= n && n < 1 ? n / us : Math.abs(n)) | 0;
  return () => (t = Vb * t + Wb | 0, us * (t >>> 0));
}
function nt(n, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(n);
      break;
    default:
      this.range(t).domain(n);
      break;
  }
  return this;
}
function kt(n, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof n == "function" ? this.interpolator(n) : this.range(n);
      break;
    }
    default: {
      this.domain(n), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const fs = Symbol("implicit");
function Xh() {
  var n = new Si(), t = [], e = [], r = fs;
  function i(o) {
    let a = n.get(o);
    if (a === void 0) {
      if (r !== fs)
        return r;
      n.set(o, a = t.push(o) - 1);
    }
    return e[a % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length)
      return t.slice();
    t = [], n = new Si();
    for (const a of o)
      n.has(a) || n.set(a, t.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return Xh(t, e).unknown(r);
  }, nt.apply(i, arguments), i;
}
function af() {
  var n = Xh().unknown(void 0), t = n.domain, e = n.range, r = 0, i = 1, o, a, u = !1, f = 0, c = 0, s = 0.5;
  delete n.unknown;
  function h() {
    var l = t().length, d = i < r, p = d ? i : r, m = d ? r : i;
    o = (m - p) / Math.max(1, l - f + c * 2), u && (o = Math.floor(o)), p += (m - p - o * (l - f)) * s, a = o * (1 - f), u && (p = Math.round(p), a = Math.round(a));
    var g = Rt(l).map(function(y) {
      return p + o * y;
    });
    return e(d ? g.reverse() : g);
  }
  return n.domain = function(l) {
    return arguments.length ? (t(l), h()) : t();
  }, n.range = function(l) {
    return arguments.length ? ([r, i] = l, r = +r, i = +i, h()) : [r, i];
  }, n.rangeRound = function(l) {
    return [r, i] = l, r = +r, i = +i, u = !0, h();
  }, n.bandwidth = function() {
    return a;
  }, n.step = function() {
    return o;
  }, n.round = function(l) {
    return arguments.length ? (u = !!l, h()) : u;
  }, n.padding = function(l) {
    return arguments.length ? (f = Math.min(1, c = +l), h()) : f;
  }, n.paddingInner = function(l) {
    return arguments.length ? (f = Math.min(1, l), h()) : f;
  }, n.paddingOuter = function(l) {
    return arguments.length ? (c = +l, h()) : c;
  }, n.align = function(l) {
    return arguments.length ? (s = Math.max(0, Math.min(1, l)), h()) : s;
  }, n.copy = function() {
    return af(t(), [r, i]).round(u).paddingInner(f).paddingOuter(c).align(s);
  }, nt.apply(h(), arguments);
}
function Gh(n) {
  var t = n.copy;
  return n.padding = n.paddingOuter, delete n.paddingInner, delete n.paddingOuter, n.copy = function() {
    return Gh(t());
  }, n;
}
function I5() {
  return Gh(af.apply(null, arguments).paddingInner(1));
}
function Zb(n) {
  return function() {
    return n;
  };
}
function oo(n) {
  return +n;
}
var cs = [0, 1];
function Fn(n) {
  return n;
}
function gu(n, t) {
  return (t -= n = +n) ? function(e) {
    return (e - n) / t;
  } : Zb(isNaN(t) ? NaN : 0.5);
}
function Qb(n, t) {
  var e;
  return n > t && (e = n, n = t, t = e), function(r) {
    return Math.max(n, Math.min(t, r));
  };
}
function Kb(n, t, e) {
  var r = n[0], i = n[1], o = t[0], a = t[1];
  return i < r ? (r = gu(i, r), o = e(a, o)) : (r = gu(r, i), o = e(o, a)), function(u) {
    return o(r(u));
  };
}
function Jb(n, t, e) {
  var r = Math.min(n.length, t.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (n[r] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++a < r; )
    i[a] = gu(n[a], n[a + 1]), o[a] = e(t[a], t[a + 1]);
  return function(u) {
    var f = He(n, u, 1, r) - 1;
    return o[f](i[f](u));
  };
}
function qr(n, t) {
  return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown());
}
function So() {
  var n = cs, t = cs, e = ie, r, i, o, a = Fn, u, f, c;
  function s() {
    var l = Math.min(n.length, t.length);
    return a !== Fn && (a = Qb(n[0], n[l - 1])), u = l > 2 ? Jb : Kb, f = c = null, h;
  }
  function h(l) {
    return l == null || isNaN(l = +l) ? o : (f || (f = u(n.map(r), t, e)))(r(a(l)));
  }
  return h.invert = function(l) {
    return a(i((c || (c = u(t, n.map(r), tt)))(l)));
  }, h.domain = function(l) {
    return arguments.length ? (n = Array.from(l, oo), s()) : n.slice();
  }, h.range = function(l) {
    return arguments.length ? (t = Array.from(l), s()) : t.slice();
  }, h.rangeRound = function(l) {
    return t = Array.from(l), e = Nu, s();
  }, h.clamp = function(l) {
    return arguments.length ? (a = l ? !0 : Fn, s()) : a !== Fn;
  }, h.interpolate = function(l) {
    return arguments.length ? (e = l, s()) : e;
  }, h.unknown = function(l) {
    return arguments.length ? (o = l, h) : o;
  }, function(l, d) {
    return r = l, i = d, s();
  };
}
function uf() {
  return So()(Fn, Fn);
}
function jb(n, t, e, r) {
  var i = Ai(n, t, e), o;
  switch (r = Cr(r == null ? ",f" : r), r.type) {
    case "s": {
      var a = Math.max(Math.abs(n), Math.abs(t));
      return r.precision == null && !isNaN(o = Jm(i, a)) && (r.precision = o), Gl(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = jm(i, Math.max(Math.abs(n), Math.abs(t)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Km(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Vu(r);
}
function Bt(n) {
  var t = n.domain;
  return n.ticks = function(e) {
    var r = t();
    return Re(r[0], r[r.length - 1], e == null ? 10 : e);
  }, n.tickFormat = function(e, r) {
    var i = t();
    return jb(i[0], i[i.length - 1], e == null ? 10 : e, r);
  }, n.nice = function(e) {
    e == null && (e = 10);
    var r = t(), i = 0, o = r.length - 1, a = r[i], u = r[o], f, c, s = 10;
    for (u < a && (c = a, a = u, u = c, c = i, i = o, o = c); s-- > 0; ) {
      if (c = wr(a, u, e), c === f)
        return r[i] = a, r[o] = u, t(r);
      if (c > 0)
        a = Math.floor(a / c) * c, u = Math.ceil(u / c) * c;
      else if (c < 0)
        a = Math.ceil(a * c) / c, u = Math.floor(u * c) / c;
      else
        break;
      f = c;
    }
    return n;
  }, n;
}
function Vh() {
  var n = uf();
  return n.copy = function() {
    return qr(n, Vh());
  }, nt.apply(n, arguments), Bt(n);
}
function n_(n) {
  var t;
  function e(r) {
    return r == null || isNaN(r = +r) ? t : r;
  }
  return e.invert = e, e.domain = e.range = function(r) {
    return arguments.length ? (n = Array.from(r, oo), e) : n.slice();
  }, e.unknown = function(r) {
    return arguments.length ? (t = r, e) : t;
  }, e.copy = function() {
    return n_(n).unknown(t);
  }, n = arguments.length ? Array.from(n, oo) : [0, 1], Bt(e);
}
function Wh(n, t) {
  n = n.slice();
  var e = 0, r = n.length - 1, i = n[e], o = n[r], a;
  return o < i && (a = e, e = r, r = a, a = i, i = o, o = a), n[e] = t.floor(i), n[r] = t.ceil(o), n;
}
function ss(n) {
  return Math.log(n);
}
function ls(n) {
  return Math.exp(n);
}
function t_(n) {
  return -Math.log(-n);
}
function e_(n) {
  return -Math.exp(-n);
}
function r_(n) {
  return isFinite(n) ? +("1e" + n) : n < 0 ? 0 : n;
}
function i_(n) {
  return n === 10 ? r_ : n === Math.E ? Math.exp : (t) => Math.pow(n, t);
}
function o_(n) {
  return n === Math.E ? Math.log : n === 10 && Math.log10 || n === 2 && Math.log2 || (n = Math.log(n), (t) => Math.log(t) / n);
}
function hs(n) {
  return (t, e) => -n(-t, e);
}
function ff(n) {
  const t = n(ss, ls), e = t.domain;
  let r = 10, i, o;
  function a() {
    return i = o_(r), o = i_(r), e()[0] < 0 ? (i = hs(i), o = hs(o), n(t_, e_)) : n(ss, ls), t;
  }
  return t.base = function(u) {
    return arguments.length ? (r = +u, a()) : r;
  }, t.domain = function(u) {
    return arguments.length ? (e(u), a()) : e();
  }, t.ticks = (u) => {
    const f = e();
    let c = f[0], s = f[f.length - 1];
    const h = s < c;
    h && ([c, s] = [s, c]);
    let l = i(c), d = i(s), p, m;
    const g = u == null ? 10 : +u;
    let y = [];
    if (!(r % 1) && d - l < g) {
      if (l = Math.floor(l), d = Math.ceil(d), c > 0) {
        for (; l <= d; ++l)
          for (p = 1; p < r; ++p)
            if (m = l < 0 ? p / o(-l) : p * o(l), !(m < c)) {
              if (m > s)
                break;
              y.push(m);
            }
      } else
        for (; l <= d; ++l)
          for (p = r - 1; p >= 1; --p)
            if (m = l > 0 ? p / o(-l) : p * o(l), !(m < c)) {
              if (m > s)
                break;
              y.push(m);
            }
      y.length * 2 < g && (y = Re(c, s, g));
    } else
      y = Re(l, d, Math.min(d - l, g)).map(o);
    return h ? y.reverse() : y;
  }, t.tickFormat = (u, f) => {
    if (u == null && (u = 10), f == null && (f = r === 10 ? "s" : ","), typeof f != "function" && (!(r % 1) && (f = Cr(f)).precision == null && (f.trim = !0), f = Vu(f)), u === 1 / 0)
      return f;
    const c = Math.max(1, r * u / t.ticks().length);
    return (s) => {
      let h = s / o(Math.round(i(s)));
      return h * r < r - 0.5 && (h *= r), h <= c ? f(s) : "";
    };
  }, t.nice = () => e(Wh(e(), {
    floor: (u) => o(Math.floor(i(u))),
    ceil: (u) => o(Math.ceil(i(u)))
  })), t;
}
function Zh() {
  const n = ff(So()).domain([1, 10]);
  return n.copy = () => qr(n, Zh()).base(n.base()), nt.apply(n, arguments), n;
}
function ds(n) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / n));
  };
}
function gs(n) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * n;
  };
}
function cf(n) {
  var t = 1, e = n(ds(t), gs(t));
  return e.constant = function(r) {
    return arguments.length ? n(ds(t = +r), gs(t)) : t;
  }, Bt(e);
}
function a_() {
  var n = cf(So());
  return n.copy = function() {
    return qr(n, a_()).constant(n.constant());
  }, nt.apply(n, arguments);
}
function ps(n) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n);
  };
}
function u_(n) {
  return n < 0 ? -Math.sqrt(-n) : Math.sqrt(n);
}
function f_(n) {
  return n < 0 ? -n * n : n * n;
}
function sf(n) {
  var t = n(Fn, Fn), e = 1;
  function r() {
    return e === 1 ? n(Fn, Fn) : e === 0.5 ? n(u_, f_) : n(ps(e), ps(1 / e));
  }
  return t.exponent = function(i) {
    return arguments.length ? (e = +i, r()) : e;
  }, Bt(t);
}
function Qh() {
  var n = sf(So());
  return n.copy = function() {
    return qr(n, Qh()).exponent(n.exponent());
  }, nt.apply(n, arguments), n;
}
function z5() {
  return Qh.apply(null, arguments).exponent(0.5);
}
function ms(n) {
  return Math.sign(n) * n * n;
}
function c_(n) {
  return Math.sign(n) * Math.sqrt(Math.abs(n));
}
function s_() {
  var n = uf(), t = [0, 1], e = !1, r;
  function i(o) {
    var a = c_(n(o));
    return isNaN(a) ? r : e ? Math.round(a) : a;
  }
  return i.invert = function(o) {
    return n.invert(ms(o));
  }, i.domain = function(o) {
    return arguments.length ? (n.domain(o), i) : n.domain();
  }, i.range = function(o) {
    return arguments.length ? (n.range((t = Array.from(o, oo)).map(ms)), i) : t.slice();
  }, i.rangeRound = function(o) {
    return i.range(o).round(!0);
  }, i.round = function(o) {
    return arguments.length ? (e = !!o, i) : e;
  }, i.clamp = function(o) {
    return arguments.length ? (n.clamp(o), i) : n.clamp();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return s_(n.domain(), t).round(e).clamp(n.clamp()).unknown(r);
  }, nt.apply(i, arguments), Bt(i);
}
function l_() {
  var n = [], t = [], e = [], r;
  function i() {
    var a = 0, u = Math.max(1, t.length);
    for (e = new Array(u - 1); ++a < u; )
      e[a - 1] = f1(n, a / u);
    return o;
  }
  function o(a) {
    return a == null || isNaN(a = +a) ? r : t[He(e, a)];
  }
  return o.invertExtent = function(a) {
    var u = t.indexOf(a);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? e[u - 1] : n[0],
      u < e.length ? e[u] : n[n.length - 1]
    ];
  }, o.domain = function(a) {
    if (!arguments.length)
      return n.slice();
    n = [];
    for (let u of a)
      u != null && !isNaN(u = +u) && n.push(u);
    return n.sort(gn), i();
  }, o.range = function(a) {
    return arguments.length ? (t = Array.from(a), i()) : t.slice();
  }, o.unknown = function(a) {
    return arguments.length ? (r = a, o) : r;
  }, o.quantiles = function() {
    return e.slice();
  }, o.copy = function() {
    return l_().domain(n).range(t).unknown(r);
  }, nt.apply(o, arguments);
}
function h_() {
  var n = 0, t = 1, e = 1, r = [0.5], i = [0, 1], o;
  function a(f) {
    return f != null && f <= f ? i[He(r, f, 0, e)] : o;
  }
  function u() {
    var f = -1;
    for (r = new Array(e); ++f < e; )
      r[f] = ((f + 1) * t - (f - e) * n) / (e + 1);
    return a;
  }
  return a.domain = function(f) {
    return arguments.length ? ([n, t] = f, n = +n, t = +t, u()) : [n, t];
  }, a.range = function(f) {
    return arguments.length ? (e = (i = Array.from(f)).length - 1, u()) : i.slice();
  }, a.invertExtent = function(f) {
    var c = i.indexOf(f);
    return c < 0 ? [NaN, NaN] : c < 1 ? [n, r[0]] : c >= e ? [r[e - 1], t] : [r[c - 1], r[c]];
  }, a.unknown = function(f) {
    return arguments.length && (o = f), a;
  }, a.thresholds = function() {
    return r.slice();
  }, a.copy = function() {
    return h_().domain([n, t]).range(i).unknown(o);
  }, nt.apply(Bt(a), arguments);
}
function d_() {
  var n = [0.5], t = [0, 1], e, r = 1;
  function i(o) {
    return o != null && o <= o ? t[He(n, o, 0, r)] : e;
  }
  return i.domain = function(o) {
    return arguments.length ? (n = Array.from(o), r = Math.min(n.length, t.length - 1), i) : n.slice();
  }, i.range = function(o) {
    return arguments.length ? (t = Array.from(o), r = Math.min(n.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(o) {
    var a = t.indexOf(o);
    return [n[a - 1], n[a]];
  }, i.unknown = function(o) {
    return arguments.length ? (e = o, i) : e;
  }, i.copy = function() {
    return d_().domain(n).range(t).unknown(e);
  }, nt.apply(i, arguments);
}
var sa = new Date(), la = new Date();
function xn(n, t, e, r) {
  function i(o) {
    return n(o = arguments.length === 0 ? new Date() : new Date(+o)), o;
  }
  return i.floor = function(o) {
    return n(o = new Date(+o)), o;
  }, i.ceil = function(o) {
    return n(o = new Date(o - 1)), t(o, 1), n(o), o;
  }, i.round = function(o) {
    var a = i(o), u = i.ceil(o);
    return o - a < u - o ? a : u;
  }, i.offset = function(o, a) {
    return t(o = new Date(+o), a == null ? 1 : Math.floor(a)), o;
  }, i.range = function(o, a, u) {
    var f = [], c;
    if (o = i.ceil(o), u = u == null ? 1 : Math.floor(u), !(o < a) || !(u > 0))
      return f;
    do
      f.push(c = new Date(+o)), t(o, u), n(o);
    while (c < o && o < a);
    return f;
  }, i.filter = function(o) {
    return xn(function(a) {
      if (a >= a)
        for (; n(a), !o(a); )
          a.setTime(a - 1);
    }, function(a, u) {
      if (a >= a)
        if (u < 0)
          for (; ++u <= 0; )
            for (; t(a, -1), !o(a); )
              ;
        else
          for (; --u >= 0; )
            for (; t(a, 1), !o(a); )
              ;
    });
  }, e && (i.count = function(o, a) {
    return sa.setTime(+o), la.setTime(+a), n(sa), n(la), Math.floor(e(sa, la));
  }, i.every = function(o) {
    return o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? function(a) {
      return r(a) % o === 0;
    } : function(a) {
      return i.count(0, a) % o === 0;
    }) : i;
  }), i;
}
var ao = xn(function() {
}, function(n, t) {
  n.setTime(+n + t);
}, function(n, t) {
  return t - n;
});
ao.every = function(n) {
  return n = Math.floor(n), !isFinite(n) || !(n > 0) ? null : n > 1 ? xn(function(t) {
    t.setTime(Math.floor(t / n) * n);
  }, function(t, e) {
    t.setTime(+t + e * n);
  }, function(t, e) {
    return (e - t) / n;
  }) : ao;
};
const g_ = ao;
var D5 = ao.range;
const wt = 1e3, jn = wt * 60, xt = jn * 60, te = xt * 24, lf = te * 7, ys = te * 30, ha = te * 365;
var Kh = xn(function(n) {
  n.setTime(n - n.getMilliseconds());
}, function(n, t) {
  n.setTime(+n + t * wt);
}, function(n, t) {
  return (t - n) / wt;
}, function(n) {
  return n.getUTCSeconds();
});
const Me = Kh;
var O5 = Kh.range, Jh = xn(function(n) {
  n.setTime(n - n.getMilliseconds() - n.getSeconds() * wt);
}, function(n, t) {
  n.setTime(+n + t * jn);
}, function(n, t) {
  return (t - n) / jn;
}, function(n) {
  return n.getMinutes();
});
const jh = Jh;
var F5 = Jh.range, n0 = xn(function(n) {
  n.setTime(n - n.getMilliseconds() - n.getSeconds() * wt - n.getMinutes() * jn);
}, function(n, t) {
  n.setTime(+n + t * xt);
}, function(n, t) {
  return (t - n) / xt;
}, function(n) {
  return n.getHours();
});
const t0 = n0;
var B5 = n0.range, e0 = xn(
  (n) => n.setHours(0, 0, 0, 0),
  (n, t) => n.setDate(n.getDate() + t),
  (n, t) => (t - n - (t.getTimezoneOffset() - n.getTimezoneOffset()) * jn) / te,
  (n) => n.getDate() - 1
);
const Ao = e0;
var L5 = e0.range;
function fe(n) {
  return xn(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - n) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, e) {
    t.setDate(t.getDate() + e * 7);
  }, function(t, e) {
    return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * jn) / lf;
  });
}
var ko = fe(0), uo = fe(1), p_ = fe(2), m_ = fe(3), qe = fe(4), y_ = fe(5), b_ = fe(6), Y5 = ko.range, q5 = uo.range, U5 = p_.range, H5 = m_.range, X5 = qe.range, G5 = y_.range, V5 = b_.range, r0 = xn(function(n) {
  n.setDate(1), n.setHours(0, 0, 0, 0);
}, function(n, t) {
  n.setMonth(n.getMonth() + t);
}, function(n, t) {
  return t.getMonth() - n.getMonth() + (t.getFullYear() - n.getFullYear()) * 12;
}, function(n) {
  return n.getMonth();
});
const i0 = r0;
var W5 = r0.range, hf = xn(function(n) {
  n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
}, function(n, t) {
  n.setFullYear(n.getFullYear() + t);
}, function(n, t) {
  return t.getFullYear() - n.getFullYear();
}, function(n) {
  return n.getFullYear();
});
hf.every = function(n) {
  return !isFinite(n = Math.floor(n)) || !(n > 0) ? null : xn(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / n) * n), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, e) {
    t.setFullYear(t.getFullYear() + e * n);
  });
};
const ee = hf;
var Z5 = hf.range, o0 = xn(function(n) {
  n.setUTCSeconds(0, 0);
}, function(n, t) {
  n.setTime(+n + t * jn);
}, function(n, t) {
  return (t - n) / jn;
}, function(n) {
  return n.getUTCMinutes();
});
const a0 = o0;
var Q5 = o0.range, u0 = xn(function(n) {
  n.setUTCMinutes(0, 0, 0);
}, function(n, t) {
  n.setTime(+n + t * xt);
}, function(n, t) {
  return (t - n) / xt;
}, function(n) {
  return n.getUTCHours();
});
const f0 = u0;
var K5 = u0.range, c0 = xn(function(n) {
  n.setUTCHours(0, 0, 0, 0);
}, function(n, t) {
  n.setUTCDate(n.getUTCDate() + t);
}, function(n, t) {
  return (t - n) / te;
}, function(n) {
  return n.getUTCDate() - 1;
});
const Eo = c0;
var J5 = c0.range;
function ce(n) {
  return xn(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - n) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, e) {
    t.setUTCDate(t.getUTCDate() + e * 7);
  }, function(t, e) {
    return (e - t) / lf;
  });
}
var $o = ce(0), fo = ce(1), __ = ce(2), v_ = ce(3), Ue = ce(4), w_ = ce(5), x_ = ce(6), j5 = $o.range, n4 = fo.range, t4 = __.range, e4 = v_.range, r4 = Ue.range, i4 = w_.range, o4 = x_.range, s0 = xn(function(n) {
  n.setUTCDate(1), n.setUTCHours(0, 0, 0, 0);
}, function(n, t) {
  n.setUTCMonth(n.getUTCMonth() + t);
}, function(n, t) {
  return t.getUTCMonth() - n.getUTCMonth() + (t.getUTCFullYear() - n.getUTCFullYear()) * 12;
}, function(n) {
  return n.getUTCMonth();
});
const l0 = s0;
var a4 = s0.range, df = xn(function(n) {
  n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
}, function(n, t) {
  n.setUTCFullYear(n.getUTCFullYear() + t);
}, function(n, t) {
  return t.getUTCFullYear() - n.getUTCFullYear();
}, function(n) {
  return n.getUTCFullYear();
});
df.every = function(n) {
  return !isFinite(n = Math.floor(n)) || !(n > 0) ? null : xn(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / n) * n), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, e) {
    t.setUTCFullYear(t.getUTCFullYear() + e * n);
  });
};
const re = df;
var u4 = df.range;
function h0(n, t, e, r, i, o) {
  const a = [
    [Me, 1, wt],
    [Me, 5, 5 * wt],
    [Me, 15, 15 * wt],
    [Me, 30, 30 * wt],
    [o, 1, jn],
    [o, 5, 5 * jn],
    [o, 15, 15 * jn],
    [o, 30, 30 * jn],
    [i, 1, xt],
    [i, 3, 3 * xt],
    [i, 6, 6 * xt],
    [i, 12, 12 * xt],
    [r, 1, te],
    [r, 2, 2 * te],
    [e, 1, lf],
    [t, 1, ys],
    [t, 3, 3 * ys],
    [n, 1, ha]
  ];
  function u(c, s, h) {
    const l = s < c;
    l && ([c, s] = [s, c]);
    const d = h && typeof h.range == "function" ? h : f(c, s, h), p = d ? d.range(c, +s + 1) : [];
    return l ? p.reverse() : p;
  }
  function f(c, s, h) {
    const l = Math.abs(s - c) / h, d = mu(([, , g]) => g).right(a, l);
    if (d === a.length)
      return n.every(Ai(c / ha, s / ha, h));
    if (d === 0)
      return g_.every(Math.max(Ai(c, s, h), 1));
    const [p, m] = a[l / a[d - 1][2] < a[d][2] / l ? d - 1 : d];
    return p.every(m);
  }
  return [u, f];
}
const [M_, T_] = h0(re, l0, $o, Eo, f0, a0), [S_, A_] = h0(ee, i0, ko, Ao, t0, jh);
function da(n) {
  if (0 <= n.y && n.y < 100) {
    var t = new Date(-1, n.m, n.d, n.H, n.M, n.S, n.L);
    return t.setFullYear(n.y), t;
  }
  return new Date(n.y, n.m, n.d, n.H, n.M, n.S, n.L);
}
function ga(n) {
  if (0 <= n.y && n.y < 100) {
    var t = new Date(Date.UTC(-1, n.m, n.d, n.H, n.M, n.S, n.L));
    return t.setUTCFullYear(n.y), t;
  }
  return new Date(Date.UTC(n.y, n.m, n.d, n.H, n.M, n.S, n.L));
}
function tr(n, t, e) {
  return { y: n, m: t, d: e, H: 0, M: 0, S: 0, L: 0 };
}
function k_(n) {
  var t = n.dateTime, e = n.date, r = n.time, i = n.periods, o = n.days, a = n.shortDays, u = n.months, f = n.shortMonths, c = er(i), s = rr(i), h = er(o), l = rr(o), d = er(a), p = rr(a), m = er(u), g = rr(u), y = er(f), v = rr(f), _ = {
    a: N,
    A: I,
    b: z,
    B: O,
    c: null,
    d: Ms,
    e: Ms,
    f: Q_,
    g: av,
    G: fv,
    H: V_,
    I: W_,
    j: Z_,
    L: d0,
    m: K_,
    M: J_,
    p: B,
    q,
    Q: As,
    s: ks,
    S: j_,
    u: nv,
    U: tv,
    V: ev,
    w: rv,
    W: iv,
    x: null,
    X: null,
    y: ov,
    Y: uv,
    Z: cv,
    "%": Ss
  }, b = {
    a: tn,
    A: Z,
    b: en,
    B: mn,
    c: null,
    d: Ts,
    e: Ts,
    f: dv,
    g: Mv,
    G: Sv,
    H: sv,
    I: lv,
    j: hv,
    L: p0,
    m: gv,
    M: pv,
    p: j,
    q: pn,
    Q: As,
    s: ks,
    S: mv,
    u: yv,
    U: bv,
    V: _v,
    w: vv,
    W: wv,
    x: null,
    X: null,
    y: xv,
    Y: Tv,
    Z: Av,
    "%": Ss
  }, w = {
    a: S,
    A: T,
    b: R,
    B: C,
    c: M,
    d: ws,
    e: ws,
    f: U_,
    g: vs,
    G: _s,
    H: xs,
    I: xs,
    j: B_,
    L: q_,
    m: F_,
    M: L_,
    p: P,
    q: O_,
    Q: X_,
    s: G_,
    S: Y_,
    u: R_,
    U: P_,
    V: I_,
    w: C_,
    W: z_,
    x: A,
    X: k,
    y: vs,
    Y: _s,
    Z: D_,
    "%": H_
  };
  _.x = x(e, _), _.X = x(r, _), _.c = x(t, _), b.x = x(e, b), b.X = x(r, b), b.c = x(t, b);
  function x(F, G) {
    return function(K) {
      var D = [], sn = -1, rn = 0, Cn = F.length, Rn, X, ln;
      for (K instanceof Date || (K = new Date(+K)); ++sn < Cn; )
        F.charCodeAt(sn) === 37 && (D.push(F.slice(rn, sn)), (X = bs[Rn = F.charAt(++sn)]) != null ? Rn = F.charAt(++sn) : X = Rn === "e" ? " " : "0", (ln = G[Rn]) && (Rn = ln(K, X)), D.push(Rn), rn = sn + 1);
      return D.push(F.slice(rn, sn)), D.join("");
    };
  }
  function E(F, G) {
    return function(K) {
      var D = tr(1900, void 0, 1), sn = $(D, F, K += "", 0), rn, Cn;
      if (sn != K.length)
        return null;
      if ("Q" in D)
        return new Date(D.Q);
      if ("s" in D)
        return new Date(D.s * 1e3 + ("L" in D ? D.L : 0));
      if (G && !("Z" in D) && (D.Z = 0), "p" in D && (D.H = D.H % 12 + D.p * 12), D.m === void 0 && (D.m = "q" in D ? D.q : 0), "V" in D) {
        if (D.V < 1 || D.V > 53)
          return null;
        "w" in D || (D.w = 1), "Z" in D ? (rn = ga(tr(D.y, 0, 1)), Cn = rn.getUTCDay(), rn = Cn > 4 || Cn === 0 ? fo.ceil(rn) : fo(rn), rn = Eo.offset(rn, (D.V - 1) * 7), D.y = rn.getUTCFullYear(), D.m = rn.getUTCMonth(), D.d = rn.getUTCDate() + (D.w + 6) % 7) : (rn = da(tr(D.y, 0, 1)), Cn = rn.getDay(), rn = Cn > 4 || Cn === 0 ? uo.ceil(rn) : uo(rn), rn = Ao.offset(rn, (D.V - 1) * 7), D.y = rn.getFullYear(), D.m = rn.getMonth(), D.d = rn.getDate() + (D.w + 6) % 7);
      } else
        ("W" in D || "U" in D) && ("w" in D || (D.w = "u" in D ? D.u % 7 : "W" in D ? 1 : 0), Cn = "Z" in D ? ga(tr(D.y, 0, 1)).getUTCDay() : da(tr(D.y, 0, 1)).getDay(), D.m = 0, D.d = "W" in D ? (D.w + 6) % 7 + D.W * 7 - (Cn + 5) % 7 : D.w + D.U * 7 - (Cn + 6) % 7);
      return "Z" in D ? (D.H += D.Z / 100 | 0, D.M += D.Z % 100, ga(D)) : da(D);
    };
  }
  function $(F, G, K, D) {
    for (var sn = 0, rn = G.length, Cn = K.length, Rn, X; sn < rn; ) {
      if (D >= Cn)
        return -1;
      if (Rn = G.charCodeAt(sn++), Rn === 37) {
        if (Rn = G.charAt(sn++), X = w[Rn in bs ? G.charAt(sn++) : Rn], !X || (D = X(F, K, D)) < 0)
          return -1;
      } else if (Rn != K.charCodeAt(D++))
        return -1;
    }
    return D;
  }
  function P(F, G, K) {
    var D = c.exec(G.slice(K));
    return D ? (F.p = s.get(D[0].toLowerCase()), K + D[0].length) : -1;
  }
  function S(F, G, K) {
    var D = d.exec(G.slice(K));
    return D ? (F.w = p.get(D[0].toLowerCase()), K + D[0].length) : -1;
  }
  function T(F, G, K) {
    var D = h.exec(G.slice(K));
    return D ? (F.w = l.get(D[0].toLowerCase()), K + D[0].length) : -1;
  }
  function R(F, G, K) {
    var D = y.exec(G.slice(K));
    return D ? (F.m = v.get(D[0].toLowerCase()), K + D[0].length) : -1;
  }
  function C(F, G, K) {
    var D = m.exec(G.slice(K));
    return D ? (F.m = g.get(D[0].toLowerCase()), K + D[0].length) : -1;
  }
  function M(F, G, K) {
    return $(F, t, G, K);
  }
  function A(F, G, K) {
    return $(F, e, G, K);
  }
  function k(F, G, K) {
    return $(F, r, G, K);
  }
  function N(F) {
    return a[F.getDay()];
  }
  function I(F) {
    return o[F.getDay()];
  }
  function z(F) {
    return f[F.getMonth()];
  }
  function O(F) {
    return u[F.getMonth()];
  }
  function B(F) {
    return i[+(F.getHours() >= 12)];
  }
  function q(F) {
    return 1 + ~~(F.getMonth() / 3);
  }
  function tn(F) {
    return a[F.getUTCDay()];
  }
  function Z(F) {
    return o[F.getUTCDay()];
  }
  function en(F) {
    return f[F.getUTCMonth()];
  }
  function mn(F) {
    return u[F.getUTCMonth()];
  }
  function j(F) {
    return i[+(F.getUTCHours() >= 12)];
  }
  function pn(F) {
    return 1 + ~~(F.getUTCMonth() / 3);
  }
  return {
    format: function(F) {
      var G = x(F += "", _);
      return G.toString = function() {
        return F;
      }, G;
    },
    parse: function(F) {
      var G = E(F += "", !1);
      return G.toString = function() {
        return F;
      }, G;
    },
    utcFormat: function(F) {
      var G = x(F += "", b);
      return G.toString = function() {
        return F;
      }, G;
    },
    utcParse: function(F) {
      var G = E(F += "", !0);
      return G.toString = function() {
        return F;
      }, G;
    }
  };
}
var bs = { "-": "", _: " ", 0: "0" }, Mn = /^\s*\d+/, E_ = /^%/, $_ = /[\\^$*+?|[\]().{}]/g;
function nn(n, t, e) {
  var r = n < 0 ? "-" : "", i = (r ? -n : n) + "", o = i.length;
  return r + (o < e ? new Array(e - o + 1).join(t) + i : i);
}
function N_(n) {
  return n.replace($_, "\\$&");
}
function er(n) {
  return new RegExp("^(?:" + n.map(N_).join("|") + ")", "i");
}
function rr(n) {
  return new Map(n.map((t, e) => [t.toLowerCase(), e]));
}
function C_(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 1));
  return r ? (n.w = +r[0], e + r[0].length) : -1;
}
function R_(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 1));
  return r ? (n.u = +r[0], e + r[0].length) : -1;
}
function P_(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 2));
  return r ? (n.U = +r[0], e + r[0].length) : -1;
}
function I_(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 2));
  return r ? (n.V = +r[0], e + r[0].length) : -1;
}
function z_(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 2));
  return r ? (n.W = +r[0], e + r[0].length) : -1;
}
function _s(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 4));
  return r ? (n.y = +r[0], e + r[0].length) : -1;
}
function vs(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 2));
  return r ? (n.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
}
function D_(n, t, e) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(e, e + 6));
  return r ? (n.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
}
function O_(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 1));
  return r ? (n.q = r[0] * 3 - 3, e + r[0].length) : -1;
}
function F_(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 2));
  return r ? (n.m = r[0] - 1, e + r[0].length) : -1;
}
function ws(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 2));
  return r ? (n.d = +r[0], e + r[0].length) : -1;
}
function B_(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 3));
  return r ? (n.m = 0, n.d = +r[0], e + r[0].length) : -1;
}
function xs(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 2));
  return r ? (n.H = +r[0], e + r[0].length) : -1;
}
function L_(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 2));
  return r ? (n.M = +r[0], e + r[0].length) : -1;
}
function Y_(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 2));
  return r ? (n.S = +r[0], e + r[0].length) : -1;
}
function q_(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 3));
  return r ? (n.L = +r[0], e + r[0].length) : -1;
}
function U_(n, t, e) {
  var r = Mn.exec(t.slice(e, e + 6));
  return r ? (n.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
}
function H_(n, t, e) {
  var r = E_.exec(t.slice(e, e + 1));
  return r ? e + r[0].length : -1;
}
function X_(n, t, e) {
  var r = Mn.exec(t.slice(e));
  return r ? (n.Q = +r[0], e + r[0].length) : -1;
}
function G_(n, t, e) {
  var r = Mn.exec(t.slice(e));
  return r ? (n.s = +r[0], e + r[0].length) : -1;
}
function Ms(n, t) {
  return nn(n.getDate(), t, 2);
}
function V_(n, t) {
  return nn(n.getHours(), t, 2);
}
function W_(n, t) {
  return nn(n.getHours() % 12 || 12, t, 2);
}
function Z_(n, t) {
  return nn(1 + Ao.count(ee(n), n), t, 3);
}
function d0(n, t) {
  return nn(n.getMilliseconds(), t, 3);
}
function Q_(n, t) {
  return d0(n, t) + "000";
}
function K_(n, t) {
  return nn(n.getMonth() + 1, t, 2);
}
function J_(n, t) {
  return nn(n.getMinutes(), t, 2);
}
function j_(n, t) {
  return nn(n.getSeconds(), t, 2);
}
function nv(n) {
  var t = n.getDay();
  return t === 0 ? 7 : t;
}
function tv(n, t) {
  return nn(ko.count(ee(n) - 1, n), t, 2);
}
function g0(n) {
  var t = n.getDay();
  return t >= 4 || t === 0 ? qe(n) : qe.ceil(n);
}
function ev(n, t) {
  return n = g0(n), nn(qe.count(ee(n), n) + (ee(n).getDay() === 4), t, 2);
}
function rv(n) {
  return n.getDay();
}
function iv(n, t) {
  return nn(uo.count(ee(n) - 1, n), t, 2);
}
function ov(n, t) {
  return nn(n.getFullYear() % 100, t, 2);
}
function av(n, t) {
  return n = g0(n), nn(n.getFullYear() % 100, t, 2);
}
function uv(n, t) {
  return nn(n.getFullYear() % 1e4, t, 4);
}
function fv(n, t) {
  var e = n.getDay();
  return n = e >= 4 || e === 0 ? qe(n) : qe.ceil(n), nn(n.getFullYear() % 1e4, t, 4);
}
function cv(n) {
  var t = n.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + nn(t / 60 | 0, "0", 2) + nn(t % 60, "0", 2);
}
function Ts(n, t) {
  return nn(n.getUTCDate(), t, 2);
}
function sv(n, t) {
  return nn(n.getUTCHours(), t, 2);
}
function lv(n, t) {
  return nn(n.getUTCHours() % 12 || 12, t, 2);
}
function hv(n, t) {
  return nn(1 + Eo.count(re(n), n), t, 3);
}
function p0(n, t) {
  return nn(n.getUTCMilliseconds(), t, 3);
}
function dv(n, t) {
  return p0(n, t) + "000";
}
function gv(n, t) {
  return nn(n.getUTCMonth() + 1, t, 2);
}
function pv(n, t) {
  return nn(n.getUTCMinutes(), t, 2);
}
function mv(n, t) {
  return nn(n.getUTCSeconds(), t, 2);
}
function yv(n) {
  var t = n.getUTCDay();
  return t === 0 ? 7 : t;
}
function bv(n, t) {
  return nn($o.count(re(n) - 1, n), t, 2);
}
function m0(n) {
  var t = n.getUTCDay();
  return t >= 4 || t === 0 ? Ue(n) : Ue.ceil(n);
}
function _v(n, t) {
  return n = m0(n), nn(Ue.count(re(n), n) + (re(n).getUTCDay() === 4), t, 2);
}
function vv(n) {
  return n.getUTCDay();
}
function wv(n, t) {
  return nn(fo.count(re(n) - 1, n), t, 2);
}
function xv(n, t) {
  return nn(n.getUTCFullYear() % 100, t, 2);
}
function Mv(n, t) {
  return n = m0(n), nn(n.getUTCFullYear() % 100, t, 2);
}
function Tv(n, t) {
  return nn(n.getUTCFullYear() % 1e4, t, 4);
}
function Sv(n, t) {
  var e = n.getUTCDay();
  return n = e >= 4 || e === 0 ? Ue(n) : Ue.ceil(n), nn(n.getUTCFullYear() % 1e4, t, 4);
}
function Av() {
  return "+0000";
}
function Ss() {
  return "%";
}
function As(n) {
  return +n;
}
function ks(n) {
  return Math.floor(+n / 1e3);
}
var _e, y0, kv, gf, b0;
Ev({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Ev(n) {
  return _e = k_(n), y0 = _e.format, kv = _e.parse, gf = _e.utcFormat, b0 = _e.utcParse, _e;
}
var _0 = "%Y-%m-%dT%H:%M:%S.%LZ";
function $v(n) {
  return n.toISOString();
}
var Nv = Date.prototype.toISOString ? $v : gf(_0);
const f4 = Nv;
function Cv(n) {
  var t = new Date(n);
  return isNaN(t) ? null : t;
}
var Rv = +new Date("2000-01-01T00:00:00.000Z") ? Cv : b0(_0);
const c4 = Rv;
function Pv(n) {
  return new Date(n);
}
function Iv(n) {
  return n instanceof Date ? +n : +new Date(+n);
}
function pf(n, t, e, r, i, o, a, u, f, c) {
  var s = uf(), h = s.invert, l = s.domain, d = c(".%L"), p = c(":%S"), m = c("%I:%M"), g = c("%I %p"), y = c("%a %d"), v = c("%b %d"), _ = c("%B"), b = c("%Y");
  function w(x) {
    return (f(x) < x ? d : u(x) < x ? p : a(x) < x ? m : o(x) < x ? g : r(x) < x ? i(x) < x ? y : v : e(x) < x ? _ : b)(x);
  }
  return s.invert = function(x) {
    return new Date(h(x));
  }, s.domain = function(x) {
    return arguments.length ? l(Array.from(x, Iv)) : l().map(Pv);
  }, s.ticks = function(x) {
    var E = l();
    return n(E[0], E[E.length - 1], x == null ? 10 : x);
  }, s.tickFormat = function(x, E) {
    return E == null ? w : c(E);
  }, s.nice = function(x) {
    var E = l();
    return (!x || typeof x.range != "function") && (x = t(E[0], E[E.length - 1], x == null ? 10 : x)), x ? l(Wh(E, x)) : s;
  }, s.copy = function() {
    return qr(s, pf(n, t, e, r, i, o, a, u, f, c));
  }, s;
}
function s4() {
  return nt.apply(pf(S_, A_, ee, i0, ko, Ao, t0, jh, Me, y0).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function l4() {
  return nt.apply(pf(M_, T_, re, l0, $o, Eo, f0, a0, Me, gf).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function No() {
  var n = 0, t = 1, e, r, i, o, a = Fn, u = !1, f;
  function c(h) {
    return h == null || isNaN(h = +h) ? f : a(i === 0 ? 0.5 : (h = (o(h) - e) * i, u ? Math.max(0, Math.min(1, h)) : h));
  }
  c.domain = function(h) {
    return arguments.length ? ([n, t] = h, e = o(n = +n), r = o(t = +t), i = e === r ? 0 : 1 / (r - e), c) : [n, t];
  }, c.clamp = function(h) {
    return arguments.length ? (u = !!h, c) : u;
  }, c.interpolator = function(h) {
    return arguments.length ? (a = h, c) : a;
  };
  function s(h) {
    return function(l) {
      var d, p;
      return arguments.length ? ([d, p] = l, a = h(d, p), c) : [a(0), a(1)];
    };
  }
  return c.range = s(ie), c.rangeRound = s(Nu), c.unknown = function(h) {
    return arguments.length ? (f = h, c) : f;
  }, function(h) {
    return o = h, e = h(n), r = h(t), i = e === r ? 0 : 1 / (r - e), c;
  };
}
function Lt(n, t) {
  return t.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown());
}
function zv() {
  var n = Bt(No()(Fn));
  return n.copy = function() {
    return Lt(n, zv());
  }, kt.apply(n, arguments);
}
function Dv() {
  var n = ff(No()).domain([1, 10]);
  return n.copy = function() {
    return Lt(n, Dv()).base(n.base());
  }, kt.apply(n, arguments);
}
function Ov() {
  var n = cf(No());
  return n.copy = function() {
    return Lt(n, Ov()).constant(n.constant());
  }, kt.apply(n, arguments);
}
function v0() {
  var n = sf(No());
  return n.copy = function() {
    return Lt(n, v0()).exponent(n.exponent());
  }, kt.apply(n, arguments);
}
function h4() {
  return v0.apply(null, arguments).exponent(0.5);
}
function Fv() {
  var n = [], t = Fn;
  function e(r) {
    if (r != null && !isNaN(r = +r))
      return t((He(n, r, 1) - 1) / (n.length - 1));
  }
  return e.domain = function(r) {
    if (!arguments.length)
      return n.slice();
    n = [];
    for (let i of r)
      i != null && !isNaN(i = +i) && n.push(i);
    return n.sort(gn), e;
  }, e.interpolator = function(r) {
    return arguments.length ? (t = r, e) : t;
  }, e.range = function() {
    return n.map((r, i) => t(i / (n.length - 1)));
  }, e.quantiles = function(r) {
    return Array.from({ length: r + 1 }, (i, o) => ki(n, o / r));
  }, e.copy = function() {
    return Fv(t).domain(n);
  }, kt.apply(e, arguments);
}
function Co() {
  var n = 0, t = 0.5, e = 1, r = 1, i, o, a, u, f, c = Fn, s, h = !1, l;
  function d(m) {
    return isNaN(m = +m) ? l : (m = 0.5 + ((m = +s(m)) - o) * (r * m < r * o ? u : f), c(h ? Math.max(0, Math.min(1, m)) : m));
  }
  d.domain = function(m) {
    return arguments.length ? ([n, t, e] = m, i = s(n = +n), o = s(t = +t), a = s(e = +e), u = i === o ? 0 : 0.5 / (o - i), f = o === a ? 0 : 0.5 / (a - o), r = o < i ? -1 : 1, d) : [n, t, e];
  }, d.clamp = function(m) {
    return arguments.length ? (h = !!m, d) : h;
  }, d.interpolator = function(m) {
    return arguments.length ? (c = m, d) : c;
  };
  function p(m) {
    return function(g) {
      var y, v, _;
      return arguments.length ? ([y, v, _] = g, c = Ug(m, [y, v, _]), d) : [c(0), c(0.5), c(1)];
    };
  }
  return d.range = p(ie), d.rangeRound = p(Nu), d.unknown = function(m) {
    return arguments.length ? (l = m, d) : l;
  }, function(m) {
    return s = m, i = m(n), o = m(t), a = m(e), u = i === o ? 0 : 0.5 / (o - i), f = o === a ? 0 : 0.5 / (a - o), r = o < i ? -1 : 1, d;
  };
}
function Bv() {
  var n = Bt(Co()(Fn));
  return n.copy = function() {
    return Lt(n, Bv());
  }, kt.apply(n, arguments);
}
function Lv() {
  var n = ff(Co()).domain([0.1, 1, 10]);
  return n.copy = function() {
    return Lt(n, Lv()).base(n.base());
  }, kt.apply(n, arguments);
}
function Yv() {
  var n = cf(Co());
  return n.copy = function() {
    return Lt(n, Yv()).constant(n.constant());
  }, kt.apply(n, arguments);
}
function w0() {
  var n = sf(Co());
  return n.copy = function() {
    return Lt(n, w0()).exponent(n.exponent());
  }, kt.apply(n, arguments);
}
function d4() {
  return w0.apply(null, arguments).exponent(0.5);
}
function W(n) {
  for (var t = n.length / 6 | 0, e = new Array(t), r = 0; r < t; )
    e[r] = "#" + n.slice(r * 6, ++r * 6);
  return e;
}
const g4 = W("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), p4 = W("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), m4 = W("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), y4 = W("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), b4 = W("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), _4 = W("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), v4 = W("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), w4 = W("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), x4 = W("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), M4 = W("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"), an = (n) => Ng(n[n.length - 1]);
var qv = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(W);
const T4 = an(qv);
var Uv = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(W);
const S4 = an(Uv);
var Hv = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(W);
const A4 = an(Hv);
var Xv = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(W);
const k4 = an(Xv);
var Gv = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(W);
const E4 = an(Gv);
var Vv = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(W);
const $4 = an(Vv);
var Wv = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(W);
const N4 = an(Wv);
var Zv = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(W);
const C4 = an(Zv);
var Qv = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(W);
const R4 = an(Qv);
var Kv = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(W);
const P4 = an(Kv);
var Jv = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(W);
const I4 = an(Jv);
var jv = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(W);
const z4 = an(jv);
var n3 = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(W);
const D4 = an(n3);
var t3 = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(W);
const O4 = an(t3);
var e3 = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(W);
const F4 = an(e3);
var r3 = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(W);
const B4 = an(r3);
var i3 = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(W);
const L4 = an(i3);
var o3 = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(W);
const Y4 = an(o3);
var a3 = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(W);
const q4 = an(a3);
var u3 = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(W);
const U4 = an(u3);
var f3 = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(W);
const H4 = an(f3);
var c3 = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(W);
const X4 = an(c3);
var s3 = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(W);
const G4 = an(s3);
var l3 = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(W);
const V4 = an(l3);
var h3 = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(W);
const W4 = an(h3);
var d3 = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(W);
const Z4 = an(d3);
var g3 = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(W);
const Q4 = an(g3);
function K4(n) {
  return n = Math.max(0, Math.min(1, n)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - n * (35.34 - n * (2381.73 - n * (6402.7 - n * (7024.72 - n * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + n * (170.73 + n * (52.82 - n * (131.46 - n * (176.58 - n * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + n * (442.36 - n * (2482.43 - n * (6167.24 - n * (6614.94 - n * 2475.67))))))) + ")";
}
const J4 = Cu(ht(300, 0.5, 0), ht(-240, 0.5, 1));
var j4 = Cu(ht(-100, 0.75, 0.35), ht(80, 1.5, 0.8)), n7 = Cu(ht(260, 0.75, 0.35), ht(80, 1.5, 0.8)), ui = ht();
function t7(n) {
  (n < 0 || n > 1) && (n -= Math.floor(n));
  var t = Math.abs(n - 0.5);
  return ui.h = 360 * n - 100, ui.s = 1.5 - 1.5 * t, ui.l = 0.8 - 0.9 * t, ui + "";
}
var fi = Ar(), p3 = Math.PI / 3, m3 = Math.PI * 2 / 3;
function e7(n) {
  var t;
  return n = (0.5 - n) * Math.PI, fi.r = 255 * (t = Math.sin(n)) * t, fi.g = 255 * (t = Math.sin(n + p3)) * t, fi.b = 255 * (t = Math.sin(n + m3)) * t, fi + "";
}
function r7(n) {
  return n = Math.max(0, Math.min(1, n)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + n * (1172.33 - n * (10793.56 - n * (33300.12 - n * (38394.49 - n * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + n * (557.33 + n * (1225.33 - n * (3574.96 - n * (1073.77 + n * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + n * (3211.1 - n * (15327.97 - n * (27814 - n * (22569.18 - n * 6838.66))))))) + ")";
}
function Ro(n) {
  var t = n.length;
  return function(e) {
    return n[Math.max(0, Math.min(t - 1, Math.floor(e * t)))];
  };
}
const i7 = Ro(W("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var o7 = Ro(W("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), a7 = Ro(W("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), u7 = Ro(W("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function V(n) {
  return function() {
    return n;
  };
}
const Es = Math.abs, $n = Math.atan2, _t = Math.cos, y3 = Math.max, $e = Math.min, Xn = Math.sin, un = Math.sqrt, Nn = 1e-12, Dt = Math.PI, co = Dt / 2, It = 2 * Dt;
function b3(n) {
  return n > 1 ? 0 : n < -1 ? Dt : Math.acos(n);
}
function $s(n) {
  return n >= 1 ? co : n <= -1 ? -co : Math.asin(n);
}
function _3(n) {
  return n.innerRadius;
}
function v3(n) {
  return n.outerRadius;
}
function w3(n) {
  return n.startAngle;
}
function x3(n) {
  return n.endAngle;
}
function M3(n) {
  return n && n.padAngle;
}
function T3(n, t, e, r, i, o, a, u) {
  var f = e - n, c = r - t, s = a - i, h = u - o, l = h * f - s * c;
  if (!(l * l < Nn))
    return l = (s * (t - o) - h * (n - i)) / l, [n + l * f, t + l * c];
}
function ci(n, t, e, r, i, o, a) {
  var u = n - e, f = t - r, c = (a ? o : -o) / un(u * u + f * f), s = c * f, h = -c * u, l = n + s, d = t + h, p = e + s, m = r + h, g = (l + p) / 2, y = (d + m) / 2, v = p - l, _ = m - d, b = v * v + _ * _, w = i - o, x = l * m - p * d, E = (_ < 0 ? -1 : 1) * un(y3(0, w * w * b - x * x)), $ = (x * _ - v * E) / b, P = (-x * v - _ * E) / b, S = (x * _ + v * E) / b, T = (-x * v + _ * E) / b, R = $ - g, C = P - y, M = S - g, A = T - y;
  return R * R + C * C > M * M + A * A && ($ = S, P = T), {
    cx: $,
    cy: P,
    x01: -s,
    y01: -h,
    x11: $ * (i / w - 1),
    y11: P * (i / w - 1)
  };
}
function f7() {
  var n = _3, t = v3, e = V(0), r = null, i = w3, o = x3, a = M3, u = null;
  function f() {
    var c, s, h = +n.apply(this, arguments), l = +t.apply(this, arguments), d = i.apply(this, arguments) - co, p = o.apply(this, arguments) - co, m = Es(p - d), g = p > d;
    if (u || (u = c = oe()), l < h && (s = l, l = h, h = s), !(l > Nn))
      u.moveTo(0, 0);
    else if (m > It - Nn)
      u.moveTo(l * _t(d), l * Xn(d)), u.arc(0, 0, l, d, p, !g), h > Nn && (u.moveTo(h * _t(p), h * Xn(p)), u.arc(0, 0, h, p, d, g));
    else {
      var y = d, v = p, _ = d, b = p, w = m, x = m, E = a.apply(this, arguments) / 2, $ = E > Nn && (r ? +r.apply(this, arguments) : un(h * h + l * l)), P = $e(Es(l - h) / 2, +e.apply(this, arguments)), S = P, T = P, R, C;
      if ($ > Nn) {
        var M = $s($ / h * Xn(E)), A = $s($ / l * Xn(E));
        (w -= M * 2) > Nn ? (M *= g ? 1 : -1, _ += M, b -= M) : (w = 0, _ = b = (d + p) / 2), (x -= A * 2) > Nn ? (A *= g ? 1 : -1, y += A, v -= A) : (x = 0, y = v = (d + p) / 2);
      }
      var k = l * _t(y), N = l * Xn(y), I = h * _t(b), z = h * Xn(b);
      if (P > Nn) {
        var O = l * _t(v), B = l * Xn(v), q = h * _t(_), tn = h * Xn(_), Z;
        if (m < Dt && (Z = T3(k, N, q, tn, O, B, I, z))) {
          var en = k - Z[0], mn = N - Z[1], j = O - Z[0], pn = B - Z[1], F = 1 / Xn(b3((en * j + mn * pn) / (un(en * en + mn * mn) * un(j * j + pn * pn))) / 2), G = un(Z[0] * Z[0] + Z[1] * Z[1]);
          S = $e(P, (h - G) / (F - 1)), T = $e(P, (l - G) / (F + 1));
        }
      }
      x > Nn ? T > Nn ? (R = ci(q, tn, k, N, l, T, g), C = ci(O, B, I, z, l, T, g), u.moveTo(R.cx + R.x01, R.cy + R.y01), T < P ? u.arc(R.cx, R.cy, T, $n(R.y01, R.x01), $n(C.y01, C.x01), !g) : (u.arc(R.cx, R.cy, T, $n(R.y01, R.x01), $n(R.y11, R.x11), !g), u.arc(0, 0, l, $n(R.cy + R.y11, R.cx + R.x11), $n(C.cy + C.y11, C.cx + C.x11), !g), u.arc(C.cx, C.cy, T, $n(C.y11, C.x11), $n(C.y01, C.x01), !g))) : (u.moveTo(k, N), u.arc(0, 0, l, y, v, !g)) : u.moveTo(k, N), !(h > Nn) || !(w > Nn) ? u.lineTo(I, z) : S > Nn ? (R = ci(I, z, O, B, h, -S, g), C = ci(k, N, q, tn, h, -S, g), u.lineTo(R.cx + R.x01, R.cy + R.y01), S < P ? u.arc(R.cx, R.cy, S, $n(R.y01, R.x01), $n(C.y01, C.x01), !g) : (u.arc(R.cx, R.cy, S, $n(R.y01, R.x01), $n(R.y11, R.x11), !g), u.arc(0, 0, h, $n(R.cy + R.y11, R.cx + R.x11), $n(C.cy + C.y11, C.cx + C.x11), g), u.arc(C.cx, C.cy, S, $n(C.y11, C.x11), $n(C.y01, C.x01), !g))) : u.arc(0, 0, h, b, _, g);
    }
    if (u.closePath(), c)
      return u = null, c + "" || null;
  }
  return f.centroid = function() {
    var c = (+n.apply(this, arguments) + +t.apply(this, arguments)) / 2, s = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Dt / 2;
    return [_t(s) * c, Xn(s) * c];
  }, f.innerRadius = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : V(+c), f) : n;
  }, f.outerRadius = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : V(+c), f) : t;
  }, f.cornerRadius = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : V(+c), f) : e;
  }, f.padRadius = function(c) {
    return arguments.length ? (r = c == null ? null : typeof c == "function" ? c : V(+c), f) : r;
  }, f.startAngle = function(c) {
    return arguments.length ? (i = typeof c == "function" ? c : V(+c), f) : i;
  }, f.endAngle = function(c) {
    return arguments.length ? (o = typeof c == "function" ? c : V(+c), f) : o;
  }, f.padAngle = function(c) {
    return arguments.length ? (a = typeof c == "function" ? c : V(+c), f) : a;
  }, f.context = function(c) {
    return arguments.length ? (u = c == null ? null : c, f) : u;
  }, f;
}
var S3 = Array.prototype.slice;
function Po(n) {
  return typeof n == "object" && "length" in n ? n : Array.from(n);
}
function x0(n) {
  this._context = n;
}
x0.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(n, t) {
    switch (n = +n, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(n, t);
        break;
    }
  }
};
function mf(n) {
  return new x0(n);
}
function yf(n) {
  return n[0];
}
function bf(n) {
  return n[1];
}
function M0(n, t) {
  var e = V(!0), r = null, i = mf, o = null;
  n = typeof n == "function" ? n : n === void 0 ? yf : V(n), t = typeof t == "function" ? t : t === void 0 ? bf : V(t);
  function a(u) {
    var f, c = (u = Po(u)).length, s, h = !1, l;
    for (r == null && (o = i(l = oe())), f = 0; f <= c; ++f)
      !(f < c && e(s = u[f], f, u)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+n(s, f, u), +t(s, f, u));
    if (l)
      return o = null, l + "" || null;
  }
  return a.x = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : V(+u), a) : n;
  }, a.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : V(+u), a) : t;
  }, a.defined = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : V(!!u), a) : e;
  }, a.curve = function(u) {
    return arguments.length ? (i = u, r != null && (o = i(r)), a) : i;
  }, a.context = function(u) {
    return arguments.length ? (u == null ? r = o = null : o = i(r = u), a) : r;
  }, a;
}
function A3(n, t, e) {
  var r = null, i = V(!0), o = null, a = mf, u = null;
  n = typeof n == "function" ? n : n === void 0 ? yf : V(+n), t = typeof t == "function" ? t : V(t === void 0 ? 0 : +t), e = typeof e == "function" ? e : e === void 0 ? bf : V(+e);
  function f(s) {
    var h, l, d, p = (s = Po(s)).length, m, g = !1, y, v = new Array(p), _ = new Array(p);
    for (o == null && (u = a(y = oe())), h = 0; h <= p; ++h) {
      if (!(h < p && i(m = s[h], h, s)) === g)
        if (g = !g)
          l = h, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), d = h - 1; d >= l; --d)
            u.point(v[d], _[d]);
          u.lineEnd(), u.areaEnd();
        }
      g && (v[h] = +n(m, h, s), _[h] = +t(m, h, s), u.point(r ? +r(m, h, s) : v[h], e ? +e(m, h, s) : _[h]));
    }
    if (y)
      return u = null, y + "" || null;
  }
  function c() {
    return M0().defined(i).curve(a).context(o);
  }
  return f.x = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : V(+s), r = null, f) : n;
  }, f.x0 = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : V(+s), f) : n;
  }, f.x1 = function(s) {
    return arguments.length ? (r = s == null ? null : typeof s == "function" ? s : V(+s), f) : r;
  }, f.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : V(+s), e = null, f) : t;
  }, f.y0 = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : V(+s), f) : t;
  }, f.y1 = function(s) {
    return arguments.length ? (e = s == null ? null : typeof s == "function" ? s : V(+s), f) : e;
  }, f.lineX0 = f.lineY0 = function() {
    return c().x(n).y(t);
  }, f.lineY1 = function() {
    return c().x(n).y(e);
  }, f.lineX1 = function() {
    return c().x(r).y(t);
  }, f.defined = function(s) {
    return arguments.length ? (i = typeof s == "function" ? s : V(!!s), f) : i;
  }, f.curve = function(s) {
    return arguments.length ? (a = s, o != null && (u = a(o)), f) : a;
  }, f.context = function(s) {
    return arguments.length ? (s == null ? o = u = null : u = a(o = s), f) : o;
  }, f;
}
function k3(n, t) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function E3(n) {
  return n;
}
function c7() {
  var n = E3, t = k3, e = null, r = V(0), i = V(It), o = V(0);
  function a(u) {
    var f, c = (u = Po(u)).length, s, h, l = 0, d = new Array(c), p = new Array(c), m = +r.apply(this, arguments), g = Math.min(It, Math.max(-It, i.apply(this, arguments) - m)), y, v = Math.min(Math.abs(g) / c, o.apply(this, arguments)), _ = v * (g < 0 ? -1 : 1), b;
    for (f = 0; f < c; ++f)
      (b = p[d[f] = f] = +n(u[f], f, u)) > 0 && (l += b);
    for (t != null ? d.sort(function(w, x) {
      return t(p[w], p[x]);
    }) : e != null && d.sort(function(w, x) {
      return e(u[w], u[x]);
    }), f = 0, h = l ? (g - c * _) / l : 0; f < c; ++f, m = y)
      s = d[f], b = p[s], y = m + (b > 0 ? b * h : 0) + _, p[s] = {
        data: u[s],
        index: f,
        value: b,
        startAngle: m,
        endAngle: y,
        padAngle: v
      };
    return p;
  }
  return a.value = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : V(+u), a) : n;
  }, a.sortValues = function(u) {
    return arguments.length ? (t = u, e = null, a) : t;
  }, a.sort = function(u) {
    return arguments.length ? (e = u, t = null, a) : e;
  }, a.startAngle = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : V(+u), a) : r;
  }, a.endAngle = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : V(+u), a) : i;
  }, a.padAngle = function(u) {
    return arguments.length ? (o = typeof u == "function" ? u : V(+u), a) : o;
  }, a;
}
var T0 = _f(mf);
function S0(n) {
  this._curve = n;
}
S0.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(n, t) {
    this._curve.point(t * Math.sin(n), t * -Math.cos(n));
  }
};
function _f(n) {
  function t(e) {
    return new S0(n(e));
  }
  return t._curve = n, t;
}
function pr(n) {
  var t = n.curve;
  return n.angle = n.x, delete n.x, n.radius = n.y, delete n.y, n.curve = function(e) {
    return arguments.length ? t(_f(e)) : t()._curve;
  }, n;
}
function s7() {
  return pr(M0().curve(T0));
}
function l7() {
  var n = A3().curve(T0), t = n.curve, e = n.lineX0, r = n.lineX1, i = n.lineY0, o = n.lineY1;
  return n.angle = n.x, delete n.x, n.startAngle = n.x0, delete n.x0, n.endAngle = n.x1, delete n.x1, n.radius = n.y, delete n.y, n.innerRadius = n.y0, delete n.y0, n.outerRadius = n.y1, delete n.y1, n.lineStartAngle = function() {
    return pr(e());
  }, delete n.lineX0, n.lineEndAngle = function() {
    return pr(r());
  }, delete n.lineX1, n.lineInnerRadius = function() {
    return pr(i());
  }, delete n.lineY0, n.lineOuterRadius = function() {
    return pr(o());
  }, delete n.lineY1, n.curve = function(a) {
    return arguments.length ? t(_f(a)) : t()._curve;
  }, n;
}
function si(n, t) {
  return [(t = +t) * Math.cos(n -= Math.PI / 2), t * Math.sin(n)];
}
class A0 {
  constructor(t, e) {
    this._context = t, this._x = e;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, e, t, e) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + e) / 2, t, this._y0, t, e);
        break;
      }
    }
    this._x0 = t, this._y0 = e;
  }
}
class $3 {
  constructor(t) {
    this._context = t;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
  }
  point(t, e) {
    if (t = +t, e = +e, this._point++ === 0)
      this._x0 = t, this._y0 = e;
    else {
      const r = si(this._x0, this._y0), i = si(this._x0, this._y0 = (this._y0 + e) / 2), o = si(t, this._y0), a = si(t, e);
      this._context.moveTo(...r), this._context.bezierCurveTo(...i, ...o, ...a);
    }
  }
}
function N3(n) {
  return new A0(n, !0);
}
function C3(n) {
  return new A0(n, !1);
}
function R3(n) {
  return new $3(n);
}
function P3(n) {
  return n.source;
}
function I3(n) {
  return n.target;
}
function vf(n) {
  let t = P3, e = I3, r = yf, i = bf, o = null, a = null;
  function u() {
    let f;
    const c = S3.call(arguments), s = t.apply(this, c), h = e.apply(this, c);
    if (o == null && (a = n(f = oe())), a.lineStart(), c[0] = s, a.point(+r.apply(this, c), +i.apply(this, c)), c[0] = h, a.point(+r.apply(this, c), +i.apply(this, c)), a.lineEnd(), f)
      return a = null, f + "" || null;
  }
  return u.source = function(f) {
    return arguments.length ? (t = f, u) : t;
  }, u.target = function(f) {
    return arguments.length ? (e = f, u) : e;
  }, u.x = function(f) {
    return arguments.length ? (r = typeof f == "function" ? f : V(+f), u) : r;
  }, u.y = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : V(+f), u) : i;
  }, u.context = function(f) {
    return arguments.length ? (f == null ? o = a = null : a = n(o = f), u) : o;
  }, u;
}
function h7() {
  return vf(N3);
}
function d7() {
  return vf(C3);
}
function g7() {
  const n = vf(R3);
  return n.angle = n.x, delete n.x, n.radius = n.y, delete n.y, n;
}
const z3 = un(3), D3 = {
  draw(n, t) {
    const e = un(t + $e(t / 28, 0.75)) * 0.59436, r = e / 2, i = r * z3;
    n.moveTo(0, e), n.lineTo(0, -e), n.moveTo(-i, -r), n.lineTo(i, r), n.moveTo(-i, r), n.lineTo(i, -r);
  }
}, wf = {
  draw(n, t) {
    const e = un(t / Dt);
    n.moveTo(e, 0), n.arc(0, 0, e, 0, It);
  }
}, O3 = {
  draw(n, t) {
    const e = un(t / 5) / 2;
    n.moveTo(-3 * e, -e), n.lineTo(-e, -e), n.lineTo(-e, -3 * e), n.lineTo(e, -3 * e), n.lineTo(e, -e), n.lineTo(3 * e, -e), n.lineTo(3 * e, e), n.lineTo(e, e), n.lineTo(e, 3 * e), n.lineTo(-e, 3 * e), n.lineTo(-e, e), n.lineTo(-3 * e, e), n.closePath();
  }
}, k0 = un(1 / 3), F3 = k0 * 2, B3 = {
  draw(n, t) {
    const e = un(t / F3), r = e * k0;
    n.moveTo(0, -e), n.lineTo(r, 0), n.lineTo(0, e), n.lineTo(-r, 0), n.closePath();
  }
}, L3 = {
  draw(n, t) {
    const e = un(t) * 0.62625;
    n.moveTo(0, -e), n.lineTo(e, 0), n.lineTo(0, e), n.lineTo(-e, 0), n.closePath();
  }
}, Y3 = {
  draw(n, t) {
    const e = un(t - $e(t / 7, 2)) * 0.87559;
    n.moveTo(-e, 0), n.lineTo(e, 0), n.moveTo(0, e), n.lineTo(0, -e);
  }
}, q3 = {
  draw(n, t) {
    const e = un(t), r = -e / 2;
    n.rect(r, r, e, e);
  }
}, U3 = {
  draw(n, t) {
    const e = un(t) * 0.4431;
    n.moveTo(e, e), n.lineTo(e, -e), n.lineTo(-e, -e), n.lineTo(-e, e), n.closePath();
  }
}, H3 = 0.8908130915292852, E0 = Xn(Dt / 10) / Xn(7 * Dt / 10), X3 = Xn(It / 10) * E0, G3 = -_t(It / 10) * E0, V3 = {
  draw(n, t) {
    const e = un(t * H3), r = X3 * e, i = G3 * e;
    n.moveTo(0, -e), n.lineTo(r, i);
    for (let o = 1; o < 5; ++o) {
      const a = It * o / 5, u = _t(a), f = Xn(a);
      n.lineTo(f * e, -u * e), n.lineTo(u * r - f * i, f * r + u * i);
    }
    n.closePath();
  }
}, pa = un(3), W3 = {
  draw(n, t) {
    const e = -un(t / (pa * 3));
    n.moveTo(0, e * 2), n.lineTo(-pa * e, -e), n.lineTo(pa * e, -e), n.closePath();
  }
}, Z3 = un(3), Q3 = {
  draw(n, t) {
    const e = un(t) * 0.6824, r = e / 2, i = e * Z3 / 2;
    n.moveTo(0, -e), n.lineTo(i, r), n.lineTo(-i, r), n.closePath();
  }
}, Qn = -0.5, Kn = un(3) / 2, pu = 1 / un(12), K3 = (pu / 2 + 1) * 3, J3 = {
  draw(n, t) {
    const e = un(t / K3), r = e / 2, i = e * pu, o = r, a = e * pu + e, u = -o, f = a;
    n.moveTo(r, i), n.lineTo(o, a), n.lineTo(u, f), n.lineTo(Qn * r - Kn * i, Kn * r + Qn * i), n.lineTo(Qn * o - Kn * a, Kn * o + Qn * a), n.lineTo(Qn * u - Kn * f, Kn * u + Qn * f), n.lineTo(Qn * r + Kn * i, Qn * i - Kn * r), n.lineTo(Qn * o + Kn * a, Qn * a - Kn * o), n.lineTo(Qn * u + Kn * f, Qn * f - Kn * u), n.closePath();
  }
}, j3 = {
  draw(n, t) {
    const e = un(t - $e(t / 6, 1.7)) * 0.6189;
    n.moveTo(-e, -e), n.lineTo(e, e), n.moveTo(-e, e), n.lineTo(e, -e);
  }
}, p7 = [
  wf,
  O3,
  B3,
  q3,
  V3,
  W3,
  J3
], m7 = [
  wf,
  Y3,
  j3,
  Q3,
  D3,
  U3,
  L3
];
function y7(n, t) {
  let e = null;
  n = typeof n == "function" ? n : V(n || wf), t = typeof t == "function" ? t : V(t === void 0 ? 64 : +t);
  function r() {
    let i;
    if (e || (e = i = oe()), n.apply(this, arguments).draw(e, +t.apply(this, arguments)), i)
      return e = null, i + "" || null;
  }
  return r.type = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : V(i), r) : n;
  }, r.size = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : V(+i), r) : t;
  }, r.context = function(i) {
    return arguments.length ? (e = i == null ? null : i, r) : e;
  }, r;
}
function Ot() {
}
function so(n, t, e) {
  n._context.bezierCurveTo(
    (2 * n._x0 + n._x1) / 3,
    (2 * n._y0 + n._y1) / 3,
    (n._x0 + 2 * n._x1) / 3,
    (n._y0 + 2 * n._y1) / 3,
    (n._x0 + 4 * n._x1 + t) / 6,
    (n._y0 + 4 * n._y1 + e) / 6
  );
}
function Io(n) {
  this._context = n;
}
Io.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        so(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(n, t) {
    switch (n = +n, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        so(this, n, t);
        break;
    }
    this._x0 = this._x1, this._x1 = n, this._y0 = this._y1, this._y1 = t;
  }
};
function b7(n) {
  return new Io(n);
}
function $0(n) {
  this._context = n;
}
$0.prototype = {
  areaStart: Ot,
  areaEnd: Ot,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(n, t) {
    switch (n = +n, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = n, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = n, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = n, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + n) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        so(this, n, t);
        break;
    }
    this._x0 = this._x1, this._x1 = n, this._y0 = this._y1, this._y1 = t;
  }
};
function _7(n) {
  return new $0(n);
}
function N0(n) {
  this._context = n;
}
N0.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(n, t) {
    switch (n = +n, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var e = (this._x0 + 4 * this._x1 + n) / 6, r = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
        break;
      case 3:
        this._point = 4;
      default:
        so(this, n, t);
        break;
    }
    this._x0 = this._x1, this._x1 = n, this._y0 = this._y1, this._y1 = t;
  }
};
function v7(n) {
  return new N0(n);
}
function C0(n, t) {
  this._basis = new Io(n), this._beta = t;
}
C0.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var n = this._x, t = this._y, e = n.length - 1;
    if (e > 0)
      for (var r = n[0], i = t[0], o = n[e] - r, a = t[e] - i, u = -1, f; ++u <= e; )
        f = u / e, this._basis.point(
          this._beta * n[u] + (1 - this._beta) * (r + f * o),
          this._beta * t[u] + (1 - this._beta) * (i + f * a)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(n, t) {
    this._x.push(+n), this._y.push(+t);
  }
};
const w7 = function n(t) {
  function e(r) {
    return t === 1 ? new Io(r) : new C0(r, t);
  }
  return e.beta = function(r) {
    return n(+r);
  }, e;
}(0.85);
function lo(n, t, e) {
  n._context.bezierCurveTo(
    n._x1 + n._k * (n._x2 - n._x0),
    n._y1 + n._k * (n._y2 - n._y0),
    n._x2 + n._k * (n._x1 - t),
    n._y2 + n._k * (n._y1 - e),
    n._x2,
    n._y2
  );
}
function xf(n, t) {
  this._context = n, this._k = (1 - t) / 6;
}
xf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        lo(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(n, t) {
    switch (n = +n, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t);
        break;
      case 1:
        this._point = 2, this._x1 = n, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      default:
        lo(this, n, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = n, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const x7 = function n(t) {
  function e(r) {
    return new xf(r, t);
  }
  return e.tension = function(r) {
    return n(+r);
  }, e;
}(0);
function Mf(n, t) {
  this._context = n, this._k = (1 - t) / 6;
}
Mf.prototype = {
  areaStart: Ot,
  areaEnd: Ot,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(n, t) {
    switch (n = +n, t = +t, this._point) {
      case 0:
        this._point = 1, this._x3 = n, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = n, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = n, this._y5 = t;
        break;
      default:
        lo(this, n, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = n, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const M7 = function n(t) {
  function e(r) {
    return new Mf(r, t);
  }
  return e.tension = function(r) {
    return n(+r);
  }, e;
}(0);
function Tf(n, t) {
  this._context = n, this._k = (1 - t) / 6;
}
Tf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(n, t) {
    switch (n = +n, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        lo(this, n, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = n, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const T7 = function n(t) {
  function e(r) {
    return new Tf(r, t);
  }
  return e.tension = function(r) {
    return n(+r);
  }, e;
}(0);
function Sf(n, t, e) {
  var r = n._x1, i = n._y1, o = n._x2, a = n._y2;
  if (n._l01_a > Nn) {
    var u = 2 * n._l01_2a + 3 * n._l01_a * n._l12_a + n._l12_2a, f = 3 * n._l01_a * (n._l01_a + n._l12_a);
    r = (r * u - n._x0 * n._l12_2a + n._x2 * n._l01_2a) / f, i = (i * u - n._y0 * n._l12_2a + n._y2 * n._l01_2a) / f;
  }
  if (n._l23_a > Nn) {
    var c = 2 * n._l23_2a + 3 * n._l23_a * n._l12_a + n._l12_2a, s = 3 * n._l23_a * (n._l23_a + n._l12_a);
    o = (o * c + n._x1 * n._l23_2a - t * n._l12_2a) / s, a = (a * c + n._y1 * n._l23_2a - e * n._l12_2a) / s;
  }
  n._context.bezierCurveTo(r, i, o, a, n._x2, n._y2);
}
function R0(n, t) {
  this._context = n, this._alpha = t;
}
R0.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(n, t) {
    if (n = +n, t = +t, this._point) {
      var e = this._x2 - n, r = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        Sf(this, n, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = n, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const S7 = function n(t) {
  function e(r) {
    return t ? new R0(r, t) : new xf(r, 0);
  }
  return e.alpha = function(r) {
    return n(+r);
  }, e;
}(0.5);
function P0(n, t) {
  this._context = n, this._alpha = t;
}
P0.prototype = {
  areaStart: Ot,
  areaEnd: Ot,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(n, t) {
    if (n = +n, t = +t, this._point) {
      var e = this._x2 - n, r = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = n, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = n, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = n, this._y5 = t;
        break;
      default:
        Sf(this, n, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = n, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const A7 = function n(t) {
  function e(r) {
    return t ? new P0(r, t) : new Mf(r, 0);
  }
  return e.alpha = function(r) {
    return n(+r);
  }, e;
}(0.5);
function I0(n, t) {
  this._context = n, this._alpha = t;
}
I0.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(n, t) {
    if (n = +n, t = +t, this._point) {
      var e = this._x2 - n, r = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Sf(this, n, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = n, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const k7 = function n(t) {
  function e(r) {
    return t ? new I0(r, t) : new Tf(r, 0);
  }
  return e.alpha = function(r) {
    return n(+r);
  }, e;
}(0.5);
function z0(n) {
  this._context = n;
}
z0.prototype = {
  areaStart: Ot,
  areaEnd: Ot,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(n, t) {
    n = +n, t = +t, this._point ? this._context.lineTo(n, t) : (this._point = 1, this._context.moveTo(n, t));
  }
};
function E7(n) {
  return new z0(n);
}
function Ns(n) {
  return n < 0 ? -1 : 1;
}
function Cs(n, t, e) {
  var r = n._x1 - n._x0, i = t - n._x1, o = (n._y1 - n._y0) / (r || i < 0 && -0), a = (e - n._y1) / (i || r < 0 && -0), u = (o * i + a * r) / (r + i);
  return (Ns(o) + Ns(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(u)) || 0;
}
function Rs(n, t) {
  var e = n._x1 - n._x0;
  return e ? (3 * (n._y1 - n._y0) / e - t) / 2 : t;
}
function ma(n, t, e) {
  var r = n._x0, i = n._y0, o = n._x1, a = n._y1, u = (o - r) / 3;
  n._context.bezierCurveTo(r + u, i + u * t, o - u, a - u * e, o, a);
}
function ho(n) {
  this._context = n;
}
ho.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        ma(this, this._t0, Rs(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(n, t) {
    var e = NaN;
    if (n = +n, t = +t, !(n === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, ma(this, Rs(this, e = Cs(this, n, t)), e);
          break;
        default:
          ma(this, this._t0, e = Cs(this, n, t));
          break;
      }
      this._x0 = this._x1, this._x1 = n, this._y0 = this._y1, this._y1 = t, this._t0 = e;
    }
  }
};
function D0(n) {
  this._context = new O0(n);
}
(D0.prototype = Object.create(ho.prototype)).point = function(n, t) {
  ho.prototype.point.call(this, t, n);
};
function O0(n) {
  this._context = n;
}
O0.prototype = {
  moveTo: function(n, t) {
    this._context.moveTo(t, n);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(n, t) {
    this._context.lineTo(t, n);
  },
  bezierCurveTo: function(n, t, e, r, i, o) {
    this._context.bezierCurveTo(t, n, r, e, o, i);
  }
};
function $7(n) {
  return new ho(n);
}
function N7(n) {
  return new D0(n);
}
function F0(n) {
  this._context = n;
}
F0.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var n = this._x, t = this._y, e = n.length;
    if (e)
      if (this._line ? this._context.lineTo(n[0], t[0]) : this._context.moveTo(n[0], t[0]), e === 2)
        this._context.lineTo(n[1], t[1]);
      else
        for (var r = Ps(n), i = Ps(t), o = 0, a = 1; a < e; ++o, ++a)
          this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], n[a], t[a]);
    (this._line || this._line !== 0 && e === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(n, t) {
    this._x.push(+n), this._y.push(+t);
  }
};
function Ps(n) {
  var t, e = n.length - 1, r, i = new Array(e), o = new Array(e), a = new Array(e);
  for (i[0] = 0, o[0] = 2, a[0] = n[0] + 2 * n[1], t = 1; t < e - 1; ++t)
    i[t] = 1, o[t] = 4, a[t] = 4 * n[t] + 2 * n[t + 1];
  for (i[e - 1] = 2, o[e - 1] = 7, a[e - 1] = 8 * n[e - 1] + n[e], t = 1; t < e; ++t)
    r = i[t] / o[t - 1], o[t] -= r, a[t] -= r * a[t - 1];
  for (i[e - 1] = a[e - 1] / o[e - 1], t = e - 2; t >= 0; --t)
    i[t] = (a[t] - i[t + 1]) / o[t];
  for (o[e - 1] = (n[e] + i[e - 1]) / 2, t = 0; t < e - 1; ++t)
    o[t] = 2 * n[t + 1] - i[t + 1];
  return [i, o];
}
function C7(n) {
  return new F0(n);
}
function zo(n, t) {
  this._context = n, this._t = t;
}
zo.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(n, t) {
    switch (n = +n, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(n, t);
        else {
          var e = this._x * (1 - this._t) + n * this._t;
          this._context.lineTo(e, this._y), this._context.lineTo(e, t);
        }
        break;
      }
    }
    this._x = n, this._y = t;
  }
};
function R7(n) {
  return new zo(n, 0.5);
}
function P7(n) {
  return new zo(n, 0);
}
function I7(n) {
  return new zo(n, 1);
}
function zr(n, t) {
  if ((a = n.length) > 1)
    for (var e = 1, r, i, o = n[t[0]], a, u = o.length; e < a; ++e)
      for (i = o, o = n[t[e]], r = 0; r < u; ++r)
        o[r][1] += o[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function Dr(n) {
  for (var t = n.length, e = new Array(t); --t >= 0; )
    e[t] = t;
  return e;
}
function n6(n, t) {
  return n[t];
}
function t6(n) {
  const t = [];
  return t.key = n, t;
}
function z7() {
  var n = V([]), t = Dr, e = zr, r = n6;
  function i(o) {
    var a = Array.from(n.apply(this, arguments), t6), u, f = a.length, c = -1, s;
    for (const h of o)
      for (u = 0, ++c; u < f; ++u)
        (a[u][c] = [0, +r(h, a[u].key, c, o)]).data = h;
    for (u = 0, s = Po(t(a)); u < f; ++u)
      a[s[u]].index = u;
    return e(a, s), a;
  }
  return i.keys = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : V(Array.from(o)), i) : n;
  }, i.value = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : V(+o), i) : r;
  }, i.order = function(o) {
    return arguments.length ? (t = o == null ? Dr : typeof o == "function" ? o : V(Array.from(o)), i) : t;
  }, i.offset = function(o) {
    return arguments.length ? (e = o == null ? zr : o, i) : e;
  }, i;
}
function D7(n, t) {
  if ((r = n.length) > 0) {
    for (var e, r, i = 0, o = n[0].length, a; i < o; ++i) {
      for (a = e = 0; e < r; ++e)
        a += n[e][i][1] || 0;
      if (a)
        for (e = 0; e < r; ++e)
          n[e][i][1] /= a;
    }
    zr(n, t);
  }
}
function O7(n, t) {
  if ((f = n.length) > 0)
    for (var e, r = 0, i, o, a, u, f, c = n[t[0]].length; r < c; ++r)
      for (a = u = 0, e = 0; e < f; ++e)
        (o = (i = n[t[e]][r])[1] - i[0]) > 0 ? (i[0] = a, i[1] = a += o) : o < 0 ? (i[1] = u, i[0] = u += o) : (i[0] = 0, i[1] = o);
}
function F7(n, t) {
  if ((i = n.length) > 0) {
    for (var e = 0, r = n[t[0]], i, o = r.length; e < o; ++e) {
      for (var a = 0, u = 0; a < i; ++a)
        u += n[a][e][1] || 0;
      r[e][1] += r[e][0] = -u / 2;
    }
    zr(n, t);
  }
}
function B7(n, t) {
  if (!(!((a = n.length) > 0) || !((o = (i = n[t[0]]).length) > 0))) {
    for (var e = 0, r = 1, i, o, a; r < o; ++r) {
      for (var u = 0, f = 0, c = 0; u < a; ++u) {
        for (var s = n[t[u]], h = s[r][1] || 0, l = s[r - 1][1] || 0, d = (h - l) / 2, p = 0; p < u; ++p) {
          var m = n[t[p]], g = m[r][1] || 0, y = m[r - 1][1] || 0;
          d += g - y;
        }
        f += h, c += d * h;
      }
      i[r - 1][1] += i[r - 1][0] = e, f && (e -= c / f);
    }
    i[r - 1][1] += i[r - 1][0] = e, zr(n, t);
  }
}
function e6(n) {
  var t = n.map(r6);
  return Dr(n).sort(function(e, r) {
    return t[e] - t[r];
  });
}
function r6(n) {
  for (var t = -1, e = 0, r = n.length, i, o = -1 / 0; ++t < r; )
    (i = +n[t][1]) > o && (o = i, e = t);
  return e;
}
function i6(n) {
  var t = n.map(B0);
  return Dr(n).sort(function(e, r) {
    return t[e] - t[r];
  });
}
function B0(n) {
  for (var t = 0, e = -1, r = n.length, i; ++e < r; )
    (i = +n[e][1]) && (t += i);
  return t;
}
function L7(n) {
  return i6(n).reverse();
}
function Y7(n) {
  var t = n.length, e, r, i = n.map(B0), o = e6(n), a = 0, u = 0, f = [], c = [];
  for (e = 0; e < t; ++e)
    r = o[e], a < u ? (a += i[r], f.push(r)) : (u += i[r], c.push(r));
  return c.reverse().concat(f);
}
function q7(n) {
  return Dr(n).reverse();
}
const li = (n) => () => n;
function o6(n, {
  sourceEvent: t,
  target: e,
  transform: r,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: n, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: e, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function Mt(n, t, e) {
  this.k = n, this.x = t, this.y = e;
}
Mt.prototype = {
  constructor: Mt,
  scale: function(n) {
    return n === 1 ? this : new Mt(this.k * n, this.x, this.y);
  },
  translate: function(n, t) {
    return n === 0 & t === 0 ? this : new Mt(this.k, this.x + this.k * n, this.y + this.k * t);
  },
  apply: function(n) {
    return [n[0] * this.k + this.x, n[1] * this.k + this.y];
  },
  applyX: function(n) {
    return n * this.k + this.x;
  },
  applyY: function(n) {
    return n * this.k + this.y;
  },
  invert: function(n) {
    return [(n[0] - this.x) / this.k, (n[1] - this.y) / this.k];
  },
  invertX: function(n) {
    return (n - this.x) / this.k;
  },
  invertY: function(n) {
    return (n - this.y) / this.k;
  },
  rescaleX: function(n) {
    return n.copy().domain(n.range().map(this.invertX, this).map(n.invert, n));
  },
  rescaleY: function(n) {
    return n.copy().domain(n.range().map(this.invertY, this).map(n.invert, n));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Af = new Mt(1, 0, 0);
a6.prototype = Mt.prototype;
function a6(n) {
  for (; !n.__zoom; )
    if (!(n = n.parentNode))
      return Af;
  return n.__zoom;
}
function ya(n) {
  n.stopImmediatePropagation();
}
function ir(n) {
  n.preventDefault(), n.stopImmediatePropagation();
}
function u6(n) {
  return (!n.ctrlKey || n.type === "wheel") && !n.button;
}
function f6() {
  var n = this;
  return n instanceof SVGElement ? (n = n.ownerSVGElement || n, n.hasAttribute("viewBox") ? (n = n.viewBox.baseVal, [[n.x, n.y], [n.x + n.width, n.y + n.height]]) : [[0, 0], [n.width.baseVal.value, n.height.baseVal.value]]) : [[0, 0], [n.clientWidth, n.clientHeight]];
}
function Is() {
  return this.__zoom || Af;
}
function c6(n) {
  return -n.deltaY * (n.deltaMode === 1 ? 0.05 : n.deltaMode ? 1 : 2e-3) * (n.ctrlKey ? 10 : 1);
}
function s6() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function l6(n, t, e) {
  var r = n.invertX(t[0][0]) - e[0][0], i = n.invertX(t[1][0]) - e[1][0], o = n.invertY(t[0][1]) - e[0][1], a = n.invertY(t[1][1]) - e[1][1];
  return n.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a)
  );
}
function U7() {
  var n = u6, t = f6, e = l6, r = c6, i = s6, o = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, f = qg, c = Ge("start", "zoom", "end"), s, h, l, d = 500, p = 150, m = 0, g = 10;
  function y(M) {
    M.property("__zoom", Is).on("wheel.zoom", $, { passive: !1 }).on("mousedown.zoom", P).on("dblclick.zoom", S).filter(i).on("touchstart.zoom", T).on("touchmove.zoom", R).on("touchend.zoom touchcancel.zoom", C).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  y.transform = function(M, A, k, N) {
    var I = M.selection ? M.selection() : M;
    I.property("__zoom", Is), M !== I ? w(M, A, k, N) : I.interrupt().each(function() {
      x(this, arguments).event(N).start().zoom(null, typeof A == "function" ? A.apply(this, arguments) : A).end();
    });
  }, y.scaleBy = function(M, A, k, N) {
    y.scaleTo(M, function() {
      var I = this.__zoom.k, z = typeof A == "function" ? A.apply(this, arguments) : A;
      return I * z;
    }, k, N);
  }, y.scaleTo = function(M, A, k, N) {
    y.transform(M, function() {
      var I = t.apply(this, arguments), z = this.__zoom, O = k == null ? b(I) : typeof k == "function" ? k.apply(this, arguments) : k, B = z.invert(O), q = typeof A == "function" ? A.apply(this, arguments) : A;
      return e(_(v(z, q), O, B), I, a);
    }, k, N);
  }, y.translateBy = function(M, A, k, N) {
    y.transform(M, function() {
      return e(this.__zoom.translate(
        typeof A == "function" ? A.apply(this, arguments) : A,
        typeof k == "function" ? k.apply(this, arguments) : k
      ), t.apply(this, arguments), a);
    }, null, N);
  }, y.translateTo = function(M, A, k, N, I) {
    y.transform(M, function() {
      var z = t.apply(this, arguments), O = this.__zoom, B = N == null ? b(z) : typeof N == "function" ? N.apply(this, arguments) : N;
      return e(Af.translate(B[0], B[1]).scale(O.k).translate(
        typeof A == "function" ? -A.apply(this, arguments) : -A,
        typeof k == "function" ? -k.apply(this, arguments) : -k
      ), z, a);
    }, N, I);
  };
  function v(M, A) {
    return A = Math.max(o[0], Math.min(o[1], A)), A === M.k ? M : new Mt(A, M.x, M.y);
  }
  function _(M, A, k) {
    var N = A[0] - k[0] * M.k, I = A[1] - k[1] * M.k;
    return N === M.x && I === M.y ? M : new Mt(M.k, N, I);
  }
  function b(M) {
    return [(+M[0][0] + +M[1][0]) / 2, (+M[0][1] + +M[1][1]) / 2];
  }
  function w(M, A, k, N) {
    M.on("start.zoom", function() {
      x(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      x(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var I = this, z = arguments, O = x(I, z).event(N), B = t.apply(I, z), q = k == null ? b(B) : typeof k == "function" ? k.apply(I, z) : k, tn = Math.max(B[1][0] - B[0][0], B[1][1] - B[0][1]), Z = I.__zoom, en = typeof A == "function" ? A.apply(I, z) : A, mn = f(Z.invert(q).concat(tn / Z.k), en.invert(q).concat(tn / en.k));
      return function(j) {
        if (j === 1)
          j = en;
        else {
          var pn = mn(j), F = tn / pn[2];
          j = new Mt(F, q[0] - pn[0] * F, q[1] - pn[1] * F);
        }
        O.zoom(null, j);
      };
    });
  }
  function x(M, A, k) {
    return !k && M.__zooming || new E(M, A);
  }
  function E(M, A) {
    this.that = M, this.args = A, this.active = 0, this.sourceEvent = null, this.extent = t.apply(M, A), this.taps = 0;
  }
  E.prototype = {
    event: function(M) {
      return M && (this.sourceEvent = M), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(M, A) {
      return this.mouse && M !== "mouse" && (this.mouse[1] = A.invert(this.mouse[0])), this.touch0 && M !== "touch" && (this.touch0[1] = A.invert(this.touch0[0])), this.touch1 && M !== "touch" && (this.touch1[1] = A.invert(this.touch1[0])), this.that.__zoom = A, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(M) {
      var A = Tn(this.that).datum();
      c.call(
        M,
        this.that,
        new o6(M, {
          sourceEvent: this.sourceEvent,
          target: y,
          type: M,
          transform: this.that.__zoom,
          dispatch: c
        }),
        A
      );
    }
  };
  function $(M, ...A) {
    if (!n.apply(this, arguments))
      return;
    var k = x(this, A).event(M), N = this.__zoom, I = Math.max(o[0], Math.min(o[1], N.k * Math.pow(2, r.apply(this, arguments)))), z = Wn(M);
    if (k.wheel)
      (k.mouse[0][0] !== z[0] || k.mouse[0][1] !== z[1]) && (k.mouse[1] = N.invert(k.mouse[0] = z)), clearTimeout(k.wheel);
    else {
      if (N.k === I)
        return;
      k.mouse = [z, N.invert(z)], ke(this), k.start();
    }
    ir(M), k.wheel = setTimeout(O, p), k.zoom("mouse", e(_(v(N, I), k.mouse[0], k.mouse[1]), k.extent, a));
    function O() {
      k.wheel = null, k.end();
    }
  }
  function P(M, ...A) {
    if (l || !n.apply(this, arguments))
      return;
    var k = M.currentTarget, N = x(this, A, !0).event(M), I = Tn(M.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", tn, !0), z = Wn(M, k), O = M.clientX, B = M.clientY;
    Su(M.view), ya(M), N.mouse = [z, this.__zoom.invert(z)], ke(this), N.start();
    function q(Z) {
      if (ir(Z), !N.moved) {
        var en = Z.clientX - O, mn = Z.clientY - B;
        N.moved = en * en + mn * mn > m;
      }
      N.event(Z).zoom("mouse", e(_(N.that.__zoom, N.mouse[0] = Wn(Z, k), N.mouse[1]), N.extent, a));
    }
    function tn(Z) {
      I.on("mousemove.zoom mouseup.zoom", null), Au(Z.view, N.moved), ir(Z), N.event(Z).end();
    }
  }
  function S(M, ...A) {
    if (!!n.apply(this, arguments)) {
      var k = this.__zoom, N = Wn(M.changedTouches ? M.changedTouches[0] : M, this), I = k.invert(N), z = k.k * (M.shiftKey ? 0.5 : 2), O = e(_(v(k, z), N, I), t.apply(this, A), a);
      ir(M), u > 0 ? Tn(this).transition().duration(u).call(w, O, N, M) : Tn(this).call(y.transform, O, N, M);
    }
  }
  function T(M, ...A) {
    if (!!n.apply(this, arguments)) {
      var k = M.touches, N = k.length, I = x(this, A, M.changedTouches.length === N).event(M), z, O, B, q;
      for (ya(M), O = 0; O < N; ++O)
        B = k[O], q = Wn(B, this), q = [q, this.__zoom.invert(q), B.identifier], I.touch0 ? !I.touch1 && I.touch0[2] !== q[2] && (I.touch1 = q, I.taps = 0) : (I.touch0 = q, z = !0, I.taps = 1 + !!s);
      s && (s = clearTimeout(s)), z && (I.taps < 2 && (h = q[0], s = setTimeout(function() {
        s = null;
      }, d)), ke(this), I.start());
    }
  }
  function R(M, ...A) {
    if (!!this.__zooming) {
      var k = x(this, A).event(M), N = M.changedTouches, I = N.length, z, O, B, q;
      for (ir(M), z = 0; z < I; ++z)
        O = N[z], B = Wn(O, this), k.touch0 && k.touch0[2] === O.identifier ? k.touch0[0] = B : k.touch1 && k.touch1[2] === O.identifier && (k.touch1[0] = B);
      if (O = k.that.__zoom, k.touch1) {
        var tn = k.touch0[0], Z = k.touch0[1], en = k.touch1[0], mn = k.touch1[1], j = (j = en[0] - tn[0]) * j + (j = en[1] - tn[1]) * j, pn = (pn = mn[0] - Z[0]) * pn + (pn = mn[1] - Z[1]) * pn;
        O = v(O, Math.sqrt(j / pn)), B = [(tn[0] + en[0]) / 2, (tn[1] + en[1]) / 2], q = [(Z[0] + mn[0]) / 2, (Z[1] + mn[1]) / 2];
      } else if (k.touch0)
        B = k.touch0[0], q = k.touch0[1];
      else
        return;
      k.zoom("touch", e(_(O, B, q), k.extent, a));
    }
  }
  function C(M, ...A) {
    if (!!this.__zooming) {
      var k = x(this, A).event(M), N = M.changedTouches, I = N.length, z, O;
      for (ya(M), l && clearTimeout(l), l = setTimeout(function() {
        l = null;
      }, d), z = 0; z < I; ++z)
        O = N[z], k.touch0 && k.touch0[2] === O.identifier ? delete k.touch0 : k.touch1 && k.touch1[2] === O.identifier && delete k.touch1;
      if (k.touch1 && !k.touch0 && (k.touch0 = k.touch1, delete k.touch1), k.touch0)
        k.touch0[1] = this.__zoom.invert(k.touch0[0]);
      else if (k.end(), k.taps === 2 && (O = Wn(O, this), Math.hypot(h[0] - O[0], h[1] - O[1]) < g)) {
        var B = Tn(this).on("dblclick.zoom");
        B && B.apply(this, arguments);
      }
    }
  }
  return y.wheelDelta = function(M) {
    return arguments.length ? (r = typeof M == "function" ? M : li(+M), y) : r;
  }, y.filter = function(M) {
    return arguments.length ? (n = typeof M == "function" ? M : li(!!M), y) : n;
  }, y.touchable = function(M) {
    return arguments.length ? (i = typeof M == "function" ? M : li(!!M), y) : i;
  }, y.extent = function(M) {
    return arguments.length ? (t = typeof M == "function" ? M : li([[+M[0][0], +M[0][1]], [+M[1][0], +M[1][1]]]), y) : t;
  }, y.scaleExtent = function(M) {
    return arguments.length ? (o[0] = +M[0], o[1] = +M[1], y) : [o[0], o[1]];
  }, y.translateExtent = function(M) {
    return arguments.length ? (a[0][0] = +M[0][0], a[1][0] = +M[1][0], a[0][1] = +M[0][1], a[1][1] = +M[1][1], y) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, y.constrain = function(M) {
    return arguments.length ? (e = M, y) : e;
  }, y.duration = function(M) {
    return arguments.length ? (u = +M, y) : u;
  }, y.interpolate = function(M) {
    return arguments.length ? (f = M, y) : f;
  }, y.on = function() {
    var M = c.on.apply(c, arguments);
    return M === c ? y : M;
  }, y.clickDistance = function(M) {
    return arguments.length ? (m = (M = +M) * M, y) : Math.sqrt(m);
  }, y.tapDistance = function(M) {
    return arguments.length ? (g = +M, y) : g;
  }, y;
}
const h6 = "#3fbed1", d6 = "#9928AF", g6 = "#E72A4A", kf = (n) => (t, e) => {
  const r = e - t;
  return (i) => {
    const o = ((i - t) / r * 128 + 127 >> 0).toString(16);
    return n + (o.length == 2 ? "" : "0") + o;
  };
}, H7 = kf(h6), X7 = kf(g6), G7 = kf(d6), p6 = {
  background: "#24282B",
  ticks: "#808080",
  grid: "#808080",
  title: "#F1F1F1",
  darker: "#393b3d",
  data: ["#3FBED1", "#32878E"],
  border: "#C7C5C6"
}, m6 = {
  background: "#24282B",
  ticks: "#B1B1B1",
  grid: "#808080",
  title: "#666666",
  darker: "#393b3d",
  data: ["#3FBED1", "#32878E"],
  border: "#C7C5C6"
}, y6 = {
  background: "#FAFAFA",
  ticks: "#393b3d",
  grid: "#686868",
  title: "#414141",
  darker: "#C7C5C6",
  data: ["#3FBED1", "#32878E"],
  border: "#545454"
};
function L0(n) {
  switch (n) {
    case "dark":
      return p6;
    case "darker":
      return m6;
    case "light":
      return y6;
    default:
      throw Error(`no ${n} palette found`);
  }
}
function b6(n = "dark", t) {
  const e = L0(n), r = t.append("g").style("display", "none").attr("class", "tooltip"), i = r.append("rect").attr("fill", e.background).attr("border-width", "1px").attr("stroke", e.border).style("rx", "4").style("overflow", "hidden"), o = r.append("g").attr("fill", e.title).attr("font-family", "Roboto, sans-serif");
  return { mouseover: (c) => {
    r.style("opacity", 1), Tn(c.target).style("opacity", 1);
  }, mousemove: (c) => {
    const s = t.attr("viewBox"), h = s.lastIndexOf(",") + 1, l = s.slice(h), d = s.slice(s.lastIndexOf(",", h) + 1);
    return (p, m) => {
      const g = Wn(p);
      o.html("");
      for (var y = 0; y < c.length; y++) {
        const b = `${c[y][m][0]}: ${c[y][m][1]}`;
        o.append("text").attr("x", 8).attr("y", 20 + 19.2 * y).style("width", 20).style("overflow", "hidden").text(b).attr("fill", e.border).attr("font-family", "Roboto, sans-serif").attr("font-weight", 600);
      }
      const v = o.node().getBBox();
      i.attr("width", v.width + 16).attr(
        "height",
        v.height + 12
      );
      const _ = r.node().getBBox();
      l < g[1] + _.height && (g[1] = l - _.height - 1), d < g[0] - (_.width - 16) && (g[0] -= _.width + 64), r.attr("transform", `translate(${g[0] + 32},${g[1]})`).style("display", "block");
    };
  }, mouseleave: (c) => {
    r.style("display", "none"), Tn(c.target).style("opacity", 0.9);
  } };
}
function V7(n, {
  x: t = (p, m) => m,
  y: e = (p) => p,
  width: r = 512,
  height: i = 512,
  xDomain: o,
  yDomain: a,
  title: u,
  yLabel: f,
  xLabel: c,
  scaling: s,
  theme: h = "dark",
  tooltipGenerator: l = b6,
  tooltips: d
} = {}) {
  const p = $f(n, t), m = $f(n, e);
  console.log(m), o === void 0 && (o = p), a === void 0 && (a = [Mr([0, Mr(m)]), xr(m)]), o = new Zt(o);
  let g = 12 + (u !== void 0 ? 32 : 0), y = 0, v = 20 + (c !== void 0 ? 28 : 0), _ = 4 + (f !== void 0 ? 24 : 0), b = s == "linear" ? Vh : Zh, w = [i - v, g], x = 0.4, E = [_, r - y], $ = L0(h);
  Rt(p.length).filter((N) => o.has(p[N]));
  const P = af(o, E).padding(x), S = b(a, w), T = T1(P).tickSizeOuter(0), R = S1(S).ticks(i / 40), C = ag("svg").attr("width", r).attr("height", i).attr("viewBox", [0, 0, r, i]).attr("xmlns", "http://www.w3.org/2000/svg").attr("version", "1.1").attr(
    "style",
    `background-color: ${$.background};padding:1rem;border-radius:.5rem;border:1px solid ${$.border}`
  );
  return l(h, C), u && k(), A(), M(), C.selectAll(".tick").attr("font-family", "Roboto, sans-serif").attr("font-weight", "700").attr("font-size", ".875rem"), C.select(".tooltip").raise(), C.node();
  function M() {
    C.append("g").attr("style", `color:${$.title}`).attr("transform", `translate(0,${i - v})`).call(T).call(
      (N) => c ? N.append("text").attr("x", (r >> 1) + _).attr("y", 42).attr("fill", $.ticks).attr("text-anchor", "center").attr("font-size", ".875rem").attr(
        "font-family",
        "Neue Machina, Neuemachina, Roboto, sans-serif"
      ).attr("letter-spacing", 2.5).text(c) : void 0
    ).call((N) => N.select(".domain").remove()).call((N) => N.selectAll(".tick line").attr("display", "none"));
  }
  function A() {
    C.append("g").call(R).call((N) => {
      _ += N.selectAll(".tick text").text().toString().length * 8;
    }).attr("transform", `translate(${_},0)`).attr("style", `color:${$.ticks}`).call((N) => N.select(".domain").remove()).call(
      (N) => N.selectAll(".tick line").attr("x2", r - _ - y).attr("stroke-opacity", 1).attr("color", $.grid)
    ).call(
      (N) => f ? N.append("text").attr("x", (-i >> 1) + v).attr("y", -50).attr("fill", $.ticks).attr("text-anchor", "center").attr("font-size", ".875rem").attr("transform", "rotate(-90)").attr(
        "font-family",
        "Neue Machina, Neuemachina, Roboto, sans-serif"
      ).attr("letter-spacing", 2.5).attr("style", "z-index:10").text(f) : void 0
    );
  }
  function k() {
    C.append("text").text(u).attr("fill", $.title).attr("font-size", "1.25rem").attr("font-family", "Neue Machina, Neuemachina, Roboto, sans-serif").attr("letter-spacing", 2.5).attr("x", 0).attr("y", 16);
  }
}
export {
  vn as Adder,
  V7 as BarChart,
  Yl as Delaunay,
  Gu as FormatSpecifier,
  Si as InternMap,
  Zt as InternSet,
  Ye as Node,
  j2 as Voronoi,
  Mt as ZoomTransform,
  Ww as active,
  f7 as arc,
  A3 as area,
  l7 as areaRadial,
  gn as ascending,
  y8 as autoType,
  T1 as axisBottom,
  S1 as axisLeft,
  iw as axisRight,
  rw as axisTop,
  R6 as bin,
  He as bisect,
  v6 as bisectCenter,
  _6 as bisectLeft,
  U0 as bisectRight,
  mu as bisector,
  b8 as blob,
  H7 as blueFade,
  w6 as blur,
  H0 as blur2,
  x6 as blurImage,
  Jw as brush,
  Zw as brushSelection,
  Qw as brushX,
  Kw as brushY,
  _8 as buffer,
  jw as chord,
  t8 as chordDirected,
  n8 as chordTranspose,
  a5 as cluster,
  Kt as color,
  i8 as contourDensity,
  oc as contours,
  bu as count,
  ag as create,
  wu as creator,
  M6 as cross,
  w8 as csv,
  a8 as csvFormat,
  u8 as csvFormatBody,
  c8 as csvFormatRow,
  f8 as csvFormatRows,
  s8 as csvFormatValue,
  sm as csvParse,
  o8 as csvParseRows,
  ht as cubehelix,
  T6 as cumsum,
  b7 as curveBasis,
  _7 as curveBasisClosed,
  v7 as curveBasisOpen,
  N3 as curveBumpX,
  C3 as curveBumpY,
  w7 as curveBundle,
  x7 as curveCardinal,
  M7 as curveCardinalClosed,
  T7 as curveCardinalOpen,
  S7 as curveCatmullRom,
  A7 as curveCatmullRomClosed,
  k7 as curveCatmullRomOpen,
  mf as curveLinear,
  E7 as curveLinearClosed,
  $7 as curveMonotoneX,
  N7 as curveMonotoneY,
  C7 as curveNatural,
  R7 as curveStep,
  I7 as curveStepAfter,
  P7 as curveStepBefore,
  Y0 as descending,
  J0 as deviation,
  J6 as difference,
  j6 as disjoint,
  Ge as dispatch,
  uw as drag,
  Su as dragDisable,
  Au as dragEnable,
  v8 as dsv,
  Yu as dsvFormat,
  Hw as easeBack,
  qw as easeBackIn,
  Hw as easeBackInOut,
  Uw as easeBackOut,
  Da as easeBounce,
  Lw as easeBounceIn,
  Yw as easeBounceInOut,
  Da as easeBounceOut,
  Bw as easeCircle,
  Ow as easeCircleIn,
  Bw as easeCircleInOut,
  Fw as easeCircleOut,
  Jp as easeCubic,
  Aw as easeCubicIn,
  Jp as easeCubicInOut,
  kw as easeCubicOut,
  Gw as easeElastic,
  Xw as easeElasticIn,
  Vw as easeElasticInOut,
  Gw as easeElasticOut,
  Dw as easeExp,
  Iw as easeExpIn,
  Dw as easeExpInOut,
  zw as easeExpOut,
  xw as easeLinear,
  Nw as easePoly,
  Ew as easePolyIn,
  Nw as easePolyInOut,
  $w as easePolyOut,
  Sw as easeQuad,
  Mw as easeQuadIn,
  Sw as easeQuadInOut,
  Tw as easeQuadOut,
  Pw as easeSin,
  Cw as easeSinIn,
  Pw as easeSinInOut,
  Rw as easeSinOut,
  V6 as every,
  hi as extent,
  A6 as fcumsum,
  Z6 as filter,
  k6 as flatGroup,
  E6 as flatRollup,
  E8 as forceCenter,
  $8 as forceCollide,
  N8 as forceLink,
  R8 as forceManyBody,
  P8 as forceRadial,
  C8 as forceSimulation,
  I8 as forceX,
  z8 as forceY,
  Vu as format,
  Qm as formatDefaultLocale,
  Zm as formatLocale,
  Gl as formatPrefix,
  Cr as formatSpecifier,
  S6 as fsum,
  Gy as geoAlbers,
  G8 as geoAlbersUsa,
  D8 as geoArea,
  V8 as geoAzimuthalEqualArea,
  Th as geoAzimuthalEqualAreaRaw,
  W8 as geoAzimuthalEquidistant,
  Sh as geoAzimuthalEquidistantRaw,
  O8 as geoBounds,
  F8 as geoCentroid,
  B8 as geoCircle,
  zc as geoClipAntimeridian,
  yy as geoClipCircle,
  L8 as geoClipExtent,
  Ku as geoClipRectangle,
  Q8 as geoConicConformal,
  Wy as geoConicConformalRaw,
  hu as geoConicEqualArea,
  Xy as geoConicEqualAreaRaw,
  J8 as geoConicEquidistant,
  Zy as geoConicEquidistantRaw,
  Y8 as geoContains,
  eu as geoDistance,
  j8 as geoEqualEarth,
  kh as geoEqualEarthRaw,
  K8 as geoEquirectangular,
  ro as geoEquirectangularRaw,
  n5 as geoGnomonic,
  Eh as geoGnomonicRaw,
  Ay as geoGraticule,
  q8 as geoGraticule10,
  t5 as geoIdentity,
  U8 as geoInterpolate,
  My as geoLength,
  Z8 as geoMercator,
  Mo as geoMercatorRaw,
  e5 as geoNaturalEarth1,
  $h as geoNaturalEarth1Raw,
  r5 as geoOrthographic,
  Nh as geoOrthographicRaw,
  H8 as geoPath,
  At as geoProjection,
  xh as geoProjectionMutator,
  ly as geoRotation,
  i5 as geoStereographic,
  Ch as geoStereographicRaw,
  ut as geoStream,
  X8 as geoTransform,
  o5 as geoTransverseMercator,
  Rh as geoTransverseMercatorRaw,
  fw as gray,
  u1 as greatest,
  q6 as greatestIndex,
  j0 as group,
  C6 as groupSort,
  n1 as groups,
  Ea as hcl,
  Ph as hierarchy,
  R6 as histogram,
  Aa as hsl,
  A8 as html,
  M8 as image,
  $6 as index,
  N6 as indexes,
  ie as interpolate,
  lw as interpolateArray,
  Ag as interpolateBasis,
  kg as interpolateBasisClosed,
  X4 as interpolateBlues,
  T4 as interpolateBrBG,
  P4 as interpolateBuGn,
  I4 as interpolateBuPu,
  K4 as interpolateCividis,
  n7 as interpolateCool,
  _w as interpolateCubehelix,
  J4 as interpolateCubehelixDefault,
  Cu as interpolateCubehelixLong,
  Cg as interpolateDate,
  hw as interpolateDiscrete,
  z4 as interpolateGnBu,
  G4 as interpolateGreens,
  V4 as interpolateGreys,
  yw as interpolateHcl,
  bw as interpolateHclLong,
  gw as interpolateHsl,
  pw as interpolateHslLong,
  dw as interpolateHue,
  a7 as interpolateInferno,
  mw as interpolateLab,
  o7 as interpolateMagma,
  tt as interpolateNumber,
  wl as interpolateNumberArray,
  Rg as interpolateObject,
  D4 as interpolateOrRd,
  Q4 as interpolateOranges,
  S4 as interpolatePRGn,
  A4 as interpolatePiYG,
  u7 as interpolatePlasma,
  F4 as interpolatePuBu,
  O4 as interpolatePuBuGn,
  k4 as interpolatePuOr,
  B4 as interpolatePuRd,
  W4 as interpolatePurples,
  t7 as interpolateRainbow,
  E4 as interpolateRdBu,
  $4 as interpolateRdGy,
  L4 as interpolateRdPu,
  N4 as interpolateRdYlBu,
  C4 as interpolateRdYlGn,
  Z4 as interpolateReds,
  Ci as interpolateRgb,
  Ng as interpolateRgbBasis,
  sw as interpolateRgbBasisClosed,
  Nu as interpolateRound,
  e7 as interpolateSinebow,
  R4 as interpolateSpectral,
  Tl as interpolateString,
  Og as interpolateTransformCss,
  Fg as interpolateTransformSvg,
  r7 as interpolateTurbo,
  i7 as interpolateViridis,
  j4 as interpolateWarm,
  q4 as interpolateYlGn,
  Y4 as interpolateYlGnBu,
  U4 as interpolateYlOrBr,
  H4 as interpolateYlOrRd,
  qg as interpolateZoom,
  ke as interrupt,
  nw as intersection,
  ww as interval,
  f4 as isoFormat,
  c4 as isoParse,
  T8 as json,
  ka as lab,
  cw as lch,
  Y6 as least,
  h1 as leastIndex,
  M0 as line,
  s7 as lineRadial,
  vf as link,
  h7 as linkHorizontal,
  g7 as linkRadial,
  d7 as linkVertical,
  fg as local,
  $f as map,
  Qs as matcher,
  xr as max,
  Xs as maxIndex,
  z6 as mean,
  D6 as median,
  O6 as medianIndex,
  Vs as merge,
  Mr as min,
  Gs as minIndex,
  F6 as mode,
  po as namespace,
  Pf as namespaces,
  a1 as nice,
  vo as now,
  c5 as pack,
  u5 as packEnclose,
  f5 as packSiblings,
  B6 as pairs,
  s5 as partition,
  oe as path,
  r1 as permute,
  c7 as pie,
  Ug as piecewise,
  si as pointRadial,
  Wn as pointer,
  ow as pointers,
  y5 as polygonArea,
  b5 as polygonCentroid,
  v5 as polygonContains,
  _5 as polygonHull,
  w5 as polygonLength,
  Km as precisionFixed,
  Jm as precisionPrefix,
  jm as precisionRound,
  G7 as purpleFade,
  Hu as quadtree,
  ki as quantile,
  c1 as quantileIndex,
  f1 as quantileSorted,
  vw as quantize,
  vu as quickselect,
  l7 as radialArea,
  s7 as radialLine,
  S5 as randomBates,
  E5 as randomBernoulli,
  Xb as randomBeta,
  Gb as randomBinomial,
  N5 as randomCauchy,
  A5 as randomExponential,
  Hh as randomGamma,
  Hb as randomGeometric,
  M5 as randomInt,
  Ub as randomIrwinHall,
  P5 as randomLcg,
  T5 as randomLogNormal,
  C5 as randomLogistic,
  Uh as randomNormal,
  k5 as randomPareto,
  R5 as randomPoisson,
  x5 as randomUniform,
  $5 as randomWeibull,
  Rt as range,
  L6 as rank,
  X7 as redFade,
  Q6 as reduce,
  K6 as reverse,
  Ar as rgb,
  e8 as ribbon,
  r8 as ribbonArrow,
  t1 as rollup,
  e1 as rollups,
  af as scaleBand,
  Bv as scaleDiverging,
  Lv as scaleDivergingLog,
  w0 as scaleDivergingPow,
  d4 as scaleDivergingSqrt,
  Yv as scaleDivergingSymlog,
  n_ as scaleIdentity,
  fs as scaleImplicit,
  Vh as scaleLinear,
  Zh as scaleLog,
  Xh as scaleOrdinal,
  I5 as scalePoint,
  Qh as scalePow,
  l_ as scaleQuantile,
  h_ as scaleQuantize,
  s_ as scaleRadial,
  zv as scaleSequential,
  Dv as scaleSequentialLog,
  v0 as scaleSequentialPow,
  Fv as scaleSequentialQuantile,
  h4 as scaleSequentialSqrt,
  Ov as scaleSequentialSymlog,
  z5 as scaleSqrt,
  a_ as scaleSymlog,
  d_ as scaleThreshold,
  s4 as scaleTime,
  l4 as scaleUtc,
  U6 as scan,
  p4 as schemeAccent,
  c3 as schemeBlues,
  qv as schemeBrBG,
  Kv as schemeBuGn,
  Jv as schemeBuPu,
  g4 as schemeCategory10,
  m4 as schemeDark2,
  jv as schemeGnBu,
  s3 as schemeGreens,
  l3 as schemeGreys,
  n3 as schemeOrRd,
  g3 as schemeOranges,
  Uv as schemePRGn,
  y4 as schemePaired,
  b4 as schemePastel1,
  _4 as schemePastel2,
  Hv as schemePiYG,
  e3 as schemePuBu,
  t3 as schemePuBuGn,
  Xv as schemePuOr,
  r3 as schemePuRd,
  h3 as schemePurples,
  Gv as schemeRdBu,
  Vv as schemeRdGy,
  i3 as schemeRdPu,
  Wv as schemeRdYlBu,
  Zv as schemeRdYlGn,
  d3 as schemeReds,
  v4 as schemeSet1,
  w4 as schemeSet2,
  x4 as schemeSet3,
  Qv as schemeSpectral,
  M4 as schemeTableau10,
  a3 as schemeYlGn,
  o3 as schemeYlGnBu,
  u3 as schemeYlOrBr,
  f3 as schemeYlOrRd,
  Tn as select,
  aw as selectAll,
  Ve as selection,
  xu as selector,
  Zs as selectorAll,
  H6 as shuffle,
  d1 as shuffler,
  W6 as some,
  Ef as sort,
  z7 as stack,
  O7 as stackOffsetDiverging,
  D7 as stackOffsetExpand,
  zr as stackOffsetNone,
  F7 as stackOffsetSilhouette,
  B7 as stackOffsetWiggle,
  e6 as stackOrderAppearance,
  i6 as stackOrderAscending,
  L7 as stackOrderDescending,
  Y7 as stackOrderInsideOut,
  Dr as stackOrderNone,
  q7 as stackOrderReverse,
  l5 as stratify,
  Pe as style,
  tw as subset,
  X6 as sum,
  y1 as superset,
  k8 as svg,
  y7 as symbol,
  D3 as symbolAsterisk,
  wf as symbolCircle,
  O3 as symbolCross,
  B3 as symbolDiamond,
  L3 as symbolDiamond2,
  Y3 as symbolPlus,
  q3 as symbolSquare,
  U3 as symbolSquare2,
  V3 as symbolStar,
  W3 as symbolTriangle,
  Q3 as symbolTriangle2,
  J3 as symbolWye,
  j3 as symbolX,
  p7 as symbols,
  p7 as symbolsFill,
  m7 as symbolsStroke,
  qu as text,
  P6 as thresholdFreedmanDiaconis,
  I6 as thresholdScott,
  Hs as thresholdSturges,
  jb as tickFormat,
  wr as tickIncrement,
  Ai as tickStep,
  Re as ticks,
  Ao as timeDay,
  L5 as timeDays,
  y0 as timeFormat,
  Ev as timeFormatDefaultLocale,
  k_ as timeFormatLocale,
  y_ as timeFriday,
  G5 as timeFridays,
  t0 as timeHour,
  B5 as timeHours,
  xn as timeInterval,
  g_ as timeMillisecond,
  D5 as timeMilliseconds,
  jh as timeMinute,
  F5 as timeMinutes,
  uo as timeMonday,
  q5 as timeMondays,
  i0 as timeMonth,
  W5 as timeMonths,
  kv as timeParse,
  b_ as timeSaturday,
  V5 as timeSaturdays,
  Me as timeSecond,
  O5 as timeSeconds,
  ko as timeSunday,
  Y5 as timeSundays,
  qe as timeThursday,
  X5 as timeThursdays,
  A_ as timeTickInterval,
  S_ as timeTicks,
  p_ as timeTuesday,
  U5 as timeTuesdays,
  m_ as timeWednesday,
  H5 as timeWednesdays,
  ko as timeWeek,
  Y5 as timeWeeks,
  ee as timeYear,
  Z5 as timeYears,
  Wf as timeout,
  Ru as timer,
  Xg as timerFlush,
  Kp as transition,
  g1 as transpose,
  h5 as tree,
  d5 as treemap,
  g5 as treemapBinary,
  To as treemapDice,
  m5 as treemapResquarify,
  of as treemapSlice,
  p5 as treemapSliceDice,
  Lb as treemapSquarify,
  x8 as tsv,
  h8 as tsvFormat,
  d8 as tsvFormatBody,
  p8 as tsvFormatRow,
  g8 as tsvFormatRows,
  m8 as tsvFormatValue,
  lm as tsvParse,
  l8 as tsvParseRows,
  ew as union,
  Eo as utcDay,
  J5 as utcDays,
  gf as utcFormat,
  w_ as utcFriday,
  i4 as utcFridays,
  f0 as utcHour,
  K5 as utcHours,
  g_ as utcMillisecond,
  D5 as utcMilliseconds,
  a0 as utcMinute,
  Q5 as utcMinutes,
  fo as utcMonday,
  n4 as utcMondays,
  l0 as utcMonth,
  a4 as utcMonths,
  b0 as utcParse,
  x_ as utcSaturday,
  o4 as utcSaturdays,
  Me as utcSecond,
  O5 as utcSeconds,
  $o as utcSunday,
  j5 as utcSundays,
  Ue as utcThursday,
  r4 as utcThursdays,
  T_ as utcTickInterval,
  M_ as utcTicks,
  __ as utcTuesday,
  t4 as utcTuesdays,
  v_ as utcWednesday,
  e4 as utcWednesdays,
  $o as utcWeek,
  j5 as utcWeeks,
  re as utcYear,
  u4 as utcYears,
  K0 as variance,
  js as window,
  S8 as xml,
  G6 as zip,
  U7 as zoom,
  Af as zoomIdentity,
  a6 as zoomTransform
};
