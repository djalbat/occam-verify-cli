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
    get provisionalFromComplexTypeDeclarationNode () {
        return provisionalFromComplexTypeDeclarationNode;
    },
    get provisionalFromConstructorDeclarationNode () {
        return provisionalFromConstructorDeclarationNode;
    },
    get provisionalFromSimpleTypeDeclarationNode () {
        return provisionalFromSimpleTypeDeclarationNode;
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
    get superTypesFromComplexTypeDeclarationNode () {
        return superTypesFromComplexTypeDeclarationNode;
    },
    get superTypesFromSimpleTypeDeclarationNode () {
        return superTypesFromSimpleTypeDeclarationNode;
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
    get typesFromTypesNode () {
        return typesFromTypesNode;
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
    var SimpleTypeDeclaration = _elements.default.SimpleTypeDeclaration, node = simpleTypeDeclarationNode, string = context.nodeAsString(node), type = typeFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), superTypes = superTypesFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), provisional = provisionalFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), simpleTypeDeclaration = new SimpleTypeDeclaration(context, string, node, type, superTypes, provisional);
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
    var ComplexTypeDeclaration = _elements.default.ComplexTypeDeclaration, node = complexTypeDeclarationNode, string = context.nodeAsString(node), type = typeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), superTypes = superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), provisional = provisionalFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), complexTypeDeclaration = new ComplexTypeDeclaration(context, string, node, type, superTypes, provisional);
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
function resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    var resolved = statementSubstitutionNode.isResolved();
    return resolved;
}
function deductionFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
    var deductionNode = metaLemmaMetathoremNode.getDeductionNode(), deduction = deductionFromDeductionNode(deductionNode, context);
    return deduction;
}
function procedureReferenceFromProcedureCallNode(procedureCallNode, context) {
    var procedureReferenceNode = procedureCallNode.getProcedureReferenceNode(), procedureReference = procedureReferenceFromProcedureReferenceNode(procedureReferenceNode, context);
    return procedureReference;
}
function replacementTermFromTermSubstitutionNode(termSubstitutionNode, context) {
    var replacementTermNode = termSubstitutionNode.getReplacementTermNode(), replacementTerm = termFromTermNode(replacementTermNode, context);
    return replacementTerm;
}
function superTypesFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    var superTypes = [];
    var typesNode = simpleTypeDeclarationNode.getTypesNode();
    if (typesNode !== null) {
        var types = typesFromTypesNode(typesNode, context);
        superTypes = types; ///
    }
    return superTypes;
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
function provisionalFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    var provisional = simpleTypeDeclarationNode.isProvisional();
    return provisional;
}
function superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var superTypes = [];
    var typesNode = complexTypeDeclarationNode.getTypesNode();
    if (typesNode !== null) {
        var types = typesFromTypesNode(typesNode, context);
        superTypes = types; ///
    }
    return superTypes;
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
function provisionalFromConstructorDeclarationNode(constructorDeclarationNode, context) {
    var provisional = constructorDeclarationNode.isProvisional();
    return provisional;
}
function provisionalFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var provisional = complexTypeDeclarationNode.isProvisional();
    return provisional;
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
function typesFromTypesNode(typesNode, context) {
    var typeNodes = typesNode.getTypeNodes(), types = typeNodes.map(function(typeNode) {
        var type = typeFromTypeNode(typeNode, context);
        return type;
    });
    return types;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zLFxuICAgICAgICAgdHlwZVN0cmluZ0Zyb21Ob21pbmFsVHlwZU5hbWUsXG4gICAgICAgICBydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbixcbiAgICAgICAgIHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uLFxuICAgICAgICAgc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbixcbiAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyxcbiAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbixcbiAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZSA9IGJhc2VUeXBlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBub2RlID0gdHlwZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHByZWZpeE5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZVN0cmluZ0Zyb21Ob21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICBzdHJpbmcgPSB0eXBlU3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3RlcCA9IG5ldyBTdGVwKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbik7XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUnVsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBydWxlU3RyaW5nID0gcnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiksXG4gICAgICAgIG5vZGUgPSBydWxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBydWxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb29mLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICByZXR1cm4gcnVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVycm9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVycm9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hRnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBsZW1tYU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gbGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgbGVtbWEgPSBuZXcgTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBmcmFtZSA9IG5ldyBGcmFtZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9vZk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9vZiA9IG5ldyBQcm9vZihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGRlcml2YXRpb24pO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBeGlvbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBheGlvbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gYXhpb21Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgYXhpb20gPSBuZXcgQXhpb20oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gYXhpb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzaXNOb2RlcyA9IHNlY3Rpb25Ob2RlLmdldEh5cG90aGVzaXNOb2RlcygpLFxuICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXhpb20gPSBheGlvbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlbW1hID0gbGVtbWFGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2VjdGlvblN0cmluZyA9IHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uKGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSksXG4gICAgICAgIG5vZGUgPSBzZWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHNlY3Rpb25TdHJpbmc7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSk7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcmVtaXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gcHJlbWlzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gdGhlb3JlbU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICB0aGVvcmVtID0gbmV3IFRoZW9yZW0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5Tm9kZS5nZXRQcm9wZXJ0eU5hbWUoKSxcbiAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IHByb3BlcnR5TmFtZTsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbm9taW5hbFR5cGVOYW1lKTtcblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW107XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mTm9kZSwgLy8vXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbihzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdWJwcm9vZlN0cmluZzsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mID0gbmV3IFN1YnByb29mKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKTtcblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXF1YWxpdHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXF1YWxpdHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBkZWR1Y3Rpb24gPSBuZXcgRGVkdWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpZ25hdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudEZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBKdWRnZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKTtcblxuICByZXR1cm4ganVkZ2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGFMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YUxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBub2RlID0gbWV0YUxlbW1hTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIG1ldGFMZW1tYSA9IG5ldyBNZXRhTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICByZXR1cm4gbWV0YUxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldE5hbWUoKSxcbiAgICAgICAgaWRlbnRpZmllciA9IHBhcmFtZXRlck5vZGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBpZGVudGlmaWVyKTtcblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgSHlwb3Roc2lzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGh5cG90aGVzZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGh5cG9odGVzaXMgPSBuZXcgSHlwb3Roc2lzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gaHlwb2h0ZXNpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSA9IGNvbmplY3R1cmVOb2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IGNvbmplY3R1cmVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgY29uamVjdHVyZSA9IG5ldyBDb25qZWN0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21iaW5hdG9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uY2x1c2lvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBjb25jbHVzaW9uID0gbmV3IENvbmNsdXNpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmF0aW9uRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVyaXZhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZXJpdmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZGVyaXZhdGlvbiA9IG5ldyBEZXJpdmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RlcHNPclN1YnByb29mcyk7XG5cbiAgcmV0dXJuIGRlcml2YXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZVByZWZpeCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlUHJlZml4Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0eXBlUHJlZml4ID0gbmV3IFR5cGVQcmVmaXgoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25zdHJ1Y3Rvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1cHBvc2l0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcXVpdmFsZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcXVpdmFsZW5jZU5vZGUsIC8vL1xuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlcXVpdmFsZW5jZVN0cmluZyA9IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zKHRlcm1zKSxcbiAgICAgICAgc3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmc7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtRnJvbU1ldGF0aGVvcmVtTm9kZShtZXRhdGhlb3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdGVob3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YXRoZW9yZW1Ob2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IG1ldGF0aGVvcmVtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBtZXRhdGhlb3JlbSA9IG5ldyBNZXRhdGVob3JlbShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgbWV0YVR5cGUgPSBudWxsLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSwgbWV0YVR5cGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3ViRGVyaXZhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdWJEZXJpdmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBzdWJEZXJpdmF0aW9uID0gbmV3IFN1YkRlcml2YXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gc3ViRGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb24gPSBuZXcgVHlwZUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpO1xuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocHJvY2VkdXJlUmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlQ2FsbFN0cmluZzsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcCA9IHN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXBPclN1YnByb29mID0gKHN0ZXAgfHwgc3VicHJvb2YpO1xuXG4gIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWZpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvbiA9IG5ldyBEZWZpbmVkQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpO1xuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb3BlcnR5UmVsYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IG5ldyBQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvcGVydHksIHRlcm0pO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRhcmdldFRlcm0gPSB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKTtcblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRhcmdldEZyYW1lID0gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldEZyYW1lLCByZXBsYWNlbWVudEZyYW1lKTtcblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlBc3NlcnRpb24gPSBuZXcgUHJvcGVydHlBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcblxuICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VicHJvb2ZBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50cyk7XG5cbiAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnRhaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5pc05lZ2F0ZWQoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb24gPSBuZXcgQ29udGFpbmVkQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTYXRpc2ZpZXNBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG5ldyBTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzaWduYXR1cmUsIHJlZmVyZW5jZSk7XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVSZWZlcmVlbmNlID0gbmV3IFByb2NlZHVyZVJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgcHJvdmlzaW9uYWwgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgVmFyaWFibGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHZhcmlhYmxlLCBwcm92aXNpb25hbCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZVByZWZpeERlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb24gPSBuZXcgVHlwZVByZWZpeERlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZVByZWZpeCk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21iaW5hdG9yRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29tYmluYXRvckRlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29tYmluYXRvcik7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IG5ldyBTaW1wbGVUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBzdXBlclR5cGVzLCBwcm92aXNpb25hbCk7XG5cbiAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGFyZ2V0UmVmZXJlbmNlID0gdGFyZ2V0UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlID0gcmVwbGFjZW1lbnRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gbmV3IFJlZmVyZW5jZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldFJlZmVyZW5jZSwgcmVwbGFjZW1lbnRSZWZlcmVuY2UpO1xuXG4gIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlc29sdmVkID0gcmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KTtcblxuICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29uc3RydWN0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHByb3Zpc2lvbmFsLCBjb25zdHJ1Y3Rvcik7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gbmV3IENvbXBsZXhUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBzdXBlclR5cGVzLCBwcm92aXNpb25hbCk7XG5cbiAgcmV0dXJuIGNvbXBsZXhUeXBlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YVR5cGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgIG5hbWUgPSB0eXBlTmFtZTsgIC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gbnVsbDtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgY29uc3QgcHJvb2ZOb2RlID0gcnVsZU5vZGUuZ2V0UHJvb2ZOb2RlKCk7XG5cbiAgaWYgKHByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlcyA9IHJ1bGVOb2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VOb2RlcyA9IHJ1bGVOb2RlLmdldFByZW1pc2VOb2RlcygpLFxuICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBheGlvbSA9IG51bGw7XG5cbiAgY29uc3QgYXhpb21Ob2RlID0gc2VjdGlvbk5vZGUuZ2V0QXhpb21Ob2RlKCk7XG5cbiAgaWYgKGF4aW9tTm9kZSAhPT0gbnVsbCkge1xuICAgIGF4aW9tID0gYXhpb21Gcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXhpb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbGVtbWEgPSBudWxsO1xuXG4gIGNvbnN0IGxlbW1hTm9kZSA9IHNlY3Rpb25Ob2RlLmdldExlbW1hTm9kZSgpO1xuXG4gIGlmIChsZW1tYU5vZGUgIT09IG51bGwpIHtcbiAgICBsZW1tYSA9IGxlbW1hRnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGVwTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHN0ZXBOb2RlLmdldFJlZmVyZW5jZU5vZGUoKTtcblxuICBpZiAocmVmZXJlbmNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwZXJUeXBlcyA9IG51bGw7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3BlcnRpZXMgPSBudWxsO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4TmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHR5cGVOb2RlLmdldFR5cGVQcmVmaXhOYW1lKCksXG4gICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIHByZWZpeE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbmNsdXNpb25Ob2RlID0gcnVsZU5vZGUuZ2V0Q29uY2x1c2lvbk5vZGUoKSxcbiAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGhlb3JlbSA9IG51bGw7XG5cbiAgY29uc3QgdGhlb3JlbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRUaGVvcmVtTm9kZSgpO1xuXG4gIGlmICh0aGVvcmVtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRoZW9yZW0gPSB0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZyYW1lTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IHNpZ25hdHVyZU5vZGUuZ2V0QXNzdW1wdGlvbk5vZGVzKCksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlcml2YXRpb25Ob2RlID0gcHJvb2ZOb2RlLmdldERlcml2YXRpb25Ob2RlKCksXG4gICAgICAgIGRlcml2YXRpb24gPSBkZXJpdmF0aW9uRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3Zpc2lvbmFsRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3Zpc2lvbmFsID0gbnVsbDtcblxuICByZXR1cm4gcHJvdmlzaW9uYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShvY25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBvY25zdHJ1Y3Rvck5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZXMgPSBmcmFtZU5vZGUuZ2V0QXNzdW1wdGlvbk5vZGVzKCksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tQXNzdW1wdGlvbk5vZGVzKGFzc3VtcHRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZXMgPSBlcXVpdmFsZW5jZU5vZGUuZ2V0VGVybU5vZGVzKCksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbGFiZWxOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbmplY3R1cmUgPSBudWxsO1xuXG4gIGNvbnN0IGNvbmplY3R1cmVOb2RlID0gc2VjdGlvbk5vZGUuZ2V0Q29uamVjdHVyZU5vZGUoKTtcblxuICBpZiAoY29uamVjdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICBjb25zdCBlcXVhbGl0eU5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEVxdWFsaXR5Tm9kZSgpO1xuXG4gIGlmIChlcXVhbGl0eU5vZGUgIT09IG51bGwpIHtcbiAgICBlcXVhbGl0eSA9IGVxdWFsaXR5RnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGVxdWFsaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBkZWR1Y3Rpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGp1ZGdlbWVudCA9IG51bGw7XG5cbiAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0SnVkZ2VtZW50Tm9kZSgpO1xuXG4gIGlmIChqdWRnZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4ganVkZ2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwID0gbnVsbDtcblxuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZS5pc1N0ZXBOb2RlKCk7XG5cbiAgaWYgKHN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlKSB7XG4gICAgY29uc3Qgc3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGU7ICAvLy9cblxuICAgIHN0ZXAgPSBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbFR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gIHJldHVybiBub21pbmFsVHlwZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0QXNzdW1wdGlvbk5vZGUoKSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW5vTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29uY2x1c2lub05vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQ7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gaHlwb3RoZXNpc05vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25Ob2RlcyA9IHN1YnByb29mTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDsgLy8vXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1YkRlcml2YXRpb25Ob2RlID0gc3VicHJvb2ZOb2RlLmdldFN1YkRlcml2YXRpb25Ob2RlKCksXG4gICAgICAgIHN1YkRlcnZpYXRpb24gPSBzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3ViRGVydmlhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIHJldHVybiBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSBtZXRhdmFyaWFibGVTdHJpbmcsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHJlZmVyZW5jZVN0cmluZywgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RlcE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUeXBlQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFByb29mTm9kZSgpO1xuXG4gIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN1YnByb29mT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mID0gbnVsbDtcblxuICBjb25zdCBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlID0gc3VicHJvb2ZPclN1YnByb29mTm9kZS5pc1N1YnByb29mTm9kZSgpO1xuXG4gIGlmIChzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZPclN1YnByb29mTm9kZTsgIC8vL1xuXG4gICAgc3VicHJvb2YgPSBzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTm9kZXMgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpXG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlcyA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldERlZmluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRhcmdldFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRhcmdldFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGFyZ2V0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkZWR1Y3Rpb25Ob2RlID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpO1xuXG4gIGlmIChzaWduYXR1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9vZk5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRQcm9vZk5vZGUoKSxcbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldExhYmVsTm9kZSgpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5QXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOb2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkgezBcbiAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29udGFpbmVkQXNzZXJ0aW9uID0gY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZXMoKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMoc3RhdGVtZW50Tm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHNpZ25hdHVyZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB5cG90aGVzZXMgPSBbXTtcblxuICByZXR1cm4geXBvdGhlc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIHRhcmdldEZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKHRhcmdldEZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRhcmdldEZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXNvbHZlZCA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuaXNSZXNvbHZlZCgpO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlZHVjdGlvbk5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFByb2NlZHVyZVJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRUZXJtTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJlcGxhY2VtZW50VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VwZXJUeXBlcyA9IFtdO1xuXG4gIGNvbnN0IHR5cGVzTm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZXNOb2RlKCk7XG5cbiAgaWYgKHR5cGVzTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVzID0gdHlwZXNGcm9tVHlwZXNOb2RlKHR5cGVzTm9kZSwgY29udGV4dCk7XG5cbiAgICBzdXBlclR5cGVzID0gdHlwZXM7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlUHJlZml4Tm9kZSA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZVByZWZpeE5vZGUoKSxcbiAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgY29tYmluYXRvck5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLmdldENvbWJpbmF0b3JOb2RlKCksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldE1ldGFUeXBlTm9kZSgpLFxuICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3Zpc2lvbmFsRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm92aXNpb25hbCA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpO1xuXG4gIHJldHVybiBwcm92aXNpb25hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1cGVyVHlwZXMgPSBbXTtcblxuICBjb25zdCB0eXBlc05vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlc05vZGUoKTtcblxuICBpZiAodHlwZXNOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZXMgPSB0eXBlc0Zyb21UeXBlc05vZGUodHlwZXNOb2RlLCBjb250ZXh0KTtcblxuICAgIHN1cGVyVHlwZXMgPSB0eXBlczsgLy8vXG4gIH1cblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudEZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudEZyYW1lTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKHJlcGxhY2VtZW50RnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZS5nZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IChmcmFtZVN1YnN0aXR1dGlvbiB8fCB0ZXJtU3Vic3RpdHV0aW9uKTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgY29uc3RydWN0b3JOb2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0Q29uc3RydWN0b3JOb2RlKCksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvdmlzaW9uYWwgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvdmlzaW9uYWwgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0UmVmZXJuZWNlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUodGFyZ2V0UmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRhcmdldFJlZmVybmVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSh0YXJnZXRTdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VtZW50UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50UmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUocmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHtcbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tVHlwZXNOb2RlKHR5cGVzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZXMgPSB0eXBlc05vZGUuZ2V0VHlwZU5vZGVzKCksXG4gICAgICAgIHR5cGVzID0gdHlwZU5vZGVzLm1hcCgodHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlbWlzZXMgPSBwcmVtaXNlTm9kZXMubWFwKChwcmVtaXNlTm9kZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2UgPSBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzKHN0YXRlbWVudE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2VzID0gaHlwb3RoZXNpc05vZGVzLm1hcCgoaHlwb3RoZXNlTm9kZSkgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXMgPSBoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tQXNzdW1wdGlvbk5vZGVzKGFzc3VtcHRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25Ob2Rlcy5tYXAoKGFzc3VtcHRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZXMgPSBkZXJpdmF0aW9uTm9kZS5nZXRTdGVwT3JTdWJwcm9vZk5vZGVzKCksXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwT3JTdWJwcm9vZk5vZGVzLm1hcCgoc3RlcE9yU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBzdGVwT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZXMgPSBzdWJEZXJpdmF0aW9uTm9kZS5nZXRTdGVwT3JTdWJwcm9vZk5vZGVzKCksXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwT3JTdWJwcm9vZk5vZGVzLm1hcCgoc3RlcE9yU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBzdGVwT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG4iXSwibmFtZXMiOlsiYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZSIsImFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2RlcyIsImFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZSIsImF4aW9tRnJvbUF4aW9tTm9kZSIsImF4aW9tRnJvbVNlY3Rpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uRnJvbVJ1bGVOb2RlIiwiY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUiLCJkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwiZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZSIsImRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlIiwiZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZSIsImVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZSIsImVycm9yRnJvbUVycm9yTm9kZSIsImZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzIiwiaHlwb3RoZXNlc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlIiwiaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUiLCJqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsImxhYmVsc0Zyb21MYWJlbE5vZGVzIiwibGFiZWxzRnJvbVJ1bGVOb2RlIiwibGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsImxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsImxlbW1hRnJvbUxlbW1hTm9kZSIsImxlbW1hRnJvbVNlY3Rpb25Ob2RlIiwibWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdGhlb3JlbUZyb21NZXRhdGhlb3JlbU5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVR5cGVOb2RlIiwibm9taW5hbFR5cGVOYW1lRnJvbVR5cGVOb2RlIiwicGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByZWZpeE5hbWVGcm9tVHlwZU5vZGUiLCJwcmVtaXNlRnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZXNGcm9tUHJlbWlzZU5vZGVzIiwicHJlbWlzZXNGcm9tUnVsZU5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJwcm9vZkZyb21Qcm9vZk5vZGUiLCJwcm9vZkZyb21SdWxlTm9kZSIsInByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0aWVzRnJvbVR5cGVOb2RlIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvdmlzaW9uYWxGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcm92aXNpb25hbEZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsInByb3Zpc2lvbmFsRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcm92aXNpb25hbEZyb21UeXBlTm9kZSIsInJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21TdGVwTm9kZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJyaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwicnVsZUZyb21SdWxlTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUiLCJzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlIiwic2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZSIsInNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZSIsInN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZSIsInN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUiLCJzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZyb21TdGVwTm9kZSIsInN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN0ZXBGcm9tU3RlcE5vZGUiLCJzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUiLCJzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN1YnByb29mRnJvbVN1YnByb29mTm9kZSIsInN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZXNGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZXNGcm9tVHlwZU5vZGUiLCJzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlIiwic3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwic3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJ0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlIiwidGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwidGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwidGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZSIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJ0aGVvcmVtRnJvbVNlY3Rpb25Ob2RlIiwidGhlb3JlbUZyb21UaGVvcmVtTm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVGVybU5vZGUiLCJ0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21UeXBlTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVzRnJvbVR5cGVzTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwiVHlwZSIsImVsZW1lbnRzIiwibm9kZSIsIm5hbWUiLCJwcmVmaXhOYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsIm5vbWluYWxUeXBlTmFtZSIsInR5cGVTdHJpbmciLCJ0eXBlU3RyaW5nRnJvbU5vbWluYWxUeXBlTmFtZSIsInN0cmluZyIsInRlcm1Ob2RlIiwiVGVybSIsIm5vZGVBc1N0cmluZyIsInRlcm0iLCJzdGVwTm9kZSIsIlN0ZXAiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGVwIiwicnVsZU5vZGUiLCJSdWxlIiwicHJvb2YiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJydWxlU3RyaW5nIiwicnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24iLCJydWxlIiwibGFiZWxOb2RlIiwiTGFiZWwiLCJtZXRhdmFyaWFibGUiLCJsYWJlbCIsImVycm9yTm9kZSIsIkVycm9yIiwiZXJyb3IiLCJsZW1tYU5vZGUiLCJMZW1tYSIsInRvcExldmVsQXNzc2VydGlvbk5vZGUiLCJkZWR1Y3Rpb24iLCJzdXBwb3NpdGlvbnMiLCJzaWduYXR1cmUiLCJoeXBvdGhlc2VzIiwidG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwibGVtbWEiLCJmcmFtZU5vZGUiLCJGcmFtZSIsImFzc3VtcHRpb25zIiwiZnJhbWUiLCJwcm9vZk5vZGUiLCJQcm9vZiIsImRlcml2YXRpb24iLCJheGlvbU5vZGUiLCJBeGlvbSIsImF4aW9tIiwic2VjdGlvbk5vZGUiLCJoeXBvdGhlc2lzTm9kZXMiLCJnZXRIeXBvdGhlc2lzTm9kZXMiLCJ0aGVvcmVtIiwiY29uamVjdHVyZSIsInNlY3Rpb25TdHJpbmciLCJzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNUb3BMZXZlbEFzc2VydGlvbiIsInNlY3Rpb24iLCJTZWN0aW9uIiwicHJlbWlzZU5vZGUiLCJQcmVtaXNlIiwicHJvY2VkdXJlQ2FsbCIsInByZW1pc2UiLCJ0aGVvcmVtTm9kZSIsIlRoZW9yZW0iLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwicHJvcGVydHlOb2RlIiwiUHJvcGVydHkiLCJwcm9wZXJ0eU5hbWUiLCJnZXRQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eSIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwiaWRlbnRpZmllciIsInByb3BlcnR5UmVsYXRpb25zIiwidmFyaWFibGUiLCJzdWJwcm9vZk5vZGUiLCJTdWJwcm9vZiIsInN1YkRlcml2YXRpb24iLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mU3RyaW5nRnJvbVN1cHBvc2l0aW9uc0FuZFN1YkRlcml2YXRpb24iLCJzdWJwcm9vZiIsImVxdWFsaXR5Tm9kZSIsIkVxdWFsaXR5IiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJlcXVhbGl0eSIsImRlZHVjdGlvbk5vZGUiLCJEZWR1Y3Rpb24iLCJzdGF0ZW1lbnROb2RlIiwiU3RhdGVtZW50Iiwic2lnbmF0dXJlTm9kZSIsIlNpZ25hdHVyZSIsInRlcm1zIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsImp1ZGdlbWVudE5vZGUiLCJKdWRnZW1lbnQiLCJhc3N1bXB0aW9uIiwianVkZ2VtZW50IiwibWV0YUxlbW1hTm9kZSIsIk1ldGFMZW1tYSIsIm1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwic3Vic3RpdHV0aW9ucyIsIm1ldGFMZW1tYSIsInBhcmFtZXRlck5vZGUiLCJQYXJhbWV0ZXIiLCJnZXROYW1lIiwiZ2V0SWRlbnRpZmllciIsInBhcmFtZXRlciIsImh5cG90aGVzZU5vZGUiLCJIeXBvdGhzaXMiLCJoeXBvaHRlc2lzIiwiY29uamVjdHVyZU5vZGUiLCJDb25qZWN0dXJlIiwiY29tYmluYXRvck5vZGUiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImNvbmNsdXNpb25Ob2RlIiwiQ29uY2x1c2lvbiIsImFzc3VtcHRpb25Ob2RlIiwiQXNzdW1wdGlvbiIsImRlcml2YXRpb25Ob2RlIiwiRGVyaXZhdGlvbiIsInN0ZXBzT3JTdWJwcm9vZnMiLCJ0eXBlUHJlZml4Tm9kZSIsIlR5cGVQcmVmaXgiLCJ0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlIiwidHlwZUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVQcmVmaXgiLCJjb25zdHJ1Y3Rvck5vZGUiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwic3VwcG9zaXRpb25Ob2RlIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImVxdWl2YWxlbmNlTm9kZSIsIkVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VTdHJpbmciLCJlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyIsImVxdWl2YWxlbmNlIiwibWV0YXRoZW9yZW1Ob2RlIiwiTWV0YXRlaG9yZW0iLCJtZXRhdGhlb3JlbSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN1YkRlcml2YXRpb25Ob2RlIiwiU3ViRGVyaXZhdGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwiVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJwYXJhbWV0ZXJzIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyIsInN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBPclN1YnByb29mIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJEZWZpbmVkQXNzZXJ0aW9uIiwibmVnYXRlZCIsImlzTmVnYXRlZCIsImRlZmluZWRBc3NlcnRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIlByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJUZXJtU3Vic3RpdHV0aW9uIiwidGFyZ2V0VGVybSIsInJlcGxhY2VtZW50VGVybSIsInRlcm1TdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsInRhcmdldEZyYW1lIiwicmVwbGFjZW1lbnRGcmFtZSIsImZyYW1lU3Vic3RpdHV0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIlN1YnByb29mQXNzZXJ0aW9uIiwic3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIkNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJwcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlUmVmZXJlZW5jZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImdldFR5cGVOb2RlIiwiaXNQcm92aXNpb25hbCIsImdldFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJTaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJzaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwidGFyZ2V0UmVmZXJlbmNlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwicmVzb2x2ZWQiLCJzdWJzdGl0dXRpb24iLCJ0YXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudCIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsInR5cGVOYW1lIiwiZ2V0VHlwZU5hbWUiLCJnZXRQcm9vZk5vZGUiLCJsYWJlbE5vZGVzIiwiZ2V0TGFiZWxOb2RlcyIsInByZW1pc2VOb2RlcyIsImdldFByZW1pc2VOb2RlcyIsImdldEF4aW9tTm9kZSIsImdldExlbW1hTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJnZXRSZWZlcmVuY2VOb2RlIiwidHlwZVByZWZpeE5hbWUiLCJnZXRUeXBlUHJlZml4TmFtZSIsImdldENvbmNsdXNpb25Ob2RlIiwiZ2V0VGhlb3JlbU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJ0ZXJtTm9kZXMiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJnZXREZXJpdmF0aW9uTm9kZSIsIm9jbnN0cnVjdG9yTm9kZSIsImdldFRlcm1Ob2RlIiwiYXNzdW1wdGlvbk5vZGVzIiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwiZ2V0VGVybU5vZGVzIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldENvbmplY3R1cmVOb2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJnZXRFcXVhbGl0eU5vZGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJnZXRKdWRnZW1lbnROb2RlIiwic3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUiLCJpc1N0ZXBOb2RlIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJjb25jbHVzaW5vTm9kZSIsImh5cG90aGVzaXNOb2RlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsImdldFN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVydmlhdGlvbiIsIm1ldGF2YXJpYWJsZVN0cmluZyIsImxpdGVyYWxseSIsInJlZmVyZW5jZVN0cmluZyIsImluc3RhbnRpYXRlUmVmZXJlbmNlIiwiZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsImdldFR5cGVBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZPclN1YnByb29mTm9kZSIsInN1YnByb29mT3JTdWJwcm9vZk5vZGVTdWJwcm9vZk5vZGUiLCJpc1N1YnByb29mTm9kZSIsInBhcmFtZXRlck5vZGVzIiwiZ2V0UGFyYW1ldGVyTm9kZXMiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0VGVybU5vZGUiLCJnZXRUYXJnZXRUZXJtTm9kZSIsImdldERlZHVjdGlvbk5vZGUiLCJnZXRTaWduYXR1cmVOb2RlIiwiZ2V0TGFiZWxOb2RlIiwiZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudE5vZGVzIiwiZ2V0U3RhdGVtZW50Tm9kZXMiLCJ5cG90aGVzZXMiLCJ0YXJnZXRGcmFtZU5vZGUiLCJnZXRUYXJnZXRGcmFtZU5vZGUiLCJpc1Jlc29sdmVkIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50VGVybU5vZGUiLCJnZXRSZXBsYWNlbWVudFRlcm1Ob2RlIiwidHlwZXNOb2RlIiwiZ2V0VHlwZXNOb2RlIiwidHlwZXMiLCJnZXRUeXBlUHJlZml4Tm9kZSIsImdldENvbWJpbmF0b3JOb2RlIiwiZ2V0TWV0YVR5cGVOb2RlIiwicmVwbGFjZW1lbnRGcmFtZU5vZGUiLCJnZXRSZXBsYWNlbWVudEZyYW1lTm9kZSIsImdldFByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZ2V0Q29uc3RydWN0b3JOb2RlIiwidGFyZ2V0UmVmZXJlbmNlTm9kZSIsImdldFRhcmdldFJlZmVyZW5jZU5vZGUiLCJ0YXJnZXRSZWZlcm5lY2UiLCJ0YXJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSIsImdldFJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsIm1hcCIsInR5cGVOb2RlcyIsImdldFR5cGVOb2RlcyIsImh5cG90aGVzaXMiLCJzdGVwT3JTdWJwcm9vZk5vZGVzIiwiZ2V0U3RlcE9yU3VicHJv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