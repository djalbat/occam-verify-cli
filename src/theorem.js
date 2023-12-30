"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

export default class Theorem extends AxiomLemmaTheoremConjecture {
  static fromJSONAndFileContext(json, fileContext) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Theorem, json, fileContext); }

  static fromLabelsSuppositionsConsequentAndLocalContext(labels, suppositions, consequent, localContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequentAndLocalContext(Theorem, labels, suppositions, consequent, localContext); }
}
