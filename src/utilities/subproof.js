"use strict";

export function subproofStringFromSubproofNode(subproofNode, fileContext) {
  const suppositionStatementsOrNonsenseString = suppositionStatementOrNonsenseStringFromSubproofNode(subproofNode, fileContext),
        lastStatementOrNonsenseString = lastStatementOrNonsenseStringFromSubproofNode(subproofNode, fileContext),
        subproofString = `[${suppositionStatementsOrNonsenseString}]...${lastStatementOrNonsenseString}`;

  return subproofString;
}

function suppositionStatementOrNonsenseStringFromSubproofNode(subproofNode, fileContext) {
  const suppositionNodes = subproofNode.getSuppositionNodes(),
        suppositionStatementsOrNonsenseString = suppositionNodes.reduce((suppositionStatementsOrNonsenseString, suppositionNode) => {
          const suppositionOrStepNode = suppositionNode,  ///
                statementOrNonsenseString = statementOrNonsenseStringFromSuppositionOrStepNode(suppositionOrStepNode, fileContext),
                suppositionStatementOrNonsenseString = statementOrNonsenseString; ///

          suppositionStatementsOrNonsenseString = (suppositionStatementsOrNonsenseString !== null) ?
                                                    `${suppositionStatementsOrNonsenseString}, ${suppositionStatementOrNonsenseString}` :
                                                      suppositionStatementOrNonsenseString; ///

          return suppositionStatementsOrNonsenseString;
        }, null);

  return suppositionStatementsOrNonsenseString;
}

function lastStatementOrNonsenseStringFromSubproofNode(subproofNode, fileContext) {
  const lastStepNode = subproofNode.getLastStepNode(),
        suppositionOrStepNode = lastStepNode, ///
        statementOrNonsenseString = statementOrNonsenseStringFromSuppositionOrStepNode(suppositionOrStepNode, fileContext),
        lastStatementOrNonsenseString = statementOrNonsenseString; ///

  return lastStatementOrNonsenseString;
}

function statementOrNonsenseStringFromSuppositionOrStepNode(suppositionOrStepNode, fileContext) {
  let statementOrNonsenseString;

  const nonsenseNode = suppositionOrStepNode.getNonsenseNode(),
        statementNode = suppositionOrStepNode.getStatementNode();

  if (false) {
    ///
  } else if (nonsenseNode !== null) {
    const nonsenseString = fileContext.nodeAsString(nonsenseNode);

    statementOrNonsenseString = nonsenseString; ///
  } else if (statementNode !== null) {
    const statementString = fileContext.nodeAsString(statementNode);

    statementOrNonsenseString = statementString;  ///
  }

  return statementOrNonsenseString;
}