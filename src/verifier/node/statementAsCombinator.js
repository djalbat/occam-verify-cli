"use strict";

import NodeVerifier from "../../verifier/node";
import verifyStatement from "../../verify/statement";

import { verifyStandaloneTerm, verifyType } from "./../../verifier/node/termAsConstructor";
import { TYPE_RULE_NAME, TERM_RULE_NAME, STATEMENT_RULE_NAME } from "../../ruleNames";

class StatementAsCombinatorNodeVerifier extends NodeVerifier {
  verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const ruleName = nonTerminalNode.getRuleName();

    switch (ruleName) {
      case TYPE_RULE_NAME: {
        const typeNode = nonTerminalNode, ///
              typeVerified = verifyType(typeNode, fileContext, verifyAhead),
              typeNodeVerified = typeVerified;  ///

        nonTerminalNodeVerified = typeNodeVerified; ///

        break;
      }

      case TERM_RULE_NAME: {
        const termNode = nonTerminalNode, ///
              standaloneTermVerified = verifyStandaloneTerm(termNode, fileContext, verifyAhead),
              termNodeVerified = standaloneTermVerified;  ///

        nonTerminalNodeVerified = termNodeVerified; ///

        break;
      }

      case STATEMENT_RULE_NAME: {
        const statementNode = nonTerminalNode, ///
              standaloneStatementVerified = verifyStandaloneStatement(statementNode, fileContext, verifyAhead),
              statementNodeVerified = standaloneStatementVerified; ///

        nonTerminalNodeVerified = statementNodeVerified; ///

        break;
      }

      default: {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead); ///

        break;
      }
    }

    return nonTerminalNodeVerified;
  }
}

const statementAsCombinatorNodeVerifier = new StatementAsCombinatorNodeVerifier();

export default statementAsCombinatorNodeVerifier;

function verifyStandaloneStatement(statementNode, fileContext, verifyAhead) {
  let standaloneStatementVerified;

  const statementString = fileContext.nodeAsString(statementNode);

  fileContext.trace(`Verifying the '${statementString}' standalone statement...`, statementNode);

  const context = fileContext,  ///
        derived = false,
        assignments = [],
        statementVerified = verifyStatement(statementNode, assignments, derived, context, verifyAhead);

  standaloneStatementVerified = statementVerified;  ///

  if (standaloneStatementVerified) {
    fileContext.debug(`...verified the '${statementString}' standalone statement.`, statementNode);
  }

  return standaloneStatementVerified;
}
