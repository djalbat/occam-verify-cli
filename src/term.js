"use strict";

import { arrayUtilities } from "necessary";

import shim from "./shim";
import unifyMixins from "./mixins/term/unify";
import verifyMixins from "./mixins/term/verify";
import constructorVerifier from "./verifier/constructor";

import { objectType } from "./type";
import { nodeQuery, nodesQuery } from "./utilities/query"
import { termNodeFromTermString } from "./nodeAndTokens/term";
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

  getVariable(context) {
    let variable = null;

    const variableNode = variableNodeQuery(this.node);

    if (variableNode !== null) {
      const generalContext = context, ///
            variableName = variableNameFromVariableNode(variableNode);

      variable = generalContext.findVariableByVariableName(variableName);
    }

    return variable;
  }

  getVariables(context) {
    const variables = [],
          variableNodes = variableNodesQuery(this.node);

    variableNodes.forEach((variableNode) => {
      const generalContext = context, ///
            variableName = variableNameFromVariableNode(variableNode),
            variable = generalContext.findVariableByVariableName(variableName),
            variablesIncludesVariable = variables.includes(variable);

      if (!variablesIncludesVariable) {
        variables.push(variable);
      }
    });

    return variables;
  }

  isGrounded(definedVariables, context) {
    const variables = this.getVariables(context);

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

    if (term !== null) {
      const termString = term.getString();

      if (termString === this.string) {
        const termType = term.getType();

        if (termType === this.type) {
          equalTo = true;
        }
      }
    }

    return equalTo;
  }

  isInitiallyGrounded(context) {
    const variables = this.getVariables(context),
          variablesLength = variables.length,
          initiallyGrounded = (variablesLength === 0);

    return initiallyGrounded;
  }

  isImplicitlyGrounded(definedVariables, context) {
    const grounded = this.isGrounded(definedVariables, context),
          implicitlyGrounded = grounded;  ///

    return implicitlyGrounded;
  }

  verify(context, verifyAhead) {
    let verified = false;

    const term = this, ///
          termString = this.string;  ///

    context.trace(`Verifying the '${termString}' term...`);

    if (!verified) {
      verified = verifyMixins.some((verifyMixin) => {
        const verified = verifyMixin(term, context, verifyAhead);

        if (verified) {
          return true;
        }
      });
    }

    if (!verified) {
      const unified = unifyMixins.some((unifyMixin) => { ///
        const unified = unifyMixin(term, context, verifyAhead);

        if (unified) {
          return true;
        }
      });

      verified = unified; ///
    }

    if (verified) {
      context.debug(`...verified the '${termString}' term.`);
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

  verifyGivenType(type, generalContext, specificContext) {
    let verifiedGivenType;

    const typeName = type.getName(),
          termString = this.getString();

    specificContext.trace(`Verifying the '${termString}' term given the '${typeName}' type...`);

    const context = specificContext, ///
          verified = this.verify(context, () => {
            let verifiedAhead;

            const typeEqualToOrSubTypeOfGivenTypeType = this.type.isEqualToOrSubTypeOf(type);

            if (typeEqualToOrSubTypeOfGivenTypeType) {
              verifiedAhead = true;
            }

            return verifiedAhead;
          });

    verifiedGivenType = verified; ///

    if (verifiedGivenType) {
      specificContext.debug(`...verified the '${termString}' term given the '${typeName}' type.`);
    }

    return verifiedGivenType;
  }

  verifyWhenDeclared(fileContext) {
    let verifiedAtTopLevel;

    const termString = this.string;  ///

    fileContext.trace(`Verifying the '${termString}' term when declared...`);

    const termNode = this.node, ///
          termVerifiedAsConstructor = constructorVerifier.verifyTerm(termNode, fileContext);

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
          context = fileContext,  ///
          termString = string,  ///
          termNode = termNodeFromTermString(termString, context),
          node = termNode,  ///
          type = typeFromJSON(json, fileContext),
          term = new Term(string, node, type);

    return term;
  }

  static fromTermNode(termNode, context) {
    let term = null;

    if (termNode !== null) {
      const node = termNode,  ///
            string = context.nodeAsString(node),
            type = null;

      term = new Term(string, node, type);
    }

    return term;
  }

  static fromTermNodeAndType(termNode, type, context) {
    const node = termNode,  ///
          string = context.nodeAsString(node),
          term = new Term(string, node, type);

    return term;
  }

  static fromDefinedAssertionNode(definedAssertionNode, context) {
    let term = null;

    const termNode = termNodeQuery(definedAssertionNode);

    if (termNode !== null) {
      const variableNode = variableNodeQuery(termNode);

      if (variableNode !== null) {
        const node = termNode,  ///
              string = context.nodeAsString(node),
              type = null;

        term = new Term(string, node, type);
      }
    }

    return term;
  }

  static fromContainedAssertionNode(containedAssertionNode, context) {
    let term = null;

    const termNode = termNodeQuery(containedAssertionNode);

    if (termNode !== null) {
      const variableNode = variableNodeQuery(termNode);

      if (variableNode !== null) {
        const node = termNode,  ///
              string = context.nodeAsString(node),
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
