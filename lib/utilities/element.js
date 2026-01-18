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
    get conclusinoFromConclusionNode () {
        return conclusinoFromConclusionNode;
    },
    get conclusionFromConclusionNode () {
        return conclusionFromConclusionNode;
    },
    get conclusionFromPremiseNode () {
        return conclusionFromPremiseNode;
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
    get frameFromFrameSubstitutionNode () {
        return frameFromFrameSubstitutionNode;
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
    get hypothesesFromHypothesisNodes () {
        return hypothesesFromHypothesisNodes;
    },
    get hypothesisFromHypothesisNode () {
        return hypothesisFromHypothesisNode;
    },
    get hyppothesisFromHypothesisNode () {
        return hyppothesisFromHypothesisNode;
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
    get metavariableFromAssumptionNode () {
        return metavariableFromAssumptionNode;
    },
    get metavariableFromFrameNode () {
        return metavariableFromFrameNode;
    },
    get metavariableFromFrameSubstitutionNode () {
        return metavariableFromFrameSubstitutionNode;
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
    get metavariableFromReferenceSubstitutionNode () {
        return metavariableFromReferenceSubstitutionNode;
    },
    get metavariableFromStatementNode () {
        return metavariableFromStatementNode;
    },
    get metavariableFromStatementSubstitutionNode () {
        return metavariableFromStatementSubstitutionNode;
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
    get propertiesFromComplexTypeDeclarationNode () {
        return propertiesFromComplexTypeDeclarationNode;
    },
    get propertiesFromPropertyDeclarationNodes () {
        return propertiesFromPropertyDeclarationNodes;
    },
    get propertyAssertionFromPropertyAssertionNode () {
        return propertyAssertionFromPropertyAssertionNode;
    },
    get propertyAssertionFromStatementNode () {
        return propertyAssertionFromStatementNode;
    },
    get propertyFromPropertyDeclarationNode () {
        return propertyFromPropertyDeclarationNode;
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
    get referenceFromProcedureCallNode () {
        return referenceFromProcedureCallNode;
    },
    get referenceFromReferenceNode () {
        return referenceFromReferenceNode;
    },
    get referenceFromReferenceSubstitutionNode () {
        return referenceFromReferenceSubstitutionNode;
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
    get statementFromCombinatorDeclarationNode () {
        return statementFromCombinatorDeclarationNode;
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
    get statementFromStatementSubstitutionNode () {
        return statementFromStatementSubstitutionNode;
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
    get substitutionFromParameterNode () {
        return substitutionFromParameterNode;
    },
    get superTypesFromComplexTypeDeclarationNode () {
        return superTypesFromComplexTypeDeclarationNode;
    },
    get superTypesFromSuperTypeNodes () {
        return superTypesFromSuperTypeNodes;
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
    get termFromConstructorDeclarationNode () {
        return termFromConstructorDeclarationNode;
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
    get termFromTermSubstitutionNode () {
        return termFromTermSubstitutionNode;
    },
    get termFromTypeAssertionNode () {
        return termFromTypeAssertionNode;
    },
    get termSubstitutionFromStatementNode () {
        return termSubstitutionFromStatementNode;
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
    get typeFromPropertyDeclarationNode () {
        return typeFromPropertyDeclarationNode;
    },
    get typeFromSimpleTypeDeclarationNode () {
        return typeFromSimpleTypeDeclarationNode;
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
    get variableFromTermNode () {
        return variableFromTermNode;
    },
    get variableFromTermSubstitutionNode () {
        return variableFromTermSubstitutionNode;
    },
    get variableFromVariableDeclarationNode () {
        return variableFromVariableDeclarationNode;
    },
    get variableFromVariableNode () {
        return variableFromVariableNode;
    }
});
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _fragment = require("./fragment");
var _types = require("../types");
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
        var baseType = (0, _types.baseTypeFromNothing)();
        type = baseType; ///
    } else {
        var Type = _elements.default.Type, typeName = typeNode.getTypeName(), typePrefixName = typeNode.getTypePrefixName(), nominalTypeName = typeNode.getNominalTypeName(), string = nominalTypeName, node = typeNode, name = typeName, prefixName = typePrefixName, superTypes = null, properties = null, provisional = null;
        type = new Type(context, string, node, name, prefixName, superTypes, properties, provisional);
    }
    return type;
}
function termFromTermNode(termNode, context) {
    var Term = _elements.default.Term, node = termNode, string = context.nodeAsString(node), type = null, term = new Term(context, string, node, type);
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
    var Lemma = _elements.default.Lemma, topLevelAsssertionNode = lemmaNode, proof = proofFromTopLevelAssertionNode(topLevelAsssertionNode, context), labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context), deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context), suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context), signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context), hypotheses = [], topLevelAsssertionString = (0, _string.topLevelAssertionStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = lemmaNode, string = topLevelAsssertionString, lemma = new Lemma(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return lemma;
}
function frameFromFrameNode(frameNode, context) {
    var Frame = _elements.default.Frame, node = frameNode, string = context.nodeAsString(node), assumptions = assumptionsFromFrameNode(frameNode, context), frame = new Frame(context, string, node, assumptions);
    return frame;
}
function proofFromProofNode(proofNode, context) {
    var Proof = _elements.default.Proof, node = proofNode, string = null, derivation = derivationFromProofNode(proofNode, context), proof = new Proof(context, string, node, derivation);
    return proof;
}
function axiomFromAxiomNode(axiomNode, context) {
    var Axiom = _elements.default.Axiom, topLevelAsssertionNode = axiomNode, proof = null, labels = labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context), deduction = deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context), suppositions = suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context), signature = signatureFromTopLevelAssertionNode(topLevelAsssertionNode, context), hypotheses = [], topLevelAsssertionString = (0, _string.topLevelAssertionStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = axiomNode, string = topLevelAsssertionString, axiom = new Axiom(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return axiom;
}
function sectionFromSectionNode(sectionNode, context) {
    var hypothesisNodes = sectionNode.getHypothesisNodes(), hypotheses = hypothesesFromHypothesisNodes(hypothesisNodes, context), axiom = axiomFromSectionNode(sectionNode, context), lemma = lemmaFromSectionNode(sectionNode, context), theorem = theoremFromSectionNode(sectionNode, context), conjecture = conjectureFromSectionNode(sectionNode, context), sectionString = (0, _string.sectionStringFromHypothesesTopLevelAssertion)(hypotheses, axiom, lemma, theorem, conjecture, context), node = sectionNode, string = sectionString, section = new Section(context, string, node, hypotheses, axiom, lemma, theorem, conjecture);
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
function equalityFromEqualityNode(equalityNode, context) {
    var Equality1 = _elements.default.Equality, node = equalityNode, string = context.nodeAsString(node), leftTermNode = equalityNode.getLeftTermNode(), rightTermNode = equalityNode.getRightTermNode(), leftTerm = termFromTermNode(leftTermNode, context), rightTerm = termFromTermNode(rightTermNode, context), equality = new Equality1(string, leftTerm, rightTerm);
    return equality;
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
function conclusinoFromConclusionNode(conclusinoNode, context) {
    var Conclusion = _elements.default.Conclusion, node = conclusinoNode, string = context.nodeAsString(node), statement = statementFromConclusionNode(conclusinoNode, context), conclusino = new Conclusion(context, string, node, statement);
    return conclusino;
}
function assumptionFromAssumptionNode(assumptionNode, context) {
    var Assumption = _elements.default.Assumption, node = assumptionNode, string = context.nodeAsString(node), statement = statementFromAssumptionNode(assumptionNode, context), reference = referenceFromAssumptionNode(assumptionNode, context), assumption = new Assumption(context, string, node, statement, reference);
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
function hyppothesisFromHypothesisNode(hypothesisNode, context) {
    var Hypothesis = _elements.default.Hypothesis, node = hypothesisNode, string = context.nodeAsString(node), statement = statementFromHypothesisNode(hypothesisNode, context), hypothesis = new Hypothesis(context, string, node, statement);
    return hypothesis;
}
function substitutionFromParameterNode(substitutionNode, context) {
    var Substitution = _elements.default.Substitution, node = substitutionNode, string = context.nodeAsString(node), substitutionName = substitutionNode.getSubstitutionName(), name = substitutionName, substitution = new Substitution(context, string, node, name);
    return substitution;
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
    var TermSubstitution = _elements.default.TermSubstitution, node = termSubstitutionNode, string = context.nodeAsString(node), term = termFromTermSubstitutionNode(termSubstitutionNode, context), variable = variableFromTermSubstitutionNode(termSubstitutionNode, context), termSubstitution = new TermSubstitution(context, string, node, term, variable);
    return termSubstitution;
}
function frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    var FrameSubstitution = _elements.default.FrameSubstitution, node = frameSubstitutionNode, string = context.nodeAsString(node), frame = frameFromFrameSubstitutionNode(frameSubstitutionNode, context), metavariable = metavariableFromFrameSubstitutionNode(frameSubstitutionNode, context), frameSubstitution = new FrameSubstitution(context, string, node, frame, metavariable);
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
    var VariableDeclaration = _elements.default.VariableDeclaration, node = variableDeclarationNode, string = context.nodeAsString(node), typeNode = variableDeclarationNode.getTypeNode(), provisional = variableDeclarationNode.isProvisional(), variableNode = variableDeclarationNode.getVariableNode(), type = typeFromTypeNode(typeNode, context), variable = variableFromVariableNode(variableNode, context);
    type.setProvisional(provisional);
    variable.setType(type);
    var variableDeclaration = new VariableDeclaration(context, string, node, variable);
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
function statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, substitution, context) {
    if (context === undefined) {
        context = substitution; ///
        substitution = null;
    }
    var StatementSubstitution = _elements.default.StatementSubstitution, node = statementSubstitutionNode, string = context.nodeAsString(node), resolved = resolvedFromStatementSubstitutionNode(statementSubstitutionNode, substitution, context), statement = statementFromStatementSubstitutionNode(statementSubstitutionNode, context), metavariable = metavariableFromStatementSubstitutionNode(statementSubstitutionNode, context), statementSubstitution = new StatementSubstitution(context, string, node, resolved, statement, metavariable, substitution);
    return statementSubstitution;
}
function referenceSubstitutionFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
    var ReferenceSubstitution = _elements.default.ReferenceSubstitution, node = referenceSubstitutionNode, string = context.nodeAsString(node), reference = referenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context), metavariable = metavariableFromReferenceSubstitutionNode(referenceSubstitutionNode, context), referenceSubstitution = new ReferenceSubstitution(context, string, node, reference, metavariable);
    return referenceSubstitution;
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
    var MetavariableDeclaration = _elements.default.MetavariableDeclaration, node = metavariableDeclarationNode, string = context.nodeAsString(node), metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariable = metavariableFromMetavariableDeclarationNode(metavariableDeclarationNode, context);
    metavariable.setMetaType(metaType);
    var metavariableDeclaration = new MetavariableDeclaration(context, string, node, metavariable);
    return metavariableDeclaration;
}
function proofFromRuleNode(ruleNode, context) {
    var proof = null;
    var proofNode = ruleNode.getProofNode();
    if (proofNode !== null) {
        proof = proofFromProofNode(proofNode, context);
    }
    return proof;
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
function variableFromTermNode(termNode, context) {
    var variable = null;
    var variableNode = termNode.getVariableNode();
    if (variableNode !== null) {
        variable = variableFromVariableNode(variableNode, context);
    }
    return variable;
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
    var conclusion = null;
    var conclusionNode = ruleNode.getConclusionNode();
    if (conclusionNode !== null) {
        conclusion = conclusionFromConclusionNode(conclusionNode, context);
    }
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
    var frame = null;
    var frameNode = judgementNode.getFrameNode();
    if (frameNode !== null) {
        frame = frameFromFrameNode(frameNode, context);
    }
    return frame;
}
function derivationFromProofNode(proofNode, context) {
    var derivation = null;
    var derivationNode = proofNode.getDerivationNode();
    if (derivationNode !== null) {
        derivation = derivationFromDerivationNode(derivationNode, context);
    }
    return derivation;
}
function termFromConstructorNode(ocnstructorNode, context) {
    var term = null;
    var termNode = ocnstructorNode.getTermNode();
    if (termNode !== null) {
        term = termFromTermNode(termNode, context);
    }
    return term;
}
function statementFromPremiseNode(premiseNode, context) {
    var statement = null;
    var statementNode = premiseNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
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
    var metavariable = null;
    var metavariableNode = labelNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }
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
function conclusionFromPremiseNode(premiseNode, context) {
    var conclusion = null;
    var conclusionNode = premiseNode.getConclusionNode();
    if (conclusionNode !== null) {
        conclusion = conclusionFromConclusionNode(conclusionNode, context);
    }
    return conclusion;
}
function termFromTypeAssertionNode(typeAssertionNode, context) {
    var term = null;
    var termNode = typeAssertionNode.getTermNode();
    if (termNode !== null) {
        term = termFromTermNode(termNode, context);
    }
    return term;
}
function typeFromTypeAssertionNode(typeAssertionNode, context) {
    var type = null;
    var typeNode = typeAssertionNode.getTypeNode();
    if (typeNode !== null) {
        type = typeFromTypeNode(typeNode, context);
    }
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
    var assumption = null;
    var assumptionNode = judgementNode.getAssumptionNode();
    if (assumptionNode !== null) {
        assumption = assumptionFromAssumptionNode(assumptionNode, context);
    }
    return assumption;
}
function statementFromCombinatorNode(combinatorNode, context) {
    var statement = null;
    var statementNode = combinatorNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
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
    var statement = null;
    var statementNode = assumptionNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function referenceFromAssumptionNode(assumptionNode, context) {
    var reference = null;
    var metavariableNode = assumptionNode.getMetavariableNode();
    if (metavariableNode !== null) {
        reference = referenceFromMetavariableNode(metavariableNode, context);
    }
    return reference;
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
    var term = null;
    var termNode = propertyRelationNode.getTermNode();
    if (termNode !== null) {
        term = termFromTermNode(termNode, context);
    }
    return term;
}
function termFromTermSubstitutionNode(termSubstitutionNode, context) {
    var term = null;
    var termNode = termSubstitutionNode.getTermNode();
    if (termNode !== null) {
        term = termFromTermNode(termNode, context);
    }
    return term;
}
function subDerivationFromSubproofNode(subproofNode, context) {
    var subDerviation = null;
    var subDerivationNode = subproofNode.getSubDerivationNode();
    if (subDerivationNode !== null) {
        subDerviation = subDerivationFromSubDerivationNode(subDerivationNode, context);
    }
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
    var metavariable = null;
    var metavariableNode = referenceNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }
    return metavariable;
}
function referenceFromMetavariableNode(metavariableNode, context) {
    var metavariableString = context.nodeAsString(metavariableNode);
    return (0, _fragment.withinFragment)(function(context) {
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
    var term = null;
    var termNode = propertyAssertionNode.getTermNode();
    if (termNode !== null) {
        term = termFromTermNode(termNode, context);
    }
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
function metavariableFromAssumptionNode(assumptionNode, context) {
    var metavariable = null;
    var metavariableNode = assumptionNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }
    return metavariable;
}
function referenceFromProcedureCallNode(procedureCallNode, context) {
    var reference = null;
    var referenceNode = procedureCallNode.getReferenceNode();
    if (referenceNode !== null) {
        reference = referenceFromReferenceNode(referenceNode, context);
    }
    return reference;
}
function frameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    var frame = null;
    var frameNode = frameSubstitutionNode.getFrameNode();
    if (frameNode !== null) {
        frame = frameFromFrameNode(frameNode, context);
    }
    return frame;
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
function typeFromPropertyDeclarationNode(propertyDeclarationNode, context) {
    var type = null;
    var typeNode = propertyDeclarationNode.getTypeNode();
    if (typeNode !== null) {
        type = typeFromTypeNode(typeNode, context);
    }
    return type;
}
function frameFromContainedAssertionNode(containedAssertionNode, context) {
    var frame = null;
    var frameNode = containedAssertionNode.getFrameNode();
    if (frameNode !== null) {
        frame = frameFromFrameNode(frameNode, context);
    }
    return frame;
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
    var property = null;
    var propertyNode = propertyRelationNode.getTermNode();
    if (propertyNode !== null) {
        property = propertyFromPropertyNode(propertyNode, context);
    }
    return property;
}
function variableFromTermSubstitutionNode(termSubstitutionNode, context) {
    var variable = null;
    var variableNode = termSubstitutionNode.getVariableNode();
    if (variableNode !== null) {
        variable = variableFromVariableNode(variableNode, context);
    }
    return variable;
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
    var type = null;
    var typeNode = simpleTypeDeclarationNode.getTypeNode();
    if (typeNode !== null) {
        type = typeFromTypeNode(typeNode, context);
    }
    return type;
}
function deductionFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
    var deduction = null;
    var deductionNode = topLevelAsssertionNode.getDeductionNode();
    if (deductionNode !== null) {
        deduction = deductionFromDeductionNode(deductionNode, context);
    }
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
    var proof = null;
    var proofNode = metaLemmaMetathoremNode.getProofNode();
    if (proofNode !== null) {
        proof = proofFromProofNode(proofNode, context);
    }
    return proof;
}
function labelFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
    var label = null;
    var labelNode = metaLemmaMetathoremNode.getLabelNode();
    if (labelNode !== null) {
        label = labelFromLabelNode(labelNode, context);
    }
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
function stepsOrSubproofsFromDerivationNode(derivationNode, context) {
    var stepOrSubproofNodes = derivationNode.getStepOrSubproofNodes(), stepsOrSubproofs = stepOrSubproofNodes.map(function(stepOrSubproofNode) {
        var stepOrSubproof = stepsOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context);
        return stepOrSubproof;
    });
    return stepsOrSubproofs;
}
function termFromConstructorDeclarationNode(constructorDeclarationNode, context) {
    var term = null;
    var termNode = constructorDeclarationNode.getTermNode();
    if (termNode !== null) {
        term = termFromTermNode(termNode, context);
    }
    return term;
}
function typeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var type = null;
    var typeNode = complexTypeDeclarationNode.getTypeNode();
    if (typeNode !== null) {
        type = typeFromTypeNode(typeNode, context);
    }
    return type;
}
function typeFromConstructorDeclarationNode(constructorDeclarationNode, context) {
    var type;
    var typeNode = constructorDeclarationNode.getTypeNode();
    if (typeNode !== null) {
        type = typeFromTypeNode(typeNode, context);
    } else {
        var baseType = (0, _types.baseTypeFromNothing)();
        type = baseType; ///
    }
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
function statementFromContainedAssertionNode(containedAssertionNode, context) {
    var statement = null;
    var statementNode = containedAssertionNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function propertyFromPropertyDeclarationNode(propertyDeclarationNode, context) {
    var property = null;
    var propertyNode = propertyDeclarationNode.getPropertyNode();
    if (propertyNode !== null) {
        property = propertyFromPropertyNode(propertyNode, context);
    }
    return property;
}
function signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    var signature = null;
    var signatureNode = satisfiesAssertionNode.getSignatureNode();
    if (signatureNode !== null) {
        signature = signatureFromSignatureNode(signatureNode, context);
    }
    return signature;
}
function referenceFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    var reference = null;
    var metavariableNode = satisfiesAssertionNode.getMetavariableNode();
    if (metavariableNode !== null) {
        reference = referenceFromMetavariableNode(metavariableNode, context);
    }
    return reference;
}
function variableFromVariableDeclarationNode(variableDeclarationNode, context) {
    var variable = null;
    var variableNode = variableDeclarationNode.getVariableNode();
    if (variableNode !== null) {
        variable = variableFromVariableNode(variableNode, context);
    }
    return variable;
}
function stepsOrSubproofsFromSubDerivationNode(subDerivationNode, context) {
    var stepOrSubproofNodes = subDerivationNode.getStepOrSubproofNodes(), stepsOrSubproofs = stepOrSubproofNodes.map(function(stepOrSubproofNode) {
        var stepOrSubproof = stepsOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context);
        return stepOrSubproof;
    });
    return stepsOrSubproofs;
}
function metavariableFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    var metavariable = null;
    var metavariableNode = frameSubstitutionNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }
    return metavariable;
}
function prefixedFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    var prefixed = simpleTypeDeclarationNode.isPrefixed();
    return prefixed;
}
function resolvedFromStatementSubstitutionNode(statementSubstitutionNode, substitution, context) {
    var resolved = substitution === null;
    return resolved;
}
function prefixedFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var prefixed = complexTypeDeclarationNode.isPrefixed();
    return prefixed;
}
function deductionFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
    var deduction = null;
    var deductionNode = metaLemmaMetathoremNode.getDeductionNode();
    if (deductionNode !== null) {
        deduction = deductionFromDeductionNode(deductionNode, context);
    }
    return deduction;
}
function statementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    var statement = null;
    var statementNode = statementSubstitutionNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function referenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
    var reference = null;
    var referenceNode = referenceSubstitutionNode.getReferenceNode();
    if (referenceNode !== null) {
        reference = referenceFromReferenceNode(referenceNode, context);
    }
    return reference;
}
function statementFromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
    var statement = null;
    var statementNode = combinatorDeclarationNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function procedureReferenceFromProcedureCallNode(procedureCallNode, context) {
    var procedureReference = null;
    var procedureReferenceNode = procedureCallNode.getProcedureReferenceNode();
    if (procedureReferenceNode !== null) {
        procedureReference = procedureReferenceFromProcedureReferenceNode(procedureReferenceNode, context);
    }
    return procedureReference;
}
function typePrefixFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
    var typePrefix = null;
    var typePrefixNode = typePrefixDeclarationNode.getTypePrefixNode();
    if (typePrefixNode !== null) {
        typePrefix = typePrefixFromTypePrefixNode(typePrefixNode, context);
    }
    return typePrefix;
}
function combinatorFromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
    var combinator = null;
    var combinatorNode = combinatorDeclarationNode.getCombinatorNode();
    if (combinatorNode !== null) {
        combinator = combinatorFromCombinatorNode(combinatorNode, context);
    }
    return combinator;
}
function metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    var metaType = null;
    var metaTypeNode = metavariableDeclarationNode.getMetaTypeNode();
    if (metaTypeNode !== null) {
        metaType = metaTypeFromMetaTypeNode(metaTypeNode, context);
    }
    return metaType;
}
function propertyRelationFromPropertyAssertionNode(propertyAssertionNode, context) {
    var propertyRelation = null;
    var propertyRelationNode = propertyAssertionNode.getPropertyRelationNode();
    if (propertyRelationNode !== null) {
        propertyRelation = propertyRelationFromPropertyRelationNode(propertyRelationNode, context);
    }
    return propertyRelation;
}
function metavariableFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    var metavariable = null;
    var metavariableNode = statementSubstitutionNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }
    return metavariable;
}
function metavariableFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
    var metavariable = null;
    var metavariableNode = referenceSubstitutionNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }
    return metavariable;
}
function constructorFromConstructorDeclarationNode(constructorDeclarationNode, context) {
    var constructor = null;
    var constructorNode = constructorDeclarationNode.getConstructorNode();
    if (constructorNode !== null) {
        constructor = constructorFromConstructorNode(constructorNode, context);
    }
    return constructor;
}
function metavariableFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    var metavariable = null;
    var metavariableNode = metavariableDeclarationNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }
    return metavariable;
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
function superTypesFromSuperTypeNodes(superTypeNodes, context) {
    var superTypes = superTypeNodes.map(function(superTypeNode) {
        var typeNode = superTypeNode, type = typeFromTypeNode(typeNode, context), superType = type; ///
        return superType;
    }), superTypesLength = superTypes.length;
    if (superTypesLength === 0) {
        var baseType = (0, _types.baseTypeFromNothing)(), superType = baseType; ///
        superTypes.push(superType);
    }
    return superTypes;
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
function propertiesFromPropertyDeclarationNodes(propertyDeclarationNodes, context) {
    var properties = propertyDeclarationNodes.map(function(propertyDeclarationNode) {
        var property = propertyFromPropertyDeclarationNode(propertyDeclarationNode, context);
        return property;
    });
    return properties;
}
function labelsFromRuleNode(ruleNode, context) {
    var labelNodes = ruleNode.getLabelNodes(), labels = labelsFromLabelNodes(labelNodes, context);
    return labels;
}
function premisesFromRuleNode(ruleNode, context) {
    var premiseNodes = ruleNode.getPremiseNodes(), premises = premisesFromPremiseNodes(premiseNodes, context);
    return premises;
}
function termsFromSignatureNode(signatureNode, context) {
    var termNodes = signatureNode.getAssumptionNodes(), terms = termsFromTermNodes(termNodes, context);
    return terms;
}
function assumptionsFromFrameNode(frameNode, context) {
    var assumptionNodes = frameNode.getAssumptionNodes(), assumptions = assumptionsFromAssumptionNodes(assumptionNodes, context);
    return assumptions;
}
function termsFromEquivalenceNode(equivalenceNode, context) {
    var termNodes = equivalenceNode.getTermNodes(), terms = termsFromTermNodes(termNodes, context);
    return terms;
}
function suppositionsFromSubproofNode(subproofNode, context) {
    var suppositionNodes = subproofNode.getSuppositionNodes(), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);
    return suppositions;
}
function parametersFromProcedureCallNode(procedureCallNode, context) {
    var parameterNodes = procedureCallNode.getParameterNodes(), parameters = parametersFromParameterNodes(parameterNodes, context);
    return parameters;
}
function labelsFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
    var labelNodes = topLevelAsssertionNode.getLabelNodes(), labels = labelsFromLabelNodes(labelNodes, context);
    return labels;
}
function statementsFromSubproofAssertionNode(subproofAssertionNode, context) {
    var statementNodes = subproofAssertionNode.getStatementNodes(), statements = statementsFromStatementNodes(statementNodes, context);
    return statements;
}
function suppositionsFromTopLevelAssertionNode(topLevelAsssertionNode, context) {
    var suppositionNodes = topLevelAsssertionNode.getSuppositionNodes(), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);
    return suppositions;
}
function propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var propertyDeclarationNodes = complexTypeDeclarationNode.getPropertyDeclarationNodes(), properties = propertiesFromPropertyDeclarationNodes(propertyDeclarationNodes, context);
    return properties;
}
function superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var superTypeNodes = complexTypeDeclarationNode.getSuperTypeNodes(), superTypes = superTypesFromSuperTypeNodes(superTypeNodes, context);
    return superTypes;
}
function suppositionsFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context) {
    var suppositionNodes = metaLemmaMetathoremNode.getSuppositionNodes(), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);
    return suppositions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyB3aXRoaW5GcmFnbWVudCB9IGZyb20gXCIuL2ZyYWdtZW50XCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVJlZmVyZW5jZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSB9IGZyb20gXCIuLi9tZXRhVHlwZXNcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zLFxuICAgICAgICAgcnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24sXG4gICAgICAgICBzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNUb3BMZXZlbEFzc2VydGlvbixcbiAgICAgICAgIHN1YnByb29mU3RyaW5nRnJvbVN1cHBvc2l0aW9uc0FuZFN1YkRlcml2YXRpb24sXG4gICAgICAgICBwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMsXG4gICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24sXG4gICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZTtcblxuICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgIHR5cGUgPSBiYXNlVHlwZTsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBub21pbmFsVHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gdHlwZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGVwTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwID0gbmV3IFN0ZXAoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSdWxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJ1bGVTdHJpbmcgPSBydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSxcbiAgICAgICAgbm9kZSA9IHJ1bGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IHJ1bGVTdHJpbmcsICAvLy9cbiAgICAgICAgcnVsZSA9IG5ldyBSdWxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvb2YsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gIHJldHVybiBydWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbmV3IExhYmVsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXJyb3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGVycm9yID0gbmV3IEVycm9yKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFGcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExlbW1hIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSA9IGxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG5vZGUgPSBsZW1tYU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBsZW1tYSA9IG5ldyBMZW1tYShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiBsZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucyk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb29mTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIGRlcml2YXRpb24gPSBkZXJpdmF0aW9uRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9vZiA9IG5ldyBQcm9vZihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGRlcml2YXRpb24pO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBeGlvbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBheGlvbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IGF4aW9tTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbkZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2lzTm9kZXMgPSBzZWN0aW9uTm9kZS5nZXRIeXBvdGhlc2lzTm9kZXMoKSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCksXG4gICAgICAgIGF4aW9tID0gYXhpb21Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZW1tYSA9IGxlbW1hRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNlY3Rpb25TdHJpbmcgPSBzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNUb3BMZXZlbEFzc2VydGlvbihoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUsIGNvbnRleHQpLFxuICAgICAgICBub2RlID0gc2VjdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBzZWN0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlKTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByZW1pc2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gcHJlbWlzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gdGhlb3JlbU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICB0aGVvcmVtID0gbmV3IFRoZW9yZW0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXR5RnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcXVhbGl0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcXVhbGl0eU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgIGxlZnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShzdHJpbmcsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICBtZXRhVHlwZSA9IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb3BlcnR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5vZGUuZ2V0UHJvcGVydHlOYW1lKCksXG4gICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBwcm9wZXJ0eU5hbWUsICAvLy9cbiAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBub21pbmFsVHlwZU5hbWUpO1xuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mTm9kZSwgLy8vXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbihzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdWJwcm9vZlN0cmluZywgIC8vL1xuICAgICAgICBzdWJwcm9vZiA9IG5ldyBTdWJwcm9vZihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbik7XG5cbiAgcmV0dXJuIHN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRFcXVhbGl0eU5vZGUoKTtcblxuICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpO1xuXG4gICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcbiAgfVxuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gbmV3IERlZHVjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaWduYXR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2lnbmF0dXJlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudEZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBKdWRnZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGp1ZGdlbWVudCA9IG5ldyBKdWRnZW1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBmcmFtZSwgYXNzdW1wdGlvbik7XG5cbiAgcmV0dXJuIGp1ZGdlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlKG1ldGFMZW1tYU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhTGVtbWEgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSA9IG1ldGFMZW1tYU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBzdWJzdGl0dXRpb25zID0gbnVsbCxcbiAgICAgICAgbm9kZSA9IG1ldGFMZW1tYU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBtZXRhTGVtbWEgPSBuZXcgTWV0YUxlbW1hKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgcmV0dXJuIG1ldGFMZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gcGFyYW1ldGVyTm9kZS5nZXROYW1lKCksXG4gICAgICAgIGlkZW50aWZpZXIgPSBwYXJhbWV0ZXJOb2RlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIGlkZW50aWZpZXIpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBIeXBvdGhzaXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gaHlwb3RoZXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlciA9IG5ldyBIeXBvdGhzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBjb25qZWN0dXJlTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG5vZGUgPSBjb25qZWN0dXJlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIGNvbmplY3R1cmUgPSBuZXcgQ29uamVjdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiBjb25qZWN0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tYmluYXRvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbmNsdXNpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW5vRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpbm9Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25jbHVzaW5vTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lub05vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW5vID0gbmV3IENvbmNsdXNpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb25jbHVzaW5vO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IG5ldyBBc3N1bXB0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlcml2YXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVyaXZhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZXJpdmF0aW9uID0gbmV3IERlcml2YXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlUHJlZml4ID0gbmV3IFR5cGVQcmVmaXgoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cHBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgSHlwb3RoZXNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBoeXBvdGhlc2lzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2lzID0gbmV3IEh5cG90aGVzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBoeXBvdGhlc2lzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25Gcm9tUGFyYW1ldGVyTm9kZShzdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICBub2RlID0gc3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgc3Vic3RpdHV0aW9uTmFtZSA9IHN1YnN0aXR1dGlvbk5vZGUuZ2V0U3Vic3RpdHV0aW9uTmFtZSgpLFxuICAgIG5hbWUgPSBzdWJzdGl0dXRpb25OYW1lLCAgLy8vXG4gICAgc3Vic3RpdHV0aW9uID0gbmV3IFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uc3RydWN0b3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdXBwb3NpdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVxdWl2YWxlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVxdWl2YWxlbmNlTm9kZSwgLy8vXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICBzdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZywgLy8vXG4gICAgICAgIGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtRnJvbU1ldGF0aGVvcmVtTm9kZShtZXRhdGhlb3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdGVob3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YXRoZW9yZW1Ob2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG51bGwsXG4gICAgICAgIG5vZGUgPSBtZXRhTGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgbWV0YXRoZW9yZW0gPSBuZXcgTWV0YXRlaG9yZW0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIG1ldGFUeXBlID0gbnVsbCxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUsIG1ldGFUeXBlKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YkRlcml2YXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3ViRGVyaXZhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YkRlcml2YXRpb24gPSBuZXcgU3ViRGVyaXZhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0ZXBzT3JTdWJwcm9vZnMpO1xuXG4gIHJldHVybiBzdWJEZXJpdmF0aW9uO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZUFzc2VydGlvbiA9IG5ldyBUeXBlQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhwcm9jZWR1cmVSZWZlcmVuY2UsIHBhcmFtZXRlcnMpLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nLCAvLy9cbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXAgPSBzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJwcm9vZiA9IHN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IChzdGVwIHx8IHN1YnByb29mKTtcblxuICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVmaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlSZWxhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IG5ldyBQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvcGVydHksIHRlcm0pO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHZhcmlhYmxlKTtcblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBmcmFtZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gbmV3IFByb3BlcnR5QXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29udGFpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBuZXcgQ29udGFpbmVkQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTYXRpc2ZpZXNBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBuZXcgU2F0aXNmaWVzQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc2lnbmF0dXJlLCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZVJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHByb3Zpc2lvbmFsID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHR5cGUuc2V0UHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gIHZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG5cbiAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUpO1xuXG4gIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVQcmVmaXhEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksICAvLy9cbiAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uID0gbmV3IFR5cGVQcmVmaXhEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGVQcmVmaXgpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4RGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tYmluYXRvckRlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uID0gbmV3IENvbWJpbmF0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGNvbWJpbmF0b3IpO1xuXG4gIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2ltcGxlVHlwZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlZml4ZWQgPSBwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb24gPSBuZXcgU2ltcGxlVHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgcHJlZml4ZWQpO1xuXG4gIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlc29sdmVkID0gcmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBuZXcgUmVmZXJlbmNlU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVmZXJlbmNlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29uc3RydWN0b3IpO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbXBsZXhUeXBlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlZml4ZWQgPSBwcmVmaXhlZEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBuZXcgQ29tcGxleFR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHByZWZpeGVkKTtcblxuICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBtZXRhdmFyaWFibGUuc2V0TWV0YVR5cGUobWV0YVR5cGUpO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHByb29mTm9kZSA9IHJ1bGVOb2RlLmdldFByb29mTm9kZSgpO1xuXG4gIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGF4aW9tID0gbnVsbDtcblxuICBjb25zdCBheGlvbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRBeGlvbU5vZGUoKTtcblxuICBpZiAoYXhpb21Ob2RlICE9PSBudWxsKSB7XG4gICAgYXhpb20gPSBheGlvbUZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBheGlvbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsZW1tYSA9IG51bGw7XG5cbiAgY29uc3QgbGVtbWFOb2RlID0gc2VjdGlvbk5vZGUuZ2V0TGVtbWFOb2RlKCk7XG5cbiAgaWYgKGxlbW1hTm9kZSAhPT0gbnVsbCkge1xuICAgIGxlbW1hID0gbGVtbWFGcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGVwTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHN0ZXBOb2RlLmdldFJlZmVyZW5jZU5vZGUoKTtcblxuICBpZiAocmVmZXJlbmNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbmNsdXNpb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbmNsdXNpb25Ob2RlID0gcnVsZU5vZGUuZ2V0Q29uY2x1c2lvbk5vZGUoKTtcblxuICBpZiAoY29uY2x1c2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRoZW9yZW0gPSBudWxsO1xuXG4gIGNvbnN0IHRoZW9yZW1Ob2RlID0gc2VjdGlvbk5vZGUuZ2V0VGhlb3JlbU5vZGUoKTtcblxuICBpZiAodGhlb3JlbU5vZGUgIT09IG51bGwpIHtcbiAgICB0aGVvcmVtID0gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmF0aW9uRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlcml2YXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGRlcml2YXRpb25Ob2RlID0gcHJvb2ZOb2RlLmdldERlcml2YXRpb25Ob2RlKCk7XG5cbiAgaWYgKGRlcml2YXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVyaXZhdGlvbiA9IGRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlcml2YXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShvY25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gb2Nuc3RydWN0b3JOb2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByZW1pc2VOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb25qZWN0dXJlID0gbnVsbDtcblxuICBjb25zdCBjb25qZWN0dXJlTm9kZSA9IHNlY3Rpb25Ob2RlLmdldENvbmplY3R1cmVOb2RlKCk7XG5cbiAgaWYgKGNvbmplY3R1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmplY3R1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb25jbHVzaW9uID0gbnVsbDtcblxuICBjb25zdCBjb25jbHVzaW9uTm9kZSA9IHByZW1pc2VOb2RlLmdldENvbmNsdXNpb25Ob2RlKCk7XG5cbiAgaWYgKGNvbmNsdXNpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBkZWR1Y3Rpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGp1ZGdlbWVudCA9IG51bGw7XG5cbiAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0SnVkZ2VtZW50Tm9kZSgpO1xuXG4gIGlmIChqdWRnZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4ganVkZ2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwID0gbnVsbDtcblxuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZS5pc1N0ZXBOb2RlKCk7XG5cbiAgaWYgKHN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlKSB7XG4gICAgY29uc3Qgc3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGU7ICAvLy9cblxuICAgIHN0ZXAgPSBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGFzc3VtcHRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0ganVkZ2VtZW50Tm9kZS5nZXRBc3N1bXB0aW9uTm9kZSgpO1xuXG4gIGlmIChhc3N1bXB0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lub05vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpbm9Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGh5cG90aGVzaXNOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gcHJlbWlzZU5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50OyAvLy9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3ViRGVydmlhdGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc3ViRGVyaXZhdGlvbk5vZGUgPSBzdWJwcm9vZk5vZGUuZ2V0U3ViRGVyaXZhdGlvbk5vZGUoKTtcblxuICBpZiAoc3ViRGVyaXZhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJEZXJ2aWF0aW9uID0gc3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3ViRGVydmlhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIHJldHVybiB3aXRoaW5GcmFnbWVudCgoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZywgLy8vXG4gICAgICAgICAgc3RyaW5nID0gcmVmZXJlbmNlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0ZXBOb2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VHlwZUFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFByb29mTm9kZSgpO1xuXG4gIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN1YnByb29mT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mID0gbnVsbDtcblxuICBjb25zdCBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlID0gc3VicHJvb2ZPclN1YnByb29mTm9kZS5pc1N1YnByb29mTm9kZSgpO1xuXG4gIGlmIChzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZPclN1YnByb29mTm9kZTsgIC8vL1xuXG4gICAgc3VicHJvb2YgPSBzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dClcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBzdXBwb3NpdGlvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eSA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAocHJvcGVydHlOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldERlZmluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZHVjdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpO1xuXG4gIGlmIChkZWR1Y3Rpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZU5vZGUgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKTtcblxuICBpZiAoc2lnbmF0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxhYmVsID0gbnVsbDtcblxuICBjb25zdCBsYWJlbE5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRMYWJlbE5vZGUoKTtcblxuICBpZiAobGFiZWxOb2RlICE9PSBudWxsKSB7XG4gICAgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5QXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IGRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICB0eXBlID0gYmFzZVR5cGU7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkgezBcbiAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29udGFpbmVkQXNzZXJ0aW9uID0gY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eSA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGUuZ2V0UHJvcGVydHlOb2RlKCk7XG5cbiAgaWYgKHByb3BlcnR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKTtcblxuICBpZiAoc2lnbmF0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IHN1YkRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeGVkRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVmaXhlZCA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcmVmaXhlZCgpO1xuXG4gIHJldHVybiBwcmVmaXhlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlc29sdmVkID0gKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlZml4ZWQgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5pc1ByZWZpeGVkKCk7XG5cbiAgcmV0dXJuIHByZWZpeGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZHVjdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldERlZHVjdGlvbk5vZGUoKTtcblxuICBpZiAoZGVkdWN0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlUmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVSZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVQcmVmaXggPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVQcmVmaXhOb2RlID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZS5nZXRUeXBlUHJlZml4Tm9kZSgpO1xuXG4gIGlmICh0eXBlUHJlZml4Tm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbWJpbmF0b3IgPSBudWxsO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3JOb2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZS5nZXRDb21iaW5hdG9yTm9kZSgpO1xuXG4gIGlmIChjb21iaW5hdG9yTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YVR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGFUeXBlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhVHlwZU5vZGUoKTtcblxuICBpZiAobWV0YVR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvcGVydHlSZWxhdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKTtcblxuICBpZiAocHJvcGVydHlSZWxhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29uc3RydWN0b3IgPSBudWxsO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9yTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldENvbnN0cnVjdG9yTm9kZSgpO1xuXG4gIGlmIChjb25zdHJ1Y3Rvck5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHtcbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlbWlzZXMgPSBwcmVtaXNlTm9kZXMubWFwKChwcmVtaXNlTm9kZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2UgPSBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzKHN0YXRlbWVudE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21TdXBlclR5cGVOb2RlcyhzdXBlclR5cGVOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVzID0gc3VwZXJUeXBlTm9kZXMubWFwKChzdXBlclR5cGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBzdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gdHlwZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSksXG4gICAgICAgIHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IGJhc2VUeXBlOyAvLy9cblxuICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzZXMgPSBoeXBvdGhlc2lzTm9kZXMubWFwKChoeXBvdGhlc2VOb2RlKSA9PiB7XG4gICAgY29uc3QgaHlwb3RoZXNpcyA9IGh5cG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbk5vZGVzLm1hcCgoYXNzdW1wdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0aWVzID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLm1hcCgocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlcyA9IHJ1bGVOb2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VOb2RlcyA9IHJ1bGVOb2RlLmdldFByZW1pc2VOb2RlcygpLFxuICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZXMgPSBzaWduYXR1cmVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2Rlcyhhc3N1bXB0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gZXF1aXZhbGVuY2VOb2RlLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBzdWJwcm9vZk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGVzID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZXMoKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMoc3RhdGVtZW50Tm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlcyhwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVOb2RlcyA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFN1cGVyVHlwZU5vZGVzKCksXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbVN1cGVyVHlwZU5vZGVzKHN1cGVyVHlwZU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZSIsImFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2RlcyIsImFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZSIsImF4aW9tRnJvbUF4aW9tTm9kZSIsImF4aW9tRnJvbVNlY3Rpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbmNsdXNpbm9Gcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbkZyb21QcmVtaXNlTm9kZSIsImNvbmNsdXNpb25Gcm9tUnVsZU5vZGUiLCJjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlIiwiY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJkZXJpdmF0aW9uRnJvbURlcml2YXRpb25Ob2RlIiwiZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUiLCJlcXVhbGl0eUZyb21FcXVhbGl0eU5vZGUiLCJlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlIiwiZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJhbWVGcm9tRnJhbWVOb2RlIiwiZnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyIsImh5cG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUiLCJoeXBwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZSIsImlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlIiwianVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsImxhYmVsRnJvbUxhYmVsTm9kZSIsImxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJsYWJlbHNGcm9tTGFiZWxOb2RlcyIsImxhYmVsc0Zyb21SdWxlTm9kZSIsImxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJsZW1tYUZyb21MZW1tYU5vZGUiLCJsZW1tYUZyb21TZWN0aW9uTm9kZSIsIm1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlIiwibWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlIiwibWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbUFzc3VtcHRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlIiwibWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJlbWlzZUZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyIsInByZW1pc2VzRnJvbVJ1bGVOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwicHJvb2ZGcm9tUHJvb2ZOb2RlIiwicHJvb2ZGcm9tUnVsZU5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwicHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnRpZXNGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlOb2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21TdGVwTm9kZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwicmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInJ1bGVGcm9tUnVsZU5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlIiwic2VjdGlvbkZyb21TZWN0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUiLCJzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZSIsInN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZSIsInN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUiLCJzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50RnJvbVN0ZXBOb2RlIiwic3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyIsInN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcHNPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUiLCJzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN1YnByb29mRnJvbVN1YnByb29mTm9kZSIsInN1YnN0aXR1dGlvbkZyb21QYXJhbWV0ZXJOb2RlIiwic3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZXNGcm9tU3VwZXJUeXBlTm9kZXMiLCJzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlIiwic3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwic3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwidGVybUZyb21Db25zdHJ1Y3Rvck5vZGUiLCJ0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwidGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZSIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJ0aGVvcmVtRnJvbVNlY3Rpb25Ob2RlIiwidGhlb3JlbUZyb21UaGVvcmVtTm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21UeXBlTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21UZXJtTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwiVHlwZSIsImVsZW1lbnRzIiwidHlwZU5hbWUiLCJnZXRUeXBlTmFtZSIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInByZWZpeE5hbWUiLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwidGVybU5vZGUiLCJUZXJtIiwibm9kZUFzU3RyaW5nIiwidGVybSIsInN0ZXBOb2RlIiwiU3RlcCIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsInN0ZXAiLCJydWxlTm9kZSIsIlJ1bGUiLCJwcm9vZiIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsInJ1bGVTdHJpbmciLCJydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbiIsInJ1bGUiLCJsYWJlbE5vZGUiLCJMYWJlbCIsIm1ldGF2YXJpYWJsZSIsImxhYmVsIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJlcnJvciIsImxlbW1hTm9kZSIsIkxlbW1hIiwidG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSIsImRlZHVjdGlvbiIsInN1cHBvc2l0aW9ucyIsInNpZ25hdHVyZSIsImh5cG90aGVzZXMiLCJ0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmciLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJsZW1tYSIsImZyYW1lTm9kZSIsIkZyYW1lIiwiYXNzdW1wdGlvbnMiLCJmcmFtZSIsInByb29mTm9kZSIsIlByb29mIiwiZGVyaXZhdGlvbiIsImF4aW9tTm9kZSIsIkF4aW9tIiwiYXhpb20iLCJzZWN0aW9uTm9kZSIsImh5cG90aGVzaXNOb2RlcyIsImdldEh5cG90aGVzaXNOb2RlcyIsInRoZW9yZW0iLCJjb25qZWN0dXJlIiwic2VjdGlvblN0cmluZyIsInNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uIiwic2VjdGlvbiIsIlNlY3Rpb24iLCJwcmVtaXNlTm9kZSIsIlByZW1pc2UiLCJwcm9jZWR1cmVDYWxsIiwicHJlbWlzZSIsInRoZW9yZW1Ob2RlIiwiVGhlb3JlbSIsImVxdWFsaXR5Tm9kZSIsIkVxdWFsaXR5IiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImVxdWFsaXR5IiwibWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsInByb3BlcnR5Tm9kZSIsIlByb3BlcnR5IiwicHJvcGVydHlOYW1lIiwiZ2V0UHJvcGVydHlOYW1lIiwicHJvcGVydHkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsImlkZW50aWZpZXIiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsInZhcmlhYmxlIiwic3VicHJvb2ZOb2RlIiwiU3VicHJvb2YiLCJzdWJEZXJpdmF0aW9uIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZlN0cmluZ0Zyb21TdXBwb3NpdGlvbnNBbmRTdWJEZXJpdmF0aW9uIiwic3VicHJvb2YiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0RXF1YWxpdHlOb2RlIiwibGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwicmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsImRlZHVjdGlvbk5vZGUiLCJEZWR1Y3Rpb24iLCJTdGF0ZW1lbnQiLCJzaWduYXR1cmVOb2RlIiwiU2lnbmF0dXJlIiwidGVybXMiLCJyZWZlcmVuY2VOb2RlIiwiUmVmZXJlbmNlIiwianVkZ2VtZW50Tm9kZSIsIkp1ZGdlbWVudCIsImFzc3VtcHRpb24iLCJqdWRnZW1lbnQiLCJtZXRhTGVtbWFOb2RlIiwiTWV0YUxlbW1hIiwibWV0YUxlbW1hTWV0YXRob3JlbU5vZGUiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJzdWJzdGl0dXRpb25zIiwibWV0YUxlbW1hIiwicGFyYW1ldGVyTm9kZSIsIlBhcmFtZXRlciIsImdldE5hbWUiLCJnZXRJZGVudGlmaWVyIiwicGFyYW1ldGVyIiwiaHlwb3RoZXNlTm9kZSIsIkh5cG90aHNpcyIsImNvbmplY3R1cmVOb2RlIiwiQ29uamVjdHVyZSIsImNvbWJpbmF0b3JOb2RlIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJjb25jbHVzaW9uTm9kZSIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW5vTm9kZSIsImNvbmNsdXNpbm8iLCJhc3N1bXB0aW9uTm9kZSIsIkFzc3VtcHRpb24iLCJkZXJpdmF0aW9uTm9kZSIsIkRlcml2YXRpb24iLCJzdGVwc09yU3VicHJvb2ZzIiwidHlwZVByZWZpeE5vZGUiLCJUeXBlUHJlZml4IiwidGVybUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVGcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlUHJlZml4IiwiaHlwb3RoZXNpc05vZGUiLCJIeXBvdGhlc2lzIiwiaHlwb3RoZXNpcyIsInN1YnN0aXR1dGlvbk5vZGUiLCJTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25OYW1lIiwiZ2V0U3Vic3RpdHV0aW9uTmFtZSIsInN1YnN0aXR1dGlvbiIsImNvbnN0cnVjdG9yTm9kZSIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJzdXBwb3NpdGlvbk5vZGUiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uIiwiZXF1aXZhbGVuY2VOb2RlIiwiRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZVN0cmluZyIsImVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zIiwiZXF1aXZhbGVuY2UiLCJtZXRhdGhlb3JlbU5vZGUiLCJNZXRhdGVob3JlbSIsIm1ldGF0aGVvcmVtIiwibWV0YXZhcmlhYmxlTm9kZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwic3ViRGVyaXZhdGlvbk5vZGUiLCJTdWJEZXJpdmF0aW9uIiwidHlwZUFzc2VydGlvbk5vZGUiLCJUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbiIsInByb2NlZHVyZUNhbGxOb2RlIiwiUHJvY2VkdXJlQ2FsbCIsInBhcmFtZXRlcnMiLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwicHJvY2VkdXJlQ2FsbFN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzIiwic3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcE9yU3VicHJvb2YiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIkRlZmluZWRBc3NlcnRpb24iLCJuZWdhdGVkIiwiaXNOZWdhdGVkIiwiZGVmaW5lZEFzc2VydGlvbiIsInByb3BlcnR5UmVsYXRpb25Ob2RlIiwiUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsIlByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJTdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJDb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwicHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwiZ2V0VHlwZU5vZGUiLCJpc1Byb3Zpc2lvbmFsIiwiZ2V0VmFyaWFibGVOb2RlIiwic2V0UHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJUeXBlUHJlZml4RGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInByZWZpeGVkIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInVuZGVmaW5lZCIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInJlc29sdmVkIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJzZXRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiZ2V0UHJvb2ZOb2RlIiwiZ2V0QXhpb21Ob2RlIiwiZ2V0TGVtbWFOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXRDb25jbHVzaW9uTm9kZSIsImdldFRoZW9yZW1Ob2RlIiwiZ2V0RnJhbWVOb2RlIiwiZ2V0RGVyaXZhdGlvbk5vZGUiLCJvY25zdHJ1Y3Rvck5vZGUiLCJnZXRUZXJtTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRDb25qZWN0dXJlTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsImdldEp1ZGdlbWVudE5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSIsImlzU3RlcE5vZGUiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwic3ViRGVydmlhdGlvbiIsImdldFN1YkRlcml2YXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwid2l0aGluRnJhZ21lbnQiLCJyZWZlcmVuY2VTdHJpbmciLCJpbnN0YW50aWF0ZVJlZmVyZW5jZSIsImdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJnZXRUeXBlQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mT3JTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlIiwiaXNTdWJwcm9vZk5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXREZWR1Y3Rpb25Ob2RlIiwiZ2V0U2lnbmF0dXJlTm9kZSIsImdldExhYmVsTm9kZSIsImdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN0ZXBPclN1YnByb29mTm9kZXMiLCJnZXRTdGVwT3JTdWJwcm9vZk5vZGVzIiwibWFwIiwiZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImdldFByb3BlcnR5Tm9kZSIsImlzUHJlZml4ZWQiLCJnZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwiZ2V0VHlwZVByZWZpeE5vZGUiLCJnZXRDb21iaW5hdG9yTm9kZSIsImdldE1ldGFUeXBlTm9kZSIsImdldFByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZ2V0Q29uc3RydWN0b3JOb2RlIiwidGVybU5vZGVzIiwibGFiZWxOb2RlcyIsInByZW1pc2VOb2RlcyIsInN0YXRlbWVudE5vZGVzIiwic3VwZXJUeXBlTm9kZXMiLCJzdXBlclR5cGVOb2RlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsInB1c2giLCJwYXJhbWV0ZXJOb2RlcyIsImFzc3VtcHRpb25Ob2RlcyIsInN1cHBvc2l0aW9uTm9kZXMiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJnZXRMYWJlbE5vZGVzIiwiZ2V0UHJlbWlzZU5vZGVzIiwiZ2V0QXNzdW1wdGlvbk5vZGVzIiwiZ2V0VGVybU5vZGVzIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsImdldFBhcmFtZXRlck5vZGVzIiwiZ2V0U3RhdGVtZW50Tm9kZXMiLCJnZXRQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJnZXRTdXBlclR5cGVOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBaVpnQkE7ZUFBQUE7O1FBdW5CQUM7ZUFBQUE7O1FBcTRCQUM7ZUFBQUE7O1FBbURBQztlQUFBQTs7UUExekRBQztlQUFBQTs7UUF5b0JBQztlQUFBQTs7UUFqR0FDO2VBQUFBOztRQTJqQ0FDO2VBQUFBOztRQXQzQ0FDO2VBQUFBOztRQXVYQUM7ZUFBQUE7O1FBbldBQztlQUFBQTs7UUFWQUM7ZUFBQUE7O1FBMGpCQUM7ZUFBQUE7O1FBNUdBQztlQUFBQTs7UUF6ZUFDO2VBQUFBOztRQXlrQkFDO2VBQUFBOztRQTNNQUM7ZUFBQUE7O1FBcWtDQUM7ZUFBQUE7O1FBLzFDQUM7ZUFBQUE7O1FBeUtBQztlQUFBQTs7UUFxN0JBQztlQUFBQTs7UUF6eENBQztlQUFBQTs7UUFrcENBQztlQUFBQTs7UUFvUUFDO2VBQUFBOztRQXBuQ0FDO2VBQUFBOztRQTQwQkFDO2VBQUFBOztRQTc5QkFDO2VBQUFBOztRQW1kQUM7ZUFBQUE7O1FBN3FCQUM7ZUFBQUE7O1FBd0RBQztlQUFBQTs7UUFpT0FDO2VBQUFBOztRQW5ZQUM7ZUFBQUE7O1FBaXZDQUM7ZUFBQUE7O1FBNUlBQztlQUFBQTs7UUEza0NBQztlQUFBQTs7UUFtcENBQztlQUFBQTs7UUFsYUFDO2VBQUFBOztRQXBSQUM7ZUFBQUE7O1FBODNCQUM7ZUFBQUE7O1FBc2JBQztl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