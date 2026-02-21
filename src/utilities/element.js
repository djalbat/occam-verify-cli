"use strict";

import elements from "../elements";

import { literally } from "../utilities/context";
import { baseTypeFromNothing } from "../utilities/type";
import { instantiateReference } from "../process/instantiate";
import { findMetaTypeByMetaTypeName } from "../metaTypes";
import { equivalenceStringFromTerms,
         typeStringFromNominalTypeName,
         rulsStringFromLabelsPremisesAndConclusion,
         sectionStringFromHypothesesTopLevelAssertion,
         subproofStringFromSuppositionsAndSubDerivation,
         procedureCallStringFromProcedureReferenceAndParameters,
         topLevelAssertionStringFromLabelsSuppositionsAndDeduction,
         topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction } from "../utilities/string";

export function typeFromTypeNode(typeNode, context) {
  let type;

  if (typeNode === null) {
    const baseType = baseTypeFromNothing();

    type = baseType;  ///
  } else {
    const { Type } = elements,
          node = typeNode,  ///
          name = nameFromTypeNode(typeNode, context),
          prefixName = prefixNameFromTypeNode(typeNode, context),
          superTypes = superTypesFromTypeNode(typeNode, context),
          properties = propertiesFromTypeNode(typeNode, context),
          provisional = provisionalFromTypeNode(typeNode, context),
          nominalTypeName = nominalTypeNameFromTypeNode(typeNode, context),
          typeString = typeStringFromNominalTypeName(nominalTypeName),
          string = typeString;  ///

    context = null;

    type = new Type(context, string, node, name, prefixName, superTypes, properties, provisional);
  }

  return type;
}

export function termFromTermNode(termNode, context) {
  const { Term } = elements,
        node = termNode,  ///
        string = context.nodeAsString(node),
        type = typeFromTermNode(termNode, context);

  context = null;

  const term = new Term(context, string, node, type);

  return term;
}

export function stepFromStepNode(stepNode, context) {
  const { Step } = elements,
        node = stepNode, ///
        string = context.nodeAsString(node),
        statement = statementFromStepNode(stepNode, context),
        reference = referenceFromStepNode(stepNode, context),
        satisfiesAssertion = satisfiesAssertionFromStepNode(stepNode, context);

  context = null;

  const step = new Step(context, string, node, statement, reference, satisfiesAssertion);

  return step;
}

export function ruleFromRuleNode(ruleNode, context) {
  const { Rule } = elements,
        proof = proofFromRuleNode(ruleNode, context),
        labels = labelsFromRuleNode(ruleNode, context),
        premises = premisesFromRuleNode(ruleNode, context),
        conclusion = conclusionFromRuleNode(ruleNode, context),
        ruleString = rulsStringFromLabelsPremisesAndConclusion(labels, premises, conclusion),
        node = ruleNode,  ///
        string = ruleString,  ///
        rule = new Rule(context, string, node, proof, labels, premises, conclusion);

  return rule;
}

export function labelFromLabelNode(labelNode, context) {
  const { Label } = elements,
        node = labelNode, ///
        string = context.nodeAsString(node),
        metavariable = metavariableFromLabelNode(labelNode, context),
        label = new Label(context, string, node, metavariable);

  return label;
}

export function errorFromErrorNode(errorNode, context) {
  const { Error } = elements,
        node = errorNode, ///
        string = context.nodeAsString(node),
        error = new Error(context, string, node);

  return error;
}

export function lemmaFromLemmaNode(lemmaNode, context) {
  const { Lemma } = elements,
        topLevelAsssertionNode = lemmaNode,  ///
        proof = proofFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        hypotheses = hypothesesFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        topLevelAsssertionString = topLevelAssertionStringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction),
        node = lemmaNode, ///
        string = topLevelAsssertionString, ///
        lemma = new Lemma(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);

  return lemma;
}

export function frameFromFrameNode(frameNode, context) {
  const { Frame } = elements,
        node = frameNode, ///
        string = context.nodeAsString(node),
        assumptions = assumptionsFromFrameNode(frameNode, context),
        metavariable = metavariableFromFrameNode(frameNode, context);

  context = null;

  const frame = new Frame(context, string, node, assumptions, metavariable);

  return frame;
}

export function proofFromProofNode(proofNode, context) {
  const { Proof } = elements,
        node = proofNode, ///
        string = null,
        derivation = derivationFromProofNode(proofNode, context);

  context = null;

  const proof = new Proof(context, string, node, derivation);

  return proof;
}

export function axiomFromAxiomNode(axiomNode, context) {
  const { Axiom } = elements,
        topLevelAsssertionNode = axiomNode,  ///
        proof = proofFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        hypotheses = [],
        topLevelAsssertionString = topLevelAssertionStringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction),
        node = axiomNode, ///
        string = topLevelAsssertionString, ///
        axiom = new Axiom(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);

  return axiom;
}

export function sectionFromSectionNode(sectionNode, context) {
  const hypothesisNodes = sectionNode.getHypothesisNodes(),
        hypotheses = hypothesesFromHypothesisNodes(hypothesisNodes, context),
        axiom = axiomFromSectionNode(sectionNode, context),
        lemma = lemmaFromSectionNode(sectionNode, context),
        theorem = theoremFromSectionNode(sectionNode, context),
        conjecture = conjectureFromSectionNode(sectionNode, context),
        sectionString = sectionStringFromHypothesesTopLevelAssertion(hypotheses, axiom, lemma, theorem, conjecture),
        node = sectionNode, ///
        string = sectionString; ///

  context = null;

  const section = new Section(context, string, node, hypotheses, axiom, lemma, theorem, conjecture);

  return section;
}

