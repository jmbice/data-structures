var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  // stackMethods.push = function(value) {
  // 	console.log("does execute")
  // 	var index = Object.key(storage).length;
  // 	storage[index] = value
  // }

  // stackMethods.pop = function() {
  // 	var lastIndex = Object.key(storage).length-1;
  // 	var lastElement = storage[lastIndex];
  // 	delete storage[lastIndex];
  // 	return lastElement;
  // }

  // stackMethods.size = function() {
  // 	var length = Object.key(storage).length;
  // 	return length;
  // }
  _.extend(instance, stackMethods);
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





