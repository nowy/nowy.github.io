import { createNetwork } from './network';

export interface NotesNetwork {
  nodes: {
    id: number
    type: 'note' | 'reference'
    label: string
    bodyHtml: string
    metaData: Record<string, string[]>
  }[]
  edges: { source: number, target: number }[]
}

const isSystemTag = (tag: string) => ['literature-note', 'index-card'].includes(tag);


export const createNotesNetwork = async (options: {
  notes: NotesNetwork,
  container: HTMLElement
}) => {
  const { notes, container } = options
  const idToNode = Object.fromEntries(notes.nodes.map(note => [note.id, note]))

  const edges = notes.edges
    .filter(({ target }) => idToNode[target].type !== 'reference')
    .map(({ source, target }) => ({ from: source, to: target }))

  const nodes = notes.nodes
    .filter(node => node.type !== 'reference')
    .map(node => ({
      ...node,
      value: Math.max(1, edges.filter(edge => edge.to === node.id || edge.from === node.id).length),
      group: node.metaData.tags?.filter(tag => !isSystemTag(tag))[0] ?? undefined
    }))

  return createNetwork({ container, edges, nodes})
}
