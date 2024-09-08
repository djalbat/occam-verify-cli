"use strict";

import Verifier from "../verifier";
import verifyError from "../verify/error";
import verifyRule from "../verify/rule";
import verifyAxiom from "../verify/axiom";
import verifyLemma from "../verify/lemma";
import verifyTheorem from "../verify/theorem";
import verifyMetaLemma from "../verify/metaLemma";
import verifyConjecture from "../verify/conjecture";
import verifyMetatheorem from "../verify/metatheorem";
import verifyTypeDeclaration from "../verify/declaration/type";
import verifyVariableDeclaration from "../verify/declaration/variable";
import verifyCombinatorDeclaration from "../verify/declaration/combinator";
import verifyConstructorDeclaration from "../verify/declaration/constructor";
import verifyMetavariableDeclaration from "../verify/declaration/metavariable";

import { nodeQuery } from "../utilities/query";

const errorNodeQuery = nodeQuery("/error"),
      ruleNodeQuery = nodeQuery("/topLevelAssertion/rule!"),
      axiomNodeQuery = nodeQuery("/topLevelAssertion/axiom!"),
      lemmaNodeQuery = nodeQuery("/topLevelAssertion/lemma!"),
      theoremNodeQuery = nodeQuery("/topLevelAssertion/theorem!"),
      metaLemmaNodeQuery = nodeQuery("/topLevelAssertion/metaLemma!"),
      conjectureNodeQuery = nodeQuery("/topLevelAssertion/conjecture!"),
      metatheoremNodeQuery = nodeQuery("/topLevelAssertion/metatheorem!"),
      typeDeclarationNodeQuery = nodeQuery("/topLevelAssertion/typeDeclaration!"),
      variableDeclarationNodeQuery = nodeQuery("/topLevelAssertion/variableDeclaration!"),
      combinatorDeclarationNodeQuery = nodeQuery("/topLevelAssertion/combinatorDeclaration!"),
      constructorDeclarationNodeQuery = nodeQuery("/topLevelAssertion/constructorDeclaration!"),
      metavariableDeclarationNodeQuery = nodeQuery("/topLevelAssertion/metavariableDeclaration!");

class TopLevelVerifier extends Verifier {
  verify(node, fileContext) {
    let verified;

    const nonTerminalNode = node, ///
          nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, fileContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    verified = nonTerminalNodeVerified;  ///

    return verified;
  }

  static maps = [
    {
      nodeQuery: errorNodeQuery,
      verify: (errorNode, fileContext) => {
        const errorVerified = verifyError(errorNode, fileContext);

        return errorVerified;
      }
    },
    {
      nodeQuery: ruleNodeQuery,
      verify: (ruleNode, fileContext) => {
        const ruleVerified = verifyRule(ruleNode, fileContext);

        return ruleVerified;
      }
    },
    {
      nodeQuery: axiomNodeQuery,
      verify: (axiomNode, fileContext) => {
        const axiomVerified = verifyAxiom(axiomNode, fileContext);

        return axiomVerified;
      }
    },
    {
      nodeQuery: lemmaNodeQuery,
      verify: (lemmaNode, fileContext) => {
        const lemmaVerified = verifyLemma(lemmaNode, fileContext);

        return lemmaVerified;
      }
    },
    {
      nodeQuery: theoremNodeQuery,
      verify: (theoremNode, fileContext) => {
        const theoremVerified = verifyTheorem(theoremNode, fileContext);

        return theoremVerified;
      }
    },
    {
      nodeQuery: metaLemmaNodeQuery,
      verify: (metaLemmaNode, fileContext) => {
        const metaLemmaVerified = verifyMetaLemma(metaLemmaNode, fileContext);

        return metaLemmaVerified;
      }
    },
    {
      nodeQuery: conjectureNodeQuery,
      verify: (conjectureNode, fileContext) => {
        const conjectureVerified = verifyConjecture(conjectureNode, fileContext);

        return conjectureVerified;
      }
    },
    {
      nodeQuery: metatheoremNodeQuery,
      verify: (metatheoremNode, fileContext) => {
        const metatheoremVerified = verifyMetatheorem(metatheoremNode, fileContext);

        return metatheoremVerified;
      }
    },
    {
      nodeQuery: typeDeclarationNodeQuery,
      verify: (typeDeclarationNode, fileContext) => {
        const typeDeclarationVerified = verifyTypeDeclaration(typeDeclarationNode, fileContext);

        return typeDeclarationVerified;
      }
    },
    {
      nodeQuery: variableDeclarationNodeQuery,
      verify: (variableDeclarationNode, fileContext) => {
        const variableDeclarationVerified = verifyVariableDeclaration(variableDeclarationNode, fileContext);

        return variableDeclarationVerified;
      }
    },
    {
      nodeQuery: combinatorDeclarationNodeQuery,
      verify: (combinatorDeclarationNode, fileContext) => {
        const combinatorDeclarationVerified = verifyCombinatorDeclaration(combinatorDeclarationNode, fileContext);

        return combinatorDeclarationVerified;
      }
    },
    {
      nodeQuery: constructorDeclarationNodeQuery,
      verify: (constructorDeclarationNode, fileContext) => {
        const constructorDeclarationVerified = verifyConstructorDeclaration(constructorDeclarationNode, fileContext);

        return constructorDeclarationVerified;
      }
    },
    {
      nodeQuery: metavariableDeclarationNodeQuery,
      verify: (metavariableDeclarationNode, fileContext) => {
        const metavariableDeclarationVerified = verifyMetavariableDeclaration(metavariableDeclarationNode, fileContext);

        return metavariableDeclarationVerified;
      }
    }
  ];
}

const topLevelVerifier = new TopLevelVerifier();

export default topLevelVerifier;
