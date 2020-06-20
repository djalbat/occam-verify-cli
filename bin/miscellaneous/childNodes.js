"use strict";

class ChildNodes {
  constructor(childNodes, shiftedChildNodes) {
    this.childNodes = childNodes;
    this.shiftedChildNodes = shiftedChildNodes;
  }

  shift() {
    const childNode = this.childNodes.shift(),
          shiftedChildNode = childNode; ///

    this.shiftedChildNodes.push(shiftedChildNode);

    return childNode;
  }

  backtrack() {
    let shiftedChildNode = this.shiftedChildNodes.pop();

    while (shiftedChildNode !== undefined) {
      const childNode = shiftedChildNode; ///

      this.childNodes.unshift(childNode);

      shiftedChildNode = this.shiftedChildNodes.shift();
    }
  }

  static fromChildNodes(childNodes) {
    const shiftedChildNodes = [];

    childNodes = new ChildNodes(childNodes, shiftedChildNodes);  ///

    return childNodes;
  }
}

module.exports = ChildNodes;
