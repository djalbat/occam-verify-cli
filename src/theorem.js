"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

import { THEOREM_KIND } from "./kinds";

export default class Theorem extends AxiomLemmaTheoremConjecture {
  static kind = THEOREM_KIND;

  static fromJSONAndFileContext(json, fileContext) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Theorem, json, fileContext); }

  static fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequenceAndProofContext(Theorem, labels, suppositions, consequence, proofContext); }
}
