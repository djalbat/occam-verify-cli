'use strict';

const ruleNames = require('../miscellaneous/ruleNames');

const { TERM_RULE_NAME } = ruleNames;

class TermNode {
	constructor(ruleName, childNode) {
		this.ruleName = ruleName;
		this.childNode = childNode;
	}

	isTerminalNode() {
		const terminalNode = false;

		return terminalNode;
	}

	getChildNodes() {
		const childNodes = [  ///
			this.childNode
		];

		return childNodes;
	}

	getRuleName() {
		return this.ruleName;
	}

	getFirstSignificantToken() { return this.childNode.getFirstSignificantToken(); }

	getLastSignificantToken() { return this.childNode.getLastSignificantToken(); }

	static fromChildNode(childNode) {
		const ruleName = TERM_RULE_NAME,
					termNode = new TermNode(ruleName, childNode);

		return termNode;
	}
}

module.exports = TermNode;
