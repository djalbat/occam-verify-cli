"use strict";

import dom from "../../dom";
import Substitution from "../substitution";
import ReferenceSubstitutionPartialContext from "../../context/partial/substitution/reference";

import { domAssigned } from "../../dom";

export default domAssigned(class ReferenceSubstitution extends Substitution {
  constructor(string, node, tokens, reference, metavariable) {
    super(string, node, tokens);

    this.reference = reference;
    this.metavariable = metavariable;
  }

  getReference() {
    return this.reference;
  }

  getMetavariable() {
    return this.metavariable;
  }

  isReferenceEqualTo(reference) { return this.reference.isEqualTo(reference); }

  isMetavariableEqualTo(metavariable) { return this.metavariable.isEqualTo(metavariable); }

  static fromStatementNode(statementNode, context) {
    let referenceSubstitution = null;

    const referenceSubstitutionNode = statementNode.getReferenceSubstitutionNode();

    if (referenceSubstitutionNode !== null) {
      const lastReferenceNode = referenceSubstitutionNode.getLastReferenceNode(),
            firstReferenceNode = referenceSubstitutionNode.getFirstReferenceNode(),
            singularMetavariableNode = lastReferenceNode.getSingularMetavariableNode();

      if (singularMetavariableNode !== null) {
        const { Reference, Metavariable } = dom,
              referenceNode = firstReferenceNode, ///
              metavariableNode = singularMetavariableNode,  ///
              reference = Reference.fromReferenceNode(referenceNode, context),
              metavariable = Metavariable.fromMetavariableNode(metavariableNode, context),
              node = referenceSubstitutionNode,  ///
              tokens = context.nodeAsTokens(node),
              string = stringFromReferenceAndMetavariable(reference, metavariable);

        referenceSubstitution = new ReferenceSubstitution(string, node, tokens, reference, metavariable);
      }
    }

    return referenceSubstitution;
  }

  static fromReferenceAndMetavariable(reference, metavariable, context) {
    const string = stringFromReferenceAndMetavariable(reference, metavariable),
          lexer = context.getLexer(),
          parser = context.getParser(),
          referenceSubstitutionPartialContext = ReferenceSubstitutionPartialContext.fromStringLexerAndParser(string, lexer, parser),
          node = referenceSubstitutionPartialContext.getNode(),
          tokens = referenceSubstitutionPartialContext.getTokens(),
          referenceSubstitution = new ReferenceSubstitution(string, node, tokens, reference, metavariable);

    return referenceSubstitution;
  }
});

function stringFromReferenceAndMetavariable(reference, metavariable) {
  const referenceString = reference.getString(),
        metavariableString = metavariable.getString(),
        string = `[${referenceString} for ${metavariableString}]`;

  return string;
}
