"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

export default class Theorem extends AxiomLemmaTheoremConjecture {
  static fromJSONAndFileContext(json, fileContext) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Theorem, json, fileContext); }

  static fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequenceAndProofContext(Theorem, labels, suppositions, consequence, proofContext); }
}
