"use strict";

const { loggingUtilities } = require("necessary");

const Axiom = require("../axiom"),
      verifyLabels = require("../verify/labels"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement");

const AntecedentContext = require("../context/antecedent"),
      ConsequentContext = require("../context/consequent"),
      verifyQualifiedStatement = require("../verify/qualifiedStatement");

const { nodeAsString } = require("../utilities/string"),
      { nodeQuery, nodesQuery } = require("../utilities/query");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/axiom/label"),
      statementNodeQuery = nodeQuery("/*/statement"),
      qualifiedStatementNodeQuery = nodeQuery("/indicativeConditional/qualifiedStatement!"),
      indicativeConditionalNodeQuery = nodeQuery("/axiom/indicativeConditional!"),
      unqualifiedStatementNodesQuery = nodesQuery("/indicativeConditional/unqualifiedStatement");

function verifyConditionalAxiom(axiomNode, context) {
  let conditionalAxiomVerified = false;

  const labels = [],
        labelNodes = labelNodesQuery(axiomNode),
        labelsVerified = verifyLabels(labelNodes, labels, context);

  if (labelsVerified) {
    const indicativeConditionalNode = indicativeConditionalNodeQuery(axiomNode);

    if (indicativeConditionalNode !== null) {
      const antecedentContext = AntecedentContext.fromContext(context);

      context = antecedentContext; ///

      const unqualifiedStatementNodes = unqualifiedStatementNodesQuery(indicativeConditionalNode),
            unqualifiedStatementsVerified = unqualifiedStatementNodes.every((unqualifiedStatementNode) => {
              const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, context);

              if (unqualifiedStatementVerified) {
                return true;
              }
            });

      if (unqualifiedStatementsVerified) {
        const consequentContext = ConsequentContext.fromContext(context);

        context = consequentContext;  ///

        const qualifiedStatementNode = qualifiedStatementNodeQuery(indicativeConditionalNode),
              qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, context);

        if (qualifiedStatementVerified) {
          const antecedentStatementNodes = unqualifiedStatementNodes.map((unqualifiedStatementNode) => {
                  const statementNode = statementNodeQuery(unqualifiedStatementNode),
                        antecedentStatementNode = statementNode;  ///

                  return antecedentStatementNode;
                }),
                consequentStatementNode = statementNodeQuery(qualifiedStatementNode), ///
                axiom = Axiom.fromAntecedentStatementNodesConsequentStatementNodeAndLabels(antecedentStatementNodes, consequentStatementNode, labels);

          const labelsString = labels.join(",")

          context.addAxiom(axiom);

          conditionalAxiomVerified = true;

          log.info(`Verified the '${labelsString}' axiom.`);
        }
      }
    }
  }

  return conditionalAxiomVerified;
}

module.exports = verifyConditionalAxiom;
