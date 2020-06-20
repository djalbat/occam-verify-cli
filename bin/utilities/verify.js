"use strict";

const parsers = require("occam-parsers");

const Error = require("../error"),
      queries = require("../miscellaneous/queries"),
      emptyType = require("../miscellaneous/emptyType"),
      ruleNames = require("../miscellaneous/ruleNames"),
      nodeUtilities = require("../utilities/node"),
      Configuration = require("../miscellaneous/configuration"),
      SubExpression = require("../miscellaneous/subExpression");

const { partTypes } = parsers,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes,
      { nodeAsString, cloneChildNodes } = nodeUtilities,
      { nameTerminalNodeQuery, termNameTerminalNodeQuery } = queries,
      { NAME_RULE_NAME, TERM_RULE_NAME, STATEMENT_RULE_NAME, EXPRESSION_RULE_NAME } = ruleNames;

function verifyTerm(termNode, context, ruleMap) {
  let type = undefined;

  if (type === undefined) {
    type = verifyTermNodeAgainstConstructors(termNode, context, ruleMap);
  }

  if (type === undefined) {
    type = verifyTermNodeAgainstVariables(termNode, context, ruleMap);
  }

  return type;
}

function verifyExpression(expressionNode, context, ruleMap) {
  const expressionRule = ruleMap[EXPRESSION_RULE_NAME],
        node = expressionNode,  ///
        rule = expressionRule,  ///
        type = verifyWithRule(node, rule, context, ruleMap);

  if (type === undefined) {
    const node = expressionNode,  ///
          expressionString = nodeAsString(expressionNode),
          message = `The expression '${expressionString}' cannot be verified.`;

    throw new Error(node, message);
  }

  return type;
}

function verifyStatement(statementNode, context, ruleMap) {
  const statementRule = ruleMap[STATEMENT_RULE_NAME],
        node = statementNode, ///
        rule = statementRule, ///
        type = verifyWithRule(node, rule, context, ruleMap),
        verified = (type !== undefined);

  if (!verified) {
    const node = statementNode,  ///
          statementString = nodeAsString(statementNode),
          message = `The statement '${statementString}' cannot be verified.`;

    throw new Error(node, message);
  }
}

module.exports = {
  verifyTerm,
  verifyExpression,
  verifyStatement
};

function verifyTermNodeAgainstConstructors(termNode, context, ruleMap) {
  let type = undefined;

  const constructors = context.getConstructors();

  constructors.some((constructor) => {
    const constructorTermNode = constructor.getTermNode(),
          verified = verifyTermNode(termNode, constructorTermNode, context, ruleMap);

    if (verified) {
      type = constructor.getType();

      return true;
    }
  });

  return type;
}

function verifyTermNodeAgainstVariables(termNode, context, ruleMap) {
  let type = undefined;

  const termNameTerminalNode = termNameTerminalNodeQuery(termNode);

  if (termNameTerminalNode !== undefined) {
    const termNameTerminalNodeContent = termNameTerminalNode.getContent(),
          name = termNameTerminalNodeContent, ///
          variable = context.findVariableByName(name);

    if (variable !== undefined) {
      type = variable.getType();
    }
  }

  return type;
}

function verifyTermNode(termNode, constructorTermNode, context, ruleMap) {
  const node = termNode, ///
        childNodes = cloneChildNodes(node),
        subExpressions = [],
        constructorNode = constructorTermNode, ///
        constructorChildNodes = cloneChildNodes(constructorNode),
        verified = verifyChildNodes(childNodes, constructorChildNodes, subExpressions, context, ruleMap);

  if (verified) {
    subExpressions.forEach((subExpression) => subExpression.verify(termNode, context, ruleMap, verifyExpression));
  }

  return verified;
}

