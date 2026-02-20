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
    var metaTypeName = metaTypeNode.getMetaTypeName(), metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXMsXG4gICAgICAgICB0eXBlU3RyaW5nRnJvbU5vbWluYWxUeXBlTmFtZSxcbiAgICAgICAgIHJ1bHNTdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uLFxuICAgICAgICAgc2VjdGlvblN0cmluZ0Zyb21IeXBvdGhlc2VzVG9wTGV2ZWxBc3NlcnRpb24sXG4gICAgICAgICBzdWJwcm9vZlN0cmluZ0Zyb21TdXBwb3NpdGlvbnNBbmRTdWJEZXJpdmF0aW9uLFxuICAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzLFxuICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uLFxuICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICB0eXBlID0gYmFzZVR5cGU7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIG5vZGUgPSB0eXBlTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcmVmaXhOYW1lID0gcHJlZml4TmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlU3RyaW5nRnJvbU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpLFxuICAgICAgICAgIHN0cmluZyA9IHR5cGVTdHJpbmc7ICAvLy9cblxuICAgIHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGVwTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwID0gbmV3IFN0ZXAoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSdWxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJ1bGVTdHJpbmcgPSBydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSxcbiAgICAgICAgbm9kZSA9IHJ1bGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IHJ1bGVTdHJpbmcsICAvLy9cbiAgICAgICAgcnVsZSA9IG5ldyBSdWxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvb2YsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gIHJldHVybiBydWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbmV3IExhYmVsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXJyb3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGVycm9yID0gbmV3IEVycm9yKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFGcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExlbW1hIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSA9IGxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG5vZGUgPSBsZW1tYU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBsZW1tYSA9IG5ldyBMZW1tYShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiBsZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9vZk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvb2YgPSBuZXcgUHJvb2YoY29udGV4dCwgc3RyaW5nLCBub2RlLCBkZXJpdmF0aW9uKTtcblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbUZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXhpb20gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gYXhpb21Ob2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IGF4aW9tTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbkZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2lzTm9kZXMgPSBzZWN0aW9uTm9kZS5nZXRIeXBvdGhlc2lzTm9kZXMoKSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCksXG4gICAgICAgIGF4aW9tID0gYXhpb21Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZW1tYSA9IGxlbW1hRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNlY3Rpb25TdHJpbmcgPSBzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNUb3BMZXZlbEFzc2VydGlvbihoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUpLFxuICAgICAgICBub2RlID0gc2VjdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBzZWN0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlKTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByZW1pc2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gcHJlbWlzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gdGhlb3JlbU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICB0aGVvcmVtID0gbmV3IFRoZW9yZW0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5Tm9kZS5nZXRQcm9wZXJ0eU5hbWUoKSxcbiAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IHByb3BlcnR5TmFtZSwgIC8vL1xuICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdLFxuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VicHJvb2YgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VicHJvb2ZOb2RlLCAvLy9cbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJEZXJpdmF0aW9uID0gc3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZlN0cmluZ0Zyb21TdXBwb3NpdGlvbnNBbmRTdWJEZXJpdmF0aW9uKHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbiwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN1YnByb29mU3RyaW5nLCAgLy8vXG4gICAgICAgIHN1YnByb29mID0gbmV3IFN1YnByb29mKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKTtcblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXF1YWxpdHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXF1YWxpdHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2YgPSBuZXcgRXF1YWxpdHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVkdWN0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlZHVjdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IG5ldyBEZWR1Y3Rpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpZ25hdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgSnVkZ2VtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGp1ZGdlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgZnJhbWUsIGFzc3VtcHRpb24pO1xuXG4gIHJldHVybiBqdWRnZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YUxlbW1hIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUgPSBtZXRhTGVtbWFOb2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG51bGwsXG4gICAgICAgIG5vZGUgPSBtZXRhTGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgbWV0YUxlbW1hID0gbmV3IE1ldGFMZW1tYShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIHJldHVybiBtZXRhTGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHBhcmFtZXRlck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpLFxuICAgICAgICBpZGVudGlmaWVyID0gcGFyYW1ldGVyTm9kZS5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBpZGVudGlmaWVyKTtcblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgSHlwb3Roc2lzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGh5cG90aGVzZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXIgPSBuZXcgSHlwb3Roc2lzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gY29uamVjdHVyZU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gY29uamVjdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBjb25qZWN0dXJlID0gbmV3IENvbmplY3R1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25jbHVzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uID0gbmV3IENvbmNsdXNpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IG5ldyBBc3N1bXB0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlcml2YXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVyaXZhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZXJpdmF0aW9uID0gbmV3IERlcml2YXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlUHJlZml4ID0gbmV3IFR5cGVQcmVmaXgoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25zdHJ1Y3Rvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1cHBvc2l0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXF1aXZhbGVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXF1aXZhbGVuY2VOb2RlLCAvLy9cbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXF1aXZhbGVuY2VTdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyh0ZXJtcyksXG4gICAgICAgIHN0cmluZyA9IGVxdWl2YWxlbmNlU3RyaW5nLCAvLy9cbiAgICAgICAgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF0ZWhvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUgPSBtZXRhdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBzdWJzdGl0dXRpb25zID0gbnVsbCxcbiAgICAgICAgbm9kZSA9IG1ldGFMZW1tYU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBtZXRhdGhlb3JlbSA9IG5ldyBNZXRhdGVob3JlbShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgbWV0YVR5cGUgPSBudWxsLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSwgbWV0YVR5cGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3ViRGVyaXZhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdWJEZXJpdmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IG5ldyBTdWJEZXJpdmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RlcHNPclN1YnByb29mcyk7XG5cbiAgcmV0dXJuIHN1YkRlcml2YXRpb247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlQXNzZXJ0aW9uID0gbmV3IFR5cGVBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsU3RyaW5nID0gcHJvY2VkdXJlQ2FsbFN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHByb2NlZHVyZVJlZmVyZW5jZSwgcGFyYW1ldGVycyksXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZUNhbGxTdHJpbmcsIC8vL1xuICAgICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcCA9IHN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXBPclN1YnByb29mID0gKHN0ZXAgfHwgc3VicHJvb2YpO1xuXG4gIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWZpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBuZXcgRGVmaW5lZEFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKTtcblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eVJlbGF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gbmV3IFByb3BlcnR5UmVsYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBwcm9wZXJ0eSwgdGVybSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IHRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRUZXJtLCByZXBsYWNlbWVudFRlcm0pO1xuXG4gIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGFyZ2V0RnJhbWUgPSB0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0RnJhbWUsIHJlcGxhY2VtZW50RnJhbWUpO1xuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBuZXcgUHJvcGVydHlBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcblxuICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VicHJvb2ZBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudHMpO1xuXG4gIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb250YWluZWRBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IG5ldyBDb250YWluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNhdGlzZmllc0Fzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IG5ldyBTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzaWduYXR1cmUsIHJlZmVyZW5jZSk7XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgUHJvY2VkdXJlUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgcHJvdmlzaW9uYWwgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgVmFyaWFibGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHZhcmlhYmxlLCBwcm92aXNpb25hbCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZVByZWZpeERlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb24gPSBuZXcgVHlwZVByZWZpeERlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZVByZWZpeCk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21iaW5hdG9yRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29tYmluYXRvckRlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29tYmluYXRvcik7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVmaXhlZCA9IHByZWZpeGVkRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IG5ldyBTaW1wbGVUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcmVmaXhlZCk7XG5cbiAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGFyZ2V0UmVmZXJlbmNlID0gdGFyZ2V0UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlID0gcmVwbGFjZW1lbnRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gbmV3IFJlZmVyZW5jZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldFJlZmVyZW5jZSwgcmVwbGFjZW1lbnRSZWZlcmVuY2UpO1xuXG4gIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlc29sdmVkID0gcmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KTtcblxuICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29uc3RydWN0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGNvbnN0cnVjdG9yKTtcblxuICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByZWZpeGVkID0gcHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gbmV3IENvbXBsZXhUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcmVmaXhlZCk7XG5cbiAgcmV0dXJuIGNvbXBsZXhUeXBlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YVR5cGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCksXG4gICAgbmFtZSA9IHR5cGVOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSBydWxlTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGVzID0gcnVsZU5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlbWlzZU5vZGVzID0gcnVsZU5vZGUuZ2V0UHJlbWlzZU5vZGVzKCksXG4gICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tUHJlbWlzZU5vZGVzKHByZW1pc2VOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGF4aW9tID0gbnVsbDtcblxuICBjb25zdCBheGlvbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRBeGlvbU5vZGUoKTtcblxuICBpZiAoYXhpb21Ob2RlICE9PSBudWxsKSB7XG4gICAgYXhpb20gPSBheGlvbUZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBheGlvbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsZW1tYSA9IG51bGw7XG5cbiAgY29uc3QgbGVtbWFOb2RlID0gc2VjdGlvbk5vZGUuZ2V0TGVtbWFOb2RlKCk7XG5cbiAgaWYgKGxlbW1hTm9kZSAhPT0gbnVsbCkge1xuICAgIGxlbW1hID0gbGVtbWFGcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0ZXBOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gc3RlcE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChyZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVzID0gbnVsbDtcblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydGllcyA9IG51bGw7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKSxcbiAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWU7ICAvLy9cblxuICByZXR1cm4gcHJlZml4TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgY29uY2x1c2lvbk5vZGUgPSBydWxlTm9kZS5nZXRDb25jbHVzaW9uTm9kZSgpLFxuICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0aGVvcmVtID0gbnVsbDtcblxuICBjb25zdCB0aGVvcmVtTm9kZSA9IHNlY3Rpb25Ob2RlLmdldFRoZW9yZW1Ob2RlKCk7XG5cbiAgaWYgKHRoZW9yZW1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGhlb3JlbSA9IHRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUodGhlb3JlbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRoZW9yZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZnJhbWVOb2RlID0ganVkZ2VtZW50Tm9kZS5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gc2lnbmF0dXJlTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmF0aW9uRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVyaXZhdGlvbk5vZGUgPSBwcm9vZk5vZGUuZ2V0RGVyaXZhdGlvbk5vZGUoKSxcbiAgICAgICAgZGVyaXZhdGlvbiA9IGRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZXJpdmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvdmlzaW9uYWwgPSBudWxsO1xuXG4gIHJldHVybiBwcm92aXNpb25hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlKG9jbnN0cnVjdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IG9jbnN0cnVjdG9yTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlcyA9IGZyYW1lTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByZW1pc2VOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IGVxdWl2YWxlbmNlTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBsYWJlbE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29uamVjdHVyZSA9IG51bGw7XG5cbiAgY29uc3QgY29uamVjdHVyZU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRDb25qZWN0dXJlTm9kZSgpO1xuXG4gIGlmIChjb25qZWN0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb25qZWN0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXR5RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RXF1YWxpdHlOb2RlKCk7XG5cbiAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGVxdWFsaXR5ID0gZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZXF1YWxpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgIGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXI7ICAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGRlZHVjdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICBjb25zdCBqdWRnZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRKdWRnZW1lbnROb2RlKCk7XG5cbiAgaWYgKGp1ZGdlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBqdWRnZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXAgPSBudWxsO1xuXG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlLmlzU3RlcE5vZGUoKTtcblxuICBpZiAoc3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUpIHtcbiAgICBjb25zdCBzdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZTsgIC8vL1xuXG4gICAgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsVHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0ganVkZ2VtZW50Tm9kZS5nZXRBc3N1bXB0aW9uTm9kZSgpLFxuICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29tYmluYXRvck5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpbm9Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW5vTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBoeXBvdGhlc2lzTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHByZW1pc2VOb2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gc3VicHJvb2ZOb2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50OyAvLy9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3ViRGVyaXZhdGlvbk5vZGUgPSBzdWJwcm9vZk5vZGUuZ2V0U3ViRGVyaXZhdGlvbk5vZGUoKSxcbiAgICAgICAgc3ViRGVydmlhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdWJEZXJ2aWF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2VOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZywgLy8vXG4gICAgICAgICAgc3RyaW5nID0gcmVmZXJlbmNlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBzdGVwTm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFR5cGVBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgdHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHByb29mTm9kZSA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0UHJvb2ZOb2RlKCk7XG5cbiAgaWYgKHByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3VicHJvb2ZPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VicHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mT3JTdWJwcm9vZk5vZGVTdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlLmlzU3VicHJvb2ZOb2RlKCk7XG5cbiAgaWYgKHN1YnByb29mT3JTdWJwcm9vZk5vZGVTdWJwcm9vZk5vZGUpIHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlOyAgLy8vXG5cbiAgICBzdWJwcm9vZiA9IHN1YnByb29mRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dClcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGVzID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBkZWZpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBkZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOb2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGFyZ2V0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0YXJnZXRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlZHVjdGlvbk5vZGUgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldERlZHVjdGlvbk5vZGUoKSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2lnbmF0dXJlID0gbnVsbDtcblxuICBjb25zdCBzaWduYXR1cmVOb2RlID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCk7XG5cbiAgaWYgKHNpZ25hdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb29mTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldFByb29mTm9kZSgpLFxuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvcGVydHlBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHswXG4gIGxldCBjb250YWluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IGNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGVzKCksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzKHN0YXRlbWVudE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzaWduYXR1cmVOb2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeXBvdGhlc2VzID0gW107XG5cbiAgcmV0dXJuIHlwb3RoZXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldEZyYW1lTm9kZSgpLFxuICAgICAgICB0YXJnZXRGcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZSh0YXJnZXRGcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0YXJnZXRGcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlZml4ZWQgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJlZml4ZWQoKTtcblxuICByZXR1cm4gcHJlZml4ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVzb2x2ZWQgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmlzUmVzb2x2ZWQoKTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkZWR1Y3Rpb25Ob2RlID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlZml4ZWQgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5pc1ByZWZpeGVkKCk7XG5cbiAgcmV0dXJuIHByZWZpeGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50VGVybU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyZXBsYWNlbWVudFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVByZWZpeE5vZGUgPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLmdldFR5cGVQcmVmaXhOb2RlKCksXG4gICAgICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JOb2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZS5nZXRDb21iaW5hdG9yTm9kZSgpLFxuICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFUeXBlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhVHlwZU5vZGUoKSxcbiAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRGcmFtZU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShyZXBsYWNlbWVudEZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50RnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25Ob2RlcyA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSAoZnJhbWVTdWJzdGl0dXRpb24gfHwgdGVybVN1YnN0aXR1dGlvbik7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldENvbnN0cnVjdG9yTm9kZSgpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRSZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHRhcmdldFJlZmVybmVjZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKHRhcmdldFJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0YXJnZXRSZWZlcm5lY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUodGFyZ2V0U3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRhcmdldFN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlbWVudFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRSZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCB0ZXJtcyA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21QcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VzID0gcHJlbWlzZU5vZGVzLm1hcCgocHJlbWlzZU5vZGUpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlID0gcHJlbWlzZUZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyhzdGF0ZW1lbnROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVycyA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyhoeXBvdGhlc2lzTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaHlwb3RoZXNlcyA9IGh5cG90aGVzaXNOb2Rlcy5tYXAoKGh5cG90aGVzZU5vZGUpID0+IHtcbiAgICBjb25zdCBoeXBvdGhlc2lzID0gaHlwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9KTtcblxuICByZXR1cm4gaHlwb3RoZXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2Rlcyhhc3N1bXB0aW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uTm9kZXMubWFwKChhc3N1bXB0aW9uTm9kZSkgPT4ge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uTm9kZXMubWFwKChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVzID0gZGVyaXZhdGlvbk5vZGUuZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcygpLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcE9yU3VicHJvb2ZOb2Rlcy5tYXAoKHN0ZXBPclN1YnByb29mTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mID0gc3RlcHNPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHNPclN1YnByb29mcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IHN1YkRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG4iXSwibmFtZXMiOlsiYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZSIsImFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2RlcyIsImFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZSIsImF4aW9tRnJvbUF4aW9tTm9kZSIsImF4aW9tRnJvbVNlY3Rpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uRnJvbVJ1bGVOb2RlIiwiY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUiLCJkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwiZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZSIsImRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlIiwiZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZSIsImVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZSIsImVycm9yRnJvbUVycm9yTm9kZSIsImZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzIiwiaHlwb3RoZXNlc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlIiwiaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUiLCJqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsImxhYmVsc0Zyb21MYWJlbE5vZGVzIiwibGFiZWxzRnJvbVJ1bGVOb2RlIiwibGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsImxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsImxlbW1hRnJvbUxlbW1hTm9kZSIsImxlbW1hRnJvbVNlY3Rpb25Ob2RlIiwibWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdGhlb3JlbUZyb21NZXRhdGhlb3JlbU5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVR5cGVOb2RlIiwibm9taW5hbFR5cGVOYW1lRnJvbVR5cGVOb2RlIiwicGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByZWZpeE5hbWVGcm9tVHlwZU5vZGUiLCJwcmVmaXhlZEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByZWZpeGVkRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVtaXNlRnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZXNGcm9tUHJlbWlzZU5vZGVzIiwicHJlbWlzZXNGcm9tUnVsZU5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJwcm9vZkZyb21Qcm9vZk5vZGUiLCJwcm9vZkZyb21SdWxlTm9kZSIsInByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0aWVzRnJvbVR5cGVOb2RlIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvdmlzaW9uYWxGcm9tVHlwZU5vZGUiLCJyZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tU3RlcE5vZGUiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJyZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwicmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsInJ1bGVGcm9tUnVsZU5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlIiwic2VjdGlvbkZyb21TZWN0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUiLCJzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlIiwic3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlIiwic3RhdGVtZW50RnJvbVByZW1pc2VOb2RlIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RlcE5vZGUiLCJzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzIiwic3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdGVwRnJvbVN0ZXBOb2RlIiwic3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwc09yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlIiwic3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJzdXBlclR5cGVzRnJvbVR5cGVOb2RlIiwic3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwidGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZSIsInRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUiLCJ0ZXJtc0Zyb21TaWduYXR1cmVOb2RlIiwidGVybXNGcm9tVGVybU5vZGVzIiwidGhlb3JlbUZyb21TZWN0aW9uTm9kZSIsInRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUiLCJ0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJ0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVGVybU5vZGUiLCJ0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21UeXBlTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwiVHlwZSIsImVsZW1lbnRzIiwibm9kZSIsIm5hbWUiLCJwcmVmaXhOYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsIm5vbWluYWxUeXBlTmFtZSIsInR5cGVTdHJpbmciLCJ0eXBlU3RyaW5nRnJvbU5vbWluYWxUeXBlTmFtZSIsInN0cmluZyIsInRlcm1Ob2RlIiwiVGVybSIsIm5vZGVBc1N0cmluZyIsInRlcm0iLCJzdGVwTm9kZSIsIlN0ZXAiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGVwIiwicnVsZU5vZGUiLCJSdWxlIiwicHJvb2YiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJydWxlU3RyaW5nIiwicnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24iLCJydWxlIiwibGFiZWxOb2RlIiwiTGFiZWwiLCJtZXRhdmFyaWFibGUiLCJsYWJlbCIsImVycm9yTm9kZSIsIkVycm9yIiwiZXJyb3IiLCJsZW1tYU5vZGUiLCJMZW1tYSIsInRvcExldmVsQXNzc2VydGlvbk5vZGUiLCJkZWR1Y3Rpb24iLCJzdXBwb3NpdGlvbnMiLCJzaWduYXR1cmUiLCJoeXBvdGhlc2VzIiwidG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwibGVtbWEiLCJmcmFtZU5vZGUiLCJGcmFtZSIsImFzc3VtcHRpb25zIiwiZnJhbWUiLCJwcm9vZk5vZGUiLCJQcm9vZiIsImRlcml2YXRpb24iLCJheGlvbU5vZGUiLCJBeGlvbSIsImF4aW9tIiwic2VjdGlvbk5vZGUiLCJoeXBvdGhlc2lzTm9kZXMiLCJnZXRIeXBvdGhlc2lzTm9kZXMiLCJ0aGVvcmVtIiwiY29uamVjdHVyZSIsInNlY3Rpb25TdHJpbmciLCJzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNUb3BMZXZlbEFzc2VydGlvbiIsInNlY3Rpb24iLCJTZWN0aW9uIiwicHJlbWlzZU5vZGUiLCJQcmVtaXNlIiwicHJvY2VkdXJlQ2FsbCIsInByZW1pc2UiLCJ0aGVvcmVtTm9kZSIsIlRoZW9yZW0iLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwicHJvcGVydHlOb2RlIiwiUHJvcGVydHkiLCJwcm9wZXJ0eU5hbWUiLCJnZXRQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eSIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwiaWRlbnRpZmllciIsInByb3BlcnR5UmVsYXRpb25zIiwidmFyaWFibGUiLCJzdWJwcm9vZk5vZGUiLCJTdWJwcm9vZiIsInN1YkRlcml2YXRpb24iLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mU3RyaW5nRnJvbVN1cHBvc2l0aW9uc0FuZFN1YkRlcml2YXRpb24iLCJzdWJwcm9vZiIsImVxdWFsaXR5Tm9kZSIsIkVxdWFsaXR5IiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJkZWR1Y3Rpb25Ob2RlIiwiRGVkdWN0aW9uIiwic3RhdGVtZW50Tm9kZSIsIlN0YXRlbWVudCIsInNpZ25hdHVyZU5vZGUiLCJTaWduYXR1cmUiLCJ0ZXJtcyIsInJlZmVyZW5jZU5vZGUiLCJSZWZlcmVuY2UiLCJqdWRnZW1lbnROb2RlIiwiSnVkZ2VtZW50IiwiYXNzdW1wdGlvbiIsImp1ZGdlbWVudCIsIm1ldGFMZW1tYU5vZGUiLCJNZXRhTGVtbWEiLCJtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJtZXRhTGVtbWEiLCJwYXJhbWV0ZXJOb2RlIiwiUGFyYW1ldGVyIiwiZ2V0TmFtZSIsImdldElkZW50aWZpZXIiLCJwYXJhbWV0ZXIiLCJoeXBvdGhlc2VOb2RlIiwiSHlwb3Roc2lzIiwiY29uamVjdHVyZU5vZGUiLCJDb25qZWN0dXJlIiwiY29tYmluYXRvck5vZGUiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImNvbmNsdXNpb25Ob2RlIiwiQ29uY2x1c2lvbiIsImFzc3VtcHRpb25Ob2RlIiwiQXNzdW1wdGlvbiIsImRlcml2YXRpb25Ob2RlIiwiRGVyaXZhdGlvbiIsInN0ZXBzT3JTdWJwcm9vZnMiLCJ0eXBlUHJlZml4Tm9kZSIsIlR5cGVQcmVmaXgiLCJ0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlIiwidHlwZUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVQcmVmaXgiLCJjb25zdHJ1Y3Rvck5vZGUiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwic3VwcG9zaXRpb25Ob2RlIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImVxdWl2YWxlbmNlTm9kZSIsIkVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VTdHJpbmciLCJlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyIsImVxdWl2YWxlbmNlIiwibWV0YXRoZW9yZW1Ob2RlIiwiTWV0YXRlaG9yZW0iLCJtZXRhdGhlb3JlbSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN1YkRlcml2YXRpb25Ob2RlIiwiU3ViRGVyaXZhdGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwiVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJwYXJhbWV0ZXJzIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyIsInN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBPclN1YnByb29mIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJEZWZpbmVkQXNzZXJ0aW9uIiwibmVnYXRlZCIsImlzTmVnYXRlZCIsImRlZmluZWRBc3NlcnRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIlByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJUZXJtU3Vic3RpdHV0aW9uIiwidGFyZ2V0VGVybSIsInJlcGxhY2VtZW50VGVybSIsInRlcm1TdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsInRhcmdldEZyYW1lIiwicmVwbGFjZW1lbnRGcmFtZSIsImZyYW1lU3Vic3RpdHV0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIlN1YnByb29mQXNzZXJ0aW9uIiwic3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIkNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJwcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJnZXRUeXBlTm9kZSIsImlzUHJvdmlzaW9uYWwiLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsIlR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb21iaW5hdG9yRGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwiU2ltcGxlVHlwZURlY2xhcmF0aW9uIiwicHJlZml4ZWQiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwidGFyZ2V0UmVmZXJlbmNlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwicmVzb2x2ZWQiLCJzdWJzdGl0dXRpb24iLCJ0YXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudCIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsInR5cGVOYW1lIiwiZ2V0VHlwZU5hbWUiLCJnZXRQcm9vZk5vZGUiLCJsYWJlbE5vZGVzIiwiZ2V0TGFiZWxOb2RlcyIsInByZW1pc2VOb2RlcyIsImdldFByZW1pc2VOb2RlcyIsImdldEF4aW9tTm9kZSIsImdldExlbW1hTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJnZXRSZWZlcmVuY2VOb2RlIiwidHlwZVByZWZpeE5hbWUiLCJnZXRUeXBlUHJlZml4TmFtZSIsImdldENvbmNsdXNpb25Ob2RlIiwiZ2V0VGhlb3JlbU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJ0ZXJtTm9kZXMiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJnZXREZXJpdmF0aW9uTm9kZSIsIm9jbnN0cnVjdG9yTm9kZSIsImdldFRlcm1Ob2RlIiwiYXNzdW1wdGlvbk5vZGVzIiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwiZ2V0VGVybU5vZGVzIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldENvbmplY3R1cmVOb2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJlcXVhbGl0eSIsImdldEVxdWFsaXR5Tm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsImdldEp1ZGdlbWVudE5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSIsImlzU3RlcE5vZGUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImNvbmNsdXNpbm9Ob2RlIiwiaHlwb3RoZXNpc05vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJ2aWF0aW9uIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibGl0ZXJhbGx5IiwicmVmZXJlbmNlU3RyaW5nIiwiaW5zdGFudGlhdGVSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VHlwZUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSIsImlzU3VicHJvb2ZOb2RlIiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRUZXJtTm9kZSIsImdldFRhcmdldFRlcm1Ob2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50Tm9kZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsInlwb3RoZXNlcyIsInRhcmdldEZyYW1lTm9kZSIsImdldFRhcmdldEZyYW1lTm9kZSIsImlzUHJlZml4ZWQiLCJpc1Jlc29sdmVkIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50VGVybU5vZGUiLCJnZXRSZXBsYWNlbWVudFRlcm1Ob2RlIiwiZ2V0VHlwZVByZWZpeE5vZGUiLCJnZXRDb21iaW5hdG9yTm9kZSIsImdldE1ldGFUeXBlTm9kZSIsInJlcGxhY2VtZW50RnJhbWVOb2RlIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZU5vZGUiLCJnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImdldENvbnN0cnVjdG9yTm9kZSIsInRhcmdldFJlZmVyZW5jZU5vZGUiLCJnZXRUYXJnZXRSZWZlcmVuY2VOb2RlIiwidGFyZ2V0UmVmZXJuZWNlIiwidGFyZ2V0U3RhdGVtZW50Tm9kZSIsImdldFRhcmdldFN0YXRlbWVudE5vZGUiLCJyZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUiLCJnZXRSZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudE5vZGUiLCJtYXAiLCJoeXBvdGhlc2lzIiwic3RlcE9yU3VicHJvb2ZOb2RlcyIsImdldFN0ZXBPclN1YnByb29mTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXFYZ0JBO2VBQUFBOztRQW1vQkFDO2VBQUFBOztRQXVxQkFDO2VBQUFBOztRQTN6QkFDO2VBQUFBOztR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