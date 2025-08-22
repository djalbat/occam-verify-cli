"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { domAssigned } from "../dom";
import { assignAssignments } from "../utilities/assignments";

const { last } = arrayUtilities;

export default domAssigned(class SubDerivation {
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
    let verifies;

    verifies = this.stepsOrSubproofs.every((stepOrSubproof) => { ///
      const assignments = [],
            stepOrSubproofVerifies = stepOrSubproof.verify(substitutions, assignments, context);

      if (stepOrSubproofVerifies) {
        const stepOrSubproofUnifies = stepOrSubproof.unify(substitutions, context);

        if (stepOrSubproofUnifies) {
          const assignmentsAssigned = assignAssignments(assignments, context);

          if (assignmentsAssigned) {
            context.addStepOrSubproof(stepOrSubproof);

            return true;
          }
        }
      }
    });

    return verifies;
  }

  static name = "SubDerivation";

  static fromSubDerivationNode(subDerivationNode, fileContext) {
    const stepsOrSubproofs = stepOrSubproofFromSubDerivationNode(subDerivationNode, fileContext),
          subDerivation = new SubDerivation(stepsOrSubproofs);

    return subDerivation;
  }
});

function stepOrSubproofFromSubDerivationNode(subDerivationNode, fileContext) {
  const { Step, Subproof } = dom,
        stepOrSubproofNodes = subDerivationNode.getStepOrSubproofNodes(),
        stepsOrSubproofs = stepOrSubproofNodes.map((stepOrSubproofNode) => {
          const subproof = Subproof.fromStepOrSubproofNode(stepOrSubproofNode, fileContext),
                step = Step.fromStepOrSubproofNode(stepOrSubproofNode, fileContext),
                stepOrSubproof = (step || subproof);

          return stepOrSubproof;
        });

  return stepsOrSubproofs;
}