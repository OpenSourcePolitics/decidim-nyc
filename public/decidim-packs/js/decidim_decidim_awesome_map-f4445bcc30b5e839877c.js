!function(){var e,t={74247:function(){L.TileLayer.HERE=L.TileLayer.extend({options:{subdomains:"1234",minZoom:2,maxZoom:18,scheme:"normal.day",resource:"maptile",mapId:"newest",format:"png8",appId:"",appCode:"",useCIT:!1,useHTTPS:!0,language:"",language2:""},initialize:function(e){var t=(e=L.setOptions(this,e)).scheme.split(".")[0];e.tileResolution=256;var n=["apiKey="+encodeURIComponent(e.apiKey)];e.apiKey||(n=["app_id="+encodeURIComponent(e.appId),"app_code="+encodeURIComponent(e.appCode)]),e.language&&n.push("lg="+encodeURIComponent(e.language)),e.language2&&n.push("lg2="+encodeURIComponent(e.language2));var o="/maptile/2.1/{resource}/{mapId}/{scheme}/{z}/{x}/{y}/{tileResolution}/{format}"+("?"+n.join("&")),a="/maptile/2.1/copyright/{mapId}?apiKey={apiKey}",r="maps.ls.hereapi.com";e.apiKey||(r="maps"+(e.useCIT?".cit":"")+".api.here.com",a="/maptile/2.1/copyright/{mapId}?app_id={appId}&app_code={appCode}");var i="base."+r;"satellite"!=t&&"terrain"!=t&&"hybrid"!=t||(i="aerial."+r),-1!==e.scheme.indexOf(".traffic.")&&(i="traffic"+r);var s="http"+(e.useHTTPS?"s":""),c=s+"://{s}."+i+o;this._attributionUrl=L.Util.template(s+"://1."+i+a,this.options),L.TileLayer.prototype.initialize.call(this,c,e),this._attributionText=""},onAdd:function(e){L.TileLayer.prototype.onAdd.call(this,e),this._attributionBBoxes||this._fetchAttributionBBoxes()},onRemove:function(e){this._map.attributionControl.removeAttribution(this._attributionText),this._attributionText="",this._map.off("moveend zoomend resetview",this._findCopyrightBBox,this),L.TileLayer.prototype.onRemove.call(this,e)},_fetchAttributionBBoxes:function(){var e=new XMLHttpRequest;e.onreadystatechange=L.bind((function(){4==e.readyState&&200==e.status&&this._parseAttributionBBoxes(JSON.parse(e.responseText))}),this),e.open("GET",this._attributionUrl,!0),e.send()},_parseAttributionBBoxes:function(e){if(this._map){for(var t=e[this.options.scheme.split(".")[0]]||e.normal,n=0;n<t.length;n++)if(t[n].boxes)for(var o=0;o<t[n].boxes.length;o++){var a=t[n].boxes[o];t[n].boxes[o]=L.latLngBounds([[a[0],a[1]],[a[2],a[3]]])}this._map.on("moveend zoomend resetview",this._findCopyrightBBox,this),this._attributionProviders=t,this._findCopyrightBBox()}},_findCopyrightBBox:function(){if(this._map){for(var e=this._attributionProviders,t=[],n=this._map.getZoom(),o=this._map.getBounds(),a=0;a<e.length;a++)if(e[a].minLevel<=n&&e[a].maxLevel>=n)if(e[a].boxes)for(var r=0;r<e[a].boxes.length;r++){var i=e[a].boxes[r];if(o.intersects(i)){t.push(e[a]);break}}else t.push(e[a]);var s=['<a href="https://legal.here.com/en-gb/terms" target="_blank" rel="noopener noreferrer">HERE maps</a>'];for(a=0;a<t.length;a++){var c=t[a];s.push('<abbr title="'+c.alt+'">'+c.label+"</abbr>")}var l="\xa9 "+s.join(", ")+". ";l!==this._attributionText&&(this._map.attributionControl.removeAttribution(this._attributionText),this._map.attributionControl.addAttribution(this._attributionText=l))}}}),L.tileLayer.here=function(e){return new L.TileLayer.HERE(e)}},55387:function(e,t,n){"use strict";var o=n(45243),a=n(48782);o.DivIcon.SVGIcon=a.q,o.DivIcon.SVGIcon.DecidimIcon=o.DivIcon.SVGIcon.extend({options:{fillColor:"#ef604d",opacity:0},_createPathDescription:function(){return"M14 1.17a11.685 11.685 0 0 0-11.685 11.685c0 11.25 10.23 20.61 10.665 21a1.5 1.5 0 0 0 2.025 0c0.435-.435 10.665-9.81 10.665-21A11.685 11.685 0 0 0 14 1.17Zm0 17.415A5.085 5.085 0 1 1 19.085 13.5 5.085 5.085 0 0 1 14 18.585Z"},_createCircle:function(){return""},_createSVG:function(){var e=this._createPath(),t=this._createCircle(),n=this._createText(),o="".concat(this.options.className,"-svg"),a="width:".concat(this.options.iconSize.x,"px; height:").concat(this.options.iconSize.y,"px;");return'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="'.concat(o,'" style="').concat(a,'">').concat(e).concat(t).concat(n,"</svg>")}});n(74247),n(95732),n(54183),n(37544),n(62743);function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.awesomeMap=t,this.main=o.control.layers(null,null,{position:"topleft",sortLayers:!1,collapsed:this.awesomeMap.config.collapsedMenu}),this.awesomeMap.config.hideControls&&$(this.main.getContainer()).hide(),this.$loading=$("#awesome-map .loading-spinner"),this.onHashtag=this._orderHashtags,this.awesomeMap.map.on("overlayadd",(function(){n.removeHiddenCategories()}))}var t,n,a;return t=e,(n=[{key:"attach",value:function(){var e=this;this.main.addTo(this.awesomeMap.map),this.addSearchControls(),this.awesomeMap.config.menu.categories&&this.addCategoriesControls(),$("#awesome-map").on("click",".awesome_map-title-control",(function(e){e.preventDefault(),e.stopPropagation(),$("#awesome_map-categories-control").toggleClass("active"),$("#awesome_map-hashtags-control").toggleClass("active")})),$("#awesome-map").on("change",".awesome_map-hashtags-selector",(function(t){t.preventDefault(),t.stopPropagation(),$(t.target).closest("label").data("layer")&&e.updateHashtagLayers()})),$("#awesome-map").on("click",".awesome_map-toggle_all_tags",(function(t){t.preventDefault(),t.stopPropagation(),$("#awesome-map .awesome_map-hashtags-selector").prop("checked",$("#awesome-map .awesome_map-hashtags-selector:checked").length<$("#awesome-map .awesome_map-hashtags-selector").length),e.updateHashtagLayers()}))}},{key:"addSearchControls",value:function(){$(this.main.getContainer()).contents("form").append('<div id="awesome_map-categories-control" class="active"><b class="awesome_map-title-control">'.concat(window.DecidimAwesome.texts.categories,'</b><div class="categories-container"></div></div>\n    <div id="awesome_map-hashtags-control"><b class="awesome_map-title-control">').concat(window.DecidimAwesome.texts.hashtags,'</b><div class="hashtags-container"></div><a href="#" class="awesome_map-toggle_all_tags">').concat(window.DecidimAwesome.texts.select_deselect_all,"</a></div>"))}},{key:"addCategoriesControls",value:function(){var e=this;this.awesomeMap.categories.forEach((function(t){var n='<i class="awesome_map-category_'.concat(t.id,'"></i> ').concat(t.name);e.awesomeMap.layers[t.id]={label:n,group:new o.FeatureGroup.SubGroup(e.awesomeMap.cluster)},e.awesomeMap.layers[t.id].group.addTo(e.awesomeMap.map),$("#awesome_map-categories-control .categories-container").append('<label data-layer="'.concat(t.id,'" class="awesome_map-category-').concat(t.id).concat(t.parent?" subcategory":"",'" data-parent="').concat(t.parent,'"><input type="checkbox" class="awesome_map-categories-selector" checked><span>').concat(n,"</span></label>"))})),$("#awesome-map").on("change",".awesome_map-categories-selector",(function(t){t.preventDefault(),t.stopPropagation();var n=$(t.target).closest("label").data("layer"),o=e.awesomeMap.getCategory(n);if(o){var a=e.awesomeMap.layers[o.id];t.target.checked?e.awesomeMap.map.addLayer(a.group):e.awesomeMap.map.removeLayer(a.group),e._indeterminateParentInput(o),e.updateHashtagLayers()}}))}},{key:"addHashtagsControls",value:function(e,t){var n=this;e&&e.length&&($("#awesome_map-hashtags-control").show(),e.forEach((function(e){n.awesomeMap.layers[e.tag]||(n.awesomeMap.layers[e.tag]={label:e.name,group:new o.FeatureGroup.SubGroup(n.awesomeMap.cluster)},n.awesomeMap.map.addLayer(n.awesomeMap.layers[e.tag].group),$("#awesome_map-hashtags-control .hashtags-container").append('<label data-layer="'.concat(e.tag,'" class="awesome_map-hashtag-').concat(e.tag,'"><input type="checkbox" class="awesome_map-hashtags-selector" checked><span>').concat(e.name,"</span></label>")),n.onHashtag(e,$("#awesome_map-hashtags-control .hashtags-container"))),n.awesomeMap.layers[e.tag].group.addLayer(t);var a=$("label.awesome_map-hashtag-".concat(e.tag));a.attr("title","".concat(parseInt(a.attr("title")||0)+1," ").concat(window.DecidimAwesome.texts.items))})))}},{key:"showCategory",value:function(e){$("#awesome_map-categories-control").show();var t=$("label.awesome_map-category-".concat(e.id)),n=$("label.awesome_map-category-".concat(e.parent));t.show(),t.attr("title","".concat(parseInt(t.attr("title")||0)+1," ").concat(window.DecidimAwesome.texts.items)),n.show(),n.attr("title","".concat(parseInt(n.attr("title")||0)+1," ").concat(window.DecidimAwesome.texts.items))}},{key:"removeHiddenComponents",value:function(){var e=this;$(".awesome_map-component").each((function(t,n){var o=e.awesomeMap.layers[$(n).data("layer")],a=$(n).closest("div").find("input:not(:checked)");o&&a.length&&(e.awesomeMap.map.addLayer(o.group),e.awesomeMap.map.removeLayer(o.group))}))}},{key:"removeHiddenCategories",value:function(){var e=this;$(".awesome_map-categories-selector:not(:checked)").each((function(t,n){var o=e.awesomeMap.layers[$(n).closest("label").data("layer")];o&&(e.awesomeMap.map.addLayer(o.group),e.awesomeMap.map.removeLayer(o.group))}))}},{key:"updateHashtagLayers",value:function(){var e=this;$(".awesome_map-hashtags-selector").each((function(t,n){var o=e.awesomeMap.layers[$(n).closest("label").data("layer")];o&&e.awesomeMap.map.removeLayer(o.group)})),$(".awesome_map-hashtags-selector:checked").each((function(t,n){var o=e.awesomeMap.layers[$(n).closest("label").data("layer")];o&&e.awesomeMap.map.addLayer(o.group)})),this.removeHiddenComponents(),this.removeHiddenCategories()}},{key:"updateStats",value:function(e,t){$("#awesome_map-".concat(e)).attr("title","".concat(t," ").concat(window.DecidimAwesome.texts.items))}},{key:"_indeterminateParentInput",value:function(e){if(e.parent){var t=$(".awesome_map-category-".concat(e.parent)).contents("input"),n=$('[class^="awesome_map-category-"][data-parent="'.concat(e.parent,'"]:visible')),o=n.contents("input:checked").length;t.prop("indeterminate",o!=n.length&&0!=o)}}},{key:"_orderHashtags",value:function(e,t){var n=t.contents("label:last");n.prev("label").length&&t.contents("label").each((function(e,t){if($(t).text().localeCompare(n.text())>0)return $(t).before(n),!1}))}}])&&r(t.prototype,n),a&&r(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.awesomeMap=t,this.component=n,this.templateId="marker-meeting-popup",this.controls={label:this.getLabel(),group:new o.FeatureGroup.SubGroup(this.awesomeMap.cluster)},this.onFinished=function(){},this.allNodes=[]}var t,n,a;return t=e,n=[{key:"getLabel",value:function(){var e=this.awesomeMap.config.menu.mergeComponents||!this.component.name?window.DecidimAwesome.texts[this.component.type]:this.component.name;return'<span class="awesome_map-component" id="awesome_map-component_'.concat(this.component.id,'" title="0" data-layer="').concat(this.component.type,'">').concat(e,"</span>")}},{key:"setFetcher",value:function(e){var t=this;this.fetcher=new e(this),this.fetcher.onFinished=function(){t._onFinished()},this.fetcher.onCollection=function(e){if(e&&e.edges){try{t.awesomeMap.cluster.addLayers(e.edges.map((function(e){return e.node.marker})))}catch(n){console.error("Failed marker collection assignation",e)}e.edges.forEach((function(e){t.addMarkerCategory(e.node.marker,e.node.category),t.addMarkerHashtags(e.node.marker,e.node.hashtags)}))}}}},{key:"addControls",value:function(){this.awesomeMap.controls.main.addOverlay(this.controls.group,this.controls.label),this.awesomeMap.map.addLayer(this.controls.group)}},{key:"loadNodes",value:function(){}},{key:"addMarker",value:function(e,t){var n=this;e.on("click",(function(){var a=document.createElement("div");a.innerHTML=$.templates("#".concat(n.templateId)).render(t);var r=o.popup({maxwidth:640,minWidth:500,keepInView:!0,className:"map-info"}).setLatLng(e.getLatLng()).setContent(a);n.awesomeMap.map.addLayer(r)})),t.marker=e,t.component=this.component,this.allNodes.push(t)}},{key:"addMarkerCategory",value:function(e,t){var n=this.awesomeMap.getCategory(t);if(this.awesomeMap.layers[n.id])try{this.awesomeMap.layers[n.id].group.addLayer(e),this.awesomeMap.controls.showCategory(n)}catch(o){console.error("Failed category marker assignation",e,o.message)}}},{key:"addMarkerHashtags",value:function(e,t){if(this.awesomeMap.config.menu.hashtags)try{this.awesomeMap.controls.addHashtagsControls(t,e)}catch(n){console.error("Failed hashtags marker assignation",e,n.message)}}},{key:"_onFinished",value:function(){this.awesomeMap.controls.updateStats("component_".concat(this.component.id),this.allNodes.length),this.onFinished()}},{key:"createIcon",value:function(e,t){return new e({color:"#000000",fillColor:t,circleFillColor:t,weight:1,stroke:t,fillOpacity:.9})}}],n&&s(t.prototype,n),a&&s(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.query=t,this.variables=n}var t,n,o;return t=e,(n=[{key:"fetch",value:function(e){$.ajax({method:"POST",url:"/api",contentType:"application/json",data:JSON.stringify({query:this.query,variables:this.variables})}).done((function(t){e(t.data)}))}},{key:"fetchAll",value:function(e){this.fetch(e)}}])&&l(t.prototype,n),o&&l(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.controller=t,this.config={length:t.awesomeMap.config.length||255},this.onFinished=function(){},this.onNode=function(){},this.onCollection=function(){},this.hashtags=[],this.collection=this.controller.component.type,this.query="query ($id: ID!, $after: String!) {\n        component(id: $id) {\n          id\n          __typename\n        }\n      }"}var t,n,o;return t=e,n=[{key:"fetch",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n={id:this.controller.component.id,after:t},o=new u(this.query,n);o.fetchAll((function(t){if(t){var n=t.component[e.collection];n.edges.forEach((function(t){var n=t.node;n&&n.coordinates&&n.coordinates.latitude&&n.coordinates.longitude&&(e.decorateNode(n),e.onNode(n))})),e.onCollection(n),n.pageInfo.hasNextPage?e.fetch(n.pageInfo.endCursor):e.onFinished()}}))}},{key:"decorateNode",value:function(e){var t=this.findTranslation(e.body.translations),n=this.findTranslation(e.title.translations);e.hashtags=this.collectHashtags(n),e.hashtags=e.hashtags.concat(this.collectHashtags(t)),e.title.translation=this.replaceHashtags(n,e.hashtags),e.body.translation=this.appendHtmlHashtags(this.truncate(this.removeHashtags(t)).replace(/\n/g,"<br>"),e.hashtags),e.link="".concat(this.controller.component.url,"/").concat(this.collection,"/").concat(e.id)}},{key:"findTranslation",value:function(e){var t,n=document.querySelector("html").getAttribute("lang");return e.forEach((function(e){e.text&&(t&&e.locale!=n||(t=e.text))})),t}},{key:"collectHashtags",value:function(e){var t=this,n=[];if(e){var o=e.match(/gid:\/\/[^\s<&]+/g);o&&(n=o.filter((function(e){return-1!=e.indexOf("/Decidim::Hashtag/")})).map((function(e){var n=e.split("/"),o="_"==n[5].charAt(0),a=o?n[5].substr(1):n[5],r="#".concat(a),i='<a href="/search?term='.concat(r,'">').concat(r,"</a>"),s={color:getComputedStyle(document.documentElement).getPropertyValue("--secondary"),gid:e,id:parseInt(n[4],10),fromSelector:o,tag:a,name:r,html:i};return t.hashtags.push(s),s})))}return n}},{key:"replaceHashtags",value:function(e,t){return t.forEach((function(t){e=e.replace(t.gid,t.name)})),e}},{key:"removeHashtags",value:function(e){return e.replace(/gid:\/\/[^\s<&]+/g,"")}},{key:"appendHtmlHashtags",value:function(e,t){return t.forEach((function(t){e+=" ".concat(t.html)})),e}},{key:"truncate",value:function(e){return $.truncate(e,this.config)}}],n&&p(t.prototype,n),o&&p(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=w(e);if(t){var a=w(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return g(this,n)}}function g(e,t){if(t&&("object"===m(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(r,e);var t,n,o,a=y(r);function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=a.call(this,e)).query="query ($id: ID!, $after: String!) {\n      component(id: $id) {\n          id\n          __typename\n          ... on Proposals {\n            proposals(first: 50, after: $after){\n              pageInfo {\n                hasNextPage\n                endCursor\n              }\n              edges {\n                node {\n                  id\n                  state\n                  title {\n                    translations {\n                      text\n                      locale\n                    }\n                  }\n                  body {\n                    translations {\n                      text\n                      locale\n                    }\n                  }\n                  address\n                  coordinates {\n                    latitude\n                    longitude\n                  }\n                  amendments {\n                    emendation {\n                      id\n                    }\n                  }\n                  category {\n                    id\n                  }\n                }\n              }\n            }\n          }\n        }\n      }",t}return t=r,n&&h(t.prototype,n),o&&h(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(f);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(){return k="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=O(e,t);if(o){var a=Object.getOwnPropertyDescriptor(o,t);return a.get?a.get.call(arguments.length<3?e:n):a.value}},k.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=P(e);if(t){var a=P(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return M(this,n)}}function M(e,t){if(t&&("object"===b(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var j=o.DivIcon.SVGIcon.DecidimIcon.extend({options:{fillColor:"#ef604d",fillOpacity:.8,strokeWidth:1,strokeOpcacity:1}}),S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(i,e);var t,n,a,r=x(i);function i(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=r.call(this,e,t)).templateId="marker-proposal-popup",n.amendments={},n.setFetcher(v),n}return t=i,(n=[{key:"addControls",value:function(){k(P(i.prototype),"addControls",this).call(this),this.awesomeMap.config.menu.amendments&&this.component.amendments&&!this.awesomeMap.layers.amendments&&(this.awesomeMap.layers.amendments={label:'<span class="awesome_map-component" id="awesome_map-amendments_'.concat(this.component.id,'" title="0" data-layer="amendments">').concat(window.DecidimAwesome.texts.amendments,"</span>"),group:new o.FeatureGroup.SubGroup(this.awesomeMap.cluster)},this.awesomeMap.controls.main.addOverlay(this.awesomeMap.layers.amendments.group,this.awesomeMap.layers.amendments.label),this.awesomeMap.layers.amendments.group.addTo(this.awesomeMap.map))}},{key:"loadNodes",value:function(){var e=this;this.fetcher.onNode=function(t){var n=new o.Marker([t.coordinates.latitude,t.coordinates.longitude],{icon:e.createIcon(j,e.awesomeMap.getCategory(t.category).color),title:t.title.translation});t.amendments&&t.amendments.length&&t.amendments.forEach((function(n){e.amendments[n.emendation.id]=t})),e.addMarker(n,t)},this.fetcher.fetch()}},{key:"_onFinished",value:function(){var e=this,t=Object.entries(this.amendments);this.awesomeMap.controls.updateStats("component_".concat(this.component.id),this.allNodes.length-t.length),this.awesomeMap.controls.updateStats("amendments_".concat(this.component.id),t.length),t.forEach((function(t){var n=e.allNodes.find((function(e){return e.id==t[0]})),o=t[1];if(n){try{n.marker.removeFrom(e.controls.group)}catch(a){console.error("error removeFrom marker",n,"layer",e.controls.group,a)}e.awesomeMap.config.menu.amendments&&(n.marker.addTo(e.awesomeMap.layers.amendments.group),o.category&&(n.marker.setIcon(e.createIcon(j,e.awesomeMap.getCategory(o.category).color)),e.addMarkerCategory(n.marker,o.category)))}})),this.onFinished()}}])&&_(t.prototype,n),a&&_(t,a),Object.defineProperty(t,"prototype",{writable:!1}),i}(c);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=H(e);if(t){var a=H(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return R(this,n)}}function R(e,t){if(t&&("object"===T(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var B=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(r,e);var t,n,o,a=E(r);function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=a.call(this,e)).query="query ($id: ID!, $after: String!) {\n    component(id: $id) {\n        id\n        __typename\n        ... on Meetings {\n          meetings(first: 50, after: $after) {\n            pageInfo {\n              hasNextPage\n              endCursor\n            }\n            edges {\n              node {\n                id\n                title {\n                  translations {\n                    text\n                    locale\n                  }\n                }\n                body: description {\n                  translations {\n                    text\n                    locale\n                  }\n                }\n                startTime\n                location {\n                  translations {\n                    text\n                    locale\n                  }\n                }\n                address\n                locationHints {\n                  translations {\n                    text\n                    locale\n                  }\n                }\n                coordinates {\n                  latitude\n                  longitude\n                }\n                category {\n                  id\n                }\n              }\n            }\n          }\n        }\n      }\n    }",t}return t=r,n&&I(t.prototype,n),o&&I(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(f);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=z(e);if(t){var a=z(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return G(this,n)}}function G(e,t){if(t&&("object"===D(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}var q=o.DivIcon.SVGIcon.DecidimIcon.extend({_createPathDescription:function(){return"M 15.991543,4 C 7.3956015,4 2.9250351,10.5 3.000951,16.999999 3.1063486,26.460968 12.747693,30.000004 15.991543,43 19.242091,30.000004 29,26.255134 29,16.999999 29,10.5 23.951131,4 15.996007,4 m -0.153508,2.6000001 a 2.1720294,2.1076698 0 0 1 2.330514,2.1124998 2.177008,2.1125006 0 0 1 -4.354016,0 2.1720294,2.1076698 0 0 1 2.023502,-2.1124998 m -2.651707,4.8056679 h 5.610202 l 3.935584,7.569899 -1.926038,0.934266 -2.009546,-3.859265 v 14.557403 h -2.484243 v -9.126003 h -0.642162 v 9.126003 H 13.190347 V 16.050568 l -2.009545,3.859265 -1.926036,-0.934266 3.935581,-7.569899"}}),V=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(i,e);var t,n,a,r=N(i);function i(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=r.call(this,e,t)).templateId="marker-meeting-popup",n.setFetcher(B),n}return t=i,(n=[{key:"loadNodes",value:function(){var e=this;this.fetcher.onNode=function(t){var n=new o.Marker([t.coordinates.latitude,t.coordinates.longitude],{icon:e.createIcon(q,e.awesomeMap.getCategory(t.category).color),title:t.title.translation});e.addMarker(n,t)},this.fetcher.fetch()}}])&&A(t.prototype,n),a&&A(t,a),Object.defineProperty(t,"prototype",{writable:!1}),i}(c);function U(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var W=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.map=t,this.categories=window.AwesomeMap&&window.AwesomeMap.categories||[],this.config=$.extend({length:255,center:null,zoom:8,menu:{amendments:!1,meetings:!1,categories:!0,hashtags:!1,mergeComponents:!1},show:{withdrawn:!1,accepted:!1,evaluating:!1,notAnswered:!1,rejected:!1},hideControls:!1,collapsedMenu:!1,components:[]},n),this.layers={},this.cluster=new o.MarkerClusterGroup,this.map.addLayer(this.cluster),this.controls=new i(this),this.onFinished=function(){},this.controllers={},this.loading=[],this._firstController={}}var t,n,a;return t=e,(n=[{key:"loadControllers",value:function(){var e=this;this.autoResize(),this.controls.attach(),this.config.components.forEach((function(t){var n=e._getController(t);n&&(n.loadNodes(),e.loading.push(t.type),n.onFinished=function(){e.loading.pop(),e.autoResize(),0==e.loading.length&&(e.controls.$loading.hide(),e.onFinished())})}))}},{key:"autoResize",value:function(){var e=this.cluster.getBounds();this.config.center&&this.config.zoom?this.map.setView(this.config.center,this.config.zoom):e.isValid()&&this.map.fitBounds([[e.getNorth(),e.getEast()],[e.getSouth(),e.getWest()]],{padding:[50,50]})}},{key:"getCategory",value:function(e){var t=this,n={color:getComputedStyle(document.documentElement).getPropertyValue("--primary"),children:function(){},parent:null,name:null};if(e){var o=e.id?parseInt(e.id,10):parseInt(e,10),a=this.categories.find((function(e){return e.id==o}));if(a)return a.children=function(){return t.categories.filter((function(e){return e.parent===a.id}))},a}return n}},{key:"_getController",value:function(e){var t;if("proposals"==e.type&&(t=new S(this,e)),"meetings"==e.type&&this.config.menu.meetings&&(t=new V(this,e)),t)return this._firstController[e.type]&&this.config.menu.mergeComponents?t.controls=this._firstController[e.type].controls:t.addControls(),this._firstController[e.type]=this._firstController[e.type]||t,this.controllers[e.type]=t,this.controllers[e.type]}}])&&U(t.prototype,n),a&&U(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();$((function(){var e={length:$("#awesome-map").data("truncate")||254,center:function(e){if(e){var t=e.split(",");if(t.length>=2){var n=parseFloat(t[0]),o=parseFloat(t[1]);if(n&&o)return[n,o]}}}($("#awesome-map").data("map-center")),zoom:$("#awesome-map").data("map-zoom"),menu:{amendments:$("#awesome-map").data("menu-amendments"),meetings:$("#awesome-map").data("menu-meetings"),categories:$("#awesome-map").data("menu-categories"),hashtags:$("#awesome-map").data("menu-hashtags"),mergeComponents:$("#awesome-map").data("menu-merge-components")},show:{withdrawn:$("#awesome-map").data("show-withdrawn"),accepted:$("#awesome-map").data("show-accepted"),evaluating:$("#awesome-map").data("show-evaluating"),notAnswered:$("#awesome-map").data("show-not-answered"),rejected:$("#awesome-map").data("show-rejected")},hideControls:$("#awesome-map").data("hide-controls"),collapsedMenu:$("#awesome-map").data("collapsed"),components:$("#awesome-map").data("components")};$("#awesome-map .google-map").on("ready.decidim",(function(t,n){n.off("popupopen"),n.off("popupclose"),window.AwesomeMap=new W(n,e),window.AwesomeMap.loadControllers()}))}))},37544:function(){!function(e){var t=/(\s*\S+|\s)$/,n=/^(\S*)/;e.truncate=function(t,n){return e("<div></div>").append(t).truncate(n).html()},e.fn.truncate=function(o){e.isNumeric(o)&&(o={length:o});var a=e.extend({},e.truncate.defaults,o);return this.each((function(){var o=e(this);a.noBreaks&&o.find("br").replaceWith(" ");var r=o.text(),i=r.length-a.length;if(a.stripTags&&o.text(r),a.words&&i>0){var s=r.slice(0,a.length).replace(t,"").length;i=a.keepFirstWord&&0===s?r.length-n.exec(r)[0].length-1:r.length-s-1}i<0||!i&&!a.truncated||e.each(o.contents().get().reverse(),(function(t,n){var o=e(n),r=o.text().length;return r<=i?(a.truncated=!0,i-=r,void o.remove()):3===n.nodeType?(a.finishBlock?e(n.splitText(r)).replaceWith(a.ellipsis):e(n.splitText(r-i-1)).replaceWith(a.ellipsis),!1):(o.truncate(e.extend(a,{length:r-i})),!1)}))}))},e.truncate.defaults={stripTags:!1,words:!1,keepFirstWord:!1,noBreaks:!1,finishBlock:!1,length:1/0,ellipsis:"\u2026"}}(jQuery)}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return t[e].call(r.exports,r,r.exports,o),r.exports}o.m=t,e=[],o.O=function(t,n,a,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],r=e[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&r||i>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,a,r]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={8981:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,i=n[0],s=n[1],c=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(c)var u=c(o)}for(t&&t(n);l<i.length;l++)r=i[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},n=self.webpackChunkapp=self.webpackChunkapp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=o.O(void 0,[7337,9335,8270],(function(){return o(55387)}));a=o.O(a)}();
//# sourceMappingURL=decidim_decidim_awesome_map-f4445bcc30b5e839877c.js.map