!function(){var t={54856:function(){$((function(){$(document).on("click.zf.trigger",(function(t){var r="#".concat($(t.target).data("open")),e=$(t.target).data("redirectUrl");r&&e&&($("<input type='hidden' />").attr("id","redirect_url").attr("name","redirect_url").attr("value",e).appendTo("".concat(r," form")),$("".concat(r," a")).attr("href",(function(t,r){var n=jQuery.param({redirect_url:e});return r+(r.match(/\?/)?"&":"?")+n})))})),$(document).on("closed.zf.reveal",(function(t){$("#redirect_url",t.target).remove(),$("a",t.target).attr("href",(function(t,r){return r&&-1!==r.indexOf("redirect_url")?function(t,r){var e=t.split("?");if(e.length>=2){for(var n=e.shift(),o=e.join("?"),c="".concat(encodeURIComponent(r),"="),a=o.split(/[&;]/g),i=a.length-1;i>=0;i-=1)-1!==a[i].lastIndexOf(c,0)&&a.splice(i,1);return 0===a.length?n:"".concat(n,"?").concat(a.join("&"))}return t}(r,"redirect_url"):r}))}))}))}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var c=r[n]={exports:{}};return t[n](c,c.exports,e),c.exports}e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},function(){"use strict";e(54856)}()}();
//# sourceMappingURL=decidim_phone_authorization_handler-7578568177303489879c.js.map