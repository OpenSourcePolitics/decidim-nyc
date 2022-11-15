/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module-homepage_interactive_map-3710b5371558/app/packs/entrypoints/decidim_homepage_interactive_map.js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module-homepage_interactive_map-3710b5371558/app/packs/entrypoints/decidim_homepage_interactive_map.js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var proj4leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! proj4leaflet */ "./node_modules/proj4leaflet/src/proj4leaflet.js");
/* harmony import */ var proj4leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(proj4leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet_tilelayer_here__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet-tilelayer-here */ "./node_modules/leaflet-tilelayer-here/leaflet-tilelayer-here.js");
/* harmony import */ var leaflet_tilelayer_here__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_tilelayer_here__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_svgicon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-svgicon */ "./node_modules/leaflet-svgicon/index.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet.markercluster */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_decidim_homepage_interactive_map_interactive_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/decidim/homepage_interactive_map/interactive_map */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module-homepage_interactive_map-3710b5371558/app/packs/src/decidim/homepage_interactive_map/interactive_map.js");
/* harmony import */ var src_decidim_homepage_interactive_map_scope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/decidim/homepage_interactive_map/scope */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module-homepage_interactive_map-3710b5371558/app/packs/src/decidim/homepage_interactive_map/scope.js");
/* harmony import */ var src_decidim_homepage_interactive_map_scope__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_decidim_homepage_interactive_map_scope__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module-homepage_interactive_map-3710b5371558/app/packs/src/decidim/homepage_interactive_map/interactive_map.js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module-homepage_interactive_map-3710b5371558/app/packs/src/decidim/homepage_interactive_map/interactive_map.js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_vendor_leaflet_polylabel_centroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/vendor/leaflet-polylabel-centroid */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module-homepage_interactive_map-3710b5371558/app/packs/src/vendor/leaflet-polylabel-centroid.js");
/* harmony import */ var src_vendor_leaflet_polylabel_centroid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_vendor_leaflet_polylabel_centroid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var proj4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! proj4 */ "./node_modules/proj4/lib/index.js");
/* harmony import */ var src_decidim_vendor_leaflet_tilelayer_here__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/vendor/leaflet-tilelayer-here */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/vendor/leaflet-tilelayer-here.js");
/* harmony import */ var src_decidim_vendor_leaflet_tilelayer_here__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(src_decidim_vendor_leaflet_tilelayer_here__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_decidim_map_icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/decidim/map/icon.js */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/map/icon.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet.markercluster */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var leaflet_featuregroup_subgroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet.featuregroup.subgroup */ "./node_modules/leaflet.featuregroup.subgroup/dist/leaflet.featuregroup.subgroup.js");
/* harmony import */ var leaflet_featuregroup_subgroup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet_featuregroup_subgroup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_vendor_jquery_truncate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/vendor/jquery.truncate */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/gems/decidim-decidim_awesome-0.8.3/app/packs/src/vendor/jquery.truncate.js");
/* harmony import */ var src_vendor_jquery_truncate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(src_vendor_jquery_truncate__WEBPACK_IMPORTED_MODULE_7__);




 // comes with Decidim

 // Comes with Decidim

 // included in this package.json


leaflet__WEBPACK_IMPORTED_MODULE_1__.DivIcon.SVGIcon.DecidimIcon = leaflet__WEBPACK_IMPORTED_MODULE_1__.DivIcon.SVGIcon.extend({
  options: {
    iconSize: leaflet__WEBPACK_IMPORTED_MODULE_1__.point(24, 34),
    fillColor: getComputedStyle(document.documentElement).getPropertyValue('--primary'),
    fillOpacity: 1,
    opacity: 0
  },
  _createPathDescription: function _createPathDescription() {
    return "M12,0.17 C5.5465527,0.17 0.315,5.4015527 0.315,11.855 C0.315,23.105 10.545,32.465 10.98,32.855 C11.5531636,33.3793645 12.4318364,33.3793645 13.005,32.855 C13.44,32.42 23.67,23.045 23.67,11.855 C23.67,5.40740603 18.4475887,0.178276757 12,0.17 Z M12,17.585 C9.19163205,17.585 6.915,15.308368 6.915,12.5 C6.915,9.69163205 9.19163205,7.415 12,7.415 C14.808368,7.415 17.085,9.69163205 17.085,12.5 C17.085,15.308368 14.808368,17.585 12,17.585 L12,17.585 Z";
  },
  _createCircle: function _createCircle() {
    return "";
  }
});

