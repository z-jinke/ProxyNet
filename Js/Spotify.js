// ------------------
// 【辅助函数和protobuf处理函数】
// 你给的所有函数都写在这里，改写部分参数用Uint8Array作为body数据承载

// 复用你给的所有函数，做必要的参数格式调整

// 核心思路：传入对象 e = { bytes: Uint8Array, offset:0, limit:length }
// 解析、修改、编码都基于这个对象结构进行

// 以下是代码整理，注意要完整，否则不能运行

// ========================================

// 下面是你提供代码里的所有函数，调整了接收参数格式（用e.bytes等）：

function e(e, t) {
  let i = e.success;
  if (void 0 !== i) {
    y(t, 10);
    let e = r();
    (function (e, t) {
      let i = e.resolveSuccess;
      if (void 0 !== i) {
        y(t, 10);
        let e = r();
        (function (e, t) {
          let i = e.configuration;
          if (void 0 !== i) {
            y(t, 10);
            let e = r();
            (function (e, t) {
              let i = e.configurationAssignmentId;
              void 0 !== i && (y(t, 10), h(t, i));
              let l = e.fetchTimeMillis;
              void 0 !== l && (y(t, 16), V(t, l));
              let a = e.assignedValues;
              if (void 0 !== a)
                for (let e of a) {
                  y(t, 26);
                  let i = r();
                  (function (e, t) {
                    let i = e.boolValue;
                    if (void 0 !== i) {
                      y(t, 26);
                      let e = r();
                      (function (e, t) {
                        let i = e.value;
                        void 0 !== i && (y(t, 8), v(t, +!!i));
                      })(i, e),
                        y(t, e.limit),
                        k(t, e),
                        o(e);
                    }
                    let l = e.intValue;
                    if (void 0 !== l) {
                      y(t, 34);
                      let e = r();
                      (function (e, t) {
                        var i;
                        let l = e.value;
                        void 0 !== l &&
                          (y(t, 8),
                          V(t, {
                            low: (i = 0 | l),
                            high: i >> 31,
                            unsigned: i >= 0,
                          }));
                      })(l, e),
                        y(t, e.limit),
                        k(t, e),
                        o(e);
                    }
                    let a = e.enumValue;
                    if (void 0 !== a) {
                      y(t, 42);
                      let e = r();
                      (function (e, t) {
                        let i = e.value;
                        void 0 !== i && (y(t, 10), h(t, i));
                      })(a, e),
                        y(t, e.limit),
                        k(t, e),
                        o(e);
                    }
                    let s = e.propertyId;
                    if (void 0 !== s) {
                      y(t, 10);
                      let e = r();
                      (function (e, t) {
                        let i = e.scope;
                        void 0 !== i && (y(t, 10), h(t, i));
                        let l = e.name;
                        void 0 !== l && (y(t, 18), h(t, l));
                      })(s, e),
                        y(t, e.limit),
                        k(t, e),
                        o(e);
                    }
                  })(e, i),
                    y(t, i.limit),
                    k(t, i),
                    o(i);
                }
            })(i, e),
              y(t, e.limit),
              k(t, e),
              o(e);
          }
        })(i, e),
          y(t, e.limit),
          k(t, e),
          o(e);
      }
      let l = e.accountAttributesSuccess;
      if (void 0 !== l) {
        y(t, 26);
        let e = r();
        (function (e, t) {
          let i = e.accountAttributes;
          if (void 0 !== i)
            for (let e in i) {
              let l = r(),
                a = i[e];
              y(l, 10), h(l, e), y(l, 18);
              let s = r();
              (function (e, t) {
                let i = e.boolValue;
                void 0 !== i && (y(t, 16), v(t, +!!i));
                let l = e.longValue;
                void 0 !== l && (y(t, 24), V(t, l));
                let a = e.stringValue;
                void 0 !== a && (y(t, 34), h(t, a));
              })(a, s),
                y(l, s.limit),
                k(l, s),
                o(s),
                y(t, 10),
                y(t, l.offset),
                k(t, l),
                o(l);
            }
        })(l, e),
          y(t, e.limit),
          k(t, e),
          o(e);
      }
      let a = e.fetchTimeMillis;
      void 0 !== a && (y(t, 40), V(t, a));
    })(i, e),
      y(t, e.limit),
      k(t, e),
      o(e);
  }
}

