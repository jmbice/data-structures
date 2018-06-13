var Stack = function() {
  var obj = { count: 0 };
  _.extend(obj, stackMethods);
  return obj;
};

stackMethods = {
  push : function(value){
    this.count++;
    var currentCount = this.count;
    this[currentCount] = value;
    // console.log(this);
  },
  pop : function(){
    var currentDelete = this[this.count];
    delete this[this.count];
    this.count > 0 ? this.count-- : this.count = 0;
    return currentDelete;
  },
  size : function(){
    return this.count;
  }
};