export function premiseFromPremiseNode(premiseNode, context) {
  const { Premise } = elements,
        node = premiseNode, ///
        string = context.nodeAsString(node),
        statement = statementFromPremiseNode(premiseNode, context),
        procedureCall = procedureCallFromPremiseNode(premiseNode, context);

  context = null;

  const premise = new Premise(context, string, node, statement, procedureCall);

  return premise
}

export function theoremFromTheoremNode(theoremNode, context) {
  const { Theorem } = elements,
        topLevelAsssertionNode = theoremNode,  ///
        proof = proofFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        hypotheses = [],
        topLevelAsssertionString = topLevelAssertionStringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction),
        node = theoremNode, ///
        string = topLevelAsssertionString, ///
        theorem = new Theorem(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);

  return theorem;
}

export function metaTypeFromMetaTypeNode(metaTypeNode, context) {
  const metaTypeName = metaTypeNode.getMetaTypeName(),
        metaType = context.findMetaTypeByMetaTypeName(metaTypeName);

  return metaType;
}

export function propertyFromPropertyNode(propertyNode, context) {
  const { Property } = elements,
        node = propertyNode, ///
        string = context.nodeAsString(node),
        propertyName = propertyNode.getPropertyName(),
        nominalTypeName = null,
        name = propertyName;  ///

  context = null;

  const property = new Property(context, string, node, name, nominalTypeName);

  return property;
}

export function variableFromVariableNode(variableNode, context) {
  const { Variable } = elements,
        node = variableNode,  ///
        string = context.nodeAsString(node),
        type = null,
        identifier = identifierFromVarialbeNode(variableNode, context),
        propertyRelations = [];

  context = null;

  const variable = new Variable(context, string, node, type, identifier, propertyRelations);

  return variable;
}

export function subproofFromSubproofNode(subproofNode, context) {
  const { Subproof } = elements,
        node = subproofNode, ///
        suppositions = suppositionsFromSubproofNode(subproofNode, context),
        subDerivation = subDerivationFromSubproofNode(subproofNode, context),
        subproofString = subproofStringFromSuppositionsAndSubDerivation(suppositions, subDerivation, context),
        string = subproofString;  ///

  context = null;

  const subproof = new Subproof(context, string, node, suppositions, subDerivation);

  return subproof;
}

export function equalityFromEqualityNode(equalityNode, context) {
  const { Equality } = elements,
        node = equalityNode, ///
        string = context.nodeAsString(node),
        leftTerm = leftTermFromEqualityNode(equalityNode, context),
        rightTerm = rightTermFromEqualityNode(equalityNode, context);

  context = null;

  const equality = new Equality(context, string, node, leftTerm, rightTerm);

  return equality;
}

export function deductionFromDeductionNode(deductionNode, context) {
  const { Deduction } = elements,
        node = deductionNode, ///
        string = context.nodeAsString(node),
        statement = statementFromDeductionNode(deductionNode, context);

  context = null;

  const deduction = new Deduction(context, string, node, statement);

  return deduction;
}

export function statementFromStatementNode(statementNode, context) {
  const { Statement } = elements,
        node = statementNode, ///
        string = context.nodeAsString(node);

  context = null;

  const statement = new Statement(context, string, node);

  return statement;
}

export function signatureFromSignatureNode(signatureNode, context) {
  const { Signature } = elements,
        node = signatureNode, ///
        string = context.nodeAsString(node),
        terms = termsFromSignatureNode(signatureNode, context);

  context = null;

  const signature = new Signature(context, string, node, terms);

  return signature;
}

export function referenceFromReferenceNode(referenceNode, context) {
  const { Reference } = elements,
        node = referenceNode, ///
        string = context.nodeAsString(node),
        metavariable = metavariableFromReferenceNode(referenceNode, context),
        reference = new Reference(context, string, node, metavariable);

  return reference;
}

export function judgementFromJudgementNode(judgementNode, context) {
  const { Judgement } = elements,
        node = judgementNode, ///
        string = context.nodeAsString(node),
        frame = frameFromJudgementNode(judgementNode, context),
        assumption = assumptionFromJudgementNode(judgementNode, context);

  context = null;

  const judgement = new Judgement(context, string, node, frame, assumption);

  return judgement;
}

export function metaLemmaFromMetaLemmaNode(metaLemmaNode, context) {
  const { MetaLemma } = elements,
        metaLemmaMetathoremNode = metaLemmaNode,  ///
        proof = proofFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context),
        label = labelFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context),
        deduction = deductionFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context),
        suppositions = suppositionsFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context),
        topLevelMetaAssertionString = topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction(label, suppositions, deduction),
        substitutions = null,
        node = metaLemmaNode, ///
        string = topLevelMetaAssertionString, ///
        metaLemma = new MetaLemma(context, string, node, label, suppositions, deduction, proof, substitutions);

  return metaLemma;
}

export function parameterFromParameterNode(parameterNode, context) {
  const { Parameter } = elements,
        node = parameterNode, ///
        string = context.nodeAsString(node),
        name = parameterNode.getName(),
        identifier = parameterNode.getIdentifier();

  context = null;

  const parameter = new Parameter(context, string, node, name, identifier);

  return parameter;
}

export function hypothesisFromHypothesisNode(hypotheseNode, context) {
  const { Hypothsis } = elements,
        node = hypotheseNode, ///
        string = context.nodeAsString(node),
        statement = statementFromHypothesisNode(hypotheseNode, context);

  context = null;

  const hypohtesis = new Hypothsis(context, string, node, statement);

  return hypohtesis;
}

