"use strict";

import { arrayUtilities } from "necessary";

import Equivalence from "./equivalence";

const { push, compress, separate } = arrayUtilities;

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

  pushEquivalences(equivalences) {
    const array = equivalences.getArray();

    push(this.array, array);
  }

  forEachEquivalence(callback) { this.array.forEach(callback); }

  separateEquivalences(equivalencesA, equivalencesB, callback) {
    const arrayA = equivalencesA.getArray(),
          arrayB = equivalencesB.getArray();

    separate(this.array, arrayA, arrayB, callback);
  }

  addEquivalence(equivalence, context) {
    const equivalenceString = equivalence.asString();

    context.trace(`Added the '${equivalenceString}' equivalence.`);

    this.array.push(equivalence);
  }

  removeEquivalence(equivalence, context) {
    const index = this.array.indexOf(equivalence),
          start = index,  ///
          deleteCount = 1,
          equivalenceString = equivalence.asString();

    context.trace(`Removed the '${equivalenceString}' equivalence.`);

    this.array.splice(start, deleteCount);
  }

  findEquivalenceByType(type) {
    const equivalence = this.array.find((equivalence) => {
      const equivalenceMatchesType = equivalence.matchType(type);

      if (equivalenceMatchesType) {
        return true;
      }
    }) || null;

    return equivalence;
  }

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

        groundedEquivalences.pushEquivalences(implicitlyGroundedEquivalences);

        implicitlyGroundedEquivalencesLength = implicitlyGroundedEquivalences.getLength();  ///
      }
    }
  }

  unifySubstitutions(substitutions) {
    const substitutionsUnified = substitutions.everySubstitution((substitution) => {
      const substitutionUnified = this.unifySubstitution(substitution);

      if (substitutionUnified) {
        return true;
      }
    });

    return substitutionsUnified;
  }

  unifySubstitution(substitution) {
    const substitutionUnified = this.array.some((equivalence) => {
      const substitutionUnifiedWithEquivalence = substitution.unifyWithEquivalence(equivalence);

      if (substitutionUnifiedWithEquivalence) {
        return true;
      }
    });

    return substitutionUnified;
  }

  mergedWith(equivalences) {
    const equivalencesA = this, ///
          equivalencesB = equivalences;

    equivalences = mergeEquivalences(equivalencesA, equivalencesB); ///

    return equivalences;
  }

  static fromArray(array) {
    const equivalences = new Equivalences(array);

    return equivalences;
  }

  static fromNothing() {
    const array = [],
          equivalences = new Equivalences(array);

    return equivalences;
  }
}

function mergeEquivalences(equivalencesA, equivalencesB) {
  const typesA = equivalencesA.getTypes(),
        typesB = equivalencesB.getTypes(),
        types = [
          ...typesA,
          ...typesB
        ];

  compress(types, (typeA, typeB) => {
    if (typeA === typeB) {
      return true;
    }
  });

  const array = types.map((type) => {
    let equivalence;

    const equivalenceA = equivalencesA.findEquivalenceByType(type), ///
          equivalenceB = equivalencesB.findEquivalenceByType(type); ///

    if ((equivalenceA !== null) && (equivalenceB !== null)) {
      const leftEquivalence = equivalenceA, ///
            rightEquivalence = equivalenceB;  ///

      equivalence = Equivalence.merge(leftEquivalence, rightEquivalence);
    } else if (equivalenceA !== null) {
      equivalence = equivalenceA; ///
    } else if (equivalenceB !== null) {
      equivalence = equivalenceB; ///
    }

    return equivalence;
  });

  const equivalences = Equivalences.fromArray(array);

  return equivalences;
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
