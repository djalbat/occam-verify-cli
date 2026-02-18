"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { attempt } from "../utilities/context";
import { REFERENCE_META_TYPE_NAME } from "../metaTypeNames";
import { findMetaTypeByMetaTypeName } from "../metaTypes";
import { unifyMetavariableIntrinsically } from "../process/unify";
import { metavariableFromJSON, metavariableToMetavariableJSON } from "../utilities/json";

export default define(class Reference extends Element {
  constructor(context, string, node, metavariable) {
    super(context, string, node);

    this.metavariable = metavariable;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getReferenceNode() {
    const node = this.getNode(),
          referenceNode = node; ///

    return referenceNode;
  }


  getName() { return this.metavariable.getName(); }

  getMetavariableName() {
    const metavariableName = this.metavariable.getName();

    return metavariableName;
  }

  getMetavariableNode() {
    const metavariableNode = this.metavariable.getNode();

    return metavariableNode;
  }

  matchReferenceNode(assertionNode) {
    const assertionNodeA = assertionNode; ///

    assertionNode = this.getReferenceNode();

    const assertionNodeB = assertionNode, ///
          assertionNodeAAMatchesReferenceBNodeB = assertionNodeA.match(assertionNodeB),
          equalTo = assertionNodeAAMatchesReferenceBNodeB; ///

    return equalTo;
  }

  isValid(context) {
    const assertionNode = this.getReferenceNode(),
          assertionPresent = context.isReferencePresentByReferenceNode(assertionNode),
          valid = assertionPresent;  ///

    return valid;
  }

  isEqualTo(assertion) {
    const assertionNode = assertion.getNode(),
          assertionNodeMatches = this.matchReferenceNode(assertionNode),
          equalTo = assertionNodeMatches;  ///

    return equalTo;
  }

  compareParameter(parameter) {
    let comparesToParamter = false;

    const parameterName = parameter.getName();

    if (parameterName !== null) {
      const metavariableName = this.getMetavariableName();

      if (parameterName === metavariableName) {
        comparesToParamter = true;
      }
    }

    return comparesToParamter;
  }

  compareMetavariable(metavariable) {
    let metavaraibleComparseTo = false;

    let metavariableName;

    metavariableName = this.metavariable.getName();

    const metavariableNameA = metavariableName ///

    metavariableName = metavariable.getName();

    const metavariableNameB = metavariableName; ///

    if (metavariableNameA === metavariableNameB) {
      metavaraibleComparseTo = true;
    }

    return metavaraibleComparseTo;
  }

  compareMetavariableName(metavariableName) { return this.metavariable.compareMetavariableName(metavariableName); }

  matchMetavariableNode(metavariableNode) { return this.metavariable.matchMetavariableNode(metavariableNode); }

  validate(context) {
    let validates = false;

    const referenceString = this.getString(); ///

    context.trace(`Validating the '${referenceString}' reference...`);

    if (!validates) {
      const metavariableValidates = this.validateMetavariable(context);

      if (metavariableValidates) {
        validates = true;
      }
    }

    if (!validates) {
      const reference = this, ///
            labelPresent = context.isLabelPresentByReference(reference);

      if (labelPresent) {
        validates = true; ///
      }
    }

    if (validates) {
      const reference = this; ///

      context.addReference(reference);

      context.debug(`...validated the '${referenceString}' reference.`);
    }

    return validates;
  }

  validateMetavariable(context) {
    let metavariableValidates = false;

    const referenceString = this.getString(), ///
          metavariableString = this.metavariable.getString();

    context.trace(`Validating the '${referenceString}' reference's '${metavariableString}' metavariable....'`);

    const metaTypeName = REFERENCE_META_TYPE_NAME,
          referenceMetaType = findMetaTypeByMetaTypeName(metaTypeName),
          metaType = referenceMetaType, ///
          metavariable = context.findMetavariable(this.metavariable);

    if (metavariable !== null) {
      const metavariableValidatesGivenMetaType = metavariable.validateGivenMetaType(metaType, context);

      if (metavariableValidatesGivenMetaType) {
        metavariableValidates = true;
      }
    } else {
      context.debug(`The '${metavariableString}' metavariable is not present.`);
    }

    return metavariableValidates;
  }

  validateAsMetavariable(context) {
    let validatesAsMetavariable = false;

    const referenceString = this.getString(); ///

    context.trace(`Validating the '${referenceString}' reference as a metavaraible...`);

    const metavariable = this.getMetavariable(),
          metavariableName = metavariable.getName(),
          metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);

    if (metavariablePresent) {
      validatesAsMetavariable = true;
    }

    if (validatesAsMetavariable) {
      context.debug(`...validated the '${referenceString}' reference as a metavaraible.`);
    }

    return validatesAsMetavariable;
  }

  unifyLabel(label, context) {
    let labelUnifies;

    const specificContext = context; ///

    context = this.getContext();

    const generalContext = context;  ///

    context = specificContext;  ///

    const reference = this, ///
          labelString = label.getString(),
          referenceString = reference.getString();

    context.trace(`Unifying the '${labelString}' label with the '${referenceString}' reference...`);

    const labelMetavariable = label.getMetavariable(),
          generalMetavariable = this.metavariable,  ///
          specificMetavariable = labelMetavariable, ///
          metavariableUnifiesIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, generalContext, specificContext);

    labelUnifies = metavariableUnifiesIntrinsically; ///

    if (labelUnifies) {
      context.debug(`...unified the '${labelString}' label with the '${referenceString}' reference.`);
    }

    return labelUnifies;
  }

  unifyMetavariable(metavariable, context) {
    let metavariableUnifies = false;

    const specificContext = context; ///

    context = this.getContext();

    const generalContext = context;  ///

    context = specificContext;  ///

    const referenceString = this.getString(), ///
          metavariableString = metavariable.getString();

    context.trace(`Unifying the '${metavariableString}' metavariable with the '${referenceString}' reference...`);

    const metavariableUnifiesIntrinsically = attempt((specificContext) => {
      const generalMetavariable = this.metavariable,  ///
            specificMetavariable = metavariable, ///
            metavariableUnifiesIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, generalContext, specificContext);

      return metavariableUnifiesIntrinsically;
    }, specificContext);

    if (metavariableUnifiesIntrinsically) {
      metavariableUnifies = true;
    }

    if (metavariableUnifies) {
      context.debug(`...unified the '${metavariableString}' metavariable with the '${referenceString}' reference.`);
    }

    return metavariableUnifies;
  }

  unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
    let topLevelMetaAssertionUnifies;

    const reference = this, ///
          referenceString = reference.getString(),
          topLevelMetaAssertionString = topLevelMetaAssertion.getString();

    context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${referenceString}' reference...`);

    const label = topLevelMetaAssertion.getLabel(),
          substitutions = [],
          labelUnifies = this.unifyLabel(label, substitutions, context);

    topLevelMetaAssertionUnifies = labelUnifies;  ///

    if (topLevelMetaAssertionUnifies) {
      context.trace(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${referenceString}' reference.`);
    }

    return topLevelMetaAssertionUnifies;
  }

  toJSON() {
    const metavariableJSON = metavariableToMetavariableJSON(this.metavariable),
          metavariable = metavariableJSON,  ///
          json = {
            metavariable
          };

    return json;
  }

  static name = "Reference";

  static fromJSON(json, context) {
    const metavariable = metavariableFromJSON(json, context),
          string = metavariable.getString(),
          node = metavariable.getNode(),
          reference = new Reference(context, string, node, metavariable);

    return reference;
  }
});
