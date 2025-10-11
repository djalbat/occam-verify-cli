"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";
import { stringFromTypeNameNameAndSuperTypes } from "../../utilities/type";

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

    const typePrefixDeclarationString = this.getString(); ///

    this.context.trace(`Verifying the '${typePrefixDeclarationString}' type prefix declaration...`, this.node);

    debugger

    if (verifies) {
      this.context.debug(`...verified the '${typePrefixDeclarationString}' type prefix declaration.`, this.node);
    }

    return verifies;
  }

  static name = "TypePrefixDeclaration";

  static fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
    const { TypePrefix } = dom,
          node = typePrefixDeclarationNode, ///
          typePrefix = TypePrefix.fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context),
          prefix = typePrefix.getPrefix(),
          string = prefix,  ///
          simpleTypeDeclaration = new TypePrefixDeclaration(context, node, string, typePrefix);

    return simpleTypeDeclaration;
  }
});
