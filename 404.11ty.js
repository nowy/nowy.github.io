export var data ={
  locale: 'en',
  title: 'No page found',
  layout: 'layouts/page',
  permalink: '404.html',
  templateEngineOverride: '11ty.js,md',
  eleventyExcludeFromCollections: true
}

export function render() {
  return `<section class="content">
    <h1 class="intro">Not found</h1>
    <p class="paragraph">
      I couldn't find the page you were looking for. <a href="/" data-navigo>Return to main page</a> so I can be more useful.
    </p>
  </section>`
}
