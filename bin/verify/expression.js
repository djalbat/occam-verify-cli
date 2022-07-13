"use strict";

const log = require("../log"),
      TermNode = require("../node/term"),
      ExpressionNode = require("../node/expression");

const { nodeAsString } = require("../utilities/node"),
      { TERM_RULE_NAME, EXPRESSION_RULE_NAME } = require("../ruleNames"),
      { variableFromTermNode, variableFromExpressionNode } = require("../utilities/variable"),
      { typeFromConstructorTermNode, typeFromCombinatorExpressionNode } = require("../utilities/type");

function verifyExpression(expressionNode, types, fileContext) {
  const combinators = fileContext.getCombinators(),
        expressionVerified = combinators.some((combinator) => {
          const expressionVerifiedAgainstCombinator = verifyExpressionAgainstCombinator(expressionNode, combinator, fileContext);

          if (expressionVerifiedAgainstCombinator) {
            return true;
          }
        });

  return expressionVerified;
}

function verifyTerm(termNode, fileContext) { return verifyTermAgainstConstructors(termNode, fileContext); }

module.exports = verifyExpression;

function verifyExpressionAgainstCombinator(expressionNode, combinator, fileContext) {
  const nonTerminalNode = expressionNode, ///
        combinatorExpressionNode = combinator.getExpressionNode(),
        constructorOrCombinatorNonTerminalNode = combinatorExpressionNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        constructorOrCombinatorChildNodes = constructorOrCombinatorNonTerminalNode.getChildNodes(),
        childNodesVerified = verifyChildNodes(childNodes, constructorOrCombinatorChildNodes, fileContext),
        expressionVerifiedAgainstCombinator = childNodesVerified; ///

  return expressionVerifiedAgainstCombinator;
}

function verifyTermAgainstConstructors(termNode, fileContext) {
  const constructors = fileContext.getConstructors(),
        constructor = constructors.find((constructor) => {
          const constructorTermNode = constructor.getTermNode(),
                verified = verifyTermAgainstConstructor(termNode, constructorTermNode, fileContext);

          if (verified) {
            return true;
          }
        });

  return constructor;
}

function verifyTermAgainstConstructor(termNode, constructorTermNode, fileContext) {
  const nonTerminalNode = termNode, ///
        constructorOrExpressionNonTerminalNode = constructorTermNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        parentNode = nonTerminalNode,  ///
        constructorOrExpressionChildNodes = constructorOrExpressionNonTerminalNode.getChildNodes(),
        verified = verifyChildNodes(childNodes, constructorOrExpressionChildNodes, fileContext);

  return verified;
}

function verifyNode(node, constructorOrExpressionNode, fileContext) {
  let verified = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const constructorNodeTerminalNode = constructorOrExpressionNode.isTerminalNode();

    if (constructorNodeTerminalNode) {
      const terminalNode = node,  ///
            constructorOrExpressionTerminalNode = constructorOrExpressionNode; ///

      verified = verifyTerminalNode(terminalNode, constructorOrExpressionTerminalNode, fileContext);
    }
  } else {
    const constructorNodeNonTerminalNode = constructorOrExpressionNode.isNonTerminalNode();

    if (constructorNodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            constructorOrExpressionNonTerminalNode = constructorOrExpressionNode; ///

      verified = verifyNonTerminalNode(nonTerminalNode, constructorOrExpressionNonTerminalNode, fileContext);
    }
  }

  return verified;
}

function verifyTerminalNode(terminalNode, constructorOrExpressionTerminalNode, fileContext) {
  let verified = false;

  const terminalNodeType = terminalNode.getType(),
        constructorTerminalNodeType = constructorOrExpressionTerminalNode.getType();

  if (terminalNodeType === constructorTerminalNodeType) {
    const terminalNodeContent = terminalNode.getContent(),
          constructorTerminalNodeContent = constructorOrExpressionTerminalNode.getContent();

    if (terminalNodeContent === constructorTerminalNodeContent) {
      verified = true;
    }
  }

  return verified;
}

