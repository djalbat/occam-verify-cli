"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

export default class Conjecture extends AxiomLemmaTheoremConjecture {
  static fromJSONAndFileContext(json, fileContext) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Conjecture, json, fileContext); }

  static fromLabelsSuppositionsConsequentAndLocalContext(labels, suppositions, consequent, localContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequentAndLocalContext(Conjecture, labels, suppositions, consequent, localContext); }
}
