"use strict";

const log = require("../log"),
      Axiom = require("../axiom"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement"),
      verifyIndicativeConditional = require("../verify/indicativeConditional");

const { nameFromNameNameNode } = require("../utilities/node"),
      { nodeQuery, nodesQuery } = require("../utilities/query");

const labelsLabelNodesQuery = nodesQuery("/*/labels/label"),
      labelNameNameNodeQuery = nodeQuery("/*/labelName!/@name!"),
      unqualifiedStatementNodeQuery = nodeQuery("/*/unqualifiedStatement!"),
      indicativeConditionalNodeQuery = nodeQuery("/*/indicativeConditional!");

function verifyAxiom(axiomNode, fileContext) {
  let axiomVerified = false;

  const labelsLabelNodes = labelsLabelNodesQuery(axiomNode),
        labels = labelsLabelNodes.map((labelsLabelNode) => {
          const labelNode = labelsLabelNode, ///
                labelNameNameNode = labelNameNameNodeQuery(labelNode),
                labelName = nameFromNameNameNode(labelNameNameNode),
                label = labelName;  ///

          return label;
        }),
        labelsVerified = labels.every((label) => {
          let labelVerified = false;

          const labelPresent = fileContext.isLabelPresent(label);

          if (labelPresent) {
            log.error(`The label ${label} is already present`);
          } else {
            labelVerified = true;
          }

          return labelVerified;
        });

  if (labelsVerified) {
    let axiom = undefined;

    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(axiomNode),
          indicativeConditionalNode = indicativeConditionalNodeQuery(axiomNode);

    if (false) {
      ///
    } else if (unqualifiedStatementNode !== undefined) {
      const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, fileContext);

      if (unqualifiedStatementVerified) {
        axiom = Axiom.fromUnqualifiedStatementNodeAndLabels(unqualifiedStatementNode, labels);
      }
    } else if (indicativeConditionalNode !== undefined) {
      const indicativeConditionalVerified = verifyIndicativeConditional(indicativeConditionalNode, fileContext);

      if (indicativeConditionalVerified) {
        axiom = Axiom.fromIndicativeConditionalNodeAndLabels(indicativeConditionalNode, labels);
      }
    }

    if (axiom !== undefined) {
      const labelsString = labels.join(",")

      fileContext.addAxiom(axiom);

      axiomVerified = true;

      log.info(`Verified the '${labelsString}' axiom.`);
    }
  }

  return axiomVerified;
}

module.exports = verifyAxiom;
