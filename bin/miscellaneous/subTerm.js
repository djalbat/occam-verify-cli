'use strict';

class SubTerm {
	constructor(termNode, constructorTermNode) {
		this.termNode = termNode;
		this.constructorTermNode = constructorTermNode;
	}

	getTermNode() {
	  return this.termNode;
  }

  getConstructorTermNode() {
	  return this.constructorTermNode;
  }

  static fromTermNodeAndConstructorTermNode(termNode, constructorTermNode) { return new SubTerm(termNode, constructorTermNode); }
}

module.exports = SubTerm;
