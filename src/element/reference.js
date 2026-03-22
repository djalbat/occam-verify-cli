"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiateReference } from "../process/instantiate";
import { REFERENCE_META_TYPE_NAME } from "../metaTypeNames";
import { referenceFromReferenceNode } from "../utilities/element";
import { attempt, serialise, reconcile, unserialise, instantiate } from "../utilities/context";
import { metavariableFromReferenceNode, topLevelMetaAssertionFromReferenceNode } from "../utilities/element";

export default define(class Reference extends Element {
  constructor(context, string, node, metavariable, topLevelMetaAssertion) {
    super(context, string, node);

    this.metavariable = metavariable;
    this.topLevelMetaAssertion = topLevelMetaAssertion;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getTopLevelMetaAssertion() {
    return this.topLevelMetaAssertion;
  }

  getReferenceNode() {
    const node = this.getNode(),
          referenceNode = node; ///

    return referenceNode;
  }

  getMetavariableName() {
    const metavariableName = this.metavariable.getName();

    return metavariableName;
  }

  getMetavariableNode() {
    const metavariableNode = this.metavariable.getNode();

    return metavariableNode;
  }

  isEqualTo(reference) {
    const referenceNode = reference.getNode(),
          referenceNodeMatches = this.matchReferenceNode(referenceNode),
          equalTo = referenceNodeMatches;  ///

    return equalTo;
  }

  matchReferenceNode(referenceNode) {
    const node = referenceNode, ///
          nodeMatches = this.matchNode(node),
          referenceNodeMatches = nodeMatches; ///

    return referenceNodeMatches;
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

  compareTopLevelMetaAssertion(topLevelMetaAssertion) {
    let topLevelMetaAssertionCompares = false;

    const context = this.getContext(),
          referenceString = this.getString(), ///
          topLevelMetaAssertionString = topLevelMetaAssertion.getString();

    context.trace(`Comparing the '${topLevelMetaAssertionString}' top level meta-assertion to the '${referenceString}' reference...`);

    const label = topLevelMetaAssertion.getLabel(),
          labelUnifies = this.unifyLabel(label);

    if (labelUnifies) {
      topLevelMetaAssertionCompares = true;
    }

    if (topLevelMetaAssertionCompares) {
      context.trace(`...compared the '${topLevelMetaAssertionString}' top level meta-assertion to the '${referenceString}' reference.`);
    }

    return topLevelMetaAssertionCompares;
  }

  findValidReference(context) {
    const referenceNode = this.getReferenceNode(),
          reference = context.findReferenceByReferenceNode(referenceNode),
          validReference = reference;  ///

    return validReference;
  }

  validate(context) {
    let reference = null;

    const referenceString = this.getString(); ///

    context.trace(`Validating the '${referenceString}' reference...`);

    let validates = false;

    const validReference = this.findValidReference(context);

    if (validReference) {
      reference = validReference;  ///

      context.debug(`...the '${referenceString}' reference is already valid.`);
    } else {
      const context = this.getContext();

      attempt((context) => {
        const metavariableValidates = this.validateMetavariable(context);

        if (metavariableValidates) {
          const referenceMetaTypeName = REFERENCE_META_TYPE_NAME,
                referenceMetaType = context.findMetaTypeByMetaTypeName(referenceMetaTypeName),
                metaType = this.metavariable.getMetaType();

          if (metaType === null) {
            const reference = this, ///
                  labelPresent = context.isLabelPresentByReference(reference);

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
                    referenceMetaTypeString = referenceMetaType.getString();

              context.debug(`The '${referenceString}' reference's '${metavariableString}' metavariable's '${metaTypeString}' meta-type should be the '${referenceMetaTypeString}' meta-type.`);
            }
          }
        }

        if (validates) {
          context.commit(this);
        }
      }, context);
    }

    if (validates) {
      reference = this;  ///

      context.addReference(reference);

      context.debug(`...validated the '${referenceString}' reference.`);
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

  unifyLabel(label) {
    let labelUnifies = false;

    const context = label.getContext(),
          labelString = label.getString(),
          referenceString = this.getString(); ///

    context.trace(`Unifying the '${labelString}' label with the '${referenceString}' reference...`);

    reconcile((context) => {
      const metavariable = label.getMetavariable(),
            metavariableUnifies = this.unifyMetavariable(metavariable, context);

      if (metavariableUnifies) {
        labelUnifies = true;
      }
    }, context);

    if (labelUnifies) {
      context.debug(`...unified the '${labelString}' label with the '${referenceString}' reference.`);
    }

    return labelUnifies;
  }

  unifyMetavariable(metavariable, context) {
    let metavariableUnifies = false;

    const referenceString = this.getString(), ///
          metavariableString = metavariable.getString();

    context.trace(`Unifying the '${metavariableString}' metavariable with the '${referenceString}' reference...`);

    const specificContext = context;  ///

    context = this.getContext();

    const generalContext = context; ///

    context = specificContext;  ///

    const metavariableUnifiesIntrinsically = this.metavariable.unifyMetavariableIntrinsically(metavariable, generalContext, specificContext);

    if (metavariableUnifiesIntrinsically) {
      metavariableUnifies = true;
    }

    if (metavariableUnifies) {
      context.debug(`...unified the '${metavariableString}' metavariable with the '${referenceString}' reference.`);
    }

    return metavariableUnifies;
  }

  unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
    let topLevelMetaAssertionUUnifies = false;

    const label = topLevelMetaAssertion.getLabel(),
          referenceString = this.getString(), ///
          topLevelMetaAssertionString = topLevelMetaAssertion.getString();

    context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${referenceString}' reference...`);

    const specificContext = context;  ///

    context = label.getContext();

    reconcile((context) => {
      const metavariable = label.getMetavariable(),
            metavariableUnifies = this.unifyMetavariable(metavariable, context);

      if (metavariableUnifies) {
        this.topLevelMetaAssertion = topLevelMetaAssertion;

        context.commit(specificContext);

        topLevelMetaAssertionUUnifies = true;
      }
    }, context);

    context = specificContext;  ///

    if (topLevelMetaAssertionUUnifies) {
      context.debug(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${referenceString}' reference.`);
    }

    return topLevelMetaAssertionUUnifies;
  }

  toJSON() {
    const context = this.getContext();

    return serialise((context) => {
      const string = this.getString(),
            json = {
              context,
              string
            };

      return json;
    }, context);
  }

  static name = "Reference";

  static fromJSON(json, context) {
    let reference;

    unserialise((json, context) => {
      instantiate((context) => {
        const { string } = json,
              referenceNode = instantiateReference(string, context),
              node = referenceNode,  ///
              metavariable = metavariableFromReferenceNode(referenceNode, context),
              topLevelMetaAssertion = topLevelMetaAssertionFromReferenceNode(referenceNode, context);

        reference = new Reference(context, string, node, metavariable, topLevelMetaAssertion);
      }, context);
    }, json, context);

    return reference;
  }

  static fromReferenceString(referenceString, context) {
    let reference;

    instantiate((context) => {
      const string = referenceString,  ///
            referenceNode = instantiateReference(string, context);

      reference = referenceFromReferenceNode(referenceNode, context);
    }, context);

    return reference;
  }
});
