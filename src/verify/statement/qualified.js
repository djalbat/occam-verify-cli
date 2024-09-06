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

  const verifyQualifiedStatementFunctions = [
    verifyQualifiedStatementAAgainstRule,
    verifyQualifiedStatementAAgainstAxiom,
    verifyQualifiedStatementAAgainstLemma,
    verifyQualifiedStatementAAgainstTheorem,
    verifyQualifiedStatementAAgainstConjecture,
    verifyQualifiedStatementAAgainstReference
  ];

  qualifiedStatementVerified = verifyQualifiedStatementFunctions.some((verifyQualifiedStatementFunction) => {  ///
    const qualifiedStatementVerified = verifyQualifiedStatementFunction(qualifiedStatementNode, substitutions, localContext);

    if (qualifiedStatementVerified) {
      return true;
    }
  });

  if (qualifiedStatementVerified) {
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

function verifyQualifiedStatementAAgainstRule(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementVerifiedAgainstRule = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        rule = localContext.findRuleByMetavariableNode(metavariableNode);

  if (rule !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' rule...`, qualifiedStatementNode);

    const ruleMatchesStatement = rule.matchStatement(statementNode, localContext);

    qualifiedStatementVerifiedAgainstRule = ruleMatchesStatement;  ///

    if (qualifiedStatementVerifiedAgainstRule) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' rule.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstRule;
}

function verifyQualifiedStatementAAgainstAxiom(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementVerifiedAgainstAxiom = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        axiom = localContext.findAxiomByMetavariableNode(metavariableNode);

  if (axiom !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' axiom...`, qualifiedStatementNode);

    const axiomMatchesStatement = axiom.matchStatement(statementNode, localContext);

    qualifiedStatementVerifiedAgainstAxiom = axiomMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstAxiom) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' axiom.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstAxiom;
}

function verifyQualifiedStatementAAgainstLemma(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementVerifiedAgainstLemma = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        lemma = localContext.findLemmaByMetavariableNode(metavariableNode);

  if (lemma !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' lemma...`, qualifiedStatementNode);

    const lemmaMatchesStatement = lemma.matchStatement(statementNode, localContext);

    qualifiedStatementVerifiedAgainstLemma = lemmaMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstLemma) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' lemma.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstLemma;
}

function verifyQualifiedStatementAAgainstTheorem(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementVerifiedAgainstTheorem = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        theorem = localContext.findTheoremByMetavariableNode(metavariableNode);

  if (theorem !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' theorem...`, qualifiedStatementNode);

    const theoremMatchesStatement = theorem.matchStatement(statementNode, localContext);

    qualifiedStatementVerifiedAgainstTheorem = theoremMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstTheorem) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' theorem.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstTheorem;
}

function verifyQualifiedStatementAAgainstConjecture(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementVerifiedAgainstConjecture = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        conjecture = localContext.findConjectureByMetavariableNode(metavariableNode);

  if (conjecture !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' conjecture...`, qualifiedStatementNode);

    const conjectureMatchesStatement = conjecture.matchStatement(statementNode, localContext);

    qualifiedStatementVerifiedAgainstConjecture = conjectureMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstConjecture) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' conjecture.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstConjecture;
}

function verifyQualifiedStatementAAgainstReference(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementVerifiedAgainstReference = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        metavariableString = localContext.nodeAsString(metavariableNode),
        metavariablePresent = localContext.isMetavariablePresentByMetavariableNode(metavariableNode),
        qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

  localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' reference...`, qualifiedStatementNode);

  if (metavariablePresent) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          localContextA = null,
          localContextB = localContext, ///
          statementNodeB = statementNode, ///
          substitutionNode = null,
          metavariableNodeA = metavariableNode, ///
          metavariableVerifiedAgainstStatement = unifyMetavariableAgainstStatement(metavariableNodeA, statementNodeB, substitutionNode, substitutions, localContextA, localContextB, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    qualifiedStatementVerifiedAgainstReference = metavariableVerifiedAgainstStatement; ///
  }

  if (qualifiedStatementVerifiedAgainstReference) {
    localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' reference.`, qualifiedStatementNode);
  }

  return qualifiedStatementVerifiedAgainstReference;
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

    const equalityVerified = verifyEquality(equalityNode, assignments, derived, localContext, () => {
      const verifiedAhead = true;

      return verifiedAhead;
    });

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
