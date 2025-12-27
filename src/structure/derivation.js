"use strict";

import { arrayUtilities } from "necessary";

import structure from "../structure";

import { define } from "../structure";
import { assignAssignments } from "../utilities/assignments";

const { last } = arrayUtilities;

export default define(class Derivation {
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

  static name = "Derivation";

  static fromDerivationNode(derivationNode, context) {
    const stepsOrSubproofs = stepsOrSubproofsFromDerivationNode(derivationNode, context),
          derivation = new Derivation(stepsOrSubproofs);

    return derivation;
  }
});

function stepsOrSubproofsFromDerivationNode(derivationNode, context) {
  const { Step, Subproof } = structure,
        stepOrSubproofNodes = derivationNode.getStepOrSubproofNodes(),
        stepsOrSubproofs = stepOrSubproofNodes.map((stepOrSubproofNode) => {
          let stepOrSubproof;

          const step = Step.fromStepOrSubproofNode(stepOrSubproofNode, context),
                subproof = Subproof.fromStepOrSubproofNode(stepOrSubproofNode, context);

          if (false) {
            ///
          } else if (step !== null) {
            stepOrSubproof = step;  ///
          } else if (subproof !== null) {
            stepOrSubproof = subproof;  ///
          }

          return stepOrSubproof;
        });

  return stepsOrSubproofs;
}