"use strict";

const Axiom = require("../../axiom"),
      verifyLabels = require("../../verify/labels"),
      verifyConsequent = require("../../verify/consequent"),
      verifySupposition = require("../../verify/supposition");

const { first } = require("../../utilities/array"),
      { nodeQuery, nodesQuery } = require("../../utilities/query");

const labelNodesQuery = nodesQuery("/axiom/label"),
      consequentNodeQuery = nodeQuery("/indicativeConditional/consequent!"),
      suppositionNodeQuery = nodeQuery("/indicativeConditional/supposition!"),
      indicativeConditionalNodeQuery = nodeQuery("/axiom/indicativeConditional!");

function verifyIndicativeConditionalAxiom(axiomNode, context) {
  let indicativeConditionalAxiomVerified = false;

  const indicativeConditionalNode = indicativeConditionalNodeQuery(axiomNode);

  if (indicativeConditionalNode !== null) {
    const labels = [],
          labelNodes = labelNodesQuery(axiomNode),
          labelsVerified = verifyLabels(labelNodes, labels, context);

    if (labelsVerified) {
      const suppositions = [],
            suppositionNode = suppositionNodeQuery(indicativeConditionalNode),
            suppositionVerified = verifySupposition(suppositionNode, suppositions, context);

      if (suppositionVerified) {
        const consequents = [],
              consequentNode = consequentNodeQuery(indicativeConditionalNode),
              consequentVerified = verifyConsequent(consequentNode, consequents, context);

        if (consequentVerified) {
          const firstSupposition = first(suppositions),
                firstConsequent = first(consequents),
                supposition = firstSupposition, ///
                consequent = firstConsequent, ///
                axiom = Axiom.fromSuppositionConsequentAndLabels(supposition, consequent, labels);

          context.addAxiom(axiom);

          indicativeConditionalAxiomVerified = true;
        }
      }
    }
  }

  return indicativeConditionalAxiomVerified;
}

module.exports = verifyIndicativeConditionalAxiom;
