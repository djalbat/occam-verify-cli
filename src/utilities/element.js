"use strict";

import elements from "../elements";

import { baseType } from "../element/type";
import { subproofStringFromSubproofNode, stringFromLabelsSuppositionsAndDeduction } from "../utilities/string";
import node from "occam-parsers/lib/mixins/node";

export function typeFromTypeNode(typeNode, context) {
  let type;

  if (typeNode === null) {
    type = baseType;
  } else {
    const { Type } = elements,
          typeName = typeNode.getTypeName(),
          typePrefixName = typeNode.getTypePrefixName(),
          nominalTypeName = typeNode.getNominalTypeName(),
          string = nominalTypeName,  ///
          node = typeNode,  ///
          name = typeName,  ///
          prefixName = typePrefixName,  ///
          superTypes = null,
          properties = null,
          provisional = null;

    type = new Type(string, node, name, prefixName, superTypes, properties, provisional);
  }

  return type;
}

export function termFromTermNode(termNode, context) {
  const { Term } = elements,
        node = termNode,  ///
        string = context.nodeAsString(node),
        type = null,
        term = new Term(string, node, type);

  return term;
}

export function stepFromStepNode(stepNode, context) {
  const { Step } = elements,
        node = stepNode, ///
        string = context.nodeAsString(node),
        statement = statementFromStepNode(stepNode, context),
        reference = referenceFromStepNode(stepNode, context),
        satisfiesAssertion = satisfiesAssertionFromStepNode(stepNode, context),
        step = new Step(context, string, node, statement, reference, satisfiesAssertion);

  return step;
}

export function lemmaromAxiomNode(lemmaNode, context) {
  const { Lemma } = elements,
        axiomLemmaTheoremConjectureNode = lemmaNode,  ///
        proof = proofFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        labels = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        hypotheses = [],
        node = lemmaNode, ///
        string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction),
        lemma = new Lemma(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);

  return lemma;
}

export function frameFromFrameNode(frameNode, context) {
  const { Frame } = elements,
    node = frameNode, ///
    string = context.nodeAsString(node),
    assumptions = assumptionsFromFrameNode(frameNode, context),
    frame = new Frame(string, node, assumptions);

  return frame;
}

export function proofFromProofNode(proofNode, context) {
  const { Proof } = elements,
        node = proofNode, ///
        string = null,
        derivation = derivationFromProofNode(proofNode, context),
        proof = new Proof(string, node, derivation);

  return proof;
}

export function axiomFromAxiomNode(axiomNode, context) {
  const { Axiom } = elements,
        axiomLemmaTheoremConjectureNode = axiomNode,  ///
        proof = null,
        labels = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        hypotheses = [],
        node = axiomNode, ///
        string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction),
        axiom = new Axiom(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);

  return axiom;
}

export function theoremromAxiomNode(theoremNode, context) {
  const { Theorem } = elements,
        axiomLemmaTheoremConjectureNode = theoremNode,  ///
        proof = proofFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        labels = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        hypotheses = [],
        node = theoremNode, ///
        string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction),
        theorem = new Theorem(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);

  return theorem;
}

export function conjectureromAxiomNode(conjectureNode, context) {
  const { Conjecture } = elements,
        axiomLemmaTheoremConjectureNode = conjectureNode,  ///
        proof = proofFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        labels = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context),
        hypotheses = [],
        node = conjectureNode, ///
        string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction),
        conjecture = new Conjecture(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);

  return conjecture;
}

export function equalityFromEqualityNode(equalityNode, context) {
  const { Equality } = elements,
        node = equalityNode,  ///
        string = context.nodeAsString(node),
        leftTermNode = equalityNode.getLeftTermNode(),
        rightTermNode = equalityNode.getRightTermNode(),
        leftTerm = termFromTermNode(leftTermNode, context),
        rightTerm = termFromTermNode(rightTermNode, context),
        equality = new Equality(string, leftTerm, rightTerm);

  return equality;
}

export function metaTypeFromMetaTypeNode(metaTypeNode, context) {
  const { MetaType } = elements,
        node = metaTypeNode,  ///
        string = context.nodeAsString(node),
        metaTypeName = metaTypeNode.getMetaTypeName(),
        name = metaTypeName,  ///
        metaType = new MetaType(string, node, name);

  return metaType;
}

export function propertyFromPropertyNode(propertyNode, context) {
  const { Property } = elements,
        node = propertyNode, ///
        string = context.nodeAsString(node),
        propertyName = propertyNode.getPropertyName(),
        nominalTypeName = null,
        name = propertyName,  ///
        property = new Property(string, node, name, nominalTypeName);

  return property;
}