function t(e) {
  let t = {};
  e: for (; !f(e); ) {
    let a = p(e);
    switch (a >>> 3) {
      case 0:
        break e;
      case 1: {
        let a = i(e);
        (t.success = (function (e) {
          let t = {};
          e: for (; !f(e); ) {
            let a = p(e);
            switch (a >>> 3) {
              case 0:
                break e;
              case 1: {
                let a = i(e);
                (t.resolveSuccess = (function (e) {
                  let t = {};
                  e: for (; !f(e); ) {
                    let a = p(e);
                    switch (a >>> 3) {
                      case 0:
                        break e;
                      case 1: {
                        let a = i(e);
                        (t.configuration = (function (e) {
                          let t = {};
                          e: for (; !f(e); ) {
                            let a = p(e);
                            switch (a >>> 3) {
                              case 0:
                                break e;
                              case 1:
                                t.configurationAssignmentId = m(e, p(e));
                                break;
                              case 2:
                                t.fetchTimeMillis = w(e, !1);
                                break;
                              case 3: {
                                let a = i(e);
                                (
                                  t.assignedValues ||
                                  (t.assignedValues = [])
                                ).push(
                                  (function (e) {
                                    let t = {};
                                    e: for (; !f(e); ) {
                                      let a = p(e);
                                      switch (a >>> 3) {
                                        case 0:
                                          break e;
                                        case 3: {
                                          let a = i(e);
                                          (t.boolValue = (function (e) {
                                            let t = {};
                                            e: for (; !f(e); ) {
                                              let i = p(e);
                                              switch (i >>> 3) {
                                                case 0:
                                                  break e;
                                                case 1:
                                                  t.value = !!g(e);
                                                  break;
                                                default:
                                                  l(e, 7 & i);
                                              }
                                            }
                                            return t;
                                          })(e)),
                                            (e.limit = a);
                                          break;
                                        }
                                        case 4: {
                                          let a = i(e);
                                          (t.intValue = (function (e) {
                                            let t = {};
                                            e: for (; !f(e); ) {
                                              let i = p(e);
                                              switch (i >>> 3) {
                                                case 0:
                                                  break e;
                                                case 1:
                                                  t.value = p(e);
                                                  break;
                                                default:
                                                  l(e, 7 & i);
                                              }
                                            }
                                            return t;
                                          })(e)),
                                            (e.limit = a);
                                          break;
                                        }
                                        case 5: {
                                          let a = i(e);
                                          (t.enumValue = (function (e) {
                                            let t = {};
                                            e: for (; !f(e); ) {
                                              let i = p(e);
                                              switch (i >>> 3) {
                                                case 0:
                                                  break e;
                                                case 1:
                                                  t.value = m(e, p(e));
                                                  break;
                                                default:
                                                  l(e, 7 & i);
                                              }
                                            }
                                            return t;
                                          })(e)),
                                            (e.limit = a);
                                          break;
                                        }
                                        case 1: {
                                          let a = i(e);
                                          (t.propertyId = (function (e) {
                                            let t = {};
                                            e: for (; !f(e); ) {
                                              let i = p(e);
                                              switch (i >>> 3) {
                                                case 0:
                                                  break e;
                                                case 1:
                                                  t.scope = m(e, p(e));
                                                  break;
                                                case 2:
                                                  t.name = m(e, p(e));
                                                  break;
                                                default:
                                                  l(e, 7 & i);
                                              }
                                            }
                                            return t;
                                          })(e)),
                                            (e.limit = a);
                                          break;
                                        }
                                        default:
                                          l(e, 7 & a);
                                      }
                                    }
                                    return t;
                                  })(e),
                                ),
                                  (e.limit = a);
                                break;
                              }
                              default:
                                l(e, 7 & a);
                            }
                          }
                          return t;
                        })(e)),
                          (e.limit = a);
                      }
                      default:
                        l(e, 7 & a);
                    }
                  }
                  return t;
                })(e)),
                  (e.limit = a);
                break;
              }
              case 3: {
                let a = i(e);
                (t.accountAttributesSuccess = (function (e) {
                  let t = {};
                  e: for (; !f(e); ) {
                    let a = p(e);
                    switch (a >>> 3) {
                      case 0:
                        break e;
                      case 1: {
                        let a,
                          s,
                          r =
                            t.accountAttributes ||
                            (t.accountAttributes = {}),
                          o = i(e);
                        t: for (; !f(e); ) {
                          let t = p(e);
                          switch (t >>> 3) {
                            case 0:
                              break t;
                            case 1:
                              a = m(e, p(e));
                              break;
                            case 2: {
                              let t = i(e);
                              (s = (function (e) {
                                let t = {};
                                e: for (; !f(e); ) {
                                  let i = p(e);
                                  switch (i >>> 3) {
                                    case 0:
                                      break e;
                                    case 2:
                                      t.boolValue = !!g(e);
                                      break;
                                    case 3:
                                      t.longValue = w(e, !1);
                                      break;
                                    case 4:
                                      t.stringValue = m(e, p(e));
                                      break;
                                    default:
                                      l(e, 7 & i);
                                  }
                                }
                                return t;
                              })(e)),
                                (e.limit = t);
                              break;
                            }
                            default:
                              l(e, 7 & t);
                          }
                        }
                        if (void 0 === a || void 0 === s)
                          throw Error(
                            "Invalid data for map: accountAttributes",
                          );
                        (r[a] = s), (e.limit = o);
                        break;
                      }
                      default:
                        l(e, 7 & a);
                    }
                  }
                  return t;
                })(e)),
                  (e.limit = a);
                break;
              }
              case 5:
                t.fetchTimeMillis = w(e, !1);
                break;
              default:
                l(e, 7 & a);
            }
          }
          return t;
        })(e)),
          (e.limit = a);
        break;
      }
      default:
        l(e, 7 & a);
    }
  }
  return t;
}

