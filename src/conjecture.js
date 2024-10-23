"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import TopLevelAssertion from "./topLevelAssertion";

class Conjecture extends TopLevelAssertion {
  verify() {
    let verified = false;

    const conjectureString = this.string; ///

    this.fileContext.trace(`Verifying the '${conjectureString}' conjecture...`);

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
          if (this.proof !== null) {
            const { Substitutions } = shim,
                  substitutions = Substitutions.fromNothing();

            this.proof.verify(substitutions, this.consequent, localContext);
          }

          const conjecture = this;  ///

          this.fileContext.addConjecture(conjecture);

          verified = true;
        }
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${conjectureString}' conjecture.`);
    }

    return verified;
  }

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Conjecture, json, fileContext); }

  static fromConjectureNode(conjectureNode, fileContext) { return TopLevelAssertion.fromNode(Conjecture, conjectureNode, fileContext); }
}

Object.assign(shim, {
  Conjecture
});

export default Conjecture;
