"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { domAssigned } from "../dom";

const { first } = arrayUtilities;

export default domAssigned(class Section {
  constructor(fileContext, string, hypotheses) {
    this.fileContext = fileContext;
    this.string = string;
    this.hypotheses = hypotheses;
  }

  getFileContext() {
    return this.fileContext;
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

  static fromSectionNode(sectionNode, fileContext) {
    const hypothesisNodes = sectionNode.getHypothesisNodes(),
          hypotheses = hypothesesFromHypothesisNodes(hypothesisNodes, fileContext),
          string = stringFromHypotheses(hypotheses, fileContext),
          section = new Section(fileContext, string, hypotheses);

    return section;
  }
});

function hypothesesFromHypothesisNodes(hypothesisNodes, fileContext) {
  const hypotheses = hypothesisNodes.map((hypothesisNode) => {
    const { Hypothesis } = dom,
          hypothesis = Hypothesis.fromHypothesisNode(hypothesisNode, fileContext);

    return hypothesis;
  });

  return hypotheses;
}

function stringFromHypotheses(hypotheses, fileContext) {
  const firstHypothesis = first(hypotheses),
        hypothesis = firstHypothesis,
        hypothesisString = hypothesis.getString(),
        string = `'${hypothesisString}'...`;

  return string;
}
