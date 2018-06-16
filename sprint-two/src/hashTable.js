

var HashTable = function() {
  this.limit = 8;
  this.storage = LimitedArray(this.limit);
  
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  var currKeyVal = [k, v];

  if(!this.storage[index]) {
    var arrAtIndex = [];
    this.storage[index] = arrAtIndex;
    this.storage[index].push(currKeyVal);

  } else {
    var hasAdded;
    this.storage[index].map(function(e) {
      if(e[0] === k) {
        e[1] = v;
        hasAdded = 'yes';
      }
    });

    if(hasAdded !== 'yes') {
      this.storage[index].push(currKeyVal);
    } 
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);

  for (var j = 0; j < this.storage[index].length; j++) {
    if(this.storage[index][j][0] === k) {
      return this.storage[index][j][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);

  var spliceIndex;
  for (var j = 0; j < this.storage[index].length; j++) {
    if(this.storage[index][j][0] === k) {
      spliceIndex = j;
    }    
  }
  this.storage[index].splice(spliceIndex, 1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


