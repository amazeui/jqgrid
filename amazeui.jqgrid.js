(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';

var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

if ($.jgrid && $.jgrid.styleUI) {
  $.jgrid.styleUI.AmazeUI = {
    common: {
      disabled: "am-disabled",
      highlight: "am-active",
      hover: "am-hover",
      cornerall: "",
      cornertop: "",
      cornerbottom: "",
      hidden: "",
      icon_base: "",
      overlay: "am-overlay",
      active: "am-active",
      error: "am-danger",
      button: "am-btn am-btn-default",
      content: ""
    },
    base: {
      entrieBox: "",
      viewBox: "am-table-responsive",
      headerTable: "am-table am-table-bordered",
      headerBox: "",
      rowTable: "am-table am-table-bordered am-table-hover",
      rowBox: "",
      footerTable: "am-table am-table-bordered",
      footerBox: "",
      headerDiv: "",
      gridtitleBox: "",
      customtoolbarBox: "",
      //overlayBox: "ui-overlay",
      loadingBox: "row",
      rownumBox: "active",
      scrollBox: "",
      multiBox: "checkbox",
      pagerBox: "",
      pagerTable: "am-table",
      toppagerBox: "",
      pgInput: "am-form-field",
      pgSelectBox: "am-form-field",
      pgButtonBox: "",
      icon_first: "am-icon-step-backward",
      icon_prev: "am-icon-backward",
      icon_next: "am-icon-forward",
      icon_end: "am-icon-step-forward",
      icon_asc: "am-icon-caret-up",
      icon_desc: "am-icon-caret-down",
      icon_caption_open: "am-icon-arrow-circle-up",
      icon_caption_close: "am-icon-arrow-circle-down"
    },
    modal: {
      modal: "modal-content",
      header: "modal-header",
      title: "modal-title",
      content: "modal-body",
      resizable: "ui-resizable-handle ui-resizable-se",
      icon_close: "am-icon-times-circle",
      icon_resizable: "am-icon-circle"
    },
    celledit: {
      inputClass: 'am-form-field'
    },
    inlinedit: {
      inputClass: 'am-form-field',
      icon_edit_nav: "am-icon-edit",
      icon_add_nav: "am-icon-plus",
      icon_save_nav: "am-icon-save",
      icon_cancel_nav: "am-icon-remove"
    },
    formedit: {
      inputClass: "am-form-field",
      icon_prev: "am-icon-step-backward",
      icon_next: "am-icon-step-forward",
      icon_save: "am-icon-save",
      icon_close: "am-icon-remove-circle",
      icon_del: "am-icon-trash",
      icon_cancel: "am-icon-remove-circle"
    },
    navigator: {
      icon_edit_nav: "am-icon-edit",
      icon_add_nav: "am-icon-plus",
      icon_del_nav: "am-icon-trash",
      icon_search_nav: "am-icon-search",
      icon_refresh_nav: "am-icon-refresh",
      icon_view_nav: "am-icon-info-sign",
      icon_newbutton_nav: "am-icon-new-window"
    },
    grouping: {
      icon_plus: 'am-icon-triangle-right',
      icon_minus: 'am-icon-triangle-bottom'
    },
    filter: {
      table_widget: 'am-table am-table-condensed',
      srSelect: 'am-form-field',
      srInput: 'am-form-field',
      menu_widget: '',
      icon_search: 'am-icon-search',
      icon_reset: 'am-icon-refresh',
      icon_query: 'am-icon-comment'
    },
    subgrid: {
      icon_plus: 'am-icon-triangle-right',
      icon_minus: 'am-icon-triangle-bottom',
      icon_open: 'am-icon-indent-left'
    },
    treegrid: {
      icon_plus: 'am-icon-triangle-right',
      icon_minus: 'am-icon-triangle-bottom',
      icon_leaf: 'am-icon-unchecked'
    },
    fmatter: {
      icon_edit: "am-icon-edit",
      icon_add: "am-icon-plus",
      icon_save: "am-icon-save",
      icon_cancel: "am-icon-remove-circle",
      icon_del: "am-icon-trash"
    }
  };
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
