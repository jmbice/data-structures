var HashTable = function() {
  this.limit = 8;
  this.storage = LimitedArray(this.limit);
  this.totalItems = 0;
  
};

Hashtable.prototype.checkLengthOnAdd = function() {
  // for (var i = 0; i < this.storage.length; i++) {
  //   var amountFilled = [];
  //   if (this.storage[i] !== undefined) {
  //     amountFilled.push(true);
  //   }
  //   if (amountFilled.length >== this.storage.length*.75) {
  //     var additionalSpaces = Array(this.storage.length); 
  //     this.storage = this.storage.concat(additionalSpaces);
  //   }
  // }
  
  //every time you add an item
  //compare number of items to .75 of storage length
  ////if total number of item > .75 of storage length
  /////new storage = Array(storage length *2)
  //rehash all item in old array
  ////put item in new array
  ///old array = new array

  /// *add this in insert function var totalItems = 0;
  if (this.totalItems >= this.storage.length * .75) {
    this.limit = this.storage.length * 2;
    var newStorage = Array(this.limit);
    for (var x = 0; x < this.storage.length ; x++) {
      for (var y = 0; y < this.storage[y].length; y++) {
        var index = getIndexBelowMaxForKey(this.storage[y][0], this.limit); //hash element to get index
        var key = this.storage[y][0];
        var value = this.storage[y][1];
        newStorage[index].push([key, value]);
      }
    }
  }
  
}


Hashtable.prototype.checkLengthOnSubtract = function() {
  // for (var i = 0; i < this.storage.length; i++) {
  //   var amountFilled = [];
  //   if (this.storage[i] !== undefined) {
  //     amountFilled.push(true);
  //   }
  // }

  // if (amountFilled.length <== this.storage.length * .25) {
  //   var idealLength = this.storage.length * .5;
  //   for (var i = 0; i < this.storage.length; i++) {
  //     if (this.storage[i] === undefined && (idealLength < this.storage.length)) {
  //       this.storage[i].splice(i, 1);
  //     }
  //   }
  // }
}

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

  this.totalItems++;
  checkLengthOnAdd();
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
  this.items--;
  ////call resizing
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


