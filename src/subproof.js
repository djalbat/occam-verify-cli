"use strict";

import Supposition from "./supposition";
import LocalContext from "./context/local";
import SubDerivation from "./subDerivation";

import { nodeQuery, nodesQuery } from "./utilities/query";

const suppositionNodesQuery = nodesQuery("/subproof/supposition"),
      subDerivationNodeQuery = nodeQuery("/subproof/subDerivation");

export default class Subproof {
  constructor(suppositions, subDerivation) {
    this.suppositions = suppositions;
    this.subDerivation = subDerivation;
  }

  getSuppositions() {
    return this.suppositions;
  }

  getSubDerivation() {
    return this.subDerivation;
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
      const suppositionNodes = suppositionNodesQuery(subproofNode),
            subDerivationNode = subDerivationNodeQuery(subproofNode),
            suppositions = suppositionNodes.map((suppositionNode) => {
              const supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);

              return supposition;
            }),
            subDerivation = SubDerivation.fromSubDerivationNode(subDerivationNode, fileContext);

      subproof = new Subproof(suppositions, subDerivation);
    }

    return subproof;
  }
}
