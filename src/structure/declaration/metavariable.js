"use strict";

import structure from "../../structure";
import Declaration from "../declaration";

import { define } from "../../structure";

export default define(class MetavariableDeclaration extends Declaration {
  constructor(context, node, string, metavariable) {
    super(context, node, string);

    this.metavariable = metavariable;
  }

  getMetavariable() {
    return this.metavariable;
  }

  verify() {
    let verifies;

    const node = this.getNode(),
          context = this.getContext(),
          metavariableDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration...`, node);

    const metavariableVerifies = this.verifyMetavariable(this.metavariable);

    if (metavariableVerifies) {
      context.addMetavariable(this.metavariable);

      verifies = true;
    }

    if (verifies) {
      context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration.`, node);
    }

    return verifies;
  }

  verifyType(type) {
    let typeVerifies;

    const node = this.getNode(),
          context = this.getContext();

    if (type === null) {
      typeVerifies = true;
    } else {
      const typeString = type.getString();

      context.trace(`Verifying the '${typeString}' type...`, node);

      const nominalTypeName = type.getNominalTypeName(),
            typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);

      if (!typePresent) {
        context.debug(`The '${typeString}' type is not present.`, node);
      } else {
        typeVerifies = true;
      }

      if (typeVerifies) {
        context.debug(`...verified the '${typeString}' type.`, node);
      }
    }

    return typeVerifies;
  }

  verifyMetavariable(metavariable) {
    let metavariableVerifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          metavariableString = metavariable.getString();

    context.trace(`Verifying the '${metavariableString}' metavariable when declared...`, node);

    const metavariableNode = metavariable.getNode(), ///
          termNode = metavariableNode.getTermNode();

    if (termNode !== null) {
      context.debug(`A term was found in the '${metavariableString}' metavariable when a type should have been present.`, node);
    } else {
      const metavariableName = metavariable.getName(),
            metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);

      if (metavariablePresent) {
        context.debug(`The '${metavariableName}' metavariable is already present.`, node);
      } else {
        const type = metavariable.getType(),
              typeVerifies = this.verifyType(type);

        metavariableVerifies = typeVerifies;  ///
      }
    }

    if (metavariableVerifies) {
      context.debug(`...verified the '${metavariableString}' metavariable when declared.`, node);
    }

    return metavariableVerifies;
  }

  static name = "MetavariableDeclaration";

  static fromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    const { Metavariable } = structure,
          node = metavariableDeclarationNode, ///
          metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context),
          metavariable = Metavariable.fromMetavariableDeclarationNode(metavariableDeclarationNode, context),
          string = stringFromMetavariableAndMetaType(metavariable, metaType),
          metavariableDeclaration = new MetavariableDeclaration(context, node, string, metavariable);

    return metavariableDeclaration;
  }
});

function stringFromMetavariableAndMetaType(metavariable, metaType) {
  let string;

  const metavariableString = metavariable.getString();

  if (metaType === null) {
    string = metavariableString; ///
  } else {
    const metaTypeString = metaType.getString();

    string = `${metavariableString}:${metaTypeString}`;
  }

  return string;
}

function metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
  const { MetaType } = structure,
        metaTypeNode = metavariableDeclarationNode.getMetaTypeNode(),
        metaType = MetaType.fromMetaTypeNode(metaTypeNode, context);

  return metaType;
}
