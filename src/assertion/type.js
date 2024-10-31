"use strict";

import shim from "../shim";
import VariableAssignment from "../assignment/variable";

import { nodeQuery } from "../utilities/query";
import { objectType } from "../type";

const termNodeQuery = nodeQuery("/typeAssertion/term"),
      typeNodeQuery = nodeQuery("/typeAssertion/type"),
      variableNodeQuery = nodeQuery("/term/variable!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion");

export default class TypeAssertion {
  constructor(string, term, type) {
    this.string = string;
    this.term = term;
    this.type = type;
  }

  getString() {
    return this.string;
  }

  getTerm() {
    return this.term;
  }

  getType() {
    return this.type;
  }

  verify(assignments, stated, context) {
    let verified = false;

    let typeAssertionString = this.string;  ///

    context.trace(`Verifying the '${typeAssertionString}' type assertion...`);

    const typeVerified = this.verifyType(context);

    if (typeVerified) {
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

    if (verified) {
      context.debug(`...verified the '${typeAssertionString}' type assertion.`);
    }

    return verified;
  }

  verifyType(context) {
    let typeVerified;

    if (this.type === objectType) {
      typeVerified = true;
    } else {
      const typeName = this.type.getName();

      context.trace(`Verifying the '${typeName}' type...`);

      const type = context.findTypeByTypeName(typeName);

      if (type !== null) {
        this.type = type;

        typeVerified = true;
      } else {
        context.debug(`The '${typeName}' type is missing.`);
      }

      if (typeVerified) {
        context.debug(`...verified the '${typeName}' type.`);
      }
    }

    return typeVerified;
  }

  verifyWhenStated(assignments, context) {
    let verifiedWhenStated = false;

    const typeAssertionString = this.string; ///

    context.trace(`Verifying the '${typeAssertionString}' stated type assertion...`);

    const termVerified = this.term.verify(context, () => {
      let verifiedAhead;

      const termType = this.term.getType(),
            typeEqualToOrSubTypeOfTermType = this.type.isEqualToOrSubTypeOf(termType);

      if (typeEqualToOrSubTypeOfTermType) {
        verifiedAhead = true;
      }

      return verifiedAhead;
    });

    if (termVerified) {
      if (assignments !== null) {
        const { Variable } = shim,
              termNode = this.term.getNode(),
              variableNode = variableNodeQuery(termNode),
              variable = Variable.fromVariableNodeAndType(variableNode, this.type, context);

        if (variable !== null) {
          const variableAssignment = VariableAssignment.fromVariable(variable),
                assignment = variableAssignment;  ///

          assignments.push(assignment);
        }
      }

      verifiedWhenStated = true;
    }

    if (verifiedWhenStated) {
      context.debug(`...verified the '${typeAssertionString}' stated type assertion.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiedWhenDerived;

    const typeAssertionString = this.string; ///

    context.trace(`Verifying the '${typeAssertionString}' derived type assertion...`);

    const termVerified = this.term.verify(context, () => {
      let verifiedAhead;

      const termType = this.term.getType(),
            typeEqualToOrSuperTypeOfTermType = this.type.isEqualToOrSuperTypeOf(termType);

      verifiedAhead = typeEqualToOrSuperTypeOfTermType; ///

      return verifiedAhead;
    });

    verifiedWhenDerived = termVerified; ///

    if (verifiedWhenDerived) {
      context.debug(`...verified the '${typeAssertionString}' derived type assertion.`);
    }

    return verifiedWhenDerived;
  }

  static fromStatementNode(statementNode, context) {
    let typeAssertion = null;

    const typeAssertionNode = typeAssertionNodeQuery(statementNode);

    if (typeAssertionNode !== null) {
      const { Term, Type } = shim,
            termNode = termNodeQuery(typeAssertionNode),
            typeNode = typeNodeQuery(typeAssertionNode),
            term = Term.fromTermNode(termNode, context),
            type = Type.fromTypeNode(typeNode, context),
            string = stringFromTermAndType(term, type);

      typeAssertion = new TypeAssertion(string, term, type);
    }

    return typeAssertion;
  }
}

function stringFromTermAndType(term, type) {
  const termString = term.getString(),
        typeName = type.getName(),
        string = `${termString}:${typeName}`;

  return string;
}
