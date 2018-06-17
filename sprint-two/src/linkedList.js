var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { 
    if (list.tail === null) {
      var first = Node(value);
      list.head = first;
      list.tail = first;
    } else {
      var newNode = Node(value);
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var wasNextHead = list.head.next;
    var wasPrevHead = list.head.value;
    list.head = wasNextHead;
    return wasPrevHead;
  };

  list.contains = function(target) {
    var contain = function(target, collection) {
      if (collection.value === target) {
        return true;
      } else if (collection.next === null) {
        return false;
      } else {
        return contain(target, collection.next);
      }
    };
    return contain(target, list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * for add and remove, O(1) / constant
 * for contains = n
 */
