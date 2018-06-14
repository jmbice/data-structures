var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  //store value in object 

  someInstance.enqueue = function(value) {
    var index = Object.keys(storage).length ;
    if (Object.keys(storage)[0] === "1" ){
      index = index + 1;
    };
    //console.log(storage, "storage", "length",index)
    storage[index] = value;
    
    //console.log(value ,"storage(index)")
  };

  someInstance.dequeue = function() {

    var firstIndex = Object.keys(storage)[0];
    var firstValue = storage[firstIndex];
    //console.log(firstValue, "Delete Value")
    delete storage[firstIndex];
    //console.log(storage, "new STorage")
    return firstValue;  
  };

  someInstance.size = function() {
    var length = Object.keys(storage).length;
    return length;
  };

  return someInstance;
};

    