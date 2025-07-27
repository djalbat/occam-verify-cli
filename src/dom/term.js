"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import LocalContext from "../context/local";
import verifyMixins from "../mixins/term/verify";

import { nodeQuery } from "../utilities/query"
import { domAssigned } from "../dom";
import { termFromTermNode } from "../utilities/node";
import { termNodeFromTermString } from "../context/partial/term";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";

const { filter, compress } = arrayUtilities;

const containedAssertionTermNodeQuery = nodeQuery("/containedAssertion/term");

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
    const termNode = this.node,
          variableNodes = termNode.getVariableNodes(),
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

  isProvisional() { return this.type.isProvisional(); }

  isEqualTo(term) {
    const termString = term.getString(),
          equalTo = (termString === this.string);

    return equalTo;
  }

  isSimple() {
    const termNode = this.node,
          singularVariableNode = termNode.getSingularVariableNode(),
          simple = (singularVariableNode !== null);

    return simple;
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

    const termString = this.string;  ///

    context.trace(`Verifying the '${termString}' term...`);

    verified = verifyMixins.some((verifyMixin) => {
      const term = this, ///
            verified = verifyMixin(term, context, verifyAhead);

      if (verified) {
        return true;
      }
    });

    if (verified) {
      context.debug(`...verified the '${termString}' term.`);
    }

    return verified;
  }

  verifyGivenType(type, generalContext, specificContext) {
    let verifiedGivenType;

    const typeString = type.getString(),
          termString = this.getString();  ///

    specificContext.trace(`Verifying the '${termString}' term given the '${typeString}' type...`);

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
      specificContext.debug(`...verified the '${termString}' term given the '${typeString}' type.`);
    }

    return verifiedGivenType;
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
          localContext = LocalContext.fromFileContext(fileContext),
          context = localContext,  ///
          termString = string,  ///
          termNode = termNodeFromTermString(termString, context),
          node = termNode,  ///
          type = typeFromJSON(json, fileContext),
          term = new Term(string, node, type);

    return term;
  }

  static fromTermNode(termNode, context) {
    const term = termFromTermNode(termNode, context);

    return term;
  }

  static fromTermNodeAndType(termNode, type, context) {
    const node = termNode,  ///
          string = context.nodeAsString(node),
          term = new Term(string, node, type);

    return term;
  }

  static fromTypeAssertionNode(typeAssertionNode, context) {
    let term = null;

    const termNode = typeAssertionNode.getTermNode();

    if (termNode !== null) {
      term = termFromTermNode(termNode, context);
    }

    return term;
  }

  static fromDefinedAssertionNode(definedAssertionNode, context) {
    let term = null;

    const termNode = definedAssertionNode.getTermNode();

    if (termNode !== null) {
      term = termFromTermNode(termNode, context);
    }

    return term;
  }

  static fromPropertyRelationNode(propertyRelationNode, context) {
    const termNode = propertyRelationNode.getTermNode(),
          term = termFromTermNode(termNode, context);

    return term;
  }

  static fromPropertyAssertionNode(propertyAssertionNode, context) {
    const termNode = propertyAssertionNode.getTermNode(),
          term = termFromTermNode(termNode, context);

    return term;
  }

  static fromContainedAssertionNode(containedAssertionNode, context) {
    let term = null;

    const termNode = containedAssertionNode.getTermNode();

    if (termNode !== null) {
      term = termFromTermNode(termNode, context);
    }

    return term;
  }

  static fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
    const { Type } = dom,
          termNode = constructorDeclarationNode.getTermNode(),
          localContext = LocalContext.fromFileContext(fileContext),
          context = localContext, ///
          term = termFromTermNode(termNode, context),
          type = Type.fromConstructorDeclarationNode(constructorDeclarationNode, context);

    term.setType(type);

    return term;
  }
});

