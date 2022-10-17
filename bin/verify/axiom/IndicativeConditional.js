"use strict";

const Axiom = require("../../axiom"),
      verifyLabels = require("../../verify/labels"),
      verifySupposition = require("../../verify/antecedent"),
      verifyConsequent = require("../../verify/consequent");

const { first } = require("../../utilities/array"),
      { nodeQuery, nodesQuery } = require("../../utilities/query");

const labelNodesQuery = nodesQuery("/axiom/label"),
      antecedentNodeQuery = nodeQuery("/indicativeConditional/antecedent!"),
      consequentNodeQuery = nodeQuery("/indicativeConditional/consequent!"),
      indicativeConditionalNodeQuery = nodeQuery("/axiom/indicativeConditional!");

function verifyIndicativeConditionalAxiom(axiomNode, context) {
  let indicativeConditionalAxiomVerified = false;

  const indicativeConditionalNode = indicativeConditionalNodeQuery(axiomNode);

  if (indicativeConditionalNode !== null) {
    const labels = [],
          labelNodes = labelNodesQuery(axiomNode),
          labelsVerified = verifyLabels(labelNodes, labels, context);

    if (labelsVerified) {
      const antecedents = [],
            antecedentNode = antecedentNodeQuery(indicativeConditionalNode),
            antecedentVerified = verifySupposition(antecedentNode, antecedents, context);

      if (antecedentVerified) {
        const consequents = [],
              consequentNode = consequentNodeQuery(indicativeConditionalNode),
              consequentVerified = verifyConsequent(consequentNode, consequents, context);

        if (consequentVerified) {
          const firstSupposition = first(antecedents),
                firstConsequent = first(consequents),
                antecedent = firstSupposition, ///
                consequent = firstConsequent, ///
                axiom = Axiom.fromSuppositionConsequentAndLabels(antecedent, consequent, labels);

          context.addAxiom(axiom);

          indicativeConditionalAxiomVerified = true;
        }
      }
    }
  }

  return indicativeConditionalAxiomVerified;
}

module.exports = verifyIndicativeConditionalAxiom;
