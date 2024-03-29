(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    0: function (t, e, n) {
        t.exports = n("zUnb")
    }, crnd: function (t, e) {
        function n(t) {
            return Promise.resolve().then(function () {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            })
        }

        n.keys = function () {
            return []
        }, n.resolve = n, t.exports = n, n.id = "crnd"
    }, zUnb: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = function (t, e) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
        };

        function o(t, e) {
            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }

        var i = function () {
            return (i = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };

        function s(t, e, n, r) {
            var o, i = arguments.length, s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s), s
        }

        function a(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
        }

        function u(t) {
            var e = "function" == typeof Symbol && t[Symbol.iterator], n = 0;
            return e ? e.call(t) : {
                next: function () {
                    return t && n >= t.length && (t = void 0), {value: t && t[n++], done: !t}
                }
            }
        }

        function l(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t), s = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (a) {
                o = {error: a}
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        }

        function c() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(l(arguments[e]));
            return t
        }

        var p = Array.isArray || function (t) {
            return t && "number" == typeof t.length
        };

        function h(t) {
            return null !== t && "object" == typeof t
        }

        function f(t) {
            return "function" == typeof t
        }

        function d(t) {
            return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function (t, e) {
                return e + 1 + ") " + t.toString()
            }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
        }

        d.prototype = Object.create(Error.prototype);
        var y = d, v = function () {
            function t(t) {
                this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t)
            }

            var e;
            return t.prototype.unsubscribe = function () {
                var t, e = !1;
                if (!this.closed) {
                    var n = this._parent, r = this._parents, o = this._unsubscribe, i = this._subscriptions;
                    this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                    for (var s = -1, a = r ? r.length : 0; n;) n.remove(this), n = ++s < a && r[s] || null;
                    if (f(o)) try {
                        o.call(this)
                    } catch (l) {
                        e = !0, t = l instanceof y ? m(l.errors) : [l]
                    }
                    if (p(i)) for (s = -1, a = i.length; ++s < a;) {
                        var u = i[s];
                        if (h(u)) try {
                            u.unsubscribe()
                        } catch (l) {
                            e = !0, t = t || [], l instanceof y ? t = t.concat(m(l.errors)) : t.push(l)
                        }
                    }
                    if (e) throw new y(t)
                }
            }, t.prototype.add = function (e) {
                var n = e;
                switch (typeof e) {
                    case"function":
                        n = new t(e);
                    case"object":
                        if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                        if (this.closed) return n.unsubscribe(), n;
                        if (!(n instanceof t)) {
                            var r = n;
                            (n = new t)._subscriptions = [r]
                        }
                        break;
                    default:
                        if (!e) return t.EMPTY;
                        throw new Error("unrecognized teardown " + e + " added to Subscription.")
                }
                if (n._addParent(this)) {
                    var o = this._subscriptions;
                    o ? o.push(n) : this._subscriptions = [n]
                }
                return n
            }, t.prototype.remove = function (t) {
                var e = this._subscriptions;
                if (e) {
                    var n = e.indexOf(t);
                    -1 !== n && e.splice(n, 1)
                }
            }, t.prototype._addParent = function (t) {
                var e = this._parent, n = this._parents;
                return e !== t && (e ? n ? -1 === n.indexOf(t) && (n.push(t), !0) : (this._parents = [t], !0) : (this._parent = t, !0))
            }, t.EMPTY = ((e = new t).closed = !0, e), t
        }();

        function m(t) {
            return t.reduce(function (t, e) {
                return t.concat(e instanceof y ? e.errors : e)
            }, [])
        }

        var g = !1, _ = {
            Promise: void 0, set useDeprecatedSynchronousErrorHandling(t) {
                g = t
            }, get useDeprecatedSynchronousErrorHandling() {
                return g
            }
        };

        function b(t) {
            setTimeout(function () {
                throw t
            })
        }

        var w = {
                closed: !0, next: function (t) {
                }, error: function (t) {
                    if (_.useDeprecatedSynchronousErrorHandling) throw t;
                    b(t)
                }, complete: function () {
                }
            }, S = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
            E = function (t) {
                function e(n, r, o) {
                    var i = t.call(this) || this;
                    switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, arguments.length) {
                        case 0:
                            i.destination = w;
                            break;
                        case 1:
                            if (!n) {
                                i.destination = w;
                                break
                            }
                            if ("object" == typeof n) {
                                n instanceof e ? (i.syncErrorThrowable = n.syncErrorThrowable, i.destination = n, n.add(i)) : (i.syncErrorThrowable = !0, i.destination = new C(i, n));
                                break
                            }
                        default:
                            i.syncErrorThrowable = !0, i.destination = new C(i, n, r, o)
                    }
                    return i
                }

                return o(e, t), e.prototype[S] = function () {
                    return this
                }, e.create = function (t, n, r) {
                    var o = new e(t, n, r);
                    return o.syncErrorThrowable = !1, o
                }, e.prototype.next = function (t) {
                    this.isStopped || this._next(t)
                }, e.prototype.error = function (t) {
                    this.isStopped || (this.isStopped = !0, this._error(t))
                }, e.prototype.complete = function () {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }, e.prototype.unsubscribe = function () {
                    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                }, e.prototype._next = function (t) {
                    this.destination.next(t)
                }, e.prototype._error = function (t) {
                    this.destination.error(t), this.unsubscribe()
                }, e.prototype._complete = function () {
                    this.destination.complete(), this.unsubscribe()
                }, e.prototype._unsubscribeAndRecycle = function () {
                    var t = this._parent, e = this._parents;
                    return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = e, this
                }, e
            }(v), C = function (t) {
                function e(e, n, r, o) {
                    var i, s = t.call(this) || this;
                    s._parentSubscriber = e;
                    var a = s;
                    return f(n) ? i = n : n && (i = n.next, r = n.error, o = n.complete, n !== w && (f((a = Object.create(n)).unsubscribe) && s.add(a.unsubscribe.bind(a)), a.unsubscribe = s.unsubscribe.bind(s))), s._context = a, s._next = i, s._error = r, s._complete = o, s
                }

                return o(e, t), e.prototype.next = function (t) {
                    if (!this.isStopped && this._next) {
                        var e = this._parentSubscriber;
                        _.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                    }
                }, e.prototype.error = function (t) {
                    if (!this.isStopped) {
                        var e = this._parentSubscriber, n = _.useDeprecatedSynchronousErrorHandling;
                        if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe()); else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : b(t), this.unsubscribe(); else {
                            if (this.unsubscribe(), n) throw t;
                            b(t)
                        }
                    }
                }, e.prototype.complete = function () {
                    var t = this;
                    if (!this.isStopped) {
                        var e = this._parentSubscriber;
                        if (this._complete) {
                            var n = function () {
                                return t._complete.call(t._context)
                            };
                            _.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }, e.prototype.__tryOrUnsub = function (t, e) {
                    try {
                        t.call(this._context, e)
                    } catch (n) {
                        if (this.unsubscribe(), _.useDeprecatedSynchronousErrorHandling) throw n;
                        b(n)
                    }
                }, e.prototype.__tryOrSetError = function (t, e, n) {
                    if (!_.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        e.call(this._context, n)
                    } catch (r) {
                        return _.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : (b(r), !0)
                    }
                    return !1
                }, e.prototype._unsubscribe = function () {
                    var t = this._parentSubscriber;
                    this._context = null, this._parentSubscriber = null, t.unsubscribe()
                }, e
            }(E), x = "function" == typeof Symbol && Symbol.observable || "@@observable";

        function T() {
        }

        function k() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return P(t)
        }

        function P(t) {
            return t ? 1 === t.length ? t[0] : function (e) {
                return t.reduce(function (t, e) {
                    return e(t)
                }, e)
            } : T
        }

        var A = function () {
            function t(t) {
                this._isScalar = !1, t && (this._subscribe = t)
            }

            return t.prototype.lift = function (e) {
                var n = new t;
                return n.source = this, n.operator = e, n
            }, t.prototype.subscribe = function (t, e, n) {
                var r = this.operator, o = function (t, e, n) {
                    if (t) {
                        if (t instanceof E) return t;
                        if (t[S]) return t[S]()
                    }
                    return t || e || n ? new E(t, e, n) : new E(w)
                }(t, e, n);
                if (o.add(r ? r.call(o, this.source) : this.source || _.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), _.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
                return o
            }, t.prototype._trySubscribe = function (t) {
                try {
                    return this._subscribe(t)
                } catch (e) {
                    _.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), function (t) {
                        for (; t;) {
                            var e = t.destination;
                            if (t.closed || t.isStopped) return !1;
                            t = e && e instanceof E ? e : null
                        }
                        return !0
                    }(t) ? t.error(e) : console.warn(e)
                }
            }, t.prototype.forEach = function (t, e) {
                var n = this;
                return new (e = N(e))(function (e, r) {
                    var o;
                    o = n.subscribe(function (e) {
                        try {
                            t(e)
                        } catch (n) {
                            r(n), o && o.unsubscribe()
                        }
                    }, r, e)
                })
            }, t.prototype._subscribe = function (t) {
                var e = this.source;
                return e && e.subscribe(t)
            }, t.prototype[x] = function () {
                return this
            }, t.prototype.pipe = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return 0 === t.length ? this : P(t)(this)
            }, t.prototype.toPromise = function (t) {
                var e = this;
                return new (t = N(t))(function (t, n) {
                    var r;
                    e.subscribe(function (t) {
                        return r = t
                    }, function (t) {
                        return n(t)
                    }, function () {
                        return t(r)
                    })
                })
            }, t.create = function (e) {
                return new t(e)
            }, t
        }();

        function N(t) {
            if (t || (t = _.Promise || Promise), !t) throw new Error("no Promise impl found");
            return t
        }

        function R() {
            return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
        }

        R.prototype = Object.create(Error.prototype);
        var I = R, O = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.subject = e, r.subscriber = n, r.closed = !1, r
            }

            return o(e, t), e.prototype.unsubscribe = function () {
                if (!this.closed) {
                    this.closed = !0;
                    var t = this.subject, e = t.observers;
                    if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                        var n = e.indexOf(this.subscriber);
                        -1 !== n && e.splice(n, 1)
                    }
                }
            }, e
        }(v), D = function (t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.destination = e, n
            }

            return o(e, t), e
        }(E), M = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
            }

            return o(e, t), e.prototype[S] = function () {
                return new D(this)
            }, e.prototype.lift = function (t) {
                var e = new j(this, this);
                return e.operator = t, e
            }, e.prototype.next = function (t) {
                if (this.closed) throw new I;
                if (!this.isStopped) for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].next(t)
            }, e.prototype.error = function (t) {
                if (this.closed) throw new I;
                this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].error(t);
                this.observers.length = 0
            }, e.prototype.complete = function () {
                if (this.closed) throw new I;
                this.isStopped = !0;
                for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
                this.observers.length = 0
            }, e.prototype.unsubscribe = function () {
                this.isStopped = !0, this.closed = !0, this.observers = null
            }, e.prototype._trySubscribe = function (e) {
                if (this.closed) throw new I;
                return t.prototype._trySubscribe.call(this, e)
            }, e.prototype._subscribe = function (t) {
                if (this.closed) throw new I;
                return this.hasError ? (t.error(this.thrownError), v.EMPTY) : this.isStopped ? (t.complete(), v.EMPTY) : (this.observers.push(t), new O(this, t))
            }, e.prototype.asObservable = function () {
                var t = new A;
                return t.source = this, t
            }, e.create = function (t, e) {
                return new j(t, e)
            }, e
        }(A), j = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.destination = e, r.source = n, r
            }

            return o(e, t), e.prototype.next = function (t) {
                var e = this.destination;
                e && e.next && e.next(t)
            }, e.prototype.error = function (t) {
                var e = this.destination;
                e && e.error && this.destination.error(t)
            }, e.prototype.complete = function () {
                var t = this.destination;
                t && t.complete && this.destination.complete()
            }, e.prototype._subscribe = function (t) {
                return this.source ? this.source.subscribe(t) : v.EMPTY
            }, e
        }(M);

        function F(t) {
            return t && "function" == typeof t.schedule
        }

        var L = function (t) {
            function e(e, n, r) {
                var o = t.call(this) || this;
                return o.parent = e, o.outerValue = n, o.outerIndex = r, o.index = 0, o
            }

            return o(e, t), e.prototype._next = function (t) {
                this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
            }, e.prototype._error = function (t) {
                this.parent.notifyError(t, this), this.unsubscribe()
            }, e.prototype._complete = function () {
                this.parent.notifyComplete(this), this.unsubscribe()
            }, e
        }(E), U = function (t) {
            return function (e) {
                for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
                e.closed || e.complete()
            }
        }, V = function (t) {
            return function (e) {
                return t.then(function (t) {
                    e.closed || (e.next(t), e.complete())
                }, function (t) {
                    return e.error(t)
                }).then(null, b), e
            }
        };

        function H() {
            return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }

        var z = H(), B = function (t) {
            return function (e) {
                for (var n = t[z](); ;) {
                    var r = n.next();
                    if (r.done) {
                        e.complete();
                        break
                    }
                    if (e.next(r.value), e.closed) break
                }
                return "function" == typeof n.return && e.add(function () {
                    n.return && n.return()
                }), e
            }
        }, q = function (t) {
            return function (e) {
                var n = t[x]();
                if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                return n.subscribe(e)
            }
        }, Q = function (t) {
            return t && "number" == typeof t.length && "function" != typeof t
        };

        function K(t) {
            return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        }

        var W = function (t) {
            if (t instanceof A) return function (e) {
                return t._isScalar ? (e.next(t.value), void e.complete()) : t.subscribe(e)
            };
            if (t && "function" == typeof t[x]) return q(t);
            if (Q(t)) return U(t);
            if (K(t)) return V(t);
            if (t && "function" == typeof t[z]) return B(t);
            var e = h(t) ? "an invalid object" : "'" + t + "'";
            throw new TypeError("You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
        };

        function Z(t, e, n, r, o) {
            if (void 0 === o && (o = new L(t, n, r)), !o.closed) return W(e)(o)
        }

        var G = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return o(e, t), e.prototype.notifyNext = function (t, e, n, r, o) {
                this.destination.next(e)
            }, e.prototype.notifyError = function (t, e) {
                this.destination.error(t)
            }, e.prototype.notifyComplete = function (t) {
                this.destination.complete()
            }, e
        }(E);

        function Y(t, e) {
            return function (n) {
                if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                return n.lift(new $(t, e))
            }
        }

        var $ = function () {
            function t(t, e) {
                this.project = t, this.thisArg = e
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new J(t, this.project, this.thisArg))
            }, t
        }(), J = function (t) {
            function e(e, n, r) {
                var o = t.call(this, e) || this;
                return o.project = n, o.count = 0, o.thisArg = r || o, o
            }

            return o(e, t), e.prototype._next = function (t) {
                var e;
                try {
                    e = this.project.call(this.thisArg, t, this.count++)
                } catch (n) {
                    return void this.destination.error(n)
                }
                this.destination.next(e)
            }, e
        }(E);

        function X(t, e) {
            return new A(e ? function (n) {
                var r = new v, o = 0;
                return r.add(e.schedule(function () {
                    o !== t.length ? (n.next(t[o++]), n.closed || r.add(this.schedule())) : n.complete()
                })), r
            } : U(t))
        }

        function tt(t, e) {
            if (!e) return t instanceof A ? t : new A(W(t));
            if (null != t) {
                if (function (t) {
                    return t && "function" == typeof t[x]
                }(t)) return function (t, e) {
                    return new A(e ? function (n) {
                        var r = new v;
                        return r.add(e.schedule(function () {
                            var o = t[x]();
                            r.add(o.subscribe({
                                next: function (t) {
                                    r.add(e.schedule(function () {
                                        return n.next(t)
                                    }))
                                }, error: function (t) {
                                    r.add(e.schedule(function () {
                                        return n.error(t)
                                    }))
                                }, complete: function () {
                                    r.add(e.schedule(function () {
                                        return n.complete()
                                    }))
                                }
                            }))
                        })), r
                    } : q(t))
                }(t, e);
                if (K(t)) return function (t, e) {
                    return new A(e ? function (n) {
                        var r = new v;
                        return r.add(e.schedule(function () {
                            return t.then(function (t) {
                                r.add(e.schedule(function () {
                                    n.next(t), r.add(e.schedule(function () {
                                        return n.complete()
                                    }))
                                }))
                            }, function (t) {
                                r.add(e.schedule(function () {
                                    return n.error(t)
                                }))
                            })
                        })), r
                    } : V(t))
                }(t, e);
                if (Q(t)) return X(t, e);
                if (function (t) {
                    return t && "function" == typeof t[z]
                }(t) || "string" == typeof t) return function (t, e) {
                    if (!t) throw new Error("Iterable cannot be null");
                    return new A(e ? function (n) {
                        var r, o = new v;
                        return o.add(function () {
                            r && "function" == typeof r.return && r.return()
                        }), o.add(e.schedule(function () {
                            r = t[z](), o.add(e.schedule(function () {
                                if (!n.closed) {
                                    var t, e;
                                    try {
                                        var o = r.next();
                                        t = o.value, e = o.done
                                    } catch (i) {
                                        return void n.error(i)
                                    }
                                    e ? n.complete() : (n.next(t), this.schedule())
                                }
                            }))
                        })), o
                    } : B(t))
                }(t, e)
            }
            throw new TypeError((null !== t && typeof t || t) + " is not observable")
        }

        function et(t, e, n) {
            return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? function (r) {
                return r.pipe(et(function (n, r) {
                    return tt(t(n, r)).pipe(Y(function (t, o) {
                        return e(n, t, r, o)
                    }))
                }, n))
            } : ("number" == typeof e && (n = e), function (e) {
                return e.lift(new nt(t, n))
            })
        }

        var nt = function () {
            function t(t, e) {
                void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new rt(t, this.project, this.concurrent))
            }, t
        }(), rt = function (t) {
            function e(e, n, r) {
                void 0 === r && (r = Number.POSITIVE_INFINITY);
                var o = t.call(this, e) || this;
                return o.project = n, o.concurrent = r, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
            }

            return o(e, t), e.prototype._next = function (t) {
                this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
            }, e.prototype._tryNext = function (t) {
                var e, n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (r) {
                    return void this.destination.error(r)
                }
                this.active++, this._innerSub(e, t, n)
            }, e.prototype._innerSub = function (t, e, n) {
                var r = new L(this, void 0, void 0);
                this.destination.add(r), Z(this, t, e, n, r)
            }, e.prototype._complete = function () {
                this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
            }, e.prototype.notifyNext = function (t, e, n, r, o) {
                this.destination.next(e)
            }, e.prototype.notifyComplete = function (t) {
                var e = this.buffer;
                this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }, e
        }(G);

        function ot(t) {
            return t
        }

        function it(t) {
            return void 0 === t && (t = Number.POSITIVE_INFINITY), et(ot, t)
        }

        function st() {
            return function (t) {
                return t.lift(new at(t))
            }
        }

        var at = function () {
            function t(t) {
                this.connectable = t
            }

            return t.prototype.call = function (t, e) {
                var n = this.connectable;
                n._refCount++;
                var r = new ut(t, n), o = e.subscribe(r);
                return r.closed || (r.connection = n.connect()), o
            }, t
        }(), ut = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.connectable = n, r
            }

            return o(e, t), e.prototype._unsubscribe = function () {
                var t = this.connectable;
                if (t) {
                    this.connectable = null;
                    var e = t._refCount;
                    if (e <= 0) this.connection = null; else if (t._refCount = e - 1, e > 1) this.connection = null; else {
                        var n = this.connection, r = t._connection;
                        this.connection = null, !r || n && r !== n || r.unsubscribe()
                    }
                } else this.connection = null
            }, e
        }(E), lt = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
            }

            return o(e, t), e.prototype._subscribe = function (t) {
                return this.getSubject().subscribe(t)
            }, e.prototype.getSubject = function () {
                var t = this._subject;
                return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
            }, e.prototype.connect = function () {
                var t = this._connection;
                return t || (this._isComplete = !1, (t = this._connection = new v).add(this.source.subscribe(new pt(this.getSubject(), this))), t.closed ? (this._connection = null, t = v.EMPTY) : this._connection = t), t
            }, e.prototype.refCount = function () {
                return st()(this)
            }, e
        }(A).prototype, ct = {
            operator: {value: null},
            _refCount: {value: 0, writable: !0},
            _subject: {value: null, writable: !0},
            _connection: {value: null, writable: !0},
            _subscribe: {value: lt._subscribe},
            _isComplete: {value: lt._isComplete, writable: !0},
            getSubject: {value: lt.getSubject},
            connect: {value: lt.connect},
            refCount: {value: lt.refCount}
        }, pt = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.connectable = n, r
            }

            return o(e, t), e.prototype._error = function (e) {
                this._unsubscribe(), t.prototype._error.call(this, e)
            }, e.prototype._complete = function () {
                this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
            }, e.prototype._unsubscribe = function () {
                var t = this.connectable;
                if (t) {
                    this.connectable = null;
                    var e = t._connection;
                    t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                }
            }, e
        }(D);

        function ht() {
            return new M
        }

        function ft(t) {
            for (var e in t) if (t[e] === ft) return e;
            throw Error("Could not find renamed property on target object.")
        }

        var dt = ft({ngInjectableDef: ft});

        function yt(t) {
            return {providedIn: t.providedIn || null, factory: t.factory, value: void 0}
        }

        function vt(t) {
            return t && t.hasOwnProperty(dt) ? t[dt] : null
        }

        var mt = function () {
            function t(t, e) {
                this._desc = t, this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0 !== e ? yt({
                    providedIn: e.providedIn || "root",
                    factory: e.factory
                }) : void 0
            }

            return t.prototype.toString = function () {
                return "InjectionToken " + this._desc
            }, t
        }(), gt = "__parameters__";

        function _t(t, e, n) {
            var r = function (t) {
                return function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    if (t) {
                        var r = t.apply(void 0, c(e));
                        for (var o in r) this[o] = r[o]
                    }
                }
            }(e);

            function o() {
                for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                if (this instanceof o) return r.apply(this, e), this;
                var i = new ((t = o).bind.apply(t, c([void 0], e)));
                return s.annotation = i, s;

                function s(t, e, n) {
                    for (var r = t.hasOwnProperty(gt) ? t[gt] : Object.defineProperty(t, gt, {value: []})[gt]; r.length <= n;) r.push(null);
                    return (r[n] = r[n] || []).push(i), t
                }
            }

            return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = t, o.annotationCls = o, o
        }

        var bt = new mt("AnalyzeForEntryComponents"), wt = "undefined" != typeof window && window,
            St = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
            Et = "undefined" != typeof global && global || wt || St, Ct = Promise.resolve(0), xt = null;

        function Tt() {
            if (!xt) {
                var t = Et.Symbol;
                if (t && t.iterator) xt = t.iterator; else for (var e = Object.getOwnPropertyNames(Map.prototype), n = 0; n < e.length; ++n) {
                    var r = e[n];
                    "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (xt = r)
                }
            }
            return xt
        }

        function kt(t) {
            "undefined" == typeof Zone ? Ct.then(function () {
                t && t.apply(null, null)
            }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
        }

        function Pt(t, e) {
            return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
        }

        function At(t) {
            if ("string" == typeof t) return t;
            if (t instanceof Array) return "[" + t.map(At).join(", ") + "]";
            if (null == t) return "" + t;
            if (t.overriddenName) return "" + t.overriddenName;
            if (t.name) return "" + t.name;
            var e = t.toString();
            if (null == e) return "" + e;
            var n = e.indexOf("\n");
            return -1 === n ? e : e.substring(0, n)
        }

        var Nt = ft({__forward_ref__: ft});

        function Rt(t) {
            return t.__forward_ref__ = Rt, t.toString = function () {
                return At(this())
            }, t
        }

        function It(t) {
            var e = t;
            return "function" == typeof e && e.hasOwnProperty(Nt) && e.__forward_ref__ === Rt ? e() : t
        }

        var Ot, Dt = function (t) {
            return t[t.Emulated = 0] = "Emulated", t[t.Native = 1] = "Native", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom", t
        }({}), Mt = _t("Inject", function (t) {
            return {token: t}
        }), jt = _t("Optional"), Ft = _t("Self"), Lt = _t("SkipSelf"), Ut = function (t) {
            return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t
        }({}), Vt = void 0;

        function Ht(t) {
            var e = Vt;
            return Vt = t, e
        }

        function zt(t, e) {
            return void 0 === e && (e = Ut.Default), (Ot || function (t, e) {
                if (void 0 === e && (e = Ut.Default), void 0 === Vt) throw new Error("inject() must be called from an injection context");
                return null === Vt ? function (t, e, n) {
                    var r = vt(t);
                    if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value;
                    if (n & Ut.Optional) return null;
                    throw new Error("Injector: NOT_FOUND [" + At(t) + "]")
                }(t, 0, e) : Vt.get(t, e & Ut.Optional ? null : void 0, e)
            })(t, e)
        }

        var Bt = /([A-Z])/g;

        function qt(t) {
            try {
                return null != t ? t.toString().slice(0, 30) : t
            } catch (e) {
                return "[ERROR] Exception while trying to serialize the value"
            }
        }

        function Qt(t, e) {
            var n = Zt(t), r = Zt(e);
            return n && r ? function (t, e, n) {
                for (var r = t[Tt()](), o = e[Tt()](); ;) {
                    var i = r.next(), s = o.next();
                    if (i.done && s.done) return !0;
                    if (i.done || s.done) return !1;
                    if (!n(i.value, s.value)) return !1
                }
            }(t, e, Qt) : !(n || !t || "object" != typeof t && "function" != typeof t || r || !e || "object" != typeof e && "function" != typeof e) || Pt(t, e)
        }

        var Kt = function () {
            function t(t) {
                this.wrapped = t
            }

            return t.wrap = function (e) {
                return new t(e)
            }, t.unwrap = function (e) {
                return t.isWrapped(e) ? e.wrapped : e
            }, t.isWrapped = function (e) {
                return e instanceof t
            }, t
        }(), Wt = function () {
            function t(t, e, n) {
                this.previousValue = t, this.currentValue = e, this.firstChange = n
            }

            return t.prototype.isFirstChange = function () {
                return this.firstChange
            }, t
        }();

        function Zt(t) {
            return !!Gt(t) && (Array.isArray(t) || !(t instanceof Map) && Tt() in t)
        }

        function Gt(t) {
            return null !== t && ("function" == typeof t || "object" == typeof t)
        }

        function Yt() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        }

        var $t = "__source", Jt = new Object, Xt = new mt("INJECTOR"), te = function () {
            function t() {
            }

            return t.prototype.get = function (t, e) {
                if (void 0 === e && (e = Jt), e === Jt) throw new Error("NullInjectorError: No provider for " + At(t) + "!");
                return e
            }, t
        }(), ee = function () {
            function t() {
            }

            return t.create = function (t, e) {
                return Array.isArray(t) ? new pe(t, e) : new pe(t.providers, t.parent, t.name || null)
            }, t.THROW_IF_NOT_FOUND = Jt, t.NULL = new te, t.ngInjectableDef = yt({
                providedIn: "any",
                factory: function () {
                    return zt(Xt)
                }
            }), t.__NG_ELEMENT_ID__ = function () {
                return ne()
            }, t
        }(), ne = Yt, re = function (t) {
            return t
        }, oe = [], ie = re, se = function () {
            return Array.prototype.slice.call(arguments)
        }, ae = ft({provide: String, useValue: ft}), ue = ee.NULL, le = /\n/gm, ce = "\u0275", pe = function () {
            function t(t, e, n) {
                void 0 === e && (e = ue), void 0 === n && (n = null), this.parent = e, this.source = n;
                var r = this._records = new Map;
                r.set(ee, {token: ee, fn: re, deps: oe, value: this, useNew: !1}), r.set(Xt, {
                    token: Xt,
                    fn: re,
                    deps: oe,
                    value: this,
                    useNew: !1
                }), function t(e, n) {
                    if (n) if ((n = It(n)) instanceof Array) for (var r = 0; r < n.length; r++) t(e, n[r]); else {
                        if ("function" == typeof n) throw de("Function/Class not supported", n);
                        if (!n || "object" != typeof n || !n.provide) throw de("Unexpected provider", n);
                        var o = It(n.provide), i = function (t) {
                            var e = function (t) {
                                var e = oe, n = t.deps;
                                if (n && n.length) {
                                    e = [];
                                    for (var r = 0; r < n.length; r++) {
                                        var o = 6;
                                        if ((u = It(n[r])) instanceof Array) for (var i = 0, s = u; i < s.length; i++) {
                                            var a = s[i];
                                            a instanceof jt || a == jt ? o |= 1 : a instanceof Lt || a == Lt ? o &= -3 : a instanceof Ft || a == Ft ? o &= -5 : u = a instanceof Mt ? a.token : It(a)
                                        }
                                        e.push({token: u, options: o})
                                    }
                                } else if (t.useExisting) {
                                    var u;
                                    e = [{token: u = It(t.useExisting), options: 6}]
                                } else if (!(n || ae in t)) throw de("'deps' required", t);
                                return e
                            }(t), n = re, r = oe, o = !1, i = It(t.provide);
                            if (ae in t) r = t.useValue; else if (t.useFactory) n = t.useFactory; else if (t.useExisting) ; else if (t.useClass) o = !0, n = It(t.useClass); else {
                                if ("function" != typeof i) throw de("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", t);
                                o = !0, n = i
                            }
                            return {deps: e, fn: n, useNew: o, value: r}
                        }(n);
                        if (!0 === n.multi) {
                            var s = e.get(o);
                            if (s) {
                                if (s.fn !== se) throw he(o)
                            } else e.set(o, s = {token: n.provide, deps: [], useNew: !1, fn: se, value: oe});
                            s.deps.push({token: o = n, options: 6})
                        }
                        var a = e.get(o);
                        if (a && a.fn == se) throw he(o);
                        e.set(o, i)
                    }
                }(r, t)
            }

            return t.prototype.get = function (t, e, n) {
                void 0 === n && (n = Ut.Default);
                var r = this._records.get(t);
                try {
                    return function t(e, n, r, o, i, s) {
                        try {
                            return function (e, n, r, o, i, s) {
                                var a, u;
                                if (!n || s & Ut.SkipSelf) s & Ut.Self || (u = o.get(e, i, Ut.Default)); else {
                                    if ((u = n.value) == ie) throw Error(ce + "Circular dependency");
                                    if (u === oe) {
                                        n.value = ie;
                                        var l = n.useNew, p = n.fn, h = n.deps, f = oe;
                                        if (h.length) {
                                            f = [];
                                            for (var d = 0; d < h.length; d++) {
                                                var y = h[d], v = y.options, m = 2 & v ? r.get(y.token) : void 0;
                                                f.push(t(y.token, m, r, m || 4 & v ? o : ue, 1 & v ? null : ee.THROW_IF_NOT_FOUND, Ut.Default))
                                            }
                                        }
                                        n.value = u = l ? new ((a = p).bind.apply(a, c([void 0], f))) : p.apply(void 0, f)
                                    }
                                }
                                return u
                            }(e, n, r, o, i, s)
                        } catch (a) {
                            throw a instanceof Error || (a = new Error(a)), (a.ngTempTokenPath = a.ngTempTokenPath || []).unshift(e), n && n.value == ie && (n.value = oe), a
                        }
                    }(t, r, this._records, this.parent, e, n)
                } catch (i) {
                    var o = i.ngTempTokenPath;
                    throw t[$t] && o.unshift(t[$t]), i.message = fe("\n" + i.message, o, this.source), i.ngTokenPath = o, i.ngTempTokenPath = null, i
                }
            }, t.prototype.toString = function () {
                var t = [];
                return this._records.forEach(function (e, n) {
                    return t.push(At(n))
                }), "StaticInjector[" + t.join(", ") + "]"
            }, t
        }();

        function he(t) {
            return de("Cannot mix multi providers and regular providers", t)
        }

        function fe(t, e, n) {
            void 0 === n && (n = null), t = t && "\n" === t.charAt(0) && t.charAt(1) == ce ? t.substr(2) : t;
            var r = At(e);
            if (e instanceof Array) r = e.map(At).join(" -> "); else if ("object" == typeof e) {
                var o = [];
                for (var i in e) if (e.hasOwnProperty(i)) {
                    var s = e[i];
                    o.push(i + ":" + ("string" == typeof s ? JSON.stringify(s) : At(s)))
                }
                r = "{" + o.join(", ") + "}"
            }
            return "StaticInjectorError" + (n ? "(" + n + ")" : "") + "[" + r + "]: " + t.replace(le, "\n  ")
        }

        function de(t, e) {
            return new Error(fe(t, e))
        }

        var ye = new mt("The presence of this token marks an injector as being the root injector."), ve = function () {
            return function () {
            }
        }(), me = function () {
            return function () {
            }
        }();

        function ge(t) {
            var e = Error("No component factory found for " + At(t) + ". Did you add it to @NgModule.entryComponents?");
            return e[_e] = t, e
        }

        var _e = "ngComponent", be = function () {
            function t() {
            }

            return t.prototype.resolveComponentFactory = function (t) {
                throw ge(t)
            }, t
        }(), we = function () {
            function t() {
            }

            return t.NULL = new be, t
        }(), Se = function () {
            function t(t, e, n) {
                this._parent = e, this._ngModule = n, this._factories = new Map;
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    this._factories.set(o.componentType, o)
                }
            }

            return t.prototype.resolveComponentFactory = function (t) {
                var e = this._factories.get(t);
                if (!e && this._parent && (e = this._parent.resolveComponentFactory(t)), !e) throw ge(t);
                return new Ee(e, this._ngModule)
            }, t
        }(), Ee = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.factory = e, r.ngModule = n, r.selector = e.selector, r.componentType = e.componentType, r.ngContentSelectors = e.ngContentSelectors, r.inputs = e.inputs, r.outputs = e.outputs, r
            }

            return o(e, t), e.prototype.create = function (t, e, n, r) {
                return this.factory.create(t, e, n, r || this.ngModule)
            }, e
        }(me), Ce = function () {
            return function () {
            }
        }(), xe = function () {
            return function () {
            }
        }(), Te = function () {
            function t(t) {
                this.nativeElement = t
            }

            return t.__NG_ELEMENT_ID__ = function () {
                return ke(t)
            }, t
        }(), ke = Yt, Pe = function () {
            return function () {
            }
        }(), Ae = function () {
            return function () {
            }
        }(), Ne = function (t) {
            return t[t.Important = 1] = "Important", t[t.DashCase = 2] = "DashCase", t
        }({}), Re = function () {
            function t() {
            }

            return t.__NG_ELEMENT_ID__ = function () {
                return Ie()
            }, t
        }(), Ie = Yt, Oe = function (t) {
            return t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL", t
        }({}), De = function () {
            return function () {
            }
        }(), Me = new (function () {
            return function (t) {
                this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
            }
        }())("7.2.11"), je = !0, Fe = !1;

        function Le() {
            return Fe = !0, je
        }

        var Ue = function () {
                function t(t) {
                    if (this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) {
                        var e = this.inertDocument.createElement("html");
                        this.inertDocument.appendChild(e), this.inertBodyElement = this.inertDocument.createElement("body"), e.appendChild(this.inertBodyElement)
                    }
                    this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && function () {
                        try {
                            return !!window.DOMParser
                        } catch (t) {
                            return !1
                        }
                    }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR
                }

                return t.prototype.getInertBodyElement_XHR = function (t) {
                    t = "<body><remove></remove>" + t + "</body>";
                    try {
                        t = encodeURI(t)
                    } catch (r) {
                        return null
                    }
                    var e = new XMLHttpRequest;
                    e.responseType = "document", e.open("GET", "data:text/html;charset=utf-8," + t, !1), e.send(void 0);
                    var n = e.response.body;
                    return n.removeChild(n.firstChild), n
                }, t.prototype.getInertBodyElement_DOMParser = function (t) {
                    t = "<body><remove></remove>" + t + "</body>";
                    try {
                        var e = (new window.DOMParser).parseFromString(t, "text/html").body;
                        return e.removeChild(e.firstChild), e
                    } catch (n) {
                        return null
                    }
                }, t.prototype.getInertBodyElement_InertDocument = function (t) {
                    var e = this.inertDocument.createElement("template");
                    return "content" in e ? (e.innerHTML = t, e) : (this.inertBodyElement.innerHTML = t, this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement)
                }, t.prototype.stripCustomNsAttrs = function (t) {
                    for (var e = t.attributes, n = e.length - 1; 0 < n; n--) {
                        var r = e.item(n).name;
                        "xmlns:ns1" !== r && 0 !== r.indexOf("ns1:") || t.removeAttribute(r)
                    }
                    for (var o = t.firstChild; o;) o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o), o = o.nextSibling
                }, t
            }(), Ve = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
            He = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

        function ze(t) {
            return (t = String(t)).match(Ve) || t.match(He) ? t : (Le() && console.warn("WARNING: sanitizing unsafe URL value " + t + " (see http://g.co/ng/security#xss)"), "unsafe:" + t)
        }

        function Be(t) {
            var e, n, r = {};
            try {
                for (var o = u(t.split(",")), i = o.next(); !i.done; i = o.next()) r[i.value] = !0
            } catch (s) {
                e = {error: s}
            } finally {
                try {
                    i && !i.done && (n = o.return) && n.call(o)
                } finally {
                    if (e) throw e.error
                }
            }
            return r
        }

        function qe() {
            for (var t, e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            var o = {};
            try {
                for (var i = u(n), s = i.next(); !s.done; s = i.next()) {
                    var a = s.value;
                    for (var l in a) a.hasOwnProperty(l) && (o[l] = !0)
                }
            } catch (c) {
                t = {error: c}
            } finally {
                try {
                    s && !s.done && (e = i.return) && e.call(i)
                } finally {
                    if (t) throw t.error
                }
            }
            return o
        }

        var Qe, Ke = Be("area,br,col,hr,img,wbr"), We = Be("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            Ze = Be("rp,rt"), Ge = qe(Ze, We),
            Ye = qe(Ke, qe(We, Be("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), qe(Ze, Be("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Ge),
            $e = Be("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), Je = Be("srcset"),
            Xe = qe($e, Je, Be("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width")),
            tn = Be("script,style,template"), en = function () {
                function t() {
                    this.sanitizedSomething = !1, this.buf = []
                }

                return t.prototype.sanitizeChildren = function (t) {
                    for (var e = t.firstChild, n = !0; e;) if (e.nodeType === Node.ELEMENT_NODE ? n = this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0, n && e.firstChild) e = e.firstChild; else for (; e;) {
                        e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                        var r = this.checkClobberedElement(e, e.nextSibling);
                        if (r) {
                            e = r;
                            break
                        }
                        e = this.checkClobberedElement(e, e.parentNode)
                    }
                    return this.buf.join("")
                }, t.prototype.startElement = function (t) {
                    var e, n = t.nodeName.toLowerCase();
                    if (!Ye.hasOwnProperty(n)) return this.sanitizedSomething = !0, !tn.hasOwnProperty(n);
                    this.buf.push("<"), this.buf.push(n);
                    for (var r = t.attributes, o = 0; o < r.length; o++) {
                        var i = r.item(o), s = i.name, a = s.toLowerCase();
                        if (Xe.hasOwnProperty(a)) {
                            var u = i.value;
                            $e[a] && (u = ze(u)), Je[a] && (e = u, u = (e = String(e)).split(",").map(function (t) {
                                return ze(t.trim())
                            }).join(", ")), this.buf.push(" ", s, '="', on(u), '"')
                        } else this.sanitizedSomething = !0
                    }
                    return this.buf.push(">"), !0
                }, t.prototype.endElement = function (t) {
                    var e = t.nodeName.toLowerCase();
                    Ye.hasOwnProperty(e) && !Ke.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">"))
                }, t.prototype.chars = function (t) {
                    this.buf.push(on(t))
                }, t.prototype.checkClobberedElement = function (t, e) {
                    if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + t.outerHTML);
                    return e
                }, t
            }(), nn = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, rn = /([^\#-~ |!])/g;

        function on(t) {
            return t.replace(/&/g, "&amp;").replace(nn, function (t) {
                return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
            }).replace(rn, function (t) {
                return "&#" + t.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function sn(t) {
            return "content" in t && function (t) {
                return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName
            }(t) ? t.content : null
        }

        var an = function (t) {
                function e(e) {
                    void 0 === e && (e = !1);
                    var n = t.call(this) || this;
                    return n.__isAsync = e, n
                }

                return o(e, t), e.prototype.emit = function (e) {
                    t.prototype.next.call(this, e)
                }, e.prototype.subscribe = function (e, n, r) {
                    var o, i = function (t) {
                        return null
                    }, s = function () {
                        return null
                    };
                    e && "object" == typeof e ? (o = this.__isAsync ? function (t) {
                        setTimeout(function () {
                            return e.next(t)
                        })
                    } : function (t) {
                        e.next(t)
                    }, e.error && (i = this.__isAsync ? function (t) {
                        setTimeout(function () {
                            return e.error(t)
                        })
                    } : function (t) {
                        e.error(t)
                    }), e.complete && (s = this.__isAsync ? function () {
                        setTimeout(function () {
                            return e.complete()
                        })
                    } : function () {
                        e.complete()
                    })) : (o = this.__isAsync ? function (t) {
                        setTimeout(function () {
                            return e(t)
                        })
                    } : function (t) {
                        e(t)
                    }, n && (i = this.__isAsync ? function (t) {
                        setTimeout(function () {
                            return n(t)
                        })
                    } : function (t) {
                        n(t)
                    }), r && (s = this.__isAsync ? function () {
                        setTimeout(function () {
                            return r()
                        })
                    } : function () {
                        r()
                    }));
                    var a = t.prototype.subscribe.call(this, o, i, s);
                    return e instanceof v && e.add(a), a
                }, e
            }(M), un = function () {
                function t() {
                }

                return t.__NG_ELEMENT_ID__ = function () {
                    return ln(t, Te)
                }, t
            }(), ln = Yt,
            cn = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
            pn = /^url\(([^)]+)\)$/, hn = function () {
                return function () {
                }
            }(), fn = "ngDebugContext", dn = "ngOriginalError", yn = "ngErrorLogger";

        function vn(t) {
            return t[fn]
        }

        function mn(t) {
            return t[dn]
        }

        function gn(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            t.error.apply(t, c(e))
        }

        var _n = function () {
            function t() {
                this._console = console
            }

            return t.prototype.handleError = function (t) {
                var e = this._findOriginalError(t), n = this._findContext(t), r = function (t) {
                    return t[yn] || gn
                }(t);
                r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n)
            }, t.prototype._findContext = function (t) {
                return t ? vn(t) ? vn(t) : this._findContext(mn(t)) : null
            }, t.prototype._findOriginalError = function (t) {
                for (var e = mn(t); e && mn(e);) e = mn(e);
                return e
            }, t
        }();

        function bn(t) {
            return !!t && "function" == typeof t.then
        }

        function wn(t) {
            return !!t && "function" == typeof t.subscribe
        }

        var Sn = new mt("Application Initializer"), En = function () {
                function t(t) {
                    var e = this;
                    this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise(function (t, n) {
                        e.resolve = t, e.reject = n
                    })
                }

                return t.prototype.runInitializers = function () {
                    var t = this;
                    if (!this.initialized) {
                        var e = [], n = function () {
                            t.done = !0, t.resolve()
                        };
                        if (this.appInits) for (var r = 0; r < this.appInits.length; r++) {
                            var o = this.appInits[r]();
                            bn(o) && e.push(o)
                        }
                        Promise.all(e).then(function () {
                            n()
                        }).catch(function (e) {
                            t.reject(e)
                        }), 0 === e.length && n(), this.initialized = !0
                    }
                }, t
            }(), Cn = new mt("AppId"), xn = new mt("Platform Initializer"), Tn = new mt("Platform ID"),
            kn = new mt("appBootstrapListener"), Pn = function () {
                function t() {
                }

                return t.prototype.log = function (t) {
                    console.log(t)
                }, t.prototype.warn = function (t) {
                    console.warn(t)
                }, t
            }();

        function An() {
            throw new Error("Runtime compiler is not loaded")
        }

        var Nn, Rn, In = An, On = An, Dn = An, Mn = An, jn = function () {
            function t() {
                this.compileModuleSync = In, this.compileModuleAsync = On, this.compileModuleAndAllComponentsSync = Dn, this.compileModuleAndAllComponentsAsync = Mn
            }

            return t.prototype.clearCache = function () {
            }, t.prototype.clearCacheFor = function (t) {
            }, t.prototype.getModuleId = function (t) {
            }, t
        }(), Fn = function () {
            return function () {
            }
        }();

        function Ln() {
            var t = Et.wtf;
            return !(!t || !(Nn = t.trace) || (Rn = Nn.events, 0))
        }

        var Un = Ln();

        function Vn(t, e) {
            return null
        }

        var Hn = Un ? function (t, e) {
            return void 0 === e && (e = null), Rn.createScope(t, e)
        } : function (t, e) {
            return Vn
        }, zn = Un ? function (t, e) {
            return Nn.leaveScope(t, e), e
        } : function (t, e) {
            return e
        }, Bn = function () {
            function t(t) {
                var e, n = t.enableLongStackTrace, r = void 0 !== n && n;
                if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new an(!1), this.onMicrotaskEmpty = new an(!1), this.onStable = new an(!1), this.onError = new an(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), r && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), (e = this)._inner = e._inner.fork({
                    name: "angular",
                    properties: {isAngularZone: !0},
                    onInvokeTask: function (t, n, r, o, i, s) {
                        try {
                            return Wn(e), t.invokeTask(r, o, i, s)
                        } finally {
                            Zn(e)
                        }
                    },
                    onInvoke: function (t, n, r, o, i, s, a) {
                        try {
                            return Wn(e), t.invoke(r, o, i, s, a)
                        } finally {
                            Zn(e)
                        }
                    },
                    onHasTask: function (t, n, r, o) {
                        t.hasTask(r, o), n === r && ("microTask" == o.change ? (e.hasPendingMicrotasks = o.microTask, Kn(e)) : "macroTask" == o.change && (e.hasPendingMacrotasks = o.macroTask))
                    },
                    onHandleError: function (t, n, r, o) {
                        return t.handleError(r, o), e.runOutsideAngular(function () {
                            return e.onError.emit(o)
                        }), !1
                    }
                })
            }

            return t.isInAngularZone = function () {
                return !0 === Zone.current.get("isAngularZone")
            }, t.assertInAngularZone = function () {
                if (!t.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
            }, t.assertNotInAngularZone = function () {
                if (t.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
            }, t.prototype.run = function (t, e, n) {
                return this._inner.run(t, e, n)
            }, t.prototype.runTask = function (t, e, n, r) {
                var o = this._inner, i = o.scheduleEventTask("NgZoneEvent: " + r, t, Qn, qn, qn);
                try {
                    return o.runTask(i, e, n)
                } finally {
                    o.cancelTask(i)
                }
            }, t.prototype.runGuarded = function (t, e, n) {
                return this._inner.runGuarded(t, e, n)
            }, t.prototype.runOutsideAngular = function (t) {
                return this._outer.run(t)
            }, t
        }();

        function qn() {
        }

        var Qn = {};

        function Kn(t) {
            if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
                t._nesting++, t.onMicrotaskEmpty.emit(null)
            } finally {
                if (t._nesting--, !t.hasPendingMicrotasks) try {
                    t.runOutsideAngular(function () {
                        return t.onStable.emit(null)
                    })
                } finally {
                    t.isStable = !0
                }
            }
        }

        function Wn(t) {
            t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
        }

        function Zn(t) {
            t._nesting--, Kn(t)
        }

        var Gn, Yn = function () {
            function t() {
                this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new an, this.onMicrotaskEmpty = new an, this.onStable = new an, this.onError = new an
            }

            return t.prototype.run = function (t) {
                return t()
            }, t.prototype.runGuarded = function (t) {
                return t()
            }, t.prototype.runOutsideAngular = function (t) {
                return t()
            }, t.prototype.runTask = function (t) {
                return t()
            }, t
        }(), $n = function () {
            function t(t) {
                var e = this;
                this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run(function () {
                    e.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                })
            }

            return t.prototype._watchAngularEvents = function () {
                var t = this;
                this._ngZone.onUnstable.subscribe({
                    next: function () {
                        t._didWork = !0, t._isZoneStable = !1
                    }
                }), this._ngZone.runOutsideAngular(function () {
                    t._ngZone.onStable.subscribe({
                        next: function () {
                            Bn.assertNotInAngularZone(), kt(function () {
                                t._isZoneStable = !0, t._runCallbacksIfReady()
                            })
                        }
                    })
                })
            }, t.prototype.increasePendingRequestCount = function () {
                return this._pendingCount += 1, this._didWork = !0, this._pendingCount
            }, t.prototype.decreasePendingRequestCount = function () {
                if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                return this._runCallbacksIfReady(), this._pendingCount
            }, t.prototype.isStable = function () {
                return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
            }, t.prototype._runCallbacksIfReady = function () {
                var t = this;
                if (this.isStable()) kt(function () {
                    for (; 0 !== t._callbacks.length;) {
                        var e = t._callbacks.pop();
                        clearTimeout(e.timeoutId), e.doneCb(t._didWork)
                    }
                    t._didWork = !1
                }); else {
                    var e = this.getPendingTasks();
                    this._callbacks = this._callbacks.filter(function (t) {
                        return !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)
                    }), this._didWork = !0
                }
            }, t.prototype.getPendingTasks = function () {
                return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(function (t) {
                    return {source: t.source, creationLocation: t.creationLocation, data: t.data}
                }) : []
            }, t.prototype.addCallback = function (t, e, n) {
                var r = this, o = -1;
                e && e > 0 && (o = setTimeout(function () {
                    r._callbacks = r._callbacks.filter(function (t) {
                        return t.timeoutId !== o
                    }), t(r._didWork, r.getPendingTasks())
                }, e)), this._callbacks.push({doneCb: t, timeoutId: o, updateCb: n})
            }, t.prototype.whenStable = function (t, e, n) {
                if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                this.addCallback(t, e, n), this._runCallbacksIfReady()
            }, t.prototype.getPendingRequestCount = function () {
                return this._pendingCount
            }, t.prototype.findProviders = function (t, e, n) {
                return []
            }, t
        }(), Jn = function () {
            function t() {
                this._applications = new Map, Xn.addToWindow(this)
            }

            return t.prototype.registerApplication = function (t, e) {
                this._applications.set(t, e)
            }, t.prototype.unregisterApplication = function (t) {
                this._applications.delete(t)
            }, t.prototype.unregisterAllApplications = function () {
                this._applications.clear()
            }, t.prototype.getTestability = function (t) {
                return this._applications.get(t) || null
            }, t.prototype.getAllTestabilities = function () {
                return Array.from(this._applications.values())
            }, t.prototype.getAllRootElements = function () {
                return Array.from(this._applications.keys())
            }, t.prototype.findTestabilityInTree = function (t, e) {
                return void 0 === e && (e = !0), Xn.findTestabilityInTree(this, t, e)
            }, s([a("design:paramtypes", [])], t)
        }(), Xn = new (function () {
            function t() {
            }

            return t.prototype.addToWindow = function (t) {
            }, t.prototype.findTestabilityInTree = function (t, e, n) {
                return null
            }, t
        }()), tr = new mt("AllowMultipleToken"), er = function () {
            return function (t, e) {
                this.name = t, this.token = e
            }
        }();

        function nr(t, e, n) {
            void 0 === n && (n = []);
            var r = "Platform: " + e, o = new mt(r);
            return function (e) {
                void 0 === e && (e = []);
                var i = rr();
                if (!i || i.injector.get(tr, !1)) if (t) t(n.concat(e).concat({provide: o, useValue: !0})); else {
                    var s = n.concat(e).concat({provide: o, useValue: !0});
                    !function (t) {
                        if (Gn && !Gn.destroyed && !Gn.injector.get(tr, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                        Gn = t.get(or);
                        var e = t.get(xn, null);
                        e && e.forEach(function (t) {
                            return t()
                        })
                    }(ee.create({providers: s, name: r}))
                }
                return function (t) {
                    var e = rr();
                    if (!e) throw new Error("No platform exists!");
                    if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                    return e
                }(o)
            }
        }

        function rr() {
            return Gn && !Gn.destroyed ? Gn : null
        }

        var or = function () {
            function t(t) {
                this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
            }

            return t.prototype.bootstrapModuleFactory = function (t, e) {
                var n, r = this,
                    o = "noop" === (n = e ? e.ngZone : void 0) ? new Yn : ("zone.js" === n ? void 0 : n) || new Bn({enableLongStackTrace: Le()}),
                    i = [{provide: Bn, useValue: o}];
                return o.run(function () {
                    var e = ee.create({providers: i, parent: r.injector, name: t.moduleType.name}), n = t.create(e),
                        s = n.injector.get(_n, null);
                    if (!s) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                    return n.onDestroy(function () {
                        return ar(r._modules, n)
                    }), o.runOutsideAngular(function () {
                        return o.onError.subscribe({
                            next: function (t) {
                                s.handleError(t)
                            }
                        })
                    }), function (t, e, o) {
                        try {
                            var i = ((s = n.injector.get(En)).runInitializers(), s.donePromise.then(function () {
                                return r._moduleDoBootstrap(n), n
                            }));
                            return bn(i) ? i.catch(function (n) {
                                throw e.runOutsideAngular(function () {
                                    return t.handleError(n)
                                }), n
                            }) : i
                        } catch (a) {
                            throw e.runOutsideAngular(function () {
                                return t.handleError(a)
                            }), a
                        }
                        var s
                    }(s, o)
                })
            }, t.prototype.bootstrapModule = function (t, e) {
                var n = this;
                void 0 === e && (e = []);
                var r = ir({}, e);
                return function (t, e, n) {
                    return t.get(Fn).createCompiler([e]).compileModuleAsync(n)
                }(this.injector, r, t).then(function (t) {
                    return n.bootstrapModuleFactory(t, r)
                })
            }, t.prototype._moduleDoBootstrap = function (t) {
                var e = t.injector.get(sr);
                if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(function (t) {
                    return e.bootstrap(t)
                }); else {
                    if (!t.instance.ngDoBootstrap) throw new Error("The module " + At(t.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');
                    t.instance.ngDoBootstrap(e)
                }
                this._modules.push(t)
            }, t.prototype.onDestroy = function (t) {
                this._destroyListeners.push(t)
            }, Object.defineProperty(t.prototype, "injector", {
                get: function () {
                    return this._injector
                }, enumerable: !0, configurable: !0
            }), t.prototype.destroy = function () {
                if (this._destroyed) throw new Error("The platform has already been destroyed!");
                this._modules.slice().forEach(function (t) {
                    return t.destroy()
                }), this._destroyListeners.forEach(function (t) {
                    return t()
                }), this._destroyed = !0
            }, Object.defineProperty(t.prototype, "destroyed", {
                get: function () {
                    return this._destroyed
                }, enumerable: !0, configurable: !0
            }), t
        }();

        function ir(t, e) {
            return Array.isArray(e) ? e.reduce(ir, t) : i({}, t, e)
        }

        var sr = function () {
            function t(t, e, n, r, o, i) {
                var s = this;
                this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = o, this._initStatus = i, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = Le(), this._zone.onMicrotaskEmpty.subscribe({
                    next: function () {
                        s._zone.run(function () {
                            s.tick()
                        })
                    }
                });
                var a = new A(function (t) {
                    s._stable = s._zone.isStable && !s._zone.hasPendingMacrotasks && !s._zone.hasPendingMicrotasks, s._zone.runOutsideAngular(function () {
                        t.next(s._stable), t.complete()
                    })
                }), u = new A(function (t) {
                    var e;
                    s._zone.runOutsideAngular(function () {
                        e = s._zone.onStable.subscribe(function () {
                            Bn.assertNotInAngularZone(), kt(function () {
                                s._stable || s._zone.hasPendingMacrotasks || s._zone.hasPendingMicrotasks || (s._stable = !0, t.next(!0))
                            })
                        })
                    });
                    var n = s._zone.onUnstable.subscribe(function () {
                        Bn.assertInAngularZone(), s._stable && (s._stable = !1, s._zone.runOutsideAngular(function () {
                            t.next(!1)
                        }))
                    });
                    return function () {
                        e.unsubscribe(), n.unsubscribe()
                    }
                });
                this.isStable = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = Number.POSITIVE_INFINITY, r = null, o = t[t.length - 1];
                    return F(o) ? (r = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof o && (n = t.pop()), null === r && 1 === t.length && t[0] instanceof A ? t[0] : it(n)(X(t, r))
                }(a, u.pipe(function (t) {
                    return st()((e = ht, function (t) {
                        var n;
                        n = "function" == typeof e ? e : function () {
                            return e
                        };
                        var r = Object.create(t, ct);
                        return r.source = t, r.subjectFactory = n, r
                    })(t));
                    var e
                }))
            }

            var e;
            return e = t, t.prototype.bootstrap = function (t, e) {
                var n, r = this;
                if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                n = t instanceof me ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
                var o = n instanceof Ee ? null : this._injector.get(Ce), i = n.create(ee.NULL, [], e || n.selector, o);
                i.onDestroy(function () {
                    r._unloadComponent(i)
                });
                var s = i.injector.get($n, null);
                return s && i.injector.get(Jn).registerApplication(i.location.nativeElement, s), this._loadComponent(i), Le() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), i
            }, t.prototype.tick = function () {
                var t = this;
                if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                var n = e._tickScope();
                try {
                    this._runningTick = !0, this._views.forEach(function (t) {
                        return t.detectChanges()
                    }), this._enforceNoNewChanges && this._views.forEach(function (t) {
                        return t.checkNoChanges()
                    })
                } catch (r) {
                    this._zone.runOutsideAngular(function () {
                        return t._exceptionHandler.handleError(r)
                    })
                } finally {
                    this._runningTick = !1, zn(n)
                }
            }, t.prototype.attachView = function (t) {
                var e = t;
                this._views.push(e), e.attachToAppRef(this)
            }, t.prototype.detachView = function (t) {
                var e = t;
                ar(this._views, e), e.detachFromAppRef()
            }, t.prototype._loadComponent = function (t) {
                this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(kn, []).concat(this._bootstrapListeners).forEach(function (e) {
                    return e(t)
                })
            }, t.prototype._unloadComponent = function (t) {
                this.detachView(t.hostView), ar(this.components, t)
            }, t.prototype.ngOnDestroy = function () {
                this._views.slice().forEach(function (t) {
                    return t.destroy()
                })
            }, Object.defineProperty(t.prototype, "viewCount", {
                get: function () {
                    return this._views.length
                }, enumerable: !0, configurable: !0
            }), t._tickScope = Hn("ApplicationRef#tick()"), t
        }();

        function ar(t, e) {
            var n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }

        var ur = function () {
            function t() {
                this.dirty = !0, this._results = [], this.changes = new an, this.length = 0
            }

            return t.prototype.map = function (t) {
                return this._results.map(t)
            }, t.prototype.filter = function (t) {
                return this._results.filter(t)
            }, t.prototype.find = function (t) {
                return this._results.find(t)
            }, t.prototype.reduce = function (t, e) {
                return this._results.reduce(t, e)
            }, t.prototype.forEach = function (t) {
                this._results.forEach(t)
            }, t.prototype.some = function (t) {
                return this._results.some(t)
            }, t.prototype.toArray = function () {
                return this._results.slice()
            }, t.prototype[Tt()] = function () {
                return this._results[Tt()]()
            }, t.prototype.toString = function () {
                return this._results.toString()
            }, t.prototype.reset = function (t) {
                this._results = function t(e) {
                    return e.reduce(function (e, n) {
                        var r = Array.isArray(n) ? t(n) : n;
                        return e.concat(r)
                    }, [])
                }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
            }, t.prototype.notifyOnChanges = function () {
                this.changes.emit(this)
            }, t.prototype.setDirty = function () {
                this.dirty = !0
            }, t.prototype.destroy = function () {
                this.changes.complete(), this.changes.unsubscribe()
            }, t
        }(), lr = function () {
            return function () {
            }
        }(), cr = {factoryPathPrefix: "", factoryPathSuffix: ".ngfactory"}, pr = function () {
            function t(t, e) {
                this._compiler = t, this._config = e || cr
            }

            return t.prototype.load = function (t) {
                return this._compiler instanceof jn ? this.loadFactory(t) : this.loadAndCompile(t)
            }, t.prototype.loadAndCompile = function (t) {
                var e = this, r = l(t.split("#"), 2), o = r[0], i = r[1];
                return void 0 === i && (i = "default"), n("crnd")(o).then(function (t) {
                    return t[i]
                }).then(function (t) {
                    return hr(t, o, i)
                }).then(function (t) {
                    return e._compiler.compileModuleAsync(t)
                })
            }, t.prototype.loadFactory = function (t) {
                var e = l(t.split("#"), 2), r = e[0], o = e[1], i = "NgFactory";
                return void 0 === o && (o = "default", i = ""), n("crnd")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then(function (t) {
                    return t[o + i]
                }).then(function (t) {
                    return hr(t, r, o)
                })
            }, t
        }();

        function hr(t, e, n) {
            if (!t) throw new Error("Cannot find '" + n + "' in '" + e + "'");
            return t
        }

        var fr = function () {
            function t() {
            }

            return t.__NG_ELEMENT_ID__ = function () {
                return dr(t, Te)
            }, t
        }(), dr = Yt, yr = function () {
            function t() {
            }

            return t.__NG_ELEMENT_ID__ = function () {
                return vr()
            }, t
        }(), vr = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        }, mr = function () {
            return function (t, e) {
                this.name = t, this.callback = e
            }
        }(), gr = function () {
            function t(t, e, n) {
                this.listeners = [], this.parent = null, this._debugContext = n, this.nativeNode = t, e && e instanceof _r && e.addChild(this)
            }

            return Object.defineProperty(t.prototype, "injector", {
                get: function () {
                    return this._debugContext.injector
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "componentInstance", {
                get: function () {
                    return this._debugContext.component
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "context", {
                get: function () {
                    return this._debugContext.context
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "references", {
                get: function () {
                    return this._debugContext.references
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "providerTokens", {
                get: function () {
                    return this._debugContext.providerTokens
                }, enumerable: !0, configurable: !0
            }), t
        }(), _r = function (t) {
            function e(e, n, r) {
                var o = t.call(this, e, n, r) || this;
                return o.properties = {}, o.attributes = {}, o.classes = {}, o.styles = {}, o.childNodes = [], o.nativeElement = e, o
            }

            return o(e, t), e.prototype.addChild = function (t) {
                t && (this.childNodes.push(t), t.parent = this)
            }, e.prototype.removeChild = function (t) {
                var e = this.childNodes.indexOf(t);
                -1 !== e && (t.parent = null, this.childNodes.splice(e, 1))
            }, e.prototype.insertChildrenAfter = function (t, e) {
                var n, r = this, o = this.childNodes.indexOf(t);
                -1 !== o && ((n = this.childNodes).splice.apply(n, c([o + 1, 0], e)), e.forEach(function (e) {
                    e.parent && e.parent.removeChild(e), t.parent = r
                }))
            }, e.prototype.insertBefore = function (t, e) {
                var n = this.childNodes.indexOf(t);
                -1 === n ? this.addChild(e) : (e.parent && e.parent.removeChild(e), e.parent = this, this.childNodes.splice(n, 0, e))
            }, e.prototype.query = function (t) {
                return this.queryAll(t)[0] || null
            }, e.prototype.queryAll = function (t) {
                var e = [];
                return function t(e, n, r) {
                    e.childNodes.forEach(function (e) {
                        e instanceof _r && (n(e) && r.push(e), t(e, n, r))
                    })
                }(this, t, e), e
            }, e.prototype.queryAllNodes = function (t) {
                var e = [];
                return function t(e, n, r) {
                    e instanceof _r && e.childNodes.forEach(function (e) {
                        n(e) && r.push(e), e instanceof _r && t(e, n, r)
                    })
                }(this, t, e), e
            }, Object.defineProperty(e.prototype, "children", {
                get: function () {
                    return this.childNodes.filter(function (t) {
                        return t instanceof e
                    })
                }, enumerable: !0, configurable: !0
            }), e.prototype.triggerEventHandler = function (t, e) {
                this.listeners.forEach(function (n) {
                    n.name == t && n.callback(e)
                })
            }, e
        }(gr), br = new Map, wr = function (t) {
            return br.get(t) || null
        };

        function Sr(t) {
            br.set(t.nativeNode, t)
        }

        var Er = function () {
            function t() {
            }

            return t.prototype.supports = function (t) {
                return Zt(t)
            }, t.prototype.create = function (t) {
                return new xr(t)
            }, t
        }(), Cr = function (t, e) {
            return e
        }, xr = function () {
            function t(t) {
                this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || Cr
            }

            return t.prototype.forEachItem = function (t) {
                var e;
                for (e = this._itHead; null !== e; e = e._next) t(e)
            }, t.prototype.forEachOperation = function (t) {
                for (var e = this._itHead, n = this._removalsHead, r = 0, o = null; e || n;) {
                    var i = !n || e && e.currentIndex < Ar(n, r, o) ? e : n, s = Ar(i, r, o), a = i.currentIndex;
                    if (i === n) r--, n = n._nextRemoved; else if (e = e._next, null == i.previousIndex) r++; else {
                        o || (o = []);
                        var u = s - r, l = a - r;
                        if (u != l) {
                            for (var c = 0; c < u; c++) {
                                var p = c < o.length ? o[c] : o[c] = 0, h = p + c;
                                l <= h && h < u && (o[c] = p + 1)
                            }
                            o[i.previousIndex] = l - u
                        }
                    }
                    s !== a && t(i, s, a)
                }
            }, t.prototype.forEachPreviousItem = function (t) {
                var e;
                for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e)
            }, t.prototype.forEachAddedItem = function (t) {
                var e;
                for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
            }, t.prototype.forEachMovedItem = function (t) {
                var e;
                for (e = this._movesHead; null !== e; e = e._nextMoved) t(e)
            }, t.prototype.forEachRemovedItem = function (t) {
                var e;
                for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
            }, t.prototype.forEachIdentityChange = function (t) {
                var e;
                for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e)
            }, t.prototype.diff = function (t) {
                if (null == t && (t = []), !Zt(t)) throw new Error("Error trying to diff '" + At(t) + "'. Only arrays and iterables are allowed");
                return this.check(t) ? this : null
            }, t.prototype.onDestroy = function () {
            }, t.prototype.check = function (t) {
                var e = this;
                this._reset();
                var n, r, o, i = this._itHead, s = !1;
                if (Array.isArray(t)) {
                    this.length = t.length;
                    for (var a = 0; a < this.length; a++) o = this._trackByFn(a, r = t[a]), null !== i && Pt(i.trackById, o) ? (s && (i = this._verifyReinsertion(i, r, o, a)), Pt(i.item, r) || this._addIdentityChange(i, r)) : (i = this._mismatch(i, r, o, a), s = !0), i = i._next
                } else n = 0, function (t, e) {
                    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e(t[n]); else for (var r = t[Tt()](), o = void 0; !(o = r.next()).done;) e(o.value)
                }(t, function (t) {
                    o = e._trackByFn(n, t), null !== i && Pt(i.trackById, o) ? (s && (i = e._verifyReinsertion(i, t, o, n)), Pt(i.item, t) || e._addIdentityChange(i, t)) : (i = e._mismatch(i, t, o, n), s = !0), i = i._next, n++
                }), this.length = n;
                return this._truncate(i), this.collection = t, this.isDirty
            }, Object.defineProperty(t.prototype, "isDirty", {
                get: function () {
                    return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                }, enumerable: !0, configurable: !0
            }), t.prototype._reset = function () {
                if (this.isDirty) {
                    var t = void 0, e = void 0;
                    for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
                    for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
                    this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                }
            }, t.prototype._mismatch = function (t, e, n, r) {
                var o;
                return null === t ? o = this._itTail : (o = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Pt(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, o, r)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Pt(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, o, r)) : t = this._addAfter(new Tr(e, n), o, r), t
            }, t.prototype._verifyReinsertion = function (t, e, n, r) {
                var o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                return null !== o ? t = this._reinsertAfter(o, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t
            }, t.prototype._truncate = function (t) {
                for (; null !== t;) {
                    var e = t._next;
                    this._addToRemovals(this._unlink(t)), t = e
                }
                null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
            }, t.prototype._reinsertAfter = function (t, e, n) {
                null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                var r = t._prevRemoved, o = t._nextRemoved;
                return null === r ? this._removalsHead = o : r._nextRemoved = o, null === o ? this._removalsTail = r : o._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t
            }, t.prototype._moveAfter = function (t, e, n) {
                return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t
            }, t.prototype._addAfter = function (t, e, n) {
                return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
            }, t.prototype._insertAfter = function (t, e, n) {
                var r = null === e ? this._itHead : e._next;
                return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new Pr), this._linkedRecords.put(t), t.currentIndex = n, t
            }, t.prototype._remove = function (t) {
                return this._addToRemovals(this._unlink(t))
            }, t.prototype._unlink = function (t) {
                null !== this._linkedRecords && this._linkedRecords.remove(t);
                var e = t._prev, n = t._next;
                return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t
            }, t.prototype._addToMoves = function (t, e) {
                return t.previousIndex === e ? t : (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t, t)
            }, t.prototype._addToRemovals = function (t) {
                return null === this._unlinkedRecords && (this._unlinkedRecords = new Pr), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
            }, t.prototype._addIdentityChange = function (t, e) {
                return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
            }, t
        }(), Tr = function () {
            return function (t, e) {
                this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
            }
        }(), kr = function () {
            function t() {
                this._head = null, this._tail = null
            }

            return t.prototype.add = function (t) {
                null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
            }, t.prototype.get = function (t, e) {
                var n;
                for (n = this._head; null !== n; n = n._nextDup) if ((null === e || e <= n.currentIndex) && Pt(n.trackById, t)) return n;
                return null
            }, t.prototype.remove = function (t) {
                var e = t._prevDup, n = t._nextDup;
                return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
            }, t
        }(), Pr = function () {
            function t() {
                this.map = new Map
            }

            return t.prototype.put = function (t) {
                var e = t.trackById, n = this.map.get(e);
                n || (n = new kr, this.map.set(e, n)), n.add(t)
            }, t.prototype.get = function (t, e) {
                var n = this.map.get(t);
                return n ? n.get(t, e) : null
            }, t.prototype.remove = function (t) {
                var e = t.trackById;
                return this.map.get(e).remove(t) && this.map.delete(e), t
            }, Object.defineProperty(t.prototype, "isEmpty", {
                get: function () {
                    return 0 === this.map.size
                }, enumerable: !0, configurable: !0
            }), t.prototype.clear = function () {
                this.map.clear()
            }, t
        }();

        function Ar(t, e, n) {
            var r = t.previousIndex;
            if (null === r) return r;
            var o = 0;
            return n && r < n.length && (o = n[r]), r + e + o
        }

        var Nr = function () {
                function t() {
                }

                return t.prototype.supports = function (t) {
                    return t instanceof Map || Gt(t)
                }, t.prototype.create = function () {
                    return new Rr
                }, t
            }(), Rr = function () {
                function t() {
                    this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
                }

                return Object.defineProperty(t.prototype, "isDirty", {
                    get: function () {
                        return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                    }, enumerable: !0, configurable: !0
                }), t.prototype.forEachItem = function (t) {
                    var e;
                    for (e = this._mapHead; null !== e; e = e._next) t(e)
                }, t.prototype.forEachPreviousItem = function (t) {
                    var e;
                    for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e)
                }, t.prototype.forEachChangedItem = function (t) {
                    var e;
                    for (e = this._changesHead; null !== e; e = e._nextChanged) t(e)
                }, t.prototype.forEachAddedItem = function (t) {
                    var e;
                    for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
                }, t.prototype.forEachRemovedItem = function (t) {
                    var e;
                    for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
                }, t.prototype.diff = function (t) {
                    if (t) {
                        if (!(t instanceof Map || Gt(t))) throw new Error("Error trying to diff '" + At(t) + "'. Only maps and objects are allowed")
                    } else t = new Map;
                    return this.check(t) ? this : null
                }, t.prototype.onDestroy = function () {
                }, t.prototype.check = function (t) {
                    var e = this;
                    this._reset();
                    var n = this._mapHead;
                    if (this._appendAfter = null, this._forEach(t, function (t, r) {
                        if (n && n.key === r) e._maybeAddToChanges(n, t), e._appendAfter = n, n = n._next; else {
                            var o = e._getOrCreateRecordForKey(r, t);
                            n = e._insertBeforeOrAppend(n, o)
                        }
                    }), n) {
                        n._prev && (n._prev._next = null), this._removalsHead = n;
                        for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
                    }
                    return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                }, t.prototype._insertBeforeOrAppend = function (t, e) {
                    if (t) {
                        var n = t._prev;
                        return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t
                    }
                    return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null
                }, t.prototype._getOrCreateRecordForKey = function (t, e) {
                    if (this._records.has(t)) {
                        var n = this._records.get(t);
                        this._maybeAddToChanges(n, e);
                        var r = n._prev, o = n._next;
                        return r && (r._next = o), o && (o._prev = r), n._next = null, n._prev = null, n
                    }
                    var i = new Ir(t);
                    return this._records.set(t, i), i.currentValue = e, this._addToAdditions(i), i
                }, t.prototype._reset = function () {
                    if (this.isDirty) {
                        var t = void 0;
                        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
                        for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
                        for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                    }
                }, t.prototype._maybeAddToChanges = function (t, e) {
                    Pt(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t))
                }, t.prototype._addToAdditions = function (t) {
                    null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
                }, t.prototype._addToChanges = function (t) {
                    null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
                }, t.prototype._forEach = function (t, e) {
                    t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(function (n) {
                        return e(t[n], n)
                    })
                }, t
            }(), Ir = function () {
                return function (t) {
                    this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
                }
            }(), Or = function () {
                function t(t) {
                    this.factories = t
                }

                return t.create = function (e, n) {
                    if (null != n) {
                        var r = n.factories.slice();
                        e = e.concat(r)
                    }
                    return new t(e)
                }, t.extend = function (e) {
                    return {
                        provide: t, useFactory: function (n) {
                            if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                            return t.create(e, n)
                        }, deps: [[t, new Lt, new jt]]
                    }
                }, t.prototype.find = function (t) {
                    var e, n = this.factories.find(function (e) {
                        return e.supports(t)
                    });
                    if (null != n) return n;
                    throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((e = t).name || typeof e) + "'")
                }, t.ngInjectableDef = yt({
                    providedIn: "root", factory: function () {
                        return new t([new Er])
                    }
                }), t
            }(), Dr = function () {
                function t(t) {
                    this.factories = t
                }

                return t.create = function (e, n) {
                    if (n) {
                        var r = n.factories.slice();
                        e = e.concat(r)
                    }
                    return new t(e)
                }, t.extend = function (e) {
                    return {
                        provide: t, useFactory: function (n) {
                            if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                            return t.create(e, n)
                        }, deps: [[t, new Lt, new jt]]
                    }
                }, t.prototype.find = function (t) {
                    var e = this.factories.find(function (e) {
                        return e.supports(t)
                    });
                    if (e) return e;
                    throw new Error("Cannot find a differ supporting object '" + t + "'")
                }, t.ngInjectableDef = yt({
                    providedIn: "root", factory: function () {
                        return new t([new Nr])
                    }
                }), t
            }(), Mr = [new Nr], jr = new Or([new Er]), Fr = new Dr(Mr),
            Lr = nr(null, "core", [{provide: Tn, useValue: "unknown"}, {provide: or, deps: [ee]}, {
                provide: Jn,
                deps: []
            }, {provide: Pn, deps: []}]), Ur = new mt("LocaleId");

        function Vr() {
            return jr
        }

        function Hr() {
            return Fr
        }

        function zr(t) {
            return t || "en-US"
        }

        var Br = function () {
            return function (t) {
            }
        }();

        function qr(t, e, n) {
            var r = t.state, o = 1792 & r;
            return o === e ? (t.state = -1793 & r | n, t.initIndex = -1, !0) : o === n
        }

        function Qr(t, e, n) {
            return (1792 & t.state) === e && t.initIndex <= n && (t.initIndex = n + 1, !0)
        }

        function Kr(t, e) {
            return t.nodes[e]
        }

        function Wr(t, e) {
            return t.nodes[e]
        }

        function Zr(t, e) {
            return t.nodes[e]
        }

        function Gr(t, e) {
            return t.nodes[e]
        }

        function Yr(t, e) {
            return t.nodes[e]
        }

        var $r = {
            setCurrentNode: void 0,
            createRootView: void 0,
            createEmbeddedView: void 0,
            createComponentView: void 0,
            createNgModuleRef: void 0,
            overrideProvider: void 0,
            overrideComponentView: void 0,
            clearOverrides: void 0,
            checkAndUpdateView: void 0,
            checkNoChangesView: void 0,
            destroyView: void 0,
            resolveDep: void 0,
            createDebugContext: void 0,
            handleEvent: void 0,
            updateDirectives: void 0,
            updateRenderer: void 0,
            dirtyParentQueries: void 0
        };

        function Jr(t, e, n, r) {
            var o = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + e + "'. Current value: '" + n + "'.";
            return r && (o += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"), function (t, e) {
                var n = new Error(t);
                return Xr(n, e), n
            }(o, t)
        }

        function Xr(t, e) {
            t[fn] = e, t[yn] = e.logError.bind(e)
        }

        function to(t) {
            return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + t)
        }

        var eo = function () {
        }, no = new Map;

        function ro(t) {
            var e = no.get(t);
            return e || (e = At(t) + "_" + no.size, no.set(t, e)), e
        }

        var oo = "$$undefined", io = "$$empty";

        function so(t) {
            return {id: oo, styles: t.styles, encapsulation: t.encapsulation, data: t.data}
        }

        var ao = 0;

        function uo(t, e, n, r) {
            return !(!(2 & t.state) && Pt(t.oldValues[e.bindingIndex + n], r))
        }

        function lo(t, e, n, r) {
            return !!uo(t, e, n, r) && (t.oldValues[e.bindingIndex + n] = r, !0)
        }

        function co(t, e, n, r) {
            var o = t.oldValues[e.bindingIndex + n];
            if (1 & t.state || !Qt(o, r)) {
                var i = e.bindings[n].name;
                throw Jr($r.createDebugContext(t, e.nodeIndex), i + ": " + o, i + ": " + r, 0 != (1 & t.state))
            }
        }

        function po(t) {
            for (var e = t; e;) 2 & e.def.flags && (e.state |= 8), e = e.viewContainerParent || e.parent
        }

        function ho(t, e) {
            for (var n = t; n && n !== e;) n.state |= 64, n = n.viewContainerParent || n.parent
        }

        function fo(t, e, n, r) {
            try {
                return po(33554432 & t.def.nodes[e].flags ? Wr(t, e).componentView : t), $r.handleEvent(t, e, n, r)
            } catch (o) {
                t.root.errorHandler.handleError(o)
            }
        }

        function yo(t) {
            return t.parent ? Wr(t.parent, t.parentNodeDef.nodeIndex) : null
        }

        function vo(t) {
            return t.parent ? t.parentNodeDef.parent : null
        }

        function mo(t, e) {
            switch (201347067 & e.flags) {
                case 1:
                    return Wr(t, e.nodeIndex).renderElement;
                case 2:
                    return Kr(t, e.nodeIndex).renderText
            }
        }

        function go(t) {
            return !!t.parent && !!(32768 & t.parentNodeDef.flags)
        }

        function _o(t) {
            return !(!t.parent || 32768 & t.parentNodeDef.flags)
        }

        function bo(t) {
            var e = {}, n = 0, r = {};
            return t && t.forEach(function (t) {
                var o = l(t, 2), i = o[0], s = o[1];
                "number" == typeof i ? (e[i] = s, n |= function (t) {
                    return 1 << t % 32
                }(i)) : r[i] = s
            }), {matchedQueries: e, references: r, matchedQueryIds: n}
        }

        function wo(t, e) {
            return t.map(function (t) {
                var n, r, o;
                return Array.isArray(t) ? (o = (n = l(t, 2))[0], r = n[1]) : (o = 0, r = t), r && ("function" == typeof r || "object" == typeof r) && e && Object.defineProperty(r, $t, {
                    value: e,
                    configurable: !0
                }), {flags: o, token: r, tokenKey: ro(r)}
            })
        }

        function So(t, e, n) {
            var r = n.renderParent;
            return r ? 0 == (1 & r.flags) || 0 == (33554432 & r.flags) || r.element.componentRendererType && r.element.componentRendererType.encapsulation === Dt.Native ? Wr(t, n.renderParent.nodeIndex).renderElement : void 0 : e
        }

        var Eo = new WeakMap;

        function Co(t) {
            var e = Eo.get(t);
            return e || ((e = t(function () {
                return eo
            })).factory = t, Eo.set(t, e)), e
        }

        function xo(t, e, n, r, o) {
            3 === e && (n = t.renderer.parentNode(mo(t, t.def.lastRenderRootNode))), To(t, e, 0, t.def.nodes.length - 1, n, r, o)
        }

        function To(t, e, n, r, o, i, s) {
            for (var a = n; a <= r; a++) {
                var u = t.def.nodes[a];
                11 & u.flags && Po(t, u, e, o, i, s), a += u.childCount
            }
        }

        function ko(t, e, n, r, o, i) {
            for (var s = t; s && !go(s);) s = s.parent;
            for (var a = s.parent, u = vo(s), l = u.nodeIndex + u.childCount, c = u.nodeIndex + 1; c <= l; c++) {
                var p = a.def.nodes[c];
                p.ngContentIndex === e && Po(a, p, n, r, o, i), c += p.childCount
            }
            if (!a.parent) {
                var h = t.root.projectableNodes[e];
                if (h) for (c = 0; c < h.length; c++) Ao(t, h[c], n, r, o, i)
            }
        }

        function Po(t, e, n, r, o, i) {
            if (8 & e.flags) ko(t, e.ngContent.index, n, r, o, i); else {
                var s = mo(t, e);
                if (3 === n && 33554432 & e.flags && 48 & e.bindingFlags ? (16 & e.bindingFlags && Ao(t, s, n, r, o, i), 32 & e.bindingFlags && Ao(Wr(t, e.nodeIndex).componentView, s, n, r, o, i)) : Ao(t, s, n, r, o, i), 16777216 & e.flags) for (var a = Wr(t, e.nodeIndex).viewContainer._embeddedViews, u = 0; u < a.length; u++) xo(a[u], n, r, o, i);
                1 & e.flags && !e.element.name && To(t, n, e.nodeIndex + 1, e.nodeIndex + e.childCount, r, o, i)
            }
        }

        function Ao(t, e, n, r, o, i) {
            var s = t.renderer;
            switch (n) {
                case 1:
                    s.appendChild(r, e);
                    break;
                case 2:
                    s.insertBefore(r, e, o);
                    break;
                case 3:
                    s.removeChild(r, e);
                    break;
                case 0:
                    i.push(e)
            }
        }

        var No = /^:([^:]+):(.+)$/;

        function Ro(t) {
            if (":" === t[0]) {
                var e = t.match(No);
                return [e[1], e[2]]
            }
            return ["", t]
        }

        function Io(t) {
            for (var e = 0, n = 0; n < t.length; n++) e |= t[n].flags;
            return e
        }

        function Oo(t, e, n, r, o, i, s, a, u, c, p, h) {
            var f;
            void 0 === s && (s = []), c || (c = eo);
            var d = bo(n), y = d.matchedQueries, v = d.references, m = d.matchedQueryIds, g = null, _ = null;
            i && (g = (f = l(Ro(i), 2))[0], _ = f[1]), a = a || [];
            for (var b = new Array(a.length), w = 0; w < a.length; w++) {
                var S = l(a[w], 3), E = S[0], C = S[2], x = l(Ro(S[1]), 2), T = x[0], k = x[1], P = void 0, A = void 0;
                switch (15 & E) {
                    case 4:
                        A = C;
                        break;
                    case 1:
                    case 8:
                        P = C
                }
                b[w] = {flags: E, ns: T, name: k, nonMinifiedName: k, securityContext: P, suffix: A}
            }
            u = u || [];
            var N = new Array(u.length);
            for (w = 0; w < u.length; w++) {
                var R = l(u[w], 2);
                N[w] = {type: 0, target: R[0], eventName: R[1], propName: null}
            }
            var I = (s = s || []).map(function (t) {
                var e = l(t, 2), n = e[1], r = l(Ro(e[0]), 2);
                return [r[0], r[1], n]
            });
            return h = function (t) {
                if (t && t.id === oo) {
                    var e = null != t.encapsulation && t.encapsulation !== Dt.None || t.styles.length || Object.keys(t.data).length;
                    t.id = e ? "c" + ao++ : io
                }
                return t && t.id === io && (t = null), t || null
            }(h), p && (e |= 33554432), {
                nodeIndex: -1,
                parent: null,
                renderParent: null,
                bindingIndex: -1,
                outputIndex: -1,
                checkIndex: t,
                flags: e |= 1,
                childFlags: 0,
                directChildFlags: 0,
                childMatchedQueries: 0,
                matchedQueries: y,
                matchedQueryIds: m,
                references: v,
                ngContentIndex: r,
                childCount: o,
                bindings: b,
                bindingFlags: Io(b),
                outputs: N,
                element: {
                    ns: g,
                    name: _,
                    attrs: I,
                    template: null,
                    componentProvider: null,
                    componentView: p || null,
                    componentRendererType: h,
                    publicProviders: null,
                    allProviders: null,
                    handleEvent: c || eo
                },
                provider: null,
                text: null,
                query: null,
                ngContent: null
            }
        }

        function Do(t, e, n) {
            var r, o = n.element, i = t.root.selectorOrNode, s = t.renderer;
            if (t.parent || !i) {
                r = o.name ? s.createElement(o.name, o.ns) : s.createComment("");
                var a = So(t, e, n);
                a && s.appendChild(a, r)
            } else r = s.selectRootElement(i, !!o.componentRendererType && o.componentRendererType.encapsulation === Dt.ShadowDom);
            if (o.attrs) for (var u = 0; u < o.attrs.length; u++) {
                var c = l(o.attrs[u], 3);
                s.setAttribute(r, c[1], c[2], c[0])
            }
            return r
        }

        function Mo(t, e, n, r) {
            for (var o = 0; o < n.outputs.length; o++) {
                var i = n.outputs[o], s = jo(t, n.nodeIndex, (p = i.eventName, (c = i.target) ? c + ":" + p : p)),
                    a = i.target, u = t;
                "component" === i.target && (a = null, u = e);
                var l = u.renderer.listen(a || r, i.eventName, s);
                t.disposables[n.outputIndex + o] = l
            }
            var c, p
        }

        function jo(t, e, n) {
            return function (r) {
                return fo(t, e, n, r)
            }
        }

        function Fo(t, e, n, r) {
            if (!lo(t, e, n, r)) return !1;
            var o = e.bindings[n], i = Wr(t, e.nodeIndex), s = i.renderElement, a = o.name;
            switch (15 & o.flags) {
                case 1:
                    !function (t, e, n, r, o, i) {
                        var s = e.securityContext, a = s ? t.root.sanitizer.sanitize(s, i) : i;
                        a = null != a ? a.toString() : null;
                        var u = t.renderer;
                        null != i ? u.setAttribute(n, o, a, r) : u.removeAttribute(n, o, r)
                    }(t, o, s, o.ns, a, r);
                    break;
                case 2:
                    !function (t, e, n, r) {
                        var o = t.renderer;
                        r ? o.addClass(e, n) : o.removeClass(e, n)
                    }(t, s, a, r);
                    break;
                case 4:
                    !function (t, e, n, r, o) {
                        var i = t.root.sanitizer.sanitize(Oe.STYLE, o);
                        if (null != i) {
                            i = i.toString();
                            var s = e.suffix;
                            null != s && (i += s)
                        } else i = null;
                        var a = t.renderer;
                        null != i ? a.setStyle(n, r, i) : a.removeStyle(n, r)
                    }(t, o, s, a, r);
                    break;
                case 8:
                    !function (t, e, n, r, o) {
                        var i = e.securityContext, s = i ? t.root.sanitizer.sanitize(i, o) : o;
                        t.renderer.setProperty(n, r, s)
                    }(33554432 & e.flags && 32 & o.flags ? i.componentView : t, o, s, a, r)
            }
            return !0
        }

        var Lo = new Object, Uo = ro(ee), Vo = ro(Xt), Ho = ro(Ce);

        function zo(t, e, n, r) {
            return n = It(n), {index: -1, deps: wo(r, At(e)), flags: t, token: e, value: n}
        }

        function Bo(t, e, n) {
            void 0 === n && (n = ee.THROW_IF_NOT_FOUND);
            var r, o, i = Ht(t);
            try {
                if (8 & e.flags) return e.token;
                if (2 & e.flags && (n = null), 1 & e.flags) return t._parent.get(e.token, n);
                var s = e.tokenKey;
                switch (s) {
                    case Uo:
                    case Vo:
                    case Ho:
                        return t
                }
                var a, u = t._def.providersByKey[s];
                if (u) {
                    var l = t._providers[u.index];
                    return void 0 === l && (l = t._providers[u.index] = qo(t, u)), l === Lo ? void 0 : l
                }
                if ((a = vt(e.token)) && (r = t, null != (o = a).providedIn && (function (t, e) {
                    return t._def.modules.indexOf(o.providedIn) > -1
                }(r) || "root" === o.providedIn && r._def.isRoot))) {
                    var c = t._providers.length;
                    return t._def.providersByKey[e.tokenKey] = {
                        flags: 5120,
                        value: a.factory,
                        deps: [],
                        index: c,
                        token: e.token
                    }, t._providers[c] = Lo, t._providers[c] = qo(t, t._def.providersByKey[e.tokenKey])
                }
                return 4 & e.flags ? n : t._parent.get(e.token, n)
            } finally {
                Ht(i)
            }
        }

        function qo(t, e) {
            var n;
            switch (201347067 & e.flags) {
                case 512:
                    n = function (t, e, n) {
                        var r = n.length;
                        switch (r) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(Bo(t, n[0]));
                            case 2:
                                return new e(Bo(t, n[0]), Bo(t, n[1]));
                            case 3:
                                return new e(Bo(t, n[0]), Bo(t, n[1]), Bo(t, n[2]));
                            default:
                                for (var o = new Array(r), i = 0; i < r; i++) o[i] = Bo(t, n[i]);
                                return new (e.bind.apply(e, c([void 0], o)))
                        }
                    }(t, e.value, e.deps);
                    break;
                case 1024:
                    n = function (t, e, n) {
                        var r = n.length;
                        switch (r) {
                            case 0:
                                return e();
                            case 1:
                                return e(Bo(t, n[0]));
                            case 2:
                                return e(Bo(t, n[0]), Bo(t, n[1]));
                            case 3:
                                return e(Bo(t, n[0]), Bo(t, n[1]), Bo(t, n[2]));
                            default:
                                for (var o = Array(r), i = 0; i < r; i++) o[i] = Bo(t, n[i]);
                                return e.apply(void 0, c(o))
                        }
                    }(t, e.value, e.deps);
                    break;
                case 2048:
                    n = Bo(t, e.deps[0]);
                    break;
                case 256:
                    n = e.value
            }
            return n === Lo || null == n || "object" != typeof n || 131072 & e.flags || "function" != typeof n.ngOnDestroy || (e.flags |= 131072), void 0 === n ? Lo : n
        }

        function Qo(t, e) {
            var n = t.viewContainer._embeddedViews;
            if ((null == e || e >= n.length) && (e = n.length - 1), e < 0) return null;
            var r = n[e];
            return r.viewContainerParent = null, Go(n, e), $r.dirtyParentQueries(r), Wo(r), r
        }

        function Ko(t, e, n) {
            var r = e ? mo(e, e.def.lastRenderRootNode) : t.renderElement, o = n.renderer.parentNode(r),
                i = n.renderer.nextSibling(r);
            xo(n, 2, o, i, void 0)
        }

        function Wo(t) {
            xo(t, 3, null, null, void 0)
        }

        function Zo(t, e, n) {
            e >= t.length ? t.push(n) : t.splice(e, 0, n)
        }

        function Go(t, e) {
            e >= t.length - 1 ? t.pop() : t.splice(e, 1)
        }

        var Yo = new Object;

        function $o(t, e, n, r, o, i) {
            return new Jo(t, e, n, r, o, i)
        }

        var Jo = function (t) {
            function e(e, n, r, o, i, s) {
                var a = t.call(this) || this;
                return a.selector = e, a.componentType = n, a._inputs = o, a._outputs = i, a.ngContentSelectors = s, a.viewDefFactory = r, a
            }

            return o(e, t), Object.defineProperty(e.prototype, "inputs", {
                get: function () {
                    var t = [], e = this._inputs;
                    for (var n in e) t.push({propName: n, templateName: e[n]});
                    return t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "outputs", {
                get: function () {
                    var t = [];
                    for (var e in this._outputs) t.push({propName: e, templateName: this._outputs[e]});
                    return t
                }, enumerable: !0, configurable: !0
            }), e.prototype.create = function (t, e, n, r) {
                if (!r) throw new Error("ngModule should be provided");
                var o = Co(this.viewDefFactory), i = o.nodes[0].element.componentProvider.nodeIndex,
                    s = $r.createRootView(t, e || [], n, o, r, Yo), a = Zr(s, i).instance;
                return n && s.renderer.setAttribute(Wr(s, 0).renderElement, "ng-version", Me.full), new Xo(s, new ri(s), a)
            }, e
        }(me), Xo = function (t) {
            function e(e, n, r) {
                var o = t.call(this) || this;
                return o._view = e, o._viewRef = n, o._component = r, o._elDef = o._view.def.nodes[0], o.hostView = n, o.changeDetectorRef = n, o.instance = r, o
            }

            return o(e, t), Object.defineProperty(e.prototype, "location", {
                get: function () {
                    return new Te(Wr(this._view, this._elDef.nodeIndex).renderElement)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "injector", {
                get: function () {
                    return new ai(this._view, this._elDef)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "componentType", {
                get: function () {
                    return this._component.constructor
                }, enumerable: !0, configurable: !0
            }), e.prototype.destroy = function () {
                this._viewRef.destroy()
            }, e.prototype.onDestroy = function (t) {
                this._viewRef.onDestroy(t)
            }, e
        }(ve);

        function ti(t, e, n) {
            return new ei(t, e, n)
        }

        var ei = function () {
            function t(t, e, n) {
                this._view = t, this._elDef = e, this._data = n, this._embeddedViews = []
            }

            return Object.defineProperty(t.prototype, "element", {
                get: function () {
                    return new Te(this._data.renderElement)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "injector", {
                get: function () {
                    return new ai(this._view, this._elDef)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "parentInjector", {
                get: function () {
                    for (var t = this._view, e = this._elDef.parent; !e && t;) e = vo(t), t = t.parent;
                    return t ? new ai(t, e) : new ai(this._view, null)
                }, enumerable: !0, configurable: !0
            }), t.prototype.clear = function () {
                for (var t = this._embeddedViews.length - 1; t >= 0; t--) {
                    var e = Qo(this._data, t);
                    $r.destroyView(e)
                }
            }, t.prototype.get = function (t) {
                var e = this._embeddedViews[t];
                if (e) {
                    var n = new ri(e);
                    return n.attachToViewContainerRef(this), n
                }
                return null
            }, Object.defineProperty(t.prototype, "length", {
                get: function () {
                    return this._embeddedViews.length
                }, enumerable: !0, configurable: !0
            }), t.prototype.createEmbeddedView = function (t, e, n) {
                var r = t.createEmbeddedView(e || {});
                return this.insert(r, n), r
            }, t.prototype.createComponent = function (t, e, n, r, o) {
                var i = n || this.parentInjector;
                o || t instanceof Ee || (o = i.get(Ce));
                var s = t.create(i, r, void 0, o);
                return this.insert(s.hostView, e), s
            }, t.prototype.insert = function (t, e) {
                if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                var n, r, o, i, s = t;
                return i = (n = this._data).viewContainer._embeddedViews, null == (r = e) && (r = i.length), (o = s._view).viewContainerParent = this._view, Zo(i, r, o), function (t, e) {
                    var n = yo(e);
                    if (n && n !== t && !(16 & e.state)) {
                        e.state |= 16;
                        var r = n.template._projectedViews;
                        r || (r = n.template._projectedViews = []), r.push(e), function (t, n) {
                            if (!(4 & n.flags)) {
                                e.parent.def.nodeFlags |= 4, n.flags |= 4;
                                for (var r = n.parent; r;) r.childFlags |= 4, r = r.parent
                            }
                        }(0, e.parentNodeDef)
                    }
                }(n, o), $r.dirtyParentQueries(o), Ko(n, r > 0 ? i[r - 1] : null, o), s.attachToViewContainerRef(this), t
            }, t.prototype.move = function (t, e) {
                if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                var n, r, o, i, s, a = this._embeddedViews.indexOf(t._view);
                return o = e, s = (i = (n = this._data).viewContainer._embeddedViews)[r = a], Go(i, r), null == o && (o = i.length), Zo(i, o, s), $r.dirtyParentQueries(s), Wo(s), Ko(n, o > 0 ? i[o - 1] : null, s), t
            }, t.prototype.indexOf = function (t) {
                return this._embeddedViews.indexOf(t._view)
            }, t.prototype.remove = function (t) {
                var e = Qo(this._data, t);
                e && $r.destroyView(e)
            }, t.prototype.detach = function (t) {
                var e = Qo(this._data, t);
                return e ? new ri(e) : null
            }, t
        }();

        function ni(t) {
            return new ri(t)
        }

        var ri = function () {
            function t(t) {
                this._view = t, this._viewContainerRef = null, this._appRef = null
            }

            return Object.defineProperty(t.prototype, "rootNodes", {
                get: function () {
                    return xo(this._view, 0, void 0, void 0, t = []), t;
                    var t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "context", {
                get: function () {
                    return this._view.context
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "destroyed", {
                get: function () {
                    return 0 != (128 & this._view.state)
                }, enumerable: !0, configurable: !0
            }), t.prototype.markForCheck = function () {
                po(this._view)
            }, t.prototype.detach = function () {
                this._view.state &= -5
            }, t.prototype.detectChanges = function () {
                var t = this._view.root.rendererFactory;
                t.begin && t.begin();
                try {
                    $r.checkAndUpdateView(this._view)
                } finally {
                    t.end && t.end()
                }
            }, t.prototype.checkNoChanges = function () {
                $r.checkNoChangesView(this._view)
            }, t.prototype.reattach = function () {
                this._view.state |= 4
            }, t.prototype.onDestroy = function (t) {
                this._view.disposables || (this._view.disposables = []), this._view.disposables.push(t)
            }, t.prototype.destroy = function () {
                this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), $r.destroyView(this._view)
            }, t.prototype.detachFromAppRef = function () {
                this._appRef = null, Wo(this._view), $r.dirtyParentQueries(this._view)
            }, t.prototype.attachToAppRef = function (t) {
                if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                this._appRef = t
            }, t.prototype.attachToViewContainerRef = function (t) {
                if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                this._viewContainerRef = t
            }, t
        }();

        function oi(t, e) {
            return new ii(t, e)
        }

        var ii = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r._parentView = e, r._def = n, r
            }

            return o(e, t), e.prototype.createEmbeddedView = function (t) {
                return new ri($r.createEmbeddedView(this._parentView, this._def, this._def.element.template, t))
            }, Object.defineProperty(e.prototype, "elementRef", {
                get: function () {
                    return new Te(Wr(this._parentView, this._def.nodeIndex).renderElement)
                }, enumerable: !0, configurable: !0
            }), e
        }(un);

        function si(t, e) {
            return new ai(t, e)
        }

        var ai = function () {
            function t(t, e) {
                this.view = t, this.elDef = e
            }

            return t.prototype.get = function (t, e) {
                return void 0 === e && (e = ee.THROW_IF_NOT_FOUND), $r.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), {
                    flags: 0,
                    token: t,
                    tokenKey: ro(t)
                }, e)
            }, t
        }();

        function ui(t) {
            return new li(t.renderer)
        }

        var li = function () {
            function t(t) {
                this.delegate = t
            }

            return t.prototype.selectRootElement = function (t) {
                return this.delegate.selectRootElement(t)
            }, t.prototype.createElement = function (t, e) {
                var n = l(Ro(e), 2), r = this.delegate.createElement(n[1], n[0]);
                return t && this.delegate.appendChild(t, r), r
            }, t.prototype.createViewRoot = function (t) {
                return t
            }, t.prototype.createTemplateAnchor = function (t) {
                var e = this.delegate.createComment("");
                return t && this.delegate.appendChild(t, e), e
            }, t.prototype.createText = function (t, e) {
                var n = this.delegate.createText(e);
                return t && this.delegate.appendChild(t, n), n
            }, t.prototype.projectNodes = function (t, e) {
                for (var n = 0; n < e.length; n++) this.delegate.appendChild(t, e[n])
            }, t.prototype.attachViewAfter = function (t, e) {
                for (var n = this.delegate.parentNode(t), r = this.delegate.nextSibling(t), o = 0; o < e.length; o++) this.delegate.insertBefore(n, e[o], r)
            }, t.prototype.detachView = function (t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e], r = this.delegate.parentNode(n);
                    this.delegate.removeChild(r, n)
                }
            }, t.prototype.destroyView = function (t, e) {
                for (var n = 0; n < e.length; n++) this.delegate.destroyNode(e[n])
            }, t.prototype.listen = function (t, e, n) {
                return this.delegate.listen(t, e, n)
            }, t.prototype.listenGlobal = function (t, e, n) {
                return this.delegate.listen(t, e, n)
            }, t.prototype.setElementProperty = function (t, e, n) {
                this.delegate.setProperty(t, e, n)
            }, t.prototype.setElementAttribute = function (t, e, n) {
                var r = l(Ro(e), 2), o = r[0], i = r[1];
                null != n ? this.delegate.setAttribute(t, i, n, o) : this.delegate.removeAttribute(t, i, o)
            }, t.prototype.setBindingDebugInfo = function (t, e, n) {
            }, t.prototype.setElementClass = function (t, e, n) {
                n ? this.delegate.addClass(t, e) : this.delegate.removeClass(t, e)
            }, t.prototype.setElementStyle = function (t, e, n) {
                null != n ? this.delegate.setStyle(t, e, n) : this.delegate.removeStyle(t, e)
            }, t.prototype.invokeElementMethod = function (t, e, n) {
                t[e].apply(t, n)
            }, t.prototype.setText = function (t, e) {
                this.delegate.setValue(t, e)
            }, t.prototype.animate = function () {
                throw new Error("Renderer.animate is no longer supported!")
            }, t
        }();

        function ci(t, e, n, r) {
            return new pi(t, e, n, r)
        }

        var pi = function () {
            function t(t, e, n, r) {
                this._moduleType = t, this._parent = e, this._bootstrapComponents = n, this._def = r, this._destroyListeners = [], this._destroyed = !1, this.injector = this, function (t) {
                    for (var e = t._def, n = t._providers = new Array(e.providers.length), r = 0; r < e.providers.length; r++) {
                        var o = e.providers[r];
                        4096 & o.flags || void 0 === n[r] && (n[r] = qo(t, o))
                    }
                }(this)
            }

            return t.prototype.get = function (t, e, n) {
                void 0 === e && (e = ee.THROW_IF_NOT_FOUND), void 0 === n && (n = Ut.Default);
                var r = 0;
                return n & Ut.SkipSelf ? r |= 1 : n & Ut.Self && (r |= 4), Bo(this, {
                    token: t,
                    tokenKey: ro(t),
                    flags: r
                }, e)
            }, Object.defineProperty(t.prototype, "instance", {
                get: function () {
                    return this.get(this._moduleType)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "componentFactoryResolver", {
                get: function () {
                    return this.get(we)
                }, enumerable: !0, configurable: !0
            }), t.prototype.destroy = function () {
                if (this._destroyed) throw new Error("The ng module " + At(this.instance.constructor) + " has already been destroyed.");
                this._destroyed = !0, function (t, e) {
                    for (var n = t._def, r = new Set, o = 0; o < n.providers.length; o++) if (131072 & n.providers[o].flags) {
                        var i = t._providers[o];
                        if (i && i !== Lo) {
                            var s = i.ngOnDestroy;
                            "function" != typeof s || r.has(i) || (s.apply(i), r.add(i))
                        }
                    }
                }(this), this._destroyListeners.forEach(function (t) {
                    return t()
                })
            }, t.prototype.onDestroy = function (t) {
                this._destroyListeners.push(t)
            }, t
        }(), hi = ro(Pe), fi = ro(Re), di = ro(Te), yi = ro(fr), vi = ro(un), mi = ro(yr), gi = ro(ee), _i = ro(Xt);

        function bi(t, e, n, r, o, i, s, a) {
            var u = [];
            if (s) for (var c in s) {
                var p = l(s[c], 2);
                u[p[0]] = {flags: 8, name: c, nonMinifiedName: p[1], ns: null, securityContext: null, suffix: null}
            }
            var h = [];
            if (a) for (var f in a) h.push({type: 1, propName: f, target: null, eventName: a[f]});
            return function (t, e, n, r, o, i, s, a, u) {
                var l = bo(n), c = l.matchedQueries, p = l.references, h = l.matchedQueryIds;
                u || (u = []), a || (a = []), i = It(i);
                var f = wo(s, At(o));
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: t,
                    flags: e,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: c,
                    matchedQueryIds: h,
                    references: p,
                    ngContentIndex: -1,
                    childCount: r,
                    bindings: a,
                    bindingFlags: Io(a),
                    outputs: u,
                    element: null,
                    provider: {token: o, value: i, deps: f},
                    text: null,
                    query: null,
                    ngContent: null
                }
            }(t, e |= 16384, n, r, o, o, i, u, h)
        }

        function wi(t, e) {
            return xi(t, e)
        }

        function Si(t, e) {
            for (var n = t; n.parent && !go(n);) n = n.parent;
            return Ti(n.parent, vo(n), !0, e.provider.value, e.provider.deps)
        }

        function Ei(t, e) {
            var n = Ti(t, e.parent, (32768 & e.flags) > 0, e.provider.value, e.provider.deps);
            if (e.outputs.length) for (var r = 0; r < e.outputs.length; r++) {
                var o = e.outputs[r], i = n[o.propName];
                if (!wn(i)) throw new Error("@Output " + o.propName + " not initialized in '" + n.constructor.name + "'.");
                var s = i.subscribe(Ci(t, e.parent.nodeIndex, o.eventName));
                t.disposables[e.outputIndex + r] = s.unsubscribe.bind(s)
            }
            return n
        }

        function Ci(t, e, n) {
            return function (r) {
                return fo(t, e, n, r)
            }
        }

        function xi(t, e) {
            var n = (8192 & e.flags) > 0, r = e.provider;
            switch (201347067 & e.flags) {
                case 512:
                    return Ti(t, e.parent, n, r.value, r.deps);
                case 1024:
                    return function (t, e, n, r, o) {
                        var i = o.length;
                        switch (i) {
                            case 0:
                                return r();
                            case 1:
                                return r(Pi(t, e, n, o[0]));
                            case 2:
                                return r(Pi(t, e, n, o[0]), Pi(t, e, n, o[1]));
                            case 3:
                                return r(Pi(t, e, n, o[0]), Pi(t, e, n, o[1]), Pi(t, e, n, o[2]));
                            default:
                                for (var s = Array(i), a = 0; a < i; a++) s[a] = Pi(t, e, n, o[a]);
                                return r.apply(void 0, c(s))
                        }
                    }(t, e.parent, n, r.value, r.deps);
                case 2048:
                    return Pi(t, e.parent, n, r.deps[0]);
                case 256:
                    return r.value
            }
        }

        function Ti(t, e, n, r, o) {
            var i = o.length;
            switch (i) {
                case 0:
                    return new r;
                case 1:
                    return new r(Pi(t, e, n, o[0]));
                case 2:
                    return new r(Pi(t, e, n, o[0]), Pi(t, e, n, o[1]));
                case 3:
                    return new r(Pi(t, e, n, o[0]), Pi(t, e, n, o[1]), Pi(t, e, n, o[2]));
                default:
                    for (var s = new Array(i), a = 0; a < i; a++) s[a] = Pi(t, e, n, o[a]);
                    return new (r.bind.apply(r, c([void 0], s)))
            }
        }

        var ki = {};

        function Pi(t, e, n, r, o) {
            if (void 0 === o && (o = ee.THROW_IF_NOT_FOUND), 8 & r.flags) return r.token;
            var i = t;
            2 & r.flags && (o = null);
            var s = r.tokenKey;
            s === mi && (n = !(!e || !e.element.componentView)), e && 1 & r.flags && (n = !1, e = e.parent);
            for (var a = t; a;) {
                if (e) switch (s) {
                    case hi:
                        return ui(Ai(a, e, n));
                    case fi:
                        return Ai(a, e, n).renderer;
                    case di:
                        return new Te(Wr(a, e.nodeIndex).renderElement);
                    case yi:
                        return Wr(a, e.nodeIndex).viewContainer;
                    case vi:
                        if (e.element.template) return Wr(a, e.nodeIndex).template;
                        break;
                    case mi:
                        return ni(Ai(a, e, n));
                    case gi:
                    case _i:
                        return si(a, e);
                    default:
                        var u = (n ? e.element.allProviders : e.element.publicProviders)[s];
                        if (u) {
                            var l = Zr(a, u.nodeIndex);
                            return l || (l = {instance: xi(a, u)}, a.nodes[u.nodeIndex] = l), l.instance
                        }
                }
                n = go(a), e = vo(a), a = a.parent, 4 & r.flags && (a = null)
            }
            var c = i.root.injector.get(r.token, ki);
            return c !== ki || o === ki ? c : i.root.ngModule.injector.get(r.token, o)
        }

        function Ai(t, e, n) {
            var r;
            if (n) r = Wr(t, e.nodeIndex).componentView; else for (r = t; r.parent && !go(r);) r = r.parent;
            return r
        }

        function Ni(t, e, n, r, o, i) {
            if (32768 & n.flags) {
                var s = Wr(t, n.parent.nodeIndex).componentView;
                2 & s.def.flags && (s.state |= 8)
            }
            if (e.instance[n.bindings[r].name] = o, 524288 & n.flags) {
                i = i || {};
                var a = Kt.unwrap(t.oldValues[n.bindingIndex + r]);
                i[n.bindings[r].nonMinifiedName] = new Wt(a, o, 0 != (2 & t.state))
            }
            return t.oldValues[n.bindingIndex + r] = o, i
        }

        function Ri(t, e) {
            if (t.def.nodeFlags & e) for (var n = t.def.nodes, r = 0, o = 0; o < n.length; o++) {
                var i = n[o], s = i.parent;
                for (!s && i.flags & e && Oi(t, o, i.flags & e, r++), 0 == (i.childFlags & e) && (o += i.childCount); s && 1 & s.flags && o === s.nodeIndex + s.childCount;) s.directChildFlags & e && (r = Ii(t, s, e, r)), s = s.parent
            }
        }

        function Ii(t, e, n, r) {
            for (var o = e.nodeIndex + 1; o <= e.nodeIndex + e.childCount; o++) {
                var i = t.def.nodes[o];
                i.flags & n && Oi(t, o, i.flags & n, r++), o += i.childCount
            }
            return r
        }

        function Oi(t, e, n, r) {
            var o = Zr(t, e);
            if (o) {
                var i = o.instance;
                i && ($r.setCurrentNode(t, e), 1048576 & n && Qr(t, 512, r) && i.ngAfterContentInit(), 2097152 & n && i.ngAfterContentChecked(), 4194304 & n && Qr(t, 768, r) && i.ngAfterViewInit(), 8388608 & n && i.ngAfterViewChecked(), 131072 & n && i.ngOnDestroy())
            }
        }

        function Di(t) {
            for (var e = t.def.nodeMatchedQueries; t.parent && _o(t);) {
                var n = t.parentNodeDef;
                t = t.parent;
                for (var r = n.nodeIndex + n.childCount, o = 0; o <= r; o++) 67108864 & (i = t.def.nodes[o]).flags && 536870912 & i.flags && (i.query.filterId & e) === i.query.filterId && Yr(t, o).setDirty(), !(1 & i.flags && o + i.childCount < n.nodeIndex) && 67108864 & i.childFlags && 536870912 & i.childFlags || (o += i.childCount)
            }
            if (134217728 & t.def.nodeFlags) for (o = 0; o < t.def.nodes.length; o++) {
                var i;
                134217728 & (i = t.def.nodes[o]).flags && 536870912 & i.flags && Yr(t, o).setDirty(), o += i.childCount
            }
        }

        function Mi(t, e) {
            var n = Yr(t, e.nodeIndex);
            if (n.dirty) {
                var r, o = void 0;
                if (67108864 & e.flags) {
                    var i = e.parent.parent;
                    o = ji(t, i.nodeIndex, i.nodeIndex + i.childCount, e.query, []), r = Zr(t, e.parent.nodeIndex).instance
                } else 134217728 & e.flags && (o = ji(t, 0, t.def.nodes.length - 1, e.query, []), r = t.component);
                n.reset(o);
                for (var s = e.query.bindings, a = !1, u = 0; u < s.length; u++) {
                    var l = s[u], c = void 0;
                    switch (l.bindingType) {
                        case 0:
                            c = n.first;
                            break;
                        case 1:
                            c = n, a = !0
                    }
                    r[l.propName] = c
                }
                a && n.notifyOnChanges()
            }
        }

        function ji(t, e, n, r, o) {
            for (var i = e; i <= n; i++) {
                var s = t.def.nodes[i], a = s.matchedQueries[r.id];
                if (null != a && o.push(Fi(t, s, a)), 1 & s.flags && s.element.template && (s.element.template.nodeMatchedQueries & r.filterId) === r.filterId) {
                    var u = Wr(t, i);
                    if ((s.childMatchedQueries & r.filterId) === r.filterId && (ji(t, i + 1, i + s.childCount, r, o), i += s.childCount), 16777216 & s.flags) for (var l = u.viewContainer._embeddedViews, c = 0; c < l.length; c++) {
                        var p = l[c], h = yo(p);
                        h && h === u && ji(p, 0, p.def.nodes.length - 1, r, o)
                    }
                    var f = u.template._projectedViews;
                    if (f) for (c = 0; c < f.length; c++) {
                        var d = f[c];
                        ji(d, 0, d.def.nodes.length - 1, r, o)
                    }
                }
                (s.childMatchedQueries & r.filterId) !== r.filterId && (i += s.childCount)
            }
            return o
        }

        function Fi(t, e, n) {
            if (null != n) switch (n) {
                case 1:
                    return Wr(t, e.nodeIndex).renderElement;
                case 0:
                    return new Te(Wr(t, e.nodeIndex).renderElement);
                case 2:
                    return Wr(t, e.nodeIndex).template;
                case 3:
                    return Wr(t, e.nodeIndex).viewContainer;
                case 4:
                    return Zr(t, e.nodeIndex).instance
            }
        }

        function Li(t, e, n) {
            var r = So(t, e, n);
            r && ko(t, n.ngContent.index, 1, r, null, void 0)
        }

        function Ui(t, e, n) {
            for (var r = new Array(n.length - 1), o = 1; o < n.length; o++) r[o - 1] = {
                flags: 8,
                name: null,
                ns: null,
                nonMinifiedName: null,
                securityContext: null,
                suffix: n[o]
            };
            return {
                nodeIndex: -1,
                parent: null,
                renderParent: null,
                bindingIndex: -1,
                outputIndex: -1,
                checkIndex: t,
                flags: 2,
                childFlags: 0,
                directChildFlags: 0,
                childMatchedQueries: 0,
                matchedQueries: {},
                matchedQueryIds: 0,
                references: {},
                ngContentIndex: e,
                childCount: 0,
                bindings: r,
                bindingFlags: 8,
                outputs: [],
                element: null,
                provider: null,
                text: {prefix: n[0]},
                query: null,
                ngContent: null
            }
        }

        function Vi(t, e, n) {
            var r, o = t.renderer;
            r = o.createText(n.text.prefix);
            var i = So(t, e, n);
            return i && o.appendChild(i, r), {renderText: r}
        }

        function Hi(t, e) {
            return (null != t ? t.toString() : "") + e.suffix
        }

        function zi(t, e, n, r) {
            for (var o = 0, i = 0, s = 0, a = 0, u = 0, l = null, c = null, p = !1, h = !1, f = null, d = 0; d < e.length; d++) {
                var y = e[d];
                if (y.nodeIndex = d, y.parent = l, y.bindingIndex = o, y.outputIndex = i, y.renderParent = c, s |= y.flags, u |= y.matchedQueryIds, y.element) {
                    var v = y.element;
                    v.publicProviders = l ? l.element.publicProviders : Object.create(null), v.allProviders = v.publicProviders, p = !1, h = !1, y.element.template && (u |= y.element.template.nodeMatchedQueries)
                }
                if (qi(l, y, e.length), o += y.bindings.length, i += y.outputs.length, !c && 3 & y.flags && (f = y), 20224 & y.flags) {
                    p || (p = !0, l.element.publicProviders = Object.create(l.element.publicProviders), l.element.allProviders = l.element.publicProviders);
                    var m = 0 != (32768 & y.flags);
                    0 == (8192 & y.flags) || m ? l.element.publicProviders[ro(y.provider.token)] = y : (h || (h = !0, l.element.allProviders = Object.create(l.element.publicProviders)), l.element.allProviders[ro(y.provider.token)] = y), m && (l.element.componentProvider = y)
                }
                if (l ? (l.childFlags |= y.flags, l.directChildFlags |= y.flags, l.childMatchedQueries |= y.matchedQueryIds, y.element && y.element.template && (l.childMatchedQueries |= y.element.template.nodeMatchedQueries)) : a |= y.flags, y.childCount > 0) l = y, Bi(y) || (c = y); else for (; l && d === l.nodeIndex + l.childCount;) {
                    var g = l.parent;
                    g && (g.childFlags |= l.childFlags, g.childMatchedQueries |= l.childMatchedQueries), c = (l = g) && Bi(l) ? l.renderParent : l
                }
            }
            return {
                factory: null,
                nodeFlags: s,
                rootNodeFlags: a,
                nodeMatchedQueries: u,
                flags: t,
                nodes: e,
                updateDirectives: n || eo,
                updateRenderer: r || eo,
                handleEvent: function (t, n, r, o) {
                    return e[n].element.handleEvent(t, r, o)
                },
                bindingCount: o,
                outputCount: i,
                lastRenderRootNode: f
            }
        }

        function Bi(t) {
            return 0 != (1 & t.flags) && null === t.element.name
        }

        function qi(t, e, n) {
            var r = e.element && e.element.template;
            if (r) {
                if (!r.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!");
                if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + e.nodeIndex + "!")
            }
            if (20224 & e.flags && 0 == (1 & (t ? t.flags : 0))) throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " + e.nodeIndex + "!");
            if (e.query) {
                if (67108864 & e.flags && (!t || 0 == (16384 & t.flags))) throw new Error("Illegal State: Content Query nodes need to be children of directives, at index " + e.nodeIndex + "!");
                if (134217728 & e.flags && t) throw new Error("Illegal State: View Query nodes have to be top level nodes, at index " + e.nodeIndex + "!")
            }
            if (e.childCount) {
                var o = t ? t.nodeIndex + t.childCount : n - 1;
                if (e.nodeIndex <= o && e.nodeIndex + e.childCount > o) throw new Error("Illegal State: childCount of node leads outside of parent, at index " + e.nodeIndex + "!")
            }
        }

        function Qi(t, e, n, r) {
            var o = Zi(t.root, t.renderer, t, e, n);
            return Gi(o, t.component, r), Yi(o), o
        }

        function Ki(t, e, n) {
            var r = Zi(t, t.renderer, null, null, e);
            return Gi(r, n, n), Yi(r), r
        }

        function Wi(t, e, n, r) {
            var o, i = e.element.componentRendererType;
            return o = i ? t.root.rendererFactory.createRenderer(r, i) : t.root.renderer, Zi(t.root, o, t, e.element.componentProvider, n)
        }

        function Zi(t, e, n, r, o) {
            var i = new Array(o.nodes.length), s = o.outputCount ? new Array(o.outputCount) : null;
            return {
                def: o,
                parent: n,
                viewContainerParent: null,
                parentNodeDef: r,
                context: null,
                component: null,
                nodes: i,
                state: 13,
                root: t,
                renderer: e,
                oldValues: new Array(o.bindingCount),
                disposables: s,
                initIndex: -1
            }
        }

        function Gi(t, e, n) {
            t.component = e, t.context = n
        }

        function Yi(t) {
            var e;
            go(t) && (e = Wr(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement);
            for (var n = t.def, r = t.nodes, o = 0; o < n.nodes.length; o++) {
                var i = n.nodes[o];
                $r.setCurrentNode(t, o);
                var s = void 0;
                switch (201347067 & i.flags) {
                    case 1:
                        var a = Do(t, e, i), u = void 0;
                        if (33554432 & i.flags) {
                            var l = Co(i.element.componentView);
                            u = $r.createComponentView(t, i, l, a)
                        }
                        Mo(t, u, i, a), s = {
                            renderElement: a,
                            componentView: u,
                            viewContainer: null,
                            template: i.element.template ? oi(t, i) : void 0
                        }, 16777216 & i.flags && (s.viewContainer = ti(t, i, s));
                        break;
                    case 2:
                        s = Vi(t, e, i);
                        break;
                    case 512:
                    case 1024:
                    case 2048:
                    case 256:
                        (s = r[o]) || 4096 & i.flags || (s = {instance: wi(t, i)});
                        break;
                    case 16:
                        s = {instance: Si(t, i)};
                        break;
                    case 16384:
                        (s = r[o]) || (s = {instance: Ei(t, i)}), 32768 & i.flags && Gi(Wr(t, i.parent.nodeIndex).componentView, s.instance, s.instance);
                        break;
                    case 32:
                    case 64:
                    case 128:
                        s = {value: void 0};
                        break;
                    case 67108864:
                    case 134217728:
                        s = new ur;
                        break;
                    case 8:
                        Li(t, e, i), s = void 0
                }
                r[o] = s
            }
            is(t, os.CreateViewNodes), ls(t, 201326592, 268435456, 0)
        }

        function $i(t) {
            ts(t), $r.updateDirectives(t, 1), ss(t, os.CheckNoChanges), $r.updateRenderer(t, 1), is(t, os.CheckNoChanges), t.state &= -97
        }

        function Ji(t) {
            1 & t.state ? (t.state &= -2, t.state |= 2) : t.state &= -3, qr(t, 0, 256), ts(t), $r.updateDirectives(t, 0), ss(t, os.CheckAndUpdate), ls(t, 67108864, 536870912, 0);
            var e = qr(t, 256, 512);
            Ri(t, 2097152 | (e ? 1048576 : 0)), $r.updateRenderer(t, 0), is(t, os.CheckAndUpdate), ls(t, 134217728, 536870912, 0), Ri(t, 8388608 | ((e = qr(t, 512, 768)) ? 4194304 : 0)), 2 & t.def.flags && (t.state &= -9), t.state &= -97, qr(t, 768, 1024)
        }

        function Xi(t, e, n, r, o, i, s, a, u, l, p, h, f) {
            return 0 === n ? function (t, e, n, r, o, i, s, a, u, l, c, p) {
                switch (201347067 & e.flags) {
                    case 1:
                        return function (t, e, n, r, o, i, s, a, u, l, c, p) {
                            var h = e.bindings.length, f = !1;
                            return h > 0 && Fo(t, e, 0, n) && (f = !0), h > 1 && Fo(t, e, 1, r) && (f = !0), h > 2 && Fo(t, e, 2, o) && (f = !0), h > 3 && Fo(t, e, 3, i) && (f = !0), h > 4 && Fo(t, e, 4, s) && (f = !0), h > 5 && Fo(t, e, 5, a) && (f = !0), h > 6 && Fo(t, e, 6, u) && (f = !0), h > 7 && Fo(t, e, 7, l) && (f = !0), h > 8 && Fo(t, e, 8, c) && (f = !0), h > 9 && Fo(t, e, 9, p) && (f = !0), f
                        }(t, e, n, r, o, i, s, a, u, l, c, p);
                    case 2:
                        return function (t, e, n, r, o, i, s, a, u, l, c, p) {
                            var h = !1, f = e.bindings, d = f.length;
                            if (d > 0 && lo(t, e, 0, n) && (h = !0), d > 1 && lo(t, e, 1, r) && (h = !0), d > 2 && lo(t, e, 2, o) && (h = !0), d > 3 && lo(t, e, 3, i) && (h = !0), d > 4 && lo(t, e, 4, s) && (h = !0), d > 5 && lo(t, e, 5, a) && (h = !0), d > 6 && lo(t, e, 6, u) && (h = !0), d > 7 && lo(t, e, 7, l) && (h = !0), d > 8 && lo(t, e, 8, c) && (h = !0), d > 9 && lo(t, e, 9, p) && (h = !0), h) {
                                var y = e.text.prefix;
                                d > 0 && (y += Hi(n, f[0])), d > 1 && (y += Hi(r, f[1])), d > 2 && (y += Hi(o, f[2])), d > 3 && (y += Hi(i, f[3])), d > 4 && (y += Hi(s, f[4])), d > 5 && (y += Hi(a, f[5])), d > 6 && (y += Hi(u, f[6])), d > 7 && (y += Hi(l, f[7])), d > 8 && (y += Hi(c, f[8])), d > 9 && (y += Hi(p, f[9]));
                                var v = Kr(t, e.nodeIndex).renderText;
                                t.renderer.setValue(v, y)
                            }
                            return h
                        }(t, e, n, r, o, i, s, a, u, l, c, p);
                    case 16384:
                        return function (t, e, n, r, o, i, s, a, u, l, c, p) {
                            var h = Zr(t, e.nodeIndex), f = h.instance, d = !1, y = void 0, v = e.bindings.length;
                            return v > 0 && uo(t, e, 0, n) && (d = !0, y = Ni(t, h, e, 0, n, y)), v > 1 && uo(t, e, 1, r) && (d = !0, y = Ni(t, h, e, 1, r, y)), v > 2 && uo(t, e, 2, o) && (d = !0, y = Ni(t, h, e, 2, o, y)), v > 3 && uo(t, e, 3, i) && (d = !0, y = Ni(t, h, e, 3, i, y)), v > 4 && uo(t, e, 4, s) && (d = !0, y = Ni(t, h, e, 4, s, y)), v > 5 && uo(t, e, 5, a) && (d = !0, y = Ni(t, h, e, 5, a, y)), v > 6 && uo(t, e, 6, u) && (d = !0, y = Ni(t, h, e, 6, u, y)), v > 7 && uo(t, e, 7, l) && (d = !0, y = Ni(t, h, e, 7, l, y)), v > 8 && uo(t, e, 8, c) && (d = !0, y = Ni(t, h, e, 8, c, y)), v > 9 && uo(t, e, 9, p) && (d = !0, y = Ni(t, h, e, 9, p, y)), y && f.ngOnChanges(y), 65536 & e.flags && Qr(t, 256, e.nodeIndex) && f.ngOnInit(), 262144 & e.flags && f.ngDoCheck(), d
                        }(t, e, n, r, o, i, s, a, u, l, c, p);
                    case 32:
                    case 64:
                    case 128:
                        return function (t, e, n, r, o, i, s, a, u, l, c, p) {
                            var h = e.bindings, f = !1, d = h.length;
                            if (d > 0 && lo(t, e, 0, n) && (f = !0), d > 1 && lo(t, e, 1, r) && (f = !0), d > 2 && lo(t, e, 2, o) && (f = !0), d > 3 && lo(t, e, 3, i) && (f = !0), d > 4 && lo(t, e, 4, s) && (f = !0), d > 5 && lo(t, e, 5, a) && (f = !0), d > 6 && lo(t, e, 6, u) && (f = !0), d > 7 && lo(t, e, 7, l) && (f = !0), d > 8 && lo(t, e, 8, c) && (f = !0), d > 9 && lo(t, e, 9, p) && (f = !0), f) {
                                var y = Gr(t, e.nodeIndex), v = void 0;
                                switch (201347067 & e.flags) {
                                    case 32:
                                        v = new Array(h.length), d > 0 && (v[0] = n), d > 1 && (v[1] = r), d > 2 && (v[2] = o), d > 3 && (v[3] = i), d > 4 && (v[4] = s), d > 5 && (v[5] = a), d > 6 && (v[6] = u), d > 7 && (v[7] = l), d > 8 && (v[8] = c), d > 9 && (v[9] = p);
                                        break;
                                    case 64:
                                        v = {}, d > 0 && (v[h[0].name] = n), d > 1 && (v[h[1].name] = r), d > 2 && (v[h[2].name] = o), d > 3 && (v[h[3].name] = i), d > 4 && (v[h[4].name] = s), d > 5 && (v[h[5].name] = a), d > 6 && (v[h[6].name] = u), d > 7 && (v[h[7].name] = l), d > 8 && (v[h[8].name] = c), d > 9 && (v[h[9].name] = p);
                                        break;
                                    case 128:
                                        var m = n;
                                        switch (d) {
                                            case 1:
                                                v = m.transform(n);
                                                break;
                                            case 2:
                                                v = m.transform(r);
                                                break;
                                            case 3:
                                                v = m.transform(r, o);
                                                break;
                                            case 4:
                                                v = m.transform(r, o, i);
                                                break;
                                            case 5:
                                                v = m.transform(r, o, i, s);
                                                break;
                                            case 6:
                                                v = m.transform(r, o, i, s, a);
                                                break;
                                            case 7:
                                                v = m.transform(r, o, i, s, a, u);
                                                break;
                                            case 8:
                                                v = m.transform(r, o, i, s, a, u, l);
                                                break;
                                            case 9:
                                                v = m.transform(r, o, i, s, a, u, l, c);
                                                break;
                                            case 10:
                                                v = m.transform(r, o, i, s, a, u, l, c, p)
                                        }
                                }
                                y.value = v
                            }
                            return f
                        }(t, e, n, r, o, i, s, a, u, l, c, p);
                    default:
                        throw "unreachable"
                }
            }(t, e, r, o, i, s, a, u, l, p, h, f) : function (t, e, n) {
                switch (201347067 & e.flags) {
                    case 1:
                        return function (t, e, n) {
                            for (var r = !1, o = 0; o < n.length; o++) Fo(t, e, o, n[o]) && (r = !0);
                            return r
                        }(t, e, n);
                    case 2:
                        return function (t, e, n) {
                            for (var r = e.bindings, o = !1, i = 0; i < n.length; i++) lo(t, e, i, n[i]) && (o = !0);
                            if (o) {
                                var s = "";
                                for (i = 0; i < n.length; i++) s += Hi(n[i], r[i]);
                                s = e.text.prefix + s;
                                var a = Kr(t, e.nodeIndex).renderText;
                                t.renderer.setValue(a, s)
                            }
                            return o
                        }(t, e, n);
                    case 16384:
                        return function (t, e, n) {
                            for (var r = Zr(t, e.nodeIndex), o = r.instance, i = !1, s = void 0, a = 0; a < n.length; a++) uo(t, e, a, n[a]) && (i = !0, s = Ni(t, r, e, a, n[a], s));
                            return s && o.ngOnChanges(s), 65536 & e.flags && Qr(t, 256, e.nodeIndex) && o.ngOnInit(), 262144 & e.flags && o.ngDoCheck(), i
                        }(t, e, n);
                    case 32:
                    case 64:
                    case 128:
                        return function (t, e, n) {
                            for (var r = e.bindings, o = !1, i = 0; i < n.length; i++) lo(t, e, i, n[i]) && (o = !0);
                            if (o) {
                                var s = Gr(t, e.nodeIndex), a = void 0;
                                switch (201347067 & e.flags) {
                                    case 32:
                                        a = n;
                                        break;
                                    case 64:
                                        for (a = {}, i = 0; i < n.length; i++) a[r[i].name] = n[i];
                                        break;
                                    case 128:
                                        var u = n[0], l = n.slice(1);
                                        a = u.transform.apply(u, c(l))
                                }
                                s.value = a
                            }
                            return o
                        }(t, e, n);
                    default:
                        throw "unreachable"
                }
            }(t, e, r)
        }

        function ts(t) {
            var e = t.def;
            if (4 & e.nodeFlags) for (var n = 0; n < e.nodes.length; n++) {
                var r = e.nodes[n];
                if (4 & r.flags) {
                    var o = Wr(t, n).template._projectedViews;
                    if (o) for (var i = 0; i < o.length; i++) {
                        var s = o[i];
                        s.state |= 32, ho(s, t)
                    }
                } else 0 == (4 & r.childFlags) && (n += r.childCount)
            }
        }

        function es(t, e, n, r, o, i, s, a, u, l, c, p, h) {
            return 0 === n ? function (t, e, n, r, o, i, s, a, u, l, c, p) {
                var h = e.bindings.length;
                h > 0 && co(t, e, 0, n), h > 1 && co(t, e, 1, r), h > 2 && co(t, e, 2, o), h > 3 && co(t, e, 3, i), h > 4 && co(t, e, 4, s), h > 5 && co(t, e, 5, a), h > 6 && co(t, e, 6, u), h > 7 && co(t, e, 7, l), h > 8 && co(t, e, 8, c), h > 9 && co(t, e, 9, p)
            }(t, e, r, o, i, s, a, u, l, c, p, h) : function (t, e, n) {
                for (var r = 0; r < n.length; r++) co(t, e, r, n[r])
            }(t, e, r), !1
        }

        function ns(t, e) {
            if (Yr(t, e.nodeIndex).dirty) throw Jr($r.createDebugContext(t, e.nodeIndex), "Query " + e.query.id + " not dirty", "Query " + e.query.id + " dirty", 0 != (1 & t.state))
        }

        function rs(t) {
            if (!(128 & t.state)) {
                if (ss(t, os.Destroy), is(t, os.Destroy), Ri(t, 131072), t.disposables) for (var e = 0; e < t.disposables.length; e++) t.disposables[e]();
                !function (t) {
                    if (16 & t.state) {
                        var e = yo(t);
                        if (e) {
                            var n = e.template._projectedViews;
                            n && (Go(n, n.indexOf(t)), $r.dirtyParentQueries(t))
                        }
                    }
                }(t), t.renderer.destroyNode && function (t) {
                    for (var e = t.def.nodes.length, n = 0; n < e; n++) {
                        var r = t.def.nodes[n];
                        1 & r.flags ? t.renderer.destroyNode(Wr(t, n).renderElement) : 2 & r.flags ? t.renderer.destroyNode(Kr(t, n).renderText) : (67108864 & r.flags || 134217728 & r.flags) && Yr(t, n).destroy()
                    }
                }(t), go(t) && t.renderer.destroy(), t.state |= 128
            }
        }

        var os = function (t) {
            return t[t.CreateViewNodes = 0] = "CreateViewNodes", t[t.CheckNoChanges = 1] = "CheckNoChanges", t[t.CheckNoChangesProjectedViews = 2] = "CheckNoChangesProjectedViews", t[t.CheckAndUpdate = 3] = "CheckAndUpdate", t[t.CheckAndUpdateProjectedViews = 4] = "CheckAndUpdateProjectedViews", t[t.Destroy = 5] = "Destroy", t
        }({});

        function is(t, e) {
            var n = t.def;
            if (33554432 & n.nodeFlags) for (var r = 0; r < n.nodes.length; r++) {
                var o = n.nodes[r];
                33554432 & o.flags ? as(Wr(t, r).componentView, e) : 0 == (33554432 & o.childFlags) && (r += o.childCount)
            }
        }

        function ss(t, e) {
            var n = t.def;
            if (16777216 & n.nodeFlags) for (var r = 0; r < n.nodes.length; r++) {
                var o = n.nodes[r];
                if (16777216 & o.flags) for (var i = Wr(t, r).viewContainer._embeddedViews, s = 0; s < i.length; s++) as(i[s], e); else 0 == (16777216 & o.childFlags) && (r += o.childCount)
            }
        }

        function as(t, e) {
            var n = t.state;
            switch (e) {
                case os.CheckNoChanges:
                    0 == (128 & n) && (12 == (12 & n) ? $i(t) : 64 & n && us(t, os.CheckNoChangesProjectedViews));
                    break;
                case os.CheckNoChangesProjectedViews:
                    0 == (128 & n) && (32 & n ? $i(t) : 64 & n && us(t, e));
                    break;
                case os.CheckAndUpdate:
                    0 == (128 & n) && (12 == (12 & n) ? Ji(t) : 64 & n && us(t, os.CheckAndUpdateProjectedViews));
                    break;
                case os.CheckAndUpdateProjectedViews:
                    0 == (128 & n) && (32 & n ? Ji(t) : 64 & n && us(t, e));
                    break;
                case os.Destroy:
                    rs(t);
                    break;
                case os.CreateViewNodes:
                    Yi(t)
            }
        }

        function us(t, e) {
            ss(t, e), is(t, e)
        }

        function ls(t, e, n, r) {
            if (t.def.nodeFlags & e && t.def.nodeFlags & n) for (var o = t.def.nodes.length, i = 0; i < o; i++) {
                var s = t.def.nodes[i];
                if (s.flags & e && s.flags & n) switch ($r.setCurrentNode(t, s.nodeIndex), r) {
                    case 0:
                        Mi(t, s);
                        break;
                    case 1:
                        ns(t, s)
                }
                s.childFlags & e && s.childFlags & n || (i += s.childCount)
            }
        }

        var cs = !1;

        function ps(t, e, n, r, o, i) {
            var s = o.injector.get(Ae);
            return Ki(fs(t, o, s, e, n), r, i)
        }

        function hs(t, e, n, r, o, i) {
            var s = o.injector.get(Ae), a = fs(t, o, new Qs(s), e, n), u = Es(r);
            return Bs(Is.create, Ki, null, [a, u, i])
        }

        function fs(t, e, n, r, o) {
            var i = e.injector.get(De), s = e.injector.get(_n), a = n.createRenderer(null, null);
            return {
                ngModule: e,
                injector: t,
                projectableNodes: r,
                selectorOrNode: o,
                sanitizer: i,
                rendererFactory: n,
                renderer: a,
                errorHandler: s
            }
        }

        function ds(t, e, n, r) {
            var o = Es(n);
            return Bs(Is.create, Qi, null, [t, e, o, r])
        }

        function ys(t, e, n, r) {
            return n = _s.get(e.element.componentProvider.provider.token) || Es(n), Bs(Is.create, Wi, null, [t, e, n, r])
        }

        function vs(t, e, n, r) {
            return ci(t, e, n, function (t) {
                var e = function (t) {
                    var e = !1, n = !1;
                    return 0 === ms.size ? {
                        hasOverrides: e,
                        hasDeprecatedOverrides: n
                    } : (t.providers.forEach(function (t) {
                        var r = ms.get(t.token);
                        3840 & t.flags && r && (e = !0, n = n || r.deprecatedBehavior)
                    }), t.modules.forEach(function (t) {
                        gs.forEach(function (r, o) {
                            vt(o).providedIn === t && (e = !0, n = n || r.deprecatedBehavior)
                        })
                    }), {hasOverrides: e, hasDeprecatedOverrides: n})
                }(t), n = e.hasDeprecatedOverrides;
                return e.hasOverrides ? (function (t) {
                    for (var e = 0; e < t.providers.length; e++) {
                        var r = t.providers[e];
                        n && (r.flags |= 4096);
                        var o = ms.get(r.token);
                        o && (r.flags = -3841 & r.flags | o.flags, r.deps = wo(o.deps), r.value = o.value)
                    }
                    if (gs.size > 0) {
                        var i = new Set(t.modules);
                        gs.forEach(function (e, r) {
                            if (i.has(vt(r).providedIn)) {
                                var o = {
                                    token: r,
                                    flags: e.flags | (n ? 4096 : 0),
                                    deps: wo(e.deps),
                                    value: e.value,
                                    index: t.providers.length
                                };
                                t.providers.push(o), t.providersByKey[ro(r)] = o
                            }
                        })
                    }
                }(t = t.factory(function () {
                    return eo
                })), t) : t
            }(r))
        }

        var ms = new Map, gs = new Map, _s = new Map;

        function bs(t) {
            var e;
            ms.set(t.token, t), "function" == typeof t.token && (e = vt(t.token)) && "function" == typeof e.providedIn && gs.set(t.token, t)
        }

        function ws(t, e) {
            var n = Co(e.viewDefFactory), r = Co(n.nodes[0].element.componentView);
            _s.set(t, r)
        }

        function Ss() {
            ms.clear(), gs.clear(), _s.clear()
        }

        function Es(t) {
            if (0 === ms.size) return t;
            var e = function (t) {
                for (var e = [], n = null, r = 0; r < t.nodes.length; r++) {
                    var o = t.nodes[r];
                    1 & o.flags && (n = o), n && 3840 & o.flags && ms.has(o.provider.token) && (e.push(n.nodeIndex), n = null)
                }
                return e
            }(t);
            if (0 === e.length) return t;
            t = t.factory(function () {
                return eo
            });
            for (var n = 0; n < e.length; n++) r(t, e[n]);
            return t;

            function r(t, e) {
                for (var n = e + 1; n < t.nodes.length; n++) {
                    var r = t.nodes[n];
                    if (1 & r.flags) return;
                    if (3840 & r.flags) {
                        var o = r.provider, i = ms.get(o.token);
                        i && (r.flags = -3841 & r.flags | i.flags, o.deps = wo(i.deps), o.value = i.value)
                    }
                }
            }
        }

        function Cs(t, e, n, r, o, i, s, a, u, l, c, p, h) {
            var f = t.def.nodes[e];
            return Xi(t, f, n, r, o, i, s, a, u, l, c, p, h), 224 & f.flags ? Gr(t, e).value : void 0
        }

        function xs(t, e, n, r, o, i, s, a, u, l, c, p, h) {
            var f = t.def.nodes[e];
            return es(t, f, n, r, o, i, s, a, u, l, c, p, h), 224 & f.flags ? Gr(t, e).value : void 0
        }

        function Ts(t) {
            return Bs(Is.detectChanges, Ji, null, [t])
        }

        function ks(t) {
            return Bs(Is.checkNoChanges, $i, null, [t])
        }

        function Ps(t) {
            return Bs(Is.destroy, rs, null, [t])
        }

        var As, Ns, Rs, Is = function (t) {
            return t[t.create = 0] = "create", t[t.detectChanges = 1] = "detectChanges", t[t.checkNoChanges = 2] = "checkNoChanges", t[t.destroy = 3] = "destroy", t[t.handleEvent = 4] = "handleEvent", t
        }({});

        function Os(t, e) {
            Ns = t, Rs = e
        }

        function Ds(t, e, n, r) {
            return Os(t, e), Bs(Is.handleEvent, t.def.handleEvent, null, [t, e, n, r])
        }

        function Ms(t, e) {
            if (128 & t.state) throw to(Is[As]);
            return Os(t, Us(t, 0)), t.def.updateDirectives(function (t, n, r) {
                for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                var s = t.def.nodes[n];
                return 0 === e ? Fs(t, s, r, o) : Ls(t, s, r, o), 16384 & s.flags && Os(t, Us(t, n)), 224 & s.flags ? Gr(t, s.nodeIndex).value : void 0
            }, t)
        }

        function js(t, e) {
            if (128 & t.state) throw to(Is[As]);
            return Os(t, Vs(t, 0)), t.def.updateRenderer(function (t, n, r) {
                for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                var s = t.def.nodes[n];
                return 0 === e ? Fs(t, s, r, o) : Ls(t, s, r, o), 3 & s.flags && Os(t, Vs(t, n)), 224 & s.flags ? Gr(t, s.nodeIndex).value : void 0
            }, t)
        }

        function Fs(t, e, n, r) {
            if (Xi.apply(void 0, c([t, e, n], r))) {
                var o = 1 === n ? r[0] : r;
                if (16384 & e.flags) {
                    for (var i = {}, s = 0; s < e.bindings.length; s++) {
                        var a = e.bindings[s], u = o[s];
                        8 & a.flags && (i[(f = a.nonMinifiedName, "ng-reflect-" + f.replace(/[$@]/g, "_").replace(Bt, function () {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return "-" + t[1].toLowerCase()
                        }))] = qt(u))
                    }
                    var l = e.parent, p = Wr(t, l.nodeIndex).renderElement;
                    if (l.element.name) for (var h in i) null != (u = i[h]) ? t.renderer.setAttribute(p, h, u) : t.renderer.removeAttribute(p, h); else t.renderer.setValue(p, "bindings=" + JSON.stringify(i, null, 2))
                }
            }
            var f
        }

        function Ls(t, e, n, r) {
            es.apply(void 0, c([t, e, n], r))
        }

        function Us(t, e) {
            for (var n = e; n < t.def.nodes.length; n++) {
                var r = t.def.nodes[n];
                if (16384 & r.flags && r.bindings && r.bindings.length) return n
            }
            return null
        }

        function Vs(t, e) {
            for (var n = e; n < t.def.nodes.length; n++) {
                var r = t.def.nodes[n];
                if (3 & r.flags && r.bindings && r.bindings.length) return n
            }
            return null
        }

        var Hs = function () {
            function t(t, e) {
                this.view = t, this.nodeIndex = e, null == e && (this.nodeIndex = e = 0), this.nodeDef = t.def.nodes[e];
                for (var n = this.nodeDef, r = t; n && 0 == (1 & n.flags);) n = n.parent;
                if (!n) for (; !n && r;) n = vo(r), r = r.parent;
                this.elDef = n, this.elView = r
            }

            return Object.defineProperty(t.prototype, "elOrCompView", {
                get: function () {
                    return Wr(this.elView, this.elDef.nodeIndex).componentView || this.view
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "injector", {
                get: function () {
                    return si(this.elView, this.elDef)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "component", {
                get: function () {
                    return this.elOrCompView.component
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "context", {
                get: function () {
                    return this.elOrCompView.context
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "providerTokens", {
                get: function () {
                    var t = [];
                    if (this.elDef) for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                        var n = this.elView.def.nodes[e];
                        20224 & n.flags && t.push(n.provider.token), e += n.childCount
                    }
                    return t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "references", {
                get: function () {
                    var t = {};
                    if (this.elDef) {
                        zs(this.elView, this.elDef, t);
                        for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                            var n = this.elView.def.nodes[e];
                            20224 & n.flags && zs(this.elView, n, t), e += n.childCount
                        }
                    }
                    return t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "componentRenderElement", {
                get: function () {
                    var t = function (t) {
                        for (; t && !go(t);) t = t.parent;
                        return t.parent ? Wr(t.parent, vo(t).nodeIndex) : null
                    }(this.elOrCompView);
                    return t ? t.renderElement : void 0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "renderNode", {
                get: function () {
                    return 2 & this.nodeDef.flags ? mo(this.view, this.nodeDef) : mo(this.elView, this.elDef)
                }, enumerable: !0, configurable: !0
            }), t.prototype.logError = function (t) {
                for (var e, n, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
                2 & this.nodeDef.flags ? (e = this.view.def, n = this.nodeDef.nodeIndex) : (e = this.elView.def, n = this.elDef.nodeIndex);
                var i = function (t, e) {
                    for (var n = -1, r = 0; r <= e; r++) 3 & t.nodes[r].flags && n++;
                    return n
                }(e, n), s = -1;
                e.factory(function () {
                    var e;
                    return ++s === i ? (e = t.error).bind.apply(e, c([t], r)) : eo
                }), s < i && (t.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), t.error.apply(t, c(r)))
            }, t
        }();

        function zs(t, e, n) {
            for (var r in e.references) n[r] = Fi(t, e, e.references[r])
        }

        function Bs(t, e, n, r) {
            var o = As, i = Ns, s = Rs;
            try {
                As = t;
                var a = e.apply(n, r);
                return Ns = i, Rs = s, As = o, a
            } catch (u) {
                if (vn(u) || !Ns) throw u;
                throw function (t, e) {
                    return t instanceof Error || (t = new Error(t.toString())), Xr(t, e), t
                }(u, qs())
            }
        }

        function qs() {
            return Ns ? new Hs(Ns, Rs) : null
        }

        var Qs = function () {
            function t(t) {
                this.delegate = t
            }

            return t.prototype.createRenderer = function (t, e) {
                return new Ks(this.delegate.createRenderer(t, e))
            }, t.prototype.begin = function () {
                this.delegate.begin && this.delegate.begin()
            }, t.prototype.end = function () {
                this.delegate.end && this.delegate.end()
            }, t.prototype.whenRenderingDone = function () {
                return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null)
            }, t
        }(), Ks = function () {
            function t(t) {
                this.delegate = t, this.debugContextFactory = qs, this.data = this.delegate.data
            }

            return t.prototype.createDebugContext = function (t) {
                return this.debugContextFactory(t)
            }, t.prototype.destroyNode = function (t) {
                !function (t) {
                    br.delete(t.nativeNode)
                }(wr(t)), this.delegate.destroyNode && this.delegate.destroyNode(t)
            }, t.prototype.destroy = function () {
                this.delegate.destroy()
            }, t.prototype.createElement = function (t, e) {
                var n = this.delegate.createElement(t, e), r = this.createDebugContext(n);
                if (r) {
                    var o = new _r(n, null, r);
                    o.name = t, Sr(o)
                }
                return n
            }, t.prototype.createComment = function (t) {
                var e = this.delegate.createComment(t), n = this.createDebugContext(e);
                return n && Sr(new gr(e, null, n)), e
            }, t.prototype.createText = function (t) {
                var e = this.delegate.createText(t), n = this.createDebugContext(e);
                return n && Sr(new gr(e, null, n)), e
            }, t.prototype.appendChild = function (t, e) {
                var n = wr(t), r = wr(e);
                n && r && n instanceof _r && n.addChild(r), this.delegate.appendChild(t, e)
            }, t.prototype.insertBefore = function (t, e, n) {
                var r = wr(t), o = wr(e), i = wr(n);
                r && o && r instanceof _r && r.insertBefore(i, o), this.delegate.insertBefore(t, e, n)
            }, t.prototype.removeChild = function (t, e) {
                var n = wr(t), r = wr(e);
                n && r && n instanceof _r && n.removeChild(r), this.delegate.removeChild(t, e)
            }, t.prototype.selectRootElement = function (t, e) {
                var n = this.delegate.selectRootElement(t, e), r = qs();
                return r && Sr(new _r(n, null, r)), n
            }, t.prototype.setAttribute = function (t, e, n, r) {
                var o = wr(t);
                o && o instanceof _r && (o.attributes[r ? r + ":" + e : e] = n), this.delegate.setAttribute(t, e, n, r)
            }, t.prototype.removeAttribute = function (t, e, n) {
                var r = wr(t);
                r && r instanceof _r && (r.attributes[n ? n + ":" + e : e] = null), this.delegate.removeAttribute(t, e, n)
            }, t.prototype.addClass = function (t, e) {
                var n = wr(t);
                n && n instanceof _r && (n.classes[e] = !0), this.delegate.addClass(t, e)
            }, t.prototype.removeClass = function (t, e) {
                var n = wr(t);
                n && n instanceof _r && (n.classes[e] = !1), this.delegate.removeClass(t, e)
            }, t.prototype.setStyle = function (t, e, n, r) {
                var o = wr(t);
                o && o instanceof _r && (o.styles[e] = n), this.delegate.setStyle(t, e, n, r)
            }, t.prototype.removeStyle = function (t, e, n) {
                var r = wr(t);
                r && r instanceof _r && (r.styles[e] = null), this.delegate.removeStyle(t, e, n)
            }, t.prototype.setProperty = function (t, e, n) {
                var r = wr(t);
                r && r instanceof _r && (r.properties[e] = n), this.delegate.setProperty(t, e, n)
            }, t.prototype.listen = function (t, e, n) {
                if ("string" != typeof t) {
                    var r = wr(t);
                    r && r.listeners.push(new mr(e, n))
                }
                return this.delegate.listen(t, e, n)
            }, t.prototype.parentNode = function (t) {
                return this.delegate.parentNode(t)
            }, t.prototype.nextSibling = function (t) {
                return this.delegate.nextSibling(t)
            }, t.prototype.setValue = function (t, e) {
                return this.delegate.setValue(t, e)
            }, t
        }();

        function Ws(t, e, n) {
            return new Zs(t, e, n)
        }

        var Zs = function (t) {
            function e(e, n, r) {
                var o = t.call(this) || this;
                return o.moduleType = e, o._bootstrapComponents = n, o._ngModuleDefFactory = r, o
            }

            return o(e, t), e.prototype.create = function (t) {
                !function () {
                    if (!cs) {
                        cs = !0;
                        var t = Le() ? {
                            setCurrentNode: Os,
                            createRootView: hs,
                            createEmbeddedView: ds,
                            createComponentView: ys,
                            createNgModuleRef: vs,
                            overrideProvider: bs,
                            overrideComponentView: ws,
                            clearOverrides: Ss,
                            checkAndUpdateView: Ts,
                            checkNoChangesView: ks,
                            destroyView: Ps,
                            createDebugContext: function (t, e) {
                                return new Hs(t, e)
                            },
                            handleEvent: Ds,
                            updateDirectives: Ms,
                            updateRenderer: js
                        } : {
                            setCurrentNode: function () {
                            },
                            createRootView: ps,
                            createEmbeddedView: Qi,
                            createComponentView: Wi,
                            createNgModuleRef: ci,
                            overrideProvider: eo,
                            overrideComponentView: eo,
                            clearOverrides: eo,
                            checkAndUpdateView: Ji,
                            checkNoChangesView: $i,
                            destroyView: rs,
                            createDebugContext: function (t, e) {
                                return new Hs(t, e)
                            },
                            handleEvent: function (t, e, n, r) {
                                return t.def.handleEvent(t, e, n, r)
                            },
                            updateDirectives: function (t, e) {
                                return t.def.updateDirectives(0 === e ? Cs : xs, t)
                            },
                            updateRenderer: function (t, e) {
                                return t.def.updateRenderer(0 === e ? Cs : xs, t)
                            }
                        };
                        $r.setCurrentNode = t.setCurrentNode, $r.createRootView = t.createRootView, $r.createEmbeddedView = t.createEmbeddedView, $r.createComponentView = t.createComponentView, $r.createNgModuleRef = t.createNgModuleRef, $r.overrideProvider = t.overrideProvider, $r.overrideComponentView = t.overrideComponentView, $r.clearOverrides = t.clearOverrides, $r.checkAndUpdateView = t.checkAndUpdateView, $r.checkNoChangesView = t.checkNoChangesView, $r.destroyView = t.destroyView, $r.resolveDep = Pi, $r.createDebugContext = t.createDebugContext, $r.handleEvent = t.handleEvent, $r.updateDirectives = t.updateDirectives, $r.updateRenderer = t.updateRenderer, $r.dirtyParentQueries = Di
                    }
                }();
                var e = function (t) {
                    var e = Array.from(t.providers), n = Array.from(t.modules), r = {};
                    for (var o in t.providersByKey) r[o] = t.providersByKey[o];
                    return {factory: t.factory, isRoot: t.isRoot, providers: e, modules: n, providersByKey: r}
                }(Co(this._ngModuleDefFactory));
                return $r.createNgModuleRef(this.moduleType, t || ee.NULL, this._bootstrapComponents, e)
            }, e
        }(xe), Gs = {production: !0, deployUrl: "/"}, Ys = function () {
            return function () {
            }
        }(), $s = function () {
            function t() {
            }

            return t.prototype.ngOnInit = function () {
            }, t
        }(), Js = function () {
            return function () {
            }
        }(), Xs = new mt("Location Initialized"), ta = function () {
            return function () {
            }
        }(), ea = new mt("appBaseHref"), na = function () {
            function t(t) {
                var n = this;
                this._subject = new an, this._platformStrategy = t;
                var r = this._platformStrategy.getBaseHref();
                this._baseHref = e.stripTrailingSlash(ra(r)), this._platformStrategy.onPopState(function (t) {
                    n._subject.emit({url: n.path(!0), pop: !0, state: t.state, type: t.type})
                })
            }

            var e;
            return e = t, t.prototype.path = function (t) {
                return void 0 === t && (t = !1), this.normalize(this._platformStrategy.path(t))
            }, t.prototype.isCurrentPathEqualTo = function (t, n) {
                return void 0 === n && (n = ""), this.path() == this.normalize(t + e.normalizeQueryParams(n))
            }, t.prototype.normalize = function (t) {
                return e.stripTrailingSlash(function (t, e) {
                    return t && e.startsWith(t) ? e.substring(t.length) : e
                }(this._baseHref, ra(t)))
            }, t.prototype.prepareExternalUrl = function (t) {
                return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t)
            }, t.prototype.go = function (t, e, n) {
                void 0 === e && (e = ""), void 0 === n && (n = null), this._platformStrategy.pushState(n, "", t, e)
            }, t.prototype.replaceState = function (t, e, n) {
                void 0 === e && (e = ""), void 0 === n && (n = null), this._platformStrategy.replaceState(n, "", t, e)
            }, t.prototype.forward = function () {
                this._platformStrategy.forward()
            }, t.prototype.back = function () {
                this._platformStrategy.back()
            }, t.prototype.subscribe = function (t, e, n) {
                return this._subject.subscribe({next: t, error: e, complete: n})
            }, t.normalizeQueryParams = function (t) {
                return t && "?" !== t[0] ? "?" + t : t
            }, t.joinWithSlash = function (t, e) {
                if (0 == t.length) return e;
                if (0 == e.length) return t;
                var n = 0;
                return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
            }, t.stripTrailingSlash = function (t) {
                var e = t.match(/#|\?|$/), n = e && e.index || t.length;
                return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
            }, t
        }();

        function ra(t) {
            return t.replace(/\/index.html$/, "")
        }

        var oa = function (t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r._platformLocation = e, r._baseHref = "", null != n && (r._baseHref = n), r
                }

                return o(e, t), e.prototype.onPopState = function (t) {
                    this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                }, e.prototype.getBaseHref = function () {
                    return this._baseHref
                }, e.prototype.path = function (t) {
                    void 0 === t && (t = !1);
                    var e = this._platformLocation.hash;
                    return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
                }, e.prototype.prepareExternalUrl = function (t) {
                    var e = na.joinWithSlash(this._baseHref, t);
                    return e.length > 0 ? "#" + e : e
                }, e.prototype.pushState = function (t, e, n, r) {
                    var o = this.prepareExternalUrl(n + na.normalizeQueryParams(r));
                    0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.pushState(t, e, o)
                }, e.prototype.replaceState = function (t, e, n, r) {
                    var o = this.prepareExternalUrl(n + na.normalizeQueryParams(r));
                    0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, o)
                }, e.prototype.forward = function () {
                    this._platformLocation.forward()
                }, e.prototype.back = function () {
                    this._platformLocation.back()
                }, e
            }(ta), ia = function (t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    if (r._platformLocation = e, null == n && (n = r._platformLocation.getBaseHrefFromDOM()), null == n) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                    return r._baseHref = n, r
                }

                return o(e, t), e.prototype.onPopState = function (t) {
                    this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                }, e.prototype.getBaseHref = function () {
                    return this._baseHref
                }, e.prototype.prepareExternalUrl = function (t) {
                    return na.joinWithSlash(this._baseHref, t)
                }, e.prototype.path = function (t) {
                    void 0 === t && (t = !1);
                    var e = this._platformLocation.pathname + na.normalizeQueryParams(this._platformLocation.search),
                        n = this._platformLocation.hash;
                    return n && t ? "" + e + n : e
                }, e.prototype.pushState = function (t, e, n, r) {
                    var o = this.prepareExternalUrl(n + na.normalizeQueryParams(r));
                    this._platformLocation.pushState(t, e, o)
                }, e.prototype.replaceState = function (t, e, n, r) {
                    var o = this.prepareExternalUrl(n + na.normalizeQueryParams(r));
                    this._platformLocation.replaceState(t, e, o)
                }, e.prototype.forward = function () {
                    this._platformLocation.forward()
                }, e.prototype.back = function () {
                    this._platformLocation.back()
                }, e
            }(ta), sa = void 0,
            aa = ["en", [["a", "p"], ["AM", "PM"], sa], [["AM", "PM"], sa, sa], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], sa, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], sa, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", sa, "{1} 'at' {0}", sa], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "$", "US Dollar", {}, function (t) {
                var e = Math.floor(Math.abs(t)), n = t.toString().replace(/^[^.]*\.?/, "").length;
                return 1 === e && 0 === n ? 1 : 5
            }], ua = {}, la = function (t) {
                return t[t.Zero = 0] = "Zero", t[t.One = 1] = "One", t[t.Two = 2] = "Two", t[t.Few = 3] = "Few", t[t.Many = 4] = "Many", t[t.Other = 5] = "Other", t
            }({}), ca = new mt("UseV4Plurals"), pa = function () {
                return function () {
                }
            }(), ha = function (t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r.locale = e, r.deprecatedPluralFn = n, r
                }

                return o(e, t), e.prototype.getPluralCategory = function (t, e) {
                    switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(e || this.locale, t) : function (t) {
                        return function (t) {
                            var e = t.toLowerCase().replace(/_/g, "-"), n = ua[e];
                            if (n) return n;
                            var r = e.split("-")[0];
                            if (n = ua[r]) return n;
                            if ("en" === r) return aa;
                            throw new Error('Missing locale data for the locale "' + t + '".')
                        }(t)[18]
                    }(e || this.locale)(t)) {
                        case la.Zero:
                            return "zero";
                        case la.One:
                            return "one";
                        case la.Two:
                            return "two";
                        case la.Few:
                            return "few";
                        case la.Many:
                            return "many";
                        default:
                            return "other"
                    }
                }, e
            }(pa), fa = function () {
                return function () {
                }
            }(), da = new mt("DocumentToken"), ya = "server", va = function () {
                function t() {
                }

                return t.ngInjectableDef = yt({
                    providedIn: "root", factory: function () {
                        return new ma(zt(da), window)
                    }
                }), t
            }(), ma = function () {
                function t(t, e) {
                    this.document = t, this.window = e, this.offset = function () {
                        return [0, 0]
                    }
                }

                return t.prototype.setOffset = function (t) {
                    this.offset = Array.isArray(t) ? function () {
                        return t
                    } : t
                }, t.prototype.getScrollPosition = function () {
                    return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
                }, t.prototype.scrollToPosition = function (t) {
                    this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1])
                }, t.prototype.scrollToAnchor = function (t) {
                    if (this.supportScrollRestoration()) {
                        var e = this.document.querySelector("#" + t);
                        if (e) return void this.scrollToElement(e);
                        var n = this.document.querySelector("[name='" + t + "']");
                        if (n) return void this.scrollToElement(n)
                    }
                }, t.prototype.setHistoryScrollRestoration = function (t) {
                    if (this.supportScrollRestoration()) {
                        var e = this.window.history;
                        e && e.scrollRestoration && (e.scrollRestoration = t)
                    }
                }, t.prototype.scrollToElement = function (t) {
                    var e = t.getBoundingClientRect(), n = e.left + this.window.pageXOffset,
                        r = e.top + this.window.pageYOffset, o = this.offset();
                    this.window.scrollTo(n - o[0], r - o[1])
                }, t.prototype.supportScrollRestoration = function () {
                    try {
                        return !!this.window && !!this.window.scrollTo
                    } catch (t) {
                        return !1
                    }
                }, t
            }(), ga = new A(function (t) {
                return t.complete()
            });

        function _a(t) {
            return t ? function (t) {
                return new A(function (e) {
                    return t.schedule(function () {
                        return e.complete()
                    })
                })
            }(t) : ga
        }

        function ba(t) {
            var e = new A(function (e) {
                e.next(t), e.complete()
            });
            return e._isScalar = !0, e.value = t, e
        }

        function wa() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = t[t.length - 1];
            switch (F(n) ? t.pop() : n = void 0, t.length) {
                case 0:
                    return _a(n);
                case 1:
                    return n ? X(t, n) : ba(t[0]);
                default:
                    return X(t, n)
            }
        }

        var Sa = function (t) {
            function e(e) {
                var n = t.call(this) || this;
                return n._value = e, n
            }

            return o(e, t), Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this.getValue()
                }, enumerable: !0, configurable: !0
            }), e.prototype._subscribe = function (e) {
                var n = t.prototype._subscribe.call(this, e);
                return n && !n.closed && e.next(this._value), n
            }, e.prototype.getValue = function () {
                if (this.hasError) throw this.thrownError;
                if (this.closed) throw new I;
                return this._value
            }, e.prototype.next = function (e) {
                t.prototype.next.call(this, this._value = e)
            }, e
        }(M);

        function Ea() {
            return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
        }

        Ea.prototype = Object.create(Error.prototype);
        var Ca = Ea, xa = {}, Ta = function () {
            function t(t) {
                this.resultSelector = t
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new ka(t, this.resultSelector))
            }, t
        }(), ka = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.resultSelector = n, r.active = 0, r.values = [], r.observables = [], r
            }

            return o(e, t), e.prototype._next = function (t) {
                this.values.push(xa), this.observables.push(t)
            }, e.prototype._complete = function () {
                var t = this.observables, e = t.length;
                if (0 === e) this.destination.complete(); else {
                    this.active = e, this.toRespond = e;
                    for (var n = 0; n < e; n++) {
                        var r = t[n];
                        this.add(Z(this, r, r, n))
                    }
                }
            }, e.prototype.notifyComplete = function (t) {
                0 == (this.active -= 1) && this.destination.complete()
            }, e.prototype.notifyNext = function (t, e, n, r, o) {
                var i = this.values, s = this.toRespond ? i[n] === xa ? --this.toRespond : this.toRespond : 0;
                i[n] = e, 0 === s && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice()))
            }, e.prototype._tryResultSelector = function (t) {
                var e;
                try {
                    e = this.resultSelector.apply(this, t)
                } catch (n) {
                    return void this.destination.error(n)
                }
                this.destination.next(e)
            }, e
        }(G);

        function Pa(t) {
            return new A(function (e) {
                var n;
                try {
                    n = t()
                } catch (r) {
                    return void e.error(r)
                }
                return (n ? tt(n) : _a()).subscribe(e)
            })
        }

        function Aa() {
            return it(1)
        }

        function Na(t, e) {
            return function (n) {
                return n.lift(new Ra(t, e))
            }
        }

        var Ra = function () {
            function t(t, e) {
                this.predicate = t, this.thisArg = e
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new Ia(t, this.predicate, this.thisArg))
            }, t
        }(), Ia = function (t) {
            function e(e, n, r) {
                var o = t.call(this, e) || this;
                return o.predicate = n, o.thisArg = r, o.count = 0, o
            }

            return o(e, t), e.prototype._next = function (t) {
                var e;
                try {
                    e = this.predicate.call(this.thisArg, t, this.count++)
                } catch (n) {
                    return void this.destination.error(n)
                }
                e && this.destination.next(t)
            }, e
        }(E);

        function Oa() {
            return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
        }

        Oa.prototype = Object.create(Error.prototype);
        var Da = Oa;

        function Ma(t) {
            return function (e) {
                return 0 === t ? _a() : e.lift(new ja(t))
            }
        }

        var ja = function () {
            function t(t) {
                if (this.total = t, this.total < 0) throw new Da
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new Fa(t, this.total))
            }, t
        }(), Fa = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.total = n, r.ring = new Array, r.count = 0, r
            }

            return o(e, t), e.prototype._next = function (t) {
                var e = this.ring, n = this.total, r = this.count++;
                e.length < n ? e.push(t) : e[r % n] = t
            }, e.prototype._complete = function () {
                var t = this.destination, e = this.count;
                if (e > 0) for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, o = 0; o < n; o++) {
                    var i = e++ % n;
                    t.next(r[i])
                }
                t.complete()
            }, e
        }(E);

        function La(t, e, n) {
            return function (r) {
                return r.lift(new Ua(t, e, n))
            }
        }

        var Ua = function () {
            function t(t, e, n) {
                this.nextOrObserver = t, this.error = e, this.complete = n
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new Va(t, this.nextOrObserver, this.error, this.complete))
            }, t
        }(), Va = function (t) {
            function e(e, n, r, o) {
                var i = t.call(this, e) || this;
                return i._tapNext = T, i._tapError = T, i._tapComplete = T, i._tapError = r || T, i._tapComplete = o || T, f(n) ? (i._context = i, i._tapNext = n) : n && (i._context = n, i._tapNext = n.next || T, i._tapError = n.error || T, i._tapComplete = n.complete || T), i
            }

            return o(e, t), e.prototype._next = function (t) {
                try {
                    this._tapNext.call(this._context, t)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.next(t)
            }, e.prototype._error = function (t) {
                try {
                    this._tapError.call(this._context, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.error(t)
            }, e.prototype._complete = function () {
                try {
                    this._tapComplete.call(this._context)
                } catch (t) {
                    return void this.destination.error(t)
                }
                return this.destination.complete()
            }, e
        }(E), Ha = function (t) {
            return void 0 === t && (t = za), La({
                hasValue: !1, next: function () {
                    this.hasValue = !0
                }, complete: function () {
                    if (!this.hasValue) throw t()
                }
            })
        };

        function za() {
            return new Ca
        }

        function Ba(t) {
            return void 0 === t && (t = null), function (e) {
                return e.lift(new qa(t))
            }
        }

        var qa = function () {
            function t(t) {
                this.defaultValue = t
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new Qa(t, this.defaultValue))
            }, t
        }(), Qa = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.defaultValue = n, r.isEmpty = !0, r
            }

            return o(e, t), e.prototype._next = function (t) {
                this.isEmpty = !1, this.destination.next(t)
            }, e.prototype._complete = function () {
                this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
            }, e
        }(E);

        function Ka(t, e) {
            var n = arguments.length >= 2;
            return function (r) {
                return r.pipe(t ? Na(function (e, n) {
                    return t(e, n, r)
                }) : ot, Ma(1), n ? Ba(e) : Ha(function () {
                    return new Ca
                }))
            }
        }

        function Wa(t) {
            return function (e) {
                var n = new Za(t), r = e.lift(n);
                return n.caught = r
            }
        }

        var Za = function () {
            function t(t) {
                this.selector = t
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new Ga(t, this.selector, this.caught))
            }, t
        }(), Ga = function (t) {
            function e(e, n, r) {
                var o = t.call(this, e) || this;
                return o.selector = n, o.caught = r, o
            }

            return o(e, t), e.prototype.error = function (e) {
                if (!this.isStopped) {
                    var n = void 0;
                    try {
                        n = this.selector(e, this.caught)
                    } catch (o) {
                        return void t.prototype.error.call(this, o)
                    }
                    this._unsubscribeAndRecycle();
                    var r = new L(this, void 0, void 0);
                    this.add(r), Z(this, n, void 0, void 0, r)
                }
            }, e
        }(G);

        function Ya(t) {
            return function (e) {
                return 0 === t ? _a() : e.lift(new $a(t))
            }
        }

        var $a = function () {
            function t(t) {
                if (this.total = t, this.total < 0) throw new Da
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new Ja(t, this.total))
            }, t
        }(), Ja = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.total = n, r.count = 0, r
            }

            return o(e, t), e.prototype._next = function (t) {
                var e = this.total, n = ++this.count;
                n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
            }, e
        }(E);

        function Xa(t, e) {
            var n = arguments.length >= 2;
            return function (r) {
                return r.pipe(t ? Na(function (e, n) {
                    return t(e, n, r)
                }) : ot, Ya(1), n ? Ba(e) : Ha(function () {
                    return new Ca
                }))
            }
        }

        var tu = function () {
            function t(t, e, n) {
                this.predicate = t, this.thisArg = e, this.source = n
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new eu(t, this.predicate, this.thisArg, this.source))
            }, t
        }(), eu = function (t) {
            function e(e, n, r, o) {
                var i = t.call(this, e) || this;
                return i.predicate = n, i.thisArg = r, i.source = o, i.index = 0, i.thisArg = r || i, i
            }

            return o(e, t), e.prototype.notifyComplete = function (t) {
                this.destination.next(t), this.destination.complete()
            }, e.prototype._next = function (t) {
                var e = !1;
                try {
                    e = this.predicate.call(this.thisArg, t, this.index++, this.source)
                } catch (n) {
                    return void this.destination.error(n)
                }
                e || this.notifyComplete(!1)
            }, e.prototype._complete = function () {
                this.notifyComplete(!0)
            }, e
        }(E);

        function nu(t, e) {
            return "function" == typeof e ? function (n) {
                return n.pipe(nu(function (n, r) {
                    return tt(t(n, r)).pipe(Y(function (t, o) {
                        return e(n, t, r, o)
                    }))
                }))
            } : function (e) {
                return e.lift(new ru(t))
            }
        }

        var ru = function () {
            function t(t) {
                this.project = t
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new ou(t, this.project))
            }, t
        }(), ou = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.project = n, r.index = 0, r
            }

            return o(e, t), e.prototype._next = function (t) {
                var e, n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (r) {
                    return void this.destination.error(r)
                }
                this._innerSub(e, t, n)
            }, e.prototype._innerSub = function (t, e, n) {
                var r = this.innerSubscription;
                r && r.unsubscribe();
                var o = new L(this, void 0, void 0);
                this.destination.add(o), this.innerSubscription = Z(this, t, e, n, o)
            }, e.prototype._complete = function () {
                var e = this.innerSubscription;
                e && !e.closed || t.prototype._complete.call(this), this.unsubscribe()
            }, e.prototype._unsubscribe = function () {
                this.innerSubscription = null
            }, e.prototype.notifyComplete = function (e) {
                this.destination.remove(e), this.innerSubscription = null, this.isStopped && t.prototype._complete.call(this)
            }, e.prototype.notifyNext = function (t, e, n, r, o) {
                this.destination.next(e)
            }, e
        }(G);

        function iu(t, e) {
            var n = !1;
            return arguments.length >= 2 && (n = !0), function (r) {
                return r.lift(new su(t, e, n))
            }
        }

        var su = function () {
            function t(t, e, n) {
                void 0 === n && (n = !1), this.accumulator = t, this.seed = e, this.hasSeed = n
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new au(t, this.accumulator, this.seed, this.hasSeed))
            }, t
        }(), au = function (t) {
            function e(e, n, r, o) {
                var i = t.call(this, e) || this;
                return i.accumulator = n, i._seed = r, i.hasSeed = o, i.index = 0, i
            }

            return o(e, t), Object.defineProperty(e.prototype, "seed", {
                get: function () {
                    return this._seed
                }, set: function (t) {
                    this.hasSeed = !0, this._seed = t
                }, enumerable: !0, configurable: !0
            }), e.prototype._next = function (t) {
                if (this.hasSeed) return this._tryNext(t);
                this.seed = t, this.destination.next(t)
            }, e.prototype._tryNext = function (t) {
                var e, n = this.index++;
                try {
                    e = this.accumulator(this.seed, t, n)
                } catch (r) {
                    this.destination.error(r)
                }
                this.seed = e, this.destination.next(e)
            }, e
        }(E);

        function uu(t, e) {
            return et(t, e, 1)
        }

        var lu = function () {
            function t(t) {
                this.callback = t
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new cu(t, this.callback))
            }, t
        }(), cu = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.add(new v(n)), r
            }

            return o(e, t), e
        }(E), pu = null;

        function hu() {
            return pu
        }

        var fu, du = {class: "className", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex"}, yu = {
            "\b": "Backspace",
            "\t": "Tab",
            "\x7f": "Delete",
            "\x1b": "Escape",
            Del: "Delete",
            Esc: "Escape",
            Left: "ArrowLeft",
            Right: "ArrowRight",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Menu: "ContextMenu",
            Scroll: "ScrollLock",
            Win: "OS"
        }, vu = {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
            E: "5",
            F: "6",
            G: "7",
            H: "8",
            I: "9",
            J: "*",
            K: "+",
            M: "-",
            N: ".",
            O: "/",
            "`": "0",
            "\x90": "NumLock"
        };
        Et.Node && (fu = Et.Node.prototype.contains || function (t) {
            return !!(16 & this.compareDocumentPosition(t))
        });
        var mu, gu = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return o(e, t), e.prototype.parse = function (t) {
                throw new Error("parse not implemented")
            }, e.makeCurrent = function () {
                var t;
                t = new e, pu || (pu = t)
            }, e.prototype.hasProperty = function (t, e) {
                return e in t
            }, e.prototype.setProperty = function (t, e, n) {
                t[e] = n
            }, e.prototype.getProperty = function (t, e) {
                return t[e]
            }, e.prototype.invoke = function (t, e, n) {
                var r;
                (r = t)[e].apply(r, c(n))
            }, e.prototype.logError = function (t) {
                window.console && (console.error ? console.error(t) : console.log(t))
            }, e.prototype.log = function (t) {
                window.console && window.console.log && window.console.log(t)
            }, e.prototype.logGroup = function (t) {
                window.console && window.console.group && window.console.group(t)
            }, e.prototype.logGroupEnd = function () {
                window.console && window.console.groupEnd && window.console.groupEnd()
            }, Object.defineProperty(e.prototype, "attrToPropMap", {
                get: function () {
                    return du
                }, enumerable: !0, configurable: !0
            }), e.prototype.contains = function (t, e) {
                return fu.call(t, e)
            }, e.prototype.querySelector = function (t, e) {
                return t.querySelector(e)
            }, e.prototype.querySelectorAll = function (t, e) {
                return t.querySelectorAll(e)
            }, e.prototype.on = function (t, e, n) {
                t.addEventListener(e, n, !1)
            }, e.prototype.onAndCancel = function (t, e, n) {
                return t.addEventListener(e, n, !1), function () {
                    t.removeEventListener(e, n, !1)
                }
            }, e.prototype.dispatchEvent = function (t, e) {
                t.dispatchEvent(e)
            }, e.prototype.createMouseEvent = function (t) {
                var e = this.getDefaultDocument().createEvent("MouseEvent");
                return e.initEvent(t, !0, !0), e
            }, e.prototype.createEvent = function (t) {
                var e = this.getDefaultDocument().createEvent("Event");
                return e.initEvent(t, !0, !0), e
            }, e.prototype.preventDefault = function (t) {
                t.preventDefault(), t.returnValue = !1
            }, e.prototype.isPrevented = function (t) {
                return t.defaultPrevented || null != t.returnValue && !t.returnValue
            }, e.prototype.getInnerHTML = function (t) {
                return t.innerHTML
            }, e.prototype.getTemplateContent = function (t) {
                return "content" in t && this.isTemplateElement(t) ? t.content : null
            }, e.prototype.getOuterHTML = function (t) {
                return t.outerHTML
            }, e.prototype.nodeName = function (t) {
                return t.nodeName
            }, e.prototype.nodeValue = function (t) {
                return t.nodeValue
            }, e.prototype.type = function (t) {
                return t.type
            }, e.prototype.content = function (t) {
                return this.hasProperty(t, "content") ? t.content : t
            }, e.prototype.firstChild = function (t) {
                return t.firstChild
            }, e.prototype.nextSibling = function (t) {
                return t.nextSibling
            }, e.prototype.parentElement = function (t) {
                return t.parentNode
            }, e.prototype.childNodes = function (t) {
                return t.childNodes
            }, e.prototype.childNodesAsList = function (t) {
                for (var e = t.childNodes, n = new Array(e.length), r = 0; r < e.length; r++) n[r] = e[r];
                return n
            }, e.prototype.clearNodes = function (t) {
                for (; t.firstChild;) t.removeChild(t.firstChild)
            }, e.prototype.appendChild = function (t, e) {
                t.appendChild(e)
            }, e.prototype.removeChild = function (t, e) {
                t.removeChild(e)
            }, e.prototype.replaceChild = function (t, e, n) {
                t.replaceChild(e, n)
            }, e.prototype.remove = function (t) {
                return t.parentNode && t.parentNode.removeChild(t), t
            }, e.prototype.insertBefore = function (t, e, n) {
                t.insertBefore(n, e)
            }, e.prototype.insertAllBefore = function (t, e, n) {
                n.forEach(function (n) {
                    return t.insertBefore(n, e)
                })
            }, e.prototype.insertAfter = function (t, e, n) {
                t.insertBefore(n, e.nextSibling)
            }, e.prototype.setInnerHTML = function (t, e) {
                t.innerHTML = e
            }, e.prototype.getText = function (t) {
                return t.textContent
            }, e.prototype.setText = function (t, e) {
                t.textContent = e
            }, e.prototype.getValue = function (t) {
                return t.value
            }, e.prototype.setValue = function (t, e) {
                t.value = e
            }, e.prototype.getChecked = function (t) {
                return t.checked
            }, e.prototype.setChecked = function (t, e) {
                t.checked = e
            }, e.prototype.createComment = function (t) {
                return this.getDefaultDocument().createComment(t)
            }, e.prototype.createTemplate = function (t) {
                var e = this.getDefaultDocument().createElement("template");
                return e.innerHTML = t, e
            }, e.prototype.createElement = function (t, e) {
                return (e = e || this.getDefaultDocument()).createElement(t)
            }, e.prototype.createElementNS = function (t, e, n) {
                return (n = n || this.getDefaultDocument()).createElementNS(t, e)
            }, e.prototype.createTextNode = function (t, e) {
                return (e = e || this.getDefaultDocument()).createTextNode(t)
            }, e.prototype.createScriptTag = function (t, e, n) {
                var r = (n = n || this.getDefaultDocument()).createElement("SCRIPT");
                return r.setAttribute(t, e), r
            }, e.prototype.createStyleElement = function (t, e) {
                var n = (e = e || this.getDefaultDocument()).createElement("style");
                return this.appendChild(n, this.createTextNode(t, e)), n
            }, e.prototype.createShadowRoot = function (t) {
                return t.createShadowRoot()
            }, e.prototype.getShadowRoot = function (t) {
                return t.shadowRoot
            }, e.prototype.getHost = function (t) {
                return t.host
            }, e.prototype.clone = function (t) {
                return t.cloneNode(!0)
            }, e.prototype.getElementsByClassName = function (t, e) {
                return t.getElementsByClassName(e)
            }, e.prototype.getElementsByTagName = function (t, e) {
                return t.getElementsByTagName(e)
            }, e.prototype.classList = function (t) {
                return Array.prototype.slice.call(t.classList, 0)
            }, e.prototype.addClass = function (t, e) {
                t.classList.add(e)
            }, e.prototype.removeClass = function (t, e) {
                t.classList.remove(e)
            }, e.prototype.hasClass = function (t, e) {
                return t.classList.contains(e)
            }, e.prototype.setStyle = function (t, e, n) {
                t.style[e] = n
            }, e.prototype.removeStyle = function (t, e) {
                t.style[e] = ""
            }, e.prototype.getStyle = function (t, e) {
                return t.style[e]
            }, e.prototype.hasStyle = function (t, e, n) {
                var r = this.getStyle(t, e) || "";
                return n ? r == n : r.length > 0
            }, e.prototype.tagName = function (t) {
                return t.tagName
            }, e.prototype.attributeMap = function (t) {
                for (var e = new Map, n = t.attributes, r = 0; r < n.length; r++) {
                    var o = n.item(r);
                    e.set(o.name, o.value)
                }
                return e
            }, e.prototype.hasAttribute = function (t, e) {
                return t.hasAttribute(e)
            }, e.prototype.hasAttributeNS = function (t, e, n) {
                return t.hasAttributeNS(e, n)
            }, e.prototype.getAttribute = function (t, e) {
                return t.getAttribute(e)
            }, e.prototype.getAttributeNS = function (t, e, n) {
                return t.getAttributeNS(e, n)
            }, e.prototype.setAttribute = function (t, e, n) {
                t.setAttribute(e, n)
            }, e.prototype.setAttributeNS = function (t, e, n, r) {
                t.setAttributeNS(e, n, r)
            }, e.prototype.removeAttribute = function (t, e) {
                t.removeAttribute(e)
            }, e.prototype.removeAttributeNS = function (t, e, n) {
                t.removeAttributeNS(e, n)
            }, e.prototype.templateAwareRoot = function (t) {
                return this.isTemplateElement(t) ? this.content(t) : t
            }, e.prototype.createHtmlDocument = function () {
                return document.implementation.createHTMLDocument("fakeTitle")
            }, e.prototype.getDefaultDocument = function () {
                return document
            }, e.prototype.getBoundingClientRect = function (t) {
                try {
                    return t.getBoundingClientRect()
                } catch (e) {
                    return {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0}
                }
            }, e.prototype.getTitle = function (t) {
                return t.title
            }, e.prototype.setTitle = function (t, e) {
                t.title = e || ""
            }, e.prototype.elementMatches = function (t, e) {
                return !!this.isElementNode(t) && (t.matches && t.matches(e) || t.msMatchesSelector && t.msMatchesSelector(e) || t.webkitMatchesSelector && t.webkitMatchesSelector(e))
            }, e.prototype.isTemplateElement = function (t) {
                return this.isElementNode(t) && "TEMPLATE" === t.nodeName
            }, e.prototype.isTextNode = function (t) {
                return t.nodeType === Node.TEXT_NODE
            }, e.prototype.isCommentNode = function (t) {
                return t.nodeType === Node.COMMENT_NODE
            }, e.prototype.isElementNode = function (t) {
                return t.nodeType === Node.ELEMENT_NODE
            }, e.prototype.hasShadowRoot = function (t) {
                return null != t.shadowRoot && t instanceof HTMLElement
            }, e.prototype.isShadowRoot = function (t) {
                return t instanceof DocumentFragment
            }, e.prototype.importIntoDoc = function (t) {
                return document.importNode(this.templateAwareRoot(t), !0)
            }, e.prototype.adoptNode = function (t) {
                return document.adoptNode(t)
            }, e.prototype.getHref = function (t) {
                return t.getAttribute("href")
            }, e.prototype.getEventKey = function (t) {
                var e = t.key;
                if (null == e) {
                    if (null == (e = t.keyIdentifier)) return "Unidentified";
                    e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && vu.hasOwnProperty(e) && (e = vu[e]))
                }
                return yu[e] || e
            }, e.prototype.getGlobalEventTarget = function (t, e) {
                return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null
            }, e.prototype.getHistory = function () {
                return window.history
            }, e.prototype.getLocation = function () {
                return window.location
            }, e.prototype.getBaseHref = function (t) {
                var e, n = _u || (_u = document.querySelector("base")) ? _u.getAttribute("href") : null;
                return null == n ? null : (e = n, mu || (mu = document.createElement("a")), mu.setAttribute("href", e), "/" === mu.pathname.charAt(0) ? mu.pathname : "/" + mu.pathname)
            },e.prototype.resetBaseElement = function () {
                _u = null
            },e.prototype.getUserAgent = function () {
                return window.navigator.userAgent
            },e.prototype.setData = function (t, e, n) {
                this.setAttribute(t, "data-" + e, n)
            },e.prototype.getData = function (t, e) {
                return this.getAttribute(t, "data-" + e)
            },e.prototype.getComputedStyle = function (t) {
                return getComputedStyle(t)
            },e.prototype.supportsWebAnimation = function () {
                return "function" == typeof Element.prototype.animate
            },e.prototype.performanceNow = function () {
                return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
            },e.prototype.supportsCookies = function () {
                return !0
            },e.prototype.getCookie = function (t) {
                return function (t, e) {
                    var n, r;
                    e = encodeURIComponent(e);
                    try {
                        for (var o = u(t.split(";")), i = o.next(); !i.done; i = o.next()) {
                            var s = i.value, a = s.indexOf("="),
                                c = l(-1 == a ? [s, ""] : [s.slice(0, a), s.slice(a + 1)], 2), p = c[1];
                            if (c[0].trim() === e) return decodeURIComponent(p)
                        }
                    } catch (h) {
                        n = {error: h}
                    } finally {
                        try {
                            i && !i.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return null
                }(document.cookie, t)
            },e.prototype.setCookie = function (t, e) {
                document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            },e
        }(function (t) {
            function e() {
                var e = t.call(this) || this;
                e._animationPrefix = null, e._transitionEnd = null;
                try {
                    var n = e.createElement("div", document);
                    if (null != e.getStyle(n, "animationName")) e._animationPrefix = ""; else for (var r = ["Webkit", "Moz", "O", "ms"], o = 0; o < r.length; o++) if (null != e.getStyle(n, r[o] + "AnimationName")) {
                        e._animationPrefix = "-" + r[o].toLowerCase() + "-";
                        break
                    }
                    var i = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                    Object.keys(i).forEach(function (t) {
                        null != e.getStyle(n, t) && (e._transitionEnd = i[t])
                    })
                } catch (s) {
                    e._animationPrefix = null, e._transitionEnd = null
                }
                return e
            }

            return o(e, t), e.prototype.getDistributedNodes = function (t) {
                return t.getDistributedNodes()
            }, e.prototype.resolveAndSetHref = function (t, e, n) {
                t.href = null == n ? e : e + "/../" + n
            }, e.prototype.supportsDOMEvents = function () {
                return !0
            }, e.prototype.supportsNativeShadowDOM = function () {
                return "function" == typeof document.body.createShadowRoot
            }, e.prototype.getAnimationPrefix = function () {
                return this._animationPrefix ? this._animationPrefix : ""
            }, e.prototype.getTransitionEnd = function () {
                return this._transitionEnd ? this._transitionEnd : ""
            }, e.prototype.supportsAnimation = function () {
                return null != this._animationPrefix && null != this._transitionEnd
            }, e
        }(function () {
            function t() {
                this.resourceLoaderType = null
            }

            return Object.defineProperty(t.prototype, "attrToPropMap", {
                get: function () {
                    return this._attrToPropMap
                }, set: function (t) {
                    this._attrToPropMap = t
                }, enumerable: !0, configurable: !0
            }), t
        }())), _u = null, bu = da;

        function wu() {
            return !!window.history.pushState
        }

        var Su = function (t) {
            function e(e) {
                var n = t.call(this) || this;
                return n._doc = e, n._init(), n
            }

            var n;
            return o(e, t), e.prototype._init = function () {
                this.location = hu().getLocation(), this._history = hu().getHistory()
            }, e.prototype.getBaseHrefFromDOM = function () {
                return hu().getBaseHref(this._doc)
            }, e.prototype.onPopState = function (t) {
                hu().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1)
            }, e.prototype.onHashChange = function (t) {
                hu().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1)
            }, Object.defineProperty(e.prototype, "pathname", {
                get: function () {
                    return this.location.pathname
                }, set: function (t) {
                    this.location.pathname = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "search", {
                get: function () {
                    return this.location.search
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "hash", {
                get: function () {
                    return this.location.hash
                }, enumerable: !0, configurable: !0
            }), e.prototype.pushState = function (t, e, n) {
                wu() ? this._history.pushState(t, e, n) : this.location.hash = n
            }, e.prototype.replaceState = function (t, e, n) {
                wu() ? this._history.replaceState(t, e, n) : this.location.hash = n
            }, e.prototype.forward = function () {
                this._history.forward()
            }, e.prototype.back = function () {
                this._history.back()
            }, s([(n = Mt(bu), function (t, e) {
                n(t, e, 0)
            }), a("design:paramtypes", [Object])], e)
        }(Js), Eu = new mt("TRANSITION_ID");

        function Cu(t, e, n) {
            return function () {
                n.get(En).donePromise.then(function () {
                    var n = hu();
                    Array.prototype.slice.apply(n.querySelectorAll(e, "style[ng-transition]")).filter(function (e) {
                        return n.getAttribute(e, "ng-transition") === t
                    }).forEach(function (t) {
                        return n.remove(t)
                    })
                })
            }
        }

        var xu = [{provide: Sn, useFactory: Cu, deps: [Eu, bu, ee], multi: !0}], Tu = function () {
            function t() {
            }

            return t.init = function () {
                var e;
                e = new t, Xn = e
            }, t.prototype.addToWindow = function (t) {
                Et.getAngularTestability = function (e, n) {
                    void 0 === n && (n = !0);
                    var r = t.findTestabilityInTree(e, n);
                    if (null == r) throw new Error("Could not find testability for element.");
                    return r
                }, Et.getAllAngularTestabilities = function () {
                    return t.getAllTestabilities()
                }, Et.getAllAngularRootElements = function () {
                    return t.getAllRootElements()
                }, Et.frameworkStabilizers || (Et.frameworkStabilizers = []), Et.frameworkStabilizers.push(function (t) {
                    var e = Et.getAllAngularTestabilities(), n = e.length, r = !1, o = function (e) {
                        r = r || e, 0 == --n && t(r)
                    };
                    e.forEach(function (t) {
                        t.whenStable(o)
                    })
                })
            }, t.prototype.findTestabilityInTree = function (t, e, n) {
                if (null == e) return null;
                var r = t.getTestability(e);
                return null != r ? r : n ? hu().isShadowRoot(e) ? this.findTestabilityInTree(t, hu().getHost(e), !0) : this.findTestabilityInTree(t, hu().parentElement(e), !0) : null
            }, t
        }();

        function ku(t, e) {
            "undefined" != typeof COMPILED && COMPILED || ((Et.ng = Et.ng || {})[t] = e)
        }

        var Pu = {ApplicationRef: sr, NgZone: Bn};

        function Au(t) {
            return wr(t)
        }

        var Nu = new mt("EventManagerPlugins"), Ru = function () {
            function t(t, e) {
                var n = this;
                this._zone = e, this._eventNameToPlugin = new Map, t.forEach(function (t) {
                    return t.manager = n
                }), this._plugins = t.slice().reverse()
            }

            return t.prototype.addEventListener = function (t, e, n) {
                return this._findPluginFor(e).addEventListener(t, e, n)
            }, t.prototype.addGlobalEventListener = function (t, e, n) {
                return this._findPluginFor(e).addGlobalEventListener(t, e, n)
            }, t.prototype.getZone = function () {
                return this._zone
            }, t.prototype._findPluginFor = function (t) {
                var e = this._eventNameToPlugin.get(t);
                if (e) return e;
                for (var n = this._plugins, r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (o.supports(t)) return this._eventNameToPlugin.set(t, o), o
                }
                throw new Error("No event manager plugin found for event " + t)
            }, t
        }(), Iu = function () {
            function t(t) {
                this._doc = t
            }

            return t.prototype.addGlobalEventListener = function (t, e, n) {
                var r = hu().getGlobalEventTarget(this._doc, t);
                if (!r) throw new Error("Unsupported event target " + r + " for event " + e);
                return this.addEventListener(r, e, n)
            }, t
        }(), Ou = function () {
            function t() {
                this._stylesSet = new Set
            }

            return t.prototype.addStyles = function (t) {
                var e = this, n = new Set;
                t.forEach(function (t) {
                    e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t))
                }), this.onStylesAdded(n)
            }, t.prototype.onStylesAdded = function (t) {
            }, t.prototype.getAllStyles = function () {
                return Array.from(this._stylesSet)
            }, t
        }(), Du = function (t) {
            function e(e) {
                var n = t.call(this) || this;
                return n._doc = e, n._hostNodes = new Set, n._styleNodes = new Set, n._hostNodes.add(e.head), n
            }

            return o(e, t), e.prototype._addStylesToHost = function (t, e) {
                var n = this;
                t.forEach(function (t) {
                    var r = n._doc.createElement("style");
                    r.textContent = t, n._styleNodes.add(e.appendChild(r))
                })
            }, e.prototype.addHost = function (t) {
                this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t)
            }, e.prototype.removeHost = function (t) {
                this._hostNodes.delete(t)
            }, e.prototype.onStylesAdded = function (t) {
                var e = this;
                this._hostNodes.forEach(function (n) {
                    return e._addStylesToHost(t, n)
                })
            }, e.prototype.ngOnDestroy = function () {
                this._styleNodes.forEach(function (t) {
                    return hu().remove(t)
                })
            }, e
        }(Ou), Mu = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }, ju = /%COMP%/g, Fu = "_nghost-%COMP%", Lu = "_ngcontent-%COMP%";

        function Uu(t, e, n) {
            for (var r = 0; r < e.length; r++) {
                var o = e[r];
                Array.isArray(o) ? Uu(t, o, n) : (o = o.replace(ju, t), n.push(o))
            }
            return n
        }

        function Vu(t) {
            return function (e) {
                !1 === t(e) && (e.preventDefault(), e.returnValue = !1)
            }
        }

        var Hu = function () {
            function t(t, e) {
                this.eventManager = t, this.sharedStylesHost = e, this.rendererByCompId = new Map, this.defaultRenderer = new zu(t)
            }

            return t.prototype.createRenderer = function (t, e) {
                if (!t || !e) return this.defaultRenderer;
                switch (e.encapsulation) {
                    case Dt.Emulated:
                        var n = this.rendererByCompId.get(e.id);
                        return n || (n = new Ku(this.eventManager, this.sharedStylesHost, e), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n;
                    case Dt.Native:
                    case Dt.ShadowDom:
                        return new Wu(this.eventManager, this.sharedStylesHost, t, e);
                    default:
                        if (!this.rendererByCompId.has(e.id)) {
                            var r = Uu(e.id, e.styles, []);
                            this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(e.id, this.defaultRenderer)
                        }
                        return this.defaultRenderer
                }
            }, t.prototype.begin = function () {
            }, t.prototype.end = function () {
            }, t
        }(), zu = function () {
            function t(t) {
                this.eventManager = t, this.data = Object.create(null)
            }

            return t.prototype.destroy = function () {
            }, t.prototype.createElement = function (t, e) {
                return e ? document.createElementNS(Mu[e], t) : document.createElement(t)
            }, t.prototype.createComment = function (t) {
                return document.createComment(t)
            }, t.prototype.createText = function (t) {
                return document.createTextNode(t)
            }, t.prototype.appendChild = function (t, e) {
                t.appendChild(e)
            }, t.prototype.insertBefore = function (t, e, n) {
                t && t.insertBefore(e, n)
            }, t.prototype.removeChild = function (t, e) {
                t && t.removeChild(e)
            }, t.prototype.selectRootElement = function (t, e) {
                var n = "string" == typeof t ? document.querySelector(t) : t;
                if (!n) throw new Error('The selector "' + t + '" did not match any elements');
                return e || (n.textContent = ""), n
            }, t.prototype.parentNode = function (t) {
                return t.parentNode
            }, t.prototype.nextSibling = function (t) {
                return t.nextSibling
            }, t.prototype.setAttribute = function (t, e, n, r) {
                if (r) {
                    e = r + ":" + e;
                    var o = Mu[r];
                    o ? t.setAttributeNS(o, e, n) : t.setAttribute(e, n)
                } else t.setAttribute(e, n)
            }, t.prototype.removeAttribute = function (t, e, n) {
                if (n) {
                    var r = Mu[n];
                    r ? t.removeAttributeNS(r, e) : t.removeAttribute(n + ":" + e)
                } else t.removeAttribute(e)
            }, t.prototype.addClass = function (t, e) {
                t.classList.add(e)
            }, t.prototype.removeClass = function (t, e) {
                t.classList.remove(e)
            }, t.prototype.setStyle = function (t, e, n, r) {
                r & Ne.DashCase ? t.style.setProperty(e, n, r & Ne.Important ? "important" : "") : t.style[e] = n
            }, t.prototype.removeStyle = function (t, e, n) {
                n & Ne.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
            }, t.prototype.setProperty = function (t, e, n) {
                qu(e, "property"), t[e] = n
            }, t.prototype.setValue = function (t, e) {
                t.nodeValue = e
            }, t.prototype.listen = function (t, e, n) {
                return qu(e, "listener"), "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, Vu(n)) : this.eventManager.addEventListener(t, e, Vu(n))
            }, t
        }(), Bu = "@".charCodeAt(0);

        function qu(t, e) {
            if (t.charCodeAt(0) === Bu) throw new Error("Found the synthetic " + e + " " + t + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.')
        }

        var Qu, Ku = function (t) {
                function e(e, n, r) {
                    var o = t.call(this, e) || this;
                    o.component = r;
                    var i = Uu(r.id, r.styles, []);
                    return n.addStyles(i), o.contentAttr = Lu.replace(ju, r.id), o.hostAttr = Fu.replace(ju, r.id), o
                }

                return o(e, t), e.prototype.applyToHost = function (e) {
                    t.prototype.setAttribute.call(this, e, this.hostAttr, "")
                }, e.prototype.createElement = function (e, n) {
                    var r = t.prototype.createElement.call(this, e, n);
                    return t.prototype.setAttribute.call(this, r, this.contentAttr, ""), r
                }, e
            }(zu), Wu = function (t) {
                function e(e, n, r, o) {
                    var i = t.call(this, e) || this;
                    i.sharedStylesHost = n, i.hostEl = r, i.component = o, i.shadowRoot = o.encapsulation === Dt.ShadowDom ? r.attachShadow({mode: "open"}) : r.createShadowRoot(), i.sharedStylesHost.addHost(i.shadowRoot);
                    for (var s = Uu(o.id, o.styles, []), a = 0; a < s.length; a++) {
                        var u = document.createElement("style");
                        u.textContent = s[a], i.shadowRoot.appendChild(u)
                    }
                    return i
                }

                return o(e, t), e.prototype.nodeOrShadowRoot = function (t) {
                    return t === this.hostEl ? this.shadowRoot : t
                }, e.prototype.destroy = function () {
                    this.sharedStylesHost.removeHost(this.shadowRoot)
                }, e.prototype.appendChild = function (e, n) {
                    return t.prototype.appendChild.call(this, this.nodeOrShadowRoot(e), n)
                }, e.prototype.insertBefore = function (e, n, r) {
                    return t.prototype.insertBefore.call(this, this.nodeOrShadowRoot(e), n, r)
                }, e.prototype.removeChild = function (e, n) {
                    return t.prototype.removeChild.call(this, this.nodeOrShadowRoot(e), n)
                }, e.prototype.parentNode = function (e) {
                    return this.nodeOrShadowRoot(t.prototype.parentNode.call(this, this.nodeOrShadowRoot(e)))
                }, e
            }(zu), Zu = "undefined" != typeof Zone && Zone.__symbol__ || function (t) {
                return "__zone_symbol__" + t
            }, Gu = Zu("addEventListener"), Yu = Zu("removeEventListener"), $u = {},
            Ju = "__zone_symbol__propagationStopped";
        "undefined" != typeof Zone && Zone[Zu("BLACK_LISTED_EVENTS")] && (Qu = {});
        var Xu = function (t) {
            return !!Qu && Qu.hasOwnProperty(t)
        }, tl = function (t) {
            var e = $u[t.type];
            if (e) {
                var n = this[e];
                if (n) {
                    var r = [t];
                    if (1 === n.length) return (s = n[0]).zone !== Zone.current ? s.zone.run(s.handler, this, r) : s.handler.apply(this, r);
                    for (var o = n.slice(), i = 0; i < o.length && !0 !== t[Ju]; i++) {
                        var s;
                        (s = o[i]).zone !== Zone.current ? s.zone.run(s.handler, this, r) : s.handler.apply(this, r)
                    }
                }
            }
        }, el = function (t) {
            function e(e, n, r) {
                var o = t.call(this, e) || this;
                return o.ngZone = n, r && function (t) {
                    return t === ya
                }(r) || o.patchEvent(), o
            }

            return o(e, t), e.prototype.patchEvent = function () {
                if ("undefined" != typeof Event && Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
                    var t = Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
                    Event.prototype.stopImmediatePropagation = function () {
                        this && (this[Ju] = !0), t && t.apply(this, arguments)
                    }
                }
            }, e.prototype.supports = function (t) {
                return !0
            }, e.prototype.addEventListener = function (t, e, n) {
                var r = this, o = n;
                if (!t[Gu] || Bn.isInAngularZone() && !Xu(e)) t.addEventListener(e, o, !1); else {
                    var i = $u[e];
                    i || (i = $u[e] = Zu("ANGULAR" + e + "FALSE"));
                    var s = t[i], a = s && s.length > 0;
                    s || (s = t[i] = []);
                    var u = Xu(e) ? Zone.root : Zone.current;
                    if (0 === s.length) s.push({zone: u, handler: o}); else {
                        for (var l = !1, c = 0; c < s.length; c++) if (s[c].handler === o) {
                            l = !0;
                            break
                        }
                        l || s.push({zone: u, handler: o})
                    }
                    a || t[Gu](e, tl, !1)
                }
                return function () {
                    return r.removeEventListener(t, e, o)
                }
            }, e.prototype.removeEventListener = function (t, e, n) {
                var r = t[Yu];
                if (!r) return t.removeEventListener.apply(t, [e, n, !1]);
                var o = $u[e], i = o && t[o];
                if (!i) return t.removeEventListener.apply(t, [e, n, !1]);
                for (var s = !1, a = 0; a < i.length; a++) if (i[a].handler === n) {
                    s = !0, i.splice(a, 1);
                    break
                }
                s ? 0 === i.length && r.apply(t, [e, tl, !1]) : t.removeEventListener.apply(t, [e, n, !1])
            }, e
        }(Iu), nl = {
            pan: !0,
            panstart: !0,
            panmove: !0,
            panend: !0,
            pancancel: !0,
            panleft: !0,
            panright: !0,
            panup: !0,
            pandown: !0,
            pinch: !0,
            pinchstart: !0,
            pinchmove: !0,
            pinchend: !0,
            pinchcancel: !0,
            pinchin: !0,
            pinchout: !0,
            press: !0,
            pressup: !0,
            rotate: !0,
            rotatestart: !0,
            rotatemove: !0,
            rotateend: !0,
            rotatecancel: !0,
            swipe: !0,
            swipeleft: !0,
            swiperight: !0,
            swipeup: !0,
            swipedown: !0,
            tap: !0
        }, rl = new mt("HammerGestureConfig"), ol = new mt("HammerLoader"), il = function () {
            function t() {
                this.events = [], this.overrides = {}
            }

            return t.prototype.buildHammer = function (t) {
                var e = new Hammer(t, this.options);
                for (var n in e.get("pinch").set({enable: !0}), e.get("rotate").set({enable: !0}), this.overrides) e.get(n).set(this.overrides[n]);
                return e
            }, t
        }(), sl = function (t) {
            function e(e, n, r, o) {
                var i = t.call(this, e) || this;
                return i._config = n, i.console = r, i.loader = o, i
            }

            return o(e, t), e.prototype.supports = function (t) {
                return !(!nl.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t) || !window.Hammer && !this.loader && (this.console.warn('The "' + t + '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'), 1))
            }, e.prototype.addEventListener = function (t, e, n) {
                var r = this, o = this.manager.getZone();
                if (e = e.toLowerCase(), !window.Hammer && this.loader) {
                    var i = !1, s = function () {
                        i = !0
                    };
                    return this.loader().then(function () {
                        if (!window.Hammer) return r.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."), void (s = function () {
                        });
                        i || (s = r.addEventListener(t, e, n))
                    }).catch(function () {
                        r.console.warn('The "' + e + '" event cannot be bound because the custom Hammer.JS loader failed.'), s = function () {
                        }
                    }), function () {
                        s()
                    }
                }
                return o.runOutsideAngular(function () {
                    var i = r._config.buildHammer(t), s = function (t) {
                        o.runGuarded(function () {
                            n(t)
                        })
                    };
                    return i.on(e, s), function () {
                        i.off(e, s), "function" == typeof i.destroy && i.destroy()
                    }
                })
            }, e.prototype.isCustomEvent = function (t) {
                return this._config.events.indexOf(t) > -1
            }, e
        }(Iu), al = ["alt", "control", "meta", "shift"], ul = {
            alt: function (t) {
                return t.altKey
            }, control: function (t) {
                return t.ctrlKey
            }, meta: function (t) {
                return t.metaKey
            }, shift: function (t) {
                return t.shiftKey
            }
        }, ll = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }

            var n;
            return o(e, t), n = e, e.prototype.supports = function (t) {
                return null != n.parseEventName(t)
            }, e.prototype.addEventListener = function (t, e, r) {
                var o = n.parseEventName(e), i = n.eventCallback(o.fullKey, r, this.manager.getZone());
                return this.manager.getZone().runOutsideAngular(function () {
                    return hu().onAndCancel(t, o.domEventName, i)
                })
            }, e.parseEventName = function (t) {
                var e = t.toLowerCase().split("."), r = e.shift();
                if (0 === e.length || "keydown" !== r && "keyup" !== r) return null;
                var o = n._normalizeKey(e.pop()), i = "";
                if (al.forEach(function (t) {
                    var n = e.indexOf(t);
                    n > -1 && (e.splice(n, 1), i += t + ".")
                }), i += o, 0 != e.length || 0 === o.length) return null;
                var s = {};
                return s.domEventName = r, s.fullKey = i, s
            }, e.getEventFullKey = function (t) {
                var e = "", n = hu().getEventKey(t);
                return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), al.forEach(function (r) {
                    r != n && (0, ul[r])(t) && (e += r + ".")
                }), e += n
            }, e.eventCallback = function (t, e, r) {
                return function (o) {
                    n.getEventFullKey(o) === t && r.runGuarded(function () {
                        return e(o)
                    })
                }
            }, e._normalizeKey = function (t) {
                switch (t) {
                    case"esc":
                        return "escape";
                    default:
                        return t
                }
            }, e
        }(Iu), cl = function () {
            return function () {
            }
        }(), pl = function (t) {
            function e(e) {
                var n = t.call(this) || this;
                return n._doc = e, n
            }

            return o(e, t), e.prototype.sanitize = function (t, e) {
                if (null == e) return null;
                switch (t) {
                    case Oe.NONE:
                        return e;
                    case Oe.HTML:
                        return e instanceof fl ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "HTML"), function (t, e) {
                            var n = null;
                            try {
                                Qe = Qe || new Ue(t);
                                var r = e ? String(e) : "";
                                n = Qe.getInertBodyElement(r);
                                var o = 5, i = r;
                                do {
                                    if (0 === o) throw new Error("Failed to sanitize html because the input is unstable");
                                    o--, r = i, i = n.innerHTML, n = Qe.getInertBodyElement(r)
                                } while (r !== i);
                                var s = new en, a = s.sanitizeChildren(sn(n) || n);
                                return Le() && s.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), a
                            } finally {
                                if (n) for (var u = sn(n) || n; u.firstChild;) u.removeChild(u.firstChild)
                            }
                        }(this._doc, String(e)));
                    case Oe.STYLE:
                        return e instanceof dl ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "Style"), function (t) {
                            if (!(t = String(t).trim())) return "";
                            var e = t.match(pn);
                            return e && ze(e[1]) === e[1] || t.match(cn) && function (t) {
                                for (var e = !0, n = !0, r = 0; r < t.length; r++) {
                                    var o = t.charAt(r);
                                    "'" === o && n ? e = !e : '"' === o && e && (n = !n)
                                }
                                return e && n
                            }(t) ? t : (Le() && console.warn("WARNING: sanitizing unsafe style value " + t + " (see http://g.co/ng/security#xss)."), "unsafe")
                        }(e));
                    case Oe.SCRIPT:
                        if (e instanceof yl) return e.changingThisBreaksApplicationSecurity;
                        throw this.checkNotSafeValue(e, "Script"), new Error("unsafe value used in a script context");
                    case Oe.URL:
                        return e instanceof ml || e instanceof vl ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "URL"), ze(String(e)));
                    case Oe.RESOURCE_URL:
                        if (e instanceof ml) return e.changingThisBreaksApplicationSecurity;
                        throw this.checkNotSafeValue(e, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
                    default:
                        throw new Error("Unexpected SecurityContext " + t + " (see http://g.co/ng/security#xss)")
                }
            }, e.prototype.checkNotSafeValue = function (t, e) {
                if (t instanceof hl) throw new Error("Required a safe " + e + ", got a " + t.getTypeName() + " (see http://g.co/ng/security#xss)")
            }, e.prototype.bypassSecurityTrustHtml = function (t) {
                return new fl(t)
            }, e.prototype.bypassSecurityTrustStyle = function (t) {
                return new dl(t)
            }, e.prototype.bypassSecurityTrustScript = function (t) {
                return new yl(t)
            }, e.prototype.bypassSecurityTrustUrl = function (t) {
                return new vl(t)
            }, e.prototype.bypassSecurityTrustResourceUrl = function (t) {
                return new ml(t)
            }, e
        }(cl), hl = function () {
            function t(t) {
                this.changingThisBreaksApplicationSecurity = t
            }

            return t.prototype.toString = function () {
                return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)"
            }, t
        }(), fl = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return o(e, t), e.prototype.getTypeName = function () {
                return "HTML"
            }, e
        }(hl), dl = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return o(e, t), e.prototype.getTypeName = function () {
                return "Style"
            }, e
        }(hl), yl = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return o(e, t), e.prototype.getTypeName = function () {
                return "Script"
            }, e
        }(hl), vl = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return o(e, t), e.prototype.getTypeName = function () {
                return "URL"
            }, e
        }(hl), ml = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return o(e, t), e.prototype.getTypeName = function () {
                return "ResourceURL"
            }, e
        }(hl), gl = nr(Lr, "browser", [{provide: Tn, useValue: "browser"}, {
            provide: xn, useValue: function () {
                gu.makeCurrent(), Tu.init()
            }, multi: !0
        }, {provide: Js, useClass: Su, deps: [bu]}, {
            provide: bu, useFactory: function () {
                return document
            }, deps: []
        }]);

        function _l() {
            return new _n
        }

        var bl = function () {
            function t(t) {
                if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
            }

            var e;
            return e = t, t.withServerTransition = function (t) {
                return {ngModule: e, providers: [{provide: Cn, useValue: t.appId}, {provide: Eu, useExisting: Cn}, xu]}
            }, t
        }();
        "undefined" != typeof window && window;
        var wl = function () {
            return function (t, e) {
                this.id = t, this.url = e
            }
        }(), Sl = function (t) {
            function e(e, n, r, o) {
                void 0 === r && (r = "imperative"), void 0 === o && (o = null);
                var i = t.call(this, e, n) || this;
                return i.navigationTrigger = r, i.restoredState = o, i
            }

            return o(e, t), e.prototype.toString = function () {
                return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"
            }, e
        }(wl), El = function (t) {
            function e(e, n, r) {
                var o = t.call(this, e, n) || this;
                return o.urlAfterRedirects = r, o
            }

            return o(e, t), e.prototype.toString = function () {
                return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')"
            }, e
        }(wl), Cl = function (t) {
            function e(e, n, r) {
                var o = t.call(this, e, n) || this;
                return o.reason = r, o
            }

            return o(e, t), e.prototype.toString = function () {
                return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"
            }, e
        }(wl), xl = function (t) {
            function e(e, n, r) {
                var o = t.call(this, e, n) || this;
                return o.error = r, o
            }

            return o(e, t), e.prototype.toString = function () {
                return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")"
            }, e
        }(wl), Tl = function (t) {
            function e(e, n, r, o) {
                var i = t.call(this, e, n) || this;
                return i.urlAfterRedirects = r, i.state = o, i
            }

            return o(e, t), e.prototype.toString = function () {
                return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
            }, e
        }(wl), kl = function (t) {
            function e(e, n, r, o) {
                var i = t.call(this, e, n) || this;
                return i.urlAfterRedirects = r, i.state = o, i
            }

            return o(e, t), e.prototype.toString = function () {
                return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
            }, e
        }(wl), Pl = function (t) {
            function e(e, n, r, o, i) {
                var s = t.call(this, e, n) || this;
                return s.urlAfterRedirects = r, s.state = o, s.shouldActivate = i, s
            }

            return o(e, t), e.prototype.toString = function () {
                return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")"
            }, e
        }(wl), Al = function (t) {
            function e(e, n, r, o) {
                var i = t.call(this, e, n) || this;
                return i.urlAfterRedirects = r, i.state = o, i
            }

            return o(e, t), e.prototype.toString = function () {
                return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
            }, e
        }(wl), Nl = function (t) {
            function e(e, n, r, o) {
                var i = t.call(this, e, n) || this;
                return i.urlAfterRedirects = r, i.state = o, i
            }

            return o(e, t), e.prototype.toString = function () {
                return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
            }, e
        }(wl), Rl = function () {
            function t(t) {
                this.route = t
            }

            return t.prototype.toString = function () {
                return "RouteConfigLoadStart(path: " + this.route.path + ")"
            }, t
        }(), Il = function () {
            function t(t) {
                this.route = t
            }

            return t.prototype.toString = function () {
                return "RouteConfigLoadEnd(path: " + this.route.path + ")"
            }, t
        }(), Ol = function () {
            function t(t) {
                this.snapshot = t
            }

            return t.prototype.toString = function () {
                return "ChildActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
            }, t
        }(), Dl = function () {
            function t(t) {
                this.snapshot = t
            }

            return t.prototype.toString = function () {
                return "ChildActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
            }, t
        }(), Ml = function () {
            function t(t) {
                this.snapshot = t
            }

            return t.prototype.toString = function () {
                return "ActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
            }, t
        }(), jl = function () {
            function t(t) {
                this.snapshot = t
            }

            return t.prototype.toString = function () {
                return "ActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
            }, t
        }(), Fl = function () {
            function t(t, e, n) {
                this.routerEvent = t, this.position = e, this.anchor = n
            }

            return t.prototype.toString = function () {
                return "Scroll(anchor: '" + this.anchor + "', position: '" + (this.position ? this.position[0] + ", " + this.position[1] : null) + "')"
            }, t
        }(), Ll = function () {
            return function () {
            }
        }(), Ul = "primary", Vl = function () {
            function t(t) {
                this.params = t || {}
            }

            return t.prototype.has = function (t) {
                return this.params.hasOwnProperty(t)
            }, t.prototype.get = function (t) {
                if (this.has(t)) {
                    var e = this.params[t];
                    return Array.isArray(e) ? e[0] : e
                }
                return null
            }, t.prototype.getAll = function (t) {
                if (this.has(t)) {
                    var e = this.params[t];
                    return Array.isArray(e) ? e : [e]
                }
                return []
            }, Object.defineProperty(t.prototype, "keys", {
                get: function () {
                    return Object.keys(this.params)
                }, enumerable: !0, configurable: !0
            }), t
        }();

        function Hl(t) {
            return new Vl(t)
        }

        var zl = "ngNavigationCancelingError";

        function Bl(t) {
            var e = Error("NavigationCancelingError: " + t);
            return e[zl] = !0, e
        }

        function ql(t, e, n) {
            var r = n.path.split("/");
            if (r.length > t.length) return null;
            if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
            for (var o = {}, i = 0; i < r.length; i++) {
                var s = r[i], a = t[i];
                if (s.startsWith(":")) o[s.substring(1)] = a; else if (s !== a.path) return null
            }
            return {consumed: t.slice(0, r.length), posParams: o}
        }

        var Ql = function () {
            return function (t, e) {
                this.routes = t, this.module = e
            }
        }();

        function Kl(t, e) {
            void 0 === e && (e = "");
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                Wl(r, Zl(e, r))
            }
        }

        function Wl(t, e) {
            if (!t) throw new Error("\n      Invalid configuration of route '" + e + "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
            if (Array.isArray(t)) throw new Error("Invalid configuration of route '" + e + "': Array cannot be specified");
            if (!t.component && !t.children && !t.loadChildren && t.outlet && t.outlet !== Ul) throw new Error("Invalid configuration of route '" + e + "': a componentless route without children or loadChildren cannot have a named outlet set");
            if (t.redirectTo && t.children) throw new Error("Invalid configuration of route '" + e + "': redirectTo and children cannot be used together");
            if (t.redirectTo && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': redirectTo and loadChildren cannot be used together");
            if (t.children && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': children and loadChildren cannot be used together");
            if (t.redirectTo && t.component) throw new Error("Invalid configuration of route '" + e + "': redirectTo and component cannot be used together");
            if (t.path && t.matcher) throw new Error("Invalid configuration of route '" + e + "': path and matcher cannot be used together");
            if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren) throw new Error("Invalid configuration of route '" + e + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
            if (void 0 === t.path && void 0 === t.matcher) throw new Error("Invalid configuration of route '" + e + "': routes must have either a path or a matcher specified");
            if ("string" == typeof t.path && "/" === t.path.charAt(0)) throw new Error("Invalid configuration of route '" + e + "': path cannot start with a slash");
            if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch) throw new Error("Invalid configuration of route '{path: \"" + e + '", redirectTo: "' + t.redirectTo + "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.");
            if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch) throw new Error("Invalid configuration of route '" + e + "': pathMatch can only be set to 'prefix' or 'full'");
            t.children && Kl(t.children, e)
        }

        function Zl(t, e) {
            return e ? t || e.path ? t && !e.path ? t + "/" : !t && e.path ? e.path : t + "/" + e.path : "" : t
        }

        function Gl(t) {
            var e = t.children && t.children.map(Gl), n = e ? i({}, t, {children: e}) : i({}, t);
            return !n.component && (e || n.loadChildren) && n.outlet && n.outlet !== Ul && (n.component = Ll), n
        }

        function Yl(t, e) {
            var n, r = Object.keys(t), o = Object.keys(e);
            if (r.length != o.length) return !1;
            for (var i = 0; i < r.length; i++) if (t[n = r[i]] !== e[n]) return !1;
            return !0
        }

        function $l(t) {
            return Array.prototype.concat.apply([], t)
        }

        function Jl(t) {
            return t.length > 0 ? t[t.length - 1] : null
        }

        function Xl(t, e) {
            for (var n in t) t.hasOwnProperty(n) && e(t[n], n)
        }

        function tc(t) {
            return wn(t) ? t : bn(t) ? tt(Promise.resolve(t)) : wa(t)
        }

        function ec(t, e, n) {
            return n ? function (t, e) {
                return Yl(t, e)
            }(t.queryParams, e.queryParams) && function t(e, n) {
                if (!ic(e.segments, n.segments)) return !1;
                if (e.numberOfChildren !== n.numberOfChildren) return !1;
                for (var r in n.children) {
                    if (!e.children[r]) return !1;
                    if (!t(e.children[r], n.children[r])) return !1
                }
                return !0
            }(t.root, e.root) : function (t, e) {
                return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(function (n) {
                    return e[n] === t[n]
                })
            }(t.queryParams, e.queryParams) && function t(e, n) {
                return function e(n, r, o) {
                    if (n.segments.length > o.length) return !!ic(s = n.segments.slice(0, o.length), o) && !r.hasChildren();
                    if (n.segments.length === o.length) {
                        if (!ic(n.segments, o)) return !1;
                        for (var i in r.children) {
                            if (!n.children[i]) return !1;
                            if (!t(n.children[i], r.children[i])) return !1
                        }
                        return !0
                    }
                    var s = o.slice(0, n.segments.length), a = o.slice(n.segments.length);
                    return !!ic(n.segments, s) && !!n.children[Ul] && e(n.children[Ul], r, a)
                }(e, n, n.segments)
            }(t.root, e.root)
        }

        var nc = function () {
            function t(t, e, n) {
                this.root = t, this.queryParams = e, this.fragment = n
            }

            return Object.defineProperty(t.prototype, "queryParamMap", {
                get: function () {
                    return this._queryParamMap || (this._queryParamMap = Hl(this.queryParams)), this._queryParamMap
                }, enumerable: !0, configurable: !0
            }), t.prototype.toString = function () {
                return lc.serialize(this)
            }, t
        }(), rc = function () {
            function t(t, e) {
                var n = this;
                this.segments = t, this.children = e, this.parent = null, Xl(e, function (t, e) {
                    return t.parent = n
                })
            }

            return t.prototype.hasChildren = function () {
                return this.numberOfChildren > 0
            }, Object.defineProperty(t.prototype, "numberOfChildren", {
                get: function () {
                    return Object.keys(this.children).length
                }, enumerable: !0, configurable: !0
            }), t.prototype.toString = function () {
                return cc(this)
            }, t
        }(), oc = function () {
            function t(t, e) {
                this.path = t, this.parameters = e
            }

            return Object.defineProperty(t.prototype, "parameterMap", {
                get: function () {
                    return this._parameterMap || (this._parameterMap = Hl(this.parameters)), this._parameterMap
                }, enumerable: !0, configurable: !0
            }), t.prototype.toString = function () {
                return vc(this)
            }, t
        }();

        function ic(t, e) {
            return t.length === e.length && t.every(function (t, n) {
                return t.path === e[n].path
            })
        }

        function sc(t, e) {
            var n = [];
            return Xl(t.children, function (t, r) {
                r === Ul && (n = n.concat(e(t, r)))
            }), Xl(t.children, function (t, r) {
                r !== Ul && (n = n.concat(e(t, r)))
            }), n
        }

        var ac = function () {
            return function () {
            }
        }(), uc = function () {
            function t() {
            }

            return t.prototype.parse = function (t) {
                var e = new wc(t);
                return new nc(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
            }, t.prototype.serialize = function (t) {
                var e, n;
                return "/" + function t(e, n) {
                    if (!e.hasChildren()) return cc(e);
                    if (n) {
                        var r = e.children[Ul] ? t(e.children[Ul], !1) : "", o = [];
                        return Xl(e.children, function (e, n) {
                            n !== Ul && o.push(n + ":" + t(e, !1))
                        }), o.length > 0 ? r + "(" + o.join("//") + ")" : r
                    }
                    var i = sc(e, function (n, r) {
                        return r === Ul ? [t(e.children[Ul], !1)] : [r + ":" + t(n, !1)]
                    });
                    return cc(e) + "/(" + i.join("//") + ")"
                }(t.root, !0) + (e = t.queryParams, (n = Object.keys(e).map(function (t) {
                    var n = e[t];
                    return Array.isArray(n) ? n.map(function (e) {
                        return hc(t) + "=" + hc(e)
                    }).join("&") : hc(t) + "=" + hc(n)
                })).length ? "?" + n.join("&") : "") + ("string" == typeof t.fragment ? "#" + encodeURI(t.fragment) : "")
            }, t
        }(), lc = new uc;

        function cc(t) {
            return t.segments.map(function (t) {
                return vc(t)
            }).join("/")
        }

        function pc(t) {
            return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
        }

        function hc(t) {
            return pc(t).replace(/%3B/gi, ";")
        }

        function fc(t) {
            return pc(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
        }

        function dc(t) {
            return decodeURIComponent(t)
        }

        function yc(t) {
            return dc(t.replace(/\+/g, "%20"))
        }

        function vc(t) {
            return "" + fc(t.path) + (e = t.parameters, Object.keys(e).map(function (t) {
                return ";" + fc(t) + "=" + fc(e[t])
            }).join(""));
            var e
        }

        var mc = /^[^\/()?;=#]+/;

        function gc(t) {
            var e = t.match(mc);
            return e ? e[0] : ""
        }

        var _c = /^[^=?&#]+/, bc = /^[^?&#]+/, wc = function () {
            function t(t) {
                this.url = t, this.remaining = t
            }

            return t.prototype.parseRootSegment = function () {
                return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new rc([], {}) : new rc([], this.parseChildren())
            }, t.prototype.parseQueryParams = function () {
                var t = {};
                if (this.consumeOptional("?")) do {
                    this.parseQueryParam(t)
                } while (this.consumeOptional("&"));
                return t
            }, t.prototype.parseFragment = function () {
                return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
            }, t.prototype.parseChildren = function () {
                if ("" === this.remaining) return {};
                this.consumeOptional("/");
                var t = [];
                for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment());
                var e = {};
                this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0));
                var n = {};
                return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n[Ul] = new rc(t, e)), n
            }, t.prototype.parseSegment = function () {
                var t = gc(this.remaining);
                if ("" === t && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
                return this.capture(t), new oc(dc(t), this.parseMatrixParams())
            }, t.prototype.parseMatrixParams = function () {
                for (var t = {}; this.consumeOptional(";");) this.parseParam(t);
                return t
            }, t.prototype.parseParam = function (t) {
                var e = gc(this.remaining);
                if (e) {
                    this.capture(e);
                    var n = "";
                    if (this.consumeOptional("=")) {
                        var r = gc(this.remaining);
                        r && this.capture(n = r)
                    }
                    t[dc(e)] = dc(n)
                }
            }, t.prototype.parseQueryParam = function (t) {
                var e, n = (e = this.remaining.match(_c)) ? e[0] : "";
                if (n) {
                    this.capture(n);
                    var r = "";
                    if (this.consumeOptional("=")) {
                        var o = function (t) {
                            var e = t.match(bc);
                            return e ? e[0] : ""
                        }(this.remaining);
                        o && this.capture(r = o)
                    }
                    var i = yc(n), s = yc(r);
                    if (t.hasOwnProperty(i)) {
                        var a = t[i];
                        Array.isArray(a) || (t[i] = a = [a]), a.push(s)
                    } else t[i] = s
                }
            }, t.prototype.parseParens = function (t) {
                var e = {};
                for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                    var n = gc(this.remaining), r = this.remaining[n.length];
                    if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '" + this.url + "'");
                    var o = void 0;
                    n.indexOf(":") > -1 ? (o = n.substr(0, n.indexOf(":")), this.capture(o), this.capture(":")) : t && (o = Ul);
                    var i = this.parseChildren();
                    e[o] = 1 === Object.keys(i).length ? i[Ul] : new rc([], i), this.consumeOptional("//")
                }
                return e
            }, t.prototype.peekStartsWith = function (t) {
                return this.remaining.startsWith(t)
            }, t.prototype.consumeOptional = function (t) {
                return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0)
            }, t.prototype.capture = function (t) {
                if (!this.consumeOptional(t)) throw new Error('Expected "' + t + '".')
            }, t
        }(), Sc = function () {
            function t(t) {
                this._root = t
            }

            return Object.defineProperty(t.prototype, "root", {
                get: function () {
                    return this._root.value
                }, enumerable: !0, configurable: !0
            }), t.prototype.parent = function (t) {
                var e = this.pathFromRoot(t);
                return e.length > 1 ? e[e.length - 2] : null
            }, t.prototype.children = function (t) {
                var e = Ec(t, this._root);
                return e ? e.children.map(function (t) {
                    return t.value
                }) : []
            }, t.prototype.firstChild = function (t) {
                var e = Ec(t, this._root);
                return e && e.children.length > 0 ? e.children[0].value : null
            }, t.prototype.siblings = function (t) {
                var e = Cc(t, this._root);
                return e.length < 2 ? [] : e[e.length - 2].children.map(function (t) {
                    return t.value
                }).filter(function (e) {
                    return e !== t
                })
            }, t.prototype.pathFromRoot = function (t) {
                return Cc(t, this._root).map(function (t) {
                    return t.value
                })
            }, t
        }();

        function Ec(t, e) {
            var n, r;
            if (t === e.value) return e;
            try {
                for (var o = u(e.children), i = o.next(); !i.done; i = o.next()) {
                    var s = Ec(t, i.value);
                    if (s) return s
                }
            } catch (a) {
                n = {error: a}
            } finally {
                try {
                    i && !i.done && (r = o.return) && r.call(o)
                } finally {
                    if (n) throw n.error
                }
            }
            return null
        }

        function Cc(t, e) {
            var n, r;
            if (t === e.value) return [e];
            try {
                for (var o = u(e.children), i = o.next(); !i.done; i = o.next()) {
                    var s = Cc(t, i.value);
                    if (s.length) return s.unshift(e), s
                }
            } catch (a) {
                n = {error: a}
            } finally {
                try {
                    i && !i.done && (r = o.return) && r.call(o)
                } finally {
                    if (n) throw n.error
                }
            }
            return []
        }

        var xc = function () {
            function t(t, e) {
                this.value = t, this.children = e
            }

            return t.prototype.toString = function () {
                return "TreeNode(" + this.value + ")"
            }, t
        }();

        function Tc(t) {
            var e = {};
            return t && t.children.forEach(function (t) {
                return e[t.value.outlet] = t
            }), e
        }

        var kc = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.snapshot = n, Oc(r, e), r
            }

            return o(e, t), e.prototype.toString = function () {
                return this.snapshot.toString()
            }, e
        }(Sc);

        function Pc(t, e) {
            var n = function (t, e) {
                    var n = new Rc([], {}, {}, "", {}, Ul, e, null, t.root, -1, {});
                    return new Ic("", new xc(n, []))
                }(t, e), r = new Sa([new oc("", {})]), o = new Sa({}), i = new Sa({}), s = new Sa({}), a = new Sa(""),
                u = new Ac(r, o, s, a, i, Ul, e, n.root);
            return u.snapshot = n.root, new kc(new xc(u, []), n)
        }

        var Ac = function () {
            function t(t, e, n, r, o, i, s, a) {
                this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = o, this.outlet = i, this.component = s, this._futureSnapshot = a
            }

            return Object.defineProperty(t.prototype, "routeConfig", {
                get: function () {
                    return this._futureSnapshot.routeConfig
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "root", {
                get: function () {
                    return this._routerState.root
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "parent", {
                get: function () {
                    return this._routerState.parent(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "firstChild", {
                get: function () {
                    return this._routerState.firstChild(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "children", {
                get: function () {
                    return this._routerState.children(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "pathFromRoot", {
                get: function () {
                    return this._routerState.pathFromRoot(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "paramMap", {
                get: function () {
                    return this._paramMap || (this._paramMap = this.params.pipe(Y(function (t) {
                        return Hl(t)
                    }))), this._paramMap
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "queryParamMap", {
                get: function () {
                    return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(Y(function (t) {
                        return Hl(t)
                    }))), this._queryParamMap
                }, enumerable: !0, configurable: !0
            }), t.prototype.toString = function () {
                return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")"
            }, t
        }();

        function Nc(t, e) {
            void 0 === e && (e = "emptyOnly");
            var n = t.pathFromRoot, r = 0;
            if ("always" !== e) for (r = n.length - 1; r >= 1;) {
                var o = n[r], s = n[r - 1];
                if (o.routeConfig && "" === o.routeConfig.path) r--; else {
                    if (s.component) break;
                    r--
                }
            }
            return function (t) {
                return t.reduce(function (t, e) {
                    return {
                        params: i({}, t.params, e.params),
                        data: i({}, t.data, e.data),
                        resolve: i({}, t.resolve, e._resolvedData)
                    }
                }, {params: {}, data: {}, resolve: {}})
            }(n.slice(r))
        }

        var Rc = function () {
            function t(t, e, n, r, o, i, s, a, u, l, c) {
                this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = o, this.outlet = i, this.component = s, this.routeConfig = a, this._urlSegment = u, this._lastPathIndex = l, this._resolve = c
            }

            return Object.defineProperty(t.prototype, "root", {
                get: function () {
                    return this._routerState.root
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "parent", {
                get: function () {
                    return this._routerState.parent(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "firstChild", {
                get: function () {
                    return this._routerState.firstChild(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "children", {
                get: function () {
                    return this._routerState.children(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "pathFromRoot", {
                get: function () {
                    return this._routerState.pathFromRoot(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "paramMap", {
                get: function () {
                    return this._paramMap || (this._paramMap = Hl(this.params)), this._paramMap
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "queryParamMap", {
                get: function () {
                    return this._queryParamMap || (this._queryParamMap = Hl(this.queryParams)), this._queryParamMap
                }, enumerable: !0, configurable: !0
            }), t.prototype.toString = function () {
                return "Route(url:'" + this.url.map(function (t) {
                    return t.toString()
                }).join("/") + "', path:'" + (this.routeConfig ? this.routeConfig.path : "") + "')"
            }, t
        }(), Ic = function (t) {
            function e(e, n) {
                var r = t.call(this, n) || this;
                return r.url = e, Oc(r, n), r
            }

            return o(e, t), e.prototype.toString = function () {
                return Dc(this._root)
            }, e
        }(Sc);

        function Oc(t, e) {
            e.value._routerState = t, e.children.forEach(function (e) {
                return Oc(t, e)
            })
        }

        function Dc(t) {
            var e = t.children.length > 0 ? " { " + t.children.map(Dc).join(", ") + " } " : "";
            return "" + t.value + e
        }

        function Mc(t) {
            if (t.snapshot) {
                var e = t.snapshot, n = t._futureSnapshot;
                t.snapshot = n, Yl(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), Yl(e.params, n.params) || t.params.next(n.params), function (t, e) {
                    if (t.length !== e.length) return !1;
                    for (var n = 0; n < t.length; ++n) if (!Yl(t[n], e[n])) return !1;
                    return !0
                }(e.url, n.url) || t.url.next(n.url), Yl(e.data, n.data) || t.data.next(n.data)
            } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data)
        }

        function jc(t, e) {
            var n, r;
            return Yl(t.params, e.params) && ic(n = t.url, r = e.url) && n.every(function (t, e) {
                return Yl(t.parameters, r[e].parameters)
            }) && !(!t.parent != !e.parent) && (!t.parent || jc(t.parent, e.parent))
        }

        function Fc(t) {
            return "object" == typeof t && null != t && !t.outlets && !t.segmentPath
        }

        function Lc(t, e, n, r, o) {
            var i = {};
            return r && Xl(r, function (t, e) {
                i[e] = Array.isArray(t) ? t.map(function (t) {
                    return "" + t
                }) : "" + t
            }), new nc(n.root === t ? e : function t(e, n, r) {
                var o = {};
                return Xl(e.children, function (e, i) {
                    o[i] = e === n ? r : t(e, n, r)
                }), new rc(e.segments, o)
            }(n.root, t, e), i, o)
        }

        var Uc = function () {
            function t(t, e, n) {
                if (this.isAbsolute = t, this.numberOfDoubleDots = e, this.commands = n, t && n.length > 0 && Fc(n[0])) throw new Error("Root segment cannot have matrix parameters");
                var r = n.find(function (t) {
                    return "object" == typeof t && null != t && t.outlets
                });
                if (r && r !== Jl(n)) throw new Error("{outlets:{}} has to be the last command")
            }

            return t.prototype.toRoot = function () {
                return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
            }, t
        }(), Vc = function () {
            return function (t, e, n) {
                this.segmentGroup = t, this.processChildren = e, this.index = n
            }
        }();

        function Hc(t) {
            return "object" == typeof t && null != t && t.outlets ? t.outlets[Ul] : "" + t
        }

        function zc(t, e, n) {
            if (t || (t = new rc([], {})), 0 === t.segments.length && t.hasChildren()) return Bc(t, e, n);
            var r = function (t, e, n) {
                for (var r = 0, o = e, i = {match: !1, pathIndex: 0, commandIndex: 0}; o < t.segments.length;) {
                    if (r >= n.length) return i;
                    var s = t.segments[o], a = Hc(n[r]), u = r < n.length - 1 ? n[r + 1] : null;
                    if (o > 0 && void 0 === a) break;
                    if (a && u && "object" == typeof u && void 0 === u.outlets) {
                        if (!Wc(a, u, s)) return i;
                        r += 2
                    } else {
                        if (!Wc(a, {}, s)) return i;
                        r++
                    }
                    o++
                }
                return {match: !0, pathIndex: o, commandIndex: r}
            }(t, e, n), o = n.slice(r.commandIndex);
            if (r.match && r.pathIndex < t.segments.length) {
                var i = new rc(t.segments.slice(0, r.pathIndex), {});
                return i.children[Ul] = new rc(t.segments.slice(r.pathIndex), t.children), Bc(i, 0, o)
            }
            return r.match && 0 === o.length ? new rc(t.segments, {}) : r.match && !t.hasChildren() ? qc(t, e, n) : r.match ? Bc(t, 0, o) : qc(t, e, n)
        }

        function Bc(t, e, n) {
            if (0 === n.length) return new rc(t.segments, {});
            var r = function (t) {
                var e, n;
                return "object" != typeof t[0] ? ((e = {})[Ul] = t, e) : void 0 === t[0].outlets ? ((n = {})[Ul] = t, n) : t[0].outlets
            }(n), o = {};
            return Xl(r, function (n, r) {
                null !== n && (o[r] = zc(t.children[r], e, n))
            }), Xl(t.children, function (t, e) {
                void 0 === r[e] && (o[e] = t)
            }), new rc(t.segments, o)
        }

        function qc(t, e, n) {
            for (var r = t.segments.slice(0, e), o = 0; o < n.length;) {
                if ("object" == typeof n[o] && void 0 !== n[o].outlets) {
                    var i = Qc(n[o].outlets);
                    return new rc(r, i)
                }
                if (0 === o && Fc(n[0])) r.push(new oc(t.segments[e].path, n[0])), o++; else {
                    var s = Hc(n[o]), a = o < n.length - 1 ? n[o + 1] : null;
                    s && a && Fc(a) ? (r.push(new oc(s, Kc(a))), o += 2) : (r.push(new oc(s, {})), o++)
                }
            }
            return new rc(r, {})
        }

        function Qc(t) {
            var e = {};
            return Xl(t, function (t, n) {
                null !== t && (e[n] = qc(new rc([], {}), 0, t))
            }), e
        }

        function Kc(t) {
            var e = {};
            return Xl(t, function (t, n) {
                return e[n] = "" + t
            }), e
        }

        function Wc(t, e, n) {
            return t == n.path && Yl(e, n.parameters)
        }

        var Zc = function () {
            function t(t, e, n, r) {
                this.routeReuseStrategy = t, this.futureState = e, this.currState = n, this.forwardEvent = r
            }

            return t.prototype.activate = function (t) {
                var e = this.futureState._root, n = this.currState ? this.currState._root : null;
                this.deactivateChildRoutes(e, n, t), Mc(this.futureState.root), this.activateChildRoutes(e, n, t)
            }, t.prototype.deactivateChildRoutes = function (t, e, n) {
                var r = this, o = Tc(e);
                t.children.forEach(function (t) {
                    var e = t.value.outlet;
                    r.deactivateRoutes(t, o[e], n), delete o[e]
                }), Xl(o, function (t, e) {
                    r.deactivateRouteAndItsChildren(t, n)
                })
            }, t.prototype.deactivateRoutes = function (t, e, n) {
                var r = t.value, o = e ? e.value : null;
                if (r === o) if (r.component) {
                    var i = n.getContext(r.outlet);
                    i && this.deactivateChildRoutes(t, e, i.children)
                } else this.deactivateChildRoutes(t, e, n); else o && this.deactivateRouteAndItsChildren(e, n)
            }, t.prototype.deactivateRouteAndItsChildren = function (t, e) {
                this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e)
            }, t.prototype.detachAndStoreRouteSubtree = function (t, e) {
                var n = e.getContext(t.value.outlet);
                if (n && n.outlet) {
                    var r = n.outlet.detach(), o = n.children.onOutletDeactivated();
                    this.routeReuseStrategy.store(t.value.snapshot, {componentRef: r, route: t, contexts: o})
                }
            }, t.prototype.deactivateRouteAndOutlet = function (t, e) {
                var n = this, r = e.getContext(t.value.outlet);
                if (r) {
                    var o = Tc(t), i = t.value.component ? r.children : e;
                    Xl(o, function (t, e) {
                        return n.deactivateRouteAndItsChildren(t, i)
                    }), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated())
                }
            }, t.prototype.activateChildRoutes = function (t, e, n) {
                var r = this, o = Tc(e);
                t.children.forEach(function (t) {
                    r.activateRoutes(t, o[t.value.outlet], n), r.forwardEvent(new jl(t.value.snapshot))
                }), t.children.length && this.forwardEvent(new Dl(t.value.snapshot))
            }, t.prototype.activateRoutes = function (t, e, n) {
                var r = t.value, o = e ? e.value : null;
                if (Mc(r), r === o) if (r.component) {
                    var i = n.getOrCreateContext(r.outlet);
                    this.activateChildRoutes(t, e, i.children)
                } else this.activateChildRoutes(t, e, n); else if (r.component) if (i = n.getOrCreateContext(r.outlet), this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                    var s = this.routeReuseStrategy.retrieve(r.snapshot);
                    this.routeReuseStrategy.store(r.snapshot, null), i.children.onOutletReAttached(s.contexts), i.attachRef = s.componentRef, i.route = s.route.value, i.outlet && i.outlet.attach(s.componentRef, s.route.value), Gc(s.route)
                } else {
                    var a = function (t) {
                        for (var e = r.snapshot.parent; e; e = e.parent) {
                            var n = e.routeConfig;
                            if (n && n._loadedConfig) return n._loadedConfig;
                            if (n && n.component) return null
                        }
                        return null
                    }(), u = a ? a.module.componentFactoryResolver : null;
                    i.attachRef = null, i.route = r, i.resolver = u, i.outlet && i.outlet.activateWith(r, u), this.activateChildRoutes(t, null, i.children)
                } else this.activateChildRoutes(t, null, n)
            }, t
        }();

        function Gc(t) {
            Mc(t.value), t.children.forEach(Gc)
        }

        function Yc(t) {
            return "function" == typeof t
        }

        function $c(t) {
            return t instanceof nc
        }

        var Jc = function () {
            return function (t) {
                this.segmentGroup = t || null
            }
        }(), Xc = function () {
            return function (t) {
                this.urlTree = t
            }
        }();

        function tp(t) {
            return new A(function (e) {
                return e.error(new Jc(t))
            })
        }

        function ep(t) {
            return new A(function (e) {
                return e.error(new Xc(t))
            })
        }

        function np(t) {
            return new A(function (e) {
                return e.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + t + "'"))
            })
        }

        var rp = function () {
            function t(t, e, n, r, o) {
                this.configLoader = e, this.urlSerializer = n, this.urlTree = r, this.config = o, this.allowRedirects = !0, this.ngModule = t.get(Ce)
            }

            return t.prototype.apply = function () {
                var t = this;
                return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, Ul).pipe(Y(function (e) {
                    return t.createUrlTree(e, t.urlTree.queryParams, t.urlTree.fragment)
                })).pipe(Wa(function (e) {
                    if (e instanceof Xc) return t.allowRedirects = !1, t.match(e.urlTree);
                    if (e instanceof Jc) throw t.noMatchError(e);
                    throw e
                }))
            }, t.prototype.match = function (t) {
                var e = this;
                return this.expandSegmentGroup(this.ngModule, this.config, t.root, Ul).pipe(Y(function (n) {
                    return e.createUrlTree(n, t.queryParams, t.fragment)
                })).pipe(Wa(function (t) {
                    if (t instanceof Jc) throw e.noMatchError(t);
                    throw t
                }))
            }, t.prototype.noMatchError = function (t) {
                return new Error("Cannot match any routes. URL Segment: '" + t.segmentGroup + "'")
            }, t.prototype.createUrlTree = function (t, e, n) {
                var r, o = t.segments.length > 0 ? new rc([], ((r = {})[Ul] = t, r)) : t;
                return new nc(o, e, n)
            }, t.prototype.expandSegmentGroup = function (t, e, n, r) {
                return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe(Y(function (t) {
                    return new rc([], t)
                })) : this.expandSegment(t, n, e, n.segments, r, !0)
            }, t.prototype.expandChildren = function (t, e, n) {
                var r = this;
                return function (n, o) {
                    if (0 === Object.keys(n).length) return wa({});
                    var i = [], s = [], a = {};
                    return Xl(n, function (n, o) {
                        var u, l, c = (u = o, l = n, r.expandSegmentGroup(t, e, l, u)).pipe(Y(function (t) {
                            return a[o] = t
                        }));
                        o === Ul ? i.push(c) : s.push(c)
                    }), wa.apply(null, i.concat(s)).pipe(Aa(), Ka(), Y(function () {
                        return a
                    }))
                }(n.children)
            }, t.prototype.expandSegment = function (t, e, n, r, o, i) {
                var s = this;
                return wa.apply(void 0, c(n)).pipe(Y(function (a) {
                    return s.expandSegmentAgainstRoute(t, e, n, a, r, o, i).pipe(Wa(function (t) {
                        if (t instanceof Jc) return wa(null);
                        throw t
                    }))
                }), Aa(), Xa(function (t) {
                    return !!t
                }), Wa(function (t, n) {
                    if (t instanceof Ca || "EmptyError" === t.name) {
                        if (s.noLeftoversInUrl(e, r, o)) return wa(new rc([], {}));
                        throw new Jc(e)
                    }
                    throw t
                }))
            }, t.prototype.noLeftoversInUrl = function (t, e, n) {
                return 0 === e.length && !t.children[n]
            }, t.prototype.expandSegmentAgainstRoute = function (t, e, n, r, o, i, s) {
                return ap(r) !== i ? tp(e) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, e, r, o) : s && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i) : tp(e)
            }, t.prototype.expandSegmentAgainstRouteUsingRedirect = function (t, e, n, r, o, i) {
                return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i)
            }, t.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (t, e, n, r) {
                var o = this, i = this.applyRedirectCommands([], n.redirectTo, {});
                return n.redirectTo.startsWith("/") ? ep(i) : this.lineralizeSegments(n, i).pipe(et(function (n) {
                    var i = new rc(n, {});
                    return o.expandSegment(t, i, e, n, r, !1)
                }))
            }, t.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (t, e, n, r, o, i) {
                var s = this, a = op(e, r, o), u = a.consumedSegments, l = a.lastChild, c = a.positionalParamSegments;
                if (!a.matched) return tp(e);
                var p = this.applyRedirectCommands(u, r.redirectTo, c);
                return r.redirectTo.startsWith("/") ? ep(p) : this.lineralizeSegments(r, p).pipe(et(function (r) {
                    return s.expandSegment(t, e, n, r.concat(o.slice(l)), i, !1)
                }))
            }, t.prototype.matchSegmentAgainstRoute = function (t, e, n, r) {
                var o = this;
                if ("**" === n.path) return n.loadChildren ? this.configLoader.load(t.injector, n).pipe(Y(function (t) {
                    return n._loadedConfig = t, new rc(r, {})
                })) : wa(new rc(r, {}));
                var s = op(e, n, r), a = s.consumedSegments, l = s.lastChild;
                if (!s.matched) return tp(e);
                var c = r.slice(l);
                return this.getChildConfig(t, n, r).pipe(et(function (t) {
                    var n = t.module, r = t.routes, s = function (t, e, n, r) {
                        return n.length > 0 && function (t, e, n) {
                            return r.some(function (n) {
                                return sp(t, e, n) && ap(n) !== Ul
                            })
                        }(t, n) ? {
                            segmentGroup: ip(new rc(e, function (t, e) {
                                var n, r, o = {};
                                o[Ul] = e;
                                try {
                                    for (var i = u(t), s = i.next(); !s.done; s = i.next()) {
                                        var a = s.value;
                                        "" === a.path && ap(a) !== Ul && (o[ap(a)] = new rc([], {}))
                                    }
                                } catch (l) {
                                    n = {error: l}
                                } finally {
                                    try {
                                        s && !s.done && (r = i.return) && r.call(i)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                return o
                            }(r, new rc(n, t.children)))), slicedSegments: []
                        } : 0 === n.length && function (t, e, n) {
                            return r.some(function (n) {
                                return sp(t, e, n)
                            })
                        }(t, n) ? {
                            segmentGroup: ip(new rc(t.segments, function (t, e, n, r) {
                                var o, s, a = {};
                                try {
                                    for (var l = u(n), c = l.next(); !c.done; c = l.next()) {
                                        var p = c.value;
                                        sp(t, e, p) && !r[ap(p)] && (a[ap(p)] = new rc([], {}))
                                    }
                                } catch (h) {
                                    o = {error: h}
                                } finally {
                                    try {
                                        c && !c.done && (s = l.return) && s.call(l)
                                    } finally {
                                        if (o) throw o.error
                                    }
                                }
                                return i({}, r, a)
                            }(t, n, r, t.children))), slicedSegments: n
                        } : {segmentGroup: t, slicedSegments: n}
                    }(e, a, c, r), l = s.segmentGroup, p = s.slicedSegments;
                    return 0 === p.length && l.hasChildren() ? o.expandChildren(n, r, l).pipe(Y(function (t) {
                        return new rc(a, t)
                    })) : 0 === r.length && 0 === p.length ? wa(new rc(a, {})) : o.expandSegment(n, l, r, p, Ul, !0).pipe(Y(function (t) {
                        return new rc(a.concat(t.segments), t.children)
                    }))
                }))
            }, t.prototype.getChildConfig = function (t, e, n) {
                var r = this;
                return e.children ? wa(new Ql(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? wa(e._loadedConfig) : function (t, e, n) {
                    var r, o = e.canLoad;
                    return o && 0 !== o.length ? tt(o).pipe(Y(function (r) {
                        var o, i = t.get(r);
                        if (function (t) {
                            return t && Yc(t.canLoad)
                        }(i)) o = i.canLoad(e, n); else {
                            if (!Yc(i)) throw new Error("Invalid CanLoad guard");
                            o = i(e, n)
                        }
                        return tc(o)
                    })).pipe(Aa(), (r = function (t) {
                        return !0 === t
                    }, function (t) {
                        return t.lift(new tu(r, void 0, t))
                    })) : wa(!0)
                }(t.injector, e, n).pipe(et(function (n) {
                    return n ? r.configLoader.load(t.injector, e).pipe(Y(function (t) {
                        return e._loadedConfig = t, t
                    })) : function (t) {
                        return new A(function (e) {
                            return e.error(Bl("Cannot load children because the guard of the route \"path: '" + t.path + "'\" returned false"))
                        })
                    }(e)
                })) : wa(new Ql([], t))
            }, t.prototype.lineralizeSegments = function (t, e) {
                for (var n = [], r = e.root; ;) {
                    if (n = n.concat(r.segments), 0 === r.numberOfChildren) return wa(n);
                    if (r.numberOfChildren > 1 || !r.children[Ul]) return np(t.redirectTo);
                    r = r.children[Ul]
                }
            }, t.prototype.applyRedirectCommands = function (t, e, n) {
                return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n)
            }, t.prototype.applyRedirectCreatreUrlTree = function (t, e, n, r) {
                var o = this.createSegmentGroup(t, e.root, n, r);
                return new nc(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment)
            }, t.prototype.createQueryParams = function (t, e) {
                var n = {};
                return Xl(t, function (t, r) {
                    if ("string" == typeof t && t.startsWith(":")) {
                        var o = t.substring(1);
                        n[r] = e[o]
                    } else n[r] = t
                }), n
            }, t.prototype.createSegmentGroup = function (t, e, n, r) {
                var o = this, i = this.createSegments(t, e.segments, n, r), s = {};
                return Xl(e.children, function (e, i) {
                    s[i] = o.createSegmentGroup(t, e, n, r)
                }), new rc(i, s)
            }, t.prototype.createSegments = function (t, e, n, r) {
                var o = this;
                return e.map(function (e) {
                    return e.path.startsWith(":") ? o.findPosParam(t, e, r) : o.findOrReturn(e, n)
                })
            }, t.prototype.findPosParam = function (t, e, n) {
                var r = n[e.path.substring(1)];
                if (!r) throw new Error("Cannot redirect to '" + t + "'. Cannot find '" + e.path + "'.");
                return r
            }, t.prototype.findOrReturn = function (t, e) {
                var n, r, o = 0;
                try {
                    for (var i = u(e), s = i.next(); !s.done; s = i.next()) {
                        var a = s.value;
                        if (a.path === t.path) return e.splice(o), a;
                        o++
                    }
                } catch (l) {
                    n = {error: l}
                } finally {
                    try {
                        s && !s.done && (r = i.return) && r.call(i)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return t
            }, t
        }();

        function op(t, e, n) {
            if ("" === e.path) return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {}
            } : {matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {}};
            var r = (e.matcher || ql)(n, t, e);
            return r ? {
                matched: !0,
                consumedSegments: r.consumed,
                lastChild: r.consumed.length,
                positionalParamSegments: r.posParams
            } : {matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {}}
        }

        function ip(t) {
            if (1 === t.numberOfChildren && t.children[Ul]) {
                var e = t.children[Ul];
                return new rc(t.segments.concat(e.segments), e.children)
            }
            return t
        }

        function sp(t, e, n) {
            return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
        }

        function ap(t) {
            return t.outlet || Ul
        }

        var up = function () {
            return function (t) {
                this.path = t, this.route = this.path[this.path.length - 1]
            }
        }(), lp = function () {
            return function (t, e) {
                this.component = t, this.route = e
            }
        }();

        function cp(t, e, n) {
            var r = function (t) {
                if (!t) return null;
                for (var e = t.parent; e; e = e.parent) {
                    var n = e.routeConfig;
                    if (n && n._loadedConfig) return n._loadedConfig
                }
                return null
            }(e);
            return (r ? r.module.injector : n).get(t)
        }

        function pp(t, e, n, r, o) {
            void 0 === o && (o = {canDeactivateChecks: [], canActivateChecks: []});
            var i = Tc(e);
            return t.children.forEach(function (t) {
                !function (t, e, n, r, o) {
                    void 0 === o && (o = {canDeactivateChecks: [], canActivateChecks: []});
                    var i = t.value, s = e ? e.value : null, a = n ? n.getContext(t.value.outlet) : null;
                    if (s && i.routeConfig === s.routeConfig) {
                        var u = function (t, e, n) {
                            if ("function" == typeof n) return n(t, e);
                            switch (n) {
                                case"pathParamsChange":
                                    return !ic(t.url, e.url);
                                case"pathParamsOrQueryParamsChange":
                                    return !ic(t.url, e.url) || !Yl(t.queryParams, e.queryParams);
                                case"always":
                                    return !0;
                                case"paramsOrQueryParamsChange":
                                    return !jc(t, e) || !Yl(t.queryParams, e.queryParams);
                                case"paramsChange":
                                default:
                                    return !jc(t, e)
                            }
                        }(s, i, i.routeConfig.runGuardsAndResolvers);
                        u ? o.canActivateChecks.push(new up(r)) : (i.data = s.data, i._resolvedData = s._resolvedData), pp(t, e, i.component ? a ? a.children : null : n, r, o), u && o.canDeactivateChecks.push(new lp(a && a.outlet && a.outlet.component || null, s))
                    } else s && hp(e, a, o), o.canActivateChecks.push(new up(r)), pp(t, null, i.component ? a ? a.children : null : n, r, o)
                }(t, i[t.value.outlet], n, r.concat([t.value]), o), delete i[t.value.outlet]
            }), Xl(i, function (t, e) {
                return hp(t, n.getContext(e), o)
            }), o
        }

        function hp(t, e, n) {
            var r = Tc(t), o = t.value;
            Xl(r, function (t, r) {
                hp(t, o.component ? e ? e.children.getContext(r) : null : e, n)
            }), n.canDeactivateChecks.push(new lp(o.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, o))
        }

        var fp = Symbol("INITIAL_VALUE");

        function dp() {
            return nu(function (t) {
                return (function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = null, r = null;
                    return F(t[t.length - 1]) && (r = t.pop()), "function" == typeof t[t.length - 1] && (n = t.pop()), 1 === t.length && p(t[0]) && (t = t[0]), X(t, r).lift(new Ta(n))
                }).apply(void 0, c(t.map(function (t) {
                    return t.pipe(Ya(1), function () {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        return function (e) {
                            var n = t[t.length - 1];
                            F(n) ? t.pop() : n = null;
                            var r = t.length;
                            return function () {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                return Aa()(wa.apply(void 0, t))
                            }(1 !== r || n ? r > 0 ? X(t, n) : _a(n) : ba(t[0]), e)
                        }
                    }(fp))
                }))).pipe(iu(function (t, e) {
                    var n = !1;
                    return e.reduce(function (t, r, o) {
                        if (t !== fp) return t;
                        if (r === fp && (n = !0), !n) {
                            if (!1 === r) return r;
                            if (o === e.length - 1 || $c(r)) return r
                        }
                        return t
                    }, t)
                }, fp), Na(function (t) {
                    return t !== fp
                }), Y(function (t) {
                    return $c(t) ? t : !0 === t
                }), Ya(1))
            })
        }

        function yp(t, e) {
            return null !== t && e && e(new Ml(t)), wa(!0)
        }

        function vp(t, e) {
            return null !== t && e && e(new Ol(t)), wa(!0)
        }

        function mp(t, e, n) {
            var r = e.routeConfig ? e.routeConfig.canActivate : null;
            return r && 0 !== r.length ? wa(r.map(function (r) {
                return Pa(function () {
                    var o, i = cp(r, e, n);
                    if (function (t) {
                        return t && Yc(t.canActivate)
                    }(i)) o = tc(i.canActivate(e, t)); else {
                        if (!Yc(i)) throw new Error("Invalid CanActivate guard");
                        o = tc(i(e, t))
                    }
                    return o.pipe(Xa())
                })
            })).pipe(dp()) : wa(!0)
        }

        function gp(t, e, n) {
            var r = e[e.length - 1], o = e.slice(0, e.length - 1).reverse().map(function (t) {
                return function (t) {
                    var e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                    return e && 0 !== e.length ? {node: t, guards: e} : null
                }(t)
            }).filter(function (t) {
                return null !== t
            }).map(function (e) {
                return Pa(function () {
                    return wa(e.guards.map(function (o) {
                        var i, s = cp(o, e.node, n);
                        if (function (t) {
                            return t && Yc(t.canActivateChild)
                        }(s)) i = tc(s.canActivateChild(r, t)); else {
                            if (!Yc(s)) throw new Error("Invalid CanActivateChild guard");
                            i = tc(s(r, t))
                        }
                        return i.pipe(Xa())
                    })).pipe(dp())
                })
            });
            return wa(o).pipe(dp())
        }

        var _p = function () {
            return function () {
            }
        }(), bp = function () {
            function t(t, e, n, r, o, i) {
                this.rootComponentType = t, this.config = e, this.urlTree = n, this.url = r, this.paramsInheritanceStrategy = o, this.relativeLinkResolution = i
            }

            return t.prototype.recognize = function () {
                try {
                    var t = Ep(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
                        e = this.processSegmentGroup(this.config, t, Ul),
                        n = new Rc([], Object.freeze({}), Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, Ul, this.rootComponentType, null, this.urlTree.root, -1, {}),
                        r = new xc(n, e), o = new Ic(this.url, r);
                    return this.inheritParamsAndData(o._root), wa(o)
                } catch (s) {
                    return new A(function (t) {
                        return t.error(s)
                    })
                }
            }, t.prototype.inheritParamsAndData = function (t) {
                var e = this, n = t.value, r = Nc(n, this.paramsInheritanceStrategy);
                n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), t.children.forEach(function (t) {
                    return e.inheritParamsAndData(t)
                })
            }, t.prototype.processSegmentGroup = function (t, e, n) {
                return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n)
            }, t.prototype.processChildren = function (t, e) {
                var n, r = this, o = sc(e, function (e, n) {
                    return r.processSegmentGroup(t, e, n)
                });
                return n = {}, o.forEach(function (t) {
                    var e = n[t.value.outlet];
                    if (e) {
                        var r = e.url.map(function (t) {
                            return t.toString()
                        }).join("/"), o = t.value.url.map(function (t) {
                            return t.toString()
                        }).join("/");
                        throw new Error("Two segments cannot have the same outlet name: '" + r + "' and '" + o + "'.")
                    }
                    n[t.value.outlet] = t.value
                }), o.sort(function (t, e) {
                    return t.value.outlet === Ul ? -1 : e.value.outlet === Ul ? 1 : t.value.outlet.localeCompare(e.value.outlet)
                }), o
            }, t.prototype.processSegment = function (t, e, n, r) {
                var o, i;
                try {
                    for (var s = u(t), a = s.next(); !a.done; a = s.next()) {
                        var l = a.value;
                        try {
                            return this.processSegmentAgainstRoute(l, e, n, r)
                        } catch (c) {
                            if (!(c instanceof _p)) throw c
                        }
                    }
                } catch (p) {
                    o = {error: p}
                } finally {
                    try {
                        a && !a.done && (i = s.return) && i.call(s)
                    } finally {
                        if (o) throw o.error
                    }
                }
                if (this.noLeftoversInUrl(e, n, r)) return [];
                throw new _p
            }, t.prototype.noLeftoversInUrl = function (t, e, n) {
                return 0 === e.length && !t.children[n]
            }, t.prototype.processSegmentAgainstRoute = function (t, e, n, r) {
                if (t.redirectTo) throw new _p;
                if ((t.outlet || Ul) !== r) throw new _p;
                var o, s = [], a = [];
                if ("**" === t.path) {
                    var u = n.length > 0 ? Jl(n).parameters : {};
                    o = new Rc(n, u, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, Tp(t), r, t.component, t, wp(e), Sp(e) + n.length, kp(t))
                } else {
                    var l = function (t, e, n) {
                        if ("" === e.path) {
                            if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new _p;
                            return {consumedSegments: [], lastChild: 0, parameters: {}}
                        }
                        var r = (e.matcher || ql)(n, t, e);
                        if (!r) throw new _p;
                        var o = {};
                        Xl(r.posParams, function (t, e) {
                            o[e] = t.path
                        });
                        var s = r.consumed.length > 0 ? i({}, o, r.consumed[r.consumed.length - 1].parameters) : o;
                        return {consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: s}
                    }(e, t, n);
                    s = l.consumedSegments, a = n.slice(l.lastChild), o = new Rc(s, l.parameters, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, Tp(t), r, t.component, t, wp(e), Sp(e) + s.length, kp(t))
                }
                var c = function (t) {
                    return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []
                }(t), p = Ep(e, s, a, c, this.relativeLinkResolution), h = p.segmentGroup, f = p.slicedSegments;
                if (0 === f.length && h.hasChildren()) {
                    var d = this.processChildren(c, h);
                    return [new xc(o, d)]
                }
                if (0 === c.length && 0 === f.length) return [new xc(o, [])];
                var y = this.processSegment(c, h, f, Ul);
                return [new xc(o, y)]
            }, t
        }();

        function wp(t) {
            for (var e = t; e._sourceSegment;) e = e._sourceSegment;
            return e
        }

        function Sp(t) {
            for (var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0; e._sourceSegment;) n += (e = e._sourceSegment)._segmentIndexShift ? e._segmentIndexShift : 0;
            return n - 1
        }

        function Ep(t, e, n, r, o) {
            if (n.length > 0 && function (t, e, n) {
                return r.some(function (n) {
                    return Cp(t, e, n) && xp(n) !== Ul
                })
            }(t, n)) {
                var s = new rc(e, function (t, e, n, r) {
                    var o, i, s = {};
                    s[Ul] = r, r._sourceSegment = t, r._segmentIndexShift = e.length;
                    try {
                        for (var a = u(n), l = a.next(); !l.done; l = a.next()) {
                            var c = l.value;
                            if ("" === c.path && xp(c) !== Ul) {
                                var p = new rc([], {});
                                p._sourceSegment = t, p._segmentIndexShift = e.length, s[xp(c)] = p
                            }
                        }
                    } catch (h) {
                        o = {error: h}
                    } finally {
                        try {
                            l && !l.done && (i = a.return) && i.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return s
                }(t, e, r, new rc(n, t.children)));
                return s._sourceSegment = t, s._segmentIndexShift = e.length, {segmentGroup: s, slicedSegments: []}
            }
            if (0 === n.length && function (t, e, n) {
                return r.some(function (n) {
                    return Cp(t, e, n)
                })
            }(t, n)) {
                var a = new rc(t.segments, function (t, e, n, r, o, s) {
                    var a, l, c = {};
                    try {
                        for (var p = u(r), h = p.next(); !h.done; h = p.next()) {
                            var f = h.value;
                            if (Cp(t, n, f) && !o[xp(f)]) {
                                var d = new rc([], {});
                                d._sourceSegment = t, d._segmentIndexShift = "legacy" === s ? t.segments.length : e.length, c[xp(f)] = d
                            }
                        }
                    } catch (y) {
                        a = {error: y}
                    } finally {
                        try {
                            h && !h.done && (l = p.return) && l.call(p)
                        } finally {
                            if (a) throw a.error
                        }
                    }
                    return i({}, o, c)
                }(t, e, n, r, t.children, o));
                return a._sourceSegment = t, a._segmentIndexShift = e.length, {segmentGroup: a, slicedSegments: n}
            }
            var l = new rc(t.segments, t.children);
            return l._sourceSegment = t, l._segmentIndexShift = e.length, {segmentGroup: l, slicedSegments: n}
        }

        function Cp(t, e, n) {
            return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
        }

        function xp(t) {
            return t.outlet || Ul
        }

        function Tp(t) {
            return t.data || {}
        }

        function kp(t) {
            return t.resolve || {}
        }

        function Pp(t, e, n, r) {
            var o = cp(t, e, r);
            return tc(o.resolve ? o.resolve(e, n) : o(e, n))
        }

        function Ap(t) {
            return function (e) {
                return e.pipe(nu(function (e) {
                    var n = t(e);
                    return n ? tt(n).pipe(Y(function () {
                        return e
                    })) : tt([e])
                }))
            }
        }

        var Np = function () {
            return function () {
            }
        }(), Rp = function () {
            function t() {
            }

            return t.prototype.shouldDetach = function (t) {
                return !1
            }, t.prototype.store = function (t, e) {
            }, t.prototype.shouldAttach = function (t) {
                return !1
            }, t.prototype.retrieve = function (t) {
                return null
            }, t.prototype.shouldReuseRoute = function (t, e) {
                return t.routeConfig === e.routeConfig
            }, t
        }(), Ip = new mt("ROUTES"), Op = function () {
            function t(t, e, n, r) {
                this.loader = t, this.compiler = e, this.onLoadStartListener = n, this.onLoadEndListener = r
            }

            return t.prototype.load = function (t, e) {
                var n = this;
                return this.onLoadStartListener && this.onLoadStartListener(e), this.loadModuleFactory(e.loadChildren).pipe(Y(function (r) {
                    n.onLoadEndListener && n.onLoadEndListener(e);
                    var o = r.create(t);
                    return new Ql($l(o.injector.get(Ip)).map(Gl), o)
                }))
            }, t.prototype.loadModuleFactory = function (t) {
                var e = this;
                return "string" == typeof t ? tt(this.loader.load(t)) : tc(t()).pipe(et(function (t) {
                    return t instanceof xe ? wa(t) : tt(e.compiler.compileModuleAsync(t))
                }))
            }, t
        }(), Dp = function () {
            return function () {
            }
        }(), Mp = function () {
            function t() {
            }

            return t.prototype.shouldProcessUrl = function (t) {
                return !0
            }, t.prototype.extract = function (t) {
                return t
            }, t.prototype.merge = function (t, e) {
                return t
            }, t
        }();

        function jp(t) {
            throw t
        }

        function Fp(t, e, n) {
            return e.parse("/")
        }

        function Lp(t, e) {
            return wa(null)
        }

        var Up = function () {
                function t(t, e, n, r, o, i, s, a) {
                    var u = this;
                    this.rootComponentType = t, this.urlSerializer = e, this.rootContexts = n, this.location = r, this.config = a, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new M, this.errorHandler = jp, this.malformedUriErrorHandler = Fp, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
                        beforePreactivation: Lp,
                        afterPreactivation: Lp
                    }, this.urlHandlingStrategy = new Mp, this.routeReuseStrategy = new Rp, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = o.get(Ce), this.console = o.get(Pn);
                    var l = o.get(Bn);
                    this.isNgZoneEnabled = l instanceof Bn, this.resetConfig(a), this.currentUrlTree = new nc(new rc([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new Op(i, s, function (t) {
                        return u.triggerEvent(new Rl(t))
                    }, function (t) {
                        return u.triggerEvent(new Il(t))
                    }), this.routerState = Pc(this.currentUrlTree, this.rootComponentType), this.transitions = new Sa({
                        id: 0,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.currentUrlTree,
                        extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        rawUrl: this.currentUrlTree,
                        extras: {},
                        resolve: null,
                        reject: null,
                        promise: Promise.resolve(!0),
                        source: "imperative",
                        restoredState: null,
                        currentSnapshot: this.routerState.snapshot,
                        targetSnapshot: null,
                        currentRouterState: this.routerState,
                        targetRouterState: null,
                        guards: {canActivateChecks: [], canDeactivateChecks: []},
                        guardsResult: null
                    }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
                }

                return t.prototype.setupNavigations = function (t) {
                    var e = this, n = this.events;
                    return t.pipe(Na(function (t) {
                        return 0 !== t.id
                    }), Y(function (t) {
                        return i({}, t, {extractedUrl: e.urlHandlingStrategy.extract(t.rawUrl)})
                    }), La(function (t) {
                        e.currentNavigation = {
                            id: t.id,
                            initialUrl: t.currentRawUrl,
                            extractedUrl: t.extractedUrl,
                            trigger: t.source,
                            extras: t.extras,
                            previousNavigation: e.lastSuccessfulNavigation ? i({}, e.lastSuccessfulNavigation, {previousNavigation: null}) : null
                        }
                    }), nu(function (t) {
                        var r, o, s, a, l = !1, c = !1;
                        return wa(t).pipe(nu(function (t) {
                            var r, o, s, a, u = !e.navigated || t.extractedUrl.toString() !== e.browserUrlTree.toString();
                            if (("reload" === e.onSameUrlNavigation || u) && e.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) return wa(t).pipe(nu(function (t) {
                                var r = e.transitions.getValue();
                                return n.next(new Sl(t.id, e.serializeUrl(t.extractedUrl), t.source, t.restoredState)), r !== e.transitions.getValue() ? ga : [t]
                            }), nu(function (t) {
                                return Promise.resolve(t)
                            }), (r = e.ngModule.injector, o = e.configLoader, s = e.urlSerializer, a = e.config, function (t) {
                                return t.pipe(nu(function (t) {
                                    return function (e, n, r, o, i) {
                                        return new rp(e, n, r, t.extractedUrl, i).apply()
                                    }(r, o, s, 0, a).pipe(Y(function (e) {
                                        return i({}, t, {urlAfterRedirects: e})
                                    }))
                                }))
                            }), La(function (t) {
                                e.currentNavigation = i({}, e.currentNavigation, {finalUrl: t.urlAfterRedirects})
                            }), function (t, n, r, o, s) {
                                return function (r) {
                                    return r.pipe(et(function (r) {
                                        return function (t, e, n, r, o, i) {
                                            return void 0 === o && (o = "emptyOnly"), void 0 === i && (i = "legacy"), new bp(t, e, n, r, o, i).recognize()
                                        }(t, n, r.urlAfterRedirects, (a = r.urlAfterRedirects, e.serializeUrl(a)), o, s).pipe(Y(function (t) {
                                            return i({}, r, {targetSnapshot: t})
                                        }));
                                        var a
                                    }))
                                }
                            }(e.rootComponentType, e.config, 0, e.paramsInheritanceStrategy, e.relativeLinkResolution), La(function (t) {
                                "eager" === e.urlUpdateStrategy && (t.extras.skipLocationChange || e.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id), e.browserUrlTree = t.urlAfterRedirects)
                            }), La(function (t) {
                                var r = new Tl(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                n.next(r)
                            }));
                            if (u && e.rawUrlTree && e.urlHandlingStrategy.shouldProcessUrl(e.rawUrlTree)) {
                                var l = t.extractedUrl, c = t.source, p = t.restoredState, h = t.extras,
                                    f = new Sl(t.id, e.serializeUrl(l), c, p);
                                n.next(f);
                                var d = Pc(l, e.rootComponentType).snapshot;
                                return wa(i({}, t, {
                                    targetSnapshot: d,
                                    urlAfterRedirects: l,
                                    extras: i({}, h, {skipLocationChange: !1, replaceUrl: !1})
                                }))
                            }
                            return e.rawUrlTree = t.rawUrl, t.resolve(null), ga
                        }), Ap(function (t) {
                            var n = t.extras;
                            return e.hooks.beforePreactivation(t.targetSnapshot, {
                                navigationId: t.id,
                                appliedUrlTree: t.extractedUrl,
                                rawUrlTree: t.rawUrl,
                                skipLocationChange: !!n.skipLocationChange,
                                replaceUrl: !!n.replaceUrl
                            })
                        }), La(function (t) {
                            var n = new kl(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                            e.triggerEvent(n)
                        }), Y(function (t) {
                            return i({}, t, {guards: (n = t.targetSnapshot, r = t.currentSnapshot, o = e.rootContexts, s = n._root, pp(s, r ? r._root : null, o, [s.value]))});
                            var n, r, o, s
                        }), function (t, e) {
                            return function (n) {
                                return n.pipe(et(function (n) {
                                    var r = n.targetSnapshot, o = n.currentSnapshot, s = n.guards, a = s.canActivateChecks,
                                        u = s.canDeactivateChecks;
                                    return 0 === u.length && 0 === a.length ? wa(i({}, n, {guardsResult: !0})) : function (t, e, n, r) {
                                        return tt(u).pipe(et(function (t) {
                                            return function (t, e, n, r, o) {
                                                var i = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                                                return i && 0 !== i.length ? wa(i.map(function (i) {
                                                    var s, a = cp(i, e, o);
                                                    if (function (t) {
                                                        return t && Yc(t.canDeactivate)
                                                    }(a)) s = tc(a.canDeactivate(t, e, n, r)); else {
                                                        if (!Yc(a)) throw new Error("Invalid CanDeactivate guard");
                                                        s = tc(a(t, e, n, r))
                                                    }
                                                    return s.pipe(Xa())
                                                })).pipe(dp()) : wa(!0)
                                            }(t.component, t.route, n, e, r)
                                        }), Xa(function (t) {
                                            return !0 !== t
                                        }, !0))
                                    }(0, r, o, t).pipe(et(function (n) {
                                        return n && "boolean" == typeof n ? function (t, e, n, r) {
                                            return tt(a).pipe(uu(function (e) {
                                                return tt([vp(e.route.parent, r), yp(e.route, r), gp(t, e.path, n), mp(t, e.route, n)]).pipe(Aa(), Xa(function (t) {
                                                    return !0 !== t
                                                }, !0))
                                            }), Xa(function (t) {
                                                return !0 !== t
                                            }, !0))
                                        }(r, 0, t, e) : wa(n)
                                    }), Y(function (t) {
                                        return i({}, n, {guardsResult: t})
                                    }))
                                }))
                            }
                        }(e.ngModule.injector, function (t) {
                            return e.triggerEvent(t)
                        }), La(function (t) {
                            if ($c(t.guardsResult)) {
                                var n = Bl('Redirecting to "' + e.serializeUrl(t.guardsResult) + '"');
                                throw n.url = t.guardsResult, n
                            }
                        }), La(function (t) {
                            var n = new Pl(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
                            e.triggerEvent(n)
                        }), Na(function (t) {
                            if (!t.guardsResult) {
                                e.resetUrlToCurrentUrlTree();
                                var r = new Cl(t.id, e.serializeUrl(t.extractedUrl), "");
                                return n.next(r), t.resolve(!1), !1
                            }
                            return !0
                        }), Ap(function (t) {
                            if (t.guards.canActivateChecks.length) return wa(t).pipe(La(function (t) {
                                var n = new Al(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                e.triggerEvent(n)
                            }), (n = e.paramsInheritanceStrategy, r = e.ngModule.injector, function (t) {
                                return t.pipe(et(function (t) {
                                    var e = t.targetSnapshot, o = t.guards.canActivateChecks;
                                    return o.length ? tt(o).pipe(uu(function (t) {
                                        return function (t, n, r, o) {
                                            return function (t, e, n, r) {
                                                var o = Object.keys(t);
                                                if (0 === o.length) return wa({});
                                                if (1 === o.length) {
                                                    var i = o[0];
                                                    return Pp(t[i], e, n, r).pipe(Y(function (t) {
                                                        var e;
                                                        return (e = {})[i] = t, e
                                                    }))
                                                }
                                                var s = {};
                                                return tt(o).pipe(et(function (o) {
                                                    return Pp(t[o], e, n, r).pipe(Y(function (t) {
                                                        return s[o] = t, t
                                                    }))
                                                })).pipe(Ka(), Y(function () {
                                                    return s
                                                }))
                                            }(t._resolve, t, e, o).pipe(Y(function (e) {
                                                return t._resolvedData = e, t.data = i({}, t.data, Nc(t, r).resolve), null
                                            }))
                                        }(t.route, 0, n, r)
                                    }), function (t, e) {
                                        return arguments.length >= 2 ? function (e) {
                                            return k(iu(t, void 0), Ma(1), Ba(void 0))(e)
                                        } : function (e) {
                                            return k(iu(function (e, n, r) {
                                                return t(e)
                                            }), Ma(1))(e)
                                        }
                                    }(function (t, e) {
                                        return t
                                    }), Y(function (e) {
                                        return t
                                    })) : wa(t)
                                }))
                            }), La(function (t) {
                                var n = new Nl(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                e.triggerEvent(n)
                            }));
                            var n, r
                        }), Ap(function (t) {
                            var n = t.extras;
                            return e.hooks.afterPreactivation(t.targetSnapshot, {
                                navigationId: t.id,
                                appliedUrlTree: t.extractedUrl,
                                rawUrlTree: t.rawUrl,
                                skipLocationChange: !!n.skipLocationChange,
                                replaceUrl: !!n.replaceUrl
                            })
                        }), Y(function (t) {
                            var n, r, o, s = (o = function t(e, n, r) {
                                if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
                                    (l = r.value)._futureSnapshot = n.value;
                                    var o = function (e, n, r) {
                                        return n.children.map(function (n) {
                                            var o, i;
                                            try {
                                                for (var s = u(r.children), a = s.next(); !a.done; a = s.next()) {
                                                    var l = a.value;
                                                    if (e.shouldReuseRoute(l.value.snapshot, n.value)) return t(e, n, l)
                                                }
                                            } catch (c) {
                                                o = {error: c}
                                            } finally {
                                                try {
                                                    a && !a.done && (i = s.return) && i.call(s)
                                                } finally {
                                                    if (o) throw o.error
                                                }
                                            }
                                            return t(e, n)
                                        })
                                    }(e, n, r);
                                    return new xc(l, o)
                                }
                                var i = e.retrieve(n.value);
                                if (i) {
                                    var s = i.route;
                                    return function t(e, n) {
                                        if (e.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                                        if (e.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                                        n.value._futureSnapshot = e.value;
                                        for (var r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r])
                                    }(n, s), s
                                }
                                var a,
                                    l = new Ac(new Sa((a = n.value).url), new Sa(a.params), new Sa(a.queryParams), new Sa(a.fragment), new Sa(a.data), a.outlet, a.component, a);
                                return o = n.children.map(function (n) {
                                    return t(e, n)
                                }), new xc(l, o)
                            }(e.routeReuseStrategy, (n = t.targetSnapshot)._root, (r = t.currentRouterState) ? r._root : void 0), new kc(o, n));
                            return i({}, t, {targetRouterState: s})
                        }), La(function (t) {
                            e.currentUrlTree = t.urlAfterRedirects, e.rawUrlTree = e.urlHandlingStrategy.merge(e.currentUrlTree, t.rawUrl), e.routerState = t.targetRouterState, "deferred" === e.urlUpdateStrategy && (t.extras.skipLocationChange || e.setBrowserUrl(e.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state), e.browserUrlTree = t.urlAfterRedirects)
                        }), (o = e.rootContexts, s = e.routeReuseStrategy, a = function (t) {
                            return e.triggerEvent(t)
                        }, Y(function (t) {
                            return new Zc(s, t.targetRouterState, t.currentRouterState, a).activate(o), t
                        })), La({
                            next: function () {
                                l = !0
                            }, complete: function () {
                                l = !0
                            }
                        }), (r = function () {
                            if (!l && !c) {
                                e.resetUrlToCurrentUrlTree();
                                var r = new Cl(t.id, e.serializeUrl(t.extractedUrl), "Navigation ID " + t.id + " is not equal to the current navigation id " + e.navigationId);
                                n.next(r), t.resolve(!1)
                            }
                            e.currentNavigation = null
                        }, function (t) {
                            return t.lift(new lu(r))
                        }), Wa(function (r) {
                            if (c = !0, (a = r) && a[zl]) {
                                var o = $c(r.url);
                                o || (e.navigated = !0, e.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
                                var i = new Cl(t.id, e.serializeUrl(t.extractedUrl), r.message);
                                n.next(i), t.resolve(!1), o && e.navigateByUrl(r.url)
                            } else {
                                e.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                                var s = new xl(t.id, e.serializeUrl(t.extractedUrl), r);
                                n.next(s);
                                try {
                                    t.resolve(e.errorHandler(r))
                                } catch (u) {
                                    t.reject(u)
                                }
                            }
                            var a;
                            return ga
                        }))
                    }))
                }, t.prototype.resetRootComponentType = function (t) {
                    this.rootComponentType = t, this.routerState.root.component = this.rootComponentType
                }, t.prototype.getTransition = function () {
                    return this.transitions.value
                }, t.prototype.setTransition = function (t) {
                    this.transitions.next(i({}, this.getTransition(), t))
                }, t.prototype.initialNavigation = function () {
                    this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {replaceUrl: !0})
                }, t.prototype.setUpLocationChangeListener = function () {
                    var t = this;
                    this.locationSubscription || (this.locationSubscription = this.location.subscribe(function (e) {
                        var n = t.parseUrl(e.url), r = "popstate" === e.type ? "popstate" : "hashchange",
                            o = e.state && e.state.navigationId ? e.state : null;
                        setTimeout(function () {
                            t.scheduleNavigation(n, r, o, {replaceUrl: !0})
                        }, 0)
                    }))
                }, Object.defineProperty(t.prototype, "url", {
                    get: function () {
                        return this.serializeUrl(this.currentUrlTree)
                    }, enumerable: !0, configurable: !0
                }), t.prototype.getCurrentNavigation = function () {
                    return this.currentNavigation
                }, t.prototype.triggerEvent = function (t) {
                    this.events.next(t)
                }, t.prototype.resetConfig = function (t) {
                    Kl(t), this.config = t.map(Gl), this.navigated = !1, this.lastSuccessfulId = -1
                }, t.prototype.ngOnDestroy = function () {
                    this.dispose()
                }, t.prototype.dispose = function () {
                    this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
                }, t.prototype.createUrlTree = function (t, e) {
                    void 0 === e && (e = {});
                    var n = e.relativeTo, r = e.queryParams, o = e.fragment, s = e.preserveQueryParams,
                        a = e.queryParamsHandling, u = e.preserveFragment;
                    Le() && s && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
                    var l = n || this.routerState.root, p = u ? this.currentUrlTree.fragment : o, h = null;
                    if (a) switch (a) {
                        case"merge":
                            h = i({}, this.currentUrlTree.queryParams, r);
                            break;
                        case"preserve":
                            h = this.currentUrlTree.queryParams;
                            break;
                        default:
                            h = r || null
                    } else h = s ? this.currentUrlTree.queryParams : r || null;
                    return null !== h && (h = this.removeEmptyProps(h)), function (t, e, n, r, o) {
                        if (0 === n.length) return Lc(e.root, e.root, e, r, o);
                        var i = function (t) {
                            if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new Uc(!0, 0, t);
                            var e = 0, n = !1, r = t.reduce(function (t, r, o) {
                                if ("object" == typeof r && null != r) {
                                    if (r.outlets) {
                                        var i = {};
                                        return Xl(r.outlets, function (t, e) {
                                            i[e] = "string" == typeof t ? t.split("/") : t
                                        }), c(t, [{outlets: i}])
                                    }
                                    if (r.segmentPath) return c(t, [r.segmentPath])
                                }
                                return "string" != typeof r ? c(t, [r]) : 0 === o ? (r.split("/").forEach(function (r, o) {
                                    0 == o && "." === r || (0 == o && "" === r ? n = !0 : ".." === r ? e++ : "" != r && t.push(r))
                                }), t) : c(t, [r])
                            }, []);
                            return new Uc(n, e, r)
                        }(n);
                        if (i.toRoot()) return Lc(e.root, new rc([], {}), e, r, o);
                        var s = function (t, n, r) {
                                if (t.isAbsolute) return new Vc(e.root, !0, 0);
                                if (-1 === r.snapshot._lastPathIndex) return new Vc(r.snapshot._urlSegment, !0, 0);
                                var o = Fc(t.commands[0]) ? 0 : 1;
                                return function (e, n, i) {
                                    for (var s = r.snapshot._urlSegment, a = r.snapshot._lastPathIndex + o, u = t.numberOfDoubleDots; u > a;) {
                                        if (u -= a, !(s = s.parent)) throw new Error("Invalid number of '../'");
                                        a = s.segments.length
                                    }
                                    return new Vc(s, !1, a - u)
                                }()
                            }(i, 0, t),
                            a = s.processChildren ? Bc(s.segmentGroup, s.index, i.commands) : zc(s.segmentGroup, s.index, i.commands);
                        return Lc(s.segmentGroup, a, e, r, o)
                    }(l, this.currentUrlTree, t, h, p)
                }, t.prototype.navigateByUrl = function (t, e) {
                    void 0 === e && (e = {skipLocationChange: !1}), Le() && this.isNgZoneEnabled && !Bn.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
                    var n = $c(t) ? t : this.parseUrl(t), r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                    return this.scheduleNavigation(r, "imperative", null, e)
                }, t.prototype.navigate = function (t, e) {
                    return void 0 === e && (e = {skipLocationChange: !1}), function (t) {
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e];
                            if (null == n) throw new Error("The requested path contains " + n + " segment at index " + e)
                        }
                    }(t), this.navigateByUrl(this.createUrlTree(t, e), e)
                }, t.prototype.serializeUrl = function (t) {
                    return this.urlSerializer.serialize(t)
                }, t.prototype.parseUrl = function (t) {
                    var e;
                    try {
                        e = this.urlSerializer.parse(t)
                    } catch (n) {
                        e = this.malformedUriErrorHandler(n, this.urlSerializer, t)
                    }
                    return e
                }, t.prototype.isActive = function (t, e) {
                    if ($c(t)) return ec(this.currentUrlTree, t, e);
                    var n = this.parseUrl(t);
                    return ec(this.currentUrlTree, n, e)
                }, t.prototype.removeEmptyProps = function (t) {
                    return Object.keys(t).reduce(function (e, n) {
                        var r = t[n];
                        return null != r && (e[n] = r), e
                    }, {})
                }, t.prototype.processNavigations = function () {
                    var t = this;
                    this.navigations.subscribe(function (e) {
                        t.navigated = !0, t.lastSuccessfulId = e.id, t.events.next(new El(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(t.currentUrlTree))), t.lastSuccessfulNavigation = t.currentNavigation, t.currentNavigation = null, e.resolve(!0)
                    }, function (e) {
                        t.console.warn("Unhandled Navigation Error: ")
                    })
                }, t.prototype.scheduleNavigation = function (t, e, n, r) {
                    var o = this.getTransition();
                    if (o && "imperative" !== e && "imperative" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                    if (o && "hashchange" == e && "popstate" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                    if (o && "popstate" == e && "hashchange" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                    var i = null, s = null, a = new Promise(function (t, e) {
                        i = t, s = e
                    }), u = ++this.navigationId;
                    return this.setTransition({
                        id: u,
                        source: e,
                        restoredState: n,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.rawUrlTree,
                        rawUrl: t,
                        extras: r,
                        resolve: i,
                        reject: s,
                        promise: a,
                        currentSnapshot: this.routerState.snapshot,
                        currentRouterState: this.routerState
                    }), a.catch(function (t) {
                        return Promise.reject(t)
                    })
                }, t.prototype.setBrowserUrl = function (t, e, n, r) {
                    var o = this.urlSerializer.serialize(t);
                    r = r || {}, this.location.isCurrentPathEqualTo(o) || e ? this.location.replaceState(o, "", i({}, r, {navigationId: n})) : this.location.go(o, "", i({}, r, {navigationId: n}))
                }, t.prototype.resetStateAndUrl = function (t, e, n) {
                    this.routerState = t, this.currentUrlTree = e, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
                }, t.prototype.resetUrlToCurrentUrlTree = function () {
                    this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {navigationId: this.lastSuccessfulId})
                }, t
            }(), Vp = function () {
                return function () {
                    this.outlet = null, this.route = null, this.resolver = null, this.children = new Hp, this.attachRef = null
                }
            }(), Hp = function () {
                function t() {
                    this.contexts = new Map
                }

                return t.prototype.onChildOutletCreated = function (t, e) {
                    var n = this.getOrCreateContext(t);
                    n.outlet = e, this.contexts.set(t, n)
                }, t.prototype.onChildOutletDestroyed = function (t) {
                    var e = this.getContext(t);
                    e && (e.outlet = null)
                }, t.prototype.onOutletDeactivated = function () {
                    var t = this.contexts;
                    return this.contexts = new Map, t
                }, t.prototype.onOutletReAttached = function (t) {
                    this.contexts = t
                }, t.prototype.getOrCreateContext = function (t) {
                    var e = this.getContext(t);
                    return e || (e = new Vp, this.contexts.set(t, e)), e
                }, t.prototype.getContext = function (t) {
                    return this.contexts.get(t) || null
                }, t
            }(), zp = function () {
                function t(t, e, n, r, o) {
                    this.parentContexts = t, this.location = e, this.resolver = n, this.changeDetector = o, this.activated = null, this._activatedRoute = null, this.activateEvents = new an, this.deactivateEvents = new an, this.name = r || Ul, t.onChildOutletCreated(this.name, this)
                }

                return t.prototype.ngOnDestroy = function () {
                    this.parentContexts.onChildOutletDestroyed(this.name)
                }, t.prototype.ngOnInit = function () {
                    if (!this.activated) {
                        var t = this.parentContexts.getContext(this.name);
                        t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null))
                    }
                }, Object.defineProperty(t.prototype, "isActivated", {
                    get: function () {
                        return !!this.activated
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "component", {
                    get: function () {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this.activated.instance
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "activatedRoute", {
                    get: function () {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this._activatedRoute
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "activatedRouteData", {
                    get: function () {
                        return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                    }, enumerable: !0, configurable: !0
                }), t.prototype.detach = function () {
                    if (!this.activated) throw new Error("Outlet is not activated");
                    this.location.detach();
                    var t = this.activated;
                    return this.activated = null, this._activatedRoute = null, t
                }, t.prototype.attach = function (t, e) {
                    this.activated = t, this._activatedRoute = e, this.location.insert(t.hostView)
                }, t.prototype.deactivate = function () {
                    if (this.activated) {
                        var t = this.component;
                        this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t)
                    }
                }, t.prototype.activateWith = function (t, e) {
                    if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                    this._activatedRoute = t;
                    var n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
                        r = this.parentContexts.getOrCreateContext(this.name).children,
                        o = new Bp(t, r, this.location.injector);
                    this.activated = this.location.createComponent(n, this.location.length, o), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
                }, t
            }(), Bp = function () {
                function t(t, e, n) {
                    this.route = t, this.childContexts = e, this.parent = n
                }

                return t.prototype.get = function (t, e) {
                    return t === Ac ? this.route : t === Hp ? this.childContexts : this.parent.get(t, e)
                }, t
            }(), qp = function () {
                return function () {
                }
            }(), Qp = function () {
                function t() {
                }

                return t.prototype.preload = function (t, e) {
                    return e().pipe(Wa(function () {
                        return wa(null)
                    }))
                }, t
            }(), Kp = function () {
                function t() {
                }

                return t.prototype.preload = function (t, e) {
                    return wa(null)
                }, t
            }(), Wp = function () {
                function t(t, e, n, r, o) {
                    this.router = t, this.injector = r, this.preloadingStrategy = o, this.loader = new Op(e, n, function (e) {
                        return t.triggerEvent(new Rl(e))
                    }, function (e) {
                        return t.triggerEvent(new Il(e))
                    })
                }

                return t.prototype.setUpPreloading = function () {
                    var t = this;
                    this.subscription = this.router.events.pipe(Na(function (t) {
                        return t instanceof El
                    }), uu(function () {
                        return t.preload()
                    })).subscribe(function () {
                    })
                }, t.prototype.preload = function () {
                    var t = this.injector.get(Ce);
                    return this.processRoutes(t, this.router.config)
                }, t.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe()
                }, t.prototype.processRoutes = function (t, e) {
                    var n, r, o = [];
                    try {
                        for (var i = u(e), s = i.next(); !s.done; s = i.next()) {
                            var a = s.value;
                            if (a.loadChildren && !a.canLoad && a._loadedConfig) {
                                var l = a._loadedConfig;
                                o.push(this.processRoutes(l.module, l.routes))
                            } else a.loadChildren && !a.canLoad ? o.push(this.preloadConfig(t, a)) : a.children && o.push(this.processRoutes(t, a.children))
                        }
                    } catch (c) {
                        n = {error: c}
                    } finally {
                        try {
                            s && !s.done && (r = i.return) && r.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return tt(o).pipe(it(), Y(function (t) {
                    }))
                }, t.prototype.preloadConfig = function (t, e) {
                    var n = this;
                    return this.preloadingStrategy.preload(e, function () {
                        return n.loader.load(t.injector, e).pipe(et(function (t) {
                            return e._loadedConfig = t, n.processRoutes(t.module, t.routes)
                        }))
                    })
                }, t
            }(), Zp = function () {
                function t(t, e, n) {
                    void 0 === n && (n = {}), this.router = t, this.viewportScroller = e, this.options = n, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled", n.anchorScrolling = n.anchorScrolling || "disabled"
                }

                return t.prototype.init = function () {
                    "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
                }, t.prototype.createScrollEvents = function () {
                    var t = this;
                    return this.router.events.subscribe(function (e) {
                        e instanceof Sl ? (t.store[t.lastId] = t.viewportScroller.getScrollPosition(), t.lastSource = e.navigationTrigger, t.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof El && (t.lastId = e.id, t.scheduleScrollEvent(e, t.router.parseUrl(e.urlAfterRedirects).fragment))
                    })
                }, t.prototype.consumeScrollEvents = function () {
                    var t = this;
                    return this.router.events.subscribe(function (e) {
                        e instanceof Fl && (e.position ? "top" === t.options.scrollPositionRestoration ? t.viewportScroller.scrollToPosition([0, 0]) : "enabled" === t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition(e.position) : e.anchor && "enabled" === t.options.anchorScrolling ? t.viewportScroller.scrollToAnchor(e.anchor) : "disabled" !== t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition([0, 0]))
                    })
                }, t.prototype.scheduleScrollEvent = function (t, e) {
                    this.router.triggerEvent(new Fl(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, e))
                }, t.prototype.ngOnDestroy = function () {
                    this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
                }, t
            }(), Gp = new mt("ROUTER_CONFIGURATION"), Yp = new mt("ROUTER_FORROOT_GUARD"),
            $p = [na, {provide: ac, useClass: uc}, {
                provide: Up,
                useFactory: oh,
                deps: [sr, ac, Hp, na, ee, hn, jn, Ip, Gp, [Dp, new jt], [Np, new jt]]
            }, Hp, {provide: Ac, useFactory: ih, deps: [Up]}, {provide: hn, useClass: pr}, Wp, Kp, Qp, {
                provide: Gp,
                useValue: {enableTracing: !1}
            }];

        function Jp() {
            return new er("Router", Up)
        }

        var Xp = function () {
            function t(t, e) {
            }

            var e;
            return e = t, t.forRoot = function (t, n) {
                return {
                    ngModule: e,
                    providers: [$p, rh(t), {provide: Yp, useFactory: nh, deps: [[Up, new jt, new Lt]]}, {
                        provide: Gp,
                        useValue: n || {}
                    }, {provide: ta, useFactory: eh, deps: [Js, [new Mt(ea), new jt], Gp]}, {
                        provide: Zp,
                        useFactory: th,
                        deps: [Up, va, Gp]
                    }, {provide: qp, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : Kp}, {
                        provide: er,
                        multi: !0,
                        useFactory: Jp
                    }, [sh, {provide: Sn, multi: !0, useFactory: ah, deps: [sh]}, {
                        provide: lh,
                        useFactory: uh,
                        deps: [sh]
                    }, {provide: kn, multi: !0, useExisting: lh}]]
                }
            }, t.forChild = function (t) {
                return {ngModule: e, providers: [rh(t)]}
            }, t
        }();

        function th(t, e, n) {
            return n.scrollOffset && e.setOffset(n.scrollOffset), new Zp(t, e, n)
        }

        function eh(t, e, n) {
            return void 0 === n && (n = {}), n.useHash ? new oa(t, e) : new ia(t, e)
        }

        function nh(t) {
            if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
            return "guarded"
        }

        function rh(t) {
            return [{provide: bt, multi: !0, useValue: t}, {provide: Ip, multi: !0, useValue: t}]
        }

        function oh(t, e, n, r, o, i, s, a, u, l, c) {
            void 0 === u && (u = {});
            var p = new Up(null, e, n, r, o, i, s, $l(a));
            if (l && (p.urlHandlingStrategy = l), c && (p.routeReuseStrategy = c), u.errorHandler && (p.errorHandler = u.errorHandler), u.malformedUriErrorHandler && (p.malformedUriErrorHandler = u.malformedUriErrorHandler), u.enableTracing) {
                var h = hu();
                p.events.subscribe(function (t) {
                    h.logGroup("Router Event: " + t.constructor.name), h.log(t.toString()), h.log(t), h.logGroupEnd()
                })
            }
            return u.onSameUrlNavigation && (p.onSameUrlNavigation = u.onSameUrlNavigation), u.paramsInheritanceStrategy && (p.paramsInheritanceStrategy = u.paramsInheritanceStrategy), u.urlUpdateStrategy && (p.urlUpdateStrategy = u.urlUpdateStrategy), u.relativeLinkResolution && (p.relativeLinkResolution = u.relativeLinkResolution), p
        }

        function ih(t) {
            return t.routerState.root
        }

        var sh = function () {
            function t(t) {
                this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new M
            }

            return t.prototype.appInitializer = function () {
                var t = this;
                return this.injector.get(Xs, Promise.resolve(null)).then(function () {
                    var e = null, n = new Promise(function (t) {
                        return e = t
                    }), r = t.injector.get(Up), o = t.injector.get(Gp);
                    if (t.isLegacyDisabled(o) || t.isLegacyEnabled(o)) e(!0); else if ("disabled" === o.initialNavigation) r.setUpLocationChangeListener(), e(!0); else {
                        if ("enabled" !== o.initialNavigation) throw new Error("Invalid initialNavigation options: '" + o.initialNavigation + "'");
                        r.hooks.afterPreactivation = function () {
                            return t.initNavigation ? wa(null) : (t.initNavigation = !0, e(!0), t.resultOfPreactivationDone)
                        }, r.initialNavigation()
                    }
                    return n
                })
            }, t.prototype.bootstrapListener = function (t) {
                var e = this.injector.get(Gp), n = this.injector.get(Wp), r = this.injector.get(Zp),
                    o = this.injector.get(Up), i = this.injector.get(sr);
                t === i.components[0] && (this.isLegacyEnabled(e) ? o.initialNavigation() : this.isLegacyDisabled(e) && o.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), o.resetRootComponentType(i.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
            }, t.prototype.isLegacyEnabled = function (t) {
                return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
            }, t.prototype.isLegacyDisabled = function (t) {
                return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation
            }, t
        }();

        function ah(t) {
            return t.appInitializer.bind(t)
        }

        function uh(t) {
            return t.bootstrapListener.bind(t)
        }

        var lh = new mt("Router Initializer"), ch = so({encapsulation: 2, styles: [], data: {}});

        function ph(t) {
            return zi(0, [(t()(), Oo(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), bi(1, 212992, null, 0, zp, [Hp, fr, we, [8, null], yr], null, null)], function (t, e) {
                t(e, 1, 0)
            }, null)
        }

        function hh(t) {
            return zi(0, [(t()(), Oo(0, 0, null, null, 1, "ng-component", [], null, null, null, ph, ch)), bi(1, 49152, null, 0, Ll, [], null, null)], null, null)
        }

        var fh = $o("ng-component", Ll, hh, {}, {}, []), dh = function () {
            function t() {
                this.logoPath = Gs.deployUrl + "assets/icon128.png", this.chromeExtPath = Gs.deployUrl + "assets/chrome-ext.png", this.banImgPath = Gs.deployUrl + "assets/ban.png", this.checkmarkImgPath = Gs.deployUrl + "assets/checkmark.png", this.bgFloatingImgPath = Gs.deployUrl + "assets/bg5_pure.png", this.ytImgPath = Gs.deployUrl + "assets/yt.png", this.bgBanFloatingImgPath = Gs.deployUrl + "assets/popups2.png"
            }

            return t.prototype.ngOnInit = function () {
            }, t
        }(), yh = so({
            encapsulation: 0,
            styles: [[".hero[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;font-size:3rem;text-align:center;padding:0 20px;color:#fff}.hero[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-shadow:0 -5px 30px #fff,5px 0 30px #fff,0 5px 30px #fff,-5px 5px 30px #fff}.landing-page[_ngcontent-%COMP%]{display:grid;grid-template-rows:-webkit-max-content auto;grid-template-rows:max-content auto;grid-template-columns:auto;padding:1.5rem 1rem 3rem}.downloads[_ngcontent-%COMP%]{text-align:center;background:#2d2d2dba;width:35%;margin:1.5rem auto 0;border-radius:20px;padding:0 1rem 1rem}.description[_ngcontent-%COMP%], .description-mobile[_ngcontent-%COMP%]{text-align:center}.lp-content[_ngcontent-%COMP%]{position:relative;z-index:1}.bg-img[_ngcontent-%COMP%]{position:fixed;z-index:0;right:0;bottom:0;width:16rem;-webkit-filter:drop-shadow(8px 3px 25px #fff);filter:drop-shadow(8px 3px 25px #fff)}.img-ban[_ngcontent-%COMP%]{width:16rem;height:16rem;-webkit-filter:drop-shadow(4px 3px 10px #fff);filter:drop-shadow(4px 3px 10px #fff);border-radius:25%}@media screen and (max-width:1200px){.downloads[_ngcontent-%COMP%]{padding:0 1rem 1rem}.bg-img[_ngcontent-%COMP%]{opacity:.2}.img-ban[_ngcontent-%COMP%]{display:none}}.main-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}@media screen and (max-width:450px){.main-content[_ngcontent-%COMP%]{justify-content:flex-start}}.small-desc[_ngcontent-%COMP%]{margin-top:.5rem;color:#b1b1b1;font-size:.8rem;line-height:1.3rem}.free[_ngcontent-%COMP%]{color:#16e416}.paid[_ngcontent-%COMP%]{color:#e41106}.report-page[_ngcontent-%COMP%]{margin-top:1rem;text-align:center}.subs-container[_ngcontent-%COMP%]{width:504px;position:relative;margin:0 auto}@media screen and (max-width:1200px){.subs-container[_ngcontent-%COMP%]{width:350px;padding:0 1rem 1rem}}@media screen and (max-width:400px){.subs-container[_ngcontent-%COMP%]{width:300px}}.see-in-action-container[_ngcontent-%COMP%]{text-align:center}.versions-container[_ngcontent-%COMP%]{position:relative;z-index:0;left:0;top:0;-webkit-filter:drop-shadow(8px 3px 25px #fff);filter:drop-shadow(8px 3px 25px #fff)}.versions-list[_ngcontent-%COMP%]{margin:0;width:auto;padding:1rem}"]],
            data: {}
        });

        function vh(t) {
            return zi(0, [(t()(), Oo(0, 0, null, null, 58, "div", [["class", "landing-page"]], null, null, null, null, null)), (t()(), Oo(1, 0, null, null, 56, "div", [["class", "lp-content"]], null, null, null, null, null)), (t()(), Oo(2, 0, null, null, 3, "div", [["class", "hero"]], null, null, null, null, null)), (t()(), Oo(3, 0, null, null, 0, "img", [["class", "img logo"]], [[8, "src", 4]], null, null, null, null)), (t()(), Oo(4, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (t()(), Ui(-1, null, ["CookiesBlock"])), (t()(), Oo(6, 0, null, null, 51, "div", [["class", "main"]], null, null, null, null, null)), (t()(), Oo(7, 0, null, null, 37, "div", [["class", "description"]], null, null, null, null, null)), (t()(), Oo(8, 0, null, null, 4, "h2", [["class", "header"]], null, null, null, null, null)), (t()(), Ui(-1, null, ["Use CookiesBlock extension and browse modern webpages without losing sanity. "])), (t()(), Oo(10, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), Oo(11, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), Ui(-1, null, [" It disables popups like:"])), (t()(), Oo(13, 0, null, null, 31, "div", [["class", "main-content"]], null, null, null, null, null)), (t()(), Oo(14, 0, null, null, 28, "ul", [["class", "list list--main"]], null, null, null, null, null)), (t()(), Oo(15, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), Oo(16, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (t()(), Oo(17, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Ui(-1, null, ["Notifications"])), (t()(), Oo(19, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), Oo(20, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (t()(), Oo(21, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Ui(-1, null, ["Translations"])), (t()(), Oo(23, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), Oo(24, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (t()(), Oo(25, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Ui(-1, null, ["Geolocalization ( enabled )"])), (t()(), Oo(27, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), Oo(28, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (t()(), Oo(29, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Ui(-1, null, ["Cookies"])), (t()(), Oo(31, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), Oo(32, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (t()(), Oo(33, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Ui(-1, null, ["Privacy policies & terms of use"])), (t()(), Oo(35, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), Oo(36, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (t()(), Oo(37, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Ui(-1, null, ["Newsletters"])), (t()(), Oo(39, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), Oo(40, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (t()(), Oo(41, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Ui(-1, null, ["'Wait, there is more' etc."])), (t()(), Oo(43, 0, null, null, 1, "div", [], null, null, null, null, null)), (t()(), Oo(44, 0, null, null, 0, "img", [["class", "img-ban"]], [[8, "src", 4]], null, null, null, null)), (t()(), Oo(45, 0, null, null, 5, "div", [["class", "see-in-action-container"]], null, null, null, null, null)), (t()(), Oo(46, 0, null, null, 4, "h2", [["class", "header"]], null, null, null, null, null)), (t()(), Oo(47, 0, null, null, 3, "a", [["href", "https://www.youtube.com/watch?v=Wt8NOtzGdds"], ["style", "text-decoration: underline;"], ["target", "_blank"]], null, null, null, null, null)), (t()(), Oo(48, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Ui(-1, null, ["See it in action"])), (t()(), Oo(50, 0, null, null, 0, "img", [["class", "icon"]], [[8, "src", 4]], null, null, null, null)), (t()(), Oo(51, 0, null, null, 4, "div", [["class", "downloads"]], null, null, null, null, null)), (t()(), Oo(52, 0, null, null, 3, "a", [["href", "https://chrome.google.com/webstore/detail/cookiesblock/ajkknbgennjgacpfbhdobipfhhikbldg"], ["target", "_blank"]], null, null, null, null, null)), (t()(), Oo(53, 0, null, null, 0, "img", [["class", "img logo"]], [[8, "src", 4]], null, null, null, null)), (t()(), Oo(54, 0, null, null, 1, "button", [], null, null, null, null, null)), (t()(), Ui(-1, null, [" Download Chrome extension [Open Beta] "])), (t()(), Oo(56, 0, null, null, 1, "div", [["class", "subs-container"]], null, null, null, null, null)), (t()(), Oo(57, 0, null, null, 0, "iframe", [["class", "mj-w-res-iframe"], ["frameborder", "0"],["data-w-type", "embedded"],["style","height:0;"],["frameborder","0"], ["marginheight", "0"], ["marginwidth", "0"], ["scrolling", "no"], ["src", "https://x1nmk.mjt.lu/wgt/x1nmk/xxh4/form?c=57c9603d"], ["width", "100%"]], null, null, null, null, null)), (t()(), Oo(58, 0, null, null, 0, "img", [["class", "bg-img"]], [[8, "src", 4]], null, null, null, null))], null, function (t, e) {
                var n = e.component;
                t(e, 3, 0, n.logoPath), t(e, 16, 0, n.banImgPath), t(e, 20, 0, n.banImgPath), t(e, 24, 0, n.banImgPath), t(e, 28, 0, n.banImgPath), t(e, 32, 0, n.banImgPath), t(e, 36, 0, n.banImgPath), t(e, 40, 0, n.banImgPath), t(e, 44, 0, n.bgBanFloatingImgPath), t(e, 50, 0, n.ytImgPath), t(e, 53, 0, n.chromeExtPath), t(e, 58, 0, n.bgFloatingImgPath)
            })
        }

        function mh(t) {
            return zi(0, [(t()(), Oo(0, 0, null, null, 1, "app-landing-page", [], null, null, null, vh, yh)), bi(1, 114688, null, 0, dh, [], null, null)], function (t, e) {
                t(e, 1, 0)
            }, null)
        }

        var gh = $o("app-landing-page", dh, mh, {}, {}, []), _h = so({
            encapsulation: 0,
            styles: [["[_nghost-%COMP%]{display:block}.footer[_ngcontent-%COMP%]{position:fixed;bottom:0;z-index:1;display:flex;align-items:center;justify-content:space-between;width:100%;background:#2d2d2dba;padding:.5rem;font-size:.75rem;color:#989898}@media screen and (max-width:450px){.footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column}}.footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2n){margin-left:1rem;text-align:right}.footer-title[_ngcontent-%COMP%]{font-weight:700;margin-right:.5rem}"]],
            data: {}
        });

        function bh(t) {
            return zi(0, [(t()(), Oo(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), bi(1, 212992, null, 0, zp, [Hp, fr, we, [8, null], yr], null, null), (t()(), Oo(2, 0, null, null, 10, "div", [["class", "footer"]], null, null, null, null, null)), (t()(), Oo(3, 0, null, null, 4, "div", [], null, null, null, null, null)), (t()(), Oo(4, 0, null, null, 1, "span", [["class", "footer-title"]], null, null, null, null, null)), (t()(), Ui(-1, null, ["Mobile:"])), (t()(), Oo(6, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Ui(-1, null, ["Works with Yandex/Opera/Kiwi browsers."])), (t()(), Oo(8, 0, null, null, 4, "div", [], null, null, null, null, null)), (t()(), Oo(9, 0, null, null, 1, "span", [["class", "footer-title"]], null, null, null, null, null)), (t()(), Ui(-1, null, ["Report page / contact: "])), (t()(), Oo(11, 0, null, null, 1, "a", [["href", "mailto:repogamesstudio@gmail.com"]], null, null, null, null, null)), (t()(), Ui(-1, null, ["repogamesstudio@gmail.com"]))], function (t, e) {
                t(e, 1, 0)
            }, null)
        }

        function wh(t) {
            return zi(0, [(t()(), Oo(0, 0, null, null, 1, "app-root", [], null, null, null, bh, _h)), bi(1, 114688, null, 0, $s, [], null, null)], function (t, e) {
                t(e, 1, 0)
            }, null)
        }

        var Sh = $o("app-root", $s, wh, {}, {}, []), Eh = function () {
            return function () {
            }
        }(), Ch = function () {
            return function () {
            }
        }(), xh = "*";

        function Th(t, e) {
            return void 0 === e && (e = null), {type: 2, steps: t, options: e}
        }

        function kh(t) {
            return {type: 6, styles: t, offset: null}
        }

        function Ph(t) {
            Promise.resolve(null).then(t)
        }

        var Ah = function () {
            function t(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this.parentPlayer = null, this.totalTime = t + e
            }

            return t.prototype._onFinish = function () {
                this._finished || (this._finished = !0, this._onDoneFns.forEach(function (t) {
                    return t()
                }), this._onDoneFns = [])
            }, t.prototype.onStart = function (t) {
                this._onStartFns.push(t)
            }, t.prototype.onDone = function (t) {
                this._onDoneFns.push(t)
            }, t.prototype.onDestroy = function (t) {
                this._onDestroyFns.push(t)
            }, t.prototype.hasStarted = function () {
                return this._started
            }, t.prototype.init = function () {
            }, t.prototype.play = function () {
                this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
            }, t.prototype.triggerMicrotask = function () {
                var t = this;
                Ph(function () {
                    return t._onFinish()
                })
            }, t.prototype._onStart = function () {
                this._onStartFns.forEach(function (t) {
                    return t()
                }), this._onStartFns = []
            }, t.prototype.pause = function () {
            }, t.prototype.restart = function () {
            }, t.prototype.finish = function () {
                this._onFinish()
            }, t.prototype.destroy = function () {
                this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(function (t) {
                    return t()
                }), this._onDestroyFns = [])
            }, t.prototype.reset = function () {
            }, t.prototype.setPosition = function (t) {
            }, t.prototype.getPosition = function () {
                return 0
            }, t.prototype.triggerCallback = function (t) {
                var e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(function (t) {
                    return t()
                }), e.length = 0
            }, t
        }(), Nh = function () {
            function t(t) {
                var e = this;
                this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = t;
                var n = 0, r = 0, o = 0, i = this.players.length;
                0 == i ? Ph(function () {
                    return e._onFinish()
                }) : this.players.forEach(function (t) {
                    t.onDone(function () {
                        ++n == i && e._onFinish()
                    }), t.onDestroy(function () {
                        ++r == i && e._onDestroy()
                    }), t.onStart(function () {
                        ++o == i && e._onStart()
                    })
                }), this.totalTime = this.players.reduce(function (t, e) {
                    return Math.max(t, e.totalTime)
                }, 0)
            }

            return t.prototype._onFinish = function () {
                this._finished || (this._finished = !0, this._onDoneFns.forEach(function (t) {
                    return t()
                }), this._onDoneFns = [])
            }, t.prototype.init = function () {
                this.players.forEach(function (t) {
                    return t.init()
                })
            }, t.prototype.onStart = function (t) {
                this._onStartFns.push(t)
            }, t.prototype._onStart = function () {
                this.hasStarted() || (this._started = !0, this._onStartFns.forEach(function (t) {
                    return t()
                }), this._onStartFns = [])
            }, t.prototype.onDone = function (t) {
                this._onDoneFns.push(t)
            }, t.prototype.onDestroy = function (t) {
                this._onDestroyFns.push(t)
            }, t.prototype.hasStarted = function () {
                return this._started
            }, t.prototype.play = function () {
                this.parentPlayer || this.init(), this._onStart(), this.players.forEach(function (t) {
                    return t.play()
                })
            }, t.prototype.pause = function () {
                this.players.forEach(function (t) {
                    return t.pause()
                })
            }, t.prototype.restart = function () {
                this.players.forEach(function (t) {
                    return t.restart()
                })
            }, t.prototype.finish = function () {
                this._onFinish(), this.players.forEach(function (t) {
                    return t.finish()
                })
            }, t.prototype.destroy = function () {
                this._onDestroy()
            }, t.prototype._onDestroy = function () {
                this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(function (t) {
                    return t.destroy()
                }), this._onDestroyFns.forEach(function (t) {
                    return t()
                }), this._onDestroyFns = [])
            }, t.prototype.reset = function () {
                this.players.forEach(function (t) {
                    return t.reset()
                }), this._destroyed = !1, this._finished = !1, this._started = !1
            }, t.prototype.setPosition = function (t) {
                var e = t * this.totalTime;
                this.players.forEach(function (t) {
                    var n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
                    t.setPosition(n)
                })
            }, t.prototype.getPosition = function () {
                var t = 0;
                return this.players.forEach(function (e) {
                    var n = e.getPosition();
                    t = Math.min(n, t)
                }), t
            }, t.prototype.beforeDestroy = function () {
                this.players.forEach(function (t) {
                    t.beforeDestroy && t.beforeDestroy()
                })
            }, t.prototype.triggerCallback = function (t) {
                var e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(function (t) {
                    return t()
                }), e.length = 0
            }, t
        }(), Rh = "!";

        function Ih() {
            return "undefined" != typeof process
        }

        function Oh(t) {
            switch (t.length) {
                case 0:
                    return new Ah;
                case 1:
                    return t[0];
                default:
                    return new Nh(t)
            }
        }

        function Dh(t, e, n, r, o, i) {
            void 0 === o && (o = {}), void 0 === i && (i = {});
            var s = [], a = [], u = -1, l = null;
            if (r.forEach(function (t) {
                var n = t.offset, r = n == u, c = r && l || {};
                Object.keys(t).forEach(function (n) {
                    var r = n, a = t[n];
                    if ("offset" !== n) switch (r = e.normalizePropertyName(r, s), a) {
                        case Rh:
                            a = o[n];
                            break;
                        case xh:
                            a = i[n];
                            break;
                        default:
                            a = e.normalizeStyleValue(n, r, a, s)
                    }
                    c[r] = a
                }), r || a.push(c), l = c, u = n
            }), s.length) throw new Error("Unable to animate due to the following errors:\n - " + s.join("\n - "));
            return a
        }

        function Mh(t, e, n, r) {
            switch (e) {
                case"start":
                    t.onStart(function () {
                        return r(n && jh(n, "start", t))
                    });
                    break;
                case"done":
                    t.onDone(function () {
                        return r(n && jh(n, "done", t))
                    });
                    break;
                case"destroy":
                    t.onDestroy(function () {
                        return r(n && jh(n, "destroy", t))
                    })
            }
        }

        function jh(t, e, n) {
            var r = n.totalTime,
                o = Fh(t.element, t.triggerName, t.fromState, t.toState, e || t.phaseName, null == r ? t.totalTime : r, !!n.disabled),
                i = t._data;
            return null != i && (o._data = i), o
        }

        function Fh(t, e, n, r, o, i, s) {
            return void 0 === o && (o = ""), void 0 === i && (i = 0), {
                element: t,
                triggerName: e,
                fromState: n,
                toState: r,
                phaseName: o,
                totalTime: i,
                disabled: !!s
            }
        }

        function Lh(t, e, n) {
            var r;
            return t instanceof Map ? (r = t.get(e)) || t.set(e, r = n) : (r = t[e]) || (r = t[e] = n), r
        }

        function Uh(t) {
            var e = t.indexOf(":");
            return [t.substring(1, e), t.substr(e + 1)]
        }

        var Vh = function (t, e) {
            return !1
        }, Hh = function (t, e) {
            return !1
        }, zh = function (t, e, n) {
            return []
        }, Bh = Ih();
        if (Bh || "undefined" != typeof Element) {
            if (Vh = function (t, e) {
                return t.contains(e)
            }, Bh || Element.prototype.matches) Hh = function (t, e) {
                return t.matches(e)
            }; else {
                var qh = Element.prototype,
                    Qh = qh.matchesSelector || qh.mozMatchesSelector || qh.msMatchesSelector || qh.oMatchesSelector || qh.webkitMatchesSelector;
                Qh && (Hh = function (t, e) {
                    return Qh.apply(t, [e])
                })
            }
            zh = function (t, e, n) {
                var r = [];
                if (n) r.push.apply(r, c(t.querySelectorAll(e))); else {
                    var o = t.querySelector(e);
                    o && r.push(o)
                }
                return r
            }
        }
        var Kh = null, Wh = !1;

        function Zh(t) {
            Kh || (Kh = ("undefined" != typeof document ? document.body : null) || {}, Wh = !!Kh.style && "WebkitAppearance" in Kh.style);
            var e = !0;
            return Kh.style && !function (t) {
                return "ebkit" == t.substring(1, 6)
            }(t) && !(e = t in Kh.style) && Wh && (e = "Webkit" + t.charAt(0).toUpperCase() + t.substr(1) in Kh.style), e
        }

        var Gh = Hh, Yh = Vh, $h = zh;

        function Jh(t) {
            var e = {};
            return Object.keys(t).forEach(function (n) {
                var r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
                e[r] = t[n]
            }), e
        }

        var Xh = function () {
            function t() {
            }

            return t.prototype.validateStyleProperty = function (t) {
                return Zh(t)
            }, t.prototype.matchesElement = function (t, e) {
                return Gh(t, e)
            }, t.prototype.containsElement = function (t, e) {
                return Yh(t, e)
            }, t.prototype.query = function (t, e, n) {
                return $h(t, e, n)
            }, t.prototype.computeStyle = function (t, e, n) {
                return n || ""
            }, t.prototype.animate = function (t, e, n, r, o, i, s) {
                return void 0 === i && (i = []), new Ah(n, r)
            }, t
        }(), tf = function () {
            function t() {
            }

            return t.NOOP = new Xh, t
        }(), ef = 1e3;

        function nf(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/^(-?[\.\d]+)(m?s)/);
            return !e || e.length < 2 ? 0 : rf(parseFloat(e[1]), e[2])
        }

        function rf(t, e) {
            switch (e) {
                case"s":
                    return t * ef;
                default:
                    return t
            }
        }

        function of(t, e, n) {
            return t.hasOwnProperty("duration") ? t : function (t, e, n) {
                var r, o = 0, i = "";
                if ("string" == typeof t) {
                    var s = t.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
                    if (null === s) return e.push('The provided timing value "' + t + '" is invalid.'), {
                        duration: 0,
                        delay: 0,
                        easing: ""
                    };
                    r = rf(parseFloat(s[1]), s[2]);
                    var a = s[3];
                    null != a && (o = rf(parseFloat(a), s[4]));
                    var u = s[5];
                    u && (i = u)
                } else r = t;
                if (!n) {
                    var l = !1, c = e.length;
                    r < 0 && (e.push("Duration values below 0 are not allowed for this animation step."), l = !0), o < 0 && (e.push("Delay values below 0 are not allowed for this animation step."), l = !0), l && e.splice(c, 0, 'The provided timing value "' + t + '" is invalid.')
                }
                return {duration: r, delay: o, easing: i}
            }(t, e, n)
        }

        function sf(t, e) {
            return void 0 === e && (e = {}), Object.keys(t).forEach(function (n) {
                e[n] = t[n]
            }), e
        }

        function af(t, e, n) {
            if (void 0 === n && (n = {}), e) for (var r in t) n[r] = t[r]; else sf(t, n);
            return n
        }

        function uf(t, e, n) {
            return n ? e + ":" + n + ";" : ""
        }

        function lf(t) {
            for (var e = "", n = 0; n < t.style.length; n++) e += uf(0, r = t.style.item(n), t.style.getPropertyValue(r));
            for (var r in t.style) t.style.hasOwnProperty(r) && !r.startsWith("_") && (e += uf(0, r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), t.style[r]));
            t.setAttribute("style", e)
        }

        function cf(t, e, n) {
            t.style && (Object.keys(e).forEach(function (r) {
                var o = gf(r);
                n && !n.hasOwnProperty(r) && (n[r] = t.style[o]), t.style[o] = e[r]
            }), Ih() && lf(t))
        }

        function pf(t, e) {
            t.style && (Object.keys(e).forEach(function (e) {
                var n = gf(e);
                t.style[n] = ""
            }), Ih() && lf(t))
        }

        function hf(t) {
            return Array.isArray(t) ? 1 == t.length ? t[0] : Th(t) : t
        }

        var ff = new RegExp("{{\\s*(.+?)\\s*}}", "g");

        function df(t) {
            var e = [];
            if ("string" == typeof t) {
                for (var n = t.toString(), r = void 0; r = ff.exec(n);) e.push(r[1]);
                ff.lastIndex = 0
            }
            return e
        }

        function yf(t, e, n) {
            var r = t.toString(), o = r.replace(ff, function (t, r) {
                var o = e[r];
                return e.hasOwnProperty(r) || (n.push("Please provide a value for the animation param " + r), o = ""), o.toString()
            });
            return o == r ? t : o
        }

        function vf(t) {
            for (var e = [], n = t.next(); !n.done;) e.push(n.value), n = t.next();
            return e
        }

        var mf = /-+([a-z0-9])/g;

        function gf(t) {
            return t.replace(mf, function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return t[1].toUpperCase()
            })
        }

        function _f(t, e) {
            return 0 === t || 0 === e
        }

        function bf(t, e, n) {
            var r = Object.keys(n);
            if (r.length && e.length) {
                var o = e[0], i = [];
                if (r.forEach(function (t) {
                    o.hasOwnProperty(t) || i.push(t), o[t] = n[t]
                }), i.length) for (var s = function () {
                    var n = e[a];
                    i.forEach(function (e) {
                        n[e] = Sf(t, e)
                    })
                }, a = 1; a < e.length; a++) s()
            }
            return e
        }

        function wf(t, e, n) {
            switch (e.type) {
                case 7:
                    return t.visitTrigger(e, n);
                case 0:
                    return t.visitState(e, n);
                case 1:
                    return t.visitTransition(e, n);
                case 2:
                    return t.visitSequence(e, n);
                case 3:
                    return t.visitGroup(e, n);
                case 4:
                    return t.visitAnimate(e, n);
                case 5:
                    return t.visitKeyframes(e, n);
                case 6:
                    return t.visitStyle(e, n);
                case 8:
                    return t.visitReference(e, n);
                case 9:
                    return t.visitAnimateChild(e, n);
                case 10:
                    return t.visitAnimateRef(e, n);
                case 11:
                    return t.visitQuery(e, n);
                case 12:
                    return t.visitStagger(e, n);
                default:
                    throw new Error("Unable to resolve animation metadata node #" + e.type)
            }
        }

        function Sf(t, e) {
            return window.getComputedStyle(t)[e]
        }

        var Ef = "*", Cf = new Set(["true", "1"]), xf = new Set(["false", "0"]);

        function Tf(t, e) {
            var n = Cf.has(t) || xf.has(t), r = Cf.has(e) || xf.has(e);
            return function (o, i) {
                var s = t == Ef || t == o, a = e == Ef || e == i;
                return !s && n && "boolean" == typeof o && (s = o ? Cf.has(t) : xf.has(t)), !a && r && "boolean" == typeof i && (a = i ? Cf.has(e) : xf.has(e)), s && a
            }
        }

        var kf = new RegExp("s*:selfs*,?", "g");

        function Pf(t, e, n) {
            return new Af(t).build(e, n)
        }

        var Af = function () {
            function t(t) {
                this._driver = t
            }

            return t.prototype.build = function (t, e) {
                var n = new Nf(e);
                return this._resetContextStyleTimingState(n), wf(this, hf(t), n)
            }, t.prototype._resetContextStyleTimingState = function (t) {
                t.currentQuerySelector = "", t.collectedStyles = {}, t.collectedStyles[""] = {}, t.currentTime = 0
            }, t.prototype.visitTrigger = function (t, e) {
                var n = this, r = e.queryCount = 0, o = e.depCount = 0, i = [], s = [];
                return "@" == t.name.charAt(0) && e.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"), t.definitions.forEach(function (t) {
                    if (n._resetContextStyleTimingState(e), 0 == t.type) {
                        var a = t, u = a.name;
                        u.toString().split(/\s*,\s*/).forEach(function (t) {
                            a.name = t, i.push(n.visitState(a, e))
                        }), a.name = u
                    } else if (1 == t.type) {
                        var l = n.visitTransition(t, e);
                        r += l.queryCount, o += l.depCount, s.push(l)
                    } else e.errors.push("only state() and transition() definitions can sit inside of a trigger()")
                }), {type: 7, name: t.name, states: i, transitions: s, queryCount: r, depCount: o, options: null}
            }, t.prototype.visitState = function (t, e) {
                var n = this.visitStyle(t.styles, e), r = t.options && t.options.params || null;
                if (n.containsDynamicStyles) {
                    var o = new Set, i = r || {};
                    if (n.styles.forEach(function (t) {
                        if (Rf(t)) {
                            var e = t;
                            Object.keys(e).forEach(function (t) {
                                df(e[t]).forEach(function (t) {
                                    i.hasOwnProperty(t) || o.add(t)
                                })
                            })
                        }
                    }), o.size) {
                        var s = vf(o.values());
                        e.errors.push('state("' + t.name + '", ...) must define default values for all the following style substitutions: ' + s.join(", "))
                    }
                }
                return {type: 0, name: t.name, style: n, options: r ? {params: r} : null}
            }, t.prototype.visitTransition = function (t, e) {
                e.queryCount = 0, e.depCount = 0;
                var n, r, o, i = wf(this, hf(t.animation), e);
                return {
                    type: 1,
                    matchers: (n = t.expr, r = e.errors, o = [], "string" == typeof n ? n.split(/\s*,\s*/).forEach(function (t) {
                        return function (t, e, n) {
                            if (":" == t[0]) {
                                var r = function (t, e) {
                                    switch (t) {
                                        case":enter":
                                            return "void => *";
                                        case":leave":
                                            return "* => void";
                                        case":increment":
                                            return function (t, e) {
                                                return parseFloat(e) > parseFloat(t)
                                            };
                                        case":decrement":
                                            return function (t, e) {
                                                return parseFloat(e) < parseFloat(t)
                                            };
                                        default:
                                            return e.push('The transition alias value "' + t + '" is not supported'), "* => *"
                                    }
                                }(t, n);
                                if ("function" == typeof r) return void e.push(r);
                                t = r
                            }
                            var o = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                            if (null == o || o.length < 4) return n.push('The provided transition expression "' + t + '" is not supported'), e;
                            var i = o[1], s = o[2], a = o[3];
                            e.push(Tf(i, a)), "<" != s[0] || i == Ef && a == Ef || e.push(Tf(a, i))
                        }(t, o, r)
                    }) : o.push(n), o),
                    animation: i,
                    queryCount: e.queryCount,
                    depCount: e.depCount,
                    options: If(t.options)
                }
            }, t.prototype.visitSequence = function (t, e) {
                var n = this;
                return {
                    type: 2, steps: t.steps.map(function (t) {
                        return wf(n, t, e)
                    }), options: If(t.options)
                }
            }, t.prototype.visitGroup = function (t, e) {
                var n = this, r = e.currentTime, o = 0, i = t.steps.map(function (t) {
                    e.currentTime = r;
                    var i = wf(n, t, e);
                    return o = Math.max(o, e.currentTime), i
                });
                return e.currentTime = o, {type: 3, steps: i, options: If(t.options)}
            }, t.prototype.visitAnimate = function (t, e) {
                var n, r = function (t, e) {
                    var n = null;
                    if (t.hasOwnProperty("duration")) n = t; else if ("number" == typeof t) return Of(of(t, e).duration, 0, "");
                    var r = t;
                    if (r.split(/\s+/).some(function (t) {
                        return "{" == t.charAt(0) && "{" == t.charAt(1)
                    })) {
                        var o = Of(0, 0, "");
                        return o.dynamic = !0, o.strValue = r, o
                    }
                    return Of((n = n || of(r, e)).duration, n.delay, n.easing)
                }(t.timings, e.errors);
                e.currentAnimateTimings = r;
                var o = t.styles ? t.styles : kh({});
                if (5 == o.type) n = this.visitKeyframes(o, e); else {
                    var i = t.styles, s = !1;
                    if (!i) {
                        s = !0;
                        var a = {};
                        r.easing && (a.easing = r.easing), i = kh(a)
                    }
                    e.currentTime += r.duration + r.delay;
                    var u = this.visitStyle(i, e);
                    u.isEmptyStep = s, n = u
                }
                return e.currentAnimateTimings = null, {type: 4, timings: r, style: n, options: null}
            }, t.prototype.visitStyle = function (t, e) {
                var n = this._makeStyleAst(t, e);
                return this._validateStyleAst(n, e), n
            }, t.prototype._makeStyleAst = function (t, e) {
                var n = [];
                Array.isArray(t.styles) ? t.styles.forEach(function (t) {
                    "string" == typeof t ? t == xh ? n.push(t) : e.errors.push("The provided style string value " + t + " is not allowed.") : n.push(t)
                }) : n.push(t.styles);
                var r = !1, o = null;
                return n.forEach(function (t) {
                    if (Rf(t)) {
                        var e = t, n = e.easing;
                        if (n && (o = n, delete e.easing), !r) for (var i in e) if (e[i].toString().indexOf("{{") >= 0) {
                            r = !0;
                            break
                        }
                    }
                }), {type: 6, styles: n, easing: o, offset: t.offset, containsDynamicStyles: r, options: null}
            }, t.prototype._validateStyleAst = function (t, e) {
                var n = this, r = e.currentAnimateTimings, o = e.currentTime, i = e.currentTime;
                r && i > 0 && (i -= r.duration + r.delay), t.styles.forEach(function (t) {
                    "string" != typeof t && Object.keys(t).forEach(function (r) {
                        if (n._driver.validateStyleProperty(r)) {
                            var s, a, u, l = e.collectedStyles[e.currentQuerySelector], c = l[r], p = !0;
                            c && (i != o && i >= c.startTime && o <= c.endTime && (e.errors.push('The CSS property "' + r + '" that exists between the times of "' + c.startTime + 'ms" and "' + c.endTime + 'ms" is also being animated in a parallel animation between the times of "' + i + 'ms" and "' + o + 'ms"'), p = !1), i = c.startTime), p && (l[r] = {
                                startTime: i,
                                endTime: o
                            }), e.options && (s = e.errors, a = e.options.params || {}, (u = df(t[r])).length && u.forEach(function (t) {
                                a.hasOwnProperty(t) || s.push("Unable to resolve the local animation param " + t + " in the given list of values")
                            }))
                        } else e.errors.push('The provided animation property "' + r + '" is not a supported CSS property for animations')
                    })
                })
            }, t.prototype.visitKeyframes = function (t, e) {
                var n = this, r = {type: 5, styles: [], options: null};
                if (!e.currentAnimateTimings) return e.errors.push("keyframes() must be placed inside of a call to animate()"), r;
                var o = 0, i = [], s = !1, a = !1, u = 0, l = t.steps.map(function (t) {
                    var r = n._makeStyleAst(t, e), l = null != r.offset ? r.offset : function (t) {
                        if ("string" == typeof t) return null;
                        var e = null;
                        if (Array.isArray(t)) t.forEach(function (t) {
                            if (Rf(t) && t.hasOwnProperty("offset")) {
                                var n = t;
                                e = parseFloat(n.offset), delete n.offset
                            }
                        }); else if (Rf(t) && t.hasOwnProperty("offset")) {
                            var n = t;
                            e = parseFloat(n.offset), delete n.offset
                        }
                        return e
                    }(r.styles), c = 0;
                    return null != l && (o++, c = r.offset = l), a = a || c < 0 || c > 1, s = s || c < u, u = c, i.push(c), r
                });
                a && e.errors.push("Please ensure that all keyframe offsets are between 0 and 1"), s && e.errors.push("Please ensure that all keyframe offsets are in order");
                var c = t.steps.length, p = 0;
                o > 0 && o < c ? e.errors.push("Not all style() steps within the declared keyframes() contain offsets") : 0 == o && (p = 1 / (c - 1));
                var h = c - 1, f = e.currentTime, d = e.currentAnimateTimings, y = d.duration;
                return l.forEach(function (t, o) {
                    var s = p > 0 ? o == h ? 1 : p * o : i[o], a = s * y;
                    e.currentTime = f + d.delay + a, d.duration = a, n._validateStyleAst(t, e), t.offset = s, r.styles.push(t)
                }), r
            }, t.prototype.visitReference = function (t, e) {
                return {type: 8, animation: wf(this, hf(t.animation), e), options: If(t.options)}
            }, t.prototype.visitAnimateChild = function (t, e) {
                return e.depCount++, {type: 9, options: If(t.options)}
            }, t.prototype.visitAnimateRef = function (t, e) {
                return {type: 10, animation: this.visitReference(t.animation, e), options: If(t.options)}
            }, t.prototype.visitQuery = function (t, e) {
                var n = e.currentQuerySelector, r = t.options || {};
                e.queryCount++, e.currentQuery = t;
                var o = l(function (t) {
                    var e = !!t.split(/\s*,\s*/).find(function (t) {
                        return ":self" == t
                    });
                    return e && (t = t.replace(kf, "")), [t = t.replace(/@\*/g, ".ng-trigger").replace(/@\w+/g, function (t) {
                        return ".ng-trigger-" + t.substr(1)
                    }).replace(/:animating/g, ".ng-animating"), e]
                }(t.selector), 2), i = o[0], s = o[1];
                e.currentQuerySelector = n.length ? n + " " + i : i, Lh(e.collectedStyles, e.currentQuerySelector, {});
                var a = wf(this, hf(t.animation), e);
                return e.currentQuery = null, e.currentQuerySelector = n, {
                    type: 11,
                    selector: i,
                    limit: r.limit || 0,
                    optional: !!r.optional,
                    includeSelf: s,
                    animation: a,
                    originalSelector: t.selector,
                    options: If(t.options)
                }
            }, t.prototype.visitStagger = function (t, e) {
                e.currentQuery || e.errors.push("stagger() can only be used inside of query()");
                var n = "full" === t.timings ? {duration: 0, delay: 0, easing: "full"} : of(t.timings, e.errors, !0);
                return {type: 12, animation: wf(this, hf(t.animation), e), timings: n, options: null}
            }, t
        }(), Nf = function () {
            return function (t) {
                this.errors = t, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = {}, this.options = null
            }
        }();

        function Rf(t) {
            return !Array.isArray(t) && "object" == typeof t
        }

        function If(t) {
            var e;
            return t ? (t = sf(t)).params && (t.params = (e = t.params) ? sf(e) : null) : t = {}, t
        }

        function Of(t, e, n) {
            return {duration: t, delay: e, easing: n}
        }

        function Df(t, e, n, r, o, i, s, a) {
            return void 0 === s && (s = null), void 0 === a && (a = !1), {
                type: 1,
                element: t,
                keyframes: e,
                preStyleProps: n,
                postStyleProps: r,
                duration: o,
                delay: i,
                totalTime: o + i,
                easing: s,
                subTimeline: a
            }
        }

        var Mf = function () {
            function t() {
                this._map = new Map
            }

            return t.prototype.consume = function (t) {
                var e = this._map.get(t);
                return e ? this._map.delete(t) : e = [], e
            }, t.prototype.append = function (t, e) {
                var n = this._map.get(t);
                n || this._map.set(t, n = []), n.push.apply(n, c(e))
            }, t.prototype.has = function (t) {
                return this._map.has(t)
            }, t.prototype.clear = function () {
                this._map.clear()
            }, t
        }(), jf = new RegExp(":enter", "g"), Ff = new RegExp(":leave", "g");

        function Lf(t, e, n, r, o, i, s, a, u, l) {
            return void 0 === i && (i = {}), void 0 === s && (s = {}), void 0 === l && (l = []), (new Uf).buildKeyframes(t, e, n, r, o, i, s, a, u, l)
        }

        var Uf = function () {
            function t() {
            }

            return t.prototype.buildKeyframes = function (t, e, n, r, o, i, s, a, u, l) {
                void 0 === l && (l = []), u = u || new Mf;
                var c = new Hf(t, e, u, r, o, l, []);
                c.options = a, c.currentTimeline.setStyles([i], null, c.errors, a), wf(this, n, c);
                var p = c.timelines.filter(function (t) {
                    return t.containsAnimation()
                });
                if (p.length && Object.keys(s).length) {
                    var h = p[p.length - 1];
                    h.allowOnlyTimelineStyles() || h.setStyles([s], null, c.errors, a)
                }
                return p.length ? p.map(function (t) {
                    return t.buildKeyframes()
                }) : [Df(e, [], [], [], 0, 0, "", !1)]
            }, t.prototype.visitTrigger = function (t, e) {
            }, t.prototype.visitState = function (t, e) {
            }, t.prototype.visitTransition = function (t, e) {
            }, t.prototype.visitAnimateChild = function (t, e) {
                var n = e.subInstructions.consume(e.element);
                if (n) {
                    var r = e.createSubContext(t.options), o = e.currentTimeline.currentTime,
                        i = this._visitSubInstructions(n, r, r.options);
                    o != i && e.transformIntoNewTimeline(i)
                }
                e.previousNode = t
            }, t.prototype.visitAnimateRef = function (t, e) {
                var n = e.createSubContext(t.options);
                n.transformIntoNewTimeline(), this.visitReference(t.animation, n), e.transformIntoNewTimeline(n.currentTimeline.currentTime), e.previousNode = t
            }, t.prototype._visitSubInstructions = function (t, e, n) {
                var r = e.currentTimeline.currentTime, o = null != n.duration ? nf(n.duration) : null,
                    i = null != n.delay ? nf(n.delay) : null;
                return 0 !== o && t.forEach(function (t) {
                    var n = e.appendInstructionToTimeline(t, o, i);
                    r = Math.max(r, n.duration + n.delay)
                }), r
            }, t.prototype.visitReference = function (t, e) {
                e.updateOptions(t.options, !0), wf(this, t.animation, e), e.previousNode = t
            }, t.prototype.visitSequence = function (t, e) {
                var n = this, r = e.subContextCount, o = e, i = t.options;
                if (i && (i.params || i.delay) && ((o = e.createSubContext(i)).transformIntoNewTimeline(), null != i.delay)) {
                    6 == o.previousNode.type && (o.currentTimeline.snapshotCurrentStyles(), o.previousNode = Vf);
                    var s = nf(i.delay);
                    o.delayNextStep(s)
                }
                t.steps.length && (t.steps.forEach(function (t) {
                    return wf(n, t, o)
                }), o.currentTimeline.applyStylesToKeyframe(), o.subContextCount > r && o.transformIntoNewTimeline()), e.previousNode = t
            }, t.prototype.visitGroup = function (t, e) {
                var n = this, r = [], o = e.currentTimeline.currentTime,
                    i = t.options && t.options.delay ? nf(t.options.delay) : 0;
                t.steps.forEach(function (s) {
                    var a = e.createSubContext(t.options);
                    i && a.delayNextStep(i), wf(n, s, a), o = Math.max(o, a.currentTimeline.currentTime), r.push(a.currentTimeline)
                }), r.forEach(function (t) {
                    return e.currentTimeline.mergeTimelineCollectedStyles(t)
                }), e.transformIntoNewTimeline(o), e.previousNode = t
            }, t.prototype._visitTiming = function (t, e) {
                if (t.dynamic) {
                    var n = t.strValue;
                    return of(e.params ? yf(n, e.params, e.errors) : n, e.errors)
                }
                return {duration: t.duration, delay: t.delay, easing: t.easing}
            }, t.prototype.visitAnimate = function (t, e) {
                var n = e.currentAnimateTimings = this._visitTiming(t.timings, e), r = e.currentTimeline;
                n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles());
                var o = t.style;
                5 == o.type ? this.visitKeyframes(o, e) : (e.incrementTime(n.duration), this.visitStyle(o, e), r.applyStylesToKeyframe()), e.currentAnimateTimings = null, e.previousNode = t
            }, t.prototype.visitStyle = function (t, e) {
                var n = e.currentTimeline, r = e.currentAnimateTimings;
                !r && n.getCurrentStyleProperties().length && n.forwardFrame();
                var o = r && r.easing || t.easing;
                t.isEmptyStep ? n.applyEmptyStep(o) : n.setStyles(t.styles, o, e.errors, e.options), e.previousNode = t
            }, t.prototype.visitKeyframes = function (t, e) {
                var n = e.currentAnimateTimings, r = e.currentTimeline.duration, o = n.duration,
                    i = e.createSubContext().currentTimeline;
                i.easing = n.easing, t.styles.forEach(function (t) {
                    i.forwardTime((t.offset || 0) * o), i.setStyles(t.styles, t.easing, e.errors, e.options), i.applyStylesToKeyframe()
                }), e.currentTimeline.mergeTimelineCollectedStyles(i), e.transformIntoNewTimeline(r + o), e.previousNode = t
            }, t.prototype.visitQuery = function (t, e) {
                var n = this, r = e.currentTimeline.currentTime, o = t.options || {}, i = o.delay ? nf(o.delay) : 0;
                i && (6 === e.previousNode.type || 0 == r && e.currentTimeline.getCurrentStyleProperties().length) && (e.currentTimeline.snapshotCurrentStyles(), e.previousNode = Vf);
                var s = r,
                    a = e.invokeQuery(t.selector, t.originalSelector, t.limit, t.includeSelf, !!o.optional, e.errors);
                e.currentQueryTotal = a.length;
                var u = null;
                a.forEach(function (r, o) {
                    e.currentQueryIndex = o;
                    var a = e.createSubContext(t.options, r);
                    i && a.delayNextStep(i), r === e.element && (u = a.currentTimeline), wf(n, t.animation, a), a.currentTimeline.applyStylesToKeyframe(), s = Math.max(s, a.currentTimeline.currentTime)
                }), e.currentQueryIndex = 0, e.currentQueryTotal = 0, e.transformIntoNewTimeline(s), u && (e.currentTimeline.mergeTimelineCollectedStyles(u), e.currentTimeline.snapshotCurrentStyles()), e.previousNode = t
            }, t.prototype.visitStagger = function (t, e) {
                var n = e.parentContext, r = e.currentTimeline, o = t.timings, i = Math.abs(o.duration),
                    s = i * (e.currentQueryTotal - 1), a = i * e.currentQueryIndex;
                switch (o.duration < 0 ? "reverse" : o.easing) {
                    case"reverse":
                        a = s - a;
                        break;
                    case"full":
                        a = n.currentStaggerTime
                }
                var u = e.currentTimeline;
                a && u.delayNextStep(a);
                var l = u.currentTime;
                wf(this, t.animation, e), e.previousNode = t, n.currentStaggerTime = r.currentTime - l + (r.startTime - n.currentTimeline.startTime)
            }, t
        }(), Vf = {}, Hf = function () {
            function t(t, e, n, r, o, i, s, a) {
                this._driver = t, this.element = e, this.subInstructions = n, this._enterClassName = r, this._leaveClassName = o, this.errors = i, this.timelines = s, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = Vf, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = a || new zf(this._driver, e, 0), s.push(this.currentTimeline)
            }

            return Object.defineProperty(t.prototype, "params", {
                get: function () {
                    return this.options.params
                }, enumerable: !0, configurable: !0
            }), t.prototype.updateOptions = function (t, e) {
                var n = this;
                if (t) {
                    var r = t, o = this.options;
                    null != r.duration && (o.duration = nf(r.duration)), null != r.delay && (o.delay = nf(r.delay));
                    var i = r.params;
                    if (i) {
                        var s = o.params;
                        s || (s = this.options.params = {}), Object.keys(i).forEach(function (t) {
                            e && s.hasOwnProperty(t) || (s[t] = yf(i[t], s, n.errors))
                        })
                    }
                }
            }, t.prototype._copyOptions = function () {
                var t = {};
                if (this.options) {
                    var e = this.options.params;
                    if (e) {
                        var n = t.params = {};
                        Object.keys(e).forEach(function (t) {
                            n[t] = e[t]
                        })
                    }
                }
                return t
            }, t.prototype.createSubContext = function (e, n, r) {
                void 0 === e && (e = null);
                var o = n || this.element,
                    i = new t(this._driver, o, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(o, r || 0));
                return i.previousNode = this.previousNode, i.currentAnimateTimings = this.currentAnimateTimings, i.options = this._copyOptions(), i.updateOptions(e), i.currentQueryIndex = this.currentQueryIndex, i.currentQueryTotal = this.currentQueryTotal, i.parentContext = this, this.subContextCount++, i
            }, t.prototype.transformIntoNewTimeline = function (t) {
                return this.previousNode = Vf, this.currentTimeline = this.currentTimeline.fork(this.element, t), this.timelines.push(this.currentTimeline), this.currentTimeline
            }, t.prototype.appendInstructionToTimeline = function (t, e, n) {
                var r = {
                        duration: null != e ? e : t.duration,
                        delay: this.currentTimeline.currentTime + (null != n ? n : 0) + t.delay,
                        easing: ""
                    },
                    o = new Bf(this._driver, t.element, t.keyframes, t.preStyleProps, t.postStyleProps, r, t.stretchStartingKeyframe);
                return this.timelines.push(o), r
            }, t.prototype.incrementTime = function (t) {
                this.currentTimeline.forwardTime(this.currentTimeline.duration + t)
            }, t.prototype.delayNextStep = function (t) {
                t > 0 && this.currentTimeline.delayNextStep(t)
            }, t.prototype.invokeQuery = function (t, e, n, r, o, i) {
                var s = [];
                if (r && s.push(this.element), t.length > 0) {
                    t = (t = t.replace(jf, "." + this._enterClassName)).replace(Ff, "." + this._leaveClassName);
                    var a = this._driver.query(this.element, t, 1 != n);
                    0 !== n && (a = n < 0 ? a.slice(a.length + n, a.length) : a.slice(0, n)), s.push.apply(s, c(a))
                }
                return o || 0 != s.length || i.push('`query("' + e + '")` returned zero elements. (Use `query("' + e + '", { optional: true })` if you wish to allow this.)'), s
            }, t
        }(), zf = function () {
            function t(t, e, n, r) {
                this._driver = t, this.element = e, this.startTime = n, this._elementTimelineStylesLookup = r, this.duration = 0, this._previousKeyframe = {}, this._currentKeyframe = {}, this._keyframes = new Map, this._styleSummary = {}, this._pendingStyles = {}, this._backFill = {}, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._localTimelineStyles = Object.create(this._backFill, {}), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(e), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(e, this._localTimelineStyles)), this._loadKeyframe()
            }

            return t.prototype.containsAnimation = function () {
                switch (this._keyframes.size) {
                    case 0:
                        return !1;
                    case 1:
                        return this.getCurrentStyleProperties().length > 0;
                    default:
                        return !0
                }
            }, t.prototype.getCurrentStyleProperties = function () {
                return Object.keys(this._currentKeyframe)
            }, Object.defineProperty(t.prototype, "currentTime", {
                get: function () {
                    return this.startTime + this.duration
                }, enumerable: !0, configurable: !0
            }), t.prototype.delayNextStep = function (t) {
                var e = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
                this.duration || e ? (this.forwardTime(this.currentTime + t), e && this.snapshotCurrentStyles()) : this.startTime += t
            }, t.prototype.fork = function (e, n) {
                return this.applyStylesToKeyframe(), new t(this._driver, e, n || this.currentTime, this._elementTimelineStylesLookup)
            }, t.prototype._loadKeyframe = function () {
                this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}), this._keyframes.set(this.duration, this._currentKeyframe))
            }, t.prototype.forwardFrame = function () {
                this.duration += 1, this._loadKeyframe()
            }, t.prototype.forwardTime = function (t) {
                this.applyStylesToKeyframe(), this.duration = t, this._loadKeyframe()
            }, t.prototype._updateStyle = function (t, e) {
                this._localTimelineStyles[t] = e, this._globalTimelineStyles[t] = e, this._styleSummary[t] = {
                    time: this.currentTime,
                    value: e
                }
            }, t.prototype.allowOnlyTimelineStyles = function () {
                return this._currentEmptyStepKeyframe !== this._currentKeyframe
            }, t.prototype.applyEmptyStep = function (t) {
                var e = this;
                t && (this._previousKeyframe.easing = t), Object.keys(this._globalTimelineStyles).forEach(function (t) {
                    e._backFill[t] = e._globalTimelineStyles[t] || xh, e._currentKeyframe[t] = xh
                }), this._currentEmptyStepKeyframe = this._currentKeyframe
            }, t.prototype.setStyles = function (t, e, n, r) {
                var o = this;
                e && (this._previousKeyframe.easing = e);
                var i = r && r.params || {}, s = function (t, e) {
                    var n, r = {};
                    return t.forEach(function (t) {
                        "*" === t ? (n = n || Object.keys(e)).forEach(function (t) {
                            r[t] = xh
                        }) : af(t, !1, r)
                    }), r
                }(t, this._globalTimelineStyles);
                Object.keys(s).forEach(function (t) {
                    var e = yf(s[t], i, n);
                    o._pendingStyles[t] = e, o._localTimelineStyles.hasOwnProperty(t) || (o._backFill[t] = o._globalTimelineStyles.hasOwnProperty(t) ? o._globalTimelineStyles[t] : xh), o._updateStyle(t, e)
                })
            }, t.prototype.applyStylesToKeyframe = function () {
                var t = this, e = this._pendingStyles, n = Object.keys(e);
                0 != n.length && (this._pendingStyles = {}, n.forEach(function (n) {
                    t._currentKeyframe[n] = e[n]
                }), Object.keys(this._localTimelineStyles).forEach(function (e) {
                    t._currentKeyframe.hasOwnProperty(e) || (t._currentKeyframe[e] = t._localTimelineStyles[e])
                }))
            }, t.prototype.snapshotCurrentStyles = function () {
                var t = this;
                Object.keys(this._localTimelineStyles).forEach(function (e) {
                    var n = t._localTimelineStyles[e];
                    t._pendingStyles[e] = n, t._updateStyle(e, n)
                })
            }, t.prototype.getFinalKeyframe = function () {
                return this._keyframes.get(this.duration)
            }, Object.defineProperty(t.prototype, "properties", {
                get: function () {
                    var t = [];
                    for (var e in this._currentKeyframe) t.push(e);
                    return t
                }, enumerable: !0, configurable: !0
            }), t.prototype.mergeTimelineCollectedStyles = function (t) {
                var e = this;
                Object.keys(t._styleSummary).forEach(function (n) {
                    var r = e._styleSummary[n], o = t._styleSummary[n];
                    (!r || o.time > r.time) && e._updateStyle(n, o.value)
                })
            }, t.prototype.buildKeyframes = function () {
                var t = this;
                this.applyStylesToKeyframe();
                var e = new Set, n = new Set, r = 1 === this._keyframes.size && 0 === this.duration, o = [];
                this._keyframes.forEach(function (i, s) {
                    var a = af(i, !0);
                    Object.keys(a).forEach(function (t) {
                        var r = a[t];
                        r == Rh ? e.add(t) : r == xh && n.add(t)
                    }), r || (a.offset = s / t.duration), o.push(a)
                });
                var i = e.size ? vf(e.values()) : [], s = n.size ? vf(n.values()) : [];
                if (r) {
                    var a = o[0], u = sf(a);
                    a.offset = 0, u.offset = 1, o = [a, u]
                }
                return Df(this.element, o, i, s, this.duration, this.startTime, this.easing, !1)
            }, t
        }(), Bf = function (t) {
            function e(e, n, r, o, i, s, a) {
                void 0 === a && (a = !1);
                var u = t.call(this, e, n, s.delay) || this;
                return u.element = n, u.keyframes = r, u.preStyleProps = o, u.postStyleProps = i, u._stretchStartingKeyframe = a, u.timings = {
                    duration: s.duration,
                    delay: s.delay,
                    easing: s.easing
                }, u
            }

            return o(e, t), e.prototype.containsAnimation = function () {
                return this.keyframes.length > 1
            }, e.prototype.buildKeyframes = function () {
                var t = this.keyframes, e = this.timings, n = e.delay, r = e.duration, o = e.easing;
                if (this._stretchStartingKeyframe && n) {
                    var i = [], s = r + n, a = n / s, u = af(t[0], !1);
                    u.offset = 0, i.push(u);
                    var l = af(t[0], !1);
                    l.offset = qf(a), i.push(l);
                    for (var c = t.length - 1, p = 1; p <= c; p++) {
                        var h = af(t[p], !1);
                        h.offset = qf((n + h.offset * r) / s), i.push(h)
                    }
                    r = s, n = 0, o = "", t = i
                }
                return Df(this.element, t, this.preStyleProps, this.postStyleProps, r, n, o, !0)
            }, e
        }(zf);

        function qf(t, e) {
            void 0 === e && (e = 3);
            var n = Math.pow(10, e - 1);
            return Math.round(t * n) / n
        }

        var Qf = function () {
                return function () {
                }
            }(), Kf = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return o(e, t), e.prototype.normalizePropertyName = function (t, e) {
                    return gf(t)
                }, e.prototype.normalizeStyleValue = function (t, e, n, r) {
                    var o = "", i = n.toString().trim();
                    if (Wf[e] && 0 !== n && "0" !== n) if ("number" == typeof n) o = "px"; else {
                        var s = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                        s && 0 == s[1].length && r.push("Please provide a CSS unit value for " + t + ":" + n)
                    }
                    return i + o
                }, e
            }(Qf),
            Wf = Zf("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(","));

        function Zf(t) {
            var e = {};
            return t.forEach(function (t) {
                return e[t] = !0
            }), e
        }

        function Gf(t, e, n, r, o, i, s, a, u, l, c, p, h) {
            return {
                type: 0,
                element: t,
                triggerName: e,
                isRemovalTransition: o,
                fromState: n,
                fromStyles: i,
                toState: r,
                toStyles: s,
                timelines: a,
                queriedElements: u,
                preStyleProps: l,
                postStyleProps: c,
                totalTime: p,
                errors: h
            }
        }

        var Yf = {}, $f = function () {
            function t(t, e, n) {
                this._triggerName = t, this.ast = e, this._stateStyles = n
            }

            return t.prototype.match = function (t, e, n, r) {
                return function (t, e, n, r, o) {
                    return t.some(function (t) {
                        return t(e, n, r, o)
                    })
                }(this.ast.matchers, t, e, n, r)
            }, t.prototype.buildStyles = function (t, e, n) {
                var r = this._stateStyles["*"], o = this._stateStyles[t], i = r ? r.buildStyles(e, n) : {};
                return o ? o.buildStyles(e, n) : i
            }, t.prototype.build = function (t, e, n, r, o, s, a, u, l, c) {
                var p = [], h = this.ast.options && this.ast.options.params || Yf,
                    f = this.buildStyles(n, a && a.params || Yf, p), d = u && u.params || Yf,
                    y = this.buildStyles(r, d, p), v = new Set, m = new Map, g = new Map, _ = "void" === r,
                    b = {params: i({}, h, d)}, w = c ? [] : Lf(t, e, this.ast.animation, o, s, f, y, b, l, p), S = 0;
                if (w.forEach(function (t) {
                    S = Math.max(t.duration + t.delay, S)
                }), p.length) return Gf(e, this._triggerName, n, r, _, f, y, [], [], m, g, S, p);
                w.forEach(function (t) {
                    var n = t.element, r = Lh(m, n, {});
                    t.preStyleProps.forEach(function (t) {
                        return r[t] = !0
                    });
                    var o = Lh(g, n, {});
                    t.postStyleProps.forEach(function (t) {
                        return o[t] = !0
                    }), n !== e && v.add(n)
                });
                var E = vf(v.values());
                return Gf(e, this._triggerName, n, r, _, f, y, w, E, m, g, S)
            }, t
        }(), Jf = function () {
            function t(t, e) {
                this.styles = t, this.defaultParams = e
            }

            return t.prototype.buildStyles = function (t, e) {
                var n = {}, r = sf(this.defaultParams);
                return Object.keys(t).forEach(function (e) {
                    var n = t[e];
                    null != n && (r[e] = n)
                }), this.styles.styles.forEach(function (t) {
                    if ("string" != typeof t) {
                        var o = t;
                        Object.keys(o).forEach(function (t) {
                            var i = o[t];
                            i.length > 1 && (i = yf(i, r, e)), n[t] = i
                        })
                    }
                }), n
            }, t
        }(), Xf = function () {
            function t(t, e) {
                var n = this;
                this.name = t, this.ast = e, this.transitionFactories = [], this.states = {}, e.states.forEach(function (t) {
                    n.states[t.name] = new Jf(t.style, t.options && t.options.params || {})
                }), td(this.states, "true", "1"), td(this.states, "false", "0"), e.transitions.forEach(function (e) {
                    n.transitionFactories.push(new $f(t, e, n.states))
                }), this.fallbackTransition = new $f(t, {
                    type: 1,
                    animation: {type: 2, steps: [], options: null},
                    matchers: [function (t, e) {
                        return !0
                    }],
                    options: null,
                    queryCount: 0,
                    depCount: 0
                }, this.states)
            }

            return Object.defineProperty(t.prototype, "containsQueries", {
                get: function () {
                    return this.ast.queryCount > 0
                }, enumerable: !0, configurable: !0
            }), t.prototype.matchTransition = function (t, e, n, r) {
                return this.transitionFactories.find(function (o) {
                    return o.match(t, e, n, r)
                }) || null
            }, t.prototype.matchStyles = function (t, e, n) {
                return this.fallbackTransition.buildStyles(t, e, n)
            }, t
        }();

        function td(t, e, n) {
            t.hasOwnProperty(e) ? t.hasOwnProperty(n) || (t[n] = t[e]) : t.hasOwnProperty(n) && (t[e] = t[n])
        }

        var ed = new Mf, nd = function () {
                function t(t, e, n) {
                    this.bodyNode = t, this._driver = e, this._normalizer = n, this._animations = {}, this._playersById = {}, this.players = []
                }

                return t.prototype.register = function (t, e) {
                    var n = [], r = Pf(this._driver, e, n);
                    if (n.length) throw new Error("Unable to build the animation due to the following errors: " + n.join("\n"));
                    this._animations[t] = r
                }, t.prototype._buildPlayer = function (t, e, n) {
                    var r = t.element, o = Dh(0, this._normalizer, 0, t.keyframes, e, n);
                    return this._driver.animate(r, o, t.duration, t.delay, t.easing, [], !0)
                }, t.prototype.create = function (t, e, n) {
                    var r = this;
                    void 0 === n && (n = {});
                    var o, i = [], s = this._animations[t], a = new Map;
                    if (s ? (o = Lf(this._driver, e, s, "ng-enter", "ng-leave", {}, {}, n, ed, i)).forEach(function (t) {
                        var e = Lh(a, t.element, {});
                        t.postStyleProps.forEach(function (t) {
                            return e[t] = null
                        })
                    }) : (i.push("The requested animation doesn't exist or has already been destroyed"), o = []), i.length) throw new Error("Unable to create the animation due to the following errors: " + i.join("\n"));
                    a.forEach(function (t, e) {
                        Object.keys(t).forEach(function (n) {
                            t[n] = r._driver.computeStyle(e, n, xh)
                        })
                    });
                    var u = Oh(o.map(function (t) {
                        var e = a.get(t.element);
                        return r._buildPlayer(t, {}, e)
                    }));
                    return this._playersById[t] = u, u.onDestroy(function () {
                        return r.destroy(t)
                    }), this.players.push(u), u
                }, t.prototype.destroy = function (t) {
                    var e = this._getPlayer(t);
                    e.destroy(), delete this._playersById[t];
                    var n = this.players.indexOf(e);
                    n >= 0 && this.players.splice(n, 1)
                }, t.prototype._getPlayer = function (t) {
                    var e = this._playersById[t];
                    if (!e) throw new Error("Unable to find the timeline player referenced by " + t);
                    return e
                }, t.prototype.listen = function (t, e, n, r) {
                    var o = Fh(e, "", "", "");
                    return Mh(this._getPlayer(t), n, o, r), function () {
                    }
                }, t.prototype.command = function (t, e, n, r) {
                    if ("register" != n) if ("create" != n) {
                        var o = this._getPlayer(t);
                        switch (n) {
                            case"play":
                                o.play();
                                break;
                            case"pause":
                                o.pause();
                                break;
                            case"reset":
                                o.reset();
                                break;
                            case"restart":
                                o.restart();
                                break;
                            case"finish":
                                o.finish();
                                break;
                            case"init":
                                o.init();
                                break;
                            case"setPosition":
                                o.setPosition(parseFloat(r[0]));
                                break;
                            case"destroy":
                                this.destroy(t)
                        }
                    } else this.create(t, e, r[0] || {}); else this.register(t, r[0])
                }, t
            }(), rd = [],
            od = {namespaceId: "", setForRemoval: !1, setForMove: !1, hasAnimation: !1, removedBeforeQueried: !1},
            id = {namespaceId: "", setForMove: !1, setForRemoval: !1, hasAnimation: !1, removedBeforeQueried: !0},
            sd = "__ng_removed", ad = function () {
                function t(t, e) {
                    void 0 === e && (e = ""), this.namespaceId = e;
                    var n = t && t.hasOwnProperty("value");
                    if (this.value = function (t) {
                        return null != t ? t : null
                    }(n ? t.value : t), n) {
                        var r = sf(t);
                        delete r.value, this.options = r
                    } else this.options = {};
                    this.options.params || (this.options.params = {})
                }

                return Object.defineProperty(t.prototype, "params", {
                    get: function () {
                        return this.options.params
                    }, enumerable: !0, configurable: !0
                }), t.prototype.absorbOptions = function (t) {
                    var e = t.params;
                    if (e) {
                        var n = this.options.params;
                        Object.keys(e).forEach(function (t) {
                            null == n[t] && (n[t] = e[t])
                        })
                    }
                }, t
            }(), ud = new ad("void"), ld = function () {
                function t(t, e, n) {
                    this.id = t, this.hostElement = e, this._engine = n, this.players = [], this._triggers = {}, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + t, md(e, this._hostClassName)
                }

                return t.prototype.listen = function (t, e, n, r) {
                    var o, i = this;
                    if (!this._triggers.hasOwnProperty(e)) throw new Error('Unable to listen on the animation trigger event "' + n + '" because the animation trigger "' + e + "\" doesn't exist!");
                    if (null == n || 0 == n.length) throw new Error('Unable to listen on the animation trigger "' + e + '" because the provided event is undefined!');
                    if ("start" != (o = n) && "done" != o) throw new Error('The provided animation trigger event "' + n + '" for the animation trigger "' + e + '" is not supported!');
                    var s = Lh(this._elementListeners, t, []), a = {name: e, phase: n, callback: r};
                    s.push(a);
                    var u = Lh(this._engine.statesByElement, t, {});
                    return u.hasOwnProperty(e) || (md(t, "ng-trigger"), md(t, "ng-trigger-" + e), u[e] = ud), function () {
                        i._engine.afterFlush(function () {
                            var t = s.indexOf(a);
                            t >= 0 && s.splice(t, 1), i._triggers[e] || delete u[e]
                        })
                    }
                }, t.prototype.register = function (t, e) {
                    return !this._triggers[t] && (this._triggers[t] = e, !0)
                }, t.prototype._getTrigger = function (t) {
                    var e = this._triggers[t];
                    if (!e) throw new Error('The provided animation trigger "' + t + '" has not been registered!');
                    return e
                }, t.prototype.trigger = function (t, e, n, r) {
                    var o = this;
                    void 0 === r && (r = !0);
                    var i = this._getTrigger(e), s = new pd(this.id, e, t), a = this._engine.statesByElement.get(t);
                    a || (md(t, "ng-trigger"), md(t, "ng-trigger-" + e), this._engine.statesByElement.set(t, a = {}));
                    var u = a[e], l = new ad(n, this.id);
                    if (!(n && n.hasOwnProperty("value")) && u && l.absorbOptions(u.options), a[e] = l, u || (u = ud), "void" === l.value || u.value !== l.value) {
                        var c = Lh(this._engine.playersByElement, t, []);
                        c.forEach(function (t) {
                            t.namespaceId == o.id && t.triggerName == e && t.queued && t.destroy()
                        });
                        var p = i.matchTransition(u.value, l.value, t, l.params), h = !1;
                        if (!p) {
                            if (!r) return;
                            p = i.fallbackTransition, h = !0
                        }
                        return this._engine.totalQueuedPlayers++, this._queue.push({
                            element: t,
                            triggerName: e,
                            transition: p,
                            fromState: u,
                            toState: l,
                            player: s,
                            isFallbackTransition: h
                        }), h || (md(t, "ng-animate-queued"), s.onStart(function () {
                            gd(t, "ng-animate-queued")
                        })), s.onDone(function () {
                            var e = o.players.indexOf(s);
                            e >= 0 && o.players.splice(e, 1);
                            var n = o._engine.playersByElement.get(t);
                            if (n) {
                                var r = n.indexOf(s);
                                r >= 0 && n.splice(r, 1)
                            }
                        }), this.players.push(s), c.push(s), s
                    }
                    if (!function (t, e) {
                        var n = Object.keys(t), r = Object.keys(e);
                        if (n.length != r.length) return !1;
                        for (var o = 0; o < n.length; o++) {
                            var i = n[o];
                            if (!e.hasOwnProperty(i) || t[i] !== e[i]) return !1
                        }
                        return !0
                    }(u.params, l.params)) {
                        var f = [], d = i.matchStyles(u.value, u.params, f), y = i.matchStyles(l.value, l.params, f);
                        f.length ? this._engine.reportError(f) : this._engine.afterFlush(function () {
                            pf(t, d), cf(t, y)
                        })
                    }
                }, t.prototype.deregister = function (t) {
                    var e = this;
                    delete this._triggers[t], this._engine.statesByElement.forEach(function (e, n) {
                        delete e[t]
                    }), this._elementListeners.forEach(function (n, r) {
                        e._elementListeners.set(r, n.filter(function (e) {
                            return e.name != t
                        }))
                    })
                }, t.prototype.clearElementCache = function (t) {
                    this._engine.statesByElement.delete(t), this._elementListeners.delete(t);
                    var e = this._engine.playersByElement.get(t);
                    e && (e.forEach(function (t) {
                        return t.destroy()
                    }), this._engine.playersByElement.delete(t))
                }, t.prototype._signalRemovalForInnerTriggers = function (t, e, n) {
                    var r = this;
                    void 0 === n && (n = !1), this._engine.driver.query(t, ".ng-trigger", !0).forEach(function (t) {
                        if (!t[sd]) {
                            var n = r._engine.fetchNamespacesByElement(t);
                            n.size ? n.forEach(function (n) {
                                return n.triggerLeaveAnimation(t, e, !1, !0)
                            }) : r.clearElementCache(t)
                        }
                    })
                }, t.prototype.triggerLeaveAnimation = function (t, e, n, r) {
                    var o = this, i = this._engine.statesByElement.get(t);
                    if (i) {
                        var s = [];
                        if (Object.keys(i).forEach(function (e) {
                            if (o._triggers[e]) {
                                var n = o.trigger(t, e, "void", r);
                                n && s.push(n)
                            }
                        }), s.length) return this._engine.markElementAsRemoved(this.id, t, !0, e), n && Oh(s).onDone(function () {
                            return o._engine.processLeaveNode(t)
                        }), !0
                    }
                    return !1
                }, t.prototype.prepareLeaveAnimationListeners = function (t) {
                    var e = this, n = this._elementListeners.get(t);
                    if (n) {
                        var r = new Set;
                        n.forEach(function (n) {
                            var o = n.name;
                            if (!r.has(o)) {
                                r.add(o);
                                var i = e._triggers[o].fallbackTransition, s = e._engine.statesByElement.get(t)[o] || ud,
                                    a = new ad("void"), u = new pd(e.id, o, t);
                                e._engine.totalQueuedPlayers++, e._queue.push({
                                    element: t,
                                    triggerName: o,
                                    transition: i,
                                    fromState: s,
                                    toState: a,
                                    player: u,
                                    isFallbackTransition: !0
                                })
                            }
                        })
                    }
                }, t.prototype.removeNode = function (t, e) {
                    var n = this, r = this._engine;
                    if (t.childElementCount && this._signalRemovalForInnerTriggers(t, e, !0), !this.triggerLeaveAnimation(t, e, !0)) {
                        var o = !1;
                        if (r.totalAnimations) {
                            var i = r.players.length ? r.playersByQueriedElement.get(t) : [];
                            if (i && i.length) o = !0; else for (var s = t; s = s.parentNode;) if (r.statesByElement.get(s)) {
                                o = !0;
                                break
                            }
                        }
                        this.prepareLeaveAnimationListeners(t), o ? r.markElementAsRemoved(this.id, t, !1, e) : (r.afterFlush(function () {
                            return n.clearElementCache(t)
                        }), r.destroyInnerAnimations(t), r._onRemovalComplete(t, e))
                    }
                }, t.prototype.insertNode = function (t, e) {
                    md(t, this._hostClassName)
                }, t.prototype.drainQueuedTransitions = function (t) {
                    var e = this, n = [];
                    return this._queue.forEach(function (r) {
                        var o = r.player;
                        if (!o.destroyed) {
                            var i = r.element, s = e._elementListeners.get(i);
                            s && s.forEach(function (e) {
                                if (e.name == r.triggerName) {
                                    var n = Fh(i, r.triggerName, r.fromState.value, r.toState.value);
                                    n._data = t, Mh(r.player, e.phase, n, e.callback)
                                }
                            }), o.markedForDestroy ? e._engine.afterFlush(function () {
                                o.destroy()
                            }) : n.push(r)
                        }
                    }), this._queue = [], n.sort(function (t, n) {
                        var r = t.transition.ast.depCount, o = n.transition.ast.depCount;
                        return 0 == r || 0 == o ? r - o : e._engine.driver.containsElement(t.element, n.element) ? 1 : -1
                    })
                }, t.prototype.destroy = function (t) {
                    this.players.forEach(function (t) {
                        return t.destroy()
                    }), this._signalRemovalForInnerTriggers(this.hostElement, t)
                }, t.prototype.elementContainsData = function (t) {
                    var e = !1;
                    return this._elementListeners.has(t) && (e = !0), !!this._queue.find(function (e) {
                        return e.element === t
                    }) || e
                }, t
            }(), cd = function () {
                function t(t, e, n) {
                    this.bodyNode = t, this.driver = e, this._normalizer = n, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = function (t, e) {
                    }
                }

                return t.prototype._onRemovalComplete = function (t, e) {
                    this.onRemovalComplete(t, e)
                }, Object.defineProperty(t.prototype, "queuedPlayers", {
                    get: function () {
                        var t = [];
                        return this._namespaceList.forEach(function (e) {
                            e.players.forEach(function (e) {
                                e.queued && t.push(e)
                            })
                        }), t
                    }, enumerable: !0, configurable: !0
                }), t.prototype.createNamespace = function (t, e) {
                    var n = new ld(t, e, this);
                    return e.parentNode ? this._balanceNamespaceList(n, e) : (this.newHostElements.set(e, n), this.collectEnterElement(e)), this._namespaceLookup[t] = n
                }, t.prototype._balanceNamespaceList = function (t, e) {
                    var n = this._namespaceList.length - 1;
                    if (n >= 0) {
                        for (var r = !1, o = n; o >= 0; o--) if (this.driver.containsElement(this._namespaceList[o].hostElement, e)) {
                            this._namespaceList.splice(o + 1, 0, t), r = !0;
                            break
                        }
                        r || this._namespaceList.splice(0, 0, t)
                    } else this._namespaceList.push(t);
                    return this.namespacesByHostElement.set(e, t), t
                }, t.prototype.register = function (t, e) {
                    var n = this._namespaceLookup[t];
                    return n || (n = this.createNamespace(t, e)), n
                }, t.prototype.registerTrigger = function (t, e, n) {
                    var r = this._namespaceLookup[t];
                    r && r.register(e, n) && this.totalAnimations++
                }, t.prototype.destroy = function (t, e) {
                    var n = this;
                    if (t) {
                        var r = this._fetchNamespace(t);
                        this.afterFlush(function () {
                            n.namespacesByHostElement.delete(r.hostElement), delete n._namespaceLookup[t];
                            var e = n._namespaceList.indexOf(r);
                            e >= 0 && n._namespaceList.splice(e, 1)
                        }), this.afterFlushAnimationsDone(function () {
                            return r.destroy(e)
                        })
                    }
                }, t.prototype._fetchNamespace = function (t) {
                    return this._namespaceLookup[t]
                }, t.prototype.fetchNamespacesByElement = function (t) {
                    var e = new Set, n = this.statesByElement.get(t);
                    if (n) for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                        var i = n[r[o]].namespaceId;
                        if (i) {
                            var s = this._fetchNamespace(i);
                            s && e.add(s)
                        }
                    }
                    return e
                }, t.prototype.trigger = function (t, e, n, r) {
                    if (hd(e)) {
                        var o = this._fetchNamespace(t);
                        if (o) return o.trigger(e, n, r), !0
                    }
                    return !1
                }, t.prototype.insertNode = function (t, e, n, r) {
                    if (hd(e)) {
                        var o = e[sd];
                        if (o && o.setForRemoval) {
                            o.setForRemoval = !1, o.setForMove = !0;
                            var i = this.collectedLeaveElements.indexOf(e);
                            i >= 0 && this.collectedLeaveElements.splice(i, 1)
                        }
                        if (t) {
                            var s = this._fetchNamespace(t);
                            s && s.insertNode(e, n)
                        }
                        r && this.collectEnterElement(e)
                    }
                }, t.prototype.collectEnterElement = function (t) {
                    this.collectedEnterElements.push(t)
                }, t.prototype.markElementAsDisabled = function (t, e) {
                    e ? this.disabledNodes.has(t) || (this.disabledNodes.add(t), md(t, "ng-animate-disabled")) : this.disabledNodes.has(t) && (this.disabledNodes.delete(t), gd(t, "ng-animate-disabled"))
                }, t.prototype.removeNode = function (t, e, n) {
                    if (hd(e)) {
                        var r = t ? this._fetchNamespace(t) : null;
                        r ? r.removeNode(e, n) : this.markElementAsRemoved(t, e, !1, n)
                    } else this._onRemovalComplete(e, n)
                }, t.prototype.markElementAsRemoved = function (t, e, n, r) {
                    this.collectedLeaveElements.push(e), e[sd] = {
                        namespaceId: t,
                        setForRemoval: r,
                        hasAnimation: n,
                        removedBeforeQueried: !1
                    }
                }, t.prototype.listen = function (t, e, n, r, o) {
                    return hd(e) ? this._fetchNamespace(t).listen(e, n, r, o) : function () {
                    }
                }, t.prototype._buildInstruction = function (t, e, n, r, o) {
                    return t.transition.build(this.driver, t.element, t.fromState.value, t.toState.value, n, r, t.fromState.options, t.toState.options, e, o)
                }, t.prototype.destroyInnerAnimations = function (t) {
                    var e = this, n = this.driver.query(t, ".ng-trigger", !0);
                    n.forEach(function (t) {
                        return e.destroyActiveAnimationsForElement(t)
                    }), 0 != this.playersByQueriedElement.size && (n = this.driver.query(t, ".ng-animating", !0)).forEach(function (t) {
                        return e.finishActiveQueriedAnimationOnElement(t)
                    })
                }, t.prototype.destroyActiveAnimationsForElement = function (t) {
                    var e = this.playersByElement.get(t);
                    e && e.forEach(function (t) {
                        t.queued ? t.markedForDestroy = !0 : t.destroy()
                    })
                }, t.prototype.finishActiveQueriedAnimationOnElement = function (t) {
                    var e = this.playersByQueriedElement.get(t);
                    e && e.forEach(function (t) {
                        return t.finish()
                    })
                }, t.prototype.whenRenderingDone = function () {
                    var t = this;
                    return new Promise(function (e) {
                        if (t.players.length) return Oh(t.players).onDone(function () {
                            return e()
                        });
                        e()
                    })
                }, t.prototype.processLeaveNode = function (t) {
                    var e = this, n = t[sd];
                    if (n && n.setForRemoval) {
                        if (t[sd] = od, n.namespaceId) {
                            this.destroyInnerAnimations(t);
                            var r = this._fetchNamespace(n.namespaceId);
                            r && r.clearElementCache(t)
                        }
                        this._onRemovalComplete(t, n.setForRemoval)
                    }
                    this.driver.matchesElement(t, ".ng-animate-disabled") && this.markElementAsDisabled(t, !1), this.driver.query(t, ".ng-animate-disabled", !0).forEach(function (t) {
                        e.markElementAsDisabled(t, !1)
                    })
                }, t.prototype.flush = function (t) {
                    var e = this;
                    void 0 === t && (t = -1);
                    var n = [];
                    if (this.newHostElements.size && (this.newHostElements.forEach(function (t, n) {
                        return e._balanceNamespaceList(t, n)
                    }), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length) for (var r = 0; r < this.collectedEnterElements.length; r++) md(this.collectedEnterElements[r], "ng-star-inserted");
                    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                        var o = [];
                        try {
                            n = this._flushAnimations(o, t)
                        } finally {
                            for (r = 0; r < o.length; r++) o[r]()
                        }
                    } else for (r = 0; r < this.collectedLeaveElements.length; r++) this.processLeaveNode(this.collectedLeaveElements[r]);
                    if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(function (t) {
                        return t()
                    }), this._flushFns = [], this._whenQuietFns.length) {
                        var i = this._whenQuietFns;
                        this._whenQuietFns = [], n.length ? Oh(n).onDone(function () {
                            i.forEach(function (t) {
                                return t()
                            })
                        }) : i.forEach(function (t) {
                            return t()
                        })
                    }
                }, t.prototype.reportError = function (t) {
                    throw new Error("Unable to process animations due to the following failed trigger transitions\n " + t.join("\n"))
                }, t.prototype._flushAnimations = function (t, e) {
                    var n = this, r = new Mf, o = [], s = new Map, a = [], u = new Map, l = new Map, p = new Map,
                        h = new Set;
                    this.disabledNodes.forEach(function (t) {
                        h.add(t);
                        for (var e = n.driver.query(t, ".ng-animate-queued", !0), r = 0; r < e.length; r++) h.add(e[r])
                    });
                    var f = this.bodyNode, d = Array.from(this.statesByElement.keys()),
                        y = yd(d, this.collectedEnterElements), v = new Map, m = 0;
                    y.forEach(function (t, e) {
                        var n = "ng-enter" + m++;
                        v.set(e, n), t.forEach(function (t) {
                            return md(t, n)
                        })
                    });
                    for (var g = [], _ = new Set, b = new Set, w = 0; w < this.collectedLeaveElements.length; w++) (L = (F = this.collectedLeaveElements[w])[sd]) && L.setForRemoval && (g.push(F), _.add(F), L.hasAnimation ? this.driver.query(F, ".ng-star-inserted", !0).forEach(function (t) {
                        return _.add(t)
                    }) : b.add(F));
                    var S = new Map, E = yd(d, Array.from(_));
                    E.forEach(function (t, e) {
                        var n = "ng-leave" + m++;
                        S.set(e, n), t.forEach(function (t) {
                            return md(t, n)
                        })
                    }), t.push(function () {
                        y.forEach(function (t, e) {
                            var n = v.get(e);
                            t.forEach(function (t) {
                                return gd(t, n)
                            })
                        }), E.forEach(function (t, e) {
                            var n = S.get(e);
                            t.forEach(function (t) {
                                return gd(t, n)
                            })
                        }), g.forEach(function (t) {
                            n.processLeaveNode(t)
                        })
                    });
                    for (var C = [], x = [], T = this._namespaceList.length - 1; T >= 0; T--) this._namespaceList[T].drainQueuedTransitions(e).forEach(function (t) {
                        var e = t.player, i = t.element;
                        if (C.push(e), n.collectedEnterElements.length) {
                            var s = i[sd];
                            if (s && s.setForMove) return void e.destroy()
                        }
                        var c = !f || !n.driver.containsElement(f, i), h = S.get(i), d = v.get(i),
                            y = n._buildInstruction(t, r, d, h, c);
                        if (y.errors && y.errors.length) x.push(y); else {
                            if (c) return e.onStart(function () {
                                return pf(i, y.fromStyles)
                            }), e.onDestroy(function () {
                                return cf(i, y.toStyles)
                            }), void o.push(e);
                            if (t.isFallbackTransition) return e.onStart(function () {
                                return pf(i, y.fromStyles)
                            }), e.onDestroy(function () {
                                return cf(i, y.toStyles)
                            }), void o.push(e);
                            y.timelines.forEach(function (t) {
                                return t.stretchStartingKeyframe = !0
                            }), r.append(i, y.timelines), a.push({
                                instruction: y,
                                player: e,
                                element: i
                            }), y.queriedElements.forEach(function (t) {
                                return Lh(u, t, []).push(e)
                            }), y.preStyleProps.forEach(function (t, e) {
                                var n = Object.keys(t);
                                if (n.length) {
                                    var r = l.get(e);
                                    r || l.set(e, r = new Set), n.forEach(function (t) {
                                        return r.add(t)
                                    })
                                }
                            }), y.postStyleProps.forEach(function (t, e) {
                                var n = Object.keys(t), r = p.get(e);
                                r || p.set(e, r = new Set), n.forEach(function (t) {
                                    return r.add(t)
                                })
                            })
                        }
                    });
                    if (x.length) {
                        var k = [];
                        x.forEach(function (t) {
                            k.push("@" + t.triggerName + " has failed due to:\n"), t.errors.forEach(function (t) {
                                return k.push("- " + t + "\n")
                            })
                        }), C.forEach(function (t) {
                            return t.destroy()
                        }), this.reportError(k)
                    }
                    var P = new Map, A = new Map;
                    a.forEach(function (t) {
                        var e = t.element;
                        r.has(e) && (A.set(e, e), n._beforeAnimationBuild(t.player.namespaceId, t.instruction, P))
                    }), o.forEach(function (t) {
                        var e = t.element;
                        n._getPreviousPlayers(e, !1, t.namespaceId, t.triggerName, null).forEach(function (t) {
                            Lh(P, e, []).push(t), t.destroy()
                        })
                    });
                    var N = g.filter(function (t) {
                        return bd(t, l, p)
                    }), R = new Map;
                    dd(R, this.driver, b, p, xh).forEach(function (t) {
                        bd(t, l, p) && N.push(t)
                    });
                    var I = new Map;
                    y.forEach(function (t, e) {
                        dd(I, n.driver, new Set(t), l, Rh)
                    }), N.forEach(function (t) {
                        var e = R.get(t), n = I.get(t);
                        R.set(t, i({}, e, n))
                    });
                    var O = [], D = [], M = {};
                    a.forEach(function (t) {
                        var e = t.element, i = t.player, a = t.instruction;
                        if (r.has(e)) {
                            if (h.has(e)) return i.onDestroy(function () {
                                return cf(e, a.toStyles)
                            }), i.disabled = !0, i.overrideTotalTime(a.totalTime), void o.push(i);
                            var u = M;
                            if (A.size > 1) {
                                for (var l = e, c = []; l = l.parentNode;) {
                                    var p = A.get(l);
                                    if (p) {
                                        u = p;
                                        break
                                    }
                                    c.push(l)
                                }
                                c.forEach(function (t) {
                                    return A.set(t, u)
                                })
                            }
                            var f = n._buildAnimation(i.namespaceId, a, P, s, I, R);
                            if (i.setRealPlayer(f), u === M) O.push(i); else {
                                var d = n.playersByElement.get(u);
                                d && d.length && (i.parentPlayer = Oh(d)), o.push(i)
                            }
                        } else pf(e, a.fromStyles), i.onDestroy(function () {
                            return cf(e, a.toStyles)
                        }), D.push(i), h.has(e) && o.push(i)
                    }), D.forEach(function (t) {
                        var e = s.get(t.element);
                        if (e && e.length) {
                            var n = Oh(e);
                            t.setRealPlayer(n)
                        }
                    }), o.forEach(function (t) {
                        t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy()
                    });
                    for (var j = 0; j < g.length; j++) {
                        var F, L = (F = g[j])[sd];
                        if (gd(F, "ng-leave"), !L || !L.hasAnimation) {
                            var U = [];
                            if (u.size) {
                                var V = u.get(F);
                                V && V.length && U.push.apply(U, c(V));
                                for (var H = this.driver.query(F, ".ng-animating", !0), z = 0; z < H.length; z++) {
                                    var B = u.get(H[z]);
                                    B && B.length && U.push.apply(U, c(B))
                                }
                            }
                            var q = U.filter(function (t) {
                                return !t.destroyed
                            });
                            q.length ? _d(this, F, q) : this.processLeaveNode(F)
                        }
                    }
                    return g.length = 0, O.forEach(function (t) {
                        n.players.push(t), t.onDone(function () {
                            t.destroy();
                            var e = n.players.indexOf(t);
                            n.players.splice(e, 1)
                        }), t.play()
                    }), O
                }, t.prototype.elementContainsData = function (t, e) {
                    var n = !1, r = e[sd];
                    return r && r.setForRemoval && (n = !0), this.playersByElement.has(e) && (n = !0), this.playersByQueriedElement.has(e) && (n = !0), this.statesByElement.has(e) && (n = !0), this._fetchNamespace(t).elementContainsData(e) || n
                }, t.prototype.afterFlush = function (t) {
                    this._flushFns.push(t)
                }, t.prototype.afterFlushAnimationsDone = function (t) {
                    this._whenQuietFns.push(t)
                }, t.prototype._getPreviousPlayers = function (t, e, n, r, o) {
                    var i = [];
                    if (e) {
                        var s = this.playersByQueriedElement.get(t);
                        s && (i = s)
                    } else {
                        var a = this.playersByElement.get(t);
                        if (a) {
                            var u = !o || "void" == o;
                            a.forEach(function (t) {
                                t.queued || (u || t.triggerName == r) && i.push(t)
                            })
                        }
                    }
                    return (n || r) && (i = i.filter(function (t) {
                        return !(n && n != t.namespaceId || r && r != t.triggerName)
                    })), i
                }, t.prototype._beforeAnimationBuild = function (t, e, n) {
                    var r, o, i = e.element, s = e.isRemovalTransition ? void 0 : t,
                        a = e.isRemovalTransition ? void 0 : e.triggerName, l = function (t) {
                            var r = t.element, o = r !== i, u = Lh(n, r, []);
                            c._getPreviousPlayers(r, o, s, a, e.toState).forEach(function (t) {
                                var e = t.getRealPlayer();
                                e.beforeDestroy && e.beforeDestroy(), t.destroy(), u.push(t)
                            })
                        }, c = this;
                    try {
                        for (var p = u(e.timelines), h = p.next(); !h.done; h = p.next()) l(h.value)
                    } catch (f) {
                        r = {error: f}
                    } finally {
                        try {
                            h && !h.done && (o = p.return) && o.call(p)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    pf(i, e.fromStyles)
                }, t.prototype._buildAnimation = function (t, e, n, r, o, i) {
                    var s = this, a = e.triggerName, u = e.element, l = [], c = new Set, p = new Set,
                        h = e.timelines.map(function (e) {
                            var h = e.element;
                            c.add(h);
                            var f = h[sd];
                            if (f && f.removedBeforeQueried) return new Ah(e.duration, e.delay);
                            var d, y, v = h !== u, m = (d = (n.get(h) || rd).map(function (t) {
                                    return t.getRealPlayer()
                                }), y = [], function t(e, n) {
                                    for (var r = 0; r < e.length; r++) {
                                        var o = e[r];
                                        o instanceof Nh ? t(o.players, n) : n.push(o)
                                    }
                                }(d, y), y).filter(function (t) {
                                    return !!t.element && t.element === h
                                }), g = o.get(h), _ = i.get(h), b = Dh(0, s._normalizer, 0, e.keyframes, g, _),
                                w = s._buildPlayer(e, b, m);
                            if (e.subTimeline && r && p.add(h), v) {
                                var S = new pd(t, a, h);
                                S.setRealPlayer(w), l.push(S)
                            }
                            return w
                        });
                    l.forEach(function (t) {
                        Lh(s.playersByQueriedElement, t.element, []).push(t), t.onDone(function () {
                            return function (t, e, n) {
                                var r;
                                if (t instanceof Map) {
                                    if (r = t.get(e)) {
                                        if (r.length) {
                                            var o = r.indexOf(n);
                                            r.splice(o, 1)
                                        }
                                        0 == r.length && t.delete(e)
                                    }
                                } else (r = t[e]) && (r.length && (o = r.indexOf(n), r.splice(o, 1)), 0 == r.length && delete t[e]);
                                return r
                            }(s.playersByQueriedElement, t.element, t)
                        })
                    }), c.forEach(function (t) {
                        return md(t, "ng-animating")
                    });
                    var f = Oh(h);
                    return f.onDestroy(function () {
                        c.forEach(function (t) {
                            return gd(t, "ng-animating")
                        }), cf(u, e.toStyles)
                    }), p.forEach(function (t) {
                        Lh(r, t, []).push(f)
                    }), f
                }, t.prototype._buildPlayer = function (t, e, n) {
                    return e.length > 0 ? this.driver.animate(t.element, e, t.duration, t.delay, t.easing, n) : new Ah(t.duration, t.delay)
                }, t
            }(), pd = function () {
                function t(t, e, n) {
                    this.namespaceId = t, this.triggerName = e, this.element = n, this._player = new Ah, this._containsRealPlayer = !1, this._queuedCallbacks = {}, this.destroyed = !1, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0
                }

                return t.prototype.setRealPlayer = function (t) {
                    var e = this;
                    this._containsRealPlayer || (this._player = t, Object.keys(this._queuedCallbacks).forEach(function (n) {
                        e._queuedCallbacks[n].forEach(function (e) {
                            return Mh(t, n, void 0, e)
                        })
                    }), this._queuedCallbacks = {}, this._containsRealPlayer = !0, this.overrideTotalTime(t.totalTime), this.queued = !1)
                }, t.prototype.getRealPlayer = function () {
                    return this._player
                }, t.prototype.overrideTotalTime = function (t) {
                    this.totalTime = t
                }, t.prototype.syncPlayerEvents = function (t) {
                    var e = this, n = this._player;
                    n.triggerCallback && t.onStart(function () {
                        return n.triggerCallback("start")
                    }), t.onDone(function () {
                        return e.finish()
                    }), t.onDestroy(function () {
                        return e.destroy()
                    })
                }, t.prototype._queueEvent = function (t, e) {
                    Lh(this._queuedCallbacks, t, []).push(e)
                }, t.prototype.onDone = function (t) {
                    this.queued && this._queueEvent("done", t), this._player.onDone(t)
                }, t.prototype.onStart = function (t) {
                    this.queued && this._queueEvent("start", t), this._player.onStart(t)
                }, t.prototype.onDestroy = function (t) {
                    this.queued && this._queueEvent("destroy", t), this._player.onDestroy(t)
                }, t.prototype.init = function () {
                    this._player.init()
                }, t.prototype.hasStarted = function () {
                    return !this.queued && this._player.hasStarted()
                }, t.prototype.play = function () {
                    !this.queued && this._player.play()
                }, t.prototype.pause = function () {
                    !this.queued && this._player.pause()
                }, t.prototype.restart = function () {
                    !this.queued && this._player.restart()
                }, t.prototype.finish = function () {
                    this._player.finish()
                }, t.prototype.destroy = function () {
                    this.destroyed = !0, this._player.destroy()
                }, t.prototype.reset = function () {
                    !this.queued && this._player.reset()
                }, t.prototype.setPosition = function (t) {
                    this.queued || this._player.setPosition(t)
                }, t.prototype.getPosition = function () {
                    return this.queued ? 0 : this._player.getPosition()
                }, t.prototype.triggerCallback = function (t) {
                    var e = this._player;
                    e.triggerCallback && e.triggerCallback(t)
                }, t
            }();

        function hd(t) {
            return t && 1 === t.nodeType
        }

        function fd(t, e) {
            var n = t.style.display;
            return t.style.display = null != e ? e : "none", n
        }

        function dd(t, e, n, r, o) {
            var i = [];
            n.forEach(function (t) {
                return i.push(fd(t))
            });
            var s = [];
            r.forEach(function (n, r) {
                var i = {};
                n.forEach(function (t) {
                    var n = i[t] = e.computeStyle(r, t, o);
                    n && 0 != n.length || (r[sd] = id, s.push(r))
                }), t.set(r, i)
            });
            var a = 0;
            return n.forEach(function (t) {
                return fd(t, i[a++])
            }), s
        }

        function yd(t, e) {
            var n = new Map;
            if (t.forEach(function (t) {
                return n.set(t, [])
            }), 0 == e.length) return n;
            var r = new Set(e), o = new Map;
            return e.forEach(function (t) {
                var e = function t(e) {
                    if (!e) return 1;
                    var i = o.get(e);
                    if (i) return i;
                    var s = e.parentNode;
                    return i = n.has(s) ? s : r.has(s) ? 1 : t(s), o.set(e, i), i
                }(t);
                1 !== e && n.get(e).push(t)
            }), n
        }

        var vd = "$$classes";

        function md(t, e) {
            if (t.classList) t.classList.add(e); else {
                var n = t[vd];
                n || (n = t[vd] = {}), n[e] = !0
            }
        }

        function gd(t, e) {
            if (t.classList) t.classList.remove(e); else {
                var n = t[vd];
                n && delete n[e]
            }
        }

        function _d(t, e, n) {
            Oh(n).onDone(function () {
                return t.processLeaveNode(e)
            })
        }

        function bd(t, e, n) {
            var r = n.get(t);
            if (!r) return !1;
            var o = e.get(t);
            return o ? r.forEach(function (t) {
                return o.add(t)
            }) : e.set(t, r), n.delete(t), !0
        }

        var wd = function () {
            function t(t, e, n) {
                var r = this;
                this.bodyNode = t, this._driver = e, this._triggerCache = {}, this.onRemovalComplete = function (t, e) {
                }, this._transitionEngine = new cd(t, e, n), this._timelineEngine = new nd(t, e, n), this._transitionEngine.onRemovalComplete = function (t, e) {
                    return r.onRemovalComplete(t, e)
                }
            }

            return t.prototype.registerTrigger = function (t, e, n, r, o) {
                var i = t + "-" + r, s = this._triggerCache[i];
                if (!s) {
                    var a = [], u = Pf(this._driver, o, a);
                    if (a.length) throw new Error('The animation trigger "' + r + '" has failed to build due to the following errors:\n - ' + a.join("\n - "));
                    s = function (t, e) {
                        return new Xf(t, e)
                    }(r, u), this._triggerCache[i] = s
                }
                this._transitionEngine.registerTrigger(e, r, s)
            }, t.prototype.register = function (t, e) {
                this._transitionEngine.register(t, e)
            }, t.prototype.destroy = function (t, e) {
                this._transitionEngine.destroy(t, e)
            }, t.prototype.onInsert = function (t, e, n, r) {
                this._transitionEngine.insertNode(t, e, n, r)
            }, t.prototype.onRemove = function (t, e, n) {
                this._transitionEngine.removeNode(t, e, n)
            }, t.prototype.disableAnimations = function (t, e) {
                this._transitionEngine.markElementAsDisabled(t, e)
            }, t.prototype.process = function (t, e, n, r) {
                if ("@" == n.charAt(0)) {
                    var o = l(Uh(n), 2);
                    this._timelineEngine.command(o[0], e, o[1], r)
                } else this._transitionEngine.trigger(t, e, n, r)
            }, t.prototype.listen = function (t, e, n, r, o) {
                if ("@" == n.charAt(0)) {
                    var i = l(Uh(n), 2);
                    return this._timelineEngine.listen(i[0], e, i[1], o)
                }
                return this._transitionEngine.listen(t, e, n, r, o)
            }, t.prototype.flush = function (t) {
                void 0 === t && (t = -1), this._transitionEngine.flush(t)
            }, Object.defineProperty(t.prototype, "players", {
                get: function () {
                    return this._transitionEngine.players.concat(this._timelineEngine.players)
                }, enumerable: !0, configurable: !0
            }), t.prototype.whenRenderingDone = function () {
                return this._transitionEngine.whenRenderingDone()
            }, t
        }();

        function Sd(t, e) {
            var n = null, r = null;
            return Array.isArray(e) && e.length ? (n = Cd(e[0]), e.length > 1 && (r = Cd(e[e.length - 1]))) : e && (n = Cd(e)), n || r ? new Ed(t, n, r) : null
        }

        var Ed = function () {
            function t(e, n, r) {
                this._element = e, this._startStyles = n, this._endStyles = r, this._state = 0;
                var o = t.initialStylesByElement.get(e);
                o || t.initialStylesByElement.set(e, o = {}), this._initialStyles = o
            }

            return t.prototype.start = function () {
                this._state < 1 && (this._startStyles && cf(this._element, this._startStyles, this._initialStyles), this._state = 1)
            }, t.prototype.finish = function () {
                this.start(), this._state < 2 && (cf(this._element, this._initialStyles), this._endStyles && (cf(this._element, this._endStyles), this._endStyles = null), this._state = 1)
            }, t.prototype.destroy = function () {
                this.finish(), this._state < 3 && (t.initialStylesByElement.delete(this._element), this._startStyles && (pf(this._element, this._startStyles), this._endStyles = null), this._endStyles && (pf(this._element, this._endStyles), this._endStyles = null), cf(this._element, this._initialStyles), this._state = 3)
            }, t.initialStylesByElement = new WeakMap, t
        }();

        function Cd(t) {
            for (var e = null, n = Object.keys(t), r = 0; r < n.length; r++) {
                var o = n[r];
                xd(o) && ((e = e || {})[o] = t[o])
            }
            return e
        }

        function xd(t) {
            return "display" === t || "position" === t
        }

        var Td = "animation", kd = "animationend", Pd = function () {
            function t(t, e, n, r, o, i, s) {
                var a = this;
                this._element = t, this._name = e, this._duration = n, this._delay = r, this._easing = o, this._fillMode = i, this._onDoneFn = s, this._finished = !1, this._destroyed = !1, this._startTime = 0, this._position = 0, this._eventFn = function (t) {
                    return a._handleCallback(t)
                }
            }

            return t.prototype.apply = function () {
                var t, e, n;
                e = this._duration + "ms " + this._easing + " " + this._delay + "ms 1 normal " + this._fillMode + " " + this._name, (n = Dd(t = this._element, "").trim()).length && (function (t, e) {
                    for (var n = 0; n < t.length; n++) "," === t.charAt(n) && 0
                }(n), e = n + ", " + e), Od(t, "", e), Id(this._element, this._eventFn, !1), this._startTime = Date.now()
            }, t.prototype.pause = function () {
                Ad(this._element, this._name, "paused")
            }, t.prototype.resume = function () {
                Ad(this._element, this._name, "running")
            }, t.prototype.setPosition = function (t) {
                var e = Nd(this._element, this._name);
                this._position = t * this._duration, Od(this._element, "Delay", "-" + this._position + "ms", e)
            }, t.prototype.getPosition = function () {
                return this._position
            }, t.prototype._handleCallback = function (t) {
                var e = t._ngTestManualTimestamp || Date.now(), n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
                t.animationName == this._name && Math.max(e - this._startTime, 0) >= this._delay && n >= this._duration && this.finish()
            }, t.prototype.finish = function () {
                this._finished || (this._finished = !0, this._onDoneFn(), Id(this._element, this._eventFn, !0))
            }, t.prototype.destroy = function () {
                var t, e, n, r;
                this._destroyed || (this._destroyed = !0, this.finish(), e = this._name, (r = Rd(n = Dd(t = this._element, "").split(","), e)) >= 0 && (n.splice(r, 1), Od(t, "", n.join(","))))
            }, t
        }();

        function Ad(t, e, n) {
            Od(t, "PlayState", n, Nd(t, e))
        }

        function Nd(t, e) {
            var n = Dd(t, "");
            return n.indexOf(",") > 0 ? Rd(n.split(","), e) : Rd([n], e)
        }

        function Rd(t, e) {
            for (var n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
            return -1
        }

        function Id(t, e, n) {
            n ? t.removeEventListener(kd, e) : t.addEventListener(kd, e)
        }

        function Od(t, e, n, r) {
            var o = Td + e;
            if (null != r) {
                var i = t.style[o];
                if (i.length) {
                    var s = i.split(",");
                    s[r] = n, n = s.join(",")
                }
            }
            t.style[o] = n
        }

        function Dd(t, e) {
            return t.style[Td + e]
        }

        var Md = "linear", jd = function () {
            function t(t, e, n, r, o, i, s, a) {
                this.element = t, this.keyframes = e, this.animationName = n, this._duration = r, this._delay = o, this._finalStyles = s, this._specialStyles = a, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this.currentSnapshot = {}, this._state = 0, this.easing = i || Md, this.totalTime = r + o, this._buildStyler()
            }

            return t.prototype.onStart = function (t) {
                this._onStartFns.push(t)
            }, t.prototype.onDone = function (t) {
                this._onDoneFns.push(t)
            }, t.prototype.onDestroy = function (t) {
                this._onDestroyFns.push(t)
            }, t.prototype.destroy = function () {
                this.init(), this._state >= 4 || (this._state = 4, this._styler.destroy(), this._flushStartFns(), this._flushDoneFns(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(function (t) {
                    return t()
                }), this._onDestroyFns = [])
            }, t.prototype._flushDoneFns = function () {
                this._onDoneFns.forEach(function (t) {
                    return t()
                }), this._onDoneFns = []
            }, t.prototype._flushStartFns = function () {
                this._onStartFns.forEach(function (t) {
                    return t()
                }), this._onStartFns = []
            }, t.prototype.finish = function () {
                this.init(), this._state >= 3 || (this._state = 3, this._styler.finish(), this._flushStartFns(), this._specialStyles && this._specialStyles.finish(), this._flushDoneFns())
            }, t.prototype.setPosition = function (t) {
                this._styler.setPosition(t)
            }, t.prototype.getPosition = function () {
                return this._styler.getPosition()
            }, t.prototype.hasStarted = function () {
                return this._state >= 2
            }, t.prototype.init = function () {
                this._state >= 1 || (this._state = 1, this._styler.apply(), this._delay && this._styler.pause())
            }, t.prototype.play = function () {
                this.init(), this.hasStarted() || (this._flushStartFns(), this._state = 2, this._specialStyles && this._specialStyles.start()), this._styler.resume()
            }, t.prototype.pause = function () {
                this.init(), this._styler.pause()
            }, t.prototype.restart = function () {
                this.reset(), this.play()
            }, t.prototype.reset = function () {
                this._styler.destroy(), this._buildStyler(), this._styler.apply()
            }, t.prototype._buildStyler = function () {
                var t = this;
                this._styler = new Pd(this.element, this.animationName, this._duration, this._delay, this.easing, "forwards", function () {
                    return t.finish()
                })
            }, t.prototype.triggerCallback = function (t) {
                var e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(function (t) {
                    return t()
                }), e.length = 0
            }, t.prototype.beforeDestroy = function () {
                var t = this;
                this.init();
                var e = {};
                if (this.hasStarted()) {
                    var n = this._state >= 3;
                    Object.keys(this._finalStyles).forEach(function (r) {
                        "offset" != r && (e[r] = n ? t._finalStyles[r] : Sf(t.element, r))
                    })
                }
                this.currentSnapshot = e
            }, t
        }(), Fd = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.element = e, r._startingStyles = {}, r.__initialized = !1, r._styles = Jh(n), r
            }

            return o(e, t), e.prototype.init = function () {
                var e = this;
                !this.__initialized && this._startingStyles && (this.__initialized = !0, Object.keys(this._styles).forEach(function (t) {
                    e._startingStyles[t] = e.element.style[t]
                }), t.prototype.init.call(this))
            }, e.prototype.play = function () {
                var e = this;
                this._startingStyles && (this.init(), Object.keys(this._styles).forEach(function (t) {
                    return e.element.style.setProperty(t, e._styles[t])
                }), t.prototype.play.call(this))
            }, e.prototype.destroy = function () {
                var e = this;
                this._startingStyles && (Object.keys(this._startingStyles).forEach(function (t) {
                    var n = e._startingStyles[t];
                    n ? e.element.style.setProperty(t, n) : e.element.style.removeProperty(t)
                }), this._startingStyles = null, t.prototype.destroy.call(this))
            }, e
        }(Ah), Ld = function () {
            function t() {
                this._count = 0, this._head = document.querySelector("head"), this._warningIssued = !1
            }

            return t.prototype.validateStyleProperty = function (t) {
                return Zh(t)
            }, t.prototype.matchesElement = function (t, e) {
                return Gh(t, e)
            }, t.prototype.containsElement = function (t, e) {
                return Yh(t, e)
            }, t.prototype.query = function (t, e, n) {
                return $h(t, e, n)
            }, t.prototype.computeStyle = function (t, e, n) {
                return window.getComputedStyle(t)[e]
            }, t.prototype.buildKeyframeElement = function (t, e, n) {
                n = n.map(function (t) {
                    return Jh(t)
                });
                var r = "@keyframes " + e + " {\n", o = "";
                n.forEach(function (t) {
                    o = " ";
                    var e = parseFloat(t.offset);
                    r += "" + o + 100 * e + "% {\n", o += " ", Object.keys(t).forEach(function (e) {
                        var n = t[e];
                        switch (e) {
                            case"offset":
                                return;
                            case"easing":
                                return void (n && (r += o + "animation-timing-function: " + n + ";\n"));
                            default:
                                return void (r += "" + o + e + ": " + n + ";\n")
                        }
                    }), r += o + "}\n"
                }), r += "}\n";
                var i = document.createElement("style");
                return i.innerHTML = r, i
            }, t.prototype.animate = function (t, e, n, r, o, i, s) {
                void 0 === i && (i = []), s && this._notifyFaultyScrubber();
                var a = i.filter(function (t) {
                    return t instanceof jd
                }), u = {};
                _f(n, r) && a.forEach(function (t) {
                    var e = t.currentSnapshot;
                    Object.keys(e).forEach(function (t) {
                        return u[t] = e[t]
                    })
                });
                var l = function (t) {
                    var e = {};
                    return t && (Array.isArray(t) ? t : [t]).forEach(function (t) {
                        Object.keys(t).forEach(function (n) {
                            "offset" != n && "easing" != n && (e[n] = t[n])
                        })
                    }), e
                }(e = bf(t, e, u));
                if (0 == n) return new Fd(t, l);
                var c = "gen_css_kf_" + this._count++, p = this.buildKeyframeElement(t, c, e);
                document.querySelector("head").appendChild(p);
                var h = Sd(t, e), f = new jd(t, e, c, n, r, o, l, h);
                return f.onDestroy(function () {
                    var t;
                    (t = p).parentNode.removeChild(t)
                }), f
            }, t.prototype._notifyFaultyScrubber = function () {
                this._warningIssued || (console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n", "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."), this._warningIssued = !0)
            }, t
        }(), Ud = function () {
            function t(t, e, n, r) {
                this.element = t, this.keyframes = e, this.options = n, this._specialStyles = r, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this.time = 0, this.parentPlayer = null, this.currentSnapshot = {}, this._duration = n.duration, this._delay = n.delay || 0, this.time = this._duration + this._delay
            }

            return t.prototype._onFinish = function () {
                this._finished || (this._finished = !0, this._onDoneFns.forEach(function (t) {
                    return t()
                }), this._onDoneFns = [])
            }, t.prototype.init = function () {
                this._buildPlayer(), this._preparePlayerBeforeStart()
            }, t.prototype._buildPlayer = function () {
                var t = this;
                if (!this._initialized) {
                    this._initialized = !0;
                    var e = this.keyframes;
                    this.domPlayer = this._triggerWebAnimation(this.element, e, this.options), this._finalKeyframe = e.length ? e[e.length - 1] : {}, this.domPlayer.addEventListener("finish", function () {
                        return t._onFinish()
                    })
                }
            }, t.prototype._preparePlayerBeforeStart = function () {
                this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
            }, t.prototype._triggerWebAnimation = function (t, e, n) {
                return t.animate(e, n)
            }, t.prototype.onStart = function (t) {
                this._onStartFns.push(t)
            }, t.prototype.onDone = function (t) {
                this._onDoneFns.push(t)
            }, t.prototype.onDestroy = function (t) {
                this._onDestroyFns.push(t)
            }, t.prototype.play = function () {
                this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(function (t) {
                    return t()
                }), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play()
            }, t.prototype.pause = function () {
                this.init(), this.domPlayer.pause()
            }, t.prototype.finish = function () {
                this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish()
            }, t.prototype.reset = function () {
                this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1
            }, t.prototype._resetDomPlayerState = function () {
                this.domPlayer && this.domPlayer.cancel()
            }, t.prototype.restart = function () {
                this.reset(), this.play()
            }, t.prototype.hasStarted = function () {
                return this._started
            }, t.prototype.destroy = function () {
                this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(function (t) {
                    return t()
                }), this._onDestroyFns = [])
            }, t.prototype.setPosition = function (t) {
                this.domPlayer.currentTime = t * this.time
            }, t.prototype.getPosition = function () {
                return this.domPlayer.currentTime / this.time
            }, Object.defineProperty(t.prototype, "totalTime", {
                get: function () {
                    return this._delay + this._duration
                }, enumerable: !0, configurable: !0
            }), t.prototype.beforeDestroy = function () {
                var t = this, e = {};
                this.hasStarted() && Object.keys(this._finalKeyframe).forEach(function (n) {
                    "offset" != n && (e[n] = t._finished ? t._finalKeyframe[n] : Sf(t.element, n))
                }), this.currentSnapshot = e
            }, t.prototype.triggerCallback = function (t) {
                var e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(function (t) {
                    return t()
                }), e.length = 0
            }, t
        }(), Vd = function () {
            function t() {
                this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(Hd().toString()), this._cssKeyframesDriver = new Ld
            }

            return t.prototype.validateStyleProperty = function (t) {
                return Zh(t)
            }, t.prototype.matchesElement = function (t, e) {
                return Gh(t, e)
            }, t.prototype.containsElement = function (t, e) {
                return Yh(t, e)
            }, t.prototype.query = function (t, e, n) {
                return $h(t, e, n)
            }, t.prototype.computeStyle = function (t, e, n) {
                return window.getComputedStyle(t)[e]
            }, t.prototype.overrideWebAnimationsSupport = function (t) {
                this._isNativeImpl = t
            }, t.prototype.animate = function (t, e, n, r, o, i, s) {
                if (void 0 === i && (i = []), !s && !this._isNativeImpl) return this._cssKeyframesDriver.animate(t, e, n, r, o, i);
                var a = {duration: n, delay: r, fill: 0 == r ? "both" : "forwards"};
                o && (a.easing = o);
                var u = {}, l = i.filter(function (t) {
                    return t instanceof Ud
                });
                _f(n, r) && l.forEach(function (t) {
                    var e = t.currentSnapshot;
                    Object.keys(e).forEach(function (t) {
                        return u[t] = e[t]
                    })
                });
                var c = Sd(t, e = bf(t, e = e.map(function (t) {
                    return af(t, !1)
                }), u));
                return new Ud(t, e, a, c)
            }, t
        }();

        function Hd() {
            return "undefined" != typeof window && void 0 !== window.document && Element.prototype.animate || {}
        }

        var zd = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r._nextAnimationId = 0, r._renderer = e.createRenderer(n.body, {
                    id: "0",
                    encapsulation: Dt.None,
                    styles: [],
                    data: {animation: []}
                }), r
            }

            return o(e, t), e.prototype.build = function (t) {
                var e = this._nextAnimationId.toString();
                this._nextAnimationId++;
                var n = Array.isArray(t) ? Th(t) : t;
                return Qd(this._renderer, null, e, "register", [n]), new Bd(e, this._renderer)
            }, e
        }(Eh), Bd = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r._id = e, r._renderer = n, r
            }

            return o(e, t), e.prototype.create = function (t, e) {
                return new qd(this._id, t, e || {}, this._renderer)
            }, e
        }(Ch), qd = function () {
            function t(t, e, n, r) {
                this.id = t, this.element = e, this._renderer = r, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", n)
            }

            return t.prototype._listen = function (t, e) {
                return this._renderer.listen(this.element, "@@" + this.id + ":" + t, e)
            }, t.prototype._command = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return Qd(this._renderer, this.element, this.id, t, e)
            }, t.prototype.onDone = function (t) {
                this._listen("done", t)
            }, t.prototype.onStart = function (t) {
                this._listen("start", t)
            }, t.prototype.onDestroy = function (t) {
                this._listen("destroy", t)
            }, t.prototype.init = function () {
                this._command("init")
            }, t.prototype.hasStarted = function () {
                return this._started
            }, t.prototype.play = function () {
                this._command("play"), this._started = !0
            }, t.prototype.pause = function () {
                this._command("pause")
            }, t.prototype.restart = function () {
                this._command("restart")
            }, t.prototype.finish = function () {
                this._command("finish")
            }, t.prototype.destroy = function () {
                this._command("destroy")
            }, t.prototype.reset = function () {
                this._command("reset")
            }, t.prototype.setPosition = function (t) {
                this._command("setPosition", t)
            }, t.prototype.getPosition = function () {
                return 0
            }, t
        }();

        function Qd(t, e, n, r, o) {
            return t.setProperty(e, "@@" + n + ":" + r, o)
        }

        var Kd = function () {
            function t(t, e, n) {
                this.delegate = t, this.engine = e, this._zone = n, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, this.promise = Promise.resolve(0), e.onRemovalComplete = function (t, e) {
                    e && e.parentNode(t) && e.removeChild(t.parentNode, t)
                }
            }

            return t.prototype.createRenderer = function (t, e) {
                var n = this, r = this.delegate.createRenderer(t, e);
                if (!(t && e && e.data && e.data.animation)) {
                    var o = this._rendererCache.get(r);
                    return o || (o = new Wd("", r, this.engine), this._rendererCache.set(r, o)), o
                }
                var i = e.id, s = e.id + "-" + this._currentId;
                return this._currentId++, this.engine.register(s, t), e.data.animation.forEach(function (e) {
                    return n.engine.registerTrigger(i, s, t, e.name, e)
                }), new Zd(this, s, r, this.engine)
            }, t.prototype.begin = function () {
                this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
            }, t.prototype._scheduleCountTask = function () {
                var t = this;
                this.promise.then(function () {
                    t._microtaskId++
                })
            }, t.prototype.scheduleListenerCallback = function (t, e, n) {
                var r = this;
                t >= 0 && t < this._microtaskId ? this._zone.run(function () {
                    return e(n)
                }) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then(function () {
                    r._zone.run(function () {
                        r._animationCallbacksBuffer.forEach(function (t) {
                            var e = l(t, 2);
                            (0, e[0])(e[1])
                        }), r._animationCallbacksBuffer = []
                    })
                }), this._animationCallbacksBuffer.push([e, n]))
            }, t.prototype.end = function () {
                var t = this;
                this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular(function () {
                    t._scheduleCountTask(), t.engine.flush(t._microtaskId)
                }), this.delegate.end && this.delegate.end()
            }, t.prototype.whenRenderingDone = function () {
                return this.engine.whenRenderingDone()
            }, t
        }(), Wd = function () {
            function t(t, e, n) {
                this.namespaceId = t, this.delegate = e, this.engine = n, this.destroyNode = this.delegate.destroyNode ? function (t) {
                    return e.destroyNode(t)
                } : null
            }

            return Object.defineProperty(t.prototype, "data", {
                get: function () {
                    return this.delegate.data
                }, enumerable: !0, configurable: !0
            }), t.prototype.destroy = function () {
                this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy()
            }, t.prototype.createElement = function (t, e) {
                return this.delegate.createElement(t, e)
            }, t.prototype.createComment = function (t) {
                return this.delegate.createComment(t)
            }, t.prototype.createText = function (t) {
                return this.delegate.createText(t)
            }, t.prototype.appendChild = function (t, e) {
                this.delegate.appendChild(t, e), this.engine.onInsert(this.namespaceId, e, t, !1)
            }, t.prototype.insertBefore = function (t, e, n) {
                this.delegate.insertBefore(t, e, n), this.engine.onInsert(this.namespaceId, e, t, !0)
            }, t.prototype.removeChild = function (t, e) {
                this.engine.onRemove(this.namespaceId, e, this.delegate)
            }, t.prototype.selectRootElement = function (t, e) {
                return this.delegate.selectRootElement(t, e)
            }, t.prototype.parentNode = function (t) {
                return this.delegate.parentNode(t)
            }, t.prototype.nextSibling = function (t) {
                return this.delegate.nextSibling(t)
            }, t.prototype.setAttribute = function (t, e, n, r) {
                this.delegate.setAttribute(t, e, n, r)
            }, t.prototype.removeAttribute = function (t, e, n) {
                this.delegate.removeAttribute(t, e, n)
            }, t.prototype.addClass = function (t, e) {
                this.delegate.addClass(t, e)
            }, t.prototype.removeClass = function (t, e) {
                this.delegate.removeClass(t, e)
            }, t.prototype.setStyle = function (t, e, n, r) {
                this.delegate.setStyle(t, e, n, r)
            }, t.prototype.removeStyle = function (t, e, n) {
                this.delegate.removeStyle(t, e, n)
            }, t.prototype.setProperty = function (t, e, n) {
                "@" == e.charAt(0) && "@.disabled" == e ? this.disableAnimations(t, !!n) : this.delegate.setProperty(t, e, n)
            }, t.prototype.setValue = function (t, e) {
                this.delegate.setValue(t, e)
            }, t.prototype.listen = function (t, e, n) {
                return this.delegate.listen(t, e, n)
            }, t.prototype.disableAnimations = function (t, e) {
                this.engine.disableAnimations(t, e)
            }, t
        }(), Zd = function (t) {
            function e(e, n, r, o) {
                var i = t.call(this, n, r, o) || this;
                return i.factory = e, i.namespaceId = n, i
            }

            return o(e, t), e.prototype.setProperty = function (t, e, n) {
                "@" == e.charAt(0) ? "." == e.charAt(1) && "@.disabled" == e ? this.disableAnimations(t, n = void 0 === n || !!n) : this.engine.process(this.namespaceId, t, e.substr(1), n) : this.delegate.setProperty(t, e, n)
            }, e.prototype.listen = function (t, e, n) {
                var r, o, i, s = this;
                if ("@" == e.charAt(0)) {
                    var a = function (t) {
                        switch (t) {
                            case"body":
                                return document.body;
                            case"document":
                                return document;
                            case"window":
                                return window;
                            default:
                                return t
                        }
                    }(t), u = e.substr(1), c = "";
                    return "@" != u.charAt(0) && (u = (r = l((o = u, i = o.indexOf("."), [o.substring(0, i), o.substr(i + 1)]), 2))[0], c = r[1]), this.engine.listen(this.namespaceId, a, u, c, function (t) {
                        s.factory.scheduleListenerCallback(t._data || -1, n, t)
                    })
                }
                return this.delegate.listen(t, e, n)
            }, e
        }(Wd), Gd = function (t) {
            function e(e, n, r) {
                return t.call(this, e.body, n, r) || this
            }

            return o(e, t), e
        }(wd);

        function Yd() {
            return "function" == typeof Hd() ? new Vd : new Ld
        }

        function $d() {
            return new Kf
        }

        function Jd(t, e, n) {
            return new Kd(t, e, n)
        }

        var Xd = new mt("AnimationModuleType"), ty = function () {
            return function () {
            }
        }(), ey = function () {
            return function () {
            }
        }(), ny = Ws(Ys, [$s], function (t) {
            return function (t) {
                for (var e = {}, n = [], r = !1, o = 0; o < t.length; o++) {
                    var i = t[o];
                    i.token === ye && !0 === i.value && (r = !0), 1073741824 & i.flags && n.push(i.token), i.index = o, e[ro(i.token)] = i
                }
                return {factory: null, providersByKey: e, providers: t, modules: n, isRoot: r}
            }([zo(512, we, Se, [[8, [fh, gh, Sh]], [3, we], Ce]), zo(5120, Ur, zr, [[3, Ur]]), zo(4608, pa, ha, [Ur, [2, ca]]), zo(5120, Or, Vr, []), zo(5120, Dr, Hr, []), zo(4608, cl, pl, [da]), zo(6144, De, null, [cl]), zo(4608, rl, il, []), zo(5120, Nu, function (t, e, n, r, o, i, s, a) {
                return [new el(t, e, n), new ll(r), new sl(o, i, s, a)]
            }, [da, Bn, Tn, da, da, rl, Pn, [2, ol]]), zo(4608, Ru, Ru, [Nu, Bn]), zo(135680, Du, Du, [da]), zo(4608, Hu, Hu, [Ru, Du]), zo(5120, tf, Yd, []), zo(5120, Qf, $d, []), zo(4608, wd, Gd, [da, tf, Qf]), zo(5120, Ae, Jd, [Hu, wd, Bn]), zo(6144, Ou, null, [Du]), zo(4608, $n, $n, [Bn]), zo(4608, Eh, zd, [Ae, bu]), zo(5120, Ac, ih, [Up]), zo(4608, Kp, Kp, []), zo(6144, qp, null, [Kp]), zo(135680, Wp, Wp, [Up, hn, jn, ee, qp]), zo(4608, Qp, Qp, []), zo(5120, Zp, th, [Up, va, Gp]), zo(5120, lh, uh, [sh]), zo(5120, kn, function (t) {
                return [t]
            }, [lh]), zo(1073742336, fa, fa, []), zo(1024, _n, _l, []), zo(1024, er, function () {
                return [Jp()]
            }, []), zo(512, sh, sh, [ee]), zo(256, Cn, "serverApp", []), zo(2048, Eu, null, [Cn]), zo(1024, Sn, function (t, e, n, r, o) {
                return [(s = t, ku("probe", Au), ku("coreTokens", i({}, Pu, (s || []).reduce(function (t, e) {
                    return t[e.name] = e.token, t
                }, {}))), function () {
                    return Au
                }), ah(e), Cu(n, r, o)];
                var s
            }, [[2, er], sh, Eu, da, ee]), zo(512, En, En, [[2, Sn]]), zo(131584, sr, sr, [Bn, Pn, ee, _n, we, En]), zo(1073742336, Br, Br, [sr]), zo(1073742336, bl, bl, [[3, bl]]), zo(1073742336, ty, ty, []), zo(1024, Yp, nh, [[3, Up]]), zo(512, ac, uc, []), zo(512, Hp, Hp, []), zo(512, ta, ia, [Js, [2, ea]]), zo(512, na, na, [ta]), zo(512, jn, jn, []), zo(512, hn, pr, [jn, [2, lr]]), zo(1024, Ip, function () {
                return [[{path: "", component: dh, pathMatch: "full"}, {path: "**", redirectTo: "/"}]]
            }, []), zo(256, Gp, {}, []), zo(1024, Up, oh, [sr, ac, Hp, na, ee, hn, jn, Ip, Gp, [2, Dp], [2, Np]]), zo(1073742336, Xp, Xp, [[2, Yp], [2, Up]]), zo(1073742336, ey, ey, []), zo(1073742336, Ys, Ys, []), zo(256, ye, !0, []), zo(256, Xd, "BrowserAnimations", [])])
        });
        Gs.production && function () {
            if (Fe) throw new Error("Cannot enable prod mode after platform setup.");
            je = !1
        }(), document.addEventListener("DOMContentLoaded", function () {
            gl().bootstrapModuleFactory(ny).catch(function (t) {
                return console.log(t)
            })
        })
    }
}, [[0, 0]]]);
