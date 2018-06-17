var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.count = 0;
  return obj;
};

var stackMethod = {};

stackMethods.push = function(value){
  this.count++;
  var currentCount = this.count;
  this[currentCount] = value;
};

stackMethods.pop = function(){
  var currentDelete = this[this.count];
  delete this[this.count];
  this.count > 0 ? this.count-- : this.count = 0;
  return currentDelete;
};

stackMethods.size = function(){
  return this.count;
};
