"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get assumptionFromAssumptionNode () {
        return assumptionFromAssumptionNode;
    },
    get assumptionFromJudgementNode () {
        return assumptionFromJudgementNode;
    },
    get assumptionsFromAssumptionNodes () {
        return assumptionsFromAssumptionNodes;
    },
    get assumptionsFromFrameNode () {
        return assumptionsFromFrameNode;
    },
    get axiomFromAxiomNode () {
        return axiomFromAxiomNode;
    },
    get axiomFromSectionNode () {
        return axiomFromSectionNode;
    },
    get combinatorDeclarationFromCombinatorDeclarationNode () {
        return combinatorDeclarationFromCombinatorDeclarationNode;
    },
    get combinatorFromCombinatorDeclarationNode () {
        return combinatorFromCombinatorDeclarationNode;
    },
    get combinatorFromCombinatorNode () {
        return combinatorFromCombinatorNode;
    },
    get complexTypeDeclarationFromComplexTypeDeclarationNode () {
        return complexTypeDeclarationFromComplexTypeDeclarationNode;
    },
    get conclusionFromConclusionNode () {
        return conclusionFromConclusionNode;
    },
    get conclusionFromRuleNode () {
        return conclusionFromRuleNode;
    },
    get conjectureFromConjectureNode () {
        return conjectureFromConjectureNode;
    },
    get conjectureFromSectionNode () {
        return conjectureFromSectionNode;
    },
    get constructorDeclarationFromConstructorDeclarationNode () {
        return constructorDeclarationFromConstructorDeclarationNode;
    },
    get constructorFromConstructorDeclarationNode () {
        return constructorFromConstructorDeclarationNode;
    },
    get constructorFromConstructorNode () {
        return constructorFromConstructorNode;
    },
    get containedAssertionFromContainedAssertionNode () {
        return containedAssertionFromContainedAssertionNode;
    },
    get containedAssertionFromStatementNode () {
        return containedAssertionFromStatementNode;
    },
    get deductionFromDeductionNode () {
        return deductionFromDeductionNode;
    },
    get deductionFromTopLevelAssertionNode () {
        return deductionFromTopLevelAssertionNode;
    },
    get deductionFromTopLevelMetaAssertionNode () {
        return deductionFromTopLevelMetaAssertionNode;
    },
    get definedAssertionFromDefinedAssertionNode () {
        return definedAssertionFromDefinedAssertionNode;
    },
    get definedAssertionFromStatementNode () {
        return definedAssertionFromStatementNode;
    },
    get derivationFromDerivationNode () {
        return derivationFromDerivationNode;
    },
    get derivationFromProofNode () {
        return derivationFromProofNode;
    },
    get equalityFromEqualityNode () {
        return equalityFromEqualityNode;
    },
    get equalityFromStatementNode () {
        return equalityFromStatementNode;
    },
    get equivalenceFromEquivalenceNode () {
        return equivalenceFromEquivalenceNode;
    },
    get errorFromErrorNode () {
        return errorFromErrorNode;
    },
    get frameFromContainedAssertionNode () {
        return frameFromContainedAssertionNode;
    },
    get frameFromDefinedAssertionNode () {
        return frameFromDefinedAssertionNode;
    },
    get frameFromFrameNode () {
        return frameFromFrameNode;
    },
    get frameFromJudgementNode () {
        return frameFromJudgementNode;
    },
    get frameSubstitutionFromFrameSubstitutionNode () {
        return frameSubstitutionFromFrameSubstitutionNode;
    },
    get frameSubstitutionFromStatementNode () {
        return frameSubstitutionFromStatementNode;
    },
    get frameSubstitutionFromStatementSubstitutionNode () {
        return frameSubstitutionFromStatementSubstitutionNode;
    },
    get hypothesesFromHypothesisNodes () {
        return hypothesesFromHypothesisNodes;
    },
    get hypothesesFromTopLevelAssertionNode () {
        return hypothesesFromTopLevelAssertionNode;
    },
    get hypothesisFromHypothesisNode () {
        return hypothesisFromHypothesisNode;
    },
    get identifierFromVarialbeNode () {
        return identifierFromVarialbeNode;
    },
    get judgementFromJudgementNode () {
        return judgementFromJudgementNode;
    },
    get judgementFromStatementNode () {
        return judgementFromStatementNode;
    },
    get labelFromLabelNode () {
        return labelFromLabelNode;
    },
    get labelFromTopLevelMetaAssertionNode () {
        return labelFromTopLevelMetaAssertionNode;
    },
    get labelsFromLabelNodes () {
        return labelsFromLabelNodes;
    },
    get labelsFromRuleNode () {
        return labelsFromRuleNode;
    },
    get labelsFromTopLevelAssertionNode () {
        return labelsFromTopLevelAssertionNode;
    },
    get leftTermFromEqualityNode () {
        return leftTermFromEqualityNode;
    },
    get lemmaFromLemmaNode () {
        return lemmaFromLemmaNode;
    },
    get lemmaFromSectionNode () {
        return lemmaFromSectionNode;
    },
    get metaLemmaFromMetaLemmaNode () {
        return metaLemmaFromMetaLemmaNode;
    },
    get metaTypeFromMetaTypeNode () {
        return metaTypeFromMetaTypeNode;
    },
    get metaTypeFromMetavariableDeclarationNode () {
        return metaTypeFromMetavariableDeclarationNode;
    },
    get metatheoremFromMetatheoremNode () {
        return metatheoremFromMetatheoremNode;
    },
    get metavariableDeclarationFromMetavariableDeclarationNode () {
        return metavariableDeclarationFromMetavariableDeclarationNode;
    },
    get metavariableFromFrameNode () {
        return metavariableFromFrameNode;
    },
    get metavariableFromLabelNode () {
        return metavariableFromLabelNode;
    },
    get metavariableFromMetavariableDeclarationNode () {
        return metavariableFromMetavariableDeclarationNode;
    },
    get metavariableFromMetavariableNode () {
        return metavariableFromMetavariableNode;
    },
    get metavariableFromReferenceNode () {
        return metavariableFromReferenceNode;
    },
    get metavariableFromStatementNode () {
        return metavariableFromStatementNode;
    },
    get nameFromProcedureReferenceNode () {
        return nameFromProcedureReferenceNode;
    },
    get parameterFromParameterNode () {
        return parameterFromParameterNode;
    },
    get parametersFromParameterNodes () {
        return parametersFromParameterNodes;
    },
    get parametersFromProcedureCallNode () {
        return parametersFromProcedureCallNode;
    },
    get prefixedFromComplexTypeDeclarationNode () {
        return prefixedFromComplexTypeDeclarationNode;
    },
    get prefixedFromSimpleTypeDeclarationNode () {
        return prefixedFromSimpleTypeDeclarationNode;
    },
    get premiseFromPremiseNode () {
        return premiseFromPremiseNode;
    },
    get premisesFromPremiseNodes () {
        return premisesFromPremiseNodes;
    },
    get premisesFromRuleNode () {
        return premisesFromRuleNode;
    },
    get procedureCallFromPremiseNode () {
        return procedureCallFromPremiseNode;
    },
    get procedureCallFromProcedureCallNode () {
        return procedureCallFromProcedureCallNode;
    },
    get procedureCallFromSuppositionNode () {
        return procedureCallFromSuppositionNode;
    },
    get procedureReferenceFromProcedureCallNode () {
        return procedureReferenceFromProcedureCallNode;
    },
    get procedureReferenceFromProcedureReferenceNode () {
        return procedureReferenceFromProcedureReferenceNode;
    },
    get proofFromProofNode () {
        return proofFromProofNode;
    },
    get proofFromRuleNode () {
        return proofFromRuleNode;
    },
    get proofFromTopLevelAssertionNode () {
        return proofFromTopLevelAssertionNode;
    },
    get proofFromTopLevelMetaAssertionNode () {
        return proofFromTopLevelMetaAssertionNode;
    },
    get propertyAssertionFromPropertyAssertionNode () {
        return propertyAssertionFromPropertyAssertionNode;
    },
    get propertyAssertionFromStatementNode () {
        return propertyAssertionFromStatementNode;
    },
    get propertyFromPropertyNode () {
        return propertyFromPropertyNode;
    },
    get propertyFromPropertyRelationNode () {
        return propertyFromPropertyRelationNode;
    },
    get propertyRelationFromPropertyAssertionNode () {
        return propertyRelationFromPropertyAssertionNode;
    },
    get propertyRelationFromPropertyRelationNode () {
        return propertyRelationFromPropertyRelationNode;
    },
    get referenceFromAssumptionNode () {
        return referenceFromAssumptionNode;
    },
    get referenceFromMetavariableNode () {
        return referenceFromMetavariableNode;
    },
    get referenceFromReferenceNode () {
        return referenceFromReferenceNode;
    },
    get referenceFromSatisfiesAssertionNode () {
        return referenceFromSatisfiesAssertionNode;
    },
    get referenceFromStepNode () {
        return referenceFromStepNode;
    },
    get referenceSubstitutionFromReferenceSubstitutionNode () {
        return referenceSubstitutionFromReferenceSubstitutionNode;
    },
    get replacementFrameFromFrameSubstitutionNode () {
        return replacementFrameFromFrameSubstitutionNode;
    },
    get replacementReferenceFromReferenceSubstitutionNode () {
        return replacementReferenceFromReferenceSubstitutionNode;
    },
    get replacementStatementFromStatementSubstitutionNode () {
        return replacementStatementFromStatementSubstitutionNode;
    },
    get replacementTermFromTermSubstitutionNode () {
        return replacementTermFromTermSubstitutionNode;
    },
    get resolvedFromStatementSubstitutionNode () {
        return resolvedFromStatementSubstitutionNode;
    },
    get rightTermFromEqualityNode () {
        return rightTermFromEqualityNode;
    },
    get ruleFromRuleNode () {
        return ruleFromRuleNode;
    },
    get satisfiesAssertionFromSatisfiesAssertionNode () {
        return satisfiesAssertionFromSatisfiesAssertionNode;
    },
    get satisfiesAssertionFromStatementNode () {
        return satisfiesAssertionFromStatementNode;
    },
    get satisfiesAssertionFromStepNode () {
        return satisfiesAssertionFromStepNode;
    },
    get sectionFromSectionNode () {
        return sectionFromSectionNode;
    },
    get signatureFromSatisfiesAssertionNode () {
        return signatureFromSatisfiesAssertionNode;
    },
    get signatureFromSignatureNode () {
        return signatureFromSignatureNode;
    },
    get signatureFromTopLevelAssertionNode () {
        return signatureFromTopLevelAssertionNode;
    },
    get simpleTypeDeclarationFromSimpleTypeDeclarationNode () {
        return simpleTypeDeclarationFromSimpleTypeDeclarationNode;
    },
    get statementFromAssumptionNode () {
        return statementFromAssumptionNode;
    },
    get statementFromCombinatorNode () {
        return statementFromCombinatorNode;
    },
    get statementFromConclusionNode () {
        return statementFromConclusionNode;
    },
    get statementFromContainedAssertionNode () {
        return statementFromContainedAssertionNode;
    },
    get statementFromDeductionNode () {
        return statementFromDeductionNode;
    },
    get statementFromHypothesisNode () {
        return statementFromHypothesisNode;
    },
    get statementFromPremiseNode () {
        return statementFromPremiseNode;
    },
    get statementFromStatementNode () {
        return statementFromStatementNode;
    },
    get statementFromStepNode () {
        return statementFromStepNode;
    },
    get statementFromSuppositionNode () {
        return statementFromSuppositionNode;
    },
    get statementSubstitutionFromStatementSubstitutionNode () {
        return statementSubstitutionFromStatementSubstitutionNode;
    },
    get statementsFromStatementNodes () {
        return statementsFromStatementNodes;
    },
    get statementsFromSubproofAssertionNode () {
        return statementsFromSubproofAssertionNode;
    },
    get stepFromStepNode () {
        return stepFromStepNode;
    },
    get stepFromStepOrSubproofNode () {
        return stepFromStepOrSubproofNode;
    },
    get stepsOrSubproofFromStepOrSubproofNode () {
        return stepsOrSubproofFromStepOrSubproofNode;
    },
    get stepsOrSubproofsFromDerivationNode () {
        return stepsOrSubproofsFromDerivationNode;
    },
    get stepsOrSubproofsFromSubDerivationNode () {
        return stepsOrSubproofsFromSubDerivationNode;
    },
    get subDerivationFromSubDerivationNode () {
        return subDerivationFromSubDerivationNode;
    },
    get subDerivationFromSubproofNode () {
        return subDerivationFromSubproofNode;
    },
    get subproofAssertionFromStatementNode () {
        return subproofAssertionFromStatementNode;
    },
    get subproofAssertionFromSubproofAssertionNode () {
        return subproofAssertionFromSubproofAssertionNode;
    },
    get subproofFromStepOrSubproofNode () {
        return subproofFromStepOrSubproofNode;
    },
    get subproofFromSubproofNode () {
        return subproofFromSubproofNode;
    },
    get substitutionFromStatementSubstitutionNode () {
        return substitutionFromStatementSubstitutionNode;
    },
    get suppositionFromSuppositionNode () {
        return suppositionFromSuppositionNode;
    },
    get suppositionsFromSubproofNode () {
        return suppositionsFromSubproofNode;
    },
    get suppositionsFromSuppositionNodes () {
        return suppositionsFromSuppositionNodes;
    },
    get suppositionsFromTopLevelAssertionNode () {
        return suppositionsFromTopLevelAssertionNode;
    },
    get suppositionsFromTopLevelMetaAssertionNode () {
        return suppositionsFromTopLevelMetaAssertionNode;
    },
    get targetFrameFromFrameSubstitutionNode () {
        return targetFrameFromFrameSubstitutionNode;
    },
    get targetReferenceFromReferenceSubstitutionNode () {
        return targetReferenceFromReferenceSubstitutionNode;
    },
    get targetStatementFromStatementSubstitutionNode () {
        return targetStatementFromStatementSubstitutionNode;
    },
    get targetTermFromTermSubstitutionNode () {
        return targetTermFromTermSubstitutionNode;
    },
    get termFromConstructorNode () {
        return termFromConstructorNode;
    },
    get termFromContainedAssertionNode () {
        return termFromContainedAssertionNode;
    },
    get termFromDefinedAssertionNode () {
        return termFromDefinedAssertionNode;
    },
    get termFromPropertyAssertionNode () {
        return termFromPropertyAssertionNode;
    },
    get termFromPropertyRelationNode () {
        return termFromPropertyRelationNode;
    },
    get termFromTermNode () {
        return termFromTermNode;
    },
    get termFromTypeAssertionNode () {
        return termFromTypeAssertionNode;
    },
    get termSubstitutionFromStatementNode () {
        return termSubstitutionFromStatementNode;
    },
    get termSubstitutionFromStatementSubstitutionNode () {
        return termSubstitutionFromStatementSubstitutionNode;
    },
    get termSubstitutionFromTermSubstitutionNode () {
        return termSubstitutionFromTermSubstitutionNode;
    },
    get termsFromEquivalenceNode () {
        return termsFromEquivalenceNode;
    },
    get termsFromSignatureNode () {
        return termsFromSignatureNode;
    },
    get termsFromTermNodes () {
        return termsFromTermNodes;
    },
    get theoremFromSectionNode () {
        return theoremFromSectionNode;
    },
    get theoremFromTheoremNode () {
        return theoremFromTheoremNode;
    },
    get typeAssertionFromStatementNode () {
        return typeAssertionFromStatementNode;
    },
    get typeAssertionFromTypeAssertionNode () {
        return typeAssertionFromTypeAssertionNode;
    },
    get typeFromComplexTypeDeclarationNode () {
        return typeFromComplexTypeDeclarationNode;
    },
    get typeFromSimpleTypeDeclarationNode () {
        return typeFromSimpleTypeDeclarationNode;
    },
    get typeFromTermNode () {
        return typeFromTermNode;
    },
    get typeFromTypeAssertionNode () {
        return typeFromTypeAssertionNode;
    },
    get typeFromTypeNode () {
        return typeFromTypeNode;
    },
    get typePrefixDeclarationFromTypePrefixDeclarationNode () {
        return typePrefixDeclarationFromTypePrefixDeclarationNode;
    },
    get typePrefixFromTypePrefixDeclarationNode () {
        return typePrefixFromTypePrefixDeclarationNode;
    },
    get typePrefixFromTypePrefixNode () {
        return typePrefixFromTypePrefixNode;
    },
    get variableDeclarationFromVariableDeclarationNode () {
        return variableDeclarationFromVariableDeclarationNode;
    },
    get variableFromVariableNode () {
        return variableFromVariableNode;
    }
});
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _context = require("../utilities/context");
var _type = require("../utilities/type");
var _instantiate = require("../process/instantiate");
var _metaTypes = require("../metaTypes");
var _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function typeFromTypeNode(typeNode, context) {
    var type;
    if (typeNode === null) {
        var baseType = (0, _type.baseTypeFromNothing)();
        type = baseType; ///
    } else {
        var Type = _elements.default.Type, typeName = typeNode.getTypeName(), typePrefixName = typeNode.getTypePrefixName(), nominalTypeName = typeNode.getNominalTypeName(), string = nominalTypeName, node = typeNode, name = typeName, prefixName = typePrefixName, superTypes = null, properties = null, provisional = null;
        type = new Type(context, string, node, name, prefixName, superTypes, properties, provisional);
    }
    return type;
}
function termFromTermNode(termNode, context) {
    var Term = _elements.default.Term, node = termNode, string = context.nodeAsString(node), type = typeFromTermNode(termNode, context), term = new Term(context, string, node, type);
    return term;
}
function stepFromStepNode(stepNode, context) {
    var Step = _elements.default.Step, node = stepNode, string = context.nodeAsString(node), statement = statementFromStepNode(stepNode, context), reference = referenceFromStepNode(stepNode, context), satisfiesAssertion = satisfiesAssertionFromStepNode(stepNode, context), step = new Step(context, string, node, statement, reference, satisfiesAssertion);
    return step;
}
function ruleFromRuleNode(ruleNode, context) {
    var Rule = _elements.default.Rule, proof = proofFromRuleNode(ruleNode, context), labels = labelsFromRuleNode(ruleNode, context), premises = premisesFromRuleNode(ruleNode, context), conclusion = conclusionFromRuleNode(ruleNode, context), ruleString = (0, _string.rulsStringFromLabelsPremisesAndConclusion)(labels, premises, conclusion), node = ruleNode, string = ruleString, rule = new Rule(context, string, node, proof, labels, premises, conclusion);
    return rule;
}
function labelFromLabelNode(labelNode, context) {
    var Label = _elements.default.Label, node = labelNode, string = context.nodeAsString(node), metavariable = metavariableFromLabelNode(labelNode, context), label = new Label(context, string, node, metavariable);
    return label;
}
function errorFromErrorNode(errorNode, context) {
    var Error = _elements.default.Error, node = errorNode, string = context.nodeAsString(node), error = new Error(context, string, node);
    return error;
}
function lemmaFromLemmaNode(lemmaNode, context) {
    var Lemma = _elements.default.Lemma, topLevelAsssertionNode = lemmaNode, proof = proofFromTopLevelAssertionNode(topLevelAsssertionNode, context), labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context), deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context), suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context), signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context), hypotheses = hypothesesFromTopLevelAssertionNode(topLevelAsssertionNode, context), topLevelAsssertionString = (0, _string.topLevelAssertionStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = lemmaNode, string = topLevelAsssertionString, lemma = new Lemma(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return lemma;
}
function frameFromFrameNode(frameNode, context) {
    var Frame = _elements.default.Frame, node = frameNode, string = context.nodeAsString(node), assumptions = assumptionsFromFrameNode(frameNode, context), metavariable = metavariableFromFrameNode(frameNode, context), frame = new Frame(context, string, node, assumptions, metavariable);
    return frame;
}
function proofFromProofNode(proofNode, context) {
    var Proof = _elements.default.Proof, node = proofNode, string = null, derivation = derivationFromProofNode(proofNode, context), proof = new Proof(context, string, node, derivation);
    return proof;
}
function axiomFromAxiomNode(axiomNode, context) {
    var Axiom = _elements.default.Axiom, topLevelAsssertionNode = axiomNode, proof = proofFromTopLevelAssertionNode(topLevelAsssertionNode, context), labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context), deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context), suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context), signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context), hypotheses = [], topLevelAsssertionString = (0, _string.topLevelAssertionStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = axiomNode, string = topLevelAsssertionString, axiom = new Axiom(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return axiom;
}
function sectionFromSectionNode(sectionNode, context) {
    var hypothesisNodes = sectionNode.getHypothesisNodes(), hypotheses = hypothesesFromHypothesisNodes(hypothesisNodes, context), axiom = axiomFromSectionNode(sectionNode, context), lemma = lemmaFromSectionNode(sectionNode, context), theorem = theoremFromSectionNode(sectionNode, context), conjecture = conjectureFromSectionNode(sectionNode, context), sectionString = (0, _string.sectionStringFromHypothesesTopLevelAssertion)(hypotheses, axiom, lemma, theorem, conjecture), node = sectionNode, string = sectionString, section = new Section(context, string, node, hypotheses, axiom, lemma, theorem, conjecture);
    return section;
}
function premiseFromPremiseNode(premiseNode, context) {
    var Premise = _elements.default.Premise, node = premiseNode, string = context.nodeAsString(node), statement = statementFromPremiseNode(premiseNode, context), procedureCall = procedureCallFromPremiseNode(premiseNode, context), premise = new Premise(context, string, node, statement, procedureCall);
    return premise;
}
function theoremFromTheoremNode(theoremNode, context) {
    var Theorem = _elements.default.Theorem, topLevelAsssertionNode = theoremNode, proof = proofFromTopLevelAssertionNode(topLevelAsssertionNode, context), labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context), deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context), suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context), signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context), hypotheses = [], topLevelAsssertionString = (0, _string.topLevelAssertionStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = theoremNode, string = topLevelAsssertionString, theorem = new Theorem(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return theorem;
}
function metaTypeFromMetaTypeNode(metaTypeNode, context) {
    var metaTypeName = metaTypeNode.getMetaTypeName(), metaType = (0, _metaTypes.findMetaTypeByMetaTypeName)(metaTypeName);
    return metaType;
}
function propertyFromPropertyNode(propertyNode, context) {
    var Property = _elements.default.Property, node = propertyNode, string = context.nodeAsString(node), propertyName = propertyNode.getPropertyName(), nominalTypeName = null, name = propertyName, property = new Property(context, string, node, name, nominalTypeName);
    return property;
}
function variableFromVariableNode(variableNode, context) {
    var Variable = _elements.default.Variable, node = variableNode, string = context.nodeAsString(node), type = null, identifier = identifierFromVarialbeNode(variableNode, context), propertyRelations = [], variable = new Variable(context, string, node, type, identifier, propertyRelations);
    return variable;
}
function subproofFromSubproofNode(subproofNode, context) {
    var Subproof = _elements.default.Subproof, node = subproofNode, suppositions = suppositionsFromSubproofNode(subproofNode, context), subDerivation = subDerivationFromSubproofNode(subproofNode, context), subproofString = (0, _string.subproofStringFromSuppositionsAndSubDerivation)(suppositions, subDerivation, context), string = subproofString, subproof = new Subproof(context, string, node, suppositions, subDerivation);
    return subproof;
}
function equalityFromEqualityNode(equalityNode, context) {
    var Equality = _elements.default.Equality, node = equalityNode, string = context.nodeAsString(node), leftTerm = leftTermFromEqualityNode(equalityNode, context), rightTerm = rightTermFromEqualityNode(equalityNode, context), subproof = new Equality(context, string, node, leftTerm, rightTerm);
    return subproof;
}
function deductionFromDeductionNode(deductionNode, context) {
    var Deduction = _elements.default.Deduction, node = deductionNode, string = context.nodeAsString(node), statement = statementFromDeductionNode(deductionNode, context), deduction = new Deduction(context, string, node, statement);
    return deduction;
}
function statementFromStatementNode(statementNode, context) {
    var Statement = _elements.default.Statement, node = statementNode, string = context.nodeAsString(node), statement = new Statement(context, string, node);
    return statement;
}
function signatureFromSignatureNode(signatureNode, context) {
    var Signature = _elements.default.Signature, node = signatureNode, string = context.nodeAsString(node), terms = termsFromSignatureNode(signatureNode, context), signature = new Signature(context, string, node, terms);
    return signature;
}
function referenceFromReferenceNode(referenceNode, context) {
    var Reference = _elements.default.Reference, node = referenceNode, string = context.nodeAsString(node), metavariable = metavariableFromReferenceNode(referenceNode, context), reference = new Reference(context, string, node, metavariable);
    return reference;
}
function judgementFromJudgementNode(judgementNode, context) {
    var Judgement = _elements.default.Judgement, node = judgementNode, string = context.nodeAsString(node), frame = frameFromJudgementNode(judgementNode, context), assumption = assumptionFromJudgementNode(judgementNode, context), judgement = new Judgement(context, string, node, frame, assumption);
    return judgement;
}
function metaLemmaFromMetaLemmaNode(metaLemmaNode1, context) {
    var MetaLemma = _elements.default.MetaLemma, metaLemmaMetathoremNode = metaLemmaNode1, proof = proofFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), label = labelFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), deduction = deductionFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), suppositions = suppositionsFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), topLevelMetaAssertionString = (0, _string.topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction)(label, suppositions, deduction), substitutions = null, node = metaLemmaNode1, string = topLevelMetaAssertionString, metaLemma = new MetaLemma(context, string, node, label, suppositions, deduction, proof, substitutions);
    return metaLemma;
}
function parameterFromParameterNode(parameterNode, context) {
    var Parameter = _elements.default.Parameter, node = parameterNode, string = context.nodeAsString(node), name = parameterNode.getName(), identifier = parameterNode.getIdentifier(), parameter = new Parameter(context, string, node, name, identifier);
    return parameter;
}
function hypothesisFromHypothesisNode(hypotheseNode, context) {
    var Hypothsis = _elements.default.Hypothsis, node = hypotheseNode, string = context.nodeAsString(node), statement = statementFromHypothesisNode(hypotheseNode, context), parameter = new Hypothsis(context, string, node, statement);
    return parameter;
}
function conjectureFromConjectureNode(conjectureNode, context) {
    var Conjecture = _elements.default.Conjecture, topLevelAsssertionNode = conjectureNode, proof = proofFromTopLevelAssertionNode(topLevelAsssertionNode, context), labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context), deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context), suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context), signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context), hypotheses = [], topLevelAsssertionString = (0, _string.topLevelAssertionStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = conjectureNode, string = topLevelAsssertionString, conjecture = new Conjecture(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return conjecture;
}
function combinatorFromCombinatorNode(combinatorNode, context) {
    var Combinator = _elements.default.Combinator, node = combinatorNode, string = context.nodeAsString(node), statement = statementFromCombinatorNode(combinatorNode, context), combinator = new Combinator(context, string, node, statement);
    return combinator;
}
function conclusionFromConclusionNode(conclusionNode, context) {
    var Conclusion = _elements.default.Conclusion, node = conclusionNode, string = context.nodeAsString(node), statement = statementFromConclusionNode(conclusionNode, context), conclusion = new Conclusion(context, string, node, statement);
    return conclusion;
}
function assumptionFromAssumptionNode(assumptionNode, context) {
    var Assumption = _elements.default.Assumption, node = assumptionNode, string = context.nodeAsString(node), reference = referenceFromAssumptionNode(assumptionNode, context), statement = statementFromAssumptionNode(assumptionNode, context), assumption = new Assumption(context, string, node, reference, statement);
    return assumption;
}
function derivationFromDerivationNode(derivationNode, context) {
    var Derivation = _elements.default.Derivation, node = derivationNode, string = null, stepsOrSubproofs = stepsOrSubproofsFromDerivationNode(derivationNode, context), derivation = new Derivation(context, string, node, stepsOrSubproofs);
    return derivation;
}
function typePrefixFromTypePrefixNode(typePrefixNode, context) {
    var TypePrefix = _elements.default.TypePrefix, node = typePrefixNode, string = context.nodeAsString(node), term = termFromTypePrefixNode(typePrefixNode, context), type = typeFromTypePrefixNode(typePrefixNode, context), typePrefix = new TypePrefix(context, string, node, term, type);
    return typePrefix;
}
function constructorFromConstructorNode(constructorNode, context) {
    var Constructor = _elements.default.Constructor, node = constructorNode, string = context.nodeAsString(node), term = termFromConstructorNode(constructorNode, context), constructor = new Constructor(context, string, node, term);
    return constructor;
}
function suppositionFromSuppositionNode(suppositionNode, context) {
    var Supposition = _elements.default.Supposition, node = suppositionNode, string = context.nodeAsString(node), statement = statementFromSuppositionNode(suppositionNode, context), procedureCall = procedureCallFromSuppositionNode(suppositionNode, context), supposition = new Supposition(context, string, node, statement, procedureCall);
    return supposition;
}
function equivalenceFromEquivalenceNode(equivalenceNode, context) {
    var Equivalence = _elements.default.Equivalence, node = equivalenceNode, terms = termsFromEquivalenceNode(equivalenceNode, context), equivalenceString = (0, _string.equivalenceStringFromTerms)(terms), string = equivalenceString, equivalence = new Equivalence(context, string, node, terms);
    return equivalence;
}
function metatheoremFromMetatheoremNode(metatheoremNode, context) {
    var Metatehorem = _elements.default.Metatehorem, metaLemmaMetathoremNode = metatheoremNode, proof = proofFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), label = labelFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), deduction = deductionFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), suppositions = suppositionsFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), topLevelMetaAssertionString = (0, _string.topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction)(label, suppositions, deduction), substitutions = null, node = metaLemmaNode, string = topLevelMetaAssertionString, metatheorem = new Metatehorem(context, string, node, label, suppositions, deduction, proof, substitutions);
    return metatheorem;
}
function metavariableFromMetavariableNode(metavariableNode, context) {
    var Metavariable = _elements.default.Metavariable, node = metavariableNode, string = context.nodeAsString(node), metavariableName = metavariableNode.getMetavariableName(), name = metavariableName, type = null, metaType = null, metavariable = new Metavariable(context, string, node, name, type, metaType);
    return metavariable;
}
function subDerivationFromSubDerivationNode(subDerivationNode, context) {
    var SubDerivation = _elements.default.SubDerivation, node = subDerivationNode, string = null, stepsOrSubproofs = stepsOrSubproofsFromSubDerivationNode(subDerivationNode, context), subDerivation = new SubDerivation(context, string, node, stepsOrSubproofs);
    return subDerivation;
}
function typeAssertionFromTypeAssertionNode(typeAssertionNode, context) {
    var TypeAssertion = _elements.default.TypeAssertion, node = typeAssertionNode, string = context.nodeAsString(node), term = termFromTypeAssertionNode(typeAssertionNode, context), type = typeFromTypeAssertionNode(typeAssertionNode, context), typeAssertion = new TypeAssertion(context, string, node, term, type);
    return typeAssertion;
}
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    var ProcedureCall = _elements.default.ProcedureCall, parameters = parametersFromProcedureCallNode(procedureCallNode, context), procedureReference = procedureReferenceFromProcedureCallNode(procedureCallNode, context), procedureCallString = (0, _string.procedureCallStringFromProcedureReferenceAndParameters)(procedureReference, parameters), node = procedureCallNode, string = procedureCallString, procedureCall = new ProcedureCall(context, string, node, parameters, procedureReference);
    return procedureCall;
}
function stepsOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context) {
    var step = stepFromStepOrSubproofNode(stepOrSubproofNode, context), subproof = subproofFromStepOrSubproofNode(stepOrSubproofNode, context), stepOrSubproof = step || subproof;
    return stepOrSubproof;
}
function definedAssertionFromDefinedAssertionNode(definedAssertionNode, context) {
    var DefinedAssertion = _elements.default.DefinedAssertion, node = definedAssertionNode, string = context.nodeAsString(node), negated = definedAssertionNode.isNegated(), term = termFromDefinedAssertionNode(definedAssertionNode, context), frame = frameFromDefinedAssertionNode(definedAssertionNode, context), definedAssertion = new DefinedAssertion(context, string, node, term, frame, negated);
    return definedAssertion;
}
function propertyRelationFromPropertyRelationNode(propertyRelationNode, context) {
    var PropertyRelation = _elements.default.PropertyRelation, node = propertyRelationNode, string = context.nodeAsString(node), property = propertyFromPropertyRelationNode(propertyRelationNode, context), term = termFromPropertyRelationNode(propertyRelationNode, context), propertyRelation = new PropertyRelation(context, string, node, property, term);
    return propertyRelation;
}
function termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context) {
    var TermSubstitution = _elements.default.TermSubstitution, node = termSubstitutionNode, string = context.nodeAsString(node), targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, context), replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, context), termSubstitution = new TermSubstitution(context, string, node, targetTerm, replacementTerm);
    return termSubstitution;
}
function frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    var FrameSubstitution = _elements.default.FrameSubstitution, node = frameSubstitutionNode, string = context.nodeAsString(node), targetFrame = targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context), replacementFrame = replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context), frameSubstitution = new FrameSubstitution(context, string, node, targetFrame, replacementFrame);
    return frameSubstitution;
}
function propertyAssertionFromPropertyAssertionNode(propertyAssertionNode, context) {
    var PropertyAssertion = _elements.default.PropertyAssertion, node = propertyAssertionNode, string = context.nodeAsString(node), term = termFromPropertyAssertionNode(propertyAssertionNode, context), propertyRelation = propertyRelationFromPropertyAssertionNode(propertyAssertionNode, context), propertyAssertion = new PropertyAssertion(context, string, node, term, propertyRelation);
    return propertyAssertion;
}
function subproofAssertionFromSubproofAssertionNode(subproofAssertionNode, context) {
    var SubproofAssertion = _elements.default.SubproofAssertion, node = subproofAssertionNode, string = context.nodeAsString(node), statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context), subproofAssertion = new SubproofAssertion(context, string, node, statements);
    return subproofAssertion;
}
function containedAssertionFromContainedAssertionNode(containedAssertionNode, context) {
    var ContainedAssertion = _elements.default.ContainedAssertion, node = containedAssertionNode, string = context.nodeAsString(node), negated = containedAssertionNode.isNegated(), term = termFromContainedAssertionNode(containedAssertionNode, context), frame = frameFromContainedAssertionNode(containedAssertionNode, context), statement = statementFromContainedAssertionNode(containedAssertionNode, context), containedAssertion = new ContainedAssertion(context, string, node, term, frame, negated, statement);
    return containedAssertion;
}
function satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    var SatisfiesAssertion = _elements.default.SatisfiesAssertion, node = satisfiesAssertionNode, string = context.nodeAsString(node), signature = signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context), reference = referenceFromSatisfiesAssertionNode(satisfiesAssertionNode, context), satisfiesAssertion = new SatisfiesAssertion(context, string, node, signature, reference);
    return satisfiesAssertion;
}
function procedureReferenceFromProcedureReferenceNode(procedureReferenceNode, context) {
    var ProcedureReference = _elements.default.ProcedureReference, node = procedureReferenceNode, string = context.nodeAsString(node), name = nameFromProcedureReferenceNode(procedureReferenceNode, context), procedureDeclaration = new ProcedureReference(context, string, node, name);
    return procedureDeclaration;
}
function variableDeclarationFromVariableDeclarationNode(variableDeclarationNode, context) {
    var VariableDeclaration = _elements.default.VariableDeclaration, node = variableDeclarationNode, string = context.nodeAsString(node), typeNode = variableDeclarationNode.getTypeNode(), provisional = variableDeclarationNode.isProvisional(), variableNode = variableDeclarationNode.getVariableNode(), type = typeFromTypeNode(typeNode, context), variable = variableFromVariableNode(variableNode, context), variableDeclaration = new VariableDeclaration(context, string, node, type, variable, provisional);
    return variableDeclaration;
}
function typePrefixDeclarationFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
    var TypePrefixDeclaration = _elements.default.TypePrefixDeclaration, node = typePrefixDeclarationNode, string = context.nodeAsString(node), typePrefix = typePrefixFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context), typePrefixDeclaration = new TypePrefixDeclaration(context, string, node, typePrefix);
    return typePrefixDeclaration;
}
function combinatorDeclarationFromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
    var CombinatorDeclaration = _elements.default.CombinatorDeclaration, node = combinatorDeclarationNode, string = context.nodeAsString(node), combinator = combinatorFromCombinatorDeclarationNode(combinatorDeclarationNode, context), combinatorDeclaration = new CombinatorDeclaration(context, string, node, combinator);
    return combinatorDeclaration;
}
function simpleTypeDeclarationFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    var SimpleTypeDeclaration = _elements.default.SimpleTypeDeclaration, node = simpleTypeDeclarationNode, string = context.nodeAsString(node), type = typeFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), prefixed = prefixedFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), simpleTypeDeclaration = new SimpleTypeDeclaration(context, string, node, type, prefixed);
    return simpleTypeDeclaration;
}
function referenceSubstitutionFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
    var ReferenceSubstitution = _elements.default.ReferenceSubstitution, node = referenceSubstitutionNode, string = context.nodeAsString(node), targetReference = targetReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context), replacementReference = replacementReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context), referenceSubstitution = new ReferenceSubstitution(context, string, node, targetReference, replacementReference);
    return referenceSubstitution;
}
function statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    var StatementSubstitution = _elements.default.StatementSubstitution, node = statementSubstitutionNode, string = context.nodeAsString(node), resolved = resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context), substitution = substitutionFromStatementSubstitutionNode(statementSubstitutionNode, context), targetStatement = targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context), replacementStatement = replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context), statementSubstitution = new StatementSubstitution(context, string, node, resolved, substitution, targetStatement, replacementStatement);
    return statementSubstitution;
}
function constructorDeclarationFromConstructorDeclarationNode(constructorDeclarationNode, context) {
    var ConstructorDeclaration = _elements.default.ConstructorDeclaration, node = constructorDeclarationNode, string = context.nodeAsString(node), constructor = constructorFromConstructorDeclarationNode(constructorDeclarationNode, context), constructorDeclaration = new ConstructorDeclaration(context, string, node, constructor);
    return constructorDeclaration;
}
function complexTypeDeclarationFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var ComplexTypeDeclaration = _elements.default.ComplexTypeDeclaration, node = complexTypeDeclarationNode, string = context.nodeAsString(node), type = typeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), prefixed = prefixedFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), complexTypeDeclaration = new ComplexTypeDeclaration(context, string, node, type, prefixed);
    return complexTypeDeclaration;
}
function metavariableDeclarationFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    var MetavariableDeclaration = _elements.default.MetavariableDeclaration, node = metavariableDeclarationNode, string = context.nodeAsString(node), metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariable = metavariableFromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariableDeclaration = new MetavariableDeclaration(context, string, node, metaType, metavariable);
    return metavariableDeclaration;
}
function typeFromTermNode(termNode, context) {
    var type = null;
    return type;
}
function proofFromRuleNode(ruleNode, context) {
    var proof = null;
    var proofNode = ruleNode.getProofNode();
    if (proofNode !== null) {
        proof = proofFromProofNode(proofNode, context);
    }
    return proof;
}
function labelsFromRuleNode(ruleNode, context) {
    var labelNodes = ruleNode.getLabelNodes(), labels = labelsFromLabelNodes(labelNodes, context);
    return labels;
}
function premisesFromRuleNode(ruleNode, context) {
    var premiseNodes = ruleNode.getPremiseNodes(), premises = premisesFromPremiseNodes(premiseNodes, context);
    return premises;
}
function axiomFromSectionNode(sectionNode, context) {
    var axiom = null;
    var axiomNode = sectionNode.getAxiomNode();
    if (axiomNode !== null) {
        axiom = axiomFromAxiomNode(axiomNode, context);
    }
    return axiom;
}
function lemmaFromSectionNode(sectionNode, context) {
    var lemma = null;
    var lemmaNode = sectionNode.getLemmaNode();
    if (lemmaNode !== null) {
        lemma = lemmaFromLemmaNode(lemmaNode, context);
    }
    return lemma;
}
function statementFromStepNode(stepNode, context) {
    var statement = null;
    var statementNode = stepNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function referenceFromStepNode(stepNode, context) {
    var reference = null;
    var referenceNode = stepNode.getReferenceNode();
    if (referenceNode !== null) {
        reference = referenceFromReferenceNode(referenceNode, context);
    }
    return reference;
}
function conclusionFromRuleNode(ruleNode, context) {
    var conclusionNode = ruleNode.getConclusionNode(), conclusion = conclusionFromConclusionNode(conclusionNode, context);
    return conclusion;
}
function theoremFromSectionNode(sectionNode, context) {
    var theorem = null;
    var theoremNode = sectionNode.getTheoremNode();
    if (theoremNode !== null) {
        theorem = theoremFromTheoremNode(theoremNode, context);
    }
    return theorem;
}
function frameFromJudgementNode(judgementNode, context) {
    var frameNode = judgementNode.getFrameNode(), frame = frameFromFrameNode(frameNode, context);
    return frame;
}
function termsFromSignatureNode(signatureNode, context) {
    var termNodes = signatureNode.getAssumptionNodes(), terms = termsFromTermNodes(termNodes, context);
    return terms;
}
function derivationFromProofNode(proofNode, context) {
    var derivationNode = proofNode.getDerivationNode(), derivation = derivationFromDerivationNode(derivationNode, context);
    return derivation;
}
function termFromConstructorNode(ocnstructorNode, context) {
    var termNode = ocnstructorNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function assumptionsFromFrameNode(frameNode, context) {
    var assumptionNodes = frameNode.getAssumptionNodes(), assumptions = assumptionsFromAssumptionNodes(assumptionNodes, context);
    return assumptions;
}
function statementFromPremiseNode(premiseNode, context) {
    var statement = null;
    var statementNode = premiseNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function leftTermFromEqualityNode(equalityNode, context) {
    var leftTermNode = equalityNode.getLeftTermNode(), leftTerm = termFromTermNode(leftTermNode, context);
    return leftTerm;
}
function termsFromEquivalenceNode(equivalenceNode, context) {
    var termNodes = equivalenceNode.getTermNodes(), terms = termsFromTermNodes(termNodes, context);
    return terms;
}
function metavariableFromFrameNode(frameNode, context) {
    var metavariable = null;
    var metavariableNode = frameNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }
    return metavariable;
}
function metavariableFromLabelNode(labelNode, context) {
    var metavariableNode = labelNode.getMetavariableNode(), metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    return metavariable;
}
function conjectureFromSectionNode(sectionNode, context) {
    var conjecture = null;
    var conjectureNode = sectionNode.getConjectureNode();
    if (conjectureNode !== null) {
        conjecture = conjectureFromConjectureNode(conjectureNode, context);
    }
    return conjecture;
}
function rightTermFromEqualityNode(equalityNode, context) {
    var rightTermNode = equalityNode.getRightTermNode(), rightTerm = termFromTermNode(rightTermNode, context);
    return rightTerm;
}
function equalityFromStatementNode(statementNode, context) {
    var equality = null;
    var equalityNode = statementNode.getEqualityNode();
    if (equalityNode !== null) {
        equality = equalityFromEqualityNode(equalityNode, context);
    }
    return equality;
}
function termFromTypeAssertionNode(typeAssertionNode, context) {
    var termNode = typeAssertionNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function typeFromTypeAssertionNode(typeAssertionNode, context) {
    var typeNode = typeAssertionNode.getTypeNode(), type = typeFromTypeNode(typeNode, context);
    return type;
}
function identifierFromVarialbeNode(variableNode, context) {
    var variableIdentifier = variableNode.getVariableIdentifier(), identifier = variableIdentifier; ///
    return identifier;
}
function statementFromDeductionNode(deductionNode, context) {
    var statement = null;
    var statementNode = deductionNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function judgementFromStatementNode(statementNode, context) {
    var judgement = null;
    var judgementNode = statementNode.getJudgementNode();
    if (judgementNode !== null) {
        judgement = judgementFromJudgementNode(judgementNode, context);
    }
    return judgement;
}
function stepFromStepOrSubproofNode(stepOrSubproofNode, context) {
    var step = null;
    var stepOrSubproofNodeStepNode = stepOrSubproofNode.isStepNode();
    if (stepOrSubproofNodeStepNode) {
        var stepNode = stepOrSubproofNode; ///
        step = stepFromStepNode(stepNode, context);
    }
    return step;
}
function assumptionFromJudgementNode(judgementNode, context) {
    var assumptionNode = judgementNode.getAssumptionNode(), assumption = assumptionFromAssumptionNode(assumptionNode, context);
    return assumption;
}
function referenceFromAssumptionNode(assumptionNode, context) {
    var metavariableNode = assumptionNode.getMetavariableNode(), reference = referenceFromMetavariableNode(metavariableNode, context);
    return reference;
}
function statementFromCombinatorNode(combinatorNode, context) {
    var statementNode = combinatorNode.getStatementNode(), statement = statementFromStatementNode(statementNode, context);
    return statement;
}
function statementFromConclusionNode(conclusinoNode, context) {
    var statement = null;
    var statementNode = conclusinoNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function statementFromAssumptionNode(assumptionNode, context) {
    var statement;
    var statementNode = assumptionNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function statementFromHypothesisNode(hypothesisNode, context) {
    var statement = null;
    var statementNode = hypothesisNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function procedureCallFromPremiseNode(premiseNode, context) {
    var procedureCall = null;
    var procedureCallNode = premiseNode.getProcedureCallNode();
    if (procedureCallNode !== null) {
        procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
    }
    return procedureCall;
}
function suppositionsFromSubproofNode(subproofNode, context) {
    var suppositionNodes = subproofNode.getSuppositionNodes(), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);
    return suppositions;
}
function statementFromSuppositionNode(suppositionNode, context) {
    var statement = null;
    var statementNode = suppositionNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement; ///
}
function termFromDefinedAssertionNode(definedAssertionNode, context) {
    var term = null;
    var termNode = definedAssertionNode.getTermNode();
    if (termNode !== null) {
        term = termFromTermNode(termNode, context);
    }
    return term;
}
function termFromPropertyRelationNode(propertyRelationNode, context) {
    var termNode = propertyRelationNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function subDerivationFromSubproofNode(subproofNode, context) {
    var subDerivationNode = subproofNode.getSubDerivationNode(), subDerviation = subDerivationFromSubDerivationNode(subDerivationNode, context);
    return subDerviation;
}
function metavariableFromStatementNode(statementNode, context) {
    var metavariable = null;
    var metavariableNode = statementNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }
    return metavariable;
}
function metavariableFromReferenceNode(referenceNode, context) {
    var metavariableNode = referenceNode.getMetavariableNode(), metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    return metavariable;
}
function referenceFromMetavariableNode(metavariableNode, context) {
    var metavariableString = context.nodeAsString(metavariableNode);
    return (0, _context.literally)(function(context) {
        var referenceString = metavariableString, string = referenceString, referenceNode = (0, _instantiate.instantiateReference)(string, context), reference = referenceFromReferenceNode(referenceNode, context);
        return reference;
    }, context);
}
function frameFromDefinedAssertionNode(definedAssertionNode, context) {
    var frame = null;
    var frameNode = definedAssertionNode.getFrameNode();
    if (frameNode !== null) {
        frame = frameFromFrameNode(frameNode, context);
    }
    return frame;
}
function termFromPropertyAssertionNode(propertyAssertionNode, context) {
    var termNode = propertyAssertionNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function satisfiesAssertionFromStepNode(stepNode, context) {
    var satisfiesAssertion = null;
    var satisfiesAssertionNode = stepNode.getSatisfiedAssertionNode();
    if (satisfiesAssertionNode !== null) {
        satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
    }
    return satisfiesAssertion;
}
function typeAssertionFromStatementNode(statementNode, context) {
    var typeAssertion = null;
    var typeAssertionNode = statementNode.getTypeAssertionNode();
    if (typeAssertionNode !== null) {
        typeAssertion = typeAssertionFromTypeAssertionNode(typeAssertionNode, context);
    }
    return typeAssertion;
}
function proofFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
    var proof = null;
    var proofNode = topLevelAsssertionNode.getProofNode();
    if (proofNode !== null) {
        proof = proofFromProofNode(proofNode, context);
    }
    return proof;
}
function subproofFromStepOrSubproofNode(subproofOrSubproofNode, context) {
    var subproof = null;
    var subproofOrSubproofNodeSubproofNode = subproofOrSubproofNode.isSubproofNode();
    if (subproofOrSubproofNodeSubproofNode) {
        var subproofNode = subproofOrSubproofNode; ///
        subproof = subproofFromSubproofNode(subproofNode, context);
    }
    return subproof;
}
function termFromContainedAssertionNode(containedAssertionNode, context) {
    var term = null;
    var termNode = containedAssertionNode.getTermNode();
    if (termNode !== null) {
        term = termFromTermNode(termNode, context);
    }
    return term;
}
function nameFromProcedureReferenceNode(procedureReferenceNode, context) {
    var name = procedureReferenceNode.getName();
    return name;
}
function parametersFromProcedureCallNode(procedureCallNode, context) {
    var parameterNodes = procedureCallNode.getParameterNodes(), parameters = parametersFromParameterNodes(parameterNodes, context);
    return parameters;
}
function frameFromContainedAssertionNode(containedAssertionNode, context) {
    var frame = null;
    var frameNode = containedAssertionNode.getFrameNode();
    if (frameNode !== null) {
        frame = frameFromFrameNode(frameNode, context);
    }
    return frame;
}
function labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
    var labelNodes = topLevelAsssertionNode.getLabelNodes(), labels = labelsFromLabelNodes(labelNodes, context);
    return labels;
}
function procedureCallFromSuppositionNode(suppositionNode, context) {
    var procedureCall = null;
    var procedureCallNode = suppositionNode.getProcedureCallNode();
    if (procedureCallNode !== null) {
        procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
    }
    return procedureCall;
}
function propertyFromPropertyRelationNode(propertyRelationNode, context) {
    var propertyNode = propertyRelationNode.getTermNode(), property = propertyFromPropertyNode(propertyNode, context);
    return property;
}
function definedAssertionFromStatementNode(statementNode, context) {
    var definedAssertion = null;
    var definedAssertionNode = statementNode.getDefinedAssertionNode();
    if (definedAssertionNode !== null) {
        definedAssertion = definedAssertionFromDefinedAssertionNode(definedAssertionNode, context);
    }
    return definedAssertion;
}
function termSubstitutionFromStatementNode(statementNode, context) {
    var termSubstitution = null;
    var termSubstitutionNode = statementNode.getTermSubstitutionNode();
    if (termSubstitutionNode !== null) {
        termSubstitution = termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context);
    }
    return termSubstitution;
}
function typeFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    var typeNode = simpleTypeDeclarationNode.getTypeNode(), type = typeFromTypeNode(typeNode, context);
    return type;
}
function targetTermFromTermSubstitutionNode(termSubstitutionNode, context) {
    var targetTermNode = termSubstitutionNode.getTargetTermNode(), targetTerm = termFromTermNode(targetTermNode, context);
    return targetTerm;
}
function deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
    var deductionNode = topLevelAsssertionNode.getDeductionNode(), deduction = deductionFromDeductionNode(deductionNode, context);
    return deduction;
}
function signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
    var signature = null;
    var signatureNode = topLevelAsssertionNode.getSignatureNode();
    if (signatureNode !== null) {
        signature = signatureFromSignatureNode(signatureNode, context);
    }
    return signature;
}
function proofFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
    var proofNode = metaLemmaMetathoremNode.getProofNode(), proof = proofFromProofNode(proofNode, context);
    return proof;
}
function labelFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
    var labelNode = metaLemmaMetathoremNode.getLabelNode(), label = labelFromLabelNode(labelNode, context);
    return label;
}
function frameSubstitutionFromStatementNode(statementNode, context) {
    var frameSubstitution = null;
    var frameSubstitutionNode = statementNode.getFrameSubstitutionNode();
    if (frameSubstitutionNode !== null) {
        frameSubstitution = frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context);
    }
    return frameSubstitution;
}
function propertyAssertionFromStatementNode(statementNode, context) {
    var propertyAssertion = null;
    var propertyAssertionNode = statementNode.getPropertyAssertionNode();
    if (propertyAssertionNode !== null) {
        propertyAssertion = propertyAssertionFromPropertyAssertionNode(propertyAssertionNode, context);
    }
    return propertyAssertion;
}
function subproofAssertionFromStatementNode(statementNode, context) {
    var subproofAssertion = null;
    var subproofAssertionNode = statementNode.getSubproofAssertionNode();
    if (subproofAssertionNode !== null) {
        subproofAssertion = subproofAssertionFromSubproofAssertionNode(subproofAssertionNode, context);
    }
    return subproofAssertion;
}
function typeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var typeNode = complexTypeDeclarationNode.getTypeNode(), type = typeFromTypeNode(typeNode, context);
    return type;
}
function containedAssertionFromStatementNode(statementNode, context) {
    0;
    var containedAssertion = null;
    var containedAssertionNode = statementNode.getContainedAssertionNode();
    if (containedAssertionNode !== null) {
        containedAssertion = containedAssertionFromContainedAssertionNode(containedAssertionNode, context);
    }
    return containedAssertion;
}
function satisfiesAssertionFromStatementNode(statementNode, context) {
    var satisfiesAssertion = null;
    var satisfiesAssertionNode = statementNode.getSatisfiedAssertionNode();
    if (satisfiesAssertionNode !== null) {
        satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
    }
    return satisfiesAssertion;
}
function statementsFromSubproofAssertionNode(subproofAssertionNode, context) {
    var statementNodes = subproofAssertionNode.getStatementNodes(), statements = statementsFromStatementNodes(statementNodes, context);
    return statements;
}
function statementFromContainedAssertionNode(containedAssertionNode, context) {
    var statementNode = containedAssertionNode.getStatementNode(), statement = statementFromStatementNode(statementNode, context);
    return statement;
}
function signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    var signatureNode = satisfiesAssertionNode.getSignatureNode(), signature = signatureFromSignatureNode(signatureNode, context);
    return signature;
}
function referenceFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    var metavariableNode = satisfiesAssertionNode.getMetavariableNode(), reference = referenceFromMetavariableNode(metavariableNode, context);
    return reference;
}
function hypothesesFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
    var ypotheses = [];
    return ypotheses;
}
function targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    var targetFrameNode = frameSubstitutionNode.getTargetFrameNode(), targetFrame = frameFromFrameNode(targetFrameNode, context);
    return targetFrame;
}
function suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
    var suppositionNodes = topLevelAsssertionNode.getSuppositionNodes(), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);
    return suppositions;
}
function prefixedFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    var prefixed = simpleTypeDeclarationNode.isPrefixed();
    return prefixed;
}
function resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    var resolved = statementSubstitutionNode.isResolved();
    return resolved;
}
function deductionFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
    var deductionNode = metaLemmaMetathoremNode.getDeductionNode(), deduction = deductionFromDeductionNode(deductionNode, context);
    return deduction;
}
function prefixedFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var prefixed = complexTypeDeclarationNode.isPrefixed();
    return prefixed;
}
function procedureReferenceFromProcedureCallNode(procedureCallNode, context) {
    var procedureReferenceNode = procedureCallNode.getProcedureReferenceNode(), procedureReference = procedureReferenceFromProcedureReferenceNode(procedureReferenceNode, context);
    return procedureReference;
}
function replacementTermFromTermSubstitutionNode(termSubstitutionNode, context) {
    var replacementTermNode = termSubstitutionNode.getReplacementTermNode(), replacementTerm = termFromTermNode(replacementTermNode, context);
    return replacementTerm;
}
function typePrefixFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
    var typePrefixNode = typePrefixDeclarationNode.getTypePrefixNode(), typePrefix = typePrefixFromTypePrefixNode(typePrefixNode, context);
    return typePrefix;
}
function combinatorFromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
    var combinatorNode = combinatorDeclarationNode.getCombinatorNode(), combinator = combinatorFromCombinatorNode(combinatorNode, context);
    return combinator;
}
function metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    var metaTypeNode = metavariableDeclarationNode.getMetaTypeNode(), metaType = metaTypeFromMetaTypeNode(metaTypeNode, context);
    return metaType;
}
function replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    var replacementFrameNode = frameSubstitutionNode.getReplacementFrameNode(), replacementFrame = frameFromFrameNode(replacementFrameNode, context);
    return replacementFrame;
}
function propertyRelationFromPropertyAssertionNode(propertyAssertionNode, context) {
    var propertyRelationNode = propertyAssertionNode.getPropertyRelationNode(), propertyRelation = propertyRelationFromPropertyRelationNode(propertyRelationNode, context);
    return propertyRelation;
}
function suppositionsFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
    var suppositionNodes = metaLemmaMetathoremNode.getSuppositionNodes(), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);
    return suppositions;
}
function substitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    var frameSubstitution = frameSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context), termSubstitution = termSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context), substitution = frameSubstitution || termSubstitution;
    return substitution;
}
function constructorFromConstructorDeclarationNode(constructorDeclarationNode, context) {
    var constructorNode = constructorDeclarationNode.getConstructorNode(), constructor = constructorFromConstructorNode(constructorNode, context);
    return constructor;
}
function metavariableFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    var metavariableNode = metavariableDeclarationNode.getMetavariableNode(), metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    return metavariable;
}
function targetReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
    var targetReferenceNode = referenceSubstitutionNode.getTargetReferenceNode(), targetRefernece = metavariableFromMetavariableNode(targetReferenceNode, context);
    return targetRefernece;
}
function targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    var targetStatementNode = statementSubstitutionNode.getTargetStatementNode(), targetStatement = statementFromStatementNode(targetStatementNode, context);
    return targetStatement;
}
function termSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    var termSubstitution = null;
    var termSubstitutionNode = statementSubstitutionNode.getTermSubstitutionNode();
    if (termSubstitutionNode !== null) {
        termSubstitution = termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context);
    }
    return termSubstitution;
}
function frameSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    var frameSubstitution = null;
    var frameSubstitutionNode = statementSubstitutionNode.getFrameSubstitutionNode();
    if (frameSubstitutionNode !== null) {
        frameSubstitution = frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context);
    }
    return frameSubstitution;
}
function replacementReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
    var replacementReferenceNode = referenceSubstitutionNode.getReplacementReferenceNode(), replacementReference = referenceFromReferenceNode(replacementReferenceNode, context);
    return replacementReference;
}
function replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    var replacementStatementNode = statementSubstitutionNode.getReplacementStatementNode(), replacementStatement = statementFromStatementNode(replacementStatementNode, context);
    return replacementStatement;
}
function termsFromTermNodes(termNodes, context) {
    var terms = termNodes.map(function(termNode) {
        var term = termFromTermNode(termNode, context);
        return term;
    });
    return terms;
}
function labelsFromLabelNodes(labelNodes, context) {
    var labels = labelNodes.map(function(labelNode) {
        var label = labelFromLabelNode(labelNode, context);
        return label;
    });
    return labels;
}
function premisesFromPremiseNodes(premiseNodes, context) {
    var premises = premiseNodes.map(function(premiseNode) {
        var premise = premiseFromPremiseNode(premiseNode, context);
        return premise;
    });
    return premises;
}
function statementsFromStatementNodes(statementNodes, context) {
    var statements = statementNodes.map(function(statementNode) {
        var statement = statementFromStatementNode(statementNode, context);
        return statement;
    });
    return statements;
}
function parametersFromParameterNodes(parameterNodes, context) {
    var parameters = parameterNodes.map(function(parameterNode) {
        var parameter = parameterFromParameterNode(parameterNode, context);
        return parameter;
    });
    return parameters;
}
function hypothesesFromHypothesisNodes(hypothesisNodes, context) {
    var hypotheses = hypothesisNodes.map(function(hypotheseNode) {
        var hypothesis = hypothesisFromHypothesisNode(hypotheseNode, context);
        return hypothesis;
    });
    return hypotheses;
}
function assumptionsFromAssumptionNodes(assumptionNodes, context) {
    var assumptions = assumptionNodes.map(function(assumptionNode) {
        var assumption = assumptionFromAssumptionNode(assumptionNode, context);
        return assumption;
    });
    return assumptions;
}
function suppositionsFromSuppositionNodes(suppositionNodes, context) {
    var suppositions = suppositionNodes.map(function(suppositionNode) {
        var supposition = suppositionFromSuppositionNode(suppositionNode, context);
        return supposition;
    });
    return suppositions;
}
function stepsOrSubproofsFromDerivationNode(derivationNode, context) {
    var stepOrSubproofNodes = derivationNode.getStepOrSubproofNodes(), stepsOrSubproofs = stepOrSubproofNodes.map(function(stepOrSubproofNode) {
        var stepOrSubproof = stepsOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context);
        return stepOrSubproof;
    });
    return stepsOrSubproofs;
}
function stepsOrSubproofsFromSubDerivationNode(subDerivationNode, context) {
    var stepOrSubproofNodes = subDerivationNode.getStepOrSubproofNodes(), stepsOrSubproofs = stepOrSubproofNodes.map(function(stepOrSubproofNode) {
        var stepOrSubproof = stepsOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context);
        return stepOrSubproof;
    });
    return stepsOrSubproofs;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXMsXG4gICAgICAgICBydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbixcbiAgICAgICAgIHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uLFxuICAgICAgICAgc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbixcbiAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyxcbiAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbixcbiAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZSA9IGJhc2VUeXBlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IG5vbWluYWxUeXBlTmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSB0eXBlTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBudWxsLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBudWxsLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gbnVsbDtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGVwTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwID0gbmV3IFN0ZXAoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSdWxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJ1bGVTdHJpbmcgPSBydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSxcbiAgICAgICAgbm9kZSA9IHJ1bGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IHJ1bGVTdHJpbmcsICAvLy9cbiAgICAgICAgcnVsZSA9IG5ldyBSdWxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvb2YsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gIHJldHVybiBydWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbmV3IExhYmVsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXJyb3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGVycm9yID0gbmV3IEVycm9yKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFGcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExlbW1hIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSA9IGxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG5vZGUgPSBsZW1tYU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBsZW1tYSA9IG5ldyBMZW1tYShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiBsZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9vZk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvb2YgPSBuZXcgUHJvb2YoY29udGV4dCwgc3RyaW5nLCBub2RlLCBkZXJpdmF0aW9uKTtcblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbUZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXhpb20gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gYXhpb21Ob2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IGF4aW9tTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbkZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2lzTm9kZXMgPSBzZWN0aW9uTm9kZS5nZXRIeXBvdGhlc2lzTm9kZXMoKSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCksXG4gICAgICAgIGF4aW9tID0gYXhpb21Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZW1tYSA9IGxlbW1hRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNlY3Rpb25TdHJpbmcgPSBzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNUb3BMZXZlbEFzc2VydGlvbihoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUpLFxuICAgICAgICBub2RlID0gc2VjdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBzZWN0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlKTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByZW1pc2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gcHJlbWlzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gdGhlb3JlbU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICB0aGVvcmVtID0gbmV3IFRoZW9yZW0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICBtZXRhVHlwZSA9IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb3BlcnR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5vZGUuZ2V0UHJvcGVydHlOYW1lKCksXG4gICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBwcm9wZXJ0eU5hbWUsICAvLy9cbiAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBub21pbmFsVHlwZU5hbWUpO1xuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mTm9kZSwgLy8vXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbihzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdWJwcm9vZlN0cmluZywgIC8vL1xuICAgICAgICBzdWJwcm9vZiA9IG5ldyBTdWJwcm9vZihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbik7XG5cbiAgcmV0dXJuIHN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVxdWFsaXR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBsZWZ0VGVybSA9IGxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mID0gbmV3IEVxdWFsaXR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgcmV0dXJuIHN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZWR1Y3Rpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBuZXcgRGVkdWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzaWduYXR1cmVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKTtcblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEp1ZGdlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBqdWRnZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKTtcblxuICByZXR1cm4ganVkZ2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGFMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YUxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBub2RlID0gbWV0YUxlbW1hTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIG1ldGFMZW1tYSA9IG5ldyBNZXRhTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICByZXR1cm4gbWV0YUxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldE5hbWUoKSxcbiAgICAgICAgaWRlbnRpZmllciA9IHBhcmFtZXRlck5vZGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgaWRlbnRpZmllcik7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEh5cG90aHNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBoeXBvdGhlc2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVyID0gbmV3IEh5cG90aHNpcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSA9IGNvbmplY3R1cmVOb2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IGNvbmplY3R1cmVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgY29uamVjdHVyZSA9IG5ldyBDb25qZWN0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21iaW5hdG9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uY2x1c2lvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBc3N1bXB0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZXJpdmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlcml2YXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVyaXZhdGlvbiA9IG5ldyBEZXJpdmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RlcHNPclN1YnByb29mcyk7XG5cbiAgcmV0dXJuIGRlcml2YXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZVByZWZpeCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlUHJlZml4Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZVByZWZpeCA9IG5ldyBUeXBlUHJlZml4KGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uc3RydWN0b3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdXBwb3NpdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVxdWl2YWxlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVxdWl2YWxlbmNlTm9kZSwgLy8vXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICBzdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZywgLy8vXG4gICAgICAgIGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtRnJvbU1ldGF0aGVvcmVtTm9kZShtZXRhdGhlb3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdGVob3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YXRoZW9yZW1Ob2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG51bGwsXG4gICAgICAgIG5vZGUgPSBtZXRhTGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgbWV0YXRoZW9yZW0gPSBuZXcgTWV0YXRlaG9yZW0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIG1ldGFUeXBlID0gbnVsbCxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUsIG1ldGFUeXBlKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YkRlcml2YXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3ViRGVyaXZhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YkRlcml2YXRpb24gPSBuZXcgU3ViRGVyaXZhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0ZXBzT3JTdWJwcm9vZnMpO1xuXG4gIHJldHVybiBzdWJEZXJpdmF0aW9uO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZUFzc2VydGlvbiA9IG5ldyBUeXBlQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhwcm9jZWR1cmVSZWZlcmVuY2UsIHBhcmFtZXRlcnMpLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nLCAvLy9cbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXAgPSBzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJwcm9vZiA9IHN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IChzdGVwIHx8IHN1YnByb29mKTtcblxuICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVmaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlSZWxhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IG5ldyBQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvcGVydHksIHRlcm0pO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRhcmdldFRlcm0gPSB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKTtcblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRhcmdldEZyYW1lID0gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldEZyYW1lLCByZXBsYWNlbWVudEZyYW1lKTtcblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gbmV3IFByb3BlcnR5QXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29udGFpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBuZXcgQ29udGFpbmVkQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTYXRpc2ZpZXNBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBuZXcgU2F0aXNmaWVzQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc2lnbmF0dXJlLCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZVJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHByb3Zpc2lvbmFsID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IFZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCB2YXJpYWJsZSwgcHJvdmlzaW9uYWwpO1xuXG4gIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVQcmVmaXhEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksICAvLy9cbiAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uID0gbmV3IFR5cGVQcmVmaXhEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGVQcmVmaXgpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4RGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tYmluYXRvckRlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uID0gbmV3IENvbWJpbmF0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGNvbWJpbmF0b3IpO1xuXG4gIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2ltcGxlVHlwZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlZml4ZWQgPSBwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb24gPSBuZXcgU2ltcGxlVHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgcHJlZml4ZWQpO1xuXG4gIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRhcmdldFJlZmVyZW5jZSA9IHRhcmdldFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXBsYWNlbWVudFJlZmVyZW5jZSA9IHJlcGxhY2VtZW50UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG5ldyBSZWZlcmVuY2VTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRSZWZlcmVuY2UsIHJlcGxhY2VtZW50UmVmZXJlbmNlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZXNvbHZlZCA9IHJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVzb2x2ZWQsIHN1YnN0aXR1dGlvbiwgdGFyZ2V0U3RhdGVtZW50LCByZXBsYWNlbWVudFN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uID0gbmV3IENvbnN0cnVjdG9yRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBjb25zdHJ1Y3Rvcik7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVmaXhlZCA9IHByZWZpeGVkRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IG5ldyBDb21wbGV4VHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgcHJlZml4ZWQpO1xuXG4gIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGFUeXBlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG51bGw7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHByb29mTm9kZSA9IHJ1bGVOb2RlLmdldFByb29mTm9kZSgpO1xuXG4gIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBydWxlTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVtaXNlTm9kZXMgPSBydWxlTm9kZS5nZXRQcmVtaXNlTm9kZXMoKSxcbiAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21QcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXhpb20gPSBudWxsO1xuXG4gIGNvbnN0IGF4aW9tTm9kZSA9IHNlY3Rpb25Ob2RlLmdldEF4aW9tTm9kZSgpO1xuXG4gIGlmIChheGlvbU5vZGUgIT09IG51bGwpIHtcbiAgICBheGlvbSA9IGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxlbW1hID0gbnVsbDtcblxuICBjb25zdCBsZW1tYU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRMZW1tYU5vZGUoKTtcblxuICBpZiAobGVtbWFOb2RlICE9PSBudWxsKSB7XG4gICAgbGVtbWEgPSBsZW1tYUZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RlcE5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBzdGVwTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbmNsdXNpb25Ob2RlID0gcnVsZU5vZGUuZ2V0Q29uY2x1c2lvbk5vZGUoKSxcbiAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGhlb3JlbSA9IG51bGw7XG5cbiAgY29uc3QgdGhlb3JlbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRUaGVvcmVtTm9kZSgpO1xuXG4gIGlmICh0aGVvcmVtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRoZW9yZW0gPSB0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZyYW1lTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IHNpZ25hdHVyZU5vZGUuZ2V0QXNzdW1wdGlvbk5vZGVzKCksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlcml2YXRpb25Ob2RlID0gcHJvb2ZOb2RlLmdldERlcml2YXRpb25Ob2RlKCksXG4gICAgICAgIGRlcml2YXRpb24gPSBkZXJpdmF0aW9uRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlKG9jbnN0cnVjdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IG9jbnN0cnVjdG9yTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlcyA9IGZyYW1lTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByZW1pc2VOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IGVxdWl2YWxlbmNlTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBsYWJlbE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29uamVjdHVyZSA9IG51bGw7XG5cbiAgY29uc3QgY29uamVjdHVyZU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRDb25qZWN0dXJlTm9kZSgpO1xuXG4gIGlmIChjb25qZWN0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb25qZWN0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXR5RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RXF1YWxpdHlOb2RlKCk7XG5cbiAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGVxdWFsaXR5ID0gZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZXF1YWxpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgIGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXI7ICAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGRlZHVjdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICBjb25zdCBqdWRnZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRKdWRnZW1lbnROb2RlKCk7XG5cbiAgaWYgKGp1ZGdlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBqdWRnZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXAgPSBudWxsO1xuXG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlLmlzU3RlcE5vZGUoKTtcblxuICBpZiAoc3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUpIHtcbiAgICBjb25zdCBzdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZTsgIC8vL1xuXG4gICAgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0QXNzdW1wdGlvbk5vZGUoKSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW5vTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29uY2x1c2lub05vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQ7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gaHlwb3RoZXNpc05vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25Ob2RlcyA9IHN1YnByb29mTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDsgLy8vXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1YkRlcml2YXRpb25Ob2RlID0gc3VicHJvb2ZOb2RlLmdldFN1YkRlcml2YXRpb25Ob2RlKCksXG4gICAgICAgIHN1YkRlcnZpYXRpb24gPSBzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3ViRGVydmlhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIHJldHVybiBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSBtZXRhdmFyaWFibGVTdHJpbmcsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHJlZmVyZW5jZVN0cmluZywgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RlcE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUeXBlQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFByb29mTm9kZSgpO1xuXG4gIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN1YnByb29mT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mID0gbnVsbDtcblxuICBjb25zdCBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlID0gc3VicHJvb2ZPclN1YnByb29mTm9kZS5pc1N1YnByb29mTm9kZSgpO1xuXG4gIGlmIChzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZPclN1YnByb29mTm9kZTsgIC8vL1xuXG4gICAgc3VicHJvb2YgPSBzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTm9kZXMgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpXG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlcyA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldERlZmluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRhcmdldFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRhcmdldFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGFyZ2V0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkZWR1Y3Rpb25Ob2RlID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpO1xuXG4gIGlmIChzaWduYXR1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9vZk5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRQcm9vZk5vZGUoKSxcbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldExhYmVsTm9kZSgpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5QXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7MFxuICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb250YWluZWRBc3NlcnRpb24gPSBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlcygpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyhzdGF0ZW1lbnROb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHlwb3RoZXNlcyA9IFtdO1xuXG4gIHJldHVybiB5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldEZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0RnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUodGFyZ2V0RnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGFyZ2V0RnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25Ob2RlcyA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4ZWRGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZWZpeGVkID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5pc1ByZWZpeGVkKCk7XG5cbiAgcmV0dXJuIHByZWZpeGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlc29sdmVkID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5pc1Jlc29sdmVkKCk7XG5cbiAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldERlZHVjdGlvbk5vZGUoKSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeGVkRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZWZpeGVkID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcmVmaXhlZCgpO1xuXG4gIHJldHVybiBwcmVmaXhlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFRlcm1Ob2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUocmVwbGFjZW1lbnRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVQcmVmaXhOb2RlID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZS5nZXRUeXBlUHJlZml4Tm9kZSgpLFxuICAgICAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBjb21iaW5hdG9yTm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0Q29tYmluYXRvck5vZGUoKSxcbiAgICAgICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhVHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YVR5cGVOb2RlKCksXG4gICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50RnJhbWVOb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50RnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUocmVwbGFjZW1lbnRGcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudEZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3BlcnR5UmVsYXRpb25Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLmdldFByb3BlcnR5UmVsYXRpb25Ob2RlKCksXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gKGZyYW1lU3Vic3RpdHV0aW9uIHx8IHRlcm1TdWJzdGl0dXRpb24pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBjb25zdHJ1Y3Rvck5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRDb25zdHJ1Y3Rvck5vZGUoKSxcbiAgICAgICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICB0YXJnZXRSZWZlcm5lY2UgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZSh0YXJnZXRSZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGFyZ2V0UmVmZXJuZWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHRhcmdldFN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHRhcmdldFN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0YXJnZXRTdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmIChmcmFtZVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZW1lbnRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRSZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXMgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4ge1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tUHJlbWlzZU5vZGVzKHByZW1pc2VOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBwcmVtaXNlcyA9IHByZW1pc2VOb2Rlcy5tYXAoKHByZW1pc2VOb2RlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZSA9IHByZW1pc2VGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMoc3RhdGVtZW50Tm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzZXMgPSBoeXBvdGhlc2lzTm9kZXMubWFwKChoeXBvdGhlc2VOb2RlKSA9PiB7XG4gICAgY29uc3QgaHlwb3RoZXNpcyA9IGh5cG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbk5vZGVzLm1hcCgoYXNzdW1wdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IGRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZXMgPSBzdWJEZXJpdmF0aW9uTm9kZS5nZXRTdGVwT3JTdWJwcm9vZk5vZGVzKCksXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwT3JTdWJwcm9vZk5vZGVzLm1hcCgoc3RlcE9yU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBzdGVwc09yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwc09yU3VicHJvb2ZzO1xufVxuXG4iXSwibmFtZXMiOlsiYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZSIsImFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2RlcyIsImFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZSIsImF4aW9tRnJvbUF4aW9tTm9kZSIsImF4aW9tRnJvbVNlY3Rpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uRnJvbVJ1bGVOb2RlIiwiY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUiLCJkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwiZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZSIsImRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlIiwiZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZSIsImVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZSIsImVycm9yRnJvbUVycm9yTm9kZSIsImZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzIiwiaHlwb3RoZXNlc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlIiwiaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUiLCJqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsImxhYmVsc0Zyb21MYWJlbE5vZGVzIiwibGFiZWxzRnJvbVJ1bGVOb2RlIiwibGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsImxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsImxlbW1hRnJvbUxlbW1hTm9kZSIsImxlbW1hRnJvbVNlY3Rpb25Ob2RlIiwibWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdGhlb3JlbUZyb21NZXRhdGhlb3JlbU5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJlbWlzZUZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyIsInByZW1pc2VzRnJvbVJ1bGVOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwicHJvb2ZGcm9tUHJvb2ZOb2RlIiwicHJvb2ZGcm9tUnVsZU5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbVN0ZXBOb2RlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwicmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJydWxlRnJvbVJ1bGVOb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZSIsInNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUiLCJzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIiwic2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlIiwic3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlIiwic3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlIiwic3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZSIsInN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZSIsInN0YXRlbWVudEZyb21QcmVtaXNlTm9kZSIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50RnJvbVN0ZXBOb2RlIiwic3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyIsInN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcHNPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUiLCJzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN1YnByb29mRnJvbVN1YnByb29mTm9kZSIsInN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwidGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZSIsInRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUiLCJ0ZXJtc0Zyb21TaWduYXR1cmVOb2RlIiwidGVybXNGcm9tVGVybU5vZGVzIiwidGhlb3JlbUZyb21TZWN0aW9uTm9kZSIsInRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUiLCJ0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJ0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVGVybU5vZGUiLCJ0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21UeXBlTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwiVHlwZSIsImVsZW1lbnRzIiwidHlwZU5hbWUiLCJnZXRUeXBlTmFtZSIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInByZWZpeE5hbWUiLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwidGVybU5vZGUiLCJUZXJtIiwibm9kZUFzU3RyaW5nIiwidGVybSIsInN0ZXBOb2RlIiwiU3RlcCIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsInN0ZXAiLCJydWxlTm9kZSIsIlJ1bGUiLCJwcm9vZiIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsInJ1bGVTdHJpbmciLCJydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbiIsInJ1bGUiLCJsYWJlbE5vZGUiLCJMYWJlbCIsIm1ldGF2YXJpYWJsZSIsImxhYmVsIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJlcnJvciIsImxlbW1hTm9kZSIsIkxlbW1hIiwidG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSIsImRlZHVjdGlvbiIsInN1cHBvc2l0aW9ucyIsInNpZ25hdHVyZSIsImh5cG90aGVzZXMiLCJ0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmciLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJsZW1tYSIsImZyYW1lTm9kZSIsIkZyYW1lIiwiYXNzdW1wdGlvbnMiLCJmcmFtZSIsInByb29mTm9kZSIsIlByb29mIiwiZGVyaXZhdGlvbiIsImF4aW9tTm9kZSIsIkF4aW9tIiwiYXhpb20iLCJzZWN0aW9uTm9kZSIsImh5cG90aGVzaXNOb2RlcyIsImdldEh5cG90aGVzaXNOb2RlcyIsInRoZW9yZW0iLCJjb25qZWN0dXJlIiwic2VjdGlvblN0cmluZyIsInNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uIiwic2VjdGlvbiIsIlNlY3Rpb24iLCJwcmVtaXNlTm9kZSIsIlByZW1pc2UiLCJwcm9jZWR1cmVDYWxsIiwicHJlbWlzZSIsInRoZW9yZW1Ob2RlIiwiVGhlb3JlbSIsIm1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTmFtZSIsImdldE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJwcm9wZXJ0eU5vZGUiLCJQcm9wZXJ0eSIsInByb3BlcnR5TmFtZSIsImdldFByb3BlcnR5TmFtZSIsInByb3BlcnR5IiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJpZGVudGlmaWVyIiwicHJvcGVydHlSZWxhdGlvbnMiLCJ2YXJpYWJsZSIsInN1YnByb29mTm9kZSIsIlN1YnByb29mIiwic3ViRGVyaXZhdGlvbiIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbiIsInN1YnByb29mIiwiZXF1YWxpdHlOb2RlIiwiRXF1YWxpdHkiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImRlZHVjdGlvbk5vZGUiLCJEZWR1Y3Rpb24iLCJzdGF0ZW1lbnROb2RlIiwiU3RhdGVtZW50Iiwic2lnbmF0dXJlTm9kZSIsIlNpZ25hdHVyZSIsInRlcm1zIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsImp1ZGdlbWVudE5vZGUiLCJKdWRnZW1lbnQiLCJhc3N1bXB0aW9uIiwianVkZ2VtZW50IiwibWV0YUxlbW1hTm9kZSIsIk1ldGFMZW1tYSIsIm1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwic3Vic3RpdHV0aW9ucyIsIm1ldGFMZW1tYSIsInBhcmFtZXRlck5vZGUiLCJQYXJhbWV0ZXIiLCJnZXROYW1lIiwiZ2V0SWRlbnRpZmllciIsInBhcmFtZXRlciIsImh5cG90aGVzZU5vZGUiLCJIeXBvdGhzaXMiLCJjb25qZWN0dXJlTm9kZSIsIkNvbmplY3R1cmUiLCJjb21iaW5hdG9yTm9kZSIsIkNvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiY29uY2x1c2lvbk5vZGUiLCJDb25jbHVzaW9uIiwiYXNzdW1wdGlvbk5vZGUiLCJBc3N1bXB0aW9uIiwiZGVyaXZhdGlvbk5vZGUiLCJEZXJpdmF0aW9uIiwic3RlcHNPclN1YnByb29mcyIsInR5cGVQcmVmaXhOb2RlIiwiVHlwZVByZWZpeCIsInRlcm1Gcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlRnJvbVR5cGVQcmVmaXhOb2RlIiwidHlwZVByZWZpeCIsImNvbnN0cnVjdG9yTm9kZSIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJzdXBwb3NpdGlvbk5vZGUiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uIiwiZXF1aXZhbGVuY2VOb2RlIiwiRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZVN0cmluZyIsImVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zIiwiZXF1aXZhbGVuY2UiLCJtZXRhdGhlb3JlbU5vZGUiLCJNZXRhdGVob3JlbSIsIm1ldGF0aGVvcmVtIiwibWV0YXZhcmlhYmxlTm9kZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwic3ViRGVyaXZhdGlvbk5vZGUiLCJTdWJEZXJpdmF0aW9uIiwidHlwZUFzc2VydGlvbk5vZGUiLCJUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbiIsInByb2NlZHVyZUNhbGxOb2RlIiwiUHJvY2VkdXJlQ2FsbCIsInBhcmFtZXRlcnMiLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwicHJvY2VkdXJlQ2FsbFN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzIiwic3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcE9yU3VicHJvb2YiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIkRlZmluZWRBc3NlcnRpb24iLCJuZWdhdGVkIiwiaXNOZWdhdGVkIiwiZGVmaW5lZEFzc2VydGlvbiIsInByb3BlcnR5UmVsYXRpb25Ob2RlIiwiUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJ0YXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtIiwidGVybVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsIkZyYW1lU3Vic3RpdHV0aW9uIiwidGFyZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJQcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJzdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsIlNhdGlzZmllc0Fzc2VydGlvbiIsInByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJQcm9jZWR1cmVSZWZlcmVuY2UiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImdldFR5cGVOb2RlIiwiaXNQcm92aXNpb25hbCIsImdldFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJTaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJwcmVmaXhlZCIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJ0YXJnZXRSZWZlcmVuY2UiLCJyZXBsYWNlbWVudFJlZmVyZW5jZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiZ2V0UHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsImdldExhYmVsTm9kZXMiLCJwcmVtaXNlTm9kZXMiLCJnZXRQcmVtaXNlTm9kZXMiLCJnZXRBeGlvbU5vZGUiLCJnZXRMZW1tYU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldENvbmNsdXNpb25Ob2RlIiwiZ2V0VGhlb3JlbU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJ0ZXJtTm9kZXMiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJnZXREZXJpdmF0aW9uTm9kZSIsIm9jbnN0cnVjdG9yTm9kZSIsImdldFRlcm1Ob2RlIiwiYXNzdW1wdGlvbk5vZGVzIiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwiZ2V0VGVybU5vZGVzIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldENvbmplY3R1cmVOb2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJlcXVhbGl0eSIsImdldEVxdWFsaXR5Tm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsImdldEp1ZGdlbWVudE5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSIsImlzU3RlcE5vZGUiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImNvbmNsdXNpbm9Ob2RlIiwiaHlwb3RoZXNpc05vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJ2aWF0aW9uIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibGl0ZXJhbGx5IiwicmVmZXJlbmNlU3RyaW5nIiwiaW5zdGFudGlhdGVSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VHlwZUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSIsImlzU3VicHJvb2ZOb2RlIiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRUZXJtTm9kZSIsImdldFRhcmdldFRlcm1Ob2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50Tm9kZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsInlwb3RoZXNlcyIsInRhcmdldEZyYW1lTm9kZSIsImdldFRhcmdldEZyYW1lTm9kZSIsImlzUHJlZml4ZWQiLCJpc1Jlc29sdmVkIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50VGVybU5vZGUiLCJnZXRSZXBsYWNlbWVudFRlcm1Ob2RlIiwiZ2V0VHlwZVByZWZpeE5vZGUiLCJnZXRDb21iaW5hdG9yTm9kZSIsImdldE1ldGFUeXBlTm9kZSIsInJlcGxhY2VtZW50RnJhbWVOb2RlIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZU5vZGUiLCJnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImdldENvbnN0cnVjdG9yTm9kZSIsInRhcmdldFJlZmVyZW5jZU5vZGUiLCJnZXRUYXJnZXRSZWZlcmVuY2VOb2RlIiwidGFyZ2V0UmVmZXJuZWNlIiwidGFyZ2V0U3RhdGVtZW50Tm9kZSIsImdldFRhcmdldFN0YXRlbWVudE5vZGUiLCJyZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUiLCJnZXRSZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudE5vZGUiLCJtYXAiLCJoeXBvdGhlc2lzIiwic3RlcE9yU3VicHJvb2ZOb2RlcyIsImdldFN0ZXBPclN1YnByb29mTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXFYZ0JBO2VBQUFBOztRQTZsQkFDO2VBQUFBOztRQXVxQkFDO2VBQUFBOztRQXJ6QkFDO2VBQUFBOztRQTdyQkFDO2VBQUFBOztRQThsQkFDO2VBQUFBOztRQTdHQUM7ZUFBQUE7O1FBdzFCQUM7ZUFBQUE7O1FBL21DQUM7ZUFBQUE7O1FBOFVBQztlQUFBQTs7UUFwVUFDO2VBQUFBOztRQTBhQUM7ZUFBQUE7O1FBcmNBQztlQUFBQTs7UUF3aUJBQztlQUFBQTs7UUFuTkFDO2VBQUFBOztRQXMxQkFDO2VBQUFBOztRQXRtQ0FDO2VBQUFBOztRQXlLQUM7ZUFBQUE7O1FBNHhCQUM7ZUFBQUE7O1FBam1DQUM7ZUFBQUE7O1FBcWhDQUM7ZUFBQUE7O1FBZ0tBQztlQUFBQTs7UUFsN0JBQztlQUFBQTs7UUE0dUJBQztlQUFBQTs7UUF4MkJBQztlQUFBQTs7UUFzYkFDO2VBQUFBOztRQXhrQkFD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