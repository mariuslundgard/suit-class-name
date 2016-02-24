/* global describe, it */

import suitClassName, {utilClassName} from '../src/'
import {assert} from 'chai'

describe('suitClassName', () => {
  it('should generate a `Block` class name', () => {
    const cn = suitClassName({
      namespace: null,
      block: 'Page'
    })

    assert.equal(cn, 'Page')
  })

  it('should generate a `Block-element` class name', () => {
    const cn = suitClassName({
      namespace: null,
      block: 'Page',
      element: 'title'
    })

    assert.equal(cn, 'Page-title')
  })

  it('should generate a `Block-element--modifier` class name', () => {
    const cn = suitClassName({
      namespace: null,
      block: 'Page',
      element: 'title',
      modifier: 'dark'
    })

    assert.equal(cn, 'Page-title--dark')
  })

  it('should generate a `u-util` class name', () => {
    const cn = utilClassName(['cf'])

    assert.equal(cn, 'u-cf')
  })

  it('should generate a `Block-element--modifier u-util` className', () => {
    const cn = suitClassName({
      namespace: null,
      block: 'Page',
      element: 'title',
      modifier: 'dark',
      state: null,
      utils: ['cf']
    })

    assert.equal(cn, 'Page-title--dark u-cf')
  })
})