export function variableFromVariableNode(variableNode, context) {
  const { Variable } = elements,
        node = variableNode,  ///
        string = context.nodeAsString(node),
        type = null,
        identifier = identifierFromVarialbeNode(variableNode, context),
        propertyRelations = [],
        variable = new Variable(string, node, type, identifier, propertyRelations);

  return variable;
}

export function subproofFromSubproofNode(subproofNode, context) {
  const { SubProof } = elements,
        node = subproofNode, ///
        suppositions = suppositionsFromSubproofNode(subproofNode, context),
        subDerivation = subDerivationFromSubproofNode(subproofNode, context),
        subproofString = subproofStringFromSubproofNode(subproofNode, context),
        string = subproofString,  ///
        subproof = new SubProof(string, node, suppositions, subDerivation);

  return subproof;
}

export function equalityFromStatementNode(statementNode, context) {
  let equality = null;

  const equalityNode = statementNode.getEqualityNode();

  if (equalityNode !== null) {
    const node = equalityNode,  ///
          string = context.nodeAsString(node),
          leftTerm = leftTermFromEqualityNode(equalityNode, context),
          rightTerm = rightTermFromEqualityNode(equalityNode, context);

    equality = new Equality(context, string, node, leftTerm, rightTerm);
  }

  return equality;
}

export function deductionFromDeductionNode(deductionNode, context) {
  const { Deduction } = elements,
        node = deductionNode, ///
        string = context.nodeAsString(node),
        statement = statementFromDeductionNode(deductionNode, context),
        deduction = new Deduction(context, string, node, statement);

  return deduction;
}

export function statementFromStatementNode(statementNode, context) {
  const { Statement } = elements,
        node = statementNode, ///
        string = context.nodeAsString(node),
        statement = new Statement(string, node);

  return statement;
}

export function signatureFromSignatureNode(signatureNode, context) {
  const { Signature } = elements,
        node = signatureNode, ///
        string = context.nodeAsString(node),
        terms = termsFromSignatureNode(signatureNode, context),
        signature = new Signature(string, node, terms);

  return signature;
}

export function referenceFromReferenceNode(referenceNode, context) {
  const { Reference } = elements,
        node = referenceNode, ///
        string = context.nodeAsString(node),
        metavariable = metavariableFromReferenceNode(referenceNode, context),
        reference = new Reference(string, node, metavariable);

  return reference;
}

export function conclusinoFromConclusionNode(conclusinoNode, context) {
  const { Conclusion } = elements,
    node = conclusinoNode, ///
    string = context.nodeAsString(node),
    statement = statementFromConclusionNode(conclusinoNode, context),
    conclusino = new Conclusion(context, string, node, statement);

  return conclusino;
}

export function assumptionFromAssumptionNode(assumptionNode, context) {
  const { Assumption } = elements,
        node = assumptionNode, ///
        string = context.nodeAsString(node),
        statement = statementFromAssumptionNode(assumptionNode, context),
        reference = referenceFromAssumptionNode(assumptionNode, context),
        assumption = new Assumption(string, node, statement, reference);

  return assumption;
}

export function derivationFromDerivationNode(derivationNode, context) {
  const { Derivation } = elements,
        node = derivationNode,  ///
        string = null,
        stepsOrSubproofs = stepsOrSubproofsFromDerivationNode(derivationNode, context),
        derivation = new Derivation(string, node, stepsOrSubproofs);

  return derivation;
}

export function typePrefixFromTypePrefixNode(typePrefixNode, context) {
  const { TypePrefix } = elements,
        node = typePrefixNode, ///
        string = context.nodeAsString(node),
        term = termFromTypePrefixNode(typePrefixNode, context),
        type = typeFromTypePrefixNode(typePrefixNode, context),
        typePrefix = new TypePrefix(string, node, term, type);

  return typePrefix;
}

export function metavariableFromMetavariableNode(metavariableNode, context) {
  const { Metavariable } = elements,
        node = metavariableNode,  ///
        string = context.nodeAsString(node),
        metavariableName = metavariableNode.getMetavariableName(),
        name = metavariableName,  ///
        type = null,
        metaType = null,
        metavariable = new Metavariable(string, node, name, type, metaType);

  return metavariable;
}

export function subDerivationFromSubDerivationNode(subDerivationNode, context) {
  const { SubDerivation } = elements,
        node = subDerivationNode, ///
        string = null,
        stepsOrSubproofs = stepsOrSubproofsFromSubDerivationNode(subDerivationNode, context),
        subDerivation = new SubDerivation(string, node, stepsOrSubproofs);

  return subDerivation;

}

