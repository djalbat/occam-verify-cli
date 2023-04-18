"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

export default class Lemma extends AxiomLemmaTheoremConjecture {
  static fromJSONAndFileContext(json, fileContext) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Lemma,json, fileContext); }

  static fromLabelsSuppositionsConsequentAndProofContext(labels, suppositions, consequent, proofContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequentAndProofContext(Lemma, labels, suppositions, consequent, proofContext); }
}
