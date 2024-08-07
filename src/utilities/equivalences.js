"use strict";

import { push, compress, separate } from "../utilities/array";

export function mergeEquivalences(equivalencesA, equivalencesB, localContext) {
  const typesA = typesFromEquivalences(equivalencesA, localContext),
        typesB = typesFromEquivalences(equivalencesB, localContext),
        types = [
          ...typesA,
          ...typesB
        ];

  compress(types, (typeA, typeB) => {
    if (typeA === typeB) {
      return true;
    }
  });

  const equivalences = types.map((type) => {
    let equivalence;

    const equivalenceA = findEquivalenceByType(equivalencesA, type, localContext),
          equivalenceB = findEquivalenceByType(equivalencesB, type, localContext);

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

  return equivalences;
}

export function areTermNodesEqual(leftTermNode, rightTermNode, equivalences) {
  let termNodesEqual;

  const leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);

  if (leftTermNodeMatchesRightTermNode) {
    termNodesEqual = true;
  } else {
    const termNodes = [
            leftTermNode,
            rightTermNode
          ],
          equivalence = findEquivalenceByTermNodes(equivalences, termNodes);

    termNodesEqual = (equivalence !== null);
  }

  return termNodesEqual;
}

export function findEquivalenceByType(equivalences, type, localContext) {
  const equivalence = equivalences.find((equivalence) => {
    const equivalenceMatchesType = equivalence.matchType(type, localContext);

    if (equivalenceMatchesType) {
      return true;
    }
  }) || null;

  return equivalence;
}

export function findEquivalenceByTerm(equivalences, term) {
  const equivalence = equivalences.find((equivalence) => {
    const equivalenceMatchesTerm = equivalence.matchTerm(term);

    if (equivalenceMatchesTerm) {
      return true;
    }
  }) || null;

  return equivalence;
}

export function groundedTermsAndDefinedVariablesFromFromEquivalences(equivalences, groundedTerms, definedVariables, context) {
  let groundedEquivalences,
      remainingEquivalences,
      initiallyGroundedEquivalences,
      implicitlyGroundedEquivalences;

  remainingEquivalences = [];

  initiallyGroundedEquivalences = [];

  separateInitiallyGroundedEquivalences(equivalences, remainingEquivalences, initiallyGroundedEquivalences, context);

  const initiallyGroundedEquivalencesLength = initiallyGroundedEquivalences.length;

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

      separateImplicitlyGroundedEquivalences(equivalences, remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, context);

      push(groundedEquivalences, implicitlyGroundedEquivalences);

      implicitlyGroundedEquivalencesLength = implicitlyGroundedEquivalences.length;  ///
    }
  }
}

function typesFromEquivalences(equivalences, localContext) {
  const types = equivalences.map((equivalence) => {
    const type = equivalence.getType(localContext);

    return type;
  });

  return types;
}

function findEquivalenceByTermNodes(equivalences, termNodes) {
  const equivalence = equivalences.find((equivalence) => {
    const equivalenceMatchesTerms = equivalence.matchTermNodes(termNodes);

    if (equivalenceMatchesTerms) {
      return true;
    }
  }) || null;

  return equivalence;
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

function separateInitiallyGroundedEquivalences(equivalences, remainingEquivalences, initiallyGroundedEquivalences, context) {
  separate(equivalences, remainingEquivalences, initiallyGroundedEquivalences, (equivalence) => {
    const equivalenceInitiallyGrounded = equivalence.isInitiallyGrounded(context);

    if (!equivalenceInitiallyGrounded) {
      return true;
    }
  });
}

function separateImplicitlyGroundedEquivalences(equivalences, remainingEquivalences, implicitlyGroundedEquivalences, definedVariables, context) {
  separate(equivalences, remainingEquivalences, implicitlyGroundedEquivalences, (equivalence) => {
    const equivalenceImplicitlyGrounded = equivalence.isImplicitlyGrounded(definedVariables, context);

    if (!equivalenceImplicitlyGrounded) {
      return true;
    }
  });
}

function groundedTermsFromGroundedEquivalencesAndDefinedVariables(groundedEquivalences, definedVariables, groundedTerms, context) {
  groundedEquivalences.forEach((groundedEquivalence) => {
    groundedEquivalence.getGroundedTerms(definedVariables, groundedTerms, context);
  });
}
