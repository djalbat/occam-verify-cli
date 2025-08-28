"use strict";

export function subproofStringFromSubproofNode(subproofNode, context) {
  const suppositionStatementsOrNonsenseString = suppositionStatementOrNonsenseStringFromSubproofNode(subproofNode, context),
        lastStatementOrNonsenseString = lastStatementOrNonsenseStringFromSubproofNode(subproofNode, context),
        subproofString = `[${suppositionStatementsOrNonsenseString}] ... ${lastStatementOrNonsenseString}`;

  return subproofString;
}

function suppositionStatementOrNonsenseStringFromSubproofNode(subproofNode, context) {
  const suppositionNodes = subproofNode.getSuppositionNodes(),
        suppositionStatementsOrNonsenseString = suppositionNodes.reduce((suppositionStatementsOrNonsenseString, suppositionNode) => {
          const suppositionOrStepNode = suppositionNode,  ///
                statementOrNonsenseString = statementOrNonsenseStringFromSuppositionOrStepNode(suppositionOrStepNode, context),
                suppositionStatementOrNonsenseString = statementOrNonsenseString; ///

          suppositionStatementsOrNonsenseString = (suppositionStatementsOrNonsenseString !== null) ?
                                                    `${suppositionStatementsOrNonsenseString}, ${suppositionStatementOrNonsenseString}` :
                                                      suppositionStatementOrNonsenseString; ///

          return suppositionStatementsOrNonsenseString;
        }, null);

  return suppositionStatementsOrNonsenseString;
}

function lastStatementOrNonsenseStringFromSubproofNode(subproofNode, context) {
  const lastStepNode = subproofNode.getLastStepNode(),
        suppositionOrStepNode = lastStepNode, ///
        statementOrNonsenseString = statementOrNonsenseStringFromSuppositionOrStepNode(suppositionOrStepNode, context),
        lastStatementOrNonsenseString = statementOrNonsenseString; ///

  return lastStatementOrNonsenseString;
}

function statementOrNonsenseStringFromSuppositionOrStepNode(suppositionOrStepNode, context) {
  let statementOrNonsenseString;

  const nonsenseNode = suppositionOrStepNode.getNonsenseNode(),
        statementNode = suppositionOrStepNode.getStatementNode();

  if (false) {
    ///
  } else if (nonsenseNode !== null) {
    const nonsenseString = context.nodeAsString(nonsenseNode);

    statementOrNonsenseString = nonsenseString; ///
  } else if (statementNode !== null) {
    const statementString = context.nodeAsString(statementNode);

    statementOrNonsenseString = statementString;  ///
  }

  return statementOrNonsenseString;
}