function verifyNode(node, constructorNode, subExpressions, context, ruleMap) {
  let verified = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const constructorNodeTerminalNode = constructorNode.isTerminalNode();

    if (constructorNodeTerminalNode) {
      const terminalNode = node,  ///
            constructorTerminalNode = constructorNode; ///

      verified = verifyTerminalNode(terminalNode, constructorTerminalNode, context, ruleMap);
    }
  } else {
    const constructorNodeNonTerminalNode = constructorNode.isNonTerminalNode();

    if (constructorNodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            constructorNonTerminalNode = constructorNode; ///

      verified = verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, subExpressions, context, ruleMap);
    }
  }

  return verified;
}

function verifyChildNodes(childNodes, constructorChildNodes, subExpressions, context, ruleMap) {
  let verified = false;

  let childNode = childNodes.shift(),
      constructorChildNode = constructorChildNodes.shift();

  while (childNode !== undefined) {
    if (constructorChildNode === undefined) {
      break;
    }

    const node = childNode, ///
          constructorNode = constructorChildNode; ///

    verified = verifyNode(node, constructorNode, subExpressions, context, ruleMap);

    if (!verified) {
      break;
    }

    childNode = childNodes.shift();
    constructorChildNode = constructorChildNodes.shift();
  }

  if (verified) {
    if (constructorChildNode !== undefined) {
      verified = false;
    }
  }

  return verified;
}

function verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, subExpressions, context, ruleMap) {
  let verified = false;

  const nonTerminalNoderuleName = nonTerminalNode.getRuleName(),
        constructorNonTerminalNodeRuleName = constructorNonTerminalNode.getRuleName();

  if (nonTerminalNoderuleName === constructorNonTerminalNodeRuleName) {
    const ruleName = nonTerminalNoderuleName; ///

    switch (ruleName) {
      case NAME_RULE_NAME : {
        const node = nonTerminalNode, ///
              constructorNode = constructorNonTerminalNode, ///
              nameTerminalNode = nameTerminalNodeQuery(node),
              constructorNameTerminalNode = nameTerminalNodeQuery(constructorNode);

        verified = verifyNameTerminalNode(nameTerminalNode, constructorNameTerminalNode, context, ruleMap);

        break;
      }

      case TERM_RULE_NAME : {
        const termNode = nonTerminalNode,  ///
              constructorTermNode = constructorNonTerminalNode;  ///

        verified = verifyTermNode(termNode, constructorTermNode, context, ruleMap);

        break;
      }

      case EXPRESSION_RULE_NAME : {
        const expressionNode = nonTerminalNode,  ///
              constructorTermNode = constructorNonTerminalNode,  ///
              subExpression = SubExpression.fromExpressionNodeAndConstructorTermNode(expressionNode, constructorTermNode);

        subExpressions.push(subExpression);

        verified = true;  ///

        break;
      }

      default: {
        const node = nonTerminalNode, ///
              childNodes = cloneChildNodes(node),
              constructorNode = constructorNonTerminalNode, ///
              constructorChildNodes = cloneChildNodes(constructorNode);

        verified = verifyChildNodes(childNodes, constructorChildNodes, subExpressions, context, ruleMap);
      }
    }
  }

  return verified;
}

function verifyNameTerminalNode(nameTerminalNode, constructorNameTerminalNode, context, ruleMap) {
  let verified = false;

  const nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent, ///
        variable = context.findVariableByName(name);

  if (variable !== undefined) {
    const constructorNameTerminalNodeContent = constructorNameTerminalNode.getContent(),
          constructorName = constructorNameTerminalNodeContent;  ///

    if (constructorName === name) {
      verified = true;
    } else {
      const name = constructorName, ///
            type = context.findTypeByName(name),
            variableType = variable.getType(),
            variableTypeEqualToOrSubTypeOfType = variableType.isEqualToOrSubTypeOf(type);

      verified = variableTypeEqualToOrSubTypeOfType;  ///
    }
  }

  return verified;
}

