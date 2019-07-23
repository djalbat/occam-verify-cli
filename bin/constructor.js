'use strict';

const queries = require('./queries'),
			nodeUtilities = require('./utilities/node');

const { nodeAsString } = nodeUtilities,
			{ termNonTerminalNodeQuery } = queries;

class Constructor {
  constructor(ruleName, termNode, type) {
  	this.ruleName = ruleName;
    this.termNode = termNode;
    this.type = type;
  }

  getRuleName() {
  	return this.ruleName;
  }

  getTermNode() {
    return this.termNode;
  }

  getType() {
    return this.type;
  }

  matchRuleName(ruleName) {
  	const matchesRuleName = (this.ruleName === ruleName);

  	return matchesRuleName;
  }

  asString() {
    const termNodeString = nodeAsString(this.termNode),
          typeString = this.type.asString(),
          string = `${termNodeString}:${typeString}`;

    return string;
  }

  static fromTermNodeAndType(termNode, type) {
    const termNonTerminalNode = termNonTerminalNodeQuery(termNode),
		      termNonTerminalNodeRuleName = termNonTerminalNode.getRuleName(),
		      ruleName = termNonTerminalNodeRuleName, ///
		      constructor = new Constructor(ruleName, termNode, type);

    return constructor;
  }
}

module.exports = Constructor;
