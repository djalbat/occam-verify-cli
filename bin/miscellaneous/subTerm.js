'use strict';

const queries = require('../miscellaneous/queries');

const { termNameTerminalNodeQuery } = queries;

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

    return verified;
	}

  static fromTermNodeAndConstructorTermNode(termNode, constructorTermNode) { return new SubTerm(termNode, constructorTermNode); }
}

module.exports = SubTerm;
