# suit-class-name [![Build Status](https://travis-ci.org/mariuslundgard/suit-class-name.svg?branch=master)](https://travis-ci.org/mariuslundgard/suit-class-name) [![Coverage Status](https://img.shields.io/coveralls/mariuslundgard/suit-class-name/master.svg?style=flat)](https://coveralls.io/github/mariuslundgard/suit-class-name?branch=master) [![npm version](https://img.shields.io/npm/v/suit-class-name.svg?style=flat)](https://www.npmjs.com/package/suit-class-name)

A utility library for creating [SUIT](https://github.com/suitcss/suit)-style class names.

## Installation

```sh
npm install suit-class-name
```

## Usage

```js
import suitClassName from 'suit-class-name'

suitClassName('ns', 'Button', 'label')
// -> "ns-Button-label"

suitClassName(null, 'Button', null, 'dark')
// -> "Button--dark"

suitClassName(null, 'Button', null, 'dark', {active: true}, ['cf'])
// -> "Button--dark is-active util-cf"
```

See more examples in `test/`.
