import { createGraph } from "./create-graph.js";

export function routes(app) {
  app.post("/create-graph", function(req, res) {
    const graph = createGraph(req.body.nodeCount, req.body.isDirected);
    return res.status(200).send({
      success: true,
      message: "Graph created successfully",
      graph: graph
    });
  });
}
