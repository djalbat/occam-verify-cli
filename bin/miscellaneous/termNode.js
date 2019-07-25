'use strict';

const ruleNames = require('../miscellaneous/ruleNames');

const { TERM_RULE_NAME } = ruleNames;

class TermNode {
	constructor(ruleName, childNodes) {
		this.ruleName = ruleName;
		this.childNodes = childNodes;
	}

	getRuleName() {
		return this.ruleName;
	}

	getChildNodes() {
		return this.childNodes;
	}

	static fromChildNode(childNode) {
		const ruleName = TERM_RULE_NAME,
					childNodes = [
						childNode
					],
					termNode = new TermNode(ruleName, childNodes);

		return termNode;
	}
}

module.exports = TermNode;