export function typeAssertionFromTypeAssertionNode(typeAssertionNode, context) {
  const { TypeAssertion } = elements,
        node = typeAssertionNode, ///
        string = context.nodeAsString(node),
        term = termFromTypeAssertionNode(typeAssertionNode, context),
        type = typeFromTypeAssertionNode(typeAssertionNode, context),
        typeAssertion = new TypeAssertion(string, node, term, type);

  return typeAssertion;
}

export function stepsOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context) {
  const step = stepFromStepOrSubproofNode(stepOrSubproofNode, context),
        subproof = subproofFromStepOrSubproofNode(stepOrSubproofNode, context),
        stepOrSubproof = (step || subproof);

  return stepOrSubproof;
}

export function prefixedFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
  const prefixed = simpleTypeDeclarationNode.isPrefixed();

  return prefixed;
}

export function prefixedFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
  const prefixed = complexTypeDeclarationNode.isPrefixed();

  return prefixed;
}

export function definedAssertionFromDefinedAssertionNode(definedAssertionNode, context) {
  const { DefinedAssertion } = elements,
        node = definedAssertionNode,  ///
        string = context.nodeAsString(node),
        negated = definedAssertionNode.isNegated(),
        term = termFromDefinedAssertionNode(definedAssertionNode, context),
        frame = frameFromDefinedAssertionNode(definedAssertionNode, context),
        definedAssertion = new DefinedAssertion(string, node, term, frame, negated);

  return definedAssertion;
}

export function propertyRelationFromPropertyRelationNode(propertyRelationNode, context) {
  const { PropertyRelation } = elements,
        node = propertyRelationNode,  ///
        string = context.nodeAsString(node),
        property = propertyFromPropertyRelationNode(propertyRelationNode, context),
        term = termFromPropertyRelationNode(propertyRelationNode, context),
        propertyRelation = new PropertyRelation(string, node, property, term);

  return propertyRelation;
}

export function termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context) {
  const { TermSubstitution } = elements,
        node = termSubstitutionNode,  ///
        string = context.nodeAsString(node),
        term = termFromTermSubstitutionNode(termSubstitutionNode, context),
        variable = variableFromTermSubstitutionNode(termSubstitutionNode, context),
        termSubstitution = new TermSubstitution(context, string, node, term, variable);

  return termSubstitution;
}

export function frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context) {
  const { FrameSubstitution } = elements,
        node = frameSubstitutionNode,  ///
        string = context.nodeAsString(node),
        frame = frameFromFrameSubstitutionNode(frameSubstitutionNode, context),
        metavariable = metavariableFromFrameSubstitutionNode(frameSubstitutionNode, context),
        frameSubstitution = new FrameSubstitution(context, string, node, frame, metavariable);

  return frameSubstitution;
}

export function propertyAssertionFromPropertyAssertionNode(propertyAssertionNode, context) {
  const { PropertyAssertion } = elements,
        node = propertyAssertionNode,  ///
        string = context.nodeAsString(node),
        term = termFromPropertyAssertionNode(propertyAssertionNode, context),
        propertyRelation = propertyRelationFromPropertyAssertionNode(propertyAssertionNode, context),
        propertyAssertion = new PropertyAssertion(string, node, term, propertyRelation);

  return propertyAssertion;
}

export function subproofAssertionFromSubproofAssertionNode(subproofAssertionNode, context) {
  const { SubproofAssertion } = elements,
        node = subproofAssertionNode, ///
        string = context.nodeAsString(node),
        statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context),
        subproofAssertion = new SubproofAssertion(string, node, statements);

  return subproofAssertion;
}

export function containedAssertionFromContainedAssertionNode(containedAssertionNode, context) {
  const { ContainedAssertion } = elements,
        node = containedAssertionNode,  ///
        string = context.nodeAsString(node),
        negated = containedAssertionNode.isNegated(),
        term = termFromContainedAssertionNode(containedAssertionNode, context),
        frame = frameFromContainedAssertionNode(containedAssertionNode, context),
        statement = statementFromContainedAssertionNode(containedAssertionNode, context),
        containedAssertion = new ContainedAssertion(string, node, term, frame, negated, statement);

  return containedAssertion;
}

export function satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
  const { SatisfiesAssertion } = elements,
        node = satisfiesAssertionNode,  ///
        string = context.nodeAsString(node),
        signature = signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context),
        reference = referenceFromSatisfiesAssertionNode(satisfiesAssertionNode, context),
        satisfiesAssertion = new SatisfiesAssertion(string, node, signature, reference);

  return satisfiesAssertion;
}

export function variableDeclarationFromVariableDeclarationNode(variableDeclarationNode, context) {
  const { VariableDeclaration } = elements,
        node = variableDeclarationNode,  ///
        string = context.nodeAsString(node),
        varialbe = variableFromVariableNode(variableDeclarationNode, context),
        variableDeclaration = new VariableDeclaration(context, string, node, varialbe);

  return variableDeclaration;
}

