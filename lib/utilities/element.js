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
    get frameFromJDefinedAssertionNode () {
        return frameFromJDefinedAssertionNode;
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
    get identifierFromParameterNode () {
        return identifierFromParameterNode;
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
    get nameFromMetavariableNode () {
        return nameFromMetavariableNode;
    },
    get nameFromParaneterNode () {
        return nameFromParaneterNode;
    },
    get nameFromProcedureReferenceNode () {
        return nameFromProcedureReferenceNode;
    },
    get nameFromPropertyNode () {
        return nameFromPropertyNode;
    },
    get nameFromTypeNode () {
        return nameFromTypeNode;
    },
    get nameFromTypePrefixNode () {
        return nameFromTypePrefixNode;
    },
    get negatedFromContainedAssertionNode () {
        return negatedFromContainedAssertionNode;
    },
    get negatedFromJDefinedAssertionNode () {
        return negatedFromJDefinedAssertionNode;
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
    get referenceFromFrameNode () {
        return referenceFromFrameNode;
    },
    get referenceFromJSatisfiesAssertionNode () {
        return referenceFromJSatisfiesAssertionNode;
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
    get referencesFromMetavariableNode () {
        return referencesFromMetavariableNode;
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
    get signatureFromJSatisfiesAssertionNode () {
        return signatureFromJSatisfiesAssertionNode;
    },
    get signatureFromJSignatureNode () {
        return signatureFromJSignatureNode;
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
    get termFromJDefinedAssertionNode () {
        return termFromJDefinedAssertionNode;
    },
    get termFromMetavariableNode () {
        return termFromMetavariableNode;
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
    get typeFromConstructorNode () {
        return typeFromConstructorNode;
    },
    get typeFromMetavariableNode () {
        return typeFromMetavariableNode;
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
const _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
const _context = require("../utilities/context");
const _type = require("../utilities/type");
const _instantiate = require("../process/instantiate");
const _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function typeFromTypeNode(typeNode, context) {
    let type;
    if (typeNode === null) {
        const baseType = (0, _type.baseTypeFromNothing)();
        type = baseType; ///
    } else {
        const { Type } = _elements.default, node = typeNode, name = nameFromTypeNode(typeNode, context), prefixName = prefixNameFromTypeNode(typeNode, context), superTypes = superTypesFromTypeNode(typeNode, context), properties = propertiesFromTypeNode(typeNode, context), provisional = provisionalFromTypeNode(typeNode, context), nominalTypeName = nominalTypeNameFromTypeNode(typeNode, context), typeString = (0, _string.typeStringFromNominalTypeName)(nominalTypeName), string = typeString; ///
        context = null;
        type = new Type(context, string, node, name, prefixName, superTypes, properties, provisional);
    }
    return type;
}
function termFromTermNode(termNode, context) {
    const { Term } = _elements.default, node = termNode, string = context.nodeAsString(node), type = typeFromTermNode(termNode, context);
    context = null;
    const term = new Term(context, string, node, type);
    return term;
}
function stepFromStepNode(stepNode, context) {
    const { Step } = _elements.default, node = stepNode, string = context.nodeAsString(node), statement = statementFromStepNode(stepNode, context), reference = referenceFromStepNode(stepNode, context), satisfiesAssertion = satisfiesAssertionFromStepNode(stepNode, context);
    context = null;
    const step = new Step(context, string, node, statement, reference, satisfiesAssertion);
    return step;
}
function ruleFromRuleNode(ruleNode, context) {
    const { Rule } = _elements.default, proof = proofFromRuleNode(ruleNode, context), labels = labelsFromRuleNode(ruleNode, context), premises = premisesFromRuleNode(ruleNode, context), conclusion = conclusionFromRuleNode(ruleNode, context), ruleString = (0, _string.rulsStringFromLabelsPremisesAndConclusion)(labels, premises, conclusion), node = ruleNode, string = ruleString, rule = new Rule(context, string, node, proof, labels, premises, conclusion);
    return rule;
}
function labelFromLabelNode(labelNode, context) {
    const { Label } = _elements.default, node = labelNode, string = context.nodeAsString(node), metavariable = metavariableFromLabelNode(labelNode, context), label = new Label(context, string, node, metavariable);
    return label;
}
function errorFromErrorNode(errorNode, context) {
    const { Error } = _elements.default, node = errorNode, string = context.nodeAsString(node), error = new Error(context, string, node);
    return error;
}
function lemmaFromLemmaNode(lemmaNode, context) {
    const { Lemma } = _elements.default, topLevelAsssertionNode = lemmaNode, proof = proofFromTopLevelAssertionNode(topLevelAsssertionNode, context), labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context), deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context), suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context), signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context), hypotheses = hypothesesFromTopLevelAssertionNode(topLevelAsssertionNode, context), topLevelAsssertionString = (0, _string.topLevelAssertionStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = lemmaNode, string = topLevelAsssertionString, lemma = new Lemma(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return lemma;
}
function frameFromFrameNode(frameNode, context) {
    const { Frame } = _elements.default, node = frameNode, string = context.nodeAsString(node), reference = referenceFromFrameNode(frameNode, context), assumptions = assumptionsFromFrameNode(frameNode, context);
    context = null;
    const frame = new Frame(context, string, node, reference, assumptions);
    return frame;
}
function proofFromProofNode(proofNode, context) {
    const { Proof } = _elements.default, node = proofNode, string = null, derivation = derivationFromProofNode(proofNode, context);
    context = null;
    const proof = new Proof(context, string, node, derivation);
    return proof;
}
function axiomFromAxiomNode(axiomNode, context) {
    const { Axiom } = _elements.default, topLevelAsssertionNode = axiomNode, proof = proofFromTopLevelAssertionNode(topLevelAsssertionNode, context), labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context), deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context), suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context), signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context), hypotheses = [], topLevelAsssertionString = (0, _string.topLevelAssertionStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = axiomNode, string = topLevelAsssertionString, axiom = new Axiom(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return axiom;
}
function sectionFromSectionNode(sectionNode, context) {
    const hypothesisNodes = sectionNode.getHypothesisNodes(), hypotheses = hypothesesFromHypothesisNodes(hypothesisNodes, context), axiom = axiomFromSectionNode(sectionNode, context), lemma = lemmaFromSectionNode(sectionNode, context), theorem = theoremFromSectionNode(sectionNode, context), conjecture = conjectureFromSectionNode(sectionNode, context), sectionString = (0, _string.sectionStringFromHypothesesTopLevelAssertion)(hypotheses, axiom, lemma, theorem, conjecture), node = sectionNode, string = sectionString; ///
    context = null;
    const section = new Section(context, string, node, hypotheses, axiom, lemma, theorem, conjecture);
    return section;
}
function premiseFromPremiseNode(premiseNode, context) {
    const { Premise } = _elements.default, node = premiseNode, string = context.nodeAsString(node), statement = statementFromPremiseNode(premiseNode, context), procedureCall = procedureCallFromPremiseNode(premiseNode, context);
    context = null;
    const premise = new Premise(context, string, node, statement, procedureCall);
    return premise;
}
function theoremFromTheoremNode(theoremNode, context) {
    const { Theorem } = _elements.default, topLevelAsssertionNode = theoremNode, proof = proofFromTopLevelAssertionNode(topLevelAsssertionNode, context), labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context), deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context), suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context), signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context), hypotheses = [], topLevelAsssertionString = (0, _string.topLevelAssertionStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = theoremNode, string = topLevelAsssertionString, theorem = new Theorem(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return theorem;
}
function metaTypeFromMetaTypeNode(metaTypeNode, context) {
    const metaTypeName = metaTypeNode.getMetaTypeName(), metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
    return metaType;
}
function propertyFromPropertyNode(propertyNode, context) {
    const { Property } = _elements.default, node = propertyNode, string = context.nodeAsString(node), propertyName = propertyNode.getPropertyName(), nominalTypeName = null, name = propertyName; ///
    context = null;
    const property = new Property(context, string, node, name, nominalTypeName);
    return property;
}
function variableFromVariableNode(variableNode, context) {
    const { Variable } = _elements.default, node = variableNode, string = context.nodeAsString(node), type = null, identifier = identifierFromVarialbeNode(variableNode, context), propertyRelations = [];
    context = null;
    const variable = new Variable(context, string, node, type, identifier, propertyRelations);
    return variable;
}
function subproofFromSubproofNode(subproofNode, context) {
    const { Subproof } = _elements.default, node = subproofNode, suppositions = suppositionsFromSubproofNode(subproofNode, context), subDerivation = subDerivationFromSubproofNode(subproofNode, context), subproofString = (0, _string.subproofStringFromSuppositionsAndSubDerivation)(suppositions, subDerivation, context), string = subproofString; ///
    context = null;
    const subproof = new Subproof(context, string, node, suppositions, subDerivation);
    return subproof;
}
function equalityFromEqualityNode(equalityNode, context) {
    const { Equality } = _elements.default, node = equalityNode, string = context.nodeAsString(node), leftTerm = leftTermFromEqualityNode(equalityNode, context), rightTerm = rightTermFromEqualityNode(equalityNode, context);
    context = null;
    const equality = new Equality(context, string, node, leftTerm, rightTerm);
    return equality;
}
function deductionFromDeductionNode(deductionNode, context) {
    const { Deduction } = _elements.default, node = deductionNode, string = context.nodeAsString(node), statement = statementFromDeductionNode(deductionNode, context);
    context = null;
    const deduction = new Deduction(context, string, node, statement);
    return deduction;
}
function statementFromStatementNode(statementNode, context) {
    const { Statement } = _elements.default, node = statementNode, string = context.nodeAsString(node);
    context = null;
    const statement = new Statement(context, string, node);
    return statement;
}
function signatureFromSignatureNode(signatureNode, context) {
    const { Signature } = _elements.default, node = signatureNode, string = context.nodeAsString(node), terms = termsFromSignatureNode(signatureNode, context);
    context = null;
    const signature = new Signature(context, string, node, terms);
    return signature;
}
function referenceFromReferenceNode(referenceNode, context) {
    const { Reference } = _elements.default, node = referenceNode, string = context.nodeAsString(node), metavariable = metavariableFromReferenceNode(referenceNode, context), reference = new Reference(context, string, node, metavariable);
    return reference;
}
function judgementFromJudgementNode(judgementNode, context) {
    const { Judgement } = _elements.default, node = judgementNode, string = context.nodeAsString(node), frame = frameFromJudgementNode(judgementNode, context), assumption = assumptionFromJudgementNode(judgementNode, context);
    context = null;
    const judgement = new Judgement(context, string, node, frame, assumption);
    return judgement;
}
function metaLemmaFromMetaLemmaNode(metaLemmaNode, context) {
    const { MetaLemma } = _elements.default, metaLemmaMetathoremNode = metaLemmaNode, proof = proofFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), label = labelFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), deduction = deductionFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), suppositions = suppositionsFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), topLevelMetaAssertionString = (0, _string.topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction)(label, suppositions, deduction), substitutions = null, node = metaLemmaNode, string = topLevelMetaAssertionString, metaLemma = new MetaLemma(context, string, node, label, suppositions, deduction, proof, substitutions);
    return metaLemma;
}
function parameterFromParameterNode(parameterNode, context) {
    const { Parameter } = _elements.default, node = parameterNode, string = context.nodeAsString(node), name = parameterNode.getName(), identifier = parameterNode.getIdentifier();
    context = null;
    const parameter = new Parameter(context, string, node, name, identifier);
    return parameter;
}
function signatureFromJSignatureNode(signatureNode, context) {
    const { Signature } = _elements.default, node = signatureNode, string = context.nodeAsString(node), terms = termsFromSignatureNode(signatureNode, context);
    context = null;
    const signature = new Signature(context, string, node, terms);
    return signature;
}
function hypothesisFromHypothesisNode(hypotheseNode, context) {
    const { Hypothsis } = _elements.default, node = hypotheseNode, string = context.nodeAsString(node), statement = statementFromHypothesisNode(hypotheseNode, context);
    context = null;
    const hypohtesis = new Hypothsis(context, string, node, statement);
    return hypohtesis;
}
function conjectureFromConjectureNode(conjectureNode, context) {
    const { Conjecture } = _elements.default, topLevelAsssertionNode = conjectureNode, proof = proofFromTopLevelAssertionNode(topLevelAsssertionNode, context), labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context), deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context), suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context), signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context), hypotheses = [], topLevelAsssertionString = (0, _string.topLevelAssertionStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = conjectureNode, string = topLevelAsssertionString, conjecture = new Conjecture(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return conjecture;
}
function combinatorFromCombinatorNode(combinatorNode, context) {
    const { Combinator } = _elements.default, node = combinatorNode, string = context.nodeAsString(node), statement = statementFromCombinatorNode(combinatorNode, context), combinator = new Combinator(context, string, node, statement);
    return combinator;
}
function conclusionFromConclusionNode(conclusionNode, context) {
    const { Conclusion } = _elements.default, node = conclusionNode, string = context.nodeAsString(node), statement = statementFromConclusionNode(conclusionNode, context);
    context = null;
    const conclusion = new Conclusion(context, string, node, statement);
    return conclusion;
}
function assumptionFromAssumptionNode(assumptionNode, context) {
    const { Assumption } = _elements.default, node = assumptionNode, string = context.nodeAsString(node), reference = referenceFromAssumptionNode(assumptionNode, context), statement = statementFromAssumptionNode(assumptionNode, context);
    context = null;
    const assumption = new Assumption(context, string, node, reference, statement);
    return assumption;
}
function derivationFromDerivationNode(derivationNode, context) {
    const { Derivation } = _elements.default, node = derivationNode, string = null, stepsOrSubproofs = stepsOrSubproofsFromDerivationNode(derivationNode, context);
    context = null;
    const derivation = new Derivation(context, string, node, stepsOrSubproofs);
    return derivation;
}
function typePrefixFromTypePrefixNode(typePrefixNode, context) {
    const { TypePrefix } = _elements.default, node = typePrefixNode, string = context.nodeAsString(node), term = termFromTypePrefixNode(typePrefixNode, context), type = typeFromTypePrefixNode(typePrefixNode, context);
    context = null;
    const typePrefix = new TypePrefix(context, string, node, term, type);
    return typePrefix;
}
function constructorFromConstructorNode(constructorNode, context) {
    const { Constructor } = _elements.default, node = constructorNode, string = context.nodeAsString(node), term = termFromConstructorNode(constructorNode, context), type = typeFromConstructorNode(constructorNode, context), constructor = new Constructor(context, string, node, term, type);
    return constructor;
}
function suppositionFromSuppositionNode(suppositionNode, context) {
    const { Supposition } = _elements.default, node = suppositionNode, string = context.nodeAsString(node), statement = statementFromSuppositionNode(suppositionNode, context), procedureCall = procedureCallFromSuppositionNode(suppositionNode, context);
    context = null;
    const supposition = new Supposition(context, string, node, statement, procedureCall);
    return supposition;
}
function equivalenceFromEquivalenceNode(equivalenceNode, context) {
    const { Equivalence } = _elements.default, node = equivalenceNode, terms = termsFromEquivalenceNode(equivalenceNode, context), equivalenceString = (0, _string.equivalenceStringFromTerms)(terms), string = equivalenceString; ///
    context = null;
    const equivalence = new Equivalence(context, string, node, terms);
    return equivalence;
}
function metatheoremFromMetatheoremNode(metatheoremNode, context) {
    const { Metatehorem } = _elements.default, metaLemmaMetathoremNode = metatheoremNode, proof = proofFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), label = labelFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), deduction = deductionFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), suppositions = suppositionsFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), topLevelMetaAssertionString = (0, _string.topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction)(label, suppositions, deduction), node = metatheoremNode, string = topLevelMetaAssertionString, substitutions = null, metatheorem = new Metatehorem(context, string, node, label, suppositions, deduction, proof, substitutions);
    return metatheorem;
}
function referencesFromMetavariableNode(metavariableNode, context) {
    const { Reference } = _elements.default, node = metavariableNode, string = context.nodeAsString(node), metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    context = null;
    const reference = new Reference(context, string, node, metavariable);
    return reference;
}
function metavariableFromMetavariableNode(metavariableNode, context) {
    const { Metavariable } = _elements.default, node = metavariableNode, string = context.nodeAsString(node), name = nameFromMetavariableNode(metavariableNode, context), term = termFromMetavariableNode(metavariableNode, context), type = typeFromMetavariableNode(metavariableNode, context), metaType = null, metavariable = new Metavariable(context, string, node, name, term, type, metaType);
    return metavariable;
}
function subDerivationFromSubDerivationNode(subDerivationNode, context) {
    const { SubDerivation } = _elements.default, node = subDerivationNode, string = null, stepsOrSubproofs = stepsOrSubproofsFromSubDerivationNode(subDerivationNode, context);
    context = null;
    const subDerivation = new SubDerivation(context, string, node, stepsOrSubproofs);
    return subDerivation;
}
function typeAssertionFromTypeAssertionNode(typeAssertionNode, context) {
    const { TypeAssertion } = _elements.default, node = typeAssertionNode, string = context.nodeAsString(node), term = termFromTypeAssertionNode(typeAssertionNode, context), type = typeFromTypeAssertionNode(typeAssertionNode, context);
    context = null;
    const typeAssertion = new TypeAssertion(context, string, node, term, type);
    return typeAssertion;
}
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    const { ProcedureCall } = _elements.default, parameters = parametersFromProcedureCallNode(procedureCallNode, context), procedureReference = procedureReferenceFromProcedureCallNode(procedureCallNode, context), procedureCallString = (0, _string.procedureCallStringFromProcedureReferenceAndParameters)(procedureReference, parameters), node = procedureCallNode, string = procedureCallString; ///
    context = null;
    const procedureCall = new ProcedureCall(context, string, node, parameters, procedureReference);
    return procedureCall;
}
function stepOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context) {
    const step = stepFromStepOrSubproofNode(stepOrSubproofNode, context), subproof = subproofFromStepOrSubproofNode(stepOrSubproofNode, context), stepOrSubproof = step || subproof;
    return stepOrSubproof;
}
function definedAssertionFromDefinedAssertionNode(definedAssertionNode, context) {
    const { DefinedAssertion } = _elements.default, node = definedAssertionNode, string = context.nodeAsString(node), negated = definedAssertionNode.isNegated(), term = termFromDefinedAssertionNode(definedAssertionNode, context), frame = frameFromDefinedAssertionNode(definedAssertionNode, context);
    context = null;
    const definedAssertion = new DefinedAssertion(context, string, node, term, frame, negated);
    return definedAssertion;
}
function propertyRelationFromPropertyRelationNode(propertyRelationNode, context) {
    const { PropertyRelation } = _elements.default, node = propertyRelationNode, string = context.nodeAsString(node), term = termFromPropertyRelationNode(propertyRelationNode, context), property = propertyFromPropertyRelationNode(propertyRelationNode, context);
    context = null;
    const propertyRelation = new PropertyRelation(context, string, node, term, property);
    return propertyRelation;
}
function termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context) {
    const { TermSubstitution } = _elements.default, node = termSubstitutionNode, string = context.nodeAsString(node), targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, context), replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, context), termSubstitution = new TermSubstitution(context, string, node, targetTerm, replacementTerm);
    return termSubstitution;
}
function frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    const { FrameSubstitution } = _elements.default, node = frameSubstitutionNode, string = context.nodeAsString(node), targetFrame = targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context), replacementFrame = replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context), frameSubstitution = new FrameSubstitution(context, string, node, targetFrame, replacementFrame);
    return frameSubstitution;
}
function propertyAssertionFromPropertyAssertionNode(propertyAssertionNode, context) {
    const { PropertyAssertion } = _elements.default, node = propertyAssertionNode, string = context.nodeAsString(node), term = termFromPropertyAssertionNode(propertyAssertionNode, context), propertyRelation = propertyRelationFromPropertyAssertionNode(propertyAssertionNode, context);
    context = null;
    const propertyAssertion = new PropertyAssertion(context, string, node, term, propertyRelation);
    return propertyAssertion;
}
function subproofAssertionFromSubproofAssertionNode(subproofAssertionNode, context) {
    const { SubproofAssertion } = _elements.default, node = subproofAssertionNode, string = context.nodeAsString(node), statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context);
    context = null;
    const subproofAssertion = new SubproofAssertion(context, string, node, statements);
    return subproofAssertion;
}
function containedAssertionFromContainedAssertionNode(containedAssertionNode, context) {
    const { ContainedAssertion } = _elements.default, node = containedAssertionNode, string = context.nodeAsString(node), negated = containedAssertionNode.isNegated(), term = termFromContainedAssertionNode(containedAssertionNode, context), frame = frameFromContainedAssertionNode(containedAssertionNode, context), statement = statementFromContainedAssertionNode(containedAssertionNode, context);
    context = null;
    const containedAssertion = new ContainedAssertion(context, string, node, term, frame, negated, statement);
    return containedAssertion;
}
function satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    const { SatisfiesAssertion } = _elements.default, node = satisfiesAssertionNode, string = context.nodeAsString(node), signature = signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context), reference = referenceFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
    context = null;
    const satisfiesAssertion = new SatisfiesAssertion(context, string, node, signature, reference);
    return satisfiesAssertion;
}
function procedureReferenceFromProcedureReferenceNode(procedureReferenceNode, context) {
    const { ProcedureReference } = _elements.default, node = procedureReferenceNode, string = context.nodeAsString(node), name = nameFromProcedureReferenceNode(procedureReferenceNode, context);
    context = null;
    const procedureRefereence = new ProcedureReference(context, string, node, name);
    return procedureRefereence;
}
function variableDeclarationFromVariableDeclarationNode(variableDeclarationNode, context) {
    const { VariableDeclaration } = _elements.default, node = variableDeclarationNode, string = context.nodeAsString(node), typeNode = variableDeclarationNode.getTypeNode(), provisional = variableDeclarationNode.isProvisional(), variableNode = variableDeclarationNode.getVariableNode(), type = typeFromTypeNode(typeNode, context), variable = variableFromVariableNode(variableNode, context), variableDeclaration = new VariableDeclaration(context, string, node, type, variable, provisional);
    return variableDeclaration;
}
function typePrefixDeclarationFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
    const { TypePrefixDeclaration } = _elements.default, node = typePrefixDeclarationNode, string = context.nodeAsString(node), typePrefix = typePrefixFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context), typePrefixDeclaration = new TypePrefixDeclaration(context, string, node, typePrefix);
    return typePrefixDeclaration;
}
function combinatorDeclarationFromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
    const { CombinatorDeclaration } = _elements.default, node = combinatorDeclarationNode, string = context.nodeAsString(node), combinator = combinatorFromCombinatorDeclarationNode(combinatorDeclarationNode, context), combinatorDeclaration = new CombinatorDeclaration(context, string, node, combinator);
    return combinatorDeclaration;
}
function simpleTypeDeclarationFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    const { SimpleTypeDeclaration } = _elements.default, node = simpleTypeDeclarationNode, string = context.nodeAsString(node), type = typeFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), superTypes = superTypesFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), provisional = provisionalFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), simpleTypeDeclaration = new SimpleTypeDeclaration(context, string, node, type, superTypes, provisional);
    return simpleTypeDeclaration;
}
function referenceSubstitutionFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
    const { ReferenceSubstitution } = _elements.default, node = referenceSubstitutionNode, string = context.nodeAsString(node), targetReference = targetReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context), replacementReference = replacementReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context), referenceSubstitution = new ReferenceSubstitution(context, string, node, targetReference, replacementReference);
    return referenceSubstitution;
}
function statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const { StatementSubstitution } = _elements.default, node = statementSubstitutionNode, string = context.nodeAsString(node), resolved = resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context), substitution = substitutionFromStatementSubstitutionNode(statementSubstitutionNode, context), targetStatement = targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context), replacementStatement = replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context), statementSubstitution = new StatementSubstitution(context, string, node, resolved, substitution, targetStatement, replacementStatement);
    return statementSubstitution;
}
function constructorDeclarationFromConstructorDeclarationNode(constructorDeclarationNode, context) {
    const { ConstructorDeclaration } = _elements.default, node = constructorDeclarationNode, string = context.nodeAsString(node), type = typeFromConstructorDeclarationNode(constructorDeclarationNode, context), provisional = provisionalFromConstructorDeclarationNode(constructorDeclarationNode, context), constructor = constructorFromConstructorDeclarationNode(constructorDeclarationNode, context), constructorDeclaration = new ConstructorDeclaration(context, string, node, type, provisional, constructor);
    return constructorDeclaration;
}
function complexTypeDeclarationFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    const { ComplexTypeDeclaration } = _elements.default, node = complexTypeDeclarationNode, string = context.nodeAsString(node), type = typeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), superTypes = superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), provisional = provisionalFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), complexTypeDeclaration = new ComplexTypeDeclaration(context, string, node, type, superTypes, provisional);
    return complexTypeDeclaration;
}
function metavariableDeclarationFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    const { MetavariableDeclaration } = _elements.default, node = metavariableDeclarationNode, string = context.nodeAsString(node), metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariable = metavariableFromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariableDeclaration = new MetavariableDeclaration(context, string, node, metaType, metavariable);
    return metavariableDeclaration;
}
function nameFromTypeNode(typeNode, context) {
    const typeName = typeNode.getTypeName(), name = typeName; ///
    return name;
}
function typeFromTermNode(termNode, context) {
    const type = null;
    return type;
}
function proofFromRuleNode(ruleNode, context) {
    let proof = null;
    const proofNode = ruleNode.getProofNode();
    if (proofNode !== null) {
        proof = proofFromProofNode(proofNode, context);
    }
    return proof;
}
function labelsFromRuleNode(ruleNode, context) {
    const labelNodes = ruleNode.getLabelNodes(), labels = labelsFromLabelNodes(labelNodes, context);
    return labels;
}
function premisesFromRuleNode(ruleNode, context) {
    const premiseNodes = ruleNode.getPremiseNodes(), premises = premisesFromPremiseNodes(premiseNodes, context);
    return premises;
}
function axiomFromSectionNode(sectionNode, context) {
    let axiom = null;
    const axiomNode = sectionNode.getAxiomNode();
    if (axiomNode !== null) {
        axiom = axiomFromAxiomNode(axiomNode, context);
    }
    return axiom;
}
function lemmaFromSectionNode(sectionNode, context) {
    let lemma = null;
    const lemmaNode = sectionNode.getLemmaNode();
    if (lemmaNode !== null) {
        lemma = lemmaFromLemmaNode(lemmaNode, context);
    }
    return lemma;
}
function nameFromPropertyNode(propertyNode, context) {
    const name = propertyNode.getName();
    return name;
}
function statementFromStepNode(stepNode, context) {
    let statement = null;
    const statementNode = stepNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function referenceFromStepNode(stepNode, context) {
    let reference = null;
    const referenceNode = stepNode.getReferenceNode();
    if (referenceNode !== null) {
        reference = referenceFromReferenceNode(referenceNode, context);
    }
    return reference;
}
function nameFromParaneterNode(parameterNode, context) {
    const name = parameterNode.getName();
    return name;
}
function nameFromTypePrefixNode(typePrefixNode, context) {
    const typePrefixName = typePrefixNode.getTypePrefixName(), name = typePrefixName; ///
    return name;
}
function superTypesFromTypeNode(typeNode, context) {
    const superTypes = null;
    return superTypes;
}
function propertiesFromTypeNode(typeNode, context) {
    const properties = null;
    return properties;
}
function prefixNameFromTypeNode(typeNode, context) {
    const typePrefixName = typeNode.getTypePrefixName(), prefixName = typePrefixName; ///
    return prefixName;
}
function conclusionFromRuleNode(ruleNode, context) {
    const conclusionNode = ruleNode.getConclusionNode(), conclusion = conclusionFromConclusionNode(conclusionNode, context);
    return conclusion;
}
function referenceFromFrameNode(frameNode, context) {
    let reference = null;
    const metavariableNode = frameNode.getMetavariableNode();
    if (metavariableNode !== null) {
        reference = referencesFromMetavariableNode(metavariableNode, context);
    }
    return reference;
}
function theoremFromSectionNode(sectionNode, context) {
    let theorem = null;
    const theoremNode = sectionNode.getTheoremNode();
    if (theoremNode !== null) {
        theorem = theoremFromTheoremNode(theoremNode, context);
    }
    return theorem;
}
function frameFromJudgementNode(judgementNode, context) {
    const frameNode = judgementNode.getFrameNode(), frame = frameFromFrameNode(frameNode, context);
    return frame;
}
function termsFromSignatureNode(signatureNode, context) {
    const termNodes = signatureNode.getAssumptionNodes(), terms = termsFromTermNodes(termNodes, context);
    return terms;
}
function provisionalFromTypeNode(typeNode, context) {
    const provisional = null;
    return provisional;
}
function derivationFromProofNode(proofNode, context) {
    const derivationNode = proofNode.getDerivationNode(), derivation = derivationFromDerivationNode(derivationNode, context);
    return derivation;
}
function termFromConstructorNode(ocnstructorNode, context) {
    const termNode = ocnstructorNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function typeFromConstructorNode(ocnstructorNode, context) {
    const type = null;
    return type;
}
function assumptionsFromFrameNode(frameNode, context) {
    const assumptionNodes = frameNode.getAssumptionNodes(), assumptions = assumptionsFromAssumptionNodes(assumptionNodes, context);
    return assumptions;
}
function statementFromPremiseNode(premiseNode, context) {
    let statement = null;
    const statementNode = premiseNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function leftTermFromEqualityNode(equalityNode, context) {
    const leftTermNode = equalityNode.getLeftTermNode(), leftTerm = termFromTermNode(leftTermNode, context);
    return leftTerm;
}
function termsFromEquivalenceNode(equivalenceNode, context) {
    const termNodes = equivalenceNode.getTermNodes(), terms = termsFromTermNodes(termNodes, context);
    return terms;
}
function nameFromMetavariableNode(metavariableNode, context) {
    const metavaraibleName = metavariableNode.getMetavariableName(), name = metavaraibleName; ///
    return name;
}
function termFromMetavariableNode(metavariableNode, context) {
    let term = null;
    const termNode = metavariableNode.getTermNode();
    if (termNode !== null) {
        term = termFromTermNode(termNode, context);
    }
    return term;
}
function typeFromMetavariableNode(metavariableNode, context) {
    let type = null;
    const typemNode = metavariableNode.getTypeNode();
    if (typemNode !== null) {
        type = typeFromTypeNode(typemNode, context);
    }
    return type;
}
function metavariableFromFrameNode(frameNode, context) {
    let metavariable = null;
    const metavariableNode = frameNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }
    return metavariable;
}
function metavariableFromLabelNode(labelNode, context) {
    const metavariableNode = labelNode.getMetavariableNode(), metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    return metavariable;
}
function conjectureFromSectionNode(sectionNode, context) {
    let conjecture = null;
    const conjectureNode = sectionNode.getConjectureNode();
    if (conjectureNode !== null) {
        conjecture = conjectureFromConjectureNode(conjectureNode, context);
    }
    return conjecture;
}
function rightTermFromEqualityNode(equalityNode, context) {
    const rightTermNode = equalityNode.getRightTermNode(), rightTerm = termFromTermNode(rightTermNode, context);
    return rightTerm;
}
function equalityFromStatementNode(statementNode, context) {
    let equality = null;
    const equalityNode = statementNode.getEqualityNode();
    if (equalityNode !== null) {
        equality = equalityFromEqualityNode(equalityNode, context);
    }
    return equality;
}
function termFromTypeAssertionNode(typeAssertionNode, context) {
    const termNode = typeAssertionNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function typeFromTypeAssertionNode(typeAssertionNode, context) {
    const typeNode = typeAssertionNode.getTypeNode(), type = typeFromTypeNode(typeNode, context);
    return type;
}
function identifierFromVarialbeNode(variableNode, context) {
    const variableIdentifier = variableNode.getVariableIdentifier(), identifier = variableIdentifier; ///
    return identifier;
}
function statementFromDeductionNode(deductionNode, context) {
    let statement = null;
    const statementNode = deductionNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function judgementFromStatementNode(statementNode, context) {
    let judgement = null;
    const judgementNode = statementNode.getJudgementNode();
    if (judgementNode !== null) {
        judgement = judgementFromJudgementNode(judgementNode, context);
    }
    return judgement;
}
function stepFromStepOrSubproofNode(stepOrSubproofNode, context) {
    let step = null;
    const stepOrSubproofNodeStepNode = stepOrSubproofNode.isStepNode();
    if (stepOrSubproofNodeStepNode) {
        const stepNode = stepOrSubproofNode; ///
        step = stepFromStepNode(stepNode, context);
    }
    return step;
}
function nominalTypeNameFromTypeNode(typeNode, context) {
    const nominalTypeName = typeNode.getNominalTypeName();
    return nominalTypeName;
}
function assumptionFromJudgementNode(judgementNode, context) {
    const assumptionNode = judgementNode.getAssumptionNode(), assumption = assumptionFromAssumptionNode(assumptionNode, context);
    return assumption;
}
function identifierFromParameterNode(parameterNode, context) {
    const identifier = parameterNode.getIdentifier();
    return identifier;
}
function referenceFromAssumptionNode(assumptionNode, context) {
    const metavariableNode = assumptionNode.getMetavariableNode(), reference = referenceFromMetavariableNode(metavariableNode, context);
    return reference;
}
function statementFromCombinatorNode(combinatorNode, context) {
    const statementNode = combinatorNode.getStatementNode(), statement = statementFromStatementNode(statementNode, context);
    return statement;
}
function statementFromConclusionNode(conclusinoNode, context) {
    let statement = null;
    const statementNode = conclusinoNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function statementFromAssumptionNode(assumptionNode, context) {
    let statement;
    const statementNode = assumptionNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function statementFromHypothesisNode(hypothesisNode, context) {
    let statement = null;
    const statementNode = hypothesisNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function procedureCallFromPremiseNode(premiseNode, context) {
    let procedureCall = null;
    const procedureCallNode = premiseNode.getProcedureCallNode();
    if (procedureCallNode !== null) {
        procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
    }
    return procedureCall;
}
function suppositionsFromSubproofNode(subproofNode, context) {
    const suppositionNodes = subproofNode.getSuppositionNodes(), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);
    return suppositions;
}
function statementFromSuppositionNode(suppositionNode, context) {
    let statement = null;
    const statementNode = suppositionNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement; ///
}
function termFromDefinedAssertionNode(definedAssertionNode, context) {
    let term = null;
    const termNode = definedAssertionNode.getTermNode();
    if (termNode !== null) {
        term = termFromTermNode(termNode, context);
    }
    return term;
}
function termFromPropertyRelationNode(propertyRelationNode, context) {
    const termNode = propertyRelationNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function subDerivationFromSubproofNode(subproofNode, context) {
    const subDerivationNode = subproofNode.getSubDerivationNode(), subDerviation = subDerivationFromSubDerivationNode(subDerivationNode, context);
    return subDerviation;
}
function metavariableFromStatementNode(statementNode, context) {
    let metavariable = null;
    const metavariableNode = statementNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }
    return metavariable;
}
function metavariableFromReferenceNode(referenceNode, context) {
    const metavariableNode = referenceNode.getMetavariableNode(), metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    return metavariable;
}
function referenceFromMetavariableNode(metavariableNode, context) {
    const metavariableString = context.nodeAsString(metavariableNode);
    return (0, _context.literally)((context)=>{
        const referenceString = metavariableString, string = referenceString, referenceNode = (0, _instantiate.instantiateReference)(string, context), reference = referenceFromReferenceNode(referenceNode, context);
        return reference;
    }, context);
}
function termFromJDefinedAssertionNode(definedAssertionNode, context) {
    let term = null;
    const termNode = definedAssertionNode.getTermNode();
    if (termNode !== null) {
        term = termFromTermNode(termNode, context);
    }
    return term;
}
function frameFromDefinedAssertionNode(definedAssertionNode, context) {
    let frame = null;
    const frameNode = definedAssertionNode.getFrameNode();
    if (frameNode !== null) {
        frame = frameFromFrameNode(frameNode, context);
    }
    return frame;
}
function termFromPropertyAssertionNode(propertyAssertionNode, context) {
    const termNode = propertyAssertionNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function satisfiesAssertionFromStepNode(stepNode, context) {
    let satisfiesAssertion = null;
    const satisfiesAssertionNode = stepNode.getSatisfiedAssertionNode();
    if (satisfiesAssertionNode !== null) {
        satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
    }
    return satisfiesAssertion;
}
function typeAssertionFromStatementNode(statementNode, context) {
    let typeAssertion = null;
    const typeAssertionNode = statementNode.getTypeAssertionNode();
    if (typeAssertionNode !== null) {
        typeAssertion = typeAssertionFromTypeAssertionNode(typeAssertionNode, context);
    }
    return typeAssertion;
}
function frameFromJDefinedAssertionNode(definedAssertionNode, context) {
    let frame = null;
    const frameNode = definedAssertionNode.getFrameNode();
    if (frameNode !== null) {
        frame = frameFromFrameNode(frameNode, context);
    }
    return frame;
}
function proofFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
    let proof = null;
    const proofNode = topLevelAsssertionNode.getProofNode();
    if (proofNode !== null) {
        proof = proofFromProofNode(proofNode, context);
    }
    return proof;
}
function subproofFromStepOrSubproofNode(subproofOrSubproofNode, context) {
    let subproof = null;
    const subproofOrSubproofNodeSubproofNode = subproofOrSubproofNode.isSubproofNode();
    if (subproofOrSubproofNodeSubproofNode) {
        const subproofNode = subproofOrSubproofNode; ///
        subproof = subproofFromSubproofNode(subproofNode, context);
    }
    return subproof;
}
function termFromContainedAssertionNode(containedAssertionNode, context) {
    let term = null;
    const termNode = containedAssertionNode.getTermNode();
    if (termNode !== null) {
        term = termFromTermNode(termNode, context);
    }
    return term;
}
function nameFromProcedureReferenceNode(procedureReferenceNode, context) {
    const name = procedureReferenceNode.getName();
    return name;
}
function parametersFromProcedureCallNode(procedureCallNode, context) {
    const parameterNodes = procedureCallNode.getParameterNodes(), parameters = parametersFromParameterNodes(parameterNodes, context);
    return parameters;
}
function frameFromContainedAssertionNode(containedAssertionNode, context) {
    let frame = null;
    const frameNode = containedAssertionNode.getFrameNode();
    if (frameNode !== null) {
        frame = frameFromFrameNode(frameNode, context);
    }
    return frame;
}
function labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
    const labelNodes = topLevelAsssertionNode.getLabelNodes(), labels = labelsFromLabelNodes(labelNodes, context);
    return labels;
}
function procedureCallFromSuppositionNode(suppositionNode, context) {
    let procedureCall = null;
    const procedureCallNode = suppositionNode.getProcedureCallNode();
    if (procedureCallNode !== null) {
        procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
    }
    return procedureCall;
}
function negatedFromJDefinedAssertionNode(definedAssertionNode, context) {
    const negated = definedAssertionNode.isNegated();
    return negated;
}
function propertyFromPropertyRelationNode(propertyRelationNode, context) {
    const propertyNode = propertyRelationNode.getTermNode(), property = propertyFromPropertyNode(propertyNode, context);
    return property;
}
function definedAssertionFromStatementNode(statementNode, context) {
    let definedAssertion = null;
    const definedAssertionNode = statementNode.getDefinedAssertionNode();
    if (definedAssertionNode !== null) {
        definedAssertion = definedAssertionFromDefinedAssertionNode(definedAssertionNode, context);
    }
    return definedAssertion;
}
function termSubstitutionFromStatementNode(statementNode, context) {
    let termSubstitution = null;
    const termSubstitutionNode = statementNode.getTermSubstitutionNode();
    if (termSubstitutionNode !== null) {
        termSubstitution = termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context);
    }
    return termSubstitution;
}
function negatedFromContainedAssertionNode(containedAssertionNode, context) {
    const negated = containedAssertionNode.isNegated();
    return negated;
}
function typeFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    const typeNode = simpleTypeDeclarationNode.getTypeNode(), type = typeFromTypeNode(typeNode, context);
    return type;
}
function targetTermFromTermSubstitutionNode(termSubstitutionNode, context) {
    const targetTermNode = termSubstitutionNode.getTargetTermNode(), targetTerm = termFromTermNode(targetTermNode, context);
    return targetTerm;
}
function deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
    const deductionNode = topLevelAsssertionNode.getDeductionNode(), deduction = deductionFromDeductionNode(deductionNode, context);
    return deduction;
}
function signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
    let signature = null;
    const signatureNode = topLevelAsssertionNode.getSignatureNode();
    if (signatureNode !== null) {
        signature = signatureFromSignatureNode(signatureNode, context);
    }
    return signature;
}
function proofFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
    const proofNode = metaLemmaMetathoremNode.getProofNode(), proof = proofFromProofNode(proofNode, context);
    return proof;
}
function labelFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
    const labelNode = metaLemmaMetathoremNode.getLabelNode(), label = labelFromLabelNode(labelNode, context);
    return label;
}
function frameSubstitutionFromStatementNode(statementNode, context) {
    let frameSubstitution = null;
    const frameSubstitutionNode = statementNode.getFrameSubstitutionNode();
    if (frameSubstitutionNode !== null) {
        frameSubstitution = frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context);
    }
    return frameSubstitution;
}
function propertyAssertionFromStatementNode(statementNode, context) {
    let propertyAssertion = null;
    const propertyAssertionNode = statementNode.getPropertyAssertionNode();
    if (propertyAssertionNode !== null) {
        propertyAssertion = propertyAssertionFromPropertyAssertionNode(propertyAssertionNode, context);
    }
    return propertyAssertion;
}
function subproofAssertionFromStatementNode(statementNode, context) {
    let subproofAssertion = null;
    const subproofAssertionNode = statementNode.getSubproofAssertionNode();
    if (subproofAssertionNode !== null) {
        subproofAssertion = subproofAssertionFromSubproofAssertionNode(subproofAssertionNode, context);
    }
    return subproofAssertion;
}
function typeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    const typeNode = complexTypeDeclarationNode.getTypeNode(), type = typeFromTypeNode(typeNode, context);
    return type;
}
function typeFromConstructorDeclarationNode(constructorDeclarationNode, context) {
    const typeNode = constructorDeclarationNode.getTypeNode(), type = typeFromTypeNode(typeNode, context);
    return type;
}
function containedAssertionFromStatementNode(statementNode, context) {
    0;
    let containedAssertion = null;
    const containedAssertionNode = statementNode.getContainedAssertionNode();
    if (containedAssertionNode !== null) {
        containedAssertion = containedAssertionFromContainedAssertionNode(containedAssertionNode, context);
    }
    return containedAssertion;
}
function satisfiesAssertionFromStatementNode(statementNode, context) {
    let satisfiesAssertion = null;
    const satisfiesAssertionNode = statementNode.getSatisfiedAssertionNode();
    if (satisfiesAssertionNode !== null) {
        satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
    }
    return satisfiesAssertion;
}
function statementsFromSubproofAssertionNode(subproofAssertionNode, context) {
    const statementNodes = subproofAssertionNode.getStatementNodes(), statements = statementsFromStatementNodes(statementNodes, context);
    return statements;
}
function statementFromContainedAssertionNode(containedAssertionNode, context) {
    const statementNode = containedAssertionNode.getStatementNode(), statement = statementFromStatementNode(statementNode, context);
    return statement;
}
function signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    const signatureNode = satisfiesAssertionNode.getSignatureNode(), signature = signatureFromSignatureNode(signatureNode, context);
    return signature;
}
function referenceFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    const metavariableNode = satisfiesAssertionNode.getMetavariableNode(), reference = referenceFromMetavariableNode(metavariableNode, context);
    return reference;
}
function hypothesesFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
    const ypotheses = [];
    return ypotheses;
}
function signatureFromJSatisfiesAssertionNode(sasisfiesAssertionNode, context) {
    const signatureNode = sasisfiesAssertionNode.getSignatureNode(), signature = signatureFromJSignatureNode(signatureNode, context);
    return signature;
}
function referenceFromJSatisfiesAssertionNode(sasisfiesAssertionNode, context) {
    const referenceNode = sasisfiesAssertionNode.getReferenceNode(), reference = referenceFromReferenceNode(referenceNode, context);
    return reference;
}
function targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    const targetFrameNode = frameSubstitutionNode.getTargetFrameNode(), targetFrame = frameFromFrameNode(targetFrameNode, context);
    return targetFrame;
}
function suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
    const suppositionNodes = topLevelAsssertionNode.getSuppositionNodes(), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);
    return suppositions;
}
function resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const resolved = statementSubstitutionNode.isResolved();
    return resolved;
}
function deductionFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
    const deductionNode = metaLemmaMetathoremNode.getDeductionNode(), deduction = deductionFromDeductionNode(deductionNode, context);
    return deduction;
}
function procedureReferenceFromProcedureCallNode(procedureCallNode, context) {
    const procedureReferenceNode = procedureCallNode.getProcedureReferenceNode(), procedureReference = procedureReferenceFromProcedureReferenceNode(procedureReferenceNode, context);
    return procedureReference;
}
function replacementTermFromTermSubstitutionNode(termSubstitutionNode, context) {
    const replacementTermNode = termSubstitutionNode.getReplacementTermNode(), replacementTerm = termFromTermNode(replacementTermNode, context);
    return replacementTerm;
}
function superTypesFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    let superTypes = [];
    const typesNode = simpleTypeDeclarationNode.getTypesNode();
    if (typesNode !== null) {
        const types = typesFromTypesNode(typesNode, context);
        superTypes = types; ///
    }
    return superTypes;
}
function typePrefixFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
    const typePrefixNode = typePrefixDeclarationNode.getTypePrefixNode(), typePrefix = typePrefixFromTypePrefixNode(typePrefixNode, context);
    return typePrefix;
}
function combinatorFromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
    const combinatorNode = combinatorDeclarationNode.getCombinatorNode(), combinator = combinatorFromCombinatorNode(combinatorNode, context);
    return combinator;
}
function metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    const metaTypeNode = metavariableDeclarationNode.getMetaTypeNode(), metaType = metaTypeFromMetaTypeNode(metaTypeNode, context);
    return metaType;
}
function provisionalFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    const provisional = simpleTypeDeclarationNode.isProvisional();
    return provisional;
}
function superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    let superTypes = [];
    const typesNode = complexTypeDeclarationNode.getTypesNode();
    if (typesNode !== null) {
        const types = typesFromTypesNode(typesNode, context);
        superTypes = types; ///
    }
    return superTypes;
}
function replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    const replacementFrameNode = frameSubstitutionNode.getReplacementFrameNode(), replacementFrame = frameFromFrameNode(replacementFrameNode, context);
    return replacementFrame;
}
function propertyRelationFromPropertyAssertionNode(propertyAssertionNode, context) {
    const propertyRelationNode = propertyAssertionNode.getPropertyRelationNode(), propertyRelation = propertyRelationFromPropertyRelationNode(propertyRelationNode, context);
    return propertyRelation;
}
function suppositionsFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
    const suppositionNodes = metaLemmaMetathoremNode.getSuppositionNodes(), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);
    return suppositions;
}
function substitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const frameSubstitution = frameSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context), termSubstitution = termSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context), substitution = frameSubstitution || termSubstitution;
    return substitution;
}
function constructorFromConstructorDeclarationNode(constructorDeclarationNode, context) {
    const constructorNode = constructorDeclarationNode.getConstructorNode(), constructor = constructorFromConstructorNode(constructorNode, context);
    return constructor;
}
function provisionalFromConstructorDeclarationNode(constructorDeclarationNode, context) {
    const provisional = constructorDeclarationNode.isProvisional();
    return provisional;
}
function provisionalFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    const provisional = complexTypeDeclarationNode.isProvisional();
    return provisional;
}
function metavariableFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    const metavariableNode = metavariableDeclarationNode.getMetavariableNode(), metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    return metavariable;
}
function targetReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
    const targetReferenceNode = referenceSubstitutionNode.getTargetReferenceNode(), targetRefernece = metavariableFromMetavariableNode(targetReferenceNode, context);
    return targetRefernece;
}
function targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const targetStatementNode = statementSubstitutionNode.getTargetStatementNode(), targetStatement = statementFromStatementNode(targetStatementNode, context);
    return targetStatement;
}
function termSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    let termSubstitution = null;
    const termSubstitutionNode = statementSubstitutionNode.getTermSubstitutionNode();
    if (termSubstitutionNode !== null) {
        termSubstitution = termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context);
    }
    return termSubstitution;
}
function frameSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    let frameSubstitution = null;
    const frameSubstitutionNode = statementSubstitutionNode.getFrameSubstitutionNode();
    if (frameSubstitutionNode !== null) {
        frameSubstitution = frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context);
    }
    return frameSubstitution;
}
function replacementReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
    const replacementReferenceNode = referenceSubstitutionNode.getReplacementReferenceNode(), replacementReference = referenceFromReferenceNode(replacementReferenceNode, context);
    return replacementReference;
}
function replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const replacementStatementNode = statementSubstitutionNode.getReplacementStatementNode(), replacementStatement = statementFromStatementNode(replacementStatementNode, context);
    return replacementStatement;
}
function termsFromTermNodes(termNodes, context) {
    const terms = termNodes.map((termNode)=>{
        const term = termFromTermNode(termNode, context);
        return term;
    });
    return terms;
}
function typesFromTypesNode(typesNode, context) {
    const typeNodes = typesNode.getTypeNodes(), types = typeNodes.map((typeNode)=>{
        const type = typeFromTypeNode(typeNode, context);
        return type;
    });
    return types;
}
function labelsFromLabelNodes(labelNodes, context) {
    const labels = labelNodes.map((labelNode)=>{
        const label = labelFromLabelNode(labelNode, context);
        return label;
    });
    return labels;
}
function premisesFromPremiseNodes(premiseNodes, context) {
    const premises = premiseNodes.map((premiseNode)=>{
        const premise = premiseFromPremiseNode(premiseNode, context);
        return premise;
    });
    return premises;
}
function statementsFromStatementNodes(statementNodes, context) {
    const statements = statementNodes.map((statementNode)=>{
        const statement = statementFromStatementNode(statementNode, context);
        return statement;
    });
    return statements;
}
function parametersFromParameterNodes(parameterNodes, context) {
    const parameters = parameterNodes.map((parameterNode)=>{
        const parameter = parameterFromParameterNode(parameterNode, context);
        return parameter;
    });
    return parameters;
}
function hypothesesFromHypothesisNodes(hypothesisNodes, context) {
    const hypotheses = hypothesisNodes.map((hypotheseNode)=>{
        const hypothesis = hypothesisFromHypothesisNode(hypotheseNode, context);
        return hypothesis;
    });
    return hypotheses;
}
function assumptionsFromAssumptionNodes(assumptionNodes, context) {
    const assumptions = assumptionNodes.map((assumptionNode)=>{
        const assumption = assumptionFromAssumptionNode(assumptionNode, context);
        return assumption;
    });
    return assumptions;
}
function suppositionsFromSuppositionNodes(suppositionNodes, context) {
    const suppositions = suppositionNodes.map((suppositionNode)=>{
        const supposition = suppositionFromSuppositionNode(suppositionNode, context);
        return supposition;
    });
    return suppositions;
}
function stepsOrSubproofsFromDerivationNode(derivationNode, context) {
    const stepOrSubproofNodes = derivationNode.getStepOrSubproofNodes(), stepsOrSubproofs = stepOrSubproofNodes.map((stepOrSubproofNode)=>{
        const stepOrSubproof = stepOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context);
        return stepOrSubproof;
    });
    return stepsOrSubproofs;
}
function stepsOrSubproofsFromSubDerivationNode(subDerivationNode, context) {
    const stepOrSubproofNodes = subDerivationNode.getStepOrSubproofNodes(), stepsOrSubproofs = stepOrSubproofNodes.map((stepOrSubproofNode)=>{
        const stepOrSubproof = stepOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context);
        return stepOrSubproof;
    });
    return stepsOrSubproofs;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zLFxuICAgICAgICAgdHlwZVN0cmluZ0Zyb21Ob21pbmFsVHlwZU5hbWUsXG4gICAgICAgICBydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbixcbiAgICAgICAgIHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uLFxuICAgICAgICAgc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbixcbiAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyxcbiAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbixcbiAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZSA9IGJhc2VUeXBlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBub2RlID0gdHlwZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHByZWZpeE5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZVN0cmluZ0Zyb21Ob21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICBzdHJpbmcgPSB0eXBlU3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3RlcCA9IG5ldyBTdGVwKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbik7XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUnVsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBydWxlU3RyaW5nID0gcnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiksXG4gICAgICAgIG5vZGUgPSBydWxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBydWxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb29mLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICByZXR1cm4gcnVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVycm9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVycm9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hRnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBsZW1tYU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gbGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgbGVtbWEgPSBuZXcgTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBmcmFtZSA9IG5ldyBGcmFtZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgYXNzdW1wdGlvbnMpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9vZk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9vZiA9IG5ldyBQcm9vZihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGRlcml2YXRpb24pO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBeGlvbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBheGlvbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gYXhpb21Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgYXhpb20gPSBuZXcgQXhpb20oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gYXhpb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzaXNOb2RlcyA9IHNlY3Rpb25Ob2RlLmdldEh5cG90aGVzaXNOb2RlcygpLFxuICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXhpb20gPSBheGlvbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlbW1hID0gbGVtbWFGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2VjdGlvblN0cmluZyA9IHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uKGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSksXG4gICAgICAgIG5vZGUgPSBzZWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHNlY3Rpb25TdHJpbmc7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSk7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcmVtaXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gcHJlbWlzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gdGhlb3JlbU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICB0aGVvcmVtID0gbmV3IFRoZW9yZW0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5Tm9kZS5nZXRQcm9wZXJ0eU5hbWUoKSxcbiAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IHByb3BlcnR5TmFtZTsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbm9taW5hbFR5cGVOYW1lKTtcblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW107XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mTm9kZSwgLy8vXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbihzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdWJwcm9vZlN0cmluZzsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mID0gbmV3IFN1YnByb29mKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKTtcblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXF1YWxpdHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXF1YWxpdHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBkZWR1Y3Rpb24gPSBuZXcgRGVkdWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpZ25hdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudEZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBKdWRnZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKTtcblxuICByZXR1cm4ganVkZ2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGFMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YUxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBub2RlID0gbWV0YUxlbW1hTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIG1ldGFMZW1tYSA9IG5ldyBNZXRhTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICByZXR1cm4gbWV0YUxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldE5hbWUoKSxcbiAgICAgICAgaWRlbnRpZmllciA9IHBhcmFtZXRlck5vZGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBpZGVudGlmaWVyKTtcblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaWduYXR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2lnbmF0dXJlTm9kZSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBIeXBvdGhzaXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gaHlwb3RoZXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgaHlwb2h0ZXNpcyA9IG5ldyBIeXBvdGhzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBoeXBvaHRlc2lzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gY29uamVjdHVyZU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gY29uamVjdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBjb25qZWN0dXJlID0gbmV3IENvbmplY3R1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25jbHVzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhc3N1bXB0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZXJpdmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlcml2YXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBkZXJpdmF0aW9uID0gbmV3IERlcml2YXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVQcmVmaXggPSBuZXcgVHlwZVByZWZpeChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1cHBvc2l0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcXVpdmFsZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcXVpdmFsZW5jZU5vZGUsIC8vL1xuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlcXVpdmFsZW5jZVN0cmluZyA9IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zKHRlcm1zKSxcbiAgICAgICAgc3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmc7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtRnJvbU1ldGF0aGVvcmVtTm9kZShtZXRhdGhlb3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdGVob3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YXRoZW9yZW1Ob2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IG1ldGF0aGVvcmVtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBtZXRhdGhlb3JlbSA9IG5ldyBNZXRhdGVob3JlbShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZXNGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhVHlwZSA9IG51bGwsXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0ZXJtLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJEZXJpdmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YkRlcml2YXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1YkRlcml2YXRpb24gPSBuZXcgU3ViRGVyaXZhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0ZXBzT3JTdWJwcm9vZnMpO1xuXG4gIHJldHVybiBzdWJEZXJpdmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZUFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbiA9IG5ldyBUeXBlQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhwcm9jZWR1cmVSZWZlcmVuY2UsIHBhcmFtZXRlcnMpLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nOyAvLy9cblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcE9yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2YgPSBzdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcE9yU3VicHJvb2YgPSAoc3RlcCB8fCBzdWJwcm9vZik7XG5cbiAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlZmluZWRBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5pc05lZ2F0ZWQoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlSZWxhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gbmV3IFByb3BlcnR5UmVsYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IHRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRUZXJtLCByZXBsYWNlbWVudFRlcm0pO1xuXG4gIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGFyZ2V0RnJhbWUgPSB0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0RnJhbWUsIHJlcGxhY2VtZW50RnJhbWUpO1xuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IG5ldyBQcm9wZXJ0eUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuXG4gIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJwcm9vZkFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29udGFpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG5ldyBDb250YWluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNhdGlzZmllc0Fzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbmV3IFNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHNpZ25hdHVyZSwgcmVmZXJlbmNlKTtcblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZVJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZVJlZmVyZWVuY2UgPSBuZXcgUHJvY2VkdXJlUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZWVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICBwcm92aXNpb25hbCA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgdmFyaWFibGUsIHByb3Zpc2lvbmFsKTtcblxuICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4RGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLCAgLy8vXG4gICAgICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbiA9IG5ldyBUeXBlUHJlZml4RGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlUHJlZml4KTtcblxuICByZXR1cm4gdHlwZVByZWZpeERlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbWJpbmF0b3JEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb21iaW5hdG9yRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBjb21iaW5hdG9yKTtcblxuICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNpbXBsZVR5cGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uID0gbmV3IFNpbXBsZVR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHN1cGVyVHlwZXMsIHByb3Zpc2lvbmFsKTtcblxuICByZXR1cm4gc2ltcGxlVHlwZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0YXJnZXRSZWZlcmVuY2UgPSB0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVwbGFjZW1lbnRSZWZlcmVuY2UgPSByZXBsYWNlbWVudFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBuZXcgUmVmZXJlbmNlU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0UmVmZXJlbmNlLCByZXBsYWNlbWVudFJlZmVyZW5jZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVzb2x2ZWQgPSByZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gdGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlc29sdmVkLCBzdWJzdGl0dXRpb24sIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgcHJvdmlzaW9uYWwsIGNvbnN0cnVjdG9yKTtcblxuICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBuZXcgQ29tcGxleFR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHN1cGVyVHlwZXMsIHByb3Zpc2lvbmFsKTtcblxuICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhVHlwZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZU5hbWUoKSxcbiAgICAgICAgbmFtZSA9IHR5cGVOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSBydWxlTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGVzID0gcnVsZU5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlbWlzZU5vZGVzID0gcnVsZU5vZGUuZ2V0UHJlbWlzZU5vZGVzKCksXG4gICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tUHJlbWlzZU5vZGVzKHByZW1pc2VOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGF4aW9tID0gbnVsbDtcblxuICBjb25zdCBheGlvbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRBeGlvbU5vZGUoKTtcblxuICBpZiAoYXhpb21Ob2RlICE9PSBudWxsKSB7XG4gICAgYXhpb20gPSBheGlvbUZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBheGlvbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsZW1tYSA9IG51bGw7XG5cbiAgY29uc3QgbGVtbWFOb2RlID0gc2VjdGlvbk5vZGUuZ2V0TGVtbWFOb2RlKCk7XG5cbiAgaWYgKGxlbW1hTm9kZSAhPT0gbnVsbCkge1xuICAgIGxlbW1hID0gbGVtbWFGcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHByb3BlcnR5Tm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0ZXBOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gc3RlcE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChyZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOb2RlLmdldFR5cGVQcmVmaXhOYW1lKCksXG4gICAgICAgIG5hbWUgPSB0eXBlUHJlZml4TmFtZTsgIC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVzID0gbnVsbDtcblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydGllcyA9IG51bGw7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKSxcbiAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIHByZWZpeE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbmNsdXNpb25Ob2RlID0gcnVsZU5vZGUuZ2V0Q29uY2x1c2lvbk5vZGUoKSxcbiAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VzRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGhlb3JlbSA9IG51bGw7XG5cbiAgY29uc3QgdGhlb3JlbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRUaGVvcmVtTm9kZSgpO1xuXG4gIGlmICh0aGVvcmVtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRoZW9yZW0gPSB0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZyYW1lTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IHNpZ25hdHVyZU5vZGUuZ2V0QXNzdW1wdGlvbk5vZGVzKCksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvdmlzaW9uYWwgPSBudWxsO1xuXG4gIHJldHVybiBwcm92aXNpb25hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkZXJpdmF0aW9uTm9kZSA9IHByb29mTm9kZS5nZXREZXJpdmF0aW9uTm9kZSgpLFxuICAgICAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGRlcml2YXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShvY25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBvY25zdHJ1Y3Rvck5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Db25zdHJ1Y3Rvck5vZGUob2Nuc3RydWN0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZXMgPSBmcmFtZU5vZGUuZ2V0QXNzdW1wdGlvbk5vZGVzKCksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tQXNzdW1wdGlvbk5vZGVzKGFzc3VtcHRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZXMgPSBlcXVpdmFsZW5jZU5vZGUuZ2V0VGVybU5vZGVzKCksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmFpYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICBuYW1lID0gbWV0YXZhcmFpYmxlTmFtZTsgIC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVtTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZW1Ob2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZW1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbGFiZWxOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbmplY3R1cmUgPSBudWxsO1xuXG4gIGNvbnN0IGNvbmplY3R1cmVOb2RlID0gc2VjdGlvbk5vZGUuZ2V0Q29uamVjdHVyZU5vZGUoKTtcblxuICBpZiAoY29uamVjdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICBjb25zdCBlcXVhbGl0eU5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEVxdWFsaXR5Tm9kZSgpO1xuXG4gIGlmIChlcXVhbGl0eU5vZGUgIT09IG51bGwpIHtcbiAgICBlcXVhbGl0eSA9IGVxdWFsaXR5RnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGVxdWFsaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBkZWR1Y3Rpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGp1ZGdlbWVudCA9IG51bGw7XG5cbiAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0SnVkZ2VtZW50Tm9kZSgpO1xuXG4gIGlmIChqdWRnZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4ganVkZ2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwID0gbnVsbDtcblxuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZS5pc1N0ZXBOb2RlKCk7XG5cbiAgaWYgKHN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlKSB7XG4gICAgY29uc3Qgc3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGU7ICAvLy9cblxuICAgIHN0ZXAgPSBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbFR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gIHJldHVybiBub21pbmFsVHlwZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0QXNzdW1wdGlvbk5vZGUoKSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgaWRlbnRpZmllciA9IHBhcmFtZXRlck5vZGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW5vTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29uY2x1c2lub05vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQ7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gaHlwb3RoZXNpc05vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25Ob2RlcyA9IHN1YnByb29mTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDsgLy8vXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1YkRlcml2YXRpb25Ob2RlID0gc3VicHJvb2ZOb2RlLmdldFN1YkRlcml2YXRpb25Ob2RlKCksXG4gICAgICAgIHN1YkRlcnZpYXRpb24gPSBzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3ViRGVydmlhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIHJldHVybiBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSBtZXRhdmFyaWFibGVTdHJpbmcsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHJlZmVyZW5jZVN0cmluZywgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RlcE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUeXBlQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgY29uc3QgcHJvb2ZOb2RlID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdWJwcm9vZk9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZiA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSA9IHN1YnByb29mT3JTdWJwcm9vZk5vZGUuaXNTdWJwcm9vZk5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHN1YnByb29mT3JTdWJwcm9vZk5vZGU7ICAvLy9cblxuICAgIHN1YnByb29mID0gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlck5vZGVzID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZXMgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBzdXBwb3NpdGlvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lZ2F0ZWQgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldERlZmluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuZWdhdGVkID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOb2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGFyZ2V0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0YXJnZXRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlZHVjdGlvbk5vZGUgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldERlZHVjdGlvbk5vZGUoKSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2lnbmF0dXJlID0gbnVsbDtcblxuICBjb25zdCBzaWduYXR1cmVOb2RlID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCk7XG5cbiAgaWYgKHNpZ25hdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb29mTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldFByb29mTm9kZSgpLFxuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvcGVydHlBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7MFxuICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb250YWluZWRBc3NlcnRpb24gPSBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlcygpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyhzdGF0ZW1lbnROb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHlwb3RoZXNlcyA9IFtdO1xuXG4gIHJldHVybiB5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2FzaXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzaWduYXR1cmVOb2RlID0gc2FzaXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21KU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhc2lzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHNhc2lzZmllc0Fzc2VydGlvbk5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIHRhcmdldEZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKHRhcmdldEZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRhcmdldEZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXNvbHZlZCA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuaXNSZXNvbHZlZCgpO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlZHVjdGlvbk5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFByb2NlZHVyZVJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRUZXJtTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJlcGxhY2VtZW50VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VwZXJUeXBlcyA9IFtdO1xuXG4gIGNvbnN0IHR5cGVzTm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZXNOb2RlKCk7XG5cbiAgaWYgKHR5cGVzTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVzID0gdHlwZXNGcm9tVHlwZXNOb2RlKHR5cGVzTm9kZSwgY29udGV4dCk7XG5cbiAgICBzdXBlclR5cGVzID0gdHlwZXM7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlUHJlZml4Tm9kZSA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZVByZWZpeE5vZGUoKSxcbiAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgY29tYmluYXRvck5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLmdldENvbWJpbmF0b3JOb2RlKCksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldE1ldGFUeXBlTm9kZSgpLFxuICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3Zpc2lvbmFsRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm92aXNpb25hbCA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpO1xuXG4gIHJldHVybiBwcm92aXNpb25hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1cGVyVHlwZXMgPSBbXTtcblxuICBjb25zdCB0eXBlc05vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlc05vZGUoKTtcblxuICBpZiAodHlwZXNOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZXMgPSB0eXBlc0Zyb21UeXBlc05vZGUodHlwZXNOb2RlLCBjb250ZXh0KTtcblxuICAgIHN1cGVyVHlwZXMgPSB0eXBlczsgLy8vXG4gIH1cblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudEZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudEZyYW1lTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKHJlcGxhY2VtZW50RnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZS5nZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IChmcmFtZVN1YnN0aXR1dGlvbiB8fCB0ZXJtU3Vic3RpdHV0aW9uKTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgY29uc3RydWN0b3JOb2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0Q29uc3RydWN0b3JOb2RlKCksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvdmlzaW9uYWwgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvdmlzaW9uYWwgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0UmVmZXJuZWNlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUodGFyZ2V0UmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRhcmdldFJlZmVybmVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSh0YXJnZXRTdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VtZW50UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50UmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUocmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHtcbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tVHlwZXNOb2RlKHR5cGVzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZXMgPSB0eXBlc05vZGUuZ2V0VHlwZU5vZGVzKCksXG4gICAgICAgIHR5cGVzID0gdHlwZU5vZGVzLm1hcCgodHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlbWlzZXMgPSBwcmVtaXNlTm9kZXMubWFwKChwcmVtaXNlTm9kZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2UgPSBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzKHN0YXRlbWVudE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2VzID0gaHlwb3RoZXNpc05vZGVzLm1hcCgoaHlwb3RoZXNlTm9kZSkgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXMgPSBoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tQXNzdW1wdGlvbk5vZGVzKGFzc3VtcHRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25Ob2Rlcy5tYXAoKGFzc3VtcHRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZXMgPSBkZXJpdmF0aW9uTm9kZS5nZXRTdGVwT3JTdWJwcm9vZk5vZGVzKCksXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwT3JTdWJwcm9vZk5vZGVzLm1hcCgoc3RlcE9yU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBzdGVwT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZXMgPSBzdWJEZXJpdmF0aW9uTm9kZS5nZXRTdGVwT3JTdWJwcm9vZk5vZGVzKCksXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwT3JTdWJwcm9vZk5vZGVzLm1hcCgoc3RlcE9yU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBzdGVwT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG4iXSwibmFtZXMiOlsiYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZSIsImFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2RlcyIsImFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZSIsImF4aW9tRnJvbUF4aW9tTm9kZSIsImF4aW9tRnJvbVNlY3Rpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uRnJvbVJ1bGVOb2RlIiwiY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUiLCJkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwiZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZSIsImRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlIiwiZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZSIsImVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZSIsImVycm9yRnJvbUVycm9yTm9kZSIsImZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImZyYW1lRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzIiwiaHlwb3RoZXNlc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlIiwiaWRlbnRpZmllckZyb21QYXJhbWV0ZXJOb2RlIiwiaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUiLCJqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsImxhYmVsc0Zyb21MYWJlbE5vZGVzIiwibGFiZWxzRnJvbVJ1bGVOb2RlIiwibGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsImxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsImxlbW1hRnJvbUxlbW1hTm9kZSIsImxlbW1hRnJvbVNlY3Rpb25Ob2RlIiwibWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdGhlb3JlbUZyb21NZXRhdGhlb3JlbU5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVByb3BlcnR5Tm9kZSIsIm5hbWVGcm9tVHlwZU5vZGUiLCJuYW1lRnJvbVR5cGVQcmVmaXhOb2RlIiwibmVnYXRlZEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwibmVnYXRlZEZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJub21pbmFsVHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJlZml4TmFtZUZyb21UeXBlTm9kZSIsInByZW1pc2VGcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlc0Zyb21QcmVtaXNlTm9kZXMiLCJwcmVtaXNlc0Zyb21SdWxlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUiLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInByb29mRnJvbVByb29mTm9kZSIsInByb29mRnJvbVJ1bGVOb2RlIiwicHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwicHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsInByb3BlcnRpZXNGcm9tVHlwZU5vZGUiLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlOb2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm92aXNpb25hbEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3Zpc2lvbmFsRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwicHJvdmlzaW9uYWxGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3Zpc2lvbmFsRnJvbVR5cGVOb2RlIiwicmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbUZyYW1lTm9kZSIsInJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21TdGVwTm9kZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwicmVmZXJlbmNlc0Zyb21NZXRhdmFyaWFibGVOb2RlIiwicmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJyaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwicnVsZUZyb21SdWxlTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUiLCJzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlIiwic2lnbmF0dXJlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2lnbmF0dXJlRnJvbUpTaWduYXR1cmVOb2RlIiwic2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZSIsInNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZSIsInN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZSIsInN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUiLCJzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZyb21TdGVwTm9kZSIsInN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN0ZXBGcm9tU3RlcE5vZGUiLCJzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUiLCJzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN1YnByb29mRnJvbVN1YnByb29mTm9kZSIsInN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZXNGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZXNGcm9tVHlwZU5vZGUiLCJzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlIiwic3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwic3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJ0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlIiwidGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwidGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlIiwidGVybUZyb21NZXRhdmFyaWFibGVOb2RlIiwidGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidGVybXNGcm9tRXF1aXZhbGVuY2VOb2RlIiwidGVybXNGcm9tU2lnbmF0dXJlTm9kZSIsInRlcm1zRnJvbVRlcm1Ob2RlcyIsInRoZW9yZW1Gcm9tU2VjdGlvbk5vZGUiLCJ0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlIiwidHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21Db25zdHJ1Y3Rvck5vZGUiLCJ0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJ0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbVRlcm1Ob2RlIiwidHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlc0Zyb21UeXBlc05vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwidHlwZU5vZGUiLCJjb250ZXh0IiwidHlwZSIsImJhc2VUeXBlIiwiYmFzZVR5cGVGcm9tTm90aGluZyIsIlR5cGUiLCJlbGVtZW50cyIsIm5vZGUiLCJuYW1lIiwicHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJub21pbmFsVHlwZU5hbWUiLCJ0eXBlU3RyaW5nIiwidHlwZVN0cmluZ0Zyb21Ob21pbmFsVHlwZU5hbWUiLCJzdHJpbmciLCJ0ZXJtTm9kZSIsIlRlcm0iLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwic3RlcE5vZGUiLCJTdGVwIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RlcCIsInJ1bGVOb2RlIiwiUnVsZSIsInByb29mIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwicnVsZVN0cmluZyIsInJ1bHNTdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwicnVsZSIsImxhYmVsTm9kZSIsIkxhYmVsIiwibWV0YXZhcmlhYmxlIiwibGFiZWwiLCJlcnJvck5vZGUiLCJFcnJvciIsImVycm9yIiwibGVtbWFOb2RlIiwiTGVtbWEiLCJ0b3BMZXZlbEFzc3NlcnRpb25Ob2RlIiwiZGVkdWN0aW9uIiwic3VwcG9zaXRpb25zIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsInRvcExldmVsQXNzc2VydGlvblN0cmluZyIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsImxlbW1hIiwiZnJhbWVOb2RlIiwiRnJhbWUiLCJhc3N1bXB0aW9ucyIsImZyYW1lIiwicHJvb2ZOb2RlIiwiUHJvb2YiLCJkZXJpdmF0aW9uIiwiYXhpb21Ob2RlIiwiQXhpb20iLCJheGlvbSIsInNlY3Rpb25Ob2RlIiwiaHlwb3RoZXNpc05vZGVzIiwiZ2V0SHlwb3RoZXNpc05vZGVzIiwidGhlb3JlbSIsImNvbmplY3R1cmUiLCJzZWN0aW9uU3RyaW5nIiwic2VjdGlvblN0cmluZ0Zyb21IeXBvdGhlc2VzVG9wTGV2ZWxBc3NlcnRpb24iLCJzZWN0aW9uIiwiU2VjdGlvbiIsInByZW1pc2VOb2RlIiwiUHJlbWlzZSIsInByb2NlZHVyZUNhbGwiLCJwcmVtaXNlIiwidGhlb3JlbU5vZGUiLCJUaGVvcmVtIiwibWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsInByb3BlcnR5Tm9kZSIsIlByb3BlcnR5IiwicHJvcGVydHlOYW1lIiwiZ2V0UHJvcGVydHlOYW1lIiwicHJvcGVydHkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsImlkZW50aWZpZXIiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsInZhcmlhYmxlIiwic3VicHJvb2ZOb2RlIiwiU3VicHJvb2YiLCJzdWJEZXJpdmF0aW9uIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZlN0cmluZ0Zyb21TdXBwb3NpdGlvbnNBbmRTdWJEZXJpdmF0aW9uIiwic3VicHJvb2YiLCJlcXVhbGl0eU5vZGUiLCJFcXVhbGl0eSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZXF1YWxpdHkiLCJkZWR1Y3Rpb25Ob2RlIiwiRGVkdWN0aW9uIiwic3RhdGVtZW50Tm9kZSIsIlN0YXRlbWVudCIsInNpZ25hdHVyZU5vZGUiLCJTaWduYXR1cmUiLCJ0ZXJtcyIsInJlZmVyZW5jZU5vZGUiLCJSZWZlcmVuY2UiLCJqdWRnZW1lbnROb2RlIiwiSnVkZ2VtZW50IiwiYXNzdW1wdGlvbiIsImp1ZGdlbWVudCIsIm1ldGFMZW1tYU5vZGUiLCJNZXRhTGVtbWEiLCJtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJtZXRhTGVtbWEiLCJwYXJhbWV0ZXJOb2RlIiwiUGFyYW1ldGVyIiwiZ2V0TmFtZSIsImdldElkZW50aWZpZXIiLCJwYXJhbWV0ZXIiLCJoeXBvdGhlc2VOb2RlIiwiSHlwb3Roc2lzIiwiaHlwb2h0ZXNpcyIsImNvbmplY3R1cmVOb2RlIiwiQ29uamVjdHVyZSIsImNvbWJpbmF0b3JOb2RlIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJjb25jbHVzaW9uTm9kZSIsIkNvbmNsdXNpb24iLCJhc3N1bXB0aW9uTm9kZSIsIkFzc3VtcHRpb24iLCJkZXJpdmF0aW9uTm9kZSIsIkRlcml2YXRpb24iLCJzdGVwc09yU3VicHJvb2ZzIiwidHlwZVByZWZpeE5vZGUiLCJUeXBlUHJlZml4IiwidGVybUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVGcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlUHJlZml4IiwiY29uc3RydWN0b3JOb2RlIiwiQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsInN1cHBvc2l0aW9uTm9kZSIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJlcXVpdmFsZW5jZU5vZGUiLCJFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlU3RyaW5nIiwiZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXMiLCJlcXVpdmFsZW5jZSIsIm1ldGF0aGVvcmVtTm9kZSIsIk1ldGF0ZWhvcmVtIiwibWV0YXRoZW9yZW0iLCJtZXRhdmFyaWFibGVOb2RlIiwiTWV0YXZhcmlhYmxlIiwic3ViRGVyaXZhdGlvbk5vZGUiLCJTdWJEZXJpdmF0aW9uIiwidHlwZUFzc2VydGlvbk5vZGUiLCJUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbiIsInByb2NlZHVyZUNhbGxOb2RlIiwiUHJvY2VkdXJlQ2FsbCIsInBhcmFtZXRlcnMiLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwicHJvY2VkdXJlQ2FsbFN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzIiwic3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcE9yU3VicHJvb2YiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIkRlZmluZWRBc3NlcnRpb24iLCJuZWdhdGVkIiwiaXNOZWdhdGVkIiwiZGVmaW5lZEFzc2VydGlvbiIsInByb3BlcnR5UmVsYXRpb25Ob2RlIiwiUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJ0YXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtIiwidGVybVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsIkZyYW1lU3Vic3RpdHV0aW9uIiwidGFyZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJQcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJzdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsIlNhdGlzZmllc0Fzc2VydGlvbiIsInByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJQcm9jZWR1cmVSZWZlcmVuY2UiLCJwcm9jZWR1cmVSZWZlcmVlbmNlIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwiZ2V0VHlwZU5vZGUiLCJpc1Byb3Zpc2lvbmFsIiwiZ2V0VmFyaWFibGVOb2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJUeXBlUHJlZml4RGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJ0YXJnZXRSZWZlcmVuY2UiLCJyZXBsYWNlbWVudFJlZmVyZW5jZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwidHlwZU5hbWUiLCJnZXRUeXBlTmFtZSIsImdldFByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJnZXRMYWJlbE5vZGVzIiwicHJlbWlzZU5vZGVzIiwiZ2V0UHJlbWlzZU5vZGVzIiwiZ2V0QXhpb21Ob2RlIiwiZ2V0TGVtbWFOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFJlZmVyZW5jZU5vZGUiLCJ0eXBlUHJlZml4TmFtZSIsImdldFR5cGVQcmVmaXhOYW1lIiwiZ2V0Q29uY2x1c2lvbk5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0VGhlb3JlbU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJ0ZXJtTm9kZXMiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJnZXREZXJpdmF0aW9uTm9kZSIsIm9jbnN0cnVjdG9yTm9kZSIsImdldFRlcm1Ob2RlIiwiYXNzdW1wdGlvbk5vZGVzIiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwiZ2V0VGVybU5vZGVzIiwibWV0YXZhcmFpYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJ0eXBlbU5vZGUiLCJnZXRDb25qZWN0dXJlTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwiZ2V0RXF1YWxpdHlOb2RlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0SnVkZ2VtZW50Tm9kZSIsInN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlIiwiaXNTdGVwTm9kZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImdldEFzc3VtcHRpb25Ob2RlIiwiY29uY2x1c2lub05vZGUiLCJoeXBvdGhlc2lzTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJnZXRTdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcnZpYXRpb24iLCJtZXRhdmFyaWFibGVTdHJpbmciLCJsaXRlcmFsbHkiLCJyZWZlcmVuY2VTdHJpbmciLCJpbnN0YW50aWF0ZVJlZmVyZW5jZSIsImdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJnZXRUeXBlQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mT3JTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlIiwiaXNTdWJwcm9vZk5vZGUiLCJwYXJhbWV0ZXJOb2RlcyIsImdldFBhcmFtZXRlck5vZGVzIiwiZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldFRlcm1Ob2RlIiwiZ2V0VGFyZ2V0VGVybU5vZGUiLCJnZXREZWR1Y3Rpb25Ob2RlIiwiZ2V0U2lnbmF0dXJlTm9kZSIsImdldExhYmVsTm9kZSIsImdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJzdGF0ZW1lbnROb2RlcyIsImdldFN0YXRlbWVudE5vZGVzIiwieXBvdGhlc2VzIiwic2FzaXNmaWVzQXNzZXJ0aW9uTm9kZSIsInRhcmdldEZyYW1lTm9kZSIsImdldFRhcmdldEZyYW1lTm9kZSIsImlzUmVzb2x2ZWQiLCJnZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwicmVwbGFjZW1lbnRUZXJtTm9kZSIsImdldFJlcGxhY2VtZW50VGVybU5vZGUiLCJ0eXBlc05vZGUiLCJnZXRUeXBlc05vZGUiLCJ0eXBlcyIsImdldFR5cGVQcmVmaXhOb2RlIiwiZ2V0Q29tYmluYXRvck5vZGUiLCJnZXRNZXRhVHlwZU5vZGUiLCJyZXBsYWNlbWVudEZyYW1lTm9kZSIsImdldFJlcGxhY2VtZW50RnJhbWVOb2RlIiwiZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJnZXRDb25zdHJ1Y3Rvck5vZGUiLCJ0YXJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0VGFyZ2V0UmVmZXJlbmNlTm9kZSIsInRhcmdldFJlZmVybmVjZSIsInRhcmdldFN0YXRlbWVudE5vZGUiLCJnZXRUYXJnZXRTdGF0ZW1lbnROb2RlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlIiwiZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwibWFwIiwidHlwZU5vZGVzIiwiZ2V0VHlwZU5vZGVzIiwiaHlwb3RoZXNpcyIsInN0ZXBPclN1YnByb29mTm9kZXMiLCJnZXRTdGVwT3JTdWJwcm9vZk5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFzYmdCQTtlQUFBQTs7UUFxd0JBQztlQUFBQTs7UUFteEJBQztlQUFBQTs7UUF0OEJBQztlQUFBQTs7UUFwM0JBQztlQUFBQTs7UUF1dEJBQztlQUFBQTs7UUF4SEFDO2VBQUFBOztRQXVnQ0FDO2VBQUFBOztRQTMxQ0FDO2VBQUFBOztRQThZQUM7ZUFBQUE7O1FBcFlBQztlQUFBQTs7UUF3aEJBQztlQUFBQTs7UUFuakJBQztlQUFBQTs7UUE2c0JBQztlQUFBQTs7UUExVEFDO2VBQUFBOztRQXdoQ0FDO2VBQUFBOztRQTExQ0FDO2VBQUFBOztRQWlOQUM7ZUFBQUE7O1FBbzhCQUM7ZUFBQUE7O1FBNTFDQUM7ZUFBQUE7O1FBeXdDQUM7ZUFBQUE7O1FBK0tBQztlQUFBQTs7UUE5bUNBQztlQUFBQTs7UUFtNUJBQztlQUFBQTs7UUFqakNBQztlQUFBQTs7UUFnakJBQztlQUFBQTs7UUExdUJBQztlQUFBQTs7UUFvMkJBQztlQUFBQTs7UUF0bkJBQztlQUFBQTs7UUF6WkFDO2VBQUFBOztRQTAyQ0FDO2VBQUFBOztRQTFHQUM7ZUFBQUE7O1FBdHVDQUM7ZUFBQUE7O1FBaXhDQUM7ZUFBQUE7O1FBMWFBQztlQUFBQTs7UUF0VkFDO2VBQUFBOztRQXc3QkFDO2VBQUFBOztRQTJTQUM7ZUFBQUE7O1FBdUZBQztlQUFBQTs7UUE1UkFDO2VBQUFBOztRQXZ5Q0FDO2VBQUFBOztRQWkwQkFDO2VBQUFBOztRQTFEQUM7ZUFBQUE7O1FBaDBCQUM7ZUFBQUE7O1FBbTFCQUM7ZUFBQUE7O1FBdGtDQUM7ZUFBQUE7O1FBcytDQUM7ZUFBQUE7O1FBaVdBQztlQUFBQTs7UUEvakNBQztlQUFBQTs7UUF3bkJBQztlQUFBQTs7UUExYkFDO2VBQUFBOztRQW43QkFDO2VBQUFBOztRQSt3QkFDO2VBQUFBOztRQWppQkFDO2VBQUFBOztR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