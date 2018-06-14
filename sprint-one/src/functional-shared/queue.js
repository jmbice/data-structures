
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.


  var instance = {};
  instance.storage = {};
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	var index = Object.keys(this.storage).length;
	if(Object.keys(this.storage)[0] === "1") {
		index += 1; 
	};
	this.storage[index] = value;
};

queueMethods.dequeue = function() {
	var firstIndex = Object.keys(this.storage)[0];
	var firstElement = this.storage[firstIndex];
	delete this.storage[firstIndex];
	return firstElement;
};

queueMethods.size = function() {
	var length = Object.keys(this.storage).length;
	return length;
}

  //step1:
  //create object containing methods and storage value
  //extend methods in queueMethods to object 
  //return instance
  //step two: 
  //create methods in queueMethods 
  ////use this.storage to reference storage value