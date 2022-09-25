"use strict";

const verifyConditionalAxiom = require("../verify/conditionalAxiom"),
      verifyUnconditionalAxiom = require("../verify/unconditionalAxiom");

function verifyAxiom(axiomNode, context) {
  let axiomVerified = false;

  const unconditionalAxiomVerified = verifyUnconditionalAxiom(axiomNode, context);

  if (unconditionalAxiomVerified) {
    axiomVerified = true;
  } else {
    const conditionalAxiomVerified = verifyConditionalAxiom(axiomNode, context);

    if (conditionalAxiomVerified) {
      axiomVerified = true;
    }
  }

  return axiomVerified;
}

module.exports = verifyAxiom;
