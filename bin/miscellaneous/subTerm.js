'use strict';

const Error = require('../error'),
      queries = require('../miscellaneous/queries'),
			nodeUtilities = require('../utilities/node');

const { nodeAsString } = nodeUtilities,
			{ termNameTerminalNodeQuery } = queries;

class SubTerm {
	constructor(termNode, constructorTermNode) {
		this.termNode = termNode;
		this.constructorTermNode = constructorTermNode;
	}

	retrieveConstructorType(context) {
		const constructorTypeName = this.retrieveConstructorTypeName(),
          constructorType = context.findTypeByTypeName(constructorTypeName);

		return constructorType;
	}

	retrieveConstructorTypeName() {
		const constructorTermNameTerminalNode = termNameTerminalNodeQuery(this.constructorTermNode),
					constructorTermNameTerminalNodeContent = constructorTermNameTerminalNode.getContent(),
					constructorTypeName = constructorTermNameTerminalNodeContent;  ///

		return constructorTypeName;
	}

	verify(topmostTermNode, context, rules, callback) {
    let verified = false;

    const type = callback(this.termNode, context, rules);

    if (type !== undefined) {
      const constructorType = this.retrieveConstructorType(context),
            typeEqualToOrSubTypeOfConstructorType = type.isEqualToOrSubTypeOf(constructorType);

      verified = typeEqualToOrSubTypeOfConstructorType;  ///
    }

    if (!verified) {
      const node = topmostTermNode,  ///
            termString = nodeAsString(this.termNode),
            topmostTermString = nodeAsString(topmostTermNode),
            constructorTypeName = this.retrieveConstructorTypeName(context),
            message = `The '${topmostTermString}' term cannot be verified because '${termString}' is not of type '${constructorTypeName}'.`;

      throw new Error(node, message);
    }
	}

  static fromTermNodeAndConstructorTermNode(termNode, constructorTermNode) { return new SubTerm(termNode, constructorTermNode); }
}

module.exports = SubTerm;
