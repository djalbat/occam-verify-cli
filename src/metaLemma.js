"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import TopLevelAssertion from "./topLevelAssertion";

import { EMPTY_STRING } from "./constants";

class MetaLemma extends TopLevelAssertion {
  verify() {
    let verified = false;

    const metaLemmaString = this.string;  ///

    (metaLemmaString === EMPTY_STRING) ?
      this.fileContext.trace(`Verifying a meta-lemma...`) :
        this.fileContext.trace(`Verifying the '${metaLemmaString}' meta-lemma...`);

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
          const proofVerified = this.proof.verify(this.substitutions, this.consequent, localContext);

          if (proofVerified) {
            const metaLemma = this;  ///

            this.fileContext.addMetaLemma(metaLemma);

            verified = true;
          }
        }
      }
    }

    if (verified) {
      (metaLemmaString === EMPTY_STRING) ?
        this.fileContext.debug(`...verified a meta-lemma.`) :
          this.fileContext.debug(`...verified the '${metaLemmaString}' meta-lemma.`);
    }

    return verified;
  }

  static fromMetaLemmaNode(metaLemmaNode, fileContext) { return TopLevelAssertion.fromNode(MetaLemma, metaLemmaNode, fileContext); }
}

Object.assign(shim, {
  MetaLemma
});

export default MetaLemma;