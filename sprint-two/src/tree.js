var Tree = function(value) {
  var newTree = { };
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var anObj = { 'value': value };
  this.children.push(anObj);
};

treeMethods.contains = function(target) {
  //iterate over this.children array
  ///check each object in array and find "value" and check if it equals == target
  //else return false
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
