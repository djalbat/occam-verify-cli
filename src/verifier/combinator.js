"use strict";

import dom from "../dom";
import Verifier from "../verifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type"),
      statementNodeQuery = nodeQuery("/statement");

class CombinatorVerifier extends Verifier {
  verifyStatement(statementNode, context) {
    let statementVerifiesAsCombinator;

    const nonTerminalNode = statementNode, ///
          childNodes = nonTerminalNode.getChildNodes(),
          childNodesVerify = this.verifyChildNodes(childNodes, context);

    statementVerifiesAsCombinator = childNodesVerify;  ///

    return statementVerifiesAsCombinator;
  }

  static maps = [
    {
      nodeQuery: statementNodeQuery,
      verify: (statementNode, context) => {
        const { Statement } = dom,
              statement = Statement.fromStatementNode(statementNode, context),
              assignments = null,
              stated = false,
              statementVerifies = statement.verify(assignments, stated, context);

        return statementVerifies;
      }
    },
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, context) => {
        const { Term } = dom,
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
      verify: (typeNode, context) => {
        let typeVerifies = false;

        const typeName = typeNode.getTypeName(),
              typePresent = context.isTypePresentByTypeName(typeName);

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
