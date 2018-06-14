var Queue = function() {
  var someInstance = {};
  var storage = {};
  var count = 0;

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var lowest = Infinity;
    for (keys in storage){
      keys < lowest ? lowest = keys : null;
    }
    var returnDeleted = storage[lowest];
    delete storage[lowest];
    return returnDeleted;
  };

  someInstance.size = function() {
    var numOfKeys = 0;
    for (var keys in storage) {
      numOfKeys++;
    }
    return numOfKeys;
  };

  return someInstance;
};
