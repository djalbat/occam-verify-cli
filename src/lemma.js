"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

export default class Lemma extends AxiomLemmaTheoremConjecture {
  static fromJSONAndFileContext(json, fileContext) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Lemma,json, fileContext); }

  static fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequenceAndProofContext(Lemma, labels, suppositions, consequence, proofContext); }
}