function i(e) {
  let t = p(e),
    i = e.limit;
  return (e.limit = e.offset + t), i;
}

function l(e, t) {
  switch (t) {
    case 0:
      for (; 128 & g(e); );
      break;
    case 2:
      u(e, p(e));
      break;
    case 5:
      u(e, 4);
      break;
    case 1:
      u(e, 8);
      break;
    default:
      throw Error("Unimplemented type: " + t);
  }
}

let a = new Float64Array(1),
  s = [];

function r() {
  let e = s.pop();
  return e ? ((e.offset = e.limit = 0), e) : { bytes: new Uint8Array(64), offset: 0, limit: 0 };
}

function o(e) {
  s.push(e);
}

function n(e) {
  return { bytes: e, offset: 0, limit: e.length };
}

function c(e) {
  let t = e.bytes,
    i = e.limit;
  return t.length === i ? t : t.subarray(0, i);
}

function u(e, t) {
  if (e.offset + t > e.limit) throw Error("Skip past limit");
  e.offset += t;
}

function f(e) {
  return e.offset >= e.limit;
}

function b(e, t) {
  let i = e.bytes,
    l = e.offset,
    a = e.limit,
    s = l + t;
  if (s > i.length) {
    let t = new Uint8Array(2 * s);
    t.set(i), (e.bytes = t);
  }
  return (e.offset = s), s > a && (e.limit = s), l;
}

function d(e, t) {
  let i = e.offset;
  if (i + t > e.limit) throw Error("Read past limit");
  return (e.offset += t), i;
}

function m(e, t) {
  let i = d(e, t),
    l = String.fromCharCode,
    a = e.bytes,
    s = "";
  for (let e = 0; e < t; e++) {
    let r = a[e + i],
      o,
      n,
      c,
      u;
    (128 & r) == 0
      ? (s += l(r))
      : (224 & r) == 192
      ? e + 1 >= t ||
        (192 & (o = a[e + i + 1])) != 128 ||
        (u = ((31 & r) << 6) | (63 & o)) < 128
        ? (s += "�")
        : ((s += l(u)), e++)
      : (240 & r) == 224
      ? e + 2 >= t ||
        (((o = a[e + i + 1]) | ((n = a[e + i + 2]) << 8)) & 49344) != 32896 ||
        (u = ((15 & r) << 12) | ((63 & o) << 6) | (63 & n)) < 2048 ||
        (u >= 55296 && u <= 57343)
        ? (s += "�")
        : ((s += l(u)), (e += 2))
      : (248 & r) == 240
      ? e + 3 >= t
        ? (s += "�")
        : ((o = a[e + i + 1]),
          ((o |
            ((n = a[e + i + 2]) << 8) |
            ((c = a[e + i + 3]) << 16)) &
            0xc0c0c0) !=
            8421504 ||
          (u =
            ((7 & r) << 18) |
            ((63 & o) << 12) |
            ((63 & n) << 6) |
            (63 & c)) < 65536 ||
          u > 1114111
            ? (s += "�")
            : ((u -= 65536),
              (s += l((u >> 10) + 55296, (1023 & u) + 56320)),
              (e += 3)))
      : (s += "�");
  }
  return s;
}

