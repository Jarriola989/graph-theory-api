export let node_list = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

export class Graph {
  constructor(nodeCount, edgeCount, isDirected) {
    this.isDirected = isDirected;
    this.nodeCount = nodeCount;
    this.nodes = [];
    this.edgeCount = edgeCount;
    this.edges = []; // this will be a 2d array
  }
}
