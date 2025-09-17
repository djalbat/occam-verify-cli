"use strict";

import dom from "../dom";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";

import { domAssigned } from "../dom";
import { subproofStringFromSubproofNode } from "../utilities/subproof";

export default domAssigned(class Subproof {
  constructor(string, suppositions, subDerivation) {
    this.string = string;
    this.suppositions = suppositions;
    this.subDerivation = subDerivation;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getSuppositions() {
    return this.suppositions;
  }

  getSubDerivation() {
    return this.subDerivation;
  }

  getLastStep() { return this.subDerivation.getLastStep(); }

  getStatements() {
    const lastStep = this.getLastStep(),
          suppositionStatements = this.suppositions.map((supposition) => {
            const suppositionStatement = supposition.getStatement();

            return suppositionStatement;
          }),
          lastStepStatement = lastStep.getStatement(),
          statements = [
            ...suppositionStatements,
            lastStepStatement
          ];

    return statements;
  }

  isStep() {
    const sStep = false;

    return sStep;
  }

  unify(substitutions, context) {
    let unifies;

    unifies = true; ///

    return unifies;
  }

  verify(substitutions, assignments, context) {
    let subproofVerifies = false;

    const localContext = LocalContext.fromContext(context);  ///

    context = localContext; ///

    const suppositionsVerify = this.suppositions.every((supposition) => {
      const suppositionVerifies = supposition.verify(context);

      if (suppositionVerifies) {
        return true;
      }
    });

    if (suppositionsVerify) {
      const subDerivationVerifies = this.subDerivation.verify(substitutions, context);

      if (subDerivationVerifies) {
        subproofVerifies = true;
      }
    }

    return subproofVerifies;
  }

  equateWithStatement(statement, context) {
    const statementUnifies = false;

    return statementUnifies;
  }

  unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
    let unifiesWithSatisfiesAssertion = false;

    const subproofString = this.string, ///
          satisfiesAssertionString = satisfiesAssertion.getString();

    context.trace(`Unifying the '${subproofString}' subproof with the '${satisfiesAssertionString}' satisfies assertion...`)

    const reference = satisfiesAssertion.getReference(),
          axiom = context.findAxiomByReference(reference);

    if (axiom !== null) {
      const axiomSatisfiable = axiom.isSatisfiable();

      if (axiomSatisfiable) {
        const subproof = this,  ///
              substitutions = Substitutions.fromNothing(),
              statementUnifies = axiom.unifySubproof(subproof, substitutions, context);

        if (statementUnifies) {
          const substitutionsCompare = satisfiesAssertion.compareSubstitutions(substitutions, context);

          if (substitutionsCompare) {
            unifiesWithSatisfiesAssertion = true;
          }
        }
      }
    }

    if (unifiesWithSatisfiesAssertion) {
      context.debug(`...unified the '${subproofString}' subproof with the '${satisfiesAssertionString}' satisfies assertion.`)
    }

    return unifiesWithSatisfiesAssertion;
  }

  static name = "Subproof";

  static fromStepOrSubproofNode(sStepOrSubproofNode, context) {
    let subproof = null;

    const subproofNode = sStepOrSubproofNode.isSubproofNode();

    if (subproofNode) {
      const subproofNode = sStepOrSubproofNode, ///
            suppositions = suppositionsFromSubproofNode(subproofNode, context),
            subDerivation = subDerivationFromSubproofNode(subproofNode, context),
            subproofString = subproofStringFromSubproofNode(subproofNode, context),
            string = subproofString;  ///

      subproof = new Subproof(string, suppositions, subDerivation);
    }

    return subproof;
  }
});

function suppositionsFromSubproofNode(subproofNode, context) {
  const { Supposition } = dom,
        suppositionNodes = subproofNode.getSuppositionNodes(),
        suppositions = suppositionNodes.map((suppositionNode) => {
          const supposition = Supposition.fromSuppositionNode(suppositionNode, context);

          return supposition;
        });

  return suppositions;
}

function subDerivationFromSubproofNode(subproofNode, context) {
  const { SubDerivation } = dom,
        subDerivationNode = subproofNode.getSubDerivationNode(),
        subDerivation = SubDerivation.fromSubDerivationNode(subDerivationNode, context);

  return subDerivation;
}