function h(e, t) {
  let i = t.length,
    l = 0;
  for (let e = 0; e < i; e++) {
    let a = t.charCodeAt(e);
    a >= 55296 &&
      a <= 56319 &&
      e + 1 < i &&
      (a = (a << 10) + t.charCodeAt(++e) - 0x35fdc00),
      (l += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4);
  }
  y(e, l);
  let a = b(e, l),
    s = e.bytes;
  for (let e = 0; e < i; e++) {
    let l = t.charCodeAt(e);
    l >= 55296 &&
      l <= 56319 &&
      e + 1 < i &&
      (l = (l << 10) + t.charCodeAt(++e) - 0x35fdc00),
      l < 128
        ? (s[a++] = l)
        : (l < 2048
            ? (s[a++] = ((l >> 6) & 31) | 192)
            : (l < 65536
                ? (s[a++] = ((l >> 12) & 15) | 224)
                : ((s[a++] = ((l >> 18) & 7) | 240),
                  (s[a++] = ((l >> 12) & 63) | 128)),
              (s[a++] = ((l >> 6) & 63) | 128)),
          (s[a++] = (63 & l) | 128));
  }
}

function k(e, t) {
  let i = b(e, t.limit),
    l = e.bytes,
    a = t.bytes;
  for (let e = 0, s = t.limit; e < s; e++) l[e + i] = a[e];
}

function g(e) {
  return e.bytes[d(e, 1)];
}

function v(e, t) {
  let i = b(e, 1);
  e.bytes[i] = t;
}

function p(e) {
  let t,
    i = 0,
    l = 0;
  do (t = g(e)), i < 32 && (l |= (127 & t) << i), (i += 7);
  while (128 & t);
  return l;
}

function y(e, t) {
  for (t >>>= 0; t >= 128; ) v(e, (127 & t) | 128), (t >>>= 7);
  v(e, t);
}

function w(e, t) {
  let i,
    l = 0,
    a = 0,
    s = 0;
  return (
    (l = 127 & (i = g(e))),
    128 & i &&
      ((l |= (127 & (i = g(e))) << 7),
      128 & i &&
        ((l |= (127 & (i = g(e))) << 14),
        128 & i &&
          ((l |= (127 & (i = g(e))) << 21),
          128 & i &&
            ((a = 127 & (i = g(e))),
            128 & i &&
              ((a |= (127 & (i = g(e))) << 7),
              128 & i &&
                ((a |= (127 & (i = g(e))) << 14),
                128 & i &&
                  ((a |= (127 & (i = g(e))) << 21),
                  128 & i &&
                    ((s = 127 & (i = g(e))),
                    128 & i && (s |= (127 & (i = g(e))) << 7)))))))))),
    { low: l | (a << 28), high: (a >>> 4) | (s << 24), unsigned: t }
  );
}

