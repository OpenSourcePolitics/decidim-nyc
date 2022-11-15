(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["_rbenv_versions_2_7_5_lib_ruby_gems_2_7_0_bundler_gems_decidim-540e5d88e8b8_decidim-core_app_-d41726"],{

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/map/icon.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/map/icon.js ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet_svgicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet-svgicon */ "./node_modules/leaflet-svgicon/index.js");


leaflet__WEBPACK_IMPORTED_MODULE_0__.DivIcon.SVGIcon = leaflet_svgicon__WEBPACK_IMPORTED_MODULE_1__.SVGIcon;
leaflet__WEBPACK_IMPORTED_MODULE_0__.DivIcon.SVGIcon.DecidimIcon = leaflet__WEBPACK_IMPORTED_MODULE_0__.DivIcon.SVGIcon.extend({
  options: {
    fillColor: "#ef604d",
    opacity: 0
  },
  _createPathDescription: function _createPathDescription() {
    return "M14 1.17a11.685 11.685 0 0 0-11.685 11.685c0 11.25 10.23 20.61 10.665 21a1.5 1.5 0 0 0 2.025 0c0.435-.435 10.665-9.81 10.665-21A11.685 11.685 0 0 0 14 1.17Zm0 17.415A5.085 5.085 0 1 1 19.085 13.5 5.085 5.085 0 0 1 14 18.585Z";
  },
  _createCircle: function _createCircle() {
    return "";
  },
  // Improved version of the _createSVG, essentially the same as in later
  // versions of Leaflet. It adds the `px` values after the width and height
  // CSS making the focus borders work correctly across all browsers.
  _createSVG: function _createSVG() {
    var path = this._createPath();

    var circle = this._createCircle();

    var text = this._createText();

    var className = "".concat(this.options.className, "-svg");
    var style = "width:".concat(this.options.iconSize.x, "px; height:").concat(this.options.iconSize.y, "px;");
    var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" class=\"".concat(className, "\" style=\"").concat(style, "\">").concat(path).concat(circle).concat(text, "</svg>");
    return svg;
  }
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/vendor/leaflet-tilelayer-here.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/vendor/leaflet-tilelayer-here.js ***!
  \*******************************************************************************************************************************************************************/
/***/ (function() {

/* eslint-disable */
// 🍂class TileLayer.HERE
// Tile layer for HERE maps tiles.
L.TileLayer.HERE = L.TileLayer.extend({
  options: {
    subdomains: '1234',
    minZoom: 2,
    maxZoom: 18,
    // 🍂option scheme: String = 'normal.day'
    // The "map scheme", as documented in the HERE API.
    scheme: 'normal.day',
    // 🍂option resource: String = 'maptile'
    // The "map resource", as documented in the HERE API.
    resource: 'maptile',
    // 🍂option mapId: String = 'newest'
    // Version of the map tiles to be used, or a hash of an unique map
    mapId: 'newest',
    // 🍂option format: String = 'png8'
    // Image format to be used (`png8`, `png`, or `jpg`)
    format: 'png8',
    // 🍂option appId: String = ''
    // Required option. The `app_id` provided as part of the HERE credentials
    appId: '',
    // 🍂option appCode: String = ''
    // Required option. The `app_code` provided as part of the HERE credentials
    appCode: '',
    // 🍂option useCIT: boolean = false
    // Whether to use the CIT when loading the here-maptiles
    useCIT: false,
    // 🍂option useHTTPS: boolean = true
    // Whether to use HTTPS when loading the here-maptiles
    useHTTPS: true,
    // 🍂option language: String = ''
    // The language of the descriptions on the maps that are loaded
    language: '',
    // 🍂option language: String = ''
    // The second language of the descriptions on the maps that are loaded
    language2: ''
  },
  initialize: function initialize(options) {
    options = L.setOptions(this, options); // Decide if this scheme uses the aerial servers or the basemap servers

    var schemeStart = options.scheme.split('.')[0];
    options.tileResolution = 256; // {Base URL}{Path}/{resource (tile type)}/{map id}/{scheme}/{zoom}/{column}/{row}/{size}/{format}
    // ?apiKey={YOUR_API_KEY}
    // &{param}={value}

    var params = ['apiKey=' + encodeURIComponent(options.apiKey)]; // Fallback to old app_id,app_code if no apiKey passed

    if (!options.apiKey) {
      params = ['app_id=' + encodeURIComponent(options.appId), 'app_code=' + encodeURIComponent(options.appCode)];
    }

    if (options.language) {
      params.push('lg=' + encodeURIComponent(options.language));
    }

    if (options.language2) {
      params.push('lg2=' + encodeURIComponent(options.language2));
    }

    var urlQuery = '?' + params.join('&');
    var path = '/maptile/2.1/{resource}/{mapId}/{scheme}/{z}/{x}/{y}/{tileResolution}/{format}' + urlQuery;
    var attributionPath = '/maptile/2.1/copyright/{mapId}?apiKey={apiKey}';
    var baseUrl = 'maps.ls.hereapi.com'; // Old style with apiId/apiCode for compatibility

    if (!options.apiKey) {
      // make sure the CIT-url can be used
      baseUrl = 'maps' + (options.useCIT ? '.cit' : '') + '.api.here.com';
      attributionPath = '/maptile/2.1/copyright/{mapId}?app_id={appId}&app_code={appCode}';
    }

    var tileServer = 'base.' + baseUrl;

    if (schemeStart == 'satellite' || schemeStart == 'terrain' || schemeStart == 'hybrid') {
      tileServer = 'aerial.' + baseUrl;
    }

    if (options.scheme.indexOf('.traffic.') !== -1) {
      tileServer = 'traffic' + baseUrl;
    }

    var protocol = 'http' + (options.useHTTPS ? 's' : '');
    var tileUrl = protocol + '://{s}.' + tileServer + path;
    this._attributionUrl = L.Util.template(protocol + '://1.' + tileServer + attributionPath, this.options);
    L.TileLayer.prototype.initialize.call(this, tileUrl, options);
    this._attributionText = '';
  },
  onAdd: function onAdd(map) {
    L.TileLayer.prototype.onAdd.call(this, map);

    if (!this._attributionBBoxes) {
      this._fetchAttributionBBoxes();
    }
  },
  onRemove: function onRemove(map) {
    //
    // Remove the attribution text, and clear the cached text so it will be recalculated
    // if/when we are shown again.
    //
    this._map.attributionControl.removeAttribution(this._attributionText);

    this._attributionText = '';

    this._map.off('moveend zoomend resetview', this._findCopyrightBBox, this); //
    // Call the prototype last, once we've tidied up our own changes
    //


    L.TileLayer.prototype.onRemove.call(this, map);
  },
  _fetchAttributionBBoxes: function _onMapMove() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = L.bind(function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        this._parseAttributionBBoxes(JSON.parse(xmlhttp.responseText));
      }
    }, this);
    xmlhttp.open("GET", this._attributionUrl, true);
    xmlhttp.send();
  },
  _parseAttributionBBoxes: function _parseAttributionBBoxes(json) {
    if (!this._map) {
      return;
    }

    var providers = json[this.options.scheme.split('.')[0]] || json.normal;

    for (var i = 0; i < providers.length; i++) {
      if (providers[i].boxes) {
        for (var j = 0; j < providers[i].boxes.length; j++) {
          var box = providers[i].boxes[j];
          providers[i].boxes[j] = L.latLngBounds([[box[0], box[1]], [box[2], box[3]]]);
        }
      }
    }

    this._map.on('moveend zoomend resetview', this._findCopyrightBBox, this);

    this._attributionProviders = providers;

    this._findCopyrightBBox();
  },
  _findCopyrightBBox: function _findCopyrightBBox() {
    if (!this._map) {
      return;
    }

    var providers = this._attributionProviders;
    var visibleProviders = [];

    var zoom = this._map.getZoom();

    var visibleBounds = this._map.getBounds();

    for (var i = 0; i < providers.length; i++) {
      if (providers[i].minLevel <= zoom && providers[i].maxLevel >= zoom) {
        if (!providers[i].boxes) {
          // No boxes = attribution always visible
          visibleProviders.push(providers[i]);
        } else {
          for (var j = 0; j < providers[i].boxes.length; j++) {
            var box = providers[i].boxes[j];

            if (visibleBounds.intersects(box)) {
              visibleProviders.push(providers[i]);
              break;
            }
          }
        }
      }
    }

    var attributions = ['<a href="https://legal.here.com/en-gb/terms" target="_blank" rel="noopener noreferrer">HERE maps</a>'];

    for (var i = 0; i < visibleProviders.length; i++) {
      var provider = visibleProviders[i];
      attributions.push('<abbr title="' + provider.alt + '">' + provider.label + '</abbr>');
    }

    var attributionText = '© ' + attributions.join(', ') + '. ';

    if (attributionText !== this._attributionText) {
      this._map.attributionControl.removeAttribution(this._attributionText);

      this._map.attributionControl.addAttribution(this._attributionText = attributionText);
    }
  }
});

L.tileLayer.here = function (opts) {
  return new L.TileLayer.HERE(opts);
};

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/gems/decidim-decidim_awesome-0.8.3/app/packs/src/vendor/jquery.truncate.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/gems/decidim-decidim_awesome-0.8.3/app/packs/src/vendor/jquery.truncate.js ***!
  \****************************************************************************************************************************************/
/***/ (function() {

// From https://github.com/pathable/truncate/
(function ($) {
  // Matches trailing non-space characters.
  var chop = /(\s*\S+|\s)$/; // Matches the first word in the string.

  var start = /^(\S*)/; // Return a truncated html string.  Delegates to $.fn.truncate.

  $.truncate = function (html, options) {
    return $('<div></div>').append(html).truncate(options).html();
  }; // Truncate the contents of an element in place.


  $.fn.truncate = function (options) {
    if ($.isNumeric(options)) options = {
      length: options
    };
    var o = $.extend({}, $.truncate.defaults, options);
    return this.each(function () {
      var self = $(this);
      if (o.noBreaks) self.find('br').replaceWith(' ');
      var text = self.text();
      var excess = text.length - o.length;
      if (o.stripTags) self.text(text); // Chop off any partial words if appropriate.

      if (o.words && excess > 0) {
        var truncated = text.slice(0, o.length).replace(chop, '').length;

        if (o.keepFirstWord && truncated === 0) {
          excess = text.length - start.exec(text)[0].length - 1;
        } else {
          excess = text.length - truncated - 1;
        }
      }

      if (excess < 0 || !excess && !o.truncated) return; // Iterate over each child node in reverse, removing excess text.

      $.each(self.contents().get().reverse(), function (i, el) {
        var $el = $(el);
        var text = $el.text();
        var length = text.length; // If the text is longer than the excess, remove the node and continue.

        if (length <= excess) {
          o.truncated = true;
          excess -= length;
          $el.remove();
          return;
        } // Remove the excess text and append the ellipsis.


        if (el.nodeType === 3) {
          // should we finish the block anyway?
          if (o.finishBlock) {
            $(el.splitText(length)).replaceWith(o.ellipsis);
          } else {
            $(el.splitText(length - excess - 1)).replaceWith(o.ellipsis);
          }

          return false;
        } // Recursively truncate child nodes.


        $el.truncate($.extend(o, {
          length: length - excess
        }));
        return false;
      });
    });
  };

  $.truncate.defaults = {
    // Strip all html elements, leaving only plain text.
    stripTags: false,
    // Only truncate at word boundaries.
    words: false,
    // When 'words' is active, keeps the first word in the string
    // even if it's longer than a target length.
    keepFirstWord: false,
    // Replace instances of <br> with a single space.
    noBreaks: false,
    // if true always truncate the content at the end of the block.
    finishBlock: false,
    // The maximum length of the truncated html.
    length: Infinity,
    // The character to use as the ellipsis.  The word joiner (U+2060) can be
    // used to prevent a hanging ellipsis, but displays incorrectly in Chrome
    // on Windows 7.
    // http://code.google.com/p/chromium/issues/detail?id=68323
    ellipsis: "\u2026" // '\u2060\u2026'

  };
})(jQuery);

/***/ })

}]);
//# sourceMappingURL=_rbenv_versions_2_7_5_lib_ruby_gems_2_7_0_bundler_gems_decidim-540e5d88e8b8_decidim-core_app_-d41726.js.map