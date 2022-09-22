"use strict";

const log = require("../log"),
      verifyTermAsVariable = require("../verify/termAsVariable"),
      verifyTermAgainstConstructors = require("../verify/termAgainstConstructors");

const { nodeAsString } = require("../utilities/node");

function verifyTerm(termNode, types, supposition, context) {
  let termVerified = false;

  const termVerifiedAsVariable = verifyTermAsVariable(termNode, types, supposition, context);

  if (termVerifiedAsVariable) {
    termVerified = true;
  } else {
    if (supposition) {
      const termString = nodeAsString(termNode);

      log.error(`The ${termString} term can only be a variable in a supposition.`)
    } else {
      const constructors = context.getConstructors(),
            termVerifiedAgainstConstructors = verifyTermAgainstConstructors(termNode, types, constructors, context);

      termVerified = termVerifiedAgainstConstructors;
    }
  }

  return termVerified;
}

module.exports = verifyTerm;
