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
    // console.warn({network})

    // network.redraw()
  }

  const toggleNetwork = ({ isOpen }: { isOpen: boolean }) => {
    app.classList.toggle('app--open', isOpen)
    trigger.setAttribute('aria-expanded', `${isOpen}`)
  }

  router.on('/', () => {
    toggleNetwork({ isOpen: false })
    appMain.innerHTML = homeHTML
  })

  router.on('/archive', () => {
    toggleNetwork({ isOpen: true })
    appMain.innerHTML = renderArchive()
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
      router.navigate(selectedNotes[0] ? `/notes/${selectedNotes[0]}` : '/archive')
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

const renderArchive = () => `
<section class="content">
  <a href="/" class="content__back" id="page-back" data-navigo>Return back home</a>
  <h1 id="page-title">Notes Archive</h1>
  <div class="page-content">
    <p class="paragraph">
      I recently started a new way of memorizing the things I learn, which is essentially to write them in my own words as soon as I read them.
      I follow the <a href="https://en.wikipedia.org/wiki/Zettelkasten" target="_blank">Zettelkasten</a> method of taking notes. Take a peek at the notes I've kept and how they connect to each other.
    </p>
    <p class="paragraph">
      My hope is that one day, eventually my zettelkasten will be big enough that it can be of use to other people. This is <strong>still very bare</strong>, I plan on adding to it as I read (and note down) more.
    </p>
    <p class="paragraph"></p>
    <h3>How to use it</h3>
    <p class="paragraph">
      Easy. Click on the nodes on the right hand side. Colours represent their "tags", and the links recommend the next node. I plan on adding better visualisation in the future so hang on tight.
    </p>
    <h3>Shout out</h3>
    <p class="paragraph">
      All reference you see right now are from Michael Geers' <a href="https://www.manning.com/books/micro-frontends-in-action" target="_blank">Micro Frontends in Action</a>, so thank you for being my first reference guide.
    </p>
  </div>
</section>
`
