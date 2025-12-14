"use strict";

import { arrayUtilities } from "necessary";

import ontology from "../ontology";
import verifyMixins from "../mixins/term/verify";

import { define } from "../ontology";
import { termFromTermNode } from "../utilities/node";
import { termNodeFromTermString } from "../context/partial/term";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";

const { filter, compress } = arrayUtilities;

export default define(class Term {
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
    const { Variable } = ontology,
          termNode = this.node, ///
          variable = Variable.fromTermNode(termNode, context);

    return variable;
  }

  getVariables(context) {
    const termNode = this.node,
          variableNodes = termNode.getVariableNodes(),
          variables = variableNodes.map((variableNode) => {
            const { Variable } = ontology,
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

  matchTermNode(termNode) { return this.node.match(termNode); }

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
    let verifies;

    const termString = this.string;  ///

    context.trace(`Verifying the '${termString}' term...`);

    verifies = verifyMixins.some((verifyMixin) => {
      const term = this, ///
            verifies = verifyMixin(term, context, verifyAhead);

      if (verifies) {
        return true;
      }
    });

    if (verifies) {
      const term = this;  ///

      context.addTerm(term);

      context.debug(`...verified the '${termString}' term.`);
    }

    return verifies;
  }

  verifyGivenType(type, generalContext, specificContext) {
    let verifiesGivenType;

    const typeString = type.getString(),
          termString = this.getString();  ///

    specificContext.trace(`Verifying the '${termString}' term given the '${typeString}' type...`);

    const context = specificContext, ///
          verifies = this.verify(context, () => {
            let verifiesAhead;

            const typeEqualToOrSubTypeOfGivenTypeType = this.type.isEqualToOrSubTypeOf(type);

            if (typeEqualToOrSubTypeOfGivenTypeType) {
              verifiesAhead = true;
            }

            return verifiesAhead;
          });

    verifiesGivenType = verifies; ///

    if (verifiesGivenType) {
      specificContext.debug(`...verified the '${termString}' term given the '${typeString}' type.`);
    }

    return verifiesGivenType;
  }

  toJSON() {
    const typeJSON = typeToTypeJSON(this.type),
          string = this.string, ///
          type = typeJSON,  ///
          json = {
            type,
            string
          };

    return json;
  }

  static name = "Term";

  static fromJSON(json, context) {
    const { string } = json,
          termString = string,  ///
          termNode = termNodeFromTermString(termString, context),
          node = termNode,  ///
          type = typeFromJSON(json, context),
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

  static fromConstructorDeclarationNode(constructorDeclarationNode, context) {
    const { Type } = ontology,
          termNode = constructorDeclarationNode.getTermNode(),
          term = termFromTermNode(termNode, context),
          type = Type.fromConstructorDeclarationNode(constructorDeclarationNode, context);

    term.setType(type);

    return term;
  }
});

