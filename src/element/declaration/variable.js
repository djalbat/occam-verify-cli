"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";

export default define(class VariableDeclaration extends Declaration {
  constructor(context, string, node, type, variable, provisional) {
    super(context, string, node);

    this.type = type;
    this.variable = variable;
    this.provisional = provisional;
  }

  getType() {
    return this.type;
  }

  getVariable() {
    return this.variable;
  }

  isProvisional() {
    return this.provisional;
  }

  getVariableDeclarationNode() {
    const node = this.getNode(),
          variableDeclarationNode = node; ///

    return variableDeclarationNode;
  }

  async verify() {
    let verifies = false;

    const context = this.getContext();

    await this.break(context);

    const variableDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${variableDeclarationString}' variable declaration...`);

    const typeVerifies = this.verifyType();

    if (typeVerifies) {
      const variableVerifies = this.verifyVariable();

      if (variableVerifies) {
        const declaredVariable = this.variable;

        context.addDeclaredVariable(declaredVariable);

        verifies = true;
      }
    }

    if (verifies) {
      context.debug(`...verified the '${variableDeclarationString}' variable declaration.`);
    }

    return verifies;
  }

  verifyType() {
    let typeVerifies = false;

    const context = this.getContext(),
          typeString = this.type.getString(),
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
          declaredVariablePresent = context.isDeclaredVariablePresentByVariableIdentifier(variableIdentifier);

    if (declaredVariablePresent) {
      context.debug(`The '${variableString}' declared variable is already present.`);
    } else {
      variableVerifies = true;
    }

    if (variableVerifies) {
      context.debug(`...verified the '${variableDeclarationString}' variable declaration's '${variableString}' variable.`);
    }

    return variableVerifies;
  }

  static name = "VariableDeclaration";
});
