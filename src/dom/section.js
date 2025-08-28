"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { domAssigned } from "../dom";

const { first } = arrayUtilities;

export default domAssigned(class Section {
  constructor(context, string, hypotheses) {
    this.context = context;
    this.string = string;
    this.hypotheses = hypotheses;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getHypotheses() {
    return this.hypotheses;
  }

  verify() {
    let verifies = false;

    const sectionString = this.string;  ///

    debugger

    return verifies;
  }

  static name = "Section";

  static fromSectionNode(sectionNode, context) {
    const hypothesisNodes = sectionNode.getHypothesisNodes(),
          hypotheses = hypothesesFromHypothesisNodes(hypothesisNodes, context),
          string = stringFromHypotheses(hypotheses, context),
          section = new Section(context, string, hypotheses);

    return section;
  }
});

function hypothesesFromHypothesisNodes(hypothesisNodes, context) {
  const hypotheses = hypothesisNodes.map((hypothesisNode) => {
    const { Hypothesis } = dom,
          hypothesis = Hypothesis.fromHypothesisNode(hypothesisNode, context);

    return hypothesis;
  });

  return hypotheses;
}

function stringFromHypotheses(hypotheses, context) {
  const firstHypothesis = first(hypotheses),
        hypothesis = firstHypothesis, ///
        hypothesisString = hypothesis.getString(),
        string = `'${hypothesisString}'...`;

  return string;
}