export function conjectureFromConjectureNode(conjectureNode, context) {
  const { Conjecture } = elements,
        topLevelAsssertionNode = conjectureNode,  ///
        proof = proofFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context),
        hypotheses = [],
        topLevelAsssertionString = topLevelAssertionStringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction),
        node = conjectureNode, ///
        string = topLevelAsssertionString, ///
        conjecture = new Conjecture(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);

  return conjecture;
}

export function combinatorFromCombinatorNode(combinatorNode, context) {
  const { Combinator } = elements,
        node = combinatorNode, ///
        string = context.nodeAsString(node),
        statement = statementFromCombinatorNode(combinatorNode, context),
        combinator = new Combinator(context, string, node, statement);

  return combinator;
}

export function conclusionFromConclusionNode(conclusionNode, context) {
  const { Conclusion } = elements,
        node = conclusionNode, ///
        string = context.nodeAsString(node),
        statement = statementFromConclusionNode(conclusionNode, context);

  context = null;

  const conclusion = new Conclusion(context, string, node, statement);

  return conclusion;
}

export function assumptionFromAssumptionNode(assumptionNode, context) {
  const { Assumption } = elements,
        node = assumptionNode, ///
        string = context.nodeAsString(node),
        reference = referenceFromAssumptionNode(assumptionNode, context),
        statement = statementFromAssumptionNode(assumptionNode, context);

  context = null;

  const assumption = new Assumption(context, string, node, reference, statement);

  return assumption;
}

export function derivationFromDerivationNode(derivationNode, context) {
  const { Derivation } = elements,
        node = derivationNode,  ///
        string = null,
        stepsOrSubproofs = stepsOrSubproofsFromDerivationNode(derivationNode, context);

  context = null;

  const derivation = new Derivation(context, string, node, stepsOrSubproofs);

  return derivation;
}

export function typePrefixFromTypePrefixNode(typePrefixNode, context) {
  const { TypePrefix } = elements,
        node = typePrefixNode, ///
        string = context.nodeAsString(node),
        term = termFromTypePrefixNode(typePrefixNode, context),
        type = typeFromTypePrefixNode(typePrefixNode, context);

  context = null;

  const typePrefix = new TypePrefix(context, string, node, term, type);

  return typePrefix;
}

export function constructorFromConstructorNode(constructorNode, context) {
  const { Constructor } = elements,
        node = constructorNode, ///
        string = context.nodeAsString(node),
        term = termFromConstructorNode(constructorNode, context),
        constructor = new Constructor(context, string, node, term);

  return constructor;
}

export function suppositionFromSuppositionNode(suppositionNode, context) {
  const { Supposition } = elements,
        node = suppositionNode, ///
        string = context.nodeAsString(node),
        statement = statementFromSuppositionNode(suppositionNode, context),
        procedureCall = procedureCallFromSuppositionNode(suppositionNode, context);

  context = null;

  const supposition = new Supposition(context, string, node, statement, procedureCall);

  return supposition
}

export function equivalenceFromEquivalenceNode(equivalenceNode, context) {
  const { Equivalence } = elements,
        node = equivalenceNode, ///
        terms = termsFromEquivalenceNode(equivalenceNode, context),
        equivalenceString = equivalenceStringFromTerms(terms),
        string = equivalenceString; ///

  context = null;

  const equivalence = new Equivalence(context, string, node, terms);

  return equivalence;
}

export function metatheoremFromMetatheoremNode(metatheoremNode, context) {
  const { Metatehorem } = elements,
        metaLemmaMetathoremNode = metatheoremNode,  ///
        proof = proofFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context),
        label = labelFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context),
        deduction = deductionFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context),
        suppositions = suppositionsFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context),
        topLevelMetaAssertionString = topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction(label, suppositions, deduction),
        node = metatheoremNode, ///
        string = topLevelMetaAssertionString, ///
        substitutions = null,
        metatheorem = new Metatehorem(context, string, node, label, suppositions, deduction, proof, substitutions);

  return metatheorem;
}

export function metavariableFromMetavariableNode(metavariableNode, context) {
  const { Metavariable } = elements,
        node = metavariableNode,  ///
        string = context.nodeAsString(node),
        metavariableName = metavariableNode.getMetavariableName(),
        name = metavariableName,  ///
        type = null,
        metaType = null,
        metavariable = new Metavariable(context, string, node, name, type, metaType);

  return metavariable;
}

export function subDerivationFromSubDerivationNode(subDerivationNode, context) {
  const { SubDerivation } = elements,
        node = subDerivationNode, ///
        string = null,
        stepsOrSubproofs = stepsOrSubproofsFromSubDerivationNode(subDerivationNode, context);

  context = null;

  const subDerivation = new SubDerivation(context, string, node, stepsOrSubproofs);

  return subDerivation;
}

export function typeAssertionFromTypeAssertionNode(typeAssertionNode, context) {
  const { TypeAssertion } = elements,
        node = typeAssertionNode, ///
        string = context.nodeAsString(node),
        term = termFromTypeAssertionNode(typeAssertionNode, context),
        type = typeFromTypeAssertionNode(typeAssertionNode, context);

  context = null;

  const typeAssertion = new TypeAssertion(context, string, node, term, type);

  return typeAssertion;
}

