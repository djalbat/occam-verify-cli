"use strict";

import shim from "./shim";
import Reference from "./reference";

import { nodeQuery } from "./utilities/query";

const referenceNodeQuery = nodeQuery("/declaration/reference"),
      statementNodeQuery = nodeQuery("/declaration/statement");

export default class Declaration {
  constructor(string, reference, statement) {
    this.string = string;
    this.reference = reference;
    this.statement = statement;
  }

  getString() {
    return this.string;
  }

  getReference() {
    return this.reference;
  }

  getStatement() {
    return this.statement;
  }

  // unifyStatement(statementNode) {
  //   statementNode = stripBracketsFromStatement(statementNode); ///
  //
  //   const statementNodeMatches = this.statementNode.match(statementNode),
  //         statementUnified = statementNodeMatches;  ///
  //
  //   return statementUnified;
  // }
  //
  // unifySubstitution(substitution) {
  //   const statementNode = substitution.getStatementNode(),
  //         metavariableNode = substitution.getMetavariableNode(),
  //         statementUnified = this.unifyStatement(statementNode),
  //         metavariableUnified = this.unifyMetavariable(metavariableNode),
  //         substitutionUnified = (metavariableUnified && statementUnified);
  //
  //   return substitutionUnified;
  // }
  //
  // unifyMetavariable(metavariable) {
  //   const metavariableNodeMatches = this.reference.matchMetavariableNode(metavariable);
  //
  //   return metavariableNodeMatches;
  // }
  //
  // unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem) {
  //   const consequent = metaLemmaMetatheorem.getConsequent(),
  //         statementNode = consequent.getStatementNode(),
  //         statementNodeMatches = this.statementNode.match(statementNode),
  //         metaLemmaOrMetaTheoremUnified = statementNodeMatches;  ///
  //
  //   return metaLemmaOrMetaTheoremUnified;
  // }
  //
  // static fromReferenceAndStatementNode(reference, statementNode) {
  //   statementNode = stripBracketsFromStatement(statementNode); ///
  //
  //   const declaration = new Declaration(reference, statementNode);
  //
  //   return declaration;
  // }

  verify(assignments, stated, localContext) {
    let verified;

    const declarationString = this.string;  ///

    localContext.trace(`Verifying the '${declarationString}' declaration...`);

    stated = true;

    assignments = null;

    const referenceVerified = this.reference.verify(localContext);

    if (referenceVerified) {
      const statementVerified = this.statement.verify(assignments, stated, localContext);

      verified = statementVerified; ///
    }

    if (verified) {
      localContext.debug(`...verified the '${declarationString}' declaration.`);
    }

    return verified;
  }

  static fromDeclarationNode(declarationNode, localContext) {
    let declaration = null;

    if (declarationNode !== null) {
      const { Statement } = shim,
            referenceNode = referenceNodeQuery(declarationNode),
            statementNode = statementNodeQuery(declarationNode),
            reference = Reference.fromReferenceNode(referenceNode, localContext),
            statement = Statement.fromStatementNode(statementNode, localContext),
            node = declarationNode,  ///
            string = localContext.nodeAsString(node);

      declaration = new Declaration(string, reference, statement);
    }

    return declaration;
  }
}
