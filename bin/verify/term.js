'use strict';

const Error = require('../error'),
      nodeUtilities = require('../utilities/node'),
      verifyTermAgainstConstructor = require('../verify/termAgainstConstructor');

const { nodeAsString } = nodeUtilities;

function verifyTerm(termNode, context, rules) {
  let type = undefined;

  const constructors = context.getConstructors(),
        verified = constructors.some((constructor) => {
          type = verifyTermAgainstConstructor(termNode, constructor, context, rules);

          if (type !== undefined) {
            return true;
          }
        });

  if (!verified) {
    const node = termNode,  ///
          termNodeString = nodeAsString(termNode),
          message = `The term '${termNodeString}' cannot be verified.`;

    throw new Error(node, message);
  }

  return type;
}

module.exports = verifyTerm;
