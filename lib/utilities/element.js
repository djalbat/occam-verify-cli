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
var _fragment = /*#__PURE__*/ _interop_require_default(require("../context/fragment"));
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
    var Term = _elements.default.Term, node = termNode, string = context.nodeAsString(node), type = null;
    context = null;
    var term = new Term(context, string, node, type);
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
    var Statement = _elements.default.Statement, node = statementNode, string = context.nodeAsString(node);
    context = null;
    var statement = new Statement(context, string, node);
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
function referenceFromMetavariableNode(metavariableNode, context) {
    var metavariableString = context.nodeAsString(metavariableNode), referenceString = metavariableString, string = referenceString, fragmentContext = _fragment.default.fromNothing(context);
    context = fragmentContext; ///
    var referenceNode = (0, _instantiate.instantiateReference)(string, context), reference = referenceFromReferenceNode(referenceNode, context);
    return reference;
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
function nameFromProcedureReferenceNode(procedureReferenceNode, context) {
    var name = procedureReferenceNode.getName();
    return name;
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
function prefixedFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    var prefixed = simpleTypeDeclarationNode.isPrefixed();
    return prefixed;
}
function prefixedFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var prefixed = complexTypeDeclarationNode.isPrefixed();
    return prefixed;
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
function statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    var StatementSubstitution = _elements.default.StatementSubstitution, node = statementSubstitutionNode, string = context.nodeAsString(node), resolved = true, statement = statementFromStatementSubstitutionNode(statementSubstitutionNode, context), metavariable = metavariableFromStatementSubstitutionNode(statementSubstitutionNode, context), substitution = null, statementSubstitution = new StatementSubstitution(context, string, node, resolved, statement, metavariable, substitution);
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
function metavariableFromFrameNode(frameNode, context) {
    var metavariable = null;
    var metavariableNode = frameNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }
    return metavariable;
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
function assumptionFromJudgementNode(judgementNode, context) {
    var assumption = null;
    var assumptionNode = judgementNode.getAssumptionNode();
    if (assumptionNode !== null) {
        assumption = assumptionFromAssumptionNode(assumptionNode, context);
    }
    return assumption;
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
function metavariableFromStatementNode(statementNode, context) {
    var metavariable = null;
    var metavariableNode = statementNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }
    return metavariable;
}
function subDerivationFromSubproofNode(subproofNode, context) {
    var subDerviation = null;
    var subDerivationNode = subproofNode.getSubDerivationNode();
    if (subDerivationNode !== null) {
        subDerviation = subDerivationFromSubDerivationNode(subDerivationNode, context);
    }
    return subDerviation;
}
function metavariableFromReferenceNode(referenceNode, context) {
    var metavariable = null;
    var metavariableNode = referenceNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }
    return metavariable;
}
function frameFromDefinedAssertionNode(definedAssertionNode, context) {
    var frame = null;
    var frameNode = definedAssertionNode.getTermNode();
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
    var variableNode = termSubstitutionNode.getMetavariableNode();
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
function stepsOrSubproofsFromDerivationNode(derivationNode, context) {
    var stepOrSubproofNodes = derivationNode.getStepOrSubproofNodes(), stepsOrSubproofs = stepOrSubproofNodes.map(function(stepOrSubproofNode) {
        var stepOrSubproof = stepsOrSubproofFromStepOrSubproofNode(stepOrSubproofNode, context);
        return stepOrSubproof;
    });
    return stepsOrSubproofs;
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
function constructorFromConstructorDeclarationNode(constructorDeclarationNode, context) {
    var constructor = null;
    var constructorNode = constructorDeclarationNode.getConstructorNode();
    if (constructorNode !== null) {
        constructor = constructorFromConstructorNode(constructorNode, context);
    }
    return constructor;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEZyYWdtZW50Q29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9mcmFnbWVudFwiO1xuXG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVJlZmVyZW5jZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSB9IGZyb20gXCIuLi9tZXRhVHlwZXNcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zLFxuICAgICAgICAgcnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24sXG4gICAgICAgICBzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNUb3BMZXZlbEFzc2VydGlvbixcbiAgICAgICAgIHN1YnByb29mU3RyaW5nRnJvbVN1cHBvc2l0aW9uc0FuZFN1YkRlcml2YXRpb24sXG4gICAgICAgICBwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMsXG4gICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24sXG4gICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZTtcblxuICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgIHR5cGUgPSBiYXNlVHlwZTsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBub21pbmFsVHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gdHlwZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXAgPSBuZXcgU3RlcChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZUZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJ1bGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcnVsZVN0cmluZyA9IHJ1bHNTdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pLFxuICAgICAgICBub2RlID0gcnVsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gcnVsZVN0cmluZywgIC8vL1xuICAgICAgICBydWxlID0gbmV3IFJ1bGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwcm9vZiwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbik7XG5cbiAgcmV0dXJuIHJ1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcnJvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYUZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGVtbWEgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gbGVtbWFOb2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IGxlbW1hTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIGxlbW1hID0gbmV3IExlbW1hKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIGxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zKTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvb2YgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvb2ZOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgZGVyaXZhdGlvbiA9IGRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb29mID0gbmV3IFByb29mKGNvbnRleHQsIHN0cmluZywgbm9kZSwgZGVyaXZhdGlvbik7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21Gcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEF4aW9tIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSA9IGF4aW9tTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gYXhpb21Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgYXhpb20gPSBuZXcgQXhpb20oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gYXhpb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzaXNOb2RlcyA9IHNlY3Rpb25Ob2RlLmdldEh5cG90aGVzaXNOb2RlcygpLFxuICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXhpb20gPSBheGlvbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlbW1hID0gbGVtbWFGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2VjdGlvblN0cmluZyA9IHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uKGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSwgY29udGV4dCksXG4gICAgICAgIG5vZGUgPSBzZWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHNlY3Rpb25TdHJpbmcsIC8vL1xuICAgICAgICBzZWN0aW9uID0gbmV3IFNlY3Rpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUpO1xuXG4gIHJldHVybiBzZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZUZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByZW1pc2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJlbWlzZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiBwcmVtaXNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGhlb3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSB0aGVvcmVtTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG5vZGUgPSB0aGVvcmVtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIHRoZW9yZW0gPSBuZXcgVGhlb3JlbShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiB0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVxdWFsaXR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KHN0cmluZywgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgcmV0dXJuIGVxdWFsaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgIG1ldGFUeXBlID0gZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5Tm9kZS5nZXRQcm9wZXJ0eU5hbWUoKSxcbiAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IHByb3BlcnR5TmFtZSwgIC8vL1xuICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdLFxuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VicHJvb2YgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VicHJvb2ZOb2RlLCAvLy9cbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJEZXJpdmF0aW9uID0gc3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZlN0cmluZ0Zyb21TdXBwb3NpdGlvbnNBbmRTdWJEZXJpdmF0aW9uKHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbiwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN1YnByb29mU3RyaW5nLCAgLy8vXG4gICAgICAgIHN1YnByb29mID0gbmV3IFN1YnByb29mKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKTtcblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICBjb25zdCBlcXVhbGl0eU5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEVxdWFsaXR5Tm9kZSgpO1xuXG4gIGlmIChlcXVhbGl0eU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBub2RlID0gZXF1YWxpdHlOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG5cbiAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuICB9XG5cbiAgcmV0dXJuIGVxdWFsaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZWR1Y3Rpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBuZXcgRGVkdWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpZ25hdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgSnVkZ2VtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGp1ZGdlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgZnJhbWUsIGFzc3VtcHRpb24pO1xuXG4gIHJldHVybiBqdWRnZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YUxlbW1hIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUgPSBtZXRhTGVtbWFOb2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG51bGwsXG4gICAgICAgIG5vZGUgPSBtZXRhTGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgbWV0YUxlbW1hID0gbmV3IE1ldGFMZW1tYShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIHJldHVybiBtZXRhTGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHBhcmFtZXRlck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpLFxuICAgICAgICBpZGVudGlmaWVyID0gcGFyYW1ldGVyTm9kZS5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBpZGVudGlmaWVyKTtcblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgSHlwb3Roc2lzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGh5cG90aGVzZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXIgPSBuZXcgSHlwb3Roc2lzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gY29uamVjdHVyZU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gY29uamVjdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBjb25qZWN0dXJlID0gbmV3IENvbmplY3R1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25jbHVzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uID0gbmV3IENvbmNsdXNpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lub0Zyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW5vTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uY2x1c2lub05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpbm9Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lubyA9IG5ldyBDb25jbHVzaW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29uY2x1c2lubztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBc3N1bXB0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlKTtcblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZXJpdmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlcml2YXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVyaXZhdGlvbiA9IG5ldyBEZXJpdmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RlcHNPclN1YnByb29mcyk7XG5cbiAgcmV0dXJuIGRlcml2YXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZVByZWZpeCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlUHJlZml4Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZVByZWZpeCA9IG5ldyBUeXBlUHJlZml4KGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSBtZXRhdmFyaWFibGVTdHJpbmcsIC8vL1xuICAgICAgICBzdHJpbmcgPSByZWZlcmVuY2VTdHJpbmcsICAvLy9cbiAgICAgICAgZnJhZ21lbnRDb250ZXh0ID0gRnJhZ21lbnRDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBmcmFnbWVudENvbnRleHQ7ICAvLy9cblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cHBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgSHlwb3RoZXNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBoeXBvdGhlc2lzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2lzID0gbmV3IEh5cG90aGVzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBoeXBvdGhlc2lzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25Gcm9tUGFyYW1ldGVyTm9kZShzdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICBub2RlID0gc3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgc3Vic3RpdHV0aW9uTmFtZSA9IHN1YnN0aXR1dGlvbk5vZGUuZ2V0U3Vic3RpdHV0aW9uTmFtZSgpLFxuICAgIG5hbWUgPSBzdWJzdGl0dXRpb25OYW1lLCAgLy8vXG4gICAgc3Vic3RpdHV0aW9uID0gbmV3IFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uc3RydWN0b3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdXBwb3NpdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVxdWl2YWxlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVxdWl2YWxlbmNlTm9kZSwgLy8vXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICBzdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZywgLy8vXG4gICAgICAgIGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtRnJvbU1ldGF0aGVvcmVtTm9kZShtZXRhdGhlb3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdGVob3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YXRoZW9yZW1Ob2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG51bGwsXG4gICAgICAgIG5vZGUgPSBtZXRhTGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgbWV0YXRoZW9yZW0gPSBuZXcgTWV0YXRlaG9yZW0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIG1ldGFUeXBlID0gbnVsbCxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUsIG1ldGFUeXBlKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YkRlcml2YXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3ViRGVyaXZhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YkRlcml2YXRpb24gPSBuZXcgU3ViRGVyaXZhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0ZXBzT3JTdWJwcm9vZnMpO1xuXG4gIHJldHVybiBzdWJEZXJpdmF0aW9uO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZUFzc2VydGlvbiA9IG5ldyBUeXBlQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhwcm9jZWR1cmVSZWZlcmVuY2UsIHBhcmFtZXRlcnMpLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nLCAvLy9cbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXAgPSBzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJwcm9vZiA9IHN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IChzdGVwIHx8IHN1YnByb29mKTtcblxuICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlZml4ZWQgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJlZml4ZWQoKTtcblxuICByZXR1cm4gcHJlZml4ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlZEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVmaXhlZCA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJlZml4ZWQoKTtcblxuICByZXR1cm4gcHJlZml4ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVmaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlSZWxhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IG5ldyBQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvcGVydHksIHRlcm0pO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHZhcmlhYmxlKTtcblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBmcmFtZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gbmV3IFByb3BlcnR5QXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29udGFpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBuZXcgQ29udGFpbmVkQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTYXRpc2ZpZXNBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBuZXcgU2F0aXNmaWVzQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc2lnbmF0dXJlLCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZVJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHByb3Zpc2lvbmFsID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHR5cGUuc2V0UHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gIHZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG5cbiAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUpO1xuXG4gIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVQcmVmaXhEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksICAvLy9cbiAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uID0gbmV3IFR5cGVQcmVmaXhEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGVQcmVmaXgpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4RGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tYmluYXRvckRlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uID0gbmV3IENvbWJpbmF0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGNvbWJpbmF0b3IpO1xuXG4gIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2ltcGxlVHlwZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlZml4ZWQgPSBwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb24gPSBuZXcgU2ltcGxlVHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgcHJlZml4ZWQpO1xuXG4gIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSBudWxsLFxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gbmV3IFJlZmVyZW5jZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29uc3RydWN0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGNvbnN0cnVjdG9yKTtcblxuICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByZWZpeGVkID0gcHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gbmV3IENvbXBsZXhUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcmVmaXhlZCk7XG5cbiAgcmV0dXJuIGNvbXBsZXhUeXBlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgbWV0YXZhcmlhYmxlLnNldE1ldGFUeXBlKG1ldGFUeXBlKTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSBydWxlTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBheGlvbSA9IG51bGw7XG5cbiAgY29uc3QgYXhpb21Ob2RlID0gc2VjdGlvbk5vZGUuZ2V0QXhpb21Ob2RlKCk7XG5cbiAgaWYgKGF4aW9tTm9kZSAhPT0gbnVsbCkge1xuICAgIGF4aW9tID0gYXhpb21Gcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXhpb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbGVtbWEgPSBudWxsO1xuXG4gIGNvbnN0IGxlbW1hTm9kZSA9IHNlY3Rpb25Ob2RlLmdldExlbW1hTm9kZSgpO1xuXG4gIGlmIChsZW1tYU5vZGUgIT09IG51bGwpIHtcbiAgICBsZW1tYSA9IGxlbW1hRnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RlcE5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBzdGVwTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb25jbHVzaW9uID0gbnVsbDtcblxuICBjb25zdCBjb25jbHVzaW9uTm9kZSA9IHJ1bGVOb2RlLmdldENvbmNsdXNpb25Ob2RlKCk7XG5cbiAgaWYgKGNvbmNsdXNpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0aGVvcmVtID0gbnVsbDtcblxuICBjb25zdCB0aGVvcmVtTm9kZSA9IHNlY3Rpb25Ob2RlLmdldFRoZW9yZW1Ob2RlKCk7XG5cbiAgaWYgKHRoZW9yZW1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGhlb3JlbSA9IHRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUodGhlb3JlbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRoZW9yZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBkZXJpdmF0aW9uID0gbnVsbDtcblxuICBjb25zdCBkZXJpdmF0aW9uTm9kZSA9IHByb29mTm9kZS5nZXREZXJpdmF0aW9uTm9kZSgpO1xuXG4gIGlmIChkZXJpdmF0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlcml2YXRpb24gPSBkZXJpdmF0aW9uRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZXJpdmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUob2Nuc3RydWN0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IG9jbnN0cnVjdG9yTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbGFiZWxOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbmplY3R1cmUgPSBudWxsO1xuXG4gIGNvbnN0IGNvbmplY3R1cmVOb2RlID0gc2VjdGlvbk5vZGUuZ2V0Q29uamVjdHVyZU5vZGUoKTtcblxuICBpZiAoY29uamVjdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbmNsdXNpb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbmNsdXNpb25Ob2RlID0gcHJlbWlzZU5vZGUuZ2V0Q29uY2x1c2lvbk5vZGUoKTtcblxuICBpZiAoY29uY2x1c2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZUFzc2VydGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllcjsgIC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gZGVkdWN0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBqdWRnZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEp1ZGdlbWVudE5vZGUoKTtcblxuICBpZiAoanVkZ2VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudEZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGp1ZGdlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RlcCA9IG51bGw7XG5cbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGUuaXNTdGVwTm9kZSgpO1xuXG4gIGlmIChzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSkge1xuICAgIGNvbnN0IHN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlOyAgLy8vXG5cbiAgICBzdGVwID0gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29tYmluYXRvck5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpbm9Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW5vTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGFzc3VtcHRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0ganVkZ2VtZW50Tm9kZS5nZXRBc3N1bXB0aW9uTm9kZSgpO1xuXG4gIGlmIChhc3N1bXB0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBoeXBvdGhlc2lzTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHByZW1pc2VOb2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDsgLy8vXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3ViRGVydmlhdGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc3ViRGVyaXZhdGlvbk5vZGUgPSBzdWJwcm9vZk5vZGUuZ2V0U3ViRGVyaXZhdGlvbk5vZGUoKTtcblxuICBpZiAoc3ViRGVyaXZhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJEZXJ2aWF0aW9uID0gc3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3ViRGVydmlhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBzdGVwTm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFR5cGVBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgdHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChyZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgY29uc3QgcHJvb2ZOb2RlID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdWJwcm9vZk9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZiA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSA9IHN1YnByb29mT3JTdWJwcm9vZk5vZGUuaXNTdWJwcm9vZk5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHN1YnByb29mT3JTdWJwcm9vZk5vZGU7ICAvLy9cblxuICAgIHN1YnByb29mID0gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpXG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvcGVydHkgPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHByb3BlcnR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBkZWZpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBkZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZGVkdWN0aW9uID0gbnVsbDtcblxuICBjb25zdCBkZWR1Y3Rpb25Ob2RlID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCk7XG5cbiAgaWYgKGRlZHVjdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpO1xuXG4gIGlmIChzaWduYXR1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHByb29mTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldFByb29mTm9kZSgpO1xuXG4gIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBsZXQgbGFiZWwgPSBudWxsO1xuXG4gIGNvbnN0IGxhYmVsTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldExhYmVsTm9kZSgpO1xuXG4gIGlmIChsYWJlbE5vZGUgIT09IG51bGwpIHtcbiAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IGRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5QXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGU7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgIHR5cGUgPSBiYXNlVHlwZTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7MFxuICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb250YWluZWRBc3NlcnRpb24gPSBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5ID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZS5nZXRQcm9wZXJ0eU5vZGUoKTtcblxuICBpZiAocHJvcGVydHlOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpO1xuXG4gIGlmIChzaWduYXR1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVzID0gc3ViRGVyaXZhdGlvbk5vZGUuZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcygpLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcE9yU3VicHJvb2ZOb2Rlcy5tYXAoKHN0ZXBPclN1YnByb29mTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mID0gc3RlcHNPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHNPclN1YnByb29mcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZHVjdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldERlZHVjdGlvbk5vZGUoKTtcblxuICBpZiAoZGVkdWN0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlUmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVSZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVQcmVmaXggPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVQcmVmaXhOb2RlID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZS5nZXRUeXBlUHJlZml4Tm9kZSgpO1xuXG4gIGlmICh0eXBlUHJlZml4Tm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbWJpbmF0b3IgPSBudWxsO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3JOb2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZS5nZXRDb21iaW5hdG9yTm9kZSgpO1xuXG4gIGlmIChjb21iaW5hdG9yTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YVR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGFUeXBlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhVHlwZU5vZGUoKTtcblxuICBpZiAobWV0YVR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvcGVydHlSZWxhdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKTtcblxuICBpZiAocHJvcGVydHlSZWxhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb25zdHJ1Y3RvciA9IG51bGw7XG5cbiAgY29uc3QgY29uc3RydWN0b3JOb2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0Q29uc3RydWN0b3JOb2RlKCk7XG5cbiAgaWYgKGNvbnN0cnVjdG9yTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHtcbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlbWlzZXMgPSBwcmVtaXNlTm9kZXMubWFwKChwcmVtaXNlTm9kZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2UgPSBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzKHN0YXRlbWVudE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21TdXBlclR5cGVOb2RlcyhzdXBlclR5cGVOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVzID0gc3VwZXJUeXBlTm9kZXMubWFwKChzdXBlclR5cGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBzdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gdHlwZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSksXG4gICAgICAgIHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IGJhc2VUeXBlOyAvLy9cblxuICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzZXMgPSBoeXBvdGhlc2lzTm9kZXMubWFwKChoeXBvdGhlc2VOb2RlKSA9PiB7XG4gICAgY29uc3QgaHlwb3RoZXNpcyA9IGh5cG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbk5vZGVzLm1hcCgoYXNzdW1wdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0aWVzID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLm1hcCgocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlcyA9IHJ1bGVOb2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VOb2RlcyA9IHJ1bGVOb2RlLmdldFByZW1pc2VOb2RlcygpLFxuICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZXMgPSBzaWduYXR1cmVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2Rlcyhhc3N1bXB0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gZXF1aXZhbGVuY2VOb2RlLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBzdWJwcm9vZk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGVzID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZXMoKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMoc3RhdGVtZW50Tm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlcyhwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVOb2RlcyA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFN1cGVyVHlwZU5vZGVzKCksXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbVN1cGVyVHlwZU5vZGVzKHN1cGVyVHlwZU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZSIsImFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2RlcyIsImFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZSIsImF4aW9tRnJvbUF4aW9tTm9kZSIsImF4aW9tRnJvbVNlY3Rpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbmNsdXNpbm9Gcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbkZyb21QcmVtaXNlTm9kZSIsImNvbmNsdXNpb25Gcm9tUnVsZU5vZGUiLCJjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlIiwiY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJkZXJpdmF0aW9uRnJvbURlcml2YXRpb25Ob2RlIiwiZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUiLCJlcXVhbGl0eUZyb21FcXVhbGl0eU5vZGUiLCJlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlIiwiZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJhbWVGcm9tRnJhbWVOb2RlIiwiZnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyIsImh5cG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUiLCJoeXBwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZSIsImlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlIiwianVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsImxhYmVsRnJvbUxhYmVsTm9kZSIsImxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJsYWJlbHNGcm9tTGFiZWxOb2RlcyIsImxhYmVsc0Zyb21SdWxlTm9kZSIsImxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJsZW1tYUZyb21MZW1tYU5vZGUiLCJsZW1tYUZyb21TZWN0aW9uTm9kZSIsIm1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlIiwibWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlIiwibWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbUFzc3VtcHRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlIiwibWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJlbWlzZUZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyIsInByZW1pc2VzRnJvbVJ1bGVOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwicHJvb2ZGcm9tUHJvb2ZOb2RlIiwicHJvb2ZGcm9tUnVsZU5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwicHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnRpZXNGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlOb2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21TdGVwTm9kZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwicnVsZUZyb21SdWxlTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUiLCJzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlIiwic2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZSIsInNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwic3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlIiwic3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlIiwic3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZSIsInN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZSIsInN0YXRlbWVudEZyb21QcmVtaXNlTm9kZSIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RlcE5vZGUiLCJzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzIiwic3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdGVwRnJvbVN0ZXBOb2RlIiwic3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwc09yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlIiwic3Vic3RpdHV0aW9uRnJvbVBhcmFtZXRlck5vZGUiLCJzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlc0Zyb21TdXBlclR5cGVOb2RlcyIsInN1cHBvc2l0aW9uRnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJ0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZSIsInRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidGVybXNGcm9tRXF1aXZhbGVuY2VOb2RlIiwidGVybXNGcm9tU2lnbmF0dXJlTm9kZSIsInRlcm1zRnJvbVRlcm1Ob2RlcyIsInRoZW9yZW1Gcm9tU2VjdGlvbk5vZGUiLCJ0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlIiwidHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbVR5cGVOb2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1Ob2RlIiwidmFyaWFibGVGcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiY29udGV4dCIsInR5cGUiLCJiYXNlVHlwZSIsImJhc2VUeXBlRnJvbU5vdGhpbmciLCJUeXBlIiwiZWxlbWVudHMiLCJ0eXBlTmFtZSIsImdldFR5cGVOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJnZXRUeXBlUHJlZml4TmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwicHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwic3RlcE5vZGUiLCJTdGVwIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RlcCIsInJ1bGVOb2RlIiwiUnVsZSIsInByb29mIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwicnVsZVN0cmluZyIsInJ1bHNTdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwicnVsZSIsImxhYmVsTm9kZSIsIkxhYmVsIiwibWV0YXZhcmlhYmxlIiwibGFiZWwiLCJlcnJvck5vZGUiLCJFcnJvciIsImVycm9yIiwibGVtbWFOb2RlIiwiTGVtbWEiLCJ0b3BMZXZlbEFzc3NlcnRpb25Ob2RlIiwiZGVkdWN0aW9uIiwic3VwcG9zaXRpb25zIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsInRvcExldmVsQXNzc2VydGlvblN0cmluZyIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsImxlbW1hIiwiZnJhbWVOb2RlIiwiRnJhbWUiLCJhc3N1bXB0aW9ucyIsImZyYW1lIiwicHJvb2ZOb2RlIiwiUHJvb2YiLCJkZXJpdmF0aW9uIiwiYXhpb21Ob2RlIiwiQXhpb20iLCJheGlvbSIsInNlY3Rpb25Ob2RlIiwiaHlwb3RoZXNpc05vZGVzIiwiZ2V0SHlwb3RoZXNpc05vZGVzIiwidGhlb3JlbSIsImNvbmplY3R1cmUiLCJzZWN0aW9uU3RyaW5nIiwic2VjdGlvblN0cmluZ0Zyb21IeXBvdGhlc2VzVG9wTGV2ZWxBc3NlcnRpb24iLCJzZWN0aW9uIiwiU2VjdGlvbiIsInByZW1pc2VOb2RlIiwiUHJlbWlzZSIsInByb2NlZHVyZUNhbGwiLCJwcmVtaXNlIiwidGhlb3JlbU5vZGUiLCJUaGVvcmVtIiwiZXF1YWxpdHlOb2RlIiwiRXF1YWxpdHkiLCJsZWZ0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZXF1YWxpdHkiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwicHJvcGVydHlOb2RlIiwiUHJvcGVydHkiLCJwcm9wZXJ0eU5hbWUiLCJnZXRQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eSIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwiaWRlbnRpZmllciIsInByb3BlcnR5UmVsYXRpb25zIiwidmFyaWFibGUiLCJzdWJwcm9vZk5vZGUiLCJTdWJwcm9vZiIsInN1YkRlcml2YXRpb24iLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mU3RyaW5nRnJvbVN1cHBvc2l0aW9uc0FuZFN1YkRlcml2YXRpb24iLCJzdWJwcm9vZiIsInN0YXRlbWVudE5vZGUiLCJnZXRFcXVhbGl0eU5vZGUiLCJsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJyaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwiZGVkdWN0aW9uTm9kZSIsIkRlZHVjdGlvbiIsIlN0YXRlbWVudCIsInNpZ25hdHVyZU5vZGUiLCJTaWduYXR1cmUiLCJ0ZXJtcyIsInJlZmVyZW5jZU5vZGUiLCJSZWZlcmVuY2UiLCJqdWRnZW1lbnROb2RlIiwiSnVkZ2VtZW50IiwiYXNzdW1wdGlvbiIsImp1ZGdlbWVudCIsIm1ldGFMZW1tYU5vZGUiLCJNZXRhTGVtbWEiLCJtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJtZXRhTGVtbWEiLCJwYXJhbWV0ZXJOb2RlIiwiUGFyYW1ldGVyIiwiZ2V0TmFtZSIsImdldElkZW50aWZpZXIiLCJwYXJhbWV0ZXIiLCJoeXBvdGhlc2VOb2RlIiwiSHlwb3Roc2lzIiwiY29uamVjdHVyZU5vZGUiLCJDb25qZWN0dXJlIiwiY29tYmluYXRvck5vZGUiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImNvbmNsdXNpb25Ob2RlIiwiQ29uY2x1c2lvbiIsImNvbmNsdXNpbm9Ob2RlIiwiY29uY2x1c2lubyIsImFzc3VtcHRpb25Ob2RlIiwiQXNzdW1wdGlvbiIsImRlcml2YXRpb25Ob2RlIiwiRGVyaXZhdGlvbiIsInN0ZXBzT3JTdWJwcm9vZnMiLCJ0eXBlUHJlZml4Tm9kZSIsIlR5cGVQcmVmaXgiLCJ0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlIiwidHlwZUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVQcmVmaXgiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwicmVmZXJlbmNlU3RyaW5nIiwiZnJhZ21lbnRDb250ZXh0IiwiRnJhZ21lbnRDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJpbnN0YW50aWF0ZVJlZmVyZW5jZSIsImh5cG90aGVzaXNOb2RlIiwiSHlwb3RoZXNpcyIsImh5cG90aGVzaXMiLCJzdWJzdGl0dXRpb25Ob2RlIiwiU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTmFtZSIsImdldFN1YnN0aXR1dGlvbk5hbWUiLCJzdWJzdGl0dXRpb24iLCJjb25zdHJ1Y3Rvck5vZGUiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwic3VwcG9zaXRpb25Ob2RlIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImVxdWl2YWxlbmNlTm9kZSIsIkVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VTdHJpbmciLCJlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyIsImVxdWl2YWxlbmNlIiwibWV0YXRoZW9yZW1Ob2RlIiwiTWV0YXRlaG9yZW0iLCJtZXRhdGhlb3JlbSIsInByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN1YkRlcml2YXRpb25Ob2RlIiwiU3ViRGVyaXZhdGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwiVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJwYXJhbWV0ZXJzIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyIsInN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBPclN1YnByb29mIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInByZWZpeGVkIiwiaXNQcmVmaXhlZCIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJEZWZpbmVkQXNzZXJ0aW9uIiwibmVnYXRlZCIsImlzTmVnYXRlZCIsImRlZmluZWRBc3NlcnRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIlByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJUZXJtU3Vic3RpdHV0aW9uIiwidGVybVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJQcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJzdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsIlNhdGlzZmllc0Fzc2VydGlvbiIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwiZ2V0VHlwZU5vZGUiLCJpc1Byb3Zpc2lvbmFsIiwiZ2V0VmFyaWFibGVOb2RlIiwic2V0UHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJUeXBlUHJlZml4RGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwiU2ltcGxlVHlwZURlY2xhcmF0aW9uIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInJlc29sdmVkIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJDb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwic2V0TWV0YVR5cGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsImdldFByb29mTm9kZSIsImdldEF4aW9tTm9kZSIsImdldExlbW1hTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0Q29uY2x1c2lvbk5vZGUiLCJnZXRUaGVvcmVtTm9kZSIsImdldEZyYW1lTm9kZSIsImdldERlcml2YXRpb25Ob2RlIiwib2Nuc3RydWN0b3JOb2RlIiwiZ2V0VGVybU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Q29uamVjdHVyZU5vZGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJnZXRKdWRnZW1lbnROb2RlIiwic3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUiLCJpc1N0ZXBOb2RlIiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsInN1YkRlcnZpYXRpb24iLCJnZXRTdWJEZXJpdmF0aW9uTm9kZSIsImdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJnZXRUeXBlQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mT3JTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlIiwiaXNTdWJwcm9vZk5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXREZWR1Y3Rpb25Ob2RlIiwiZ2V0U2lnbmF0dXJlTm9kZSIsImdldExhYmVsTm9kZSIsImdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsInN0ZXBPclN1YnByb29mTm9kZXMiLCJnZXRTdGVwT3JTdWJwcm9vZk5vZGVzIiwibWFwIiwiZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImdldFByb3BlcnR5Tm9kZSIsImdldFByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJnZXRUeXBlUHJlZml4Tm9kZSIsImdldENvbWJpbmF0b3JOb2RlIiwiZ2V0TWV0YVR5cGVOb2RlIiwiZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJnZXRDb25zdHJ1Y3Rvck5vZGUiLCJ0ZXJtTm9kZXMiLCJsYWJlbE5vZGVzIiwicHJlbWlzZU5vZGVzIiwic3RhdGVtZW50Tm9kZXMiLCJzdXBlclR5cGVOb2RlcyIsInN1cGVyVHlwZU5vZGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwicHVzaCIsInBhcmFtZXRlck5vZGVzIiwiYXNzdW1wdGlvbk5vZGVzIiwic3VwcG9zaXRpb25Ob2RlcyIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsImdldExhYmVsTm9kZXMiLCJnZXRQcmVtaXNlTm9kZXMiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwiZ2V0UGFyYW1ldGVyTm9kZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsImdldFByb3BlcnR5RGVjbGFyYXRpb25Ob2Rl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