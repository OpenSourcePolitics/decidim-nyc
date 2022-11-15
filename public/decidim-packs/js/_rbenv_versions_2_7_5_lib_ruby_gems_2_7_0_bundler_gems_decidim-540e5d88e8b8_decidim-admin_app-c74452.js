(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["_rbenv_versions_2_7_5_lib_ruby_gems_2_7_0_bundler_gems_decidim-540e5d88e8b8_decidim-admin_app-c74452"],{

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/entrypoints/decidim_admin.js":
/*!****************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/entrypoints/decidim_admin.js ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.flags.js */ "./node_modules/core-js/modules/es.regexp.flags.js");
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_immediate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.immediate.js */ "./node_modules/core-js/modules/web.immediate.js");
/* harmony import */ var core_js_modules_web_immediate_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_immediate_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill-exposed.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs-exposed.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var foundation_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! foundation-sites */ "./node_modules/foundation-sites/dist/js/foundation.esm.js");
/* harmony import */ var src_decidim_vendor_foundation_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/decidim/vendor/foundation-datepicker */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/vendor/foundation-datepicker.js");
/* harmony import */ var src_decidim_vendor_foundation_datepicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(src_decidim_vendor_foundation_datepicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_decidim_foundation_datepicker_locales__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/decidim/foundation_datepicker_locales */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/foundation_datepicker_locales.js");
/* harmony import */ var jquery_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery.autocomplete */ "./node_modules/jquery.autocomplete/jquery.autocomplete.js");
/* harmony import */ var jquery_autocomplete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery_autocomplete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jquery_serializejson__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery-serializejson */ "./node_modules/jquery-serializejson/jquery.serializejson.js");
/* harmony import */ var jquery_serializejson__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery_serializejson__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_decidim_admin_tab_focus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/decidim/admin/tab_focus */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/tab_focus.js");
/* harmony import */ var src_decidim_admin_tab_focus__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_tab_focus__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_decidim_admin_choose_language__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/decidim/admin/choose_language */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/choose_language.js");
/* harmony import */ var src_decidim_admin_application__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/decidim/admin/application */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/application.js");
/* harmony import */ var src_decidim_admin_resources_permissions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/decidim/admin/resources_permissions */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/resources_permissions.js");
/* harmony import */ var src_decidim_admin_welcome_notification__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/decidim/admin/welcome_notification */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/welcome_notification.js");
/* harmony import */ var src_decidim_admin_welcome_notification__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_welcome_notification__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_decidim_admin_newsletters__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/decidim/admin/newsletters */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/newsletters.js");
/* harmony import */ var src_decidim_admin_newsletters__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_newsletters__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var src_decidim_admin_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/decidim/admin/form */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/form.js");
/* harmony import */ var src_decidim_admin_external_domain_whitelist__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/decidim/admin/external_domain_whitelist */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/external_domain_whitelist.js");
/* harmony import */ var src_decidim_confirm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/decidim/confirm */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/confirm.js");
/* harmony import */ var src_decidim_admin_draggable_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/decidim/admin/draggable-list */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/draggable-list.js");
/* harmony import */ var src_decidim_admin_sortable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/decidim/admin/sortable */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/sortable.js");
/* harmony import */ var src_decidim_gallery__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/decidim/gallery */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/gallery.js");
/* harmony import */ var src_decidim_gallery__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(src_decidim_gallery__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var src_decidim_admin_moderations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/decidim/admin/moderations */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/moderations.js");
/* harmony import */ var src_decidim_admin_moderations__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_moderations__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var src_decidim_input_tags__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/decidim/input_tags */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/input_tags.js");
/* harmony import */ var src_decidim_input_hashtags__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/decidim/input_hashtags */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/input_hashtags.js");
/* harmony import */ var src_decidim_input_mentions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/decidim/input_mentions */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/input_mentions.js");
/* harmony import */ var src_decidim_vizzs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/decidim/vizzs */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/vizzs.js");
/* harmony import */ var src_decidim_ajax_modals__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/decidim/ajax_modals */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/ajax_modals.js");
/* harmony import */ var src_decidim_ajax_modals__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(src_decidim_ajax_modals__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var src_decidim_admin_officializations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/decidim/admin/officializations */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/officializations.js");
/* harmony import */ var src_decidim_admin_officializations__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_officializations__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var src_decidim_session_timeouter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/decidim/session_timeouter */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/session_timeouter.js");
/* harmony import */ var src_decidim_slug_form__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/decidim/slug_form */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/slug_form.js");
/* harmony import */ var src_decidim_slug_form__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(src_decidim_slug_form__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var entrypoints_decidim_admin_scss__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! entrypoints/decidim_admin.scss */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/entrypoints/decidim_admin.scss");































 // CSS

 // This needs to be loaded after confirm dialog to bind properly

_rails_ujs__WEBPACK_IMPORTED_MODULE_5___default().start();
window.addEventListener("DOMContentLoaded", function () {
  (0,src_decidim_admin_choose_language__WEBPACK_IMPORTED_MODULE_12__["default"])(document.querySelectorAll("select.language-change"));
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/application.js":
/*!********************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/application.js ***!
  \********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index-exposed.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var src_decidim_admin_toggle_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/admin/toggle_nav */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/toggle_nav.js");
/* harmony import */ var src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/admin/sort_list.component */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/sort_list.component.js");
/* harmony import */ var src_decidim_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/decidim/editor */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/editor.js");
/* harmony import */ var src_decidim_form_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/decidim/form_datepicker */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/form_datepicker.js");
/* harmony import */ var src_decidim_data_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/decidim/data_picker */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/data_picker.js");
/* harmony import */ var src_decidim_admin_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/decidim/admin/autocomplete.component */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/autocomplete.component.js");
/* harmony import */ var src_decidim_form_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/decidim/form_filter */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/form_filter.js");
/* harmony import */ var src_decidim_configuration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/decidim/configuration */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/configuration.js");
/* harmony import */ var src_decidim_input_character_counter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/decidim/input_character_counter */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/input_character_counter.js");
/* harmony import */ var src_decidim_admin_managed_users__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/decidim/admin/managed_users */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/managed_users.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/* eslint-disable no-invalid-this */














window.Decidim = window.Decidim || {};
window.Decidim.managedUsersForm = src_decidim_admin_managed_users__WEBPACK_IMPORTED_MODULE_11__["default"];
window.Decidim.config = new src_decidim_configuration__WEBPACK_IMPORTED_MODULE_9__["default"]();
window.Decidim.InputCharacterCounter = src_decidim_input_character_counter__WEBPACK_IMPORTED_MODULE_10__["default"];

var renderAutocompleteSelects = function renderAutocompleteSelects(nodeSelector) {
  window.$(nodeSelector).each(function (index, node) {
    var props = _objectSpread({}, window.$(node).data("autocomplete"));

    react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_decidim_admin_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__["default"], props), node);
  });
};

$(function () {
  window.theDataPicker = new src_decidim_data_picker__WEBPACK_IMPORTED_MODULE_6__["default"]($(".data-picker"));
  $(document).foundation();
  (0,src_decidim_admin_toggle_nav__WEBPACK_IMPORTED_MODULE_2__["default"])();
  renderAutocompleteSelects('[data-plugin="autocomplete"]');
  (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_3__["default"])("#steps tbody", {
    placeholder: $('<tr style="border-style: dashed; border-color: #000"><td colspan="4">&nbsp;</td></tr>')[0],
    onSortUpdate: function onSortUpdate($children) {
      var sortUrl = $("#steps tbody").data("sort-url");
      var order = $children.map(function (index, child) {
        return $(child).data("id");
      }).toArray();
      $.ajax({
        method: "POST",
        url: sortUrl,
        contentType: "application/json",
        data: JSON.stringify({
          items_ids: order
        })
      } // eslint-disable-line camelcase
      );
    }
  });
  (0,src_decidim_form_datepicker__WEBPACK_IMPORTED_MODULE_5__["default"])();
  $(".editor-container").each(function (_idx, container) {
    (0,src_decidim_editor__WEBPACK_IMPORTED_MODULE_4__["default"])(container);
  });
  $("form.new_filter").each(function () {
    var formFilter = new src_decidim_form_filter__WEBPACK_IMPORTED_MODULE_8__["default"]($(this));
    formFilter.mountComponent();
  });
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/autocomplete.component.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/autocomplete.component.js ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Autocomplete": function() { return /* binding */ Autocomplete; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index-exposed.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.es.js");
/* harmony import */ var react_select_scss_default_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select/scss/default.scss */ "./node_modules/react-select/scss/default.scss");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/* eslint no-unused-vars: 0 */

/* eslint consistent-return: 0 */







var Autocomplete = /*#__PURE__*/function (_React$Component) {
  _inherits(Autocomplete, _React$Component);

  var _super = _createSuper(Autocomplete);

  function Autocomplete(props) {
    var _this;

    _classCallCheck(this, Autocomplete);

    _this = _super.call(this, props);
    _this.minCharactersToSearch = 3;

    _this.handleChange = function (selectedOption) {
      _this.setState({
        selectedOption: selectedOption
      });

      if (_this.props.changeURL) {
        axios__WEBPACK_IMPORTED_MODULE_0___default().get(_this.props.changeURL, {
          headers: {
            Accept: "text/javascript"
          },
          withCredentials: true,
          params: {
            id: selectedOption.value
          }
        }).then(function (response) {
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.innerHTML = response.data;
          document.getElementsByTagName("head")[0].appendChild(script);
        })["catch"](function (error) {
          if (axios__WEBPACK_IMPORTED_MODULE_0___default().isCancel(error)) {// console.log("Request canceled", error.message);
          } else {//
          }
        });
      }
    };

    _this.filterOptions = function (options, filter, excludeOptions) {
      // Do no filtering, just return all options because
      // we return a filtered set from server
      return options;
    };

    _this.onInputChange = function (query) {
      if (query.length < _this.minCharactersToSearch) {
        _this.setState({
          noResultsText: _this.props.searchPromptText
        });
      } else {
        _this.setState({
          noResultsText: _this.props.noResultsText
        });
      }
    };

    _this.loadOptions = function (query, callback) {
      var lowerQuery = query.toLowerCase();

      if (_this.cancelTokenSource) {
        _this.cancelTokenSource.cancel();
      }

      if (lowerQuery.length < _this.minCharactersToSearch) {
        return callback(null, {
          options: [],
          complete: false
        });
      }

      _this.cancelTokenSource = axios__WEBPACK_IMPORTED_MODULE_0___default().CancelToken.source();
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(_this.props.searchURL, {
        cancelToken: _this.cancelTokenSource.token,
        headers: {
          Accept: "application/json"
        },
        withCredentials: true,
        params: {
          term: lowerQuery
        }
      }).then(function (response) {
        // CAREFUL! Only set complete to true when there are no more options,
        // or more specific queries will not be sent to the server.
        return callback(null, {
          options: response.data,
          complete: true
        });
      })["catch"](function (error) {
        if (!axios__WEBPACK_IMPORTED_MODULE_0___default().isCancel(error)) {
          return callback(error, {
            options: [],
            complete: false
          });
        }
      });
    };

    _this.state = {
      options: props.options,
      selectedOption: props.selected,
      searchPromptText: props.searchPromptText,
      noResultsText: props.noResultsText
    };
    return _this;
  }

  _createClass(Autocomplete, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          autoload = _this$props.autoload,
          name = _this$props.name,
          placeholder = _this$props.placeholder;
      var _this$state = this.state,
          selectedOption = _this$state.selectedOption,
          options = _this$state.options,
          searchPromptText = _this$state.searchPromptText,
          noResultsText = _this$state.noResultsText;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "autocomplete-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__.Async, {
        cache: false,
        name: name,
        value: selectedOption,
        options: options,
        placeholder: placeholder,
        searchPromptText: searchPromptText,
        noResultsText: noResultsText,
        onChange: this.handleChange,
        onInputChange: this.onInputChange,
        loadOptions: this.loadOptions,
        filterOptions: this.filterOptions,
        autoload: autoload,
        removeSelected: true,
        escapeClearsValue: false,
        onCloseResetsInput: false
      }));
    }
  }]);

  return Autocomplete;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);
