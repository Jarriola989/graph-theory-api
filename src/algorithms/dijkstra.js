export function dijkstra(graph) {
  const edgeWeights = [];
  const nodes = graph.nodes;
  let nodeDistances = [];
  let visited = [];
  let unvisited = [];

  for (let i = 0; i < graph.edgeCount; i++) {
    const edgeWeight = Math.ceil(Math.random() * 10);
    const currentEdge = graph.edges[i];
    edgeWeights.push([currentEdge, edgeWeight]);
  }
  console.log(graph.edges);
  console.log(edgeWeights);
  //Dijkstra's algorithm requires setting all node distances to infinity.
  for (let i = 0; i < graph.nodeCount; i++) {
    nodeDistances.push(Number.POSITIVE_INFINITY);
    unvisited.push(nodes[i]);
  }

  // Starting algorithm at index 0
  nodeDistances[0] = 0;
  while (unvisited.length !== 0) {
    let closestNode;
    let closestDistance = Number.POSITIVE_INFINITY;
    let closestNodeIndex; // this is the node we currently on and exploring its neighbors
    unvisited.map((node) => {
      if (nodeDistances[nodes.indexOf(node)] < closestDistance) {
        closestDistance = nodeDistances[nodes.indexOf(node)];
        closestNode = node;
        closestNodeIndex = nodes.indexOf(node);
      }
    });
    console.log(
      `Closest distance is now ${closestNode} at index ${closestNodeIndex} with distance ${closestDistance}.`
    );

    graph.edges.map(([u, v]) => {
      //TODO: Check if edges are not going backwards direction
      if (nodes[closestNodeIndex] === u || nodes[closestNodeIndex] === v) {
        const edgeIndex =
          (JSON.stringify(graph.edges).indexOf(JSON.stringify([u, v])) - 1) /
          10; //DOUBLE CHECK THIS. might not be returning the right index
        console.log(edgeIndex);
        const edgeWeight = edgeWeights[edgeIndex];
        console.log(
          `Found an edge at ${edgeIndex} with weight ${edgeWeight[1]}`
        );
        const nextNode = nodes[closestNodeIndex] === u ? v : u;
        console.log(
          `Node ${nodes[closestNodeIndex]} is connected to ${nextNode}`
        );
        // updating the total distance of each connected node
        nodeDistances[nodes.indexOf(nextNode)] = edgeWeight[1]; // TODO: this will need to account for resetting or adding weight to the node distance
        console.log(nodeDistances[nodes.indexOf(nextNode)]);
        console.log(edgeWeight[1]);
        console.log(nodeDistances);
      }
    });
    unvisited.splice(unvisited.indexOf(closestNode), 1);
    visited.push(closestNode);
  }
  return visited;
}
