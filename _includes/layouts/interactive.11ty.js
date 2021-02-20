export const data = {
  layout: 'layouts/base'
}

export function render(data) {
  return `
    <main class="app app--interactive">
      <div class="app__main" id="app-main">${data.content}</div>
      <div class="app__left-panel"></div>
      <div class="app__right-panel">
        <div id="network" class="app__right-panel-network"></div>
        <button class="button app__right-panel-trigger" id="notes-trigger">&#8250;</button>
        <div class="app__right-panel-description hero-text">
          I follow the <a href="https://en.wikipedia.org/wiki/Zettelkasten" target="_blank">Zettelkasten</a> method of taking notes. Take a peek at the notes I've kept and how they connect to eachother.
        </div>
      </div>
      <script type="module">
        import { createApp } from './assets/bundle.js';
        createApp(${JSON.stringify({ notes: data.notes })})
      </script>
    </main>
  `
}
