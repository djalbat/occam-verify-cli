"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import LocalContext from "../context/local";
import verifyMixins from "../mixins/term/verify";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query"
import { termNodeFromTermString } from "../context/partial/term";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";

const { filter, compress } = arrayUtilities;

const variableNodesQuery = nodesQuery("//variable"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      definedAssertionTermNodeQuery = nodeQuery("/definedAssertion/term"),
      containedAssertionTermNodeQuery = nodeQuery("/containedAssertion/term");

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
    const termString = term.getString(),
          equalTo = (termString === this.string);

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

    const typeName = type.getName(),
          termString = this.getString();  ///

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

    const definedAssertionTermNode = definedAssertionTermNodeQuery(definedAssertionNode);

    if (definedAssertionTermNode !== null) {
      const termNode = definedAssertionTermNode,  ///
            termVariableNode = termVariableNodeQuery(termNode);

      if (termVariableNode !== null) {
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

    const containedAssertionTermNode = containedAssertionTermNodeQuery(containedAssertionNode);

    if (containedAssertionTermNode !== null) {
      const termNode = containedAssertionTermNode,  ///
            termVariableNode = termVariableNodeQuery(termNode);

      if (termVariableNode !== null) {
        const node = termNode,  ///
              string = context.nodeAsString(node),
              type = null;

        term = new Term(string, node, type);
      }
    }

    return term;
  }
});
