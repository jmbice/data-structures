var BinarySearchTree = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;

};

BinarySearchTree.prototype.insert = function(val){
  var baseNode = this;
  var newNode = { value: val, left: null, right: null };

  var insertRecursion = function (currentNode, value) {
    if (currentNode.value < value && currentNode.right) {
      insertRecursion(currentNode.right, value);
    } else if (currentNode.value > value && currentNode.left) {
      insertRecursion(currentNode.left, value);
    } else if (currentNode.value < value && !currentNode.right) {
      currentNode.right = newNode;
    } else if (currentNode.value > value && !currentNode.left) {
      currentNode.left = newNode;
    } else {
      console.log('Node was already in the array!');
    }
  }
  insertRecursion(baseNode, val);
};

BinarySearchTree.prototype.contains = function(val){
  var baseNode = this;

  var containsRecursion = function (currentNode, value) {
    if (currentNode.value === value) {
      return true;
    } else if (currentNode.value < value && currentNode.right) {
      return containsRecursion(currentNode.right, value);
    } else if (currentNode.value > value && currentNode.left) {
      return containsRecursion(currentNode.left, value);
    } else if (currentNode.value < value && !currentNode.right) {
      return false;
    } else if (currentNode.value > value && !currentNode.left) {
      return false;
    } else {
      console.log('something is really wrong with this function')
    }
  }

  return containsRecursion(baseNode, val);
};

BinarySearchTree.prototype.depthFirstLog = function(func){  
  var hasRightNode = []
 
  var depthRecursion = function(node, func) {
    func(node.value);

    if(node.right){
      hasRightNode.push(node.right);
    }    

    if (node.left){
      depthRecursion(node.left, func);
    } else {
      if (hasRightNode.length > 0) {
        var mostRelevantRightNode = hasRightNode[hasRightNode.length-1];
        hasRightNode.pop();
        depthRecursion(mostRelevantRightNode, func);
      }
      //do nothing
    }


 //recursively traverse down the left side
  

  //move left continuously
  //remember any right nodes along the way
  //when there are no more left node, you go back to the previous right node
  ////pop() previous right node off of hasRightNode array
  //move right once
  //use recursion to repeat previous step


  } 
  
  depthRecursion(this, func)
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
