import Nightmare from 'nightmare'
require('babel-polyfill')
require('mocha-generators').install();
import {expect} from 'chai'

describe('smoke tests', function() {
  this.timeout(10000)
  let nightmare

  beforeEach(() => {
    nightmare = Nightmare({ show: true }).goto('http://localhost:8081').wait(4000)
  })

  afterEach(function*() {
    yield nightmare.end();
  });

  it('should show editor', function*() {
    const link = yield nightmare
      .click('div._2nN5ZNkp-sKhrDGGkqHKKT a:nth-child(1)')
      .evaluate(selector => document.querySelector(selector).href, 'div._1CpWBiG53VCop7nMhIsfE8 > a.title:nth-child(7)')
    expect(link.substring(0, 4)).to.equal('http')
  });

  it('should show tools', function*() {
    const path = yield nightmare
      .click('div._2nN5ZNkp-sKhrDGGkqHKKT a:nth-child(2)')
      .click('div._1Us_8H6LGfjquwDJWlE1u7:nth-child(1) a.tool:nth-child(3)')
      .evaluate(() => window.location.pathname)
    expect(path).to.equal('/tools/All/React')
  });
})