export function procedureCallFromProcedureCallNode(procedureCallNode, context) {
  const { ProcedureCall } = elements,
        parameters = parametersFromProcedureCallNode(procedureCallNode, context),
        procedureReference = procedureReferenceFromProcedureCallNode(procedureCallNode, context),
        procedureCallString = procedureCallStringFromProcedureReferenceAndParameters(procedureReference, parameters),
        node = procedureCallNode, ///
        string = procedureCallString; ///

  context = null;

  const procedureCall = new ProcedureCall(context, string, node, parameters, procedureReference);

  return procedureCall;
}

export function stepOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context) {
  const step = stepFromStepOrSubproofNode(stepOrSubproofNode, context),
        subproof = subproofFromStepOrSubproofNode(stepOrSubproofNode, context),
        stepOrSubproof = (step || subproof);

  return stepOrSubproof;
}

export function definedAssertionFromDefinedAssertionNode(definedAssertionNode, context) {
  const { DefinedAssertion } = elements,
        node = definedAssertionNode,  ///
        string = context.nodeAsString(node),
        negated = definedAssertionNode.isNegated(),
        term = termFromDefinedAssertionNode(definedAssertionNode, context),
        frame = frameFromDefinedAssertionNode(definedAssertionNode, context);

  context = null;

  const definedAssertion = new DefinedAssertion(context, string, node, term, frame, negated);

  return definedAssertion;
}

export function propertyRelationFromPropertyRelationNode(propertyRelationNode, context) {
  const { PropertyRelation } = elements,
        node = propertyRelationNode,  ///
        string = context.nodeAsString(node),
        property = propertyFromPropertyRelationNode(propertyRelationNode, context),
        term = termFromPropertyRelationNode(propertyRelationNode, context);

  context = null;

  const propertyRelation = new PropertyRelation(context, string, node, property, term);

  return propertyRelation;
}

export function termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context) {
  const { TermSubstitution } = elements,
        node = termSubstitutionNode,  ///
        string = context.nodeAsString(node),
        targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, context),
        replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, context),
        termSubstitution = new TermSubstitution(context, string, node, targetTerm, replacementTerm);

  return termSubstitution;
}

export function frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context) {
  const { FrameSubstitution } = elements,
        node = frameSubstitutionNode,  ///
        string = context.nodeAsString(node),
        targetFrame = targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context),
        replacementFrame = replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context),
        frameSubstitution = new FrameSubstitution(context, string, node, targetFrame, replacementFrame);

  return frameSubstitution;
}

export function propertyAssertionFromPropertyAssertionNode(propertyAssertionNode, context) {
  const { PropertyAssertion } = elements,
        node = propertyAssertionNode,  ///
        string = context.nodeAsString(node),
        term = termFromPropertyAssertionNode(propertyAssertionNode, context),
        propertyRelation = propertyRelationFromPropertyAssertionNode(propertyAssertionNode, context);

  context = null;

  const propertyAssertion = new PropertyAssertion(context, string, node, term, propertyRelation);

  return propertyAssertion;
}

export function subproofAssertionFromSubproofAssertionNode(subproofAssertionNode, context) {
  const { SubproofAssertion } = elements,
        node = subproofAssertionNode, ///
        string = context.nodeAsString(node),
        statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context);

  context = null;

  const subproofAssertion = new SubproofAssertion(context, string, node, statements);

  return subproofAssertion;
}

export function containedAssertionFromContainedAssertionNode(containedAssertionNode, context) {
  const { ContainedAssertion } = elements,
        node = containedAssertionNode,  ///
        string = context.nodeAsString(node),
        negated = containedAssertionNode.isNegated(),
        term = termFromContainedAssertionNode(containedAssertionNode, context),
        frame = frameFromContainedAssertionNode(containedAssertionNode, context),
        statement = statementFromContainedAssertionNode(containedAssertionNode, context);

  context = null;

  const containedAssertion = new ContainedAssertion(context, string, node, term, frame, negated, statement);

  return containedAssertion;
}

export function satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
  const { SatisfiesAssertion } = elements,
        node = satisfiesAssertionNode,  ///
        string = context.nodeAsString(node),
        signature = signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context),
        reference = referenceFromSatisfiesAssertionNode(satisfiesAssertionNode, context);

  context = null;

  const satisfiesAssertion = new SatisfiesAssertion(context, string, node, signature, reference);

  return satisfiesAssertion;
}

export function procedureReferenceFromProcedureReferenceNode(procedureReferenceNode, context) {
  const { ProcedureReference } = elements,
        node = procedureReferenceNode,  ///
        string = context.nodeAsString(node),
        name = nameFromProcedureReferenceNode(procedureReferenceNode, context);

  context = null;

  const procedureRefereence = new ProcedureReference(context, string, node, name);

  return procedureRefereence;
}

export function variableDeclarationFromVariableDeclarationNode(variableDeclarationNode, context) {
  const { VariableDeclaration } = elements,
        node = variableDeclarationNode,  ///
        string = context.nodeAsString(node),
        typeNode = variableDeclarationNode.getTypeNode(),
        provisional = variableDeclarationNode.isProvisional(),
        variableNode = variableDeclarationNode.getVariableNode(),
        type = typeFromTypeNode(typeNode, context),
        variable = variableFromVariableNode(variableNode, context),
        variableDeclaration = new VariableDeclaration(context, string, node, type, variable, provisional);

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

export function referenceSubstitutionFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
  const { ReferenceSubstitution } = elements,
        node = referenceSubstitutionNode,  ///
        string = context.nodeAsString(node),
        targetReference = targetReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context),
        replacementReference = replacementReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context),
        referenceSubstitution = new ReferenceSubstitution(context, string, node, targetReference, replacementReference);

  return referenceSubstitution;
}

