'use strict';

const constants = require('../constants');

const { TERM_RULE_NAME } = constants;

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
