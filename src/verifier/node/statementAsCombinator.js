"use strict";

import NodeVerifier from "../../verifier/node";

import { verifyStandaloneType } from "./../../verify/type";
import { verifyStandaloneTerm } from "./../../verify/term";
import { verifyStandaloneStatement } from "../../verify/statement";
import { TYPE_RULE_NAME, TERM_RULE_NAME, STATEMENT_RULE_NAME } from "../../ruleNames";

class StatementAsCombinatorNodeVerifier extends NodeVerifier {
  verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const ruleName = nonTerminalNode.getRuleName();

    switch (ruleName) {
      case STATEMENT_RULE_NAME: {
        const context = fileContext,  ///
              statementNode = nonTerminalNode, ///
              standaloneStatementVerified = verifyStandaloneStatement(statementNode, context, verifyAhead),
              statementNodeVerified = standaloneStatementVerified; ///

        nonTerminalNodeVerified = statementNodeVerified; ///

        break;
      }

      case TERM_RULE_NAME: {
        const context = fileContext,  ///
              termNode = nonTerminalNode, ///
              standaloneTermVerified = verifyStandaloneTerm(termNode, context, verifyAhead),
              termNodeVerified = standaloneTermVerified;  ///

        nonTerminalNodeVerified = termNodeVerified; ///

        break;
      }

      case TYPE_RULE_NAME: {
        const context = fileContext,  ///
              typeNode = nonTerminalNode, ///
              standaloneTypeVerified = verifyStandaloneType(typeNode, context, verifyAhead),
              typeNodeVerified = standaloneTypeVerified;  ///

        nonTerminalNodeVerified = typeNodeVerified; ///

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
