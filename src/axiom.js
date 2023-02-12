"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

import { AXIOM_KIND } from "./kinds";

export default class Axiom extends AxiomLemmaTheoremConjecture {
  static kind = AXIOM_KIND;

  static fromJSONAndFileContext(json, fileContexct) { return AxiomLemmaTheoremConjecture.fromJSONAndFileContext(Axiom, json, fileContexct); }

  static fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsConsequenceAndProofContext(Axiom, labels, suppositions, consequence, proofContext); }
}
