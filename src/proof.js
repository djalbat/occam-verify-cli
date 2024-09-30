"use strict";

import Derivation from "./derivation";
import LocalContext from "./context/local";

import { nodeQuery } from "./utilities/query";

const derivationNodeQuery = nodeQuery("/proof/derivation");

export default class Proof {
  constructor(derivation) {
    this.derivation = derivation;
  }

  getDerivation() {
    return this.derivation;
  }

  verify(substitutions, conclusion, localContext) {
    let verified = false;

    localContext = LocalContext.fromLocalContext(localContext); ///

    const derivationVerified = this.derivation.verify(substitutions, localContext);

    if (derivationVerified) {
      const lastProofStep = localContext.getLastProofStep();

      if (lastProofStep !== null) {
        const conclusionStatementNode = conclusion.getStatementNode(),
              conclusionStatementNodeMatches = lastProofStep.matchStatementNode(conclusionStatementNode);

        verified = conclusionStatementNodeMatches;  ///
      }
    }

    return verified;
  }

  static fromProofNode(proofNode, fileContext) {
    let proof = null;

    if (proofNode !== null) {
      const derivationNode = derivationNodeQuery(proofNode),
            derivation = Derivation.fromDerivationNode(derivationNode, fileContext);

      proof = new Proof(derivation);
    }

    return proof;
  }
}
