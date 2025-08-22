"use strict";

import dom from "../dom";
import Verifier from "../verifier";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type"),
      statementNodeQuery = nodeQuery("/statement");

class CombinatorVerifier extends Verifier {
  verifyStatement(statementNode, fileContext) {
    let statementVerifiesAsCombinator;

    const nonTerminalNode = statementNode, ///
          childNodes = nonTerminalNode.getChildNodes(),
          childNodesVerify = this.verifyChildNodes(childNodes, fileContext);

    statementVerifiesAsCombinator = childNodesVerify;  ///

    return statementVerifiesAsCombinator;
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
              statementVerifies = statement.verify(assignments, stated, context);

        return statementVerifies;
      }
    },
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, fileContext) => {
        const { Term } = dom,
              localContext = LocalContext.fromFileContext(fileContext),
              context = localContext, ///
              term = Term.fromTermNode(termNode, context),
              termVerifies = term.verify(context, () => {
                const verifiesAhead = true;

                return verifiesAhead;
              });

        return termVerifies;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      verify: (typeNode, fileContext) => {
        let typeVerifies = false;

        const typeName = typeNode.getTypeName(),
              typePresent = fileContext.isTypePresentByTypeName(typeName);

        if (typePresent) {
          typeVerifies = true;
        }

        return typeVerifies;
      }
    }
  ];
}

const combinatorVerifier = new CombinatorVerifier();

export default combinatorVerifier;
