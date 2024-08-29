"use strict";

import { nodeQuery } from "../../utilities/query";
import { verifyStatementAsEquality, verifyStatementAsTypeAssertion } from "../../verify/statement";

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement!"),
      metavariableNodeQuery = nodeQuery("/qualifiedStatement/reference!/metavariable!");

export default function verifyQualifiedStatement(qualifiedStatementNode, assignments, localContext) {
  let qualifiedStatementVerified;

  const qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

  localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement...`, qualifiedStatementNode);

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

  if (qualifiedStatementVerified) {
    const derived = false,
          statementNode = statementNodeQuery(qualifiedStatementNode),
          statementVerified = verifyStatement(statementNode, assignments, derived, localContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    qualifiedStatementVerified = statementVerified;  ///
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

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' rule...`, qualifiedStatementNode);

    const ruleMatchesStatement = rule.matchStatement(statementNode, localContext);

    qualifiedStatementVerifiedAgainstRule = ruleMatchesStatement;  ///

    if (qualifiedStatementVerifiedAgainstRule) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' rule.`, qualifiedStatementNode);
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

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' axiom...`, qualifiedStatementNode);

    const axiomMatchesStatement = axiom.matchStatement(statementNode, localContext);

    qualifiedStatementVerifiedAgainstAxiom = axiomMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstAxiom) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' axiom.`, qualifiedStatementNode);
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

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' lemma...`, qualifiedStatementNode);

    const lemmaMatchesStatement = lemma.matchStatement(statementNode, localContext);

    qualifiedStatementVerifiedAgainstLemma = lemmaMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstLemma) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' lemma.`, qualifiedStatementNode);
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

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' theorem...`, qualifiedStatementNode);

    const theoremMatchesStatement = theorem.matchStatement(statementNode, localContext);

    qualifiedStatementVerifiedAgainstTheorem = theoremMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstTheorem) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' theorem.`, qualifiedStatementNode);
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

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' conjecture...`, qualifiedStatementNode);

    const conjectureMatchesStatement = conjecture.matchStatement(statementNode, localContext);

    qualifiedStatementVerifiedAgainstConjecture = conjectureMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstConjecture) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${metavariableString}' conjecture.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstConjecture;
}

function verifyStatement(statementNode, assignments, derived, localContext, verifyAhead) {
  let statementVerified;

  const statementString = localContext.nodeAsString(statementNode);

  localContext.trace(`Verifying the '${statementString}' statement...`, statementNode);

  const verifyStatementFunctions = [
    verifyStatementAsEquality,
    verifyStatementAsTypeAssertion
  ];

  verifyStatementFunctions.some((verifyStatementFunction) => {
    const statementVerified = verifyStatementFunction(statementNode, assignments, derived, localContext, verifyAhead);

    if (statementVerified) {
      return true;
    }
  });

  statementVerified = true; ///

  if (statementVerified) {
    localContext.debug(`...verified the '${statementString}' statement.`, statementNode);
  }

  return statementVerified;
}
