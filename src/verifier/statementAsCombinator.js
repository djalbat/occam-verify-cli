"use strict";

import Verifier from "../verifier";

import { nodeQuery } from "../utilities/query";
import { verifyStandaloneType } from "../verify/type";
import { verifyStandaloneTerm } from "../verify/term";
import { verifyStandaloneStatement } from "../verify/statement";

const termNodeQuery = nodeQuery("/term!"),
      typeNodeQuery = nodeQuery("/type!"),
      statementNodeQuery = nodeQuery("/statement!");

class StatementAsCombinatorVerifier extends Verifier {
  verify(statementNode, fileContext) {
    let statementVerifiedAsCombinator;

    const nonTerminalNode = statementNode, ///
          childNodes = nonTerminalNode.getChildNodes(),
          childNodesVerified = this.verifyChildNodes(childNodes, fileContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    statementVerifiedAsCombinator = childNodesVerified;  ///

    return statementVerifiedAsCombinator;
  }

  static maps = [
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, localContext, verifyAhead) => {
        const standaloneTermVerified = verifyStandaloneTerm(termNode, localContext, verifyAhead),
              termVerified = standaloneTermVerified;  ///

        return termVerified;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      verify: (typeNode, localContext, verifyAhead) => {
        const standaloneTypeVerified = verifyStandaloneType(typeNode, localContext, verifyAhead),
              typeVerified = standaloneTypeVerified;  ///

        return typeVerified;
      }
    },
    {
      nodeQuery: statementNodeQuery,
      verify: (statementNode, localContext, verifyAhead) => {
        const standaloneStatementVerified = verifyStandaloneStatement(statementNode, localContext, verifyAhead),
              statementVerified = standaloneStatementVerified;  ///

        return statementVerified;
      }
    }
  ];
}

const statementAsCombinatorVerifier = new StatementAsCombinatorVerifier();

export default statementAsCombinatorVerifier;
