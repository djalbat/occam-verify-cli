"use strict";

import { arrayUtilities } from "necessary";

import elements from "../elements";

import { equalityFromStatement,
         judgementFromStatement,
         typeAssertionFromStatement,
         propertyAssertionFromStatement,
         satisfiesAssertionFromStatement } from "../utilities/statement";

const { backwardsSome } = arrayUtilities;

async function unifyStatementWithRule(statement, reference, satisfiesAssertion, context) {
  let statementUnifiesWithRule = false;

  if (reference !== null) {
    const rule = context.findRuleByReference(reference);

    if (rule !== null) {
      const ruleString = rule.getString(),
            statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${ruleString}' rule...`);

      const subproofOrProofAssertions = context.getSubproofOrProofAssertions(),
            statementAndSubproofOrProofAssertionsUnify = await rule.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context);

      if (statementAndSubproofOrProofAssertionsUnify) {
        statementUnifiesWithRule = true;
      }

      if (statementUnifiesWithRule) {
        context.debug(`...unified the '${statementString}' statement with the '${ruleString}' rule.`);
      }
    }
  }

  return statementUnifiesWithRule;
}

async function unifyStatementWithReference(statement, reference, satisfiesAssertion, context) {
  let statementUnifiesWithReference = false;

  if (reference !== null) {
    const statementString = statement.getString(),
          referenceString = reference.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${referenceString}' reference...`);

    const metavariableValidates = reference.validateMetavariable(context);

    if (metavariableValidates) {
      const metavariable = reference.getMetavariable();

      debugger

      // synthetically((context) => {
      //   const { StatementSubstitution } = elements;
      //
      //   StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context);

      //  validate
      //
      // }, generalContext, specificContext);

      statementUnifiesWithReference = true;
    }

    if (statementUnifiesWithReference) {
      context.debug(`...unified the '${statementString}' statement with the '${referenceString}' reference.`);
    }
  }

  return statementUnifiesWithReference;
}

async function unifyStatementAsSatisfiesAssertion(statement, reference, satisfiesAssertion, context) {
  let statementUnifiesAsSatisfiesAssertion = false;

  satisfiesAssertion = satisfiesAssertionFromStatement(statement, context);

  if (satisfiesAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Unifying the '${statementString}' statement as a satisfies assertion...`);

    const stated = true;

    satisfiesAssertion.verifySignature(stated, context);

    if (reference === null) {
      const subproofOrProofAssertions = context.getSubproofOrProofAssertions();

      statementUnifiesAsSatisfiesAssertion = backwardsSome(subproofOrProofAssertions, (stepsOrSubproof) => {
        const stepOrSubProofUnifiesWIthSatisfiesAssertion = stepsOrSubproof.unifyWithSatisfiesAssertion(satisfiesAssertion, context);

        if (stepOrSubProofUnifiesWIthSatisfiesAssertion) {
          return true;
        }
      });
    } else {
      const topLevelAssertion = context.findTopLevelAssertionByReference(reference);

      if (topLevelAssertion !== null) {
        reference = satisfiesAssertion.getReference();

        const axiom = context.findAxiomByReference(reference);

        if (axiom !== null) {
          const satisfiable = axiom.isSatisfiable();

          if (satisfiable) {
            const substitutions = [],
                  topLevelAssertionUnifies = axiom.unifyTopLevelAssertion(topLevelAssertion, substitutions, context);

            if (topLevelAssertionUnifies) {
              const substitutionsCorrelates = satisfiesAssertion.correlateSubstitutions(substitutions, context);

              if (substitutionsCorrelates) {
                statementUnifiesAsSatisfiesAssertion = true;
              }
            }
          } else {
            const axiomString = axiom.getString();

            context.debug(`Unable to unify with the '${axiomString}' because it is not satisfiable.`)
          }
        }
      }
    }

    if (statementUnifiesAsSatisfiesAssertion) {
      context.debug(`...unified the '${statementString}' statement as a satisfies assertion.`);
    }
  }

  return statementUnifiesAsSatisfiesAssertion;
}

async function unifyStatementWithTopLevelAssertion(statement, reference, satisfiesAssertion, context) {
  let statementUnifiesWithTopLevelAssertion = false;

  if (reference !== null) {
    const topLevelAssertion = context.findTopLevelAssertionByReference(reference);

    if (topLevelAssertion !== null) {
      const statementString = statement.getString(),
            topLevelAssertionString = reference.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${topLevelAssertionString}' top level assertion...`);

      const subproofOrProofAssertions = context.getSubproofOrProofAssertions(),
            statementAndSubproofOrProofAssertionsUnify = await topLevelAssertion.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context);

      if (statementAndSubproofOrProofAssertionsUnify) {
        const metavariable = reference.getMetavariable();

        debugger

        // synthetically((context) => {
        //   const { StatementSubstitution } = elements;
        //
        //   StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context);

        // vaiddate
        //
        // }, generalContext, specificContext);

        statementUnifiesWithTopLevelAssertion = true;
      }

      if (statementUnifiesWithTopLevelAssertion) {
        context.debug(`...unified the '${statementString}' statement with the '${topLevelAssertionString}' top level assertion.`);
      }
    }
  }

  return statementUnifiesWithTopLevelAssertion;
}

