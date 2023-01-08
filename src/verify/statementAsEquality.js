"use strict";

import Equality from "../equality";
import Variable from "../variable";
import verifyTerm from "../verify/term";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";
import { first, second } from "../utilities/array";
import { verifyTermAsVariable } from "../verify/term";
import { EQUALS_CHARACTER, MAXIMUM_INDEXES_LENGTH } from "../constants";

const specialNodeQuery = nodeQuery("/statement/@special!"),
      leftTermNodeQuery = nodeQuery("/statement/term[0]"),
      rightTermNodeQuery = nodeQuery("/statement/term[1]");

export default function verifyStatementAsEquality(statementNode, proofContext) {
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
          const type = leftType,  ///
                termNode = rightTermNode, ///
                variable = addVariable(type, termNode, proofContext);

          if (variable !== null) {
            const leftTypeName = leftType.getName();

            proofContext.info(`The '${rightTermString}' variable has been given the '${leftTypeName}' type.`);

            statementVerifiedAsEquality = true;
          }
        } else if (leftType === null) {
          const type = rightType,  ///
                termNode = leftType, ///
                variable = addVariable(type, termNode, proofContext);

          if (variable !== null) {
            const rightTypeName = rightType.getName();

            proofContext.info(`The '${rightTermString}' variable has been given the '${rightTypeName}' type.`);

            statementVerifiedAsEquality = true;
          }
        } else {
          const leftTypeMatchesRightType = leftType.match(rightType);

          if (!leftTypeMatchesRightType) {
            proofContext.error(`The types of the '${leftTermString}' and '${rightTermString}' terms do not match and therefore the terms cannot be equated.`);
          } else {
            const derived = proofContext.isDerived();

            if (!derived) {
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
