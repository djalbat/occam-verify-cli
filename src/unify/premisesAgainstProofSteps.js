"use strict";

import LocalContext from "../context/local";
import unifyPremiseAgainstProofStep from "../unify/premiseAgainstProofStep";

import { reverse, correlate } from "../utilities/array";

export default function unifyPremisesAgainstProofSteps(premisesA, proofStepsB, substitutions, fileContextA, localContextB) {
  premisesA = reverse(premisesA); ///

  proofStepsB = reverse(proofStepsB); ///

  const premisesUnified = correlate(premisesA, proofStepsB, (premiseA, proofStepB) => {
    const localContextA = LocalContext.fromFileContext(fileContextA),
          premiseUnified = unifyPremiseAgainstProofStep(premiseA, proofStepB, substitutions, localContextA, localContextB);

    if (premiseUnified) {
      return true;
    }
  });

  return premisesUnified;
}
