"use strict";
const LinkedList = require("./linked-list");

/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

// [a b c d]

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;

  constructor() {
    this._ll = new LinkedList();
  }

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {

    this._ll.unshift(val);
    // access #1 on linked list
    this.top = this._ll._get(0);
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size <= 0) throw new Error("The stack is empty.");
    this.size--;
    return this._ll.shift();
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    return this._ll._get(0).val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size <= 0 ? true : false;
  }
}

let stack = new Stack();
stack.push(10);


module.exports = Stack;
