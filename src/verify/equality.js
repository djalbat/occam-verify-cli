"use strict";

import Equality from "../equality";
import Variable from "../variable";
import verifyTerm from "../verify/term";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";
import { first, second } from "../utilities/array";
import { verifyTermAsVariable } from "../verify/term";
import { MAXIMUM_INDEXES_LENGTH } from "../constants";

const leftTermNodeQuery = nodeQuery("/equality/term[0]"),
      rightTermNodeQuery = nodeQuery("/equality/term[1]");

export default function verifyEquality(equalityNode, proofContext) {
  let equalityVerified = false;

  proofContext.begin(equalityNode);

  const equalityString = nodeAsString(equalityNode);

  proofContext.debug(`Verifying the '${equalityString}' equality...`);

  const types = [],
        context = proofContext,  ///
        leftTermNode = leftTermNodeQuery(equalityNode),
        rightTermNode = rightTermNodeQuery(equalityNode),
        leftTermVerified = verifyTerm(leftTermNode, types, context),
        rightTermVerified = verifyTerm(rightTermNode, types, context);

  if (leftTermVerified && rightTermVerified) {
    const firstType = first(types),
          secondType = second(types),
          leftType = firstType, ///
          rightType = secondType, ///
          leftTermString = nodeAsString(leftTermNode),
          rightTermString = nodeAsString(rightTermNode);

    if ((leftType === null) && (rightType === null)) {
      proofContext.error(`The types of the '${leftTermString}' and '${rightTermString}' terms are both undefined and therefore the terms cannot be equated.`);
    } else if (rightType === null) {
      const type = leftType,  ///
            termNode = rightTermNode, ///
            variable = addVariable(type, termNode, proofContext);

      if (variable !== null) {
        const leftTypeName = leftType.getName();

        proofContext.info(`The '${rightTermString}' variable has been given the '${leftTypeName}' type.`);

        equalityVerified = true;
      }
    } else if (leftType === null) {
      const type = rightType,  ///
            termNode = leftType, ///
            variable = addVariable(type, termNode, proofContext);

      if (variable !== null) {
        const rightTypeName = rightType.getName();

        proofContext.info(`The '${rightTermString}' variable has been given the '${rightTypeName}' type.`);

        equalityVerified = true;
      }
    } else {
      const leftTypeMatchesRightType = leftType.match(rightType);

      if (!leftTypeMatchesRightType) {
        proofContext.error(`The types of the '${leftTermString}' and '${rightTermString}' terms do not match and therefore the terms cannot be equated.`);
      } else {
        const derived = proofContext.isDerived();

        if (!derived) {
          equalityVerified = true;
        } else {
          const equality = Equality.fromEqualityNode(equalityNode),
                proofSteps = proofContext.getProofSteps(),
                equalities = equalitiesFromProofSteps(proofSteps),
                equalityEquates = equality.equate(equalities, proofContext);

          equalityVerified = equalityEquates;  ///
        }
      }
    }
  }

  if (equalityVerified) {
    proofContext.info(`Verified the '${equalityString}' equality.`);
  }

  equalityVerified ?
    proofContext.complete(equalityNode) :
      proofContext.halt(equalityNode);

  return equalityVerified;
}

function equalitiesFromProofSteps(proofSteps) {
  const start = -MAXIMUM_INDEXES_LENGTH;  ///

  proofSteps = proofSteps.slice(start); ///

  const equalities = proofSteps.reduce((equalities, proofStep, index) => {
    const equality = Equality.fromProofStep(proofStep);

    if (equality !== null) {
      equalities.push(equality);
    }

    return equalities;
  }, []);

  return equalities;
}

function addVariable(type, termNode, proofContext) {
  let variable = null;

  const variables = [],
        termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, proofContext);

  if (termVerifiedAsVariable) {
    const firstVariable = first(variables);

    variable = firstVariable;  ///

    const name = variable.getName();

    variable = Variable.fromTypeAndName(type, name);  ///

    proofContext.addVariable(variable);
  }

  return variable;
}
