var Stack = function() {
  var someInstance = {};
  var storage = {};
  var count = 0;

  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };
  
  someInstance.pop = function() {
    delete storage[count];
    count--;
    return storage[count];
  };
  
  someInstance.size = function() {
    return count >= 0 ? count : 0;
  };

  return someInstance;
};
