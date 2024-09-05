"use strict";

import NodesVerifier from "../../verifier/nodes";
import verifyArgumentAgainstArgument from "../../verify/argumentAgainstArgument";
import verifyStatementAgainstMetaType from "../../verify/statementAgainstMetaType";

import { nodeQuery } from "../../utilities/query";
import { verifyNodes } from "../../utilities/verifier";

const argumentNodeQuery = nodeQuery("/argument!"),
      nonTerminalNodeQuery = nodeQuery("/*"),
      metaArgumentMetaTypeNodeQuery = nodeQuery("/metaArgument/metaType!"),
      metaArgumentStatementNodeQuery = nodeQuery("/metaArgument/statement!");

class StatementAgainstCombinatorNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQueryA: metaArgumentStatementNodeQuery,
        nodeQueryB: metaArgumentMetaTypeNodeQuery,
        verifyNodes: (nodeA, nodeB, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const metaArgumentMetaTypeNodeB = nodeB,  ///
                metaArgumentStatementNodeA = nodeA, ///
                metaArgumentStatementVerifiedAgainstMetaArgumentMetaType =

                  this.verifyMetaArgumentStatementAgainstMetaArgumentMetaType(metaArgumentStatementNodeA, metaArgumentMetaTypeNodeB, localContext, verifyAhead);

          nonTerminalNodeVerified = metaArgumentStatementVerifiedAgainstMetaArgumentMetaType; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQueryA: argumentNodeQuery,
        nodeQueryB: argumentNodeQuery,
        verifyNodes: (nodeA, nodeB, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const argumentNodeA = nodeA,  ///
                argumentNodeB = nodeB,  ///
                argumentNodeVerifiedAgainstArgumentNode =

                  this.verifyArgumentNodeAgainstArgumentNode(argumentNodeA, argumentNodeB, localContext, verifyAhead);

          nonTerminalNodeVerified = argumentNodeVerifiedAgainstArgumentNode; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQueryA: nonTerminalNodeQuery,
        nodeQueryB: nonTerminalNodeQuery,
        verifyNodes: (nodeA, nodeB, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const nonTerminalNodeA = nodeA, ///
                nonTerminalNodeB = nodeB; ///

          nonTerminalNodeVerified =

            super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);

          return nonTerminalNodeVerified;
        }
      }
    ];

    const nodesVerified = verifyNodes(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);

    nonTerminalNodeVerified = nodesVerified;  ///

    return nonTerminalNodeVerified;
  }

  verifyMetaArgumentStatementAgainstMetaArgumentMetaType(metaArgumentStatementNodeA, metaArgumentMetaTypeNodeB, localContext, verifyAhead) {
    let metaArgumentStatementVerifiedAgainstMetaArgumentMetaType;

    const { verifyStatement } = this,
          metaTypeNode = metaArgumentMetaTypeNodeB, ///
          statementNode = metaArgumentStatementNodeA,  ///
          statementVerifiedAgainstMetaType = verifyStatementAgainstMetaType(statementNode, metaTypeNode, localContext, verifyAhead, verifyStatement);

    metaArgumentStatementVerifiedAgainstMetaArgumentMetaType = statementVerifiedAgainstMetaType; ///

    return metaArgumentStatementVerifiedAgainstMetaArgumentMetaType;
  }

  verifyArgumentNodeAgainstArgumentNode(argumentNodeA, argumentNodeB, localContext, verifyAhead) {
    let argumentNodeVerifiedAgainstArgumentNode;

    const argumentVerifiedAgainstArgument = verifyArgumentAgainstArgument(argumentNodeA, argumentNodeB, localContext, verifyAhead);

    argumentNodeVerifiedAgainstArgumentNode = argumentVerifiedAgainstArgument; ///

    return argumentNodeVerifiedAgainstArgumentNode;
  }
}

const statementAgainstCombinatorNodesVerifier = new StatementAgainstCombinatorNodesVerifier();

export default statementAgainstCombinatorNodesVerifier;
