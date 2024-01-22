"use strict";

import { nodeQuery, referenceNameFromReferenceNode } from "../../utilities/query";
import { verifyStatementAsEquality, verifyStatementAsTypeAssertion } from "../../verify/statement";

const referenceNodeQuery = nodeQuery("/qualifiedStatement/qualification!/reference!"),
      statementNodeQuery = nodeQuery("/qualifiedStatement/statement!");

export default function verifyQualifiedStatement(qualifiedStatementNode, assignments, derived, localContext) {
  let qualifiedStatementVerified = false;

  const statementNode = statementNodeQuery(qualifiedStatementNode);

  if (statementNode !== null) {
    const qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement...`, qualifiedStatementNode);

    const referenceNode = referenceNodeQuery(qualifiedStatementNode),
          referenceName = referenceNameFromReferenceNode(referenceNode),
          verifyQualifiedStatementFunctions = [
            verifyUnqualifiedStatementAAgainstRule,
            verifyUnqualifiedStatementAAgainstAxiom,
            verifyUnqualifiedStatementAAgainstLemma,
            verifyUnqualifiedStatementAAgainstTheorem,
            verifyUnqualifiedStatementAAgainstConjecture
          ];

    qualifiedStatementVerified = verifyQualifiedStatementFunctions.some((verifyQualifiedStatementFunction) => {  ///
      const unqualifiedStatementVerified = verifyQualifiedStatementFunction(qualifiedStatementNode, referenceName, localContext);

      if (unqualifiedStatementVerified) {
        return true;
      }
    });

    if (qualifiedStatementVerified) {
      derived = false;  ///

      const context = localContext, ///
            verifyStatementFunctions = [
              verifyStatementAsEquality,
              verifyStatementAsTypeAssertion
            ];

      qualifiedStatementVerified = verifyStatementFunctions.some((verifyStatementFunction) => { ///
        const statementVerified = verifyStatementFunction(statementNode, assignments, derived, context, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

        if (statementVerified) {
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

function verifyUnqualifiedStatementAAgainstRule(qualifiedStatementNode, referenceName, localContext) {
  let unqualifiedStatementVerifiedAgainstRule = false;

  const rule = localContext.findRuleByReferenceName(referenceName);

  if (rule !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the ${referenceName} rule...`, statementNode);

    const ruleMatchesStatement = rule.matchStatement(statementNode, statementLocalContext);

    unqualifiedStatementVerifiedAgainstRule = ruleMatchesStatement;  ///

    if (unqualifiedStatementVerifiedAgainstRule) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the ${referenceName} rule.`, statementNode);
    }
  }

  return unqualifiedStatementVerifiedAgainstRule;
}

function verifyUnqualifiedStatementAAgainstAxiom(qualifiedStatementNode, referenceName, localContext) {
  let unqualifiedStatementVerifiedAgainstAxiom = false;

  const axiom = localContext.findAxiomByReferenceName(referenceName);

  if (axiom !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the ${referenceName} axiom...`, statementNode);

    const axiomMatchesStatement = axiom.matchStatement(statementNode, statementLocalContext);

    unqualifiedStatementVerifiedAgainstAxiom = axiomMatchesStatement; ///

    if (unqualifiedStatementVerifiedAgainstAxiom) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the ${referenceName} axiom.`, statementNode);
    }
  }

  return unqualifiedStatementVerifiedAgainstAxiom;
}

function verifyUnqualifiedStatementAAgainstLemma(qualifiedStatementNode, referenceName, localContext) {
  let unqualifiedStatementVerifiedAgainstLemma = false;

  const lemma = localContext.findLemmaByReferenceName(referenceName);

  if (lemma !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the ${referenceName} lemma...`, statementNode);

    const lemmaMatchesStatement = lemma.matchStatement(statementNode, statementLocalContext);

    unqualifiedStatementVerifiedAgainstLemma = lemmaMatchesStatement; ///

    if (unqualifiedStatementVerifiedAgainstLemma) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the ${referenceName} lemma.`, statementNode);
    }
  }

  return unqualifiedStatementVerifiedAgainstLemma;
}

function verifyUnqualifiedStatementAAgainstTheorem(qualifiedStatementNode, referenceName, localContext) {
  let unqualifiedStatementVerifiedAgainstTheorem = false;

  const theorem = localContext.findTheoremByReferenceName(referenceName);

  if (theorem !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the ${referenceName} theorem...`, statementNode);

    const theoremMatchesStatement = theorem.matchStatement(statementNode, statementLocalContext);

    unqualifiedStatementVerifiedAgainstTheorem = theoremMatchesStatement; ///

    if (unqualifiedStatementVerifiedAgainstTheorem) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the ${referenceName} theorem.`, statementNode);
    }
  }

  return unqualifiedStatementVerifiedAgainstTheorem;
}

function verifyUnqualifiedStatementAAgainstConjecture(qualifiedStatementNode, referenceName, localContext) {
  let unqualifiedStatementVerifiedAgainstConjecture = false;

  const conjecture = localContext.findConjectureByReferenceName(referenceName);

  if (conjecture !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the ${referenceName} conjecture...`, statementNode);

    const conjectureMatchesStatement = conjecture.matchStatement(statementNode, statementLocalContext);

    unqualifiedStatementVerifiedAgainstConjecture = conjectureMatchesStatement; ///

    if (unqualifiedStatementVerifiedAgainstConjecture) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the ${referenceName} conjecture.`, statementNode);
    }
  }

  return unqualifiedStatementVerifiedAgainstConjecture;
}
