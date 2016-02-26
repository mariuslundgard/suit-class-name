/* global describe, it */
/* eslint-disable max-len */

import suit, {utilClassName} from '../src/'
import {assert} from 'chai'

describe('suit', () => {
  it('should generate a `Block` class name', () => {
    const cn = suit({
      namespace: null,
      block: 'Page'
    })

    assert.equal(cn, 'Page')
  })

  it('should generate a `Block-element` class name', () => {
    const cn = suit({
      namespace: null,
      block: 'Page',
      element: 'title'
    })

    assert.equal(cn, 'Page-title')
  })

  it('should generate a `Block-element--modifier` class name', () => {
    const cn = suit({
      namespace: null,
      block: 'Page',
      element: 'title',
      modifier: 'dark'
    })

    assert.equal(cn, 'Page-title--dark')
  })

  it('should generate a `u-util` class name', () => {
    const cn = utilClassName('', ['cf'])

    assert.equal(cn, 'util-cf')
  })

  it('should generate a `Block-element--modifier util-util` className', () => {
    const cn = suit({
      namespace: null,
      block: 'Page',
      element: 'title',
      modifier: 'dark',
      state: null,
      utils: ['cf']
    })

    assert.equal(cn, 'Page-title--dark util-cf')
  })

  it('should generate a `Block-element--modifier1 Block-element--modifier2` class name', () => {
    const cn = suit({
      namespace: null,
      block: 'Page',
      element: 'title',
      modifier: 'dark small'
    })

    assert.equal(cn, 'Page-title--dark Page-title--small')
  })

  it('should generate a `namespace-Block-element--modifier1 namespace-Block-element--modifier2` class name', () => {
    const cn = suit({
      namespace: 'p',
      block: 'Page',
      element: 'title',
      modifier: 'dark small',
      utils: ['cf']
    })

    assert.equal(cn, 'p-Page-title--dark p-Page-title--small p-util-cf')
  })
})
