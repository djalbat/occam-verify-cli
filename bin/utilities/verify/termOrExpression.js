"use strict";

const queries = require("../../miscellaneous/queries"),
      ruleNames = require("../../miscellaneous/ruleNames"),
      NonTerminalNodeContext = require("../../context/nonTerminalNode");

const { NAME_RULE_NAME } = ruleNames,
      { nameTerminalNodeQuery } = queries;

function verifyExpression(expressionNode, fileContext) {
  const operator = verifyExpressionAgainstOperators(expressionNode, fileContext);

  return operator;
}

function verifyTerm(termNode, fileContext) {
  const constructor = verifyTermAgainstConstructors(termNode, fileContext);

  return constructor;
}

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
        constructorNonTerminalNode = operatorExpressionNode, ///
        verified = verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, fileContext);

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
  const topLevel = true,
        nonTerminalNode = termNode, ///
        constructorNonTerminalNode = constructorTermNode, ///
        verified = verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, fileContext, topLevel);

  return verified;
}

function verifyNode(node, constructorNode, fileContext) {
  let verified = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const constructorNodeTerminalNode = constructorNode.isTerminalNode();

    if (constructorNodeTerminalNode) {
      const terminalNode = node,  ///
          constructorTerminalNode = constructorNode; ///

      verified = verifyTerminalNode(terminalNode, constructorTerminalNode, fileContext);
    }
  } else {
    const constructorNodeNonTerminalNode = constructorNode.isNonTerminalNode();

    if (constructorNodeNonTerminalNode) {
      const nonTerminalNode = node, ///
          constructorNonTerminalNode = constructorNode; ///

      verified = verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, fileContext);
    }
  }

  return verified;
}

function verifyTerminalNode(terminalNode, constructorTerminalNode, fileContext) {
  let verified = false;

  const terminalNodeType = terminalNode.getType(),
      constructorTerminalNodeType = constructorTerminalNode.getType();

  if (terminalNodeType === constructorTerminalNodeType) {
    const terminalNodeContent = terminalNode.getContent(),
        constructorTerminalNodeContent = constructorTerminalNode.getContent();

    if (terminalNodeContent === constructorTerminalNodeContent) {
      verified = true;
    }
  }

  return verified;
}

function verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, fileContext) {
  let verified = false;

  const nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
      constructorNonTerminalNodeRuleName = constructorNonTerminalNode.getRuleName();

  if (nonTerminalNodeRuleName === constructorNonTerminalNodeRuleName) {
    const ruleName = nonTerminalNodeRuleName; ///

    switch (ruleName) {
      case NAME_RULE_NAME: {
        const nameNode = nonTerminalNode, ///
            nameConstructorNode = constructorNonTerminalNode;

        verified = verifyNameNode(nameNode, nameConstructorNode, fileContext);

        break;
      }

      default: {
        const childNodes = nonTerminalNode.getChildNodes(),
            constructorChildNodes = constructorNonTerminalNode.getChildNodes();

        verified = verifyChildNodes(childNodes, constructorChildNodes, fileContext);

        break;
      }
    }
  }

  return verified;
}

function verifyChildNodes(childNodes, constructorChildNodes, fileContext) {
  let verified = false;

  const nonTerminalNodeContext = NonTerminalNodeContext.fromChildNodesAndFileContext(childNodes, fileContext),
      constructorNonTerminalNodeContext = NonTerminalNodeContext.fromChildNodesAndFileContext(constructorChildNodes, fileContext);

  let nextChildNode = nonTerminalNodeContext.getNextChildNode(),
      nextConstructorChildNode = constructorNonTerminalNodeContext.getNextChildNode();

  while (nextChildNode !== undefined) {
    if (nextConstructorChildNode === undefined) {
      break;
    }

    const node = nextChildNode,  ///
        constructorNode = nextConstructorChildNode;  ///

    verified = verifyNode(node, constructorNode, fileContext);

    if (!verified) {
      break;
    }

    nextChildNode = nonTerminalNodeContext.getNextChildNode();
    nextConstructorChildNode = constructorNonTerminalNodeContext.getNextChildNode();
  }

  if (verified) {
    if (nextConstructorChildNode !== undefined) {
      verified = false;
    }
  }

  return verified;
}

function verifyNameNode(nameNode, constructorNameNode, fileContext) {
  let verified = false;

  const nameTerminalNode = nameTerminalNodeQuery(nameNode),
      constructorNameTerminalNode = nameTerminalNodeQuery(constructorNameNode),
      nameTerminalNodeContent = nameTerminalNode.getContent(),
      name = nameTerminalNodeContent, ///
      variable = fileContext.findVariableByName(name);

  if (variable !== undefined) {
    const constructorNameTerminalNodeContent = constructorNameTerminalNode.getContent(),
        constructorName = constructorNameTerminalNodeContent;  ///

    if (constructorName === name) {
      verified = true;
    } else {
      const name = constructorName, ///
          type = fileContext.findTypeByName(name),
          variableType = variable.getType(),
          variableTypeEqualToOrSubTypeOfType = variableType.isEqualToOrSubTypeOf(type);

      verified = variableTypeEqualToOrSubTypeOfType;  ///
    }
  }

  return verified;
}
