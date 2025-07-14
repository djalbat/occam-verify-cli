"use strict";

import dom from "../../dom";
import VariableAssignment from "../../assignment/variable";

import { nodeQuery } from "../../utilities/query";
import { objectType } from "../type";
import { domAssigned } from "../../dom";

const variableNodeQuery = nodeQuery("/term/variable!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion");

export default domAssigned(class TypeAssertion {
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

      verified = verifiedWhenStated || verifiedWhenDerived;
    }

    if (verified) {
      if (stated) {
        this.assign(assignments, context);
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
      const typeString = this.type.getString();

      context.trace(`Verifying the '${typeString}' type...`);

      const type = context.findTypeByTypeName(typeString);

      if (type !== null) {
        this.type = type;

        typeVerified = true;
      } else {
        context.debug(`The '${typeString}' type is not present.`);
      }

      if (typeVerified) {
        context.debug(`...verified the '${typeString}' type.`);
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
      let verifiedAhead = false;

      const termType = this.term.getType(),
            termTypeProvisional = termType.isProvisional();

      if (!termTypeProvisional) {
        const typeEqualToOrSuperTypeOfTermType = this.type.isEqualToOrSuperTypeOf(termType);

        verifiedAhead = typeEqualToOrSuperTypeOfTermType; ///
      }

      return verifiedAhead;
    });

    verifiedWhenDerived = termVerified; ///

    if (verifiedWhenDerived) {
      context.debug(`...verified the '${typeAssertionString}' derived type assertion.`);
    }

    return verifiedWhenDerived;
  }

  assign(assignments, context) {
    if (assignments === null) {
      return;
    }

    const { Type, Variable } = dom,
          termNode = this.term.getNode(),
          variableNode = variableNodeQuery(termNode);

    let type,
        provisional;

    provisional = this.type.isProvisional();

    if (!provisional) {
      type = this.type;
    } else {
      provisional = false;

      type = Type.fromTypeAndProvisional(this.type, provisional);
    }

    const variable = Variable.fromVariableNodeAndType(variableNode, type, context);

    if (variable !== null) {
      const variableAssignment = VariableAssignment.fromVariable(variable),
            assignment = variableAssignment;  ///

      assignments.push(assignment);
    }
  }

  static name = "TypeAssertion";

  static fromStatementNode(statementNode, context) {
    let typeAssertion = null;

    const typeAssertionNode = typeAssertionNodeQuery(statementNode);

    if (typeAssertionNode !== null) {
      const { Term, Type } = dom,
            node = typeAssertionNode, ///
            string = context.nodeAsString(node),
            term = Term.fromTypeAssertionNode(typeAssertionNode, context),
            type = Type.fromTypeAssertionNode(typeAssertionNode, context);

      typeAssertion = new TypeAssertion(string, term, type);
    }

    return typeAssertion;
  }
});
