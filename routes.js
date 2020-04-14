import { createGraph } from "./src/create-graph.js";
import { dijkstra } from "./src/algorithms/dijkstra.js";

export function routes(app) {
  app.post("/create-graph", function (req, res) {
    const graph = createGraph(req.body.nodeCount, req.body.isDirected);
    return res.status(200).send({
      success: true,
      message: "Graph created successfully",
      graph: graph,
    });
  });

  app.post("/dijkstra", function (req, res) {
    const dijkstraResult = dijkstra(req.body.graph);
    return res.status(200).send({
      success: true,
      message: "Dijkstra calculated successfully",
      dijkstra: dijkstraResult,
    });
  });
}
