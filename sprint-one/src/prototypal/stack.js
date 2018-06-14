// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

// var stackMethods = {};


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  //console.log(storage, "storage");
  return instance;

};


stackMethods = {};

//var stackMethods = {
stackMethods.push = function(value) {
  	// console.log("does execute")
  	// console.log(this, "passing value")
  	var index = Object.keys(this.storage).length;
  	this.storage[index] = value;
};
stackMethods.pop =  function() {
  	var lastIndex = Object.keys(this.storage).length-1;
  	var lastElement = this.storage[lastIndex];
  	delete this.storage[lastIndex];
  	return lastElement;
};
stackMethods.size =  function() {
  	// console.log("test");
  	var length = Object.keys(this.storage).length;
  	return length;
};
