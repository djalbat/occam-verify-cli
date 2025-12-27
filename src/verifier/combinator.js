"use strict";

import structure from "../structure";
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
        const { Statement } = structure,
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
        const { Term } = structure,
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

        const nominalTypeName = typeNode.getNominalTypeName(),
              typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);

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
