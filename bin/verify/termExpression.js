"use strict";

const log = require("../log"),
      Operator = require("../operator"),
      TermNode = require("../node/term"),
      ruleNames = require("../ruleNames"),
      typeUtilities = require("../utilities/type"),
      nodeUtilities = require("../utilities/node"),
      queryUtilities = require("../utilities/query"),
      ExpressionNode = require("../node/expression"),
      variableUtilities = require("../utilities/variable");

const { nodeQuery } = queryUtilities,
      { nodeAsString } = nodeUtilities,
      { TERM_RULE_NAME, EXPRESSION_RULE_NAME } = ruleNames,
      { variableFromTermNode, variableFromExpressionNode } = variableUtilities,
      { typeFromConstructorTermNode, typeFromOperatorExpressionNode } = typeUtilities;

const expressionTermQuery = nodeQuery("/expression/term!");

function verifyExpression(expressionNode, fileContext) {
  let operator = undefined;

  if (operator === undefined) {
    operator = verifyExpressionAgainstOperators(expressionNode, fileContext);
  }

  if (operator === undefined) {
    const expressionTermNode = expressionTermQuery(expressionNode);

    if (expressionTermNode !== undefined) {
      const termNode = expressionTermNode,  ///
            constructor = verifyTermAgainstConstructors(termNode, fileContext);

      if (constructor !== undefined) {
        const type = constructor.getType();

        operator = Operator.fromExpressionNodeAndType(expressionNode, type);
      }
    }
  }

  return operator;
}

function verifyTerm(termNode, fileContext) { return verifyTermAgainstConstructors(termNode, fileContext); }

module.exports = {
  verifyExpression,
  verifyTerm
};

function verifyExpressionAgainstOperators(expressionNode, fileContext) {
  const operators = fileContext.getOperators(),
        operator = operators.find((operator) => {
          const operatorExpressionNode = operator.getExpressionNode(),
                verified = verifyExpressionAgainstOperator(expressionNode, operatorExpressionNode, fileContext);

          if (verified) {
            return true;
          }
        });

  return operator;
}

function verifyExpressionAgainstOperator(expressionNode, operatorExpressionNode, fileContext) {
  const nonTerminalNode = expressionNode, ///
        constructorOrOperatorNonTerminalNode = operatorExpressionNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        constructorOrOperatorChildNodes = constructorOrOperatorNonTerminalNode.getChildNodes(),
        parentNode = nonTerminalNode, ///
        verified = verifyChildNodes(childNodes, constructorOrOperatorChildNodes, parentNode, fileContext);

  return verified;
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
        verified = verifyChildNodes(childNodes, constructorOrExpressionChildNodes, parentNode, fileContext);

  return verified;
}

function verifyNode(node, constructorOrExpressionNode, parentNode, fileContext) {
  let verified = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const constructorNodeTerminalNode = constructorOrExpressionNode.isTerminalNode();

    if (constructorNodeTerminalNode) {
      const terminalNode = node,  ///
            constructorOrExpressionTerminalNode = constructorOrExpressionNode; ///

      verified = verifyTerminalNode(terminalNode, constructorOrExpressionTerminalNode, parentNode, fileContext);
    }
  } else {
    const constructorNodeNonTerminalNode = constructorOrExpressionNode.isNonTerminalNode();

    if (constructorNodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            constructorOrExpressionNonTerminalNode = constructorOrExpressionNode; ///

      verified = verifyNonTerminalNode(nonTerminalNode, constructorOrExpressionNonTerminalNode, parentNode, fileContext);
    }
  }

  return verified;
}

function verifyTerminalNode(terminalNode, constructorOrExpressionTerminalNode, parentNode, fileContext) {
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

function verifyNonTerminalNode(nonTerminalNode, constructorOrExpressionNonTerminalNode, parentNode, fileContext) {
  let verified = false;

  const nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
        constructorOrExpressionNonTerminalNodeRuleName = constructorOrExpressionNonTerminalNode.getRuleName();

  if (nonTerminalNodeRuleName === constructorOrExpressionNonTerminalNodeRuleName) {
    const ruleName = nonTerminalNodeRuleName; ///

    switch (ruleName) {
      case EXPRESSION_RULE_NAME: {
        const expressionNode = nonTerminalNode, ///
              operatorExpressionNode = constructorOrExpressionNonTerminalNode;  ///

        verified = verifyExpressionNode(expressionNode, operatorExpressionNode, fileContext);

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
                  operator = verifyExpression(expressionNode, fileContext);

            if (operator !== undefined) {
              const type = operator.getType();

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

          verified = verifyChildNodes(childNodes, constructorOrExpressionChildNodes, parentNode, fileContext);
        }
      }
    }
  }

  return verified;
}

function verifyChildNodes(childNodes, constructorOrExpressionChildNodes, parentNode, fileContext) {
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

    verified = verifyNode(node, constructorOrExpressionNode, parentNode, fileContext);

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

function verifyExpressionNode(expressionNode, operatorExpressionNode, fileContext) {
  let verified = false;

  const type = typeFromOperatorExpressionNode(operatorExpressionNode, fileContext);

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
      const operator = verifyExpression(expressionNode, fileContext);

      if (operator !== undefined) {
        const operatorType = operator.getType();

        if (operatorType === undefined) {
          const expressionString = nodeAsString(expressionNode);

          log.error(`The '${expressionString}' sub-expression cannot be verified because its type is undefined.`);
        } else {
          const operatorTypeEqualToOrSubTypeOfType = operatorType.isEqualToOrSubTypeOf(type);

          if (operatorTypeEqualToOrSubTypeOfType) {
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
