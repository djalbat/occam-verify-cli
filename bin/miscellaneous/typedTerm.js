'use strict';

const queries = require('../miscellaneous/queries'),
			nodeUtilities = require('../utilities/node');

const { nodeAsString } = nodeUtilities,
			{ termNameTerminalNodeQuery } = queries;

class TypedTerm {
	constructor(termNode, constructorTermNode) {
		this.termNode = termNode;
		this.constructorTermNode = constructorTermNode;
	}

	retrieveTypeName(context) {
		const type = this.retrieveType(context),
					typeName = type.getName();

		return typeName;
	}

	retrieveType(context) {
		const constructorTermNameTerminalNode = termNameTerminalNodeQuery(this.constructorTermNode),
					constructorTermNameTerminalNodeContent = constructorTermNameTerminalNode.getContent(),
					typeName = constructorTermNameTerminalNodeContent,  ///
					type = context.findTypeByTypeName(typeName);

		return type;
	}

	asString() { return nodeAsString(this.termNode); }

	verify(context, rules, callback) {
		let verified = false;

		const type = this.retrieveType(context),
					termNameTerminalNode = termNameTerminalNodeQuery(this.termNode);

		if (termNameTerminalNode === undefined) {
			const constructors = context.getConstructors();

			constructors.some((constructor) => {
				const topmostTermNode = this.termNode,  ///
							constructorTermNode = constructor.getTermNode(),
							constructorTopmostTermNode = constructorTermNode; ///

				verified = callback(topmostTermNode, constructorTopmostTermNode, context, rules);

				if (verified) {
					const constructorType = constructor.getType(),  ///
								constructorTypeEqualToOrSubTypeOfTermType = constructorType.isEqualToOrSubTypeOf(type);

					verified = constructorTypeEqualToOrSubTypeOfTermType;  ///
				}

				if (verified) {
					return true;
				}
			});
		} else {
			const termNameTerminalNodeContent = termNameTerminalNode.getContent(),
						name = termNameTerminalNodeContent, ///
            variable = context.findVariableByName(name);

			if (variable !== undefined) {
			  const variableType = variable.getType(),
              variableTypeEqualToOrSubTypeOfType = variableType.isEqualToOrSubTypeOf(type);

        verified = variableTypeEqualToOrSubTypeOfType; ///
      }
		}

		return verified;
	}

	static fromTermNodeAndConstructorTermNode(termNode, constructorTermNode) {
		const typedTerm = new TypedTerm(termNode, constructorTermNode);

		return typedTerm;
	}
}

module.exports = TypedTerm;
