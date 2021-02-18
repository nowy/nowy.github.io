export function render(data) {
  console.warn(data)
  return `<!doctype html>
  <html lang="${data.locale ? data.site[data.locale].locale : data.site.defaultLocale}">
    ${this.headTag(data)}
    <body>
      <main class="app">
        ${data.content}
      </main>
    </body>
  </html>`
}
