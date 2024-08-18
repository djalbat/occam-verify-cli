"use strict";

import verifyEquality from "../equality";
import verifyTypeAssertion from "../typeAssertion";

import { nodeQuery } from "../../utilities/query";

const equalityNodeQuery = nodeQuery("/qualifiedStatement/statement/equality!"),
      referenceNodeQuery = nodeQuery("/qualifiedStatement/qualification!/reference!"),
      statementNodeQuery = nodeQuery("/qualifiedStatement/statement!"),
      typeAssertionNodeQuery = nodeQuery("/qualifiedStatement/statement/typeAssertion!");

export default function verifyQualifiedStatement(qualifiedStatementNode, assignments, derived, localContext) {
  let qualifiedStatementVerified = false;

  const statementNode = statementNodeQuery(qualifiedStatementNode);

  if (statementNode !== null) {
    const qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement...`, qualifiedStatementNode);

    const referenceNode = referenceNodeQuery(qualifiedStatementNode),
          verifyQualifiedStatementFunctions = [
            verifyQualifiedStatementAAgainstRule,
            verifyQualifiedStatementAAgainstAxiom,
            verifyQualifiedStatementAAgainstLemma,
            verifyQualifiedStatementAAgainstTheorem,
            verifyQualifiedStatementAAgainstConjecture
          ];

    qualifiedStatementVerified = verifyQualifiedStatementFunctions.some((verifyQualifiedStatementFunction) => {  ///
      const qualifiedStatementVerified = verifyQualifiedStatementFunction(qualifiedStatementNode, referenceNode, localContext);

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

function verifyQualifiedStatementAAgainstRule(qualifiedStatementNode, referenceNode, localContext) {
  let qualifiedStatementVerifiedAgainstRule = false;

  const rule = localContext.findRuleByReferenceNode(referenceNode);

  if (rule !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          referenceString = localContext.nodeAsString(referenceNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${referenceString}' rule...`, statementNode);

    const ruleMatchesStatement = rule.matchStatement(statementNode, statementLocalContext);

    qualifiedStatementVerifiedAgainstRule = ruleMatchesStatement;  ///

    if (qualifiedStatementVerifiedAgainstRule) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${referenceString}' rule.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstRule;
}

function verifyQualifiedStatementAAgainstAxiom(qualifiedStatementNode, referenceNode, localContext) {
  let qualifiedStatementVerifiedAgainstAxiom = false;

  const axiom = localContext.findAxiomByReferenceNode(referenceNode);

  if (axiom !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          referenceString = localContext.nodeAsString(referenceNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${referenceString}' axiom...`, statementNode);

    const axiomMatchesStatement = axiom.matchStatement(statementNode, statementLocalContext);

    qualifiedStatementVerifiedAgainstAxiom = axiomMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstAxiom) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${referenceString}' axiom.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstAxiom;
}

function verifyQualifiedStatementAAgainstLemma(qualifiedStatementNode, referenceNode, localContext) {
  let qualifiedStatementVerifiedAgainstLemma = false;

  const lemma = localContext.findLemmaByReferenceNode(referenceNode);

  if (lemma !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          referenceString = localContext.nodeAsString(referenceNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${referenceString}' lemma...`, statementNode);

    const lemmaMatchesStatement = lemma.matchStatement(statementNode, statementLocalContext);

    qualifiedStatementVerifiedAgainstLemma = lemmaMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstLemma) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${referenceString}' lemma.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstLemma;
}

function verifyQualifiedStatementAAgainstTheorem(qualifiedStatementNode, referenceNode, localContext) {
  let qualifiedStatementVerifiedAgainstTheorem = false;

  const theorem = localContext.findTheoremByReferenceNode(referenceNode);

  if (theorem !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          referenceString = localContext.nodeAsString(referenceNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${referenceString}' theorem...`, statementNode);

    const theoremMatchesStatement = theorem.matchStatement(statementNode, statementLocalContext);

    qualifiedStatementVerifiedAgainstTheorem = theoremMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstTheorem) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${referenceString}' theorem.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstTheorem;
}

function verifyQualifiedStatementAAgainstConjecture(qualifiedStatementNode, referenceNode, localContext) {
  let qualifiedStatementVerifiedAgainstConjecture = false;

  const conjecture = localContext.findConjectureByReferenceNode(referenceNode);

  if (conjecture !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          referenceString = localContext.nodeAsString(referenceNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${referenceString}' conjecture...`, statementNode);

    const conjectureMatchesStatement = conjecture.matchStatement(statementNode, statementLocalContext);

    qualifiedStatementVerifiedAgainstConjecture = conjectureMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstConjecture) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${referenceString}' conjecture.`, statementNode);
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
