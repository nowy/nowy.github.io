export const data = {
  layout: 'layouts/interactive',
}

export const render = data => `
  <section class="content">
    <h1 id="page-title">${data.title}</h1>
    <div id="page-content">${data.bodyHtml}</div>
  </section>
`
