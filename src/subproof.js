"use strict";

import Supposition from "./supposition";
import LocalContext from "./context/local";
import SubDerivation from "./subDerivation";

import { nodeQuery, nodesQuery } from "./utilities/query";
import {subproofNodeAsSubproofString, subproofStringFromSubproofNode} from "./utilities/subproof";

const suppositionNodesQuery = nodesQuery("/subproof/supposition"),
      subDerivationNodeQuery = nodeQuery("/subproof/subDerivation");

export default class Subproof {
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

  verify(substitutions, localContext) {
    let subproofVerified = false;

    localContext = LocalContext.fromLocalContext(localContext);  ///

    const suppositionsVerified = this.suppositions.every((supposition) => {
      const suppositionVerified = supposition.verify(localContext);

      if (suppositionVerified) {
        return true;
      }
    });

    if (suppositionsVerified) {
      const subDerivationVerified = this.subDerivation.verify(substitutions, localContext);

      if (subDerivationVerified) {
        subproofVerified = true;
      }
    }

    return subproofVerified;
  }

  static fromSubproofNode(subproofNode, fileContext) {
    let subproof = null;

    if (subproofNode !== null) {
      const subproofString = subproofStringFromSubproofNode(subproofNode, fileContext),
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