async function unifyStatementAsEquality(statement, reference, satisfiesAssertion, context) {
  let statementUnifiesAEquality = false;

  if (reference === null) {
    const equality = equalityFromStatement(statement, context);

    if (equality !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as an equality...`);

      const equalityEqual = equality.isEqual(context);

      if (equalityEqual) {
        statementUnifiesAEquality = true;
      }

      if (statementUnifiesAEquality) {
        context.debug(`...unified the '${statementString}' statement as an equality.`);
      }
    }
  }

  return statementUnifiesAEquality;
}

async function unifyStatementAsJudgement(statement, reference, satisfiesAssertion, context) {
  let statementUnifiesAsJudgement = false;

  if (reference === null) {
    const judgement = judgementFromStatement(statement, context);

    if (judgement !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a judgement...`);

      statementUnifiesAsJudgement = true;

      if (statementUnifiesAsJudgement) {
        context.debug(`...unified the '${statementString}' statement as a judgement.`);
      }
    }
  }

  return statementUnifiesAsJudgement;
}

async function unifyStatementAsTypeAssertion(statement, reference, satisfiesAssertion, context) {
  let statementUnifiesAsTypeAssertion = false;

  if (reference === null) {
    const typeAssertion = typeAssertionFromStatement(statement, context);

    if (typeAssertion !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a type assertion...`);

      statementUnifiesAsTypeAssertion = true;

      context.debug(`...unified the '${statementString}' statement as a type assertion.`);
    }
  }

  return statementUnifiesAsTypeAssertion;
}

async function unifyStatementAsPropertyAssertion(statement, reference, satisfiesAssertion, context) {
  let statementUnifiesAsPropertyAssertion = false;

  if (reference === null) {
    const propertyAssertion = propertyAssertionFromStatement(statement, context);

    if (propertyAssertion !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a property assertion...`);

      const term = propertyAssertion.getTerm(),
            equivalence = context.findEquivalenceByTerm(term);

      if (equivalence !== null) {
        const propertyAssertionMatches = equivalence.someOtherTerm(term, (term) => {  ///
          const propertyRelation = propertyAssertion.getPropertyRelation(),
                comparesToTermAndPropertyRelation = context.compareTermAndPropertyRelation(term, propertyRelation);

          if (comparesToTermAndPropertyRelation) {
            return true;
          }
        });

        if (propertyAssertionMatches) {
          statementUnifiesAsPropertyAssertion = true;
        }
      }

      if (statementUnifiesAsPropertyAssertion) {
        context.debug(`...unified the '${statementString}' statement as a property assertion.`);
      }
    }
  }

  return statementUnifiesAsPropertyAssertion;
}

async function unifyStatementWithSatisfiesAssertion(statement, reference, satisfiesAssertion, context) {
  let statementUnifiesWithSatisfiesAssertion = false;

  if (satisfiesAssertion !== null) {
    const statementString = statement.getString(),
          satisfiesAssertionString = satisfiesAssertion.getString();

    context.trace(`Unifying the '${statementString}' statememnt with the '${satisfiesAssertionString}' satisfies assertion...`);

    const subproofOrProofAssertions = context.getSubproofOrProofAssertions(),
          statementUnifies = satisfiesAssertion.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context);

    if (statementUnifies) {
      statementUnifiesWithSatisfiesAssertion = true;
    }

    if (statementUnifiesWithSatisfiesAssertion) {
      context.debug(`...unified the '${statementString}' statememnt with the '${satisfiesAssertionString}' satisfies assertion.`);
    }
  }

  return statementUnifiesWithSatisfiesAssertion;
}

async function compareStatementWithSubproofOrProofAssertions(statement, reference, satisfiesAssertion, context) {
  let statementEquatesWithStepOrSubproofs = false;

  if (reference === null) {
    const statementString = statement.getString();

    context.trace(`Comparing the '${statementString}' statement with the subproofs or proof asssertions...`);

    const subproofOrProofAssertions = context.getSubproofOrProofAssertions(),
          statementUnifiesWithSteps = statement.compareSubproofOrProofAssertions(subproofOrProofAssertions, context);

    if (statementUnifiesWithSteps) {
      statementEquatesWithStepOrSubproofs = true;
    }

    if (statementEquatesWithStepOrSubproofs) {
      context.debug(`...compared the '${statementString}' statement with the subproofs or proof asssertions.`);
    }
  }

  return statementEquatesWithStepOrSubproofs;
}

export const unifyStatements = [
  unifyStatementWithRule,
  unifyStatementWithReference,
  unifyStatementAsSatisfiesAssertion,
  unifyStatementWithTopLevelAssertion,
  unifyStatementAsEquality,
  unifyStatementAsJudgement,
  unifyStatementAsTypeAssertion,
  unifyStatementAsPropertyAssertion,
  unifyStatementWithSatisfiesAssertion,
  compareStatementWithSubproofOrProofAssertions
];
