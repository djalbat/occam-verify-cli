"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import VariableAssignment from "../../assignment/variable";

const termNodeQuery = nodeQuery("/propertyAssertion/term"),
      variableNodeQuery = nodeQuery("/propertyAssertion/variable"),
      propertyNodeQuery = nodeQuery("/propertyAssertion/property"),
      propertyAssertionNodeQuery = nodeQuery("/statement/propertyAssertion");

export default domAssigned(class PropertyAssertion {
  constructor(string, node, tokens, property, variable, term) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
    this.property = property;
    this.variable = variable;
    this.term = term;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  getProperty() {
    return this.property;
  }

  getVariable() {
    return this.variable;
  }

  getTerm() {
    return this.term;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' property assertion...`);

    const variableVerified = this.verifyVariable(assignments, stated, context);

    if (variableVerified) {
      const termVerified = this.verifyTerm(assignments, stated, context);

      if (termVerified) {
        const propertyVerified = this.verifyProperty(assignments, stated, context);

        if (propertyVerified) {
          let verifiedWhenStated = false,
              verifiedWhenDerived = false;

          if (stated) {
            verifiedWhenStated = this.verifyWhenStated(assignments, context);
          } else {
            verifiedWhenDerived = this.verifyWhenDerived(context);
          }

          if (verifiedWhenStated || verifiedWhenDerived) {
            verified = true;
          }
        }
      }
    }

    if (verified) {
      context.debug(`...verified the '${propertyAssertionString}' property assertion.`);
    }

    return verified;
  }

  verifyTerm(assignments, stated, context) {
    let termVerified;

    const termString = this.term.getString(),
      propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' property assertion's '${termString}' term...`);

    termVerified = this.term.verify(context, () => {
      const verifiedAhead = true;

      return verifiedAhead;
    });

    if (termVerified) {
      context.debug(`...verified the '${propertyAssertionString}' property assertion's '${termString}' term.`);
    }

    return termVerified;
  }

  verifyVariable(assignments, stated, context) {
    let variableVerified;

    const variableString = this.variable.getString(),
          propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' property assertion's '${variableString}' variable...`);

    variableVerified = this.variable.verify(context);

    if (variableVerified) {
      context.debug(`...verified the '${propertyAssertionString}' property assertion's '${variableString}' variable.`);
    }

    return variableVerified;
  }

  verifyProperty(assignments, stated, context) {
    let propertyVerified;

    const propertyString = this.property.getString(),
          propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' property assertion's '${propertyString}' property...`);

    const termType = this.term.getType(),
          propertyName = this.property.getName(),
          property = termType.findPropertyByPropertyName(propertyName);

    if (property === null) {
      const termTypeName = termType.getName();

      context.debug(`The '${propertyName}' property is not a property of the term's '${termTypeName}' type.`);
    } else {
      const variableType = this.variable.getType(),
            propertyType = property.getType(),
            variableTypeEqualToOrSubTypeOfPropertyType = variableType.isEqualToOrSubTypeOf(propertyType);

      if (!variableTypeEqualToOrSubTypeOfPropertyType) {
        const variableTypeName = variableType.getName(),
              propertyTypeName = propertyType.getName();

        context.debug(`The variable's '${variableTypeName}' type is not equal to or a sub-type of the '${propertyName}' property's '${propertyTypeName}' type.`);
      } else {
        propertyVerified = true;
      }
    }

    if (propertyVerified) {
      context.debug(`...verified the '${propertyAssertionString}' property assertion's '${propertyString}' property.`);
    }

    return propertyVerified;
  }

  verifyWhenStated(assignments, context) {
    let verifiedWhenStated = false;

    const propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' stated property assertion...`);

    if (assignments !== null) {
      const { Variable } = dom,
            termNode = this.term.getNode(),
            variableNode = variableNodeQuery(termNode),
            variable = Variable.fromVariableNodeAndType(variableNode, this.type, context);

    }

    verifiedWhenStated = true;

    if (verifiedWhenStated) {
      context.debug(`...verified the '${propertyAssertionString}' stated property assertion.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(assignments, context) {
    let verifiedWhenDerived = false;

    const propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' derived property assertion...`);

    debugger

    if (verifiedWhenDerived) {
      context.debug(`...verified the '${propertyAssertionString}' derived property assertion.`);
    }

    return verifiedWhenDerived;
  }

  static name = "PropertyAssertion";

  static fromStatementNode(statementNode, context) {
    let propertyAssertion = null;

    const propertyAssertionNode = propertyAssertionNodeQuery(statementNode);

    if (propertyAssertionNode !== null) {
      const { Term, Variable, Property } = dom,
            node = propertyAssertionNode,  ///
            string = context.nodeAsString(node),
            tokens = context.nodeAsTokens(node),
            propertyNode = propertyNodeQuery(propertyAssertionNode),
            variableNode = variableNodeQuery(propertyAssertionNode),
            termNode = termNodeQuery(propertyAssertionNode),
            property = Property.fromPropertyNode(propertyNode, context),
            variable = Variable.fromVariableNode(variableNode, context),
            term = Term.fromTermNode(termNode, context);

      propertyAssertion = new PropertyAssertion(string, node, tokens, property, variable, term);
    }

    return propertyAssertion;
  }
});
