// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

// var queueMethods = {};


var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.count = 0;
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.count++;
  this[this.count] = value;
};

queueMethods.dequeue = function() {
  var lowest = Infinity;
  for (var keys in this) {
    keys < lowest ? lowest = keys : null;
  }
  var returnDeleted = this[lowest];
  delete this[lowest];
  return returnDeleted;
};

queueMethods.size = function() {
  var numOfKeys = 0;
  var relevantObj = this;
  for (var keys in relevantObj) {
    numOfKeys++;
  }
  return numOfKeys - 4;
};

