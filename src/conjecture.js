"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

import { CONJECTURE_KIND } from "./kinds";

export default class Conjecture extends AxiomLemmaTheoremConjecture {
  static kind = CONJECTURE_KIND;

  static fromJSONAndFileContext(json, fileContext) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Conjecture, json, fileContext); }

  static fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequenceAndProofContext(Conjecture, labels, suppositions, consequence, proofContext); }
}
