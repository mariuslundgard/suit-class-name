'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

function suitClassList() {
  var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) !== 'object') {
    throw new Error('Unexpected non-object argument');
  }

  if (!params.block) {
    throw new Error('Missing `block` parameter');
  }

  var classList = [];
  var prefix = renderPrefix(params.namespace);
  var element = renderElementName(params.element);

  if (isString(params.modifier) && params.modifier.length) {
    params.modifier.split(' ').forEach(function (modifier) {
      return classList.push('' + prefix + params.block + element + renderModifierName(modifier));
    });
  } else {
    classList.push('' + prefix + params.block + element);
  }

  if (params.state) {
    Object.keys(params.state).filter(function (key) {
      return Boolean(params.state[key]);
    }).forEach(function (key) {
      classList.push(prefix + 'is-' + key);
    });
  }

  if (params.utils) {
    classList.push(utilClassName(prefix, params.utils));
  }

  return classList;
}

/* eslint-enable complexity */

function utilClassName(prefix, utils) {
  var classList = utils.map(function (util) {
    return prefix + 'util-' + util;
  });

  return classList.join(' ');
}

function suitClassName(opts) {
  return suitClassList(opts).join(' ');
}