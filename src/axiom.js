"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

export default class Axiom extends AxiomLemmaTheoremConjecture {
  static fromJSONAndFileContext(json, fileContext) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Axiom, json, fileContext); }

  static fromLabelsSuppositionsConsequentAndLocalContext(labels, suppositions, consequent, localContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequentAndLocalContext(Axiom, labels, suppositions, consequent, localContext); }
}
