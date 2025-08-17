"use strict";

import { arrayUtilities } from "necessary";

const { push, separate } = arrayUtilities;

export default class Equivalences {
  constructor(array) {
    this.array = array;
  }

  getArray() {
    return this.array;
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
      const termEquates = equivalence.equateTerm(term);

      if (termEquates) {
        return true;
      }
    }) || null;

    return equivalence;
  }

  findEquivalenceByTermNodes(termNodes) {
    const equivalence = this.array.find((equivalence) => {
      const equivalenceMatchesTerms = equivalence.matchTermNodes(termNodes);

      if (equivalenceMatchesTerms) {
        return true;
      }
    }) || null;

    return equivalence;
  }

  mergedWith(equivalences) {
    let  mergedEquivalences = this.clone(); ///

    equivalences.forEachEquivalence((equivalence) => {
      mergedEquivalences = mergedEquivalences.mergedWithEquivalence(equivalence);
    });

    return mergedEquivalences;
  }

  mergedWithEquivalence(equivalence) {
    const equivalences = Equivalences.fromNothing();

    let mergedEquivalence = equivalence; ///

    this.forEachEquivalence((equivalence) => {
      const mergedEquivalenceDisjointFromEquivalence = mergedEquivalence.isDisjointFrom(equivalence);

      if (mergedEquivalenceDisjointFromEquivalence) {
        equivalences.addEquivalence(equivalence);
      } else {
        mergedEquivalence = mergedEquivalence.mergedWith(equivalence);
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
    let equivalences = this,
        groundedEquivalences,
        remainingEquivalences,
        initiallyGroundedEquivalences,
        implicitlyGroundedEquivalences;

    remainingEquivalences =Equivalences.fromNothing();

    initiallyGroundedEquivalences = Equivalences.fromNothing();

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

  clone() {
    const array = [
            ...this.array
          ],
          equivalences = new Equivalences(array);

    return equivalences;
  }

  static fromNothing() {
    const array = [],
          equivalences = new Equivalences(array);

    return equivalences;
  }
}

function definedVariablesFromGroundedTerms(groundedTerms, definedVariables, context) {
  const terms = groundedTerms,  ///
        variables = definedVariables; ///

  terms.forEach((term) => {
    const termVariables = term.getVariables(context);

    termVariables.forEach((termVariable) => {
      const variablesIncludesTermVariable = variables.includes(termVariable);

      if (!variablesIncludesTermVariable) {
        const variable = termVariable;  ///

        variables.push(variable);
      }
    });
  });
}

function groundedTermsFromGroundedEquivalencesAndDefinedVariables(groundedEquivalences, definedVariables, groundedTerms, context) {
  groundedEquivalences.forEachEquivalence((groundedEquivalence) => {
    groundedEquivalence.getGroundedTerms(definedVariables, groundedTerms, context);
  });
}