function verifyNonTerminalNode(nonTerminalNode, constructorOrExpressionNonTerminalNode, fileContext) {
  let verified = false;

  const nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
        constructorOrExpressionNonTerminalNodeRuleName = constructorOrExpressionNonTerminalNode.getRuleName();

  if (nonTerminalNodeRuleName === constructorOrExpressionNonTerminalNodeRuleName) {
    const ruleName = nonTerminalNodeRuleName; ///

    switch (ruleName) {
      case EXPRESSION_RULE_NAME: {
        const expressionNode = nonTerminalNode, ///
              combinatorExpressionNode = constructorOrExpressionNonTerminalNode;  ///

        verified = verifyExpressionNode(expressionNode, combinatorExpressionNode, fileContext);

        break;
      }

      case TERM_RULE_NAME: {
        const termNode = nonTerminalNode, ///
              constructorTermNode = constructorOrExpressionNonTerminalNode; ///

        verified = verifyTermNode(termNode, constructorTermNode, fileContext);

        break;
      }

      default: {
        if (!verified) {
          const parentNodeExpressionNode = (parentNode instanceof ExpressionNode);

          if (!parentNodeExpressionNode) {
            const expressionNode = ExpressionNode.fromNonTerminalNode(nonTerminalNode),
                  combinator = verifyExpression(expressionNode, fileContext);

            if (combinator !== undefined) {
              const type = combinator.getType();

              if (type === undefined) {
                const nonTerminalNodeString = nodeAsString(nonTerminalNode),
                      expressionNonTerminalNode = constructorOrExpressionNonTerminalNode,  ///
                      expressionNonTerminalNodeString = nodeAsString(expressionNonTerminalNode);

                if (nonTerminalNodeString === expressionNonTerminalNodeString) {
                  verified = true;
                }
              }
            }
          }
        }

        if (!verified) {
          const parentNodeTermNode = (parentNode instanceof TermNode);

          if (!parentNodeTermNode) {
            const termNode = TermNode.fromNonTerminalNode(nonTerminalNode),
                  constructor = verifyTerm(termNode, fileContext);

            if (constructor !== undefined) {
              const type = constructor.getType();

              if (type === undefined) {
                const nonTerminalNodeString = nodeAsString(nonTerminalNode),
                      constructorNonTerminalNode = constructorOrExpressionNonTerminalNode,  ///
                      constructorNonTerminalNodeString = nodeAsString(constructorNonTerminalNode);

                if (nonTerminalNodeString === constructorNonTerminalNodeString) {
                  verified = true;
                }
              }
            }
          }
        }

        if (!verified) {
          const childNodes = nonTerminalNode.getChildNodes(),
                parentNode = nonTerminalNode, ///
                constructorOrExpressionChildNodes = constructorOrExpressionNonTerminalNode.getChildNodes();

          verified = verifyChildNodes(childNodes, constructorOrExpressionChildNodes, fileContext);
        }
      }
    }
  }

  return verified;
}

function verifyChildNodes(childNodes, constructorOrExpressionChildNodes, fileContext) {
  let verified = false;

  let index = 0,
      childNode = childNodes[index],
      constructorOrExpressionChildNode = constructorOrExpressionChildNodes[index]

  while (childNode !== undefined) {
    if (constructorOrExpressionChildNode === undefined) {
      break;
    }

    const node = childNode,  ///
          constructorOrExpressionNode = constructorOrExpressionChildNode;  ///

    verified = verifyNode(node, constructorOrExpressionNode, fileContext);

    if (!verified) {
      break;
    }

    index++;
    childNode = childNodes[index];
    constructorOrExpressionChildNode = constructorOrExpressionChildNodes[index];
  }

  if (verified) {
    if (childNode !== undefined) {
      verified = false;
    }
  }

  return verified;
}

function verifyExpressionNode(expressionNode, combinatorExpressionNode, fileContext) {
  let verified = false;

  const type = typeFromCombinatorExpressionNode(combinatorExpressionNode, fileContext);

  if (type !== undefined) {
    if (verified === false) {
      const variable = variableFromExpressionNode(expressionNode, fileContext);

      if (variable !== undefined) {
        const variableType = variable.getType(),
              variableTypeEqualToOrSubTypeOfType = variableType.isEqualToOrSubTypeOf(type);

        if (variableTypeEqualToOrSubTypeOfType) {
          verified = true;
        }
      }
    }

    if (verified === false) {
      const combinator = verifyExpression(expressionNode, fileContext);

      if (combinator !== undefined) {
        const combinatorType = combinator.getType();

        if (combinatorType === undefined) {
          const expressionString = nodeAsString(expressionNode);

          log.error(`The '${expressionString}' sub-expression cannot be verified because its type is undefined.`);
        } else {
          const combinatorTypeEqualToOrSubTypeOfType = combinatorType.isEqualToOrSubTypeOf(type);

          if (combinatorTypeEqualToOrSubTypeOfType) {
            verified = true;
          }
        }
      }
    }
  }

  return verified;
}

function verifyTermNode(termNode, constructorTermNode, fileContext) {
  let verified = false;

  const type = typeFromConstructorTermNode(constructorTermNode, fileContext);

  if (type !== undefined) {
    if (verified === false) {
      const variable = variableFromTermNode(termNode, fileContext);

      if (variable !== undefined) {
        const variableType = variable.getType(),
              variableTypeEqualToOrSubTypeOfType = variableType.isEqualToOrSubTypeOf(type);

        if (variableTypeEqualToOrSubTypeOfType) {
          verified = true;
        }
      }
    }

    if (verified === false) {
      const constructor = verifyTerm(termNode, fileContext);

      if (constructor !== undefined) {
        const constructorType = constructor.getType();

        if (constructorType === undefined) {
          const termString = nodeAsString(termNode);

          log.error(`The '${termString}' sub-term cannot be verified because its type is undefined.`);
        } else {
          const constructorTypeEqualToOrSubTypeOfType = constructorType.isEqualToOrSubTypeOf(type);

          if (constructorTypeEqualToOrSubTypeOfType) {
            verified = true;
          }
        }
      }
    }
  }

  return verified;
}
