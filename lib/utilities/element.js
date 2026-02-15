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
function equalityFromStatementNode(statementNode, context) {
    var equality = null;
    var equalityNode = statementNode.getEqualityNode();
    if (equalityNode !== null) {
        var node = equalityNode, string = context.nodeAsString(node), leftTerm = leftTermFromEqualityNode(equalityNode, context), rightTerm = rightTermFromEqualityNode(equalityNode, context);
        equality = new Equality(context, string, node, leftTerm, rightTerm);
    }
    return equality;
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
    var VariableDeclaration = _elements.default.VariableDeclaration, node = variableDeclarationNode, string = context.nodeAsString(node), typeNode = variableDeclarationNode.getTypeNode(), provisional = variableDeclarationNode.isProvisional(), variableNode = variableDeclarationNode.getVariableNode(), type = typeFromTypeNode(typeNode, context), variable = variableFromVariableNode(variableNode, context), variableDeclaration = new VariableDeclaration(context, string, node, variable, type, provisional);
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
    var MetavariableDeclaration = _elements.default.MetavariableDeclaration, node = metavariableDeclarationNode, string = context.nodeAsString(node), metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariable = metavariableFromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariableDeclaration = new MetavariableDeclaration(context, string, node, metavariable, metaType);
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
        termSubstitution = termSubstitutionFromTermubstitutionNode(termSubstitutionNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXMsXG4gICAgICAgICBydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbixcbiAgICAgICAgIHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uLFxuICAgICAgICAgc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbixcbiAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyxcbiAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbixcbiAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZSA9IGJhc2VUeXBlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IG5vbWluYWxUeXBlTmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSB0eXBlTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBudWxsLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBudWxsLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gbnVsbDtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGVwTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwID0gbmV3IFN0ZXAoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSdWxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJ1bGVTdHJpbmcgPSBydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSxcbiAgICAgICAgbm9kZSA9IHJ1bGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IHJ1bGVTdHJpbmcsICAvLy9cbiAgICAgICAgcnVsZSA9IG5ldyBSdWxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvb2YsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gIHJldHVybiBydWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbmV3IExhYmVsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXJyb3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGVycm9yID0gbmV3IEVycm9yKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFGcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExlbW1hIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSA9IGxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG5vZGUgPSBsZW1tYU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBsZW1tYSA9IG5ldyBMZW1tYShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiBsZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9vZk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvb2YgPSBuZXcgUHJvb2YoY29udGV4dCwgc3RyaW5nLCBub2RlLCBkZXJpdmF0aW9uKTtcblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbUZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXhpb20gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gYXhpb21Ob2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IGF4aW9tTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbkZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2lzTm9kZXMgPSBzZWN0aW9uTm9kZS5nZXRIeXBvdGhlc2lzTm9kZXMoKSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCksXG4gICAgICAgIGF4aW9tID0gYXhpb21Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZW1tYSA9IGxlbW1hRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNlY3Rpb25TdHJpbmcgPSBzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNUb3BMZXZlbEFzc2VydGlvbihoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUpLFxuICAgICAgICBub2RlID0gc2VjdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBzZWN0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlKTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByZW1pc2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gcHJlbWlzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gdGhlb3JlbU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICB0aGVvcmVtID0gbmV3IFRoZW9yZW0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICBtZXRhVHlwZSA9IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb3BlcnR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5vZGUuZ2V0UHJvcGVydHlOYW1lKCksXG4gICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBwcm9wZXJ0eU5hbWUsICAvLy9cbiAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBub21pbmFsVHlwZU5hbWUpO1xuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mTm9kZSwgLy8vXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbihzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdWJwcm9vZlN0cmluZywgIC8vL1xuICAgICAgICBzdWJwcm9vZiA9IG5ldyBTdWJwcm9vZihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbik7XG5cbiAgcmV0dXJuIHN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRFcXVhbGl0eU5vZGUoKTtcblxuICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpO1xuXG4gICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcbiAgfVxuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gbmV3IERlZHVjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaWduYXR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2lnbmF0dXJlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudEZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBKdWRnZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGp1ZGdlbWVudCA9IG5ldyBKdWRnZW1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBmcmFtZSwgYXNzdW1wdGlvbik7XG5cbiAgcmV0dXJuIGp1ZGdlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlKG1ldGFMZW1tYU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhTGVtbWEgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSA9IG1ldGFMZW1tYU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBzdWJzdGl0dXRpb25zID0gbnVsbCxcbiAgICAgICAgbm9kZSA9IG1ldGFMZW1tYU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBtZXRhTGVtbWEgPSBuZXcgTWV0YUxlbW1hKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgcmV0dXJuIG1ldGFMZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gcGFyYW1ldGVyTm9kZS5nZXROYW1lKCksXG4gICAgICAgIGlkZW50aWZpZXIgPSBwYXJhbWV0ZXJOb2RlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIGlkZW50aWZpZXIpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBIeXBvdGhzaXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gaHlwb3RoZXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlciA9IG5ldyBIeXBvdGhzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBjb25qZWN0dXJlTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG5vZGUgPSBjb25qZWN0dXJlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIGNvbmplY3R1cmUgPSBuZXcgQ29uamVjdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiBjb25qZWN0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tYmluYXRvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbmNsdXNpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhc3N1bXB0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmF0aW9uRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVyaXZhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZXJpdmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlcml2YXRpb24gPSBuZXcgRGVyaXZhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0ZXBzT3JTdWJwcm9vZnMpO1xuXG4gIHJldHVybiBkZXJpdmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVQcmVmaXggfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZVByZWZpeE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGVQcmVmaXggPSBuZXcgVHlwZVByZWZpeChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtKTtcblxuICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VwcG9zaXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcXVpdmFsZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcXVpdmFsZW5jZU5vZGUsIC8vL1xuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlcXVpdmFsZW5jZVN0cmluZyA9IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zKHRlcm1zKSxcbiAgICAgICAgc3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmcsIC8vL1xuICAgICAgICBlcXVpdmFsZW5jZSA9IG5ldyBFcXVpdmFsZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKTtcblxuICByZXR1cm4gZXF1aXZhbGVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbUZyb21NZXRhdGhlb3JlbU5vZGUobWV0YXRoZW9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXRlaG9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSA9IG1ldGF0aGVvcmVtTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBub2RlID0gbWV0YUxlbW1hTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIG1ldGF0aGVvcmVtID0gbmV3IE1ldGF0ZWhvcmVtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBtZXRhVHlwZSA9IG51bGwsXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJEZXJpdmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YkRlcml2YXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJEZXJpdmF0aW9uID0gbmV3IFN1YkRlcml2YXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gc3ViRGVyaXZhdGlvbjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZUFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGVBc3NlcnRpb24gPSBuZXcgVHlwZUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpO1xuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocHJvY2VkdXJlUmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlQ2FsbFN0cmluZywgLy8vXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHBhcmFtZXRlcnMsIHByb2NlZHVyZVJlZmVyZW5jZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2YgPSBzdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcE9yU3VicHJvb2YgPSAoc3RlcCB8fCBzdWJwcm9vZik7XG5cbiAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlZmluZWRBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5pc05lZ2F0ZWQoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVmaW5lZEFzc2VydGlvbiA9IG5ldyBEZWZpbmVkQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpO1xuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb3BlcnR5UmVsYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBuZXcgUHJvcGVydHlSZWxhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb3BlcnR5LCB0ZXJtKTtcblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0YXJnZXRUZXJtID0gdGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlcGxhY2VtZW50VGVybSA9IHJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldFRlcm0sIHJlcGxhY2VtZW50VGVybSk7XG5cbiAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWVTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0YXJnZXRGcmFtZSA9IHRhcmdldEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRGcmFtZSwgcmVwbGFjZW1lbnRGcmFtZSk7XG5cbiAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb3BlcnR5QXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IG5ldyBQcm9wZXJ0eUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuXG4gIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJwcm9vZkFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50cyk7XG5cbiAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnRhaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5pc05lZ2F0ZWQoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gbmV3IENvbnRhaW5lZEFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2F0aXNmaWVzQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbmV3IFNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHNpZ25hdHVyZSwgcmVmZXJlbmNlKTtcblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZVJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKTtcblxuICByZXR1cm4gcHJvY2VkdXJlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICBwcm92aXNpb25hbCA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIHR5cGUsIHByb3Zpc2lvbmFsKTtcblxuICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4RGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLCAgLy8vXG4gICAgICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbiA9IG5ldyBUeXBlUHJlZml4RGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlUHJlZml4KTtcblxuICByZXR1cm4gdHlwZVByZWZpeERlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbWJpbmF0b3JEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb21iaW5hdG9yRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBjb21iaW5hdG9yKTtcblxuICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNpbXBsZVR5cGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByZWZpeGVkID0gcHJlZml4ZWRGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uID0gbmV3IFNpbXBsZVR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHByZWZpeGVkKTtcblxuICByZXR1cm4gc2ltcGxlVHlwZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0YXJnZXRSZWZlcmVuY2UgPSB0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVwbGFjZW1lbnRSZWZlcmVuY2UgPSByZXBsYWNlbWVudFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBuZXcgUmVmZXJlbmNlU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0UmVmZXJlbmNlLCByZXBsYWNlbWVudFJlZmVyZW5jZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVzb2x2ZWQgPSByZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gdGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlc29sdmVkLCBzdWJzdGl0dXRpb24sIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29uc3RydWN0b3IpO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbXBsZXhUeXBlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlZml4ZWQgPSBwcmVmaXhlZEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBuZXcgQ29tcGxleFR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHByZWZpeGVkKTtcblxuICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUsIG1ldGFUeXBlKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSBydWxlTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGVzID0gcnVsZU5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlbWlzZU5vZGVzID0gcnVsZU5vZGUuZ2V0UHJlbWlzZU5vZGVzKCksXG4gICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tUHJlbWlzZU5vZGVzKHByZW1pc2VOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGF4aW9tID0gbnVsbDtcblxuICBjb25zdCBheGlvbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRBeGlvbU5vZGUoKTtcblxuICBpZiAoYXhpb21Ob2RlICE9PSBudWxsKSB7XG4gICAgYXhpb20gPSBheGlvbUZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBheGlvbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsZW1tYSA9IG51bGw7XG5cbiAgY29uc3QgbGVtbWFOb2RlID0gc2VjdGlvbk5vZGUuZ2V0TGVtbWFOb2RlKCk7XG5cbiAgaWYgKGxlbW1hTm9kZSAhPT0gbnVsbCkge1xuICAgIGxlbW1hID0gbGVtbWFGcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0ZXBOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gc3RlcE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChyZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBjb25jbHVzaW9uTm9kZSA9IHJ1bGVOb2RlLmdldENvbmNsdXNpb25Ob2RlKCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRoZW9yZW0gPSBudWxsO1xuXG4gIGNvbnN0IHRoZW9yZW1Ob2RlID0gc2VjdGlvbk5vZGUuZ2V0VGhlb3JlbU5vZGUoKTtcblxuICBpZiAodGhlb3JlbU5vZGUgIT09IG51bGwpIHtcbiAgICB0aGVvcmVtID0gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBmcmFtZU5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZXMgPSBzaWduYXR1cmVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkZXJpdmF0aW9uTm9kZSA9IHByb29mTm9kZS5nZXREZXJpdmF0aW9uTm9kZSgpLFxuICAgICAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGRlcml2YXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShvY25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBvY25zdHJ1Y3Rvck5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZXMgPSBmcmFtZU5vZGUuZ2V0QXNzdW1wdGlvbk5vZGVzKCksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tQXNzdW1wdGlvbk5vZGVzKGFzc3VtcHRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IGVxdWl2YWxlbmNlTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBsYWJlbE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29uamVjdHVyZSA9IG51bGw7XG5cbiAgY29uc3QgY29uamVjdHVyZU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRDb25qZWN0dXJlTm9kZSgpO1xuXG4gIGlmIChjb25qZWN0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb25qZWN0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBkZWR1Y3Rpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGp1ZGdlbWVudCA9IG51bGw7XG5cbiAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0SnVkZ2VtZW50Tm9kZSgpO1xuXG4gIGlmIChqdWRnZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4ganVkZ2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwID0gbnVsbDtcblxuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZS5pc1N0ZXBOb2RlKCk7XG5cbiAgaWYgKHN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlKSB7XG4gICAgY29uc3Qgc3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGU7ICAvLy9cblxuICAgIHN0ZXAgPSBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEFzc3VtcHRpb25Ob2RlKCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lub05vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpbm9Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50O1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGh5cG90aGVzaXNOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gcHJlbWlzZU5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBzdWJwcm9vZk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7IC8vL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdWJEZXJpdmF0aW9uTm9kZSA9IHN1YnByb29mTm9kZS5nZXRTdWJEZXJpdmF0aW9uTm9kZSgpLFxuICAgICAgICBzdWJEZXJ2aWF0aW9uID0gc3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1YkRlcnZpYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICByZXR1cm4gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gbWV0YXZhcmlhYmxlU3RyaW5nLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSByZWZlcmVuY2VTdHJpbmcsICAvLy9cbiAgICAgICAgICByZWZlcmVuY2VOb2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0ZXBOb2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VHlwZUFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgY29uc3QgcHJvb2ZOb2RlID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdWJwcm9vZk9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZiA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSA9IHN1YnByb29mT3JTdWJwcm9vZk5vZGUuaXNTdWJwcm9vZk5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHN1YnByb29mT3JTdWJwcm9vZk5vZGU7ICAvLy9cblxuICAgIHN1YnByb29mID0gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlck5vZGVzID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZXMgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBzdXBwb3NpdGlvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZmluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGRlZmluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChkZWZpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5vZGUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRUZXJtTm9kZSgpLFxuICAgICAgICB0YXJnZXRUZXJtID0gdGVybUZyb21UZXJtTm9kZSh0YXJnZXRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRhcmdldFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZU5vZGUgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKTtcblxuICBpZiAoc2lnbmF0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvb2ZOb2RlID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0UHJvb2ZOb2RlKCksXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRMYWJlbE5vZGUoKSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmIChmcmFtZVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eUFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAocHJvcGVydHlBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOb2RlID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkgezBcbiAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29udGFpbmVkQXNzZXJ0aW9uID0gY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZXMoKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMoc3RhdGVtZW50Tm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHNpZ25hdHVyZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB5cG90aGVzZXMgPSBbXTtcblxuICByZXR1cm4geXBvdGhlc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIHRhcmdldEZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKHRhcmdldEZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRhcmdldEZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeGVkRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVmaXhlZCA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcmVmaXhlZCgpO1xuXG4gIHJldHVybiBwcmVmaXhlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXNvbHZlZCA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuaXNSZXNvbHZlZCgpO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlZHVjdGlvbk5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlZEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVmaXhlZCA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJlZml4ZWQoKTtcblxuICByZXR1cm4gcHJlZml4ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFByb2NlZHVyZVJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRUZXJtTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJlcGxhY2VtZW50VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlUHJlZml4Tm9kZSA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZVByZWZpeE5vZGUoKSxcbiAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgY29tYmluYXRvck5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLmdldENvbWJpbmF0b3JOb2RlKCksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldE1ldGFUeXBlTm9kZSgpLFxuICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudEZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudEZyYW1lTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKHJlcGxhY2VtZW50RnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZS5nZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IChmcmFtZVN1YnN0aXR1dGlvbiB8fCB0ZXJtU3Vic3RpdHV0aW9uKTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgY29uc3RydWN0b3JOb2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0Q29uc3RydWN0b3JOb2RlKCksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0UmVmZXJuZWNlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUodGFyZ2V0UmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRhcmdldFJlZmVybmVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSh0YXJnZXRTdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm11YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmIChmcmFtZVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZW1lbnRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRSZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXMgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4ge1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tUHJlbWlzZU5vZGVzKHByZW1pc2VOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBwcmVtaXNlcyA9IHByZW1pc2VOb2Rlcy5tYXAoKHByZW1pc2VOb2RlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZSA9IHByZW1pc2VGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMoc3RhdGVtZW50Tm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzZXMgPSBoeXBvdGhlc2lzTm9kZXMubWFwKChoeXBvdGhlc2VOb2RlKSA9PiB7XG4gICAgY29uc3QgaHlwb3RoZXNpcyA9IGh5cG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbk5vZGVzLm1hcCgoYXNzdW1wdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IGRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZXMgPSBzdWJEZXJpdmF0aW9uTm9kZS5nZXRTdGVwT3JTdWJwcm9vZk5vZGVzKCksXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwT3JTdWJwcm9vZk5vZGVzLm1hcCgoc3RlcE9yU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBzdGVwc09yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwc09yU3VicHJvb2ZzO1xufVxuXG4iXSwibmFtZXMiOlsiYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZSIsImFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2RlcyIsImFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZSIsImF4aW9tRnJvbUF4aW9tTm9kZSIsImF4aW9tRnJvbVNlY3Rpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uRnJvbVJ1bGVOb2RlIiwiY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUiLCJkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwiZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZSIsImRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlIiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZSIsImVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZSIsImVycm9yRnJvbUVycm9yTm9kZSIsImZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzIiwiaHlwb3RoZXNlc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlIiwiaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUiLCJqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsImxhYmVsc0Zyb21MYWJlbE5vZGVzIiwibGFiZWxzRnJvbVJ1bGVOb2RlIiwibGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsImxlbW1hRnJvbUxlbW1hTm9kZSIsImxlbW1hRnJvbVNlY3Rpb25Ob2RlIiwibWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdGhlb3JlbUZyb21NZXRhdGhlb3JlbU5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJlbWlzZUZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyIsInByZW1pc2VzRnJvbVJ1bGVOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwicHJvb2ZGcm9tUHJvb2ZOb2RlIiwicHJvb2ZGcm9tUnVsZU5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbVN0ZXBOb2RlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwicmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInJ1bGVGcm9tUnVsZU5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlIiwic2VjdGlvbkZyb21TZWN0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUiLCJzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlIiwic3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlIiwic3RhdGVtZW50RnJvbVByZW1pc2VOb2RlIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RlcE5vZGUiLCJzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzIiwic3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdGVwRnJvbVN0ZXBOb2RlIiwic3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwc09yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlIiwic3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlIiwic3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwic3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJ0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlIiwidGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwidGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwidGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZSIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJ0aGVvcmVtRnJvbVNlY3Rpb25Ob2RlIiwidGhlb3JlbUZyb21UaGVvcmVtTm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21UZXJtTm9kZSIsInR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbVR5cGVOb2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiY29udGV4dCIsInR5cGUiLCJiYXNlVHlwZSIsImJhc2VUeXBlRnJvbU5vdGhpbmciLCJUeXBlIiwiZWxlbWVudHMiLCJ0eXBlTmFtZSIsImdldFR5cGVOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJnZXRUeXBlUHJlZml4TmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwicHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwic3RlcE5vZGUiLCJTdGVwIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RlcCIsInJ1bGVOb2RlIiwiUnVsZSIsInByb29mIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwicnVsZVN0cmluZyIsInJ1bHNTdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwicnVsZSIsImxhYmVsTm9kZSIsIkxhYmVsIiwibWV0YXZhcmlhYmxlIiwibGFiZWwiLCJlcnJvck5vZGUiLCJFcnJvciIsImVycm9yIiwibGVtbWFOb2RlIiwiTGVtbWEiLCJ0b3BMZXZlbEFzc3NlcnRpb25Ob2RlIiwiZGVkdWN0aW9uIiwic3VwcG9zaXRpb25zIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsInRvcExldmVsQXNzc2VydGlvblN0cmluZyIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsImxlbW1hIiwiZnJhbWVOb2RlIiwiRnJhbWUiLCJhc3N1bXB0aW9ucyIsImZyYW1lIiwicHJvb2ZOb2RlIiwiUHJvb2YiLCJkZXJpdmF0aW9uIiwiYXhpb21Ob2RlIiwiQXhpb20iLCJheGlvbSIsInNlY3Rpb25Ob2RlIiwiaHlwb3RoZXNpc05vZGVzIiwiZ2V0SHlwb3RoZXNpc05vZGVzIiwidGhlb3JlbSIsImNvbmplY3R1cmUiLCJzZWN0aW9uU3RyaW5nIiwic2VjdGlvblN0cmluZ0Zyb21IeXBvdGhlc2VzVG9wTGV2ZWxBc3NlcnRpb24iLCJzZWN0aW9uIiwiU2VjdGlvbiIsInByZW1pc2VOb2RlIiwiUHJlbWlzZSIsInByb2NlZHVyZUNhbGwiLCJwcmVtaXNlIiwidGhlb3JlbU5vZGUiLCJUaGVvcmVtIiwibWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsInByb3BlcnR5Tm9kZSIsIlByb3BlcnR5IiwicHJvcGVydHlOYW1lIiwiZ2V0UHJvcGVydHlOYW1lIiwicHJvcGVydHkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsImlkZW50aWZpZXIiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsInZhcmlhYmxlIiwic3VicHJvb2ZOb2RlIiwiU3VicHJvb2YiLCJzdWJEZXJpdmF0aW9uIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZlN0cmluZ0Zyb21TdXBwb3NpdGlvbnNBbmRTdWJEZXJpdmF0aW9uIiwic3VicHJvb2YiLCJzdGF0ZW1lbnROb2RlIiwiZXF1YWxpdHkiLCJlcXVhbGl0eU5vZGUiLCJnZXRFcXVhbGl0eU5vZGUiLCJsZWZ0VGVybSIsImxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsInJpZ2h0VGVybSIsInJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJFcXVhbGl0eSIsImRlZHVjdGlvbk5vZGUiLCJEZWR1Y3Rpb24iLCJTdGF0ZW1lbnQiLCJzaWduYXR1cmVOb2RlIiwiU2lnbmF0dXJlIiwidGVybXMiLCJyZWZlcmVuY2VOb2RlIiwiUmVmZXJlbmNlIiwianVkZ2VtZW50Tm9kZSIsIkp1ZGdlbWVudCIsImFzc3VtcHRpb24iLCJqdWRnZW1lbnQiLCJtZXRhTGVtbWFOb2RlIiwiTWV0YUxlbW1hIiwibWV0YUxlbW1hTWV0YXRob3JlbU5vZGUiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJzdWJzdGl0dXRpb25zIiwibWV0YUxlbW1hIiwicGFyYW1ldGVyTm9kZSIsIlBhcmFtZXRlciIsImdldE5hbWUiLCJnZXRJZGVudGlmaWVyIiwicGFyYW1ldGVyIiwiaHlwb3RoZXNlTm9kZSIsIkh5cG90aHNpcyIsImNvbmplY3R1cmVOb2RlIiwiQ29uamVjdHVyZSIsImNvbWJpbmF0b3JOb2RlIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJjb25jbHVzaW9uTm9kZSIsIkNvbmNsdXNpb24iLCJhc3N1bXB0aW9uTm9kZSIsIkFzc3VtcHRpb24iLCJkZXJpdmF0aW9uTm9kZSIsIkRlcml2YXRpb24iLCJzdGVwc09yU3VicHJvb2ZzIiwidHlwZVByZWZpeE5vZGUiLCJUeXBlUHJlZml4IiwidGVybUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVGcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlUHJlZml4IiwiY29uc3RydWN0b3JOb2RlIiwiQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsInN1cHBvc2l0aW9uTm9kZSIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJlcXVpdmFsZW5jZU5vZGUiLCJFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlU3RyaW5nIiwiZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXMiLCJlcXVpdmFsZW5jZSIsIm1ldGF0aGVvcmVtTm9kZSIsIk1ldGF0ZWhvcmVtIiwibWV0YXRoZW9yZW0iLCJtZXRhdmFyaWFibGVOb2RlIiwiTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJzdWJEZXJpdmF0aW9uTm9kZSIsIlN1YkRlcml2YXRpb24iLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsIlR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJQcm9jZWR1cmVDYWxsIiwicGFyYW1ldGVycyIsInByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMiLCJzdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwT3JTdWJwcm9vZiIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiRGVmaW5lZEFzc2VydGlvbiIsIm5lZ2F0ZWQiLCJpc05lZ2F0ZWQiLCJkZWZpbmVkQXNzZXJ0aW9uIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiVGVybVN1YnN0aXR1dGlvbiIsInRhcmdldFRlcm0iLCJyZXBsYWNlbWVudFRlcm0iLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJ0YXJnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWUiLCJmcmFtZVN1YnN0aXR1dGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsIlByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJTdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJDb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwicHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwiZ2V0VHlwZU5vZGUiLCJpc1Byb3Zpc2lvbmFsIiwiZ2V0VmFyaWFibGVOb2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJUeXBlUHJlZml4RGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInByZWZpeGVkIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInRhcmdldFJlZmVyZW5jZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInJlc29sdmVkIiwic3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJDb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJnZXRQcm9vZk5vZGUiLCJsYWJlbE5vZGVzIiwiZ2V0TGFiZWxOb2RlcyIsInByZW1pc2VOb2RlcyIsImdldFByZW1pc2VOb2RlcyIsImdldEF4aW9tTm9kZSIsImdldExlbW1hTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0Q29uY2x1c2lvbk5vZGUiLCJnZXRUaGVvcmVtTm9kZSIsImdldEZyYW1lTm9kZSIsInRlcm1Ob2RlcyIsImdldEFzc3VtcHRpb25Ob2RlcyIsImdldERlcml2YXRpb25Ob2RlIiwib2Nuc3RydWN0b3JOb2RlIiwiZ2V0VGVybU5vZGUiLCJhc3N1bXB0aW9uTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Q29uamVjdHVyZU5vZGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJnZXRKdWRnZW1lbnROb2RlIiwic3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUiLCJpc1N0ZXBOb2RlIiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJjb25jbHVzaW5vTm9kZSIsImh5cG90aGVzaXNOb2RlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsImdldFN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVydmlhdGlvbiIsIm1ldGF2YXJpYWJsZVN0cmluZyIsImxpdGVyYWxseSIsInJlZmVyZW5jZVN0cmluZyIsImluc3RhbnRpYXRlUmVmZXJlbmNlIiwiZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsImdldFR5cGVBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZPclN1YnByb29mTm9kZSIsInN1YnByb29mT3JTdWJwcm9vZk5vZGVTdWJwcm9vZk5vZGUiLCJpc1N1YnByb29mTm9kZSIsInBhcmFtZXRlck5vZGVzIiwiZ2V0UGFyYW1ldGVyTm9kZXMiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0VGVybU5vZGUiLCJnZXRUYXJnZXRUZXJtTm9kZSIsImdldERlZHVjdGlvbk5vZGUiLCJnZXRTaWduYXR1cmVOb2RlIiwiZ2V0TGFiZWxOb2RlIiwiZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudE5vZGVzIiwiZ2V0U3RhdGVtZW50Tm9kZXMiLCJ5cG90aGVzZXMiLCJ0YXJnZXRGcmFtZU5vZGUiLCJnZXRUYXJnZXRGcmFtZU5vZGUiLCJpc1ByZWZpeGVkIiwiaXNSZXNvbHZlZCIsImdldFByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJyZXBsYWNlbWVudFRlcm1Ob2RlIiwiZ2V0UmVwbGFjZW1lbnRUZXJtTm9kZSIsImdldFR5cGVQcmVmaXhOb2RlIiwiZ2V0Q29tYmluYXRvck5vZGUiLCJnZXRNZXRhVHlwZU5vZGUiLCJyZXBsYWNlbWVudEZyYW1lTm9kZSIsImdldFJlcGxhY2VtZW50RnJhbWVOb2RlIiwiZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJnZXRDb25zdHJ1Y3Rvck5vZGUiLCJ0YXJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0VGFyZ2V0UmVmZXJlbmNlTm9kZSIsInRhcmdldFJlZmVybmVjZSIsInRhcmdldFN0YXRlbWVudE5vZGUiLCJnZXRUYXJnZXRTdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlIiwiZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwibWFwIiwiaHlwb3RoZXNpcyIsInN0ZXBPclN1YnByb29mTm9kZXMiLCJnZXRTdGVwT3JTdWJwcm9vZk5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUEyWGdCQTtlQUFBQTs7UUFta0JBQztlQUFBQTs7UUF1cUJBQztlQUFBQTs7UUEzeEJBQztlQUFBQTs7UUFuc0JBQztlQUFBQTs7UUFvbUJBQztlQUFBQTs7UUE3R0FDO2VBQUFBOztRQTh6QkFDO2VBQUFBOztRQXJsQ0FDO2VBQUFBOztRQThVQUM7ZUFBQUE7O1FBcFVBQztl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