"use strict";

import shim from "../shim";
import Verifier from "../verifier";
import verifyType from "../verify/type";

import { nodeQuery } from "../utilities/query";
import LocalContext from "../context/local";

const termNodeQuery = nodeQuery("/term!"),
      typeNodeQuery = nodeQuery("/type!"),
      statementNodeQuery = nodeQuery("/statement!");

class StatementAsCombinatorVerifier extends Verifier {
  verifyStatement(statementNode, fileContext) {
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
      verify: (statementNode, fileContext) => {
        const { verifyStatement } = shim,
              derived = false,
              assignments = [],
              localContext = LocalContext.fromFileContext(fileContext),
              statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

        return statementVerified;
      }
    },
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, fileContext) => {
        const { verifyTerm } = shim,
              terms = [],
              localContext = LocalContext.fromFileContext(fileContext),
              termVerified = verifyTerm(termNode, terms, localContext, () => {
                const verifiedAhead = true;

                return verifiedAhead;
              });

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
