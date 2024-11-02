"use strict";

import { arrayUtilities } from "necessary";

import shim from "./shim";
import LocalContext from "./context/local";

import { unifyStatement } from "./utilities/unification";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { subproofStringFromSubproofNode } from "./utilities/subproof";

const { match } = arrayUtilities;

const subproofNodeQuery = nodeQuery("/proofStep/subproof"),
      suppositionNodesQuery = nodesQuery("/subproof/supposition"),
      subDerivationNodeQuery = nodeQuery("/subproof/subDerivation");

class Subproof {
  constructor(string, suppositions, subDerivation) {
    this.string = string;
    this.suppositions = suppositions;
    this.subDerivation = subDerivation;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getSuppositions() {
    return this.suppositions;
  }

  getSubDerivation() {
    return this.subDerivation;
  }

  getLastProofStep() { return this.subDerivation.getLastProofStep(); }

  getStatements() {
    const lastProofStep = this.getLastProofStep(),
          suppositionStatements = this.suppositions.map((supposition) => {
            const suppositionStatement = supposition.getStatement();

            return suppositionStatement;
          }),
          lastProofStepStatement = lastProofStep.getStatement(),
          statements = [
            ...suppositionStatements,
            lastProofStepStatement
          ];

    return statements;
  }

  unifySubproofAssertion(subproofAssertion, substitutions, generalContext, specificContext) {
    let subproofAssertionUnified;

    const subproofString = this.string,
          subproofAssertionString = subproofAssertion.getString();

    specificContext.trace(`Unifying the '${subproofAssertionString}' subproof assertion with the '${subproofString}' subproof...`);

    const subproofStatements = this.getStatements(),
          subproofAssertionStatements = subproofAssertion.getStatements();

    subproofAssertionUnified = match(subproofAssertionStatements, subproofStatements, (subproofAssertionStatement, subproofStatement) => {
      const generalStatement = subproofAssertionStatement,  ///
            specificStatement = subproofStatement,  ///
            statementUnified = unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext);

      if (statementUnified) {
        return true;
      }
    });

    if (subproofAssertionUnified) {
      specificContext.trace(`...unified the '${subproofAssertionString}' subproof assertion with the '${subproofString}' subproof.`);
    }

    return subproofAssertionUnified;
  }

  verify(substitutions, context) {
    let subproofVerified = false;

    const localContext = LocalContext.fromContext(context);  ///

    context = localContext; ///

    const suppositionsVerified = this.suppositions.every((supposition) => {
      const suppositionVerified = supposition.verify(context);

      if (suppositionVerified) {
        return true;
      }
    });

    if (suppositionsVerified) {
      const subDerivationVerified = this.subDerivation.verify(substitutions, context);

      if (subDerivationVerified) {
        subproofVerified = true;
      }
    }

    return subproofVerified;
  }

  static fromProofStepNode(proofStepNode, fileContext) {
    let subproof = null;

    const subproofNode = subproofNodeQuery(proofStepNode);

    if (subproofNode !== null) {
      const { Supposition, SubDerivation } = shim,
            subproofString = subproofStringFromSubproofNode(subproofNode, fileContext),
            suppositionNodes = suppositionNodesQuery(subproofNode),
            subDerivationNode = subDerivationNodeQuery(subproofNode),
            string = subproofString,  ///
            suppositions = suppositionNodes.map((suppositionNode) => {
              const supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);

              return supposition;
            }),
            subDerivation = SubDerivation.fromSubDerivationNode(subDerivationNode, fileContext);

      subproof = new Subproof(string, suppositions, subDerivation);
    }

    return subproof;
  }
}

Object.assign(shim, {
  Subproof
});

export default Subproof;
