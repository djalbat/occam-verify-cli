"use strict";

import shim from "../shim";
import Variable from "../variable";
import VariableAssignment from "../assignment/variable";

import { nodeQuery } from "../utilities/query";
import { objectType } from "../type";

const termNodeQuery = nodeQuery("/typeAssertion/term"),
      typeNodeQuery = nodeQuery("/typeAssertion/type"),
      variableNodeQuery = nodeQuery("/term/variable!");

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

  verify(assignments, stated, localContext) {
    let verified = false;

    let typeAssertionString = this.string;  ///

    localContext.trace(`Verifying the '${typeAssertionString}' type assertion...`);

    const typeVerified = this.verifyType(localContext);

    if (typeVerified) {
      let verifiedWhenStated = false,
          verifiedWhenDerived = false;

      if (stated) {
        verifiedWhenStated = this.verifyWhenStated(assignments, localContext);
      } else {
        verifiedWhenDerived = this.verifyWhenDerived(localContext);
      }

      if (verifiedWhenStated || verifiedWhenDerived) {
        verified = true;
      }
    }

    if (verified) {
      localContext.debug(`...verified the '${typeAssertionString}' type assertion.`);
    }

    return verified;
  }

  verifyType(localContext) {
    let typeVerified;

    if (this.type === objectType) {
      typeVerified = true;
    } else {
      const typeName = this.type.getName();

      localContext.trace(`Verifying the '${typeName}' type...`);

      const type = localContext.findTypeByTypeName(typeName);

      if (type !== null) {
        this.type = type;

        typeVerified = true;
      } else {
        localContext.debug(`The '${typeName}' type is missing.`);
      }

      if (typeVerified) {
        localContext.debug(`...verified the '${typeName}' type.`);
      }
    }

    return typeVerified;
  }

  verifyWhenStated(assignments, localContext) {
    let verifiedWhenStated = false;

    const typeAssertionString = this.string; ///

    localContext.trace(`Verifying the '${typeAssertionString}' stated type assertion...`);

    const termVerified = this.term.verify(localContext, () => {
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
        const termNode = this.term.getNode(),
              variableNode = variableNodeQuery(termNode),
              variable = Variable.fromVariableNodeAndType(variableNode, this.type, localContext);

        if (variable !== null) {
          const variableAssignment = VariableAssignment.fromVariable(variable),
                assignment = variableAssignment;  ///

          assignments.push(assignment);
        }
      }

      verifiedWhenStated = true;
    }

    if (verifiedWhenStated) {
      localContext.debug(`...verified the '${typeAssertionString}' stated type assertion.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(localContext) {
    let verifiedWhenDerived;

    const typeAssertionString = this.string; ///

    localContext.trace(`Verifying the '${typeAssertionString}' derived type assertion...`);

    const termVerified = this.term.verify(localContext, () => {
      let verifiedAhead;

      const termType = this.term.getType(),
            typeEqualToOrSuperTypeOfTermType = this.type.isEqualToOrSuperTypeOf(termType);

      verifiedAhead = typeEqualToOrSuperTypeOfTermType; ///

      return verifiedAhead;
    });

    verifiedWhenDerived = termVerified; ///

    if (verifiedWhenDerived) {
      localContext.debug(`...verified the '${typeAssertionString}' derived type assertion.`);
    }

    return verifiedWhenDerived;
  }

  static fromTypeAssertionNode(typeAssertionNode, localContext) {
    let typeAssertion = null;

    if (typeAssertionNode !== null) {
      const { Term, Type } = shim,
            termNode = termNodeQuery(typeAssertionNode),
            typeNode = typeNodeQuery(typeAssertionNode),
            term = Term.fromTermNode(termNode, localContext),
            type = Type.fromTypeNode(typeNode, localContext),
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
