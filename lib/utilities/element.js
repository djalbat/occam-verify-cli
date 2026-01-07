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
    get _typeFromMetavariableDeclarationNode () {
        return _typeFromMetavariableDeclarationNode;
    },
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
    get deductionFromAxiomLemmaTheoremConjectureNode () {
        return deductionFromAxiomLemmaTheoremConjectureNode;
    },
    get deductionFromDeductionNode () {
        return deductionFromDeductionNode;
    },
    get deductionFromMetaLemmaMetatheoremNode () {
        return deductionFromMetaLemmaMetatheoremNode;
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
    get labelFromMetaLemmaMetatheoremNode () {
        return labelFromMetaLemmaMetatheoremNode;
    },
    get labelsFromAxiomLemmaTheoremConjectureNode () {
        return labelsFromAxiomLemmaTheoremConjectureNode;
    },
    get labelsFromLabelNodes () {
        return labelsFromLabelNodes;
    },
    get labelsFromRuleNode () {
        return labelsFromRuleNode;
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
    get proofFromAxiomLemmaTheoremConjectureNode () {
        return proofFromAxiomLemmaTheoremConjectureNode;
    },
    get proofFromMetaLemmaMetatheoremNode () {
        return proofFromMetaLemmaMetatheoremNode;
    },
    get proofFromProofNode () {
        return proofFromProofNode;
    },
    get proofFromRuleNode () {
        return proofFromRuleNode;
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
    get signatureFromAxiomLemmaTheoremConjectureNode () {
        return signatureFromAxiomLemmaTheoremConjectureNode;
    },
    get signatureFromSatisfiesAssertionNode () {
        return signatureFromSatisfiesAssertionNode;
    },
    get signatureFromSignatureNode () {
        return signatureFromSignatureNode;
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
    get suppositionsFromAxiomLemmaTheoremConjectureNode () {
        return suppositionsFromAxiomLemmaTheoremConjectureNode;
    },
    get suppositionsFromMetaLemmaMetatheoremNode () {
        return suppositionsFromMetaLemmaMetatheoremNode;
    },
    get suppositionsFromSubproofNode () {
        return suppositionsFromSubproofNode;
    },
    get suppositionsFromSuppositionNodes () {
        return suppositionsFromSuppositionNodes;
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
var _type = require("../element/type");
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
        type = _type.baseType;
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
    var Lemma = _elements.default.Lemma, axiomLemmaTheoremConjectureNode = lemmaNode, proof = proofFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), labels = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), hypotheses = [], axiomLemmaTheoremConjectureString = (0, _string.axiomLemmaTheoremConjectureStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = lemmaNode, string = axiomLemmaTheoremConjectureString, lemma = new Lemma(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
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
    var Axiom = _elements.default.Axiom, axiomLemmaTheoremConjectureNode = axiomNode, proof = null, labels = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), hypotheses = [], axiomLemmaTheoremConjectureString = (0, _string.axiomLemmaTheoremConjectureStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = axiomNode, string = axiomLemmaTheoremConjectureString, axiom = new Axiom(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return axiom;
}
function sectionFromSectionNode(sectionNode, context) {
    var hypothesisNodes = sectionNode.getHypothesisNodes(), hypotheses = hypothesesFromHypothesisNodes(hypothesisNodes, context), axiom = axiomFromSectionNode(sectionNode, context), lemma = lemmaFromSectionNode(sectionNode, context), theorem = theoremFromSectionNode(sectionNode, context), conjecture = conjectureFromSectionNode(sectionNode, context), sectionString = (0, _string.sectionStringFromHypothesesAxiomLemmaTheoremAndConjecture)(hypotheses, axiom, lemma, theorem, conjecture, context), node = sectionNode, string = sectionString, section = new Section(context, string, node, hypotheses, axiom, lemma, theorem, conjecture);
    return section;
}
function premiseFromPremiseNode(premiseNode, context) {
    var Premise = _elements.default.Premise, node = premiseNode, string = context.nodeAsString(node), statement = statementFromPremiseNode(premiseNode, context), procedureCall = procedureCallFromPremiseNode(premiseNode, context), premise = new Premise(context, string, node, statement, procedureCall);
    return premise;
}
function theoremFromTheoremNode(theoremNode, context) {
    var Theorem = _elements.default.Theorem, axiomLemmaTheoremConjectureNode = theoremNode, proof = proofFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), labels = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), hypotheses = [], axiomLemmaTheoremConjectureString = (0, _string.axiomLemmaTheoremConjectureStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = theoremNode, string = axiomLemmaTheoremConjectureString, theorem = new Theorem(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return theorem;
}
function equalityFromEqualityNode(equalityNode, context) {
    var Equality1 = _elements.default.Equality, node = equalityNode, string = context.nodeAsString(node), leftTermNode = equalityNode.getLeftTermNode(), rightTermNode = equalityNode.getRightTermNode(), leftTerm = termFromTermNode(leftTermNode, context), rightTerm = termFromTermNode(rightTermNode, context), equality = new Equality1(string, leftTerm, rightTerm);
    return equality;
}
function metaTypeFromMetaTypeNode(metaTypeNode, context) {
    var MetaType = _elements.default.MetaType, node = metaTypeNode, string = context.nodeAsString(node), metaTypeName = metaTypeNode.getMetaTypeName(), name = metaTypeName, metaType = new MetaType(context, string, node, name);
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
    var SubProof = _elements.default.SubProof, node = subproofNode, suppositions = suppositionsFromSubproofNode(subproofNode, context), subDerivation = subDerivationFromSubproofNode(subproofNode, context), subproofString = (0, _string.subproofStringFromSubproofNode)(subproofNode, context), string = subproofString, subproof = new SubProof(context, string, node, suppositions, subDerivation);
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
    var MetaLemma = _elements.default.MetaLemma, metaLemmaMetathoremNode = metaLemmaNode1, proof = proofFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), label = labelFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), deduction = deductionFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), suppositions = suppositionsFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), substitutions = null, node = metaLemmaNode1, string = (0, _string.metaLemmaMetatheoremStringFromLabelSuppositionsAndDeduction)(label, suppositions, deduction), metaLemma = new MetaLemma(context, string, node, label, suppositions, deduction, proof, substitutions);
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
    var Conjecture = _elements.default.Conjecture, axiomLemmaTheoremConjectureNode = conjectureNode, proof = proofFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), labels = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), hypotheses = [], axiomLemmaTheoremConjectureString = (0, _string.axiomLemmaTheoremConjectureStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = conjectureNode, string = axiomLemmaTheoremConjectureString, conjecture = new Conjecture(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return conjecture;
}
function combinatorFromCombinatorNode(combinatorNode, context) {
    var Combinator = _elements.default.Combinator, node = combinatorNode, string = context.nodeAsString(node), statement = statementFromCombinatorNode(combinatorNode, context);
    context = null;
    var combinator = new Combinator(context, string, node, statement);
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
    var Metatehorem = _elements.default.Metatehorem, metaLemmaMetathoremNode = metatheoremNode, proof = proofFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), label = labelFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), deduction = deductionFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), suppositions = suppositionsFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), substitutions = null, node = metaLemmaNode, string = (0, _string.metaLemmaMetatheoremStringFromLabelSuppositionsAndDeduction)(label, suppositions, deduction), metatheorem = new Metatehorem(context, string, node, label, suppositions, deduction, proof, substitutions);
    return metatheorem;
}
function referenceFromMetavariableNode(metavariableNode, context) {
    var metavariableString = context.nodeAsString(metavariableNode), referenceString = metavariableString, string = referenceString, referenceNode = (0, _instantiate.instantiateReference)(string, context), reference = referenceFromReferenceNode(referenceNode, context);
    return reference;
}
function hyppothesisFromHypothesisNode(hypothesisNode, context) {
    var Hypothesis = _elements.default.Hypothesis, node = hypothesisNode, string = context.nodeAsString(node), statement = statementFromHypothesisNode(hypothesisNode, context), hypothesis = new Hypothesis(context, string, node, statement);
    return hypothesis;
}
function constructorFromConstructorNode(constructorNode, context) {
    var Constructor = _elements.default.Constructor, node = constructorNode, string = context.nodeAsString(node), term = termFromConstructorNode(constructorNode, context);
    context = null;
    var constructor = new Constructor(context, string, node, term);
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
    var ProcedureReference = _elements.default.ProcedureReference, node = procedureReferenceNode, string = context.nodeAsString(node), name = nameFromProcedureReferenceNode(procedureReferenceNode, context), variableDeclaration = new ProcedureReference(context, string, node, name);
    return variableDeclaration;
}
function variableDeclarationFromVariableDeclarationNode(variableDeclarationNode, context) {
    var VariableDeclaration = _elements.default.VariableDeclaration, node = variableDeclarationNode, string = context.nodeAsString(node), variable = variableFromVariableNode(variableDeclarationNode, context), variableDeclaration = new VariableDeclaration(context, string, node, variable);
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
function procedureCallFromSuppositionNode(suppositionNode, context) {
    var procedureCall = null;
    var procedureCallNode = suppositionNode.getProcedureCallNode();
    if (procedureCallNode !== null) {
        procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
    }
    return procedureCall;
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
function proofFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context) {
    var proof = null;
    var proofNode = metaLemmaMetathoremNode.getProofNode();
    if (proofNode !== null) {
        proof = proofFromProofNode(proofNode, context);
    }
    return proof;
}
function labelFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context) {
    var label = null;
    var labelNode = metaLemmaMetathoremNode.getLabelNode();
    if (labelNode !== null) {
        label = labelFromLabelNode(labelNode, context);
    }
    return label;
}
function typeFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    var type = null;
    var typeNode = simpleTypeDeclarationNode.getTypeNode();
    if (typeNode !== null) {
        type = typeFromTypeNode(typeNode, context);
    }
    return type;
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
        type = _type.baseType;
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
function deductionFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context) {
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
    var statementNode = combinatorDeclarationNode.getStatementNode();
    if (statementNode !== null) {
        var Combinator = _elements.default.Combinator, statement = statementFromStatementNode(statementNode, context);
        combinator = new Combinator(statement);
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
function proofFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context) {
    var proof = null;
    var proofNode = axiomLemmaTheoremConjectureNode.getProofNode();
    if (proofNode !== null) {
        proof = proofFromProofNode(proofNode, context);
    }
    return proof;
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
    var termNode = constructorDeclarationNode.getStatementNode();
    if (termNode !== null) {
        var Constructor = _elements.default.Constructor, term = termFromTermNode(termNode, context);
        constructor = new Constructor(term);
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
function deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context) {
    var deduction = null;
    var deductionNode = axiomLemmaTheoremConjectureNode.getDeductionNode();
    if (deductionNode !== null) {
        deduction = deductionFromDeductionNode(deductionNode, context);
    }
    return deduction;
}
function signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context) {
    var signature = null;
    var signatureNode = axiomLemmaTheoremConjectureNode.getSignatureNode();
    if (signatureNode !== null) {
        signature = signatureFromSignatureNode(signatureNode, context);
    }
    return signature;
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
        var superType = _type.baseType; ///
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
function statementsFromSubproofAssertionNode(subproofAssertionNode, context) {
    var statementNodes = subproofAssertionNode.getStatementNodes(), statements = statementsFromStatementNodes(statementNodes, context);
    return statements;
}
function propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var propertyDeclarationNodes = complexTypeDeclarationNode.getPropertyDeclarationNodes(), properties = propertiesFromPropertyDeclarationNodes(propertyDeclarationNodes, context);
    return properties;
}
function superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var superTypeNodes = complexTypeDeclarationNode.getSuperTypeNodes(), superTypes = superTypesFromSuperTypeNodes(superTypeNodes, context);
    return superTypes;
}
function suppositionsFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context) {
    var suppositionNodes = metaLemmaMetathoremNode.getSuppositionNodes(), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);
    return suppositions;
}
function labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context) {
    var labelNodes = axiomLemmaTheoremConjectureNode.getLabelNodes(), labels = labelsFromLabelNodes(labelNodes, context);
    return labels;
}
function suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context) {
    var suppositionNodes = axiomLemmaTheoremConjectureNode.getSuppositionNodes(), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);
    return suppositions;
}
function _typeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    var type = null;
    var typeNode = metavariableDeclarationNode.getTypeNode();
    if (typeNode !== null) {
        var nominalTypeName = typeNode.getNominalTypeName();
        type = context.findTypeByNominalTypeName(nominalTypeName);
    }
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBiYXNlVHlwZSB9IGZyb20gXCIuLi9lbGVtZW50L3R5cGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zLFxuICAgICAgICAgc3VicHJvb2ZTdHJpbmdGcm9tU3VicHJvb2ZOb2RlLFxuICAgICAgICAgcnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24sXG4gICAgICAgICBwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMsXG4gICAgICAgICBzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNBeGlvbUxlbW1hVGhlb3JlbUFuZENvbmplY3R1cmUsXG4gICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbixcbiAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZTtcblxuICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICB0eXBlID0gYmFzZVR5cGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IG5vbWluYWxUeXBlTmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSB0eXBlTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBudWxsLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBudWxsLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gbnVsbDtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RlcE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcCA9IG5ldyBTdGVwKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbik7XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUnVsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBydWxlU3RyaW5nID0gcnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiksXG4gICAgICAgIG5vZGUgPSBydWxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBydWxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb29mLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICByZXR1cm4gcnVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVycm9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVycm9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hRnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUgPSBsZW1tYU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gbGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nLCAvLy9cbiAgICAgICAgbGVtbWEgPSBuZXcgTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzLFxuICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgZnJhbWUgPSBuZXcgRnJhbWUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucyk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb29mTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIGRlcml2YXRpb24gPSBkZXJpdmF0aW9uRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9vZiA9IG5ldyBQcm9vZihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGRlcml2YXRpb24pO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBeGlvbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUgPSBheGlvbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gYXhpb21Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nLCAvLy9cbiAgICAgICAgYXhpb20gPSBuZXcgQXhpb20oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gYXhpb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzaXNOb2RlcyA9IHNlY3Rpb25Ob2RlLmdldEh5cG90aGVzaXNOb2RlcygpLFxuICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXhpb20gPSBheGlvbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlbW1hID0gbGVtbWFGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2VjdGlvblN0cmluZyA9IHNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc0F4aW9tTGVtbWFUaGVvcmVtQW5kQ29uamVjdHVyZShoeXBvdGhlc2VzLCBheGlvbSwgbGVtbWEsIHRoZW9yZW0sIGNvbmplY3R1cmUsIGNvbnRleHQpLFxuICAgICAgICBub2RlID0gc2VjdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBzZWN0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlKTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByZW1pc2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gcHJlbWlzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlID0gdGhlb3JlbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gdGhlb3JlbU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcsIC8vL1xuICAgICAgICB0aGVvcmVtID0gbmV3IFRoZW9yZW0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXR5RnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcXVhbGl0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcXVhbGl0eU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgIGxlZnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShzdHJpbmcsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhVHlwZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhVHlwZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTm9kZS5nZXRNZXRhVHlwZU5hbWUoKSxcbiAgICAgICAgbmFtZSA9IG1ldGFUeXBlTmFtZSwgIC8vL1xuICAgICAgICBtZXRhVHlwZSA9IG5ldyBNZXRhVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eSB9ID0gZWxlbWVudHMsXG4gICAgbm9kZSA9IHByb3BlcnR5Tm9kZSwgLy8vXG4gICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOb2RlLmdldFByb3BlcnR5TmFtZSgpLFxuICAgIG5vbWluYWxUeXBlTmFtZSA9IG51bGwsXG4gICAgbmFtZSA9IHByb3BlcnR5TmFtZSwgIC8vL1xuICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbm9taW5hbFR5cGVOYW1lKTtcblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW10sXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgaWRlbnRpZmllciwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJQcm9vZiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdWJwcm9vZk5vZGUsIC8vL1xuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YkRlcml2YXRpb24gPSBzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdWJwcm9vZlN0cmluZywgIC8vL1xuICAgICAgICBzdWJwcm9vZiA9IG5ldyBTdWJQcm9vZihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbik7XG5cbiAgcmV0dXJuIHN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRFcXVhbGl0eU5vZGUoKTtcblxuICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpO1xuXG4gICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcbiAgfVxuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gbmV3IERlZHVjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzaWduYXR1cmVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKTtcblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50RnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEp1ZGdlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBqdWRnZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKTtcblxuICByZXR1cm4ganVkZ2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGFMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlID0gbWV0YUxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTWV0YUxlbW1hTWV0YXRoZW9yZW1Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21NZXRhTGVtbWFNZXRhdGhlb3JlbU5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJzdGl0dXRpb25zID0gbnVsbCxcbiAgICAgICAgbm9kZSA9IG1ldGFMZW1tYU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBtZXRhTGVtbWEgPSBuZXcgTWV0YUxlbW1hKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgcmV0dXJuIG1ldGFMZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyTm9kZS5nZXRQYXJhbWV0ZXJOYW1lKCksXG4gICAgICAgIG5hbWUgPSBwYXJhbWV0ZXJOYW1lLCAgLy8vXG4gICAgICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKTtcblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgSHlwb3Roc2lzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGh5cG90aGVzZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXIgPSBuZXcgSHlwb3Roc2lzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlID0gY29uamVjdHVyZU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gY29uamVjdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcsIC8vL1xuICAgICAgICBjb25qZWN0dXJlID0gbmV3IENvbmplY3R1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbmNsdXNpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW5vRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpbm9Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25jbHVzaW5vTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lub05vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW5vID0gbmV3IENvbmNsdXNpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb25jbHVzaW5vO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IG5ldyBBc3N1bXB0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlcml2YXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVyaXZhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZXJpdmF0aW9uID0gbmV3IERlcml2YXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlUHJlZml4ID0gbmV3IFR5cGVQcmVmaXgoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtRnJvbU1ldGFMZW1tYU5vZGUobWV0YXRoZW9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXRlaG9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSA9IG1ldGF0aGVvcmVtTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTWV0YUxlbW1hTWV0YXRoZW9yZW1Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21NZXRhTGVtbWFNZXRhdGhlb3JlbU5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJzdGl0dXRpb25zID0gbnVsbCxcbiAgICAgICAgbm9kZSA9IG1ldGFMZW1tYU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBtZXRhdGhlb3JlbSA9IG5ldyBNZXRhdGVob3JlbShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZywgLy8vXG4gICAgICAgIHN0cmluZyA9IHJlZmVyZW5jZVN0cmluZywgIC8vL1xuICAgICAgICByZWZlcmVuY2VOb2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cHBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgSHlwb3RoZXNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBoeXBvdGhlc2lzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2lzID0gbmV3IEh5cG90aGVzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBoeXBvdGhlc2lzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uc3RydWN0b3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1cHBvc2l0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXF1aXZhbGVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXF1aXZhbGVuY2VOb2RlLCAvLy9cbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXF1aXZhbGVuY2VTdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyh0ZXJtcyksXG4gICAgICAgIHN0cmluZyA9IGVxdWl2YWxlbmNlU3RyaW5nLCAvLy9cbiAgICAgICAgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBtZXRhVHlwZSA9IG51bGwsXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJEZXJpdmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YkRlcml2YXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJEZXJpdmF0aW9uID0gbmV3IFN1YkRlcml2YXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gc3ViRGVyaXZhdGlvbjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZUFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGVBc3NlcnRpb24gPSBuZXcgVHlwZUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpO1xuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocHJvY2VkdXJlUmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlQ2FsbFN0cmluZywgLy8vXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHBhcmFtZXRlcnMsIHByb2NlZHVyZVJlZmVyZW5jZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2YgPSBzdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcE9yU3VicHJvb2YgPSAoc3RlcCB8fCBzdWJwcm9vZik7XG5cbiAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4ZWRGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZWZpeGVkID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5pc1ByZWZpeGVkKCk7XG5cbiAgcmV0dXJuIHByZWZpeGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlZml4ZWQgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5pc1ByZWZpeGVkKCk7XG5cbiAgcmV0dXJuIHByZWZpeGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlZmluZWRBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5pc05lZ2F0ZWQoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVmaW5lZEFzc2VydGlvbiA9IG5ldyBEZWZpbmVkQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpO1xuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb3BlcnR5UmVsYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBuZXcgUHJvcGVydHlSZWxhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb3BlcnR5LCB0ZXJtKTtcblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWVTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgZnJhbWUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb3BlcnR5QXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IG5ldyBQcm9wZXJ0eUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuXG4gIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJwcm9vZkFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50cyk7XG5cbiAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnRhaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5pc05lZ2F0ZWQoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gbmV3IENvbnRhaW5lZEFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2F0aXNmaWVzQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbmV3IFNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHNpZ25hdHVyZSwgcmVmZXJlbmNlKTtcblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZVJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZVJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUpO1xuXG4gIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVQcmVmaXhEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksICAvLy9cbiAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uID0gbmV3IFR5cGVQcmVmaXhEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGVQcmVmaXgpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4RGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tYmluYXRvckRlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uID0gbmV3IENvbWJpbmF0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGNvbWJpbmF0b3IpO1xuXG4gIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2ltcGxlVHlwZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlZml4ZWQgPSBwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb24gPSBuZXcgU2ltcGxlVHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgcHJlZml4ZWQpO1xuXG4gIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSBudWxsLFxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVzb2x2ZWQsIHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gbmV3IFJlZmVyZW5jZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbnN0cnVjdG9yRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29uc3RydWN0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGNvbnN0cnVjdG9yKTtcblxuICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByZWZpeGVkID0gcHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gbmV3IENvbXBsZXhUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcmVmaXhlZCk7XG5cbiAgcmV0dXJuIGNvbXBsZXhUeXBlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgbWV0YXZhcmlhYmxlLnNldE1ldGFUeXBlKG1ldGFUeXBlKTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSBydWxlTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBheGlvbSA9IG51bGw7XG5cbiAgY29uc3QgYXhpb21Ob2RlID0gc2VjdGlvbk5vZGUuZ2V0QXhpb21Ob2RlKCk7XG5cbiAgaWYgKGF4aW9tTm9kZSAhPT0gbnVsbCkge1xuICAgIGF4aW9tID0gYXhpb21Gcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXhpb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbGVtbWEgPSBudWxsO1xuXG4gIGNvbnN0IGxlbW1hTm9kZSA9IHNlY3Rpb25Ob2RlLmdldExlbW1hTm9kZSgpO1xuXG4gIGlmIChsZW1tYU5vZGUgIT09IG51bGwpIHtcbiAgICBsZW1tYSA9IGxlbW1hRnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RlcE5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBzdGVwTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb25jbHVzaW9uID0gbnVsbDtcblxuICBjb25zdCBjb25jbHVzaW9uTm9kZSA9IHJ1bGVOb2RlLmdldENvbmNsdXNpb25Ob2RlKCk7XG5cbiAgaWYgKGNvbmNsdXNpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0aGVvcmVtID0gbnVsbDtcblxuICBjb25zdCB0aGVvcmVtTm9kZSA9IHNlY3Rpb25Ob2RlLmdldFRoZW9yZW1Ob2RlKCk7XG5cbiAgaWYgKHRoZW9yZW1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGhlb3JlbSA9IHRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUodGhlb3JlbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRoZW9yZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBkZXJpdmF0aW9uID0gbnVsbDtcblxuICBjb25zdCBkZXJpdmF0aW9uTm9kZSA9IHByb29mTm9kZS5nZXREZXJpdmF0aW9uTm9kZSgpO1xuXG4gIGlmIChkZXJpdmF0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlcml2YXRpb24gPSBkZXJpdmF0aW9uRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZXJpdmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Db25zdHJ1Y3Rvck5vZGUob2Nuc3RydWN0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IG9jbnN0cnVjdG9yTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbGFiZWxOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbmplY3R1cmUgPSBudWxsO1xuXG4gIGNvbnN0IGNvbmplY3R1cmVOb2RlID0gc2VjdGlvbk5vZGUuZ2V0Q29uamVjdHVyZU5vZGUoKTtcblxuICBpZiAoY29uamVjdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbmNsdXNpb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbmNsdXNpb25Ob2RlID0gcHJlbWlzZU5vZGUuZ2V0Q29uY2x1c2lvbk5vZGUoKTtcblxuICBpZiAoY29uY2x1c2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZUFzc2VydGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllcjsgIC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gZGVkdWN0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBqdWRnZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEp1ZGdlbWVudE5vZGUoKTtcblxuICBpZiAoanVkZ2VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudEZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGp1ZGdlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RlcCA9IG51bGw7XG5cbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGUuaXNTdGVwTm9kZSgpO1xuXG4gIGlmIChzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSkge1xuICAgIGNvbnN0IHN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlOyAgLy8vXG5cbiAgICBzdGVwID0gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29tYmluYXRvck5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpbm9Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW5vTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGFzc3VtcHRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0ganVkZ2VtZW50Tm9kZS5nZXRBc3N1bXB0aW9uTm9kZSgpO1xuXG4gIGlmIChhc3N1bXB0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBoeXBvdGhlc2lzTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHByZW1pc2VOb2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDsgLy8vXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3ViRGVydmlhdGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc3ViRGVyaXZhdGlvbk5vZGUgPSBzdWJwcm9vZk5vZGUuZ2V0U3ViRGVyaXZhdGlvbk5vZGUoKTtcblxuICBpZiAoc3ViRGVyaXZhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJEZXJ2aWF0aW9uID0gc3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3ViRGVydmlhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBzdGVwTm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJOYW1lRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyTm9kZS5nZXRQYXJhbWV0ZXJOYW1lKCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlck5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFR5cGVBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgdHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChyZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdWJwcm9vZk9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZiA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSA9IHN1YnByb29mT3JTdWJwcm9vZk5vZGUuaXNTdWJwcm9vZk5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHN1YnByb29mT3JTdWJwcm9vZk5vZGU7ICAvLy9cblxuICAgIHN1YnByb29mID0gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpXG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvcGVydHkgPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHByb3BlcnR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBzdXBwb3NpdGlvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBkZWZpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBkZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHByb29mTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldFByb29mTm9kZSgpO1xuXG4gIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTWV0YUxlbW1hTWV0YXRoZW9yZW1Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsYWJlbCA9IG51bGw7XG5cbiAgY29uc3QgbGFiZWxOb2RlID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0TGFiZWxOb2RlKCk7XG5cbiAgaWYgKGxhYmVsTm9kZSAhPT0gbnVsbCkge1xuICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmIChmcmFtZVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVzID0gZGVyaXZhdGlvbk5vZGUuZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcygpLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcE9yU3VicHJvb2ZOb2Rlcy5tYXAoKHN0ZXBPclN1YnByb29mTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mID0gc3RlcHNPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHNPclN1YnByb29mcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvcGVydHlBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZTtcblxuICBjb25zdCB0eXBlTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9IGVsc2Uge1xuICAgIHR5cGUgPSBiYXNlVHlwZTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkgezBcbiAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29udGFpbmVkQXNzZXJ0aW9uID0gY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eSA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGUuZ2V0UHJvcGVydHlOb2RlKCk7XG5cbiAgaWYgKHByb3BlcnR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKTtcblxuICBpZiAoc2lnbmF0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IHN1YkRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21NZXRhTGVtbWFNZXRhdGhlb3JlbU5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZHVjdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldERlZHVjdGlvbk5vZGUoKTtcblxuICBpZiAoZGVkdWN0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlUmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVSZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVQcmVmaXggPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVQcmVmaXhOb2RlID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZS5nZXRUeXBlUHJlZml4Tm9kZSgpO1xuXG4gIGlmICh0eXBlUHJlZml4Tm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbWJpbmF0b3IgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZWxlbWVudHMsXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihzdGF0ZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhVHlwZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YVR5cGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldE1ldGFUeXBlTm9kZSgpO1xuXG4gIGlmIChtZXRhVHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgY29uc3QgcHJvb2ZOb2RlID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvcGVydHlSZWxhdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKTtcblxuICBpZiAocHJvcGVydHlSZWxhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb25zdHJ1Y3RvciA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3IodGVybSk7XG4gIH1cblxuICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBkZWR1Y3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0IGRlZHVjdGlvbk5vZGUgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLmdldERlZHVjdGlvbk5vZGUoKTtcblxuICBpZiAoZGVkdWN0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpO1xuXG4gIGlmIChzaWduYXR1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCB0ZXJtcyA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21QcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VzID0gcHJlbWlzZU5vZGVzLm1hcCgocHJlbWlzZU5vZGUpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlID0gcHJlbWlzZUZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyhzdGF0ZW1lbnROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tU3VwZXJUeXBlTm9kZXMoc3VwZXJUeXBlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZU5vZGVzLm1hcCgoc3VwZXJUeXBlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHR5cGVOb2RlID0gc3VwZXJUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pLFxuICAgICAgICBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBzdXBlclR5cGUgPSBiYXNlVHlwZTsgLy8vXG5cbiAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcbiAgfVxuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2VzID0gaHlwb3RoZXNpc05vZGVzLm1hcCgoaHlwb3RoZXNlTm9kZSkgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXMgPSBoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tQXNzdW1wdGlvbk5vZGVzKGFzc3VtcHRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25Ob2Rlcy5tYXAoKGFzc3VtcHRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlcyhwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydGllcyA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlcy5tYXAoKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBydWxlTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVtaXNlTm9kZXMgPSBydWxlTm9kZS5nZXRQcmVtaXNlTm9kZXMoKSxcbiAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21QcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gc2lnbmF0dXJlTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlcyA9IGZyYW1lTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IGVxdWl2YWxlbmNlTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gc3VicHJvb2ZOb2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTm9kZXMgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZXMoKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMoc3RhdGVtZW50Tm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMoKSxcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cGVyVHlwZU5vZGVzID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0U3VwZXJUeXBlTm9kZXMoKSxcbiAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tU3VwZXJUeXBlTm9kZXMoc3VwZXJUeXBlTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGVzID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIF90eXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJfdHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlIiwiYXNzdW1wdGlvbnNGcm9tQXNzdW1wdGlvbk5vZGVzIiwiYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlIiwiYXhpb21Gcm9tQXhpb21Ob2RlIiwiYXhpb21Gcm9tU2VjdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JGcm9tQ29tYmluYXRvck5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29uY2x1c2lub0Zyb21Db25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uRnJvbVByZW1pc2VOb2RlIiwiY29uY2x1c2lvbkZyb21SdWxlTm9kZSIsImNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JOb2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImRlZHVjdGlvbkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlIiwiZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUiLCJkZWR1Y3Rpb25Gcm9tTWV0YUxlbW1hTWV0YXRoZW9yZW1Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUiLCJkZXJpdmF0aW9uRnJvbVByb29mTm9kZSIsImVxdWFsaXR5RnJvbUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5RnJvbVN0YXRlbWVudE5vZGUiLCJlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUiLCJlcnJvckZyb21FcnJvck5vZGUiLCJmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21GcmFtZU5vZGUiLCJmcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZUZyb21KdWRnZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzIiwiaHlwb3RoZXNpc0Zyb21IeXBvdGhlc2lzTm9kZSIsImh5cHBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlIiwiaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUiLCJqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tTWV0YUxlbW1hTWV0YXRoZW9yZW1Ob2RlIiwibGFiZWxzRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUiLCJsYWJlbHNGcm9tTGFiZWxOb2RlcyIsImxhYmVsc0Zyb21SdWxlTm9kZSIsImxlbW1hRnJvbUxlbW1hTm9kZSIsImxlbW1hRnJvbVNlY3Rpb25Ob2RlIiwibWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdGhlb3JlbUZyb21NZXRhTGVtbWFOb2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbUFzc3VtcHRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlIiwibWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlck5hbWVGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyTm9kZXMiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJlbWlzZUZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyIsInByZW1pc2VzRnJvbVJ1bGVOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwicHJvb2ZGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSIsInByb29mRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZSIsInByb29mRnJvbVByb29mTm9kZSIsInByb29mRnJvbVJ1bGVOb2RlIiwicHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnRpZXNGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlOb2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21TdGVwTm9kZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwicnVsZUZyb21SdWxlTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUiLCJzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlIiwic2lnbmF0dXJlRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUiLCJzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZSIsInN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZSIsInN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUiLCJzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50RnJvbVN0ZXBOb2RlIiwic3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyIsInN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcHNPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUiLCJzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN1YnByb29mRnJvbVN1YnByb29mTm9kZSIsInN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdXBlclR5cGVzRnJvbVN1cGVyVHlwZU5vZGVzIiwic3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25zRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tTWV0YUxlbW1hTWV0YXRoZW9yZW1Ob2RlIiwic3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzIiwidGVybUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsInRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlIiwidGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwidGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwidGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUiLCJ0ZXJtc0Zyb21TaWduYXR1cmVOb2RlIiwidGVybXNGcm9tVGVybU5vZGVzIiwidGhlb3JlbUZyb21TZWN0aW9uTm9kZSIsInRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUiLCJ0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJ0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVGcm9tVGVybU5vZGUiLCJ2YXJpYWJsZUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwidHlwZU5vZGUiLCJjb250ZXh0IiwidHlwZSIsImJhc2VUeXBlIiwiVHlwZSIsImVsZW1lbnRzIiwidHlwZU5hbWUiLCJnZXRUeXBlTmFtZSIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInByZWZpeE5hbWUiLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwidGVybU5vZGUiLCJUZXJtIiwibm9kZUFzU3RyaW5nIiwidGVybSIsInN0ZXBOb2RlIiwiU3RlcCIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsInN0ZXAiLCJydWxlTm9kZSIsIlJ1bGUiLCJwcm9vZiIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsInJ1bGVTdHJpbmciLCJydWxzU3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbiIsInJ1bGUiLCJsYWJlbE5vZGUiLCJMYWJlbCIsIm1ldGF2YXJpYWJsZSIsImxhYmVsIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJlcnJvciIsImxlbW1hTm9kZSIsIkxlbW1hIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSIsImRlZHVjdGlvbiIsInN1cHBvc2l0aW9ucyIsInNpZ25hdHVyZSIsImh5cG90aGVzZXMiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmciLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwibGVtbWEiLCJmcmFtZU5vZGUiLCJGcmFtZSIsImFzc3VtcHRpb25zIiwiZnJhbWUiLCJwcm9vZk5vZGUiLCJQcm9vZiIsImRlcml2YXRpb24iLCJheGlvbU5vZGUiLCJBeGlvbSIsImF4aW9tIiwic2VjdGlvbk5vZGUiLCJoeXBvdGhlc2lzTm9kZXMiLCJnZXRIeXBvdGhlc2lzTm9kZXMiLCJ0aGVvcmVtIiwiY29uamVjdHVyZSIsInNlY3Rpb25TdHJpbmciLCJzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNBeGlvbUxlbW1hVGhlb3JlbUFuZENvbmplY3R1cmUiLCJzZWN0aW9uIiwiU2VjdGlvbiIsInByZW1pc2VOb2RlIiwiUHJlbWlzZSIsInByb2NlZHVyZUNhbGwiLCJwcmVtaXNlIiwidGhlb3JlbU5vZGUiLCJUaGVvcmVtIiwiZXF1YWxpdHlOb2RlIiwiRXF1YWxpdHkiLCJsZWZ0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZXF1YWxpdHkiLCJtZXRhVHlwZU5vZGUiLCJNZXRhVHlwZSIsIm1ldGFUeXBlTmFtZSIsImdldE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwicHJvcGVydHlOb2RlIiwiUHJvcGVydHkiLCJwcm9wZXJ0eU5hbWUiLCJnZXRQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eSIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwiaWRlbnRpZmllciIsInByb3BlcnR5UmVsYXRpb25zIiwidmFyaWFibGUiLCJzdWJwcm9vZk5vZGUiLCJTdWJQcm9vZiIsInN1YkRlcml2YXRpb24iLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZSIsInN1YnByb29mIiwic3RhdGVtZW50Tm9kZSIsImdldEVxdWFsaXR5Tm9kZSIsImxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsInJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJkZWR1Y3Rpb25Ob2RlIiwiRGVkdWN0aW9uIiwiU3RhdGVtZW50Iiwic2lnbmF0dXJlTm9kZSIsIlNpZ25hdHVyZSIsInRlcm1zIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsImp1ZGdlbWVudE5vZGUiLCJKdWRnZW1lbnQiLCJhc3N1bXB0aW9uIiwianVkZ2VtZW50IiwibWV0YUxlbW1hTm9kZSIsIk1ldGFMZW1tYSIsIm1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlIiwic3Vic3RpdHV0aW9ucyIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwibWV0YUxlbW1hIiwicGFyYW1ldGVyTm9kZSIsIlBhcmFtZXRlciIsInBhcmFtZXRlck5hbWUiLCJnZXRQYXJhbWV0ZXJOYW1lIiwicGFyYW1ldGVyIiwiaHlwb3RoZXNlTm9kZSIsIkh5cG90aHNpcyIsImNvbmplY3R1cmVOb2RlIiwiQ29uamVjdHVyZSIsImNvbWJpbmF0b3JOb2RlIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJjb25jbHVzaW9uTm9kZSIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW5vTm9kZSIsImNvbmNsdXNpbm8iLCJhc3N1bXB0aW9uTm9kZSIsIkFzc3VtcHRpb24iLCJkZXJpdmF0aW9uTm9kZSIsIkRlcml2YXRpb24iLCJzdGVwc09yU3VicHJvb2ZzIiwidHlwZVByZWZpeE5vZGUiLCJUeXBlUHJlZml4IiwidGVybUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVGcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlUHJlZml4IiwibWV0YXRoZW9yZW1Ob2RlIiwiTWV0YXRlaG9yZW0iLCJtZXRhdGhlb3JlbSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJyZWZlcmVuY2VTdHJpbmciLCJpbnN0YW50aWF0ZVJlZmVyZW5jZSIsImh5cG90aGVzaXNOb2RlIiwiSHlwb3RoZXNpcyIsImh5cG90aGVzaXMiLCJjb25zdHJ1Y3Rvck5vZGUiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwic3VwcG9zaXRpb25Ob2RlIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImVxdWl2YWxlbmNlTm9kZSIsIkVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VTdHJpbmciLCJlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyIsImVxdWl2YWxlbmNlIiwicHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsImdldE5hbWUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN1YkRlcml2YXRpb25Ob2RlIiwiU3ViRGVyaXZhdGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwiVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJwYXJhbWV0ZXJzIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyIsInN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBPclN1YnByb29mIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInByZWZpeGVkIiwiaXNQcmVmaXhlZCIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJEZWZpbmVkQXNzZXJ0aW9uIiwibmVnYXRlZCIsImlzTmVnYXRlZCIsImRlZmluZWRBc3NlcnRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIlByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJUZXJtU3Vic3RpdHV0aW9uIiwidGVybVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJQcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJzdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsIlNhdGlzZmllc0Fzc2VydGlvbiIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsInNldE1ldGFUeXBlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJnZXRQcm9vZk5vZGUiLCJnZXRBeGlvbU5vZGUiLCJnZXRMZW1tYU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldENvbmNsdXNpb25Ob2RlIiwiZ2V0VGhlb3JlbU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJnZXREZXJpdmF0aW9uTm9kZSIsIm9jbnN0cnVjdG9yTm9kZSIsImdldFRlcm1Ob2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldENvbmplY3R1cmVOb2RlIiwiZ2V0VHlwZU5vZGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJnZXRKdWRnZW1lbnROb2RlIiwic3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUiLCJpc1N0ZXBOb2RlIiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsInN1YkRlcnZpYXRpb24iLCJnZXRTdWJEZXJpdmF0aW9uTm9kZSIsImdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJnZXRUeXBlQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mT3JTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlIiwiaXNTdWJwcm9vZk5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGVzIiwiZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcyIsIm1hcCIsImdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRQcm9wZXJ0eU5vZGUiLCJnZXRTaWduYXR1cmVOb2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImdldFByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJnZXRUeXBlUHJlZml4Tm9kZSIsImdldE1ldGFUeXBlTm9kZSIsImdldFByb3BlcnR5UmVsYXRpb25Ob2RlIiwidGVybU5vZGVzIiwibGFiZWxOb2RlcyIsInByZW1pc2VOb2RlcyIsInN0YXRlbWVudE5vZGVzIiwic3VwZXJUeXBlTm9kZXMiLCJzdXBlclR5cGVOb2RlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsInB1c2giLCJwYXJhbWV0ZXJOb2RlcyIsImFzc3VtcHRpb25Ob2RlcyIsInN1cHBvc2l0aW9uTm9kZXMiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJnZXRMYWJlbE5vZGVzIiwiZ2V0UHJlbWlzZU5vZGVzIiwiZ2V0QXNzdW1wdGlvbk5vZGVzIiwiZ2V0VGVybU5vZGVzIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsImdldFBhcmFtZXRlck5vZGVzIiwiZ2V0U3RhdGVtZW50Tm9kZXMiLCJnZXRQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJnZXRTdXBlclR5cGVOb2RlcyIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTAvRGdCQTtlQUFBQTs7UUFqbURBQztlQUFBQTs7UUE0cUJBQztlQUFBQTs7UUF5ekJBQztlQUFBQTs7UUFtREFDO2VBQUFBOztRQTV5REFDO2VBQUFBOztRQXVwQkFDO2VBQUFBOztRQTVGQUM7ZUFBQUE7O1FBaS9CQUM7ZUFBQUE7O1FBenpDQUM7ZUFBQUE7O1FBK1hBQztlQUFBQTs7UUF4V0FDO2VBQUFBOztRQVZBQztlQUFBQTs7UUFtakJBQztlQUFBQTs7UUFoR0FDO2VBQUFBOztRQWpmQUM7ZUFBQUE7O1FBcWtCQUM7ZUFBQUE7O1FBL0xBQztlQUFBQTs7UUF1L0JBQztlQUFBQTs7UUF4d0NBQztlQUFBQTs7UUE4S0FDO2VBQUFBOztRQW8zQkFDO2VBQUFBOztRQXlSQUM7ZUFBQUE7O1FBemdEQUM7ZUFBQUE7O1FBMjFDQUM7ZUFBQUE7O1FBamlDQUM7ZUFBQUE7O1FBcXlCQUM7ZUFBQUE7O1FBejhCQUM7ZUFBQUE7O1FBd2RBQztlQUFBQTs7UUEzckJBQztlQUFBQTs7UUE0REFDO2VBQUFBOztRQXVQQUM7ZUFBQUE7O1FBN1pBQztlQUFBQTs7UUFzdUNBQztlQUFBQTs7UUFoSUFDO2VBQUFBOztRQTVrQ0FDO2VBQUFBOztRQTBwQ0FDO2VBQUFBOztRQTNaQUM7ZUFBQUE7O1FBdFFBQztlQUFBQTs7UUErekJBQztlQUFBQTs7UUEyY0FDO2VBQUFBOztRQXZoREFDO2VBQUFBOztRQXFIQUM7ZUFBQUE7O1FBc2hCQUM7ZUFBQUE7O1FBaHJCQUM7ZUFBQUE7O1FBbXNCQUM7ZUFBQUE7O1FBOTZCQUM7ZUFBQUE7O1FBbzBDQUM7ZUFBQUE7O1FBd2xCQUM7ZUFBQUE7O1FBaExBQztlQUFBQTs7UUFtR0FDO2VBQUFBOztRQTV6REFDO2VBQUFBOztRQXdzQkFDO2VBQUFBOztRQXJl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