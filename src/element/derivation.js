"use strict";

import { arrayUtilities } from "necessary";

import Element from "../element";
import assignAssignments from "../process/assign";

import { define } from "../elements";

const { last } = arrayUtilities;

export default define(class Derivation extends Element {
  constructor(context, string, node, stepsOrSubproofs) {
    super(context, string, node);

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
        const assignmentsAssigned = assignAssignments(assignments, context);

        if (assignmentsAssigned) {
          context.addStepOrSubproof(stepOrSubproof);

          return true;
        }
      }
    });

    return verifies;
  }

  static name = "Derivation";
});

