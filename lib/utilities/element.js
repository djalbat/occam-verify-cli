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
    get metatheoremFromMetaLemmaNode () {
        return metatheoremFromMetaLemmaNode;
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
    get parameterNameFromParameterNode () {
        return parameterNameFromParameterNode;
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
    var Parameter = _elements.default.Parameter, node = parameterNode, string = context.nodeAsString(node), parameterName = parameterNode.getParameterName(), name = parameterName, parameter = new Parameter(context, string, node, name);
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
function metatheoremFromMetaLemmaNode(metatheoremNode, context) {
    var Metatehorem = _elements.default.Metatehorem, metaLemmaMetathoremNode = metatheoremNode, proof = proofFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), label = labelFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), deduction = deductionFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), suppositions = suppositionsFromTopLevelMetaAssertionNode(metaLemmaMetathoremNode, context), topLevelMetaAssertionString = (0, _string.topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction)(label, suppositions, deduction), substitutions = null, node = metaLemmaNode, string = topLevelMetaAssertionString, metatheorem = new Metatehorem(context, string, node, label, suppositions, deduction, proof, substitutions);
    return metatheorem;
}
function referenceFromMetavariableNode(metavariableNode, context) {
    var metavariableString = context.nodeAsString(metavariableNode), referenceString = metavariableString, string = referenceString, referenceNode = (0, _instantiate.instantiateReference)(string, context);
    context = (0, _context.contextFromString)(string);
    var reference = referenceFromReferenceNode(referenceNode, context);
    return reference;
}
function hyppothesisFromHypothesisNode(hypothesisNode, context) {
    var Hypothesis = _elements.default.Hypothesis, node = hypothesisNode, string = context.nodeAsString(node), statement = statementFromHypothesisNode(hypothesisNode, context), hypothesis = new Hypothesis(context, string, node, statement);
    return hypothesis;
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
    var StatementSubstitution = _elements.default.StatementSubstitution, node = statementSubstitutionNode, string = context.nodeAsString(node), resolved = true, statement = null, metavariable = null, substitution = null, statementSubstitution = new StatementSubstitution(context, string, node, resolved, statement, metavariable, substitution);
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
function parameterNameFromParameterNode(parameterNode, context) {
    var parameterName = parameterNode.getParameterName();
    return parameterName;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBjb250ZXh0RnJvbVN0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgYmFzZVR5cGVGcm9tTm90aGluZyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVSZWZlcmVuY2UgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyBlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyxcbiAgICAgICAgIHJ1bHNTdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uLFxuICAgICAgICAgc2VjdGlvblN0cmluZ0Zyb21IeXBvdGhlc2VzVG9wTGV2ZWxBc3NlcnRpb24sXG4gICAgICAgICBzdWJwcm9vZlN0cmluZ0Zyb21TdXBwb3NpdGlvbnNBbmRTdWJEZXJpdmF0aW9uLFxuICAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzLFxuICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uLFxuICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICB0eXBlID0gYmFzZVR5cGU7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IHR5cGVOb2RlLmdldFR5cGVQcmVmaXhOYW1lKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gbm9taW5hbFR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IHR5cGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IG51bGwsXG4gICAgICAgICAgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBudWxsO1xuXG4gICAgdHlwZSA9IG5ldyBUeXBlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGVwTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwID0gbmV3IFN0ZXAoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSdWxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJ1bGVTdHJpbmcgPSBydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSxcbiAgICAgICAgbm9kZSA9IHJ1bGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IHJ1bGVTdHJpbmcsICAvLy9cbiAgICAgICAgcnVsZSA9IG5ldyBSdWxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvb2YsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gIHJldHVybiBydWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbmV3IExhYmVsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXJyb3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGVycm9yID0gbmV3IEVycm9yKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFGcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExlbW1hIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSA9IGxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG5vZGUgPSBsZW1tYU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICBsZW1tYSA9IG5ldyBMZW1tYShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiBsZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucyk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb29mTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIGRlcml2YXRpb24gPSBkZXJpdmF0aW9uRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9vZiA9IG5ldyBQcm9vZihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGRlcml2YXRpb24pO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBeGlvbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBheGlvbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IGF4aW9tTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbkZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2lzTm9kZXMgPSBzZWN0aW9uTm9kZS5nZXRIeXBvdGhlc2lzTm9kZXMoKSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCksXG4gICAgICAgIGF4aW9tID0gYXhpb21Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZW1tYSA9IGxlbW1hRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNlY3Rpb25TdHJpbmcgPSBzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNUb3BMZXZlbEFzc2VydGlvbihoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUsIGNvbnRleHQpLFxuICAgICAgICBub2RlID0gc2VjdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBzZWN0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlKTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByZW1pc2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gcHJlbWlzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlID0gdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgdG9wTGV2ZWxBc3NzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gdGhlb3JlbU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICB0aGVvcmVtID0gbmV3IFRoZW9yZW0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXR5RnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcXVhbGl0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcXVhbGl0eU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgIGxlZnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShzdHJpbmcsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICBtZXRhVHlwZSA9IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb3BlcnR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5vZGUuZ2V0UHJvcGVydHlOYW1lKCksXG4gICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBwcm9wZXJ0eU5hbWUsICAvLy9cbiAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBub21pbmFsVHlwZU5hbWUpO1xuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mTm9kZSwgLy8vXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbihzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdWJwcm9vZlN0cmluZywgIC8vL1xuICAgICAgICBzdWJwcm9vZiA9IG5ldyBTdWJwcm9vZihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbik7XG5cbiAgcmV0dXJuIHN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRFcXVhbGl0eU5vZGUoKTtcblxuICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpO1xuXG4gICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcbiAgfVxuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gbmV3IERlZHVjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzaWduYXR1cmVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKTtcblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEp1ZGdlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBqdWRnZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKTtcblxuICByZXR1cm4ganVkZ2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGFMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YUxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBub2RlID0gbWV0YUxlbW1hTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIG1ldGFMZW1tYSA9IG5ldyBNZXRhTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICByZXR1cm4gbWV0YUxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldFBhcmFtZXRlck5hbWUoKSxcbiAgICAgICAgbmFtZSA9IHBhcmFtZXRlck5hbWUsICAvLy9cbiAgICAgICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBIeXBvdGhzaXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gaHlwb3RoZXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlciA9IG5ldyBIeXBvdGhzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRvcExldmVsQXNzc2VydGlvbk5vZGUgPSBjb25qZWN0dXJlTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICB0b3BMZXZlbEFzc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG5vZGUgPSBjb25qZWN0dXJlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIGNvbmplY3R1cmUgPSBuZXcgQ29uamVjdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiBjb25qZWN0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tYmluYXRvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbmNsdXNpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW5vRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpbm9Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25jbHVzaW5vTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lub05vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW5vID0gbmV3IENvbmNsdXNpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb25jbHVzaW5vO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IG5ldyBBc3N1bXB0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlcml2YXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVyaXZhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZXJpdmF0aW9uID0gbmV3IERlcml2YXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlUHJlZml4ID0gbmV3IFR5cGVQcmVmaXgoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtRnJvbU1ldGFMZW1tYU5vZGUobWV0YXRoZW9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXRlaG9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSA9IG1ldGF0aGVvcmVtTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBub2RlID0gbWV0YUxlbW1hTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgIG1ldGF0aGVvcmVtID0gbmV3IE1ldGF0ZWhvcmVtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gbWV0YXZhcmlhYmxlU3RyaW5nLCAvLy9cbiAgICAgICAgc3RyaW5nID0gcmVmZXJlbmNlU3RyaW5nLCAgLy8vXG4gICAgICAgIHJlZmVyZW5jZU5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZShzdHJpbmcsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBjb250ZXh0RnJvbVN0cmluZyhzdHJpbmcpO1xuXG4gIGNvbnN0IHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEh5cG90aGVzaXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gaHlwb3RoZXNpc05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNpcyA9IG5ldyBIeXBvdGhlc2lzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gaHlwb3RoZXNpc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlKGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtKTtcblxuICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VwcG9zaXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcXVpdmFsZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcXVpdmFsZW5jZU5vZGUsIC8vL1xuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlcXVpdmFsZW5jZVN0cmluZyA9IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zKHRlcm1zKSxcbiAgICAgICAgc3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmcsIC8vL1xuICAgICAgICBlcXVpdmFsZW5jZSA9IG5ldyBFcXVpdmFsZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKTtcblxuICByZXR1cm4gZXF1aXZhbGVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIG1ldGFUeXBlID0gbnVsbCxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUsIG1ldGFUeXBlKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YkRlcml2YXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3ViRGVyaXZhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YkRlcml2YXRpb24gPSBuZXcgU3ViRGVyaXZhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0ZXBzT3JTdWJwcm9vZnMpO1xuXG4gIHJldHVybiBzdWJEZXJpdmF0aW9uO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZUFzc2VydGlvbiA9IG5ldyBUeXBlQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhwcm9jZWR1cmVSZWZlcmVuY2UsIHBhcmFtZXRlcnMpLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nLCAvLy9cbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXAgPSBzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJwcm9vZiA9IHN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IChzdGVwIHx8IHN1YnByb29mKTtcblxuICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlZml4ZWQgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJlZml4ZWQoKTtcblxuICByZXR1cm4gcHJlZml4ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlZEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVmaXhlZCA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJlZml4ZWQoKTtcblxuICByZXR1cm4gcHJlZml4ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVmaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlSZWxhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IG5ldyBQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvcGVydHksIHRlcm0pO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHZhcmlhYmxlKTtcblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBmcmFtZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gbmV3IFByb3BlcnR5QXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29udGFpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBuZXcgQ29udGFpbmVkQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTYXRpc2ZpZXNBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBuZXcgU2F0aXNmaWVzQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc2lnbmF0dXJlLCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZVJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCksXG4gICAgICAgIHByb3Zpc2lvbmFsID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHR5cGUuc2V0UHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gIHZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG5cbiAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUpO1xuXG4gIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVQcmVmaXhEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksICAvLy9cbiAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uID0gbmV3IFR5cGVQcmVmaXhEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGVQcmVmaXgpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4RGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tYmluYXRvckRlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uID0gbmV3IENvbWJpbmF0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGNvbWJpbmF0b3IpO1xuXG4gIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2ltcGxlVHlwZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlZml4ZWQgPSBwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb24gPSBuZXcgU2ltcGxlVHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgcHJlZml4ZWQpO1xuXG4gIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZSxcbiAgICAgICAgc3RhdGVtZW50ID0gbnVsbCxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG5ldyBSZWZlcmVuY2VTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uID0gbmV3IENvbnN0cnVjdG9yRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBjb25zdHJ1Y3Rvcik7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVmaXhlZCA9IHByZWZpeGVkRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IG5ldyBDb21wbGV4VHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgcHJlZml4ZWQpO1xuXG4gIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIG1ldGF2YXJpYWJsZS5zZXRNZXRhVHlwZShtZXRhVHlwZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgY29uc3QgcHJvb2ZOb2RlID0gcnVsZU5vZGUuZ2V0UHJvb2ZOb2RlKCk7XG5cbiAgaWYgKHByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXhpb20gPSBudWxsO1xuXG4gIGNvbnN0IGF4aW9tTm9kZSA9IHNlY3Rpb25Ob2RlLmdldEF4aW9tTm9kZSgpO1xuXG4gIGlmIChheGlvbU5vZGUgIT09IG51bGwpIHtcbiAgICBheGlvbSA9IGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxlbW1hID0gbnVsbDtcblxuICBjb25zdCBsZW1tYU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRMZW1tYU5vZGUoKTtcblxuICBpZiAobGVtbWFOb2RlICE9PSBudWxsKSB7XG4gICAgbGVtbWEgPSBsZW1tYUZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0ZXBOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gc3RlcE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChyZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29uY2x1c2lvbiA9IG51bGw7XG5cbiAgY29uc3QgY29uY2x1c2lvbk5vZGUgPSBydWxlTm9kZS5nZXRDb25jbHVzaW9uTm9kZSgpO1xuXG4gIGlmIChjb25jbHVzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGhlb3JlbSA9IG51bGw7XG5cbiAgY29uc3QgdGhlb3JlbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRUaGVvcmVtTm9kZSgpO1xuXG4gIGlmICh0aGVvcmVtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRoZW9yZW0gPSB0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0ganVkZ2VtZW50Tm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgZGVyaXZhdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVyaXZhdGlvbk5vZGUgPSBwcm9vZk5vZGUuZ2V0RGVyaXZhdGlvbk5vZGUoKTtcblxuICBpZiAoZGVyaXZhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlKG9jbnN0cnVjdG9yTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBvY25zdHJ1Y3Rvck5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb25qZWN0dXJlID0gbnVsbDtcblxuICBjb25zdCBjb25qZWN0dXJlTm9kZSA9IHNlY3Rpb25Ob2RlLmdldENvbmplY3R1cmVOb2RlKCk7XG5cbiAgaWYgKGNvbmplY3R1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmplY3R1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb25jbHVzaW9uID0gbnVsbDtcblxuICBjb25zdCBjb25jbHVzaW9uTm9kZSA9IHByZW1pc2VOb2RlLmdldENvbmNsdXNpb25Ob2RlKCk7XG5cbiAgaWYgKGNvbmNsdXNpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgIGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXI7ICAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGRlZHVjdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICBjb25zdCBqdWRnZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRKdWRnZW1lbnROb2RlKCk7XG5cbiAgaWYgKGp1ZGdlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBqdWRnZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXAgPSBudWxsO1xuXG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlLmlzU3RlcE5vZGUoKTtcblxuICBpZiAoc3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUpIHtcbiAgICBjb25zdCBzdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZTsgIC8vL1xuXG4gICAgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW5vTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29uY2x1c2lub05vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0QXNzdW1wdGlvbk5vZGUoKTtcblxuICBpZiAoYXNzdW1wdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gaHlwb3RoZXNpc05vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7IC8vL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1YkRlcnZpYXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHN1YkRlcml2YXRpb25Ob2RlID0gc3VicHJvb2ZOb2RlLmdldFN1YkRlcml2YXRpb25Ob2RlKCk7XG5cbiAgaWYgKHN1YkRlcml2YXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc3ViRGVydmlhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN1YkRlcnZpYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2VOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RlcE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyTmFtZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0UGFyYW1ldGVyTmFtZSgpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUeXBlQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFJlZmVyZW5jZU5vZGUoKTtcblxuICBpZiAocmVmZXJlbmNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHByb29mTm9kZSA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0UHJvb2ZOb2RlKCk7XG5cbiAgaWYgKHByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3VicHJvb2ZPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VicHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mT3JTdWJwcm9vZk5vZGVTdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlLmlzU3VicHJvb2ZOb2RlKCk7XG5cbiAgaWYgKHN1YnByb29mT3JTdWJwcm9vZk5vZGVTdWJwcm9vZk5vZGUpIHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlOyAgLy8vXG5cbiAgICBzdWJwcm9vZiA9IHN1YnByb29mRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5ID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eU5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldERlZmluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZHVjdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpO1xuXG4gIGlmIChkZWR1Y3Rpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSh0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZU5vZGUgPSB0b3BMZXZlbEFzc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKTtcblxuICBpZiAoc2lnbmF0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxhYmVsID0gbnVsbDtcblxuICBjb25zdCBsYWJlbE5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRMYWJlbE5vZGUoKTtcblxuICBpZiAobGFiZWxOb2RlICE9PSBudWxsKSB7XG4gICAgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZXMgPSBkZXJpdmF0aW9uTm9kZS5nZXRTdGVwT3JTdWJwcm9vZk5vZGVzKCksXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwT3JTdWJwcm9vZk5vZGVzLm1hcCgoc3RlcE9yU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBzdGVwc09yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwc09yU3VicHJvb2ZzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eUFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAocHJvcGVydHlBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICB0eXBlID0gYmFzZVR5cGU7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkgezBcbiAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29udGFpbmVkQXNzZXJ0aW9uID0gY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eSA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGUuZ2V0UHJvcGVydHlOb2RlKCk7XG5cbiAgaWYgKHByb3BlcnR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKTtcblxuICBpZiAoc2lnbmF0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IHN1YkRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBkZWR1Y3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0IGRlZHVjdGlvbk5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCk7XG5cbiAgaWYgKGRlZHVjdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChyZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZVJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFByb2NlZHVyZVJlZmVyZW5jZU5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlUHJlZml4ID0gbnVsbDtcblxuICBjb25zdCB0eXBlUHJlZml4Tm9kZSA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZVByZWZpeE5vZGUoKTtcblxuICBpZiAodHlwZVByZWZpeE5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb21iaW5hdG9yID0gbnVsbDtcblxuICBjb25zdCBjb21iaW5hdG9yTm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0Q29tYmluYXRvck5vZGUoKTtcblxuICBpZiAoY29tYmluYXRvck5vZGUgIT09IG51bGwpIHtcbiAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGFUeXBlID0gbnVsbDtcblxuICBjb25zdCBtZXRhVHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YVR5cGVOb2RlKCk7XG5cbiAgaWYgKG1ldGFUeXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5UmVsYXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5UmVsYXRpb25Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLmdldFByb3BlcnR5UmVsYXRpb25Ob2RlKCk7XG5cbiAgaWYgKHByb3BlcnR5UmVsYXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29uc3RydWN0b3IgPSBudWxsO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9yTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldENvbnN0cnVjdG9yTm9kZSgpO1xuXG4gIGlmIChjb25zdHJ1Y3Rvck5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCB0ZXJtcyA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21QcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VzID0gcHJlbWlzZU5vZGVzLm1hcCgocHJlbWlzZU5vZGUpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlID0gcHJlbWlzZUZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyhzdGF0ZW1lbnROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tU3VwZXJUeXBlTm9kZXMoc3VwZXJUeXBlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZU5vZGVzLm1hcCgoc3VwZXJUeXBlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHR5cGVOb2RlID0gc3VwZXJUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pLFxuICAgICAgICBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBiYXNlVHlwZTsgLy8vXG5cbiAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcbiAgfVxuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2VzID0gaHlwb3RoZXNpc05vZGVzLm1hcCgoaHlwb3RoZXNlTm9kZSkgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXMgPSBoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tQXNzdW1wdGlvbk5vZGVzKGFzc3VtcHRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25Ob2Rlcy5tYXAoKGFzc3VtcHRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlcyhwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydGllcyA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlcy5tYXAoKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBydWxlTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVtaXNlTm9kZXMgPSBydWxlTm9kZS5nZXRQcmVtaXNlTm9kZXMoKSxcbiAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21QcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gc2lnbmF0dXJlTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlcyA9IGZyYW1lTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IGVxdWl2YWxlbmNlTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gc3VicHJvb2ZOb2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTm9kZXMgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlKHRvcExldmVsQXNzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlcyA9IHRvcExldmVsQXNzc2VydGlvbk5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGVzKCksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzKHN0YXRlbWVudE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUodG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gdG9wTGV2ZWxBc3NzZXJ0aW9uTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcygpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMocHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwZXJUeXBlTm9kZXMgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRTdXBlclR5cGVOb2RlcygpLFxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21TdXBlclR5cGVOb2RlcyhzdXBlclR5cGVOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbImFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMiLCJhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUiLCJheGlvbUZyb21BeGlvbU5vZGUiLCJheGlvbUZyb21TZWN0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb25jbHVzaW5vRnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25Gcm9tUHJlbWlzZU5vZGUiLCJjb25jbHVzaW9uRnJvbVJ1bGVOb2RlIiwiY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUiLCJkZWR1Y3Rpb25Gcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwiZGVkdWN0aW9uRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZSIsImRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlIiwiZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZSIsImVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZSIsImVycm9yRnJvbUVycm9yTm9kZSIsImZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMiLCJoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlIiwiaHlwcG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUiLCJpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSIsImp1ZGdlbWVudEZyb21KdWRnZW1lbnROb2RlIiwianVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJsYWJlbEZyb21MYWJlbE5vZGUiLCJsYWJlbEZyb21Ub3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwibGFiZWxzRnJvbUxhYmVsTm9kZXMiLCJsYWJlbHNGcm9tUnVsZU5vZGUiLCJsYWJlbHNGcm9tVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwibGVtbWFGcm9tTGVtbWFOb2RlIiwibGVtbWFGcm9tU2VjdGlvbk5vZGUiLCJtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZSIsIm1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF0aGVvcmVtRnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tQXNzdW1wdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsIm5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyTmFtZUZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcmVmaXhlZEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByZWZpeGVkRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVtaXNlRnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZXNGcm9tUHJlbWlzZU5vZGVzIiwicHJlbWlzZXNGcm9tUnVsZU5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJwcm9vZkZyb21Qcm9vZk5vZGUiLCJwcm9vZkZyb21SdWxlTm9kZSIsInByb29mRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInByb29mRnJvbVRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydGllc0Zyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbVN0ZXBOb2RlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJydWxlRnJvbVJ1bGVOb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZSIsInNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUiLCJzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIiwic2lnbmF0dXJlRnJvbVRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlIiwic3RhdGVtZW50RnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlIiwic3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlIiwic3RhdGVtZW50RnJvbVByZW1pc2VOb2RlIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudEZyb21TdGVwTm9kZSIsInN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN0ZXBGcm9tU3RlcE5vZGUiLCJzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlIiwic3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUiLCJzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlc0Zyb21TdXBlclR5cGVOb2RlcyIsInN1cHBvc2l0aW9uRnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc0Zyb21Ub3BMZXZlbEFzc2VydGlvbk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJ0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZSIsInRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidGVybXNGcm9tRXF1aXZhbGVuY2VOb2RlIiwidGVybXNGcm9tU2lnbmF0dXJlTm9kZSIsInRlcm1zRnJvbVRlcm1Ob2RlcyIsInRoZW9yZW1Gcm9tU2VjdGlvbk5vZGUiLCJ0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlIiwidHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbVR5cGVOb2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1Ob2RlIiwidmFyaWFibGVGcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiY29udGV4dCIsInR5cGUiLCJiYXNlVHlwZSIsImJhc2VUeXBlRnJvbU5vdGhpbmciLCJUeXBlIiwiZWxlbWVudHMiLCJ0eXBlTmFtZSIsImdldFR5cGVOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJnZXRUeXBlUHJlZml4TmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwicHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwic3RlcE5vZGUiLCJTdGVwIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RlcCIsInJ1bGVOb2RlIiwiUnVsZSIsInByb29mIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwicnVsZVN0cmluZyIsInJ1bHNTdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwicnVsZSIsImxhYmVsTm9kZSIsIkxhYmVsIiwibWV0YXZhcmlhYmxlIiwibGFiZWwiLCJlcnJvck5vZGUiLCJFcnJvciIsImVycm9yIiwibGVtbWFOb2RlIiwiTGVtbWEiLCJ0b3BMZXZlbEFzc3NlcnRpb25Ob2RlIiwiZGVkdWN0aW9uIiwic3VwcG9zaXRpb25zIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsInRvcExldmVsQXNzc2VydGlvblN0cmluZyIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsImxlbW1hIiwiZnJhbWVOb2RlIiwiRnJhbWUiLCJhc3N1bXB0aW9ucyIsImZyYW1lIiwicHJvb2ZOb2RlIiwiUHJvb2YiLCJkZXJpdmF0aW9uIiwiYXhpb21Ob2RlIiwiQXhpb20iLCJheGlvbSIsInNlY3Rpb25Ob2RlIiwiaHlwb3RoZXNpc05vZGVzIiwiZ2V0SHlwb3RoZXNpc05vZGVzIiwidGhlb3JlbSIsImNvbmplY3R1cmUiLCJzZWN0aW9uU3RyaW5nIiwic2VjdGlvblN0cmluZ0Zyb21IeXBvdGhlc2VzVG9wTGV2ZWxBc3NlcnRpb24iLCJzZWN0aW9uIiwiU2VjdGlvbiIsInByZW1pc2VOb2RlIiwiUHJlbWlzZSIsInByb2NlZHVyZUNhbGwiLCJwcmVtaXNlIiwidGhlb3JlbU5vZGUiLCJUaGVvcmVtIiwiZXF1YWxpdHlOb2RlIiwiRXF1YWxpdHkiLCJsZWZ0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZXF1YWxpdHkiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwicHJvcGVydHlOb2RlIiwiUHJvcGVydHkiLCJwcm9wZXJ0eU5hbWUiLCJnZXRQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eSIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwiaWRlbnRpZmllciIsInByb3BlcnR5UmVsYXRpb25zIiwidmFyaWFibGUiLCJzdWJwcm9vZk5vZGUiLCJTdWJwcm9vZiIsInN1YkRlcml2YXRpb24iLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mU3RyaW5nRnJvbVN1cHBvc2l0aW9uc0FuZFN1YkRlcml2YXRpb24iLCJzdWJwcm9vZiIsInN0YXRlbWVudE5vZGUiLCJnZXRFcXVhbGl0eU5vZGUiLCJsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJyaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwiZGVkdWN0aW9uTm9kZSIsIkRlZHVjdGlvbiIsIlN0YXRlbWVudCIsInNpZ25hdHVyZU5vZGUiLCJTaWduYXR1cmUiLCJ0ZXJtcyIsInJlZmVyZW5jZU5vZGUiLCJSZWZlcmVuY2UiLCJqdWRnZW1lbnROb2RlIiwiSnVkZ2VtZW50IiwiYXNzdW1wdGlvbiIsImp1ZGdlbWVudCIsIm1ldGFMZW1tYU5vZGUiLCJNZXRhTGVtbWEiLCJtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJtZXRhTGVtbWEiLCJwYXJhbWV0ZXJOb2RlIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyTmFtZSIsImdldFBhcmFtZXRlck5hbWUiLCJwYXJhbWV0ZXIiLCJoeXBvdGhlc2VOb2RlIiwiSHlwb3Roc2lzIiwiY29uamVjdHVyZU5vZGUiLCJDb25qZWN0dXJlIiwiY29tYmluYXRvck5vZGUiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImNvbmNsdXNpb25Ob2RlIiwiQ29uY2x1c2lvbiIsImNvbmNsdXNpbm9Ob2RlIiwiY29uY2x1c2lubyIsImFzc3VtcHRpb25Ob2RlIiwiQXNzdW1wdGlvbiIsImRlcml2YXRpb25Ob2RlIiwiRGVyaXZhdGlvbiIsInN0ZXBzT3JTdWJwcm9vZnMiLCJ0eXBlUHJlZml4Tm9kZSIsIlR5cGVQcmVmaXgiLCJ0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlIiwidHlwZUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVQcmVmaXgiLCJtZXRhdGhlb3JlbU5vZGUiLCJNZXRhdGVob3JlbSIsIm1ldGF0aGVvcmVtIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInJlZmVyZW5jZVN0cmluZyIsImluc3RhbnRpYXRlUmVmZXJlbmNlIiwiY29udGV4dEZyb21TdHJpbmciLCJoeXBvdGhlc2lzTm9kZSIsIkh5cG90aGVzaXMiLCJoeXBvdGhlc2lzIiwiY29uc3RydWN0b3JOb2RlIiwiQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsInN1cHBvc2l0aW9uTm9kZSIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJlcXVpdmFsZW5jZU5vZGUiLCJFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlU3RyaW5nIiwiZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXMiLCJlcXVpdmFsZW5jZSIsInByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJnZXROYW1lIiwiTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJzdWJEZXJpdmF0aW9uTm9kZSIsIlN1YkRlcml2YXRpb24iLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsIlR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJQcm9jZWR1cmVDYWxsIiwicGFyYW1ldGVycyIsInByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMiLCJzdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwT3JTdWJwcm9vZiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVmaXhlZCIsImlzUHJlZml4ZWQiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiRGVmaW5lZEFzc2VydGlvbiIsIm5lZ2F0ZWQiLCJpc05lZ2F0ZWQiLCJkZWZpbmVkQXNzZXJ0aW9uIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiVGVybVN1YnN0aXR1dGlvbiIsInRlcm1TdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIlN1YnByb29mQXNzZXJ0aW9uIiwic3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIkNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJQcm9jZWR1cmVSZWZlcmVuY2UiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImdldFR5cGVOb2RlIiwiaXNQcm92aXNpb25hbCIsImdldFZhcmlhYmxlTm9kZSIsInNldFByb3Zpc2lvbmFsIiwic2V0VHlwZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsInNldE1ldGFUeXBlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJnZXRQcm9vZk5vZGUiLCJnZXRBeGlvbU5vZGUiLCJnZXRMZW1tYU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldENvbmNsdXNpb25Ob2RlIiwiZ2V0VGhlb3JlbU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJnZXREZXJpdmF0aW9uTm9kZSIsIm9jbnN0cnVjdG9yTm9kZSIsImdldFRlcm1Ob2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldENvbmplY3R1cmVOb2RlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0SnVkZ2VtZW50Tm9kZSIsInN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlIiwiaXNTdGVwTm9kZSIsImdldEFzc3VtcHRpb25Ob2RlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJzdWJEZXJ2aWF0aW9uIiwiZ2V0U3ViRGVyaXZhdGlvbk5vZGUiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VHlwZUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSIsImlzU3VicHJvb2ZOb2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGVzIiwiZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcyIsIm1hcCIsImdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRQcm9wZXJ0eU5vZGUiLCJnZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwiZ2V0VHlwZVByZWZpeE5vZGUiLCJnZXRDb21iaW5hdG9yTm9kZSIsImdldE1ldGFUeXBlTm9kZSIsImdldFByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZ2V0Q29uc3RydWN0b3JOb2RlIiwidGVybU5vZGVzIiwibGFiZWxOb2RlcyIsInByZW1pc2VOb2RlcyIsInN0YXRlbWVudE5vZGVzIiwic3VwZXJUeXBlTm9kZXMiLCJzdXBlclR5cGVOb2RlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsInB1c2giLCJwYXJhbWV0ZXJOb2RlcyIsImFzc3VtcHRpb25Ob2RlcyIsInN1cHBvc2l0aW9uTm9kZXMiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJnZXRMYWJlbE5vZGVzIiwiZ2V0UHJlbWlzZU5vZGVzIiwiZ2V0QXNzdW1wdGlvbk5vZGVzIiwiZ2V0VGVybU5vZGVzIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsImdldFBhcmFtZXRlck5vZGVzIiwiZ2V0U3RhdGVtZW50Tm9kZXMiLCJnZXRQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJnZXRTdXBlclR5cGVOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBdVpnQkE7ZUFBQUE7O1FBc3JCQUM7ZUFBQUE7O1FBc3pCQUM7ZUFBQUE7O1FBbURBQztlQUFBQTs7UUE3eURBQztlQUFBQTs7UUEycEJBQztlQUFBQTs7UUE1RkFDO2VBQUFBOztRQXVoQ0FDO2VBQUFBOztRQXQyQ0FDO2VBQUFBOztRQXNZQUM7ZUFBQUE7O1FBbFhBQztlQUFBQTs7UUFWQUM7ZUFBQUE7O1FBNmpCQUM7ZUFBQUE7O1FBaEdBQztlQUFBQTs7UUF4ZkFDO2VBQUFBOztRQTRrQkFDO2VBQUFBOztRQS9MQUM7ZUFBQUE7O1FBOGdDQUM7ZUFBQUE7O1FBcnlDQUM7ZUFBQUE7O1FBMktBQztlQUFBQTs7UUFtNkJBQztlQUFBQTs7UUE5eENBQztlQUFBQTs7UUF1cENBQztlQUFBQTs7UUFrUEFDO2VBQUFBOztRQWhsQ0FDO2VBQUFBOztRQTB6QkFDO2VBQUFBOztRQS85QkFDO2VBQUFBOztRQWtlQUM7ZUFBQUE7O1FBL3JCQUM7ZUFBQUE7O1FBd0RBQztlQUFBQTs7UUFzUEFDO2VBQUFBOztRQXhaQUM7ZUFBQUE7O1FBc3ZDQUM7ZUFBQUE7O1FBNUlBQztlQUFBQTs7UUFobENBQztlQUFBQTs7UUE4cENBQztlQUFBQTs7UUEzWkFDO2VBQUFBOztRQS9RQUM7ZUFBQUE7O1FBNDJCQUM7ZUFBQUE7O1FBb2FBQztlQUFBQTs7UUEzaERBQztlQUFBQTs7UUFzSEFDO2VBQUFBOztRQTRoQkFDO2VBQUFBOztRQXhyQkFDO2VBQUFBOztRQTJzQkFDO2VBQUFBOztRQWw3QkFDO2VBQUFBOztRQXczQ0FDO2VBQUFBOztRQW9YQUM7ZUFBQUE7O1FBb0dBQztlQUFBQTs7UUFpREFDO2VBQUFBOztRQTkyREFDO2VBQUFBOztRQTRzQkFDO2VBQUFBOztRQTdlQUM7ZUFBQUE7O1FBakhBQztlQUFBQTs7UUF5aERBQztlQUFBQTs7UUFwekNBQztlQUFBQTs7UUFtVkFDO2VBQUFBOztRQWlmQUM7ZUFBQUE7O1FBdlJBQztlQUFBQTs7UUF1cUJBQztlQUFBQTs7UUFudUJBQztlQUFBQTs7UUErM0JBQztlQUFBQTs7UUFueUNBQztlQUFBQTs7UUFxckJBQztlQUFBQTs7UUFrbUJBQztlQUFBQTs7UUExbkJBQztlQUFBQTs7UUE4bUJBQztlQUFBQTs7UUFqeENBQztlQUFBQTs7UUEzS0FDO2VBQUFBOztRQXM1QkFDO2VBQUFBOztRQXNvQkFDO2VBQUFBOztRQTRGQUM7ZUFBQUE7O1FBMTRDQUM7ZUFBQUE7O1FBTkFDO2VBQUFBOztRQWxaQUM7ZUFBQUE7O1FBOHBEQUM7ZUFBQUE7O1FBaUdBQztlQUFBQTs7UUFuMEJBQztlQUFBQTs7UUE5akJBQztlQUFBQTs7UUFzekJBQztlQUFBQTs7UUEwV0FDO2VBQUFBOztRQXRpQ0FDO2VBQUFBOztRQWxpQkFDO2VBQUFBOztRQXlwQkFDO2VBQUFBOztRQXVnQkFDO2VBQUFBOztRQThKQUM7ZUFBQUE7O1FBMGlCQUM7ZUFBQUE7O1FBaEZBQztlQUFBQTs7UUFueUNBQztlQUFBQTs7UUF3M0JBQztlQUFBQTs7UUFvR0FDO2VBQUFBOztRQXYzQ0FDO2VBQUFBOztRQWdwQ0FDO2VBQUFBOztRQThZQUM7ZUFBQUE7O1FBcHFDQUM7ZUFBQUE7O1FBOGVBQztlQUFBQTs7UUExbkJBQztlQUFBQTs7UUFnMEJBQztlQUFBQTs7UUF6OUJBQztlQUFBQTs7UUFpNENBQztlQUFBQTs7UUF2RUFDO2VBQUFBOztRQXB4QkFDO2VBQUFBOztRQTFHQUM7ZUFBQUE7O1FBdnFCQUM7ZUFBQUE7O1FBbWxCQUM7ZUFBQUE7O1FBazZCQUM7ZUFBQUE7O1FBM1ZBQztlQUFBQTs7UUFua0NBQztlQUFBQTs7UUFrOENBQztlQUFBQTs7UUF4ekNBQztlQUFBQTs7UUE2b0NBQztlQUFBQTs7UUEvdEJBQztlQUFBQTs7UUFtV0FDO2VBQUFBOztRQXNvQkFDO2VBQUFBOztRQTlwQkFDO2VBQUFBOztRQVlBQztlQUFBQTs7UUEyaEJBQztlQUFBQTs7UUE3a0JBQztlQUFBQTs7UUFrR0FDO2VBQUFBOztRQTdMQUM7ZUFBQUE7O1FBcG9CQUM7ZUFBQUE7O1FBMjRDQUM7ZUFBQUE7O1FBMzFCQUM7ZUFBQUE7O1FBeVNBQztlQUFBQTs7UUFwWkFDO2VBQUFBOztRQW9uQ0FDO2VBQUFBOztRQXdJQUM7ZUFBQUE7O1FBbDZEQUM7ZUFBQUE7O1FBdzlCQUM7ZUFBQUE7O1FBNWRBQztlQUFBQTs7UUE4NkJBQztlQUFBQTs7UUErSkFDO2VBQUFBOztRQS9tQ0FDO2VBQUFBOztRQTRwQkFDO2VBQUFBOztRQTJVQUM7ZUFBQUE7O1FBejNCQUM7ZUFBQUE7O1FBNHFCQUM7ZUFBQUE7O1FBMWpDQUM7ZUFBQUE7O1FBNnZEQUM7ZUFBQUE7O1FBbkpBQztlQUFBQTs7UUFuM0NBQztlQUFBQTs7UUE0OUNBQztlQUFBQTs7UUF2REFDO2VBQUFBOztRQW1GQUM7ZUFBQUE7O1FBcUJBQztlQUFBQTs7UUFqZkFDO2VBQUFBOztRQXBuQkFDO2VBQUFBOztRQXlhQUM7ZUFBQUE7O1FBNUxBQztlQUFBQTs7UUFvRkFDO2VBQUFBOztRQXhFQUM7ZUFBQUE7O1FBL2xDQUM7ZUFBQUE7O1FBMm1DQUM7ZUFBQUE7O1FBek1BQztlQUFBQTs7UUFpY0FDO2VBQUFBOztRQS95QkFDO2VBQUFBOztRQSsxQ0FDO2VBQUFBOztRQWRBQztlQUFBQTs7UUE1SEFDO2VBQUFBOztRQXY4QkFDO2VBQUFBOztRQXhyQkFDO2VBQUFBOztRQTJqQ0FDO2VBQUFBOztRQW50QkFDO2VBQUFBOztRQW8vQkFDO2VBQUFBOztRQVlBQztlQUFBQTs7UUF2TkFDO2VBQUFBOztRQW9GQUM7ZUFBQUE7O1FBamNBQztlQUFBQTs7UUF4OEJBQztlQUFBQTs7UUE4cUJBQztlQUFBQTs7UUFxaENBQztlQUFBQTs7UUF2eUNBQztlQUFBQTs7UUErUEFDO2VBQUFBOztRQWlKQUM7ZUFBQUE7O1FBeWpCQUM7ZUFBQUE7O1FBK1BBQztlQUFBQTs7UUEvNENBQztlQUFBQTs7OytEQW5PSzt1QkFFYTtxQkFDRTsyQkFDQzt5QkFDTTtzQkFPa0M7Ozs7OztBQUV0RSxTQUFTUixpQkFBaUJTLFFBQVEsRUFBRUMsT0FBTztJQUNoRCxJQUFJQztJQUVKLElBQUlGLGFBQWEsTUFBTTtRQUNyQixJQUFNRyxXQUFXQyxJQUFBQSwwQkFBbUI7UUFFcENGLE9BQU9DLFVBQVcsR0FBRztJQUN2QixPQUFPO1FBQ0wsSUFBTSxBQUFFRSxPQUFTQyxpQkFBUSxDQUFqQkQsTUFDRkUsV0FBV1AsU0FBU1EsV0FBVyxJQUMvQkMsaUJBQWlCVCxTQUFTVSxpQkFBaUIsSUFDM0NDLGtCQUFrQlgsU0FBU1ksa0JBQWtCLElBQzdDQyxTQUFTRixpQkFDVEcsT0FBT2QsVUFDUGUsT0FBT1IsVUFDUFMsYUFBYVAsZ0JBQ2JRLGFBQWEsTUFDYkMsYUFBYSxNQUNiQyxjQUFjO1FBRXBCakIsT0FBTyxJQUFJRyxLQUFLSixTQUFTWSxRQUFRQyxNQUFNQyxNQUFNQyxZQUFZQyxZQUFZQyxZQUFZQztJQUNuRjtJQUVBLE9BQU9qQjtBQUNUO0FBRU8sU0FBUzVCLGlCQUFpQjhDLFFBQVEsRUFBRW5CLE9BQU87SUFDaEQsSUFBTSxBQUFFb0IsT0FBU2YsaUJBQVEsQ0FBakJlLE1BQ0ZQLE9BQU9NLFVBQ1BQLFNBQVNaLFFBQVFxQixZQUFZLENBQUNSLE9BQzlCWixPQUFPO0lBRWJELFVBQVU7SUFFVixJQUFNc0IsT0FBTyxJQUFJRixLQUFLcEIsU0FBU1ksUUFBUUMsTUFBTVo7SUFFN0MsT0FBT3FCO0FBQ1Q7QUFFTyxTQUFTekUsaUJBQWlCMEUsUUFBUSxFQUFFdkIsT0FBTztJQUNoRCxJQUFNLEFBQUV3QixPQUFTbkIsaUJBQVEsQ0FBakJtQixNQUNGWCxPQUFPVSxVQUNQWCxTQUFTWixRQUFRcUIsWUFBWSxDQUFDUixPQUM5QlksWUFBWWpGLHNCQUFzQitFLFVBQVV2QixVQUM1QzBCLFlBQVl2RyxzQkFBc0JvRyxVQUFVdkIsVUFDNUMyQixxQkFBcUJuRywrQkFBK0IrRixVQUFVdkIsVUFDOUQ0QixPQUFPLElBQUlKLEtBQUt4QixTQUFTWSxRQUFRQyxNQUFNWSxXQUFXQyxXQUFXQztJQUVuRSxPQUFPQztBQUNUO0FBRU8sU0FBU3ZHLGlCQUFpQndHLFFBQVEsRUFBRTdCLE9BQU87SUFDaEQsSUFBTSxBQUFFOEIsT0FBU3pCLGlCQUFRLENBQWpCeUIsTUFDRkMsUUFBUTlILGtCQUFrQjRILFVBQVU3QixVQUNwQ2dDLFNBQVNsSyxtQkFBbUIrSixVQUFVN0IsVUFDdENpQyxXQUFXdkkscUJBQXFCbUksVUFBVTdCLFVBQzFDa0MsYUFBYXZNLHVCQUF1QmtNLFVBQVU3QixVQUM5Q21DLGFBQWFDLElBQUFBLGlEQUF5QyxFQUFDSixRQUFRQyxVQUFVQyxhQUN6RXJCLE9BQU9nQixVQUNQakIsU0FBU3VCLFlBQ1RFLE9BQU8sSUFBSVAsS0FBSzlCLFNBQVNZLFFBQVFDLE1BQU1rQixPQUFPQyxRQUFRQyxVQUFVQztJQUV0RSxPQUFPRztBQUNUO0FBRU8sU0FBUzFLLG1CQUFtQjJLLFNBQVMsRUFBRXRDLE9BQU87SUFDbkQsSUFBTSxBQUFFdUMsUUFBVWxDLGlCQUFRLENBQWxCa0MsT0FDRjFCLE9BQU95QixXQUNQMUIsU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUIyQixlQUFlOUosMEJBQTBCNEosV0FBV3RDLFVBQ3BEeUMsUUFBUSxJQUFJRixNQUFNdkMsU0FBU1ksUUFBUUMsTUFBTTJCO0lBRS9DLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTNUwsbUJBQW1CNkwsU0FBUyxFQUFFMUMsT0FBTztJQUNuRCxJQUFNLEFBQUUyQyxRQUFVdEMsaUJBQVEsQ0FBbEJzQyxPQUNGOUIsT0FBTzZCLFdBQ1A5QixTQUFTWixRQUFRcUIsWUFBWSxDQUFDUixPQUM5QitCLFFBQVEsSUFBSUQsTUFBTTNDLFNBQVNZLFFBQVFDO0lBRXpDLE9BQU8rQjtBQUNUO0FBRU8sU0FBUzVLLG1CQUFtQjZLLFNBQVMsRUFBRTdDLE9BQU87SUFDbkQsSUFBTSxBQUFFOEMsUUFBVXpDLGlCQUFRLENBQWxCeUMsT0FDRkMseUJBQXlCRixXQUN6QmQsUUFBUTdILCtCQUErQjZJLHdCQUF3Qi9DLFVBQy9EZ0MsU0FBU2pLLGdDQUFnQ2dMLHdCQUF3Qi9DLFVBQ2pFZ0QsWUFBWTVNLG1DQUFtQzJNLHdCQUF3Qi9DLFVBQ3ZFaUQsZUFBZXBGLHNDQUFzQ2tGLHdCQUF3Qi9DLFVBQzdFa0QsWUFBWXRILG1DQUFtQ21ILHdCQUF3Qi9DLFVBQ3ZFbUQsYUFBYSxFQUFFLEVBQ2ZDLDJCQUEyQkMsSUFBQUEsaUVBQXlELEVBQUNyQixRQUFRaUIsY0FBY0QsWUFDM0duQyxPQUFPZ0MsV0FDUGpDLFNBQVN3QywwQkFDVEUsUUFBUSxJQUFJUixNQUFNOUMsU0FBU1ksUUFBUUMsTUFBTW1CLFFBQVFpQixjQUFjRCxXQUFXakIsT0FBT21CLFdBQVdDO0lBRWxHLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTdE0sbUJBQW1CdU0sU0FBUyxFQUFFdkQsT0FBTztJQUNuRCxJQUFNLEFBQUV3RCxRQUFVbkQsaUJBQVEsQ0FBbEJtRCxPQUNGM0MsT0FBTzBDLFdBQ1AzQyxTQUFTWixRQUFRcUIsWUFBWSxDQUFDUixPQUM5QjRDLGNBQWN4Tyx5QkFBeUJzTyxXQUFXdkQsVUFDbEQwRCxRQUFRLElBQUlGLE1BQU14RCxTQUFTWSxRQUFRQyxNQUFNNEM7SUFFL0MsT0FBT0M7QUFDVDtBQUVPLFNBQVMxSixtQkFBbUIySixTQUFTLEVBQUUzRCxPQUFPO0lBQ25ELElBQU0sQUFBRTRELFFBQVV2RCxpQkFBUSxDQUFsQnVELE9BQ0YvQyxPQUFPOEMsV0FDUC9DLFNBQVMsTUFDVGlELGFBQWFwTix3QkFBd0JrTixXQUFXM0QsVUFDaEQrQixRQUFRLElBQUk2QixNQUFNNUQsU0FBU1ksUUFBUUMsTUFBTWdEO0lBRS9DLE9BQU85QjtBQUNUO0FBRU8sU0FBUzdNLG1CQUFtQjRPLFNBQVMsRUFBRTlELE9BQU87SUFDbkQsSUFBTSxBQUFFK0QsUUFBVTFELGlCQUFRLENBQWxCMEQsT0FDRmhCLHlCQUF5QmUsV0FDekIvQixRQUFRLE1BQ1JDLFNBQVNqSyxnQ0FBZ0NnTCx3QkFBd0IvQyxVQUNqRWdELFlBQVk1TSxtQ0FBbUMyTSx3QkFBd0IvQyxVQUN2RWlELGVBQWVwRixzQ0FBc0NrRix3QkFBd0IvQyxVQUM3RWtELFlBQVl0SCxtQ0FBbUNtSCx3QkFBd0IvQyxVQUN2RW1ELGFBQWEsRUFBRSxFQUNmQywyQkFBMkJDLElBQUFBLGlFQUF5RCxFQUFDckIsUUFBUWlCLGNBQWNELFlBQzNHbkMsT0FBT2lELFdBQ1BsRCxTQUFTd0MsMEJBQ1RZLFFBQVEsSUFBSUQsTUFBTS9ELFNBQVNZLFFBQVFDLE1BQU1tQixRQUFRaUIsY0FBY0QsV0FBV2pCLE9BQU9tQixXQUFXQztJQUVsRyxPQUFPYTtBQUNUO0FBRU8sU0FBU3ZJLHVCQUF1QndJLFdBQVcsRUFBRWpFLE9BQU87SUFDekQsSUFBTWtFLGtCQUFrQkQsWUFBWUUsa0JBQWtCLElBQ2hEaEIsYUFBYTlMLDhCQUE4QjZNLGlCQUFpQmxFLFVBQzVEZ0UsUUFBUTdPLHFCQUFxQjhPLGFBQWFqRSxVQUMxQ3NELFFBQVFyTCxxQkFBcUJnTSxhQUFhakUsVUFDMUNvRSxVQUFVdkYsdUJBQXVCb0YsYUFBYWpFLFVBQzlDcUUsYUFBYXhPLDBCQUEwQm9PLGFBQWFqRSxVQUNwRHNFLGdCQUFnQkMsSUFBQUEsb0RBQTRDLEVBQUNwQixZQUFZYSxPQUFPVixPQUFPYyxTQUFTQyxZQUFZckUsVUFDNUdhLE9BQU9vRCxhQUNQckQsU0FBUzBELGVBQ1RFLFVBQVUsSUFBSUMsUUFBUXpFLFNBQVNZLFFBQVFDLE1BQU1zQyxZQUFZYSxPQUFPVixPQUFPYyxTQUFTQztJQUV0RixPQUFPRztBQUNUO0FBRU8sU0FBU2hMLHVCQUF1QmtMLFdBQVcsRUFBRTFFLE9BQU87SUFDekQsSUFBTSxBQUFFMkUsVUFBWXRFLGlCQUFRLENBQXBCc0UsU0FDRjlELE9BQU82RCxhQUNQOUQsU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUJZLFlBQVlwRix5QkFBeUJxSSxhQUFhMUUsVUFDbEQ0RSxnQkFBZ0JqTCw2QkFBNkIrSyxhQUFhMUUsVUFDMUQ2RSxVQUFVLElBQUlGLFFBQVEzRSxTQUFTWSxRQUFRQyxNQUFNWSxXQUFXbUQ7SUFFOUQsT0FBT0M7QUFDVDtBQUVPLFNBQVMvRix1QkFBdUJnRyxXQUFXLEVBQUU5RSxPQUFPO0lBQ3pELElBQU0sQUFBRStFLFVBQVkxRSxpQkFBUSxDQUFwQjBFLFNBQ0ZoQyx5QkFBeUIrQixhQUN6Qi9DLFFBQVE3SCwrQkFBK0I2SSx3QkFBd0IvQyxVQUMvRGdDLFNBQVNqSyxnQ0FBZ0NnTCx3QkFBd0IvQyxVQUNqRWdELFlBQVk1TSxtQ0FBbUMyTSx3QkFBd0IvQyxVQUN2RWlELGVBQWVwRixzQ0FBc0NrRix3QkFBd0IvQyxVQUM3RWtELFlBQVl0SCxtQ0FBbUNtSCx3QkFBd0IvQyxVQUN2RW1ELGFBQWEsRUFBRSxFQUNmQywyQkFBMkJDLElBQUFBLGlFQUF5RCxFQUFDckIsUUFBUWlCLGNBQWNELFlBQzNHbkMsT0FBT2lFLGFBQ1BsRSxTQUFTd0MsMEJBQ1RnQixVQUFVLElBQUlXLFFBQVEvRSxTQUFTWSxRQUFRQyxNQUFNbUIsUUFBUWlCLGNBQWNELFdBQVdqQixPQUFPbUIsV0FBV0M7SUFFdEcsT0FBT2lCO0FBQ1Q7QUFFTyxTQUFTMU4seUJBQXlCc08sWUFBWSxFQUFFaEYsT0FBTztJQUM1RCxJQUFNLEFBQUVpRixZQUFhNUUsaUJBQVEsQ0FBckI0RSxVQUNGcEUsT0FBT21FLGNBQ1BwRSxTQUFTWixRQUFRcUIsWUFBWSxDQUFDUixPQUM5QnFFLGVBQWVGLGFBQWFHLGVBQWUsSUFDM0NDLGdCQUFnQkosYUFBYUssZ0JBQWdCLElBQzdDQyxXQUFXakgsaUJBQWlCNkcsY0FBY2xGLFVBQzFDdUYsWUFBWWxILGlCQUFpQitHLGVBQWVwRixVQUM1Q3dGLFdBQVcsSUFBSVAsVUFBU3JFLFFBQVEwRSxVQUFVQztJQUVoRCxPQUFPQztBQUNUO0FBRU8sU0FBU3JOLHlCQUF5QnNOLFlBQVksRUFBRXpGLE9BQU87SUFDNUQsSUFBTTBGLGVBQWVELGFBQWFFLGVBQWUsSUFDM0NDLFdBQVdDLElBQUFBLHFDQUEwQixFQUFDSDtJQUU1QyxPQUFPRTtBQUNUO0FBRU8sU0FBU25MLHlCQUF5QnFMLFlBQVksRUFBRTlGLE9BQU87SUFDNUQsSUFBTSxBQUFFK0YsV0FBYTFGLGlCQUFRLENBQXJCMEYsVUFDRmxGLE9BQU9pRixjQUNQbEYsU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUJtRixlQUFlRixhQUFhRyxlQUFlLElBQzNDdkYsa0JBQWtCLE1BQ2xCSSxPQUFPa0YsY0FDUEUsV0FBVyxJQUFJSCxTQUFTL0YsU0FBU1ksUUFBUUMsTUFBTUMsTUFBTUo7SUFFM0QsT0FBT3dGO0FBQ1Q7QUFFTyxTQUFTcEcseUJBQXlCcUcsWUFBWSxFQUFFbkcsT0FBTztJQUM1RCxJQUFNLEFBQUVvRyxXQUFhL0YsaUJBQVEsQ0FBckIrRixVQUNGdkYsT0FBT3NGLGNBQ1B2RixTQUFTWixRQUFRcUIsWUFBWSxDQUFDUixPQUM5QlosT0FBTyxNQUNQb0csYUFBYTdPLDJCQUEyQjJPLGNBQWNuRyxVQUN0RHNHLG9CQUFvQixFQUFFLEVBQ3RCQyxXQUFXLElBQUlILFNBQVNwRyxTQUFTWSxRQUFRQyxNQUFNWixNQUFNb0csWUFBWUM7SUFFdkUsT0FBT0M7QUFDVDtBQUVPLFNBQVNoSix5QkFBeUJpSixZQUFZLEVBQUV4RyxPQUFPO0lBQzVELElBQU0sQUFBRXlHLFdBQWFwRyxpQkFBUSxDQUFyQm9HLFVBQ0Y1RixPQUFPMkYsY0FDUHZELGVBQWV0Riw2QkFBNkI2SSxjQUFjeEcsVUFDMUQwRyxnQkFBZ0J2Siw4QkFBOEJxSixjQUFjeEcsVUFDNUQyRyxpQkFBaUJDLElBQUFBLHNEQUE4QyxFQUFDM0QsY0FBY3lELGVBQWUxRyxVQUM3RlksU0FBUytGLGdCQUNURSxXQUFXLElBQUlKLFNBQVN6RyxTQUFTWSxRQUFRQyxNQUFNb0MsY0FBY3lEO0lBRW5FLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTbFEsMEJBQTBCbVEsYUFBYSxFQUFFOUcsT0FBTztJQUM5RCxJQUFJd0YsV0FBVztJQUVmLElBQU1SLGVBQWU4QixjQUFjQyxlQUFlO0lBRWxELElBQUkvQixpQkFBaUIsTUFBTTtRQUN6QixJQUFNbkUsT0FBT21FLGNBQ1BwRSxTQUFTWixRQUFRcUIsWUFBWSxDQUFDUixPQUM5QnlFLFdBQVcwQix5QkFBeUJoQyxjQUFjaEYsVUFDbER1RixZQUFZMEIsMEJBQTBCakMsY0FBY2hGO1FBRTFEd0YsV0FBVyxJQUFJUCxTQUFTakYsU0FBU1ksUUFBUUMsTUFBTXlFLFVBQVVDO0lBQzNEO0lBRUEsT0FBT0M7QUFDVDtBQUVPLFNBQVNyUCwyQkFBMkIrUSxhQUFhLEVBQUVsSCxPQUFPO0lBQy9ELElBQU0sQUFBRW1ILFlBQWM5RyxpQkFBUSxDQUF0QjhHLFdBQ0Z0RyxPQUFPcUcsZUFDUHRHLFNBQVNaLFFBQVFxQixZQUFZLENBQUNSLE9BQzlCWSxZQUFZdEYsMkJBQTJCK0ssZUFBZWxILFVBQ3REZ0QsWUFBWSxJQUFJbUUsVUFBVW5ILFNBQVNZLFFBQVFDLE1BQU1ZO0lBRXZELE9BQU91QjtBQUNUO0FBRU8sU0FBUzFHLDJCQUEyQndLLGFBQWEsRUFBRTlHLE9BQU87SUFDL0QsSUFBTSxBQUFFb0gsWUFBYy9HLGlCQUFRLENBQXRCK0csV0FDRnZHLE9BQU9pRyxlQUNQbEcsU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1I7SUFFcENiLFVBQVU7SUFFVixJQUFNeUIsWUFBWSxJQUFJMkYsVUFBVXBILFNBQVNZLFFBQVFDO0lBRWpELE9BQU9ZO0FBQ1Q7QUFFTyxTQUFTOUYsMkJBQTJCMEwsYUFBYSxFQUFFckgsT0FBTztJQUMvRCxJQUFNLEFBQUVzSCxZQUFjakgsaUJBQVEsQ0FBdEJpSCxXQUNGekcsT0FBT3dHLGVBQ1B6RyxTQUFTWixRQUFRcUIsWUFBWSxDQUFDUixPQUM5QjBHLFFBQVE1SSx1QkFBdUIwSSxlQUFlckgsVUFDOUNrRCxZQUFZLElBQUlvRSxVQUFVdEgsU0FBU1ksUUFBUUMsTUFBTTBHO0lBRXZELE9BQU9yRTtBQUNUO0FBRU8sU0FBU2xJLDJCQUEyQndNLGFBQWEsRUFBRXhILE9BQU87SUFDL0QsSUFBTSxBQUFFeUgsWUFBY3BILGlCQUFRLENBQXRCb0gsV0FDRjVHLE9BQU8yRyxlQUNQNUcsU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUIyQixlQUFlM0osOEJBQThCMk8sZUFBZXhILFVBQzVEMEIsWUFBWSxJQUFJK0YsVUFBVXpILFNBQVNZLFFBQVFDLE1BQU0yQjtJQUV2RCxPQUFPZDtBQUNUO0FBRU8sU0FBU2pLLDJCQUEyQmlRLGFBQWEsRUFBRTFILE9BQU87SUFDL0QsSUFBTSxBQUFFMkgsWUFBY3RILGlCQUFRLENBQXRCc0gsV0FDRjlHLE9BQU82RyxlQUNQOUcsU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUI2QyxRQUFReE0sdUJBQXVCd1EsZUFBZTFILFVBQzlDNEgsYUFBYTdTLDRCQUE0QjJTLGVBQWUxSCxVQUN4RDZILFlBQVksSUFBSUYsVUFBVTNILFNBQVNZLFFBQVFDLE1BQU02QyxPQUFPa0U7SUFFOUQsT0FBT0M7QUFDVDtBQUVPLFNBQVMzUCwyQkFBMkI0UCxjQUFhLEVBQUU5SCxPQUFPO0lBQy9ELElBQU0sQUFBRStILFlBQWMxSCxpQkFBUSxDQUF0QjBILFdBQ0ZDLDBCQUEwQkYsZ0JBQzFCL0YsUUFBUTVILG1DQUFtQzZOLHlCQUF5QmhJLFVBQ3BFeUMsUUFBUTdLLG1DQUFtQ29RLHlCQUF5QmhJLFVBQ3BFZ0QsWUFBWTNNLHVDQUF1QzJSLHlCQUF5QmhJLFVBQzVFaUQsZUFBZW5GLDBDQUEwQ2tLLHlCQUF5QmhJLFVBQ2xGaUksOEJBQThCQyxJQUFBQSxvRUFBNEQsRUFBQ3pGLE9BQU9RLGNBQWNELFlBQ2hIbUYsZ0JBQWdCLE1BQ2hCdEgsT0FBT2lILGdCQUNQbEgsU0FBU3FILDZCQUNURyxZQUFZLElBQUlMLFVBQVUvSCxTQUFTWSxRQUFRQyxNQUFNNEIsT0FBT1EsY0FBY0QsV0FBV2pCLE9BQU9vRztJQUU5RixPQUFPQztBQUNUO0FBRU8sU0FBU2xQLDJCQUEyQm1QLGFBQWEsRUFBRXJJLE9BQU87SUFDL0QsSUFBTSxBQUFFc0ksWUFBY2pJLGlCQUFRLENBQXRCaUksV0FDRnpILE9BQU93SCxlQUNQekgsU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUIwSCxnQkFBZ0JGLGNBQWNHLGdCQUFnQixJQUM5QzFILE9BQU95SCxlQUNQRSxZQUFZLElBQUlILFVBQVV0SSxTQUFTWSxRQUFRQyxNQUFNQztJQUV2RCxPQUFPMkg7QUFDVDtBQUVPLFNBQVNuUiw2QkFBNkJvUixhQUFhLEVBQUUxSSxPQUFPO0lBQ2pFLElBQU0sQUFBRTJJLFlBQWN0SSxpQkFBUSxDQUF0QnNJLFdBQ0Y5SCxPQUFPNkgsZUFDUDlILFNBQVNaLFFBQVFxQixZQUFZLENBQUNSLE9BQzlCWSxZQUFZckYsNEJBQTRCc00sZUFBZTFJLFVBQ3ZEeUksWUFBWSxJQUFJRSxVQUFVM0ksU0FBU1ksUUFBUUMsTUFBTVk7SUFFdkQsT0FBT2dIO0FBQ1Q7QUFFTyxTQUFTN1MsNkJBQTZCZ1QsY0FBYyxFQUFFNUksT0FBTztJQUNsRSxJQUFNLEFBQUU2SSxhQUFleEksaUJBQVEsQ0FBdkJ3SSxZQUNGOUYseUJBQXlCNkYsZ0JBQ3pCN0csUUFBUTdILCtCQUErQjZJLHdCQUF3Qi9DLFVBQy9EZ0MsU0FBU2pLLGdDQUFnQ2dMLHdCQUF3Qi9DLFVBQ2pFZ0QsWUFBWTVNLG1DQUFtQzJNLHdCQUF3Qi9DLFVBQ3ZFaUQsZUFBZXBGLHNDQUFzQ2tGLHdCQUF3Qi9DLFVBQzdFa0QsWUFBWXRILG1DQUFtQ21ILHdCQUF3Qi9DLFVBQ3ZFbUQsYUFBYSxFQUFFLEVBQ2ZDLDJCQUEyQkMsSUFBQUEsaUVBQXlELEVBQUNyQixRQUFRaUIsY0FBY0QsWUFDM0duQyxPQUFPK0gsZ0JBQ1BoSSxTQUFTd0MsMEJBQ1RpQixhQUFhLElBQUl3RSxXQUFXN0ksU0FBU1ksUUFBUUMsTUFBTW1CLFFBQVFpQixjQUFjRCxXQUFXakIsT0FBT21CLFdBQVdDO0lBRTVHLE9BQU9rQjtBQUNUO0FBRU8sU0FBUy9PLDZCQUE2QndULGNBQWMsRUFBRTlJLE9BQU87SUFDbEUsSUFBTSxBQUFFK0ksYUFBZTFJLGlCQUFRLENBQXZCMEksWUFDRmxJLE9BQU9pSSxnQkFDUGxJLFNBQVNaLFFBQVFxQixZQUFZLENBQUNSLE9BQzlCWSxZQUFZekYsNEJBQTRCOE0sZ0JBQWdCOUksVUFDeERnSixhQUFhLElBQUlELFdBQVcvSSxTQUFTWSxRQUFRQyxNQUFNWTtJQUV6RCxPQUFPdUg7QUFDVDtBQUVPLFNBQVN2VCw2QkFBNkJ3VCxjQUFjLEVBQUVqSixPQUFPO0lBQ2xFLElBQU0sQUFBRWtKLGFBQWU3SSxpQkFBUSxDQUF2QjZJLFlBQ0ZySSxPQUFPb0ksZ0JBQ1BySSxTQUFTWixRQUFRcUIsWUFBWSxDQUFDUixPQUM5QlksWUFBWXhGLDRCQUE0QmdOLGdCQUFnQmpKLFVBQ3hEa0MsYUFBYSxJQUFJZ0gsV0FBV2xKLFNBQVNZLFFBQVFDLE1BQU1ZO0lBRXpELE9BQU9TO0FBQ1Q7QUFFTyxTQUFTMU0sNkJBQTZCMlQsY0FBYyxFQUFFbkosT0FBTztJQUNsRSxJQUFNLEFBQUVrSixhQUFlN0ksaUJBQVEsQ0FBdkI2SSxZQUNGckksT0FBT3NJLGdCQUNQdkksU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUJZLFlBQVl4Riw0QkFBNEJrTixnQkFBZ0JuSixVQUN4RG9KLGFBQWEsSUFBSUYsV0FBV2xKLFNBQVNZLFFBQVFDLE1BQU1ZO0lBRXpELE9BQU8ySDtBQUNUO0FBRU8sU0FBU3RVLDZCQUE2QnVVLGNBQWMsRUFBRXJKLE9BQU87SUFDbEUsSUFBTSxBQUFFc0osYUFBZWpKLGlCQUFRLENBQXZCaUosWUFDRnpJLE9BQU93SSxnQkFDUHpJLFNBQVNaLFFBQVFxQixZQUFZLENBQUNSLE9BQzlCWSxZQUFZM0YsNEJBQTRCdU4sZ0JBQWdCckosVUFDeEQwQixZQUFZN0csNEJBQTRCd08sZ0JBQWdCckosVUFDeEQ0SCxhQUFhLElBQUkwQixXQUFXdEosU0FBU1ksUUFBUUMsTUFBTVksV0FBV0M7SUFFcEUsT0FBT2tHO0FBQ1Q7QUFFTyxTQUFTcFIsNkJBQTZCK1MsY0FBYyxFQUFFdkosT0FBTztJQUNsRSxJQUFNLEFBQUV3SixhQUFlbkosaUJBQVEsQ0FBdkJtSixZQUNGM0ksT0FBTzBJLGdCQUNQM0ksU0FBUyxNQUNUNkksbUJBQW1Cek0sbUNBQW1DdU0sZ0JBQWdCdkosVUFDdEU2RCxhQUFhLElBQUkyRixXQUFXeEosU0FBU1ksUUFBUUMsTUFBTTRJO0lBRXpELE9BQU81RjtBQUNUO0FBRU8sU0FBU3BFLDZCQUE2QmlLLGNBQWMsRUFBRTFKLE9BQU87SUFDbEUsSUFBTSxBQUFFMkosYUFBZXRKLGlCQUFRLENBQXZCc0osWUFDRjlJLE9BQU82SSxnQkFDUDlJLFNBQVNaLFFBQVFxQixZQUFZLENBQUNSLE9BQzlCUyxPQUFPc0ksdUJBQXVCRixnQkFBZ0IxSixVQUM5Q0MsT0FBTzRKLHVCQUF1QkgsZ0JBQWdCMUosVUFDOUM4SixhQUFhLElBQUlILFdBQVczSixTQUFTWSxRQUFRQyxNQUFNUyxNQUFNckI7SUFFL0QsT0FBTzZKO0FBQ1Q7QUFFTyxTQUFTelIsNkJBQTZCMFIsZUFBZSxFQUFFL0osT0FBTztJQUNuRSxJQUFNLEFBQUVnSyxjQUFnQjNKLGlCQUFRLENBQXhCMkosYUFDRmhDLDBCQUEwQitCLGlCQUMxQmhJLFFBQVE1SCxtQ0FBbUM2Tix5QkFBeUJoSSxVQUNwRXlDLFFBQVE3SyxtQ0FBbUNvUSx5QkFBeUJoSSxVQUNwRWdELFlBQVkzTSx1Q0FBdUMyUix5QkFBeUJoSSxVQUM1RWlELGVBQWVuRiwwQ0FBMENrSyx5QkFBeUJoSSxVQUNsRmlJLDhCQUE4QkMsSUFBQUEsb0VBQTRELEVBQUN6RixPQUFPUSxjQUFjRCxZQUNoSG1GLGdCQUFnQixNQUNoQnRILE9BQU9pSCxlQUNQbEgsU0FBU3FILDZCQUNUZ0MsY0FBYyxJQUFJRCxZQUFZaEssU0FBU1ksUUFBUUMsTUFBTTRCLE9BQU9RLGNBQWNELFdBQVdqQixPQUFPb0c7SUFFbEcsT0FBTzhCO0FBQ1Q7QUFFTyxTQUFTblAsOEJBQThCb1AsZ0JBQWdCLEVBQUVsSyxPQUFPO0lBQ3JFLElBQU1tSyxxQkFBcUJuSyxRQUFRcUIsWUFBWSxDQUFDNkksbUJBQzFDRSxrQkFBa0JELG9CQUNsQnZKLFNBQVN3SixpQkFDVDVDLGdCQUFnQjZDLElBQUFBLGlDQUFvQixFQUFDekosUUFBUVo7SUFFbkRBLFVBQVVzSyxJQUFBQSwwQkFBaUIsRUFBQzFKO0lBRTVCLElBQU1jLFlBQVkxRywyQkFBMkJ3TSxlQUFleEg7SUFFNUQsT0FBTzBCO0FBQ1Q7QUFFTyxTQUFTbkssOEJBQThCZ1QsY0FBYyxFQUFFdkssT0FBTztJQUNuRSxJQUFNLEFBQUV3SyxhQUFlbkssaUJBQVEsQ0FBdkJtSyxZQUNGM0osT0FBTzBKLGdCQUNQM0osU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUJZLFlBQVlyRiw0QkFBNEJtTyxnQkFBZ0J2SyxVQUN4RHlLLGFBQWEsSUFBSUQsV0FBV3hLLFNBQVNZLFFBQVFDLE1BQU1ZO0lBRXpELE9BQU9nSjtBQUNUO0FBRU8sU0FBU3pVLCtCQUErQjBVLGVBQWUsRUFBRTFLLE9BQU87SUFDckUsSUFBTSxBQUFFMkssY0FBZ0J0SyxpQkFBUSxDQUF4QnNLLGFBQ0Y5SixPQUFPNkosaUJBQ1A5SixTQUFTWixRQUFRcUIsWUFBWSxDQUFDUixPQUM5QlMsT0FBT3RELHdCQUF3QjBNLGlCQUFpQjFLLFVBQ2hENEssY0FBYyxJQUFJRCxZQUFZM0ssU0FBU1ksUUFBUUMsTUFBTVM7SUFFM0QsT0FBT3NKO0FBQ1Q7QUFFTyxTQUFTbE4sK0JBQStCbU4sZUFBZSxFQUFFN0ssT0FBTztJQUNyRSxJQUFNLEFBQUU4SyxjQUFnQnpLLGlCQUFRLENBQXhCeUssYUFDRmpLLE9BQU9nSyxpQkFDUGpLLFNBQVNaLFFBQVFxQixZQUFZLENBQUNSLE9BQzlCWSxZQUFZaEYsNkJBQTZCb08saUJBQWlCN0ssVUFDMUQ0RSxnQkFBZ0IvSyxpQ0FBaUNnUixpQkFBaUI3SyxVQUNsRStLLGNBQWMsSUFBSUQsWUFBWTlLLFNBQVNZLFFBQVFDLE1BQU1ZLFdBQVdtRDtJQUV0RSxPQUFPbUc7QUFDVDtBQUVPLFNBQVNuVSwrQkFBK0JvVSxlQUFlLEVBQUVoTCxPQUFPO0lBQ3JFLElBQU0sQUFBRWlMLGNBQWdCNUssaUJBQVEsQ0FBeEI0SyxhQUNGcEssT0FBT21LLGlCQUNQekQsUUFBUTdJLHlCQUF5QnNNLGlCQUFpQmhMLFVBQ2xEa0wsb0JBQW9CQyxJQUFBQSxrQ0FBMEIsRUFBQzVELFFBQy9DM0csU0FBU3NLLG1CQUNURSxjQUFjLElBQUlILFlBQVlqTCxTQUFTWSxRQUFRQyxNQUFNMEc7SUFFM0QsT0FBTzZEO0FBQ1Q7QUFFTyxTQUFTblMsK0JBQStCb1Msc0JBQXNCLEVBQUVyTCxPQUFPO0lBQzVFLElBQU1jLE9BQU91Syx1QkFBdUJDLE9BQU87SUFFM0MsT0FBT3hLO0FBQ1Q7QUFFTyxTQUFTbEksaUNBQWlDc1IsZ0JBQWdCLEVBQUVsSyxPQUFPO0lBQ3hFLElBQU0sQUFBRXVMLGVBQWlCbEwsaUJBQVEsQ0FBekJrTCxjQUNGMUssT0FBT3FKLGtCQUNQdEosU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUIySyxtQkFBbUJ0QixpQkFBaUJ1QixtQkFBbUIsSUFDdkQzSyxPQUFPMEssa0JBQ1B2TCxPQUFPLE1BQ1AyRixXQUFXLE1BQ1hwRCxlQUFlLElBQUkrSSxhQUFhdkwsU0FBU1ksUUFBUUMsTUFBTUMsTUFBTWIsTUFBTTJGO0lBRXpFLE9BQU9wRDtBQUNUO0FBRU8sU0FBU3RGLG1DQUFtQ3dPLGlCQUFpQixFQUFFMUwsT0FBTztJQUMzRSxJQUFNLEFBQUUyTCxnQkFBa0J0TCxpQkFBUSxDQUExQnNMLGVBQ0Y5SyxPQUFPNkssbUJBQ1A5SyxTQUFTLE1BQ1Q2SSxtQkFBbUJ4TSxzQ0FBc0N5TyxtQkFBbUIxTCxVQUM1RTBHLGdCQUFnQixJQUFJaUYsY0FBYzNMLFNBQVNZLFFBQVFDLE1BQU00STtJQUUvRCxPQUFPL0M7QUFFVDtBQUVPLFNBQVMxSCxtQ0FBbUM0TSxpQkFBaUIsRUFBRTVMLE9BQU87SUFDM0UsSUFBTSxBQUFFNkwsZ0JBQWtCeEwsaUJBQVEsQ0FBMUJ3TCxlQUNGaEwsT0FBTytLLG1CQUNQaEwsU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUJTLE9BQU8vQywwQkFBMEJxTixtQkFBbUI1TCxVQUNwREMsT0FBT1osMEJBQTBCdU0sbUJBQW1CNUwsVUFDcEQ4TCxnQkFBZ0IsSUFBSUQsY0FBYzdMLFNBQVNZLFFBQVFDLE1BQU1TLE1BQU1yQjtJQUVyRSxPQUFPNkw7QUFDVDtBQUVPLFNBQVNsUyxtQ0FBbUNtUyxpQkFBaUIsRUFBRS9MLE9BQU87SUFDM0UsSUFBTSxBQUFFZ00sZ0JBQWtCM0wsaUJBQVEsQ0FBMUIyTCxlQUNGQyxhQUFhNVMsZ0NBQWdDMFMsbUJBQW1CL0wsVUFDaEVrTSxxQkFBcUJwUyx3Q0FBd0NpUyxtQkFBbUIvTCxVQUNoRm1NLHNCQUFzQkMsSUFBQUEsOERBQXNELEVBQUNGLG9CQUFvQkQsYUFDakdwTCxPQUFPa0wsbUJBQ1BuTCxTQUFTdUwscUJBQ1R2SCxnQkFBZ0IsSUFBSW9ILGNBQWNoTSxTQUFTWSxRQUFRQyxNQUFNb0wsWUFBWUM7SUFFM0UsT0FBT3RIO0FBQ1Q7QUFFTyxTQUFTN0gsc0NBQXNDc1Asa0JBQWtCLEVBQUVyTSxPQUFPO0lBQy9FLElBQU00QixPQUFPOUUsMkJBQTJCdVAsb0JBQW9Cck0sVUFDdEQ2RyxXQUFXdkosK0JBQStCK08sb0JBQW9Cck0sVUFDOURzTSxpQkFBa0IxSyxRQUFRaUY7SUFFaEMsT0FBT3lGO0FBQ1Q7QUFFTyxTQUFTL1Msc0NBQXNDZ1QseUJBQXlCLEVBQUV2TSxPQUFPO0lBQ3RGLElBQU13TSxXQUFXRCwwQkFBMEJFLFVBQVU7SUFFckQsT0FBT0Q7QUFDVDtBQUVPLFNBQVNsVCx1Q0FBdUNvVCwwQkFBMEIsRUFBRTFNLE9BQU87SUFDeEYsSUFBTXdNLFdBQVdFLDJCQUEyQkQsVUFBVTtJQUV0RCxPQUFPRDtBQUNUO0FBRU8sU0FBU2xXLHlDQUF5Q3FXLG9CQUFvQixFQUFFM00sT0FBTztJQUNwRixJQUFNLEFBQUU0TSxtQkFBcUJ2TSxpQkFBUSxDQUE3QnVNLGtCQUNGL0wsT0FBTzhMLHNCQUNQL0wsU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUJnTSxVQUFVRixxQkFBcUJHLFNBQVMsSUFDeEN4TCxPQUFPcEQsNkJBQTZCeU8sc0JBQXNCM00sVUFDMUQwRCxRQUFRM00sOEJBQThCNFYsc0JBQXNCM00sVUFDNUQrTSxtQkFBbUIsSUFBSUgsaUJBQWlCNU0sU0FBU1ksUUFBUUMsTUFBTVMsTUFBTW9DLE9BQU9tSjtJQUVsRixPQUFPRTtBQUNUO0FBRU8sU0FBU25TLHlDQUF5Q29TLG9CQUFvQixFQUFFaE4sT0FBTztJQUNwRixJQUFNLEFBQUVpTixtQkFBcUI1TSxpQkFBUSxDQUE3QjRNLGtCQUNGcE0sT0FBT21NLHNCQUNQcE0sU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUJxRixXQUFXeEwsaUNBQWlDc1Msc0JBQXNCaE4sVUFDbEVzQixPQUFPbEQsNkJBQTZCNE8sc0JBQXNCaE4sVUFDMURrTixtQkFBbUIsSUFBSUQsaUJBQWlCak4sU0FBU1ksUUFBUUMsTUFBTXFGLFVBQVU1RTtJQUUvRSxPQUFPNEw7QUFDVDtBQUVPLFNBQVN6Tyx5Q0FBeUMwTyxvQkFBb0IsRUFBRW5OLE9BQU87SUFDcEYsSUFBTSxBQUFFb04sbUJBQXFCL00saUJBQVEsQ0FBN0IrTSxrQkFDRnZNLE9BQU9zTSxzQkFDUHZNLFNBQVNaLFFBQVFxQixZQUFZLENBQUNSLE9BQzlCUyxPQUFPaEQsNkJBQTZCNk8sc0JBQXNCbk4sVUFDMUR1RyxXQUFXM0csaUNBQWlDdU4sc0JBQXNCbk4sVUFDbEVxTixtQkFBbUIsSUFBSUQsaUJBQWlCcE4sU0FBU1ksUUFBUUMsTUFBTVMsTUFBTWlGO0lBRTNFLE9BQU84RztBQUNUO0FBRU8sU0FBU2xXLDJDQUEyQ21XLHFCQUFxQixFQUFFdE4sT0FBTztJQUN2RixJQUFNLEFBQUV1TixvQkFBc0JsTixpQkFBUSxDQUE5QmtOLG1CQUNGMU0sT0FBT3lNLHVCQUNQMU0sU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUI2QyxRQUFRek0sK0JBQStCcVcsdUJBQXVCdE4sVUFDOUR3QyxlQUFlL0osc0NBQXNDNlUsdUJBQXVCdE4sVUFDNUV3TixvQkFBb0IsSUFBSUQsa0JBQWtCdk4sU0FBU1ksUUFBUUMsTUFBTTZDLE9BQU9sQjtJQUU5RSxPQUFPZ0w7QUFDVDtBQUVPLFNBQVNsVCwyQ0FBMkNtVCxxQkFBcUIsRUFBRXpOLE9BQU87SUFDdkYsSUFBTSxBQUFFME4sb0JBQXNCck4saUJBQVEsQ0FBOUJxTixtQkFDRjdNLE9BQU80TSx1QkFDUDdNLFNBQVNaLFFBQVFxQixZQUFZLENBQUNSLE9BQzlCUyxPQUFPbkQsOEJBQThCc1AsdUJBQXVCek4sVUFDNURrTixtQkFBbUJ2UywwQ0FBMEM4Uyx1QkFBdUJ6TixVQUNwRjJOLG9CQUFvQixJQUFJRCxrQkFBa0IxTixTQUFTWSxRQUFRQyxNQUFNUyxNQUFNNEw7SUFFN0UsT0FBT1M7QUFDVDtBQUVPLFNBQVN0USwyQ0FBMkN1USxxQkFBcUIsRUFBRTVOLE9BQU87SUFDdkYsSUFBTSxBQUFFNk4sb0JBQXNCeE4saUJBQVEsQ0FBOUJ3TixtQkFDRmhOLE9BQU8rTSx1QkFDUGhOLFNBQVNaLFFBQVFxQixZQUFZLENBQUNSLE9BQzlCaU4sYUFBYWxSLG9DQUFvQ2dSLHVCQUF1QjVOLFVBQ3hFK04sb0JBQW9CLElBQUlGLGtCQUFrQjdOLFNBQVNZLFFBQVFDLE1BQU1pTjtJQUV2RSxPQUFPQztBQUNUO0FBRU8sU0FBUzlYLDZDQUE2QytYLHNCQUFzQixFQUFFaE8sT0FBTztJQUMxRixJQUFNLEFBQUVpTyxxQkFBdUI1TixpQkFBUSxDQUEvQjROLG9CQUNGcE4sT0FBT21OLHdCQUNQcE4sU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUJnTSxVQUFVbUIsdUJBQXVCbEIsU0FBUyxJQUMxQ3hMLE9BQU9yRCwrQkFBK0IrUCx3QkFBd0JoTyxVQUM5RDBELFFBQVE1TSxnQ0FBZ0NrWCx3QkFBd0JoTyxVQUNoRXlCLFlBQVl2RixvQ0FBb0M4Uix3QkFBd0JoTyxVQUN4RWtPLHFCQUFxQixJQUFJRCxtQkFBbUJqTyxTQUFTWSxRQUFRQyxNQUFNUyxNQUFNb0MsT0FBT21KLFNBQVNwTDtJQUUvRixPQUFPeU07QUFDVDtBQUVPLFNBQVM1Uyw2Q0FBNkM2UyxzQkFBc0IsRUFBRW5PLE9BQU87SUFDMUYsSUFBTSxBQUFFb08scUJBQXVCL04saUJBQVEsQ0FBL0IrTixvQkFDRnZOLE9BQU9zTix3QkFDUHZOLFNBQVNaLFFBQVFxQixZQUFZLENBQUNSLE9BQzlCcUMsWUFBWXhILG9DQUFvQ3lTLHdCQUF3Qm5PLFVBQ3hFMEIsWUFBWXhHLG9DQUFvQ2lULHdCQUF3Qm5PLFVBQ3hFMkIscUJBQXFCLElBQUl5TSxtQkFBbUJwTyxTQUFTWSxRQUFRQyxNQUFNcUMsV0FBV3hCO0lBRXBGLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTNUgsNkNBQTZDc1Isc0JBQXNCLEVBQUVyTCxPQUFPO0lBQzFGLElBQU0sQUFBRXFPLHFCQUF1QmhPLGlCQUFRLENBQS9CZ08sb0JBQ0Z4TixPQUFPd0ssd0JBQ1B6SyxTQUFTWixRQUFRcUIsWUFBWSxDQUFDUixPQUM5QkMsT0FBTzdILCtCQUErQm9TLHdCQUF3QnJMLFVBQzlEc08sdUJBQXVCLElBQUlELG1CQUFtQnJPLFNBQVNZLFFBQVFDLE1BQU1DO0lBRTNFLE9BQU93TjtBQUNUO0FBRU8sU0FBUzVPLCtDQUErQzZPLHVCQUF1QixFQUFFdk8sT0FBTztJQUM3RixJQUFNLEFBQUV3TyxzQkFBd0JuTyxpQkFBUSxDQUFoQ21PLHFCQUNGM04sT0FBTzBOLHlCQUNQM04sU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUJkLFdBQVd3Tyx3QkFBd0JFLFdBQVcsSUFDOUN2TixjQUFjcU4sd0JBQXdCRyxhQUFhLElBQ25EdkksZUFBZW9JLHdCQUF3QkksZUFBZSxJQUN0RDFPLE9BQU9YLGlCQUFpQlMsVUFBVUMsVUFDbEN1RyxXQUFXekcseUJBQXlCcUcsY0FBY25HO0lBRXhEQyxLQUFLMk8sY0FBYyxDQUFDMU47SUFFcEJxRixTQUFTc0ksT0FBTyxDQUFDNU87SUFFakIsSUFBTTZPLHNCQUFzQixJQUFJTixvQkFBb0J4TyxTQUFTWSxRQUFRQyxNQUFNMEY7SUFFM0UsT0FBT3VJO0FBQ1Q7QUFFTyxTQUFTdlAsbURBQW1Ed1AseUJBQXlCLEVBQUUvTyxPQUFPO0lBQ25HLElBQU0sQUFBRWdQLHdCQUEwQjNPLGlCQUFRLENBQWxDMk8sdUJBQ0ZuTyxPQUFPa08sMkJBQ1BuTyxTQUFTWixRQUFRcUIsWUFBWSxDQUFDUixPQUM5QmlKLGFBQWF0Syx3Q0FBd0N1UCwyQkFBMkIvTyxVQUNoRmlQLHdCQUF3QixJQUFJRCxzQkFBc0JoUCxTQUFTWSxRQUFRQyxNQUFNaUo7SUFFL0UsT0FBT21GO0FBQ1Q7QUFFTyxTQUFTN1osbURBQW1EOFoseUJBQXlCLEVBQUVsUCxPQUFPO0lBQ25HLElBQU0sQUFBRW1QLHdCQUEwQjlPLGlCQUFRLENBQWxDOE8sdUJBQ0Z0TyxPQUFPcU8sMkJBQ1B0TyxTQUFTWixRQUFRcUIsWUFBWSxDQUFDUixPQUM5Qm1JLGFBQWEzVCx3Q0FBd0M2WiwyQkFBMkJsUCxVQUNoRm9QLHdCQUF3QixJQUFJRCxzQkFBc0JuUCxTQUFTWSxRQUFRQyxNQUFNbUk7SUFFL0UsT0FBT29HO0FBQ1Q7QUFFTyxTQUFTdlQsbURBQW1EMFEseUJBQXlCLEVBQUV2TSxPQUFPO0lBQ25HLElBQU0sQUFBRXFQLHdCQUEwQmhQLGlCQUFRLENBQWxDZ1AsdUJBQ0Z4TyxPQUFPMEwsMkJBQ1AzTCxTQUFTWixRQUFRcUIsWUFBWSxDQUFDUixPQUM5QlosT0FBT2Isa0NBQWtDbU4sMkJBQTJCdk0sVUFDcEV3TSxXQUFXalQsc0NBQXNDZ1QsMkJBQTJCdk0sVUFDNUVzUCx3QkFBd0IsSUFBSUQsc0JBQXNCclAsU0FBU1ksUUFBUUMsTUFBTVosTUFBTXVNO0lBRXJGLE9BQU84QztBQUNUO0FBRU8sU0FBUzVTLG1EQUFtRDZTLHlCQUF5QixFQUFFdlAsT0FBTztJQUNuRyxJQUFNLEFBQUV3UCx3QkFBMEJuUCxpQkFBUSxDQUFsQ21QLHVCQUNGM08sT0FBTzBPLDJCQUNQM08sU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUI0TyxXQUFXLE1BQ1hoTyxZQUFZLE1BQ1plLGVBQWUsTUFDZmtOLGVBQWUsTUFDZkMsd0JBQXdCLElBQUlILHNCQUFzQnhQLFNBQVNZLFFBQVFDLE1BQU00TyxVQUFVaE8sV0FBV2UsY0FBY2tOO0lBRWxILE9BQU9DO0FBQ1Q7QUFFTyxTQUFTdlUsbURBQW1Ed1UseUJBQXlCLEVBQUU1UCxPQUFPO0lBQ25HLElBQU0sQUFBRTZQLHdCQUEwQnhQLGlCQUFRLENBQWxDd1AsdUJBQ0ZoUCxPQUFPK08sMkJBQ1BoUCxTQUFTWixRQUFRcUIsWUFBWSxDQUFDUixPQUM5QmEsWUFBWXpHLHVDQUF1QzJVLDJCQUEyQjVQLFVBQzlFd0MsZUFBZTFKLDBDQUEwQzhXLDJCQUEyQjVQLFVBQ3BGOFAsd0JBQXdCLElBQUlELHNCQUFzQjdQLFNBQVNZLFFBQVFDLE1BQU1hLFdBQVdjO0lBRTFGLE9BQU9zTjtBQUNUO0FBRU8sU0FBU2hhLHFEQUFxRGlhLDBCQUEwQixFQUFFL1AsT0FBTztJQUN0RyxJQUFNLEFBQUVnUSx5QkFBMkIzUCxpQkFBUSxDQUFuQzJQLHdCQUNGblAsT0FBT2tQLDRCQUNQblAsU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUIrSixjQUFjN1UsMENBQTBDZ2EsNEJBQTRCL1AsVUFDcEZpUSx5QkFBeUIsSUFBSUQsdUJBQXVCaFEsU0FBU1ksUUFBUUMsTUFBTStKO0lBRWpGLE9BQU9xRjtBQUNUO0FBRU8sU0FBUzFhLHFEQUFxRG1YLDBCQUEwQixFQUFFMU0sT0FBTztJQUN0RyxJQUFNLEFBQUVrUSx5QkFBMkI3UCxpQkFBUSxDQUFuQzZQLHdCQUNGclAsT0FBTzZMLDRCQUNQOUwsU0FBU1osUUFBUXFCLFlBQVksQ0FBQ1IsT0FDOUJaLE9BQU9oQixtQ0FBbUN5Tiw0QkFBNEIxTSxVQUN0RXdNLFdBQVdsVCx1Q0FBdUNvVCw0QkFBNEIxTSxVQUM5RW1RLHlCQUF5QixJQUFJRCx1QkFBdUJsUSxTQUFTWSxRQUFRQyxNQUFNWixNQUFNdU07SUFFdkYsT0FBTzJEO0FBQ1Q7QUFFTyxTQUFTN1gsdURBQXVEOFgsMkJBQTJCLEVBQUVwUSxPQUFPO0lBQ3pHLElBQU0sQUFBRXFRLDBCQUE0QmhRLGlCQUFRLENBQXBDZ1EseUJBQ0Z4UCxPQUFPdVAsNkJBQ1B4UCxTQUFTWixRQUFRcUIsWUFBWSxDQUFDUixPQUM5QitFLFdBQVd4Tix3Q0FBd0NnWSw2QkFBNkJwUSxVQUNoRndDLGVBQWU3Siw0Q0FBNEN5WCw2QkFBNkJwUTtJQUU5RndDLGFBQWE4TixXQUFXLENBQUMxSztJQUV6QixJQUFNMkssMEJBQTBCLElBQUlGLHdCQUF3QnJRLFNBQVNZLFFBQVFDLE1BQU0yQjtJQUVuRixPQUFPK047QUFDVDtBQUVPLFNBQVN0VyxrQkFBa0I0SCxRQUFRLEVBQUU3QixPQUFPO0lBQ2pELElBQUkrQixRQUFRO0lBRVosSUFBTTRCLFlBQVk5QixTQUFTMk8sWUFBWTtJQUV2QyxJQUFJN00sY0FBYyxNQUFNO1FBQ3RCNUIsUUFBUS9ILG1CQUFtQjJKLFdBQVczRDtJQUN4QztJQUVBLE9BQU8rQjtBQUNUO0FBRU8sU0FBUzVNLHFCQUFxQjhPLFdBQVcsRUFBRWpFLE9BQU87SUFDdkQsSUFBSWdFLFFBQVE7SUFFWixJQUFNRixZQUFZRyxZQUFZd00sWUFBWTtJQUUxQyxJQUFJM00sY0FBYyxNQUFNO1FBQ3RCRSxRQUFROU8sbUJBQW1CNE8sV0FBVzlEO0lBQ3hDO0lBRUEsT0FBT2dFO0FBQ1Q7QUFFTyxTQUFTL0wscUJBQXFCZ00sV0FBVyxFQUFFakUsT0FBTztJQUN2RCxJQUFJc0QsUUFBUTtJQUVaLElBQU1ULFlBQVlvQixZQUFZeU0sWUFBWTtJQUUxQyxJQUFJN04sY0FBYyxNQUFNO1FBQ3RCUyxRQUFRdEwsbUJBQW1CNkssV0FBVzdDO0lBQ3hDO0lBRUEsT0FBT3NEO0FBQ1Q7QUFFTyxTQUFTM0QscUJBQXFCd0IsUUFBUSxFQUFFbkIsT0FBTztJQUNwRCxJQUFJdUcsV0FBVztJQUVmLElBQU1KLGVBQWVoRixTQUFTd04sZUFBZTtJQUU3QyxJQUFJeEksaUJBQWlCLE1BQU07UUFDekJJLFdBQVd6Ryx5QkFBeUJxRyxjQUFjbkc7SUFDcEQ7SUFFQSxPQUFPdUc7QUFDVDtBQUVPLFNBQVMvSixzQkFBc0IrRSxRQUFRLEVBQUV2QixPQUFPO0lBQ3JELElBQUl5QixZQUFZO0lBRWhCLElBQU1xRixnQkFBZ0J2RixTQUFTb1AsZ0JBQWdCO0lBRS9DLElBQUk3SixrQkFBa0IsTUFBTTtRQUMxQnJGLFlBQVluRiwyQkFBMkJ3SyxlQUFlOUc7SUFDeEQ7SUFFQSxPQUFPeUI7QUFDVDtBQUVPLFNBQVN0RyxzQkFBc0JvRyxRQUFRLEVBQUV2QixPQUFPO0lBQ3JELElBQUkwQixZQUFZO0lBRWhCLElBQU04RixnQkFBZ0JqRyxTQUFTcVAsZ0JBQWdCO0lBRS9DLElBQUlwSixrQkFBa0IsTUFBTTtRQUMxQjlGLFlBQVkxRywyQkFBMkJ3TSxlQUFleEg7SUFDeEQ7SUFFQSxPQUFPMEI7QUFDVDtBQUVPLFNBQVMvTCx1QkFBdUJrTSxRQUFRLEVBQUU3QixPQUFPO0lBQ3RELElBQUlrQyxhQUFhO0lBRWpCLElBQU0rRyxpQkFBaUJwSCxTQUFTZ1AsaUJBQWlCO0lBRWpELElBQUk1SCxtQkFBbUIsTUFBTTtRQUMzQi9HLGFBQWF6TSw2QkFBNkJ3VCxnQkFBZ0JqSjtJQUM1RDtJQUVBLE9BQU9rQztBQUNUO0FBRU8sU0FBU3JELHVCQUF1Qm9GLFdBQVcsRUFBRWpFLE9BQU87SUFDekQsSUFBSW9FLFVBQVU7SUFFZCxJQUFNVSxjQUFjYixZQUFZNk0sY0FBYztJQUU5QyxJQUFJaE0sZ0JBQWdCLE1BQU07UUFDeEJWLFVBQVV0Rix1QkFBdUJnRyxhQUFhOUU7SUFDaEQ7SUFFQSxPQUFPb0U7QUFDVDtBQUVPLFNBQVNsTix1QkFBdUJ3USxhQUFhLEVBQUUxSCxPQUFPO0lBQzNELElBQUkwRCxRQUFRO0lBRVosSUFBTUgsWUFBWW1FLGNBQWNxSixZQUFZO0lBRTVDLElBQUl4TixjQUFjLE1BQU07UUFDdEJHLFFBQVExTSxtQkFBbUJ1TSxXQUFXdkQ7SUFDeEM7SUFFQSxPQUFPMEQ7QUFDVDtBQUVPLFNBQVNqTix3QkFBd0JrTixTQUFTLEVBQUUzRCxPQUFPO0lBQ3hELElBQUk2RCxhQUFhO0lBRWpCLElBQU0wRixpQkFBaUI1RixVQUFVcU4saUJBQWlCO0lBRWxELElBQUl6SCxtQkFBbUIsTUFBTTtRQUMzQjFGLGFBQWFyTiw2QkFBNkIrUyxnQkFBZ0J2SjtJQUM1RDtJQUVBLE9BQU82RDtBQUNUO0FBRU8sU0FBUzdGLHdCQUF3QmlULGVBQWUsRUFBRWpSLE9BQU87SUFDOUQsSUFBSXNCLE9BQU87SUFFWCxJQUFNSCxXQUFXOFAsZ0JBQWdCQyxXQUFXO0lBRTVDLElBQUkvUCxhQUFhLE1BQU07UUFDckJHLE9BQU9qRCxpQkFBaUI4QyxVQUFVbkI7SUFDcEM7SUFFQSxPQUFPc0I7QUFDVDtBQUVPLFNBQVNqRix5QkFBeUJxSSxXQUFXLEVBQUUxRSxPQUFPO0lBQzNELElBQUl5QixZQUFZO0lBRWhCLElBQU1xRixnQkFBZ0JwQyxZQUFZaU0sZ0JBQWdCO0lBRWxELElBQUk3SixrQkFBa0IsTUFBTTtRQUMxQnJGLFlBQVluRiwyQkFBMkJ3SyxlQUFlOUc7SUFDeEQ7SUFFQSxPQUFPeUI7QUFDVDtBQUVPLFNBQVMvSSwwQkFBMEI0SixTQUFTLEVBQUV0QyxPQUFPO0lBQzFELElBQUl3QyxlQUFlO0lBRW5CLElBQU0wSCxtQkFBbUI1SCxVQUFVNk8sbUJBQW1CO0lBRXRELElBQUlqSCxxQkFBcUIsTUFBTTtRQUM3QjFILGVBQWU1SixpQ0FBaUNzUixrQkFBa0JsSztJQUNwRTtJQUVBLE9BQU93QztBQUNUO0FBRU8sU0FBUzNNLDBCQUEwQm9PLFdBQVcsRUFBRWpFLE9BQU87SUFDNUQsSUFBSXFFLGFBQWE7SUFFakIsSUFBTXVFLGlCQUFpQjNFLFlBQVltTixpQkFBaUI7SUFFcEQsSUFBSXhJLG1CQUFtQixNQUFNO1FBQzNCdkUsYUFBYXpPLDZCQUE2QmdULGdCQUFnQjVJO0lBQzVEO0lBRUEsT0FBT3FFO0FBQ1Q7QUFFTyxTQUFTM08sMEJBQTBCZ1AsV0FBVyxFQUFFMUUsT0FBTztJQUM1RCxJQUFJa0MsYUFBYTtJQUVqQixJQUFNK0csaUJBQWlCdkUsWUFBWW1NLGlCQUFpQjtJQUVwRCxJQUFJNUgsbUJBQW1CLE1BQU07UUFDM0IvRyxhQUFhek0sNkJBQTZCd1QsZ0JBQWdCako7SUFDNUQ7SUFFQSxPQUFPa0M7QUFDVDtBQUVPLFNBQVMzRCwwQkFBMEJxTixpQkFBaUIsRUFBRTVMLE9BQU87SUFDbEUsSUFBSXNCLE9BQU87SUFFWCxJQUFNSCxXQUFXeUssa0JBQWtCc0YsV0FBVztJQUU5QyxJQUFJL1AsYUFBYSxNQUFNO1FBQ3JCRyxPQUFPakQsaUJBQWlCOEMsVUFBVW5CO0lBQ3BDO0lBRUEsT0FBT3NCO0FBQ1Q7QUFFTyxTQUFTakMsMEJBQTBCdU0saUJBQWlCLEVBQUU1TCxPQUFPO0lBQ2xFLElBQUlDLE9BQU87SUFFWCxJQUFNRixXQUFXNkwsa0JBQWtCNkMsV0FBVztJQUU5QyxJQUFJMU8sYUFBYSxNQUFNO1FBQ3JCRSxPQUFPWCxpQkFBaUJTLFVBQVVDO0lBQ3BDO0lBRUEsT0FBT0M7QUFDVDtBQUVPLFNBQVN6SCwwQkFBMEIrSyxTQUFTLEVBQUV2RCxPQUFPO0lBQzFELElBQUl3QyxlQUFlO0lBRW5CLElBQU0wSCxtQkFBbUIzRyxVQUFVNE4sbUJBQW1CO0lBRXRELElBQUlqSCxxQkFBcUIsTUFBTTtRQUM3QjFILGVBQWU1SixpQ0FBaUNzUixrQkFBa0JsSztJQUNwRTtJQUVBLE9BQU93QztBQUNUO0FBRU8sU0FBU2hMLDJCQUEyQjJPLFlBQVksRUFBRW5HLE9BQU87SUFDOUQsSUFBTXFSLHFCQUFxQmxMLGFBQWFtTCxxQkFBcUIsSUFDdkRqTCxhQUFhZ0wsb0JBQXFCLEdBQUc7SUFFM0MsT0FBT2hMO0FBQ1Q7QUFFTyxTQUFTbEssMkJBQTJCK0ssYUFBYSxFQUFFbEgsT0FBTztJQUMvRCxJQUFJeUIsWUFBWTtJQUVoQixJQUFNcUYsZ0JBQWdCSSxjQUFjeUosZ0JBQWdCO0lBRXBELElBQUk3SixrQkFBa0IsTUFBTTtRQUMxQnJGLFlBQVluRiwyQkFBMkJ3SyxlQUFlOUc7SUFDeEQ7SUFFQSxPQUFPeUI7QUFDVDtBQUVPLFNBQVMvSiwyQkFBMkJvUCxhQUFhLEVBQUU5RyxPQUFPO0lBQy9ELElBQUk2SCxZQUFZO0lBRWhCLElBQU1ILGdCQUFnQlosY0FBY3lLLGdCQUFnQjtJQUVwRCxJQUFJN0osa0JBQWtCLE1BQU07UUFDMUJHLFlBQVlwUSwyQkFBMkJpUSxlQUFlMUg7SUFDeEQ7SUFFQSxPQUFPNkg7QUFDVDtBQUVPLFNBQVMvSywyQkFBMkJ1UCxrQkFBa0IsRUFBRXJNLE9BQU87SUFDcEUsSUFBSTRCLE9BQU87SUFFWCxJQUFNNFAsNkJBQTZCbkYsbUJBQW1Cb0YsVUFBVTtJQUVoRSxJQUFJRCw0QkFBNEI7UUFDOUIsSUFBTWpRLFdBQVc4SyxvQkFBcUIsR0FBRztRQUV6Q3pLLE9BQU8vRSxpQkFBaUIwRSxVQUFVdkI7SUFDcEM7SUFFQSxPQUFPNEI7QUFDVDtBQUVPLFNBQVM1Riw0QkFBNEI4TSxjQUFjLEVBQUU5SSxPQUFPO0lBQ2pFLElBQUl5QixZQUFZO0lBRWhCLElBQU1xRixnQkFBZ0JnQyxlQUFlNkgsZ0JBQWdCO0lBRXJELElBQUk3SixrQkFBa0IsTUFBTTtRQUMxQnJGLFlBQVluRiwyQkFBMkJ3SyxlQUFlOUc7SUFDeEQ7SUFFQSxPQUFPeUI7QUFDVDtBQUVPLFNBQVN4Riw0QkFBNEJrTixjQUFjLEVBQUVuSixPQUFPO0lBQ2pFLElBQUl5QixZQUFZO0lBRWhCLElBQU1xRixnQkFBZ0JxQyxlQUFld0gsZ0JBQWdCO0lBRXJELElBQUk3SixrQkFBa0IsTUFBTTtRQUMxQnJGLFlBQVluRiwyQkFBMkJ3SyxlQUFlOUc7SUFDeEQ7SUFFQSxPQUFPeUI7QUFDVDtBQUVPLFNBQVMzRiw0QkFBNEJ1TixjQUFjLEVBQUVySixPQUFPO0lBQ2pFLElBQUl5QixZQUFZO0lBRWhCLElBQU1xRixnQkFBZ0J1QyxlQUFlc0gsZ0JBQWdCO0lBRXJELElBQUk3SixrQkFBa0IsTUFBTTtRQUMxQnJGLFlBQVluRiwyQkFBMkJ3SyxlQUFlOUc7SUFDeEQ7SUFFQSxPQUFPeUI7QUFDVDtBQUVPLFNBQVM1Ryw0QkFBNEJ3TyxjQUFjLEVBQUVySixPQUFPO0lBQ2pFLElBQUkwQixZQUFZO0lBRWhCLElBQU13SSxtQkFBbUJiLGVBQWU4SCxtQkFBbUI7SUFFM0QsSUFBSWpILHFCQUFxQixNQUFNO1FBQzdCeEksWUFBWTVHLDhCQUE4Qm9QLGtCQUFrQmxLO0lBQzlEO0lBRUEsT0FBTzBCO0FBQ1Q7QUFFTyxTQUFTM00sNEJBQTRCMlMsYUFBYSxFQUFFMUgsT0FBTztJQUNoRSxJQUFJNEgsYUFBYTtJQUVqQixJQUFNeUIsaUJBQWlCM0IsY0FBY2dLLGlCQUFpQjtJQUV0RCxJQUFJckksbUJBQW1CLE1BQU07UUFDM0J6QixhQUFhOVMsNkJBQTZCdVUsZ0JBQWdCcko7SUFDNUQ7SUFFQSxPQUFPNEg7QUFDVDtBQUVPLFNBQVN4TCw0QkFBNEJtTyxjQUFjLEVBQUV2SyxPQUFPO0lBQ2pFLElBQUl5QixZQUFZO0lBRWhCLElBQU1xRixnQkFBZ0J5RCxlQUFlb0csZ0JBQWdCO0lBRXJELElBQUk3SixrQkFBa0IsTUFBTTtRQUMxQnJGLFlBQVluRiwyQkFBMkJ3SyxlQUFlOUc7SUFDeEQ7SUFFQSxPQUFPeUI7QUFDVDtBQUVPLFNBQVM5SCw2QkFBNkIrSyxXQUFXLEVBQUUxRSxPQUFPO0lBQy9ELElBQUk0RSxnQkFBZ0I7SUFFcEIsSUFBTW1ILG9CQUFvQnJILFlBQVlpTixvQkFBb0I7SUFFMUQsSUFBSTVGLHNCQUFzQixNQUFNO1FBQzlCbkgsZ0JBQWdCaEwsbUNBQW1DbVMsbUJBQW1CL0w7SUFDeEU7SUFFQSxPQUFPNEU7QUFDVDtBQUVPLFNBQVNuSSw2QkFBNkJvTyxlQUFlLEVBQUU3SyxPQUFPO0lBQ25FLElBQUl5QixZQUFZO0lBRWhCLElBQU1xRixnQkFBZ0IrRCxnQkFBZ0I4RixnQkFBZ0I7SUFFdEQsSUFBSTdKLGtCQUFrQixNQUFNO1FBQzFCckYsWUFBWW5GLDJCQUEyQndLLGVBQWU5RztJQUN4RDtJQUVBLE9BQU95QixXQUFXLEdBQUc7QUFDdkI7QUFFTyxTQUFTdkQsNkJBQTZCeU8sb0JBQW9CLEVBQUUzTSxPQUFPO0lBQ3hFLElBQUlzQixPQUFPO0lBRVgsSUFBTUgsV0FBV3dMLHFCQUFxQnVFLFdBQVc7SUFFakQsSUFBSS9QLGFBQWEsTUFBTTtRQUNyQkcsT0FBT2pELGlCQUFpQjhDLFVBQVVuQjtJQUNwQztJQUVBLE9BQU9zQjtBQUNUO0FBRU8sU0FBU2xELDZCQUE2QjRPLG9CQUFvQixFQUFFaE4sT0FBTztJQUN4RSxJQUFJc0IsT0FBTztJQUVYLElBQU1ILFdBQVc2TCxxQkFBcUJrRSxXQUFXO0lBRWpELElBQUkvUCxhQUFhLE1BQU07UUFDckJHLE9BQU9qRCxpQkFBaUI4QyxVQUFVbkI7SUFDcEM7SUFFQSxPQUFPc0I7QUFDVDtBQUVPLFNBQVNoRCw2QkFBNkI2TyxvQkFBb0IsRUFBRW5OLE9BQU87SUFDeEUsSUFBSXNCLE9BQU87SUFFWCxJQUFNSCxXQUFXZ00scUJBQXFCK0QsV0FBVztJQUVqRCxJQUFJL1AsYUFBYSxNQUFNO1FBQ3JCRyxPQUFPakQsaUJBQWlCOEMsVUFBVW5CO0lBQ3BDO0lBRUEsT0FBT3NCO0FBQ1Q7QUFFTyxTQUFTdkksOEJBQThCK04sYUFBYSxFQUFFOUcsT0FBTztJQUNsRSxJQUFJd0MsZUFBZTtJQUVuQixJQUFNMEgsbUJBQW1CcEQsY0FBY3FLLG1CQUFtQjtJQUUxRCxJQUFJakgscUJBQXFCLE1BQU07UUFDN0IxSCxlQUFlNUosaUNBQWlDc1Isa0JBQWtCbEs7SUFDcEU7SUFFQSxPQUFPd0M7QUFDVDtBQUVPLFNBQVNyRiw4QkFBOEJxSixZQUFZLEVBQUV4RyxPQUFPO0lBQ2pFLElBQUk0UixnQkFBZ0I7SUFFcEIsSUFBTWxHLG9CQUFvQmxGLGFBQWFxTCxvQkFBb0I7SUFFM0QsSUFBSW5HLHNCQUFzQixNQUFNO1FBQzlCa0csZ0JBQWdCMVUsbUNBQW1Dd08sbUJBQW1CMUw7SUFDeEU7SUFFQSxPQUFPNFI7QUFDVDtBQUVPLFNBQVMvWSw4QkFBOEIyTyxhQUFhLEVBQUV4SCxPQUFPO0lBQ2xFLElBQUl3QyxlQUFlO0lBRW5CLElBQU0wSCxtQkFBbUIxQyxjQUFjMkosbUJBQW1CO0lBRTFELElBQUlqSCxxQkFBcUIsTUFBTTtRQUM3QjFILGVBQWU1SixpQ0FBaUNzUixrQkFBa0JsSztJQUNwRTtJQUVBLE9BQU93QztBQUNUO0FBRU8sU0FBU3pMLDhCQUE4QjRWLG9CQUFvQixFQUFFM00sT0FBTztJQUN6RSxJQUFJMEQsUUFBUTtJQUVaLElBQU1ILFlBQVlvSixxQkFBcUJ1RSxXQUFXO0lBRWxELElBQUkzTixjQUFjLE1BQU07UUFDdEJHLFFBQVExTSxtQkFBbUJ1TSxXQUFXdkQ7SUFDeEM7SUFFQSxPQUFPMEQ7QUFDVDtBQUVPLFNBQVN2Riw4QkFBOEJzUCxxQkFBcUIsRUFBRXpOLE9BQU87SUFDMUUsSUFBSXNCLE9BQU87SUFFWCxJQUFNSCxXQUFXc00sc0JBQXNCeUQsV0FBVztJQUVsRCxJQUFJL1AsYUFBYSxNQUFNO1FBQ3JCRyxPQUFPakQsaUJBQWlCOEMsVUFBVW5CO0lBQ3BDO0lBRUEsT0FBT3NCO0FBQ1Q7QUFFTyxTQUFTOUYsK0JBQStCK0YsUUFBUSxFQUFFdkIsT0FBTztJQUM5RCxJQUFJMkIscUJBQXFCO0lBRXpCLElBQU13TSx5QkFBeUI1TSxTQUFTdVEseUJBQXlCO0lBRWpFLElBQUkzRCwyQkFBMkIsTUFBTTtRQUNuQ3hNLHFCQUFxQnJHLDZDQUE2QzZTLHdCQUF3Qm5PO0lBQzVGO0lBRUEsT0FBTzJCO0FBQ1Q7QUFFTyxTQUFTeEksK0JBQStCa1AsYUFBYSxFQUFFckksT0FBTztJQUNuRSxJQUFNdUksZ0JBQWdCRixjQUFjRyxnQkFBZ0I7SUFFcEQsT0FBT0Q7QUFDVDtBQUVPLFNBQVN4SiwrQkFBK0IrSCxhQUFhLEVBQUU5RyxPQUFPO0lBQ25FLElBQUk4TCxnQkFBZ0I7SUFFcEIsSUFBTUYsb0JBQW9COUUsY0FBY2lMLG9CQUFvQjtJQUU1RCxJQUFJbkcsc0JBQXNCLE1BQU07UUFDOUJFLGdCQUFnQjlNLG1DQUFtQzRNLG1CQUFtQjVMO0lBQ3hFO0lBRUEsT0FBTzhMO0FBQ1Q7QUFFTyxTQUFTdlQsK0JBQStCOFEsY0FBYyxFQUFFckosT0FBTztJQUNwRSxJQUFJd0MsZUFBZTtJQUVuQixJQUFNMEgsbUJBQW1CYixlQUFlOEgsbUJBQW1CO0lBRTNELElBQUlqSCxxQkFBcUIsTUFBTTtRQUM3QjFILGVBQWU1SixpQ0FBaUNzUixrQkFBa0JsSztJQUNwRTtJQUVBLE9BQU93QztBQUNUO0FBRU8sU0FBU3pILCtCQUErQmdSLGlCQUFpQixFQUFFL0wsT0FBTztJQUN2RSxJQUFJMEIsWUFBWTtJQUVoQixJQUFNOEYsZ0JBQWdCdUUsa0JBQWtCNkUsZ0JBQWdCO0lBRXhELElBQUlwSixrQkFBa0IsTUFBTTtRQUMxQjlGLFlBQVkxRywyQkFBMkJ3TSxlQUFleEg7SUFDeEQ7SUFFQSxPQUFPMEI7QUFDVDtBQUVPLFNBQVN6SywrQkFBK0JxVyxxQkFBcUIsRUFBRXROLE9BQU87SUFDM0UsSUFBSTBELFFBQVE7SUFFWixJQUFNSCxZQUFZK0osc0JBQXNCeUQsWUFBWTtJQUVwRCxJQUFJeE4sY0FBYyxNQUFNO1FBQ3RCRyxRQUFRMU0sbUJBQW1CdU0sV0FBV3ZEO0lBQ3hDO0lBRUEsT0FBTzBEO0FBQ1Q7QUFFTyxTQUFTeEosK0JBQStCNkksc0JBQXNCLEVBQUUvQyxPQUFPO0lBQzVFLElBQUkrQixRQUFRO0lBRVosSUFBTTRCLFlBQVlaLHVCQUF1QnlOLFlBQVk7SUFFckQsSUFBSTdNLGNBQWMsTUFBTTtRQUN0QjVCLFFBQVEvSCxtQkFBbUIySixXQUFXM0Q7SUFDeEM7SUFFQSxPQUFPK0I7QUFDVDtBQUVPLFNBQVN6RSwrQkFBK0IwVSxzQkFBc0IsRUFBRWhTLE9BQU87SUFDNUUsSUFBSTZHLFdBQVc7SUFFZixJQUFNb0wscUNBQXFDRCx1QkFBdUJFLGNBQWM7SUFFaEYsSUFBSUQsb0NBQW9DO1FBQ3RDLElBQU16TCxlQUFld0wsd0JBQXlCLEdBQUc7UUFFakRuTCxXQUFXdEoseUJBQXlCaUosY0FBY3hHO0lBQ3BEO0lBRUEsT0FBTzZHO0FBQ1Q7QUFFTyxTQUFTNUksK0JBQStCK1Asc0JBQXNCLEVBQUVoTyxPQUFPO0lBQzVFLElBQUlzQixPQUFPO0lBRVgsSUFBTUgsV0FBVzZNLHVCQUF1QmtELFdBQVc7SUFFbkQsSUFBSS9QLGFBQWEsTUFBTTtRQUNyQkcsT0FBT2pELGlCQUFpQjhDLFVBQVVuQjtJQUNwQztJQUVBLE9BQU9zQjtBQUNUO0FBRU8sU0FBU25DLGdDQUFnQ2dULHVCQUF1QixFQUFFblMsT0FBTztJQUM5RSxJQUFJQyxPQUFPO0lBRVgsSUFBTUYsV0FBV29TLHdCQUF3QjFELFdBQVc7SUFFcEQsSUFBSTFPLGFBQWEsTUFBTTtRQUNyQkUsT0FBT1gsaUJBQWlCUyxVQUFVQztJQUNwQztJQUVBLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTbkosZ0NBQWdDa1gsc0JBQXNCLEVBQUVoTyxPQUFPO0lBQzdFLElBQUkwRCxRQUFRO0lBRVosSUFBTUgsWUFBWXlLLHVCQUF1QitDLFlBQVk7SUFFckQsSUFBSXhOLGNBQWMsTUFBTTtRQUN0QkcsUUFBUTFNLG1CQUFtQnVNLFdBQVd2RDtJQUN4QztJQUVBLE9BQU8wRDtBQUNUO0FBRU8sU0FBUzdKLGlDQUFpQ2dSLGVBQWUsRUFBRTdLLE9BQU87SUFDdkUsSUFBSTRFLGdCQUFnQjtJQUVwQixJQUFNbUgsb0JBQW9CbEIsZ0JBQWdCOEcsb0JBQW9CO0lBRTlELElBQUk1RixzQkFBc0IsTUFBTTtRQUM5Qm5ILGdCQUFnQmhMLG1DQUFtQ21TLG1CQUFtQi9MO0lBQ3hFO0lBRUEsT0FBTzRFO0FBQ1Q7QUFFTyxTQUFTbEssaUNBQWlDc1Msb0JBQW9CLEVBQUVoTixPQUFPO0lBQzVFLElBQUlrRyxXQUFXO0lBRWYsSUFBTUosZUFBZWtILHFCQUFxQmtFLFdBQVc7SUFFckQsSUFBSXBMLGlCQUFpQixNQUFNO1FBQ3pCSSxXQUFXekwseUJBQXlCcUwsY0FBYzlGO0lBQ3BEO0lBRUEsT0FBT2tHO0FBQ1Q7QUFFTyxTQUFTdEcsaUNBQWlDdU4sb0JBQW9CLEVBQUVuTixPQUFPO0lBQzVFLElBQUl1RyxXQUFXO0lBRWYsSUFBTUosZUFBZWdILHFCQUFxQmdFLG1CQUFtQjtJQUU3RCxJQUFJaEwsaUJBQWlCLE1BQU07UUFDekJJLFdBQVd6Ryx5QkFBeUJxRyxjQUFjbkc7SUFDcEQ7SUFFQSxPQUFPdUc7QUFDVDtBQUVPLFNBQVNoUSxrQ0FBa0N1USxhQUFhLEVBQUU5RyxPQUFPO0lBQ3RFLElBQUkrTSxtQkFBbUI7SUFFdkIsSUFBTUosdUJBQXVCN0YsY0FBY3NMLHVCQUF1QjtJQUVsRSxJQUFJekYseUJBQXlCLE1BQU07UUFDakNJLG1CQUFtQnpXLHlDQUF5Q3FXLHNCQUFzQjNNO0lBQ3BGO0lBRUEsT0FBTytNO0FBQ1Q7QUFFTyxTQUFTdk8sa0NBQWtDc0ksYUFBYSxFQUFFOUcsT0FBTztJQUN0RSxJQUFJcU4sbUJBQW1CO0lBRXZCLElBQU1GLHVCQUF1QnJHLGNBQWN1TCx1QkFBdUI7SUFFbEUsSUFBSWxGLHlCQUF5QixNQUFNO1FBQ2pDRSxtQkFBbUI1Tyx5Q0FBeUMwTyxzQkFBc0JuTjtJQUNwRjtJQUVBLE9BQU9xTjtBQUNUO0FBRU8sU0FBU2pPLGtDQUFrQ21OLHlCQUF5QixFQUFFdk0sT0FBTztJQUNsRixJQUFJQyxPQUFPO0lBRVgsSUFBTUYsV0FBV3dNLDBCQUEwQmtDLFdBQVc7SUFFdEQsSUFBSTFPLGFBQWEsTUFBTTtRQUNyQkUsT0FBT1gsaUJBQWlCUyxVQUFVQztJQUNwQztJQUVBLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTN0osbUNBQW1DMk0sc0JBQXNCLEVBQUUvQyxPQUFPO0lBQ2hGLElBQUlnRCxZQUFZO0lBRWhCLElBQU1rRSxnQkFBZ0JuRSx1QkFBdUJ1UCxnQkFBZ0I7SUFFN0QsSUFBSXBMLGtCQUFrQixNQUFNO1FBQzFCbEUsWUFBWTdNLDJCQUEyQitRLGVBQWVsSDtJQUN4RDtJQUVBLE9BQU9nRDtBQUNUO0FBRU8sU0FBU3BILG1DQUFtQ21ILHNCQUFzQixFQUFFL0MsT0FBTztJQUNoRixJQUFJa0QsWUFBWTtJQUVoQixJQUFNbUUsZ0JBQWdCdEUsdUJBQXVCd1AsZ0JBQWdCO0lBRTdELElBQUlsTCxrQkFBa0IsTUFBTTtRQUMxQm5FLFlBQVl2SCwyQkFBMkIwTCxlQUFlckg7SUFDeEQ7SUFFQSxPQUFPa0Q7QUFDVDtBQUVPLFNBQVMvSSxtQ0FBbUM2Tix1QkFBdUIsRUFBRWhJLE9BQU87SUFDakYsSUFBSStCLFFBQVE7SUFFWixJQUFNNEIsWUFBWXFFLHdCQUF3QndJLFlBQVk7SUFFdEQsSUFBSTdNLGNBQWMsTUFBTTtRQUN0QjVCLFFBQVEvSCxtQkFBbUIySixXQUFXM0Q7SUFDeEM7SUFFQSxPQUFPK0I7QUFDVDtBQUVPLFNBQVNuSyxtQ0FBbUNvUSx1QkFBdUIsRUFBRWhJLE9BQU87SUFDakYsSUFBSXlDLFFBQVE7SUFFWixJQUFNSCxZQUFZMEYsd0JBQXdCd0ssWUFBWTtJQUV0RCxJQUFJbFEsY0FBYyxNQUFNO1FBQ3RCRyxRQUFROUssbUJBQW1CMkssV0FBV3RDO0lBQ3hDO0lBRUEsT0FBT3lDO0FBQ1Q7QUFFTyxTQUFTckwsbUNBQW1DMFAsYUFBYSxFQUFFOUcsT0FBTztJQUN2RSxJQUFJd04sb0JBQW9CO0lBRXhCLElBQU1GLHdCQUF3QnhHLGNBQWMyTCx3QkFBd0I7SUFFcEUsSUFBSW5GLDBCQUEwQixNQUFNO1FBQ2xDRSxvQkFBb0JyVywyQ0FBMkNtVyx1QkFBdUJ0TjtJQUN4RjtJQUVBLE9BQU93TjtBQUNUO0FBRU8sU0FBU3hRLG1DQUFtQ3VNLGNBQWMsRUFBRXZKLE9BQU87SUFDeEUsSUFBTTBTLHNCQUFzQm5KLGVBQWVvSixzQkFBc0IsSUFDM0RsSixtQkFBbUJpSixvQkFBb0JFLEdBQUcsQ0FBQyxTQUFDdkc7UUFDMUMsSUFBTUMsaUJBQWlCdlAsc0NBQXNDc1Asb0JBQW9Cck07UUFFakYsT0FBT3NNO0lBQ1Q7SUFFTixPQUFPN0M7QUFDVDtBQUVPLFNBQVNsUCxtQ0FBbUN1TSxhQUFhLEVBQUU5RyxPQUFPO0lBQ3ZFLElBQUkyTixvQkFBb0I7SUFFeEIsSUFBTUYsd0JBQXdCM0csY0FBYytMLHdCQUF3QjtJQUVwRSxJQUFJcEYsMEJBQTBCLE1BQU07UUFDbENFLG9CQUFvQnJULDJDQUEyQ21ULHVCQUF1QnpOO0lBQ3hGO0lBRUEsT0FBTzJOO0FBQ1Q7QUFFTyxTQUFTdlEsbUNBQW1DMEosYUFBYSxFQUFFOUcsT0FBTztJQUN2RSxJQUFJK04sb0JBQW9CO0lBRXhCLElBQU1ILHdCQUF3QjlHLGNBQWNnTSx3QkFBd0I7SUFFcEUsSUFBSWxGLDBCQUEwQixNQUFNO1FBQ2xDRyxvQkFBb0IxUSwyQ0FBMkN1USx1QkFBdUI1TjtJQUN4RjtJQUVBLE9BQU8rTjtBQUNUO0FBRU8sU0FBU2hRLG1DQUFtQ2dTLDBCQUEwQixFQUFFL1AsT0FBTztJQUNwRixJQUFJc0IsT0FBTztJQUVYLElBQU1ILFdBQVc0TywyQkFBMkJtQixXQUFXO0lBRXZELElBQUkvUCxhQUFhLE1BQU07UUFDckJHLE9BQU9qRCxpQkFBaUI4QyxVQUFVbkI7SUFDcEM7SUFFQSxPQUFPc0I7QUFDVDtBQUVPLFNBQVNyQyxtQ0FBbUN5TiwwQkFBMEIsRUFBRTFNLE9BQU87SUFDcEYsSUFBSUMsT0FBTztJQUVYLElBQU1GLFdBQVcyTSwyQkFBMkIrQixXQUFXO0lBRXZELElBQUkxTyxhQUFhLE1BQU07UUFDckJFLE9BQU9YLGlCQUFpQlMsVUFBVUM7SUFDcEM7SUFFQSxPQUFPQztBQUNUO0FBRU8sU0FBU2YsbUNBQW1DNlEsMEJBQTBCLEVBQUUvUCxPQUFPO0lBQ3BGLElBQUlDO0lBRUosSUFBTUYsV0FBV2dRLDJCQUEyQnRCLFdBQVc7SUFFdkQsSUFBSTFPLGFBQWEsTUFBTTtRQUNyQkUsT0FBT1gsaUJBQWlCUyxVQUFVQztJQUNwQyxPQUFPO1FBQ0wsSUFBTUUsV0FBV0MsSUFBQUEsMEJBQW1CO1FBRXBDRixPQUFPQyxVQUFXLEdBQUc7SUFDdkI7SUFFQSxPQUFPRDtBQUNUO0FBRU8sU0FBUy9KLG9DQUFvQzRRLGFBQWEsRUFBRTlHLE9BQU87SUFBRztJQUMzRSxJQUFJa08scUJBQXFCO0lBRXpCLElBQU1GLHlCQUF5QmxILGNBQWNpTSx5QkFBeUI7SUFFdEUsSUFBSS9FLDJCQUEyQixNQUFNO1FBQ25DRSxxQkFBcUJqWSw2Q0FBNkMrWCx3QkFBd0JoTztJQUM1RjtJQUVBLE9BQU9rTztBQUNUO0FBRU8sU0FBUzNTLG9DQUFvQ3VMLGFBQWEsRUFBRTlHLE9BQU87SUFDeEUsSUFBSTJCLHFCQUFxQjtJQUV6QixJQUFNd00seUJBQXlCckgsY0FBY2dMLHlCQUF5QjtJQUV0RSxJQUFJM0QsMkJBQTJCLE1BQU07UUFDbkN4TSxxQkFBcUJyRyw2Q0FBNkM2Uyx3QkFBd0JuTztJQUM1RjtJQUVBLE9BQU8yQjtBQUNUO0FBRU8sU0FBU3pGLG9DQUFvQzhSLHNCQUFzQixFQUFFaE8sT0FBTztJQUNqRixJQUFJeUIsWUFBWTtJQUVoQixJQUFNcUYsZ0JBQWdCa0gsdUJBQXVCMkMsZ0JBQWdCO0lBRTdELElBQUk3SixrQkFBa0IsTUFBTTtRQUMxQnJGLFlBQVluRiwyQkFBMkJ3SyxlQUFlOUc7SUFDeEQ7SUFFQSxPQUFPeUI7QUFDVDtBQUVPLFNBQVNqSCxvQ0FBb0MyWCx1QkFBdUIsRUFBRW5TLE9BQU87SUFDbEYsSUFBSWtHLFdBQVc7SUFFZixJQUFNSixlQUFlcU0sd0JBQXdCYSxlQUFlO0lBRTVELElBQUlsTixpQkFBaUIsTUFBTTtRQUN6QkksV0FBV3pMLHlCQUF5QnFMLGNBQWM5RjtJQUNwRDtJQUVBLE9BQU9rRztBQUNUO0FBRU8sU0FBU3hLLG9DQUFvQ3lTLHNCQUFzQixFQUFFbk8sT0FBTztJQUNqRixJQUFJa0QsWUFBWTtJQUVoQixJQUFNbUUsZ0JBQWdCOEcsdUJBQXVCb0UsZ0JBQWdCO0lBRTdELElBQUlsTCxrQkFBa0IsTUFBTTtRQUMxQm5FLFlBQVl2SCwyQkFBMkIwTCxlQUFlckg7SUFDeEQ7SUFFQSxPQUFPa0Q7QUFDVDtBQUVPLFNBQVNoSSxvQ0FBb0NpVCxzQkFBc0IsRUFBRW5PLE9BQU87SUFDakYsSUFBSTBCLFlBQVk7SUFFaEIsSUFBTXdJLG1CQUFtQmlFLHVCQUF1QmdELG1CQUFtQjtJQUVuRSxJQUFJakgscUJBQXFCLE1BQU07UUFDN0J4SSxZQUFZNUcsOEJBQThCb1Asa0JBQWtCbEs7SUFDOUQ7SUFFQSxPQUFPMEI7QUFDVDtBQUVPLFNBQVM3QixvQ0FBb0MwTyx1QkFBdUIsRUFBRXZPLE9BQU87SUFDbEYsSUFBSXVHLFdBQVc7SUFFZixJQUFNSixlQUFlb0ksd0JBQXdCSSxlQUFlO0lBRTVELElBQUl4SSxpQkFBaUIsTUFBTTtRQUN6QkksV0FBV3pHLHlCQUF5QnFHLGNBQWNuRztJQUNwRDtJQUVBLE9BQU91RztBQUNUO0FBRU8sU0FBU3RKLHNDQUFzQ3lPLGlCQUFpQixFQUFFMUwsT0FBTztJQUM5RSxJQUFNMFMsc0JBQXNCaEgsa0JBQWtCaUgsc0JBQXNCLElBQzlEbEosbUJBQW1CaUosb0JBQW9CRSxHQUFHLENBQUMsU0FBQ3ZHO1FBQzFDLElBQU1DLGlCQUFpQnZQLHNDQUFzQ3NQLG9CQUFvQnJNO1FBRWpGLE9BQU9zTTtJQUNUO0lBRU4sT0FBTzdDO0FBQ1Q7QUFFTyxTQUFTaFIsc0NBQXNDNlUscUJBQXFCLEVBQUV0TixPQUFPO0lBQ2xGLElBQUl3QyxlQUFlO0lBRW5CLElBQU0wSCxtQkFBbUJvRCxzQkFBc0I2RCxtQkFBbUI7SUFFbEUsSUFBSWpILHFCQUFxQixNQUFNO1FBQzdCMUgsZUFBZTVKLGlDQUFpQ3NSLGtCQUFrQmxLO0lBQ3BFO0lBRUEsT0FBT3dDO0FBQ1Q7QUFFTyxTQUFTbk0sdUNBQXVDMlIsdUJBQXVCLEVBQUVoSSxPQUFPO0lBQ3JGLElBQUlnRCxZQUFZO0lBRWhCLElBQU1rRSxnQkFBZ0JjLHdCQUF3QnNLLGdCQUFnQjtJQUU5RCxJQUFJcEwsa0JBQWtCLE1BQU07UUFDMUJsRSxZQUFZN00sMkJBQTJCK1EsZUFBZWxIO0lBQ3hEO0lBRUEsT0FBT2dEO0FBQ1Q7QUFFTyxTQUFTekcsdUNBQXVDZ1QseUJBQXlCLEVBQUV2UCxPQUFPO0lBQ3ZGLElBQUl5QixZQUFZO0lBRWhCLElBQU1xRixnQkFBZ0J5SSwwQkFBMEJvQixnQkFBZ0I7SUFFaEUsSUFBSTdKLGtCQUFrQixNQUFNO1FBQzFCckYsWUFBWW5GLDJCQUEyQndLLGVBQWU5RztJQUN4RDtJQUVBLE9BQU95QjtBQUNUO0FBRU8sU0FBU3hHLHVDQUF1QzJVLHlCQUF5QixFQUFFNVAsT0FBTztJQUN2RixJQUFJMEIsWUFBWTtJQUVoQixJQUFNOEYsZ0JBQWdCb0ksMEJBQTBCZ0IsZ0JBQWdCO0lBRWhFLElBQUlwSixrQkFBa0IsTUFBTTtRQUMxQjlGLFlBQVkxRywyQkFBMkJ3TSxlQUFleEg7SUFDeEQ7SUFFQSxPQUFPMEI7QUFDVDtBQUVPLFNBQVMzRix1Q0FBdUNtVCx5QkFBeUIsRUFBRWxQLE9BQU87SUFDdkYsSUFBSXlCLFlBQVk7SUFFaEIsSUFBTXFGLGdCQUFnQm9JLDBCQUEwQnlCLGdCQUFnQjtJQUVoRSxJQUFJN0osa0JBQWtCLE1BQU07UUFDMUJyRixZQUFZbkYsMkJBQTJCd0ssZUFBZTlHO0lBQ3hEO0lBRUEsT0FBT3lCO0FBQ1Q7QUFFTyxTQUFTM0gsd0NBQXdDaVMsaUJBQWlCLEVBQUUvTCxPQUFPO0lBQ2hGLElBQUlrTSxxQkFBcUI7SUFFekIsSUFBTWIseUJBQXlCVSxrQkFBa0JrSCx5QkFBeUI7SUFFMUUsSUFBSTVILDJCQUEyQixNQUFNO1FBQ25DYSxxQkFBcUJuUyw2Q0FBNkNzUix3QkFBd0JyTDtJQUM1RjtJQUVBLE9BQU9rTTtBQUNUO0FBRU8sU0FBUzFNLHdDQUF3Q3VQLHlCQUF5QixFQUFFL08sT0FBTztJQUN4RixJQUFJOEosYUFBYTtJQUVqQixJQUFNSixpQkFBaUJxRiwwQkFBMEJtRSxpQkFBaUI7SUFFbEUsSUFBSXhKLG1CQUFtQixNQUFNO1FBQzNCSSxhQUFhckssNkJBQTZCaUssZ0JBQWdCMUo7SUFDNUQ7SUFFQSxPQUFPOEo7QUFDVDtBQUVPLFNBQVN6VSx3Q0FBd0M2Wix5QkFBeUIsRUFBRWxQLE9BQU87SUFDeEYsSUFBSWdKLGFBQWE7SUFFakIsSUFBTUYsaUJBQWlCb0csMEJBQTBCaUUsaUJBQWlCO0lBRWxFLElBQUlySyxtQkFBbUIsTUFBTTtRQUMzQkUsYUFBYTFULDZCQUE2QndULGdCQUFnQjlJO0lBQzVEO0lBRUEsT0FBT2dKO0FBQ1Q7QUFFTyxTQUFTNVEsd0NBQXdDZ1ksMkJBQTJCLEVBQUVwUSxPQUFPO0lBQzFGLElBQUk0RixXQUFXO0lBRWYsSUFBTUgsZUFBZTJLLDRCQUE0QmdELGVBQWU7SUFFaEUsSUFBSTNOLGlCQUFpQixNQUFNO1FBQ3pCRyxXQUFXek4seUJBQXlCc04sY0FBY3pGO0lBQ3BEO0lBRUEsT0FBTzRGO0FBQ1Q7QUFFTyxTQUFTakwsMENBQTBDOFMscUJBQXFCLEVBQUV6TixPQUFPO0lBQ3RGLElBQUlrTixtQkFBbUI7SUFFdkIsSUFBTUYsdUJBQXVCUyxzQkFBc0I0Rix1QkFBdUI7SUFFMUUsSUFBSXJHLHlCQUF5QixNQUFNO1FBQ2pDRSxtQkFBbUJ0Uyx5Q0FBeUNvUyxzQkFBc0JoTjtJQUNwRjtJQUVBLE9BQU9rTjtBQUNUO0FBRU8sU0FBU25YLDBDQUEwQ2dhLDBCQUEwQixFQUFFL1AsT0FBTztJQUMzRixJQUFJNEssY0FBYztJQUVsQixJQUFNRixrQkFBa0JxRiwyQkFBMkJ1RCxrQkFBa0I7SUFFckUsSUFBSTVJLG9CQUFvQixNQUFNO1FBQzVCRSxjQUFjNVUsK0JBQStCMFUsaUJBQWlCMUs7SUFDaEU7SUFFQSxPQUFPNEs7QUFDVDtBQUVPLFNBQVM1UiwwQ0FBMEN1Vyx5QkFBeUIsRUFBRXZQLE9BQU87SUFDMUYsSUFBSXdDLGVBQWU7SUFFbkIsSUFBTTBILG1CQUFtQnFGLDBCQUEwQjRCLG1CQUFtQjtJQUV0RSxJQUFJakgscUJBQXFCLE1BQU07UUFDN0IxSCxlQUFlNUosaUNBQWlDc1Isa0JBQWtCbEs7SUFDcEU7SUFFQSxPQUFPd0M7QUFDVDtBQUVPLFNBQVMxSiwwQ0FBMEM4Vyx5QkFBeUIsRUFBRTVQLE9BQU87SUFDMUYsSUFBSXdDLGVBQWU7SUFFbkIsSUFBTTBILG1CQUFtQjBGLDBCQUEwQnVCLG1CQUFtQjtJQUV0RSxJQUFJakgscUJBQXFCLE1BQU07UUFDN0IxSCxlQUFlNUosaUNBQWlDc1Isa0JBQWtCbEs7SUFDcEU7SUFFQSxPQUFPd0M7QUFDVDtBQUVPLFNBQVM3Siw0Q0FBNEN5WCwyQkFBMkIsRUFBRXBRLE9BQU87SUFDOUYsSUFBSXdDLGVBQWU7SUFFbkIsSUFBTTBILG1CQUFtQmtHLDRCQUE0QmUsbUJBQW1CO0lBRXhFLElBQUlqSCxxQkFBcUIsTUFBTTtRQUM3QjFILGVBQWU1SixpQ0FBaUNzUixrQkFBa0JsSztJQUNwRTtJQUVBLE9BQU93QztBQUNUO0FBRU8sU0FBUzVELG1CQUFtQjJVLFNBQVMsRUFBRXZULE9BQU87SUFDbkQsSUFBTXVILFFBQVFnTSxVQUFVWCxHQUFHLENBQUMsU0FBQ3pSO1FBQzNCLElBQU1HLE9BQU9qRCxpQkFBaUI4QyxVQUFVbkI7UUFFeEMsT0FBT3NCO0lBQ1Q7SUFFQSxPQUFPaUc7QUFDVDtBQUVPLFNBQVMxUCxxQkFBcUIyYixVQUFVLEVBQUV4VCxPQUFPO0lBQ3RELElBQU1nQyxTQUFTd1IsV0FBV1osR0FBRyxDQUFDLFNBQUN0UTtRQUM3QixJQUFNRyxRQUFROUssbUJBQW1CMkssV0FBV3RDO1FBRTVDLE9BQU95QztJQUNUO0lBRUEsT0FBT1Q7QUFDVDtBQUVPLFNBQVN2SSx5QkFBeUJnYSxZQUFZLEVBQUV6VCxPQUFPO0lBQzVELElBQU1pQyxXQUFXd1IsYUFBYWIsR0FBRyxDQUFDLFNBQUNsTztRQUNqQyxJQUFNRyxVQUFVckwsdUJBQXVCa0wsYUFBYTFFO1FBRXBELE9BQU82RTtJQUNUO0lBRUEsT0FBTzVDO0FBQ1Q7QUFFTyxTQUFTdEYsNkJBQTZCK1csY0FBYyxFQUFFMVQsT0FBTztJQUNsRSxJQUFNOE4sYUFBYTRGLGVBQWVkLEdBQUcsQ0FBQyxTQUFDOUw7UUFDckMsSUFBTXJGLFlBQVluRiwyQkFBMkJ3SyxlQUFlOUc7UUFFNUQsT0FBT3lCO0lBQ1Q7SUFFQSxPQUFPcU07QUFDVDtBQUVPLFNBQVNyUSw2QkFBNkJrVyxjQUFjLEVBQUUzVCxPQUFPO0lBQ2xFLElBQU1nQixhQUFhMlMsZUFBZWYsR0FBRyxDQUFDLFNBQUNnQjtRQUMvQixJQUFNN1QsV0FBVzZULGVBQ1gzVCxPQUFPWCxpQkFBaUJTLFVBQVVDLFVBQ2xDNlQsWUFBWTVULE1BQU8sR0FBRztRQUU1QixPQUFPNFQ7SUFDVCxJQUNBQyxtQkFBbUI5UyxXQUFXK1MsTUFBTTtJQUUxQyxJQUFJRCxxQkFBcUIsR0FBRztRQUMxQixJQUFNNVQsV0FBV0MsSUFBQUEsMEJBQW1CLEtBQzlCMFQsWUFBWTNULFVBQVUsR0FBRztRQUUvQmMsV0FBV2dULElBQUksQ0FBQ0g7SUFDbEI7SUFFQSxPQUFPN1M7QUFDVDtBQUVPLFNBQVM1SCw2QkFBNkI2YSxjQUFjLEVBQUVqVSxPQUFPO0lBQ2xFLElBQU1pTSxhQUFhZ0ksZUFBZXJCLEdBQUcsQ0FBQyxTQUFDdks7UUFDckMsSUFBTUksWUFBWXZQLDJCQUEyQm1QLGVBQWVySTtRQUU1RCxPQUFPeUk7SUFDVDtJQUVBLE9BQU93RDtBQUNUO0FBRU8sU0FBUzVVLDhCQUE4QjZNLGVBQWUsRUFBRWxFLE9BQU87SUFDcEUsSUFBTW1ELGFBQWFlLGdCQUFnQjBPLEdBQUcsQ0FBQyxTQUFDbEs7UUFDdEMsSUFBTStCLGFBQWFuVCw2QkFBNkJvUixlQUFlMUk7UUFFL0QsT0FBT3lLO0lBQ1Q7SUFFQSxPQUFPdEg7QUFDVDtBQUVPLFNBQVNuTywrQkFBK0JrZixlQUFlLEVBQUVsVSxPQUFPO0lBQ3JFLElBQU15RCxjQUFjeVEsZ0JBQWdCdEIsR0FBRyxDQUFDLFNBQUN2SjtRQUN2QyxJQUFNekIsYUFBYTlTLDZCQUE2QnVVLGdCQUFnQnJKO1FBRWhFLE9BQU80SDtJQUNUO0lBRUEsT0FBT25FO0FBQ1Q7QUFFTyxTQUFTN0YsaUNBQWlDdVcsZ0JBQWdCLEVBQUVuVSxPQUFPO0lBQ3hFLElBQU1pRCxlQUFla1IsaUJBQWlCdkIsR0FBRyxDQUFDLFNBQUMvSDtRQUN6QyxJQUFNRSxjQUFjck4sK0JBQStCbU4saUJBQWlCN0s7UUFFcEUsT0FBTytLO0lBQ1Q7SUFFQSxPQUFPOUg7QUFDVDtBQUVPLFNBQVM1SSx1Q0FBdUMrWix3QkFBd0IsRUFBRXBVLE9BQU87SUFDdEYsSUFBTWlCLGFBQWFtVCx5QkFBeUJ4QixHQUFHLENBQUMsU0FBQ1Q7UUFDL0MsSUFBTWpNLFdBQVcxTCxvQ0FBb0MyWCx5QkFBeUJuUztRQUU5RSxPQUFPa0c7SUFDVDtJQUVBLE9BQU9qRjtBQUNUO0FBRU8sU0FBU25KLG1CQUFtQitKLFFBQVEsRUFBRTdCLE9BQU87SUFDbEQsSUFBTXdULGFBQWEzUixTQUFTd1MsYUFBYSxJQUNuQ3JTLFNBQVNuSyxxQkFBcUIyYixZQUFZeFQ7SUFFaEQsT0FBT2dDO0FBQ1Q7QUFFTyxTQUFTdEkscUJBQXFCbUksUUFBUSxFQUFFN0IsT0FBTztJQUNwRCxJQUFNeVQsZUFBZTVSLFNBQVN5UyxlQUFlLElBQ3ZDclMsV0FBV3hJLHlCQUF5QmdhLGNBQWN6VDtJQUV4RCxPQUFPaUM7QUFDVDtBQUVPLFNBQVN0RCx1QkFBdUIwSSxhQUFhLEVBQUVySCxPQUFPO0lBQzNELElBQU11VCxZQUFZbE0sY0FBY2tOLGtCQUFrQixJQUM1Q2hOLFFBQVEzSSxtQkFBbUIyVSxXQUFXdlQ7SUFFNUMsT0FBT3VIO0FBQ1Q7QUFFTyxTQUFTdFMseUJBQXlCc08sU0FBUyxFQUFFdkQsT0FBTztJQUN6RCxJQUFNa1Usa0JBQWtCM1EsVUFBVWdSLGtCQUFrQixJQUM5QzlRLGNBQWN6TywrQkFBK0JrZixpQkFBaUJsVTtJQUVwRSxPQUFPeUQ7QUFDVDtBQUVPLFNBQVMvRSx5QkFBeUJzTSxlQUFlLEVBQUVoTCxPQUFPO0lBQy9ELElBQU11VCxZQUFZdkksZ0JBQWdCd0osWUFBWSxJQUN4Q2pOLFFBQVEzSSxtQkFBbUIyVSxXQUFXdlQ7SUFFNUMsT0FBT3VIO0FBQ1Q7QUFFTyxTQUFTNUosNkJBQTZCNkksWUFBWSxFQUFFeEcsT0FBTztJQUNoRSxJQUFNbVUsbUJBQW1CM04sYUFBYWlPLG1CQUFtQixJQUNuRHhSLGVBQWVyRixpQ0FBaUN1VyxrQkFBa0JuVTtJQUV4RSxPQUFPaUQ7QUFDVDtBQUVPLFNBQVM1SixnQ0FBZ0MwUyxpQkFBaUIsRUFBRS9MLE9BQU87SUFDeEUsSUFBTWlVLGlCQUFpQmxJLGtCQUFrQjJJLGlCQUFpQixJQUNwRHpJLGFBQWE3Uyw2QkFBNkI2YSxnQkFBZ0JqVTtJQUVoRSxPQUFPaU07QUFDVDtBQUVPLFNBQVNsVSxnQ0FBZ0NnTCxzQkFBc0IsRUFBRS9DLE9BQU87SUFDN0UsSUFBTXdULGFBQWF6USx1QkFBdUJzUixhQUFhLElBQ2pEclMsU0FBU25LLHFCQUFxQjJiLFlBQVl4VDtJQUVoRCxPQUFPZ0M7QUFDVDtBQUVPLFNBQVNwRixvQ0FBb0NnUixxQkFBcUIsRUFBRTVOLE9BQU87SUFDaEYsSUFBTTBULGlCQUFpQjlGLHNCQUFzQitHLGlCQUFpQixJQUN4RDdHLGFBQWFuUiw2QkFBNkIrVyxnQkFBZ0IxVDtJQUVoRSxPQUFPOE47QUFDVDtBQUVPLFNBQVNqUSxzQ0FBc0NrRixzQkFBc0IsRUFBRS9DLE9BQU87SUFDbkYsSUFBTW1VLG1CQUFtQnBSLHVCQUF1QjBSLG1CQUFtQixJQUM3RHhSLGVBQWVyRixpQ0FBaUN1VyxrQkFBa0JuVTtJQUV4RSxPQUFPaUQ7QUFDVDtBQUVPLFNBQVM3SSx5Q0FBeUNzUywwQkFBMEIsRUFBRTFNLE9BQU87SUFDMUYsSUFBTW9VLDJCQUEyQjFILDJCQUEyQmtJLDJCQUEyQixJQUNqRjNULGFBQWE1Ryx1Q0FBdUMrWiwwQkFBMEJwVTtJQUVwRixPQUFPaUI7QUFDVDtBQUVPLFNBQVN6RCx5Q0FBeUNrUCwwQkFBMEIsRUFBRTFNLE9BQU87SUFDMUYsSUFBTTJULGlCQUFpQmpILDJCQUEyQm1JLGlCQUFpQixJQUM3RDdULGFBQWF2RCw2QkFBNkJrVyxnQkFBZ0IzVDtJQUVoRSxPQUFPZ0I7QUFDVDtBQUVPLFNBQVNsRCwwQ0FBMENrSyx1QkFBdUIsRUFBRWhJLE9BQU87SUFDeEYsSUFBTW1VLG1CQUFtQm5NLHdCQUF3QnlNLG1CQUFtQixJQUM5RHhSLGVBQWVyRixpQ0FBaUN1VyxrQkFBa0JuVTtJQUV4RSxPQUFPaUQ7QUFDVCJ9