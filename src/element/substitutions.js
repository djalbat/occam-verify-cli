"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import { define } from "../elements";
import { EMPTY_STRING } from "../constants";
import { substitutionsStringFromSubstitutions } from "../utilities/string";

const { first, extract, correlate } = arrayUtilities;

export default define(class Substitutions extends Element {
  getNonTrivialLength() {
    const nonTrivialLength = this.reduceSubstitution((nonTrivialLength, substitution) => {
      const substitutionTrivial = substitution.isTrivial();

      if (!substitutionTrivial) {
        nonTrivialLength += 1;
      }

      return nonTrivialLength;
    }, 0);

    return nonTrivialLength;
  }

  getFirstSubstitution() {
    let firstSubstitution = null;

    const length = this.getLength();

    if (length > 0) {
      firstSubstitution = first(this.array);
    }

    return firstSubstitution;
  }

  extractSubstitution(callbcak) { return extract(this.array, callbcak); }

  correlateSubstitutions(substitutions) {
    const array = substitutions.getArray(),
          arrayA = array, ///
          arrayB = this.array,  ///
          correlates = correlate(arrayA, arrayB, (substitutionA, substitutionB) => {
            const substitutionAIsEQualToSubstitutionB = substitutionA.isEqualTo(substitutionB);

            if (substitutionAIsEQualToSubstitutionB) {
              return true;
            }
          });

    return correlates;
  }

  asString() {
    let string;

    const length = this.getLength();

    if (length === 0) {
      string = EMPTY_STRING;
    } else {
      const substitutions = this.array, ///
            substitutionsString = substitutionsStringFromSubstitutions(substitutions);

      string = substitutionsString; ///
    }

    return string;
  }

  static name = "Substitutions";

  static fromNothing(context) {
    const node = null,
          string = EMPTY_STRING,
          array = [],
          savedArray = [],
          substitutions = new Substitutions(context, string, node, array, savedArray);

    return substitutions;
  }
});
