# suit-class-name [![Build Status](https://travis-ci.org/mariuslundgard/suit-class-name.svg?branch=master)](https://travis-ci.org/mariuslundgard/suit-class-name) [![Coverage Status](https://img.shields.io/coveralls/mariuslundgard/suit-class-name/master.svg?style=flat)](https://coveralls.io/github/mariuslundgard/suit-class-name?branch=master) [![npm version](https://img.shields.io/npm/v/suit-class-name.svg?style=flat)](https://www.npmjs.com/package/suit-class-name)

A utility library for creating [SUIT](https://github.com/suitcss/suit)-style class names.

## Installation

```sh
npm install suit-class-name
```

## Usage

```js
import suit from 'suit-class-name'

suit({
  namespace: 'ns',
  block: 'Button',
  element: 'label'
})
// "ns-Button-label"

suit({
  block: 'Button',
  element: 'label',
  modifier: 'dark'
})
// "Button-label--dark"

suit({
  block: 'Button',
  modifier: 'dark',
  state: {active: true},
  utils: ['cf']
})
// "Button--dark is-active util-cf"
```

With React:

```js
import React from 'react'
import suit from 'suit-class-name'

function block (params) {
  return suit(
    Object.assign(params || {}, {block: 'Message'})
  )
}

const Message = React.createClass({
  render () {
    return (
      <div className={block()}>
        <div className={block({element: 'title'})}>
          Hello, world!
        </div>
      </div>
    )
  }
}
```

See more examples in `test/`.
