function isString (str) {
  return typeof str === 'string'
}

function renderPrefix (namespace) {
  if (isString(namespace) && namespace.length) {
    return `${namespace}-`
  }

  return ''
}

function renderElementName (element) {
  if (element) {
    return `-${element}`
  }

  return ''
}

function renderModifierName (modifier) {
  if (modifier) {
    return `--${modifier}`
  }

  return ''
}

/* eslint-disable complexity */

function suitClassList ({namespace, block, element, modifier, state, utils}) {
  const classList = []
  const p = renderPrefix(namespace)
  const e = renderElementName(element)

  if (isString(modifier) && modifier.length) {
    modifier.split(' ').forEach((modifierName) =>
      classList.push(
        `${p}${block}${e}${renderModifierName(modifierName)}`
      )
    )
  } else {
    classList.push(
      `${p}${block}${e}`
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

/* eslint-enable complexity */

export function utilClassName (utils) {
  const classList = utils.map((util) => `u-${util}`)

  return classList.join(' ')
}

export default function suitClassName (opts) {
  return suitClassList(opts).join(' ')
}
