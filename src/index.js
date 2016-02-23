function isString (str) {
  return typeof str === 'string'
}

function renderElementName (elementName) {
  return elementName ? `-${elementName}` : ''
}

function renderModifierName (modifierName) {
  return modifierName ? `--${modifierName}` : ''
}

function suitClassList (namespace, blockName, elementName, modifierNames, state, utils) {
  const classList = []
  const prefix = (isString(namespace) && namespace.length) ? `${namespace}-` : ''

  if (isString(modifierNames) && modifierNames.length) {
    modifierNames.split(' ').forEach((modifierName) =>
      classList.push(
        `${prefix}${blockName}${renderElementName(elementName)}${renderModifierName(modifierName)}`
      )
    )
  } else {
    classList.push(
      `${prefix}${blockName}${renderElementName(elementName)}`
    )
  }

  if (state) {
    Object.keys(state)
      .filter((key) => Boolean(state[key]))
      .forEach((key) => {
        classList.push(`is-${key}`)
      })
  }

  if (utils) {
    classList.push(utilClassName(utils))
  }

  return classList
}

export function utilClassName (utils) {
  const classList = utils.map((util) => `u-${util}`)

  return classList.join(' ')
}

export default function suitClassName () {
  return suitClassList(...arguments).join(' ')
}
