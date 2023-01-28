"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

import { AXIOM_KIND } from "./kinds";

export default class Axiom extends AxiomLemmaTheoremConjecture {
  static kind = AXIOM_KIND;

  static fromJSON(json, lexer, parser) { return AxiomLemmaTheoremConjecture.fromJSON(Axiom, json, lexer, parser); }

  static fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsAndConsequence(Axiom, labels, suppositions, consequence); }
}
