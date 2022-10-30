"use strict";

import verifyTerm from "../../verify/term";
import verifyEquality from "../../verify/equality";
import verifyStatement from "../../verify/statement";
import verifyTypeAssertion from "../../verify/assertion/type";
import verifyTermAsVariable from "../../verify/termAsVariable";
import verifyQualifiedStatement from "../../verify/statement/qualified";
import verifyUnqualifiedStatement from "../../verify/statement/unqualified";
import verifyIndicativeConditional from "../../verify/indicativeConditional";

const proofContextMixins = {
  verifyTerm,
  verifyEquality,
  verifyStatement,
  verifyTypeAssertion,
  verifyTermAsVariable,
  verifyQualifiedStatement,
  verifyUnqualifiedStatement,
  verifyIndicativeConditional
};

export default proofContextMixins;
