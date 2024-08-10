"use strict";

import NodeVerifier from "../../verifier/node";

import { verifyStandaloneType } from "./../../verify/type";
import { verifyStandaloneTerm } from "./../../verify/term";
import { verifyStandaloneStatement } from "../../verify/statement";
import { TYPE_RULE_NAME, TERM_RULE_NAME, STATEMENT_RULE_NAME } from "../../ruleNames";

class StatementAsCombinatorNodeVerifier extends NodeVerifier {
  verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const ruleName = nonTerminalNode.getRuleName();

    switch (ruleName) {
      case STATEMENT_RULE_NAME: {
        const statementNode = nonTerminalNode, ///
              standaloneStatementVerified = verifyStandaloneStatement(statementNode, localContext, verifyAhead),
              statementNodeVerified = standaloneStatementVerified; ///

        nonTerminalNodeVerified = statementNodeVerified; ///

        break;
      }

      case TERM_RULE_NAME: {
        const termNode = nonTerminalNode, ///
              standaloneTermVerified = verifyStandaloneTerm(termNode, localContext, verifyAhead),
              termNodeVerified = standaloneTermVerified;  ///

        nonTerminalNodeVerified = termNodeVerified; ///

        break;
      }

      case TYPE_RULE_NAME: {
        const typeNode = nonTerminalNode, ///
              standaloneTypeVerified = verifyStandaloneType(typeNode, localContext, verifyAhead),
              typeNodeVerified = standaloneTypeVerified;  ///

        nonTerminalNodeVerified = typeNodeVerified; ///

        break;
      }

      default: {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead); ///

        break;
      }
    }

    return nonTerminalNodeVerified;
  }
}

const statementAsCombinatorNodeVerifier = new StatementAsCombinatorNodeVerifier();

export default statementAsCombinatorNodeVerifier;
