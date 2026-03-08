"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { literally } from "../utilities/context";
import { instantiateFrame } from "../process/instantiate";
import { FRAME_META_TYPE_NAME } from "../metaTypeNames";
import { metavariableFromFrameNode } from "../utilities/element";
import { assumptionsStringFromAssumptions } from "../utilities/string";

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

  getMetavariableNode() {
    const frameNode = this.getFrameNode(),
          metavariableNode = frameNode.getMetavariableNode();

    return metavariableNode;
  }

  getMetavariableName() {
    const frameNode = this.getFrameNode(),
          metavariableName = frameNode.getMetavariableName();

    return metavariableName;
  }

  matchFrameNode(frameNode) {
    const node = frameNode, ///
          nodeMatches = this.matchNode(node),
          frameNodeMatches = nodeMatches; ///

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

      const metavariableValidates = this.validatMetavariable(stated, context);

      if (metavariableValidates) {
        const assumptionsValidate = this.validateAssumptions(stated, context);

        if (assumptionsValidate) {
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

  validateAssumption(assumption, context) {
    let assumptionValidates;

    const frameString = this.getString(), ///
          assumptionstring = assumption.getString();

    context.trace(`Validating the '${frameString}' frame's '${assumptionstring}' assumption.`);

    const stated = true;  ///

    assumptionValidates = assumption.validate(stated, context);

    if (assumptionValidates) {
      context.debug(`...validated the '${frameString}' frame's '${assumptionstring}' assumption.`);
    }

    return assumptionValidates;
  }

  validateAssumptions(stated, context) {
    let assumptionsValidate;

    const singular = this.isSingular();

    if (!singular) {
      const frameString = this.getString(), ///
            assumptionsString = assumptionsStringFromAssumptions(this.assumptions);

      context.trace(`Validating the '${frameString}' frame's '${assumptionsString}' assumptions...`);

      const assumptions = [];

      assumptionsValidate = this.assumptions.every((assumption) => {
        const assumptionValidates = this.validateAssumption(assumption, context);

        if (assumptionValidates) {
          assumptions.push(assumption);

          return true;
        }
      });

      if (assumptionsValidate) {
        this.assumptions = assumptions;

        context.debug(`...validated the '${frameString}' frame's '${assumptionsString}' assumptions.`);
      }
    } else {
      assumptionsValidate = true;
    }

    return assumptionsValidate;
  }

  validatMetavariable(stated, context) {
    let metavariableValidates = false;

    const singular = this.isSingular();

    if (singular) {
      const frameString = this.getString(), ///
            metavariableString = this.metavariable.getString();

      context.trace(`Validating the '${frameString}' frame's '${metavariableString}' metavariable...`);

      const metavariable = this.metavariable.validate(context),  ///
            metaTypeName = FRAME_META_TYPE_NAME,
            frameMetaType = context.findMetaTypeByMetaTypeName(metaTypeName),
            metavariableMetaTypeEqualToFrameMetaType = metavariable.isMetaTypeEqualTo(frameMetaType);

      if (metavariableMetaTypeEqualToFrameMetaType) {
        metavariableValidates = true;
      }
    } else {
      metavariableValidates = true;
    }

    return metavariableValidates;
  }

  toJSON() {
    const string = this.getString(),
          json = {
            string
          };

    return json;
  }

  static name = "Frame";

  static fromJSON(json, context) {
    const frame = literally((context) => {
      const { string } = json,
            frameNode = instantiateFrame(string, context),
            node = frameNode, ///
            assumptions = assumptionsFromFrameNode(frameNode, context),
            metavariable = metavariableFromFrameNode(frameNode, context);

      context = null;

      const frame = new Frame(context, string, node, assumptions, metavariable);

      return frame;
    }, context);

    return frame;
  }
});

function assumptionsFromFrameNode(frameNode, context) {
  const assumptionNodes = frameNode.getAssumptionNodes(),
        assumptions = assumptionNodes.map((assumptionNode) => {
          const assumption = context.findAssumptionByAssumptionNode(assumptionNode);

          return assumption;
        });

  return assumptions;
}

