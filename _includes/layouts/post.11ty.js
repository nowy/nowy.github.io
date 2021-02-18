export var data = {
  layout: 'layouts/base'
}

export function render (data) {
  return `<div class="app__gutter"></div>
  <div class="app__main">
    <section class="content">
      <h1>${data.title}</h1>
      <time>${this.pageDate(data)}</time>
      ${data.content}
    </section>
  </div>
  <div class="app__brain"></div>`
}
