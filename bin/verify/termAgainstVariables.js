"use strict";

const queries = require("../miscellaneous/queries");

const { termNameTerminalNodeQuery } = queries;

function verifyNodeAgainstVariables(termNode, fileContext) {
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

module.exports = verifyNodeAgainstVariables;
