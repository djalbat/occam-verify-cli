"use strict";

import NodeAndTokens from "../nodeAndTokens";

import { ruleFromBNF } from "../nodeAndTokens";

const bnf = `

        _ ::= metavariable... <END_OF_LINE> ;
        
      `,
      rule = ruleFromBNF(bnf);

export default class MetavariableNodeAndTokens extends NodeAndTokens {
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
          metavariableNodeAndTokens = NodeAndTokens.fromString(MetavariableNodeAndTokens, string, context);

    return metavariableNodeAndTokens;
  }

  static fromString(string, context) { return NodeAndTokens.fromString(MetavariableNodeAndTokens, string, context); }
}

export function metavariableNodeFromMetavariableString(metavariableString, context) {
  const string = metavariableString,  ///
        metavariableNodeAndTokens = MetavariableNodeAndTokens.fromString(string, context),
        metavariableNode = metavariableNodeAndTokens.getMetavariableNode();

  return metavariableNode;
}
