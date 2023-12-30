"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

export default class Lemma extends AxiomLemmaTheoremConjecture {
  static fromJSONAndFileContext(json, fileContext) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Lemma,json, fileContext); }

  static fromLabelsSuppositionsConsequentAndLocalContext(labels, suppositions, consequent, localContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequentAndLocalContext(Lemma, labels, suppositions, consequent, localContext); }
}
