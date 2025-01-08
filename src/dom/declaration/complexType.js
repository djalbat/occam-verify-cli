"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

export default domAssigned(class ComplexTypeDeclaration {
  constructor(fileContext, type) {
    this.fileContext = fileContext;
    this.type = type;
  }

  getFileContext() {
    return this.fileContext;
  }

  getType() {
    return this.type;
  }

  getString() { return this.type.getString(); }

  verify() {
    let verified = false;

    const complexTypeDeclarationString = this.getString();

    this.fileContext.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration...`);

    const typeVerified = this.verifyType(this.type);

    if (typeVerified) {
      const properties = this.type.getProperties(),
            propertiesVerified = this.verifyProperties(properties);

      if (propertiesVerified) {
        this.fileContext.addType(this.type);

        verified = true;
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration.`);
    }

    return verified;
  }

  verifyType(type) {
    let typeVerified = false;

    const typeString = type.getString(); ///

    this.fileContext.trace(`Verifying the '${typeString}' type...`);

    const typeName = type.getName(),
          typePresent = this.fileContext.isTypePresentByTypeName(typeName);

    if (typePresent) {
      const typeString = type.getString();

      this.fileContext.debug(`The '${typeString}' type is already present.`);
    } else {
      let superType;

      superType = type.getSuperType();

      const superTypeName = superType.getName();

      superType = this.fileContext.findTypeByTypeName(superTypeName);

      if (superType === null) {
        const superTypeString = superType.getString();

        this.fileContext.debug(`The super-type '${superTypeString}' is not present.`);
      } else {
        type.setSuperType(superType);

        typeVerified = true;
      }
    }

    if (typeVerified) {
      this.fileContext.debug(`...typeVerified the '${typeString}' type.`);
    }

    return typeVerified;
  }

  verifyProperties(properties) {
    const propertiesVerified = properties.every((property) => {
      const propertyVerified = this.verifyProperty(property, properties);

      if (propertyVerified) {
        return true;
      }
    });

    return propertiesVerified;
  }

  verifyProperty(property, properties) {
    let propertyVerified = false;

    const propertyString = property.getString();

    this.fileContext.trace(`Verifying the '${propertyString}' property...`);

    const propertyName = property.getName(),
          count = properties.reduce((count, property) => {
            const propertyNameMatches = property.matchPropertyName(propertyName);

            if (propertyNameMatches) {
              count++;
            }

            return count;
          }, 0);

    if (count > 1) {
      this.fileContext.debug(`The '${propertyString}' property appears more than once.`);
    } else {
      const type = property.getType(),
            typeVerified = this.verifyType(type);

      if (typeVerified) {
        propertyVerified = true;
      }
    }

    if (propertyVerified) {
      this.fileContext.debug(`verified the '${propertyString}' property.`);
    }

    return propertyVerified;
  }

  static name = "ComplexTypeDeclaration";

  static fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
    const { Type } = dom,
          type = Type.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          complexTypeDeclaration = new ComplexTypeDeclaration(fileContext, type);

    return complexTypeDeclaration;
  }
});
