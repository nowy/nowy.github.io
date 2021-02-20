export function render(data) {
  return `<!doctype html>
  <html lang="${data.locale ? data.site[data.locale].locale : data.site.defaultLocale}">
    ${this.headTag(data)}
    <body>
      ${data.content}
    </body>
  </html>`
}
