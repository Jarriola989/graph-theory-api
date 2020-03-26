import { Graph, node_list } from "./graph";

export function createGraph(nodeCount, isDirected) {
  const maxEdges = !isDirected
    ? nodeCount(nodeCount - 1) / 2
    : 2(nodeCount(nodeCount - 1) / 2);
  const edgeCount = Math.floor(Math.random() * maxEdges + 1);
  const graph = new Graph(nodeCount, edgeCount, isDirected);
  for (let i = 0; i < nodeCount; i++) {
    graph.nodes.push(node_list[i]);
  }
  for (let i = 0; i < edgeCount; i++) {
    let u = graph.nodes[Math.floor(Math.random() * nodeCount)];
    let v = graph.nodes[Math.floor(Math.random() * nodeCount)];
    // Undirected graphs cannot have reverse edges and cannot point to themselves.
    while (
      (!isDirected && graph.edges.includes([u, v])) ||
      graph.edges.includes([v, u]) ||
      u === v
    ) {
      u = graph.nodes[Math.floor(Math.random() * nodeCount)];
      v = graph.nodes[Math.floor(Math.random() * nodeCount)];
    }
    while (isDirected && graph.edges.includes([u, v])) {
      u = graph.nodes[Math.floor(Math.random() * nodeCount)];
      v = graph.nodes[Math.floor(Math.random() * nodeCount)];
    }
    graph.edges.push([u, v]);
  }

  return graph;
}
