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
				verified = callback(constructor, this.termNode, context, rules);

				if (verified) {
					const constructorType = constructor.getType(),  ///
								constructorTypeMatchesTermType = constructorType.matchType(type);

					verified = constructorTypeMatchesTermType;  ///
				}

				if (verified) {
					return true;
				}
			});
		} else {
			const termNameTerminalNodeContent = termNameTerminalNode.getContent(),
						variableName = termNameTerminalNodeContent, ///
						variablePresent = context.isVariablePresentByVariableNameAndType(variableName, type);

			verified = variablePresent; ///
		}

		return verified;
	}

	static fromTermNodeAndConstructorTermNode(termNode, constructorTermNode) {
		const typedTerm = new TypedTerm(termNode, constructorTermNode);

		return typedTerm;
	}
}

module.exports = TypedTerm;
