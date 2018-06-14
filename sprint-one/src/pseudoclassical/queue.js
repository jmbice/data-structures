var Queue = function() {
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this.count++;
  var currentCount = this.count;
  this[currentCount] = value;
};

Queue.prototype.dequeue = function() {
  var lowest = Infinity;
  for (keys in this) {
    keys < lowest ? lowest = keys : null;
  }
  var returnDeleted = this[lowest];
  delete this[lowest];
  return returnDeleted;
};

Queue.prototype.size = function() {
  var numOfKeys = 0;
  var relevantObj = this;
  for (var keys in relevantObj) {
    numOfKeys++;
  }
  return numOfKeys - 4;
};
