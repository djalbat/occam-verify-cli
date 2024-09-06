"use strict";

import shim from "../shim";
import Unifier from "../unifier";
import unifyArgumentAgainstArgument from "../unify/argumentAgainstArgument";
import unifyStatementAgainstMetaType from "../unify/statementAgainstMetaType";

import { unify } from "../unifier";
import { nodeQuery } from "../utilities/query";

const argumentNodeQuery = nodeQuery("/argument!"),
      metaTypeNodeQuery = nodeQuery("/metaType!"),
      statementNodeQuery = nodeQuery("/statement!"),
      nonTerminalNodeQuery = nodeQuery("/*");

class StatementAgainstCombinatorUnifier extends Unifier {
  unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead) {
    let nonTerminalNodeUnified;

    const nodeQueryMaps = [
      {
        nodeQueryA: statementNodeQuery,
        nodeQueryB: metaTypeNodeQuery,
        unify: (nodeA, nodeB, localContext, unifyAhead) => {
          let nonTerminalNodeUnified;

          const metaTypeNodeB = nodeB,  ///
                statementNodeA = nodeA, ///
                statementUnifiedAgainstMetaType =

                  this.unifyMetaArgumentStatementAgainstMetaType(statementNodeA, metaTypeNodeB, localContext, unifyAhead);

          nonTerminalNodeUnified = statementUnifiedAgainstMetaType; ///

          return nonTerminalNodeUnified;
        }
      },
      {
        nodeQueryA: argumentNodeQuery,
        nodeQueryB: argumentNodeQuery,
        unify: (nodeA, nodeB, localContext, unifyAhead) => {
          let nonTerminalNodeUnified;

          const argumentNodeA = nodeA,  ///
                argumentNodeB = nodeB,  ///
                argumentNodeUnifiedAgainstArgumentNode =

                  this.unifyArgumentNodeAgainstArgumentNode(argumentNodeA, argumentNodeB, localContext, unifyAhead);

          nonTerminalNodeUnified = argumentNodeUnifiedAgainstArgumentNode; ///

          return nonTerminalNodeUnified;
        }
      },
      {
        nodeQueryA: nonTerminalNodeQuery,
        nodeQueryB: nonTerminalNodeQuery,
        unify: (nodeA, nodeB, localContext, unifyAhead) => {
          let nonTerminalNodeUnified;

          const nonTerminalNodeA = nodeA, ///
                nonTerminalNodeB = nodeB; ///

          nonTerminalNodeUnified =

            super.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);

          return nonTerminalNodeUnified;
        }
      }
    ];

    const nodesUnified = unify(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);

    nonTerminalNodeUnified = nodesUnified;  ///

    return nonTerminalNodeUnified;
  }

  unifyMetaArgumentStatementAgainstMetaType(statementNodeA, metaTypeNodeB, localContext, unifyAhead) {
    let statementUnifiedAgainstMetaType;

    const { verifyStatement } = shim,
          metaTypeNode = metaTypeNodeB, ///
          statementNode = statementNodeA;  ///

    statementUnifiedAgainstMetaType = unifyStatementAgainstMetaType(statementNode, metaTypeNode, localContext, unifyAhead, verifyStatement);

    return statementUnifiedAgainstMetaType;
  }

  unifyArgumentNodeAgainstArgumentNode(argumentNodeA, argumentNodeB, localContext, unifyAhead) {
    let argumentNodeUnifiedAgainstArgumentNode;

    const argumentUnifiedAgainstArgument = unifyArgumentAgainstArgument(argumentNodeA, argumentNodeB, localContext, unifyAhead);

    argumentNodeUnifiedAgainstArgumentNode = argumentUnifiedAgainstArgument; ///

    return argumentNodeUnifiedAgainstArgumentNode;
  }
}

const statementAgainstCombinatorUnifier = new StatementAgainstCombinatorUnifier();

export default statementAgainstCombinatorUnifier;
