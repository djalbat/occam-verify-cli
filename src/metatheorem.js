"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

export default class Metatheorem extends AxiomLemmaTheoremConjecture {
  static fromJSONAndFileContext(json, fileContext) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Metatheorem, json, fileContext); }

  static fromLabelsSuppositionsConsequentAndLocalContext(labels, suppositions, consequent, localContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequentAndLocalContext(Metatheorem, labels, suppositions, consequent, localContext); }
}
