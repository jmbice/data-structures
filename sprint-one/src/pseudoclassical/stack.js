var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  	// console.log("does execute")
  	// console.log(this, "passing value")
  	var index = Object.keys(this.storage).length;
  	this.storage[index] = value;
};
Stack.prototype.pop =  function() {
  	var lastIndex = Object.keys(this.storage).length-1;
  	var lastElement = this.storage[lastIndex];
  	delete this.storage[lastIndex];
  	return lastElement;
};
Stack.prototype.size =  function() {
  	// console.log("test");
  	var length = Object.keys(this.storage).length;
  	return length;
};

new Stack();



