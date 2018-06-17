class Stack {
  constructor() {

    this.count = 0;
  }

  push(value){
    this.count++;
    var currentCount = this.count;
    this[currentCount] = value;
  }

  pop(){
    var currentDelete = this[this.count];
    delete this[this.count];
    this.count > 0 ? this.count-- : this.count = 0;
    return currentDelete;
  }

  size(){
    return this.count;
  }
}

var newStack = new Stack();
