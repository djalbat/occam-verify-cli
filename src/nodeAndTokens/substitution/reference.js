"use strict";

import NodeAndTokens from "../../nodeAndTokens";

import { ruleFromBNF } from "../../nodeAndTokens";

const bnf = `

            _ ::= referenceSubstitution... <END_OF_LINE> ;
            
      `,
      rule = ruleFromBNF(bnf);

export default class ReferenceSubstitutionNodeAndTokens extends NodeAndTokens {
  static rule = rule;

  static fromString(string, context) { return NodeAndTokens.fromString(ReferenceSubstitutionNodeAndTokens, string, context); }
}
