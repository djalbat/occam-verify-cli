"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

export default class Axiom extends AxiomLemmaTheoremConjecture {
  static fromJSONAndFileContext(json, fileContext) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Axiom, json, fileContext); }

  static fromLabelsSuppositionsConsequentAndProofContext(labels, suppositions, consequent, proofContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequentAndProofContext(Axiom, labels, suppositions, consequent, proofContext); }
}
