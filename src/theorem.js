"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

export default class Theorem extends AxiomLemmaTheoremConjecture {
  static fromJSONAndFileContext(json, fileContext) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Theorem, json, fileContext); }

  static fromLabelsSuppositionsConsequentAndProofContext(labels, suppositions, consequent, proofContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequentAndProofContext(Theorem, labels, suppositions, consequent, proofContext); }
}
