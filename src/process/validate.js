"use strict";

import { queryUtilities } from "occam-furtle";

import { isLastRemainingArgumentFunction } from "../utilities/pass";
import { termFromTermNode, statementFromStatementNode } from "../utilities/element";

const { nodeQuery } = queryUtilities;

const nonTerminalNodeQuery = nodeQuery("/*");

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type"),
      statementNodeQuery = nodeQuery("/statement");

class Pass {
  run(node, ...remainingArguments) {
    let success;

    const visited = this.visitNode(node, ...remainingArguments);

    success = visited;  ///

    return success;
  }

  descend(childNodes, ...remainingArguments) {
    let descended = false;

    const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

    if (lastRemainingArgumentFunction) {
      const index = 0;

      descended = this.descendAhead(index, childNodes, ...remainingArguments); ///
    } else {
      const visited = childNodes.every((childNode) => {
        const node = childNode, ///
              visited = this.visitNode(node, ...remainingArguments);

        if (visited) {
          return true;
        }
      });

      if (visited) {
        descended = true;
      }
    }

    return descended;
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

class TermPass extends Pass {
  run(statementNode, context) {
    let success = false;

    const nonTerminalNode = statementNode,  ///
          childNodes = nonTerminalNode.getChildNodes(), ///
          descended = this.descend(childNodes,context);

    if (descended) {
      success = true;
    }

    return success;
  }

  static maps = [
    {
      nodeQuery: termNodeQuery,
      run: (termNode, context, validateAhead) => {
        let success = false;

        const term = termFromTermNode(termNode, context),
              termValidates = term.validate(context, validateAhead);

        if (termValidates) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      run: (typeNode, context, validateAhead) => {
        let success = false;

        const nominalTypeName = typeNode.getNominalTypeName(),
              typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);

        if (typePresent) {
          const verifiesAhead = validateAhead();

          if (verifiesAhead) {
            success = true;
          }
        } else {
          const typeString = nominalTypeName; ///

          context.debug(`The '${typeString}' type is not present.`);

          success = false;
        }

        return success;
      }
    }
  ];
}

class StatementPass extends Pass {
  run(statementNode, context) {
    let success = false;

    const nonTerminalNode = statementNode,  ///
          childNodes = nonTerminalNode.getChildNodes(), ///
          descended = this.descend(childNodes,context);

    if (descended) {
      success = true;
    }

    return success;
  }

  static maps = [
    {
      nodeQuery: statementNodeQuery,
      run: (statementNode, context) => {
        let success = false;

        const statement = statementFromStatementNode(statementNode, context),
              assignments = null,
              stated = false,
              statementValidates = statement.validate(assignments, stated, context);

        if (statementValidates) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: termNodeQuery,
      run: (termNode, context) => {
        let success = false;

        const term = termFromTermNode(termNode, context),
              termValidates = term.validate(context, () => {
                const verifiesAhead = true;

                return verifiesAhead;
              });

        if (termValidates) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      run: (typeNode, context) => {
        let success = false;

        const nominalTypeName = typeNode.getNominalTypeName(),
              typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);

        if (typePresent) {
          success = true;
        }

        return success;
      }
    }
  ];
}

const termPass = new TermPass(),
      statementPass = new StatementPass();

export function validateTerm(termNode, context) {
  let termValidates = false;

  const node = termNode, ///
        sucess = termPass.run(node, context);

  if (sucess) {
    termValidates = true;
  }

  return termValidates;
}

export function validateStatement(statementNode, context) {
  let statementValidates = false;

  const node = statementNode, ///
        sucess = statementPass.run(node, context);

  if (sucess) {
    statementValidates = true;
  }

  return statementValidates;
}
