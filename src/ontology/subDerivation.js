"use strict";

import { arrayUtilities } from "necessary";

import ontology from "../ontology";

import { define } from "../ontology";
import { assignAssignments } from "../utilities/assignments";

const { last } = arrayUtilities;

export default define(class SubDerivation {
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

  static fromSubDerivationNode(subDerivationNode, context) {
    const stepsOrSubproofs = stepOrSubproofFromSubDerivationNode(subDerivationNode, context),
          subDerivation = new SubDerivation(stepsOrSubproofs);

    return subDerivation;
  }
});

function stepOrSubproofFromSubDerivationNode(subDerivationNode, context) {
  const { Step, Subproof } = ontology,
        stepOrSubproofNodes = subDerivationNode.getStepOrSubproofNodes(),
        stepsOrSubproofs = stepOrSubproofNodes.map((stepOrSubproofNode) => {
          const subproof = Subproof.fromStepOrSubproofNode(stepOrSubproofNode, context),
                step = Step.fromStepOrSubproofNode(stepOrSubproofNode, context),
                stepOrSubproof = (step || subproof);

          return stepOrSubproof;
        });

  return stepsOrSubproofs;
}