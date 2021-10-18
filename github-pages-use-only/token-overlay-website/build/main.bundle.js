/*! For license information please see main.bundle.js.LICENSE.txt */
(() => {
  var t = {
    "./node_modules/@ethersproject/abstract-provider/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "abstract-provider/5.4.1";
    },
    "./node_modules/@ethersproject/abstract-provider/lib.esm/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        ForkEvent: () => u,
        BlockForkEvent: () => c,
        TransactionForkEvent: () => f,
        TransactionOrderForkEvent: () => d,
        Provider: () => m
      });
      var n = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
      var i = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var o = r("./node_modules/@ethersproject/properties/lib.esm/index.js");
      var s = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var a = r("./node_modules/@ethersproject/abstract-provider/lib.esm/_version.js");
      var l = function(t, e, r, n) {
        return new (r || (r = Promise))((function(i, o) {
          function s(t) {
            try {
              l(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              l(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function l(t) {
            t.done ? i(t.value) : function(t) {
              return t instanceof r ? t : new r((function(e) {
                e(t);
              }));
            }(t.value).then(s, a);
          }
          l((n = n.apply(t, e || [])).next());
        }));
      };
      const h = new s.Logger(a.version);
      class u extends o.Description {
        static isForkEvent(t) {
          return !(!t || !t._isForkEvent);
        }
      }
      class c extends u {
        constructor(t, e) {
          (0, i.isHexString)(t, 32) || h.throwArgumentError("invalid blockHash", "blockHash", t), super({
            _isForkEvent: !0,
            _isBlockForkEvent: !0,
            expiry: e || 0,
            blockHash: t
          });
        }
      }
      class f extends u {
        constructor(t, e) {
          (0, i.isHexString)(t, 32) || h.throwArgumentError("invalid transaction hash", "hash", t), super({
            _isForkEvent: !0,
            _isTransactionForkEvent: !0,
            expiry: e || 0,
            hash: t
          });
        }
      }
      class d extends u {
        constructor(t, e, r) {
          (0, i.isHexString)(t, 32) || h.throwArgumentError("invalid transaction hash", "beforeHash", t), (0, i.isHexString)(e, 32) || h.throwArgumentError("invalid transaction hash", "afterHash", e), 
          super({
            _isForkEvent: !0,
            _isTransactionOrderForkEvent: !0,
            expiry: r || 0,
            beforeHash: t,
            afterHash: e
          });
        }
      }
      class m {
        constructor() {
          h.checkAbstract(new.target, m), (0, o.defineReadOnly)(this, "_isProvider", !0);
        }
        getFeeData() {
          return l(this, void 0, void 0, (function*() {
            const {block: t, gasPrice: e} = yield (0, o.resolveProperties)({
              block: this.getBlock("latest"),
              gasPrice: this.getGasPrice().catch((t => null))
            });
            let r = null, i = null;
            return t && t.baseFeePerGas && (i = n.BigNumber.from("2500000000"), r = t.baseFeePerGas.mul(2).add(i)), {
              maxFeePerGas: r,
              maxPriorityFeePerGas: i,
              gasPrice: e
            };
          }));
        }
        addListener(t, e) {
          return this.on(t, e);
        }
        removeListener(t, e) {
          return this.off(t, e);
        }
        static isProvider(t) {
          return !(!t || !t._isProvider);
        }
      }
    },
    "./node_modules/@ethersproject/abstract-signer/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "abstract-signer/5.4.1";
    },
    "./node_modules/@ethersproject/abstract-signer/lib.esm/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        Signer: () => u,
        VoidSigner: () => c
      });
      var n = r("./node_modules/@ethersproject/properties/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var o = r("./node_modules/@ethersproject/abstract-signer/lib.esm/_version.js");
      var s = function(t, e, r, n) {
        return new (r || (r = Promise))((function(i, o) {
          function s(t) {
            try {
              l(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              l(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function l(t) {
            t.done ? i(t.value) : function(t) {
              return t instanceof r ? t : new r((function(e) {
                e(t);
              }));
            }(t.value).then(s, a);
          }
          l((n = n.apply(t, e || [])).next());
        }));
      };
      const a = new i.Logger(o.version);
      const l = [ "accessList", "chainId", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value" ];
      const h = [ i.Logger.errors.INSUFFICIENT_FUNDS, i.Logger.errors.NONCE_EXPIRED, i.Logger.errors.REPLACEMENT_UNDERPRICED ];
      class u {
        constructor() {
          a.checkAbstract(new.target, u), (0, n.defineReadOnly)(this, "_isSigner", !0);
        }
        getBalance(t) {
          return s(this, void 0, void 0, (function*() {
            return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), t);
          }));
        }
        getTransactionCount(t) {
          return s(this, void 0, void 0, (function*() {
            return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), t);
          }));
        }
        estimateGas(t) {
          return s(this, void 0, void 0, (function*() {
            this._checkProvider("estimateGas");
            const e = yield (0, n.resolveProperties)(this.checkTransaction(t));
            return yield this.provider.estimateGas(e);
          }));
        }
        call(t, e) {
          return s(this, void 0, void 0, (function*() {
            this._checkProvider("call");
            const r = yield (0, n.resolveProperties)(this.checkTransaction(t));
            return yield this.provider.call(r, e);
          }));
        }
        sendTransaction(t) {
          return s(this, void 0, void 0, (function*() {
            this._checkProvider("sendTransaction");
            const e = yield this.populateTransaction(t);
            const r = yield this.signTransaction(e);
            return yield this.provider.sendTransaction(r);
          }));
        }
        getChainId() {
          return s(this, void 0, void 0, (function*() {
            this._checkProvider("getChainId");
            return (yield this.provider.getNetwork()).chainId;
          }));
        }
        getGasPrice() {
          return s(this, void 0, void 0, (function*() {
            return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice();
          }));
        }
        getFeeData() {
          return s(this, void 0, void 0, (function*() {
            return this._checkProvider("getFeeData"), yield this.provider.getFeeData();
          }));
        }
        resolveName(t) {
          return s(this, void 0, void 0, (function*() {
            return this._checkProvider("resolveName"), yield this.provider.resolveName(t);
          }));
        }
        checkTransaction(t) {
          for (const r in t) -1 === l.indexOf(r) && a.throwArgumentError("invalid transaction key: " + r, "transaction", t);
          const e = (0, n.shallowCopy)(t);
          return null == e.from ? e.from = this.getAddress() : e.from = Promise.all([ Promise.resolve(e.from), this.getAddress() ]).then((e => (e[0].toLowerCase() !== e[1].toLowerCase() && a.throwArgumentError("from address mismatch", "transaction", t), 
          e[0]))), e;
        }
        populateTransaction(t) {
          return s(this, void 0, void 0, (function*() {
            const e = yield (0, n.resolveProperties)(this.checkTransaction(t));
            null != e.to && (e.to = Promise.resolve(e.to).then((t => s(this, void 0, void 0, (function*() {
              if (null == t) return null;
              const e = yield this.resolveName(t);
              return null == e && a.throwArgumentError("provided ENS name resolves to null", "tx.to", t), e;
            })))), e.to.catch((t => {})));
            const r = null != e.maxFeePerGas || null != e.maxPriorityFeePerGas;
            if (null == e.gasPrice || 2 !== e.type && !r ? 0 !== e.type && 1 !== e.type || !r || a.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", t) : a.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", t), 
            2 !== e.type && null != e.type || null == e.maxFeePerGas || null == e.maxPriorityFeePerGas) if (0 === e.type || 1 === e.type) null == e.gasPrice && (e.gasPrice = this.getGasPrice()); else {
              const t = yield this.getFeeData();
              if (null == e.type) if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas) if (e.type = 2, null != e.gasPrice) {
                const t = e.gasPrice;
                delete e.gasPrice, e.maxFeePerGas = t, e.maxPriorityFeePerGas = t;
              } else null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas), null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas); else null != t.gasPrice ? (r && a.throwError("network does not support EIP-1559", i.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "populateTransaction"
              }), null == e.gasPrice && (e.gasPrice = t.gasPrice), e.type = 0) : a.throwError("failed to get consistent fee data", i.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "signer.getFeeData"
              }); else 2 === e.type && (null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas), null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas));
            } else e.type = 2;
            return null == e.nonce && (e.nonce = this.getTransactionCount("pending")), null == e.gasLimit && (e.gasLimit = this.estimateGas(e).catch((t => {
              if (h.indexOf(t.code) >= 0) throw t;
              return a.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", i.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                error: t,
                tx: e
              });
            }))), null == e.chainId ? e.chainId = this.getChainId() : e.chainId = Promise.all([ Promise.resolve(e.chainId), this.getChainId() ]).then((e => (0 !== e[1] && e[0] !== e[1] && a.throwArgumentError("chainId address mismatch", "transaction", t), 
            e[0]))), yield (0, n.resolveProperties)(e);
          }));
        }
        _checkProvider(t) {
          this.provider || a.throwError("missing provider", i.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: t || "_checkProvider"
          });
        }
        static isSigner(t) {
          return !(!t || !t._isSigner);
        }
      }
      class c extends u {
        constructor(t, e) {
          a.checkNew(new.target, c), super(), (0, n.defineReadOnly)(this, "address", t), (0, n.defineReadOnly)(this, "provider", e || null);
        }
        getAddress() {
          return Promise.resolve(this.address);
        }
        _fail(t, e) {
          return Promise.resolve().then((() => {
            a.throwError(t, i.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: e
            });
          }));
        }
        signMessage(t) {
          return this._fail("VoidSigner cannot sign messages", "signMessage");
        }
        signTransaction(t) {
          return this._fail("VoidSigner cannot sign transactions", "signTransaction");
        }
        _signTypedData(t, e, r) {
          return this._fail("VoidSigner cannot sign typed data", "signTypedData");
        }
        connect(t) {
          return new c(this.address, t);
        }
      }
    },
    "./node_modules/@ethersproject/address/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "address/5.4.0";
    },
    "./node_modules/@ethersproject/address/lib.esm/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        getAddress: () => m,
        isAddress: () => g,
        getIcapAddress: () => p,
        getContractAddress: () => v,
        getCreate2Address: () => y
      });
      var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
      var o = r("./node_modules/@ethersproject/keccak256/lib.esm/index.js");
      var s = r("./node_modules/@ethersproject/rlp/lib.esm/index.js");
      var a = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var l = r("./node_modules/@ethersproject/address/lib.esm/_version.js");
      const h = new a.Logger(l.version);
      function u(t) {
        (0, n.isHexString)(t, 20) || h.throwArgumentError("invalid address", "address", t);
        const e = (t = t.toLowerCase()).substring(2).split("");
        const r = new Uint8Array(40);
        for (let n = 0; n < 40; n++) r[n] = e[n].charCodeAt(0);
        const i = (0, n.arrayify)((0, o.keccak256)(r));
        for (let n = 0; n < 40; n += 2) i[n >> 1] >> 4 >= 8 && (e[n] = e[n].toUpperCase()), (15 & i[n >> 1]) >= 8 && (e[n + 1] = e[n + 1].toUpperCase());
        return "0x" + e.join("");
      }
      const c = {};
      for (let b = 0; b < 10; b++) c[String(b)] = String(b);
      for (let b = 0; b < 26; b++) c[String.fromCharCode(65 + b)] = String(10 + b);
      const f = Math.floor(function(t) {
        return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10;
      }(9007199254740991));
      function d(t) {
        let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map((t => c[t])).join("");
        for (;e.length >= f; ) {
          let t = e.substring(0, f);
          e = parseInt(t, 10) % 97 + e.substring(t.length);
        }
        let r = String(98 - parseInt(e, 10) % 97);
        for (;r.length < 2; ) r = "0" + r;
        return r;
      }
      function m(t) {
        let e = null;
        if ("string" != typeof t && h.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), 
        e = u(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && h.throwArgumentError("bad address checksum", "address", t); else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (t.substring(2, 4) !== d(t) && h.throwArgumentError("bad icap checksum", "address", t), e = (0, i._base36To16)(t.substring(4)); e.length < 40; ) e = "0" + e;
          e = u("0x" + e);
        } else h.throwArgumentError("invalid address", "address", t);
        return e;
      }
      function g(t) {
        try {
          return m(t), !0;
        } catch (e) {}
        return !1;
      }
      function p(t) {
        let e = (0, i._base16To36)(m(t).substring(2)).toUpperCase();
        for (;e.length < 30; ) e = "0" + e;
        return "XE" + d("XE00" + e) + e;
      }
      function v(t) {
        let e = null;
        try {
          e = m(t.from);
        } catch (a) {
          h.throwArgumentError("missing from address", "transaction", t);
        }
        const r = (0, n.stripZeros)((0, n.arrayify)(i.BigNumber.from(t.nonce).toHexString()));
        return m((0, n.hexDataSlice)((0, o.keccak256)((0, s.encode)([ e, r ])), 12));
      }
      function y(t, e, r) {
        return 32 !== (0, n.hexDataLength)(e) && h.throwArgumentError("salt must be 32 bytes", "salt", e), 32 !== (0, n.hexDataLength)(r) && h.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", r), 
        m((0, n.hexDataSlice)((0, o.keccak256)((0, n.concat)([ "0xff", m(t), e, r ])), 12));
      }
    },
    "./node_modules/@ethersproject/base64/lib.esm/base64.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        decode: () => i,
        encode: () => o
      });
      var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      function i(t) {
        t = atob(t);
        const e = [];
        for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
        return (0, n.arrayify)(e);
      }
      function o(t) {
        t = (0, n.arrayify)(t);
        let e = "";
        for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
        return btoa(e);
      }
    },
    "./node_modules/@ethersproject/basex/lib.esm/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        BaseX: () => o,
        Base32: () => s,
        Base58: () => a
      });
      var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/properties/lib.esm/index.js");
      class o {
        constructor(t) {
          (0, i.defineReadOnly)(this, "alphabet", t), (0, i.defineReadOnly)(this, "base", t.length), (0, i.defineReadOnly)(this, "_alphabetMap", {}), 
          (0, i.defineReadOnly)(this, "_leader", t.charAt(0));
          for (let e = 0; e < t.length; e++) this._alphabetMap[t.charAt(e)] = e;
        }
        encode(t) {
          let e = (0, n.arrayify)(t);
          if (0 === e.length) return "";
          let r = [ 0 ];
          for (let n = 0; n < e.length; ++n) {
            let t = e[n];
            for (let e = 0; e < r.length; ++e) t += r[e] << 8, r[e] = t % this.base, t = t / this.base | 0;
            for (;t > 0; ) r.push(t % this.base), t = t / this.base | 0;
          }
          let i = "";
          for (let n = 0; 0 === e[n] && n < e.length - 1; ++n) i += this._leader;
          for (let n = r.length - 1; n >= 0; --n) i += this.alphabet[r[n]];
          return i;
        }
        decode(t) {
          if ("string" != typeof t) throw new TypeError("Expected String");
          let e = [];
          if (0 === t.length) return new Uint8Array(e);
          e.push(0);
          for (let r = 0; r < t.length; r++) {
            let n = this._alphabetMap[t[r]];
            if (void 0 === n) throw new Error("Non-base" + this.base + " character");
            let i = n;
            for (let t = 0; t < e.length; ++t) i += e[t] * this.base, e[t] = 255 & i, i >>= 8;
            for (;i > 0; ) e.push(255 & i), i >>= 8;
          }
          for (let r = 0; t[r] === this._leader && r < t.length - 1; ++r) e.push(0);
          return (0, n.arrayify)(new Uint8Array(e.reverse()));
        }
      }
      const s = new o("abcdefghijklmnopqrstuvwxyz234567");
      const a = new o("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
    },
    "./node_modules/@ethersproject/bignumber/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "bignumber/5.4.2";
    },
    "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        isBigNumberish: () => f,
        BigNumber: () => m,
        _base36To16: () => b,
        _base16To36: () => w
      });
      var n = r("./node_modules/bn.js/lib/bn.js");
      var i = r.n(n);
      var o = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var s = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var a = r("./node_modules/@ethersproject/bignumber/lib.esm/_version.js");
      var l = i().BN;
      const h = new s.Logger(a.version);
      const u = {};
      const c = 9007199254740991;
      function f(t) {
        return null != t && (m.isBigNumber(t) || "number" == typeof t && t % 1 == 0 || "string" == typeof t && !!t.match(/^-?[0-9]+$/) || (0, 
        o.isHexString)(t) || "bigint" == typeof t || (0, o.isBytes)(t));
      }
      let d = !1;
      class m {
        constructor(t, e) {
          h.checkNew(new.target, m), t !== u && h.throwError("cannot call constructor directly; use BigNumber.from", s.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "new (BigNumber)"
          }), this._hex = e, this._isBigNumber = !0, Object.freeze(this);
        }
        fromTwos(t) {
          return p(v(this).fromTwos(t));
        }
        toTwos(t) {
          return p(v(this).toTwos(t));
        }
        abs() {
          return "-" === this._hex[0] ? m.from(this._hex.substring(1)) : this;
        }
        add(t) {
          return p(v(this).add(v(t)));
        }
        sub(t) {
          return p(v(this).sub(v(t)));
        }
        div(t) {
          return m.from(t).isZero() && y("division by zero", "div"), p(v(this).div(v(t)));
        }
        mul(t) {
          return p(v(this).mul(v(t)));
        }
        mod(t) {
          const e = v(t);
          return e.isNeg() && y("cannot modulo negative values", "mod"), p(v(this).umod(e));
        }
        pow(t) {
          const e = v(t);
          return e.isNeg() && y("cannot raise to negative values", "pow"), p(v(this).pow(e));
        }
        and(t) {
          const e = v(t);
          return (this.isNegative() || e.isNeg()) && y("cannot 'and' negative values", "and"), p(v(this).and(e));
        }
        or(t) {
          const e = v(t);
          return (this.isNegative() || e.isNeg()) && y("cannot 'or' negative values", "or"), p(v(this).or(e));
        }
        xor(t) {
          const e = v(t);
          return (this.isNegative() || e.isNeg()) && y("cannot 'xor' negative values", "xor"), p(v(this).xor(e));
        }
        mask(t) {
          return (this.isNegative() || t < 0) && y("cannot mask negative values", "mask"), p(v(this).maskn(t));
        }
        shl(t) {
          return (this.isNegative() || t < 0) && y("cannot shift negative values", "shl"), p(v(this).shln(t));
        }
        shr(t) {
          return (this.isNegative() || t < 0) && y("cannot shift negative values", "shr"), p(v(this).shrn(t));
        }
        eq(t) {
          return v(this).eq(v(t));
        }
        lt(t) {
          return v(this).lt(v(t));
        }
        lte(t) {
          return v(this).lte(v(t));
        }
        gt(t) {
          return v(this).gt(v(t));
        }
        gte(t) {
          return v(this).gte(v(t));
        }
        isNegative() {
          return "-" === this._hex[0];
        }
        isZero() {
          return v(this).isZero();
        }
        toNumber() {
          try {
            return v(this).toNumber();
          } catch (t) {
            y("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (t) {}
          return h.throwError("this platform does not support BigInt", s.Logger.errors.UNSUPPORTED_OPERATION, {
            value: this.toString()
          });
        }
        toString() {
          return arguments.length > 0 && (10 === arguments[0] ? d || (d = !0, h.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? h.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", s.Logger.errors.UNEXPECTED_ARGUMENT, {}) : h.throwError("BigNumber.toString does not accept parameters", s.Logger.errors.UNEXPECTED_ARGUMENT, {})), 
          v(this).toString(10);
        }
        toHexString() {
          return this._hex;
        }
        toJSON(t) {
          return {
            type: "BigNumber",
            hex: this.toHexString()
          };
        }
        static from(t) {
          if (t instanceof m) return t;
          if ("string" == typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new m(u, g(t)) : t.match(/^-?[0-9]+$/) ? new m(u, g(new l(t))) : h.throwArgumentError("invalid BigNumber string", "value", t);
          if ("number" == typeof t) return t % 1 && y("underflow", "BigNumber.from", t), (t >= c || t <= -c) && y("overflow", "BigNumber.from", t), 
          m.from(String(t));
          const e = t;
          if ("bigint" == typeof e) return m.from(e.toString());
          if ((0, o.isBytes)(e)) return m.from((0, o.hexlify)(e));
          if (e) if (e.toHexString) {
            const t = e.toHexString();
            if ("string" == typeof t) return m.from(t);
          } else {
            let t = e._hex;
            if (null == t && "BigNumber" === e.type && (t = e.hex), "string" == typeof t && ((0, o.isHexString)(t) || "-" === t[0] && (0, 
            o.isHexString)(t.substring(1)))) return m.from(t);
          }
          return h.throwArgumentError("invalid BigNumber value", "value", t);
        }
        static isBigNumber(t) {
          return !(!t || !t._isBigNumber);
        }
      }
      function g(t) {
        if ("string" != typeof t) return g(t.toString(16));
        if ("-" === t[0]) return "-" === (t = t.substring(1))[0] && h.throwArgumentError("invalid hex", "value", t), "0x00" === (t = g(t)) ? t : "-" + t;
        if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
        for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4); ) t = "0x" + t.substring(4);
        return t;
      }
      function p(t) {
        return m.from(g(t));
      }
      function v(t) {
        const e = m.from(t).toHexString();
        return "-" === e[0] ? new l("-" + e.substring(3), 16) : new l(e.substring(2), 16);
      }
      function y(t, e, r) {
        const n = {
          fault: t,
          operation: e
        };
        return null != r && (n.value = r), h.throwError(t, s.Logger.errors.NUMERIC_FAULT, n);
      }
      function b(t) {
        return new l(t, 36).toString(16);
      }
      function w(t) {
        return new l(t, 16).toString(36);
      }
    },
    "./node_modules/@ethersproject/bytes/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "bytes/5.4.0";
    },
    "./node_modules/@ethersproject/bytes/lib.esm/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        isBytesLike: () => l,
        isBytes: () => h,
        arrayify: () => u,
        concat: () => c,
        stripZeros: () => f,
        zeroPad: () => d,
        isHexString: () => m,
        hexlify: () => p,
        hexDataLength: () => v,
        hexDataSlice: () => y,
        hexConcat: () => b,
        hexValue: () => w,
        hexStripZeros: () => k,
        hexZeroPad: () => x,
        splitSignature: () => A,
        joinSignature: () => B
      });
      var n = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/bytes/lib.esm/_version.js");
      const o = new n.Logger(i.version);
      function s(t) {
        return !!t.toHexString;
      }
      function a(t) {
        return t.slice || (t.slice = function() {
          const e = Array.prototype.slice.call(arguments);
          return a(new Uint8Array(Array.prototype.slice.apply(t, e)));
        }), t;
      }
      function l(t) {
        return m(t) && !(t.length % 2) || h(t);
      }
      function h(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" == typeof t) return !1;
        if (null == t.length) return !1;
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if ("number" != typeof r || r < 0 || r >= 256 || r % 1) return !1;
        }
        return !0;
      }
      function u(t, e) {
        if (e || (e = {}), "number" == typeof t) {
          o.checkSafeUint53(t, "invalid arrayify value");
          const e = [];
          for (;t; ) e.unshift(255 & t), t = parseInt(String(t / 256));
          return 0 === e.length && e.push(0), a(new Uint8Array(e));
        }
        if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), s(t) && (t = t.toHexString()), 
        m(t)) {
          let r = t.substring(2);
          r.length % 2 && ("left" === e.hexPad ? r = "0x0" + r.substring(2) : "right" === e.hexPad ? r += "0" : o.throwArgumentError("hex data is odd-length", "value", t));
          const n = [];
          for (let t = 0; t < r.length; t += 2) n.push(parseInt(r.substring(t, t + 2), 16));
          return a(new Uint8Array(n));
        }
        return h(t) ? a(new Uint8Array(t)) : o.throwArgumentError("invalid arrayify value", "value", t);
      }
      function c(t) {
        const e = t.map((t => u(t)));
        const r = e.reduce(((t, e) => t + e.length), 0);
        const n = new Uint8Array(r);
        return e.reduce(((t, e) => (n.set(e, t), t + e.length)), 0), a(n);
      }
      function f(t) {
        let e = u(t);
        if (0 === e.length) return e;
        let r = 0;
        for (;r < e.length && 0 === e[r]; ) r++;
        return r && (e = e.slice(r)), e;
      }
      function d(t, e) {
        (t = u(t)).length > e && o.throwArgumentError("value out of range", "value", arguments[0]);
        const r = new Uint8Array(e);
        return r.set(t, e - t.length), a(r);
      }
      function m(t, e) {
        return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!e || t.length === 2 + 2 * e);
      }
      const g = "0123456789abcdef";
      function p(t, e) {
        if (e || (e = {}), "number" == typeof t) {
          o.checkSafeUint53(t, "invalid hexlify value");
          let e = "";
          for (;t; ) e = g[15 & t] + e, t = Math.floor(t / 16);
          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }
        if ("bigint" == typeof t) return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
        if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), s(t)) return t.toHexString();
        if (m(t)) return t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : o.throwArgumentError("hex data is odd-length", "value", t)), 
        t.toLowerCase();
        if (h(t)) {
          let e = "0x";
          for (let r = 0; r < t.length; r++) {
            let n = t[r];
            e += g[(240 & n) >> 4] + g[15 & n];
          }
          return e;
        }
        return o.throwArgumentError("invalid hexlify value", "value", t);
      }
      function v(t) {
        if ("string" != typeof t) t = p(t); else if (!m(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function y(t, e, r) {
        return "string" != typeof t ? t = p(t) : (!m(t) || t.length % 2) && o.throwArgumentError("invalid hexData", "value", t), 
        e = 2 + 2 * e, null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e);
      }
      function b(t) {
        let e = "0x";
        return t.forEach((t => {
          e += p(t).substring(2);
        })), e;
      }
      function w(t) {
        const e = k(p(t, {
          hexPad: "left"
        }));
        return "0x" === e ? "0x0" : e;
      }
      function k(t) {
        "string" != typeof t && (t = p(t)), m(t) || o.throwArgumentError("invalid hex string", "value", t), t = t.substring(2);
        let e = 0;
        for (;e < t.length && "0" === t[e]; ) e++;
        return "0x" + t.substring(e);
      }
      function x(t, e) {
        for ("string" != typeof t ? t = p(t) : m(t) || o.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && o.throwArgumentError("value out of range", "value", e); t.length < 2 * e + 2; ) t = "0x0" + t.substring(2);
        return t;
      }
      function A(t) {
        const e = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0
        };
        if (l(t)) {
          const r = u(t);
          65 !== r.length && o.throwArgumentError("invalid signature string; must be 65 bytes", "signature", t), e.r = p(r.slice(0, 32)), 
          e.s = p(r.slice(32, 64)), e.v = r[64], e.v < 27 && (0 === e.v || 1 === e.v ? e.v += 27 : o.throwArgumentError("signature invalid v byte", "signature", t)), 
          e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (r[32] |= 128), e._vs = p(r.slice(32, 64));
        } else {
          if (e.r = t.r, e.s = t.s, e.v = t.v, e.recoveryParam = t.recoveryParam, e._vs = t._vs, null != e._vs) {
            const r = d(u(e._vs), 32);
            e._vs = p(r);
            const n = r[0] >= 128 ? 1 : 0;
            null == e.recoveryParam ? e.recoveryParam = n : e.recoveryParam !== n && o.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), 
            r[0] &= 127;
            const i = p(r);
            null == e.s ? e.s = i : e.s !== i && o.throwArgumentError("signature v mismatch _vs", "signature", t);
          }
          null == e.recoveryParam ? null == e.v ? o.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === e.v || 1 === e.v ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2 : null == e.v ? e.v = 27 + e.recoveryParam : e.recoveryParam !== 1 - e.v % 2 && o.throwArgumentError("signature recoveryParam mismatch v", "signature", t), 
          null != e.r && m(e.r) ? e.r = x(e.r, 32) : o.throwArgumentError("signature missing or invalid r", "signature", t), null != e.s && m(e.s) ? e.s = x(e.s, 32) : o.throwArgumentError("signature missing or invalid s", "signature", t);
          const r = u(e.s);
          r[0] >= 128 && o.throwArgumentError("signature s out of range", "signature", t), e.recoveryParam && (r[0] |= 128);
          const n = p(r);
          e._vs && (m(e._vs) || o.throwArgumentError("signature invalid _vs", "signature", t), e._vs = x(e._vs, 32)), null == e._vs ? e._vs = n : e._vs !== n && o.throwArgumentError("signature _vs mismatch v and s", "signature", t);
        }
        return e;
      }
      function B(t) {
        return p(c([ (t = A(t)).r, t.s, t.recoveryParam ? "0x1c" : "0x1b" ]));
      }
    },
    "./node_modules/@ethersproject/constants/lib.esm/addresses.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        AddressZero: () => n
      });
      const n = "0x0000000000000000000000000000000000000000";
    },
    "./node_modules/@ethersproject/constants/lib.esm/bignumbers.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        NegativeOne: () => i,
        Zero: () => o,
        One: () => s,
        Two: () => a,
        WeiPerEther: () => l,
        MaxUint256: () => h,
        MinInt256: () => u,
        MaxInt256: () => c
      });
      var n = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
      const i = n.BigNumber.from(-1);
      const o = n.BigNumber.from(0);
      const s = n.BigNumber.from(1);
      const a = n.BigNumber.from(2);
      const l = n.BigNumber.from("1000000000000000000");
      const h = n.BigNumber.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
      const u = n.BigNumber.from("-0x8000000000000000000000000000000000000000000000000000000000000000");
      const c = n.BigNumber.from("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
    },
    "./node_modules/@ethersproject/constants/lib.esm/hashes.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        HashZero: () => n
      });
      const n = "0x0000000000000000000000000000000000000000000000000000000000000000";
    },
    "./node_modules/@ethersproject/hash/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "hash/5.4.0";
    },
    "./node_modules/@ethersproject/hash/lib.esm/id.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        id: () => o
      });
      var n = r("./node_modules/@ethersproject/keccak256/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/strings/lib.esm/utf8.js");
      function o(t) {
        return (0, n.keccak256)((0, i.toUtf8Bytes)(t));
      }
    },
    "./node_modules/@ethersproject/hash/lib.esm/message.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        messagePrefix: () => s,
        hashMessage: () => a
      });
      var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/keccak256/lib.esm/index.js");
      var o = r("./node_modules/@ethersproject/strings/lib.esm/utf8.js");
      const s = "Ethereum Signed Message:\n";
      function a(t) {
        return "string" == typeof t && (t = (0, o.toUtf8Bytes)(t)), (0, i.keccak256)((0, n.concat)([ (0, o.toUtf8Bytes)(s), (0, 
        o.toUtf8Bytes)(String(t.length)), t ]));
      }
    },
    "./node_modules/@ethersproject/hash/lib.esm/namehash.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        isValidName: () => f,
        namehash: () => d
      });
      var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/strings/lib.esm/idna.js");
      var o = r("./node_modules/@ethersproject/strings/lib.esm/utf8.js");
      var s = r("./node_modules/@ethersproject/keccak256/lib.esm/index.js");
      var a = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var l = r("./node_modules/@ethersproject/hash/lib.esm/_version.js");
      const h = new a.Logger(l.version);
      const u = new Uint8Array(32);
      u.fill(0);
      const c = new RegExp("^((.*)\\.)?([^.]+)$");
      function f(t) {
        try {
          const e = t.split(".");
          for (let t = 0; t < e.length; t++) if (0 === (0, i.nameprep)(e[t]).length) throw new Error("empty");
          return !0;
        } catch (e) {}
        return !1;
      }
      function d(t) {
        "string" != typeof t && h.throwArgumentError("invalid ENS name; not a string", "name", t);
        let e = t;
        let r = u;
        for (;e.length; ) {
          const a = e.match(c);
          null != a && "" !== a[2] || h.throwArgumentError("invalid ENS address; missing component", "name", t);
          const l = (0, o.toUtf8Bytes)((0, i.nameprep)(a[3]));
          r = (0, s.keccak256)((0, n.concat)([ r, (0, s.keccak256)(l) ])), e = a[2] || "";
        }
        return (0, n.hexlify)(r);
      }
    },
    "./node_modules/@ethersproject/hash/lib.esm/typed-data.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        TypedDataEncoder: () => _
      });
      var n = r("./node_modules/@ethersproject/address/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
      var o = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var s = r("./node_modules/@ethersproject/keccak256/lib.esm/index.js");
      var a = r("./node_modules/@ethersproject/properties/lib.esm/index.js");
      var l = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var h = r("./node_modules/@ethersproject/hash/lib.esm/_version.js");
      var u = r("./node_modules/@ethersproject/hash/lib.esm/id.js");
      var c = function(t, e, r, n) {
        return new (r || (r = Promise))((function(i, o) {
          function s(t) {
            try {
              l(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              l(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function l(t) {
            t.done ? i(t.value) : function(t) {
              return t instanceof r ? t : new r((function(e) {
                e(t);
              }));
            }(t.value).then(s, a);
          }
          l((n = n.apply(t, e || [])).next());
        }));
      };
      const f = new l.Logger(h.version);
      const d = new Uint8Array(32);
      d.fill(0);
      const m = i.BigNumber.from(-1);
      const g = i.BigNumber.from(0);
      const p = i.BigNumber.from(1);
      const v = i.BigNumber.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
      const y = (0, o.hexZeroPad)(p.toHexString(), 32);
      const b = (0, o.hexZeroPad)(g.toHexString(), 32);
      const w = {
        name: "string",
        version: "string",
        chainId: "uint256",
        verifyingContract: "address",
        salt: "bytes32"
      };
      const k = [ "name", "version", "chainId", "verifyingContract", "salt" ];
      function x(t) {
        return function(e) {
          return "string" != typeof e && f.throwArgumentError(`invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), 
          e;
        };
      }
      const A = {
        name: x("name"),
        version: x("version"),
        chainId: function(t) {
          try {
            return i.BigNumber.from(t).toString();
          } catch (e) {}
          return f.throwArgumentError("invalid domain value for \"chainId\"", "domain.chainId", t);
        },
        verifyingContract: function(t) {
          try {
            return (0, n.getAddress)(t).toLowerCase();
          } catch (e) {}
          return f.throwArgumentError("invalid domain value \"verifyingContract\"", "domain.verifyingContract", t);
        },
        salt: function(t) {
          try {
            const e = (0, o.arrayify)(t);
            if (32 !== e.length) throw new Error("bad length");
            return (0, o.hexlify)(e);
          } catch (e) {}
          return f.throwArgumentError("invalid domain value \"salt\"", "domain.salt", t);
        }
      };
      function B(t) {
        {
          const e = t.match(/^(u?)int(\d*)$/);
          if (e) {
            const r = "" === e[1];
            const n = parseInt(e[2] || "256");
            (n % 8 != 0 || n > 256 || e[2] && e[2] !== String(n)) && f.throwArgumentError("invalid numeric width", "type", t);
            const s = v.mask(r ? n - 1 : n);
            const a = r ? s.add(p).mul(m) : g;
            return function(e) {
              const r = i.BigNumber.from(e);
              return (r.lt(a) || r.gt(s)) && f.throwArgumentError(`value out-of-bounds for ${t}`, "value", e), (0, o.hexZeroPad)(r.toTwos(256).toHexString(), 32);
            };
          }
        }
        {
          const e = t.match(/^bytes(\d+)$/);
          if (e) {
            const r = parseInt(e[1]);
            return (0 === r || r > 32 || e[1] !== String(r)) && f.throwArgumentError("invalid bytes width", "type", t), function(e) {
              return (0, o.arrayify)(e).length !== r && f.throwArgumentError(`invalid length for ${t}`, "value", e), function(t) {
                const e = (0, o.arrayify)(t);
                const r = e.length % 32;
                return r ? (0, o.hexConcat)([ e, d.slice(r) ]) : (0, o.hexlify)(e);
              }(e);
            };
          }
        }
        switch (t) {
         case "address":
          return function(t) {
            return (0, o.hexZeroPad)((0, n.getAddress)(t), 32);
          };

         case "bool":
          return function(t) {
            return t ? y : b;
          };

         case "bytes":
          return function(t) {
            return (0, s.keccak256)(t);
          };

         case "string":
          return function(t) {
            return (0, u.id)(t);
          };
        }
        return null;
      }
      function E(t, e) {
        return `${t}(${e.map((({name: t, type: e}) => e + " " + t)).join(",")})`;
      }
      class _ {
        constructor(t) {
          (0, a.defineReadOnly)(this, "types", Object.freeze((0, a.deepCopy)(t))), (0, a.defineReadOnly)(this, "_encoderCache", {}), 
          (0, a.defineReadOnly)(this, "_types", {});
          const e = {};
          const r = {};
          const n = {};
          Object.keys(t).forEach((t => {
            e[t] = {}, r[t] = [], n[t] = {};
          }));
          for (const o in t) {
            const n = {};
            t[o].forEach((i => {
              n[i.name] && f.throwArgumentError(`duplicate variable name ${JSON.stringify(i.name)} in ${JSON.stringify(o)}`, "types", t), 
              n[i.name] = !0;
              const s = i.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
              s === o && f.throwArgumentError(`circular type reference to ${JSON.stringify(s)}`, "types", t);
              B(s) || (r[s] || f.throwArgumentError(`unknown type ${JSON.stringify(s)}`, "types", t), r[s].push(o), e[o][s] = !0);
            }));
          }
          const i = Object.keys(r).filter((t => 0 === r[t].length));
          0 === i.length ? f.throwArgumentError("missing primary type", "types", t) : i.length > 1 && f.throwArgumentError(`ambiguous primary types or unused types: ${i.map((t => JSON.stringify(t))).join(", ")}`, "types", t), 
          (0, a.defineReadOnly)(this, "primaryType", i[0]), function i(o, s) {
            s[o] && f.throwArgumentError(`circular type reference to ${JSON.stringify(o)}`, "types", t), s[o] = !0, Object.keys(e[o]).forEach((t => {
              r[t] && (i(t, s), Object.keys(s).forEach((e => {
                n[e][t] = !0;
              })));
            })), delete s[o];
          }(this.primaryType, {});
          for (const o in n) {
            const e = Object.keys(n[o]);
            e.sort(), this._types[o] = E(o, t[o]) + e.map((e => E(e, t[e]))).join("");
          }
        }
        getEncoder(t) {
          let e = this._encoderCache[t];
          return e || (e = this._encoderCache[t] = this._getEncoder(t)), e;
        }
        _getEncoder(t) {
          {
            const e = B(t);
            if (e) return e;
          }
          const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (e) {
            const t = e[1];
            const r = this.getEncoder(t);
            const n = parseInt(e[3]);
            return e => {
              n >= 0 && e.length !== n && f.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e);
              let i = e.map(r);
              return this._types[t] && (i = i.map(s.keccak256)), (0, s.keccak256)((0, o.hexConcat)(i));
            };
          }
          const r = this.types[t];
          if (r) {
            const e = (0, u.id)(this._types[t]);
            return t => {
              const n = r.map((({name: e, type: r}) => {
                const n = this.getEncoder(r)(t[e]);
                return this._types[r] ? (0, s.keccak256)(n) : n;
              }));
              return n.unshift(e), (0, o.hexConcat)(n);
            };
          }
          return f.throwArgumentError(`unknown type: ${t}`, "type", t);
        }
        encodeType(t) {
          const e = this._types[t];
          return e || f.throwArgumentError(`unknown type: ${JSON.stringify(t)}`, "name", t), e;
        }
        encodeData(t, e) {
          return this.getEncoder(t)(e);
        }
        hashStruct(t, e) {
          return (0, s.keccak256)(this.encodeData(t, e));
        }
        encode(t) {
          return this.encodeData(this.primaryType, t);
        }
        hash(t) {
          return this.hashStruct(this.primaryType, t);
        }
        _visit(t, e, r) {
          if (B(t)) return r(t, e);
          const n = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (n) {
            const t = n[1];
            const i = parseInt(n[3]);
            return i >= 0 && e.length !== i && f.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e), 
            e.map((e => this._visit(t, e, r)));
          }
          const i = this.types[t];
          return i ? i.reduce(((t, {name: n, type: i}) => (t[n] = this._visit(i, e[n], r), t)), {}) : f.throwArgumentError(`unknown type: ${t}`, "type", t);
        }
        visit(t, e) {
          return this._visit(this.primaryType, t, e);
        }
        static from(t) {
          return new _(t);
        }
        static getPrimaryType(t) {
          return _.from(t).primaryType;
        }
        static hashStruct(t, e, r) {
          return _.from(e).hashStruct(t, r);
        }
        static hashDomain(t) {
          const e = [];
          for (const r in t) {
            const n = w[r];
            n || f.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", t), e.push({
              name: r,
              type: n
            });
          }
          return e.sort(((t, e) => k.indexOf(t.name) - k.indexOf(e.name))), _.hashStruct("EIP712Domain", {
            EIP712Domain: e
          }, t);
        }
        static encode(t, e, r) {
          return (0, o.hexConcat)([ "0x1901", _.hashDomain(t), _.from(e).hash(r) ]);
        }
        static hash(t, e, r) {
          return (0, s.keccak256)(_.encode(t, e, r));
        }
        static resolveNames(t, e, r, n) {
          return c(this, void 0, void 0, (function*() {
            t = (0, a.shallowCopy)(t);
            const i = {};
            t.verifyingContract && !(0, o.isHexString)(t.verifyingContract, 20) && (i[t.verifyingContract] = "0x");
            const s = _.from(e);
            s.visit(r, ((t, e) => ("address" !== t || (0, o.isHexString)(e, 20) || (i[e] = "0x"), e)));
            for (const t in i) i[t] = yield n(t);
            return t.verifyingContract && i[t.verifyingContract] && (t.verifyingContract = i[t.verifyingContract]), r = s.visit(r, ((t, e) => "address" === t && i[e] ? i[e] : e)), 
            {
              domain: t,
              value: r
            };
          }));
        }
        static getPayload(t, e, r) {
          _.hashDomain(t);
          const n = {};
          const s = [];
          k.forEach((e => {
            const r = t[e];
            null != r && (n[e] = A[e](r), s.push({
              name: e,
              type: w[e]
            }));
          }));
          const l = _.from(e);
          const h = (0, a.shallowCopy)(e);
          return h.EIP712Domain ? f.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", e) : h.EIP712Domain = s, 
          l.encode(r), {
            types: h,
            domain: n,
            primaryType: l.primaryType,
            message: l.visit(r, ((t, e) => {
              if (t.match(/^bytes(\d*)/)) return (0, o.hexlify)((0, o.arrayify)(e));
              if (t.match(/^u?int/)) return i.BigNumber.from(e).toString();
              switch (t) {
               case "address":
                return e.toLowerCase();

               case "bool":
                return !!e;

               case "string":
                return "string" != typeof e && f.throwArgumentError("invalid string", "value", e), e;
              }
              return f.throwArgumentError("unsupported type", "type", t);
            }))
          };
        }
      }
    },
    "./node_modules/@ethersproject/keccak256/lib.esm/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        keccak256: () => s
      });
      var n = r("./node_modules/js-sha3/src/sha3.js");
      var i = r.n(n);
      var o = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      function s(t) {
        return '0x' + i().keccak_256((0, o.arrayify)(t));
      }
    },
    "./node_modules/@ethersproject/logger/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "logger/5.4.1";
    },
    "./node_modules/@ethersproject/logger/lib.esm/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        LogLevel: () => u,
        ErrorCode: () => c,
        Logger: () => d
      });
      var n = r("./node_modules/@ethersproject/logger/lib.esm/_version.js");
      let i = !1;
      let o = !1;
      const s = {
        debug: 1,
        default: 2,
        info: 2,
        warning: 3,
        error: 4,
        off: 5
      };
      let a = s.default;
      let l = null;
      const h = function() {
        try {
          const t = [];
          if ([ "NFD", "NFC", "NFKD", "NFKC" ].forEach((e => {
            try {
              if ("test" !== "test".normalize(e)) throw new Error("bad normalize");
            } catch (r) {
              t.push(e);
            }
          })), t.length) throw new Error("missing " + t.join(", "));
          if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation");
        } catch (t) {
          return t.message;
        }
        return null;
      }();
      var u;
      var c;
      !function(t) {
        t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF";
      }(u || (u = {})), function(t) {
        t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", 
        t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", 
        t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", 
        t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", 
        t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", 
        t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED";
      }(c || (c = {}));
      const f = "0123456789abcdef";
      class d {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1
          });
        }
        _log(t, e) {
          const r = t.toLowerCase();
          null == s[r] && this.throwArgumentError("invalid log level name", "logLevel", t), a > s[r] || console.log.apply(console, e);
        }
        debug(...t) {
          this._log(d.levels.DEBUG, t);
        }
        info(...t) {
          this._log(d.levels.INFO, t);
        }
        warn(...t) {
          this._log(d.levels.WARNING, t);
        }
        makeError(t, e, r) {
          if (o) return this.makeError("censored error", e, {});
          e || (e = d.errors.UNKNOWN_ERROR), r || (r = {});
          const n = [];
          Object.keys(r).forEach((t => {
            const e = r[t];
            try {
              if (e instanceof Uint8Array) {
                let r = "";
                for (let t = 0; t < e.length; t++) r += f[e[t] >> 4], r += f[15 & e[t]];
                n.push(t + "=Uint8Array(0x" + r + ")");
              } else n.push(t + "=" + JSON.stringify(e));
            } catch (s) {
              n.push(t + "=" + JSON.stringify(r[t].toString()));
            }
          })), n.push(`code=${e}`), n.push(`version=${this.version}`);
          const i = t;
          n.length && (t += " (" + n.join(", ") + ")");
          const s = new Error(t);
          return s.reason = i, s.code = e, Object.keys(r).forEach((function(t) {
            s[t] = r[t];
          })), s;
        }
        throwError(t, e, r) {
          throw this.makeError(t, e, r);
        }
        throwArgumentError(t, e, r) {
          return this.throwError(t, d.errors.INVALID_ARGUMENT, {
            argument: e,
            value: r
          });
        }
        assert(t, e, r, n) {
          t || this.throwError(e, r, n);
        }
        assertArgument(t, e, r, n) {
          t || this.throwArgumentError(e, r, n);
        }
        checkNormalize(t) {
          null == t && (t = "platform missing String.prototype.normalize"), h && this.throwError("platform missing String.prototype.normalize", d.errors.UNSUPPORTED_OPERATION, {
            operation: "String.prototype.normalize",
            form: h
          });
        }
        checkSafeUint53(t, e) {
          "number" == typeof t && (null == e && (e = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(e, d.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "out-of-safe-range",
            value: t
          }), t % 1 && this.throwError(e, d.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "non-integer",
            value: t
          }));
        }
        checkArgumentCount(t, e, r) {
          r = r ? ": " + r : "", t < e && this.throwError("missing argument" + r, d.errors.MISSING_ARGUMENT, {
            count: t,
            expectedCount: e
          }), t > e && this.throwError("too many arguments" + r, d.errors.UNEXPECTED_ARGUMENT, {
            count: t,
            expectedCount: e
          });
        }
        checkNew(t, e) {
          t !== Object && null != t || this.throwError("missing new", d.errors.MISSING_NEW, {
            name: e.name
          });
        }
        checkAbstract(t, e) {
          t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", d.errors.UNSUPPORTED_OPERATION, {
            name: t.name,
            operation: "new"
          }) : t !== Object && null != t || this.throwError("missing new", d.errors.MISSING_NEW, {
            name: e.name
          });
        }
        static globalLogger() {
          return l || (l = new d(n.version)), l;
        }
        static setCensorship(t, e) {
          if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", d.errors.UNSUPPORTED_OPERATION, {
            operation: "setCensorship"
          }), i) {
            if (!t) return;
            this.globalLogger().throwError("error censorship permanent", d.errors.UNSUPPORTED_OPERATION, {
              operation: "setCensorship"
            });
          }
          o = !!t, i = !!e;
        }
        static setLogLevel(t) {
          const e = s[t.toLowerCase()];
          null != e ? a = e : d.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new d(t);
        }
      }
      d.errors = c, d.levels = u;
    },
    "./node_modules/@ethersproject/networks/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "networks/5.4.2";
    },
    "./node_modules/@ethersproject/networks/lib.esm/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        getNetwork: () => f
      });
      var n = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/networks/lib.esm/_version.js");
      const o = new n.Logger(i.version);
      function s(t) {
        const e = function(e, r) {
          null == r && (r = {});
          const n = [];
          if (e.InfuraProvider) try {
            n.push(new e.InfuraProvider(t, r.infura));
          } catch (i) {}
          if (e.EtherscanProvider) try {
            n.push(new e.EtherscanProvider(t, r.etherscan));
          } catch (i) {}
          if (e.AlchemyProvider) try {
            n.push(new e.AlchemyProvider(t, r.alchemy));
          } catch (i) {}
          if (e.PocketProvider) {
            const r = [ "goerli", "ropsten", "rinkeby" ];
            try {
              const i = new e.PocketProvider(t);
              i.network && -1 === r.indexOf(i.network.name) && n.push(i);
            } catch (i) {}
          }
          if (e.CloudflareProvider) try {
            n.push(new e.CloudflareProvider(t));
          } catch (i) {}
          if (0 === n.length) return null;
          if (e.FallbackProvider) {
            let i = 1;
            return null != r.quorum ? i = r.quorum : "homestead" === t && (i = 2), new e.FallbackProvider(n, i);
          }
          return n[0];
        };
        return e.renetwork = function(t) {
          return s(t);
        }, e;
      }
      function a(t, e) {
        const r = function(r, n) {
          return r.JsonRpcProvider ? new r.JsonRpcProvider(t, e) : null;
        };
        return r.renetwork = function(e) {
          return a(t, e);
        }, r;
      }
      const l = {
        chainId: 1,
        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        name: "homestead",
        _defaultProvider: s("homestead")
      };
      const h = {
        chainId: 3,
        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        name: "ropsten",
        _defaultProvider: s("ropsten")
      };
      const u = {
        chainId: 63,
        name: "classicMordor",
        _defaultProvider: a("https://www.ethercluster.com/mordor", "classicMordor")
      };
      const c = {
        unspecified: {
          chainId: 0,
          name: "unspecified"
        },
        homestead: l,
        mainnet: l,
        morden: {
          chainId: 2,
          name: "morden"
        },
        ropsten: h,
        testnet: h,
        rinkeby: {
          chainId: 4,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "rinkeby",
          _defaultProvider: s("rinkeby")
        },
        kovan: {
          chainId: 42,
          name: "kovan",
          _defaultProvider: s("kovan")
        },
        goerli: {
          chainId: 5,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "goerli",
          _defaultProvider: s("goerli")
        },
        classic: {
          chainId: 61,
          name: "classic",
          _defaultProvider: a("https://www.ethercluster.com/etc", "classic")
        },
        classicMorden: {
          chainId: 62,
          name: "classicMorden"
        },
        classicMordor: u,
        classicTestnet: u,
        classicKotti: {
          chainId: 6,
          name: "classicKotti",
          _defaultProvider: a("https://www.ethercluster.com/kotti", "classicKotti")
        },
        xdai: {
          chainId: 100,
          name: "xdai"
        },
        matic: {
          chainId: 137,
          name: "matic"
        },
        maticmum: {
          chainId: 80001,
          name: "maticmum"
        },
        bnb: {
          chainId: 56,
          name: "bnb"
        },
        bnbt: {
          chainId: 97,
          name: "bnbt"
        }
      };
      function f(t) {
        if (null == t) return null;
        if ("number" == typeof t) {
          for (const e in c) {
            const r = c[e];
            if (r.chainId === t) return {
              name: r.name,
              chainId: r.chainId,
              ensAddress: r.ensAddress || null,
              _defaultProvider: r._defaultProvider || null
            };
          }
          return {
            chainId: t,
            name: "unknown"
          };
        }
        if ("string" == typeof t) {
          const e = c[t];
          return null == e ? null : {
            name: e.name,
            chainId: e.chainId,
            ensAddress: e.ensAddress,
            _defaultProvider: e._defaultProvider || null
          };
        }
        const e = c[t.name];
        if (!e) return "number" != typeof t.chainId && o.throwArgumentError("invalid network chainId", "network", t), t;
        0 !== t.chainId && t.chainId !== e.chainId && o.throwArgumentError("network chainId mismatch", "network", t);
        let r = t._defaultProvider || null;
        return null == r && e._defaultProvider && (r = function(t) {
          return t && "function" == typeof t.renetwork;
        }(e._defaultProvider) ? e._defaultProvider.renetwork(t) : e._defaultProvider), {
          name: t.name,
          chainId: e.chainId,
          ensAddress: t.ensAddress || e.ensAddress || null,
          _defaultProvider: r
        };
      }
    },
    "./node_modules/@ethersproject/properties/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "properties/5.4.1";
    },
    "./node_modules/@ethersproject/properties/lib.esm/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        defineReadOnly: () => a,
        getStatic: () => l,
        resolveProperties: () => h,
        checkProperties: () => u,
        shallowCopy: () => c,
        deepCopy: () => g,
        Description: () => p
      });
      var n = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/properties/lib.esm/_version.js");
      var o = function(t, e, r, n) {
        return new (r || (r = Promise))((function(i, o) {
          function s(t) {
            try {
              l(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              l(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function l(t) {
            t.done ? i(t.value) : function(t) {
              return t instanceof r ? t : new r((function(e) {
                e(t);
              }));
            }(t.value).then(s, a);
          }
          l((n = n.apply(t, e || [])).next());
        }));
      };
      const s = new n.Logger(i.version);
      function a(t, e, r) {
        Object.defineProperty(t, e, {
          enumerable: !0,
          value: r,
          writable: !1
        });
      }
      function l(t, e) {
        for (let r = 0; r < 32; r++) {
          if (t[e]) return t[e];
          if (!t.prototype || "object" != typeof t.prototype) break;
          t = Object.getPrototypeOf(t.prototype).constructor;
        }
        return null;
      }
      function h(t) {
        return o(this, void 0, void 0, (function*() {
          const e = Object.keys(t).map((e => {
            const r = t[e];
            return Promise.resolve(r).then((t => ({
              key: e,
              value: t
            })));
          }));
          return (yield Promise.all(e)).reduce(((t, e) => (t[e.key] = e.value, t)), {});
        }));
      }
      function u(t, e) {
        t && "object" == typeof t || s.throwArgumentError("invalid object", "object", t), Object.keys(t).forEach((r => {
          e[r] || s.throwArgumentError("invalid object key - " + r, "transaction:" + r, t);
        }));
      }
      function c(t) {
        const e = {};
        for (const r in t) e[r] = t[r];
        return e;
      }
      const f = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0
      };
      function d(t) {
        if (null == t || f[typeof t]) return !0;
        if (Array.isArray(t) || "object" == typeof t) {
          if (!Object.isFrozen(t)) return !1;
          const r = Object.keys(t);
          for (let n = 0; n < r.length; n++) {
            let i = null;
            try {
              i = t[r[n]];
            } catch (e) {
              continue;
            }
            if (!d(i)) return !1;
          }
          return !0;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function m(t) {
        if (d(t)) return t;
        if (Array.isArray(t)) return Object.freeze(t.map((t => g(t))));
        if ("object" == typeof t) {
          const e = {};
          for (const r in t) {
            const n = t[r];
            void 0 !== n && a(e, r, g(n));
          }
          return e;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function g(t) {
        return m(t);
      }
      class p {
        constructor(t) {
          for (const e in t) this[e] = g(t[e]);
        }
      }
    },
    "./node_modules/@ethersproject/providers/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "providers/5.4.5";
    },
    "./node_modules/@ethersproject/providers/lib.esm/base-provider.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        Event: () => N,
        Resolver: () => I,
        BaseProvider: () => P
      });
      var n = r("./node_modules/@ethersproject/abstract-provider/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/basex/lib.esm/index.js");
      var o = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
      var s = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var a = r("./node_modules/@ethersproject/constants/lib.esm/hashes.js");
      var l = r("./node_modules/@ethersproject/hash/lib.esm/namehash.js");
      var h = r("./node_modules/@ethersproject/networks/lib.esm/index.js");
      var u = r("./node_modules/@ethersproject/properties/lib.esm/index.js");
      var c = r("./node_modules/@ethersproject/sha2/lib.esm/sha2.js");
      var f = r("./node_modules/@ethersproject/strings/lib.esm/utf8.js");
      var d = r("./node_modules/@ethersproject/web/lib.esm/index.js");
      var m = r("./node_modules/bech32/index.js");
      var g = r.n(m);
      var p = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var v = r("./node_modules/@ethersproject/providers/lib.esm/_version.js");
      var y = r("./node_modules/@ethersproject/providers/lib.esm/formatter.js");
      var b = function(t, e, r, n) {
        return new (r || (r = Promise))((function(i, o) {
          function s(t) {
            try {
              l(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              l(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function l(t) {
            t.done ? i(t.value) : function(t) {
              return t instanceof r ? t : new r((function(e) {
                e(t);
              }));
            }(t.value).then(s, a);
          }
          l((n = n.apply(t, e || [])).next());
        }));
      };
      const w = new p.Logger(v.version);
      function k(t) {
        return null == t ? "null" : (32 !== (0, s.hexDataLength)(t) && w.throwArgumentError("invalid topic", "topic", t), t.toLowerCase());
      }
      function x(t) {
        for (t = t.slice(); t.length > 0 && null == t[t.length - 1]; ) t.pop();
        return t.map((t => {
          if (Array.isArray(t)) {
            const e = {};
            t.forEach((t => {
              e[k(t)] = !0;
            }));
            const r = Object.keys(e);
            return r.sort(), r.join("|");
          }
          return k(t);
        })).join("&");
      }
      function A(t) {
        if ("string" == typeof t) {
          if (t = t.toLowerCase(), 32 === (0, s.hexDataLength)(t)) return "tx:" + t;
          if (-1 === t.indexOf(":")) return t;
        } else {
          if (Array.isArray(t)) return "filter:*:" + x(t);
          if (n.ForkEvent.isForkEvent(t)) throw w.warn("not implemented"), new Error("not implemented");
          if (t && "object" == typeof t) return "filter:" + (t.address || "*") + ":" + x(t.topics || []);
        }
        throw new Error("invalid event - " + t);
      }
      function B() {
        return (new Date).getTime();
      }
      function E(t) {
        return new Promise((e => {
          setTimeout(e, t);
        }));
      }
      const _ = [ "block", "network", "pending", "poll" ];
      class N {
        constructor(t, e, r) {
          (0, u.defineReadOnly)(this, "tag", t), (0, u.defineReadOnly)(this, "listener", e), (0, u.defineReadOnly)(this, "once", r);
        }
        get event() {
          switch (this.type) {
           case "tx":
            return this.hash;

           case "filter":
            return this.filter;
          }
          return this.tag;
        }
        get type() {
          return this.tag.split(":")[0];
        }
        get hash() {
          const t = this.tag.split(":");
          return "tx" !== t[0] ? null : t[1];
        }
        get filter() {
          const t = this.tag.split(":");
          if ("filter" !== t[0]) return null;
          const e = t[1];
          const r = function(t) {
            return "" === t ? [] : t.split(/&/g).map((t => {
              if ("" === t) return [];
              const e = t.split("|").map((t => "null" === t ? null : t));
              return 1 === e.length ? e[0] : e;
            }));
          }(t[2]);
          const n = {};
          return r.length > 0 && (n.topics = r), e && "*" !== e && (n.address = e), n;
        }
        pollable() {
          return this.tag.indexOf(":") >= 0 || _.indexOf(this.tag) >= 0;
        }
      }
      const L = {
        0: {
          symbol: "btc",
          p2pkh: 0,
          p2sh: 5,
          prefix: "bc"
        },
        2: {
          symbol: "ltc",
          p2pkh: 48,
          p2sh: 50,
          prefix: "ltc"
        },
        3: {
          symbol: "doge",
          p2pkh: 30,
          p2sh: 22
        },
        60: {
          symbol: "eth",
          ilk: "eth"
        },
        61: {
          symbol: "etc",
          ilk: "eth"
        },
        700: {
          symbol: "xdai",
          ilk: "eth"
        }
      };
      function S(t) {
        return (0, s.hexZeroPad)(o.BigNumber.from(t).toHexString(), 32);
      }
      function M(t) {
        return i.Base58.encode((0, s.concat)([ t, (0, s.hexDataSlice)((0, c.sha256)((0, c.sha256)(t)), 0, 4) ]));
      }
      class I {
        constructor(t, e, r) {
          (0, u.defineReadOnly)(this, "provider", t), (0, u.defineReadOnly)(this, "name", r), (0, u.defineReadOnly)(this, "address", t.formatter.address(e));
        }
        _fetchBytes(t, e) {
          return b(this, void 0, void 0, (function*() {
            const r = {
              to: this.address,
              data: (0, s.hexConcat)([ t, (0, l.namehash)(this.name), e || "0x" ])
            };
            try {
              const t = yield this.provider.call(r);
              if ("0x" === t) return null;
              const e = o.BigNumber.from((0, s.hexDataSlice)(t, 0, 32)).toNumber();
              const n = o.BigNumber.from((0, s.hexDataSlice)(t, e, e + 32)).toNumber();
              return (0, s.hexDataSlice)(t, e + 32, e + 32 + n);
            } catch (n) {
              return n.code, p.Logger.errors.CALL_EXCEPTION, null;
            }
          }));
        }
        _getAddress(t, e) {
          const r = L[String(t)];
          if (null == r && w.throwError(`unsupported coin type: ${t}`, p.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: `getAddress(${t})`
          }), "eth" === r.ilk) return this.provider.formatter.address(e);
          const n = (0, s.arrayify)(e);
          if (null != r.p2pkh) {
            const t = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
            if (t) {
              const e = parseInt(t[1], 16);
              if (t[2].length === 2 * e && e >= 1 && e <= 75) return M((0, s.concat)([ [ r.p2pkh ], "0x" + t[2] ]));
            }
          }
          if (null != r.p2sh) {
            const t = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
            if (t) {
              const e = parseInt(t[1], 16);
              if (t[2].length === 2 * e && e >= 1 && e <= 75) return M((0, s.concat)([ [ r.p2sh ], "0x" + t[2] ]));
            }
          }
          if (null != r.prefix) {
            const t = n[1];
            let e = n[0];
            if (0 === e ? 20 !== t && 32 !== t && (e = -1) : e = -1, e >= 0 && n.length === 2 + t && t >= 1 && t <= 75) {
              const t = g().toWords(n.slice(2));
              return t.unshift(e), g().encode(r.prefix, t);
            }
          }
          return null;
        }
        getAddress(t) {
          return b(this, void 0, void 0, (function*() {
            if (null == t && (t = 60), 60 === t) try {
              const t = {
                to: this.address,
                data: "0x3b3b57de" + (0, l.namehash)(this.name).substring(2)
              };
              const e = yield this.provider.call(t);
              return "0x" === e || e === a.HashZero ? null : this.provider.formatter.callAddress(e);
            } catch (n) {
              if (n.code === p.Logger.errors.CALL_EXCEPTION) return null;
              throw n;
            }
            const e = yield this._fetchBytes("0xf1cb7e06", S(t));
            if (null == e || "0x" === e) return null;
            const r = this._getAddress(t, e);
            return null == r && w.throwError("invalid or unsupported coin data", p.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: `getAddress(${t})`,
              coinType: t,
              data: e
            }), r;
          }));
        }
        getContentHash() {
          return b(this, void 0, void 0, (function*() {
            const t = yield this._fetchBytes("0xbc1c58d1");
            if (null == t || "0x" === t) return null;
            const e = t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
            if (e) {
              const t = parseInt(e[3], 16);
              if (e[4].length === 2 * t) return "ipfs://" + i.Base58.encode("0x" + e[1]);
            }
            const r = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
            return r && 64 === r[1].length ? "bzz://" + r[1] : w.throwError("invalid or unsupported content hash data", p.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: "getContentHash()",
              data: t
            });
          }));
        }
        getText(t) {
          return b(this, void 0, void 0, (function*() {
            let e = (0, f.toUtf8Bytes)(t);
            e = (0, s.concat)([ S(64), S(e.length), e ]), e.length % 32 != 0 && (e = (0, s.concat)([ e, (0, s.hexZeroPad)("0x", 32 - t.length % 32) ]));
            const r = yield this._fetchBytes("0x59d1d43c", (0, s.hexlify)(e));
            return null == r || "0x" === r ? null : (0, f.toUtf8String)(r);
          }));
        }
      }
      let C = null;
      let j = 1;
      class P extends n.Provider {
        constructor(t) {
          if (w.checkNew(new.target, n.Provider), super(), this._events = [], this._emitted = {
            block: -2
          }, this.formatter = new.target.getFormatter(), (0, u.defineReadOnly)(this, "anyNetwork", "any" === t), this.anyNetwork && (t = this.detectNetwork()), 
          t instanceof Promise) this._networkPromise = t, t.catch((t => {})), this._ready().catch((t => {})); else {
            const e = (0, u.getStatic)(new.target, "getNetwork")(t);
            e ? ((0, u.defineReadOnly)(this, "_network", e), this.emit("network", e, null)) : w.throwArgumentError("invalid network", "network", t);
          }
          this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._pollingInterval = 4e3, this._fastQueryDate = 0;
        }
        _ready() {
          return b(this, void 0, void 0, (function*() {
            if (null == this._network) {
              let e = null;
              if (this._networkPromise) try {
                e = yield this._networkPromise;
              } catch (t) {}
              null == e && (e = yield this.detectNetwork()), e || w.throwError("no network detected", p.Logger.errors.UNKNOWN_ERROR, {}), 
              null == this._network && (this.anyNetwork ? this._network = e : (0, u.defineReadOnly)(this, "_network", e), this.emit("network", e, null));
            }
            return this._network;
          }));
        }
        get ready() {
          return (0, d.poll)((() => this._ready().then((t => t), (t => {
            if (t.code !== p.Logger.errors.NETWORK_ERROR || "noNetwork" !== t.event) throw t;
          }))));
        }
        static getFormatter() {
          return null == C && (C = new y.Formatter), C;
        }
        static getNetwork(t) {
          return (0, h.getNetwork)(null == t ? "homestead" : t);
        }
        _getInternalBlockNumber(t) {
          return b(this, void 0, void 0, (function*() {
            if (yield this._ready(), t > 0) for (;this._internalBlockNumber; ) {
              const e = this._internalBlockNumber;
              try {
                const r = yield e;
                if (B() - r.respTime <= t) return r.blockNumber;
                break;
              } catch (n) {
                if (this._internalBlockNumber === e) break;
              }
            }
            const e = B();
            const r = (0, u.resolveProperties)({
              blockNumber: this.perform("getBlockNumber", {}),
              networkError: this.getNetwork().then((t => null), (t => t))
            }).then((({blockNumber: t, networkError: n}) => {
              if (n) throw this._internalBlockNumber === r && (this._internalBlockNumber = null), n;
              const i = B();
              return (t = o.BigNumber.from(t).toNumber()) < this._maxInternalBlockNumber && (t = this._maxInternalBlockNumber), this._maxInternalBlockNumber = t, 
              this._setFastBlockNumber(t), {
                blockNumber: t,
                reqTime: e,
                respTime: i
              };
            }));
            return this._internalBlockNumber = r, r.catch((t => {
              this._internalBlockNumber === r && (this._internalBlockNumber = null);
            })), (yield r).blockNumber;
          }));
        }
        poll() {
          return b(this, void 0, void 0, (function*() {
            const t = j++;
            const e = [];
            let r = null;
            try {
              r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2);
            } catch (n) {
              return void this.emit("error", n);
            }
            if (this._setFastBlockNumber(r), this.emit("poll", t, r), r !== this._lastBlockNumber) {
              if (-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3) w.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`), 
              this.emit("error", w.makeError("network block skew detected", p.Logger.errors.NETWORK_ERROR, {
                blockNumber: r,
                event: "blockSkew",
                previousBlockNumber: this._emitted.block
              })), this.emit("block", r); else for (let t = this._emitted.block + 1; t <= r; t++) this.emit("block", t);
              this._emitted.block !== r && (this._emitted.block = r, Object.keys(this._emitted).forEach((t => {
                if ("block" === t) return;
                const e = this._emitted[t];
                "pending" !== e && r - e > 12 && delete this._emitted[t];
              }))), -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1), this._events.forEach((t => {
                switch (t.type) {
                 case "tx":
                  {
                    const r = t.hash;
                    let n = this.getTransactionReceipt(r).then((t => t && null != t.blockNumber ? (this._emitted["t:" + r] = t.blockNumber, 
                    this.emit(r, t), null) : null)).catch((t => {
                      this.emit("error", t);
                    }));
                    e.push(n);
                    break;
                  }

                 case "filter":
                  {
                    const n = t.filter;
                    n.fromBlock = this._lastBlockNumber + 1, n.toBlock = r;
                    const i = this.getLogs(n).then((t => {
                      0 !== t.length && t.forEach((t => {
                        this._emitted["b:" + t.blockHash] = t.blockNumber, this._emitted["t:" + t.transactionHash] = t.blockNumber, this.emit(n, t);
                      }));
                    })).catch((t => {
                      this.emit("error", t);
                    }));
                    e.push(i);
                    break;
                  }
                }
              })), this._lastBlockNumber = r, Promise.all(e).then((() => {
                this.emit("didPoll", t);
              })).catch((t => {
                this.emit("error", t);
              }));
            } else this.emit("didPoll", t);
          }));
        }
        resetEventsBlock(t) {
          this._lastBlockNumber = t - 1, this.polling && this.poll();
        }
        get network() {
          return this._network;
        }
        detectNetwork() {
          return b(this, void 0, void 0, (function*() {
            return w.throwError("provider does not support network detection", p.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: "provider.detectNetwork"
            });
          }));
        }
        getNetwork() {
          return b(this, void 0, void 0, (function*() {
            const t = yield this._ready();
            const e = yield this.detectNetwork();
            if (t.chainId !== e.chainId) {
              if (this.anyNetwork) return this._network = e, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, 
              this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, 
              this.emit("network", e, t), yield E(0), this._network;
              const r = w.makeError("underlying network changed", p.Logger.errors.NETWORK_ERROR, {
                event: "changed",
                network: t,
                detectedNetwork: e
              });
              throw this.emit("error", r), r;
            }
            return t;
          }));
        }
        get blockNumber() {
          return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then((t => {
            this._setFastBlockNumber(t);
          }), (t => {})), null != this._fastBlockNumber ? this._fastBlockNumber : -1;
        }
        get polling() {
          return null != this._poller;
        }
        set polling(t) {
          t && !this._poller ? (this._poller = setInterval((() => {
            this.poll();
          }), this.pollingInterval), this._bootstrapPoll || (this._bootstrapPoll = setTimeout((() => {
            this.poll(), this._bootstrapPoll = setTimeout((() => {
              this._poller || this.poll(), this._bootstrapPoll = null;
            }), this.pollingInterval);
          }), 0))) : !t && this._poller && (clearInterval(this._poller), this._poller = null);
        }
        get pollingInterval() {
          return this._pollingInterval;
        }
        set pollingInterval(t) {
          if ("number" != typeof t || t <= 0 || parseInt(String(t)) != t) throw new Error("invalid polling interval");
          this._pollingInterval = t, this._poller && (clearInterval(this._poller), this._poller = setInterval((() => {
            this.poll();
          }), this._pollingInterval));
        }
        _getFastBlockNumber() {
          const t = B();
          return t - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = t, this._fastBlockNumberPromise = this.getBlockNumber().then((t => ((null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t), 
          this._fastBlockNumber)))), this._fastBlockNumberPromise;
        }
        _setFastBlockNumber(t) {
          null != this._fastBlockNumber && t < this._fastBlockNumber || (this._fastQueryDate = B(), (null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t, 
          this._fastBlockNumberPromise = Promise.resolve(t)));
        }
        waitForTransaction(t, e, r) {
          return b(this, void 0, void 0, (function*() {
            return this._waitForTransaction(t, null == e ? 1 : e, r || 0, null);
          }));
        }
        _waitForTransaction(t, e, r, n) {
          return b(this, void 0, void 0, (function*() {
            const i = yield this.getTransactionReceipt(t);
            return (i ? i.confirmations : 0) >= e ? i : new Promise(((i, o) => {
              const s = [];
              let a = !1;
              const l = function() {
                return !!a || (a = !0, s.forEach((t => {
                  t();
                })), !1);
              };
              const h = t => {
                t.confirmations < e || l() || i(t);
              };
              if (this.on(t, h), s.push((() => {
                this.removeListener(t, h);
              })), n) {
                let r = n.startBlock;
                let i = null;
                const h = s => b(this, void 0, void 0, (function*() {
                  a || (yield E(1e3), this.getTransactionCount(n.from).then((u => b(this, void 0, void 0, (function*() {
                    if (!a) {
                      if (u <= n.nonce) r = s; else {
                        {
                          const e = yield this.getTransaction(t);
                          if (e && null != e.blockNumber) return;
                        }
                        for (null == i && (i = r - 3, i < n.startBlock && (i = n.startBlock)); i <= s; ) {
                          if (a) return;
                          const r = yield this.getBlockWithTransactions(i);
                          for (let i = 0; i < r.transactions.length; i++) {
                            const s = r.transactions[i];
                            if (s.hash === t) return;
                            if (s.from === n.from && s.nonce === n.nonce) {
                              if (a) return;
                              const r = yield this.waitForTransaction(s.hash, e);
                              if (l()) return;
                              let i = "replaced";
                              return s.data === n.data && s.to === n.to && s.value.eq(n.value) ? i = "repriced" : "0x" === s.data && s.from === s.to && s.value.isZero() && (i = "cancelled"), 
                              void o(w.makeError("transaction was replaced", p.Logger.errors.TRANSACTION_REPLACED, {
                                cancelled: "replaced" === i || "cancelled" === i,
                                reason: i,
                                replacement: this._wrapTransaction(s),
                                hash: t,
                                receipt: r
                              }));
                            }
                          }
                          i++;
                        }
                      }
                      a || this.once("block", h);
                    }
                  }))), (t => {
                    a || this.once("block", h);
                  })));
                }));
                if (a) return;
                this.once("block", h), s.push((() => {
                  this.removeListener("block", h);
                }));
              }
              if ("number" == typeof r && r > 0) {
                const t = setTimeout((() => {
                  l() || o(w.makeError("timeout exceeded", p.Logger.errors.TIMEOUT, {
                    timeout: r
                  }));
                }), r);
                t.unref && t.unref(), s.push((() => {
                  clearTimeout(t);
                }));
              }
            }));
          }));
        }
        getBlockNumber() {
          return b(this, void 0, void 0, (function*() {
            return this._getInternalBlockNumber(0);
          }));
        }
        getGasPrice() {
          return b(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const t = yield this.perform("getGasPrice", {});
            try {
              return o.BigNumber.from(t);
            } catch (e) {
              return w.throwError("bad result from backend", p.Logger.errors.SERVER_ERROR, {
                method: "getGasPrice",
                result: t,
                error: e
              });
            }
          }));
        }
        getBalance(t, e) {
          return b(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const r = yield (0, u.resolveProperties)({
              address: this._getAddress(t),
              blockTag: this._getBlockTag(e)
            });
            const n = yield this.perform("getBalance", r);
            try {
              return o.BigNumber.from(n);
            } catch (i) {
              return w.throwError("bad result from backend", p.Logger.errors.SERVER_ERROR, {
                method: "getBalance",
                params: r,
                result: n,
                error: i
              });
            }
          }));
        }
        getTransactionCount(t, e) {
          return b(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const r = yield (0, u.resolveProperties)({
              address: this._getAddress(t),
              blockTag: this._getBlockTag(e)
            });
            const n = yield this.perform("getTransactionCount", r);
            try {
              return o.BigNumber.from(n).toNumber();
            } catch (i) {
              return w.throwError("bad result from backend", p.Logger.errors.SERVER_ERROR, {
                method: "getTransactionCount",
                params: r,
                result: n,
                error: i
              });
            }
          }));
        }
        getCode(t, e) {
          return b(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const r = yield (0, u.resolveProperties)({
              address: this._getAddress(t),
              blockTag: this._getBlockTag(e)
            });
            const n = yield this.perform("getCode", r);
            try {
              return (0, s.hexlify)(n);
            } catch (i) {
              return w.throwError("bad result from backend", p.Logger.errors.SERVER_ERROR, {
                method: "getCode",
                params: r,
                result: n,
                error: i
              });
            }
          }));
        }
        getStorageAt(t, e, r) {
          return b(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const n = yield (0, u.resolveProperties)({
              address: this._getAddress(t),
              blockTag: this._getBlockTag(r),
              position: Promise.resolve(e).then((t => (0, s.hexValue)(t)))
            });
            const i = yield this.perform("getStorageAt", n);
            try {
              return (0, s.hexlify)(i);
            } catch (o) {
              return w.throwError("bad result from backend", p.Logger.errors.SERVER_ERROR, {
                method: "getStorageAt",
                params: n,
                result: i,
                error: o
              });
            }
          }));
        }
        _wrapTransaction(t, e, r) {
          if (null != e && 32 !== (0, s.hexDataLength)(e)) throw new Error("invalid response - sendTransaction");
          const n = t;
          return null != e && t.hash !== e && w.throwError("Transaction hash mismatch from Provider.sendTransaction.", p.Logger.errors.UNKNOWN_ERROR, {
            expectedHash: t.hash,
            returnedHash: e
          }), n.wait = (e, n) => b(this, void 0, void 0, (function*() {
            let i;
            null == e && (e = 1), null == n && (n = 0), 0 !== e && null != r && (i = {
              data: t.data,
              from: t.from,
              nonce: t.nonce,
              to: t.to,
              value: t.value,
              startBlock: r
            });
            const o = yield this._waitForTransaction(t.hash, e, n, i);
            return null == o && 0 === e ? null : (this._emitted["t:" + t.hash] = o.blockNumber, 0 === o.status && w.throwError("transaction failed", p.Logger.errors.CALL_EXCEPTION, {
              transactionHash: t.hash,
              transaction: t,
              receipt: o
            }), o);
          })), n;
        }
        sendTransaction(t) {
          return b(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const e = yield Promise.resolve(t).then((t => (0, s.hexlify)(t)));
            const r = this.formatter.transaction(t);
            null == r.confirmations && (r.confirmations = 0);
            const n = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
            try {
              const t = yield this.perform("sendTransaction", {
                signedTransaction: e
              });
              return this._wrapTransaction(r, t, n);
            } catch (i) {
              throw i.transaction = r, i.transactionHash = r.hash, i;
            }
          }));
        }
        _getTransactionRequest(t) {
          return b(this, void 0, void 0, (function*() {
            const e = yield t;
            const r = {};
            return [ "from", "to" ].forEach((t => {
              null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => t ? this._getAddress(t) : null)));
            })), [ "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value" ].forEach((t => {
              null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => t ? o.BigNumber.from(t) : null)));
            })), [ "type" ].forEach((t => {
              null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => null != t ? t : null)));
            })), e.accessList && (r.accessList = this.formatter.accessList(e.accessList)), [ "data" ].forEach((t => {
              null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => t ? (0, s.hexlify)(t) : null)));
            })), this.formatter.transactionRequest(yield (0, u.resolveProperties)(r));
          }));
        }
        _getFilter(t) {
          return b(this, void 0, void 0, (function*() {
            t = yield t;
            const e = {};
            return null != t.address && (e.address = this._getAddress(t.address)), [ "blockHash", "topics" ].forEach((r => {
              null != t[r] && (e[r] = t[r]);
            })), [ "fromBlock", "toBlock" ].forEach((r => {
              null != t[r] && (e[r] = this._getBlockTag(t[r]));
            })), this.formatter.filter(yield (0, u.resolveProperties)(e));
          }));
        }
        call(t, e) {
          return b(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const r = yield (0, u.resolveProperties)({
              transaction: this._getTransactionRequest(t),
              blockTag: this._getBlockTag(e)
            });
            const n = yield this.perform("call", r);
            try {
              return (0, s.hexlify)(n);
            } catch (i) {
              return w.throwError("bad result from backend", p.Logger.errors.SERVER_ERROR, {
                method: "call",
                params: r,
                result: n,
                error: i
              });
            }
          }));
        }
        estimateGas(t) {
          return b(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const e = yield (0, u.resolveProperties)({
              transaction: this._getTransactionRequest(t)
            });
            const r = yield this.perform("estimateGas", e);
            try {
              return o.BigNumber.from(r);
            } catch (n) {
              return w.throwError("bad result from backend", p.Logger.errors.SERVER_ERROR, {
                method: "estimateGas",
                params: e,
                result: r,
                error: n
              });
            }
          }));
        }
        _getAddress(t) {
          return b(this, void 0, void 0, (function*() {
            const e = yield this.resolveName(t);
            return null == e && w.throwError("ENS name not configured", p.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: `resolveName(${JSON.stringify(t)})`
            }), e;
          }));
        }
        _getBlock(t, e) {
          return b(this, void 0, void 0, (function*() {
            yield this.getNetwork(), t = yield t;
            let r = -128;
            const n = {
              includeTransactions: !!e
            };
            if ((0, s.isHexString)(t, 32)) n.blockHash = t; else try {
              n.blockTag = this.formatter.blockTag(yield this._getBlockTag(t)), (0, s.isHexString)(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16));
            } catch (i) {
              w.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", t);
            }
            return (0, d.poll)((() => b(this, void 0, void 0, (function*() {
              const t = yield this.perform("getBlock", n);
              if (null == t) return null != n.blockHash && null == this._emitted["b:" + n.blockHash] || null != n.blockTag && r > this._emitted.block ? null : void 0;
              if (e) {
                let e = null;
                for (let n = 0; n < t.transactions.length; n++) {
                  const r = t.transactions[n];
                  if (null == r.blockNumber) r.confirmations = 0; else if (null == r.confirmations) {
                    null == e && (e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                    let t = e - r.blockNumber + 1;
                    t <= 0 && (t = 1), r.confirmations = t;
                  }
                }
                const r = this.formatter.blockWithTransactions(t);
                return r.transactions = r.transactions.map((t => this._wrapTransaction(t))), r;
              }
              return this.formatter.block(t);
            }))), {
              oncePoll: this
            });
          }));
        }
        getBlock(t) {
          return this._getBlock(t, !1);
        }
        getBlockWithTransactions(t) {
          return this._getBlock(t, !0);
        }
        getTransaction(t) {
          return b(this, void 0, void 0, (function*() {
            yield this.getNetwork(), t = yield t;
            const e = {
              transactionHash: this.formatter.hash(t, !0)
            };
            return (0, d.poll)((() => b(this, void 0, void 0, (function*() {
              const r = yield this.perform("getTransaction", e);
              if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
              const n = this.formatter.transactionResponse(r);
              if (null == n.blockNumber) n.confirmations = 0; else if (null == n.confirmations) {
                let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                t <= 0 && (t = 1), n.confirmations = t;
              }
              return this._wrapTransaction(n);
            }))), {
              oncePoll: this
            });
          }));
        }
        getTransactionReceipt(t) {
          return b(this, void 0, void 0, (function*() {
            yield this.getNetwork(), t = yield t;
            const e = {
              transactionHash: this.formatter.hash(t, !0)
            };
            return (0, d.poll)((() => b(this, void 0, void 0, (function*() {
              const r = yield this.perform("getTransactionReceipt", e);
              if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
              if (null == r.blockHash) return;
              const n = this.formatter.receipt(r);
              if (null == n.blockNumber) n.confirmations = 0; else if (null == n.confirmations) {
                let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                t <= 0 && (t = 1), n.confirmations = t;
              }
              return n;
            }))), {
              oncePoll: this
            });
          }));
        }
        getLogs(t) {
          return b(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const e = yield (0, u.resolveProperties)({
              filter: this._getFilter(t)
            });
            const r = yield this.perform("getLogs", e);
            return r.forEach((t => {
              null == t.removed && (t.removed = !1);
            })), y.Formatter.arrayOf(this.formatter.filterLog.bind(this.formatter))(r);
          }));
        }
        getEtherPrice() {
          return b(this, void 0, void 0, (function*() {
            return yield this.getNetwork(), this.perform("getEtherPrice", {});
          }));
        }
        _getBlockTag(t) {
          return b(this, void 0, void 0, (function*() {
            if ("number" == typeof (t = yield t) && t < 0) {
              t % 1 && w.throwArgumentError("invalid BlockTag", "blockTag", t);
              let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
              return e += t, e < 0 && (e = 0), this.formatter.blockTag(e);
            }
            return this.formatter.blockTag(t);
          }));
        }
        getResolver(t) {
          return b(this, void 0, void 0, (function*() {
            try {
              const e = yield this._getResolver(t);
              return null == e ? null : new I(this, e, t);
            } catch (e) {
              return e.code, p.Logger.errors.CALL_EXCEPTION, null;
            }
          }));
        }
        _getResolver(t) {
          return b(this, void 0, void 0, (function*() {
            const e = yield this.getNetwork();
            e.ensAddress || w.throwError("network does not support ENS", p.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: "ENS",
              network: e.name
            });
            const r = {
              to: e.ensAddress,
              data: "0x0178b8bf" + (0, l.namehash)(t).substring(2)
            };
            try {
              return this.formatter.callAddress(yield this.call(r));
            } catch (n) {
              if (n.code === p.Logger.errors.CALL_EXCEPTION) return null;
              throw n;
            }
          }));
        }
        resolveName(t) {
          return b(this, void 0, void 0, (function*() {
            t = yield t;
            try {
              return Promise.resolve(this.formatter.address(t));
            } catch (r) {
              if ((0, s.isHexString)(t)) throw r;
            }
            "string" != typeof t && w.throwArgumentError("invalid ENS name", "name", t);
            const e = yield this.getResolver(t);
            return e ? yield e.getAddress() : null;
          }));
        }
        lookupAddress(t) {
          return b(this, void 0, void 0, (function*() {
            t = yield t;
            const e = (t = this.formatter.address(t)).substring(2).toLowerCase() + ".addr.reverse";
            const r = yield this._getResolver(e);
            if (!r) return null;
            let n = (0, s.arrayify)(yield this.call({
              to: r,
              data: "0x691f3431" + (0, l.namehash)(e).substring(2)
            }));
            if (n.length < 32 || !o.BigNumber.from(n.slice(0, 32)).eq(32)) return null;
            if (n = n.slice(32), n.length < 32) return null;
            const i = o.BigNumber.from(n.slice(0, 32)).toNumber();
            if (n = n.slice(32), i > n.length) return null;
            const a = (0, f.toUtf8String)(n.slice(0, i));
            return (yield this.resolveName(a)) != t ? null : a;
          }));
        }
        perform(t, e) {
          return w.throwError(t + " not implemented", p.Logger.errors.NOT_IMPLEMENTED, {
            operation: t
          });
        }
        _startEvent(t) {
          this.polling = this._events.filter((t => t.pollable())).length > 0;
        }
        _stopEvent(t) {
          this.polling = this._events.filter((t => t.pollable())).length > 0;
        }
        _addEventListener(t, e, r) {
          const n = new N(A(t), e, r);
          return this._events.push(n), this._startEvent(n), this;
        }
        on(t, e) {
          return this._addEventListener(t, e, !1);
        }
        once(t, e) {
          return this._addEventListener(t, e, !0);
        }
        emit(t, ...e) {
          let r = !1;
          let n = [];
          let i = A(t);
          return this._events = this._events.filter((t => t.tag !== i || (setTimeout((() => {
            t.listener.apply(this, e);
          }), 0), r = !0, !t.once || (n.push(t), !1)))), n.forEach((t => {
            this._stopEvent(t);
          })), r;
        }
        listenerCount(t) {
          if (!t) return this._events.length;
          let e = A(t);
          return this._events.filter((t => t.tag === e)).length;
        }
        listeners(t) {
          if (null == t) return this._events.map((t => t.listener));
          let e = A(t);
          return this._events.filter((t => t.tag === e)).map((t => t.listener));
        }
        off(t, e) {
          if (null == e) return this.removeAllListeners(t);
          const r = [];
          let n = !1;
          let i = A(t);
          return this._events = this._events.filter((t => t.tag !== i || t.listener != e || (!!n || (n = !0, r.push(t), !1)))), r.forEach((t => {
            this._stopEvent(t);
          })), this;
        }
        removeAllListeners(t) {
          let e = [];
          if (null == t) e = this._events, this._events = []; else {
            const r = A(t);
            this._events = this._events.filter((t => t.tag !== r || (e.push(t), !1)));
          }
          return e.forEach((t => {
            this._stopEvent(t);
          })), this;
        }
      }
    },
    "./node_modules/@ethersproject/providers/lib.esm/formatter.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        Formatter: () => f,
        isCommunityResourcable: () => d,
        isCommunityResource: () => m,
        showThrottleMessage: () => p
      });
      var n = r("./node_modules/@ethersproject/address/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
      var o = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var s = r("./node_modules/@ethersproject/constants/lib.esm/addresses.js");
      var a = r("./node_modules/@ethersproject/properties/lib.esm/index.js");
      var l = r("./node_modules/@ethersproject/transactions/lib.esm/index.js");
      var h = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var u = r("./node_modules/@ethersproject/providers/lib.esm/_version.js");
      const c = new h.Logger(u.version);
      class f {
        constructor() {
          c.checkNew(new.target, f), this.formats = this.getDefaultFormats();
        }
        getDefaultFormats() {
          const t = {};
          const e = this.address.bind(this);
          const r = this.bigNumber.bind(this);
          const n = this.blockTag.bind(this);
          const i = this.data.bind(this);
          const o = this.hash.bind(this);
          const s = this.hex.bind(this);
          const l = this.number.bind(this);
          const h = this.type.bind(this);
          return t.transaction = {
            hash: o,
            type: h,
            accessList: f.allowNull(this.accessList.bind(this), null),
            blockHash: f.allowNull(o, null),
            blockNumber: f.allowNull(l, null),
            transactionIndex: f.allowNull(l, null),
            confirmations: f.allowNull(l, null),
            from: e,
            gasPrice: f.allowNull(r),
            maxPriorityFeePerGas: f.allowNull(r),
            maxFeePerGas: f.allowNull(r),
            gasLimit: r,
            to: f.allowNull(e, null),
            value: r,
            nonce: l,
            data: i,
            r: f.allowNull(this.uint256),
            s: f.allowNull(this.uint256),
            v: f.allowNull(l),
            creates: f.allowNull(e, null),
            raw: f.allowNull(i)
          }, t.transactionRequest = {
            from: f.allowNull(e),
            nonce: f.allowNull(l),
            gasLimit: f.allowNull(r),
            gasPrice: f.allowNull(r),
            maxPriorityFeePerGas: f.allowNull(r),
            maxFeePerGas: f.allowNull(r),
            to: f.allowNull(e),
            value: f.allowNull(r),
            data: f.allowNull((t => this.data(t, !0))),
            type: f.allowNull(l),
            accessList: f.allowNull(this.accessList.bind(this), null)
          }, t.receiptLog = {
            transactionIndex: l,
            blockNumber: l,
            transactionHash: o,
            address: e,
            topics: f.arrayOf(o),
            data: i,
            logIndex: l,
            blockHash: o
          }, t.receipt = {
            to: f.allowNull(this.address, null),
            from: f.allowNull(this.address, null),
            contractAddress: f.allowNull(e, null),
            transactionIndex: l,
            root: f.allowNull(s),
            gasUsed: r,
            logsBloom: f.allowNull(i),
            blockHash: o,
            transactionHash: o,
            logs: f.arrayOf(this.receiptLog.bind(this)),
            blockNumber: l,
            confirmations: f.allowNull(l, null),
            cumulativeGasUsed: r,
            effectiveGasPrice: f.allowNull(r),
            status: f.allowNull(l),
            type: h
          }, t.block = {
            hash: o,
            parentHash: o,
            number: l,
            timestamp: l,
            nonce: f.allowNull(s),
            difficulty: this.difficulty.bind(this),
            gasLimit: r,
            gasUsed: r,
            miner: e,
            extraData: i,
            transactions: f.allowNull(f.arrayOf(o)),
            baseFeePerGas: f.allowNull(r)
          }, t.blockWithTransactions = (0, a.shallowCopy)(t.block), t.blockWithTransactions.transactions = f.allowNull(f.arrayOf(this.transactionResponse.bind(this))), 
          t.filter = {
            fromBlock: f.allowNull(n, void 0),
            toBlock: f.allowNull(n, void 0),
            blockHash: f.allowNull(o, void 0),
            address: f.allowNull(e, void 0),
            topics: f.allowNull(this.topics.bind(this), void 0)
          }, t.filterLog = {
            blockNumber: f.allowNull(l),
            blockHash: f.allowNull(o),
            transactionIndex: l,
            removed: f.allowNull(this.boolean.bind(this)),
            address: e,
            data: f.allowFalsish(i, "0x"),
            topics: f.arrayOf(o),
            transactionHash: o,
            logIndex: l
          }, t;
        }
        accessList(t) {
          return (0, l.accessListify)(t || []);
        }
        number(t) {
          return "0x" === t ? 0 : i.BigNumber.from(t).toNumber();
        }
        type(t) {
          return "0x" === t || null == t ? 0 : i.BigNumber.from(t).toNumber();
        }
        bigNumber(t) {
          return i.BigNumber.from(t);
        }
        boolean(t) {
          if ("boolean" == typeof t) return t;
          if ("string" == typeof t) {
            if ("true" === (t = t.toLowerCase())) return !0;
            if ("false" === t) return !1;
          }
          throw new Error("invalid boolean - " + t);
        }
        hex(t, e) {
          return "string" == typeof t && (e || "0x" === t.substring(0, 2) || (t = "0x" + t), (0, o.isHexString)(t)) ? t.toLowerCase() : c.throwArgumentError("invalid hash", "value", t);
        }
        data(t, e) {
          const r = this.hex(t, e);
          if (r.length % 2 != 0) throw new Error("invalid data; odd-length - " + t);
          return r;
        }
        address(t) {
          return (0, n.getAddress)(t);
        }
        callAddress(t) {
          if (!(0, o.isHexString)(t, 32)) return null;
          const e = (0, n.getAddress)((0, o.hexDataSlice)(t, 12));
          return e === s.AddressZero ? null : e;
        }
        contractAddress(t) {
          return (0, n.getContractAddress)(t);
        }
        blockTag(t) {
          if (null == t) return "latest";
          if ("earliest" === t) return "0x0";
          if ("latest" === t || "pending" === t) return t;
          if ("number" == typeof t || (0, o.isHexString)(t)) return (0, o.hexValue)(t);
          throw new Error("invalid blockTag");
        }
        hash(t, e) {
          const r = this.hex(t, e);
          return 32 !== (0, o.hexDataLength)(r) ? c.throwArgumentError("invalid hash", "value", t) : r;
        }
        difficulty(t) {
          if (null == t) return null;
          const e = i.BigNumber.from(t);
          try {
            return e.toNumber();
          } catch (r) {}
          return null;
        }
        uint256(t) {
          if (!(0, o.isHexString)(t)) throw new Error("invalid uint256");
          return (0, o.hexZeroPad)(t, 32);
        }
        _block(t, e) {
          return null != t.author && null == t.miner && (t.miner = t.author), f.check(e, t);
        }
        block(t) {
          return this._block(t, this.formats.block);
        }
        blockWithTransactions(t) {
          return this._block(t, this.formats.blockWithTransactions);
        }
        transactionRequest(t) {
          return f.check(this.formats.transactionRequest, t);
        }
        transactionResponse(t) {
          null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas), t.to && i.BigNumber.from(t.to).isZero() && (t.to = "0x0000000000000000000000000000000000000000"), 
          null != t.input && null == t.data && (t.data = t.input), null == t.to && null == t.creates && (t.creates = this.contractAddress(t)), 
          1 !== t.type && 2 !== t.type || null != t.accessList || (t.accessList = []);
          const e = f.check(this.formats.transaction, t);
          if (null != t.chainId) {
            let r = t.chainId;
            (0, o.isHexString)(r) && (r = i.BigNumber.from(r).toNumber()), e.chainId = r;
          } else {
            let r = t.networkId;
            null == r && null == e.v && (r = t.chainId), (0, o.isHexString)(r) && (r = i.BigNumber.from(r).toNumber()), "number" != typeof r && null != e.v && (r = (e.v - 35) / 2, 
            r < 0 && (r = 0), r = parseInt(r)), "number" != typeof r && (r = 0), e.chainId = r;
          }
          return e.blockHash && "x" === e.blockHash.replace(/0/g, "") && (e.blockHash = null), e;
        }
        transaction(t) {
          return (0, l.parse)(t);
        }
        receiptLog(t) {
          return f.check(this.formats.receiptLog, t);
        }
        receipt(t) {
          const e = f.check(this.formats.receipt, t);
          if (null != e.root) if (e.root.length <= 4) {
            const t = i.BigNumber.from(e.root).toNumber();
            0 === t || 1 === t ? (null != e.status && e.status !== t && c.throwArgumentError("alt-root-status/status mismatch", "value", {
              root: e.root,
              status: e.status
            }), e.status = t, delete e.root) : c.throwArgumentError("invalid alt-root-status", "value.root", e.root);
          } else 66 !== e.root.length && c.throwArgumentError("invalid root hash", "value.root", e.root);
          return null != e.status && (e.byzantium = !0), e;
        }
        topics(t) {
          return Array.isArray(t) ? t.map((t => this.topics(t))) : null != t ? this.hash(t, !0) : null;
        }
        filter(t) {
          return f.check(this.formats.filter, t);
        }
        filterLog(t) {
          return f.check(this.formats.filterLog, t);
        }
        static check(t, e) {
          const r = {};
          for (const i in t) try {
            const n = t[i](e[i]);
            void 0 !== n && (r[i] = n);
          } catch (n) {
            throw n.checkKey = i, n.checkValue = e[i], n;
          }
          return r;
        }
        static allowNull(t, e) {
          return function(r) {
            return null == r ? e : t(r);
          };
        }
        static allowFalsish(t, e) {
          return function(r) {
            return r ? t(r) : e;
          };
        }
        static arrayOf(t) {
          return function(e) {
            if (!Array.isArray(e)) throw new Error("not an array");
            const r = [];
            return e.forEach((function(e) {
              r.push(t(e));
            })), r;
          };
        }
      }
      function d(t) {
        return t && "function" == typeof t.isCommunityResource;
      }
      function m(t) {
        return d(t) && t.isCommunityResource();
      }
      let g = !1;
      function p() {
        g || (g = !0, console.log("========= NOTICE ========="), console.log("Request-Rate Exceeded  (this message will not be repeated)"), 
        console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), 
        console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), 
        console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.io/api-keys/"), 
        console.log("=========================="));
      }
    },
    "./node_modules/@ethersproject/providers/lib.esm/json-rpc-provider.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        JsonRpcSigner: () => x,
        JsonRpcProvider: () => E
      });
      var n = r("./node_modules/@ethersproject/abstract-signer/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
      var o = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var s = r("./node_modules/@ethersproject/hash/lib.esm/typed-data.js");
      var a = r("./node_modules/@ethersproject/properties/lib.esm/index.js");
      var l = r("./node_modules/@ethersproject/strings/lib.esm/utf8.js");
      var h = r("./node_modules/@ethersproject/transactions/lib.esm/index.js");
      var u = r("./node_modules/@ethersproject/web/lib.esm/index.js");
      var c = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var f = r("./node_modules/@ethersproject/providers/lib.esm/_version.js");
      var d = r("./node_modules/@ethersproject/providers/lib.esm/base-provider.js");
      var m = function(t, e, r, n) {
        return new (r || (r = Promise))((function(i, o) {
          function s(t) {
            try {
              l(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              l(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function l(t) {
            t.done ? i(t.value) : function(t) {
              return t instanceof r ? t : new r((function(e) {
                e(t);
              }));
            }(t.value).then(s, a);
          }
          l((n = n.apply(t, e || [])).next());
        }));
      };
      const g = new c.Logger(f.version);
      const p = [ "call", "estimateGas" ];
      function v(t, e, r) {
        if ("call" === t && e.code === c.Logger.errors.SERVER_ERROR) {
          const t = e.error;
          if (t && t.message.match("reverted") && (0, o.isHexString)(t.data)) return t.data;
          g.throwError("missing revert data in call exception", c.Logger.errors.CALL_EXCEPTION, {
            error: e,
            data: "0x"
          });
        }
        let n = e.message;
        e.code === c.Logger.errors.SERVER_ERROR && e.error && "string" == typeof e.error.message ? n = e.error.message : "string" == typeof e.body ? n = e.body : "string" == typeof e.responseText && (n = e.responseText), 
        n = (n || "").toLowerCase();
        const i = r.transaction || r.signedTransaction;
        throw n.match(/insufficient funds|base fee exceeds gas limit/) && g.throwError("insufficient funds for intrinsic transaction cost", c.Logger.errors.INSUFFICIENT_FUNDS, {
          error: e,
          method: t,
          transaction: i
        }), n.match(/nonce too low/) && g.throwError("nonce has already been used", c.Logger.errors.NONCE_EXPIRED, {
          error: e,
          method: t,
          transaction: i
        }), n.match(/replacement transaction underpriced/) && g.throwError("replacement fee too low", c.Logger.errors.REPLACEMENT_UNDERPRICED, {
          error: e,
          method: t,
          transaction: i
        }), n.match(/only replay-protected/) && g.throwError("legacy pre-eip-155 transactions not supported", c.Logger.errors.UNSUPPORTED_OPERATION, {
          error: e,
          method: t,
          transaction: i
        }), p.indexOf(t) >= 0 && n.match(/gas required exceeds allowance|always failing transaction|execution reverted/) && g.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", c.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
          error: e,
          method: t,
          transaction: i
        }), e;
      }
      function y(t) {
        return new Promise((function(e) {
          setTimeout(e, t);
        }));
      }
      function b(t) {
        if (t.error) {
          const e = new Error(t.error.message);
          throw e.code = t.error.code, e.data = t.error.data, e;
        }
        return t.result;
      }
      function w(t) {
        return t ? t.toLowerCase() : t;
      }
      const k = {};
      class x extends n.Signer {
        constructor(t, e, r) {
          if (g.checkNew(new.target, x), super(), t !== k) throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
          (0, a.defineReadOnly)(this, "provider", e), null == r && (r = 0), "string" == typeof r ? ((0, a.defineReadOnly)(this, "_address", this.provider.formatter.address(r)), 
          (0, a.defineReadOnly)(this, "_index", null)) : "number" == typeof r ? ((0, a.defineReadOnly)(this, "_index", r), (0, a.defineReadOnly)(this, "_address", null)) : g.throwArgumentError("invalid address or index", "addressOrIndex", r);
        }
        connect(t) {
          return g.throwError("cannot alter JSON-RPC Signer connection", c.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "connect"
          });
        }
        connectUnchecked() {
          return new A(k, this.provider, this._address || this._index);
        }
        getAddress() {
          return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then((t => (t.length <= this._index && g.throwError("unknown account #" + this._index, c.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "getAddress"
          }), this.provider.formatter.address(t[this._index]))));
        }
        sendUncheckedTransaction(t) {
          t = (0, a.shallowCopy)(t);
          const e = this.getAddress().then((t => (t && (t = t.toLowerCase()), t)));
          if (null == t.gasLimit) {
            const r = (0, a.shallowCopy)(t);
            r.from = e, t.gasLimit = this.provider.estimateGas(r);
          }
          return null != t.to && (t.to = Promise.resolve(t.to).then((t => m(this, void 0, void 0, (function*() {
            if (null == t) return null;
            const e = yield this.provider.resolveName(t);
            return null == e && g.throwArgumentError("provided ENS name resolves to null", "tx.to", t), e;
          }))))), (0, a.resolveProperties)({
            tx: (0, a.resolveProperties)(t),
            sender: e
          }).then((({tx: e, sender: r}) => {
            null != e.from ? e.from.toLowerCase() !== r && g.throwArgumentError("from address mismatch", "transaction", t) : e.from = r;
            const n = this.provider.constructor.hexlifyTransaction(e, {
              from: !0
            });
            return this.provider.send("eth_sendTransaction", [ n ]).then((t => t), (t => v("sendTransaction", t, n)));
          }));
        }
        signTransaction(t) {
          return g.throwError("signing transactions is unsupported", c.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "signTransaction"
          });
        }
        sendTransaction(t) {
          return m(this, void 0, void 0, (function*() {
            const e = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval);
            const r = yield this.sendUncheckedTransaction(t);
            try {
              return yield (0, u.poll)((() => m(this, void 0, void 0, (function*() {
                const t = yield this.provider.getTransaction(r);
                if (null !== t) return this.provider._wrapTransaction(t, r, e);
              }))), {
                oncePoll: this.provider
              });
            } catch (n) {
              throw n.transactionHash = r, n;
            }
          }));
        }
        signMessage(t) {
          return m(this, void 0, void 0, (function*() {
            const e = "string" == typeof t ? (0, l.toUtf8Bytes)(t) : t;
            const r = yield this.getAddress();
            return yield this.provider.send("eth_sign", [ r.toLowerCase(), (0, o.hexlify)(e) ]);
          }));
        }
        _signTypedData(t, e, r) {
          return m(this, void 0, void 0, (function*() {
            const n = yield s.TypedDataEncoder.resolveNames(t, e, r, (t => this.provider.resolveName(t)));
            const i = yield this.getAddress();
            return yield this.provider.send("eth_signTypedData_v4", [ i.toLowerCase(), JSON.stringify(s.TypedDataEncoder.getPayload(n.domain, e, n.value)) ]);
          }));
        }
        unlock(t) {
          return m(this, void 0, void 0, (function*() {
            const e = this.provider;
            const r = yield this.getAddress();
            return e.send("personal_unlockAccount", [ r.toLowerCase(), t, null ]);
          }));
        }
      }
      class A extends x {
        sendTransaction(t) {
          return this.sendUncheckedTransaction(t).then((t => ({
            hash: t,
            nonce: null,
            gasLimit: null,
            gasPrice: null,
            data: null,
            value: null,
            chainId: null,
            confirmations: 0,
            from: null,
            wait: e => this.provider.waitForTransaction(t, e)
          })));
        }
      }
      const B = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0,
        type: !0,
        accessList: !0,
        maxFeePerGas: !0,
        maxPriorityFeePerGas: !0
      };
      class E extends d.BaseProvider {
        constructor(t, e) {
          g.checkNew(new.target, E);
          let r = e;
          null == r && (r = new Promise(((t, e) => {
            setTimeout((() => {
              this.detectNetwork().then((e => {
                t(e);
              }), (t => {
                e(t);
              }));
            }), 0);
          }))), super(r), t || (t = (0, a.getStatic)(this.constructor, "defaultUrl")()), "string" == typeof t ? (0, a.defineReadOnly)(this, "connection", Object.freeze({
            url: t
          })) : (0, a.defineReadOnly)(this, "connection", Object.freeze((0, a.shallowCopy)(t))), this._nextId = 42;
        }
        get _cache() {
          return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache;
        }
        static defaultUrl() {
          return "http://localhost:8545";
        }
        detectNetwork() {
          return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(), setTimeout((() => {
            this._cache.detectNetwork = null;
          }), 0)), this._cache.detectNetwork;
        }
        _uncachedDetectNetwork() {
          return m(this, void 0, void 0, (function*() {
            yield y(0);
            let t = null;
            try {
              t = yield this.send("eth_chainId", []);
            } catch (e) {
              try {
                t = yield this.send("net_version", []);
              } catch (e) {}
            }
            if (null != t) {
              const r = (0, a.getStatic)(this.constructor, "getNetwork");
              try {
                return r(i.BigNumber.from(t).toNumber());
              } catch (e) {
                return g.throwError("could not detect network", c.Logger.errors.NETWORK_ERROR, {
                  chainId: t,
                  event: "invalidNetwork",
                  serverError: e
                });
              }
            }
            return g.throwError("could not detect network", c.Logger.errors.NETWORK_ERROR, {
              event: "noNetwork"
            });
          }));
        }
        getSigner(t) {
          return new x(k, this, t);
        }
        getUncheckedSigner(t) {
          return this.getSigner(t).connectUnchecked();
        }
        listAccounts() {
          return this.send("eth_accounts", []).then((t => t.map((t => this.formatter.address(t)))));
        }
        send(t, e) {
          const r = {
            method: t,
            params: e,
            id: this._nextId++,
            jsonrpc: "2.0"
          };
          this.emit("debug", {
            action: "request",
            request: (0, a.deepCopy)(r),
            provider: this
          });
          const n = [ "eth_chainId", "eth_blockNumber" ].indexOf(t) >= 0;
          if (n && this._cache[t]) return this._cache[t];
          const i = (0, u.fetchJson)(this.connection, JSON.stringify(r), b).then((t => (this.emit("debug", {
            action: "response",
            request: r,
            response: t,
            provider: this
          }), t)), (t => {
            throw this.emit("debug", {
              action: "response",
              error: t,
              request: r,
              provider: this
            }), t;
          }));
          return n && (this._cache[t] = i, setTimeout((() => {
            this._cache[t] = null;
          }), 0)), i;
        }
        prepareRequest(t, e) {
          switch (t) {
           case "getBlockNumber":
            return [ "eth_blockNumber", [] ];

           case "getGasPrice":
            return [ "eth_gasPrice", [] ];

           case "getBalance":
            return [ "eth_getBalance", [ w(e.address), e.blockTag ] ];

           case "getTransactionCount":
            return [ "eth_getTransactionCount", [ w(e.address), e.blockTag ] ];

           case "getCode":
            return [ "eth_getCode", [ w(e.address), e.blockTag ] ];

           case "getStorageAt":
            return [ "eth_getStorageAt", [ w(e.address), e.position, e.blockTag ] ];

           case "sendTransaction":
            return [ "eth_sendRawTransaction", [ e.signedTransaction ] ];

           case "getBlock":
            return e.blockTag ? [ "eth_getBlockByNumber", [ e.blockTag, !!e.includeTransactions ] ] : e.blockHash ? [ "eth_getBlockByHash", [ e.blockHash, !!e.includeTransactions ] ] : null;

           case "getTransaction":
            return [ "eth_getTransactionByHash", [ e.transactionHash ] ];

           case "getTransactionReceipt":
            return [ "eth_getTransactionReceipt", [ e.transactionHash ] ];

           case "call":
            return [ "eth_call", [ (0, a.getStatic)(this.constructor, "hexlifyTransaction")(e.transaction, {
              from: !0
            }), e.blockTag ] ];

           case "estimateGas":
            return [ "eth_estimateGas", [ (0, a.getStatic)(this.constructor, "hexlifyTransaction")(e.transaction, {
              from: !0
            }) ] ];

           case "getLogs":
            return e.filter && null != e.filter.address && (e.filter.address = w(e.filter.address)), [ "eth_getLogs", [ e.filter ] ];
          }
          return null;
        }
        perform(t, e) {
          return m(this, void 0, void 0, (function*() {
            if ("call" === t || "estimateGas" === t) {
              const t = e.transaction;
              if (t && null != t.type && i.BigNumber.from(t.type).isZero() && null == t.maxFeePerGas && null == t.maxPriorityFeePerGas) {
                const r = yield this.getFeeData();
                null == r.maxFeePerGas && null == r.maxPriorityFeePerGas && ((e = (0, a.shallowCopy)(e)).transaction = (0, a.shallowCopy)(t), 
                delete e.transaction.type);
              }
            }
            const r = this.prepareRequest(t, e);
            null == r && g.throwError(t + " not implemented", c.Logger.errors.NOT_IMPLEMENTED, {
              operation: t
            });
            try {
              return yield this.send(r[0], r[1]);
            } catch (n) {
              return v(t, n, e);
            }
          }));
        }
        _startEvent(t) {
          "pending" === t.tag && this._startPending(), super._startEvent(t);
        }
        _startPending() {
          if (null != this._pendingFilter) return;
          const t = this;
          const e = this.send("eth_newPendingTransactionFilter", []);
          this._pendingFilter = e, e.then((function(r) {
            return function n() {
              t.send("eth_getFilterChanges", [ r ]).then((function(r) {
                if (t._pendingFilter != e) return null;
                let n = Promise.resolve();
                return r.forEach((function(e) {
                  t._emitted["t:" + e.toLowerCase()] = "pending", n = n.then((function() {
                    return t.getTransaction(e).then((function(e) {
                      return t.emit("pending", e), null;
                    }));
                  }));
                })), n.then((function() {
                  return y(1e3);
                }));
              })).then((function() {
                if (t._pendingFilter == e) return setTimeout((function() {
                  n();
                }), 0), null;
                t.send("eth_uninstallFilter", [ r ]);
              })).catch((t => {}));
            }(), r;
          })).catch((t => {}));
        }
        _stopEvent(t) {
          "pending" === t.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null), super._stopEvent(t);
        }
        static hexlifyTransaction(t, e) {
          const r = (0, a.shallowCopy)(B);
          if (e) for (const i in e) e[i] && (r[i] = !0);
          (0, a.checkProperties)(t, r);
          const n = {};
          return [ "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value" ].forEach((function(e) {
            if (null == t[e]) return;
            const r = (0, o.hexValue)(t[e]);
            "gasLimit" === e && (e = "gas"), n[e] = r;
          })), [ "from", "to", "data" ].forEach((function(e) {
            null != t[e] && (n[e] = (0, o.hexlify)(t[e]));
          })), t.accessList && (n.accessList = (0, h.accessListify)(t.accessList)), n;
        }
      }
    },
    "./node_modules/@ethersproject/providers/lib.esm/web3-provider.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        Web3Provider: () => u
      });
      var n = r("./node_modules/@ethersproject/properties/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var o = r("./node_modules/@ethersproject/providers/lib.esm/_version.js");
      var s = r("./node_modules/@ethersproject/providers/lib.esm/json-rpc-provider.js");
      const a = new i.Logger(o.version);
      let l = 1;
      function h(t, e) {
        const r = "Web3LegacyFetcher";
        return function(i, o) {
          "eth_sign" == i && (t.isMetaMask || t.isStatus) && (i = "personal_sign", o = [ o[1], o[0] ]);
          const s = {
            method: i,
            params: o,
            id: l++,
            jsonrpc: "2.0"
          };
          return new Promise(((t, i) => {
            this.emit("debug", {
              action: "request",
              fetcher: r,
              request: (0, n.deepCopy)(s),
              provider: this
            }), e(s, ((e, n) => {
              if (e) return this.emit("debug", {
                action: "response",
                fetcher: r,
                error: e,
                request: s,
                provider: this
              }), i(e);
              if (this.emit("debug", {
                action: "response",
                fetcher: r,
                request: s,
                response: n,
                provider: this
              }), n.error) {
                const t = new Error(n.error.message);
                return t.code = n.error.code, t.data = n.error.data, i(t);
              }
              t(n.result);
            }));
          }));
        };
      }
      class u extends s.JsonRpcProvider {
        constructor(t, e) {
          a.checkNew(new.target, u), null == t && a.throwArgumentError("missing provider", "provider", t);
          let r = null;
          let i = null;
          let o = null;
          "function" == typeof t ? (r = "unknown:", i = t) : (r = t.host || t.path || "", !r && t.isMetaMask && (r = "metamask"), 
          o = t, t.request ? ("" === r && (r = "eip-1193:"), i = function(t) {
            return function(e, r) {
              null == r && (r = []), "eth_sign" == e && (t.isMetaMask || t.isStatus) && (e = "personal_sign", r = [ r[1], r[0] ]);
              const i = {
                method: e,
                params: r
              };
              return this.emit("debug", {
                action: "request",
                fetcher: "Eip1193Fetcher",
                request: (0, n.deepCopy)(i),
                provider: this
              }), t.request(i).then((t => (this.emit("debug", {
                action: "response",
                fetcher: "Eip1193Fetcher",
                request: i,
                response: t,
                provider: this
              }), t)), (t => {
                throw this.emit("debug", {
                  action: "response",
                  fetcher: "Eip1193Fetcher",
                  request: i,
                  error: t,
                  provider: this
                }), t;
              }));
            };
          }(t)) : t.sendAsync ? i = h(t, t.sendAsync.bind(t)) : t.send ? i = h(t, t.send.bind(t)) : a.throwArgumentError("unsupported provider", "provider", t), 
          r || (r = "unknown:")), super(r, e), (0, n.defineReadOnly)(this, "jsonRpcFetchFunc", i), (0, n.defineReadOnly)(this, "provider", o);
        }
        send(t, e) {
          return this.jsonRpcFetchFunc(t, e);
        }
      }
    },
    "./node_modules/@ethersproject/rlp/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "rlp/5.4.0";
    },
    "./node_modules/@ethersproject/rlp/lib.esm/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        encode: () => u,
        decode: () => d
      });
      var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var o = r("./node_modules/@ethersproject/rlp/lib.esm/_version.js");
      const s = new i.Logger(o.version);
      function a(t) {
        const e = [];
        for (;t; ) e.unshift(255 & t), t >>= 8;
        return e;
      }
      function l(t, e, r) {
        let n = 0;
        for (let i = 0; i < r; i++) n = 256 * n + t[e + i];
        return n;
      }
      function h(t) {
        if (Array.isArray(t)) {
          let e = [];
          if (t.forEach((function(t) {
            e = e.concat(h(t));
          })), e.length <= 55) return e.unshift(192 + e.length), e;
          const r = a(e.length);
          return r.unshift(247 + r.length), r.concat(e);
        }
        (0, n.isBytesLike)(t) || s.throwArgumentError("RLP object must be BytesLike", "object", t);
        const e = Array.prototype.slice.call((0, n.arrayify)(t));
        if (1 === e.length && e[0] <= 127) return e;
        if (e.length <= 55) return e.unshift(128 + e.length), e;
        const r = a(e.length);
        return r.unshift(183 + r.length), r.concat(e);
      }
      function u(t) {
        return (0, n.hexlify)(h(t));
      }
      function c(t, e, r, n) {
        const o = [];
        for (;r < e + 1 + n; ) {
          const a = f(t, r);
          o.push(a.result), (r += a.consumed) > e + 1 + n && s.throwError("child data too short", i.Logger.errors.BUFFER_OVERRUN, {});
        }
        return {
          consumed: 1 + n,
          result: o
        };
      }
      function f(t, e) {
        if (0 === t.length && s.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {}), t[e] >= 248) {
          const r = t[e] - 247;
          e + 1 + r > t.length && s.throwError("data short segment too short", i.Logger.errors.BUFFER_OVERRUN, {});
          const n = l(t, e + 1, r);
          return e + 1 + r + n > t.length && s.throwError("data long segment too short", i.Logger.errors.BUFFER_OVERRUN, {}), c(t, e, e + 1 + r, r + n);
        }
        if (t[e] >= 192) {
          const r = t[e] - 192;
          return e + 1 + r > t.length && s.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {}), c(t, e, e + 1, r);
        }
        if (t[e] >= 184) {
          const r = t[e] - 183;
          e + 1 + r > t.length && s.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {});
          const o = l(t, e + 1, r);
          e + 1 + r + o > t.length && s.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {});
          return {
            consumed: 1 + r + o,
            result: (0, n.hexlify)(t.slice(e + 1 + r, e + 1 + r + o))
          };
        }
        if (t[e] >= 128) {
          const r = t[e] - 128;
          e + 1 + r > t.length && s.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {});
          return {
            consumed: 1 + r,
            result: (0, n.hexlify)(t.slice(e + 1, e + 1 + r))
          };
        }
        return {
          consumed: 1,
          result: (0, n.hexlify)(t[e])
        };
      }
      function d(t) {
        const e = (0, n.arrayify)(t);
        const r = f(e, 0);
        return r.consumed !== e.length && s.throwArgumentError("invalid rlp data", "data", t), r.result;
      }
    },
    "./node_modules/@ethersproject/sha2/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "sha2/5.4.0";
    },
    "./node_modules/@ethersproject/sha2/lib.esm/sha2.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        ripemd160: () => u,
        sha256: () => c,
        sha512: () => f,
        computeHmac: () => d
      });
      var n = r("./node_modules/hash.js/lib/hash.js");
      var i = r.n(n);
      var o = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var s = r("./node_modules/@ethersproject/sha2/lib.esm/types.js");
      var a = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var l = r("./node_modules/@ethersproject/sha2/lib.esm/_version.js");
      const h = new a.Logger(l.version);
      function u(t) {
        return "0x" + i().ripemd160().update((0, o.arrayify)(t)).digest("hex");
      }
      function c(t) {
        return "0x" + i().sha256().update((0, o.arrayify)(t)).digest("hex");
      }
      function f(t) {
        return "0x" + i().sha512().update((0, o.arrayify)(t)).digest("hex");
      }
      function d(t, e, r) {
        return s.SupportedAlgorithm[t] || h.throwError("unsupported algorithm " + t, a.Logger.errors.UNSUPPORTED_OPERATION, {
          operation: "hmac",
          algorithm: t
        }), "0x" + i().hmac(i()[t], (0, o.arrayify)(e)).update((0, o.arrayify)(r)).digest("hex");
      }
    },
    "./node_modules/@ethersproject/sha2/lib.esm/types.js": (t, e, r) => {
      "use strict";
      var n;
      r.r(e), r.d(e, {
        SupportedAlgorithm: () => n
      }), function(t) {
        t.sha256 = "sha256", t.sha512 = "sha512";
      }(n || (n = {}));
    },
    "./node_modules/@ethersproject/signing-key/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "signing-key/5.4.0";
    },
    "./node_modules/@ethersproject/signing-key/lib.esm/elliptic.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        EC: () => z
      });
      var n = r("./node_modules/bn.js/lib/bn.js");
      var i = r.n(n);
      var o = r("./node_modules/hash.js/lib/hash.js");
      var s = r.n(o);
      'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== r.g ? r.g : 'undefined' != typeof self && self;
      function a(t, e, r) {
        return r = {
          path: e,
          exports: {},
          require: function(t, e) {
            return function() {
              throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
            }(null == e && r.path);
          }
        }, t(r, r.exports), r.exports;
      }
      var l = h;
      function h(t, e) {
        if (!t) throw new Error(e || 'Assertion failed');
      }
      h.equal = function(t, e, r) {
        if (t != e) throw new Error(r || 'Assertion failed: ' + t + ' != ' + e);
      };
      var u = a((function(t, e) {
        var r = e;
        function n(t) {
          return 1 === t.length ? '0' + t : t;
        }
        function i(t) {
          var e = '';
          for (var r = 0; r < t.length; r++) e += n(t[r].toString(16));
          return e;
        }
        r.toArray = function(t, e) {
          if (Array.isArray(t)) return t.slice();
          if (!t) return [];
          var r = [];
          if ('string' != typeof t) {
            for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];
            return r;
          }
          if ('hex' === e) {
            (t = t.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (t = '0' + t);
            for (n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16));
          } else for (n = 0; n < t.length; n++) {
            var i = t.charCodeAt(n);
            var o = i >> 8;
            var s = 255 & i;
            o ? r.push(o, s) : r.push(s);
          }
          return r;
        }, r.zero2 = n, r.toHex = i, r.encode = function(t, e) {
          return 'hex' === e ? i(t) : t;
        };
      }));
      var c = a((function(t, e) {
        var r = e;
        r.assert = l, r.toArray = u.toArray, r.zero2 = u.zero2, r.toHex = u.toHex, r.encode = u.encode, r.getNAF = function(t, e, r) {
          var n = new Array(Math.max(t.bitLength(), r) + 1);
          n.fill(0);
          var i = 1 << e + 1;
          var o = t.clone();
          for (var s = 0; s < n.length; s++) {
            var a;
            var l = o.andln(i - 1);
            o.isOdd() ? (a = l > (i >> 1) - 1 ? (i >> 1) - l : l, o.isubn(a)) : a = 0, n[s] = a, o.iushrn(1);
          }
          return n;
        }, r.getJSF = function(t, e) {
          var r = [ [], [] ];
          t = t.clone(), e = e.clone();
          var n = 0;
          var i = 0;
          var o;
          for (;t.cmpn(-n) > 0 || e.cmpn(-i) > 0; ) {
            var s = t.andln(3) + n & 3;
            var a = e.andln(3) + i & 3;
            var l;
            var h;
            3 === s && (s = -1), 3 === a && (a = -1), l = 0 == (1 & s) ? 0 : 3 !== (o = t.andln(7) + n & 7) && 5 !== o || 2 !== a ? s : -s, 
            r[0].push(l), h = 0 == (1 & a) ? 0 : 3 !== (o = e.andln(7) + i & 7) && 5 !== o || 2 !== s ? a : -a, r[1].push(h), 2 * n === l + 1 && (n = 1 - n), 
            2 * i === h + 1 && (i = 1 - i), t.iushrn(1), e.iushrn(1);
          }
          return r;
        }, r.cachedProperty = function(t, e, r) {
          var n = '_' + e;
          t.prototype[e] = function() {
            return void 0 !== this[n] ? this[n] : this[n] = r.call(this);
          };
        }, r.parseBytes = function(t) {
          return 'string' == typeof t ? r.toArray(t, 'hex') : t;
        }, r.intFromLE = function(t) {
          return new (i())(t, 'hex', 'le');
        };
      }));
      var f = c.getNAF;
      var d = c.getJSF;
      var m = c.assert;
      function g(t, e) {
        this.type = t, this.p = new (i())(e.p, 16), this.red = e.prime ? i().red(e.prime) : i().mont(this.p), this.zero = new (i())(0).toRed(this.red), 
        this.one = new (i())(1).toRed(this.red), this.two = new (i())(2).toRed(this.red), this.n = e.n && new (i())(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), 
        this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
      }
      var p = g;
      function v(t, e) {
        this.curve = t, this.type = e, this.precomputed = null;
      }
      g.prototype.point = function() {
        throw new Error('Not implemented');
      }, g.prototype.validate = function() {
        throw new Error('Not implemented');
      }, g.prototype._fixedNafMul = function(t, e) {
        m(t.precomputed);
        var r = t._getDoubles();
        var n = f(e, 1, this._bitLength);
        var i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
        i /= 3;
        var o = [];
        var s;
        var a;
        for (s = 0; s < n.length; s += r.step) {
          a = 0;
          for (var l = s + r.step - 1; l >= s; l--) a = (a << 1) + n[l];
          o.push(a);
        }
        var h = this.jpoint(null, null, null);
        var u = this.jpoint(null, null, null);
        for (var c = i; c > 0; c--) {
          for (s = 0; s < o.length; s++) (a = o[s]) === c ? u = u.mixedAdd(r.points[s]) : a === -c && (u = u.mixedAdd(r.points[s].neg()));
          h = h.add(u);
        }
        return h.toP();
      }, g.prototype._wnafMul = function(t, e) {
        var r = 4;
        var n = t._getNAFPoints(r);
        r = n.wnd;
        var i = n.points;
        var o = f(e, r, this._bitLength);
        var s = this.jpoint(null, null, null);
        for (var a = o.length - 1; a >= 0; a--) {
          for (var l = 0; a >= 0 && 0 === o[a]; a--) l++;
          if (a >= 0 && l++, s = s.dblp(l), a < 0) break;
          var h = o[a];
          m(0 !== h), s = 'affine' === t.type ? h > 0 ? s.mixedAdd(i[h - 1 >> 1]) : s.mixedAdd(i[-h - 1 >> 1].neg()) : h > 0 ? s.add(i[h - 1 >> 1]) : s.add(i[-h - 1 >> 1].neg());
        }
        return 'affine' === t.type ? s.toP() : s;
      }, g.prototype._wnafMulAdd = function(t, e, r, n, i) {
        var o = this._wnafT1;
        var s = this._wnafT2;
        var a = this._wnafT3;
        var l = 0;
        var h;
        var u;
        var c;
        for (h = 0; h < n; h++) {
          var m = (c = e[h])._getNAFPoints(t);
          o[h] = m.wnd, s[h] = m.points;
        }
        for (h = n - 1; h >= 1; h -= 2) {
          var g = h - 1;
          var p = h;
          if (1 === o[g] && 1 === o[p]) {
            var v = [ e[g], null, null, e[p] ];
            0 === e[g].y.cmp(e[p].y) ? (v[1] = e[g].add(e[p]), v[2] = e[g].toJ().mixedAdd(e[p].neg())) : 0 === e[g].y.cmp(e[p].y.redNeg()) ? (v[1] = e[g].toJ().mixedAdd(e[p]), 
            v[2] = e[g].add(e[p].neg())) : (v[1] = e[g].toJ().mixedAdd(e[p]), v[2] = e[g].toJ().mixedAdd(e[p].neg()));
            var y = [ -3, -1, -5, -7, 0, 7, 5, 1, 3 ];
            var b = d(r[g], r[p]);
            for (l = Math.max(b[0].length, l), a[g] = new Array(l), a[p] = new Array(l), u = 0; u < l; u++) {
              var w = 0 | b[0][u];
              var k = 0 | b[1][u];
              a[g][u] = y[3 * (w + 1) + (k + 1)], a[p][u] = 0, s[g] = v;
            }
          } else a[g] = f(r[g], o[g], this._bitLength), a[p] = f(r[p], o[p], this._bitLength), l = Math.max(a[g].length, l), l = Math.max(a[p].length, l);
        }
        var x = this.jpoint(null, null, null);
        var A = this._wnafT4;
        for (h = l; h >= 0; h--) {
          var B = 0;
          for (;h >= 0; ) {
            var E = !0;
            for (u = 0; u < n; u++) A[u] = 0 | a[u][h], 0 !== A[u] && (E = !1);
            if (!E) break;
            B++, h--;
          }
          if (h >= 0 && B++, x = x.dblp(B), h < 0) break;
          for (u = 0; u < n; u++) {
            var _ = A[u];
            0 !== _ && (_ > 0 ? c = s[u][_ - 1 >> 1] : _ < 0 && (c = s[u][-_ - 1 >> 1].neg()), x = 'affine' === c.type ? x.mixedAdd(c) : x.add(c));
          }
        }
        for (h = 0; h < n; h++) s[h] = null;
        return i ? x : x.toP();
      }, g.BasePoint = v, v.prototype.eq = function() {
        throw new Error('Not implemented');
      }, v.prototype.validate = function() {
        return this.curve.validate(this);
      }, g.prototype.decodePoint = function(t, e) {
        t = c.toArray(t, e);
        var r = this.p.byteLength();
        if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r) return 6 === t[0] ? m(t[t.length - 1] % 2 == 0) : 7 === t[0] && m(t[t.length - 1] % 2 == 1), 
        this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
        if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
        throw new Error('Unknown point format');
      }, v.prototype.encodeCompressed = function(t) {
        return this.encode(t, !0);
      }, v.prototype._encode = function(t) {
        var e = this.curve.p.byteLength();
        var r = this.getX().toArray('be', e);
        return t ? [ this.getY().isEven() ? 2 : 3 ].concat(r) : [ 4 ].concat(r, this.getY().toArray('be', e));
      }, v.prototype.encode = function(t, e) {
        return c.encode(this._encode(e), t);
      }, v.prototype.precompute = function(t) {
        if (this.precomputed) return this;
        var e = {
          doubles: null,
          naf: null,
          beta: null
        };
        return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, 
        this;
      }, v.prototype._hasDoubles = function(t) {
        if (!this.precomputed) return !1;
        var e = this.precomputed.doubles;
        return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step);
      }, v.prototype._getDoubles = function(t, e) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
        var r = [ this ];
        var n = this;
        for (var i = 0; i < e; i += t) {
          for (var o = 0; o < t; o++) n = n.dbl();
          r.push(n);
        }
        return {
          step: t,
          points: r
        };
      }, v.prototype._getNAFPoints = function(t) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
        var e = [ this ];
        var r = (1 << t) - 1;
        var n = 1 === r ? null : this.dbl();
        for (var i = 1; i < r; i++) e[i] = e[i - 1].add(n);
        return {
          wnd: t,
          points: e
        };
      }, v.prototype._getBeta = function() {
        return null;
      }, v.prototype.dblp = function(t) {
        var e = this;
        for (var r = 0; r < t; r++) e = e.dbl();
        return e;
      };
      var y = a((function(t) {
        'function' == typeof Object.create ? t.exports = function(t, e) {
          e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }));
        } : t.exports = function(t, e) {
          if (e) {
            t.super_ = e;
            var r = function() {};
            r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t;
          }
        };
      }));
      var b = c.assert;
      function w(t) {
        p.call(this, 'short', t), this.a = new (i())(t.a, 16).toRed(this.red), this.b = new (i())(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), 
        this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), 
        this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
      }
      y(w, p);
      var k = w;
      function x(t, e, r, n) {
        p.BasePoint.call(this, t, 'affine'), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new (i())(e, 16), 
        this.y = new (i())(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), 
        this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
      }
      function A(t, e, r, n) {
        p.BasePoint.call(this, t, 'jacobian'), null === e && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, 
        this.z = new (i())(0)) : (this.x = new (i())(e, 16), this.y = new (i())(r, 16), this.z = new (i())(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), 
        this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
      }
      w.prototype._getEndomorphism = function(t) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
          var e;
          var r;
          if (t.beta) e = new (i())(t.beta, 16).toRed(this.red); else {
            var n = this._getEndoRoots(this.p);
            e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
          }
          if (t.lambda) r = new (i())(t.lambda, 16); else {
            var o = this._getEndoRoots(this.n);
            0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e)) ? r = o[0] : (r = o[1], b(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
          }
          return {
            beta: e,
            lambda: r,
            basis: t.basis ? t.basis.map((function(t) {
              return {
                a: new (i())(t.a, 16),
                b: new (i())(t.b, 16)
              };
            })) : this._getEndoBasis(r)
          };
        }
      }, w.prototype._getEndoRoots = function(t) {
        var e = t === this.p ? this.red : i().mont(t);
        var r = new (i())(2).toRed(e).redInvm();
        var n = r.redNeg();
        var o = new (i())(3).toRed(e).redNeg().redSqrt().redMul(r);
        return [ n.redAdd(o).fromRed(), n.redSub(o).fromRed() ];
      }, w.prototype._getEndoBasis = function(t) {
        var e = this.n.ushrn(Math.floor(this.n.bitLength() / 2));
        var r = t;
        var n = this.n.clone();
        var o = new (i())(1);
        var s = new (i())(0);
        var a = new (i())(0);
        var l = new (i())(1);
        var h;
        var u;
        var c;
        var f;
        var d;
        var m;
        var g;
        var p = 0;
        var v;
        var y;
        for (;0 !== r.cmpn(0); ) {
          var b = n.div(r);
          v = n.sub(b.mul(r)), y = a.sub(b.mul(o));
          var w = l.sub(b.mul(s));
          if (!c && v.cmp(e) < 0) h = g.neg(), u = o, c = v.neg(), f = y; else if (c && 2 == ++p) break;
          g = v, n = r, r = v, a = o, o = y, l = s, s = w;
        }
        d = v.neg(), m = y;
        var k = c.sqr().add(f.sqr());
        return d.sqr().add(m.sqr()).cmp(k) >= 0 && (d = h, m = u), c.negative && (c = c.neg(), f = f.neg()), d.negative && (d = d.neg(), 
        m = m.neg()), [ {
          a: c,
          b: f
        }, {
          a: d,
          b: m
        } ];
      }, w.prototype._endoSplit = function(t) {
        var e = this.endo.basis;
        var r = e[0];
        var n = e[1];
        var i = n.b.mul(t).divRound(this.n);
        var o = r.b.neg().mul(t).divRound(this.n);
        var s = i.mul(r.a);
        var a = o.mul(n.a);
        var l = i.mul(r.b);
        var h = o.mul(n.b);
        return {
          k1: t.sub(s).sub(a),
          k2: l.add(h).neg()
        };
      }, w.prototype.pointFromX = function(t, e) {
        (t = new (i())(t, 16)).red || (t = t.toRed(this.red));
        var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b);
        var n = r.redSqrt();
        if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error('invalid point');
        var o = n.fromRed().isOdd();
        return (e && !o || !e && o) && (n = n.redNeg()), this.point(t, n);
      }, w.prototype.validate = function(t) {
        if (t.inf) return !0;
        var e = t.x;
        var r = t.y;
        var n = this.a.redMul(e);
        var i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
        return 0 === r.redSqr().redISub(i).cmpn(0);
      }, w.prototype._endoWnafMulAdd = function(t, e, r) {
        var n = this._endoWnafT1;
        var i = this._endoWnafT2;
        for (var o = 0; o < t.length; o++) {
          var s = this._endoSplit(e[o]);
          var a = t[o];
          var l = a._getBeta();
          s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), l = l.neg(!0)), n[2 * o] = a, n[2 * o + 1] = l, 
          i[2 * o] = s.k1, i[2 * o + 1] = s.k2;
        }
        var h = this._wnafMulAdd(1, n, i, 2 * o, r);
        for (var u = 0; u < 2 * o; u++) n[u] = null, i[u] = null;
        return h;
      }, y(x, p.BasePoint), w.prototype.point = function(t, e, r) {
        return new x(this, t, e, r);
      }, w.prototype.pointFromJSON = function(t, e) {
        return x.fromJSON(this, t, e);
      }, x.prototype._getBeta = function() {
        if (this.curve.endo) {
          var t = this.precomputed;
          if (t && t.beta) return t.beta;
          var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
          if (t) {
            var r = this.curve;
            var n = function(t) {
              return r.point(t.x.redMul(r.endo.beta), t.y);
            };
            t.beta = e, e.precomputed = {
              beta: null,
              naf: t.naf && {
                wnd: t.naf.wnd,
                points: t.naf.points.map(n)
              },
              doubles: t.doubles && {
                step: t.doubles.step,
                points: t.doubles.points.map(n)
              }
            };
          }
          return e;
        }
      }, x.prototype.toJSON = function() {
        return this.precomputed ? [ this.x, this.y, this.precomputed && {
          doubles: this.precomputed.doubles && {
            step: this.precomputed.doubles.step,
            points: this.precomputed.doubles.points.slice(1)
          },
          naf: this.precomputed.naf && {
            wnd: this.precomputed.naf.wnd,
            points: this.precomputed.naf.points.slice(1)
          }
        } ] : [ this.x, this.y ];
      }, x.fromJSON = function(t, e, r) {
        'string' == typeof e && (e = JSON.parse(e));
        var n = t.point(e[0], e[1], r);
        if (!e[2]) return n;
        function i(e) {
          return t.point(e[0], e[1], r);
        }
        var o = e[2];
        return n.precomputed = {
          beta: null,
          doubles: o.doubles && {
            step: o.doubles.step,
            points: [ n ].concat(o.doubles.points.map(i))
          },
          naf: o.naf && {
            wnd: o.naf.wnd,
            points: [ n ].concat(o.naf.points.map(i))
          }
        }, n;
      }, x.prototype.inspect = function() {
        return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + '>';
      }, x.prototype.isInfinity = function() {
        return this.inf;
      }, x.prototype.add = function(t) {
        if (this.inf) return t;
        if (t.inf) return this;
        if (this.eq(t)) return this.dbl();
        if (this.neg().eq(t)) return this.curve.point(null, null);
        if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
        var e = this.y.redSub(t.y);
        0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
        var r = e.redSqr().redISub(this.x).redISub(t.x);
        var n = e.redMul(this.x.redSub(r)).redISub(this.y);
        return this.curve.point(r, n);
      }, x.prototype.dbl = function() {
        if (this.inf) return this;
        var t = this.y.redAdd(this.y);
        if (0 === t.cmpn(0)) return this.curve.point(null, null);
        var e = this.curve.a;
        var r = this.x.redSqr();
        var n = t.redInvm();
        var i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n);
        var o = i.redSqr().redISub(this.x.redAdd(this.x));
        var s = i.redMul(this.x.redSub(o)).redISub(this.y);
        return this.curve.point(o, s);
      }, x.prototype.getX = function() {
        return this.x.fromRed();
      }, x.prototype.getY = function() {
        return this.y.fromRed();
      }, x.prototype.mul = function(t) {
        return t = new (i())(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([ this ], [ t ]) : this.curve._wnafMul(this, t);
      }, x.prototype.mulAdd = function(t, e, r) {
        var n = [ this, e ];
        var i = [ t, r ];
        return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2);
      }, x.prototype.jmulAdd = function(t, e, r) {
        var n = [ this, e ];
        var i = [ t, r ];
        return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0);
      }, x.prototype.eq = function(t) {
        return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y));
      }, x.prototype.neg = function(t) {
        if (this.inf) return this;
        var e = this.curve.point(this.x, this.y.redNeg());
        if (t && this.precomputed) {
          var r = this.precomputed;
          var n = function(t) {
            return t.neg();
          };
          e.precomputed = {
            naf: r.naf && {
              wnd: r.naf.wnd,
              points: r.naf.points.map(n)
            },
            doubles: r.doubles && {
              step: r.doubles.step,
              points: r.doubles.points.map(n)
            }
          };
        }
        return e;
      }, x.prototype.toJ = function() {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
      }, y(A, p.BasePoint), w.prototype.jpoint = function(t, e, r) {
        return new A(this, t, e, r);
      }, A.prototype.toP = function() {
        if (this.isInfinity()) return this.curve.point(null, null);
        var t = this.z.redInvm();
        var e = t.redSqr();
        var r = this.x.redMul(e);
        var n = this.y.redMul(e).redMul(t);
        return this.curve.point(r, n);
      }, A.prototype.neg = function() {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
      }, A.prototype.add = function(t) {
        if (this.isInfinity()) return t;
        if (t.isInfinity()) return this;
        var e = t.z.redSqr();
        var r = this.z.redSqr();
        var n = this.x.redMul(e);
        var i = t.x.redMul(r);
        var o = this.y.redMul(e.redMul(t.z));
        var s = t.y.redMul(r.redMul(this.z));
        var a = n.redSub(i);
        var l = o.redSub(s);
        if (0 === a.cmpn(0)) return 0 !== l.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var h = a.redSqr();
        var u = h.redMul(a);
        var c = n.redMul(h);
        var f = l.redSqr().redIAdd(u).redISub(c).redISub(c);
        var d = l.redMul(c.redISub(f)).redISub(o.redMul(u));
        var m = this.z.redMul(t.z).redMul(a);
        return this.curve.jpoint(f, d, m);
      }, A.prototype.mixedAdd = function(t) {
        if (this.isInfinity()) return t.toJ();
        if (t.isInfinity()) return this;
        var e = this.z.redSqr();
        var r = this.x;
        var n = t.x.redMul(e);
        var i = this.y;
        var o = t.y.redMul(e).redMul(this.z);
        var s = r.redSub(n);
        var a = i.redSub(o);
        if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var l = s.redSqr();
        var h = l.redMul(s);
        var u = r.redMul(l);
        var c = a.redSqr().redIAdd(h).redISub(u).redISub(u);
        var f = a.redMul(u.redISub(c)).redISub(i.redMul(h));
        var d = this.z.redMul(s);
        return this.curve.jpoint(c, f, d);
      }, A.prototype.dblp = function(t) {
        if (0 === t) return this;
        if (this.isInfinity()) return this;
        if (!t) return this.dbl();
        var e;
        if (this.curve.zeroA || this.curve.threeA) {
          var r = this;
          for (e = 0; e < t; e++) r = r.dbl();
          return r;
        }
        var n = this.curve.a;
        var i = this.curve.tinv;
        var o = this.x;
        var s = this.y;
        var a = this.z;
        var l = a.redSqr().redSqr();
        var h = s.redAdd(s);
        for (e = 0; e < t; e++) {
          var u = o.redSqr();
          var c = h.redSqr();
          var f = c.redSqr();
          var d = u.redAdd(u).redIAdd(u).redIAdd(n.redMul(l));
          var m = o.redMul(c);
          var g = d.redSqr().redISub(m.redAdd(m));
          var p = m.redISub(g);
          var v = d.redMul(p);
          v = v.redIAdd(v).redISub(f);
          var y = h.redMul(a);
          e + 1 < t && (l = l.redMul(f)), o = g, a = y, h = v;
        }
        return this.curve.jpoint(o, h.redMul(i), a);
      }, A.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
      }, A.prototype._zeroDbl = function() {
        var t;
        var e;
        var r;
        if (this.zOne) {
          var n = this.x.redSqr();
          var i = this.y.redSqr();
          var o = i.redSqr();
          var s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
          s = s.redIAdd(s);
          var a = n.redAdd(n).redIAdd(n);
          var l = a.redSqr().redISub(s).redISub(s);
          var h = o.redIAdd(o);
          h = (h = h.redIAdd(h)).redIAdd(h), t = l, e = a.redMul(s.redISub(l)).redISub(h), r = this.y.redAdd(this.y);
        } else {
          var u = this.x.redSqr();
          var c = this.y.redSqr();
          var f = c.redSqr();
          var d = this.x.redAdd(c).redSqr().redISub(u).redISub(f);
          d = d.redIAdd(d);
          var m = u.redAdd(u).redIAdd(u);
          var g = m.redSqr();
          var p = f.redIAdd(f);
          p = (p = p.redIAdd(p)).redIAdd(p), t = g.redISub(d).redISub(d), e = m.redMul(d.redISub(t)).redISub(p), r = (r = this.y.redMul(this.z)).redIAdd(r);
        }
        return this.curve.jpoint(t, e, r);
      }, A.prototype._threeDbl = function() {
        var t;
        var e;
        var r;
        if (this.zOne) {
          var n = this.x.redSqr();
          var i = this.y.redSqr();
          var o = i.redSqr();
          var s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
          s = s.redIAdd(s);
          var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a);
          var l = a.redSqr().redISub(s).redISub(s);
          t = l;
          var h = o.redIAdd(o);
          h = (h = h.redIAdd(h)).redIAdd(h), e = a.redMul(s.redISub(l)).redISub(h), r = this.y.redAdd(this.y);
        } else {
          var u = this.z.redSqr();
          var c = this.y.redSqr();
          var f = this.x.redMul(c);
          var d = this.x.redSub(u).redMul(this.x.redAdd(u));
          d = d.redAdd(d).redIAdd(d);
          var m = f.redIAdd(f);
          var g = (m = m.redIAdd(m)).redAdd(m);
          t = d.redSqr().redISub(g), r = this.y.redAdd(this.z).redSqr().redISub(c).redISub(u);
          var p = c.redSqr();
          p = (p = (p = p.redIAdd(p)).redIAdd(p)).redIAdd(p), e = d.redMul(m.redISub(t)).redISub(p);
        }
        return this.curve.jpoint(t, e, r);
      }, A.prototype._dbl = function() {
        var t = this.curve.a;
        var e = this.x;
        var r = this.y;
        var n = this.z;
        var i = n.redSqr().redSqr();
        var o = e.redSqr();
        var s = r.redSqr();
        var a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i));
        var l = e.redAdd(e);
        var h = (l = l.redIAdd(l)).redMul(s);
        var u = a.redSqr().redISub(h.redAdd(h));
        var c = h.redISub(u);
        var f = s.redSqr();
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var d = a.redMul(c).redISub(f);
        var m = r.redAdd(r).redMul(n);
        return this.curve.jpoint(u, d, m);
      }, A.prototype.trpl = function() {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var t = this.x.redSqr();
        var e = this.y.redSqr();
        var r = this.z.redSqr();
        var n = e.redSqr();
        var i = t.redAdd(t).redIAdd(t);
        var o = i.redSqr();
        var s = this.x.redAdd(e).redSqr().redISub(t).redISub(n);
        var a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr();
        var l = n.redIAdd(n);
        l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
        var h = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(l);
        var u = e.redMul(h);
        u = (u = u.redIAdd(u)).redIAdd(u);
        var c = this.x.redMul(a).redISub(u);
        c = (c = c.redIAdd(c)).redIAdd(c);
        var f = this.y.redMul(h.redMul(l.redISub(h)).redISub(s.redMul(a)));
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var d = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
        return this.curve.jpoint(c, f, d);
      }, A.prototype.mul = function(t, e) {
        return t = new (i())(t, e), this.curve._wnafMul(this, t);
      }, A.prototype.eq = function(t) {
        if ('affine' === t.type) return this.eq(t.toJ());
        if (this === t) return !0;
        var e = this.z.redSqr();
        var r = t.z.redSqr();
        if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
        var n = e.redMul(this.z);
        var i = r.redMul(t.z);
        return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0);
      }, A.prototype.eqXToP = function(t) {
        var e = this.z.redSqr();
        var r = t.toRed(this.curve.red).redMul(e);
        if (0 === this.x.cmp(r)) return !0;
        var n = t.clone();
        var i = this.curve.redN.redMul(e);
        for (;;) {
          if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
          if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0;
        }
      }, A.prototype.inspect = function() {
        return this.isInfinity() ? '<EC JPoint Infinity>' : '<EC JPoint x: ' + this.x.toString(16, 2) + ' y: ' + this.y.toString(16, 2) + ' z: ' + this.z.toString(16, 2) + '>';
      }, A.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0);
      };
      var B = a((function(t, e) {
        var r = e;
        r.base = p, r.short = k, r.mont = null, r.edwards = null;
      }));
      var E = a((function(t, e) {
        var r = e;
        var n = c.assert;
        function i(t) {
          'short' === t.type ? this.curve = new B.short(t) : 'edwards' === t.type ? this.curve = new B.edwards(t) : this.curve = new B.mont(t), 
          this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, n(this.g.validate(), 'Invalid curve'), n(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
        }
        function o(t, e) {
          Object.defineProperty(r, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
              var n = new i(e);
              return Object.defineProperty(r, t, {
                configurable: !0,
                enumerable: !0,
                value: n
              }), n;
            }
          });
        }
        var a;
        r.PresetCurve = i, o('p192', {
          type: 'short',
          prime: 'p192',
          p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
          a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
          b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
          n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
          hash: s().sha256,
          gRed: !1,
          g: [ '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012', '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811' ]
        }), o('p224', {
          type: 'short',
          prime: 'p224',
          p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
          a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
          b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
          n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
          hash: s().sha256,
          gRed: !1,
          g: [ 'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21', 'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34' ]
        }), o('p256', {
          type: 'short',
          prime: null,
          p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
          a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
          b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
          n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
          hash: s().sha256,
          gRed: !1,
          g: [ '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296', '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5' ]
        }), o('p384', {
          type: 'short',
          prime: null,
          p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
          a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
          b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
          n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
          hash: s().sha384,
          gRed: !1,
          g: [ "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f" ]
        }), o('p521', {
          type: 'short',
          prime: null,
          p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
          a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
          b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
          n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
          hash: s().sha512,
          gRed: !1,
          g: [ "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650" ]
        }), o('curve25519', {
          type: 'mont',
          prime: 'p25519',
          p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
          a: '76d06',
          b: '1',
          n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
          hash: s().sha256,
          gRed: !1,
          g: [ '9' ]
        }), o('ed25519', {
          type: 'edwards',
          prime: 'p25519',
          p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
          a: '-1',
          c: '1',
          d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
          n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
          hash: s().sha256,
          gRed: !1,
          g: [ '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a', '6666666666666666666666666666666666666666666666666666666666666658' ]
        });
        try {
          a = null.crash();
        } catch (l) {
          a = void 0;
        }
        o('secp256k1', {
          type: 'short',
          prime: 'k256',
          p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
          a: '0',
          b: '7',
          n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
          h: '1',
          hash: s().sha256,
          beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
          lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
          basis: [ {
            a: '3086d221a7d46bcde86c90e49284eb15',
            b: '-e4437ed6010e88286f547fa90abfe4c3'
          }, {
            a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
            b: '3086d221a7d46bcde86c90e49284eb15'
          } ],
          gRed: !1,
          g: [ '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798', '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8', a ]
        });
      }));
      function _(t) {
        if (!(this instanceof _)) return new _(t);
        this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, 
        this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
        var e = u.toArray(t.entropy, t.entropyEnc || 'hex');
        var r = u.toArray(t.nonce, t.nonceEnc || 'hex');
        var n = u.toArray(t.pers, t.persEnc || 'hex');
        l(e.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'), this._init(e, r, n);
      }
      var N = _;
      _.prototype._init = function(t, e, r) {
        var n = t.concat(e).concat(r);
        this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
        for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
        this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656;
      }, _.prototype._hmac = function() {
        return new (s().hmac)(this.hash, this.K);
      }, _.prototype._update = function(t) {
        var e = this._hmac().update(this.V).update([ 0 ]);
        t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([ 1 ]).update(t).digest(), 
        this.V = this._hmac().update(this.V).digest());
      }, _.prototype.reseed = function(t, e, r, n) {
        'string' != typeof e && (n = r, r = e, e = null), t = u.toArray(t, e), r = u.toArray(r, n), l(t.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'), 
        this._update(t.concat(r || [])), this._reseed = 1;
      }, _.prototype.generate = function(t, e, r, n) {
        if (this._reseed > this.reseedInterval) throw new Error('Reseed is required');
        'string' != typeof e && (n = r, r = e, e = null), r && (r = u.toArray(r, n || 'hex'), this._update(r));
        var i = [];
        for (;i.length < t; ) this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
        var o = i.slice(0, t);
        return this._update(r), this._reseed++, u.encode(o, e);
      };
      var L = c.assert;
      function S(t, e) {
        this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc);
      }
      var M = S;
      S.fromPublic = function(t, e, r) {
        return e instanceof S ? e : new S(t, {
          pub: e,
          pubEnc: r
        });
      }, S.fromPrivate = function(t, e, r) {
        return e instanceof S ? e : new S(t, {
          priv: e,
          privEnc: r
        });
      }, S.prototype.validate = function() {
        var t = this.getPublic();
        return t.isInfinity() ? {
          result: !1,
          reason: 'Invalid public key'
        } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
          result: !0,
          reason: null
        } : {
          result: !1,
          reason: 'Public key * N != O'
        } : {
          result: !1,
          reason: 'Public key is not a point'
        };
      }, S.prototype.getPublic = function(t, e) {
        return 'string' == typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub;
      }, S.prototype.getPrivate = function(t) {
        return 'hex' === t ? this.priv.toString(16, 2) : this.priv;
      }, S.prototype._importPrivate = function(t, e) {
        this.priv = new (i())(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n);
      }, S.prototype._importPublic = function(t, e) {
        if (t.x || t.y) return 'mont' === this.ec.curve.type ? L(t.x, 'Need x coordinate') : 'short' !== this.ec.curve.type && 'edwards' !== this.ec.curve.type || L(t.x && t.y, 'Need both x and y coordinate'), 
        void (this.pub = this.ec.curve.point(t.x, t.y));
        this.pub = this.ec.curve.decodePoint(t, e);
      }, S.prototype.derive = function(t) {
        return t.validate() || L(t.validate(), 'public point not validated'), t.mul(this.priv).getX();
      }, S.prototype.sign = function(t, e, r) {
        return this.ec.sign(t, this, e, r);
      }, S.prototype.verify = function(t, e) {
        return this.ec.verify(t, e, this);
      }, S.prototype.inspect = function() {
        return '<Key priv: ' + (this.priv && this.priv.toString(16, 2)) + ' pub: ' + (this.pub && this.pub.inspect()) + ' >';
      };
      var I = c.assert;
      function C(t, e) {
        if (t instanceof C) return t;
        this._importDER(t, e) || (I(t.r && t.s, 'Signature without r or s'), this.r = new (i())(t.r, 16), this.s = new (i())(t.s, 16), 
        void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam);
      }
      var j = C;
      function P() {
        this.place = 0;
      }
      function T(t, e) {
        var r = t[e.place++];
        if (!(128 & r)) return r;
        var n = 15 & r;
        if (0 === n || n > 4) return !1;
        var i = 0;
        for (var o = 0, s = e.place; o < n; o++, s++) i <<= 8, i |= t[s], i >>>= 0;
        return !(i <= 127) && (e.place = s, i);
      }
      function O(t) {
        var e = 0;
        var r = t.length - 1;
        for (;!t[e] && !(128 & t[e + 1]) && e < r; ) e++;
        return 0 === e ? t : t.slice(e);
      }
      function R(t, e) {
        if (e < 128) t.push(e); else {
          var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
          for (t.push(128 | r); --r; ) t.push(e >>> (r << 3) & 255);
          t.push(e);
        }
      }
      C.prototype._importDER = function(t, e) {
        t = c.toArray(t, e);
        var r = new P;
        if (48 !== t[r.place++]) return !1;
        var n = T(t, r);
        if (!1 === n) return !1;
        if (n + r.place !== t.length) return !1;
        if (2 !== t[r.place++]) return !1;
        var o = T(t, r);
        if (!1 === o) return !1;
        var s = t.slice(r.place, o + r.place);
        if (r.place += o, 2 !== t[r.place++]) return !1;
        var a = T(t, r);
        if (!1 === a) return !1;
        if (t.length !== a + r.place) return !1;
        var l = t.slice(r.place, a + r.place);
        if (0 === s[0]) {
          if (!(128 & s[1])) return !1;
          s = s.slice(1);
        }
        if (0 === l[0]) {
          if (!(128 & l[1])) return !1;
          l = l.slice(1);
        }
        return this.r = new (i())(s), this.s = new (i())(l), this.recoveryParam = null, !0;
      }, C.prototype.toDER = function(t) {
        var e = this.r.toArray();
        var r = this.s.toArray();
        for (128 & e[0] && (e = [ 0 ].concat(e)), 128 & r[0] && (r = [ 0 ].concat(r)), e = O(e), r = O(r); !(r[0] || 128 & r[1]); ) r = r.slice(1);
        var n = [ 2 ];
        R(n, e.length), (n = n.concat(e)).push(2), R(n, r.length);
        var i = n.concat(r);
        var o = [ 48 ];
        return R(o, i.length), o = o.concat(i), c.encode(o, t);
      };
      var U = function() {
        throw new Error('unsupported');
      };
      var F = c.assert;
      function H(t) {
        if (!(this instanceof H)) return new H(t);
        'string' == typeof t && (F(Object.prototype.hasOwnProperty.call(E, t), 'Unknown curve ' + t), t = E[t]), t instanceof E.PresetCurve && (t = {
          curve: t
        }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, 
        this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash;
      }
      var D = H;
      H.prototype.keyPair = function(t) {
        return new M(this, t);
      }, H.prototype.keyFromPrivate = function(t, e) {
        return M.fromPrivate(this, t, e);
      }, H.prototype.keyFromPublic = function(t, e) {
        return M.fromPublic(this, t, e);
      }, H.prototype.genKeyPair = function(t) {
        t || (t = {});
        var e = new N({
          hash: this.hash,
          pers: t.pers,
          persEnc: t.persEnc || 'utf8',
          entropy: t.entropy || U(this.hash.hmacStrength),
          entropyEnc: t.entropy && t.entropyEnc || 'utf8',
          nonce: this.n.toArray()
        });
        var r = this.n.byteLength();
        var n = this.n.sub(new (i())(2));
        for (;;) {
          var o = new (i())(e.generate(r));
          if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o);
        }
      }, H.prototype._truncateToN = function(t, e) {
        var r = 8 * t.byteLength() - this.n.bitLength();
        return r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
      }, H.prototype.sign = function(t, e, r, n) {
        'object' == typeof r && (n = r, r = null), n || (n = {}), e = this.keyFromPrivate(e, r), t = this._truncateToN(new (i())(t, 16));
        var o = this.n.byteLength();
        var s = e.getPrivate().toArray('be', o);
        var a = t.toArray('be', o);
        var l = new N({
          hash: this.hash,
          entropy: s,
          nonce: a,
          pers: n.pers,
          persEnc: n.persEnc || 'utf8'
        });
        var h = this.n.sub(new (i())(1));
        for (var u = 0; ;u++) {
          var c = n.k ? n.k(u) : new (i())(l.generate(this.n.byteLength()));
          if (!((c = this._truncateToN(c, !0)).cmpn(1) <= 0 || c.cmp(h) >= 0)) {
            var f = this.g.mul(c);
            if (!f.isInfinity()) {
              var d = f.getX();
              var m = d.umod(this.n);
              if (0 !== m.cmpn(0)) {
                var g = c.invm(this.n).mul(m.mul(e.getPrivate()).iadd(t));
                if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                  var p = (f.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(m) ? 2 : 0);
                  return n.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g), p ^= 1), new j({
                    r: m,
                    s: g,
                    recoveryParam: p
                  });
                }
              }
            }
          }
        }
      }, H.prototype.verify = function(t, e, r, n) {
        t = this._truncateToN(new (i())(t, 16)), r = this.keyFromPublic(r, n);
        var o = (e = new j(e, 'hex')).r;
        var s = e.s;
        if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
        if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
        var a = s.invm(this.n);
        var l = a.mul(t).umod(this.n);
        var h = a.mul(o).umod(this.n);
        var u;
        return this.curve._maxwellTrick ? !(u = this.g.jmulAdd(l, r.getPublic(), h)).isInfinity() && u.eqXToP(o) : !(u = this.g.mulAdd(l, r.getPublic(), h)).isInfinity() && 0 === u.getX().umod(this.n).cmp(o);
      }, H.prototype.recoverPubKey = function(t, e, r, n) {
        F((3 & r) === r, 'The recovery param is more than two bits'), e = new j(e, n);
        var o = this.n;
        var s = new (i())(t);
        var a = e.r;
        var l = e.s;
        var h = 1 & r;
        var u = r >> 1;
        if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) throw new Error('Unable to find sencond key candinate');
        a = u ? this.curve.pointFromX(a.add(this.curve.n), h) : this.curve.pointFromX(a, h);
        var c = e.r.invm(o);
        var f = o.sub(s).mul(c).umod(o);
        var d = l.mul(c).umod(o);
        return this.g.mulAdd(f, a, d);
      }, H.prototype.getKeyRecoveryParam = function(t, e, r, n) {
        if (null !== (e = new j(e, n)).recoveryParam) return e.recoveryParam;
        for (var i = 0; i < 4; i++) {
          var o;
          try {
            o = this.recoverPubKey(t, e, i);
          } catch (t) {
            continue;
          }
          if (o.eq(r)) return i;
        }
        throw new Error('Unable to find valid recovery factor');
      };
      var z = a((function(t, e) {
        var r = e;
        r.version = "6.5.4", r.utils = c, r.rand = function() {
          throw new Error('unsupported');
        }, r.curve = B, r.curves = E, r.ec = D, r.eddsa = null;
      })).ec;
    },
    "./node_modules/@ethersproject/signing-key/lib.esm/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        SigningKey: () => c,
        recoverPublicKey: () => f,
        computePublicKey: () => d
      });
      var n = r("./node_modules/@ethersproject/signing-key/lib.esm/elliptic.js");
      var i = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var o = r("./node_modules/@ethersproject/properties/lib.esm/index.js");
      var s = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var a = r("./node_modules/@ethersproject/signing-key/lib.esm/_version.js");
      const l = new s.Logger(a.version);
      let h = null;
      function u() {
        return h || (h = new n.EC("secp256k1")), h;
      }
      class c {
        constructor(t) {
          (0, o.defineReadOnly)(this, "curve", "secp256k1"), (0, o.defineReadOnly)(this, "privateKey", (0, i.hexlify)(t));
          const e = u().keyFromPrivate((0, i.arrayify)(this.privateKey));
          (0, o.defineReadOnly)(this, "publicKey", "0x" + e.getPublic(!1, "hex")), (0, o.defineReadOnly)(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")), 
          (0, o.defineReadOnly)(this, "_isSigningKey", !0);
        }
        _addPoint(t) {
          const e = u().keyFromPublic((0, i.arrayify)(this.publicKey));
          const r = u().keyFromPublic((0, i.arrayify)(t));
          return "0x" + e.pub.add(r.pub).encodeCompressed("hex");
        }
        signDigest(t) {
          const e = u().keyFromPrivate((0, i.arrayify)(this.privateKey));
          const r = (0, i.arrayify)(t);
          32 !== r.length && l.throwArgumentError("bad digest length", "digest", t);
          const n = e.sign(r, {
            canonical: !0
          });
          return (0, i.splitSignature)({
            recoveryParam: n.recoveryParam,
            r: (0, i.hexZeroPad)("0x" + n.r.toString(16), 32),
            s: (0, i.hexZeroPad)("0x" + n.s.toString(16), 32)
          });
        }
        computeSharedSecret(t) {
          const e = u().keyFromPrivate((0, i.arrayify)(this.privateKey));
          const r = u().keyFromPublic((0, i.arrayify)(d(t)));
          return (0, i.hexZeroPad)("0x" + e.derive(r.getPublic()).toString(16), 32);
        }
        static isSigningKey(t) {
          return !(!t || !t._isSigningKey);
        }
      }
      function f(t, e) {
        const r = (0, i.splitSignature)(e);
        const n = {
          r: (0, i.arrayify)(r.r),
          s: (0, i.arrayify)(r.s)
        };
        return "0x" + u().recoverPubKey((0, i.arrayify)(t), n, r.recoveryParam).encode("hex", !1);
      }
      function d(t, e) {
        const r = (0, i.arrayify)(t);
        if (32 === r.length) {
          const t = new c(r);
          return e ? "0x" + u().keyFromPrivate(r).getPublic(!0, "hex") : t.publicKey;
        }
        return 33 === r.length ? e ? (0, i.hexlify)(r) : "0x" + u().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? e ? "0x" + u().keyFromPublic(r).getPublic(!0, "hex") : (0, 
        i.hexlify)(r) : l.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
      }
    },
    "./node_modules/@ethersproject/strings/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "strings/5.4.0";
    },
    "./node_modules/@ethersproject/strings/lib.esm/idna.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        _nameprepTableA1: () => m,
        _nameprepTableB2: () => g,
        _nameprepTableC: () => p,
        nameprep: () => v
      });
      var n = r("./node_modules/@ethersproject/strings/lib.esm/utf8.js");
      function i(t, e) {
        e || (e = function(t) {
          return [ parseInt(t, 16) ];
        });
        let r = 0;
        let n = {};
        return t.split(",").forEach((t => {
          let i = t.split(":");
          r += parseInt(i[0], 16), n[r] = e(i[1]);
        })), n;
      }
      function o(t) {
        let e = 0;
        return t.split(",").map((t => {
          let r = t.split("-");
          1 === r.length ? r[1] = "0" : "" === r[1] && (r[1] = "1");
          let n = e + parseInt(r[0], 16);
          return e = parseInt(r[1], 16), {
            l: n,
            h: e
          };
        }));
      }
      function s(t, e) {
        let r = 0;
        for (let n = 0; n < e.length; n++) {
          let i = e[n];
          if (r += i.l, t >= r && t <= r + i.h && (t - r) % (i.d || 1) == 0) {
            if (i.e && -1 !== i.e.indexOf(t - r)) continue;
            return i;
          }
        }
        return null;
      }
      const a = o("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d");
      const l = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((t => parseInt(t, 16)));
      const h = [ {
        h: 25,
        s: 32,
        l: 65
      }, {
        h: 30,
        s: 32,
        e: [ 23 ],
        l: 127
      }, {
        h: 54,
        s: 1,
        e: [ 48 ],
        l: 64,
        d: 2
      }, {
        h: 14,
        s: 1,
        l: 57,
        d: 2
      }, {
        h: 44,
        s: 1,
        l: 17,
        d: 2
      }, {
        h: 10,
        s: 1,
        e: [ 2, 6, 8 ],
        l: 61,
        d: 2
      }, {
        h: 16,
        s: 1,
        l: 68,
        d: 2
      }, {
        h: 84,
        s: 1,
        e: [ 18, 24, 66 ],
        l: 19,
        d: 2
      }, {
        h: 26,
        s: 32,
        e: [ 17 ],
        l: 435
      }, {
        h: 22,
        s: 1,
        l: 71,
        d: 2
      }, {
        h: 15,
        s: 80,
        l: 40
      }, {
        h: 31,
        s: 32,
        l: 16
      }, {
        h: 32,
        s: 1,
        l: 80,
        d: 2
      }, {
        h: 52,
        s: 1,
        l: 42,
        d: 2
      }, {
        h: 12,
        s: 1,
        l: 55,
        d: 2
      }, {
        h: 40,
        s: 1,
        e: [ 38 ],
        l: 15,
        d: 2
      }, {
        h: 14,
        s: 1,
        l: 48,
        d: 2
      }, {
        h: 37,
        s: 48,
        l: 49
      }, {
        h: 148,
        s: 1,
        l: 6351,
        d: 2
      }, {
        h: 88,
        s: 1,
        l: 160,
        d: 2
      }, {
        h: 15,
        s: 16,
        l: 704
      }, {
        h: 25,
        s: 26,
        l: 854
      }, {
        h: 25,
        s: 32,
        l: 55915
      }, {
        h: 37,
        s: 40,
        l: 1247
      }, {
        h: 25,
        s: -119711,
        l: 53248
      }, {
        h: 25,
        s: -119763,
        l: 52
      }, {
        h: 25,
        s: -119815,
        l: 52
      }, {
        h: 25,
        s: -119867,
        e: [ 1, 4, 5, 7, 8, 11, 12, 17 ],
        l: 52
      }, {
        h: 25,
        s: -119919,
        l: 52
      }, {
        h: 24,
        s: -119971,
        e: [ 2, 7, 8, 17 ],
        l: 52
      }, {
        h: 24,
        s: -120023,
        e: [ 2, 7, 13, 15, 16, 17 ],
        l: 52
      }, {
        h: 25,
        s: -120075,
        l: 52
      }, {
        h: 25,
        s: -120127,
        l: 52
      }, {
        h: 25,
        s: -120179,
        l: 52
      }, {
        h: 25,
        s: -120231,
        l: 52
      }, {
        h: 25,
        s: -120283,
        l: 52
      }, {
        h: 25,
        s: -120335,
        l: 52
      }, {
        h: 24,
        s: -119543,
        e: [ 17 ],
        l: 56
      }, {
        h: 24,
        s: -119601,
        e: [ 17 ],
        l: 58
      }, {
        h: 24,
        s: -119659,
        e: [ 17 ],
        l: 58
      }, {
        h: 24,
        s: -119717,
        e: [ 17 ],
        l: 58
      }, {
        h: 24,
        s: -119775,
        e: [ 17 ],
        l: 58
      } ];
      const u = i("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3");
      const c = i("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7");
      const f = i("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", (function(t) {
        if (t.length % 4 != 0) throw new Error("bad data");
        let e = [];
        for (let r = 0; r < t.length; r += 4) e.push(parseInt(t.substring(r, r + 4), 16));
        return e;
      }));
      const d = o("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
      function m(t) {
        return !!s(t, a);
      }
      function g(t) {
        let e = s(t, h);
        if (e) return [ t + e.s ];
        let r = u[t];
        if (r) return r;
        let n = c[t];
        if (n) return [ t + n[0] ];
        let i = f[t];
        return i || null;
      }
      function p(t) {
        return !!s(t, d);
      }
      function v(t) {
        if (t.match(/^[a-z0-9-]*$/i) && t.length <= 59) return t.toLowerCase();
        let e = (0, n.toUtf8CodePoints)(t);
        e = function(t) {
          return t.reduce(((t, e) => (e.forEach((e => {
            t.push(e);
          })), t)), []);
        }(e.map((t => {
          if (l.indexOf(t) >= 0) return [];
          if (t >= 65024 && t <= 65039) return [];
          let e = g(t);
          return e || [ t ];
        }))), e = (0, n.toUtf8CodePoints)((0, n._toUtf8String)(e), n.UnicodeNormalizationForm.NFKC), e.forEach((t => {
          if (p(t)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
        })), e.forEach((t => {
          if (m(t)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
        }));
        let r = (0, n._toUtf8String)(e);
        if ("-" === r.substring(0, 1) || "--" === r.substring(2, 4) || "-" === r.substring(r.length - 1)) throw new Error("invalid hyphen");
        if (r.length > 63) throw new Error("too long");
        return r;
      }
    },
    "./node_modules/@ethersproject/strings/lib.esm/utf8.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        UnicodeNormalizationForm: () => a,
        Utf8ErrorReason: () => l,
        Utf8ErrorFuncs: () => u,
        toUtf8Bytes: () => f,
        _toEscapedUtf8String: () => m,
        _toUtf8String: () => g,
        toUtf8String: () => p,
        toUtf8CodePoints: () => v
      });
      var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var o = r("./node_modules/@ethersproject/strings/lib.esm/_version.js");
      const s = new i.Logger(o.version);
      var a;
      var l;
      function h(t, e, r, n, i) {
        if (t === l.BAD_PREFIX || t === l.UNEXPECTED_CONTINUE) {
          let t = 0;
          for (let n = e + 1; n < r.length && r[n] >> 6 == 2; n++) t++;
          return t;
        }
        return t === l.OVERRUN ? r.length - e - 1 : 0;
      }
      !function(t) {
        t.current = "", t.NFC = "NFC", t.NFD = "NFD", t.NFKC = "NFKC", t.NFKD = "NFKD";
      }(a || (a = {})), function(t) {
        t.UNEXPECTED_CONTINUE = "unexpected continuation byte", t.BAD_PREFIX = "bad codepoint prefix", t.OVERRUN = "string overrun", 
        t.MISSING_CONTINUE = "missing continuation byte", t.OUT_OF_RANGE = "out of UTF-8 range", t.UTF16_SURROGATE = "UTF-16 surrogate", 
        t.OVERLONG = "overlong representation";
      }(l || (l = {}));
      const u = Object.freeze({
        error: function(t, e, r, n, i) {
          return s.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, "bytes", r);
        },
        ignore: h,
        replace: function(t, e, r, n, i) {
          return t === l.OVERLONG ? (n.push(i), 0) : (n.push(65533), h(t, e, r));
        }
      });
      function c(t, e) {
        null == e && (e = u.error), t = (0, n.arrayify)(t);
        const r = [];
        let i = 0;
        for (;i < t.length; ) {
          const n = t[i++];
          if (n >> 7 == 0) {
            r.push(n);
            continue;
          }
          let o = null;
          let s = null;
          if (192 == (224 & n)) o = 1, s = 127; else if (224 == (240 & n)) o = 2, s = 2047; else {
            if (240 != (248 & n)) {
              i += e(128 == (192 & n) ? l.UNEXPECTED_CONTINUE : l.BAD_PREFIX, i - 1, t, r);
              continue;
            }
            o = 3, s = 65535;
          }
          if (i - 1 + o >= t.length) {
            i += e(l.OVERRUN, i - 1, t, r);
            continue;
          }
          let a = n & (1 << 8 - o - 1) - 1;
          for (let h = 0; h < o; h++) {
            let n = t[i];
            if (128 != (192 & n)) {
              i += e(l.MISSING_CONTINUE, i, t, r), a = null;
              break;
            }
            a = a << 6 | 63 & n, i++;
          }
          null !== a && (a > 1114111 ? i += e(l.OUT_OF_RANGE, i - 1 - o, t, r, a) : a >= 55296 && a <= 57343 ? i += e(l.UTF16_SURROGATE, i - 1 - o, t, r, a) : a <= s ? i += e(l.OVERLONG, i - 1 - o, t, r, a) : r.push(a));
        }
        return r;
      }
      function f(t, e = a.current) {
        e != a.current && (s.checkNormalize(), t = t.normalize(e));
        let r = [];
        for (let n = 0; n < t.length; n++) {
          const e = t.charCodeAt(n);
          if (e < 128) r.push(e); else if (e < 2048) r.push(e >> 6 | 192), r.push(63 & e | 128); else if (55296 == (64512 & e)) {
            n++;
            const i = t.charCodeAt(n);
            if (n >= t.length || 56320 != (64512 & i)) throw new Error("invalid utf-8 string");
            const o = 65536 + ((1023 & e) << 10) + (1023 & i);
            r.push(o >> 18 | 240), r.push(o >> 12 & 63 | 128), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128);
          } else r.push(e >> 12 | 224), r.push(e >> 6 & 63 | 128), r.push(63 & e | 128);
        }
        return (0, n.arrayify)(r);
      }
      function d(t) {
        const e = "0000" + t.toString(16);
        return "\\u" + e.substring(e.length - 4);
      }
      function m(t, e) {
        return '"' + c(t, e).map((t => {
          if (t < 256) {
            switch (t) {
             case 8:
              return "\\b";

             case 9:
              return "\\t";

             case 10:
              return "\\n";

             case 13:
              return "\\r";

             case 34:
              return "\\\"";

             case 92:
              return "\\\\";
            }
            if (t >= 32 && t < 127) return String.fromCharCode(t);
          }
          return t <= 65535 ? d(t) : d(55296 + ((t -= 65536) >> 10 & 1023)) + d(56320 + (1023 & t));
        })).join("") + '"';
      }
      function g(t) {
        return t.map((t => t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10 & 1023), 56320 + (1023 & t))))).join("");
      }
      function p(t, e) {
        return g(c(t, e));
      }
      function v(t, e = a.current) {
        return c(f(t, e));
      }
    },
    "./node_modules/@ethersproject/transactions/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "transactions/5.4.0";
    },
    "./node_modules/@ethersproject/transactions/lib.esm/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        TransactionTypes: () => m,
        computeAddress: () => b,
        recoverAddress: () => w,
        accessListify: () => A,
        serialize: () => N,
        parse: () => S
      });
      var n = r("./node_modules/@ethersproject/address/lib.esm/index.js");
      var i = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
      var o = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var s = r("./node_modules/@ethersproject/constants/lib.esm/bignumbers.js");
      var a = r("./node_modules/@ethersproject/keccak256/lib.esm/index.js");
      var l = r("./node_modules/@ethersproject/properties/lib.esm/index.js");
      var h = r("./node_modules/@ethersproject/rlp/lib.esm/index.js");
      var u = r("./node_modules/@ethersproject/signing-key/lib.esm/index.js");
      var c = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var f = r("./node_modules/@ethersproject/transactions/lib.esm/_version.js");
      const d = new c.Logger(f.version);
      var m;
      function g(t) {
        return "0x" === t ? null : (0, n.getAddress)(t);
      }
      function p(t) {
        return "0x" === t ? s.Zero : i.BigNumber.from(t);
      }
      !function(t) {
        t[t.legacy = 0] = "legacy", t[t.eip2930 = 1] = "eip2930", t[t.eip1559 = 2] = "eip1559";
      }(m || (m = {}));
      const v = [ {
        name: "nonce",
        maxLength: 32,
        numeric: !0
      }, {
        name: "gasPrice",
        maxLength: 32,
        numeric: !0
      }, {
        name: "gasLimit",
        maxLength: 32,
        numeric: !0
      }, {
        name: "to",
        length: 20
      }, {
        name: "value",
        maxLength: 32,
        numeric: !0
      }, {
        name: "data"
      } ];
      const y = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        type: !0,
        value: !0
      };
      function b(t) {
        const e = (0, u.computePublicKey)(t);
        return (0, n.getAddress)((0, o.hexDataSlice)((0, a.keccak256)((0, o.hexDataSlice)(e, 1)), 12));
      }
      function w(t, e) {
        return b((0, u.recoverPublicKey)((0, o.arrayify)(t), e));
      }
      function k(t, e) {
        const r = (0, o.stripZeros)(i.BigNumber.from(t).toHexString());
        return r.length > 32 && d.throwArgumentError("invalid length for " + e, "transaction:" + e, t), r;
      }
      function x(t, e) {
        return {
          address: (0, n.getAddress)(t),
          storageKeys: (e || []).map(((e, r) => (32 !== (0, o.hexDataLength)(e) && d.throwArgumentError("invalid access list storageKey", `accessList[${t}:${r}]`, e), 
          e.toLowerCase())))
        };
      }
      function A(t) {
        if (Array.isArray(t)) return t.map(((t, e) => Array.isArray(t) ? (t.length > 2 && d.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${e}]`, t), 
        x(t[0], t[1])) : x(t.address, t.storageKeys)));
        const e = Object.keys(t).map((e => {
          const r = t[e].reduce(((t, e) => (t[e] = !0, t)), {});
          return x(e, Object.keys(r).sort());
        }));
        return e.sort(((t, e) => t.address.localeCompare(e.address))), e;
      }
      function B(t) {
        return A(t).map((t => [ t.address, t.storageKeys ]));
      }
      function E(t, e) {
        if (null != t.gasPrice) {
          const e = i.BigNumber.from(t.gasPrice);
          const r = i.BigNumber.from(t.maxFeePerGas || 0);
          e.eq(r) || d.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
            gasPrice: e,
            maxFeePerGas: r
          });
        }
        const r = [ k(t.chainId || 0, "chainId"), k(t.nonce || 0, "nonce"), k(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), k(t.maxFeePerGas || 0, "maxFeePerGas"), k(t.gasLimit || 0, "gasLimit"), null != t.to ? (0, 
        n.getAddress)(t.to) : "0x", k(t.value || 0, "value"), t.data || "0x", B(t.accessList || []) ];
        if (e) {
          const t = (0, o.splitSignature)(e);
          r.push(k(t.recoveryParam, "recoveryParam")), r.push((0, o.stripZeros)(t.r)), r.push((0, o.stripZeros)(t.s));
        }
        return (0, o.hexConcat)([ "0x02", h.encode(r) ]);
      }
      function _(t, e) {
        const r = [ k(t.chainId || 0, "chainId"), k(t.nonce || 0, "nonce"), k(t.gasPrice || 0, "gasPrice"), k(t.gasLimit || 0, "gasLimit"), null != t.to ? (0, 
        n.getAddress)(t.to) : "0x", k(t.value || 0, "value"), t.data || "0x", B(t.accessList || []) ];
        if (e) {
          const t = (0, o.splitSignature)(e);
          r.push(k(t.recoveryParam, "recoveryParam")), r.push((0, o.stripZeros)(t.r)), r.push((0, o.stripZeros)(t.s));
        }
        return (0, o.hexConcat)([ "0x01", h.encode(r) ]);
      }
      function N(t, e) {
        if (null == t.type || 0 === t.type) return null != t.accessList && d.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", t), 
        function(t, e) {
          (0, l.checkProperties)(t, y);
          const r = [];
          v.forEach((function(e) {
            let n = t[e.name] || [];
            const i = {};
            e.numeric && (i.hexPad = "left"), n = (0, o.arrayify)((0, o.hexlify)(n, i)), e.length && n.length !== e.length && n.length > 0 && d.throwArgumentError("invalid length for " + e.name, "transaction:" + e.name, n), 
            e.maxLength && (n = (0, o.stripZeros)(n), n.length > e.maxLength && d.throwArgumentError("invalid length for " + e.name, "transaction:" + e.name, n)), 
            r.push((0, o.hexlify)(n));
          }));
          let n = 0;
          if (null != t.chainId ? (n = t.chainId, "number" != typeof n && d.throwArgumentError("invalid transaction.chainId", "transaction", t)) : e && !(0, 
          o.isBytesLike)(e) && e.v > 28 && (n = Math.floor((e.v - 35) / 2)), 0 !== n && (r.push((0, o.hexlify)(n)), r.push("0x"), 
          r.push("0x")), !e) return h.encode(r);
          const i = (0, o.splitSignature)(e);
          let s = 27 + i.recoveryParam;
          return 0 !== n ? (r.pop(), r.pop(), r.pop(), s += 2 * n + 8, i.v > 28 && i.v !== s && d.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", e)) : i.v !== s && d.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", e), 
          r.push((0, o.hexlify)(s)), r.push((0, o.stripZeros)((0, o.arrayify)(i.r))), r.push((0, o.stripZeros)((0, o.arrayify)(i.s))), 
          h.encode(r);
        }(t, e);
        switch (t.type) {
         case 1:
          return _(t, e);

         case 2:
          return E(t, e);
        }
        return d.throwError(`unsupported transaction type: ${t.type}`, c.Logger.errors.UNSUPPORTED_OPERATION, {
          operation: "serializeTransaction",
          transactionType: t.type
        });
      }
      function L(t, e, r) {
        try {
          const r = p(e[0]).toNumber();
          if (0 !== r && 1 !== r) throw new Error("bad recid");
          t.v = r;
        } catch (n) {
          d.throwArgumentError("invalid v for transaction type: 1", "v", e[0]);
        }
        t.r = (0, o.hexZeroPad)(e[1], 32), t.s = (0, o.hexZeroPad)(e[2], 32);
        try {
          const e = (0, a.keccak256)(r(t));
          t.from = w(e, {
            r: t.r,
            s: t.s,
            recoveryParam: t.v
          });
        } catch (n) {
          console.log(n);
        }
      }
      function S(t) {
        const e = (0, o.arrayify)(t);
        if (e[0] > 127) return function(t) {
          const e = h.decode(t);
          9 !== e.length && 6 !== e.length && d.throwArgumentError("invalid raw transaction", "rawTransaction", t);
          const r = {
            nonce: p(e[0]).toNumber(),
            gasPrice: p(e[1]),
            gasLimit: p(e[2]),
            to: g(e[3]),
            value: p(e[4]),
            data: e[5],
            chainId: 0
          };
          if (6 === e.length) return r;
          try {
            r.v = i.BigNumber.from(e[6]).toNumber();
          } catch (n) {
            return console.log(n), r;
          }
          if (r.r = (0, o.hexZeroPad)(e[7], 32), r.s = (0, o.hexZeroPad)(e[8], 32), i.BigNumber.from(r.r).isZero() && i.BigNumber.from(r.s).isZero()) r.chainId = r.v, 
          r.v = 0; else {
            r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
            let i = r.v - 27;
            const s = e.slice(0, 6);
            0 !== r.chainId && (s.push((0, o.hexlify)(r.chainId)), s.push("0x"), s.push("0x"), i -= 2 * r.chainId + 8);
            const l = (0, a.keccak256)(h.encode(s));
            try {
              r.from = w(l, {
                r: (0, o.hexlify)(r.r),
                s: (0, o.hexlify)(r.s),
                recoveryParam: i
              });
            } catch (n) {
              console.log(n);
            }
            r.hash = (0, a.keccak256)(t);
          }
          return r.type = null, r;
        }(e);
        switch (e[0]) {
         case 1:
          return function(t) {
            const e = h.decode(t.slice(1));
            8 !== e.length && 11 !== e.length && d.throwArgumentError("invalid component count for transaction type: 1", "payload", (0, 
            o.hexlify)(t));
            const r = {
              type: 1,
              chainId: p(e[0]).toNumber(),
              nonce: p(e[1]).toNumber(),
              gasPrice: p(e[2]),
              gasLimit: p(e[3]),
              to: g(e[4]),
              value: p(e[5]),
              data: e[6],
              accessList: A(e[7])
            };
            return 8 === e.length || (r.hash = (0, a.keccak256)(t), L(r, e.slice(8), _)), r;
          }(e);

         case 2:
          return function(t) {
            const e = h.decode(t.slice(1));
            9 !== e.length && 12 !== e.length && d.throwArgumentError("invalid component count for transaction type: 2", "payload", (0, 
            o.hexlify)(t));
            const r = p(e[2]);
            const n = p(e[3]);
            const i = {
              type: 2,
              chainId: p(e[0]).toNumber(),
              nonce: p(e[1]).toNumber(),
              maxPriorityFeePerGas: r,
              maxFeePerGas: n,
              gasPrice: null,
              gasLimit: p(e[4]),
              to: g(e[5]),
              value: p(e[6]),
              data: e[7],
              accessList: A(e[8])
            };
            return 9 === e.length || (i.hash = (0, a.keccak256)(t), L(i, e.slice(9), E)), i;
          }(e);
        }
        return d.throwError(`unsupported transaction type: ${e[0]}`, c.Logger.errors.UNSUPPORTED_OPERATION, {
          operation: "parseTransaction",
          transactionType: e[0]
        });
      }
    },
    "./node_modules/@ethersproject/web/lib.esm/_version.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        version: () => n
      });
      const n = "web/5.4.0";
    },
    "./node_modules/@ethersproject/web/lib.esm/geturl.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        getUrl: () => o
      });
      var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var i = function(t, e, r, n) {
        return new (r || (r = Promise))((function(i, o) {
          function s(t) {
            try {
              l(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              l(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function l(t) {
            t.done ? i(t.value) : function(t) {
              return t instanceof r ? t : new r((function(e) {
                e(t);
              }));
            }(t.value).then(s, a);
          }
          l((n = n.apply(t, e || [])).next());
        }));
      };
      function o(t, e) {
        return i(this, void 0, void 0, (function*() {
          null == e && (e = {});
          const r = {
            method: e.method || "GET",
            headers: e.headers || {},
            body: e.body || void 0,
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            redirect: "follow",
            referrer: "client"
          };
          const i = yield fetch(t, r);
          const o = yield i.arrayBuffer();
          const s = {};
          return i.headers.forEach ? i.headers.forEach(((t, e) => {
            s[e.toLowerCase()] = t;
          })) : i.headers.keys().forEach((t => {
            s[t.toLowerCase()] = i.headers.get(t);
          })), {
            headers: s,
            statusCode: i.status,
            statusMessage: i.statusText,
            body: (0, n.arrayify)(new Uint8Array(o))
          };
        }));
      }
    },
    "./node_modules/@ethersproject/web/lib.esm/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        _fetchData: () => m,
        fetchJson: () => g,
        poll: () => p
      });
      var n = r("./node_modules/@ethersproject/base64/lib.esm/base64.js");
      var i = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var o = r("./node_modules/@ethersproject/properties/lib.esm/index.js");
      var s = r("./node_modules/@ethersproject/strings/lib.esm/utf8.js");
      var a = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
      var l = r("./node_modules/@ethersproject/web/lib.esm/_version.js");
      var h = r("./node_modules/@ethersproject/web/lib.esm/geturl.js");
      var u = function(t, e, r, n) {
        return new (r || (r = Promise))((function(i, o) {
          function s(t) {
            try {
              l(n.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              l(n.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function l(t) {
            t.done ? i(t.value) : function(t) {
              return t instanceof r ? t : new r((function(e) {
                e(t);
              }));
            }(t.value).then(s, a);
          }
          l((n = n.apply(t, e || [])).next());
        }));
      };
      const c = new a.Logger(l.version);
      function f(t) {
        return new Promise((e => {
          setTimeout(e, t);
        }));
      }
      function d(t, e) {
        if (null == t) return null;
        if ("string" == typeof t) return t;
        if ((0, i.isBytesLike)(t)) {
          if (e && ("text" === e.split("/")[0] || "application/json" === e.split(";")[0].trim())) try {
            return (0, s.toUtf8String)(t);
          } catch (r) {}
          return (0, i.hexlify)(t);
        }
        return t;
      }
      function m(t, e, r) {
        const i = "object" == typeof t && null != t.throttleLimit ? t.throttleLimit : 12;
        c.assertArgument(i > 0 && i % 1 == 0, "invalid connection throttle limit", "connection.throttleLimit", i);
        const o = "object" == typeof t ? t.throttleCallback : null;
        const l = "object" == typeof t && "number" == typeof t.throttleSlotInterval ? t.throttleSlotInterval : 100;
        c.assertArgument(l > 0 && l % 1 == 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", l);
        const m = {};
        let g = null;
        const p = {
          method: "GET"
        };
        let v = !1;
        let y = 12e4;
        if ("string" == typeof t) g = t; else if ("object" == typeof t) {
          if (null != t && null != t.url || c.throwArgumentError("missing URL", "connection.url", t), g = t.url, "number" == typeof t.timeout && t.timeout > 0 && (y = t.timeout), 
          t.headers) for (const e in t.headers) m[e.toLowerCase()] = {
            key: e,
            value: String(t.headers[e])
          }, [ "if-none-match", "if-modified-since" ].indexOf(e.toLowerCase()) >= 0 && (v = !0);
          if (p.allowGzip = !!t.allowGzip, null != t.user && null != t.password) {
            "https:" !== g.substring(0, 6) && !0 !== t.allowInsecureAuthentication && c.throwError("basic authentication requires a secure https url", a.Logger.errors.INVALID_ARGUMENT, {
              argument: "url",
              url: g,
              user: t.user,
              password: "[REDACTED]"
            });
            const e = t.user + ":" + t.password;
            m.authorization = {
              key: "Authorization",
              value: "Basic " + (0, n.encode)((0, s.toUtf8Bytes)(e))
            };
          }
        }
        e && (p.method = "POST", p.body = e, null == m["content-type"] && (m["content-type"] = {
          key: "Content-Type",
          value: "application/octet-stream"
        }), null == m["content-length"] && (m["content-length"] = {
          key: "Content-Length",
          value: String(e.length)
        }));
        const b = {};
        Object.keys(m).forEach((t => {
          const e = m[t];
          b[e.key] = e.value;
        })), p.headers = b;
        const w = function() {
          let t = null;
          return {
            promise: new Promise((function(e, r) {
              y && (t = setTimeout((() => {
                null != t && (t = null, r(c.makeError("timeout", a.Logger.errors.TIMEOUT, {
                  requestBody: d(p.body, b["content-type"]),
                  requestMethod: p.method,
                  timeout: y,
                  url: g
                })));
              }), y));
            })),
            cancel: function() {
              null != t && (clearTimeout(t), t = null);
            }
          };
        }();
        const k = function() {
          return u(this, void 0, void 0, (function*() {
            for (let e = 0; e < i; e++) {
              let n = null;
              try {
                if (n = yield (0, h.getUrl)(g, p), 429 === n.statusCode && e < i) {
                  let t = !0;
                  if (o && (t = yield o(e, g)), t) {
                    let t = 0;
                    const r = n.headers["retry-after"];
                    t = "string" == typeof r && r.match(/^[1-9][0-9]*$/) ? 1e3 * parseInt(r) : l * parseInt(String(Math.random() * Math.pow(2, e))), 
                    yield f(t);
                    continue;
                  }
                }
              } catch (t) {
                n = t.response, null == n && (w.cancel(), c.throwError("missing response", a.Logger.errors.SERVER_ERROR, {
                  requestBody: d(p.body, b["content-type"]),
                  requestMethod: p.method,
                  serverError: t,
                  url: g
                }));
              }
              let s = n.body;
              if (v && 304 === n.statusCode ? s = null : (n.statusCode < 200 || n.statusCode >= 300) && (w.cancel(), c.throwError("bad response", a.Logger.errors.SERVER_ERROR, {
                status: n.statusCode,
                headers: n.headers,
                body: d(s, n.headers ? n.headers["content-type"] : null),
                requestBody: d(p.body, b["content-type"]),
                requestMethod: p.method,
                url: g
              })), r) try {
                const t = yield r(s, n);
                return w.cancel(), t;
              } catch (t) {
                if (t.throttleRetry && e < i) {
                  let t = !0;
                  if (o && (t = yield o(e, g)), t) {
                    const t = l * parseInt(String(Math.random() * Math.pow(2, e)));
                    yield f(t);
                    continue;
                  }
                }
                w.cancel(), c.throwError("processing response error", a.Logger.errors.SERVER_ERROR, {
                  body: d(s, n.headers ? n.headers["content-type"] : null),
                  error: t,
                  requestBody: d(p.body, b["content-type"]),
                  requestMethod: p.method,
                  url: g
                });
              }
              return w.cancel(), s;
            }
            return c.throwError("failed response", a.Logger.errors.SERVER_ERROR, {
              requestBody: d(p.body, b["content-type"]),
              requestMethod: p.method,
              url: g
            });
          }));
        }();
        return Promise.race([ w.promise, k ]);
      }
      function g(t, e, r) {
        let n = null;
        if (null != e) {
          n = (0, s.toUtf8Bytes)(e);
          const r = "string" == typeof t ? {
            url: t
          } : (0, o.shallowCopy)(t);
          if (r.headers) {
            0 !== Object.keys(r.headers).filter((t => "content-type" === t.toLowerCase())).length || (r.headers = (0, o.shallowCopy)(r.headers), 
            r.headers["content-type"] = "application/json");
          } else r.headers = {
            "content-type": "application/json"
          };
          t = r;
        }
        return m(t, n, ((t, e) => {
          let n = null;
          if (null != t) try {
            n = JSON.parse((0, s.toUtf8String)(t));
          } catch (i) {
            c.throwError("invalid JSON", a.Logger.errors.SERVER_ERROR, {
              body: t,
              error: i
            });
          }
          return r && (n = r(n, e)), n;
        }));
      }
      function p(t, e) {
        return e || (e = {}), null == (e = (0, o.shallowCopy)(e)).floor && (e.floor = 0), null == e.ceiling && (e.ceiling = 1e4), 
        null == e.interval && (e.interval = 250), new Promise((function(r, n) {
          let i = null;
          let o = !1;
          const s = () => !o && (o = !0, i && clearTimeout(i), !0);
          e.timeout && (i = setTimeout((() => {
            s() && n(new Error("timeout"));
          }), e.timeout));
          const a = e.retryLimit;
          let l = 0;
          !function i() {
            return t().then((function(t) {
              if (void 0 !== t) s() && r(t); else if (e.oncePoll) e.oncePoll.once("poll", i); else if (e.onceBlock) e.onceBlock.once("block", i); else if (!o) {
                if (l++, l > a) return void (s() && n(new Error("retry limit reached")));
                let t = e.interval * parseInt(String(Math.random() * Math.pow(2, l)));
                t < e.floor && (t = e.floor), t > e.ceiling && (t = e.ceiling), setTimeout(i, t);
              }
              return null;
            }), (function(t) {
              s() && n(t);
            }));
          }();
        }));
      }
    },
    "./node_modules/@tokenscript/token-negotiator/dist/Attestation/AlgorithmIdentifier.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        default: () => o
      });
      var n = r("./node_modules/asn1js/src/asn1.js");
      var i = r("./node_modules/pvutils/src/utils.js");
      class o {
        constructor(t = {}) {
          if ("string" == typeof t) throw new TypeError("Unimplemented: Not accepting string yet.");
          if (t instanceof ArrayBuffer) {
            const e = fromBER(t);
            this.fromSchema(e.result);
          } else this.algorithmId = (0, i.getParametersValue)(t, "algorithmId"), "algorithmParams" in t && (this.algorithmParams = (0, 
          i.getParametersValue)(t, "algorithmParams", o.defaultValues("algorithmParams")));
        }
        static defaultValues(t) {
          if ("algorithmParams" === t) return new n.Any;
          throw new Error(`Invalid member name for AlgorithmIdentifier class: ${t}`);
        }
        static compareWithDefault(t, e) {
          switch (t) {
           case "algorithmId":
            return "" === e;

           case "algorithmParams":
            return e instanceof asn1js.Any;

           default:
            throw new Error(`Invalid member name for AlgorithmIdentifier class: ${t}`);
          }
        }
        static schema(t = {}) {
          const e = (0, i.getParametersValue)(t, "names", {});
          return new n.Sequence({
            name: e.blockName || "",
            optional: e.optional || !1,
            value: [ new n.ObjectIdentifier({
              name: e.algorithmIdentifier || "algorithm"
            }), new n.Any({
              name: e.algorithmParams || "parameters",
              optional: !0
            }) ]
          });
        }
        fromSchema(t) {
          (0, i.clearProps)(t, [ "algorithm", "params" ]);
          const e = (0, n.compareSchema)(t, t, o.schema({
            names: {
              algorithmIdentifier: "algorithm",
              algorithmParams: "params"
            }
          }));
          if (!1 === e.verified) throw new Error("Object's schema was not verified against input data for AlgorithmIdentifier");
          this.algorithmId = e.result.algorithm.valueBlock.toString(), "params" in e.result && (this.algorithmParams = e.result.params);
        }
        toSchema() {
          const t = [];
          return t.push(new n.ObjectIdentifier({
            value: this.algorithmId
          })), "algorithmParams" in this && this.algorithmParams instanceof asn1js.Any == !1 && t.push(this.algorithmParams), new n.Sequence({
            value: t
          });
        }
        toJSON() {
          const t = {
            algorithmId: this.algorithmId
          };
          return "algorithmParams" in this && this.algorithmParams instanceof asn1js.Any == !1 && (t.algorithmParams = this.algorithmParams.toJSON()), 
          t;
        }
        isEqual(t) {
          return t instanceof o != !1 && (this.algorithmId === t.algorithmId && ("algorithmParams" in this ? "algorithmParams" in t && JSON.stringify(this.algorithmParams) === JSON.stringify(t.algorithmParams) : !("algorithmParams" in t)));
        }
      }
    },
    "./node_modules/@tokenscript/token-negotiator/dist/Attestation/PublicKeyInfo.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        default: () => s
      });
      var n = r("./node_modules/asn1js/src/asn1.js");
      var i = r("./node_modules/pvutils/src/utils.js");
      var o = r("./node_modules/@tokenscript/token-negotiator/dist/Attestation/AlgorithmIdentifier.js");
      class s {
        constructor(t = {}) {
          if ("string" == typeof t) throw new TypeError("Not accepting string. For base64, convert to ArrayBuffer.");
          if (t instanceof ArrayBuffer) {
            const e = (0, n.fromBER)(t);
            this.fromSchema(e.result);
          } else this.signatureAlgorithm = (0, i.getParametersValue)(t, "signatureAlgorithm"), this.publicKey = (0, i.getParametersValue)(t, "publicKey");
        }
        static schema(t = {}) {
          const e = (0, i.getParametersValue)(t, "names", {});
          return new n.Sequence({
            name: e.blockName || "",
            optional: !0,
            value: [ o.default.schema(e.signatureAlgorithm || {
              names: {
                blockName: "signatureAlgorithm"
              }
            }), new n.BitString({
              name: "publicKey"
            }) ]
          });
        }
        fromSchema(t) {
          (0, i.clearProps)(t, [ "signatureAlgorithm", "publicKey" ]);
          if (!1 === (0, n.compareSchema)(t, t, s.schema({
            names: {
              signatureAlgorithm: "signatureAlgorithm",
              publicKey: "publicKey"
            }
          })).verified) throw new Error("Object's schema was not verified against input data for AlgorithmIdentifier");
        }
      }
    },
    "./node_modules/@tokenscript/token-negotiator/dist/Attestation/SignedDevonTicket.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        DevconTicket: () => s,
        SignedDevconTicket: () => a
      });
      var n = r("./node_modules/asn1js/src/asn1.js");
      var i = r("./node_modules/pvutils/src/utils.js");
      var o = r("./node_modules/@tokenscript/token-negotiator/dist/Attestation/PublicKeyInfo.js");
      class s {
        constructor(t = {}) {
          if ("string" == typeof t) throw new TypeError("Unimplemented: Not accepting string yet.");
          if (t instanceof ArrayBuffer) {
            const e = (0, n.fromBER)(t);
            this.fromSchema(e.result);
          } else this.devconId = (0, i.getParametersValue)(t, "devconId"), this.ticketId = (0, i.getParametersValue)(t, "ticketId"), 
          this.ticketClass = (0, i.getParametersValue)(t, "ticketClass");
        }
        static schema(t = {}) {
          const e = (0, i.getParametersValue)(t, "names", {});
          return new n.Sequence({
            name: e.blockName || "ticket",
            value: [ new n.Utf8String({
              name: e.devconId || "devconId"
            }), new n.Integer({
              name: e.ticketId || "ticketId"
            }), new n.Integer({
              name: e.ticketClass || "ticketClass"
            }) ]
          });
        }
        fromSchema(t) {
          (0, i.clearProps)(t, [ "devconId", "ticketId", "ticketClass" ]);
          const e = (0, n.compareSchema)(t, t, s.schema());
          if (!1 === e.verified) throw new Error("Object's schema was not verified against input data for DevconTicket");
          if ("devconId" in e.result && (this.devconId = e.result.devconId.valueBlock.value), "ticketId" in e.result) {
            const t = e.result.ticketId.valueBlock._valueHex;
            this.ticketId = parseInt("0x" + (0, i.bufferToHexCodes)(t), 16);
          }
          if ("ticketClass" in e.result) {
            const t = e.result.ticketClass.valueBlock._valueHex;
            this.ticketClass = parseInt("0x" + (0, i.bufferToHexCodes)(t), 16);
          }
        }
      }
      class a {
        constructor(t = {}) {
          if ("string" == typeof t) {
            let e = (t.startsWith("https://") ? new URL(t).searchParams.get('ticket') : t).split('_').join('/').split('-').join('+').split('.').join('=');
            t = 'undefined' != typeof Buffer ? Uint8Array.from(Buffer.from(e, 'base64')).buffer : Uint8Array.from(atob(e), (t => t.charCodeAt(0))).buffer;
          }
          if (t instanceof ArrayBuffer) {
            const e = (0, n.fromBER)(t);
            this.fromSchema(e.result);
          } else this.ticket = new s(t.ticket), this.commitment = (0, i.getParametersValue)(t, "commitment"), this.publicKeyInfo = new o.default(t.publicKeyInfo), 
          this.signatureValue = (0, i.getParametersValue)(t, "signatureValue");
        }
        static schema(t = {}) {
          const e = (0, i.getParametersValue)(t, "names", {});
          return new n.Sequence({
            name: e.blockName || "SignedDevconTicket",
            value: [ s.schema(t), new n.OctetString({
              name: "commitment"
            }), new n.BitString({
              name: "signatureValue"
            }) ]
          });
        }
        fromSchema(t) {
          (0, i.clearProps)(t, [ "ticket", "commitment", "publicKeyInfo", "signatureValue" ]);
          const e = (0, n.compareSchema)(t, t, a.schema());
          if (!1 === e.verified) throw new Error("Object's schema was not verified against input data for SignedDevconTicket");
          this.ticket = new s(e.result.ticket.valueBeforeDecode), "commitment" in e.result && (this.commitment = e.result.commitment.valueBlock.valueHex), 
          this.publicKeyInfo = new o.default({
            schema: e.result.publicKeyInfo
          });
          const r = e.result.signatureValue;
          this.signatureValue = r.valueBlock.valueHex;
        }
      }
    },
    "./node_modules/@tokenscript/token-negotiator/dist/client/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        Client: () => u
      });
      var n = r("./node_modules/@ethersproject/providers/lib.esm/web3-provider.js");
      var i = r("./node_modules/@ethersproject/hash/lib.esm/message.js");
      var o = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");
      var s = r("./node_modules/@ethersproject/transactions/lib.esm/index.js");
      var a = r("./node_modules/@tokenscript/token-negotiator/dist/core/index.js");
      var l = r("./node_modules/@tokenscript/token-negotiator/dist/config/index.js");
      var h = r("./node_modules/@tokenscript/token-negotiator/dist/client/overlayService.js");
      class u {
        constructor(t = {}, e, r = {}) {
          e || console.warn("Negotiator: tokenName is a required parameter"), !0 !== r.useOverlay || r.tokenSelectorContainer || console.warn("Negotiator: options.tokenSelectorContainer is a required parameter"), 
          this.tokenName = e, this.config = l.config[e], this.options = r, this.filter = t;
        }
        async negotiate() {
          if (!0 !== this.options.useOverlay) {
            return await (0, a.getTokens)({
              filter: this.filter,
              tokenName: this.config.tokenName,
              tokensOrigin: this.config.tokenOrigin,
              localStorageItemName: this.config.localStorageItemName,
              tokenParser: this.config.tokenParser,
              unsignedTokenDataName: this.config.unsignedTokenDataName
            });
          }
          this.negotiateViaOverlay();
        }
        negotiateViaOverlay() {
          const t = new h.default(this.config, this.options, this.filter);
          this.overlayClickHandler = t.overlayClickHandler;
        }
        async connectMetamaskAndGetAddress() {
          if (!window.ethereum) throw new Error('Please install metamask to continue.');
          const t = await window.ethereum.request({
            method: 'eth_requestAccounts'
          });
          if (!t || !t.length) throw new Error("Active Wallet required");
          return t[0];
        }
        async signMessageWithBrowserWallet(t) {
          await this.connectMetamaskAndGetAddress();
          let e = new n.Web3Provider(window.ethereum).getSigner();
          return await e.signMessage(t);
        }
        async authenticate({unsignedToken: t, unEndPoint: e}) {
          try {
            let t = await this.getChallengeSigned(e);
            const r = await this.validateUseEthKey(e, t);
            if ((await this.connectMetamaskAndGetAddress()).toLowerCase() !== r.toLowerCase()) throw new Error('useEthKey validation failed.');
            return this.useEthKey = t, {
              status: !0,
              useEthKey: t,
              proof: 'proof'
            };
          } catch (r) {
            return console.error(r), r;
          }
        }
        async validateUseEthKey(t, e) {
          try {
            const r = await fetch(t, {
              method: 'POST',
              cache: 'no-cache',
              headers: {
                'Content-Type': 'application/json'
              },
              redirect: 'follow',
              referrerPolicy: 'no-referrer',
              body: JSON.stringify(e)
            });
            return (await r.json()).address;
          } catch (r) {
            return console.error(r), '';
          }
        }
        async getUnpredictableNumber(t) {
          try {
            const e = await fetch(t);
            const r = await e.json();
            return r.success = !0, r;
          } catch (e) {
            return console.error(e), {
              success: !1,
              message: "UN request failed"
            };
          }
        }
        addTokenThroughIframe(t) {
          const e = document.createElement('iframe');
          e.src = t, e.style.width = '1px', e.style.height = '1px', e.style.opacity = '0', document.body.appendChild(e);
        }
        ethKeyIsValid(t) {
          return t.expiry >= Date.now();
        }
        async getChallengeSigned(t) {
          const e = localStorage.getItem(this.config.localStorageEthKeyItemName);
          let r;
          r = e && e.length ? JSON.parse(e) : {};
          try {
            let e = await this.connectMetamaskAndGetAddress();
            let n;
            return e = e.toLowerCase(), r && r[e] && !this.ethKeyIsValid(r[e]) && delete r[e], r && r[e] ? n = r[e] : (n = await this.signNewChallenge(t), 
            n && (r[n.address.toLowerCase()] = n, localStorage.setItem(this.config.localStorageEthKeyItemName, JSON.stringify(r)))), 
            n;
          } catch (n) {
            throw console.error(n), new Error(n.message);
          }
        }
        async signNewChallenge(t) {
          let e = await this.getUnpredictableNumber(t);
          const {number: r, randomness: n, domain: a, expiration: l, messageToSign: h} = e;
          let u = await this.signMessageWithBrowserWallet(h);
          const c = i.hashMessage(h);
          const f = o.arrayify(c);
          return {
            address: s.recoverAddress(f, u),
            expiry: l,
            domain: a,
            randomness: n,
            signature: u,
            UN: r
          };
        }
      }
    },
    "./node_modules/@tokenscript/token-negotiator/dist/client/overlayService.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        default: () => n
      });
      const n = class {
        constructor(t, e, r) {
          this.config = t, this.options = e, this.filter = r, this.assignClientListener(), this.embedClientOverlay(this.config.tokenName, this.config.tokenOverlayOrigin, this.options, this.filter);
        }
        isEventFromOverlay(t, e) {
          return t === e;
        }
        assignClientListener() {
          window.addEventListener('message', (t => {
            this.isEventFromOverlay(t.origin, this.config.tokenOverlayOrigin) && this.clientEventController(t.data);
          }), !1);
        }
        embedClientOverlay(t, e, r, n) {
          setTimeout((() => {
            let i = document.querySelector(r.tokenSelectorContainer);
            if (i) {
              const o = `<div class="${t}OverlayWrapper"><iframe class="${t}Overlay" style="border:0; resize: none; overflow: auto;" height="335px" width="376px" src="${e}" allowtransparency="true" title="outlet" frameborder="0" style="border:0" allowfullscreen frameborder="no" scrolling="no"></iframe></div>`;
              i.innerHTML = o;
              let s = document.querySelector(`${r.tokenSelectorContainer} .${t}Overlay`);
              s.onload = function() {
                s.contentWindow.postMessage({
                  evt: "getTokenButtonHTML",
                  data: {
                    tokenName: t,
                    filter: n,
                    options: r
                  }
                }, '*');
              };
            }
          }), 0);
        }
        clientEventController(t) {
          switch (t.evt) {
           case 'setTokenButtonHTML':
            if (!document.getElementById("tokenButtonContainer")) {
              let e = document.createElement("div");
              e.setAttribute('id', 'tokenButtonContainer'), e.style.cssText = "\n              display: flex; \n              justify-content: flex-end;\n              margin: 10px;\n            ", 
              e.innerHTML = t.button, document.querySelector(`${this.options.tokenSelectorContainer}`).style.margin = '10px', document.querySelector(`${this.options.tokenSelectorContainer}`).append(e);
            }
            break;

           case 'hideOverlay':
            document.querySelector(`${this.options.tokenSelectorContainer} .${this.config.tokenName}OverlayWrapper`).style.display = 'none';
            break;

           case 'showOverlay':
            document.querySelector(`${this.options.tokenSelectorContainer} .${this.config.tokenName}OverlayWrapper`).style.display = 'block';
          }
        }
        overlayClickHandler() {
          document.querySelector(`${this.options.tokenSelectorContainer} .${this.config.tokenName}Overlay`).contentWindow.postMessage({
            evt: "setToggleOverlayHandler"
          }, '*');
        }
      };
    },
    "./node_modules/@tokenscript/token-negotiator/dist/config/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        config: () => i
      });
      var n = r("./node_modules/@tokenscript/token-negotiator/dist/Attestation/SignedDevonTicket.js");
      const i = {
        "devcon-ticket-local-3002": {
          tokenName: 'devcon-ticket-local-3002',
          attestationOrigin: "https://stage.attestation.id",
          tokenOrigin: "http://localhost:3002",
          tokenOverlayOrigin: "http://localhost:3003",
          tokenUrlName: 'ticket',
          tokenSecretName: 'secret',
          tokenIdName: 'id',
          unsignedTokenDataName: 'ticket',
          tokenParser: n.SignedDevconTicket,
          localStorageItemName: 'dcTokens',
          localStorageEthKeyItemName: 'dcEthKeys',
          fabButton: '<svg width="100%" height="100%" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(4.74075,0,0,4.74075,0.34539,-0.00867743)"><circle cx="3.615" cy="3.709" r="3.654" style="fill:rgb(48,48,82);"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M335.21,270.71" style="fill:none;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M238.431,167.123L335.42,217.46L335.42,0L238.431,167.123Z" style="fill:rgb(50,163,215);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M429.734,167.123L335.42,217.46L335.42,0L429.734,167.123Z" style="fill:rgb(33,67,145);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M262.11,170.77L335.42,217.46L335.42,43.49L262.11,170.77Z" style="fill:rgb(228,35,39);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M408.74,170.77L335.42,217.46L335.42,43.49L408.74,170.77Z" style="fill:rgb(128,21,28);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M280.44,182.44L335.42,217.46L335.42,86.99L280.44,182.44Z" style="fill:rgb(252,206,13);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M390.41,182.44L335.42,217.46L335.42,86.99L390.41,182.44Z" style="fill:rgb(242,180,37);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M298.76,194.12L335.42,217.46L335.42,130.48L298.76,194.12Z" style="fill:rgb(249,239,96);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M372.08,194.12L335.42,217.46L335.42,130.48L372.08,194.12Z" style="fill:rgb(236,225,26);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M429.734,167.232L335.42,311.79L335.42,236.29L429.734,167.232Z" style="fill:rgb(33,67,145);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M238.861,167.232L335.42,311.79L335.42,236.29L238.861,167.232Z" style="fill:rgb(50,163,215);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M395.05,198.26L335.43,285.35L335.43,236.23L395.05,198.26Z" style="fill:rgb(128,21,28);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M276.08,198.26L335.43,285.35L335.43,236.23L276.08,198.26Z" style="fill:rgb(228,35,39);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M362.46,219.02L335.46,258.45L335.46,236.21L362.46,219.02Z" style="fill:rgb(242,180,37);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M308.59,219.02L335.46,258.45L335.46,236.21L308.59,219.02Z" style="fill:rgb(252,206,13);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="18.752" y="25.246" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="18.752" y="16.917" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781623,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="19.862" y="19.003" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="22.078" y="19.003" width="3.374px" height="3.126px" transform="matrix(0.843504,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="20.973" y="21.078" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781623,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="19.862" y="23.159" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781623,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="17.641" y="23.159" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781623,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="15.419" y="19.003" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="16.526" y="21.078" width="3.374px" height="3.126px" transform="matrix(0.843504,0,0,0.781623,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="17.641" y="19.003" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="19.862" y="14.841" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="17.641" y="14.841" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(1,0,0,1,-0.819193,-1.2433)"><g transform="matrix(0.0747812,0,0,0.0747812,-6.76392,7.08528)"><path d="M335.21,270.71" style="fill:none;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-6.76392,7.08528)"><path d="M243.78,159.1L335.42,217.46L335.42,0L243.78,159.1Z" style="fill:rgb(50,163,215);fill-rule:nonzero;"/><path d="M427.06,159.1L335.42,217.46L335.42,0L427.06,159.1Z" style="fill:rgb(33,67,145);fill-rule:nonzero;"/><path d="M262.11,170.77L335.42,217.46L335.42,43.49L262.11,170.77Z" style="fill:rgb(228,35,39);fill-rule:nonzero;"/><path d="M408.74,170.77L335.42,217.46L335.42,43.49L408.74,170.77Z" style="fill:rgb(128,21,28);fill-rule:nonzero;"/><path d="M280.44,182.44L335.42,217.46L335.42,86.99L280.44,182.44Z" style="fill:rgb(252,206,13);fill-rule:nonzero;"/><path d="M390.41,182.44L335.42,217.46L335.42,86.99L390.41,182.44Z" style="fill:rgb(242,180,37);fill-rule:nonzero;"/><path d="M298.76,194.12L335.42,217.46L335.42,130.48L298.76,194.12Z" style="fill:rgb(249,239,96);fill-rule:nonzero;"/><path d="M372.08,194.12L335.42,217.46L335.42,130.48L372.08,194.12Z" style="fill:rgb(236,225,26);fill-rule:nonzero;"/><path d="M427.06,177.93L335.42,311.79L335.42,236.29L427.06,177.93Z" style="fill:rgb(33,67,145);fill-rule:nonzero;"/><path d="M244.21,177.93L335.42,311.79L335.42,236.29L244.21,177.93Z" style="fill:rgb(50,163,215);fill-rule:nonzero;"/><path d="M395.05,198.26L335.43,285.35L335.43,236.23L395.05,198.26Z" style="fill:rgb(128,21,28);fill-rule:nonzero;"/><path d="M276.08,198.26L335.43,285.35L335.43,236.23L276.08,198.26Z" style="fill:rgb(228,35,39);fill-rule:nonzero;"/><path d="M362.46,219.02L335.46,258.45L335.46,236.21L362.46,219.02Z" style="fill:rgb(242,180,37);fill-rule:nonzero;"/><path d="M308.59,219.02L335.46,258.45L335.46,236.21L308.59,219.02Z" style="fill:rgb(252,206,13);fill-rule:nonzero;"/><path d="M335.42,217.46L347.95,195.72L322.9,195.72L335.42,217.46Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M335.42,130.48L347.95,108.73L322.9,108.73L335.42,130.48Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M347.95,152.22L360.47,130.48L335.42,130.48L347.95,152.22Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M373,152.22L385.53,130.48L360.47,130.48L373,152.22Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M360.47,173.97L373,152.22L347.95,152.22L360.47,173.97Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M347.95,195.72L360.47,173.97L335.42,173.97L347.95,195.72Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M322.9,195.72L335.42,173.97L310.37,173.97L322.9,195.72Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M297.84,152.22L285.32,130.48L310.37,130.48L297.84,152.22Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M310.37,173.97L297.84,152.22L322.9,152.22L310.37,173.97Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M322.9,152.22L310.37,130.48L335.42,130.48L322.9,152.22Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M347.95,108.73L360.47,86.99L335.42,86.99L347.95,108.73Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M322.9,108.73L310.37,86.99L335.42,86.99L322.9,108.73Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/></g></g><defs><image id="_Image1" width="4px" height="4px" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANUlEQVQImWP8////ZAYGBjUGCLjFxMDAwM+AAHxMDAwM8xkYGNigeD4LAwPDAQYGBheoioMAUS8HxsxdocEAAAAASUVORK5CYII="/></defs></svg'
        },
        "devcon-ticket-heroku": {
          tokenName: 'devcon-ticket-heroku',
          attestationOrigin: "https://stage.attestation.id",
          tokenOrigin: "https://devcontickets.herokuapp.com/outlet",
          tokenOverlayOrigin: "https://devcontickets.herokuapp.com/overlay",
          tokenUrlName: 'ticket',
          tokenSecretName: 'secret',
          tokenIdName: 'id',
          unsignedTokenDataName: 'ticket',
          tokenParser: n.SignedDevconTicket,
          localStorageItemName: 'dcTokens',
          localStorageEthKeyItemName: 'dcEthKeys',
          fabButton: '<svg width="100%" height="100%" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(4.74075,0,0,4.74075,0.34539,-0.00867743)"><circle cx="3.615" cy="3.709" r="3.654" style="fill:rgb(48,48,82);"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M335.21,270.71" style="fill:none;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M238.431,167.123L335.42,217.46L335.42,0L238.431,167.123Z" style="fill:rgb(50,163,215);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M429.734,167.123L335.42,217.46L335.42,0L429.734,167.123Z" style="fill:rgb(33,67,145);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M262.11,170.77L335.42,217.46L335.42,43.49L262.11,170.77Z" style="fill:rgb(228,35,39);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M408.74,170.77L335.42,217.46L335.42,43.49L408.74,170.77Z" style="fill:rgb(128,21,28);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M280.44,182.44L335.42,217.46L335.42,86.99L280.44,182.44Z" style="fill:rgb(252,206,13);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M390.41,182.44L335.42,217.46L335.42,86.99L390.41,182.44Z" style="fill:rgb(242,180,37);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M298.76,194.12L335.42,217.46L335.42,130.48L298.76,194.12Z" style="fill:rgb(249,239,96);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M372.08,194.12L335.42,217.46L335.42,130.48L372.08,194.12Z" style="fill:rgb(236,225,26);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M429.734,167.232L335.42,311.79L335.42,236.29L429.734,167.232Z" style="fill:rgb(33,67,145);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M238.861,167.232L335.42,311.79L335.42,236.29L238.861,167.232Z" style="fill:rgb(50,163,215);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M395.05,198.26L335.43,285.35L335.43,236.23L395.05,198.26Z" style="fill:rgb(128,21,28);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M276.08,198.26L335.43,285.35L335.43,236.23L276.08,198.26Z" style="fill:rgb(228,35,39);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M362.46,219.02L335.46,258.45L335.46,236.21L362.46,219.02Z" style="fill:rgb(242,180,37);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M308.59,219.02L335.46,258.45L335.46,236.21L308.59,219.02Z" style="fill:rgb(252,206,13);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="18.752" y="25.246" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="18.752" y="16.917" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781623,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="19.862" y="19.003" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="22.078" y="19.003" width="3.374px" height="3.126px" transform="matrix(0.843504,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="20.973" y="21.078" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781623,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="19.862" y="23.159" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781623,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="17.641" y="23.159" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781623,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="15.419" y="19.003" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="16.526" y="21.078" width="3.374px" height="3.126px" transform="matrix(0.843504,0,0,0.781623,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="17.641" y="19.003" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="19.862" y="14.841" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="17.641" y="14.841" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(1,0,0,1,-0.819193,-1.2433)"><g transform="matrix(0.0747812,0,0,0.0747812,-6.76392,7.08528)"><path d="M335.21,270.71" style="fill:none;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-6.76392,7.08528)"><path d="M243.78,159.1L335.42,217.46L335.42,0L243.78,159.1Z" style="fill:rgb(50,163,215);fill-rule:nonzero;"/><path d="M427.06,159.1L335.42,217.46L335.42,0L427.06,159.1Z" style="fill:rgb(33,67,145);fill-rule:nonzero;"/><path d="M262.11,170.77L335.42,217.46L335.42,43.49L262.11,170.77Z" style="fill:rgb(228,35,39);fill-rule:nonzero;"/><path d="M408.74,170.77L335.42,217.46L335.42,43.49L408.74,170.77Z" style="fill:rgb(128,21,28);fill-rule:nonzero;"/><path d="M280.44,182.44L335.42,217.46L335.42,86.99L280.44,182.44Z" style="fill:rgb(252,206,13);fill-rule:nonzero;"/><path d="M390.41,182.44L335.42,217.46L335.42,86.99L390.41,182.44Z" style="fill:rgb(242,180,37);fill-rule:nonzero;"/><path d="M298.76,194.12L335.42,217.46L335.42,130.48L298.76,194.12Z" style="fill:rgb(249,239,96);fill-rule:nonzero;"/><path d="M372.08,194.12L335.42,217.46L335.42,130.48L372.08,194.12Z" style="fill:rgb(236,225,26);fill-rule:nonzero;"/><path d="M427.06,177.93L335.42,311.79L335.42,236.29L427.06,177.93Z" style="fill:rgb(33,67,145);fill-rule:nonzero;"/><path d="M244.21,177.93L335.42,311.79L335.42,236.29L244.21,177.93Z" style="fill:rgb(50,163,215);fill-rule:nonzero;"/><path d="M395.05,198.26L335.43,285.35L335.43,236.23L395.05,198.26Z" style="fill:rgb(128,21,28);fill-rule:nonzero;"/><path d="M276.08,198.26L335.43,285.35L335.43,236.23L276.08,198.26Z" style="fill:rgb(228,35,39);fill-rule:nonzero;"/><path d="M362.46,219.02L335.46,258.45L335.46,236.21L362.46,219.02Z" style="fill:rgb(242,180,37);fill-rule:nonzero;"/><path d="M308.59,219.02L335.46,258.45L335.46,236.21L308.59,219.02Z" style="fill:rgb(252,206,13);fill-rule:nonzero;"/><path d="M335.42,217.46L347.95,195.72L322.9,195.72L335.42,217.46Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M335.42,130.48L347.95,108.73L322.9,108.73L335.42,130.48Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M347.95,152.22L360.47,130.48L335.42,130.48L347.95,152.22Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M373,152.22L385.53,130.48L360.47,130.48L373,152.22Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M360.47,173.97L373,152.22L347.95,152.22L360.47,173.97Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M347.95,195.72L360.47,173.97L335.42,173.97L347.95,195.72Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M322.9,195.72L335.42,173.97L310.37,173.97L322.9,195.72Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M297.84,152.22L285.32,130.48L310.37,130.48L297.84,152.22Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M310.37,173.97L297.84,152.22L322.9,152.22L310.37,173.97Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M322.9,152.22L310.37,130.48L335.42,130.48L322.9,152.22Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M347.95,108.73L360.47,86.99L335.42,86.99L347.95,108.73Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M322.9,108.73L310.37,86.99L335.42,86.99L322.9,108.73Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/></g></g><defs><image id="_Image1" width="4px" height="4px" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANUlEQVQImWP8////ZAYGBjUGCLjFxMDAwM+AAHxMDAwM8xkYGNigeD4LAwPDAQYGBheoioMAUS8HxsxdocEAAAAASUVORK5CYII="/></defs></svg'
        },
        "devcon-ticket": {
          tokenName: 'devcon-ticket',
          attestationOrigin: "https://stage.attestation.id",
          tokenOrigin: "https://tokenscript.github.io/token-negotiator-examples/token-outlet-website/build/index.html",
          tokenOverlayOrigin: "https://tokenscript.github.io/token-negotiator-examples/token-overlay-website/build/index.html",
          tokenUrlName: 'ticket',
          tokenSecretName: 'secret',
          tokenIdName: 'id',
          unsignedTokenDataName: 'ticket',
          tokenParser: n.SignedDevconTicket,
          localStorageItemName: 'dcTokens',
          localStorageEthKeyItemName: 'dcEthKeys',
          fabButton: '<svg width="100%" height="100%" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(4.74075,0,0,4.74075,0.34539,-0.00867743)"><circle cx="3.615" cy="3.709" r="3.654" style="fill:rgb(48,48,82);"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M335.21,270.71" style="fill:none;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M238.431,167.123L335.42,217.46L335.42,0L238.431,167.123Z" style="fill:rgb(50,163,215);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M429.734,167.123L335.42,217.46L335.42,0L429.734,167.123Z" style="fill:rgb(33,67,145);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M262.11,170.77L335.42,217.46L335.42,43.49L262.11,170.77Z" style="fill:rgb(228,35,39);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M408.74,170.77L335.42,217.46L335.42,43.49L408.74,170.77Z" style="fill:rgb(128,21,28);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M280.44,182.44L335.42,217.46L335.42,86.99L280.44,182.44Z" style="fill:rgb(252,206,13);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M390.41,182.44L335.42,217.46L335.42,86.99L390.41,182.44Z" style="fill:rgb(242,180,37);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M298.76,194.12L335.42,217.46L335.42,130.48L298.76,194.12Z" style="fill:rgb(249,239,96);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M372.08,194.12L335.42,217.46L335.42,130.48L372.08,194.12Z" style="fill:rgb(236,225,26);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M429.734,167.232L335.42,311.79L335.42,236.29L429.734,167.232Z" style="fill:rgb(33,67,145);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M238.861,167.232L335.42,311.79L335.42,236.29L238.861,167.232Z" style="fill:rgb(50,163,215);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M395.05,198.26L335.43,285.35L335.43,236.23L395.05,198.26Z" style="fill:rgb(128,21,28);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M276.08,198.26L335.43,285.35L335.43,236.23L276.08,198.26Z" style="fill:rgb(228,35,39);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M362.46,219.02L335.46,258.45L335.46,236.21L362.46,219.02Z" style="fill:rgb(242,180,37);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><path d="M308.59,219.02L335.46,258.45L335.46,236.21L308.59,219.02Z" style="fill:rgb(252,206,13);fill-rule:nonzero;stroke:white;stroke-width:20.06px;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="18.752" y="25.246" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="18.752" y="16.917" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781623,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="19.862" y="19.003" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="22.078" y="19.003" width="3.374px" height="3.126px" transform="matrix(0.843504,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="20.973" y="21.078" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781623,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="19.862" y="23.159" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781623,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="17.641" y="23.159" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781623,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="15.419" y="19.003" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="16.526" y="21.078" width="3.374px" height="3.126px" transform="matrix(0.843504,0,0,0.781623,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="17.641" y="19.003" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="19.862" y="14.841" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(0.0747812,0,0,0.0747812,-7.58311,5.84198)"><g transform="matrix(13.3723,-0,-0,13.3723,101.404,-78.121)"><use xlink:href="#_Image1" x="17.641" y="14.841" width="3.373px" height="3.126px" transform="matrix(0.843317,0,0,0.781436,0,0)"/></g></g><g transform="matrix(1,0,0,1,-0.819193,-1.2433)"><g transform="matrix(0.0747812,0,0,0.0747812,-6.76392,7.08528)"><path d="M335.21,270.71" style="fill:none;"/></g><g transform="matrix(0.0747812,0,0,0.0747812,-6.76392,7.08528)"><path d="M243.78,159.1L335.42,217.46L335.42,0L243.78,159.1Z" style="fill:rgb(50,163,215);fill-rule:nonzero;"/><path d="M427.06,159.1L335.42,217.46L335.42,0L427.06,159.1Z" style="fill:rgb(33,67,145);fill-rule:nonzero;"/><path d="M262.11,170.77L335.42,217.46L335.42,43.49L262.11,170.77Z" style="fill:rgb(228,35,39);fill-rule:nonzero;"/><path d="M408.74,170.77L335.42,217.46L335.42,43.49L408.74,170.77Z" style="fill:rgb(128,21,28);fill-rule:nonzero;"/><path d="M280.44,182.44L335.42,217.46L335.42,86.99L280.44,182.44Z" style="fill:rgb(252,206,13);fill-rule:nonzero;"/><path d="M390.41,182.44L335.42,217.46L335.42,86.99L390.41,182.44Z" style="fill:rgb(242,180,37);fill-rule:nonzero;"/><path d="M298.76,194.12L335.42,217.46L335.42,130.48L298.76,194.12Z" style="fill:rgb(249,239,96);fill-rule:nonzero;"/><path d="M372.08,194.12L335.42,217.46L335.42,130.48L372.08,194.12Z" style="fill:rgb(236,225,26);fill-rule:nonzero;"/><path d="M427.06,177.93L335.42,311.79L335.42,236.29L427.06,177.93Z" style="fill:rgb(33,67,145);fill-rule:nonzero;"/><path d="M244.21,177.93L335.42,311.79L335.42,236.29L244.21,177.93Z" style="fill:rgb(50,163,215);fill-rule:nonzero;"/><path d="M395.05,198.26L335.43,285.35L335.43,236.23L395.05,198.26Z" style="fill:rgb(128,21,28);fill-rule:nonzero;"/><path d="M276.08,198.26L335.43,285.35L335.43,236.23L276.08,198.26Z" style="fill:rgb(228,35,39);fill-rule:nonzero;"/><path d="M362.46,219.02L335.46,258.45L335.46,236.21L362.46,219.02Z" style="fill:rgb(242,180,37);fill-rule:nonzero;"/><path d="M308.59,219.02L335.46,258.45L335.46,236.21L308.59,219.02Z" style="fill:rgb(252,206,13);fill-rule:nonzero;"/><path d="M335.42,217.46L347.95,195.72L322.9,195.72L335.42,217.46Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M335.42,130.48L347.95,108.73L322.9,108.73L335.42,130.48Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M347.95,152.22L360.47,130.48L335.42,130.48L347.95,152.22Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M373,152.22L385.53,130.48L360.47,130.48L373,152.22Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M360.47,173.97L373,152.22L347.95,152.22L360.47,173.97Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M347.95,195.72L360.47,173.97L335.42,173.97L347.95,195.72Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M322.9,195.72L335.42,173.97L310.37,173.97L322.9,195.72Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M297.84,152.22L285.32,130.48L310.37,130.48L297.84,152.22Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M310.37,173.97L297.84,152.22L322.9,152.22L310.37,173.97Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M322.9,152.22L310.37,130.48L335.42,130.48L322.9,152.22Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M347.95,108.73L360.47,86.99L335.42,86.99L347.95,108.73Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/><path d="M322.9,108.73L310.37,86.99L335.42,86.99L322.9,108.73Z" style="fill:white;fill-opacity:0.75;fill-rule:nonzero;"/></g></g><defs><image id="_Image1" width="4px" height="4px" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANUlEQVQImWP8////ZAYGBjUGCLjFxMDAwM+AAHxMDAwM8xkYGNigeD4LAwPDAQYGBheoioMAUS8HxsxdocEAAAAASUVORK5CYII="/></defs></svg'
        }
      };
    },
    "./node_modules/@tokenscript/token-negotiator/dist/core/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        filterTokens: () => i,
        readTokens: () => o,
        decodeTokens: () => s,
        openOutletIframe: () => a,
        getTokens: () => l,
        storeMagicURL: () => h,
        readMagicUrl: () => u
      });
      var n = r("./node_modules/@tokenscript/token-negotiator/dist/utils/index.js");
      const i = (t, e = {}) => {
        0 === Object.keys(e).length && (e = e);
        let r = [];
        if (t.length && "object" == typeof e && Object.keys(e).length) {
          let n = Object.keys(e);
          return t.forEach((t => {
            let i = 1;
            n.forEach((r => {
              t[r].toString() !== e[r].toString() && (i = 0);
            })), i && r.push(t);
          })), r;
        }
        return t;
      };
      const o = t => {
        const e = localStorage.getItem(t);
        let r = [];
        let n = {
          tokens: [],
          noTokens: !0,
          success: !0
        };
        try {
          e && e.length && (r = JSON.parse(e), 0 !== r.length && r.forEach((t => {
            t.token && t.secret && n.tokens.push(t);
          })), n.tokens.length && (n.noTokens = !1));
        } catch (i) {
          console.log('Cant parse tokens in LocalStorage'), "function" == typeof callBack && (n.success = !1);
        }
        return n;
      };
      const s = (t, e, r) => t.map((t => {
        if (t.token) {
          let i = new e((0, n.base64ToUint8array)(t.token).buffer);
          if (i && i[r]) return i[r];
        }
      }));
      const a = (t, e) => new Promise(((r, n) => {
        const i = document.createElement('iframe');
        i.src = t, i.style.width = '1px', i.style.height = '1px', i.style.opacity = '0', document.body.appendChild(i), i.onload = () => {
          i.contentWindow.postMessage({
            evt: 'getTokens',
            localStorageItemName: e
          }, "*"), r(!0);
        };
      }));
      const l = async ({filter: t = {}, tokenName: e, tokensOrigin: r, localStorageItemName: n, tokenParser: o, unsignedTokenDataName: l}) => new Promise(((e, h) => {
        window.addEventListener('message', (function(r) {
          if ('setTokens' === r.data.evt) {
            const n = s(r.data.tokens.tokens, o, l);
            const a = i(n, t);
            e(a);
          }
        }), !1), a(r, n);
      }));
      const h = (t, e) => localStorage.setItem(e, JSON.stringify(t));
      const u = (t, e, r, n) => {
        const i = new URLSearchParams(window.location.search);
        const s = i.get(t);
        const a = i.get(e);
        const l = i.get(r);
        if (!s || !a) return;
        let u = o(n);
        let c = !0;
        const f = u.tokens.map((t => {
          t.token === s && (c = !1);
        }));
        c && f.push({
          token: s,
          secret: a,
          id: l,
          magic_link: window.location.href
        }), h(f, n);
      };
    },
    "./node_modules/@tokenscript/token-negotiator/dist/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        Overlay: () => n.Overlay,
        Outlet: () => i.Outlet,
        Client: () => o.Client
      });
      var n = r("./node_modules/@tokenscript/token-negotiator/dist/overlay/index.js");
      var i = r("./node_modules/@tokenscript/token-negotiator/dist/outlet/index.js");
      var o = r("./node_modules/@tokenscript/token-negotiator/dist/client/index.js");
    },
    "./node_modules/@tokenscript/token-negotiator/dist/outlet/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        Outlet: () => s
      });
      var n = r("./node_modules/@tokenscript/token-negotiator/dist/core/index.js");
      var i = r("./node_modules/@tokenscript/token-negotiator/dist/outlet/outletService.js");
      var o = r("./node_modules/@tokenscript/token-negotiator/dist/config/index.js");
      class s {
        constructor({tokenName: t}) {
          const e = new i.default;
          window.addEventListener('message', (function(t) {
            e.eventReciever(t.data);
          }), !1);
          const {tokenUrlName: r, tokenSecretName: s, tokenIdName: a, localStorageItemName: l} = o.config[t];
          (0, n.readMagicUrl)(r, s, a, l);
        }
      }
    },
    "./node_modules/@tokenscript/token-negotiator/dist/outlet/outletService.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        default: () => i
      });
      var n = r("./node_modules/@tokenscript/token-negotiator/dist/core/index.js");
      const i = class {
        constructor() {
          this.eventReciever = t => {
            if ('getTokens' === t.evt) {
              const e = (0, n.readTokens)(t.localStorageItemName);
              this.eventSender.emitTokens(e);
            }
          }, this.eventSender = {
            emitTokens: t => {
              window.parent.postMessage({
                evt: 'setTokens',
                tokens: t
              }, "*");
            }
          };
        }
      };
    },
    "./node_modules/@tokenscript/token-negotiator/dist/overlay/componentFactory.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        createOverlayMarkup: () => n,
        createToken: () => i,
        createFabButton: () => o
      });
      const n = () => "\n    <div class=\"overlay\">\n      <div class=\"brand\"></div>\n      <p class=\"headline\">Available Tokens</p>\n      <div class=\"token-container\">\n        <p style=\"padding: 0 16px; color: grey\">No tokens available.</p>\n      </div>\n    </div>\n  ";
      const i = (t, e, r) => `\n    <div class='token'>\n      <div class='content'>\n        <svg class='emblem' src=${r} />\n        <div class='data'>\n          <p class='title'>Devcon Ticket #${e}</p>\n          <p class='detail'>Discount for Hotels and VIP Section</p>\n        </div>\n      </div>\n      <div class='toggle'>\n        <input onClick='tokenToggleSelection()' data-index='${e}' data-token='${JSON.stringify(t)}' type='checkbox' name='toggle${e}' class='mobileToggle' id='toggle${e}'>\n        <label for='toggle${e}'></label>\n      </div>\n    </div>\n  `;
      const o = t => `\n    <button onclick="negotiator.overlayClickHandler()" style="padding: 0; height:80px; width:80px; border: 0; box-shadow: 0 2px 5px 0 #676767; border-radius: 64px; cursor: pointer; z-index: 999; position: relative;">\n      <svg src=${t}></svg>\n    </button>\n  `;
    },
    "./node_modules/@tokenscript/token-negotiator/dist/overlay/devUtils.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        applyDevelopmentMode: () => n
      });
      const n = (t = "devcon-ticket", e = ".tokenSelectorContainerElement", r = "http://localhost:3002/", n = "dcTokens", i) => {
        const o = {
          tokenName: t,
          filter: {},
          options: {
            tokenSelectorContainer: e
          }
        };
        document.querySelector('.tk-overlay').innerHTML = i.createOverlayMarkup(), i.configuration = {
          filter: o.filter,
          tokenName: o.tokenName,
          options: o.options
        }, i.getTokens({
          filter: {},
          tokenName: t,
          tokensOrigin: r,
          localStorageItemName: n,
          tokenParser: i.config.tokenParser,
          unsignedTokenDataName: i.config.unsignedTokenDataName
        }).then((t => {
          i.addTokens(t);
        })), document.getElementsByClassName('overlay')[0].style.cssText = "opacity: 1; top: -320px; left: -278px;";
        let s = document.createElement("div");
        s.innerHTML = i.createFabButton(i.config.fabButton), document.getElementsByClassName('tk-overlay')[0].appendChild(s), window.negotiator = {
          overlayClickHandler: () => {
            console.info('toggle simulation is not available in development mode.');
          }
        };
      };
    },
    "./node_modules/@tokenscript/token-negotiator/dist/overlay/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        Overlay: () => o
      });
      var n = r("./node_modules/@tokenscript/token-negotiator/dist/overlay/negotiatorService.js");
      var i = r("./node_modules/@tokenscript/token-negotiator/dist/overlay/devUtils.js");
      class o {
        constructor() {
          const t = new n.default;
          window.addEventListener('message', (function(e) {
            t.eventReciever(e.data);
          }), !1), window.tokenToggleSelection = () => {
            let e = [];
            document.querySelectorAll('.token .mobileToggle').forEach((t => {
              !0 === t.checked && e.push(JSON.parse(t.dataset.token));
            })), t.selectedTokens = e, t.eventSender.emitSelectedTokens();
          }, window.top === window.self && (0, i.applyDevelopmentMode)('devcon-ticket', ".tokenSelectorContainerElement", "http://localhost:3002/", "dcTokens", t);
        }
      }
    },
    "./node_modules/@tokenscript/token-negotiator/dist/overlay/negotiatorService.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        default: () => s
      });
      var n = r("./node_modules/@tokenscript/token-negotiator/dist/config/index.js");
      var i = r("./node_modules/@tokenscript/token-negotiator/dist/core/index.js");
      var o = r("./node_modules/@tokenscript/token-negotiator/dist/overlay/componentFactory.js");
      const s = class {
        constructor() {
          this.eventReciever = t => {
            const {data: e, evt: r} = t;
            switch (r) {
             case 'getTokenButtonHTML':
              if (!e.tokenName) return console.warn('token negotiator: overlay eventReciever() missing required parameters.');
              document.querySelector('.tk-overlay').innerHTML = this.createOverlayMarkup(), document.getElementsByClassName('overlay')[0].style.transition = 'all 0.2s ease-out', 
              this.configuration = {
                filter: e.filter,
                tokenName: e.tokenName,
                options: e.options
              }, this.getTokens({
                filter: this.filter,
                tokenName: this.config.tokenName,
                tokensOrigin: this.config.tokenOrigin,
                localStorageItemName: this.config.localStorageItemName,
                tokenParser: this.config.tokenParser,
                unsignedTokenDataName: this.config.unsignedTokenDataName
              }).then((t => {
                this.addTokens(t), this.eventSender.emitTokenButtonHTML();
              }));
              break;

             case 'setSelectedTokens':
              this.eventSender.emitSelectedTokens();
              break;

             case 'setToggleOverlayHandler':
              this.eventSender.emitOverlayToggleState();
            }
          }, this.eventSender = {
            emitTokenButtonHTML: () => {
              window.top.postMessage({
                evt: 'setTokenButtonHTML',
                button: this.createFabButton(this.config.fabButton)
              }, "*");
            },
            emitSelectedTokens: () => {
              window.top.postMessage({
                evt: 'setSelectedTokens',
                selectedTokens: this.selectedTokens
              }, "*");
            },
            overlayClickTimer: null,
            emitOverlayToggleState: () => {
              const t = this.overlayClickHandler();
              clearTimeout(this.overlayClickTimer), 'close' === t ? this.overlayClickTimer = setTimeout((() => {
                window.top.postMessage({
                  evt: 'hideOvelay',
                  state: t
                }, "*");
              }), 1e3) : window.top.postMessage({
                evt: 'showOverlay',
                state: t
              }, "*");
            }
          }, this.overlayClickHandler = () => {
            const t = document.querySelector(".tk-overlay .overlay");
            const e = t.classList.contains("open");
            return t.classList.toggle("open"), e ? (window.top.postMessage({
              evt: 'hideOverlay',
              state: 'close'
            }, "*"), t.classList.remove("open"), 'close') : (window.top.postMessage({
              evt: 'hideOverlay',
              state: 'open'
            }, "*"), t.classList.add("open"), 'open');
          }, this.addTokens = t => {
            const e = document.querySelector('.tk-overlay .token-container');
            this.addToken(e, t.map(((t, e) => this.createToken(t, e, this.config.fabButton))).join(''));
          }, this.addToken = (t, e) => {
            t.innerHTML = e;
          }, this.createOverlayMarkup = o.createOverlayMarkup, this.createToken = o.createToken, this.createFabButton = o.createFabButton, 
          this.getTokens = i.getTokens, this.selectedTokenState = [];
        }
        set configuration({filter: t, tokenName: e, options: r}) {
          this.filter = t, this.options = r, this.config = n.config[e], this.tokenParser = this.config.tokenParser;
        }
        get selectedTokens() {
          return this.selectedTokenState;
        }
        set selectedTokens(t) {
          this.selectedTokenState = t;
        }
      };
    },
    "./node_modules/@tokenscript/token-negotiator/dist/utils/index.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        compareObjects: () => i,
        base64ToUint8array: () => o
      });
      var n = r("./node_modules/buffer/index.js");
      const i = (t, e) => JSON.stringify(t) === JSON.stringify(e);
      const o = t => (t = t.split('-').join('+').split('_').join('/').split('.').join('='), Uint8Array.from(n.Buffer.from(t, 'base64')));
    },
    "./node_modules/asn1js/node_modules/pvutils/src/utils.js": (t, e, r) => {
      "use strict";
      function n(t) {
        return new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
      }
      function i(t, e, r) {
        return t instanceof Object == !1 ? r : e in t ? t[e] : r;
      }
      function o(t, e = 0, r = t.byteLength - e, n = !1) {
        let i = "";
        for (const o of new Uint8Array(t, e, r)) {
          const t = o.toString(16).toUpperCase();
          1 === t.length && (i += "0"), i += t, n && (i += " ");
        }
        return i.trim();
      }
      function s(t, e, r, n) {
        return e instanceof ArrayBuffer == !1 ? (t.error = "Wrong parameter: inputBuffer must be \"ArrayBuffer\"", !1) : 0 === e.byteLength ? (t.error = "Wrong parameter: inputBuffer has zero length", 
        !1) : r < 0 ? (t.error = "Wrong parameter: inputOffset less than zero", !1) : n < 0 ? (t.error = "Wrong parameter: inputLength less than zero", 
        !1) : !(e.byteLength - r - n < 0) || (t.error = "End of input reached before message was fully decoded (inconsistent offset and length values)", 
        !1);
      }
      function a(t, e) {
        let r = 0;
        if (1 === t.length) return t[0];
        for (let n = t.length - 1; n >= 0; n--) r += t[t.length - 1 - n] * Math.pow(2, e * n);
        return r;
      }
      function l(t, e, r = -1) {
        const n = r;
        let i = t;
        let o = 0;
        let s = Math.pow(2, e);
        for (let a = 1; a < 8; a++) {
          if (t < s) {
            let t;
            if (n < 0) t = new ArrayBuffer(a), o = a; else {
              if (n < a) return new ArrayBuffer(0);
              t = new ArrayBuffer(n), o = n;
            }
            const r = new Uint8Array(t);
            for (let n = a - 1; n >= 0; n--) {
              const t = Math.pow(2, n * e);
              r[o - n - 1] = Math.floor(i / t), i -= r[o - n - 1] * t;
            }
            return t;
          }
          s *= Math.pow(2, e);
        }
        return new ArrayBuffer(0);
      }
      function h(...t) {
        let e = 0;
        let r = 0;
        for (const o of t) e += o.byteLength;
        const n = new ArrayBuffer(e);
        const i = new Uint8Array(n);
        for (const o of t) i.set(new Uint8Array(o), r), r += o.byteLength;
        return n;
      }
      function u(...t) {
        let e = 0;
        let r = 0;
        for (const o of t) e += o.length;
        const n = new ArrayBuffer(e);
        const i = new Uint8Array(n);
        for (const o of t) i.set(o, r), r += o.length;
        return i;
      }
      function c() {
        const t = new Uint8Array(this.valueHex);
        if (this.valueHex.byteLength >= 2) {
          const e = 255 === t[0] && 128 & t[1];
          const r = 0 === t[0] && 0 == (128 & t[1]);
          (e || r) && this.warnings.push("Needlessly long format");
        }
        const e = new ArrayBuffer(this.valueHex.byteLength);
        const r = new Uint8Array(e);
        for (let s = 0; s < this.valueHex.byteLength; s++) r[s] = 0;
        r[0] = 128 & t[0];
        const n = a(r, 8);
        const i = new ArrayBuffer(this.valueHex.byteLength);
        const o = new Uint8Array(i);
        for (let s = 0; s < this.valueHex.byteLength; s++) o[s] = t[s];
        o[0] &= 127;
        return a(o, 8) - n;
      }
      function f(t) {
        const e = t < 0 ? -1 * t : t;
        let r = 128;
        for (let n = 1; n < 8; n++) {
          if (e <= r) {
            if (t < 0) {
              const t = l(r - e, 8, n);
              return new Uint8Array(t)[0] |= 128, t;
            }
            let i = l(e, 8, n);
            let o = new Uint8Array(i);
            if (128 & o[0]) {
              const t = i.slice(0);
              const e = new Uint8Array(t);
              i = new ArrayBuffer(i.byteLength + 1), o = new Uint8Array(i);
              for (let r = 0; r < t.byteLength; r++) o[r + 1] = e[r];
              o[0] = 0;
            }
            return i;
          }
          r *= Math.pow(2, 8);
        }
        return new ArrayBuffer(0);
      }
      function d(t, e) {
        if (t.byteLength !== e.byteLength) return !1;
        const r = new Uint8Array(t);
        const n = new Uint8Array(e);
        for (let i = 0; i < r.length; i++) if (r[i] !== n[i]) return !1;
        return !0;
      }
      function m(t, e) {
        const r = t.toString(10);
        if (e < r.length) return "";
        const n = e - r.length;
        const i = new Array(n);
        for (let o = 0; o < n; o++) i[o] = "0";
        return i.join("").concat(r);
      }
      r.r(e), r.d(e, {
        getUTCDate: () => n,
        getParametersValue: () => i,
        bufferToHexCodes: () => o,
        checkBufferParams: () => s,
        utilFromBase: () => a,
        utilToBase: () => l,
        utilConcatBuf: () => h,
        utilConcatView: () => u,
        utilDecodeTC: () => c,
        utilEncodeTC: () => f,
        isEqualBuffer: () => d,
        padNumber: () => m,
        toBase64: () => v,
        fromBase64: () => y,
        arrayBufferToString: () => b,
        stringToArrayBuffer: () => w,
        nearestPowerOf2: () => x,
        clearProps: () => A
      });
      const g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
      function v(t, e = !1, r = !1, n = !1) {
        let i = 0;
        let o = 0;
        let s = 0;
        let a = "";
        const l = e ? p : g;
        if (n) {
          let e = 0;
          for (let r = 0; r < t.length; r++) if (0 !== t.charCodeAt(r)) {
            e = r;
            break;
          }
          t = t.slice(e);
        }
        for (;i < t.length; ) {
          const e = t.charCodeAt(i++);
          i >= t.length && (o = 1);
          const n = t.charCodeAt(i++);
          i >= t.length && (s = 1);
          const h = t.charCodeAt(i++);
          const u = e >> 2;
          const c = (3 & e) << 4 | n >> 4;
          let f = (15 & n) << 2 | h >> 6;
          let d = 63 & h;
          1 === o ? f = d = 64 : 1 === s && (d = 64), a += r ? 64 === f ? `${l.charAt(u)}${l.charAt(c)}` : 64 === d ? `${l.charAt(u)}${l.charAt(c)}${l.charAt(f)}` : `${l.charAt(u)}${l.charAt(c)}${l.charAt(f)}${l.charAt(d)}` : `${l.charAt(u)}${l.charAt(c)}${l.charAt(f)}${l.charAt(d)}`;
        }
        return a;
      }
      function y(t, e = !1, r = !1) {
        const n = e ? p : g;
        function i(t) {
          for (let e = 0; e < 64; e++) if (n.charAt(e) === t) return e;
          return 64;
        }
        function o(t) {
          return 64 === t ? 0 : t;
        }
        let s = 0;
        let a = "";
        for (;s < t.length; ) {
          const e = i(t.charAt(s++));
          const r = s >= t.length ? 0 : i(t.charAt(s++));
          const n = s >= t.length ? 0 : i(t.charAt(s++));
          const l = s >= t.length ? 0 : i(t.charAt(s++));
          const h = o(e) << 2 | o(r) >> 4;
          const u = (15 & o(r)) << 4 | o(n) >> 2;
          const c = (3 & o(n)) << 6 | o(l);
          a += String.fromCharCode(h), 64 !== n && (a += String.fromCharCode(u)), 64 !== l && (a += String.fromCharCode(c));
        }
        if (r) {
          let t = -1;
          for (let e = a.length - 1; e >= 0; e--) if (0 !== a.charCodeAt(e)) {
            t = e;
            break;
          }
          a = -1 !== t ? a.slice(0, t + 1) : "";
        }
        return a;
      }
      function b(t) {
        let e = "";
        const r = new Uint8Array(t);
        for (const n of r) e += String.fromCharCode(n);
        return e;
      }
      function w(t) {
        const e = t.length;
        const r = new ArrayBuffer(e);
        const n = new Uint8Array(r);
        for (let i = 0; i < e; i++) n[i] = t.charCodeAt(i);
        return r;
      }
      const k = Math.log(2);
      function x(t) {
        const e = Math.log(t) / k;
        const r = Math.floor(e);
        const n = Math.round(e);
        return r === n ? r : n;
      }
      function A(t, e) {
        for (const r of e) delete t[r];
      }
    },
    "./node_modules/asn1js/src/asn1.js": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        HexBlock: () => a,
        ValueBlock: () => u,
        BaseBlock: () => c,
        Primitive: () => d,
        Constructed: () => g,
        EndOfContent: () => v,
        Boolean: () => b,
        Sequence: () => w,
        Set: () => k,
        Null: () => x,
        OctetString: () => B,
        BitString: () => _,
        Integer: () => L,
        Enumerated: () => S,
        ObjectIdentifier: () => C,
        Utf8String: () => P,
        RelativeObjectIdentifier: () => R,
        BmpString: () => F,
        UniversalString: () => D,
        NumericString: () => q,
        PrintableString: () => G,
        TeletexString: () => V,
        VideotexString: () => $,
        IA5String: () => W,
        GraphicString: () => J,
        VisibleString: () => K,
        GeneralString: () => Y,
        CharacterString: () => X,
        UTCTime: () => Q,
        GeneralizedTime: () => tt,
        DATE: () => et,
        TimeOfDay: () => rt,
        DateTime: () => nt,
        Duration: () => it,
        TIME: () => ot,
        Choice: () => st,
        Any: () => at,
        Repeated: () => lt,
        RawData: () => ht,
        fromBER: () => ct,
        compareSchema: () => ft,
        verifySchema: () => dt,
        fromJSON: () => mt
      });
      var n = r("./node_modules/asn1js/node_modules/pvutils/src/utils.js");
      const i = [ new Uint8Array([ 1 ]) ];
      const o = "0123456789";
      class s {
        constructor(t = {}) {
          this.blockLength = (0, n.getParametersValue)(t, "blockLength", 0), this.error = (0, n.getParametersValue)(t, "error", ""), 
          this.warnings = (0, n.getParametersValue)(t, "warnings", []), this.valueBeforeDecode = "valueBeforeDecode" in t ? t.valueBeforeDecode.slice(0) : new ArrayBuffer(0);
        }
        static blockName() {
          return "baseBlock";
        }
        toJSON() {
          return {
            blockName: this.constructor.blockName(),
            blockLength: this.blockLength,
            error: this.error,
            warnings: this.warnings,
            valueBeforeDecode: (0, n.bufferToHexCodes)(this.valueBeforeDecode, 0, this.valueBeforeDecode.byteLength)
          };
        }
      }
      const a = t => class extends t {
        constructor(t = {}) {
          super(t), this.isHexOnly = (0, n.getParametersValue)(t, "isHexOnly", !1), this.valueHex = "valueHex" in t ? t.valueHex.slice(0) : new ArrayBuffer(0);
        }
        static blockName() {
          return "hexBlock";
        }
        fromBER(t, e, r) {
          if (!1 === (0, n.checkBufferParams)(this, t, e, r)) return -1;
          return 0 === new Uint8Array(t, e, r).length ? (this.warnings.push("Zero buffer length"), e) : (this.valueHex = t.slice(e, e + r), 
          this.blockLength = r, e + r);
        }
        toBER(t = !1) {
          return !0 !== this.isHexOnly ? (this.error = "Flag \"isHexOnly\" is not set, abort", new ArrayBuffer(0)) : !0 === t ? new ArrayBuffer(this.valueHex.byteLength) : this.valueHex.slice(0);
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.blockName = this.constructor.blockName(), t.isHexOnly = this.isHexOnly, t.valueHex = (0, n.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength), 
          t;
        }
      };
      class l extends(a(s)){
        constructor(t = {}) {
          super(), "idBlock" in t ? (this.isHexOnly = (0, n.getParametersValue)(t.idBlock, "isHexOnly", !1), this.valueHex = (0, n.getParametersValue)(t.idBlock, "valueHex", new ArrayBuffer(0)), 
          this.tagClass = (0, n.getParametersValue)(t.idBlock, "tagClass", -1), this.tagNumber = (0, n.getParametersValue)(t.idBlock, "tagNumber", -1), 
          this.isConstructed = (0, n.getParametersValue)(t.idBlock, "isConstructed", !1)) : (this.tagClass = -1, this.tagNumber = -1, 
          this.isConstructed = !1);
        }
        static blockName() {
          return "identificationBlock";
        }
        toBER(t = !1) {
          let e = 0;
          let r;
          let i;
          switch (this.tagClass) {
           case 1:
            e |= 0;
            break;

           case 2:
            e |= 64;
            break;

           case 3:
            e |= 128;
            break;

           case 4:
            e |= 192;
            break;

           default:
            return this.error = "Unknown tag class", new ArrayBuffer(0);
          }
          if (this.isConstructed && (e |= 32), this.tagNumber < 31 && !this.isHexOnly) {
            if (r = new ArrayBuffer(1), i = new Uint8Array(r), !t) {
              let t = this.tagNumber;
              t &= 31, e |= t, i[0] = e;
            }
            return r;
          }
          if (!1 === this.isHexOnly) {
            const o = (0, n.utilToBase)(this.tagNumber, 7);
            const s = new Uint8Array(o);
            const a = o.byteLength;
            if (r = new ArrayBuffer(a + 1), i = new Uint8Array(r), i[0] = 31 | e, !t) {
              for (let t = 0; t < a - 1; t++) i[t + 1] = 128 | s[t];
              i[a] = s[a - 1];
            }
            return r;
          }
          if (r = new ArrayBuffer(this.valueHex.byteLength + 1), i = new Uint8Array(r), i[0] = 31 | e, !1 === t) {
            const t = new Uint8Array(this.valueHex);
            for (let e = 0; e < t.length - 1; e++) i[e + 1] = 128 | t[e];
            i[this.valueHex.byteLength] = t[t.length - 1];
          }
          return r;
        }
        fromBER(t, e, r) {
          if (!1 === (0, n.checkBufferParams)(this, t, e, r)) return -1;
          const i = new Uint8Array(t, e, r);
          if (0 === i.length) return this.error = "Zero buffer length", -1;
          switch (192 & i[0]) {
           case 0:
            this.tagClass = 1;
            break;

           case 64:
            this.tagClass = 2;
            break;

           case 128:
            this.tagClass = 3;
            break;

           case 192:
            this.tagClass = 4;
            break;

           default:
            return this.error = "Unknown tag class", -1;
          }
          this.isConstructed = 32 == (32 & i[0]), this.isHexOnly = !1;
          const o = 31 & i[0];
          if (31 !== o) this.tagNumber = o, this.blockLength = 1; else {
            let t = 1;
            this.valueHex = new ArrayBuffer(255);
            let e = 255;
            let r = new Uint8Array(this.valueHex);
            for (;128 & i[t]; ) {
              if (r[t - 1] = 127 & i[t], t++, t >= i.length) return this.error = "End of input reached before message was fully decoded", 
              -1;
              if (t === e) {
                e += 255;
                const t = new ArrayBuffer(e);
                const n = new Uint8Array(t);
                for (let e = 0; e < r.length; e++) n[e] = r[e];
                this.valueHex = new ArrayBuffer(e), r = new Uint8Array(this.valueHex);
              }
            }
            this.blockLength = t + 1, r[t - 1] = 127 & i[t];
            const o = new ArrayBuffer(t);
            const s = new Uint8Array(o);
            for (let n = 0; n < t; n++) s[n] = r[n];
            this.valueHex = new ArrayBuffer(t), r = new Uint8Array(this.valueHex), r.set(s), this.blockLength <= 9 ? this.tagNumber = (0, 
            n.utilFromBase)(r, 7) : (this.isHexOnly = !0, this.warnings.push("Tag too long, represented as hex-coded"));
          }
          if (1 === this.tagClass && this.isConstructed) switch (this.tagNumber) {
           case 1:
           case 2:
           case 5:
           case 6:
           case 9:
           case 13:
           case 14:
           case 23:
           case 24:
           case 31:
           case 32:
           case 33:
           case 34:
            return this.error = "Constructed encoding used for primitive type", -1;
          }
          return e + this.blockLength;
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.blockName = this.constructor.blockName(), t.tagClass = this.tagClass, t.tagNumber = this.tagNumber, t.isConstructed = this.isConstructed, 
          t;
        }
      }
      class h extends s {
        constructor(t = {}) {
          super(), "lenBlock" in t ? (this.isIndefiniteForm = (0, n.getParametersValue)(t.lenBlock, "isIndefiniteForm", !1), this.longFormUsed = (0, 
          n.getParametersValue)(t.lenBlock, "longFormUsed", !1), this.length = (0, n.getParametersValue)(t.lenBlock, "length", 0)) : (this.isIndefiniteForm = !1, 
          this.longFormUsed = !1, this.length = 0);
        }
        static blockName() {
          return "lengthBlock";
        }
        fromBER(t, e, r) {
          if (!1 === (0, n.checkBufferParams)(this, t, e, r)) return -1;
          const i = new Uint8Array(t, e, r);
          if (0 === i.length) return this.error = "Zero buffer length", -1;
          if (255 === i[0]) return this.error = "Length block 0xFF is reserved by standard", -1;
          if (this.isIndefiniteForm = 128 === i[0], !0 === this.isIndefiniteForm) return this.blockLength = 1, e + this.blockLength;
          if (this.longFormUsed = !!(128 & i[0]), !1 === this.longFormUsed) return this.length = i[0], this.blockLength = 1, e + this.blockLength;
          const o = 127 & i[0];
          if (o > 8) return this.error = "Too big integer", -1;
          if (o + 1 > i.length) return this.error = "End of input reached before message was fully decoded", -1;
          const s = new Uint8Array(o);
          for (let n = 0; n < o; n++) s[n] = i[n + 1];
          return 0 === s[o - 1] && this.warnings.push("Needlessly long encoded length"), this.length = (0, n.utilFromBase)(s, 8), 
          this.longFormUsed && this.length <= 127 && this.warnings.push("Unnecessary usage of long length form"), this.blockLength = o + 1, 
          e + this.blockLength;
        }
        toBER(t = !1) {
          let e;
          let r;
          if (this.length > 127 && (this.longFormUsed = !0), this.isIndefiniteForm) return e = new ArrayBuffer(1), !1 === t && (r = new Uint8Array(e), 
          r[0] = 128), e;
          if (!0 === this.longFormUsed) {
            const i = (0, n.utilToBase)(this.length, 8);
            if (i.byteLength > 127) return this.error = "Too big length", new ArrayBuffer(0);
            if (e = new ArrayBuffer(i.byteLength + 1), !0 === t) return e;
            const o = new Uint8Array(i);
            r = new Uint8Array(e), r[0] = 128 | i.byteLength;
            for (let t = 0; t < i.byteLength; t++) r[t + 1] = o[t];
            return e;
          }
          return e = new ArrayBuffer(1), !1 === t && (r = new Uint8Array(e), r[0] = this.length), e;
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.blockName = this.constructor.blockName(), t.isIndefiniteForm = this.isIndefiniteForm, t.longFormUsed = this.longFormUsed, 
          t.length = this.length, t;
        }
      }
      class u extends s {
        constructor(t = {}) {
          super(t);
        }
        static blockName() {
          return "valueBlock";
        }
        fromBER(t, e, r) {
          throw TypeError("User need to make a specific function in a class which extends \"ValueBlock\"");
        }
        toBER(t = !1) {
          throw TypeError("User need to make a specific function in a class which extends \"ValueBlock\"");
        }
      }
      class c extends s {
        constructor(t = {}, e = u) {
          super(t), "name" in t && (this.name = t.name), "optional" in t && (this.optional = t.optional), "primitiveSchema" in t && (this.primitiveSchema = t.primitiveSchema), 
          this.idBlock = new l(t), this.lenBlock = new h(t), this.valueBlock = new e(t);
        }
        static blockName() {
          return "BaseBlock";
        }
        fromBER(t, e, r) {
          const n = this.valueBlock.fromBER(t, e, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
          return -1 === n ? (this.error = this.valueBlock.error, n) : (0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 
          0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), 
          n);
        }
        toBER(t = !1) {
          let e;
          const r = this.idBlock.toBER(t);
          const i = this.valueBlock.toBER(!0);
          this.lenBlock.length = i.byteLength;
          const o = this.lenBlock.toBER(t);
          let s;
          if (e = (0, n.utilConcatBuf)(r, o), s = !1 === t ? this.valueBlock.toBER(t) : new ArrayBuffer(this.lenBlock.length), e = (0, 
          n.utilConcatBuf)(e, s), !0 === this.lenBlock.isIndefiniteForm) {
            const r = new ArrayBuffer(2);
            if (!1 === t) {
              const t = new Uint8Array(r);
              t[0] = 0, t[1] = 0;
            }
            e = (0, n.utilConcatBuf)(e, r);
          }
          return e;
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.idBlock = this.idBlock.toJSON(), t.lenBlock = this.lenBlock.toJSON(), t.valueBlock = this.valueBlock.toJSON(), 
          "name" in this && (t.name = this.name), "optional" in this && (t.optional = this.optional), "primitiveSchema" in this && (t.primitiveSchema = this.primitiveSchema.toJSON()), 
          t;
        }
        toString() {
          return `${this.constructor.blockName()} : ${(0, n.bufferToHexCodes)(this.valueBlock.valueHex)}`;
        }
      }
      class f extends u {
        constructor(t = {}) {
          super(t), this.valueHex = "valueHex" in t ? t.valueHex.slice(0) : new ArrayBuffer(0), this.isHexOnly = (0, n.getParametersValue)(t, "isHexOnly", !0);
        }
        fromBER(t, e, r) {
          if (!1 === (0, n.checkBufferParams)(this, t, e, r)) return -1;
          const i = new Uint8Array(t, e, r);
          if (0 === i.length) return this.warnings.push("Zero buffer length"), e;
          this.valueHex = new ArrayBuffer(i.length);
          const o = new Uint8Array(this.valueHex);
          for (let n = 0; n < i.length; n++) o[n] = i[n];
          return this.blockLength = r, e + r;
        }
        toBER(t = !1) {
          return this.valueHex.slice(0);
        }
        static blockName() {
          return "PrimitiveValueBlock";
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.valueHex = (0, n.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength), t.isHexOnly = this.isHexOnly, t;
        }
      }
      class d extends c {
        constructor(t = {}) {
          super(t, f), this.idBlock.isConstructed = !1;
        }
        static blockName() {
          return "PRIMITIVE";
        }
      }
      class m extends u {
        constructor(t = {}) {
          super(t), this.value = (0, n.getParametersValue)(t, "value", []), this.isIndefiniteForm = (0, n.getParametersValue)(t, "isIndefiniteForm", !1);
        }
        fromBER(t, e, r) {
          const i = e;
          const o = r;
          if (!1 === (0, n.checkBufferParams)(this, t, e, r)) return -1;
          if (0 === new Uint8Array(t, e, r).length) return this.warnings.push("Zero buffer length"), e;
          function s(t, e) {
            return !0 === t ? 1 : e;
          }
          let a = e;
          for (;s(this.isIndefiniteForm, r) > 0; ) {
            const e = ut(t, a, r);
            if (-1 === e.offset) return this.error = e.result.error, this.warnings.concat(e.result.warnings), -1;
            if (a = e.offset, this.blockLength += e.result.blockLength, r -= e.result.blockLength, this.value.push(e.result), !0 === this.isIndefiniteForm && e.result.constructor.blockName() === v.blockName()) break;
          }
          return !0 === this.isIndefiniteForm && (this.value[this.value.length - 1].constructor.blockName() === v.blockName() ? this.value.pop() : this.warnings.push("No EndOfContent block encoded")), 
          this.valueBeforeDecode = t.slice(i, i + o), a;
        }
        toBER(t = !1) {
          let e = new ArrayBuffer(0);
          for (let r = 0; r < this.value.length; r++) {
            const i = this.value[r].toBER(t);
            e = (0, n.utilConcatBuf)(e, i);
          }
          return e;
        }
        static blockName() {
          return "ConstructedValueBlock";
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          t.isIndefiniteForm = this.isIndefiniteForm, t.value = [];
          for (let r = 0; r < this.value.length; r++) t.value.push(this.value[r].toJSON());
          return t;
        }
      }
      class g extends c {
        constructor(t = {}) {
          super(t, m), this.idBlock.isConstructed = !0;
        }
        static blockName() {
          return "CONSTRUCTED";
        }
        fromBER(t, e, r) {
          this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
          const n = this.valueBlock.fromBER(t, e, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
          return -1 === n ? (this.error = this.valueBlock.error, n) : (0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 
          0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), 
          n);
        }
        toString() {
          const t = [];
          for (const r of this.valueBlock.value) t.push(r.toString().split("\n").map((t => `  ${t}`)).join("\n"));
          const e = 3 === this.idBlock.tagClass ? `[${this.idBlock.tagNumber}]` : this.constructor.blockName();
          return t.length ? `${e} :\n${t.join("\n")}` : `${e} :`;
        }
      }
      class p extends u {
        constructor(t = {}) {
          super(t);
        }
        fromBER(t, e, r) {
          return e;
        }
        toBER(t = !1) {
          return new ArrayBuffer(0);
        }
        static blockName() {
          return "EndOfContentValueBlock";
        }
      }
      class v extends c {
        constructor(t = {}) {
          super(t, p), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 0;
        }
        static blockName() {
          return "EndOfContent";
        }
      }
      class y extends u {
        constructor(t = {}) {
          if (super(t), this.value = (0, n.getParametersValue)(t, "value", !1), this.isHexOnly = (0, n.getParametersValue)(t, "isHexOnly", !1), 
          "valueHex" in t) this.valueHex = t.valueHex.slice(0); else if (this.valueHex = new ArrayBuffer(1), !0 === this.value) {
            new Uint8Array(this.valueHex)[0] = 255;
          }
        }
        fromBER(t, e, r) {
          if (!1 === (0, n.checkBufferParams)(this, t, e, r)) return -1;
          const i = new Uint8Array(t, e, r);
          r > 1 && this.warnings.push("Boolean value encoded in more then 1 octet"), this.isHexOnly = !0, this.valueHex = new ArrayBuffer(i.length);
          const o = new Uint8Array(this.valueHex);
          for (let n = 0; n < i.length; n++) o[n] = i[n];
          return 0 !== n.utilDecodeTC.call(this) ? this.value = !0 : this.value = !1, this.blockLength = r, e + r;
        }
        toBER(t = !1) {
          return this.valueHex;
        }
        static blockName() {
          return "BooleanValueBlock";
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.value = this.value, t.isHexOnly = this.isHexOnly, t.valueHex = (0, n.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength), 
          t;
        }
      }
      class b extends c {
        constructor(t = {}) {
          super(t, y), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 1;
        }
        static blockName() {
          return "BOOLEAN";
        }
        toString() {
          return `${this.constructor.blockName()} : ${this.valueBlock.value}`;
        }
      }
      class w extends g {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 16;
        }
        static blockName() {
          return "SEQUENCE";
        }
      }
      class k extends g {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 17;
        }
        static blockName() {
          return "SET";
        }
      }
      class x extends c {
        constructor(t = {}) {
          super(t, s), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 5;
        }
        static blockName() {
          return "NULL";
        }
        fromBER(t, e, r) {
          return this.lenBlock.length > 0 && this.warnings.push("Non-zero length of value block for Null type"), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 
          0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), this.blockLength += r, e + r > t.byteLength ? (this.error = "End of input reached before message was fully decoded (inconsistent offset and length values)", 
          -1) : e + r;
        }
        toBER(t = !1) {
          const e = new ArrayBuffer(2);
          if (!0 === t) return e;
          const r = new Uint8Array(e);
          return r[0] = 5, r[1] = 0, e;
        }
        toString() {
          return `${this.constructor.blockName()}`;
        }
      }
      class A extends(a(m)){
        constructor(t = {}) {
          super(t), this.isConstructed = (0, n.getParametersValue)(t, "isConstructed", !1);
        }
        fromBER(t, e, r) {
          let n = 0;
          if (!0 === this.isConstructed) {
            if (this.isHexOnly = !1, n = m.prototype.fromBER.call(this, t, e, r), -1 === n) return n;
            for (let t = 0; t < this.value.length; t++) {
              const e = this.value[t].constructor.blockName();
              if (e === v.blockName()) {
                if (!0 === this.isIndefiniteForm) break;
                return this.error = "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only", -1;
              }
              if (e !== B.blockName()) return this.error = "OCTET STRING may consists of OCTET STRINGs only", -1;
            }
          } else this.isHexOnly = !0, n = super.fromBER(t, e, r), this.blockLength = r;
          return n;
        }
        toBER(t = !1) {
          if (!0 === this.isConstructed) return m.prototype.toBER.call(this, t);
          let e = new ArrayBuffer(this.valueHex.byteLength);
          return !0 === t || 0 === this.valueHex.byteLength || (e = this.valueHex.slice(0)), e;
        }
        static blockName() {
          return "OctetStringValueBlock";
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.isConstructed = this.isConstructed, t.isHexOnly = this.isHexOnly, t.valueHex = (0, n.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength), 
          t;
        }
      }
      class B extends c {
        constructor(t = {}) {
          super(t, A), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 4;
        }
        fromBER(t, e, r) {
          if (this.valueBlock.isConstructed = this.idBlock.isConstructed, this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm, 
          0 === r) return 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 
          e;
          if (!this.valueBlock.isConstructed) {
            const i = t.slice(e, e + r);
            try {
              const t = ct(i);
              -1 !== t.offset && t.offset === r && (this.valueBlock.value = [ t.result ]);
            } catch (n) {}
          }
          return super.fromBER(t, e, r);
        }
        static blockName() {
          return "OCTET STRING";
        }
        isEqual(t) {
          return t instanceof B != !1 && JSON.stringify(this) === JSON.stringify(t);
        }
        toString() {
          return this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length ? g.prototype.toString.call(this) : `${this.constructor.blockName()} : ${(0, 
          n.bufferToHexCodes)(this.valueBlock.valueHex)}`;
        }
      }
      class E extends(a(m)){
        constructor(t = {}) {
          super(t), this.unusedBits = (0, n.getParametersValue)(t, "unusedBits", 0), this.isConstructed = (0, n.getParametersValue)(t, "isConstructed", !1), 
          this.blockLength = this.valueHex.byteLength;
        }
        fromBER(t, e, r) {
          if (0 === r) return e;
          let i = -1;
          if (!0 === this.isConstructed) {
            if (i = m.prototype.fromBER.call(this, t, e, r), -1 === i) return i;
            for (let t = 0; t < this.value.length; t++) {
              const e = this.value[t].constructor.blockName();
              if (e === v.blockName()) {
                if (!0 === this.isIndefiniteForm) break;
                return this.error = "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only", -1;
              }
              if (e !== _.blockName()) return this.error = "BIT STRING may consists of BIT STRINGs only", -1;
              if (this.unusedBits > 0 && this.value[t].valueBlock.unusedBits > 0) return this.error = "Using of \"unused bits\" inside constructive BIT STRING allowed for least one only", 
              -1;
              if (this.unusedBits = this.value[t].valueBlock.unusedBits, this.unusedBits > 7) return this.error = "Unused bits for BitString must be in range 0-7", 
              -1;
            }
            return i;
          }
          if (!1 === (0, n.checkBufferParams)(this, t, e, r)) return -1;
          const o = new Uint8Array(t, e, r);
          if (this.unusedBits = o[0], this.unusedBits > 7) return this.error = "Unused bits for BitString must be in range 0-7", -1;
          if (!this.unusedBits) {
            const n = t.slice(e + 1, e + r);
            try {
              const t = ct(n);
              -1 !== t.offset && t.offset === r - 1 && (this.value = [ t.result ]);
            } catch (a) {}
          }
          this.valueHex = new ArrayBuffer(o.length - 1);
          const s = new Uint8Array(this.valueHex);
          for (let n = 0; n < r - 1; n++) s[n] = o[n + 1];
          return this.blockLength = o.length, e + r;
        }
        toBER(t = !1) {
          if (!0 === this.isConstructed) return m.prototype.toBER.call(this, t);
          if (!0 === t) return new ArrayBuffer(this.valueHex.byteLength + 1);
          if (0 === this.valueHex.byteLength) return new ArrayBuffer(0);
          const e = new Uint8Array(this.valueHex);
          const r = new ArrayBuffer(this.valueHex.byteLength + 1);
          const n = new Uint8Array(r);
          n[0] = this.unusedBits;
          for (let i = 0; i < this.valueHex.byteLength; i++) n[i + 1] = e[i];
          return r;
        }
        static blockName() {
          return "BitStringValueBlock";
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.unusedBits = this.unusedBits, t.isConstructed = this.isConstructed, t.isHexOnly = this.isHexOnly, t.valueHex = (0, 
          n.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength), t;
        }
      }
      class _ extends c {
        constructor(t = {}) {
          super(t, E), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 3;
        }
        static blockName() {
          return "BIT STRING";
        }
        fromBER(t, e, r) {
          return 0 === r ? e : (this.valueBlock.isConstructed = this.idBlock.isConstructed, this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm, 
          super.fromBER(t, e, r));
        }
        isEqual(t) {
          return t instanceof _ != !1 && JSON.stringify(this) === JSON.stringify(t);
        }
        toString() {
          if (this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length) return g.prototype.toString.call(this);
          {
            const t = [];
            const e = new Uint8Array(this.valueBlock.valueHex);
            for (const r of e) t.push(r.toString(2).padStart(8, "0"));
            return `${this.constructor.blockName()} : ${t.join("")}`;
          }
        }
      }
      class N extends(a(u)){
        constructor(t = {}) {
          super(t), "value" in t && (this.valueDec = t.value);
        }
        set valueHex(t) {
          this._valueHex = t.slice(0), t.byteLength >= 4 ? (this.warnings.push("Too big Integer for decoding, hex only"), this.isHexOnly = !0, 
          this._valueDec = 0) : (this.isHexOnly = !1, t.byteLength > 0 && (this._valueDec = n.utilDecodeTC.call(this)));
        }
        get valueHex() {
          return this._valueHex;
        }
        set valueDec(t) {
          this._valueDec = t, this.isHexOnly = !1, this._valueHex = (0, n.utilEncodeTC)(t);
        }
        get valueDec() {
          return this._valueDec;
        }
        fromDER(t, e, r, n = 0) {
          const i = this.fromBER(t, e, r);
          if (-1 === i) return i;
          const o = new Uint8Array(this._valueHex);
          if (0 === o[0] && 0 != (128 & o[1])) {
            const t = new ArrayBuffer(this._valueHex.byteLength - 1);
            new Uint8Array(t).set(new Uint8Array(this._valueHex, 1, this._valueHex.byteLength - 1)), this._valueHex = t.slice(0);
          } else if (0 !== n && this._valueHex.byteLength < n) {
            n - this._valueHex.byteLength > 1 && (n = this._valueHex.byteLength + 1);
            const t = new ArrayBuffer(n);
            new Uint8Array(t).set(o, n - this._valueHex.byteLength), this._valueHex = t.slice(0);
          }
          return i;
        }
        toDER(t = !1) {
          const e = new Uint8Array(this._valueHex);
          switch (!0) {
           case 0 != (128 & e[0]):
            {
              const t = new ArrayBuffer(this._valueHex.byteLength + 1);
              const r = new Uint8Array(t);
              r[0] = 0, r.set(e, 1), this._valueHex = t.slice(0);
            }
            break;

           case 0 === e[0] && 0 == (128 & e[1]):
            {
              const t = new ArrayBuffer(this._valueHex.byteLength - 1);
              new Uint8Array(t).set(new Uint8Array(this._valueHex, 1, this._valueHex.byteLength - 1)), this._valueHex = t.slice(0);
            }
          }
          return this.toBER(t);
        }
        fromBER(t, e, r) {
          const n = super.fromBER(t, e, r);
          return -1 === n ? n : (this.blockLength = r, e + r);
        }
        toBER(t = !1) {
          return this.valueHex.slice(0);
        }
        static blockName() {
          return "IntegerValueBlock";
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.valueDec = this.valueDec, t;
        }
        toString() {
          function t(t, e) {
            const r = new Uint8Array([ 0 ]);
            let i = new Uint8Array(t);
            let o = new Uint8Array(e);
            let s = i.slice(0);
            const a = s.length - 1;
            let l = o.slice(0);
            const h = l.length - 1;
            let u = 0;
            let c = 0;
            for (let f = h < a ? a : h; f >= 0; f--, c++) {
              if (!0 == c < l.length) u = s[a - c] + l[h - c] + r[0]; else u = s[a - c] + r[0];
              if (r[0] = u / 10, !0 == c >= s.length) s = (0, n.utilConcatView)(new Uint8Array([ u % 10 ]), s); else s[a - c] = u % 10;
            }
            return r[0] > 0 && (s = (0, n.utilConcatView)(r, s)), s.slice(0);
          }
          function e(t) {
            if (t >= i.length) for (let e = i.length; e <= t; e++) {
              const t = new Uint8Array([ 0 ]);
              let r = i[e - 1].slice(0);
              for (let e = r.length - 1; e >= 0; e--) {
                const n = new Uint8Array([ (r[e] << 1) + t[0] ]);
                t[0] = n[0] / 10, r[e] = n[0] % 10;
              }
              t[0] > 0 && (r = (0, n.utilConcatView)(t, r)), i.push(r);
            }
            return i[t];
          }
          function r(t, e) {
            let r = 0;
            let n = new Uint8Array(t);
            let i = new Uint8Array(e);
            let o = n.slice(0);
            const s = o.length - 1;
            let a = i.slice(0);
            const l = a.length - 1;
            let h;
            let u = 0;
            for (let c = l; c >= 0; c--, u++) if (h = o[s - u] - a[l - u] - r, !0 == h < 0) r = 1, o[s - u] = h + 10; else r = 0, o[s - u] = h;
            if (r > 0) for (let c = s - l + 1; c >= 0; c--, u++) {
              if (h = o[s - u] - r, !(h < 0)) {
                r = 0, o[s - u] = h;
                break;
              }
              r = 1, o[s - u] = h + 10;
            }
            return o.slice();
          }
          const s = 8 * this._valueHex.byteLength - 1;
          let a = new Uint8Array(8 * this._valueHex.byteLength / 3);
          let l = 0;
          let h;
          const u = new Uint8Array(this._valueHex);
          let c = "";
          let f = !1;
          for (let n = this._valueHex.byteLength - 1; n >= 0; n--) {
            h = u[n];
            for (let n = 0; n < 8; n++) {
              if (1 == (1 & h)) if (l === s) a = r(e(l), a), c = "-"; else a = t(a, e(l));
              l++, h >>= 1;
            }
          }
          for (let n = 0; n < a.length; n++) a[n] && (f = !0), f && (c += o.charAt(a[n]));
          return !1 === f && (c += o.charAt(0)), c;
        }
      }
      class L extends c {
        constructor(t = {}) {
          super(t, N), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 2;
        }
        static blockName() {
          return "INTEGER";
        }
        isEqual(t) {
          return t instanceof L ? this.valueBlock.isHexOnly && t.valueBlock.isHexOnly ? (0, n.isEqualBuffer)(this.valueBlock.valueHex, t.valueBlock.valueHex) : this.valueBlock.isHexOnly === t.valueBlock.isHexOnly && this.valueBlock.valueDec === t.valueBlock.valueDec : t instanceof ArrayBuffer && (0, 
          n.isEqualBuffer)(this.valueBlock.valueHex, t);
        }
        convertToDER() {
          const t = new L({
            valueHex: this.valueBlock.valueHex
          });
          return t.valueBlock.toDER(), t;
        }
        convertFromDER() {
          const t = this.valueBlock.valueHex.byteLength % 2 ? this.valueBlock.valueHex.byteLength + 1 : this.valueBlock.valueHex.byteLength;
          const e = new L({
            valueHex: this.valueBlock.valueHex
          });
          return e.valueBlock.fromDER(e.valueBlock.valueHex, 0, e.valueBlock.valueHex.byteLength, t), e;
        }
        toString() {
          const t = (0, n.bufferToHexCodes)(this.valueBlock.valueHex);
          const e = BigInt(`0x${t}`);
          return `${this.constructor.blockName()} : ${e.toString()}`;
        }
      }
      class S extends L {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 10;
        }
        static blockName() {
          return "ENUMERATED";
        }
      }
      class M extends(a(s)){
        constructor(t = {}) {
          super(t), this.valueDec = (0, n.getParametersValue)(t, "valueDec", -1), this.isFirstSid = (0, n.getParametersValue)(t, "isFirstSid", !1);
        }
        static blockName() {
          return "sidBlock";
        }
        fromBER(t, e, r) {
          if (0 === r) return e;
          if (!1 === (0, n.checkBufferParams)(this, t, e, r)) return -1;
          const i = new Uint8Array(t, e, r);
          this.valueHex = new ArrayBuffer(r);
          let o = new Uint8Array(this.valueHex);
          for (let n = 0; n < r && (o[n] = 127 & i[n], this.blockLength++, 0 != (128 & i[n])); n++) ;
          const s = new ArrayBuffer(this.blockLength);
          const a = new Uint8Array(s);
          for (let n = 0; n < this.blockLength; n++) a[n] = o[n];
          return this.valueHex = s.slice(0), o = new Uint8Array(this.valueHex), 0 != (128 & i[this.blockLength - 1]) ? (this.error = "End of input reached before message was fully decoded", 
          -1) : (0 === o[0] && this.warnings.push("Needlessly long format of SID encoding"), this.blockLength <= 8 ? this.valueDec = (0, 
          n.utilFromBase)(o, 7) : (this.isHexOnly = !0, this.warnings.push("Too big SID for decoding, hex only")), e + this.blockLength);
        }
        toBER(t = !1) {
          let e;
          let r;
          if (this.isHexOnly) {
            if (!0 === t) return new ArrayBuffer(this.valueHex.byteLength);
            const n = new Uint8Array(this.valueHex);
            e = new ArrayBuffer(this.blockLength), r = new Uint8Array(e);
            for (let t = 0; t < this.blockLength - 1; t++) r[t] = 128 | n[t];
            return r[this.blockLength - 1] = n[this.blockLength - 1], e;
          }
          const i = (0, n.utilToBase)(this.valueDec, 7);
          if (0 === i.byteLength) return this.error = "Error during encoding SID value", new ArrayBuffer(0);
          if (e = new ArrayBuffer(i.byteLength), !1 === t) {
            const t = new Uint8Array(i);
            r = new Uint8Array(e);
            for (let e = 0; e < i.byteLength - 1; e++) r[e] = 128 | t[e];
            r[i.byteLength - 1] = t[i.byteLength - 1];
          }
          return e;
        }
        toString() {
          let t = "";
          if (!0 === this.isHexOnly) t = (0, n.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength); else if (this.isFirstSid) {
            let e = this.valueDec;
            this.valueDec <= 39 ? t = "0." : this.valueDec <= 79 ? (t = "1.", e -= 40) : (t = "2.", e -= 80), t += e.toString();
          } else t = this.valueDec.toString();
          return t;
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.valueDec = this.valueDec, t.isFirstSid = this.isFirstSid, t;
        }
      }
      class I extends u {
        constructor(t = {}) {
          super(t), this.fromString((0, n.getParametersValue)(t, "value", ""));
        }
        fromBER(t, e, r) {
          let n = e;
          for (;r > 0; ) {
            const e = new M;
            if (n = e.fromBER(t, n, r), -1 === n) return this.blockLength = 0, this.error = e.error, n;
            0 === this.value.length && (e.isFirstSid = !0), this.blockLength += e.blockLength, r -= e.blockLength, this.value.push(e);
          }
          return n;
        }
        toBER(t = !1) {
          let e = new ArrayBuffer(0);
          for (let r = 0; r < this.value.length; r++) {
            const i = this.value[r].toBER(t);
            if (0 === i.byteLength) return this.error = this.value[r].error, new ArrayBuffer(0);
            e = (0, n.utilConcatBuf)(e, i);
          }
          return e;
        }
        fromString(t) {
          this.value = [];
          let e = 0;
          let r = 0;
          let n = "";
          let i = !1;
          do {
            if (r = t.indexOf(".", e), n = -1 === r ? t.substr(e) : t.substr(e, r - e), e = r + 1, i) {
              const t = this.value[0];
              let e = 0;
              switch (t.valueDec) {
               case 0:
                break;

               case 1:
                e = 40;
                break;

               case 2:
                e = 80;
                break;

               default:
                return this.value = [], !1;
              }
              const r = parseInt(n, 10);
              if (isNaN(r)) return !0;
              t.valueDec = r + e, i = !1;
            } else {
              const t = new M;
              if (t.valueDec = parseInt(n, 10), isNaN(t.valueDec)) return !0;
              0 === this.value.length && (t.isFirstSid = !0, i = !0), this.value.push(t);
            }
          } while (-1 !== r);
          return !0;
        }
        toString() {
          let t = "";
          let e = !1;
          for (let r = 0; r < this.value.length; r++) {
            e = this.value[r].isHexOnly;
            let n = this.value[r].toString();
            0 !== r && (t = `${t}.`), e ? (n = `{${n}}`, this.value[r].isFirstSid ? t = `2.{${n} - 80}` : t += n) : t += n;
          }
          return t;
        }
        static blockName() {
          return "ObjectIdentifierValueBlock";
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          t.value = this.toString(), t.sidArray = [];
          for (let r = 0; r < this.value.length; r++) t.sidArray.push(this.value[r].toJSON());
          return t;
        }
      }
      class C extends c {
        constructor(t = {}) {
          super(t, I), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 6;
        }
        static blockName() {
          return "OBJECT IDENTIFIER";
        }
        toString() {
          return `${this.constructor.blockName()} : ${this.valueBlock.toString()}`;
        }
      }
      class j extends(a(s)){
        constructor(t = {}) {
          super(t), this.isHexOnly = !0, this.value = "";
        }
        static blockName() {
          return "Utf8StringValueBlock";
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.value = this.value, t;
        }
      }
      class P extends c {
        constructor(t = {}) {
          super(t, j), "value" in t && this.fromString(t.value), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 12;
        }
        static blockName() {
          return "UTF8String";
        }
        fromBER(t, e, r) {
          const n = this.valueBlock.fromBER(t, e, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
          return -1 === n ? (this.error = this.valueBlock.error, n) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 
          0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), 
          n);
        }
        fromBuffer(t) {
          this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(t));
          try {
            this.valueBlock.value = decodeURIComponent(escape(this.valueBlock.value));
          } catch (e) {
            this.warnings.push(`Error during "decodeURIComponent": ${e}, using raw string`);
          }
        }
        fromString(t) {
          const e = unescape(encodeURIComponent(t));
          const r = e.length;
          this.valueBlock.valueHex = new ArrayBuffer(r);
          const n = new Uint8Array(this.valueBlock.valueHex);
          for (let i = 0; i < r; i++) n[i] = e.charCodeAt(i);
          this.valueBlock.value = t;
        }
        toString() {
          return `${this.constructor.blockName()} : ${this.valueBlock.value}`;
        }
      }
      class T extends(a(s)){
        constructor(t = {}) {
          super(t), this.valueDec = (0, n.getParametersValue)(t, "valueDec", -1);
        }
        static blockName() {
          return "relativeSidBlock";
        }
        fromBER(t, e, r) {
          if (0 === r) return e;
          if (!1 === (0, n.checkBufferParams)(this, t, e, r)) return -1;
          const i = new Uint8Array(t, e, r);
          this.valueHex = new ArrayBuffer(r);
          let o = new Uint8Array(this.valueHex);
          for (let n = 0; n < r && (o[n] = 127 & i[n], this.blockLength++, 0 != (128 & i[n])); n++) ;
          const s = new ArrayBuffer(this.blockLength);
          const a = new Uint8Array(s);
          for (let n = 0; n < this.blockLength; n++) a[n] = o[n];
          return this.valueHex = s.slice(0), o = new Uint8Array(this.valueHex), 0 != (128 & i[this.blockLength - 1]) ? (this.error = "End of input reached before message was fully decoded", 
          -1) : (0 === o[0] && this.warnings.push("Needlessly long format of SID encoding"), this.blockLength <= 8 ? this.valueDec = (0, 
          n.utilFromBase)(o, 7) : (this.isHexOnly = !0, this.warnings.push("Too big SID for decoding, hex only")), e + this.blockLength);
        }
        toBER(t = !1) {
          let e;
          let r;
          if (this.isHexOnly) {
            if (!0 === t) return new ArrayBuffer(this.valueHex.byteLength);
            const n = new Uint8Array(this.valueHex);
            e = new ArrayBuffer(this.blockLength), r = new Uint8Array(e);
            for (let t = 0; t < this.blockLength - 1; t++) r[t] = 128 | n[t];
            return r[this.blockLength - 1] = n[this.blockLength - 1], e;
          }
          const i = (0, n.utilToBase)(this.valueDec, 7);
          if (0 === i.byteLength) return this.error = "Error during encoding SID value", new ArrayBuffer(0);
          if (e = new ArrayBuffer(i.byteLength), !1 === t) {
            const t = new Uint8Array(i);
            r = new Uint8Array(e);
            for (let e = 0; e < i.byteLength - 1; e++) r[e] = 128 | t[e];
            r[i.byteLength - 1] = t[i.byteLength - 1];
          }
          return e;
        }
        toString() {
          let t = "";
          return t = !0 === this.isHexOnly ? (0, n.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength) : this.valueDec.toString(), 
          t;
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.valueDec = this.valueDec, t;
        }
      }
      class O extends u {
        constructor(t = {}) {
          super(t), this.fromString((0, n.getParametersValue)(t, "value", ""));
        }
        fromBER(t, e, r) {
          let n = e;
          for (;r > 0; ) {
            const e = new T;
            if (n = e.fromBER(t, n, r), -1 === n) return this.blockLength = 0, this.error = e.error, n;
            this.blockLength += e.blockLength, r -= e.blockLength, this.value.push(e);
          }
          return n;
        }
        toBER(t = !1) {
          let e = new ArrayBuffer(0);
          for (let r = 0; r < this.value.length; r++) {
            const i = this.value[r].toBER(t);
            if (0 === i.byteLength) return this.error = this.value[r].error, new ArrayBuffer(0);
            e = (0, n.utilConcatBuf)(e, i);
          }
          return e;
        }
        fromString(t) {
          this.value = [];
          let e = 0;
          let r = 0;
          let n = "";
          do {
            r = t.indexOf(".", e), n = -1 === r ? t.substr(e) : t.substr(e, r - e), e = r + 1;
            const i = new T;
            if (i.valueDec = parseInt(n, 10), isNaN(i.valueDec)) return !0;
            this.value.push(i);
          } while (-1 !== r);
          return !0;
        }
        toString() {
          let t = "";
          let e = !1;
          for (let r = 0; r < this.value.length; r++) {
            e = this.value[r].isHexOnly;
            let n = this.value[r].toString();
            0 !== r && (t = `${t}.`), e ? (n = `{${n}}`, t += n) : t += n;
          }
          return t;
        }
        static blockName() {
          return "RelativeObjectIdentifierValueBlock";
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          t.value = this.toString(), t.sidArray = [];
          for (let r = 0; r < this.value.length; r++) t.sidArray.push(this.value[r].toJSON());
          return t;
        }
      }
      class R extends c {
        constructor(t = {}) {
          super(t, O), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 13;
        }
        static blockName() {
          return "RelativeObjectIdentifier";
        }
      }
      class U extends(a(s)){
        constructor(t = {}) {
          super(t), this.isHexOnly = !0, this.value = "";
        }
        static blockName() {
          return "BmpStringValueBlock";
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.value = this.value, t;
        }
      }
      class F extends c {
        constructor(t = {}) {
          super(t, U), "value" in t && this.fromString(t.value), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 30;
        }
        static blockName() {
          return "BMPString";
        }
        fromBER(t, e, r) {
          const n = this.valueBlock.fromBER(t, e, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
          return -1 === n ? (this.error = this.valueBlock.error, n) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 
          0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), 
          n);
        }
        fromBuffer(t) {
          const e = t.slice(0);
          const r = new Uint8Array(e);
          for (let n = 0; n < r.length; n += 2) {
            const t = r[n];
            r[n] = r[n + 1], r[n + 1] = t;
          }
          this.valueBlock.value = String.fromCharCode.apply(null, new Uint16Array(e));
        }
        fromString(t) {
          const e = t.length;
          this.valueBlock.valueHex = new ArrayBuffer(2 * e);
          const r = new Uint8Array(this.valueBlock.valueHex);
          for (let i = 0; i < e; i++) {
            const e = (0, n.utilToBase)(t.charCodeAt(i), 8);
            const o = new Uint8Array(e);
            if (o.length > 2) continue;
            const s = 2 - o.length;
            for (let t = o.length - 1; t >= 0; t--) r[2 * i + t + s] = o[t];
          }
          this.valueBlock.value = t;
        }
        toString() {
          return `${this.constructor.blockName()} : ${this.valueBlock.value}`;
        }
      }
      class H extends(a(s)){
        constructor(t = {}) {
          super(t), this.isHexOnly = !0, this.value = "";
        }
        static blockName() {
          return "UniversalStringValueBlock";
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.value = this.value, t;
        }
      }
      class D extends c {
        constructor(t = {}) {
          super(t, H), "value" in t && this.fromString(t.value), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 28;
        }
        static blockName() {
          return "UniversalString";
        }
        fromBER(t, e, r) {
          const n = this.valueBlock.fromBER(t, e, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
          return -1 === n ? (this.error = this.valueBlock.error, n) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 
          0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), 
          n);
        }
        fromBuffer(t) {
          const e = t.slice(0);
          const r = new Uint8Array(e);
          for (let n = 0; n < r.length; n += 4) r[n] = r[n + 3], r[n + 1] = r[n + 2], r[n + 2] = 0, r[n + 3] = 0;
          this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(e));
        }
        fromString(t) {
          const e = t.length;
          this.valueBlock.valueHex = new ArrayBuffer(4 * e);
          const r = new Uint8Array(this.valueBlock.valueHex);
          for (let i = 0; i < e; i++) {
            const e = (0, n.utilToBase)(t.charCodeAt(i), 8);
            const o = new Uint8Array(e);
            if (o.length > 4) continue;
            const s = 4 - o.length;
            for (let t = o.length - 1; t >= 0; t--) r[4 * i + t + s] = o[t];
          }
          this.valueBlock.value = t;
        }
        toString() {
          return `${this.constructor.blockName()} : ${this.valueBlock.value}`;
        }
      }
      class z extends(a(s)){
        constructor(t = {}) {
          super(t), this.value = "", this.isHexOnly = !0;
        }
        static blockName() {
          return "SimpleStringValueBlock";
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.value = this.value, t;
        }
      }
      class Z extends c {
        constructor(t = {}) {
          super(t, z), "value" in t && this.fromString(t.value);
        }
        static blockName() {
          return "SIMPLESTRING";
        }
        fromBER(t, e, r) {
          const n = this.valueBlock.fromBER(t, e, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
          return -1 === n ? (this.error = this.valueBlock.error, n) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 
          0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), 
          n);
        }
        fromBuffer(t) {
          this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(t));
        }
        fromString(t) {
          const e = t.length;
          this.valueBlock.valueHex = new ArrayBuffer(e);
          const r = new Uint8Array(this.valueBlock.valueHex);
          for (let n = 0; n < e; n++) r[n] = t.charCodeAt(n);
          this.valueBlock.value = t;
        }
        toString() {
          return `${this.constructor.blockName()} : ${this.valueBlock.value}`;
        }
      }
      class q extends Z {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 18;
        }
        static blockName() {
          return "NumericString";
        }
      }
      class G extends Z {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 19;
        }
        static blockName() {
          return "PrintableString";
        }
      }
      class V extends Z {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 20;
        }
        static blockName() {
          return "TeletexString";
        }
      }
      class $ extends Z {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 21;
        }
        static blockName() {
          return "VideotexString";
        }
      }
      class W extends Z {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 22;
        }
        static blockName() {
          return "IA5String";
        }
      }
      class J extends Z {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 25;
        }
        static blockName() {
          return "GraphicString";
        }
      }
      class K extends Z {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 26;
        }
        static blockName() {
          return "VisibleString";
        }
      }
      class Y extends Z {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 27;
        }
        static blockName() {
          return "GeneralString";
        }
      }
      class X extends Z {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 29;
        }
        static blockName() {
          return "CharacterString";
        }
      }
      class Q extends K {
        constructor(t = {}) {
          if (super(t), this.year = 0, this.month = 0, this.day = 0, this.hour = 0, this.minute = 0, this.second = 0, "value" in t) {
            this.fromString(t.value), this.valueBlock.valueHex = new ArrayBuffer(t.value.length);
            const e = new Uint8Array(this.valueBlock.valueHex);
            for (let r = 0; r < t.value.length; r++) e[r] = t.value.charCodeAt(r);
          }
          "valueDate" in t && (this.fromDate(t.valueDate), this.valueBlock.valueHex = this.toBuffer()), this.idBlock.tagClass = 1, 
          this.idBlock.tagNumber = 23;
        }
        fromBER(t, e, r) {
          const n = this.valueBlock.fromBER(t, e, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
          return -1 === n ? (this.error = this.valueBlock.error, n) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 
          0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), 
          n);
        }
        fromBuffer(t) {
          this.fromString(String.fromCharCode.apply(null, new Uint8Array(t)));
        }
        toBuffer() {
          const t = this.toString();
          const e = new ArrayBuffer(t.length);
          const r = new Uint8Array(e);
          for (let n = 0; n < t.length; n++) r[n] = t.charCodeAt(n);
          return e;
        }
        fromDate(t) {
          this.year = t.getUTCFullYear(), this.month = t.getUTCMonth() + 1, this.day = t.getUTCDate(), this.hour = t.getUTCHours(), 
          this.minute = t.getUTCMinutes(), this.second = t.getUTCSeconds();
        }
        toDate() {
          return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second));
        }
        fromString(t) {
          const e = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/gi.exec(t);
          if (null === e) return void (this.error = "Wrong input string for convertion");
          const r = parseInt(e[1], 10);
          this.year = r >= 50 ? 1900 + r : 2e3 + r, this.month = parseInt(e[2], 10), this.day = parseInt(e[3], 10), this.hour = parseInt(e[4], 10), 
          this.minute = parseInt(e[5], 10), this.second = parseInt(e[6], 10);
        }
        toString() {
          const t = new Array(7);
          return t[0] = (0, n.padNumber)(this.year < 2e3 ? this.year - 1900 : this.year - 2e3, 2), t[1] = (0, n.padNumber)(this.month, 2), 
          t[2] = (0, n.padNumber)(this.day, 2), t[3] = (0, n.padNumber)(this.hour, 2), t[4] = (0, n.padNumber)(this.minute, 2), t[5] = (0, 
          n.padNumber)(this.second, 2), t[6] = "Z", t.join("");
        }
        static blockName() {
          return "UTCTime";
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.year = this.year, t.month = this.month, t.day = this.day, t.hour = this.hour, t.minute = this.minute, t.second = this.second, 
          t;
        }
      }
      class tt extends K {
        constructor(t = {}) {
          if (super(t), this.year = 0, this.month = 0, this.day = 0, this.hour = 0, this.minute = 0, this.second = 0, this.millisecond = 0, 
          "value" in t) {
            this.fromString(t.value), this.valueBlock.valueHex = new ArrayBuffer(t.value.length);
            const e = new Uint8Array(this.valueBlock.valueHex);
            for (let r = 0; r < t.value.length; r++) e[r] = t.value.charCodeAt(r);
          }
          "valueDate" in t && (this.fromDate(t.valueDate), this.valueBlock.valueHex = this.toBuffer()), this.idBlock.tagClass = 1, 
          this.idBlock.tagNumber = 24;
        }
        fromBER(t, e, r) {
          const n = this.valueBlock.fromBER(t, e, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
          return -1 === n ? (this.error = this.valueBlock.error, n) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 
          0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), 
          n);
        }
        fromBuffer(t) {
          this.fromString(String.fromCharCode.apply(null, new Uint8Array(t)));
        }
        toBuffer() {
          const t = this.toString();
          const e = new ArrayBuffer(t.length);
          const r = new Uint8Array(e);
          for (let n = 0; n < t.length; n++) r[n] = t.charCodeAt(n);
          return e;
        }
        fromDate(t) {
          this.year = t.getUTCFullYear(), this.month = t.getUTCMonth() + 1, this.day = t.getUTCDate(), this.hour = t.getUTCHours(), 
          this.minute = t.getUTCMinutes(), this.second = t.getUTCSeconds(), this.millisecond = t.getUTCMilliseconds();
        }
        toDate() {
          return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond));
        }
        fromString(t) {
          let e = !1;
          let r = "";
          let n = "";
          let i = 0;
          let o;
          let s = 0;
          let a = 0;
          if ("Z" === t[t.length - 1]) r = t.substr(0, t.length - 1), e = !0; else {
            const e = new Number(t[t.length - 1]);
            if (isNaN(e.valueOf())) throw new Error("Wrong input string for convertion");
            r = t;
          }
          if (e) {
            if (-1 !== r.indexOf("+")) throw new Error("Wrong input string for convertion");
            if (-1 !== r.indexOf("-")) throw new Error("Wrong input string for convertion");
          } else {
            let t = 1;
            let e = r.indexOf("+");
            let n = "";
            if (-1 === e && (e = r.indexOf("-"), t = -1), -1 !== e) {
              if (n = r.substr(e + 1), r = r.substr(0, e), 2 !== n.length && 4 !== n.length) throw new Error("Wrong input string for convertion");
              let i = new Number(n.substr(0, 2));
              if (isNaN(i.valueOf())) throw new Error("Wrong input string for convertion");
              if (s = t * i, 4 === n.length) {
                if (i = new Number(n.substr(2, 2)), isNaN(i.valueOf())) throw new Error("Wrong input string for convertion");
                a = t * i;
              }
            }
          }
          let l = r.indexOf(".");
          if (-1 === l && (l = r.indexOf(",")), -1 !== l) {
            const t = new Number(`0${r.substr(l)}`);
            if (isNaN(t.valueOf())) throw new Error("Wrong input string for convertion");
            i = t.valueOf(), n = r.substr(0, l);
          } else n = r;
          switch (!0) {
           case 8 === n.length:
            if (o = /(\d{4})(\d{2})(\d{2})/gi, -1 !== l) throw new Error("Wrong input string for convertion");
            break;

           case 10 === n.length:
            if (o = /(\d{4})(\d{2})(\d{2})(\d{2})/gi, -1 !== l) {
              let t = 60 * i;
              this.minute = Math.floor(t), t = 60 * (t - this.minute), this.second = Math.floor(t), t = 1e3 * (t - this.second), this.millisecond = Math.floor(t);
            }
            break;

           case 12 === n.length:
            if (o = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/gi, -1 !== l) {
              let t = 60 * i;
              this.second = Math.floor(t), t = 1e3 * (t - this.second), this.millisecond = Math.floor(t);
            }
            break;

           case 14 === n.length:
            if (o = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/gi, -1 !== l) {
              const t = 1e3 * i;
              this.millisecond = Math.floor(t);
            }
            break;

           default:
            throw new Error("Wrong input string for convertion");
          }
          const h = o.exec(n);
          if (null === h) throw new Error("Wrong input string for convertion");
          for (let u = 1; u < h.length; u++) switch (u) {
           case 1:
            this.year = parseInt(h[u], 10);
            break;

           case 2:
            this.month = parseInt(h[u], 10);
            break;

           case 3:
            this.day = parseInt(h[u], 10);
            break;

           case 4:
            this.hour = parseInt(h[u], 10) + s;
            break;

           case 5:
            this.minute = parseInt(h[u], 10) + a;
            break;

           case 6:
            this.second = parseInt(h[u], 10);
            break;

           default:
            throw new Error("Wrong input string for convertion");
          }
          if (!1 === e) {
            const t = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
            this.year = t.getUTCFullYear(), this.month = t.getUTCMonth(), this.day = t.getUTCDay(), this.hour = t.getUTCHours(), this.minute = t.getUTCMinutes(), 
            this.second = t.getUTCSeconds(), this.millisecond = t.getUTCMilliseconds();
          }
        }
        toString() {
          const t = [];
          return t.push((0, n.padNumber)(this.year, 4)), t.push((0, n.padNumber)(this.month, 2)), t.push((0, n.padNumber)(this.day, 2)), 
          t.push((0, n.padNumber)(this.hour, 2)), t.push((0, n.padNumber)(this.minute, 2)), t.push((0, n.padNumber)(this.second, 2)), 
          0 !== this.millisecond && (t.push("."), t.push((0, n.padNumber)(this.millisecond, 3))), t.push("Z"), t.join("");
        }
        static blockName() {
          return "GeneralizedTime";
        }
        toJSON() {
          let t = {};
          try {
            t = super.toJSON();
          } catch (e) {}
          return t.year = this.year, t.month = this.month, t.day = this.day, t.hour = this.hour, t.minute = this.minute, t.second = this.second, 
          t.millisecond = this.millisecond, t;
        }
      }
      class et extends P {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 31;
        }
        static blockName() {
          return "DATE";
        }
      }
      class rt extends P {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 32;
        }
        static blockName() {
          return "TimeOfDay";
        }
      }
      class nt extends P {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 33;
        }
        static blockName() {
          return "DateTime";
        }
      }
      class it extends P {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 34;
        }
        static blockName() {
          return "Duration";
        }
      }
      class ot extends P {
        constructor(t = {}) {
          super(t), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 14;
        }
        static blockName() {
          return "TIME";
        }
      }
      class st {
        constructor(t = {}) {
          this.value = (0, n.getParametersValue)(t, "value", []), this.optional = (0, n.getParametersValue)(t, "optional", !1);
        }
      }
      class at {
        constructor(t = {}) {
          this.name = (0, n.getParametersValue)(t, "name", ""), this.optional = (0, n.getParametersValue)(t, "optional", !1);
        }
      }
      class lt {
        constructor(t = {}) {
          this.name = (0, n.getParametersValue)(t, "name", ""), this.optional = (0, n.getParametersValue)(t, "optional", !1), this.value = (0, 
          n.getParametersValue)(t, "value", new at), this.local = (0, n.getParametersValue)(t, "local", !1);
        }
      }
      class ht {
        constructor(t = {}) {
          this.data = (0, n.getParametersValue)(t, "data", new ArrayBuffer(0));
        }
        fromBER(t, e, r) {
          return this.data = t.slice(e, r), e + r;
        }
        toBER(t = !1) {
          return this.data;
        }
      }
      function ut(t, e, r) {
        const i = e;
        let o = new c({}, Object);
        const a = new s;
        if (!1 === (0, n.checkBufferParams)(a, t, e, r)) return o.error = a.error, {
          offset: -1,
          result: o
        };
        if (0 === new Uint8Array(t, e, r).length) return o.error = "Zero buffer length", {
          offset: -1,
          result: o
        };
        let l = o.idBlock.fromBER(t, e, r);
        if (o.warnings.concat(o.idBlock.warnings), -1 === l) return o.error = o.idBlock.error, {
          offset: -1,
          result: o
        };
        if (e = l, r -= o.idBlock.blockLength, l = o.lenBlock.fromBER(t, e, r), o.warnings.concat(o.lenBlock.warnings), -1 === l) return o.error = o.lenBlock.error, 
        {
          offset: -1,
          result: o
        };
        if (e = l, r -= o.lenBlock.blockLength, !1 === o.idBlock.isConstructed && !0 === o.lenBlock.isIndefiniteForm) return o.error = "Indefinite length form used for primitive encoding form", 
        {
          offset: -1,
          result: o
        };
        let h = c;
        if (1 === o.idBlock.tagClass) {
          if (o.idBlock.tagNumber >= 37 && !1 === o.idBlock.isHexOnly) return o.error = "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard", 
          {
            offset: -1,
            result: o
          };
          switch (o.idBlock.tagNumber) {
           case 0:
            if (!0 === o.idBlock.isConstructed && o.lenBlock.length > 0) return o.error = "Type [UNIVERSAL 0] is reserved", {
              offset: -1,
              result: o
            };
            h = v;
            break;

           case 1:
            h = b;
            break;

           case 2:
            h = L;
            break;

           case 3:
            h = _;
            break;

           case 4:
            h = B;
            break;

           case 5:
            h = x;
            break;

           case 6:
            h = C;
            break;

           case 10:
            h = S;
            break;

           case 12:
            h = P;
            break;

           case 13:
            h = R;
            break;

           case 14:
            h = ot;
            break;

           case 15:
            return o.error = "[UNIVERSAL 15] is reserved by ASN.1 standard", {
              offset: -1,
              result: o
            };

           case 16:
            h = w;
            break;

           case 17:
            h = k;
            break;

           case 18:
            h = q;
            break;

           case 19:
            h = G;
            break;

           case 20:
            h = V;
            break;

           case 21:
            h = $;
            break;

           case 22:
            h = W;
            break;

           case 23:
            h = Q;
            break;

           case 24:
            h = tt;
            break;

           case 25:
            h = J;
            break;

           case 26:
            h = K;
            break;

           case 27:
            h = Y;
            break;

           case 28:
            h = D;
            break;

           case 29:
            h = X;
            break;

           case 30:
            h = F;
            break;

           case 31:
            h = et;
            break;

           case 32:
            h = rt;
            break;

           case 33:
            h = nt;
            break;

           case 34:
            h = it;
            break;

           default:
            {
              let t;
              t = !0 === o.idBlock.isConstructed ? new g : new d, t.idBlock = o.idBlock, t.lenBlock = o.lenBlock, t.warnings = o.warnings, 
              o = t;
            }
          }
        } else h = !0 === o.idBlock.isConstructed ? g : d;
        return o = function(t, e) {
          if (t instanceof e) return t;
          const r = new e;
          return r.idBlock = t.idBlock, r.lenBlock = t.lenBlock, r.warnings = t.warnings, r.valueBeforeDecode = t.valueBeforeDecode.slice(0), 
          r;
        }(o, h), l = o.fromBER(t, e, !0 === o.lenBlock.isIndefiniteForm ? r : o.lenBlock.length), o.valueBeforeDecode = t.slice(i, i + o.blockLength), 
        {
          offset: l,
          result: o
        };
      }
      function ct(t) {
        if (0 === t.byteLength) {
          const t = new c({}, Object);
          return t.error = "Input buffer has zero length", {
            offset: -1,
            result: t
          };
        }
        return ut(t, 0, t.byteLength);
      }
      function ft(t, e, r) {
        if (r instanceof st) {
          const n = !1;
          for (let i = 0; i < r.value.length; i++) {
            if (!0 === ft(t, e, r.value[i]).verified) return {
              verified: !0,
              result: t
            };
          }
          if (!1 === n) {
            const t = {
              verified: !1,
              result: {
                error: "Wrong values for Choice type"
              }
            };
            return r.hasOwnProperty("name") && (t.name = r.name), t;
          }
        }
        if (r instanceof at) return r.hasOwnProperty("name") && (t[r.name] = e), {
          verified: !0,
          result: t
        };
        if (t instanceof Object == !1) return {
          verified: !1,
          result: {
            error: "Wrong root object"
          }
        };
        if (e instanceof Object == !1) return {
          verified: !1,
          result: {
            error: "Wrong ASN.1 data"
          }
        };
        if (r instanceof Object == !1) return {
          verified: !1,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
        if ("idBlock" in r == !1) return {
          verified: !1,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
        if ("fromBER" in r.idBlock == !1) return {
          verified: !1,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
        if ("toBER" in r.idBlock == !1) return {
          verified: !1,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
        const n = r.idBlock.toBER(!1);
        if (0 === n.byteLength) return {
          verified: !1,
          result: {
            error: "Error encoding idBlock for ASN.1 schema"
          }
        };
        if (-1 === r.idBlock.fromBER(n, 0, n.byteLength)) return {
          verified: !1,
          result: {
            error: "Error decoding idBlock for ASN.1 schema"
          }
        };
        if (!1 === r.idBlock.hasOwnProperty("tagClass")) return {
          verified: !1,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
        if (r.idBlock.tagClass !== e.idBlock.tagClass) return {
          verified: !1,
          result: t
        };
        if (!1 === r.idBlock.hasOwnProperty("tagNumber")) return {
          verified: !1,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
        if (r.idBlock.tagNumber !== e.idBlock.tagNumber) return {
          verified: !1,
          result: t
        };
        if (!1 === r.idBlock.hasOwnProperty("isConstructed")) return {
          verified: !1,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
        if (r.idBlock.isConstructed !== e.idBlock.isConstructed) return {
          verified: !1,
          result: t
        };
        if ("isHexOnly" in r.idBlock == !1) return {
          verified: !1,
          result: {
            error: "Wrong ASN.1 schema"
          }
        };
        if (r.idBlock.isHexOnly !== e.idBlock.isHexOnly) return {
          verified: !1,
          result: t
        };
        if (!0 === r.idBlock.isHexOnly) {
          if ("valueHex" in r.idBlock == !1) return {
            verified: !1,
            result: {
              error: "Wrong ASN.1 schema"
            }
          };
          const n = new Uint8Array(r.idBlock.valueHex);
          const i = new Uint8Array(e.idBlock.valueHex);
          if (n.length !== i.length) return {
            verified: !1,
            result: t
          };
          for (let e = 0; e < n.length; e++) if (n[e] !== i[1]) return {
            verified: !1,
            result: t
          };
        }
        if (r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && (t[r.name] = e)), !0 === r.idBlock.isConstructed) {
          let n = 0;
          let i = {
            verified: !1
          };
          let o = r.valueBlock.value.length;
          if (o > 0 && r.valueBlock.value[0] instanceof lt && (o = e.valueBlock.value.length), 0 === o) return {
            verified: !0,
            result: t
          };
          if (0 === e.valueBlock.value.length && 0 !== r.valueBlock.value.length) {
            let e = !0;
            for (let t = 0; t < r.valueBlock.value.length; t++) e = e && (r.valueBlock.value[t].optional || !1);
            return !0 === e ? {
              verified: !0,
              result: t
            } : (r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && delete t[r.name]), t.error = "Inconsistent object length", 
            {
              verified: !1,
              result: t
            });
          }
          for (let s = 0; s < o; s++) if (s - n >= e.valueBlock.value.length) {
            if (!1 === r.valueBlock.value[s].optional) {
              const e = {
                verified: !1,
                result: t
              };
              return t.error = "Inconsistent length between ASN.1 data and schema", r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), 
              "" !== r.name && (delete t[r.name], e.name = r.name)), e;
            }
          } else if (r.valueBlock.value[0] instanceof lt) {
            if (i = ft(t, e.valueBlock.value[s], r.valueBlock.value[0].value), !1 === i.verified) {
              if (!0 !== r.valueBlock.value[0].optional) return r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), 
              "" !== r.name && delete t[r.name]), i;
              n++;
            }
            if ("name" in r.valueBlock.value[0] && r.valueBlock.value[0].name.length > 0) {
              let n = {};
              n = "local" in r.valueBlock.value[0] && !0 === r.valueBlock.value[0].local ? e : t, void 0 === n[r.valueBlock.value[0].name] && (n[r.valueBlock.value[0].name] = []), 
              n[r.valueBlock.value[0].name].push(e.valueBlock.value[s]);
            }
          } else if (i = ft(t, e.valueBlock.value[s - n], r.valueBlock.value[s]), !1 === i.verified) {
            if (!0 !== r.valueBlock.value[s].optional) return r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), 
            "" !== r.name && delete t[r.name]), i;
            n++;
          }
          if (!1 === i.verified) {
            const e = {
              verified: !1,
              result: t
            };
            return r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && (delete t[r.name], e.name = r.name)), 
            e;
          }
          return {
            verified: !0,
            result: t
          };
        }
        if ("primitiveSchema" in r && "valueHex" in e.valueBlock) {
          const n = ct(e.valueBlock.valueHex);
          if (-1 === n.offset) {
            const e = {
              verified: !1,
              result: n.result
            };
            return r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && (delete t[r.name], e.name = r.name)), 
            e;
          }
          return ft(t, n.result, r.primitiveSchema);
        }
        return {
          verified: !0,
          result: t
        };
      }
      function dt(t, e) {
        if (e instanceof Object == !1) return {
          verified: !1,
          result: {
            error: "Wrong ASN.1 schema type"
          }
        };
        const r = ct(t);
        return -1 === r.offset ? {
          verified: !1,
          result: r.result
        } : ft(r.result, r.result, e);
      }
      function mt(t) {}
    },
    "./node_modules/base64-js/index.js": (t, e) => {
      "use strict";
      e.byteLength = function(t) {
        var e = l(t);
        var r = e[0];
        var n = e[1];
        return 3 * (r + n) / 4 - n;
      }, e.toByteArray = function(t) {
        var e;
        var r = l(t);
        var o = r[0];
        var s = r[1];
        var a = new i(function(t, e, r) {
          return 3 * (e + r) / 4 - r;
        }(0, o, s));
        var h = 0;
        var u = s > 0 ? o - 4 : o;
        var c;
        for (c = 0; c < u; c += 4) e = n[t.charCodeAt(c)] << 18 | n[t.charCodeAt(c + 1)] << 12 | n[t.charCodeAt(c + 2)] << 6 | n[t.charCodeAt(c + 3)], 
        a[h++] = e >> 16 & 255, a[h++] = e >> 8 & 255, a[h++] = 255 & e;
        2 === s && (e = n[t.charCodeAt(c)] << 2 | n[t.charCodeAt(c + 1)] >> 4, a[h++] = 255 & e);
        1 === s && (e = n[t.charCodeAt(c)] << 10 | n[t.charCodeAt(c + 1)] << 4 | n[t.charCodeAt(c + 2)] >> 2, a[h++] = e >> 8 & 255, 
        a[h++] = 255 & e);
        return a;
      }, e.fromByteArray = function(t) {
        var e;
        var n = t.length;
        var i = n % 3;
        var o = [];
        var s = 16383;
        for (var a = 0, l = n - i; a < l; a += s) o.push(u(t, a, a + s > l ? l : a + s));
        1 === i ? (e = t[n - 1], o.push(r[e >> 2] + r[e << 4 & 63] + '==')) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], o.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + '='));
        return o.join('');
      };
      var r = [];
      var n = [];
      var i = 'undefined' != typeof Uint8Array ? Uint8Array : Array;
      var o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (var s = 0, a = o.length; s < a; ++s) r[s] = o[s], n[o.charCodeAt(s)] = s;
      function l(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
        var r = t.indexOf('=');
        return -1 === r && (r = e), [ r, r === e ? 0 : 4 - r % 4 ];
      }
      function h(t) {
        return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t];
      }
      function u(t, e, r) {
        var n;
        var i = [];
        for (var o = e; o < r; o += 3) n = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]), i.push(h(n));
        return i.join('');
      }
      n['-'.charCodeAt(0)] = 62, n['_'.charCodeAt(0)] = 63;
    },
    "./node_modules/bech32/index.js": t => {
      "use strict";
      var e = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
      var r = {};
      for (var n = 0; n < e.length; n++) {
        var i = e.charAt(n);
        if (void 0 !== r[i]) throw new TypeError(i + ' is ambiguous');
        r[i] = n;
      }
      function o(t) {
        var e = t >> 25;
        return (33554431 & t) << 5 ^ 996825010 & -(e >> 0 & 1) ^ 642813549 & -(e >> 1 & 1) ^ 513874426 & -(e >> 2 & 1) ^ 1027748829 & -(e >> 3 & 1) ^ 705979059 & -(e >> 4 & 1);
      }
      function s(t) {
        var e = 1;
        for (var r = 0; r < t.length; ++r) {
          var n = t.charCodeAt(r);
          if (n < 33 || n > 126) return 'Invalid prefix (' + t + ')';
          e = o(e) ^ n >> 5;
        }
        for (e = o(e), r = 0; r < t.length; ++r) {
          var i = t.charCodeAt(r);
          e = o(e) ^ 31 & i;
        }
        return e;
      }
      function a(t, e) {
        if (e = e || 90, t.length < 8) return t + ' too short';
        if (t.length > e) return 'Exceeds length limit';
        var n = t.toLowerCase();
        var i = t.toUpperCase();
        if (t !== n && t !== i) return 'Mixed-case string ' + t;
        var a = (t = n).lastIndexOf('1');
        if (-1 === a) return 'No separator character for ' + t;
        if (0 === a) return 'Missing prefix for ' + t;
        var l = t.slice(0, a);
        var h = t.slice(a + 1);
        if (h.length < 6) return 'Data too short';
        var u = s(l);
        if ('string' == typeof u) return u;
        var c = [];
        for (var f = 0; f < h.length; ++f) {
          var d = h.charAt(f);
          var m = r[d];
          if (void 0 === m) return 'Unknown character ' + d;
          u = o(u) ^ m, f + 6 >= h.length || c.push(m);
        }
        return 1 !== u ? 'Invalid checksum for ' + t : {
          prefix: l,
          words: c
        };
      }
      function l(t, e, r, n) {
        var i = 0;
        var o = 0;
        var s = (1 << r) - 1;
        var a = [];
        for (var l = 0; l < t.length; ++l) for (i = i << e | t[l], o += e; o >= r; ) o -= r, a.push(i >> o & s);
        if (n) o > 0 && a.push(i << r - o & s); else {
          if (o >= e) return 'Excess padding';
          if (i << r - o & s) return 'Non-zero padding';
        }
        return a;
      }
      t.exports = {
        decodeUnsafe: function() {
          var t = a.apply(null, arguments);
          if ('object' == typeof t) return t;
        },
        decode: function(t) {
          var e = a.apply(null, arguments);
          if ('object' == typeof e) return e;
          throw new Error(e);
        },
        encode: function(t, r, n) {
          if (n = n || 90, t.length + 7 + r.length > n) throw new TypeError('Exceeds length limit');
          var i = s(t = t.toLowerCase());
          if ('string' == typeof i) throw new Error(i);
          var a = t + '1';
          for (var l = 0; l < r.length; ++l) {
            var h = r[l];
            if (h >> 5 != 0) throw new Error('Non 5-bit word');
            i = o(i) ^ h, a += e.charAt(h);
          }
          for (l = 0; l < 6; ++l) i = o(i);
          for (i ^= 1, l = 0; l < 6; ++l) {
            a += e.charAt(i >> 5 * (5 - l) & 31);
          }
          return a;
        },
        toWordsUnsafe: function(t) {
          var e = l(t, 8, 5, !0);
          if (Array.isArray(e)) return e;
        },
        toWords: function(t) {
          var e = l(t, 8, 5, !0);
          if (Array.isArray(e)) return e;
          throw new Error(e);
        },
        fromWordsUnsafe: function(t) {
          var e = l(t, 5, 8, !1);
          if (Array.isArray(e)) return e;
        },
        fromWords: function(t) {
          var e = l(t, 5, 8, !1);
          if (Array.isArray(e)) return e;
          throw new Error(e);
        }
      };
    },
    "./node_modules/bn.js/lib/bn.js": function(t, e, r) {
      !function(t, e) {
        'use strict';
        function n(t, e) {
          if (!t) throw new Error(e || 'Assertion failed');
        }
        function i(t, e) {
          t.super_ = e;
          var r = function() {};
          r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t;
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ('le' !== e && 'be' !== e || (r = e, 
          e = 10), this._init(t || 0, e || 10, r || 'be'));
        }
        var s;
        'object' == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
        try {
          s = 'undefined' != typeof window && void 0 !== window.Buffer ? window.Buffer : r("?8131").Buffer;
        } catch (E) {}
        function a(t, e) {
          var r = t.charCodeAt(e);
          return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15;
        }
        function l(t, e, r) {
          var n = a(t, r);
          return r - 1 >= e && (n |= a(t, r - 1) << 4), n;
        }
        function h(t, e, r, n) {
          var i = 0;
          var o = Math.min(t.length, r);
          for (var s = e; s < o; s++) {
            var a = t.charCodeAt(s) - 48;
            i *= n, i += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a;
          }
          return i;
        }
        o.isBN = function(t) {
          return t instanceof o || null !== t && 'object' == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words);
        }, o.max = function(t, e) {
          return t.cmp(e) > 0 ? t : e;
        }, o.min = function(t, e) {
          return t.cmp(e) < 0 ? t : e;
        }, o.prototype._init = function(t, e, r) {
          if ('number' == typeof t) return this._initNumber(t, e, r);
          if ('object' == typeof t) return this._initArray(t, e, r);
          'hex' === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
          var i = 0;
          '-' === (t = t.toString().replace(/\s+/g, ''))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), 
          'le' === r && this._initArray(this.toArray(), e, r)));
        }, o.prototype._initNumber = function(t, e, r) {
          t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [ 67108863 & t ], this.length = 1) : t < 4503599627370496 ? (this.words = [ 67108863 & t, t / 67108864 & 67108863 ], 
          this.length = 2) : (n(t < 9007199254740992), this.words = [ 67108863 & t, t / 67108864 & 67108863, 1 ], this.length = 3), 
          'le' === r && this._initArray(this.toArray(), e, r);
        }, o.prototype._initArray = function(t, e, r) {
          if (n('number' == typeof t.length), t.length <= 0) return this.words = [ 0 ], this.length = 1, this;
          this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
          for (var i = 0; i < this.length; i++) this.words[i] = 0;
          var o, s;
          var a = 0;
          if ('be' === r) for (i = t.length - 1, o = 0; i >= 0; i -= 3) s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << a & 67108863, 
          this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++); else if ('le' === r) for (i = 0, o = 0; i < t.length; i += 3) s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, 
          this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
          return this.strip();
        }, o.prototype._parseHex = function(t, e, r) {
          this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
          for (var n = 0; n < this.length; n++) this.words[n] = 0;
          var i = 0;
          var o = 0;
          var s;
          if ('be' === r) for (n = t.length - 1; n >= e; n -= 2) s = l(t, e, n) << i, this.words[o] |= 67108863 & s, i >= 18 ? (i -= 18, 
          o += 1, this.words[o] |= s >>> 26) : i += 8; else for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) s = l(t, e, n) << i, 
          this.words[o] |= 67108863 & s, i >= 18 ? (i -= 18, o += 1, this.words[o] |= s >>> 26) : i += 8;
          this.strip();
        }, o.prototype._parseBase = function(t, e, r) {
          this.words = [ 0 ], this.length = 1;
          for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
          n--, i = i / e | 0;
          var o = t.length - r;
          var s = o % n;
          var a = Math.min(o, o - s) + r;
          var l = 0;
          for (var u = r; u < a; u += n) l = h(t, u, u + n, e), this.imuln(i), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l);
          if (0 !== s) {
            var c = 1;
            for (l = h(t, u, t.length, e), u = 0; u < s; u++) c *= e;
            this.imuln(c), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l);
          }
          this.strip();
        }, o.prototype.copy = function(t) {
          t.words = new Array(this.length);
          for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
          t.length = this.length, t.negative = this.negative, t.red = this.red;
        }, o.prototype.clone = function() {
          var t = new o(null);
          return this.copy(t), t;
        }, o.prototype._expand = function(t) {
          for (;this.length < t; ) this.words[this.length++] = 0;
          return this;
        }, o.prototype.strip = function() {
          for (;this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
          return this._normSign();
        }, o.prototype._normSign = function() {
          return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
        }, o.prototype.inspect = function() {
          return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
        };
        var u = [ '', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000' ];
        var c = [ 0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ];
        var f = [ 0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176 ];
        function d(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = t.length + e.length | 0;
          r.length = n, n = n - 1 | 0;
          var i = 0 | t.words[0];
          var o = 0 | e.words[0];
          var s = i * o;
          var a = 67108863 & s;
          var l = s / 67108864 | 0;
          r.words[0] = a;
          for (var h = 1; h < n; h++) {
            var u = l >>> 26;
            var c = 67108863 & l;
            var f = Math.min(h, e.length - 1);
            for (var d = Math.max(0, h - t.length + 1); d <= f; d++) {
              var m = h - d | 0;
              u += (s = (i = 0 | t.words[m]) * (o = 0 | e.words[d]) + c) / 67108864 | 0, c = 67108863 & s;
            }
            r.words[h] = 0 | c, l = 0 | u;
          }
          return 0 !== l ? r.words[h] = 0 | l : r.length--, r.strip();
        }
        o.prototype.toString = function(t, e) {
          var r;
          if (e = 0 | e || 1, 16 === (t = t || 10) || 'hex' === t) {
            r = '';
            var i = 0;
            var o = 0;
            for (var s = 0; s < this.length; s++) {
              var a = this.words[s];
              var l = (16777215 & (a << i | o)).toString(16);
              r = 0 !== (o = a >>> 24 - i & 16777215) || s !== this.length - 1 ? u[6 - l.length] + l + r : l + r, (i += 2) >= 26 && (i -= 26, 
              s--);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; ) r = '0' + r;
            return 0 !== this.negative && (r = '-' + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var h = c[t];
            var d = f[t];
            r = '';
            var m = this.clone();
            for (m.negative = 0; !m.isZero(); ) {
              var g = m.modn(d).toString(t);
              r = (m = m.idivn(d)).isZero() ? g + r : u[h - g.length] + g + r;
            }
            for (this.isZero() && (r = '0' + r); r.length % e != 0; ) r = '0' + r;
            return 0 !== this.negative && (r = '-' + r), r;
          }
          n(!1, 'Base should be between 2 and 36');
        }, o.prototype.toNumber = function() {
          var t = this.words[0];
          return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, 'Number can only safely store up to 53 bits'), 
          0 !== this.negative ? -t : t;
        }, o.prototype.toJSON = function() {
          return this.toString(16);
        }, o.prototype.toBuffer = function(t, e) {
          return n(void 0 !== s), this.toArrayLike(s, t, e);
        }, o.prototype.toArray = function(t, e) {
          return this.toArrayLike(Array, t, e);
        }, o.prototype.toArrayLike = function(t, e, r) {
          var i = this.byteLength();
          var o = r || Math.max(1, i);
          n(i <= o, 'byte array longer than desired length'), n(o > 0, 'Requested array length <= 0'), this.strip();
          var s = 'le' === e;
          var a = new t(o);
          var l, h;
          var u = this.clone();
          if (s) {
            for (h = 0; !u.isZero(); h++) l = u.andln(255), u.iushrn(8), a[h] = l;
            for (;h < o; h++) a[h] = 0;
          } else {
            for (h = 0; h < o - i; h++) a[h] = 0;
            for (h = 0; !u.isZero(); h++) l = u.andln(255), u.iushrn(8), a[o - h - 1] = l;
          }
          return a;
        }, Math.clz32 ? o.prototype._countBits = function(t) {
          return 32 - Math.clz32(t);
        } : o.prototype._countBits = function(t) {
          var e = t;
          var r = 0;
          return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, 
          e >>>= 2), r + e;
        }, o.prototype._zeroBits = function(t) {
          if (0 === t) return 26;
          var e = t;
          var r = 0;
          return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 
          0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r;
        }, o.prototype.bitLength = function() {
          var t = this.words[this.length - 1];
          var e = this._countBits(t);
          return 26 * (this.length - 1) + e;
        }, o.prototype.zeroBits = function() {
          if (this.isZero()) return 0;
          var t = 0;
          for (var e = 0; e < this.length; e++) {
            var r = this._zeroBits(this.words[e]);
            if (t += r, 26 !== r) break;
          }
          return t;
        }, o.prototype.byteLength = function() {
          return Math.ceil(this.bitLength() / 8);
        }, o.prototype.toTwos = function(t) {
          return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
        }, o.prototype.fromTwos = function(t) {
          return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
        }, o.prototype.isNeg = function() {
          return 0 !== this.negative;
        }, o.prototype.neg = function() {
          return this.clone().ineg();
        }, o.prototype.ineg = function() {
          return this.isZero() || (this.negative ^= 1), this;
        }, o.prototype.iuor = function(t) {
          for (;this.length < t.length; ) this.words[this.length++] = 0;
          for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
          return this.strip();
        }, o.prototype.ior = function(t) {
          return n(0 == (this.negative | t.negative)), this.iuor(t);
        }, o.prototype.or = function(t) {
          return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
        }, o.prototype.uor = function(t) {
          return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
        }, o.prototype.iuand = function(t) {
          var e;
          e = this.length > t.length ? t : this;
          for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
          return this.length = e.length, this.strip();
        }, o.prototype.iand = function(t) {
          return n(0 == (this.negative | t.negative)), this.iuand(t);
        }, o.prototype.and = function(t) {
          return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
        }, o.prototype.uand = function(t) {
          return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
        }, o.prototype.iuxor = function(t) {
          var e;
          var r;
          this.length > t.length ? (e = this, r = t) : (e = t, r = this);
          for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
          if (this !== e) for (;n < e.length; n++) this.words[n] = e.words[n];
          return this.length = e.length, this.strip();
        }, o.prototype.ixor = function(t) {
          return n(0 == (this.negative | t.negative)), this.iuxor(t);
        }, o.prototype.xor = function(t) {
          return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
        }, o.prototype.uxor = function(t) {
          return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
        }, o.prototype.inotn = function(t) {
          n('number' == typeof t && t >= 0);
          var e = 0 | Math.ceil(t / 26);
          var r = t % 26;
          this._expand(e), r > 0 && e--;
          for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
          return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip();
        }, o.prototype.notn = function(t) {
          return this.clone().inotn(t);
        }, o.prototype.setn = function(t, e) {
          n('number' == typeof t && t >= 0);
          var r = t / 26 | 0;
          var i = t % 26;
          return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip();
        }, o.prototype.iadd = function(t) {
          var e;
          if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
          if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
          var r, n;
          this.length > t.length ? (r = this, n = t) : (r = t, n = this);
          var i = 0;
          for (var o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
          for (;0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
          if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++; else if (r !== this) for (;o < r.length; o++) this.words[o] = r.words[o];
          return this;
        }, o.prototype.add = function(t) {
          var e;
          return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, 
          e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
        }, o.prototype.isub = function(t) {
          if (0 !== t.negative) {
            t.negative = 0;
            var e = this.iadd(t);
            return t.negative = 1, e._normSign();
          }
          if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
          var r = this.cmp(t);
          if (0 === r) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
          var n, i;
          r > 0 ? (n = this, i = t) : (n = t, i = this);
          var o = 0;
          for (var s = 0; s < i.length; s++) o = (e = (0 | n.words[s]) - (0 | i.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
          for (;0 !== o && s < n.length; s++) o = (e = (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
          if (0 === o && s < n.length && n !== this) for (;s < n.length; s++) this.words[s] = n.words[s];
          return this.length = Math.max(this.length, s), n !== this && (this.negative = 1), this.strip();
        }, o.prototype.sub = function(t) {
          return this.clone().isub(t);
        };
        var m = function(t, e, r) {
          var n = t.words;
          var i = e.words;
          var o = r.words;
          var s = 0;
          var a;
          var l;
          var h;
          var u = 0 | n[0];
          var c = 8191 & u;
          var f = u >>> 13;
          var d = 0 | n[1];
          var m = 8191 & d;
          var g = d >>> 13;
          var p = 0 | n[2];
          var v = 8191 & p;
          var y = p >>> 13;
          var b = 0 | n[3];
          var w = 8191 & b;
          var k = b >>> 13;
          var x = 0 | n[4];
          var A = 8191 & x;
          var B = x >>> 13;
          var E = 0 | n[5];
          var _ = 8191 & E;
          var N = E >>> 13;
          var L = 0 | n[6];
          var S = 8191 & L;
          var M = L >>> 13;
          var I = 0 | n[7];
          var C = 8191 & I;
          var j = I >>> 13;
          var P = 0 | n[8];
          var T = 8191 & P;
          var O = P >>> 13;
          var R = 0 | n[9];
          var U = 8191 & R;
          var F = R >>> 13;
          var H = 0 | i[0];
          var D = 8191 & H;
          var z = H >>> 13;
          var Z = 0 | i[1];
          var q = 8191 & Z;
          var G = Z >>> 13;
          var V = 0 | i[2];
          var $ = 8191 & V;
          var W = V >>> 13;
          var J = 0 | i[3];
          var K = 8191 & J;
          var Y = J >>> 13;
          var X = 0 | i[4];
          var Q = 8191 & X;
          var tt = X >>> 13;
          var et = 0 | i[5];
          var rt = 8191 & et;
          var nt = et >>> 13;
          var it = 0 | i[6];
          var ot = 8191 & it;
          var st = it >>> 13;
          var at = 0 | i[7];
          var lt = 8191 & at;
          var ht = at >>> 13;
          var ut = 0 | i[8];
          var ct = 8191 & ut;
          var ft = ut >>> 13;
          var dt = 0 | i[9];
          var mt = 8191 & dt;
          var gt = dt >>> 13;
          r.negative = t.negative ^ e.negative, r.length = 19;
          var pt = (s + (a = Math.imul(c, D)) | 0) + ((8191 & (l = (l = Math.imul(c, z)) + Math.imul(f, D) | 0)) << 13) | 0;
          s = ((h = Math.imul(f, z)) + (l >>> 13) | 0) + (pt >>> 26) | 0, pt &= 67108863, a = Math.imul(m, D), l = (l = Math.imul(m, z)) + Math.imul(g, D) | 0, 
          h = Math.imul(g, z);
          var vt = (s + (a = a + Math.imul(c, q) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(c, G) | 0) + Math.imul(f, q) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(f, G) | 0) + (l >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, a = Math.imul(v, D), l = (l = Math.imul(v, z)) + Math.imul(y, D) | 0, 
          h = Math.imul(y, z), a = a + Math.imul(m, q) | 0, l = (l = l + Math.imul(m, G) | 0) + Math.imul(g, q) | 0, h = h + Math.imul(g, G) | 0;
          var yt = (s + (a = a + Math.imul(c, $) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(c, W) | 0) + Math.imul(f, $) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(f, W) | 0) + (l >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, a = Math.imul(w, D), l = (l = Math.imul(w, z)) + Math.imul(k, D) | 0, 
          h = Math.imul(k, z), a = a + Math.imul(v, q) | 0, l = (l = l + Math.imul(v, G) | 0) + Math.imul(y, q) | 0, h = h + Math.imul(y, G) | 0, 
          a = a + Math.imul(m, $) | 0, l = (l = l + Math.imul(m, W) | 0) + Math.imul(g, $) | 0, h = h + Math.imul(g, W) | 0;
          var bt = (s + (a = a + Math.imul(c, K) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(c, Y) | 0) + Math.imul(f, K) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(f, Y) | 0) + (l >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, a = Math.imul(A, D), l = (l = Math.imul(A, z)) + Math.imul(B, D) | 0, 
          h = Math.imul(B, z), a = a + Math.imul(w, q) | 0, l = (l = l + Math.imul(w, G) | 0) + Math.imul(k, q) | 0, h = h + Math.imul(k, G) | 0, 
          a = a + Math.imul(v, $) | 0, l = (l = l + Math.imul(v, W) | 0) + Math.imul(y, $) | 0, h = h + Math.imul(y, W) | 0, a = a + Math.imul(m, K) | 0, 
          l = (l = l + Math.imul(m, Y) | 0) + Math.imul(g, K) | 0, h = h + Math.imul(g, Y) | 0;
          var wt = (s + (a = a + Math.imul(c, Q) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(c, tt) | 0) + Math.imul(f, Q) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(f, tt) | 0) + (l >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, a = Math.imul(_, D), l = (l = Math.imul(_, z)) + Math.imul(N, D) | 0, 
          h = Math.imul(N, z), a = a + Math.imul(A, q) | 0, l = (l = l + Math.imul(A, G) | 0) + Math.imul(B, q) | 0, h = h + Math.imul(B, G) | 0, 
          a = a + Math.imul(w, $) | 0, l = (l = l + Math.imul(w, W) | 0) + Math.imul(k, $) | 0, h = h + Math.imul(k, W) | 0, a = a + Math.imul(v, K) | 0, 
          l = (l = l + Math.imul(v, Y) | 0) + Math.imul(y, K) | 0, h = h + Math.imul(y, Y) | 0, a = a + Math.imul(m, Q) | 0, l = (l = l + Math.imul(m, tt) | 0) + Math.imul(g, Q) | 0, 
          h = h + Math.imul(g, tt) | 0;
          var kt = (s + (a = a + Math.imul(c, rt) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(c, nt) | 0) + Math.imul(f, rt) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(f, nt) | 0) + (l >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, a = Math.imul(S, D), l = (l = Math.imul(S, z)) + Math.imul(M, D) | 0, 
          h = Math.imul(M, z), a = a + Math.imul(_, q) | 0, l = (l = l + Math.imul(_, G) | 0) + Math.imul(N, q) | 0, h = h + Math.imul(N, G) | 0, 
          a = a + Math.imul(A, $) | 0, l = (l = l + Math.imul(A, W) | 0) + Math.imul(B, $) | 0, h = h + Math.imul(B, W) | 0, a = a + Math.imul(w, K) | 0, 
          l = (l = l + Math.imul(w, Y) | 0) + Math.imul(k, K) | 0, h = h + Math.imul(k, Y) | 0, a = a + Math.imul(v, Q) | 0, l = (l = l + Math.imul(v, tt) | 0) + Math.imul(y, Q) | 0, 
          h = h + Math.imul(y, tt) | 0, a = a + Math.imul(m, rt) | 0, l = (l = l + Math.imul(m, nt) | 0) + Math.imul(g, rt) | 0, h = h + Math.imul(g, nt) | 0;
          var xt = (s + (a = a + Math.imul(c, ot) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(c, st) | 0) + Math.imul(f, ot) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(f, st) | 0) + (l >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, a = Math.imul(C, D), l = (l = Math.imul(C, z)) + Math.imul(j, D) | 0, 
          h = Math.imul(j, z), a = a + Math.imul(S, q) | 0, l = (l = l + Math.imul(S, G) | 0) + Math.imul(M, q) | 0, h = h + Math.imul(M, G) | 0, 
          a = a + Math.imul(_, $) | 0, l = (l = l + Math.imul(_, W) | 0) + Math.imul(N, $) | 0, h = h + Math.imul(N, W) | 0, a = a + Math.imul(A, K) | 0, 
          l = (l = l + Math.imul(A, Y) | 0) + Math.imul(B, K) | 0, h = h + Math.imul(B, Y) | 0, a = a + Math.imul(w, Q) | 0, l = (l = l + Math.imul(w, tt) | 0) + Math.imul(k, Q) | 0, 
          h = h + Math.imul(k, tt) | 0, a = a + Math.imul(v, rt) | 0, l = (l = l + Math.imul(v, nt) | 0) + Math.imul(y, rt) | 0, h = h + Math.imul(y, nt) | 0, 
          a = a + Math.imul(m, ot) | 0, l = (l = l + Math.imul(m, st) | 0) + Math.imul(g, ot) | 0, h = h + Math.imul(g, st) | 0;
          var At = (s + (a = a + Math.imul(c, lt) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(c, ht) | 0) + Math.imul(f, lt) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(f, ht) | 0) + (l >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, a = Math.imul(T, D), l = (l = Math.imul(T, z)) + Math.imul(O, D) | 0, 
          h = Math.imul(O, z), a = a + Math.imul(C, q) | 0, l = (l = l + Math.imul(C, G) | 0) + Math.imul(j, q) | 0, h = h + Math.imul(j, G) | 0, 
          a = a + Math.imul(S, $) | 0, l = (l = l + Math.imul(S, W) | 0) + Math.imul(M, $) | 0, h = h + Math.imul(M, W) | 0, a = a + Math.imul(_, K) | 0, 
          l = (l = l + Math.imul(_, Y) | 0) + Math.imul(N, K) | 0, h = h + Math.imul(N, Y) | 0, a = a + Math.imul(A, Q) | 0, l = (l = l + Math.imul(A, tt) | 0) + Math.imul(B, Q) | 0, 
          h = h + Math.imul(B, tt) | 0, a = a + Math.imul(w, rt) | 0, l = (l = l + Math.imul(w, nt) | 0) + Math.imul(k, rt) | 0, h = h + Math.imul(k, nt) | 0, 
          a = a + Math.imul(v, ot) | 0, l = (l = l + Math.imul(v, st) | 0) + Math.imul(y, ot) | 0, h = h + Math.imul(y, st) | 0, a = a + Math.imul(m, lt) | 0, 
          l = (l = l + Math.imul(m, ht) | 0) + Math.imul(g, lt) | 0, h = h + Math.imul(g, ht) | 0;
          var Bt = (s + (a = a + Math.imul(c, ct) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(c, ft) | 0) + Math.imul(f, ct) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(f, ft) | 0) + (l >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, a = Math.imul(U, D), l = (l = Math.imul(U, z)) + Math.imul(F, D) | 0, 
          h = Math.imul(F, z), a = a + Math.imul(T, q) | 0, l = (l = l + Math.imul(T, G) | 0) + Math.imul(O, q) | 0, h = h + Math.imul(O, G) | 0, 
          a = a + Math.imul(C, $) | 0, l = (l = l + Math.imul(C, W) | 0) + Math.imul(j, $) | 0, h = h + Math.imul(j, W) | 0, a = a + Math.imul(S, K) | 0, 
          l = (l = l + Math.imul(S, Y) | 0) + Math.imul(M, K) | 0, h = h + Math.imul(M, Y) | 0, a = a + Math.imul(_, Q) | 0, l = (l = l + Math.imul(_, tt) | 0) + Math.imul(N, Q) | 0, 
          h = h + Math.imul(N, tt) | 0, a = a + Math.imul(A, rt) | 0, l = (l = l + Math.imul(A, nt) | 0) + Math.imul(B, rt) | 0, h = h + Math.imul(B, nt) | 0, 
          a = a + Math.imul(w, ot) | 0, l = (l = l + Math.imul(w, st) | 0) + Math.imul(k, ot) | 0, h = h + Math.imul(k, st) | 0, a = a + Math.imul(v, lt) | 0, 
          l = (l = l + Math.imul(v, ht) | 0) + Math.imul(y, lt) | 0, h = h + Math.imul(y, ht) | 0, a = a + Math.imul(m, ct) | 0, l = (l = l + Math.imul(m, ft) | 0) + Math.imul(g, ct) | 0, 
          h = h + Math.imul(g, ft) | 0;
          var Et = (s + (a = a + Math.imul(c, mt) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(c, gt) | 0) + Math.imul(f, mt) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(f, gt) | 0) + (l >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, a = Math.imul(U, q), l = (l = Math.imul(U, G)) + Math.imul(F, q) | 0, 
          h = Math.imul(F, G), a = a + Math.imul(T, $) | 0, l = (l = l + Math.imul(T, W) | 0) + Math.imul(O, $) | 0, h = h + Math.imul(O, W) | 0, 
          a = a + Math.imul(C, K) | 0, l = (l = l + Math.imul(C, Y) | 0) + Math.imul(j, K) | 0, h = h + Math.imul(j, Y) | 0, a = a + Math.imul(S, Q) | 0, 
          l = (l = l + Math.imul(S, tt) | 0) + Math.imul(M, Q) | 0, h = h + Math.imul(M, tt) | 0, a = a + Math.imul(_, rt) | 0, l = (l = l + Math.imul(_, nt) | 0) + Math.imul(N, rt) | 0, 
          h = h + Math.imul(N, nt) | 0, a = a + Math.imul(A, ot) | 0, l = (l = l + Math.imul(A, st) | 0) + Math.imul(B, ot) | 0, h = h + Math.imul(B, st) | 0, 
          a = a + Math.imul(w, lt) | 0, l = (l = l + Math.imul(w, ht) | 0) + Math.imul(k, lt) | 0, h = h + Math.imul(k, ht) | 0, a = a + Math.imul(v, ct) | 0, 
          l = (l = l + Math.imul(v, ft) | 0) + Math.imul(y, ct) | 0, h = h + Math.imul(y, ft) | 0;
          var _t = (s + (a = a + Math.imul(m, mt) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(m, gt) | 0) + Math.imul(g, mt) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(g, gt) | 0) + (l >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, a = Math.imul(U, $), l = (l = Math.imul(U, W)) + Math.imul(F, $) | 0, 
          h = Math.imul(F, W), a = a + Math.imul(T, K) | 0, l = (l = l + Math.imul(T, Y) | 0) + Math.imul(O, K) | 0, h = h + Math.imul(O, Y) | 0, 
          a = a + Math.imul(C, Q) | 0, l = (l = l + Math.imul(C, tt) | 0) + Math.imul(j, Q) | 0, h = h + Math.imul(j, tt) | 0, a = a + Math.imul(S, rt) | 0, 
          l = (l = l + Math.imul(S, nt) | 0) + Math.imul(M, rt) | 0, h = h + Math.imul(M, nt) | 0, a = a + Math.imul(_, ot) | 0, l = (l = l + Math.imul(_, st) | 0) + Math.imul(N, ot) | 0, 
          h = h + Math.imul(N, st) | 0, a = a + Math.imul(A, lt) | 0, l = (l = l + Math.imul(A, ht) | 0) + Math.imul(B, lt) | 0, h = h + Math.imul(B, ht) | 0, 
          a = a + Math.imul(w, ct) | 0, l = (l = l + Math.imul(w, ft) | 0) + Math.imul(k, ct) | 0, h = h + Math.imul(k, ft) | 0;
          var Nt = (s + (a = a + Math.imul(v, mt) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(v, gt) | 0) + Math.imul(y, mt) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(y, gt) | 0) + (l >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, a = Math.imul(U, K), l = (l = Math.imul(U, Y)) + Math.imul(F, K) | 0, 
          h = Math.imul(F, Y), a = a + Math.imul(T, Q) | 0, l = (l = l + Math.imul(T, tt) | 0) + Math.imul(O, Q) | 0, h = h + Math.imul(O, tt) | 0, 
          a = a + Math.imul(C, rt) | 0, l = (l = l + Math.imul(C, nt) | 0) + Math.imul(j, rt) | 0, h = h + Math.imul(j, nt) | 0, a = a + Math.imul(S, ot) | 0, 
          l = (l = l + Math.imul(S, st) | 0) + Math.imul(M, ot) | 0, h = h + Math.imul(M, st) | 0, a = a + Math.imul(_, lt) | 0, l = (l = l + Math.imul(_, ht) | 0) + Math.imul(N, lt) | 0, 
          h = h + Math.imul(N, ht) | 0, a = a + Math.imul(A, ct) | 0, l = (l = l + Math.imul(A, ft) | 0) + Math.imul(B, ct) | 0, h = h + Math.imul(B, ft) | 0;
          var Lt = (s + (a = a + Math.imul(w, mt) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(w, gt) | 0) + Math.imul(k, mt) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(k, gt) | 0) + (l >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, a = Math.imul(U, Q), l = (l = Math.imul(U, tt)) + Math.imul(F, Q) | 0, 
          h = Math.imul(F, tt), a = a + Math.imul(T, rt) | 0, l = (l = l + Math.imul(T, nt) | 0) + Math.imul(O, rt) | 0, h = h + Math.imul(O, nt) | 0, 
          a = a + Math.imul(C, ot) | 0, l = (l = l + Math.imul(C, st) | 0) + Math.imul(j, ot) | 0, h = h + Math.imul(j, st) | 0, a = a + Math.imul(S, lt) | 0, 
          l = (l = l + Math.imul(S, ht) | 0) + Math.imul(M, lt) | 0, h = h + Math.imul(M, ht) | 0, a = a + Math.imul(_, ct) | 0, l = (l = l + Math.imul(_, ft) | 0) + Math.imul(N, ct) | 0, 
          h = h + Math.imul(N, ft) | 0;
          var St = (s + (a = a + Math.imul(A, mt) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(A, gt) | 0) + Math.imul(B, mt) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(B, gt) | 0) + (l >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, a = Math.imul(U, rt), l = (l = Math.imul(U, nt)) + Math.imul(F, rt) | 0, 
          h = Math.imul(F, nt), a = a + Math.imul(T, ot) | 0, l = (l = l + Math.imul(T, st) | 0) + Math.imul(O, ot) | 0, h = h + Math.imul(O, st) | 0, 
          a = a + Math.imul(C, lt) | 0, l = (l = l + Math.imul(C, ht) | 0) + Math.imul(j, lt) | 0, h = h + Math.imul(j, ht) | 0, a = a + Math.imul(S, ct) | 0, 
          l = (l = l + Math.imul(S, ft) | 0) + Math.imul(M, ct) | 0, h = h + Math.imul(M, ft) | 0;
          var Mt = (s + (a = a + Math.imul(_, mt) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(_, gt) | 0) + Math.imul(N, mt) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(N, gt) | 0) + (l >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, a = Math.imul(U, ot), l = (l = Math.imul(U, st)) + Math.imul(F, ot) | 0, 
          h = Math.imul(F, st), a = a + Math.imul(T, lt) | 0, l = (l = l + Math.imul(T, ht) | 0) + Math.imul(O, lt) | 0, h = h + Math.imul(O, ht) | 0, 
          a = a + Math.imul(C, ct) | 0, l = (l = l + Math.imul(C, ft) | 0) + Math.imul(j, ct) | 0, h = h + Math.imul(j, ft) | 0;
          var It = (s + (a = a + Math.imul(S, mt) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(S, gt) | 0) + Math.imul(M, mt) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(M, gt) | 0) + (l >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, a = Math.imul(U, lt), l = (l = Math.imul(U, ht)) + Math.imul(F, lt) | 0, 
          h = Math.imul(F, ht), a = a + Math.imul(T, ct) | 0, l = (l = l + Math.imul(T, ft) | 0) + Math.imul(O, ct) | 0, h = h + Math.imul(O, ft) | 0;
          var Ct = (s + (a = a + Math.imul(C, mt) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(C, gt) | 0) + Math.imul(j, mt) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(j, gt) | 0) + (l >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, a = Math.imul(U, ct), l = (l = Math.imul(U, ft)) + Math.imul(F, ct) | 0, 
          h = Math.imul(F, ft);
          var jt = (s + (a = a + Math.imul(T, mt) | 0) | 0) + ((8191 & (l = (l = l + Math.imul(T, gt) | 0) + Math.imul(O, mt) | 0)) << 13) | 0;
          s = ((h = h + Math.imul(O, gt) | 0) + (l >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863;
          var Pt = (s + (a = Math.imul(U, mt)) | 0) + ((8191 & (l = (l = Math.imul(U, gt)) + Math.imul(F, mt) | 0)) << 13) | 0;
          return s = ((h = Math.imul(F, gt)) + (l >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, o[0] = pt, o[1] = vt, o[2] = yt, 
          o[3] = bt, o[4] = wt, o[5] = kt, o[6] = xt, o[7] = At, o[8] = Bt, o[9] = Et, o[10] = _t, o[11] = Nt, o[12] = Lt, o[13] = St, 
          o[14] = Mt, o[15] = It, o[16] = Ct, o[17] = jt, o[18] = Pt, 0 !== s && (o[19] = s, r.length++), r;
        };
        function g(t, e, r) {
          return (new p).mulp(t, e, r);
        }
        function p(t, e) {
          this.x = t, this.y = e;
        }
        Math.imul || (m = d), o.prototype.mulTo = function(t, e) {
          var r;
          var n = this.length + t.length;
          return r = 10 === this.length && 10 === t.length ? m(this, t, e) : n < 63 ? d(this, t, e) : n < 1024 ? function(t, e, r) {
            r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
            var n = 0;
            var i = 0;
            for (var o = 0; o < r.length - 1; o++) {
              var s = i;
              i = 0;
              var a = 67108863 & n;
              var l = Math.min(o, e.length - 1);
              for (var h = Math.max(0, o - t.length + 1); h <= l; h++) {
                var u = o - h;
                var c = (0 | t.words[u]) * (0 | e.words[h]);
                var f = 67108863 & c;
                a = 67108863 & (f = f + a | 0), i += (s = (s = s + (c / 67108864 | 0) | 0) + (f >>> 26) | 0) >>> 26, s &= 67108863;
              }
              r.words[o] = a, n = s, s = i;
            }
            return 0 !== n ? r.words[o] = n : r.length--, r.strip();
          }(this, t, e) : g(this, t, e), r;
        }, p.prototype.makeRBT = function(t) {
          var e = new Array(t);
          var r = o.prototype._countBits(t) - 1;
          for (var n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
          return e;
        }, p.prototype.revBin = function(t, e, r) {
          if (0 === t || t === r - 1) return t;
          var n = 0;
          for (var i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
          return n;
        }, p.prototype.permute = function(t, e, r, n, i, o) {
          for (var s = 0; s < o; s++) n[s] = e[t[s]], i[s] = r[t[s]];
        }, p.prototype.transform = function(t, e, r, n, i, o) {
          this.permute(o, t, e, r, n, i);
          for (var s = 1; s < i; s <<= 1) {
            var a = s << 1;
            var l = Math.cos(2 * Math.PI / a);
            var h = Math.sin(2 * Math.PI / a);
            for (var u = 0; u < i; u += a) {
              var c = l;
              var f = h;
              for (var d = 0; d < s; d++) {
                var m = r[u + d];
                var g = n[u + d];
                var p = r[u + d + s];
                var v = n[u + d + s];
                var y = c * p - f * v;
                v = c * v + f * p, p = y, r[u + d] = m + p, n[u + d] = g + v, r[u + d + s] = m - p, n[u + d + s] = g - v, d !== a && (y = l * c - h * f, 
                f = l * f + h * c, c = y);
              }
            }
          }
        }, p.prototype.guessLen13b = function(t, e) {
          var r = 1 | Math.max(e, t);
          var n = 1 & r;
          var i = 0;
          for (r = r / 2 | 0; r; r >>>= 1) i++;
          return 1 << i + 1 + n;
        }, p.prototype.conjugate = function(t, e, r) {
          if (!(r <= 1)) for (var n = 0; n < r / 2; n++) {
            var i = t[n];
            t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i;
          }
        }, p.prototype.normalize13b = function(t, e) {
          var r = 0;
          for (var n = 0; n < e / 2; n++) {
            var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
            t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0;
          }
          return t;
        }, p.prototype.convert13b = function(t, e, r, i) {
          var o = 0;
          for (var s = 0; s < e; s++) o += 0 | t[s], r[2 * s] = 8191 & o, o >>>= 13, r[2 * s + 1] = 8191 & o, o >>>= 13;
          for (s = 2 * e; s < i; ++s) r[s] = 0;
          n(0 === o), n(0 == (-8192 & o));
        }, p.prototype.stub = function(t) {
          var e = new Array(t);
          for (var r = 0; r < t; r++) e[r] = 0;
          return e;
        }, p.prototype.mulp = function(t, e, r) {
          var n = 2 * this.guessLen13b(t.length, e.length);
          var i = this.makeRBT(n);
          var o = this.stub(n);
          var s = new Array(n);
          var a = new Array(n);
          var l = new Array(n);
          var h = new Array(n);
          var u = new Array(n);
          var c = new Array(n);
          var f = r.words;
          f.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(e.words, e.length, h, n), this.transform(s, o, a, l, n, i), 
          this.transform(h, o, u, c, n, i);
          for (var d = 0; d < n; d++) {
            var m = a[d] * u[d] - l[d] * c[d];
            l[d] = a[d] * c[d] + l[d] * u[d], a[d] = m;
          }
          return this.conjugate(a, l, n), this.transform(a, l, f, o, n, i), this.conjugate(f, o, n), this.normalize13b(f, n), r.negative = t.negative ^ e.negative, 
          r.length = t.length + e.length, r.strip();
        }, o.prototype.mul = function(t) {
          var e = new o(null);
          return e.words = new Array(this.length + t.length), this.mulTo(t, e);
        }, o.prototype.mulf = function(t) {
          var e = new o(null);
          return e.words = new Array(this.length + t.length), g(this, t, e);
        }, o.prototype.imul = function(t) {
          return this.clone().mulTo(t, this);
        }, o.prototype.imuln = function(t) {
          n('number' == typeof t), n(t < 67108864);
          var e = 0;
          for (var r = 0; r < this.length; r++) {
            var i = (0 | this.words[r]) * t;
            var o = (67108863 & i) + (67108863 & e);
            e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[r] = 67108863 & o;
          }
          return 0 !== e && (this.words[r] = e, this.length++), this;
        }, o.prototype.muln = function(t) {
          return this.clone().imuln(t);
        }, o.prototype.sqr = function() {
          return this.mul(this);
        }, o.prototype.isqr = function() {
          return this.imul(this.clone());
        }, o.prototype.pow = function(t) {
          var e = function(t) {
            var e = new Array(t.bitLength());
            for (var r = 0; r < e.length; r++) {
              var n = r / 26 | 0;
              var i = r % 26;
              e[r] = (t.words[n] & 1 << i) >>> i;
            }
            return e;
          }(t);
          if (0 === e.length) return new o(1);
          var r = this;
          for (var n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr()) ;
          if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
          return r;
        }, o.prototype.iushln = function(t) {
          n('number' == typeof t && t >= 0);
          var e = t % 26;
          var r = (t - e) / 26;
          var i = 67108863 >>> 26 - e << 26 - e;
          var o;
          if (0 !== e) {
            var s = 0;
            for (o = 0; o < this.length; o++) {
              var a = this.words[o] & i;
              var l = (0 | this.words[o]) - a << e;
              this.words[o] = l | s, s = a >>> 26 - e;
            }
            s && (this.words[o] = s, this.length++);
          }
          if (0 !== r) {
            for (o = this.length - 1; o >= 0; o--) this.words[o + r] = this.words[o];
            for (o = 0; o < r; o++) this.words[o] = 0;
            this.length += r;
          }
          return this.strip();
        }, o.prototype.ishln = function(t) {
          return n(0 === this.negative), this.iushln(t);
        }, o.prototype.iushrn = function(t, e, r) {
          var i;
          n('number' == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
          var o = t % 26;
          var s = Math.min((t - o) / 26, this.length);
          var a = 67108863 ^ 67108863 >>> o << o;
          var l = r;
          if (i -= s, i = Math.max(0, i), l) {
            for (var h = 0; h < s; h++) l.words[h] = this.words[h];
            l.length = s;
          }
          if (0 === s) ; else if (this.length > s) for (this.length -= s, h = 0; h < this.length; h++) this.words[h] = this.words[h + s]; else this.words[0] = 0, 
          this.length = 1;
          var u = 0;
          for (h = this.length - 1; h >= 0 && (0 !== u || h >= i); h--) {
            var c = 0 | this.words[h];
            this.words[h] = u << 26 - o | c >>> o, u = c & a;
          }
          return l && 0 !== u && (l.words[l.length++] = u), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
        }, o.prototype.ishrn = function(t, e, r) {
          return n(0 === this.negative), this.iushrn(t, e, r);
        }, o.prototype.shln = function(t) {
          return this.clone().ishln(t);
        }, o.prototype.ushln = function(t) {
          return this.clone().iushln(t);
        }, o.prototype.shrn = function(t) {
          return this.clone().ishrn(t);
        }, o.prototype.ushrn = function(t) {
          return this.clone().iushrn(t);
        }, o.prototype.testn = function(t) {
          n('number' == typeof t && t >= 0);
          var e = t % 26;
          var r = (t - e) / 26;
          var i = 1 << e;
          return !(this.length <= r) && !!(this.words[r] & i);
        }, o.prototype.imaskn = function(t) {
          n('number' == typeof t && t >= 0);
          var e = t % 26;
          var r = (t - e) / 26;
          if (n(0 === this.negative, 'imaskn works only with positive numbers'), this.length <= r) return this;
          if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
            var i = 67108863 ^ 67108863 >>> e << e;
            this.words[this.length - 1] &= i;
          }
          return this.strip();
        }, o.prototype.maskn = function(t) {
          return this.clone().imaskn(t);
        }, o.prototype.iaddn = function(t) {
          return n('number' == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), 
          this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
        }, o.prototype._iaddn = function(t) {
          this.words[0] += t;
          for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
          return this.length = Math.max(this.length, e + 1), this;
        }, o.prototype.isubn = function(t) {
          if (n('number' == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
          if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
          if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1; else for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, 
          this.words[e + 1] -= 1;
          return this.strip();
        }, o.prototype.addn = function(t) {
          return this.clone().iaddn(t);
        }, o.prototype.subn = function(t) {
          return this.clone().isubn(t);
        }, o.prototype.iabs = function() {
          return this.negative = 0, this;
        }, o.prototype.abs = function() {
          return this.clone().iabs();
        }, o.prototype._ishlnsubmul = function(t, e, r) {
          var i = t.length + r;
          var o;
          var s;
          this._expand(i);
          var a = 0;
          for (o = 0; o < t.length; o++) {
            s = (0 | this.words[o + r]) + a;
            var l = (0 | t.words[o]) * e;
            a = ((s -= 67108863 & l) >> 26) - (l / 67108864 | 0), this.words[o + r] = 67108863 & s;
          }
          for (;o < this.length - r; o++) a = (s = (0 | this.words[o + r]) + a) >> 26, this.words[o + r] = 67108863 & s;
          if (0 === a) return this.strip();
          for (n(-1 === a), a = 0, o = 0; o < this.length; o++) a = (s = -(0 | this.words[o]) + a) >> 26, this.words[o] = 67108863 & s;
          return this.negative = 1, this.strip();
        }, o.prototype._wordDiv = function(t, e) {
          var r = (this.length, t.length);
          var n = this.clone();
          var i = t;
          var s = 0 | i.words[i.length - 1];
          0 !== (r = 26 - this._countBits(s)) && (i = i.ushln(r), n.iushln(r), s = 0 | i.words[i.length - 1]);
          var a = n.length - i.length;
          var l;
          if ('mod' !== e) {
            (l = new o(null)).length = a + 1, l.words = new Array(l.length);
            for (var h = 0; h < l.length; h++) l.words[h] = 0;
          }
          var u = n.clone()._ishlnsubmul(i, 1, a);
          0 === u.negative && (n = u, l && (l.words[a] = 1));
          for (var c = a - 1; c >= 0; c--) {
            var f = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
            for (f = Math.min(f / s | 0, 67108863), n._ishlnsubmul(i, f, c); 0 !== n.negative; ) f--, n.negative = 0, n._ishlnsubmul(i, 1, c), 
            n.isZero() || (n.negative ^= 1);
            l && (l.words[c] = f);
          }
          return l && l.strip(), n.strip(), 'div' !== e && 0 !== r && n.iushrn(r), {
            div: l || null,
            mod: n
          };
        }, o.prototype.divmod = function(t, e, r) {
          return n(!t.isZero()), this.isZero() ? {
            div: new o(0),
            mod: new o(0)
          } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), 'mod' !== e && (i = a.div.neg()), 'div' !== e && (s = a.mod.neg(), 
          r && 0 !== s.negative && s.iadd(t)), {
            div: i,
            mod: s
          }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), 'mod' !== e && (i = a.div.neg()), {
            div: i,
            mod: a.mod
          }) : 0 != (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), e), 'div' !== e && (s = a.mod.neg(), r && 0 !== s.negative && s.isub(t)), 
          {
            div: a.div,
            mod: s
          }) : t.length > this.length || this.cmp(t) < 0 ? {
            div: new o(0),
            mod: this
          } : 1 === t.length ? 'div' === e ? {
            div: this.divn(t.words[0]),
            mod: null
          } : 'mod' === e ? {
            div: null,
            mod: new o(this.modn(t.words[0]))
          } : {
            div: this.divn(t.words[0]),
            mod: new o(this.modn(t.words[0]))
          } : this._wordDiv(t, e);
          var i, s, a;
        }, o.prototype.div = function(t) {
          return this.divmod(t, 'div', !1).div;
        }, o.prototype.mod = function(t) {
          return this.divmod(t, 'mod', !1).mod;
        }, o.prototype.umod = function(t) {
          return this.divmod(t, 'mod', !0).mod;
        }, o.prototype.divRound = function(t) {
          var e = this.divmod(t);
          if (e.mod.isZero()) return e.div;
          var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod;
          var n = t.ushrn(1);
          var i = t.andln(1);
          var o = r.cmp(n);
          return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
        }, o.prototype.modn = function(t) {
          n(t <= 67108863);
          var e = (1 << 26) % t;
          var r = 0;
          for (var i = this.length - 1; i >= 0; i--) r = (e * r + (0 | this.words[i])) % t;
          return r;
        }, o.prototype.idivn = function(t) {
          n(t <= 67108863);
          var e = 0;
          for (var r = this.length - 1; r >= 0; r--) {
            var i = (0 | this.words[r]) + 67108864 * e;
            this.words[r] = i / t | 0, e = i % t;
          }
          return this.strip();
        }, o.prototype.divn = function(t) {
          return this.clone().idivn(t);
        }, o.prototype.egcd = function(t) {
          n(0 === t.negative), n(!t.isZero());
          var e = this;
          var r = t.clone();
          e = 0 !== e.negative ? e.umod(t) : e.clone();
          var i = new o(1);
          var s = new o(0);
          var a = new o(0);
          var l = new o(1);
          var h = 0;
          for (;e.isEven() && r.isEven(); ) e.iushrn(1), r.iushrn(1), ++h;
          var u = r.clone();
          var c = e.clone();
          for (;!e.isZero(); ) {
            for (var f = 0, d = 1; 0 == (e.words[0] & d) && f < 26; ++f, d <<= 1) ;
            if (f > 0) for (e.iushrn(f); f-- > 0; ) (i.isOdd() || s.isOdd()) && (i.iadd(u), s.isub(c)), i.iushrn(1), s.iushrn(1);
            for (var m = 0, g = 1; 0 == (r.words[0] & g) && m < 26; ++m, g <<= 1) ;
            if (m > 0) for (r.iushrn(m); m-- > 0; ) (a.isOdd() || l.isOdd()) && (a.iadd(u), l.isub(c)), a.iushrn(1), l.iushrn(1);
            e.cmp(r) >= 0 ? (e.isub(r), i.isub(a), s.isub(l)) : (r.isub(e), a.isub(i), l.isub(s));
          }
          return {
            a: a,
            b: l,
            gcd: r.iushln(h)
          };
        }, o.prototype._invmp = function(t) {
          n(0 === t.negative), n(!t.isZero());
          var e = this;
          var r = t.clone();
          e = 0 !== e.negative ? e.umod(t) : e.clone();
          var i = new o(1);
          var s = new o(0);
          var a = r.clone();
          for (;e.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
            for (var l = 0, h = 1; 0 == (e.words[0] & h) && l < 26; ++l, h <<= 1) ;
            if (l > 0) for (e.iushrn(l); l-- > 0; ) i.isOdd() && i.iadd(a), i.iushrn(1);
            for (var u = 0, c = 1; 0 == (r.words[0] & c) && u < 26; ++u, c <<= 1) ;
            if (u > 0) for (r.iushrn(u); u-- > 0; ) s.isOdd() && s.iadd(a), s.iushrn(1);
            e.cmp(r) >= 0 ? (e.isub(r), i.isub(s)) : (r.isub(e), s.isub(i));
          }
          var f;
          return (f = 0 === e.cmpn(1) ? i : s).cmpn(0) < 0 && f.iadd(t), f;
        }, o.prototype.gcd = function(t) {
          if (this.isZero()) return t.abs();
          if (t.isZero()) return this.abs();
          var e = this.clone();
          var r = t.clone();
          e.negative = 0, r.negative = 0;
          for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
          for (;;) {
            for (;e.isEven(); ) e.iushrn(1);
            for (;r.isEven(); ) r.iushrn(1);
            var i = e.cmp(r);
            if (i < 0) {
              var o = e;
              e = r, r = o;
            } else if (0 === i || 0 === r.cmpn(1)) break;
            e.isub(r);
          }
          return r.iushln(n);
        }, o.prototype.invm = function(t) {
          return this.egcd(t).a.umod(t);
        }, o.prototype.isEven = function() {
          return 0 == (1 & this.words[0]);
        }, o.prototype.isOdd = function() {
          return 1 == (1 & this.words[0]);
        }, o.prototype.andln = function(t) {
          return this.words[0] & t;
        }, o.prototype.bincn = function(t) {
          n('number' == typeof t);
          var e = t % 26;
          var r = (t - e) / 26;
          var i = 1 << e;
          if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
          var o = i;
          for (var s = r; 0 !== o && s < this.length; s++) {
            var a = 0 | this.words[s];
            o = (a += o) >>> 26, a &= 67108863, this.words[s] = a;
          }
          return 0 !== o && (this.words[s] = o, this.length++), this;
        }, o.prototype.isZero = function() {
          return 1 === this.length && 0 === this.words[0];
        }, o.prototype.cmpn = function(t) {
          var e = t < 0;
          if (0 !== this.negative && !e) return -1;
          if (0 === this.negative && e) return 1;
          var r;
          if (this.strip(), this.length > 1) r = 1; else {
            e && (t = -t), n(t <= 67108863, 'Number is too big');
            var i = 0 | this.words[0];
            r = i === t ? 0 : i < t ? -1 : 1;
          }
          return 0 !== this.negative ? 0 | -r : r;
        }, o.prototype.cmp = function(t) {
          if (0 !== this.negative && 0 === t.negative) return -1;
          if (0 === this.negative && 0 !== t.negative) return 1;
          var e = this.ucmp(t);
          return 0 !== this.negative ? 0 | -e : e;
        }, o.prototype.ucmp = function(t) {
          if (this.length > t.length) return 1;
          if (this.length < t.length) return -1;
          var e = 0;
          for (var r = this.length - 1; r >= 0; r--) {
            var n = 0 | this.words[r];
            var i = 0 | t.words[r];
            if (n !== i) {
              n < i ? e = -1 : n > i && (e = 1);
              break;
            }
          }
          return e;
        }, o.prototype.gtn = function(t) {
          return 1 === this.cmpn(t);
        }, o.prototype.gt = function(t) {
          return 1 === this.cmp(t);
        }, o.prototype.gten = function(t) {
          return this.cmpn(t) >= 0;
        }, o.prototype.gte = function(t) {
          return this.cmp(t) >= 0;
        }, o.prototype.ltn = function(t) {
          return -1 === this.cmpn(t);
        }, o.prototype.lt = function(t) {
          return -1 === this.cmp(t);
        }, o.prototype.lten = function(t) {
          return this.cmpn(t) <= 0;
        }, o.prototype.lte = function(t) {
          return this.cmp(t) <= 0;
        }, o.prototype.eqn = function(t) {
          return 0 === this.cmpn(t);
        }, o.prototype.eq = function(t) {
          return 0 === this.cmp(t);
        }, o.red = function(t) {
          return new A(t);
        }, o.prototype.toRed = function(t) {
          return n(!this.red, 'Already a number in reduction context'), n(0 === this.negative, 'red works only with positives'), t.convertTo(this)._forceRed(t);
        }, o.prototype.fromRed = function() {
          return n(this.red, 'fromRed works only with numbers in reduction context'), this.red.convertFrom(this);
        }, o.prototype._forceRed = function(t) {
          return this.red = t, this;
        }, o.prototype.forceRed = function(t) {
          return n(!this.red, 'Already a number in reduction context'), this._forceRed(t);
        }, o.prototype.redAdd = function(t) {
          return n(this.red, 'redAdd works only with red numbers'), this.red.add(this, t);
        }, o.prototype.redIAdd = function(t) {
          return n(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, t);
        }, o.prototype.redSub = function(t) {
          return n(this.red, 'redSub works only with red numbers'), this.red.sub(this, t);
        }, o.prototype.redISub = function(t) {
          return n(this.red, 'redISub works only with red numbers'), this.red.isub(this, t);
        }, o.prototype.redShl = function(t) {
          return n(this.red, 'redShl works only with red numbers'), this.red.shl(this, t);
        }, o.prototype.redMul = function(t) {
          return n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.mul(this, t);
        }, o.prototype.redIMul = function(t) {
          return n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.imul(this, t);
        }, o.prototype.redSqr = function() {
          return n(this.red, 'redSqr works only with red numbers'), this.red._verify1(this), this.red.sqr(this);
        }, o.prototype.redISqr = function() {
          return n(this.red, 'redISqr works only with red numbers'), this.red._verify1(this), this.red.isqr(this);
        }, o.prototype.redSqrt = function() {
          return n(this.red, 'redSqrt works only with red numbers'), this.red._verify1(this), this.red.sqrt(this);
        }, o.prototype.redInvm = function() {
          return n(this.red, 'redInvm works only with red numbers'), this.red._verify1(this), this.red.invm(this);
        }, o.prototype.redNeg = function() {
          return n(this.red, 'redNeg works only with red numbers'), this.red._verify1(this), this.red.neg(this);
        }, o.prototype.redPow = function(t) {
          return n(this.red && !t.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, t);
        };
        var v = {
          k256: null,
          p224: null,
          p192: null,
          p25519: null
        };
        function y(t, e) {
          this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
        }
        function b() {
          y.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
        }
        function w() {
          y.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
        }
        function k() {
          y.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
        }
        function x() {
          y.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
        }
        function A(t) {
          if ('string' == typeof t) {
            var e = o._prime(t);
            this.m = e.p, this.prime = e;
          } else n(t.gtn(1), 'modulus must be greater than 1'), this.m = t, this.prime = null;
        }
        function B(t) {
          A.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), 
          this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), 
          this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
        }
        y.prototype._tmp = function() {
          var t = new o(null);
          return t.words = new Array(Math.ceil(this.n / 13)), t;
        }, y.prototype.ireduce = function(t) {
          var e = t;
          var r;
          do {
            this.split(e, this.tmp), r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength();
          } while (r > this.n);
          var n = r < this.n ? -1 : e.ucmp(this.p);
          return 0 === n ? (e.words[0] = 0, e.length = 1) : n > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), 
          e;
        }, y.prototype.split = function(t, e) {
          t.iushrn(this.n, 0, e);
        }, y.prototype.imulK = function(t) {
          return t.imul(this.k);
        }, i(b, y), b.prototype.split = function(t, e) {
          var r = 4194303;
          var n = Math.min(t.length, 9);
          for (var i = 0; i < n; i++) e.words[i] = t.words[i];
          if (e.length = n, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
          var o = t.words[9];
          for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
            var s = 0 | t.words[i];
            t.words[i - 10] = (s & r) << 4 | o >>> 22, o = s;
          }
          o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9;
        }, b.prototype.imulK = function(t) {
          t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
          var e = 0;
          for (var r = 0; r < t.length; r++) {
            var n = 0 | t.words[r];
            e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0);
          }
          return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
        }, i(w, y), i(k, y), i(x, y), x.prototype.imulK = function(t) {
          var e = 0;
          for (var r = 0; r < t.length; r++) {
            var n = 19 * (0 | t.words[r]) + e;
            var i = 67108863 & n;
            n >>>= 26, t.words[r] = i, e = n;
          }
          return 0 !== e && (t.words[t.length++] = e), t;
        }, o._prime = function(t) {
          if (v[t]) return v[t];
          var e;
          if ('k256' === t) e = new b; else if ('p224' === t) e = new w; else if ('p192' === t) e = new k; else {
            if ('p25519' !== t) throw new Error('Unknown prime ' + t);
            e = new x;
          }
          return v[t] = e, e;
        }, A.prototype._verify1 = function(t) {
          n(0 === t.negative, 'red works only with positives'), n(t.red, 'red works only with red numbers');
        }, A.prototype._verify2 = function(t, e) {
          n(0 == (t.negative | e.negative), 'red works only with positives'), n(t.red && t.red === e.red, 'red works only with red numbers');
        }, A.prototype.imod = function(t) {
          return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
        }, A.prototype.neg = function(t) {
          return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
        }, A.prototype.add = function(t, e) {
          this._verify2(t, e);
          var r = t.add(e);
          return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
        }, A.prototype.iadd = function(t, e) {
          this._verify2(t, e);
          var r = t.iadd(e);
          return r.cmp(this.m) >= 0 && r.isub(this.m), r;
        }, A.prototype.sub = function(t, e) {
          this._verify2(t, e);
          var r = t.sub(e);
          return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
        }, A.prototype.isub = function(t, e) {
          this._verify2(t, e);
          var r = t.isub(e);
          return r.cmpn(0) < 0 && r.iadd(this.m), r;
        }, A.prototype.shl = function(t, e) {
          return this._verify1(t), this.imod(t.ushln(e));
        }, A.prototype.imul = function(t, e) {
          return this._verify2(t, e), this.imod(t.imul(e));
        }, A.prototype.mul = function(t, e) {
          return this._verify2(t, e), this.imod(t.mul(e));
        }, A.prototype.isqr = function(t) {
          return this.imul(t, t.clone());
        }, A.prototype.sqr = function(t) {
          return this.mul(t, t);
        }, A.prototype.sqrt = function(t) {
          if (t.isZero()) return t.clone();
          var e = this.m.andln(3);
          if (n(e % 2 == 1), 3 === e) {
            var r = this.m.add(new o(1)).iushrn(2);
            return this.pow(t, r);
          }
          var i = this.m.subn(1);
          var s = 0;
          for (;!i.isZero() && 0 === i.andln(1); ) s++, i.iushrn(1);
          n(!i.isZero());
          var a = new o(1).toRed(this);
          var l = a.redNeg();
          var h = this.m.subn(1).iushrn(1);
          var u = this.m.bitLength();
          for (u = new o(2 * u * u).toRed(this); 0 !== this.pow(u, h).cmp(l); ) u.redIAdd(l);
          var c = this.pow(u, i);
          var f = this.pow(t, i.addn(1).iushrn(1));
          var d = this.pow(t, i);
          var m = s;
          for (;0 !== d.cmp(a); ) {
            var g = d;
            for (var p = 0; 0 !== g.cmp(a); p++) g = g.redSqr();
            n(p < m);
            var v = this.pow(c, new o(1).iushln(m - p - 1));
            f = f.redMul(v), c = v.redSqr(), d = d.redMul(c), m = p;
          }
          return f;
        }, A.prototype.invm = function(t) {
          var e = t._invmp(this.m);
          return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e);
        }, A.prototype.pow = function(t, e) {
          if (e.isZero()) return new o(1).toRed(this);
          if (0 === e.cmpn(1)) return t.clone();
          var r = new Array(16);
          r[0] = new o(1).toRed(this), r[1] = t;
          for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
          var i = r[0];
          var s = 0;
          var a = 0;
          var l = e.bitLength() % 26;
          for (0 === l && (l = 26), n = e.length - 1; n >= 0; n--) {
            var h = e.words[n];
            for (var u = l - 1; u >= 0; u--) {
              var c = h >> u & 1;
              i !== r[0] && (i = this.sqr(i)), 0 !== c || 0 !== s ? (s <<= 1, s |= c, (4 === ++a || 0 === n && 0 === u) && (i = this.mul(i, r[s]), 
              a = 0, s = 0)) : a = 0;
            }
            l = 26;
          }
          return i;
        }, A.prototype.convertTo = function(t) {
          var e = t.umod(this.m);
          return e === t ? e.clone() : e;
        }, A.prototype.convertFrom = function(t) {
          var e = t.clone();
          return e.red = null, e;
        }, o.mont = function(t) {
          return new B(t);
        }, i(B, A), B.prototype.convertTo = function(t) {
          return this.imod(t.ushln(this.shift));
        }, B.prototype.convertFrom = function(t) {
          var e = this.imod(t.mul(this.rinv));
          return e.red = null, e;
        }, B.prototype.imul = function(t, e) {
          if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
          var r = t.imul(e);
          var n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
          var i = r.isub(n).iushrn(this.shift);
          var o = i;
          return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
        }, B.prototype.mul = function(t, e) {
          if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
          var r = t.mul(e);
          var n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
          var i = r.isub(n).iushrn(this.shift);
          var s = i;
          return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this);
        }, B.prototype.invm = function(t) {
          return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
        };
      }(t = r.nmd(t), this);
    },
    "./node_modules/buffer/index.js": (t, e, r) => {
      "use strict";
      const n = r("./node_modules/base64-js/index.js");
      const i = r("./node_modules/ieee754/index.js");
      const o = 'function' == typeof Symbol && 'function' == typeof Symbol.for ? Symbol.for('nodejs.util.inspect.custom') : null;
      e.Buffer = l, e.SlowBuffer = function(t) {
        +t != t && (t = 0);
        return l.alloc(+t);
      }, e.INSPECT_MAX_BYTES = 50;
      const s = 2147483647;
      function a(t) {
        if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
        const e = new Uint8Array(t);
        return Object.setPrototypeOf(e, l.prototype), e;
      }
      function l(t, e, r) {
        if ('number' == typeof t) {
          if ('string' == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
          return c(t);
        }
        return h(t, e, r);
      }
      function h(t, e, r) {
        if ('string' == typeof t) return function(t, e) {
          'string' == typeof e && '' !== e || (e = 'utf8');
          if (!l.isEncoding(e)) throw new TypeError('Unknown encoding: ' + e);
          const r = 0 | g(t, e);
          let n = a(r);
          const i = n.write(t, e);
          i !== r && (n = n.slice(0, i));
          return n;
        }(t, e);
        if (ArrayBuffer.isView(t)) return function(t) {
          if (J(t, Uint8Array)) {
            const e = new Uint8Array(t);
            return d(e.buffer, e.byteOffset, e.byteLength);
          }
          return f(t);
        }(t);
        if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
        if (J(t, ArrayBuffer) || t && J(t.buffer, ArrayBuffer)) return d(t, e, r);
        if ('undefined' != typeof SharedArrayBuffer && (J(t, SharedArrayBuffer) || t && J(t.buffer, SharedArrayBuffer))) return d(t, e, r);
        if ('number' == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
        const n = t.valueOf && t.valueOf();
        if (null != n && n !== t) return l.from(n, e, r);
        const i = function(t) {
          if (l.isBuffer(t)) {
            const e = 0 | m(t.length);
            const r = a(e);
            return 0 === r.length || t.copy(r, 0, 0, e), r;
          }
          if (void 0 !== t.length) return 'number' != typeof t.length || K(t.length) ? a(0) : f(t);
          if ('Buffer' === t.type && Array.isArray(t.data)) return f(t.data);
        }(t);
        if (i) return i;
        if ('undefined' != typeof Symbol && null != Symbol.toPrimitive && 'function' == typeof t[Symbol.toPrimitive]) return l.from(t[Symbol.toPrimitive]('string'), e, r);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
      }
      function u(t) {
        if ('number' != typeof t) throw new TypeError('"size" argument must be of type number');
        if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
      }
      function c(t) {
        return u(t), a(t < 0 ? 0 : 0 | m(t));
      }
      function f(t) {
        const e = t.length < 0 ? 0 : 0 | m(t.length);
        const r = a(e);
        for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
        return r;
      }
      function d(t, e, r) {
        if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), 
        Object.setPrototypeOf(n, l.prototype), n;
      }
      function m(t) {
        if (t >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + ' bytes');
        return 0 | t;
      }
      function g(t, e) {
        if (l.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || J(t, ArrayBuffer)) return t.byteLength;
        if ('string' != typeof t) throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof t);
        const r = t.length;
        const n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let i = !1;
        for (;;) switch (e) {
         case 'ascii':
         case 'latin1':
         case 'binary':
          return r;

         case 'utf8':
         case 'utf-8':
          return V(t).length;

         case 'ucs2':
         case 'ucs-2':
         case 'utf16le':
         case 'utf-16le':
          return 2 * r;

         case 'hex':
          return r >>> 1;

         case 'base64':
          return $(t).length;

         default:
          if (i) return n ? -1 : V(t).length;
          e = ('' + e).toLowerCase(), i = !0;
        }
      }
      function p(t, e, r) {
        let n = !1;
        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return '';
        if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return '';
        if ((r >>>= 0) <= (e >>>= 0)) return '';
        for (t || (t = 'utf8'); ;) switch (t) {
         case 'hex':
          return M(this, e, r);

         case 'utf8':
         case 'utf-8':
          return _(this, e, r);

         case 'ascii':
          return L(this, e, r);

         case 'latin1':
         case 'binary':
          return S(this, e, r);

         case 'base64':
          return E(this, e, r);

         case 'ucs2':
         case 'ucs-2':
         case 'utf16le':
         case 'utf-16le':
          return I(this, e, r);

         default:
          if (n) throw new TypeError('Unknown encoding: ' + t);
          t = (t + '').toLowerCase(), n = !0;
        }
      }
      function v(t, e, r) {
        const n = t[e];
        t[e] = t[r], t[r] = n;
      }
      function y(t, e, r, n, i) {
        if (0 === t.length) return -1;
        if ('string' == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), K(r = +r) && (r = i ? 0 : t.length - 1), 
        r < 0 && (r = t.length + r), r >= t.length) {
          if (i) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if ('string' == typeof e && (e = l.from(e, n)), l.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, r, n, i);
        if ('number' == typeof e) return e &= 255, 'function' == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : b(t, [ e ], r, n, i);
        throw new TypeError('val must be string, number or Buffer');
      }
      function b(t, e, r, n, i) {
        let o = 1;
        let s = t.length;
        let a = e.length;
        if (void 0 !== n && ('ucs2' === (n = String(n).toLowerCase()) || 'ucs-2' === n || 'utf16le' === n || 'utf-16le' === n)) {
          if (t.length < 2 || e.length < 2) return -1;
          o = 2, s /= 2, a /= 2, r /= 2;
        }
        function l(t, e) {
          return 1 === o ? t[e] : t.readUInt16BE(e * o);
        }
        let h;
        if (i) {
          let n = -1;
          for (h = r; h < s; h++) if (l(t, h) === l(e, -1 === n ? 0 : h - n)) {
            if (-1 === n && (n = h), h - n + 1 === a) return n * o;
          } else -1 !== n && (h -= h - n), n = -1;
        } else for (r + a > s && (r = s - a), h = r; h >= 0; h--) {
          let r = !0;
          for (let n = 0; n < a; n++) if (l(t, h + n) !== l(e, n)) {
            r = !1;
            break;
          }
          if (r) return h;
        }
        return -1;
      }
      function w(t, e, r, n) {
        r = Number(r) || 0;
        const i = t.length - r;
        n ? (n = Number(n)) > i && (n = i) : n = i;
        const o = e.length;
        let s;
        for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
          const n = parseInt(e.substr(2 * s, 2), 16);
          if (K(n)) return s;
          t[r + s] = n;
        }
        return s;
      }
      function k(t, e, r, n) {
        return W(V(e, t.length - r), t, r, n);
      }
      function x(t, e, r, n) {
        return W(function(t) {
          const e = [];
          for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
          return e;
        }(e), t, r, n);
      }
      function A(t, e, r, n) {
        return W($(e), t, r, n);
      }
      function B(t, e, r, n) {
        return W(function(t, e) {
          let r, n, i;
          const o = [];
          for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
          return o;
        }(e, t.length - r), t, r, n);
      }
      function E(t, e, r) {
        return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
      }
      function _(t, e, r) {
        r = Math.min(t.length, r);
        const n = [];
        let i = e;
        for (;i < r; ) {
          const e = t[i];
          let o = null;
          let s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
          if (i + s <= r) {
            let r, n, a, l;
            switch (s) {
             case 1:
              e < 128 && (o = e);
              break;

             case 2:
              r = t[i + 1], 128 == (192 & r) && (l = (31 & e) << 6 | 63 & r, l > 127 && (o = l));
              break;

             case 3:
              r = t[i + 1], n = t[i + 2], 128 == (192 & r) && 128 == (192 & n) && (l = (15 & e) << 12 | (63 & r) << 6 | 63 & n, l > 2047 && (l < 55296 || l > 57343) && (o = l));
              break;

             case 4:
              r = t[i + 1], n = t[i + 2], a = t[i + 3], 128 == (192 & r) && 128 == (192 & n) && 128 == (192 & a) && (l = (15 & e) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a, 
              l > 65535 && l < 1114112 && (o = l));
            }
          }
          null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), n.push(o), 
          i += s;
        }
        return function(t) {
          const e = t.length;
          if (e <= N) return String.fromCharCode.apply(String, t);
          let r = '';
          let n = 0;
          for (;n < e; ) r += String.fromCharCode.apply(String, t.slice(n, n += N));
          return r;
        }(n);
      }
      e.kMaxLength = s, l.TYPED_ARRAY_SUPPORT = function() {
        try {
          const t = new Uint8Array(1);
          const e = {
            foo: function() {
              return 42;
            }
          };
          return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo();
        } catch (t) {
          return !1;
        }
      }(), l.TYPED_ARRAY_SUPPORT || 'undefined' == typeof console || 'function' != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), 
      Object.defineProperty(l.prototype, 'parent', {
        enumerable: !0,
        get: function() {
          if (l.isBuffer(this)) return this.buffer;
        }
      }), Object.defineProperty(l.prototype, 'offset', {
        enumerable: !0,
        get: function() {
          if (l.isBuffer(this)) return this.byteOffset;
        }
      }), l.poolSize = 8192, l.from = function(t, e, r) {
        return h(t, e, r);
      }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array), l.alloc = function(t, e, r) {
        return function(t, e, r) {
          return u(t), t <= 0 ? a(t) : void 0 !== e ? 'string' == typeof r ? a(t).fill(e, r) : a(t).fill(e) : a(t);
        }(t, e, r);
      }, l.allocUnsafe = function(t) {
        return c(t);
      }, l.allocUnsafeSlow = function(t) {
        return c(t);
      }, l.isBuffer = function(t) {
        return null != t && !0 === t._isBuffer && t !== l.prototype;
      }, l.compare = function(t, e) {
        if (J(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), J(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), 
        !l.isBuffer(t) || !l.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (t === e) return 0;
        let r = t.length;
        let n = e.length;
        for (let i = 0, o = Math.min(r, n); i < o; ++i) if (t[i] !== e[i]) {
          r = t[i], n = e[i];
          break;
        }
        return r < n ? -1 : n < r ? 1 : 0;
      }, l.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
         case 'hex':
         case 'utf8':
         case 'utf-8':
         case 'ascii':
         case 'latin1':
         case 'binary':
         case 'base64':
         case 'ucs2':
         case 'ucs-2':
         case 'utf16le':
         case 'utf-16le':
          return !0;

         default:
          return !1;
        }
      }, l.concat = function(t, e) {
        if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === t.length) return l.alloc(0);
        let r;
        if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
        const n = l.allocUnsafe(e);
        let i = 0;
        for (r = 0; r < t.length; ++r) {
          let e = t[r];
          if (J(e, Uint8Array)) i + e.length > n.length ? (l.isBuffer(e) || (e = l.from(e)), e.copy(n, i)) : Uint8Array.prototype.set.call(n, e, i); else {
            if (!l.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            e.copy(n, i);
          }
          i += e.length;
        }
        return n;
      }, l.byteLength = g, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
        const t = this.length;
        if (t % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
        for (let e = 0; e < t; e += 2) v(this, e, e + 1);
        return this;
      }, l.prototype.swap32 = function() {
        const t = this.length;
        if (t % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
        for (let e = 0; e < t; e += 4) v(this, e, e + 3), v(this, e + 1, e + 2);
        return this;
      }, l.prototype.swap64 = function() {
        const t = this.length;
        if (t % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
        for (let e = 0; e < t; e += 8) v(this, e, e + 7), v(this, e + 1, e + 6), v(this, e + 2, e + 5), v(this, e + 3, e + 4);
        return this;
      }, l.prototype.toString = function() {
        const t = this.length;
        return 0 === t ? '' : 0 === arguments.length ? _(this, 0, t) : p.apply(this, arguments);
      }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(t) {
        if (!l.isBuffer(t)) throw new TypeError('Argument must be a Buffer');
        return this === t || 0 === l.compare(this, t);
      }, l.prototype.inspect = function() {
        let t = '';
        const r = e.INSPECT_MAX_BYTES;
        return t = this.toString('hex', 0, r).replace(/(.{2})/g, '$1 ').trim(), this.length > r && (t += ' ... '), '<Buffer ' + t + '>';
      }, o && (l.prototype[o] = l.prototype.inspect), l.prototype.compare = function(t, e, r, n, i) {
        if (J(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), !l.isBuffer(t)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof t);
        if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), 
        e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError('out of range index');
        if (n >= i && e >= r) return 0;
        if (n >= i) return -1;
        if (e >= r) return 1;
        if (this === t) return 0;
        let o = (i >>>= 0) - (n >>>= 0);
        let s = (r >>>= 0) - (e >>>= 0);
        const a = Math.min(o, s);
        const h = this.slice(n, i);
        const u = t.slice(e, r);
        for (let l = 0; l < a; ++l) if (h[l] !== u[l]) {
          o = h[l], s = u[l];
          break;
        }
        return o < s ? -1 : s < o ? 1 : 0;
      }, l.prototype.includes = function(t, e, r) {
        return -1 !== this.indexOf(t, e, r);
      }, l.prototype.indexOf = function(t, e, r) {
        return y(this, t, e, r, !0);
      }, l.prototype.lastIndexOf = function(t, e, r) {
        return y(this, t, e, r, !1);
      }, l.prototype.write = function(t, e, r, n) {
        if (void 0 === e) n = 'utf8', r = this.length, e = 0; else if (void 0 === r && 'string' == typeof e) n = e, r = this.length, 
        e = 0; else {
          if (!isFinite(e)) throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
          e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = 'utf8')) : (n = r, r = void 0);
        }
        const i = this.length - e;
        if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError('Attempt to write outside buffer bounds');
        n || (n = 'utf8');
        let o = !1;
        for (;;) switch (n) {
         case 'hex':
          return w(this, t, e, r);

         case 'utf8':
         case 'utf-8':
          return k(this, t, e, r);

         case 'ascii':
         case 'latin1':
         case 'binary':
          return x(this, t, e, r);

         case 'base64':
          return A(this, t, e, r);

         case 'ucs2':
         case 'ucs-2':
         case 'utf16le':
         case 'utf-16le':
          return B(this, t, e, r);

         default:
          if (o) throw new TypeError('Unknown encoding: ' + n);
          n = ('' + n).toLowerCase(), o = !0;
        }
      }, l.prototype.toJSON = function() {
        return {
          type: 'Buffer',
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      const N = 4096;
      function L(t, e, r) {
        let n = '';
        r = Math.min(t.length, r);
        for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
        return n;
      }
      function S(t, e, r) {
        let n = '';
        r = Math.min(t.length, r);
        for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
        return n;
      }
      function M(t, e, r) {
        const n = t.length;
        (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
        let i = '';
        for (let o = e; o < r; ++o) i += Y[t[o]];
        return i;
      }
      function I(t, e, r) {
        const n = t.slice(e, r);
        let i = '';
        for (let o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
        return i;
      }
      function C(t, e, r) {
        if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
        if (t + e > r) throw new RangeError('Trying to access beyond buffer length');
      }
      function j(t, e, r, n, i, o) {
        if (!l.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw new RangeError('Index out of range');
      }
      function P(t, e, r, n, i) {
        z(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o;
        let s = Number(e >> BigInt(32) & BigInt(4294967295));
        return t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, r;
      }
      function T(t, e, r, n, i) {
        z(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        t[r + 7] = o, o >>= 8, t[r + 6] = o, o >>= 8, t[r + 5] = o, o >>= 8, t[r + 4] = o;
        let s = Number(e >> BigInt(32) & BigInt(4294967295));
        return t[r + 3] = s, s >>= 8, t[r + 2] = s, s >>= 8, t[r + 1] = s, s >>= 8, t[r] = s, r + 8;
      }
      function O(t, e, r, n, i, o) {
        if (r + n > t.length) throw new RangeError('Index out of range');
        if (r < 0) throw new RangeError('Index out of range');
      }
      function R(t, e, r, n, o) {
        return e = +e, r >>>= 0, o || O(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
      }
      function U(t, e, r, n, o) {
        return e = +e, r >>>= 0, o || O(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
      }
      l.prototype.slice = function(t, e) {
        const r = this.length;
        (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), 
        e < t && (e = t);
        const n = this.subarray(t, e);
        return Object.setPrototypeOf(n, l.prototype), n;
      }, l.prototype.readUintLE = l.prototype.readUIntLE = function(t, e, r) {
        t >>>= 0, e >>>= 0, r || C(t, e, this.length);
        let n = this[t];
        let i = 1;
        let o = 0;
        for (;++o < e && (i *= 256); ) n += this[t + o] * i;
        return n;
      }, l.prototype.readUintBE = l.prototype.readUIntBE = function(t, e, r) {
        t >>>= 0, e >>>= 0, r || C(t, e, this.length);
        let n = this[t + --e];
        let i = 1;
        for (;e > 0 && (i *= 256); ) n += this[t + --e] * i;
        return n;
      }, l.prototype.readUint8 = l.prototype.readUInt8 = function(t, e) {
        return t >>>= 0, e || C(t, 1, this.length), this[t];
      }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function(t, e) {
        return t >>>= 0, e || C(t, 2, this.length), this[t] | this[t + 1] << 8;
      }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function(t, e) {
        return t >>>= 0, e || C(t, 2, this.length), this[t] << 8 | this[t + 1];
      }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function(t, e) {
        return t >>>= 0, e || C(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
      }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function(t, e) {
        return t >>>= 0, e || C(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
      }, l.prototype.readBigUInt64LE = X((function(t) {
        Z(t >>>= 0, 'offset');
        const e = this[t];
        const r = this[t + 7];
        void 0 !== e && void 0 !== r || q(t, this.length - 8);
        const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24;
        const i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
        return BigInt(n) + (BigInt(i) << BigInt(32));
      })), l.prototype.readBigUInt64BE = X((function(t) {
        Z(t >>>= 0, 'offset');
        const e = this[t];
        const r = this[t + 7];
        void 0 !== e && void 0 !== r || q(t, this.length - 8);
        const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t];
        const i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
        return (BigInt(n) << BigInt(32)) + BigInt(i);
      })), l.prototype.readIntLE = function(t, e, r) {
        t >>>= 0, e >>>= 0, r || C(t, e, this.length);
        let n = this[t];
        let i = 1;
        let o = 0;
        for (;++o < e && (i *= 256); ) n += this[t + o] * i;
        return i *= 128, n >= i && (n -= Math.pow(2, 8 * e)), n;
      }, l.prototype.readIntBE = function(t, e, r) {
        t >>>= 0, e >>>= 0, r || C(t, e, this.length);
        let n = e;
        let i = 1;
        let o = this[t + --n];
        for (;n > 0 && (i *= 256); ) o += this[t + --n] * i;
        return i *= 128, o >= i && (o -= Math.pow(2, 8 * e)), o;
      }, l.prototype.readInt8 = function(t, e) {
        return t >>>= 0, e || C(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
      }, l.prototype.readInt16LE = function(t, e) {
        t >>>= 0, e || C(t, 2, this.length);
        const r = this[t] | this[t + 1] << 8;
        return 32768 & r ? 4294901760 | r : r;
      }, l.prototype.readInt16BE = function(t, e) {
        t >>>= 0, e || C(t, 2, this.length);
        const r = this[t + 1] | this[t] << 8;
        return 32768 & r ? 4294901760 | r : r;
      }, l.prototype.readInt32LE = function(t, e) {
        return t >>>= 0, e || C(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
      }, l.prototype.readInt32BE = function(t, e) {
        return t >>>= 0, e || C(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
      }, l.prototype.readBigInt64LE = X((function(t) {
        Z(t >>>= 0, 'offset');
        const e = this[t];
        const r = this[t + 7];
        void 0 !== e && void 0 !== r || q(t, this.length - 8);
        const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
        return (BigInt(n) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24);
      })), l.prototype.readBigInt64BE = X((function(t) {
        Z(t >>>= 0, 'offset');
        const e = this[t];
        const r = this[t + 7];
        void 0 !== e && void 0 !== r || q(t, this.length - 8);
        const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
        return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r);
      })), l.prototype.readFloatLE = function(t, e) {
        return t >>>= 0, e || C(t, 4, this.length), i.read(this, t, !0, 23, 4);
      }, l.prototype.readFloatBE = function(t, e) {
        return t >>>= 0, e || C(t, 4, this.length), i.read(this, t, !1, 23, 4);
      }, l.prototype.readDoubleLE = function(t, e) {
        return t >>>= 0, e || C(t, 8, this.length), i.read(this, t, !0, 52, 8);
      }, l.prototype.readDoubleBE = function(t, e) {
        return t >>>= 0, e || C(t, 8, this.length), i.read(this, t, !1, 52, 8);
      }, l.prototype.writeUintLE = l.prototype.writeUIntLE = function(t, e, r, n) {
        if (t = +t, e >>>= 0, r >>>= 0, !n) {
          j(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
        }
        let i = 1;
        let o = 0;
        for (this[e] = 255 & t; ++o < r && (i *= 256); ) this[e + o] = t / i & 255;
        return e + r;
      }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(t, e, r, n) {
        if (t = +t, e >>>= 0, r >>>= 0, !n) {
          j(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
        }
        let i = r - 1;
        let o = 1;
        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); ) this[e + i] = t / o & 255;
        return e + r;
      }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(t, e, r) {
        return t = +t, e >>>= 0, r || j(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1;
      }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(t, e, r) {
        return t = +t, e >>>= 0, r || j(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2;
      }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(t, e, r) {
        return t = +t, e >>>= 0, r || j(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2;
      }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(t, e, r) {
        return t = +t, e >>>= 0, r || j(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, 
        this[e] = 255 & t, e + 4;
      }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(t, e, r) {
        return t = +t, e >>>= 0, r || j(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, 
        this[e + 3] = 255 & t, e + 4;
      }, l.prototype.writeBigUInt64LE = X((function(t, e = 0) {
        return P(this, t, e, BigInt(0), BigInt('0xffffffffffffffff'));
      })), l.prototype.writeBigUInt64BE = X((function(t, e = 0) {
        return T(this, t, e, BigInt(0), BigInt('0xffffffffffffffff'));
      })), l.prototype.writeIntLE = function(t, e, r, n) {
        if (t = +t, e >>>= 0, !n) {
          const n = Math.pow(2, 8 * r - 1);
          j(this, t, e, r, n - 1, -n);
        }
        let i = 0;
        let o = 1;
        let s = 0;
        for (this[e] = 255 & t; ++i < r && (o *= 256); ) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
        return e + r;
      }, l.prototype.writeIntBE = function(t, e, r, n) {
        if (t = +t, e >>>= 0, !n) {
          const n = Math.pow(2, 8 * r - 1);
          j(this, t, e, r, n - 1, -n);
        }
        let i = r - 1;
        let o = 1;
        let s = 0;
        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); ) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
        return e + r;
      }, l.prototype.writeInt8 = function(t, e, r) {
        return t = +t, e >>>= 0, r || j(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
      }, l.prototype.writeInt16LE = function(t, e, r) {
        return t = +t, e >>>= 0, r || j(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2;
      }, l.prototype.writeInt16BE = function(t, e, r) {
        return t = +t, e >>>= 0, r || j(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2;
      }, l.prototype.writeInt32LE = function(t, e, r) {
        return t = +t, e >>>= 0, r || j(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, 
        this[e + 3] = t >>> 24, e + 4;
      }, l.prototype.writeInt32BE = function(t, e, r) {
        return t = +t, e >>>= 0, r || j(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, 
        this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4;
      }, l.prototype.writeBigInt64LE = X((function(t, e = 0) {
        return P(this, t, e, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
      })), l.prototype.writeBigInt64BE = X((function(t, e = 0) {
        return T(this, t, e, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
      })), l.prototype.writeFloatLE = function(t, e, r) {
        return R(this, t, e, !0, r);
      }, l.prototype.writeFloatBE = function(t, e, r) {
        return R(this, t, e, !1, r);
      }, l.prototype.writeDoubleLE = function(t, e, r) {
        return U(this, t, e, !0, r);
      }, l.prototype.writeDoubleBE = function(t, e, r) {
        return U(this, t, e, !1, r);
      }, l.prototype.copy = function(t, e, r, n) {
        if (!l.isBuffer(t)) throw new TypeError('argument should be a Buffer');
        if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), 
        n === r) return 0;
        if (0 === t.length || 0 === this.length) return 0;
        if (e < 0) throw new RangeError('targetStart out of bounds');
        if (r < 0 || r >= this.length) throw new RangeError('Index out of range');
        if (n < 0) throw new RangeError('sourceEnd out of bounds');
        n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
        const i = n - r;
        return this === t && 'function' == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), 
        i;
      }, l.prototype.fill = function(t, e, r, n) {
        if ('string' == typeof t) {
          if ('string' == typeof e ? (n = e, e = 0, r = this.length) : 'string' == typeof r && (n = r, r = this.length), void 0 !== n && 'string' != typeof n) throw new TypeError('encoding must be a string');
          if ('string' == typeof n && !l.isEncoding(n)) throw new TypeError('Unknown encoding: ' + n);
          if (1 === t.length) {
            const e = t.charCodeAt(0);
            ('utf8' === n && e < 128 || 'latin1' === n) && (t = e);
          }
        } else 'number' == typeof t ? t &= 255 : 'boolean' == typeof t && (t = Number(t));
        if (e < 0 || this.length < e || this.length < r) throw new RangeError('Out of range index');
        if (r <= e) return this;
        let i;
        if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), 'number' == typeof t) for (i = e; i < r; ++i) this[i] = t; else {
          const o = l.isBuffer(t) ? t : l.from(t, n);
          const s = o.length;
          if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
          for (i = 0; i < r - e; ++i) this[i + e] = o[i % s];
        }
        return this;
      };
      const F = {};
      function H(t, e, r) {
        F[t] = class extends r {
          constructor() {
            super(), Object.defineProperty(this, 'message', {
              value: e.apply(this, arguments),
              writable: !0,
              configurable: !0
            }), this.name = `${this.name} [${t}]`, this.stack, delete this.name;
          }
          get code() {
            return t;
          }
          set code(t) {
            Object.defineProperty(this, 'code', {
              configurable: !0,
              enumerable: !0,
              value: t,
              writable: !0
            });
          }
          toString() {
            return `${this.name} [${t}]: ${this.message}`;
          }
        };
      }
      function D(t) {
        let e = '';
        let r = t.length;
        const n = '-' === t[0] ? 1 : 0;
        for (;r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
        return `${t.slice(0, r)}${e}`;
      }
      function z(t, e, r, n, i, o) {
        if (t > r || t < e) {
          const n = 'bigint' == typeof e ? 'n' : '';
          let i;
          throw i = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}` : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${8 * (o + 1) - 1}${n}` : `>= ${e}${n} and <= ${r}${n}`, 
          new F.ERR_OUT_OF_RANGE('value', i, t);
        }
        !function(t, e, r) {
          Z(e, 'offset'), void 0 !== t[e] && void 0 !== t[e + r] || q(e, t.length - (r + 1));
        }(n, i, o);
      }
      function Z(t, e) {
        if ('number' != typeof t) throw new F.ERR_INVALID_ARG_TYPE(e, 'number', t);
      }
      function q(t, e, r) {
        if (Math.floor(t) !== t) throw Z(t, r), new F.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', t);
        if (e < 0) throw new F.ERR_BUFFER_OUT_OF_BOUNDS;
        throw new F.ERR_OUT_OF_RANGE(r || 'offset', `>= ${r ? 1 : 0} and <= ${e}`, t);
      }
      H('ERR_BUFFER_OUT_OF_BOUNDS', (function(t) {
        return t ? `${t} is outside of buffer bounds` : 'Attempt to access memory outside buffer bounds';
      }), RangeError), H('ERR_INVALID_ARG_TYPE', (function(t, e) {
        return `The "${t}" argument must be of type number. Received type ${typeof e}`;
      }), TypeError), H('ERR_OUT_OF_RANGE', (function(t, e, r) {
        let n = `The value of "${t}" is out of range.`;
        let i = r;
        return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = D(String(r)) : 'bigint' == typeof r && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = D(i)), 
        i += 'n'), n += ` It must be ${e}. Received ${i}`, n;
      }), RangeError);
      const G = /[^+/0-9A-Za-z-_]/g;
      function V(t, e) {
        let r;
        e = e || Infinity;
        const n = t.length;
        let i = null;
        const o = [];
        for (let s = 0; s < n; ++s) {
          if (r = t.charCodeAt(s), r > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (s + 1 === n) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && o.push(239, 191, 189), i = r;
              continue;
            }
            r = 65536 + (i - 55296 << 10 | r - 56320);
          } else i && (e -= 3) > -1 && o.push(239, 191, 189);
          if (i = null, r < 128) {
            if ((e -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            o.push(r >> 6 | 192, 63 & r | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
          } else {
            if (!(r < 1114112)) throw new Error('Invalid code point');
            if ((e -= 4) < 0) break;
            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
          }
        }
        return o;
      }
      function $(t) {
        return n.toByteArray(function(t) {
          if ((t = (t = t.split('=')[0]).trim().replace(G, '')).length < 2) return '';
          for (;t.length % 4 != 0; ) t += '=';
          return t;
        }(t));
      }
      function W(t, e, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
        return i;
      }
      function J(t, e) {
        return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name;
      }
      function K(t) {
        return t != t;
      }
      const Y = function() {
        const t = '0123456789abcdef';
        const e = new Array(256);
        for (let r = 0; r < 16; ++r) {
          const n = 16 * r;
          for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
        }
        return e;
      }();
      function X(t) {
        return 'undefined' == typeof BigInt ? Q : t;
      }
      function Q() {
        throw new Error('BigInt not supported');
      }
    },
    "./node_modules/css-loader/dist/cjs.js!./src/theme/style.css": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        default: () => a
      });
      var n = r("./node_modules/css-loader/dist/runtime/sourceMaps.js");
      var i = r.n(n);
      var o = r("./node_modules/css-loader/dist/runtime/api.js");
      var s = r.n(o)()(i());
      s.push([ t.id, "\n.tk-overlay {\n  font-family: 'Source Sans Pro', sans-serif;\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n}\n\n.tk-overlay button {\n  height:80px;\n  width:80px;\n  border: 0;\n  box-shadow: 0 2px 5px 0 #676767;\n  border-radius: 64px;\n  cursor: pointer;\n  z-index: 999;\n  position: relative;\n}\n\n/* animation fix: https://stackoverflow.com/questions/3331353/transitions-on-the-css-display-property */\n@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }\n.tk-overlay .overlay.open { animation: fadeIn 0.5s; opacity: 1; }\n\n.tk-overlay .overlay {\n  opacity: 0;\n  position: absolute;\n  top: -290px;\n  left: -340px;\n  height: 266px;\n  width: 355px;\n  padding: 0 0 37px;\n  box-shadow: 0 2px 4px 0 rgba(103, 103, 103, 0.5);\n  background-color: #ffffff;\n  z-index: 888;\n}\n\n.tk-overlay .overlay .brand {\n  width: 355px;\n  height: 4px;\n  background-color: #303052;\n}\n\n.tk-overlay .overlay .headline {\n  width: 246px;\n  height: 41px;\n  margin: 18px 98px 0px 16px;\n  font-size: 18px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: #000000;\n}\n\n.tk-overlay .overlay .token-container {\n  height: 222px;\n  overflow: scroll;\n}\n\n.tk-overlay .overlay .token {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 360px;\n  height: 80px;\n  border-top: solid 1px #e9e9e9;\n}\n\n.tk-overlay .overlay .content {\n  display: flex;\n  align-items: center;\n}\n\n.tk-overlay .overlay .token:last-child {\n  border-bottom: solid 1px #e9e9e9;  \n}\n\n.tk-overlay .overlay .token .emblem {\n  width: 44px;\n  height: 44px;\n  margin: 0 14px;\n}\n\n.tk-overlay .overlay .token .detail {\n  height: 20px;\n  font-size: 11px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.6;\n  letter-spacing: normal;\n  color: #727272;\n  margin: 0;\n}\n\n.tk-overlay .overlay .token .title {\n  height: 34px;\n  margin: 0 ;\n  font-size: 18px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.8;\n  letter-spacing: normal;\n  color: #000000;\n}\n\n.tk-overlay .overlay .toggle {\n  transform: scale(0.7);\n  width: 55px;\n  margin-right: 7px;\n  border-radius: 5px;\n  background: white;\n  cursor: pointer;\n}\n.tk-overlay .overlay .toggle input.mobileToggle {\n  opacity: 0;\n  position: absolute;\n}\n.tk-overlay .overlay .toggle input.mobileToggle + label {\n  position: relative;\n  display: inline-block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: 0.2s ease;\n  height: 19px;\n  width: 50px;\n  border: 3px solid #e4e4e4;\n  border-radius: 60px;\n  background: #c6c5c5;\n  cursor: pointer;\n}\n.tk-overlay .overlay .toggle input.mobileToggle + label:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  height: 19px;\n  width: 51px;\n  top: 0;\n  left: 0;\n  border-radius: 19px;\n}\n.tk-overlay .overlay .toggle input.mobileToggle + label:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 0px 0 hsla(0, 0%, 0%, 0.04), 0 4px 9px hsla(0, 0%, 0%, 0.13), 0 3px 3px hsla(0, 0%, 0%, 0.05);\n  transition: 0.25s cubic-bezier(0.54, 1.6, 0.5, 1);\n  background: #037fed;\n  height: 28px;\n  width: 28px;\n  top: -5px;\n  left: 0px;\n  border-radius: 60px;\n}\n.tk-overlay .overlay .toggle input.mobileToggle:checked + label:before {\n  background: #88bff6;\n  transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);\n}\n.tk-overlay .overlay .toggle input.mobileToggle:checked + label:after {\n  left: 24px;\n}\n\n.tk-overlay .overlay .toggle input:focus + label\n{\n  border: 3px solid #005fcc !important;\n}\n\n\n\n", "", {
        version: 3,
        sources: [ "webpack://./src/theme/style.css" ],
        names: [],
        mappings: ";AACA;EACE,0CAA0C;EAC1C,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;EACX,UAAU;EACV,SAAS;EACT,+BAA+B;EAC/B,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA,uGAAuG;AACvG,oBAAoB,OAAO,UAAU,EAAE,EAAE,KAAK,UAAU,EAAE,EAAE;AAC5D,4BAA4B,sBAAsB,EAAE,UAAU,EAAE;;AAEhE;EACE,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,gDAAgD;EAChD,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,0BAA0B;EAC1B,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;EACtB,cAAc;EACd,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,yBAAyB;KACtB,sBAAsB;MACrB,qBAAqB;UACjB,iBAAiB;EACzB,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,8CAA8C;EAC9C,YAAY;EACZ,WAAW;EACX,MAAM;EACN,OAAO;EACP,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,+IAA+I;EAC/I,iDAAiD;EACjD,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,SAAS;EACT,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,iDAAiD;AACnD;AACA;EACE,UAAU;AACZ;;AAEA;;EAEE,oCAAoC;AACtC",
        sourcesContent: [ "\n.tk-overlay {\n  font-family: 'Source Sans Pro', sans-serif;\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n}\n\n.tk-overlay button {\n  height:80px;\n  width:80px;\n  border: 0;\n  box-shadow: 0 2px 5px 0 #676767;\n  border-radius: 64px;\n  cursor: pointer;\n  z-index: 999;\n  position: relative;\n}\n\n/* animation fix: https://stackoverflow.com/questions/3331353/transitions-on-the-css-display-property */\n@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }\n.tk-overlay .overlay.open { animation: fadeIn 0.5s; opacity: 1; }\n\n.tk-overlay .overlay {\n  opacity: 0;\n  position: absolute;\n  top: -290px;\n  left: -340px;\n  height: 266px;\n  width: 355px;\n  padding: 0 0 37px;\n  box-shadow: 0 2px 4px 0 rgba(103, 103, 103, 0.5);\n  background-color: #ffffff;\n  z-index: 888;\n}\n\n.tk-overlay .overlay .brand {\n  width: 355px;\n  height: 4px;\n  background-color: #303052;\n}\n\n.tk-overlay .overlay .headline {\n  width: 246px;\n  height: 41px;\n  margin: 18px 98px 0px 16px;\n  font-size: 18px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: #000000;\n}\n\n.tk-overlay .overlay .token-container {\n  height: 222px;\n  overflow: scroll;\n}\n\n.tk-overlay .overlay .token {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 360px;\n  height: 80px;\n  border-top: solid 1px #e9e9e9;\n}\n\n.tk-overlay .overlay .content {\n  display: flex;\n  align-items: center;\n}\n\n.tk-overlay .overlay .token:last-child {\n  border-bottom: solid 1px #e9e9e9;  \n}\n\n.tk-overlay .overlay .token .emblem {\n  width: 44px;\n  height: 44px;\n  margin: 0 14px;\n}\n\n.tk-overlay .overlay .token .detail {\n  height: 20px;\n  font-size: 11px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.6;\n  letter-spacing: normal;\n  color: #727272;\n  margin: 0;\n}\n\n.tk-overlay .overlay .token .title {\n  height: 34px;\n  margin: 0 ;\n  font-size: 18px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.8;\n  letter-spacing: normal;\n  color: #000000;\n}\n\n.tk-overlay .overlay .toggle {\n  transform: scale(0.7);\n  width: 55px;\n  margin-right: 7px;\n  border-radius: 5px;\n  background: white;\n  cursor: pointer;\n}\n.tk-overlay .overlay .toggle input.mobileToggle {\n  opacity: 0;\n  position: absolute;\n}\n.tk-overlay .overlay .toggle input.mobileToggle + label {\n  position: relative;\n  display: inline-block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: 0.2s ease;\n  height: 19px;\n  width: 50px;\n  border: 3px solid #e4e4e4;\n  border-radius: 60px;\n  background: #c6c5c5;\n  cursor: pointer;\n}\n.tk-overlay .overlay .toggle input.mobileToggle + label:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);\n  height: 19px;\n  width: 51px;\n  top: 0;\n  left: 0;\n  border-radius: 19px;\n}\n.tk-overlay .overlay .toggle input.mobileToggle + label:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 0px 0 hsla(0, 0%, 0%, 0.04), 0 4px 9px hsla(0, 0%, 0%, 0.13), 0 3px 3px hsla(0, 0%, 0%, 0.05);\n  transition: 0.25s cubic-bezier(0.54, 1.6, 0.5, 1);\n  background: #037fed;\n  height: 28px;\n  width: 28px;\n  top: -5px;\n  left: 0px;\n  border-radius: 60px;\n}\n.tk-overlay .overlay .toggle input.mobileToggle:checked + label:before {\n  background: #88bff6;\n  transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);\n}\n.tk-overlay .overlay .toggle input.mobileToggle:checked + label:after {\n  left: 24px;\n}\n\n.tk-overlay .overlay .toggle input:focus + label\n{\n  border: 3px solid #005fcc !important;\n}\n\n\n\n" ],
        sourceRoot: ""
      } ]);
      const a = s;
    },
    "./node_modules/css-loader/dist/runtime/api.js": t => {
      "use strict";
      t.exports = function(t) {
        var e = [];
        return e.toString = function() {
          return this.map((function(e) {
            var r = "";
            var n = void 0 !== e[5];
            return e[4] && (r += "@supports (".concat(e[4], ") {")), e[2] && (r += "@media ".concat(e[2], " {")), n && (r += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), 
            r += t(e), n && (r += "}"), e[2] && (r += "}"), e[4] && (r += "}"), r;
          })).join("");
        }, e.i = function(t, r, n, i, o) {
          "string" == typeof t && (t = [ [ null, t, void 0 ] ]);
          var s = {};
          if (n) for (var a = 0; a < this.length; a++) {
            var l = this[a][0];
            null != l && (s[l] = !0);
          }
          for (var h = 0; h < t.length; h++) {
            var u = [].concat(t[h]);
            n && s[u[0]] || (void 0 !== o && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), 
            u[5] = o), r && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = r) : u[2] = r), i && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), 
            u[4] = i) : u[4] = "".concat(i)), e.push(u));
          }
        }, e;
      };
    },
    "./node_modules/css-loader/dist/runtime/sourceMaps.js": t => {
      "use strict";
      t.exports = function(t) {
        var e = t[1];
        var r = t[3];
        if (!r) return e;
        if ("function" == typeof btoa) {
          var n = btoa(unescape(encodeURIComponent(JSON.stringify(r))));
          var i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n);
          var o = "/*# ".concat(i, " */");
          var s = r.sources.map((function(t) {
            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */");
          }));
          return [ e ].concat(s).concat([ o ]).join("\n");
        }
        return [ e ].join("\n");
      };
    },
    "./node_modules/hash.js/lib/hash.js": (t, e, r) => {
      var n = e;
      n.utils = r("./node_modules/hash.js/lib/hash/utils.js"), n.common = r("./node_modules/hash.js/lib/hash/common.js"), n.sha = r("./node_modules/hash.js/lib/hash/sha.js"), 
      n.ripemd = r("./node_modules/hash.js/lib/hash/ripemd.js"), n.hmac = r("./node_modules/hash.js/lib/hash/hmac.js"), n.sha1 = n.sha.sha1, 
      n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160;
    },
    "./node_modules/hash.js/lib/hash/common.js": (t, e, r) => {
      "use strict";
      var n = r("./node_modules/hash.js/lib/hash/utils.js");
      var i = r("./node_modules/minimalistic-assert/index.js");
      function o() {
        this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, 
        this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = 'big', 
        this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
      }
      e.BlockHash = o, o.prototype.update = function(t, e) {
        if (t = n.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, 
        this.pending.length >= this._delta8) {
          var r = (t = this.pending).length % this._delta8;
          this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = n.join32(t, 0, t.length - r, this.endian);
          for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32);
        }
        return this;
      }, o.prototype.digest = function(t) {
        return this.update(this._pad()), i(null === this.pending), this._digest(t);
      }, o.prototype._pad = function() {
        var t = this.pendingTotal;
        var e = this._delta8;
        var r = e - (t + this.padLength) % e;
        var n = new Array(r + this.padLength);
        n[0] = 128;
        for (var i = 1; i < r; i++) n[i] = 0;
        if (t <<= 3, 'big' === this.endian) {
          for (var o = 8; o < this.padLength; o++) n[i++] = 0;
          n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = t >>> 24 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 8 & 255, 
          n[i++] = 255 & t;
        } else for (n[i++] = 255 & t, n[i++] = t >>> 8 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 24 & 255, n[i++] = 0, n[i++] = 0, 
        n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++) n[i++] = 0;
        return n;
      };
    },
    "./node_modules/hash.js/lib/hash/hmac.js": (t, e, r) => {
      "use strict";
      var n = r("./node_modules/hash.js/lib/hash/utils.js");
      var i = r("./node_modules/minimalistic-assert/index.js");
      function o(t, e, r) {
        if (!(this instanceof o)) return new o(t, e, r);
        this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(e, r));
      }
      t.exports = o, o.prototype._init = function(t) {
        t.length > this.blockSize && (t = (new this.Hash).update(t).digest()), i(t.length <= this.blockSize);
        for (var e = t.length; e < this.blockSize; e++) t.push(0);
        for (e = 0; e < t.length; e++) t[e] ^= 54;
        for (this.inner = (new this.Hash).update(t), e = 0; e < t.length; e++) t[e] ^= 106;
        this.outer = (new this.Hash).update(t);
      }, o.prototype.update = function(t, e) {
        return this.inner.update(t, e), this;
      }, o.prototype.digest = function(t) {
        return this.outer.update(this.inner.digest()), this.outer.digest(t);
      };
    },
    "./node_modules/hash.js/lib/hash/ripemd.js": (t, e, r) => {
      "use strict";
      var n = r("./node_modules/hash.js/lib/hash/utils.js");
      var i = r("./node_modules/hash.js/lib/hash/common.js");
      var o = n.rotl32;
      var s = n.sum32;
      var a = n.sum32_3;
      var l = n.sum32_4;
      var h = i.BlockHash;
      function u() {
        if (!(this instanceof u)) return new u;
        h.call(this), this.h = [ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ], this.endian = 'little';
      }
      function c(t, e, r, n) {
        return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n);
      }
      function f(t) {
        return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838;
      }
      function d(t) {
        return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0;
      }
      n.inherits(u, h), e.ripemd160 = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 192, u.padLength = 64, u.prototype._update = function(t, e) {
        var r = this.h[0];
        var n = this.h[1];
        var i = this.h[2];
        var h = this.h[3];
        var u = this.h[4];
        var y = r;
        var b = n;
        var w = i;
        var k = h;
        var x = u;
        for (var A = 0; A < 80; A++) {
          var B = s(o(l(r, c(A, n, i, h), t[m[A] + e], f(A)), p[A]), u);
          r = u, u = h, h = o(i, 10), i = n, n = B, B = s(o(l(y, c(79 - A, b, w, k), t[g[A] + e], d(A)), v[A]), x), y = x, x = k, 
          k = o(w, 10), w = b, b = B;
        }
        B = a(this.h[1], i, k), this.h[1] = a(this.h[2], h, x), this.h[2] = a(this.h[3], u, y), this.h[3] = a(this.h[4], r, b), 
        this.h[4] = a(this.h[0], n, w), this.h[0] = B;
      }, u.prototype._digest = function(t) {
        return 'hex' === t ? n.toHex32(this.h, 'little') : n.split32(this.h, 'little');
      };
      var m = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13 ];
      var g = [ 5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11 ];
      var p = [ 11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6 ];
      var v = [ 8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11 ];
    },
    "./node_modules/hash.js/lib/hash/sha.js": (t, e, r) => {
      "use strict";
      e.sha1 = r("./node_modules/hash.js/lib/hash/sha/1.js"), e.sha224 = r("./node_modules/hash.js/lib/hash/sha/224.js"), e.sha256 = r("./node_modules/hash.js/lib/hash/sha/256.js"), 
      e.sha384 = r("./node_modules/hash.js/lib/hash/sha/384.js"), e.sha512 = r("./node_modules/hash.js/lib/hash/sha/512.js");
    },
    "./node_modules/hash.js/lib/hash/sha/1.js": (t, e, r) => {
      "use strict";
      var n = r("./node_modules/hash.js/lib/hash/utils.js");
      var i = r("./node_modules/hash.js/lib/hash/common.js");
      var o = r("./node_modules/hash.js/lib/hash/sha/common.js");
      var s = n.rotl32;
      var a = n.sum32;
      var l = n.sum32_5;
      var h = o.ft_1;
      var u = i.BlockHash;
      var c = [ 1518500249, 1859775393, 2400959708, 3395469782 ];
      function f() {
        if (!(this instanceof f)) return new f;
        u.call(this), this.h = [ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ], this.W = new Array(80);
      }
      n.inherits(f, u), t.exports = f, f.blockSize = 512, f.outSize = 160, f.hmacStrength = 80, f.padLength = 64, f.prototype._update = function(t, e) {
        var r = this.W;
        for (var n = 0; n < 16; n++) r[n] = t[e + n];
        for (;n < r.length; n++) r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
        var i = this.h[0];
        var o = this.h[1];
        var u = this.h[2];
        var f = this.h[3];
        var d = this.h[4];
        for (n = 0; n < r.length; n++) {
          var m = ~~(n / 20);
          var g = l(s(i, 5), h(m, o, u, f), d, r[n], c[m]);
          d = f, f = u, u = s(o, 30), o = i, i = g;
        }
        this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], u), this.h[3] = a(this.h[3], f), this.h[4] = a(this.h[4], d);
      }, f.prototype._digest = function(t) {
        return 'hex' === t ? n.toHex32(this.h, 'big') : n.split32(this.h, 'big');
      };
    },
    "./node_modules/hash.js/lib/hash/sha/224.js": (t, e, r) => {
      "use strict";
      var n = r("./node_modules/hash.js/lib/hash/utils.js");
      var i = r("./node_modules/hash.js/lib/hash/sha/256.js");
      function o() {
        if (!(this instanceof o)) return new o;
        i.call(this), this.h = [ 3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428 ];
      }
      n.inherits(o, i), t.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function(t) {
        return 'hex' === t ? n.toHex32(this.h.slice(0, 7), 'big') : n.split32(this.h.slice(0, 7), 'big');
      };
    },
    "./node_modules/hash.js/lib/hash/sha/256.js": (t, e, r) => {
      "use strict";
      var n = r("./node_modules/hash.js/lib/hash/utils.js");
      var i = r("./node_modules/hash.js/lib/hash/common.js");
      var o = r("./node_modules/hash.js/lib/hash/sha/common.js");
      var s = r("./node_modules/minimalistic-assert/index.js");
      var a = n.sum32;
      var l = n.sum32_4;
      var h = n.sum32_5;
      var u = o.ch32;
      var c = o.maj32;
      var f = o.s0_256;
      var d = o.s1_256;
      var m = o.g0_256;
      var g = o.g1_256;
      var p = i.BlockHash;
      var v = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ];
      function y() {
        if (!(this instanceof y)) return new y;
        p.call(this), this.h = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], 
        this.k = v, this.W = new Array(64);
      }
      n.inherits(y, p), t.exports = y, y.blockSize = 512, y.outSize = 256, y.hmacStrength = 192, y.padLength = 64, y.prototype._update = function(t, e) {
        var r = this.W;
        for (var n = 0; n < 16; n++) r[n] = t[e + n];
        for (;n < r.length; n++) r[n] = l(g(r[n - 2]), r[n - 7], m(r[n - 15]), r[n - 16]);
        var i = this.h[0];
        var o = this.h[1];
        var p = this.h[2];
        var v = this.h[3];
        var y = this.h[4];
        var b = this.h[5];
        var w = this.h[6];
        var k = this.h[7];
        for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
          var x = h(k, d(y), u(y, b, w), this.k[n], r[n]);
          var A = a(f(i), c(i, o, p));
          k = w, w = b, b = y, y = a(v, x), v = p, p = o, o = i, i = a(x, A);
        }
        this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], p), this.h[3] = a(this.h[3], v), this.h[4] = a(this.h[4], y), 
        this.h[5] = a(this.h[5], b), this.h[6] = a(this.h[6], w), this.h[7] = a(this.h[7], k);
      }, y.prototype._digest = function(t) {
        return 'hex' === t ? n.toHex32(this.h, 'big') : n.split32(this.h, 'big');
      };
    },
    "./node_modules/hash.js/lib/hash/sha/384.js": (t, e, r) => {
      "use strict";
      var n = r("./node_modules/hash.js/lib/hash/utils.js");
      var i = r("./node_modules/hash.js/lib/hash/sha/512.js");
      function o() {
        if (!(this instanceof o)) return new o;
        i.call(this), this.h = [ 3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428 ];
      }
      n.inherits(o, i), t.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function(t) {
        return 'hex' === t ? n.toHex32(this.h.slice(0, 12), 'big') : n.split32(this.h.slice(0, 12), 'big');
      };
    },
    "./node_modules/hash.js/lib/hash/sha/512.js": (t, e, r) => {
      "use strict";
      var n = r("./node_modules/hash.js/lib/hash/utils.js");
      var i = r("./node_modules/hash.js/lib/hash/common.js");
      var o = r("./node_modules/minimalistic-assert/index.js");
      var s = n.rotr64_hi;
      var a = n.rotr64_lo;
      var l = n.shr64_hi;
      var h = n.shr64_lo;
      var u = n.sum64;
      var c = n.sum64_hi;
      var f = n.sum64_lo;
      var d = n.sum64_4_hi;
      var m = n.sum64_4_lo;
      var g = n.sum64_5_hi;
      var p = n.sum64_5_lo;
      var v = i.BlockHash;
      var y = [ 1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591 ];
      function b() {
        if (!(this instanceof b)) return new b;
        v.call(this), this.h = [ 1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209 ], 
        this.k = y, this.W = new Array(160);
      }
      function w(t, e, r, n, i) {
        var o = t & r ^ ~t & i;
        return o < 0 && (o += 4294967296), o;
      }
      function k(t, e, r, n, i, o) {
        var s = e & n ^ ~e & o;
        return s < 0 && (s += 4294967296), s;
      }
      function x(t, e, r, n, i) {
        var o = t & r ^ t & i ^ r & i;
        return o < 0 && (o += 4294967296), o;
      }
      function A(t, e, r, n, i, o) {
        var s = e & n ^ e & o ^ n & o;
        return s < 0 && (s += 4294967296), s;
      }
      function B(t, e) {
        var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function E(t, e) {
        var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function _(t, e) {
        var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function N(t, e) {
        var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function L(t, e) {
        var r = s(t, e, 1) ^ s(t, e, 8) ^ l(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function S(t, e) {
        var r = a(t, e, 1) ^ a(t, e, 8) ^ h(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function M(t, e) {
        var r = s(t, e, 19) ^ s(e, t, 29) ^ l(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }
      function I(t, e) {
        var r = a(t, e, 19) ^ a(e, t, 29) ^ h(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }
      n.inherits(b, v), t.exports = b, b.blockSize = 1024, b.outSize = 512, b.hmacStrength = 192, b.padLength = 128, b.prototype._prepareBlock = function(t, e) {
        var r = this.W;
        for (var n = 0; n < 32; n++) r[n] = t[e + n];
        for (;n < r.length; n += 2) {
          var i = M(r[n - 4], r[n - 3]);
          var o = I(r[n - 4], r[n - 3]);
          var s = r[n - 14];
          var a = r[n - 13];
          var l = L(r[n - 30], r[n - 29]);
          var h = S(r[n - 30], r[n - 29]);
          var u = r[n - 32];
          var c = r[n - 31];
          r[n] = d(i, o, s, a, l, h, u, c), r[n + 1] = m(i, o, s, a, l, h, u, c);
        }
      }, b.prototype._update = function(t, e) {
        this._prepareBlock(t, e);
        var r = this.W;
        var n = this.h[0];
        var i = this.h[1];
        var s = this.h[2];
        var a = this.h[3];
        var l = this.h[4];
        var h = this.h[5];
        var d = this.h[6];
        var m = this.h[7];
        var v = this.h[8];
        var y = this.h[9];
        var b = this.h[10];
        var L = this.h[11];
        var S = this.h[12];
        var M = this.h[13];
        var I = this.h[14];
        var C = this.h[15];
        o(this.k.length === r.length);
        for (var j = 0; j < r.length; j += 2) {
          var P = I;
          var T = C;
          var O = _(v, y);
          var R = N(v, y);
          var U = w(v, y, b, L, S);
          var F = k(v, y, b, L, S, M);
          var H = this.k[j];
          var D = this.k[j + 1];
          var z = r[j];
          var Z = r[j + 1];
          var q = g(P, T, O, R, U, F, H, D, z, Z);
          var G = p(P, T, O, R, U, F, H, D, z, Z);
          P = B(n, i), T = E(n, i), O = x(n, i, s, a, l), R = A(n, i, s, a, l, h);
          var V = c(P, T, O, R);
          var $ = f(P, T, O, R);
          I = S, C = M, S = b, M = L, b = v, L = y, v = c(d, m, q, G), y = f(m, m, q, G), d = l, m = h, l = s, h = a, s = n, a = i, 
          n = c(q, G, V, $), i = f(q, G, V, $);
        }
        u(this.h, 0, n, i), u(this.h, 2, s, a), u(this.h, 4, l, h), u(this.h, 6, d, m), u(this.h, 8, v, y), u(this.h, 10, b, L), 
        u(this.h, 12, S, M), u(this.h, 14, I, C);
      }, b.prototype._digest = function(t) {
        return 'hex' === t ? n.toHex32(this.h, 'big') : n.split32(this.h, 'big');
      };
    },
    "./node_modules/hash.js/lib/hash/sha/common.js": (t, e, r) => {
      "use strict";
      var n = r("./node_modules/hash.js/lib/hash/utils.js").rotr32;
      function i(t, e, r) {
        return t & e ^ ~t & r;
      }
      function o(t, e, r) {
        return t & e ^ t & r ^ e & r;
      }
      function s(t, e, r) {
        return t ^ e ^ r;
      }
      e.ft_1 = function(t, e, r, n) {
        return 0 === t ? i(e, r, n) : 1 === t || 3 === t ? s(e, r, n) : 2 === t ? o(e, r, n) : void 0;
      }, e.ch32 = i, e.maj32 = o, e.p32 = s, e.s0_256 = function(t) {
        return n(t, 2) ^ n(t, 13) ^ n(t, 22);
      }, e.s1_256 = function(t) {
        return n(t, 6) ^ n(t, 11) ^ n(t, 25);
      }, e.g0_256 = function(t) {
        return n(t, 7) ^ n(t, 18) ^ t >>> 3;
      }, e.g1_256 = function(t) {
        return n(t, 17) ^ n(t, 19) ^ t >>> 10;
      };
    },
    "./node_modules/hash.js/lib/hash/utils.js": (t, e, r) => {
      "use strict";
      var n = r("./node_modules/minimalistic-assert/index.js");
      var i = r("./node_modules/inherits/inherits_browser.js");
      function o(t, e) {
        return 55296 == (64512 & t.charCodeAt(e)) && (!(e < 0 || e + 1 >= t.length) && 56320 == (64512 & t.charCodeAt(e + 1)));
      }
      function s(t) {
        return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0;
      }
      function a(t) {
        return 1 === t.length ? '0' + t : t;
      }
      function l(t) {
        return 7 === t.length ? '0' + t : 6 === t.length ? '00' + t : 5 === t.length ? '000' + t : 4 === t.length ? '0000' + t : 3 === t.length ? '00000' + t : 2 === t.length ? '000000' + t : 1 === t.length ? '0000000' + t : t;
      }
      e.inherits = i, e.toArray = function(t, e) {
        if (Array.isArray(t)) return t.slice();
        if (!t) return [];
        var r = [];
        if ('string' == typeof t) if (e) {
          if ('hex' === e) for ((t = t.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (t = '0' + t), i = 0; i < t.length; i += 2) r.push(parseInt(t[i] + t[i + 1], 16));
        } else {
          var n = 0;
          for (var i = 0; i < t.length; i++) {
            var s = t.charCodeAt(i);
            s < 128 ? r[n++] = s : s < 2048 ? (r[n++] = s >> 6 | 192, r[n++] = 63 & s | 128) : o(t, i) ? (s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++i)), 
            r[n++] = s >> 18 | 240, r[n++] = s >> 12 & 63 | 128, r[n++] = s >> 6 & 63 | 128, r[n++] = 63 & s | 128) : (r[n++] = s >> 12 | 224, 
            r[n++] = s >> 6 & 63 | 128, r[n++] = 63 & s | 128);
          }
        } else for (i = 0; i < t.length; i++) r[i] = 0 | t[i];
        return r;
      }, e.toHex = function(t) {
        var e = '';
        for (var r = 0; r < t.length; r++) e += a(t[r].toString(16));
        return e;
      }, e.htonl = s, e.toHex32 = function(t, e) {
        var r = '';
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          'little' === e && (i = s(i)), r += l(i.toString(16));
        }
        return r;
      }, e.zero2 = a, e.zero8 = l, e.join32 = function(t, e, r, i) {
        var o = r - e;
        n(o % 4 == 0);
        var s = new Array(o / 4);
        for (var a = 0, l = e; a < s.length; a++, l += 4) {
          var h;
          h = 'big' === i ? t[l] << 24 | t[l + 1] << 16 | t[l + 2] << 8 | t[l + 3] : t[l + 3] << 24 | t[l + 2] << 16 | t[l + 1] << 8 | t[l], 
          s[a] = h >>> 0;
        }
        return s;
      }, e.split32 = function(t, e) {
        var r = new Array(4 * t.length);
        for (var n = 0, i = 0; n < t.length; n++, i += 4) {
          var o = t[n];
          'big' === e ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, 
          r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o);
        }
        return r;
      }, e.rotr32 = function(t, e) {
        return t >>> e | t << 32 - e;
      }, e.rotl32 = function(t, e) {
        return t << e | t >>> 32 - e;
      }, e.sum32 = function(t, e) {
        return t + e >>> 0;
      }, e.sum32_3 = function(t, e, r) {
        return t + e + r >>> 0;
      }, e.sum32_4 = function(t, e, r, n) {
        return t + e + r + n >>> 0;
      }, e.sum32_5 = function(t, e, r, n, i) {
        return t + e + r + n + i >>> 0;
      }, e.sum64 = function(t, e, r, n) {
        var i = t[e];
        var o = n + t[e + 1] >>> 0;
        var s = (o < n ? 1 : 0) + r + i;
        t[e] = s >>> 0, t[e + 1] = o;
      }, e.sum64_hi = function(t, e, r, n) {
        return (e + n >>> 0 < e ? 1 : 0) + t + r >>> 0;
      }, e.sum64_lo = function(t, e, r, n) {
        return e + n >>> 0;
      }, e.sum64_4_hi = function(t, e, r, n, i, o, s, a) {
        var l = 0;
        var h = e;
        return l += (h = h + n >>> 0) < e ? 1 : 0, l += (h = h + o >>> 0) < o ? 1 : 0, t + r + i + s + (l += (h = h + a >>> 0) < a ? 1 : 0) >>> 0;
      }, e.sum64_4_lo = function(t, e, r, n, i, o, s, a) {
        return e + n + o + a >>> 0;
      }, e.sum64_5_hi = function(t, e, r, n, i, o, s, a, l, h) {
        var u = 0;
        var c = e;
        return u += (c = c + n >>> 0) < e ? 1 : 0, u += (c = c + o >>> 0) < o ? 1 : 0, u += (c = c + a >>> 0) < a ? 1 : 0, t + r + i + s + l + (u += (c = c + h >>> 0) < h ? 1 : 0) >>> 0;
      }, e.sum64_5_lo = function(t, e, r, n, i, o, s, a, l, h) {
        return e + n + o + a + h >>> 0;
      }, e.rotr64_hi = function(t, e, r) {
        return (e << 32 - r | t >>> r) >>> 0;
      }, e.rotr64_lo = function(t, e, r) {
        return (t << 32 - r | e >>> r) >>> 0;
      }, e.shr64_hi = function(t, e, r) {
        return t >>> r;
      }, e.shr64_lo = function(t, e, r) {
        return (t << 32 - r | e >>> r) >>> 0;
      };
    },
    "./node_modules/ieee754/index.js": (t, e) => {
      e.read = function(t, e, r, n, i) {
        var o, s;
        var a = 8 * i - n - 1;
        var l = (1 << a) - 1;
        var h = l >> 1;
        var u = -7;
        var c = r ? i - 1 : 0;
        var f = r ? -1 : 1;
        var d = t[e + c];
        for (c += f, o = d & (1 << -u) - 1, d >>= -u, u += a; u > 0; o = 256 * o + t[e + c], c += f, u -= 8) ;
        for (s = o & (1 << -u) - 1, o >>= -u, u += n; u > 0; s = 256 * s + t[e + c], c += f, u -= 8) ;
        if (0 === o) o = 1 - h; else {
          if (o === l) return s ? NaN : Infinity * (d ? -1 : 1);
          s += Math.pow(2, n), o -= h;
        }
        return (d ? -1 : 1) * s * Math.pow(2, o - n);
      }, e.write = function(t, e, r, n, i, o) {
        var s, a, l;
        var h = 8 * o - i - 1;
        var u = (1 << h) - 1;
        var c = u >> 1;
        var f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var d = n ? 0 : o - 1;
        var m = n ? 1 : -1;
        var g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || Infinity === e ? (a = isNaN(e) ? 1 : 0, s = u) : (s = Math.floor(Math.log(e) / Math.LN2), 
        e * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), (e += s + c >= 1 ? f / l : f * Math.pow(2, 1 - c)) * l >= 2 && (s++, l /= 2), 
        s + c >= u ? (a = 0, s = u) : s + c >= 1 ? (a = (e * l - 1) * Math.pow(2, i), s += c) : (a = e * Math.pow(2, c - 1) * Math.pow(2, i), 
        s = 0)); i >= 8; t[r + d] = 255 & a, d += m, a /= 256, i -= 8) ;
        for (s = s << i | a, h += i; h > 0; t[r + d] = 255 & s, d += m, s /= 256, h -= 8) ;
        t[r + d - m] |= 128 * g;
      };
    },
    "./node_modules/inherits/inherits_browser.js": t => {
      'function' == typeof Object.create ? t.exports = function(t, e) {
        e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }));
      } : t.exports = function(t, e) {
        if (e) {
          t.super_ = e;
          var r = function() {};
          r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t;
        }
      };
    },
    "./node_modules/js-sha3/src/sha3.js": (t, e, r) => {
      !function() {
        'use strict';
        var e = 'object' == typeof window ? window : {};
        !e.JS_SHA3_NO_NODE_JS && 'object' == typeof process && process.versions && process.versions.node && (e = r.g);
        var n = !e.JS_SHA3_NO_COMMON_JS && t.exports;
        var i = '0123456789abcdef'.split('');
        var o = [ 0, 8, 16, 24 ];
        var s = [ 1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648 ];
        var a = [ 224, 256, 384, 512 ];
        var l = [ 'hex', 'buffer', 'arrayBuffer', 'array' ];
        var h = function(t, e, r) {
          return function(n) {
            return new w(t, e, t).update(n)[r]();
          };
        };
        var u = function(t, e, r) {
          return function(n, i) {
            return new w(t, e, i).update(n)[r]();
          };
        };
        var c = function(t, e) {
          var r = h(t, e, 'hex');
          r.create = function() {
            return new w(t, e, t);
          }, r.update = function(t) {
            return r.create().update(t);
          };
          for (var n = 0; n < l.length; ++n) {
            var i = l[n];
            r[i] = h(t, e, i);
          }
          return r;
        };
        var f = [ {
          name: 'keccak',
          padding: [ 1, 256, 65536, 16777216 ],
          bits: a,
          createMethod: c
        }, {
          name: 'sha3',
          padding: [ 6, 1536, 393216, 100663296 ],
          bits: a,
          createMethod: c
        }, {
          name: 'shake',
          padding: [ 31, 7936, 2031616, 520093696 ],
          bits: [ 128, 256 ],
          createMethod: function(t, e) {
            var r = u(t, e, 'hex');
            r.create = function(r) {
              return new w(t, e, r);
            }, r.update = function(t, e) {
              return r.create(e).update(t);
            };
            for (var n = 0; n < l.length; ++n) {
              var i = l[n];
              r[i] = u(t, e, i);
            }
            return r;
          }
        } ];
        var d = {}, m = [];
        for (var g = 0; g < f.length; ++g) {
          var p = f[g];
          var v = p.bits;
          for (var y = 0; y < v.length; ++y) {
            var b = p.name + '_' + v[y];
            m.push(b), d[b] = p.createMethod(v[y], p.padding);
          }
        }
        function w(t, e, r) {
          this.blocks = [], this.s = [], this.padding = e, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, 
          this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
          for (var n = 0; n < 50; ++n) this.s[n] = 0;
        }
        w.prototype.update = function(t) {
          var e = 'string' != typeof t;
          e && t.constructor === ArrayBuffer && (t = new Uint8Array(t));
          var r, n, i = t.length, s = this.blocks, a = this.byteCount, l = this.blockCount, h = 0, u = this.s;
          for (;h < i; ) {
            if (this.reset) for (this.reset = !1, s[0] = this.block, r = 1; r < l + 1; ++r) s[r] = 0;
            if (e) for (r = this.start; h < i && r < a; ++h) s[r >> 2] |= t[h] << o[3 & r++]; else for (r = this.start; h < i && r < a; ++h) (n = t.charCodeAt(h)) < 128 ? s[r >> 2] |= n << o[3 & r++] : n < 2048 ? (s[r >> 2] |= (192 | n >> 6) << o[3 & r++], 
            s[r >> 2] |= (128 | 63 & n) << o[3 & r++]) : n < 55296 || n >= 57344 ? (s[r >> 2] |= (224 | n >> 12) << o[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << o[3 & r++], 
            s[r >> 2] |= (128 | 63 & n) << o[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(++h)), s[r >> 2] |= (240 | n >> 18) << o[3 & r++], 
            s[r >> 2] |= (128 | n >> 12 & 63) << o[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << o[3 & r++], s[r >> 2] |= (128 | 63 & n) << o[3 & r++]);
            if (this.lastByteIndex = r, r >= a) {
              for (this.start = r - a, this.block = s[l], r = 0; r < l; ++r) u[r] ^= s[r];
              k(u), this.reset = !0;
            } else this.start = r;
          }
          return this;
        }, w.prototype.finalize = function() {
          var t = this.blocks, e = this.lastByteIndex, r = this.blockCount, n = this.s;
          if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount) for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
          for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e];
          k(n);
        }, w.prototype.toString = w.prototype.hex = function() {
          this.finalize();
          var t = this.blockCount, e = this.s, r = this.outputBlocks, n = this.extraBytes, o = 0, s = 0;
          var a, l = '';
          for (;s < r; ) {
            for (o = 0; o < t && s < r; ++o, ++s) a = e[o], l += i[a >> 4 & 15] + i[15 & a] + i[a >> 12 & 15] + i[a >> 8 & 15] + i[a >> 20 & 15] + i[a >> 16 & 15] + i[a >> 28 & 15] + i[a >> 24 & 15];
            s % t == 0 && (k(e), o = 0);
          }
          return n && (a = e[o], n > 0 && (l += i[a >> 4 & 15] + i[15 & a]), n > 1 && (l += i[a >> 12 & 15] + i[a >> 8 & 15]), n > 2 && (l += i[a >> 20 & 15] + i[a >> 16 & 15])), 
          l;
        }, w.prototype.arrayBuffer = function() {
          this.finalize();
          var t = this.blockCount, e = this.s, r = this.outputBlocks, n = this.extraBytes, i = 0, o = 0;
          var s = this.outputBits >> 3;
          var a;
          a = n ? new ArrayBuffer(r + 1 << 2) : new ArrayBuffer(s);
          var l = new Uint32Array(a);
          for (;o < r; ) {
            for (i = 0; i < t && o < r; ++i, ++o) l[o] = e[i];
            o % t == 0 && k(e);
          }
          return n && (l[i] = e[i], a = a.slice(0, s)), a;
        }, w.prototype.buffer = w.prototype.arrayBuffer, w.prototype.digest = w.prototype.array = function() {
          this.finalize();
          var t = this.blockCount, e = this.s, r = this.outputBlocks, n = this.extraBytes, i = 0, o = 0;
          var s, a, l = [];
          for (;o < r; ) {
            for (i = 0; i < t && o < r; ++i, ++o) s = o << 2, a = e[i], l[s] = 255 & a, l[s + 1] = a >> 8 & 255, l[s + 2] = a >> 16 & 255, 
            l[s + 3] = a >> 24 & 255;
            o % t == 0 && k(e);
          }
          return n && (s = o << 2, a = e[i], n > 0 && (l[s] = 255 & a), n > 1 && (l[s + 1] = a >> 8 & 255), n > 2 && (l[s + 2] = a >> 16 & 255)), 
          l;
        };
        var k = function(t) {
          var e, r, n, i, o, a, l, h, u, c, f, d, m, g, p, v, y, b, w, k, x, A, B, E, _, N, L, S, M, I, C, j, P, T, O, R, U, F, H, D, z, Z, q, G, V, $, W, J, K, Y, X, Q, tt, et, rt, nt, it, ot, st, at, lt, ht, ut;
          for (n = 0; n < 48; n += 2) i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], a = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], 
          l = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], h = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], u = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], 
          c = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], f = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], e = (d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ (a << 1 | l >>> 31), 
          r = (m = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ (l << 1 | a >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, 
          t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = i ^ (h << 1 | u >>> 31), r = o ^ (u << 1 | h >>> 31), t[2] ^= e, 
          t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = a ^ (c << 1 | f >>> 31), 
          r = l ^ (f << 1 | c >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, 
          t[44] ^= e, t[45] ^= r, e = h ^ (d << 1 | m >>> 31), r = u ^ (m << 1 | d >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, 
          t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = c ^ (i << 1 | o >>> 31), r = f ^ (o << 1 | i >>> 31), 
          t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, g = t[0], 
          p = t[1], $ = t[11] << 4 | t[10] >>> 28, W = t[10] << 4 | t[11] >>> 28, S = t[20] << 3 | t[21] >>> 29, M = t[21] << 3 | t[20] >>> 29, 
          at = t[31] << 9 | t[30] >>> 23, lt = t[30] << 9 | t[31] >>> 23, Z = t[40] << 18 | t[41] >>> 14, q = t[41] << 18 | t[40] >>> 14, 
          T = t[2] << 1 | t[3] >>> 31, O = t[3] << 1 | t[2] >>> 31, v = t[13] << 12 | t[12] >>> 20, y = t[12] << 12 | t[13] >>> 20, 
          J = t[22] << 10 | t[23] >>> 22, K = t[23] << 10 | t[22] >>> 22, I = t[33] << 13 | t[32] >>> 19, C = t[32] << 13 | t[33] >>> 19, 
          ht = t[42] << 2 | t[43] >>> 30, ut = t[43] << 2 | t[42] >>> 30, et = t[5] << 30 | t[4] >>> 2, rt = t[4] << 30 | t[5] >>> 2, 
          R = t[14] << 6 | t[15] >>> 26, U = t[15] << 6 | t[14] >>> 26, b = t[25] << 11 | t[24] >>> 21, w = t[24] << 11 | t[25] >>> 21, 
          Y = t[34] << 15 | t[35] >>> 17, X = t[35] << 15 | t[34] >>> 17, j = t[45] << 29 | t[44] >>> 3, P = t[44] << 29 | t[45] >>> 3, 
          E = t[6] << 28 | t[7] >>> 4, _ = t[7] << 28 | t[6] >>> 4, nt = t[17] << 23 | t[16] >>> 9, it = t[16] << 23 | t[17] >>> 9, 
          F = t[26] << 25 | t[27] >>> 7, H = t[27] << 25 | t[26] >>> 7, k = t[36] << 21 | t[37] >>> 11, x = t[37] << 21 | t[36] >>> 11, 
          Q = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, G = t[8] << 27 | t[9] >>> 5, V = t[9] << 27 | t[8] >>> 5, 
          N = t[18] << 20 | t[19] >>> 12, L = t[19] << 20 | t[18] >>> 12, ot = t[29] << 7 | t[28] >>> 25, st = t[28] << 7 | t[29] >>> 25, 
          D = t[38] << 8 | t[39] >>> 24, z = t[39] << 8 | t[38] >>> 24, A = t[48] << 14 | t[49] >>> 18, B = t[49] << 14 | t[48] >>> 18, 
          t[0] = g ^ ~v & b, t[1] = p ^ ~y & w, t[10] = E ^ ~N & S, t[11] = _ ^ ~L & M, t[20] = T ^ ~R & F, t[21] = O ^ ~U & H, t[30] = G ^ ~$ & J, 
          t[31] = V ^ ~W & K, t[40] = et ^ ~nt & ot, t[41] = rt ^ ~it & st, t[2] = v ^ ~b & k, t[3] = y ^ ~w & x, t[12] = N ^ ~S & I, 
          t[13] = L ^ ~M & C, t[22] = R ^ ~F & D, t[23] = U ^ ~H & z, t[32] = $ ^ ~J & Y, t[33] = W ^ ~K & X, t[42] = nt ^ ~ot & at, 
          t[43] = it ^ ~st & lt, t[4] = b ^ ~k & A, t[5] = w ^ ~x & B, t[14] = S ^ ~I & j, t[15] = M ^ ~C & P, t[24] = F ^ ~D & Z, 
          t[25] = H ^ ~z & q, t[34] = J ^ ~Y & Q, t[35] = K ^ ~X & tt, t[44] = ot ^ ~at & ht, t[45] = st ^ ~lt & ut, t[6] = k ^ ~A & g, 
          t[7] = x ^ ~B & p, t[16] = I ^ ~j & E, t[17] = C ^ ~P & _, t[26] = D ^ ~Z & T, t[27] = z ^ ~q & O, t[36] = Y ^ ~Q & G, t[37] = X ^ ~tt & V, 
          t[46] = at ^ ~ht & et, t[47] = lt ^ ~ut & rt, t[8] = A ^ ~g & v, t[9] = B ^ ~p & y, t[18] = j ^ ~E & N, t[19] = P ^ ~_ & L, 
          t[28] = Z ^ ~T & R, t[29] = q ^ ~O & U, t[38] = Q ^ ~G & $, t[39] = tt ^ ~V & W, t[48] = ht ^ ~et & nt, t[49] = ut ^ ~rt & it, 
          t[0] ^= s[n], t[1] ^= s[n + 1];
        };
        if (n) t.exports = d; else for (g = 0; g < m.length; ++g) e[m[g]] = d[m[g]];
      }();
    },
    "./node_modules/minimalistic-assert/index.js": t => {
      function e(t, e) {
        if (!t) throw new Error(e || 'Assertion failed');
      }
      t.exports = e, e.equal = function(t, e, r) {
        if (t != e) throw new Error(r || 'Assertion failed: ' + t + ' != ' + e);
      };
    },
    "./node_modules/pvutils/src/utils.js": (t, e, r) => {
      "use strict";
      function n(t) {
        return new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
      }
      function i(t, e, r) {
        return t instanceof Object == !1 ? r : e in t ? t[e] : r;
      }
      function o(t, e = 0, r = t.byteLength - e, n = !1) {
        let i = "";
        for (const o of new Uint8Array(t, e, r)) {
          const t = o.toString(16).toUpperCase();
          1 === t.length && (i += "0"), i += t, n && (i += " ");
        }
        return i.trim();
      }
      function s(t, e, r, n) {
        return e instanceof ArrayBuffer == !1 ? (t.error = "Wrong parameter: inputBuffer must be \"ArrayBuffer\"", !1) : 0 === e.byteLength ? (t.error = "Wrong parameter: inputBuffer has zero length", 
        !1) : r < 0 ? (t.error = "Wrong parameter: inputOffset less than zero", !1) : n < 0 ? (t.error = "Wrong parameter: inputLength less than zero", 
        !1) : !(e.byteLength - r - n < 0) || (t.error = "End of input reached before message was fully decoded (inconsistent offset and length values)", 
        !1);
      }
      function a(t, e) {
        let r = 0;
        if (1 === t.length) return t[0];
        for (let n = t.length - 1; n >= 0; n--) r += t[t.length - 1 - n] * Math.pow(2, e * n);
        return r;
      }
      function l(t, e, r = -1) {
        const n = r;
        let i = t;
        let o = 0;
        let s = Math.pow(2, e);
        for (let a = 1; a < 8; a++) {
          if (t < s) {
            let t;
            if (n < 0) t = new ArrayBuffer(a), o = a; else {
              if (n < a) return new ArrayBuffer(0);
              t = new ArrayBuffer(n), o = n;
            }
            const r = new Uint8Array(t);
            for (let n = a - 1; n >= 0; n--) {
              const t = Math.pow(2, n * e);
              r[o - n - 1] = Math.floor(i / t), i -= r[o - n - 1] * t;
            }
            return t;
          }
          s *= Math.pow(2, e);
        }
        return new ArrayBuffer(0);
      }
      function h(...t) {
        let e = 0;
        let r = 0;
        for (const o of t) e += o.byteLength;
        const n = new ArrayBuffer(e);
        const i = new Uint8Array(n);
        for (const o of t) i.set(new Uint8Array(o), r), r += o.byteLength;
        return n;
      }
      function u(...t) {
        let e = 0;
        let r = 0;
        for (const o of t) e += o.length;
        const n = new ArrayBuffer(e);
        const i = new Uint8Array(n);
        for (const o of t) i.set(o, r), r += o.length;
        return i;
      }
      function c() {
        const t = new Uint8Array(this.valueHex);
        if (this.valueHex.byteLength >= 2) {
          const e = 255 === t[0] && 128 & t[1];
          const r = 0 === t[0] && 0 == (128 & t[1]);
          (e || r) && this.warnings.push("Needlessly long format");
        }
        const e = new ArrayBuffer(this.valueHex.byteLength);
        const r = new Uint8Array(e);
        for (let s = 0; s < this.valueHex.byteLength; s++) r[s] = 0;
        r[0] = 128 & t[0];
        const n = a(r, 8);
        const i = new ArrayBuffer(this.valueHex.byteLength);
        const o = new Uint8Array(i);
        for (let s = 0; s < this.valueHex.byteLength; s++) o[s] = t[s];
        o[0] &= 127;
        return a(o, 8) - n;
      }
      function f(t) {
        const e = t < 0 ? -1 * t : t;
        let r = 128;
        for (let n = 1; n < 8; n++) {
          if (e <= r) {
            if (t < 0) {
              const t = l(r - e, 8, n);
              return new Uint8Array(t)[0] |= 128, t;
            }
            let i = l(e, 8, n);
            let o = new Uint8Array(i);
            if (128 & o[0]) {
              const t = i.slice(0);
              const e = new Uint8Array(t);
              i = new ArrayBuffer(i.byteLength + 1), o = new Uint8Array(i);
              for (let r = 0; r < t.byteLength; r++) o[r + 1] = e[r];
              o[0] = 0;
            }
            return i;
          }
          r *= Math.pow(2, 8);
        }
        return new ArrayBuffer(0);
      }
      function d(t, e) {
        if (t.byteLength !== e.byteLength) return !1;
        const r = new Uint8Array(t);
        const n = new Uint8Array(e);
        for (let i = 0; i < r.length; i++) if (r[i] !== n[i]) return !1;
        return !0;
      }
      function m(t, e) {
        const r = t.toString(10);
        if (e < r.length) return "";
        const n = e - r.length;
        const i = new Array(n);
        for (let o = 0; o < n; o++) i[o] = "0";
        return i.join("").concat(r);
      }
      r.r(e), r.d(e, {
        getUTCDate: () => n,
        getParametersValue: () => i,
        bufferToHexCodes: () => o,
        checkBufferParams: () => s,
        utilFromBase: () => a,
        utilToBase: () => l,
        utilConcatBuf: () => h,
        utilConcatView: () => u,
        utilDecodeTC: () => c,
        utilEncodeTC: () => f,
        isEqualBuffer: () => d,
        padNumber: () => m,
        toBase64: () => v,
        fromBase64: () => y,
        arrayBufferToString: () => b,
        stringToArrayBuffer: () => w,
        nearestPowerOf2: () => x,
        clearProps: () => A
      });
      const g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
      function v(t, e = !1, r = !1, n = !1) {
        let i = 0;
        let o = 0;
        let s = 0;
        let a = "";
        const l = e ? p : g;
        if (n) {
          let e = 0;
          for (let r = 0; r < t.length; r++) if (0 !== t.charCodeAt(r)) {
            e = r;
            break;
          }
          t = t.slice(e);
        }
        for (;i < t.length; ) {
          const e = t.charCodeAt(i++);
          i >= t.length && (o = 1);
          const n = t.charCodeAt(i++);
          i >= t.length && (s = 1);
          const h = t.charCodeAt(i++);
          const u = e >> 2;
          const c = (3 & e) << 4 | n >> 4;
          let f = (15 & n) << 2 | h >> 6;
          let d = 63 & h;
          1 === o ? f = d = 64 : 1 === s && (d = 64), a += r ? 64 === f ? `${l.charAt(u)}${l.charAt(c)}` : 64 === d ? `${l.charAt(u)}${l.charAt(c)}${l.charAt(f)}` : `${l.charAt(u)}${l.charAt(c)}${l.charAt(f)}${l.charAt(d)}` : `${l.charAt(u)}${l.charAt(c)}${l.charAt(f)}${l.charAt(d)}`;
        }
        return a;
      }
      function y(t, e = !1, r = !1) {
        const n = e ? p : g;
        function i(t) {
          for (let e = 0; e < 64; e++) if (n.charAt(e) === t) return e;
          return 64;
        }
        function o(t) {
          return 64 === t ? 0 : t;
        }
        let s = 0;
        let a = "";
        for (;s < t.length; ) {
          const e = i(t.charAt(s++));
          const r = s >= t.length ? 0 : i(t.charAt(s++));
          const n = s >= t.length ? 0 : i(t.charAt(s++));
          const l = s >= t.length ? 0 : i(t.charAt(s++));
          const h = o(e) << 2 | o(r) >> 4;
          const u = (15 & o(r)) << 4 | o(n) >> 2;
          const c = (3 & o(n)) << 6 | o(l);
          a += String.fromCharCode(h), 64 !== n && (a += String.fromCharCode(u)), 64 !== l && (a += String.fromCharCode(c));
        }
        if (r) {
          let t = -1;
          for (let e = a.length - 1; e >= 0; e--) if (0 !== a.charCodeAt(e)) {
            t = e;
            break;
          }
          a = -1 !== t ? a.slice(0, t + 1) : "";
        }
        return a;
      }
      function b(t) {
        let e = "";
        const r = new Uint8Array(t);
        for (const n of r) e += String.fromCharCode(n);
        return e;
      }
      function w(t) {
        const e = t.length;
        const r = new ArrayBuffer(e);
        const n = new Uint8Array(r);
        for (let i = 0; i < e; i++) n[i] = t.charCodeAt(i);
        return r;
      }
      const k = Math.log(2);
      function x(t) {
        const e = Math.log(t) / k;
        const r = Math.floor(e);
        const n = Math.round(e);
        return r === n ? r : n;
      }
      function A(t, e) {
        for (const r of e) delete t[r];
      }
    },
    "./src/theme/style.css": (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, {
        default: () => v
      });
      var n = r("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
      var i = r.n(n);
      var o = r("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
      var s = r.n(o);
      var a = r("./node_modules/style-loader/dist/runtime/insertBySelector.js");
      var l = r.n(a);
      var h = r("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
      var u = r.n(h);
      var c = r("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
      var f = r.n(c);
      var d = r("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
      var m = r.n(d);
      var g = r("./node_modules/css-loader/dist/cjs.js!./src/theme/style.css");
      var p = {};
      p.styleTagTransform = m(), p.setAttributes = u(), p.insert = l().bind(null, "head"), p.domAPI = s(), p.insertStyleElement = f();
      i()(g.default, p);
      const v = g.default && g.default.locals ? g.default.locals : void 0;
    },
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": t => {
      "use strict";
      var e = [];
      function r(t) {
        var r = -1;
        for (var n = 0; n < e.length; n++) if (e[n].identifier === t) {
          r = n;
          break;
        }
        return r;
      }
      function n(t, n) {
        var o = {};
        var s = [];
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          var h = n.base ? l[0] + n.base : l[0];
          var u = o[h] || 0;
          var c = "".concat(h, " ").concat(u);
          o[h] = u + 1;
          var f = r(c);
          var d = {
            css: l[1],
            media: l[2],
            sourceMap: l[3],
            supports: l[4],
            layer: l[5]
          };
          if (-1 !== f) e[f].references++, e[f].updater(d); else {
            var m = i(d, n);
            n.byIndex = a, e.splice(a, 0, {
              identifier: c,
              updater: m,
              references: 1
            });
          }
          s.push(c);
        }
        return s;
      }
      function i(t, e) {
        var r = e.domAPI(e);
        r.update(t);
        return function(e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer) return;
            r.update(t = e);
          } else r.remove();
        };
      }
      t.exports = function(t, i) {
        var o = n(t = t || [], i = i || {});
        return function(t) {
          t = t || [];
          for (var s = 0; s < o.length; s++) {
            var a = r(o[s]);
            e[a].references--;
          }
          var l = n(t, i);
          for (var h = 0; h < o.length; h++) {
            var u = r(o[h]);
            0 === e[u].references && (e[u].updater(), e.splice(u, 1));
          }
          o = l;
        };
      };
    },
    "./node_modules/style-loader/dist/runtime/insertBySelector.js": t => {
      "use strict";
      var e = {};
      t.exports = function(t, r) {
        var n = function(t) {
          if (void 0 === e[t]) {
            var r = document.querySelector(t);
            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
              r = r.contentDocument.head;
            } catch (n) {
              r = null;
            }
            e[t] = r;
          }
          return e[t];
        }(t);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        n.appendChild(r);
      };
    },
    "./node_modules/style-loader/dist/runtime/insertStyleElement.js": t => {
      "use strict";
      t.exports = function(t) {
        var e = document.createElement("style");
        return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
      };
    },
    "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js": (t, e, r) => {
      "use strict";
      t.exports = function(t) {
        var e = r.nc;
        e && t.setAttribute("nonce", e);
      };
    },
    "./node_modules/style-loader/dist/runtime/styleDomAPI.js": t => {
      "use strict";
      t.exports = function(t) {
        var e = t.insertStyleElement(t);
        return {
          update: function(r) {
            !function(t, e, r) {
              var n = "";
              r.supports && (n += "@supports (".concat(r.supports, ") {")), r.media && (n += "@media ".concat(r.media, " {"));
              var i = void 0 !== r.layer;
              i && (n += "@layer".concat(r.layer.length > 0 ? " ".concat(r.layer) : "", " {")), n += r.css, i && (n += "}"), r.media && (n += "}"), 
              r.supports && (n += "}");
              var o = r.sourceMap;
              o && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), 
              e.styleTagTransform(n, t, e.options);
            }(e, t, r);
          },
          remove: function() {
            !function(t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
            }(e);
          }
        };
      };
    },
    "./node_modules/style-loader/dist/runtime/styleTagTransform.js": t => {
      "use strict";
      t.exports = function(t, e) {
        if (e.styleSheet) e.styleSheet.cssText = t; else {
          for (;e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(t));
        }
      };
    },
    "?8131": () => {}
  };
  var e = {};
  function r(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var o = e[n] = {
      id: n,
      loaded: !1,
      exports: {}
    };
    return t[n].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports;
  }
  (() => {
    r.n = t => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return r.d(e, {
        a: e
      }), e;
    };
  })(), (() => {
    r.d = (t, e) => {
      for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
        enumerable: !0,
        get: e[n]
      });
    };
  })(), (() => {
    r.g = function() {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (t) {
        if ('object' == typeof window) return window;
      }
    }();
  })(), (() => {
    r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
  })(), (() => {
    r.r = t => {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: 'Module'
      }), Object.defineProperty(t, '__esModule', {
        value: !0
      });
    };
  })(), (() => {
    r.nmd = t => (t.paths = [], t.children || (t.children = []), t);
  })();
  var n = {};
  (() => {
    "use strict";
    r.r(n);
    var t = r("./node_modules/@tokenscript/token-negotiator/dist/index.js");
    r("./src/theme/style.css");
    new t.Overlay;
  })();
})();