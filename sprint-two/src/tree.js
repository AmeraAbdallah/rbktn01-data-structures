var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result = false;
  var checkChildren = function(obj){
    if(obj.value === target){
      result = true;
    }
    obj.children.forEach((child) => {
      checkChildren(child);
    });
  }
  checkChildren(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
