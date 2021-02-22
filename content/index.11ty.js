export const data = {
  layout: 'layouts/interactive',
  tags: ['home'],
  weight: 1,
  permalink: '/'
}

export const render = data => `
  <section class="content">
    <a href="/" class="content__back" id="page-back" data-navigo>Return back home</a>
    <h1 id="page-title">Noel Varanda</h1>
    <div id="page-content">
      <p class="paragraph">
        I'm no designer, but I reckon I need at least three lines of text to make this paragraph "fit in". Read some of my content below
        or get in touch using some of the links above. Nailed it.
      </p>
      ${this.archive(data, [...data.collections.posts].reverse())}
    </div>
  </section>
`
