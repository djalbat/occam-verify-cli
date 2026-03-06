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
function metavariableFromMetavariableNode(metavariableNode, context) {
    const { Metavariable } = _elements.default, node = metavariableNode, string = context.nodeAsString(node), metavariableName = metavariableNode.getMetavariableName(), name = metavariableName, type = null, metaType = null, metavariable = new Metavariable(context, string, node, name, type, metaType);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zLFxuICAgICAgICAgdHlwZVN0cmluZ0Zyb21Ob21pbmFsVHlwZU5hbWUsXG4gICAgICAgICBydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbixcbiAgICAgICAgIHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uLFxuICAgICAgICAgc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbixcbiAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyxcbiAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbixcbiAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZSA9IGJhc2VUeXBlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBub2RlID0gdHlwZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHByZWZpeE5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZVN0cmluZ0Zyb21Ob21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICBzdHJpbmcgPSB0eXBlU3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3RlcCA9IG5ldyBTdGVwKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbik7XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUnVsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBydWxlU3RyaW5nID0gcnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiksXG4gICAgICAgIG5vZGUgPSBydWxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBydWxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb29mLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICByZXR1cm4gcnVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVycm9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVycm9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hRnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBsZW1tYU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gbGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgbGVtbWEgPSBuZXcgTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBmcmFtZSA9IG5ldyBGcmFtZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9vZk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9vZiA9IG5ldyBQcm9vZihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGRlcml2YXRpb24pO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBeGlvbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBheGlvbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gYXhpb21Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgYXhpb20gPSBuZXcgQXhpb20oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gYXhpb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzaXNOb2RlcyA9IHNlY3Rpb25Ob2RlLmdldEh5cG90aGVzaXNOb2RlcygpLFxuICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXhpb20gPSBheGlvbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlbW1hID0gbGVtbWFGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2VjdGlvblN0cmluZyA9IHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uKGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSksXG4gICAgICAgIG5vZGUgPSBzZWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHNlY3Rpb25TdHJpbmc7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSk7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcmVtaXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gcHJlbWlzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gdGhlb3JlbU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICB0aGVvcmVtID0gbmV3IFRoZW9yZW0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5Tm9kZS5nZXRQcm9wZXJ0eU5hbWUoKSxcbiAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IHByb3BlcnR5TmFtZTsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbm9taW5hbFR5cGVOYW1lKTtcblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW107XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mTm9kZSwgLy8vXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbihzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdWJwcm9vZlN0cmluZzsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mID0gbmV3IFN1YnByb29mKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKTtcblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXF1YWxpdHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXF1YWxpdHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBkZWR1Y3Rpb24gPSBuZXcgRGVkdWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpZ25hdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudEZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBKdWRnZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKTtcblxuICByZXR1cm4ganVkZ2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGFMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YUxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBub2RlID0gbWV0YUxlbW1hTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIG1ldGFMZW1tYSA9IG5ldyBNZXRhTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICByZXR1cm4gbWV0YUxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldE5hbWUoKSxcbiAgICAgICAgaWRlbnRpZmllciA9IHBhcmFtZXRlck5vZGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBpZGVudGlmaWVyKTtcblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaWduYXR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2lnbmF0dXJlTm9kZSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBIeXBvdGhzaXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gaHlwb3RoZXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgaHlwb2h0ZXNpcyA9IG5ldyBIeXBvdGhzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBoeXBvaHRlc2lzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gY29uamVjdHVyZU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gY29uamVjdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBjb25qZWN0dXJlID0gbmV3IENvbmplY3R1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25jbHVzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhc3N1bXB0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZXJpdmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlcml2YXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBkZXJpdmF0aW9uID0gbmV3IERlcml2YXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVQcmVmaXggPSBuZXcgVHlwZVByZWZpeChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1cHBvc2l0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcXVpdmFsZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcXVpdmFsZW5jZU5vZGUsIC8vL1xuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlcXVpdmFsZW5jZVN0cmluZyA9IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zKHRlcm1zKSxcbiAgICAgICAgc3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmc7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtRnJvbU1ldGF0aGVvcmVtTm9kZShtZXRhdGhlb3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdGVob3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YXRoZW9yZW1Ob2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IG1ldGF0aGVvcmVtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBtZXRhdGhlb3JlbSA9IG5ldyBNZXRhdGVob3JlbShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgbWV0YVR5cGUgPSBudWxsLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSwgbWV0YVR5cGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3ViRGVyaXZhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdWJEZXJpdmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBzdWJEZXJpdmF0aW9uID0gbmV3IFN1YkRlcml2YXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gc3ViRGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb24gPSBuZXcgVHlwZUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpO1xuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocHJvY2VkdXJlUmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlQ2FsbFN0cmluZzsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcCA9IHN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXBPclN1YnByb29mID0gKHN0ZXAgfHwgc3VicHJvb2YpO1xuXG4gIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWZpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvbiA9IG5ldyBEZWZpbmVkQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpO1xuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb3BlcnR5UmVsYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IG5ldyBQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgcHJvcGVydHkpO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRhcmdldFRlcm0gPSB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKTtcblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRhcmdldEZyYW1lID0gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldEZyYW1lLCByZXBsYWNlbWVudEZyYW1lKTtcblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlBc3NlcnRpb24gPSBuZXcgUHJvcGVydHlBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcblxuICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VicHJvb2ZBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50cyk7XG5cbiAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnRhaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5pc05lZ2F0ZWQoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb24gPSBuZXcgQ29udGFpbmVkQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTYXRpc2ZpZXNBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG5ldyBTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzaWduYXR1cmUsIHJlZmVyZW5jZSk7XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVSZWZlcmVlbmNlID0gbmV3IFByb2NlZHVyZVJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgcHJvdmlzaW9uYWwgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgVmFyaWFibGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHZhcmlhYmxlLCBwcm92aXNpb25hbCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZVByZWZpeERlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb24gPSBuZXcgVHlwZVByZWZpeERlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZVByZWZpeCk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21iaW5hdG9yRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29tYmluYXRvckRlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29tYmluYXRvcik7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IG5ldyBTaW1wbGVUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBzdXBlclR5cGVzLCBwcm92aXNpb25hbCk7XG5cbiAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGFyZ2V0UmVmZXJlbmNlID0gdGFyZ2V0UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlID0gcmVwbGFjZW1lbnRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gbmV3IFJlZmVyZW5jZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldFJlZmVyZW5jZSwgcmVwbGFjZW1lbnRSZWZlcmVuY2UpO1xuXG4gIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlc29sdmVkID0gcmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KTtcblxuICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29uc3RydWN0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHByb3Zpc2lvbmFsLCBjb25zdHJ1Y3Rvcik7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gbmV3IENvbXBsZXhUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBzdXBlclR5cGVzLCBwcm92aXNpb25hbCk7XG5cbiAgcmV0dXJuIGNvbXBsZXhUeXBlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YVR5cGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgIG5hbWUgPSB0eXBlTmFtZTsgIC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gbnVsbDtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgY29uc3QgcHJvb2ZOb2RlID0gcnVsZU5vZGUuZ2V0UHJvb2ZOb2RlKCk7XG5cbiAgaWYgKHByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlcyA9IHJ1bGVOb2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VOb2RlcyA9IHJ1bGVOb2RlLmdldFByZW1pc2VOb2RlcygpLFxuICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBheGlvbSA9IG51bGw7XG5cbiAgY29uc3QgYXhpb21Ob2RlID0gc2VjdGlvbk5vZGUuZ2V0QXhpb21Ob2RlKCk7XG5cbiAgaWYgKGF4aW9tTm9kZSAhPT0gbnVsbCkge1xuICAgIGF4aW9tID0gYXhpb21Gcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXhpb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbGVtbWEgPSBudWxsO1xuXG4gIGNvbnN0IGxlbW1hTm9kZSA9IHNlY3Rpb25Ob2RlLmdldExlbW1hTm9kZSgpO1xuXG4gIGlmIChsZW1tYU5vZGUgIT09IG51bGwpIHtcbiAgICBsZW1tYSA9IGxlbW1hRnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBwcm9wZXJ0eU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGVwTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHN0ZXBOb2RlLmdldFJlZmVyZW5jZU5vZGUoKTtcblxuICBpZiAocmVmZXJlbmNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0eXBlUHJlZml4Tm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpLFxuICAgICAgICBuYW1lID0gdHlwZVByZWZpeE5hbWU7ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwZXJUeXBlcyA9IG51bGw7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3BlcnRpZXMgPSBudWxsO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4TmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHR5cGVOb2RlLmdldFR5cGVQcmVmaXhOYW1lKCksXG4gICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZTsgIC8vL1xuXG4gIHJldHVybiBwcmVmaXhOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBjb25jbHVzaW9uTm9kZSA9IHJ1bGVOb2RlLmdldENvbmNsdXNpb25Ob2RlKCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRoZW9yZW0gPSBudWxsO1xuXG4gIGNvbnN0IHRoZW9yZW1Ob2RlID0gc2VjdGlvbk5vZGUuZ2V0VGhlb3JlbU5vZGUoKTtcblxuICBpZiAodGhlb3JlbU5vZGUgIT09IG51bGwpIHtcbiAgICB0aGVvcmVtID0gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBmcmFtZU5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZXMgPSBzaWduYXR1cmVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3Zpc2lvbmFsRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3Zpc2lvbmFsID0gbnVsbDtcblxuICByZXR1cm4gcHJvdmlzaW9uYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmF0aW9uRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVyaXZhdGlvbk5vZGUgPSBwcm9vZk5vZGUuZ2V0RGVyaXZhdGlvbk5vZGUoKSxcbiAgICAgICAgZGVyaXZhdGlvbiA9IGRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZXJpdmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUob2Nuc3RydWN0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gb2Nuc3RydWN0b3JOb2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tQ29uc3RydWN0b3JOb2RlKG9jbnN0cnVjdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gbnVsbDtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2Rlcyhhc3N1bXB0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgIGxlZnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gZXF1aXZhbGVuY2VOb2RlLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJhaWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgbmFtZSA9IG1ldGF2YXJhaWJsZU5hbWU7ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb25qZWN0dXJlID0gbnVsbDtcblxuICBjb25zdCBjb25qZWN0dXJlTm9kZSA9IHNlY3Rpb25Ob2RlLmdldENvbmplY3R1cmVOb2RlKCk7XG5cbiAgaWYgKGNvbmplY3R1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmplY3R1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRFcXVhbGl0eU5vZGUoKTtcblxuICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZUFzc2VydGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllcjsgIC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gZGVkdWN0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBqdWRnZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEp1ZGdlbWVudE5vZGUoKTtcblxuICBpZiAoanVkZ2VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudEZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGp1ZGdlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RlcCA9IG51bGw7XG5cbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGUuaXNTdGVwTm9kZSgpO1xuXG4gIGlmIChzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSkge1xuICAgIGNvbnN0IHN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlOyAgLy8vXG5cbiAgICBzdGVwID0gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbWluYWxUeXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICByZXR1cm4gbm9taW5hbFR5cGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEFzc3VtcHRpb25Ob2RlKCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlkZW50aWZpZXIgPSBwYXJhbWV0ZXJOb2RlLmdldElkZW50aWZpZXIoKTtcblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lub05vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpbm9Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50O1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGh5cG90aGVzaXNOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gcHJlbWlzZU5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBzdWJwcm9vZk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7IC8vL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdWJEZXJpdmF0aW9uTm9kZSA9IHN1YnByb29mTm9kZS5nZXRTdWJEZXJpdmF0aW9uTm9kZSgpLFxuICAgICAgICBzdWJEZXJ2aWF0aW9uID0gc3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1YkRlcnZpYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICByZXR1cm4gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gbWV0YXZhcmlhYmxlU3RyaW5nLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSByZWZlcmVuY2VTdHJpbmcsICAvLy9cbiAgICAgICAgICByZWZlcmVuY2VOb2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0ZXBOb2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VHlwZUFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHByb29mTm9kZSA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0UHJvb2ZOb2RlKCk7XG5cbiAgaWYgKHByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3VicHJvb2ZPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VicHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mT3JTdWJwcm9vZk5vZGVTdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlLmlzU3VicHJvb2ZOb2RlKCk7XG5cbiAgaWYgKHN1YnByb29mT3JTdWJwcm9vZk5vZGVTdWJwcm9vZk5vZGUpIHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlOyAgLy8vXG5cbiAgICBzdWJwcm9vZiA9IHN1YnByb29mRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dClcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGVzID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuZWdhdGVkID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZmluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGRlZmluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChkZWZpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmVnYXRlZCA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRhcmdldFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRhcmdldFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGFyZ2V0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkZWR1Y3Rpb25Ob2RlID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpO1xuXG4gIGlmIChzaWduYXR1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9vZk5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRQcm9vZk5vZGUoKSxcbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldExhYmVsTm9kZSgpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5QXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOb2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkgezBcbiAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29udGFpbmVkQXNzZXJ0aW9uID0gY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZXMoKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMoc3RhdGVtZW50Tm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHNpZ25hdHVyZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB5cG90aGVzZXMgPSBbXTtcblxuICByZXR1cm4geXBvdGhlc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhc2lzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHNhc2lzZmllc0Fzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tSlNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXNpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBzYXNpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldEZyYW1lTm9kZSgpLFxuICAgICAgICB0YXJnZXRGcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZSh0YXJnZXRGcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0YXJnZXRGcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVzb2x2ZWQgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmlzUmVzb2x2ZWQoKTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkZWR1Y3Rpb25Ob2RlID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50VGVybU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyZXBsYWNlbWVudFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1cGVyVHlwZXMgPSBbXTtcblxuICBjb25zdCB0eXBlc05vZGUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVzTm9kZSgpO1xuXG4gIGlmICh0eXBlc05vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlcyA9IHR5cGVzRnJvbVR5cGVzTm9kZSh0eXBlc05vZGUsIGNvbnRleHQpO1xuXG4gICAgc3VwZXJUeXBlcyA9IHR5cGVzOyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVByZWZpeE5vZGUgPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLmdldFR5cGVQcmVmaXhOb2RlKCksXG4gICAgICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JOb2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZS5nZXRDb21iaW5hdG9yTm9kZSgpLFxuICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFUeXBlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhVHlwZU5vZGUoKSxcbiAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aXNpb25hbEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvdmlzaW9uYWwgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKTtcblxuICByZXR1cm4gcHJvdmlzaW9uYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdXBlclR5cGVzID0gW107XG5cbiAgY29uc3QgdHlwZXNOb2RlID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZXNOb2RlKCk7XG5cbiAgaWYgKHR5cGVzTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVzID0gdHlwZXNGcm9tVHlwZXNOb2RlKHR5cGVzTm9kZSwgY29udGV4dCk7XG5cbiAgICBzdXBlclR5cGVzID0gdHlwZXM7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRGcmFtZU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShyZXBsYWNlbWVudEZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50RnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25Ob2RlcyA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSAoZnJhbWVTdWJzdGl0dXRpb24gfHwgdGVybVN1YnN0aXR1dGlvbik7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldENvbnN0cnVjdG9yTm9kZSgpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3Zpc2lvbmFsRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3Zpc2lvbmFsID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpO1xuXG4gIHJldHVybiBwcm92aXNpb25hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3Zpc2lvbmFsRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3Zpc2lvbmFsID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpO1xuXG4gIHJldHVybiBwcm92aXNpb25hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRSZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHRhcmdldFJlZmVybmVjZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKHRhcmdldFJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0YXJnZXRSZWZlcm5lY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUodGFyZ2V0U3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRhcmdldFN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlbWVudFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRSZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCB0ZXJtcyA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzRnJvbVR5cGVzTm9kZSh0eXBlc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5vZGVzID0gdHlwZXNOb2RlLmdldFR5cGVOb2RlcygpLFxuICAgICAgICB0eXBlcyA9IHR5cGVOb2Rlcy5tYXAoKHR5cGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB0eXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21QcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VzID0gcHJlbWlzZU5vZGVzLm1hcCgocHJlbWlzZU5vZGUpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlID0gcHJlbWlzZUZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyhzdGF0ZW1lbnROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVycyA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyhoeXBvdGhlc2lzTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaHlwb3RoZXNlcyA9IGh5cG90aGVzaXNOb2Rlcy5tYXAoKGh5cG90aGVzZU5vZGUpID0+IHtcbiAgICBjb25zdCBoeXBvdGhlc2lzID0gaHlwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9KTtcblxuICByZXR1cm4gaHlwb3RoZXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2Rlcyhhc3N1bXB0aW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uTm9kZXMubWFwKChhc3N1bXB0aW9uTm9kZSkgPT4ge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uTm9kZXMubWFwKChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVzID0gZGVyaXZhdGlvbk5vZGUuZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcygpLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcE9yU3VicHJvb2ZOb2Rlcy5tYXAoKHN0ZXBPclN1YnByb29mTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mID0gc3RlcE9yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwc09yU3VicHJvb2ZzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVzID0gc3ViRGVyaXZhdGlvbk5vZGUuZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcygpLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcE9yU3VicHJvb2ZOb2Rlcy5tYXAoKHN0ZXBPclN1YnByb29mTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mID0gc3RlcE9yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwc09yU3VicHJvb2ZzO1xufVxuIl0sIm5hbWVzIjpbImFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMiLCJhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUiLCJheGlvbUZyb21BeGlvbU5vZGUiLCJheGlvbUZyb21TZWN0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbkZyb21SdWxlTm9kZSIsImNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlIiwiZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsImRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUiLCJkZXJpdmF0aW9uRnJvbVByb29mTm9kZSIsImVxdWFsaXR5RnJvbUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5RnJvbVN0YXRlbWVudE5vZGUiLCJlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUiLCJlcnJvckZyb21FcnJvck5vZGUiLCJmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21GcmFtZU5vZGUiLCJmcmFtZUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21KdWRnZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyIsImh5cG90aGVzZXNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwiaHlwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZSIsImlkZW50aWZpZXJGcm9tUGFyYW1ldGVyTm9kZSIsImlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlIiwianVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsImxhYmVsRnJvbUxhYmVsTm9kZSIsImxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJsYWJlbHNGcm9tTGFiZWxOb2RlcyIsImxhYmVsc0Zyb21SdWxlTm9kZSIsImxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJsZW1tYUZyb21MZW1tYU5vZGUiLCJsZW1tYUZyb21TZWN0aW9uTm9kZSIsIm1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlIiwibWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlIiwibWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIiwibmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibmFtZUZyb21QYXJhbmV0ZXJOb2RlIiwibmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwibmFtZUZyb21Qcm9wZXJ0eU5vZGUiLCJuYW1lRnJvbVR5cGVOb2RlIiwibmFtZUZyb21UeXBlUHJlZml4Tm9kZSIsIm5lZ2F0ZWRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIm5lZ2F0ZWRGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlIiwibm9taW5hbFR5cGVOYW1lRnJvbVR5cGVOb2RlIiwicGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByZWZpeE5hbWVGcm9tVHlwZU5vZGUiLCJwcmVtaXNlRnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZXNGcm9tUHJlbWlzZU5vZGVzIiwicHJlbWlzZXNGcm9tUnVsZU5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJwcm9vZkZyb21Qcm9vZk5vZGUiLCJwcm9vZkZyb21SdWxlTm9kZSIsInByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0aWVzRnJvbVR5cGVOb2RlIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvdmlzaW9uYWxGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcm92aXNpb25hbEZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsInByb3Zpc2lvbmFsRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcm92aXNpb25hbEZyb21UeXBlTm9kZSIsInJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21TdGVwTm9kZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJyaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwicnVsZUZyb21SdWxlTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUiLCJzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlIiwic2lnbmF0dXJlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2lnbmF0dXJlRnJvbUpTaWduYXR1cmVOb2RlIiwic2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZSIsInNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZSIsInN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZSIsInN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUiLCJzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZyb21TdGVwTm9kZSIsInN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN0ZXBGcm9tU3RlcE5vZGUiLCJzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUiLCJzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN1YnByb29mRnJvbVN1YnByb29mTm9kZSIsInN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZXNGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZXNGcm9tVHlwZU5vZGUiLCJzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlIiwic3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwic3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJ0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlIiwidGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwidGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlIiwidGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidGVybXNGcm9tRXF1aXZhbGVuY2VOb2RlIiwidGVybXNGcm9tU2lnbmF0dXJlTm9kZSIsInRlcm1zRnJvbVRlcm1Ob2RlcyIsInRoZW9yZW1Gcm9tU2VjdGlvbk5vZGUiLCJ0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlIiwidHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21Db25zdHJ1Y3Rvck5vZGUiLCJ0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbVRlcm1Ob2RlIiwidHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlc0Zyb21UeXBlc05vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwidHlwZU5vZGUiLCJjb250ZXh0IiwidHlwZSIsImJhc2VUeXBlIiwiYmFzZVR5cGVGcm9tTm90aGluZyIsIlR5cGUiLCJlbGVtZW50cyIsIm5vZGUiLCJuYW1lIiwicHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJub21pbmFsVHlwZU5hbWUiLCJ0eXBlU3RyaW5nIiwidHlwZVN0cmluZ0Zyb21Ob21pbmFsVHlwZU5hbWUiLCJzdHJpbmciLCJ0ZXJtTm9kZSIsIlRlcm0iLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwic3RlcE5vZGUiLCJTdGVwIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RlcCIsInJ1bGVOb2RlIiwiUnVsZSIsInByb29mIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwicnVsZVN0cmluZyIsInJ1bHNTdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwicnVsZSIsImxhYmVsTm9kZSIsIkxhYmVsIiwibWV0YXZhcmlhYmxlIiwibGFiZWwiLCJlcnJvck5vZGUiLCJFcnJvciIsImVycm9yIiwibGVtbWFOb2RlIiwiTGVtbWEiLCJ0b3BMZXZlbEFzc3NlcnRpb25Ob2RlIiwiZGVkdWN0aW9uIiwic3VwcG9zaXRpb25zIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsInRvcExldmVsQXNzc2VydGlvblN0cmluZyIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsImxlbW1hIiwiZnJhbWVOb2RlIiwiRnJhbWUiLCJhc3N1bXB0aW9ucyIsImZyYW1lIiwicHJvb2ZOb2RlIiwiUHJvb2YiLCJkZXJpdmF0aW9uIiwiYXhpb21Ob2RlIiwiQXhpb20iLCJheGlvbSIsInNlY3Rpb25Ob2RlIiwiaHlwb3RoZXNpc05vZGVzIiwiZ2V0SHlwb3RoZXNpc05vZGVzIiwidGhlb3JlbSIsImNvbmplY3R1cmUiLCJzZWN0aW9uU3RyaW5nIiwic2VjdGlvblN0cmluZ0Zyb21IeXBvdGhlc2VzVG9wTGV2ZWxBc3NlcnRpb24iLCJzZWN0aW9uIiwiU2VjdGlvbiIsInByZW1pc2VOb2RlIiwiUHJlbWlzZSIsInByb2NlZHVyZUNhbGwiLCJwcmVtaXNlIiwidGhlb3JlbU5vZGUiLCJUaGVvcmVtIiwibWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsInByb3BlcnR5Tm9kZSIsIlByb3BlcnR5IiwicHJvcGVydHlOYW1lIiwiZ2V0UHJvcGVydHlOYW1lIiwicHJvcGVydHkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsImlkZW50aWZpZXIiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsInZhcmlhYmxlIiwic3VicHJvb2ZOb2RlIiwiU3VicHJvb2YiLCJzdWJEZXJpdmF0aW9uIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZlN0cmluZ0Zyb21TdXBwb3NpdGlvbnNBbmRTdWJEZXJpdmF0aW9uIiwic3VicHJvb2YiLCJlcXVhbGl0eU5vZGUiLCJFcXVhbGl0eSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZXF1YWxpdHkiLCJkZWR1Y3Rpb25Ob2RlIiwiRGVkdWN0aW9uIiwic3RhdGVtZW50Tm9kZSIsIlN0YXRlbWVudCIsInNpZ25hdHVyZU5vZGUiLCJTaWduYXR1cmUiLCJ0ZXJtcyIsInJlZmVyZW5jZU5vZGUiLCJSZWZlcmVuY2UiLCJqdWRnZW1lbnROb2RlIiwiSnVkZ2VtZW50IiwiYXNzdW1wdGlvbiIsImp1ZGdlbWVudCIsIm1ldGFMZW1tYU5vZGUiLCJNZXRhTGVtbWEiLCJtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJtZXRhTGVtbWEiLCJwYXJhbWV0ZXJOb2RlIiwiUGFyYW1ldGVyIiwiZ2V0TmFtZSIsImdldElkZW50aWZpZXIiLCJwYXJhbWV0ZXIiLCJoeXBvdGhlc2VOb2RlIiwiSHlwb3Roc2lzIiwiaHlwb2h0ZXNpcyIsImNvbmplY3R1cmVOb2RlIiwiQ29uamVjdHVyZSIsImNvbWJpbmF0b3JOb2RlIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJjb25jbHVzaW9uTm9kZSIsIkNvbmNsdXNpb24iLCJhc3N1bXB0aW9uTm9kZSIsIkFzc3VtcHRpb24iLCJkZXJpdmF0aW9uTm9kZSIsIkRlcml2YXRpb24iLCJzdGVwc09yU3VicHJvb2ZzIiwidHlwZVByZWZpeE5vZGUiLCJUeXBlUHJlZml4IiwidGVybUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVGcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlUHJlZml4IiwiY29uc3RydWN0b3JOb2RlIiwiQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsInN1cHBvc2l0aW9uTm9kZSIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJlcXVpdmFsZW5jZU5vZGUiLCJFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlU3RyaW5nIiwiZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXMiLCJlcXVpdmFsZW5jZSIsIm1ldGF0aGVvcmVtTm9kZSIsIk1ldGF0ZWhvcmVtIiwibWV0YXRoZW9yZW0iLCJtZXRhdmFyaWFibGVOb2RlIiwiTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJzdWJEZXJpdmF0aW9uTm9kZSIsIlN1YkRlcml2YXRpb24iLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsIlR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJQcm9jZWR1cmVDYWxsIiwicGFyYW1ldGVycyIsInByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMiLCJzdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwT3JTdWJwcm9vZiIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiRGVmaW5lZEFzc2VydGlvbiIsIm5lZ2F0ZWQiLCJpc05lZ2F0ZWQiLCJkZWZpbmVkQXNzZXJ0aW9uIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiVGVybVN1YnN0aXR1dGlvbiIsInRhcmdldFRlcm0iLCJyZXBsYWNlbWVudFRlcm0iLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJ0YXJnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWUiLCJmcmFtZVN1YnN0aXR1dGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsIlByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJTdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJDb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwicHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZVJlZmVyZWVuY2UiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJnZXRUeXBlTm9kZSIsImlzUHJvdmlzaW9uYWwiLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsIlR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb21iaW5hdG9yRGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwiU2ltcGxlVHlwZURlY2xhcmF0aW9uIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInRhcmdldFJlZmVyZW5jZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInJlc29sdmVkIiwic3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJDb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0eXBlTmFtZSIsImdldFR5cGVOYW1lIiwiZ2V0UHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsImdldExhYmVsTm9kZXMiLCJwcmVtaXNlTm9kZXMiLCJnZXRQcmVtaXNlTm9kZXMiLCJnZXRBeGlvbU5vZGUiLCJnZXRMZW1tYU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJnZXRDb25jbHVzaW9uTm9kZSIsImdldFRoZW9yZW1Ob2RlIiwiZ2V0RnJhbWVOb2RlIiwidGVybU5vZGVzIiwiZ2V0QXNzdW1wdGlvbk5vZGVzIiwiZ2V0RGVyaXZhdGlvbk5vZGUiLCJvY25zdHJ1Y3Rvck5vZGUiLCJnZXRUZXJtTm9kZSIsImFzc3VtcHRpb25Ob2RlcyIsImxlZnRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsImdldFRlcm1Ob2RlcyIsIm1ldGF2YXJhaWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Q29uamVjdHVyZU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImdldEVxdWFsaXR5Tm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsImdldEp1ZGdlbWVudE5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSIsImlzU3RlcE5vZGUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImNvbmNsdXNpbm9Ob2RlIiwiaHlwb3RoZXNpc05vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJ2aWF0aW9uIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibGl0ZXJhbGx5IiwicmVmZXJlbmNlU3RyaW5nIiwiaW5zdGFudGlhdGVSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VHlwZUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSIsImlzU3VicHJvb2ZOb2RlIiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRUZXJtTm9kZSIsImdldFRhcmdldFRlcm1Ob2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50Tm9kZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsInlwb3RoZXNlcyIsInNhc2lzZmllc0Fzc2VydGlvbk5vZGUiLCJ0YXJnZXRGcmFtZU5vZGUiLCJnZXRUYXJnZXRGcmFtZU5vZGUiLCJpc1Jlc29sdmVkIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50VGVybU5vZGUiLCJnZXRSZXBsYWNlbWVudFRlcm1Ob2RlIiwidHlwZXNOb2RlIiwiZ2V0VHlwZXNOb2RlIiwidHlwZXMiLCJnZXRUeXBlUHJlZml4Tm9kZSIsImdldENvbWJpbmF0b3JOb2RlIiwiZ2V0TWV0YVR5cGVOb2RlIiwicmVwbGFjZW1lbnRGcmFtZU5vZGUiLCJnZXRSZXBsYWNlbWVudEZyYW1lTm9kZSIsImdldFByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZ2V0Q29uc3RydWN0b3JOb2RlIiwidGFyZ2V0UmVmZXJlbmNlTm9kZSIsImdldFRhcmdldFJlZmVyZW5jZU5vZGUiLCJ0YXJnZXRSZWZlcm5lY2UiLCJ0YXJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSIsImdldFJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsIm1hcCIsInR5cGVOb2RlcyIsImdldFR5cGVOb2RlcyIsImh5cG90aGVzaXMiLCJzdGVwT3JTdWJwcm9vZk5vZGVzIiwiZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBc2JnQkE7ZUFBQUE7O1FBb3RCQUM7ZUFBQUE7O1FBbXhCQUM7ZUFBQUE7O1FBOTZCQUM7ZUFBQUE7O1FBMzFCQUM7ZUFBQUE7O1FBMHNCQUM7ZUFBQUE7O1FBeEhBQztlQUFBQTs7UUFtK0JBQztlQUFBQTs7UUExeUNBQztlQUFBQTs7UUFpWUFDO2VBQUFBOztRQXZYQUM7ZUFBQUE7O1FBMmdCQUM7ZUFBQUE7O1FBdGlCQUM7ZUFBQUE7O1FBNHBCQUM7ZUFBQUE7O1FBdFJBQztlQUFBQTs7UUFvL0JBQztlQUFBQTs7UUF6eUNBQztlQUFBQTs7UUFvTUFDO2VBQUFBOztRQWc2QkFDO2VBQUFBOztRQTN5Q0FDO2VBQUFBOztRQXd0Q0FDO2VBQUFBOztRQStLQUM7ZUFBQUE7O1FBMWtDQUM7ZUFBQUE7O1FBKzJCQUM7ZUFBQUE7O1FBaGdDQUM7ZUFBQUE7O1FBdWhCQUM7ZUFBQUE7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