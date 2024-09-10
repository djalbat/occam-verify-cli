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
          childNodesVerified = this.verifyChildNodes(childNodes, fileContext);

    statementVerifiedAsCombinator = childNodesVerified;  ///

    return statementVerifiedAsCombinator;
  }

  static maps = [
    {
      nodeQuery: statementNodeQuery,
      verify: (statementNode, localContext) => {
        const derived = false,
              assignments = [],
              statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

        return statementVerified;
      }
    },
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, localContext) => {
        const terms = [],
              termVerified = verifyTerm(termNode, terms, localContext);

        return termVerified;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      verify: (typeNode, localContext) => {
        const typeVerified = verifyType(typeNode, localContext);

        return typeVerified;
      }
    }
  ];
}

const statementAsCombinatorVerifier = new StatementAsCombinatorVerifier();

export default statementAsCombinatorVerifier;
