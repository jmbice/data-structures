var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var last = "";

  // Implement the methods below
  someInstance.push = function(value) {
    //someInstance {push: function(value)}
    var index = Object.keys(storage).length 

    storage[index] = value;
    last = value;

  };

  someInstance.pop = function() {
    //someInstance {pop: function(value)}
    //delete storage[value]
    //find last item on storage and pop it out
    var key = storage[Object.keys(storage).length-1];
    delete storage[Object.keys(storage).length-1];
    return key;
  };
  //object.keys(obj) gives to array of obj
  someInstance.size = function() {
    var length = Object.keys(storage).length;
    return length;
    //someInstance {size: function}
    // var size = function(storage){
    //   var count = 0
    //   for (key in someInstance) {
    //     count +=
    //   }
    // }
    // return count;
  };

  return someInstance;
};
