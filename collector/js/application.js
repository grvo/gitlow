! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");

        return t(e);
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    function s(e) {
        var t = !!e && "length" in e && e.length,
            n = pe.type(e);

        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
    }

    function t(e, n, r) {
        if (pe.isFunction(n)) return pe.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r;
        });

        if (n.nodeType) return pe.grep(e, function(e) {
            return e === n !== r;
        });

        if ("string" == typeof n) {
            if (Ce.test(n))
                return pe.filter(n, e, r);

            n = pe.filter(n, e);
        }

        return pe.grep(e, function(e) {
            return -1 < pe.inArray(e, n) !== r;
        });
    }

    function n(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);

        return e;
    }

    function c(e) {
        var n = {};

        return pe.each(e.match(Ae) || [], function(e, t) {
            n[t] = !0;
        }), n;
    }

    function i() {
        re.addEventListener
            ? (re.removeEventListener("DOMContentLoaded", o), C.removeEventListener("load", o))
            : (re.detachEvent("onreadystatechange", o), C.detachEvent("onload", o));
    }

    function o() {
        (re.addEventListener || "load" === C.event.type || "complete" === re.readyState) && (i(), pe.ready());
    }

    function u(e, t, n) {
        if (n === undefined && 1 === e.nodeType) {
            var r = "data-" + t.replace(qe, "-$1").toLowerCase();

            if ("string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : He.test(n) ? pe.parseJSON(n) : n)
                } catch (i) {}

                pe.data(e, t, n);
            } else n = undefined;
        }

        return n;
    }

    function l(e) {
        var t;

        for (t in e)
            if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;

        return !0;
    }

    function r(e, t, n, r) {
        if (Le(e)) {
            var i, o, a = pe.expando,
                s = e.nodeType,
                u = s ? pe.cache : e,
                l = s ? e[a] : e[a] && a;
                
            if (l && u[l] && (r || u[l].data) || n !== undefined || "string" != typeof t) return l || (l = s ? e[a] = ne.pop() || pe.guid++ : a), u[l] || (u[l] = s ? {} : {
                toJSON: pe.noop
            }), "object" != typeof t && "function" != typeof t || (r ? u[l] = pe.extend(u[l], t) : u[l].data = pe.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), n !== undefined && (o[pe.camelCase(t)] = n), "string" == typeof t ? null == (i = o[t]) && (i = o[pe.camelCase(t)]) : i = o, i
        }
    }

    function a(e, t, n) {
        if (Le(e)) {
            var r, i, o = e.nodeType,
                a = o ? pe.cache : e,
                s = o ? e[pe.expando] : pe.expando;

            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    i = (t = pe.isArray(t) ? t.concat(pe.map(t, pe.camelCase)) : t in r ? [t] : (t = pe.camelCase(t)) in r ? [t] : t.split(" ")).length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !l(r) : !pe.isEmptyObject(r)) return
                }(n || (delete a[s].data, l(a[s]))) && (o ? pe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = undefined)
            }
        }
    }

    function d(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return pe.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
            c = (pe.cssNumber[t] || "px" !== l && +u) && Pe.exec(pe.css(e, t));
        if (c && c[3] !== l)
            for (l = l || c[3], n = n || [], c = +u || 1; c /= o = o || ".5", pe.style(e, t, c + l), o !== (o = s() / u) && 1 !== o && --a;);
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function g(e) {
        var t = Ve.split("|"),
            n = e.createDocumentFragment();

        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());

        return n;
    }

    function y(e, t) {
        var n, r, i = 0,
            o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;

        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || pe.nodeName(r, t) ? o.push(r) : pe.merge(o, y(r, t));

        return t === undefined || t && pe.nodeName(e, t) ? pe.merge([e], o) : o;
    }

    function v(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)
            pe._data(n, "globalEval", !t || pe._data(t[r], "globalEval"));
    }

    function b(e) {
        ze.test(e.type) && (e.defaultChecked = e.checked);
    }

    function m(e, t, n, r, i) {
        for (var o, a, s, u, l, c, d, f = e.length, p = g(t), h = [], m = 0; m < f; m++)
            if ((a = e[m]) || 0 === a)
                if ("object" === pe.type(a)) pe.merge(h, a.nodeType ? [a] : a);
                else if (Qe.test(a)) {
            for (u = u || p.appendChild(t.createElement("div")), l = ($e.exec(a) || ["", ""])[1].toLowerCase(), d = Ge[l] || Ge._default, u.innerHTML = d[1] + pe.htmlPrefilter(a) + d[2], o = d[0]; o--;) u = u.lastChild;
            if (!de.leadingWhitespace && Ue.test(a) && h.push(t.createTextNode(Ue.exec(a)[0])), !de.tbody)
                for (o = (a = "table" !== l || Ye.test(a) ? "<table>" !== d[1] || Ye.test(a) ? 0 : u : u.firstChild) && a.childNodes.length; o--;) pe.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (pe.merge(h, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
            u = p.lastChild
        } else h.push(t.createTextNode(a));
        for (u && p.removeChild(u), de.appendChecked || pe.grep(y(h, "input"), b), m = 0; a = h[m++];)
            if (r && -1 < pe.inArray(a, r)) i && i.push(a);
            else if (s = pe.contains(a.ownerDocument, a), u = y(p.appendChild(a), "script"), s && v(u), n)
            for (o = 0; a = u[o++];) Xe.test(a.type || "") && n.push(a);
        return u = null, p;
    }

    function f() {
        return !0;
    }

    function p() {
        return !1;
    }

    function h() {
        try {
            return re.activeElement;
        } catch (e) {}
    }

    function x(e, t, n, r, i, o) {
        var a, s;

        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = undefined), t) x(e, s, n, r, t[s], o);
            return e
        }

        if (null == r && null == i ? (i = n, r = n = undefined) : null == i && ("string" == typeof n ? (i = r, r = undefined) : (i = r, r = n, n = undefined)), !1 === i) i = p;
        else if (!i) return e;

        return 1 === o && (a = i, (i = function(e) {
            return pe().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = pe.guid++)), e.each(function() {
            pe.event.add(this, t, i, r, n);
        });
    }

    function w(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }

    function T(e) {
        return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e;
    }

    function E(e) {
        var t = st.exec(e.type);

        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }

    function S(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n, r, i, o = pe._data(e),
                a = pe._data(t, o),
                s = o.events;

            if (s)
                for (n in delete a.handle, a.events = {}, s)
                    for (r = 0, i = s[n].length; r < i; r++) pe.event.add(t, n, s[n][r]);
            a.data && (a.data = pe.extend({}, a.data))
        }
    }

    function k(e, t) {
        var n, r, i;

        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[pe.expando]) {
                for (r in (i = pe._data(t)).events)
                    pe.removeEvent(t, r, i.handle);

                t.removeAttribute(pe.expando);
            }

            "script" === n && t.text !== e.text ? (T(t).text = e.text, E(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && ze.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function j(n, r, i, o) {
        r = oe.apply([], r);

        var e, t, a, s, u, l, c = 0,
            d = n.length,
            f = d - 1,
            p = r[0],
            h = pe.isFunction(p);

        if (h || 1 < d && "string" == typeof p && !de.checkClone && at.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())), j(t, r, i, o)
        });

        if (d && (e = (l = m(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === l.childNodes.length && (l = e), e || o)) {
            for (a = (s = pe.map(y(l, "script"), T)).length; c < d; c++) t = l, c !== f && (t = pe.clone(t, !0, !0), a && pe.merge(s, y(t, "script"))), i.call(n[c], t, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, pe.map(s, E), c = 0; c < a; c++) t = s[c], Xe.test(t.type || "") && !pe._data(t, "globalEval") && pe.contains(u, t) && (t.src ? pe._evalUrl && pe._evalUrl(t.src) : pe.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ut, "")));
            l = e = null
        }

        return n;
    }

    function N(e, t, n) {
        for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || pe.cleanData(y(r)), r.parentNode && (n && pe.contains(r.ownerDocument, r) && v(y(r, "script")), r.parentNode.removeChild(r));
        
        return e;
    }

    function _(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body),
            r = pe.css(n[0], "display");

        return n.detach(), r;
    }

    function A(e) {
        var t = re,
            n = dt[e];

        return n || ("none" !== (n = _(e, t)) && n || ((t = ((ct = (ct || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || ct[0].contentDocument).document).write(), t.close(), n = _(e, t), ct.detach()), dt[e] = n), n
    }

    function D(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);

                delete this.get;
            }
        }
    }

    function L(e) {
        if (e in kt) return e;

        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = St.length; n--;)
            if ((e = St[n] + t) in kt)
                return e;
    }

    function H(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
            (r = e[a]).style && (
                o[a] = pe._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && We(r) && (o[a] = pe._data(r, "olddisplay", A(r.nodeName)))) : (i = We(r), (n && "none" !== n || !i) && pe._data(r, "olddisplay", i ? n : pe.css(r, "display")))
            );
        
        for (a = 0; a < s; a++)
            (r = e[a]).style && (
                t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")
            );
        
        return e;
    }

    function q(e, t, n) {
        var r = Tt.exec(t);

        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }

    function F(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
            "margin" === n && (a += pe.css(e, n + Ie[o], !0, i)), r ? ("content" === n && (a -= pe.css(e, "padding" + Ie[o], !0, i)), "margin" !== n && (a -= pe.css(e, "border" + Ie[o] + "Width", !0, i))) : (a += pe.css(e, "padding" + Ie[o], !0, i), "padding" !== n && (a += pe.css(e, "border" + Ie[o] + "Width", !0, i)));

        return a;
    }

    function M(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = gt(e),
            a = de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o);

        if (i <= 0 || null == i) {
            if (((i = yt(e, t, o)) < 0 || null == i) && (i = e.style[t]), pt.test(i))
                return i;

            r = a && (de.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0;
        }

        return i + F(e, t, n || (a ? "border" : "content"), r, o) + "px";
    }

    function R(e, t, n, r, i) {
        return new R.prototype.init(e, t, n, r, i);
    }

    function O() {
        return C.setTimeout(function() {
            jt = undefined;
        }), jt = pe.now();
    }

    function P(e, t) {
        var n, r = {
                height: e
            },
            i = 0;

        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = Ie[i])] = r["padding" + n] = e;

        return t && (r.opacity = r.width = e), r;
    }

    function I(e, t, n) {
        for (var r, i = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r;
    }

    function W(t, e, n) {
        var r, i, o, a, s, u, l, c = this,
            d = {},
            f = t.style,
            p = t.nodeType && We(t),
            h = pe._data(t, "fxshow");

        for (r in n.queue || (null == (s = pe._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                s.unqueued || u()
            }), s.unqueued++, c.always(function() {
                c.always(function() {
                    s.unqueued--, pe.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (l = pe.css(t, "display")) ? pe._data(t, "olddisplay") || A(t.nodeName) : l) && "none" === pe.css(t, "float") && (de.inlineBlockNeedsLayout && "inline" !== A(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", de.shrinkWrapBlocks() || c.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            })), e)
            if (i = e[r], qt.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                    if ("show" !== i || !h || h[r] === undefined) continue;
                    p = !0
                }
                d[r] = h && h[r] || pe.style(t, r)
            } else l = undefined;

        if (pe.isEmptyObject(d))
            "inline" === ("none" === l ? A(t.nodeName) : l) && (f.display = l);

        else
            for (r in h ? "hidden" in h && (p = h.hidden) : h = pe._data(t, "fxshow", {}), o && (h.hidden = !p), p ? pe(t).show() : c.done(function() {
                    pe(t).hide()
                }), c.done(function() {
                    var e;
                    for (e in pe._removeData(t, "fxshow"), d) pe.style(t, e, d[e])
                }), d) a = I(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
    }

    function B(e, t) {
        var n, r, i, o, a;

        for (n in e)
            if (i = t[r = pe.camelCase(n)], o = e[n], pe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = pe.cssHooks[r]) && "expand" in a)
                for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
            else t[r] = i
    }

    function z(o, e, t) {
        var n, a, r = 0,
            i = z.prefilters.length,

            s = pe.Deferred().always(function() {
                delete u.elem
            }),

            u = function() {
                if (a) return !1;
                for (var e = jt || O(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (s.resolveWith(o, [l]), !1)
            },

            l = s.promise({
                elem: o,
                props: pe.extend({}, e),
                opts: pe.extend(!0, {
                    specialEasing: {},
                    easing: pe.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: jt || O(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = pe.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),

            c = l.props;

        for (B(c, l.opts.specialEasing); r < i; r++)
            if (n = z.prefilters[r].call(l, o, c, l.opts))
                return pe.isFunction(n.stop) && (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(n.stop, n)), n;

        return pe.map(c, I, l), pe.isFunction(l.opts.start) && l.opts.start.call(o, l), pe.fx.timer(pe.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }

    function $(e) {
        return pe.attr(e, "class") || "";
    }

    function X(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");

            var n, r = 0,
                i = e.toLowerCase().match(Ae) || [];

            if (pe.isFunction(t))
                for (; n = i[r++];)
                    "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        }
    }

    function U(t, i, o, a) {
        function s(e) {
            var r;

            return u[e] = !0, pe.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);

                return "string" != typeof n || l || u[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n), s(n), !1);
            }), r
        }
        var u = {},
            l = t === an;
        return s(i.dataTypes[0]) || !u["*"] && s("*")
    }

    function V(e, t) {
        var n, r, i = pe.ajaxSettings.flatOptions || {};

        for (r in t)
            t[r] !== undefined && ((i[r] ? e : n || (n = {}))[r] = t[r]);

        return n && pe.extend(!0, e, n), e;
    }

    function G(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));

        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    u.unshift(a);
                    
                    break;
                } if (u[0] in n) o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;

                    break;
                }

                r || (r = a);
            }

            o = o || r;
        }

        if (o) return o !== u[0] && u.unshift(o), n[o];
    }

    function Q(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();

        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];

        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o)
                    o = u;

                else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Y(e) {
        return e.style && e.style.display || pe.css(e, "display")
    }

    function J(e) {
        if (!pe.contains(e.ownerDocument || re, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === Y(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function K(n, e, r, i) {
        var t;
        if (pe.isArray(e)) pe.each(e, function(e, t) {
            r || dn.test(n) ? i(n, t) : K(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== pe.type(e)) i(n, e);
        else
            for (t in e) K(n + "[" + t + "]", e[t], r, i)
    }

    function Z() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }

    function ee() {
        try {
            return new C.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function te(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ne = [],
        re = C.document,
        ie = ne.slice,
        oe = ne.concat,
        ae = ne.push,
        se = ne.indexOf,
        ue = {},
        le = ue.toString,
        ce = ue.hasOwnProperty,
        de = {},
        fe = "1.12.4",
        pe = function(e, t) {
            return new pe.fn.init(e, t)
        },
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ge = /-([\da-z])/gi,
        ye = function(e, t) {
            return t.toUpperCase()
        };
    pe.fn = pe.prototype = {
        jquery: fe,
        constructor: pe,
        selector: "",
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : ie.call(this)
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(n) {
            return this.pushStack(pe.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: ne.sort,
        splice: ne.splice
    }, pe.extend = pe.fn.extend = function(e) {
        var t, n, r, i, o, a, s = e || {},
            u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[u] || {}, u++), "object" == typeof s || pe.isFunction(s) || (s = {}), u === l && (s = this, u--); u < l; u++)
            if (null != (o = arguments[u]))
                for (i in o) t = s[i], s !== (r = o[i]) && (c && r && (pe.isPlainObject(r) || (n = pe.isArray(r))) ? (n ? (n = !1, a = t && pe.isArray(t) ? t : []) : a = t && pe.isPlainObject(t) ? t : {}, s[i] = pe.extend(c, a, r)) : r !== undefined && (s[i] = r));
        return s
    }, pe.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === pe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !pe.isArray(e) && 0 <= t - parseFloat(t) + 1
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!de.ownFirst)
                for (t in e) return ce.call(e, t);
            for (t in e);
            return t === undefined || ce.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[le.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            e && pe.trim(e) && (C.execScript || function(e) {
                C.eval.call(C, e)
            })(e)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ge, ye)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (s(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (s(Object(e)) ? pe.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (se) return se.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n;) e[i++] = t[r++];
            if (n != n)
                for (; t[r] !== undefined;) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (s(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return oe.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), pe.isFunction(e) ? (n = ie.call(arguments, 2), (r = function() {
                return e.apply(t || this, n.concat(ie.call(arguments)))
            }).guid = e.guid = e.guid || pe.guid++, r) : undefined
        },
        now: function() {
            return +new Date
        },
        support: de
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ue["[object " + t + "]"] = t.toLowerCase()
    });
    var ve = function(n) {
        function x(e, t, n, r) {
            var i, o, a, s, u, l, c, d, f = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : I) !== L && D(t), t = t || L, q)) {
                if (11 !== p && (l = ye.exec(e)))
                    if (i = l[1]) {
                        if (9 === p) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && O(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && y.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), n
                    } if (y.qsa && !X[e + " "] && (!F || !F.test(e))) {
                    if (1 !== p) f = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = P), o = (c = S(e)).length, u = fe.test(s) ? "#" + s : "[id='" + s + "']"; o--;) c[o] = u + " " + g(c[o]);
                        d = c.join(","), f = ve.test(e) && m(t.parentNode) || t
                    }
                    if (d) try {
                        return K.apply(n, f.querySelectorAll(d)), n
                    } catch (h) {} finally {
                        s === P && t.removeAttribute("id")
                    }
                }
            }
            return j(e.replace(se, "$1"), t, n, r)
        }

        function e() {
            function n(e, t) {
                return r.push(e + " ") > T.cacheLength && delete n[r.shift()], n[e + " "] = t
            }
            var r = [];
            return n
        }

        function u(e) {
            return e[P] = !0, e
        }

        function i(e) {
            var t = L.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function t(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) T.attrHandle[n[r]] = t
        }

        function l(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function r(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function o(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function a(a) {
            return u(function(o) {
                return o = +o, u(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function m(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function s() {}

        function g(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function d(s, e, t) {
            var u = e.dir,
                l = t && "parentNode" === u,
                c = B++;
            return e.first ? function(e, t, n) {
                for (; e = e[u];)
                    if (1 === e.nodeType || l) return s(e, t, n)
            } : function(e, t, n) {
                var r, i, o, a = [W, c];
                if (n) {
                    for (; e = e[u];)
                        if ((1 === e.nodeType || l) && s(e, t, n)) return !0
                } else
                    for (; e = e[u];)
                        if (1 === e.nodeType || l) {
                            if ((r = (i = (o = e[P] || (e[P] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[u]) && r[0] === W && r[1] === c) return a[2] = r[2];
                            if ((i[u] = a)[2] = s(e, t, n)) return !0
                        }
            }
        }

        function f(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function v(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) x(e, t[r], n);
            return n
        }

        function w(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function b(p, h, m, g, y, e) {
            return g && !g[P] && (g = b(g)), y && !y[P] && (y = b(y, e)), u(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || v(h || "*", n.nodeType ? [n] : n, []),
                    d = !p || !e && h ? c : w(c, s, p, n, r),
                    f = m ? y || (e ? p : l || g) ? [] : t : d;
                if (m && m(d, f, n, r), g)
                    for (i = w(f, u), g(i, [], n, r), o = i.length; o--;)(a = i[o]) && (f[u[o]] = !(d[u[o]] = a));
                if (e) {
                    if (y || p) {
                        if (y) {
                            for (i = [], o = f.length; o--;)(a = f[o]) && i.push(d[o] = a);
                            y(null, f = [], i, r)
                        }
                        for (o = f.length; o--;)(a = f[o]) && -1 < (i = y ? ee(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else f = w(f === t ? f.splice(l, f.length) : f), y ? y(null, t, f, r) : K.apply(t, f)
            })
        }

        function p(e) {
            for (var i, t, n, r = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = d(function(e) {
                    return e === i
                }, a, !0), l = d(function(e) {
                    return -1 < ee(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== N) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = T.relative[e[s].type]) c = [d(f(c), t)];
                else {
                    if ((t = T.filter[e[s].type].apply(null, e[s].matches))[P]) {
                        for (n = ++s; n < r && !T.relative[e[n].type]; n++);
                        return b(1 < s && f(c), 1 < s && g(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), t, s < n && p(e.slice(s, n)), n < r && p(e = e.slice(n)), n < r && g(e))
                    }
                    c.push(t)
                } return f(c)
        }

        function c(g, y) {
            var v = 0 < y.length,
                b = 0 < g.length,
                e = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        d = [],
                        f = N,
                        p = e || b && T.find.TAG("*", i),
                        h = W += null == f ? 1 : Math.random() || .1,
                        m = p.length;
                    for (i && (N = t === L || t || i); l !== m && null != (o = p[l]); l++) {
                        if (b && o) {
                            for (a = 0, t || o.ownerDocument === L || (D(o), n = !q); s = g[a++];)
                                if (s(o, t || L, n)) {
                                    r.push(o);
                                    break
                                } i && (W = h)
                        }
                        v && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, v && l !== u) {
                        for (a = 0; s = y[a++];) s(c, d, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--;) c[l] || d[l] || (d[l] = Y.call(r));
                            d = w(d)
                        }
                        K.apply(r, d), i && !e && 0 < d.length && 1 < u + y.length && x.uniqueSort(r)
                    }
                    return i && (W = h, N = f), c
                };
            return v ? u(e) : e
        }
        var h, y, T, C, E, S, k, j, N, _, A, D, L, H, q, F, M, R, O, P = "sizzle" + 1 * new Date,
            I = n.document,
            W = 0,
            B = 0,
            z = e(),
            $ = e(),
            X = e(),
            U = function(e, t) {
                return e === t && (A = !0), 0
            },
            V = 1 << 31,
            G = {}.hasOwnProperty,
            Q = [],
            Y = Q.pop,
            J = Q.push,
            K = Q.push,
            Z = Q.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(oe),
            fe = new RegExp("^" + re + "$"),
            pe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            be = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Te = function() {
                D()
            };
        try {
            K.apply(Q = Z.call(I.childNodes), I.childNodes), Q[I.childNodes.length].nodeType
        } catch (Ce) {
            K = {
                apply: Q.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        for (h in y = x.support = {}, E = x.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, D = x.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : I;
                return r !== L && 9 === r.nodeType && r.documentElement && (H = (L = r).documentElement, q = !E(L), (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), y.attributes = i(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), y.getElementsByTagName = i(function(e) {
                    return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
                }), y.getElementsByClassName = ge.test(L.getElementsByClassName), y.getById = i(function(e) {
                    return H.appendChild(e).id = P, !L.getElementsByName || !L.getElementsByName(P).length
                }), y.getById ? (T.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && q) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, T.filter.ID = function(e) {
                    var t = e.replace(xe, we);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function(e) {
                    var n = e.replace(xe, we);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), T.find.TAG = y.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : y.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }, T.find.CLASS = y.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && q) return t.getElementsByClassName(e)
                }, M = [], F = [], (y.qsa = ge.test(L.querySelectorAll)) && (i(function(e) {
                    H.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || F.push(".#.+[+~]")
                }), i(function(e) {
                    var t = L.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                })), (y.matchesSelector = ge.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                    y.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), M.push("!=", oe)
                }), F = F.length && new RegExp(F.join("|")), M = M.length && new RegExp(M.join("|")), t = ge.test(H.compareDocumentPosition), O = t || ge.test(H.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, U = t ? function(e, t) {
                    if (e === t) return A = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !y.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === I && O(I, e) ? -1 : t === L || t.ownerDocument === I && O(I, t) ? 1 : _ ? ee(_, e) - ee(_, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return A = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === L ? -1 : t === L ? 1 : i ? -1 : o ? 1 : _ ? ee(_, e) - ee(_, t) : 0;
                    if (i === o) return l(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? l(a[r], s[r]) : a[r] === I ? -1 : s[r] === I ? 1 : 0
                }), L
            }, x.matches = function(e, t) {
                return x(e, null, null, t)
            }, x.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== L && D(e), t = t.replace(ce, "='$1']"), y.matchesSelector && q && !X[t + " "] && (!M || !M.test(t)) && (!F || !F.test(t))) try {
                    var n = R.call(e, t);
                    if (n || y.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (Ce) {}
                return 0 < x(t, L, null, [e]).length
            }, x.contains = function(e, t) {
                return (e.ownerDocument || e) !== L && D(e), O(e, t)
            }, x.attr = function(e, t) {
                (e.ownerDocument || e) !== L && D(e);
                var n = T.attrHandle[t.toLowerCase()],
                    r = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !q) : undefined;
                return r !== undefined ? r : y.attributes || !q ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, x.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, x.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (A = !y.detectDuplicates, _ = !y.sortStable && e.slice(0), e.sort(U), A) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return _ = null, e
            }, C = x.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += C(t);
                return n
            }, (T = x.selectors = {
                cacheLength: 50,
                createPseudo: u,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || x.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && x.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(xe, we).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = z[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = x.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(ae, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, m, g) {
                        var y = "nth" !== h.slice(0, 3),
                            v = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === m && 0 === g ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== v ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                d = b && e.nodeName.toLowerCase(),
                                f = !n && !b,
                                p = !1;
                            if (c) {
                                if (y) {
                                    for (; l;) {
                                        for (a = e; a = a[l];)
                                            if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [v ? c.firstChild : c.lastChild], v && f) {
                                    for (p = (s = (r = (i = (o = (a = c)[P] || (a[P] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === W && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (p = s = 0) || u.pop();)
                                        if (1 === a.nodeType && ++p && a === e) {
                                            i[h] = [W, s, p];
                                            break
                                        }
                                } else if (f && (p = s = (r = (i = (o = (a = e)[P] || (a[P] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === W && r[1]), !1 === p)
                                    for (;
                                        (a = ++s && a && a[l] || (p = s = 0) || u.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++p || (f && ((i = (o = a[P] || (a[P] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [W, p]), a !== e)););
                                return (p -= g) === m || p % m == 0 && 0 <= p / m
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || x.error("unsupported pseudo: " + e);
                        return a[P] ? a(o) : 1 < a.length ? (t = [e, e, "", o], T.setFilters.hasOwnProperty(e.toLowerCase()) ? u(function(e, t) {
                            for (var n, r = a(e, o), i = r.length; i--;) e[n = ee(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: u(function(e) {
                        var r = [],
                            i = [],
                            s = k(e.replace(se, "$1"));
                        return s[P] ? u(function(e, t, n, r) {
                            for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: u(function(t) {
                        return function(e) {
                            return 0 < x(t, e).length
                        }
                    }),
                    contains: u(function(t) {
                        return t = t.replace(xe, we),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || C(e)).indexOf(t)
                            }
                    }),
                    lang: u(function(n) {
                        return fe.test(n || "") || x.error("unsupported lang: " + n), n = n.replace(xe, we).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = q ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === H
                    },
                    focus: function(e) {
                        return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: a(function() {
                        return [0]
                    }),
                    last: a(function(e, t) {
                        return [t - 1]
                    }),
                    eq: a(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: a(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: a(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: a(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: a(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = T.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[h] = r(h);
        for (h in {
                submit: !0,
                reset: !0
            }) T.pseudos[h] = o(h);
        return s.prototype = T.filters = T.pseudos, T.setFilters = new s, S = x.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = $[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (a = e, s = [], u = T.preFilter; a;) {
                for (o in n && !(r = ue.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = le.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(se, " ")
                    }), a = a.slice(n.length)), T.filter) !(r = pe[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? x.error(e) : $(e, s).slice(0)
        }, k = x.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--;)(o = p(t[n]))[P] ? r.push(o) : i.push(o);
                (o = X(e, c(i, r))).selector = e
            }
            return o
        }, j = x.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && S(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && y.getById && 9 === t.nodeType && q && T.relative[o[1].type]) {
                    if (!(t = (T.find.ID(a.matches[0].replace(xe, we), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                    if ((u = T.find[s]) && (r = u(a.matches[0].replace(xe, we), ve.test(o[0].type) && m(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && g(o))) return K.apply(n, r), n;
                        break
                    }
            }
            return (l || k(e, c))(r, t, !q, n, !t || ve.test(e) && m(t.parentNode) || t), n
        }, y.sortStable = P.split("").sort(U).join("") === P, y.detectDuplicates = !!A, D(), y.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || t("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), y.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || t("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || t(te, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), x
    }(C);
    pe.find = ve, pe.expr = ve.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ve.uniqueSort, pe.text = ve.getText, pe.isXMLDoc = ve.isXML, pe.contains = ve.contains;
    var be = function(e, t, n) {
            for (var r = [], i = n !== undefined;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && pe(e).is(n)) break;
                    r.push(e)
                } return r
        },
        xe = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        we = pe.expr.match.needsContext,
        Te = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ce = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? pe.find.matchesSelector(r, e) ? [r] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, pe.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (pe.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) pe.find(e, r[t], n);
            return (n = this.pushStack(1 < i ? pe.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(t(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(t(this, e || [], !0))
        },
        is: function(e) {
            return !!t(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var Ee, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (pe.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || Ee, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this));
        if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Se.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), Te.test(r[1]) && pe.isPlainObject(t))
                for (r in t) pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        if ((i = re.getElementById(r[2])) && i.parentNode) {
            if (i.id !== r[2]) return Ee.find(e);
            this.length = 1, this[0] = i
        }
        return this.context = re, this.selector = e, this
    }).prototype = pe.fn, Ee = pe(re);
    var ke = /^(?:parents|prev(?:Until|All))/,
        je = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    pe.fn.extend({
        has: function(e) {
            var t, n = pe(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (pe.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(1 < o.length ? pe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return n(e, "nextSibling")
        },
        prev: function(e) {
            return n(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return xe(e.firstChild)
        },
        contents: function(e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
        }
    }, function(r, i) {
        pe.fn[r] = function(e, t) {
            var n = pe.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = pe.filter(t, n)), 1 < this.length && (je[r] || (n = pe.uniqueSort(n)), ke.test(r) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var Ne, _e, Ae = /\S+/g;
    for (_e in pe.Callbacks = function(r) {
            r = "string" == typeof r ? c(r) : pe.extend({}, r);
            var i, e, t, n, o = [],
                a = [],
                s = -1,
                u = function() {
                    for (n = r.once, t = i = !0; a.length; s = -1)
                        for (e = a.shift(); ++s < o.length;) !1 === o[s].apply(e[0], e[1]) && r.stopOnFalse && (s = o.length, e = !1);
                    r.memory || (e = !1), i = !1, n && (o = e ? [] : "")
                },
                l = {
                    add: function() {
                        return o && (e && !i && (s = o.length - 1, a.push(e)), function n(e) {
                            pe.each(e, function(e, t) {
                                pe.isFunction(t) ? r.unique && l.has(t) || o.push(t) : t && t.length && "string" !== pe.type(t) && n(t)
                            })
                        }(arguments), e && !i && u()), this
                    },
                    remove: function() {
                        return pe.each(arguments, function(e, t) {
                            for (var n; - 1 < (n = pe.inArray(t, o, n));) o.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function(e) {
                        return e ? -1 < pe.inArray(e, o) : 0 < o.length
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return n = a = [], o = e = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return n = !0, e || l.disable(), this
                    },
                    locked: function() {
                        return !!n
                    },
                    fireWith: function(e, t) {
                        return n || (t = [e, (t = t || []).slice ? t.slice() : t], a.push(t), i || u()), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!t
                    }
                };
            return l
        }, pe.extend({
            Deferred: function(e) {
                var o = [
                        ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", pe.Callbacks("memory")]
                    ],
                    i = "pending",
                    a = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var i = arguments;
                            return pe.Deferred(function(r) {
                                pe.each(o, function(e, t) {
                                    var n = pe.isFunction(i[e]) && i[e];
                                    s[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && pe.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this === a ? r.promise() : this, n ? [e] : arguments)
                                    })
                                }), i = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? pe.extend(e, a) : a
                        }
                    },
                    s = {};
                return a.pipe = a.then, pe.each(o, function(e, t) {
                    var n = t[2],
                        r = t[3];
                    a[t[1]] = n.add, r && n.add(function() {
                        i = r
                    }, o[1 ^ e][2].disable, o[2][2].lock), s[t[0]] = function() {
                        return s[t[0] + "With"](this === s ? a : this, arguments), this
                    }, s[t[0] + "With"] = n.fireWith
                }), a.promise(s), e && e.call(s, s), s
            },
            when: function(e) {
                var i, t, n, r = 0,
                    o = ie.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0,
                    u = 1 === s ? e : pe.Deferred(),
                    l = function(t, n, r) {
                        return function(e) {
                            n[t] = this, r[t] = 1 < arguments.length ? ie.call(arguments) : e, r === i ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                        }
                    };
                if (1 < a)
                    for (i = new Array(a), t = new Array(a), n = new Array(a); r < a; r++) o[r] && pe.isFunction(o[r].promise) ? o[r].promise().progress(l(r, t, i)).done(l(r, n, o)).fail(u.reject) : --s;
                return s || u.resolveWith(n, o), u.promise()
            }
        }), pe.fn.ready = function(e) {
            return pe.ready.promise().done(e), this
        }, pe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? pe.readyWait++ : pe.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0) !== e && 0 < --pe.readyWait || (Ne.resolveWith(re, [pe]), pe.fn.triggerHandler && (pe(re).triggerHandler("ready"), pe(re).off("ready")))
            }
        }), pe.ready.promise = function(e) {
            if (!Ne)
                if (Ne = pe.Deferred(), "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll) C.setTimeout(pe.ready);
                else if (re.addEventListener) re.addEventListener("DOMContentLoaded", o), C.addEventListener("load", o);
            else {
                re.attachEvent("onreadystatechange", o), C.attachEvent("onload", o);
                var t = !1;
                try {
                    t = null == C.frameElement && re.documentElement
                } catch (n) {}
                t && t.doScroll && function r() {
                    if (!pe.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (n) {
                            return C.setTimeout(r, 50)
                        }
                        i(), pe.ready()
                    }
                }()
            }
            return Ne.promise(e)
        }, pe.ready.promise(), pe(de)) break;
    de.ownFirst = "0" === _e, de.inlineBlockNeedsLayout = !1, pe(function() {
            var e, t, n, r;
            (n = re.getElementsByTagName("body")[0]) && n.style && (t = re.createElement("div"), (r = re.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = re.createElement("div");
            de.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                de.deleteExpando = !1
            }
            e = null
        }();
    var De, Le = function(e) {
            var t = pe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        },
        He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        qe = /([A-Z])/g;
    pe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !l(e)
        },
        data: function(e, t, n) {
            return r(e, t, n)
        },
        removeData: function(e, t) {
            return a(e, t)
        },
        _data: function(e, t, n) {
            return r(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return a(e, t, !0)
        }
    }), pe.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (e !== undefined) return "object" == typeof e ? this.each(function() {
                pe.data(this, e)
            }) : 1 < arguments.length ? this.each(function() {
                pe.data(this, e, t)
            }) : o ? u(o, e, pe.data(o, e)) : undefined;
            if (this.length && (i = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
                for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && u(o, r = pe.camelCase(r.slice(5)), i[r]);
                pe._data(o, "parsedAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                pe.removeData(this, e)
            })
        }
    }), pe.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = pe._data(e, t), n && (!r || pe.isArray(n) ? r = pe._data(e, t, pe.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = pe.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = pe._queueHooks(e, t),
                a = function() {
                    pe.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return pe._data(e, n) || pe._data(e, n, {
                empty: pe.Callbacks("once memory").add(function() {
                    pe._removeData(e, t + "queue"), pe._removeData(e, n)
                })
            })
        }
    }), pe.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? pe.queue(this[0], t) : n === undefined ? this : this.each(function() {
                var e = pe.queue(this, t, n);
                pe._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && pe.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                pe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = pe.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;)(n = pe._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    }), de.shrinkWrapBlocks = function() {
        return null != De ? De : (De = !1, (t = re.getElementsByTagName("body")[0]) && t.style ? (e = re.createElement("div"), (n = re.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(re.createElement("div")).style.width = "5px", De = 3 !== e.offsetWidth), t.removeChild(n), De) : void 0);
        var e, t, n
    };
    var Fe, Me, Re, Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Pe = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$", "i"),
        Ie = ["Top", "Right", "Bottom", "Left"],
        We = function(e, t) {
            return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
        },
        Be = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === pe.type(n))
                for (s in i = !0, n) Be(e, t, s, n[s], !0, o, a);
            else if (r !== undefined && (i = !0, pe.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(pe(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        ze = /^(?:checkbox|radio)$/i,
        $e = /<([\w:-]+)/,
        Xe = /^$|\/(?:java|ecma)script/i,
        Ue = /^\s+/,
        Ve = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    Fe = re.createElement("div"), Me = re.createDocumentFragment(), Re = re.createElement("input"), Fe.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === Fe.firstChild.nodeType, de.tbody = !Fe.getElementsByTagName("tbody").length, de.htmlSerialize = !!Fe.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, Re.type = "checkbox", Re.checked = !0, Me.appendChild(Re), de.appendChecked = Re.checked, Fe.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!Fe.cloneNode(!0).lastChild.defaultValue, Me.appendChild(Fe), (Re = re.createElement("input")).setAttribute("type", "radio"), Re.setAttribute("checked", "checked"), Re.setAttribute("name", "t"), Fe.appendChild(Re), de.checkClone = Fe.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!Fe.addEventListener, Fe[pe.expando] = 1, de.attributes = !Fe.getAttribute(pe.expando);
    var Ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
    var Qe = /<|&#?\w+;/,
        Ye = /<tbody/i;
    ! function() {
        var e, t, n = re.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) t = "on" + e, (de[e] = t in C) || (n.setAttribute(t, "t"), de[e] = !1 === n.attributes[t].expando);
        n = null
    }();
    var Je = /^(?:input|select|textarea)$/i,
        Ke = /^key/,
        Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^(?:focusinfocus|focusoutblur)$/,
        tt = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = pe._data(e);
            if (g) {
                for (n.handler && (n = (u = n).handler, i = u.selector), n.guid || (n.guid = pe.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || ((c = g.handle = function(e) {
                        return void 0 === pe || e && pe.event.triggered === e.type ? undefined : pe.event.dispatch.apply(c.elem, arguments)
                    }).elem = e), s = (t = (t || "").match(Ae) || [""]).length; s--;) p = m = (o = tt.exec(t[s]) || [])[1], h = (o[2] || "").split(".").sort(), p && (l = pe.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = pe.event.special[p] || {}, d = pe.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && pe.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, u), (f = a[p]) || ((f = a[p] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), pe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = pe.hasData(e) && pe._data(e);
            if (g && (c = g.events)) {
                for (l = (t = (t || "").match(Ae) || [""]).length; l--;)
                    if (p = m = (s = tt.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = pe.event.special[p] || {}, f = c[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        u && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || pe.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) pe.event.remove(e, p + t[l], n, r, !0);
                pe.isEmptyObject(c) && (delete g.handle, pe._removeData(e, "events"))
            }
        },
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, d = [n || re],
                f = ce.call(e, "type") ? e.type : e,
                p = ce.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = l = n = n || re, 3 !== n.nodeType && 8 !== n.nodeType && !et.test(f + pe.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), o = f.indexOf(":") < 0 && "on" + f, (e = e[pe.expando] ? e : new pe.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = n), t = null == t ? [e] : pe.makeArray(t, [e]), u = pe.event.special[f] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!r && !u.noBubble && !pe.isWindow(n)) {
                    for (s = u.delegateType || f, et.test(s + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), l = a;
                    l === (n.ownerDocument || re) && d.push(l.defaultView || l.parentWindow || C)
                }
                for (c = 0;
                    (a = d[c++]) && !e.isPropagationStopped();) e.type = 1 < c ? s : u.bindType || f, (i = (pe._data(a, "events") || {})[e.type] && pe._data(a, "handle")) && i.apply(a, t), (i = o && a[o]) && i.apply && Le(a) && (e.result = i.apply(a, t), !1 === e.result && e.preventDefault());
                if (e.type = f, !r && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(d.pop(), t)) && Le(n) && o && n[f] && !pe.isWindow(n)) {
                    (l = n[o]) && (n[o] = null), pe.event.triggered = f;
                    try {
                        n[f]()
                    } catch (h) {}
                    pe.event.triggered = undefined, l && (n[o] = l)
                }
                return e.result
            }
        },
        dispatch: function(e) {
            e = pe.event.fix(e);
            var t, n, r, i, o, a = [],
                s = ie.call(arguments),
                u = (pe._data(this, "events") || {})[e.type] || [],
                l = pe.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (a = pe.event.handlers.call(this, e, u), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, (r = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) !== undefined && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; n < s; n++) r[i = (o = t[n]).selector + " "] === undefined && (r[i] = o.needsContext ? -1 < pe(i, this).index(u) : pe.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    } return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[pe.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ze.test(i) ? this.mouseHooks : Ke.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new pe.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = o.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = (r = e.target.ownerDocument || re).documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || o === undefined || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === h() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var r = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }, pe.removeEvent = re.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
    }, pe.Event = function(e, t) {
        if (!(this instanceof pe.Event)) return new pe.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? f : p) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), this[pe.expando] = !0
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        pe.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = this,
                    r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === n || pe.contains(n, r)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), de.submit || (pe.event.special.submit = {
        setup: function() {
            if (pe.nodeName(this, "form")) return !1;
            pe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : undefined;
                n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), pe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            if (pe.nodeName(this, "form")) return !1;
            pe.event.remove(this, "._submit")
        }
    }), de.change || (pe.event.special.change = {
        setup: function() {
            if (Je.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), pe.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
            })), !1;
            pe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Je.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }), pe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return pe.event.remove(this, "._change"), !Je.test(this.nodeName)
        }
    }), de.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            pe.event.simulate(r, e.target, pe.event.fix(e))
        };
        pe.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = pe._data(e, r);
                t || e.addEventListener(n, i, !0), pe._data(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = pe._data(e, r) - 1;
                t ? pe._data(e, r, t) : (e.removeEventListener(n, i, !0), pe._removeData(e, r))
            }
        }
    }), pe.fn.extend({
        on: function(e, t, n, r) {
            return x(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return x(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = p), this.each(function() {
                pe.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        },
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return pe.event.trigger(e, t, n, !0)
        }
    });
    var nt = / jQuery\d+="(?:null|\d+)"/g,
        rt = new RegExp("<(?:" + Ve + ")[\\s/>]", "i"),
        it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ot = /<script|<style|<link/i,
        at = /checked\s*(?:[^=]|=\s*.checked.)/i,
        st = /^true\/(.*)/,
        ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        lt = g(re).appendChild(re.createElement("div"));
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(it, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u = pe.contains(e.ownerDocument, e);
            if (de.html5Clone || pe.isXMLDoc(e) || !rt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(o = lt.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (r = y(o), s = y(e), a = 0; null != (i = s[a]); ++a) r[a] && k(i, r[a]);
            if (t)
                if (n)
                    for (s = s || y(e), r = r || y(o), a = 0; null != (i = s[a]); a++) S(i, r[a]);
                else S(e, o);
            return 0 < (r = y(o, "script")).length && v(r, !u && y(e, "script")), r = s = i = null, o
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = pe.expando, u = pe.cache, l = de.attributes, c = pe.event.special; null != (n = e[a]); a++)
                if ((t || Le(n)) && (o = (i = n[s]) && u[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), ne.push(i))
                }
        }
    }), pe.fn.extend({
        domManip: j,
        detach: function(e) {
            return N(this, e, !0)
        },
        remove: function(e) {
            return N(this, e)
        },
        text: function(e) {
            return Be(this, function(e) {
                return e === undefined ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return j(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || w(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return j(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = w(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(y(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Be(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(nt, "") : undefined;
                if ("string" == typeof e && !ot.test(e) && (de.htmlSerialize || !rt.test(e)) && (de.leadingWhitespace || !Ue.test(e)) && !Ge[($e.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (pe.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return j(this, arguments, function(e) {
                var t = this.parentNode;
                pe.inArray(this, n) < 0 && (pe.cleanData(y(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        pe.fn[e] = function(e) {
            for (var t, n = 0, r = [], i = pe(e), o = i.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), pe(i[n])[a](t), ae.apply(r, t.get());
            return this.pushStack(r)
        }
    });
    var ct, dt = {
            HTML: "block",
            BODY: "block"
        },
        ft = /^margin/,
        pt = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$", "i"),
        ht = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        },
        mt = re.documentElement;
    ! function() {
        function e() {
            var e, t, n = re.documentElement;
            n.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", r = o = u = !1, i = s = !0, C.getComputedStyle && (t = C.getComputedStyle(c), r = "1%" !== (t || {}).top, u = "2px" === (t || {}).marginLeft, o = "4px" === (t || {
                width: "4px"
            }).width, c.style.marginRight = "50%", i = "4px" === (t || {
                marginRight: "4px"
            }).marginRight, (e = c.appendChild(re.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", s = !parseFloat((C.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", (a = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", (
                e = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", a = 0 === e[0].offsetHeight)), n.removeChild(l)
        }
        var r, i, o, a, s, u, l = re.createElement("div"),
            c = re.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === c.style.opacity, de.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === c.style.backgroundClip, (l = re.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), de.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, pe.extend(de, {
            reliableHiddenOffsets: function() {
                return null == r && e(), a
            },
            boxSizingReliable: function() {
                return null == r && e(), o
            },
            pixelMarginRight: function() {
                return null == r && e(), i
            },
            pixelPosition: function() {
                return null == r && e(), r
            },
            reliableMarginRight: function() {
                return null == r && e(), s
            },
            reliableMarginLeft: function() {
                return null == r && e(), u
            }
        }))
    }();
    var gt, yt, vt = /^(top|right|bottom|left)$/;
    C.getComputedStyle ? (gt = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e)
    }, yt = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return "" !== (a = (n = n || gt(e)) ? n.getPropertyValue(t) || n[t] : undefined) && a !== undefined || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), n && !de.pixelMarginRight() && pt.test(a) && ft.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), a === undefined ? a : a + ""
    }) : mt.currentStyle && (gt = function(e) {
        return e.currentStyle
    }, yt = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return null == (a = (n = n || gt(e)) ? n[t] : undefined) && s && s[t] && (a = s[t]), pt.test(a) && !vt.test(t) && (r = s.left, (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), a === undefined ? a : a + "" || "auto"
    });
    var bt = /alpha\([^)]*\)/i,
        xt = /opacity\s*=\s*([^)]*)/i,
        wt = /^(none|table(?!-c[ea]).+)/,
        Tt = new RegExp("^(" + Oe + ")(.*)$", "i"),
        Ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Et = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        St = ["Webkit", "O", "Moz", "ms"],
        kt = re.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = yt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": de.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = pe.camelCase(t),
                    u = e.style;
                if (t = pe.cssProps[s] || (pe.cssProps[s] = L(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], n === undefined) return a && "get" in a && (i = a.get(e, !1, r)) !== undefined ? i : u[t];
                if ("string" === (o = typeof n) && (i = Pe.exec(n)) && i[1] && (n = d(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (pe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && (n = a.set(e, n, r)) === undefined))) try {
                    u[t] = n
                } catch (l) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = pe.camelCase(t);
            return t = pe.cssProps[s] || (pe.cssProps[s] = L(s) || s), (a = pe.cssHooks[t] || pe.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), o === undefined && (o = yt(e, t, r)), "normal" === o && t in Et && (o = Et[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), pe.each(["height", "width"], function(e, i) {
        pe.cssHooks[i] = {
            get: function(e, t, n) {
                if (t) return wt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? ht(e, Ct, function() {
                    return M(e, i, n)
                }) : M(e, i, n)
            },
            set: function(e, t, n) {
                var r = n && gt(e);
                return q(e, t, n ? F(e, i, n, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), de.opacity || (pe.cssHooks.opacity = {
        get: function(e, t) {
            return xt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === pe.trim(o.replace(bt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = bt.test(o) ? o.replace(bt, i) : o + " " + i)
        }
    }), pe.cssHooks.marginRight = D(de.reliableMarginRight, function(e, t) {
        if (t) return ht(e, {
            display: "inline-block"
        }, yt, [e, "marginRight"])
    }), pe.cssHooks.marginLeft = D(de.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(yt(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ht(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        pe.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Ie[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, ft.test(i) || (pe.cssHooks[i + o].set = q)
    }), pe.fn.extend({
        css: function(e, t) {
            return Be(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (pe.isArray(t)) {
                    for (r = gt(e), i = t.length; a < i; a++) o[t[a]] = pe.css(e, t[a], !1, r);
                    return o
                }
                return n !== undefined ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return H(this, !0)
        },
        hide: function() {
            return H(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                We(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }), (pe.Tween = R).prototype = {
        constructor: R,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = R.propHooks[this.prop];
            return e && e.get ? e.get(this) : R.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = R.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, pe.fx = R.prototype.init, pe.fx.step = {};
    var jt, Nt, _t, At, Dt, Lt, Ht, qt = /^(?:toggle|show|hide)$/,
        Ft = /queueHooks$/;
    pe.Animation = pe.extend(z, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return d(n.elem, e, Pe.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
        },
        prefilters: [W],
        prefilter: function(e, t) {
            t ? z.prefilters.unshift(e) : z.prefilters.push(e)
        }
    }), pe.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? pe.extend({}, e) : {
            complete: n || !n && t || pe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !pe.isFunction(t) && t
        };
        return r.duration = pe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in pe.fx.speeds ? pe.fx.speeds[r.duration] : pe.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            pe.isFunction(r.old) && r.old.call(this), r.queue && pe.dequeue(this, r.queue)
        }, r
    }, pe.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(We).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = pe.isEmptyObject(t),
                o = pe.speed(e, n, r),
                a = function() {
                    var e = z(this, pe.extend({}, t), o);
                    (i || pe._data(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = undefined), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = pe.timers,
                    r = pe._data(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && Ft.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || pe.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = pe._data(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = pe.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, pe.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), pe.each(["toggle", "show", "hide"], function(e, r) {
        var i = pe.fn[r];
        pe.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(P(r, !0), e, t, n)
        }
    }), pe.each({
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        pe.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), pe.timers = [], pe.fx.tick = function() {
        var e, t = pe.timers,
            n = 0;
        for (jt = pe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || pe.fx.stop(), jt = undefined
    }, pe.fx.timer = function(e) {
        pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
    }, pe.fx.interval = 13, pe.fx.start = function() {
        Nt || (Nt = C.setInterval(pe.fx.tick, pe.fx.interval))
    }, pe.fx.stop = function() {
        C.clearInterval(Nt), Nt = null
    }, pe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, pe.fn.delay = function(r, e) {
        return r = pe.fx && pe.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, At = re.createElement("input"), Dt = re.createElement("div"), Lt = re.createElement("select"), Ht = Lt.appendChild(re.createElement("option")), (Dt = re.createElement("div")).setAttribute("className", "t"), Dt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", _t = Dt.getElementsByTagName("a")[0], At.setAttribute("type", "checkbox"), Dt.appendChild(At), (_t = Dt.getElementsByTagName("a")[0]).style.cssText = "top:1px", de.getSetAttribute = "t" !== Dt.className, de.style = /top/.test(_t.getAttribute("style")), de.hrefNormalized = "/a" === _t.getAttribute("href"), de.checkOn = !!At.value, de.optSelected = Ht.selected, de.enctype = !!re.createElement("form").enctype, Lt.disabled = !0, de.optDisabled = !Ht.disabled, (At = re.createElement("input")).setAttribute("value", ""), de.input = "" === At.getAttribute("value"), At.value = "t", At.setAttribute("type", "radio"), de.radioValue = "t" === At.value;
    var Mt = /\r/g,
        Rt = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = pe.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, pe(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : pe.isArray(t) && (t = pe.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, t, "value") !== undefined || (this.value = t))
            })) : t ? (r = pe.valHooks[t.type] || pe.valHooks[t.nodeName.toLowerCase()]) && "get" in r && (e = r.get(t, "value")) !== undefined ? e : "string" == typeof(e = t.value) ? e.replace(Mt, "") : null == e ? "" : e : void 0
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e)).replace(Rt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                        if (((n = r[u]).selected || u === i) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(), o) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = pe.makeArray(t), a = i.length; a--;)
                        if (r = i[a], -1 < pe.inArray(pe.valHooks.option.get(r), o)) try {
                            r.selected = n = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), pe.each(["radio", "checkbox"], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                if (pe.isArray(t)) return e.checked = -1 < pe.inArray(pe(e).val(), t)
            }
        }, de.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ot, Pt, It = pe.expr.attrHandle,
        Wt = /^(?:checked|selected)$/i,
        Bt = de.getSetAttribute,
        zt = de.input;
    pe.fn.extend({
        attr: function(e, t) {
            return Be(this, pe.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }), pe.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), i = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Pt : Ot)), n !== undefined ? null === n ? void pe.removeAttr(e, t) : i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = pe.find.attr(e, t)) ? undefined : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(Ae);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? zt && Bt || !Wt.test(n) ? e[r] = !1 : e[pe.camelCase("default-" + n)] = e[r] = !1 : pe.attr(e, n, ""), e.removeAttribute(Bt ? n : r)
        }
    }), Pt = {
        set: function(e, t, n) {
            return !1 === t ? pe.removeAttr(e, n) : zt && Bt || !Wt.test(n) ? e.setAttribute(!Bt && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = It[t] || pe.find.attr;
        zt && Bt || !Wt.test(t) ? It[t] = function(e, t, n) {
            var r, i;
            return n || (i = It[t], It[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, It[t] = i), r
        } : It[t] = function(e, t, n) {
            if (!n) return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), zt && Bt || (pe.attrHooks.value = {
        set: function(e, t, n) {
            if (!pe.nodeName(e, "input")) return Ot && Ot.set(e, t, n);
            e.defaultValue = t
        }
    }), Bt || (Ot = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, It.id = It.name = It.coords = function(e, t, n) {
        var r;
        if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, pe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: Ot.set
    }, pe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Ot.set(e, "" !== t && t, n)
        }
    }, pe.each(["width", "height"], function(e, n) {
        pe.attrHooks[n] = {
            set: function(e, t) {
                if ("" === t) return e.setAttribute(n, "auto"), t
            }
        }
    })), de.style || (pe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || undefined
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var $t = /^(?:input|select|textarea|button|object)$/i,
        Xt = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return Be(this, pe.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(t) {
            return t = pe.propFix[t] || t, this.each(function() {
                try {
                    this[t] = undefined, delete this[t]
                } catch (e) {}
            })
        }
    }), pe.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, i = pe.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : $t.test(e.nodeName) || Xt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), de.hrefNormalized || pe.each(["href", "src"], function(e, t) {
        pe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), de.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pe.propFix[this.toLowerCase()] = this
    }), de.enctype || (pe.propFix.enctype = "encoding");
    var Ut = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (pe.isFunction(t)) return this.each(function(e) {
                pe(this).addClass(t.call(this, e, $(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(Ae) || []; n = this[u++];)
                    if (i = $(n), r = 1 === n.nodeType && (" " + i + " ").replace(Ut, " ")) {
                        for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = pe.trim(r)) && pe.attr(n, "class", s)
                    } return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (pe.isFunction(t)) return this.each(function(e) {
                pe(this).removeClass(t.call(this, e, $(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Ae) || []; n = this[u++];)
                    if (i = $(n), r = 1 === n.nodeType && (" " + i + " ").replace(Ut, " ")) {
                        for (a = 0; o = e[a++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (s = pe.trim(r)) && pe.attr(n, "class", s)
                    } return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : pe.isFunction(i) ? this.each(function(e) {
                pe(this).toggleClass(i.call(this, e, $(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if ("string" === o)
                    for (t = 0, n = pe(this), r = i.match(Ae) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else i !== undefined && "boolean" !== o || ((e = $(this)) && pe._data(this, "__className__", e), pe.attr(this, "class", e || !1 === i ? "" : pe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + $(n) + " ").replace(Ut, " ").indexOf(t)) return !0;
            return !1
        }
    }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        pe.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Vt = C.location,
        Gt = pe.now(),
        Qt = /\?/,
        Yt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function(e) {
        if (C.JSON && C.JSON.parse) return C.JSON.parse(e + "");
        var i, o = null,
            t = pe.trim(e + "");
        return t && !pe.trim(t.replace(Yt, function(e, t, n, r) {
            return i && t && (o = 0), 0 === o ? e : (i = n || t, o += !r - !n, "")
        })) ? Function("return " + t)() : pe.error("Invalid JSON: " + e)
    }, pe.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            C.DOMParser ? t = (new C.DOMParser).parseFromString(e, "text/xml") : ((t = new C.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
        } catch (n) {
            t = undefined
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + e), t
    };
    var Jt = /#.*$/,
        Kt = /([?&])_=[^&]*/,
        Zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        en = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        tn = /^(?:GET|HEAD)$/,
        nn = /^\/\//,
        rn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        on = {},
        an = {},
        sn = "*/".concat("*"),
        un = Vt.href,
        ln = rn.exec(un.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: un,
            type: "GET",
            isLocal: en.test(ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": sn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pe.parseJSON,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? V(V(e, pe.ajaxSettings), t) : V(pe.ajaxSettings, e)
        },
        ajaxPrefilter: X(on),
        ajaxTransport: X(an),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, o, a, s, u, l = t;
                2 !== w && (w = 2, f && C.clearTimeout(f), h = undefined, d = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = G(m, T, n)), s = Q(m, s, T, i), i ? (m.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (pe.lastModified[c] = u), (u = T.getResponseHeader("etag")) && (pe.etag[c] = u)), 204 === e || "HEAD" === m.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? v.resolveWith(g, [o, l, T]) : v.rejectWith(g, [T, l, a]), T.statusCode(x), x = undefined, p && y.trigger(i ? "ajaxSuccess" : "ajaxError", [T, m, i ? o : a]), b.fireWith(g, [T, l]), p && (y.trigger("ajaxComplete", [T, m]), --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = undefined), t = t || {};
            var r, i, c, d, f, p, h, o, m = pe.ajaxSetup({}, t),
                g = m.context || m,
                y = m.context && (g.nodeType || g.jquery) ? pe(g) : pe.event,
                v = pe.Deferred(),
                b = pe.Callbacks("once memory"),
                x = m.statusCode || {},
                a = {},
                s = {},
                w = 0,
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!o)
                                for (o = {}; t = Zt.exec(d);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? d : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = s[n] = s[n] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) x[t] = [x[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return h && h.abort(t), n(0, t), this
                    }
                };
            if (v.promise(T).complete = b.add, T.success = T.done, T.error = T.fail, m.url = ((e || m.url || un) + "").replace(Jt, "").replace(nn, ln[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = pe.trim(m.dataType || "*").toLowerCase().match(Ae) || [""], null == m.crossDomain && (r = rn.exec(m.url.toLowerCase()), m.crossDomain = !(!r || r[1] === ln[1] && r[2] === ln[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (ln[3] || ("http:" === ln[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = pe.param(m.data, m.traditional)), U(on, m, t, T), 2 === w) return T;
            for (i in (p = pe.event && m.global) && 0 == pe.active++ && pe.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !tn.test(m.type), c = m.url, m.hasContent || (m.data && (c = m.url += (Qt.test(c) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = Kt.test(c) ? c.replace(Kt, "$1_=" + Gt++) : c + (Qt.test(c) ? "&" : "?") + "_=" + Gt++)), m.ifModified && (pe.lastModified[c] && T.setRequestHeader("If-Modified-Since", pe.lastModified[c]), pe.etag[c] && T.setRequestHeader("If-None-Match", pe.etag[c])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(i, m.headers[i]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, T, m) || 2 === w)) return T.abort();
            for (i in u = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[i](m[i]);
            if (h = U(an, m, t, T)) {
                if (T.readyState = 1, p && y.trigger("ajaxSend", [T, m]), 2 === w) return T;
                m.async && 0 < m.timeout && (f = C.setTimeout(function() {
                    T.abort("timeout")
                }, m.timeout));
                try {
                    w = 1, h.send(a, n)
                } catch (l) {
                    if (!(w < 2)) throw l;
                    n(-1, l)
                }
            } else n(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, undefined, t, "script")
        }
    }), pe.each(["get", "post"], function(e, i) {
        pe[i] = function(e, t, n, r) {
            return pe.isFunction(t) && (r = r || n, n = t, t = undefined), pe.ajax(pe.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, pe.isPlainObject(e) && e))
        }
    }), pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, pe.fn.extend({
        wrapAll: function(t) {
            if (pe.isFunction(t)) return this.each(function(e) {
                pe(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = pe(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return pe.isFunction(n) ? this.each(function(e) {
                pe(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = pe(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = pe.isFunction(t);
            return this.each(function(e) {
                pe(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), pe.expr.filters.hidden = function(e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : J(e)
    }, pe.expr.filters.visible = function(e) {
        return !pe.expr.filters.hidden(e)
    };
    var cn = /%20/g,
        dn = /\[\]$/,
        fn = /\r?\n/g,
        pn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = pe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (t === undefined && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) K(n, e[n], t, i);
        return r.join("&").replace(cn, "+")
    }, pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && hn.test(this.nodeName) && !pn.test(e) && (this.checked || !ze.test(e))
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }), pe.ajaxSettings.xhr = C.ActiveXObject !== undefined ? function() {
        return this.isLocal ? ee() : 8 < re.documentMode ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    } : Z;
    var mn = 0,
        gn = {},
        yn = pe.ajaxSettings.xhr();
    C.attachEvent && C.attachEvent("onunload", function() {
        for (var e in gn) gn[e](undefined, !0)
    }), de.cors = !!yn && "withCredentials" in yn, (yn = de.ajax = !!yn) && pe.ajaxTransport(function(l) {
        var c;
        if (!l.crossDomain || de.cors) return {
            send: function(e, a) {
                var t, s = l.xhr(),
                    u = ++mn;
                if (s.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)
                    for (t in l.xhrFields) s[t] = l.xhrFields[t];
                for (t in l.mimeType && s.overrideMimeType && s.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) e[t] !== undefined && s.setRequestHeader(t, e[t] + "");
                s.send(l.hasContent && l.data || null), c = function(e, t) {
                    var n, r, i;
                    if (c && (t || 4 === s.readyState))
                        if (delete gn[u], c = undefined, s.onreadystatechange = pe.noop, t) 4 !== s.readyState && s.abort();
                        else {
                            i = {}, n = s.status, "string" == typeof s.responseText && (i.text = s.responseText);
                            try {
                                r = s.statusText
                            } catch (o) {
                                r = ""
                            }
                            n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = i.text ? 200 : 404
                        } i && a(n, r, i, s.getAllResponseHeaders())
                }, l.async ? 4 === s.readyState ? C.setTimeout(c) : s.onreadystatechange = gn[u] = c : c()
            },
            abort: function() {
                c && c(undefined, !0)
            }
        }
    }), pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e), e
            }
        }
    }), pe.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), pe.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var r, i = re.head || pe("head")[0] || re.documentElement;
            return {
                send: function(e, n) {
                    (r = re.createElement("script")).async = !0, t.scriptCharset && (r.charset = t.scriptCharset), r.src = t.url, r.onload = r.onreadystatechange = function(e, t) {
                        (t || !r.readyState || /loaded|complete/.test(r.readyState)) && (r.onload = r.onreadystatechange = null, r.parentNode && r.parentNode.removeChild(r), r = null, t || n(200, "success"))
                    }, i.insertBefore(r, i.firstChild)
                },
                abort: function() {
                    r && r.onload(undefined, !0)
                }
            }
        }
    });
    var vn = [],
        bn = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = vn.pop() || pe.expando + "_" + Gt++;
            return this[e] = !0, e
        }
    }), pe.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (bn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && bn.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = pe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(bn, "$1" + r) : !1 !== e.jsonp && (e.url += (Qt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || pe.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            i === undefined ? pe(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, vn.push(r)), o && pe.isFunction(i) && i(o[0]), o = i = undefined
        }), "script"
    }), pe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || re;
        var r = Te.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = m([e], t, i), i && i.length && pe(i).remove(), pe.merge([], r.childNodes))
    };
    var xn = pe.fn.load;
    pe.fn.load = function(e, t, n) {
        if ("string" != typeof e && xn) return xn.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (i = "POST"), 0 < a.length && pe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), pe.expr.filters.animated = function(t) {
        return pe.grep(pe.timers, function(e) {
            return t === e.elem
        }).length
    }, pe.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = pe.css(e, "position"),
                c = pe(e),
                d = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = pe.css(e, "top"), u = pe.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < pe.inArray("auto", [o, u]) ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, pe.fn.extend({
        offset: function(t) {
            if (arguments.length) return t === undefined ? this : this.each(function(e) {
                pe.offset.setOffset(this, t, e)
            });
            var e, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            return o ? (e = o.documentElement, pe.contains(e, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = te(o), {
                top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : r) : void 0
        },

        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === pe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - pe.css(r, "marginTop", !0),
                    left: t.left - n.left - pe.css(r, "marginLeft", !0)
                }
            }
        },

        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent;
                return e || mt
            })
        }
    }), pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = /Y/.test(i);
        pe.fn[t] = function(e) {
            return Be(this, function(e, t, n) {
                var r = te(e);

                if (n === undefined)
                    return r ? i in r ? r[i] : r.document.documentElement[t] : e[t];

                r ? r.scrollTo(o ? pe(r).scrollLeft() : n, o ? n : pe(r).scrollTop()) : e[t] = n
            }, t, e, arguments.length, null);
        }
    }), pe.each(["top", "left"], function(e, n) {
        pe.cssHooks[n] = D(de.pixelPosition, function(e, t) {
            if (t) return t = yt(e, n), pt.test(t) ? pe(e).position()[n] + "px" : t
        })
    }), pe.each({
        Height: "height",
        Width: "width"
    }, function(o, a) {
        pe.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function(r, e) {
            pe.fn[e] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");

                return Be(this, function(e, t, n) {
                    var r;

                    return pe.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : n === undefined ? pe.css(e, t, i) : pe.style(e, t, n, i);
                }, a, n ? e : undefined, n, null);
            }
        })
    }), pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },

        unbind: function(e, t) {
            return this.off(e, null, t);
        },

        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },

        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), pe.fn.size = function() {
        return this.length;
    }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe;
    });
    var wn = C.jQuery,
        Tn = C.$;
    return pe.noConflict = function(e) {
        return C.$ === pe && (C.$ = Tn), e && C.jQuery === pe && (C.jQuery = wn), pe;
    }, e || (C.jQuery = C.$ = pe), pe
}),
function() {
    "use strict";
    var e = function(c, u) {
        var l;

        c.rails !== u && c.error("jquery-ujs has already been loaded...");

        var e = c(document);

        c.rails = l = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form:not([data-turbo=true])",
            formInputClickSelector: "form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",

            csrfToken: function() {
                return c("meta[name=csrf-token]").attr("content");
            },

            csrfParam: function() {
                return c("meta[name=csrf-param]").attr("content");
            },

            CSRFProtection: function(e) {
                var t = l.csrfToken();
                t && e.setRequestHeader("X-CSRF-Token", t);
            },

            refreshCSRFTokens: function() {
                c('form input[name="' + l.csrfParam() + '"]').val(l.csrfToken());
            },

            fire: function(e, t, n) {
                var r = c.Event(t);

                return e.trigger(r, n), !1 !== r.result;
            },

            confirm: function(e) {
                return confirm(e);
            },

            ajax: function(e) {
                return c.ajax(e);
            },

            href: function(e) {
                return e[0].href;
            },

            isRemote: function(e) {
                return e.data("remote") !== u && !1 !== e.data("remote");
            },

            handleRemote: function(r) {
                var e, t, n, i, o, a;

                if (l.fire(r, "ajax:before")) {
                    if (i = r.data("with-credentials") || null, o = r.data("type") || c.ajaxSettings && c.ajaxSettings.dataType, r.is("form")) {
                        e = r.data("ujs:submit-button-formmethod") || r.attr("method"), t = r.data("ujs:submit-button-formaction") || r.attr("action"), n = c(r[0]).serializeArray();
                        var s = r.data("ujs:submit-button");
                        s && (n.push(s), r.data("ujs:submit-button", null)), r.data("ujs:submit-button-formmethod", null), r.data("ujs:submit-button-formaction", null)
                    } else r.is(l.inputChangeSelector) ? (e = r.data("method"), t = r.data("url"), n = r.serialize(), r.data("params") && (n = n + "&" + r.data("params"))) : r.is(l.buttonClickSelector) ? (e = r.data("method") || "get", t = r.data("url"), n = r.serialize(), r.data("params") && (n = n + "&" + r.data("params"))) : (e = r.data("method"), t = l.href(r), n = r.data("params") || null);
                    return a = {
                        type: e || "GET",
                        data: n,
                        dataType: o,

                        beforeSend: function(e, t) {
                            if (t.dataType === u && e.setRequestHeader("accept", "*/*;q=0.5, " + t.accepts.script), !l.fire(r, "ajax:beforeSend", [e, t])) return !1;
                            r.trigger("ajax:send", e)
                        },

                        success: function(e, t, n) {
                            r.trigger("ajax:success", [e, t, n])
                        },

                        complete: function(e, t) {
                            r.trigger("ajax:complete", [e, t])
                        },

                        error: function(e, t, n) {
                            r.trigger("ajax:error", [e, t, n])
                        },

                        crossDomain: l.isCrossDomain(t)
                    }, i && (a.xhrFields = {
                        withCredentials: i
                    }), t && (a.url = t), l.ajax(a);
                }

                return !1;
            },

            isCrossDomain: function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
                } catch (r) {
                    return !0
                }
            },

            handleMethod: function(e) {
                var t = l.href(e),
                    n = e.data("method"),
                    r = e.attr("target"),
                    i = l.csrfToken(),
                    o = l.csrfParam(),
                    a = c('<form method="post" action="' + t + '"></form>'),
                    s = '<input name="_method" value="' + n + '" type="hidden" />';
                o === u || i === u || l.isCrossDomain(t) || (s += '<input name="' + o + '" value="' + i + '" type="hidden" />'), r && a.attr("target", r), a.hide().append(s).appendTo("body"), a.submit()
            },

            formElements: function(e, t) {
                return e.is("form") ? c(e[0].elements).filter(t) : e.find(t)
            },

            disableFormElements: function(e) {
                l.formElements(e, l.disableSelector).each(function() {
                    l.disableFormElement(c(this))
                })
            },

            disableFormElement: function(e) {
                var t, n;
                t = e.is("button") ? "html" : "val", (n = e.data("disable-with")) !== u && (e.data("ujs:enable-with", e[t]()), e[t](n)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
            },

            enableFormElements: function(e) {
                l.formElements(e, l.enableSelector).each(function() {
                    l.enableFormElement(c(this))
                })
            },

            enableFormElement: function(e) {
                var t = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") !== u && (e[t](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
            },

            allowAction: function(e) {
                var t, n = e.data("confirm"),
                    r = !1;
                if (!n) return !0;
                if (l.fire(e, "confirm")) {
                    try {
                        r = l.confirm(n)
                    } catch (i) {
                        (console.error || console.log).call(console, i.stack || i)
                    }
                    t = l.fire(e, "confirm:complete", [r])
                }
                return r && t
            },

            blankInputs: function(e, t, n) {
                var r, i, o, a = c(),
                    s = t || "input,textarea",
                    u = e.find(s),
                    l = {};
                return u.each(function() {
                    (r = c(this)).is("input[type=radio]") ? (o = r.attr("name"), l[o] || (0 === e.find('input[type=radio]:checked[name="' + o + '"]').length && (i = e.find('input[type=radio][name="' + o + '"]'), a = a.add(i)), l[o] = o)) : (r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val()) === n && (a = a.add(r))
                }), !!a.length && a
            },

            nonBlankInputs: function(e, t) {
                return l.blankInputs(e, t, !0)
            },

            stopEverything: function(e) {
                return c(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
            },

            disableElement: function(e) {
                var t = e.data("disable-with");
                t !== u && (e.data("ujs:enable-with", e.html()), e.html(t)), e.on("click.railsDisable", function(e) {
                    return l.stopEverything(e)
                }), e.data("ujs:disabled", !0)
            },

            enableElement: function(e) {
                e.data("ujs:enable-with") !== u && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.off("click.railsDisable"), e.removeData("ujs:disabled")
            }
        }, l.fire(e, "rails:attachBindings") && (c.ajaxPrefilter(function(e, t, n) {
            e.crossDomain || l.CSRFProtection(n)
        }), c(window).on("pageshow.rails", function() {
            c(c.rails.enableSelector).each(function() {
                var e = c(this);
                e.data("ujs:disabled") && c.rails.enableFormElement(e)
            }), c(c.rails.linkDisableSelector).each(function() {
                var e = c(this);
                e.data("ujs:disabled") && c.rails.enableElement(e)
            })
        }), e.on("ajax:complete", l.linkDisableSelector, function() {
            l.enableElement(c(this))
        }), e.on("ajax:complete", l.buttonDisableSelector, function() {
            l.enableFormElement(c(this))
        }), e.on("click.rails", l.linkClickSelector, function(e) {
            var t = c(this),
                n = t.data("method"),
                r = t.data("params"),
                i = e.metaKey || e.ctrlKey;
                
            if (!l.allowAction(t)) return l.stopEverything(e);
            if (!i && t.is(l.linkDisableSelector) && l.disableElement(t), l.isRemote(t)) {
                if (i && (!n || "GET" === n) && !r) return !0;
                var o = l.handleRemote(t);
                return !1 === o ? l.enableElement(t) : o.fail(function() {
                    l.enableElement(t)
                }), !1
            }
            return n ? (l.handleMethod(t), !1) : void 0
        }), e.on("click.rails", l.buttonClickSelector, function(e) {
            var t = c(this);
            if (!l.allowAction(t) || !l.isRemote(t)) return l.stopEverything(e);
            t.is(l.buttonDisableSelector) && l.disableFormElement(t);
            var n = l.handleRemote(t);
            return !1 === n ? l.enableFormElement(t) : n.fail(function() {
                l.enableFormElement(t)
            }), !1
        }), e.on("change.rails", l.inputChangeSelector, function(e) {
            var t = c(this);
            return l.allowAction(t) && l.isRemote(t) ? (l.handleRemote(t), !1) : l.stopEverything(e)
        }), e.on("submit.rails", l.formSubmitSelector, function(e) {
            var t, n, r = c(this),
                i = l.isRemote(r);
            if (!l.allowAction(r)) return l.stopEverything(e);
            if (r.attr("novalidate") === u)
                if (r.data("ujs:formnovalidate-button") === u) {
                    if ((t = l.blankInputs(r, l.requiredInputSelector, !1)) && l.fire(r, "ajax:aborted:required", [t])) return l.stopEverything(e)
                } else r.data("ujs:formnovalidate-button", u);
            if (i) {
                if (n = l.nonBlankInputs(r, l.fileInputSelector)) {
                    setTimeout(function() {
                        l.disableFormElements(r)
                    }, 13);
                    var o = l.fire(r, "ajax:aborted:file", [n]);
                    return o || setTimeout(function() {
                        l.enableFormElements(r)
                    }, 13), o
                }
                return l.handleRemote(r), !1
            }
            setTimeout(function() {
                l.disableFormElements(r)
            }, 13)
        }), e.on("click.rails", l.formInputClickSelector, function(e) {
            var t = c(this);
            if (!l.allowAction(t)) return l.stopEverything(e);
            var n = t.attr("name"),
                r = n ? {
                    name: n,
                    value: t.val()
                } : null,
                i = t.closest("form");
            0 === i.length && (i = c("#" + t.attr("form"))), i.data("ujs:submit-button", r), i.data("ujs:formnovalidate-button", t.attr("formnovalidate")), i.data("ujs:submit-button-formaction", t.attr("formaction")), i.data("ujs:submit-button-formmethod", t.attr("formmethod"))
        }), e.on("ajax:send.rails", l.formSubmitSelector, function(e) {
            this === e.target && l.disableFormElements(c(this))
        }), e.on("ajax:complete.rails", l.formSubmitSelector, function(e) {
            this === e.target && l.enableFormElements(c(this))
        }), c(function() {
            l.refreshCSRFTokens()
        }))
    };
    window.jQuery ? e(jQuery) : "object" == typeof exports && "object" == typeof module && (module.exports = e)
}(),
function() {
    var e, t, r, i = {}.hasOwnProperty,
        s = [].slice;
    r = function(e) {
        if (console && console.warn) return console.warn(e)
    }, e = {
        host: "collector.githubapp.com",
        type: "page_view",
        dimensions: {},
        measures: {},
        context: {},
        actor: {},
        image: new Image,
        performance: {},
        expectedPerformanceTimingKeys: ["connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "loadEventEnd", "loadEventStart", "navigationStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "unloadEventEnd", "unloadEventStart"],
        recordPageView: function() {
            return this.applyMetaTags(), null == this.app ? (r("App not set, you are doing something wrong"), !1) : null == this.host ? (r("Host not set, you are doing something wrong"), !1) : (this.image.src = this._src(), this._clearPerformance(), !0)
        },
        setHost: function(e) {
            return this.host = e
        },
        setApp: function(e) {
            return this.app = e
        },
        setDimensions: function(e) {
            return this.dimensions = e
        },
        addDimensions: function(e) {
            var t, n, r;
            for (t in null == this.dimensions && (this.dimensions = {}), n = [], e) i.call(e, t) && (r = e[t], n.push(this.dimensions[t] = r));
            return n
        },
        setMeasures: function(e) {
            return this.measures = e
        },
        setMeasures: function(e) {
            return this.measures = e
        },
        addMeasures: function(e) {
            var t, n, r;
            for (t in null == this.measures && (this.measures = {}), n = [], e) i.call(e, t) && (r = e[t], n.push(this.measures[t] = r));
            return n
        },
        setContext: function(e) {
            return this.context = e
        },
        addContext: function(e) {
            var t, n, r;
            for (t in null == this.context && (this.context = {}), n = [], e) i.call(e, t) && (r = e[t], n.push(this.context[t] = r));
            return n
        },
        setActor: function(e) {
            return this.actor = e
        },
        push: function(e) {
            return this.applyCall(e)
        },
        enablePerformance: function() {
            return this.performance = this._performanceTiming()
        },
        _recordSrc: function(e, t, n, r) {
            return "//" + this.host + "/" + this.app + "/" + e + "?" + this._queryString(t, n, r)
        },
        _src: function() {
            return "//" + this.host + "/" + this.app + "/" + this.type + "?" + this._queryString()
        },
        _queryString: function(e, t, n) {
            var r, i, o;
            return (i = function() {
                var e, t;
                for (r in t = [], e = this._params()) o = e[r], t.push("dimensions[" + r + "]=" + o);
                return t
            }.call(this)).push(this._encodeObject("dimensions", this._merge(this.dimensions, e))), i.push(this._encodeObject("measures", this._merge(this.measures, t))), null != this.performance && i.push(this._encodeObject("measures", {
                performance_timing: this.performance
            })), i.push(this._encodeObject("context", this._merge(this.context, n))), i.push(this._actor()), i.push(this._encodeObject("dimensions", {
                cid: this._clientId()
            })), i.join("&")
        },
        _clearPerformance: function() {
            return this.performance = null
        },
        _performanceTiming: function() {
            var e, t, n, r, i, o, a, s, u, l, c, d, f;
            if (null == (null != (a = window.performance) && null != (s = a.timing) ? s.navigationStart : void 0)) return null;
            for (c = {}, t = 0, r = (u = this.expectedPerformanceTimingKeys).length; t < r; t++) c[n = u[t]] = null != (l = window.performance.timing[n]) ? l : 0;
            for (n in f = 1, o = [], e = c.navigationStart, c) i = 0 === (d = c[n]) ? null : d - e, o.push(i);
            return f + "-" + o.join("-")
        },
        _params: function() {
            return {
                page: this._encode(this._page()),
                title: this._encode(this._title()),
                referrer: this._encode(this._referrer()),
                user_agent: this._encode(this._agent()),
                screen_resolution: this._encode(this._screenResolution()),
                pixel_ratio: this._encode(this._pixelRatio()),
                browser_resolution: this._encode(this._browserResolution()),
                tz_seconds: this._encode(this._tzSeconds()),
                timestamp: (new Date).getTime()
            }
        },
        _page: function() {
            try {
                return document.location.href
            } catch (e) {
                return e, ""
            }
        },
        _title: function() {
            try {
                return document.title
            } catch (e) {
                return e, ""
            }
        },
        _referrer: function() {
            var e;
            e = "";
            try {
                e = window.top.document.referrer
            } catch (t) {
                if (t, window.parent) try {
                    e = window.parent.document.referrer
                } catch (t) {
                    t
                }
            }
            return "" === e && (e = document.referrer), e
        },
        _agent: function() {
            try {
                return navigator.userAgent
            } catch (e) {
                return e, ""
            }
        },
        _screenResolution: function() {
            try {
                return screen.width + "x" + screen.height
            } catch (e) {
                return e, "unknown"
            }
        },
        _pixelRatio: function() {
            return window.devicePixelRatio
        },
        _browserResolution: function() {
            var e, t, n, r;
            try {
                return e = r = 0, "number" == typeof window.innerWidth ? (r = window.innerWidth, e = window.innerHeight) : null != (null != (t = document.documentElement) ? t.clientWidth : void 0) ? (r = document.documentElement.clientWidth, e = document.documentElement.clientHeight) : null != (null != (n = document.body) ? n.clientWidth : void 0) && (r = document.body.clientWidth, e = document.body.clientHeight), r + "x" + e
            } catch (i) {
                return i, "unknown"
            }
        },
        _tzSeconds: function() {
            try {
                return -60 * (new Date).getTimezoneOffset()
            } catch (e) {
                return e, ""
            }
        },
        _merge: function() {
            var e, t, n, r, i, o, a;
            for (r = {}, e = 0, n = (o = 1 <= arguments.length ? s.call(arguments, 0) : []).length; e < n; e++)
                for (t in i = o[e]) a = i[t], r[t] = a;
            return r
        },
        _encodeObject: function(e, t) {
            var n, r, i, o, a;
            if (o = [], null != Array.isArray && Array.isArray(t) || "[object Array]" === Object.prototype.toString.call(t))
                for (r = 0, i = t.length; r < i; r++) n = t[r], o.push(this._encodeObject(e + "[]", n));
            else if (t === Object(t))
                for (a in t) o.push(this._encodeObject(e + "[" + a + "]", t[a]));
            else o.push(e + "=" + this._encode(t));
            return o.join("&")
        },
        _actor: function() {
            var e, t, n, r, i, o, a, s;
            for (i in t = [], a = this.actor)
                if (e = "dimensions[actor_" + i + "]", (s = a[i]).join)
                    for (r = 0, o = s.length; r < o; r++) n = s[r], t.push(e + "[]=" + this._encode(n));
                else t.push(e + "=" + this._encode(s));
            return t.join("&")
        },
        _getCookie: function(e) {
            var t, n, r, i, o, a, s;
            for (o = [], t = 0, r = (i = document.cookie.split(";")).length; t < r; t++)(a = i[t].trim().split("=")).length < 2 || (n = a[0], s = a[1], n === e && o.push({
                key: n,
                value: s
            }));
            return o
        },
        _clientId: function() {
            var e;
            return "" === (e = this._getClientId()) && (e = this._setClientId()), e
        },
        _getClientId: function() {
            var e, t, n, r, i, o, a;
            for (t = [], r = 0, i = (n = this._getCookie("_octo")).length; r < i; r++) "GH1" === (o = n[r].value.split(".")).shift() && 1 < o.length && (1 === (a = o.shift().split("-")).length && (a[1] = "1"), a[0] *= 1, a[1] *= 1, e = o.join("."), t.push([a, e]));
            return e = "", 0 < t.length && (e = t.sort().reverse()[0][1]), e
        },
        _setClientId: function() {
            var e, t, n, r, i;
            return i = (new Date).getTime(), t = "GH1.1." + (e = Math.round(Math.random() * (Math.pow(2, 31) - 1)) + "." + Math.round(i / 1e3)), r = new Date(i + 63072e6).toGMTString(), n = "." + document.domain.split(".").reverse().slice(0, 2).reverse().join("."), document.cookie = "_octo=" + t + "; expires=" + r + "; path=/; domain=" + n, e
        },
        _encode: function(e) {
            return null != e ? window.encodeURIComponent(e) : ""
        },
        applyQueuedCalls: function(e) {
            var t, n, r, i;
            for (i = [], n = 0, r = e.length; n < r; n++) t = e[n], i.push(this.applyCall(t));
            return i
        },
        applyCall: function(e) {
            var t, n;
            return n = e[0], t = e.slice(1), this[n] ? this[n].apply(this, t) : r(n + " is not a valid method")
        },
        applyMetaTags: function() {
            var e;
            return (e = this.loadMetaTags()).host && this.setHost(e.host), e.app && this.setApp(e.app), this._objectIsEmpty(e.actor) || this.setActor(e.actor), this.addDimensions(e.dimensions), this.addMeasures(e.measures), this.addContext(e.context)
        },
        loadMetaTags: function() {
            var e, t, n, r, i, o;
            for (o = {
                    dimensions: {},
                    measures: {},
                    context: {},
                    actor: {}
                }, e = 0, t = (i = document.getElementsByTagName("meta")).length; e < t; e++)
                if ((n = i[e]).name && n.content && (r = n.name.match(this.octolyticsMetaTagName))) switch (r[1]) {
                    case "host":
                        o.host = n.content;
                        break;
                    case "app-id":
                    case "app":
                        o.app = n.content;
                        break;
                    case "dimension":
                        this._addField(o.dimensions, r[2], n);
                        break;
                    case "measure":
                        this._addField(o.measures, r[2], n);
                        break;
                    case "context":
                        this._addField(o.context, r[2], n);
                        break;
                    case "actor":
                        this._addField(o.actor, r[2], n)
                }
            return o
        },
        _addField: function(e, t, n) {
            return n.attributes["data-array"] ? (null == e[t] && (e[t] = []), e[t].push(n.content)) : e[t] = n.content
        },
        _objectIsEmpty: function(e) {
            var t;
            for (t in e)
                if (i.call(e, t)) return e[t], !1;
            return !0
        },
        octolyticsMetaTagName: /^octolytics-(host|app-id|app|dimension|measure|context|actor)-?(.*)/
    }, window._octo ? window._octo.slice && (t = window._octo.slice(0), window._octo = e, window._octo.applyQueuedCalls(t)) : window._octo = e
}.call(this);