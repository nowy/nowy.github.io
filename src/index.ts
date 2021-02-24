import Navigo from 'navigo';
import { createNotesNetwork, NotesNetwork } from './notes-network';
import throttle from 'lodash.throttle'

export const createApp = async ({
  selectedNode,
  notes
}: {
  selectedNode?: number,
  notes: NotesNetwork
}) => {
  const app = document.querySelector('.app') as HTMLElement
  const appMain = document.getElementById('app-main') as HTMLElement
  const container = document.getElementById('network') as HTMLElement
  const trigger = document.getElementById('notes-trigger') as HTMLElement
  const homeHTML = appMain.innerHTML

  const router = new Navigo('/')
  const network = await createNotesNetwork({ notes, container })
  const noteIdToNote = mapBy(notes.nodes, 'id')

  if (selectedNode) {
    network.selectNodes([selectedNode])
  }

  const toggleNetwork = ({ isOpen }: { isOpen: boolean }) => {
    app.classList.toggle('app--open', isOpen)
    trigger.setAttribute('aria-expanded', `${isOpen}`)
  }

  router.on('/', () => {
    toggleNetwork({ isOpen: false })
    appMain.innerHTML = homeHTML
  })

  router.on('/notes/:id', ({ data }) => {
    toggleNetwork({ isOpen: true })
    if (!data) throw new Error('Note not found.')

    const note = noteIdToNote[data.id]

    if (!note) throw new Error(`Note not found. ID: "${data.id}"`)

    network.selectNodes([data.id])

    const pageTitle = document.getElementById('page-title') as HTMLElement
    const pageContent = document.querySelector('.page-content') as HTMLElement

    pageTitle.innerHTML = note.label
    pageContent.innerHTML = note.bodyHtml
  })


  trigger.addEventListener('click', () => {
    if (trigger.dataset['open'] === 'true') {
      window.location.assign('/')
      return
    }

    if (router.getCurrentLocation().route.path === '') {
      const selectedNotes = network.getSelectedNodes()
      router.navigate(selectedNotes[0] ? `/notes/${selectedNotes[0]}` : '/notes/202102241726')
      return
    }

    router.navigate('')
  })

  const networkCanvas = container.getElementsByTagName('canvas')[0];
  const setupCanvasDisplay = () => {
    const hasNotes = app.classList.contains('app--open')
    container.style.transform = `scale(${hasNotes ? 1 : 0.95})`
    container.style.opacity = hasNotes ? '1' : '0'
  }

  (document.querySelector('.app__interactive') as any).addEventListener('transitionstart', () => {
    const hasNotes = app.classList.contains('app--open')
    container.style.visibility = hasNotes ? 'visible' : 'hidden'

    if (hasNotes) {
      network.moveTo({ scale: 1, position: { x: 0, y: 0 }})
    }
  });

  (document.querySelector('.app__interactive') as any).addEventListener('transitionend', setupCanvasDisplay);

  network.on('hoverNode', () => networkCanvas.style.cursor = 'pointer')
  network.on('blurNode', () => networkCanvas.style.cursor = 'default')
  network.on('selectNode', ({ nodes }) => router.navigate(`/notes/${nodes[0]}`))
  
  setupCanvasDisplay()
}

function mapBy<T, K extends keyof T>(array: T[], key: K): Record<string, T> {
  return Object.fromEntries(array.map(entry => [entry[key], entry]))
}
