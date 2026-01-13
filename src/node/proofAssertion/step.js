"use strict";

import ProofAssertionNode from "../../node/proofAssertion";

import { QUALIFICATION_RULE_NAME } from "../../ruleNames";

export default class StepNode extends ProofAssertionNode {
  isStepNode() {
    const stepNode = true;

    return stepNode;
  }

  isSubproofNode() {
    const subproofNode = false;

    return subproofNode;
  }

  getReferenceNode() {
    let referenceNode = null;

    const qualificationNode = this.getQualificationNode();

    if (qualificationNode !== null) {
      referenceNode = qualificationNode.getReferenceNode();
    }

    return referenceNode;
  }

  getSatisfiedAssertionNode() {
    let satisfiedAssertionNode =  null;

    const qualificationNode = this.getQualificationNode();

    if (qualificationNode !== null) {
      satisfiedAssertionNode = qualificationNode.getSatisfiedAssertionNode();
    }

    return satisfiedAssertionNode;
  }

  getQualificationNode() {
    const ruleName = QUALIFICATION_RULE_NAME,
          qualificationNode = this.getNodeByRuleName(ruleName);

    return qualificationNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return ProofAssertionNode.fromRuleNameChildNodesOpacityAndPrecedence(StepNode, ruleName, childNodes, opacity, precedence); }
}
