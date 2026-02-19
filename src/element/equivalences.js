"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import { define } from "../elements";
import { EMPTY_STRING } from "../constants";
import { variablesFromTerm } from "./term";

const { push, separate } = arrayUtilities;

export default define(class Equivalences extends Element {
  constructor(context, string, node, array) {
    super(context, string, node);

    this.array = array;
  }

  getArray() {
    return this.array;
  }

  getEquivalencesNode() {
    const node = this.getNode(),
          equivalencesNode = node;  ///

    return equivalencesNode;
  }

  getLength() { return this.array.length; }

  getTypes() {
    const types = this.array.map((equivalence) => {
      const type = equivalence.getType();

      return type;
    });

    return types;
  }

  addEquivalence(equivalence) {
    this.array.push(equivalence);
  }

  addEquivalences(equivalences) {
    const array = equivalences.getArray();

    push(this.array, array);
  }

  someEquivalence(callback) { return this.array.some(callback); }

  everyEquivalence(callback) { return this.array.every(callback); }

  forEachEquivalence(callback) { this.array.forEach(callback); }

  findEquivalenceByTerm(term) {
    const equivalence = this.array.find((equivalence) => {
      const equivalenceComparesToTerm = equivalence.compareTerm(term);

      if (equivalenceComparesToTerm) {
        return true;
      }
    }) || null;

    return equivalence;
  }

  findEquivalenceByTermNodes(termNodes) {
    const equivalence = this.array.find((equivalence) => {
      const termNodeMatches = equivalence.matchTermNodes(termNodes);

      if (termNodeMatches) {
        return true;
      }
    }) || null;

    return equivalence;
  }

  mergedWith(equivalences, context) {
    let  mergedEquivalences = this.clone(context); ///

    equivalences.forEachEquivalence((equivalence) => {
      mergedEquivalences = mergedEquivalences.mergedWithEquivalence(equivalence, context);
    });

    return mergedEquivalences;
  }

  mergedWithEquivalence(equivalence, context) {
    const equivalences = Equivalences.fromNothing(context);

    let mergedEquivalence = equivalence; ///

    this.forEachEquivalence((equivalence) => {
      const mergedEquivalenceDisjointFromEquivalence = mergedEquivalence.isDisjointFrom(equivalence);

      if (mergedEquivalenceDisjointFromEquivalence) {
        equivalences.addEquivalence(equivalence);
      } else {
        mergedEquivalence = mergedEquivalence.mergedWith(equivalence, context);
      }
    });

    equivalence = mergedEquivalence;  ///

    equivalences.addEquivalence(equivalence);

    return equivalences;
  }

  separateEquivalences(equivalencesA, equivalencesB, callback) {
    const equivalencesAArray = equivalencesA.getArray(),
          equivalencesBArray = equivalencesB.getArray();

    separate(this.array, equivalencesAArray, equivalencesBArray, callback);
  }

  separateInitiallyGroundedEquivalences(remainingEquivalences, initiallyGroundedEquivalences, context) {
    this.separateEquivalences(remainingEquivalences, initiallyGroundedEquivalences, (equivalence) => {
      const equivalenceInitiallyGrounded = equivalence.isInitiallyGrounded(context);

      if (!equivalenceInitiallyGrounded) {
        return true;
      }
    });
  }

  separateImplicitlyGroundedEquivalences(remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, context) {
    this.separateEquivalences(remainingEquivalences, implicitlyGroundedEquivalences, (equivalence) => {
      const equivalenceImplicitlyGrounded = equivalence.isImplicitlyGrounded(definedVariables, context);

      if (!equivalenceImplicitlyGrounded) {
        return true;
      }
    });
  }

  separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context) {
    let equivalences = this,  ///
        groundedEquivalences,
        remainingEquivalences,
        initiallyGroundedEquivalences,
        implicitlyGroundedEquivalences;

    remainingEquivalences =Equivalences.fromNothing(context);

    initiallyGroundedEquivalences = Equivalences.fromNothing(context);

    equivalences.separateInitiallyGroundedEquivalences(remainingEquivalences, initiallyGroundedEquivalences, context);

    const initiallyGroundedEquivalencesLength = initiallyGroundedEquivalences.getLength();

    if (initiallyGroundedEquivalencesLength > 0) {
      groundedEquivalences = initiallyGroundedEquivalences; ///

      let implicitlyGroundedEquivalencesLength = 1;

      while (implicitlyGroundedEquivalencesLength > 0) {
        let definedVariablesLength = 0,
            previousDefinedVariablesLength = -1;

        while (definedVariablesLength > previousDefinedVariablesLength) {
          previousDefinedVariablesLength = definedVariablesLength;  ///

          groundedTermsFromGroundedEquivalencesAndDefinedVariables(groundedEquivalences, definedVariables, groundedTerms, context);

          definedVariablesFromGroundedTerms(groundedTerms, definedVariables, context);

          definedVariablesLength = definedVariables.length;
        }

        equivalences = remainingEquivalences; ///

        remainingEquivalences = [];

        implicitlyGroundedEquivalences = [];

        equivalences.separateImplicitlyGroundedEquivalences(remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, context);

        groundedEquivalences.addEquivalences(implicitlyGroundedEquivalences);

        implicitlyGroundedEquivalencesLength = implicitlyGroundedEquivalences.getLength();  ///
      }
    }
  }

  clone(context) {
    const string = EMPTY_STRING,
          node = null,
          array = [
            ...this.array
          ],
          equivalences = new Equivalences(context, string, node, array);

    return equivalences;
  }

  static name = "Equivalences";

  static fromNothing(context) {
    const string = EMPTY_STRING,
          node = null,
          array = [],
          equivalences = new Equivalences(context, string, node, array);

    return equivalences;
  }
});

function definedVariablesFromGroundedTerms(groundedTerms, definedVariables, context) {
  groundedTerms.forEach((groundedTerm) => {
    const term = groundedTerm,  ///
          variables = variablesFromTerm(term, context);

    variables.forEach((variable) => {
      const definedVariablesIncludesTermVariable = definedVariables.includes(variable);

      if (!definedVariablesIncludesTermVariable) {
        const definedVariable = variable;  ///

        definedVariables.push(definedVariable);
      }
    });
  });
}

function groundedTermsFromGroundedEquivalencesAndDefinedVariables(groundedEquivalences, definedVariables, groundedTerms, context) {
  groundedEquivalences.forEachEquivalence((groundedEquivalence) => {
    groundedEquivalence.getGroundedTerms(definedVariables, groundedTerms, context);
  });
}
