"use strict";

import { Element } from "occam-languages";

export default class Assertion extends Element {
  getAssertionNode() {
    const node = this.getNode(),
          assertionNode = node; ///

    return assertionNode;
  }

  matchAssertionNode(assertionNode) {
    const assertionNodeA = assertionNode; ///

    assertionNode = this.getAssertionNode();

    const assertionNodeB = assertionNode, ///
          assertionNodeAAMatchesAssertionBNodeB = assertionNodeA.match(assertionNodeB),
          assertionNodeMatches = assertionNodeAAMatchesAssertionBNodeB; ///

    return assertionNodeMatches;
  }

  isValid(context) {
    const assertionNode = this.getAssertionNode(),
          assertionPresent = context.isAssertionPresentByAssertionNode(assertionNode),
          valid = assertionPresent;  ///

    return valid;
  }

  isEqualTo(assertion) {
    const assertionNode = assertion.getNode(),
          assertionNodeMatches = this.matchAssertionNode(assertionNode),
          equalTo = assertionNodeMatches;  ///

    return equalTo;
  }
}
