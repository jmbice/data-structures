var Stack = function() {
  this.count = 0;
};

Stack.prototype.push = function(value){
  this.count++;
  var currentCount = this.count;
  this[currentCount] = value;
};

Stack.prototype.pop = function(){
  var currentDelete = this[this.count];
  delete this[this.count];
  this.count > 0 ? this.count-- : this.count = 0;
  return currentDelete;
};

Stack.prototype.size = function(){
  return this.count;
};
