"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { instantiateReferenceSubstitution } from "../../process/instantiate";

export default define(class ReferenceSubstitution extends Substitution {
  constructor(context, string, node, reference, metavariable) {
    super(context, string, node);

    this.reference = reference;
    this.metavariable = metavariable;
  }

  getReference() {
    return this.reference;
  }

  getMetavariable() {
    return this.metavariable;
  }

  isReferenceEqualToReference(reference) {
    const referenceEqualToReference = this.reference.isEqualTo(reference);

    return referenceEqualToReference;
  }

  static name = "ReferenceSubstitution";

  static fromReferenceAndMetavariable(reference, metavariable, context) {
    const string = stringFromReferenceAndMetavariable(reference, metavariable),
          referenceSubstitutionNode = instantiateReferenceSubstitution(string, context),
          node = referenceSubstitutionNode, ///
          referenceSubstitution = new ReferenceSubstitution(context, string, node, reference, metavariable);

    return referenceSubstitution;
  }
});

function stringFromReferenceAndMetavariable(reference, metavariable) {
  const referenceString = reference.getString(),
        metavariableString = metavariable.getString(),
        string = `[${referenceString} for ${metavariableString}]`;

  return string;
}
