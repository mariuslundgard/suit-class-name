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

function suitClassList (params = {}) {
  if (typeof params !== 'object') {
    throw new Error('Unexpected non-object argument')
  }

  if (!params.block) {
    throw new Error('Missing `block` parameter')
  }

  const classList = []
  const prefix = renderPrefix(params.namespace)
  const element = renderElementName(params.element)

  if (isString(params.modifier) && params.modifier.length) {
    params.modifier.split(' ').forEach((modifier) =>
      classList.push(
        `${prefix}${params.block}${element}${renderModifierName(modifier)}`
      )
    )
  } else {
    classList.push(
      `${prefix}${params.block}${element}`
    )
  }

  if (params.state) {
    Object.keys(params.state)
      .filter((key) => Boolean(params.state[key]))
      .forEach((key) => {
        classList.push(`${prefix}is-${key}`)
      })
  }

  if (params.utils) {
    classList.push(utilClassName(prefix, params.utils))
  }

  return classList
}

/* eslint-enable complexity */

export function utilClassName (prefix, utils) {
  const classList = utils.map((util) => `${prefix}util-${util}`)

  return classList.join(' ')
}

export default function suitClassName (opts) {
  return suitClassList(opts).join(' ')
}
