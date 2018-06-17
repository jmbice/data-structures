

// Instantiate a new graph
var Graph = function() {
  // this.nodes = [];
  // this.edges = [];

  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // this.nodes.push(node);

  if (typeof node === 'string') {
    nodeKey = node;
  } else {
    var nodeKey = JSON.stringify(node);
  }
  this.nodes[nodeKey] = node;

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // return this.nodes.includes(node);

  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // for (var i = 0; i < this.nodes.length; i++) {
  //   if(this.nodes[i] === node){
  //     this.nodes.splice(i, 1);
  //   }
  // }
  // for (var i = 0; i < this.edges.length; i++) {
  //   if (this.edges[i].includes(node)) {
  //     this.edges.splice(i,1);
  //   }
  // }
  
  
  if(this.nodes.hasOwnProperty(node)){

    for(var key in this.nodes){
      if(this.nodes[key] === node) {
        delete this.nodes[key];
      }
    }
    for(var key in this.edges){
     if(this.edges[key]['a'] || this.edges[key]['b']) {
        delete this.edges[key];
      }
    }

  } else {
    console.log("Could not delete node, because node was not stored");
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // for (var x = 0; x < this.edges.length; x++) {
  //   var edgeOne = this.edges[x][0];
  //   var edgeTwo = this.edges[x][1];
  //   if ((edgeOne === fromNode || edgeOne ===toNode) && (edgeTwo === toNode || edgeTwo === fromNode)) {
  //     return true;
  //   }
  // }
  // return false;

  for (var key in this.edges) {
    var edgeOne = this.edges[key]['a'];
    var edgeTwo = this.edges[key]['b'];
    
    if ((edgeOne === fromNode || edgeOne ===toNode) && (edgeTwo === toNode || edgeTwo === fromNode)) {
      return true;
    } 
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // if (this.contains(fromNode) && this.contains(toNode)){
  //   var innerEdge = [fromNode, toNode];
  //   this.edges.push(innerEdge);
  // } else {
  //   console.log("Could not locate at least one of the nodes provided.");
  // }
  
  if (this.contains(fromNode) && this.contains(toNode)){
    var edge = { 'a': fromNode, 'b': toNode };
    var edgeKey = JSON.stringify(edge);
    this.edges[edgeKey] = edge;
  } else {
    console.log("Could not locate at least one of the nodes provided.");
  };
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // for (var x = 0; x < this.edges.length; x++) {
  //   var fromEdge = this.edges[x][0];
  //   var toEdge = this.edges[x][1];
  //   if (fromEdge === fromNode && toEdge === toNode){
  //     this.edges.splice(x,1);
  //   }
  // }
  
  for (var key in this.edges) {
    var fromEdge = this.edges[key]['a'];
    var toEdge = this.edges[key]['b'];
    if (fromEdge === fromNode || fromEdge ===toNode || toEdge === toNode || toEdge === fromNode){
      delete this.edges[key];
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // this.nodes.forEach(cb);
  
  for (var key in this.nodes) {
    // this.nodes[key].forEach(cb);
    cb(this.nodes[key])
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// addNodes: constant, contains: constant, removeNode: n (could be improved by using objects instead of arrays, to avoid using slice)
// addEdge: constant, removeEdge: n^2 (can reduce complexity to n, if we use objects instead of arrays, to avoid using slice)
// forEachNode: linear
