const getNodeFromData = (data) => {
  if (!data.page.url) return ''
  const segments = data.page.url.split('/')
  if (segments.length < 2 || segments[1] !== 'notes') return ''
  return data.notes.nodes.find(node => node.id === parseInt(segments[2]))
}

export default {
  layout: 'layouts/note',
  isOpen: true,
  eleventyComputed: {
    title: data => data.page.url ? getNodeFromData(data).label : '',
    bodyHtml: data => data.page.url ? getNodeFromData(data).bodyHtml : '',
    permalink: data => {
      const [id, ..._] = data.page.fileSlug.split(' ')
      return `/${data.site.en.notes.url}/${id}/index.html`
    },
  },
  tags: [
    'notes'
  ]
}


