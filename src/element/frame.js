"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { FRAME_META_TYPE_NAME } from "../metaTypeNames";
import { findMetaTypeByMetaTypeName } from "../metaTypes";
import { assumptionsStringFromAssumptions } from "../utilities/string";

export default define(class Frame extends Element {
  constructor(context, string, node, assumptions, metavairable) {
    super(context, string, node);

    this.assumptions = assumptions;
    this.metavariable = metavairable;
  }

  getAssumptions() {
    return this.assumptions;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getMetavariableName() {
    const node = this.getNode(),
          metavariableName = node.getMetavariableName();

    return metavariableName;
  }

  isSingular() {
    const node = this.getNode(),
          frameNode = node, ///
          singular = frameNode.isSingular();

    return singular;
  }

  isMetavariableEqualToMetavariable(metavariable, context) {
    let metavariableEqualToMetavariable;

    const singular = this.isSingular();

    if (singular) {
      const node = this.getNode(),
            metavariableA = metavariable, ///
            singularMetavariableNode = node.getSingularMetavariableNode(),
            metavariableName = singularMetavariableNode.getMetavariableName();

      metavariable = context.findMetavariableByMetavariableName(metavariableName)

      const metavariableB = metavariable,
            equalTo = metavariableA.isEqualTo(metavariableB);

      metavariableEqualToMetavariable = equalTo;  ///
    }

    return metavariableEqualToMetavariable;
  }

  isEqualTo(frame) {
    const frameA = this, ///
          frameB = frame, ///
          frameANode = frameA.getNode(),
          frameBNode = frameB.getNode(),
          frameANodeMatchesFrameBNode = frameANode.match(frameBNode),
          equalTo = frameANodeMatchesFrameBNode; ///

    return equalTo;
  }

  compareParameter(parameter) {
    let comparesToParamter = false;

    const singular = this.isSingular();

    if (singular) {
      const parameterName = parameter.getName();

      if (parameterName !== null) {
        const metavariableName = this.getMetavariableName();

        if (parameterName === metavariableName) {
          comparesToParamter = true;
        }
      }
    }

    return comparesToParamter;
  }

  compareSubstitution(substitution, context) {
    let comparesToSubstitution = false;

    const frameString = this.getString(),  ///
          substitutionString = substitution.getString();

    context.trace(`Comparing the '${frameString}' frame to the '${substitutionString}' substitution...`);

    if (!comparesToSubstitution) {
      comparesToSubstitution = this.assumptions.some((assumption) => {
        const assumptionComparesToSubstitution = assumption.compareSubstitution(substitution, context);

        if (assumptionComparesToSubstitution) {
          return true;
        }
      });
    }

    if (comparesToSubstitution) {
      context.debug(`...compared the the '${frameString}' frame to the '${substitutionString}' substitutions.`);
    }

    return comparesToSubstitution;
  }

  compareSubstitutions(substitutions, context) {
    let comparesToSubstitutions;

    const frameString = this.getString(),  ///
          substitutionsString = substitutions.asString();

    context.trace(`Comparing the '${frameString}' frame to the '${substitutionsString}' substitutions...`);

    comparesToSubstitutions = substitutions.everySubstitution((substitution) => {
      const compaaresToSubstitution = this.compareSubstitution(substitution, context);

      if (compaaresToSubstitution) {
        return true;
      }
    });

    if (comparesToSubstitutions) {
      context.debug(`...compared the '${frameString}' frame to the '${substitutionsString}' substitutions.`);
    }

    return comparesToSubstitutions;
  }

  validate(assignments, stated, context) {
    let validates = false;

    const frameString = this.getString();  ///

    context.trace(`Validating the '${frameString}' frame...`);

    const assumptionsValidate = this.validateAssumptions(assignments, stated, context),
          metavariablevalidates = this.validateMetavariable(assignments, stated, context);

    if (assumptionsValidate && metavariablevalidates) {
      let validatesWhenStated = false,
          validatesWhenDerived = false;

      if (stated) {
        validatesWhenStated = this.validateWhenStated(assignments, context);
      } else {
        validatesWhenDerived = this.validateWhenDerived(context);
      }

      if (validatesWhenStated || validatesWhenDerived) {
        validates = true;
      }
    }

    if (validates) {
      const frame = this; ///

      context.addFrame(frame);

      context.debug(`...validated the '${frameString}' frame.`);
    }

    return validates;
  }

  validateWhenStated(assignments, context) {
    let validatesWhenStated = false;

    const frameString = this.getString();  ///

    context.trace(`Validating the '${frameString}' stated frame...`);

    const singular = this.isSingular();

    if (singular) {
      validatesWhenStated = true;
    } else {
      context.trace(`The '${frameString}' stated frame must be singular.`);
    }

    if (validatesWhenStated) {
      context.debug(`...validated the '${frameString}' stated frame.`);
    }

    return validatesWhenStated;
  }

  validateWhenDerived(context) {
    let validatesWhenDerived;

    const frameString = this.getString();  ///

    context.trace(`Verifying the '${frameString}' derived frame...`);

    validatesWhenDerived = true;

    if (validatesWhenDerived) {
      context.debug(`...verified the '${frameString}' derived frame.`);
    }

    return validatesWhenDerived;
  }

  validateAssumptions(assignments, stated, context) {
    let assumptionsValidate = false;

    const singular = this.isSingular();

    if (!singular) {
      const frameString = this.getString(), ///
            assumptionsString = assumptionsStringFromAssumptions(this.assumptions);

      context.trace(`Validating the '${assumptionsString}' assumptions of the '${frameString}' frame...`);

      stated = true;  ///

      assignments = null; ///

      assumptionsValidate = this.assumptions.every((assumption) => {
        const assumptionVerifies = assumption.validate(assignments, stated, context);

        return assumptionVerifies;
      });

      if (assumptionsValidate) {
        context.debug(`...validated the '${assumptionsString}' assumptions of the '${frameString}' frame.`);
      }
    } else {
      assumptionsValidate = true;
    }

    return assumptionsValidate;
  }

  validateMetavariable(assignments, stated, context) {
    let metavariableValidates = false;

    const singular = this.isSingular();

    if (singular) {
      const frameString = this.getString(), ///
            metavraibleString = this.metavariable.getString();

      context.trace(`Validating the '${frameString}' frame's '${metavraibleString}' metavariable...`);

      const metavariable = context.findMetavariable(this.metavariable);

      if (metavariable !== null) {
        const metaTypeName = FRAME_META_TYPE_NAME,
              frameMetaType = findMetaTypeByMetaTypeName(metaTypeName),
              metavariableValidateGivenMetaType = metavariable.validateGivenMetaType(frameMetaType, context);

        if (metavariableValidateGivenMetaType) {
          metavariableValidates = true;
        }
      } else {
        context.debug(`The '${frameString}' frame's '${metavraibleString}' metavariable is not present.`);
      }

      if (metavariableValidates) {
        context.debug(`...validated the '${frameString}' frame's '${metavraibleString}' metavariable.`);
      }
    } else {
      metavariableValidates = true;
    }

    return metavariableValidates;
  }

  validateGivenMetaType(metaType, assignments, stated, context) {
    let validatesGivenMetaType = false;

    const frameString = this.getString(),  ///
          metaTypeString = metaType.getString();

    context.trace(`Validating the '${frameString}' frame given the '${metaTypeString}' meta-type...`);

    const metaTypeName = metaType.getName();

    if (metaTypeName === FRAME_META_TYPE_NAME) {
      const validates = this.validate(assignments, stated, context)

      validatesGivenMetaType = validates; ///
    }

    if (validatesGivenMetaType) {
      context.debug(`...validated the '${frameString}' frame given the '${metaTypeString}' meta-type.`);
    }

    return validatesGivenMetaType;
  }

  toJSON() {
    let json = null;

    const singular = this.isSingular();

    if (singular) {
      const assumption = this.getAssumption(),
            assumptionJSON = assumption.toJSON();

      json = assumptionJSON;  ///
    }

    return json;
  }

  static name = "Frame";

  static fromJSON(json, context) {
    let frame = null;

    if (json !== null) {
      const { Assumption } =elements,
            assumption = Assumption.fromJSON(json, context),
            assumptions = [
              assumption
            ],
            string = null,
            node = null;

      frame = new Frame(string, node, assumptions);
    }

    return frame;
  }
});
