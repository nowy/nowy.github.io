export const data = {
  layout: 'layouts/interactive',
}

export const render = data => `
  <section class="content">
    <a href="/" class="content__back" id="page-back">Return back home</a>
    <h1 id="page-title">${data.title}</h1>
    <div class="page-content">${data.bodyHtml}</div>
  </section>
`
