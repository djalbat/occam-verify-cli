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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXMsXG4gICAgICAgICB0eXBlU3RyaW5nRnJvbU5vbWluYWxUeXBlTmFtZSxcbiAgICAgICAgIHJ1bHNTdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uLFxuICAgICAgICAgc2VjdGlvblN0cmluZ0Zyb21IeXBvdGhlc2VzVG9wTGV2ZWxBc3NlcnRpb24sXG4gICAgICAgICBzdWJwcm9vZlN0cmluZ0Zyb21TdXBwb3NpdGlvbnNBbmRTdWJEZXJpdmF0aW9uLFxuICAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzLFxuICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uLFxuICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICB0eXBlID0gYmFzZVR5cGU7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIG5vZGUgPSB0eXBlTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcmVmaXhOYW1lID0gcHJlZml4TmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlU3RyaW5nRnJvbU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpLFxuICAgICAgICAgIHN0cmluZyA9IHR5cGVTdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgdHlwZSA9IG5ldyBUeXBlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RlcE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBzdGVwID0gbmV3IFN0ZXAoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSdWxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJ1bGVTdHJpbmcgPSBydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSxcbiAgICAgICAgbm9kZSA9IHJ1bGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IHJ1bGVTdHJpbmcsICAvLy9cbiAgICAgICAgcnVsZSA9IG5ldyBSdWxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvb2YsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gIHJldHVybiBydWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbmV3IExhYmVsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXJyb3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGVycm9yID0gbmV3IEVycm9yKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFGcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExlbW1hIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSA9IGxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG5vZGUgPSBsZW1tYU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBsZW1tYSA9IG5ldyBMZW1tYShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiBsZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lID0gbmV3IEZyYW1lKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXNzdW1wdGlvbnMsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb29mTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIGRlcml2YXRpb24gPSBkZXJpdmF0aW9uRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb29mID0gbmV3IFByb29mKGNvbnRleHQsIHN0cmluZywgbm9kZSwgZGVyaXZhdGlvbik7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21Gcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEF4aW9tIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSA9IGF4aW9tTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG5vZGUgPSBheGlvbU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBheGlvbSA9IG5ldyBBeGlvbShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiBheGlvbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgaHlwb3RoZXNpc05vZGVzID0gc2VjdGlvbk5vZGUuZ2V0SHlwb3RoZXNpc05vZGVzKCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyhoeXBvdGhlc2lzTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBheGlvbSA9IGF4aW9tRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVtbWEgPSBsZW1tYUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRoZW9yZW0gPSB0aGVvcmVtRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzZWN0aW9uU3RyaW5nID0gc2VjdGlvblN0cmluZ0Zyb21IeXBvdGhlc2VzVG9wTGV2ZWxBc3NlcnRpb24oaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlKSxcbiAgICAgICAgbm9kZSA9IHNlY3Rpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gc2VjdGlvblN0cmluZzsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlKTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByZW1pc2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcmVtaXNlID0gbmV3IFByZW1pc2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiBwcmVtaXNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGhlb3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSB0aGVvcmVtTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG5vZGUgPSB0aGVvcmVtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIHRoZW9yZW0gPSBuZXcgVGhlb3JlbShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiB0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOb2RlLmdldFByb3BlcnR5TmFtZSgpLFxuICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBudWxsLFxuICAgICAgICBuYW1lID0gcHJvcGVydHlOYW1lOyAgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBub21pbmFsVHlwZU5hbWUpO1xuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VicHJvb2YgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VicHJvb2ZOb2RlLCAvLy9cbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJEZXJpdmF0aW9uID0gc3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZlN0cmluZ0Zyb21TdXBwb3NpdGlvbnNBbmRTdWJEZXJpdmF0aW9uKHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbiwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN1YnByb29mU3RyaW5nOyAgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2YgPSBuZXcgU3VicHJvb2YoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24pO1xuXG4gIHJldHVybiBzdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXR5RnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcXVhbGl0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcXVhbGl0eU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgcmV0dXJuIGVxdWFsaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZWR1Y3Rpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGRlZHVjdGlvbiA9IG5ldyBEZWR1Y3Rpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaWduYXR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2lnbmF0dXJlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKTtcblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEp1ZGdlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBqdWRnZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgZnJhbWUsIGFzc3VtcHRpb24pO1xuXG4gIHJldHVybiBqdWRnZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YUxlbW1hIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUgPSBtZXRhTGVtbWFOb2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG51bGwsXG4gICAgICAgIG5vZGUgPSBtZXRhTGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgbWV0YUxlbW1hID0gbmV3IE1ldGFMZW1tYShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIHJldHVybiBtZXRhTGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHBhcmFtZXRlck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpLFxuICAgICAgICBpZGVudGlmaWVyID0gcGFyYW1ldGVyTm9kZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIGlkZW50aWZpZXIpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBIeXBvdGhzaXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gaHlwb3RoZXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgaHlwb2h0ZXNpcyA9IG5ldyBIeXBvdGhzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBoeXBvaHRlc2lzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gY29uamVjdHVyZU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gY29uamVjdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBjb25qZWN0dXJlID0gbmV3IENvbmplY3R1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25jbHVzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhc3N1bXB0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZXJpdmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlcml2YXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBkZXJpdmF0aW9uID0gbmV3IERlcml2YXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVQcmVmaXggPSBuZXcgVHlwZVByZWZpeChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtKTtcblxuICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VwcG9zaXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVxdWl2YWxlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVxdWl2YWxlbmNlTm9kZSwgLy8vXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICBzdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZzsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF0ZWhvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUgPSBtZXRhdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gbWV0YXRoZW9yZW1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG51bGwsXG4gICAgICAgIG1ldGF0aGVvcmVtID0gbmV3IE1ldGF0ZWhvcmVtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBtZXRhVHlwZSA9IG51bGwsXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJEZXJpdmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YkRlcml2YXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1YkRlcml2YXRpb24gPSBuZXcgU3ViRGVyaXZhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0ZXBzT3JTdWJwcm9vZnMpO1xuXG4gIHJldHVybiBzdWJEZXJpdmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZUFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbiA9IG5ldyBUeXBlQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhwcm9jZWR1cmVSZWZlcmVuY2UsIHBhcmFtZXRlcnMpLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nOyAvLy9cblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcE9yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2YgPSBzdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcE9yU3VicHJvb2YgPSAoc3RlcCB8fCBzdWJwcm9vZik7XG5cbiAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlZmluZWRBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5pc05lZ2F0ZWQoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlSZWxhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gbmV3IFByb3BlcnR5UmVsYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBwcm9wZXJ0eSwgdGVybSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IHRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRUZXJtLCByZXBsYWNlbWVudFRlcm0pO1xuXG4gIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGFyZ2V0RnJhbWUgPSB0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0RnJhbWUsIHJlcGxhY2VtZW50RnJhbWUpO1xuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IG5ldyBQcm9wZXJ0eUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuXG4gIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJwcm9vZkFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29udGFpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG5ldyBDb250YWluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNhdGlzZmllc0Fzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbmV3IFNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHNpZ25hdHVyZSwgcmVmZXJlbmNlKTtcblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZVJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZVJlZmVyZWVuY2UgPSBuZXcgUHJvY2VkdXJlUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZWVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICBwcm92aXNpb25hbCA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgdmFyaWFibGUsIHByb3Zpc2lvbmFsKTtcblxuICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4RGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLCAgLy8vXG4gICAgICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbiA9IG5ldyBUeXBlUHJlZml4RGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlUHJlZml4KTtcblxuICByZXR1cm4gdHlwZVByZWZpeERlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbWJpbmF0b3JEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb21iaW5hdG9yRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBjb21iaW5hdG9yKTtcblxuICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNpbXBsZVR5cGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByZWZpeGVkID0gcHJlZml4ZWRGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uID0gbmV3IFNpbXBsZVR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHByZWZpeGVkKTtcblxuICByZXR1cm4gc2ltcGxlVHlwZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0YXJnZXRSZWZlcmVuY2UgPSB0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVwbGFjZW1lbnRSZWZlcmVuY2UgPSByZXBsYWNlbWVudFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBuZXcgUmVmZXJlbmNlU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0UmVmZXJlbmNlLCByZXBsYWNlbWVudFJlZmVyZW5jZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVzb2x2ZWQgPSByZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gdGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlc29sdmVkLCBzdWJzdGl0dXRpb24sIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29uc3RydWN0b3IpO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbXBsZXhUeXBlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlZml4ZWQgPSBwcmVmaXhlZEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBuZXcgQ29tcGxleFR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHByZWZpeGVkKTtcblxuICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhVHlwZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZU5hbWUoKSxcbiAgICAgICAgbmFtZSA9IHR5cGVOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSBydWxlTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGVzID0gcnVsZU5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlbWlzZU5vZGVzID0gcnVsZU5vZGUuZ2V0UHJlbWlzZU5vZGVzKCksXG4gICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tUHJlbWlzZU5vZGVzKHByZW1pc2VOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGF4aW9tID0gbnVsbDtcblxuICBjb25zdCBheGlvbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRBeGlvbU5vZGUoKTtcblxuICBpZiAoYXhpb21Ob2RlICE9PSBudWxsKSB7XG4gICAgYXhpb20gPSBheGlvbUZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBheGlvbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsZW1tYSA9IG51bGw7XG5cbiAgY29uc3QgbGVtbWFOb2RlID0gc2VjdGlvbk5vZGUuZ2V0TGVtbWFOb2RlKCk7XG5cbiAgaWYgKGxlbW1hTm9kZSAhPT0gbnVsbCkge1xuICAgIGxlbW1hID0gbGVtbWFGcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0ZXBOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gc3RlcE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChyZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVzID0gbnVsbDtcblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydGllcyA9IG51bGw7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKSxcbiAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWU7ICAvLy9cblxuICByZXR1cm4gcHJlZml4TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgY29uY2x1c2lvbk5vZGUgPSBydWxlTm9kZS5nZXRDb25jbHVzaW9uTm9kZSgpLFxuICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0aGVvcmVtID0gbnVsbDtcblxuICBjb25zdCB0aGVvcmVtTm9kZSA9IHNlY3Rpb25Ob2RlLmdldFRoZW9yZW1Ob2RlKCk7XG5cbiAgaWYgKHRoZW9yZW1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGhlb3JlbSA9IHRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUodGhlb3JlbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRoZW9yZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZnJhbWVOb2RlID0ganVkZ2VtZW50Tm9kZS5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gc2lnbmF0dXJlTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmF0aW9uRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVyaXZhdGlvbk5vZGUgPSBwcm9vZk5vZGUuZ2V0RGVyaXZhdGlvbk5vZGUoKSxcbiAgICAgICAgZGVyaXZhdGlvbiA9IGRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZXJpdmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvdmlzaW9uYWwgPSBudWxsO1xuXG4gIHJldHVybiBwcm92aXNpb25hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlKG9jbnN0cnVjdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IG9jbnN0cnVjdG9yTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlcyA9IGZyYW1lTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByZW1pc2VOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IGVxdWl2YWxlbmNlTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBsYWJlbE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29uamVjdHVyZSA9IG51bGw7XG5cbiAgY29uc3QgY29uamVjdHVyZU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRDb25qZWN0dXJlTm9kZSgpO1xuXG4gIGlmIChjb25qZWN0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb25qZWN0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXR5RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RXF1YWxpdHlOb2RlKCk7XG5cbiAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGVxdWFsaXR5ID0gZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZXF1YWxpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgIGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXI7ICAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGRlZHVjdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICBjb25zdCBqdWRnZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRKdWRnZW1lbnROb2RlKCk7XG5cbiAgaWYgKGp1ZGdlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBqdWRnZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXAgPSBudWxsO1xuXG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlLmlzU3RlcE5vZGUoKTtcblxuICBpZiAoc3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUpIHtcbiAgICBjb25zdCBzdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZTsgIC8vL1xuXG4gICAgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsVHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0ganVkZ2VtZW50Tm9kZS5nZXRBc3N1bXB0aW9uTm9kZSgpLFxuICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29tYmluYXRvck5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpbm9Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW5vTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBoeXBvdGhlc2lzTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHByZW1pc2VOb2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gc3VicHJvb2ZOb2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50OyAvLy9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3ViRGVyaXZhdGlvbk5vZGUgPSBzdWJwcm9vZk5vZGUuZ2V0U3ViRGVyaXZhdGlvbk5vZGUoKSxcbiAgICAgICAgc3ViRGVydmlhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdWJEZXJ2aWF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2VOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZywgLy8vXG4gICAgICAgICAgc3RyaW5nID0gcmVmZXJlbmNlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBzdGVwTm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFR5cGVBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgdHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHByb29mTm9kZSA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0UHJvb2ZOb2RlKCk7XG5cbiAgaWYgKHByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3VicHJvb2ZPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VicHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mT3JTdWJwcm9vZk5vZGVTdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlLmlzU3VicHJvb2ZOb2RlKCk7XG5cbiAgaWYgKHN1YnByb29mT3JTdWJwcm9vZk5vZGVTdWJwcm9vZk5vZGUpIHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlOyAgLy8vXG5cbiAgICBzdWJwcm9vZiA9IHN1YnByb29mRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dClcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGVzID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBkZWZpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBkZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOb2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGFyZ2V0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0YXJnZXRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlZHVjdGlvbk5vZGUgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldERlZHVjdGlvbk5vZGUoKSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2lnbmF0dXJlID0gbnVsbDtcblxuICBjb25zdCBzaWduYXR1cmVOb2RlID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCk7XG5cbiAgaWYgKHNpZ25hdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb29mTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldFByb29mTm9kZSgpLFxuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvcGVydHlBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHswXG4gIGxldCBjb250YWluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IGNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGVzKCksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzKHN0YXRlbWVudE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzaWduYXR1cmVOb2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeXBvdGhlc2VzID0gW107XG5cbiAgcmV0dXJuIHlwb3RoZXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldEZyYW1lTm9kZSgpLFxuICAgICAgICB0YXJnZXRGcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZSh0YXJnZXRGcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0YXJnZXRGcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlZml4ZWQgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJlZml4ZWQoKTtcblxuICByZXR1cm4gcHJlZml4ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVzb2x2ZWQgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmlzUmVzb2x2ZWQoKTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkZWR1Y3Rpb25Ob2RlID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlZml4ZWQgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5pc1ByZWZpeGVkKCk7XG5cbiAgcmV0dXJuIHByZWZpeGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50VGVybU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyZXBsYWNlbWVudFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVByZWZpeE5vZGUgPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLmdldFR5cGVQcmVmaXhOb2RlKCksXG4gICAgICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JOb2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZS5nZXRDb21iaW5hdG9yTm9kZSgpLFxuICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFUeXBlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhVHlwZU5vZGUoKSxcbiAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRGcmFtZU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShyZXBsYWNlbWVudEZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50RnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25Ob2RlcyA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSAoZnJhbWVTdWJzdGl0dXRpb24gfHwgdGVybVN1YnN0aXR1dGlvbik7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldENvbnN0cnVjdG9yTm9kZSgpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRSZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHRhcmdldFJlZmVybmVjZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKHRhcmdldFJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0YXJnZXRSZWZlcm5lY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUodGFyZ2V0U3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRhcmdldFN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlbWVudFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRSZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCB0ZXJtcyA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21QcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VzID0gcHJlbWlzZU5vZGVzLm1hcCgocHJlbWlzZU5vZGUpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlID0gcHJlbWlzZUZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyhzdGF0ZW1lbnROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVycyA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyhoeXBvdGhlc2lzTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaHlwb3RoZXNlcyA9IGh5cG90aGVzaXNOb2Rlcy5tYXAoKGh5cG90aGVzZU5vZGUpID0+IHtcbiAgICBjb25zdCBoeXBvdGhlc2lzID0gaHlwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9KTtcblxuICByZXR1cm4gaHlwb3RoZXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2Rlcyhhc3N1bXB0aW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uTm9kZXMubWFwKChhc3N1bXB0aW9uTm9kZSkgPT4ge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uTm9kZXMubWFwKChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVzID0gZGVyaXZhdGlvbk5vZGUuZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcygpLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcE9yU3VicHJvb2ZOb2Rlcy5tYXAoKHN0ZXBPclN1YnByb29mTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mID0gc3RlcE9yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwc09yU3VicHJvb2ZzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVzID0gc3ViRGVyaXZhdGlvbk5vZGUuZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcygpLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcE9yU3VicHJvb2ZOb2Rlcy5tYXAoKHN0ZXBPclN1YnByb29mTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mID0gc3RlcE9yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwc09yU3VicHJvb2ZzO1xufVxuIl0sIm5hbWVzIjpbImFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMiLCJhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUiLCJheGlvbUZyb21BeGlvbU5vZGUiLCJheGlvbUZyb21TZWN0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbkZyb21SdWxlTm9kZSIsImNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlIiwiZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsImRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUiLCJkZXJpdmF0aW9uRnJvbVByb29mTm9kZSIsImVxdWFsaXR5RnJvbUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5RnJvbVN0YXRlbWVudE5vZGUiLCJlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUiLCJlcnJvckZyb21FcnJvck5vZGUiLCJmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21GcmFtZU5vZGUiLCJmcmFtZUZyb21KdWRnZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyIsImh5cG90aGVzZXNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwiaHlwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZSIsImlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlIiwianVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsImxhYmVsRnJvbUxhYmVsTm9kZSIsImxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJsYWJlbHNGcm9tTGFiZWxOb2RlcyIsImxhYmVsc0Zyb21SdWxlTm9kZSIsImxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJsZW1tYUZyb21MZW1tYU5vZGUiLCJsZW1tYUZyb21TZWN0aW9uTm9kZSIsIm1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlIiwibWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlIiwibWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIiwibmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwibmFtZUZyb21UeXBlTm9kZSIsIm5vbWluYWxUeXBlTmFtZUZyb21UeXBlTm9kZSIsInBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcmVmaXhOYW1lRnJvbVR5cGVOb2RlIiwicHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJlbWlzZUZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyIsInByZW1pc2VzRnJvbVJ1bGVOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwicHJvb2ZGcm9tUHJvb2ZOb2RlIiwicHJvb2ZGcm9tUnVsZU5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwicHJvcGVydGllc0Zyb21UeXBlTm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3Zpc2lvbmFsRnJvbVR5cGVOb2RlIiwicmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbVN0ZXBOb2RlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwicmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJydWxlRnJvbVJ1bGVOb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZSIsInNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUiLCJzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIiwic2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlIiwic3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlIiwic3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlIiwic3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZSIsInN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZSIsInN0YXRlbWVudEZyb21QcmVtaXNlTm9kZSIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50RnJvbVN0ZXBOb2RlIiwic3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyIsInN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcE9yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlIiwic3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJzdXBlclR5cGVzRnJvbVR5cGVOb2RlIiwic3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwidGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZSIsInRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUiLCJ0ZXJtc0Zyb21TaWduYXR1cmVOb2RlIiwidGVybXNGcm9tVGVybU5vZGVzIiwidGhlb3JlbUZyb21TZWN0aW9uTm9kZSIsInRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUiLCJ0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJ0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVGVybU5vZGUiLCJ0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21UeXBlTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwiVHlwZSIsImVsZW1lbnRzIiwibm9kZSIsIm5hbWUiLCJwcmVmaXhOYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsIm5vbWluYWxUeXBlTmFtZSIsInR5cGVTdHJpbmciLCJ0eXBlU3RyaW5nRnJvbU5vbWluYWxUeXBlTmFtZSIsInN0cmluZyIsInRlcm1Ob2RlIiwiVGVybSIsIm5vZGVBc1N0cmluZyIsInRlcm0iLCJzdGVwTm9kZSIsIlN0ZXAiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGVwIiwicnVsZU5vZGUiLCJSdWxlIiwicHJvb2YiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJydWxlU3RyaW5nIiwicnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24iLCJydWxlIiwibGFiZWxOb2RlIiwiTGFiZWwiLCJtZXRhdmFyaWFibGUiLCJsYWJlbCIsImVycm9yTm9kZSIsIkVycm9yIiwiZXJyb3IiLCJsZW1tYU5vZGUiLCJMZW1tYSIsInRvcExldmVsQXNzc2VydGlvbk5vZGUiLCJkZWR1Y3Rpb24iLCJzdXBwb3NpdGlvbnMiLCJzaWduYXR1cmUiLCJoeXBvdGhlc2VzIiwidG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwibGVtbWEiLCJmcmFtZU5vZGUiLCJGcmFtZSIsImFzc3VtcHRpb25zIiwiZnJhbWUiLCJwcm9vZk5vZGUiLCJQcm9vZiIsImRlcml2YXRpb24iLCJheGlvbU5vZGUiLCJBeGlvbSIsImF4aW9tIiwic2VjdGlvbk5vZGUiLCJoeXBvdGhlc2lzTm9kZXMiLCJnZXRIeXBvdGhlc2lzTm9kZXMiLCJ0aGVvcmVtIiwiY29uamVjdHVyZSIsInNlY3Rpb25TdHJpbmciLCJzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNUb3BMZXZlbEFzc2VydGlvbiIsInNlY3Rpb24iLCJTZWN0aW9uIiwicHJlbWlzZU5vZGUiLCJQcmVtaXNlIiwicHJvY2VkdXJlQ2FsbCIsInByZW1pc2UiLCJ0aGVvcmVtTm9kZSIsIlRoZW9yZW0iLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwicHJvcGVydHlOb2RlIiwiUHJvcGVydHkiLCJwcm9wZXJ0eU5hbWUiLCJnZXRQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eSIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwiaWRlbnRpZmllciIsInByb3BlcnR5UmVsYXRpb25zIiwidmFyaWFibGUiLCJzdWJwcm9vZk5vZGUiLCJTdWJwcm9vZiIsInN1YkRlcml2YXRpb24iLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mU3RyaW5nRnJvbVN1cHBvc2l0aW9uc0FuZFN1YkRlcml2YXRpb24iLCJzdWJwcm9vZiIsImVxdWFsaXR5Tm9kZSIsIkVxdWFsaXR5IiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJlcXVhbGl0eSIsImRlZHVjdGlvbk5vZGUiLCJEZWR1Y3Rpb24iLCJzdGF0ZW1lbnROb2RlIiwiU3RhdGVtZW50Iiwic2lnbmF0dXJlTm9kZSIsIlNpZ25hdHVyZSIsInRlcm1zIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsImp1ZGdlbWVudE5vZGUiLCJKdWRnZW1lbnQiLCJhc3N1bXB0aW9uIiwianVkZ2VtZW50IiwibWV0YUxlbW1hTm9kZSIsIk1ldGFMZW1tYSIsIm1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwic3Vic3RpdHV0aW9ucyIsIm1ldGFMZW1tYSIsInBhcmFtZXRlck5vZGUiLCJQYXJhbWV0ZXIiLCJnZXROYW1lIiwiZ2V0SWRlbnRpZmllciIsInBhcmFtZXRlciIsImh5cG90aGVzZU5vZGUiLCJIeXBvdGhzaXMiLCJoeXBvaHRlc2lzIiwiY29uamVjdHVyZU5vZGUiLCJDb25qZWN0dXJlIiwiY29tYmluYXRvck5vZGUiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImNvbmNsdXNpb25Ob2RlIiwiQ29uY2x1c2lvbiIsImFzc3VtcHRpb25Ob2RlIiwiQXNzdW1wdGlvbiIsImRlcml2YXRpb25Ob2RlIiwiRGVyaXZhdGlvbiIsInN0ZXBzT3JTdWJwcm9vZnMiLCJ0eXBlUHJlZml4Tm9kZSIsIlR5cGVQcmVmaXgiLCJ0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlIiwidHlwZUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVQcmVmaXgiLCJjb25zdHJ1Y3Rvck5vZGUiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwic3VwcG9zaXRpb25Ob2RlIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImVxdWl2YWxlbmNlTm9kZSIsIkVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VTdHJpbmciLCJlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyIsImVxdWl2YWxlbmNlIiwibWV0YXRoZW9yZW1Ob2RlIiwiTWV0YXRlaG9yZW0iLCJtZXRhdGhlb3JlbSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN1YkRlcml2YXRpb25Ob2RlIiwiU3ViRGVyaXZhdGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwiVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJwYXJhbWV0ZXJzIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyIsInN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBPclN1YnByb29mIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJEZWZpbmVkQXNzZXJ0aW9uIiwibmVnYXRlZCIsImlzTmVnYXRlZCIsImRlZmluZWRBc3NlcnRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIlByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJUZXJtU3Vic3RpdHV0aW9uIiwidGFyZ2V0VGVybSIsInJlcGxhY2VtZW50VGVybSIsInRlcm1TdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsInRhcmdldEZyYW1lIiwicmVwbGFjZW1lbnRGcmFtZSIsImZyYW1lU3Vic3RpdHV0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIlN1YnByb29mQXNzZXJ0aW9uIiwic3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIkNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJwcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlUmVmZXJlZW5jZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImdldFR5cGVOb2RlIiwiaXNQcm92aXNpb25hbCIsImdldFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJTaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJwcmVmaXhlZCIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJ0YXJnZXRSZWZlcmVuY2UiLCJyZXBsYWNlbWVudFJlZmVyZW5jZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwidHlwZU5hbWUiLCJnZXRUeXBlTmFtZSIsImdldFByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJnZXRMYWJlbE5vZGVzIiwicHJlbWlzZU5vZGVzIiwiZ2V0UHJlbWlzZU5vZGVzIiwiZ2V0QXhpb21Ob2RlIiwiZ2V0TGVtbWFOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFJlZmVyZW5jZU5vZGUiLCJ0eXBlUHJlZml4TmFtZSIsImdldFR5cGVQcmVmaXhOYW1lIiwiZ2V0Q29uY2x1c2lvbk5vZGUiLCJnZXRUaGVvcmVtTm9kZSIsImdldEZyYW1lTm9kZSIsInRlcm1Ob2RlcyIsImdldEFzc3VtcHRpb25Ob2RlcyIsImdldERlcml2YXRpb25Ob2RlIiwib2Nuc3RydWN0b3JOb2RlIiwiZ2V0VGVybU5vZGUiLCJhc3N1bXB0aW9uTm9kZXMiLCJsZWZ0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJnZXRUZXJtTm9kZXMiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Q29uamVjdHVyZU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImdldEVxdWFsaXR5Tm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsImdldEp1ZGdlbWVudE5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSIsImlzU3RlcE5vZGUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImNvbmNsdXNpbm9Ob2RlIiwiaHlwb3RoZXNpc05vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJ2aWF0aW9uIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibGl0ZXJhbGx5IiwicmVmZXJlbmNlU3RyaW5nIiwiaW5zdGFudGlhdGVSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VHlwZUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSIsImlzU3VicHJvb2ZOb2RlIiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRUZXJtTm9kZSIsImdldFRhcmdldFRlcm1Ob2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50Tm9kZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsInlwb3RoZXNlcyIsInRhcmdldEZyYW1lTm9kZSIsImdldFRhcmdldEZyYW1lTm9kZSIsImlzUHJlZml4ZWQiLCJpc1Jlc29sdmVkIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50VGVybU5vZGUiLCJnZXRSZXBsYWNlbWVudFRlcm1Ob2RlIiwiZ2V0VHlwZVByZWZpeE5vZGUiLCJnZXRDb21iaW5hdG9yTm9kZSIsImdldE1ldGFUeXBlTm9kZSIsInJlcGxhY2VtZW50RnJhbWVOb2RlIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZU5vZGUiLCJnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImdldENvbnN0cnVjdG9yTm9kZSIsInRhcmdldFJlZmVyZW5jZU5vZGUiLCJnZXRUYXJnZXRSZWZlcmVuY2VOb2RlIiwidGFyZ2V0UmVmZXJuZWNlIiwidGFyZ2V0U3RhdGVtZW50Tm9kZSIsImdldFRhcmdldFN0YXRlbWVudE5vZGUiLCJyZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUiLCJnZXRSZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudE5vZGUiLCJtYXAiLCJoeXBvdGhlc2lzIiwic3RlcE9yU3VicHJvb2ZOb2RlcyIsImdldFN0ZXBPclN1YnByb29mTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTBhZ0JBO2VBQUFBOztRQStxQkFDO2VBQUFBOztRQXVxQkFDO2VBQUFBOztRQTN6QkFDO2VBQUFBOztRQWh6QkFDO2VBQUFBOztRQXdyQkFDO2VBQUFBOztRQXBIQUM7ZUFBQUE7O1FBODNCQUM7ZUFBQUE7O1FBcHNDQUM7ZUFBQUE7O1FBNlhBQztlQUFBQTs7UUFuWEFDO2VBQUFBOztRQW1mQUM7ZUFBQUE7O1FBOWdCQUM7ZUFBQUE7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