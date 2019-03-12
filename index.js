'use strict';

var backbone = require('backbone');
var jquery = require('jquery');
backbone.$ = backbone.$ || jquery;


module.exports = {
  Backbone: backbone,
  $: jquery,
  Marionette: require('backbone.marionette'),
  _: require('underscore'),
  Relational: require('backbone-relational'),
  i18n: require('i18next-client')
};

