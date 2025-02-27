"use strict";

import Substitutions from "../../substitutions";
import StatementSubstitution from "../../substitution/statement";

import { equalityFromStatement,
         judgementFromStatement,
         typeAssertionFromStatement,
         propertyAssertionFromStatement,
         satisfyingAssertionFromStatement } from "../../utilities/context";

function unifyAWithRule(statement, reference, substitutions, context) {
  let unifiedWithRule = false;

  if (reference !== null) {
    const rule = context.findRuleByReference(reference);

    if (rule !== null) {
      const ruleString = rule.getString(),
            statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${ruleString}' rule...`);

      const stepsOrSubproofs = context.getStepsOrSubproofs(),
            statementAndStepsUnified = rule.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);

      unifiedWithRule = statementAndStepsUnified;  ///

      if (unifiedWithRule) {
        context.debug(`...unified the '${statementString}' statement with the '${ruleString}' rule.`);
      }
    }
  }

  return unifiedWithRule;
}

function unifyAWithReference(statement, reference, substitutions, context) {
  let unifiedWithReference = false;

  if (reference !== null) {
    const metavariableVerified = reference.verifyMetavariable(context);

    if (metavariableVerified) {
      const statementString = statement.getString(),
            referenceString = reference.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${referenceString}' reference...`);

      const metavariable = reference.getMetavariable(),
            specificContext = context,  ///
            statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context),
            substitution = statementSubstitution; ///

      substitutions.addSubstitution(substitution, specificContext);

      unifiedWithReference = true;

      if (unifiedWithReference) {
        context.debug(`...unified the '${statementString}' statement with the '${referenceString}' reference.`);
      }
    }
  }

  return unifiedWithReference;
}

function unifyAsSatisfyingAssertion(statement, reference, substitutions, context) {
  let unifiedAsSatisfyingAssertion = false;

  if (reference !== null) {
    const satisfyingAssertion = satisfyingAssertionFromStatement(statement, context);

    if (satisfyingAssertion !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a satisfying assertion...`);

      const axiomLemmaTheoremConjecture = context.findAxiomLemmaTheoremConjectureByReference(reference);

      if (axiomLemmaTheoremConjecture !== null) {
        reference = satisfyingAssertion.getReference();

        const axiom = context.findAxiomByReference(reference),
              substitutions = Substitutions.fromNothing(),
              axiomLemmaTheoremConjectureUnified = axiom.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, substitutions, context);

        if (axiomLemmaTheoremConjectureUnified) {
          const substitutionsMatch = satisfyingAssertion.matchSubstitutions(substitutions, context);

          unifiedAsSatisfyingAssertion = substitutionsMatch;  ///
        }
      }

      if (unifiedAsSatisfyingAssertion) {
        context.debug(`...unified the '${statementString}' statement as a satisfying assertion.`);
      }
    }
  }

  return unifiedAsSatisfyingAssertion;
}

function unifyAWithAxiomLemmaTheoremOrConjecture(statement, reference, substitutions, context) {
  let unifiedWithAxiomLemmaTheoremOrConjecture = false;

  if (reference !== null) {
    const axiomLemmaTheoremConjecture = context.findAxiomLemmaTheoremConjectureByReference(reference),
          generalSubstitutions = substitutions; ///

    if (axiomLemmaTheoremConjecture !== null) {
      const statementString = statement.getString(),
            axiomLemmaTheoremConjectureString = reference.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture...`);

      const stepsOrSubproofs = context.getStepsOrSubproofs(),
            specificSubstitutions = Substitutions.fromNothing();

      substitutions = specificSubstitutions;  ///

      const statementAndStepsUnified = axiomLemmaTheoremConjecture.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);

      if (statementAndStepsUnified) {
        const metavariable = reference.getMetavariable(),
              specificContext = context,  ///
              statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context),
              substitution = statementSubstitution;  ///

        substitutions = generalSubstitutions; ///

        substitutions.addSubstitution(substitution, specificContext);

        unifiedWithAxiomLemmaTheoremOrConjecture = true;
      }

      if (unifiedWithAxiomLemmaTheoremOrConjecture) {
        context.debug(`...unified the '${statementString}' statement with the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture.`);
      }
    }
  }

  return unifiedWithAxiomLemmaTheoremOrConjecture;
}

function unifyAsEquality(statement, reference, substitutions, context) {
  let unifiedAsEquality = false;

  if (reference === null) {
    const equality = equalityFromStatement(statement, context);

    if (equality !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as an equality...`);

      unifiedAsEquality = true;

      context.debug(`...unified the '${statementString}' statement as an equality.`);
    }
  }

  return unifiedAsEquality;
}

function unifyAsJudgement(statement, reference, substitutions, context) {
  let unifiedAsJudgement = false;

  if (reference === null) {
    const judgement = judgementFromStatement(statement, context);

    if (judgement !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a judgement...`);

      unifiedAsJudgement = true;

      context.debug(`...unified the '${statementString}' statement as a judgement.`);
    }
  }

  return unifiedAsJudgement;
}

function unifyAsTypeAssertion(statement, reference, substitutions, context) {
  let unifiedAsTypeAssertion = false;

  if (reference === null) {
    const typeAssertion = typeAssertionFromStatement(statement, context);

    if (typeAssertion !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a type assertion...`);

      unifiedAsTypeAssertion = true;

      context.debug(`...unified the '${statementString}' statement as a type assertion.`);
    }
  }

  return unifiedAsTypeAssertion;
}

function unifyAsPropertyAssertion(statement, reference, substitutions, context) {
  let unifiedAsPropertyAssertion = false;

  if (reference === null) {
    const propertyAssertion = propertyAssertionFromStatement(statement, context);

    if (propertyAssertion !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a property assertion...`);

      const term = propertyAssertion.getTerm(),
            equivalence = context.findEquivalenceByTerm(term);

      if (equivalence !== null) {
        unifiedAsPropertyAssertion = equivalence.someOtherTerm(term, (term) => {  ///
          const propertyRelation = propertyAssertion.getPropertyRelation(),
                propertyAssertionMatches = context.matchTermAndPropertyRelation(term, propertyRelation);

          if (propertyAssertionMatches) {
            return true;
          }
        });
      }

      if (unifiedAsPropertyAssertion) {
        context.debug(`...unified the '${statementString}' statement as a property assertion.`);
      }
    }
  }

  return unifiedAsPropertyAssertion;
}

function unifyWithStepsOrSubproofs(statement, reference, substitutions, context) {
  let unifiedWithSteps = false;

  if (reference === null) {
    const stepsOrSubproofs = context.getStepsOrSubproofs(),
          statementUnifiedWithSteps = statement.unifyWithStepsOrSubproofs(stepsOrSubproofs, context);

    unifiedWithSteps = statementUnifiedWithSteps; ///
  }

  return unifiedWithSteps;
}

const unifyMixins = [
  unifyAWithRule,
  unifyAWithReference,
  unifyAsSatisfyingAssertion,
  unifyAWithAxiomLemmaTheoremOrConjecture,
  unifyAsEquality,
  unifyAsJudgement,
  unifyAsTypeAssertion,
  unifyAsPropertyAssertion,
  unifyWithStepsOrSubproofs
];

export default unifyMixins;

