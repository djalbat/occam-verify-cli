"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

export default domAssigned(class TypePrefixDeclaration {
  constructor(context, node, string, typePrefix) {
    this.context = context;
    this.node = node;
    this.string = string;
    this.typePrefix = typePrefix;
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

  getTypePrefix() {
    return this.typePrefix;
  }

  verify() {
    let verifies = false;

    const typePrefixDeclarationString = this.string;  ///

    this.context.trace(`Verifying the '${typePrefixDeclarationString}' type prefix declaration...`, this.node);

    const includeRelease = true,
          includeDependencies = false,
          types = this.context.getTypes(includeRelease, includeDependencies),
          typesLength = types.length;

    if (typesLength > 0) {
      this.context.debug(`Cannot verify the '${typePrefixDeclarationString}' type prefix declaration because types have already been declared.`, this.node);
    } else {
      const typePrefixVerifies = this.verifyTypePrefix();

      if (typePrefixVerifies) {
        this.context.addTypePrefix(this.typePrefix);

        verifies = true;
      }
    }

    if (verifies) {
      this.context.debug(`...verified the '${typePrefixDeclarationString}' type prefix declaration.`, this.node);
    }

    return verifies;
  }

  verifyTypePrefix() {
    let typePrefixVerifies = false;

    const typePrefixString = this.typePrefix.getString();

    this.context.trace(`Verifying the '${typePrefixString}' type prefix...`, this.node);

    const typePrefix = this.context.getTypePrefix();

    if (typePrefix !== null) {
      this.context.trace(`The package already has a '${typePrefixString}' type prefix.`, this.node);
    } else {

      const typePrefixName = this.typePrefix.getName(),
            typePrefixPresent = this.context.isTypePrefixPresentByTypePrefixName(typePrefixName);

      if (typePrefixPresent) {
        this.context.trace(`The '${typePrefixString}' type prefix is already present.`, this.node);
      } else {
        const nominalTypeName = typePrefixName,  ///
              typePresent = this.context.isTypePresentByNominalTypeName(nominalTypeName);

        if (typePresent) {
          this.context.trace(`The '${typePrefixString}' type is already present.`, this.node);
        } else {
          typePrefixVerifies = true;
        }
      }
    }

    if (typePrefixVerifies) {
      this.context.debug(`...verified the '${typePrefixString}' type prefix.`, this.node);
    }

    return typePrefixVerifies;
  }

  static name = "TypePrefixDeclaration";

  static fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
    const { TypePrefix } = dom,
          node = typePrefixDeclarationNode, ///
          typePrefix = TypePrefix.fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context),
          typePrefixName = typePrefix.getName(),
          string = typePrefixName,  ///
          simpleTypeDeclaration = new TypePrefixDeclaration(context, node, string, typePrefix);

    return simpleTypeDeclaration;
  }
});
