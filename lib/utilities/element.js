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
var _context = require("../utilities/context");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXMsXG4gICAgICAgICBydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbixcbiAgICAgICAgIHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uLFxuICAgICAgICAgc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbixcbiAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyxcbiAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbixcbiAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZSA9IGJhc2VUeXBlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IG5vbWluYWxUeXBlTmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSB0eXBlTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBudWxsLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBudWxsLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gbnVsbDtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXAgPSBuZXcgU3RlcChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZUZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJ1bGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcnVsZVN0cmluZyA9IHJ1bHNTdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pLFxuICAgICAgICBub2RlID0gcnVsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gcnVsZVN0cmluZywgIC8vL1xuICAgICAgICBydWxlID0gbmV3IFJ1bGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwcm9vZiwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbik7XG5cbiAgcmV0dXJuIHJ1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcnJvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYUZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGVtbWEgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gbGVtbWFOb2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IGxlbW1hTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIGxlbW1hID0gbmV3IExlbW1hKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIGxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zKTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvb2YgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvb2ZOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgZGVyaXZhdGlvbiA9IGRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb29mID0gbmV3IFByb29mKGNvbnRleHQsIHN0cmluZywgbm9kZSwgZGVyaXZhdGlvbik7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21Gcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEF4aW9tIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSA9IGF4aW9tTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gYXhpb21Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgYXhpb20gPSBuZXcgQXhpb20oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gYXhpb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzaXNOb2RlcyA9IHNlY3Rpb25Ob2RlLmdldEh5cG90aGVzaXNOb2RlcygpLFxuICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXhpb20gPSBheGlvbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlbW1hID0gbGVtbWFGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2VjdGlvblN0cmluZyA9IHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uKGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSksXG4gICAgICAgIG5vZGUgPSBzZWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHNlY3Rpb25TdHJpbmcsIC8vL1xuICAgICAgICBzZWN0aW9uID0gbmV3IFNlY3Rpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUpO1xuXG4gIHJldHVybiBzZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZUZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByZW1pc2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJlbWlzZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiBwcmVtaXNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGhlb3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSB0aGVvcmVtTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG5vZGUgPSB0aGVvcmVtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIHRoZW9yZW0gPSBuZXcgVGhlb3JlbShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiB0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVxdWFsaXR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KHN0cmluZywgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgcmV0dXJuIGVxdWFsaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgIG1ldGFUeXBlID0gZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5Tm9kZS5nZXRQcm9wZXJ0eU5hbWUoKSxcbiAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IHByb3BlcnR5TmFtZSwgIC8vL1xuICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdLFxuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VicHJvb2YgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VicHJvb2ZOb2RlLCAvLy9cbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJEZXJpdmF0aW9uID0gc3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZlN0cmluZ0Zyb21TdXBwb3NpdGlvbnNBbmRTdWJEZXJpdmF0aW9uKHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbiwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN1YnByb29mU3RyaW5nLCAgLy8vXG4gICAgICAgIHN1YnByb29mID0gbmV3IFN1YnByb29mKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKTtcblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICBjb25zdCBlcXVhbGl0eU5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEVxdWFsaXR5Tm9kZSgpO1xuXG4gIGlmIChlcXVhbGl0eU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBub2RlID0gZXF1YWxpdHlOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG5cbiAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuICB9XG5cbiAgcmV0dXJuIGVxdWFsaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZWR1Y3Rpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBuZXcgRGVkdWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzaWduYXR1cmVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKTtcblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEp1ZGdlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBqdWRnZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKTtcblxuICByZXR1cm4ganVkZ2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGFMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YUxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBub2RlID0gbWV0YUxlbW1hTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIG1ldGFMZW1tYSA9IG5ldyBNZXRhTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICByZXR1cm4gbWV0YUxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldE5hbWUoKSxcbiAgICAgICAgaWRlbnRpZmllciA9IHBhcmFtZXRlck5vZGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgaWRlbnRpZmllcik7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEh5cG90aHNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBoeXBvdGhlc2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVyID0gbmV3IEh5cG90aHNpcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSA9IGNvbmplY3R1cmVOb2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IGNvbmplY3R1cmVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgY29uamVjdHVyZSA9IG5ldyBDb25qZWN0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21iaW5hdG9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uY2x1c2lvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpbm9Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lub05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbmNsdXNpbm9Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW5vTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmNsdXNpbm8gPSBuZXcgQ29uY2x1c2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpbm87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhc3N1bXB0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmF0aW9uRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVyaXZhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZXJpdmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlcml2YXRpb24gPSBuZXcgRGVyaXZhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0ZXBzT3JTdWJwcm9vZnMpO1xuXG4gIHJldHVybiBkZXJpdmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVQcmVmaXggfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZVByZWZpeE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGVQcmVmaXggPSBuZXcgVHlwZVByZWZpeChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwcG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBIeXBvdGhlc2lzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGh5cG90aGVzaXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzaXMgPSBuZXcgSHlwb3RoZXNpcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGh5cG90aGVzaXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbkZyb21QYXJhbWV0ZXJOb2RlKHN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgIG5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICBzdWJzdGl0dXRpb25OYW1lID0gc3Vic3RpdHV0aW9uTm9kZS5nZXRTdWJzdGl0dXRpb25OYW1lKCksXG4gICAgbmFtZSA9IHN1YnN0aXR1dGlvbk5hbWUsICAvLy9cbiAgICBzdWJzdGl0dXRpb24gPSBuZXcgU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25zdHJ1Y3Rvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1cHBvc2l0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXF1aXZhbGVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXF1aXZhbGVuY2VOb2RlLCAvLy9cbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXF1aXZhbGVuY2VTdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyh0ZXJtcyksXG4gICAgICAgIHN0cmluZyA9IGVxdWl2YWxlbmNlU3RyaW5nLCAvLy9cbiAgICAgICAgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF0ZWhvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUgPSBtZXRhdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBzdWJzdGl0dXRpb25zID0gbnVsbCxcbiAgICAgICAgbm9kZSA9IG1ldGFMZW1tYU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBtZXRhdGhlb3JlbSA9IG5ldyBNZXRhdGVob3JlbShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgbWV0YVR5cGUgPSBudWxsLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSwgbWV0YVR5cGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3ViRGVyaXZhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdWJEZXJpdmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IG5ldyBTdWJEZXJpdmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RlcHNPclN1YnByb29mcyk7XG5cbiAgcmV0dXJuIHN1YkRlcml2YXRpb247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlQXNzZXJ0aW9uID0gbmV3IFR5cGVBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsU3RyaW5nID0gcHJvY2VkdXJlQ2FsbFN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHByb2NlZHVyZVJlZmVyZW5jZSwgcGFyYW1ldGVycyksXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZUNhbGxTdHJpbmcsIC8vL1xuICAgICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcCA9IHN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXBPclN1YnByb29mID0gKHN0ZXAgfHwgc3VicHJvb2YpO1xuXG4gIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWZpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBuZXcgRGVmaW5lZEFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKTtcblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eVJlbGF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gbmV3IFByb3BlcnR5UmVsYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBwcm9wZXJ0eSwgdGVybSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdmFyaWFibGUpO1xuXG4gIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBuZXcgUHJvcGVydHlBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcblxuICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VicHJvb2ZBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudHMpO1xuXG4gIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb250YWluZWRBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IG5ldyBDb250YWluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNhdGlzZmllc0Fzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IG5ldyBTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzaWduYXR1cmUsIHJlZmVyZW5jZSk7XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgUHJvY2VkdXJlUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgcHJvdmlzaW9uYWwgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgdHlwZS5zZXRQcm92aXNpb25hbChwcm92aXNpb25hbCk7XG5cbiAgdmFyaWFibGUuc2V0VHlwZSh0eXBlKTtcblxuICBjb25zdCB2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IFZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZVByZWZpeERlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb24gPSBuZXcgVHlwZVByZWZpeERlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZVByZWZpeCk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21iaW5hdG9yRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29tYmluYXRvckRlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29tYmluYXRvcik7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVmaXhlZCA9IHByZWZpeGVkRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IG5ldyBTaW1wbGVUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcmVmaXhlZCk7XG5cbiAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICBzdWJzdGl0dXRpb24gPSBudWxsO1xuICB9XG5cbiAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVzb2x2ZWQgPSByZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG5ldyBSZWZlcmVuY2VTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uID0gbmV3IENvbnN0cnVjdG9yRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBjb25zdHJ1Y3Rvcik7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVmaXhlZCA9IHByZWZpeGVkRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IG5ldyBDb21wbGV4VHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgcHJlZml4ZWQpO1xuXG4gIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIG1ldGF2YXJpYWJsZS5zZXRNZXRhVHlwZShtZXRhVHlwZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgY29uc3QgcHJvb2ZOb2RlID0gcnVsZU5vZGUuZ2V0UHJvb2ZOb2RlKCk7XG5cbiAgaWYgKHByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXhpb20gPSBudWxsO1xuXG4gIGNvbnN0IGF4aW9tTm9kZSA9IHNlY3Rpb25Ob2RlLmdldEF4aW9tTm9kZSgpO1xuXG4gIGlmIChheGlvbU5vZGUgIT09IG51bGwpIHtcbiAgICBheGlvbSA9IGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxlbW1hID0gbnVsbDtcblxuICBjb25zdCBsZW1tYU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRMZW1tYU5vZGUoKTtcblxuICBpZiAobGVtbWFOb2RlICE9PSBudWxsKSB7XG4gICAgbGVtbWEgPSBsZW1tYUZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0ZXBOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gc3RlcE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChyZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29uY2x1c2lvbiA9IG51bGw7XG5cbiAgY29uc3QgY29uY2x1c2lvbk5vZGUgPSBydWxlTm9kZS5nZXRDb25jbHVzaW9uTm9kZSgpO1xuXG4gIGlmIChjb25jbHVzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGhlb3JlbSA9IG51bGw7XG5cbiAgY29uc3QgdGhlb3JlbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRUaGVvcmVtTm9kZSgpO1xuXG4gIGlmICh0aGVvcmVtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRoZW9yZW0gPSB0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0ganVkZ2VtZW50Tm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgZGVyaXZhdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVyaXZhdGlvbk5vZGUgPSBwcm9vZk5vZGUuZ2V0RGVyaXZhdGlvbk5vZGUoKTtcblxuICBpZiAoZGVyaXZhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlKG9jbnN0cnVjdG9yTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBvY25zdHJ1Y3Rvck5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbGFiZWxOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbmplY3R1cmUgPSBudWxsO1xuXG4gIGNvbnN0IGNvbmplY3R1cmVOb2RlID0gc2VjdGlvbk5vZGUuZ2V0Q29uamVjdHVyZU5vZGUoKTtcblxuICBpZiAoY29uamVjdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbmNsdXNpb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbmNsdXNpb25Ob2RlID0gcHJlbWlzZU5vZGUuZ2V0Q29uY2x1c2lvbk5vZGUoKTtcblxuICBpZiAoY29uY2x1c2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZUFzc2VydGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgIGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXI7ICAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGRlZHVjdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICBjb25zdCBqdWRnZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRKdWRnZW1lbnROb2RlKCk7XG5cbiAgaWYgKGp1ZGdlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBqdWRnZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXAgPSBudWxsO1xuXG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlLmlzU3RlcE5vZGUoKTtcblxuICBpZiAoc3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUpIHtcbiAgICBjb25zdCBzdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZTsgIC8vL1xuXG4gICAgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgYXNzdW1wdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEFzc3VtcHRpb25Ob2RlKCk7XG5cbiAgaWYgKGFzc3VtcHRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGFzc3VtcHRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW5vTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29uY2x1c2lub05vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gaHlwb3RoZXNpc05vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7IC8vL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJEZXJ2aWF0aW9uID0gbnVsbDtcblxuICBjb25zdCBzdWJEZXJpdmF0aW9uTm9kZSA9IHN1YnByb29mTm9kZS5nZXRTdWJEZXJpdmF0aW9uTm9kZSgpO1xuXG4gIGlmIChzdWJEZXJpdmF0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHN1YkRlcnZpYXRpb24gPSBzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJEZXJ2aWF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2VOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZywgLy8vXG4gICAgICAgICAgc3RyaW5nID0gcmVmZXJlbmNlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0ZXBOb2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VHlwZUFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFByb29mTm9kZSgpO1xuXG4gIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN1YnByb29mT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mID0gbnVsbDtcblxuICBjb25zdCBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlID0gc3VicHJvb2ZPclN1YnByb29mTm9kZS5pc1N1YnByb29mTm9kZSgpO1xuXG4gIGlmIChzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZPclN1YnByb29mTm9kZTsgIC8vL1xuXG4gICAgc3VicHJvb2YgPSBzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dClcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBzdXBwb3NpdGlvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eSA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAocHJvcGVydHlOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldERlZmluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZHVjdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpO1xuXG4gIGlmIChkZWR1Y3Rpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZU5vZGUgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKTtcblxuICBpZiAoc2lnbmF0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxhYmVsID0gbnVsbDtcblxuICBjb25zdCBsYWJlbE5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRMYWJlbE5vZGUoKTtcblxuICBpZiAobGFiZWxOb2RlICE9PSBudWxsKSB7XG4gICAgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5QXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IGRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICB0eXBlID0gYmFzZVR5cGU7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkgezBcbiAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29udGFpbmVkQXNzZXJ0aW9uID0gY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eSA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGUuZ2V0UHJvcGVydHlOb2RlKCk7XG5cbiAgaWYgKHByb3BlcnR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKTtcblxuICBpZiAoc2lnbmF0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IHN1YkRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeGVkRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVmaXhlZCA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcmVmaXhlZCgpO1xuXG4gIHJldHVybiBwcmVmaXhlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlc29sdmVkID0gKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlZml4ZWQgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5pc1ByZWZpeGVkKCk7XG5cbiAgcmV0dXJuIHByZWZpeGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZHVjdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldERlZHVjdGlvbk5vZGUoKTtcblxuICBpZiAoZGVkdWN0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlUmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVSZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVQcmVmaXggPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVQcmVmaXhOb2RlID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZS5nZXRUeXBlUHJlZml4Tm9kZSgpO1xuXG4gIGlmICh0eXBlUHJlZml4Tm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbWJpbmF0b3IgPSBudWxsO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3JOb2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZS5nZXRDb21iaW5hdG9yTm9kZSgpO1xuXG4gIGlmIChjb21iaW5hdG9yTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YVR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGFUeXBlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhVHlwZU5vZGUoKTtcblxuICBpZiAobWV0YVR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvcGVydHlSZWxhdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKTtcblxuICBpZiAocHJvcGVydHlSZWxhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29uc3RydWN0b3IgPSBudWxsO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9yTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldENvbnN0cnVjdG9yTm9kZSgpO1xuXG4gIGlmIChjb25zdHJ1Y3Rvck5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHtcbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlbWlzZXMgPSBwcmVtaXNlTm9kZXMubWFwKChwcmVtaXNlTm9kZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2UgPSBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzKHN0YXRlbWVudE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21TdXBlclR5cGVOb2RlcyhzdXBlclR5cGVOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVzID0gc3VwZXJUeXBlTm9kZXMubWFwKChzdXBlclR5cGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBzdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gdHlwZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSksXG4gICAgICAgIHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IGJhc2VUeXBlOyAvLy9cblxuICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzZXMgPSBoeXBvdGhlc2lzTm9kZXMubWFwKChoeXBvdGhlc2VOb2RlKSA9PiB7XG4gICAgY29uc3QgaHlwb3RoZXNpcyA9IGh5cG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbk5vZGVzLm1hcCgoYXNzdW1wdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0aWVzID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLm1hcCgocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlcyA9IHJ1bGVOb2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VOb2RlcyA9IHJ1bGVOb2RlLmdldFByZW1pc2VOb2RlcygpLFxuICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZXMgPSBzaWduYXR1cmVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2Rlcyhhc3N1bXB0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gZXF1aXZhbGVuY2VOb2RlLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBzdWJwcm9vZk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGVzID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZXMoKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMoc3RhdGVtZW50Tm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlcyhwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVOb2RlcyA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFN1cGVyVHlwZU5vZGVzKCksXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbVN1cGVyVHlwZU5vZGVzKHN1cGVyVHlwZU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZSIsImFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2RlcyIsImFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZSIsImF4aW9tRnJvbUF4aW9tTm9kZSIsImF4aW9tRnJvbVNlY3Rpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JOb2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbmNsdXNpbm9Gcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbkZyb21QcmVtaXNlTm9kZSIsImNvbmNsdXNpb25Gcm9tUnVsZU5vZGUiLCJjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlIiwiY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJkZXJpdmF0aW9uRnJvbURlcml2YXRpb25Ob2RlIiwiZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUiLCJlcXVhbGl0eUZyb21FcXVhbGl0eU5vZGUiLCJlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlIiwiZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJhbWVGcm9tRnJhbWVOb2RlIiwiZnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJoeXBvdGhlc2VzRnJvbUh5cG90aGVzaXNOb2RlcyIsImh5cG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUiLCJoeXBwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZSIsImlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlIiwianVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsImxhYmVsRnJvbUxhYmVsTm9kZSIsImxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJsYWJlbHNGcm9tTGFiZWxOb2RlcyIsImxhYmVsc0Zyb21SdWxlTm9kZSIsImxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJsZW1tYUZyb21MZW1tYU5vZGUiLCJsZW1tYUZyb21TZWN0aW9uTm9kZSIsIm1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlIiwibWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlIiwibWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbUFzc3VtcHRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlIiwibWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJlbWlzZUZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyIsInByZW1pc2VzRnJvbVJ1bGVOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwicHJvb2ZGcm9tUHJvb2ZOb2RlIiwicHJvb2ZGcm9tUnVsZU5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJwcm9vZkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwicHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnRpZXNGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlOb2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21TdGVwTm9kZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwicmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInJ1bGVGcm9tUnVsZU5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlIiwic2VjdGlvbkZyb21TZWN0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUiLCJzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZSIsInN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZSIsInN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUiLCJzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50RnJvbVN0ZXBOb2RlIiwic3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyIsInN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcHNPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUiLCJzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN1YnByb29mRnJvbVN1YnByb29mTm9kZSIsInN1YnN0aXR1dGlvbkZyb21QYXJhbWV0ZXJOb2RlIiwic3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZXNGcm9tU3VwZXJUeXBlTm9kZXMiLCJzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlIiwic3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwic3VwcG9zaXRpb25zRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwidGVybUZyb21Db25zdHJ1Y3Rvck5vZGUiLCJ0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwidGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZSIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJ0aGVvcmVtRnJvbVNlY3Rpb25Ob2RlIiwidGhlb3JlbUZyb21UaGVvcmVtTm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21UeXBlTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21UZXJtTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwiVHlwZSIsImVsZW1lbnRzIiwidHlwZU5hbWUiLCJnZXRUeXBlTmFtZSIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInByZWZpeE5hbWUiLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwidGVybU5vZGUiLCJUZXJtIiwibm9kZUFzU3RyaW5nIiwidGVybSIsInN0ZXBOb2RlIiwiU3RlcCIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsInN0ZXAiLCJydWxlTm9kZSIsIlJ1bGUiLCJwcm9vZiIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsInJ1bGVTdHJpbmciLCJydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbiIsInJ1bGUiLCJsYWJlbE5vZGUiLCJMYWJlbCIsIm1ldGF2YXJpYWJsZSIsImxhYmVsIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJlcnJvciIsImxlbW1hTm9kZSIsIkxlbW1hIiwidG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSIsImRlZHVjdGlvbiIsInN1cHBvc2l0aW9ucyIsInNpZ25hdHVyZSIsImh5cG90aGVzZXMiLCJ0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmciLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJsZW1tYSIsImZyYW1lTm9kZSIsIkZyYW1lIiwiYXNzdW1wdGlvbnMiLCJmcmFtZSIsInByb29mTm9kZSIsIlByb29mIiwiZGVyaXZhdGlvbiIsImF4aW9tTm9kZSIsIkF4aW9tIiwiYXhpb20iLCJzZWN0aW9uTm9kZSIsImh5cG90aGVzaXNOb2RlcyIsImdldEh5cG90aGVzaXNOb2RlcyIsInRoZW9yZW0iLCJjb25qZWN0dXJlIiwic2VjdGlvblN0cmluZyIsInNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc1RvcExldmVsQXNzZXJ0aW9uIiwic2VjdGlvbiIsIlNlY3Rpb24iLCJwcmVtaXNlTm9kZSIsIlByZW1pc2UiLCJwcm9jZWR1cmVDYWxsIiwicHJlbWlzZSIsInRoZW9yZW1Ob2RlIiwiVGhlb3JlbSIsImVxdWFsaXR5Tm9kZSIsIkVxdWFsaXR5IiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImVxdWFsaXR5IiwibWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsInByb3BlcnR5Tm9kZSIsIlByb3BlcnR5IiwicHJvcGVydHlOYW1lIiwiZ2V0UHJvcGVydHlOYW1lIiwicHJvcGVydHkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsImlkZW50aWZpZXIiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsInZhcmlhYmxlIiwic3VicHJvb2ZOb2RlIiwiU3VicHJvb2YiLCJzdWJEZXJpdmF0aW9uIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZlN0cmluZ0Zyb21TdXBwb3NpdGlvbnNBbmRTdWJEZXJpdmF0aW9uIiwic3VicHJvb2YiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0RXF1YWxpdHlOb2RlIiwibGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwicmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsImRlZHVjdGlvbk5vZGUiLCJEZWR1Y3Rpb24iLCJTdGF0ZW1lbnQiLCJzaWduYXR1cmVOb2RlIiwiU2lnbmF0dXJlIiwidGVybXMiLCJyZWZlcmVuY2VOb2RlIiwiUmVmZXJlbmNlIiwianVkZ2VtZW50Tm9kZSIsIkp1ZGdlbWVudCIsImFzc3VtcHRpb24iLCJqdWRnZW1lbnQiLCJtZXRhTGVtbWFOb2RlIiwiTWV0YUxlbW1hIiwibWV0YUxlbW1hTWV0YXRob3JlbU5vZGUiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJzdWJzdGl0dXRpb25zIiwibWV0YUxlbW1hIiwicGFyYW1ldGVyTm9kZSIsIlBhcmFtZXRlciIsImdldE5hbWUiLCJnZXRJZGVudGlmaWVyIiwicGFyYW1ldGVyIiwiaHlwb3RoZXNlTm9kZSIsIkh5cG90aHNpcyIsImNvbmplY3R1cmVOb2RlIiwiQ29uamVjdHVyZSIsImNvbWJpbmF0b3JOb2RlIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJjb25jbHVzaW9uTm9kZSIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW5vTm9kZSIsImNvbmNsdXNpbm8iLCJhc3N1bXB0aW9uTm9kZSIsIkFzc3VtcHRpb24iLCJkZXJpdmF0aW9uTm9kZSIsIkRlcml2YXRpb24iLCJzdGVwc09yU3VicHJvb2ZzIiwidHlwZVByZWZpeE5vZGUiLCJUeXBlUHJlZml4IiwidGVybUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVGcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlUHJlZml4IiwiaHlwb3RoZXNpc05vZGUiLCJIeXBvdGhlc2lzIiwiaHlwb3RoZXNpcyIsInN1YnN0aXR1dGlvbk5vZGUiLCJTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25OYW1lIiwiZ2V0U3Vic3RpdHV0aW9uTmFtZSIsInN1YnN0aXR1dGlvbiIsImNvbnN0cnVjdG9yTm9kZSIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJzdXBwb3NpdGlvbk5vZGUiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uIiwiZXF1aXZhbGVuY2VOb2RlIiwiRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZVN0cmluZyIsImVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zIiwiZXF1aXZhbGVuY2UiLCJtZXRhdGhlb3JlbU5vZGUiLCJNZXRhdGVob3JlbSIsIm1ldGF0aGVvcmVtIiwibWV0YXZhcmlhYmxlTm9kZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwic3ViRGVyaXZhdGlvbk5vZGUiLCJTdWJEZXJpdmF0aW9uIiwidHlwZUFzc2VydGlvbk5vZGUiLCJUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbiIsInByb2NlZHVyZUNhbGxOb2RlIiwiUHJvY2VkdXJlQ2FsbCIsInBhcmFtZXRlcnMiLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwicHJvY2VkdXJlQ2FsbFN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzIiwic3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcE9yU3VicHJvb2YiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIkRlZmluZWRBc3NlcnRpb24iLCJuZWdhdGVkIiwiaXNOZWdhdGVkIiwiZGVmaW5lZEFzc2VydGlvbiIsInByb3BlcnR5UmVsYXRpb25Ob2RlIiwiUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsIlByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJTdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJDb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwicHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwiZ2V0VHlwZU5vZGUiLCJpc1Byb3Zpc2lvbmFsIiwiZ2V0VmFyaWFibGVOb2RlIiwic2V0UHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJUeXBlUHJlZml4RGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInByZWZpeGVkIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInVuZGVmaW5lZCIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInJlc29sdmVkIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJzZXRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiZ2V0UHJvb2ZOb2RlIiwiZ2V0QXhpb21Ob2RlIiwiZ2V0TGVtbWFOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXRDb25jbHVzaW9uTm9kZSIsImdldFRoZW9yZW1Ob2RlIiwiZ2V0RnJhbWVOb2RlIiwiZ2V0RGVyaXZhdGlvbk5vZGUiLCJvY25zdHJ1Y3Rvck5vZGUiLCJnZXRUZXJtTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRDb25qZWN0dXJlTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsImdldEp1ZGdlbWVudE5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSIsImlzU3RlcE5vZGUiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwic3ViRGVydmlhdGlvbiIsImdldFN1YkRlcml2YXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibGl0ZXJhbGx5IiwicmVmZXJlbmNlU3RyaW5nIiwiaW5zdGFudGlhdGVSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VHlwZUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSIsImlzU3VicHJvb2ZOb2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGVzIiwiZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcyIsIm1hcCIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRQcm9wZXJ0eU5vZGUiLCJpc1ByZWZpeGVkIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsImdldFR5cGVQcmVmaXhOb2RlIiwiZ2V0Q29tYmluYXRvck5vZGUiLCJnZXRNZXRhVHlwZU5vZGUiLCJnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImdldENvbnN0cnVjdG9yTm9kZSIsInRlcm1Ob2RlcyIsImxhYmVsTm9kZXMiLCJwcmVtaXNlTm9kZXMiLCJzdGF0ZW1lbnROb2RlcyIsInN1cGVyVHlwZU5vZGVzIiwic3VwZXJUeXBlTm9kZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJwdXNoIiwicGFyYW1ldGVyTm9kZXMiLCJhc3N1bXB0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbk5vZGVzIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwiZ2V0TGFiZWxOb2RlcyIsImdldFByZW1pc2VOb2RlcyIsImdldEFzc3VtcHRpb25Ob2RlcyIsImdldFRlcm1Ob2RlcyIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsImdldFN0YXRlbWVudE5vZGVzIiwiZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwiZ2V0U3VwZXJUeXBlTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWlaZ0JBO2VBQUFBOztRQXVuQkFDO2VBQUFBOztRQXE0QkFDO2VBQUFBOztRQW1EQUM7ZUFBQUE7O1FBMXpEQUM7ZUFBQUE7O1FBeW9CQUM7ZUFBQUE7O1FBakdBQztlQUFBQTs7UUEyakNBQztlQUFBQTs7UUF0M0NBQztlQUFBQTs7UUF1WEFDO2VBQUFBOztRQW5XQUM7ZUFBQUE7O1FBVkFDO2VBQUFBOztRQTBqQkFDO2VBQUFBOztRQTVHQUM7ZUFBQUE7O1FBemVBQztlQUFBQTs7UUF5a0JBQztlQUFBQTs7UUEzTUFDO2VBQUFBOztRQXFrQ0FDO2VBQUFBOztRQS8xQ0FDO2VBQUFBOztRQXlLQUM7ZUFBQUE7O1FBcTdCQUM7ZUFBQUE7O1FBenhDQUM7ZUFBQUE7O1FBa3BDQUM7ZUFBQUE7O1FBb1FBQztlQUFBQTs7UUFwbkNBQztlQUFBQTs7UUE0MEJBQztlQUFBQTs7UUE3OUJBQztlQUFBQTs7UUFtZEFDO2VBQUFBOztRQTdxQkFDO2VBQUFBOztRQXdEQUM7ZUFBQUE7O1FBaU9BQztlQUFBQTs7UUFuWUFDO2VBQUFBOztRQWl2Q0FDO2VBQUFBOztRQTVJQUM7ZUFBQUE7O1FBM2tDQUM7ZUFBQUE7O1FBbXBDQUM7ZUFBQUE7O1FBbGFBQztlQUFBQTs7UUFwUkFDO2VBQUFBOztRQTgzQkFDO2VBQUFBOztRQXNiQUM7ZUFBQUE7O1FBM2lEQUM7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