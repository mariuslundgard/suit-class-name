'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utilClassName = utilClassName;
exports.default = suitClassName;
function isString(str) {
  return typeof str === 'string';
}

function renderElementName(elementName) {
  return elementName ? '-' + elementName : '';
}

function renderModifierName(modifierName) {
  return modifierName ? '--' + modifierName : '';
}

function suitClassList(namespace, blockName, elementName, modifierNames, state, utils) {
  var classList = [];
  var prefix = isString(namespace) && namespace.length ? namespace + '-' : '';

  if (isString(modifierNames) && modifierNames.length) {
    modifierNames.split(' ').forEach(function (modifierName) {
      return classList.push('' + prefix + blockName + renderElementName(elementName) + renderModifierName(modifierName));
    });
  } else {
    classList.push('' + prefix + blockName + renderElementName(elementName));
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

function utilClassName(utils) {
  var classList = utils.map(function (util) {
    return 'u-' + util;
  });

  return classList.join(' ');
}

function suitClassName() {
  return suitClassList.apply(undefined, arguments).join(' ');
}