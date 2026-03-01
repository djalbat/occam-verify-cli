"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { literally } from "../utilities/context";
import { instantiateFrame } from "../process/instantiate";
import { FRAME_META_TYPE_NAME } from "../metaTypeNames";
import { assumptionsStringFromAssumptions } from "../utilities/string";
import { assumptionsFromJSON, metavariableFromJSON, assumptionsToAssumptionsJSON, metavariableToMetavariableJSON } from "../utilities/json";

export default define(class Frame extends Element {
  constructor(context, string, node, assumptions, metavariable) {
    super(context, string, node);

    this.assumptions = assumptions;
    this.metavariable = metavariable;
  }

  getAssumptions() {
    return this.assumptions;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getFrameNode() {
    const node = this.getNode(),
          frameNode = node; ///

    return frameNode;
  }

  getMetavariableName() {
    const frameNode = this.getFrameNode(),
          metavariableName = frameNode.getMetavariableName();

    return metavariableName;
  }

  getMetavariableNode() {
    const frameNode = this.getFrameNode(),
          metavariableNode = frameNode.getMetavariableNode();

    return metavariableNode;
  }

  matchFrameNode(frameNode) {
    const frameNodeA = frameNode; ///

    frameNode = this.getFrameNode();

    const frameNodeB = frameNode, ///
          frameNodeAAMatchesFrameBNodeB = frameNodeA.match(frameNodeB),
          frameNodeMatches = frameNodeAAMatchesFrameBNodeB; ///

    return frameNodeMatches;
  }

  findValidFrame(context) {
    const frameNode = this.getFrameNode(),
          frame = context.findFrameByFrameNode(frameNode),
          validFrame = frame; ///

    return validFrame;
  }

  isEqualTo(frame) {
    const frameNode = frame.getNode(),
          frameNodeMatches = this.matchFrameNode(frameNode),
          equalTo = frameNodeMatches;  ///

    return equalTo;
  }

  isSingular() {
    const frameNode = this.getFrameNode(),
          singular = frameNode.isSingular();

    return singular;
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

    comparesToSubstitutions = substitutions.every((substitution) => {
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

  compareMetavariableName(metavariableName) {
    let comparesToMetavariableName = false;

    const singular = this.isSingular();

    if (singular) {
      const metavariableNameA = metavariableName ///

      metavariableName = this.getMetavariableName();

      const metavariableNameB = metavariableName; ///

      comparesToMetavariableName = (metavariableNameA === metavariableNameB);
    }

    return comparesToMetavariableName;
  }

  validate(stated, context) {
    let frame = null;

    const frameString = this.getString();  ///

    context.trace(`Validating the '${frameString}' frame...`);

    const validFrame = this.findValidFrame(context),
          valid = (validFrame !== null);

    if (valid) {
      frame = validFrame; ///

      context.debug(`...the '${frameString}' frame is already valid.`);
    } else {
      let validates = false;

      const assumptionsValidate = this.validateAssumptions(stated, context),
            metavariablevalidates = this.validateMetavariable(stated, context);

      if (assumptionsValidate && metavariablevalidates) {
        let validatesWhenStated = false,
            validatesWhenDerived = false;

        if (stated) {
          validatesWhenStated = this.validateWhenStated(context);
        } else {
          validatesWhenDerived = this.validateWhenDerived(context);
        }

        if (validatesWhenStated || validatesWhenDerived) {
          validates = true;
        }
      }

      if (validates) {
        frame = this; ///

        context.addFrame(frame);

        context.debug(`...validated the '${frameString}' frame.`);
      }
    }

    return frame;
  }

  validateWhenStated(context) {
    let validatesWhenStated = false;

    const frameString = this.getString();  ///

    context.trace(`Validating the '${frameString}' stated frame...`);

    const singular = this.isSingular();

    if (singular) {
      validatesWhenStated = true;
    } else {
      context.debug(`The '${frameString}' stated frame must be singular.`);
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

  validateAssumptions(stated, context) {
    let assumptionsValidate;

    const singular = this.isSingular();

    if (!singular) {
      const frameString = this.getString(), ///
            assumptionsString = assumptionsStringFromAssumptions(this.assumptions);

      context.trace(`Validating the '${assumptionsString}' assumptions of the '${frameString}' frame...`);

      stated = true;  ///

      const assumptions = [];

      assumptionsValidate = this.assumptions.every((assumption) => {
        const assumptionValidates = assumption.validate(stated, context);

        if (assumptionValidates) {
          assumptions.push(assumption);

          return true;
        }
      });

      if (assumptionsValidate) {
        this.assumptions = assumptions;

        context.debug(`...validated the '${assumptionsString}' assumptions of the '${frameString}' frame.`);
      }
    } else {
      assumptionsValidate = true;
    }

    return assumptionsValidate;
  }

  validateMetavariable(stated, context) {
    let metavariableValidates = false;

    const singular = this.isSingular();

    if (singular) {
      const frameString = this.getString(), ///
            metavraibleString = this.metavariable.getString();

      context.trace(`Validating the '${frameString}' frame's '${metavraibleString}' metavariable...`);

      const metavariablePresent = context.isMetavariablePresent(this.metavariable);

      if (metavariablePresent) {
        const metaTypeName = FRAME_META_TYPE_NAME,
              frameMetaType = context.findMetaTypeByMetaTypeName(metaTypeName),
              metavariableValidateGivenMetaType = this.metavariable.validateGivenMetaType(frameMetaType, context);

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

  validateGivenMetaType(metaType, stated, context) {
    let validatesGivenMetaType = false;

    const frameString = this.getString(),  ///
          metaTypeString = metaType.getString();

    context.trace(`Validating the '${frameString}' frame given the '${metaTypeString}' meta-type...`);

    const metaTypeName = metaType.getName();

    if (metaTypeName === FRAME_META_TYPE_NAME) {
      const validates = this.validate(stated, context)

      validatesGivenMetaType = validates; ///
    }

    if (validatesGivenMetaType) {
      context.debug(`...validated the '${frameString}' frame given the '${metaTypeString}' meta-type.`);
    }

    return validatesGivenMetaType;
  }

  toJSON() {
    const metavariableJSON = metavariableToMetavariableJSON(this.metavariable),
          assumptionsJSON = assumptionsToAssumptionsJSON(this.assumptions),
          metavariable = metavariableJSON,  ///
          assumptions = assumptionsJSON,  ///
          string = this.getString(),
          json = {
            string,
            assumptions,
            metavariable
          };

    return json;
  }

  static name = "Frame";

  static fromJSON(json, context) {
    const frame = literally((context) => {
      const { string } = json,
            frameNode = instantiateFrame(string, context),
            node = frameNode,  ///
            assumptions = assumptionsFromJSON(json, context),
            metavariable = metavariableFromJSON(json, context),
            frame = new Frame(context, string, node, assumptions, metavariable);

      return frame;
    }, context);

    return frame;
  }
});
