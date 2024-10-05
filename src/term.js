"use strict";

import shim from "./shim";
import Type from "./type";
import unifyMixins from "./mixins/term/unify";
import verifyMixins from "./mixins/term/verify";
import termAsConstructorVerifier from "./verifier/termAsConstructor";

import { filter } from "./utilities/array";
import { objectType } from "./type";
import { nodesQuery } from "./utilities/query"
import { OBJECT_TYPE_NAME } from "./typeNames";
import { termNodeFromTermString } from "./utilities/node";

const variableNodesQuery = nodesQuery("//variable");

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

  match(term) {
    const node = term.getNode(),
          matches = this.node.match(node);

    return matches;
  }

  getVariables(localContext) {
    const variables = [],
          variableNodes = variableNodesQuery(this.node);

    variableNodes.forEach((variableNode) => {
      const variable = localContext.findVariableByVariableNode(variableNode),
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
      const unified = unifyMixins.some((unifyMixin) => { ///
        const unified = unifyMixin(term, localContext, verifyAhead);

        if (unified) {
          return true;
        }
      });

      verified = unified; ///
    }

    if (!verified) {
      verified = verifyMixins.some((verifyMixin) => {
        const verified = verifyMixin(term, localContext, verifyAhead);

        if (verified) {
          return true;
        }
      });
    }

    if (verified) {
      localContext.debug(`...verified the '${termString}' term.`);
    }

    return verified;
  }

  verifyType(fileContext) {
    let typeVerified;

    if (this.type === null) {
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

  unifyWithType(type, localContext) {
    let unifiedWithType;

    const termString = this.getString(),
          typeString = type.getString();

    localContext.trace(`Unifying the '${termString}' term with the '${typeString}' type...`);

    const typeName = type.getName(),
          typeNameObjectTypeName = (typeName === OBJECT_TYPE_NAME);

    type = typeNameObjectTypeName ?
             objectType :
               localContext.findTypeByTypeName(typeName); ///

    const verifiedGivenType = this.verifyGivenType(type, localContext);

    unifiedWithType = verifiedGivenType;  ///

    if (unifiedWithType) {
      localContext.debug(`...unified the '${termString}' term with the '${typeString}' type.`);
    }

    return unifiedWithType;
  }

  verifyGivenType(type, localContext) {
    let verifiedGivenType;

    const termString = this.getString(),
          typeString = type.getString();

    localContext.trace(`Verifying the '${termString}'  term given the '${typeString}' type...`);

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
      localContext.debug(`...verified the '${termString}'  term given the '${typeString}' type.`);
    }

    return verifiedGivenType;
  }

  verifyAtTopLevel(fileContext) {
    let verifiedAtTopLevel;

    const termString = this.string;  ///

    fileContext.trace(`Verifying the '${termString}' term at top level...`);

    const termNode = this.node;  ///

    verifiedAtTopLevel = termAsConstructorVerifier.verifyTerm(termNode, fileContext);

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${termString}' term at top level.`, termNode);
    }

    return verifiedAtTopLevel;
  }

  toJSON() {
    const typeJSON = (this.type !== null) ?
                       this.type.toJSON() :
                         null,
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
          termString = string,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          termNode = termNodeFromTermString(termString, lexer, parser),
          node = termNode;

    let { type } = json;

    const typeJSON = type;  ///

    json = typeJSON;  ///

    type = (json !== null) ?
             Type.fromJSON(json, fileContext) :
               null;

    const term = new Term(string, node, type);

    return term;
  }

  static fromTermNode(termNode, localContext) {
    const node = termNode,  ///
          string = localContext.nodeAsString(node),
          type = null,
          term = new Term(string, node, type);

    return term;
  }

  static fromTermNodeAndType(termNode, type, fileContext) {
    const node = termNode,  ///
          string = fileContext.nodeAsString(node),
          term = new Term(string, node, type);

    return term;
  }
}

Object.assign(shim, {
  Term
});

export default Term;