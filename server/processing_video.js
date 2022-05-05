const { exec } = require('child_process')
const { resolve } = require('path')

const createVideoFiles = (sourcePath, outputPath) => {
  const shellScriptPath = resolve(__dirname, './scripts/process_video.sh')
  const myShellScript = exec(`sh ${shellScriptPath} -s ${sourcePath} -o ${outputPath}`)

  myShellScript.stdout.on('data', (data) => {
    console.log(data)
  })

  myShellScript.stderr.on('data', (data) => {
    console.error(data)
  })
}

const args = process.argv.slice(2)
createVideoFiles(args[0], args[1])
