'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utilClassName = utilClassName;
exports.default = suitClassName;
function isString(str) {
  return typeof str === 'string';
}

function renderPrefix(namespace) {
  if (isString(namespace) && namespace.length) {
    return namespace + '-';
  }

  return '';
}

function renderElementName(element) {
  if (element) {
    return '-' + element;
  }

  return '';
}

function renderModifierName(modifier) {
  if (modifier) {
    return '--' + modifier;
  }

  return '';
}

/* eslint-disable complexity */

function suitClassList(_ref) {
  var namespace = _ref.namespace;
  var block = _ref.block;
  var element = _ref.element;
  var modifier = _ref.modifier;
  var state = _ref.state;
  var utils = _ref.utils;

  var classList = [];
  var p = renderPrefix(namespace);
  var e = renderElementName(element);

  if (isString(modifier) && modifier.length) {
    modifier.split(' ').forEach(function (modifierName) {
      return classList.push('' + p + block + e + renderModifierName(modifierName));
    });
  } else {
    classList.push('' + p + block + e);
  }

  if (state) {
    Object.keys(state).filter(function (key) {
      return Boolean(state[key]);
    }).forEach(function (key) {
      classList.push('is-' + key);
    });
  }

  if (utils) {
    classList.push(utilClassName(utils));
  }

  return classList;
}

/* eslint-enable complexity */

function utilClassName(utils) {
  var classList = utils.map(function (util) {
    return 'u-' + util;
  });

  return classList.join(' ');
}

function suitClassName(opts) {
  return suitClassList(opts).join(' ');
}