export function typePrefixDeclarationFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
  const { TypePrefixDeclaration } = elements,
        node = typePrefixDeclarationNode, ///
        string = context.nodeAsString(node),  ///
        typePrefix = typePrefixFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context),
        typePrefixDeclaration = new TypePrefixDeclaration(context, string, node, typePrefix);

  return typePrefixDeclaration;
}

export function combinatorDeclarationFromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
  const { CombinatorDeclaration } = elements,
        node = combinatorDeclarationNode, ///
        string = context.nodeAsString(node),
        combinator = combinatorFromCombinatorDeclarationNode(combinatorDeclarationNode, context),
        combinatorDeclaration = new CombinatorDeclaration(context, string, node, combinator);

  return combinatorDeclaration;
}

export function simpleTypeDeclarationFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
  const { SimpleTypeDeclaration } = elements,
        node = simpleTypeDeclarationNode, ///
        string = context.nodeAsString(node),
        type = typeFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context),
        prefixed = prefixedFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context),
        simpleTypeDeclaration = new SimpleTypeDeclaration(context, string, node, type, prefixed);

  return simpleTypeDeclaration;
}

export function statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, substitution, context) {
  if (context === undefined) {
    context = substitution; ///

    substitution = null;
  }

  const { StatementSubstitution } = elements,
        node = statementSubstitutionNode,  ///
        string = context.nodeAsString(node),
        resolved = true,
        statement = statementFromStatementSubstitutionNode(statementSubstitutionNode, context),
        metavariable = metavariableFromStatementSubstitutionNode(statementSubstitutionNode, context),
        statementSubstitution = new StatementSubstitution(context, string, node, resolved, statement, metavariable, substitution);

  return statementSubstitution;
}

export function referenceSubstitutionFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
  const { ReferenceSubstitution } = elements,
        node = referenceSubstitutionNode,  ///
        string = context.nodeAsString(node),
        reference = referenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context),
        metavariable = metavariableFromReferenceSubstitutionNode(referenceSubstitutionNode, context),
        referenceSubstitution = new ReferenceSubstitution(context, string, node, reference, metavariable);

  return referenceSubstitution;
}

export function constructorDeclarationFromConstructorDeclarationNode(constructorDeclarationNode, context) {
  const { ConstructorDeclaration } = elements,
        node = constructorDeclarationNode, ///
        string = context.nodeAsString(node),
        constructor = constructorFromConstructorDeclarationNode(constructorDeclarationNode, context),
        constructorDeclaration = new ConstructorDeclaration(context, string, node, constructor);

  return constructorDeclaration;
}

export function complexTypeDeclarationFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
  const { ComplexTypeDeclaration } = elements,
        node = complexTypeDeclarationNode,  ///
        string = context.nodeAsString(node),
        type = typeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context),
        prefixed = prefixedFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context),
        complexTypeDeclaration = new ComplexTypeDeclaration(context, string, node, type, prefixed);

  return complexTypeDeclaration;
}

export function metavariableDeclarationFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
  const { MetavariableDeclaration } = elements,
        node = metavariableDeclarationNode,  ///
        string = context.nodeAsString(node),
        metavarialbe = metavariableFromMetavariableNode(metavariableDeclarationNode, context),
        metavariableDeclaration = new MetavariableDeclaration(context, string, node, metavarialbe);

  return metavariableDeclaration;
}

export function statementFromStepNode(stepNode, context) {
  let statement = null;

  const statementNode = stepNode.getStatementNode();

  if (statementNode !== null) {
    statement = statementFromStatementNode(statementNode, context);
  }

  return statement;
}

export function referenceFromStepNode(stepNode, context) {
  let reference = null;

  const referenceNode = stepNode.getReferenceNode();

  if (referenceNode !== null) {
    reference = referenceFromReferenceNode(referenceNode, context);
  }

  return reference;
}

export function derivationFromProofNode(proofNode, context) {
  let derivation = null;

  const derivationNode = proofNode.getDerivationNode();

  if (derivationNode !== null) {
    derivation = derivationFromDerivationNode(derivationNode, context);
  }

  return derivation;
}

export function termFromTypeAssertionNode(typeAssertionNode, context) {
  let term = null;

  const termNode = typeAssertionNode.getTermNode();

  if (termNode !== null) {
    term = termFromTermNode(termNode, context);
  }

  return term;
}

export function typeFromTypeAssertionNode(typeAssertionNode, context) {
  let type = null;

  const typeNode = typeAssertionNode.getTypeNode();

  if (typeNode !== null) {
    type = typeFromTypeNode(typeNode, context);
  }

  return type;
}

