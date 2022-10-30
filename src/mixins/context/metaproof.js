"use strict";

import verifyLabels from "../../verify/labels";
import verifyMetaproof from "../../verify/metaproof";
import verifyConclusion from "../../verify/conclusion";
import verifyMetaDerivation from "../../verify/metaDerivation";
import verifyPremiseOrPremises from "../../verify/premiseOrPremises";
import verifyUnqualifiedStatement from "../../verify/metastatement/unqualified";
import verifyConditionalInference from "../../verify/conditinalInference";
import verifyIndicativeConditional from "../../verify/indicativeConditional";
import verifyUnconditionalInference from "../../verify/unconditionalInference";
import verifyQualifiedMetastatement from "../../verify/metastatement/qualified";
import verifyUnqualifiedMetastatement from "../../verify/metastatement/unqualified";

const metaproofContextMixins = {
  verifyLabels,
  verifyMetaproof,
  verifyConclusion,
  verifyMetaDerivation,
  verifyPremiseOrPremises,
  verifyUnqualifiedStatement,
  verifyConditionalInference,
  verifyIndicativeConditional,
  verifyUnconditionalInference,
  verifyQualifiedMetastatement,
  verifyUnqualifiedMetastatement
};

export default metaproofContextMixins;
