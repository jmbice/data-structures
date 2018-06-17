var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage.push(item);
};

setPrototype.contains = function(item) {
  if (this.storage.includes(item)) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this.storage.includes(item)) {
    this.storage.splice(this.storage.indexOf(item), 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