Autocomplete.defaultProps = {
  autoload: false
};
Autocomplete.propTypes = {
  changeURL: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  searchPromptText: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  noResultsText: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  searchURL: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array),
  autoload: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (Autocomplete);

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/budget_rule_toggler.component.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/budget_rule_toggler.component.js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BudgetRuleTogglerComponent; }
/* harmony export */ });
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
}

var BudgetRuleTogglerComponent = /*#__PURE__*/function () {
  function BudgetRuleTogglerComponent() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, BudgetRuleTogglerComponent);

    this.ruleCheckboxes = options.ruleCheckboxes;

    this._runAll();
  }

  _createClass(BudgetRuleTogglerComponent, [{
    key: "_runAll",
    value: function _runAll() {
      var _this = this;

      this.ruleCheckboxes.each(function (_i, checkbox) {
        _this._bindEvent(checkbox);

        _this.run(checkbox);
      });
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent(target) {
      var _this2 = this;

      $(target).on("change", function (event) {
        _this2.run(event.target);
      });
    }
  }, {
    key: "run",
    value: function run(target) {
      var _this3 = this;

      this.toggleTextInput(target);

      if ($(target).prop("checked")) {
        this.ruleCheckboxes.filter(function (_i, checkbox) {
          return checkbox !== target;
        }).prop("checked", false).each(function (_i, checkbox) {
          _this3.toggleTextInput(checkbox);
        });
      }
    }
  }, {
    key: "toggleTextInput",
    value: function toggleTextInput(target) {
      var container = $(target).closest("div");

      if (container.length < 1) {
        return;
      }

      var containerClassPrefix = container.attr("class").replace(/^vote_rule_/, "vote_").replace(/_enabled_container$/, "");
      var input = $("[class^=\"".concat(containerClassPrefix, "\"][class$=\"_container\"]"));

      if ($(target).prop("checked")) {
        input.slideDown();
      } else {
        input.slideUp();
      }
    }
  }]);

  return BudgetRuleTogglerComponent;
}();



