"use strict";

import elements from "../elements";
import LocalContext from "../context/local";

import { define } from "../elements";

export default define(class Section {
  constructor(context, node, string, hypotheses, axiom, lemma, theorem, conjecture) {
    this.context = context;
    this.node = node;
    this.string = string;
    this.hypotheses = hypotheses;
    this.axiom = axiom;
    this.lemma = lemma;
    this.theorem = theorem;
    this.conjecture = conjecture;
  }

  getContext() {
    return this.context;
  }

  getNode() {
    return this.node;
  }

  getString() {
    return this.string;
  }

  getHypotheses() {
    return this.hypotheses;
  }

  getAxiom() {
    return this.axiom;
  }

  getLemma() {
    return this.lemma;
  }

  getTheorem() {
    return this.theorem;
  }

  getConjecture() {
    return this.conjecture;
  }

  verify() {
    let verifies = false;

    const sectionString = this.string;  ///

    this.context.trace(`Verifying the '${sectionString}' section...`, this.node);

    const hypothesesVerify = this.verifyHypotheses();

    if (hypothesesVerify) {
      const axiomLemmaTheoremOrConjecture = (this.axiom || this.lemma || this.theorem || this.conjecture),
            axiomLemmaTheoremOrConjectureVerifies = axiomLemmaTheoremOrConjecture.verify(this.context);

      if (axiomLemmaTheoremOrConjectureVerifies) {
        axiomLemmaTheoremOrConjecture.setHypotheses(this.hypotheses);

        verifies = true;
      }
    }

    if (verifies) {
      this.context.debug(`...verified the '${sectionString}' section.`, this.node);
    }

    return verifies;
  }

  verifyHypotheses() {
    const hypothesesVerify = this.hypotheses.every((hypothesis) => {
      const hypothesisVerifies = hypothesis.verify(this.context);

      if (hypothesisVerifies) {
        return true;
      }
    });

    return hypothesesVerify;
  }

  static name = "Section";

  static fromSectionNode(sectionNode, context) {
    const localContext = LocalContext.fromNothing(context);

    context = localContext; ///

    const hypothesisNodes = sectionNode.getHypothesisNodes(),
          hypotheses = hypothesesFromHypothesisNodes(hypothesisNodes, context),
          axiom = axiomFroSectionNode(sectionNode, context),
          lemma = lemmaFroSectionNode(sectionNode, context),
          theorem = theoremFroSectionNode(sectionNode, context),
          conjecture = conjectureFroSectionNode(sectionNode, context),
          node = sectionNode, ///
          string = stringFromHypothesesAxiomLemmaTheoremAndConjecture(hypotheses, axiom, lemma, theorem, conjecture, context),
          section = new Section(context, node, string, hypotheses, axiom, lemma, theorem, conjecture);

    return section;
  }
});

function axiomFroSectionNode(sectionNode, context) {
  let axiom = null;

  const axiomNode = sectionNode.getAxiomNode();

  if (axiomNode !== null) {
    const { Axiom } = elements;

    axiom = Axiom.fromAxiomNode(axiomNode, context);
  }

  return axiom;
}

function lemmaFroSectionNode(sectionNode, context) {
  let lemma = null;

  const lemmaNode = sectionNode.getLemmaNode();

  if (lemmaNode !== null) {
    const { Lemma } = elements;

    lemma = Lemma.fromLemmaNode(lemmaNode, context);
  }

  return lemma;
}

function theoremFroSectionNode(sectionNode, context) {
  let theorem = null;

  const theoremNode = sectionNode.getTheoremNode();

  if (theoremNode !== null) {
    const { Theorem } = elements;

    theorem = Theorem.fromTheoremNode(theoremNode, context);
  }

  return theorem;
}

function conjectureFroSectionNode(sectionNode, context) {
  let conjecture = null;

  const conjectureNode = sectionNode.getConjectureNode();

  if (conjectureNode !== null) {
    const { Conjecture } = elements;

    conjecture = Conjecture.fromConjectureNode(conjectureNode, context);
  }

  return conjecture;
}

function hypothesesFromHypothesisNodes(hypothesisNodes, context) {
  const hypotheses = hypothesisNodes.map((hypothesisNode) => {
    const { Hypothesis } = elements,
          hypothesis = Hypothesis.fromHypothesisNode(hypothesisNode, context);

    return hypothesis;
  });

  return hypotheses;
}

function hypothesesStringFromHypotheses(hypotheses, context) {
  const hypothesesString = hypotheses.reduce((hypothesesString, hypothesis) => {
    const hypothesisString = hypothesis.getString();

    hypothesesString = (hypothesesString !== null) ?
                         `${hypothesesString}, ${hypothesisString}` :
                           hypothesisString;  ///

    return hypothesesString;
  }, null);

  return hypothesesString;
}

function stringFromHypothesesAxiomLemmaTheoremAndConjecture(hypotheses, axiom, lemma, theorem, conjecture, context) {
  const axiomLemmaTheoremOrConjecture = (axiom || lemma || theorem || conjecture),
        axiomLemmaTheoremOrConjectureString = axiomLemmaTheoremOrConjecture.getString(),
        hypothesesString = hypothesesStringFromHypotheses(hypotheses, context),
        string = (axiomLemmaTheoremOrConjectureString !== null) ?
                   `[${hypothesesString}]::: ${axiomLemmaTheoremOrConjectureString}` :
                     `[${hypothesesString}]::: `;


  return string;
}
