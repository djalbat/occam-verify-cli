"use strict";

import { arrayUtilities } from "necessary";

import assignAssignments from "../process/assign";

import { define } from "../elements";

const { last } = arrayUtilities;

export default define(class SubDerivation {
  constructor(context, string, node, stepsOrSubproofs) {
    this.context = context;
    this.string = string;
    this.node = node;
    this.stepsOrSubproofs = stepsOrSubproofs;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
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
});
