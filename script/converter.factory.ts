import { Converter, ShowdownExtension } from 'showdown';

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

const replaceMdRefLinks: ShowdownExtension = {
  type: 'lang',
  regex: /\[\[([a-zA-Z\s]+)\]\]/g,
  replace: (_: any, label: string) => `<strong>${label}</strong>`
}

const replaceMdNotesLinks: ShowdownExtension = {
  type: 'lang',
  regex: /\[\[(\d+)\s?(.*?)\]\]/g,
  replace: (_: any, id: string, label: string) => `<a href="/notes/${id}" data-navigo>${label.split('|')[0].split('#')[0]}</a>`
}

export const createConverter = () => new Converter({
  metadata: true,
  extensions: [
    replaceMdNotesLinks,
    replaceMdRefLinks,
    addLazyLoadToImage,
    ...replaceClassNames
  ]
})
