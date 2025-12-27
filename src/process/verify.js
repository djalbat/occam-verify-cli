"use strict";

import { nodeQuery } from "../utilities/query";
import { isLastRemainingArgumentFunction } from "../utilities/pass";

const nonTerminalNodeQuery = nodeQuery("/*");

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type"),
      statementNodeQuery = nodeQuery("/statement");

export default class Pass {
  run(node, ...remainingArguments) {
    let success;

    const visited = this.visitNode(node, ...remainingArguments);

    success = visited;  ///

    return success;
  }

  descend(childNodes, ...remainingArguments) {
    let descendedAhead = false;

    const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

    if (lastRemainingArgumentFunction) {
      const index = 0;

      descendedAhead = this.descendAhead(index, childNodes, ...remainingArguments); ///
    } else {
      const visited = childNodes.every((childNode) => {
        const node = childNode, ///
              visited = this.visitNode(node, ...remainingArguments);

        if (visited) {
          return true;
        }
      });

      if (visited) {
        descendedAhead = true;
      }
    }

    return descendedAhead;
  }

  descendAhead(index, childNodes, ...remainingArguments) {
    let descendedAhead = false;

    const descendAhead = remainingArguments.pop(), ///
          childNodesLength = childNodes.length;

    if (index === childNodesLength) {
      descendedAhead = descendAhead();
    } else {
      const childNode = childNodes[index],
            node = childNode, ///
            visited = this.visitNode(node, ...remainingArguments, () => {
              remainingArguments.push(descendAhead);

              const aheadIndex = index + 1,
                    descendedAhead = this.descendAhead(aheadIndex, childNodes, ...remainingArguments);

              return descendedAhead;
            });

      if (visited) {
        descendedAhead = true;
      }
    }

    return descendedAhead;
  }

  visitNode(node, ...remainingArguments) {
    let visited;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node;  ///

      visited = this.visitTerminalNode(terminalNode, ...remainingArguments);
    } else {
      const nonTerminalNode = node;  ///

      visited = this.visitNonTerminalNode(nonTerminalNode, ...remainingArguments);
    }

    return visited;
  }

  visitTerminalNode(terminalNode, ...remainingArguments) {
    let visited = false;

    const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

    if (lastRemainingArgumentFunction) {
      const descendAhead = remainingArguments.pop(), ///
            descendedAhead = descendAhead();

      if (descendedAhead) {
        visited = true;
      }

      remainingArguments.push(descendAhead);
    } else {
      visited = true;
    }

    return visited;
  }

  visitNonTerminalNode(nonTerminalNode, ...remainingArguments) {
    let visited = false;

    let { maps } = this.constructor;

    maps = [ ///
      ...maps,
      {
        nodeQuery: nonTerminalNodeQuery,
        run: (node, ...remainingArguments) => {
          let visited = false;

          const childNodes = nonTerminalNode.getChildNodes(), ///
                descended = this.descend(childNodes, ...remainingArguments);

          if (descended) {
            visited = true;
          }

          return visited;
        }
      }
    ]

    maps.some((map) => {
      const { nodeQuery, run } = map;

      const node = nodeQuery(nonTerminalNode);

      if (node !== null) {
        const success = run(node, ...remainingArguments);

        visited = success;

        return true;
      }
    });

    return visited;
  }
}

class CombinatorPass extends Pass {
  static maps = [
    {
      nodeQuery: statementNodeQuery,
      run: (statementNode, context) => {
        const { Statement } = ontology,
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
        const { Term } = ontology,
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

