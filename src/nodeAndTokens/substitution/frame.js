"use strict";

import NodeAndTokens from "../../nodeAndTokens";

import { ruleFromBNF } from "../../nodeAndTokens";

const bnf = `

            _ ::= frameSubstitution... <END_OF_LINE> ;
            
      `,
      rule = ruleFromBNF(bnf);

export default class FrameSubstitutionNodeAndTokens extends NodeAndTokens {
  static rule = rule;

  static fromString(string, context) { return NodeAndTokens.fromString(FrameSubstitutionNodeAndTokens, string, context); }
}
