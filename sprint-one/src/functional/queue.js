var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var index = Object.keys(value).length;
    storage[index] = value
  };

  someInstance.dequeue = function() {
    var firstIndex = Object.keys(storage)[0]; //first item in array out
    var firstValue = storage[firstIndex];
    delete storage[firstIndex];
    return firstValue;  
  };

  someInstance.size = function() {
    var length = Object.keys(storage).length;
    return length;
  };

  return someInstance;
};

    