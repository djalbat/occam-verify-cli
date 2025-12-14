"use strict";

import Substitution from "../substitution";
import ReferenceSubstitutionPartialContext from "../../context/partial/substitution/reference";

import { define } from "../../ontology";

export default define(class ReferenceSubstitution extends Substitution {
  constructor(context, string, node, tokens, reference, metavariable) {
    super(context, string, node, tokens);

    this.reference = reference;
    this.metavariable = metavariable;
  }

  getReference() {
    return this.reference;
  }

  getMetavariable() {
    return this.metavariable;
  }

  isReferenceEqualToReference(reference) {
    const referenceEqualToReference = this.reference.isEqualTo(reference);

    return referenceEqualToReference;
  }

  static fromReferenceAndMetavariable(reference, metavariable, context) {
    const string = stringFromReferenceAndMetavariable(reference, metavariable),
          lexer = context.getLexer(),
          parser = context.getParser(),
          referenceSubstitutionPartialContext = ReferenceSubstitutionPartialContext.fromStringLexerAndParser(string, lexer, parser),
          node = referenceSubstitutionPartialContext.getNode(),
          tokens = referenceSubstitutionPartialContext.getTokens(),
          referenceSubstitution = new ReferenceSubstitution(context, string, node, tokens, reference, metavariable);

    return referenceSubstitution;
  }
});

function stringFromReferenceAndMetavariable(reference, metavariable) {
  const referenceString = reference.getString(),
        metavariableString = metavariable.getString(),
        string = `[${referenceString} for ${metavariableString}]`;

  return string;
}
