"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import verifyMixins from "../mixins/term/verify";
import constructorVerifier from "../verifier/constructor";

import { objectType } from "./type";
import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query"
import { termNodeFromTermString } from "../nodeAndTokens/term";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";

const { filter, compress } = arrayUtilities;

const termNodeQuery = nodeQuery("/*/term[0]"),
      variableNodeQuery = nodeQuery("/term/variable!"),
      variableNodesQuery = nodesQuery("//variable");

export default domAssigned(class Term {
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
    const { Variable } = dom,
          termNode = this.node, ///
          variable = Variable.fromTermNode(termNode, context);

    return variable;
  }

  getVariables(context) {
    const variableNodes = variableNodesQuery(this.node),
          variables = variableNodes.map((variableNode) => {
            const { Variable } = dom,
                  variable = Variable.fromVariableNode(variableNode, context);

            return variable;
          });

    compress(variables, (variableA, variableB) => {
      const variableAEqualToVariableB = variableA.isEqualTo(variableB);

      if (variableAEqualToVariableB) {
        return true;
      }
    });

    return variables;
  }

  matchTermNode(termNode) {
    const termNodeMatches = this.node.match(termNode);

    return termNodeMatches;
  }

  isEqualTo(term) {
    let equalTo = false;

    const termString = term.getString();

    if (termString === this.string) {
      const termType = term.getType();

      if (termType === this.type) {
        equalTo = true;
      }
    }

    return equalTo;
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
    let verified;

    const term = this, ///
          termString = this.string;  ///

    context.trace(`Verifying the '${termString}' term...`);

    verified = verifyMixins.some((verifyMixin) => {
      const verified = verifyMixin(term, context, verifyAhead);

      if (verified) {
        return true;
      }
    });

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
    let verifiedWhenDeclared;

    const termString = this.string;  ///

    fileContext.trace(`Verifying the '${termString}' term when declared...`);

    const termNode = this.node, ///
          termVerifiedAsConstructor = constructorVerifier.verifyTerm(termNode, fileContext);

    if (termVerifiedAsConstructor) {
      const typeVerified = this.verifyType(fileContext);

      verifiedWhenDeclared = typeVerified;  ///
    }

    if (verifiedWhenDeclared) {
      fileContext.debug(`...verified the '${termString}' term when declared.`);
    }

    return verifiedWhenDeclared;
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

  static name = "Term";

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
});
