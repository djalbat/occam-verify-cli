"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import TermSubstitution from "./substitution/term";

import { nodeQuery } from "./utilities/query";
import { objectType } from "./type";
import { variableNameFromVariableNode} from "./utilities/name";
import { typeFromJSON, typeToTypeJSON } from "./utilities/json";
import { variableNodeFromVariableString } from "./nodeAndTokens/variable";

const typeNodeQuery = nodeQuery("/variableDeclaration/type"),
      variableNodeQuery = nodeQuery("/variableDeclaration/variable"),
      termVariableNodeQuery = nodeQuery("/term/variable");

class Variable {
  constructor(context, string, node, name, type) {
    this.context = context; ///
    this.string = string;
    this.node = node;
    this.name = name;
    this.type = type;
  }

  getLocalContext() {
    return this.context;
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

  matchVariableName(variableName) {
    const variableNameMatches = (this.name === variableName);

    return variableNameMatches;
  }

  matchVariableNode(variableNode) {
    const variableNodeMatches = this.node.match(variableNode);

    return variableNodeMatches;
  }

  verify(context) {
    let verified;

    const variableString = this.string; ///

    context.trace(`Verifying the '${variableString}' variable...`);

    const variableNode = this.node, ///
          variableName = variableNameFromVariableNode(variableNode),
          variable = context.findVariableByVariableName(variableName);

    if (variable !== null) {
      const type = variable.getType();

      this.type = type;

      verified = true;
    } else {
      context.debug(`The '${variableString}' variable is not present.`);
    }

    if (verified) {
      const typeName = this.type.getName();

      context.debug(`...verified the '${variableString}:${typeName}' variable.`);
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
    let verifiedAtTopLevel;

    const variableString = this.string; ///

    fileContext.trace(`Verifying the '${variableString}' variable when declared...`);

    const variableNode = this.node, ///
          variableName = variableNameFromVariableNode(variableNode),
          variablePresent = fileContext.isVariablePresentByVariableName(variableName);

    if (variablePresent) {
      fileContext.debug(`The '${variableString}' variable is already present.`);
    } else {
      const typeVerified = this.verifyType(fileContext);

      verifiedAtTopLevel = typeVerified;  ///
    }

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${variableString}' variable when declared.`);
    }

    return verifiedAtTopLevel;
  }

  unifyTerm(term, substitutions, generalContext, specificContext, contextsReversed = false) {
    let termUnified = false;

    let context = contextsReversed ?
                    generalContext :
                      specificContext;

    const termString = term.getString(),
          variableString = this.string; ///

    specificContext.trace(`Unifying the '${termString}' term with the '${variableString}' variable...`);

    const termNode = term.getNode(),
          variableName = this.name, ///
          substitution = substitutions.findSubstitutionByVariableName(variableName);

    if (substitution !== null) {
      const termNodeMatches = substitution.matchTermNode(termNode);

      if (termNodeMatches) {
        termUnified = true;
      }
    } else {
      const variableNode = this.node,  ///
            generalContext = this.context,  ///
            variable = variableFromVariableNode(variableNode, generalContext),
            termVariable = termVariableFromTermNode(termNode, generalContext);

      if ((variable !== null) && (variable === termVariable)) {
        termUnified = true;
      } else {
        const variable = this,  ///
              termSubstitution = TermSubstitution.fromTernAndVariable(term, variable, context),
              substitution = termSubstitution;  ///

        context = specificContext;  ///

        substitutions.addSubstitution(substitution, context);

        termUnified = true;
      }
    }

    if (termUnified) {
      specificContext.trace(`...unified the '${termString}' term with the '${variableString}' variable.`);
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
          variable = new Variable(context, string, node, name, type);

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

      variable = new Variable(context, string, node, name, type);
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

      variable = new Variable(context, string, node, name, type);
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

      variable = new Variable(context, string, node, name, type);
    }

    return variable;
  }

  static fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
    const { Type } = shim,
          typeNode = typeNodeQuery(variableDeclarationNode),
          variableNode = variableNodeQuery(variableDeclarationNode),
          variableName = variableNameFromVariableNode(variableNode),
          context = LocalContext.fromFileContext(fileContext),
          variableString = fileContext.nodeAsString(variableNode),
          string = variableString,  ///
          node = variableNode,  ///
          name = variableName,  ///
          type = Type.fromTypeNode(typeNode, context),
          variable = new Variable(context, string, node, name, type);

    return variable;
  }
}

Object.assign(shim, {
  Variable
});

export default Variable;

function variableFromVariableNode(variableNode, generalContext) {
  const variableName = variableNameFromVariableNode(variableNode),
        context = generalContext, ///
        variable = context.findVariableByVariableName(variableName);

  return variable;
}

function termVariableFromTermNode(termNode, generalContext) {
  let termVariable = null;

  const termVariableNode = termVariableNodeQuery(termNode);

  if (termVariableNode !== null) {
    const termVariableName = variableNameFromVariableNode(termVariableNode),
          context = generalContext; ///

    termVariable = context.findVariableByVariableName(termVariableName);
  }

  return termVariable;
}
