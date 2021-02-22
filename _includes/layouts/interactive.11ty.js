export const data = {
  layout: 'layouts/base'
}

export function render(data) {
  const selectedNode = (() => {
    if (!data.page.url) return ''
    const segments = data.page.url.split('/')
    if (segments.length < 2 || segments[1] !== 'notes') return ''
    return data.notes.nodes.find(node => node.id === parseInt(segments[2])).id || null
  })()

  return `
    <main class="app app--interactive ${!!data.isOpen ? 'app--open' : ''}">
      <div class="app__gutter">
        <div class="app__interactive">
          <div id="network" class="app__interactive-network"></div>
        </div>
      </div>
      <button class="app__trigger" id="notes-trigger" data-open=${!!data.isOpen}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8L3 12L7 16" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 16L21 12L17 8" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="app__main" id="app-main">${data.content}</div>
      <script type="module">
        import { createApp } from '/assets/bundle.js';

        createApp(${JSON.stringify({
          selectedNode,
          notes: data.notes,
        })})
      </script>
    </main>
  `
}
