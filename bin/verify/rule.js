"use strict";

const parsers = require("occam-parsers");

const Error = require("../error"),
      queries = require("../miscellaneous/queries"),
      TermNode = require("../miscellaneous/termNode"),
			ruleNames = require("../miscellaneous/ruleNames"),
      ParserContext = require("../context/parser"),
      NonTerminalNodeContext = require("../context/nonTerminalNode"),
      verifyTermAgainstConstructors = require("../verify/termAgainstConstructors");

const { partTypes } = parsers,
      { nameTerminalNodeQuery } = queries,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes,
      { NAME_RULE_NAME, TERM_RULE_NAME } = ruleNames;

function verifyRule(rule, nonTerminalNode, fileContext) {
  let verified = false;

  const definitions = rule.getDefinitions(),
      nonTerminalNodeContext = NonTerminalNodeContext.fromFileContextAndNonTerminalNode(fileContext, nonTerminalNode);

  definitions.some((definition) => {
    const savedIndex = nonTerminalNodeContext.getSavedIndex();

    verified = verifyDefinition(definition, nonTerminalNodeContext);

    if (verified) {
      return true;
    }

    nonTerminalNodeContext.backtrack(savedIndex);
  });

  return verified;
}

module.exports = verifyRule;

function verifyDefinition(definition, nonTerminalNodeContext) {
  let verified = false;

  const parts = definition.getParts();

  parts.every((part) => {
    verified = verifyPart(part, nonTerminalNodeContext);

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

function verifyPart(part, nonTerminalNodeContext) {
  let verified;

  const partTerminalPart = part.isTerminalPart();

  if (partTerminalPart) {
    const terminalPart = part;  ///

    verified = verifyTerminalPart(terminalPart, nonTerminalNodeContext);
  } else {
    const nonTerminalPart = part; ///

    verified = verifyNonTerminalPart(nonTerminalPart, nonTerminalNodeContext);
  }

  return verified;
}

function verifyTerminalPart(terminalPart, nonTerminalNodeContext) {
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

function verifyNonTerminalPart(nonTerminalPart, nonTerminalNodeContext) {
  let verified = false;

  const nonTerminalPartType = nonTerminalPart.getType();

  switch (nonTerminalPartType) {
    case RuleNamePartType: {
      const ruleNamePart = nonTerminalPart;  ///

      verified = verifyRuleNamePart(ruleNamePart, nonTerminalNodeContext);
      break;
    }

    case OptionalPartPartType: {
      const optionalPartPart = nonTerminalPart; ///

      verified = verifyOptionalPartPart(optionalPartPart, nonTerminalNodeContext);
      break;
    }

    case GroupOfPartsPartType: {
      const groupOfPartsPart = nonTerminalPart; ///

      verified = verifyGroupOfPartsPart(groupOfPartsPart, nonTerminalNodeContext);
      break;
    }

    case ChoiceOfPartsPartType: {
      const choiceOfPartsPart = nonTerminalPart; ///

      verified = verifyChoiceOfPartsPart(choiceOfPartsPart, nonTerminalNodeContext);
      break;
    }

    case OneOrMorePartsPartType: {
      const oneOrMorePartsPart = nonTerminalPart; ///

      verified = verifyOneOrMorePartsPart(oneOrMorePartsPart, nonTerminalNodeContext);
      break;
    }

    case ZeroOrMorePartsPartType: {
      const zeroOrMorePartsPart = nonTerminalPart; ///

      verified = verifyZeroOrMorePartsPart(zeroOrMorePartsPart, nonTerminalNodeContext);
      break;
    }
  }

  return verified;
}

function verifyOptionalPartPart(optionalPartPart, nonTerminalNodeContext) {
  let verified;

  const part = optionalPartPart.getPart(),
      savedIndex = nonTerminalNodeContext.getSavedIndex();

  verified = verifyPart(part, nonTerminalNodeContext);

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);

    verified = true;
  }

  return verified;
}

function verifyGroupOfPartsPart(groupOfPartsPart, nonTerminalNodeContext) {
  const parts = groupOfPartsPart.getParts(),
      savedIndex = nonTerminalNodeContext.getSavedIndex(),
      verified = parts.every((part) => verifyPart(part, nonTerminalNodeContext));

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);
  }

  return verified;
}

function verifyChoiceOfPartsPart(choiceOfParts, nonTerminalNodeContext) {
  const parts = choiceOfParts.getParts(),
      savedIndex = nonTerminalNodeContext.getSavedIndex(),
      verified = parts.some((part) => verifyPart(part, nonTerminalNodeContext));

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);
  }

  return verified;
}

function verifyOneOrMorePartsPart(oneOrMorePartsPart, nonTerminalNodeContext) {
  let verified;

  const part = oneOrMorePartsPart.getPart();

  verified = verifyPart(part, nonTerminalNodeContext);

  if (verified) {
    while (verified) {
      const savedIndex = nonTerminalNodeContext.getSavedIndex();

      verified = verifyPart(part, nonTerminalNodeContext);

      if (!verified) {
        nonTerminalNodeContext.backtrack(savedIndex);
      }
    }

    verified = true;
  }

  return verified;
}

function verifyZeroOrMorePartsPart(zeroOrMorePartsPart, nonTerminalNodeContext) {
  let verified = true;

  const part = zeroOrMorePartsPart.getPart();

  while (verified) {
    const savedIndex = nonTerminalNodeContext.getSavedIndex();

    verified = verifyPart(part, nonTerminalNodeContext);

    if (!verified) {
      nonTerminalNodeContext.backtrack(savedIndex);
    }
  }

  verified = true;

  return verified;
}

function verifyRuleNamePart(ruleNamePart, nonTerminalNodeContext) {
  let verified = false;

  const ruleName = ruleNamePart.getRuleName(),
      rulePermitted = nonTerminalNodeContext.isRulePermittedByRuleName(ruleName);

  if (rulePermitted) {
    const nextChildNode = nonTerminalNodeContext.getNextChildNode();

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

              verified = verifyNameRule(nameRule, nameNode, fileContext);
              break;
            }

            case TERM_RULE_NAME: {
              const termNode = nonTerminalNode, ///
                  constructor = verifyTermAgainstConstructors(termNode, fileContext);

              if (constructor === undefined) {
                verified = verifyRule(rule, nonTerminalNode, fileContext);
              } else {
                const type = constructor.getType();

                if (type === undefined) {
                  verified = true;
                }
              }
              break;
            }

            default: {
              const ruleNameTermRuleName = nonTerminalNodeContext.isRuleNameTermRuleName(ruleName);

              if (ruleNameTermRuleName) {
                const termNode = TermNode.fromNonTerminalNode(nonTerminalNode),
                    constructor = verifyTermAgainstConstructors(termNode, fileContext);

                if (constructor === undefined) {
                  verified = verifyRule(rule, nonTerminalNode, fileContext);
                } else {
                  const type = constructor.getType();

                  if (type === undefined) {
                    verified = true;
                  }
                }
              } else {
                verified = verifyRule(rule, nonTerminalNode, fileContext);
              }
              break;
            }
          }
        }
      }
    }
  }

  return verified;
}

function verifyNameRule(nameRule, nameNode, fileContext) {
  const nameTerminalNode = nameTerminalNodeQuery(nameNode),
      nameTerminalNodeContent = nameTerminalNode.getContent(),
      name = nameTerminalNodeContent, ///
      typePresent = fileContext.isTypePresentByName(name),
      verified = typePresent; ///

  if (!typePresent) {
    const node = nameNode, ///
        message = `The '${name}' type is missing.`;

    throw new Error(node, message);
  }

  return verified;
}
