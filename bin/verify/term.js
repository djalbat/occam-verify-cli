'use strict';

const Error = require('../error'),
      nodeUtilities = require('../utilities/node'),
      verifyTermAgainstConstructor = require('../verify/termAgainstConstructor');

const { nodeAsString } = nodeUtilities;

function verifyTerm(termNode, context, rules) {
  const constructors = context.getConstructors(),
        verified = constructors.some((constructor) => verifyTermAgainstConstructor(termNode, constructor, context, rules));

  if (!verified) {
    const node = termNode,  ///
          termNodeString = nodeAsString(termNode),
          message = `The term '${termNodeString}' cannot be verified.`;

    throw new Error(node, message);
  }
}

module.exports = verifyTerm;
