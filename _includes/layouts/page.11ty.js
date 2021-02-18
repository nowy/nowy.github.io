export var data = {
  layout: 'layouts/base'
}

export function render(data) {
  return `<article>
    <header class="article-header">
      <h2>${data.title}</h2>
    </header>
    ${data.content}
  </article>`
}
