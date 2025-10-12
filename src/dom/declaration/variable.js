"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

export default domAssigned(class VariableDeclaration {
  constructor(context, node, string, variable) {
    this.context = context;
    this.node = node;
    this.string = string;
    this.variable = variable;
  }

  getContext() {
    return this.context;
  }

  getNode() {
    return this.node;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  verify() {
    let verifies = false;

    const variableDeclarationString = this.getString();

    this.context.trace(`Verifying the '${variableDeclarationString}' variable declaration...`, this.node);

    const variableTypeVerifies = this.verifyVariableType();

    if (variableTypeVerifies) {
      const variableVerifies = this.verifyVariable();

      if (variableVerifies) {
        this.context.addVariable(this.variable);

        verifies = true;
      }
    }

    if (verifies) {
      this.context.debug(`...verified the '${variableDeclarationString}' variable declaration.`, this.node);
    }

    return verifies;
  }

  verifyVariable() {
    let  variableVerifies = false;

    const variableString = this.variable.getString();

    this.context.trace(`Verifying the '${variableString}' variable...`, this.node);

    const variableIdentifier = this.variable.getIdentifier(),
          variablePresent = this.context.isVariablePresentByVariableIdentifier(variableIdentifier);

    if (variablePresent) {
      this.context.debug(`The '${variableName}' variable is already present.`, this.node);
    } else {
      variableVerifies = true;
    }

    if ( variableVerifies) {
      this.context.debug(`...verified the '${variableString}' variable.`, this.node);
    }

    return  variableVerifies;
  }

  verifyVariableType() {
    let variableTypeVerifies = false;

    let type;

    type = this.variable.getType();

    const typeString = type.getString();

    this.context.trace(`Verifying the '${typeString}' type...`, this.node);

    const nominalTypeName = type.getNominalTypeName();

    type = this.context.findTypeByNominalTypeName(nominalTypeName);

    const typePresent = (type !== null)

    if (!typePresent) {
      this.context.debug(`The '${typeString}' type is not present.`, this.node);
    } else {
      const includeSupertypes = false,
            provisional = type.isProvisional(includeSupertypes),
            provisionalMatches = type.matchProvisional(provisional);

      if (!provisionalMatches) {
        provisional ?
          this.context.debug(`The '${typeString}' type is present but not provisional.`, this.node) :
            this.context.debug(`The '${typeString}' type is present but provisional.`, this.node);
      } else {
        this.variable.setType(type);

        variableTypeVerifies = true;
      }
    }

    if (variableTypeVerifies) {
      this.context.debug(`...verified the '${typeString}' type.`, this.node);
    }

    return variableTypeVerifies;
  }

  static name = "VariableDeclaration";

  static fromVariableDeclarationNode(variableDeclarationNode, context) {
    const { Variable } = dom,
          node = variableDeclarationNode, ///
          string = context.nodeAsString(node),
          variable = Variable.fromVariableDeclarationNode(variableDeclarationNode, context),
          variableDeclaration = new VariableDeclaration(context, node, string, variable);

    return variableDeclaration;
  }
});
