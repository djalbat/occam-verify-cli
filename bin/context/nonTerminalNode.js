"use strict";

const ruleNames = require("../miscellaneous/ruleNames");

const { NAME_RULE_NAME, TERM_RULE_NAME, TERM__RULE_NAME, EXPRESSION_RULE_NAME } = ruleNames;

class NonTerminalNodeContext {
  constructor(fileContext, childNodes, index) {
    this.fileContext = fileContext;
    this.childNodes = childNodes;
    this.index = index;
  }

  getFileContext() {
    return this.fileContext;
  }

  getNextChildNode() {
    let nextChildNode = undefined;

    const childNodesLength = this.childNodes.length;

    if (this.index < childNodesLength) {
      nextChildNode = this.childNodes[this.index++];
    }

    return nextChildNode;
  }

  getSavedIndex() {
    const savedIndex = this.index;  ///

    return savedIndex;
  }

  backtrack(savedIndex) {
    this.index = savedIndex;  ///
  }

  findRuleByRuleName(ruleName) { return this.fileContext.findRuleByRuleName(ruleName); }

  isRulePermittedByRuleName(ruleName) {
    const termRuleNames = this.fileContext.getTermRuleNames(),
          permittedRuleNames = [
            NAME_RULE_NAME,
            TERM_RULE_NAME,
            TERM__RULE_NAME,
            ...termRuleNames,
            EXPRESSION_RULE_NAME
          ],
          permittedRuleNamesIncludesRuleName = permittedRuleNames.includes(ruleName),
          ruleNamePermitted = permittedRuleNamesIncludesRuleName; ///

    return ruleNamePermitted;
  }

  isRuleNameTermRuleName(ruleName) {
    const termRuleNames = this.fileContext.getTermRuleNames(),
          termRuleNamesIncludesRuleName = termRuleNames.includes(ruleName),
          ruleNameTermRuleName = termRuleNamesIncludesRuleName; ///

    return ruleNameTermRuleName;
  }

  static fromFileContextAndNonTerminalNode(fileContext, nonTerminalNode) {
    const childNodes = nonTerminalNode.getChildNodes(),
          index = 0,
          nonTerminalNodeContext = new NonTerminalNodeContext(fileContext, childNodes, index);

    return nonTerminalNodeContext;
  }
}

module.exports = NonTerminalNodeContext;
