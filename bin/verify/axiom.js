'use strict';

const Error = require('../error'),
      Axiom = require('../axiom'),
      queries = require('../miscellaneous/queries'),
      verifyStatement = require('../verify/statement');

const { labelNameNodesQuery, statementNodeQuery, parenthesisedLabelsNodeQuery } = queries;

function verifyAxiom(axiomNode, context, rules) {
  const statementNode = statementNodeQuery(axiomNode),
        verified = verifyStatement(statementNode, context, rules);

  if (verified) {
    const parenthesisedLabelsNode = parenthesisedLabelsNodeQuery(axiomNode),
          labelNameNodes = labelNameNodesQuery(parenthesisedLabelsNode),
          labels = labelNameNodes.map((labelNameNode) => {
            const labelNameNodeContent = labelNameNode.getContent(),
                  label = labelNameNodeContent; ///

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

    const axiom = Axiom.fromStatementNodeAndLabels(statementNode, labels);

    context.addAxiom(axiom);
  }
}

module.exports = verifyAxiom;
