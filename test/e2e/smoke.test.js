import Nightmare from 'nightmare'
require('babel-polyfill')
require('mocha-generators').install();
import {expect} from 'chai'

const PORT = 3000

describe('smoke tests', function() {
  this.timeout(60000)
  let nightmare

  beforeEach(() => {
    nightmare = Nightmare({show: false}).goto(`http://localhost:${PORT}`).wait(5000)
  })

  afterEach(function*() {
    yield nightmare.end();
  });

  it('should show editor', function*() {
    const link = yield nightmare
      .click('div.dock a:nth-child(1)')
      .evaluate(selector => document.querySelector(selector).href, 'div.Editor a.title:nth-child(7)')
    expect(link.substring(0, 4)).to.equal('http')
  });

  it('should show tools', function*() {
    const path = yield nightmare
      .click('div.dock a:nth-child(2)')
      .click('div.Tools:nth-child(1) a.tool:nth-child(3)')
      .evaluate(() => window.location.pathname)
    expect(path).to.equal('/tools/All/React')
  });
})