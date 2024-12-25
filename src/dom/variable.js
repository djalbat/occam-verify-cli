"use strict";

import dom from "../dom";
import LocalContext from "../context/local";
import TermSubstitution from "../substitution/term";

import { nodeQuery } from "../utilities/query";
import { objectType } from "./type";
import { domAssigned } from "../dom";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";
import { variableNameFromVariableNode } from "../utilities/name";
import { variableNodeFromVariableString } from "../context/partial/variable";

const termVariableNodeQuery = nodeQuery("/term/variable!"),
      variableDeclarationTypeNodeQuery = nodeQuery("/variableDeclaration/type"),
      variableDeclarationVariableNodeQuery = nodeQuery("/variableDeclaration/variable");

export default domAssigned(class Variable {
  constructor(string, node, name, type) {
    this.string = string;
    this.node = node;
    this.name = name;
    this.type = type;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  isEqualTo(variable) {
    const variableString = variable.getString(),
          equalTo = (variableString === this.string);

    return equalTo;
  }

  matchName(name) {
    const nameMatches = (name === this.name);

    return nameMatches;
  }

  matchVariableName(variableName) {
    const variableNameMatches = (variableName === this.name);

    return variableNameMatches;
  }

  isEffectivelyEqualToTerm(term, generalContext, specificContext) {
    let effectivelyEqualToTerm = false;

    const generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const termString = term.getString();

      if (termString === this.string) {
        effectivelyEqualToTerm = true;
      }
    }

    return effectivelyEqualToTerm;
  }

  verify(context) {
    let verified;

    const variableString = this.string; ///

    context.trace(`Verifying the '${variableString}' variable...`);

    const variableName = this.name,
          variable = context.findVariableByVariableName(variableName);

    if (variable !== null) {
      const type = variable.getType();

      this.type = type;

      verified = true;
    } else {
      context.debug(`The '${variableString}' variable is not present.`);
    }

    if (verified) {
      context.debug(`...verified the '${variableString}' variable.`);
    }

    return verified;
  }

  verifyType(fileContext) {
    let typeVerified;

    if (this.type === objectType) {
      typeVerified = true;
    } else {
      const typeName = this.type.getName();

      fileContext.trace(`Verifying the '${typeName}' type...`);

      const type = fileContext.findTypeByTypeName(typeName);

      if (type === null) {
        fileContext.debug(`The '${typeName}' type is missing.`);
      } else {
        this.type = type; ///

        typeVerified = true;
      }

      if (typeVerified) {
        fileContext.debug(`...verified the '${typeName}' type.`);
      }
    }

    return typeVerified;
  }

  verifyWhenDeclared(fileContext) {
    let verifiedWhenDeclared;

    const variableString = this.string; ///

    fileContext.trace(`Verifying the '${variableString}' variable when declared...`);

    const variableName = this.name, ///
          variablePresent = fileContext.isVariablePresentByVariableName(variableName);

    if (variablePresent) {
      fileContext.debug(`The '${variableName}' variable has already been declared.`);
    } else {
      const metavariableName = this.name, ///
            metavariablePresent = fileContext.isMetavariablePresentByMetavariableName(metavariableName);

      if (metavariablePresent) {
        fileContext.debug(`A '${metavariableName}' variable has already been declared.`);
      } else {
        const typeVerified = this.verifyType(fileContext);

        verifiedWhenDeclared = typeVerified;  ///
      }
    }

    if (verifiedWhenDeclared) {
      fileContext.debug(`...verified the '${variableString}' variable when declared.`);
    }

    return verifiedWhenDeclared;
  }

  unifyTerm(term, substitutions, generalContext, specificContext) {
    let termUnified = false;

    const termString = term.getString(),
          variableString = this.string; ///

    generalContext.trace(`Unifying the '${termString}' term with the '${variableString}' variable...`);

    const effectivelyEqualToTerm = this.isEffectivelyEqualToTerm(term, generalContext, specificContext);

    if (effectivelyEqualToTerm) {
      termUnified = true;
    } else {
      const variable = this, ///
            substitutionPresent = substitutions.isSubstitutionPresentByVariable(variable);

      if (substitutionPresent) {
        const substitution = substitutions.findSubstitutionByVariable(variable),
              substitutionTermEqualToTerm = substitution.isTermEqualTo(term);

        if (substitutionTermEqualToTerm) {
          termUnified = true;
        }
      } else {
        let context;

        context = specificContext;  ///

        const variable = this,  ///
              termSubstitution = TermSubstitution.fromTernAndVariable(term, variable, context),
              substitution = termSubstitution;  ///

        context = generalContext;  ///

        substitutions.addSubstitution(substitution, context);

        termUnified = true;
      }
    }

    if (termUnified) {
      generalContext.debug(`...unified the '${termString}' term with the '${variableString}' variable.`);
    }

    return termUnified;
  }

  toJSON() {
    const typeJSON = typeToTypeJSON(this.type),
          string = this.string,
          type = typeJSON,  ///
          json = {
            type,
            string
          };

    return json;
  }

  static name = "Variable";

  static fromJSON(json, fileContext) {
    const { string } = json,
          localContext = LocalContext.fromFileContext(fileContext),
          context = localContext, ///
          variableString = string,  ///
          variableNode = variableNodeFromVariableString(variableString, context),
          variableName = variableNameFromVariableNode(variableNode),
          node = variableNode,
          name = variableName,  ///
          type = typeFromJSON(json, fileContext),
          variable = new Variable(string, node, name, type);

    return variable;
  }

  static fromTermNode(termNode, context) {
    let variable = null;

    const termVariableNode = termVariableNodeQuery(termNode);

    if (termVariableNode !== null) {
      const variableNode = termVariableNode,  ///
            variableName = variableNameFromVariableNode(variableNode),
            node = variableNode,  ///
            string = context.nodeAsString(node),
            name = variableName,  ///
            type = null;

      variable = new Variable(string, node, name, type);
    }

    return variable;
  }

  static fromVariableNode(variableNode, context) {
    let variable = null;

    if (variableNode !== null) {
      const node = variableNode,  ///
            variableName = variableNameFromVariableNode(variableNode),
            string = context.nodeAsString(node),
            name = variableName,  ///
            type = null;

      variable = new Variable(string, node, name, type);
    }

    return variable;
  }

  static fromVariableNodeAndType(variableNode, type, context) {
    let variable = null;

    if (variableNode !== null) {
      const node = variableNode,  ///
            variableName = variableNameFromVariableNode(variableNode),
            string = context.nodeAsString(node),
            name = variableName;  ///

      variable = new Variable(string, node, name, type);
    }

    return variable;
  }

  static fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
    const variableDeclarationVariableNode = variableDeclarationVariableNodeQuery(variableDeclarationNode),
          variableNode = variableDeclarationVariableNode, ///
          variableName = variableNameFromVariableNode(variableNode),
          variableString = fileContext.nodeAsString(variableNode),
          string = variableString,  ///
          node = variableNode,  ///
          name = variableName,  ///
          type = typeFromVariableDeclarationNode(variableDeclarationNode, fileContext),
          variable = new Variable(string, node, name, type);

    return variable;
  }
});

function typeFromVariableDeclarationNode(variableDeclarationNode, fileContext) {
  const { Type } = dom,
        variableDeclarationTypeNode = variableDeclarationTypeNodeQuery(variableDeclarationNode),
        typeNode = variableDeclarationTypeNode, ///
        context = LocalContext.fromFileContext(fileContext),
        type = Type.fromTypeNode(typeNode, context);

  return type;
}
