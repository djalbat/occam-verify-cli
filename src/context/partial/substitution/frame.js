"use strict";

import PartialContext from "../../../context/partial";

import { ruleFromBNF } from "../../../context/partial";

const bnf = `

        _ ::= frameSubstitution... <END_OF_LINE> ;
            
      `,
      rule = ruleFromBNF(bnf);

export default class FrameSubstitutionPartialContext extends PartialContext {
  static rule = rule;

  static fromString(string, context) { return PartialContext.fromString(FrameSubstitutionPartialContext, string, context); }
}