export function stepFromStepOrSubproofNode(stepOrSubproofNode, context) {
  let step = null;

  const stepOrSubproofNodeStepNode = stepOrSubproofNode.isStepNode();

  if (stepOrSubproofNodeStepNode) {
    const stepNode = stepOrSubproofNode;  ///

    step = stepFromStepNode(stepNode, context);
  }

  return step;
}

export function identifierFromVarialbeNode(variableNode, context) {
  const variableIdentifier = variableNode.getVariableIdentifier(),
        identifier = variableIdentifier;  ///

  return identifier;
}

export function statementFromDeductionNode(deductionNode, context) {
  let statement = null;

  const statementNode = deductionNode.getStatementNode();

  if (statementNode !== null) {
    statement = statementFromStatementNode(statementNode, context);
  }

  return statement;
}

export function statementFromConclusionNode(conclusinoNode, context) {
  let statement = null;

  const statementNode = conclusinoNode.getStatementNode();

  if (statementNode !== null) {
    statement = statementFromStatementNode(statementNode, context);
  }

  return statement;
}

export function statementFromAssumptionNode(assumptionNode, context) {
  let statement = null;

  const statementNode = assumptionNode.getStatementNode();

  if (statementNode !== null) {
    statement = statementFromStatementNode(statementNode, context);
  }

  return statement;
}

export function referenceFromAssumptionNode(assumptionNode, context) {
  let reference = null;

  const referenceNode = assumptionNode.getReferenceNode();

  if (referenceNode !== null) {
    reference = referenceFromReferenceNode(referenceNode, context);
  }

  return reference;
}

export function assumptionFromJudgementNode(judgementNode, context) {
  let assumption = null;

  const assumptionNode = judgementNode.getAssumptionNode();

  if (assumptionNode !== null) {
    assumption = assumptionFromAssumptionNode(assumptionNode, context);
  }

  return assumption;
}

export function termFromDefinedAssertionNode(definedAssertionNode, context) {
  let term = null;

  const termNode = definedAssertionNode.getTermNode();

  if (termNode !== null) {
    term = termFromTermNode(termNode, context);
  }

  return term;
}

export function termFromPropertyRelationNode(propertyRelationNode, context) {
  let term = null;

  const termNode = propertyRelationNode.getTermNode();

  if (termNode !== null) {
    term = termFromTermNode(termNode, context);
  }

  return term;
}

export function termFromTermSubstitutionNode(termSubstitutionNode, context) {
  let term = null;

  const termNode = termSubstitutionNode.getTermNode();

  if (termNode !== null) {
    term = termFromTermNode(termNode, context);
  }

  return term;
}

export function subDerivationFromSubproofNode(subproofNode, context) {
  let subDerviation = null;

  const subDerivationNode = subproofNode.getSubDerivationNode();

  if (subDerivationNode !== null) {
    subDerviation = subDerivationFromSubDerivationNode(subDerivationNode, context);
  }

  return subDerviation;
}

export function typeAssertinFromStatementNode(statementNode, context) {
  let typeAssertion = null;

  const typeAssertionNode = statementNode.getTypeAssertionNode();

  if (typeAssertionNode !== null) {
    typeAssertion = typeAssertionFromTypeAssertionNode(typeAssertionNode, context);
  }

  return typeAssertion;
}

export function metavariableFromReferenceNode(referenceNode, context) {
  let metavariable = null;

  const metavariableNode = referenceNode.getTermNode();

  if (metavariableNode !== null) {
    metavariable = metavariableFromMetavaraibleNode(metavariableNode, context);
  }

  return metavariable;
}

export function frameFromDefinedAssertionNode(definedAssertionNode, context) {
  let frame = null;

  const frameNode = definedAssertionNode.getTermNode();

  if (frameNode !== null) {
    frame = frameFromFrameNode(frameNode, context);
  }

  return frame;
}

export function termFromPropertyAssertionNode(propertyAssertionNode, context) {
  let term = null;

  const termNode = propertyAssertionNode.getTermNode();

  if (termNode !== null) {
    term = termFromTermNode(termNode, context);
  }

  return term;
}

export function frameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
  let frame = null;

  const frameNode = frameSubstitutionNode.getFrameNode();

  if (frameNode !== null) {
    frame = frameFromFrameNode(frameNode, context);
  }

  return frame;
}

export function satisfiesAssertionFromStepNode(stepNode, context) {
  let satisfiesAssertion = null;

  const satisfiesAssertionNode = stepNode.getSatisfiedAssertionNode();

  if (satisfiesAssertionNode !== null) {
    satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
  }

  return satisfiesAssertion;
}

