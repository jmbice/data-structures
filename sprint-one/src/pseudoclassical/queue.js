// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

var Queue = function() {

  this.storage = {};
 
};

Queue.prototype.enqueue = function(value) {
	var index = Object.keys(this.storage).length;
	if(Object.keys(this.storage)[0] === "1") {
		index += 1; 
	};
	this.storage[index] = value;
};

Queue.prototype.dequeue = function() {
	var firstIndex = Object.keys(this.storage)[0];
	var firstElement = this.storage[firstIndex];
	delete this.storage[firstIndex];
	return firstElement;
};

Queue.prototype.size = function() {
	var length = Object.keys(this.storage).length;
	return length;
}

new Queue();