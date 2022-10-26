class GraphNode {
  constuctor(val) {
    this.val = val;
    this.connectedNodes = [];
  }
}

let a = new GraphNode("a");
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');
let e = new GraphNode('e');
console.log(a.val)
a.connectedNodes = [e, c, b];
c.connectedNodes = [b, d];



function depthFirst(node, visited = new Set()) {
  if (visited.has(node.val)) return;
  visited.add(node.val);
  console.log(node.val);
  node.connectedNodes.forEach((connectedNodes) => depthFirst(connectedNodes, visited));
}

// depthFirst(a);

// let graph = {
//   'a': ['b', 'c', 'e'],
//   'b': [],
//   'c': ['b', 'd'],
//   'd': [],
//   'e': ['a'],
//   'f': ['e']
// };