function V(e, t) {
  let i = t.low >>> 0,
    l = ((t.low >>> 28) | (t.high << 4)) >>> 0,
    a = t.high >>> 24,
    s =
      0 === a
        ? 0 === l
          ? i < 16384
            ? i < 128
              ? 1
              : 2
            : i < 2097152
              ? 3
              : 4
          : l < 16384
            ? l < 128
              ? 5
              : 6
            : l < 2097152
              ? 7
              : 8
        : a < 128
          ? 9
          : 10,
    r = b(e, s),
    o = e.bytes;
  switch (s) {
    case 10:
      o[r + 9] = (a >>> 7) & 1;
    case 9:
      o[r + 8] = 9 !== s ? 128 | a : 127 & a;
    case 8:
      o[r + 7] = 8 !== s ? (l >>> 21) | 128 : (l >>> 21) & 127;
    case 7:
      o[r + 6] = 7 !== s ? (l >>> 14) | 128 : (l >>> 14) & 127;
    case 6:
      o[r + 5] = 6 !== s ? (l >>> 7) | 128 : (l >>> 7) & 127;
    case 5:
      o[r + 4] = 5 !== s ? 128 | l : 127 & l;
    case 4:
      o[r + 3] = 4 !== s ? (i >>> 21) | 128 : (i >>> 21) & 127;
    case 3:
      o[r + 2] = 3 !== s ? (i >>> 14) | 128 : (i >>> 14) & 127;
    case 2:
      o[r + 1] = 2 !== s ? (i >>> 7) | 128 : (i >>> 7) & 127;
    case 1:
      o[r] = 1 !== s ? 128 | i : 127 & i;
  }
}

// 你给的这个修改函数，修改数据逻辑的部分：
function A(e, t) {
  for (let i of (Object.assign(
    t.accountAttributesSuccess.accountAttributes,
    {
      ads: { boolValue: !1 },
      "com.spotify.madprops.use.ucs.product.state": { boolValue: !0 },
      "nft-disabled": { stringValue: "1" },
      offline: { boolValue: !0 },
      "player-license": { stringValue: "premium" },
      "streaming-rules": { stringValue: "" },
      type: { stringValue: "premium" },
      "publish-playlist": { boolValue: !1 },
      name: { stringValue: "Spotify Premium" },
      "financial-product": { stringValue: "pr:premium,tc:0" },
    },
  ),
  t.resolveSuccess.configuration.assignedValues)) {
    let { name: t, scope: l } = i.propertyId;
    "ios-system-your-plan-sidedrawer" === l && "is_row_enabled" === t
      ? (console.log("ios-system-your-plan-sidedrawer"),
        console.log(i),
        (i.boolValue.value = !0))
      : e.tab && "tab_configuration" === t && "ios-feature-navigation" === l
        ? (i.enumValue.value = "")
        : e.useractivity ||
          "is_useractivity_sharing_enabled" !== t ||
          "ios-feature-share" !== l ||
          (i.boolValue.value = !0);
  }
}

// 这是入口函数，负责解析原始数据，调用修改函数，返回编码后的数据
function parseAndModify(rawBytes) {
  // 包装为解析器对象
  let e = n(rawBytes);

  // 解析 protobuf 并获得结构体 t
  let tObj = t(e);

  // 修改结构体
  A(
    { tab: true, useractivity: false },
    tObj.success.resolveSuccess
  );

  // 编码修改后的结构体
  let encodeBuffer = r();
  e(tObj, encodeBuffer);
  y(encodeBuffer, encodeBuffer.limit);

  // 复制编码结果
  let result = c(encodeBuffer);

  o(encodeBuffer);

  return result;
}

// =====================

// 以上是你给的全部代码，已调整成适用Quantumult X，
// 入口函数为 parseAndModify(rawBytes)，接收Uint8Array，返回Uint8Array。

// ----------------------------
// 【第一部分结束】
// ----------------------------


// ----------------------------
// 【第二部分：Quantumult X 脚本入口】
// ----------------------------

(async () => {
  try {
    if ($response.status !== 200) return $done({});

    // Quantumult X 响应体默认是字符串，如果是base64，需要你确认（这里假设是base64编码）
    // 如果不是base64，请调整下这里
    let rawBody = base64ToUint8Array($response.body);

    let newBody = parseAndModify(rawBody);

    // 返回base64编码后的结果，Content-Type二进制
    $done({
      body: uint8ArrayToBase64(newBody),
      headers: {
        "Content-Type": "application/octet-stream",
      },
    });
  } catch (err) {
    console.log(err.message || err);
    $done({});
  }

  // base64转Uint8Array
  function base64ToUint8Array(base64) {
    let binary = atob(base64);
    let len = binary.length;
    let bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  // Uint8Array转base64
  function uint8ArrayToBase64(bytes) {
    let binary = '';
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
})();
