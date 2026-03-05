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
    const { Constructor } = _elements.default, node = constructorNode, string = context.nodeAsString(node), term = termFromConstructorNode(constructorNode, context), constructor = new Constructor(context, string, node, term);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zLFxuICAgICAgICAgdHlwZVN0cmluZ0Zyb21Ob21pbmFsVHlwZU5hbWUsXG4gICAgICAgICBydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbixcbiAgICAgICAgIHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uLFxuICAgICAgICAgc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbixcbiAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyxcbiAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbixcbiAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZSA9IGJhc2VUeXBlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBub2RlID0gdHlwZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHByZWZpeE5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZVN0cmluZ0Zyb21Ob21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICBzdHJpbmcgPSB0eXBlU3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3RlcCA9IG5ldyBTdGVwKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbik7XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUnVsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBydWxlU3RyaW5nID0gcnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiksXG4gICAgICAgIG5vZGUgPSBydWxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBydWxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb29mLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICByZXR1cm4gcnVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVycm9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVycm9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hRnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBsZW1tYU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gbGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgbGVtbWEgPSBuZXcgTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBmcmFtZSA9IG5ldyBGcmFtZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9vZk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9vZiA9IG5ldyBQcm9vZihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGRlcml2YXRpb24pO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBeGlvbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBheGlvbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gYXhpb21Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgYXhpb20gPSBuZXcgQXhpb20oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gYXhpb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzaXNOb2RlcyA9IHNlY3Rpb25Ob2RlLmdldEh5cG90aGVzaXNOb2RlcygpLFxuICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXhpb20gPSBheGlvbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlbW1hID0gbGVtbWFGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2VjdGlvblN0cmluZyA9IHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uKGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSksXG4gICAgICAgIG5vZGUgPSBzZWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHNlY3Rpb25TdHJpbmc7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSk7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcmVtaXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gcHJlbWlzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gdGhlb3JlbU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICB0aGVvcmVtID0gbmV3IFRoZW9yZW0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5Tm9kZS5nZXRQcm9wZXJ0eU5hbWUoKSxcbiAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IHByb3BlcnR5TmFtZTsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbm9taW5hbFR5cGVOYW1lKTtcblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW107XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mTm9kZSwgLy8vXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbihzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdWJwcm9vZlN0cmluZzsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mID0gbmV3IFN1YnByb29mKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKTtcblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXF1YWxpdHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXF1YWxpdHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBkZWR1Y3Rpb24gPSBuZXcgRGVkdWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpZ25hdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudEZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBKdWRnZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKTtcblxuICByZXR1cm4ganVkZ2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGFMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YUxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBub2RlID0gbWV0YUxlbW1hTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIG1ldGFMZW1tYSA9IG5ldyBNZXRhTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICByZXR1cm4gbWV0YUxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldE5hbWUoKSxcbiAgICAgICAgaWRlbnRpZmllciA9IHBhcmFtZXRlck5vZGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBpZGVudGlmaWVyKTtcblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaWduYXR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2lnbmF0dXJlTm9kZSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBIeXBvdGhzaXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gaHlwb3RoZXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgaHlwb2h0ZXNpcyA9IG5ldyBIeXBvdGhzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBoeXBvaHRlc2lzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gY29uamVjdHVyZU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gY29uamVjdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBjb25qZWN0dXJlID0gbmV3IENvbmplY3R1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25jbHVzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhc3N1bXB0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZXJpdmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlcml2YXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBkZXJpdmF0aW9uID0gbmV3IERlcml2YXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVQcmVmaXggPSBuZXcgVHlwZVByZWZpeChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtKTtcblxuICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VwcG9zaXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVxdWl2YWxlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVxdWl2YWxlbmNlTm9kZSwgLy8vXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICBzdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZzsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF0ZWhvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUgPSBtZXRhdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gbWV0YXRoZW9yZW1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG51bGwsXG4gICAgICAgIG1ldGF0aGVvcmVtID0gbmV3IE1ldGF0ZWhvcmVtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBtZXRhVHlwZSA9IG51bGwsXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJEZXJpdmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YkRlcml2YXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN1YkRlcml2YXRpb24gPSBuZXcgU3ViRGVyaXZhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0ZXBzT3JTdWJwcm9vZnMpO1xuXG4gIHJldHVybiBzdWJEZXJpdmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZUFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbiA9IG5ldyBUeXBlQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhwcm9jZWR1cmVSZWZlcmVuY2UsIHBhcmFtZXRlcnMpLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nOyAvLy9cblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcE9yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2YgPSBzdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcE9yU3VicHJvb2YgPSAoc3RlcCB8fCBzdWJwcm9vZik7XG5cbiAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlZmluZWRBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5pc05lZ2F0ZWQoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlSZWxhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gbmV3IFByb3BlcnR5UmVsYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IHRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRUZXJtLCByZXBsYWNlbWVudFRlcm0pO1xuXG4gIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGFyZ2V0RnJhbWUgPSB0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0RnJhbWUsIHJlcGxhY2VtZW50RnJhbWUpO1xuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IG5ldyBQcm9wZXJ0eUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuXG4gIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJwcm9vZkFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29udGFpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG5ldyBDb250YWluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNhdGlzZmllc0Fzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbmV3IFNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHNpZ25hdHVyZSwgcmVmZXJlbmNlKTtcblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZVJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZVJlZmVyZWVuY2UgPSBuZXcgUHJvY2VkdXJlUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZWVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICBwcm92aXNpb25hbCA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgdmFyaWFibGUsIHByb3Zpc2lvbmFsKTtcblxuICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4RGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLCAgLy8vXG4gICAgICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbiA9IG5ldyBUeXBlUHJlZml4RGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlUHJlZml4KTtcblxuICByZXR1cm4gdHlwZVByZWZpeERlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbWJpbmF0b3JEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb21iaW5hdG9yRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBjb21iaW5hdG9yKTtcblxuICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNpbXBsZVR5cGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uID0gbmV3IFNpbXBsZVR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHN1cGVyVHlwZXMsIHByb3Zpc2lvbmFsKTtcblxuICByZXR1cm4gc2ltcGxlVHlwZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0YXJnZXRSZWZlcmVuY2UgPSB0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVwbGFjZW1lbnRSZWZlcmVuY2UgPSByZXBsYWNlbWVudFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBuZXcgUmVmZXJlbmNlU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0UmVmZXJlbmNlLCByZXBsYWNlbWVudFJlZmVyZW5jZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVzb2x2ZWQgPSByZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gdGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlc29sdmVkLCBzdWJzdGl0dXRpb24sIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgcHJvdmlzaW9uYWwsIGNvbnN0cnVjdG9yKTtcblxuICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBuZXcgQ29tcGxleFR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHN1cGVyVHlwZXMsIHByb3Zpc2lvbmFsKTtcblxuICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhVHlwZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZU5hbWUoKSxcbiAgICAgICAgbmFtZSA9IHR5cGVOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSBydWxlTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGVzID0gcnVsZU5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlbWlzZU5vZGVzID0gcnVsZU5vZGUuZ2V0UHJlbWlzZU5vZGVzKCksXG4gICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tUHJlbWlzZU5vZGVzKHByZW1pc2VOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGF4aW9tID0gbnVsbDtcblxuICBjb25zdCBheGlvbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRBeGlvbU5vZGUoKTtcblxuICBpZiAoYXhpb21Ob2RlICE9PSBudWxsKSB7XG4gICAgYXhpb20gPSBheGlvbUZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBheGlvbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsZW1tYSA9IG51bGw7XG5cbiAgY29uc3QgbGVtbWFOb2RlID0gc2VjdGlvbk5vZGUuZ2V0TGVtbWFOb2RlKCk7XG5cbiAgaWYgKGxlbW1hTm9kZSAhPT0gbnVsbCkge1xuICAgIGxlbW1hID0gbGVtbWFGcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHByb3BlcnR5Tm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0ZXBOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gc3RlcE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChyZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOb2RlLmdldFR5cGVQcmVmaXhOYW1lKCksXG4gICAgICAgIG5hbWUgPSB0eXBlUHJlZml4TmFtZTsgIC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVzID0gbnVsbDtcblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydGllcyA9IG51bGw7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKSxcbiAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIHByZWZpeE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbmNsdXNpb25Ob2RlID0gcnVsZU5vZGUuZ2V0Q29uY2x1c2lvbk5vZGUoKSxcbiAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGhlb3JlbSA9IG51bGw7XG5cbiAgY29uc3QgdGhlb3JlbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRUaGVvcmVtTm9kZSgpO1xuXG4gIGlmICh0aGVvcmVtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRoZW9yZW0gPSB0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZyYW1lTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IHNpZ25hdHVyZU5vZGUuZ2V0QXNzdW1wdGlvbk5vZGVzKCksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvdmlzaW9uYWwgPSBudWxsO1xuXG4gIHJldHVybiBwcm92aXNpb25hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkZXJpdmF0aW9uTm9kZSA9IHByb29mTm9kZS5nZXREZXJpdmF0aW9uTm9kZSgpLFxuICAgICAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGRlcml2YXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShvY25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBvY25zdHJ1Y3Rvck5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZXMgPSBmcmFtZU5vZGUuZ2V0QXNzdW1wdGlvbk5vZGVzKCksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tQXNzdW1wdGlvbk5vZGVzKGFzc3VtcHRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZXMgPSBlcXVpdmFsZW5jZU5vZGUuZ2V0VGVybU5vZGVzKCksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmFpYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICBuYW1lID0gbWV0YXZhcmFpYmxlTmFtZTsgIC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbGFiZWxOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbmplY3R1cmUgPSBudWxsO1xuXG4gIGNvbnN0IGNvbmplY3R1cmVOb2RlID0gc2VjdGlvbk5vZGUuZ2V0Q29uamVjdHVyZU5vZGUoKTtcblxuICBpZiAoY29uamVjdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICBjb25zdCBlcXVhbGl0eU5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEVxdWFsaXR5Tm9kZSgpO1xuXG4gIGlmIChlcXVhbGl0eU5vZGUgIT09IG51bGwpIHtcbiAgICBlcXVhbGl0eSA9IGVxdWFsaXR5RnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGVxdWFsaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBkZWR1Y3Rpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGp1ZGdlbWVudCA9IG51bGw7XG5cbiAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0SnVkZ2VtZW50Tm9kZSgpO1xuXG4gIGlmIChqdWRnZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4ganVkZ2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwID0gbnVsbDtcblxuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZS5pc1N0ZXBOb2RlKCk7XG5cbiAgaWYgKHN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlKSB7XG4gICAgY29uc3Qgc3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGU7ICAvLy9cblxuICAgIHN0ZXAgPSBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbFR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gIHJldHVybiBub21pbmFsVHlwZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0QXNzdW1wdGlvbk5vZGUoKSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgaWRlbnRpZmllciA9IHBhcmFtZXRlck5vZGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW5vTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29uY2x1c2lub05vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQ7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gaHlwb3RoZXNpc05vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25Ob2RlcyA9IHN1YnByb29mTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDsgLy8vXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1YkRlcml2YXRpb25Ob2RlID0gc3VicHJvb2ZOb2RlLmdldFN1YkRlcml2YXRpb25Ob2RlKCksXG4gICAgICAgIHN1YkRlcnZpYXRpb24gPSBzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3ViRGVydmlhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIHJldHVybiBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSBtZXRhdmFyaWFibGVTdHJpbmcsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHJlZmVyZW5jZVN0cmluZywgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RlcE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUeXBlQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgY29uc3QgcHJvb2ZOb2RlID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdWJwcm9vZk9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZiA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSA9IHN1YnByb29mT3JTdWJwcm9vZk5vZGUuaXNTdWJwcm9vZk5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHN1YnByb29mT3JTdWJwcm9vZk5vZGU7ICAvLy9cblxuICAgIHN1YnByb29mID0gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlck5vZGVzID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZXMgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBzdXBwb3NpdGlvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lZ2F0ZWQgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldERlZmluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuZWdhdGVkID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOb2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGFyZ2V0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0YXJnZXRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlZHVjdGlvbk5vZGUgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldERlZHVjdGlvbk5vZGUoKSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2lnbmF0dXJlID0gbnVsbDtcblxuICBjb25zdCBzaWduYXR1cmVOb2RlID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCk7XG5cbiAgaWYgKHNpZ25hdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb29mTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldFByb29mTm9kZSgpLFxuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvcGVydHlBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7MFxuICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb250YWluZWRBc3NlcnRpb24gPSBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlcygpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyhzdGF0ZW1lbnROb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHlwb3RoZXNlcyA9IFtdO1xuXG4gIHJldHVybiB5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2FzaXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzaWduYXR1cmVOb2RlID0gc2FzaXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21KU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhc2lzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHNhc2lzZmllc0Fzc2VydGlvbk5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIHRhcmdldEZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKHRhcmdldEZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRhcmdldEZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXNvbHZlZCA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuaXNSZXNvbHZlZCgpO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlZHVjdGlvbk5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFByb2NlZHVyZVJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRUZXJtTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJlcGxhY2VtZW50VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VwZXJUeXBlcyA9IFtdO1xuXG4gIGNvbnN0IHR5cGVzTm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZXNOb2RlKCk7XG5cbiAgaWYgKHR5cGVzTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVzID0gdHlwZXNGcm9tVHlwZXNOb2RlKHR5cGVzTm9kZSwgY29udGV4dCk7XG5cbiAgICBzdXBlclR5cGVzID0gdHlwZXM7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlUHJlZml4Tm9kZSA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZVByZWZpeE5vZGUoKSxcbiAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgY29tYmluYXRvck5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLmdldENvbWJpbmF0b3JOb2RlKCksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldE1ldGFUeXBlTm9kZSgpLFxuICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3Zpc2lvbmFsRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm92aXNpb25hbCA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpO1xuXG4gIHJldHVybiBwcm92aXNpb25hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1cGVyVHlwZXMgPSBbXTtcblxuICBjb25zdCB0eXBlc05vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlc05vZGUoKTtcblxuICBpZiAodHlwZXNOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZXMgPSB0eXBlc0Zyb21UeXBlc05vZGUodHlwZXNOb2RlLCBjb250ZXh0KTtcblxuICAgIHN1cGVyVHlwZXMgPSB0eXBlczsgLy8vXG4gIH1cblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudEZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudEZyYW1lTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKHJlcGxhY2VtZW50RnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZS5nZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IChmcmFtZVN1YnN0aXR1dGlvbiB8fCB0ZXJtU3Vic3RpdHV0aW9uKTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgY29uc3RydWN0b3JOb2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0Q29uc3RydWN0b3JOb2RlKCksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvdmlzaW9uYWwgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvdmlzaW9uYWwgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0UmVmZXJuZWNlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUodGFyZ2V0UmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRhcmdldFJlZmVybmVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSh0YXJnZXRTdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VtZW50UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50UmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUocmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHtcbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tVHlwZXNOb2RlKHR5cGVzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTm9kZXMgPSB0eXBlc05vZGUuZ2V0VHlwZU5vZGVzKCksXG4gICAgICAgIHR5cGVzID0gdHlwZU5vZGVzLm1hcCgodHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlbWlzZXMgPSBwcmVtaXNlTm9kZXMubWFwKChwcmVtaXNlTm9kZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2UgPSBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzKHN0YXRlbWVudE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2VzID0gaHlwb3RoZXNpc05vZGVzLm1hcCgoaHlwb3RoZXNlTm9kZSkgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXMgPSBoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tQXNzdW1wdGlvbk5vZGVzKGFzc3VtcHRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25Ob2Rlcy5tYXAoKGFzc3VtcHRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZXMgPSBkZXJpdmF0aW9uTm9kZS5nZXRTdGVwT3JTdWJwcm9vZk5vZGVzKCksXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwT3JTdWJwcm9vZk5vZGVzLm1hcCgoc3RlcE9yU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBzdGVwT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZXMgPSBzdWJEZXJpdmF0aW9uTm9kZS5nZXRTdGVwT3JTdWJwcm9vZk5vZGVzKCksXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwT3JTdWJwcm9vZk5vZGVzLm1hcCgoc3RlcE9yU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBzdGVwT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG4iXSwibmFtZXMiOlsiYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZSIsImFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2RlcyIsImFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZSIsImF4aW9tRnJvbUF4aW9tTm9kZSIsImF4aW9tRnJvbVNlY3Rpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uRnJvbVJ1bGVOb2RlIiwiY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUiLCJkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwiZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZSIsImRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlIiwiZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZSIsImVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZSIsImVycm9yRnJvbUVycm9yTm9kZSIsImZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImZyYW1lRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzIiwiaHlwb3RoZXNlc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlIiwiaWRlbnRpZmllckZyb21QYXJhbWV0ZXJOb2RlIiwiaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUiLCJqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsImxhYmVsc0Zyb21MYWJlbE5vZGVzIiwibGFiZWxzRnJvbVJ1bGVOb2RlIiwibGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsImxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsImxlbW1hRnJvbUxlbW1hTm9kZSIsImxlbW1hRnJvbVNlY3Rpb25Ob2RlIiwibWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdGhlb3JlbUZyb21NZXRhdGhlb3JlbU5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVByb3BlcnR5Tm9kZSIsIm5hbWVGcm9tVHlwZU5vZGUiLCJuYW1lRnJvbVR5cGVQcmVmaXhOb2RlIiwibmVnYXRlZEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwibmVnYXRlZEZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJub21pbmFsVHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJlZml4TmFtZUZyb21UeXBlTm9kZSIsInByZW1pc2VGcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlc0Zyb21QcmVtaXNlTm9kZXMiLCJwcmVtaXNlc0Zyb21SdWxlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUiLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInByb29mRnJvbVByb29mTm9kZSIsInByb29mRnJvbVJ1bGVOb2RlIiwicHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwicHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsInByb3BlcnRpZXNGcm9tVHlwZU5vZGUiLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlOb2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm92aXNpb25hbEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3Zpc2lvbmFsRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwicHJvdmlzaW9uYWxGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3Zpc2lvbmFsRnJvbVR5cGVOb2RlIiwicmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbVN0ZXBOb2RlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwicmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJydWxlRnJvbVJ1bGVOb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZSIsInNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUiLCJzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJzaWduYXR1cmVGcm9tSlNpZ25hdHVyZU5vZGUiLCJzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIiwic2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlIiwic3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlIiwic3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlIiwic3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZSIsInN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZSIsInN0YXRlbWVudEZyb21QcmVtaXNlTm9kZSIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50RnJvbVN0ZXBOb2RlIiwic3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyIsInN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcE9yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlIiwic3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlc0Zyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlc0Zyb21UeXBlTm9kZSIsInN1cHBvc2l0aW9uRnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsInRhcmdldEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidGVybUZyb21Db25zdHJ1Y3Rvck5vZGUiLCJ0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwidGVybUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUiLCJ0ZXJtc0Zyb21TaWduYXR1cmVOb2RlIiwidGVybXNGcm9tVGVybU5vZGVzIiwidGhlb3JlbUZyb21TZWN0aW9uTm9kZSIsInRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUiLCJ0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJ0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbVRlcm1Ob2RlIiwidHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlc0Zyb21UeXBlc05vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwidHlwZU5vZGUiLCJjb250ZXh0IiwidHlwZSIsImJhc2VUeXBlIiwiYmFzZVR5cGVGcm9tTm90aGluZyIsIlR5cGUiLCJlbGVtZW50cyIsIm5vZGUiLCJuYW1lIiwicHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJub21pbmFsVHlwZU5hbWUiLCJ0eXBlU3RyaW5nIiwidHlwZVN0cmluZ0Zyb21Ob21pbmFsVHlwZU5hbWUiLCJzdHJpbmciLCJ0ZXJtTm9kZSIsIlRlcm0iLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwic3RlcE5vZGUiLCJTdGVwIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RlcCIsInJ1bGVOb2RlIiwiUnVsZSIsInByb29mIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwicnVsZVN0cmluZyIsInJ1bHNTdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwicnVsZSIsImxhYmVsTm9kZSIsIkxhYmVsIiwibWV0YXZhcmlhYmxlIiwibGFiZWwiLCJlcnJvck5vZGUiLCJFcnJvciIsImVycm9yIiwibGVtbWFOb2RlIiwiTGVtbWEiLCJ0b3BMZXZlbEFzc3NlcnRpb25Ob2RlIiwiZGVkdWN0aW9uIiwic3VwcG9zaXRpb25zIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsInRvcExldmVsQXNzc2VydGlvblN0cmluZyIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsImxlbW1hIiwiZnJhbWVOb2RlIiwiRnJhbWUiLCJhc3N1bXB0aW9ucyIsImZyYW1lIiwicHJvb2ZOb2RlIiwiUHJvb2YiLCJkZXJpdmF0aW9uIiwiYXhpb21Ob2RlIiwiQXhpb20iLCJheGlvbSIsInNlY3Rpb25Ob2RlIiwiaHlwb3RoZXNpc05vZGVzIiwiZ2V0SHlwb3RoZXNpc05vZGVzIiwidGhlb3JlbSIsImNvbmplY3R1cmUiLCJzZWN0aW9uU3RyaW5nIiwic2VjdGlvblN0cmluZ0Zyb21IeXBvdGhlc2VzVG9wTGV2ZWxBc3NlcnRpb24iLCJzZWN0aW9uIiwiU2VjdGlvbiIsInByZW1pc2VOb2RlIiwiUHJlbWlzZSIsInByb2NlZHVyZUNhbGwiLCJwcmVtaXNlIiwidGhlb3JlbU5vZGUiLCJUaGVvcmVtIiwibWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsInByb3BlcnR5Tm9kZSIsIlByb3BlcnR5IiwicHJvcGVydHlOYW1lIiwiZ2V0UHJvcGVydHlOYW1lIiwicHJvcGVydHkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsImlkZW50aWZpZXIiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsInZhcmlhYmxlIiwic3VicHJvb2ZOb2RlIiwiU3VicHJvb2YiLCJzdWJEZXJpdmF0aW9uIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZlN0cmluZ0Zyb21TdXBwb3NpdGlvbnNBbmRTdWJEZXJpdmF0aW9uIiwic3VicHJvb2YiLCJlcXVhbGl0eU5vZGUiLCJFcXVhbGl0eSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZXF1YWxpdHkiLCJkZWR1Y3Rpb25Ob2RlIiwiRGVkdWN0aW9uIiwic3RhdGVtZW50Tm9kZSIsIlN0YXRlbWVudCIsInNpZ25hdHVyZU5vZGUiLCJTaWduYXR1cmUiLCJ0ZXJtcyIsInJlZmVyZW5jZU5vZGUiLCJSZWZlcmVuY2UiLCJqdWRnZW1lbnROb2RlIiwiSnVkZ2VtZW50IiwiYXNzdW1wdGlvbiIsImp1ZGdlbWVudCIsIm1ldGFMZW1tYU5vZGUiLCJNZXRhTGVtbWEiLCJtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJtZXRhTGVtbWEiLCJwYXJhbWV0ZXJOb2RlIiwiUGFyYW1ldGVyIiwiZ2V0TmFtZSIsImdldElkZW50aWZpZXIiLCJwYXJhbWV0ZXIiLCJoeXBvdGhlc2VOb2RlIiwiSHlwb3Roc2lzIiwiaHlwb2h0ZXNpcyIsImNvbmplY3R1cmVOb2RlIiwiQ29uamVjdHVyZSIsImNvbWJpbmF0b3JOb2RlIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJjb25jbHVzaW9uTm9kZSIsIkNvbmNsdXNpb24iLCJhc3N1bXB0aW9uTm9kZSIsIkFzc3VtcHRpb24iLCJkZXJpdmF0aW9uTm9kZSIsIkRlcml2YXRpb24iLCJzdGVwc09yU3VicHJvb2ZzIiwidHlwZVByZWZpeE5vZGUiLCJUeXBlUHJlZml4IiwidGVybUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVGcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlUHJlZml4IiwiY29uc3RydWN0b3JOb2RlIiwiQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsInN1cHBvc2l0aW9uTm9kZSIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJlcXVpdmFsZW5jZU5vZGUiLCJFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlU3RyaW5nIiwiZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXMiLCJlcXVpdmFsZW5jZSIsIm1ldGF0aGVvcmVtTm9kZSIsIk1ldGF0ZWhvcmVtIiwibWV0YXRoZW9yZW0iLCJtZXRhdmFyaWFibGVOb2RlIiwiTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJzdWJEZXJpdmF0aW9uTm9kZSIsIlN1YkRlcml2YXRpb24iLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsIlR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJQcm9jZWR1cmVDYWxsIiwicGFyYW1ldGVycyIsInByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMiLCJzdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwT3JTdWJwcm9vZiIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiRGVmaW5lZEFzc2VydGlvbiIsIm5lZ2F0ZWQiLCJpc05lZ2F0ZWQiLCJkZWZpbmVkQXNzZXJ0aW9uIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiVGVybVN1YnN0aXR1dGlvbiIsInRhcmdldFRlcm0iLCJyZXBsYWNlbWVudFRlcm0iLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJ0YXJnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWUiLCJmcmFtZVN1YnN0aXR1dGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsIlByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJTdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJDb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwicHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZVJlZmVyZWVuY2UiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJnZXRUeXBlTm9kZSIsImlzUHJvdmlzaW9uYWwiLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsIlR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb21iaW5hdG9yRGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwiU2ltcGxlVHlwZURlY2xhcmF0aW9uIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInRhcmdldFJlZmVyZW5jZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInJlc29sdmVkIiwic3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJDb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0eXBlTmFtZSIsImdldFR5cGVOYW1lIiwiZ2V0UHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsImdldExhYmVsTm9kZXMiLCJwcmVtaXNlTm9kZXMiLCJnZXRQcmVtaXNlTm9kZXMiLCJnZXRBeGlvbU5vZGUiLCJnZXRMZW1tYU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJnZXRDb25jbHVzaW9uTm9kZSIsImdldFRoZW9yZW1Ob2RlIiwiZ2V0RnJhbWVOb2RlIiwidGVybU5vZGVzIiwiZ2V0QXNzdW1wdGlvbk5vZGVzIiwiZ2V0RGVyaXZhdGlvbk5vZGUiLCJvY25zdHJ1Y3Rvck5vZGUiLCJnZXRUZXJtTm9kZSIsImFzc3VtcHRpb25Ob2RlcyIsImxlZnRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsImdldFRlcm1Ob2RlcyIsIm1ldGF2YXJhaWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Q29uamVjdHVyZU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImdldEVxdWFsaXR5Tm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsImdldEp1ZGdlbWVudE5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSIsImlzU3RlcE5vZGUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImNvbmNsdXNpbm9Ob2RlIiwiaHlwb3RoZXNpc05vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJ2aWF0aW9uIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibGl0ZXJhbGx5IiwicmVmZXJlbmNlU3RyaW5nIiwiaW5zdGFudGlhdGVSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VHlwZUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSIsImlzU3VicHJvb2ZOb2RlIiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRUZXJtTm9kZSIsImdldFRhcmdldFRlcm1Ob2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50Tm9kZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsInlwb3RoZXNlcyIsInNhc2lzZmllc0Fzc2VydGlvbk5vZGUiLCJ0YXJnZXRGcmFtZU5vZGUiLCJnZXRUYXJnZXRGcmFtZU5vZGUiLCJpc1Jlc29sdmVkIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50VGVybU5vZGUiLCJnZXRSZXBsYWNlbWVudFRlcm1Ob2RlIiwidHlwZXNOb2RlIiwiZ2V0VHlwZXNOb2RlIiwidHlwZXMiLCJnZXRUeXBlUHJlZml4Tm9kZSIsImdldENvbWJpbmF0b3JOb2RlIiwiZ2V0TWV0YVR5cGVOb2RlIiwicmVwbGFjZW1lbnRGcmFtZU5vZGUiLCJnZXRSZXBsYWNlbWVudEZyYW1lTm9kZSIsImdldFByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZ2V0Q29uc3RydWN0b3JOb2RlIiwidGFyZ2V0UmVmZXJlbmNlTm9kZSIsImdldFRhcmdldFJlZmVyZW5jZU5vZGUiLCJ0YXJnZXRSZWZlcm5lY2UiLCJ0YXJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSIsImdldFJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsIm1hcCIsInR5cGVOb2RlcyIsImdldFR5cGVOb2RlcyIsImh5cG90aGVzaXMiLCJzdGVwT3JTdWJwcm9vZk5vZGVzIiwiZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBc2JnQkE7ZUFBQUE7O1FBNnNCQUM7ZUFBQUE7O1FBbXhCQUM7ZUFBQUE7O1FBOTZCQUM7ZUFBQUE7O1FBcDFCQUM7ZUFBQUE7O1FBeXNCQUM7ZUFBQUE7O1FBeEhBQztlQUFBQTs7UUE2OUJBQztlQUFBQTs7UUFueUNBQztlQUFBQTs7UUFnWUFDO2VBQUFBOztRQXRYQUM7ZUFBQUE7O1FBMGdCQUM7ZUFBQUE7O1FBcmlCQUM7ZUFBQUE7O1FBcXBCQUM7ZUFBQUE7O1FBaFJBQztlQUFBQTs7UUE4K0JBQztlQUFBQTs7UUFseUNBQztlQUFBQTs7UUFtTUFDO2VBQUFBOztRQTA1QkFDO2VBQUFBOztRQXB5Q0FDO2VBQUFBOztRQWl0Q0FDO2VBQUFBOztRQStLQUM7ZUFBQUE7O1FBcGtDQUM7ZUFBQUE7O1FBeTJCQUM7ZUFBQUE7O1FBei9CQUM7ZUFBQUE7O1FBc2hCQUM7ZUFBQUE7O1FBaHRCQUM7ZUFBQUE7O1FBNHlCQUM7ZUFBQUE7O1FBL2pCQUM7ZUFBQUE7O1FBeFpBQztlQUFBQTs7UUFrekNBQztlQUFBQTs7UUExR0FDO2VBQUFBOztRQTlxQ0FDO2VBQUFBOztRQXl0Q0FDO2VBQUFBOztRQTVZQUM7ZUFBQUE7O1FBMVVBQztlQUFBQTs7UUE4NEJBQztlQUFBQTs7UUEyU0FDO2VBQUFBOztRQXVGQUM7ZUFBQUE7O1FBNVJBQztlQUFBQTs7UUEvdUNBQztlQUFBQTs7UUF5d0JBQztlQUFBQTs7UUExREFDO2VBQUFBOztRQXh3QkFDO2VBQUFBOztRQTJ4QkFDO2VBQUFBOztRQTlnQ0FDO2VBQUFBOztRQTg2Q0FDO2VBQUFBOztRQWlXQUM7ZUFBQUE7O1FBcmhDQUM7ZUFBQUE7O1FBOGtCQUM7ZUFBQUE7O1FBbGFBQztlQUFBQTs7UUFuNUJBQztlQUFBQTs7UUFpd0JBQztlQUFBQTs7UUFuaEJBQztlQUFBQTs7UUFoSUFDO2VBQUFBOztRQW0vQ0FDO2VBQUFBOztRQXBzQ0FDO2VBQUFBOztRQXNTQUM7ZUFBQUE7O1FBcU9BQztlQUFBQTs7UUFZQUM7ZUFBQUE7O1FBd3ZCQUM7ZUFBQUE7O1FBL3ZDQUM7ZUFBQUE7O1FBa3ZCQUM7ZUFBQUE7O1FBWkFDO2VBQUFBOztRQWxQQUM7ZUFBQUE7O1FBdEhBQztlQUFBQTs7UUFpZkFDO2VBQUFBOztRQS9nQkFDO2VBQUFBOztRQS9EQUM7ZUFBQUE7O1FBbUdBQztlQUFBQTs7UUE0akJBQztlQUFBQTs7UUFyQ0FDO2VBQUFBOztRQW5UQUM7ZUFBQUE7O1FBdnhCQUM7ZUFBQUE7O1FBNGhEQUM7ZUFBQUE7O1FBeGZBQztlQUFBQTs7UUE5ZEFDO2VBQUFBOztRQXJ2QkFDO2VBQUFBOztRQXVyREFDO2VBQUFBOztRQXhoQ0FDO2VBQUFBOztRQTRXQUM7ZUFBQUE7O1FBcm9CQUM7ZUFBQUE7O1FBdTJCQUM7ZUFBQUE7O1FBMlBBQztlQUFBQTs7UUEvOUJBQztlQUFBQTs7UUF6akJBQztlQUFBQTs7UUE0ckJBQztlQUFBQTs7UUEyaEJBQztlQUFBQTs7UUE4SkFDO2VBQUFBOztRQXRsQkFDO2VBQUFBOztRQS9SQUM7ZUFBQUE7O1FBKzRCQUM7ZUFBQUE7O1FBenpDQUM7ZUFBQUE7O1FBeXRDQUM7ZUFBQUE7O1FBcVRBQztlQUFBQTs7UUF4b0NBQztlQUFBQTs7UUEycUNBQztlQUFBQTs7UUFOQUM7ZUFBQUE7O1FBeERBQztlQUFBQTs7UUE1dkJBQztlQUFBQTs7UUE0TEFDO2VBQUFBOztRQTZlQUM7ZUFBQUE7O1FBL1dBQztlQUFBQTs7UUFoOUJBQztlQUFBQTs7UUEyeUNBQztlQUFBQTs7UUFsdUJBQztlQUFBQTs7UUE1SUFDO2VBQUFBOztRQXkrQkFDO2VBQUFBOztRQTZGQUM7ZUFBQUE7O1FBT0FDO2VBQUFBOztRQWxLQUM7ZUFBQUE7O1FBcEJBQztlQUFBQTs7UUFubUJBQztlQUFBQTs7UUF4K0JBQztlQUFBQTs7UUEybUJBQztlQUFBQTs7UUFzNUJBQztlQUFBQTs7UUE5UUFDO2VBQUFBOztRQXJwQ0FDO2VBQUFBOztRQWk5Q0FDO2VBQUFBOztRQWx3Q0FDO2VBQUFBOztRQTh1Q0FDO2VBQUFBOztRQWp6Q0FDO2VBQUFBOztRQStyQ0FDO2VBQUFBOztRQWp3QkFDO2VBQUFBOztRQTJiQUM7ZUFBQUE7O1FBbkJBQztlQUFBQTs7UUFPQUM7ZUFBQUE7O1FBNmJBQztlQUFBQTs7UUFwZ0JBQztlQUFBQTs7UUErRkFDO2VBQUFBOztRQXZNQUM7ZUFBQUE7O1FBMXNCQUM7ZUFBQUE7O1FBc2xCQUM7ZUFBQUE7O1FBMFZBQztlQUFBQTs7UUEvY0FDO2VBQUFBOztRQWtuQ0FDO2VBQUFBOztRQXBTQUM7ZUFBQUE7O1FBNWhEQUM7ZUFBQUE7O1FBdWpDQUM7ZUFBQUE7O1FBbmlCQUM7ZUFBQUE7O1FBODFDQUM7ZUFBQUE7O1FBV0FDO2VBQUFBOztRQW41Q0FDO2VBQUFBOztRQWt0QkFDO2VBQUFBOztRQThTQUM7ZUFBQUE7O1FBNzRCQUM7ZUFBQUE7O1FBcXRCQUM7ZUFBQUE7O1FBL21DQUM7ZUFBQUE7O1FBOC9DQUM7ZUFBQUE7O1FBbkNBQztlQUFBQTs7UUF6Q0FDO2VBQUFBOztRQTd3QkFDO2VBQUFBOztRQXZiQUM7ZUFBQUE7O1FBcXVCQUM7ZUFBQUE7O1FBa3RCQUM7ZUFBQUE7O1FBclJBQztlQUFBQTs7UUF1R0FDO2VBQUFBOztRQTlHQUM7ZUFBQUE7O1FBdUpBQztlQUFBQTs7UUFPQUM7ZUFBQUE7O1FBaFVBQztlQUFBQTs7UUFqZ0JBQztlQUFBQTs7UUF1WkFDO2VBQUFBOztRQXZKQUM7ZUFBQUE7O1FBMERBQztlQUFBQTs7UUF3QkFDO2VBQUFBOztRQXRFQUM7ZUFBQUE7O1FBbHNDQUM7ZUFBQUE7O1FBdWhDQUM7ZUFBQUE7O1FBdVlBQztlQUFBQTs7UUFnV0FDO2VBQUFBOztRQXhyQ0FDO2VBQUFBOztRQWlaQUM7ZUFBQUE7O1FBckRBQztlQUFBQTs7UUFrNEJBQztlQUFBQTs7UUFyNUJBQztlQUFBQTs7UUFydkJBQztlQUFBQTs7UUFpb0NBQztlQUFBQTs7UUF2eEJBQztlQUFBQTs7UUErL0JBQztlQUFBQTs7UUFPQUM7ZUFBQUE7O1FBMUZBQztlQUFBQTs7UUE5cEJBQztlQUFBQTs7UUE0UUFDO2VBQUFBOztRQXpqQ0FDO2VBQUFBOztRQTJzQkFDO2VBQUFBOztRQWcrQkFDO2VBQUFBOztRQTF1Q0FDO2VBQUFBOztRQXc0Q0FDO2VBQUFBOztRQTVvQ0FDO2VBQUFBOztRQWplQUM7ZUFBQUE7OztpRUExT0s7eUJBRUs7c0JBQ1U7NkJBQ0M7d0JBUXdDOzs7Ozs7QUFFdEUsU0FBU04saUJBQWlCTyxRQUFRLEVBQUVDLE9BQU87SUFDaEQsSUFBSUM7SUFFSixJQUFJRixhQUFhLE1BQU07UUFDckIsTUFBTUcsV0FBV0MsSUFBQUEseUJBQW1CO1FBRXBDRixPQUFPQyxVQUFXLEdBQUc7SUFDdkIsT0FBTztRQUNMLE1BQU0sRUFBRUUsSUFBSSxFQUFFLEdBQUdDLGlCQUFRLEVBQ25CQyxPQUFPUCxVQUNQUSxPQUFPbkksaUJBQWlCMkgsVUFBVUMsVUFDbENRLGFBQWE1SCx1QkFBdUJtSCxVQUFVQyxVQUM5Q1MsYUFBYWxELHVCQUF1QndDLFVBQVVDLFVBQzlDVSxhQUFhakgsdUJBQXVCc0csVUFBVUMsVUFDOUNXLGNBQWN4Ryx3QkFBd0I0RixVQUFVQyxVQUNoRFksa0JBQWtCcEksNEJBQTRCdUgsVUFBVUMsVUFDeERhLGFBQWFDLElBQUFBLHFDQUE2QixFQUFDRixrQkFDM0NHLFNBQVNGLFlBQWEsR0FBRztRQUUvQmIsVUFBVTtRQUVWQyxPQUFPLElBQUlHLEtBQUtKLFNBQVNlLFFBQVFULE1BQU1DLE1BQU1DLFlBQVlDLFlBQVlDLFlBQVlDO0lBQ25GO0lBRUEsT0FBT1Y7QUFDVDtBQUVPLFNBQVMxQixpQkFBaUJ5QyxRQUFRLEVBQUVoQixPQUFPO0lBQ2hELE1BQU0sRUFBRWlCLElBQUksRUFBRSxHQUFHWixpQkFBUSxFQUNuQkMsT0FBT1UsVUFDUEQsU0FBU2YsUUFBUWtCLFlBQVksQ0FBQ1osT0FDOUJMLE9BQU9YLGlCQUFpQjBCLFVBQVVoQjtJQUV4Q0EsVUFBVTtJQUVWLE1BQU1tQixPQUFPLElBQUlGLEtBQUtqQixTQUFTZSxRQUFRVCxNQUFNTDtJQUU3QyxPQUFPa0I7QUFDVDtBQUVPLFNBQVMxRSxpQkFBaUIyRSxRQUFRLEVBQUVwQixPQUFPO0lBQ2hELE1BQU0sRUFBRXFCLElBQUksRUFBRSxHQUFHaEIsaUJBQVEsRUFDbkJDLE9BQU9jLFVBQ1BMLFNBQVNmLFFBQVFrQixZQUFZLENBQUNaLE9BQzlCZ0IsWUFBWWxGLHNCQUFzQmdGLFVBQVVwQixVQUM1Q3VCLFlBQVk5RyxzQkFBc0IyRyxVQUFVcEIsVUFDNUN3QixxQkFBcUJwRywrQkFBK0JnRyxVQUFVcEI7SUFFcEVBLFVBQVU7SUFFVixNQUFNeUIsT0FBTyxJQUFJSixLQUFLckIsU0FBU2UsUUFBUVQsTUFBTWdCLFdBQVdDLFdBQVdDO0lBRW5FLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTeEcsaUJBQWlCeUcsUUFBUSxFQUFFMUIsT0FBTztJQUNoRCxNQUFNLEVBQUUyQixJQUFJLEVBQUUsR0FBR3RCLGlCQUFRLEVBQ25CdUIsUUFBUXRJLGtCQUFrQm9JLFVBQVUxQixVQUNwQzZCLFNBQVM3SyxtQkFBbUIwSyxVQUFVMUIsVUFDdEM4QixXQUFXL0kscUJBQXFCMkksVUFBVTFCLFVBQzFDK0IsYUFBYXBOLHVCQUF1QitNLFVBQVUxQixVQUM5Q2dDLGFBQWFDLElBQUFBLGlEQUF5QyxFQUFDSixRQUFRQyxVQUFVQyxhQUN6RXpCLE9BQU9vQixVQUNQWCxTQUFTaUIsWUFDVEUsT0FBTyxJQUFJUCxLQUFLM0IsU0FBU2UsUUFBUVQsTUFBTXNCLE9BQU9DLFFBQVFDLFVBQVVDO0lBRXRFLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTckwsbUJBQW1Cc0wsU0FBUyxFQUFFbkMsT0FBTztJQUNuRCxNQUFNLEVBQUVvQyxLQUFLLEVBQUUsR0FBRy9CLGlCQUFRLEVBQ3BCQyxPQUFPNkIsV0FDUHBCLFNBQVNmLFFBQVFrQixZQUFZLENBQUNaLE9BQzlCK0IsZUFBZTFLLDBCQUEwQndLLFdBQVduQyxVQUNwRHNDLFFBQVEsSUFBSUYsTUFBTXBDLFNBQVNlLFFBQVFULE1BQU0rQjtJQUUvQyxPQUFPQztBQUNUO0FBRU8sU0FBU3pNLG1CQUFtQjBNLFNBQVMsRUFBRXZDLE9BQU87SUFDbkQsTUFBTSxFQUFFd0MsS0FBSyxFQUFFLEdBQUduQyxpQkFBUSxFQUNwQkMsT0FBT2lDLFdBQ1B4QixTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5Qm1DLFFBQVEsSUFBSUQsTUFBTXhDLFNBQVNlLFFBQVFUO0lBRXpDLE9BQU9tQztBQUNUO0FBRU8sU0FBU3RMLG1CQUFtQnVMLFNBQVMsRUFBRTFDLE9BQU87SUFDbkQsTUFBTSxFQUFFMkMsS0FBSyxFQUFFLEdBQUd0QyxpQkFBUSxFQUNwQnVDLHlCQUF5QkYsV0FDekJkLFFBQVFySSwrQkFBK0JxSix3QkFBd0I1QyxVQUMvRDZCLFNBQVM1SyxnQ0FBZ0MyTCx3QkFBd0I1QyxVQUNqRTZDLFlBQVl6TixtQ0FBbUN3Tix3QkFBd0I1QyxVQUN2RThDLGVBQWVuRixzQ0FBc0NpRix3QkFBd0I1QyxVQUM3RStDLFlBQVlySCxtQ0FBbUNrSCx3QkFBd0I1QyxVQUN2RWdELGFBQWF6TSxvQ0FBb0NxTSx3QkFBd0I1QyxVQUN6RWlELDJCQUEyQkMsSUFBQUEsaUVBQXlELEVBQUNyQixRQUFRaUIsY0FBY0QsWUFDM0d2QyxPQUFPb0MsV0FDUDNCLFNBQVNrQywwQkFDVEUsUUFBUSxJQUFJUixNQUFNM0MsU0FBU2UsUUFBUVQsTUFBTXVCLFFBQVFpQixjQUFjRCxXQUFXakIsT0FBT21CLFdBQVdDO0lBRWxHLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTbk4sbUJBQW1Cb04sU0FBUyxFQUFFcEQsT0FBTztJQUNuRCxNQUFNLEVBQUVxRCxLQUFLLEVBQUUsR0FBR2hELGlCQUFRLEVBQ3BCQyxPQUFPOEMsV0FDUHJDLFNBQVNmLFFBQVFrQixZQUFZLENBQUNaLE9BQzlCZ0QsY0FBY25QLHlCQUF5QmlQLFdBQVdwRCxVQUNsRHFDLGVBQWUzSywwQkFBMEIwTCxXQUFXcEQ7SUFFMURBLFVBQVU7SUFFVixNQUFNdUQsUUFBUSxJQUFJRixNQUFNckQsU0FBU2UsUUFBUVQsTUFBTWdELGFBQWFqQjtJQUU1RCxPQUFPa0I7QUFDVDtBQUVPLFNBQVNsSyxtQkFBbUJtSyxTQUFTLEVBQUV4RCxPQUFPO0lBQ25ELE1BQU0sRUFBRXlELEtBQUssRUFBRSxHQUFHcEQsaUJBQVEsRUFDcEJDLE9BQU9rRCxXQUNQekMsU0FBUyxNQUNUMkMsYUFBYWpPLHdCQUF3QitOLFdBQVd4RDtJQUV0REEsVUFBVTtJQUVWLE1BQU00QixRQUFRLElBQUk2QixNQUFNekQsU0FBU2UsUUFBUVQsTUFBTW9EO0lBRS9DLE9BQU85QjtBQUNUO0FBRU8sU0FBU3hOLG1CQUFtQnVQLFNBQVMsRUFBRTNELE9BQU87SUFDbkQsTUFBTSxFQUFFNEQsS0FBSyxFQUFFLEdBQUd2RCxpQkFBUSxFQUNwQnVDLHlCQUF5QmUsV0FDekIvQixRQUFRckksK0JBQStCcUosd0JBQXdCNUMsVUFDL0Q2QixTQUFTNUssZ0NBQWdDMkwsd0JBQXdCNUMsVUFDakU2QyxZQUFZek4sbUNBQW1Dd04sd0JBQXdCNUMsVUFDdkU4QyxlQUFlbkYsc0NBQXNDaUYsd0JBQXdCNUMsVUFDN0UrQyxZQUFZckgsbUNBQW1Da0gsd0JBQXdCNUMsVUFDdkVnRCxhQUFhLEVBQUUsRUFDZkMsMkJBQTJCQyxJQUFBQSxpRUFBeUQsRUFBQ3JCLFFBQVFpQixjQUFjRCxZQUMzR3ZDLE9BQU9xRCxXQUNQNUMsU0FBU2tDLDBCQUNUWSxRQUFRLElBQUlELE1BQU01RCxTQUFTZSxRQUFRVCxNQUFNdUIsUUFBUWlCLGNBQWNELFdBQVdqQixPQUFPbUIsV0FBV0M7SUFFbEcsT0FBT2E7QUFDVDtBQUVPLFNBQVN4SSx1QkFBdUJ5SSxXQUFXLEVBQUU5RCxPQUFPO0lBQ3pELE1BQU0rRCxrQkFBa0JELFlBQVlFLGtCQUFrQixJQUNoRGhCLGFBQWExTSw4QkFBOEJ5TixpQkFBaUIvRCxVQUM1RDZELFFBQVF4UCxxQkFBcUJ5UCxhQUFhOUQsVUFDMUNtRCxRQUFRL0wscUJBQXFCME0sYUFBYTlELFVBQzFDaUUsVUFBVWxGLHVCQUF1QitFLGFBQWE5RCxVQUM5Q2tFLGFBQWFyUCwwQkFBMEJpUCxhQUFhOUQsVUFDcERtRSxnQkFBZ0JDLElBQUFBLG9EQUE0QyxFQUFDcEIsWUFBWWEsT0FBT1YsT0FBT2MsU0FBU0MsYUFDaEc1RCxPQUFPd0QsYUFDUC9DLFNBQVNvRCxlQUFlLEdBQUc7SUFFakNuRSxVQUFVO0lBRVYsTUFBTXFFLFVBQVUsSUFBSUMsUUFBUXRFLFNBQVNlLFFBQVFULE1BQU0wQyxZQUFZYSxPQUFPVixPQUFPYyxTQUFTQztJQUV0RixPQUFPRztBQUNUO0FBRU8sU0FBU3hMLHVCQUF1QjBMLFdBQVcsRUFBRXZFLE9BQU87SUFDekQsTUFBTSxFQUFFd0UsT0FBTyxFQUFFLEdBQUduRSxpQkFBUSxFQUN0QkMsT0FBT2lFLGFBQ1B4RCxTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5QmdCLFlBQVlwRix5QkFBeUJxSSxhQUFhdkUsVUFDbER5RSxnQkFBZ0J6TCw2QkFBNkJ1TCxhQUFhdkU7SUFFaEVBLFVBQVU7SUFFVixNQUFNMEUsVUFBVSxJQUFJRixRQUFReEUsU0FBU2UsUUFBUVQsTUFBTWdCLFdBQVdtRDtJQUU5RCxPQUFPQztBQUNUO0FBRU8sU0FBUzFGLHVCQUF1QjJGLFdBQVcsRUFBRTNFLE9BQU87SUFDekQsTUFBTSxFQUFFNEUsT0FBTyxFQUFFLEdBQUd2RSxpQkFBUSxFQUN0QnVDLHlCQUF5QitCLGFBQ3pCL0MsUUFBUXJJLCtCQUErQnFKLHdCQUF3QjVDLFVBQy9ENkIsU0FBUzVLLGdDQUFnQzJMLHdCQUF3QjVDLFVBQ2pFNkMsWUFBWXpOLG1DQUFtQ3dOLHdCQUF3QjVDLFVBQ3ZFOEMsZUFBZW5GLHNDQUFzQ2lGLHdCQUF3QjVDLFVBQzdFK0MsWUFBWXJILG1DQUFtQ2tILHdCQUF3QjVDLFVBQ3ZFZ0QsYUFBYSxFQUFFLEVBQ2ZDLDJCQUEyQkMsSUFBQUEsaUVBQXlELEVBQUNyQixRQUFRaUIsY0FBY0QsWUFDM0d2QyxPQUFPcUUsYUFDUDVELFNBQVNrQywwQkFDVGdCLFVBQVUsSUFBSVcsUUFBUTVFLFNBQVNlLFFBQVFULE1BQU11QixRQUFRaUIsY0FBY0QsV0FBV2pCLE9BQU9tQixXQUFXQztJQUV0RyxPQUFPaUI7QUFDVDtBQUVPLFNBQVMzTSx5QkFBeUJ1TixZQUFZLEVBQUU3RSxPQUFPO0lBQzVELE1BQU04RSxlQUFlRCxhQUFhRSxlQUFlLElBQzNDQyxXQUFXaEYsUUFBUWlGLDBCQUEwQixDQUFDSDtJQUVwRCxPQUFPRTtBQUNUO0FBRU8sU0FBU3BMLHlCQUF5QnNMLFlBQVksRUFBRWxGLE9BQU87SUFDNUQsTUFBTSxFQUFFbUYsUUFBUSxFQUFFLEdBQUc5RSxpQkFBUSxFQUN2QkMsT0FBTzRFLGNBQ1BuRSxTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5QjhFLGVBQWVGLGFBQWFHLGVBQWUsSUFDM0N6RSxrQkFBa0IsTUFDbEJMLE9BQU82RSxjQUFlLEdBQUc7SUFFL0JwRixVQUFVO0lBRVYsTUFBTXNGLFdBQVcsSUFBSUgsU0FBU25GLFNBQVNlLFFBQVFULE1BQU1DLE1BQU1LO0lBRTNELE9BQU8wRTtBQUNUO0FBRU8sU0FBU3hGLHlCQUF5QnlGLFlBQVksRUFBRXZGLE9BQU87SUFDNUQsTUFBTSxFQUFFd0YsUUFBUSxFQUFFLEdBQUduRixpQkFBUSxFQUN2QkMsT0FBT2lGLGNBQ1B4RSxTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5QkwsT0FBTyxNQUNQd0YsYUFBYS9PLDJCQUEyQjZPLGNBQWN2RixVQUN0RDBGLG9CQUFvQixFQUFFO0lBRTVCMUYsVUFBVTtJQUVWLE1BQU0yRixXQUFXLElBQUlILFNBQVN4RixTQUFTZSxRQUFRVCxNQUFNTCxNQUFNd0YsWUFBWUM7SUFFdkUsT0FBT0M7QUFDVDtBQUVPLFNBQVN4SSx5QkFBeUJ5SSxZQUFZLEVBQUU1RixPQUFPO0lBQzVELE1BQU0sRUFBRTZGLFFBQVEsRUFBRSxHQUFHeEYsaUJBQVEsRUFDdkJDLE9BQU9zRixjQUNQOUMsZUFBZXJGLDZCQUE2Qm1JLGNBQWM1RixVQUMxRDhGLGdCQUFnQi9JLDhCQUE4QjZJLGNBQWM1RixVQUM1RCtGLGlCQUFpQkMsSUFBQUEsc0RBQThDLEVBQUNsRCxjQUFjZ0QsZUFBZTlGLFVBQzdGZSxTQUFTZ0YsZ0JBQWlCLEdBQUc7SUFFbkMvRixVQUFVO0lBRVYsTUFBTWlHLFdBQVcsSUFBSUosU0FBUzdGLFNBQVNlLFFBQVFULE1BQU13QyxjQUFjZ0Q7SUFFbkUsT0FBT0c7QUFDVDtBQUVPLFNBQVN2USx5QkFBeUJ3USxZQUFZLEVBQUVsRyxPQUFPO0lBQzVELE1BQU0sRUFBRW1HLFFBQVEsRUFBRSxHQUFHOUYsaUJBQVEsRUFDdkJDLE9BQU80RixjQUNQbkYsU0FBU2YsUUFBUWtCLFlBQVksQ0FBQ1osT0FDOUI4RixXQUFXbFAseUJBQXlCZ1AsY0FBY2xHLFVBQ2xEcUcsWUFBWXJMLDBCQUEwQmtMLGNBQWNsRztJQUUxREEsVUFBVTtJQUVWLE1BQU1zRyxXQUFXLElBQUlILFNBQVNuRyxTQUFTZSxRQUFRVCxNQUFNOEYsVUFBVUM7SUFFL0QsT0FBT0M7QUFDVDtBQUVPLFNBQVNuUiwyQkFBMkJvUixhQUFhLEVBQUV2RyxPQUFPO0lBQy9ELE1BQU0sRUFBRXdHLFNBQVMsRUFBRSxHQUFHbkcsaUJBQVEsRUFDeEJDLE9BQU9pRyxlQUNQeEYsU0FBU2YsUUFBUWtCLFlBQVksQ0FBQ1osT0FDOUJnQixZQUFZdEYsMkJBQTJCdUssZUFBZXZHO0lBRTVEQSxVQUFVO0lBRVYsTUFBTTZDLFlBQVksSUFBSTJELFVBQVV4RyxTQUFTZSxRQUFRVCxNQUFNZ0I7SUFFdkQsT0FBT3VCO0FBQ1Q7QUFFTyxTQUFTMUcsMkJBQTJCc0ssYUFBYSxFQUFFekcsT0FBTztJQUMvRCxNQUFNLEVBQUUwRyxTQUFTLEVBQUUsR0FBR3JHLGlCQUFRLEVBQ3hCQyxPQUFPbUcsZUFDUDFGLFNBQVNmLFFBQVFrQixZQUFZLENBQUNaO0lBRXBDTixVQUFVO0lBRVYsTUFBTXNCLFlBQVksSUFBSW9GLFVBQVUxRyxTQUFTZSxRQUFRVDtJQUVqRCxPQUFPZ0I7QUFDVDtBQUVPLFNBQVM3RiwyQkFBMkJrTCxhQUFhLEVBQUUzRyxPQUFPO0lBQy9ELE1BQU0sRUFBRTRHLFNBQVMsRUFBRSxHQUFHdkcsaUJBQVEsRUFDeEJDLE9BQU9xRyxlQUNQNUYsU0FBU2YsUUFBUWtCLFlBQVksQ0FBQ1osT0FDOUJ1RyxRQUFRaEksdUJBQXVCOEgsZUFBZTNHO0lBRXBEQSxVQUFVO0lBRVYsTUFBTStDLFlBQVksSUFBSTZELFVBQVU1RyxTQUFTZSxRQUFRVCxNQUFNdUc7SUFFdkQsT0FBTzlEO0FBQ1Q7QUFFTyxTQUFTeEksMkJBQTJCdU0sYUFBYSxFQUFFOUcsT0FBTztJQUMvRCxNQUFNLEVBQUUrRyxTQUFTLEVBQUUsR0FBRzFHLGlCQUFRLEVBQ3hCQyxPQUFPd0csZUFDUC9GLFNBQVNmLFFBQVFrQixZQUFZLENBQUNaLE9BQzlCK0IsZUFBZXZLLDhCQUE4QmdQLGVBQWU5RyxVQUM1RHVCLFlBQVksSUFBSXdGLFVBQVUvRyxTQUFTZSxRQUFRVCxNQUFNK0I7SUFFdkQsT0FBT2Q7QUFDVDtBQUVPLFNBQVM1SywyQkFBMkJxUSxhQUFhLEVBQUVoSCxPQUFPO0lBQy9ELE1BQU0sRUFBRWlILFNBQVMsRUFBRSxHQUFHNUcsaUJBQVEsRUFDeEJDLE9BQU8wRyxlQUNQakcsU0FBU2YsUUFBUWtCLFlBQVksQ0FBQ1osT0FDOUJpRCxRQUFRck4sdUJBQXVCOFEsZUFBZWhILFVBQzlDa0gsYUFBYWpULDRCQUE0QitTLGVBQWVoSDtJQUU5REEsVUFBVTtJQUVWLE1BQU1tSCxZQUFZLElBQUlGLFVBQVVqSCxTQUFTZSxRQUFRVCxNQUFNaUQsT0FBTzJEO0lBRTlELE9BQU9DO0FBQ1Q7QUFFTyxTQUFTOVAsMkJBQTJCK1AsYUFBYSxFQUFFcEgsT0FBTztJQUMvRCxNQUFNLEVBQUVxSCxTQUFTLEVBQUUsR0FBR2hILGlCQUFRLEVBQ3hCaUgsMEJBQTBCRixlQUMxQnhGLFFBQVFwSSxtQ0FBbUM4Tix5QkFBeUJ0SCxVQUNwRXNDLFFBQVF4TCxtQ0FBbUN3USx5QkFBeUJ0SCxVQUNwRTZDLFlBQVl4Tix1Q0FBdUNpUyx5QkFBeUJ0SCxVQUM1RThDLGVBQWVsRiwwQ0FBMEMwSix5QkFBeUJ0SCxVQUNsRnVILDhCQUE4QkMsSUFBQUEsb0VBQTRELEVBQUNsRixPQUFPUSxjQUFjRCxZQUNoSDRFLGdCQUFnQixNQUNoQm5ILE9BQU84RyxlQUNQckcsU0FBU3dHLDZCQUNURyxZQUFZLElBQUlMLFVBQVVySCxTQUFTZSxRQUFRVCxNQUFNZ0MsT0FBT1EsY0FBY0QsV0FBV2pCLE9BQU82RjtJQUU5RixPQUFPQztBQUNUO0FBRU8sU0FBU2pQLDJCQUEyQmtQLGFBQWEsRUFBRTNILE9BQU87SUFDL0QsTUFBTSxFQUFFNEgsU0FBUyxFQUFFLEdBQUd2SCxpQkFBUSxFQUN4QkMsT0FBT3FILGVBQ1A1RyxTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5QkMsT0FBT29ILGNBQWNFLE9BQU8sSUFDNUJwQyxhQUFha0MsY0FBY0csYUFBYTtJQUU5QzlILFVBQVU7SUFFVixNQUFNK0gsWUFBWSxJQUFJSCxVQUFVNUgsU0FBU2UsUUFBUVQsTUFBTUMsTUFBTWtGO0lBRTdELE9BQU9zQztBQUNUO0FBRU8sU0FBU3hNLDRCQUE0Qm9MLGFBQWEsRUFBRTNHLE9BQU87SUFDaEUsTUFBTSxFQUFFNEcsU0FBUyxFQUFFLEdBQUd2RyxpQkFBUSxFQUN4QkMsT0FBT3FHLGVBQ1A1RixTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5QnVHLFFBQVFoSSx1QkFBdUI4SCxlQUFlM0c7SUFFcERBLFVBQVU7SUFFVixNQUFNK0MsWUFBWSxJQUFJNkQsVUFBVTVHLFNBQVNlLFFBQVFULE1BQU11RztJQUV2RCxPQUFPOUQ7QUFDVDtBQUVPLFNBQVN2TSw2QkFBNkJ3UixhQUFhLEVBQUVoSSxPQUFPO0lBQ2pFLE1BQU0sRUFBRWlJLFNBQVMsRUFBRSxHQUFHNUgsaUJBQVEsRUFDeEJDLE9BQU8wSCxlQUNQakgsU0FBU2YsUUFBUWtCLFlBQVksQ0FBQ1osT0FDOUJnQixZQUFZckYsNEJBQTRCK0wsZUFBZWhJO0lBRTdEQSxVQUFVO0lBRVYsTUFBTWtJLGFBQWEsSUFBSUQsVUFBVWpJLFNBQVNlLFFBQVFULE1BQU1nQjtJQUV4RCxPQUFPNEc7QUFDVDtBQUVPLFNBQVN0VCw2QkFBNkJ1VCxjQUFjLEVBQUVuSSxPQUFPO0lBQ2xFLE1BQU0sRUFBRW9JLFVBQVUsRUFBRSxHQUFHL0gsaUJBQVEsRUFDekJ1Qyx5QkFBeUJ1RixnQkFDekJ2RyxRQUFRckksK0JBQStCcUosd0JBQXdCNUMsVUFDL0Q2QixTQUFTNUssZ0NBQWdDMkwsd0JBQXdCNUMsVUFDakU2QyxZQUFZek4sbUNBQW1Dd04sd0JBQXdCNUMsVUFDdkU4QyxlQUFlbkYsc0NBQXNDaUYsd0JBQXdCNUMsVUFDN0UrQyxZQUFZckgsbUNBQW1Da0gsd0JBQXdCNUMsVUFDdkVnRCxhQUFhLEVBQUUsRUFDZkMsMkJBQTJCQyxJQUFBQSxpRUFBeUQsRUFBQ3JCLFFBQVFpQixjQUFjRCxZQUMzR3ZDLE9BQU82SCxnQkFDUHBILFNBQVNrQywwQkFDVGlCLGFBQWEsSUFBSWtFLFdBQVdwSSxTQUFTZSxRQUFRVCxNQUFNdUIsUUFBUWlCLGNBQWNELFdBQVdqQixPQUFPbUIsV0FBV0M7SUFFNUcsT0FBT2tCO0FBQ1Q7QUFFTyxTQUFTMVAsNkJBQTZCNlQsY0FBYyxFQUFFckksT0FBTztJQUNsRSxNQUFNLEVBQUVzSSxVQUFVLEVBQUUsR0FBR2pJLGlCQUFRLEVBQ3pCQyxPQUFPK0gsZ0JBQ1B0SCxTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5QmdCLFlBQVl6Riw0QkFBNEJ3TSxnQkFBZ0JySSxVQUN4RHVJLGFBQWEsSUFBSUQsV0FBV3RJLFNBQVNlLFFBQVFULE1BQU1nQjtJQUV6RCxPQUFPaUg7QUFDVDtBQUVPLFNBQVM3VCw2QkFBNkI4VCxjQUFjLEVBQUV4SSxPQUFPO0lBQ2xFLE1BQU0sRUFBRXlJLFVBQVUsRUFBRSxHQUFHcEksaUJBQVEsRUFDekJDLE9BQU9rSSxnQkFDUHpILFNBQVNmLFFBQVFrQixZQUFZLENBQUNaLE9BQzlCZ0IsWUFBWXhGLDRCQUE0QjBNLGdCQUFnQnhJO0lBRTlEQSxVQUFVO0lBRVYsTUFBTStCLGFBQWEsSUFBSTBHLFdBQVd6SSxTQUFTZSxRQUFRVCxNQUFNZ0I7SUFFekQsT0FBT1M7QUFDVDtBQUVPLFNBQVMvTiw2QkFBNkIwVSxjQUFjLEVBQUUxSSxPQUFPO0lBQ2xFLE1BQU0sRUFBRTJJLFVBQVUsRUFBRSxHQUFHdEksaUJBQVEsRUFDekJDLE9BQU9vSSxnQkFDUDNILFNBQVNmLFFBQVFrQixZQUFZLENBQUNaLE9BQzlCaUIsWUFBWW5ILDRCQUE0QnNPLGdCQUFnQjFJLFVBQ3hEc0IsWUFBWTFGLDRCQUE0QjhNLGdCQUFnQjFJO0lBRTlEQSxVQUFVO0lBRVYsTUFBTWtILGFBQWEsSUFBSXlCLFdBQVczSSxTQUFTZSxRQUFRVCxNQUFNaUIsV0FBV0Q7SUFFcEUsT0FBTzRGO0FBQ1Q7QUFFTyxTQUFTMVIsNkJBQTZCb1QsY0FBYyxFQUFFNUksT0FBTztJQUNsRSxNQUFNLEVBQUU2SSxVQUFVLEVBQUUsR0FBR3hJLGlCQUFRLEVBQ3pCQyxPQUFPc0ksZ0JBQ1A3SCxTQUFTLE1BQ1QrSCxtQkFBbUJsTSxtQ0FBbUNnTSxnQkFBZ0I1STtJQUU1RUEsVUFBVTtJQUVWLE1BQU0wRCxhQUFhLElBQUltRixXQUFXN0ksU0FBU2UsUUFBUVQsTUFBTXdJO0lBRXpELE9BQU9wRjtBQUNUO0FBRU8sU0FBUy9ELDZCQUE2Qm9KLGNBQWMsRUFBRS9JLE9BQU87SUFDbEUsTUFBTSxFQUFFZ0osVUFBVSxFQUFFLEdBQUczSSxpQkFBUSxFQUN6QkMsT0FBT3lJLGdCQUNQaEksU0FBU2YsUUFBUWtCLFlBQVksQ0FBQ1osT0FDOUJhLE9BQU84SCx1QkFBdUJGLGdCQUFnQi9JLFVBQzlDQyxPQUFPaUosdUJBQXVCSCxnQkFBZ0IvSTtJQUVwREEsVUFBVTtJQUVWLE1BQU1tSixhQUFhLElBQUlILFdBQVdoSixTQUFTZSxRQUFRVCxNQUFNYSxNQUFNbEI7SUFFL0QsT0FBT2tKO0FBQ1Q7QUFFTyxTQUFTblUsK0JBQStCb1UsZUFBZSxFQUFFcEosT0FBTztJQUNyRSxNQUFNLEVBQUVxSixXQUFXLEVBQUUsR0FBR2hKLGlCQUFRLEVBQzFCQyxPQUFPOEksaUJBQ1BySSxTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5QmEsT0FBT2xELHdCQUF3Qm1MLGlCQUFpQnBKLFVBQ2hEc0osY0FBYyxJQUFJRCxZQUFZckosU0FBU2UsUUFBUVQsTUFBTWE7SUFFM0QsT0FBT21JO0FBQ1Q7QUFFTyxTQUFTOUwsK0JBQStCK0wsZUFBZSxFQUFFdkosT0FBTztJQUNyRSxNQUFNLEVBQUV3SixXQUFXLEVBQUUsR0FBR25KLGlCQUFRLEVBQzFCQyxPQUFPaUosaUJBQ1B4SSxTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5QmdCLFlBQVlqRiw2QkFBNkJrTixpQkFBaUJ2SixVQUMxRHlFLGdCQUFnQnZMLGlDQUFpQ3FRLGlCQUFpQnZKO0lBRXhFQSxVQUFVO0lBRVYsTUFBTXlKLGNBQWMsSUFBSUQsWUFBWXhKLFNBQVNlLFFBQVFULE1BQU1nQixXQUFXbUQ7SUFFdEUsT0FBT2dGO0FBQ1Q7QUFFTyxTQUFTN1QsK0JBQStCOFQsZUFBZSxFQUFFMUosT0FBTztJQUNyRSxNQUFNLEVBQUUySixXQUFXLEVBQUUsR0FBR3RKLGlCQUFRLEVBQzFCQyxPQUFPb0osaUJBQ1A3QyxRQUFRakkseUJBQXlCOEssaUJBQWlCMUosVUFDbEQ0SixvQkFBb0JDLElBQUFBLGtDQUEwQixFQUFDaEQsUUFDL0M5RixTQUFTNkksbUJBQW1CLEdBQUc7SUFFckM1SixVQUFVO0lBRVYsTUFBTThKLGNBQWMsSUFBSUgsWUFBWTNKLFNBQVNlLFFBQVFULE1BQU11RztJQUUzRCxPQUFPaUQ7QUFDVDtBQUVPLFNBQVN0UywrQkFBK0J1UyxlQUFlLEVBQUUvSixPQUFPO0lBQ3JFLE1BQU0sRUFBRWdLLFdBQVcsRUFBRSxHQUFHM0osaUJBQVEsRUFDMUJpSCwwQkFBMEJ5QyxpQkFDMUJuSSxRQUFRcEksbUNBQW1DOE4seUJBQXlCdEgsVUFDcEVzQyxRQUFReEwsbUNBQW1Dd1EseUJBQXlCdEgsVUFDcEU2QyxZQUFZeE4sdUNBQXVDaVMseUJBQXlCdEgsVUFDNUU4QyxlQUFlbEYsMENBQTBDMEoseUJBQXlCdEgsVUFDbEZ1SCw4QkFBOEJDLElBQUFBLG9FQUE0RCxFQUFDbEYsT0FBT1EsY0FBY0QsWUFDaEh2QyxPQUFPeUosaUJBQ1BoSixTQUFTd0csNkJBQ1RFLGdCQUFnQixNQUNoQndDLGNBQWMsSUFBSUQsWUFBWWhLLFNBQVNlLFFBQVFULE1BQU1nQyxPQUFPUSxjQUFjRCxXQUFXakIsT0FBTzZGO0lBRWxHLE9BQU93QztBQUNUO0FBRU8sU0FBU3BTLGlDQUFpQ3FTLGdCQUFnQixFQUFFbEssT0FBTztJQUN4RSxNQUFNLEVBQUVtSyxZQUFZLEVBQUUsR0FBRzlKLGlCQUFRLEVBQzNCQyxPQUFPNEosa0JBQ1BuSixTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5QjhKLG1CQUFtQkYsaUJBQWlCRyxtQkFBbUIsSUFDdkQ5SixPQUFPNkosa0JBQ1BuSyxPQUFPLE1BQ1ArRSxXQUFXLE1BQ1gzQyxlQUFlLElBQUk4SCxhQUFhbkssU0FBU2UsUUFBUVQsTUFBTUMsTUFBTU4sTUFBTStFO0lBRXpFLE9BQU8zQztBQUNUO0FBRU8sU0FBU3ZGLG1DQUFtQ3dOLGlCQUFpQixFQUFFdEssT0FBTztJQUMzRSxNQUFNLEVBQUV1SyxhQUFhLEVBQUUsR0FBR2xLLGlCQUFRLEVBQzVCQyxPQUFPZ0ssbUJBQ1B2SixTQUFTLE1BQ1QrSCxtQkFBbUJqTSxzQ0FBc0N5TixtQkFBbUJ0SztJQUVsRkEsVUFBVTtJQUVWLE1BQU04RixnQkFBZ0IsSUFBSXlFLGNBQWN2SyxTQUFTZSxRQUFRVCxNQUFNd0k7SUFFL0QsT0FBT2hEO0FBQ1Q7QUFFTyxTQUFTNUcsbUNBQW1Dc0wsaUJBQWlCLEVBQUV4SyxPQUFPO0lBQzNFLE1BQU0sRUFBRXlLLGFBQWEsRUFBRSxHQUFHcEssaUJBQVEsRUFDNUJDLE9BQU9rSyxtQkFDUHpKLFNBQVNmLFFBQVFrQixZQUFZLENBQUNaLE9BQzlCYSxPQUFPM0MsMEJBQTBCZ00sbUJBQW1CeEssVUFDcERDLE9BQU9WLDBCQUEwQmlMLG1CQUFtQnhLO0lBRTFEQSxVQUFVO0lBRVYsTUFBTTBLLGdCQUFnQixJQUFJRCxjQUFjekssU0FBU2UsUUFBUVQsTUFBTWEsTUFBTWxCO0lBRXJFLE9BQU95SztBQUNUO0FBRU8sU0FBU3pSLG1DQUFtQzBSLGlCQUFpQixFQUFFM0ssT0FBTztJQUMzRSxNQUFNLEVBQUU0SyxhQUFhLEVBQUUsR0FBR3ZLLGlCQUFRLEVBQzVCd0ssYUFBYWxTLGdDQUFnQ2dTLG1CQUFtQjNLLFVBQ2hFOEsscUJBQXFCM1Isd0NBQXdDd1IsbUJBQW1CM0ssVUFDaEYrSyxzQkFBc0JDLElBQUFBLDhEQUFzRCxFQUFDRixvQkFBb0JELGFBQ2pHdkssT0FBT3FLLG1CQUNQNUosU0FBU2dLLHFCQUFxQixHQUFHO0lBRXZDL0ssVUFBVTtJQUVWLE1BQU15RSxnQkFBZ0IsSUFBSW1HLGNBQWM1SyxTQUFTZSxRQUFRVCxNQUFNdUssWUFBWUM7SUFFM0UsT0FBT3JHO0FBQ1Q7QUFFTyxTQUFTOUgscUNBQXFDc08sa0JBQWtCLEVBQUVqTCxPQUFPO0lBQzlFLE1BQU15QixPQUFPL0UsMkJBQTJCdU8sb0JBQW9CakwsVUFDdERpRyxXQUFXL0ksK0JBQStCK04sb0JBQW9CakwsVUFDOURrTCxpQkFBa0J6SixRQUFRd0U7SUFFaEMsT0FBT2lGO0FBQ1Q7QUFFTyxTQUFTNVYseUNBQXlDNlYsb0JBQW9CLEVBQUVuTCxPQUFPO0lBQ3BGLE1BQU0sRUFBRW9MLGdCQUFnQixFQUFFLEdBQUcvSyxpQkFBUSxFQUMvQkMsT0FBTzZLLHNCQUNQcEssU0FBU2YsUUFBUWtCLFlBQVksQ0FBQ1osT0FDOUIrSyxVQUFVRixxQkFBcUJHLFNBQVMsSUFDeENuSyxPQUFPaEQsNkJBQTZCZ04sc0JBQXNCbkwsVUFDMUR1RCxRQUFReE4sOEJBQThCb1Ysc0JBQXNCbkw7SUFFbEVBLFVBQVU7SUFFVixNQUFNdUwsbUJBQW1CLElBQUlILGlCQUFpQnBMLFNBQVNlLFFBQVFULE1BQU1hLE1BQU1vQyxPQUFPOEg7SUFFbEYsT0FBT0U7QUFDVDtBQUVPLFNBQVN4Uix5Q0FBeUN5UixvQkFBb0IsRUFBRXhMLE9BQU87SUFDcEYsTUFBTSxFQUFFeUwsZ0JBQWdCLEVBQUUsR0FBR3BMLGlCQUFRLEVBQy9CQyxPQUFPa0wsc0JBQ1B6SyxTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5QmEsT0FBTzdDLDZCQUE2QmtOLHNCQUFzQnhMLFVBQzFEc0YsV0FBV3pMLGlDQUFpQzJSLHNCQUFzQnhMO0lBRXhFQSxVQUFVO0lBRVYsTUFBTTBMLG1CQUFtQixJQUFJRCxpQkFBaUJ6TCxTQUFTZSxRQUFRVCxNQUFNYSxNQUFNbUU7SUFFM0UsT0FBT29HO0FBQ1Q7QUFFTyxTQUFTL00seUNBQXlDZ04sb0JBQW9CLEVBQUUzTCxPQUFPO0lBQ3BGLE1BQU0sRUFBRTRMLGdCQUFnQixFQUFFLEdBQUd2TCxpQkFBUSxFQUMvQkMsT0FBT3FMLHNCQUNQNUssU0FBU2YsUUFBUWtCLFlBQVksQ0FBQ1osT0FDOUJ1TCxhQUFhN04sbUNBQW1DMk4sc0JBQXNCM0wsVUFDdEU4TCxrQkFBa0JoUix3Q0FBd0M2USxzQkFBc0IzTCxVQUNoRitMLG1CQUFtQixJQUFJSCxpQkFBaUI1TCxTQUFTZSxRQUFRVCxNQUFNdUwsWUFBWUM7SUFFakYsT0FBT0M7QUFDVDtBQUVPLFNBQVM1ViwyQ0FBMkM2VixxQkFBcUIsRUFBRWhNLE9BQU87SUFDdkYsTUFBTSxFQUFFaU0saUJBQWlCLEVBQUUsR0FBRzVMLGlCQUFRLEVBQ2hDQyxPQUFPMEwsdUJBQ1BqTCxTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5QjRMLGNBQWNyTyxxQ0FBcUNtTyx1QkFBdUJoTSxVQUMxRW1NLG1CQUFtQnhSLDBDQUEwQ3FSLHVCQUF1QmhNLFVBQ3BGb00sb0JBQW9CLElBQUlILGtCQUFrQmpNLFNBQVNlLFFBQVFULE1BQU00TCxhQUFhQztJQUVwRixPQUFPQztBQUNUO0FBRU8sU0FBUzFTLDJDQUEyQzJTLHFCQUFxQixFQUFFck0sT0FBTztJQUN2RixNQUFNLEVBQUVzTSxpQkFBaUIsRUFBRSxHQUFHak0saUJBQVEsRUFDaENDLE9BQU8rTCx1QkFDUHRMLFNBQVNmLFFBQVFrQixZQUFZLENBQUNaLE9BQzlCYSxPQUFPOUMsOEJBQThCZ08sdUJBQXVCck0sVUFDNUQwTCxtQkFBbUI1UiwwQ0FBMEN1Uyx1QkFBdUJyTTtJQUUxRkEsVUFBVTtJQUVWLE1BQU11TSxvQkFBb0IsSUFBSUQsa0JBQWtCdE0sU0FBU2UsUUFBUVQsTUFBTWEsTUFBTXVLO0lBRTdFLE9BQU9hO0FBQ1Q7QUFFTyxTQUFTdFAsMkNBQTJDdVAscUJBQXFCLEVBQUV4TSxPQUFPO0lBQ3ZGLE1BQU0sRUFBRXlNLGlCQUFpQixFQUFFLEdBQUdwTSxpQkFBUSxFQUNoQ0MsT0FBT2tNLHVCQUNQekwsU0FBU2YsUUFBUWtCLFlBQVksQ0FBQ1osT0FDOUJvTSxhQUFhbFEsb0NBQW9DZ1EsdUJBQXVCeE07SUFFOUVBLFVBQVU7SUFFVixNQUFNMk0sb0JBQW9CLElBQUlGLGtCQUFrQnpNLFNBQVNlLFFBQVFULE1BQU1vTTtJQUV2RSxPQUFPQztBQUNUO0FBRU8sU0FBUzFYLDZDQUE2QzJYLHNCQUFzQixFQUFFNU0sT0FBTztJQUMxRixNQUFNLEVBQUU2TSxrQkFBa0IsRUFBRSxHQUFHeE0saUJBQVEsRUFDakNDLE9BQU9zTSx3QkFDUDdMLFNBQVNmLFFBQVFrQixZQUFZLENBQUNaLE9BQzlCK0ssVUFBVXVCLHVCQUF1QnRCLFNBQVMsSUFDMUNuSyxPQUFPakQsK0JBQStCME8sd0JBQXdCNU0sVUFDOUR1RCxRQUFRek4sZ0NBQWdDOFcsd0JBQXdCNU0sVUFDaEVzQixZQUFZdkYsb0NBQW9DNlEsd0JBQXdCNU07SUFFOUVBLFVBQVU7SUFFVixNQUFNOE0scUJBQXFCLElBQUlELG1CQUFtQjdNLFNBQVNlLFFBQVFULE1BQU1hLE1BQU1vQyxPQUFPOEgsU0FBUy9KO0lBRS9GLE9BQU93TDtBQUNUO0FBRU8sU0FBUzVSLDZDQUE2QzZSLHNCQUFzQixFQUFFL00sT0FBTztJQUMxRixNQUFNLEVBQUVnTixrQkFBa0IsRUFBRSxHQUFHM00saUJBQVEsRUFDakNDLE9BQU95TSx3QkFDUGhNLFNBQVNmLFFBQVFrQixZQUFZLENBQUNaLE9BQzlCeUMsWUFBWXZILG9DQUFvQ3VSLHdCQUF3Qi9NLFVBQ3hFdUIsWUFBWS9HLG9DQUFvQ3VTLHdCQUF3Qi9NO0lBRTlFQSxVQUFVO0lBRVYsTUFBTXdCLHFCQUFxQixJQUFJd0wsbUJBQW1CaE4sU0FBU2UsUUFBUVQsTUFBTXlDLFdBQVd4QjtJQUVwRixPQUFPQztBQUNUO0FBRU8sU0FBU3BJLDZDQUE2QzZULHNCQUFzQixFQUFFak4sT0FBTztJQUMxRixNQUFNLEVBQUVrTixrQkFBa0IsRUFBRSxHQUFHN00saUJBQVEsRUFDakNDLE9BQU8yTSx3QkFDUGxNLFNBQVNmLFFBQVFrQixZQUFZLENBQUNaLE9BQzlCQyxPQUFPckksK0JBQStCK1Usd0JBQXdCak47SUFFcEVBLFVBQVU7SUFFVixNQUFNbU4sc0JBQXNCLElBQUlELG1CQUFtQmxOLFNBQVNlLFFBQVFULE1BQU1DO0lBRTFFLE9BQU80TTtBQUNUO0FBRU8sU0FBU3ROLCtDQUErQ3VOLHVCQUF1QixFQUFFcE4sT0FBTztJQUM3RixNQUFNLEVBQUVxTixtQkFBbUIsRUFBRSxHQUFHaE4saUJBQVEsRUFDbENDLE9BQU84TSx5QkFDUHJNLFNBQVNmLFFBQVFrQixZQUFZLENBQUNaLE9BQzlCUCxXQUFXcU4sd0JBQXdCRSxXQUFXLElBQzlDM00sY0FBY3lNLHdCQUF3QkcsYUFBYSxJQUNuRGhJLGVBQWU2SCx3QkFBd0JJLGVBQWUsSUFDdER2TixPQUFPVCxpQkFBaUJPLFVBQVVDLFVBQ2xDMkYsV0FBVzdGLHlCQUF5QnlGLGNBQWN2RixVQUNsRHlOLHNCQUFzQixJQUFJSixvQkFBb0JyTixTQUFTZSxRQUFRVCxNQUFNTCxNQUFNMEYsVUFBVWhGO0lBRTNGLE9BQU84TTtBQUNUO0FBRU8sU0FBU2hPLG1EQUFtRGlPLHlCQUF5QixFQUFFMU4sT0FBTztJQUNuRyxNQUFNLEVBQUUyTixxQkFBcUIsRUFBRSxHQUFHdE4saUJBQVEsRUFDcENDLE9BQU9vTiwyQkFDUDNNLFNBQVNmLFFBQVFrQixZQUFZLENBQUNaLE9BQzlCNkksYUFBYXpKLHdDQUF3Q2dPLDJCQUEyQjFOLFVBQ2hGNE4sd0JBQXdCLElBQUlELHNCQUFzQjNOLFNBQVNlLFFBQVFULE1BQU02STtJQUUvRSxPQUFPeUU7QUFDVDtBQUVPLFNBQVN0WixtREFBbUR1Wix5QkFBeUIsRUFBRTdOLE9BQU87SUFDbkcsTUFBTSxFQUFFOE4scUJBQXFCLEVBQUUsR0FBR3pOLGlCQUFRLEVBQ3BDQyxPQUFPdU4sMkJBQ1A5TSxTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5QmlJLGFBQWFoVSx3Q0FBd0NzWiwyQkFBMkI3TixVQUNoRitOLHdCQUF3QixJQUFJRCxzQkFBc0I5TixTQUFTZSxRQUFRVCxNQUFNaUk7SUFFL0UsT0FBT3dGO0FBQ1Q7QUFFTyxTQUFTcFMsbURBQW1EcVMseUJBQXlCLEVBQUVoTyxPQUFPO0lBQ25HLE1BQU0sRUFBRWlPLHFCQUFxQixFQUFFLEdBQUc1TixpQkFBUSxFQUNwQ0MsT0FBTzBOLDJCQUNQak4sU0FBU2YsUUFBUWtCLFlBQVksQ0FBQ1osT0FDOUJMLE9BQU9aLGtDQUFrQzJPLDJCQUEyQmhPLFVBQ3BFUyxhQUFhbkQsd0NBQXdDMFEsMkJBQTJCaE8sVUFDaEZXLGNBQWN6Ryx5Q0FBeUM4VCwyQkFBMkJoTyxVQUNsRmtPLHdCQUF3QixJQUFJRCxzQkFBc0JqTyxTQUFTZSxRQUFRVCxNQUFNTCxNQUFNUSxZQUFZRTtJQUVqRyxPQUFPdU47QUFDVDtBQUVPLFNBQVN4VCxtREFBbUR5VCx5QkFBeUIsRUFBRW5PLE9BQU87SUFDbkcsTUFBTSxFQUFFb08scUJBQXFCLEVBQUUsR0FBRy9OLGlCQUFRLEVBQ3BDQyxPQUFPNk4sMkJBQ1BwTixTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5QitOLGtCQUFrQnZRLDZDQUE2Q3FRLDJCQUEyQm5PLFVBQzFGc08sdUJBQXVCMVQsa0RBQWtEdVQsMkJBQTJCbk8sVUFDcEd1Tyx3QkFBd0IsSUFBSUgsc0JBQXNCcE8sU0FBU2UsUUFBUVQsTUFBTStOLGlCQUFpQkM7SUFFaEcsT0FBT0M7QUFDVDtBQUVPLFNBQVNqUyxtREFBbURrUyx5QkFBeUIsRUFBRXhPLE9BQU87SUFDbkcsTUFBTSxFQUFFeU8scUJBQXFCLEVBQUUsR0FBR3BPLGlCQUFRLEVBQ3BDQyxPQUFPa08sMkJBQ1B6TixTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5Qm9PLFdBQVczVCxzQ0FBc0N5VCwyQkFBMkJ4TyxVQUM1RTJPLGVBQWV2UiwwQ0FBMENvUiwyQkFBMkJ4TyxVQUNwRjRPLGtCQUFrQjdRLDZDQUE2Q3lRLDJCQUEyQnhPLFVBQzFGNk8sdUJBQXVCaFUsa0RBQWtEMlQsMkJBQTJCeE8sVUFDcEc4Tyx3QkFBd0IsSUFBSUwsc0JBQXNCek8sU0FBU2UsUUFBUVQsTUFBTW9PLFVBQVVDLGNBQWNDLGlCQUFpQkM7SUFFeEgsT0FBT0M7QUFDVDtBQUVPLFNBQVNoYSxxREFBcURpYSwwQkFBMEIsRUFBRS9PLE9BQU87SUFDdEcsTUFBTSxFQUFFZ1Asc0JBQXNCLEVBQUUsR0FBRzNPLGlCQUFRLEVBQ3JDQyxPQUFPeU8sNEJBQ1BoTyxTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5QkwsT0FBT2IsbUNBQW1DMlAsNEJBQTRCL08sVUFDdEVXLGNBQWMxRywwQ0FBMEM4VSw0QkFBNEIvTyxVQUNwRnNKLGNBQWN2VSwwQ0FBMENnYSw0QkFBNEIvTyxVQUNwRmlQLHlCQUF5QixJQUFJRCx1QkFBdUJoUCxTQUFTZSxRQUFRVCxNQUFNTCxNQUFNVSxhQUFhMkk7SUFFcEcsT0FBTzJGO0FBQ1Q7QUFFTyxTQUFTeGEscURBQXFEeWEsMEJBQTBCLEVBQUVsUCxPQUFPO0lBQ3RHLE1BQU0sRUFBRW1QLHNCQUFzQixFQUFFLEdBQUc5TyxpQkFBUSxFQUNyQ0MsT0FBTzRPLDRCQUNQbk8sU0FBU2YsUUFBUWtCLFlBQVksQ0FBQ1osT0FDOUJMLE9BQU9kLG1DQUFtQytQLDRCQUE0QmxQLFVBQ3RFUyxhQUFhcEQseUNBQXlDNlIsNEJBQTRCbFAsVUFDbEZXLGNBQWMzRywwQ0FBMENrViw0QkFBNEJsUCxVQUNwRm9QLHlCQUF5QixJQUFJRCx1QkFBdUJuUCxTQUFTZSxRQUFRVCxNQUFNTCxNQUFNUSxZQUFZRTtJQUVuRyxPQUFPeU87QUFDVDtBQUVPLFNBQVMzWCx1REFBdUQ0WCwyQkFBMkIsRUFBRXJQLE9BQU87SUFDekcsTUFBTSxFQUFFc1AsdUJBQXVCLEVBQUUsR0FBR2pQLGlCQUFRLEVBQ3RDQyxPQUFPK08sNkJBQ1B0TyxTQUFTZixRQUFRa0IsWUFBWSxDQUFDWixPQUM5QjBFLFdBQVd6Tix3Q0FBd0M4WCw2QkFBNkJyUCxVQUNoRnFDLGVBQWV6Syw0Q0FBNEN5WCw2QkFBNkJyUCxVQUN4RnVQLDBCQUEwQixJQUFJRCx3QkFBd0J0UCxTQUFTZSxRQUFRVCxNQUFNMEUsVUFBVTNDO0lBRTdGLE9BQU9rTjtBQUNUO0FBRU8sU0FBU25YLGlCQUFpQjJILFFBQVEsRUFBRUMsT0FBTztJQUNoRCxNQUFNd1AsV0FBV3pQLFNBQVMwUCxXQUFXLElBQy9CbFAsT0FBT2lQLFVBQVcsR0FBRztJQUUzQixPQUFPalA7QUFDVDtBQUVPLFNBQVNqQixpQkFBaUIwQixRQUFRLEVBQUVoQixPQUFPO0lBQ2hELE1BQU1DLE9BQU87SUFFYixPQUFPQTtBQUNUO0FBRU8sU0FBUzNHLGtCQUFrQm9JLFFBQVEsRUFBRTFCLE9BQU87SUFDakQsSUFBSTRCLFFBQVE7SUFFWixNQUFNNEIsWUFBWTlCLFNBQVNnTyxZQUFZO0lBRXZDLElBQUlsTSxjQUFjLE1BQU07UUFDdEI1QixRQUFRdkksbUJBQW1CbUssV0FBV3hEO0lBQ3hDO0lBRUEsT0FBTzRCO0FBQ1Q7QUFFTyxTQUFTNUssbUJBQW1CMEssUUFBUSxFQUFFMUIsT0FBTztJQUNsRCxNQUFNMlAsYUFBYWpPLFNBQVNrTyxhQUFhLElBQ25DL04sU0FBUzlLLHFCQUFxQjRZLFlBQVkzUDtJQUVoRCxPQUFPNkI7QUFDVDtBQUVPLFNBQVM5SSxxQkFBcUIySSxRQUFRLEVBQUUxQixPQUFPO0lBQ3BELE1BQU02UCxlQUFlbk8sU0FBU29PLGVBQWUsSUFDdkNoTyxXQUFXaEoseUJBQXlCK1csY0FBYzdQO0lBRXhELE9BQU84QjtBQUNUO0FBRU8sU0FBU3pOLHFCQUFxQnlQLFdBQVcsRUFBRTlELE9BQU87SUFDdkQsSUFBSTZELFFBQVE7SUFFWixNQUFNRixZQUFZRyxZQUFZaU0sWUFBWTtJQUUxQyxJQUFJcE0sY0FBYyxNQUFNO1FBQ3RCRSxRQUFRelAsbUJBQW1CdVAsV0FBVzNEO0lBQ3hDO0lBRUEsT0FBTzZEO0FBQ1Q7QUFFTyxTQUFTek0scUJBQXFCME0sV0FBVyxFQUFFOUQsT0FBTztJQUN2RCxJQUFJbUQsUUFBUTtJQUVaLE1BQU1ULFlBQVlvQixZQUFZa00sWUFBWTtJQUUxQyxJQUFJdE4sY0FBYyxNQUFNO1FBQ3RCUyxRQUFRaE0sbUJBQW1CdUwsV0FBVzFDO0lBQ3hDO0lBRUEsT0FBT21EO0FBQ1Q7QUFFTyxTQUFTaEwscUJBQXFCK00sWUFBWSxFQUFFbEYsT0FBTztJQUN4RCxNQUFNTyxPQUFPMkUsYUFBYTJDLE9BQU87SUFFakMsT0FBT3RIO0FBQ1Q7QUFFTyxTQUFTbkUsc0JBQXNCZ0YsUUFBUSxFQUFFcEIsT0FBTztJQUNyRCxJQUFJc0IsWUFBWTtJQUVoQixNQUFNbUYsZ0JBQWdCckYsU0FBUzZPLGdCQUFnQjtJQUUvQyxJQUFJeEosa0JBQWtCLE1BQU07UUFDMUJuRixZQUFZbkYsMkJBQTJCc0ssZUFBZXpHO0lBQ3hEO0lBRUEsT0FBT3NCO0FBQ1Q7QUFFTyxTQUFTN0csc0JBQXNCMkcsUUFBUSxFQUFFcEIsT0FBTztJQUNyRCxJQUFJdUIsWUFBWTtJQUVoQixNQUFNdUYsZ0JBQWdCMUYsU0FBUzhPLGdCQUFnQjtJQUUvQyxJQUFJcEosa0JBQWtCLE1BQU07UUFDMUJ2RixZQUFZaEgsMkJBQTJCdU0sZUFBZTlHO0lBQ3hEO0lBRUEsT0FBT3VCO0FBQ1Q7QUFFTyxTQUFTdEosc0JBQXNCMFAsYUFBYSxFQUFFM0gsT0FBTztJQUMxRCxNQUFNTyxPQUFPb0gsY0FBY0UsT0FBTztJQUVsQyxPQUFPdEg7QUFDVDtBQUVPLFNBQVNsSSx1QkFBdUIwUSxjQUFjLEVBQUUvSSxPQUFPO0lBQzVELE1BQU1tUSxpQkFBaUJwSCxlQUFlcUgsaUJBQWlCLElBQ2pEN1AsT0FBTzRQLGdCQUFpQixHQUFHO0lBRWpDLE9BQU81UDtBQUNUO0FBRU8sU0FBU2hELHVCQUF1QndDLFFBQVEsRUFBRUMsT0FBTztJQUN0RCxNQUFNUyxhQUFhO0lBRW5CLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTaEgsdUJBQXVCc0csUUFBUSxFQUFFQyxPQUFPO0lBQ3RELE1BQU1VLGFBQWE7SUFFbkIsT0FBT0E7QUFDVDtBQUVPLFNBQVM5SCx1QkFBdUJtSCxRQUFRLEVBQUVDLE9BQU87SUFDdEQsTUFBTW1RLGlCQUFpQnBRLFNBQVNxUSxpQkFBaUIsSUFDM0M1UCxhQUFhMlAsZ0JBQWlCLEdBQUc7SUFFdkMsT0FBTzNQO0FBQ1Q7QUFFTyxTQUFTN0wsdUJBQXVCK00sUUFBUSxFQUFFMUIsT0FBTztJQUN0RCxNQUFNd0ksaUJBQWlCOUcsU0FBUzJPLGlCQUFpQixJQUMzQ3RPLGFBQWFyTiw2QkFBNkI4VCxnQkFBZ0J4STtJQUVoRSxPQUFPK0I7QUFDVDtBQUVPLFNBQVNoRCx1QkFBdUIrRSxXQUFXLEVBQUU5RCxPQUFPO0lBQ3pELElBQUlpRSxVQUFVO0lBRWQsTUFBTVUsY0FBY2IsWUFBWXdNLGNBQWM7SUFFOUMsSUFBSTNMLGdCQUFnQixNQUFNO1FBQ3hCVixVQUFVakYsdUJBQXVCMkYsYUFBYTNFO0lBQ2hEO0lBRUEsT0FBT2lFO0FBQ1Q7QUFFTyxTQUFTL04sdUJBQXVCOFEsYUFBYSxFQUFFaEgsT0FBTztJQUMzRCxNQUFNb0QsWUFBWTRELGNBQWN1SixZQUFZLElBQ3RDaE4sUUFBUXZOLG1CQUFtQm9OLFdBQVdwRDtJQUU1QyxPQUFPdUQ7QUFDVDtBQUVPLFNBQVMxRSx1QkFBdUI4SCxhQUFhLEVBQUUzRyxPQUFPO0lBQzNELE1BQU13USxZQUFZN0osY0FBYzhKLGtCQUFrQixJQUM1QzVKLFFBQVEvSCxtQkFBbUIwUixXQUFXeFE7SUFFNUMsT0FBTzZHO0FBQ1Q7QUFFTyxTQUFTMU0sd0JBQXdCNEYsUUFBUSxFQUFFQyxPQUFPO0lBQ3ZELE1BQU1XLGNBQWM7SUFFcEIsT0FBT0E7QUFDVDtBQUVPLFNBQVNsTCx3QkFBd0IrTixTQUFTLEVBQUV4RCxPQUFPO0lBQ3hELE1BQU00SSxpQkFBaUJwRixVQUFVa04saUJBQWlCLElBQzVDaE4sYUFBYWxPLDZCQUE2Qm9ULGdCQUFnQjVJO0lBRWhFLE9BQU8wRDtBQUNUO0FBRU8sU0FBU3pGLHdCQUF3QjBTLGVBQWUsRUFBRTNRLE9BQU87SUFDOUQsTUFBTWdCLFdBQVcyUCxnQkFBZ0JDLFdBQVcsSUFDdEN6UCxPQUFPNUMsaUJBQWlCeUMsVUFBVWhCO0lBRXhDLE9BQU9tQjtBQUNUO0FBRU8sU0FBU2hOLHlCQUF5QmlQLFNBQVMsRUFBRXBELE9BQU87SUFDekQsTUFBTTZRLGtCQUFrQnpOLFVBQVVxTixrQkFBa0IsSUFDOUNuTixjQUFjcFAsK0JBQStCMmMsaUJBQWlCN1E7SUFFcEUsT0FBT3NEO0FBQ1Q7QUFFTyxTQUFTcEgseUJBQXlCcUksV0FBVyxFQUFFdkUsT0FBTztJQUMzRCxJQUFJc0IsWUFBWTtJQUVoQixNQUFNbUYsZ0JBQWdCbEMsWUFBWTBMLGdCQUFnQjtJQUVsRCxJQUFJeEosa0JBQWtCLE1BQU07UUFDMUJuRixZQUFZbkYsMkJBQTJCc0ssZUFBZXpHO0lBQ3hEO0lBRUEsT0FBT3NCO0FBQ1Q7QUFFTyxTQUFTcEsseUJBQXlCZ1AsWUFBWSxFQUFFbEcsT0FBTztJQUM1RCxNQUFNOFEsZUFBZTVLLGFBQWE2SyxlQUFlLElBQzNDM0ssV0FBVzdILGlCQUFpQnVTLGNBQWM5UTtJQUVoRCxPQUFPb0c7QUFDVDtBQUVPLFNBQVN4SCx5QkFBeUI4SyxlQUFlLEVBQUUxSixPQUFPO0lBQy9ELE1BQU13USxZQUFZOUcsZ0JBQWdCc0gsWUFBWSxJQUN4Q25LLFFBQVEvSCxtQkFBbUIwUixXQUFXeFE7SUFFNUMsT0FBTzZHO0FBQ1Q7QUFFTyxTQUFTN08seUJBQXlCa1MsZ0JBQWdCLEVBQUVsSyxPQUFPO0lBQ2hFLE1BQU1pUixtQkFBbUIvRyxpQkFBaUJHLG1CQUFtQixJQUN2RDlKLE9BQU8wUSxrQkFBbUIsR0FBRztJQUVuQyxPQUFPMVE7QUFDVDtBQUVPLFNBQVM3SSwwQkFBMEIwTCxTQUFTLEVBQUVwRCxPQUFPO0lBQzFELElBQUlxQyxlQUFlO0lBRW5CLE1BQU02SCxtQkFBbUI5RyxVQUFVOE4sbUJBQW1CO0lBRXRELElBQUloSCxxQkFBcUIsTUFBTTtRQUM3QjdILGVBQWV4SyxpQ0FBaUNxUyxrQkFBa0JsSztJQUNwRTtJQUVBLE9BQU9xQztBQUNUO0FBRU8sU0FBUzFLLDBCQUEwQndLLFNBQVMsRUFBRW5DLE9BQU87SUFDMUQsTUFBTWtLLG1CQUFtQi9ILFVBQVUrTyxtQkFBbUIsSUFDaEQ3TyxlQUFleEssaUNBQWlDcVMsa0JBQWtCbEs7SUFFeEUsT0FBT3FDO0FBQ1Q7QUFFTyxTQUFTeE4sMEJBQTBCaVAsV0FBVyxFQUFFOUQsT0FBTztJQUM1RCxJQUFJa0UsYUFBYTtJQUVqQixNQUFNaUUsaUJBQWlCckUsWUFBWXFOLGlCQUFpQjtJQUVwRCxJQUFJaEosbUJBQW1CLE1BQU07UUFDM0JqRSxhQUFhdFAsNkJBQTZCdVQsZ0JBQWdCbkk7SUFDNUQ7SUFFQSxPQUFPa0U7QUFDVDtBQUVPLFNBQVNsSiwwQkFBMEJrTCxZQUFZLEVBQUVsRyxPQUFPO0lBQzdELE1BQU1vUixnQkFBZ0JsTCxhQUFhbUwsZ0JBQWdCLElBQzdDaEwsWUFBWTlILGlCQUFpQjZTLGVBQWVwUjtJQUVsRCxPQUFPcUc7QUFDVDtBQUVPLFNBQVMxUSwwQkFBMEI4USxhQUFhLEVBQUV6RyxPQUFPO0lBQzlELElBQUlzRyxXQUFXO0lBRWYsTUFBTUosZUFBZU8sY0FBYzZLLGVBQWU7SUFFbEQsSUFBSXBMLGlCQUFpQixNQUFNO1FBQ3pCSSxXQUFXNVEseUJBQXlCd1EsY0FBY2xHO0lBQ3BEO0lBRUEsT0FBT3NHO0FBQ1Q7QUFFTyxTQUFTOUgsMEJBQTBCZ00saUJBQWlCLEVBQUV4SyxPQUFPO0lBQ2xFLE1BQU1nQixXQUFXd0osa0JBQWtCb0csV0FBVyxJQUN4Q3pQLE9BQU81QyxpQkFBaUJ5QyxVQUFVaEI7SUFFeEMsT0FBT21CO0FBQ1Q7QUFFTyxTQUFTNUIsMEJBQTBCaUwsaUJBQWlCLEVBQUV4SyxPQUFPO0lBQ2xFLE1BQU1ELFdBQVd5SyxrQkFBa0I4QyxXQUFXLElBQ3hDck4sT0FBT1QsaUJBQWlCTyxVQUFVQztJQUV4QyxPQUFPQztBQUNUO0FBRU8sU0FBU3ZKLDJCQUEyQjZPLFlBQVksRUFBRXZGLE9BQU87SUFDOUQsTUFBTXVSLHFCQUFxQmhNLGFBQWFpTSxxQkFBcUIsSUFDdkQvTCxhQUFhOEwsb0JBQXFCLEdBQUc7SUFFM0MsT0FBTzlMO0FBQ1Q7QUFFTyxTQUFTekosMkJBQTJCdUssYUFBYSxFQUFFdkcsT0FBTztJQUMvRCxJQUFJc0IsWUFBWTtJQUVoQixNQUFNbUYsZ0JBQWdCRixjQUFjMEosZ0JBQWdCO0lBRXBELElBQUl4SixrQkFBa0IsTUFBTTtRQUMxQm5GLFlBQVluRiwyQkFBMkJzSyxlQUFlekc7SUFDeEQ7SUFFQSxPQUFPc0I7QUFDVDtBQUVPLFNBQVMxSywyQkFBMkI2UCxhQUFhLEVBQUV6RyxPQUFPO0lBQy9ELElBQUltSCxZQUFZO0lBRWhCLE1BQU1ILGdCQUFnQlAsY0FBY2dMLGdCQUFnQjtJQUVwRCxJQUFJekssa0JBQWtCLE1BQU07UUFDMUJHLFlBQVl4USwyQkFBMkJxUSxlQUFlaEg7SUFDeEQ7SUFFQSxPQUFPbUg7QUFDVDtBQUVPLFNBQVN6SywyQkFBMkJ1TyxrQkFBa0IsRUFBRWpMLE9BQU87SUFDcEUsSUFBSXlCLE9BQU87SUFFWCxNQUFNaVEsNkJBQTZCekcsbUJBQW1CMEcsVUFBVTtJQUVoRSxJQUFJRCw0QkFBNEI7UUFDOUIsTUFBTXRRLFdBQVc2SixvQkFBcUIsR0FBRztRQUV6Q3hKLE9BQU9oRixpQkFBaUIyRSxVQUFVcEI7SUFDcEM7SUFFQSxPQUFPeUI7QUFDVDtBQUVPLFNBQVNqSiw0QkFBNEJ1SCxRQUFRLEVBQUVDLE9BQU87SUFDM0QsTUFBTVksa0JBQWtCYixTQUFTNlIsa0JBQWtCO0lBRW5ELE9BQU9oUjtBQUNUO0FBRU8sU0FBUzNNLDRCQUE0QitTLGFBQWEsRUFBRWhILE9BQU87SUFDaEUsTUFBTTBJLGlCQUFpQjFCLGNBQWM2SyxpQkFBaUIsSUFDaEQzSyxhQUFhbFQsNkJBQTZCMFUsZ0JBQWdCMUk7SUFFaEUsT0FBT2tIO0FBQ1Q7QUFFTyxTQUFTelEsNEJBQTRCa1IsYUFBYSxFQUFFM0gsT0FBTztJQUNoRSxNQUFNeUYsYUFBYWtDLGNBQWNHLGFBQWE7SUFFOUMsT0FBT3JDO0FBQ1Q7QUFFTyxTQUFTckwsNEJBQTRCc08sY0FBYyxFQUFFMUksT0FBTztJQUNqRSxNQUFNa0ssbUJBQW1CeEIsZUFBZXdJLG1CQUFtQixJQUNyRDNQLFlBQVlqSCw4QkFBOEI0UCxrQkFBa0JsSztJQUVsRSxPQUFPdUI7QUFDVDtBQUVPLFNBQVMxRiw0QkFBNEJ3TSxjQUFjLEVBQUVySSxPQUFPO0lBQ2pFLE1BQU15RyxnQkFBZ0I0QixlQUFlNEgsZ0JBQWdCLElBQy9DM08sWUFBWW5GLDJCQUEyQnNLLGVBQWV6RztJQUU1RCxPQUFPc0I7QUFDVDtBQUVPLFNBQVN4Riw0QkFBNEJnVyxjQUFjLEVBQUU5UixPQUFPO0lBQ2pFLElBQUlzQixZQUFZO0lBRWhCLE1BQU1tRixnQkFBZ0JxTCxlQUFlN0IsZ0JBQWdCO0lBRXJELElBQUl4SixrQkFBa0IsTUFBTTtRQUMxQm5GLFlBQVluRiwyQkFBMkJzSyxlQUFlekc7SUFDeEQ7SUFFQSxPQUFPc0I7QUFDVDtBQUVPLFNBQVMxRiw0QkFBNEI4TSxjQUFjLEVBQUUxSSxPQUFPO0lBQ2pFLElBQUlzQjtJQUVKLE1BQU1tRixnQkFBZ0JpQyxlQUFldUgsZ0JBQWdCO0lBRXJELElBQUl4SixrQkFBa0IsTUFBTTtRQUMxQm5GLFlBQVluRiwyQkFBMkJzSyxlQUFlekc7SUFDeEQ7SUFFQSxPQUFPc0I7QUFDVDtBQUVPLFNBQVNyRiw0QkFBNEI4VixjQUFjLEVBQUUvUixPQUFPO0lBQ2pFLElBQUlzQixZQUFZO0lBRWhCLE1BQU1tRixnQkFBZ0JzTCxlQUFlOUIsZ0JBQWdCO0lBRXJELElBQUl4SixrQkFBa0IsTUFBTTtRQUMxQm5GLFlBQVluRiwyQkFBMkJzSyxlQUFlekc7SUFDeEQ7SUFFQSxPQUFPc0I7QUFDVDtBQUVPLFNBQVN0SSw2QkFBNkJ1TCxXQUFXLEVBQUV2RSxPQUFPO0lBQy9ELElBQUl5RSxnQkFBZ0I7SUFFcEIsTUFBTWtHLG9CQUFvQnBHLFlBQVl5TixvQkFBb0I7SUFFMUQsSUFBSXJILHNCQUFzQixNQUFNO1FBQzlCbEcsZ0JBQWdCeEwsbUNBQW1DMFIsbUJBQW1CM0s7SUFDeEU7SUFFQSxPQUFPeUU7QUFDVDtBQUVPLFNBQVNoSCw2QkFBNkJtSSxZQUFZLEVBQUU1RixPQUFPO0lBQ2hFLE1BQU1pUyxtQkFBbUJyTSxhQUFhc00sbUJBQW1CLElBQ25EcFAsZUFBZXBGLGlDQUFpQ3VVLGtCQUFrQmpTO0lBRXhFLE9BQU84QztBQUNUO0FBRU8sU0FBU3pHLDZCQUE2QmtOLGVBQWUsRUFBRXZKLE9BQU87SUFDbkUsSUFBSXNCLFlBQVk7SUFFaEIsTUFBTW1GLGdCQUFnQjhDLGdCQUFnQjBHLGdCQUFnQjtJQUV0RCxJQUFJeEosa0JBQWtCLE1BQU07UUFDMUJuRixZQUFZbkYsMkJBQTJCc0ssZUFBZXpHO0lBQ3hEO0lBRUEsT0FBT3NCLFdBQVcsR0FBRztBQUN2QjtBQUVPLFNBQVNuRCw2QkFBNkJnTixvQkFBb0IsRUFBRW5MLE9BQU87SUFDeEUsSUFBSW1CLE9BQU87SUFFWCxNQUFNSCxXQUFXbUsscUJBQXFCeUYsV0FBVztJQUVqRCxJQUFJNVAsYUFBYSxNQUFNO1FBQ3JCRyxPQUFPNUMsaUJBQWlCeUMsVUFBVWhCO0lBQ3BDO0lBRUEsT0FBT21CO0FBQ1Q7QUFFTyxTQUFTN0MsNkJBQTZCa04sb0JBQW9CLEVBQUV4TCxPQUFPO0lBQ3hFLE1BQU1nQixXQUFXd0sscUJBQXFCb0YsV0FBVyxJQUMzQ3pQLE9BQU81QyxpQkFBaUJ5QyxVQUFVaEI7SUFFeEMsT0FBT21CO0FBQ1Q7QUFFTyxTQUFTcEUsOEJBQThCNkksWUFBWSxFQUFFNUYsT0FBTztJQUNqRSxNQUFNc0ssb0JBQW9CMUUsYUFBYXVNLG9CQUFvQixJQUNyREMsZ0JBQWdCdFYsbUNBQW1Dd04sbUJBQW1CdEs7SUFFNUUsT0FBT29TO0FBQ1Q7QUFFTyxTQUFTcmEsOEJBQThCME8sYUFBYSxFQUFFekcsT0FBTztJQUNsRSxJQUFJcUMsZUFBZTtJQUVuQixNQUFNNkgsbUJBQW1CekQsY0FBY3lLLG1CQUFtQjtJQUUxRCxJQUFJaEgscUJBQXFCLE1BQU07UUFDN0I3SCxlQUFleEssaUNBQWlDcVMsa0JBQWtCbEs7SUFDcEU7SUFFQSxPQUFPcUM7QUFDVDtBQUVPLFNBQVN2Syw4QkFBOEJnUCxhQUFhLEVBQUU5RyxPQUFPO0lBQ2xFLE1BQU1rSyxtQkFBbUJwRCxjQUFjb0ssbUJBQW1CLElBQ3BEN08sZUFBZXhLLGlDQUFpQ3FTLGtCQUFrQmxLO0lBRXhFLE9BQU9xQztBQUNUO0FBRU8sU0FBUy9ILDhCQUE4QjRQLGdCQUFnQixFQUFFbEssT0FBTztJQUNyRSxNQUFNcVMscUJBQXFCclMsUUFBUWtCLFlBQVksQ0FBQ2dKO0lBRWhELE9BQU9vSSxJQUFBQSxrQkFBUyxFQUFDLENBQUN0UztRQUNoQixNQUFNdVMsa0JBQWtCRixvQkFDbEJ0UixTQUFTd1IsaUJBQ1R6TCxnQkFBZ0IwTCxJQUFBQSxpQ0FBb0IsRUFBQ3pSLFFBQVFmLFVBQzdDdUIsWUFBWWhILDJCQUEyQnVNLGVBQWU5RztRQUU1RCxPQUFPdUI7SUFDVCxHQUFHdkI7QUFDTDtBQUVPLFNBQVM1Qiw4QkFBOEIrTSxvQkFBb0IsRUFBRW5MLE9BQU87SUFDekUsSUFBSW1CLE9BQU87SUFFWCxNQUFNSCxXQUFXbUsscUJBQXFCeUYsV0FBVztJQUVqRCxJQUFJNVAsYUFBYSxNQUFNO1FBQ3JCRyxPQUFPNUMsaUJBQWlCeUMsVUFBVWhCO0lBQ3BDO0lBRUEsT0FBT21CO0FBQ1Q7QUFFTyxTQUFTcEwsOEJBQThCb1Ysb0JBQW9CLEVBQUVuTCxPQUFPO0lBQ3pFLElBQUl1RCxRQUFRO0lBRVosTUFBTUgsWUFBWStILHFCQUFxQm9GLFlBQVk7SUFFbkQsSUFBSW5OLGNBQWMsTUFBTTtRQUN0QkcsUUFBUXZOLG1CQUFtQm9OLFdBQVdwRDtJQUN4QztJQUVBLE9BQU91RDtBQUNUO0FBRU8sU0FBU2xGLDhCQUE4QmdPLHFCQUFxQixFQUFFck0sT0FBTztJQUMxRSxNQUFNZ0IsV0FBV3FMLHNCQUFzQnVFLFdBQVcsSUFDNUN6UCxPQUFPNUMsaUJBQWlCeUMsVUFBVWhCO0lBRXhDLE9BQU9tQjtBQUNUO0FBRU8sU0FBUy9GLCtCQUErQmdHLFFBQVEsRUFBRXBCLE9BQU87SUFDOUQsSUFBSXdCLHFCQUFxQjtJQUV6QixNQUFNdUwseUJBQXlCM0wsU0FBU3FSLHlCQUF5QjtJQUVqRSxJQUFJMUYsMkJBQTJCLE1BQU07UUFDbkN2TCxxQkFBcUJ0Ryw2Q0FBNkM2Uix3QkFBd0IvTTtJQUM1RjtJQUVBLE9BQU93QjtBQUNUO0FBRU8sU0FBU3ZDLCtCQUErQndILGFBQWEsRUFBRXpHLE9BQU87SUFDbkUsSUFBSTBLLGdCQUFnQjtJQUVwQixNQUFNRixvQkFBb0IvRCxjQUFjaU0sb0JBQW9CO0lBRTVELElBQUlsSSxzQkFBc0IsTUFBTTtRQUM5QkUsZ0JBQWdCeEwsbUNBQW1Dc0wsbUJBQW1CeEs7SUFDeEU7SUFFQSxPQUFPMEs7QUFDVDtBQUVPLFNBQVN6VSwrQkFBK0JrVixvQkFBb0IsRUFBRW5MLE9BQU87SUFDMUUsSUFBSXVELFFBQVE7SUFFWixNQUFNSCxZQUFZK0gscUJBQXFCb0YsWUFBWTtJQUVuRCxJQUFJbk4sY0FBYyxNQUFNO1FBQ3RCRyxRQUFRdk4sbUJBQW1Cb04sV0FBV3BEO0lBQ3hDO0lBRUEsT0FBT3VEO0FBQ1Q7QUFFTyxTQUFTaEssK0JBQStCcUosc0JBQXNCLEVBQUU1QyxPQUFPO0lBQzVFLElBQUk0QixRQUFRO0lBRVosTUFBTTRCLFlBQVlaLHVCQUF1QjhNLFlBQVk7SUFFckQsSUFBSWxNLGNBQWMsTUFBTTtRQUN0QjVCLFFBQVF2SSxtQkFBbUJtSyxXQUFXeEQ7SUFDeEM7SUFFQSxPQUFPNEI7QUFDVDtBQUVPLFNBQVMxRSwrQkFBK0J5VixzQkFBc0IsRUFBRTNTLE9BQU87SUFDNUUsSUFBSWlHLFdBQVc7SUFFZixNQUFNMk0scUNBQXFDRCx1QkFBdUJFLGNBQWM7SUFFaEYsSUFBSUQsb0NBQW9DO1FBQ3RDLE1BQU1oTixlQUFlK00sd0JBQXlCLEdBQUc7UUFFakQxTSxXQUFXOUkseUJBQXlCeUksY0FBYzVGO0lBQ3BEO0lBRUEsT0FBT2lHO0FBQ1Q7QUFFTyxTQUFTL0gsK0JBQStCME8sc0JBQXNCLEVBQUU1TSxPQUFPO0lBQzVFLElBQUltQixPQUFPO0lBRVgsTUFBTUgsV0FBVzRMLHVCQUF1QmdFLFdBQVc7SUFFbkQsSUFBSTVQLGFBQWEsTUFBTTtRQUNyQkcsT0FBTzVDLGlCQUFpQnlDLFVBQVVoQjtJQUNwQztJQUVBLE9BQU9tQjtBQUNUO0FBRU8sU0FBU2pKLCtCQUErQitVLHNCQUFzQixFQUFFak4sT0FBTztJQUM1RSxNQUFNTyxPQUFPME0sdUJBQXVCcEYsT0FBTztJQUUzQyxPQUFPdEg7QUFDVDtBQUVPLFNBQVM1SCxnQ0FBZ0NnUyxpQkFBaUIsRUFBRTNLLE9BQU87SUFDeEUsTUFBTThTLGlCQUFpQm5JLGtCQUFrQm9JLGlCQUFpQixJQUNwRGxJLGFBQWFuUyw2QkFBNkJvYSxnQkFBZ0I5UztJQUVoRSxPQUFPNks7QUFDVDtBQUVPLFNBQVMvVSxnQ0FBZ0M4VyxzQkFBc0IsRUFBRTVNLE9BQU87SUFDN0UsSUFBSXVELFFBQVE7SUFFWixNQUFNSCxZQUFZd0osdUJBQXVCMkQsWUFBWTtJQUVyRCxJQUFJbk4sY0FBYyxNQUFNO1FBQ3RCRyxRQUFRdk4sbUJBQW1Cb04sV0FBV3BEO0lBQ3hDO0lBRUEsT0FBT3VEO0FBQ1Q7QUFFTyxTQUFTdE0sZ0NBQWdDMkwsc0JBQXNCLEVBQUU1QyxPQUFPO0lBQzdFLE1BQU0yUCxhQUFhL00sdUJBQXVCZ04sYUFBYSxJQUNqRC9OLFNBQVM5SyxxQkFBcUI0WSxZQUFZM1A7SUFFaEQsT0FBTzZCO0FBQ1Q7QUFFTyxTQUFTM0ksaUNBQWlDcVEsZUFBZSxFQUFFdkosT0FBTztJQUN2RSxJQUFJeUUsZ0JBQWdCO0lBRXBCLE1BQU1rRyxvQkFBb0JwQixnQkFBZ0J5SSxvQkFBb0I7SUFFOUQsSUFBSXJILHNCQUFzQixNQUFNO1FBQzlCbEcsZ0JBQWdCeEwsbUNBQW1DMFIsbUJBQW1CM0s7SUFDeEU7SUFFQSxPQUFPeUU7QUFDVDtBQUVPLFNBQVNsTSxpQ0FBaUM0UyxvQkFBb0IsRUFBRW5MLE9BQU87SUFDNUUsTUFBTXFMLFVBQVVGLHFCQUFxQkcsU0FBUztJQUU5QyxPQUFPRDtBQUNUO0FBRU8sU0FBU3hSLGlDQUFpQzJSLG9CQUFvQixFQUFFeEwsT0FBTztJQUM1RSxNQUFNa0YsZUFBZXNHLHFCQUFxQm9GLFdBQVcsSUFDL0N0TCxXQUFXMUwseUJBQXlCc0wsY0FBY2xGO0lBRXhELE9BQU9zRjtBQUNUO0FBRU8sU0FBUy9QLGtDQUFrQ2tSLGFBQWEsRUFBRXpHLE9BQU87SUFDdEUsSUFBSXVMLG1CQUFtQjtJQUV2QixNQUFNSix1QkFBdUIxRSxjQUFjdU0sdUJBQXVCO0lBRWxFLElBQUk3SCx5QkFBeUIsTUFBTTtRQUNqQ0ksbUJBQW1CalcseUNBQXlDNlYsc0JBQXNCbkw7SUFDcEY7SUFFQSxPQUFPdUw7QUFDVDtBQUVPLFNBQVM5TSxrQ0FBa0NnSSxhQUFhLEVBQUV6RyxPQUFPO0lBQ3RFLElBQUkrTCxtQkFBbUI7SUFFdkIsTUFBTUosdUJBQXVCbEYsY0FBY3dNLHVCQUF1QjtJQUVsRSxJQUFJdEgseUJBQXlCLE1BQU07UUFDakNJLG1CQUFtQnBOLHlDQUF5Q2dOLHNCQUFzQjNMO0lBQ3BGO0lBRUEsT0FBTytMO0FBQ1Q7QUFFTyxTQUFTelQsa0NBQWtDc1Usc0JBQXNCLEVBQUU1TSxPQUFPO0lBQy9FLE1BQU1xTCxVQUFVdUIsdUJBQXVCdEIsU0FBUztJQUVoRCxPQUFPRDtBQUNUO0FBRU8sU0FBU2hNLGtDQUFrQzJPLHlCQUF5QixFQUFFaE8sT0FBTztJQUNsRixNQUFNRCxXQUFXaU8sMEJBQTBCVixXQUFXLElBQ2hEck4sT0FBT1QsaUJBQWlCTyxVQUFVQztJQUV4QyxPQUFPQztBQUNUO0FBRU8sU0FBU2pDLG1DQUFtQzJOLG9CQUFvQixFQUFFM0wsT0FBTztJQUM5RSxNQUFNa1QsaUJBQWlCdkgscUJBQXFCd0gsaUJBQWlCLElBQ3ZEdEgsYUFBYXROLGlCQUFpQjJVLGdCQUFnQmxUO0lBRXBELE9BQU82TDtBQUNUO0FBRU8sU0FBU3pXLG1DQUFtQ3dOLHNCQUFzQixFQUFFNUMsT0FBTztJQUNoRixNQUFNdUcsZ0JBQWdCM0QsdUJBQXVCd1EsZ0JBQWdCLElBQ3ZEdlEsWUFBWTFOLDJCQUEyQm9SLGVBQWV2RztJQUU1RCxPQUFPNkM7QUFDVDtBQUVPLFNBQVNuSCxtQ0FBbUNrSCxzQkFBc0IsRUFBRTVDLE9BQU87SUFDaEYsSUFBSStDLFlBQVk7SUFFaEIsTUFBTTRELGdCQUFnQi9ELHVCQUF1QnlRLGdCQUFnQjtJQUU3RCxJQUFJMU0sa0JBQWtCLE1BQU07UUFDMUI1RCxZQUFZdEgsMkJBQTJCa0wsZUFBZTNHO0lBQ3hEO0lBRUEsT0FBTytDO0FBQ1Q7QUFFTyxTQUFTdkosbUNBQW1DOE4sdUJBQXVCLEVBQUV0SCxPQUFPO0lBQ2pGLE1BQU13RCxZQUFZOEQsd0JBQXdCb0ksWUFBWSxJQUNoRDlOLFFBQVF2SSxtQkFBbUJtSyxXQUFXeEQ7SUFFNUMsT0FBTzRCO0FBQ1Q7QUFFTyxTQUFTOUssbUNBQW1Dd1EsdUJBQXVCLEVBQUV0SCxPQUFPO0lBQ2pGLE1BQU1tQyxZQUFZbUYsd0JBQXdCZ00sWUFBWSxJQUNoRGhSLFFBQVF6TCxtQkFBbUJzTCxXQUFXbkM7SUFFNUMsT0FBT3NDO0FBQ1Q7QUFFTyxTQUFTbE0sbUNBQW1DcVEsYUFBYSxFQUFFekcsT0FBTztJQUN2RSxJQUFJb00sb0JBQW9CO0lBRXhCLE1BQU1KLHdCQUF3QnZGLGNBQWM4TSx3QkFBd0I7SUFFcEUsSUFBSXZILDBCQUEwQixNQUFNO1FBQ2xDSSxvQkFBb0JqVywyQ0FBMkM2Vix1QkFBdUJoTTtJQUN4RjtJQUVBLE9BQU9vTTtBQUNUO0FBRU8sU0FBU3pTLG1DQUFtQzhNLGFBQWEsRUFBRXpHLE9BQU87SUFDdkUsSUFBSXVNLG9CQUFvQjtJQUV4QixNQUFNRix3QkFBd0I1RixjQUFjK00sd0JBQXdCO0lBRXBFLElBQUluSCwwQkFBMEIsTUFBTTtRQUNsQ0Usb0JBQW9CN1MsMkNBQTJDMlMsdUJBQXVCck07SUFDeEY7SUFFQSxPQUFPdU07QUFDVDtBQUVPLFNBQVN2UCxtQ0FBbUN5SixhQUFhLEVBQUV6RyxPQUFPO0lBQ3ZFLElBQUkyTSxvQkFBb0I7SUFFeEIsTUFBTUgsd0JBQXdCL0YsY0FBY2dOLHdCQUF3QjtJQUVwRSxJQUFJakgsMEJBQTBCLE1BQU07UUFDbENHLG9CQUFvQjFQLDJDQUEyQ3VQLHVCQUF1QnhNO0lBQ3hGO0lBRUEsT0FBTzJNO0FBQ1Q7QUFFTyxTQUFTeE4sbUNBQW1DK1AsMEJBQTBCLEVBQUVsUCxPQUFPO0lBQ3BGLE1BQU1ELFdBQVdtUCwyQkFBMkI1QixXQUFXLElBQ2pEck4sT0FBT1QsaUJBQWlCTyxVQUFVQztJQUV4QyxPQUFPQztBQUNUO0FBRU8sU0FBU2IsbUNBQW1DMlAsMEJBQTBCLEVBQUUvTyxPQUFPO0lBQ3BGLE1BQU1ELFdBQVdnUCwyQkFBMkJ6QixXQUFXLElBQ2pEck4sT0FBT1QsaUJBQWlCTyxVQUFVQztJQUV4QyxPQUFPQztBQUNUO0FBRU8sU0FBUy9LLG9DQUFvQ3VSLGFBQWEsRUFBRXpHLE9BQU87SUFBRztJQUMzRSxJQUFJOE0scUJBQXFCO0lBRXpCLE1BQU1GLHlCQUF5Qm5HLGNBQWNpTix5QkFBeUI7SUFFdEUsSUFBSTlHLDJCQUEyQixNQUFNO1FBQ25DRSxxQkFBcUI3WCw2Q0FBNkMyWCx3QkFBd0I1TTtJQUM1RjtJQUVBLE9BQU84TTtBQUNUO0FBRU8sU0FBUzNSLG9DQUFvQ3NMLGFBQWEsRUFBRXpHLE9BQU87SUFDeEUsSUFBSXdCLHFCQUFxQjtJQUV6QixNQUFNdUwseUJBQXlCdEcsY0FBY2dNLHlCQUF5QjtJQUV0RSxJQUFJMUYsMkJBQTJCLE1BQU07UUFDbkN2TCxxQkFBcUJ0Ryw2Q0FBNkM2Uix3QkFBd0IvTTtJQUM1RjtJQUVBLE9BQU93QjtBQUNUO0FBRU8sU0FBU2hGLG9DQUFvQ2dRLHFCQUFxQixFQUFFeE0sT0FBTztJQUNoRixNQUFNMlQsaUJBQWlCbkgsc0JBQXNCb0gsaUJBQWlCLElBQ3hEbEgsYUFBYW5RLDZCQUE2Qm9YLGdCQUFnQjNUO0lBRWhFLE9BQU8wTTtBQUNUO0FBRU8sU0FBUzNRLG9DQUFvQzZRLHNCQUFzQixFQUFFNU0sT0FBTztJQUNqRixNQUFNeUcsZ0JBQWdCbUcsdUJBQXVCcUQsZ0JBQWdCLElBQ3ZEM08sWUFBWW5GLDJCQUEyQnNLLGVBQWV6RztJQUU1RCxPQUFPc0I7QUFDVDtBQUVPLFNBQVM5RixvQ0FBb0N1UixzQkFBc0IsRUFBRS9NLE9BQU87SUFDakYsTUFBTTJHLGdCQUFnQm9HLHVCQUF1QnNHLGdCQUFnQixJQUN2RHRRLFlBQVl0SCwyQkFBMkJrTCxlQUFlM0c7SUFFNUQsT0FBTytDO0FBQ1Q7QUFFTyxTQUFTdkksb0NBQW9DdVMsc0JBQXNCLEVBQUUvTSxPQUFPO0lBQ2pGLE1BQU1rSyxtQkFBbUI2Qyx1QkFBdUJtRSxtQkFBbUIsSUFDN0QzUCxZQUFZakgsOEJBQThCNFAsa0JBQWtCbEs7SUFFbEUsT0FBT3VCO0FBQ1Q7QUFFTyxTQUFTaEwsb0NBQW9DcU0sc0JBQXNCLEVBQUU1QyxPQUFPO0lBQ2pGLE1BQU02VCxZQUFZLEVBQUU7SUFFcEIsT0FBT0E7QUFDVDtBQUVPLFNBQVN2WSxxQ0FBcUN3WSxzQkFBc0IsRUFBRTlULE9BQU87SUFDbEYsTUFBTTJHLGdCQUFnQm1OLHVCQUF1QlQsZ0JBQWdCLElBQ3ZEdFEsWUFBWXhILDRCQUE0Qm9MLGVBQWUzRztJQUU3RCxPQUFPK0M7QUFDVDtBQUVPLFNBQVMxSSxxQ0FBcUN5WixzQkFBc0IsRUFBRTlULE9BQU87SUFDbEYsTUFBTThHLGdCQUFnQmdOLHVCQUF1QjVELGdCQUFnQixJQUN2RDNPLFlBQVloSCwyQkFBMkJ1TSxlQUFlOUc7SUFFNUQsT0FBT3VCO0FBQ1Q7QUFFTyxTQUFTMUQscUNBQXFDbU8scUJBQXFCLEVBQUVoTSxPQUFPO0lBQ2pGLE1BQU0rVCxrQkFBa0IvSCxzQkFBc0JnSSxrQkFBa0IsSUFDMUQ5SCxjQUFjbFcsbUJBQW1CK2QsaUJBQWlCL1Q7SUFFeEQsT0FBT2tNO0FBQ1Q7QUFFTyxTQUFTdk8sc0NBQXNDaUYsc0JBQXNCLEVBQUU1QyxPQUFPO0lBQ25GLE1BQU1pUyxtQkFBbUJyUCx1QkFBdUJzUCxtQkFBbUIsSUFDN0RwUCxlQUFlcEYsaUNBQWlDdVUsa0JBQWtCalM7SUFFeEUsT0FBTzhDO0FBQ1Q7QUFFTyxTQUFTL0gsc0NBQXNDeVQseUJBQXlCLEVBQUV4TyxPQUFPO0lBQ3RGLE1BQU0wTyxXQUFXRiwwQkFBMEJ5RixVQUFVO0lBRXJELE9BQU92RjtBQUNUO0FBRU8sU0FBU3JaLHVDQUF1Q2lTLHVCQUF1QixFQUFFdEgsT0FBTztJQUNyRixNQUFNdUcsZ0JBQWdCZSx3QkFBd0I4TCxnQkFBZ0IsSUFDeER2USxZQUFZMU4sMkJBQTJCb1IsZUFBZXZHO0lBRTVELE9BQU82QztBQUNUO0FBRU8sU0FBUzFKLHdDQUF3Q3dSLGlCQUFpQixFQUFFM0ssT0FBTztJQUNoRixNQUFNaU4seUJBQXlCdEMsa0JBQWtCdUoseUJBQXlCLElBQ3BFcEoscUJBQXFCMVIsNkNBQTZDNlQsd0JBQXdCak47SUFFaEcsT0FBTzhLO0FBQ1Q7QUFFTyxTQUFTaFEsd0NBQXdDNlEsb0JBQW9CLEVBQUUzTCxPQUFPO0lBQ25GLE1BQU1tVSxzQkFBc0J4SSxxQkFBcUJ5SSxzQkFBc0IsSUFDakV0SSxrQkFBa0J2TixpQkFBaUI0VixxQkFBcUJuVTtJQUU5RCxPQUFPOEw7QUFDVDtBQUVPLFNBQVN4Tyx3Q0FBd0MwUSx5QkFBeUIsRUFBRWhPLE9BQU87SUFDeEYsSUFBSVMsYUFBYSxFQUFFO0lBRW5CLE1BQU00VCxZQUFZckcsMEJBQTBCc0csWUFBWTtJQUV4RCxJQUFJRCxjQUFjLE1BQU07UUFDdEIsTUFBTUUsUUFBUTNVLG1CQUFtQnlVLFdBQVdyVTtRQUU1Q1MsYUFBYThULE9BQU8sR0FBRztJQUN6QjtJQUVBLE9BQU85VDtBQUNUO0FBRU8sU0FBU2Ysd0NBQXdDZ08seUJBQXlCLEVBQUUxTixPQUFPO0lBQ3hGLE1BQU0rSSxpQkFBaUIyRSwwQkFBMEI4RyxpQkFBaUIsSUFDNURyTCxhQUFheEosNkJBQTZCb0osZ0JBQWdCL0k7SUFFaEUsT0FBT21KO0FBQ1Q7QUFFTyxTQUFTNVUsd0NBQXdDc1oseUJBQXlCLEVBQUU3TixPQUFPO0lBQ3hGLE1BQU1xSSxpQkFBaUJ3RiwwQkFBMEI0RyxpQkFBaUIsSUFDNURsTSxhQUFhL1QsNkJBQTZCNlQsZ0JBQWdCckk7SUFFaEUsT0FBT3VJO0FBQ1Q7QUFFTyxTQUFTaFIsd0NBQXdDOFgsMkJBQTJCLEVBQUVyUCxPQUFPO0lBQzFGLE1BQU02RSxlQUFld0ssNEJBQTRCcUYsZUFBZSxJQUMxRDFQLFdBQVcxTix5QkFBeUJ1TixjQUFjN0U7SUFFeEQsT0FBT2dGO0FBQ1Q7QUFFTyxTQUFTOUsseUNBQXlDOFQseUJBQXlCLEVBQUVoTyxPQUFPO0lBQ3pGLE1BQU1XLGNBQWNxTiwwQkFBMEJULGFBQWE7SUFFM0QsT0FBTzVNO0FBQ1Q7QUFFTyxTQUFTdEQseUNBQXlDNlIsMEJBQTBCLEVBQUVsUCxPQUFPO0lBQzFGLElBQUlTLGFBQWEsRUFBRTtJQUVuQixNQUFNNFQsWUFBWW5GLDJCQUEyQm9GLFlBQVk7SUFFekQsSUFBSUQsY0FBYyxNQUFNO1FBQ3RCLE1BQU1FLFFBQVEzVSxtQkFBbUJ5VSxXQUFXclU7UUFFNUNTLGFBQWE4VCxPQUFPLEdBQUc7SUFDekI7SUFFQSxPQUFPOVQ7QUFDVDtBQUVPLFNBQVM5RiwwQ0FBMENxUixxQkFBcUIsRUFBRWhNLE9BQU87SUFDdEYsTUFBTTJVLHVCQUF1QjNJLHNCQUFzQjRJLHVCQUF1QixJQUNwRXpJLG1CQUFtQm5XLG1CQUFtQjJlLHNCQUFzQjNVO0lBRWxFLE9BQU9tTTtBQUNUO0FBRU8sU0FBU3JTLDBDQUEwQ3VTLHFCQUFxQixFQUFFck0sT0FBTztJQUN0RixNQUFNd0wsdUJBQXVCYSxzQkFBc0J3SSx1QkFBdUIsSUFDcEVuSixtQkFBbUIzUix5Q0FBeUN5UixzQkFBc0J4TDtJQUV4RixPQUFPMEw7QUFDVDtBQUVPLFNBQVM5TiwwQ0FBMEMwSix1QkFBdUIsRUFBRXRILE9BQU87SUFDeEYsTUFBTWlTLG1CQUFtQjNLLHdCQUF3QjRLLG1CQUFtQixJQUM5RHBQLGVBQWVwRixpQ0FBaUN1VSxrQkFBa0JqUztJQUV4RSxPQUFPOEM7QUFDVDtBQUVPLFNBQVMxRiwwQ0FBMENvUix5QkFBeUIsRUFBRXhPLE9BQU87SUFDMUYsTUFBTW9NLG9CQUFvQi9WLCtDQUErQ21ZLDJCQUEyQnhPLFVBQzlGK0wsbUJBQW1Cck4sOENBQThDOFAsMkJBQTJCeE8sVUFDNUYyTyxlQUFnQnZDLHFCQUFxQkw7SUFFM0MsT0FBTzRDO0FBQ1Q7QUFFTyxTQUFTNVosMENBQTBDZ2EsMEJBQTBCLEVBQUUvTyxPQUFPO0lBQzNGLE1BQU1vSixrQkFBa0IyRiwyQkFBMkIrRixrQkFBa0IsSUFDL0R4TCxjQUFjdFUsK0JBQStCb1UsaUJBQWlCcEo7SUFFcEUsT0FBT3NKO0FBQ1Q7QUFFTyxTQUFTclAsMENBQTBDOFUsMEJBQTBCLEVBQUUvTyxPQUFPO0lBQzNGLE1BQU1XLGNBQWNvTywyQkFBMkJ4QixhQUFhO0lBRTVELE9BQU81TTtBQUNUO0FBRU8sU0FBUzNHLDBDQUEwQ2tWLDBCQUEwQixFQUFFbFAsT0FBTztJQUMzRixNQUFNVyxjQUFjdU8sMkJBQTJCM0IsYUFBYTtJQUU1RCxPQUFPNU07QUFDVDtBQUVPLFNBQVMvSSw0Q0FBNEN5WCwyQkFBMkIsRUFBRXJQLE9BQU87SUFDOUYsTUFBTWtLLG1CQUFtQm1GLDRCQUE0QjZCLG1CQUFtQixJQUNsRTdPLGVBQWV4SyxpQ0FBaUNxUyxrQkFBa0JsSztJQUV4RSxPQUFPcUM7QUFDVDtBQUVPLFNBQVN2RSw2Q0FBNkNxUSx5QkFBeUIsRUFBRW5PLE9BQU87SUFDN0YsTUFBTStVLHNCQUFzQjVHLDBCQUEwQjZHLHNCQUFzQixJQUN0RUMsa0JBQWtCcGQsaUNBQWlDa2QscUJBQXFCL1U7SUFFOUUsT0FBT2lWO0FBQ1Q7QUFFTyxTQUFTbFgsNkNBQTZDeVEseUJBQXlCLEVBQUV4TyxPQUFPO0lBQzdGLE1BQU1rVixzQkFBc0IxRywwQkFBMEIyRyxzQkFBc0IsSUFDdEV2RyxrQkFBa0J6UywyQkFBMkIrWSxxQkFBcUJsVjtJQUV4RSxPQUFPNE87QUFDVDtBQUVPLFNBQVNsUSw4Q0FBOEM4UCx5QkFBeUIsRUFBRXhPLE9BQU87SUFDOUYsSUFBSStMLG1CQUFtQjtJQUV2QixNQUFNSix1QkFBdUI2QywwQkFBMEJ5RSx1QkFBdUI7SUFFOUUsSUFBSXRILHlCQUF5QixNQUFNO1FBQ2pDSSxtQkFBbUJwTix5Q0FBeUNnTixzQkFBc0IzTDtJQUNwRjtJQUVBLE9BQU8rTDtBQUNUO0FBRU8sU0FBUzFWLCtDQUErQ21ZLHlCQUF5QixFQUFFeE8sT0FBTztJQUMvRixJQUFJb00sb0JBQW9CO0lBRXhCLE1BQU1KLHdCQUF3QndDLDBCQUEwQitFLHdCQUF3QjtJQUVoRixJQUFJdkgsMEJBQTBCLE1BQU07UUFDbENJLG9CQUFvQmpXLDJDQUEyQzZWLHVCQUF1QmhNO0lBQ3hGO0lBRUEsT0FBT29NO0FBQ1Q7QUFFTyxTQUFTeFIsa0RBQWtEdVQseUJBQXlCLEVBQUVuTyxPQUFPO0lBQ2xHLE1BQU1vViwyQkFBMkJqSCwwQkFBMEJrSCwyQkFBMkIsSUFDaEYvRyx1QkFBdUIvVCwyQkFBMkI2YSwwQkFBMEJwVjtJQUVsRixPQUFPc087QUFDVDtBQUVPLFNBQVN6VCxrREFBa0QyVCx5QkFBeUIsRUFBRXhPLE9BQU87SUFDbEcsTUFBTXNWLDJCQUEyQjlHLDBCQUEwQitHLDJCQUEyQixJQUNoRjFHLHVCQUF1QjFTLDJCQUEyQm1aLDBCQUEwQnRWO0lBRWxGLE9BQU82TztBQUNUO0FBRU8sU0FBUy9QLG1CQUFtQjBSLFNBQVMsRUFBRXhRLE9BQU87SUFDbkQsTUFBTTZHLFFBQVEySixVQUFVZ0YsR0FBRyxDQUFDLENBQUN4VTtRQUMzQixNQUFNRyxPQUFPNUMsaUJBQWlCeUMsVUFBVWhCO1FBRXhDLE9BQU9tQjtJQUNUO0lBRUEsT0FBTzBGO0FBQ1Q7QUFFTyxTQUFTakgsbUJBQW1CeVUsU0FBUyxFQUFFclUsT0FBTztJQUNuRCxNQUFNeVYsWUFBWXBCLFVBQVVxQixZQUFZLElBQ2xDbkIsUUFBUWtCLFVBQVVELEdBQUcsQ0FBQyxDQUFDelY7UUFDckIsTUFBTUUsT0FBT1QsaUJBQWlCTyxVQUFVQztRQUV4QyxPQUFPQztJQUNUO0lBRU4sT0FBT3NVO0FBQ1Q7QUFFTyxTQUFTeGQscUJBQXFCNFksVUFBVSxFQUFFM1AsT0FBTztJQUN0RCxNQUFNNkIsU0FBUzhOLFdBQVc2RixHQUFHLENBQUMsQ0FBQ3JUO1FBQzdCLE1BQU1HLFFBQVF6TCxtQkFBbUJzTCxXQUFXbkM7UUFFNUMsT0FBT3NDO0lBQ1Q7SUFFQSxPQUFPVDtBQUNUO0FBRU8sU0FBUy9JLHlCQUF5QitXLFlBQVksRUFBRTdQLE9BQU87SUFDNUQsTUFBTThCLFdBQVcrTixhQUFhMkYsR0FBRyxDQUFDLENBQUNqUjtRQUNqQyxNQUFNRyxVQUFVN0wsdUJBQXVCMEwsYUFBYXZFO1FBRXBELE9BQU8wRTtJQUNUO0lBRUEsT0FBTzVDO0FBQ1Q7QUFFTyxTQUFTdkYsNkJBQTZCb1gsY0FBYyxFQUFFM1QsT0FBTztJQUNsRSxNQUFNME0sYUFBYWlILGVBQWU2QixHQUFHLENBQUMsQ0FBQy9PO1FBQ3JDLE1BQU1uRixZQUFZbkYsMkJBQTJCc0ssZUFBZXpHO1FBRTVELE9BQU9zQjtJQUNUO0lBRUEsT0FBT29MO0FBQ1Q7QUFFTyxTQUFTaFUsNkJBQTZCb2EsY0FBYyxFQUFFOVMsT0FBTztJQUNsRSxNQUFNNkssYUFBYWlJLGVBQWUwQyxHQUFHLENBQUMsQ0FBQzdOO1FBQ3JDLE1BQU1JLFlBQVl0UCwyQkFBMkJrUCxlQUFlM0g7UUFFNUQsT0FBTytIO0lBQ1Q7SUFFQSxPQUFPOEM7QUFDVDtBQUVPLFNBQVN2VSw4QkFBOEJ5TixlQUFlLEVBQUUvRCxPQUFPO0lBQ3BFLE1BQU1nRCxhQUFhZSxnQkFBZ0J5UixHQUFHLENBQUMsQ0FBQ3hOO1FBQ3RDLE1BQU0yTixhQUFhbmYsNkJBQTZCd1IsZUFBZWhJO1FBRS9ELE9BQU8yVjtJQUNUO0lBRUEsT0FBTzNTO0FBQ1Q7QUFFTyxTQUFTOU8sK0JBQStCMmMsZUFBZSxFQUFFN1EsT0FBTztJQUNyRSxNQUFNc0QsY0FBY3VOLGdCQUFnQjJFLEdBQUcsQ0FBQyxDQUFDOU07UUFDdkMsTUFBTXhCLGFBQWFsVCw2QkFBNkIwVSxnQkFBZ0IxSTtRQUVoRSxPQUFPa0g7SUFDVDtJQUVBLE9BQU81RDtBQUNUO0FBRU8sU0FBUzVGLGlDQUFpQ3VVLGdCQUFnQixFQUFFalMsT0FBTztJQUN4RSxNQUFNOEMsZUFBZW1QLGlCQUFpQnVELEdBQUcsQ0FBQyxDQUFDak07UUFDekMsTUFBTUUsY0FBY2pNLCtCQUErQitMLGlCQUFpQnZKO1FBRXBFLE9BQU95SjtJQUNUO0lBRUEsT0FBTzNHO0FBQ1Q7QUFFTyxTQUFTbEcsbUNBQW1DZ00sY0FBYyxFQUFFNUksT0FBTztJQUN4RSxNQUFNNFYsc0JBQXNCaE4sZUFBZWlOLHNCQUFzQixJQUMzRC9NLG1CQUFtQjhNLG9CQUFvQkosR0FBRyxDQUFDLENBQUN2SztRQUMxQyxNQUFNQyxpQkFBaUJ2TyxxQ0FBcUNzTyxvQkFBb0JqTDtRQUVoRixPQUFPa0w7SUFDVDtJQUVOLE9BQU9wQztBQUNUO0FBRU8sU0FBU2pNLHNDQUFzQ3lOLGlCQUFpQixFQUFFdEssT0FBTztJQUM5RSxNQUFNNFYsc0JBQXNCdEwsa0JBQWtCdUwsc0JBQXNCLElBQzlEL00sbUJBQW1COE0sb0JBQW9CSixHQUFHLENBQUMsQ0FBQ3ZLO1FBQzFDLE1BQU1DLGlCQUFpQnZPLHFDQUFxQ3NPLG9CQUFvQmpMO1FBRWhGLE9BQU9rTDtJQUNUO0lBRU4sT0FBT3BDO0FBQ1QifQ==