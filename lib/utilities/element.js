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
function suppositionsFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context) {
    var suppositionNodes = metaLemmaMetathoremNode.getSuppositionNodes(), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBiYXNlVHlwZSB9IGZyb20gXCIuLi9lbGVtZW50L3R5cGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zLFxuICAgICAgICAgcnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24sXG4gICAgICAgICBzdWJwcm9vZlN0cmluZ0Zyb21TdXBwb3NpdGlvbnNBbmRTdWJEZXJpdmF0aW9uLFxuICAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzLFxuICAgICAgICAgc2VjdGlvblN0cmluZ0Zyb21IeXBvdGhlc2VzQXhpb21MZW1tYVRoZW9yZW1BbmRDb25qZWN0dXJlLFxuICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24sXG4gICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgdHlwZSA9IGJhc2VUeXBlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBub21pbmFsVHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gdHlwZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXAgPSBuZXcgU3RlcChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZUZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJ1bGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9vZiA9IHByb29mRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcnVsZVN0cmluZyA9IHJ1bHNTdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pLFxuICAgICAgICBub2RlID0gcnVsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gcnVsZVN0cmluZywgIC8vL1xuICAgICAgICBydWxlID0gbmV3IFJ1bGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwcm9vZiwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbik7XG5cbiAgcmV0dXJuIHJ1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcnJvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYUZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGVtbWEgfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlID0gbGVtbWFOb2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IGxlbW1hTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZywgLy8vXG4gICAgICAgIGxlbW1hID0gbmV3IExlbW1hKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIGxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lIH0gPSBlbGVtZW50cyxcbiAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgIGZyYW1lID0gbmV3IEZyYW1lKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXNzdW1wdGlvbnMpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9vZk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvb2YgPSBuZXcgUHJvb2YoY29udGV4dCwgc3RyaW5nLCBub2RlLCBkZXJpdmF0aW9uKTtcblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbUZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXhpb20gfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlID0gYXhpb21Ob2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IGF4aW9tTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZywgLy8vXG4gICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbkZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2lzTm9kZXMgPSBzZWN0aW9uTm9kZS5nZXRIeXBvdGhlc2lzTm9kZXMoKSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCksXG4gICAgICAgIGF4aW9tID0gYXhpb21Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZW1tYSA9IGxlbW1hRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNlY3Rpb25TdHJpbmcgPSBzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNBeGlvbUxlbW1hVGhlb3JlbUFuZENvbmplY3R1cmUoaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZSA9IHNlY3Rpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gc2VjdGlvblN0cmluZywgLy8vXG4gICAgICAgIHNlY3Rpb24gPSBuZXcgU2VjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSk7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcmVtaXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgcmV0dXJuIHByZW1pc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUodGhlb3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUaGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSA9IHRoZW9yZW1Ob2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IHRoZW9yZW1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nLCAvLy9cbiAgICAgICAgdGhlb3JlbSA9IG5ldyBUaGVvcmVtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIHRoZW9yZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXF1YWxpdHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXF1YWxpdHlOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgIHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkoc3RyaW5nLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICByZXR1cm4gZXF1YWxpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YVR5cGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YVR5cGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgIG5hbWUgPSBtZXRhVHlwZU5hbWUsICAvLy9cbiAgICAgICAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgIG5vZGUgPSBwcm9wZXJ0eU5vZGUsIC8vL1xuICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5Tm9kZS5nZXRQcm9wZXJ0eU5hbWUoKSxcbiAgICBub21pbmFsVHlwZU5hbWUgPSBudWxsLFxuICAgIG5hbWUgPSBwcm9wZXJ0eU5hbWUsICAvLy9cbiAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdLFxuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VicHJvb2YgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VicHJvb2ZOb2RlLCAvLy9cbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJEZXJpdmF0aW9uID0gc3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZlN0cmluZ0Zyb21TdXBwb3NpdGlvbnNBbmRTdWJEZXJpdmF0aW9uKHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbiwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN1YnByb29mU3RyaW5nLCAgLy8vXG4gICAgICAgIHN1YnByb29mID0gbmV3IFN1YnByb29mKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKTtcblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICBjb25zdCBlcXVhbGl0eU5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEVxdWFsaXR5Tm9kZSgpO1xuXG4gIGlmIChlcXVhbGl0eU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBub2RlID0gZXF1YWxpdHlOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG5cbiAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuICB9XG5cbiAgcmV0dXJuIGVxdWFsaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZWR1Y3Rpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBuZXcgRGVkdWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpZ25hdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgSnVkZ2VtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGp1ZGdlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgZnJhbWUsIGFzc3VtcHRpb24pO1xuXG4gIHJldHVybiBqdWRnZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YUxlbW1hIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUgPSBtZXRhTGVtbWFOb2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tTWV0YUxlbW1hTWV0YXRoZW9yZW1Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21NZXRhTGVtbWFNZXRhdGhlb3JlbU5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tTWV0YUxlbW1hTWV0YXRoZW9yZW1Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBub2RlID0gbWV0YUxlbW1hTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG1ldGFMZW1tYSA9IG5ldyBNZXRhTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICByZXR1cm4gbWV0YUxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldFBhcmFtZXRlck5hbWUoKSxcbiAgICAgICAgbmFtZSA9IHBhcmFtZXRlck5hbWUsICAvLy9cbiAgICAgICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBIeXBvdGhzaXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gaHlwb3RoZXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlciA9IG5ldyBIeXBvdGhzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUgPSBjb25qZWN0dXJlTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIG5vZGUgPSBjb25qZWN0dXJlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZywgLy8vXG4gICAgICAgIGNvbmplY3R1cmUgPSBuZXcgQ29uamVjdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiBjb25qZWN0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tYmluYXRvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlKGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbmNsdXNpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW5vRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpbm9Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25jbHVzaW5vTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lub05vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW5vID0gbmV3IENvbmNsdXNpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb25jbHVzaW5vO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IG5ldyBBc3N1bXB0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlcml2YXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVyaXZhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZXJpdmF0aW9uID0gbmV3IERlcml2YXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlUHJlZml4ID0gbmV3IFR5cGVQcmVmaXgoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtRnJvbU1ldGFMZW1tYU5vZGUobWV0YXRoZW9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXRlaG9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSA9IG1ldGF0aGVvcmVtTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTWV0YUxlbW1hTWV0YXRoZW9yZW1Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21NZXRhTGVtbWFNZXRhdGhlb3JlbU5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJzdGl0dXRpb25zID0gbnVsbCxcbiAgICAgICAgbm9kZSA9IG1ldGFMZW1tYU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBtZXRhdGhlb3JlbSA9IG5ldyBNZXRhdGVob3JlbShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZywgLy8vXG4gICAgICAgIHN0cmluZyA9IHJlZmVyZW5jZVN0cmluZywgIC8vL1xuICAgICAgICByZWZlcmVuY2VOb2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cHBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgSHlwb3RoZXNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBoeXBvdGhlc2lzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2lzID0gbmV3IEh5cG90aGVzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBoeXBvdGhlc2lzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29uc3RydWN0b3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnN0cnVjdG9yTm9kZShjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdXBwb3NpdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1aXZhbGVuY2VGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVxdWl2YWxlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVxdWl2YWxlbmNlTm9kZSwgLy8vXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tRXF1aXZhbGVuY2VOb2RlKGVxdWl2YWxlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXModGVybXMpLFxuICAgICAgICBzdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZywgLy8vXG4gICAgICAgIGVxdWl2YWxlbmNlID0gbmV3IEVxdWl2YWxlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgbWV0YVR5cGUgPSBudWxsLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSwgbWV0YVR5cGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3ViRGVyaXZhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdWJEZXJpdmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IG5ldyBTdWJEZXJpdmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RlcHNPclN1YnByb29mcyk7XG5cbiAgcmV0dXJuIHN1YkRlcml2YXRpb247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlQXNzZXJ0aW9uID0gbmV3IFR5cGVBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsU3RyaW5nID0gcHJvY2VkdXJlQ2FsbFN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHByb2NlZHVyZVJlZmVyZW5jZSwgcGFyYW1ldGVycyksXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZUNhbGxTdHJpbmcsIC8vL1xuICAgICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcCA9IHN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXBPclN1YnByb29mID0gKHN0ZXAgfHwgc3VicHJvb2YpO1xuXG4gIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeGVkRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVmaXhlZCA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcmVmaXhlZCgpO1xuXG4gIHJldHVybiBwcmVmaXhlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeGVkRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZWZpeGVkID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcmVmaXhlZCgpO1xuXG4gIHJldHVybiBwcmVmaXhlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWZpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBuZXcgRGVmaW5lZEFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKTtcblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eVJlbGF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gbmV3IFByb3BlcnR5UmVsYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBwcm9wZXJ0eSwgdGVybSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdmFyaWFibGUpO1xuXG4gIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBuZXcgUHJvcGVydHlBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcblxuICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VicHJvb2ZBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudHMpO1xuXG4gIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb250YWluZWRBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IG5ldyBDb250YWluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNhdGlzZmllc0Fzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IG5ldyBTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzaWduYXR1cmUsIHJlZmVyZW5jZSk7XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKTtcblxuICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgVmFyaWFibGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlKTtcblxuICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4RGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLCAgLy8vXG4gICAgICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbiA9IG5ldyBUeXBlUHJlZml4RGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlUHJlZml4KTtcblxuICByZXR1cm4gdHlwZVByZWZpeERlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbWJpbmF0b3JEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb21iaW5hdG9yRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBjb21iaW5hdG9yKTtcblxuICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNpbXBsZVR5cGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByZWZpeGVkID0gcHJlZml4ZWRGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uID0gbmV3IFNpbXBsZVR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHByZWZpeGVkKTtcblxuICByZXR1cm4gc2ltcGxlVHlwZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZXNvbHZlZCA9IHRydWUsXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG5ldyBSZWZlcmVuY2VTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uID0gbmV3IENvbnN0cnVjdG9yRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBjb25zdHJ1Y3Rvcik7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVmaXhlZCA9IHByZWZpeGVkRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IG5ldyBDb21wbGV4VHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgcHJlZml4ZWQpO1xuXG4gIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIG1ldGF2YXJpYWJsZS5zZXRNZXRhVHlwZShtZXRhVHlwZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgY29uc3QgcHJvb2ZOb2RlID0gcnVsZU5vZGUuZ2V0UHJvb2ZOb2RlKCk7XG5cbiAgaWYgKHByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXhpb20gPSBudWxsO1xuXG4gIGNvbnN0IGF4aW9tTm9kZSA9IHNlY3Rpb25Ob2RlLmdldEF4aW9tTm9kZSgpO1xuXG4gIGlmIChheGlvbU5vZGUgIT09IG51bGwpIHtcbiAgICBheGlvbSA9IGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxlbW1hID0gbnVsbDtcblxuICBjb25zdCBsZW1tYU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRMZW1tYU5vZGUoKTtcblxuICBpZiAobGVtbWFOb2RlICE9PSBudWxsKSB7XG4gICAgbGVtbWEgPSBsZW1tYUZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0ZXBOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gc3RlcE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChyZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29uY2x1c2lvbiA9IG51bGw7XG5cbiAgY29uc3QgY29uY2x1c2lvbk5vZGUgPSBydWxlTm9kZS5nZXRDb25jbHVzaW9uTm9kZSgpO1xuXG4gIGlmIChjb25jbHVzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGhlb3JlbSA9IG51bGw7XG5cbiAgY29uc3QgdGhlb3JlbU5vZGUgPSBzZWN0aW9uTm9kZS5nZXRUaGVvcmVtTm9kZSgpO1xuXG4gIGlmICh0aGVvcmVtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRoZW9yZW0gPSB0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0ganVkZ2VtZW50Tm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgZGVyaXZhdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVyaXZhdGlvbk5vZGUgPSBwcm9vZk5vZGUuZ2V0RGVyaXZhdGlvbk5vZGUoKTtcblxuICBpZiAoZGVyaXZhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29uc3RydWN0b3JOb2RlKG9jbnN0cnVjdG9yTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBvY25zdHJ1Y3Rvck5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb25qZWN0dXJlID0gbnVsbDtcblxuICBjb25zdCBjb25qZWN0dXJlTm9kZSA9IHNlY3Rpb25Ob2RlLmdldENvbmplY3R1cmVOb2RlKCk7XG5cbiAgaWYgKGNvbmplY3R1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmplY3R1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb25jbHVzaW9uID0gbnVsbDtcblxuICBjb25zdCBjb25jbHVzaW9uTm9kZSA9IHByZW1pc2VOb2RlLmdldENvbmNsdXNpb25Ob2RlKCk7XG5cbiAgaWYgKGNvbmNsdXNpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgIGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXI7ICAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGRlZHVjdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICBjb25zdCBqdWRnZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRKdWRnZW1lbnROb2RlKCk7XG5cbiAgaWYgKGp1ZGdlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBqdWRnZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXAgPSBudWxsO1xuXG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlLmlzU3RlcE5vZGUoKTtcblxuICBpZiAoc3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUpIHtcbiAgICBjb25zdCBzdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZTsgIC8vL1xuXG4gICAgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW5vTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29uY2x1c2lub05vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0QXNzdW1wdGlvbk5vZGUoKTtcblxuICBpZiAoYXNzdW1wdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gaHlwb3RoZXNpc05vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7IC8vL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1YkRlcnZpYXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHN1YkRlcml2YXRpb25Ob2RlID0gc3VicHJvb2ZOb2RlLmdldFN1YkRlcml2YXRpb25Ob2RlKCk7XG5cbiAgaWYgKHN1YkRlcml2YXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc3ViRGVydmlhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN1YkRlcnZpYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2VOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RlcE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyTmFtZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0UGFyYW1ldGVyTmFtZSgpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUeXBlQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFJlZmVyZW5jZU5vZGUoKTtcblxuICBpZiAocmVmZXJlbmNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3VicHJvb2ZPclN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VicHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mT3JTdWJwcm9vZk5vZGVTdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlLmlzU3VicHJvb2ZOb2RlKCk7XG5cbiAgaWYgKHN1YnByb29mT3JTdWJwcm9vZk5vZGVTdWJwcm9vZk5vZGUpIHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlOyAgLy8vXG5cbiAgICBzdWJwcm9vZiA9IHN1YnByb29mRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5ID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eU5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldERlZmluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21NZXRhTGVtbWFNZXRhdGhlb3JlbU5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBsZXQgbGFiZWwgPSBudWxsO1xuXG4gIGNvbnN0IGxhYmVsTm9kZSA9IG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLmdldExhYmVsTm9kZSgpO1xuXG4gIGlmIChsYWJlbE5vZGUgIT09IG51bGwpIHtcbiAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IGRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5QXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGU7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICB0eXBlID0gYmFzZVR5cGU7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHswXG4gIGxldCBjb250YWluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IGNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvcGVydHkgPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLmdldFByb3BlcnR5Tm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eU5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2lnbmF0dXJlID0gbnVsbDtcblxuICBjb25zdCBzaWduYXR1cmVOb2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCk7XG5cbiAgaWYgKHNpZ25hdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZXMgPSBzdWJEZXJpdmF0aW9uTm9kZS5nZXRTdGVwT3JTdWJwcm9vZk5vZGVzKCksXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwT3JTdWJwcm9vZk5vZGVzLm1hcCgoc3RlcE9yU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBzdGVwc09yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwc09yU3VicHJvb2ZzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tTWV0YUxlbW1hTWV0YXRoZW9yZW1Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBkZWR1Y3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0IGRlZHVjdGlvbk5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCk7XG5cbiAgaWYgKGRlZHVjdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChyZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZVJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFByb2NlZHVyZVJlZmVyZW5jZU5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlUHJlZml4ID0gbnVsbDtcblxuICBjb25zdCB0eXBlUHJlZml4Tm9kZSA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZVByZWZpeE5vZGUoKTtcblxuICBpZiAodHlwZVByZWZpeE5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb21iaW5hdG9yID0gbnVsbDtcblxuICBjb25zdCBjb21iaW5hdG9yTm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0Q29tYmluYXRvck5vZGUoKTtcblxuICBpZiAoY29tYmluYXRvck5vZGUgIT09IG51bGwpIHtcbiAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZShjb21iaW5hdG9yTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGFUeXBlID0gbnVsbDtcblxuICBjb25zdCBtZXRhVHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YVR5cGVOb2RlKCk7XG5cbiAgaWYgKG1ldGFUeXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLmdldFByb29mTm9kZSgpO1xuXG4gIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eVJlbGF0aW9uID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZS5nZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eVJlbGF0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbnN0cnVjdG9yID0gbnVsbDtcblxuICBjb25zdCBjb25zdHJ1Y3Rvck5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRDb25zdHJ1Y3Rvck5vZGUoKTtcblxuICBpZiAoY29uc3RydWN0b3JOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUoY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZHVjdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpO1xuXG4gIGlmIChkZWR1Y3Rpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2lnbmF0dXJlID0gbnVsbDtcblxuICBjb25zdCBzaWduYXR1cmVOb2RlID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZS5nZXRTaWduYXR1cmVOb2RlKCk7XG5cbiAgaWYgKHNpZ25hdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHtcbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlbWlzZXMgPSBwcmVtaXNlTm9kZXMubWFwKChwcmVtaXNlTm9kZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2UgPSBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzKHN0YXRlbWVudE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21TdXBlclR5cGVOb2RlcyhzdXBlclR5cGVOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVzID0gc3VwZXJUeXBlTm9kZXMubWFwKChzdXBlclR5cGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBzdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gdHlwZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSksXG4gICAgICAgIHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IHN1cGVyVHlwZSA9IGJhc2VUeXBlOyAvLy9cblxuICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMoaHlwb3RoZXNpc05vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGh5cG90aGVzZXMgPSBoeXBvdGhlc2lzTm9kZXMubWFwKChoeXBvdGhlc2VOb2RlKSA9PiB7XG4gICAgY29uc3QgaHlwb3RoZXNpcyA9IGh5cG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbk5vZGVzLm1hcCgoYXNzdW1wdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0aWVzID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLm1hcCgocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlcyA9IHJ1bGVOb2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VOb2RlcyA9IHJ1bGVOb2RlLmdldFByZW1pc2VOb2RlcygpLFxuICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZXMgPSBzaWduYXR1cmVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2Rlcyhhc3N1bXB0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gZXF1aXZhbGVuY2VOb2RlLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBzdWJwcm9vZk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlcygpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyhzdGF0ZW1lbnROb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tTWV0YUxlbW1hTWV0YXRoZW9yZW1Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcygpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMocHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwZXJUeXBlTm9kZXMgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRTdXBlclR5cGVOb2RlcygpLFxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21TdXBlclR5cGVOb2RlcyhzdXBlclR5cGVOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25Ob2RlcyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gX3R5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuIl0sIm5hbWVzIjpbIl90eXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsImFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMiLCJhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUiLCJheGlvbUZyb21BeGlvbU5vZGUiLCJheGlvbUZyb21TZWN0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckZyb21Db21iaW5hdG9yTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb25jbHVzaW5vRnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25Gcm9tUHJlbWlzZU5vZGUiLCJjb25jbHVzaW9uRnJvbVJ1bGVOb2RlIiwiY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3Rvck5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVkdWN0aW9uRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUiLCJkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvbkZyb21NZXRhTGVtbWFNZXRhdGhlb3JlbU5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZSIsImRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlIiwiZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZSIsImVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZSIsImVycm9yRnJvbUVycm9yTm9kZSIsImZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMiLCJoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlIiwiaHlwcG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUiLCJpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSIsImp1ZGdlbWVudEZyb21KdWRnZW1lbnROb2RlIiwianVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJsYWJlbEZyb21MYWJlbE5vZGUiLCJsYWJlbEZyb21NZXRhTGVtbWFNZXRhdGhlb3JlbU5vZGUiLCJsYWJlbHNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSIsImxhYmVsc0Zyb21MYWJlbE5vZGVzIiwibGFiZWxzRnJvbVJ1bGVOb2RlIiwibGVtbWFGcm9tTGVtbWFOb2RlIiwibGVtbWFGcm9tU2VjdGlvbk5vZGUiLCJtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZSIsIm1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF0aGVvcmVtRnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tQXNzdW1wdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsIm5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyTmFtZUZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcmVmaXhlZEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByZWZpeGVkRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVtaXNlRnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZXNGcm9tUHJlbWlzZU5vZGVzIiwicHJlbWlzZXNGcm9tUnVsZU5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJwcm9vZkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlIiwicHJvb2ZGcm9tTWV0YUxlbW1hTWV0YXRoZW9yZW1Ob2RlIiwicHJvb2ZGcm9tUHJvb2ZOb2RlIiwicHJvb2ZGcm9tUnVsZU5vZGUiLCJwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydGllc0Zyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbVN0ZXBOb2RlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJydWxlRnJvbVJ1bGVOb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZSIsInNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUiLCJzaWduYXR1cmVGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSIsInNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Gcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwic3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlIiwic3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlIiwic3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZSIsInN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZSIsInN0YXRlbWVudEZyb21QcmVtaXNlTm9kZSIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RlcE5vZGUiLCJzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzIiwic3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdGVwRnJvbVN0ZXBOb2RlIiwic3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwc09yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcHNPclN1YnByb29mc0Zyb21EZXJpdmF0aW9uTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlIiwic3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZXNGcm9tU3VwZXJUeXBlTm9kZXMiLCJzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21NZXRhTGVtbWFNZXRhdGhlb3JlbU5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlIiwic3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMiLCJ0ZXJtRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwidGVybUZyb21Db25zdHJ1Y3Rvck5vZGUiLCJ0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwidGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZSIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJ0aGVvcmVtRnJvbVNlY3Rpb25Ob2RlIiwidGhlb3JlbUZyb21UaGVvcmVtTm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21UeXBlTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21UZXJtTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiYmFzZVR5cGUiLCJUeXBlIiwiZWxlbWVudHMiLCJ0eXBlTmFtZSIsImdldFR5cGVOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJnZXRUeXBlUHJlZml4TmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwicHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwic3RlcE5vZGUiLCJTdGVwIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RlcCIsInJ1bGVOb2RlIiwiUnVsZSIsInByb29mIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwicnVsZVN0cmluZyIsInJ1bHNTdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwicnVsZSIsImxhYmVsTm9kZSIsIkxhYmVsIiwibWV0YXZhcmlhYmxlIiwibGFiZWwiLCJlcnJvck5vZGUiLCJFcnJvciIsImVycm9yIiwibGVtbWFOb2RlIiwiTGVtbWEiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlIiwiZGVkdWN0aW9uIiwic3VwcG9zaXRpb25zIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJsZW1tYSIsImZyYW1lTm9kZSIsIkZyYW1lIiwiYXNzdW1wdGlvbnMiLCJmcmFtZSIsInByb29mTm9kZSIsIlByb29mIiwiZGVyaXZhdGlvbiIsImF4aW9tTm9kZSIsIkF4aW9tIiwiYXhpb20iLCJzZWN0aW9uTm9kZSIsImh5cG90aGVzaXNOb2RlcyIsImdldEh5cG90aGVzaXNOb2RlcyIsInRoZW9yZW0iLCJjb25qZWN0dXJlIiwic2VjdGlvblN0cmluZyIsInNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc0F4aW9tTGVtbWFUaGVvcmVtQW5kQ29uamVjdHVyZSIsInNlY3Rpb24iLCJTZWN0aW9uIiwicHJlbWlzZU5vZGUiLCJQcmVtaXNlIiwicHJvY2VkdXJlQ2FsbCIsInByZW1pc2UiLCJ0aGVvcmVtTm9kZSIsIlRoZW9yZW0iLCJlcXVhbGl0eU5vZGUiLCJFcXVhbGl0eSIsImxlZnRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJlcXVhbGl0eSIsIm1ldGFUeXBlTm9kZSIsIk1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJwcm9wZXJ0eU5vZGUiLCJQcm9wZXJ0eSIsInByb3BlcnR5TmFtZSIsImdldFByb3BlcnR5TmFtZSIsInByb3BlcnR5IiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJpZGVudGlmaWVyIiwicHJvcGVydHlSZWxhdGlvbnMiLCJ2YXJpYWJsZSIsInN1YnByb29mTm9kZSIsIlN1YnByb29mIiwic3ViRGVyaXZhdGlvbiIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZTdHJpbmdGcm9tU3VwcG9zaXRpb25zQW5kU3ViRGVyaXZhdGlvbiIsInN1YnByb29mIiwic3RhdGVtZW50Tm9kZSIsImdldEVxdWFsaXR5Tm9kZSIsImxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsInJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJkZWR1Y3Rpb25Ob2RlIiwiRGVkdWN0aW9uIiwiU3RhdGVtZW50Iiwic2lnbmF0dXJlTm9kZSIsIlNpZ25hdHVyZSIsInRlcm1zIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsImp1ZGdlbWVudE5vZGUiLCJKdWRnZW1lbnQiLCJhc3N1bXB0aW9uIiwianVkZ2VtZW50IiwibWV0YUxlbW1hTm9kZSIsIk1ldGFMZW1tYSIsIm1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlIiwic3Vic3RpdHV0aW9ucyIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwibWV0YUxlbW1hIiwicGFyYW1ldGVyTm9kZSIsIlBhcmFtZXRlciIsInBhcmFtZXRlck5hbWUiLCJnZXRQYXJhbWV0ZXJOYW1lIiwicGFyYW1ldGVyIiwiaHlwb3RoZXNlTm9kZSIsIkh5cG90aHNpcyIsImNvbmplY3R1cmVOb2RlIiwiQ29uamVjdHVyZSIsImNvbWJpbmF0b3JOb2RlIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJjb25jbHVzaW9uTm9kZSIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW5vTm9kZSIsImNvbmNsdXNpbm8iLCJhc3N1bXB0aW9uTm9kZSIsIkFzc3VtcHRpb24iLCJkZXJpdmF0aW9uTm9kZSIsIkRlcml2YXRpb24iLCJzdGVwc09yU3VicHJvb2ZzIiwidHlwZVByZWZpeE5vZGUiLCJUeXBlUHJlZml4IiwidGVybUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVGcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlUHJlZml4IiwibWV0YXRoZW9yZW1Ob2RlIiwiTWV0YXRlaG9yZW0iLCJtZXRhdGhlb3JlbSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJyZWZlcmVuY2VTdHJpbmciLCJpbnN0YW50aWF0ZVJlZmVyZW5jZSIsImh5cG90aGVzaXNOb2RlIiwiSHlwb3RoZXNpcyIsImh5cG90aGVzaXMiLCJjb25zdHJ1Y3Rvck5vZGUiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwic3VwcG9zaXRpb25Ob2RlIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImVxdWl2YWxlbmNlTm9kZSIsIkVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VTdHJpbmciLCJlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyIsImVxdWl2YWxlbmNlIiwicHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsImdldE5hbWUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN1YkRlcml2YXRpb25Ob2RlIiwiU3ViRGVyaXZhdGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwiVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJwYXJhbWV0ZXJzIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyIsInN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBPclN1YnByb29mIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInByZWZpeGVkIiwiaXNQcmVmaXhlZCIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJEZWZpbmVkQXNzZXJ0aW9uIiwibmVnYXRlZCIsImlzTmVnYXRlZCIsImRlZmluZWRBc3NlcnRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIlByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJUZXJtU3Vic3RpdHV0aW9uIiwidGVybVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJQcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJzdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsIlNhdGlzZmllc0Fzc2VydGlvbiIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsInNldE1ldGFUeXBlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJnZXRQcm9vZk5vZGUiLCJnZXRBeGlvbU5vZGUiLCJnZXRMZW1tYU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldENvbmNsdXNpb25Ob2RlIiwiZ2V0VGhlb3JlbU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJnZXREZXJpdmF0aW9uTm9kZSIsIm9jbnN0cnVjdG9yTm9kZSIsImdldFRlcm1Ob2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldENvbmplY3R1cmVOb2RlIiwiZ2V0VHlwZU5vZGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJnZXRKdWRnZW1lbnROb2RlIiwic3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUiLCJpc1N0ZXBOb2RlIiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsInN1YkRlcnZpYXRpb24iLCJnZXRTdWJEZXJpdmF0aW9uTm9kZSIsImdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJnZXRUeXBlQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mT3JTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlIiwiaXNTdWJwcm9vZk5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGVzIiwiZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcyIsIm1hcCIsImdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRQcm9wZXJ0eU5vZGUiLCJnZXRTaWduYXR1cmVOb2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImdldFByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJnZXRUeXBlUHJlZml4Tm9kZSIsImdldENvbWJpbmF0b3JOb2RlIiwiZ2V0TWV0YVR5cGVOb2RlIiwiZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJnZXRDb25zdHJ1Y3Rvck5vZGUiLCJ0ZXJtTm9kZXMiLCJsYWJlbE5vZGVzIiwicHJlbWlzZU5vZGVzIiwic3RhdGVtZW50Tm9kZXMiLCJzdXBlclR5cGVOb2RlcyIsInN1cGVyVHlwZU5vZGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwicHVzaCIsInBhcmFtZXRlck5vZGVzIiwiYXNzdW1wdGlvbk5vZGVzIiwic3VwcG9zaXRpb25Ob2RlcyIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsImdldExhYmVsTm9kZXMiLCJnZXRQcmVtaXNlTm9kZXMiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwiZ2V0UGFyYW1ldGVyTm9kZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsImdldFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsImdldFN1cGVyVHlwZU5vZGVzIiwi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