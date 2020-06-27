"use strict";

const queries = require("../miscellaneous/queries");

const { termNameTerminalNodeQuery } = queries;

function verifyTermAgainstVariables(termNode, fileContext) {
  let variable = undefined;

  const termNameTerminalNode = termNameTerminalNodeQuery(termNode);

  if (termNameTerminalNode !== undefined) {
    const termNameTerminalNodeContent = termNameTerminalNode.getContent(),
          name = termNameTerminalNodeContent; ///

    variable = fileContext.findVariableByName(name);
  }

  return variable;
}

module.exports = verifyTermAgainstVariables;