export function statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
  const { StatementSubstitution } = elements,
        node = statementSubstitutionNode,  ///
        string = context.nodeAsString(node),
        resolved = resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context),
        substitution = substitutionFromStatementSubstitutionNode(statementSubstitutionNode, context),
        targetStatement = targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context),
        replacementStatement = replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context),
        statementSubstitution = new StatementSubstitution(context, string, node, resolved, substitution, targetStatement, replacementStatement);

  return statementSubstitution;
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
        metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context),
        metavariable = metavariableFromMetavariableDeclarationNode(metavariableDeclarationNode, context),
        metavariableDeclaration = new MetavariableDeclaration(context, string, node, metaType, metavariable);

  return metavariableDeclaration;
}

export function nameFromTypeNode(typeNode, context) {
  const typeName = typeNode.getTypeName(),
        name = typeName;  ///

  return name;
}

export function typeFromTermNode(termNode, context) {
  const type = null;

  return type;
}

export function proofFromRuleNode(ruleNode, context) {
  let proof = null;

  const proofNode = ruleNode.getProofNode();

  if (proofNode !== null) {
    proof = proofFromProofNode(proofNode, context);
  }

  return proof;
}

export function labelsFromRuleNode(ruleNode, context) {
  const labelNodes = ruleNode.getLabelNodes(),
        labels = labelsFromLabelNodes(labelNodes, context);

  return labels;
}

export function premisesFromRuleNode(ruleNode, context) {
  const premiseNodes = ruleNode.getPremiseNodes(),
        premises = premisesFromPremiseNodes(premiseNodes, context);

  return premises;
}

export function axiomFromSectionNode(sectionNode, context) {
  let axiom = null;

  const axiomNode = sectionNode.getAxiomNode();

  if (axiomNode !== null) {
    axiom = axiomFromAxiomNode(axiomNode, context);
  }

  return axiom;
}

export function lemmaFromSectionNode(sectionNode, context) {
  let lemma = null;

  const lemmaNode = sectionNode.getLemmaNode();

  if (lemmaNode !== null) {
    lemma = lemmaFromLemmaNode(lemmaNode, context);
  }

  return lemma;
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

export function superTypesFromTypeNode(typeNode, context) {
  const superTypes = null;

  return superTypes;
}

export function propertiesFromTypeNode(typeNode, context) {
  const properties = null;

  return properties;
}

export function prefixNameFromTypeNode(typeNode, context) {
  const typePrefixName = typeNode.getTypePrefixName(),
    prefixName = typePrefixName;  ///

  return prefixName;
}

export function conclusionFromRuleNode(ruleNode, context) {
  const conclusionNode = ruleNode.getConclusionNode(),
        conclusion = conclusionFromConclusionNode(conclusionNode, context);

  return conclusion;
}

export function theoremFromSectionNode(sectionNode, context) {
  let theorem = null;

  const theoremNode = sectionNode.getTheoremNode();

  if (theoremNode !== null) {
    theorem = theoremFromTheoremNode(theoremNode, context);
  }

  return theorem;
}

export function frameFromJudgementNode(judgementNode, context) {
  const frameNode = judgementNode.getFrameNode(),
        frame = frameFromFrameNode(frameNode, context);

  return frame;
}

export function termsFromSignatureNode(signatureNode, context) {
  const termNodes = signatureNode.getAssumptionNodes(),
        terms = termsFromTermNodes(termNodes, context);

  return terms;
}

export function derivationFromProofNode(proofNode, context) {
  const derivationNode = proofNode.getDerivationNode(),
        derivation = derivationFromDerivationNode(derivationNode, context);

  return derivation;
}

export function provisionalFromTypeNode(typeNode, context) {
  const provisional = null;

  return provisional;
}

export function termFromConstructorNode(ocnstructorNode, context) {
  const termNode = ocnstructorNode.getTermNode(),
        term = termFromTermNode(termNode, context);

  return term;
}

export function assumptionsFromFrameNode(frameNode, context) {
  const assumptionNodes = frameNode.getAssumptionNodes(),
        assumptions = assumptionsFromAssumptionNodes(assumptionNodes, context);

  return assumptions;
}

export function statementFromPremiseNode(premiseNode, context) {
  let statement = null;

  const statementNode = premiseNode.getStatementNode();

  if (statementNode !== null) {
    statement = statementFromStatementNode(statementNode, context);
  }

  return statement;
}

export function leftTermFromEqualityNode(equalityNode, context) {
  const leftTermNode = equalityNode.getLeftTermNode(),
        leftTerm = termFromTermNode(leftTermNode, context);

  return leftTerm;
}

export function termsFromEquivalenceNode(equivalenceNode, context) {
  const termNodes = equivalenceNode.getTermNodes(),
        terms = termsFromTermNodes(termNodes, context);

  return terms;
}

export function metavariableFromFrameNode(frameNode, context) {
  let metavariable = null;

  const metavariableNode = frameNode.getMetavariableNode();

  if (metavariableNode !== null) {
    metavariable = metavariableFromMetavariableNode(metavariableNode, context);
  }

  return metavariable;
}

export function metavariableFromLabelNode(labelNode, context) {
  const metavariableNode = labelNode.getMetavariableNode(),
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);

  return metavariable;
}

export function conjectureFromSectionNode(sectionNode, context) {
  let conjecture = null;

  const conjectureNode = sectionNode.getConjectureNode();

  if (conjectureNode !== null) {
    conjecture = conjectureFromConjectureNode(conjectureNode, context);
  }

  return conjecture;
}

