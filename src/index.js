function isString (str) {
  return typeof str === 'string'
}

function renderElementName (element) {
  return element ? `-${element}` : ''
}

function renderModifierName (modifierName) {
  return modifierName ? `--${modifierName}` : ''
}

function suitClassList ({namespace, block, element, modifier, state, utils}) {
  const classList = []
  const prefix = (isString(namespace) && namespace.length) ? `${namespace}-` : ''

  if (isString(modifier) && modifier.length) {
    modifier.split(' ').forEach((modifierName) =>
      classList.push(
        `${prefix}${block}${renderElementName(element)}${renderModifierName(modifierName)}`
      )
    )
  } else {
    classList.push(
      `${prefix}${block}${renderElementName(element)}`
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

export default function suitClassName (opts) {
  return suitClassList(opts).join(' ')
}
