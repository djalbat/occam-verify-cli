"use strict";

import Rule from "../rule";
import Error from "../error";
import Axiom from "../axiom";
import Lemma from "../lemma";
import Theorem from "../theorem";
import MetaLemma from "../metaLemma";
import Conjecture from "../conjecture";
import Metatheorem from "../metatheorem";
import TypeDeclaration from "../declaration/type";
import VariableDeclaration from "../declaration/variable";
import CombinatorDeclaration from "../declaration/combinator";
import ConstructorDeclaration from "../declaration/constructor";
import MetavariableDeclaration from "../declaration/metavariable";

import Verifier from "../verifier";

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
    let verifiedAtTopLevel;

    const nonTerminalNode = node, ///
          nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, fileContext);

    verifiedAtTopLevel = nonTerminalNodeVerified;  ///

    return verifiedAtTopLevel;
  }

  static maps = [
    {
      nodeQuery: errorNodeQuery,
      verify: (errorNode, fileContext) => {
        const error = Error.fromErrorNode(errorNode, fileContext),
              errorVerified = error.verify();

        return errorVerified;
      }
    },
    {
      nodeQuery: ruleNodeQuery,
      verify: (ruleNode, fileContext) => {
        const rule = Rule.fromRuleNode(ruleNode, fileContext),
              ruleVerified = rule.verify();

        return ruleVerified;
      }
    },
    {
      nodeQuery: axiomNodeQuery,
      verify: (axiomNode, fileContext) => {
        const axiom = Axiom.fromAxiomNode(axiomNode, fileContext),
              axiomVerified = axiom.verify();

        return axiomVerified;
      }
    },
    {
      nodeQuery: lemmaNodeQuery,
      verify: (lemmaNode, fileContext) => {
        const lemma = Lemma.fromLemmaNode(lemmaNode, fileContext),
              lemmaVerified = lemma.verify();

        return lemmaVerified;
      }
    },
    {
      nodeQuery: theoremNodeQuery,
      verify: (theoremNode, fileContext) => {
        const theorem = Theorem.fromTheoremNode(theoremNode, fileContext),
              theoremVerified = theorem.verify();

        return theoremVerified;
      }
    },
    {
      nodeQuery: metaLemmaNodeQuery,
      verify: (metaLemmaNode, fileContext) => {
        const metaLemma = MetaLemma.fromMetaLemmaNode(metaLemmaNode, fileContext),
              metaLemmaVerified = metaLemma.verify();

        return metaLemmaVerified;
      }
    },
    {
      nodeQuery: conjectureNodeQuery,
      verify: (conjectureNode, fileContext) => {
        const conjecture = Conjecture.fromConjectureNode(conjectureNode, fileContext),
              conjectureVerified = conjecture.verify();

        return conjectureVerified;
      }
    },
    {
      nodeQuery: metatheoremNodeQuery,
      verify: (metatheoremNode, fileContext) => {
        const metatheorem = Metatheorem.fromMetatheoremNode(metatheoremNode, fileContext),
              metatheoremVerified = metatheorem.verify();

        return metatheoremVerified;
      }
    },
    {
      nodeQuery: typeDeclarationNodeQuery,
      verify: (typeDeclarationNode, fileContext) => {
        const typeDeclaration = TypeDeclaration.fromTypeDeclarationNode(typeDeclarationNode, fileContext),
              typeDeclarationVerified = typeDeclaration.verify();

        return typeDeclarationVerified;
      }
    },
    {
      nodeQuery: variableDeclarationNodeQuery,
      verify: (variableDeclarationNode, fileContext) => {
        const variableDeclaration = VariableDeclaration.fromVariableDeclarationNode(variableDeclarationNode, fileContext),
              variableDeclarationVerified = variableDeclaration.verify();

        return variableDeclarationVerified;
      }
    },
    {
      nodeQuery: combinatorDeclarationNodeQuery,
      verify: (combinatorDeclarationNode, fileContext) => {
        const combinatorDeclaration = CombinatorDeclaration.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext),
              combinatorDeclarationVerified = combinatorDeclaration.verify();

        return combinatorDeclarationVerified;
      }
    },
    {
      nodeQuery: constructorDeclarationNodeQuery,
      verify: (constructorDeclarationNode, fileContext) => {
        const constructorDeclaration = ConstructorDeclaration.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext),
              constructorDeclarationVerified = constructorDeclaration.verify();

        return constructorDeclarationVerified;
      }
    },
    {
      nodeQuery: metavariableDeclarationNodeQuery,
      verify: (metavariableDeclarationNode, fileContext) => {
        const metavariableDeclaration = MetavariableDeclaration.fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext),
              metavariableDeclarationVerified = metavariableDeclaration.verify();

        return metavariableDeclarationVerified;
      }
    }
  ];
}

const topLevelVerifier = new TopLevelVerifier();

export default topLevelVerifier;
