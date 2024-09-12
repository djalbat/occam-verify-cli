"use strict";

import verifyEquality from "../equality";
import verifyJudgement from "../judgement";
import verifyTypeAssertion from "../assertion/type";
import unifyMetavariableWithStatement from "../../unify/metavariableWithStatement";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement!"),
      equalityNodeQuery = nodeQuery("/statement/equality!"),
      judgementNodeQuery = nodeQuery("/statement/judgement!"),
      metavariableNodeQuery = nodeQuery("/qualifiedStatement/reference/metavariable!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

export default function verifyQualifiedStatement(qualifiedStatementNode, substitutions, assignments, localContext) {
  let qualifiedStatementVerified;

  const qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

  localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement...`, qualifiedStatementNode);

  const unifyQualifiedStatementFunctions = [
    unifyQualifiedStatementAWithRule,
    unifyQualifiedStatementAWithAxiom,
    unifyQualifiedStatementAWithLemma,
    unifyQualifiedStatementAWithTheorem,
    unifyQualifiedStatementAWithConjecture,
    unifyQualifiedStatementAWithReference
  ];

  const qualifiedStatementUnified = unifyQualifiedStatementFunctions.some((unifyQualifiedStatementFunction) => {  ///
    const qualifiedStatementUnified = unifyQualifiedStatementFunction(qualifiedStatementNode, substitutions, localContext);

    if (qualifiedStatementUnified) {
      return true;
    }
  });

  if (qualifiedStatementUnified) {
    const derived = false,
          statementNode = statementNodeQuery(qualifiedStatementNode),
          statedStatementVerified = verifyStatedStatement(statementNode, assignments, derived, localContext);

    qualifiedStatementVerified = statedStatementVerified; ///
  }

  if (qualifiedStatementVerified) {
    localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement.`, qualifiedStatementNode);
  }

  return qualifiedStatementVerified;
}

function unifyQualifiedStatementAWithRule(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedWithRule = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        rule = localContext.findRuleByMetavariableNode(metavariableNode);

  if (rule !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' rule...`, qualifiedStatementNode);

    const ruleMatchesStatement = rule.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedWithRule = ruleMatchesStatement;  ///

    if (qualifiedStatementUnifiedWithRule) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' rule.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementUnifiedWithRule;
}

function unifyQualifiedStatementAWithAxiom(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedWithAxiom = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        axiom = localContext.findAxiomByMetavariableNode(metavariableNode);

  if (axiom !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' axiom...`, qualifiedStatementNode);

    const axiomMatchesStatement = axiom.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedWithAxiom = axiomMatchesStatement; ///

    if (qualifiedStatementUnifiedWithAxiom) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' axiom.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementUnifiedWithAxiom;
}

function unifyQualifiedStatementAWithLemma(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedWithLemma = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        lemma = localContext.findLemmaByMetavariableNode(metavariableNode);

  if (lemma !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' lemma...`, qualifiedStatementNode);

    const lemmaMatchesStatement = lemma.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedWithLemma = lemmaMatchesStatement; ///

    if (qualifiedStatementUnifiedWithLemma) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' lemma.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementUnifiedWithLemma;
}

function unifyQualifiedStatementAWithTheorem(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedWithTheorem = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        theorem = localContext.findTheoremByMetavariableNode(metavariableNode);

  if (theorem !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' theorem...`, qualifiedStatementNode);

    const theoremMatchesStatement = theorem.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedWithTheorem = theoremMatchesStatement; ///

    if (qualifiedStatementUnifiedWithTheorem) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' theorem.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementUnifiedWithTheorem;
}

function unifyQualifiedStatementAWithConjecture(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedWithConjecture = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        conjecture = localContext.findConjectureByMetavariableNode(metavariableNode);

  if (conjecture !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' conjecture...`, qualifiedStatementNode);

    const conjectureMatchesStatement = conjecture.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedWithConjecture = conjectureMatchesStatement; ///

    if (qualifiedStatementUnifiedWithConjecture) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' conjecture.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementUnifiedWithConjecture;
}

function unifyQualifiedStatementAWithReference(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedWithReference = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        metavariableString = localContext.nodeAsString(metavariableNode),
        metavariablePresent = localContext.isMetavariablePresentByMetavariableNode(metavariableNode),
        qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

  localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' reference...`, qualifiedStatementNode);

  if (metavariablePresent) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          localContextA = null,
          localContextB = localContext, ///
          statementNodeB = statementNode, ///
          substitutionNodeA = null,
          metavariableNodeA = metavariableNode, ///
          metavariableUnifiedWithStatement = unifyMetavariableWithStatement(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    qualifiedStatementUnifiedWithReference = metavariableUnifiedWithStatement; ///
  }

  if (qualifiedStatementUnifiedWithReference) {
    localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' reference.`, qualifiedStatementNode);
  }

  return qualifiedStatementUnifiedWithReference;
}

function verifyStatedStatement(statementNode, assignments, derived, localContext) {
  let statedStatementVerified;

  const statementString = localContext.nodeAsString(statementNode);

  localContext.trace(`Verifying the '${statementString}' stated statement...`, statementNode);

  const verifyStatedStatementFunctions = [
    verifyStatedStatementAsEquality,
    verifyStatedStatementAsJudgement,
    verifyStatedStatementAsTypeAssertion
  ];

  verifyStatedStatementFunctions.every((verifyStatedStatementFunction) => { ///
    const statedStatementVerified = verifyStatedStatementFunction(statementNode, assignments, derived, localContext);

    if (statedStatementVerified) {
      return true;
    }
  });

  statedStatementVerified = true; ///

  if (statedStatementVerified) {
    localContext.debug(`...verified the '${statementString}' stated statement.`, statementNode);
  }

  return statedStatementVerified;
}

function verifyStatedStatementAsEquality(statementNode, assignments, derived, localContext) {
  let statedStatementVerifiedAsEquality = true; ///

  const equalityNode = equalityNodeQuery(statementNode);

  if (equalityNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' stated statement as an equality...`, statementNode);

    const equalityVerified = verifyEquality(equalityNode, assignments, derived, localContext);

    statedStatementVerifiedAsEquality = equalityVerified; ///

    if (statedStatementVerifiedAsEquality) {
      localContext.debug(`...verified the '${statementString}' stated statement as an equality.`, statementNode);
    }
  }

  return statedStatementVerifiedAsEquality;
}

function verifyStatedStatementAsJudgement(statementNode, assignments, derived, localContext) {
  let statedStatementVerifiedAsJudgement = true;

  const judgementNode = judgementNodeQuery(statementNode);

  if (judgementNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' stated statement as a judgement...`, statementNode);

    const judgementVerified = verifyJudgement(judgementNode, assignments, derived, localContext);

    statedStatementVerifiedAsJudgement = judgementVerified;  ///

    if (statedStatementVerifiedAsJudgement) {
      localContext.debug(`...verified the '${statementString}' stated statement as a judgement.`, statementNode);
    }
  }

  return statedStatementVerifiedAsJudgement;
}

function verifyStatedStatementAsTypeAssertion(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsTypeAssertion = true;  ///

  const typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' stated statement as a type assertion...`, statementNode);

    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assignments, derived, localContext);

    statementVerifiedAsTypeAssertion = typeAssertionVerified; ///

    if (statementVerifiedAsTypeAssertion) {
      localContext.debug(`...verified the '${statementString}' stated statement as a type assertion.`, statementNode);
    }
  }

  return statementVerifiedAsTypeAssertion;
}
