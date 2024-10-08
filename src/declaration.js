"use strict";

import { stripBracketsFromStatement } from "./utilities/brackets";

export default class Declaration {
  constructor(reference, statementNode) {
    this.reference = reference;
    this.statementNode = statementNode;
  }

  getReference() {
    return this.reference;
  }

  getStatementNode() {
    return this.statementNode;
  }

  getMetavariableNode() { return this.reference.getMetavariableNode(); }

  unifyStatement(statementNode) {
    statementNode = stripBracketsFromStatement(statementNode); ///

    const statementNodeMatches = this.statementNode.match(statementNode),
          statementUnified = statementNodeMatches;  ///

    return statementUnified;
  }

  unifySubstitution(substitution) {
    const statementNode = substitution.getStatementNode(),
          metavariableNode = substitution.getMetavariableNode(),
          statementUnified = this.unifyStatement(statementNode),
          metavariableUnified = this.unifyMetavariable(metavariableNode),
          substitutionUnified = (metavariableUnified && statementUnified);

    return substitutionUnified;
  }

  unifyMetavariable(metavariable) {
    const metavariableNodeMatches = this.reference.matchMetavariableNode(metavariable);

    return metavariableNodeMatches;
  }

  unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem) {
    const consequent = metaLemmaMetatheorem.getConsequent(),
          statementNode = consequent.getStatementNode(),
          statementNodeMatches = this.statementNode.match(statementNode),
          metaLemmaOrMetaTheoremUnified = statementNodeMatches;  ///

    return metaLemmaOrMetaTheoremUnified;
  }

  static fromReferenceAndStatementNode(reference, statementNode) {
    statementNode = stripBracketsFromStatement(statementNode); ///

    const declaration = new Declaration(reference, statementNode);

    return declaration;
  }
}
