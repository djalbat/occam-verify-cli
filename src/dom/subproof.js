"use strict";

import dom from "../dom";
import LocalContext from "../context/local";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { subproofStringFromSubproofNode } from "../utilities/subproof";
import unifyMixins from "../mixins/proofStep/unify";
import Substitutions from "../substitutions";
import {assignAssignments} from "../utilities/assignments";

const subproofNodeQuery = nodeQuery("/subproof"),
      suppositionNodesQuery = nodesQuery("/subproof/supposition"),
      subDerivationNodeQuery = nodeQuery("/subproof/subDerivation");

export default domAssigned(class Subproof {
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

  isProofStep() {
    const proofStep = false;

    return proofStep;
  }

  unifyStatement(statement, context) {
    let statementUnified;

    const specificContext = context, ///
          generalContext = context, ///
          substitutions = Substitutions.fromNothing(),
          subproof = this;

    const subproofUnified = statement.unifySubproof(subproof, substitutions, generalContext, specificContext);

    statementUnified = subproofUnified; ///

    if (statementUnified) {
      const equivalences = context.getEquivalences(),
            substitutionsUnified = equivalences.unifySubstitutions(substitutions);

      statementUnified = substitutionsUnified;  ///
    }

    return statementUnified;
  }

  unify(substitutions, context) {
    let unified;

    unified = true;

    return unified;
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

  verifyAndUnify(substitutions, context) {
    let verifiedAndUnified = false;

    const verified = this.verify(substitutions, context);

    if (verified) {
      const unified = this.unify(substitutions, context);

      if (unified) {
        const proofStepSubproof = this; ///

        context.addProofStepSubproof(proofStepSubproof);

        verifiedAndUnified = true; ///
      }
    }

    return verifiedAndUnified;
  }

  static name = "Subproof";

  static fromProofStepSubproofNode(proofStepSubproofNode, fileContext) {
    let subproof = null;

    const subproofNode = subproofNodeQuery(proofStepSubproofNode);

    if (subproofNode !== null) {
      const { Supposition, SubDerivation } = dom,
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
});
