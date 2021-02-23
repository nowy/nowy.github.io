import { Edge, Node, Network, Options } from 'vis-network'

export const createNetwork = async (options: {
  container: HTMLElement,
  nodes: Node[]
  edges: Edge[],
  override?: Partial<Options>,
}) => new Network(options.container, options, {
  autoResize: false,
  // width: `${window.innerWidth - (document.getElementById('app-main') as HTMLElement).getBoundingClientRect().width}px`,
  // height: `${window.innerHeight}px`,
  interaction: {
    hover: true,
    hideEdgesOnDrag: true,
    tooltipDelay: 200,
  },
  layout: {
    randomSeed: 2
  },
  nodes: {
    shape: 'dot',
    size: 10,
    scaling: {
      customScalingFunction: (_min, _max, total, value) => (value || 1) / (total || 1),
      min: 5,
      max: 150,
    },
    font: {
      face: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
      size: 15,
      background: '#fff',
    },
  },
  edges: {
    arrows: 'to',
    color: {
      color: '#29769c',
      hover: '#1d5069',
      highlight: '#1d5069'
    },
    font: {
      face: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
      size: 12,
    },
    width: 0.5,
    hoverWidth: 0.5,
  },
  physics: {
    barnesHut: { gravitationalConstant: -4000 }
  },
  ...(options.override || {})
})
