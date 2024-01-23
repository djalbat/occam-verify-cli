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
      case TYPE_RULE_NAME: {
        const typeNode = nonTerminalNode, ///
              standaloneTypeVerified = verifyStandaloneType(typeNode, fileContext, verifyAhead),
              typeNodeVerified = standaloneTypeVerified;  ///

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

