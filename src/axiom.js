"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

export default class Axiom extends AxiomLemmaTheoremConjecture {
  static fromJSONAndFileContext(json, fileContext) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Axiom, json, fileContext); }

  static fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequent, proofContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequenceAndProofContext(Axiom, labels, suppositions, consequent, proofContext); }
}
