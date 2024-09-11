"use strict";

import verifyEquality from "../equality";
import verifyJudgement from "../judgement";
import verifyTypeAssertion from "../assertion/type";
import unifyMetavariableAgainstStatement from "../../unify/metavariableAgainstStatement";

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
    unifyQualifiedStatementAAgainstRule,
    unifyQualifiedStatementAAgainstAxiom,
    unifyQualifiedStatementAAgainstLemma,
    unifyQualifiedStatementAAgainstTheorem,
    unifyQualifiedStatementAAgainstConjecture,
    unifyQualifiedStatementAAgainstReference
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

function unifyQualifiedStatementAAgainstRule(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedAgainstRule = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        rule = localContext.findRuleByMetavariableNode(metavariableNode);

  if (rule !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' rule...`, qualifiedStatementNode);

    const ruleMatchesStatement = rule.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedAgainstRule = ruleMatchesStatement;  ///

    if (qualifiedStatementUnifiedAgainstRule) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' rule.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementUnifiedAgainstRule;
}

function unifyQualifiedStatementAAgainstAxiom(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedAgainstAxiom = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        axiom = localContext.findAxiomByMetavariableNode(metavariableNode);

  if (axiom !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' axiom...`, qualifiedStatementNode);

    const axiomMatchesStatement = axiom.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedAgainstAxiom = axiomMatchesStatement; ///

    if (qualifiedStatementUnifiedAgainstAxiom) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' axiom.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementUnifiedAgainstAxiom;
}

function unifyQualifiedStatementAAgainstLemma(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedAgainstLemma = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        lemma = localContext.findLemmaByMetavariableNode(metavariableNode);

  if (lemma !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' lemma...`, qualifiedStatementNode);

    const lemmaMatchesStatement = lemma.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedAgainstLemma = lemmaMatchesStatement; ///

    if (qualifiedStatementUnifiedAgainstLemma) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' lemma.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementUnifiedAgainstLemma;
}

function unifyQualifiedStatementAAgainstTheorem(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedAgainstTheorem = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        theorem = localContext.findTheoremByMetavariableNode(metavariableNode);

  if (theorem !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' theorem...`, qualifiedStatementNode);

    const theoremMatchesStatement = theorem.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedAgainstTheorem = theoremMatchesStatement; ///

    if (qualifiedStatementUnifiedAgainstTheorem) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' theorem.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementUnifiedAgainstTheorem;
}

function unifyQualifiedStatementAAgainstConjecture(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedAgainstConjecture = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        conjecture = localContext.findConjectureByMetavariableNode(metavariableNode);

  if (conjecture !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' conjecture...`, qualifiedStatementNode);

    const conjectureMatchesStatement = conjecture.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedAgainstConjecture = conjectureMatchesStatement; ///

    if (qualifiedStatementUnifiedAgainstConjecture) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' conjecture.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementUnifiedAgainstConjecture;
}

function unifyQualifiedStatementAAgainstReference(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedAgainstReference = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        metavariableString = localContext.nodeAsString(metavariableNode),
        metavariablePresent = localContext.isMetavariablePresentByMetavariableNode(metavariableNode),
        qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

  localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' reference...`, qualifiedStatementNode);

  if (metavariablePresent) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          localContextA = null,
          localContextB = localContext, ///
          statementNodeB = statementNode, ///
          substitutionNodeA = null,
          metavariableNodeA = metavariableNode, ///
          metavariableUnifiedAgainstStatement = unifyMetavariableAgainstStatement(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    qualifiedStatementUnifiedAgainstReference = metavariableUnifiedAgainstStatement; ///
  }

  if (qualifiedStatementUnifiedAgainstReference) {
    localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' reference.`, qualifiedStatementNode);
  }

  return qualifiedStatementUnifiedAgainstReference;
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
