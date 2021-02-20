export var data ={
  locale: 'en',
  title: 'No page found',
  layout: 'layouts/page',
  permalink: '404.html',
  templateEngineOverride: '11ty.js,md',
  eleventyExcludeFromCollections: true
}

export function render() {
  return `<div class="app__main">
    <section class="content">
      <a href="/" class="content__back" data-navigo>Return to main page</a>
      <h1 class="intro">Not found</h1>
      <p class="hero-text">
        If you're looking for one of my /notes - SSR is still underway. Please hold.
      </p>
    </section>
  </div>
  <div class="app__left-panel"></div>
  <div class="app__right-panel"></div>`
}
