"use strict";

(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["home"], {
        42952: (e, t, r) => {
            var s = r(36071);

            let o = new IntersectionObserver(e => {
                for (let t of e)
                    t.isIntersecting
                        ? t.target.removeAttribute("tabindex")
                        : t.target.setAttribute("tabindex", "-1");
            }, {
                rootMargin: "0% 0% 0% 0%",
                threshold: 0
            });

            (0, s.N7)(".js-home-repo-card", e => {
                o.observe(e);
            });
        }
    },

    e => {
        var t = t => e(e.s = t);

        e.O(0, [
            "vendors-node_modules_github_selector-observer_dist_index_esm_js"
        ], () => t(42952));

        var r = e.O();
    }
]);

// # sourceMappingURL = home-f3a143972e16.js.map