(function () {
  $(document).ready(function () {
    var here_api_key = $("#interactive_map").data("here-api-key");
    var geoJson = $("#interactive_map").data("geojson-data");
    var $viewParticipatoryProcess = $("#view-participatory-process"); // Used to prevent click event when double click navigating

    var clickDelay = 500;
    var clickTimer = 0;
    var clickPrevent = false; // Style options

    var colorOpacity = 0.5;
    var hoverColorOpacity = 0.8;
    var strokeWeight = 1.5;
    var polyLineColor = 1;
    var strokeColor = "#8a8a8a";
    var iconSize = 28;
    var map = leaflet__WEBPACK_IMPORTED_MODULE_1__.map('interactive_map', {
      scrollWheelZoom: false
    }); // Add Proj4 configurations

    proj4__WEBPACK_IMPORTED_MODULE_2__["default"].defs("EPSG:3943", "+proj=lcc +lat_1=42.25 +lat_2=43.75 +lat_0=43 +lon_0=3 +x_0=1700000 +y_0=2200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
    var zoomOrigin = map.getZoom();
    var allZonesLayer = leaflet__WEBPACK_IMPORTED_MODULE_1__.featureGroup();
    var allZonesMarkers = [];
    var allProcessesLinks = {};

    function zoneMarkerIconCSS(size) {
      return {
        'font-size': "".concat(size / 2 - 2, "px"),
        'width': "".concat(size - 2, "px"),
        'height': "".concat(size - 2, "px"),
        'line-height': "".concat(size - 2, "px"),
        'border-radius': "".concat(size / 2, "px")
      };
    }

    function processMarkerIconCSS(size) {
      return {
        'font-size': "".concat(Math.round(size / 3), "px"),
        'width': "".concat(size / 2, "px"),
        'height': "".concat(size / 2, "px"),
        'line-height': "".concat(size / 2, "px"),
        'border-radius': "".concat(size / 4, "px")
      };
    }

    function popupMaxwidth() {
      if ($(window).width() < 600) {
        return 260;
      } else {
        return 640;
      }
    }

    function popupMinwidth() {
      if ($(window).width() < 600) {
        return 204;
      } else {
        return 500;
      }
    }

    function isCoordinates(value, length) {
      return Array.isArray(value) && value.length === length && !!value.reduce(function (a, v) {
        return a && a !== null;
      });
    }

    function hasLocation(participatory_process) {
      return participatory_process.location !== undefined && isCoordinates(participatory_process.location, 2);
    }

    function updateProcessMarkerPosition(marker, delta, zoom) {
      if (marker.origin === undefined) {
        return;
      }

      var oldPoint = map.project(leaflet__WEBPACK_IMPORTED_MODULE_1__.latLng(marker.origin), zoom);
      var radius = delta / 2.5 + marker.getRadius() / 1.75;
      var newPoint = leaflet__WEBPACK_IMPORTED_MODULE_1__.point(oldPoint.x + radius * Math.cos(Math.PI / 4), oldPoint.y - radius * Math.sin(Math.PI / 4));
      marker._latlng = map.unproject(newPoint, zoom);
    }

    function calculateIconSize() {
      var delta = Math.round(1.75 * map.getZoom());
      return (delta + 2) * 2;
    }

    function tmpl(participatoryProcess, linkTxt) {
      return "\n            <div class=\"map-info__content homepage_interactive_map\">\n              <h3>".concat(participatoryProcess.title, "</h3>\n              <div id=\"bodyContent\">\n                <div class=\"card__datetime\">\n                  <div class=\"card__datetime__date\">\n                    ").concat(participatoryProcess.start_date, " - ").concat(participatoryProcess.end_date, "\n                  </div>\n                </div>\n                <div class=\"map-info__button\">\n                  <a href=\"").concat(participatoryProcess.link, "\" class=\"button button--sc\">\n                    ").concat(linkTxt, "\n                  </a>\n                </div>\n              </div>\n            </div>\n      ");
    }

    leaflet__WEBPACK_IMPORTED_MODULE_1__.tileLayer.here({
      apiKey: here_api_key,
      scheme: "normal.day.grey"
    }, {
      continuousWorld: true
    }).addTo(map);
    map.createPane("processPane").style.zIndex = 610;
    var allProcessesLayer = leaflet__WEBPACK_IMPORTED_MODULE_1__.markerClusterGroup({
      clusterPane: "processPane",
      zoomToBoundsOnClick: false,
      removeOutsideVisibleBounds: true,
      spiderfyDistanceMultiplier: 2,
      chunkedLoading: true,
      showCoverageOnHover: false,
      maxClusterRadius: 40,
      spiderLegPolylineOptions: {
        weight: 2,
        color: getComputedStyle(document.documentElement).getPropertyValue('--primary'),
        opacity: polyLineColor
      },
      iconCreateFunction: function iconCreateFunction(cluster) {
        var actualIconSize = map.getZoom() > zoomOrigin ? calculateIconSize() : iconSize;
        var style = Object.entries(processMarkerIconCSS(actualIconSize)).map(function (v) {
          return "".concat(v[0], ": ").concat(v[1], ";");
        }).join(" ");
        return new leaflet__WEBPACK_IMPORTED_MODULE_1__.DivIcon({
          html: '<div style="' + style + '">' + cluster.getChildCount() + '</div>',
          className: 'marker-cluster',
          iconSize: new leaflet__WEBPACK_IMPORTED_MODULE_1__.Point(actualIconSize / 2, actualIconSize / 2)
        });
      }
    }); // Convert data from GeoJSON

    var geoJsonLayer = leaflet__WEBPACK_IMPORTED_MODULE_1__.Proj.geoJson(geoJson, {
      style: function style(feature) {
        return {
          interactive: false,
          stroke: true,
          color: strokeColor,
          weight: strokeWeight,
          fillColor: feature.color,
          fillOpacity: colorOpacity
        };
      }
    }); // We parsed the data to generate advanced layers configuration

    geoJsonLayer.eachLayer(function (layer) {
      var feature = layer.feature;
      var zoneLayer = leaflet__WEBPACK_IMPORTED_MODULE_1__.featureGroup(); // Zone = Assembly with scope
      // Base zone polygon

      zoneLayer.addLayer(layer);
      zoneLayer.on("mouseover", function () {
        this.setStyle({
          fillOpacity: hoverColorOpacity
        });
      });
      zoneLayer.on("mouseout", function () {
        this.setStyle({
          fillOpacity: colorOpacity
        });
      }); // Zone label

      var icon = leaflet__WEBPACK_IMPORTED_MODULE_1__.divIcon({
        className: 'district-number',
        html: feature.code,
        iconSize: new leaflet__WEBPACK_IMPORTED_MODULE_1__.Point(iconSize, iconSize)
      });
      var centroid = leaflet__WEBPACK_IMPORTED_MODULE_1__.PolylabelCentroid(leaflet__WEBPACK_IMPORTED_MODULE_1__.GeoJSON.latLngsToCoords(layer._latlngs[0], 1), 1 / 1000);
      var zoneMarker = leaflet__WEBPACK_IMPORTED_MODULE_1__.marker(centroid, {
        icon: icon
      });
      allZonesMarkers.push(zoneMarker);
      zoneLayer.addLayer(zoneMarker); // Navigate to target page

      zoneMarker.on("keypress", function (e) {
        if (e.originalEvent.key === "Enter") {
          return window.location = feature.link;
        }
      }); // Navigate to target page if not double click

      zoneMarker.on("click", function (e) {
        clickTimer = setTimeout(function () {
          if (!clickPrevent) {
            return window.location = feature.link;
          }

          clickPrevent = false;
        }, clickDelay);
      }); // Zoom to Polygone / Zone

      zoneMarker.on("dblclick", function (e) {
        clearTimeout(clickTimer);
        clickPrevent = true;
        map.fitBounds(zoneLayer.getBounds(), {
          padding: [25, 25]
        });
      }); // Manage linked participatory processes

      feature.participatory_processes.forEach(function (participatory_process) {
        // Filling the registry links
        if (Object.keys(allProcessesLinks).includes(participatory_process.id.toString())) {
          allProcessesLinks[participatory_process.id.toString()].push(layer); // Process with location are only displayed once

          if (hasLocation(participatory_process)) {
            return;
          }
        } else {
          allProcessesLinks[participatory_process.id.toString()] = [layer];
        }

        var marker = new leaflet__WEBPACK_IMPORTED_MODULE_1__.circleMarker( // marker is placed on its location or the center of the assembly
        hasLocation(participatory_process) ? participatory_process.location : centroid, {
          pane: "processPane",
          radius: Math.round(iconSize / 4),
          weight: 0,
          fillOpacity: 1,
          fillColor: getComputedStyle(document.documentElement).getPropertyValue('--primary')
        });
        var node = document.createElement("div");
        $(node).html(tmpl(participatory_process, $viewParticipatoryProcess.val()));
        marker.bindPopup(node, {
          maxwidth: popupMaxwidth(),
          minWidth: popupMinwidth(),
          keepInView: true,
          className: "interactive-map-info"
        }).openPopup();
        marker.participatory_process_data = participatory_process;
        marker.origin = centroid; // Add marker to marker cluster group

        allProcessesLayer.addLayer(marker);
      }); // Add zone to layer group

      allZonesLayer.addLayer(zoneLayer);
    }); // Add zones to map

    allZonesLayer.addTo(map); // Map is centered on all the zone

    map.fitBounds(allZonesLayer.getBounds(), {
      padding: [25, 25]
    }); // Update the starting zoom

    zoomOrigin = map.getZoom(); // Now, all the element are actually projected on the map

    allProcessesLayer.eachLayer(function (marker) {
      // Each participatory process should highlight its linked assemblies / zones
      var linked = allProcessesLinks[marker.participatory_process_data.id.toString()];
      linked.forEach(function (layer) {
        marker.on("mouseover", function () {
          layer.bringToFront().setStyle({
            fillOpacity: hoverColorOpacity,
            color: getComputedStyle(document.documentElement).getPropertyValue('--primary'),
            weight: 2
          });
        });
        marker.on("mouseout", function () {
          layer.bringToBack().setStyle({
            fillOpacity: colorOpacity,
            color: strokeColor,
            weight: strokeWeight
          });
        });
      }); // Translate the marker centered on the zone outside the zone label
      // ( like an notification badge )

      if (!hasLocation(marker.participatory_process_data)) {
        updateProcessMarkerPosition(marker, iconSize, map.getZoom());
      }
    }); // Map zoom events

    map.on('zoomstart', function (e) {
      $('#interactive_map .leaflet-process-pane').hide();
    });
    map.on('zoomend', function (e) {
      var actualIconSize = iconSize;

      if (map.getZoom() > zoomOrigin) {
        actualIconSize = calculateIconSize();
        $('#interactive_map .district-number').css(zoneMarkerIconCSS(actualIconSize));
      } else {
        $('#interactive_map .district-number').css(zoneMarkerIconCSS(iconSize));
      }

      allZonesMarkers.forEach(function (marker) {
        var icon = marker.options.icon;
        icon.options.iconSize = new leaflet__WEBPACK_IMPORTED_MODULE_1__.Point(actualIconSize, actualIconSize);
        marker.setIcon(icon);
      });
      allProcessesLayer.eachLayer(function (marker) {
        if (!hasLocation(marker.participatory_process_data)) {
          updateProcessMarkerPosition(marker, actualIconSize, map.getZoom());
        }
      });
      allProcessesLayer.refreshClusters();
      $('#interactive_map .leaflet-process-pane').show();
    }); // Add markers to map

    allProcessesLayer.addTo(map);
  });
})(window);

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module-homepage_interactive_map-3710b5371558/app/packs/src/decidim/homepage_interactive_map/scope.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module-homepage_interactive_map-3710b5371558/app/packs/src/decidim/homepage_interactive_map/scope.js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function() {

$(document).ready(function () {
  var $geolocalized = $("#scope_geolocalized");
  var $geojson = $("#geojson");

  function toggleSubField(field, subfield) {
    if (field.is(":checked")) {
      subfield.show();
    } else {
      subfield.hide();
    }
  }

  $geolocalized.on("click", function () {
    toggleSubField($geolocalized, $geojson);
  });
  toggleSubField($geolocalized, $geojson);
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module-homepage_interactive_map-3710b5371558/app/packs/src/vendor/leaflet-polylabel-centroid.js":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module-homepage_interactive_map-3710b5371558/app/packs/src/vendor/leaflet-polylabel-centroid.js ***!
  \**********************************************************************************************************************************************************************************/
/***/ (function() {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
} // Leaflet Polylabel Centroid
// USAGE : L.PolylabelCentroid(coordinates, precision, debug)
// + coordinates (required) : GeoJSON Polygon coordinates
// + precision (optional) : default to 1.0, decrease for better precision (like 1/1000)
// + debug (optional) : activate debug coinsole output
// ----------------------------------------------------------------------------
// TinyQueue
// source : https://github.com/mourner/tinyqueue/blob/3a212a4f73ad9c39caeb27922c86ff4115e59c66/index.js


var Queue = /*#__PURE__*/function () {
  function Queue() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var compare = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultCompare;

    _classCallCheck(this, Queue);

    this.data = data;
    this.length = this.data.length;
    this.compare = compare;

    if (this.length > 0) {
      for (var i = (this.length >> 1) - 1; i >= 0; i--) {
        this._down(i);
      }
    }
  }

  _createClass(Queue, [{
    key: "push",
    value: function push(item) {
      this.data.push(item);
      this.length++;

      this._up(this.length - 1);
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.length === 0) return undefined;
      var top = this.data[0];
      var bottom = this.data.pop();
      this.length--;

      if (this.length > 0) {
        this.data[0] = bottom;

        this._down(0);
      }

      return top;
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.data[0];
    }
  }, {
    key: "_up",
    value: function _up(pos) {
      var data = this.data,
          compare = this.compare;
      var item = data[pos];

      while (pos > 0) {
        var parent = pos - 1 >> 1;
        var current = data[parent];
        if (compare(item, current) >= 0) break;
        data[pos] = current;
        pos = parent;
      }

      data[pos] = item;
    }
  }, {
    key: "_down",
    value: function _down(pos) {
      var data = this.data,
          compare = this.compare;
      var halfLength = this.length >> 1;
      var item = data[pos];

      while (pos < halfLength) {
        var left = (pos << 1) + 1;
        var best = data[left];
        var right = left + 1;

        if (right < this.length && compare(data[right], best) < 0) {
          left = right;
          best = data[right];
        }

        if (compare(best, item) >= 0) break;
        data[pos] = best;
        pos = left;
      }

      data[pos] = item;
    }
  }]);

  return Queue;
}(); // ----------------------------------------------------------------------------
// Polylabel
// source : https://github.com/mapbox/polylabel/blob/6854a05e221fac42b9e025cbf356b2a057f212aa/polylabel.js


function defaultCompare(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function polylabel(polygon, precision, debug) {
  precision = precision || 1.0; // find the bounding box of the outer ring

  var minX, minY, maxX, maxY;

  for (var i = 0; i < polygon[0].length; i++) {
    var p = polygon[0][i];
    if (!i || p[0] < minX) minX = p[0];
    if (!i || p[1] < minY) minY = p[1];
    if (!i || p[0] > maxX) maxX = p[0];
    if (!i || p[1] > maxY) maxY = p[1];
  }

  var width = maxX - minX;
  var height = maxY - minY;
  var cellSize = Math.min(width, height);
  var h = cellSize / 2;
  if (cellSize === 0) return [minX, minY]; // a priority queue of cells in order of their "potential" (max distance to polygon)

  var cellQueue = new Queue(undefined, compareMax); // cover polygon with initial cells

  for (var x = minX; x < maxX; x += cellSize) {
    for (var y = minY; y < maxY; y += cellSize) {
      cellQueue.push(new Cell(x + h, y + h, h, polygon));
    }
  } // take centroid as the first best guess


  var bestCell = getCentroidCell(polygon); // special case for rectangular polygons

  var bboxCell = new Cell(minX + width / 2, minY + height / 2, 0, polygon);
  if (bboxCell.d > bestCell.d) bestCell = bboxCell;
  var numProbes = cellQueue.length;

  while (cellQueue.length) {
    // pick the most promising cell from the queue
    var cell = cellQueue.pop(); // update the best cell if we found a better one

    if (cell.d > bestCell.d) {
      bestCell = cell;
      if (debug) console.log('found best %d after %d probes', Math.round(1e4 * cell.d) / 1e4, numProbes);
    } // do not drill down further if there's no chance of a better solution


    if (cell.max - bestCell.d <= precision) continue; // split the cell into four cells

    h = cell.h / 2;
    cellQueue.push(new Cell(cell.x - h, cell.y - h, h, polygon));
    cellQueue.push(new Cell(cell.x + h, cell.y - h, h, polygon));
    cellQueue.push(new Cell(cell.x - h, cell.y + h, h, polygon));
    cellQueue.push(new Cell(cell.x + h, cell.y + h, h, polygon));
    numProbes += 4;
  }

  if (debug) {
    console.log('num probes: ' + numProbes);
    console.log('best distance: ' + bestCell.d);
  }

  return [bestCell.x, bestCell.y];
}

function compareMax(a, b) {
  return b.max - a.max;
}

function Cell(x, y, h, polygon) {
  this.x = x; // cell center x

  this.y = y; // cell center y

  this.h = h; // half the cell size

  this.d = pointToPolygonDist(x, y, polygon); // distance from cell center to polygon

  this.max = this.d + this.h * Math.SQRT2; // max distance to polygon within a cell
} // signed distance from point to polygon outline (negative if point is outside)


function pointToPolygonDist(x, y, polygon) {
  var inside = false;
  var minDistSq = Infinity;

  for (var k = 0; k < polygon.length; k++) {
    var ring = polygon[k];

    for (var i = 0, len = ring.length, j = len - 1; i < len; j = i++) {
      var a = ring[i];
      var b = ring[j];
      if (a[1] > y !== b[1] > y && x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
      minDistSq = Math.min(minDistSq, getSegDistSq(x, y, a, b));
    }
  }

  return (inside ? 1 : -1) * Math.sqrt(minDistSq);
} // get polygon centroid


function getCentroidCell(polygon) {
  var area = 0;
  var x = 0;
  var y = 0;
  var points = polygon[0];

  for (var i = 0, len = points.length, j = len - 1; i < len; j = i++) {
    var a = points[i];
    var b = points[j];
    var f = a[0] * b[1] - b[0] * a[1];
    x += (a[0] + b[0]) * f;
    y += (a[1] + b[1]) * f;
    area += f * 3;
  }

  if (area === 0) return new Cell(points[0][0], points[0][1], 0, polygon);
  return new Cell(x / area, y / area, 0, polygon);
} // get squared distance from a point to a segment


function getSegDistSq(px, py, a, b) {
  var x = a[0];
  var y = a[1];
  var dx = b[0] - x;
  var dy = b[1] - y;

  if (dx !== 0 || dy !== 0) {
    var t = ((px - x) * dx + (py - y) * dy) / (dx * dx + dy * dy);

    if (t > 1) {
      x = b[0];
      y = b[1];
    } else if (t > 0) {
      x += dx * t;
      y += dy * t;
    }
  }

  dx = px - x;
  dy = py - y;
  return dx * dx + dy * dy;
} // ----------------------------------------------------------------------------


L.PolylabelCentroid = function (polygon, precision, debug) {
  return polylabel(polygon, precision, debug).reverse();
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"decidim_homepage_interactive_map": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkapp"] = self["webpackChunkapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_leaflet-svgicon_index_js-node_modules_leaflet_markercluster_dist_leaflet-b732f3","vendors-node_modules_leaflet-tilelayer-here_leaflet-tilelayer-here_js-node_modules_leaflet_fe-637c6b","_rbenv_versions_2_7_5_lib_ruby_gems_2_7_0_bundler_gems_decidim-540e5d88e8b8_decidim-core_app_-d41726"], function() { return __webpack_require__("../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module-homepage_interactive_map-3710b5371558/app/packs/entrypoints/decidim_homepage_interactive_map.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=decidim_homepage_interactive_map.js.map