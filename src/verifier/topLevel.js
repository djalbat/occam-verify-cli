"use strict";

import ontology from "../ontology";
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
        const { Error } = ontology,
              error = Error.fromErrorNode(errorNode, context),
              errorVerifies = error.verify();

        return errorVerifies;
      }
    },
    {
      nodeQuery: ruleNodeQuery,
      verify: (ruleNode, context) => {
        const { Rule } = ontology,
              rule = Rule.fromRuleNode(ruleNode, context),
              ruleVerifies = rule.verify();

        return ruleVerifies;
      }
    },
    {
      nodeQuery: axiomNodeQuery,
      verify: (axiomNode, context) => {
        const { Axiom } = ontology,
              axiom = Axiom.fromAxiomNode(axiomNode, context),
              axiomVerifies = axiom.verify();

        return axiomVerifies;
      }
    },
    {
      nodeQuery: lemmaNodeQuery,
      verify: (lemmaNode, context) => {
        const { Lemma } = ontology,
              lemma = Lemma.fromLemmaNode(lemmaNode, context),
              lemmaVerifies = lemma.verify();

        return lemmaVerifies;
      }
    },
    {
      nodeQuery: sectionNodeQuery,
      verify: (sectionNode, context) => {
        const { Section } = ontology,
              section = Section.fromSectionNode(sectionNode, context),
              sectionVerifies = section.verify();

        return sectionVerifies;
      }
    },
    {
      nodeQuery: theoremNodeQuery,
      verify: (theoremNode, context) => {
        const { Theorem } = ontology,
              theorem = Theorem.fromTheoremNode(theoremNode, context),
              theoremVerifies = theorem.verify();

        return theoremVerifies;
      }
    },
    {
      nodeQuery: metaLemmaNodeQuery,
      verify: (metaLemmaNode, context) => {
        const { MetaLemma } = ontology,
              metaLemma = MetaLemma.fromMetaLemmaNode(metaLemmaNode, context),
              metaLemmaVerifies = metaLemma.verify();

        return metaLemmaVerifies;
      }
    },
    {
      nodeQuery: conjectureNodeQuery,
      verify: (conjectureNode, context) => {
        const { Conjecture } = ontology,
              conjecture = Conjecture.fromConjectureNode(conjectureNode, context),
              conjectureVerifies = conjecture.verify();

        return conjectureVerifies;
      }
    },
    {
      nodeQuery: metatheoremNodeQuery,
      verify: (metatheoremNode, context) => {
        const { Metatheorem } = ontology,
              metatheorem = Metatheorem.fromMetatheoremNode(metatheoremNode, context),
              metatheoremVerifies = metatheorem.verify();

        return metatheoremVerifies;
      }
    },
    {
      nodeQuery: variableDeclarationNodeQuery,
      verify: (variableDeclarationNode, context) => {
        const { VariableDeclaration } = ontology,
              variableDeclaration = VariableDeclaration.fromVariableDeclarationNode(variableDeclarationNode, context),
              variableDeclarationVerifies = variableDeclaration.verify();

        return variableDeclarationVerifies;
      }
    },
    {
      nodeQuery: simpleTypeDeclarationNodeQuery,
      verify: (simpleTypeDeclarationNode, context) => {
        const { SimpleTypeDeclaration } = ontology,
              simpleTypeDeclaration = SimpleTypeDeclaration.fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context),
              simpleTypeDeclarationVerifies = simpleTypeDeclaration.verify();

        return simpleTypeDeclarationVerifies;
      }
    },
    {
      nodeQuery: typePrefixDeclarationNodeQuery,
      verify: (typePrefixDeclarationNode, context) => {
        const { TypePrefixDeclaration } = ontology,
              typePrefixDeclaration = TypePrefixDeclaration.fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context),
              typePrefixDeclarationVerifies = typePrefixDeclaration.verify();

        return typePrefixDeclarationVerifies;
      }
    },
    {
      nodeQuery: combinatorDeclarationNodeQuery,
      verify: (combinatorDeclarationNode, context) => {
        const { CombinatorDeclaration } = ontology,
              combinatorDeclaration = CombinatorDeclaration.fromCombinatorDeclarationNode(combinatorDeclarationNode, context),
              combinatorDeclarationVerifies = combinatorDeclaration.verify();

        return combinatorDeclarationVerifies;
      }
    },
    {
      nodeQuery: constructorDeclarationNodeQuery,
      verify: (constructorDeclarationNode, context) => {
        const { ConstructorDeclaration } = ontology,
              constructorDeclaration = ConstructorDeclaration.fromConstructorDeclarationNode(constructorDeclarationNode, context),
              constructorDeclarationVerifies = constructorDeclaration.verify();

        return constructorDeclarationVerifies;
      }
    },
    {
      nodeQuery: complexTypeDeclarationNodeQuery,
      verify: (complexTypeDeclarationNode, context) => {
        const { ComplexTypeDeclaration } = ontology,
              complexTypeDeclaration = ComplexTypeDeclaration.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context),
              complexTypeDeclarationVerifies = complexTypeDeclaration.verify();

        return complexTypeDeclarationVerifies;
      }
    },
    {
      nodeQuery: metavariableDeclarationNodeQuery,
      verify: (metavariableDeclarationNode, context) => {
        const { MetavariableDeclaration } = ontology,
              metavariableDeclaration = MetavariableDeclaration.fromMetavariableDeclarationNode(metavariableDeclarationNode, context),
              metavariableDeclarationVerifies = metavariableDeclaration.verify();

        return metavariableDeclarationVerifies;
      }
    }
  ];
}

const topLevelVerifier = new TopLevelVerifier();

export default topLevelVerifier;
