import { Graph, node_list } from "./graph.js";

export function createGraph(nodeCount, isDirected) {
  console.log(`is the graph directed? ${isDirected}`);
  const maxEdges = !isDirected
    ? (nodeCount * (nodeCount - 1)) / 2
    : 2 * ((nodeCount * (nodeCount - 1)) / 2);
  const edgeCount = Math.floor(Math.random() * maxEdges + 1);
  const graph = new Graph(nodeCount, edgeCount, isDirected);
  for (let i = 0; i < nodeCount; i++) {
    graph.nodes.push(node_list[i]);
  }
  for (let i = 0; i < edgeCount; i++) {
    console.log(`Node ${i + 1}/${edgeCount}`);
    let u = graph.nodes[Math.floor(Math.random() * nodeCount)];
    let v = graph.nodes[Math.floor(Math.random() * nodeCount)];
    console.log(`first try: [${u},${v}]`);
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
    while (isDirected && JSON.stringify(graph.edges).includes(JSON.stringify([u, v]))) {
      u = graph.nodes[Math.floor(Math.random() * nodeCount)];
      v = graph.nodes[Math.floor(Math.random() * nodeCount)];
    }
    graph.edges.push([u, v]);
  }

  return graph;
}