/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/choose_language.js":
/*!************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/choose_language.js ***!
  \************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ initLanguageChangeSelect; }
/* harmony export */ });
/* eslint-disable no-invalid-this */

/* eslint-disable require-jsdoc */
function initLanguageChangeSelect(elements) {
  elements.forEach(function (select) {
    select.addEventListener("change", function () {
      var targetTabPaneSelector = select.value;
      var tabsContent = select.parentElement.parentElement.nextElementSibling;
      tabsContent.querySelector(".is-active").classList.remove("is-active");
      tabsContent.querySelector(targetTabPaneSelector).classList.add("is-active");
    });
  });
}

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/draggable-list.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/draggable-list.js ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createSortableList; }
/* harmony export */ });
/* harmony import */ var src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/sort_list.component */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/sort_list.component.js");
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
/* eslint-disable require-jsdoc */



function createSortableList(lists) {
  (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_0__["default"])(lists, {
    handle: "li",
    forcePlaceholderSize: true,
    connectWith: ".js-connect"
  });
} // Once in DOM

$(function () {
  var $draggables = $(".draggable-list");
  var draggablesClassNames = [];
  $draggables.each(function (index, elem) {
    draggablesClassNames = [].concat(_toConsumableArray(draggablesClassNames), [".".concat(elem.className.split(" ").filter(function (name) {
      return /js-list.*/.test(name);
    })[0])]);
  });
  document.addEventListener("drag", function (event) {
    $draggables.not(event.target.parentElement).addClass("dragging");
  });
  document.addEventListener("dragend", function () {
    $draggables.removeClass("dragging");
  });
  createSortableList(draggablesClassNames.join(", "));
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/external_domain_whitelist.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/external_domain_whitelist.js ***!
  \**********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_auto_buttons_by_position_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/auto_buttons_by_position.component */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/auto_buttons_by_position.component.js");
/* harmony import */ var src_decidim_admin_auto_label_by_position_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/admin/auto_label_by_position.component */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/auto_label_by_position.component.js");
/* harmony import */ var src_decidim_admin_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/admin/dynamic_fields.component */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/dynamic_fields.component.js");
/* harmony import */ var src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/admin/sort_list.component */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/sort_list.component.js");




$(function () {
  var dynamicFieldDefinitions = [{
    placeHolderId: "external-domain-id",
    wrapperSelector: ".external-domains",
    fieldSelector: ".external-domain",
    addFieldSelector: ".add-external-domain"
  }];
  dynamicFieldDefinitions.forEach(function (section) {
    var fieldSelectorSuffix = section.fieldSelector.replace(".", "");
    var autoButtonsByPosition = new src_decidim_admin_auto_buttons_by_position_component__WEBPACK_IMPORTED_MODULE_0__["default"]({
      listSelector: "".concat(section.fieldSelector, ":not(.hidden)"),
      hideOnFirstSelector: ".move-up-question",
      hideOnLastSelector: ".move-down-question"
    });
    var autoLabelByPosition = new src_decidim_admin_auto_label_by_position_component__WEBPACK_IMPORTED_MODULE_1__["default"]({
      listSelector: "".concat(section.fieldSelector, ":not(.hidden)"),
      labelSelector: ".card-title span:first",
      onPositionComputed: function onPositionComputed(el, idx) {
        $(el).find("input[name$=\\[position\\]]").val(idx);
      }
    });

    var createSortableList = function createSortableList() {
      (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_3__["default"])(".external-domains-list:not(.published)", {
        handle: ".external-domain-divider",
        placeholder: '<div style="border-style: dashed; border-color: #000"></div>',
        forcePlaceholderSize: true,
        onSortUpdate: function onSortUpdate() {
          autoLabelByPosition.run();
          autoButtonsByPosition.run();
        }
      });
    };

    var hideDeletedItem = function hideDeletedItem($target) {
      var inputDeleted = $target.find("input[name$=\\[deleted\\]]").val();

      if (inputDeleted === "true") {
        $target.addClass("hidden");
        $target.hide(); // Allows re-submitting of the form

        $("input", $target).removeAttr("required");
      }
    };

    (0,src_decidim_admin_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_2__["default"])({
      placeholderId: section.placeHolderId,
      wrapperSelector: section.wrapperSelector,
      containerSelector: "".concat(section.wrapperSelector, "-list"),
      fieldSelector: section.fieldSelector,
      addFieldButtonSelector: section.addFieldSelector,
      removeFieldButtonSelector: ".remove-".concat(fieldSelectorSuffix),
      moveUpFieldButtonSelector: ".move-up-question",
      moveDownFieldButtonSelector: ".move-down-question",
      onAddField: function onAddField() {
        createSortableList();
        autoLabelByPosition.run();
        autoButtonsByPosition.run();
      },
      onRemoveField: function onRemoveField($field) {
        autoLabelByPosition.run();
        autoButtonsByPosition.run(); // Allows re-submitting of the form

        $("input", $field).removeAttr("required");
      },
      onMoveUpField: function onMoveUpField() {
        autoLabelByPosition.run();
        autoButtonsByPosition.run();
      },
      onMoveDownField: function onMoveDownField() {
        autoLabelByPosition.run();
        autoButtonsByPosition.run();
      }
    });
    createSortableList();
    $(section.fieldSelector).each(function (_idx, el) {
      var $target = $(el);
      hideDeletedItem($target);
    });
    autoLabelByPosition.run();
    autoButtonsByPosition.run();
  });
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/form.js":
/*!*************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/form.js ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_scope_picker_enabler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/scope_picker_enabler.component */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/scope_picker_enabler.component.js");
/* harmony import */ var src_decidim_admin_scope_picker_enabler_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_scope_picker_enabler_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_decidim_admin_proposal_infinite_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/admin/proposal_infinite_edit */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/proposal_infinite_edit.js");
/* harmony import */ var src_decidim_admin_proposal_infinite_edit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_proposal_infinite_edit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_decidim_admin_budget_rule_toggler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/admin/budget_rule_toggler.component */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/budget_rule_toggler.component.js");


 // Checks if the form contains fields with special CSS classes added in
// Decidim::Admin::SettingsHelper and acts accordingly.

$(function () {
  var budgetRuleToggler = new src_decidim_admin_budget_rule_toggler_component__WEBPACK_IMPORTED_MODULE_2__["default"]({
    ruleCheckboxes: $("input[id^='component_settings_vote_rule_']")
  });
  budgetRuleToggler.run(); // Prevents readonly containers from being modified.

  var $readonlyContainer = $(".readonly_container input");
  $readonlyContainer.click(function (event) {
    event.preventDefault();
    return false;
  }); // Target fields:
  // - amendments_wizard_help_text
  // - amendments_visibility
  // - amendment_creation_enabled
  // - amendment_reaction_enabled
  // - amendment_promotion_enabled
  // (1) Hides target fields if amendments_enabled component setting is NOT checked.
  // (2) Toggles visibilty of target fields when amendments_enabled component setting is clicked.

  var $amendmentsEnabled = $("input#component_settings_amendments_enabled");

  if ($amendmentsEnabled.length > 0) {
    var $amendmentStepSettings = $(".amendments_wizard_help_text_container, .amendments_visibility_container, .amendment_creation_enabled_container, .amendment_reaction_enabled_container, .amendment_promotion_enabled_container");

    if ($amendmentsEnabled.is(":not(:checked)")) {
      $amendmentStepSettings.hide();
    }

    $amendmentsEnabled.click(function () {
      $amendmentStepSettings.toggle();
    });
  }
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/managed_users.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/managed_users.js ***!
  \**********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ managedUsersForm; }
/* harmony export */ });
/* harmony import */ var src_decidim_admin_subform_toggler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/subform_toggler.component */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/subform_toggler.component.js");
/* eslint-disable require-jsdoc */

function managedUsersForm() {
  var subformToggler = new src_decidim_admin_subform_toggler_component__WEBPACK_IMPORTED_MODULE_0__["default"]({
    controllerSelect: $("select#impersonate_user_authorization_handler_name"),
    subformWrapperClass: "authorization-handler",
    globalWrapperSelector: "form"
  });
  subformToggler.run();
}

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/moderations.js":
/*!********************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/moderations.js ***!
  \********************************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $moderationDetails = $(".moderation-details");
  var $toggleContentButton = $moderationDetails.find(".toggle-content");
  var $reportedContent = $moderationDetails.find(".reported-content");
  var $currentContent = $reportedContent.find(".current");
  var $originalContent = $reportedContent.find(".original");
  $originalContent.hide();
  $toggleContentButton.on("click", function () {
    $currentContent.toggle();
    $originalContent.toggle();

    if ($currentContent.is(":hidden")) {
      $toggleContentButton.html($toggleContentButton.data("see-current-button-label"));
    } else {
      $toggleContentButton.html($toggleContentButton.data("see-original-button-label"));
    }
  });
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/newsletters.js":
/*!********************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/newsletters.js ***!
  \********************************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $form = $(".form.newsletter_deliver");

  if ($form.length > 0) {
    var $sendNewsletterToAllUsers = $form.find("#send_newsletter_to_all_users");
    var $sendNewsletterToFollowers = $form.find("#send_newsletter_to_followers");
    var $sendNewsletterToParticipants = $form.find("#send_newsletter_to_participants");
    var $participatorySpacesForSelect = $form.find("#participatory_spaces_for_select");
    var checkSelectiveNewsletterFollowers = $sendNewsletterToFollowers.find("input[type='checkbox']").prop("checked");
    var checkSelectiveNewsletterParticipants = $sendNewsletterToParticipants.find("input[type='checkbox']").prop("checked");
    $sendNewsletterToAllUsers.on("change", function (event) {
      var checked = event.target.checked;

      if (checked) {
        $sendNewsletterToFollowers.find("input[type='checkbox']").prop("checked", !checked);
        $sendNewsletterToParticipants.find("input[type='checkbox']").prop("checked", !checked);
        $participatorySpacesForSelect.hide();
      } else {
        $sendNewsletterToFollowers.find("input[type='checkbox']").prop("checked", !checked);
        $sendNewsletterToParticipants.find("input[type='checkbox']").prop("checked", !checked);
        $participatorySpacesForSelect.show();
      }
    });
    $sendNewsletterToFollowers.on("change", function (event) {
      var checked = event.target.checked;
      var selectiveNewsletterParticipants = $sendNewsletterToParticipants.find("input[type='checkbox']").prop("checked");

      if (checked) {
        $sendNewsletterToAllUsers.find("input[type='checkbox']").prop("checked", !checked);
        $participatorySpacesForSelect.show();
      } else if (!selectiveNewsletterParticipants) {
        $sendNewsletterToAllUsers.find("input[type='checkbox']").prop("checked", true);
        $participatorySpacesForSelect.hide();
      }
    });
    $sendNewsletterToParticipants.on("change", function (event) {
      var checked = event.target.checked;
      var selectiveNewsletterFollowers = $sendNewsletterToFollowers.find("input[type='checkbox']").prop("checked");

      if (checked) {
        $sendNewsletterToAllUsers.find("input[type='checkbox']").prop("checked", !checked);
        $participatorySpacesForSelect.show();
      } else if (!selectiveNewsletterFollowers) {
        $sendNewsletterToAllUsers.find("input[type='checkbox']").prop("checked", true);
        $participatorySpacesForSelect.hide();
      }
    });

    if (checkSelectiveNewsletterFollowers || checkSelectiveNewsletterParticipants) {
      $participatorySpacesForSelect.show();
    } else {
      $participatorySpacesForSelect.hide();
    }

    $(".form .spaces-block-tag").each(function (_i, blockTag) {
      var selectTag = $(blockTag).find(".chosen-select");
      selectTag.change(function () {
        var optionSelected = selectTag.find("option:selected").val();

        if (optionSelected === "all") {
          selectTag.find("option").not(":first").prop("selected", true);
          selectTag.find("option[value='all']").prop("selected", false);
        } else if (optionSelected === "") {
          selectTag.find("option").not(":first").prop("selected", false);
        }
      });
    });
    $form.on("change", function () {
      var $data = $form.serializeJSON().newsletter;
      var $url = $form.data("recipients-count-newsletter-path");
      var $modal = $("#recipients_count_spinner");
      $modal.removeClass("hide");
      $.get($url, {
        data: $data
      }, function (recipientsCount) {
        $("#recipients_count").text(recipientsCount);
      }).always(function () {
        $modal.addClass("hide");
      });
    });
  }
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/officializations.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/officializations.js ***!
  \*************************************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $modal = $("#show-email-modal");

  if ($modal.length === 0) {
    return;
  }

  var $button = $("[data-open=user_email]", $modal);
  var $email = $("#user_email", $modal);
  var $fullName = $("#user_full_name", $modal);
  $("[data-toggle=show-email-modal]").on("click", function (event) {
    event.preventDefault();
    $button.show();
    $button.attr("data-open-url", event.currentTarget.href);
    $fullName.text($(event.currentTarget).data("full-name"));
    $email.html("");
  });
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/proposal_infinite_edit.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/proposal_infinite_edit.js ***!
  \*******************************************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $limitiedTimeLabel = $("label[for='component_settings_proposal_edit_time_limited']");
  var $limitedTimeRadioButton = $("#component_settings_proposal_edit_time_limited");
  var $infiniteTimeRadioButton = $("#component_settings_proposal_edit_time_infinite");
  var $editTimeContainer = $(".proposal_edit_before_minutes_container");
  $editTimeContainer.detach().appendTo($limitiedTimeLabel);

  if ($infiniteTimeRadioButton.is(":checked")) {
    $editTimeContainer.hide();
  }

  $limitedTimeRadioButton.on("click", function () {
    $editTimeContainer.show();
  });
  $infiniteTimeRadioButton.on("click", function () {
    $editTimeContainer.hide();
  });
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/resources_permissions.js":
/*!******************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/resources_permissions.js ***!
  \******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_subform_multi_toggler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/subform_multi_toggler.component */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/subform_multi_toggler.component.js");

$(function () {
  var subformMultiToggler = new src_decidim_admin_subform_multi_toggler_component__WEBPACK_IMPORTED_MODULE_0__["default"]({
    controllerSelect: $("input[name$=\\[authorization_handlers\\]\\[\\]]"),
    subformWrapperClass: "authorization-handler",
    globalWrapperSelector: "fieldset"
  });
  subformMultiToggler.run();
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/scope_picker_enabler.component.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/scope_picker_enabler.component.js ***!
  \***************************************************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $ComponentScopeEnabled = $("#component_settings_scopes_enabled");
  var $ComponentScopeId = $("#component_settings_scope_id");

  if ($(".edit_component, .new_component").length > 0) {
    $ComponentScopeEnabled.on("change", function (event) {
      var checked = event.target.checked;
      window.theDataPicker.enabled($ComponentScopeId, checked);
    });
    window.theDataPicker.enabled($ComponentScopeId, $ComponentScopeEnabled.prop("checked"));
  }
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/sortable.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/sortable.js ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/sort_list.component */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/sort_list.component.js");
/* eslint-disable no-ternary */
 // Once in DOM

$(function () {
  var selector = ".js-sortable";
  var $sortable = $(selector);
  $sortable.each(function (index, elem) {
    var item = elem.id ? "#".concat(elem.id) : selector;
    (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_0__["default"])(item, {
      handle: "li",
      forcePlaceholderSize: true,
      placeholderClass: "sort-placeholder"
    });
  });
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/subform_multi_toggler.component.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/subform_multi_toggler.component.js ***!
  \****************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubformMultiTogglerComponent; }
/* harmony export */ });
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
}

var SubformMultiTogglerComponent = /*#__PURE__*/function () {
  function SubformMultiTogglerComponent() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SubformMultiTogglerComponent);

    this.controllerSelect = options.controllerSelect;
    this.subformWrapperClass = options.subformWrapperClass;
    this.globalWrapperSelector = options.globalWrapperSelector;

    this._bindEvent();

    this._runAll();
  }

  _createClass(SubformMultiTogglerComponent, [{
    key: "_runAll",
    value: function _runAll() {
      var _this = this;

      this.controllerSelect.each(function (idx, el) {
        _this.run(el);
      });
    }
  }, {
    key: "run",
    value: function run(target) {
      var $target = $(target);
      var subformWrapperClass = this.subformWrapperClass;
      var value = $target.val();
      var $form = $target.parents(this.globalWrapperSelector);
      var $selectedSubform = $form.find("#".concat(subformWrapperClass, "-").concat(value));

      if ($target.prop("checked")) {
        $selectedSubform.find("input,textarea,select").prop("disabled", false);
        $selectedSubform.show();
      } else {
        $selectedSubform.find("input,textarea,select").prop("disabled", true);
        $selectedSubform.hide();
      }
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this2 = this;

      this.controllerSelect.on("change", function (event) {
        _this2.run(event.target);
      });
    }
  }]);

  return SubformMultiTogglerComponent;
}();



/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/subform_toggler.component.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/subform_toggler.component.js ***!
  \**********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubformTogglerComponent; }
