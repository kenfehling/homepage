const PORT = 3000
const path = (p='') => `http://localhost:${PORT}` + p

export default {
  'Smoke tests': (client) => {
    client
      .url(path())
      .pause(5000)
      //.saveScreenshot('./screenshot.png')
      .click('div.dock a:nth-child(1)')
      .assert.containsText('div.Editor a.title:nth-child(7)', 'react')
      .click('div.dock a:nth-child(2)')
      .click('div.Tools:nth-child(1) a.tool:nth-child(3)')
      .assert.urlEquals(path('/tools/All/React'))
      .end()
  }
}