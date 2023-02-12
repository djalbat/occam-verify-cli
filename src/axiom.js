"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

export default class Axiom extends AxiomLemmaTheoremConjecture {
  static fromJSONAndFileContext(json, fileContexct) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Axiom, json, fileContexct); }

  static fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequenceAndProofContext(Axiom, labels, suppositions, consequence, proofContext); }
}
