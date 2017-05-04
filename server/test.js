const fs = require('fs')
const childProcess = require('child_process')
const exec = childProcess.exec

const serverProc = exec('npm start &')
exec('sleep 5; npm run test:e2e', function(error) {
  if (error) {
    console.error(error)
    process.exit(1)
    return
  }
  serverProc.kill("SIGINT")
  process.exit(0)
})
