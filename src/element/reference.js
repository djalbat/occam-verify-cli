"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiateReference } from "../process/instantiate";
import { reconcile, instantiate } from "../utilities/context";
import { REFERENCE_META_TYPE_NAME } from "../metaTypeNames";
import { metavariableFromReferenceNode } from "../utilities/element";

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

  matchReferenceNode(referenceNode) {
    const node = referenceNode, ///
          nodeMatches = this.matchNode(node),
          referenceNodeMatches = nodeMatches; ///

    return referenceNodeMatches;
  }

  findValidRefernece(context) {
    const metavariableNode = this.getMetavariableNode(),
          reference = context.findReferenceByMetavariableNode(metavariableNode),
          validReference = reference;  ///

    return validReference;
  }

  isEqualTo(reference) {
    const referenceNode = reference.getNode(),
          referenceNodeMatches = this.matchReferenceNode(referenceNode),
          equalTo = referenceNodeMatches;  ///

    return equalTo;
  }

  matchMetavariableNode(metavariableNode) { return this.metavariable.matchMetavariableNode(metavariableNode); }

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
    let comparesToMetavariable = false;

    let metavariableName;

    metavariableName = this.metavariable.getName();

    const metavariableNameA = metavariableName ///

    metavariableName = metavariable.getName();

    const metavariableNameB = metavariableName; ///

    if (metavariableNameA === metavariableNameB) {
      comparesToMetavariable = true;
    }

    return comparesToMetavariable;
  }

  compareMetavariableName(metavariableName) { return this.metavariable.compareMetavariableName(metavariableName); }

  compareTopLevelMetaAssertion(topLevelMetaAssertion, context) {
    let topLevelMetaAssertionCompares = false;

    const reference = this, ///
          referenceString = reference.getString(),
          topLevelMetaAssertionString = topLevelMetaAssertion.getString();

    context.trace(`Comparing the '${topLevelMetaAssertionString}' top level meta-assertion to the '${referenceString}' reference...`);

    const label = topLevelMetaAssertion.getLabel(),
          labelUnifies = this.unifyLabel(label, context);

    if (labelUnifies) {
      topLevelMetaAssertionCompares = true;
    }

    if (topLevelMetaAssertionCompares) {
      context.trace(`...compared the '${topLevelMetaAssertionString}' top level meta-assertion to the '${referenceString}' reference.`);
    }

    return topLevelMetaAssertionCompares;
  }

  validate(context) {
    let reference = null;

    const referenceString = this.getString(); ///

    context.trace(`Validating the '${referenceString}' reference...`);

    const validRefernece = this.findValidRefernece(context);

    if (validRefernece !== null) {
      reference = validRefernece; ///

      context.debug(`...the '${referenceString}' reference is already valid.`);
    } else {
      let validates = false;

      const metavariableValidates = this.validateMetavariable(context);

      if (metavariableValidates) {
        const referenceMetaTypeName = REFERENCE_META_TYPE_NAME,
              referenceMetaType = context.findMetaTypeByMetaTypeName(referenceMetaTypeName),
              metaType = this.metavariable.getMetaType();

        if (metaType === null) {
          const reference = this, ///
                labelPresent = context.isLabelPresentByReference(reference, context);

          if (labelPresent) {
            validates = true;
          } else {
            context.debug(`There is no label for the '${referenceString}' reference.`);
          }
        } else {
          const metavariableMetaTypeEqualToReferenceMetaType = this.metavariable.isMetaTypeEqualTo(referenceMetaType);

          if (metavariableMetaTypeEqualToReferenceMetaType) {
            validates = true;
          } else {
            const metaTypeString = metaType.getString(),
                  metavariableString = this.metavariable.getString(),
                  reerenceMetaTypeString = referenceMetaType.getString();

            context.debug(`The '${referenceString}' reference's '${metavariableString}' metavariable's '${metaTypeString}' meta-type should be the '${reerenceMetaTypeString}' meta-type.`);
          }
        }
      }

      if (validates) {
        reference = this; ///

        context.addReference(reference);

        context.debug(`...validated the '${referenceString}' reference.`);
      }
    }

    return reference;
  }

  validateMetavariable(context) {
    let metavariableValidates = false;

    const referenceString = this.getString(), ///
          metavariableString = this.metavariable.getString();

    context.trace(`Validating the '${referenceString}' reference's '${metavariableString}' metavariable...'`);

    const metavariable = this.metavariable.validate(context);

    if (metavariable !== null) {
      this.metavariable = metavariable;

      metavariableValidates = true;
    }

    if (metavariableValidates) {
      context.debug(`...validated the '${referenceString}' reference's '${metavariableString}' metavariable.'`);
    }

    return metavariableValidates;
  }

  unifyLabel(label, context) {
    let labelUnifies = false;

    const labelString = label.getString(),
          referenceString = this.getString(); ///

    context.trace(`Unifying the '${labelString}' label with the '${referenceString}' reference...`);

    const generalContext = context; ///

    context = label.getContext();

    const specificContext = context;  ///

    context = generalContext; ///

    reconcile((specificContext) => {
      const metavariable = label.getMetavariable(),
            metavariableUnifies = this.unifyMetavariable(metavariable, generalContext, specificContext);

      if (metavariableUnifies) {
        labelUnifies = true;
      }
    }, specificContext);

    if (labelUnifies) {
      context.debug(`...unified the '${labelString}' label with the '${referenceString}' reference.`);
    }

    return labelUnifies;
  }

  unifyMetavariable(metavariable, generalContext, specificContext) {
    let metavariableUnifies = false;

    const context = generalContext, ///
          referenceString = this.getString(), ///
          metavariableString = metavariable.getString();

    context.trace(`Unifying the '${metavariableString}' metavariable with the '${referenceString}' reference...`);

    const metavariableUnifiesIntrinsically = this.metavariable.unifyMetavariableIntrinsically(metavariable, generalContext, specificContext);

    if (metavariableUnifiesIntrinsically) {
      metavariableUnifies = true;
    }

    if (metavariableUnifies) {
      context.debug(`...unified the '${metavariableString}' metavariable with the '${referenceString}' reference.`);
    }

    return metavariableUnifies;
  }

  toJSON() {
    const string = this.getString(),
          json = {
            string
          };

    return json;
  }

  static name = "Reference";

  static fromJSON(json, context) {
    return instantiate((context) => {
      const { string } = json,
            referenceNode = instantiateReference(string, context),
            node = referenceNode,  ///
            metavariable = metavariableFromReferenceNode(referenceNode, context);

      context = null;

      const reference = new Reference(context, string, node, metavariable);

      return reference;
    }, context);
  }
});
