'use strict';

const Error = require('../error'),
      queries = require('../miscellaneous/queries'),
			nodeUtilities = require('../utilities/node');

const { nodeAsString } = nodeUtilities,
			{ expressionTermNameTerminalNodeQuery } = queries;

class SubExpression {
	constructor(expressionNode, constructorTermNode) {
		this.expressionNode = expressionNode;
		this.constructorTermNode = constructorTermNode;
	}

	retrieveConstructorType(context) {
		const constructorTypeName = this.retrieveConstructorTypeName(),
          constructorType = context.findTypeByTypeName(constructorTypeName);

		return constructorType;
	}

	retrieveConstructorTypeName(context) {
		const constructorExpressionTermNameTerminalNode = expressionTermNameTerminalNodeQuery(this.constructorTermNode),
					constructorExpressionTermNameTerminalNodeContent = constructorExpressionTermNameTerminalNode.getContent(),
					constructorTypeName = constructorExpressionTermNameTerminalNodeContent;  ///

		return constructorTypeName;
	}

	verify(topmostTermNode, context, rules, verifyExpression) {
	  let verified = false;

		const type = verifyExpression(this.expressionNode, context, rules);

		if (type !== undefined) {
      const constructorType = this.retrieveConstructorType(context),
            typeEqualToOrSubTypeOfConstructorType = type.isEqualToOrSubTypeOf(constructorType);

      verified = typeEqualToOrSubTypeOfConstructorType;  ///
    }

    if (!verified) {
      const node = topmostTermNode,  ///
            expressionString = nodeAsString(this.expressionNode),
            topmostTermString = nodeAsString(topmostTermNode),
            constructorTypeName = this.retrieveConstructorTypeName(context),
            message = `The '${topmostTermString}' term cannot be verified because '${expressionString}' is not of type '${constructorTypeName}'.`;

      throw new Error(node, message);
    }
	}

  static fromExpressionNodeAndConstructorTermNode(expressionNode, constructorTermNode) { return new SubExpression(expressionNode, constructorTermNode); }
}

module.exports = SubExpression;