export function rightTermFromEqualityNode(equalityNode, context) {
  const rightTermNode = equalityNode.getRightTermNode(),
        rightTerm = termFromTermNode(rightTermNode, context);

  return rightTerm;
}

export function equalityFromStatementNode(statementNode, context) {
  let equality = null;

  const equalityNode = statementNode.getEqualityNode();

  if (equalityNode !== null) {
    equality = equalityFromEqualityNode(equalityNode, context);
  }

  return equality;
}

export function termFromTypeAssertionNode(typeAssertionNode, context) {
  const termNode = typeAssertionNode.getTermNode(),
        term = termFromTermNode(termNode, context);

  return term;
}

export function typeFromTypeAssertionNode(typeAssertionNode, context) {
  const typeNode = typeAssertionNode.getTypeNode(),
        type = typeFromTypeNode(typeNode, context);

  return type;
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

export function judgementFromStatementNode(statementNode, context) {
  let judgement = null;

  const judgementNode = statementNode.getJudgementNode();

  if (judgementNode !== null) {
    judgement = judgementFromJudgementNode(judgementNode, context);
  }

  return judgement;
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

export function nominalTypeNameFromTypeNode(typeNode, context) {
  const nominalTypeName = typeNode.getNominalTypeName();

  return nominalTypeName;
}

export function assumptionFromJudgementNode(judgementNode, context) {
  const assumptionNode = judgementNode.getAssumptionNode(),
        assumption = assumptionFromAssumptionNode(assumptionNode, context);

  return assumption;
}

export function referenceFromAssumptionNode(assumptionNode, context) {
  const metavariableNode = assumptionNode.getMetavariableNode(),
        reference = referenceFromMetavariableNode(metavariableNode, context);

  return reference;
}

export function statementFromCombinatorNode(combinatorNode, context) {
  const statementNode = combinatorNode.getStatementNode(),
        statement = statementFromStatementNode(statementNode, context);

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
  let statement;

  const statementNode = assumptionNode.getStatementNode();

  if (statementNode !== null) {
    statement = statementFromStatementNode(statementNode, context);
  }

  return statement;
}

export function statementFromHypothesisNode(hypothesisNode, context) {
  let statement = null;

  const statementNode = hypothesisNode.getStatementNode();

  if (statementNode !== null) {
    statement = statementFromStatementNode(statementNode, context);
  }

  return statement;
}

export function procedureCallFromPremiseNode(premiseNode, context) {
  let procedureCall = null;

  const procedureCallNode = premiseNode.getProcedureCallNode();

  if (procedureCallNode !== null) {
    procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
  }

  return procedureCall;
}

export function suppositionsFromSubproofNode(subproofNode, context) {
  const suppositionNodes = subproofNode.getSuppositionNodes(),
        suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);

  return suppositions;
}

export function statementFromSuppositionNode(suppositionNode, context) {
  let statement = null;

  const statementNode = suppositionNode.getStatementNode();

  if (statementNode !== null) {
    statement = statementFromStatementNode(statementNode, context);
  }

  return statement; ///
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
  const termNode = propertyRelationNode.getTermNode(),
        term = termFromTermNode(termNode, context);

  return term;
}

export function subDerivationFromSubproofNode(subproofNode, context) {
  const subDerivationNode = subproofNode.getSubDerivationNode(),
        subDerviation = subDerivationFromSubDerivationNode(subDerivationNode, context);

  return subDerviation;
}

export function metavariableFromStatementNode(statementNode, context) {
  let metavariable = null;

  const metavariableNode = statementNode.getMetavariableNode();

  if (metavariableNode !== null) {
    metavariable = metavariableFromMetavariableNode(metavariableNode, context);
  }

  return metavariable;
}

export function metavariableFromReferenceNode(referenceNode, context) {
  const metavariableNode = referenceNode.getMetavariableNode(),
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);

  return metavariable;
}

export function referenceFromMetavariableNode(metavariableNode, context) {
  const metavariableString = context.nodeAsString(metavariableNode);

  return literally((context) => {
    const referenceString = metavariableString, ///
          string = referenceString,  ///
          referenceNode = instantiateReference(string, context),
          reference = referenceFromReferenceNode(referenceNode, context);

    return reference;
  }, context);
}

export function frameFromDefinedAssertionNode(definedAssertionNode, context) {
  let frame = null;

  const frameNode = definedAssertionNode.getFrameNode();

  if (frameNode !== null) {
    frame = frameFromFrameNode(frameNode, context);
  }

  return frame;
}

export function termFromPropertyAssertionNode(propertyAssertionNode, context) {
  const termNode = propertyAssertionNode.getTermNode(),
        term = termFromTermNode(termNode, context);

  return term;
}

export function satisfiesAssertionFromStepNode(stepNode, context) {
  let satisfiesAssertion = null;

  const satisfiesAssertionNode = stepNode.getSatisfiedAssertionNode();

  if (satisfiesAssertionNode !== null) {
    satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
  }

  return satisfiesAssertion;
}

export function typeAssertionFromStatementNode(statementNode, context) {
  let typeAssertion = null;

  const typeAssertionNode = statementNode.getTypeAssertionNode();

  if (typeAssertionNode !== null) {
    typeAssertion = typeAssertionFromTypeAssertionNode(typeAssertionNode, context);
  }

  return typeAssertion;
}

export function proofFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
  let proof = null;

  const proofNode = topLevelAsssertionNode.getProofNode();

  if (proofNode !== null) {
    proof = proofFromProofNode(proofNode, context);
  }

  return proof;
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

