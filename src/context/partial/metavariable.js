"use strict";

import PartialContext from "../../context/partial";

import { ruleFromBNF } from "../../context/partial";

const bnf = `

        _ ::= metavariable... <END_OF_LINE> ;
        
      `,
      rule = ruleFromBNF(bnf);

export default class MetavariablePartialContext extends PartialContext {
  getMetavariableNode() {
    const metavariableNode = this.node; ///

    return metavariableNode;
  }

  getMetavariableTokens() {
    const metavariableTokens = this.tokens; ///

    return metavariableTokens;
  }

  static rule = rule;

  static fromMetavariable(metavariable, context) {
    const string = metavariable.getString(),
          metavariablePartialContext = PartialContext.fromString(MetavariablePartialContext, string, context);

    return metavariablePartialContext;
  }

  static fromString(string, context) { return PartialContext.fromString(MetavariablePartialContext, string, context); }
}
