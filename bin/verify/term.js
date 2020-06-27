"use strict";

const verifyTermAgainstVariables = require("../verify/termAgainstVariables"),
      verifyTermAgainstConstructors = require("../verify/termAgainstConstructors");

function verifyTerm(termNode, fileContext) {
  debugger

  let type = undefined;

  if (type === undefined) {
    type = verifyTermAgainstVariables(termNode, fileContext);
  }

  if (type === undefined) {
    type = verifyTermAgainstConstructors(termNode, fileContext);
  }

  return type;
}

module.exports = verifyTerm;
