"use strict";

const verifyTermAgainstConstructor = require("../verify/verifyTermAgainstConstructor");

function verifyTermAgainstConstructors(termNode, fileContext) {
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

module.exports = verifyTermAgainstConstructors;
