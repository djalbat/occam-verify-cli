"use strict";

import shim from "../shim";
import Verifier from "../verifier";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";
import { typeNameFromTypeNode } from "../utilities/name";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type");

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
      nodeQuery: termNodeQuery,
      verify: (termNode, fileContext) => {
        const { Term } = shim,
              localContext = LocalContext.fromFileContext(fileContext),
              term = Term.fromTermNode(termNode, localContext),
              termVerified = term.verify(localContext, () => {
                const verifiedAhead = true;

                return verifiedAhead;
              });

        return termVerified;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      verify: (typeNode, fileContext) => {
        let typeVerified = false;

        const typeName = typeNameFromTypeNode(typeNode),
              typePresent = fileContext.isTypePresentByTypeName(typeName);

        if (typePresent) {
          typeVerified = true;
        }

        return typeVerified;
      }
    }
  ];
}

const statementAsCombinatorVerifier = new StatementAsCombinatorVerifier();

export default statementAsCombinatorVerifier;
