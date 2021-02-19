export const data = {
  layout: 'layouts/base'
}

export function render(data) {
  return `
  <div class="app__main">
    <section class="content">
      <h1 class="intro">Noel Varanda</h1>
      <p class="hero-text">
        I'm no designer, but I reckon I need at least three lines of text to make this paragraph "fit in". Read some of my content below
        or get in touch using some of the links above. Nailed it.
      </p>
      ${this.archive(data, [...data.collections.posts].reverse())}
    </section>
  </div>
  <div class="app__gutter"></div>
  <div class="app__brain">
    <div id="network" class="app__brain-network"></div>
    <button class="button app__brain-trigger">&#8250;</button>
    <div class="app__brain-description hero-text">
      I follow the <a href="https://en.wikipedia.org/wiki/Zettelkasten" target="_blank">Zettelkasten</a> method of taking notes. Take a peek at the notes I've kept and how they connect to eachother.
    </div>
  </div>
  <script type="module">
    import { createNotesNetwork } from './assets/notes-network.js';

    const appMain = document.querySelector('.app__main')
    const button = document.querySelector('.button')

    button.addEventListener('click', () => {
      if (appMain.classList.contains('app__main--notes')) {
        appMain.classList.remove('app__main--notes')
        return
      }
  
      appMain.classList.add('app__main--notes')
    });

    (async () => {
      const network = await createNotesNetwork({
        container: document.getElementById('network'),
        notes: ${JSON.stringify(data.notes)},
      })
    })()

  </script>
  `
}
