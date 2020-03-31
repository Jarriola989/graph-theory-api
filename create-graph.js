import { Graph, node_list } from "./graph.js";

export function createGraph(nodeCount, isDirected) {
  const maxEdges = !isDirected
    ? (nodeCount * (nodeCount - 1)) / 2
    : 2 * ((nodeCount * (nodeCount - 1)) / 2);
  const edgeCount =
    maxEdges === 0 ? 0 : Math.floor(Math.random() * maxEdges + 1);
  const graph = new Graph(nodeCount, edgeCount, isDirected);

  for (let i = 0; i < nodeCount; i++) {
    graph.nodes.push(node_list[i]);
  }
  for (let i = 0; i < edgeCount; i++) {
    let u = graph.nodes[Math.floor(Math.random() * nodeCount)];
    let v = graph.nodes[Math.floor(Math.random() * nodeCount)];
    // Undirected graphs cannot have reverse edges and cannot point to themselves.
    while (
      !isDirected &&
      (JSON.stringify(graph.edges).includes(JSON.stringify([u, v])) ||
        JSON.stringify(graph.edges).includes(JSON.stringify([v, u])) ||
        u === v)
    ) {
      u = graph.nodes[Math.floor(Math.random() * nodeCount)];
      v = graph.nodes[Math.floor(Math.random() * nodeCount)];
    }
    while (
      isDirected &&
      JSON.stringify(graph.edges).includes(JSON.stringify([u, v]))
    ) {
      u = graph.nodes[Math.floor(Math.random() * nodeCount)];
      v = graph.nodes[Math.floor(Math.random() * nodeCount)];
    }
    graph.edges.push([u, v]);
  }

  return graph;
}
