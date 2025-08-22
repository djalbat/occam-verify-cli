"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { domAssigned } from "../dom";
import { assignAssignments } from "../utilities/assignments";

const { last } = arrayUtilities;

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

  static fromDerivationNode(derivationNode, fileContext) {
    const stepsOrSubproofs = stepsOrSubproofsFromDerivationNode(derivationNode, fileContext),
          derivation = new Derivation(stepsOrSubproofs);

    return derivation;
  }
});

function stepsOrSubproofsFromDerivationNode(derivationNode, fileContext) {
  const { Step, Subproof } = dom,
        stepOrSubproofNodes = derivationNode.getStepOrSubproofNodes(),
        stepsOrSubproofs = stepOrSubproofNodes.map((stepOrSubproofNode) => {
          let stepOrSubproof;

          const step = Step.fromStepOrSubproofNode(stepOrSubproofNode, fileContext),
                subproof = Subproof.fromStepOrSubproofNode(stepOrSubproofNode, fileContext);

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