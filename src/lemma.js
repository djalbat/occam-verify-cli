"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import TopLevelAssertion from "./topLevelAssertion";

import { EMPTY_STRING } from "./constants";

class Lemma extends TopLevelAssertion {
  verify() {
    let verified = false;

    const lemmaString = this.string;  ///

    (lemmaString === EMPTY_STRING) ?
      this.fileContext.trace(`Verifying a lemma...`) :
        this.fileContext.trace(`Verifying the '${lemmaString}' lemma...`);

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
            const lemma = this;  ///

            this.fileContext.addLemma(lemma);

            verified = true;
          }
        }
      }
    }

    if (verified) {
      (lemmaString === EMPTY_STRING) ?
        this.fileContext.debug(`...verified a lemma.`) :
          this.fileContext.debug(`...verified the '${lemmaString}' lemma.`);
    }

    return verified;
  }

  static fromLemmaNode(metaLemmaNode, fileContext) { return TopLevelAssertion.fromNode(Lemma, metaLemmaNode, fileContext); }
}

Object.assign(shim, {
  Lemma
});

export default Lemma;
