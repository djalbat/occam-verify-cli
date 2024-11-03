"use strict";

import dom from "../dom";
import Verifier from "../verifier";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";
import { typeNameFromTypeNode } from "../utilities/name";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type"),
      statementNodeQuery = nodeQuery("/statement");

class CombinatorVerifier extends Verifier {
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
        const { Statement } = dom,
              localContext = LocalContext.fromFileContext(fileContext),
              context = localContext, ///
              statement = Statement.fromStatementNode(statementNode, context),
              assignments = null,
              stated = false,
              statementVerified = statement.verify(assignments, stated, context);

        return statementVerified;
      }
    },
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, fileContext) => {
        const { Term } = dom,
              localContext = LocalContext.fromFileContext(fileContext),
              context = localContext, ///
              term = Term.fromTermNode(termNode, context),
              termVerified = term.verify(context, () => {
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

const combinatorVerifier = new CombinatorVerifier();

export default combinatorVerifier;
