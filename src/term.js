"use strict";

import { arrayUtilities } from "necessary";

import shim from "./shim";
import unifyMixins from "./mixins/term/unify";
import verifyMixins from "./mixins/term/verify";
import termAsConstructorVerifier from "./verifier/termAsConstructor";

import { objectType } from "./type";
import { nodeQuery, nodesQuery } from "./utilities/query"
import { termNodeFromTermString } from "./utilities/node";
import { variableNameFromVariableNode } from "./utilities/name";
import { typeFromJSON, typeToTypeJSON } from "./utilities/json";

const { filter } = arrayUtilities;

const termNodeQuery = nodeQuery("/*/term[0]"),
      variableNodeQuery = nodeQuery("/term/variable!"),
      variableNodesQuery = nodesQuery("//variable");

class Term {
  constructor(string, node, type) {
    this.string = string;
    this.node = node;
    this.type = type;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  getVariable(localContext) {
    let variable = null;

    const variableNode = variableNodeQuery(this.node);

    if (variableNode !== null) {
      const variableName = variableNameFromVariableNode(variableNode);

      variable = localContext.findVariableByVariableName(variableName);
    }

    return variable;
  }

  getVariables(localContext) {
    const variables = [],
          variableNodes = variableNodesQuery(this.node);

    variableNodes.forEach((variableNode) => {
      const variableName = variableNameFromVariableNode(variableNode),
            variable = localContext.findVariableByVariableName(variableName),
            variablesIncludesVariable = variables.includes(variable);

      if (!variablesIncludesVariable) {
        variables.push(variable);
      }
    });

    return variables;
  }

  isGrounded(definedVariables, localContext) {
    const variables = this.getVariables(localContext);

    filter(variables, (variable) => {
      const definedVariablesIncludesVariable = definedVariables.includes(variable);

      if (!definedVariablesIncludesVariable) {
        return true;
      }
    });

    const undefinedVariables = variables, ///
          undefinedVariablesLength = undefinedVariables.length,
          grounded = (undefinedVariablesLength <= 1);

    return grounded;
  }

  isEqualTo(term) {
    let equalTo = false;

    const termNode = term.getNode(),
          termNodeMatches = this.node.match(termNode);

    if (termNodeMatches) {
      const termType = term.getType();

      if (this.type === termType) {
        equalTo = true;
      }
    }

    return equalTo;
  }

  matchTermNode(termNode) {
    const termNodeMatches = this.node.match(termNode);

    return termNodeMatches;
  }

  isInitiallyGrounded(localContext) {
    const variables = this.getVariables(localContext),
          variablesLength = variables.length,
          initiallyGrounded = (variablesLength === 0);

    return initiallyGrounded;
  }

  isImplicitlyGrounded(definedVariables, localContext) {
    const grounded = this.isGrounded(definedVariables, localContext),
          implicitlyGrounded = grounded;  ///

    return implicitlyGrounded;
  }

  verify(localContext, verifyAhead) {
    let verified = false;

    const term = this, ///
          termString = this.string;  ///

    localContext.trace(`Verifying the '${termString}' term...`);

    if (!verified) {
      verified = verifyMixins.some((verifyMixin) => {
        const verified = verifyMixin(term, localContext, verifyAhead);

        if (verified) {
          return true;
        }
      });
    }

    if (!verified) {
      const unified = unifyMixins.some((unifyMixin) => { ///
        const unified = unifyMixin(term, localContext, verifyAhead);

        if (unified) {
          return true;
        }
      });

      verified = unified; ///
    }

    if (verified) {
      localContext.debug(`...verified the '${termString}' term.`);
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

  verifyGivenType(type, localContext) {
    let verifiedGivenType;

    const typeName = type.getName(),
          termString = this.getString();

    localContext.trace(`Verifying the '${termString}' term given the '${typeName}' type...`);

    const verified = this.verify(localContext, () => {
      let verifiedAhead;

      const typeEqualToOrSubTypeOfGivenTypeType = this.type.isEqualToOrSubTypeOf(type);

      if (typeEqualToOrSubTypeOfGivenTypeType) {
        verifiedAhead = true;
      }

      return verifiedAhead;
    });

    verifiedGivenType = verified; ///

    if (verifiedGivenType) {
      localContext.debug(`...verified the '${termString}' term given the '${typeName}' type.`);
    }

    return verifiedGivenType;
  }

  verifyWhenDeclared(fileContext) {
    let verifiedAtTopLevel;

    const termString = this.string;  ///

    fileContext.trace(`Verifying the '${termString}' term when declared...`);

    const termNode = this.node, ///
          termVerifiedAsConstructor = termAsConstructorVerifier.verifyTerm(termNode, fileContext);

    if (termVerifiedAsConstructor) {
      const typeVerified = this.verifyType(fileContext);

      verifiedAtTopLevel = typeVerified;  ///
    }

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${termString}' term when declared.`);
    }

    return verifiedAtTopLevel;
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
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          termString = string,  ///
          termNode = termNodeFromTermString(termString, lexer, parser),
          node = termNode,  ///
          type = typeFromJSON(json, fileContext),
          term = new Term(string, node, type);

    return term;
  }

  static fromTermNode(termNode, localContext) {
    let term = null;

    if (termNode !== null) {
      const node = termNode,  ///
            string = localContext.nodeAsString(node),
            type = null;

      term = new Term(string, node, type);
    }

    return term;
  }

  static fromTermNodeAndType(termNode, type, localContext) {
    const node = termNode,  ///
          string = localContext.nodeAsString(node),
          term = new Term(string, node, type);

    return term;
  }

  static fromDefinedAssertionNode(definedAssertionNode, localContext) {
    let term = null;

    const termNode = termNodeQuery(definedAssertionNode);

    if (termNode !== null) {
      const variableNode = variableNodeQuery(termNode);

      if (variableNode !== null) {
        const node = termNode,  ///
              string = localContext.nodeAsString(node),
              type = null;

        term = new Term(string, node, type);
      }
    }

    return term;
  }

  static fromContainedAssertionNode(containedAssertionNode, localContext) {
    let term = null;

    const termNode = termNodeQuery(containedAssertionNode);

    if (termNode !== null) {
      const variableNode = variableNodeQuery(termNode);

      if (variableNode !== null) {
        const node = termNode,  ///
              string = localContext.nodeAsString(node),
              type = null;

        term = new Term(string, node, type);
      }
    }

    return term;
  }
}

Object.assign(shim, {
  Term
});

export default Term;
