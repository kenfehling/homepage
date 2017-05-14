const fs = require('fs')
const exec = require('child_process').exec

const WAIT_FOR_SERVER_START = 10
const TEST_CMD = '../../node_modules/nightwatch/bin/nightwatch'

const serverProc = exec('npm start &')
exec(`sleep ${WAIT_FOR_SERVER_START}; ${TEST_CMD}`, function(error) {
  serverProc.kill("SIGINT")
  if (error) {
    console.error(error)
    process.exit(1)
  }
  else {
    process.exit(0)
  }
})