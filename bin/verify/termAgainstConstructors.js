"use strict";

const verifyTermAgainstConstructor = require("../verify/termAgainstConstructor");

function verifyTermAgainstConstructors(termNode, fileContext) {
  const constructors = fileContext.getConstructors(),
        constructor = constructors.find((constructor) => {
          const constructorTermNode = constructor.getTermNode(),
                verified = verifyTermAgainstConstructor(termNode, constructorTermNode, fileContext);

          if (verified) {
            return true;
          }
        });

  return constructor;
}

module.exports = verifyTermAgainstConstructors;
