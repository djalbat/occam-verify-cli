"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement!"),
      metavariableNodeQuery = nodeQuery("/qualifiedStatement/reference!/metavariable!");

export default function verifyQualifiedStatement(qualifiedStatementNode, assignments, localContext) {
  let qualifiedStatementVerified;

  const qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

  localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement...`, qualifiedStatementNode);

  const derived = false,
        statementNode = statementNodeQuery(qualifiedStatementNode),
        statementVerified = verifyStatement(statementNode, assignments, derived, localContext, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  if (statementVerified) {
    const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
          verifyQualifiedStatementFunctions = [
            verifyQualifiedStatementAAgainstRule,
            verifyQualifiedStatementAAgainstAxiom,
            verifyQualifiedStatementAAgainstLemma,
            verifyQualifiedStatementAAgainstTheorem,
            verifyQualifiedStatementAAgainstConjecture
          ];

    qualifiedStatementVerified = verifyQualifiedStatementFunctions.some((verifyQualifiedStatementFunction) => {  ///
      const qualifiedStatementVerified = verifyQualifiedStatementFunction(qualifiedStatementNode, metavariableNode, localContext);

      if (qualifiedStatementVerified) {
        return true;
      }
    });
  }

  if (qualifiedStatementVerified) {
    localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement.`, qualifiedStatementNode);
  }

  return qualifiedStatementVerified;
}

function verifyQualifiedStatementAAgainstRule(qualifiedStatementNode, metavariableNode, localContext) {
  let qualifiedStatementVerifiedAgainstRule = false;

  const rule = localContext.findRuleByMetavariableNode(metavariableNode);

  if (rule !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' rule...`, statementNode);

    const ruleMatchesStatement = rule.matchStatement(statementNode, localContext);

    qualifiedStatementVerifiedAgainstRule = ruleMatchesStatement;  ///

    if (qualifiedStatementVerifiedAgainstRule) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' rule.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstRule;
}

function verifyQualifiedStatementAAgainstAxiom(qualifiedStatementNode, metavariableNode, localContext) {
  let qualifiedStatementVerifiedAgainstAxiom = false;

  const axiom = localContext.findAxiomByMetavariableNode(metavariableNode);

  if (axiom !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' axiom...`, statementNode);

    const axiomMatchesStatement = axiom.matchStatement(statementNode, localContext);

    qualifiedStatementVerifiedAgainstAxiom = axiomMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstAxiom) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' axiom.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstAxiom;
}

function verifyQualifiedStatementAAgainstLemma(qualifiedStatementNode, metavariableNode, localContext) {
  let qualifiedStatementVerifiedAgainstLemma = false;

  const lemma = localContext.findLemmaByMetavariableNode(metavariableNode);

  if (lemma !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' lemma...`, statementNode);

    const lemmaMatchesStatement = lemma.matchStatement(statementNode, localContext);

    qualifiedStatementVerifiedAgainstLemma = lemmaMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstLemma) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' lemma.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstLemma;
}

function verifyQualifiedStatementAAgainstTheorem(qualifiedStatementNode, metavariableNode, localContext) {
  let qualifiedStatementVerifiedAgainstTheorem = false;

  const theorem = localContext.findTheoremByMetavariableNode(metavariableNode);

  if (theorem !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' theorem...`, statementNode);

    const theoremMatchesStatement = theorem.matchStatement(statementNode, localContext);

    qualifiedStatementVerifiedAgainstTheorem = theoremMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstTheorem) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' theorem.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstTheorem;
}

function verifyQualifiedStatementAAgainstConjecture(qualifiedStatementNode, metavariableNode, localContext) {
  let qualifiedStatementVerifiedAgainstConjecture = false;

  const conjecture = localContext.findConjectureByMetavariableNode(metavariableNode);

  if (conjecture !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' conjecture...`, statementNode);

    const conjectureMatchesStatement = conjecture.matchStatement(statementNode, localContext);

    qualifiedStatementVerifiedAgainstConjecture = conjectureMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstConjecture) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' conjecture.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstConjecture;
}