export function subproofFromStepOrSubproofNode(subproofOrSubproofNode, context) {
  let subproof = null;

  const subproofOrSubproofNodeSubproofNode = subproofOrSubproofNode.isSubproofNode();

  if (subproofOrSubproofNodeSubproofNode) {
    const subproofNode = subproofOrSubproofNode;  ///

    subproof = subproofFromSubproofNode(subproofNode, context);
  }

  return subproof;
}

export function termFromContainedAssertionNode(containedAssertionNode, context) {
  let term = null;

  const termNode = containedAssertionNode.getTermNode();

  if (termNode !== null) {
    term = termFromTermNode(termNode, context);
  }

  return term;
}

export function frameFromContainedAssertionNode(containedAssertionNode, context) {
  let frame = null;

  const frameNode = containedAssertionNode.getFrameNode();

  if (frameNode !== null) {
    frame = frameFromFrameNode(frameNode, context)
  }

  return frame;
}

export function propertyFromPropertyRelationNode(propertyRelationNode, context) {
  let property = null;

  const propertyNode = propertyRelationNode.getTermNode();

  if (propertyNode !== null) {
    property = propertyFromPropertyNode(propertyNode, context);
  }

  return property;
}

export function variableFromTermSubstitutionNode(termSubstitutionNode, context) {
  let variable = null;

  const variableNode = termSubstitutionNode.getMetavariableNode();

  if (variableNode !== null) {
    variable = variableFromVariableNode(variableNode, context);
  }

  return variable;
}

export function definedAssertionFromStatementNode(statementNode, context) {
  let definedAssertion = null;

  const definedAssertionNode = statementNode.getDefinedAssertionNode();

  if (definedAssertionNode !== null) {
    definedAssertion = definedAssertionFromDefinedAssertionNode(definedAssertionNode, context);
  }

  return definedAssertion;
}

export function typeFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
  let type = null;

  const typeNode = simpleTypeDeclarationNode.getTypeNode();

  if (typeNode !== null) {
    type = typeFromTypeNode(typeNode, context);
  }

  return type;
}

export function termSubstitutionFromStatementNode(statementNode, context) {
  let termSubstitution = null;

  const termSubstitutionNode = statementNode.getTermSubstitutionNode();

  if (termSubstitutionNode !== null) {
    termSubstitution = termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context);
  }

  return termSubstitution;
}

export function frameSubstitutionFromStatementNode(statementNode, context) {
  let frameSubstitution = null;

  const frameSubstitutionNode = statementNode.getFrameSubstitutionNode();

  if (frameSubstitutionNode !== null) {
    frameSubstitution = frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context);
  }

  return frameSubstitution;
}

export function stepsOrSubproofsFromDerivationNode(derivationNode, context) {
  const stepOrSubproofNodes = derivationNode.getStepOrSubproofNodes(),
        stepsOrSubproofs = stepOrSubproofNodes.map((stepOrSubproofNode) => {
          const stepOrSubproof = stepsOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context);

          return stepOrSubproof;
        });

  return stepsOrSubproofs;
}

export function propertyAssertionFromStatementNode(statementNode, context) {
  let propertyAssertion = null;

  const propertyAssertionNode = statementNode.getPropertyAssertionNode();

  if (propertyAssertionNode !== null) {
    propertyAssertion = propertyAssertionFromPropertyAssertionNode(propertyAssertionNode, context);
  }

  return propertyAssertion;
}

export function subproofAssertionFromStatementNode(statementNode, context) {
  let subproofAssertion = null;

  const subproofAssertionNode = statementNode.getSubproofAssertionNode();

  if (subproofAssertionNode !== null) {
    subproofAssertion = subproofAssertionFromSubproofAssertionNode(subproofAssertionNode, context);
  }

  return subproofAssertion;
}

export function typeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
  let type = null;

  const typeNode = complexTypeDeclarationNode.getTypeNode();

  if (typeNode !== null) {
    type = typeFromTypeNode(typeNode, context);
  }

  return type;
}

export function containedAssertionFromStatementNode(statementNode, context) {0
  let containedAssertion = null;

  const containedAssertionNode = statementNode.getContainedAssertionNode();

  if (containedAssertionNode !== null) {
    containedAssertion = containedAssertionFromContainedAssertionNode(containedAssertionNode, context);
  }

  return containedAssertion;
}

export function statementFromContainedAssertionNode(containedAssertionNode, context) {
  let statement = null;

  const statementNode = containedAssertionNode.getStatementNode();

  if (statementNode !== null) {
    statement = statementFromStatementNode(statementNode, context);
  }

  return statement;
}

export function satisfiesAssertionFromStatementNode(statementNode, context) {
  let satisfiesAssertion = null;

  const satisfiesAssertionNode = statementNode.getSatisfiedAssertionNode();

  if (satisfiesAssertionNode !== null) {
    satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
  }

  return satisfiesAssertion;
}

