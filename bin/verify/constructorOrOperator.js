"use strict";

const necessary = require("necessary");

const queries = require("../miscellaneous/queries"),
      TermNode = require("../miscellaneous/termNode"),
      ruleNames = require("../miscellaneous/ruleNames"),
      ExpressionNode = require("../miscellaneous/expressionNode"),
      verifyTermOrExpression = require("../verify/termOrExpression"),
      NonTerminalNodeContext = require("../context/nonTerminalNode");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { verifyTerm, verifyExpression } = verifyTermOrExpression,
      { NAME_RULE_NAME, TERM_RULE_NAME, EXPRESSION_RULE_NAME } = ruleNames,
      { termNameNodesQuery, expressionTermNodesQuery, nameTerminalNodeQuery } = queries;

function verifyExpressionAsOperator(expressionNode, fileContext) {
  const nonTerminalNode = expressionNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        verified = verifyChildNodes(childNodes, fileContext);

  return verified;
}

function verifyTermAsConstructor(termNode, fileContext) {
  const nonTerminalNode = termNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        verified = verifyChildNodes(childNodes, fileContext);

  return verified;
}

module.exports = {
  verifyExpressionAsOperator,
  verifyTermAsConstructor
};

function verifyNode(node, fileContext) {
  let verified = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node;  ///

    verified = verifyTerminalNode(terminalNode, fileContext);
  } else {
    const nonTerminalNode = node; ///

    verified = verifyNonTerminalNode(nonTerminalNode, fileContext);
  }

  return verified;
}

function verifyTerminalNode(terminalNode, fileContext) {
  const verified = true;

  ///

  return verified;
}

function verifyNonTerminalNode(nonTerminalNode, fileContext) {
  let verified = false;

  const ruleName = nonTerminalNode.getRuleName();

  switch (ruleName) {
    case EXPRESSION_RULE_NAME: {
      const expressionNode = nonTerminalNode; ///

      verified = verifyExpressionNode(expressionNode, fileContext);

      break;
    }

    case TERM_RULE_NAME: {
      const termNode = nonTerminalNode; ///

      verified = verifyTermNode(termNode, fileContext);

      break;
    }

    default: {
      if (!verified) {
        const expressionNode = ExpressionNode.fromNonTerminalNode(nonTerminalNode);

        verified = verifyExpressionNode(expressionNode, fileContext);
      }

      if (!verified) {
        const termNode = TermNode.fromNonTerminalNode(nonTerminalNode);

        verified = verifyTermNode(termNode, fileContext);
      }

      break;
    }
  }

  if (!verified) {
    if (ruleName !== NAME_RULE_NAME) {
      const childNodes = nonTerminalNode.getChildNodes();

      verified = verifyChildNodes(childNodes, fileContext);
    }
  }

  return verified;
}

function verifyExpressionNode(expressionNode, fileContext) {
  let verified = false;

  const type = typeFromExpressionNode(expressionNode, fileContext);

  if (type !== undefined) {
    verified = true;
  } else {
    const operator = verifyExpression(expressionNode, fileContext);

    if (operator !== undefined) {
      const operatorType = operator.getType();

      if (operatorType === undefined) {
        verified = true;
      }
    }
  }

  return verified;
}

function verifyTermNode(termNode, fileContext) {
  let verified = false;

  const type = typeFromTermNode(termNode, fileContext);

  if (type !== undefined) {
    verified = true;
  } else {
    const constructor = verifyTerm(termNode, fileContext);

    if (constructor !== undefined) {
      const constructorType = constructor.getType();

      if (constructorType === undefined) {
        verified = true;
      }
    }
  }

  return verified;
}

function verifyChildNodes(childNodes, fileContext) {
  let verified = false;

  const nonTerminalNodeContext = NonTerminalNodeContext.fromChildNodesAndFileContext(childNodes, fileContext);

  let nextChildNode = nonTerminalNodeContext.getNextChildNode();

  while (nextChildNode !== undefined) {
    const node = nextChildNode;  ///

    verified = verifyNode(node, fileContext);

    if (!verified) {
      break;
    }

    nextChildNode = nonTerminalNodeContext.getNextChildNode();
  }

  return verified;
}

function typeFromNameNode(nameNode, fileContext) {
  const nameTerminalNode = nameTerminalNodeQuery(nameNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent, ///
        type = fileContext.findTypeByName(name);

  return type;
}

function typeFromTermNode(termNode, fileContext) {
  let type = undefined;

  const termNameNodes = termNameNodesQuery(termNode),
        termNameNodesLength = termNameNodes.length;

  if (termNameNodesLength === 1) {
    const firmTermNameNode = first(termNameNodes),
          nameNode = firmTermNameNode;  ///

    type = typeFromNameNode(nameNode, fileContext);
  }

  return type;
}

function typeFromExpressionNode(expressionNode, fileContext) {
  let type = undefined;

  const expressionTermNameNodes = expressionTermNodesQuery(expressionNode),
        expressionTermNameNodesLength = expressionTermNameNodes.length;

  if (expressionTermNameNodesLength === 1) {
    const firmTermNameNode = first(expressionTermNameNodes),
          nameNode = firmTermNameNode;  ///

    type = typeFromNameNode(nameNode, fileContext);
  }

  return type;
}

