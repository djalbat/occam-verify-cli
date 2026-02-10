"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";

export default define(class VariableDeclaration extends Declaration {
  constructor(context, string, node, variable, type, provisional) {
    super(context, string, node);

    this.variable = variable;
    this.type = type;
    this.provisional = provisional;
  }

  getVariable() {
    return this.variable;
  }

  getType() {
    return this.type;
  }

  isProvisional() {
    return this.provisional;
  }

  verifyType() {
    let typeVerifies = false;

    const context = this.getContext();

    const typeString = this.type.getString(),
          variableDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${variableDeclarationString}' variable declaration's '${typeString}' type...`);

    const nominalTypeName = this.type.getNominalTypeName(),
          type = context.findTypeByNominalTypeName(nominalTypeName),
          typePresent = (type !== null)

    if (!typePresent) {
      context.debug(`The '${typeString}' type is not present.`);
    } else {
      const typeComparesToProvisional = type.compareProvisional(this.provisional);

      if (!typeComparesToProvisional) {
        this.provisional ?
          context.debug(`The '${variableDeclarationString}' variable declaration's '${typeString}' type is present but not provisional.`) :
            context.debug(`The '${variableDeclarationString}' variable declaration's '${typeString}' type is present but provisional.`);
      } else {
        this.variable.setType(type);

        typeVerifies = true;
      }
    }

    if (typeVerifies) {
      context.debug(`...verified the '${variableDeclarationString}' variable declaration's '${typeString}' type.`);
    }

    return typeVerifies;
  }

  verifyVariable() {
    let  variableVerifies = false;

    const context = this.getContext(),
          variableString = this.variable.getString(),
          variableDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${variableDeclarationString}' variable declaration's '${variableString}' variable...`);

    const variableIdentifier = this.variable.getIdentifier(),
          variable = context.findVariableByVariableIdentifier(variableIdentifier),
          variablePresent = (variable !== null);

    if (variablePresent) {
      const variableIdentifier = variable.getIdentifier();

      context.debug(`The '${variableIdentifier}' variable is already present.`);
    } else {
      variableVerifies = true;
    }

    if ( variableVerifies) {
      context.trace(`...verified the '${variableDeclarationString}' variable declaration's '${variableString}' variable.`);
    }

    return variableVerifies;
  }

  async verify() {
    let verifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          variableDeclarationString = this.getString(); ///

    await this.break(context);

    context.trace(`Verifying the '${variableDeclarationString}' variable declaration...`, node);

    const typeVerifies = this.verifyType();

    if (typeVerifies) {
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
