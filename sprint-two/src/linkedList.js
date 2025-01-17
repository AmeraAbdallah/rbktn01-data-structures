var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if(list.head === null){
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    if(this.head === null){
      return;
    }
    var removed = list.head;
    list.head = list.head.next;
    return removed.value;
  };

  list.contains = function(target) {
    var listHolder = list.head;
    while(listHolder !== null){
      if(listHolder.value === target)
        return true;
      listHolder = listHolder.next;
    }
    return false;
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
 *
 */
