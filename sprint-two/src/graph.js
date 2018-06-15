

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i] === node){
      this.nodes.splice(i, 1);
    }
  }
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(node)) {
      this.edges.splice(i,1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var x = 0; x < this.edges.length; x++) {
    var edgeOne = this.edges[x][0];
    var edgeTwo = this.edges[x][1];
    if ((edgeOne === fromNode || edgeOne ===toNode) && (edgeTwo === toNode || edgeTwo === fromNode)){
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var innerEdge = [fromNode, toNode];
  this.edges.push(innerEdge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var x = 0; x < this.edges.length; x++) {
    var fromEdge = this.edges[x][0];
    var toEdge = this.edges[x][1];
    if (fromEdge === fromNode && toEdge === toNode){
      this.edges.splice(x,1);
    }
  }
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

  
