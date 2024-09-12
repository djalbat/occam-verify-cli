"use strict";

import LocalContext from "../context/local";
import unifyPremiseWithProofStep from "../unify/premiseWithProofStep";

import { reverse, correlate } from "../utilities/array";

export default function unifyPremisesWithProofSteps(premisesA, proofStepsB, substitutions, fileContextA, localContextB) {
  premisesA = reverse(premisesA); ///

  proofStepsB = reverse(proofStepsB); ///

  const premisesUnified = correlate(premisesA, proofStepsB, (premiseA, proofStepB) => {
    const localContextA = LocalContext.fromFileContext(fileContextA),
          premiseUnified = unifyPremiseWithProofStep(premiseA, proofStepB, substitutions, localContextA, localContextB);

    if (premiseUnified) {
      return true;
    }
  });

  return premisesUnified;
}
