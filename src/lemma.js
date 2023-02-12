"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

import { LEMMA_KIND } from "./kinds";

export default class Lemma extends AxiomLemmaTheoremConjecture {
  static kind = LEMMA_KIND;

  static fromJSONAndFileContext(json, fileContext) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Lemma,json, fileContext); }

  static fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequenceAndProofContext(Lemma, labels, suppositions, consequence, proofContext); }
}
