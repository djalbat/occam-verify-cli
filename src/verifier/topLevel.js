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
    let verifiesAtTopLevel;

    const nonTerminalNode = node, ///
          nonTerminalNodeVerifies = this.verifyNonTerminalNode(nonTerminalNode, fileContext);

    verifiesAtTopLevel = nonTerminalNodeVerifies;  ///

    return verifiesAtTopLevel;
  }

  static maps = [
    {
      nodeQuery: errorNodeQuery,
      verify: (errorNode, fileContext) => {
        const { Error } = dom,
              error = Error.fromErrorNode(errorNode, fileContext),
              errorVerifies = error.verify();

        return errorVerifies;
      }
    },
    {
      nodeQuery: ruleNodeQuery,
      verify: (ruleNode, fileContext) => {
        const { Rule } = dom,
              rule = Rule.fromRuleNode(ruleNode, fileContext),
              ruleVerifies = rule.verify();

        return ruleVerifies;
      }
    },
    {
      nodeQuery: axiomNodeQuery,
      verify: (axiomNode, fileContext) => {
        const { Axiom } = dom,
              axiom = Axiom.fromAxiomNode(axiomNode, fileContext),
              axiomVerifies = axiom.verify();

        return axiomVerifies;
      }
    },
    {
      nodeQuery: lemmaNodeQuery,
      verify: (lemmaNode, fileContext) => {
        const { Lemma } = dom,
              lemma = Lemma.fromLemmaNode(lemmaNode, fileContext),
              lemmaVerifies = lemma.verify();

        return lemmaVerifies;
      }
    },
    {
      nodeQuery: theoremNodeQuery,
      verify: (theoremNode, fileContext) => {
        const { Theorem } = dom,
              theorem = Theorem.fromTheoremNode(theoremNode, fileContext),
              theoremVerifies = theorem.verify();

        return theoremVerifies;
      }
    },
    {
      nodeQuery: metaLemmaNodeQuery,
      verify: (metaLemmaNode, fileContext) => {
        const { MetaLemma } = dom,
              metaLemma = MetaLemma.fromMetaLemmaNode(metaLemmaNode, fileContext),
              metaLemmaVerifies = metaLemma.verify();

        return metaLemmaVerifies;
      }
    },
    {
      nodeQuery: conjectureNodeQuery,
      verify: (conjectureNode, fileContext) => {
        const { Conjecture } = dom,
              conjecture = Conjecture.fromConjectureNode(conjectureNode, fileContext),
              conjectureVerifies = conjecture.verify();

        return conjectureVerifies;
      }
    },
    {
      nodeQuery: metatheoremNodeQuery,
      verify: (metatheoremNode, fileContext) => {
        const { Metatheorem } = dom,
              metatheorem = Metatheorem.fromMetatheoremNode(metatheoremNode, fileContext),
              metatheoremVerifies = metatheorem.verify();

        return metatheoremVerifies;
      }
    },
    {
      nodeQuery: typeDeclarationNodeQuery,
      verify: (typeDeclarationNode, fileContext) => {
        const { TypeDeclaration } = dom,
              typeDeclaration = TypeDeclaration.fromTypeDeclarationNode(typeDeclarationNode, fileContext),
              typeDeclarationVerifies = typeDeclaration.verify();

        return typeDeclarationVerifies;
      }
    },
    {
      nodeQuery: variableDeclarationNodeQuery,
      verify: (variableDeclarationNode, fileContext) => {
        const { VariableDeclaration } = dom,
              variableDeclaration = VariableDeclaration.fromVariableDeclarationNode(variableDeclarationNode, fileContext),
              variableDeclarationVerifies = variableDeclaration.verify();

        return variableDeclarationVerifies;
      }
    },
    {
      nodeQuery: combinatorDeclarationNodeQuery,
      verify: (combinatorDeclarationNode, fileContext) => {
        const { CombinatorDeclaration } = dom,
              combinatorDeclaration = CombinatorDeclaration.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext),
              combinatorDeclarationVerifies = combinatorDeclaration.verify();

        return combinatorDeclarationVerifies;
      }
    },
    {
      nodeQuery: constructorDeclarationNodeQuery,
      verify: (constructorDeclarationNode, fileContext) => {
        const { ConstructorDeclaration } = dom,
              constructorDeclaration = ConstructorDeclaration.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext),
              constructorDeclarationVerifies = constructorDeclaration.verify();

        return constructorDeclarationVerifies;
      }
    },
    {
      nodeQuery: complexTypeDeclarationNodeQuery,
      verify: (complexTypeDeclarationNode, fileContext) => {
        const { ComplexTypeDeclaration } = dom,
              complexTypeDeclaration = ComplexTypeDeclaration.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
              complexTypeDeclarationVerifies = complexTypeDeclaration.verify();

        return complexTypeDeclarationVerifies;
      }
    },
    {
      nodeQuery: metavariableDeclarationNodeQuery,
      verify: (metavariableDeclarationNode, fileContext) => {
        const { MetavariableDeclaration } = dom,
              metavariableDeclaration = MetavariableDeclaration.fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext),
              metavariableDeclarationVerifies = metavariableDeclaration.verify();

        return metavariableDeclarationVerifies;
      }
    }
  ];
}

const topLevelVerifier = new TopLevelVerifier();

export default topLevelVerifier;
