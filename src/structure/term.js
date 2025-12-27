"use strict";

import { arrayUtilities } from "necessary";

import structure from "../structure";
import verifyMixins from "../mixins/term/verify";

import { define } from "../structure";
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

  isSingular() { return this.node.isSingular(); }

  isProvisional() { return this.type.isProvisional(); }

  matchTermNode(termNode) { return this.node.match(termNode); }

  isEqualToVariable(variable) {
    let variableNodeMathces = false;

    const singular = this.isSingular();

    if (singular) {
      const variableNode = variable.getNode(),
            singularVariableNode = this.node.getSingularVariableNode(),
            variableNodeA = variableNode, ///
            variableNodeB = singularVariableNode, ///
            matches = variableNodeA.match(variableNodeB);

      if (matches) {
        variableNodeMathces = true;
      }
    }

    return variableNodeMathces;
  }

  isEqualTo(term) {
    const termNode = term.getNode(),
          matches = this.node.match(termNode),
          equalTo = matches;  ///

    return equalTo;
  }

  isGrounded(definedVariables, context) {
    const term  = this, ///
          variables = variablesFromTerm(term, context);

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
    const term  = this, ///
          variables = variablesFromTerm(term, context),
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
    const { Type } = structure,
          termNode = constructorDeclarationNode.getTermNode(),
          term = termFromTermNode(termNode, context),
          type = Type.fromConstructorDeclarationNode(constructorDeclarationNode, context);

    term.setType(type);

    return term;
  }
});

export function variablesFromTerm(term, context) {
  const termNode = term.getNode(),
        variableNodes = termNode.getVariableNodes(),
        variables = variableNodes.map((variableNode) => {
          const variableIdentifier = variableNode.getVariableIdentifier(),
                variable = context.findVariableByVariableIdentifier(variableIdentifier);

          return variable;
        });

  compress(variables, (variableA, variableB) => {
    const variableAEqualToVariableB = variableA.isEqualTo(variableB);

    if (!variableAEqualToVariableB) {
      return true;
    }
  });

  return variables;
}

