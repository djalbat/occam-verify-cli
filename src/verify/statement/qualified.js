"use strict";

import verifyEquality from "../equality";
import verifyTypeAssertion from "../typeAssertion";

import { nodeQuery } from "../../utilities/query";

const labelNodeQuery = nodeQuery("/qualifiedStatement/qualification!/label!"),
      equalityNodeQuery = nodeQuery("/qualifiedStatement/statement/equality!"),
      statementNodeQuery = nodeQuery("/qualifiedStatement/statement!"),
      typeAssertionNodeQuery = nodeQuery("/qualifiedStatement/statement/typeAssertion!");

export default function verifyQualifiedStatement(qualifiedStatementNode, assignments, derived, localContext) {
  let qualifiedStatementVerified = false;

  const statementNode = statementNodeQuery(qualifiedStatementNode);

  if (statementNode !== null) {
    const qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement...`, qualifiedStatementNode);

    const labelNode = labelNodeQuery(qualifiedStatementNode),
          verifyQualifiedStatementFunctions = [
            verifyQualifiedStatementAAgainstRule,
            verifyQualifiedStatementAAgainstAxiom,
            verifyQualifiedStatementAAgainstLemma,
            verifyQualifiedStatementAAgainstTheorem,
            verifyQualifiedStatementAAgainstConjecture
          ];

    qualifiedStatementVerified = verifyQualifiedStatementFunctions.some((verifyQualifiedStatementFunction) => {  ///
      const qualifiedStatementVerified = verifyQualifiedStatementFunction(qualifiedStatementNode, labelNode, localContext);

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

function verifyQualifiedStatementAAgainstRule(qualifiedStatementNode, labelNode, localContext) {
  let qualifiedStatementVerifiedAgainstRule = false;

  const rule = localContext.findRuleByLabelNode(labelNode);

  if (rule !== null) {
    const labelString = localContext.nodeAsString(labelNode),
          statementNode = statementNodeQuery(qualifiedStatementNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${labelString}' rule...`, statementNode);

    const ruleMatchesStatement = rule.matchStatement(statementNode, statementLocalContext);

    qualifiedStatementVerifiedAgainstRule = ruleMatchesStatement;  ///

    if (qualifiedStatementVerifiedAgainstRule) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${labelString}' rule.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstRule;
}

function verifyQualifiedStatementAAgainstAxiom(qualifiedStatementNode, labelNode, localContext) {
  let qualifiedStatementVerifiedAgainstAxiom = false;

  const axiom = localContext.findAxiomByLabelNode(labelNode);

  if (axiom !== null) {
    const labelString = localContext.nodeAsString(labelNode),
          statementNode = statementNodeQuery(qualifiedStatementNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${labelString}' axiom...`, statementNode);

    const axiomMatchesStatement = axiom.matchStatement(statementNode, statementLocalContext);

    qualifiedStatementVerifiedAgainstAxiom = axiomMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstAxiom) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${labelString}' axiom.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstAxiom;
}

function verifyQualifiedStatementAAgainstLemma(qualifiedStatementNode, labelNode, localContext) {
  let qualifiedStatementVerifiedAgainstLemma = false;

  const lemma = localContext.findLemmaByLabelNode(labelNode);

  if (lemma !== null) {
    const labelString = localContext.nodeAsString(labelNode),
          statementNode = statementNodeQuery(qualifiedStatementNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${labelString}' lemma...`, statementNode);

    const lemmaMatchesStatement = lemma.matchStatement(statementNode, statementLocalContext);

    qualifiedStatementVerifiedAgainstLemma = lemmaMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstLemma) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${labelString}' lemma.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstLemma;
}

function verifyQualifiedStatementAAgainstTheorem(qualifiedStatementNode, labelNode, localContext) {
  let qualifiedStatementVerifiedAgainstTheorem = false;

  const theorem = localContext.findTheoremByLabelNode(labelNode);

  if (theorem !== null) {
    const labelString = localContext.nodeAsString(labelNode),
          statementNode = statementNodeQuery(qualifiedStatementNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${labelString}' theorem...`, statementNode);

    const theoremMatchesStatement = theorem.matchStatement(statementNode, statementLocalContext);

    qualifiedStatementVerifiedAgainstTheorem = theoremMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstTheorem) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${labelString}' theorem.`, statementNode);
    }
  }

  return qualifiedStatementVerifiedAgainstTheorem;
}

function verifyQualifiedStatementAAgainstConjecture(qualifiedStatementNode, labelNode, localContext) {
  let qualifiedStatementVerifiedAgainstConjecture = false;

  const conjecture = localContext.findConjectureByLabelNode(labelNode);

  if (conjecture !== null) {
    const labelString = localContext.nodeAsString(labelNode),
          statementNode = statementNodeQuery(qualifiedStatementNode),
          statementLocalContext = localContext, ///
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement against the '${labelString}' conjecture...`, statementNode);

    const conjectureMatchesStatement = conjecture.matchStatement(statementNode, statementLocalContext);

    qualifiedStatementVerifiedAgainstConjecture = conjectureMatchesStatement; ///

    if (qualifiedStatementVerifiedAgainstConjecture) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement against the '${labelString}' conjecture.`, statementNode);
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