export function propertyFromPropertyDeclarationNode(propertyDeclarationNode, context) {
  let property = null;

  const propertyNode = propertyDeclarationNode.getPropertyNode();

  if (propertyNode !== null) {
    property = propertyFromPropertyNode(propertyNode, context);
  }

  return property;
}

export function signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
  let signature = null;

  const signatureNode = satisfiesAssertionNode.getSignatureNode();

  if (signatureNode !== null) {
    signature = signatureFromSignatureNode(signatureNode, context);
  }

  return signature;
}

export function referenceFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
  let reference = null;

  const referenceNode = satisfiesAssertionNode.getReferenceNode();

  if (referenceNode !== null) {
    reference = referenceFromReferenceNode(referenceNode, context);
  }

  return reference;
}

export function variableFromVariableDeclarationNode(variableDeclarationNode, context) {
  let variable = null;

  const variableNode = variableDeclarationNode.getVariableNode();

  if (variableNode !== null) {
    variable = variableFromVariableNode(variableNode, context);
  }

  return variable;
}

export function stepsOrSubproofsFromSubDerivationNode(subDerivationNode, context) {
  const stepOrSubproofNodes = subDerivationNode.getStepOrSubproofNodes(),
        stepsOrSubproofs = stepOrSubproofNodes.map((stepOrSubproofNode) => {
          const stepOrSubproof = stepsOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context);

          return stepOrSubproof;
        });

  return stepsOrSubproofs;
}

export function metavariableFromFrameSubstitutionNode(frameSubstitutionNode, context) {
  let metavariable = null;

  const metavariableNode = frameSubstitutionNode.getMetavariableNode();

  if (metavariableNode !== null) {
    metavariable = metavariableFromMetavariableNode(metavariableNode, context);
  }

  return metavariable;
}

export function statementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
  let statement = null;

  const statementNode = statementSubstitutionNode.getStatementNode();

  if (statementNode !== null) {
    statement = statementFromStatementNode(statementNode, context);
  }

  return statement;
}

export function referenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
  let reference = null;

  const referenceNode = referenceSubstitutionNode.getReferenceNode();

  if (referenceNode !== null) {
    reference = referenceFromReferenceNode(referenceNode, context);
  }

  return reference;
}

export function typePrefixFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
  let typePrefix = null;

  const typePrefixNode = typePrefixDeclarationNode.getTypePrefixNode();

  if (typePrefixNode !== null) {
    typePrefix = typePrefixFromTypePrefixNode(typePrefixNode, context);
  }

  return typePrefix;
}

export function combinatorFromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
  let combinator = null;

  const statementNode = combinatorDeclarationNode.getStatementNode();

  if (statementNode !== null) {
    const { Combinator } = elements,
      statement = statementFromStatementNode(statementNode, context);

    combinator = new Combinator(statement);
  }

  return combinator;
}

export function metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
  let metaType = null;

  const metaTypeNode = metavariableDeclarationNode.getMetaTypeNode();

  if (metaTypeNode !== null) {
    metaType = metaTypeFromMetaTypeNode(metaTypeNode, context);
  }

  return metaType;
}

export function propertyRelationFromPropertyAssertionNode(propertyAssertionNode, context) {
  let propertyRelation = null;

  const propertyRelationNode = propertyAssertionNode.getPropertyRelationNode();

  if (propertyRelationNode !== null) {
    propertyRelation = propertyRelationFromPropertyRelationNode(propertyRelationNode, context);
  }

  return propertyRelation;
}

export function constructorFromConstructorDeclarationNode(constructorDeclarationNode, context) {
  let constructor = null;

  const termNode = constructorDeclarationNode.getStatementNode();

  if (termNode !== null) {
    const { Constructor } = elements,
          term = termFromTermNode(termNode, context);

    constructor = new Constructor(term);
  }

  return constructor;
}

export function metavariableFromStatementSubstitutionNode(statementSubstitutionNode, context) {
  let metavariable = null;

  const metavariableNode = statementSubstitutionNode.getMetavariableNode();

  if (metavariableNode !== null) {
    metavariable = metavariableFromMetavariableNode(metavariableNode, context);
  }

  return metavariable;
}

export function metavariableFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
  let metavariable = null;

  const metavariableNode = referenceSubstitutionNode.getMetavariableNode();

  if (metavariableNode !== null) {
    metavariable = metavariableFromMetavariableNode(metavariableNode, context);
  }

  return metavariable;
}

export function proofFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context) {
  let proof = null;

  const proofNode = axiomLemmaTheoremConjectureNode.getProofNode();

  if (proofNode !== null) {
    proof = proofFromProofNode(proofNode, context);
  }

  return proof;
}

