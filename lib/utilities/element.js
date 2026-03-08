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
    const { Frame } = _elements.default, node = frameNode, string = context.nodeAsString(node), assumptions = assumptionsFromFrameNode(frameNode, context), metavariable = metavariableFromFrameNode(frameNode, context);
    context = null;
    const frame = new Frame(context, string, node, assumptions, metavariable);
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
    const { Reference } = _elements.default, node = referenceNode, string = context.nodeAsString(node), metavariable = metavariableFromReferenceNode(referenceNode, context);
    context = null;
    const reference = new Reference(context, string, node, metavariable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zLFxuICAgICAgICAgdHlwZVN0cmluZ0Zyb21Ob21pbmFsVHlwZU5hbWUsXG4gICAgICAgICBydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbixcbiAgICAgICAgIHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uLFxuICAgICAgICAgc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbixcbiAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyxcbiAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbixcbiAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZSA9IGJhc2VUeXBlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBub2RlID0gdHlwZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHByZWZpeE5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZVN0cmluZ0Zyb21Ob21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICBzdHJpbmcgPSB0eXBlU3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3RlcCA9IG5ldyBTdGVwKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbik7XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUnVsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBydWxlU3RyaW5nID0gcnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiksXG4gICAgICAgIG5vZGUgPSBydWxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBydWxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb29mLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICByZXR1cm4gcnVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVycm9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVycm9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hRnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBsZW1tYU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gbGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgbGVtbWEgPSBuZXcgTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBmcmFtZSA9IG5ldyBGcmFtZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9vZk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9vZiA9IG5ldyBQcm9vZihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGRlcml2YXRpb24pO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBeGlvbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBheGlvbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gYXhpb21Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgYXhpb20gPSBuZXcgQXhpb20oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gYXhpb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzaXNOb2RlcyA9IHNlY3Rpb25Ob2RlLmdldEh5cG90aGVzaXNOb2RlcygpLFxuICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXhpb20gPSBheGlvbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlbW1hID0gbGVtbWFGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2VjdGlvblN0cmluZyA9IHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uKGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSksXG4gICAgICAgIG5vZGUgPSBzZWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHNlY3Rpb25TdHJpbmc7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSk7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcmVtaXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gcHJlbWlzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gdGhlb3JlbU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICB0aGVvcmVtID0gbmV3IFRoZW9yZW0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5Tm9kZS5nZXRQcm9wZXJ0eU5hbWUoKSxcbiAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IHByb3BlcnR5TmFtZTsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbm9taW5hbFR5cGVOYW1lKTtcblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW107XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mTm9kZSwgLy8vXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbihzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdWJwcm9vZlN0cmluZzsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mID0gbmV3IFN1YnByb29mKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKTtcblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXF1YWxpdHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXF1YWxpdHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBkZWR1Y3Rpb24gPSBuZXcgRGVkdWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpZ25hdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEp1ZGdlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBqdWRnZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgZnJhbWUsIGFzc3VtcHRpb24pO1xuXG4gIHJldHVybiBqdWRnZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YUxlbW1hIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUgPSBtZXRhTGVtbWFOb2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG51bGwsXG4gICAgICAgIG5vZGUgPSBtZXRhTGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgbWV0YUxlbW1hID0gbmV3IE1ldGFMZW1tYShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIHJldHVybiBtZXRhTGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHBhcmFtZXRlck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpLFxuICAgICAgICBpZGVudGlmaWVyID0gcGFyYW1ldGVyTm9kZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIGlkZW50aWZpZXIpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tSlNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzaWduYXR1cmVOb2RlLFxuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEh5cG90aHNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBoeXBvdGhlc2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2VOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBoeXBvaHRlc2lzID0gbmV3IEh5cG90aHNpcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGh5cG9odGVzaXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBjb25qZWN0dXJlTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG5vZGUgPSBjb25qZWN0dXJlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIGNvbmplY3R1cmUgPSBuZXcgQ29uamVjdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiBjb25qZWN0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tYmluYXRvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbmNsdXNpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBc3N1bXB0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgYXNzdW1wdGlvbiA9IG5ldyBBc3N1bXB0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlcml2YXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVyaXZhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGRlcml2YXRpb24gPSBuZXcgRGVyaXZhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0ZXBzT3JTdWJwcm9vZnMpO1xuXG4gIHJldHVybiBkZXJpdmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVQcmVmaXggfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZVByZWZpeE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdHlwZVByZWZpeCA9IG5ldyBUeXBlUHJlZml4KGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uc3RydWN0b3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VwcG9zaXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVxdWl2YWxlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVxdWl2YWxlbmNlTm9kZSwgLy8vXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICBzdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZzsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF0ZWhvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUgPSBtZXRhdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gbWV0YXRoZW9yZW1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG51bGwsXG4gICAgICAgIG1ldGF0aGVvcmVtID0gbmV3IE1ldGF0ZWhvcmVtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlc0Zyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGFUeXBlID0gbnVsbCxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHRlcm0sIHR5cGUsIG1ldGFUeXBlKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YkRlcml2YXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3ViRGVyaXZhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3ViRGVyaXZhdGlvbiA9IG5ldyBTdWJEZXJpdmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RlcHNPclN1YnByb29mcyk7XG5cbiAgcmV0dXJuIHN1YkRlcml2YXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gbmV3IFR5cGVBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsU3RyaW5nID0gcHJvY2VkdXJlQ2FsbFN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHByb2NlZHVyZVJlZmVyZW5jZSwgcGFyYW1ldGVycyksXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZUNhbGxTdHJpbmc7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHBhcmFtZXRlcnMsIHByb2NlZHVyZVJlZmVyZW5jZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXAgPSBzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJwcm9vZiA9IHN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IChzdGVwIHx8IHN1YnByb29mKTtcblxuICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVmaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGRlZmluZWRBc3NlcnRpb24gPSBuZXcgRGVmaW5lZEFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKTtcblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eVJlbGF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5UmVsYXRpb24gPSBuZXcgUHJvcGVydHlSZWxhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHByb3BlcnR5KTtcblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0YXJnZXRUZXJtID0gdGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlcGxhY2VtZW50VGVybSA9IHJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldFRlcm0sIHJlcGxhY2VtZW50VGVybSk7XG5cbiAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWVTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0YXJnZXRGcmFtZSA9IHRhcmdldEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRGcmFtZSwgcmVwbGFjZW1lbnRGcmFtZSk7XG5cbiAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb3BlcnR5QXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gbmV3IFByb3BlcnR5QXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudHMpO1xuXG4gIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb250YWluZWRBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uID0gbmV3IENvbnRhaW5lZEFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2F0aXNmaWVzQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBuZXcgU2F0aXNmaWVzQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc2lnbmF0dXJlLCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlUmVmZXJlZW5jZSA9IG5ldyBQcm9jZWR1cmVSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHByb3Zpc2lvbmFsID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IFZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCB2YXJpYWJsZSwgcHJvdmlzaW9uYWwpO1xuXG4gIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVQcmVmaXhEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksICAvLy9cbiAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uID0gbmV3IFR5cGVQcmVmaXhEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGVQcmVmaXgpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4RGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tYmluYXRvckRlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uID0gbmV3IENvbWJpbmF0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGNvbWJpbmF0b3IpO1xuXG4gIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2ltcGxlVHlwZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb24gPSBuZXcgU2ltcGxlVHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgc3VwZXJUeXBlcywgcHJvdmlzaW9uYWwpO1xuXG4gIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRhcmdldFJlZmVyZW5jZSA9IHRhcmdldFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXBsYWNlbWVudFJlZmVyZW5jZSA9IHJlcGxhY2VtZW50UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG5ldyBSZWZlcmVuY2VTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRSZWZlcmVuY2UsIHJlcGxhY2VtZW50UmVmZXJlbmNlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZXNvbHZlZCA9IHJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVzb2x2ZWQsIHN1YnN0aXR1dGlvbiwgdGFyZ2V0U3RhdGVtZW50LCByZXBsYWNlbWVudFN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uID0gbmV3IENvbnN0cnVjdG9yRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcm92aXNpb25hbCwgY29uc3RydWN0b3IpO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbXBsZXhUeXBlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IG5ldyBDb21wbGV4VHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgc3VwZXJUeXBlcywgcHJvdmlzaW9uYWwpO1xuXG4gIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGFUeXBlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICBuYW1lID0gdHlwZU5hbWU7ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG51bGw7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHByb29mTm9kZSA9IHJ1bGVOb2RlLmdldFByb29mTm9kZSgpO1xuXG4gIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBydWxlTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVtaXNlTm9kZXMgPSBydWxlTm9kZS5nZXRQcmVtaXNlTm9kZXMoKSxcbiAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21QcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXhpb20gPSBudWxsO1xuXG4gIGNvbnN0IGF4aW9tTm9kZSA9IHNlY3Rpb25Ob2RlLmdldEF4aW9tTm9kZSgpO1xuXG4gIGlmIChheGlvbU5vZGUgIT09IG51bGwpIHtcbiAgICBheGlvbSA9IGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxlbW1hID0gbnVsbDtcblxuICBjb25zdCBsZW1tYU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRMZW1tYU5vZGUoKTtcblxuICBpZiAobGVtbWFOb2RlICE9PSBudWxsKSB7XG4gICAgbGVtbWEgPSBsZW1tYUZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcHJvcGVydHlOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RlcE5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBzdGVwTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdHlwZVByZWZpeE5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKSxcbiAgICAgICAgbmFtZSA9IHR5cGVQcmVmaXhOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cGVyVHlwZXMgPSBudWxsO1xuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc0Zyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0aWVzID0gbnVsbDtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeE5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpLFxuICAgICAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWU7ICAvLy9cblxuICByZXR1cm4gcHJlZml4TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgY29uY2x1c2lvbk5vZGUgPSBydWxlTm9kZS5nZXRDb25jbHVzaW9uTm9kZSgpLFxuICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0aGVvcmVtID0gbnVsbDtcblxuICBjb25zdCB0aGVvcmVtTm9kZSA9IHNlY3Rpb25Ob2RlLmdldFRoZW9yZW1Ob2RlKCk7XG5cbiAgaWYgKHRoZW9yZW1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGhlb3JlbSA9IHRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUodGhlb3JlbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRoZW9yZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZnJhbWVOb2RlID0ganVkZ2VtZW50Tm9kZS5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gc2lnbmF0dXJlTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aXNpb25hbEZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlcml2YXRpb25Ob2RlID0gcHJvb2ZOb2RlLmdldERlcml2YXRpb25Ob2RlKCksXG4gICAgICAgIGRlcml2YXRpb24gPSBkZXJpdmF0aW9uRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlKG9jbnN0cnVjdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IG9jbnN0cnVjdG9yTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbnN0cnVjdG9yTm9kZShvY25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG51bGw7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlcyA9IGZyYW1lTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByZW1pc2VOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IGVxdWl2YWxlbmNlTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyYWlibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgIG5hbWUgPSBtZXRhdmFyYWlibGVOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZW1Ob2RlID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRUeXBlTm9kZSgpO1xuXG4gIGlmICh0eXBlbU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBsYWJlbE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29uamVjdHVyZSA9IG51bGw7XG5cbiAgY29uc3QgY29uamVjdHVyZU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRDb25qZWN0dXJlTm9kZSgpO1xuXG4gIGlmIChjb25qZWN0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb25qZWN0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXR5RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RXF1YWxpdHlOb2RlKCk7XG5cbiAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGVxdWFsaXR5ID0gZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZXF1YWxpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgIGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXI7ICAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGRlZHVjdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICBjb25zdCBqdWRnZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRKdWRnZW1lbnROb2RlKCk7XG5cbiAgaWYgKGp1ZGdlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBqdWRnZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXAgPSBudWxsO1xuXG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlLmlzU3RlcE5vZGUoKTtcblxuICBpZiAoc3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUpIHtcbiAgICBjb25zdCBzdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZTsgIC8vL1xuXG4gICAgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsVHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0ganVkZ2VtZW50Tm9kZS5nZXRBc3N1bXB0aW9uTm9kZSgpLFxuICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBpZGVudGlmaWVyID0gcGFyYW1ldGVyTm9kZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29tYmluYXRvck5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpbm9Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW5vTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBoeXBvdGhlc2lzTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHByZW1pc2VOb2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gc3VicHJvb2ZOb2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50OyAvLy9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3ViRGVyaXZhdGlvbk5vZGUgPSBzdWJwcm9vZk5vZGUuZ2V0U3ViRGVyaXZhdGlvbk5vZGUoKSxcbiAgICAgICAgc3ViRGVydmlhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdWJEZXJ2aWF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2VOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZywgLy8vXG4gICAgICAgICAgc3RyaW5nID0gcmVmZXJlbmNlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBzdGVwTm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFR5cGVBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgdHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFByb29mTm9kZSgpO1xuXG4gIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN1YnByb29mT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mID0gbnVsbDtcblxuICBjb25zdCBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlID0gc3VicHJvb2ZPclN1YnByb29mTm9kZS5pc1N1YnByb29mTm9kZSgpO1xuXG4gIGlmIChzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZPclN1YnByb29mTm9kZTsgIC8vL1xuXG4gICAgc3VicHJvb2YgPSBzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTm9kZXMgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpXG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlcyA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmVnYXRlZCA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpO1xuXG4gIHJldHVybiBuZWdhdGVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBkZWZpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBkZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpO1xuXG4gIHJldHVybiBuZWdhdGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5vZGUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRUZXJtTm9kZSgpLFxuICAgICAgICB0YXJnZXRUZXJtID0gdGVybUZyb21UZXJtTm9kZSh0YXJnZXRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRhcmdldFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZU5vZGUgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKTtcblxuICBpZiAoc2lnbmF0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvb2ZOb2RlID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0UHJvb2ZOb2RlKCksXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRMYWJlbE5vZGUoKSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmIChmcmFtZVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eUFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAocHJvcGVydHlBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOb2RlID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHswXG4gIGxldCBjb250YWluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IGNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGVzKCksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzKHN0YXRlbWVudE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzaWduYXR1cmVOb2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeXBvdGhlc2VzID0gW107XG5cbiAgcmV0dXJuIHlwb3RoZXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXNpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHNpZ25hdHVyZU5vZGUgPSBzYXNpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUpTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2FzaXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZWZlcmVuY2VOb2RlID0gc2FzaXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldEZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0RnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUodGFyZ2V0RnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGFyZ2V0RnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25Ob2RlcyA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlc29sdmVkID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5pc1Jlc29sdmVkKCk7XG5cbiAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldERlZHVjdGlvbk5vZGUoKSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFRlcm1Ob2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUocmVwbGFjZW1lbnRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdXBlclR5cGVzID0gW107XG5cbiAgY29uc3QgdHlwZXNOb2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlc05vZGUoKTtcblxuICBpZiAodHlwZXNOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZXMgPSB0eXBlc0Zyb21UeXBlc05vZGUodHlwZXNOb2RlLCBjb250ZXh0KTtcblxuICAgIHN1cGVyVHlwZXMgPSB0eXBlczsgLy8vXG4gIH1cblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVQcmVmaXhOb2RlID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZS5nZXRUeXBlUHJlZml4Tm9kZSgpLFxuICAgICAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBjb21iaW5hdG9yTm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0Q29tYmluYXRvck5vZGUoKSxcbiAgICAgICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhVHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YVR5cGVOb2RlKCksXG4gICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3Zpc2lvbmFsID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VwZXJUeXBlcyA9IFtdO1xuXG4gIGNvbnN0IHR5cGVzTm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVzTm9kZSgpO1xuXG4gIGlmICh0eXBlc05vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlcyA9IHR5cGVzRnJvbVR5cGVzTm9kZSh0eXBlc05vZGUsIGNvbnRleHQpO1xuXG4gICAgc3VwZXJUeXBlcyA9IHR5cGVzOyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50RnJhbWVOb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50RnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUocmVwbGFjZW1lbnRGcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudEZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3BlcnR5UmVsYXRpb25Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLmdldFByb3BlcnR5UmVsYXRpb25Ob2RlKCksXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gKGZyYW1lU3Vic3RpdHV0aW9uIHx8IHRlcm1TdWJzdGl0dXRpb24pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBjb25zdHJ1Y3Rvck5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRDb25zdHJ1Y3Rvck5vZGUoKSxcbiAgICAgICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aXNpb25hbEZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm92aXNpb25hbCA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKTtcblxuICByZXR1cm4gcHJvdmlzaW9uYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aXNpb25hbEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm92aXNpb25hbCA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKTtcblxuICByZXR1cm4gcHJvdmlzaW9uYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICB0YXJnZXRSZWZlcm5lY2UgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZSh0YXJnZXRSZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGFyZ2V0UmVmZXJuZWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHRhcmdldFN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHRhcmdldFN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0YXJnZXRTdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmIChmcmFtZVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZW1lbnRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRSZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXMgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4ge1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc0Zyb21UeXBlc05vZGUodHlwZXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOb2RlcyA9IHR5cGVzTm9kZS5nZXRUeXBlTm9kZXMoKSxcbiAgICAgICAgdHlwZXMgPSB0eXBlTm9kZXMubWFwKCh0eXBlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tUHJlbWlzZU5vZGVzKHByZW1pc2VOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBwcmVtaXNlcyA9IHByZW1pc2VOb2Rlcy5tYXAoKHByZW1pc2VOb2RlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZSA9IHByZW1pc2VGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMoc3RhdGVtZW50Tm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzZXMgPSBoeXBvdGhlc2lzTm9kZXMubWFwKChoeXBvdGhlc2VOb2RlKSA9PiB7XG4gICAgY29uc3QgaHlwb3RoZXNpcyA9IGh5cG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbk5vZGVzLm1hcCgoYXNzdW1wdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IGRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IHN0ZXBPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHNPclN1YnByb29mcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IHN1YkRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IHN0ZXBPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHNPclN1YnByb29mcztcbn1cbiJdLCJuYW1lcyI6WyJhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlIiwiYXNzdW1wdGlvbnNGcm9tQXNzdW1wdGlvbk5vZGVzIiwiYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlIiwiYXhpb21Gcm9tQXhpb21Ob2RlIiwiYXhpb21Gcm9tU2VjdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25Gcm9tUnVsZU5vZGUiLCJjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlIiwiY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJkZXJpdmF0aW9uRnJvbURlcml2YXRpb25Ob2RlIiwiZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUiLCJlcXVhbGl0eUZyb21FcXVhbGl0eU5vZGUiLCJlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlIiwiZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJhbWVGcm9tRnJhbWVOb2RlIiwiZnJhbWVGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMiLCJoeXBvdGhlc2VzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsImh5cG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUiLCJpZGVudGlmaWVyRnJvbVBhcmFtZXRlck5vZGUiLCJpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSIsImp1ZGdlbWVudEZyb21KdWRnZW1lbnROb2RlIiwianVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJsYWJlbEZyb21MYWJlbE5vZGUiLCJsYWJlbEZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwibGFiZWxzRnJvbUxhYmVsTm9kZXMiLCJsYWJlbHNGcm9tUnVsZU5vZGUiLCJsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwibGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwibGVtbWFGcm9tTGVtbWFOb2RlIiwibGVtbWFGcm9tU2VjdGlvbk5vZGUiLCJtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZSIsIm1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF0aGVvcmVtRnJvbU1ldGF0aGVvcmVtTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlIiwibWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZSIsIm5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm5hbWVGcm9tUGFyYW5ldGVyTm9kZSIsIm5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsIm5hbWVGcm9tUHJvcGVydHlOb2RlIiwibmFtZUZyb21UeXBlTm9kZSIsIm5hbWVGcm9tVHlwZVByZWZpeE5vZGUiLCJuZWdhdGVkRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJuZWdhdGVkRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIm5vbWluYWxUeXBlTmFtZUZyb21UeXBlTm9kZSIsInBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcmVmaXhOYW1lRnJvbVR5cGVOb2RlIiwicHJlbWlzZUZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyIsInByZW1pc2VzRnJvbVJ1bGVOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwicHJvb2ZGcm9tUHJvb2ZOb2RlIiwicHJvb2ZGcm9tUnVsZU5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwicHJvcGVydGllc0Zyb21UeXBlTm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3Zpc2lvbmFsRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJvdmlzaW9uYWxGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJwcm92aXNpb25hbEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJvdmlzaW9uYWxGcm9tVHlwZU5vZGUiLCJyZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tU3RlcE5vZGUiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInJlZmVyZW5jZXNGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJyZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwicmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsInJ1bGVGcm9tUnVsZU5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlIiwic2VjdGlvbkZyb21TZWN0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21KU2lnbmF0dXJlTm9kZSIsInNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUiLCJzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlIiwic3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlIiwic3RhdGVtZW50RnJvbVByZW1pc2VOb2RlIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RlcE5vZGUiLCJzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzIiwic3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdGVwRnJvbVN0ZXBOb2RlIiwic3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlIiwic3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUiLCJzdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdXBlclR5cGVzRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdXBlclR5cGVzRnJvbVR5cGVOb2RlIiwic3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwidGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZSIsInRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tTWV0YXZhcmlhYmxlTm9kZSIsInRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwidGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZSIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJ0aGVvcmVtRnJvbVNlY3Rpb25Ob2RlIiwidGhlb3JlbUZyb21UaGVvcmVtTm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tQ29uc3RydWN0b3JOb2RlIiwidHlwZUZyb21NZXRhdmFyaWFibGVOb2RlIiwidHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21UZXJtTm9kZSIsInR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbVR5cGVOb2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlIiwidHlwZXNGcm9tVHlwZXNOb2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiY29udGV4dCIsInR5cGUiLCJiYXNlVHlwZSIsImJhc2VUeXBlRnJvbU5vdGhpbmciLCJUeXBlIiwiZWxlbWVudHMiLCJub2RlIiwibmFtZSIsInByZWZpeE5hbWUiLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwibm9taW5hbFR5cGVOYW1lIiwidHlwZVN0cmluZyIsInR5cGVTdHJpbmdGcm9tTm9taW5hbFR5cGVOYW1lIiwic3RyaW5nIiwidGVybU5vZGUiLCJUZXJtIiwibm9kZUFzU3RyaW5nIiwidGVybSIsInN0ZXBOb2RlIiwiU3RlcCIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsInN0ZXAiLCJydWxlTm9kZSIsIlJ1bGUiLCJwcm9vZiIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsInJ1bGVTdHJpbmciLCJydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbiIsInJ1bGUiLCJsYWJlbE5vZGUiLCJMYWJlbCIsIm1ldGF2YXJpYWJsZSIsImxhYmVsIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJlcnJvciIsImxlbW1hTm9kZSIsIkxlbW1hIiwidG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSIsImRlZHVjdGlvbiIsInN1cHBvc2l0aW9ucyIsInNpZ25hdHVyZSIsImh5cG90aGVzZXMiLCJ0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmciLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJsZW1tYSIsImZyYW1lTm9kZSIsIkZyYW1lIiwiYXNzdW1wdGlvbnMiLCJmcmFtZSIsInByb29mTm9kZSIsIlByb29mIiwiZGVyaXZhdGlvbiIsImF4aW9tTm9kZSIsIkF4aW9tIiwiYXhpb20iLCJzZWN0aW9uTm9kZSIsImh5cG90aGVzaXNOb2RlcyIsImdldEh5cG90aGVzaXNOb2RlcyIsInRoZW9yZW0iLCJjb25qZWN0dXJlIiwic2VjdGlvblN0cmluZyIsInNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uIiwic2VjdGlvbiIsIlNlY3Rpb24iLCJwcmVtaXNlTm9kZSIsIlByZW1pc2UiLCJwcm9jZWR1cmVDYWxsIiwicHJlbWlzZSIsInRoZW9yZW1Ob2RlIiwiVGhlb3JlbSIsIm1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTmFtZSIsImdldE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJwcm9wZXJ0eU5vZGUiLCJQcm9wZXJ0eSIsInByb3BlcnR5TmFtZSIsImdldFByb3BlcnR5TmFtZSIsInByb3BlcnR5IiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJpZGVudGlmaWVyIiwicHJvcGVydHlSZWxhdGlvbnMiLCJ2YXJpYWJsZSIsInN1YnByb29mTm9kZSIsIlN1YnByb29mIiwic3ViRGVyaXZhdGlvbiIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbiIsInN1YnByb29mIiwiZXF1YWxpdHlOb2RlIiwiRXF1YWxpdHkiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImVxdWFsaXR5IiwiZGVkdWN0aW9uTm9kZSIsIkRlZHVjdGlvbiIsInN0YXRlbWVudE5vZGUiLCJTdGF0ZW1lbnQiLCJzaWduYXR1cmVOb2RlIiwiU2lnbmF0dXJlIiwidGVybXMiLCJyZWZlcmVuY2VOb2RlIiwiUmVmZXJlbmNlIiwianVkZ2VtZW50Tm9kZSIsIkp1ZGdlbWVudCIsImFzc3VtcHRpb24iLCJqdWRnZW1lbnQiLCJtZXRhTGVtbWFOb2RlIiwiTWV0YUxlbW1hIiwibWV0YUxlbW1hTWV0YXRob3JlbU5vZGUiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJzdWJzdGl0dXRpb25zIiwibWV0YUxlbW1hIiwicGFyYW1ldGVyTm9kZSIsIlBhcmFtZXRlciIsImdldE5hbWUiLCJnZXRJZGVudGlmaWVyIiwicGFyYW1ldGVyIiwiaHlwb3RoZXNlTm9kZSIsIkh5cG90aHNpcyIsImh5cG9odGVzaXMiLCJjb25qZWN0dXJlTm9kZSIsIkNvbmplY3R1cmUiLCJjb21iaW5hdG9yTm9kZSIsIkNvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiY29uY2x1c2lvbk5vZGUiLCJDb25jbHVzaW9uIiwiYXNzdW1wdGlvbk5vZGUiLCJBc3N1bXB0aW9uIiwiZGVyaXZhdGlvbk5vZGUiLCJEZXJpdmF0aW9uIiwic3RlcHNPclN1YnByb29mcyIsInR5cGVQcmVmaXhOb2RlIiwiVHlwZVByZWZpeCIsInRlcm1Gcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlRnJvbVR5cGVQcmVmaXhOb2RlIiwidHlwZVByZWZpeCIsImNvbnN0cnVjdG9yTm9kZSIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJzdXBwb3NpdGlvbk5vZGUiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uIiwiZXF1aXZhbGVuY2VOb2RlIiwiRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZVN0cmluZyIsImVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zIiwiZXF1aXZhbGVuY2UiLCJtZXRhdGhlb3JlbU5vZGUiLCJNZXRhdGVob3JlbSIsIm1ldGF0aGVvcmVtIiwibWV0YXZhcmlhYmxlTm9kZSIsIk1ldGF2YXJpYWJsZSIsInN1YkRlcml2YXRpb25Ob2RlIiwiU3ViRGVyaXZhdGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwiVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJwYXJhbWV0ZXJzIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyIsInN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBPclN1YnByb29mIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJEZWZpbmVkQXNzZXJ0aW9uIiwibmVnYXRlZCIsImlzTmVnYXRlZCIsImRlZmluZWRBc3NlcnRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIlByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJUZXJtU3Vic3RpdHV0aW9uIiwidGFyZ2V0VGVybSIsInJlcGxhY2VtZW50VGVybSIsInRlcm1TdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsInRhcmdldEZyYW1lIiwicmVwbGFjZW1lbnRGcmFtZSIsImZyYW1lU3Vic3RpdHV0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIlN1YnByb29mQXNzZXJ0aW9uIiwic3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIkNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJwcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlUmVmZXJlZW5jZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImdldFR5cGVOb2RlIiwiaXNQcm92aXNpb25hbCIsImdldFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJTaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJzaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwidGFyZ2V0UmVmZXJlbmNlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwicmVzb2x2ZWQiLCJzdWJzdGl0dXRpb24iLCJ0YXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudCIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsInR5cGVOYW1lIiwiZ2V0VHlwZU5hbWUiLCJnZXRQcm9vZk5vZGUiLCJsYWJlbE5vZGVzIiwiZ2V0TGFiZWxOb2RlcyIsInByZW1pc2VOb2RlcyIsImdldFByZW1pc2VOb2RlcyIsImdldEF4aW9tTm9kZSIsImdldExlbW1hTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJnZXRSZWZlcmVuY2VOb2RlIiwidHlwZVByZWZpeE5hbWUiLCJnZXRUeXBlUHJlZml4TmFtZSIsImdldENvbmNsdXNpb25Ob2RlIiwiZ2V0VGhlb3JlbU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJ0ZXJtTm9kZXMiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJnZXREZXJpdmF0aW9uTm9kZSIsIm9jbnN0cnVjdG9yTm9kZSIsImdldFRlcm1Ob2RlIiwiYXNzdW1wdGlvbk5vZGVzIiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwiZ2V0VGVybU5vZGVzIiwibWV0YXZhcmFpYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJ0eXBlbU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Q29uamVjdHVyZU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImdldEVxdWFsaXR5Tm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsImdldEp1ZGdlbWVudE5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSIsImlzU3RlcE5vZGUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImNvbmNsdXNpbm9Ob2RlIiwiaHlwb3RoZXNpc05vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJ2aWF0aW9uIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibGl0ZXJhbGx5IiwicmVmZXJlbmNlU3RyaW5nIiwiaW5zdGFudGlhdGVSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VHlwZUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSIsImlzU3VicHJvb2ZOb2RlIiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRUZXJtTm9kZSIsImdldFRhcmdldFRlcm1Ob2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50Tm9kZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsInlwb3RoZXNlcyIsInNhc2lzZmllc0Fzc2VydGlvbk5vZGUiLCJ0YXJnZXRGcmFtZU5vZGUiLCJnZXRUYXJnZXRGcmFtZU5vZGUiLCJpc1Jlc29sdmVkIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50VGVybU5vZGUiLCJnZXRSZXBsYWNlbWVudFRlcm1Ob2RlIiwidHlwZXNOb2RlIiwiZ2V0VHlwZXNOb2RlIiwidHlwZXMiLCJnZXRUeXBlUHJlZml4Tm9kZSIsImdldENvbWJpbmF0b3JOb2RlIiwiZ2V0TWV0YVR5cGVOb2RlIiwicmVwbGFjZW1lbnRGcmFtZU5vZGUiLCJnZXRSZXBsYWNlbWVudEZyYW1lTm9kZSIsImdldFByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZ2V0Q29uc3RydWN0b3JOb2RlIiwidGFyZ2V0UmVmZXJlbmNlTm9kZSIsImdldFRhcmdldFJlZmVyZW5jZU5vZGUiLCJ0YXJnZXRSZWZlcm5lY2UiLCJ0YXJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSIsImdldFJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsIm1hcCIsInR5cGVOb2RlcyIsImdldFR5cGVOb2RlcyIsImh5cG90aGVzaXMiLCJzdGVwT3JTdWJwcm9vZk5vZGVzIiwiZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBeWJnQkE7ZUFBQUE7O1FBeXZCQUM7ZUFBQUE7O1FBbXhCQUM7ZUFBQUE7O1FBdDhCQUM7ZUFBQUE7O1FBMzJCQUM7ZUFBQUE7O1FBMHRCQUM7ZUFBQUE7O1FBeEhBQztlQUFBQTs7UUEyL0JBQztlQUFBQTs7UUEvMENBQztlQUFBQTs7UUE4WUFDO2VBQUFBOztRQXBZQUM7ZUFBQUE7O1FBd2hCQUM7ZUFBQUE7O1FBbmpCQUM7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