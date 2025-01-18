"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import VariableAssignment from "../../assignment/variable";

const variableNodeQuery = nodeQuery("/term/variable!"),
      propertyNodeQuery = nodeQuery("/propertyAssertion/property"),
      leftTermNodeQuery = nodeQuery("/propertyAssertion/term[0]"),
      rightTermNodeQuery = nodeQuery("/propertyAssertion/term[1]"),
      propertyAssertionNodeQuery = nodeQuery("/statement/propertyAssertion");

export default domAssigned(class PropertyAssertion {
  constructor(string, node, tokens, property, leftTerm, rightTerm) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
    this.property = property;
    this.leftTerm = leftTerm;
    this.rightTerm = rightTerm;
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

  getLeftTerm() {
    return this.leftTerm;
  }

  getRightTerm() {
    return this.rightTerm;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' property assertion...`);

    const rightTermVerified = this.verifyRightTerm(assignments, stated, context);

    if (rightTermVerified) {
      const leftTermVerified = this.verifyLeftTerm(assignments, stated, context);

      if (leftTermVerified) {
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

  verifyProperty(assignments, stated, context) {
    let propertyVerified;

    const propertyString = this.property.getString(),
          propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' property assertion's '${propertyString}' property...`);

    const rightTermType = this.rightTerm.getType(),
          propertyName = this.property.getName(),
          property = rightTermType.findPropertyByPropertyName(propertyName);

    if (property === null) {
      const rightTermTypeName = rightTermType.getName();

      context.debug(`The '${propertyName}' property is not a property of the right term's '${rightTermTypeName}' type.`);
    } else {
      const leftTermType = this.leftTerm.getType(),
            propertyType = property.getType(),
            leftTermTypeEqualToOrSubTypeOfPropertyType = leftTermType.isEqualToOrSubTypeOf(propertyType);

      if (!leftTermTypeEqualToOrSubTypeOfPropertyType) {
        const leftTermTypeName = leftTermType.getName(),
              propertyTypeName = propertyType.getName();

        context.debug(`The left term's '${leftTermTypeName}' type is not equal to or a sub-type of the '${propertyName}' property's '${propertyTypeName}' type.`);
      } else {
        propertyVerified = true;
      }
    }

    if (propertyVerified) {
      context.debug(`...verified the '${propertyAssertionString}' property assertion's '${propertyString}' property.`);
    }

    return propertyVerified;
  }

  verifyLeftTerm(assignments, stated, context) {
    let leftTermVerified;

    const leftTermString = this.leftTerm.getString(),
          propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' property assertion's '${leftTermString}' left term...`);

    leftTermVerified = this.leftTerm.verify(context, () => {
      const verifiedAhead = true;

      return verifiedAhead;
    });

    if (leftTermVerified) {
      context.debug(`...verified the '${propertyAssertionString}' property assertion's '${leftTermString}' left term.`);
    }

    return leftTermVerified;
  }

  verifyRightTerm(assignments, stated, context) {
    let rightTermVerified;

    const rightTermString = this.rightTerm.getString(),
          propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' property assertion's '${rightTermString}' right term...`);

    rightTermVerified = this.rightTerm.verify(context, () => {
      const verifiedAhead = true;

      return verifiedAhead;
    });

    if (rightTermVerified) {
      context.debug(`...verified the '${propertyAssertionString}' property assertion's '${rightTermString}' right term.`);
    }

    return rightTermVerified;
  }

  verifyWhenStated(assignments, context) {
    let verifiedWhenStated = false;

    const propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' stated property assertion...`);

    if (assignments !== null) {
      const { Variable } = dom,
            leftTermNode = this.leftTerm.getNode(),
            termNode = leftTermNode,  ///
            variableNode = variableNodeQuery(termNode);

      if (variableNode)
            variable = Variable.fromVariableNodeAndType(variableNode, this.type, context);

      if (variable !== null) {
        const variableAssignment = VariableAssignment.fromVariable(variable),
              assignment = variableAssignment;  ///

        assignments.push(assignment);
      }
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
      const { Term, Property } = dom,
            node = propertyAssertionNode,  ///
            string = context.nodeAsString(node),
            tokens = context.nodeAsTokens(node),
            propertyNode = propertyNodeQuery(propertyAssertionNode),
            leftTermNode = leftTermNodeQuery(propertyAssertionNode),
            rightTermNode = rightTermNodeQuery(propertyAssertionNode),
            property = Property.fromPropertyNode(propertyNode, context),
            leftTerm = Term.fromTermNode(leftTermNode, context),
            rightTerm = Term.fromTermNode(rightTermNode, context);

      propertyAssertion = new PropertyAssertion(string, node, tokens, property, leftTerm, rightTerm);
    }

    return propertyAssertion;
  }
});
