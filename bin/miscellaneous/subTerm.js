'use strict';

class SubTerm {
	constructor(termNode, constructorTermNode) {
		this.termNode = termNode;
		this.constructorTermNode = constructorTermNode;
	}

	verify(context, rules, verifyExpression, verifyTermNode) {
    const verified = verifyTermNode(this.termNode, this.constructorTermNode, context, rules, verifyExpression);

    return verified;
	}

  static fromTermNodeAndConstructorTermNode(termNode, constructorTermNode) { return new SubTerm(termNode, constructorTermNode); }
}

module.exports = SubTerm;
