/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const qf = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, Yf = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Hu = 0, qc = 1, Vu = 2, jf = 3, Kf = 0, cl = 1, Wu = 2, xn = 3, An = 0, Ut = 1, dn = 2, Bn = 0, Li = 1, Ea = 2, Yc = 3, jc = 4, Xu = 5, ei = 100, qu = 101, Yu = 102, ju = 103, Ku = 104, Ju = 200, Zu = 201, Qu = 202, $u = 203, Ra = 204, Ca = 205, ed = 206, td = 207, nd = 208, id = 209, sd = 210, rd = 211, ad = 212, od = 213, cd = 214, Pa = 0, Ia = 1, La = 2, Fi = 3, Da = 4, Ua = 5, Na = 6, Fa = 7, xr = 0, ld = 1, hd = 2, kn = 0, ud = 1, dd = 2, fd = 3, ll = 4, pd = 5, md = 6, gd = 7, Kc = "attached", bd = "detached", mo = 300, zn = 301, ni = 302, sr = 303, rr = 304, Cs = 306, ii = 1e3, Zt = 1001, ys = 1002, yt = 1003, go = 1004, Jf = 1004, Ei = 1005, Zf = 1005, lt = 1006, _s = 1007, Qf = 1007, sn = 1008, $f = 1008, wn = 1009, hl = 1010, ul = 1011, Ms = 1012, bo = 1013, Gn = 1014, Rt = 1015, vn = 1016, _o = 1017, xo = 1018, Oi = 1020, dl = 35902, fl = 1021, pl = 1022, Gt = 1023, ml = 1024, gl = 1025, Di = 1026, Bi = 1027, vo = 1028, vr = 1029, bl = 1030, yo = 1031, ep = 1032, Mo = 1033, Js = 33776, Zs = 33777, Qs = 33778, $s = 33779, Oa = 35840, Ba = 35841, ka = 35842, za = 35843, Ga = 36196, Ha = 37492, Va = 37496, Wa = 37808, Xa = 37809, qa = 37810, Ya = 37811, ja = 37812, Ka = 37813, Ja = 37814, Za = 37815, Qa = 37816, $a = 37817, eo = 37818, to = 37819, no = 37820, io = 37821, er = 36492, so = 36494, ro = 36495, _l = 36283, ao = 36284, oo = 36285, co = 36286, _d = 2200, xd = 2201, vd = 2202, Ss = 2300, As = 2301, Aa = 2302, Ri = 2400, Ci = 2401, ar = 2402, So = 2500, xl = 2501, yd = 0, vl = 1, lo = 2, Md = 3200, Sd = 3201, tp = 3202, np = 3203, ai = 0, Ad = 1, Nn = "", xt = "srgb", St = "srgb-linear", Ao = "display-p3", yr = "display-p3-linear", or = "linear", ot = "srgb", cr = "rec709", lr = "p3", ip = 0, Ai = 7680, sp = 7681, rp = 7682, ap = 7683, op = 34055, cp = 34056, lp = 5386, hp = 512, up = 513, dp = 514, fp = 515, pp = 516, mp = 517, gp = 518, Jc = 519, wd = 512, Td = 513, Ed = 514, yl = 515, Rd = 516, Cd = 517, Pd = 518, Id = 519, hr = 35044, bp = 35048, _p = 35040, xp = 35045, vp = 35049, yp = 35041, Mp = 35046, Sp = 35050, Ap = 35042, wp = "100", Zc = "300 es", yn = 2e3, ur = 2001;
class Tn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const It = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let ah = 1234567;
const Ui = Math.PI / 180, ws = 180 / Math.PI;
function Qt() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (It[r & 255] + It[r >> 8 & 255] + It[r >> 16 & 255] + It[r >> 24 & 255] + "-" + It[e & 255] + It[e >> 8 & 255] + "-" + It[e >> 16 & 15 | 64] + It[e >> 24 & 255] + "-" + It[t & 63 | 128] + It[t >> 8 & 255] + "-" + It[t >> 16 & 255] + It[t >> 24 & 255] + It[n & 255] + It[n >> 8 & 255] + It[n >> 16 & 255] + It[n >> 24 & 255]).toLowerCase();
}
function pt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Ml(r, e) {
  return (r % e + e) % e;
}
function Tp(r, e, t, n, i) {
  return n + (r - e) * (i - n) / (t - e);
}
function Ep(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function tr(r, e, t) {
  return (1 - t) * r + t * e;
}
function Rp(r, e, t, n) {
  return tr(r, e, 1 - Math.exp(-t * n));
}
function Cp(r, e = 1) {
  return e - Math.abs(Ml(r, e * 2) - e);
}
function Pp(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function Ip(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function Lp(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function Dp(r, e) {
  return r + Math.random() * (e - r);
}
function Up(r) {
  return r * (0.5 - Math.random());
}
function Np(r) {
  r !== void 0 && (ah = r);
  let e = ah += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Fp(r) {
  return r * Ui;
}
function Op(r) {
  return r * ws;
}
function Bp(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function kp(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function zp(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function Gp(r, e, t, n, i) {
  const s = Math.cos, a = Math.sin, o = s(t / 2), c = a(t / 2), l = s((e + n) / 2), h = a((e + n) / 2), u = s((e - n) / 2), d = a((e - n) / 2), f = s((n - e) / 2), g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(o * h, c * u, c * d, o * l);
      break;
    case "YZY":
      r.set(c * d, o * h, c * u, o * l);
      break;
    case "ZXZ":
      r.set(c * u, c * d, o * h, o * l);
      break;
    case "XZX":
      r.set(o * h, c * g, c * f, o * l);
      break;
    case "YXY":
      r.set(c * f, o * h, c * g, o * l);
      break;
    case "ZYZ":
      r.set(c * g, c * f, o * h, o * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function zt(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ve(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const ps = {
  DEG2RAD: Ui,
  RAD2DEG: ws,
  generateUUID: Qt,
  clamp: pt,
  euclideanModulo: Ml,
  mapLinear: Tp,
  inverseLerp: Ep,
  lerp: tr,
  damp: Rp,
  pingpong: Cp,
  smoothstep: Pp,
  smootherstep: Ip,
  randInt: Lp,
  randFloat: Dp,
  randFloatSpread: Up,
  seededRandom: Np,
  degToRad: Fp,
  radToDeg: Op,
  isPowerOfTwo: Bp,
  ceilPowerOfTwo: kp,
  floorPowerOfTwo: zp,
  setQuaternionFromProperEuler: Gp,
  normalize: Ve,
  denormalize: zt
};
class Z {
  constructor(e = 0, t = 0) {
    Z.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(pt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * i + e.x, this.y = s * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class He {
  constructor(e, t, n, i, s, a, o, c, l) {
    He.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, c, l);
  }
  set(e, t, n, i, s, a, o, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = s, h[5] = c, h[6] = n, h[7] = a, h[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], f = n[5], g = n[8], b = i[0], m = i[3], p = i[6], x = i[1], _ = i[4], v = i[7], I = i[2], T = i[5], w = i[8];
    return s[0] = a * b + o * x + c * I, s[3] = a * m + o * _ + c * T, s[6] = a * p + o * v + c * w, s[1] = l * b + h * x + u * I, s[4] = l * m + h * _ + u * T, s[7] = l * p + h * v + u * w, s[2] = d * b + f * x + g * I, s[5] = d * m + f * _ + g * T, s[8] = d * p + f * v + g * w, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8];
    return t * a * h - t * o * l - n * s * h + n * o * c + i * s * l - i * a * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], u = h * a - o * l, d = o * c - h * s, f = l * s - a * c, g = t * u + n * d + i * f;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / g;
    return e[0] = u * b, e[1] = (i * l - h * n) * b, e[2] = (o * n - i * a) * b, e[3] = d * b, e[4] = (h * t - i * c) * b, e[5] = (i * s - o * t) * b, e[6] = f * b, e[7] = (n * c - l * t) * b, e[8] = (a * t - n * s) * b, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * a + l * o) + a + e,
      -i * l,
      i * c,
      -i * (-l * a + c * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply($o.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply($o.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply($o.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const $o = /* @__PURE__ */ new He();
function Ld(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535) return !0;
  return !1;
}
const Hp = {
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
};
function ms(r, e) {
  return new Hp[r](e);
}
function dr(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function Dd() {
  const r = dr("canvas");
  return r.style.display = "block", r;
}
const oh = {};
function wa(r) {
  r in oh || (oh[r] = !0, console.warn(r));
}
function Vp(r, e, t) {
  return new Promise(function(n, i) {
    function s() {
      switch (r.clientWaitSync(e, r.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case r.WAIT_FAILED:
          i();
          break;
        case r.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
function Wp(r) {
  const e = r.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Xp(r) {
  const e = r.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const ch = /* @__PURE__ */ new He().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), lh = /* @__PURE__ */ new He().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), Ds = {
  [St]: {
    transfer: or,
    primaries: cr,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (r) => r,
    fromReference: (r) => r
  },
  [xt]: {
    transfer: ot,
    primaries: cr,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (r) => r.convertSRGBToLinear(),
    fromReference: (r) => r.convertLinearToSRGB()
  },
  [yr]: {
    transfer: or,
    primaries: lr,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (r) => r.applyMatrix3(lh),
    fromReference: (r) => r.applyMatrix3(ch)
  },
  [Ao]: {
    transfer: ot,
    primaries: lr,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (r) => r.convertSRGBToLinear().applyMatrix3(lh),
    fromReference: (r) => r.applyMatrix3(ch).convertLinearToSRGB()
  }
}, qp = /* @__PURE__ */ new Set([St, yr]), Qe = {
  enabled: !0,
  _workingColorSpace: St,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(r) {
    if (!qp.has(r))
      throw new Error(`Unsupported working color space, "${r}".`);
    this._workingColorSpace = r;
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const n = Ds[e].toReference, i = Ds[t].fromReference;
    return i(n(r));
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this._workingColorSpace);
  },
  getPrimaries: function(r) {
    return Ds[r].primaries;
  },
  getTransfer: function(r) {
    return r === Nn ? or : Ds[r].transfer;
  },
  getLuminanceCoefficients: function(r, e = this._workingColorSpace) {
    return r.fromArray(Ds[e].luminanceCoefficients);
  }
};
function xs(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function ec(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let Ki;
class Ud {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Ki === void 0 && (Ki = dr("canvas")), Ki.width = e.width, Ki.height = e.height;
      const n = Ki.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Ki;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = dr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let a = 0; a < s.length; a++)
        s[a] = xs(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(xs(t[n] / 255) * 255) : t[n] = xs(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Yp = 0;
class Pi {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Yp++ }), this.uuid = Qt(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? s.push(tc(i[a].image)) : s.push(tc(i[a]));
      } else
        s = tc(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function tc(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Ud.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let jp = 0;
class ht extends Tn {
  constructor(e = ht.DEFAULT_IMAGE, t = ht.DEFAULT_MAPPING, n = Zt, i = Zt, s = lt, a = sn, o = Gt, c = wn, l = ht.DEFAULT_ANISOTROPY, h = Nn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: jp++ }), this.uuid = Qt(), this.name = "", this.source = new Pi(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Z(0, 0), this.repeat = new Z(1, 1), this.center = new Z(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new He(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== mo) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case ii:
          e.x = e.x - Math.floor(e.x);
          break;
        case Zt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case ys:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case ii:
          e.y = e.y - Math.floor(e.y);
          break;
        case Zt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case ys:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
ht.DEFAULT_IMAGE = null;
ht.DEFAULT_MAPPING = mo;
ht.DEFAULT_ANISOTROPY = 1;
class et {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    et.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const c = e.elements, l = c[0], h = c[4], u = c[8], d = c[1], f = c[5], g = c[9], b = c[2], m = c[6], p = c[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - b) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + b) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(l + f + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const _ = (l + 1) / 2, v = (f + 1) / 2, I = (p + 1) / 2, T = (h + d) / 4, w = (u + b) / 4, R = (g + m) / 4;
      return _ > v && _ > I ? _ < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(_), i = T / n, s = w / n) : v > I ? v < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(v), n = T / i, s = R / i) : I < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(I), n = w / s, i = R / s), this.set(n, i, s, t), this;
    }
    let x = Math.sqrt((m - g) * (m - g) + (u - b) * (u - b) + (d - h) * (d - h));
    return Math.abs(x) < 1e-3 && (x = 1), this.x = (m - g) / x, this.y = (u - b) / x, this.z = (d - h) / x, this.w = Math.acos((l + f + p - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Nd extends Tn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new et(0, 0, e, t), this.scissorTest = !1, this.viewport = new et(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: lt,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new ht(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    s.flipY = !1, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, s = this.textures.length; i < s; i++)
        this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, i = e.textures.length; n < i; n++)
      this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Pi(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class fn extends Nd {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class wo extends ht {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = yt, this.minFilter = yt, this.wrapR = Zt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Kp extends fn {
  constructor(e = 1, t = 1, n = 1, i = {}) {
    super(e, t, i), this.isWebGLArrayRenderTarget = !0, this.depth = n, this.texture = new wo(null, e, t, n), this.texture.isRenderTargetTexture = !0;
  }
}
class Sl extends ht {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = yt, this.minFilter = yt, this.wrapR = Zt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Jp extends fn {
  constructor(e = 1, t = 1, n = 1, i = {}) {
    super(e, t, i), this.isWebGL3DRenderTarget = !0, this.depth = n, this.texture = new Sl(null, e, t, n), this.texture.isRenderTargetTexture = !0;
  }
}
class Nt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = s[a + 0], f = s[a + 1], g = s[a + 2], b = s[a + 3];
    if (o === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = f, e[t + 2] = g, e[t + 3] = b;
      return;
    }
    if (u !== b || c !== d || l !== f || h !== g) {
      let m = 1 - o;
      const p = c * d + l * f + h * g + u * b, x = p >= 0 ? 1 : -1, _ = 1 - p * p;
      if (_ > Number.EPSILON) {
        const I = Math.sqrt(_), T = Math.atan2(I, p * x);
        m = Math.sin(m * T) / I, o = Math.sin(o * T) / I;
      }
      const v = o * x;
      if (c = c * m + d * v, l = l * m + f * v, h = h * m + g * v, u = u * m + b * v, m === 1 - o) {
        const I = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= I, l *= I, h *= I, u *= I;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = s[a], d = s[a + 1], f = s[a + 2], g = s[a + 3];
    return e[t] = o * g + h * u + c * f - l * d, e[t + 1] = c * g + h * d + l * u - o * f, e[t + 2] = l * g + h * f + o * d - c * u, e[t + 3] = h * g - o * u - c * d - l * f, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, i = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), h = o(i / 2), u = o(s / 2), d = c(n / 2), f = c(i / 2), g = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = d * h * u + l * f * g, this._y = l * f * u - d * h * g, this._z = l * h * g + d * f * u, this._w = l * h * u - d * f * g;
        break;
      case "YXZ":
        this._x = d * h * u + l * f * g, this._y = l * f * u - d * h * g, this._z = l * h * g - d * f * u, this._w = l * h * u + d * f * g;
        break;
      case "ZXY":
        this._x = d * h * u - l * f * g, this._y = l * f * u + d * h * g, this._z = l * h * g + d * f * u, this._w = l * h * u - d * f * g;
        break;
      case "ZYX":
        this._x = d * h * u - l * f * g, this._y = l * f * u + d * h * g, this._z = l * h * g - d * f * u, this._w = l * h * u + d * f * g;
        break;
      case "YZX":
        this._x = d * h * u + l * f * g, this._y = l * f * u + d * h * g, this._z = l * h * g - d * f * u, this._w = l * h * u - d * f * g;
        break;
      case "XZY":
        this._x = d * h * u - l * f * g, this._y = l * f * u - d * h * g, this._z = l * h * g + d * f * u, this._w = l * h * u + d * f * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], h = t[6], u = t[10], d = n + o + u;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / f, this._x = (h - c) * f, this._y = (s - l) * f, this._z = (a - i) * f;
    } else if (n > o && n > u) {
      const f = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - c) / f, this._x = 0.25 * f, this._y = (i + a) / f, this._z = (s + l) / f;
    } else if (o > u) {
      const f = 2 * Math.sqrt(1 + o - n - u);
      this._w = (s - l) / f, this._x = (i + a) / f, this._y = 0.25 * f, this._z = (c + h) / f;
    } else {
      const f = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - i) / f, this._x = (s + l) / f, this._y = (c + h) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(pt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + a * o + i * l - s * c, this._y = i * h + a * c + s * o - n * l, this._z = s * h + a * l + n * c - i * o, this._w = a * h - n * o - i * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = s, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const f = 1 - t;
      return this._w = f * a + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * s + t * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, o), u = Math.sin((1 - t) * h) / l, d = Math.sin(t * h) / l;
    return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      i * Math.sin(e),
      i * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class P {
  constructor(e = 0, t = 0, n = 0) {
    P.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(hh.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(hh.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * i - o * n), h = 2 * (o * t - s * i), u = 2 * (s * n - a * t);
    return this.x = t + c * l + a * u - o * h, this.y = n + c * h + o * l - s * u, this.z = i + c * u + s * h - a * l, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = i * c - s * o, this.y = s * a - n * c, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return nc.copy(this).projectOnVector(e), this.sub(nc);
  }
  reflect(e) {
    return this.sub(nc.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(pt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const nc = /* @__PURE__ */ new P(), hh = /* @__PURE__ */ new Nt();
class Ft {
  constructor(e = new P(1 / 0, 1 / 0, 1 / 0), t = new P(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(cn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(cn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = cn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, cn) : cn.fromBufferAttribute(s, a), cn.applyMatrix4(e.matrixWorld), this.expandByPoint(cn);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Dr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Dr.copy(n.boundingBox)), Dr.applyMatrix4(e.matrixWorld), this.union(Dr);
    }
    const i = e.children;
    for (let s = 0, a = i.length; s < a; s++)
      this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, cn), cn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Us), Ur.subVectors(this.max, Us), Ji.subVectors(e.a, Us), Zi.subVectors(e.b, Us), Qi.subVectors(e.c, Us), Wn.subVectors(Zi, Ji), Xn.subVectors(Qi, Zi), ui.subVectors(Ji, Qi);
    let t = [
      0,
      -Wn.z,
      Wn.y,
      0,
      -Xn.z,
      Xn.y,
      0,
      -ui.z,
      ui.y,
      Wn.z,
      0,
      -Wn.x,
      Xn.z,
      0,
      -Xn.x,
      ui.z,
      0,
      -ui.x,
      -Wn.y,
      Wn.x,
      0,
      -Xn.y,
      Xn.x,
      0,
      -ui.y,
      ui.x,
      0
    ];
    return !ic(t, Ji, Zi, Qi, Ur) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ic(t, Ji, Zi, Qi, Ur)) ? !1 : (Nr.crossVectors(Wn, Xn), t = [Nr.x, Nr.y, Nr.z], ic(t, Ji, Zi, Qi, Ur));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, cn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(cn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Rn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Rn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Rn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Rn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Rn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Rn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Rn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Rn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Rn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Rn = [
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P()
], cn = /* @__PURE__ */ new P(), Dr = /* @__PURE__ */ new Ft(), Ji = /* @__PURE__ */ new P(), Zi = /* @__PURE__ */ new P(), Qi = /* @__PURE__ */ new P(), Wn = /* @__PURE__ */ new P(), Xn = /* @__PURE__ */ new P(), ui = /* @__PURE__ */ new P(), Us = /* @__PURE__ */ new P(), Ur = /* @__PURE__ */ new P(), Nr = /* @__PURE__ */ new P(), di = /* @__PURE__ */ new P();
function ic(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    di.fromArray(r, s);
    const o = i.x * Math.abs(di.x) + i.y * Math.abs(di.y) + i.z * Math.abs(di.z), c = e.dot(di), l = t.dot(di), h = n.dot(di);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
      return !1;
  }
  return !0;
}
const Zp = /* @__PURE__ */ new Ft(), Ns = /* @__PURE__ */ new P(), sc = /* @__PURE__ */ new P();
class Pt {
  constructor(e = new P(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Zp.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Ns.subVectors(e, this.center);
    const t = Ns.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Ns, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (sc.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Ns.copy(e.center).add(sc)), this.expandByPoint(Ns.copy(e.center).sub(sc))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Cn = /* @__PURE__ */ new P(), rc = /* @__PURE__ */ new P(), Fr = /* @__PURE__ */ new P(), qn = /* @__PURE__ */ new P(), ac = /* @__PURE__ */ new P(), Or = /* @__PURE__ */ new P(), oc = /* @__PURE__ */ new P();
class Ps {
  constructor(e = new P(), t = new P(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Cn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Cn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Cn.copy(this.origin).addScaledVector(this.direction, t), Cn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    rc.copy(e).add(t).multiplyScalar(0.5), Fr.copy(t).sub(e).normalize(), qn.copy(this.origin).sub(rc);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(Fr), o = qn.dot(this.direction), c = -qn.dot(Fr), l = qn.lengthSq(), h = Math.abs(1 - a * a);
    let u, d, f, g;
    if (h > 0)
      if (u = a * c - o, d = a * o - c, g = s * h, u >= 0)
        if (d >= -g)
          if (d <= g) {
            const b = 1 / h;
            u *= b, d *= b, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * c) + l;
          } else
            d = s, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * c) + l;
        else
          d = -s, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * c) + l;
      else
        d <= -g ? (u = Math.max(0, -(-a * s + o)), d = u > 0 ? -s : Math.min(Math.max(-s, -c), s), f = -u * u + d * (d + 2 * c) + l) : d <= g ? (u = 0, d = Math.min(Math.max(-s, -c), s), f = d * (d + 2 * c) + l) : (u = Math.max(0, -(a * s + o)), d = u > 0 ? s : Math.min(Math.max(-s, -c), s), f = -u * u + d * (d + 2 * c) + l);
    else
      d = a > 0 ? -s : s, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(rc).addScaledVector(Fr, d), f;
  }
  intersectSphere(e, t) {
    Cn.subVectors(e.center, this.origin);
    const n = Cn.dot(this.direction), i = Cn.dot(Cn) - n * n, s = e.radius * e.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, a, o, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, i = (e.min.x - d.x) * l), h >= 0 ? (s = (e.min.y - d.y) * h, a = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, a = (e.min.y - d.y) * h), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (e.min.z - d.z) * u, c = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, c = (e.min.z - d.z) * u), n > c || o > i) || ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Cn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    ac.subVectors(t, e), Or.subVectors(n, e), oc.crossVectors(ac, Or);
    let a = this.direction.dot(oc), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    qn.subVectors(this.origin, e);
    const c = o * this.direction.dot(Or.crossVectors(qn, Or));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(ac.cross(qn));
    if (l < 0 || c + l > a)
      return null;
    const h = -o * qn.dot(oc);
    return h < 0 ? null : this.at(h / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ie {
  constructor(e, t, n, i, s, a, o, c, l, h, u, d, f, g, b, m) {
    Ie.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, c, l, h, u, d, f, g, b, m);
  }
  set(e, t, n, i, s, a, o, c, l, h, u, d, f, g, b, m) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = s, p[5] = a, p[9] = o, p[13] = c, p[2] = l, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = g, p[11] = b, p[15] = m, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Ie().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / $i.setFromMatrixColumn(e, 0).length(), s = 1 / $i.setFromMatrixColumn(e, 1).length(), a = 1 / $i.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const d = a * h, f = a * u, g = o * h, b = o * u;
      t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = f + g * l, t[5] = d - b * l, t[9] = -o * c, t[2] = b - d * l, t[6] = g + f * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const d = c * h, f = c * u, g = l * h, b = l * u;
      t[0] = d + b * o, t[4] = g * o - f, t[8] = a * l, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = f * o - g, t[6] = b + d * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const d = c * h, f = c * u, g = l * h, b = l * u;
      t[0] = d - b * o, t[4] = -a * u, t[8] = g + f * o, t[1] = f + g * o, t[5] = a * h, t[9] = b - d * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const d = a * h, f = a * u, g = o * h, b = o * u;
      t[0] = c * h, t[4] = g * l - f, t[8] = d * l + b, t[1] = c * u, t[5] = b * l + d, t[9] = f * l - g, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const d = a * c, f = a * l, g = o * c, b = o * l;
      t[0] = c * h, t[4] = b - d * u, t[8] = g * u + f, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -l * h, t[6] = f * u + g, t[10] = d - b * u;
    } else if (e.order === "XZY") {
      const d = a * c, f = a * l, g = o * c, b = o * l;
      t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = d * u + b, t[5] = a * h, t[9] = f * u - g, t[2] = g * u - f, t[6] = o * h, t[10] = b * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Qp, e, $p);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Kt.subVectors(e, t), Kt.lengthSq() === 0 && (Kt.z = 1), Kt.normalize(), Yn.crossVectors(n, Kt), Yn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Kt.x += 1e-4 : Kt.z += 1e-4, Kt.normalize(), Yn.crossVectors(n, Kt)), Yn.normalize(), Br.crossVectors(Kt, Yn), i[0] = Yn.x, i[4] = Br.x, i[8] = Kt.x, i[1] = Yn.y, i[5] = Br.y, i[9] = Kt.y, i[2] = Yn.z, i[6] = Br.z, i[10] = Kt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], f = n[13], g = n[2], b = n[6], m = n[10], p = n[14], x = n[3], _ = n[7], v = n[11], I = n[15], T = i[0], w = i[4], R = i[8], L = i[12], y = i[1], S = i[5], F = i[9], O = i[13], z = i[2], V = i[6], k = i[10], Y = i[14], W = i[3], le = i[7], oe = i[11], pe = i[15];
    return s[0] = a * T + o * y + c * z + l * W, s[4] = a * w + o * S + c * V + l * le, s[8] = a * R + o * F + c * k + l * oe, s[12] = a * L + o * O + c * Y + l * pe, s[1] = h * T + u * y + d * z + f * W, s[5] = h * w + u * S + d * V + f * le, s[9] = h * R + u * F + d * k + f * oe, s[13] = h * L + u * O + d * Y + f * pe, s[2] = g * T + b * y + m * z + p * W, s[6] = g * w + b * S + m * V + p * le, s[10] = g * R + b * F + m * k + p * oe, s[14] = g * L + b * O + m * Y + p * pe, s[3] = x * T + _ * y + v * z + I * W, s[7] = x * w + _ * S + v * V + I * le, s[11] = x * R + _ * F + v * k + I * oe, s[15] = x * L + _ * O + v * Y + I * pe, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], h = e[2], u = e[6], d = e[10], f = e[14], g = e[3], b = e[7], m = e[11], p = e[15];
    return g * (+s * c * u - i * l * u - s * o * d + n * l * d + i * o * f - n * c * f) + b * (+t * c * f - t * l * d + s * a * d - i * a * f + i * l * h - s * c * h) + m * (+t * l * u - t * o * f - s * a * u + n * a * f + s * o * h - n * l * h) + p * (-i * o * h - t * c * u + t * o * d + i * a * u - n * a * d + n * c * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], u = e[9], d = e[10], f = e[11], g = e[12], b = e[13], m = e[14], p = e[15], x = u * m * l - b * d * l + b * c * f - o * m * f - u * c * p + o * d * p, _ = g * d * l - h * m * l - g * c * f + a * m * f + h * c * p - a * d * p, v = h * b * l - g * u * l + g * o * f - a * b * f - h * o * p + a * u * p, I = g * u * c - h * b * c - g * o * d + a * b * d + h * o * m - a * u * m, T = t * x + n * _ + i * v + s * I;
    if (T === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / T;
    return e[0] = x * w, e[1] = (b * d * s - u * m * s - b * i * f + n * m * f + u * i * p - n * d * p) * w, e[2] = (o * m * s - b * c * s + b * i * l - n * m * l - o * i * p + n * c * p) * w, e[3] = (u * c * s - o * d * s - u * i * l + n * d * l + o * i * f - n * c * f) * w, e[4] = _ * w, e[5] = (h * m * s - g * d * s + g * i * f - t * m * f - h * i * p + t * d * p) * w, e[6] = (g * c * s - a * m * s - g * i * l + t * m * l + a * i * p - t * c * p) * w, e[7] = (a * d * s - h * c * s + h * i * l - t * d * l - a * i * f + t * c * f) * w, e[8] = v * w, e[9] = (g * u * s - h * b * s - g * n * f + t * b * f + h * n * p - t * u * p) * w, e[10] = (a * b * s - g * o * s + g * n * l - t * b * l - a * n * p + t * o * p) * w, e[11] = (h * o * s - a * u * s - h * n * l + t * u * l + a * n * f - t * o * f) * w, e[12] = I * w, e[13] = (h * b * i - g * u * i + g * n * d - t * b * d - h * n * m + t * u * m) * w, e[14] = (g * o * i - a * b * i - g * n * c + t * b * c + a * n * m - t * o * m) * w, e[15] = (a * u * i - h * o * i + h * n * c - t * u * c - a * n * d + t * o * d) * w, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, a = e.x, o = e.y, c = e.z, l = s * a, h = s * o;
    return this.set(
      l * a + n,
      l * o - i * c,
      l * c + i * o,
      0,
      l * o + i * c,
      h * o + n,
      h * c - i * a,
      0,
      l * c - i * o,
      h * c + i * a,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, h = a + a, u = o + o, d = s * l, f = s * h, g = s * u, b = a * h, m = a * u, p = o * u, x = c * l, _ = c * h, v = c * u, I = n.x, T = n.y, w = n.z;
    return i[0] = (1 - (b + p)) * I, i[1] = (f + v) * I, i[2] = (g - _) * I, i[3] = 0, i[4] = (f - v) * T, i[5] = (1 - (d + p)) * T, i[6] = (m + x) * T, i[7] = 0, i[8] = (g + _) * w, i[9] = (m - x) * w, i[10] = (1 - (d + b)) * w, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = $i.set(i[0], i[1], i[2]).length();
    const a = $i.set(i[4], i[5], i[6]).length(), o = $i.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], ln.copy(this);
    const l = 1 / s, h = 1 / a, u = 1 / o;
    return ln.elements[0] *= l, ln.elements[1] *= l, ln.elements[2] *= l, ln.elements[4] *= h, ln.elements[5] *= h, ln.elements[6] *= h, ln.elements[8] *= u, ln.elements[9] *= u, ln.elements[10] *= u, t.setFromRotationMatrix(ln), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, s, a, o = yn) {
    const c = this.elements, l = 2 * s / (t - e), h = 2 * s / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i);
    let f, g;
    if (o === yn)
      f = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    else if (o === ur)
      f = -a / (a - s), g = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = f, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, a, o = yn) {
    const c = this.elements, l = 1 / (t - e), h = 1 / (n - i), u = 1 / (a - s), d = (t + e) * l, f = (n + i) * h;
    let g, b;
    if (o === yn)
      g = (a + s) * u, b = -2 * u;
    else if (o === ur)
      g = s * u, b = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -d, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -f, c[2] = 0, c[6] = 0, c[10] = b, c[14] = -g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const $i = /* @__PURE__ */ new P(), ln = /* @__PURE__ */ new Ie(), Qp = /* @__PURE__ */ new P(0, 0, 0), $p = /* @__PURE__ */ new P(1, 1, 1), Yn = /* @__PURE__ */ new P(), Br = /* @__PURE__ */ new P(), Kt = /* @__PURE__ */ new P(), uh = /* @__PURE__ */ new Ie(), dh = /* @__PURE__ */ new Nt();
class $t {
  constructor(e = 0, t = 0, n = 0, i = $t.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], a = i[4], o = i[8], c = i[1], l = i[5], h = i[9], u = i[2], d = i[6], f = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(pt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-pt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(pt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-pt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(pt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, f));
        break;
      case "XZY":
        this._z = Math.asin(-pt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return uh.makeRotationFromQuaternion(e), this.setFromRotationMatrix(uh, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return dh.setFromEuler(this), this.setFromQuaternion(dh, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
$t.DEFAULT_ORDER = "XYZ";
class To {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let em = 0;
const fh = /* @__PURE__ */ new P(), es = /* @__PURE__ */ new Nt(), Pn = /* @__PURE__ */ new Ie(), kr = /* @__PURE__ */ new P(), Fs = /* @__PURE__ */ new P(), tm = /* @__PURE__ */ new P(), nm = /* @__PURE__ */ new Nt(), ph = /* @__PURE__ */ new P(1, 0, 0), mh = /* @__PURE__ */ new P(0, 1, 0), gh = /* @__PURE__ */ new P(0, 0, 1), bh = { type: "added" }, im = { type: "removed" }, ts = { type: "childadded", child: null }, cc = { type: "childremoved", child: null };
class je extends Tn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: em++ }), this.uuid = Qt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = je.DEFAULT_UP.clone();
    const e = new P(), t = new $t(), n = new Nt(), i = new P(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Ie()
      },
      normalMatrix: {
        value: new He()
      }
    }), this.matrix = new Ie(), this.matrixWorld = new Ie(), this.matrixAutoUpdate = je.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new To(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return es.setFromAxisAngle(e, t), this.quaternion.multiply(es), this;
  }
  rotateOnWorldAxis(e, t) {
    return es.setFromAxisAngle(e, t), this.quaternion.premultiply(es), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(ph, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(mh, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(gh, e);
  }
  translateOnAxis(e, t) {
    return fh.copy(e).applyQuaternion(this.quaternion), this.position.add(fh.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(ph, e);
  }
  translateY(e) {
    return this.translateOnAxis(mh, e);
  }
  translateZ(e) {
    return this.translateOnAxis(gh, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Pn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? kr.copy(e) : kr.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Fs.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Pn.lookAt(Fs, kr, this.up) : Pn.lookAt(kr, Fs, this.up), this.quaternion.setFromRotationMatrix(Pn), i && (Pn.extractRotation(i.matrixWorld), es.setFromRotationMatrix(Pn), this.quaternion.premultiply(es.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(bh), ts.child = e, this.dispatchEvent(ts), ts.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(im), cc.child = e, this.dispatchEvent(cc), cc.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Pn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Pn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Pn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(bh), ts.child = e, this.dispatchEvent(ts), ts.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let s = 0, a = i.length; s < a; s++)
      i[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Fs, e, tm), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Fs, nm, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++)
        i[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = {
      center: i.boundingSphere.center.toArray(),
      radius: i.boundingSphere.radius
    }), this.boundingBox !== null && (i.boundingBox = {
      min: i.boundingBox.min.toArray(),
      max: i.boundingBox.max.toArray()
    }));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const u = c[l];
            s(e.shapes, u);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(e.materials, this.material[c]));
        i.material = o;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        i.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), h = a(e.images), u = a(e.shapes), d = a(e.skeletons), f = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
je.DEFAULT_UP = /* @__PURE__ */ new P(0, 1, 0);
je.DEFAULT_MATRIX_AUTO_UPDATE = !0;
je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const hn = /* @__PURE__ */ new P(), In = /* @__PURE__ */ new P(), lc = /* @__PURE__ */ new P(), Ln = /* @__PURE__ */ new P(), ns = /* @__PURE__ */ new P(), is = /* @__PURE__ */ new P(), _h = /* @__PURE__ */ new P(), hc = /* @__PURE__ */ new P(), uc = /* @__PURE__ */ new P(), dc = /* @__PURE__ */ new P(), fc = /* @__PURE__ */ new et(), pc = /* @__PURE__ */ new et(), mc = /* @__PURE__ */ new et();
class qt {
  constructor(e = new P(), t = new P(), n = new P()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), hn.subVectors(e, t), i.cross(hn);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, s) {
    hn.subVectors(i, t), In.subVectors(n, t), lc.subVectors(e, t);
    const a = hn.dot(hn), o = hn.dot(In), c = hn.dot(lc), l = In.dot(In), h = In.dot(lc), u = a * l - o * o;
    if (u === 0)
      return s.set(0, 0, 0), null;
    const d = 1 / u, f = (l * c - o * h) * d, g = (a * h - o * c) * d;
    return s.set(1 - f - g, g, f);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Ln) === null ? !1 : Ln.x >= 0 && Ln.y >= 0 && Ln.x + Ln.y <= 1;
  }
  static getInterpolation(e, t, n, i, s, a, o, c) {
    return this.getBarycoord(e, t, n, i, Ln) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, Ln.x), c.addScaledVector(a, Ln.y), c.addScaledVector(o, Ln.z), c);
  }
  static getInterpolatedAttribute(e, t, n, i, s, a) {
    return fc.setScalar(0), pc.setScalar(0), mc.setScalar(0), fc.fromBufferAttribute(e, t), pc.fromBufferAttribute(e, n), mc.fromBufferAttribute(e, i), a.setScalar(0), a.addScaledVector(fc, s.x), a.addScaledVector(pc, s.y), a.addScaledVector(mc, s.z), a;
  }
  static isFrontFacing(e, t, n, i) {
    return hn.subVectors(n, t), In.subVectors(e, t), hn.cross(In).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return hn.subVectors(this.c, this.b), In.subVectors(this.a, this.b), hn.cross(In).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return qt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return qt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, s) {
    return qt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return qt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return qt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let a, o;
    ns.subVectors(i, n), is.subVectors(s, n), hc.subVectors(e, n);
    const c = ns.dot(hc), l = is.dot(hc);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    uc.subVectors(e, i);
    const h = ns.dot(uc), u = is.dot(uc);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const d = c * u - h * l;
    if (d <= 0 && c >= 0 && h <= 0)
      return a = c / (c - h), t.copy(n).addScaledVector(ns, a);
    dc.subVectors(e, s);
    const f = ns.dot(dc), g = is.dot(dc);
    if (g >= 0 && f <= g)
      return t.copy(s);
    const b = f * l - c * g;
    if (b <= 0 && l >= 0 && g <= 0)
      return o = l / (l - g), t.copy(n).addScaledVector(is, o);
    const m = h * g - f * u;
    if (m <= 0 && u - h >= 0 && f - g >= 0)
      return _h.subVectors(s, i), o = (u - h) / (u - h + (f - g)), t.copy(i).addScaledVector(_h, o);
    const p = 1 / (m + b + d);
    return a = b * p, o = d * p, t.copy(n).addScaledVector(ns, a).addScaledVector(is, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Fd = {
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
}, jn = { h: 0, s: 0, l: 0 }, zr = { h: 0, s: 0, l: 0 };
function gc(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class ue {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = xt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Qe.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = Qe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Qe.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = Qe.workingColorSpace) {
    if (e = Ml(e, 1), t = pt(t, 0, 1), n = pt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = gc(a, s, e + 1 / 3), this.g = gc(a, s, e), this.b = gc(a, s, e - 1 / 3);
    }
    return Qe.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = xt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = xt) {
    const n = Fd[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = xs(e.r), this.g = xs(e.g), this.b = xs(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ec(e.r), this.g = ec(e.g), this.b = ec(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = xt) {
    return Qe.fromWorkingColorSpace(Lt.copy(this), e), Math.round(pt(Lt.r * 255, 0, 255)) * 65536 + Math.round(pt(Lt.g * 255, 0, 255)) * 256 + Math.round(pt(Lt.b * 255, 0, 255));
  }
  getHexString(e = xt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Qe.workingColorSpace) {
    Qe.fromWorkingColorSpace(Lt.copy(this), t);
    const n = Lt.r, i = Lt.g, s = Lt.b, a = Math.max(n, i, s), o = Math.min(n, i, s);
    let c, l;
    const h = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const u = a - o;
      switch (l = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          c = (i - s) / u + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / u + 2;
          break;
        case s:
          c = (n - i) / u + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = Qe.workingColorSpace) {
    return Qe.fromWorkingColorSpace(Lt.copy(this), t), e.r = Lt.r, e.g = Lt.g, e.b = Lt.b, e;
  }
  getStyle(e = xt) {
    Qe.fromWorkingColorSpace(Lt.copy(this), e);
    const t = Lt.r, n = Lt.g, i = Lt.b;
    return e !== xt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(jn), this.setHSL(jn.h + e, jn.s + t, jn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(jn), e.getHSL(zr);
    const n = tr(jn.h, zr.h, t), i = tr(jn.s, zr.s, t), s = tr(jn.l, zr.l, t);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * i, this.g = s[1] * t + s[4] * n + s[7] * i, this.b = s[2] * t + s[5] * n + s[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Lt = /* @__PURE__ */ new ue();
ue.NAMES = Fd;
let sm = 0;
class Mt extends Tn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: sm++ }), this.uuid = Qt(), this.name = "", this.type = "Material", this.blending = Li, this.side = An, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Ra, this.blendDst = Ca, this.blendEquation = ei, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ue(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Fi, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Jc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ai, this.stencilZFail = Ai, this.stencilZPass = Ai, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Li && (n.blending = this.blending), this.side !== An && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Ra && (n.blendSrc = this.blendSrc), this.blendDst !== Ca && (n.blendDst = this.blendDst), this.blendEquation !== ei && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Fi && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Jc && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Ai && (n.stencilFail = this.stencilFail), this.stencilZFail !== Ai && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Ai && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const s = i(e.textures), a = i(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class Ct extends Mt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ue(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new $t(), this.combine = xr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Fn = /* @__PURE__ */ rm();
function rm() {
  const r = new ArrayBuffer(4), e = new Float32Array(r), t = new Uint32Array(r), n = new Uint32Array(512), i = new Uint32Array(512);
  for (let c = 0; c < 256; ++c) {
    const l = c - 127;
    l < -27 ? (n[c] = 0, n[c | 256] = 32768, i[c] = 24, i[c | 256] = 24) : l < -14 ? (n[c] = 1024 >> -l - 14, n[c | 256] = 1024 >> -l - 14 | 32768, i[c] = -l - 1, i[c | 256] = -l - 1) : l <= 15 ? (n[c] = l + 15 << 10, n[c | 256] = l + 15 << 10 | 32768, i[c] = 13, i[c | 256] = 13) : l < 128 ? (n[c] = 31744, n[c | 256] = 64512, i[c] = 24, i[c | 256] = 24) : (n[c] = 31744, n[c | 256] = 64512, i[c] = 13, i[c | 256] = 13);
  }
  const s = new Uint32Array(2048), a = new Uint32Array(64), o = new Uint32Array(64);
  for (let c = 1; c < 1024; ++c) {
    let l = c << 13, h = 0;
    for (; (l & 8388608) === 0; )
      l <<= 1, h -= 8388608;
    l &= -8388609, h += 947912704, s[c] = l | h;
  }
  for (let c = 1024; c < 2048; ++c)
    s[c] = 939524096 + (c - 1024 << 13);
  for (let c = 1; c < 31; ++c)
    a[c] = c << 23;
  a[31] = 1199570944, a[32] = 2147483648;
  for (let c = 33; c < 63; ++c)
    a[c] = 2147483648 + (c - 32 << 23);
  a[63] = 3347054592;
  for (let c = 1; c < 64; ++c)
    c !== 32 && (o[c] = 1024);
  return {
    floatView: e,
    uint32View: t,
    baseTable: n,
    shiftTable: i,
    mantissaTable: s,
    exponentTable: a,
    offsetTable: o
  };
}
function Xt(r) {
  Math.abs(r) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), r = pt(r, -65504, 65504), Fn.floatView[0] = r;
  const e = Fn.uint32View[0], t = e >> 23 & 511;
  return Fn.baseTable[t] + ((e & 8388607) >> Fn.shiftTable[t]);
}
function Ys(r) {
  const e = r >> 10;
  return Fn.uint32View[0] = Fn.mantissaTable[Fn.offsetTable[e] + (r & 1023)] + Fn.exponentTable[e], Fn.floatView[0];
}
const js = {
  toHalfFloat: Xt,
  fromHalfFloat: Ys
}, _t = /* @__PURE__ */ new P(), Gr = /* @__PURE__ */ new Z();
class nt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = hr, this.updateRanges = [], this.gpuType = Rt, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Gr.fromBufferAttribute(this, t), Gr.applyMatrix3(e), this.setXY(t, Gr.x, Gr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        _t.fromBufferAttribute(this, t), _t.applyMatrix3(e), this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t), _t.applyMatrix4(e), this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t), _t.applyNormalMatrix(e), this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t), _t.transformDirection(e), this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = zt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Ve(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Ve(t, this.array), n = Ve(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Ve(t, this.array), n = Ve(n, this.array), i = Ve(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = Ve(t, this.array), n = Ve(n, this.array), i = Ve(i, this.array), s = Ve(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== hr && (e.usage = this.usage), e;
  }
}
class am extends nt {
  constructor(e, t, n) {
    super(new Int8Array(e), t, n);
  }
}
class om extends nt {
  constructor(e, t, n) {
    super(new Uint8Array(e), t, n);
  }
}
class cm extends nt {
  constructor(e, t, n) {
    super(new Uint8ClampedArray(e), t, n);
  }
}
class lm extends nt {
  constructor(e, t, n) {
    super(new Int16Array(e), t, n);
  }
}
class Al extends nt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class hm extends nt {
  constructor(e, t, n) {
    super(new Int32Array(e), t, n);
  }
}
class wl extends nt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class um extends nt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n), this.isFloat16BufferAttribute = !0;
  }
  getX(e) {
    let t = Ys(this.array[e * this.itemSize]);
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.array[e * this.itemSize] = Xt(t), this;
  }
  getY(e) {
    let t = Ys(this.array[e * this.itemSize + 1]);
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.array[e * this.itemSize + 1] = Xt(t), this;
  }
  getZ(e) {
    let t = Ys(this.array[e * this.itemSize + 2]);
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.array[e * this.itemSize + 2] = Xt(t), this;
  }
  getW(e) {
    let t = Ys(this.array[e * this.itemSize + 3]);
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.array[e * this.itemSize + 3] = Xt(t), this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Ve(t, this.array), n = Ve(n, this.array)), this.array[e + 0] = Xt(t), this.array[e + 1] = Xt(n), this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Ve(t, this.array), n = Ve(n, this.array), i = Ve(i, this.array)), this.array[e + 0] = Xt(t), this.array[e + 1] = Xt(n), this.array[e + 2] = Xt(i), this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = Ve(t, this.array), n = Ve(n, this.array), i = Ve(i, this.array), s = Ve(s, this.array)), this.array[e + 0] = Xt(t), this.array[e + 1] = Xt(n), this.array[e + 2] = Xt(i), this.array[e + 3] = Xt(s), this;
  }
}
class we extends nt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let dm = 0;
const tn = /* @__PURE__ */ new Ie(), bc = /* @__PURE__ */ new je(), ss = /* @__PURE__ */ new P(), Jt = /* @__PURE__ */ new Ft(), Os = /* @__PURE__ */ new Ft(), Tt = /* @__PURE__ */ new P();
class Xe extends Tn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: dm++ }), this.uuid = Qt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Ld(e) ? wl : Al)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new He().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return tn.makeRotationFromQuaternion(e), this.applyMatrix4(tn), this;
  }
  rotateX(e) {
    return tn.makeRotationX(e), this.applyMatrix4(tn), this;
  }
  rotateY(e) {
    return tn.makeRotationY(e), this.applyMatrix4(tn), this;
  }
  rotateZ(e) {
    return tn.makeRotationZ(e), this.applyMatrix4(tn), this;
  }
  translate(e, t, n) {
    return tn.makeTranslation(e, t, n), this.applyMatrix4(tn), this;
  }
  scale(e, t, n) {
    return tn.makeScale(e, t, n), this.applyMatrix4(tn), this;
  }
  lookAt(e) {
    return bc.lookAt(e), bc.updateMatrix(), this.applyMatrix4(bc.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ss).negate(), this.translate(ss.x, ss.y, ss.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new we(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ft());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new P(-1 / 0, -1 / 0, -1 / 0),
        new P(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          Jt.setFromBufferAttribute(s), this.morphTargetsRelative ? (Tt.addVectors(this.boundingBox.min, Jt.min), this.boundingBox.expandByPoint(Tt), Tt.addVectors(this.boundingBox.max, Jt.max), this.boundingBox.expandByPoint(Tt)) : (this.boundingBox.expandByPoint(Jt.min), this.boundingBox.expandByPoint(Jt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Pt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new P(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Jt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Os.setFromBufferAttribute(o), this.morphTargetsRelative ? (Tt.addVectors(Jt.min, Os.min), Jt.expandByPoint(Tt), Tt.addVectors(Jt.max, Os.max), Jt.expandByPoint(Tt)) : (Jt.expandByPoint(Os.min), Jt.expandByPoint(Os.max));
        }
      Jt.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        Tt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(Tt));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = o.count; l < h; l++)
            Tt.fromBufferAttribute(o, l), c && (ss.fromBufferAttribute(e, l), Tt.add(ss)), i = Math.max(i, n.distanceToSquared(Tt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, i = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new nt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let R = 0; R < n.count; R++)
      o[R] = new P(), c[R] = new P();
    const l = new P(), h = new P(), u = new P(), d = new Z(), f = new Z(), g = new Z(), b = new P(), m = new P();
    function p(R, L, y) {
      l.fromBufferAttribute(n, R), h.fromBufferAttribute(n, L), u.fromBufferAttribute(n, y), d.fromBufferAttribute(s, R), f.fromBufferAttribute(s, L), g.fromBufferAttribute(s, y), h.sub(l), u.sub(l), f.sub(d), g.sub(d);
      const S = 1 / (f.x * g.y - g.x * f.y);
      isFinite(S) && (b.copy(h).multiplyScalar(g.y).addScaledVector(u, -f.y).multiplyScalar(S), m.copy(u).multiplyScalar(f.x).addScaledVector(h, -g.x).multiplyScalar(S), o[R].add(b), o[L].add(b), o[y].add(b), c[R].add(m), c[L].add(m), c[y].add(m));
    }
    let x = this.groups;
    x.length === 0 && (x = [{
      start: 0,
      count: e.count
    }]);
    for (let R = 0, L = x.length; R < L; ++R) {
      const y = x[R], S = y.start, F = y.count;
      for (let O = S, z = S + F; O < z; O += 3)
        p(
          e.getX(O + 0),
          e.getX(O + 1),
          e.getX(O + 2)
        );
    }
    const _ = new P(), v = new P(), I = new P(), T = new P();
    function w(R) {
      I.fromBufferAttribute(i, R), T.copy(I);
      const L = o[R];
      _.copy(L), _.sub(I.multiplyScalar(I.dot(L))).normalize(), v.crossVectors(T, L);
      const S = v.dot(c[R]) < 0 ? -1 : 1;
      a.setXYZW(R, _.x, _.y, _.z, S);
    }
    for (let R = 0, L = x.length; R < L; ++R) {
      const y = x[R], S = y.start, F = y.count;
      for (let O = S, z = S + F; O < z; O += 3)
        w(e.getX(O + 0)), w(e.getX(O + 1)), w(e.getX(O + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new nt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, f = n.count; d < f; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new P(), s = new P(), a = new P(), o = new P(), c = new P(), l = new P(), h = new P(), u = new P();
      if (e)
        for (let d = 0, f = e.count; d < f; d += 3) {
          const g = e.getX(d + 0), b = e.getX(d + 1), m = e.getX(d + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, b), a.fromBufferAttribute(t, m), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, b), l.fromBufferAttribute(n, m), o.add(h), c.add(h), l.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(b, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let d = 0, f = t.count; d < f; d += 3)
          i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Tt.fromBufferAttribute(e, t), Tt.normalize(), e.setXYZ(t, Tt.x, Tt.y, Tt.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, h = o.itemSize, u = o.normalized, d = new l.constructor(c.length * h);
      let f = 0, g = 0;
      for (let b = 0, m = c.length; b < m; b++) {
        o.isInterleavedBufferAttribute ? f = c[b] * o.data.stride + o.offset : f = c[b] * h;
        for (let p = 0; p < h; p++)
          d[g++] = l[f++];
      }
      return new nt(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Xe(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const c = i[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let h = 0, u = l.length; h < u; h++) {
        const d = l[h], f = e(d, n);
        c.push(f);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u];
        h.push(f.toJSON(e.data));
      }
      h.length > 0 && (i[c] = h, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], u = s[l];
      for (let d = 0, f = u.length; d < f; d++)
        h.push(u[d].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const u = a[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const xh = /* @__PURE__ */ new Ie(), fi = /* @__PURE__ */ new Ps(), Hr = /* @__PURE__ */ new Pt(), vh = /* @__PURE__ */ new P(), Vr = /* @__PURE__ */ new P(), Wr = /* @__PURE__ */ new P(), Xr = /* @__PURE__ */ new P(), _c = /* @__PURE__ */ new P(), qr = /* @__PURE__ */ new P(), yh = /* @__PURE__ */ new P(), Yr = /* @__PURE__ */ new P();
class qe extends je {
  constructor(e = new Xe(), t = new Ct()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      qr.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = o[c], u = s[c];
        h !== 0 && (_c.fromBufferAttribute(u, e), a ? qr.addScaledVector(_c, h) : qr.addScaledVector(_c.sub(t), h));
      }
      t.add(qr);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Hr.copy(n.boundingSphere), Hr.applyMatrix4(s), fi.copy(e.ray).recast(e.near), !(Hr.containsPoint(fi.origin) === !1 && (fi.intersectSphere(Hr, vh) === null || fi.origin.distanceToSquared(vh) > (e.far - e.near) ** 2)) && (xh.copy(s).invert(), fi.copy(e.ray).applyMatrix4(xh), !(n.boundingBox !== null && fi.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, fi)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, d = s.groups, f = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, b = d.length; g < b; g++) {
          const m = d[g], p = a[m.materialIndex], x = Math.max(m.start, f.start), _ = Math.min(o.count, Math.min(m.start + m.count, f.start + f.count));
          for (let v = x, I = _; v < I; v += 3) {
            const T = o.getX(v), w = o.getX(v + 1), R = o.getX(v + 2);
            i = jr(this, p, e, n, l, h, u, T, w, R), i && (i.faceIndex = Math.floor(v / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, f.start), b = Math.min(o.count, f.start + f.count);
        for (let m = g, p = b; m < p; m += 3) {
          const x = o.getX(m), _ = o.getX(m + 1), v = o.getX(m + 2);
          i = jr(this, a, e, n, l, h, u, x, _, v), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, b = d.length; g < b; g++) {
          const m = d[g], p = a[m.materialIndex], x = Math.max(m.start, f.start), _ = Math.min(c.count, Math.min(m.start + m.count, f.start + f.count));
          for (let v = x, I = _; v < I; v += 3) {
            const T = v, w = v + 1, R = v + 2;
            i = jr(this, p, e, n, l, h, u, T, w, R), i && (i.faceIndex = Math.floor(v / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, f.start), b = Math.min(c.count, f.start + f.count);
        for (let m = g, p = b; m < p; m += 3) {
          const x = m, _ = m + 1, v = m + 2;
          i = jr(this, a, e, n, l, h, u, x, _, v), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
  }
}
function fm(r, e, t, n, i, s, a, o) {
  let c;
  if (e.side === Ut ? c = n.intersectTriangle(a, s, i, !0, o) : c = n.intersectTriangle(i, s, a, e.side === An, o), c === null) return null;
  Yr.copy(o), Yr.applyMatrix4(r.matrixWorld);
  const l = t.ray.origin.distanceTo(Yr);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Yr.clone(),
    object: r
  };
}
function jr(r, e, t, n, i, s, a, o, c, l) {
  r.getVertexPosition(o, Vr), r.getVertexPosition(c, Wr), r.getVertexPosition(l, Xr);
  const h = fm(r, e, t, n, Vr, Wr, Xr, yh);
  if (h) {
    const u = new P();
    qt.getBarycoord(yh, Vr, Wr, Xr, u), i && (h.uv = qt.getInterpolatedAttribute(i, o, c, l, u, new Z())), s && (h.uv1 = qt.getInterpolatedAttribute(s, o, c, l, u, new Z())), a && (h.normal = qt.getInterpolatedAttribute(a, o, c, l, u, new P()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = {
      a: o,
      b: c,
      c: l,
      normal: new P(),
      materialIndex: 0
    };
    qt.getNormal(Vr, Wr, Xr, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
class oi extends Xe {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], h = [], u = [];
    let d = 0, f = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new we(l, 3)), this.setAttribute("normal", new we(h, 3)), this.setAttribute("uv", new we(u, 2));
    function g(b, m, p, x, _, v, I, T, w, R, L) {
      const y = v / w, S = I / R, F = v / 2, O = I / 2, z = T / 2, V = w + 1, k = R + 1;
      let Y = 0, W = 0;
      const le = new P();
      for (let oe = 0; oe < k; oe++) {
        const pe = oe * S - O;
        for (let De = 0; De < V; De++) {
          const Oe = De * y - F;
          le[b] = Oe * x, le[m] = pe * _, le[p] = z, l.push(le.x, le.y, le.z), le[b] = 0, le[m] = 0, le[p] = T > 0 ? 1 : -1, h.push(le.x, le.y, le.z), u.push(De / w), u.push(1 - oe / R), Y += 1;
        }
      }
      for (let oe = 0; oe < R; oe++)
        for (let pe = 0; pe < w; pe++) {
          const De = d + pe + V * oe, Oe = d + pe + V * (oe + 1), j = d + (pe + 1) + V * (oe + 1), ie = d + (pe + 1) + V * oe;
          c.push(De, Oe, ie), c.push(Oe, j, ie), W += 6;
        }
      o.addGroup(f, W, L), f += W, d += Y;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new oi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Ts(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function kt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = Ts(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function pm(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function Od(r) {
  const e = r.getRenderTarget();
  return e === null ? r.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Qe.workingColorSpace;
}
const Bd = { clone: Ts, merge: kt };
var mm = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, gm = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class pn extends Mt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = mm, this.fragmentShader = gm, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ts(e.uniforms), this.uniformsGroups = pm(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Eo extends je {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ie(), this.projectionMatrix = new Ie(), this.projectionMatrixInverse = new Ie(), this.coordinateSystem = yn;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Kn = /* @__PURE__ */ new P(), Mh = /* @__PURE__ */ new Z(), Sh = /* @__PURE__ */ new Z();
class vt extends Eo {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ws * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Ui * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ws * 2 * Math.atan(
      Math.tan(Ui * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, n) {
    Kn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Kn.x, Kn.y).multiplyScalar(-e / Kn.z), Kn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Kn.x, Kn.y).multiplyScalar(-e / Kn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Mh, Sh), t.subVectors(Sh, Mh);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Ui * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * i / c, t -= a.offsetY * n / l, i *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const rs = -90, as = 1;
class kd extends je {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new vt(rs, as, e, t);
    i.layers = this.layers, this.add(i);
    const s = new vt(rs, as, e, t);
    s.layers = this.layers, this.add(s);
    const a = new vt(rs, as, e, t);
    a.layers = this.layers, this.add(a);
    const o = new vt(rs, as, e, t);
    o.layers = this.layers, this.add(o);
    const c = new vt(rs, as, e, t);
    c.layers = this.layers, this.add(c);
    const l = new vt(rs, as, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === yn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === ur)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, c, l, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const b = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, s), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, c), e.setRenderTarget(n, 4, i), e.render(t, l), n.texture.generateMipmaps = b, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, d, f), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Mr extends ht {
  constructor(e, t, n, i, s, a, o, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : zn, super(e, t, n, i, s, a, o, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class zd extends fn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Mr(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : lt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new oi(5, 5, 5), s = new pn({
      name: "CubemapFromEquirect",
      uniforms: Ts(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Ut,
      blending: Bn
    });
    s.uniforms.tEquirect.value = t;
    const a = new qe(i, s), o = t.minFilter;
    return t.minFilter === sn && (t.minFilter = lt), new kd(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const xc = /* @__PURE__ */ new P(), bm = /* @__PURE__ */ new P(), _m = /* @__PURE__ */ new He();
class $n {
  constructor(e = new P(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = xc.subVectors(n, t).cross(bm.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(xc), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || _m.getNormalMatrix(e), i = this.coplanarPoint(xc).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const pi = /* @__PURE__ */ new Pt(), Kr = /* @__PURE__ */ new P();
class Sr {
  constructor(e = new $n(), t = new $n(), n = new $n(), i = new $n(), s = new $n(), a = new $n()) {
    this.planes = [e, t, n, i, s, a];
  }
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = yn) {
    const n = this.planes, i = e.elements, s = i[0], a = i[1], o = i[2], c = i[3], l = i[4], h = i[5], u = i[6], d = i[7], f = i[8], g = i[9], b = i[10], m = i[11], p = i[12], x = i[13], _ = i[14], v = i[15];
    if (n[0].setComponents(c - s, d - l, m - f, v - p).normalize(), n[1].setComponents(c + s, d + l, m + f, v + p).normalize(), n[2].setComponents(c + a, d + h, m + g, v + x).normalize(), n[3].setComponents(c - a, d - h, m - g, v - x).normalize(), n[4].setComponents(c - o, d - u, m - b, v - _).normalize(), t === yn)
      n[5].setComponents(c + o, d + u, m + b, v + _).normalize();
    else if (t === ur)
      n[5].setComponents(o, u, b, _).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(pi);
  }
  intersectsSprite(e) {
    return pi.center.set(0, 0, 0), pi.radius = 0.7071067811865476, pi.applyMatrix4(e.matrixWorld), this.intersectsSphere(pi);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Kr.x = i.normal.x > 0 ? e.max.x : e.min.x, Kr.y = i.normal.y > 0 ? e.max.y : e.min.y, Kr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Kr) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Gd() {
  let r = null, e = !1, t = null, n = null;
  function i(s, a) {
    t(s, a), n = r.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function xm(r) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, c) {
    const l = o.array, h = o.usage, u = l.byteLength, d = r.createBuffer();
    r.bindBuffer(c, d), r.bufferData(c, l, h), o.onUploadCallback();
    let f;
    if (l instanceof Float32Array)
      f = r.FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? f = r.HALF_FLOAT : f = r.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      f = r.SHORT;
    else if (l instanceof Uint32Array)
      f = r.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      f = r.INT;
    else if (l instanceof Int8Array)
      f = r.BYTE;
    else if (l instanceof Uint8Array)
      f = r.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      f = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: d,
      type: f,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: u
    };
  }
  function n(o, c, l) {
    const h = c.array, u = c.updateRanges;
    if (r.bindBuffer(l, o), u.length === 0)
      r.bufferSubData(l, 0, h);
    else {
      u.sort((f, g) => f.start - g.start);
      let d = 0;
      for (let f = 1; f < u.length; f++) {
        const g = u[d], b = u[f];
        b.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          b.start + b.count - g.start
        ) : (++d, u[d] = b);
      }
      u.length = d + 1;
      for (let f = 0, g = u.length; f < g; f++) {
        const b = u[f];
        r.bufferSubData(
          l,
          b.start * h.BYTES_PER_ELEMENT,
          h,
          b.start,
          b.count
        );
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (r.deleteBuffer(c.buffer), e.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const l = e.get(o);
    if (l === void 0)
      e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, o, c), l.version = o.version;
    }
  }
  return {
    get: i,
    remove: s,
    update: a
  };
}
class Wi extends Xe {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(i), l = o + 1, h = c + 1, u = e / o, d = t / c, f = [], g = [], b = [], m = [];
    for (let p = 0; p < h; p++) {
      const x = p * d - a;
      for (let _ = 0; _ < l; _++) {
        const v = _ * u - s;
        g.push(v, -x, 0), b.push(0, 0, 1), m.push(_ / o), m.push(1 - p / c);
      }
    }
    for (let p = 0; p < c; p++)
      for (let x = 0; x < o; x++) {
        const _ = x + l * p, v = x + l * (p + 1), I = x + 1 + l * (p + 1), T = x + 1 + l * p;
        f.push(_, v, T), f.push(v, I, T);
      }
    this.setIndex(f), this.setAttribute("position", new we(g, 3)), this.setAttribute("normal", new we(b, 3)), this.setAttribute("uv", new we(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Wi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var vm = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, ym = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Mm = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Sm = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Am = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, wm = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Tm = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Em = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Rm = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Cm = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Pm = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Im = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Lm = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Dm = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Um = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Nm = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Fm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Om = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Bm = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, km = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, zm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Gm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Hm = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Vm = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Wm = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Xm = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, qm = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Ym = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, jm = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Km = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Jm = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Zm = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Qm = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, $m = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, eg = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, tg = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, ng = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, ig = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, sg = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, rg = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, ag = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, og = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, cg = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, lg = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, hg = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, ug = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, dg = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, fg = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, pg = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, mg = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, gg = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, bg = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, _g = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, xg = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, vg = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, yg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Mg = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Sg = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Ag = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, wg = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Tg = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Eg = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Rg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Cg = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Pg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Ig = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Lg = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Dg = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Ug = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ng = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Fg = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Og = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Bg = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, kg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, zg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Gg = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Hg = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Vg = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Wg = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Xg = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, qg = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Yg = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, jg = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Kg = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Jg = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Zg = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Qg = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, $g = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, eb = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, tb = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, nb = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, ib = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, sb = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, rb = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, ab = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, ob = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, cb = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, lb = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, hb = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, ub = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, db = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, fb = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, pb = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, mb = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, gb = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, bb = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, _b = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const xb = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, vb = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, yb = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Mb = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Sb = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ab = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, wb = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Tb = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Eb = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Rb = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Cb = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Pb = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ib = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Lb = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Db = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Ub = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Nb = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Fb = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ob = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Bb = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, kb = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, zb = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Gb = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Hb = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vb = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Wb = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Xb = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, qb = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Yb = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, jb = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Kb = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Jb = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Zb = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Qb = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, We = {
  alphahash_fragment: vm,
  alphahash_pars_fragment: ym,
  alphamap_fragment: Mm,
  alphamap_pars_fragment: Sm,
  alphatest_fragment: Am,
  alphatest_pars_fragment: wm,
  aomap_fragment: Tm,
  aomap_pars_fragment: Em,
  batching_pars_vertex: Rm,
  batching_vertex: Cm,
  begin_vertex: Pm,
  beginnormal_vertex: Im,
  bsdfs: Lm,
  iridescence_fragment: Dm,
  bumpmap_pars_fragment: Um,
  clipping_planes_fragment: Nm,
  clipping_planes_pars_fragment: Fm,
  clipping_planes_pars_vertex: Om,
  clipping_planes_vertex: Bm,
  color_fragment: km,
  color_pars_fragment: zm,
  color_pars_vertex: Gm,
  color_vertex: Hm,
  common: Vm,
  cube_uv_reflection_fragment: Wm,
  defaultnormal_vertex: Xm,
  displacementmap_pars_vertex: qm,
  displacementmap_vertex: Ym,
  emissivemap_fragment: jm,
  emissivemap_pars_fragment: Km,
  colorspace_fragment: Jm,
  colorspace_pars_fragment: Zm,
  envmap_fragment: Qm,
  envmap_common_pars_fragment: $m,
  envmap_pars_fragment: eg,
  envmap_pars_vertex: tg,
  envmap_physical_pars_fragment: dg,
  envmap_vertex: ng,
  fog_vertex: ig,
  fog_pars_vertex: sg,
  fog_fragment: rg,
  fog_pars_fragment: ag,
  gradientmap_pars_fragment: og,
  lightmap_pars_fragment: cg,
  lights_lambert_fragment: lg,
  lights_lambert_pars_fragment: hg,
  lights_pars_begin: ug,
  lights_toon_fragment: fg,
  lights_toon_pars_fragment: pg,
  lights_phong_fragment: mg,
  lights_phong_pars_fragment: gg,
  lights_physical_fragment: bg,
  lights_physical_pars_fragment: _g,
  lights_fragment_begin: xg,
  lights_fragment_maps: vg,
  lights_fragment_end: yg,
  logdepthbuf_fragment: Mg,
  logdepthbuf_pars_fragment: Sg,
  logdepthbuf_pars_vertex: Ag,
  logdepthbuf_vertex: wg,
  map_fragment: Tg,
  map_pars_fragment: Eg,
  map_particle_fragment: Rg,
  map_particle_pars_fragment: Cg,
  metalnessmap_fragment: Pg,
  metalnessmap_pars_fragment: Ig,
  morphinstance_vertex: Lg,
  morphcolor_vertex: Dg,
  morphnormal_vertex: Ug,
  morphtarget_pars_vertex: Ng,
  morphtarget_vertex: Fg,
  normal_fragment_begin: Og,
  normal_fragment_maps: Bg,
  normal_pars_fragment: kg,
  normal_pars_vertex: zg,
  normal_vertex: Gg,
  normalmap_pars_fragment: Hg,
  clearcoat_normal_fragment_begin: Vg,
  clearcoat_normal_fragment_maps: Wg,
  clearcoat_pars_fragment: Xg,
  iridescence_pars_fragment: qg,
  opaque_fragment: Yg,
  packing: jg,
  premultiplied_alpha_fragment: Kg,
  project_vertex: Jg,
  dithering_fragment: Zg,
  dithering_pars_fragment: Qg,
  roughnessmap_fragment: $g,
  roughnessmap_pars_fragment: eb,
  shadowmap_pars_fragment: tb,
  shadowmap_pars_vertex: nb,
  shadowmap_vertex: ib,
  shadowmask_pars_fragment: sb,
  skinbase_vertex: rb,
  skinning_pars_vertex: ab,
  skinning_vertex: ob,
  skinnormal_vertex: cb,
  specularmap_fragment: lb,
  specularmap_pars_fragment: hb,
  tonemapping_fragment: ub,
  tonemapping_pars_fragment: db,
  transmission_fragment: fb,
  transmission_pars_fragment: pb,
  uv_pars_fragment: mb,
  uv_pars_vertex: gb,
  uv_vertex: bb,
  worldpos_vertex: _b,
  background_vert: xb,
  background_frag: vb,
  backgroundCube_vert: yb,
  backgroundCube_frag: Mb,
  cube_vert: Sb,
  cube_frag: Ab,
  depth_vert: wb,
  depth_frag: Tb,
  distanceRGBA_vert: Eb,
  distanceRGBA_frag: Rb,
  equirect_vert: Cb,
  equirect_frag: Pb,
  linedashed_vert: Ib,
  linedashed_frag: Lb,
  meshbasic_vert: Db,
  meshbasic_frag: Ub,
  meshlambert_vert: Nb,
  meshlambert_frag: Fb,
  meshmatcap_vert: Ob,
  meshmatcap_frag: Bb,
  meshnormal_vert: kb,
  meshnormal_frag: zb,
  meshphong_vert: Gb,
  meshphong_frag: Hb,
  meshphysical_vert: Vb,
  meshphysical_frag: Wb,
  meshtoon_vert: Xb,
  meshtoon_frag: qb,
  points_vert: Yb,
  points_frag: jb,
  shadow_vert: Kb,
  shadow_frag: Jb,
  sprite_vert: Zb,
  sprite_frag: Qb
}, he = {
  common: {
    diffuse: { value: /* @__PURE__ */ new ue(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new He() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new He() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new He() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new He() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new He() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new He() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new He() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new He() },
    normalScale: { value: /* @__PURE__ */ new Z(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new He() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new He() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new He() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new He() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new ue(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new ue(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new He() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new He() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new ue(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Z(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new He() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new He() },
    alphaTest: { value: 0 }
  }
}, un = {
  basic: {
    uniforms: /* @__PURE__ */ kt([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.fog
    ]),
    vertexShader: We.meshbasic_vert,
    fragmentShader: We.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ kt([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new ue(0) }
      }
    ]),
    vertexShader: We.meshlambert_vert,
    fragmentShader: We.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ kt([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new ue(0) },
        specular: { value: /* @__PURE__ */ new ue(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: We.meshphong_vert,
    fragmentShader: We.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ kt([
      he.common,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.roughnessmap,
      he.metalnessmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new ue(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: We.meshphysical_vert,
    fragmentShader: We.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ kt([
      he.common,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.gradientmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new ue(0) }
      }
    ]),
    vertexShader: We.meshtoon_vert,
    fragmentShader: We.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ kt([
      he.common,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: We.meshmatcap_vert,
    fragmentShader: We.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ kt([
      he.points,
      he.fog
    ]),
    vertexShader: We.points_vert,
    fragmentShader: We.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ kt([
      he.common,
      he.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: We.linedashed_vert,
    fragmentShader: We.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ kt([
      he.common,
      he.displacementmap
    ]),
    vertexShader: We.depth_vert,
    fragmentShader: We.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ kt([
      he.common,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: We.meshnormal_vert,
    fragmentShader: We.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ kt([
      he.sprite,
      he.fog
    ]),
    vertexShader: We.sprite_vert,
    fragmentShader: We.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new He() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: We.background_vert,
    fragmentShader: We.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new He() }
    },
    vertexShader: We.backgroundCube_vert,
    fragmentShader: We.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: We.cube_vert,
    fragmentShader: We.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: We.equirect_vert,
    fragmentShader: We.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ kt([
      he.common,
      he.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new P() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: We.distanceRGBA_vert,
    fragmentShader: We.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ kt([
      he.lights,
      he.fog,
      {
        color: { value: /* @__PURE__ */ new ue(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: We.shadow_vert,
    fragmentShader: We.shadow_frag
  }
};
un.physical = {
  uniforms: /* @__PURE__ */ kt([
    un.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new He() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new He() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Z(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new He() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new He() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new He() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new ue(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new He() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new He() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new He() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Z() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new He() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new ue(0) },
      specularColor: { value: /* @__PURE__ */ new ue(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new He() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new He() },
      anisotropyVector: { value: /* @__PURE__ */ new Z() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new He() }
    }
  ]),
  vertexShader: We.meshphysical_vert,
  fragmentShader: We.meshphysical_frag
};
const Jr = { r: 0, b: 0, g: 0 }, mi = /* @__PURE__ */ new $t(), $b = /* @__PURE__ */ new Ie();
function e_(r, e, t, n, i, s, a) {
  const o = new ue(0);
  let c = s === !0 ? 0 : 1, l, h, u = null, d = 0, f = null;
  function g(x) {
    let _ = x.isScene === !0 ? x.background : null;
    return _ && _.isTexture && (_ = (x.backgroundBlurriness > 0 ? t : e).get(_)), _;
  }
  function b(x) {
    let _ = !1;
    const v = g(x);
    v === null ? p(o, c) : v && v.isColor && (p(v, 1), _ = !0);
    const I = r.xr.getEnvironmentBlendMode();
    I === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : I === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (r.autoClear || _) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil));
  }
  function m(x, _) {
    const v = g(_);
    v && (v.isCubeTexture || v.mapping === Cs) ? (h === void 0 && (h = new qe(
      new oi(1, 1, 1),
      new pn({
        name: "BackgroundCubeMaterial",
        uniforms: Ts(un.backgroundCube.uniforms),
        vertexShader: un.backgroundCube.vertexShader,
        fragmentShader: un.backgroundCube.fragmentShader,
        side: Ut,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(I, T, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), mi.copy(_.backgroundRotation), mi.x *= -1, mi.y *= -1, mi.z *= -1, v.isCubeTexture && v.isRenderTargetTexture === !1 && (mi.y *= -1, mi.z *= -1), h.material.uniforms.envMap.value = v, h.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4($b.makeRotationFromEuler(mi)), h.material.toneMapped = Qe.getTransfer(v.colorSpace) !== ot, (u !== v || d !== v.version || f !== r.toneMapping) && (h.material.needsUpdate = !0, u = v, d = v.version, f = r.toneMapping), h.layers.enableAll(), x.unshift(h, h.geometry, h.material, 0, 0, null)) : v && v.isTexture && (l === void 0 && (l = new qe(
      new Wi(2, 2),
      new pn({
        name: "BackgroundMaterial",
        uniforms: Ts(un.background.uniforms),
        vertexShader: un.background.vertexShader,
        fragmentShader: un.background.fragmentShader,
        side: An,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = v, l.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, l.material.toneMapped = Qe.getTransfer(v.colorSpace) !== ot, v.matrixAutoUpdate === !0 && v.updateMatrix(), l.material.uniforms.uvTransform.value.copy(v.matrix), (u !== v || d !== v.version || f !== r.toneMapping) && (l.material.needsUpdate = !0, u = v, d = v.version, f = r.toneMapping), l.layers.enableAll(), x.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function p(x, _) {
    x.getRGB(Jr, Od(r)), n.buffers.color.setClear(Jr.r, Jr.g, Jr.b, _, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(x, _ = 1) {
      o.set(x), c = _, p(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(x) {
      c = x, p(o, c);
    },
    render: b,
    addToRenderList: m
  };
}
function t_(r, e) {
  const t = r.getParameter(r.MAX_VERTEX_ATTRIBS), n = {}, i = d(null);
  let s = i, a = !1;
  function o(y, S, F, O, z) {
    let V = !1;
    const k = u(O, F, S);
    s !== k && (s = k, l(s.object)), V = f(y, O, F, z), V && g(y, O, F, z), z !== null && e.update(z, r.ELEMENT_ARRAY_BUFFER), (V || a) && (a = !1, v(y, S, F, O), z !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.get(z).buffer));
  }
  function c() {
    return r.createVertexArray();
  }
  function l(y) {
    return r.bindVertexArray(y);
  }
  function h(y) {
    return r.deleteVertexArray(y);
  }
  function u(y, S, F) {
    const O = F.wireframe === !0;
    let z = n[y.id];
    z === void 0 && (z = {}, n[y.id] = z);
    let V = z[S.id];
    V === void 0 && (V = {}, z[S.id] = V);
    let k = V[O];
    return k === void 0 && (k = d(c()), V[O] = k), k;
  }
  function d(y) {
    const S = [], F = [], O = [];
    for (let z = 0; z < t; z++)
      S[z] = 0, F[z] = 0, O[z] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: S,
      enabledAttributes: F,
      attributeDivisors: O,
      object: y,
      attributes: {},
      index: null
    };
  }
  function f(y, S, F, O) {
    const z = s.attributes, V = S.attributes;
    let k = 0;
    const Y = F.getAttributes();
    for (const W in Y)
      if (Y[W].location >= 0) {
        const oe = z[W];
        let pe = V[W];
        if (pe === void 0 && (W === "instanceMatrix" && y.instanceMatrix && (pe = y.instanceMatrix), W === "instanceColor" && y.instanceColor && (pe = y.instanceColor)), oe === void 0 || oe.attribute !== pe || pe && oe.data !== pe.data) return !0;
        k++;
      }
    return s.attributesNum !== k || s.index !== O;
  }
  function g(y, S, F, O) {
    const z = {}, V = S.attributes;
    let k = 0;
    const Y = F.getAttributes();
    for (const W in Y)
      if (Y[W].location >= 0) {
        let oe = V[W];
        oe === void 0 && (W === "instanceMatrix" && y.instanceMatrix && (oe = y.instanceMatrix), W === "instanceColor" && y.instanceColor && (oe = y.instanceColor));
        const pe = {};
        pe.attribute = oe, oe && oe.data && (pe.data = oe.data), z[W] = pe, k++;
      }
    s.attributes = z, s.attributesNum = k, s.index = O;
  }
  function b() {
    const y = s.newAttributes;
    for (let S = 0, F = y.length; S < F; S++)
      y[S] = 0;
  }
  function m(y) {
    p(y, 0);
  }
  function p(y, S) {
    const F = s.newAttributes, O = s.enabledAttributes, z = s.attributeDivisors;
    F[y] = 1, O[y] === 0 && (r.enableVertexAttribArray(y), O[y] = 1), z[y] !== S && (r.vertexAttribDivisor(y, S), z[y] = S);
  }
  function x() {
    const y = s.newAttributes, S = s.enabledAttributes;
    for (let F = 0, O = S.length; F < O; F++)
      S[F] !== y[F] && (r.disableVertexAttribArray(F), S[F] = 0);
  }
  function _(y, S, F, O, z, V, k) {
    k === !0 ? r.vertexAttribIPointer(y, S, F, z, V) : r.vertexAttribPointer(y, S, F, O, z, V);
  }
  function v(y, S, F, O) {
    b();
    const z = O.attributes, V = F.getAttributes(), k = S.defaultAttributeValues;
    for (const Y in V) {
      const W = V[Y];
      if (W.location >= 0) {
        let le = z[Y];
        if (le === void 0 && (Y === "instanceMatrix" && y.instanceMatrix && (le = y.instanceMatrix), Y === "instanceColor" && y.instanceColor && (le = y.instanceColor)), le !== void 0) {
          const oe = le.normalized, pe = le.itemSize, De = e.get(le);
          if (De === void 0) continue;
          const Oe = De.buffer, j = De.type, ie = De.bytesPerElement, Me = j === r.INT || j === r.UNSIGNED_INT || le.gpuType === bo;
          if (le.isInterleavedBufferAttribute) {
            const de = le.data, Ue = de.stride, Le = le.offset;
            if (de.isInstancedInterleavedBuffer) {
              for (let ze = 0; ze < W.locationSize; ze++)
                p(W.location + ze, de.meshPerAttribute);
              y.isInstancedMesh !== !0 && O._maxInstanceCount === void 0 && (O._maxInstanceCount = de.meshPerAttribute * de.count);
            } else
              for (let ze = 0; ze < W.locationSize; ze++)
                m(W.location + ze);
            r.bindBuffer(r.ARRAY_BUFFER, Oe);
            for (let ze = 0; ze < W.locationSize; ze++)
              _(
                W.location + ze,
                pe / W.locationSize,
                j,
                oe,
                Ue * ie,
                (Le + pe / W.locationSize * ze) * ie,
                Me
              );
          } else {
            if (le.isInstancedBufferAttribute) {
              for (let de = 0; de < W.locationSize; de++)
                p(W.location + de, le.meshPerAttribute);
              y.isInstancedMesh !== !0 && O._maxInstanceCount === void 0 && (O._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let de = 0; de < W.locationSize; de++)
                m(W.location + de);
            r.bindBuffer(r.ARRAY_BUFFER, Oe);
            for (let de = 0; de < W.locationSize; de++)
              _(
                W.location + de,
                pe / W.locationSize,
                j,
                oe,
                pe * ie,
                pe / W.locationSize * de * ie,
                Me
              );
          }
        } else if (k !== void 0) {
          const oe = k[Y];
          if (oe !== void 0)
            switch (oe.length) {
              case 2:
                r.vertexAttrib2fv(W.location, oe);
                break;
              case 3:
                r.vertexAttrib3fv(W.location, oe);
                break;
              case 4:
                r.vertexAttrib4fv(W.location, oe);
                break;
              default:
                r.vertexAttrib1fv(W.location, oe);
            }
        }
      }
    }
    x();
  }
  function I() {
    R();
    for (const y in n) {
      const S = n[y];
      for (const F in S) {
        const O = S[F];
        for (const z in O)
          h(O[z].object), delete O[z];
        delete S[F];
      }
      delete n[y];
    }
  }
  function T(y) {
    if (n[y.id] === void 0) return;
    const S = n[y.id];
    for (const F in S) {
      const O = S[F];
      for (const z in O)
        h(O[z].object), delete O[z];
      delete S[F];
    }
    delete n[y.id];
  }
  function w(y) {
    for (const S in n) {
      const F = n[S];
      if (F[y.id] === void 0) continue;
      const O = F[y.id];
      for (const z in O)
        h(O[z].object), delete O[z];
      delete F[y.id];
    }
  }
  function R() {
    L(), a = !0, s !== i && (s = i, l(s.object));
  }
  function L() {
    i.geometry = null, i.program = null, i.wireframe = !1;
  }
  return {
    setup: o,
    reset: R,
    resetDefaultState: L,
    dispose: I,
    releaseStatesOfGeometry: T,
    releaseStatesOfProgram: w,
    initAttributes: b,
    enableAttribute: m,
    disableUnusedAttributes: x
  };
}
function n_(r, e, t) {
  let n;
  function i(l) {
    n = l;
  }
  function s(l, h) {
    r.drawArrays(n, l, h), t.update(h, n, 1);
  }
  function a(l, h, u) {
    u !== 0 && (r.drawArraysInstanced(n, l, h, u), t.update(h, n, u));
  }
  function o(l, h, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, h, 0, u);
    let f = 0;
    for (let g = 0; g < u; g++)
      f += h[g];
    t.update(f, n, 1);
  }
  function c(l, h, u, d) {
    if (u === 0) return;
    const f = e.get("WEBGL_multi_draw");
    if (f === null)
      for (let g = 0; g < l.length; g++)
        a(l[g], h[g], d[g]);
    else {
      f.multiDrawArraysInstancedWEBGL(n, l, 0, h, 0, d, 0, u);
      let g = 0;
      for (let b = 0; b < u; b++)
        g += h[b];
      for (let b = 0; b < d.length; b++)
        t.update(g, n, d[b]);
    }
  }
  this.setMode = i, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function i_(r, e, t, n) {
  let i;
  function s() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      i = r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      i = 0;
    return i;
  }
  function a(w) {
    return !(w !== Gt && n.convert(w) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const R = w === vn && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== wn && n.convert(w) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    w !== Rt && !R);
  }
  function c(w) {
    if (w === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const h = c(l);
  h !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", h, "instead."), l = h);
  const u = t.logarithmicDepthBuffer === !0, d = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control");
  if (d === !0) {
    const w = e.get("EXT_clip_control");
    w.clipControlEXT(w.LOWER_LEFT_EXT, w.ZERO_TO_ONE_EXT);
  }
  const f = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), g = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), b = r.getParameter(r.MAX_TEXTURE_SIZE), m = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), p = r.getParameter(r.MAX_VERTEX_ATTRIBS), x = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), _ = r.getParameter(r.MAX_VARYING_VECTORS), v = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), I = g > 0, T = r.getParameter(r.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: u,
    reverseDepthBuffer: d,
    maxTextures: f,
    maxVertexTextures: g,
    maxTextureSize: b,
    maxCubemapSize: m,
    maxAttributes: p,
    maxVertexUniforms: x,
    maxVaryings: _,
    maxFragmentUniforms: v,
    vertexTextures: I,
    maxSamples: T
  };
}
function s_(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const a = new $n(), o = new He(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const f = u.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = d, n = u.length, f;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, f) {
    const g = u.clippingPlanes, b = u.clipIntersection, m = u.clipShadows, p = r.get(u);
    if (!i || g === null || g.length === 0 || s && !m)
      s ? h(null) : l();
    else {
      const x = s ? 0 : n, _ = x * 4;
      let v = p.clippingState || null;
      c.value = v, v = h(g, d, _, f);
      for (let I = 0; I !== _; ++I)
        v[I] = t[I];
      p.clippingState = v, this.numIntersection = b ? this.numPlanes : 0, this.numPlanes += x;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, f, g) {
    const b = u !== null ? u.length : 0;
    let m = null;
    if (b !== 0) {
      if (m = c.value, g !== !0 || m === null) {
        const p = f + b * 4, x = d.matrixWorldInverse;
        o.getNormalMatrix(x), (m === null || m.length < p) && (m = new Float32Array(p));
        for (let _ = 0, v = f; _ !== b; ++_, v += 4)
          a.copy(u[_]).applyMatrix4(x, o), a.normal.toArray(m, v), m[v + 3] = a.constant;
      }
      c.value = m, c.needsUpdate = !0;
    }
    return e.numPlanes = b, e.numIntersection = 0, m;
  }
}
function r_(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === sr ? a.mapping = zn : o === rr && (a.mapping = ni), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === sr || o === rr)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new zd(c.height);
            return l.fromEquirectangularTexture(r, a), e.set(a, l), a.addEventListener("dispose", i), t(l.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class Ar extends Eo {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const gs = 4, Ah = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Ti = 20, vc = /* @__PURE__ */ new Ar(), wh = /* @__PURE__ */ new ue();
let yc = null, Mc = 0, Sc = 0, Ac = !1;
const wi = (1 + Math.sqrt(5)) / 2, os = 1 / wi, Th = [
  /* @__PURE__ */ new P(-wi, os, 0),
  /* @__PURE__ */ new P(wi, os, 0),
  /* @__PURE__ */ new P(-os, 0, wi),
  /* @__PURE__ */ new P(os, 0, wi),
  /* @__PURE__ */ new P(0, wi, -os),
  /* @__PURE__ */ new P(0, wi, os),
  /* @__PURE__ */ new P(-1, 1, -1),
  /* @__PURE__ */ new P(1, 1, -1),
  /* @__PURE__ */ new P(-1, 1, 1),
  /* @__PURE__ */ new P(1, 1, 1)
];
class ho {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    yc = this._renderer.getRenderTarget(), Mc = this._renderer.getActiveCubeFace(), Sc = this._renderer.getActiveMipmapLevel(), Ac = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ch(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Rh(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(yc, Mc, Sc), this._renderer.xr.enabled = Ac, e.scissorTest = !1, Zr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === zn || e.mapping === ni ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), yc = this._renderer.getRenderTarget(), Mc = this._renderer.getActiveCubeFace(), Sc = this._renderer.getActiveMipmapLevel(), Ac = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: lt,
      minFilter: lt,
      generateMipmaps: !1,
      type: vn,
      format: Gt,
      colorSpace: St,
      depthBuffer: !1
    }, i = Eh(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Eh(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = a_(s)), this._blurMaterial = o_(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new qe(this._lodPlanes[0], e);
    this._renderer.compile(t, vc);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new vt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(wh), h.toneMapping = kn, h.autoClear = !1;
    const f = new Ct({
      name: "PMREM.Background",
      side: Ut,
      depthWrite: !1,
      depthTest: !1
    }), g = new qe(new oi(), f);
    let b = !1;
    const m = e.background;
    m ? m.isColor && (f.color.copy(m), e.background = null, b = !0) : (f.color.copy(wh), b = !0);
    for (let p = 0; p < 6; p++) {
      const x = p % 3;
      x === 0 ? (o.up.set(0, c[p], 0), o.lookAt(l[p], 0, 0)) : x === 1 ? (o.up.set(0, 0, c[p]), o.lookAt(0, l[p], 0)) : (o.up.set(0, c[p], 0), o.lookAt(0, 0, l[p]));
      const _ = this._cubeSize;
      Zr(i, x * _, p > 2 ? _ : 0, _, _), h.setRenderTarget(i), b && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === zn || e.mapping === ni;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ch()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Rh());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new qe(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    Zr(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, vc);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let s = 1; s < i; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = Th[(i - s - 1) % Th.length];
      this._blur(e, s - 1, s, a, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new qe(this._lodPlanes[i], l), d = l.uniforms, f = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * Ti - 1), b = s / g, m = isFinite(s) ? 1 + Math.floor(h * b) : Ti;
    m > Ti && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);
    const p = [];
    let x = 0;
    for (let w = 0; w < Ti; ++w) {
      const R = w / b, L = Math.exp(-R * R / 2);
      p.push(L), w === 0 ? x += L : w < m && (x += 2 * L);
    }
    for (let w = 0; w < p.length; w++)
      p[w] = p[w] / x;
    d.envMap.value = e.texture, d.samples.value = m, d.weights.value = p, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: _ } = this;
    d.dTheta.value = g, d.mipInt.value = _ - n;
    const v = this._sizeLods[i], I = 3 * v * (i > _ - gs ? i - _ + gs : 0), T = 4 * (this._cubeSize - v);
    Zr(t, I, T, 3 * v, 2 * v), c.setRenderTarget(t), c.render(u, vc);
  }
}
function a_(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - gs + 1 + Ah.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let c = 1 / o;
    a > r - gs ? c = Ah[a - r + gs - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, g = 6, b = 3, m = 2, p = 1, x = new Float32Array(b * g * f), _ = new Float32Array(m * g * f), v = new Float32Array(p * g * f);
    for (let T = 0; T < f; T++) {
      const w = T % 3 * 2 / 3 - 1, R = T > 2 ? 0 : -1, L = [
        w,
        R,
        0,
        w + 2 / 3,
        R,
        0,
        w + 2 / 3,
        R + 1,
        0,
        w,
        R,
        0,
        w + 2 / 3,
        R + 1,
        0,
        w,
        R + 1,
        0
      ];
      x.set(L, b * g * T), _.set(d, m * g * T);
      const y = [T, T, T, T, T, T];
      v.set(y, p * g * T);
    }
    const I = new Xe();
    I.setAttribute("position", new nt(x, b)), I.setAttribute("uv", new nt(_, m)), I.setAttribute("faceIndex", new nt(v, p)), e.push(I), i > gs && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Eh(r, e, t) {
  const n = new fn(r, e, t);
  return n.texture.mapping = Cs, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Zr(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function o_(r, e, t) {
  const n = new Float32Array(Ti), i = new P(0, 1, 0);
  return new pn({
    name: "SphericalGaussianBlur",
    defines: {
      n: Ti,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: Tl(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: Bn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Rh() {
  return new pn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Tl(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: Bn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ch() {
  return new pn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Tl(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: Bn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Tl() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function c_(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === sr || c === rr, h = c === zn || c === ni;
      if (l || h) {
        let u = e.get(o);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d)
          return t === null && (t = new ho(r)), u = l ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), u.texture;
        if (u !== void 0)
          return u.texture;
        {
          const f = o.image;
          return l && f && f.height > 0 || h && f && i(f) ? (t === null && (t = new ho(r)), u = l ? t.fromEquirectangular(o) : t.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), o.addEventListener("dispose", s), u.texture) : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      o[h] !== void 0 && c++;
    return c === l;
  }
  function s(o) {
    const c = o.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function l_(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const i = t(n);
      return i === null && wa("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function h_(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    for (const g in d.morphAttributes) {
      const b = d.morphAttributes[g];
      for (let m = 0, p = b.length; m < p; m++)
        e.remove(b[m]);
    }
    d.removeEventListener("dispose", a), delete i[d.id];
    const f = s.get(d);
    f && (e.remove(f), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", a), i[d.id] = !0, t.memory.geometries++), d;
  }
  function c(u) {
    const d = u.attributes;
    for (const g in d)
      e.update(d[g], r.ARRAY_BUFFER);
    const f = u.morphAttributes;
    for (const g in f) {
      const b = f[g];
      for (let m = 0, p = b.length; m < p; m++)
        e.update(b[m], r.ARRAY_BUFFER);
    }
  }
  function l(u) {
    const d = [], f = u.index, g = u.attributes.position;
    let b = 0;
    if (f !== null) {
      const x = f.array;
      b = f.version;
      for (let _ = 0, v = x.length; _ < v; _ += 3) {
        const I = x[_ + 0], T = x[_ + 1], w = x[_ + 2];
        d.push(I, T, T, w, w, I);
      }
    } else if (g !== void 0) {
      const x = g.array;
      b = g.version;
      for (let _ = 0, v = x.length / 3 - 1; _ < v; _ += 3) {
        const I = _ + 0, T = _ + 1, w = _ + 2;
        d.push(I, T, T, w, w, I);
      }
    } else
      return;
    const m = new (Ld(d) ? wl : Al)(d, 1);
    m.version = b;
    const p = s.get(u);
    p && e.remove(p), s.set(u, m);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const f = u.index;
      f !== null && d.version < f.version && l(u);
    } else
      l(u);
    return s.get(u);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: h
  };
}
function u_(r, e, t) {
  let n;
  function i(d) {
    n = d;
  }
  let s, a;
  function o(d) {
    s = d.type, a = d.bytesPerElement;
  }
  function c(d, f) {
    r.drawElements(n, f, s, d * a), t.update(f, n, 1);
  }
  function l(d, f, g) {
    g !== 0 && (r.drawElementsInstanced(n, f, s, d * a, g), t.update(f, n, g));
  }
  function h(d, f, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, s, d, 0, g);
    let m = 0;
    for (let p = 0; p < g; p++)
      m += f[p];
    t.update(m, n, 1);
  }
  function u(d, f, g, b) {
    if (g === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let p = 0; p < d.length; p++)
        l(d[p] / a, f[p], b[p]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, f, 0, s, d, 0, b, 0, g);
      let p = 0;
      for (let x = 0; x < g; x++)
        p += f[x];
      for (let x = 0; x < b.length; x++)
        t.update(p, n, b[x]);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function d_(r) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case r.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case r.LINES:
        t.lines += o * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += o * s;
        break;
      case r.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function f_(r, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), i = new et();
  function s(a, o, c) {
    const l = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = n.get(o);
    if (d === void 0 || d.count !== u) {
      let y = function() {
        R.dispose(), n.delete(o), o.removeEventListener("dispose", y);
      };
      var f = y;
      d !== void 0 && d.texture.dispose();
      const g = o.morphAttributes.position !== void 0, b = o.morphAttributes.normal !== void 0, m = o.morphAttributes.color !== void 0, p = o.morphAttributes.position || [], x = o.morphAttributes.normal || [], _ = o.morphAttributes.color || [];
      let v = 0;
      g === !0 && (v = 1), b === !0 && (v = 2), m === !0 && (v = 3);
      let I = o.attributes.position.count * v, T = 1;
      I > e.maxTextureSize && (T = Math.ceil(I / e.maxTextureSize), I = e.maxTextureSize);
      const w = new Float32Array(I * T * 4 * u), R = new wo(w, I, T, u);
      R.type = Rt, R.needsUpdate = !0;
      const L = v * 4;
      for (let S = 0; S < u; S++) {
        const F = p[S], O = x[S], z = _[S], V = I * T * 4 * S;
        for (let k = 0; k < F.count; k++) {
          const Y = k * L;
          g === !0 && (i.fromBufferAttribute(F, k), w[V + Y + 0] = i.x, w[V + Y + 1] = i.y, w[V + Y + 2] = i.z, w[V + Y + 3] = 0), b === !0 && (i.fromBufferAttribute(O, k), w[V + Y + 4] = i.x, w[V + Y + 5] = i.y, w[V + Y + 6] = i.z, w[V + Y + 7] = 0), m === !0 && (i.fromBufferAttribute(z, k), w[V + Y + 8] = i.x, w[V + Y + 9] = i.y, w[V + Y + 10] = i.z, w[V + Y + 11] = z.itemSize === 4 ? i.w : 1);
        }
      }
      d = {
        count: u,
        texture: R,
        size: new Z(I, T)
      }, n.set(o, d), o.addEventListener("dispose", y);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(r, "morphTexture", a.morphTexture, t);
    else {
      let g = 0;
      for (let m = 0; m < l.length; m++)
        g += l[m];
      const b = o.morphTargetsRelative ? 1 : 1 - g;
      c.getUniforms().setValue(r, "morphTargetBaseInfluence", b), c.getUniforms().setValue(r, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(r, "morphTargetsTexture", d.texture, t), c.getUniforms().setValue(r, "morphTargetsTextureSize", d.size);
  }
  return {
    update: s
  };
}
function p_(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, h = c.geometry, u = e.get(c, h);
    if (i.get(u) !== l && (e.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), i.get(c) !== l && (t.update(c.instanceMatrix, r.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, r.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) {
      const d = c.skeleton;
      i.get(d) !== l && (d.update(), i.set(d, l));
    }
    return u;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
class El extends ht {
  constructor(e, t, n, i, s, a, o, c, l, h = Di) {
    if (h !== Di && h !== Bi)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Di && (n = Gn), n === void 0 && h === Bi && (n = Oi), super(null, i, s, a, o, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : yt, this.minFilter = c !== void 0 ? c : yt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const Hd = /* @__PURE__ */ new ht(), Ph = /* @__PURE__ */ new El(1, 1), Vd = /* @__PURE__ */ new wo(), Wd = /* @__PURE__ */ new Sl(), Xd = /* @__PURE__ */ new Mr(), Ih = [], Lh = [], Dh = new Float32Array(16), Uh = new Float32Array(9), Nh = new Float32Array(4);
function Is(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = Ih[i];
  if (s === void 0 && (s = new Float32Array(i), Ih[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, r[a].toArray(s, o);
  }
  return s;
}
function At(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t]) return !1;
  return !0;
}
function wt(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t];
}
function Ro(r, e) {
  let t = Lh[e];
  t === void 0 && (t = new Int32Array(e), Lh[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function m_(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function g_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (At(t, e)) return;
    r.uniform2fv(this.addr, e), wt(t, e);
  }
}
function b_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (At(t, e)) return;
    r.uniform3fv(this.addr, e), wt(t, e);
  }
}
function __(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (At(t, e)) return;
    r.uniform4fv(this.addr, e), wt(t, e);
  }
}
function x_(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (At(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), wt(t, e);
  } else {
    if (At(t, n)) return;
    Nh.set(n), r.uniformMatrix2fv(this.addr, !1, Nh), wt(t, n);
  }
}
function v_(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (At(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), wt(t, e);
  } else {
    if (At(t, n)) return;
    Uh.set(n), r.uniformMatrix3fv(this.addr, !1, Uh), wt(t, n);
  }
}
function y_(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (At(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), wt(t, e);
  } else {
    if (At(t, n)) return;
    Dh.set(n), r.uniformMatrix4fv(this.addr, !1, Dh), wt(t, n);
  }
}
function M_(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function S_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (At(t, e)) return;
    r.uniform2iv(this.addr, e), wt(t, e);
  }
}
function A_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (At(t, e)) return;
    r.uniform3iv(this.addr, e), wt(t, e);
  }
}
function w_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (At(t, e)) return;
    r.uniform4iv(this.addr, e), wt(t, e);
  }
}
function T_(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function E_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (At(t, e)) return;
    r.uniform2uiv(this.addr, e), wt(t, e);
  }
}
function R_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (At(t, e)) return;
    r.uniform3uiv(this.addr, e), wt(t, e);
  }
}
function C_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (At(t, e)) return;
    r.uniform4uiv(this.addr, e), wt(t, e);
  }
}
function P_(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i);
  let s;
  this.type === r.SAMPLER_2D_SHADOW ? (Ph.compareFunction = yl, s = Ph) : s = Hd, t.setTexture2D(e || s, i);
}
function I_(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Wd, i);
}
function L_(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Xd, i);
}
function D_(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Vd, i);
}
function U_(r) {
  switch (r) {
    case 5126:
      return m_;
    // FLOAT
    case 35664:
      return g_;
    // _VEC2
    case 35665:
      return b_;
    // _VEC3
    case 35666:
      return __;
    // _VEC4
    case 35674:
      return x_;
    // _MAT2
    case 35675:
      return v_;
    // _MAT3
    case 35676:
      return y_;
    // _MAT4
    case 5124:
    case 35670:
      return M_;
    // INT, BOOL
    case 35667:
    case 35671:
      return S_;
    // _VEC2
    case 35668:
    case 35672:
      return A_;
    // _VEC3
    case 35669:
    case 35673:
      return w_;
    // _VEC4
    case 5125:
      return T_;
    // UINT
    case 36294:
      return E_;
    // _VEC2
    case 36295:
      return R_;
    // _VEC3
    case 36296:
      return C_;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return P_;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return I_;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return L_;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return D_;
  }
}
function N_(r, e) {
  r.uniform1fv(this.addr, e);
}
function F_(r, e) {
  const t = Is(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function O_(r, e) {
  const t = Is(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function B_(r, e) {
  const t = Is(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function k_(r, e) {
  const t = Is(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function z_(r, e) {
  const t = Is(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function G_(r, e) {
  const t = Is(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function H_(r, e) {
  r.uniform1iv(this.addr, e);
}
function V_(r, e) {
  r.uniform2iv(this.addr, e);
}
function W_(r, e) {
  r.uniform3iv(this.addr, e);
}
function X_(r, e) {
  r.uniform4iv(this.addr, e);
}
function q_(r, e) {
  r.uniform1uiv(this.addr, e);
}
function Y_(r, e) {
  r.uniform2uiv(this.addr, e);
}
function j_(r, e) {
  r.uniform3uiv(this.addr, e);
}
function K_(r, e) {
  r.uniform4uiv(this.addr, e);
}
function J_(r, e, t) {
  const n = this.cache, i = e.length, s = Ro(t, i);
  At(n, s) || (r.uniform1iv(this.addr, s), wt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || Hd, s[a]);
}
function Z_(r, e, t) {
  const n = this.cache, i = e.length, s = Ro(t, i);
  At(n, s) || (r.uniform1iv(this.addr, s), wt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || Wd, s[a]);
}
function Q_(r, e, t) {
  const n = this.cache, i = e.length, s = Ro(t, i);
  At(n, s) || (r.uniform1iv(this.addr, s), wt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || Xd, s[a]);
}
function $_(r, e, t) {
  const n = this.cache, i = e.length, s = Ro(t, i);
  At(n, s) || (r.uniform1iv(this.addr, s), wt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || Vd, s[a]);
}
function e0(r) {
  switch (r) {
    case 5126:
      return N_;
    // FLOAT
    case 35664:
      return F_;
    // _VEC2
    case 35665:
      return O_;
    // _VEC3
    case 35666:
      return B_;
    // _VEC4
    case 35674:
      return k_;
    // _MAT2
    case 35675:
      return z_;
    // _MAT3
    case 35676:
      return G_;
    // _MAT4
    case 5124:
    case 35670:
      return H_;
    // INT, BOOL
    case 35667:
    case 35671:
      return V_;
    // _VEC2
    case 35668:
    case 35672:
      return W_;
    // _VEC3
    case 35669:
    case 35673:
      return X_;
    // _VEC4
    case 5125:
      return q_;
    // UINT
    case 36294:
      return Y_;
    // _VEC2
    case 36295:
      return j_;
    // _VEC3
    case 36296:
      return K_;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return J_;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Z_;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Q_;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return $_;
  }
}
class t0 {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = U_(t.type);
  }
}
class n0 {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = e0(t.type);
  }
}
class i0 {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const wc = /(\w+)(\])?(\[|\.)?/g;
function Fh(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function s0(r, e, t) {
  const n = r.name, i = n.length;
  for (wc.lastIndex = 0; ; ) {
    const s = wc.exec(n), a = wc.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === i) {
      Fh(t, l === void 0 ? new t0(o, r, e) : new n0(o, r, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new i0(o), Fh(t, u)), t = u;
    }
  }
}
class Ta {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), a = e.getUniformLocation(t, s.name);
      s0(s, a, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Oh(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
const r0 = 37297;
let a0 = 0;
function o0(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function c0(r) {
  const e = Qe.getPrimaries(Qe.workingColorSpace), t = Qe.getPrimaries(r);
  let n;
  switch (e === t ? n = "" : e === lr && t === cr ? n = "LinearDisplayP3ToLinearSRGB" : e === cr && t === lr && (n = "LinearSRGBToLinearDisplayP3"), r) {
    case St:
    case yr:
      return [n, "LinearTransferOETF"];
    case xt:
    case Ao:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), [n, "LinearTransferOETF"];
  }
}
function Bh(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + o0(r.getShaderSource(e), a);
  } else
    return i;
}
function l0(r, e) {
  const t = c0(e);
  return `vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function h0(r, e) {
  let t;
  switch (e) {
    case ud:
      t = "Linear";
      break;
    case dd:
      t = "Reinhard";
      break;
    case fd:
      t = "Cineon";
      break;
    case ll:
      t = "ACESFilmic";
      break;
    case md:
      t = "AgX";
      break;
    case gd:
      t = "Neutral";
      break;
    case pd:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Qr = /* @__PURE__ */ new P();
function u0() {
  Qe.getLuminanceCoefficients(Qr);
  const r = Qr.x.toFixed(4), e = Qr.y.toFixed(4), t = Qr.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function d0(r) {
  return [
    r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Ks).join(`
`);
}
function f0(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function p0(r, e) {
  const t = {}, n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i), a = s.name;
    let o = 1;
    s.type === r.FLOAT_MAT2 && (o = 2), s.type === r.FLOAT_MAT3 && (o = 3), s.type === r.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: r.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function Ks(r) {
  return r !== "";
}
function kh(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function zh(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const m0 = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Qc(r) {
  return r.replace(m0, b0);
}
const g0 = /* @__PURE__ */ new Map();
function b0(r, e) {
  let t = We[e];
  if (t === void 0) {
    const n = g0.get(e);
    if (n !== void 0)
      t = We[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Qc(t);
}
const _0 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Gh(r) {
  return r.replace(_0, x0);
}
function x0(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Hh(r) {
  let e = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function v0(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === cl ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === Wu ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === xn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function y0(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case zn:
      case ni:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Cs:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function M0(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case ni:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function S0(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case xr:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case ld:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case hd:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function A0(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function w0(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = v0(t), l = y0(t), h = M0(t), u = S0(t), d = A0(t), f = d0(t), g = f0(s), b = i.createProgram();
  let m, p, x = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(Ks).join(`
`), m.length > 0 && (m += `
`), p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(Ks).join(`
`), p.length > 0 && (p += `
`)) : (m = [
    Hh(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Ks).join(`
`), p = [
    Hh(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== kn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== kn ? We.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== kn ? h0("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    We.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    l0("linearToOutputTexel", t.outputColorSpace),
    u0(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Ks).join(`
`)), a = Qc(a), a = kh(a, t), a = zh(a, t), o = Qc(o), o = kh(o, t), o = zh(o, t), a = Gh(a), o = Gh(o), t.isRawShaderMaterial !== !0 && (x = `#version 300 es
`, m = [
    f,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, p = [
    "#define varying in",
    t.glslVersion === Zc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Zc ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + p);
  const _ = x + m + a, v = x + p + o, I = Oh(i, i.VERTEX_SHADER, _), T = Oh(i, i.FRAGMENT_SHADER, v);
  i.attachShader(b, I), i.attachShader(b, T), t.index0AttributeName !== void 0 ? i.bindAttribLocation(b, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(b, 0, "position"), i.linkProgram(b);
  function w(S) {
    if (r.debug.checkShaderErrors) {
      const F = i.getProgramInfoLog(b).trim(), O = i.getShaderInfoLog(I).trim(), z = i.getShaderInfoLog(T).trim();
      let V = !0, k = !0;
      if (i.getProgramParameter(b, i.LINK_STATUS) === !1)
        if (V = !1, typeof r.debug.onShaderError == "function")
          r.debug.onShaderError(i, b, I, T);
        else {
          const Y = Bh(i, I, "vertex"), W = Bh(i, T, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(b, i.VALIDATE_STATUS) + `

Material Name: ` + S.name + `
Material Type: ` + S.type + `

Program Info Log: ` + F + `
` + Y + `
` + W
          );
        }
      else F !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", F) : (O === "" || z === "") && (k = !1);
      k && (S.diagnostics = {
        runnable: V,
        programLog: F,
        vertexShader: {
          log: O,
          prefix: m
        },
        fragmentShader: {
          log: z,
          prefix: p
        }
      });
    }
    i.deleteShader(I), i.deleteShader(T), R = new Ta(i, b), L = p0(i, b);
  }
  let R;
  this.getUniforms = function() {
    return R === void 0 && w(this), R;
  };
  let L;
  this.getAttributes = function() {
    return L === void 0 && w(this), L;
  };
  let y = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return y === !1 && (y = i.getProgramParameter(b, r0)), y;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(b), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = a0++, this.cacheKey = e, this.usedTimes = 1, this.program = b, this.vertexShader = I, this.fragmentShader = T, this;
}
let T0 = 0;
class E0 {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new R0(e), t.set(e, n)), n;
  }
}
class R0 {
  constructor(e) {
    this.id = T0++, this.code = e, this.usedTimes = 0;
  }
}
function C0(r, e, t, n, i, s, a) {
  const o = new To(), c = new E0(), l = /* @__PURE__ */ new Set(), h = [], u = i.logarithmicDepthBuffer, d = i.reverseDepthBuffer, f = i.vertexTextures;
  let g = i.precision;
  const b = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function m(y) {
    return l.add(y), y === 0 ? "uv" : `uv${y}`;
  }
  function p(y, S, F, O, z) {
    const V = O.fog, k = z.geometry, Y = y.isMeshStandardMaterial ? O.environment : null, W = (y.isMeshStandardMaterial ? t : e).get(y.envMap || Y), le = W && W.mapping === Cs ? W.image.height : null, oe = b[y.type];
    y.precision !== null && (g = i.getMaxPrecision(y.precision), g !== y.precision && console.warn("THREE.WebGLProgram.getParameters:", y.precision, "not supported, using", g, "instead."));
    const pe = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, De = pe !== void 0 ? pe.length : 0;
    let Oe = 0;
    k.morphAttributes.position !== void 0 && (Oe = 1), k.morphAttributes.normal !== void 0 && (Oe = 2), k.morphAttributes.color !== void 0 && (Oe = 3);
    let j, ie, Me, de;
    if (oe) {
      const Wt = un[oe];
      j = Wt.vertexShader, ie = Wt.fragmentShader;
    } else
      j = y.vertexShader, ie = y.fragmentShader, c.update(y), Me = c.getVertexShaderID(y), de = c.getFragmentShaderID(y);
    const Ue = r.getRenderTarget(), Le = z.isInstancedMesh === !0, ze = z.isBatchedMesh === !0, se = !!y.map, X = !!y.matcap, E = !!W, ne = !!y.aoMap, te = !!y.lightMap, ee = !!y.bumpMap, re = !!y.normalMap, Re = !!y.displacementMap, me = !!y.emissiveMap, C = !!y.metalnessMap, M = !!y.roughnessMap, B = y.anisotropy > 0, K = y.clearcoat > 0, Q = y.dispersion > 0, J = y.iridescence > 0, Te = y.sheen > 0, fe = y.transmission > 0, ve = B && !!y.anisotropyMap, Ke = K && !!y.clearcoatMap, ae = K && !!y.clearcoatNormalMap, ye = K && !!y.clearcoatRoughnessMap, Be = J && !!y.iridescenceMap, ke = J && !!y.iridescenceThicknessMap, Se = Te && !!y.sheenColorMap, Je = Te && !!y.sheenRoughnessMap, Ge = !!y.specularMap, at = !!y.specularColorMap, D = !!y.specularIntensityMap, _e = fe && !!y.transmissionMap, q = fe && !!y.thicknessMap, $ = !!y.gradientMap, ge = !!y.alphaMap, xe = y.alphaTest > 0, $e = !!y.alphaHash, bt = !!y.extensions;
    let Vt = kn;
    y.toneMapped && (Ue === null || Ue.isXRRenderTarget === !0) && (Vt = r.toneMapping);
    const tt = {
      shaderID: oe,
      shaderType: y.type,
      shaderName: y.name,
      vertexShader: j,
      fragmentShader: ie,
      defines: y.defines,
      customVertexShaderID: Me,
      customFragmentShaderID: de,
      isRawShaderMaterial: y.isRawShaderMaterial === !0,
      glslVersion: y.glslVersion,
      precision: g,
      batching: ze,
      batchingColor: ze && z._colorsTexture !== null,
      instancing: Le,
      instancingColor: Le && z.instanceColor !== null,
      instancingMorph: Le && z.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: Ue === null ? r.outputColorSpace : Ue.isXRRenderTarget === !0 ? Ue.texture.colorSpace : St,
      alphaToCoverage: !!y.alphaToCoverage,
      map: se,
      matcap: X,
      envMap: E,
      envMapMode: E && W.mapping,
      envMapCubeUVHeight: le,
      aoMap: ne,
      lightMap: te,
      bumpMap: ee,
      normalMap: re,
      displacementMap: f && Re,
      emissiveMap: me,
      normalMapObjectSpace: re && y.normalMapType === Ad,
      normalMapTangentSpace: re && y.normalMapType === ai,
      metalnessMap: C,
      roughnessMap: M,
      anisotropy: B,
      anisotropyMap: ve,
      clearcoat: K,
      clearcoatMap: Ke,
      clearcoatNormalMap: ae,
      clearcoatRoughnessMap: ye,
      dispersion: Q,
      iridescence: J,
      iridescenceMap: Be,
      iridescenceThicknessMap: ke,
      sheen: Te,
      sheenColorMap: Se,
      sheenRoughnessMap: Je,
      specularMap: Ge,
      specularColorMap: at,
      specularIntensityMap: D,
      transmission: fe,
      transmissionMap: _e,
      thicknessMap: q,
      gradientMap: $,
      opaque: y.transparent === !1 && y.blending === Li && y.alphaToCoverage === !1,
      alphaMap: ge,
      alphaTest: xe,
      alphaHash: $e,
      combine: y.combine,
      //
      mapUv: se && m(y.map.channel),
      aoMapUv: ne && m(y.aoMap.channel),
      lightMapUv: te && m(y.lightMap.channel),
      bumpMapUv: ee && m(y.bumpMap.channel),
      normalMapUv: re && m(y.normalMap.channel),
      displacementMapUv: Re && m(y.displacementMap.channel),
      emissiveMapUv: me && m(y.emissiveMap.channel),
      metalnessMapUv: C && m(y.metalnessMap.channel),
      roughnessMapUv: M && m(y.roughnessMap.channel),
      anisotropyMapUv: ve && m(y.anisotropyMap.channel),
      clearcoatMapUv: Ke && m(y.clearcoatMap.channel),
      clearcoatNormalMapUv: ae && m(y.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ye && m(y.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Be && m(y.iridescenceMap.channel),
      iridescenceThicknessMapUv: ke && m(y.iridescenceThicknessMap.channel),
      sheenColorMapUv: Se && m(y.sheenColorMap.channel),
      sheenRoughnessMapUv: Je && m(y.sheenRoughnessMap.channel),
      specularMapUv: Ge && m(y.specularMap.channel),
      specularColorMapUv: at && m(y.specularColorMap.channel),
      specularIntensityMapUv: D && m(y.specularIntensityMap.channel),
      transmissionMapUv: _e && m(y.transmissionMap.channel),
      thicknessMapUv: q && m(y.thicknessMap.channel),
      alphaMapUv: ge && m(y.alphaMap.channel),
      //
      vertexTangents: !!k.attributes.tangent && (re || B),
      vertexColors: y.vertexColors,
      vertexAlphas: y.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4,
      pointsUvs: z.isPoints === !0 && !!k.attributes.uv && (se || ge),
      fog: !!V,
      useFog: y.fog === !0,
      fogExp2: !!V && V.isFogExp2,
      flatShading: y.flatShading === !0,
      sizeAttenuation: y.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      reverseDepthBuffer: d,
      skinning: z.isSkinnedMesh === !0,
      morphTargets: k.morphAttributes.position !== void 0,
      morphNormals: k.morphAttributes.normal !== void 0,
      morphColors: k.morphAttributes.color !== void 0,
      morphTargetsCount: De,
      morphTextureStride: Oe,
      numDirLights: S.directional.length,
      numPointLights: S.point.length,
      numSpotLights: S.spot.length,
      numSpotLightMaps: S.spotLightMap.length,
      numRectAreaLights: S.rectArea.length,
      numHemiLights: S.hemi.length,
      numDirLightShadows: S.directionalShadowMap.length,
      numPointLightShadows: S.pointShadowMap.length,
      numSpotLightShadows: S.spotShadowMap.length,
      numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps,
      numLightProbes: S.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: y.dithering,
      shadowMapEnabled: r.shadowMap.enabled && F.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: Vt,
      decodeVideoTexture: se && y.map.isVideoTexture === !0 && Qe.getTransfer(y.map.colorSpace) === ot,
      premultipliedAlpha: y.premultipliedAlpha,
      doubleSided: y.side === dn,
      flipSided: y.side === Ut,
      useDepthPacking: y.depthPacking >= 0,
      depthPacking: y.depthPacking || 0,
      index0AttributeName: y.index0AttributeName,
      extensionClipCullDistance: bt && y.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (bt && y.extensions.multiDraw === !0 || ze) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: y.customProgramCacheKey()
    };
    return tt.vertexUv1s = l.has(1), tt.vertexUv2s = l.has(2), tt.vertexUv3s = l.has(3), l.clear(), tt;
  }
  function x(y) {
    const S = [];
    if (y.shaderID ? S.push(y.shaderID) : (S.push(y.customVertexShaderID), S.push(y.customFragmentShaderID)), y.defines !== void 0)
      for (const F in y.defines)
        S.push(F), S.push(y.defines[F]);
    return y.isRawShaderMaterial === !1 && (_(S, y), v(S, y), S.push(r.outputColorSpace)), S.push(y.customProgramCacheKey), S.join();
  }
  function _(y, S) {
    y.push(S.precision), y.push(S.outputColorSpace), y.push(S.envMapMode), y.push(S.envMapCubeUVHeight), y.push(S.mapUv), y.push(S.alphaMapUv), y.push(S.lightMapUv), y.push(S.aoMapUv), y.push(S.bumpMapUv), y.push(S.normalMapUv), y.push(S.displacementMapUv), y.push(S.emissiveMapUv), y.push(S.metalnessMapUv), y.push(S.roughnessMapUv), y.push(S.anisotropyMapUv), y.push(S.clearcoatMapUv), y.push(S.clearcoatNormalMapUv), y.push(S.clearcoatRoughnessMapUv), y.push(S.iridescenceMapUv), y.push(S.iridescenceThicknessMapUv), y.push(S.sheenColorMapUv), y.push(S.sheenRoughnessMapUv), y.push(S.specularMapUv), y.push(S.specularColorMapUv), y.push(S.specularIntensityMapUv), y.push(S.transmissionMapUv), y.push(S.thicknessMapUv), y.push(S.combine), y.push(S.fogExp2), y.push(S.sizeAttenuation), y.push(S.morphTargetsCount), y.push(S.morphAttributeCount), y.push(S.numDirLights), y.push(S.numPointLights), y.push(S.numSpotLights), y.push(S.numSpotLightMaps), y.push(S.numHemiLights), y.push(S.numRectAreaLights), y.push(S.numDirLightShadows), y.push(S.numPointLightShadows), y.push(S.numSpotLightShadows), y.push(S.numSpotLightShadowsWithMaps), y.push(S.numLightProbes), y.push(S.shadowMapType), y.push(S.toneMapping), y.push(S.numClippingPlanes), y.push(S.numClipIntersection), y.push(S.depthPacking);
  }
  function v(y, S) {
    o.disableAll(), S.supportsVertexTextures && o.enable(0), S.instancing && o.enable(1), S.instancingColor && o.enable(2), S.instancingMorph && o.enable(3), S.matcap && o.enable(4), S.envMap && o.enable(5), S.normalMapObjectSpace && o.enable(6), S.normalMapTangentSpace && o.enable(7), S.clearcoat && o.enable(8), S.iridescence && o.enable(9), S.alphaTest && o.enable(10), S.vertexColors && o.enable(11), S.vertexAlphas && o.enable(12), S.vertexUv1s && o.enable(13), S.vertexUv2s && o.enable(14), S.vertexUv3s && o.enable(15), S.vertexTangents && o.enable(16), S.anisotropy && o.enable(17), S.alphaHash && o.enable(18), S.batching && o.enable(19), S.dispersion && o.enable(20), S.batchingColor && o.enable(21), y.push(o.mask), o.disableAll(), S.fog && o.enable(0), S.useFog && o.enable(1), S.flatShading && o.enable(2), S.logarithmicDepthBuffer && o.enable(3), S.reverseDepthBuffer && o.enable(4), S.skinning && o.enable(5), S.morphTargets && o.enable(6), S.morphNormals && o.enable(7), S.morphColors && o.enable(8), S.premultipliedAlpha && o.enable(9), S.shadowMapEnabled && o.enable(10), S.doubleSided && o.enable(11), S.flipSided && o.enable(12), S.useDepthPacking && o.enable(13), S.dithering && o.enable(14), S.transmission && o.enable(15), S.sheen && o.enable(16), S.opaque && o.enable(17), S.pointsUvs && o.enable(18), S.decodeVideoTexture && o.enable(19), S.alphaToCoverage && o.enable(20), y.push(o.mask);
  }
  function I(y) {
    const S = b[y.type];
    let F;
    if (S) {
      const O = un[S];
      F = Bd.clone(O.uniforms);
    } else
      F = y.uniforms;
    return F;
  }
  function T(y, S) {
    let F;
    for (let O = 0, z = h.length; O < z; O++) {
      const V = h[O];
      if (V.cacheKey === S) {
        F = V, ++F.usedTimes;
        break;
      }
    }
    return F === void 0 && (F = new w0(r, S, y, s), h.push(F)), F;
  }
  function w(y) {
    if (--y.usedTimes === 0) {
      const S = h.indexOf(y);
      h[S] = h[h.length - 1], h.pop(), y.destroy();
    }
  }
  function R(y) {
    c.remove(y);
  }
  function L() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: x,
    getUniforms: I,
    acquireProgram: T,
    releaseProgram: w,
    releaseShaderCache: R,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: L
  };
}
function P0() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return r.has(a);
  }
  function t(a) {
    let o = r.get(a);
    return o === void 0 && (o = {}, r.set(a, o)), o;
  }
  function n(a) {
    r.delete(a);
  }
  function i(a, o, c) {
    r.get(a)[o] = c;
  }
  function s() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: i,
    dispose: s
  };
}
function I0(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function Vh(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function Wh() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(u, d, f, g, b, m) {
    let p = r[e];
    return p === void 0 ? (p = {
      id: u.id,
      object: u,
      geometry: d,
      material: f,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: b,
      group: m
    }, r[e] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = f, p.groupOrder = g, p.renderOrder = u.renderOrder, p.z = b, p.group = m), e++, p;
  }
  function o(u, d, f, g, b, m) {
    const p = a(u, d, f, g, b, m);
    f.transmission > 0 ? n.push(p) : f.transparent === !0 ? i.push(p) : t.push(p);
  }
  function c(u, d, f, g, b, m) {
    const p = a(u, d, f, g, b, m);
    f.transmission > 0 ? n.unshift(p) : f.transparent === !0 ? i.unshift(p) : t.unshift(p);
  }
  function l(u, d) {
    t.length > 1 && t.sort(u || I0), n.length > 1 && n.sort(d || Vh), i.length > 1 && i.sort(d || Vh);
  }
  function h() {
    for (let u = e, d = r.length; u < d; u++) {
      const f = r[u];
      if (f.id === null) break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: o,
    unshift: c,
    finish: h,
    sort: l
  };
}
function L0() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return s === void 0 ? (a = new Wh(), r.set(n, [a])) : i >= s.length ? (a = new Wh(), s.push(a)) : a = s[i], a;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function D0() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new P(),
            color: new ue()
          };
          break;
        case "SpotLight":
          t = {
            position: new P(),
            direction: new P(),
            color: new ue(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new P(),
            color: new ue(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new P(),
            skyColor: new ue(),
            groundColor: new ue()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new ue(),
            position: new P(),
            halfWidth: new P(),
            halfHeight: new P()
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
function U0() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Z()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Z()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Z(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let N0 = 0;
function F0(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function O0(r) {
  const e = new D0(), t = U0(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let l = 0; l < 9; l++) n.probe.push(new P());
  const i = new P(), s = new Ie(), a = new Ie();
  function o(l) {
    let h = 0, u = 0, d = 0;
    for (let L = 0; L < 9; L++) n.probe[L].set(0, 0, 0);
    let f = 0, g = 0, b = 0, m = 0, p = 0, x = 0, _ = 0, v = 0, I = 0, T = 0, w = 0;
    l.sort(F0);
    for (let L = 0, y = l.length; L < y; L++) {
      const S = l[L], F = S.color, O = S.intensity, z = S.distance, V = S.shadow && S.shadow.map ? S.shadow.map.texture : null;
      if (S.isAmbientLight)
        h += F.r * O, u += F.g * O, d += F.b * O;
      else if (S.isLightProbe) {
        for (let k = 0; k < 9; k++)
          n.probe[k].addScaledVector(S.sh.coefficients[k], O);
        w++;
      } else if (S.isDirectionalLight) {
        const k = e.get(S);
        if (k.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow) {
          const Y = S.shadow, W = t.get(S);
          W.shadowIntensity = Y.intensity, W.shadowBias = Y.bias, W.shadowNormalBias = Y.normalBias, W.shadowRadius = Y.radius, W.shadowMapSize = Y.mapSize, n.directionalShadow[f] = W, n.directionalShadowMap[f] = V, n.directionalShadowMatrix[f] = S.shadow.matrix, x++;
        }
        n.directional[f] = k, f++;
      } else if (S.isSpotLight) {
        const k = e.get(S);
        k.position.setFromMatrixPosition(S.matrixWorld), k.color.copy(F).multiplyScalar(O), k.distance = z, k.coneCos = Math.cos(S.angle), k.penumbraCos = Math.cos(S.angle * (1 - S.penumbra)), k.decay = S.decay, n.spot[b] = k;
        const Y = S.shadow;
        if (S.map && (n.spotLightMap[I] = S.map, I++, Y.updateMatrices(S), S.castShadow && T++), n.spotLightMatrix[b] = Y.matrix, S.castShadow) {
          const W = t.get(S);
          W.shadowIntensity = Y.intensity, W.shadowBias = Y.bias, W.shadowNormalBias = Y.normalBias, W.shadowRadius = Y.radius, W.shadowMapSize = Y.mapSize, n.spotShadow[b] = W, n.spotShadowMap[b] = V, v++;
        }
        b++;
      } else if (S.isRectAreaLight) {
        const k = e.get(S);
        k.color.copy(F).multiplyScalar(O), k.halfWidth.set(S.width * 0.5, 0, 0), k.halfHeight.set(0, S.height * 0.5, 0), n.rectArea[m] = k, m++;
      } else if (S.isPointLight) {
        const k = e.get(S);
        if (k.color.copy(S.color).multiplyScalar(S.intensity), k.distance = S.distance, k.decay = S.decay, S.castShadow) {
          const Y = S.shadow, W = t.get(S);
          W.shadowIntensity = Y.intensity, W.shadowBias = Y.bias, W.shadowNormalBias = Y.normalBias, W.shadowRadius = Y.radius, W.shadowMapSize = Y.mapSize, W.shadowCameraNear = Y.camera.near, W.shadowCameraFar = Y.camera.far, n.pointShadow[g] = W, n.pointShadowMap[g] = V, n.pointShadowMatrix[g] = S.shadow.matrix, _++;
        }
        n.point[g] = k, g++;
      } else if (S.isHemisphereLight) {
        const k = e.get(S);
        k.skyColor.copy(S.color).multiplyScalar(O), k.groundColor.copy(S.groundColor).multiplyScalar(O), n.hemi[p] = k, p++;
      }
    }
    m > 0 && (r.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = he.LTC_FLOAT_1, n.rectAreaLTC2 = he.LTC_FLOAT_2) : (n.rectAreaLTC1 = he.LTC_HALF_1, n.rectAreaLTC2 = he.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d;
    const R = n.hash;
    (R.directionalLength !== f || R.pointLength !== g || R.spotLength !== b || R.rectAreaLength !== m || R.hemiLength !== p || R.numDirectionalShadows !== x || R.numPointShadows !== _ || R.numSpotShadows !== v || R.numSpotMaps !== I || R.numLightProbes !== w) && (n.directional.length = f, n.spot.length = b, n.rectArea.length = m, n.point.length = g, n.hemi.length = p, n.directionalShadow.length = x, n.directionalShadowMap.length = x, n.pointShadow.length = _, n.pointShadowMap.length = _, n.spotShadow.length = v, n.spotShadowMap.length = v, n.directionalShadowMatrix.length = x, n.pointShadowMatrix.length = _, n.spotLightMatrix.length = v + I - T, n.spotLightMap.length = I, n.numSpotLightShadowsWithMaps = T, n.numLightProbes = w, R.directionalLength = f, R.pointLength = g, R.spotLength = b, R.rectAreaLength = m, R.hemiLength = p, R.numDirectionalShadows = x, R.numPointShadows = _, R.numSpotShadows = v, R.numSpotMaps = I, R.numLightProbes = w, n.version = N0++);
  }
  function c(l, h) {
    let u = 0, d = 0, f = 0, g = 0, b = 0;
    const m = h.matrixWorldInverse;
    for (let p = 0, x = l.length; p < x; p++) {
      const _ = l[p];
      if (_.isDirectionalLight) {
        const v = n.directional[u];
        v.direction.setFromMatrixPosition(_.matrixWorld), i.setFromMatrixPosition(_.target.matrixWorld), v.direction.sub(i), v.direction.transformDirection(m), u++;
      } else if (_.isSpotLight) {
        const v = n.spot[f];
        v.position.setFromMatrixPosition(_.matrixWorld), v.position.applyMatrix4(m), v.direction.setFromMatrixPosition(_.matrixWorld), i.setFromMatrixPosition(_.target.matrixWorld), v.direction.sub(i), v.direction.transformDirection(m), f++;
      } else if (_.isRectAreaLight) {
        const v = n.rectArea[g];
        v.position.setFromMatrixPosition(_.matrixWorld), v.position.applyMatrix4(m), a.identity(), s.copy(_.matrixWorld), s.premultiply(m), a.extractRotation(s), v.halfWidth.set(_.width * 0.5, 0, 0), v.halfHeight.set(0, _.height * 0.5, 0), v.halfWidth.applyMatrix4(a), v.halfHeight.applyMatrix4(a), g++;
      } else if (_.isPointLight) {
        const v = n.point[d];
        v.position.setFromMatrixPosition(_.matrixWorld), v.position.applyMatrix4(m), d++;
      } else if (_.isHemisphereLight) {
        const v = n.hemi[b];
        v.direction.setFromMatrixPosition(_.matrixWorld), v.direction.transformDirection(m), b++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: n
  };
}
function Xh(r) {
  const e = new O0(r), t = [], n = [];
  function i(h) {
    l.camera = h, t.length = 0, n.length = 0;
  }
  function s(h) {
    t.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    e.setup(t);
  }
  function c(h) {
    e.setupView(t, h);
  }
  const l = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: i,
    state: l,
    setupLights: o,
    setupLightsView: c,
    pushLight: s,
    pushShadow: a
  };
}
function B0(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, s = 0) {
    const a = e.get(i);
    let o;
    return a === void 0 ? (o = new Xh(r), e.set(i, [o])) : s >= a.length ? (o = new Xh(r), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
class Rl extends Mt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Md, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Cl extends Mt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const k0 = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, z0 = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function G0(r, e, t) {
  let n = new Sr();
  const i = new Z(), s = new Z(), a = new et(), o = new Rl({ depthPacking: Sd }), c = new Cl(), l = {}, h = t.maxTextureSize, u = { [An]: Ut, [Ut]: An, [dn]: dn }, d = new pn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Z() },
      radius: { value: 4 }
    },
    vertexShader: k0,
    fragmentShader: z0
  }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const g = new Xe();
  g.setAttribute(
    "position",
    new nt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const b = new qe(g, d), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = cl;
  let p = this.type;
  this.render = function(T, w, R) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || T.length === 0) return;
    const L = r.getRenderTarget(), y = r.getActiveCubeFace(), S = r.getActiveMipmapLevel(), F = r.state;
    F.setBlending(Bn), F.buffers.color.setClear(1, 1, 1, 1), F.buffers.depth.setTest(!0), F.setScissorTest(!1);
    const O = p !== xn && this.type === xn, z = p === xn && this.type !== xn;
    for (let V = 0, k = T.length; V < k; V++) {
      const Y = T[V], W = Y.shadow;
      if (W === void 0) {
        console.warn("THREE.WebGLShadowMap:", Y, "has no shadow.");
        continue;
      }
      if (W.autoUpdate === !1 && W.needsUpdate === !1) continue;
      i.copy(W.mapSize);
      const le = W.getFrameExtents();
      if (i.multiply(le), s.copy(W.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / le.x), i.x = s.x * le.x, W.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / le.y), i.y = s.y * le.y, W.mapSize.y = s.y)), W.map === null || O === !0 || z === !0) {
        const pe = this.type !== xn ? { minFilter: yt, magFilter: yt } : {};
        W.map !== null && W.map.dispose(), W.map = new fn(i.x, i.y, pe), W.map.texture.name = Y.name + ".shadowMap", W.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(W.map), r.clear();
      const oe = W.getViewportCount();
      for (let pe = 0; pe < oe; pe++) {
        const De = W.getViewport(pe);
        a.set(
          s.x * De.x,
          s.y * De.y,
          s.x * De.z,
          s.y * De.w
        ), F.viewport(a), W.updateMatrices(Y, pe), n = W.getFrustum(), v(w, R, W.camera, Y, this.type);
      }
      W.isPointLightShadow !== !0 && this.type === xn && x(W, R), W.needsUpdate = !1;
    }
    p = this.type, m.needsUpdate = !1, r.setRenderTarget(L, y, S);
  };
  function x(T, w) {
    const R = e.update(b);
    d.defines.VSM_SAMPLES !== T.blurSamples && (d.defines.VSM_SAMPLES = T.blurSamples, f.defines.VSM_SAMPLES = T.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), T.mapPass === null && (T.mapPass = new fn(i.x, i.y)), d.uniforms.shadow_pass.value = T.map.texture, d.uniforms.resolution.value = T.mapSize, d.uniforms.radius.value = T.radius, r.setRenderTarget(T.mapPass), r.clear(), r.renderBufferDirect(w, null, R, d, b, null), f.uniforms.shadow_pass.value = T.mapPass.texture, f.uniforms.resolution.value = T.mapSize, f.uniforms.radius.value = T.radius, r.setRenderTarget(T.map), r.clear(), r.renderBufferDirect(w, null, R, f, b, null);
  }
  function _(T, w, R, L) {
    let y = null;
    const S = R.isPointLight === !0 ? T.customDistanceMaterial : T.customDepthMaterial;
    if (S !== void 0)
      y = S;
    else if (y = R.isPointLight === !0 ? c : o, r.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const F = y.uuid, O = w.uuid;
      let z = l[F];
      z === void 0 && (z = {}, l[F] = z);
      let V = z[O];
      V === void 0 && (V = y.clone(), z[O] = V, w.addEventListener("dispose", I)), y = V;
    }
    if (y.visible = w.visible, y.wireframe = w.wireframe, L === xn ? y.side = w.shadowSide !== null ? w.shadowSide : w.side : y.side = w.shadowSide !== null ? w.shadowSide : u[w.side], y.alphaMap = w.alphaMap, y.alphaTest = w.alphaTest, y.map = w.map, y.clipShadows = w.clipShadows, y.clippingPlanes = w.clippingPlanes, y.clipIntersection = w.clipIntersection, y.displacementMap = w.displacementMap, y.displacementScale = w.displacementScale, y.displacementBias = w.displacementBias, y.wireframeLinewidth = w.wireframeLinewidth, y.linewidth = w.linewidth, R.isPointLight === !0 && y.isMeshDistanceMaterial === !0) {
      const F = r.properties.get(y);
      F.light = R;
    }
    return y;
  }
  function v(T, w, R, L, y) {
    if (T.visible === !1) return;
    if (T.layers.test(w.layers) && (T.isMesh || T.isLine || T.isPoints) && (T.castShadow || T.receiveShadow && y === xn) && (!T.frustumCulled || n.intersectsObject(T))) {
      T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse, T.matrixWorld);
      const O = e.update(T), z = T.material;
      if (Array.isArray(z)) {
        const V = O.groups;
        for (let k = 0, Y = V.length; k < Y; k++) {
          const W = V[k], le = z[W.materialIndex];
          if (le && le.visible) {
            const oe = _(T, le, L, y);
            T.onBeforeShadow(r, T, w, R, O, oe, W), r.renderBufferDirect(R, null, O, oe, T, W), T.onAfterShadow(r, T, w, R, O, oe, W);
          }
        }
      } else if (z.visible) {
        const V = _(T, z, L, y);
        T.onBeforeShadow(r, T, w, R, O, V, null), r.renderBufferDirect(R, null, O, V, T, null), T.onAfterShadow(r, T, w, R, O, V, null);
      }
    }
    const F = T.children;
    for (let O = 0, z = F.length; O < z; O++)
      v(F[O], w, R, L, y);
  }
  function I(T) {
    T.target.removeEventListener("dispose", I);
    for (const R in l) {
      const L = l[R], y = T.target.uuid;
      y in L && (L[y].dispose(), delete L[y]);
    }
  }
}
const H0 = {
  [Pa]: Ia,
  [La]: Na,
  [Da]: Fa,
  [Fi]: Ua,
  [Ia]: Pa,
  [Na]: La,
  [Fa]: Da,
  [Ua]: Fi
};
function V0(r) {
  function e() {
    let D = !1;
    const _e = new et();
    let q = null;
    const $ = new et(0, 0, 0, 0);
    return {
      setMask: function(ge) {
        q !== ge && !D && (r.colorMask(ge, ge, ge, ge), q = ge);
      },
      setLocked: function(ge) {
        D = ge;
      },
      setClear: function(ge, xe, $e, bt, Vt) {
        Vt === !0 && (ge *= bt, xe *= bt, $e *= bt), _e.set(ge, xe, $e, bt), $.equals(_e) === !1 && (r.clearColor(ge, xe, $e, bt), $.copy(_e));
      },
      reset: function() {
        D = !1, q = null, $.set(-1, 0, 0, 0);
      }
    };
  }
  function t() {
    let D = !1, _e = !1, q = null, $ = null, ge = null;
    return {
      setReversed: function(xe) {
        _e = xe;
      },
      setTest: function(xe) {
        xe ? Me(r.DEPTH_TEST) : de(r.DEPTH_TEST);
      },
      setMask: function(xe) {
        q !== xe && !D && (r.depthMask(xe), q = xe);
      },
      setFunc: function(xe) {
        if (_e && (xe = H0[xe]), $ !== xe) {
          switch (xe) {
            case Pa:
              r.depthFunc(r.NEVER);
              break;
            case Ia:
              r.depthFunc(r.ALWAYS);
              break;
            case La:
              r.depthFunc(r.LESS);
              break;
            case Fi:
              r.depthFunc(r.LEQUAL);
              break;
            case Da:
              r.depthFunc(r.EQUAL);
              break;
            case Ua:
              r.depthFunc(r.GEQUAL);
              break;
            case Na:
              r.depthFunc(r.GREATER);
              break;
            case Fa:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          $ = xe;
        }
      },
      setLocked: function(xe) {
        D = xe;
      },
      setClear: function(xe) {
        ge !== xe && (r.clearDepth(xe), ge = xe);
      },
      reset: function() {
        D = !1, q = null, $ = null, ge = null;
      }
    };
  }
  function n() {
    let D = !1, _e = null, q = null, $ = null, ge = null, xe = null, $e = null, bt = null, Vt = null;
    return {
      setTest: function(tt) {
        D || (tt ? Me(r.STENCIL_TEST) : de(r.STENCIL_TEST));
      },
      setMask: function(tt) {
        _e !== tt && !D && (r.stencilMask(tt), _e = tt);
      },
      setFunc: function(tt, Wt, En) {
        (q !== tt || $ !== Wt || ge !== En) && (r.stencilFunc(tt, Wt, En), q = tt, $ = Wt, ge = En);
      },
      setOp: function(tt, Wt, En) {
        (xe !== tt || $e !== Wt || bt !== En) && (r.stencilOp(tt, Wt, En), xe = tt, $e = Wt, bt = En);
      },
      setLocked: function(tt) {
        D = tt;
      },
      setClear: function(tt) {
        Vt !== tt && (r.clearStencil(tt), Vt = tt);
      },
      reset: function() {
        D = !1, _e = null, q = null, $ = null, ge = null, xe = null, $e = null, bt = null, Vt = null;
      }
    };
  }
  const i = new e(), s = new t(), a = new n(), o = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let l = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), d = [], f = null, g = !1, b = null, m = null, p = null, x = null, _ = null, v = null, I = null, T = new ue(0, 0, 0), w = 0, R = !1, L = null, y = null, S = null, F = null, O = null;
  const z = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let V = !1, k = 0;
  const Y = r.getParameter(r.VERSION);
  Y.indexOf("WebGL") !== -1 ? (k = parseFloat(/^WebGL (\d)/.exec(Y)[1]), V = k >= 1) : Y.indexOf("OpenGL ES") !== -1 && (k = parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]), V = k >= 2);
  let W = null, le = {};
  const oe = r.getParameter(r.SCISSOR_BOX), pe = r.getParameter(r.VIEWPORT), De = new et().fromArray(oe), Oe = new et().fromArray(pe);
  function j(D, _e, q, $) {
    const ge = new Uint8Array(4), xe = r.createTexture();
    r.bindTexture(D, xe), r.texParameteri(D, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(D, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let $e = 0; $e < q; $e++)
      D === r.TEXTURE_3D || D === r.TEXTURE_2D_ARRAY ? r.texImage3D(_e, 0, r.RGBA, 1, 1, $, 0, r.RGBA, r.UNSIGNED_BYTE, ge) : r.texImage2D(_e + $e, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, ge);
    return xe;
  }
  const ie = {};
  ie[r.TEXTURE_2D] = j(r.TEXTURE_2D, r.TEXTURE_2D, 1), ie[r.TEXTURE_CUBE_MAP] = j(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ie[r.TEXTURE_2D_ARRAY] = j(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), ie[r.TEXTURE_3D] = j(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1), i.setClear(0, 0, 0, 1), s.setClear(1), a.setClear(0), Me(r.DEPTH_TEST), s.setFunc(Fi), te(!1), ee(qc), Me(r.CULL_FACE), E(Bn);
  function Me(D) {
    l[D] !== !0 && (r.enable(D), l[D] = !0);
  }
  function de(D) {
    l[D] !== !1 && (r.disable(D), l[D] = !1);
  }
  function Ue(D, _e) {
    return h[D] !== _e ? (r.bindFramebuffer(D, _e), h[D] = _e, D === r.DRAW_FRAMEBUFFER && (h[r.FRAMEBUFFER] = _e), D === r.FRAMEBUFFER && (h[r.DRAW_FRAMEBUFFER] = _e), !0) : !1;
  }
  function Le(D, _e) {
    let q = d, $ = !1;
    if (D) {
      q = u.get(_e), q === void 0 && (q = [], u.set(_e, q));
      const ge = D.textures;
      if (q.length !== ge.length || q[0] !== r.COLOR_ATTACHMENT0) {
        for (let xe = 0, $e = ge.length; xe < $e; xe++)
          q[xe] = r.COLOR_ATTACHMENT0 + xe;
        q.length = ge.length, $ = !0;
      }
    } else
      q[0] !== r.BACK && (q[0] = r.BACK, $ = !0);
    $ && r.drawBuffers(q);
  }
  function ze(D) {
    return f !== D ? (r.useProgram(D), f = D, !0) : !1;
  }
  const se = {
    [ei]: r.FUNC_ADD,
    [qu]: r.FUNC_SUBTRACT,
    [Yu]: r.FUNC_REVERSE_SUBTRACT
  };
  se[ju] = r.MIN, se[Ku] = r.MAX;
  const X = {
    [Ju]: r.ZERO,
    [Zu]: r.ONE,
    [Qu]: r.SRC_COLOR,
    [Ra]: r.SRC_ALPHA,
    [sd]: r.SRC_ALPHA_SATURATE,
    [nd]: r.DST_COLOR,
    [ed]: r.DST_ALPHA,
    [$u]: r.ONE_MINUS_SRC_COLOR,
    [Ca]: r.ONE_MINUS_SRC_ALPHA,
    [id]: r.ONE_MINUS_DST_COLOR,
    [td]: r.ONE_MINUS_DST_ALPHA,
    [rd]: r.CONSTANT_COLOR,
    [ad]: r.ONE_MINUS_CONSTANT_COLOR,
    [od]: r.CONSTANT_ALPHA,
    [cd]: r.ONE_MINUS_CONSTANT_ALPHA
  };
  function E(D, _e, q, $, ge, xe, $e, bt, Vt, tt) {
    if (D === Bn) {
      g === !0 && (de(r.BLEND), g = !1);
      return;
    }
    if (g === !1 && (Me(r.BLEND), g = !0), D !== Xu) {
      if (D !== b || tt !== R) {
        if ((m !== ei || _ !== ei) && (r.blendEquation(r.FUNC_ADD), m = ei, _ = ei), tt)
          switch (D) {
            case Li:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case Ea:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case Yc:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case jc:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        else
          switch (D) {
            case Li:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case Ea:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case Yc:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case jc:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        p = null, x = null, v = null, I = null, T.set(0, 0, 0), w = 0, b = D, R = tt;
      }
      return;
    }
    ge = ge || _e, xe = xe || q, $e = $e || $, (_e !== m || ge !== _) && (r.blendEquationSeparate(se[_e], se[ge]), m = _e, _ = ge), (q !== p || $ !== x || xe !== v || $e !== I) && (r.blendFuncSeparate(X[q], X[$], X[xe], X[$e]), p = q, x = $, v = xe, I = $e), (bt.equals(T) === !1 || Vt !== w) && (r.blendColor(bt.r, bt.g, bt.b, Vt), T.copy(bt), w = Vt), b = D, R = !1;
  }
  function ne(D, _e) {
    D.side === dn ? de(r.CULL_FACE) : Me(r.CULL_FACE);
    let q = D.side === Ut;
    _e && (q = !q), te(q), D.blending === Li && D.transparent === !1 ? E(Bn) : E(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), s.setFunc(D.depthFunc), s.setTest(D.depthTest), s.setMask(D.depthWrite), i.setMask(D.colorWrite);
    const $ = D.stencilWrite;
    a.setTest($), $ && (a.setMask(D.stencilWriteMask), a.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), a.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), Re(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? Me(r.SAMPLE_ALPHA_TO_COVERAGE) : de(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function te(D) {
    L !== D && (D ? r.frontFace(r.CW) : r.frontFace(r.CCW), L = D);
  }
  function ee(D) {
    D !== Hu ? (Me(r.CULL_FACE), D !== y && (D === qc ? r.cullFace(r.BACK) : D === Vu ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : de(r.CULL_FACE), y = D;
  }
  function re(D) {
    D !== S && (V && r.lineWidth(D), S = D);
  }
  function Re(D, _e, q) {
    D ? (Me(r.POLYGON_OFFSET_FILL), (F !== _e || O !== q) && (r.polygonOffset(_e, q), F = _e, O = q)) : de(r.POLYGON_OFFSET_FILL);
  }
  function me(D) {
    D ? Me(r.SCISSOR_TEST) : de(r.SCISSOR_TEST);
  }
  function C(D) {
    D === void 0 && (D = r.TEXTURE0 + z - 1), W !== D && (r.activeTexture(D), W = D);
  }
  function M(D, _e, q) {
    q === void 0 && (W === null ? q = r.TEXTURE0 + z - 1 : q = W);
    let $ = le[q];
    $ === void 0 && ($ = { type: void 0, texture: void 0 }, le[q] = $), ($.type !== D || $.texture !== _e) && (W !== q && (r.activeTexture(q), W = q), r.bindTexture(D, _e || ie[D]), $.type = D, $.texture = _e);
  }
  function B() {
    const D = le[W];
    D !== void 0 && D.type !== void 0 && (r.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function K() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Q() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function J() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Te() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function fe() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ve() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ke() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ae() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ye() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Be() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ke(D) {
    De.equals(D) === !1 && (r.scissor(D.x, D.y, D.z, D.w), De.copy(D));
  }
  function Se(D) {
    Oe.equals(D) === !1 && (r.viewport(D.x, D.y, D.z, D.w), Oe.copy(D));
  }
  function Je(D, _e) {
    let q = c.get(_e);
    q === void 0 && (q = /* @__PURE__ */ new WeakMap(), c.set(_e, q));
    let $ = q.get(D);
    $ === void 0 && ($ = r.getUniformBlockIndex(_e, D.name), q.set(D, $));
  }
  function Ge(D, _e) {
    const $ = c.get(_e).get(D);
    o.get(_e) !== $ && (r.uniformBlockBinding(_e, $, D.__bindingPointIndex), o.set(_e, $));
  }
  function at() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), l = {}, W = null, le = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), d = [], f = null, g = !1, b = null, m = null, p = null, x = null, _ = null, v = null, I = null, T = new ue(0, 0, 0), w = 0, R = !1, L = null, y = null, S = null, F = null, O = null, De.set(0, 0, r.canvas.width, r.canvas.height), Oe.set(0, 0, r.canvas.width, r.canvas.height), i.reset(), s.reset(), a.reset();
  }
  return {
    buffers: {
      color: i,
      depth: s,
      stencil: a
    },
    enable: Me,
    disable: de,
    bindFramebuffer: Ue,
    drawBuffers: Le,
    useProgram: ze,
    setBlending: E,
    setMaterial: ne,
    setFlipSided: te,
    setCullFace: ee,
    setLineWidth: re,
    setPolygonOffset: Re,
    setScissorTest: me,
    activeTexture: C,
    bindTexture: M,
    unbindTexture: B,
    compressedTexImage2D: K,
    compressedTexImage3D: Q,
    texImage2D: ye,
    texImage3D: Be,
    updateUBOMapping: Je,
    uniformBlockBinding: Ge,
    texStorage2D: Ke,
    texStorage3D: ae,
    texSubImage2D: J,
    texSubImage3D: Te,
    compressedTexSubImage2D: fe,
    compressedTexSubImage3D: ve,
    scissor: ke,
    viewport: Se,
    reset: at
  };
}
function W0(r, e) {
  const t = r.image && r.image.width ? r.image.width / r.image.height : 1;
  return t > e ? (r.repeat.x = 1, r.repeat.y = t / e, r.offset.x = 0, r.offset.y = (1 - r.repeat.y) / 2) : (r.repeat.x = e / t, r.repeat.y = 1, r.offset.x = (1 - r.repeat.x) / 2, r.offset.y = 0), r;
}
function X0(r, e) {
  const t = r.image && r.image.width ? r.image.width / r.image.height : 1;
  return t > e ? (r.repeat.x = e / t, r.repeat.y = 1, r.offset.x = (1 - r.repeat.x) / 2, r.offset.y = 0) : (r.repeat.x = 1, r.repeat.y = t / e, r.offset.x = 0, r.offset.y = (1 - r.repeat.y) / 2), r;
}
function q0(r) {
  return r.repeat.x = 1, r.repeat.y = 1, r.offset.x = 0, r.offset.y = 0, r;
}
function $c(r, e, t, n) {
  const i = Y0(n);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case fl:
      return r * e;
    case ml:
      return r * e;
    case gl:
      return r * e * 2;
    case vo:
      return r * e / i.components * i.byteLength;
    case vr:
      return r * e / i.components * i.byteLength;
    case bl:
      return r * e * 2 / i.components * i.byteLength;
    case yo:
      return r * e * 2 / i.components * i.byteLength;
    case pl:
      return r * e * 3 / i.components * i.byteLength;
    case Gt:
      return r * e * 4 / i.components * i.byteLength;
    case Mo:
      return r * e * 4 / i.components * i.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case Js:
    case Zs:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Qs:
    case $s:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case Ba:
    case za:
      return Math.max(r, 16) * Math.max(e, 8) / 4;
    case Oa:
    case ka:
      return Math.max(r, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case Ga:
    case Ha:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Va:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case Wa:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Xa:
      return Math.floor((r + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case qa:
      return Math.floor((r + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Ya:
      return Math.floor((r + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case ja:
      return Math.floor((r + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Ka:
      return Math.floor((r + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Ja:
      return Math.floor((r + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Za:
      return Math.floor((r + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Qa:
      return Math.floor((r + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case $a:
      return Math.floor((r + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case eo:
      return Math.floor((r + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case to:
      return Math.floor((r + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case no:
      return Math.floor((r + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case io:
      return Math.floor((r + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case er:
    case so:
    case ro:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case _l:
    case ao:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 8;
    case oo:
    case co:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function Y0(r) {
  switch (r) {
    case wn:
    case hl:
      return { byteLength: 1, components: 1 };
    case Ms:
    case ul:
    case vn:
      return { byteLength: 2, components: 1 };
    case _o:
    case xo:
      return { byteLength: 2, components: 4 };
    case Gn:
    case bo:
    case Rt:
      return { byteLength: 4, components: 1 };
    case dl:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${r}.`);
}
const j0 = {
  contain: W0,
  cover: X0,
  fill: q0,
  getByteLength: $c
};
function K0(r, e, t, n, i, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new Z(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let f = !1;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(C, M) {
    return f ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(C, M)
    ) : dr("canvas");
  }
  function b(C, M, B) {
    let K = 1;
    const Q = me(C);
    if ((Q.width > B || Q.height > B) && (K = B / Math.max(Q.width, Q.height)), K < 1)
      if (typeof HTMLImageElement < "u" && C instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && C instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && C instanceof ImageBitmap || typeof VideoFrame < "u" && C instanceof VideoFrame) {
        const J = Math.floor(K * Q.width), Te = Math.floor(K * Q.height);
        u === void 0 && (u = g(J, Te));
        const fe = M ? g(J, Te) : u;
        return fe.width = J, fe.height = Te, fe.getContext("2d").drawImage(C, 0, 0, J, Te), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Q.width + "x" + Q.height + ") to (" + J + "x" + Te + ")."), fe;
      } else
        return "data" in C && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Q.width + "x" + Q.height + ")."), C;
    return C;
  }
  function m(C) {
    return C.generateMipmaps && C.minFilter !== yt && C.minFilter !== lt;
  }
  function p(C) {
    r.generateMipmap(C);
  }
  function x(C, M, B, K, Q = !1) {
    if (C !== null) {
      if (r[C] !== void 0) return r[C];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + C + "'");
    }
    let J = M;
    if (M === r.RED && (B === r.FLOAT && (J = r.R32F), B === r.HALF_FLOAT && (J = r.R16F), B === r.UNSIGNED_BYTE && (J = r.R8)), M === r.RED_INTEGER && (B === r.UNSIGNED_BYTE && (J = r.R8UI), B === r.UNSIGNED_SHORT && (J = r.R16UI), B === r.UNSIGNED_INT && (J = r.R32UI), B === r.BYTE && (J = r.R8I), B === r.SHORT && (J = r.R16I), B === r.INT && (J = r.R32I)), M === r.RG && (B === r.FLOAT && (J = r.RG32F), B === r.HALF_FLOAT && (J = r.RG16F), B === r.UNSIGNED_BYTE && (J = r.RG8)), M === r.RG_INTEGER && (B === r.UNSIGNED_BYTE && (J = r.RG8UI), B === r.UNSIGNED_SHORT && (J = r.RG16UI), B === r.UNSIGNED_INT && (J = r.RG32UI), B === r.BYTE && (J = r.RG8I), B === r.SHORT && (J = r.RG16I), B === r.INT && (J = r.RG32I)), M === r.RGB_INTEGER && (B === r.UNSIGNED_BYTE && (J = r.RGB8UI), B === r.UNSIGNED_SHORT && (J = r.RGB16UI), B === r.UNSIGNED_INT && (J = r.RGB32UI), B === r.BYTE && (J = r.RGB8I), B === r.SHORT && (J = r.RGB16I), B === r.INT && (J = r.RGB32I)), M === r.RGBA_INTEGER && (B === r.UNSIGNED_BYTE && (J = r.RGBA8UI), B === r.UNSIGNED_SHORT && (J = r.RGBA16UI), B === r.UNSIGNED_INT && (J = r.RGBA32UI), B === r.BYTE && (J = r.RGBA8I), B === r.SHORT && (J = r.RGBA16I), B === r.INT && (J = r.RGBA32I)), M === r.RGB && B === r.UNSIGNED_INT_5_9_9_9_REV && (J = r.RGB9_E5), M === r.RGBA) {
      const Te = Q ? or : Qe.getTransfer(K);
      B === r.FLOAT && (J = r.RGBA32F), B === r.HALF_FLOAT && (J = r.RGBA16F), B === r.UNSIGNED_BYTE && (J = Te === ot ? r.SRGB8_ALPHA8 : r.RGBA8), B === r.UNSIGNED_SHORT_4_4_4_4 && (J = r.RGBA4), B === r.UNSIGNED_SHORT_5_5_5_1 && (J = r.RGB5_A1);
    }
    return (J === r.R16F || J === r.R32F || J === r.RG16F || J === r.RG32F || J === r.RGBA16F || J === r.RGBA32F) && e.get("EXT_color_buffer_float"), J;
  }
  function _(C, M) {
    let B;
    return C ? M === null || M === Gn || M === Oi ? B = r.DEPTH24_STENCIL8 : M === Rt ? B = r.DEPTH32F_STENCIL8 : M === Ms && (B = r.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : M === null || M === Gn || M === Oi ? B = r.DEPTH_COMPONENT24 : M === Rt ? B = r.DEPTH_COMPONENT32F : M === Ms && (B = r.DEPTH_COMPONENT16), B;
  }
  function v(C, M) {
    return m(C) === !0 || C.isFramebufferTexture && C.minFilter !== yt && C.minFilter !== lt ? Math.log2(Math.max(M.width, M.height)) + 1 : C.mipmaps !== void 0 && C.mipmaps.length > 0 ? C.mipmaps.length : C.isCompressedTexture && Array.isArray(C.image) ? M.mipmaps.length : 1;
  }
  function I(C) {
    const M = C.target;
    M.removeEventListener("dispose", I), w(M), M.isVideoTexture && h.delete(M);
  }
  function T(C) {
    const M = C.target;
    M.removeEventListener("dispose", T), L(M);
  }
  function w(C) {
    const M = n.get(C);
    if (M.__webglInit === void 0) return;
    const B = C.source, K = d.get(B);
    if (K) {
      const Q = K[M.__cacheKey];
      Q.usedTimes--, Q.usedTimes === 0 && R(C), Object.keys(K).length === 0 && d.delete(B);
    }
    n.remove(C);
  }
  function R(C) {
    const M = n.get(C);
    r.deleteTexture(M.__webglTexture);
    const B = C.source, K = d.get(B);
    delete K[M.__cacheKey], a.memory.textures--;
  }
  function L(C) {
    const M = n.get(C);
    if (C.depthTexture && C.depthTexture.dispose(), C.isWebGLCubeRenderTarget)
      for (let K = 0; K < 6; K++) {
        if (Array.isArray(M.__webglFramebuffer[K]))
          for (let Q = 0; Q < M.__webglFramebuffer[K].length; Q++) r.deleteFramebuffer(M.__webglFramebuffer[K][Q]);
        else
          r.deleteFramebuffer(M.__webglFramebuffer[K]);
        M.__webglDepthbuffer && r.deleteRenderbuffer(M.__webglDepthbuffer[K]);
      }
    else {
      if (Array.isArray(M.__webglFramebuffer))
        for (let K = 0; K < M.__webglFramebuffer.length; K++) r.deleteFramebuffer(M.__webglFramebuffer[K]);
      else
        r.deleteFramebuffer(M.__webglFramebuffer);
      if (M.__webglDepthbuffer && r.deleteRenderbuffer(M.__webglDepthbuffer), M.__webglMultisampledFramebuffer && r.deleteFramebuffer(M.__webglMultisampledFramebuffer), M.__webglColorRenderbuffer)
        for (let K = 0; K < M.__webglColorRenderbuffer.length; K++)
          M.__webglColorRenderbuffer[K] && r.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);
      M.__webglDepthRenderbuffer && r.deleteRenderbuffer(M.__webglDepthRenderbuffer);
    }
    const B = C.textures;
    for (let K = 0, Q = B.length; K < Q; K++) {
      const J = n.get(B[K]);
      J.__webglTexture && (r.deleteTexture(J.__webglTexture), a.memory.textures--), n.remove(B[K]);
    }
    n.remove(C);
  }
  let y = 0;
  function S() {
    y = 0;
  }
  function F() {
    const C = y;
    return C >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + C + " texture units while this GPU supports only " + i.maxTextures), y += 1, C;
  }
  function O(C) {
    const M = [];
    return M.push(C.wrapS), M.push(C.wrapT), M.push(C.wrapR || 0), M.push(C.magFilter), M.push(C.minFilter), M.push(C.anisotropy), M.push(C.internalFormat), M.push(C.format), M.push(C.type), M.push(C.generateMipmaps), M.push(C.premultiplyAlpha), M.push(C.flipY), M.push(C.unpackAlignment), M.push(C.colorSpace), M.join();
  }
  function z(C, M) {
    const B = n.get(C);
    if (C.isVideoTexture && re(C), C.isRenderTargetTexture === !1 && C.version > 0 && B.__version !== C.version) {
      const K = C.image;
      if (K === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (K.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Oe(B, C, M);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, B.__webglTexture, r.TEXTURE0 + M);
  }
  function V(C, M) {
    const B = n.get(C);
    if (C.version > 0 && B.__version !== C.version) {
      Oe(B, C, M);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, B.__webglTexture, r.TEXTURE0 + M);
  }
  function k(C, M) {
    const B = n.get(C);
    if (C.version > 0 && B.__version !== C.version) {
      Oe(B, C, M);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, B.__webglTexture, r.TEXTURE0 + M);
  }
  function Y(C, M) {
    const B = n.get(C);
    if (C.version > 0 && B.__version !== C.version) {
      j(B, C, M);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, B.__webglTexture, r.TEXTURE0 + M);
  }
  const W = {
    [ii]: r.REPEAT,
    [Zt]: r.CLAMP_TO_EDGE,
    [ys]: r.MIRRORED_REPEAT
  }, le = {
    [yt]: r.NEAREST,
    [go]: r.NEAREST_MIPMAP_NEAREST,
    [Ei]: r.NEAREST_MIPMAP_LINEAR,
    [lt]: r.LINEAR,
    [_s]: r.LINEAR_MIPMAP_NEAREST,
    [sn]: r.LINEAR_MIPMAP_LINEAR
  }, oe = {
    [wd]: r.NEVER,
    [Id]: r.ALWAYS,
    [Td]: r.LESS,
    [yl]: r.LEQUAL,
    [Ed]: r.EQUAL,
    [Pd]: r.GEQUAL,
    [Rd]: r.GREATER,
    [Cd]: r.NOTEQUAL
  };
  function pe(C, M) {
    if (M.type === Rt && e.has("OES_texture_float_linear") === !1 && (M.magFilter === lt || M.magFilter === _s || M.magFilter === Ei || M.magFilter === sn || M.minFilter === lt || M.minFilter === _s || M.minFilter === Ei || M.minFilter === sn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), r.texParameteri(C, r.TEXTURE_WRAP_S, W[M.wrapS]), r.texParameteri(C, r.TEXTURE_WRAP_T, W[M.wrapT]), (C === r.TEXTURE_3D || C === r.TEXTURE_2D_ARRAY) && r.texParameteri(C, r.TEXTURE_WRAP_R, W[M.wrapR]), r.texParameteri(C, r.TEXTURE_MAG_FILTER, le[M.magFilter]), r.texParameteri(C, r.TEXTURE_MIN_FILTER, le[M.minFilter]), M.compareFunction && (r.texParameteri(C, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(C, r.TEXTURE_COMPARE_FUNC, oe[M.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (M.magFilter === yt || M.minFilter !== Ei && M.minFilter !== sn || M.type === Rt && e.has("OES_texture_float_linear") === !1) return;
      if (M.anisotropy > 1 || n.get(M).__currentAnisotropy) {
        const B = e.get("EXT_texture_filter_anisotropic");
        r.texParameterf(C, B.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, i.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy;
      }
    }
  }
  function De(C, M) {
    let B = !1;
    C.__webglInit === void 0 && (C.__webglInit = !0, M.addEventListener("dispose", I));
    const K = M.source;
    let Q = d.get(K);
    Q === void 0 && (Q = {}, d.set(K, Q));
    const J = O(M);
    if (J !== C.__cacheKey) {
      Q[J] === void 0 && (Q[J] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, B = !0), Q[J].usedTimes++;
      const Te = Q[C.__cacheKey];
      Te !== void 0 && (Q[C.__cacheKey].usedTimes--, Te.usedTimes === 0 && R(M)), C.__cacheKey = J, C.__webglTexture = Q[J].texture;
    }
    return B;
  }
  function Oe(C, M, B) {
    let K = r.TEXTURE_2D;
    (M.isDataArrayTexture || M.isCompressedArrayTexture) && (K = r.TEXTURE_2D_ARRAY), M.isData3DTexture && (K = r.TEXTURE_3D);
    const Q = De(C, M), J = M.source;
    t.bindTexture(K, C.__webglTexture, r.TEXTURE0 + B);
    const Te = n.get(J);
    if (J.version !== Te.__version || Q === !0) {
      t.activeTexture(r.TEXTURE0 + B);
      const fe = Qe.getPrimaries(Qe.workingColorSpace), ve = M.colorSpace === Nn ? null : Qe.getPrimaries(M.colorSpace), Ke = M.colorSpace === Nn || fe === ve ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, M.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, M.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ke);
      let ae = b(M.image, !1, i.maxTextureSize);
      ae = Re(M, ae);
      const ye = s.convert(M.format, M.colorSpace), Be = s.convert(M.type);
      let ke = x(M.internalFormat, ye, Be, M.colorSpace, M.isVideoTexture);
      pe(K, M);
      let Se;
      const Je = M.mipmaps, Ge = M.isVideoTexture !== !0, at = Te.__version === void 0 || Q === !0, D = J.dataReady, _e = v(M, ae);
      if (M.isDepthTexture)
        ke = _(M.format === Bi, M.type), at && (Ge ? t.texStorage2D(r.TEXTURE_2D, 1, ke, ae.width, ae.height) : t.texImage2D(r.TEXTURE_2D, 0, ke, ae.width, ae.height, 0, ye, Be, null));
      else if (M.isDataTexture)
        if (Je.length > 0) {
          Ge && at && t.texStorage2D(r.TEXTURE_2D, _e, ke, Je[0].width, Je[0].height);
          for (let q = 0, $ = Je.length; q < $; q++)
            Se = Je[q], Ge ? D && t.texSubImage2D(r.TEXTURE_2D, q, 0, 0, Se.width, Se.height, ye, Be, Se.data) : t.texImage2D(r.TEXTURE_2D, q, ke, Se.width, Se.height, 0, ye, Be, Se.data);
          M.generateMipmaps = !1;
        } else
          Ge ? (at && t.texStorage2D(r.TEXTURE_2D, _e, ke, ae.width, ae.height), D && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, ae.width, ae.height, ye, Be, ae.data)) : t.texImage2D(r.TEXTURE_2D, 0, ke, ae.width, ae.height, 0, ye, Be, ae.data);
      else if (M.isCompressedTexture)
        if (M.isCompressedArrayTexture) {
          Ge && at && t.texStorage3D(r.TEXTURE_2D_ARRAY, _e, ke, Je[0].width, Je[0].height, ae.depth);
          for (let q = 0, $ = Je.length; q < $; q++)
            if (Se = Je[q], M.format !== Gt)
              if (ye !== null)
                if (Ge) {
                  if (D)
                    if (M.layerUpdates.size > 0) {
                      const ge = $c(Se.width, Se.height, M.format, M.type);
                      for (const xe of M.layerUpdates) {
                        const $e = Se.data.subarray(
                          xe * ge / Se.data.BYTES_PER_ELEMENT,
                          (xe + 1) * ge / Se.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, q, 0, 0, xe, Se.width, Se.height, 1, ye, $e, 0, 0);
                      }
                      M.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, q, 0, 0, 0, Se.width, Se.height, ae.depth, ye, Se.data, 0, 0);
                } else
                  t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, q, ke, Se.width, Se.height, ae.depth, 0, Se.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Ge ? D && t.texSubImage3D(r.TEXTURE_2D_ARRAY, q, 0, 0, 0, Se.width, Se.height, ae.depth, ye, Be, Se.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, q, ke, Se.width, Se.height, ae.depth, 0, ye, Be, Se.data);
        } else {
          Ge && at && t.texStorage2D(r.TEXTURE_2D, _e, ke, Je[0].width, Je[0].height);
          for (let q = 0, $ = Je.length; q < $; q++)
            Se = Je[q], M.format !== Gt ? ye !== null ? Ge ? D && t.compressedTexSubImage2D(r.TEXTURE_2D, q, 0, 0, Se.width, Se.height, ye, Se.data) : t.compressedTexImage2D(r.TEXTURE_2D, q, ke, Se.width, Se.height, 0, Se.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ge ? D && t.texSubImage2D(r.TEXTURE_2D, q, 0, 0, Se.width, Se.height, ye, Be, Se.data) : t.texImage2D(r.TEXTURE_2D, q, ke, Se.width, Se.height, 0, ye, Be, Se.data);
        }
      else if (M.isDataArrayTexture)
        if (Ge) {
          if (at && t.texStorage3D(r.TEXTURE_2D_ARRAY, _e, ke, ae.width, ae.height, ae.depth), D)
            if (M.layerUpdates.size > 0) {
              const q = $c(ae.width, ae.height, M.format, M.type);
              for (const $ of M.layerUpdates) {
                const ge = ae.data.subarray(
                  $ * q / ae.data.BYTES_PER_ELEMENT,
                  ($ + 1) * q / ae.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, $, ae.width, ae.height, 1, ye, Be, ge);
              }
              M.clearLayerUpdates();
            } else
              t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ae.width, ae.height, ae.depth, ye, Be, ae.data);
        } else
          t.texImage3D(r.TEXTURE_2D_ARRAY, 0, ke, ae.width, ae.height, ae.depth, 0, ye, Be, ae.data);
      else if (M.isData3DTexture)
        Ge ? (at && t.texStorage3D(r.TEXTURE_3D, _e, ke, ae.width, ae.height, ae.depth), D && t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, ae.width, ae.height, ae.depth, ye, Be, ae.data)) : t.texImage3D(r.TEXTURE_3D, 0, ke, ae.width, ae.height, ae.depth, 0, ye, Be, ae.data);
      else if (M.isFramebufferTexture) {
        if (at)
          if (Ge)
            t.texStorage2D(r.TEXTURE_2D, _e, ke, ae.width, ae.height);
          else {
            let q = ae.width, $ = ae.height;
            for (let ge = 0; ge < _e; ge++)
              t.texImage2D(r.TEXTURE_2D, ge, ke, q, $, 0, ye, Be, null), q >>= 1, $ >>= 1;
          }
      } else if (Je.length > 0) {
        if (Ge && at) {
          const q = me(Je[0]);
          t.texStorage2D(r.TEXTURE_2D, _e, ke, q.width, q.height);
        }
        for (let q = 0, $ = Je.length; q < $; q++)
          Se = Je[q], Ge ? D && t.texSubImage2D(r.TEXTURE_2D, q, 0, 0, ye, Be, Se) : t.texImage2D(r.TEXTURE_2D, q, ke, ye, Be, Se);
        M.generateMipmaps = !1;
      } else if (Ge) {
        if (at) {
          const q = me(ae);
          t.texStorage2D(r.TEXTURE_2D, _e, ke, q.width, q.height);
        }
        D && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, ye, Be, ae);
      } else
        t.texImage2D(r.TEXTURE_2D, 0, ke, ye, Be, ae);
      m(M) && p(K), Te.__version = J.version, M.onUpdate && M.onUpdate(M);
    }
    C.__version = M.version;
  }
  function j(C, M, B) {
    if (M.image.length !== 6) return;
    const K = De(C, M), Q = M.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, C.__webglTexture, r.TEXTURE0 + B);
    const J = n.get(Q);
    if (Q.version !== J.__version || K === !0) {
      t.activeTexture(r.TEXTURE0 + B);
      const Te = Qe.getPrimaries(Qe.workingColorSpace), fe = M.colorSpace === Nn ? null : Qe.getPrimaries(M.colorSpace), ve = M.colorSpace === Nn || Te === fe ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, M.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, M.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, ve);
      const Ke = M.isCompressedTexture || M.image[0].isCompressedTexture, ae = M.image[0] && M.image[0].isDataTexture, ye = [];
      for (let $ = 0; $ < 6; $++)
        !Ke && !ae ? ye[$] = b(M.image[$], !0, i.maxCubemapSize) : ye[$] = ae ? M.image[$].image : M.image[$], ye[$] = Re(M, ye[$]);
      const Be = ye[0], ke = s.convert(M.format, M.colorSpace), Se = s.convert(M.type), Je = x(M.internalFormat, ke, Se, M.colorSpace), Ge = M.isVideoTexture !== !0, at = J.__version === void 0 || K === !0, D = Q.dataReady;
      let _e = v(M, Be);
      pe(r.TEXTURE_CUBE_MAP, M);
      let q;
      if (Ke) {
        Ge && at && t.texStorage2D(r.TEXTURE_CUBE_MAP, _e, Je, Be.width, Be.height);
        for (let $ = 0; $ < 6; $++) {
          q = ye[$].mipmaps;
          for (let ge = 0; ge < q.length; ge++) {
            const xe = q[ge];
            M.format !== Gt ? ke !== null ? Ge ? D && t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, ge, 0, 0, xe.width, xe.height, ke, xe.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, ge, Je, xe.width, xe.height, 0, xe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ge ? D && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, ge, 0, 0, xe.width, xe.height, ke, Se, xe.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, ge, Je, xe.width, xe.height, 0, ke, Se, xe.data);
          }
        }
      } else {
        if (q = M.mipmaps, Ge && at) {
          q.length > 0 && _e++;
          const $ = me(ye[0]);
          t.texStorage2D(r.TEXTURE_CUBE_MAP, _e, Je, $.width, $.height);
        }
        for (let $ = 0; $ < 6; $++)
          if (ae) {
            Ge ? D && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, ye[$].width, ye[$].height, ke, Se, ye[$].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, Je, ye[$].width, ye[$].height, 0, ke, Se, ye[$].data);
            for (let ge = 0; ge < q.length; ge++) {
              const $e = q[ge].image[$].image;
              Ge ? D && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, ge + 1, 0, 0, $e.width, $e.height, ke, Se, $e.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, ge + 1, Je, $e.width, $e.height, 0, ke, Se, $e.data);
            }
          } else {
            Ge ? D && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, ke, Se, ye[$]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, Je, ke, Se, ye[$]);
            for (let ge = 0; ge < q.length; ge++) {
              const xe = q[ge];
              Ge ? D && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, ge + 1, 0, 0, ke, Se, xe.image[$]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, ge + 1, Je, ke, Se, xe.image[$]);
            }
          }
      }
      m(M) && p(r.TEXTURE_CUBE_MAP), J.__version = Q.version, M.onUpdate && M.onUpdate(M);
    }
    C.__version = M.version;
  }
  function ie(C, M, B, K, Q, J) {
    const Te = s.convert(B.format, B.colorSpace), fe = s.convert(B.type), ve = x(B.internalFormat, Te, fe, B.colorSpace);
    if (!n.get(M).__hasExternalTextures) {
      const ae = Math.max(1, M.width >> J), ye = Math.max(1, M.height >> J);
      Q === r.TEXTURE_3D || Q === r.TEXTURE_2D_ARRAY ? t.texImage3D(Q, J, ve, ae, ye, M.depth, 0, Te, fe, null) : t.texImage2D(Q, J, ve, ae, ye, 0, Te, fe, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, C), ee(M) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, K, Q, n.get(B).__webglTexture, 0, te(M)) : (Q === r.TEXTURE_2D || Q >= r.TEXTURE_CUBE_MAP_POSITIVE_X && Q <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, K, Q, n.get(B).__webglTexture, J), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Me(C, M, B) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, C), M.depthBuffer) {
      const K = M.depthTexture, Q = K && K.isDepthTexture ? K.type : null, J = _(M.stencilBuffer, Q), Te = M.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, fe = te(M);
      ee(M) ? o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, fe, J, M.width, M.height) : B ? r.renderbufferStorageMultisample(r.RENDERBUFFER, fe, J, M.width, M.height) : r.renderbufferStorage(r.RENDERBUFFER, J, M.width, M.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, Te, r.RENDERBUFFER, C);
    } else {
      const K = M.textures;
      for (let Q = 0; Q < K.length; Q++) {
        const J = K[Q], Te = s.convert(J.format, J.colorSpace), fe = s.convert(J.type), ve = x(J.internalFormat, Te, fe, J.colorSpace), Ke = te(M);
        B && ee(M) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Ke, ve, M.width, M.height) : ee(M) ? o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Ke, ve, M.width, M.height) : r.renderbufferStorage(r.RENDERBUFFER, ve, M.width, M.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function de(C, M) {
    if (M && M.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, C), !(M.depthTexture && M.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), z(M.depthTexture, 0);
    const K = n.get(M.depthTexture).__webglTexture, Q = te(M);
    if (M.depthTexture.format === Di)
      ee(M) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, K, 0, Q) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, K, 0);
    else if (M.depthTexture.format === Bi)
      ee(M) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, K, 0, Q) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, K, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Ue(C) {
    const M = n.get(C), B = C.isWebGLCubeRenderTarget === !0;
    if (M.__boundDepthTexture !== C.depthTexture) {
      const K = C.depthTexture;
      if (M.__depthDisposeCallback && M.__depthDisposeCallback(), K) {
        const Q = () => {
          delete M.__boundDepthTexture, delete M.__depthDisposeCallback, K.removeEventListener("dispose", Q);
        };
        K.addEventListener("dispose", Q), M.__depthDisposeCallback = Q;
      }
      M.__boundDepthTexture = K;
    }
    if (C.depthTexture && !M.__autoAllocateDepthBuffer) {
      if (B) throw new Error("target.depthTexture not supported in Cube render targets");
      de(M.__webglFramebuffer, C);
    } else if (B) {
      M.__webglDepthbuffer = [];
      for (let K = 0; K < 6; K++)
        if (t.bindFramebuffer(r.FRAMEBUFFER, M.__webglFramebuffer[K]), M.__webglDepthbuffer[K] === void 0)
          M.__webglDepthbuffer[K] = r.createRenderbuffer(), Me(M.__webglDepthbuffer[K], C, !1);
        else {
          const Q = C.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, J = M.__webglDepthbuffer[K];
          r.bindRenderbuffer(r.RENDERBUFFER, J), r.framebufferRenderbuffer(r.FRAMEBUFFER, Q, r.RENDERBUFFER, J);
        }
    } else if (t.bindFramebuffer(r.FRAMEBUFFER, M.__webglFramebuffer), M.__webglDepthbuffer === void 0)
      M.__webglDepthbuffer = r.createRenderbuffer(), Me(M.__webglDepthbuffer, C, !1);
    else {
      const K = C.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, Q = M.__webglDepthbuffer;
      r.bindRenderbuffer(r.RENDERBUFFER, Q), r.framebufferRenderbuffer(r.FRAMEBUFFER, K, r.RENDERBUFFER, Q);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Le(C, M, B) {
    const K = n.get(C);
    M !== void 0 && ie(K.__webglFramebuffer, C, C.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), B !== void 0 && Ue(C);
  }
  function ze(C) {
    const M = C.texture, B = n.get(C), K = n.get(M);
    C.addEventListener("dispose", T);
    const Q = C.textures, J = C.isWebGLCubeRenderTarget === !0, Te = Q.length > 1;
    if (Te || (K.__webglTexture === void 0 && (K.__webglTexture = r.createTexture()), K.__version = M.version, a.memory.textures++), J) {
      B.__webglFramebuffer = [];
      for (let fe = 0; fe < 6; fe++)
        if (M.mipmaps && M.mipmaps.length > 0) {
          B.__webglFramebuffer[fe] = [];
          for (let ve = 0; ve < M.mipmaps.length; ve++)
            B.__webglFramebuffer[fe][ve] = r.createFramebuffer();
        } else
          B.__webglFramebuffer[fe] = r.createFramebuffer();
    } else {
      if (M.mipmaps && M.mipmaps.length > 0) {
        B.__webglFramebuffer = [];
        for (let fe = 0; fe < M.mipmaps.length; fe++)
          B.__webglFramebuffer[fe] = r.createFramebuffer();
      } else
        B.__webglFramebuffer = r.createFramebuffer();
      if (Te)
        for (let fe = 0, ve = Q.length; fe < ve; fe++) {
          const Ke = n.get(Q[fe]);
          Ke.__webglTexture === void 0 && (Ke.__webglTexture = r.createTexture(), a.memory.textures++);
        }
      if (C.samples > 0 && ee(C) === !1) {
        B.__webglMultisampledFramebuffer = r.createFramebuffer(), B.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, B.__webglMultisampledFramebuffer);
        for (let fe = 0; fe < Q.length; fe++) {
          const ve = Q[fe];
          B.__webglColorRenderbuffer[fe] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, B.__webglColorRenderbuffer[fe]);
          const Ke = s.convert(ve.format, ve.colorSpace), ae = s.convert(ve.type), ye = x(ve.internalFormat, Ke, ae, ve.colorSpace, C.isXRRenderTarget === !0), Be = te(C);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, Be, ye, C.width, C.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + fe, r.RENDERBUFFER, B.__webglColorRenderbuffer[fe]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), C.depthBuffer && (B.__webglDepthRenderbuffer = r.createRenderbuffer(), Me(B.__webglDepthRenderbuffer, C, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (J) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, K.__webglTexture), pe(r.TEXTURE_CUBE_MAP, M);
      for (let fe = 0; fe < 6; fe++)
        if (M.mipmaps && M.mipmaps.length > 0)
          for (let ve = 0; ve < M.mipmaps.length; ve++)
            ie(B.__webglFramebuffer[fe][ve], C, M, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + fe, ve);
        else
          ie(B.__webglFramebuffer[fe], C, M, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + fe, 0);
      m(M) && p(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Te) {
      for (let fe = 0, ve = Q.length; fe < ve; fe++) {
        const Ke = Q[fe], ae = n.get(Ke);
        t.bindTexture(r.TEXTURE_2D, ae.__webglTexture), pe(r.TEXTURE_2D, Ke), ie(B.__webglFramebuffer, C, Ke, r.COLOR_ATTACHMENT0 + fe, r.TEXTURE_2D, 0), m(Ke) && p(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let fe = r.TEXTURE_2D;
      if ((C.isWebGL3DRenderTarget || C.isWebGLArrayRenderTarget) && (fe = C.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY), t.bindTexture(fe, K.__webglTexture), pe(fe, M), M.mipmaps && M.mipmaps.length > 0)
        for (let ve = 0; ve < M.mipmaps.length; ve++)
          ie(B.__webglFramebuffer[ve], C, M, r.COLOR_ATTACHMENT0, fe, ve);
      else
        ie(B.__webglFramebuffer, C, M, r.COLOR_ATTACHMENT0, fe, 0);
      m(M) && p(fe), t.unbindTexture();
    }
    C.depthBuffer && Ue(C);
  }
  function se(C) {
    const M = C.textures;
    for (let B = 0, K = M.length; B < K; B++) {
      const Q = M[B];
      if (m(Q)) {
        const J = C.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, Te = n.get(Q).__webglTexture;
        t.bindTexture(J, Te), p(J), t.unbindTexture();
      }
    }
  }
  const X = [], E = [];
  function ne(C) {
    if (C.samples > 0) {
      if (ee(C) === !1) {
        const M = C.textures, B = C.width, K = C.height;
        let Q = r.COLOR_BUFFER_BIT;
        const J = C.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, Te = n.get(C), fe = M.length > 1;
        if (fe)
          for (let ve = 0; ve < M.length; ve++)
            t.bindFramebuffer(r.FRAMEBUFFER, Te.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ve, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, Te.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ve, r.TEXTURE_2D, null, 0);
        t.bindFramebuffer(r.READ_FRAMEBUFFER, Te.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Te.__webglFramebuffer);
        for (let ve = 0; ve < M.length; ve++) {
          if (C.resolveDepthBuffer && (C.depthBuffer && (Q |= r.DEPTH_BUFFER_BIT), C.stencilBuffer && C.resolveStencilBuffer && (Q |= r.STENCIL_BUFFER_BIT)), fe) {
            r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, Te.__webglColorRenderbuffer[ve]);
            const Ke = n.get(M[ve]).__webglTexture;
            r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, Ke, 0);
          }
          r.blitFramebuffer(0, 0, B, K, 0, 0, B, K, Q, r.NEAREST), c === !0 && (X.length = 0, E.length = 0, X.push(r.COLOR_ATTACHMENT0 + ve), C.depthBuffer && C.resolveDepthBuffer === !1 && (X.push(J), E.push(J), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, E)), r.invalidateFramebuffer(r.READ_FRAMEBUFFER, X));
        }
        if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), fe)
          for (let ve = 0; ve < M.length; ve++) {
            t.bindFramebuffer(r.FRAMEBUFFER, Te.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ve, r.RENDERBUFFER, Te.__webglColorRenderbuffer[ve]);
            const Ke = n.get(M[ve]).__webglTexture;
            t.bindFramebuffer(r.FRAMEBUFFER, Te.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ve, r.TEXTURE_2D, Ke, 0);
          }
        t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Te.__webglMultisampledFramebuffer);
      } else if (C.depthBuffer && C.resolveDepthBuffer === !1 && c) {
        const M = C.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT;
        r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [M]);
      }
    }
  }
  function te(C) {
    return Math.min(i.maxSamples, C.samples);
  }
  function ee(C) {
    const M = n.get(C);
    return C.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1;
  }
  function re(C) {
    const M = a.render.frame;
    h.get(C) !== M && (h.set(C, M), C.update());
  }
  function Re(C, M) {
    const B = C.colorSpace, K = C.format, Q = C.type;
    return C.isCompressedTexture === !0 || C.isVideoTexture === !0 || B !== St && B !== Nn && (Qe.getTransfer(B) === ot ? (K !== Gt || Q !== wn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", B)), M;
  }
  function me(C) {
    return typeof HTMLImageElement < "u" && C instanceof HTMLImageElement ? (l.width = C.naturalWidth || C.width, l.height = C.naturalHeight || C.height) : typeof VideoFrame < "u" && C instanceof VideoFrame ? (l.width = C.displayWidth, l.height = C.displayHeight) : (l.width = C.width, l.height = C.height), l;
  }
  this.allocateTextureUnit = F, this.resetTextureUnits = S, this.setTexture2D = z, this.setTexture2DArray = V, this.setTexture3D = k, this.setTextureCube = Y, this.rebindTextures = Le, this.setupRenderTarget = ze, this.updateRenderTargetMipmap = se, this.updateMultisampleRenderTarget = ne, this.setupDepthRenderbuffer = Ue, this.setupFrameBufferTexture = ie, this.useMultisampledRTT = ee;
}
function qd(r, e) {
  function t(n, i = Nn) {
    let s;
    const a = Qe.getTransfer(i);
    if (n === wn) return r.UNSIGNED_BYTE;
    if (n === _o) return r.UNSIGNED_SHORT_4_4_4_4;
    if (n === xo) return r.UNSIGNED_SHORT_5_5_5_1;
    if (n === dl) return r.UNSIGNED_INT_5_9_9_9_REV;
    if (n === hl) return r.BYTE;
    if (n === ul) return r.SHORT;
    if (n === Ms) return r.UNSIGNED_SHORT;
    if (n === bo) return r.INT;
    if (n === Gn) return r.UNSIGNED_INT;
    if (n === Rt) return r.FLOAT;
    if (n === vn) return r.HALF_FLOAT;
    if (n === fl) return r.ALPHA;
    if (n === pl) return r.RGB;
    if (n === Gt) return r.RGBA;
    if (n === ml) return r.LUMINANCE;
    if (n === gl) return r.LUMINANCE_ALPHA;
    if (n === Di) return r.DEPTH_COMPONENT;
    if (n === Bi) return r.DEPTH_STENCIL;
    if (n === vo) return r.RED;
    if (n === vr) return r.RED_INTEGER;
    if (n === bl) return r.RG;
    if (n === yo) return r.RG_INTEGER;
    if (n === Mo) return r.RGBA_INTEGER;
    if (n === Js || n === Zs || n === Qs || n === $s)
      if (a === ot)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === Js) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Zs) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Qs) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === $s) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === Js) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Zs) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Qs) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === $s) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === Oa || n === Ba || n === ka || n === za)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === Oa) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Ba) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === ka) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === za) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Ga || n === Ha || n === Va)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === Ga || n === Ha) return a === ot ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === Va) return a === ot ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === Wa || n === Xa || n === qa || n === Ya || n === ja || n === Ka || n === Ja || n === Za || n === Qa || n === $a || n === eo || n === to || n === no || n === io)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === Wa) return a === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Xa) return a === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === qa) return a === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Ya) return a === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === ja) return a === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Ka) return a === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Ja) return a === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Za) return a === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Qa) return a === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === $a) return a === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === eo) return a === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === to) return a === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === no) return a === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === io) return a === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === er || n === so || n === ro)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === er) return a === ot ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === so) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === ro) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === _l || n === ao || n === oo || n === co)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === er) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === ao) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === oo) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === co) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === Oi ? r.UNSIGNED_INT_24_8 : r[n] !== void 0 ? r[n] : null;
  }
  return { convert: t };
}
class Yd extends vt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class rn extends je {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const J0 = { type: "move" };
class Tc {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new rn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new rn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new P(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new P()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new rn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new P(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new P()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const b of e.hand.values()) {
          const m = t.getJointPose(b, n), p = this._getHandJoint(l, b);
          m !== null && (p.matrix.fromArray(m.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = m.radius), p.visible = m !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = 0.02, g = 5e-3;
        l.inputState.pinching && d > f + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= f - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(J0)));
    }
    return o !== null && (o.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new rn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Z0 = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Q0 = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class $0 {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new ht(), s = e.properties.get(i);
      s.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new pn({
        vertexShader: Z0,
        fragmentShader: Q0,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new qe(new Wi(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class ex extends Tn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, a = null, o = "local-floor", c = 1, l = null, h = null, u = null, d = null, f = null, g = null;
    const b = new $0(), m = t.getContextAttributes();
    let p = null, x = null;
    const _ = [], v = [], I = new Z();
    let T = null;
    const w = new vt();
    w.layers.enable(1), w.viewport = new et();
    const R = new vt();
    R.layers.enable(2), R.viewport = new et();
    const L = [w, R], y = new Yd();
    y.layers.enable(1), y.layers.enable(2);
    let S = null, F = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(j) {
      let ie = _[j];
      return ie === void 0 && (ie = new Tc(), _[j] = ie), ie.getTargetRaySpace();
    }, this.getControllerGrip = function(j) {
      let ie = _[j];
      return ie === void 0 && (ie = new Tc(), _[j] = ie), ie.getGripSpace();
    }, this.getHand = function(j) {
      let ie = _[j];
      return ie === void 0 && (ie = new Tc(), _[j] = ie), ie.getHandSpace();
    };
    function O(j) {
      const ie = v.indexOf(j.inputSource);
      if (ie === -1)
        return;
      const Me = _[ie];
      Me !== void 0 && (Me.update(j.inputSource, j.frame, l || a), Me.dispatchEvent({ type: j.type, data: j.inputSource }));
    }
    function z() {
      i.removeEventListener("select", O), i.removeEventListener("selectstart", O), i.removeEventListener("selectend", O), i.removeEventListener("squeeze", O), i.removeEventListener("squeezestart", O), i.removeEventListener("squeezeend", O), i.removeEventListener("end", z), i.removeEventListener("inputsourceschange", V);
      for (let j = 0; j < _.length; j++) {
        const ie = v[j];
        ie !== null && (v[j] = null, _[j].disconnect(ie));
      }
      S = null, F = null, b.reset(), e.setRenderTarget(p), f = null, d = null, u = null, i = null, x = null, Oe.stop(), n.isPresenting = !1, e.setPixelRatio(T), e.setSize(I.width, I.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(j) {
      s = j, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(j) {
      o = j, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(j) {
      l = j;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(j) {
      if (i = j, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", O), i.addEventListener("selectstart", O), i.addEventListener("selectend", O), i.addEventListener("squeeze", O), i.addEventListener("squeezestart", O), i.addEventListener("squeezeend", O), i.addEventListener("end", z), i.addEventListener("inputsourceschange", V), m.xrCompatible !== !0 && await t.makeXRCompatible(), T = e.getPixelRatio(), e.getSize(I), i.renderState.layers === void 0) {
          const ie = {
            antialias: m.antialias,
            alpha: !0,
            depth: m.depth,
            stencil: m.stencil,
            framebufferScaleFactor: s
          };
          f = new XRWebGLLayer(i, t, ie), i.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, !1), x = new fn(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: Gt,
              type: wn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: m.stencil
            }
          );
        } else {
          let ie = null, Me = null, de = null;
          m.depth && (de = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ie = m.stencil ? Bi : Di, Me = m.stencil ? Oi : Gn);
          const Ue = {
            colorFormat: t.RGBA8,
            depthFormat: de,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(Ue), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), x = new fn(
            d.textureWidth,
            d.textureHeight,
            {
              format: Gt,
              type: wn,
              depthTexture: new El(d.textureWidth, d.textureHeight, Me, void 0, void 0, void 0, void 0, void 0, void 0, ie),
              stencilBuffer: m.stencil,
              colorSpace: e.outputColorSpace,
              samples: m.antialias ? 4 : 0,
              resolveDepthBuffer: d.ignoreDepthValues === !1
            }
          );
        }
        x.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await i.requestReferenceSpace(o), Oe.setContext(i), Oe.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return b.getDepthTexture();
    };
    function V(j) {
      for (let ie = 0; ie < j.removed.length; ie++) {
        const Me = j.removed[ie], de = v.indexOf(Me);
        de >= 0 && (v[de] = null, _[de].disconnect(Me));
      }
      for (let ie = 0; ie < j.added.length; ie++) {
        const Me = j.added[ie];
        let de = v.indexOf(Me);
        if (de === -1) {
          for (let Le = 0; Le < _.length; Le++)
            if (Le >= v.length) {
              v.push(Me), de = Le;
              break;
            } else if (v[Le] === null) {
              v[Le] = Me, de = Le;
              break;
            }
          if (de === -1) break;
        }
        const Ue = _[de];
        Ue && Ue.connect(Me);
      }
    }
    const k = new P(), Y = new P();
    function W(j, ie, Me) {
      k.setFromMatrixPosition(ie.matrixWorld), Y.setFromMatrixPosition(Me.matrixWorld);
      const de = k.distanceTo(Y), Ue = ie.projectionMatrix.elements, Le = Me.projectionMatrix.elements, ze = Ue[14] / (Ue[10] - 1), se = Ue[14] / (Ue[10] + 1), X = (Ue[9] + 1) / Ue[5], E = (Ue[9] - 1) / Ue[5], ne = (Ue[8] - 1) / Ue[0], te = (Le[8] + 1) / Le[0], ee = ze * ne, re = ze * te, Re = de / (-ne + te), me = Re * -ne;
      if (ie.matrixWorld.decompose(j.position, j.quaternion, j.scale), j.translateX(me), j.translateZ(Re), j.matrixWorld.compose(j.position, j.quaternion, j.scale), j.matrixWorldInverse.copy(j.matrixWorld).invert(), Ue[10] === -1)
        j.projectionMatrix.copy(ie.projectionMatrix), j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);
      else {
        const C = ze + Re, M = se + Re, B = ee - me, K = re + (de - me), Q = X * se / M * C, J = E * se / M * C;
        j.projectionMatrix.makePerspective(B, K, Q, J, C, M), j.projectionMatrixInverse.copy(j.projectionMatrix).invert();
      }
    }
    function le(j, ie) {
      ie === null ? j.matrixWorld.copy(j.matrix) : j.matrixWorld.multiplyMatrices(ie.matrixWorld, j.matrix), j.matrixWorldInverse.copy(j.matrixWorld).invert();
    }
    this.updateCamera = function(j) {
      if (i === null) return;
      let ie = j.near, Me = j.far;
      b.texture !== null && (b.depthNear > 0 && (ie = b.depthNear), b.depthFar > 0 && (Me = b.depthFar)), y.near = R.near = w.near = ie, y.far = R.far = w.far = Me, (S !== y.near || F !== y.far) && (i.updateRenderState({
        depthNear: y.near,
        depthFar: y.far
      }), S = y.near, F = y.far);
      const de = j.parent, Ue = y.cameras;
      le(y, de);
      for (let Le = 0; Le < Ue.length; Le++)
        le(Ue[Le], de);
      Ue.length === 2 ? W(y, w, R) : y.projectionMatrix.copy(w.projectionMatrix), oe(j, y, de);
    };
    function oe(j, ie, Me) {
      Me === null ? j.matrix.copy(ie.matrixWorld) : (j.matrix.copy(Me.matrixWorld), j.matrix.invert(), j.matrix.multiply(ie.matrixWorld)), j.matrix.decompose(j.position, j.quaternion, j.scale), j.updateMatrixWorld(!0), j.projectionMatrix.copy(ie.projectionMatrix), j.projectionMatrixInverse.copy(ie.projectionMatrixInverse), j.isPerspectiveCamera && (j.fov = ws * 2 * Math.atan(1 / j.projectionMatrix.elements[5]), j.zoom = 1);
    }
    this.getCamera = function() {
      return y;
    }, this.getFoveation = function() {
      if (!(d === null && f === null))
        return c;
    }, this.setFoveation = function(j) {
      c = j, d !== null && (d.fixedFoveation = j), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = j);
    }, this.hasDepthSensing = function() {
      return b.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return b.getMesh(y);
    };
    let pe = null;
    function De(j, ie) {
      if (h = ie.getViewerPose(l || a), g = ie, h !== null) {
        const Me = h.views;
        f !== null && (e.setRenderTargetFramebuffer(x, f.framebuffer), e.setRenderTarget(x));
        let de = !1;
        Me.length !== y.cameras.length && (y.cameras.length = 0, de = !0);
        for (let Le = 0; Le < Me.length; Le++) {
          const ze = Me[Le];
          let se = null;
          if (f !== null)
            se = f.getViewport(ze);
          else {
            const E = u.getViewSubImage(d, ze);
            se = E.viewport, Le === 0 && (e.setRenderTargetTextures(
              x,
              E.colorTexture,
              d.ignoreDepthValues ? void 0 : E.depthStencilTexture
            ), e.setRenderTarget(x));
          }
          let X = L[Le];
          X === void 0 && (X = new vt(), X.layers.enable(Le), X.viewport = new et(), L[Le] = X), X.matrix.fromArray(ze.transform.matrix), X.matrix.decompose(X.position, X.quaternion, X.scale), X.projectionMatrix.fromArray(ze.projectionMatrix), X.projectionMatrixInverse.copy(X.projectionMatrix).invert(), X.viewport.set(se.x, se.y, se.width, se.height), Le === 0 && (y.matrix.copy(X.matrix), y.matrix.decompose(y.position, y.quaternion, y.scale)), de === !0 && y.cameras.push(X);
        }
        const Ue = i.enabledFeatures;
        if (Ue && Ue.includes("depth-sensing")) {
          const Le = u.getDepthInformation(Me[0]);
          Le && Le.isValid && Le.texture && b.init(e, Le, i.renderState);
        }
      }
      for (let Me = 0; Me < _.length; Me++) {
        const de = v[Me], Ue = _[Me];
        de !== null && Ue !== void 0 && Ue.update(de, ie, l || a);
      }
      pe && pe(j, ie), ie.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ie }), g = null;
    }
    const Oe = new Gd();
    Oe.setAnimationLoop(De), this.setAnimationLoop = function(j) {
      pe = j;
    }, this.dispose = function() {
    };
  }
}
const gi = /* @__PURE__ */ new $t(), tx = /* @__PURE__ */ new Ie();
function nx(r, e) {
  function t(m, p) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix);
  }
  function n(m, p) {
    p.color.getRGB(m.fogColor.value, Od(r)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function i(m, p, x, _, v) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? s(m, p) : p.isMeshToonMaterial ? (s(m, p), u(m, p)) : p.isMeshPhongMaterial ? (s(m, p), h(m, p)) : p.isMeshStandardMaterial ? (s(m, p), d(m, p), p.isMeshPhysicalMaterial && f(m, p, v)) : p.isMeshMatcapMaterial ? (s(m, p), g(m, p)) : p.isMeshDepthMaterial ? s(m, p) : p.isMeshDistanceMaterial ? (s(m, p), b(m, p)) : p.isMeshNormalMaterial ? s(m, p) : p.isLineBasicMaterial ? (a(m, p), p.isLineDashedMaterial && o(m, p)) : p.isPointsMaterial ? c(m, p, x, _) : p.isSpriteMaterial ? l(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function s(m, p) {
    m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, t(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === Ut && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, t(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === Ut && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, t(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, t(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const x = e.get(p), _ = x.envMap, v = x.envMapRotation;
    _ && (m.envMap.value = _, gi.copy(v), gi.x *= -1, gi.y *= -1, gi.z *= -1, _.isCubeTexture && _.isRenderTargetTexture === !1 && (gi.y *= -1, gi.z *= -1), m.envMapRotation.value.setFromMatrix4(tx.makeRotationFromEuler(gi)), m.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap && (m.lightMap.value = p.lightMap, m.lightMapIntensity.value = p.lightMapIntensity, t(p.lightMap, m.lightMapTransform)), p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, m.aoMapTransform));
  }
  function a(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, p.map && (m.map.value = p.map, t(p.map, m.mapTransform));
  }
  function o(m, p) {
    m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale;
  }
  function c(m, p, x, _) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * x, m.scale.value = _ * 0.5, p.map && (m.map.value = p.map, t(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function l(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function h(m, p) {
    m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function d(m, p) {
    m.metalness.value = p.metalness, p.metalnessMap && (m.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, m.metalnessMapTransform)), m.roughness.value = p.roughness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, m.roughnessMapTransform)), p.envMap && (m.envMapIntensity.value = p.envMapIntensity);
  }
  function f(m, p, x) {
    m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === Ut && m.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (m.dispersion.value = p.dispersion), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = x.texture, m.transmissionSamplerSize.value.set(x.width, x.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function b(m, p) {
    const x = e.get(p).light;
    m.referencePosition.value.setFromMatrixPosition(x.matrixWorld), m.nearDistance.value = x.shadow.camera.near, m.farDistance.value = x.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function ix(r, e, t, n) {
  let i = {}, s = {}, a = [];
  const o = r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(x, _) {
    const v = _.program;
    n.uniformBlockBinding(x, v);
  }
  function l(x, _) {
    let v = i[x.id];
    v === void 0 && (g(x), v = h(x), i[x.id] = v, x.addEventListener("dispose", m));
    const I = _.program;
    n.updateUBOMapping(x, I);
    const T = e.render.frame;
    s[x.id] !== T && (d(x), s[x.id] = T);
  }
  function h(x) {
    const _ = u();
    x.__bindingPointIndex = _;
    const v = r.createBuffer(), I = x.__size, T = x.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, v), r.bufferData(r.UNIFORM_BUFFER, I, T), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, _, v), v;
  }
  function u() {
    for (let x = 0; x < o; x++)
      if (a.indexOf(x) === -1)
        return a.push(x), x;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(x) {
    const _ = i[x.id], v = x.uniforms, I = x.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, _);
    for (let T = 0, w = v.length; T < w; T++) {
      const R = Array.isArray(v[T]) ? v[T] : [v[T]];
      for (let L = 0, y = R.length; L < y; L++) {
        const S = R[L];
        if (f(S, T, L, I) === !0) {
          const F = S.__offset, O = Array.isArray(S.value) ? S.value : [S.value];
          let z = 0;
          for (let V = 0; V < O.length; V++) {
            const k = O[V], Y = b(k);
            typeof k == "number" || typeof k == "boolean" ? (S.__data[0] = k, r.bufferSubData(r.UNIFORM_BUFFER, F + z, S.__data)) : k.isMatrix3 ? (S.__data[0] = k.elements[0], S.__data[1] = k.elements[1], S.__data[2] = k.elements[2], S.__data[3] = 0, S.__data[4] = k.elements[3], S.__data[5] = k.elements[4], S.__data[6] = k.elements[5], S.__data[7] = 0, S.__data[8] = k.elements[6], S.__data[9] = k.elements[7], S.__data[10] = k.elements[8], S.__data[11] = 0) : (k.toArray(S.__data, z), z += Y.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          r.bufferSubData(r.UNIFORM_BUFFER, F, S.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function f(x, _, v, I) {
    const T = x.value, w = _ + "_" + v;
    if (I[w] === void 0)
      return typeof T == "number" || typeof T == "boolean" ? I[w] = T : I[w] = T.clone(), !0;
    {
      const R = I[w];
      if (typeof T == "number" || typeof T == "boolean") {
        if (R !== T)
          return I[w] = T, !0;
      } else if (R.equals(T) === !1)
        return R.copy(T), !0;
    }
    return !1;
  }
  function g(x) {
    const _ = x.uniforms;
    let v = 0;
    const I = 16;
    for (let w = 0, R = _.length; w < R; w++) {
      const L = Array.isArray(_[w]) ? _[w] : [_[w]];
      for (let y = 0, S = L.length; y < S; y++) {
        const F = L[y], O = Array.isArray(F.value) ? F.value : [F.value];
        for (let z = 0, V = O.length; z < V; z++) {
          const k = O[z], Y = b(k), W = v % I, le = W % Y.boundary, oe = W + le;
          v += le, oe !== 0 && I - oe < Y.storage && (v += I - oe), F.__data = new Float32Array(Y.storage / Float32Array.BYTES_PER_ELEMENT), F.__offset = v, v += Y.storage;
        }
      }
    }
    const T = v % I;
    return T > 0 && (v += I - T), x.__size = v, x.__cache = {}, this;
  }
  function b(x) {
    const _ = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof x == "number" || typeof x == "boolean" ? (_.boundary = 4, _.storage = 4) : x.isVector2 ? (_.boundary = 8, _.storage = 8) : x.isVector3 || x.isColor ? (_.boundary = 16, _.storage = 12) : x.isVector4 ? (_.boundary = 16, _.storage = 16) : x.isMatrix3 ? (_.boundary = 48, _.storage = 48) : x.isMatrix4 ? (_.boundary = 64, _.storage = 64) : x.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", x), _;
  }
  function m(x) {
    const _ = x.target;
    _.removeEventListener("dispose", m);
    const v = a.indexOf(_.__bindingPointIndex);
    a.splice(v, 1), r.deleteBuffer(i[_.id]), delete i[_.id], delete s[_.id];
  }
  function p() {
    for (const x in i)
      r.deleteBuffer(i[x]);
    a = [], i = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: p
  };
}
class jd {
  constructor(e = {}) {
    const {
      canvas: t = Dd(),
      context: n = null,
      depth: i = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      d = n.getContextAttributes().alpha;
    } else
      d = a;
    const f = new Uint32Array(4), g = new Int32Array(4);
    let b = null, m = null;
    const p = [], x = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = xt, this.toneMapping = kn, this.toneMappingExposure = 1;
    const _ = this;
    let v = !1, I = 0, T = 0, w = null, R = -1, L = null;
    const y = new et(), S = new et();
    let F = null;
    const O = new ue(0);
    let z = 0, V = t.width, k = t.height, Y = 1, W = null, le = null;
    const oe = new et(0, 0, V, k), pe = new et(0, 0, V, k);
    let De = !1;
    const Oe = new Sr();
    let j = !1, ie = !1;
    const Me = new Ie(), de = new Ie(), Ue = new P(), Le = new et(), ze = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let se = !1;
    function X() {
      return w === null ? Y : 1;
    }
    let E = n;
    function ne(A, U) {
      return t.getContext(A, U);
    }
    try {
      const A = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r169"), t.addEventListener("webglcontextlost", $, !1), t.addEventListener("webglcontextrestored", ge, !1), t.addEventListener("webglcontextcreationerror", xe, !1), E === null) {
        const U = "webgl2";
        if (E = ne(U, A), E === null)
          throw ne(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (A) {
      throw console.error("THREE.WebGLRenderer: " + A.message), A;
    }
    let te, ee, re, Re, me, C, M, B, K, Q, J, Te, fe, ve, Ke, ae, ye, Be, ke, Se, Je, Ge, at, D;
    function _e() {
      te = new l_(E), te.init(), Ge = new qd(E, te), ee = new i_(E, te, e, Ge), re = new V0(E), ee.reverseDepthBuffer && re.buffers.depth.setReversed(!0), Re = new d_(E), me = new P0(), C = new K0(E, te, re, me, ee, Ge, Re), M = new r_(_), B = new c_(_), K = new xm(E), at = new t_(E, K), Q = new h_(E, K, Re, at), J = new p_(E, Q, K, Re), ke = new f_(E, ee, C), ae = new s_(me), Te = new C0(_, M, B, te, ee, at, ae), fe = new nx(_, me), ve = new L0(), Ke = new B0(te), Be = new e_(_, M, B, re, J, d, c), ye = new G0(_, J, ee), D = new ix(E, Re, ee, re), Se = new n_(E, te, Re), Je = new u_(E, te, Re), Re.programs = Te.programs, _.capabilities = ee, _.extensions = te, _.properties = me, _.renderLists = ve, _.shadowMap = ye, _.state = re, _.info = Re;
    }
    _e();
    const q = new ex(_, E);
    this.xr = q, this.getContext = function() {
      return E;
    }, this.getContextAttributes = function() {
      return E.getContextAttributes();
    }, this.forceContextLoss = function() {
      const A = te.get("WEBGL_lose_context");
      A && A.loseContext();
    }, this.forceContextRestore = function() {
      const A = te.get("WEBGL_lose_context");
      A && A.restoreContext();
    }, this.getPixelRatio = function() {
      return Y;
    }, this.setPixelRatio = function(A) {
      A !== void 0 && (Y = A, this.setSize(V, k, !1));
    }, this.getSize = function(A) {
      return A.set(V, k);
    }, this.setSize = function(A, U, G = !0) {
      if (q.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      V = A, k = U, t.width = Math.floor(A * Y), t.height = Math.floor(U * Y), G === !0 && (t.style.width = A + "px", t.style.height = U + "px"), this.setViewport(0, 0, A, U);
    }, this.getDrawingBufferSize = function(A) {
      return A.set(V * Y, k * Y).floor();
    }, this.setDrawingBufferSize = function(A, U, G) {
      V = A, k = U, Y = G, t.width = Math.floor(A * G), t.height = Math.floor(U * G), this.setViewport(0, 0, A, U);
    }, this.getCurrentViewport = function(A) {
      return A.copy(y);
    }, this.getViewport = function(A) {
      return A.copy(oe);
    }, this.setViewport = function(A, U, G, H) {
      A.isVector4 ? oe.set(A.x, A.y, A.z, A.w) : oe.set(A, U, G, H), re.viewport(y.copy(oe).multiplyScalar(Y).round());
    }, this.getScissor = function(A) {
      return A.copy(pe);
    }, this.setScissor = function(A, U, G, H) {
      A.isVector4 ? pe.set(A.x, A.y, A.z, A.w) : pe.set(A, U, G, H), re.scissor(S.copy(pe).multiplyScalar(Y).round());
    }, this.getScissorTest = function() {
      return De;
    }, this.setScissorTest = function(A) {
      re.setScissorTest(De = A);
    }, this.setOpaqueSort = function(A) {
      W = A;
    }, this.setTransparentSort = function(A) {
      le = A;
    }, this.getClearColor = function(A) {
      return A.copy(Be.getClearColor());
    }, this.setClearColor = function() {
      Be.setClearColor.apply(Be, arguments);
    }, this.getClearAlpha = function() {
      return Be.getClearAlpha();
    }, this.setClearAlpha = function() {
      Be.setClearAlpha.apply(Be, arguments);
    }, this.clear = function(A = !0, U = !0, G = !0) {
      let H = 0;
      if (A) {
        let N = !1;
        if (w !== null) {
          const ce = w.texture.format;
          N = ce === Mo || ce === yo || ce === vr;
        }
        if (N) {
          const ce = w.texture.type, be = ce === wn || ce === Gn || ce === Ms || ce === Oi || ce === _o || ce === xo, Ae = Be.getClearColor(), Ee = Be.getClearAlpha(), Ne = Ae.r, Fe = Ae.g, Ce = Ae.b;
          be ? (f[0] = Ne, f[1] = Fe, f[2] = Ce, f[3] = Ee, E.clearBufferuiv(E.COLOR, 0, f)) : (g[0] = Ne, g[1] = Fe, g[2] = Ce, g[3] = Ee, E.clearBufferiv(E.COLOR, 0, g));
        } else
          H |= E.COLOR_BUFFER_BIT;
      }
      U && (H |= E.DEPTH_BUFFER_BIT, E.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), G && (H |= E.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), E.clear(H);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", $, !1), t.removeEventListener("webglcontextrestored", ge, !1), t.removeEventListener("webglcontextcreationerror", xe, !1), ve.dispose(), Ke.dispose(), me.dispose(), M.dispose(), B.dispose(), J.dispose(), at.dispose(), D.dispose(), Te.dispose(), q.dispose(), q.removeEventListener("sessionstart", Ql), q.removeEventListener("sessionend", $l), hi.stop();
    };
    function $(A) {
      A.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), v = !0;
    }
    function ge() {
      console.log("THREE.WebGLRenderer: Context Restored."), v = !1;
      const A = Re.autoReset, U = ye.enabled, G = ye.autoUpdate, H = ye.needsUpdate, N = ye.type;
      _e(), Re.autoReset = A, ye.enabled = U, ye.autoUpdate = G, ye.needsUpdate = H, ye.type = N;
    }
    function xe(A) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", A.statusMessage);
    }
    function $e(A) {
      const U = A.target;
      U.removeEventListener("dispose", $e), bt(U);
    }
    function bt(A) {
      Vt(A), me.remove(A);
    }
    function Vt(A) {
      const U = me.get(A).programs;
      U !== void 0 && (U.forEach(function(G) {
        Te.releaseProgram(G);
      }), A.isShaderMaterial && Te.releaseShaderCache(A));
    }
    this.renderBufferDirect = function(A, U, G, H, N, ce) {
      U === null && (U = ze);
      const be = N.isMesh && N.matrixWorld.determinant() < 0, Ae = Hf(A, U, G, H, N);
      re.setMaterial(H, be);
      let Ee = G.index, Ne = 1;
      if (H.wireframe === !0) {
        if (Ee = Q.getWireframeAttribute(G), Ee === void 0) return;
        Ne = 2;
      }
      const Fe = G.drawRange, Ce = G.attributes.position;
      let rt = Fe.start * Ne, ct = (Fe.start + Fe.count) * Ne;
      ce !== null && (rt = Math.max(rt, ce.start * Ne), ct = Math.min(ct, (ce.start + ce.count) * Ne)), Ee !== null ? (rt = Math.max(rt, 0), ct = Math.min(ct, Ee.count)) : Ce != null && (rt = Math.max(rt, 0), ct = Math.min(ct, Ce.count));
      const dt = ct - rt;
      if (dt < 0 || dt === 1 / 0) return;
      at.setup(N, H, Ae, G, Ee);
      let Yt, it = Se;
      if (Ee !== null && (Yt = K.get(Ee), it = Je, it.setIndex(Yt)), N.isMesh)
        H.wireframe === !0 ? (re.setLineWidth(H.wireframeLinewidth * X()), it.setMode(E.LINES)) : it.setMode(E.TRIANGLES);
      else if (N.isLine) {
        let Pe = H.linewidth;
        Pe === void 0 && (Pe = 1), re.setLineWidth(Pe * X()), N.isLineSegments ? it.setMode(E.LINES) : N.isLineLoop ? it.setMode(E.LINE_LOOP) : it.setMode(E.LINE_STRIP);
      } else N.isPoints ? it.setMode(E.POINTS) : N.isSprite && it.setMode(E.TRIANGLES);
      if (N.isBatchedMesh)
        if (N._multiDrawInstances !== null)
          it.renderMultiDrawInstances(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount, N._multiDrawInstances);
        else if (te.get("WEBGL_multi_draw"))
          it.renderMultiDraw(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount);
        else {
          const Pe = N._multiDrawStarts, Et = N._multiDrawCounts, st = N._multiDrawCount, on = Ee ? K.get(Ee).bytesPerElement : 1, ji = me.get(H).currentProgram.getUniforms();
          for (let jt = 0; jt < st; jt++)
            ji.setValue(E, "_gl_DrawID", jt), it.render(Pe[jt] / on, Et[jt]);
        }
      else if (N.isInstancedMesh)
        it.renderInstances(rt, dt, N.count);
      else if (G.isInstancedBufferGeometry) {
        const Pe = G._maxInstanceCount !== void 0 ? G._maxInstanceCount : 1 / 0, Et = Math.min(G.instanceCount, Pe);
        it.renderInstances(rt, dt, Et);
      } else
        it.render(rt, dt);
    };
    function tt(A, U, G) {
      A.transparent === !0 && A.side === dn && A.forceSinglePass === !1 ? (A.side = Ut, A.needsUpdate = !0, Lr(A, U, G), A.side = An, A.needsUpdate = !0, Lr(A, U, G), A.side = dn) : Lr(A, U, G);
    }
    this.compile = function(A, U, G = null) {
      G === null && (G = A), m = Ke.get(G), m.init(U), x.push(m), G.traverseVisible(function(N) {
        N.isLight && N.layers.test(U.layers) && (m.pushLight(N), N.castShadow && m.pushShadow(N));
      }), A !== G && A.traverseVisible(function(N) {
        N.isLight && N.layers.test(U.layers) && (m.pushLight(N), N.castShadow && m.pushShadow(N));
      }), m.setupLights();
      const H = /* @__PURE__ */ new Set();
      return A.traverse(function(N) {
        if (!(N.isMesh || N.isPoints || N.isLine || N.isSprite))
          return;
        const ce = N.material;
        if (ce)
          if (Array.isArray(ce))
            for (let be = 0; be < ce.length; be++) {
              const Ae = ce[be];
              tt(Ae, G, N), H.add(Ae);
            }
          else
            tt(ce, G, N), H.add(ce);
      }), x.pop(), m = null, H;
    }, this.compileAsync = function(A, U, G = null) {
      const H = this.compile(A, U, G);
      return new Promise((N) => {
        function ce() {
          if (H.forEach(function(be) {
            me.get(be).currentProgram.isReady() && H.delete(be);
          }), H.size === 0) {
            N(A);
            return;
          }
          setTimeout(ce, 10);
        }
        te.get("KHR_parallel_shader_compile") !== null ? ce() : setTimeout(ce, 10);
      });
    };
    let Wt = null;
    function En(A) {
      Wt && Wt(A);
    }
    function Ql() {
      hi.stop();
    }
    function $l() {
      hi.start();
    }
    const hi = new Gd();
    hi.setAnimationLoop(En), typeof self < "u" && hi.setContext(self), this.setAnimationLoop = function(A) {
      Wt = A, q.setAnimationLoop(A), A === null ? hi.stop() : hi.start();
    }, q.addEventListener("sessionstart", Ql), q.addEventListener("sessionend", $l), this.render = function(A, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (v === !0) return;
      if (A.matrixWorldAutoUpdate === !0 && A.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), q.enabled === !0 && q.isPresenting === !0 && (q.cameraAutoUpdate === !0 && q.updateCamera(U), U = q.getCamera()), A.isScene === !0 && A.onBeforeRender(_, A, U, w), m = Ke.get(A, x.length), m.init(U), x.push(m), de.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), Oe.setFromProjectionMatrix(de), ie = this.localClippingEnabled, j = ae.init(this.clippingPlanes, ie), b = ve.get(A, p.length), b.init(), p.push(b), q.enabled === !0 && q.isPresenting === !0) {
        const ce = _.xr.getDepthSensingMesh();
        ce !== null && Ko(ce, U, -1 / 0, _.sortObjects);
      }
      Ko(A, U, 0, _.sortObjects), b.finish(), _.sortObjects === !0 && b.sort(W, le), se = q.enabled === !1 || q.isPresenting === !1 || q.hasDepthSensing() === !1, se && Be.addToRenderList(b, A), this.info.render.frame++, j === !0 && ae.beginShadows();
      const G = m.state.shadowsArray;
      ye.render(G, A, U), j === !0 && ae.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const H = b.opaque, N = b.transmissive;
      if (m.setupLights(), U.isArrayCamera) {
        const ce = U.cameras;
        if (N.length > 0)
          for (let be = 0, Ae = ce.length; be < Ae; be++) {
            const Ee = ce[be];
            th(H, N, A, Ee);
          }
        se && Be.render(A);
        for (let be = 0, Ae = ce.length; be < Ae; be++) {
          const Ee = ce[be];
          eh(b, A, Ee, Ee.viewport);
        }
      } else
        N.length > 0 && th(H, N, A, U), se && Be.render(A), eh(b, A, U);
      w !== null && (C.updateMultisampleRenderTarget(w), C.updateRenderTargetMipmap(w)), A.isScene === !0 && A.onAfterRender(_, A, U), at.resetDefaultState(), R = -1, L = null, x.pop(), x.length > 0 ? (m = x[x.length - 1], j === !0 && ae.setGlobalState(_.clippingPlanes, m.state.camera)) : m = null, p.pop(), p.length > 0 ? b = p[p.length - 1] : b = null;
    };
    function Ko(A, U, G, H) {
      if (A.visible === !1) return;
      if (A.layers.test(U.layers)) {
        if (A.isGroup)
          G = A.renderOrder;
        else if (A.isLOD)
          A.autoUpdate === !0 && A.update(U);
        else if (A.isLight)
          m.pushLight(A), A.castShadow && m.pushShadow(A);
        else if (A.isSprite) {
          if (!A.frustumCulled || Oe.intersectsSprite(A)) {
            H && Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);
            const be = J.update(A), Ae = A.material;
            Ae.visible && b.push(A, be, Ae, G, Le.z, null);
          }
        } else if ((A.isMesh || A.isLine || A.isPoints) && (!A.frustumCulled || Oe.intersectsObject(A))) {
          const be = J.update(A), Ae = A.material;
          if (H && (A.boundingSphere !== void 0 ? (A.boundingSphere === null && A.computeBoundingSphere(), Le.copy(A.boundingSphere.center)) : (be.boundingSphere === null && be.computeBoundingSphere(), Le.copy(be.boundingSphere.center)), Le.applyMatrix4(A.matrixWorld).applyMatrix4(de)), Array.isArray(Ae)) {
            const Ee = be.groups;
            for (let Ne = 0, Fe = Ee.length; Ne < Fe; Ne++) {
              const Ce = Ee[Ne], rt = Ae[Ce.materialIndex];
              rt && rt.visible && b.push(A, be, rt, G, Le.z, Ce);
            }
          } else Ae.visible && b.push(A, be, Ae, G, Le.z, null);
        }
      }
      const ce = A.children;
      for (let be = 0, Ae = ce.length; be < Ae; be++)
        Ko(ce[be], U, G, H);
    }
    function eh(A, U, G, H) {
      const N = A.opaque, ce = A.transmissive, be = A.transparent;
      m.setupLightsView(G), j === !0 && ae.setGlobalState(_.clippingPlanes, G), H && re.viewport(y.copy(H)), N.length > 0 && Ir(N, U, G), ce.length > 0 && Ir(ce, U, G), be.length > 0 && Ir(be, U, G), re.buffers.depth.setTest(!0), re.buffers.depth.setMask(!0), re.buffers.color.setMask(!0), re.setPolygonOffset(!1);
    }
    function th(A, U, G, H) {
      if ((G.isScene === !0 ? G.overrideMaterial : null) !== null)
        return;
      m.state.transmissionRenderTarget[H.id] === void 0 && (m.state.transmissionRenderTarget[H.id] = new fn(1, 1, {
        generateMipmaps: !0,
        type: te.has("EXT_color_buffer_half_float") || te.has("EXT_color_buffer_float") ? vn : wn,
        minFilter: sn,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Qe.workingColorSpace
      }));
      const ce = m.state.transmissionRenderTarget[H.id], be = H.viewport || y;
      ce.setSize(be.z, be.w);
      const Ae = _.getRenderTarget();
      _.setRenderTarget(ce), _.getClearColor(O), z = _.getClearAlpha(), z < 1 && _.setClearColor(16777215, 0.5), _.clear(), se && Be.render(G);
      const Ee = _.toneMapping;
      _.toneMapping = kn;
      const Ne = H.viewport;
      if (H.viewport !== void 0 && (H.viewport = void 0), m.setupLightsView(H), j === !0 && ae.setGlobalState(_.clippingPlanes, H), Ir(A, G, H), C.updateMultisampleRenderTarget(ce), C.updateRenderTargetMipmap(ce), te.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Fe = !1;
        for (let Ce = 0, rt = U.length; Ce < rt; Ce++) {
          const ct = U[Ce], dt = ct.object, Yt = ct.geometry, it = ct.material, Pe = ct.group;
          if (it.side === dn && dt.layers.test(H.layers)) {
            const Et = it.side;
            it.side = Ut, it.needsUpdate = !0, nh(dt, G, H, Yt, it, Pe), it.side = Et, it.needsUpdate = !0, Fe = !0;
          }
        }
        Fe === !0 && (C.updateMultisampleRenderTarget(ce), C.updateRenderTargetMipmap(ce));
      }
      _.setRenderTarget(Ae), _.setClearColor(O, z), Ne !== void 0 && (H.viewport = Ne), _.toneMapping = Ee;
    }
    function Ir(A, U, G) {
      const H = U.isScene === !0 ? U.overrideMaterial : null;
      for (let N = 0, ce = A.length; N < ce; N++) {
        const be = A[N], Ae = be.object, Ee = be.geometry, Ne = H === null ? be.material : H, Fe = be.group;
        Ae.layers.test(G.layers) && nh(Ae, U, G, Ee, Ne, Fe);
      }
    }
    function nh(A, U, G, H, N, ce) {
      A.onBeforeRender(_, U, G, H, N, ce), A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, A.matrixWorld), A.normalMatrix.getNormalMatrix(A.modelViewMatrix), N.onBeforeRender(_, U, G, H, A, ce), N.transparent === !0 && N.side === dn && N.forceSinglePass === !1 ? (N.side = Ut, N.needsUpdate = !0, _.renderBufferDirect(G, U, H, N, A, ce), N.side = An, N.needsUpdate = !0, _.renderBufferDirect(G, U, H, N, A, ce), N.side = dn) : _.renderBufferDirect(G, U, H, N, A, ce), A.onAfterRender(_, U, G, H, N, ce);
    }
    function Lr(A, U, G) {
      U.isScene !== !0 && (U = ze);
      const H = me.get(A), N = m.state.lights, ce = m.state.shadowsArray, be = N.state.version, Ae = Te.getParameters(A, N.state, ce, U, G), Ee = Te.getProgramCacheKey(Ae);
      let Ne = H.programs;
      H.environment = A.isMeshStandardMaterial ? U.environment : null, H.fog = U.fog, H.envMap = (A.isMeshStandardMaterial ? B : M).get(A.envMap || H.environment), H.envMapRotation = H.environment !== null && A.envMap === null ? U.environmentRotation : A.envMapRotation, Ne === void 0 && (A.addEventListener("dispose", $e), Ne = /* @__PURE__ */ new Map(), H.programs = Ne);
      let Fe = Ne.get(Ee);
      if (Fe !== void 0) {
        if (H.currentProgram === Fe && H.lightsStateVersion === be)
          return sh(A, Ae), Fe;
      } else
        Ae.uniforms = Te.getUniforms(A), A.onBeforeCompile(Ae, _), Fe = Te.acquireProgram(Ae, Ee), Ne.set(Ee, Fe), H.uniforms = Ae.uniforms;
      const Ce = H.uniforms;
      return (!A.isShaderMaterial && !A.isRawShaderMaterial || A.clipping === !0) && (Ce.clippingPlanes = ae.uniform), sh(A, Ae), H.needsLights = Wf(A), H.lightsStateVersion = be, H.needsLights && (Ce.ambientLightColor.value = N.state.ambient, Ce.lightProbe.value = N.state.probe, Ce.directionalLights.value = N.state.directional, Ce.directionalLightShadows.value = N.state.directionalShadow, Ce.spotLights.value = N.state.spot, Ce.spotLightShadows.value = N.state.spotShadow, Ce.rectAreaLights.value = N.state.rectArea, Ce.ltc_1.value = N.state.rectAreaLTC1, Ce.ltc_2.value = N.state.rectAreaLTC2, Ce.pointLights.value = N.state.point, Ce.pointLightShadows.value = N.state.pointShadow, Ce.hemisphereLights.value = N.state.hemi, Ce.directionalShadowMap.value = N.state.directionalShadowMap, Ce.directionalShadowMatrix.value = N.state.directionalShadowMatrix, Ce.spotShadowMap.value = N.state.spotShadowMap, Ce.spotLightMatrix.value = N.state.spotLightMatrix, Ce.spotLightMap.value = N.state.spotLightMap, Ce.pointShadowMap.value = N.state.pointShadowMap, Ce.pointShadowMatrix.value = N.state.pointShadowMatrix), H.currentProgram = Fe, H.uniformsList = null, Fe;
    }
    function ih(A) {
      if (A.uniformsList === null) {
        const U = A.currentProgram.getUniforms();
        A.uniformsList = Ta.seqWithValue(U.seq, A.uniforms);
      }
      return A.uniformsList;
    }
    function sh(A, U) {
      const G = me.get(A);
      G.outputColorSpace = U.outputColorSpace, G.batching = U.batching, G.batchingColor = U.batchingColor, G.instancing = U.instancing, G.instancingColor = U.instancingColor, G.instancingMorph = U.instancingMorph, G.skinning = U.skinning, G.morphTargets = U.morphTargets, G.morphNormals = U.morphNormals, G.morphColors = U.morphColors, G.morphTargetsCount = U.morphTargetsCount, G.numClippingPlanes = U.numClippingPlanes, G.numIntersection = U.numClipIntersection, G.vertexAlphas = U.vertexAlphas, G.vertexTangents = U.vertexTangents, G.toneMapping = U.toneMapping;
    }
    function Hf(A, U, G, H, N) {
      U.isScene !== !0 && (U = ze), C.resetTextureUnits();
      const ce = U.fog, be = H.isMeshStandardMaterial ? U.environment : null, Ae = w === null ? _.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : St, Ee = (H.isMeshStandardMaterial ? B : M).get(H.envMap || be), Ne = H.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4, Fe = !!G.attributes.tangent && (!!H.normalMap || H.anisotropy > 0), Ce = !!G.morphAttributes.position, rt = !!G.morphAttributes.normal, ct = !!G.morphAttributes.color;
      let dt = kn;
      H.toneMapped && (w === null || w.isXRRenderTarget === !0) && (dt = _.toneMapping);
      const Yt = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, it = Yt !== void 0 ? Yt.length : 0, Pe = me.get(H), Et = m.state.lights;
      if (j === !0 && (ie === !0 || A !== L)) {
        const en = A === L && H.id === R;
        ae.setState(H, A, en);
      }
      let st = !1;
      H.version === Pe.__version ? (Pe.needsLights && Pe.lightsStateVersion !== Et.state.version || Pe.outputColorSpace !== Ae || N.isBatchedMesh && Pe.batching === !1 || !N.isBatchedMesh && Pe.batching === !0 || N.isBatchedMesh && Pe.batchingColor === !0 && N.colorTexture === null || N.isBatchedMesh && Pe.batchingColor === !1 && N.colorTexture !== null || N.isInstancedMesh && Pe.instancing === !1 || !N.isInstancedMesh && Pe.instancing === !0 || N.isSkinnedMesh && Pe.skinning === !1 || !N.isSkinnedMesh && Pe.skinning === !0 || N.isInstancedMesh && Pe.instancingColor === !0 && N.instanceColor === null || N.isInstancedMesh && Pe.instancingColor === !1 && N.instanceColor !== null || N.isInstancedMesh && Pe.instancingMorph === !0 && N.morphTexture === null || N.isInstancedMesh && Pe.instancingMorph === !1 && N.morphTexture !== null || Pe.envMap !== Ee || H.fog === !0 && Pe.fog !== ce || Pe.numClippingPlanes !== void 0 && (Pe.numClippingPlanes !== ae.numPlanes || Pe.numIntersection !== ae.numIntersection) || Pe.vertexAlphas !== Ne || Pe.vertexTangents !== Fe || Pe.morphTargets !== Ce || Pe.morphNormals !== rt || Pe.morphColors !== ct || Pe.toneMapping !== dt || Pe.morphTargetsCount !== it) && (st = !0) : (st = !0, Pe.__version = H.version);
      let on = Pe.currentProgram;
      st === !0 && (on = Lr(H, U, N));
      let ji = !1, jt = !1, Jo = !1;
      const mt = on.getUniforms(), Vn = Pe.uniforms;
      if (re.useProgram(on.program) && (ji = !0, jt = !0, Jo = !0), H.id !== R && (R = H.id, jt = !0), ji || L !== A) {
        ee.reverseDepthBuffer ? (Me.copy(A.projectionMatrix), Wp(Me), Xp(Me), mt.setValue(E, "projectionMatrix", Me)) : mt.setValue(E, "projectionMatrix", A.projectionMatrix), mt.setValue(E, "viewMatrix", A.matrixWorldInverse);
        const en = mt.map.cameraPosition;
        en !== void 0 && en.setValue(E, Ue.setFromMatrixPosition(A.matrixWorld)), ee.logarithmicDepthBuffer && mt.setValue(
          E,
          "logDepthBufFC",
          2 / (Math.log(A.far + 1) / Math.LN2)
        ), (H.isMeshPhongMaterial || H.isMeshToonMaterial || H.isMeshLambertMaterial || H.isMeshBasicMaterial || H.isMeshStandardMaterial || H.isShaderMaterial) && mt.setValue(E, "isOrthographic", A.isOrthographicCamera === !0), L !== A && (L = A, jt = !0, Jo = !0);
      }
      if (N.isSkinnedMesh) {
        mt.setOptional(E, N, "bindMatrix"), mt.setOptional(E, N, "bindMatrixInverse");
        const en = N.skeleton;
        en && (en.boneTexture === null && en.computeBoneTexture(), mt.setValue(E, "boneTexture", en.boneTexture, C));
      }
      N.isBatchedMesh && (mt.setOptional(E, N, "batchingTexture"), mt.setValue(E, "batchingTexture", N._matricesTexture, C), mt.setOptional(E, N, "batchingIdTexture"), mt.setValue(E, "batchingIdTexture", N._indirectTexture, C), mt.setOptional(E, N, "batchingColorTexture"), N._colorsTexture !== null && mt.setValue(E, "batchingColorTexture", N._colorsTexture, C));
      const Zo = G.morphAttributes;
      if ((Zo.position !== void 0 || Zo.normal !== void 0 || Zo.color !== void 0) && ke.update(N, G, on), (jt || Pe.receiveShadow !== N.receiveShadow) && (Pe.receiveShadow = N.receiveShadow, mt.setValue(E, "receiveShadow", N.receiveShadow)), H.isMeshGouraudMaterial && H.envMap !== null && (Vn.envMap.value = Ee, Vn.flipEnvMap.value = Ee.isCubeTexture && Ee.isRenderTargetTexture === !1 ? -1 : 1), H.isMeshStandardMaterial && H.envMap === null && U.environment !== null && (Vn.envMapIntensity.value = U.environmentIntensity), jt && (mt.setValue(E, "toneMappingExposure", _.toneMappingExposure), Pe.needsLights && Vf(Vn, Jo), ce && H.fog === !0 && fe.refreshFogUniforms(Vn, ce), fe.refreshMaterialUniforms(Vn, H, Y, k, m.state.transmissionRenderTarget[A.id]), Ta.upload(E, ih(Pe), Vn, C)), H.isShaderMaterial && H.uniformsNeedUpdate === !0 && (Ta.upload(E, ih(Pe), Vn, C), H.uniformsNeedUpdate = !1), H.isSpriteMaterial && mt.setValue(E, "center", N.center), mt.setValue(E, "modelViewMatrix", N.modelViewMatrix), mt.setValue(E, "normalMatrix", N.normalMatrix), mt.setValue(E, "modelMatrix", N.matrixWorld), H.isShaderMaterial || H.isRawShaderMaterial) {
        const en = H.uniformsGroups;
        for (let Qo = 0, Xf = en.length; Qo < Xf; Qo++) {
          const rh = en[Qo];
          D.update(rh, on), D.bind(rh, on);
        }
      }
      return on;
    }
    function Vf(A, U) {
      A.ambientLightColor.needsUpdate = U, A.lightProbe.needsUpdate = U, A.directionalLights.needsUpdate = U, A.directionalLightShadows.needsUpdate = U, A.pointLights.needsUpdate = U, A.pointLightShadows.needsUpdate = U, A.spotLights.needsUpdate = U, A.spotLightShadows.needsUpdate = U, A.rectAreaLights.needsUpdate = U, A.hemisphereLights.needsUpdate = U;
    }
    function Wf(A) {
      return A.isMeshLambertMaterial || A.isMeshToonMaterial || A.isMeshPhongMaterial || A.isMeshStandardMaterial || A.isShadowMaterial || A.isShaderMaterial && A.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return I;
    }, this.getActiveMipmapLevel = function() {
      return T;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(A, U, G) {
      me.get(A.texture).__webglTexture = U, me.get(A.depthTexture).__webglTexture = G;
      const H = me.get(A);
      H.__hasExternalTextures = !0, H.__autoAllocateDepthBuffer = G === void 0, H.__autoAllocateDepthBuffer || te.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), H.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(A, U) {
      const G = me.get(A);
      G.__webglFramebuffer = U, G.__useDefaultFramebuffer = U === void 0;
    }, this.setRenderTarget = function(A, U = 0, G = 0) {
      w = A, I = U, T = G;
      let H = !0, N = null, ce = !1, be = !1;
      if (A) {
        const Ee = me.get(A);
        if (Ee.__useDefaultFramebuffer !== void 0)
          re.bindFramebuffer(E.FRAMEBUFFER, null), H = !1;
        else if (Ee.__webglFramebuffer === void 0)
          C.setupRenderTarget(A);
        else if (Ee.__hasExternalTextures)
          C.rebindTextures(A, me.get(A.texture).__webglTexture, me.get(A.depthTexture).__webglTexture);
        else if (A.depthBuffer) {
          const Ce = A.depthTexture;
          if (Ee.__boundDepthTexture !== Ce) {
            if (Ce !== null && me.has(Ce) && (A.width !== Ce.image.width || A.height !== Ce.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            C.setupDepthRenderbuffer(A);
          }
        }
        const Ne = A.texture;
        (Ne.isData3DTexture || Ne.isDataArrayTexture || Ne.isCompressedArrayTexture) && (be = !0);
        const Fe = me.get(A).__webglFramebuffer;
        A.isWebGLCubeRenderTarget ? (Array.isArray(Fe[U]) ? N = Fe[U][G] : N = Fe[U], ce = !0) : A.samples > 0 && C.useMultisampledRTT(A) === !1 ? N = me.get(A).__webglMultisampledFramebuffer : Array.isArray(Fe) ? N = Fe[G] : N = Fe, y.copy(A.viewport), S.copy(A.scissor), F = A.scissorTest;
      } else
        y.copy(oe).multiplyScalar(Y).floor(), S.copy(pe).multiplyScalar(Y).floor(), F = De;
      if (re.bindFramebuffer(E.FRAMEBUFFER, N) && H && re.drawBuffers(A, N), re.viewport(y), re.scissor(S), re.setScissorTest(F), ce) {
        const Ee = me.get(A.texture);
        E.framebufferTexture2D(E.FRAMEBUFFER, E.COLOR_ATTACHMENT0, E.TEXTURE_CUBE_MAP_POSITIVE_X + U, Ee.__webglTexture, G);
      } else if (be) {
        const Ee = me.get(A.texture), Ne = U || 0;
        E.framebufferTextureLayer(E.FRAMEBUFFER, E.COLOR_ATTACHMENT0, Ee.__webglTexture, G || 0, Ne);
      }
      R = -1;
    }, this.readRenderTargetPixels = function(A, U, G, H, N, ce, be) {
      if (!(A && A.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Ae = me.get(A).__webglFramebuffer;
      if (A.isWebGLCubeRenderTarget && be !== void 0 && (Ae = Ae[be]), Ae) {
        re.bindFramebuffer(E.FRAMEBUFFER, Ae);
        try {
          const Ee = A.texture, Ne = Ee.format, Fe = Ee.type;
          if (!ee.textureFormatReadable(Ne)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!ee.textureTypeReadable(Fe)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= A.width - H && G >= 0 && G <= A.height - N && E.readPixels(U, G, H, N, Ge.convert(Ne), Ge.convert(Fe), ce);
        } finally {
          const Ee = w !== null ? me.get(w).__webglFramebuffer : null;
          re.bindFramebuffer(E.FRAMEBUFFER, Ee);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(A, U, G, H, N, ce, be) {
      if (!(A && A.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Ae = me.get(A).__webglFramebuffer;
      if (A.isWebGLCubeRenderTarget && be !== void 0 && (Ae = Ae[be]), Ae) {
        const Ee = A.texture, Ne = Ee.format, Fe = Ee.type;
        if (!ee.textureFormatReadable(Ne))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!ee.textureTypeReadable(Fe))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (U >= 0 && U <= A.width - H && G >= 0 && G <= A.height - N) {
          re.bindFramebuffer(E.FRAMEBUFFER, Ae);
          const Ce = E.createBuffer();
          E.bindBuffer(E.PIXEL_PACK_BUFFER, Ce), E.bufferData(E.PIXEL_PACK_BUFFER, ce.byteLength, E.STREAM_READ), E.readPixels(U, G, H, N, Ge.convert(Ne), Ge.convert(Fe), 0);
          const rt = w !== null ? me.get(w).__webglFramebuffer : null;
          re.bindFramebuffer(E.FRAMEBUFFER, rt);
          const ct = E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return E.flush(), await Vp(E, ct, 4), E.bindBuffer(E.PIXEL_PACK_BUFFER, Ce), E.getBufferSubData(E.PIXEL_PACK_BUFFER, 0, ce), E.deleteBuffer(Ce), E.deleteSync(ct), ce;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(A, U = null, G = 0) {
      A.isTexture !== !0 && (wa("WebGLRenderer: copyFramebufferToTexture function signature has changed."), U = arguments[0] || null, A = arguments[1]);
      const H = Math.pow(2, -G), N = Math.floor(A.image.width * H), ce = Math.floor(A.image.height * H), be = U !== null ? U.x : 0, Ae = U !== null ? U.y : 0;
      C.setTexture2D(A, 0), E.copyTexSubImage2D(E.TEXTURE_2D, G, 0, 0, be, Ae, N, ce), re.unbindTexture();
    }, this.copyTextureToTexture = function(A, U, G = null, H = null, N = 0) {
      A.isTexture !== !0 && (wa("WebGLRenderer: copyTextureToTexture function signature has changed."), H = arguments[0] || null, A = arguments[1], U = arguments[2], N = arguments[3] || 0, G = null);
      let ce, be, Ae, Ee, Ne, Fe;
      G !== null ? (ce = G.max.x - G.min.x, be = G.max.y - G.min.y, Ae = G.min.x, Ee = G.min.y) : (ce = A.image.width, be = A.image.height, Ae = 0, Ee = 0), H !== null ? (Ne = H.x, Fe = H.y) : (Ne = 0, Fe = 0);
      const Ce = Ge.convert(U.format), rt = Ge.convert(U.type);
      C.setTexture2D(U, 0), E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL, U.flipY), E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), E.pixelStorei(E.UNPACK_ALIGNMENT, U.unpackAlignment);
      const ct = E.getParameter(E.UNPACK_ROW_LENGTH), dt = E.getParameter(E.UNPACK_IMAGE_HEIGHT), Yt = E.getParameter(E.UNPACK_SKIP_PIXELS), it = E.getParameter(E.UNPACK_SKIP_ROWS), Pe = E.getParameter(E.UNPACK_SKIP_IMAGES), Et = A.isCompressedTexture ? A.mipmaps[N] : A.image;
      E.pixelStorei(E.UNPACK_ROW_LENGTH, Et.width), E.pixelStorei(E.UNPACK_IMAGE_HEIGHT, Et.height), E.pixelStorei(E.UNPACK_SKIP_PIXELS, Ae), E.pixelStorei(E.UNPACK_SKIP_ROWS, Ee), A.isDataTexture ? E.texSubImage2D(E.TEXTURE_2D, N, Ne, Fe, ce, be, Ce, rt, Et.data) : A.isCompressedTexture ? E.compressedTexSubImage2D(E.TEXTURE_2D, N, Ne, Fe, Et.width, Et.height, Ce, Et.data) : E.texSubImage2D(E.TEXTURE_2D, N, Ne, Fe, ce, be, Ce, rt, Et), E.pixelStorei(E.UNPACK_ROW_LENGTH, ct), E.pixelStorei(E.UNPACK_IMAGE_HEIGHT, dt), E.pixelStorei(E.UNPACK_SKIP_PIXELS, Yt), E.pixelStorei(E.UNPACK_SKIP_ROWS, it), E.pixelStorei(E.UNPACK_SKIP_IMAGES, Pe), N === 0 && U.generateMipmaps && E.generateMipmap(E.TEXTURE_2D), re.unbindTexture();
    }, this.copyTextureToTexture3D = function(A, U, G = null, H = null, N = 0) {
      A.isTexture !== !0 && (wa("WebGLRenderer: copyTextureToTexture3D function signature has changed."), G = arguments[0] || null, H = arguments[1] || null, A = arguments[2], U = arguments[3], N = arguments[4] || 0);
      let ce, be, Ae, Ee, Ne, Fe, Ce, rt, ct;
      const dt = A.isCompressedTexture ? A.mipmaps[N] : A.image;
      G !== null ? (ce = G.max.x - G.min.x, be = G.max.y - G.min.y, Ae = G.max.z - G.min.z, Ee = G.min.x, Ne = G.min.y, Fe = G.min.z) : (ce = dt.width, be = dt.height, Ae = dt.depth, Ee = 0, Ne = 0, Fe = 0), H !== null ? (Ce = H.x, rt = H.y, ct = H.z) : (Ce = 0, rt = 0, ct = 0);
      const Yt = Ge.convert(U.format), it = Ge.convert(U.type);
      let Pe;
      if (U.isData3DTexture)
        C.setTexture3D(U, 0), Pe = E.TEXTURE_3D;
      else if (U.isDataArrayTexture || U.isCompressedArrayTexture)
        C.setTexture2DArray(U, 0), Pe = E.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL, U.flipY), E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), E.pixelStorei(E.UNPACK_ALIGNMENT, U.unpackAlignment);
      const Et = E.getParameter(E.UNPACK_ROW_LENGTH), st = E.getParameter(E.UNPACK_IMAGE_HEIGHT), on = E.getParameter(E.UNPACK_SKIP_PIXELS), ji = E.getParameter(E.UNPACK_SKIP_ROWS), jt = E.getParameter(E.UNPACK_SKIP_IMAGES);
      E.pixelStorei(E.UNPACK_ROW_LENGTH, dt.width), E.pixelStorei(E.UNPACK_IMAGE_HEIGHT, dt.height), E.pixelStorei(E.UNPACK_SKIP_PIXELS, Ee), E.pixelStorei(E.UNPACK_SKIP_ROWS, Ne), E.pixelStorei(E.UNPACK_SKIP_IMAGES, Fe), A.isDataTexture || A.isData3DTexture ? E.texSubImage3D(Pe, N, Ce, rt, ct, ce, be, Ae, Yt, it, dt.data) : U.isCompressedArrayTexture ? E.compressedTexSubImage3D(Pe, N, Ce, rt, ct, ce, be, Ae, Yt, dt.data) : E.texSubImage3D(Pe, N, Ce, rt, ct, ce, be, Ae, Yt, it, dt), E.pixelStorei(E.UNPACK_ROW_LENGTH, Et), E.pixelStorei(E.UNPACK_IMAGE_HEIGHT, st), E.pixelStorei(E.UNPACK_SKIP_PIXELS, on), E.pixelStorei(E.UNPACK_SKIP_ROWS, ji), E.pixelStorei(E.UNPACK_SKIP_IMAGES, jt), N === 0 && U.generateMipmaps && E.generateMipmap(Pe), re.unbindTexture();
    }, this.initRenderTarget = function(A) {
      me.get(A).__webglFramebuffer === void 0 && C.setupRenderTarget(A);
    }, this.initTexture = function(A) {
      A.isCubeTexture ? C.setTextureCube(A, 0) : A.isData3DTexture ? C.setTexture3D(A, 0) : A.isDataArrayTexture || A.isCompressedArrayTexture ? C.setTexture2DArray(A, 0) : C.setTexture2D(A, 0), re.unbindTexture();
    }, this.resetState = function() {
      I = 0, T = 0, w = null, re.reset(), at.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return yn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === Ao ? "display-p3" : "srgb", t.unpackColorSpace = Qe.workingColorSpace === yr ? "display-p3" : "srgb";
  }
}
class Co {
  constructor(e, t = 25e-5) {
    this.isFogExp2 = !0, this.name = "", this.color = new ue(e), this.density = t;
  }
  clone() {
    return new Co(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      name: this.name,
      color: this.color.getHex(),
      density: this.density
    };
  }
}
class Po {
  constructor(e, t = 1, n = 1e3) {
    this.isFog = !0, this.name = "", this.color = new ue(e), this.near = t, this.far = n;
  }
  clone() {
    return new Po(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      name: this.name,
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
}
class Io extends je {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new $t(), this.environmentIntensity = 1, this.environmentRotation = new $t(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class wr {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = hr, this.updateRanges = [], this.version = 0, this.uuid = Qt();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Qt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Qt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Bt = /* @__PURE__ */ new P();
class si {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Bt.fromBufferAttribute(this, t), Bt.applyMatrix4(e), this.setXYZ(t, Bt.x, Bt.y, Bt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Bt.fromBufferAttribute(this, t), Bt.applyNormalMatrix(e), this.setXYZ(t, Bt.x, Bt.y, Bt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Bt.fromBufferAttribute(this, t), Bt.transformDirection(e), this.setXYZ(t, Bt.x, Bt.y, Bt.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = zt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Ve(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ve(t, this.array), n = Ve(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ve(t, this.array), n = Ve(n, this.array), i = Ve(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ve(t, this.array), n = Ve(n, this.array), i = Ve(i, this.array), s = Ve(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new nt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new si(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
class Pl extends Mt {
  constructor(e) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new ue(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let cs;
const Bs = /* @__PURE__ */ new P(), ls = /* @__PURE__ */ new P(), hs = /* @__PURE__ */ new P(), us = /* @__PURE__ */ new Z(), ks = /* @__PURE__ */ new Z(), Kd = /* @__PURE__ */ new Ie(), $r = /* @__PURE__ */ new P(), zs = /* @__PURE__ */ new P(), ea = /* @__PURE__ */ new P(), qh = /* @__PURE__ */ new Z(), Ec = /* @__PURE__ */ new Z(), Yh = /* @__PURE__ */ new Z();
class Jd extends je {
  constructor(e = new Pl()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", cs === void 0) {
      cs = new Xe();
      const t = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new wr(t, 5);
      cs.setIndex([0, 1, 2, 0, 2, 3]), cs.setAttribute("position", new si(n, 3, 0, !1)), cs.setAttribute("uv", new si(n, 2, 3, !1));
    }
    this.geometry = cs, this.material = e, this.center = new Z(0.5, 0.5);
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), ls.setFromMatrixScale(this.matrixWorld), Kd.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), hs.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && ls.multiplyScalar(-hs.z);
    const n = this.material.rotation;
    let i, s;
    n !== 0 && (s = Math.cos(n), i = Math.sin(n));
    const a = this.center;
    ta($r.set(-0.5, -0.5, 0), hs, a, ls, i, s), ta(zs.set(0.5, -0.5, 0), hs, a, ls, i, s), ta(ea.set(0.5, 0.5, 0), hs, a, ls, i, s), qh.set(0, 0), Ec.set(1, 0), Yh.set(1, 1);
    let o = e.ray.intersectTriangle($r, zs, ea, !1, Bs);
    if (o === null && (ta(zs.set(-0.5, 0.5, 0), hs, a, ls, i, s), Ec.set(0, 1), o = e.ray.intersectTriangle($r, ea, zs, !1, Bs), o === null))
      return;
    const c = e.ray.origin.distanceTo(Bs);
    c < e.near || c > e.far || t.push({
      distance: c,
      point: Bs.clone(),
      uv: qt.getInterpolation(Bs, $r, zs, ea, qh, Ec, Yh, new Z()),
      face: null,
      object: this
    });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function ta(r, e, t, n, i, s) {
  us.subVectors(r, t).addScalar(0.5).multiply(n), i !== void 0 ? (ks.x = s * us.x - i * us.y, ks.y = i * us.x + s * us.y) : ks.copy(us), r.copy(e), r.x += ks.x, r.y += ks.y, r.applyMatrix4(Kd);
}
const na = /* @__PURE__ */ new P(), jh = /* @__PURE__ */ new P();
class Zd extends je {
  constructor() {
    super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
      levels: {
        enumerable: !0,
        value: []
      },
      isLOD: {
        value: !0
      }
    }), this.autoUpdate = !0;
  }
  copy(e) {
    super.copy(e, !1);
    const t = e.levels;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      this.addLevel(s.object.clone(), s.distance, s.hysteresis);
    }
    return this.autoUpdate = e.autoUpdate, this;
  }
  addLevel(e, t = 0, n = 0) {
    t = Math.abs(t);
    const i = this.levels;
    let s;
    for (s = 0; s < i.length && !(t < i[s].distance); s++)
      ;
    return i.splice(s, 0, { distance: t, hysteresis: n, object: e }), this.add(e), this;
  }
  removeLevel(e) {
    const t = this.levels;
    for (let n = 0; n < t.length; n++)
      if (t[n].distance === e) {
        const i = t.splice(n, 1);
        return this.remove(i[0].object), !0;
      }
    return !1;
  }
  getCurrentLevel() {
    return this._currentLevel;
  }
  getObjectForDistance(e) {
    const t = this.levels;
    if (t.length > 0) {
      let n, i;
      for (n = 1, i = t.length; n < i; n++) {
        let s = t[n].distance;
        if (t[n].object.visible && (s -= s * t[n].hysteresis), e < s)
          break;
      }
      return t[n - 1].object;
    }
    return null;
  }
  raycast(e, t) {
    if (this.levels.length > 0) {
      na.setFromMatrixPosition(this.matrixWorld);
      const i = e.ray.origin.distanceTo(na);
      this.getObjectForDistance(i).raycast(e, t);
    }
  }
  update(e) {
    const t = this.levels;
    if (t.length > 1) {
      na.setFromMatrixPosition(e.matrixWorld), jh.setFromMatrixPosition(this.matrixWorld);
      const n = na.distanceTo(jh) / e.zoom;
      t[0].object.visible = !0;
      let i, s;
      for (i = 1, s = t.length; i < s; i++) {
        let a = t[i].distance;
        if (t[i].object.visible && (a -= a * t[i].hysteresis), n >= a)
          t[i - 1].object.visible = !1, t[i].object.visible = !0;
        else
          break;
      }
      for (this._currentLevel = i - 1; i < s; i++)
        t[i].object.visible = !1;
    }
  }
  toJSON(e) {
    const t = super.toJSON(e);
    this.autoUpdate === !1 && (t.object.autoUpdate = !1), t.object.levels = [];
    const n = this.levels;
    for (let i = 0, s = n.length; i < s; i++) {
      const a = n[i];
      t.object.levels.push({
        object: a.object.uuid,
        distance: a.distance,
        hysteresis: a.hysteresis
      });
    }
    return t;
  }
}
const Kh = /* @__PURE__ */ new P(), Jh = /* @__PURE__ */ new et(), Zh = /* @__PURE__ */ new et(), sx = /* @__PURE__ */ new P(), Qh = /* @__PURE__ */ new Ie(), ia = /* @__PURE__ */ new P(), Rc = /* @__PURE__ */ new Pt(), $h = /* @__PURE__ */ new Ie(), Cc = /* @__PURE__ */ new Ps();
class Il extends qe {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = Kc, this.bindMatrix = new Ie(), this.bindMatrixInverse = new Ie(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Ft()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, ia), this.boundingBox.expandByPoint(ia);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Pt()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, ia), this.boundingSphere.expandByPoint(ia);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Rc.copy(this.boundingSphere), Rc.applyMatrix4(i), e.ray.intersectsSphere(Rc) !== !1 && ($h.copy(i).invert(), Cc.copy(e.ray).applyMatrix4($h), !(this.boundingBox !== null && Cc.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, Cc)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new et(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Kc ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === bd ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Jh.fromBufferAttribute(i.attributes.skinIndex, e), Zh.fromBufferAttribute(i.attributes.skinWeight, e), Kh.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = Zh.getComponent(s);
      if (a !== 0) {
        const o = Jh.getComponent(s);
        Qh.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(sx.copy(Kh).applyMatrix4(Qh), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class Lo extends je {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Mn extends ht {
  constructor(e = null, t = 1, n = 1, i, s, a, o, c, l = yt, h = yt, u, d) {
    super(null, a, o, c, l, h, i, s, u, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const eu = /* @__PURE__ */ new Ie(), rx = /* @__PURE__ */ new Ie();
class Tr {
  constructor(e = [], t = []) {
    this.uuid = Qt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Ie());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ie();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, a = e.length; s < a; s++) {
      const o = e[s] ? e[s].matrixWorld : rx;
      eu.multiplyMatrices(o, t[s]), eu.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Tr(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Mn(t, e, e, Gt, Rt);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let a = t[s];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new Lo()), this.bones.push(a), this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class ki extends nt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const ds = /* @__PURE__ */ new Ie(), tu = /* @__PURE__ */ new Ie(), sa = [], nu = /* @__PURE__ */ new Ft(), ax = /* @__PURE__ */ new Ie(), Gs = /* @__PURE__ */ new qe(), Hs = /* @__PURE__ */ new Pt();
class Ll extends qe {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new ki(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, ax);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Ft()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, ds), nu.copy(e.boundingBox).applyMatrix4(ds), this.boundingBox.union(nu);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Pt()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, ds), Hs.copy(e.boundingSphere).applyMatrix4(ds), this.boundingSphere.union(Hs);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, s = n.length + 1, a = e * s + 1;
    for (let o = 0; o < n.length; o++)
      n[o] = i[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (Gs.geometry = this.geometry, Gs.material = this.material, Gs.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Hs.copy(this.boundingSphere), Hs.applyMatrix4(n), e.ray.intersectsSphere(Hs) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, ds), tu.multiplyMatrices(n, ds), Gs.matrixWorld = tu, Gs.raycast(e, sa);
        for (let a = 0, o = sa.length; a < o; a++) {
          const c = sa[a];
          c.instanceId = s, c.object = this, t.push(c);
        }
        sa.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new ki(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Mn(new Float32Array(i * this.count), i, this.count, vo, Rt));
    const s = this.morphTexture.source.data.data;
    let a = 0;
    for (let l = 0; l < n.length; l++)
      a += n[l];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, c = i * e;
    s[c] = o, s.set(n, c + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
function ox(r, e) {
  return r.z - e.z;
}
function cx(r, e) {
  return e.z - r.z;
}
class lx {
  constructor() {
    this.index = 0, this.pool = [], this.list = [];
  }
  push(e, t, n) {
    const i = this.pool, s = this.list;
    this.index >= i.length && i.push({
      start: -1,
      count: -1,
      z: -1,
      index: -1
    });
    const a = i[this.index];
    s.push(a), this.index++, a.start = e.start, a.count = e.count, a.z = t, a.index = n;
  }
  reset() {
    this.list.length = 0, this.index = 0;
  }
}
const Jn = /* @__PURE__ */ new Ie(), Pc = /* @__PURE__ */ new Ie(), hx = /* @__PURE__ */ new Ie(), ux = /* @__PURE__ */ new ue(1, 1, 1), iu = /* @__PURE__ */ new Ie(), Ic = /* @__PURE__ */ new Sr(), ra = /* @__PURE__ */ new Ft(), bi = /* @__PURE__ */ new Pt(), Vs = /* @__PURE__ */ new P(), su = /* @__PURE__ */ new P(), dx = /* @__PURE__ */ new P(), Lc = /* @__PURE__ */ new lx(), Dt = /* @__PURE__ */ new qe(), aa = [];
function fx(r, e, t = 0) {
  const n = e.itemSize;
  if (r.isInterleavedBufferAttribute || r.array.constructor !== e.array.constructor) {
    const i = r.count;
    for (let s = 0; s < i; s++)
      for (let a = 0; a < n; a++)
        e.setComponent(s + t, a, r.getComponent(s, a));
  } else
    e.array.set(r.array, t * n);
  e.needsUpdate = !0;
}
class Qd extends qe {
  get maxInstanceCount() {
    return this._maxInstanceCount;
  }
  constructor(e, t, n = t * 2, i) {
    super(new Xe(), i), this.isBatchedMesh = !0, this.perObjectFrustumCulled = !0, this.sortObjects = !0, this.boundingBox = null, this.boundingSphere = null, this.customSort = null, this._drawInfo = [], this._availableInstanceIds = [], this._drawRanges = [], this._reservedRanges = [], this._bounds = [], this._maxInstanceCount = e, this._maxVertexCount = t, this._maxIndexCount = n, this._geometryInitialized = !1, this._geometryCount = 0, this._multiDrawCounts = new Int32Array(e), this._multiDrawStarts = new Int32Array(e), this._multiDrawCount = 0, this._multiDrawInstances = null, this._visibilityChanged = !0, this._matricesTexture = null, this._indirectTexture = null, this._colorsTexture = null, this._initMatricesTexture(), this._initIndirectTexture();
  }
  _initMatricesTexture() {
    let e = Math.sqrt(this._maxInstanceCount * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4), n = new Mn(t, e, e, Gt, Rt);
    this._matricesTexture = n;
  }
  _initIndirectTexture() {
    let e = Math.sqrt(this._maxInstanceCount);
    e = Math.ceil(e);
    const t = new Uint32Array(e * e), n = new Mn(t, e, e, vr, Gn);
    this._indirectTexture = n;
  }
  _initColorsTexture() {
    let e = Math.sqrt(this._maxInstanceCount);
    e = Math.ceil(e);
    const t = new Float32Array(e * e * 4).fill(1), n = new Mn(t, e, e, Gt, Rt);
    n.colorSpace = Qe.workingColorSpace, this._colorsTexture = n;
  }
  _initializeGeometry(e) {
    const t = this.geometry, n = this._maxVertexCount, i = this._maxIndexCount;
    if (this._geometryInitialized === !1) {
      for (const s in e.attributes) {
        const a = e.getAttribute(s), { array: o, itemSize: c, normalized: l } = a, h = new o.constructor(n * c), u = new nt(h, c, l);
        t.setAttribute(s, u);
      }
      if (e.getIndex() !== null) {
        const s = n > 65535 ? new Uint32Array(i) : new Uint16Array(i);
        t.setIndex(new nt(s, 1));
      }
      this._geometryInitialized = !0;
    }
  }
  // Make sure the geometry is compatible with the existing combined geometry attributes
  _validateGeometry(e) {
    const t = this.geometry;
    if (!!e.getIndex() != !!t.getIndex())
      throw new Error('BatchedMesh: All geometries must consistently have "index".');
    for (const n in t.attributes) {
      if (!e.hasAttribute(n))
        throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);
      const i = e.getAttribute(n), s = t.getAttribute(n);
      if (i.itemSize !== s.itemSize || i.normalized !== s.normalized)
        throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.");
    }
  }
  setCustomSort(e) {
    return this.customSort = e, this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ft());
    const e = this.boundingBox, t = this._drawInfo;
    e.makeEmpty();
    for (let n = 0, i = t.length; n < i; n++) {
      if (t[n].active === !1) continue;
      const s = t[n].geometryIndex;
      this.getMatrixAt(n, Jn), this.getBoundingBoxAt(s, ra).applyMatrix4(Jn), e.union(ra);
    }
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Pt());
    const e = this.boundingSphere, t = this._drawInfo;
    e.makeEmpty();
    for (let n = 0, i = t.length; n < i; n++) {
      if (t[n].active === !1) continue;
      const s = t[n].geometryIndex;
      this.getMatrixAt(n, Jn), this.getBoundingSphereAt(s, bi).applyMatrix4(Jn), e.union(bi);
    }
  }
  addInstance(e) {
    if (this._drawInfo.length >= this.maxInstanceCount && this._availableInstanceIds.length === 0)
      throw new Error("BatchedMesh: Maximum item count reached.");
    const n = {
      visible: !0,
      active: !0,
      geometryIndex: e
    };
    let i = null;
    this._availableInstanceIds.length > 0 ? (i = this._availableInstanceIds.pop(), this._drawInfo[i] = n) : (i = this._drawInfo.length, this._drawInfo.push(n));
    const s = this._matricesTexture, a = s.image.data;
    hx.toArray(a, i * 16), s.needsUpdate = !0;
    const o = this._colorsTexture;
    return o && (ux.toArray(o.image.data, i * 4), o.needsUpdate = !0), i;
  }
  addGeometry(e, t = -1, n = -1) {
    if (this._initializeGeometry(e), this._validateGeometry(e), this._drawInfo.length >= this._maxInstanceCount)
      throw new Error("BatchedMesh: Maximum item count reached.");
    const i = {
      vertexStart: -1,
      vertexCount: -1,
      indexStart: -1,
      indexCount: -1
    };
    let s = null;
    const a = this._reservedRanges, o = this._drawRanges, c = this._bounds;
    this._geometryCount !== 0 && (s = a[a.length - 1]), t === -1 ? i.vertexCount = e.getAttribute("position").count : i.vertexCount = t, s === null ? i.vertexStart = 0 : i.vertexStart = s.vertexStart + s.vertexCount;
    const l = e.getIndex(), h = l !== null;
    if (h && (n === -1 ? i.indexCount = l.count : i.indexCount = n, s === null ? i.indexStart = 0 : i.indexStart = s.indexStart + s.indexCount), i.indexStart !== -1 && i.indexStart + i.indexCount > this._maxIndexCount || i.vertexStart + i.vertexCount > this._maxVertexCount)
      throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");
    const u = this._geometryCount;
    return this._geometryCount++, a.push(i), o.push({
      start: h ? i.indexStart : i.vertexStart,
      count: -1
    }), c.push({
      boxInitialized: !1,
      box: new Ft(),
      sphereInitialized: !1,
      sphere: new Pt()
    }), this.setGeometryAt(u, e), u;
  }
  setGeometryAt(e, t) {
    if (e >= this._geometryCount)
      throw new Error("BatchedMesh: Maximum geometry count reached.");
    this._validateGeometry(t);
    const n = this.geometry, i = n.getIndex() !== null, s = n.getIndex(), a = t.getIndex(), o = this._reservedRanges[e];
    if (i && a.count > o.indexCount || t.attributes.position.count > o.vertexCount)
      throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");
    const c = o.vertexStart, l = o.vertexCount;
    for (const f in n.attributes) {
      const g = t.getAttribute(f), b = n.getAttribute(f);
      fx(g, b, c);
      const m = g.itemSize;
      for (let p = g.count, x = l; p < x; p++) {
        const _ = c + p;
        for (let v = 0; v < m; v++)
          b.setComponent(_, v, 0);
      }
      b.needsUpdate = !0, b.addUpdateRange(c * m, l * m);
    }
    if (i) {
      const f = o.indexStart;
      for (let g = 0; g < a.count; g++)
        s.setX(f + g, c + a.getX(g));
      for (let g = a.count, b = o.indexCount; g < b; g++)
        s.setX(f + g, c);
      s.needsUpdate = !0, s.addUpdateRange(f, o.indexCount);
    }
    const h = this._bounds[e];
    t.boundingBox !== null ? (h.box.copy(t.boundingBox), h.boxInitialized = !0) : h.boxInitialized = !1, t.boundingSphere !== null ? (h.sphere.copy(t.boundingSphere), h.sphereInitialized = !0) : h.sphereInitialized = !1;
    const u = this._drawRanges[e], d = t.getAttribute("position");
    return u.count = i ? a.count : d.count, this._visibilityChanged = !0, e;
  }
  /*
  	deleteGeometry( geometryId ) {
  
  		// TODO: delete geometry and associated instances
  
  	}
  	*/
  deleteInstance(e) {
    const t = this._drawInfo;
    return e >= t.length || t[e].active === !1 ? this : (t[e].active = !1, this._availableInstanceIds.push(e), this._visibilityChanged = !0, this);
  }
  // get bounding box and compute it if it doesn't exist
  getBoundingBoxAt(e, t) {
    if (e >= this._geometryCount)
      return null;
    const n = this._bounds[e], i = n.box, s = this.geometry;
    if (n.boxInitialized === !1) {
      i.makeEmpty();
      const a = s.index, o = s.attributes.position, c = this._drawRanges[e];
      for (let l = c.start, h = c.start + c.count; l < h; l++) {
        let u = l;
        a && (u = a.getX(u)), i.expandByPoint(Vs.fromBufferAttribute(o, u));
      }
      n.boxInitialized = !0;
    }
    return t.copy(i), t;
  }
  // get bounding sphere and compute it if it doesn't exist
  getBoundingSphereAt(e, t) {
    if (e >= this._geometryCount)
      return null;
    const n = this._bounds[e], i = n.sphere, s = this.geometry;
    if (n.sphereInitialized === !1) {
      i.makeEmpty(), this.getBoundingBoxAt(e, ra), ra.getCenter(i.center);
      const a = s.index, o = s.attributes.position, c = this._drawRanges[e];
      let l = 0;
      for (let h = c.start, u = c.start + c.count; h < u; h++) {
        let d = h;
        a && (d = a.getX(d)), Vs.fromBufferAttribute(o, d), l = Math.max(l, i.center.distanceToSquared(Vs));
      }
      i.radius = Math.sqrt(l), n.sphereInitialized = !0;
    }
    return t.copy(i), t;
  }
  setMatrixAt(e, t) {
    const n = this._drawInfo, i = this._matricesTexture, s = this._matricesTexture.image.data;
    return e >= n.length || n[e].active === !1 ? this : (t.toArray(s, e * 16), i.needsUpdate = !0, this);
  }
  getMatrixAt(e, t) {
    const n = this._drawInfo, i = this._matricesTexture.image.data;
    return e >= n.length || n[e].active === !1 ? null : t.fromArray(i, e * 16);
  }
  setColorAt(e, t) {
    this._colorsTexture === null && this._initColorsTexture();
    const n = this._colorsTexture, i = this._colorsTexture.image.data, s = this._drawInfo;
    return e >= s.length || s[e].active === !1 ? this : (t.toArray(i, e * 4), n.needsUpdate = !0, this);
  }
  getColorAt(e, t) {
    const n = this._colorsTexture.image.data, i = this._drawInfo;
    return e >= i.length || i[e].active === !1 ? null : t.fromArray(n, e * 4);
  }
  setVisibleAt(e, t) {
    const n = this._drawInfo;
    return e >= n.length || n[e].active === !1 || n[e].visible === t ? this : (n[e].visible = t, this._visibilityChanged = !0, this);
  }
  getVisibleAt(e) {
    const t = this._drawInfo;
    return e >= t.length || t[e].active === !1 ? !1 : t[e].visible;
  }
  setGeometryIdAt(e, t) {
    const n = this._drawInfo;
    return e >= n.length || n[e].active === !1 || t < 0 || t >= this._geometryCount ? null : (n[e].geometryIndex = t, this);
  }
  getGeometryIdAt(e) {
    const t = this._drawInfo;
    return e >= t.length || t[e].active === !1 ? -1 : t[e].geometryIndex;
  }
  getGeometryRangeAt(e, t = {}) {
    if (e < 0 || e >= this._geometryCount)
      return null;
    const n = this._drawRanges[e];
    return t.start = n.start, t.count = n.count, t;
  }
  raycast(e, t) {
    const n = this._drawInfo, i = this._drawRanges, s = this.matrixWorld, a = this.geometry;
    Dt.material = this.material, Dt.geometry.index = a.index, Dt.geometry.attributes = a.attributes, Dt.geometry.boundingBox === null && (Dt.geometry.boundingBox = new Ft()), Dt.geometry.boundingSphere === null && (Dt.geometry.boundingSphere = new Pt());
    for (let o = 0, c = n.length; o < c; o++) {
      if (!n[o].visible || !n[o].active)
        continue;
      const l = n[o].geometryIndex, h = i[l];
      Dt.geometry.setDrawRange(h.start, h.count), this.getMatrixAt(o, Dt.matrixWorld).premultiply(s), this.getBoundingBoxAt(l, Dt.geometry.boundingBox), this.getBoundingSphereAt(l, Dt.geometry.boundingSphere), Dt.raycast(e, aa);
      for (let u = 0, d = aa.length; u < d; u++) {
        const f = aa[u];
        f.object = this, f.batchId = o, t.push(f);
      }
      aa.length = 0;
    }
    Dt.material = null, Dt.geometry.index = null, Dt.geometry.attributes = {}, Dt.geometry.setDrawRange(0, 1 / 0);
  }
  copy(e) {
    return super.copy(e), this.geometry = e.geometry.clone(), this.perObjectFrustumCulled = e.perObjectFrustumCulled, this.sortObjects = e.sortObjects, this.boundingBox = e.boundingBox !== null ? e.boundingBox.clone() : null, this.boundingSphere = e.boundingSphere !== null ? e.boundingSphere.clone() : null, this._drawRanges = e._drawRanges.map((t) => ({ ...t })), this._reservedRanges = e._reservedRanges.map((t) => ({ ...t })), this._drawInfo = e._drawInfo.map((t) => ({ ...t })), this._bounds = e._bounds.map((t) => ({
      boxInitialized: t.boxInitialized,
      box: t.box.clone(),
      sphereInitialized: t.sphereInitialized,
      sphere: t.sphere.clone()
    })), this._maxInstanceCount = e._maxInstanceCount, this._maxVertexCount = e._maxVertexCount, this._maxIndexCount = e._maxIndexCount, this._geometryInitialized = e._geometryInitialized, this._geometryCount = e._geometryCount, this._multiDrawCounts = e._multiDrawCounts.slice(), this._multiDrawStarts = e._multiDrawStarts.slice(), this._matricesTexture = e._matricesTexture.clone(), this._matricesTexture.image.data = this._matricesTexture.image.data.slice(), this._colorsTexture !== null && (this._colorsTexture = e._colorsTexture.clone(), this._colorsTexture.image.data = this._colorsTexture.image.data.slice()), this;
  }
  dispose() {
    return this.geometry.dispose(), this._matricesTexture.dispose(), this._matricesTexture = null, this._indirectTexture.dispose(), this._indirectTexture = null, this._colorsTexture !== null && (this._colorsTexture.dispose(), this._colorsTexture = null), this;
  }
  onBeforeRender(e, t, n, i, s) {
    if (!this._visibilityChanged && !this.perObjectFrustumCulled && !this.sortObjects)
      return;
    const a = i.getIndex(), o = a === null ? 1 : a.array.BYTES_PER_ELEMENT, c = this._drawInfo, l = this._multiDrawStarts, h = this._multiDrawCounts, u = this._drawRanges, d = this.perObjectFrustumCulled, f = this._indirectTexture, g = f.image.data;
    d && (iu.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse).multiply(this.matrixWorld), Ic.setFromProjectionMatrix(
      iu,
      e.coordinateSystem
    ));
    let b = 0;
    if (this.sortObjects) {
      Pc.copy(this.matrixWorld).invert(), Vs.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Pc), su.set(0, 0, -1).transformDirection(n.matrixWorld).transformDirection(Pc);
      for (let x = 0, _ = c.length; x < _; x++)
        if (c[x].visible && c[x].active) {
          const v = c[x].geometryIndex;
          this.getMatrixAt(x, Jn), this.getBoundingSphereAt(v, bi).applyMatrix4(Jn);
          let I = !1;
          if (d && (I = !Ic.intersectsSphere(bi)), !I) {
            const T = dx.subVectors(bi.center, Vs).dot(su);
            Lc.push(u[v], T, x);
          }
        }
      const m = Lc.list, p = this.customSort;
      p === null ? m.sort(s.transparent ? cx : ox) : p.call(this, m, n);
      for (let x = 0, _ = m.length; x < _; x++) {
        const v = m[x];
        l[b] = v.start * o, h[b] = v.count, g[b] = v.index, b++;
      }
      Lc.reset();
    } else
      for (let m = 0, p = c.length; m < p; m++)
        if (c[m].visible && c[m].active) {
          const x = c[m].geometryIndex;
          let _ = !1;
          if (d && (this.getMatrixAt(m, Jn), this.getBoundingSphereAt(x, bi).applyMatrix4(Jn), _ = !Ic.intersectsSphere(bi)), !_) {
            const v = u[x];
            l[b] = v.start * o, h[b] = v.count, g[b] = m, b++;
          }
        }
    f.needsUpdate = !0, this._multiDrawCount = b, this._visibilityChanged = !1;
  }
  onBeforeShadow(e, t, n, i, s, a) {
    this.onBeforeRender(e, null, i, s, a);
  }
}
class Ot extends Mt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new ue(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const uo = /* @__PURE__ */ new P(), fo = /* @__PURE__ */ new P(), ru = /* @__PURE__ */ new Ie(), Ws = /* @__PURE__ */ new Ps(), oa = /* @__PURE__ */ new Pt(), Dc = /* @__PURE__ */ new P(), au = /* @__PURE__ */ new P();
class Hn extends je {
  constructor(e = new Xe(), t = new Ot()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        uo.fromBufferAttribute(t, i - 1), fo.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += uo.distanceTo(fo);
      e.setAttribute("lineDistance", new we(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), oa.copy(n.boundingSphere), oa.applyMatrix4(i), oa.radius += s, e.ray.intersectsSphere(oa) === !1) return;
    ru.copy(i).invert(), Ws.copy(e.ray).applyMatrix4(ru);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position;
    if (h !== null) {
      const f = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count);
      for (let b = f, m = g - 1; b < m; b += l) {
        const p = h.getX(b), x = h.getX(b + 1), _ = ca(this, e, Ws, c, p, x);
        _ && t.push(_);
      }
      if (this.isLineLoop) {
        const b = h.getX(g - 1), m = h.getX(f), p = ca(this, e, Ws, c, b, m);
        p && t.push(p);
      }
    } else {
      const f = Math.max(0, a.start), g = Math.min(d.count, a.start + a.count);
      for (let b = f, m = g - 1; b < m; b += l) {
        const p = ca(this, e, Ws, c, b, b + 1);
        p && t.push(p);
      }
      if (this.isLineLoop) {
        const b = ca(this, e, Ws, c, g - 1, f);
        b && t.push(b);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function ca(r, e, t, n, i, s) {
  const a = r.geometry.attributes.position;
  if (uo.fromBufferAttribute(a, i), fo.fromBufferAttribute(a, s), t.distanceSqToSegment(uo, fo, Dc, au) > n) return;
  Dc.applyMatrix4(r.matrixWorld);
  const c = e.ray.origin.distanceTo(Dc);
  if (!(c < e.near || c > e.far))
    return {
      distance: c,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: au.clone().applyMatrix4(r.matrixWorld),
      index: i,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: r
    };
}
const ou = /* @__PURE__ */ new P(), cu = /* @__PURE__ */ new P();
class gn extends Hn {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        ou.fromBufferAttribute(t, i), cu.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + ou.distanceTo(cu);
      e.setAttribute("lineDistance", new we(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Dl extends Hn {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class Do extends Mt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new ue(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const lu = /* @__PURE__ */ new Ie(), el = /* @__PURE__ */ new Ps(), la = /* @__PURE__ */ new Pt(), ha = /* @__PURE__ */ new P();
class Ul extends je {
  constructor(e = new Xe(), t = new Do()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), la.copy(n.boundingSphere), la.applyMatrix4(i), la.radius += s, e.ray.intersectsSphere(la) === !1) return;
    lu.copy(i).invert(), el.copy(e.ray).applyMatrix4(lu);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, u = n.attributes.position;
    if (l !== null) {
      const d = Math.max(0, a.start), f = Math.min(l.count, a.start + a.count);
      for (let g = d, b = f; g < b; g++) {
        const m = l.getX(g);
        ha.fromBufferAttribute(u, m), hu(ha, m, c, i, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start), f = Math.min(u.count, a.start + a.count);
      for (let g = d, b = f; g < b; g++)
        ha.fromBufferAttribute(u, g), hu(ha, g, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function hu(r, e, t, n, i, s, a) {
  const o = el.distanceSqToPoint(r);
  if (o < t) {
    const c = new P();
    el.closestPointToPoint(r, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far) return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
class px extends ht {
  constructor(e, t, n, i, s, a, o, c, l) {
    super(e, t, n, i, s, a, o, c, l), this.isVideoTexture = !0, this.minFilter = a !== void 0 ? a : lt, this.magFilter = s !== void 0 ? s : lt, this.generateMipmaps = !1;
    const h = this;
    function u() {
      h.needsUpdate = !0, e.requestVideoFrameCallback(u);
    }
    "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(u);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const e = this.image;
    "requestVideoFrameCallback" in e === !1 && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
  }
}
class mx extends ht {
  constructor(e, t) {
    super({ width: e, height: t }), this.isFramebufferTexture = !0, this.magFilter = yt, this.minFilter = yt, this.generateMipmaps = !1, this.needsUpdate = !0;
  }
}
class Uo extends ht {
  constructor(e, t, n, i, s, a, o, c, l, h, u, d) {
    super(null, a, o, c, l, h, i, s, u, d), this.isCompressedTexture = !0, this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class gx extends Uo {
  constructor(e, t, n, i, s, a) {
    super(e, t, n, s, a), this.isCompressedArrayTexture = !0, this.image.depth = i, this.wrapR = Zt, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class bx extends Uo {
  constructor(e, t, n) {
    super(void 0, e[0].width, e[0].height, t, n, zn), this.isCompressedCubeTexture = !0, this.isCubeTexture = !0, this.image = e;
  }
}
class $d extends ht {
  constructor(e, t, n, i, s, a, o, c, l) {
    super(e, t, n, i, s, a, o, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class bn {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  // Get sequence of points using getPoint( t )
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return t;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPointAt(n / e));
    return t;
  }
  // Get total curve arc length
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n, i = this.getPoint(0), s = 0;
    t.push(0);
    for (let a = 1; a <= e; a++)
      n = this.getPoint(a / e), s += n.distanceTo(i), t.push(s), i = n;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let i = 0;
    const s = n.length;
    let a;
    t ? a = t : a = e * n[s - 1];
    let o = 0, c = s - 1, l;
    for (; o <= c; )
      if (i = Math.floor(o + (c - o) / 2), l = n[i] - a, l < 0)
        o = i + 1;
      else if (l > 0)
        c = i - 1;
      else {
        c = i;
        break;
      }
    if (i = c, n[i] === a)
      return i / (s - 1);
    const h = n[i], d = n[i + 1] - h, f = (a - h) / d;
    return (i + f) / (s - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(e, t) {
    let i = e - 1e-4, s = e + 1e-4;
    i < 0 && (i = 0), s > 1 && (s = 1);
    const a = this.getPoint(i), o = this.getPoint(s), c = t || (a.isVector2 ? new Z() : new P());
    return c.copy(o).sub(a).normalize(), c;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new P(), i = [], s = [], a = [], o = new P(), c = new Ie();
    for (let f = 0; f <= e; f++) {
      const g = f / e;
      i[f] = this.getTangentAt(g, new P());
    }
    s[0] = new P(), a[0] = new P();
    let l = Number.MAX_VALUE;
    const h = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z);
    h <= l && (l = h, n.set(1, 0, 0)), u <= l && (l = u, n.set(0, 1, 0)), d <= l && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], o), a[0].crossVectors(i[0], s[0]);
    for (let f = 1; f <= e; f++) {
      if (s[f] = s[f - 1].clone(), a[f] = a[f - 1].clone(), o.crossVectors(i[f - 1], i[f]), o.length() > Number.EPSILON) {
        o.normalize();
        const g = Math.acos(pt(i[f - 1].dot(i[f]), -1, 1));
        s[f].applyMatrix4(c.makeRotationAxis(o, g));
      }
      a[f].crossVectors(i[f], s[f]);
    }
    if (t === !0) {
      let f = Math.acos(pt(s[0].dot(s[e]), -1, 1));
      f /= e, i[0].dot(o.crossVectors(s[0], s[e])) > 0 && (f = -f);
      for (let g = 1; g <= e; g++)
        s[g].applyMatrix4(c.makeRotationAxis(i[g], f * g)), a[g].crossVectors(i[g], s[g]);
    }
    return {
      tangents: i,
      normals: s,
      binormals: a
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
class No extends bn {
  constructor(e = 0, t = 0, n = 1, i = 1, s = 0, a = Math.PI * 2, o = !1, c = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = a, this.aClockwise = o, this.aRotation = c;
  }
  getPoint(e, t = new Z()) {
    const n = t, i = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += i;
    for (; s > i; ) s -= i;
    s < Number.EPSILON && (a ? s = 0 : s = i), this.aClockwise === !0 && !a && (s === i ? s = -i : s = s - i);
    const o = this.aStartAngle + e * s;
    let c = this.aX + this.xRadius * Math.cos(o), l = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = c - this.aX, f = l - this.aY;
      c = d * h - f * u + this.aX, l = d * u + f * h + this.aY;
    }
    return n.set(c, l);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}
class ef extends No {
  constructor(e, t, n, i, s, a) {
    super(e, t, n, n, i, s, a), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function Nl() {
  let r = 0, e = 0, t = 0, n = 0;
  function i(s, a, o, c) {
    r = s, e = o, t = -3 * s + 3 * a - 2 * o - c, n = 2 * s - 2 * a + o + c;
  }
  return {
    initCatmullRom: function(s, a, o, c, l) {
      i(a, o, l * (o - s), l * (c - a));
    },
    initNonuniformCatmullRom: function(s, a, o, c, l, h, u) {
      let d = (a - s) / l - (o - s) / (l + h) + (o - a) / h, f = (o - a) / h - (c - a) / (h + u) + (c - o) / u;
      d *= h, f *= h, i(a, o, d, f);
    },
    calc: function(s) {
      const a = s * s, o = a * s;
      return r + e * s + t * a + n * o;
    }
  };
}
const ua = /* @__PURE__ */ new P(), Uc = /* @__PURE__ */ new Nl(), Nc = /* @__PURE__ */ new Nl(), Fc = /* @__PURE__ */ new Nl();
class tf extends bn {
  constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
  }
  getPoint(e, t = new P()) {
    const n = t, i = this.points, s = i.length, a = (s - (this.closed ? 0 : 1)) * e;
    let o = Math.floor(a), c = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s : c === 0 && o === s - 1 && (o = s - 2, c = 1);
    let l, h;
    this.closed || o > 0 ? l = i[(o - 1) % s] : (ua.subVectors(i[0], i[1]).add(i[0]), l = ua);
    const u = i[o % s], d = i[(o + 1) % s];
    if (this.closed || o + 2 < s ? h = i[(o + 2) % s] : (ua.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), h = ua), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(l.distanceToSquared(u), f), b = Math.pow(u.distanceToSquared(d), f), m = Math.pow(d.distanceToSquared(h), f);
      b < 1e-4 && (b = 1), g < 1e-4 && (g = b), m < 1e-4 && (m = b), Uc.initNonuniformCatmullRom(l.x, u.x, d.x, h.x, g, b, m), Nc.initNonuniformCatmullRom(l.y, u.y, d.y, h.y, g, b, m), Fc.initNonuniformCatmullRom(l.z, u.z, d.z, h.z, g, b, m);
    } else this.curveType === "catmullrom" && (Uc.initCatmullRom(l.x, u.x, d.x, h.x, this.tension), Nc.initCatmullRom(l.y, u.y, d.y, h.y, this.tension), Fc.initCatmullRom(l.z, u.z, d.z, h.z, this.tension));
    return n.set(
      Uc.calc(c),
      Nc.calc(c),
      Fc.calc(c)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new P().fromArray(i));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function uu(r, e, t, n, i) {
  const s = (n - e) * 0.5, a = (i - t) * 0.5, o = r * r, c = r * o;
  return (2 * t - 2 * n + s + a) * c + (-3 * t + 3 * n - 2 * s - a) * o + s * r + t;
}
function _x(r, e) {
  const t = 1 - r;
  return t * t * e;
}
function xx(r, e) {
  return 2 * (1 - r) * r * e;
}
function vx(r, e) {
  return r * r * e;
}
function nr(r, e, t, n) {
  return _x(r, e) + xx(r, t) + vx(r, n);
}
function yx(r, e) {
  const t = 1 - r;
  return t * t * t * e;
}
function Mx(r, e) {
  const t = 1 - r;
  return 3 * t * t * r * e;
}
function Sx(r, e) {
  return 3 * (1 - r) * r * r * e;
}
function Ax(r, e) {
  return r * r * r * e;
}
function ir(r, e, t, n, i) {
  return yx(r, e) + Mx(r, t) + Sx(r, n) + Ax(r, i);
}
class Fl extends bn {
  constructor(e = new Z(), t = new Z(), n = new Z(), i = new Z()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new Z()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(
      ir(e, i.x, s.x, a.x, o.x),
      ir(e, i.y, s.y, a.y, o.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class nf extends bn {
  constructor(e = new P(), t = new P(), n = new P(), i = new P()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new P()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(
      ir(e, i.x, s.x, a.x, o.x),
      ir(e, i.y, s.y, a.y, o.y),
      ir(e, i.z, s.z, a.z, o.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class Ol extends bn {
  constructor(e = new Z(), t = new Z()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new Z()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new Z()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class sf extends bn {
  constructor(e = new P(), t = new P()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new P()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new P()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Bl extends bn {
  constructor(e = new Z(), t = new Z(), n = new Z()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new Z()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2;
    return n.set(
      nr(e, i.x, s.x, a.x),
      nr(e, i.y, s.y, a.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class kl extends bn {
  constructor(e = new P(), t = new P(), n = new P()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new P()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2;
    return n.set(
      nr(e, i.x, s.x, a.x),
      nr(e, i.y, s.y, a.y),
      nr(e, i.z, s.z, a.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class zl extends bn {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new Z()) {
    const n = t, i = this.points, s = (i.length - 1) * e, a = Math.floor(s), o = s - a, c = i[a === 0 ? a : a - 1], l = i[a], h = i[a > i.length - 2 ? i.length - 1 : a + 1], u = i[a > i.length - 3 ? i.length - 1 : a + 2];
    return n.set(
      uu(o, c.x, l.x, h.x, u.x),
      uu(o, c.y, l.y, h.y, u.y)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new Z().fromArray(i));
    }
    return this;
  }
}
var po = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: ef,
  CatmullRomCurve3: tf,
  CubicBezierCurve: Fl,
  CubicBezierCurve3: nf,
  EllipseCurve: No,
  LineCurve: Ol,
  LineCurve3: sf,
  QuadraticBezierCurve: Bl,
  QuadraticBezierCurve3: kl,
  SplineCurve: zl
});
class rf extends bn {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      const n = e.isVector2 === !0 ? "LineCurve" : "LineCurve3";
      this.curves.push(new po[n](t, e));
    }
    return this;
  }
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint(e, t) {
    const n = e * this.getLength(), i = this.getCurveLengths();
    let s = 0;
    for (; s < i.length; ) {
      if (i[s] >= n) {
        const a = i[s] - n, o = this.curves[s], c = o.getLength(), l = c === 0 ? 0 : 1 - a / c;
        return o.getPointAt(l, t);
      }
      s++;
    }
    return null;
  }
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  // cacheLengths must be recalculated.
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      t += this.curves[n].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let i = 0, s = this.curves; i < s.length; i++) {
      const a = s[i], o = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e, c = a.getPoints(o);
      for (let l = 0; l < c.length; l++) {
        const h = c[l];
        n && n.equals(h) || (t.push(h), n = h);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(i.clone());
    }
    return this.autoClose = e.autoClose, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const i = this.curves[t];
      e.curves.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(new po[i.type]().fromJSON(i));
    }
    return this;
  }
}
class fr extends rf {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new Z(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++)
      this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const n = new Ol(this.currentPoint.clone(), new Z(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const s = new Bl(
      this.currentPoint.clone(),
      new Z(e, t),
      new Z(n, i)
    );
    return this.curves.push(s), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, a) {
    const o = new Fl(
      this.currentPoint.clone(),
      new Z(e, t),
      new Z(n, i),
      new Z(s, a)
    );
    return this.curves.push(o), this.currentPoint.set(s, a), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new zl(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, i, s, a) {
    const o = this.currentPoint.x, c = this.currentPoint.y;
    return this.absarc(
      e + o,
      t + c,
      n,
      i,
      s,
      a
    ), this;
  }
  absarc(e, t, n, i, s, a) {
    return this.absellipse(e, t, n, n, i, s, a), this;
  }
  ellipse(e, t, n, i, s, a, o, c) {
    const l = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(e + l, t + h, n, i, s, a, o, c), this;
  }
  absellipse(e, t, n, i, s, a, o, c) {
    const l = new No(e, t, n, i, s, a, o, c);
    if (this.curves.length > 0) {
      const u = l.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(l);
    const h = l.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class Er extends Xe {
  constructor(e = [new Z(0, -0.5), new Z(0.5, 0), new Z(0, 0.5)], t = 12, n = 0, i = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: e,
      segments: t,
      phiStart: n,
      phiLength: i
    }, t = Math.floor(t), i = pt(i, 0, Math.PI * 2);
    const s = [], a = [], o = [], c = [], l = [], h = 1 / t, u = new P(), d = new Z(), f = new P(), g = new P(), b = new P();
    let m = 0, p = 0;
    for (let x = 0; x <= e.length - 1; x++)
      switch (x) {
        case 0:
          m = e[x + 1].x - e[x].x, p = e[x + 1].y - e[x].y, f.x = p * 1, f.y = -m, f.z = p * 0, b.copy(f), f.normalize(), c.push(f.x, f.y, f.z);
          break;
        case e.length - 1:
          c.push(b.x, b.y, b.z);
          break;
        default:
          m = e[x + 1].x - e[x].x, p = e[x + 1].y - e[x].y, f.x = p * 1, f.y = -m, f.z = p * 0, g.copy(f), f.x += b.x, f.y += b.y, f.z += b.z, f.normalize(), c.push(f.x, f.y, f.z), b.copy(g);
      }
    for (let x = 0; x <= t; x++) {
      const _ = n + x * h * i, v = Math.sin(_), I = Math.cos(_);
      for (let T = 0; T <= e.length - 1; T++) {
        u.x = e[T].x * v, u.y = e[T].y, u.z = e[T].x * I, a.push(u.x, u.y, u.z), d.x = x / t, d.y = T / (e.length - 1), o.push(d.x, d.y);
        const w = c[3 * T + 0] * v, R = c[3 * T + 1], L = c[3 * T + 0] * I;
        l.push(w, R, L);
      }
    }
    for (let x = 0; x < t; x++)
      for (let _ = 0; _ < e.length - 1; _++) {
        const v = _ + x * e.length, I = v, T = v + e.length, w = v + e.length + 1, R = v + 1;
        s.push(I, T, R), s.push(w, R, T);
      }
    this.setIndex(s), this.setAttribute("position", new we(a, 3)), this.setAttribute("uv", new we(o, 2)), this.setAttribute("normal", new we(l, 3));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Er(e.points, e.segments, e.phiStart, e.phiLength);
  }
}
class Fo extends Er {
  constructor(e = 1, t = 1, n = 4, i = 8) {
    const s = new fr();
    s.absarc(0, -t / 2, e, Math.PI * 1.5, 0), s.absarc(0, t / 2, e, 0, Math.PI * 0.5), super(s.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = {
      radius: e,
      length: t,
      capSegments: n,
      radialSegments: i
    };
  }
  static fromJSON(e) {
    return new Fo(e.radius, e.length, e.capSegments, e.radialSegments);
  }
}
class Oo extends Xe {
  constructor(e = 1, t = 32, n = 0, i = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = {
      radius: e,
      segments: t,
      thetaStart: n,
      thetaLength: i
    }, t = Math.max(3, t);
    const s = [], a = [], o = [], c = [], l = new P(), h = new Z();
    a.push(0, 0, 0), o.push(0, 0, 1), c.push(0.5, 0.5);
    for (let u = 0, d = 3; u <= t; u++, d += 3) {
      const f = n + u / t * i;
      l.x = e * Math.cos(f), l.y = e * Math.sin(f), a.push(l.x, l.y, l.z), o.push(0, 0, 1), h.x = (a[d] / e + 1) / 2, h.y = (a[d + 1] / e + 1) / 2, c.push(h.x, h.y);
    }
    for (let u = 1; u <= t; u++)
      s.push(u, u + 1, 0);
    this.setIndex(s), this.setAttribute("position", new we(a, 3)), this.setAttribute("normal", new we(o, 3)), this.setAttribute("uv", new we(c, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Oo(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class Xi extends Xe {
  constructor(e = 1, t = 1, n = 1, i = 32, s = 1, a = !1, o = 0, c = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: i,
      heightSegments: s,
      openEnded: a,
      thetaStart: o,
      thetaLength: c
    };
    const l = this;
    i = Math.floor(i), s = Math.floor(s);
    const h = [], u = [], d = [], f = [];
    let g = 0;
    const b = [], m = n / 2;
    let p = 0;
    x(), a === !1 && (e > 0 && _(!0), t > 0 && _(!1)), this.setIndex(h), this.setAttribute("position", new we(u, 3)), this.setAttribute("normal", new we(d, 3)), this.setAttribute("uv", new we(f, 2));
    function x() {
      const v = new P(), I = new P();
      let T = 0;
      const w = (t - e) / n;
      for (let R = 0; R <= s; R++) {
        const L = [], y = R / s, S = y * (t - e) + e;
        for (let F = 0; F <= i; F++) {
          const O = F / i, z = O * c + o, V = Math.sin(z), k = Math.cos(z);
          I.x = S * V, I.y = -y * n + m, I.z = S * k, u.push(I.x, I.y, I.z), v.set(V, w, k).normalize(), d.push(v.x, v.y, v.z), f.push(O, 1 - y), L.push(g++);
        }
        b.push(L);
      }
      for (let R = 0; R < i; R++)
        for (let L = 0; L < s; L++) {
          const y = b[L][R], S = b[L + 1][R], F = b[L + 1][R + 1], O = b[L][R + 1];
          e > 0 && (h.push(y, S, O), T += 3), t > 0 && (h.push(S, F, O), T += 3);
        }
      l.addGroup(p, T, 0), p += T;
    }
    function _(v) {
      const I = g, T = new Z(), w = new P();
      let R = 0;
      const L = v === !0 ? e : t, y = v === !0 ? 1 : -1;
      for (let F = 1; F <= i; F++)
        u.push(0, m * y, 0), d.push(0, y, 0), f.push(0.5, 0.5), g++;
      const S = g;
      for (let F = 0; F <= i; F++) {
        const z = F / i * c + o, V = Math.cos(z), k = Math.sin(z);
        w.x = L * k, w.y = m * y, w.z = L * V, u.push(w.x, w.y, w.z), d.push(0, y, 0), T.x = V * 0.5 + 0.5, T.y = k * 0.5 * y + 0.5, f.push(T.x, T.y), g++;
      }
      for (let F = 0; F < i; F++) {
        const O = I + F, z = S + F;
        v === !0 ? h.push(z, z + 1, O) : h.push(z + 1, z, O), R += 3;
      }
      l.addGroup(p, R, v === !0 ? 1 : 2), p += R;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Xi(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Bo extends Xi {
  constructor(e = 1, t = 1, n = 32, i = 1, s = !1, a = 0, o = Math.PI * 2) {
    super(0, e, t, n, i, s, a, o), this.type = "ConeGeometry", this.parameters = {
      radius: e,
      height: t,
      radialSegments: n,
      heightSegments: i,
      openEnded: s,
      thetaStart: a,
      thetaLength: o
    };
  }
  static fromJSON(e) {
    return new Bo(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class ci extends Xe {
  constructor(e = [], t = [], n = 1, i = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: e,
      indices: t,
      radius: n,
      detail: i
    };
    const s = [], a = [];
    o(i), l(n), h(), this.setAttribute("position", new we(s, 3)), this.setAttribute("normal", new we(s.slice(), 3)), this.setAttribute("uv", new we(a, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o(x) {
      const _ = new P(), v = new P(), I = new P();
      for (let T = 0; T < t.length; T += 3)
        f(t[T + 0], _), f(t[T + 1], v), f(t[T + 2], I), c(_, v, I, x);
    }
    function c(x, _, v, I) {
      const T = I + 1, w = [];
      for (let R = 0; R <= T; R++) {
        w[R] = [];
        const L = x.clone().lerp(v, R / T), y = _.clone().lerp(v, R / T), S = T - R;
        for (let F = 0; F <= S; F++)
          F === 0 && R === T ? w[R][F] = L : w[R][F] = L.clone().lerp(y, F / S);
      }
      for (let R = 0; R < T; R++)
        for (let L = 0; L < 2 * (T - R) - 1; L++) {
          const y = Math.floor(L / 2);
          L % 2 === 0 ? (d(w[R][y + 1]), d(w[R + 1][y]), d(w[R][y])) : (d(w[R][y + 1]), d(w[R + 1][y + 1]), d(w[R + 1][y]));
        }
    }
    function l(x) {
      const _ = new P();
      for (let v = 0; v < s.length; v += 3)
        _.x = s[v + 0], _.y = s[v + 1], _.z = s[v + 2], _.normalize().multiplyScalar(x), s[v + 0] = _.x, s[v + 1] = _.y, s[v + 2] = _.z;
    }
    function h() {
      const x = new P();
      for (let _ = 0; _ < s.length; _ += 3) {
        x.x = s[_ + 0], x.y = s[_ + 1], x.z = s[_ + 2];
        const v = m(x) / 2 / Math.PI + 0.5, I = p(x) / Math.PI + 0.5;
        a.push(v, 1 - I);
      }
      g(), u();
    }
    function u() {
      for (let x = 0; x < a.length; x += 6) {
        const _ = a[x + 0], v = a[x + 2], I = a[x + 4], T = Math.max(_, v, I), w = Math.min(_, v, I);
        T > 0.9 && w < 0.1 && (_ < 0.2 && (a[x + 0] += 1), v < 0.2 && (a[x + 2] += 1), I < 0.2 && (a[x + 4] += 1));
      }
    }
    function d(x) {
      s.push(x.x, x.y, x.z);
    }
    function f(x, _) {
      const v = x * 3;
      _.x = e[v + 0], _.y = e[v + 1], _.z = e[v + 2];
    }
    function g() {
      const x = new P(), _ = new P(), v = new P(), I = new P(), T = new Z(), w = new Z(), R = new Z();
      for (let L = 0, y = 0; L < s.length; L += 9, y += 6) {
        x.set(s[L + 0], s[L + 1], s[L + 2]), _.set(s[L + 3], s[L + 4], s[L + 5]), v.set(s[L + 6], s[L + 7], s[L + 8]), T.set(a[y + 0], a[y + 1]), w.set(a[y + 2], a[y + 3]), R.set(a[y + 4], a[y + 5]), I.copy(x).add(_).add(v).divideScalar(3);
        const S = m(I);
        b(T, y + 0, x, S), b(w, y + 2, _, S), b(R, y + 4, v, S);
      }
    }
    function b(x, _, v, I) {
      I < 0 && x.x === 1 && (a[_] = x.x - 1), v.x === 0 && v.z === 0 && (a[_] = I / 2 / Math.PI + 0.5);
    }
    function m(x) {
      return Math.atan2(x.z, -x.x);
    }
    function p(x) {
      return Math.atan2(-x.y, Math.sqrt(x.x * x.x + x.z * x.z));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ci(e.vertices, e.indices, e.radius, e.details);
  }
}
class ko extends ci {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2, i = 1 / n, s = [
      // (±1, ±1, ±1)
      -1,
      -1,
      -1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      1,
      1,
      -1,
      1,
      1,
      1,
      // (0, ±1/φ, ±φ)
      0,
      -i,
      -n,
      0,
      -i,
      n,
      0,
      i,
      -n,
      0,
      i,
      n,
      // (±1/φ, ±φ, 0)
      -i,
      -n,
      0,
      -i,
      n,
      0,
      i,
      -n,
      0,
      i,
      n,
      0,
      // (±φ, 0, ±1/φ)
      -n,
      0,
      -i,
      n,
      0,
      -i,
      -n,
      0,
      i,
      n,
      0,
      i
    ], a = [
      3,
      11,
      7,
      3,
      7,
      15,
      3,
      15,
      13,
      7,
      19,
      17,
      7,
      17,
      6,
      7,
      6,
      15,
      17,
      4,
      8,
      17,
      8,
      10,
      17,
      10,
      6,
      8,
      0,
      16,
      8,
      16,
      2,
      8,
      2,
      10,
      0,
      12,
      1,
      0,
      1,
      18,
      0,
      18,
      16,
      6,
      10,
      2,
      6,
      2,
      13,
      6,
      13,
      15,
      2,
      16,
      18,
      2,
      18,
      3,
      2,
      3,
      13,
      18,
      1,
      9,
      18,
      9,
      11,
      18,
      11,
      3,
      4,
      14,
      12,
      4,
      12,
      0,
      4,
      0,
      8,
      11,
      9,
      5,
      11,
      5,
      19,
      11,
      19,
      7,
      19,
      5,
      14,
      19,
      14,
      4,
      19,
      4,
      17,
      1,
      12,
      14,
      1,
      14,
      5,
      1,
      5,
      9
    ];
    super(s, a, e, t), this.type = "DodecahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new ko(e.radius, e.detail);
  }
}
const da = /* @__PURE__ */ new P(), fa = /* @__PURE__ */ new P(), Oc = /* @__PURE__ */ new P(), pa = /* @__PURE__ */ new qt();
class af extends Xe {
  constructor(e = null, t = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = {
      geometry: e,
      thresholdAngle: t
    }, e !== null) {
      const i = Math.pow(10, 4), s = Math.cos(Ui * t), a = e.getIndex(), o = e.getAttribute("position"), c = a ? a.count : o.count, l = [0, 0, 0], h = ["a", "b", "c"], u = new Array(3), d = {}, f = [];
      for (let g = 0; g < c; g += 3) {
        a ? (l[0] = a.getX(g), l[1] = a.getX(g + 1), l[2] = a.getX(g + 2)) : (l[0] = g, l[1] = g + 1, l[2] = g + 2);
        const { a: b, b: m, c: p } = pa;
        if (b.fromBufferAttribute(o, l[0]), m.fromBufferAttribute(o, l[1]), p.fromBufferAttribute(o, l[2]), pa.getNormal(Oc), u[0] = `${Math.round(b.x * i)},${Math.round(b.y * i)},${Math.round(b.z * i)}`, u[1] = `${Math.round(m.x * i)},${Math.round(m.y * i)},${Math.round(m.z * i)}`, u[2] = `${Math.round(p.x * i)},${Math.round(p.y * i)},${Math.round(p.z * i)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0]))
          for (let x = 0; x < 3; x++) {
            const _ = (x + 1) % 3, v = u[x], I = u[_], T = pa[h[x]], w = pa[h[_]], R = `${v}_${I}`, L = `${I}_${v}`;
            L in d && d[L] ? (Oc.dot(d[L].normal) <= s && (f.push(T.x, T.y, T.z), f.push(w.x, w.y, w.z)), d[L] = null) : R in d || (d[R] = {
              index0: l[x],
              index1: l[_],
              normal: Oc.clone()
            });
          }
      }
      for (const g in d)
        if (d[g]) {
          const { index0: b, index1: m } = d[g];
          da.fromBufferAttribute(o, b), fa.fromBufferAttribute(o, m), f.push(da.x, da.y, da.z), f.push(fa.x, fa.y, fa.z);
        }
      this.setAttribute("position", new we(f, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
class Ni extends fr {
  constructor(e) {
    super(e), this.uuid = Qt(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const i = this.holes[t];
      e.holes.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(new fr().fromJSON(i));
    }
    return this;
  }
}
const wx = {
  triangulate: function(r, e, t = 2) {
    const n = e && e.length, i = n ? e[0] * t : r.length;
    let s = of(r, 0, i, t, !0);
    const a = [];
    if (!s || s.next === s.prev) return a;
    let o, c, l, h, u, d, f;
    if (n && (s = Px(r, e, s, t)), r.length > 80 * t) {
      o = l = r[0], c = h = r[1];
      for (let g = t; g < i; g += t)
        u = r[g], d = r[g + 1], u < o && (o = u), d < c && (c = d), u > l && (l = u), d > h && (h = d);
      f = Math.max(l - o, h - c), f = f !== 0 ? 32767 / f : 0;
    }
    return pr(s, a, t, o, c, f, 0), a;
  }
};
function of(r, e, t, n, i) {
  let s, a;
  if (i === Gx(r, e, t, n) > 0)
    for (s = e; s < t; s += n) a = du(s, r[s], r[s + 1], a);
  else
    for (s = t - n; s >= e; s -= n) a = du(s, r[s], r[s + 1], a);
  return a && zo(a, a.next) && (gr(a), a = a.next), a;
}
function zi(r, e) {
  if (!r) return r;
  e || (e = r);
  let t = r, n;
  do
    if (n = !1, !t.steiner && (zo(t, t.next) || ut(t.prev, t, t.next) === 0)) {
      if (gr(t), t = e = t.prev, t === t.next) break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function pr(r, e, t, n, i, s, a) {
  if (!r) return;
  !a && s && Nx(r, n, i, s);
  let o = r, c, l;
  for (; r.prev !== r.next; ) {
    if (c = r.prev, l = r.next, s ? Ex(r, n, i, s) : Tx(r)) {
      e.push(c.i / t | 0), e.push(r.i / t | 0), e.push(l.i / t | 0), gr(r), r = l.next, o = l.next;
      continue;
    }
    if (r = l, r === o) {
      a ? a === 1 ? (r = Rx(zi(r), e, t), pr(r, e, t, n, i, s, 2)) : a === 2 && Cx(r, e, t, n, i, s) : pr(zi(r), e, t, n, i, s, 1);
      break;
    }
  }
}
function Tx(r) {
  const e = r.prev, t = r, n = r.next;
  if (ut(e, t, n) >= 0) return !1;
  const i = e.x, s = t.x, a = n.x, o = e.y, c = t.y, l = n.y, h = i < s ? i < a ? i : a : s < a ? s : a, u = o < c ? o < l ? o : l : c < l ? c : l, d = i > s ? i > a ? i : a : s > a ? s : a, f = o > c ? o > l ? o : l : c > l ? c : l;
  let g = n.next;
  for (; g !== e; ) {
    if (g.x >= h && g.x <= d && g.y >= u && g.y <= f && bs(i, o, s, c, a, l, g.x, g.y) && ut(g.prev, g, g.next) >= 0) return !1;
    g = g.next;
  }
  return !0;
}
function Ex(r, e, t, n) {
  const i = r.prev, s = r, a = r.next;
  if (ut(i, s, a) >= 0) return !1;
  const o = i.x, c = s.x, l = a.x, h = i.y, u = s.y, d = a.y, f = o < c ? o < l ? o : l : c < l ? c : l, g = h < u ? h < d ? h : d : u < d ? u : d, b = o > c ? o > l ? o : l : c > l ? c : l, m = h > u ? h > d ? h : d : u > d ? u : d, p = tl(f, g, e, t, n), x = tl(b, m, e, t, n);
  let _ = r.prevZ, v = r.nextZ;
  for (; _ && _.z >= p && v && v.z <= x; ) {
    if (_.x >= f && _.x <= b && _.y >= g && _.y <= m && _ !== i && _ !== a && bs(o, h, c, u, l, d, _.x, _.y) && ut(_.prev, _, _.next) >= 0 || (_ = _.prevZ, v.x >= f && v.x <= b && v.y >= g && v.y <= m && v !== i && v !== a && bs(o, h, c, u, l, d, v.x, v.y) && ut(v.prev, v, v.next) >= 0)) return !1;
    v = v.nextZ;
  }
  for (; _ && _.z >= p; ) {
    if (_.x >= f && _.x <= b && _.y >= g && _.y <= m && _ !== i && _ !== a && bs(o, h, c, u, l, d, _.x, _.y) && ut(_.prev, _, _.next) >= 0) return !1;
    _ = _.prevZ;
  }
  for (; v && v.z <= x; ) {
    if (v.x >= f && v.x <= b && v.y >= g && v.y <= m && v !== i && v !== a && bs(o, h, c, u, l, d, v.x, v.y) && ut(v.prev, v, v.next) >= 0) return !1;
    v = v.nextZ;
  }
  return !0;
}
function Rx(r, e, t) {
  let n = r;
  do {
    const i = n.prev, s = n.next.next;
    !zo(i, s) && cf(i, n, n.next, s) && mr(i, s) && mr(s, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(s.i / t | 0), gr(n), gr(n.next), n = r = s), n = n.next;
  } while (n !== r);
  return zi(n);
}
function Cx(r, e, t, n, i, s) {
  let a = r;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && Bx(a, o)) {
        let c = lf(a, o);
        a = zi(a, a.next), c = zi(c, c.next), pr(a, e, t, n, i, s, 0), pr(c, e, t, n, i, s, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== r);
}
function Px(r, e, t, n) {
  const i = [];
  let s, a, o, c, l;
  for (s = 0, a = e.length; s < a; s++)
    o = e[s] * n, c = s < a - 1 ? e[s + 1] * n : r.length, l = of(r, o, c, n, !1), l === l.next && (l.steiner = !0), i.push(Ox(l));
  for (i.sort(Ix), s = 0; s < i.length; s++)
    t = Lx(i[s], t);
  return t;
}
function Ix(r, e) {
  return r.x - e.x;
}
function Lx(r, e) {
  const t = Dx(r, e);
  if (!t)
    return e;
  const n = lf(t, r);
  return zi(n, n.next), zi(t, t.next);
}
function Dx(r, e) {
  let t = e, n = -1 / 0, i;
  const s = r.x, a = r.y;
  do {
    if (a <= t.y && a >= t.next.y && t.next.y !== t.y) {
      const d = t.x + (a - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (d <= s && d > n && (n = d, i = t.x < t.next.x ? t : t.next, d === s))
        return i;
    }
    t = t.next;
  } while (t !== e);
  if (!i) return null;
  const o = i, c = i.x, l = i.y;
  let h = 1 / 0, u;
  t = i;
  do
    s >= t.x && t.x >= c && s !== t.x && bs(a < l ? s : n, a, c, l, a < l ? n : s, a, t.x, t.y) && (u = Math.abs(a - t.y) / (s - t.x), mr(t, r) && (u < h || u === h && (t.x > i.x || t.x === i.x && Ux(i, t))) && (i = t, h = u)), t = t.next;
  while (t !== o);
  return i;
}
function Ux(r, e) {
  return ut(r.prev, r, e.prev) < 0 && ut(e.next, r, r.next) < 0;
}
function Nx(r, e, t, n) {
  let i = r;
  do
    i.z === 0 && (i.z = tl(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== r);
  i.prevZ.nextZ = null, i.prevZ = null, Fx(i);
}
function Fx(r) {
  let e, t, n, i, s, a, o, c, l = 1;
  do {
    for (t = r, r = null, s = null, a = 0; t; ) {
      for (a++, n = t, o = 0, e = 0; e < l && (o++, n = n.nextZ, !!n); e++)
        ;
      for (c = l; o > 0 || c > 0 && n; )
        o !== 0 && (c === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, o--) : (i = n, n = n.nextZ, c--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i;
      t = n;
    }
    s.nextZ = null, l *= 2;
  } while (a > 1);
  return r;
}
function tl(r, e, t, n, i) {
  return r = (r - t) * i | 0, e = (e - n) * i | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
}
function Ox(r) {
  let e = r, t = r;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== r);
  return t;
}
function bs(r, e, t, n, i, s, a, o) {
  return (i - a) * (e - o) >= (r - a) * (s - o) && (r - a) * (n - o) >= (t - a) * (e - o) && (t - a) * (s - o) >= (i - a) * (n - o);
}
function Bx(r, e) {
  return r.next.i !== e.i && r.prev.i !== e.i && !kx(r, e) && // dones't intersect other edges
  (mr(r, e) && mr(e, r) && zx(r, e) && // locally visible
  (ut(r.prev, r, e.prev) || ut(r, e.prev, e)) || // does not create opposite-facing sectors
  zo(r, e) && ut(r.prev, r, r.next) > 0 && ut(e.prev, e, e.next) > 0);
}
function ut(r, e, t) {
  return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
}
function zo(r, e) {
  return r.x === e.x && r.y === e.y;
}
function cf(r, e, t, n) {
  const i = ga(ut(r, e, t)), s = ga(ut(r, e, n)), a = ga(ut(t, n, r)), o = ga(ut(t, n, e));
  return !!(i !== s && a !== o || i === 0 && ma(r, t, e) || s === 0 && ma(r, n, e) || a === 0 && ma(t, r, n) || o === 0 && ma(t, e, n));
}
function ma(r, e, t) {
  return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
}
function ga(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function kx(r, e) {
  let t = r;
  do {
    if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && cf(t, t.next, r, e)) return !0;
    t = t.next;
  } while (t !== r);
  return !1;
}
function mr(r, e) {
  return ut(r.prev, r, r.next) < 0 ? ut(r, e, r.next) >= 0 && ut(r, r.prev, e) >= 0 : ut(r, e, r.prev) < 0 || ut(r, r.next, e) < 0;
}
function zx(r, e) {
  let t = r, n = !1;
  const i = (r.x + e.x) / 2, s = (r.y + e.y) / 2;
  do
    t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== r);
  return n;
}
function lf(r, e) {
  const t = new nl(r.i, r.x, r.y), n = new nl(e.i, e.x, e.y), i = r.next, s = e.prev;
  return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
}
function du(r, e, t, n) {
  const i = new nl(r, e, t);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function gr(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function nl(r, e, t) {
  this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function Gx(r, e, t, n) {
  let i = 0;
  for (let s = e, a = t - n; s < t; s += n)
    i += (r[a] - r[s]) * (r[s + 1] + r[a + 1]), a = s;
  return i;
}
class Sn {
  // calculate area of the contour polygon
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, s = 0; s < t; i = s++)
      n += e[i].x * e[s].y - e[s].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return Sn.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], i = [], s = [];
    fu(e), pu(n, e);
    let a = e.length;
    t.forEach(fu);
    for (let c = 0; c < t.length; c++)
      i.push(a), a += t[c].length, pu(n, t[c]);
    const o = wx.triangulate(n, i);
    for (let c = 0; c < o.length; c += 3)
      s.push(o.slice(c, c + 3));
    return s;
  }
}
function fu(r) {
  const e = r.length;
  e > 2 && r[e - 1].equals(r[0]) && r.pop();
}
function pu(r, e) {
  for (let t = 0; t < e.length; t++)
    r.push(e[t].x), r.push(e[t].y);
}
class Go extends Xe {
  constructor(e = new Ni([new Z(0.5, 0.5), new Z(-0.5, 0.5), new Z(-0.5, -0.5), new Z(0.5, -0.5)]), t = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: e,
      options: t
    }, e = Array.isArray(e) ? e : [e];
    const n = this, i = [], s = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o];
      a(l);
    }
    this.setAttribute("position", new we(i, 3)), this.setAttribute("uv", new we(s, 2)), this.computeVertexNormals();
    function a(o) {
      const c = [], l = t.curveSegments !== void 0 ? t.curveSegments : 12, h = t.steps !== void 0 ? t.steps : 1, u = t.depth !== void 0 ? t.depth : 1;
      let d = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, f = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, g = t.bevelSize !== void 0 ? t.bevelSize : f - 0.1, b = t.bevelOffset !== void 0 ? t.bevelOffset : 0, m = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const p = t.extrudePath, x = t.UVGenerator !== void 0 ? t.UVGenerator : Hx;
      let _, v = !1, I, T, w, R;
      p && (_ = p.getSpacedPoints(h), v = !0, d = !1, I = p.computeFrenetFrames(h, !1), T = new P(), w = new P(), R = new P()), d || (m = 0, f = 0, g = 0, b = 0);
      const L = o.extractPoints(l);
      let y = L.shape;
      const S = L.holes;
      if (!Sn.isClockWise(y)) {
        y = y.reverse();
        for (let X = 0, E = S.length; X < E; X++) {
          const ne = S[X];
          Sn.isClockWise(ne) && (S[X] = ne.reverse());
        }
      }
      const O = Sn.triangulateShape(y, S), z = y;
      for (let X = 0, E = S.length; X < E; X++) {
        const ne = S[X];
        y = y.concat(ne);
      }
      function V(X, E, ne) {
        return E || console.error("THREE.ExtrudeGeometry: vec does not exist"), X.clone().addScaledVector(E, ne);
      }
      const k = y.length, Y = O.length;
      function W(X, E, ne) {
        let te, ee, re;
        const Re = X.x - E.x, me = X.y - E.y, C = ne.x - X.x, M = ne.y - X.y, B = Re * Re + me * me, K = Re * M - me * C;
        if (Math.abs(K) > Number.EPSILON) {
          const Q = Math.sqrt(B), J = Math.sqrt(C * C + M * M), Te = E.x - me / Q, fe = E.y + Re / Q, ve = ne.x - M / J, Ke = ne.y + C / J, ae = ((ve - Te) * M - (Ke - fe) * C) / (Re * M - me * C);
          te = Te + Re * ae - X.x, ee = fe + me * ae - X.y;
          const ye = te * te + ee * ee;
          if (ye <= 2)
            return new Z(te, ee);
          re = Math.sqrt(ye / 2);
        } else {
          let Q = !1;
          Re > Number.EPSILON ? C > Number.EPSILON && (Q = !0) : Re < -Number.EPSILON ? C < -Number.EPSILON && (Q = !0) : Math.sign(me) === Math.sign(M) && (Q = !0), Q ? (te = -me, ee = Re, re = Math.sqrt(B)) : (te = Re, ee = me, re = Math.sqrt(B / 2));
        }
        return new Z(te / re, ee / re);
      }
      const le = [];
      for (let X = 0, E = z.length, ne = E - 1, te = X + 1; X < E; X++, ne++, te++)
        ne === E && (ne = 0), te === E && (te = 0), le[X] = W(z[X], z[ne], z[te]);
      const oe = [];
      let pe, De = le.concat();
      for (let X = 0, E = S.length; X < E; X++) {
        const ne = S[X];
        pe = [];
        for (let te = 0, ee = ne.length, re = ee - 1, Re = te + 1; te < ee; te++, re++, Re++)
          re === ee && (re = 0), Re === ee && (Re = 0), pe[te] = W(ne[te], ne[re], ne[Re]);
        oe.push(pe), De = De.concat(pe);
      }
      for (let X = 0; X < m; X++) {
        const E = X / m, ne = f * Math.cos(E * Math.PI / 2), te = g * Math.sin(E * Math.PI / 2) + b;
        for (let ee = 0, re = z.length; ee < re; ee++) {
          const Re = V(z[ee], le[ee], te);
          de(Re.x, Re.y, -ne);
        }
        for (let ee = 0, re = S.length; ee < re; ee++) {
          const Re = S[ee];
          pe = oe[ee];
          for (let me = 0, C = Re.length; me < C; me++) {
            const M = V(Re[me], pe[me], te);
            de(M.x, M.y, -ne);
          }
        }
      }
      const Oe = g + b;
      for (let X = 0; X < k; X++) {
        const E = d ? V(y[X], De[X], Oe) : y[X];
        v ? (w.copy(I.normals[0]).multiplyScalar(E.x), T.copy(I.binormals[0]).multiplyScalar(E.y), R.copy(_[0]).add(w).add(T), de(R.x, R.y, R.z)) : de(E.x, E.y, 0);
      }
      for (let X = 1; X <= h; X++)
        for (let E = 0; E < k; E++) {
          const ne = d ? V(y[E], De[E], Oe) : y[E];
          v ? (w.copy(I.normals[X]).multiplyScalar(ne.x), T.copy(I.binormals[X]).multiplyScalar(ne.y), R.copy(_[X]).add(w).add(T), de(R.x, R.y, R.z)) : de(ne.x, ne.y, u / h * X);
        }
      for (let X = m - 1; X >= 0; X--) {
        const E = X / m, ne = f * Math.cos(E * Math.PI / 2), te = g * Math.sin(E * Math.PI / 2) + b;
        for (let ee = 0, re = z.length; ee < re; ee++) {
          const Re = V(z[ee], le[ee], te);
          de(Re.x, Re.y, u + ne);
        }
        for (let ee = 0, re = S.length; ee < re; ee++) {
          const Re = S[ee];
          pe = oe[ee];
          for (let me = 0, C = Re.length; me < C; me++) {
            const M = V(Re[me], pe[me], te);
            v ? de(M.x, M.y + _[h - 1].y, _[h - 1].x + ne) : de(M.x, M.y, u + ne);
          }
        }
      }
      j(), ie();
      function j() {
        const X = i.length / 3;
        if (d) {
          let E = 0, ne = k * E;
          for (let te = 0; te < Y; te++) {
            const ee = O[te];
            Ue(ee[2] + ne, ee[1] + ne, ee[0] + ne);
          }
          E = h + m * 2, ne = k * E;
          for (let te = 0; te < Y; te++) {
            const ee = O[te];
            Ue(ee[0] + ne, ee[1] + ne, ee[2] + ne);
          }
        } else {
          for (let E = 0; E < Y; E++) {
            const ne = O[E];
            Ue(ne[2], ne[1], ne[0]);
          }
          for (let E = 0; E < Y; E++) {
            const ne = O[E];
            Ue(ne[0] + k * h, ne[1] + k * h, ne[2] + k * h);
          }
        }
        n.addGroup(X, i.length / 3 - X, 0);
      }
      function ie() {
        const X = i.length / 3;
        let E = 0;
        Me(z, E), E += z.length;
        for (let ne = 0, te = S.length; ne < te; ne++) {
          const ee = S[ne];
          Me(ee, E), E += ee.length;
        }
        n.addGroup(X, i.length / 3 - X, 1);
      }
      function Me(X, E) {
        let ne = X.length;
        for (; --ne >= 0; ) {
          const te = ne;
          let ee = ne - 1;
          ee < 0 && (ee = X.length - 1);
          for (let re = 0, Re = h + m * 2; re < Re; re++) {
            const me = k * re, C = k * (re + 1), M = E + te + me, B = E + ee + me, K = E + ee + C, Q = E + te + C;
            Le(M, B, K, Q);
          }
        }
      }
      function de(X, E, ne) {
        c.push(X), c.push(E), c.push(ne);
      }
      function Ue(X, E, ne) {
        ze(X), ze(E), ze(ne);
        const te = i.length / 3, ee = x.generateTopUV(n, i, te - 3, te - 2, te - 1);
        se(ee[0]), se(ee[1]), se(ee[2]);
      }
      function Le(X, E, ne, te) {
        ze(X), ze(E), ze(te), ze(E), ze(ne), ze(te);
        const ee = i.length / 3, re = x.generateSideWallUV(n, i, ee - 6, ee - 3, ee - 2, ee - 1);
        se(re[0]), se(re[1]), se(re[3]), se(re[1]), se(re[2]), se(re[3]);
      }
      function ze(X) {
        i.push(c[X * 3 + 0]), i.push(c[X * 3 + 1]), i.push(c[X * 3 + 2]);
      }
      function se(X) {
        s.push(X.x), s.push(X.y);
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
    return Vx(t, n, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let s = 0, a = e.shapes.length; s < a; s++) {
      const o = t[e.shapes[s]];
      n.push(o);
    }
    const i = e.options.extrudePath;
    return i !== void 0 && (e.options.extrudePath = new po[i.type]().fromJSON(i)), new Go(n, e.options);
  }
}
const Hx = {
  generateTopUV: function(r, e, t, n, i) {
    const s = e[t * 3], a = e[t * 3 + 1], o = e[n * 3], c = e[n * 3 + 1], l = e[i * 3], h = e[i * 3 + 1];
    return [
      new Z(s, a),
      new Z(o, c),
      new Z(l, h)
    ];
  },
  generateSideWallUV: function(r, e, t, n, i, s) {
    const a = e[t * 3], o = e[t * 3 + 1], c = e[t * 3 + 2], l = e[n * 3], h = e[n * 3 + 1], u = e[n * 3 + 2], d = e[i * 3], f = e[i * 3 + 1], g = e[i * 3 + 2], b = e[s * 3], m = e[s * 3 + 1], p = e[s * 3 + 2];
    return Math.abs(o - h) < Math.abs(a - l) ? [
      new Z(a, 1 - c),
      new Z(l, 1 - u),
      new Z(d, 1 - g),
      new Z(b, 1 - p)
    ] : [
      new Z(o, 1 - c),
      new Z(h, 1 - u),
      new Z(f, 1 - g),
      new Z(m, 1 - p)
    ];
  }
};
function Vx(r, e, t) {
  if (t.shapes = [], Array.isArray(r))
    for (let n = 0, i = r.length; n < i; n++) {
      const s = r[n];
      t.shapes.push(s.uuid);
    }
  else
    t.shapes.push(r.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
class Ho extends ci {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2, i = [
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      0,
      0,
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      n,
      0,
      -1,
      n,
      0,
      1,
      -n,
      0,
      -1,
      -n,
      0,
      1
    ], s = [
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    ];
    super(i, s, e, t), this.type = "IcosahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new Ho(e.radius, e.detail);
  }
}
class Rr extends ci {
  constructor(e = 1, t = 0) {
    const n = [
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1
    ], i = [
      0,
      2,
      4,
      0,
      4,
      3,
      0,
      3,
      5,
      0,
      5,
      2,
      1,
      2,
      5,
      1,
      5,
      3,
      1,
      3,
      4,
      1,
      4,
      2
    ];
    super(n, i, e, t), this.type = "OctahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new Rr(e.radius, e.detail);
  }
}
class Vo extends Xe {
  constructor(e = 0.5, t = 1, n = 32, i = 1, s = 0, a = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: e,
      outerRadius: t,
      thetaSegments: n,
      phiSegments: i,
      thetaStart: s,
      thetaLength: a
    }, n = Math.max(3, n), i = Math.max(1, i);
    const o = [], c = [], l = [], h = [];
    let u = e;
    const d = (t - e) / i, f = new P(), g = new Z();
    for (let b = 0; b <= i; b++) {
      for (let m = 0; m <= n; m++) {
        const p = s + m / n * a;
        f.x = u * Math.cos(p), f.y = u * Math.sin(p), c.push(f.x, f.y, f.z), l.push(0, 0, 1), g.x = (f.x / t + 1) / 2, g.y = (f.y / t + 1) / 2, h.push(g.x, g.y);
      }
      u += d;
    }
    for (let b = 0; b < i; b++) {
      const m = b * (n + 1);
      for (let p = 0; p < n; p++) {
        const x = p + m, _ = x, v = x + n + 1, I = x + n + 2, T = x + 1;
        o.push(_, v, T), o.push(v, I, T);
      }
    }
    this.setIndex(o), this.setAttribute("position", new we(c, 3)), this.setAttribute("normal", new we(l, 3)), this.setAttribute("uv", new we(h, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Vo(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength);
  }
}
class Wo extends Xe {
  constructor(e = new Ni([new Z(0, 0.5), new Z(-0.5, -0.5), new Z(0.5, -0.5)]), t = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = {
      shapes: e,
      curveSegments: t
    };
    const n = [], i = [], s = [], a = [];
    let o = 0, c = 0;
    if (Array.isArray(e) === !1)
      l(e);
    else
      for (let h = 0; h < e.length; h++)
        l(e[h]), this.addGroup(o, c, h), o += c, c = 0;
    this.setIndex(n), this.setAttribute("position", new we(i, 3)), this.setAttribute("normal", new we(s, 3)), this.setAttribute("uv", new we(a, 2));
    function l(h) {
      const u = i.length / 3, d = h.extractPoints(t);
      let f = d.shape;
      const g = d.holes;
      Sn.isClockWise(f) === !1 && (f = f.reverse());
      for (let m = 0, p = g.length; m < p; m++) {
        const x = g[m];
        Sn.isClockWise(x) === !0 && (g[m] = x.reverse());
      }
      const b = Sn.triangulateShape(f, g);
      for (let m = 0, p = g.length; m < p; m++) {
        const x = g[m];
        f = f.concat(x);
      }
      for (let m = 0, p = f.length; m < p; m++) {
        const x = f[m];
        i.push(x.x, x.y, 0), s.push(0, 0, 1), a.push(x.x, x.y);
      }
      for (let m = 0, p = b.length; m < p; m++) {
        const x = b[m], _ = x[0] + u, v = x[1] + u, I = x[2] + u;
        n.push(_, v, I), c += 3;
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes;
    return Wx(t, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let i = 0, s = e.shapes.length; i < s; i++) {
      const a = t[e.shapes[i]];
      n.push(a);
    }
    return new Wo(n, e.curveSegments);
  }
}
function Wx(r, e) {
  if (e.shapes = [], Array.isArray(r))
    for (let t = 0, n = r.length; t < n; t++) {
      const i = r[t];
      e.shapes.push(i.uuid);
    }
  else
    e.shapes.push(r.uuid);
  return e;
}
class Cr extends Xe {
  constructor(e = 1, t = 32, n = 16, i = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: i,
      phiLength: s,
      thetaStart: a,
      thetaLength: o
    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const c = Math.min(a + o, Math.PI);
    let l = 0;
    const h = [], u = new P(), d = new P(), f = [], g = [], b = [], m = [];
    for (let p = 0; p <= n; p++) {
      const x = [], _ = p / n;
      let v = 0;
      p === 0 && a === 0 ? v = 0.5 / t : p === n && c === Math.PI && (v = -0.5 / t);
      for (let I = 0; I <= t; I++) {
        const T = I / t;
        u.x = -e * Math.cos(i + T * s) * Math.sin(a + _ * o), u.y = e * Math.cos(a + _ * o), u.z = e * Math.sin(i + T * s) * Math.sin(a + _ * o), g.push(u.x, u.y, u.z), d.copy(u).normalize(), b.push(d.x, d.y, d.z), m.push(T + v, 1 - _), x.push(l++);
      }
      h.push(x);
    }
    for (let p = 0; p < n; p++)
      for (let x = 0; x < t; x++) {
        const _ = h[p][x + 1], v = h[p][x], I = h[p + 1][x], T = h[p + 1][x + 1];
        (p !== 0 || a > 0) && f.push(_, v, T), (p !== n - 1 || c < Math.PI) && f.push(v, I, T);
      }
    this.setIndex(f), this.setAttribute("position", new we(g, 3)), this.setAttribute("normal", new we(b, 3)), this.setAttribute("uv", new we(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Cr(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class Xo extends ci {
  constructor(e = 1, t = 0) {
    const n = [
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      1,
      -1,
      -1
    ], i = [
      2,
      1,
      0,
      0,
      3,
      2,
      1,
      3,
      0,
      2,
      3,
      1
    ];
    super(n, i, e, t), this.type = "TetrahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new Xo(e.radius, e.detail);
  }
}
class Es extends Xe {
  constructor(e = 1, t = 0.4, n = 12, i = 48, s = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = {
      radius: e,
      tube: t,
      radialSegments: n,
      tubularSegments: i,
      arc: s
    }, n = Math.floor(n), i = Math.floor(i);
    const a = [], o = [], c = [], l = [], h = new P(), u = new P(), d = new P();
    for (let f = 0; f <= n; f++)
      for (let g = 0; g <= i; g++) {
        const b = g / i * s, m = f / n * Math.PI * 2;
        u.x = (e + t * Math.cos(m)) * Math.cos(b), u.y = (e + t * Math.cos(m)) * Math.sin(b), u.z = t * Math.sin(m), o.push(u.x, u.y, u.z), h.x = e * Math.cos(b), h.y = e * Math.sin(b), d.subVectors(u, h).normalize(), c.push(d.x, d.y, d.z), l.push(g / i), l.push(f / n);
      }
    for (let f = 1; f <= n; f++)
      for (let g = 1; g <= i; g++) {
        const b = (i + 1) * f + g - 1, m = (i + 1) * (f - 1) + g - 1, p = (i + 1) * (f - 1) + g, x = (i + 1) * f + g;
        a.push(b, m, x), a.push(m, p, x);
      }
    this.setIndex(a), this.setAttribute("position", new we(o, 3)), this.setAttribute("normal", new we(c, 3)), this.setAttribute("uv", new we(l, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Es(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class qo extends Xe {
  constructor(e = 1, t = 0.4, n = 64, i = 8, s = 2, a = 3) {
    super(), this.type = "TorusKnotGeometry", this.parameters = {
      radius: e,
      tube: t,
      tubularSegments: n,
      radialSegments: i,
      p: s,
      q: a
    }, n = Math.floor(n), i = Math.floor(i);
    const o = [], c = [], l = [], h = [], u = new P(), d = new P(), f = new P(), g = new P(), b = new P(), m = new P(), p = new P();
    for (let _ = 0; _ <= n; ++_) {
      const v = _ / n * s * Math.PI * 2;
      x(v, s, a, e, f), x(v + 0.01, s, a, e, g), m.subVectors(g, f), p.addVectors(g, f), b.crossVectors(m, p), p.crossVectors(b, m), b.normalize(), p.normalize();
      for (let I = 0; I <= i; ++I) {
        const T = I / i * Math.PI * 2, w = -t * Math.cos(T), R = t * Math.sin(T);
        u.x = f.x + (w * p.x + R * b.x), u.y = f.y + (w * p.y + R * b.y), u.z = f.z + (w * p.z + R * b.z), c.push(u.x, u.y, u.z), d.subVectors(u, f).normalize(), l.push(d.x, d.y, d.z), h.push(_ / n), h.push(I / i);
      }
    }
    for (let _ = 1; _ <= n; _++)
      for (let v = 1; v <= i; v++) {
        const I = (i + 1) * (_ - 1) + (v - 1), T = (i + 1) * _ + (v - 1), w = (i + 1) * _ + v, R = (i + 1) * (_ - 1) + v;
        o.push(I, T, R), o.push(T, w, R);
      }
    this.setIndex(o), this.setAttribute("position", new we(c, 3)), this.setAttribute("normal", new we(l, 3)), this.setAttribute("uv", new we(h, 2));
    function x(_, v, I, T, w) {
      const R = Math.cos(_), L = Math.sin(_), y = I / v * _, S = Math.cos(y);
      w.x = T * (2 + S) * 0.5 * R, w.y = T * (2 + S) * L * 0.5, w.z = T * Math.sin(y) * 0.5;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new qo(e.radius, e.tube, e.tubularSegments, e.radialSegments, e.p, e.q);
  }
}
class Yo extends Xe {
  constructor(e = new kl(new P(-1, -1, 0), new P(-1, 1, 0), new P(1, 1, 0)), t = 64, n = 1, i = 8, s = !1) {
    super(), this.type = "TubeGeometry", this.parameters = {
      path: e,
      tubularSegments: t,
      radius: n,
      radialSegments: i,
      closed: s
    };
    const a = e.computeFrenetFrames(t, s);
    this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
    const o = new P(), c = new P(), l = new Z();
    let h = new P();
    const u = [], d = [], f = [], g = [];
    b(), this.setIndex(g), this.setAttribute("position", new we(u, 3)), this.setAttribute("normal", new we(d, 3)), this.setAttribute("uv", new we(f, 2));
    function b() {
      for (let _ = 0; _ < t; _++)
        m(_);
      m(s === !1 ? t : 0), x(), p();
    }
    function m(_) {
      h = e.getPointAt(_ / t, h);
      const v = a.normals[_], I = a.binormals[_];
      for (let T = 0; T <= i; T++) {
        const w = T / i * Math.PI * 2, R = Math.sin(w), L = -Math.cos(w);
        c.x = L * v.x + R * I.x, c.y = L * v.y + R * I.y, c.z = L * v.z + R * I.z, c.normalize(), d.push(c.x, c.y, c.z), o.x = h.x + n * c.x, o.y = h.y + n * c.y, o.z = h.z + n * c.z, u.push(o.x, o.y, o.z);
      }
    }
    function p() {
      for (let _ = 1; _ <= t; _++)
        for (let v = 1; v <= i; v++) {
          const I = (i + 1) * (_ - 1) + (v - 1), T = (i + 1) * _ + (v - 1), w = (i + 1) * _ + v, R = (i + 1) * (_ - 1) + v;
          g.push(I, T, R), g.push(T, w, R);
        }
    }
    function x() {
      for (let _ = 0; _ <= t; _++)
        for (let v = 0; v <= i; v++)
          l.x = _ / t, l.y = v / i, f.push(l.x, l.y);
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.path = this.parameters.path.toJSON(), e;
  }
  static fromJSON(e) {
    return new Yo(
      new po[e.path.type]().fromJSON(e.path),
      e.tubularSegments,
      e.radius,
      e.radialSegments,
      e.closed
    );
  }
}
class hf extends Xe {
  constructor(e = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = {
      geometry: e
    }, e !== null) {
      const t = [], n = /* @__PURE__ */ new Set(), i = new P(), s = new P();
      if (e.index !== null) {
        const a = e.attributes.position, o = e.index;
        let c = e.groups;
        c.length === 0 && (c = [{ start: 0, count: o.count, materialIndex: 0 }]);
        for (let l = 0, h = c.length; l < h; ++l) {
          const u = c[l], d = u.start, f = u.count;
          for (let g = d, b = d + f; g < b; g += 3)
            for (let m = 0; m < 3; m++) {
              const p = o.getX(g + m), x = o.getX(g + (m + 1) % 3);
              i.fromBufferAttribute(a, p), s.fromBufferAttribute(a, x), mu(i, s, n) === !0 && (t.push(i.x, i.y, i.z), t.push(s.x, s.y, s.z));
            }
        }
      } else {
        const a = e.attributes.position;
        for (let o = 0, c = a.count / 3; o < c; o++)
          for (let l = 0; l < 3; l++) {
            const h = 3 * o + l, u = 3 * o + (l + 1) % 3;
            i.fromBufferAttribute(a, h), s.fromBufferAttribute(a, u), mu(i, s, n) === !0 && (t.push(i.x, i.y, i.z), t.push(s.x, s.y, s.z));
          }
      }
      this.setAttribute("position", new we(t, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
function mu(r, e, t) {
  const n = `${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`, i = `${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;
  return t.has(n) === !0 || t.has(i) === !0 ? !1 : (t.add(n), t.add(i), !0);
}
var gu = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BoxGeometry: oi,
  CapsuleGeometry: Fo,
  CircleGeometry: Oo,
  ConeGeometry: Bo,
  CylinderGeometry: Xi,
  DodecahedronGeometry: ko,
  EdgesGeometry: af,
  ExtrudeGeometry: Go,
  IcosahedronGeometry: Ho,
  LatheGeometry: Er,
  OctahedronGeometry: Rr,
  PlaneGeometry: Wi,
  PolyhedronGeometry: ci,
  RingGeometry: Vo,
  ShapeGeometry: Wo,
  SphereGeometry: Cr,
  TetrahedronGeometry: Xo,
  TorusGeometry: Es,
  TorusKnotGeometry: qo,
  TubeGeometry: Yo,
  WireframeGeometry: hf
});
class uf extends Mt {
  constructor(e) {
    super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new ue(0), this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
}
class df extends pn {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class ri extends Mt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new ue(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ai, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new $t(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class an extends ri {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Z(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return pt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new ue(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new ue(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new ue(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class ff extends Mt {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new ue(16777215), this.specular = new ue(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ai, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new $t(), this.combine = xr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class pf extends Mt {
  constructor(e) {
    super(), this.isMeshToonMaterial = !0, this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new ue(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ai, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
class mf extends Mt {
  constructor(e) {
    super(), this.isMeshNormalMaterial = !0, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ai, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
class gf extends Mt {
  constructor(e) {
    super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new ue(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ai, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new $t(), this.combine = xr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class bf extends Mt {
  constructor(e) {
    super(), this.isMeshMatcapMaterial = !0, this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new ue(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ai, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class _f extends Ot {
  constructor(e) {
    super(), this.isLineDashedMaterial = !0, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this;
  }
}
function Ii(r, e, t) {
  return !r || // let 'undefined' and 'null' pass
  !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
}
function xf(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function vf(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function il(r, e, t) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = t[s] * e;
    for (let c = 0; c !== e; ++c)
      i[a++] = r[o + c];
  }
  return i;
}
function Gl(r, e, t, n) {
  let i = 1, s = r[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = r[i++];
  if (s === void 0) return;
  let a = s[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push.apply(t, a)), s = r[i++];
      while (s !== void 0);
    else if (a.toArray !== void 0)
      do
        a = s[n], a !== void 0 && (e.push(s.time), a.toArray(t, t.length)), s = r[i++];
      while (s !== void 0);
    else
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push(a)), s = r[i++];
      while (s !== void 0);
}
function Xx(r, e, t, n, i = 30) {
  const s = r.clone();
  s.name = e;
  const a = [];
  for (let c = 0; c < s.tracks.length; ++c) {
    const l = s.tracks[c], h = l.getValueSize(), u = [], d = [];
    for (let f = 0; f < l.times.length; ++f) {
      const g = l.times[f] * i;
      if (!(g < t || g >= n)) {
        u.push(l.times[f]);
        for (let b = 0; b < h; ++b)
          d.push(l.values[f * h + b]);
      }
    }
    u.length !== 0 && (l.times = Ii(u, l.times.constructor), l.values = Ii(d, l.values.constructor), a.push(l));
  }
  s.tracks = a;
  let o = 1 / 0;
  for (let c = 0; c < s.tracks.length; ++c)
    o > s.tracks[c].times[0] && (o = s.tracks[c].times[0]);
  for (let c = 0; c < s.tracks.length; ++c)
    s.tracks[c].shift(-1 * o);
  return s.resetDuration(), s;
}
function qx(r, e = 0, t = r, n = 30) {
  n <= 0 && (n = 30);
  const i = t.tracks.length, s = e / n;
  for (let a = 0; a < i; ++a) {
    const o = t.tracks[a], c = o.ValueTypeName;
    if (c === "bool" || c === "string") continue;
    const l = r.tracks.find(function(p) {
      return p.name === o.name && p.ValueTypeName === c;
    });
    if (l === void 0) continue;
    let h = 0;
    const u = o.getValueSize();
    o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (h = u / 3);
    let d = 0;
    const f = l.getValueSize();
    l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (d = f / 3);
    const g = o.times.length - 1;
    let b;
    if (s <= o.times[0]) {
      const p = h, x = u - h;
      b = o.values.slice(p, x);
    } else if (s >= o.times[g]) {
      const p = g * u + h, x = p + u - h;
      b = o.values.slice(p, x);
    } else {
      const p = o.createInterpolant(), x = h, _ = u - h;
      p.evaluate(s), b = p.resultBuffer.slice(x, _);
    }
    c === "quaternion" && new Nt().fromArray(b).normalize().conjugate().toArray(b);
    const m = l.times.length;
    for (let p = 0; p < m; ++p) {
      const x = p * f + d;
      if (c === "quaternion")
        Nt.multiplyQuaternionsFlat(
          l.values,
          x,
          b,
          0,
          l.values,
          x
        );
      else {
        const _ = f - d * 2;
        for (let v = 0; v < _; ++v)
          l.values[x + v] -= b[v];
      }
    }
  }
  return r.blendMode = xl, r;
}
const Yx = {
  convertArray: Ii,
  isTypedArray: xf,
  getKeyframeOrder: vf,
  sortedArray: il,
  flattenJSON: Gl,
  subclip: Xx,
  makeClipAdditive: qx
};
class Ls {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    e: {
      t: {
        let a;
        n: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (s = i, i = t[++n], e < i)
                break t;
            }
            a = t.length;
            break n;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && (n = 2, s = o);
            for (let c = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === c) break;
              if (i = s, s = t[--n - 1], e >= s)
                break t;
            }
            a = n, n = 0;
            break n;
          }
          break e;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let a = 0; a !== i; ++a)
      t[a] = n[s + a];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class yf extends Ls {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Ri,
      endingEnd: Ri
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, a = e + 1, o = i[s], c = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case Ci:
          s = e, o = 2 * t - n;
          break;
        case ar:
          s = i.length - 2, o = t + i[s] - i[s + 1];
          break;
        default:
          s = e, o = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case Ci:
          a = e, c = 2 * n - t;
          break;
        case ar:
          a = 1, c = n + i[1] - i[0];
          break;
        default:
          a = e - 1, c = t;
      }
    const l = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = l / (t - o), this._weightNext = l / (c - n), this._offsetPrev = s * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, g = (n - t) / (i - t), b = g * g, m = b * g, p = -d * m + 2 * d * b - d * g, x = (1 + d) * m + (-1.5 - 2 * d) * b + (-0.5 + d) * g + 1, _ = (-1 - f) * m + (1.5 + f) * b + 0.5 * g, v = f * m - f * b;
    for (let I = 0; I !== o; ++I)
      s[I] = p * a[h + I] + x * a[l + I] + _ * a[c + I] + v * a[u + I];
    return s;
  }
}
class Hl extends Ls {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, h = (n - t) / (i - t), u = 1 - h;
    for (let d = 0; d !== o; ++d)
      s[d] = a[l + d] * u + a[c + d] * h;
    return s;
  }
}
class Mf extends Ls {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class _n {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Ii(t, this.TimeBufferType), this.values = Ii(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Ii(e.times, Array),
        values: Ii(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Mf(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Hl(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new yf(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Ss:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case As:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Aa:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Ss;
      case this.InterpolantFactoryMethodLinear:
        return As;
      case this.InterpolantFactoryMethodSmooth:
        return Aa;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, a = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; a !== -1 && n[a] > t; )
      --a;
    if (++a, s !== 0 || a !== i) {
      s >= a && (a = Math.max(a, 1), s = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(s, a), this.values = this.values.slice(s * o, a * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let a = null;
    for (let o = 0; o !== s; o++) {
      const c = n[o];
      if (typeof c == "number" && isNaN(c)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, c), e = !1;
        break;
      }
      if (a !== null && a > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, c, a), e = !1;
        break;
      }
      a = c;
    }
    if (i !== void 0 && xf(i))
      for (let o = 0, c = i.length; o !== c; ++o) {
        const l = i[o];
        if (isNaN(l)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Aa, s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let c = !1;
      const l = e[o], h = e[o + 1];
      if (l !== h && (o !== 1 || l !== e[0]))
        if (i)
          c = !0;
        else {
          const u = o * n, d = u - n, f = u + n;
          for (let g = 0; g !== n; ++g) {
            const b = t[u + g];
            if (b !== t[d + g] || b !== t[f + g]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (o !== a) {
          e[a] = e[o];
          const u = o * n, d = a * n;
          for (let f = 0; f !== n; ++f)
            t[d + f] = t[u + f];
        }
        ++a;
      }
    }
    if (s > 0) {
      e[a] = e[s];
      for (let o = s * n, c = a * n, l = 0; l !== n; ++l)
        t[c + l] = t[o + l];
      ++a;
    }
    return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
_n.prototype.TimeBufferType = Float32Array;
_n.prototype.ValueBufferType = Float32Array;
_n.prototype.DefaultInterpolation = As;
class qi extends _n {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
qi.prototype.ValueTypeName = "bool";
qi.prototype.ValueBufferType = Array;
qi.prototype.DefaultInterpolation = Ss;
qi.prototype.InterpolantFactoryMethodLinear = void 0;
qi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Vl extends _n {
}
Vl.prototype.ValueTypeName = "color";
class Gi extends _n {
}
Gi.prototype.ValueTypeName = "number";
class Sf extends Ls {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = (n - t) / (i - t);
    let l = e * o;
    for (let h = l + o; l !== h; l += 4)
      Nt.slerpFlat(s, 0, a, l - o, a, l, c);
    return s;
  }
}
class Hi extends _n {
  InterpolantFactoryMethodLinear(e) {
    return new Sf(this.times, this.values, this.getValueSize(), e);
  }
}
Hi.prototype.ValueTypeName = "quaternion";
Hi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Yi extends _n {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Yi.prototype.ValueTypeName = "string";
Yi.prototype.ValueBufferType = Array;
Yi.prototype.DefaultInterpolation = Ss;
Yi.prototype.InterpolantFactoryMethodLinear = void 0;
Yi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Vi extends _n {
}
Vi.prototype.ValueTypeName = "vector";
class Rs {
  constructor(e = "", t = -1, n = [], i = So) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Qt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(Kx(n[a]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let s = 0, a = n.length; s !== a; ++s)
      t.push(_n.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, a = [];
    for (let o = 0; o < s; o++) {
      let c = [], l = [];
      c.push(
        (o + s - 1) % s,
        o,
        (o + 1) % s
      ), l.push(0, 1, 0);
      const h = vf(c);
      c = il(c, 1, h), l = il(l, 1, h), !i && c[0] === 0 && (c.push(s), l.push(l[0])), a.push(
        new Gi(
          ".morphTargetInfluences[" + t[o].name + "]",
          c,
          l
        ).scale(1 / n)
      );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o], h = l.name.match(s);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(l);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, f, g, b) {
      if (f.length !== 0) {
        const m = [], p = [];
        Gl(f, m, p, g), m.length !== 0 && b.push(new u(d, m, p));
      }
    }, i = [], s = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let u = 0; u < l.length; u++) {
      const d = l[u].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const f = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let b = 0; b < d[g].morphTargets.length; b++)
                f[d[g].morphTargets[b]] = -1;
          for (const b in f) {
            const m = [], p = [];
            for (let x = 0; x !== d[g].morphTargets.length; ++x) {
              const _ = d[g];
              m.push(_.time), p.push(_.morphTarget === b ? 1 : 0);
            }
            i.push(new Gi(".morphTargetInfluence[" + b + "]", m, p));
          }
          c = f.length * a;
        } else {
          const f = ".bones[" + t[u].name + "]";
          n(
            Vi,
            f + ".position",
            d,
            "pos",
            i
          ), n(
            Hi,
            f + ".quaternion",
            d,
            "rot",
            i
          ), n(
            Vi,
            f + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, c, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function jx(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Gi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Vi;
    case "color":
      return Vl;
    case "quaternion":
      return Hi;
    case "bool":
    case "boolean":
      return qi;
    case "string":
      return Yi;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function Kx(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = jx(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    Gl(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const On = {
  enabled: !1,
  files: {},
  add: function(r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function(r) {
    if (this.enabled !== !1)
      return this.files[r];
  },
  remove: function(r) {
    delete this.files[r];
  },
  clear: function() {
    this.files = {};
  }
};
class Wl {
  constructor(e, t, n) {
    const i = this;
    let s = !1, a = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, s === !1 && i.onStart !== void 0 && i.onStart(h, a, o), s = !0;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, u) {
      return l.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = l.indexOf(h);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = l.length; u < d; u += 2) {
        const f = l[u], g = l[u + 1];
        if (f.global && (f.lastIndex = 0), f.test(h))
          return g;
      }
      return null;
    };
  }
}
const Af = /* @__PURE__ */ new Wl();
class Ht {
  constructor(e) {
    this.manager = e !== void 0 ? e : Af, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
Ht.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Dn = {};
class Jx extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class mn extends Ht {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = On.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (Dn[e] !== void 0) {
      Dn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Dn[e] = [], Dn[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const a = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), o = this.mimeType, c = this.responseType;
    fetch(a).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const h = Dn[e], u = l.body.getReader(), d = l.headers.get("X-File-Size") || l.headers.get("Content-Length"), f = d ? parseInt(d) : 0, g = f !== 0;
        let b = 0;
        const m = new ReadableStream({
          start(p) {
            x();
            function x() {
              u.read().then(({ done: _, value: v }) => {
                if (_)
                  p.close();
                else {
                  b += v.byteLength;
                  const I = new ProgressEvent("progress", { lengthComputable: g, loaded: b, total: f });
                  for (let T = 0, w = h.length; T < w; T++) {
                    const R = h[T];
                    R.onProgress && R.onProgress(I);
                  }
                  p.enqueue(v), x();
                }
              }, (_) => {
                p.error(_);
              });
            }
          }
        });
        return new Response(m);
      } else
        throw new Jx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return l.json();
        default:
          if (o === void 0)
            return l.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), d = u && u[1] ? u[1].toLowerCase() : void 0, f = new TextDecoder(d);
            return l.arrayBuffer().then((g) => f.decode(g));
          }
      }
    }).then((l) => {
      On.add(e, l);
      const h = Dn[e];
      delete Dn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onLoad && f.onLoad(l);
      }
    }).catch((l) => {
      const h = Dn[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete Dn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onError && f.onError(l);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class Zx extends Ht {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = new mn(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(o) {
      try {
        t(s.parse(JSON.parse(o)));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const i = Rs.parse(e[n]);
      t.push(i);
    }
    return t;
  }
}
class Qx extends Ht {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = [], o = new Uo(), c = new mn(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(s.withCredentials);
    let l = 0;
    function h(u) {
      c.load(e[u], function(d) {
        const f = s.parse(d, !0);
        a[u] = {
          width: f.width,
          height: f.height,
          format: f.format,
          mipmaps: f.mipmaps
        }, l += 1, l === 6 && (f.mipmapCount === 1 && (o.minFilter = lt), o.image = a, o.format = f.format, o.needsUpdate = !0, t && t(o));
      }, n, i);
    }
    if (Array.isArray(e))
      for (let u = 0, d = e.length; u < d; ++u)
        h(u);
    else
      c.load(e, function(u) {
        const d = s.parse(u, !0);
        if (d.isCubemap) {
          const f = d.mipmaps.length / d.mipmapCount;
          for (let g = 0; g < f; g++) {
            a[g] = { mipmaps: [] };
            for (let b = 0; b < d.mipmapCount; b++)
              a[g].mipmaps.push(d.mipmaps[g * d.mipmapCount + b]), a[g].format = d.format, a[g].width = d.width, a[g].height = d.height;
          }
          o.image = a;
        } else
          o.image.width = d.width, o.image.height = d.height, o.mipmaps = d.mipmaps;
        d.mipmapCount === 1 && (o.minFilter = lt), o.format = d.format, o.needsUpdate = !0, t && t(o);
      }, n, i);
    return o;
  }
}
class br extends Ht {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = On.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = dr("img");
    function c() {
      h(), On.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function l(u) {
      h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
    }
    return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class $x extends Ht {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new Mr();
    s.colorSpace = xt;
    const a = new br(this.manager);
    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
    let o = 0;
    function c(l) {
      a.load(e[l], function(h) {
        s.images[l] = h, o++, o === 6 && (s.needsUpdate = !0, t && t(s));
      }, void 0, i);
    }
    for (let l = 0; l < e.length; ++l)
      c(l);
    return s;
  }
}
class wf extends Ht {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = new Mn(), o = new mn(this.manager);
    return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(s.withCredentials), o.load(e, function(c) {
      let l;
      try {
        l = s.parse(c);
      } catch (h) {
        if (i !== void 0)
          i(h);
        else {
          console.error(h);
          return;
        }
      }
      l.image !== void 0 ? a.image = l.image : l.data !== void 0 && (a.image.width = l.width, a.image.height = l.height, a.image.data = l.data), a.wrapS = l.wrapS !== void 0 ? l.wrapS : Zt, a.wrapT = l.wrapT !== void 0 ? l.wrapT : Zt, a.magFilter = l.magFilter !== void 0 ? l.magFilter : lt, a.minFilter = l.minFilter !== void 0 ? l.minFilter : lt, a.anisotropy = l.anisotropy !== void 0 ? l.anisotropy : 1, l.colorSpace !== void 0 && (a.colorSpace = l.colorSpace), l.flipY !== void 0 && (a.flipY = l.flipY), l.format !== void 0 && (a.format = l.format), l.type !== void 0 && (a.type = l.type), l.mipmaps !== void 0 && (a.mipmaps = l.mipmaps, a.minFilter = sn), l.mipmapCount === 1 && (a.minFilter = lt), l.generateMipmaps !== void 0 && (a.generateMipmaps = l.generateMipmaps), a.needsUpdate = !0, t && t(a, l);
    }, n, i), a;
  }
}
class Tf extends Ht {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new ht(), a = new br(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class li extends je {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new ue(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
class Ef extends li {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(je.DEFAULT_UP), this.updateMatrix(), this.groundColor = new ue(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const Bc = /* @__PURE__ */ new Ie(), bu = /* @__PURE__ */ new P(), _u = /* @__PURE__ */ new P();
class Xl {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Z(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ie(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Sr(), this._frameExtents = new Z(1, 1), this._viewportCount = 1, this._viewports = [
      new et(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    bu.setFromMatrixPosition(e.matrixWorld), t.position.copy(bu), _u.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(_u), t.updateMatrixWorld(), Bc.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Bc), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(Bc);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class ev extends Xl {
  constructor() {
    super(new vt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = ws * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class ql extends li {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(je.DEFAULT_UP), this.updateMatrix(), this.target = new je(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new ev();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const xu = /* @__PURE__ */ new Ie(), Xs = /* @__PURE__ */ new P(), kc = /* @__PURE__ */ new P();
class tv extends Xl {
  constructor() {
    super(new vt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Z(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new et(2, 1, 1, 1),
      // negative X
      new et(0, 1, 1, 1),
      // positive Z
      new et(3, 1, 1, 1),
      // negative Z
      new et(1, 1, 1, 1),
      // positive Y
      new et(3, 0, 1, 1),
      // negative Y
      new et(1, 0, 1, 1)
    ], this._cubeDirections = [
      new P(1, 0, 0),
      new P(-1, 0, 0),
      new P(0, 0, 1),
      new P(0, 0, -1),
      new P(0, 1, 0),
      new P(0, -1, 0)
    ], this._cubeUps = [
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 0, 1),
      new P(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), Xs.setFromMatrixPosition(e.matrixWorld), n.position.copy(Xs), kc.copy(n.position), kc.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(kc), n.updateMatrixWorld(), i.makeTranslation(-Xs.x, -Xs.y, -Xs.z), xu.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(xu);
  }
}
class Pr extends li {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new tv();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class nv extends Xl {
  constructor() {
    super(new Ar(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class _r extends li {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(je.DEFAULT_UP), this.updateMatrix(), this.target = new je(), this.shadow = new nv();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Rf extends li {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Cf extends li {
  constructor(e, t, n = 10, i = 10) {
    super(e, t), this.isRectAreaLight = !0, this.type = "RectAreaLight", this.width = n, this.height = i;
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(e) {
    this.intensity = e / (this.width * this.height * Math.PI);
  }
  copy(e) {
    return super.copy(e), this.width = e.width, this.height = e.height, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.width = this.width, t.object.height = this.height, t;
  }
}
class Pf {
  constructor() {
    this.isSphericalHarmonics3 = !0, this.coefficients = [];
    for (let e = 0; e < 9; e++)
      this.coefficients.push(new P());
  }
  set(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].copy(e[t]);
    return this;
  }
  zero() {
    for (let e = 0; e < 9; e++)
      this.coefficients[e].set(0, 0, 0);
    return this;
  }
  // get the radiance in the direction of the normal
  // target is a Vector3
  getAt(e, t) {
    const n = e.x, i = e.y, s = e.z, a = this.coefficients;
    return t.copy(a[0]).multiplyScalar(0.282095), t.addScaledVector(a[1], 0.488603 * i), t.addScaledVector(a[2], 0.488603 * s), t.addScaledVector(a[3], 0.488603 * n), t.addScaledVector(a[4], 1.092548 * (n * i)), t.addScaledVector(a[5], 1.092548 * (i * s)), t.addScaledVector(a[6], 0.315392 * (3 * s * s - 1)), t.addScaledVector(a[7], 1.092548 * (n * s)), t.addScaledVector(a[8], 0.546274 * (n * n - i * i)), t;
  }
  // get the irradiance (radiance convolved with cosine lobe) in the direction of the normal
  // target is a Vector3
  // https://graphics.stanford.edu/papers/envmap/envmap.pdf
  getIrradianceAt(e, t) {
    const n = e.x, i = e.y, s = e.z, a = this.coefficients;
    return t.copy(a[0]).multiplyScalar(0.886227), t.addScaledVector(a[1], 2 * 0.511664 * i), t.addScaledVector(a[2], 2 * 0.511664 * s), t.addScaledVector(a[3], 2 * 0.511664 * n), t.addScaledVector(a[4], 2 * 0.429043 * n * i), t.addScaledVector(a[5], 2 * 0.429043 * i * s), t.addScaledVector(a[6], 0.743125 * s * s - 0.247708), t.addScaledVector(a[7], 2 * 0.429043 * n * s), t.addScaledVector(a[8], 0.429043 * (n * n - i * i)), t;
  }
  add(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].add(e.coefficients[t]);
    return this;
  }
  addScaledSH(e, t) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(e.coefficients[n], t);
    return this;
  }
  scale(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].multiplyScalar(e);
    return this;
  }
  lerp(e, t) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].lerp(e.coefficients[n], t);
    return this;
  }
  equals(e) {
    for (let t = 0; t < 9; t++)
      if (!this.coefficients[t].equals(e.coefficients[t]))
        return !1;
    return !0;
  }
  copy(e) {
    return this.set(e.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(e, t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].fromArray(e, t + i * 3);
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].toArray(e, t + i * 3);
    return e;
  }
  // evaluate the basis functions
  // shBasis is an Array[ 9 ]
  static getBasisAt(e, t) {
    const n = e.x, i = e.y, s = e.z;
    t[0] = 0.282095, t[1] = 0.488603 * i, t[2] = 0.488603 * s, t[3] = 0.488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * s, t[6] = 0.315392 * (3 * s * s - 1), t[7] = 1.092548 * n * s, t[8] = 0.546274 * (n * n - i * i);
  }
}
class If extends li {
  constructor(e = new Pf(), t = 1) {
    super(void 0, t), this.isLightProbe = !0, this.sh = e;
  }
  copy(e) {
    return super.copy(e), this.sh.copy(e.sh), this;
  }
  fromJSON(e) {
    return this.intensity = e.intensity, this.sh.fromArray(e.sh), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.sh = this.sh.toArray(), t;
  }
}
class jo extends Ht {
  constructor(e) {
    super(e), this.textures = {};
  }
  load(e, t, n, i) {
    const s = this, a = new mn(s.manager);
    a.setPath(s.path), a.setRequestHeader(s.requestHeader), a.setWithCredentials(s.withCredentials), a.load(e, function(o) {
      try {
        t(s.parse(JSON.parse(o)));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e) {
    const t = this.textures;
    function n(s) {
      return t[s] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", s), t[s];
    }
    const i = this.createMaterialFromType(e.type);
    if (e.uuid !== void 0 && (i.uuid = e.uuid), e.name !== void 0 && (i.name = e.name), e.color !== void 0 && i.color !== void 0 && i.color.setHex(e.color), e.roughness !== void 0 && (i.roughness = e.roughness), e.metalness !== void 0 && (i.metalness = e.metalness), e.sheen !== void 0 && (i.sheen = e.sheen), e.sheenColor !== void 0 && (i.sheenColor = new ue().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (i.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && i.emissive !== void 0 && i.emissive.setHex(e.emissive), e.specular !== void 0 && i.specular !== void 0 && i.specular.setHex(e.specular), e.specularIntensity !== void 0 && (i.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && i.specularColor !== void 0 && i.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (i.shininess = e.shininess), e.clearcoat !== void 0 && (i.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (i.dispersion = e.dispersion), e.iridescence !== void 0 && (i.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (i.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (i.transmission = e.transmission), e.thickness !== void 0 && (i.thickness = e.thickness), e.attenuationDistance !== void 0 && (i.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && i.attenuationColor !== void 0 && i.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (i.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (i.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (i.fog = e.fog), e.flatShading !== void 0 && (i.flatShading = e.flatShading), e.blending !== void 0 && (i.blending = e.blending), e.combine !== void 0 && (i.combine = e.combine), e.side !== void 0 && (i.side = e.side), e.shadowSide !== void 0 && (i.shadowSide = e.shadowSide), e.opacity !== void 0 && (i.opacity = e.opacity), e.transparent !== void 0 && (i.transparent = e.transparent), e.alphaTest !== void 0 && (i.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (i.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (i.depthFunc = e.depthFunc), e.depthTest !== void 0 && (i.depthTest = e.depthTest), e.depthWrite !== void 0 && (i.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (i.colorWrite = e.colorWrite), e.blendSrc !== void 0 && (i.blendSrc = e.blendSrc), e.blendDst !== void 0 && (i.blendDst = e.blendDst), e.blendEquation !== void 0 && (i.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (i.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (i.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (i.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && i.blendColor !== void 0 && i.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (i.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (i.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (i.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (i.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (i.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (i.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (i.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (i.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (i.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (i.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (i.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (i.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (i.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (i.rotation = e.rotation), e.linewidth !== void 0 && (i.linewidth = e.linewidth), e.dashSize !== void 0 && (i.dashSize = e.dashSize), e.gapSize !== void 0 && (i.gapSize = e.gapSize), e.scale !== void 0 && (i.scale = e.scale), e.polygonOffset !== void 0 && (i.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (i.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (i.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (i.dithering = e.dithering), e.alphaToCoverage !== void 0 && (i.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (i.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (i.forceSinglePass = e.forceSinglePass), e.visible !== void 0 && (i.visible = e.visible), e.toneMapped !== void 0 && (i.toneMapped = e.toneMapped), e.userData !== void 0 && (i.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? i.vertexColors = e.vertexColors > 0 : i.vertexColors = e.vertexColors), e.uniforms !== void 0)
      for (const s in e.uniforms) {
        const a = e.uniforms[s];
        switch (i.uniforms[s] = {}, a.type) {
          case "t":
            i.uniforms[s].value = n(a.value);
            break;
          case "c":
            i.uniforms[s].value = new ue().setHex(a.value);
            break;
          case "v2":
            i.uniforms[s].value = new Z().fromArray(a.value);
            break;
          case "v3":
            i.uniforms[s].value = new P().fromArray(a.value);
            break;
          case "v4":
            i.uniforms[s].value = new et().fromArray(a.value);
            break;
          case "m3":
            i.uniforms[s].value = new He().fromArray(a.value);
            break;
          case "m4":
            i.uniforms[s].value = new Ie().fromArray(a.value);
            break;
          default:
            i.uniforms[s].value = a.value;
        }
      }
    if (e.defines !== void 0 && (i.defines = e.defines), e.vertexShader !== void 0 && (i.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (i.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (i.glslVersion = e.glslVersion), e.extensions !== void 0)
      for (const s in e.extensions)
        i.extensions[s] = e.extensions[s];
    if (e.lights !== void 0 && (i.lights = e.lights), e.clipping !== void 0 && (i.clipping = e.clipping), e.size !== void 0 && (i.size = e.size), e.sizeAttenuation !== void 0 && (i.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (i.map = n(e.map)), e.matcap !== void 0 && (i.matcap = n(e.matcap)), e.alphaMap !== void 0 && (i.alphaMap = n(e.alphaMap)), e.bumpMap !== void 0 && (i.bumpMap = n(e.bumpMap)), e.bumpScale !== void 0 && (i.bumpScale = e.bumpScale), e.normalMap !== void 0 && (i.normalMap = n(e.normalMap)), e.normalMapType !== void 0 && (i.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      let s = e.normalScale;
      Array.isArray(s) === !1 && (s = [s, s]), i.normalScale = new Z().fromArray(s);
    }
    return e.displacementMap !== void 0 && (i.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (i.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (i.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (i.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (i.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (i.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (i.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (i.specularMap = n(e.specularMap)), e.specularIntensityMap !== void 0 && (i.specularIntensityMap = n(e.specularIntensityMap)), e.specularColorMap !== void 0 && (i.specularColorMap = n(e.specularColorMap)), e.envMap !== void 0 && (i.envMap = n(e.envMap)), e.envMapRotation !== void 0 && i.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (i.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (i.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (i.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (i.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (i.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (i.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (i.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (i.gradientMap = n(e.gradientMap)), e.clearcoatMap !== void 0 && (i.clearcoatMap = n(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (i.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (i.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (i.clearcoatNormalScale = new Z().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (i.iridescenceMap = n(e.iridescenceMap)), e.iridescenceThicknessMap !== void 0 && (i.iridescenceThicknessMap = n(e.iridescenceThicknessMap)), e.transmissionMap !== void 0 && (i.transmissionMap = n(e.transmissionMap)), e.thicknessMap !== void 0 && (i.thicknessMap = n(e.thicknessMap)), e.anisotropyMap !== void 0 && (i.anisotropyMap = n(e.anisotropyMap)), e.sheenColorMap !== void 0 && (i.sheenColorMap = n(e.sheenColorMap)), e.sheenRoughnessMap !== void 0 && (i.sheenRoughnessMap = n(e.sheenRoughnessMap)), i;
  }
  setTextures(e) {
    return this.textures = e, this;
  }
  createMaterialFromType(e) {
    return jo.createMaterialFromType(e);
  }
  static createMaterialFromType(e) {
    const t = {
      ShadowMaterial: uf,
      SpriteMaterial: Pl,
      RawShaderMaterial: df,
      ShaderMaterial: pn,
      PointsMaterial: Do,
      MeshPhysicalMaterial: an,
      MeshStandardMaterial: ri,
      MeshPhongMaterial: ff,
      MeshToonMaterial: pf,
      MeshNormalMaterial: mf,
      MeshLambertMaterial: gf,
      MeshDepthMaterial: Rl,
      MeshDistanceMaterial: Cl,
      MeshBasicMaterial: Ct,
      MeshMatcapMaterial: bf,
      LineDashedMaterial: _f,
      LineBasicMaterial: Ot,
      Material: Mt
    };
    return new t[e]();
  }
}
class ti {
  static decodeText(e) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class Lf extends Xe {
  constructor() {
    super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(e) {
    return super.copy(e), this.instanceCount = e.instanceCount, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
  }
}
class Df extends Ht {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = new mn(s.manager);
    a.setPath(s.path), a.setRequestHeader(s.requestHeader), a.setWithCredentials(s.withCredentials), a.load(e, function(o) {
      try {
        t(s.parse(JSON.parse(o)));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e) {
    const t = {}, n = {};
    function i(f, g) {
      if (t[g] !== void 0) return t[g];
      const m = f.interleavedBuffers[g], p = s(f, m.buffer), x = ms(m.type, p), _ = new wr(x, m.stride);
      return _.uuid = m.uuid, t[g] = _, _;
    }
    function s(f, g) {
      if (n[g] !== void 0) return n[g];
      const m = f.arrayBuffers[g], p = new Uint32Array(m).buffer;
      return n[g] = p, p;
    }
    const a = e.isInstancedBufferGeometry ? new Lf() : new Xe(), o = e.data.index;
    if (o !== void 0) {
      const f = ms(o.type, o.array);
      a.setIndex(new nt(f, 1));
    }
    const c = e.data.attributes;
    for (const f in c) {
      const g = c[f];
      let b;
      if (g.isInterleavedBufferAttribute) {
        const m = i(e.data, g.data);
        b = new si(m, g.itemSize, g.offset, g.normalized);
      } else {
        const m = ms(g.type, g.array), p = g.isInstancedBufferAttribute ? ki : nt;
        b = new p(m, g.itemSize, g.normalized);
      }
      g.name !== void 0 && (b.name = g.name), g.usage !== void 0 && b.setUsage(g.usage), a.setAttribute(f, b);
    }
    const l = e.data.morphAttributes;
    if (l)
      for (const f in l) {
        const g = l[f], b = [];
        for (let m = 0, p = g.length; m < p; m++) {
          const x = g[m];
          let _;
          if (x.isInterleavedBufferAttribute) {
            const v = i(e.data, x.data);
            _ = new si(v, x.itemSize, x.offset, x.normalized);
          } else {
            const v = ms(x.type, x.array);
            _ = new nt(v, x.itemSize, x.normalized);
          }
          x.name !== void 0 && (_.name = x.name), b.push(_);
        }
        a.morphAttributes[f] = b;
      }
    e.data.morphTargetsRelative && (a.morphTargetsRelative = !0);
    const u = e.data.groups || e.data.drawcalls || e.data.offsets;
    if (u !== void 0)
      for (let f = 0, g = u.length; f !== g; ++f) {
        const b = u[f];
        a.addGroup(b.start, b.count, b.materialIndex);
      }
    const d = e.data.boundingSphere;
    if (d !== void 0) {
      const f = new P();
      d.center !== void 0 && f.fromArray(d.center), a.boundingSphere = new Pt(f, d.radius);
    }
    return e.name && (a.name = e.name), e.userData && (a.userData = e.userData), a;
  }
}
class iv extends Ht {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = this.path === "" ? ti.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || a;
    const o = new mn(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(c) {
      let l = null;
      try {
        l = JSON.parse(c);
      } catch (u) {
        i !== void 0 && i(u), console.error("THREE:ObjectLoader: Can't parse " + e + ".", u.message);
        return;
      }
      const h = l.metadata;
      if (h === void 0 || h.type === void 0 || h.type.toLowerCase() === "geometry") {
        i !== void 0 && i(new Error("THREE.ObjectLoader: Can't load " + e)), console.error("THREE.ObjectLoader: Can't load " + e);
        return;
      }
      s.parse(l, t);
    }, n, i);
  }
  async loadAsync(e, t) {
    const n = this, i = this.path === "" ? ti.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || i;
    const s = new mn(this.manager);
    s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials);
    const a = await s.loadAsync(e, t), o = JSON.parse(a), c = o.metadata;
    if (c === void 0 || c.type === void 0 || c.type.toLowerCase() === "geometry")
      throw new Error("THREE.ObjectLoader: Can't load " + e);
    return await n.parseAsync(o);
  }
  parse(e, t) {
    const n = this.parseAnimations(e.animations), i = this.parseShapes(e.shapes), s = this.parseGeometries(e.geometries, i), a = this.parseImages(e.images, function() {
      t !== void 0 && t(l);
    }), o = this.parseTextures(e.textures, a), c = this.parseMaterials(e.materials, o), l = this.parseObject(e.object, s, c, o, n), h = this.parseSkeletons(e.skeletons, l);
    if (this.bindSkeletons(l, h), this.bindLightTargets(l), t !== void 0) {
      let u = !1;
      for (const d in a)
        if (a[d].data instanceof HTMLImageElement) {
          u = !0;
          break;
        }
      u === !1 && t(l);
    }
    return l;
  }
  async parseAsync(e) {
    const t = this.parseAnimations(e.animations), n = this.parseShapes(e.shapes), i = this.parseGeometries(e.geometries, n), s = await this.parseImagesAsync(e.images), a = this.parseTextures(e.textures, s), o = this.parseMaterials(e.materials, a), c = this.parseObject(e.object, i, o, a, t), l = this.parseSkeletons(e.skeletons, c);
    return this.bindSkeletons(c, l), this.bindLightTargets(c), c;
  }
  parseShapes(e) {
    const t = {};
    if (e !== void 0)
      for (let n = 0, i = e.length; n < i; n++) {
        const s = new Ni().fromJSON(e[n]);
        t[s.uuid] = s;
      }
    return t;
  }
  parseSkeletons(e, t) {
    const n = {}, i = {};
    if (t.traverse(function(s) {
      s.isBone && (i[s.uuid] = s);
    }), e !== void 0)
      for (let s = 0, a = e.length; s < a; s++) {
        const o = new Tr().fromJSON(e[s], i);
        n[o.uuid] = o;
      }
    return n;
  }
  parseGeometries(e, t) {
    const n = {};
    if (e !== void 0) {
      const i = new Df();
      for (let s = 0, a = e.length; s < a; s++) {
        let o;
        const c = e[s];
        switch (c.type) {
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            o = i.parse(c);
            break;
          default:
            c.type in gu ? o = gu[c.type].fromJSON(c, t) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`);
        }
        o.uuid = c.uuid, c.name !== void 0 && (o.name = c.name), c.userData !== void 0 && (o.userData = c.userData), n[c.uuid] = o;
      }
    }
    return n;
  }
  parseMaterials(e, t) {
    const n = {}, i = {};
    if (e !== void 0) {
      const s = new jo();
      s.setTextures(t);
      for (let a = 0, o = e.length; a < o; a++) {
        const c = e[a];
        n[c.uuid] === void 0 && (n[c.uuid] = s.parse(c)), i[c.uuid] = n[c.uuid];
      }
    }
    return i;
  }
  parseAnimations(e) {
    const t = {};
    if (e !== void 0)
      for (let n = 0; n < e.length; n++) {
        const i = e[n], s = Rs.parse(i);
        t[s.uuid] = s;
      }
    return t;
  }
  parseImages(e, t) {
    const n = this, i = {};
    let s;
    function a(c) {
      return n.manager.itemStart(c), s.load(c, function() {
        n.manager.itemEnd(c);
      }, void 0, function() {
        n.manager.itemError(c), n.manager.itemEnd(c);
      });
    }
    function o(c) {
      if (typeof c == "string") {
        const l = c, h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l) ? l : n.resourcePath + l;
        return a(h);
      } else
        return c.data ? {
          data: ms(c.type, c.data),
          width: c.width,
          height: c.height
        } : null;
    }
    if (e !== void 0 && e.length > 0) {
      const c = new Wl(t);
      s = new br(c), s.setCrossOrigin(this.crossOrigin);
      for (let l = 0, h = e.length; l < h; l++) {
        const u = e[l], d = u.url;
        if (Array.isArray(d)) {
          const f = [];
          for (let g = 0, b = d.length; g < b; g++) {
            const m = d[g], p = o(m);
            p !== null && (p instanceof HTMLImageElement ? f.push(p) : f.push(new Mn(p.data, p.width, p.height)));
          }
          i[u.uuid] = new Pi(f);
        } else {
          const f = o(u.url);
          i[u.uuid] = new Pi(f);
        }
      }
    }
    return i;
  }
  async parseImagesAsync(e) {
    const t = this, n = {};
    let i;
    async function s(a) {
      if (typeof a == "string") {
        const o = a, c = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(o) ? o : t.resourcePath + o;
        return await i.loadAsync(c);
      } else
        return a.data ? {
          data: ms(a.type, a.data),
          width: a.width,
          height: a.height
        } : null;
    }
    if (e !== void 0 && e.length > 0) {
      i = new br(this.manager), i.setCrossOrigin(this.crossOrigin);
      for (let a = 0, o = e.length; a < o; a++) {
        const c = e[a], l = c.url;
        if (Array.isArray(l)) {
          const h = [];
          for (let u = 0, d = l.length; u < d; u++) {
            const f = l[u], g = await s(f);
            g !== null && (g instanceof HTMLImageElement ? h.push(g) : h.push(new Mn(g.data, g.width, g.height)));
          }
          n[c.uuid] = new Pi(h);
        } else {
          const h = await s(c.url);
          n[c.uuid] = new Pi(h);
        }
      }
    }
    return n;
  }
  parseTextures(e, t) {
    function n(s, a) {
      return typeof s == "number" ? s : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", s), a[s]);
    }
    const i = {};
    if (e !== void 0)
      for (let s = 0, a = e.length; s < a; s++) {
        const o = e[s];
        o.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid), t[o.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", o.image);
        const c = t[o.image], l = c.data;
        let h;
        Array.isArray(l) ? (h = new Mr(), l.length === 6 && (h.needsUpdate = !0)) : (l && l.data ? h = new Mn() : h = new ht(), l && (h.needsUpdate = !0)), h.source = c, h.uuid = o.uuid, o.name !== void 0 && (h.name = o.name), o.mapping !== void 0 && (h.mapping = n(o.mapping, sv)), o.channel !== void 0 && (h.channel = o.channel), o.offset !== void 0 && h.offset.fromArray(o.offset), o.repeat !== void 0 && h.repeat.fromArray(o.repeat), o.center !== void 0 && h.center.fromArray(o.center), o.rotation !== void 0 && (h.rotation = o.rotation), o.wrap !== void 0 && (h.wrapS = n(o.wrap[0], vu), h.wrapT = n(o.wrap[1], vu)), o.format !== void 0 && (h.format = o.format), o.internalFormat !== void 0 && (h.internalFormat = o.internalFormat), o.type !== void 0 && (h.type = o.type), o.colorSpace !== void 0 && (h.colorSpace = o.colorSpace), o.minFilter !== void 0 && (h.minFilter = n(o.minFilter, yu)), o.magFilter !== void 0 && (h.magFilter = n(o.magFilter, yu)), o.anisotropy !== void 0 && (h.anisotropy = o.anisotropy), o.flipY !== void 0 && (h.flipY = o.flipY), o.generateMipmaps !== void 0 && (h.generateMipmaps = o.generateMipmaps), o.premultiplyAlpha !== void 0 && (h.premultiplyAlpha = o.premultiplyAlpha), o.unpackAlignment !== void 0 && (h.unpackAlignment = o.unpackAlignment), o.compareFunction !== void 0 && (h.compareFunction = o.compareFunction), o.userData !== void 0 && (h.userData = o.userData), i[o.uuid] = h;
      }
    return i;
  }
  parseObject(e, t, n, i, s) {
    let a;
    function o(d) {
      return t[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", d), t[d];
    }
    function c(d) {
      if (d !== void 0) {
        if (Array.isArray(d)) {
          const f = [];
          for (let g = 0, b = d.length; g < b; g++) {
            const m = d[g];
            n[m] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", m), f.push(n[m]);
          }
          return f;
        }
        return n[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", d), n[d];
      }
    }
    function l(d) {
      return i[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined texture", d), i[d];
    }
    let h, u;
    switch (e.type) {
      case "Scene":
        a = new Io(), e.background !== void 0 && (Number.isInteger(e.background) ? a.background = new ue(e.background) : a.background = l(e.background)), e.environment !== void 0 && (a.environment = l(e.environment)), e.fog !== void 0 && (e.fog.type === "Fog" ? a.fog = new Po(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (a.fog = new Co(e.fog.color, e.fog.density)), e.fog.name !== "" && (a.fog.name = e.fog.name)), e.backgroundBlurriness !== void 0 && (a.backgroundBlurriness = e.backgroundBlurriness), e.backgroundIntensity !== void 0 && (a.backgroundIntensity = e.backgroundIntensity), e.backgroundRotation !== void 0 && a.backgroundRotation.fromArray(e.backgroundRotation), e.environmentIntensity !== void 0 && (a.environmentIntensity = e.environmentIntensity), e.environmentRotation !== void 0 && a.environmentRotation.fromArray(e.environmentRotation);
        break;
      case "PerspectiveCamera":
        a = new vt(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (a.focus = e.focus), e.zoom !== void 0 && (a.zoom = e.zoom), e.filmGauge !== void 0 && (a.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (a.filmOffset = e.filmOffset), e.view !== void 0 && (a.view = Object.assign({}, e.view));
        break;
      case "OrthographicCamera":
        a = new Ar(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (a.zoom = e.zoom), e.view !== void 0 && (a.view = Object.assign({}, e.view));
        break;
      case "AmbientLight":
        a = new Rf(e.color, e.intensity);
        break;
      case "DirectionalLight":
        a = new _r(e.color, e.intensity), a.target = e.target || "";
        break;
      case "PointLight":
        a = new Pr(e.color, e.intensity, e.distance, e.decay);
        break;
      case "RectAreaLight":
        a = new Cf(e.color, e.intensity, e.width, e.height);
        break;
      case "SpotLight":
        a = new ql(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay), a.target = e.target || "";
        break;
      case "HemisphereLight":
        a = new Ef(e.color, e.groundColor, e.intensity);
        break;
      case "LightProbe":
        a = new If().fromJSON(e);
        break;
      case "SkinnedMesh":
        h = o(e.geometry), u = c(e.material), a = new Il(h, u), e.bindMode !== void 0 && (a.bindMode = e.bindMode), e.bindMatrix !== void 0 && a.bindMatrix.fromArray(e.bindMatrix), e.skeleton !== void 0 && (a.skeleton = e.skeleton);
        break;
      case "Mesh":
        h = o(e.geometry), u = c(e.material), a = new qe(h, u);
        break;
      case "InstancedMesh":
        h = o(e.geometry), u = c(e.material);
        const d = e.count, f = e.instanceMatrix, g = e.instanceColor;
        a = new Ll(h, u, d), a.instanceMatrix = new ki(new Float32Array(f.array), 16), g !== void 0 && (a.instanceColor = new ki(new Float32Array(g.array), g.itemSize));
        break;
      case "BatchedMesh":
        h = o(e.geometry), u = c(e.material), a = new Qd(e.maxInstanceCount, e.maxVertexCount, e.maxIndexCount, u), a.geometry = h, a.perObjectFrustumCulled = e.perObjectFrustumCulled, a.sortObjects = e.sortObjects, a._drawRanges = e.drawRanges, a._reservedRanges = e.reservedRanges, a._visibility = e.visibility, a._active = e.active, a._bounds = e.bounds.map((b) => {
          const m = new Ft();
          m.min.fromArray(b.boxMin), m.max.fromArray(b.boxMax);
          const p = new Pt();
          return p.radius = b.sphereRadius, p.center.fromArray(b.sphereCenter), {
            boxInitialized: b.boxInitialized,
            box: m,
            sphereInitialized: b.sphereInitialized,
            sphere: p
          };
        }), a._maxInstanceCount = e.maxInstanceCount, a._maxVertexCount = e.maxVertexCount, a._maxIndexCount = e.maxIndexCount, a._geometryInitialized = e.geometryInitialized, a._geometryCount = e.geometryCount, a._matricesTexture = l(e.matricesTexture.uuid), e.colorsTexture !== void 0 && (a._colorsTexture = l(e.colorsTexture.uuid));
        break;
      case "LOD":
        a = new Zd();
        break;
      case "Line":
        a = new Hn(o(e.geometry), c(e.material));
        break;
      case "LineLoop":
        a = new Dl(o(e.geometry), c(e.material));
        break;
      case "LineSegments":
        a = new gn(o(e.geometry), c(e.material));
        break;
      case "PointCloud":
      case "Points":
        a = new Ul(o(e.geometry), c(e.material));
        break;
      case "Sprite":
        a = new Jd(c(e.material));
        break;
      case "Group":
        a = new rn();
        break;
      case "Bone":
        a = new Lo();
        break;
      default:
        a = new je();
    }
    if (a.uuid = e.uuid, e.name !== void 0 && (a.name = e.name), e.matrix !== void 0 ? (a.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (a.matrixAutoUpdate = e.matrixAutoUpdate), a.matrixAutoUpdate && a.matrix.decompose(a.position, a.quaternion, a.scale)) : (e.position !== void 0 && a.position.fromArray(e.position), e.rotation !== void 0 && a.rotation.fromArray(e.rotation), e.quaternion !== void 0 && a.quaternion.fromArray(e.quaternion), e.scale !== void 0 && a.scale.fromArray(e.scale)), e.up !== void 0 && a.up.fromArray(e.up), e.castShadow !== void 0 && (a.castShadow = e.castShadow), e.receiveShadow !== void 0 && (a.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.intensity !== void 0 && (a.shadow.intensity = e.shadow.intensity), e.shadow.bias !== void 0 && (a.shadow.bias = e.shadow.bias), e.shadow.normalBias !== void 0 && (a.shadow.normalBias = e.shadow.normalBias), e.shadow.radius !== void 0 && (a.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && a.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (a.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (a.visible = e.visible), e.frustumCulled !== void 0 && (a.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (a.renderOrder = e.renderOrder), e.userData !== void 0 && (a.userData = e.userData), e.layers !== void 0 && (a.layers.mask = e.layers), e.children !== void 0) {
      const d = e.children;
      for (let f = 0; f < d.length; f++)
        a.add(this.parseObject(d[f], t, n, i, s));
    }
    if (e.animations !== void 0) {
      const d = e.animations;
      for (let f = 0; f < d.length; f++) {
        const g = d[f];
        a.animations.push(s[g]);
      }
    }
    if (e.type === "LOD") {
      e.autoUpdate !== void 0 && (a.autoUpdate = e.autoUpdate);
      const d = e.levels;
      for (let f = 0; f < d.length; f++) {
        const g = d[f], b = a.getObjectByProperty("uuid", g.object);
        b !== void 0 && a.addLevel(b, g.distance, g.hysteresis);
      }
    }
    return a;
  }
  bindSkeletons(e, t) {
    Object.keys(t).length !== 0 && e.traverse(function(n) {
      if (n.isSkinnedMesh === !0 && n.skeleton !== void 0) {
        const i = t[n.skeleton];
        i === void 0 ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", n.skeleton) : n.bind(i, n.bindMatrix);
      }
    });
  }
  bindLightTargets(e) {
    e.traverse(function(t) {
      if (t.isDirectionalLight || t.isSpotLight) {
        const n = t.target, i = e.getObjectByProperty("uuid", n);
        i !== void 0 ? t.target = i : t.target = new je();
      }
    });
  }
}
const sv = {
  UVMapping: mo,
  CubeReflectionMapping: zn,
  CubeRefractionMapping: ni,
  EquirectangularReflectionMapping: sr,
  EquirectangularRefractionMapping: rr,
  CubeUVReflectionMapping: Cs
}, vu = {
  RepeatWrapping: ii,
  ClampToEdgeWrapping: Zt,
  MirroredRepeatWrapping: ys
}, yu = {
  NearestFilter: yt,
  NearestMipmapNearestFilter: go,
  NearestMipmapLinearFilter: Ei,
  LinearFilter: lt,
  LinearMipmapNearestFilter: _s,
  LinearMipmapLinearFilter: sn
};
class Uf extends Ht {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = On.get(e);
    if (a !== void 0) {
      if (s.manager.itemStart(e), a.then) {
        a.then((l) => {
          t && t(l), s.manager.itemEnd(e);
        }).catch((l) => {
          i && i(l);
        });
        return;
      }
      return setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const c = fetch(e, o).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      return On.add(e, l), t && t(l), s.manager.itemEnd(e), l;
    }).catch(function(l) {
      i && i(l), On.remove(e), s.manager.itemError(e), s.manager.itemEnd(e);
    });
    On.add(e, c), s.manager.itemStart(e);
  }
}
let ba;
class Yl {
  static getContext() {
    return ba === void 0 && (ba = new (window.AudioContext || window.webkitAudioContext)()), ba;
  }
  static setContext(e) {
    ba = e;
  }
}
class rv extends Ht {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = new mn(this.manager);
    a.setResponseType("arraybuffer"), a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(c) {
      try {
        const l = c.slice(0);
        Yl.getContext().decodeAudioData(l, function(u) {
          t(u);
        }).catch(o);
      } catch (l) {
        o(l);
      }
    }, n, i);
    function o(c) {
      i ? i(c) : console.error(c), s.manager.itemError(e);
    }
  }
}
const Mu = /* @__PURE__ */ new Ie(), Su = /* @__PURE__ */ new Ie(), _i = /* @__PURE__ */ new Ie();
class av {
  constructor() {
    this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new vt(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new vt(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
      focus: null,
      fov: null,
      aspect: null,
      near: null,
      far: null,
      zoom: null,
      eyeSep: null
    };
  }
  update(e) {
    const t = this._cache;
    if (t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep) {
      t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep, _i.copy(e.projectionMatrix);
      const i = t.eyeSep / 2, s = i * t.near / t.focus, a = t.near * Math.tan(Ui * t.fov * 0.5) / t.zoom;
      let o, c;
      Su.elements[12] = -i, Mu.elements[12] = i, o = -a * t.aspect + s, c = a * t.aspect + s, _i.elements[0] = 2 * t.near / (c - o), _i.elements[8] = (c + o) / (c - o), this.cameraL.projectionMatrix.copy(_i), o = -a * t.aspect - s, c = a * t.aspect - s, _i.elements[0] = 2 * t.near / (c - o), _i.elements[8] = (c + o) / (c - o), this.cameraR.projectionMatrix.copy(_i);
    }
    this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Su), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Mu);
  }
}
class Nf {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = Au(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = Au();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Au() {
  return performance.now();
}
const xi = /* @__PURE__ */ new P(), wu = /* @__PURE__ */ new Nt(), ov = /* @__PURE__ */ new P(), vi = /* @__PURE__ */ new P();
class cv extends je {
  constructor() {
    super(), this.type = "AudioListener", this.context = Yl.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new Nf();
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
  }
  getFilter() {
    return this.filter;
  }
  setFilter(e) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    const t = this.context.listener, n = this.up;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(xi, wu, ov), vi.set(0, 0, -1).applyQuaternion(wu), t.positionX) {
      const i = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(xi.x, i), t.positionY.linearRampToValueAtTime(xi.y, i), t.positionZ.linearRampToValueAtTime(xi.z, i), t.forwardX.linearRampToValueAtTime(vi.x, i), t.forwardY.linearRampToValueAtTime(vi.y, i), t.forwardZ.linearRampToValueAtTime(vi.z, i), t.upX.linearRampToValueAtTime(n.x, i), t.upY.linearRampToValueAtTime(n.y, i), t.upZ.linearRampToValueAtTime(n.z, i);
    } else
      t.setPosition(xi.x, xi.y, xi.z), t.setOrientation(vi.x, vi.y, vi.z, n.x, n.y, n.z);
  }
}
class Ff extends je {
  constructor(e) {
    super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this;
  }
  setMediaElementSource(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this;
  }
  setMediaStreamSource(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this;
  }
  setBuffer(e) {
    return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this;
  }
  play(e = 0) {
    if (this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  }
  pause() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
  }
  stop(e = 0) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this._progress = 0, this.source !== null && (this.source.stop(this.context.currentTime + e), this.source.onended = null), this.isPlaying = !1, this;
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else
      this.source.connect(this.getOutput());
    return this._connected = !0, this;
  }
  disconnect() {
    if (this._connected !== !1) {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let e = 1, t = this.filters.length; e < t; e++)
          this.filters[e - 1].disconnect(this.filters[e]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else
        this.source.disconnect(this.getOutput());
      return this._connected = !1, this;
    }
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return e || (e = []), this._connected === !0 ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this;
  }
  setDetune(e) {
    return this.detune = e, this.isPlaying === !0 && this.source.detune !== void 0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
  }
  setLoop(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this;
  }
  setLoopStart(e) {
    return this.loopStart = e, this;
  }
  setLoopEnd(e) {
    return this.loopEnd = e, this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
}
const yi = /* @__PURE__ */ new P(), Tu = /* @__PURE__ */ new Nt(), lv = /* @__PURE__ */ new P(), Mi = /* @__PURE__ */ new P();
class hv extends Ff {
  constructor(e) {
    super(e), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
  }
  connect() {
    super.connect(), this.panner.connect(this.gain);
  }
  disconnect() {
    super.disconnect(), this.panner.disconnect(this.gain);
  }
  getOutput() {
    return this.panner;
  }
  getRefDistance() {
    return this.panner.refDistance;
  }
  setRefDistance(e) {
    return this.panner.refDistance = e, this;
  }
  getRolloffFactor() {
    return this.panner.rolloffFactor;
  }
  setRolloffFactor(e) {
    return this.panner.rolloffFactor = e, this;
  }
  getDistanceModel() {
    return this.panner.distanceModel;
  }
  setDistanceModel(e) {
    return this.panner.distanceModel = e, this;
  }
  getMaxDistance() {
    return this.panner.maxDistance;
  }
  setMaxDistance(e) {
    return this.panner.maxDistance = e, this;
  }
  setDirectionalCone(e, t, n) {
    return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this;
  }
  updateMatrixWorld(e) {
    if (super.updateMatrixWorld(e), this.hasPlaybackControl === !0 && this.isPlaying === !1) return;
    this.matrixWorld.decompose(yi, Tu, lv), Mi.set(0, 0, 1).applyQuaternion(Tu);
    const t = this.panner;
    if (t.positionX) {
      const n = this.context.currentTime + this.listener.timeDelta;
      t.positionX.linearRampToValueAtTime(yi.x, n), t.positionY.linearRampToValueAtTime(yi.y, n), t.positionZ.linearRampToValueAtTime(yi.z, n), t.orientationX.linearRampToValueAtTime(Mi.x, n), t.orientationY.linearRampToValueAtTime(Mi.y, n), t.orientationZ.linearRampToValueAtTime(Mi.z, n);
    } else
      t.setPosition(yi.x, yi.y, yi.z), t.setOrientation(Mi.x, Mi.y, Mi.z);
  }
}
class uv {
  constructor(e, t = 2048) {
    this.analyser = e.context.createAnalyser(), this.analyser.fftSize = t, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser);
  }
  getFrequencyData() {
    return this.analyser.getByteFrequencyData(this.data), this.data;
  }
  getAverageFrequency() {
    let e = 0;
    const t = this.getFrequencyData();
    for (let n = 0; n < t.length; n++)
      e += t[n];
    return e / t.length;
  }
}
class Of {
  constructor(e, t, n) {
    this.binding = e, this.valueSize = n;
    let i, s, a;
    switch (t) {
      case "quaternion":
        i = this._slerp, s = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        i = this._select, s = this._select, a = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        i = this._lerp, s = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = i, this._mixBufferRegionAdditive = s, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  // accumulate data in the 'incoming' region into 'accu<i>'
  accumulate(e, t) {
    const n = this.buffer, i = this.valueSize, s = e * i + i;
    let a = this.cumulativeWeight;
    if (a === 0) {
      for (let o = 0; o !== i; ++o)
        n[s + o] = n[o];
      a = t;
    } else {
      a += t;
      const o = t / a;
      this._mixBufferRegion(n, s, 0, o, i);
    }
    this.cumulativeWeight = a;
  }
  // accumulate data in the 'incoming' region into 'add'
  accumulateAdditive(e) {
    const t = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e;
  }
  // apply the state of 'accu<i>' to the binding when accus differ
  apply(e) {
    const t = this.valueSize, n = this.buffer, i = e * t + t, s = this.cumulativeWeight, a = this.cumulativeWeightAdditive, o = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
      const c = t * this._origIndex;
      this._mixBufferRegion(
        n,
        i,
        c,
        1 - s,
        t
      );
    }
    a > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let c = t, l = t + t; c !== l; ++c)
      if (n[c] !== n[c + t]) {
        o.setValue(n, i);
        break;
      }
  }
  // remember the state of the bound property and copy it to both accus
  saveOriginalState() {
    const e = this.binding, t = this.buffer, n = this.valueSize, i = n * this._origIndex;
    e.getValue(t, i);
    for (let s = n, a = i; s !== a; ++s)
      t[s] = t[i + s % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  // apply the state previously taken via 'saveOriginalState' to the binding
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let n = e; n < t; n++)
      this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[t + n] = this.buffer[e + n];
  }
  // mix functions
  _select(e, t, n, i, s) {
    if (i >= 0.5)
      for (let a = 0; a !== s; ++a)
        e[t + a] = e[n + a];
  }
  _slerp(e, t, n, i) {
    Nt.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, s) {
    const a = this._workIndex * s;
    Nt.multiplyQuaternionsFlat(e, a, e, t, e, n), Nt.slerpFlat(e, t, e, t, e, a, i);
  }
  _lerp(e, t, n, i, s) {
    const a = 1 - i;
    for (let o = 0; o !== s; ++o) {
      const c = t + o;
      e[c] = e[c] * a + e[n + o] * i;
    }
  }
  _lerpAdditive(e, t, n, i, s) {
    for (let a = 0; a !== s; ++a) {
      const o = t + a;
      e[o] = e[o] + e[n + a] * i;
    }
  }
}
const jl = "\\[\\]\\.:\\/", dv = new RegExp("[" + jl + "]", "g"), Kl = "[^" + jl + "]", fv = "[^" + jl.replace("\\.", "") + "]", pv = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Kl), mv = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", fv), gv = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Kl), bv = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Kl), _v = new RegExp(
  "^" + pv + mv + gv + bv + "$"
), xv = ["material", "materials", "bones", "map"];
class vv {
  constructor(e, t, n) {
    const i = n || Ze.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Ze {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Ze.parseTrackName(t), this.node = Ze.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Ze.Composite(e, t, n) : new Ze(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(dv, "");
  }
  static parseTrackName(e) {
    const t = _v.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      xv.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === t || o.uuid === t)
            return o;
          const c = n(o.children);
          if (c) return c;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = Ze.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === l) {
              l = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[l];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const l = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      c = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (c = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Ze.Composite = vv;
Ze.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Ze.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Ze.prototype.GetterByBindingType = [
  Ze.prototype._getValue_direct,
  Ze.prototype._getValue_array,
  Ze.prototype._getValue_arrayElement,
  Ze.prototype._getValue_toArray
];
Ze.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    Ze.prototype._setValue_direct,
    Ze.prototype._setValue_direct_setNeedsUpdate,
    Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    Ze.prototype._setValue_array,
    Ze.prototype._setValue_array_setNeedsUpdate,
    Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    Ze.prototype._setValue_arrayElement,
    Ze.prototype._setValue_arrayElement_setNeedsUpdate,
    Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    Ze.prototype._setValue_fromArray,
    Ze.prototype._setValue_fromArray_setNeedsUpdate,
    Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class yv {
  constructor() {
    this.isAnimationObjectGroup = !0, this.uuid = Qt(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
    const e = {};
    this._indicesByUUID = e;
    for (let n = 0, i = arguments.length; n !== i; ++n)
      e[arguments[n].uuid] = n;
    this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
    const t = this;
    this.stats = {
      objects: {
        get total() {
          return t._objects.length;
        },
        get inUse() {
          return this.total - t.nCachedObjects_;
        }
      },
      get bindingsPerObject() {
        return t._bindings.length;
      }
    };
  }
  add() {
    const e = this._objects, t = this._indicesByUUID, n = this._paths, i = this._parsedPaths, s = this._bindings, a = s.length;
    let o, c = e.length, l = this.nCachedObjects_;
    for (let h = 0, u = arguments.length; h !== u; ++h) {
      const d = arguments[h], f = d.uuid;
      let g = t[f];
      if (g === void 0) {
        g = c++, t[f] = g, e.push(d);
        for (let b = 0, m = a; b !== m; ++b)
          s[b].push(new Ze(d, n[b], i[b]));
      } else if (g < l) {
        o = e[g];
        const b = --l, m = e[b];
        t[m.uuid] = g, e[g] = m, t[f] = b, e[b] = d;
        for (let p = 0, x = a; p !== x; ++p) {
          const _ = s[p], v = _[b];
          let I = _[g];
          _[g] = v, I === void 0 && (I = new Ze(d, n[p], i[p])), _[b] = I;
        }
      } else e[g] !== o && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
    }
    this.nCachedObjects_ = l;
  }
  remove() {
    const e = this._objects, t = this._indicesByUUID, n = this._bindings, i = n.length;
    let s = this.nCachedObjects_;
    for (let a = 0, o = arguments.length; a !== o; ++a) {
      const c = arguments[a], l = c.uuid, h = t[l];
      if (h !== void 0 && h >= s) {
        const u = s++, d = e[u];
        t[d.uuid] = h, e[h] = d, t[l] = u, e[u] = c;
        for (let f = 0, g = i; f !== g; ++f) {
          const b = n[f], m = b[u], p = b[h];
          b[h] = m, b[u] = p;
        }
      }
    }
    this.nCachedObjects_ = s;
  }
  // remove & forget
  uncache() {
    const e = this._objects, t = this._indicesByUUID, n = this._bindings, i = n.length;
    let s = this.nCachedObjects_, a = e.length;
    for (let o = 0, c = arguments.length; o !== c; ++o) {
      const l = arguments[o], h = l.uuid, u = t[h];
      if (u !== void 0)
        if (delete t[h], u < s) {
          const d = --s, f = e[d], g = --a, b = e[g];
          t[f.uuid] = u, e[u] = f, t[b.uuid] = d, e[d] = b, e.pop();
          for (let m = 0, p = i; m !== p; ++m) {
            const x = n[m], _ = x[d], v = x[g];
            x[u] = _, x[d] = v, x.pop();
          }
        } else {
          const d = --a, f = e[d];
          d > 0 && (t[f.uuid] = u), e[u] = f, e.pop();
          for (let g = 0, b = i; g !== b; ++g) {
            const m = n[g];
            m[u] = m[d], m.pop();
          }
        }
    }
    this.nCachedObjects_ = s;
  }
  // Internal interface used by befriended PropertyBinding.Composite:
  subscribe_(e, t) {
    const n = this._bindingsIndicesByPath;
    let i = n[e];
    const s = this._bindings;
    if (i !== void 0) return s[i];
    const a = this._paths, o = this._parsedPaths, c = this._objects, l = c.length, h = this.nCachedObjects_, u = new Array(l);
    i = s.length, n[e] = i, a.push(e), o.push(t), s.push(u);
    for (let d = h, f = c.length; d !== f; ++d) {
      const g = c[d];
      u[d] = new Ze(g, e, t);
    }
    return u;
  }
  unsubscribe_(e) {
    const t = this._bindingsIndicesByPath, n = t[e];
    if (n !== void 0) {
      const i = this._paths, s = this._parsedPaths, a = this._bindings, o = a.length - 1, c = a[o], l = e[o];
      t[l] = n, a[n] = c, a.pop(), s[n] = s[o], s.pop(), i[n] = i[o], i.pop();
    }
  }
}
class Bf {
  constructor(e, t, n = null, i = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
    const s = t.tracks, a = s.length, o = new Array(a), c = {
      endingStart: Ri,
      endingEnd: Ri
    };
    for (let l = 0; l !== a; ++l) {
      const h = s[l].createInterpolant(null);
      o[l] = h, h.settings = c;
    }
    this._interpolantSettings = c, this._interpolants = o, this._propertyBindings = new Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = xd, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
  }
  // State & Scheduling
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  // return true when play has been called
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return this._startTime = e, this;
  }
  setLoop(e, t) {
    return this.loop = e, this.repetitions = t, this;
  }
  // Weight
  // set the weight stopping any scheduled fading
  // although .enabled = false yields an effective weight of zero, this
  // method does *not* change .enabled, because it would be confusing
  setEffectiveWeight(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  }
  // return the weight considering fading and .enabled
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      const i = this._clip.duration, s = e._clip.duration, a = s / i, o = i / s;
      e.warp(1, a, t), this.warp(o, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Time Scale Control
  // set the time scale stopping any scheduled warping
  // although .paused = true yields an effective time scale of zero, this
  // method does *not* change .paused, because it would be confusing
  setEffectiveTimeScale(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  }
  // return the time scale considering warping and .paused
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  }
  syncWith(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const i = this._mixer, s = i.time, a = this.timeScale;
    let o = this._timeScaleInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
    const c = o.parameterPositions, l = o.sampleValues;
    return c[0] = s, c[1] = s + n, l[0] = e / a, l[1] = t / a, this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Object Accessors
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  // Interna
  _update(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const s = this._startTime;
    if (s !== null) {
      const c = (e - s) * n;
      c < 0 || n === 0 ? t = 0 : (this._startTime = null, t = n * c);
    }
    t *= this._updateTimeScale(e);
    const a = this._updateTime(t), o = this._updateWeight(e);
    if (o > 0) {
      const c = this._interpolants, l = this._propertyBindings;
      switch (this.blendMode) {
        case xl:
          for (let h = 0, u = c.length; h !== u; ++h)
            c[h].evaluate(a), l[h].accumulateAdditive(o);
          break;
        case So:
        default:
          for (let h = 0, u = c.length; h !== u; ++h)
            c[h].evaluate(a), l[h].accumulate(i, o);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = t, t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, n = this.loop;
    let i = this.time + e, s = this._loopCount;
    const a = n === vd;
    if (e === 0)
      return s === -1 ? i : a && (s & 1) === 1 ? t - i : i;
    if (n === _d) {
      s === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      e: {
        if (i >= t)
          i = t;
        else if (i < 0)
          i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: e < 0 ? -1 : 1
        });
      }
    } else {
      if (s === -1 && (e >= 0 ? (s = 0, this._setEndings(!0, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, !0, a)), i >= t || i < 0) {
        const o = Math.floor(i / t);
        i -= t * o, s += Math.abs(o);
        const c = this.repetitions - s;
        if (c <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e > 0 ? 1 : -1
          });
        else {
          if (c === 1) {
            const l = e < 0;
            this._setEndings(l, !l, a);
          } else
            this._setEndings(!1, !1, a);
          this._loopCount = s, this.time = i, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: o
          });
        }
      } else
        this.time = i;
      if (a && (s & 1) === 1)
        return t - i;
    }
    return i;
  }
  _setEndings(e, t, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = Ci, i.endingEnd = Ci) : (e ? i.endingStart = this.zeroSlopeAtStart ? Ci : Ri : i.endingStart = ar, t ? i.endingEnd = this.zeroSlopeAtEnd ? Ci : Ri : i.endingEnd = ar);
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer, s = i.time;
    let a = this._weightInterpolant;
    a === null && (a = i._lendControlInterpolant(), this._weightInterpolant = a);
    const o = a.parameterPositions, c = a.sampleValues;
    return o[0] = s, c[0] = t, o[1] = s + e, c[1] = n, this;
  }
}
const Mv = new Float32Array(1);
class Sv extends Tn {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, i = e._clip.tracks, s = i.length, a = e._propertyBindings, o = e._interpolants, c = n.uuid, l = this._bindingsByRootAndName;
    let h = l[c];
    h === void 0 && (h = {}, l[c] = h);
    for (let u = 0; u !== s; ++u) {
      const d = i[u], f = d.name;
      let g = h[f];
      if (g !== void 0)
        ++g.referenceCount, a[u] = g;
      else {
        if (g = a[u], g !== void 0) {
          g._cacheIndex === null && (++g.referenceCount, this._addInactiveBinding(g, c, f));
          continue;
        }
        const b = t && t._propertyBindings[u].binding.parsedPath;
        g = new Of(
          Ze.create(n, f, b),
          d.ValueTypeName,
          d.getValueSize()
        ), ++g.referenceCount, this._addInactiveBinding(g, c, f), a[u] = g;
      }
      o[u].resultBuffer = g.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid, i = e._clip.uuid, s = this._actionsByClip[i];
        this._bindAction(
          e,
          s && s.knownActions[0]
        ), this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        --s.useCount === 0 && (s.restoreOriginalState(), this._takeBackBinding(s));
      }
      this._takeBackAction(e);
    }
  }
  // Memory manager
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        }
      }
    };
  }
  // Memory management for AnimationAction objects
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const i = this._actions, s = this._actionsByClip;
    let a = s[t];
    if (a === void 0)
      a = {
        knownActions: [e],
        actionByRoot: {}
      }, e._byClipCacheIndex = 0, s[t] = a;
    else {
      const o = a.knownActions;
      e._byClipCacheIndex = o.length, o.push(e);
    }
    e._cacheIndex = i.length, i.push(e), a.actionByRoot[n] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, n = t[t.length - 1], i = e._cacheIndex;
    n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
    const s = e._clip.uuid, a = this._actionsByClip, o = a[s], c = o.knownActions, l = c[c.length - 1], h = e._byClipCacheIndex;
    l._byClipCacheIndex = h, c[h] = l, c.pop(), e._byClipCacheIndex = null;
    const u = o.actionByRoot, d = (e._localRoot || this._root).uuid;
    delete u[d], c.length === 0 && delete a[s], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const s = t[n];
      --s.referenceCount === 0 && this._removeInactiveBinding(s);
    }
  }
  _lendAction(e) {
    const t = this._actions, n = e._cacheIndex, i = this._nActiveActions++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackAction(e) {
    const t = this._actions, n = e._cacheIndex, i = --this._nActiveActions, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  // Memory management for PropertyMixer objects
  _addInactiveBinding(e, t, n) {
    const i = this._bindingsByRootAndName, s = this._bindings;
    let a = i[t];
    a === void 0 && (a = {}, i[t] = a), a[n] = e, e._cacheIndex = s.length, s.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, n = e.binding, i = n.rootNode.uuid, s = n.path, a = this._bindingsByRootAndName, o = a[i], c = t[t.length - 1], l = e._cacheIndex;
    c._cacheIndex = l, t[l] = c, t.pop(), delete o[s], Object.keys(o).length === 0 && delete a[i];
  }
  _lendBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = this._nActiveBindings++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = --this._nActiveBindings, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let n = e[t];
    return n === void 0 && (n = new Hl(
      new Float32Array(2),
      new Float32Array(2),
      1,
      Mv
    ), n.__cacheIndex = t, e[t] = n), n;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, s = t[i];
    e.__cacheIndex = i, t[i] = e, s.__cacheIndex = n, t[n] = s;
  }
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction(e, t, n) {
    const i = t || this._root, s = i.uuid;
    let a = typeof e == "string" ? Rs.findByName(i, e) : e;
    const o = a !== null ? a.uuid : e, c = this._actionsByClip[o];
    let l = null;
    if (n === void 0 && (a !== null ? n = a.blendMode : n = So), c !== void 0) {
      const u = c.actionByRoot[s];
      if (u !== void 0 && u.blendMode === n)
        return u;
      l = c.knownActions[0], a === null && (a = l._clip);
    }
    if (a === null) return null;
    const h = new Bf(this, a, t, n);
    return this._bindAction(h, l), this._addInactiveAction(h, o, s), h;
  }
  // get an existing action
  existingAction(e, t) {
    const n = t || this._root, i = n.uuid, s = typeof e == "string" ? Rs.findByName(n, e) : e, a = s ? s.uuid : e, o = this._actionsByClip[a];
    return o !== void 0 && o.actionByRoot[i] || null;
  }
  // deactivates all previously scheduled actions
  stopAllAction() {
    const e = this._actions, t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n)
      e[n].stop();
    return this;
  }
  // advance the time and update apply the animation
  update(e) {
    e *= this.timeScale;
    const t = this._actions, n = this._nActiveActions, i = this.time += e, s = Math.sign(e), a = this._accuIndex ^= 1;
    for (let l = 0; l !== n; ++l)
      t[l]._update(i, e, s, a);
    const o = this._bindings, c = this._nActiveBindings;
    for (let l = 0; l !== c; ++l)
      o[l].apply(a);
    return this;
  }
  // Allows you to seek to a specific time in an animation.
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++)
      this._actions[t].time = 0;
    return this.update(e);
  }
  // return this mixer's root target object
  getRoot() {
    return this._root;
  }
  // free all resources specific to a particular clip
  uncacheClip(e) {
    const t = this._actions, n = e.uuid, i = this._actionsByClip, s = i[n];
    if (s !== void 0) {
      const a = s.knownActions;
      for (let o = 0, c = a.length; o !== c; ++o) {
        const l = a[o];
        this._deactivateAction(l);
        const h = l._cacheIndex, u = t[t.length - 1];
        l._cacheIndex = null, l._byClipCacheIndex = null, u._cacheIndex = h, t[h] = u, t.pop(), this._removeInactiveBindingsForAction(l);
      }
      delete i[n];
    }
  }
  // free all resources specific to a particular root target object
  uncacheRoot(e) {
    const t = e.uuid, n = this._actionsByClip;
    for (const a in n) {
      const o = n[a].actionByRoot, c = o[t];
      c !== void 0 && (this._deactivateAction(c), this._removeInactiveAction(c));
    }
    const i = this._bindingsByRootAndName, s = i[t];
    if (s !== void 0)
      for (const a in s) {
        const o = s[a];
        o.restoreOriginalState(), this._removeInactiveBinding(o);
      }
  }
  // remove a targeted clip from the cache
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
class Jl {
  constructor(e) {
    this.value = e;
  }
  clone() {
    return new Jl(this.value.clone === void 0 ? this.value : this.value.clone());
  }
}
let Av = 0;
class wv extends Tn {
  constructor() {
    super(), this.isUniformsGroup = !0, Object.defineProperty(this, "id", { value: Av++ }), this.name = "", this.usage = hr, this.uniforms = [];
  }
  add(e) {
    return this.uniforms.push(e), this;
  }
  remove(e) {
    const t = this.uniforms.indexOf(e);
    return t !== -1 && this.uniforms.splice(t, 1), this;
  }
  setName(e) {
    return this.name = e, this;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this;
  }
  copy(e) {
    this.name = e.name, this.usage = e.usage;
    const t = e.uniforms;
    this.uniforms.length = 0;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = Array.isArray(t[n]) ? t[n] : [t[n]];
      for (let a = 0; a < s.length; a++)
        this.uniforms.push(s[a].clone());
    }
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Tv extends wr {
  constructor(e, t, n = 1) {
    super(e, t), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  clone(e) {
    const t = super.clone(e);
    return t.meshPerAttribute = this.meshPerAttribute, t;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t;
  }
}
class Ev {
  constructor(e, t, n, i, s) {
    this.isGLBufferAttribute = !0, this.name = "", this.buffer = e, this.type = t, this.itemSize = n, this.elementSize = i, this.count = s, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setBuffer(e) {
    return this.buffer = e, this;
  }
  setType(e, t) {
    return this.type = e, this.elementSize = t, this;
  }
  setItemSize(e) {
    return this.itemSize = e, this;
  }
  setCount(e) {
    return this.count = e, this;
  }
}
const Eu = /* @__PURE__ */ new Ie();
class Rv {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new Ps(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new To(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return Eu.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Eu), this;
  }
  intersectObject(e, t = !0, n = []) {
    return sl(e, this, n, t), n.sort(Ru), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, s = e.length; i < s; i++)
      sl(e[i], this, n, t);
    return n.sort(Ru), n;
  }
}
function Ru(r, e) {
  return r.distance - e.distance;
}
function sl(r, e, t, n) {
  let i = !0;
  if (r.layers.test(e.layers) && r.raycast(e, t) === !1 && (i = !1), i === !0 && n === !0) {
    const s = r.children;
    for (let a = 0, o = s.length; a < o; a++)
      sl(s[a], e, t, !0);
  }
}
class Cv {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(pt(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Pv {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.theta = t, this.y = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.theta = t, this.y = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + n * n), this.theta = Math.atan2(e, n), this.y = t, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Zl {
  constructor(e, t, n, i) {
    Zl.prototype.isMatrix2 = !0, this.elements = [
      1,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i);
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      1
    ), this;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 4; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  set(e, t, n, i) {
    const s = this.elements;
    return s[0] = e, s[2] = t, s[1] = n, s[3] = i, this;
  }
}
const Cu = /* @__PURE__ */ new Z();
class Iv {
  constructor(e = new Z(1 / 0, 1 / 0), t = new Z(-1 / 0, -1 / 0)) {
    this.isBox2 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Cu.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y)
    );
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y;
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Cu).distanceTo(e);
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Pu = /* @__PURE__ */ new P(), _a = /* @__PURE__ */ new P();
class Lv {
  constructor(e = new P(), t = new P()) {
    this.start = e, this.end = t;
  }
  set(e, t) {
    return this.start.copy(e), this.end.copy(t), this;
  }
  copy(e) {
    return this.start.copy(e.start), this.end.copy(e.end), this;
  }
  getCenter(e) {
    return e.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(e) {
    return e.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(e, t) {
    return this.delta(t).multiplyScalar(e).add(this.start);
  }
  closestPointToPointParameter(e, t) {
    Pu.subVectors(e, this.start), _a.subVectors(this.end, this.start);
    const n = _a.dot(_a);
    let s = _a.dot(Pu) / n;
    return t && (s = pt(s, 0, 1)), s;
  }
  closestPointToPoint(e, t, n) {
    const i = this.closestPointToPointParameter(e, t);
    return this.delta(n).multiplyScalar(i).add(this.start);
  }
  applyMatrix4(e) {
    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
  }
  equals(e) {
    return e.start.equals(this.start) && e.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Iu = /* @__PURE__ */ new P();
class Dv extends je {
  constructor(e, t) {
    super(), this.light = e, this.matrixAutoUpdate = !1, this.color = t, this.type = "SpotLightHelper";
    const n = new Xe(), i = [
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      -1,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      -1,
      1
    ];
    for (let a = 0, o = 1, c = 32; a < c; a++, o++) {
      const l = a / c * Math.PI * 2, h = o / c * Math.PI * 2;
      i.push(
        Math.cos(l),
        Math.sin(l),
        1,
        Math.cos(h),
        Math.sin(h),
        1
      );
    }
    n.setAttribute("position", new we(i, 3));
    const s = new Ot({ fog: !1, toneMapped: !1 });
    this.cone = new gn(n, s), this.add(this.cone), this.update();
  }
  dispose() {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), this.parent ? (this.parent.updateWorldMatrix(!0), this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)) : this.matrix.copy(this.light.matrixWorld), this.matrixWorld.copy(this.light.matrixWorld);
    const e = this.light.distance ? this.light.distance : 1e3, t = e * Math.tan(this.light.angle);
    this.cone.scale.set(t, t, e), Iu.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(Iu), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
  }
}
const Zn = /* @__PURE__ */ new P(), xa = /* @__PURE__ */ new Ie(), zc = /* @__PURE__ */ new Ie();
class Uv extends gn {
  constructor(e) {
    const t = kf(e), n = new Xe(), i = [], s = [], a = new ue(0, 0, 1), o = new ue(0, 1, 0);
    for (let l = 0; l < t.length; l++) {
      const h = t[l];
      h.parent && h.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), s.push(a.r, a.g, a.b), s.push(o.r, o.g, o.b));
    }
    n.setAttribute("position", new we(i, 3)), n.setAttribute("color", new we(s, 3));
    const c = new Ot({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 });
    super(n, c), this.isSkeletonHelper = !0, this.type = "SkeletonHelper", this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
  }
  updateMatrixWorld(e) {
    const t = this.bones, n = this.geometry, i = n.getAttribute("position");
    zc.copy(this.root.matrixWorld).invert();
    for (let s = 0, a = 0; s < t.length; s++) {
      const o = t[s];
      o.parent && o.parent.isBone && (xa.multiplyMatrices(zc, o.matrixWorld), Zn.setFromMatrixPosition(xa), i.setXYZ(a, Zn.x, Zn.y, Zn.z), xa.multiplyMatrices(zc, o.parent.matrixWorld), Zn.setFromMatrixPosition(xa), i.setXYZ(a + 1, Zn.x, Zn.y, Zn.z), a += 2);
    }
    n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function kf(r) {
  const e = [];
  r.isBone === !0 && e.push(r);
  for (let t = 0; t < r.children.length; t++)
    e.push.apply(e, kf(r.children[t]));
  return e;
}
class Nv extends qe {
  constructor(e, t, n) {
    const i = new Cr(t, 4, 2), s = new Ct({ wireframe: !0, fog: !1, toneMapped: !1 });
    super(i, s), this.light = e, this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
  }
}
const Fv = /* @__PURE__ */ new P(), Lu = /* @__PURE__ */ new ue(), Du = /* @__PURE__ */ new ue();
class Ov extends je {
  constructor(e, t, n) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "HemisphereLightHelper";
    const i = new Rr(t);
    i.rotateY(Math.PI * 0.5), this.material = new Ct({ wireframe: !0, fog: !1, toneMapped: !1 }), this.color === void 0 && (this.material.vertexColors = !0);
    const s = i.getAttribute("position"), a = new Float32Array(s.count * 3);
    i.setAttribute("color", new nt(a, 3)), this.add(new qe(i, this.material)), this.update();
  }
  dispose() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
  update() {
    const e = this.children[0];
    if (this.color !== void 0)
      this.material.color.set(this.color);
    else {
      const t = e.geometry.getAttribute("color");
      Lu.copy(this.light.color), Du.copy(this.light.groundColor);
      for (let n = 0, i = t.count; n < i; n++) {
        const s = n < i / 2 ? Lu : Du;
        t.setXYZ(n, s.r, s.g, s.b);
      }
      t.needsUpdate = !0;
    }
    this.light.updateWorldMatrix(!0, !1), e.lookAt(Fv.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
class Bv extends gn {
  constructor(e = 10, t = 10, n = 4473924, i = 8947848) {
    n = new ue(n), i = new ue(i);
    const s = t / 2, a = e / t, o = e / 2, c = [], l = [];
    for (let d = 0, f = 0, g = -o; d <= t; d++, g += a) {
      c.push(-o, 0, g, o, 0, g), c.push(g, 0, -o, g, 0, o);
      const b = d === s ? n : i;
      b.toArray(l, f), f += 3, b.toArray(l, f), f += 3, b.toArray(l, f), f += 3, b.toArray(l, f), f += 3;
    }
    const h = new Xe();
    h.setAttribute("position", new we(c, 3)), h.setAttribute("color", new we(l, 3));
    const u = new Ot({ vertexColors: !0, toneMapped: !1 });
    super(h, u), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class kv extends gn {
  constructor(e = 10, t = 16, n = 8, i = 64, s = 4473924, a = 8947848) {
    s = new ue(s), a = new ue(a);
    const o = [], c = [];
    if (t > 1)
      for (let u = 0; u < t; u++) {
        const d = u / t * (Math.PI * 2), f = Math.sin(d) * e, g = Math.cos(d) * e;
        o.push(0, 0, 0), o.push(f, 0, g);
        const b = u & 1 ? s : a;
        c.push(b.r, b.g, b.b), c.push(b.r, b.g, b.b);
      }
    for (let u = 0; u < n; u++) {
      const d = u & 1 ? s : a, f = e - e / n * u;
      for (let g = 0; g < i; g++) {
        let b = g / i * (Math.PI * 2), m = Math.sin(b) * f, p = Math.cos(b) * f;
        o.push(m, 0, p), c.push(d.r, d.g, d.b), b = (g + 1) / i * (Math.PI * 2), m = Math.sin(b) * f, p = Math.cos(b) * f, o.push(m, 0, p), c.push(d.r, d.g, d.b);
      }
    }
    const l = new Xe();
    l.setAttribute("position", new we(o, 3)), l.setAttribute("color", new we(c, 3));
    const h = new Ot({ vertexColors: !0, toneMapped: !1 });
    super(l, h), this.type = "PolarGridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const Uu = /* @__PURE__ */ new P(), va = /* @__PURE__ */ new P(), Nu = /* @__PURE__ */ new P();
class zv extends je {
  constructor(e, t, n) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "DirectionalLightHelper", t === void 0 && (t = 1);
    let i = new Xe();
    i.setAttribute("position", new we([
      -t,
      t,
      0,
      t,
      t,
      0,
      t,
      -t,
      0,
      -t,
      -t,
      0,
      -t,
      t,
      0
    ], 3));
    const s = new Ot({ fog: !1, toneMapped: !1 });
    this.lightPlane = new Hn(i, s), this.add(this.lightPlane), i = new Xe(), i.setAttribute("position", new we([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Hn(i, s), this.add(this.targetLine), this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), Uu.setFromMatrixPosition(this.light.matrixWorld), va.setFromMatrixPosition(this.light.target.matrixWorld), Nu.subVectors(va, Uu), this.lightPlane.lookAt(va), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(va), this.targetLine.scale.z = Nu.length();
  }
}
const ya = /* @__PURE__ */ new P(), ft = /* @__PURE__ */ new Eo();
class Gv extends gn {
  constructor(e) {
    const t = new Xe(), n = new Ot({ color: 16777215, vertexColors: !0, toneMapped: !1 }), i = [], s = [], a = {};
    o("n1", "n2"), o("n2", "n4"), o("n4", "n3"), o("n3", "n1"), o("f1", "f2"), o("f2", "f4"), o("f4", "f3"), o("f3", "f1"), o("n1", "f1"), o("n2", "f2"), o("n3", "f3"), o("n4", "f4"), o("p", "n1"), o("p", "n2"), o("p", "n3"), o("p", "n4"), o("u1", "u2"), o("u2", "u3"), o("u3", "u1"), o("c", "t"), o("p", "c"), o("cn1", "cn2"), o("cn3", "cn4"), o("cf1", "cf2"), o("cf3", "cf4");
    function o(g, b) {
      c(g), c(b);
    }
    function c(g) {
      i.push(0, 0, 0), s.push(0, 0, 0), a[g] === void 0 && (a[g] = []), a[g].push(i.length / 3 - 1);
    }
    t.setAttribute("position", new we(i, 3)), t.setAttribute("color", new we(s, 3)), super(t, n), this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update();
    const l = new ue(16755200), h = new ue(16711680), u = new ue(43775), d = new ue(16777215), f = new ue(3355443);
    this.setColors(l, h, u, d, f);
  }
  setColors(e, t, n, i, s) {
    const o = this.geometry.getAttribute("color");
    o.setXYZ(0, e.r, e.g, e.b), o.setXYZ(1, e.r, e.g, e.b), o.setXYZ(2, e.r, e.g, e.b), o.setXYZ(3, e.r, e.g, e.b), o.setXYZ(4, e.r, e.g, e.b), o.setXYZ(5, e.r, e.g, e.b), o.setXYZ(6, e.r, e.g, e.b), o.setXYZ(7, e.r, e.g, e.b), o.setXYZ(8, e.r, e.g, e.b), o.setXYZ(9, e.r, e.g, e.b), o.setXYZ(10, e.r, e.g, e.b), o.setXYZ(11, e.r, e.g, e.b), o.setXYZ(12, e.r, e.g, e.b), o.setXYZ(13, e.r, e.g, e.b), o.setXYZ(14, e.r, e.g, e.b), o.setXYZ(15, e.r, e.g, e.b), o.setXYZ(16, e.r, e.g, e.b), o.setXYZ(17, e.r, e.g, e.b), o.setXYZ(18, e.r, e.g, e.b), o.setXYZ(19, e.r, e.g, e.b), o.setXYZ(20, e.r, e.g, e.b), o.setXYZ(21, e.r, e.g, e.b), o.setXYZ(22, e.r, e.g, e.b), o.setXYZ(23, e.r, e.g, e.b), o.setXYZ(24, t.r, t.g, t.b), o.setXYZ(25, t.r, t.g, t.b), o.setXYZ(26, t.r, t.g, t.b), o.setXYZ(27, t.r, t.g, t.b), o.setXYZ(28, t.r, t.g, t.b), o.setXYZ(29, t.r, t.g, t.b), o.setXYZ(30, t.r, t.g, t.b), o.setXYZ(31, t.r, t.g, t.b), o.setXYZ(32, n.r, n.g, n.b), o.setXYZ(33, n.r, n.g, n.b), o.setXYZ(34, n.r, n.g, n.b), o.setXYZ(35, n.r, n.g, n.b), o.setXYZ(36, n.r, n.g, n.b), o.setXYZ(37, n.r, n.g, n.b), o.setXYZ(38, i.r, i.g, i.b), o.setXYZ(39, i.r, i.g, i.b), o.setXYZ(40, s.r, s.g, s.b), o.setXYZ(41, s.r, s.g, s.b), o.setXYZ(42, s.r, s.g, s.b), o.setXYZ(43, s.r, s.g, s.b), o.setXYZ(44, s.r, s.g, s.b), o.setXYZ(45, s.r, s.g, s.b), o.setXYZ(46, s.r, s.g, s.b), o.setXYZ(47, s.r, s.g, s.b), o.setXYZ(48, s.r, s.g, s.b), o.setXYZ(49, s.r, s.g, s.b), o.needsUpdate = !0;
  }
  update() {
    const e = this.geometry, t = this.pointMap, n = 1, i = 1;
    ft.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), gt("c", t, e, ft, 0, 0, -1), gt("t", t, e, ft, 0, 0, 1), gt("n1", t, e, ft, -n, -i, -1), gt("n2", t, e, ft, n, -i, -1), gt("n3", t, e, ft, -n, i, -1), gt("n4", t, e, ft, n, i, -1), gt("f1", t, e, ft, -n, -i, 1), gt("f2", t, e, ft, n, -i, 1), gt("f3", t, e, ft, -n, i, 1), gt("f4", t, e, ft, n, i, 1), gt("u1", t, e, ft, n * 0.7, i * 1.1, -1), gt("u2", t, e, ft, -n * 0.7, i * 1.1, -1), gt("u3", t, e, ft, 0, i * 2, -1), gt("cf1", t, e, ft, -n, 0, 1), gt("cf2", t, e, ft, n, 0, 1), gt("cf3", t, e, ft, 0, -i, 1), gt("cf4", t, e, ft, 0, i, 1), gt("cn1", t, e, ft, -n, 0, -1), gt("cn2", t, e, ft, n, 0, -1), gt("cn3", t, e, ft, 0, -i, -1), gt("cn4", t, e, ft, 0, i, -1), e.getAttribute("position").needsUpdate = !0;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function gt(r, e, t, n, i, s, a) {
  ya.set(i, s, a).unproject(n);
  const o = e[r];
  if (o !== void 0) {
    const c = t.getAttribute("position");
    for (let l = 0, h = o.length; l < h; l++)
      c.setXYZ(o[l], ya.x, ya.y, ya.z);
  }
}
const Ma = /* @__PURE__ */ new Ft();
class Hv extends gn {
  constructor(e, t = 16776960) {
    const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = new Float32Array(24), s = new Xe();
    s.setIndex(new nt(n, 1)), s.setAttribute("position", new nt(i, 3)), super(s, new Ot({ color: t, toneMapped: !1 })), this.object = e, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
  }
  update(e) {
    if (e !== void 0 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), this.object !== void 0 && Ma.setFromObject(this.object), Ma.isEmpty()) return;
    const t = Ma.min, n = Ma.max, i = this.geometry.attributes.position, s = i.array;
    s[0] = n.x, s[1] = n.y, s[2] = n.z, s[3] = t.x, s[4] = n.y, s[5] = n.z, s[6] = t.x, s[7] = t.y, s[8] = n.z, s[9] = n.x, s[10] = t.y, s[11] = n.z, s[12] = n.x, s[13] = n.y, s[14] = t.z, s[15] = t.x, s[16] = n.y, s[17] = t.z, s[18] = t.x, s[19] = t.y, s[20] = t.z, s[21] = n.x, s[22] = t.y, s[23] = t.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere();
  }
  setFromObject(e) {
    return this.object = e, this.update(), this;
  }
  copy(e, t) {
    return super.copy(e, t), this.object = e.object, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Vv extends gn {
  constructor(e, t = 16776960) {
    const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], s = new Xe();
    s.setIndex(new nt(n, 1)), s.setAttribute("position", new we(i, 3)), super(s, new Ot({ color: t, toneMapped: !1 })), this.box = e, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
  }
  updateMatrixWorld(e) {
    const t = this.box;
    t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(0.5), super.updateMatrixWorld(e));
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Wv extends Hn {
  constructor(e, t = 1, n = 16776960) {
    const i = n, s = [1, -1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], a = new Xe();
    a.setAttribute("position", new we(s, 3)), a.computeBoundingSphere(), super(a, new Ot({ color: i, toneMapped: !1 })), this.type = "PlaneHelper", this.plane = e, this.size = t;
    const o = [1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], c = new Xe();
    c.setAttribute("position", new we(o, 3)), c.computeBoundingSphere(), this.add(new qe(c, new Ct({ color: i, opacity: 0.2, transparent: !0, depthWrite: !1, toneMapped: !1 })));
  }
  updateMatrixWorld(e) {
    this.position.set(0, 0, 0), this.scale.set(0.5 * this.size, 0.5 * this.size, 1), this.lookAt(this.plane.normal), this.translateZ(-this.plane.constant), super.updateMatrixWorld(e);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
}
const Fu = /* @__PURE__ */ new P();
let Sa, Gc;
class Xv extends je {
  // dir is assumed to be normalized
  constructor(e = new P(0, 0, 1), t = new P(0, 0, 0), n = 1, i = 16776960, s = n * 0.2, a = s * 0.2) {
    super(), this.type = "ArrowHelper", Sa === void 0 && (Sa = new Xe(), Sa.setAttribute("position", new we([0, 0, 0, 0, 1, 0], 3)), Gc = new Xi(0, 0.5, 1, 5, 1), Gc.translate(0, -0.5, 0)), this.position.copy(t), this.line = new Hn(Sa, new Ot({ color: i, toneMapped: !1 })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new qe(Gc, new Ct({ color: i, toneMapped: !1 })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, s, a);
  }
  setDirection(e) {
    if (e.y > 0.99999)
      this.quaternion.set(0, 0, 0, 1);
    else if (e.y < -0.99999)
      this.quaternion.set(1, 0, 0, 0);
    else {
      Fu.set(e.z, 0, -e.x).normalize();
      const t = Math.acos(e.y);
      this.quaternion.setFromAxisAngle(Fu, t);
    }
  }
  setLength(e, t = e * 0.2, n = t * 0.2) {
    this.line.scale.set(1, Math.max(1e-4, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix();
  }
  setColor(e) {
    this.line.material.color.set(e), this.cone.material.color.set(e);
  }
  copy(e) {
    return super.copy(e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this;
  }
  dispose() {
    this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
  }
}
class qv extends gn {
  constructor(e = 1) {
    const t = [
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      0,
      0,
      e
    ], n = [
      1,
      0,
      0,
      1,
      0.6,
      0,
      0,
      1,
      0,
      0.6,
      1,
      0,
      0,
      0,
      1,
      0,
      0.6,
      1
    ], i = new Xe();
    i.setAttribute("position", new we(t, 3)), i.setAttribute("color", new we(n, 3));
    const s = new Ot({ vertexColors: !0, toneMapped: !1 });
    super(i, s), this.type = "AxesHelper";
  }
  setColors(e, t, n) {
    const i = new ue(), s = this.geometry.attributes.color.array;
    return i.set(e), i.toArray(s, 0), i.toArray(s, 3), i.set(t), i.toArray(s, 6), i.toArray(s, 9), i.set(n), i.toArray(s, 12), i.toArray(s, 15), this.geometry.attributes.color.needsUpdate = !0, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Yv {
  constructor() {
    this.type = "ShapePath", this.color = new ue(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(e, t) {
    return this.currentPath = new fr(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
  }
  lineTo(e, t) {
    return this.currentPath.lineTo(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    return this.currentPath.quadraticCurveTo(e, t, n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, a) {
    return this.currentPath.bezierCurveTo(e, t, n, i, s, a), this;
  }
  splineThru(e) {
    return this.currentPath.splineThru(e), this;
  }
  toShapes(e) {
    function t(p) {
      const x = [];
      for (let _ = 0, v = p.length; _ < v; _++) {
        const I = p[_], T = new Ni();
        T.curves = I.curves, x.push(T);
      }
      return x;
    }
    function n(p, x) {
      const _ = x.length;
      let v = !1;
      for (let I = _ - 1, T = 0; T < _; I = T++) {
        let w = x[I], R = x[T], L = R.x - w.x, y = R.y - w.y;
        if (Math.abs(y) > Number.EPSILON) {
          if (y < 0 && (w = x[T], L = -L, R = x[I], y = -y), p.y < w.y || p.y > R.y) continue;
          if (p.y === w.y) {
            if (p.x === w.x) return !0;
          } else {
            const S = y * (p.x - w.x) - L * (p.y - w.y);
            if (S === 0) return !0;
            if (S < 0) continue;
            v = !v;
          }
        } else {
          if (p.y !== w.y) continue;
          if (R.x <= p.x && p.x <= w.x || w.x <= p.x && p.x <= R.x) return !0;
        }
      }
      return v;
    }
    const i = Sn.isClockWise, s = this.subPaths;
    if (s.length === 0) return [];
    let a, o, c;
    const l = [];
    if (s.length === 1)
      return o = s[0], c = new Ni(), c.curves = o.curves, l.push(c), l;
    let h = !i(s[0].getPoints());
    h = e ? !h : h;
    const u = [], d = [];
    let f = [], g = 0, b;
    d[g] = void 0, f[g] = [];
    for (let p = 0, x = s.length; p < x; p++)
      o = s[p], b = o.getPoints(), a = i(b), a = e ? !a : a, a ? (!h && d[g] && g++, d[g] = { s: new Ni(), p: b }, d[g].s.curves = o.curves, h && g++, f[g] = []) : f[g].push({ h: o, p: b[0] });
    if (!d[0]) return t(s);
    if (d.length > 1) {
      let p = !1, x = 0;
      for (let _ = 0, v = d.length; _ < v; _++)
        u[_] = [];
      for (let _ = 0, v = d.length; _ < v; _++) {
        const I = f[_];
        for (let T = 0; T < I.length; T++) {
          const w = I[T];
          let R = !0;
          for (let L = 0; L < d.length; L++)
            n(w.p, d[L].p) && (_ !== L && x++, R ? (R = !1, u[L].push(w)) : p = !0);
          R && u[_].push(w);
        }
      }
      x > 0 && p === !1 && (f = u);
    }
    let m;
    for (let p = 0, x = d.length; p < x; p++) {
      c = d[p].s, l.push(c), m = f[p];
      for (let _ = 0, v = m.length; _ < v; _++)
        c.holes.push(m[_].h);
    }
    return l;
  }
}
class jv extends Tn {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
class Kv extends fn {
  // @deprecated, r162
  constructor(e = 1, t = 1, n = 1, i = {}) {
    console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'), super(e, t, { ...i, count: n }), this.isWebGLMultipleRenderTargets = !0;
  }
  get texture() {
    return this.textures;
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: "169"
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "169");
const Jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ACESFilmicToneMapping: ll,
  AddEquation: ei,
  AddOperation: hd,
  AdditiveAnimationBlendMode: xl,
  AdditiveBlending: Ea,
  AgXToneMapping: md,
  AlphaFormat: fl,
  AlwaysCompare: Id,
  AlwaysDepth: Ia,
  AlwaysStencilFunc: Jc,
  AmbientLight: Rf,
  AnimationAction: Bf,
  AnimationClip: Rs,
  AnimationLoader: Zx,
  AnimationMixer: Sv,
  AnimationObjectGroup: yv,
  AnimationUtils: Yx,
  ArcCurve: ef,
  ArrayCamera: Yd,
  ArrowHelper: Xv,
  AttachedBindMode: Kc,
  Audio: Ff,
  AudioAnalyser: uv,
  AudioContext: Yl,
  AudioListener: cv,
  AudioLoader: rv,
  AxesHelper: qv,
  BackSide: Ut,
  BasicDepthPacking: Md,
  BasicShadowMap: Kf,
  BatchedMesh: Qd,
  Bone: Lo,
  BooleanKeyframeTrack: qi,
  Box2: Iv,
  Box3: Ft,
  Box3Helper: Vv,
  BoxGeometry: oi,
  BoxHelper: Hv,
  BufferAttribute: nt,
  BufferGeometry: Xe,
  BufferGeometryLoader: Df,
  ByteType: hl,
  Cache: On,
  Camera: Eo,
  CameraHelper: Gv,
  CanvasTexture: $d,
  CapsuleGeometry: Fo,
  CatmullRomCurve3: tf,
  CineonToneMapping: fd,
  CircleGeometry: Oo,
  ClampToEdgeWrapping: Zt,
  Clock: Nf,
  Color: ue,
  ColorKeyframeTrack: Vl,
  ColorManagement: Qe,
  CompressedArrayTexture: gx,
  CompressedCubeTexture: bx,
  CompressedTexture: Uo,
  CompressedTextureLoader: Qx,
  ConeGeometry: Bo,
  ConstantAlphaFactor: od,
  ConstantColorFactor: rd,
  Controls: jv,
  CubeCamera: kd,
  CubeReflectionMapping: zn,
  CubeRefractionMapping: ni,
  CubeTexture: Mr,
  CubeTextureLoader: $x,
  CubeUVReflectionMapping: Cs,
  CubicBezierCurve: Fl,
  CubicBezierCurve3: nf,
  CubicInterpolant: yf,
  CullFaceBack: qc,
  CullFaceFront: Vu,
  CullFaceFrontBack: jf,
  CullFaceNone: Hu,
  Curve: bn,
  CurvePath: rf,
  CustomBlending: Xu,
  CustomToneMapping: pd,
  CylinderGeometry: Xi,
  Cylindrical: Pv,
  Data3DTexture: Sl,
  DataArrayTexture: wo,
  DataTexture: Mn,
  DataTextureLoader: wf,
  DataUtils: js,
  DecrementStencilOp: ap,
  DecrementWrapStencilOp: cp,
  DefaultLoadingManager: Af,
  DepthFormat: Di,
  DepthStencilFormat: Bi,
  DepthTexture: El,
  DetachedBindMode: bd,
  DirectionalLight: _r,
  DirectionalLightHelper: zv,
  DiscreteInterpolant: Mf,
  DisplayP3ColorSpace: Ao,
  DodecahedronGeometry: ko,
  DoubleSide: dn,
  DstAlphaFactor: ed,
  DstColorFactor: nd,
  DynamicCopyUsage: Sp,
  DynamicDrawUsage: bp,
  DynamicReadUsage: vp,
  EdgesGeometry: af,
  EllipseCurve: No,
  EqualCompare: Ed,
  EqualDepth: Da,
  EqualStencilFunc: dp,
  EquirectangularReflectionMapping: sr,
  EquirectangularRefractionMapping: rr,
  Euler: $t,
  EventDispatcher: Tn,
  ExtrudeGeometry: Go,
  FileLoader: mn,
  Float16BufferAttribute: um,
  Float32BufferAttribute: we,
  FloatType: Rt,
  Fog: Po,
  FogExp2: Co,
  FramebufferTexture: mx,
  FrontSide: An,
  Frustum: Sr,
  GLBufferAttribute: Ev,
  GLSL1: wp,
  GLSL3: Zc,
  GreaterCompare: Rd,
  GreaterDepth: Na,
  GreaterEqualCompare: Pd,
  GreaterEqualDepth: Ua,
  GreaterEqualStencilFunc: gp,
  GreaterStencilFunc: pp,
  GridHelper: Bv,
  Group: rn,
  HalfFloatType: vn,
  HemisphereLight: Ef,
  HemisphereLightHelper: Ov,
  IcosahedronGeometry: Ho,
  ImageBitmapLoader: Uf,
  ImageLoader: br,
  ImageUtils: Ud,
  IncrementStencilOp: rp,
  IncrementWrapStencilOp: op,
  InstancedBufferAttribute: ki,
  InstancedBufferGeometry: Lf,
  InstancedInterleavedBuffer: Tv,
  InstancedMesh: Ll,
  Int16BufferAttribute: lm,
  Int32BufferAttribute: hm,
  Int8BufferAttribute: am,
  IntType: bo,
  InterleavedBuffer: wr,
  InterleavedBufferAttribute: si,
  Interpolant: Ls,
  InterpolateDiscrete: Ss,
  InterpolateLinear: As,
  InterpolateSmooth: Aa,
  InvertStencilOp: lp,
  KeepStencilOp: Ai,
  KeyframeTrack: _n,
  LOD: Zd,
  LatheGeometry: Er,
  Layers: To,
  LessCompare: Td,
  LessDepth: La,
  LessEqualCompare: yl,
  LessEqualDepth: Fi,
  LessEqualStencilFunc: fp,
  LessStencilFunc: up,
  Light: li,
  LightProbe: If,
  Line: Hn,
  Line3: Lv,
  LineBasicMaterial: Ot,
  LineCurve: Ol,
  LineCurve3: sf,
  LineDashedMaterial: _f,
  LineLoop: Dl,
  LineSegments: gn,
  LinearDisplayP3ColorSpace: yr,
  LinearFilter: lt,
  LinearInterpolant: Hl,
  LinearMipMapLinearFilter: $f,
  LinearMipMapNearestFilter: Qf,
  LinearMipmapLinearFilter: sn,
  LinearMipmapNearestFilter: _s,
  LinearSRGBColorSpace: St,
  LinearToneMapping: ud,
  LinearTransfer: or,
  Loader: Ht,
  LoaderUtils: ti,
  LoadingManager: Wl,
  LoopOnce: _d,
  LoopPingPong: vd,
  LoopRepeat: xd,
  LuminanceAlphaFormat: gl,
  LuminanceFormat: ml,
  MOUSE: qf,
  Material: Mt,
  MaterialLoader: jo,
  MathUtils: ps,
  Matrix2: Zl,
  Matrix3: He,
  Matrix4: Ie,
  MaxEquation: Ku,
  Mesh: qe,
  MeshBasicMaterial: Ct,
  MeshDepthMaterial: Rl,
  MeshDistanceMaterial: Cl,
  MeshLambertMaterial: gf,
  MeshMatcapMaterial: bf,
  MeshNormalMaterial: mf,
  MeshPhongMaterial: ff,
  MeshPhysicalMaterial: an,
  MeshStandardMaterial: ri,
  MeshToonMaterial: pf,
  MinEquation: ju,
  MirroredRepeatWrapping: ys,
  MixOperation: ld,
  MultiplyBlending: jc,
  MultiplyOperation: xr,
  NearestFilter: yt,
  NearestMipMapLinearFilter: Zf,
  NearestMipMapNearestFilter: Jf,
  NearestMipmapLinearFilter: Ei,
  NearestMipmapNearestFilter: go,
  NeutralToneMapping: gd,
  NeverCompare: wd,
  NeverDepth: Pa,
  NeverStencilFunc: hp,
  NoBlending: Bn,
  NoColorSpace: Nn,
  NoToneMapping: kn,
  NormalAnimationBlendMode: So,
  NormalBlending: Li,
  NotEqualCompare: Cd,
  NotEqualDepth: Fa,
  NotEqualStencilFunc: mp,
  NumberKeyframeTrack: Gi,
  Object3D: je,
  ObjectLoader: iv,
  ObjectSpaceNormalMap: Ad,
  OctahedronGeometry: Rr,
  OneFactor: Zu,
  OneMinusConstantAlphaFactor: cd,
  OneMinusConstantColorFactor: ad,
  OneMinusDstAlphaFactor: td,
  OneMinusDstColorFactor: id,
  OneMinusSrcAlphaFactor: Ca,
  OneMinusSrcColorFactor: $u,
  OrthographicCamera: Ar,
  P3Primaries: lr,
  PCFShadowMap: cl,
  PCFSoftShadowMap: Wu,
  PMREMGenerator: ho,
  Path: fr,
  PerspectiveCamera: vt,
  Plane: $n,
  PlaneGeometry: Wi,
  PlaneHelper: Wv,
  PointLight: Pr,
  PointLightHelper: Nv,
  Points: Ul,
  PointsMaterial: Do,
  PolarGridHelper: kv,
  PolyhedronGeometry: ci,
  PositionalAudio: hv,
  PropertyBinding: Ze,
  PropertyMixer: Of,
  QuadraticBezierCurve: Bl,
  QuadraticBezierCurve3: kl,
  Quaternion: Nt,
  QuaternionKeyframeTrack: Hi,
  QuaternionLinearInterpolant: Sf,
  RED_GREEN_RGTC2_Format: oo,
  RED_RGTC1_Format: _l,
  REVISION: "169",
  RGBADepthPacking: Sd,
  RGBAFormat: Gt,
  RGBAIntegerFormat: Mo,
  RGBA_ASTC_10x10_Format: to,
  RGBA_ASTC_10x5_Format: Qa,
  RGBA_ASTC_10x6_Format: $a,
  RGBA_ASTC_10x8_Format: eo,
  RGBA_ASTC_12x10_Format: no,
  RGBA_ASTC_12x12_Format: io,
  RGBA_ASTC_4x4_Format: Wa,
  RGBA_ASTC_5x4_Format: Xa,
  RGBA_ASTC_5x5_Format: qa,
  RGBA_ASTC_6x5_Format: Ya,
  RGBA_ASTC_6x6_Format: ja,
  RGBA_ASTC_8x5_Format: Ka,
  RGBA_ASTC_8x6_Format: Ja,
  RGBA_ASTC_8x8_Format: Za,
  RGBA_BPTC_Format: er,
  RGBA_ETC2_EAC_Format: Va,
  RGBA_PVRTC_2BPPV1_Format: za,
  RGBA_PVRTC_4BPPV1_Format: ka,
  RGBA_S3TC_DXT1_Format: Zs,
  RGBA_S3TC_DXT3_Format: Qs,
  RGBA_S3TC_DXT5_Format: $s,
  RGBDepthPacking: tp,
  RGBFormat: pl,
  RGBIntegerFormat: ep,
  RGB_BPTC_SIGNED_Format: so,
  RGB_BPTC_UNSIGNED_Format: ro,
  RGB_ETC1_Format: Ga,
  RGB_ETC2_Format: Ha,
  RGB_PVRTC_2BPPV1_Format: Ba,
  RGB_PVRTC_4BPPV1_Format: Oa,
  RGB_S3TC_DXT1_Format: Js,
  RGDepthPacking: np,
  RGFormat: bl,
  RGIntegerFormat: yo,
  RawShaderMaterial: df,
  Ray: Ps,
  Raycaster: Rv,
  Rec709Primaries: cr,
  RectAreaLight: Cf,
  RedFormat: vo,
  RedIntegerFormat: vr,
  ReinhardToneMapping: dd,
  RenderTarget: Nd,
  RepeatWrapping: ii,
  ReplaceStencilOp: sp,
  ReverseSubtractEquation: Yu,
  RingGeometry: Vo,
  SIGNED_RED_GREEN_RGTC2_Format: co,
  SIGNED_RED_RGTC1_Format: ao,
  SRGBColorSpace: xt,
  SRGBTransfer: ot,
  Scene: Io,
  ShaderChunk: We,
  ShaderLib: un,
  ShaderMaterial: pn,
  ShadowMaterial: uf,
  Shape: Ni,
  ShapeGeometry: Wo,
  ShapePath: Yv,
  ShapeUtils: Sn,
  ShortType: ul,
  Skeleton: Tr,
  SkeletonHelper: Uv,
  SkinnedMesh: Il,
  Source: Pi,
  Sphere: Pt,
  SphereGeometry: Cr,
  Spherical: Cv,
  SphericalHarmonics3: Pf,
  SplineCurve: zl,
  SpotLight: ql,
  SpotLightHelper: Dv,
  Sprite: Jd,
  SpriteMaterial: Pl,
  SrcAlphaFactor: Ra,
  SrcAlphaSaturateFactor: sd,
  SrcColorFactor: Qu,
  StaticCopyUsage: Mp,
  StaticDrawUsage: hr,
  StaticReadUsage: xp,
  StereoCamera: av,
  StreamCopyUsage: Ap,
  StreamDrawUsage: _p,
  StreamReadUsage: yp,
  StringKeyframeTrack: Yi,
  SubtractEquation: qu,
  SubtractiveBlending: Yc,
  TOUCH: Yf,
  TangentSpaceNormalMap: ai,
  TetrahedronGeometry: Xo,
  Texture: ht,
  TextureLoader: Tf,
  TextureUtils: j0,
  TorusGeometry: Es,
  TorusKnotGeometry: qo,
  Triangle: qt,
  TriangleFanDrawMode: lo,
  TriangleStripDrawMode: vl,
  TrianglesDrawMode: yd,
  TubeGeometry: Yo,
  UVMapping: mo,
  Uint16BufferAttribute: Al,
  Uint32BufferAttribute: wl,
  Uint8BufferAttribute: om,
  Uint8ClampedBufferAttribute: cm,
  Uniform: Jl,
  UniformsGroup: wv,
  UniformsLib: he,
  UniformsUtils: Bd,
  UnsignedByteType: wn,
  UnsignedInt248Type: Oi,
  UnsignedInt5999Type: dl,
  UnsignedIntType: Gn,
  UnsignedShort4444Type: _o,
  UnsignedShort5551Type: xo,
  UnsignedShortType: Ms,
  VSMShadowMap: xn,
  Vector2: Z,
  Vector3: P,
  Vector4: et,
  VectorKeyframeTrack: Vi,
  VideoTexture: px,
  WebGL3DRenderTarget: Jp,
  WebGLArrayRenderTarget: Kp,
  WebGLCoordinateSystem: yn,
  WebGLCubeRenderTarget: zd,
  WebGLMultipleRenderTargets: Kv,
  WebGLRenderTarget: fn,
  WebGLRenderer: jd,
  WebGLUtils: qd,
  WebGPUCoordinateSystem: ur,
  WireframeGeometry: hf,
  WrapAroundEnding: ar,
  ZeroCurvatureEnding: Ri,
  ZeroFactor: Ju,
  ZeroSlopeEnding: Ci,
  ZeroStencilOp: ip,
  createCanvasElement: Dd
}, Symbol.toStringTag, { value: "Module" }));
class Zv extends Io {
  constructor() {
    super();
    const e = new oi();
    e.deleteAttribute("uv");
    const t = new ri({ side: Ut }), n = new ri(), i = new Pr(16777215, 900, 28, 2);
    i.position.set(0.418, 16.199, 0.3), this.add(i);
    const s = new qe(e, t);
    s.position.set(-0.757, 13.219, 0.717), s.scale.set(31.713, 28.305, 28.591), this.add(s);
    const a = new qe(e, n);
    a.position.set(-10.906, 2.009, 1.846), a.rotation.set(0, -0.195, 0), a.scale.set(2.328, 7.905, 4.651), this.add(a);
    const o = new qe(e, n);
    o.position.set(-5.607, -0.754, -0.758), o.rotation.set(0, 0.994, 0), o.scale.set(1.97, 1.534, 3.955), this.add(o);
    const c = new qe(e, n);
    c.position.set(6.167, 0.857, 7.803), c.rotation.set(0, 0.561, 0), c.scale.set(3.927, 6.285, 3.687), this.add(c);
    const l = new qe(e, n);
    l.position.set(-2.017, 0.018, 6.124), l.rotation.set(0, 0.333, 0), l.scale.set(2.002, 4.566, 2.064), this.add(l);
    const h = new qe(e, n);
    h.position.set(2.291, -0.756, -2.621), h.rotation.set(0, -0.286, 0), h.scale.set(1.546, 1.552, 1.496), this.add(h);
    const u = new qe(e, n);
    u.position.set(-2.193, -0.369, -5.547), u.rotation.set(0, 0.516, 0), u.scale.set(3.875, 3.487, 2.986), this.add(u);
    const d = new qe(e, fs(50));
    d.position.set(-16.116, 14.37, 8.208), d.scale.set(0.1, 2.428, 2.739), this.add(d);
    const f = new qe(e, fs(50));
    f.position.set(-16.109, 18.021, -8.207), f.scale.set(0.1, 2.425, 2.751), this.add(f);
    const g = new qe(e, fs(17));
    g.position.set(14.904, 12.198, -1.832), g.scale.set(0.15, 4.265, 6.331), this.add(g);
    const b = new qe(e, fs(43));
    b.position.set(-0.462, 8.89, 14.52), b.scale.set(4.38, 5.441, 0.088), this.add(b);
    const m = new qe(e, fs(20));
    m.position.set(3.235, 11.486, -12.541), m.scale.set(2.5, 2, 0.1), this.add(m);
    const p = new qe(e, fs(100));
    p.position.set(0, 20, 0), p.scale.set(1, 0.1, 1), this.add(p);
  }
  dispose() {
    const e = /* @__PURE__ */ new Set();
    this.traverse((t) => {
      t.isMesh && (e.add(t.geometry), e.add(t.material));
    });
    for (const t of e)
      t.dispose();
  }
}
function fs(r) {
  const e = new Ct();
  return e.color.setScalar(r), e;
}
function Ou(r, e) {
  if (e === yd)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === lo || e === vl) {
    let t = r.getIndex();
    if (t === null) {
      const a = [], o = r.getAttribute("position");
      if (o !== void 0) {
        for (let c = 0; c < o.count; c++)
          a.push(c);
        r.setIndex(a), t = r.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
    }
    const n = t.count - 2, i = [];
    if (e === lo)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = r.clone();
    return s.setIndex(i), s.clearGroups(), s;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
}
class Qv extends Ht {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new iy(t);
    }), this.register(function(t) {
      return new sy(t);
    }), this.register(function(t) {
      return new fy(t);
    }), this.register(function(t) {
      return new py(t);
    }), this.register(function(t) {
      return new my(t);
    }), this.register(function(t) {
      return new ay(t);
    }), this.register(function(t) {
      return new oy(t);
    }), this.register(function(t) {
      return new cy(t);
    }), this.register(function(t) {
      return new ly(t);
    }), this.register(function(t) {
      return new ny(t);
    }), this.register(function(t) {
      return new hy(t);
    }), this.register(function(t) {
      return new ry(t);
    }), this.register(function(t) {
      return new dy(t);
    }), this.register(function(t) {
      return new uy(t);
    }), this.register(function(t) {
      return new ey(t);
    }), this.register(function(t) {
      return new gy(t);
    }), this.register(function(t) {
      return new by(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let a;
    if (this.resourcePath !== "")
      a = this.resourcePath;
    else if (this.path !== "") {
      const l = ti.extractUrlBase(e);
      a = ti.resolveURL(l, this.path);
    } else
      a = ti.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(l) {
      i ? i(l) : console.error(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }, c = new mn(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(l) {
      try {
        s.parse(l, a, function(h) {
          t(h), s.manager.itemEnd(e);
        }, o);
      } catch (h) {
        o(h);
      }
    }, n, o);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let s;
    const a = {}, o = {}, c = new TextDecoder();
    if (typeof e == "string")
      s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === zf) {
        try {
          a[Ye.KHR_BINARY_GLTF] = new _y(e);
        } catch (u) {
          i && i(u);
          return;
        }
        s = JSON.parse(a[Ye.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(c.decode(e));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new Iy(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](l);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[u.name] = u, a[u.name] = !0;
    }
    if (s.extensionsUsed)
      for (let h = 0; h < s.extensionsUsed.length; ++h) {
        const u = s.extensionsUsed[h], d = s.extensionsRequired || [];
        switch (u) {
          case Ye.KHR_MATERIALS_UNLIT:
            a[u] = new ty();
            break;
          case Ye.KHR_DRACO_MESH_COMPRESSION:
            a[u] = new xy(s, this.dracoLoader);
            break;
          case Ye.KHR_TEXTURE_TRANSFORM:
            a[u] = new vy();
            break;
          case Ye.KHR_MESH_QUANTIZATION:
            a[u] = new yy();
            break;
          default:
            d.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(a), l.setPlugins(o), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function $v() {
  let r = {};
  return {
    get: function(e) {
      return r[e];
    },
    add: function(e, t) {
      r[e] = t;
    },
    remove: function(e) {
      delete r[e];
    },
    removeAll: function() {
      r = {};
    }
  };
}
const Ye = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class ey {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const s = t.json, c = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let l;
    const h = new ue(16777215);
    c.color !== void 0 && h.setRGB(c.color[0], c.color[1], c.color[2], St);
    const u = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new _r(h), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new Pr(h), l.distance = u;
        break;
      case "spot":
        l = new ql(h), l.distance = u, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, Un(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], o = (s.extensions && s.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(c) {
      return n._getNodeRef(t.cache, o, c);
    });
  }
}
class ty {
  constructor() {
    this.name = Ye.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Ct;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new ue(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const a = s.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], St), e.opacity = a[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, xt));
    }
    return Promise.all(i);
  }
}
class ny {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class iy {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : an;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Z(o, o);
    }
    return Promise.all(s);
  }
}
class sy {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : an;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.dispersion = s.dispersion !== void 0 ? s.dispersion : 0, Promise.resolve();
  }
}
class ry {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : an;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class ay {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : an;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new ue(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], St);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, xt)), a.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(s);
  }
}
class oy {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : an;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(s);
  }
}
class cy {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : an;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new ue().setRGB(o[0], o[1], o[2], St), Promise.all(s);
  }
}
class ly {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : an;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class hy {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : an;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new ue().setRGB(o[0], o[1], o[2], St), a.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, xt)), Promise.all(s);
  }
}
class uy {
  constructor(e) {
    this.parser = e, this.name = Ye.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : an;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && s.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(s);
  }
}
class dy {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : an;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(s);
  }
}
class fy {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, a);
  }
}
class py {
  constructor(e) {
    this.parser = e, this.name = Ye.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const a = s.extensions[t], o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class my {
  constructor(e) {
    this.parser = e, this.name = Ye.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const a = s.extensions[t], o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class gy {
  constructor(e) {
    this.name = Ye.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(o) {
        const c = i.byteOffset || 0, l = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(o, c, l);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function(f) {
          return f.buffer;
        }) : a.ready.then(function() {
          const f = new ArrayBuffer(h * u);
          return a.decodeGltfBuffer(new Uint8Array(f), h, u, d, i.mode, i.filter), f;
        });
      });
    } else
      return null;
  }
}
class by {
  constructor(e) {
    this.name = Ye.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (l.mode !== nn.TRIANGLES && l.mode !== nn.TRIANGLE_STRIP && l.mode !== nn.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const a = n.extensions[this.name].attributes, o = [], c = {};
    for (const l in a)
      o.push(this.parser.getDependency("accessor", a[l]).then((h) => (c[l] = h, c[l])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((l) => {
      const h = l.pop(), u = h.isGroup ? h.children : [h], d = l[0].count, f = [];
      for (const g of u) {
        const b = new Ie(), m = new P(), p = new Nt(), x = new P(1, 1, 1), _ = new Ll(g.geometry, g.material, d);
        for (let v = 0; v < d; v++)
          c.TRANSLATION && m.fromBufferAttribute(c.TRANSLATION, v), c.ROTATION && p.fromBufferAttribute(c.ROTATION, v), c.SCALE && x.fromBufferAttribute(c.SCALE, v), _.setMatrixAt(v, b.compose(m, p, x));
        for (const v in c)
          if (v === "_COLOR_0") {
            const I = c[v];
            _.instanceColor = new ki(I.array, I.itemSize, I.normalized);
          } else v !== "TRANSLATION" && v !== "ROTATION" && v !== "SCALE" && g.geometry.setAttribute(v, c[v]);
        je.prototype.copy.call(_, g), this.parser.assignFinalMaterial(_), f.push(_);
      }
      return h.isGroup ? (h.clear(), h.add(...f), h) : f[0];
    }));
  }
}
const zf = "glTF", qs = 12, Bu = { JSON: 1313821514, BIN: 5130562 };
class _y {
  constructor(e) {
    this.name = Ye.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, qs), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== zf)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - qs, s = new DataView(e, qs);
    let a = 0;
    for (; a < i; ) {
      const o = s.getUint32(a, !0);
      a += 4;
      const c = s.getUint32(a, !0);
      if (a += 4, c === Bu.JSON) {
        const l = new Uint8Array(e, qs + a, o);
        this.content = n.decode(l);
      } else if (c === Bu.BIN) {
        const l = qs + a;
        this.body = e.slice(l, l + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class xy {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Ye.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, c = {}, l = {};
    for (const h in a) {
      const u = rl[h] || h.toLowerCase();
      o[u] = a[h];
    }
    for (const h in e.attributes) {
      const u = rl[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], f = vs[d.componentType];
        l[u] = f.name, c[u] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(h) {
      return new Promise(function(u, d) {
        i.decodeDracoFile(h, function(f) {
          for (const g in f.attributes) {
            const b = f.attributes[g], m = c[g];
            m !== void 0 && (b.normalized = m);
          }
          u(f);
        }, o, l, St, d);
      });
    });
  }
}
class vy {
  constructor() {
    this.name = Ye.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class yy {
  constructor() {
    this.name = Ye.KHR_MESH_QUANTIZATION;
  }
}
class Gf extends Ls {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let a = 0; a !== i; a++)
      t[a] = n[s + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = o * 2, l = o * 3, h = i - t, u = (n - t) / h, d = u * u, f = d * u, g = e * l, b = g - l, m = -2 * f + 3 * d, p = f - d, x = 1 - m, _ = p - d + u;
    for (let v = 0; v !== o; v++) {
      const I = a[b + v + o], T = a[b + v + c] * h, w = a[g + v + o], R = a[g + v] * h;
      s[v] = x * I + _ * T + m * w + p * R;
    }
    return s;
  }
}
const My = new Nt();
class Sy extends Gf {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return My.fromArray(s).normalize().toArray(s), s;
  }
}
const nn = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, vs = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, ku = {
  9728: yt,
  9729: lt,
  9984: go,
  9985: _s,
  9986: Ei,
  9987: sn
}, zu = {
  33071: Zt,
  33648: ys,
  10497: ii
}, Hc = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, rl = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, Qn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Ay = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: As,
  STEP: Ss
}, Vc = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function wy(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new ri({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: An
  })), r.DefaultMaterial;
}
function Si(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Un(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Ty(r, e, t) {
  let n = !1, i = !1, s = !1;
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (s = !0), n && i && s) break;
  }
  if (!n && !i && !s) return Promise.resolve(r);
  const a = [], o = [], c = [];
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (n) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : r.attributes.position;
      a.push(d);
    }
    if (i) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : r.attributes.normal;
      o.push(d);
    }
    if (s) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : r.attributes.color;
      c.push(d);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(c)
  ]).then(function(l) {
    const h = l[0], u = l[1], d = l[2];
    return n && (r.morphAttributes.position = h), i && (r.morphAttributes.normal = u), s && (r.morphAttributes.color = d), r.morphTargetsRelative = !0, r;
  });
}
function Ey(r, e) {
  if (r.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      r.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        r.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Ry(r) {
  let e;
  const t = r.extensions && r.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Wc(t.attributes) : e = r.indices + ":" + Wc(r.attributes) + ":" + r.mode, r.targets !== void 0)
    for (let n = 0, i = r.targets.length; n < i; n++)
      e += ":" + Wc(r.targets[n]);
  return e;
}
function Wc(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function al(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Cy(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Py = new Ie();
class Iy {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new $v(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = -1, s = !1, a = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const c = o.match(/Version\/(\d+)/);
      i = n && c ? parseInt(c[1], 10) : -1, s = o.indexOf("Firefox") > -1, a = s ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || s && a < 98 ? this.textureLoader = new Tf(this.options.manager) : this.textureLoader = new Uf(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new mn(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(a) {
      const o = {
        scene: a[0][i.scene || 0],
        scenes: a[0],
        animations: a[1],
        cameras: a[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      return Si(s, o, i), Un(o, i), Promise.all(n._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(o);
      })).then(function() {
        for (const c of o.scenes)
          c.updateMatrixWorld();
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i].joints;
      for (let o = 0, c = a.length; o < c; o++)
        e[a[o]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const a = e[i];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), s = (a, o) => {
      const c = this.associations.get(a);
      c != null && this.associations.set(o, c);
      for (const [l, h] of a.children.entries())
        s(h, o.children[l]);
    };
    return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, a) {
        return n.getDependency(e, a);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, a) {
      n.load(ti.resolveURL(t.uri, i.path), s, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = Hc[i.type], o = vs[i.componentType], c = i.normalized === !0, l = new o(i.count * a);
      return Promise.resolve(new nt(l, a, c));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(a) {
      const o = a[0], c = Hc[i.type], l = vs[i.componentType], h = l.BYTES_PER_ELEMENT, u = h * c, d = i.byteOffset || 0, f = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let b, m;
      if (f && f !== u) {
        const p = Math.floor(d / f), x = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
        let _ = t.cache.get(x);
        _ || (b = new l(o, p * f, i.count * f / h), _ = new wr(b, f / h), t.cache.add(x, _)), m = new si(_, c, d % f / h, g);
      } else
        o === null ? b = new l(i.count * c) : b = new l(o, d, i.count * c), m = new nt(b, c, g);
      if (i.sparse !== void 0) {
        const p = Hc.SCALAR, x = vs[i.sparse.indices.componentType], _ = i.sparse.indices.byteOffset || 0, v = i.sparse.values.byteOffset || 0, I = new x(a[1], _, i.sparse.count * p), T = new l(a[2], v, i.sparse.count * c);
        o !== null && (m = new nt(m.array.slice(), m.itemSize, m.normalized)), m.normalized = !1;
        for (let w = 0, R = I.length; w < R; w++) {
          const L = I[w];
          if (m.setX(L, T[w * c]), c >= 2 && m.setY(L, T[w * c + 1]), c >= 3 && m.setZ(L, T[w * c + 2]), c >= 4 && m.setW(L, T[w * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = g;
      }
      return m;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, a = t.images[s];
    let o = this.textureLoader;
    if (a.uri) {
      const c = n.manager.getHandler(a.uri);
      c !== null && (o = c);
    }
    return this.loadTextureImage(e, s, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, a = s.textures[e], o = s.images[t], c = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const l = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = a.name || o.name || "", h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (h.name = o.uri);
      const d = (s.samplers || {})[a.sampler] || {};
      return h.magFilter = ku[d.magFilter] || lt, h.minFilter = ku[d.minFilter] || sn, h.wrapS = zu[d.wrapS] || ii, h.wrapT = zu[d.wrapT] || ii, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let c = a.uri || "", l = !1;
    if (a.bufferView !== void 0)
      c = n.getDependency("bufferView", a.bufferView).then(function(u) {
        l = !0;
        const d = new Blob([u], { type: a.mimeType });
        return c = o.createObjectURL(d), c;
      });
    else if (a.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(c).then(function(u) {
      return new Promise(function(d, f) {
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(b) {
          const m = new ht(b);
          m.needsUpdate = !0, d(m);
        }), t.load(ti.resolveURL(u, s.path), g, void 0, f);
      });
    }).then(function(u) {
      return l === !0 && o.revokeObjectURL(c), Un(u, a), u.userData.mimeType = a.mimeType || Cy(a.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), u;
    });
    return this.sourceCache[e] = h, h;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(a) {
      if (!a) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), s.extensions[Ye.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[Ye.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const c = s.associations.get(a);
          a = s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), s.associations.set(a, c);
        }
      }
      return i !== void 0 && (a.colorSpace = i), e[t] = a, a;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new Do(), Mt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(o, c)), n = c;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new Ot(), Mt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(o, c)), n = c;
    }
    if (i || s || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let c = this.cache.get(o);
      c || (c = n.clone(), s && (c.vertexColors = !0), a && (c.flatShading = !0), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(o, c), this.associations.set(c, this.associations.get(n))), n = c;
    }
    e.material = n;
  }
  getMaterialType() {
    return ri;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let a;
    const o = {}, c = s.extensions || {}, l = [];
    if (c[Ye.KHR_MATERIALS_UNLIT]) {
      const u = i[Ye.KHR_MATERIALS_UNLIT];
      a = u.getMaterialType(), l.push(u.extendParams(o, s, t));
    } else {
      const u = s.pbrMetallicRoughness || {};
      if (o.color = new ue(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], St), o.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && l.push(t.assignTexture(o, "map", u.baseColorTexture, xt)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), a = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    s.doubleSided === !0 && (o.side = dn);
    const h = s.alphaMode || Vc.OPAQUE;
    if (h === Vc.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, h === Vc.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && a !== Ct && (l.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new Z(1, 1), s.normalTexture.scale !== void 0)) {
      const u = s.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (s.occlusionTexture !== void 0 && a !== Ct && (l.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && a !== Ct) {
      const u = s.emissiveFactor;
      o.emissive = new ue().setRGB(u[0], u[1], u[2], St);
    }
    return s.emissiveTexture !== void 0 && a !== Ct && l.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, xt)), Promise.all(l).then(function() {
      const u = new a(o);
      return s.name && (u.name = s.name), Un(u, s), t.associations.set(u, { materials: e }), s.extensions && Si(i, u, s), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = Ze.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(o) {
      return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(c) {
        return Gu(c, o, t);
      });
    }
    const a = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o], h = Ry(l), u = i[h];
      if (u)
        a.push(u.promise);
      else {
        let d;
        l.extensions && l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION] ? d = s(l) : d = Gu(new Xe(), l, t), i[h] = { primitive: l, promise: d }, a.push(d);
      }
    }
    return Promise.all(a);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], a = s.primitives, o = [];
    for (let c = 0, l = a.length; c < l; c++) {
      const h = a[c].material === void 0 ? wy(this.cache) : this.getDependency("material", a[c].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(c) {
      const l = c.slice(0, c.length - 1), h = c[c.length - 1], u = [];
      for (let f = 0, g = h.length; f < g; f++) {
        const b = h[f], m = a[f];
        let p;
        const x = l[f];
        if (m.mode === nn.TRIANGLES || m.mode === nn.TRIANGLE_STRIP || m.mode === nn.TRIANGLE_FAN || m.mode === void 0)
          p = s.isSkinnedMesh === !0 ? new Il(b, x) : new qe(b, x), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), m.mode === nn.TRIANGLE_STRIP ? p.geometry = Ou(p.geometry, vl) : m.mode === nn.TRIANGLE_FAN && (p.geometry = Ou(p.geometry, lo));
        else if (m.mode === nn.LINES)
          p = new gn(b, x);
        else if (m.mode === nn.LINE_STRIP)
          p = new Hn(b, x);
        else if (m.mode === nn.LINE_LOOP)
          p = new Dl(b, x);
        else if (m.mode === nn.POINTS)
          p = new Ul(b, x);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && Ey(p, s), p.name = t.createUniqueName(s.name || "mesh_" + e), Un(p, s), m.extensions && Si(i, p, m), t.assignFinalMaterial(p), u.push(p);
      }
      for (let f = 0, g = u.length; f < g; f++)
        t.associations.set(u[f], {
          meshes: e,
          primitives: f
        });
      if (u.length === 1)
        return s.extensions && Si(i, u[0], s), u[0];
      const d = new rn();
      s.extensions && Si(i, d, s), t.associations.set(d, { meshes: e });
      for (let f = 0, g = u.length; f < g; f++)
        d.add(u[f]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new vt(ps.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Ar(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Un(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, s = t.joints.length; i < s; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const s = i.pop(), a = i, o = [], c = [];
      for (let l = 0, h = a.length; l < h; l++) {
        const u = a[l];
        if (u) {
          o.push(u);
          const d = new Ie();
          s !== null && d.fromArray(s.array, l * 16), c.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new Tr(o, c);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], s = i.name ? i.name : "animation_" + e, a = [], o = [], c = [], l = [], h = [];
    for (let u = 0, d = i.channels.length; u < d; u++) {
      const f = i.channels[u], g = i.samplers[f.sampler], b = f.target, m = b.node, p = i.parameters !== void 0 ? i.parameters[g.input] : g.input, x = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      b.node !== void 0 && (a.push(this.getDependency("node", m)), o.push(this.getDependency("accessor", p)), c.push(this.getDependency("accessor", x)), l.push(g), h.push(b));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(c),
      Promise.all(l),
      Promise.all(h)
    ]).then(function(u) {
      const d = u[0], f = u[1], g = u[2], b = u[3], m = u[4], p = [];
      for (let x = 0, _ = d.length; x < _; x++) {
        const v = d[x], I = f[x], T = g[x], w = b[x], R = m[x];
        if (v === void 0) continue;
        v.updateMatrix && v.updateMatrix();
        const L = n._createAnimationTracks(v, I, T, w, R);
        if (L)
          for (let y = 0; y < L.length; y++)
            p.push(L[y]);
      }
      return new Rs(s, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const a = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh)
          for (let c = 0, l = i.weights.length; c < l; c++)
            o.morphTargetInfluences[c] = i.weights[c];
      }), a;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], s = n._loadNodeShallow(e), a = [], o = i.children || [];
    for (let l = 0, h = o.length; l < h; l++)
      a.push(n.getDependency("node", o[l]));
    const c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      s,
      Promise.all(a),
      c
    ]).then(function(l) {
      const h = l[0], u = l[1], d = l[2];
      d !== null && h.traverse(function(f) {
        f.isSkinnedMesh && f.bind(d, Py);
      });
      for (let f = 0, g = u.length; f < g; f++)
        h.add(u[f]);
      return h;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const s = t.nodes[e], a = s.name ? i.createUniqueName(s.name) : "", o = [], c = i._invokeOne(function(l) {
      return l.createNodeMesh && l.createNodeMesh(e);
    });
    return c && o.push(c), s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function(l) {
      return i._getNodeRef(i.cameraCache, s.camera, l);
    })), i._invokeAll(function(l) {
      return l.createNodeAttachment && l.createNodeAttachment(e);
    }).forEach(function(l) {
      o.push(l);
    }), this.nodeCache[e] = Promise.all(o).then(function(l) {
      let h;
      if (s.isBone === !0 ? h = new Lo() : l.length > 1 ? h = new rn() : l.length === 1 ? h = l[0] : h = new je(), h !== l[0])
        for (let u = 0, d = l.length; u < d; u++)
          h.add(l[u]);
      if (s.name && (h.userData.name = s.name, h.name = a), Un(h, s), s.extensions && Si(n, h, s), s.matrix !== void 0) {
        const u = new Ie();
        u.fromArray(s.matrix), h.applyMatrix4(u);
      } else
        s.translation !== void 0 && h.position.fromArray(s.translation), s.rotation !== void 0 && h.quaternion.fromArray(s.rotation), s.scale !== void 0 && h.scale.fromArray(s.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new rn();
    n.name && (s.name = i.createUniqueName(n.name)), Un(s, n), n.extensions && Si(t, s, n);
    const a = n.nodes || [], o = [];
    for (let c = 0, l = a.length; c < l; c++)
      o.push(i.getDependency("node", a[c]));
    return Promise.all(o).then(function(c) {
      for (let h = 0, u = c.length; h < u; h++)
        s.add(c[h]);
      const l = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, f] of i.associations)
          (d instanceof Mt || d instanceof ht) && u.set(d, f);
        return h.traverse((d) => {
          const f = i.associations.get(d);
          f != null && u.set(d, f);
        }), u;
      };
      return i.associations = l(s), s;
    });
  }
  _createAnimationTracks(e, t, n, i, s) {
    const a = [], o = e.name ? e.name : e.uuid, c = [];
    Qn[s.path] === Qn.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && c.push(d.name ? d.name : d.uuid);
    }) : c.push(o);
    let l;
    switch (Qn[s.path]) {
      case Qn.weights:
        l = Gi;
        break;
      case Qn.rotation:
        l = Hi;
        break;
      case Qn.position:
      case Qn.scale:
        l = Vi;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = Gi;
            break;
          case 2:
          case 3:
          default:
            l = Vi;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? Ay[i.interpolation] : As, u = this._getArrayFromAccessor(n);
    for (let d = 0, f = c.length; d < f; d++) {
      const g = new l(
        c[d] + "." + Qn[s.path],
        t.array,
        u,
        h
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = al(t.constructor), i = new Float32Array(t.length);
      for (let s = 0, a = t.length; s < a; s++)
        i[s] = t[s] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof Hi ? Sy : Gf;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Ly(r, e, t) {
  const n = e.attributes, i = new Ft();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], c = o.min, l = o.max;
    if (c !== void 0 && l !== void 0) {
      if (i.set(
        new P(c[0], c[1], c[2]),
        new P(l[0], l[1], l[2])
      ), o.normalized) {
        const h = al(vs[o.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const o = new P(), c = new P();
    for (let l = 0, h = s.length; l < h; l++) {
      const u = s[l];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], f = d.min, g = d.max;
        if (f !== void 0 && g !== void 0) {
          if (c.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))), c.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))), c.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))), d.normalized) {
            const b = al(vs[d.componentType]);
            c.multiplyScalar(b);
          }
          o.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  r.boundingBox = i;
  const a = new Pt();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = a;
}
function Gu(r, e, t) {
  const n = e.attributes, i = [];
  function s(a, o) {
    return t.getDependency("accessor", a).then(function(c) {
      r.setAttribute(o, c);
    });
  }
  for (const a in n) {
    const o = rl[a] || a.toLowerCase();
    o in r.attributes || i.push(s(n[a], o));
  }
  if (e.indices !== void 0 && !r.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      r.setIndex(o);
    });
    i.push(a);
  }
  return Qe.workingColorSpace !== St && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`), Un(r, e), Ly(r, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? Ty(r, e.targets, t) : r;
  });
}
class Dy extends wf {
  constructor(e) {
    super(e), this.type = vn;
  }
  // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
  parse(e) {
    const a = function(R, L) {
      switch (R) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (L || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (L || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (L || ""));
        default:
        case 4:
          throw new Error("THREE.RGBELoader: Memory Error: " + (L || ""));
      }
    }, u = function(R, L, y) {
      L = L || 1024;
      let F = R.pos, O = -1, z = 0, V = "", k = String.fromCharCode.apply(null, new Uint16Array(R.subarray(F, F + 128)));
      for (; 0 > (O = k.indexOf(`
`)) && z < L && F < R.byteLength; )
        V += k, z += k.length, F += 128, k += String.fromCharCode.apply(null, new Uint16Array(R.subarray(F, F + 128)));
      return -1 < O ? (R.pos += z + O + 1, V + k.slice(0, O)) : !1;
    }, d = function(R) {
      const L = /^#\?(\S+)/, y = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, S = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, F = /^\s*FORMAT=(\S+)\s*$/, O = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, z = {
        valid: 0,
        /* indicate which fields are valid */
        string: "",
        /* the actual header string */
        comments: "",
        /* comments found in header */
        programtype: "RGBE",
        /* listed at beginning of file to identify it after "#?". defaults to "RGBE" */
        format: "",
        /* RGBE format, default 32-bit_rle_rgbe */
        gamma: 1,
        /* image has already been gamma corrected with given gamma. defaults to 1.0 (no correction) */
        exposure: 1,
        /* a value of 1.0 in an image corresponds to <exposure> watts/steradian/m^2. defaults to 1.0 */
        width: 0,
        height: 0
        /* image dimensions, width/height */
      };
      let V, k;
      for ((R.pos >= R.byteLength || !(V = u(R))) && a(1, "no header found"), (k = V.match(L)) || a(3, "bad initial token"), z.valid |= 1, z.programtype = k[1], z.string += V + `
`; V = u(R), V !== !1; ) {
        if (z.string += V + `
`, V.charAt(0) === "#") {
          z.comments += V + `
`;
          continue;
        }
        if ((k = V.match(y)) && (z.gamma = parseFloat(k[1])), (k = V.match(S)) && (z.exposure = parseFloat(k[1])), (k = V.match(F)) && (z.valid |= 2, z.format = k[1]), (k = V.match(O)) && (z.valid |= 4, z.height = parseInt(k[1], 10), z.width = parseInt(k[2], 10)), z.valid & 2 && z.valid & 4) break;
      }
      return z.valid & 2 || a(3, "missing format specifier"), z.valid & 4 || a(3, "missing image size specifier"), z;
    }, f = function(R, L, y) {
      const S = L;
      if (
        // run length encoding is not allowed so read flat
        S < 8 || S > 32767 || // this file is not run length encoded
        R[0] !== 2 || R[1] !== 2 || R[2] & 128
      )
        return new Uint8Array(R);
      S !== (R[2] << 8 | R[3]) && a(3, "wrong scanline width");
      const F = new Uint8Array(4 * L * y);
      F.length || a(4, "unable to allocate buffer space");
      let O = 0, z = 0;
      const V = 4 * S, k = new Uint8Array(4), Y = new Uint8Array(V);
      let W = y;
      for (; W > 0 && z < R.byteLength; ) {
        z + 4 > R.byteLength && a(1), k[0] = R[z++], k[1] = R[z++], k[2] = R[z++], k[3] = R[z++], (k[0] != 2 || k[1] != 2 || (k[2] << 8 | k[3]) != S) && a(3, "bad rgbe scanline format");
        let le = 0, oe;
        for (; le < V && z < R.byteLength; ) {
          oe = R[z++];
          const De = oe > 128;
          if (De && (oe -= 128), (oe === 0 || le + oe > V) && a(3, "bad scanline data"), De) {
            const Oe = R[z++];
            for (let j = 0; j < oe; j++)
              Y[le++] = Oe;
          } else
            Y.set(R.subarray(z, z + oe), le), le += oe, z += oe;
        }
        const pe = S;
        for (let De = 0; De < pe; De++) {
          let Oe = 0;
          F[O] = Y[De + Oe], Oe += S, F[O + 1] = Y[De + Oe], Oe += S, F[O + 2] = Y[De + Oe], Oe += S, F[O + 3] = Y[De + Oe], O += 4;
        }
        W--;
      }
      return F;
    }, g = function(R, L, y, S) {
      const F = R[L + 3], O = Math.pow(2, F - 128) / 255;
      y[S + 0] = R[L + 0] * O, y[S + 1] = R[L + 1] * O, y[S + 2] = R[L + 2] * O, y[S + 3] = 1;
    }, b = function(R, L, y, S) {
      const F = R[L + 3], O = Math.pow(2, F - 128) / 255;
      y[S + 0] = js.toHalfFloat(Math.min(R[L + 0] * O, 65504)), y[S + 1] = js.toHalfFloat(Math.min(R[L + 1] * O, 65504)), y[S + 2] = js.toHalfFloat(Math.min(R[L + 2] * O, 65504)), y[S + 3] = js.toHalfFloat(1);
    }, m = new Uint8Array(e);
    m.pos = 0;
    const p = d(m), x = p.width, _ = p.height, v = f(m.subarray(m.pos), x, _);
    let I, T, w;
    switch (this.type) {
      case Rt:
        w = v.length / 4;
        const R = new Float32Array(w * 4);
        for (let y = 0; y < w; y++)
          g(v, y * 4, R, y * 4);
        I = R, T = Rt;
        break;
      case vn:
        w = v.length / 4;
        const L = new Uint16Array(w * 4);
        for (let y = 0; y < w; y++)
          b(v, y * 4, L, y * 4);
        I = L, T = vn;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return {
      width: x,
      height: _,
      data: I,
      header: p.string,
      gamma: p.gamma,
      exposure: p.exposure,
      type: T
    };
  }
  setDataType(e) {
    return this.type = e, this;
  }
  load(e, t, n, i) {
    function s(a, o) {
      switch (a.type) {
        case Rt:
        case vn:
          a.colorSpace = St, a.minFilter = lt, a.magFilter = lt, a.generateMipmaps = !1, a.flipY = !0;
          break;
      }
      t && t(a, o);
    }
    return super.load(e, s, n, i);
  }
}
var Uy = (function() {
  var r = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb", e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb", t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]), n = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  var i = WebAssembly.validate(t) ? e : r, s, a = WebAssembly.instantiate(o(i), {}).then(function(p) {
    s = p.instance, s.exports.__wasm_call_ctors();
  });
  function o(p) {
    for (var x = new Uint8Array(p.length), _ = 0; _ < p.length; ++_) {
      var v = p.charCodeAt(_);
      x[_] = v > 96 ? v - 97 : v > 64 ? v - 39 : v + 4;
    }
    for (var I = 0, _ = 0; _ < p.length; ++_)
      x[I++] = x[_] < 60 ? n[x[_]] : (x[_] - 60) * 64 + x[++_];
    return x.buffer.slice(0, I);
  }
  function c(p, x, _, v, I, T) {
    var w = s.exports.sbrk, R = _ + 3 & -4, L = w(R * v), y = w(I.length), S = new Uint8Array(s.exports.memory.buffer);
    S.set(I, y);
    var F = p(L, _, v, y, I.length);
    if (F == 0 && T && T(L, R, v), x.set(S.subarray(L, L + _ * v)), w(L - w(0)), F != 0)
      throw new Error("Malformed buffer data: " + F);
  }
  var l = {
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  }, h = {
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  }, u = [], d = 0;
  function f(p) {
    var x = {
      object: new Worker(p),
      pending: 0,
      requests: {}
    };
    return x.object.onmessage = function(_) {
      var v = _.data;
      x.pending -= v.count, x.requests[v.id][v.action](v.value), delete x.requests[v.id];
    }, x;
  }
  function g(p) {
    for (var x = "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(o(i)) + "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" + c.toString() + m.toString(), _ = new Blob([x], { type: "text/javascript" }), v = URL.createObjectURL(_), I = 0; I < p; ++I)
      u[I] = f(v);
    URL.revokeObjectURL(v);
  }
  function b(p, x, _, v, I) {
    for (var T = u[0], w = 1; w < u.length; ++w)
      u[w].pending < T.pending && (T = u[w]);
    return new Promise(function(R, L) {
      var y = new Uint8Array(_), S = d++;
      T.pending += p, T.requests[S] = { resolve: R, reject: L }, T.object.postMessage({ id: S, count: p, size: x, source: y, mode: v, filter: I }, [y.buffer]);
    });
  }
  function m(p) {
    a.then(function() {
      var x = p.data;
      try {
        var _ = new Uint8Array(x.count * x.size);
        c(s.exports[x.mode], _, x.count, x.size, x.source, s.exports[x.filter]), self.postMessage({ id: x.id, count: x.count, action: "resolve", value: _ }, [_.buffer]);
      } catch (v) {
        self.postMessage({ id: x.id, count: x.count, action: "reject", value: v });
      }
    });
  }
  return {
    ready: a,
    supported: !0,
    useWorkers: function(p) {
      g(p);
    },
    decodeVertexBuffer: function(p, x, _, v, I) {
      c(s.exports.meshopt_decodeVertexBuffer, p, x, _, v, s.exports[l[I]]);
    },
    decodeIndexBuffer: function(p, x, _, v) {
      c(s.exports.meshopt_decodeIndexBuffer, p, x, _, v);
    },
    decodeIndexSequence: function(p, x, _, v) {
      c(s.exports.meshopt_decodeIndexSequence, p, x, _, v);
    },
    decodeGltfBuffer: function(p, x, _, v, I, T) {
      c(s.exports[h[I]], p, x, _, v, s.exports[l[T]]);
    },
    decodeGltfBufferAsync: function(p, x, _, v, I) {
      return u.length > 0 ? b(p, x, _, h[v], l[I]) : a.then(function() {
        var T = new Uint8Array(p * x);
        return c(s.exports[h[v]], T, p, x, _, s.exports[l[I]]), T;
      });
    }
  };
})();
const ol = { base: "/" }, Xc = 16738816, Ny = `
  float h31(vec3 p){ p = fract(p*0.3183099 + 0.1); p *= 17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
  float ruido(vec3 x){ vec3 i=floor(x), f=fract(x); f=f*f*(3.0-2.0*f);
    return mix(mix(mix(h31(i),h31(i+vec3(1,0,0)),f.x),mix(h31(i+vec3(0,1,0)),h31(i+vec3(1,1,0)),f.x),f.y),
               mix(mix(h31(i+vec3(0,0,1)),h31(i+vec3(1,0,1)),f.x),mix(h31(i+vec3(0,1,1)),h31(i+vec3(1,1,1)),f.x),f.y),f.z); }
`;
function Fy(r) {
  const e = r.material, t = r.name, n = t.includes("borracha"), i = t.includes("ferro_fundido") || t.includes("ferro_escuro");
  !n && !i || (e.onBeforeCompile = (s) => {
    s.vertexShader = s.vertexShader.replace("#include <common>", `#include <common>
varying vec3 vPeca;`).replace("#include <begin_vertex>", `#include <begin_vertex>
vPeca = position;`);
    const a = n ? `float r = length(vPeca.xy);
         float g = ruido(vPeca*70.0)*0.6 + ruido(vPeca*190.0)*0.4;
         roughnessFactor = clamp(roughnessFactor + (g-0.5)*0.35 + smoothstep(0.55,1.0,r)*0.08, 0.35, 1.0);
         diffuseColor.rgb *= 0.82 + g*0.36;` : `float r = length(vPeca.xy);
         float an = 0.5 + 0.5*sin(r*260.0 + ruido(vec3(r*30.0))*3.0);
         float g = ruido(vPeca*120.0);
         roughnessFactor = clamp(roughnessFactor + (an-0.5)*0.22 + (g-0.5)*0.18, 0.2, 1.0);
         diffuseColor.rgb *= 0.88 + an*0.12 + g*0.1;`;
    s.fragmentShader = s.fragmentShader.replace("#include <common>", `#include <common>
varying vec3 vPeca;
${Ny}`).replace("#include <roughnessmap_fragment>", `#include <roughnessmap_fragment>
${a}`);
  }, e.customProgramCacheKey = () => n ? "mp-pneu" : "mp-disco", e.needsUpdate = !0);
}
function Oy(r, e) {
  const t = new jd({ canvas: r, antialias: !0, alpha: !0, powerPreference: "high-performance" });
  t.setPixelRatio(Math.min(window.devicePixelRatio, e ? 1.5 : 1.75)), t.toneMapping = ll, t.toneMappingExposure = 1.05, t.outputColorSpace = xt;
  const n = new Io(), i = new ho(t), s = i.fromScene(new Zv(), 0.04);
  n.environment = s.texture, n.environmentIntensity = 0.55;
  let a = null, o = !0, c = !1;
  const l = new Promise((se) => {
    new Dy().load(`${ol.base}3d/estudio-1k.hdr`, (X) => {
      if (!o) {
        X.dispose(), se();
        return;
      }
      a = i.fromEquirectangular(X), X.dispose(), n.environment = a.texture, n.environmentIntensity = c ? 2.2 : 0.62, s.dispose(), i.dispose(), se();
    }, void 0, () => se());
  }), h = new _r(16777215, 2.2);
  h.position.set(-6, 9, 10);
  const u = new _r(16777215, 2.6);
  u.position.set(8, 3, -8);
  const d = new Pr(Xc, 18, 18);
  d.position.set(0, -4.2, 3), n.add(h, u, d);
  const f = new rn();
  n.add(f);
  const g = [], b = (se, X, E, ne = 0) => {
    const te = new rn();
    return f.add(te), g.push({ id: se, grupo: te, dz: X, dy: ne, ancora: new P(...E) }), te;
  };
  b("calota", 4.6, [0, 0.95, 0.8]), b("capas", 3.7, [0, -1.05, 0.8]), b("porcas", 2.9, [0, -1.75, 0.75]), b("roda", 0.9, [-2.6, 2.6, 0.9]), b("anel", -2.7, [0, 0.6, 0.1]), b("espacador", -3.9, [0, 1, -0.22]), b("disco", -5.1, [0, 2.2, -0.62], 0), b("cubo", -6.5, [0, 1, -1.1]);
  const m = new Promise((se, X) => {
    new Qv().setMeshoptDecoder(Uy).load(
      `${ol.base}3d/roda.glb`,
      (E) => {
        for (const ne of g) {
          const te = E.scene.getObjectByName(ne.id);
          if (!te) {
            X(new Error(`peça ausente no GLB: ${ne.id}`));
            return;
          }
          ne.grupo.add(te);
        }
        E.scene.traverse((ne) => {
          const te = ne;
          if (!te.isMesh) return;
          te.material = te.material.clone();
          const ee = te.material;
          ee.emissive && ee.emissive.getHex() === 0 && (ee.emissive.set(Xc), ee.emissiveIntensity = 0, ee.userData.destacavel = !0), Fy(te);
        }), se();
      },
      void 0,
      X
    );
  }), p = new rn(), x = new ri({ color: 789516, metalness: 0.4, roughness: 0.35, transparent: !0 }), _ = new qe(new Xi(3.3, 3.3, 3, 96), x);
  _.position.y = -3.71 - 1.5;
  const v = new Ct({ color: 16777215, transparent: !0 }), I = new qe(new Es(2.95, 0.035, 12, 128), v);
  I.rotation.x = Math.PI / 2, I.position.y = -3.7;
  const T = [0.14, 0.05].map((se) => new Ct({
    color: 16777215,
    transparent: !0,
    blending: Ea,
    depthWrite: !1,
    opacity: se
  })), w = [0.1, 0.24].map((se, X) => {
    const E = new qe(new Es(2.95, se, 12, 128), T[X]);
    return E.rotation.x = Math.PI / 2, E.position.y = -3.7, E;
  }), R = document.createElement("canvas");
  R.width = R.height = 128;
  const L = R.getContext("2d"), y = L.createRadialGradient(64, 64, 0, 64, 64, 64);
  y.addColorStop(0, "rgba(0,0,0,0.85)"), y.addColorStop(0.35, "rgba(0,0,0,0.5)"), y.addColorStop(1, "rgba(0,0,0,0)"), L.fillStyle = y, L.fillRect(0, 0, 128, 128);
  const S = new $d(R);
  S.colorSpace = xt;
  const F = new Ct({ map: S, transparent: !0, depthWrite: !1 }), O = new qe(new Wi(4.6, 2.2), F);
  O.rotation.x = -Math.PI / 2, O.position.set(0, -3.69, 0), p.add(_, O, I, ...w);
  let z = 1, V = 1;
  const k = (se) => {
    c = se, x.color.set(se ? 14277078 : 789516), x.metalness = se ? 0.1 : 0.4, x.roughness = se ? 0.55 : 0.35, v.color.set(se ? Xc : 16777215), z = 1, O.scale.set(se ? 1.35 : 1, se ? 1.5 : 1, 1), V = se ? 0 : 1, t.toneMappingExposure = se ? 1.1 : 1.05, n.environmentIntensity = se ? a ? 2.2 : 1.6 : a ? 0.62 : 0.55, h.intensity = se ? 1.6 : 2.2, u.intensity = se ? 1.2 : 2.6, d.intensity = se ? 0 : 18;
  };
  n.add(p);
  const Y = new vt(30, 1, 0.1, 200), W = new P(), le = Math.tan(ps.degToRad(15));
  let oe = 1, pe = 1;
  const De = (se, X) => {
    oe = se, pe = X, t.setSize(se, X, !1), Y.aspect = se / X, Y.updateProjectionMatrix();
  }, Oe = (se) => se <= 0 ? 0 : se >= 1 ? 1 : se * se * (3 - 2 * se), j = (se, X, E) => se + (X - se) * E, ie = (se, X, E, ne = 0.9, te = 1) => {
    const ee = Y.aspect < 1.25, re = (B) => B / (2 * le), Re = Math.max(re(7.4 / 0.79), re(7.4 / 0.978 / Y.aspect)), me = ee ? Math.max(re(21), re(11.5 / Y.aspect)) : Math.max(re(10.5), re(23 / Y.aspect)), C = Oe(se), M = j(Re, me * te, C);
    if (ee) {
      const B = j(0, ps.degToRad(-68), C), K = j(0, ps.degToRad(-14), C);
      Y.position.set(Math.sin(K) * M, Math.sin(B) * M * -1, Math.cos(B) * Math.cos(K) * M);
    } else {
      const B = j(0, ps.degToRad(-72), C);
      Y.position.set(Math.sin(B) * M, j(0, 3.2, C), Math.cos(B) * M);
    }
    W.set(0, 0, ne * C), Y.position.z += ne * C, Y.lookAt(W), !ee && oe > 1080 ? Y.setViewOffset(oe, pe, -oe * 0.13, 0, oe, pe) : Y.clearViewOffset(), Y.updateMatrixWorld(), g.forEach((B, K) => {
      const Q = Oe(X[K] ?? 0);
      B.grupo.position.z = B.dz * Q, B.grupo.position.y = B.dy * Q;
    }), f.rotation.z = j(0, -0.35, C), x.opacity = 1 - E, v.opacity = 1 - E, F.opacity = (1 - E) * z, T[0].opacity = 0.14 * (1 - E) * V, T[1].opacity = 0.05 * (1 - E) * V, p.visible = E < 0.99, p.position.y = -E * 1.5;
  }, Me = ["calota", "capas", "anel", "espacador"];
  return { pecas: g, pronto: m, envPronto: l, tema: k, destaca: (se, X) => {
    g.forEach((E, ne) => {
      const te = X ? (Me.includes(E.id) ? 0.1 : 0) + (ne === se ? 0.32 : 0) : 0;
      E.grupo.traverse((ee) => {
        const re = ee.material;
        re && re.userData && re.userData.destacavel && (re.emissiveIntensity = te);
      });
    });
  }, ajusta: De, pose: ie, projeta: (se, X, E, ne) => (se.copy(X.ancora).applyMatrix4(X.grupo.matrixWorld), se.project(Y), { x: (se.x * 0.5 + 0.5) * E, y: (-se.y * 0.5 + 0.5) * ne, frente: se.z < 1 }), desenha: () => t.render(n, Y), descarta: () => {
    n.traverse((se) => {
      const X = se;
      X.geometry && X.geometry.dispose();
      const E = X.material;
      Array.isArray(E) ? E.forEach((ne) => ne.dispose()) : E && E.dispose();
    }), o = !1, S.dispose(), a == null || a.dispose(), t.dispose();
  } };
}
window.MPRoda = { montaCena: Oy, THREE: Jv, cfg: ol };
