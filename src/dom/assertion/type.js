"use strict";

import dom from "../../dom";
import VariableAssignment from "../../assignment/variable";

import { domAssigned } from "../../dom";

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
    let verifies = false;

    let typeAssertionString = this.string;  ///

    context.trace(`Verifying the '${typeAssertionString}' type assertion...`);

    const typeVerifies = this.verifyType(context);

    if (typeVerifies) {
      let verifiesWhenStated = false,
          verifiesWhenDerived = false;

      if (stated) {
        verifiesWhenStated = this.verifyWhenStated(assignments, context);
      } else {
        verifiesWhenDerived = this.verifyWhenDerived(context);
      }

      if (verifiesWhenStated || verifiesWhenDerived) {
        verifies = true;
      }
    }

    if (verifies) {
      if (stated) {
        this.assign(assignments, context);
      }
    }

    if (verifies) {
      context.debug(`...verified the '${typeAssertionString}' type assertion.`);
    }

    return verifies;
  }

  verifyType(context) {
    let typeVerifies;

    const typeString = this.type.getString();

    context.trace(`Verifying the '${typeString}' type...`);

    const nominalTypeName = this.type.getNominalTypeName(),
          type = context.findTypeByNominalTypeName(nominalTypeName);

    if (type !== null) {
      this.type = type;

      typeVerifies = true;
    } else {
      context.debug(`The '${typeString}' type is not present.`);
    }

    if (typeVerifies) {
      context.debug(`...verified the '${typeString}' type.`);
    }

    return typeVerifies;
  }

  verifyWhenStated(assignments, context) {
    let verifiesWhenStated = false;

    const typeAssertionString = this.string; ///

    context.trace(`Verifying the '${typeAssertionString}' stated type assertion...`);

    const termVerifies = this.term.verify(context, () => {
      let verifiesAhead;

      const termType = this.term.getType(),
            typeEqualToOrSubTypeOfTermType = this.type.isEqualToOrSubTypeOf(termType);

      if (typeEqualToOrSubTypeOfTermType) {
        verifiesAhead = true;
      }

      return verifiesAhead;
    });

    if (termVerifies) {
      verifiesWhenStated = true;
    }

    if (verifiesWhenStated) {
      context.debug(`...verified the '${typeAssertionString}' stated type assertion.`);
    }

    return verifiesWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiesWhenDerived;

    const typeAssertionString = this.string; ///

    context.trace(`Verifying the '${typeAssertionString}' derived type assertion...`);

    const termVerifies = this.term.verify(context, () => {
      let verifiesAhead = false;

      const termType = this.term.getType(),
            termTypeProvisional = termType.isProvisional();

      if (!termTypeProvisional) {
        const typeEqualToOrSuperTypeOfTermType = this.type.isEqualToOrSuperTypeOf(termType);

        verifiesAhead = typeEqualToOrSuperTypeOfTermType; ///
      }

      return verifiesAhead;
    });

    verifiesWhenDerived = termVerifies; ///

    if (verifiesWhenDerived) {
      context.debug(`...verified the '${typeAssertionString}' derived type assertion.`);
    }

    return verifiesWhenDerived;
  }

  assign(assignments, context) {
    if (assignments === null) {
      return;
    }

    const { Type, Variable } = dom,
          termNode = this.term.getNode();

    let type,
        provisional;

    provisional = this.type.isProvisional();

    if (!provisional) {
      type = this.type;
    } else {
      provisional = false;

      type = Type.fromTypeAndProvisional(this.type, provisional);
    }

    const singularVariableNode = termNode.getSingularVariableNode();

    if (singularVariableNode !== null) {
      const variableNode = singularVariableNode,  ///
            variable = Variable.fromVariableNodeAndType(variableNode, type, context),
            variableAssignment = VariableAssignment.fromVariable(variable),
            assignment = variableAssignment;  ///

      assignments.push(assignment);
    }
  }

  static name = "TypeAssertion";

  static fromStatementNode(statementNode, context) {
    let typeAssertion = null;

    const typeAssertionNode = statementNode.getTypeAssertionNode();

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
