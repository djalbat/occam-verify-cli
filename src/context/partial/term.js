"use strict";

import PartialContext from "../../context/partial";

import { ruleFromBNF } from "../../context/partial";

const bnf = `

        _ ::= term... <END_OF_LINE> ;
        
      `,
      rule = ruleFromBNF(bnf);

export default class TermPartialContext extends PartialContext {
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
          termPartialContext = PartialContext.fromString(TermPartialContext, string, context);

    return termPartialContext;
  }

  static fromString(string, context) { return PartialContext.fromString(TermPartialContext, string, context); }
}

export function termNodeFromTermString(termString, context) {
  const string = termString,  ///
        termPartialContext = TermPartialContext.fromString(string, context),
        termNode = termPartialContext.getTermNode();

  return termNode;
}
