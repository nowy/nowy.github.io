export const data = {
  title: 'Noel Varanda',
  layout: 'layouts/interactive',
  tags: ['home'],
  weight: 1,
  permalink: '/'
}

export const render = data => `
  <section class="content">
    <h1 id="page-title">Noel Varanda</h1>
    <div id="page-content">
      <p class="paragraph">
        I'm no designer, but I reckon I need at least three lines of text to make this paragraph "fit in". Read some of my content below
        or get in touch using <a href="https://www.linkedin.com/in/noelvaranda/" target="_blank" rel="noopener">LinkedIn</a>, read some code on <a href="https://github.com/nowy" target="_blank" rel="noopener">Github</a>. Nailed it.
      </p>
      ${this.archive(data, [...data.collections.posts].reverse())}
    </div>
  </section>
`
