export const data = {
  layout: 'layouts/base'
}

export function render(data) {
  return `
    <main class="app">
      <div class="app__main">${data.content}</div>
    </main>
  `
}
