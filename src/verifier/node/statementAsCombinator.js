"use strict";

import NodeVerifier from "../../verifier/node";

import { nodeQuery } from "../../utilities/query";
import { verifyNode } from "../../utilities/verifier";
import { verifyStandaloneType } from "./../../verify/type";
import { verifyStandaloneTerm } from "./../../verify/term";
import { verifyStandaloneStatement } from "../../verify/statement";

const termNodeQuery = nodeQuery("/term!"),
      typeNodeQuery = nodeQuery("/type!"),
      statementNodeQuery = nodeQuery("/statement!");

class StatementAsCombinatorNodeVerifier extends NodeVerifier {
  verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQuery: termNodeQuery,
        verifyNode: this.verifyTermNode
      },
      {
        nodeQuery: typeNodeQuery,
        verifyNode: this.verifyTypeNode
      },
      {
        nodeQuery: statementNodeQuery,
        verifyNode: this.verifyStatementNode
      }
    ];

    const nodeVerified = verifyNode(nodeQueryMaps, nonTerminalNode, localContext, verifyAhead);

    nonTerminalNodeVerified = nodeVerified ?
                                true :
                                  super.verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead);

    return nonTerminalNodeVerified;
  }

  verifyStatementNode(statementNode, localContext, verifyAhead) {
    const standaloneStatementVerified = verifyStandaloneStatement(statementNode, localContext, verifyAhead),
          statementNodeVerified = standaloneStatementVerified; ///

    return statementNodeVerified;
  }

  verifyTermNode(termNode, localContext, verifyAhead) {
    const standaloneTermVerified = verifyStandaloneTerm(termNode, localContext, verifyAhead),
      termNodeVerified = standaloneTermVerified;  ///

    return termNodeVerified;
  }

  verifyTypeNode(typeNode, localContext, verifyAhead) {
    const standaloneTypeVerified = verifyStandaloneType(typeNode, localContext, verifyAhead),
      typeNodeVerified = standaloneTypeVerified;  ///

    return typeNodeVerified;
  }
}

const statementAsCombinatorNodeVerifier = new StatementAsCombinatorNodeVerifier();

export default statementAsCombinatorNodeVerifier;
