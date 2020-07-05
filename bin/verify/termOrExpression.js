"use strict";

const queries = require("../miscellaneous/queries"),
      ruleNames = require("../miscellaneous/ruleNames"),
      NonTerminalNodeContext = require("../context/nonTerminalNode");

const { TERM_RULE_NAME, EXPRESSION_RULE_NAME } = ruleNames,
      { termNameNodeQuery, nameTerminalNodeQuery } = queries;

function verifyExpression(expressionNode, fileContext) { return verifyExpressionAgainstOperators(expressionNode, fileContext); }

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
        verified = verifyChildNodes(childNodes, constructorOrOperatorChildNodes, fileContext);

  return verified;
}

function verifyTermAgainstConstructors(termNode, fileContext) {
  const constructors = fileContext.getConstructors(),
        constructor = constructors.find((constructor) => {
          const constructorOrExpressionTermNode = constructor.getTermNode(),
                verified = verifyTermAgainstConstructor(termNode, constructorOrExpressionTermNode, fileContext);

          if (verified) {
            return true;
          }
        });

  return constructor;
}

function verifyTermAgainstConstructor(termNode, constructorOrExpressionTermNode, fileContext) {
  const nonTerminalNode = termNode, ///
        constructorOrExpressionNonTerminalNode = constructorOrExpressionTermNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
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
      case TERM_RULE_NAME: {
        const termNode = nonTerminalNode, ///
              constructorTermNode = constructorOrExpressionNonTerminalNode; ///

        verified = verifyTermNode(termNode, constructorTermNode, fileContext);

        break;
      }

      case EXPRESSION_RULE_NAME: {
        const expressionNode = nonTerminalNode, ///
              operatorExpressionNode = constructorOrExpressionNonTerminalNode;  ///

        verified = verifyExpressionNode(expressionNode, operatorExpressionNode, fileContext);

        break;
      }

      default: {
        const childNodes = nonTerminalNode.getChildNodes(),
              constructorOrExpressionChildNodes = constructorOrExpressionNonTerminalNode.getChildNodes();

        verified = verifyChildNodes(childNodes, constructorOrExpressionChildNodes, fileContext);

        break;
      }
    }
  }

  return verified;
}

function verifyExpressionNode(expressionNode, operatorExpressionNode, fileContext) {
  let verified = false;

  debugger

  return verified;
}

function verifyTermNode(termNode, constructorTermNode, fileContext) {
  let verified = false;

  const constructorNameNode = termNameNodeQuery(constructorTermNode);

  if (constructorNameNode !== undefined) {
    const nameNode = termNameNodeQuery(termNode);

    if (nameNode !== undefined) {
      verified = verifyNameNode(nameNode, constructorNameNode, fileContext);
    } else {
      const constructor = verifyTerm(termNode, fileContext);

      if (constructor !== undefined) {
        const type = fileContext.findTypeByConstructorNameNode(constructorNameNode),
              constructorType = constructor.getType(),
              constructorTypeEqualToOrSubTypeOfType = constructorType.isEqualToOrSubTypeOf(type);

        if (constructorTypeEqualToOrSubTypeOfType) {
          verified = true;
        }
      }
    }
  } else {
    debugger
  }

  return verified;
}

function verifyNameNode(nameNode, constructorNameNode, fileContext) {
  let verified = false;

  const nameTerminalNode = nameTerminalNodeQuery(nameNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent, ///
        variable = fileContext.findVariableByName(name);

  if (variable !== undefined) {
    const type = fileContext.findTypeByConstructorNameNode(constructorNameNode);

    if (type !== undefined) {
      const variableType = variable.getType(),
            variableTypeEqualToOrSubTypeOfType = variableType.isEqualToOrSubTypeOf(type);

      if (variableTypeEqualToOrSubTypeOfType) {
        verified = true;
      }
    }
  }

  return verified;
}

function verifyChildNodes(childNodes, constructorOrExpressionChildNodes, fileContext) {
  let verified = false;

  const nonTerminalNodeContext = NonTerminalNodeContext.fromChildNodesAndFileContext(childNodes, fileContext),
        constructorOrExpressionNonTerminalNodeContext = NonTerminalNodeContext.fromChildNodesAndFileContext(constructorOrExpressionChildNodes, fileContext);

  let nextChildNode = nonTerminalNodeContext.getNextChildNode(),
      nextConstructorChildNode = constructorOrExpressionNonTerminalNodeContext.getNextChildNode();

  while (nextChildNode !== undefined) {
    if (nextConstructorChildNode === undefined) {
      break;
    }

    const node = nextChildNode,  ///
          constructorOrExpressionNode = nextConstructorChildNode;  ///

    verified = verifyNode(node, constructorOrExpressionNode, fileContext);

    if (!verified) {
      break;
    }

    nextChildNode = nonTerminalNodeContext.getNextChildNode();
    nextConstructorChildNode = constructorOrExpressionNonTerminalNodeContext.getNextChildNode();
  }

  if (verified) {
    if (nextConstructorChildNode !== undefined) {
      verified = false;
    }
  }

  return verified;
}
