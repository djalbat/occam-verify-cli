"use strict";

import Rule from "../rule";
import CombinatorDeclaration from "../declaration/combinator";
import MetavariableDeclaration from "../declaration/metavariable";

import Verifier from "../verifier";
import verifyError from "../verify/error";
import verifyAxiom from "../verify/axiom";
import verifyLemma from "../verify/lemma";
import verifyTheorem from "../verify/theorem";
import verifyMetaLemma from "../verify/metaLemma";
import verifyConjecture from "../verify/conjecture";
import verifyMetatheorem from "../verify/metatheorem";
import verifyTypeDeclaration from "../verify/declaration/type";
import verifyVariableDeclaration from "../verify/declaration/variable";
import verifyConstructorDeclaration from "../verify/declaration/constructor";

import { nodeQuery } from "../utilities/query";

const errorNodeQuery = nodeQuery("/error"),
      ruleNodeQuery = nodeQuery("/rule"),
      axiomNodeQuery = nodeQuery("/axiom"),
      lemmaNodeQuery = nodeQuery("/lemma"),
      theoremNodeQuery = nodeQuery("/theorem"),
      metaLemmaNodeQuery = nodeQuery("/metaLemma"),
      conjectureNodeQuery = nodeQuery("/conjecture"),
      metatheoremNodeQuery = nodeQuery("/metatheorem"),
      typeDeclarationNodeQuery = nodeQuery("/typeDeclaration"),
      variableDeclarationNodeQuery = nodeQuery("/variableDeclaration"),
      combinatorDeclarationNodeQuery = nodeQuery("/combinatorDeclaration"),
      constructorDeclarationNodeQuery = nodeQuery("/constructorDeclaration"),
      metavariableDeclarationNodeQuery = nodeQuery("/metavariableDeclaration");

class TopLevelVerifier extends Verifier {
  verify(node, fileContext) {
    let verified;

    const nonTerminalNode = node, ///
          nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, fileContext);

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
        const rule = Rule.fromRuleNode(ruleNode, fileContext),
              ruleVerified = rule.verify(fileContext);

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
        const combinatorDeclaration = CombinatorDeclaration.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext),
              combinatorDeclarationVerified = combinatorDeclaration.verify(fileContext);

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
        const metavariableDeclaration = MetavariableDeclaration.fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext),
              metavariableDeclarationVerified = metavariableDeclaration.verify(fileContext);

        return metavariableDeclarationVerified;
      }
    }
  ];
}

const topLevelVerifier = new TopLevelVerifier();

export default topLevelVerifier;
