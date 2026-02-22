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
    get nameFromTypeNode () {
        return nameFromTypeNode;
    },
    get nominalTypeNameFromTypeNode () {
        return nominalTypeNameFromTypeNode;
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
    get prefixNameFromTypeNode () {
        return prefixNameFromTypeNode;
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
    get propertiesFromTypeNode () {
        return propertiesFromTypeNode;
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
    get provisionalFromConstructorDeclarationNode () {
        return provisionalFromConstructorDeclarationNode;
    },
    get provisionalFromTypeNode () {
        return provisionalFromTypeNode;
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
    get stepOrSubproofFromStepOrSubproofNode () {
        return stepOrSubproofFromStepOrSubproofNode;
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
    get superTypesFromTypeNode () {
        return superTypesFromTypeNode;
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
    get typeFromConstructorDeclarationNode () {
        return typeFromConstructorDeclarationNode;
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
        var Type = _elements.default.Type, node = typeNode, name = nameFromTypeNode(typeNode, context), prefixName = prefixNameFromTypeNode(typeNode, context), superTypes = superTypesFromTypeNode(typeNode, context), properties = propertiesFromTypeNode(typeNode, context), provisional = provisionalFromTypeNode(typeNode, context), nominalTypeName = nominalTypeNameFromTypeNode(typeNode, context), typeString = (0, _string.typeStringFromNominalTypeName)(nominalTypeName), string = typeString; ///
        context = null;
        type = new Type(context, string, node, name, prefixName, superTypes, properties, provisional);
    }
    return type;
}
function termFromTermNode(termNode, context) {
    var Term = _elements.default.Term, node = termNode, string = context.nodeAsString(node), type = typeFromTermNode(termNode, context);
    context = null;
    var term = new Term(context, string, node, type);
    return term;
}
function stepFromStepNode(stepNode, context) {
    var Step = _elements.default.Step, node = stepNode, string = context.nodeAsString(node), statement = statementFromStepNode(stepNode, context), reference = referenceFromStepNode(stepNode, context), satisfiesAssertion = satisfiesAssertionFromStepNode(stepNode, context);
    context = null;
    var step = new Step(context, string, node, statement, reference, satisfiesAssertion);
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
    var Frame = _elements.default.Frame, node = frameNode, string = context.nodeAsString(node), assumptions = assumptionsFromFrameNode(frameNode, context), metavariable = metavariableFromFrameNode(frameNode, context);
    context = null;
    var frame = new Frame(context, string, node, assumptions, metavariable);
    return frame;
}
function proofFromProofNode(proofNode, context) {
    var Proof = _elements.default.Proof, node = proofNode, string = null, derivation = derivationFromProofNode(proofNode, context);
    context = null;
    var proof = new Proof(context, string, node, derivation);
    return proof;
}
function axiomFromAxiomNode(axiomNode, context) {
    var Axiom = _elements.default.Axiom, topLevelAsssertionNode = axiomNode, proof = proofFromTopLevelAssertionNode(topLevelAsssertionNode, context), labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context), deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context), suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context), signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context), hypotheses = [], topLevelAsssertionString = (0, _string.topLevelAssertionStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = axiomNode, string = topLevelAsssertionString, axiom = new Axiom(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return axiom;
}
function sectionFromSectionNode(sectionNode, context) {
    var hypothesisNodes = sectionNode.getHypothesisNodes(), hypotheses = hypothesesFromHypothesisNodes(hypothesisNodes, context), axiom = axiomFromSectionNode(sectionNode, context), lemma = lemmaFromSectionNode(sectionNode, context), theorem = theoremFromSectionNode(sectionNode, context), conjecture = conjectureFromSectionNode(sectionNode, context), sectionString = (0, _string.sectionStringFromHypothesesTopLevelAssertion)(hypotheses, axiom, lemma, theorem, conjecture), node = sectionNode, string = sectionString; ///
    context = null;
    var section = new Section(context, string, node, hypotheses, axiom, lemma, theorem, conjecture);
    return section;
}
function premiseFromPremiseNode(premiseNode, context) {
    var Premise = _elements.default.Premise, node = premiseNode, string = context.nodeAsString(node), statement = statementFromPremiseNode(premiseNode, context), procedureCall = procedureCallFromPremiseNode(premiseNode, context);
    context = null;
    var premise = new Premise(context, string, node, statement, procedureCall);
    return premise;
}
function theoremFromTheoremNode(theoremNode, context) {
    var Theorem = _elements.default.Theorem, topLevelAsssertionNode = theoremNode, proof = proofFromTopLevelAssertionNode(topLevelAsssertionNode, context), labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context), deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context), suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context), signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context), hypotheses = [], topLevelAsssertionString = (0, _string.topLevelAssertionStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = theoremNode, string = topLevelAsssertionString, theorem = new Theorem(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return theorem;
}
function metaTypeFromMetaTypeNode(metaTypeNode, context) {
    var metaTypeName = metaTypeNode.getMetaTypeName(), metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
    return metaType;
}
function propertyFromPropertyNode(propertyNode, context) {
    var Property = _elements.default.Property, node = propertyNode, string = context.nodeAsString(node), propertyName = propertyNode.getPropertyName(), nominalTypeName = null, name = propertyName; ///
    context = null;
    var property = new Property(context, string, node, name, nominalTypeName);
    return property;
}
function variableFromVariableNode(variableNode, context) {
    var Variable = _elements.default.Variable, node = variableNode, string = context.nodeAsString(node), type = null, identifier = identifierFromVarialbeNode(variableNode, context), propertyRelations = [];
    context = null;
    var variable = new Variable(context, string, node, type, identifier, propertyRelations);
    return variable;
}
function subproofFromSubproofNode(subproofNode, context) {
    var Subproof = _elements.default.Subproof, node = subproofNode, suppositions = suppositionsFromSubproofNode(subproofNode, context), subDerivation = subDerivationFromSubproofNode(subproofNode, context), subproofString = (0, _string.subproofStringFromSuppositionsAndSubDerivation)(suppositions, subDerivation, context), string = subproofString; ///
    context = null;
    var subproof = new Subproof(context, string, node, suppositions, subDerivation);
    return subproof;
}
function equalityFromEqualityNode(equalityNode, context) {
    var Equality = _elements.default.Equality, node = equalityNode, string = context.nodeAsString(node), leftTerm = leftTermFromEqualityNode(equalityNode, context), rightTerm = rightTermFromEqualityNode(equalityNode, context);
    context = null;
    var equality = new Equality(context, string, node, leftTerm, rightTerm);
    return equality;
}
function deductionFromDeductionNode(deductionNode, context) {
    var Deduction = _elements.default.Deduction, node = deductionNode, string = context.nodeAsString(node), statement = statementFromDeductionNode(deductionNode, context);
    context = null;
    var deduction = new Deduction(context, string, node, statement);
    return deduction;
}
function statementFromStatementNode(statementNode, context) {
    var Statement = _elements.default.Statement, node = statementNode, string = context.nodeAsString(node);
    context = null;
    var statement = new Statement(context, string, node);
    return statement;
}
function signatureFromSignatureNode(signatureNode, context) {
    var Signature = _elements.default.Signature, node = signatureNode, string = context.nodeAsString(node), terms = termsFromSignatureNode(signatureNode, context);
    context = null;
    var signature = new Signature(context, string, node, terms);
    return signature;
}
function referenceFromReferenceNode(referenceNode, context) {
    var Reference = _elements.default.Reference, node = referenceNode, string = context.nodeAsString(node), metavariable = metavariableFromReferenceNode(referenceNode, context), reference = new Reference(context, string, node, metavariable);
    return reference;
}
function judgementFromJudgementNode(judgementNode, context) {
    var Judgement = _elements.default.Judgement, node = judgementNode, string = context.nodeAsString(node), frame = frameFromJudgementNode(judgementNode, context), assumption = assumptionFromJudgementNode(judgementNode, context);
    context = null;
    var judgement = new Judgement(context, string, node, frame, assumption);
    return judgement;
}
function metaLemmaFromMetaLemmaNode(metaLemmaNode, context) {
    var MetaLemma = _elements.default.MetaLemma, metaLemmaMetathoremNode = metaLemmaNode, proof = proofFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), label = labelFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), deduction = deductionFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), suppositions = suppositionsFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), topLevelMetaAssertionString = (0, _string.topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction)(label, suppositions, deduction), substitutions = null, node = metaLemmaNode, string = topLevelMetaAssertionString, metaLemma = new MetaLemma(context, string, node, label, suppositions, deduction, proof, substitutions);
    return metaLemma;
}
function parameterFromParameterNode(parameterNode, context) {
    var Parameter = _elements.default.Parameter, node = parameterNode, string = context.nodeAsString(node), name = parameterNode.getName(), identifier = parameterNode.getIdentifier();
    context = null;
    var parameter = new Parameter(context, string, node, name, identifier);
    return parameter;
}
function hypothesisFromHypothesisNode(hypotheseNode, context) {
    var Hypothsis = _elements.default.Hypothsis, node = hypotheseNode, string = context.nodeAsString(node), statement = statementFromHypothesisNode(hypotheseNode, context);
    context = null;
    var hypohtesis = new Hypothsis(context, string, node, statement);
    return hypohtesis;
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
    var Conclusion = _elements.default.Conclusion, node = conclusionNode, string = context.nodeAsString(node), statement = statementFromConclusionNode(conclusionNode, context);
    context = null;
    var conclusion = new Conclusion(context, string, node, statement);
    return conclusion;
}
function assumptionFromAssumptionNode(assumptionNode, context) {
    var Assumption = _elements.default.Assumption, node = assumptionNode, string = context.nodeAsString(node), reference = referenceFromAssumptionNode(assumptionNode, context), statement = statementFromAssumptionNode(assumptionNode, context);
    context = null;
    var assumption = new Assumption(context, string, node, reference, statement);
    return assumption;
}
function derivationFromDerivationNode(derivationNode, context) {
    var Derivation = _elements.default.Derivation, node = derivationNode, string = null, stepsOrSubproofs = stepsOrSubproofsFromDerivationNode(derivationNode, context);
    context = null;
    var derivation = new Derivation(context, string, node, stepsOrSubproofs);
    return derivation;
}
function typePrefixFromTypePrefixNode(typePrefixNode, context) {
    var TypePrefix = _elements.default.TypePrefix, node = typePrefixNode, string = context.nodeAsString(node), term = termFromTypePrefixNode(typePrefixNode, context), type = typeFromTypePrefixNode(typePrefixNode, context);
    context = null;
    var typePrefix = new TypePrefix(context, string, node, term, type);
    return typePrefix;
}
function constructorFromConstructorNode(constructorNode, context) {
    var Constructor = _elements.default.Constructor, node = constructorNode, string = context.nodeAsString(node), term = termFromConstructorNode(constructorNode, context), constructor = new Constructor(context, string, node, term);
    return constructor;
}
function suppositionFromSuppositionNode(suppositionNode, context) {
    var Supposition = _elements.default.Supposition, node = suppositionNode, string = context.nodeAsString(node), statement = statementFromSuppositionNode(suppositionNode, context), procedureCall = procedureCallFromSuppositionNode(suppositionNode, context);
    context = null;
    var supposition = new Supposition(context, string, node, statement, procedureCall);
    return supposition;
}
function equivalenceFromEquivalenceNode(equivalenceNode, context) {
    var Equivalence = _elements.default.Equivalence, node = equivalenceNode, terms = termsFromEquivalenceNode(equivalenceNode, context), equivalenceString = (0, _string.equivalenceStringFromTerms)(terms), string = equivalenceString; ///
    context = null;
    var equivalence = new Equivalence(context, string, node, terms);
    return equivalence;
}
function metatheoremFromMetatheoremNode(metatheoremNode, context) {
    var Metatehorem = _elements.default.Metatehorem, metaLemmaMetathoremNode = metatheoremNode, proof = proofFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), label = labelFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), deduction = deductionFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), suppositions = suppositionsFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), topLevelMetaAssertionString = (0, _string.topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction)(label, suppositions, deduction), node = metatheoremNode, string = topLevelMetaAssertionString, substitutions = null, metatheorem = new Metatehorem(context, string, node, label, suppositions, deduction, proof, substitutions);
    return metatheorem;
}
function metavariableFromMetavariableNode(metavariableNode, context) {
    var Metavariable = _elements.default.Metavariable, node = metavariableNode, string = context.nodeAsString(node), metavariableName = metavariableNode.getMetavariableName(), name = metavariableName, type = null, metaType = null, metavariable = new Metavariable(context, string, node, name, type, metaType);
    return metavariable;
}
function subDerivationFromSubDerivationNode(subDerivationNode, context) {
    var SubDerivation = _elements.default.SubDerivation, node = subDerivationNode, string = null, stepsOrSubproofs = stepsOrSubproofsFromSubDerivationNode(subDerivationNode, context);
    context = null;
    var subDerivation = new SubDerivation(context, string, node, stepsOrSubproofs);
    return subDerivation;
}
function typeAssertionFromTypeAssertionNode(typeAssertionNode, context) {
    var TypeAssertion = _elements.default.TypeAssertion, node = typeAssertionNode, string = context.nodeAsString(node), term = termFromTypeAssertionNode(typeAssertionNode, context), type = typeFromTypeAssertionNode(typeAssertionNode, context);
    context = null;
    var typeAssertion = new TypeAssertion(context, string, node, term, type);
    return typeAssertion;
}
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    var ProcedureCall = _elements.default.ProcedureCall, parameters = parametersFromProcedureCallNode(procedureCallNode, context), procedureReference = procedureReferenceFromProcedureCallNode(procedureCallNode, context), procedureCallString = (0, _string.procedureCallStringFromProcedureReferenceAndParameters)(procedureReference, parameters), node = procedureCallNode, string = procedureCallString; ///
    context = null;
    var procedureCall = new ProcedureCall(context, string, node, parameters, procedureReference);
    return procedureCall;
}
function stepOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context) {
    var step = stepFromStepOrSubproofNode(stepOrSubproofNode, context), subproof = subproofFromStepOrSubproofNode(stepOrSubproofNode, context), stepOrSubproof = step || subproof;
    return stepOrSubproof;
}
function definedAssertionFromDefinedAssertionNode(definedAssertionNode, context) {
    var DefinedAssertion = _elements.default.DefinedAssertion, node = definedAssertionNode, string = context.nodeAsString(node), negated = definedAssertionNode.isNegated(), term = termFromDefinedAssertionNode(definedAssertionNode, context), frame = frameFromDefinedAssertionNode(definedAssertionNode, context);
    context = null;
    var definedAssertion = new DefinedAssertion(context, string, node, term, frame, negated);
    return definedAssertion;
}
function propertyRelationFromPropertyRelationNode(propertyRelationNode, context) {
    var PropertyRelation = _elements.default.PropertyRelation, node = propertyRelationNode, string = context.nodeAsString(node), property = propertyFromPropertyRelationNode(propertyRelationNode, context), term = termFromPropertyRelationNode(propertyRelationNode, context);
    context = null;
    var propertyRelation = new PropertyRelation(context, string, node, property, term);
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
    var PropertyAssertion = _elements.default.PropertyAssertion, node = propertyAssertionNode, string = context.nodeAsString(node), term = termFromPropertyAssertionNode(propertyAssertionNode, context), propertyRelation = propertyRelationFromPropertyAssertionNode(propertyAssertionNode, context);
    context = null;
    var propertyAssertion = new PropertyAssertion(context, string, node, term, propertyRelation);
    return propertyAssertion;
}
function subproofAssertionFromSubproofAssertionNode(subproofAssertionNode, context) {
    var SubproofAssertion = _elements.default.SubproofAssertion, node = subproofAssertionNode, string = context.nodeAsString(node), statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context);
    context = null;
    var subproofAssertion = new SubproofAssertion(context, string, node, statements);
    return subproofAssertion;
}
function containedAssertionFromContainedAssertionNode(containedAssertionNode, context) {
    var ContainedAssertion = _elements.default.ContainedAssertion, node = containedAssertionNode, string = context.nodeAsString(node), negated = containedAssertionNode.isNegated(), term = termFromContainedAssertionNode(containedAssertionNode, context), frame = frameFromContainedAssertionNode(containedAssertionNode, context), statement = statementFromContainedAssertionNode(containedAssertionNode, context);
    context = null;
    var containedAssertion = new ContainedAssertion(context, string, node, term, frame, negated, statement);
    return containedAssertion;
}
function satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    var SatisfiesAssertion = _elements.default.SatisfiesAssertion, node = satisfiesAssertionNode, string = context.nodeAsString(node), signature = signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context), reference = referenceFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
    context = null;
    var satisfiesAssertion = new SatisfiesAssertion(context, string, node, signature, reference);
    return satisfiesAssertion;
}
function procedureReferenceFromProcedureReferenceNode(procedureReferenceNode, context) {
    var ProcedureReference = _elements.default.ProcedureReference, node = procedureReferenceNode, string = context.nodeAsString(node), name = nameFromProcedureReferenceNode(procedureReferenceNode, context);
    context = null;
    var procedureRefereence = new ProcedureReference(context, string, node, name);
    return procedureRefereence;
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
    var ConstructorDeclaration = _elements.default.ConstructorDeclaration, node = constructorDeclarationNode, string = context.nodeAsString(node), type = typeFromConstructorDeclarationNode(constructorDeclarationNode, context), provisional = provisionalFromConstructorDeclarationNode(constructorDeclarationNode, context), constructor = constructorFromConstructorDeclarationNode(constructorDeclarationNode, context), constructorDeclaration = new ConstructorDeclaration(context, string, node, type, provisional, constructor);
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
function nameFromTypeNode(typeNode, context) {
    var typeName = typeNode.getTypeName(), name = typeName; ///
    return name;
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
function superTypesFromTypeNode(typeNode, context) {
    var superTypes = null;
    return superTypes;
}
function propertiesFromTypeNode(typeNode, context) {
    var properties = null;
    return properties;
}
function prefixNameFromTypeNode(typeNode, context) {
    var typePrefixName = typeNode.getTypePrefixName(), prefixName = typePrefixName; ///
    return prefixName;
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
function provisionalFromTypeNode(typeNode, context) {
    var provisional = null;
    return provisional;
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
function nominalTypeNameFromTypeNode(typeNode, context) {
    var nominalTypeName = typeNode.getNominalTypeName();
    return nominalTypeName;
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
function typeFromConstructorDeclarationNode(constructorDeclarationNode, context) {
    var typeNode = constructorDeclarationNode.getTypeNode(), type = typeFromTypeNode(typeNode, context);
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
function provisionalFromConstructorDeclarationNode(constructorDeclarationNode, context) {
    var provisional = constructorDeclarationNode.isProvisional();
    return provisional;
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
        var stepOrSubproof = stepOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context);
        return stepOrSubproof;
    });
    return stepsOrSubproofs;
}
function stepsOrSubproofsFromSubDerivationNode(subDerivationNode, context) {
    var stepOrSubproofNodes = subDerivationNode.getStepOrSubproofNodes(), stepsOrSubproofs = stepOrSubproofNodes.map(function(stepOrSubproofNode) {
        var stepOrSubproof = stepOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context);
        return stepOrSubproof;
    });
    return stepsOrSubproofs;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zLFxuICAgICAgICAgdHlwZVN0cmluZ0Zyb21Ob21pbmFsVHlwZU5hbWUsXG4gICAgICAgICBydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbixcbiAgICAgICAgIHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uLFxuICAgICAgICAgc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbixcbiAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyxcbiAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbixcbiAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZSA9IGJhc2VUeXBlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBub2RlID0gdHlwZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHByZWZpeE5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZVN0cmluZ0Zyb21Ob21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICBzdHJpbmcgPSB0eXBlU3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3RlcCA9IG5ldyBTdGVwKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbik7XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUnVsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBydWxlU3RyaW5nID0gcnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiksXG4gICAgICAgIG5vZGUgPSBydWxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBydWxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb29mLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICByZXR1cm4gcnVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVycm9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVycm9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hRnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBsZW1tYU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gbGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgbGVtbWEgPSBuZXcgTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBmcmFtZSA9IG5ldyBGcmFtZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9vZk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9vZiA9IG5ldyBQcm9vZihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGRlcml2YXRpb24pO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBeGlvbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBheGlvbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gYXhpb21Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgYXhpb20gPSBuZXcgQXhpb20oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gYXhpb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzaXNOb2RlcyA9IHNlY3Rpb25Ob2RlLmdldEh5cG90aGVzaXNOb2RlcygpLFxuICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXhpb20gPSBheGlvbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlbW1hID0gbGVtbWFGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2VjdGlvblN0cmluZyA9IHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uKGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSksXG4gICAgICAgIG5vZGUgPSBzZWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHNlY3Rpb25TdHJpbmc7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSk7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcmVtaXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gcHJlbWlzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gdGhlb3JlbU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICB0aGVvcmVtID0gbmV3IFRoZW9yZW0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5Tm9kZS5nZXRQcm9wZXJ0eU5hbWUoKSxcbiAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IHByb3BlcnR5TmFtZTsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbm9taW5hbFR5cGVOYW1lKTtcblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW107XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mTm9kZSwgLy8vXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbihzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdWJwcm9vZlN0cmluZzsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mID0gbmV3IFN1YnByb29mKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKTtcblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXF1YWxpdHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXF1YWxpdHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBkZWR1Y3Rpb24gPSBuZXcgRGVkdWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpZ25hdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudEZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBKdWRnZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKTtcblxuICByZXR1cm4ganVkZ2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGFMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YUxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBub2RlID0gbWV0YUxlbW1hTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIG1ldGFMZW1tYSA9IG5ldyBNZXRhTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICByZXR1cm4gbWV0YUxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldE5hbWUoKSxcbiAgICAgICAgaWRlbnRpZmllciA9IHBhcmFtZXRlck5vZGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBpZGVudGlmaWVyKTtcblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgSHlwb3Roc2lzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGh5cG90aGVzZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGh5cG9odGVzaXMgPSBuZXcgSHlwb3Roc2lzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gaHlwb2h0ZXNpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSA9IGNvbmplY3R1cmVOb2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IGNvbmplY3R1cmVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgY29uamVjdHVyZSA9IG5ldyBDb25qZWN0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21iaW5hdG9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uY2x1c2lvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBjb25jbHVzaW9uID0gbmV3IENvbmNsdXNpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmF0aW9uRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVyaXZhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZXJpdmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZGVyaXZhdGlvbiA9IG5ldyBEZXJpdmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RlcHNPclN1YnByb29mcyk7XG5cbiAgcmV0dXJuIGRlcml2YXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZVByZWZpeCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlUHJlZml4Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0eXBlUHJlZml4ID0gbmV3IFR5cGVQcmVmaXgoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25zdHJ1Y3Rvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1cHBvc2l0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcXVpdmFsZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcXVpdmFsZW5jZU5vZGUsIC8vL1xuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlcXVpdmFsZW5jZVN0cmluZyA9IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zKHRlcm1zKSxcbiAgICAgICAgc3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmc7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtRnJvbU1ldGF0aGVvcmVtTm9kZShtZXRhdGhlb3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdGVob3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YXRoZW9yZW1Ob2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IG1ldGF0aGVvcmVtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBtZXRhdGhlb3JlbSA9IG5ldyBNZXRhdGVob3JlbShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgbWV0YVR5cGUgPSBudWxsLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSwgbWV0YVR5cGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3ViRGVyaXZhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdWJEZXJpdmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBzdWJEZXJpdmF0aW9uID0gbmV3IFN1YkRlcml2YXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gc3ViRGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb24gPSBuZXcgVHlwZUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpO1xuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocHJvY2VkdXJlUmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlQ2FsbFN0cmluZzsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcCA9IHN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXBPclN1YnByb29mID0gKHN0ZXAgfHwgc3VicHJvb2YpO1xuXG4gIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWZpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvbiA9IG5ldyBEZWZpbmVkQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpO1xuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb3BlcnR5UmVsYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IG5ldyBQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvcGVydHksIHRlcm0pO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRhcmdldFRlcm0gPSB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKTtcblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRhcmdldEZyYW1lID0gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldEZyYW1lLCByZXBsYWNlbWVudEZyYW1lKTtcblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlBc3NlcnRpb24gPSBuZXcgUHJvcGVydHlBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcblxuICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VicHJvb2ZBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50cyk7XG5cbiAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnRhaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5pc05lZ2F0ZWQoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb24gPSBuZXcgQ29udGFpbmVkQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTYXRpc2ZpZXNBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG5ldyBTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzaWduYXR1cmUsIHJlZmVyZW5jZSk7XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVSZWZlcmVlbmNlID0gbmV3IFByb2NlZHVyZVJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgcHJvdmlzaW9uYWwgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgVmFyaWFibGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHZhcmlhYmxlLCBwcm92aXNpb25hbCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZVByZWZpeERlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb24gPSBuZXcgVHlwZVByZWZpeERlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZVByZWZpeCk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21iaW5hdG9yRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29tYmluYXRvckRlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29tYmluYXRvcik7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVmaXhlZCA9IHByZWZpeGVkRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IG5ldyBTaW1wbGVUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcmVmaXhlZCk7XG5cbiAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGFyZ2V0UmVmZXJlbmNlID0gdGFyZ2V0UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlID0gcmVwbGFjZW1lbnRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gbmV3IFJlZmVyZW5jZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldFJlZmVyZW5jZSwgcmVwbGFjZW1lbnRSZWZlcmVuY2UpO1xuXG4gIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlc29sdmVkID0gcmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KTtcblxuICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29uc3RydWN0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHByb3Zpc2lvbmFsLCBjb25zdHJ1Y3Rvcik7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVmaXhlZCA9IHByZWZpeGVkRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IG5ldyBDb21wbGV4VHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgcHJlZml4ZWQpO1xuXG4gIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGFUeXBlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICBuYW1lID0gdHlwZU5hbWU7ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG51bGw7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHByb29mTm9kZSA9IHJ1bGVOb2RlLmdldFByb29mTm9kZSgpO1xuXG4gIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBydWxlTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVtaXNlTm9kZXMgPSBydWxlTm9kZS5nZXRQcmVtaXNlTm9kZXMoKSxcbiAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21QcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXhpb20gPSBudWxsO1xuXG4gIGNvbnN0IGF4aW9tTm9kZSA9IHNlY3Rpb25Ob2RlLmdldEF4aW9tTm9kZSgpO1xuXG4gIGlmIChheGlvbU5vZGUgIT09IG51bGwpIHtcbiAgICBheGlvbSA9IGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxlbW1hID0gbnVsbDtcblxuICBjb25zdCBsZW1tYU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRMZW1tYU5vZGUoKTtcblxuICBpZiAobGVtbWFOb2RlICE9PSBudWxsKSB7XG4gICAgbGVtbWEgPSBsZW1tYUZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RlcE5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBzdGVwTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cGVyVHlwZXMgPSBudWxsO1xuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc0Zyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0aWVzID0gbnVsbDtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeE5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpLFxuICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZTsgIC8vL1xuXG4gIHJldHVybiBwcmVmaXhOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBjb25jbHVzaW9uTm9kZSA9IHJ1bGVOb2RlLmdldENvbmNsdXNpb25Ob2RlKCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRoZW9yZW0gPSBudWxsO1xuXG4gIGNvbnN0IHRoZW9yZW1Ob2RlID0gc2VjdGlvbk5vZGUuZ2V0VGhlb3JlbU5vZGUoKTtcblxuICBpZiAodGhlb3JlbU5vZGUgIT09IG51bGwpIHtcbiAgICB0aGVvcmVtID0gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBmcmFtZU5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZXMgPSBzaWduYXR1cmVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkZXJpdmF0aW9uTm9kZSA9IHByb29mTm9kZS5nZXREZXJpdmF0aW9uTm9kZSgpLFxuICAgICAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGRlcml2YXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aXNpb25hbEZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUob2Nuc3RydWN0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gb2Nuc3RydWN0b3JOb2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2Rlcyhhc3N1bXB0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgIGxlZnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gZXF1aXZhbGVuY2VOb2RlLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb25qZWN0dXJlID0gbnVsbDtcblxuICBjb25zdCBjb25qZWN0dXJlTm9kZSA9IHNlY3Rpb25Ob2RlLmdldENvbmplY3R1cmVOb2RlKCk7XG5cbiAgaWYgKGNvbmplY3R1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmplY3R1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRFcXVhbGl0eU5vZGUoKTtcblxuICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZUFzc2VydGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllcjsgIC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gZGVkdWN0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBqdWRnZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEp1ZGdlbWVudE5vZGUoKTtcblxuICBpZiAoanVkZ2VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudEZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGp1ZGdlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RlcCA9IG51bGw7XG5cbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGUuaXNTdGVwTm9kZSgpO1xuXG4gIGlmIChzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSkge1xuICAgIGNvbnN0IHN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlOyAgLy8vXG5cbiAgICBzdGVwID0gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbWluYWxUeXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICByZXR1cm4gbm9taW5hbFR5cGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEFzc3VtcHRpb25Ob2RlKCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lub05vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpbm9Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50O1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGh5cG90aGVzaXNOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gcHJlbWlzZU5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBzdWJwcm9vZk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7IC8vL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdWJEZXJpdmF0aW9uTm9kZSA9IHN1YnByb29mTm9kZS5nZXRTdWJEZXJpdmF0aW9uTm9kZSgpLFxuICAgICAgICBzdWJEZXJ2aWF0aW9uID0gc3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1YkRlcnZpYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICByZXR1cm4gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gbWV0YXZhcmlhYmxlU3RyaW5nLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSByZWZlcmVuY2VTdHJpbmcsICAvLy9cbiAgICAgICAgICByZWZlcmVuY2VOb2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0ZXBOb2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VHlwZUFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgY29uc3QgcHJvb2ZOb2RlID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdWJwcm9vZk9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZiA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSA9IHN1YnByb29mT3JTdWJwcm9vZk5vZGUuaXNTdWJwcm9vZk5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHN1YnByb29mT3JTdWJwcm9vZk5vZGU7ICAvLy9cblxuICAgIHN1YnByb29mID0gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlck5vZGVzID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZXMgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBzdXBwb3NpdGlvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZmluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGRlZmluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChkZWZpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5vZGUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRUZXJtTm9kZSgpLFxuICAgICAgICB0YXJnZXRUZXJtID0gdGVybUZyb21UZXJtTm9kZSh0YXJnZXRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRhcmdldFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZU5vZGUgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKTtcblxuICBpZiAoc2lnbmF0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvb2ZOb2RlID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0UHJvb2ZOb2RlKCksXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRMYWJlbE5vZGUoKSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmIChmcmFtZVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eUFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAocHJvcGVydHlBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOb2RlID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHswXG4gIGxldCBjb250YWluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IGNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGVzKCksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzKHN0YXRlbWVudE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzaWduYXR1cmVOb2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeXBvdGhlc2VzID0gW107XG5cbiAgcmV0dXJuIHlwb3RoZXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldEZyYW1lTm9kZSgpLFxuICAgICAgICB0YXJnZXRGcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZSh0YXJnZXRGcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0YXJnZXRGcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlZml4ZWQgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJlZml4ZWQoKTtcblxuICByZXR1cm4gcHJlZml4ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVzb2x2ZWQgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmlzUmVzb2x2ZWQoKTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkZWR1Y3Rpb25Ob2RlID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlZml4ZWQgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5pc1ByZWZpeGVkKCk7XG5cbiAgcmV0dXJuIHByZWZpeGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50VGVybU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyZXBsYWNlbWVudFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVByZWZpeE5vZGUgPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLmdldFR5cGVQcmVmaXhOb2RlKCksXG4gICAgICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JOb2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZS5nZXRDb21iaW5hdG9yTm9kZSgpLFxuICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFUeXBlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhVHlwZU5vZGUoKSxcbiAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aXNpb25hbEZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm92aXNpb25hbCA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKTtcblxuICByZXR1cm4gcHJvdmlzaW9uYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRGcmFtZU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShyZXBsYWNlbWVudEZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50RnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25Ob2RlcyA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSAoZnJhbWVTdWJzdGl0dXRpb24gfHwgdGVybVN1YnN0aXR1dGlvbik7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldENvbnN0cnVjdG9yTm9kZSgpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRSZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHRhcmdldFJlZmVybmVjZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKHRhcmdldFJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0YXJnZXRSZWZlcm5lY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUodGFyZ2V0U3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRhcmdldFN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlbWVudFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRSZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCB0ZXJtcyA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21QcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VzID0gcHJlbWlzZU5vZGVzLm1hcCgocHJlbWlzZU5vZGUpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlID0gcHJlbWlzZUZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyhzdGF0ZW1lbnROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVycyA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyhoeXBvdGhlc2lzTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaHlwb3RoZXNlcyA9IGh5cG90aGVzaXNOb2Rlcy5tYXAoKGh5cG90aGVzZU5vZGUpID0+IHtcbiAgICBjb25zdCBoeXBvdGhlc2lzID0gaHlwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9KTtcblxuICByZXR1cm4gaHlwb3RoZXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2Rlcyhhc3N1bXB0aW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uTm9kZXMubWFwKChhc3N1bXB0aW9uTm9kZSkgPT4ge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uTm9kZXMubWFwKChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVzID0gZGVyaXZhdGlvbk5vZGUuZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcygpLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcE9yU3VicHJvb2ZOb2Rlcy5tYXAoKHN0ZXBPclN1YnByb29mTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mID0gc3RlcE9yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwc09yU3VicHJvb2ZzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVzID0gc3ViRGVyaXZhdGlvbk5vZGUuZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcygpLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcE9yU3VicHJvb2ZOb2Rlcy5tYXAoKHN0ZXBPclN1YnByb29mTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mID0gc3RlcE9yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwc09yU3VicHJvb2ZzO1xufVxuIl0sIm5hbWVzIjpbImFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMiLCJhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUiLCJheGlvbUZyb21BeGlvbU5vZGUiLCJheGlvbUZyb21TZWN0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbkZyb21SdWxlTm9kZSIsImNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlIiwiZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsImRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUiLCJkZXJpdmF0aW9uRnJvbVByb29mTm9kZSIsImVxdWFsaXR5RnJvbUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5RnJvbVN0YXRlbWVudE5vZGUiLCJlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUiLCJlcnJvckZyb21FcnJvck5vZGUiLCJmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21GcmFtZU5vZGUiLCJmcmFtZUZyb21KdWRnZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyIsImh5cG90aGVzZXNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwiaHlwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZSIsImlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlIiwianVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsImxhYmVsRnJvbUxhYmVsTm9kZSIsImxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJsYWJlbHNGcm9tTGFiZWxOb2RlcyIsImxhYmVsc0Zyb21SdWxlTm9kZSIsImxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJsZW1tYUZyb21MZW1tYU5vZGUiLCJsZW1tYUZyb21TZWN0aW9uTm9kZSIsIm1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlIiwibWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlIiwibWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIiwibmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwibmFtZUZyb21UeXBlTm9kZSIsIm5vbWluYWxUeXBlTmFtZUZyb21UeXBlTm9kZSIsInBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcmVmaXhOYW1lRnJvbVR5cGVOb2RlIiwicHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJlbWlzZUZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyIsInByZW1pc2VzRnJvbVJ1bGVOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwicHJvb2ZGcm9tUHJvb2ZOb2RlIiwicHJvb2ZGcm9tUnVsZU5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwicHJvcGVydGllc0Zyb21UeXBlTm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3Zpc2lvbmFsRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwicHJvdmlzaW9uYWxGcm9tVHlwZU5vZGUiLCJyZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tU3RlcE5vZGUiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJyZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwicmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsInJ1bGVGcm9tUnVsZU5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlIiwic2VjdGlvbkZyb21TZWN0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUiLCJzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlIiwic3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlIiwic3RhdGVtZW50RnJvbVByZW1pc2VOb2RlIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RlcE5vZGUiLCJzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzIiwic3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdGVwRnJvbVN0ZXBOb2RlIiwic3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlIiwic3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUiLCJzdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN1cGVyVHlwZXNGcm9tVHlwZU5vZGUiLCJzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlIiwic3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwic3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJ0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlIiwidGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwidGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwidGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZSIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJ0aGVvcmVtRnJvbVNlY3Rpb25Ob2RlIiwidGhlb3JlbUZyb21UaGVvcmVtTm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVGVybU5vZGUiLCJ0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21UeXBlTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwiVHlwZSIsImVsZW1lbnRzIiwibm9kZSIsIm5hbWUiLCJwcmVmaXhOYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsIm5vbWluYWxUeXBlTmFtZSIsInR5cGVTdHJpbmciLCJ0eXBlU3RyaW5nRnJvbU5vbWluYWxUeXBlTmFtZSIsInN0cmluZyIsInRlcm1Ob2RlIiwiVGVybSIsIm5vZGVBc1N0cmluZyIsInRlcm0iLCJzdGVwTm9kZSIsIlN0ZXAiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGVwIiwicnVsZU5vZGUiLCJSdWxlIiwicHJvb2YiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJydWxlU3RyaW5nIiwicnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24iLCJydWxlIiwibGFiZWxOb2RlIiwiTGFiZWwiLCJtZXRhdmFyaWFibGUiLCJsYWJlbCIsImVycm9yTm9kZSIsIkVycm9yIiwiZXJyb3IiLCJsZW1tYU5vZGUiLCJMZW1tYSIsInRvcExldmVsQXNzc2VydGlvbk5vZGUiLCJkZWR1Y3Rpb24iLCJzdXBwb3NpdGlvbnMiLCJzaWduYXR1cmUiLCJoeXBvdGhlc2VzIiwidG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwibGVtbWEiLCJmcmFtZU5vZGUiLCJGcmFtZSIsImFzc3VtcHRpb25zIiwiZnJhbWUiLCJwcm9vZk5vZGUiLCJQcm9vZiIsImRlcml2YXRpb24iLCJheGlvbU5vZGUiLCJBeGlvbSIsImF4aW9tIiwic2VjdGlvbk5vZGUiLCJoeXBvdGhlc2lzTm9kZXMiLCJnZXRIeXBvdGhlc2lzTm9kZXMiLCJ0aGVvcmVtIiwiY29uamVjdHVyZSIsInNlY3Rpb25TdHJpbmciLCJzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNUb3BMZXZlbEFzc2VydGlvbiIsInNlY3Rpb24iLCJTZWN0aW9uIiwicHJlbWlzZU5vZGUiLCJQcmVtaXNlIiwicHJvY2VkdXJlQ2FsbCIsInByZW1pc2UiLCJ0aGVvcmVtTm9kZSIsIlRoZW9yZW0iLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwicHJvcGVydHlOb2RlIiwiUHJvcGVydHkiLCJwcm9wZXJ0eU5hbWUiLCJnZXRQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eSIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwiaWRlbnRpZmllciIsInByb3BlcnR5UmVsYXRpb25zIiwidmFyaWFibGUiLCJzdWJwcm9vZk5vZGUiLCJTdWJwcm9vZiIsInN1YkRlcml2YXRpb24iLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mU3RyaW5nRnJvbVN1cHBvc2l0aW9uc0FuZFN1YkRlcml2YXRpb24iLCJzdWJwcm9vZiIsImVxdWFsaXR5Tm9kZSIsIkVxdWFsaXR5IiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJlcXVhbGl0eSIsImRlZHVjdGlvbk5vZGUiLCJEZWR1Y3Rpb24iLCJzdGF0ZW1lbnROb2RlIiwiU3RhdGVtZW50Iiwic2lnbmF0dXJlTm9kZSIsIlNpZ25hdHVyZSIsInRlcm1zIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsImp1ZGdlbWVudE5vZGUiLCJKdWRnZW1lbnQiLCJhc3N1bXB0aW9uIiwianVkZ2VtZW50IiwibWV0YUxlbW1hTm9kZSIsIk1ldGFMZW1tYSIsIm1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwic3Vic3RpdHV0aW9ucyIsIm1ldGFMZW1tYSIsInBhcmFtZXRlck5vZGUiLCJQYXJhbWV0ZXIiLCJnZXROYW1lIiwiZ2V0SWRlbnRpZmllciIsInBhcmFtZXRlciIsImh5cG90aGVzZU5vZGUiLCJIeXBvdGhzaXMiLCJoeXBvaHRlc2lzIiwiY29uamVjdHVyZU5vZGUiLCJDb25qZWN0dXJlIiwiY29tYmluYXRvck5vZGUiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImNvbmNsdXNpb25Ob2RlIiwiQ29uY2x1c2lvbiIsImFzc3VtcHRpb25Ob2RlIiwiQXNzdW1wdGlvbiIsImRlcml2YXRpb25Ob2RlIiwiRGVyaXZhdGlvbiIsInN0ZXBzT3JTdWJwcm9vZnMiLCJ0eXBlUHJlZml4Tm9kZSIsIlR5cGVQcmVmaXgiLCJ0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlIiwidHlwZUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVQcmVmaXgiLCJjb25zdHJ1Y3Rvck5vZGUiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwic3VwcG9zaXRpb25Ob2RlIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImVxdWl2YWxlbmNlTm9kZSIsIkVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VTdHJpbmciLCJlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyIsImVxdWl2YWxlbmNlIiwibWV0YXRoZW9yZW1Ob2RlIiwiTWV0YXRlaG9yZW0iLCJtZXRhdGhlb3JlbSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN1YkRlcml2YXRpb25Ob2RlIiwiU3ViRGVyaXZhdGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwiVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJwYXJhbWV0ZXJzIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyIsInN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBPclN1YnByb29mIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJEZWZpbmVkQXNzZXJ0aW9uIiwibmVnYXRlZCIsImlzTmVnYXRlZCIsImRlZmluZWRBc3NlcnRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIlByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJUZXJtU3Vic3RpdHV0aW9uIiwidGFyZ2V0VGVybSIsInJlcGxhY2VtZW50VGVybSIsInRlcm1TdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsInRhcmdldEZyYW1lIiwicmVwbGFjZW1lbnRGcmFtZSIsImZyYW1lU3Vic3RpdHV0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIlN1YnByb29mQXNzZXJ0aW9uIiwic3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIkNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJwcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlUmVmZXJlZW5jZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImdldFR5cGVOb2RlIiwiaXNQcm92aXNpb25hbCIsImdldFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJTaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJwcmVmaXhlZCIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJ0YXJnZXRSZWZlcmVuY2UiLCJyZXBsYWNlbWVudFJlZmVyZW5jZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwidHlwZU5hbWUiLCJnZXRUeXBlTmFtZSIsImdldFByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJnZXRMYWJlbE5vZGVzIiwicHJlbWlzZU5vZGVzIiwiZ2V0UHJlbWlzZU5vZGVzIiwiZ2V0QXhpb21Ob2RlIiwiZ2V0TGVtbWFOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFJlZmVyZW5jZU5vZGUiLCJ0eXBlUHJlZml4TmFtZSIsImdldFR5cGVQcmVmaXhOYW1lIiwiZ2V0Q29uY2x1c2lvbk5vZGUiLCJnZXRUaGVvcmVtTm9kZSIsImdldEZyYW1lTm9kZSIsInRlcm1Ob2RlcyIsImdldEFzc3VtcHRpb25Ob2RlcyIsImdldERlcml2YXRpb25Ob2RlIiwib2Nuc3RydWN0b3JOb2RlIiwiZ2V0VGVybU5vZGUiLCJhc3N1bXB0aW9uTm9kZXMiLCJsZWZ0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJnZXRUZXJtTm9kZXMiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Q29uamVjdHVyZU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImdldEVxdWFsaXR5Tm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsImdldEp1ZGdlbWVudE5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSIsImlzU3RlcE5vZGUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImNvbmNsdXNpbm9Ob2RlIiwiaHlwb3RoZXNpc05vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJ2aWF0aW9uIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibGl0ZXJhbGx5IiwicmVmZXJlbmNlU3RyaW5nIiwiaW5zdGFudGlhdGVSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VHlwZUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSIsImlzU3VicHJvb2ZOb2RlIiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRUZXJtTm9kZSIsImdldFRhcmdldFRlcm1Ob2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50Tm9kZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsInlwb3RoZXNlcyIsInRhcmdldEZyYW1lTm9kZSIsImdldFRhcmdldEZyYW1lTm9kZSIsImlzUHJlZml4ZWQiLCJpc1Jlc29sdmVkIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50VGVybU5vZGUiLCJnZXRSZXBsYWNlbWVudFRlcm1Ob2RlIiwiZ2V0VHlwZVByZWZpeE5vZGUiLCJnZXRDb21iaW5hdG9yTm9kZSIsImdldE1ldGFUeXBlTm9kZSIsInJlcGxhY2VtZW50RnJhbWVOb2RlIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZU5vZGUiLCJnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImdldENvbnN0cnVjdG9yTm9kZSIsInRhcmdldFJlZmVyZW5jZU5vZGUiLCJnZXRUYXJnZXRSZWZlcmVuY2VOb2RlIiwidGFyZ2V0UmVmZXJuZWNlIiwidGFyZ2V0U3RhdGVtZW50Tm9kZSIsImdldFRhcmdldFN0YXRlbWVudE5vZGUiLCJyZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUiLCJnZXRSZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudE5vZGUiLCJtYXAiLCJoeXBvdGhlc2lzIiwic3RlcE9yU3VicHJvb2ZOb2RlcyIsImdldFN0ZXBPclN1YnByb29mTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXlhZ0JBO2VBQUFBOztRQWlyQkFDO2VBQUFBOztRQW9yQkFDO2VBQUFBOztRQXgwQkFDO2VBQUFBOztRQWx6QkFDO2VBQUFBOztRQTByQkFDO2VBQUFBOztRQXRIQUM7ZUFBQUE7O1FBdTRCQUM7ZUFBQUE7O1FBN3NDQUM7ZUFBQUE7O1FBK1hBQztlQUFBQTs7UUFyWEFDO2VBQUFBOztRQXFmQUM7ZUFBQUE7O1FBaGhCQUM7ZUFBQUE7O1FBeW5CQUM7ZUFBQUE7O1FBclBBQztlQUFBQTs7UUEyNEJBQztlQUFBQTs7UUE5ckNBQztlQUFBQTs7UUFtTUFDO2VBQUFBOztRQW8xQkFDO2VBQUFBOztRQWp0Q0FDO2VBQUFBOztRQThuQ0FDO2VBQUFBOztRQXVLQUM7ZUFBQUE7O1FBdC9CQUM7ZUFBQUE7O1FBeXlCQUM7ZUFBQUE7O1FBejdCQUM7ZUFBQUE7O1FBMmZBQztlQUFBQTs7UUF4cUJBQztlQUFBQTs7UUFtd0JBQztlQUFBQTs7UUFuaUJBQztlQUFBQTs7UUEzWUFDO2VB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