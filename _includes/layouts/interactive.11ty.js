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
    <main class="app app--interactive">
      <div id="test">
      <div></div>
      <div></div>
      </div>
      <div class="app__main ${!!data.isOpen ? 'app__main--open' : ''}" id="app-main">${data.content}</div>
      <div class="app__left-panel"></div>
      <div class="app__right-panel">
        <div id="network" class="app__right-panel-network"></div>
        <button class="button app__right-panel-trigger" id="notes-trigger" data-open=${!!data.isOpen}>&#8250;</button>
        <div class="app__right-panel-description paragraph">Checkout my notes</div>
      </div>
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
