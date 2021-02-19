import Navigo from 'navigo';
import { createNotesNetwork, NotesNetwork } from './notes-network';

export const createApp = async ({ notes }: { notes: NotesNetwork }) => {
  const appMain = document.getElementById('app-main') as HTMLElement
  const homeHTML = appMain.innerHTML

  const router = new Navigo('/')
  const network = await createNotesNetwork({
    notes,
    container: document.getElementById('network') as HTMLElement
  })
  const noteIdToNote = mapBy(notes.nodes, 'id')

  router.on('/', () => {
    appMain.classList.remove('app__main--notes')
    appMain.innerHTML = homeHTML
  })

  router.on('/notes', () => {
    appMain.classList.toggle('app__main--notes', true)
    appMain.innerHTML = homeHTML
  })

  router.on('/notes/:id', ({ data }) => {
    appMain.classList.toggle('app__main--notes', true)
    if (!data) throw new Error('Note not found.')

    const note = noteIdToNote[data.id]

    if (!note) throw new Error(`Note not found. ID: "${data.id}"`)

    if (data) {
      network.selectNodes([data.id])
    }

    const pageTitle = document.getElementById('page-title')
    const pageContent = document.getElementById('page-content')

    if (!pageTitle || !pageContent) throw new Error('Elements not found')
  
    pageTitle.innerHTML = note.label
    pageContent.innerHTML = note.bodyHtml
  })

  document.getElementById('notes-trigger')?.addEventListener('click', () => {
    if (router.getCurrentLocation().route.path === '') {
      const selectedNotes = network.getSelectedNodes()
      router.navigate(selectedNotes[0] ? `/notes/${selectedNotes[0]}` : '/notes')
      return
    }

    router.navigate('')
  })

  network.on('selectNode', ({ nodes }) => router.navigate(`/notes/${nodes[0]}`))
}

function mapBy<T, K extends keyof T>(array: T[], key: K): Record<string, T> {
  return Object.fromEntries(array.map(entry => [entry[key], entry]))
}
