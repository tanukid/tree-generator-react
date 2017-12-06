export default BinarySearchTree

function BinarySearchTree(value) {
  this.value = value
  this.left = null
  this.right = null
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    // debugger
    if (this.left) this.left.insert(value)
    else this.left = new BinarySearchTree(value)
  } else {
    if (this.right) this.right.insert(value)
    else this.right = new BinarySearchTree(value)
  }
  return this // for chaining, do not edit
}

BinarySearchTree.prototype.min = function () {
  if (this.left) return this.left.min()
  return this.value
}

BinarySearchTree.prototype.max = function () {
  if (this.right) return this.right.max()
  return this.value
}

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true
  if (value < this.value) {
    if (this.left) return this.left.contains(value)
  } else {
    if (this.right) return this.right.contains(value)
  }
  return false
}

BinarySearchTree.prototype.traverse = function (iterator) {
  if (this.left) this.left.traverse(iterator)
  iterator(this.value)
  if (this.right) this.right.traverse(iterator)
}

BinarySearchTree.prototype.depthFirstForEach = function (push, type) {
  if (!type || type === 'in-order') {
    if (this.left) this.left.depthFirstForEach(push, type)
    push(this.value)
    if (this.right) this.right.depthFirstForEach(push, type)
  } else if (type === 'pre-order') {
    push(this.value)
    if (this.left) this.left.depthFirstForEach(push, type)
    if (this.right) this.right.depthFirstForEach(push, type)
  } else if (type === 'post-order') {
    if (this.left) this.left.depthFirstForEach(push, type)
    if (this.right) this.right.depthFirstForEach(push, type)
    push(this.value)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (iterator) {
  var queue = [this]
  var tree
  while (queue.length) {
    tree = queue.shift()
    iterator(tree.value)
    if (tree.left) queue.push(tree.left)
    if (tree.right) queue.push(tree.right)
  }
}

BinarySearchTree.prototype.objectify = function (parentKey) {
  const queue = []
  const createNode = (value) => ({ [parentKey]: value,  children: [] })

  this.depthFirstForEach(val => queue.push(val), 'in-order')

  queue.reduce((acc, val) => {
    return objectify(val, acc)
  }, createNode())

  function objectify(current, value) {
    if (!current.length) current.name = value
    if (value < current.name) {
      if (current.children[0]) objectify(current.children[0], value)
      else current.children[0] = createNode(value)
    } else {
      if (current.children[1]) objectify(current.children[1], value)
      else current.children[1] = createNode(value)
    }
    return current
  }
}
