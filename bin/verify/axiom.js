"use strict";

const dom = require("occam-dom"),
      necessary = require("necessary");

const log = require("../log"),
      Axiom = require("../axiom"),
      nodeUtilities = require("../utilities/node"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement"),
      verifyIndicativeConditional = require("../verify/indicativeConditional");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { nameFromNameNode } = nodeUtilities;

const labelNameNodesQuery = Query.fromExpression("/axiom/labels/label//@name"),
      unqualifiedStatementNodesQuery = Query.fromExpression("/axiom/unqualifiedStatement"),
      indicativeConditionalNodesQuery = Query.fromExpression("/axiom/indicativeConditional");

function verifyAxiom(axiomNode, fileContext) {
  let axiomVerified = false;

  const labelNameNodes = labelNameNodesQuery.execute(axiomNode),
        labelNames = labelNameNodes.map((labelNameNode) => nameFromNameNode(labelNameNode)),
        labels = labelNames,  ///
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

    const unqualifiedStatementNodes = unqualifiedStatementNodesQuery.execute(axiomNode),
          indicativeConditionalNodes = indicativeConditionalNodesQuery.execute(axiomNode),
          firstUnqualifiedStatementNode = first(unqualifiedStatementNodes),
          firstIndicativeConditionalNode = first(indicativeConditionalNodes),
          unqualifiedStatementNode = firstUnqualifiedStatementNode, ///
          indicativeConditionalNode = firstIndicativeConditionalNode; ///

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
