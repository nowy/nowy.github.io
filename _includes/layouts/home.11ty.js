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
  <script type="module" src="/assets/bundle.js"></script>
  <script type="module">
    import { createApp } from './assets/notes-network.js';
    createApp(${JSON.stringify({ notes: data.notes })})
  </script>
  `
}