export function nameFromProcedureReferenceNode(procedureReferenceNode, context) {
  const name = procedureReferenceNode.getName();

  return name;
}

export function parametersFromProcedureCallNode(procedureCallNode, context) {
  const parameterNodes = procedureCallNode.getParameterNodes(),
        parameters = parametersFromParameterNodes(parameterNodes, context);

  return parameters;
}

export function frameFromContainedAssertionNode(containedAssertionNode, context) {
  let frame = null;

  const frameNode = containedAssertionNode.getFrameNode();

  if (frameNode !== null) {
    frame = frameFromFrameNode(frameNode, context)
  }

  return frame;
}

export function labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
  const labelNodes = topLevelAsssertionNode.getLabelNodes(),
        labels = labelsFromLabelNodes(labelNodes, context);

  return labels;
}

export function procedureCallFromSuppositionNode(suppositionNode, context) {
  let procedureCall = null;

  const procedureCallNode = suppositionNode.getProcedureCallNode();

  if (procedureCallNode !== null) {
    procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
  }

  return procedureCall;
}

export function propertyFromPropertyRelationNode(propertyRelationNode, context) {
  const propertyNode = propertyRelationNode.getTermNode(),
        property = propertyFromPropertyNode(propertyNode, context);

  return property;
}

export function definedAssertionFromStatementNode(statementNode, context) {
  let definedAssertion = null;

  const definedAssertionNode = statementNode.getDefinedAssertionNode();

  if (definedAssertionNode !== null) {
    definedAssertion = definedAssertionFromDefinedAssertionNode(definedAssertionNode, context);
  }

  return definedAssertion;
}

export function termSubstitutionFromStatementNode(statementNode, context) {
  let termSubstitution = null;

  const termSubstitutionNode = statementNode.getTermSubstitutionNode();

  if (termSubstitutionNode !== null) {
    termSubstitution = termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context);
  }

  return termSubstitution;
}

export function typeFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
  const typeNode = simpleTypeDeclarationNode.getTypeNode(),
        type = typeFromTypeNode(typeNode, context);

  return type;
}

export function targetTermFromTermSubstitutionNode(termSubstitutionNode, context) {
  const targetTermNode = termSubstitutionNode.getTargetTermNode(),
        targetTerm = termFromTermNode(targetTermNode, context);

  return targetTerm;
}

export function deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
  const deductionNode = topLevelAsssertionNode.getDeductionNode(),
        deduction = deductionFromDeductionNode(deductionNode, context);

  return deduction;
}

export function signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
  let signature = null;

  const signatureNode = topLevelAsssertionNode.getSignatureNode();

  if (signatureNode !== null) {
    signature = signatureFromSignatureNode(signatureNode, context);
  }

  return signature;
}

export function proofFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
  const proofNode = metaLemmaMetathoremNode.getProofNode(),
        proof = proofFromProofNode(proofNode, context);

  return proof;
}

export function labelFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
  const labelNode = metaLemmaMetathoremNode.getLabelNode(),
        label = labelFromLabelNode(labelNode, context);

  return label;
}

export function frameSubstitutionFromStatementNode(statementNode, context) {
  let frameSubstitution = null;

  const frameSubstitutionNode = statementNode.getFrameSubstitutionNode();

  if (frameSubstitutionNode !== null) {
    frameSubstitution = frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context);
  }

  return frameSubstitution;
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
  const typeNode = complexTypeDeclarationNode.getTypeNode(),
        type = typeFromTypeNode(typeNode, context);

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

export function satisfiesAssertionFromStatementNode(statementNode, context) {
  let satisfiesAssertion = null;

  const satisfiesAssertionNode = statementNode.getSatisfiedAssertionNode();

  if (satisfiesAssertionNode !== null) {
    satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
  }

  return satisfiesAssertion;
}

export function statementsFromSubproofAssertionNode(subproofAssertionNode, context) {
  const statementNodes = subproofAssertionNode.getStatementNodes(),
        statements = statementsFromStatementNodes(statementNodes, context);

  return statements;
}

export function statementFromContainedAssertionNode(containedAssertionNode, context) {
  const statementNode = containedAssertionNode.getStatementNode(),
        statement = statementFromStatementNode(statementNode, context);

  return statement;
}

export function signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
  const signatureNode = satisfiesAssertionNode.getSignatureNode(),
        signature = signatureFromSignatureNode(signatureNode, context);

  return signature;
}

export function referenceFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
  const metavariableNode = satisfiesAssertionNode.getMetavariableNode(),
        reference = referenceFromMetavariableNode(metavariableNode, context);

  return reference;
}

export function hypothesesFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
  const ypotheses = [];

  return ypotheses;
}

export function targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
  const targetFrameNode = frameSubstitutionNode.getTargetFrameNode(),
        targetFrame = frameFromFrameNode(targetFrameNode, context);

  return targetFrame;
}

export function suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
  const suppositionNodes = topLevelAsssertionNode.getSuppositionNodes(),
        suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);

  return suppositions;
}

export function prefixedFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
  const prefixed = simpleTypeDeclarationNode.isPrefixed();

  return prefixed;
}

export function resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context) {
  const resolved = statementSubstitutionNode.isResolved();

  return resolved;
}

export function deductionFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
  const deductionNode = metaLemmaMetathoremNode.getDeductionNode(),
        deduction = deductionFromDeductionNode(deductionNode, context);

  return deduction;
}

export function prefixedFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
  const prefixed = complexTypeDeclarationNode.isPrefixed();

  return prefixed;
}

