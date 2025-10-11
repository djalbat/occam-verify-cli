"use strict";

import dom from "../dom";
import Verifier from "../verifier";

import { nodeQuery } from "../utilities/query";

const errorNodeQuery = nodeQuery("/error"),
      ruleNodeQuery = nodeQuery("/rule"),
      axiomNodeQuery = nodeQuery("/axiom"),
      lemmaNodeQuery = nodeQuery("/lemma"),
      sectionNodeQuery = nodeQuery("/section"),
      theoremNodeQuery = nodeQuery("/theorem"),
      metaLemmaNodeQuery = nodeQuery("/metaLemma"),
      conjectureNodeQuery = nodeQuery("/conjecture"),
      metatheoremNodeQuery = nodeQuery("/metatheorem"),
      variableDeclarationNodeQuery = nodeQuery("/variableDeclaration"),
      combinatorDeclarationNodeQuery = nodeQuery("/combinatorDeclaration"),
      simpleTypeDeclarationNodeQuery = nodeQuery("/simpleTypeDeclaration"),
      typePrefixDeclarationNodeQuery = nodeQuery("/typePrefixDeclaration"),
      constructorDeclarationNodeQuery = nodeQuery("/constructorDeclaration"),
      complexTypeDeclarationNodeQuery = nodeQuery("/complexTypeDeclaration"),
      metavariableDeclarationNodeQuery = nodeQuery("/metavariableDeclaration");

class TopLevelVerifier extends Verifier {
  verify(node, fileContext) {
    let verifiesAtTopLevel;

    const context = fileContext,  ///
          nonTerminalNode = node, ///
          nonTerminalNodeVerifies = this.verifyNonTerminalNode(nonTerminalNode, context);

    verifiesAtTopLevel = nonTerminalNodeVerifies;  ///

    return verifiesAtTopLevel;
  }

  static maps = [
    {
      nodeQuery: errorNodeQuery,
      verify: (errorNode, context) => {
        const { Error } = dom,
              error = Error.fromErrorNode(errorNode, context),
              errorVerifies = error.verify();

        return errorVerifies;
      }
    },
    {
      nodeQuery: ruleNodeQuery,
      verify: (ruleNode, context) => {
        const { Rule } = dom,
              rule = Rule.fromRuleNode(ruleNode, context),
              ruleVerifies = rule.verify();

        return ruleVerifies;
      }
    },
    {
      nodeQuery: axiomNodeQuery,
      verify: (axiomNode, context) => {
        const { Axiom } = dom,
              axiom = Axiom.fromAxiomNode(axiomNode, context),
              axiomVerifies = axiom.verify();

        return axiomVerifies;
      }
    },
    {
      nodeQuery: lemmaNodeQuery,
      verify: (lemmaNode, context) => {
        const { Lemma } = dom,
              lemma = Lemma.fromLemmaNode(lemmaNode, context),
              lemmaVerifies = lemma.verify();

        return lemmaVerifies;
      }
    },
    {
      nodeQuery: sectionNodeQuery,
      verify: (sectionNode, context) => {
        const { Section } = dom,
              section = Section.fromSectionNode(sectionNode, context),
              sectionVerifies = section.verify();

        return sectionVerifies;
      }
    },
    {
      nodeQuery: theoremNodeQuery,
      verify: (theoremNode, context) => {
        const { Theorem } = dom,
              theorem = Theorem.fromTheoremNode(theoremNode, context),
              theoremVerifies = theorem.verify();

        return theoremVerifies;
      }
    },
    {
      nodeQuery: metaLemmaNodeQuery,
      verify: (metaLemmaNode, context) => {
        const { MetaLemma } = dom,
              metaLemma = MetaLemma.fromMetaLemmaNode(metaLemmaNode, context),
              metaLemmaVerifies = metaLemma.verify();

        return metaLemmaVerifies;
      }
    },
    {
      nodeQuery: conjectureNodeQuery,
      verify: (conjectureNode, context) => {
        const { Conjecture } = dom,
              conjecture = Conjecture.fromConjectureNode(conjectureNode, context),
              conjectureVerifies = conjecture.verify();

        return conjectureVerifies;
      }
    },
    {
      nodeQuery: metatheoremNodeQuery,
      verify: (metatheoremNode, context) => {
        const { Metatheorem } = dom,
              metatheorem = Metatheorem.fromMetatheoremNode(metatheoremNode, context),
              metatheoremVerifies = metatheorem.verify();

        return metatheoremVerifies;
      }
    },
    {
      nodeQuery: variableDeclarationNodeQuery,
      verify: (variableDeclarationNode, context) => {
        const { VariableDeclaration } = dom,
              variableDeclaration = VariableDeclaration.fromVariableDeclarationNode(variableDeclarationNode, context),
              variableDeclarationVerifies = variableDeclaration.verify();

        return variableDeclarationVerifies;
      }
    },
    {
      nodeQuery: simpleTypeDeclarationNodeQuery,
      verify: (simpleTypeDeclarationNode, context) => {
        const { SimpleTypeDeclaration } = dom,
              simpleTypeDeclaration = SimpleTypeDeclaration.fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context),
              simpleTypeDeclarationVerifies = simpleTypeDeclaration.verify();

        return simpleTypeDeclarationVerifies;
      }
    },
    {
      nodeQuery: typePrefixDeclarationNodeQuery,
      verify: (typePrefixDeclarationNode, context) => {
        const { TypePrefixDeclaration } = dom,
              typePrefixDeclaration = TypePrefixDeclaration.fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context),
              typePrefixDeclarationVerifies = typePrefixDeclaration.verify();

        return typePrefixDeclarationVerifies;
      }
    },
    {
      nodeQuery: combinatorDeclarationNodeQuery,
      verify: (combinatorDeclarationNode, context) => {
        const { CombinatorDeclaration } = dom,
              combinatorDeclaration = CombinatorDeclaration.fromCombinatorDeclarationNode(combinatorDeclarationNode, context),
              combinatorDeclarationVerifies = combinatorDeclaration.verify();

        return combinatorDeclarationVerifies;
      }
    },
    {
      nodeQuery: constructorDeclarationNodeQuery,
      verify: (constructorDeclarationNode, context) => {
        const { ConstructorDeclaration } = dom,
              constructorDeclaration = ConstructorDeclaration.fromConstructorDeclarationNode(constructorDeclarationNode, context),
              constructorDeclarationVerifies = constructorDeclaration.verify();

        return constructorDeclarationVerifies;
      }
    },
    {
      nodeQuery: complexTypeDeclarationNodeQuery,
      verify: (complexTypeDeclarationNode, context) => {
        const { ComplexTypeDeclaration } = dom,
              complexTypeDeclaration = ComplexTypeDeclaration.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context),
              complexTypeDeclarationVerifies = complexTypeDeclaration.verify();

        return complexTypeDeclarationVerifies;
      }
    },
    {
      nodeQuery: metavariableDeclarationNodeQuery,
      verify: (metavariableDeclarationNode, context) => {
        const { MetavariableDeclaration } = dom,
              metavariableDeclaration = MetavariableDeclaration.fromMetavariableDeclarationNode(metavariableDeclarationNode, context),
              metavariableDeclarationVerifies = metavariableDeclaration.verify();

        return metavariableDeclarationVerifies;
      }
    }
  ];
}

const topLevelVerifier = new TopLevelVerifier();

export default topLevelVerifier;
