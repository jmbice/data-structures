class Queue {
  constructor() {
    this.count = 0;
  }

  enqueue(value) {
    this.count++;
    this[this.count] = value;
  }

  dequeue() {
    var lowest = Infinity;
    for (var keys in this) {
      keys < lowest ? lowest = keys : null;
    }
    var returnDeleted = this[lowest];
    delete this[lowest];
    return returnDeleted;
  }

  size() {
    var numOfKeys = 0;
    for (var keys in this) {
      numOfKeys++;
    }
    return numOfKeys - 1;
  }
}