export function procedureReferenceFromProcedureCallNode(procedureCallNode, context) {
  const procedureReferenceNode = procedureCallNode.getProcedureReferenceNode(),
        procedureReference = procedureReferenceFromProcedureReferenceNode(procedureReferenceNode, context);

  return procedureReference;
}

export function replacementTermFromTermSubstitutionNode(termSubstitutionNode, context) {
  const replacementTermNode = termSubstitutionNode.getReplacementTermNode(),
        replacementTerm = termFromTermNode(replacementTermNode, context);

  return replacementTerm;
}

export function typePrefixFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
  const typePrefixNode = typePrefixDeclarationNode.getTypePrefixNode(),
        typePrefix = typePrefixFromTypePrefixNode(typePrefixNode, context);

  return typePrefix;
}

export function combinatorFromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
  const combinatorNode = combinatorDeclarationNode.getCombinatorNode(),
        combinator = combinatorFromCombinatorNode(combinatorNode, context);

  return combinator;
}

export function metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
  const metaTypeNode = metavariableDeclarationNode.getMetaTypeNode(),
        metaType = metaTypeFromMetaTypeNode(metaTypeNode, context);

  return metaType;
}

export function replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
  const replacementFrameNode = frameSubstitutionNode.getReplacementFrameNode(),
        replacementFrame = frameFromFrameNode(replacementFrameNode, context);

  return replacementFrame;
}

export function propertyRelationFromPropertyAssertionNode(propertyAssertionNode, context) {
  const propertyRelationNode = propertyAssertionNode.getPropertyRelationNode(),
        propertyRelation = propertyRelationFromPropertyRelationNode(propertyRelationNode, context);

  return propertyRelation;
}

export function suppositionsFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
  const suppositionNodes = metaLemmaMetathoremNode.getSuppositionNodes(),
        suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);

  return suppositions;
}

export function substitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
  const frameSubstitution = frameSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context),
        termSubstitution = termSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context),
        substitution = (frameSubstitution || termSubstitution);

  return substitution;
}

export function constructorFromConstructorDeclarationNode(constructorDeclarationNode, context) {
  const constructorNode = constructorDeclarationNode.getConstructorNode(),
        constructor = constructorFromConstructorNode(constructorNode, context);

  return constructor;
}

export function metavariableFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
  const metavariableNode = metavariableDeclarationNode.getMetavariableNode(),
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);

  return metavariable;
}

export function targetReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
  const targetReferenceNode = referenceSubstitutionNode.getTargetReferenceNode(),
        targetRefernece = metavariableFromMetavariableNode(targetReferenceNode, context);

  return targetRefernece;
}

export function targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
  const targetStatementNode = statementSubstitutionNode.getTargetStatementNode(),
        targetStatement = statementFromStatementNode(targetStatementNode, context);

  return targetStatement;
}

export function termSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
  let termSubstitution = null;

  const termSubstitutionNode = statementSubstitutionNode.getTermSubstitutionNode();

  if (termSubstitutionNode !== null) {
    termSubstitution = termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context);
  }

  return termSubstitution;
}

export function frameSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
  let frameSubstitution = null;

  const frameSubstitutionNode = statementSubstitutionNode.getFrameSubstitutionNode();

  if (frameSubstitutionNode !== null) {
    frameSubstitution = frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context);
  }

  return frameSubstitution;
}

export function replacementReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
  const replacementReferenceNode = referenceSubstitutionNode.getReplacementReferenceNode(),
        replacementReference = referenceFromReferenceNode(replacementReferenceNode, context);

  return replacementReference;
}

export function replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
  const replacementStatementNode = statementSubstitutionNode.getReplacementStatementNode(),
        replacementStatement = statementFromStatementNode(replacementStatementNode, context);

  return replacementStatement;
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

export function premisesFromPremiseNodes(premiseNodes, context) {
  const premises = premiseNodes.map((premiseNode) => {
    const premise = premiseFromPremiseNode(premiseNode, context);

    return premise;
  });

  return premises;
}

export function statementsFromStatementNodes(statementNodes, context) {
  const statements = statementNodes.map((statementNode) => {
    const statement = statementFromStatementNode(statementNode, context);

    return statement;
  });

  return statements;
}

export function parametersFromParameterNodes(parameterNodes, context) {
  const parameters = parameterNodes.map((parameterNode) => {
    const parameter = parameterFromParameterNode(parameterNode, context);

    return parameter;
  });

  return parameters;
}

export function hypothesesFromHypothesisNodes(hypothesisNodes, context) {
  const hypotheses = hypothesisNodes.map((hypotheseNode) => {
    const hypothesis = hypothesisFromHypothesisNode(hypotheseNode, context);

    return hypothesis;
  });

  return hypotheses;
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

export function stepsOrSubproofsFromDerivationNode(derivationNode, context) {
  const stepOrSubproofNodes = derivationNode.getStepOrSubproofNodes(),
        stepsOrSubproofs = stepOrSubproofNodes.map((stepOrSubproofNode) => {
          const stepOrSubproof = stepOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context);

          return stepOrSubproof;
        });

  return stepsOrSubproofs;
}

export function stepsOrSubproofsFromSubDerivationNode(subDerivationNode, context) {
  const stepOrSubproofNodes = subDerivationNode.getStepOrSubproofNodes(),
        stepsOrSubproofs = stepOrSubproofNodes.map((stepOrSubproofNode) => {
          const stepOrSubproof = stepOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context);

          return stepOrSubproof;
        });

  return stepsOrSubproofs;
}
