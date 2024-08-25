"use strict";

import verifyEquality from "../equality";
import verifyTypeAssertion from "../typeAssertion";

import { nodeQuery } from "../../utilities/query";

const equalityNodeQuery = nodeQuery("/qualifiedStatement/statement/equality!"),
      statementNodeQuery = nodeQuery("/qualifiedStatement/statement!"),
      typeAssertionNodeQuery = nodeQuery("/qualifiedStatement/statement/typeAssertion!"),
      referenceMetavariableNodeQuery = nodeQuery("/qualifiedStatement/reference!/metavariable!");

export default function verifyQualifiedStatement(qualifiedStatementNode, assignments, derived, localContext) {
  let qualifiedStatementVerified = false;

  const statementNode = statementNodeQuery(qualifiedStatementNode);

  if (statementNode !== null) {
    const qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement...`, qualifiedStatementNode);

    const referenceMetavariableNode = referenceMetavariableNodeQuery(qualifiedStatementNode),
          verifyQualifiedStatementFunctions = [
            verifyQualifiedStatementAAgainstRule,
            verifyQualifiedStatementAAgainstAxiom,
            verifyQualifiedStatementAAgainstLemma,
            verifyQualifiedStatementAAgainstTheorem,
            verifyQualifiedStatementAAgainstConjecture
          ];

    qualifiedStatementVerified = verifyQualifiedStatementFunctions.some((verifyQualifiedStatementFunction) => {  ///
      const qualifiedStatementVerified = verifyQualifiedStatementFunction(qualifiedStatementNode, referenceMetavariableNode, localContext);

      if (qualifiedStatementVerified) {
        return true;
      }
    });

    if (qualifiedStatementVerified) {
      derived = false;  ///

      const verifyQualifiedStatementFunctions = [
              verifyQualifiedStatementAsEquality,
              verifyQualifiedStatementAsTypeAssertion
            ];

      qualifiedStatementVerified = verifyQualifiedStatementFunctions.every((verifyQualifiedStatementFunction) => { ///
        const qualifiedStatementVerified = verifyQualifiedStatementFunction(qualifiedStatementNode, assignments, derived, localContext, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

        if (qualifiedStatementVerified) {
          return true;
        }
      });
    }

    if (qualifiedStatementVerified) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementVerified;
}

function verifyQualifiedStatementAAgainstRule(qualifiedStatementNode, referenceMetavariableNode, localContext) {
  let qualifiedStatementVerifiedAgainstRule = false;

  const metavariableNode = referenceMetavariableNode,  ///
        rule = localContext.findRuleByMetavariableNode(metavariableNode);

  if (rule !== null) {
    const referenceMetavariableString = localContext.nodeAsString(referenceMetavariableNode),
          statementNode = statementNodeQuery(qualifiedStatementNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${referenceMetavariableString}' rule...`, statementNode);

    const ruleMatchesStatement = rule.matchStatement(statementNode, statementLocalContext);

    qualifiedStatementVerifiedAgainstRule = ruleMatchesStatement;  ///

    if (qualifiedStatementVerifiedAgainstRule) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${referenceMetavariableString}' rule.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstRule;
}

