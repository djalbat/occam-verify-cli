"use strict";

import dom from "../dom";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { subproofStringFromSubproofNode } from "../utilities/subproof";

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

  getLastStep() { return this.subDerivation.getLastStep(); }

  getStatements() {
    const lastStep = this.getLastStep(),
          suppositionStatements = this.suppositions.map((supposition) => {
            const suppositionStatement = supposition.getStatement();

            return suppositionStatement;
          }),
          lastStepStatement = lastStep.getStatement(),
          statements = [
            ...suppositionStatements,
            lastStepStatement
          ];

    return statements;
  }

  isStep() {
    const sStep = false;

    return sStep;
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

  verify(substitutions, assignments, context) {
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

  static name = "Subproof";

  static fromStepOrSubproofNode(sStepOrSubproofNode, fileContext) {
    let subproof = null;

    const subproofNode = subproofNodeQuery(sStepOrSubproofNode);

    if (subproofNode !== null) {
      const subproofString = subproofStringFromSubproofNode(subproofNode, fileContext),
            string = subproofString,  ///
            suppositions = suppositionsFromSubproofNode(subproofNode, fileContext),
            subDerivation = subDerivationFromSubproofNode(subproofNode, fileContext);

      subproof = new Subproof(string, suppositions, subDerivation);
    }

    return subproof;
  }
});

function suppositionsFromSubproofNode(subproofNode, fileContext) {
  const { Supposition } = dom,
        suppositionNodes = suppositionNodesQuery(subproofNode),
        suppositions = suppositionNodes.map((suppositionNode) => {
          const supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);

          return supposition;
        });

  return suppositions;
}

function subDerivationFromSubproofNode(subproofNode, fileContext) {
  const { SubDerivation } = dom,
        subDerivationNode = subDerivationNodeQuery(subproofNode),
        subDerivation = SubDerivation.fromSubDerivationNode(subDerivationNode, fileContext);

  return subDerivation;
}
