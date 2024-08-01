"use strict";

import { push, filter, compress, separate } from "../utilities/array";

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

export function separateEquivalences(equivalences, remainingEquivalences, initiallyGroundedEquivalences) {
  separate(equivalences, remainingEquivalences, initiallyGroundedEquivalences, (equivalence) => {
    const equivalenceInitiallyGrounded = equivalence.isInitiallyGrounded();

    if (!equivalenceInitiallyGrounded) {
      return true;
    }
  });
}

export function compressDefinedVariables(definedVariables) {
  compress(definedVariables, (definedVariableA, definedVariableB) => {
    if (definedVariableA === definedVariableB) {
      return true;
    }
  });
}

export function definedVariablesFromGroundedEquivalences(groundedEquivalences, definedVariables, context) {
  groundedEquivalences.forEach((groundedEquivalence) => {
    const variables = groundedEquivalence.getVariables(context);

    push(definedVariables, variables);
  });
}

export function implicitlyGroundedEquivalencesFromRemainingEquivalencesAndDefinedVariables(remainingEquivalences, definedVariables) {
  const implicitlyGroundedEquivalences = [];

  filter(remainingEquivalences, (remainingEquivalence) => {
    const remainingEquivalenceImplicitlyGrounded = remainingEquivalence.isImplicitlyGrounded(definedVariables);

    if (remainingEquivalenceImplicitlyGrounded) {
      const implicitlyGroundedEquivalence = remainingEquivalence; ///

      implicitlyGroundedEquivalences.push(implicitlyGroundedEquivalence);
    }

    if (!remainingEquivalenceImplicitlyGrounded) {
      return true;
    }
  });

  return implicitlyGroundedEquivalences;
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

function typesFromEquivalences(equivalences, localContext) {
  const types = equivalences.map((equivalence) => {
    const type = equivalence.getType(localContext);

    return type;
  });

  return types;
}
