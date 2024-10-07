"use strict";

import shim from "../shim";
import Variable from "../variable";
import VariableAssignment from "../assignment/variable";

import { nodeQuery } from "../utilities/query";
import {objectType} from "../type";

const termNodeQuery = nodeQuery("/typeAssertion/term"),
      typeNodeQuery = nodeQuery("/typeAssertion/type"),
      variableNodeQuery = nodeQuery("/term/variable");

export default class TypeAssertion {
  constructor(string, term, type, variable) {
    this.string = string;
    this.term = term;
    this.type = type;
    this.variable = variable;
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

  getVariable() {
    return this.variable;
  }

  verify(assignments, stated, localContext) {
    let verified;

    if (stated) {
      const verifiedWhenStated = this.verifyWhenStated(assignments, localContext);

      verified = verifiedWhenStated;  ///
    } else {
      const verifiedWhenDerived = this.verifyWhenDerived(localContext);

      verified = verifiedWhenDerived; ///
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

      if (type === null) {
        localContext.debug(`The '${typeName}' type is missing.`);
      } else {
        this.type = type; ///

        typeVerified = true;
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

    localContext.trace(`Verifying the '${typeAssertionString}' type assertion when stated...`);

    const typeVerified = this.verifyType(localContext);

    if (typeVerified) {
      const termVerified = this.term.verify(localContext, () => {
        let verifiedAhead;

        const termType = this.term.getType(),
              typeEqualToOrSuperTypeOfTermType = this.type.isEqualToOrSubTypeOf(termType);

        if (typeEqualToOrSuperTypeOfTermType) {
          if (this.variable !== null) {
            this.variable.setType(this.type);

            const variableAssignment = VariableAssignment.fromVariable(this.variable),
                  assignment = variableAssignment;  ///

            assignments.push(assignment);

            verifiedAhead = true;
          }
        }

        return verifiedAhead;
      });

      verifiedWhenStated = termVerified; ///
    }

    if (verifiedWhenStated) {
      localContext.debug(`...verified the '${typeAssertionString}' type assertion when stated.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(localContext) {
    let verifiedWhenDerived = false;

    const typeAssertionString = this.string; ///

    localContext.trace(`Verifying the '${typeAssertionString}' type assertion when derived...`);

    const typeVerified = this.verifyType(localContext);

    if (typeVerified) {
      const termVerified = this.term.verify(localContext, () => {
        let verifiedAhead;

        const termType = this.term.getType(),
              typeEqualToOrSuperTypeOfTermType = this.type.isEqualToOrSuperTypeOf(termType);

        verifiedAhead = typeEqualToOrSuperTypeOfTermType; ///

        return verifiedAhead;
      });

      verifiedWhenDerived = termVerified; ///
    }

    if (verifiedWhenDerived) {
      localContext.debug(`...verified the '${typeAssertionString}' type assertion when derived.`);
    }

    return verifiedWhenDerived;
  }

  static fromTypeAssertionNode(typeAssertionNode, localContext) {
    const { Term, Type } = shim,
          termNode = termNodeQuery(typeAssertionNode),
          typeNode = typeNodeQuery(typeAssertionNode),
          variableNode = variableNodeQuery(termNode),
          term = Term.fromTermNode(termNode, localContext),
          type = Type.fromTypeNode(typeNode, localContext),
          variable = Variable.fromVariableNode(variableNode, localContext),
          string = stringFromTermAndType(term, type),
          typeAssertion = new TypeAssertion(string, term, type, variable);

    return typeAssertion;
  }
}

function stringFromTermAndType(term, type) {
  const termString = term.getString(),
        typeName = type.getName(),
        string = `${termString}:${typeName}`;

  return string;
}
