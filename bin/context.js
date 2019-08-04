'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { push } = arrayUtilities;

const add = push; ///

class Context {
  constructor(types, axioms, variables, constructors, packageName, parentContext) {
    this.types = types;
    this.axioms = axioms;
    this.variables = variables;
    this.constructors = constructors;
    this.packageName = packageName;
    this.parentContext = parentContext;
  }

  getTypes() {
    let types;

    if (this.parentContext !== undefined) {
      const parentContextTypes = this.parentContext.getTypes();

      types = this.types.concat(parentContextTypes);
    } else {
      types = this.types;
    }

    return types;
  }

  getAxioms() {
    let axioms;

    if (this.parentContext !== undefined) {
      const parentContextAxioms = this.parentContext.getAxioms();

      axioms = this.axioms.concat(parentContextAxioms);
    } else {
      axioms = this.axioms;
    }

    return axioms;
  }

  getVariables() {
    let variables;

    if (this.parentContext !== undefined) {
      const parentContextVariables = this.parentContext.getVariables();

      variables = this.variables.concat(parentContextVariables);
    } else {
      variables = this.variables;
    }

    return variables;
  }

  getConstructors() {
    let constructors;

    if (this.parentContext !== undefined) {
      const parentContextConstructors = this.parentContext.getConstructors();

      constructors = this.constructors.concat(parentContextConstructors);
    } else {
      constructors = this.constructors;
    }

    return constructors;
  }

  getPackageNames() {
    const packageNames = [
      this.packageName
    ];

    if (this.parentContext !== undefined) {
      const parentContextPackageNames = this.parentContext.getPackageNames();

      add(packageNames, parentContextPackageNames);
    }

    return packageNames;
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

  addPackageName(packageName) {
    this.packageNames.unshift(packageName); ///
  }

  addTypes(types) {
    add(this.types, types);
  }

  addAxioms(axioms) {
    add(this.axioms, axioms);
  }

  addConstructors(constructors) {
    add(this.constructors, constructors);
  }

  findTypeByName(name) {
    const types = this.getTypes(),
          type = types.find((type) => type.matchName(name));

    return type;
  }

	findVariableByName(name) {
		const variables = this.getVariables(),
          variable = variables.find((variable) => variable.matchName(name));

		return variable;
	}

	findTypeByTypeName(typeName) {
    const types = this.getTypes(),
          type = types.find((type) => type.matchTypeName(typeName));

    return type;
  }

  isLabelPresent(label) {
    const axioms = this.getAxioms(),
          labelPresent = axioms.some((axiom) => {
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

	isPackageNamePresent(packageName) {
    let packageNamePresent = false;

    if (this.packageName === packageName) {
      packageNamePresent = true;
    } else {
      if (this.parentContext !== undefined) {
        packageNamePresent = this.parentContext.isPackageNamePresent(packageName);
      }
    }

    return packageNamePresent;
  }

  isPackageNameMissing(packageName) {
    const packageNamePresent = this.isPackageNamePresent(packageName),
          packageNameMissing = !packageNamePresent;

    return packageNameMissing;
  }

  static fromNothing() {
    const types = [],
          axioms = [],
          variables = [],
          constructors = [],
          packageName = undefined,
          parentContext = undefined,
          context = new Context(types, axioms, variables, constructors, packageName, parentContext);

    return context;
  }

  static fromPackageNameAndParentContext(packageName, parentContext) {
    const types = [],
          axioms = [],
          variables = [],
          constructors = [],
          context = new Context(types, axioms, variables, constructors, packageName, parentContext);

    return context;
  }
}

module.exports = Context;
