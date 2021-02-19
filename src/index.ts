import { createNotesNetwork, NotesNetwork } from './notes-network';

export const createApp = async ({ notes }: { notes: NotesNetwork }) => {
  const container = document.getElementById('network')
  const appMain = document.getElementById('app-main')
  const button = document.querySelector('.button')
  const pageTitle = document.getElementById('page-title')
  const pageContent = document.getElementById('page-content')

  if (!button || !appMain || !container) return

  const homeHTML = appMain.innerHTML

  button.addEventListener('click', () => {
    if (appMain.classList.contains('app__main--notes')) {
      appMain.classList.remove('app__main--notes')
      appMain.innerHTML = homeHTML
      return
    }
  
    appMain.classList.add('app__main--notes')
  })

  const network = await createNotesNetwork({ notes, container })
  const noteIdToNote = mapBy(notes.nodes, 'id')

  network.on('selectNode', (params) => {
    const note = noteIdToNote[params.nodes[0]]
    console.warn({note})
    if (!note) throw new Error(`Note not found. ID: "${params.nodes[0]}"`)
    console.warn({pageTitle})
    if (pageTitle) pageTitle.innerHTML = note.label
    if (pageContent) pageContent.innerHTML = note.bodyHtml
  })
}

function mapBy<T, K extends keyof T>(array: T[], key: K): Record<string, T> {
  return Object.fromEntries(array.map(entry => [entry[key], entry]))
}
