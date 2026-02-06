"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";

export default define(class VariableDeclaration extends Declaration {
  constructor(context, string, node, variable) {
    super(context, string, node);

    this.variable = variable;
  }

  getVariable() {
    return this.variable;
  }

  verifyVariable() {
    let  variableVerifies = false;

    const context = this.getContext(),
          variableString = this.variable.getString();

    context.trace(`Verifying the '${variableString}' variable...`);

    const variableIdentifier = this.variable.getIdentifier(),
          variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier);

    if (variablePresent) {
      context.debug(`The '${variableName}' variable is already present.`);
    } else {
      variableVerifies = true;
    }

    if ( variableVerifies) {
      context.debug(`...verified the '${variableString}' variable.`);
    }

    return variableVerifies;
  }

  verifyVariableType() {
    let variableTypeVerifies = false;

    const context = this.getContext();

    let type;

    type = this.variable.getType();

    const typeString = type.getString();

    context.trace(`Verifying the '${typeString}' type...`);

    const includeSupertypes = false,
          provisional = type.isProvisional(includeSupertypes),
          nominalTypeName = type.getNominalTypeName();

    type = context.findTypeByNominalTypeName(nominalTypeName);

    const typePresent = (type !== null)

    if (!typePresent) {
      context.debug(`The '${typeString}' type is not present.`);
    } else {
      const typeComparesToProvisional = type.compareProvisional(provisional);

      if (!typeComparesToProvisional) {
        provisional ?
          context.debug(`The '${typeString}' type is present but not provisional.`) :
            context.debug(`The '${typeString}' type is present but provisional.`);
      } else {
        this.variable.setType(type);

        variableTypeVerifies = true;
      }
    }

    if (variableTypeVerifies) {
      context.debug(`...verified the '${typeString}' type.`);
    }

    return variableTypeVerifies;
  }

  async verify() {
    let verifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          variableDeclarationString = this.getString(); ///

    await this.break(context);

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

  static name = "VariableDeclaration";
});
