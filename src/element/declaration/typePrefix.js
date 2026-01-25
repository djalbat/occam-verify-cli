"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";

export default define(class TypePrefixDeclaration extends Declaration {
  constructor(context, string, node, typePrefix) {
    super(context, string, node);

    this.typePrefix = typePrefix;
  }

  getTypePrefix() {
    return this.typePrefix;
  }

  verify() {
    let verifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          typePrefixDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${typePrefixDeclarationString}' type prefix declaration...`, node);

    const includeRelease = true,
          includeDependencies = false,
          types = context.getTypes(includeRelease, includeDependencies),
          typesLength = types.length;

    if (typesLength > 0) {
      context.debug(`Unable to verify the '${typePrefixDeclarationString}' type prefix declaration because types have already been declared.`, node);
    } else {
      const typePrefixVerifies = this.verifyTypePrefix();

      if (typePrefixVerifies) {
        context.addTypePrefix(this.typePrefix);

        verifies = true;
      }
    }

    if (verifies) {
      context.debug(`...verified the '${typePrefixDeclarationString}' type prefix declaration.`, node);
    }

    return verifies;
  }

  verifyTypePrefix() {
    let typePrefixVerifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          typePrefixString = this.typePrefix.getString();

    context.trace(`Verifying the '${typePrefixString}' type prefix...`, node);

    const typePrefix = context.getTypePrefix();

    if (typePrefix !== null) {
      context.trace(`The package already has a '${typePrefixString}' type prefix.`, node);
    } else {

      const typePrefixName = this.typePrefix.getName(),
            typePrefixPresent = context.isTypePrefixPresentByTypePrefixName(typePrefixName);

      if (typePrefixPresent) {
        context.trace(`The '${typePrefixString}' type prefix is already present.`, node);
      } else {
        const nominalTypeName = typePrefixName,  ///
              typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);

        if (typePresent) {
          context.trace(`The '${typePrefixString}' type is already present.`, node);
        } else {
          typePrefixVerifies = true;
        }
      }
    }

    if (typePrefixVerifies) {
      context.debug(`...verified the '${typePrefixString}' type prefix.`, node);
    }

    return typePrefixVerifies;
  }

  static name = "TypePrefixDeclaration";
});
