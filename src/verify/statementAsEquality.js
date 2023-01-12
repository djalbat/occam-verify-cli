"use strict";

import Equality from "../equality";
import verifyTerm from "../verify/term";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";
import { first, second } from "../utilities/array";
import { EQUALS_CHARACTER, MAXIMUM_INDEXES_LENGTH } from "../constants";

const specialNodeQuery = nodeQuery("/statement/@special!"),
      leftTermNodeQuery = nodeQuery("/statement/term[0]"),
      rightTermNodeQuery = nodeQuery("/statement/term[1]");

export default function verifyStatementAsEquality(statementNode, qualified, proofContext) {
  let statementVerifiedAsEquality = false;

  proofContext.begin(statementNode);

  const statementString = nodeAsString(statementNode);

  proofContext.debug(`Verifying the '${statementString}' statement as an equality...`);

  const specialNode = specialNodeQuery(statementNode);

  if (specialNode !== null) {
    const terminalNode = specialNode, ///
          terminalNodeContent = terminalNode.getContent();

    if (terminalNodeContent === EQUALS_CHARACTER) {
      const types = [],
            context = proofContext,  ///
            leftTermNode = leftTermNodeQuery(statementNode),
            rightTermNode = rightTermNodeQuery(statementNode),
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
          proofContext.info(`The type of the right '${rightTermString}' term is undefined and therefore the types cannot be equated.`);
        } else if (leftType === null) {
          proofContext.info(`The type of the left '${leftTermString}' term is undefined and therefore the types cannot be equated.`);
        } else {
          const leftTypeMatchesRightType = leftType.match(rightType);

          if (!leftTypeMatchesRightType) {
            proofContext.error(`The types of the '${leftTermString}' and '${rightTermString}' terms do not match and therefore the terms cannot be equated.`);
          } else {
            if (!qualified) {
              statementVerifiedAsEquality = true;
            } else {
              const equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode),
                    proofSteps = proofContext.getProofSteps(),
                    equalities = equalitiesFromProofSteps(proofSteps),
                    equalityEquates = equality.equate(equalities, proofContext);

              statementVerifiedAsEquality = equalityEquates;  ///
            }
          }
        }
      }
    }
  }

  if (statementVerifiedAsEquality) {
    proofContext.info(`Verified the '${statementString}' equality.`);
  }

  statementVerifiedAsEquality ?
    proofContext.complete(statementNode) :
      proofContext.halt(statementNode);

  return statementVerifiedAsEquality;
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
