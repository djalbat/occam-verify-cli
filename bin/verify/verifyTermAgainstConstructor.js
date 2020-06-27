"use strict";

const parsers = require("occam-parsers");

const ruleNames = require("../miscellaneous/ruleNames"),
      ParserContext = require("../context/parser"),
      NonTerminalNodeContext = require("../context/nonTerminalNode");

const { partTypes } = parsers,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes,
      { NAME_RULE_NAME, TERM_RULE_NAME } = ruleNames;

function verifyTermAgainstConstructor(termNode, constructorTermNode, fileContext) {
  return false;

  const nonTerminalNode = termNode, ///
        constructorNonTerminalNode = constructorTermNode, ///
        verified = verifyNonTerminalAgainstConstructor(nonTerminalNode, constructorNonTerminalNode, fileContext);

  return verified;
}

module.exports = verifyTermAgainstConstructor;

function verifyWithPart(part, nonTerminalNodeContext) {
  let verified;

  const partTerminalPart = part.isTerminalPart();

  if (partTerminalPart) {
    const terminalPart = part;  ///

    verified = verifyWithTerminalPart(terminalPart, nonTerminalNodeContext);
  } else {
    const nonTerminalPart = part; ///

    verified = verifyWithNonTerminalPart(nonTerminalPart, nonTerminalNodeContext);
  }

  return verified;
}

function verifyWithTerminalPart(terminalPart, nonTerminalNodeContext) {
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

function verifyWithNonTerminalPart(nonTerminalPart, nonTerminalNodeContext) {
  let verified = false;

  const nonTerminalPartType = nonTerminalPart.getType();

  switch (nonTerminalPartType) {
    case RuleNamePartType:
      const ruleNamePart = nonTerminalPart;  ///

      verified = verifyWithRuleNamePart(ruleNamePart, nonTerminalNodeContext);
      break;

    case OptionalPartPartType:
      const optionalPartPart = nonTerminalPart; ///

      verified = verifyWithOptionalPartPart(optionalPartPart, nonTerminalNodeContext);
      break;

    case GroupOfPartsPartType:
      const groupOfPartsPart = nonTerminalPart; ///

      verified = verifyWithGroupOfPartsPart(groupOfPartsPart, nonTerminalNodeContext);
      break;

    case ChoiceOfPartsPartType:
      const choiceOfPartsPart = nonTerminalPart; ///

      verified = verifyWithChoiceOfPartsPart(choiceOfPartsPart, nonTerminalNodeContext);
      break;

    case ZeroOrMorePartsPartType:
      const zeroOrMorePartsPart = nonTerminalPart; ///

      verified = verifyWithZeroOrMorePartsPart(zeroOrMorePartsPart, nonTerminalNodeContext);
      break;

    default:

      debugger
  }

  return verified;
}

function verifyWithOptionalPartPart(optionalPartPart, nonTerminalNodeContext) {
  const part = optionalPartPart.getPart(),
        savedIndex = nonTerminalNodeContext.getSavedIndex();

  let verified = verifyWithPart(part, nonTerminalNodeContext);

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);

    verified = true;
  }

  return verified;
}

function verifyWithGroupOfPartsPart(groupOfPartsPart, nonTerminalNodeContext) {
  const parts = groupOfPartsPart.getParts(),
        savedIndex = nonTerminalNodeContext.getSavedIndex(),
        verified = parts.every((part) => verifyWithPart(part, nonTerminalNodeContext));

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithChoiceOfPartsPart(choiceOfParts, nonTerminalNodeContext) {
  const parts = choiceOfParts.getParts(),
        savedIndex = nonTerminalNodeContext.getSavedIndex(),
        verified = parts.some((part) => verifyWithPart(part, nonTerminalNodeContext));

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithZeroOrMorePartsPart(zeroOrMorePartsPart, nonTerminalNodeContext) {
  let verified = true;

  const part = zeroOrMorePartsPart.getPart();

  while (verified === true) {
    const savedIndex = nonTerminalNodeContext.getSavedIndex();

    verified = verifyWithPart(part, nonTerminalNodeContext);

    if (!verified) {
      nonTerminalNodeContext.backtrack(savedIndex);
    }
  }

  verified = true;

  return verified;
}

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

  return verified;
}

function verifyWithRuleNamePart(ruleNamePart, nonTerminalNodeContext) {
  let verified = false;

  const savedIndex = nonTerminalNodeContext.getSavedIndex(),
        nextChildNode = nonTerminalNodeContext.getNextChildNode();

  if (nextChildNode !== undefined) {
    const childNode = nextChildNode,  ///
          childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const ruleName = ruleNamePart.getRuleName(),
            nonTerminalNode = childNode,  ///
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

      if (ruleName === nonTerminalNodeRuleName) {
        const rule = nonTerminalNodeContext.findRuleByRuleName(ruleName),
              fileContext = nonTerminalNodeContext.getFileContext();

        switch (ruleName) {
          case NAME_RULE_NAME: {
            const nameNode = nonTerminalNode, ///
                  nameRule = rule;  ///

            verified = verifyWithNameRule(nameNode, nameRule, fileContext);
            break;
          }

          case TERM_RULE_NAME: {
            const termNode = nonTerminalNode, ///
                  type = verifyTerm(termNode, fileContext);

            verified = (type !== undefined);
            break;
          }
        }

        if (!verified) {
          debugger
        }
      }
    }
  }

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);
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
