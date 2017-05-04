const fs = require('fs')
const exec = require('child_process').exec

const serverProc = exec('npm start &')
exec('sleep 5; npm run test:e2e', function(error) {
  serverProc.kill("SIGINT")
  if (error) {
    console.error(error)
    process.exit(1)
  }
  else {
    process.exit(0)
  }
})