import * as path from "path";
import fs from 'fs';
import { Converter, Metadata, ShowdownExtension } from 'showdown';

const input = {
  dir: path.join(__dirname, '..', 'content', 'notes'),
}

const output = {
  dir: path.join(__dirname, '..', '_data'),
  file: 'notes.json',
}

const classMap = {
  p: 'paragraph',
  pre: 'language-markup'
}

const replaceClassNames: ShowdownExtension[] = Object.keys(classMap)
  .map(key => ({
    type: 'output',
    regex: new RegExp(`<${key}([^a-z]*)>`, 'g'),
    replace: `<${key} class="${classMap[key as keyof typeof classMap]}" $1>`
  }))

const addLazyLoadToImage: ShowdownExtension = {
  type: 'output',
  regex: new RegExp(`<img (.*) />`, 'g'),
  replace: `<img loading="lazy" $1>`
}

const replaceMdLinks: ShowdownExtension = {
  type: 'lang',
  regex: /\[\[(\d+)\s?(.*?)\]\]/g,
  replace: (_: any, id: string, label: string) => `<a href="/notes/${id}" data-navigo>${label.split('|')[0].split('#')[0]}</a>`
}

const removeSquareBrackets = (s: string) => s.replace(/[\[\]']+/g, '')
const getId = (f: string) => {
  const parsedId = parseInt(f.split(' ')[0])
  return isNaN(parsedId) ? null : parsedId
};

(async () => {
  await fs.promises.mkdir(output.dir, { recursive: true })

  const mdConverter = new Converter({
    metadata: true,
    extensions: [replaceMdLinks, addLazyLoadToImage, ...replaceClassNames]
  })

  const files = (await fs.promises.readdir(input.dir))
    .filter(fileName => fileName.split('.')[1] === 'md')

  const nodes = await Promise.all(files.map(async fileName => {
    const fileContent = await fs.promises.readFile(
      path.join(input.dir, fileName),
      { encoding: 'utf-8' }
    )

    return {
      bodyHtml: mdConverter.makeHtml((() => {
        const bodySplitByLine = fileContent.split('\n')
        const linksIndex = bodySplitByLine.findIndex(l => l.startsWith('## Links'))
        const refsIndex = bodySplitByLine.findIndex(l => l.startsWith('## Links'))
  
        return bodySplitByLine
          .slice(0, linksIndex !== -1 ? linksIndex : refsIndex !== -1 ? refsIndex : bodySplitByLine.length + 1)
          .filter(t => !t.startsWith('# '))
          .join('\n')
      })()),
      id: getId(fileName),
      metaData: Object.fromEntries(
        Object.entries(mdConverter.getMetadata(false) as Metadata).map(([key, entry]) => [
          key,
          removeSquareBrackets(entry).split(',').map(s => s.trim())
        ])
      ),
      linksTo: (() => {
        const matches = fileContent.match(/\[\[(.*?)\]\]/g)
        return [...new Set(matches ? matches.map(removeSquareBrackets).map(getId) : [])]
      })(),
      label: (() => {
        if (getId(fileName) === null) return fileName.split('.')[0]
        const [_, ...rest] = fileName.split(' ')
        return rest.join(' ').split('.')[0]
      })()
    }
  }))

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
