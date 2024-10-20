"use strict";

import shim from "../shim";
import Verifier from "../verifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      statementNodeQuery = nodeQuery("/statement");

class MetaLevelVerifier extends Verifier {
  verify(node, assignments, stated, localContext) {
    let verifiedAtMetaLevel;

    const nonTerminalNode = node, ///
          childNodes = nonTerminalNode.getChildNodes(),
          nonTerminalNodeVerified = this.verifyChildNodes(childNodes, assignments, stated, localContext);

    verifiedAtMetaLevel = nonTerminalNodeVerified;  ///

    return verifiedAtMetaLevel;
  }

  static maps = [
    {
      nodeQuery: statementNodeQuery,
      verify: (statementNode, assignments, stated, localContext) => {
        const { Statement } = shim,
              statement = Statement.fromStatementNode(statementNode, localContext),
              statementVerified = statement.verify(assignments, stated, localContext);

        return statementVerified;
      }
    },
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, assignments, stated, localContext) => {
        const { Term } = shim,
              term = Term.fromTermNode(termNode, localContext),
              termVerified = term.verify(localContext, () => {
                const verifiedAhead = true;

                return verifiedAhead;
              });

        return termVerified;
      }
    }
  ];
}

const metaLevelVerifier = new MetaLevelVerifier();

export default metaLevelVerifier;
