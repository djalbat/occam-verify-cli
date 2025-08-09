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
    let unified;

    unified = true; ///

    return unified;
  }

  verify(substitutions, assignments, context) {
    let subproofVerified = false;

    const localContext = LocalContext.fromContext(context);  ///

    context = localContext; ///

    const suppositionsVerified = this.suppositions.every((supposition) => {
      const suppositionVerified = supposition.verify(context);

      if (suppositionVerified) {
        return true;
      }
    });

    if (suppositionsVerified) {
      const subDerivationVerified = this.subDerivation.verify(substitutions, context);

      if (subDerivationVerified) {
        subproofVerified = true;
      }
    }

    return subproofVerified;
  }

  unifySatisfiesAssertion(satisfiesAssertion, context) {
    let unifySatisfiesAssertion = false;

    const reference = satisfiesAssertion.getReference(),
          axiom = context.findAxiomByReference(reference);

    if (axiom !== null) {
      const axiomUnconditional = axiom.isUnconditional();

      if (!axiomUnconditional) {
        const subproof = this,
              fileContext = axiom.getFileContext(),
              localContext = LocalContext.fromFileContext(fileContext),
              substitutions = Substitutions.fromNothing(),
              generalContext = localContext,  ///
              specificContext = context,  ///
              statementUnified = axiom.unifySubproof(subproof, substitutions, generalContext, specificContext);

        if (statementUnified) {
          const substitutionsMatch = satisfiesAssertion.matchSubstitutions(substitutions, context);

          if (substitutionsMatch) {
            unifySatisfiesAssertion = true;
          }
        }
      }
    }

    return unifySatisfiesAssertion;
  }

  static name = "Subproof";

  static fromStepOrSubproofNode(sStepOrSubproofNode, fileContext) {
    let subproof = null;

    const subproofNode = sStepOrSubproofNode.isSubproofNode();

    if (subproofNode) {
      const subproofNode = sStepOrSubproofNode, ///
            suppositions = suppositionsFromSubproofNode(subproofNode, fileContext),
            subDerivation = subDerivationFromSubproofNode(subproofNode, fileContext),
            subproofString = subproofStringFromSubproofNode(subproofNode, fileContext),
            string = subproofString;  ///

      subproof = new Subproof(string, suppositions, subDerivation);
    }

    return subproof;
  }
});

function suppositionsFromSubproofNode(subproofNode, fileContext) {
  const { Supposition } = dom,
        suppositionNodes = subproofNode.getSuppositionNodes(),
        suppositions = suppositionNodes.map((suppositionNode) => {
          const supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);

          return supposition;
        });

  return suppositions;
}

function subDerivationFromSubproofNode(subproofNode, fileContext) {
  const { SubDerivation } = dom,
        subDerivationNode = subproofNode.getSubDerivationNode(),
        subDerivation = SubDerivation.fromSubDerivationNode(subDerivationNode, fileContext);

  return subDerivation;
}
