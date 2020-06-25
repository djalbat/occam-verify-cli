"use strict";

const parsers = require("occam-parsers");

const Error = require("../error"),
      queries = require("../miscellaneous/queries"),
      ruleNames = require("../miscellaneous/ruleNames"),
      nodeUtilities = require("../utilities/node"),
      ParserContext = require("../context/parser"),
      NonTerminalNodeContext = require("../context/nonTerminalNode");

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

function verifyTerm(termNode, fileContext) {
  let type = undefined;

  if (type === undefined) {
    type = verifyTermNodeAgainstConstructors(termNode, fileContext);
  }

  if (type === undefined) {
    type = verifyTermNodeAgainstVariables(termNode, fileContext);
  }

  return type;
}

function verifyExpression(expressionNode, fileContext) {
  const expressionRule = ruleMap[EXPRESSION_RULE_NAME],
        nonTerminalNode = expressionNode,  ///
        rule = expressionRule,  ///
        type = verifyWithRule(nonTerminalNode, rule, fileContext);

  if (type === undefined) {
    const node = expressionNode,  ///
          expressionString = nodeAsString(expressionNode),
          message = `The expression '${expressionString}' cannot be verified.`;

    throw new Error(node, message);
  }

  return type;
}

function verifyStatement(statementNode, fileContext) {
  const statementRule = ruleMap[STATEMENT_RULE_NAME],
        nonTerminalNode = statementNode,  ///
        rule = statementRule, ///
        type = verifyWithRule(nonTerminalNode, rule, fileContext),
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

function verifyTermNodeAgainstConstructors(termNode, fileContext) {
  let type = undefined;

  const constructors = context.getConstructors();

  constructors.some((constructor) => {
    const constructorTermNode = constructor.getTermNode(),
          verified = verifyTermNode(termNode, constructorTermNode, fileContext);

    if (verified) {
      type = constructor.getType();

      return true;
    }
  });

  return type;
}

function verifyTermNodeAgainstVariables(termNode, fileContext) {
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

function verifyTermNode(termNode, constructorTermNode, fileContext) {
  let verified = false;

  const nonTerminalNode = termNode, ///
        constructorNonTerminalNode = constructorTermNode, ///
        nonTerminalNodeContext = NonTerminalNodeContext.fromNonTerminalNode(nonTerminalNode),
        constructorNonTerminalNodeContext = NonTerminalNodeContext.fromNonTerminalNode(constructorNonTerminalNode);

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

  if (nextConstructorChildNode !== undefined) {
    verified = false;
  }

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

function verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, fileContext) {
  let verified = false;

  const nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
        constructorNonTerminalNodeRuleName = constructorNonTerminalNode.getRuleName();

  if (nonTerminalNodeRuleName === constructorNonTerminalNodeRuleName) {
    const ruleName = nonTerminalNodeRuleName; ///

    switch (ruleName) {
      case NAME_RULE_NAME: {
        const nameNode = nonTerminalNode, ///
              constructorNameNode = constructorNonTerminalNode; ///

        verified = verifyNameNode(nameNode, constructorNameNode, fileContext);

        break;
      }

      case TERM_RULE_NAME: {
        const termNode = nonTerminalNode,  ///
              constructorTermNode = constructorNonTerminalNode;  ///

        verified = verifyTermNode(termNode, constructorTermNode, fileContext);

        break;
      }

      case EXPRESSION_RULE_NAME: {
        const expressionNode = nonTerminalNode,  ///
              constructorTermNode = constructorNonTerminalNode;  ///

        debugger

        break;
      }

      default: {
        const rule = ruleMap[ruleName];

        verified = verifyWithRule(nonTerminalNode, rule, fileContext);
      }
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

function verifyWithRule(nonTerminalNode, rule, fileContext) {
  let verified = false;

  const definitions = rule.getDefinitions(),
        nonTerminalNodeContext = NonTerminalNodeContext.fromNonTerminalNode(nonTerminalNode);

  definitions.some((definition) => {
    const savedIndex = nonTerminalNodeContext.getSavedIndex();

    verified = verifyWithDefinition(definition, fileContext, nonTerminalNodeContext);

    if (verified) {
      return true;
    }

    nonTerminalNodeContext.backtrack(savedIndex);
  });

  return verified;
}

function verifyWithDefinition(definition, fileContext, nonTerminalNodeContext) {
  let verified = false;

  const parts = definition.getParts();

  parts.every((part) => {
    verified = verifyWithPart(part, fileContext, nonTerminalNodeContext);

    if (verified) {
      return true;
    }
  });

  const nextChildNode = nonTerminalNodeContext.getNextChildNode();

  if (nextChildNode !== undefined) {
    verified = false;
  }

  return verified;
}

function verifyWithPart(part, fileContext, nonTerminalNodeContext) {
  let verified;

  const partTerminalPart = part.isTerminalPart();

  if (partTerminalPart) {
    const terminalPart = part;  ///

    verified = verifyWithTerminalPart(terminalPart, fileContext, nonTerminalNodeContext);
  } else {
    const nonTerminalPart = part; ///

    verified = verifyWithNonTerminalPart(nonTerminalPart, fileContext, nonTerminalNodeContext);
  }

  return verified;
}

function verifyWithTerminalPart(terminalPart, fileContext, nonTerminalNodeContext) {
  let verified = false;

  const savedIndex = nonTerminalNodeContext.getSavedIndex(),
        nextChildNode = nonTerminalNodeContext.getNextChildNode();

  if (nextChildNode !== undefined) {
    const childNode = nextChildNode,  ///
          childNodeTerminalNode = childNode.isTerminalNode();

    if (childNodeTerminalNode) {
      let terminalNode = childNode; ///

      const terminalPartNoWhitespacePart = terminalPart.isNoWhitespacePart();

      if (terminalPartNoWhitespacePart) {
        const terminalNodeNoWhitespaceNode = terminalNode.isNoWhitespaceNode();

        if (terminalNodeNoWhitespaceNode) {
          verified = true;
        }
      } else {
        const parserContext = ParserContext.fromTerminalNode(terminalNode),
              context = parserContext;  ///

        terminalNode = terminalPart.parse(context);

        if (terminalNode !== null) {
          verified = true;
        }
      }
    }
  }

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithNonTerminalPart(nonTerminalPart, fileContext, nonTerminalNodeContext) {
  let verified = false;

  const nonTerminalPartType = nonTerminalPart.getType();

  switch (nonTerminalPartType) {
    case RuleNamePartType:
      const ruleNamePart = nonTerminalPart;  ///

      verified = verifyWithRuleNamePart(ruleNamePart, fileContext, nonTerminalNodeContext);
      break;

    case OptionalPartPartType:
      const optionalPartPart = nonTerminalPart; ///

      verified = verifyWithOptionalPartPart(optionalPartPart, fileContext, nonTerminalNodeContext);
      break;

    case GroupOfPartsPartType:
      const groupOfPartsPart = nonTerminalPart; ///

      verified = verifyWithGroupOfPartsPart(groupOfPartsPart, fileContext, nonTerminalNodeContext);
      break;

    case ChoiceOfPartsPartType:
      const choiceOfPartsPart = nonTerminalPart; ///

      verified = verifyWithChoiceOfPartsPart(choiceOfPartsPart, fileContext, nonTerminalNodeContext);
      break;

    case ZeroOrMorePartsPartType:
      const zeroOrMorePartsPart = nonTerminalPart; ///

      verified = verifyWithZeroOrMorePartsPart(zeroOrMorePartsPart, fileContext, nonTerminalNodeContext);
      break;

    default:

      debugger
  }

  return verified;
}

function verifyWithRuleNamePart(ruleNamePart, fileContext, nonTerminalNodeContext) {
  let verified = false;

  const nextChildNode = nonTerminalNodeContext.getNextChildNode();

  if (nextChildNode !== undefined) {
    const childNode = nextChildNode,  ///
          childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const ruleName = ruleNamePart.getRuleName(),
            nonTerminalNode = childNode,  ///
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

      if (ruleName === nonTerminalNodeRuleName) {
        switch (ruleName) {
          case TERM_RULE_NAME: {
            const termNode = nonTerminalNode, ///
                  type = verifyTerm(termNode, fileContext);

            verified = (type !== undefined);

            break;
          }

          case EXPRESSION_RULE_NAME: {
            const expressionNode = nonTerminalNode, ///
                  type = verifyExpression(expressionNode, fileContext);

            verified = (type !== undefined);

            break;
          }

          default: {
            const rule = ruleMap[ruleName];

            verified = verifyWithRule(nonTerminalNode, rule, fileContext);

            break;
          }
        }
      }
    }
  }

  return verified;
}

function verifyWithOptionalPartPart(optionalPartPart, fileContext, nonTerminalNodeContext) {
  const part = optionalPartPart.getPart(),
        savedIndex = nonTerminalNodeContext.getSavedIndex();

  let verified = verifyWithPart(part, fileContext, nonTerminalNodeContext);

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);

    verified = true;
  }

  return verified;
}

function verifyWithGroupOfPartsPart(groupOfPartsPart, fileContext, nonTerminalNodeContext) {
  const parts = groupOfPartsPart.getParts(),
        savedIndex = nonTerminalNodeContext.getSavedIndex(),
        verified = parts.every((part) => verifyWithPart(part, fileContext, nonTerminalNodeContext));

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithChoiceOfPartsPart(choiceOfParts, fileContext, nonTerminalNodeContext) {
  const parts = choiceOfParts.getParts(),
        savedIndex = nonTerminalNodeContext.getSavedIndex(),
        verified = parts.some((part) => verifyWithPart(part, fileContext, nonTerminalNodeContext));

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithZeroOrMorePartsPart(zeroOrMorePartsPart, fileContext, nonTerminalNodeContext) {
  let verified = true;

  const part = zeroOrMorePartsPart.getPart();

  while (verified === true) {
    const savedIndex = nonTerminalNodeContext.getSavedIndex();

    verified = verifyWithPart(part, fileContext, nonTerminalNodeContext);

    if (!verified) {
      nonTerminalNodeContext.backtrack(savedIndex);
    }
  }

  verified = true;

  return verified;
}
