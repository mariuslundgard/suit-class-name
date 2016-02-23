import suitClassName, {utilClassName} from '../src/'
import {assert} from 'chai'

describe('suitClassName', () => {
  it('should generate a `Block` class name', () => {
    const cn = suitClassName(null, 'Page')

    assert.equal(cn, 'Page')
  })

  it('should generate a `Block-element` class name', () => {
    const cn = suitClassName(null, 'Page', 'title')

    assert.equal(cn, 'Page-title')
  })

  it('should generate a `Block-element--modifier` class name', () => {
    const cn = suitClassName(null, 'Page', 'title', 'dark')

    assert.equal(cn, 'Page-title--dark')
  })

  it('should generate a `u-util` class name', () => {
    const cn = utilClassName(['cf'])

    assert.equal(cn, 'u-cf')
  })

  it('should generate a `Block-element--modifier u-util` className', () => {
    const cn = suitClassName(null, 'Page', 'title', 'dark', null, ['cf'])

    assert.equal(cn, 'Page-title--dark u-cf')
  })
})
