const exec = require('child_process').exec
const server = require('../../build/server')

const TEST_CMD = 'node_modules/nightwatch/bin/nightwatch'

const {exit} = server.run(function() {
  exec(TEST_CMD, function(error) {
    if (error) {
      console.error(error)
      exit(1)
    }
    else {
      exit(0)
    }
  })
})