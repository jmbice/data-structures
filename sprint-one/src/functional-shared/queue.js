var Queue = function() {
  var obj = { count: 0 };
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.count++;
    var currentCount = this.count;
    this[currentCount] = value;
  },
  dequeue: function() {
    var lowest = Infinity;
    for (keys in this) {
      keys < lowest ? lowest = keys : null;
    }
    var returnDeleted = this[lowest];
    delete this[lowest];
    return returnDeleted;
  }
};

queueMethods.size = function() {
  var numOfKeys = 0;
  var relevantObj = this;
  for (var keys in relevantObj) {
    numOfKeys++;
  }
  return numOfKeys - 4;
};