export function metavariableFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
  let metavariable = null;

  const metavariableNode = metavariableDeclarationNode.getMetavariableNode();

  if (metavariableNode !== null) {
    metavariable = metavariableFromMetavariableNode(metavariableNode, context);
  }

  return metavariable;
}

export function deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context) {
  let deduction = null;

  const deductionNode = axiomLemmaTheoremConjectureNode.getDeductionNode();

  if (deductionNode !== null) {
    deduction = deductionFromDeductionNode(deductionNode, context);
  }

  return deduction;
}

export function signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context) {
  let signature = null;

  const signatureNode = axiomLemmaTheoremConjectureNode.getSignatureNode();

  if (signatureNode !== null) {
    signature = signatureFromSignatureNode(signatureNode, context);
  }

  return signature;
}

export function suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context) {
  const suppositionNodes = axiomLemmaTheoremConjectureNode.getSuppositionNodes(),
    suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);

  return suppositions;
}

export function termsFromTermNodes(termNodes, context) {
  const terms = termNodes.map((termNode) => {
    const term = termFromTermNode(termNode, context);

    return term;
  });

  return terms;
}

export function labelsFromLabelNodes(labelNodes, context) {
  const labels = labelNodes.map((labelNode) => {
    const label = labelFromLabelNode(labelNode, context);

    return label;
  });

  return labels;
}

export function statementsFromStatementNodes(statementNodes, context) {
  const statements = statementNodes.map((statementNode) => {
    const statement = statementFromStatementNode(statementNode, context);

    return statement;
  });

  return statements;
}

export function superTypesFromSuperTypeNodes(superTypeNodes, context) {
  const superTypes = superTypeNodes.map((superTypeNode) => {
          const typeNode = superTypeNode, ///
                type = typeFromTypeNode(typeNode, context),
                superType = type;  ///

          return superType;
        }),
        superTypesLength = superTypes.length;

  if (superTypesLength === 0) {
    const superType = baseType; ///

    superTypes.push(superType);
  }

  return superTypes;
}

export function assumptionsFromAssumptionNodes(assumptionNodes, context) {
  const assumptions = assumptionNodes.map((assumptionNode) => {
    const assumption = assumptionFromAssumptionNode(assumptionNode, context);

    return assumption;
  });

  return assumptions;
}

export function suppositionsFromSuppositionNodes(suppositionNodes, context) {
  const suppositions = suppositionNodes.map((suppositionNode) => {
    const supposition = suppositionFromSuppositionNode(suppositionNode, context);

    return supposition;
  });

  return suppositions;
}

export function propertiesFromPropertyDeclarationNodes(propertyDeclarationNodes, context) {
  const properties = propertyDeclarationNodes.map((propertyDeclarationNode) => {
    const property = propertyFromPropertyDeclarationNode(propertyDeclarationNode, context);

    return property;
  });

  return properties;
}

export function termsFromSignatureNode(signatureNode, context) {
  const termNodes = signatureNode.getAssumptionNodes(),
        terms = termsFromTermNodes(termNodes, context);

  return terms;
}

export function assumptionsFromFrameNode(frameNode, context) {
  const assumptionNodes = frameNode.getAssumptionNodes(),
        assumptions = assumptionsFromAssumptionNodes(assumptionNodes, context);

  return assumptions;
}

export function suppositionsFromSubproofNode(subproofNode, context) {
  const suppositionNodes = subproofNode.getSuppositionNodes(),
        suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);

  return suppositions;
}

export function statementsFromSubproofAssertionNode(subproofAssertionNode, context) {
  const statementNodes = subproofAssertionNode.getStatementNodes(),
        statements = statementsFromStatementNodes(statementNodes, context);

  return statements;
}

export function propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
  const propertyDeclarationNodes = complexTypeDeclarationNode.getPropertyDeclarationNodes(),
        properties = propertiesFromPropertyDeclarationNodes(propertyDeclarationNodes, context);

  return properties;
}

export function superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
  const superTypeNodes = complexTypeDeclarationNode.getSuperTypeNodes(),
        superTypes = superTypesFromSuperTypeNodes(superTypeNodes, context);

  return superTypes;
}

export function labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context) {
  const labelNodes = axiomLemmaTheoremConjectureNode.getLabelNodes(),
        labels = labelsFromLabelNodes(labelNodes, context);

  return labels;
}




export function _typeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
  let type = null;

  const typeNode = metavariableDeclarationNode.getTypeNode();

  if (typeNode !== null) {
    const nominalTypeName = typeNode.getNominalTypeName();

    type = context.findTypeByNominalTypeName(nominalTypeName);
  }

  return type;
}
