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

  static fromMetavariableString(metavariableString, context) {
    const string = metavariableString,  ///
          metavariableNodeAndTokens = NodeAndTokens.fromString(MetavariableNodeAndTokens, string, context);

    return metavariableNodeAndTokens;
  }
}

export function metavariableNodeFromMetavariableString(metavariableString, context) {
  const metavariableNodeAndTokens = MetavariableNodeAndTokens.fromMetavariableString(metavariableString, context),
        metavariableNode = metavariableNodeAndTokens.getMetavariableNode();

  return metavariableNode;
}