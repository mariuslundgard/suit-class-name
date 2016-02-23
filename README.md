# suit-class-name

Utility functions for creating [SUIT](https://github.com/suitcss/suit)-style class names.

## Installation

```sh
npm install suit-class-name
```

## Documentation

```js
import suitClassName from 'suit-class-name'

console.log(suitClassName(null, 'Button', 'label'))
// -> "Button-label"

console.log(suitClassName(null, 'Button', null, 'dark'))
// -> "Button--dark"

console.log(suitClassName(null, 'Button', null, 'dark', {active: true}))
// -> "Button--dark is-active"
```

See more examples in `test/`.
