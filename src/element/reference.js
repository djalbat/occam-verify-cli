"use strict";

import Element from "../element";
import elements from "../elements";

import { define } from "../elements";
import { metaTypeFromMetaTypeName } from "../metaTypes";
import { REFERENCE_META_TYPE_NAME } from "../metaTypeNames";
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

  getName() { return this.metavariable.getName(); }

  getMetavariableName() {
    const metavariableName = this.metavariable.getName();

    return metavariableName;
  }

  getMetavariableNode() {
    const metavariableNode = this.metavariable.getNode();

    return metavariableNode;
  }

  isMetavariableEqualToMetavariable(metavariable) { return this.metavariable.isEqualTo(metavariable); }

  compareMetavariableName(metavariableName) { return this.metavariable.compareMetavariableName(metavariableName); }

  matchMetavariableNode(metavariableNode) { return this.metavariable.matchNode(metavariableNode); }

  validate(context) {
    let validate = false;

    const referenceString = this.getString(); ///

    context.trace(`Validating the '${referenceString}' reference...`);

    if (!validate) {
      const metavariableValidates = this.validateMetavariable(context);

      validate = metavariableValidates; ///
    }

    if (!validate) {
      const reference = this, ///
            labelPresent = context.isLabelPresentByReference(reference);

      validate = labelPresent;  ///
    }

    if (validate) {
      const reference = this; ///

      context.addReference(reference);

      context.debug(`...validated the '${referenceString}' reference.`);
    }

    return validate;
  }

  validateMetavariable(context) {
    let metavariableValidates = false;

    const metaTypeName = REFERENCE_META_TYPE_NAME,
          referenceMetaType = metaTypeFromMetaTypeName(metaTypeName),
          metaType = referenceMetaType, ///
          metavariableValidatesGivenMetaType = this.metavariable.validateGivenMetaType(metaType, context);

    if (metavariableValidatesGivenMetaType) {
      metavariableValidates = true;
    }

    return metavariableValidates;
  }

  unifyLabel(label, substitutions, context) {
    let labelUnifies;

    const specificContext = context; ///

    context = label.getContext();

    const generalContext = context;  ///

    context = specificContext;  ///

    const reference = this, ///
          labelString = label.getString(),
          referenceString = reference.getString();

    context.trace(`Unifying the '${labelString}' label with the '${referenceString}' reference...`);

    const labelMetavariable = label.getMetavariable(),
          generalMetavariable = this.metavariable,  ///
          specificMetavariable = labelMetavariable, ///
          metavariableUnifiesIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);

    labelUnifies = metavariableUnifiesIntrinsically; ///

    if (labelUnifies) {
      context.debug(`...unified the '${labelString}' label with the '${referenceString}' reference.`);
    }

    return labelUnifies;
  }

  unifyMetavariable(metavariable, context) {
    let metavariableUnifies;

    const reference = this, ///
          metavariableString = metavariable.getString(),
          referenceString = reference.getString();

    context.trace(`Unifying the '${metavariableString}' metavariable with the '${referenceString}' reference...`);

    const { Substitutions } = elements,
          substitutions = Substitutions.fromNothing(),
          generalContext = context, ///
          specificContext = context,  ///
          generalMetavariable = this.metavariable,  ///
          specificMetavariable = metavariable, ///
          metavariableUnifiesIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);

    metavariableUnifies = metavariableUnifiesIntrinsically; ///

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

    const { Substitutions } = elements,
          label = topLevelMetaAssertion.getLabel(),
          substitutions = Substitutions.fromNothing(),
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
