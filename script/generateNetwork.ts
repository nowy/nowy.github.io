import * as path from "path";
import fs from 'fs';
import { Converter, Metadata, ShowdownExtension } from 'showdown';
import { createConverter } from './converter.factory';

const input = {
  notesDir: path.join(__dirname, '..', 'content', 'notes'),
  referencesDir: path.join(__dirname, '..', 'content', 'references'),
}

const output = {
  dir: path.join(__dirname, '..', '_data'),
  file: 'notes.json',
}

const removeSquareBrackets = (s: string) => s.replace(/[\[\]']+/g, '')
const getId = (f: string) => {
  const parsedId = parseInt(f.split(' ')[0])
  return isNaN(parsedId) ? f.toLowerCase().split(' ').join('-').split('.')[0] : parsedId
}

const mapFilesInDirTo = async <T>(
  dir :string,
  cb: (d: { name: string, content: string }) => T
) => {
  return (await fs.promises.readdir(dir))
    .filter(fileName => fileName.split('.')[1] === 'md')
    .map(async name => cb({
      name,
      content: await fs.promises.readFile(path.join(dir, name), { encoding: 'utf-8' })
    }))
}

const extractMetaData = (converter: Converter) => Object.fromEntries(
  Object.entries(converter.getMetadata(false) as Metadata).map(([key, entry]) => [
    key,
    removeSquareBrackets(entry).split(',').map(s => s.trim())
  ])
);

(async () => {
  await fs.promises.mkdir(output.dir, { recursive: true })

  const mdConverter = createConverter()

  const references = await mapFilesInDirTo(input.referencesDir, ({ name, content }) => ({
    id: getId(name),
    type: 'reference',
    label: name.split('.')[0],
    linksTo: [],
    bodyHtml: mdConverter.makeHtml(content),
    metaData: extractMetaData(mdConverter),
  }))

  const notes = await mapFilesInDirTo(input.notesDir, ({ name, content }) => ({
    id: getId(name),
    type: 'note',
    bodyHtml: mdConverter.makeHtml((() => {
      const bodySplitByLine = content.split('\n')
      const linksIndex = bodySplitByLine.findIndex(l => l.startsWith('## Links'))
      const refsIndex = bodySplitByLine.findIndex(l => l.startsWith('## References'))
      const filterHeader = (textByLine: string[]) => textByLine
        .filter(t => !t.startsWith('# '))
        .join('\n')

      if (linksIndex === -1) {
        return filterHeader(bodySplitByLine)
      }

      return filterHeader([
        ...bodySplitByLine.slice(0, linksIndex),
        ...bodySplitByLine.slice(refsIndex, bodySplitByLine.length + 1)
      ])
    })()),
    metaData: extractMetaData(mdConverter),

    linksTo: (() => {
      const matches = content.match(/\[\[(.*?)\]\]/g)
      return [...new Set(matches ? matches.map(removeSquareBrackets).map(getId) : [])]
    })(),
    label: (() => {
      if (getId(name) === null) return name.split('.')[0]
      const [_, ...rest] = name.split(' ')
      return rest.join(' ').split('.')[0]
    })()
  }))

  const nodes = await Promise.all([...notes, ...references])

  await fs.promises.writeFile(
    path.join(output.dir, output.file),
    JSON.stringify({
      nodes,
      edges: nodes.flatMap(({ id, linksTo }) => (
        linksTo.flatMap(link => link ? [{ source: id, target: link }] : [])
      ))
    })
  )

  console.log(`✅ Post written to file "${path.join(output.dir, output.file)}"`)
})()
