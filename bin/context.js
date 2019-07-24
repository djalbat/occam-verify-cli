'use strict';

class Context {
  constructor(types, axioms, variables, constructors) {
    this.types = types;
    this.axioms = axioms;
    this.variables = variables;
    this.constructors = constructors
  }

  getTypes() {
    return this.types;
  }

  getAxioms() {
    return this.axioms;
  }

  getVariables() {
    return this.variables;
  }

  getConstructors() {
    return this.constructors;
  }

  addType(type) {
    const typeString = type.asString();

    this.types.push(type);

    console.log(`Added the '${typeString}' type to the context.`);
  }

  addAxiom(axiom) {
    const axiomString = axiom.asString();

    this.axioms.push(axiom);

    console.log(`Added the '${axiomString}' axiom to the context.`);
  }

  addVariable(variable) {
    const variableString = variable.asString();

    this.variables.push(variable);

    console.log(`Added the '${variableString}' variable to the context.`);
  }

  addConstructor(constructor) {
    const constructorString = constructor.asString();

    this.constructors.push(constructor);

    console.log(`Added the '${constructorString}' constructor to the context.`);
  }

  findTypeByName(name) {
    const type = this.types.find((type) => type.matchName(name));

    return type;
  }

	findVariableByName(name) {
		const variable = this.variables.find((variable) => variable.matchName(name));

		return variable;
	}

	findTypeByTypeName(typeName) {
    const type = this.types.find((type) => type.matchTypeName(typeName));

    return type;
  }

  findConstructorByRuleName(ruleName) {
	  const constructor = this.constructors.find((constructor) => constructor.matchRuleName(ruleName));

	  return constructor;
  }

	findVariableByVariableNameAndType(variableName, type) {
		const variable = this.variables.find((variable) => variable.matchVariableNameAndType(variableName, type));

		return variable;
	}

  isLabelPresent(label) {
    const labelPresent = this.axioms.some((axiom) => {
      const labels = axiom.getLabels(),
            labelsIncludesLabel = labels.includes(label);

      if (labelsIncludesLabel) {
        return true;
      }
    });

    return labelPresent;
  }

  isTypePresentByName(name) {
    const type = this.findTypeByName(name),
          typePresent = (type !== undefined);

    return typePresent;
  }

  isVariablePresentByName(name) {
    const variable = this.findVariableByName(name),
          variablePresent = (variable !== undefined);

    return variablePresent;
  }

	isTypePresentByTypeName(typeName) {
		const type = this.findTypeByTypeName(typeName),
				typePresent = (type !== undefined);

		return typePresent;
	}

	isConstructorPresentByRuleName(ruleName) {
		const constructor = this.findConstructorByRuleName(ruleName),
					constructorsPresent = (constructor !== undefined);

		return constructorsPresent;
	}

	isVariablePresentByVariableNameAndType(variableName, type) {
  	const variable = this.findVariableByVariableNameAndType(variableName, type),
			    variablePresent = (variable !== undefined);

  	return variablePresent;
  }

  static fromNothing() {
    const types = [],
          axioms = [],
          variables = [],
          constructors = [],
          context = new Context(types, axioms, variables, constructors);

    return context;
  }
}

module.exports = Context;
