"use strict";

import { arrayUtilities } from "necessary";

import ontology from "../ontology";

import { define } from "../ontology";
import { S, NOTHING } from "../constants";
import { FRAME_META_TYPE_NAME } from "../metaTypeNames";

const { first } = arrayUtilities;

export default define(class Frame {
  constructor(string, node, tokens, assumptions) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
    this.assumptions = assumptions;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  getAssumptions() {
    return this.assumptions;
  }

  getLength() { return this.assumptions.length; }

  getAssumption() {
    let assumption = null;

    const length = this.getLength();

    if (length === 1) {
      const firstAssumption = first(this.assumptions);

      assumption = firstAssumption; ///
    }

    return assumption;
  }

  getMetavariable() {
    let metavariable = null;

    const simple = this.isSimple();

    if (simple) {
      const assumption = this.getAssumption();

      metavariable = assumption.getMetavariable();
    }

    return metavariable;
  }

  isSimple() { return this.node.isSimple();}

  isEqualTo(frame) {
    const frameString = frame.getString(),
          equalTo = (frameString === this.string);

    return equalTo;
  }

  matchFrameNode(frameNode) { return this.node.match(frameNode); }

  matchSubstitution(substitution, context) {
    let substitutionMatches = false;

    const frameString = this.string,  ///
          substitutionString = substitution.getString();

    context.trace(`Matching the '${substitutionString}' substitution against the '${frameString}' frame...`);

    if (!substitutionMatches) {
      substitutionMatches = this.assumptions.some((assumption) => {
        const substitutionMatchesAssumption = assumption.matchSubstitution(substitution, context);

        if (substitutionMatchesAssumption) {
          return true;
        }
      });
    }

    if (substitutionMatches) {
      context.debug(`...matched the '${substitutionString}' substitutions against the '${frameString}' frame.`);
    }

    return substitutionMatches;
  }

  matchSubstitutions(substitutions, context) {
    let substitutionsMatch;

    const frameString = this.string,  ///
          substitutionsString = substitutions.asString();

    context.trace(`Matching the '${substitutionsString}' substitutions against the '${frameString}' frame...`);

    substitutionsMatch = substitutions.everySubstitution((substitution) => {
      const substitutionMatches = this.matchSubstitution(substitution, context);

      if (substitutionMatches) {
        return true;
      }
    });

    if (substitutionsMatch) {
      context.debug(`...matched the '${substitutionsString}' substitutions against the '${frameString}' frame.`);
    }

    return substitutionsMatch;
  }

  verify(assignments, stated, context) {
    let verifies = false;

    const frameString = this.string;  ///

    context.trace(`Verifying the '${frameString}' frame...`);

    const assumptionsVerify = this.verifyAssumptions(assignments, stated, context);

    if (assumptionsVerify) {
      let verifiesWhenStated = false,
          verifiesWhenDerived = false;

      if (stated) {
        verifiesWhenStated = this.verifyWhenStated(assignments, context);
      } else {
        verifiesWhenDerived = this.verifyWhenDerived(context);
      }

      if (verifiesWhenStated || verifiesWhenDerived) {
        verifies = true;
      }
    }

    if (verifies) {
      const frame = this; ///

      context.addFrame(frame);

      context.debug(`...verified the '${frameString}' frame.`);
    }

    return verifies;
  }

  verifyWhenStated(assignments, context) {
    let verifiesWhenStated = false;

    const frameString = this.string;  ///

    context.trace(`Verifying the '${frameString}' stated frame...`);

    const simple = this.isSimple();

    if (!simple) {
      context.trace(`The '${frameString}' stated frame must be simple.`);
    } else {
      verifiesWhenStated = true;
    }

    if (verifiesWhenStated) {
      context.debug(`...verified the '${frameString}' stated frame.`);
    }

    return verifiesWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiesWhenDerived;

    const frameString = this.string;  ///

    context.trace(`Verifying the '${frameString}' derived frame...`);

    verifiesWhenDerived = true;

    if (verifiesWhenDerived) {
      context.debug(`...verified the '${frameString}' derived frame.`);
    }

    return verifiesWhenDerived;
  }

  verifyAssumptions(assignments, stated, context) {
    let assumptionsVerify = true;  ///

    const length = this.getLength();

    if (length > 0) {
      const sOrNothing = (length > 1) ?
                           S :
                             NOTHING,
            assumptionsString = assumptionsStringFromAssumptions(this.assumptions);

      context.trace(`Verifying the '${assumptionsString}' assumption${sOrNothing}...`);

      stated = true;  ///

      assignments = null; ///

      assumptionsVerify = this.assumptions.every((assumption) => {
        const assumptionVerifies = assumption.verify(assignments, stated, context);

        return assumptionVerifies;
      });

      if (assumptionsVerify) {
        context.debug(`...verified the '${assumptionsString}' assumption${sOrNothing}.`);
      }
    }

    return assumptionsVerify;
  }

  verifyGivenMetaType(metaType, assignments, stated, context) {
    let verifiesGivenMetaType = false;

    const frameString = this.string,  ///
          metaTypeString = metaType.getString();

    context.trace(`Verifying the '${frameString}' frame given the '${metaTypeString}' meta-type...`);

    const metaTypeName = metaType.getName();

    if (metaTypeName === FRAME_META_TYPE_NAME) {
      const verifies = this.verify(assignments, stated, context)

      verifiesGivenMetaType = verifies; ///
    }

    if (verifiesGivenMetaType) {
      context.debug(`...verified the '${frameString}' frame given the '${metaTypeString}' meta-type.`);
    }

    return verifiesGivenMetaType;
  }

  toJSON() {
    let json = null;

    const simple = this.isSimple();

    if (simple) {
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
      const { Assumption } =ontology,
            assumption = Assumption.fromJSON(json, context),
            assumptions = [
              assumption
            ],
            string = null,
            node = null,
            tokens = null;

      frame = new Frame(string, node, tokens, assumptions);
    }

    return frame;
  }

  static fromFrameNode(frameNode, context) {
    let frame = null;

    if (frameNode !== null) {
      frame = frameFromFrameNode(frameNode, context);
    }

    return frame;
  }

  static fromJudgementNode(judgementNode, context) {
    const frameNode = judgementNode.getFrameNode(),
          frame = frameFromFrameNode(frameNode, context);

    return frame;
  }

  static fromDefinedAssertionNode(definedAssertionNode, context) {
    let frame = null;

    const frameNode = definedAssertionNode.getFrameNode();

    if (frameNode !== null) {
      frame = frameFromFrameNode(frameNode, context);
    }

    return frame;
  }

  static fromContainedAssertionNode(containedAssertionNode, context) {
    let frame = null;

    const frameNode = containedAssertionNode.getFrameNode();

    if (frameNode !== null) {
      frame = frameFromFrameNode(frameNode, context)
    }

    return frame;
  }
});

function frameFromFrameNode(frameNode, context) {
  const { Frame } = ontology,
        node = frameNode, ///
        string = context.nodeAsString(node),
        tokens = context.nodeAsTokens(node),
        assumptions = assumptionsFromFrameNode(frameNode, context),
        frame = new Frame(string, node, tokens, assumptions);

  return frame;
}

function assumptionsFromFrameNode(frameNode, context) {
  const { Assumption } = ontology,
        assumptionNodes = frameNode.getAssumptionNodes(),
        assumptions = assumptionNodes.map((assumptionNode) => {
          const assumption = Assumption.fromAssumptionNode(assumptionNode, context);

          return assumption;
        });

  return assumptions;
}

function assumptionsStringFromAssumptions(assumptions) {
  const assumptionsString = assumptions.reduce((assumptionsString, assumption) => {
    const assumptionString = assumption.getString();

    assumptionsString = (assumptionsString === null) ?
                           assumptionString :
                            `${assumptionsString}, ${assumptionString}`;

    return assumptionsString;
  }, null);

  return assumptionsString;
}