function verifyTerminalNode(terminalNode, constructorTerminalNode, context, ruleMap) {
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

function verifyWithRule(node, rule, context, ruleMap) {
  let type = undefined;

  const definitions = rule.getDefinitions();

  definitions.some((definition) => {
    type = verifyWithDefinition(node, definition, context, ruleMap);

    if (type !== undefined) {
      return true;
    }
  });

  return type;
}

function verifyWithDefinition(node, definition, context, ruleMap) {
  let type = undefined;

  const parts = definition.getParts(),
        childNodes = cloneChildNodes(node);

  parts.every((part) => {
    const partType = verifyWithPart(childNodes, part, context, ruleMap);

    if (partType !== undefined) {
      if (type === undefined) {
        type = partType;  ///

        return true;
      }

      if (partType === emptyType) {
        return true;
      }

      const partTypeEqualToOrSubTypeOfType = partType.isEqualToOrSubTypeOf(type);

      if (partTypeEqualToOrSubTypeOfType) {
        return true;
      }

      const typeSubTypeOfPartType = type.isSubTypeOf(partType);

      if (typeSubTypeOfPartType) {
        type = partType;  ///

        return true;
      }

      type = undefined;
    }
  });

  return type;
}

function verifyWithPart(childNodes, part, context, ruleMap) {
  let type = undefined;

  const partTerminalPart = part.isTerminalPart();

  if (partTerminalPart) {
    const terminalPart = part;  ///

    type = verifyWithTerminalPart(childNodes, terminalPart, context, ruleMap);
  } else {
    const nonTerminalPart = part; ///

    type = verifyWithNonTerminalPart(childNodes, nonTerminalPart, context, ruleMap);
  }

  return type;
}

function verifyWithTerminalPart(childNodes, terminalPart, context, ruleMap) {
  let type = undefined;

  const childNode = childNodes.shift();

  if (childNode !== undefined) {
    const childNodeTerminalNode = childNode.isTerminalNode();

    if (childNodeTerminalNode) {
      let terminalNode = childNode; ///

      const significantToken = terminalNode.getSignificantToken(),
            configuration = Configuration.fromSignificantToken(significantToken);

      terminalNode = terminalPart.parse(configuration);

      if (terminalNode !== undefined) {
        type = emptyType; ///
      }
    }
  }

  return type;
}

function verifyWithNonTerminalPart(childNodes, nonTerminalPart, context, ruleMap) {
  let type = undefined;

  const nonTerminalPartType = nonTerminalPart.getType();

  switch (nonTerminalPartType) {
    case RuleNamePartType :
      const ruleNamePart = nonTerminalPart;  ///

      type = verifyWithRuleNamePart(childNodes, ruleNamePart, context, ruleMap);
      break;

    case OptionalPartPartType:
      const optionalPartPart = nonTerminalPart; ///

      type = verifyWithOptionalPartPart(childNodes, optionalPartPart, context, ruleMap);
      break;

    default:

      debugger
  }

  return type;
}

function verifyWithRuleNamePart(childNodes, ruleNamePart, context, ruleMap) {
  let type = undefined;

  const childNode = childNodes.shift();

  if (childNode !== undefined) {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const ruleName = ruleNamePart.getRuleName(),
            nonTerminalNode = childNode,  ///
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

      if (ruleName === nonTerminalNodeRuleName) {
        switch (ruleName) {
          case TERM_RULE_NAME : {
            const termNode = nonTerminalNode;

            type = verifyTerm(termNode, context, ruleMap);

            break;
          }

          case EXPRESSION_RULE_NAME : {
            const expressionNode = nonTerminalNode;  ///

            type = verifyExpression(expressionNode, context, ruleMap);

            break;
          }

          default : {
            const node = nonTerminalNode, ///
                  rule = ruleMap[ruleName] || null;

            type = verifyWithRule(node, rule, context, ruleMap);

            break;
          }
        }
      }
    }
  }

  return type;
}

function verifyWithOptionalPartPart(childNodes, optionalPartPart, context, ruleMap) {
  const part = optionalPartPart.getPart();

  childNodes = ChildNodes.fromChildNodes(childNodes); ///

  let type = verifyWithPart(childNodes, part, context, ruleMap);

  if (type === undefined) {
    childNodes.backtrack();

    type = emptyType; ///
  }

  return type;
}
