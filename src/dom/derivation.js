"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { nodesQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { assignAssignments } from "../utilities/assignments";

const { last } = arrayUtilities;

const stepOrSubproofNodesQuery = nodesQuery("/derivation/step|subproof");

export default domAssigned(class Derivation {
  constructor(stepsOrSubproofs) {
    this.stepsOrSubproofs = stepsOrSubproofs;
  }

  getStepsOrSubproofs() {
    return this.stepsOrSubproofs;
  }

  getLastStep() {
    const lastStepOrSubproof = last(this.stepsOrSubproofs),
          lastStep = lastStepOrSubproof;  ///

    return lastStep;
  }

  verify(substitutions, context) {
    let verified;

    verified = this.stepsOrSubproofs.every((stepOrSubproof) => { ///
      const assignments = [],
            stepOrSubproofVerified = stepOrSubproof.verify(substitutions, assignments, context);

      if (stepOrSubproofVerified) {
        const stepOrSubproofUnified = stepOrSubproof.unify(substitutions, context);

        if (stepOrSubproofUnified) {
          const assignmentsAssigned = assignAssignments(assignments, context);

          if (assignmentsAssigned) {
            context.addStepOrSubproof(stepOrSubproof);

            return true;
          }
        }
      }
    });

    return verified;
  }

  static name = "Derivation";

  static fromDerivationNode(derivationNode, fileContext) {
    const stepsOrSubproofs = stepsOrSubproofsFromDerivationNode(derivationNode, fileContext),
          derivation = new Derivation(stepsOrSubproofs);

    return derivation;
  }
});

function stepsOrSubproofsFromDerivationNode(derivationNode, fileContext) {
  const { Step, Subproof } = dom,
        stepOrSubproofNodes = stepOrSubproofNodesQuery(derivationNode),
        stepsOrSubproofs = stepOrSubproofNodes.map((stepOrSubproofNode) => {
          const subproof = Subproof.fromStepOrSubproofNode(stepOrSubproofNode, fileContext),
                step = Step.fromStepOrSubproofNode(stepOrSubproofNode, fileContext),
                stepOrSubproof = (step || subproof);

          return stepOrSubproof;
        });

  return stepsOrSubproofs;
}