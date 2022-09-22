"use strict";

const verifyTermAgainstConstructor = require("../verify/termAgainstConstructor");

function verifyTermAgainstConstructors(termNode, types, constructors, context) {
  let termVerifiedAgainstConstructors = false;

  const constructor = constructors.find((constructor) => {
          const termVerifiedAgainstConstructor = verifyTermAgainstConstructor(termNode, constructor, context);

          if (termVerifiedAgainstConstructor) {
            return true;
          }
        }) || null;

  if (constructor !== null) {
    const type = constructor.getType();

    types.push(type);

    termVerifiedAgainstConstructors = true;
  }

  return termVerifiedAgainstConstructors;
}

module.exports = verifyTermAgainstConstructors;
