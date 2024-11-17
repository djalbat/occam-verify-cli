"use strict";

import PartialContext from "../../../context/partial";

import { ruleFromBNF } from "../../../context/partial";

const bnf = `

        _ ::= referenceSubstitution... <END_OF_LINE> ;
            
      `,
      rule = ruleFromBNF(bnf);

export default class ReferenceSubstitutionPartialContext extends PartialContext {
  static rule = rule;

  static fromString(string, context) { return PartialContext.fromString(ReferenceSubstitutionPartialContext, string, context); }
}
