"use strict";

const queries = require("../miscellaneous/queries"),
      verifyTermAgainstConstructor = require("../verify/verifyTermAgainstConstructor");

const { termNameTerminalNodeQuery } = queries;

function verifyTerm(termNode, fileContext) {
  let type = undefined;

  if (type === undefined) {
    type = verifyTermNodeAgainstVariables(termNode, fileContext);
  }

  if (type === undefined) {
    type = verifyTermNodeAgainstConstructors(termNode, fileContext);
  }

  return type;
}

module.exports = verifyTerm;

function verifyTermNodeAgainstVariables(termNode, fileContext) {
  let type = undefined;

  const termNameTerminalNode = termNameTerminalNodeQuery(termNode);

  if (termNameTerminalNode !== undefined) {
    const termNameTerminalNodeContent = termNameTerminalNode.getContent(),
          name = termNameTerminalNodeContent, ///
          variable = fileContext.findVariableByName(name);

    if (variable !== undefined) {
      type = variable.getType();
    }
  }

  return type;
}

function verifyTermNodeAgainstConstructors(termNode, fileContext) {
  let type = undefined;

  const constructors = fileContext.getConstructors();

  constructors.some((constructor) => {
    const constructorTermNode = constructor.getTermNode(),
          verified = verifyTermAgainstConstructor(termNode, constructorTermNode, fileContext);

    if (verified) {
      type = constructor.getType();

      return true;
    }
  });

  return type;
}
