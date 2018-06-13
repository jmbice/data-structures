var Queue = function() {
  var someInstance = {};
  var storage = {};
  var count = 0;

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var lowest = Math.min(...Object.keys(storage));
    var returnDeleted = storage[lowest];
    delete storage[lowest];
    count--;
    return returnDeleted

  };

  someInstance.size = function() {
    return count >= 0 ? count : 0;
  };

  return someInstance;
};
