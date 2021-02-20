export var data = {
  layout: 'layouts/page'
}

export function render (data) {
  return `
    <section class="content">
      <a href="/" class="content__back" data-navigo>Return to main page</a>
      <h1>${data.title}</h1>
      <time>${this.pageDate(data)}</time>
      ${data.content}
    </section>
  `
}