/* harmony export */ });
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
}

var SubformTogglerComponent = /*#__PURE__*/function () {
  function SubformTogglerComponent() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SubformTogglerComponent);

    this.controllerSelect = options.controllerSelect;
    this.subformWrapperClass = options.subformWrapperClass;
    this.globalWrapperSelector = options.globalWrapperSelector;

    this._bindEvent();

    this._runAll();
  }

  _createClass(SubformTogglerComponent, [{
    key: "_runAll",
    value: function _runAll() {
      var _this = this;

      this.controllerSelect.each(function (idx, el) {
        _this.run(el);
      });
    }
  }, {
    key: "run",
    value: function run(target) {
      var $target = $(target);
      var subformWrapperClass = this.subformWrapperClass;
      var value = $target.val();
      var $form = $target.parents(this.globalWrapperSelector);
      var $subforms = $form.find(".".concat(subformWrapperClass));
      var $selectedSubform = $subforms.filter("#".concat(subformWrapperClass, "-").concat(value));
      $subforms.find("input,textarea,select").prop("disabled", true);
      $subforms.hide();
      $selectedSubform.find("input,textarea,select").prop("disabled", false);
      $selectedSubform.show();
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this2 = this;

      this.controllerSelect.on("change", function (event) {
        _this2.run(event.target);
      });
    }
  }]);

  return SubformTogglerComponent;
}();



