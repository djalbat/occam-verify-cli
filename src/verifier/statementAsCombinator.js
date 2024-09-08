"use strict";

import Verifier from "../verifier";
import verifyType from "../verify/type";
import verifyTerm from "../verify/term";
import verifyStatement from "../verify/statement";

import { nodeQuery } from "../utilities/query";

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
        const terms = [],
              termVerified = verifyTerm(termNode, terms, localContext, verifyAhead);

        return termVerified;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      verify: (typeNode, localContext, verifyAhead) => {
        const typeVerified = verifyType(typeNode, localContext, verifyAhead);

        return typeVerified;
      }
    },
    {
      nodeQuery: statementNodeQuery,
      verify: (statementNode, localContext, verifyAhead) => {
        let statementVerified;

        const derived = false,
              assignments = [];

        statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

        if (statementVerified) {
          const verifiedAhead = verifyAhead();

          statementVerified = verifiedAhead;  ///
        }

        return statementVerified;
      }
    }
  ];
}

const statementAsCombinatorVerifier = new StatementAsCombinatorVerifier();

export default statementAsCombinatorVerifier;
