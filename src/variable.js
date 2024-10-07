"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import TermForVariableSubstitution from "./substitution/termForVariable";

import { nodeQuery } from "./utilities/query";
import { objectType } from "./type";
import { variableNameFromVariableNode} from "./utilities/name";
import { variableNodeFromVariableString } from "./utilities/node";

const typeNodeQuery = nodeQuery("/variableDeclaration/type"),
      variableNodeQuery = nodeQuery("/variableDeclaration/variable"),
      termVariableNodeQuery = nodeQuery("/term/variable");

export default class Variable {
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

  matchNode(node) {
    const nodeMatches = this.node.match(node);

    return nodeMatches;
  }

  matchName(name) {
    const nameMatches = (this.name === name);

    return nameMatches;
  }

  verify(localContext) {
    let verified;

    const variableString = this.string; ///

    localContext.trace(`Verifying the '${variableString}' variable...`);

    const variableNode = this.node, ///
          variableName = variableNameFromVariableNode(variableNode),
          variable = localContext.findVariableByVariableName(variableName);

    if (variable === null) {
      localContext.debug(`The '${variableString}' variable is not present.`);
    } else {
      const type = variable.getType();

      this.type = type;

      verified = true;
    }

    if (verified) {
      localContext.debug(`...verified the '${variableString}' variable.`);
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

  verifyAtTopLevel(fileContext) {
    let verifiedAtTopLevel;

    const variableString = this.string; ///

    fileContext.trace(`Verifying the '${variableString}' variable at top level...`);

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
      fileContext.debug(`...verified the '${variableString}' variable at top level.`);
    }

    return verifiedAtTopLevel;
  }

  unifyTerm(term, substitutions, localContext) {
    let termUnified = false;

    const termString = term.getString(),
          variableString = this.string; ///

    localContext.trace(`Unifying the '${termString}' term with the '${variableString}' variable...`);

    const termNode = term.getNode(),
          variableNode = this.node, ///
          substitution = substitutions.findSubstitutionByVariableNode(variableNode);

    if (substitution !== null) {
      const termNodeMatches = substitution.matchTermNode(termNode);

      if (termNodeMatches) {
        termUnified = true;
      }
    } else {
      const variable = this,  ///
            termVariable = termVariableFromTermNode(termNode, localContext);

      if (termVariable === variable) {
        termUnified = true;
      } else {
        const termForVariableSubstitution = TermForVariableSubstitution.fromTernNodeAndVariableNode(term, variable, localContext),
              substitution = termForVariableSubstitution;  ///

        substitutions.addSubstitution(substitution, localContext);

        termUnified = true;
      }
    }

    if (termUnified) {
      localContext.trace(`...unified the '${termString}' term with the '${variableString}' variable.`);
    }

    return termUnified;
  }

  toJSON() {
    const typeJSON = this.type.toJSON(),
          string = this.string,
          type = typeJSON,  ///
          json = {
            string,
            type
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { string } = json,
          lexer  = fileContext.getLexer(),
          parser = fileContext.getParser(),
          variableString = string,  ///
          variableNode = variableNodeFromVariableString(variableString, lexer, parser),
          variableName = variableNameFromVariableNode(variableNode),
          node = variableNode,
          name = variableName,  ///
          type = typeFromJSON(json, fileContext),
          variable = new Variable(string, node, name, type);

    return variable;
  }

  static fromVariableNode(variableNode, localContext) {
    let variable = null;

    if (variableNode !== null) {
      const node = variableNode,  ///
            variableName = variableNameFromVariableNode(variableNode),
            string = localContext.nodeAsString(node),
            name = variableName,  ///
            type = null;

      variable = new Variable(string, node, name, type);
    }

    return variable;
  }

  static fromVariableNodeAndType(variableNode, type, localContext) {
    const node = variableNode,  ///
          variableName = variableNameFromVariableNode(variableNode),
          string = localContext.nodeAsString(node),
          name = variableName,  ///
          variable = new Variable(string, node, name, type);

    return variable;
  }

  static fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
    const { Type } = shim,
          typeNode = typeNodeQuery(variableDeclarationNode),
          variableNode = variableNodeQuery(variableDeclarationNode),
          variableName = variableNameFromVariableNode(variableNode),
          localContext = LocalContext.fromFileContext(fileContext),
          variableString = fileContext.nodeAsString(variableNode),
          string = variableString,  ///
          node = variableNode,  ///
          name = variableName,  ///
          type = Type.fromTypeNode(typeNode, localContext),
          variable = new Variable(string, node, name, type);

    return variable;
  }
}

function typeFromJSON(json, fileContext) {
  let { type } = json;

  const { name } = type,
        typeName = name;  ///

  type = fileContext.findTypeByTypeName(typeName);

  return type;
}

function termVariableFromTermNode(termNode, localContext) {
  let termVariable = null;

  const termVariableNode = termVariableNodeQuery(termNode);

  if (termVariableNode !== null) {
    const termVariableName = variableNameFromVariableNode(termVariableNode);

    termVariable = localContext.findVariableByVariableName(termVariableName);
  }

  return termVariable;
}