export const data = {
  layout: 'layouts/interactive',
  tags: ['home'],
  weight: 1,
  isOpen: true,
  permalink: '/archive/index.html'
}

export const render = () => `
  <section class="content">
    <a href="/" class="content__back" id="page-back">Return back home</a>
    <h1 id="page-title">Archive</h1>
    <div id="page-content">
      <p class="hero-text">
        I follow the <a href="https://en.wikipedia.org/wiki/Zettelkasten" target="_blank">Zettelkasten</a> method of taking notes. Take a peek at the notes I've kept and how they connect to eachother.
      </p>
      <p class="hero-text">This is still very bare, I plan on adding to it as I read (and note down) more.</p>
    </div>
  </section>
`
