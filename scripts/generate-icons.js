const fs = require('fs')
const path = require('path')

const ICONS_DIR = path.join(__dirname, '../icons/')
const OUTPUT_DIR = path.join(__dirname, '../plugins/icons/')

const files = [];

function ThroughDirectory(directory) {
  fs.readdirSync(directory).forEach(File => {
    const absolute = path.join(directory, File)
    if (fs.statSync(absolute).isDirectory()) return ThroughDirectory(absolute)
    else return files.push(absolute.replace(ICONS_DIR, '').split('.').shift())
  })
}

ThroughDirectory(ICONS_DIR)

const arr = {}

files.forEach((file) => {
  let fileContent = fs.readFileSync(`${ICONS_DIR}/${file}.svg`, 'utf8')

  arr[file.replace(/(\\)|(-)|(\/)/g, '_')] = fileContent
      .replace((/"/gm), "'")
})

const out = 'export default ' + JSON.stringify(arr)
    .replace((/\s\s|\t|\\r\\n|\\n|\\r/gm),"")

fs.writeFileSync(path.join(OUTPUT_DIR, `icons.ts`), out.replace((/","/gm),"\",\n\t\"").replace((/"}/gm),"\"\n}").replace((/{"/gm),"{\n\t\"").replace((/":"/gm),"\": \""))
