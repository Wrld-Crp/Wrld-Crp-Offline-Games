'use strict';
!function(window, a, t, buildingApp, r, c, o) {
  /** @type {string} */
  window.GoogleAnalyticsObject = r;
  window.ga = window.ga || function() {
    (window.ga.q = window.ga.q || []).push(arguments);
  };
  /** @type {number} */
  window.ga.l = 1 * new Date;
  /** @type {!Element} */
  c = a.createElement(t);
  /** @type {!Element} */
  o = a.getElementsByTagName(t)[0];
  /** @type {number} */
  c.async = 1;
  /** @type {string} */
  c.src = "//www.google-analytics.com/analytics.js";
  o.parentNode.insertBefore(c, o);
}(window, document, "script", 0, "ga"), ga("create", "UA-36750648-2", "auto"), ga("send", "pageview");
