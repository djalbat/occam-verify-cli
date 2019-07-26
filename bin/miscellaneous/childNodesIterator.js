'use strict';

class ChildNodesIterator {
  constructor(childNodes) {
    this.childNodes = childNodes;
  }

  shift() { return this.childNodes.shift(); }

	static fromNode(node) {
		const childNodes = node.getChildNodes().slice(),  ///
					childNodesIterator = new ChildNodesIterator(childNodes);

		return childNodesIterator;
	}
}

module.exports = ChildNodesIterator;
