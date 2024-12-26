"use strict";

import dom from "../dom";
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
      complexTypeDeclarationNodeQuery = nodeQuery("/complexTypeDeclaration"),
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
        const { Error } = dom,
              error = Error.fromErrorNode(errorNode, fileContext),
              errorVerified = error.verify();

        return errorVerified;
      }
    },
    {
      nodeQuery: ruleNodeQuery,
      verify: (ruleNode, fileContext) => {
        const { Rule } = dom,
              rule = Rule.fromRuleNode(ruleNode, fileContext),
              ruleVerified = rule.verify();

        return ruleVerified;
      }
    },
    {
      nodeQuery: axiomNodeQuery,
      verify: (axiomNode, fileContext) => {
        const { Axiom } = dom,
              axiom = Axiom.fromAxiomNode(axiomNode, fileContext),
              axiomVerified = axiom.verify();

        return axiomVerified;
      }
    },
    {
      nodeQuery: lemmaNodeQuery,
      verify: (lemmaNode, fileContext) => {
        const { Lemma } = dom,
              lemma = Lemma.fromLemmaNode(lemmaNode, fileContext),
              lemmaVerified = lemma.verify();

        return lemmaVerified;
      }
    },
    {
      nodeQuery: theoremNodeQuery,
      verify: (theoremNode, fileContext) => {
        const { Theorem } = dom,
              theorem = Theorem.fromTheoremNode(theoremNode, fileContext),
              theoremVerified = theorem.verify();

        return theoremVerified;
      }
    },
    {
      nodeQuery: metaLemmaNodeQuery,
      verify: (metaLemmaNode, fileContext) => {
        const { MetaLemma } = dom,
              metaLemma = MetaLemma.fromMetaLemmaNode(metaLemmaNode, fileContext),
              metaLemmaVerified = metaLemma.verify();

        return metaLemmaVerified;
      }
    },
    {
      nodeQuery: conjectureNodeQuery,
      verify: (conjectureNode, fileContext) => {
        const { Conjecture } = dom,
              conjecture = Conjecture.fromConjectureNode(conjectureNode, fileContext),
              conjectureVerified = conjecture.verify();

        return conjectureVerified;
      }
    },
    {
      nodeQuery: metatheoremNodeQuery,
      verify: (metatheoremNode, fileContext) => {
        const { Metatheorem } = dom,
              metatheorem = Metatheorem.fromMetatheoremNode(metatheoremNode, fileContext),
              metatheoremVerified = metatheorem.verify();

        return metatheoremVerified;
      }
    },
    {
      nodeQuery: typeDeclarationNodeQuery,
      verify: (typeDeclarationNode, fileContext) => {
        const { TypeDeclaration } = dom,
              typeDeclaration = TypeDeclaration.fromTypeDeclarationNode(typeDeclarationNode, fileContext),
              typeDeclarationVerified = typeDeclaration.verify();

        return typeDeclarationVerified;
      }
    },
    {
      nodeQuery: variableDeclarationNodeQuery,
      verify: (variableDeclarationNode, fileContext) => {
        const { VariableDeclaration } = dom,
              variableDeclaration = VariableDeclaration.fromVariableDeclarationNode(variableDeclarationNode, fileContext),
              variableDeclarationVerified = variableDeclaration.verify();

        return variableDeclarationVerified;
      }
    },
    {
      nodeQuery: combinatorDeclarationNodeQuery,
      verify: (combinatorDeclarationNode, fileContext) => {
        const { CombinatorDeclaration } = dom,
              combinatorDeclaration = CombinatorDeclaration.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext),
              combinatorDeclarationVerified = combinatorDeclaration.verify();

        return combinatorDeclarationVerified;
      }
    },
    {
      nodeQuery: constructorDeclarationNodeQuery,
      verify: (constructorDeclarationNode, fileContext) => {
        const { ConstructorDeclaration } = dom,
              constructorDeclaration = ConstructorDeclaration.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext),
              constructorDeclarationVerified = constructorDeclaration.verify();

        return constructorDeclarationVerified;
      }
    },
    {
      nodeQuery: complexTypeDeclarationNodeQuery,
      verify: (complexTypeDeclarationNode, fileContext) => {
        const { ComplexTypeDeclaration } = dom,
              complexTypeDeclaration = ComplexTypeDeclaration.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
              complexTypeDeclarationVerified = complexTypeDeclaration.verify();

        return complexTypeDeclarationVerified;
      }
    },
    {
      nodeQuery: metavariableDeclarationNodeQuery,
      verify: (metavariableDeclarationNode, fileContext) => {
        const { MetavariableDeclaration } = dom,
              metavariableDeclaration = MetavariableDeclaration.fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext),
              metavariableDeclarationVerified = metavariableDeclaration.verify();

        return metavariableDeclarationVerified;
      }
    }
  ];
}

const topLevelVerifier = new TopLevelVerifier();

export default topLevelVerifier;
