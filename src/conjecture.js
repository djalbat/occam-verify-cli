"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

export default class Conjecture extends AxiomLemmaTheoremConjecture {
  static fromJSONAndFileContext(json, fileContext) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Conjecture, json, fileContext); }

  static fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequenceAndProofContext(Conjecture, labels, suppositions, consequence, proofContext); }
}
