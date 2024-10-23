"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import TopLevelAssertion from "./topLevelAssertion";

class Theorem extends TopLevelAssertion {
  verify() {
    let verified = false;

    const theoremString = this.string;  ///

    this.fileContext.trace(`Verifying the '${theoremString}' theorem...`);

    const labelsVerifiedWhenDeclared = this.labels.every((label) => {
      const labelVVerifiedWhenDeclared = label.verifyWhenDeclared(this.fileContext);

      if (labelVVerifiedWhenDeclared) {
        return true;
      }
    });

    if (labelsVerifiedWhenDeclared) {
      const localContext = LocalContext.fromFileContext(this.fileContext),
            suppositionsVerified = this.suppositions.every((supposition) => {
              const suppositionVerified = supposition.verify(localContext);

              if (suppositionVerified) {
                return true;
              }
            });

      if (suppositionsVerified) {
        const consequentVerified = this.consequent.verify(localContext);

        if (consequentVerified) {
          const { Substitutions } = shim,
                substitutions = Substitutions.fromNothing(),
                proofVerified = this.proof.verify(substitutions, this.consequent, localContext);

          if (proofVerified) {
            const theorem = this;  ///

            this.fileContext.addTheorem(theorem);

            verified = true;
          }
        }
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${theoremString}' theorem.`);
    }

    return verified;
  }

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Theorem, json, fileContext); }

  static fromTheoremNode(metaLemmaNode, fileContext) { return TopLevelAssertion.fromNode(Theorem, metaLemmaNode, fileContext); }
}

Object.assign(shim, {
  Theorem
});

export default Theorem;
