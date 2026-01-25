"use strict";

import { elements } from "occam-furtle";

import Declaration from "../declaration";

const { define } = elements;

export default define(class VariableDeclaration extends Declaration {
  constructor(context, string, node, variable) {
    super(context, string, node);

    this.variable = variable;
  }

  getVariable() {
    return this.variable;
  }

  verify() {
    let verifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          variableDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${variableDeclarationString}' variable declaration...`, node);

    const variableTypeVerifies = this.verifyVariableType();

    if (variableTypeVerifies) {
      const variableVerifies = this.verifyVariable();

      if (variableVerifies) {
        context.addVariable(this.variable);

        verifies = true;
      }
    }

    if (verifies) {
      context.debug(`...verified the '${variableDeclarationString}' variable declaration.`, node);
    }

    return verifies;
  }

  verifyVariable() {
    let  variableVerifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          variableString = this.variable.getString();

    context.trace(`Verifying the '${variableString}' variable...`, node);

    const variableIdentifier = this.variable.getIdentifier(),
          variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier);

    if (variablePresent) {
      context.debug(`The '${variableName}' variable is already present.`, node);
    } else {
      variableVerifies = true;
    }

    if ( variableVerifies) {
      context.debug(`...verified the '${variableString}' variable.`, node);
    }

    return variableVerifies;
  }

  verifyVariableType() {
    let variableTypeVerifies = false;

    const node = this.getNode(),
          context = this.getContext();

    let type;

    type = this.variable.getType();

    const typeString = type.getString();

    context.trace(`Verifying the '${typeString}' type...`, node);

    const includeSupertypes = false,
          provisional = type.isProvisional(includeSupertypes),
          nominalTypeName = type.getNominalTypeName();

    type = context.findTypeByNominalTypeName(nominalTypeName);

    const typePresent = (type !== null)

    if (!typePresent) {
      context.debug(`The '${typeString}' type is not present.`, node);
    } else {
      const typeComparesToProvisional = type.compareProvisional(provisional);

      if (!typeComparesToProvisional) {
        provisional ?
          context.debug(`The '${typeString}' type is present but not provisional.`, node) :
            context.debug(`The '${typeString}' type is present but provisional.`, node);
      } else {
        this.variable.setType(type);

        variableTypeVerifies = true;
      }
    }

    if (variableTypeVerifies) {
      context.debug(`...verified the '${typeString}' type.`, node);
    }

    return variableTypeVerifies;
  }

  static name = "VariableDeclaration";
});