function verifyQualifiedStatementAAgainstAxiom(qualifiedStatementNode, referenceMetavariableNode, localContext) {
  let qualifiedStatementVerifiedAgainstAxiom = false;

  const metavariableNode = referenceMetavariableNode,  ///
        axiom = localContext.findAxiomByMetavariableNode(metavariableNode);

  if (axiom !== null) {
    const referenceMetavariableString = localContext.nodeAsString(referenceMetavariableNode),
          statementNode = statementNodeQuery(qualifiedStatementNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${referenceMetavariableString}' axiom...`, statementNode);

    const axiomMatchesStatement = axiom.matchStatement(statementNode, statementLocalContext);

    qualifiedStatementVerifiedAgainstAxiom = axiomMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstAxiom) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${referenceMetavariableString}' axiom.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstAxiom;
}

function verifyQualifiedStatementAAgainstLemma(qualifiedStatementNode, referenceMetavariableNode, localContext) {
  let qualifiedStatementVerifiedAgainstLemma = false;

  const metavariableNode = referenceMetavariableNode,  ///
        lemma = localContext.findLemmaByMetavariableNode(metavariableNode);

  if (lemma !== null) {
    const referenceMetavariableString = localContext.nodeAsString(referenceMetavariableNode),
          statementNode = statementNodeQuery(qualifiedStatementNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${referenceMetavariableString}' lemma...`, statementNode);

    const lemmaMatchesStatement = lemma.matchStatement(statementNode, statementLocalContext);

    qualifiedStatementVerifiedAgainstLemma = lemmaMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstLemma) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${referenceMetavariableString}' lemma.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstLemma;
}

function verifyQualifiedStatementAAgainstTheorem(qualifiedStatementNode, referenceMetavariableNode, localContext) {
  let qualifiedStatementVerifiedAgainstTheorem = false;

  const metavariableNode = referenceMetavariableNode,  ///
        theorem = localContext.findTheoremByMetavariableNode(metavariableNode);

  if (theorem !== null) {
    const referenceMetavariableString = localContext.nodeAsString(referenceMetavariableNode),
          statementNode = statementNodeQuery(qualifiedStatementNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${referenceMetavariableString}' theorem...`, statementNode);

    const theoremMatchesStatement = theorem.matchStatement(statementNode, statementLocalContext);

    qualifiedStatementVerifiedAgainstTheorem = theoremMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstTheorem) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${referenceMetavariableString}' theorem.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstTheorem;
}

function verifyQualifiedStatementAAgainstConjecture(qualifiedStatementNode, referenceMetavariableNode, localContext) {
  let qualifiedStatementVerifiedAgainstConjecture = false;

  const metavariableNode = referenceMetavariableNode,  ///
        conjecture = localContext.findConjectureByMetavariableNode(metavariableNode);

  if (conjecture !== null) {
    const referenceMetavariableString = localContext.nodeAsString(referenceMetavariableNode),
          statementNode = statementNodeQuery(qualifiedStatementNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${referenceMetavariableString}' conjecture...`, statementNode);

    const conjectureMatchesStatement = conjecture.matchStatement(statementNode, statementLocalContext);

    qualifiedStatementVerifiedAgainstConjecture = conjectureMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstConjecture) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${referenceMetavariableString}' conjecture.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstConjecture;
}

function verifyQualifiedStatementAsEquality(qualifiedStatementNode, assignments, derived, localContext, verifyAhead) {
  let statementVerifiedAsEquality = true; ///

  const equalityNode = equalityNodeQuery(qualifiedStatementNode);

  if (equalityNode !== null) {
    const qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement as an equality...`, qualifiedStatementNode);

    const equalityVerified = verifyEquality(equalityNode, assignments, derived, localContext, verifyAhead);

    statementVerifiedAsEquality = equalityVerified; ///

    if (statementVerifiedAsEquality) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement as an equality.`, qualifiedStatementNode);
    }
  }

  return statementVerifiedAsEquality;
}

function verifyQualifiedStatementAsTypeAssertion(qualifiedStatementNode, assignments, derived, localContext, verifyAhead) {
  let statementVerifiedAsTypeAssertion = true;  ///

  const typeAssertionNode = typeAssertionNodeQuery(qualifiedStatementNode);

  if (typeAssertionNode !== null) {
    const qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement as a type assertion...`, qualifiedStatementNode);

    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assignments, derived, localContext, verifyAhead);

    statementVerifiedAsTypeAssertion = typeAssertionVerified; ///

    if (statementVerifiedAsTypeAssertion) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement as a type assertion.`, qualifiedStatementNode);
    }
  }

  return statementVerifiedAsTypeAssertion;
}
