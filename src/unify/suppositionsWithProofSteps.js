"use strict";

import LocalContext from "../context/local";
import unifySuppositionWithProofStep from "./suppositionWithProffStep";

import { reverse, correlate } from "../utilities/array";

export default function unifySuppositionsWithProofSteps(suppositionsA, proofStepsB, substitutions, fileContextA, localContextB) {
  suppositionsA = reverse(suppositionsA); ///

  proofStepsB = reverse(proofStepsB); ///

  const suppositionsUnified = correlate(suppositionsA, proofStepsB, (suppositionA, proofStepB) => {
    const localContextA = LocalContext.fromFileContext(fileContextA),
          suppositionUnified = unifySuppositionWithProofStep(suppositionA, proofStepB, substitutions, localContextA, localContextB);

    if (suppositionUnified) {
      return true;
    }
  });

  return suppositionsUnified;
}
