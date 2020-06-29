"use strict";

const queries = require("../miscellaneous/queries"),
      ruleNames = require("../miscellaneous/ruleNames"),
      NonTerminalNodeContext = require("../context/nonTerminalNode");

const { NAME_RULE_NAME } = ruleNames,
      { nameTerminalNodeQuery } = queries;

function verifyTermAgainstConstructor(termNode, constructorTermNode, fileContext) {
  const nonTerminalNode = termNode, ///
        constructorNonTerminalNode = constructorTermNode, ///
        verified = verifyNonTerminalAgainstConstructor(nonTerminalNode, constructorNonTerminalNode, fileContext);

  return verified;
}

module.exports = verifyTermAgainstConstructor;

function verifyAgainstConstructor(node, constructorNode, fileContext) {
  let verified = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const constructorNodeTerminalNode = constructorNode.isTerminalNode();

    if (constructorNodeTerminalNode) {
      const terminalNode = node,  ///
            constructorTerminalNode = constructorNode; ///

      verified = verifyTerminalAgainstConstructor(terminalNode, constructorTerminalNode, fileContext);
    }
  } else {
    const constructorNodeNonTerminalNode = constructorNode.isNonTerminalNode();

    if (constructorNodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            constructorNonTerminalNode = constructorNode; ///

      verified = verifyNonTerminalAgainstConstructor(nonTerminalNode, constructorNonTerminalNode, fileContext);
    }
  }

  return verified;
}

function verifyTerminalAgainstConstructor(terminalNode, constructorTerminalNode, fileContext) {
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

function verifyNonTerminalAgainstConstructor(nonTerminalNode, constructorNonTerminalNode, fileContext) {
  let verified = false;

  const nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
        constructorNonTerminalNodeRuleName = constructorNonTerminalNode.getRuleName();

  if (nonTerminalNodeRuleName === constructorNonTerminalNodeRuleName) {
    const ruleName = nonTerminalNodeRuleName; ///

    if (ruleName === NAME_RULE_NAME) {
      const nameNode = nonTerminalNode, ///
            nameConstructorNode = constructorNonTerminalNode;

      verified = verifyNameAgainstConstructor(nameNode, nameConstructorNode, fileContext);
    } else {
      const nonTerminalNodeContext = NonTerminalNodeContext.fromFileContextAndNonTerminalNode(fileContext, nonTerminalNode),
            constructorNonTerminalNodeContext = NonTerminalNodeContext.fromFileContextAndNonTerminalNode(fileContext, constructorNonTerminalNode);

      let nextChildNode = nonTerminalNodeContext.getNextChildNode(),
          nextConstructorChildNode = constructorNonTerminalNodeContext.getNextChildNode();

      while (nextChildNode !== undefined) {
        if (nextConstructorChildNode === undefined) {
          break;
        }

        const node = nextChildNode,  ///
              constructorNode = nextConstructorChildNode;  ///

        verified = verifyAgainstConstructor(node, constructorNode, fileContext);

        if (!verified) {
          break;
        }

        nextChildNode = nonTerminalNodeContext.getNextChildNode();
        nextConstructorChildNode = constructorNonTerminalNodeContext.getNextChildNode();
      }

      if (nextConstructorChildNode !== undefined) {
        verified = false;
      }
    }
  }

  return verified;
}

function verifyNameAgainstConstructor(nameNode, constructorNameNode, fileContext) {
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
