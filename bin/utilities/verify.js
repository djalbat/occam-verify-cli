"use strict";

const parsers = require("occam-parsers");

const Error = require("../error"),
      queries = require("../miscellaneous/queries"),
      emptyType = require("../miscellaneous/emptyType"),
      ruleNames = require("../miscellaneous/ruleNames"),
      nodeUtilities = require("../utilities/node"),
      Configuration = require("../miscellaneous/configuration"),
      ParserConfiguration = require("../miscellaneous/parserConfiguration");

const { partTypes } = parsers,
      { nodeAsString } = nodeUtilities,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes,
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
        nonTerminalNode = expressionNode,  ///
        rule = expressionRule,  ///
        type = verifyWithRule(nonTerminalNode, rule, context, ruleMap);

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
        nonTerminalNode = statementNode,  ///
        rule = statementRule, ///
        type = verifyWithRule(nonTerminalNode, rule, context, ruleMap),
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
  let verified = false;

  const nonTerminalNode = termNode, ///
        constructorNonTerminalNode = constructorTermNode, ///
        configuration = Configuration.fromNonTerminalNode(nonTerminalNode),
        constructorConfiguration = Configuration.fromNonTerminalNode(constructorNonTerminalNode);

  let nextChildNode = configuration.getNextChildNode(),
      nextConstructorChildNode = constructorConfiguration.getNextChildNode();

  while (nextChildNode !== null) {
    if (nextConstructorChildNode === null) {
      break;
    }

    const node = nextChildNode,  ///
          constructorNode = nextConstructorChildNode;  ///

    verified = verifyNode(node, constructorNode, context, ruleMap);

    if (!verified) {
      break;
    }

    nextChildNode = configuration.getNextChildNode();
    nextConstructorChildNode = constructorConfiguration.getNextChildNode();
  }

  if (nextConstructorChildNode !== null) {
    verified = false;
  }

  return verified;
}

function verifyNode(node, constructorNode, context, ruleMap) {
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

      verified = verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, context, ruleMap);
    }
  }

  return verified;
}

function verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, context, ruleMap) {
  let verified = false;

  const nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
        constructorNonTerminalNodeRuleName = constructorNonTerminalNode.getRuleName();

  if (nonTerminalNodeRuleName === constructorNonTerminalNodeRuleName) {
    const ruleName = nonTerminalNodeRuleName; ///

    switch (ruleName) {
      case NAME_RULE_NAME: {
        const node = nonTerminalNode, ///
              constructorNode = constructorNonTerminalNode, ///
              nameTerminalNode = nameTerminalNodeQuery(node),
              constructorNameTerminalNode = nameTerminalNodeQuery(constructorNode);

        verified = verifyNameTerminalNode(nameTerminalNode, constructorNameTerminalNode, context, ruleMap);

        break;
      }

      case TERM_RULE_NAME: {
        const termNode = nonTerminalNode,  ///
              constructorTermNode = constructorNonTerminalNode;  ///

        verified = verifyTermNode(termNode, constructorTermNode, context, ruleMap);

        break;
      }

      case EXPRESSION_RULE_NAME: {
        const expressionNode = nonTerminalNode,  ///
              constructorTermNode = constructorNonTerminalNode;  ///

        debugger

        break;
      }

      default: {
        const node = nonTerminalNode, ///
              childNodes = cloneNodeChildNodes(node),
              constructorNode = constructorNonTerminalNode, ///
              constructorChildNodes = cloneNodeChildNodes(constructorNode);

        verified = verifyChildNodes(childNodes, constructorChildNodes, context, ruleMap);
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

function verifyWithRule(nonTerminalNode, rule, context, ruleMap) {
  let type = undefined;

  const definitions = rule.getDefinitions(),
        configuration = Configuration.fromNonTerminalNode(nonTerminalNode);

  definitions.some((definition) => {
    const savedIndex = configuration.getSavedIndex();

    type = verifyWithDefinition(definition, context, ruleMap, configuration);

    if (type !== undefined) {
      return true;
    }

    configuration.backtrack(savedIndex);
  });

  return type;
}

function verifyWithDefinition(definition, context, ruleMap, configuration) {
  let type = undefined;

  const parts = definition.getParts();

  parts.every((part) => {
    const partType = verifyWithPart(part, context, ruleMap, configuration);

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

  const nextChildNode = configuration.getNextChildNode();

  if (nextChildNode !== null) {
    type = undefined;
  }

  return type;
}

function verifyWithPart(part, context, ruleMap, configuration) {
  let type = undefined;

  const partTerminalPart = part.isTerminalPart();

  if (partTerminalPart) {
    const terminalPart = part;  ///

    type = verifyWithTerminalPart(terminalPart, context, ruleMap, configuration);
  } else {
    const nonTerminalPart = part; ///

    type = verifyWithNonTerminalPart(nonTerminalPart, context, ruleMap, configuration);
  }

  return type;
}

function verifyWithTerminalPart(terminalPart, context, ruleMap, configuration) {
  let type = undefined;

  const savedIndex = configuration.getSavedIndex(),
        nextChildNode = configuration.getNextChildNode();

  if (nextChildNode !== null) {
    const childNode = nextChildNode,  ///
          childNodeTerminalNode = childNode.isTerminalNode();

    if (childNodeTerminalNode) {
      let terminalNode = childNode; ///

      const terminalPartNoWhitespacePart = terminalPart.isNoWhitespacePart();

      if (terminalPartNoWhitespacePart) {
        const terminalNodeNoWhitespaceNode = terminalNode.isNoWhitespaceNode();

        if (terminalNodeNoWhitespaceNode) {
          type = emptyType; ///
        }
      } else {
        const parserConfiguration = ParserConfiguration.fromTerminalNode(terminalNode),
              configuration = parserConfiguration;  ///

        terminalNode = terminalPart.parse(configuration);

        if (terminalNode !== null) {
          type = emptyType; ///
        }
      }
    }
  }

  if (type === undefined) {
    configuration.backtrack(savedIndex);
  }

  return type;
}

function verifyWithNonTerminalPart(nonTerminalPart, context, ruleMap, configuration) {
  let type = undefined;

  const nonTerminalPartType = nonTerminalPart.getType();

  switch (nonTerminalPartType) {
    case RuleNamePartType:
      const ruleNamePart = nonTerminalPart;  ///

      type = verifyWithRuleNamePart(ruleNamePart, context, ruleMap, configuration);
      break;

    case OptionalPartPartType:
      const optionalPartPart = nonTerminalPart; ///

      type = verifyWithOptionalPartPart(optionalPartPart, context, ruleMap, configuration);
      break;

    default:

      debugger
  }

  return type;
}

function verifyWithRuleNamePart(ruleNamePart, context, ruleMap, configuration) {
  let type = undefined;

  const nextChildNode = configuration.getNextChildNode();

  if (nextChildNode !== null) {
    const childNode = nextChildNode,  ///
          childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const ruleName = ruleNamePart.getRuleName(),
            nonTerminalNode = childNode,  ///
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

      if (ruleName === nonTerminalNodeRuleName) {
        switch (ruleName) {
          case TERM_RULE_NAME: {
            const termNode = nonTerminalNode;

            type = verifyTerm(termNode, context, ruleMap);

            break;
          }

          case EXPRESSION_RULE_NAME: {
            const expressionNode = nonTerminalNode;  ///

            type = verifyExpression(expressionNode, context, ruleMap);

            break;
          }

          default: {
            const rule = ruleMap[ruleName] || null;

            type = verifyWithRule(nonTerminalNode, rule, context, ruleMap);

            break;
          }
        }
      }
    }
  }

  return type;
}

function verifyWithOptionalPartPart(optionalPartPart, context, ruleMap, configuration) {
  const part = optionalPartPart.getPart(),
        savedIndex = configuration.getSavedIndex();

  let type = verifyWithPart(part, context, ruleMap, configuration);

  if (type === undefined) {
    configuration.backtrack(savedIndex);

    type = emptyType; ///
  }

  return type;
}
