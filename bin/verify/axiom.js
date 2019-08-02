'use strict';

const Error = require('../error'),
      Axiom = require('../axiom'),
      queries = require('../miscellaneous/queries'),
      verifyUnqualifiedStatement = require('../verify/unqualifiedStatement'),
      verifyIndicativeConditional = require('../verify/indicativeConditional');

const { labelNameTerminalNodesQuery,
        parenthesisedLabelsNodeQuery,
        unqualifiedStatementNodeQuery,
        indicativeConditionalNodeQuery } = queries;

function verifyAxiom(axiomNode, context, rules) {
  let verified = false;

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(axiomNode),
        indicativeConditionalNode = indicativeConditionalNodeQuery(axiomNode);

  if (unqualifiedStatementNode !== undefined) {
    verified = verifyUnqualifiedStatement(unqualifiedStatementNode, context, rules);
  }

  if (indicativeConditionalNode !== undefined) {
    verified = verifyIndicativeConditional(indicativeConditionalNode, context, rules);
  }

  if (verified) {
    const parenthesisedLabelsNode = parenthesisedLabelsNodeQuery(axiomNode),
          labelNameTerminalNodes = labelNameTerminalNodesQuery(parenthesisedLabelsNode),
          labels = labelNameTerminalNodes.map((labelNameTerminalNode) => {
            const labelNameTerminalNodeContent = labelNameTerminalNode.getContent(),
                  label = labelNameTerminalNodeContent; ///

            return label;
          });

    labels.forEach((label) => {
      const labelPresent = context.isLabelPresent(label);

      if (labelPresent) {
        const node = axiomNode, ///
              message = `The label ${label} is already present`;

        throw new Error(node, message);
      }
    });

    let axiom;

    if (unqualifiedStatementNode !== undefined) {
      axiom = Axiom.fromUnqualifiedStatementNodeAndLabels(unqualifiedStatementNode, labels);
    }

    if (indicativeConditionalNode !== undefined) {
      axiom = Axiom.fromIndicativeConditionalNodeAndLabels(indicativeConditionalNode, labels);
    }

    context.addAxiom(axiom);
  }
}

module.exports = verifyAxiom;
