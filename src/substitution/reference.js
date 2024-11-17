"use strict";

import dom from "../dom";
import Substitution from "../substitution";
import ReferenceSubstitutionPartialContext from "../context/partial/substitution/reference";

import { nodeQuery } from "../utilities/query";

const referenceNodeQuery = nodeQuery("/referenceSubstitution/reference[0]"),
      metavariableNodeQuery = nodeQuery("/referenceSubstitution/reference[1]/metavariable!"),
      referenceSubstitutionNodeQuery = nodeQuery("/statement/referenceSubstitution");

export default class ReferenceSubstitution extends Substitution {
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

    const referenceSubstitutionNode = referenceSubstitutionNodeQuery(statementNode);

    if (referenceSubstitutionNode !== null) {
      const referenceNode = referenceNodeQuery(referenceSubstitutionNode),
            metavariableNode = metavariableNodeQuery(referenceSubstitutionNode);

      if ((referenceNode !== null) && (metavariableNode !== null)) {
        const { Reference, Metavariable } = dom,
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
          referenceSubstitutionPartialContext = ReferenceSubstitutionPartialContext.fromString(string, context),
          node = referenceSubstitutionPartialContext.getNode(),
          tokens = referenceSubstitutionPartialContext.getTokens(),
          referenceSubstitution = new ReferenceSubstitution(string, node, tokens, reference, metavariable);

    return referenceSubstitution;
  }
}

function stringFromReferenceAndMetavariable(reference, metavariable) {
  const referenceString = reference.getString(),
        metavariableString = metavariable.getString(),
        string = `[${referenceString} for ${metavariableString}]`;

  return string;
}
