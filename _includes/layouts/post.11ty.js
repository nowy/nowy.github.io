export var data = {
  layout: 'layouts/page'
}

export function render (data) {
  return `
    <section class="content blog-post">
      <a href="/" class="content__back" data-navigo>Go to noelvaranda.dev</a>
      <h1>${data.title}</h1>
      <time class="time">${this.pageDate(data)}</time>
      ${data.content}
    </section>
  `
}
