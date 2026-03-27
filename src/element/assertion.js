"use strict";

import { Element } from "occam-languages";

export default class Assertion extends Element {
  getAssertionNode() {
    const node = this.getNode(),
          assertionNode = node; ///

    return assertionNode;
  }

  matchAssertionNode(assertionNode) {
    const node = assertionNode, ///
          nodeMatches = this.matchNode(node),
          assertionNodeMatches = nodeMatches; ///

    return assertionNodeMatches;
  }

  isEqualTo(assertion) {
    const assertionNode = assertion.getNode(),
          assertionNodeMatches = this.matchAssertionNode(assertionNode),
          equalTo = assertionNodeMatches;  ///

    return equalTo;
  }

  findValidAssertion(context) {
    const assertionNode = this.getAssertionNode(),
          assertion = context.findAssertionByAssertionNode(assertionNode),
          validAssertion = assertion;  ///

    return validAssertion;
  }

  toJSON() {
    const { name } = this.constructor,
          string = this.getString(),
          json = {
            name,
            string
          };

    return json;
  }
}
