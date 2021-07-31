const fs = require('fs')
const path = require('path')

const ICONS_DIR = path.join(__dirname, '../icons/')
const OUTPUT_DIR = path.join(__dirname, '../plugins/icons/')

const files = {};

function ThroughDirectory(directory) {
  fs.readdirSync(directory).forEach(File => {
    const absolute = path.join(directory, File)
    const fullPath = absolute
      .replace(ICONS_DIR, '')
      .replace(/(\\)/g, '/')
      .split('.')
      .shift()

    if (fs.statSync(absolute).isDirectory()) {
      files[fullPath] = []
      return ThroughDirectory(absolute)
    } else {
      const basePath = fullPath.split('/')[0]
      const currentPath = fullPath.split('/')
        .slice(1)
        .join('/')

      return files[basePath].push(currentPath)
    }
  })
}

ThroughDirectory(ICONS_DIR)

Object.keys(files).forEach((base) => {
  const arr = {}

  if (files[base].length === 0) {
    return
  }

  files[base].forEach((file) => {
    let fileContent = fs.readFileSync(`${ICONS_DIR}/${base}/${file}.svg`, 'utf8')
    let name = file.replace(/(\\)/g, '/')

    arr[name] = fileContent
      .replace((/"/gm), "'")
  })

  const out = 'export default ' + JSON.stringify(arr)
    .replace((/\s\s|\t|\\r\\n|\\n|\\r/gm),"")

  fs.writeFileSync(path.join(OUTPUT_DIR, `${base}.ts`), out.replace((/","/gm),"\",\n\t\"").replace((/"}/gm),"\"\n}").replace((/{"/gm),"{\n\t\"").replace((/":"/gm),"\": \""))
})
