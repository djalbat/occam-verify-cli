"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { literally } from "../../utilities/context";
import { instantiateReferenceSubstitution } from "../../process/instantiate";
import { referenceSubstitutionFromReferenceSubstitutionNode } from "../../utilities/element";
import { referenceSubstitutionStringFromReferenceAndMetavariable } from "../../utilities/string";

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

  isReferenceEqualToReference(reference) { return this.reference.isEqualTo(reference); }

  isMetavariableEqualToMetavariable(metavariable) { return this.metavariable.isEqualTo(metavariable); }

  static name = "ReferenceSubstitution";

  static fromReferenceAndMetavariable(reference, metavariable, context) {
    return literally((context) => {
      const referenceSubstitutionString = referenceSubstitutionStringFromReferenceAndMetavariable(reference, metavariable),
            string = referenceSubstitutionString, ///
            referenceSubstitutionNode = instantiateReferenceSubstitution(string, context),
            referenceSubstitution = referenceSubstitutionFromReferenceSubstitutionNode(referenceSubstitutionNode, context);

      return referenceSubstitution;
    }, context);
  }
});
