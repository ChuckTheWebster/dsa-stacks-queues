"use strict";
const LinkedList = require("./linked-list");

/** Node: node for a queue. */
class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */
class Queue {
  first = null;
  last = null;
  size = 0;

  constructor() { this._ll = new LinkedList(); }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */
  enqueue(val) {
    this._ll.push(val);
    this.size = this._ll.length;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */
  dequeue() {
    this.size--;
    return this._ll.shift();
  }


  /** peek(): return the value of the first node in the queue. */
  peek() {
    return this.first;
  }


  /** isEmpty(): return true if the queue is empty, otherwise false */
  isEmpty() {
    if (this.size === 0) {
      return true
    }
  }
}

module.exports = Queue;
