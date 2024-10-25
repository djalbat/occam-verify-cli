"use strict";

import NodeAndTokens from "../nodeAndTokens";

import { ruleFromBNF } from "../nodeAndTokens";

const bnf = `

        _ ::= term... <END_OF_LINE> ;
        
      `,
      rule = ruleFromBNF(bnf);

export default class TermNodeAndTokens extends NodeAndTokens {
  getTermNode() {
    const termNode = this.node; ///

    return termNode;
  }

  getTermTokens() {
    const termTokens = this.tokens; ///

    return termTokens;
  }

  static rule = rule;

  static fromTerm(term, context) {
    const string = term.getString(),
          termNodeAndTokens = NodeAndTokens.fromString(TermNodeAndTokens, string, context);

    return termNodeAndTokens;
  }

  static fromTermString(termString, context) {
    const string = termString,  ///
          termNodeAndTokens = NodeAndTokens.fromString(TermNodeAndTokens, string, context);

    return termNodeAndTokens;
  }
}

export function termNodeFromTermString(termString, context) {
  const termNodeAndTokens = TermNodeAndTokens.fromTermString(termString, context),
        termNode = termNodeAndTokens.getTermNode();

  return termNode;
}
