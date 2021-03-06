export const data = {
  title: 'Noel Varanda',
  layout: 'layouts/interactive',
  tags: ['home'],
  weight: 1,
  permalink: '/'
}

export const render = data => `
  <section class="content">
    <a href="/" class="content__back" id="page-back" data-navigo>Return back home</a>
    <h1 id="page-title">Noel Varanda</h1>
    <div class="page-content">
      <p class="paragraph">
        Front end engineer.
        I'm no designer, but I reckon I need at least three lines of text to make this paragraph "fit in".
        Read some of my content below, get in touch on <a href="https://www.linkedin.com/in/noelvaranda/" target="_blank" rel="noopener">LinkedIn</a>, or read some of my code on <a href="https://github.com/nowy" target="_blank" rel="noopener">Github</a>. Nailed it.
      </p>
      ${this.archive(data, [...data.collections.posts].reverse())}
    </div>
  </section>
`