/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/tab_focus.js":
/*!******************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/tab_focus.js ***!
  \******************************************************************************************************************************************************/
/***/ (function() {

/**
 * When switching tabs in i18n fields, autofocus on the input to save clicks #212
 */
$(function () {
  // Event launched by foundation
  $("[data-tabs]").on("change.zf.tabs", function (event) {
    var $container = $(event.target).next(".tabs-content .tabs-panel.is-active"); // Detect quilljs editor inside the tabs-panel

    var $content = $container.find(".editor .ql-editor");

    if ($content.length > 0) {
      $content.focus(); // Detect if inside the tabs-panel have an input
    } else {
      $content = $container.find("input:first");

      if ($content.length > 0) {
        $content.focus();
      }
    }
  });
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/toggle_nav.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/toggle_nav.js ***!
  \*******************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toggleNav; }
/* harmony export */ });
/* eslint-disable require-jsdoc */
var showHideNav = function showHideNav(evt) {
  var navMenu = document.querySelector(".layout-nav");
  evt.preventDefault();
  navMenu.classList.toggle("is-nav-open");
};

function toggleNav() {
  var navTrigger = document.querySelector(".menu-trigger");

  if (navTrigger) {
    navTrigger.addEventListener("click", showHideNav);
  }
}

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/welcome_notification.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/src/decidim/admin/welcome_notification.js ***!
  \*****************************************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $scope = $("#welcome-notification-details");
  var $sendNotificationCheckbox = $("#organization_send_welcome_notification", $scope);
  var $customizeCheckbox = $("#organization_customize_welcome_notification", $scope);

  var toggleVisibility = function toggleVisibility() {
    if ($sendNotificationCheckbox.is(":checked")) {
      $(".send-welcome-notification-details", $scope).show();
    } else {
      $(".send-welcome-notification-details", $scope).hide();
    }

    if ($customizeCheckbox.is(":checked")) {
      $(".customize-welcome-notification-details", $scope).show();
    } else {
      $(".customize-welcome-notification-details", $scope).hide();
    }
  };

  $($sendNotificationCheckbox).click(function () {
    return toggleVisibility();
  });
  $($customizeCheckbox).click(function () {
    return toggleVisibility();
  });
  toggleVisibility();
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/slug_form.js":
/*!***********************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-core/app/packs/src/decidim/slug_form.js ***!
  \***********************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $wrapper = $(".slug");
  var $input = $wrapper.find("input");
  var $target = $wrapper.find("span.slug-url-value");
  $input.on("keyup", function (event) {
    $target.html(event.target.value);
  });
});

/***/ }),

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/entrypoints/decidim_admin.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-540e5d88e8b8/decidim-admin/app/packs/entrypoints/decidim_admin.scss ***!
  \******************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=_rbenv_versions_2_7_5_lib_ruby_gems_2_7_0_bundler_gems_decidim-540e5d88e8b8_decidim-admin_app-c74452.js.map