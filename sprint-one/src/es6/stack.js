class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  };
  push(value) {
  	var index = Object.keys(this.storage).length;
  	this.storage[index] = value;
  };
  pop() {
  	var lastIndex = Object.keys(this.storage).length-1;
  	var lastElement = this.storage[Object.keys(this.storage).length-1];
  	delete this.storage[lastIndex];
  	return lastElement;
  };
  size() {
  	var length = Object.keys(this.storage).length;
  	return length;
  }

};

new Stack();



