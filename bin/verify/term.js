"use strict";

const { arrayUtilities, loggingUtilities } = require("necessary/lib/main");

const verifyTermAsVariable = require("../verify/termAsVariable");

const { nodeAsString } = require("../utilities/string"),
      { ARGUMENT_RULE_NAME } = require("../ruleNames"),
      { nodeQuery, typeNameFromTypeNode } = require("../utilities/query");

const { log } = loggingUtilities,
      { first } = arrayUtilities;

const termNodeQuery = nodeQuery("/argument/term!"),
      typeNodeQuery = nodeQuery("/argument/type!")

function verifyTerm(termNode, types, values, context) {
  let termVerified = false;

  const termVerifiedAsVariable = verifyTermAsVariable(termNode, types, values, context);

  if (termVerifiedAsVariable) {
    termVerified = true;
  } else {
    const inAntecedent = context.isInAntecedent();

    if (inAntecedent) {
      const termString = nodeAsString(termNode);

      log.error(`The ${termString} term can only be a variable in an antecedent.`)
    } else {
      const constructors = context.getConstructors(),
            constructor = constructors.find((constructor) => {
              const termVerifiedAgainstConstructor = verifyTermAgainstConstructor(termNode, constructor, context);

              if (termVerifiedAgainstConstructor) {
                return true;
              }
            }) || null;

      if (constructor !== null) {
        const type = constructor.getType(),
              value = termNode; ///

        types.push(type);

        values.push(value);

        termVerified = true;
      }
    }
  }

  return termVerified;
}

module.exports = verifyTerm;

function verifyTermAgainstConstructor(termNode, constructor, context) {
  const constructorTermNode = constructor.getTermNode(),
        node = termNode,  ///
        constructorNode = constructorTermNode, ///
        nodeVerified = verifyNode(node, constructorNode, context),
        termVerifiedAgainstConstructor = nodeVerified;  ///

  return termVerifiedAgainstConstructor;
}

function verifyNode(node, constructorNode, context) {
  let nodeVerified;

  const nodeTerminalNode = node.isTerminalNode(),
        constructorNodeTerminalNode = constructorNode.isTerminalNode();

  if (nodeTerminalNode === constructorNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            constructorTerminalNode = constructorNode,  ///
            terminalNodeVerified = verifyTerminalNode(terminalNode, constructorTerminalNode, context);

      nodeVerified = terminalNodeVerified;  ///
    } else {
      const nonTerminalNode = node, ///
            constructorNonTerminalNode = constructorNode,  ///
            nonTerminalNodeVerified = verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, context);

      nodeVerified = nonTerminalNodeVerified; ///
    }
  }

  return nodeVerified;
}

function verifyChildNodes(childNodes, constructorChildNodes, context) {
  let childNodesVerified = false;

  const childNodesLength = childNodes.length,
        constructorChildNodesLength = constructorChildNodes.length;

  if (childNodesLength === constructorChildNodesLength) {
    childNodesVerified = childNodes.every((childNode, index) => {
      const constructorChildNode = constructorChildNodes[index],
            node = childNode, ///
            constructorNode = constructorChildNode,  ///
            nodeVerified = verifyNode(node, constructorNode, context);

      if (nodeVerified) {
        return true;
      }
    });
  }

  return childNodesVerified;
}

function verifyTerminalNode(terminalNode, constructorTerminalNode, context) {
  let terminalNodeVerified = false;

  const matches = terminalNode.match(constructorTerminalNode);

  if (matches) {
    terminalNodeVerified = true;
  }

  return terminalNodeVerified;
}

function verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, context) {
  let nonTerminalNodeVerified = false;

  const ruleName = nonTerminalNode.getRuleName(),
        constructorRuleName = constructorNonTerminalNode.getRuleName();

  if (ruleName === constructorRuleName) {
    switch (ruleName) {
      case ARGUMENT_RULE_NAME: {
        const argumentNode = nonTerminalNode, ///
              constructorArgumentNode = constructorNonTerminalNode, ///
              argumentNodeVerified = verifyArgumentNode(argumentNode, constructorArgumentNode, context);

        nonTerminalNodeVerified = argumentNodeVerified; ///

        break;
      }

      default: {
        const childNodes = nonTerminalNode.getChildNodes(),
              constructorChildNodes = constructorNonTerminalNode.getChildNodes(),
              childNodesVerified = verifyChildNodes(childNodes, constructorChildNodes, context);

        nonTerminalNodeVerified = childNodesVerified; ///

        break;
      }
    }
  }

  return nonTerminalNodeVerified;
}

function verifyArgumentNode(argumentNode, constructorArgumentNode, context) {
  let argumentNodeVerified = false;

  const termNode = termNodeQuery(argumentNode);

  if (termNode === null) {
    const argumentString = nodeAsString(argumentNode);

    log.error(`The ${argumentString} argument should be a term, not a type`);
  } else {
    const types = [],
          values = [],
          termVerified = verifyTerm(termNode, types, values, context);

    if (termVerified) {
      const firstType = first(types),
            termType = firstType, ///
            typeNode = typeNodeQuery(constructorArgumentNode),
            typeName = typeNameFromTypeNode(typeNode),
            type = context.findTypeByTypeName(typeName);

      if (termType === type) {
        argumentNodeVerified = true;
      }
    }
  }

  return argumentNodeVerified;
}
