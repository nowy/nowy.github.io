export var data ={
  locale: 'en',
  title: 'No page found',
  layout: 'layouts/base',
  permalink: '404.html',
  templateEngineOverride: '11ty.js,md',
  eleventyExcludeFromCollections: true
}

export function render() {
  return `<div class="app__main">
    <section class="content">
      <h1 class="intro">Not found</h1>
      <p class="hero-text">This site has about 4 pages, and you've missed every single one of them. <a href="/">Return to the home page</a>.</p>
    </section>
  </div>
  <div class="app__gutter"></div>
  <div class="app__brain"></div>`
}
