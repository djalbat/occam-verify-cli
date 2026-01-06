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
    get conjectureFromSectionNode () {
        return conjectureFromSectionNode;
    },
    get conjectureroConjectureNode () {
        return conjectureroConjectureNode;
    },
    get constructorDeclarationFromConstructorDeclarationNode () {
        return constructorDeclarationFromConstructorDeclarationNode;
    },
    get constructorFromConstructorDeclarationNode () {
        return constructorFromConstructorDeclarationNode;
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
    get judgementFomStatementNode () {
        return judgementFomStatementNode;
    },
    get judgementFromJudgementNode () {
        return judgementFromJudgementNode;
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
    get rulfFromRuleNode () {
        return rulfFromRuleNode;
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
    get typeAssertinFromStatementNode () {
        return typeAssertinFromStatementNode;
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
        var Type = _elements.default.Type, typeName = typeNode.getTypeName(), typePrefixName = typeNode.getTypePrefixName(), nominalTypeName = typeNode.getNominalTypeName(), string = nominalTypeName, node1 = typeNode, name = typeName, prefixName = typePrefixName, superTypes = null, properties = null, provisional = null;
        type = new Type(context, string, node1, name, prefixName, superTypes, properties, provisional);
    }
    return type;
}
function termFromTermNode(termNode, context) {
    var Term = _elements.default.Term, node1 = termNode, string = context.nodeAsString(node1), type = null, term = new Term(context, string, node1, type);
    return term;
}
function stepFromStepNode(stepNode, context) {
    var Step = _elements.default.Step, node1 = stepNode, string = context.nodeAsString(node1), statement = statementFromStepNode(stepNode, context), reference = referenceFromStepNode(stepNode, context), satisfiesAssertion = satisfiesAssertionFromStepNode(stepNode, context), step = new Step(context, string, node1, statement, reference, satisfiesAssertion);
    return step;
}
function rulfFromRuleNode(ruleNode, context) {
    var proof = proofFromRuleNode(ruleNode, context), labels1 = labelsFromRuleNode(ruleNode, context), premises = premisesFromRuleNode(ruleNode, context), conclusion = conclusionFromRuleNode(ruleNode, context), ruleString = (0, _string.rulsStringFromLabelsPremisesAndConclusion)(labels1, premises, conclusion), node1 = ruleNode, string = ruleString, rule = new Rule(context, string, node1, labels1, premises, conclusion, proof);
    return rule;
}
function labelFromLabelNode(labelNode, context) {
    var Label = _elements.default.Label, node1 = labelNode, string = context.nodeAsString(node1), metavariable = metavariableFromLabelNode(labelNode, context), label = new Label(context, string, node1, metavariable);
    return label;
}
function errorFromErrorNode(errorNode, context) {
    var Error = _elements.default.Error, node1 = errorNode, string = context.nodeAsString(node1), error = new Error(context, string, node1);
    return error;
}
function lemmaFromLemmaNode(lemmaNode, context) {
    var Lemma = _elements.default.Lemma, axiomLemmaTheoremConjectureNode = lemmaNode, proof = proofFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), labels1 = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), hypotheses = [], axiomLemmaTheoremConjectureString = (0, _string.axiomLemmaTheoremConjectureStringFromLabelsSuppositionsAndDeduction)(labels1, suppositions, deduction), node1 = lemmaNode, string = axiomLemmaTheoremConjectureString, lemma = new Lemma(context, string, node1, labels1, suppositions, deduction, proof, signature, hypotheses);
    return lemma;
}
function frameFromFrameNode(frameNode, context) {
    var Frame = _elements.default.Frame, node1 = frameNode, string = context.nodeAsString(node1), assumptions = assumptionsFromFrameNode(frameNode, context), frame = new Frame(context, string, node1, assumptions);
    return frame;
}
function proofFromProofNode(proofNode, context) {
    var Proof = _elements.default.Proof, node1 = proofNode, string = null, derivation = derivationFromProofNode(proofNode, context), proof = new Proof(context, string, node1, derivation);
    return proof;
}
function axiomFromAxiomNode(axiomNode, context) {
    var Axiom = _elements.default.Axiom, axiomLemmaTheoremConjectureNode = axiomNode, proof = null, labels1 = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), hypotheses = [], axiomLemmaTheoremConjectureString = (0, _string.axiomLemmaTheoremConjectureStringFromLabelsSuppositionsAndDeduction)(labels1, suppositions, deduction), node1 = axiomNode, string = axiomLemmaTheoremConjectureString, axiom = new Axiom(context, string, node1, labels1, suppositions, deduction, proof, signature, hypotheses);
    return axiom;
}
function sectionFromSectionNode(sectionNode, context) {
    var hypothesisNodes = sectionNode.getHypothesisNodes(), hypotheses = hypothesesFromHypothesisNodes(hypothesisNodes, context), axiom = axiomFromSectionNode(sectionNode, context), lemma = lemmaFromSectionNode(sectionNode, context), theorem = theoremFromSectionNode(sectionNode, context), conjecture = conjectureFromSectionNode(sectionNode, context), sectionString = (0, _string.sectionStringFromHypothesesAxiomLemmaTheoremAndConjecture)(hypotheses, axiom, lemma, theorem, conjecture, context), node1 = sectionNode, string = sectionString, section = new Section(context, string, node1, hypotheses, axiom, lemma, theorem, conjecture);
    return section;
}
function premiseFromPremiseNode(premiseNode, context) {
    var Premise = _elements.default.Premise, node1 = premiseNode, string = context.nodeAsString(node1), statement = statementFromPremiseNode(premiseNode, context), procedureCall = procedureCallFromPremiseNode(premiseNode, context), premise = new Premise(context, string, node1, statement, procedureCall);
    return premise;
}
function theoremFromTheoremNode(theoremNode, context) {
    var Theorem = _elements.default.Theorem, axiomLemmaTheoremConjectureNode = theoremNode, proof = proofFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), labels1 = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), hypotheses = [], axiomLemmaTheoremConjectureString = (0, _string.axiomLemmaTheoremConjectureStringFromLabelsSuppositionsAndDeduction)(labels1, suppositions, deduction), node1 = theoremNode, string = axiomLemmaTheoremConjectureString, theorem = new Theorem(context, string, node1, labels1, suppositions, deduction, proof, signature, hypotheses);
    return theorem;
}
function equalityFromEqualityNode(equalityNode, context) {
    var Equality1 = _elements.default.Equality, node1 = equalityNode, string = context.nodeAsString(node1), leftTermNode = equalityNode.getLeftTermNode(), rightTermNode = equalityNode.getRightTermNode(), leftTerm = termFromTermNode(leftTermNode, context), rightTerm = termFromTermNode(rightTermNode, context), equality = new Equality1(string, leftTerm, rightTerm);
    return equality;
}
function metaTypeFromMetaTypeNode(metaTypeNode, context) {
    var MetaType = _elements.default.MetaType, node1 = metaTypeNode, string = context.nodeAsString(node1), metaTypeName = metaTypeNode.getMetaTypeName(), name = metaTypeName, metaType = new MetaType(context, string, node1, name);
    return metaType;
}
function propertyFromPropertyNode(propertyNode, context) {
    var Property = _elements.default.Property, node1 = propertyNode, string = context.nodeAsString(node1), propertyName = propertyNode.getPropertyName(), nominalTypeName = null, name = propertyName, property = new Property(context, string, node1, name, nominalTypeName);
    return property;
}
function variableFromVariableNode(variableNode, context) {
    var Variable = _elements.default.Variable, node1 = variableNode, string = context.nodeAsString(node1), type = null, identifier = identifierFromVarialbeNode(variableNode, context), propertyRelations = [], variable = new Variable(context, string, node1, type, identifier, propertyRelations);
    return variable;
}
function subproofFromSubproofNode(subproofNode, context) {
    var SubProof = _elements.default.SubProof, node1 = subproofNode, suppositions = suppositionsFromSubproofNode(subproofNode, context), subDerivation = subDerivationFromSubproofNode(subproofNode, context), subproofString = (0, _string.subproofStringFromSubproofNode)(subproofNode, context), string = subproofString, subproof = new SubProof(context, string, node1, suppositions, subDerivation);
    return subproof;
}
function equalityFromStatementNode(statementNode, context) {
    var equality = null;
    var equalityNode = statementNode.getEqualityNode();
    if (equalityNode !== null) {
        var node1 = equalityNode, string = context.nodeAsString(node1), leftTerm = leftTermFromEqualityNode(equalityNode, context), rightTerm = rightTermFromEqualityNode(equalityNode, context);
        equality = new Equality(context, string, node1, leftTerm, rightTerm);
    }
    return equality;
}
function deductionFromDeductionNode(deductionNode, context) {
    var Deduction = _elements.default.Deduction, node1 = deductionNode, string = context.nodeAsString(node1), statement = statementFromDeductionNode(deductionNode, context), deduction = new Deduction(context, string, node1, statement);
    return deduction;
}
function statementFromStatementNode(statementNode, context) {
    var Statement = _elements.default.Statement, node1 = statementNode, string = context.nodeAsString(node1), statement = new Statement(context, string, node1);
    return statement;
}
function signatureFromSignatureNode(signatureNode, context) {
    var Signature = _elements.default.Signature, node1 = signatureNode, string = context.nodeAsString(node1), terms = termsFromSignatureNode(signatureNode, context), signature = new Signature(context, string, node1, terms);
    return signature;
}
function referenceFromReferenceNode(referenceNode, context) {
    var Reference = _elements.default.Reference, node1 = referenceNode, string = context.nodeAsString(node1), metavariable = metavariableFromReferenceNode(referenceNode, context), reference = new Reference(context, string, node1, metavariable);
    return reference;
}
function conjectureroConjectureNode(conjectureNode, context) {
    var Conjecture = _elements.default.Conjecture, axiomLemmaTheoremConjectureNode = conjectureNode, proof = proofFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), labels1 = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), hypotheses = [], axiomLemmaTheoremConjectureString = (0, _string.axiomLemmaTheoremConjectureStringFromLabelsSuppositionsAndDeduction)(labels1, suppositions, deduction), node1 = conjectureNode, string = axiomLemmaTheoremConjectureString, conjecture = new Conjecture(context, string, node1, labels1, suppositions, deduction, proof, signature, hypotheses);
    return conjecture;
}
function judgementFromJudgementNode(judgementNode, context) {
    var Judgement = _elements.default.Judgement, node1 = judgementNode, string = context.nodeAsString(node1), frame = frameFromJudgementNode(judgementNode, context), assumption = assumptionFromJudgementNode(judgementNode, context), judgement = new Judgement(context, string, node1, frame, assumption);
    return judgement;
}
function metaLemmaFromMetaLemmaNode(metaLemmaNode1, context) {
    var MetaLemma = _elements.default.MetaLemma, metaLemmaMetathoremNode = metaLemmaNode1, proof = proofFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), label = labelFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), deduction = deductionFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), suppositions = suppositionsFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), substitutions = null, node1 = metaLemmaNode1, string = (0, _string.metaLemmaMetatheoremStringFromLabelSuppositionsAndDeduction)(label, suppositions, deduction), metaLemma = new MetaLemma(context, string, node1, label, suppositions, deduction, proof, substitutions);
    return metaLemma;
}
function parameterFromParameterNode(parameterNode, context) {
    var Parameter = _elements.default.Parameter, node1 = parameterNode, string = context.nodeAsString(node1), parameterName = parameterNode.getParameterName(), name = parameterName, parameter = new Parameter(context, string, node1, name);
    return parameter;
}
function hypothesisFromHypothesisNode(hypotheseNode, context) {
    var Hypothsis = _elements.default.Hypothsis, node1 = hypotheseNode, string = context.nodeAsString(node1), statement = statementFromHypothesisNode(hypotheseNode, context), parameter = new Hypothsis(context, string, node1, statement);
    return parameter;
}
function conclusionFromConclusionNode(conclusionNode, context) {
    var Conclusion = _elements.default.Conclusion, node1 = conclusionNode, string = context.nodeAsString(node1), statement = statementFromConclusionNode(conclusionNode, context), conclusion = new Conclusion(context, string, node1, statement);
    return conclusion;
}
function conclusinoFromConclusionNode(conclusinoNode, context) {
    var Conclusion = _elements.default.Conclusion, node1 = conclusinoNode, string = context.nodeAsString(node1), statement = statementFromConclusionNode(conclusinoNode, context), conclusino = new Conclusion(context, string, node1, statement);
    return conclusino;
}
function assumptionFromAssumptionNode(assumptionNode, context) {
    var Assumption = _elements.default.Assumption, node1 = assumptionNode, string = context.nodeAsString(node1), statement = statementFromAssumptionNode(assumptionNode, context), reference = referenceFromAssumptionNode(assumptionNode, context), assumption = new Assumption(context, string, node1, statement, reference);
    return assumption;
}
function derivationFromDerivationNode(derivationNode, context) {
    var Derivation = _elements.default.Derivation, node1 = derivationNode, string = null, stepsOrSubproofs = stepsOrSubproofsFromDerivationNode(derivationNode, context), derivation = new Derivation(context, string, node1, stepsOrSubproofs);
    return derivation;
}
function typePrefixFromTypePrefixNode(typePrefixNode, context) {
    var TypePrefix = _elements.default.TypePrefix, node1 = typePrefixNode, string = context.nodeAsString(node1), term = termFromTypePrefixNode(typePrefixNode, context), type = typeFromTypePrefixNode(typePrefixNode, context), typePrefix = new TypePrefix(context, string, node1, term, type);
    return typePrefix;
}
function metatheoremFromMetaLemmaNode(metatheoremNode, context) {
    var Metatehorem = _elements.default.Metatehorem, metaLemmaMetathoremNode = metatheoremNode, proof = proofFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), label = labelFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), deduction = deductionFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), suppositions = suppositionsFromMetaLemmaMetatheoremNode(metaLemmaMetathoremNode, context), substitutions = null, node1 = metaLemmaNode, string = (0, _string.metaLemmaMetatheoremStringFromLabelSuppositionsAndDeduction)(label, suppositions, deduction), metatheorem = new Metatehorem(context, string, node1, label, suppositions, deduction, proof, substitutions);
    return metatheorem;
}
function referenceFromMetavariableNode(metavariableNode, context) {
    var metavariableString = context.nodeAsString(metavariableNode), referenceString = metavariableString, string = referenceString, referenceNode = (0, _instantiate.instantiateReference)(string, context), reference = referenceFromReferenceNode(referenceNode, context);
    return reference;
}
function hyppothesisFromHypothesisNode(hypothesisNode, context) {
    var Hypothesis = _elements.default.Hypothesis, node1 = hypothesisNode, string = context.nodeAsString(node1), statement = statementFromHypothesisNode(hypothesisNode, context), hypothesis = new Hypothesis(context, string, node1, statement);
    return hypothesis;
}
function suppositionFromSuppositionNode(suppositionNode, context) {
    var Supposition = _elements.default.Supposition, node1 = suppositionNode, string = context.nodeAsString(node1), statement = statementFromSuppositionNode(suppositionNode, context), procedureCall = procedureCallFromSuppositionNode(suppositionNode, context), supposition = new Supposition(context, string, node1, statement, procedureCall);
    return supposition;
}
function equivalenceFromEquivalenceNode(equivalenceNode, context) {
    var Equivalence = _elements.default.Equivalence, node1 = equivalenceNode, terms = termsFromEquivalenceNode(equivalenceNode, context), equivalenceString = (0, _string.equivalenceStringFromTerms)(terms), string = equivalenceString, equivalence = new Equivalence(context, string, node1, terms);
    return equivalence;
}
function nameFromProcedureReferenceNode(procedureReferenceNode, context) {
    var name = procedureReferenceNode.getName();
    return name;
}
function metavariableFromMetavariableNode(metavariableNode, context) {
    var Metavariable = _elements.default.Metavariable, node1 = metavariableNode, string = context.nodeAsString(node1), metavariableName = metavariableNode.getMetavariableName(), name = metavariableName, type = null, metaType = null, metavariable = new Metavariable(context, string, node1, name, type, metaType);
    return metavariable;
}
function subDerivationFromSubDerivationNode(subDerivationNode, context) {
    var SubDerivation = _elements.default.SubDerivation, node1 = subDerivationNode, string = null, stepsOrSubproofs = stepsOrSubproofsFromSubDerivationNode(subDerivationNode, context), subDerivation = new SubDerivation(context, string, node1, stepsOrSubproofs);
    return subDerivation;
}
function typeAssertionFromTypeAssertionNode(typeAssertionNode, context) {
    var TypeAssertion = _elements.default.TypeAssertion, node1 = typeAssertionNode, string = context.nodeAsString(node1), term = termFromTypeAssertionNode(typeAssertionNode, context), type = typeFromTypeAssertionNode(typeAssertionNode, context), typeAssertion = new TypeAssertion(context, string, node1, term, type);
    return typeAssertion;
}
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    var ProcedureCall = _elements.default.ProcedureCall, parameters = parametersFromProcedureCallNode(procedureCallNode, context), procedureReference = procedureReferenceFromProcedureCallNode(procedureCallNode, context), procedureCallString = (0, _string.procedureCallStringFromProcedureReferenceAndParameters)(procedureReference, parameters), node1 = procedureCallNode, string = procedureCallString, procedureCall = new ProcedureCall(context, string, node1, parameters, procedureReference);
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
    var DefinedAssertion = _elements.default.DefinedAssertion, node1 = definedAssertionNode, string = context.nodeAsString(node1), negated = definedAssertionNode.isNegated(), term = termFromDefinedAssertionNode(definedAssertionNode, context), frame = frameFromDefinedAssertionNode(definedAssertionNode, context), definedAssertion = new DefinedAssertion(context, string, node1, term, frame, negated);
    return definedAssertion;
}
function propertyRelationFromPropertyRelationNode(propertyRelationNode, context) {
    var PropertyRelation = _elements.default.PropertyRelation, node1 = propertyRelationNode, string = context.nodeAsString(node1), property = propertyFromPropertyRelationNode(propertyRelationNode, context), term = termFromPropertyRelationNode(propertyRelationNode, context), propertyRelation = new PropertyRelation(context, string, node1, property, term);
    return propertyRelation;
}
function termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context) {
    var TermSubstitution = _elements.default.TermSubstitution, node1 = termSubstitutionNode, string = context.nodeAsString(node1), term = termFromTermSubstitutionNode(termSubstitutionNode, context), variable = variableFromTermSubstitutionNode(termSubstitutionNode, context), termSubstitution = new TermSubstitution(context, string, node1, term, variable);
    return termSubstitution;
}
function frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    var FrameSubstitution = _elements.default.FrameSubstitution, node1 = frameSubstitutionNode, string = context.nodeAsString(node1), frame = frameFromFrameSubstitutionNode(frameSubstitutionNode, context), metavariable = metavariableFromFrameSubstitutionNode(frameSubstitutionNode, context), frameSubstitution = new FrameSubstitution(context, string, node1, frame, metavariable);
    return frameSubstitution;
}
function propertyAssertionFromPropertyAssertionNode(propertyAssertionNode, context) {
    var PropertyAssertion = _elements.default.PropertyAssertion, node1 = propertyAssertionNode, string = context.nodeAsString(node1), term = termFromPropertyAssertionNode(propertyAssertionNode, context), propertyRelation = propertyRelationFromPropertyAssertionNode(propertyAssertionNode, context), propertyAssertion = new PropertyAssertion(context, string, node1, term, propertyRelation);
    return propertyAssertion;
}
function subproofAssertionFromSubproofAssertionNode(subproofAssertionNode, context) {
    var SubproofAssertion = _elements.default.SubproofAssertion, node1 = subproofAssertionNode, string = context.nodeAsString(node1), statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context), subproofAssertion = new SubproofAssertion(context, string, node1, statements);
    return subproofAssertion;
}
function containedAssertionFromContainedAssertionNode(containedAssertionNode, context) {
    var ContainedAssertion = _elements.default.ContainedAssertion, node1 = containedAssertionNode, string = context.nodeAsString(node1), negated = containedAssertionNode.isNegated(), term = termFromContainedAssertionNode(containedAssertionNode, context), frame = frameFromContainedAssertionNode(containedAssertionNode, context), statement = statementFromContainedAssertionNode(containedAssertionNode, context), containedAssertion = new ContainedAssertion(context, string, node1, term, frame, negated, statement);
    return containedAssertion;
}
function satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    var SatisfiesAssertion = _elements.default.SatisfiesAssertion, node1 = satisfiesAssertionNode, string = context.nodeAsString(node1), signature = signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context), reference = referenceFromSatisfiesAssertionNode(satisfiesAssertionNode, context), satisfiesAssertion = new SatisfiesAssertion(context, string, node1, signature, reference);
    return satisfiesAssertion;
}
function procedureReferenceFromProcedureReferenceNode(procedureReferenceNode, context) {
    var ProcedureReference = _elements.default.ProcedureReference, node1 = procedureReferenceNode, string = context.nodeAsString(node1), name = nameFromProcedureReferenceNode(procedureReferenceNode, context), variableDeclaration = new ProcedureReference(context, string, node1, name);
    return variableDeclaration;
}
function variableDeclarationFromVariableDeclarationNode(variableDeclarationNode, context) {
    var VariableDeclaration = _elements.default.VariableDeclaration, node1 = variableDeclarationNode, string = context.nodeAsString(node1), variable = variableFromVariableNode(variableDeclarationNode, context), variableDeclaration = new VariableDeclaration(context, string, node1, variable);
    return variableDeclaration;
}
function typePrefixDeclarationFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
    var TypePrefixDeclaration = _elements.default.TypePrefixDeclaration, node1 = typePrefixDeclarationNode, string = context.nodeAsString(node1), typePrefix = typePrefixFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context), typePrefixDeclaration = new TypePrefixDeclaration(context, string, node1, typePrefix);
    return typePrefixDeclaration;
}
function combinatorDeclarationFromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
    var CombinatorDeclaration = _elements.default.CombinatorDeclaration, node1 = combinatorDeclarationNode, string = context.nodeAsString(node1), combinator = combinatorFromCombinatorDeclarationNode(combinatorDeclarationNode, context), combinatorDeclaration = new CombinatorDeclaration(context, string, node1, combinator);
    return combinatorDeclaration;
}
function simpleTypeDeclarationFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    var SimpleTypeDeclaration = _elements.default.SimpleTypeDeclaration, node1 = simpleTypeDeclarationNode, string = context.nodeAsString(node1), type = typeFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), prefixed = prefixedFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), simpleTypeDeclaration = new SimpleTypeDeclaration(context, string, node1, type, prefixed);
    return simpleTypeDeclaration;
}
function statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    var StatementSubstitution = _elements.default.StatementSubstitution, node1 = statementSubstitutionNode, string = context.nodeAsString(node1), resolved = true, statement = statementFromStatementSubstitutionNode(statementSubstitutionNode, context), metavariable = metavariableFromStatementSubstitutionNode(statementSubstitutionNode, context), substitution = null, statementSubstitution = new StatementSubstitution(context, string, node1, resolved, statement, metavariable, substitution);
    return statementSubstitution;
}
function referenceSubstitutionFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
    var ReferenceSubstitution = _elements.default.ReferenceSubstitution, node1 = referenceSubstitutionNode, string = context.nodeAsString(node1), reference = referenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context), metavariable = metavariableFromReferenceSubstitutionNode(referenceSubstitutionNode, context), referenceSubstitution = new ReferenceSubstitution(context, string, node1, reference, metavariable);
    return referenceSubstitution;
}
function constructorDeclarationFromConstructorDeclarationNode(constructorDeclarationNode, context) {
    var ConstructorDeclaration = _elements.default.ConstructorDeclaration, node1 = constructorDeclarationNode, string = context.nodeAsString(node1), constructor = constructorFromConstructorDeclarationNode(constructorDeclarationNode, context), constructorDeclaration = new ConstructorDeclaration(context, string, node1, constructor);
    return constructorDeclaration;
}
function complexTypeDeclarationFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var ComplexTypeDeclaration = _elements.default.ComplexTypeDeclaration, node1 = complexTypeDeclarationNode, string = context.nodeAsString(node1), type = typeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), prefixed = prefixedFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), complexTypeDeclaration = new ComplexTypeDeclaration(context, string, node1, type, prefixed);
    return complexTypeDeclaration;
}
function metavariableDeclarationFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    var MetavariableDeclaration = _elements.default.MetavariableDeclaration, node1 = metavariableDeclarationNode, string = context.nodeAsString(node1), metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariable = metavariableFromMetavariableDeclarationNode(metavariableDeclarationNode, context);
    metavariable.setMetaType(metaType);
    var metavariableDeclaration = new MetavariableDeclaration(context, string, node1, metavariable);
    return metavariableDeclaration;
}
function proofFromRuleNode(ruleNode, context) {
    var proof = null;
    var proofNode = ruleNode.getProofNode(node);
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
function judgementFomStatementNode(statementNode, context) {
    var judgement = null;
    var judgementNode = statementNode.getJudgementNode();
    if (judgementNode !== null) {
        judgement = judgementFromJudgementNode(judgementNode, context);
    }
    return judgement;
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
function stepFromStepOrSubproofNode(stepOrSubproofNode, context) {
    var step = null;
    var stepOrSubproofNodeStepNode = stepOrSubproofNode.isStepNode();
    if (stepOrSubproofNodeStepNode) {
        var stepNode = stepOrSubproofNode; ///
        step = stepFromStepNode(stepNode, context);
    }
    return step;
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
    var singularMetavariableNode = statementNode.getSingularMetavariableNode();
    if (singularMetavariableNode !== null) {
        var metavariableNode = singularMetavariableNode; ///
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
function typeAssertinFromStatementNode(statementNode, context) {
    var typeAssertion = null;
    var typeAssertionNode = statementNode.getTypeAssertionNode();
    if (typeAssertionNode !== null) {
        typeAssertion = typeAssertionFromTypeAssertionNode(typeAssertionNode, context);
    }
    return typeAssertion;
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
    var labels1 = labelNodes.map(function(labelNode) {
        var label = labelFromLabelNode(labelNode, context);
        return label;
    });
    return labels1;
}
function premisesFromPremiseNodes(premiseNodes, context) {
    var premises = premiseNodes.map(function(premiseNode) {
        var premise = premiseFromPremiseNode(premiseNode, context);
        return premise;
    });
    return labels;
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
    var labelNodes = ruleNode.getLabelNodes(), labels1 = labelsFromLabelNodes(labelNodes, context);
    return labels1;
}
function premisesFromRuleNode(ruleNode, context) {
    var premiseNodes = ruleNode.getLabelNodes(), premises = premisesFromPremiseNodes(premiseNodes, context);
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
    var labelNodes = axiomLemmaTheoremConjectureNode.getLabelNodes(), labels1 = labelsFromLabelNodes(labelNodes, context);
    return labels1;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBiYXNlVHlwZSB9IGZyb20gXCIuLi9lbGVtZW50L3R5cGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zLFxuICAgICAgICAgc3VicHJvb2ZTdHJpbmdGcm9tU3VicHJvb2ZOb2RlLFxuICAgICAgICAgcnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24sXG4gICAgICAgICBwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMsXG4gICAgICAgICBzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNBeGlvbUxlbW1hVGhlb3JlbUFuZENvbmplY3R1cmUsXG4gICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbixcbiAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZTtcblxuICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICB0eXBlID0gYmFzZVR5cGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IG5vbWluYWxUeXBlTmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSB0eXBlTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBudWxsLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBudWxsLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gbnVsbDtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXAgPSBuZXcgU3RlcChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9vZiA9IHByb29mRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcnVsZVN0cmluZyA9IHJ1bHNTdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pLFxuICAgICAgICBub2RlID0gcnVsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gcnVsZVN0cmluZywgIC8vL1xuICAgICAgICBydWxlID0gbmV3IFJ1bGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZik7XG5cbiAgcmV0dXJuIHJ1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcnJvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYUZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGVtbWEgfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlID0gbGVtbWFOb2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IGxlbW1hTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZywgLy8vXG4gICAgICAgIGxlbW1hID0gbmV3IExlbW1hKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIGxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lIH0gPSBlbGVtZW50cyxcbiAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgIGZyYW1lID0gbmV3IEZyYW1lKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXNzdW1wdGlvbnMpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9vZk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBkZXJpdmF0aW9uID0gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvb2YgPSBuZXcgUHJvb2YoY29udGV4dCwgc3RyaW5nLCBub2RlLCBkZXJpdmF0aW9uKTtcblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbUZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXhpb20gfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlID0gYXhpb21Ob2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IGF4aW9tTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZywgLy8vXG4gICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIGF4aW9tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbkZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2lzTm9kZXMgPSBzZWN0aW9uTm9kZS5nZXRIeXBvdGhlc2lzTm9kZXMoKSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCksXG4gICAgICAgIGF4aW9tID0gYXhpb21Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZW1tYSA9IGxlbW1hRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNlY3Rpb25TdHJpbmcgPSBzZWN0aW9uU3RyaW5nRnJvbUh5cG90aGVzZXNBeGlvbUxlbW1hVGhlb3JlbUFuZENvbmplY3R1cmUoaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZSA9IHNlY3Rpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gc2VjdGlvblN0cmluZywgLy8vXG4gICAgICAgIHNlY3Rpb24gPSBuZXcgU2VjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSk7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcmVtaXNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgcmV0dXJuIHByZW1pc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUodGhlb3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUaGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSA9IHRoZW9yZW1Ob2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbm9kZSA9IHRoZW9yZW1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nLCAvLy9cbiAgICAgICAgdGhlb3JlbSA9IG5ldyBUaGVvcmVtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIHRoZW9yZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXF1YWxpdHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXF1YWxpdHlOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgIHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkoc3RyaW5nLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICByZXR1cm4gZXF1YWxpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YVR5cGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YVR5cGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgIG5hbWUgPSBtZXRhVHlwZU5hbWUsICAvLy9cbiAgICAgICAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgIG5vZGUgPSBwcm9wZXJ0eU5vZGUsIC8vL1xuICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5Tm9kZS5nZXRQcm9wZXJ0eU5hbWUoKSxcbiAgICBub21pbmFsVHlwZU5hbWUgPSBudWxsLFxuICAgIG5hbWUgPSBwcm9wZXJ0eU5hbWUsICAvLy9cbiAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdLFxuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3ViUHJvb2YgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VicHJvb2ZOb2RlLCAvLy9cbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJEZXJpdmF0aW9uID0gc3ViRGVyaXZhdGlvbkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZlN0cmluZ0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3VicHJvb2ZTdHJpbmcsICAvLy9cbiAgICAgICAgc3VicHJvb2YgPSBuZXcgU3ViUHJvb2YoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24pO1xuXG4gIHJldHVybiBzdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXR5RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RXF1YWxpdHlOb2RlKCk7XG5cbiAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG5vZGUgPSBlcXVhbGl0eU5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBsZWZ0VGVybSA9IGxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KTtcblxuICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG4gIH1cblxuICByZXR1cm4gZXF1YWxpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVkdWN0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlZHVjdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IG5ldyBEZWR1Y3Rpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNpZ25hdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlcm9Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlID0gY29uamVjdHVyZU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBub2RlID0gY29uamVjdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcsIC8vL1xuICAgICAgICBjb25qZWN0dXJlID0gbmV3IENvbmplY3R1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudEZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBKdWRnZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGp1ZGdlbWVudCA9IG5ldyBKdWRnZW1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBmcmFtZSwgYXNzdW1wdGlvbik7XG5cbiAgcmV0dXJuIGp1ZGdlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlKG1ldGFMZW1tYU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhTGVtbWEgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSA9IG1ldGFMZW1tYU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21NZXRhTGVtbWFNZXRhdGhlb3JlbU5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21NZXRhTGVtbWFNZXRhdGhlb3JlbU5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tTWV0YUxlbW1hTWV0YXRoZW9yZW1Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG51bGwsXG4gICAgICAgIG5vZGUgPSBtZXRhTGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbWV0YUxlbW1hID0gbmV3IE1ldGFMZW1tYShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIHJldHVybiBtZXRhTGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHBhcmFtZXRlck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0UGFyYW1ldGVyTmFtZSgpLFxuICAgICAgICBuYW1lID0gcGFyYW1ldGVyTmFtZSwgIC8vL1xuICAgICAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEh5cG90aHNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBoeXBvdGhlc2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVyID0gbmV3IEh5cG90aHNpcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbmNsdXNpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW5vRnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpbm9Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25jbHVzaW5vTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lub05vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW5vID0gbmV3IENvbmNsdXNpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb25jbHVzaW5vO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IG5ldyBBc3N1bXB0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlcml2YXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVyaXZhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZXJpdmF0aW9uID0gbmV3IERlcml2YXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlUHJlZml4ID0gbmV3IFR5cGVQcmVmaXgoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtRnJvbU1ldGFMZW1tYU5vZGUobWV0YXRoZW9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXRlaG9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSA9IG1ldGF0aGVvcmVtTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTWV0YUxlbW1hTWV0YXRoZW9yZW1Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21NZXRhTGVtbWFNZXRhdGhlb3JlbU5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJzdGl0dXRpb25zID0gbnVsbCxcbiAgICAgICAgbm9kZSA9IG1ldGFMZW1tYU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBtZXRhdGhlb3JlbSA9IG5ldyBNZXRhdGVob3JlbShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZywgLy8vXG4gICAgICAgIHN0cmluZyA9IHJlZmVyZW5jZVN0cmluZywgIC8vL1xuICAgICAgICByZWZlcmVuY2VOb2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cHBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgSHlwb3RoZXNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBoeXBvdGhlc2lzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2lzID0gbmV3IEh5cG90aGVzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBoeXBvdGhlc2lzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VwcG9zaXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcXVpdmFsZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcXVpdmFsZW5jZU5vZGUsIC8vL1xuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZShlcXVpdmFsZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlcXVpdmFsZW5jZVN0cmluZyA9IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zKHRlcm1zKSxcbiAgICAgICAgc3RyaW5nID0gZXF1aXZhbGVuY2VTdHJpbmcsIC8vL1xuICAgICAgICBlcXVpdmFsZW5jZSA9IG5ldyBFcXVpdmFsZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKTtcblxuICByZXR1cm4gZXF1aXZhbGVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIG1ldGFUeXBlID0gbnVsbCxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUsIG1ldGFUeXBlKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YkRlcml2YXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3ViRGVyaXZhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YkRlcml2YXRpb24gPSBuZXcgU3ViRGVyaXZhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0ZXBzT3JTdWJwcm9vZnMpO1xuXG4gIHJldHVybiBzdWJEZXJpdmF0aW9uO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZUFzc2VydGlvbiA9IG5ldyBUeXBlQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhwcm9jZWR1cmVSZWZlcmVuY2UsIHBhcmFtZXRlcnMpLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nLCAvLy9cbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXAgPSBzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJwcm9vZiA9IHN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IChzdGVwIHx8IHN1YnByb29mKTtcblxuICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlZml4ZWQgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJlZml4ZWQoKTtcblxuICByZXR1cm4gcHJlZml4ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlZEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVmaXhlZCA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJlZml4ZWQoKTtcblxuICByZXR1cm4gcHJlZml4ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVmaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlSZWxhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IG5ldyBQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvcGVydHksIHRlcm0pO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHZhcmlhYmxlKTtcblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBmcmFtZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gbmV3IFByb3BlcnR5QXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29udGFpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBuZXcgQ29udGFpbmVkQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTYXRpc2ZpZXNBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBuZXcgU2F0aXNmaWVzQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc2lnbmF0dXJlLCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVByb2NlZHVyZVJlZmVyZW5jZU5vZGUocHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgUHJvY2VkdXJlUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IFZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZVByZWZpeERlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb24gPSBuZXcgVHlwZVByZWZpeERlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZVByZWZpeCk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21iaW5hdG9yRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29tYmluYXRvckRlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29tYmluYXRvcik7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVmaXhlZCA9IHByZWZpeGVkRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IG5ldyBTaW1wbGVUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcmVmaXhlZCk7XG5cbiAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IG51bGwsXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBuZXcgUmVmZXJlbmNlU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVmZXJlbmNlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29uc3RydWN0b3IpO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbXBsZXhUeXBlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlZml4ZWQgPSBwcmVmaXhlZEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBuZXcgQ29tcGxleFR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHByZWZpeGVkKTtcblxuICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICBtZXRhdmFyaWFibGUuc2V0TWV0YVR5cGUobWV0YVR5cGUpO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvb2YgPSBudWxsO1xuXG4gIGNvbnN0IHByb29mTm9kZSA9IHJ1bGVOb2RlLmdldFByb29mTm9kZShub2RlKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBheGlvbSA9IG51bGw7XG5cbiAgY29uc3QgYXhpb21Ob2RlID0gc2VjdGlvbk5vZGUuZ2V0QXhpb21Ob2RlKCk7XG5cbiAgaWYgKGF4aW9tTm9kZSAhPT0gbnVsbCkge1xuICAgIGF4aW9tID0gYXhpb21Gcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXhpb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYUZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbGVtbWEgPSBudWxsO1xuXG4gIGNvbnN0IGxlbW1hTm9kZSA9IHNlY3Rpb25Ob2RlLmdldExlbW1hTm9kZSgpO1xuXG4gIGlmIChsZW1tYU5vZGUgIT09IG51bGwpIHtcbiAgICBsZW1tYSA9IGxlbW1hRnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxlbW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RlcE5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBzdGVwTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtRnJvbVNlY3Rpb25Ob2RlKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0aGVvcmVtID0gbnVsbDtcblxuICBjb25zdCB0aGVvcmVtTm9kZSA9IHNlY3Rpb25Ob2RlLmdldFRoZW9yZW1Ob2RlKCk7XG5cbiAgaWYgKHRoZW9yZW1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGhlb3JlbSA9IHRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUodGhlb3JlbU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRoZW9yZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBkZXJpdmF0aW9uID0gbnVsbDtcblxuICBjb25zdCBkZXJpdmF0aW9uTm9kZSA9IHByb29mTm9kZS5nZXREZXJpdmF0aW9uTm9kZSgpO1xuXG4gIGlmIChkZXJpdmF0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlcml2YXRpb24gPSBkZXJpdmF0aW9uRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZXJpdmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbGFiZWxOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVGcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbmplY3R1cmUgPSBudWxsO1xuXG4gIGNvbnN0IGNvbmplY3R1cmVOb2RlID0gc2VjdGlvbk5vZGUuZ2V0Q29uamVjdHVyZU5vZGUoKTtcblxuICBpZiAoY29uamVjdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbmNsdXNpb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbmNsdXNpb25Ob2RlID0gcHJlbWlzZU5vZGUuZ2V0Q29uY2x1c2lvbk5vZGUoKTtcblxuICBpZiAoY29uY2x1c2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudEZvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICBjb25zdCBqdWRnZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRKdWRnZW1lbnROb2RlKCk7XG5cbiAgaWYgKGp1ZGdlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBqdWRnZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgIGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXI7ICAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGRlZHVjdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwID0gbnVsbDtcblxuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZS5pc1N0ZXBOb2RlKCk7XG5cbiAgaWYgKHN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlKSB7XG4gICAgY29uc3Qgc3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGU7ICAvLy9cblxuICAgIHN0ZXAgPSBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpbm9Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW5vTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGFzc3VtcHRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0ganVkZ2VtZW50Tm9kZS5nZXRBc3N1bXB0aW9uTm9kZSgpO1xuXG4gIGlmIChhc3N1bXB0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBoeXBvdGhlc2lzTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHByZW1pc2VOb2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDsgLy8vXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3ViRGVydmlhdGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc3ViRGVyaXZhdGlvbk5vZGUgPSBzdWJwcm9vZk5vZGUuZ2V0U3ViRGVyaXZhdGlvbk5vZGUoKTtcblxuICBpZiAoc3ViRGVyaXZhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJEZXJ2aWF0aW9uID0gc3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3ViRGVydmlhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVBc3NlcnRpbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUeXBlQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0ZXBOb2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlck5hbWVGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldFBhcmFtZXRlck5hbWUoKTtcblxuICByZXR1cm4gcGFyYW1ldGVyTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN1YnByb29mT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mID0gbnVsbDtcblxuICBjb25zdCBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlID0gc3VicHJvb2ZPclN1YnByb29mTm9kZS5pc1N1YnByb29mTm9kZSgpO1xuXG4gIGlmIChzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZPclN1YnByb29mTm9kZTsgIC8vL1xuXG4gICAgc3VicHJvb2YgPSBzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dClcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eSA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAocHJvcGVydHlOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZmluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGRlZmluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChkZWZpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tTWV0YUxlbW1hTWV0YXRoZW9yZW1Ob2RlKG1ldGFMZW1tYU1ldGF0aG9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgY29uc3QgcHJvb2ZOb2RlID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0UHJvb2ZOb2RlKCk7XG5cbiAgaWYgKHByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21NZXRhTGVtbWFNZXRhdGhlb3JlbU5vZGUobWV0YUxlbW1hTWV0YXRob3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxhYmVsID0gbnVsbDtcblxuICBjb25zdCBsYWJlbE5vZGUgPSBtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZS5nZXRMYWJlbE5vZGUoKTtcblxuICBpZiAobGFiZWxOb2RlICE9PSBudWxsKSB7XG4gICAgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZXMgPSBkZXJpdmF0aW9uTm9kZS5nZXRTdGVwT3JTdWJwcm9vZk5vZGVzKCksXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwT3JTdWJwcm9vZk5vZGVzLm1hcCgoc3RlcE9yU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBzdGVwc09yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwc09yU3VicHJvb2ZzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eUFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAocHJvcGVydHlBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgdHlwZSA9IGJhc2VUeXBlO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7MFxuICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb250YWluZWRBc3NlcnRpb24gPSBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5ID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZS5nZXRQcm9wZXJ0eU5vZGUoKTtcblxuICBpZiAocHJvcGVydHlOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpO1xuXG4gIGlmIChzaWduYXR1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVzID0gc3ViRGVyaXZhdGlvbk5vZGUuZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcygpLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcE9yU3VicHJvb2ZOb2Rlcy5tYXAoKHN0ZXBPclN1YnByb29mTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mID0gc3RlcHNPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHNPclN1YnByb29mcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBsZXQgZGVkdWN0aW9uID0gbnVsbDtcblxuICBjb25zdCBkZWR1Y3Rpb25Ob2RlID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpO1xuXG4gIGlmIChkZWR1Y3Rpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldFJlZmVyZW5jZU5vZGUoKTtcblxuICBpZiAocmVmZXJlbmNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVSZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZVByZWZpeCA9IG51bGw7XG5cbiAgY29uc3QgdHlwZVByZWZpeE5vZGUgPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLmdldFR5cGVQcmVmaXhOb2RlKCk7XG5cbiAgaWYgKHR5cGVQcmVmaXhOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29tYmluYXRvciA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKHN0YXRlbWVudCk7XG4gIH1cblxuICByZXR1cm4gY29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGFUeXBlID0gbnVsbDtcblxuICBjb25zdCBtZXRhVHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YVR5cGVOb2RlKCk7XG5cbiAgaWYgKG1ldGFUeXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLmdldFByb29mTm9kZSgpO1xuXG4gIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eVJlbGF0aW9uID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZS5nZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eVJlbGF0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbnN0cnVjdG9yID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcih0ZXJtKTtcbiAgfVxuXG4gIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZHVjdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpO1xuXG4gIGlmIChkZWR1Y3Rpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2lnbmF0dXJlID0gbnVsbDtcblxuICBjb25zdCBzaWduYXR1cmVOb2RlID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZS5nZXRTaWduYXR1cmVOb2RlKCk7XG5cbiAgaWYgKHNpZ25hdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHtcbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbVByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlbWlzZXMgPSBwcmVtaXNlTm9kZXMubWFwKChwcmVtaXNlTm9kZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2UgPSBwcmVtaXNlRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyhzdGF0ZW1lbnROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tU3VwZXJUeXBlTm9kZXMoc3VwZXJUeXBlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZU5vZGVzLm1hcCgoc3VwZXJUeXBlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHR5cGVOb2RlID0gc3VwZXJUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pLFxuICAgICAgICBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBzdXBlclR5cGUgPSBiYXNlVHlwZTsgLy8vXG5cbiAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcbiAgfVxuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tSHlwb3RoZXNpc05vZGVzKGh5cG90aGVzaXNOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBoeXBvdGhlc2VzID0gaHlwb3RoZXNpc05vZGVzLm1hcCgoaHlwb3RoZXNlTm9kZSkgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXMgPSBoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tQXNzdW1wdGlvbk5vZGVzKGFzc3VtcHRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25Ob2Rlcy5tYXAoKGFzc3VtcHRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlcyhwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydGllcyA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlcy5tYXAoKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBydWxlTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VOb2RlcyA9IHJ1bGVOb2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21QcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gc2lnbmF0dXJlTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlcyA9IGZyYW1lTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IGVxdWl2YWxlbmNlTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gc3VicHJvb2ZOb2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTm9kZXMgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZXMoKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMoc3RhdGVtZW50Tm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMoKSxcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cGVyVHlwZU5vZGVzID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0U3VwZXJUeXBlTm9kZXMoKSxcbiAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tU3VwZXJUeXBlTm9kZXMoc3VwZXJUeXBlTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZShtZXRhTGVtbWFNZXRhdGhvcmVtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gbWV0YUxlbW1hTWV0YXRob3JlbU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGVzID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIF90eXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJfdHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlIiwiYXNzdW1wdGlvbnNGcm9tQXNzdW1wdGlvbk5vZGVzIiwiYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlIiwiYXhpb21Gcm9tQXhpb21Ob2RlIiwiYXhpb21Gcm9tU2VjdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb25jbHVzaW5vRnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbkZyb21Db25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25Gcm9tUHJlbWlzZU5vZGUiLCJjb25qZWN0dXJlRnJvbVNlY3Rpb25Ob2RlIiwiY29uamVjdHVyZXJvQ29uamVjdHVyZU5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVkdWN0aW9uRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUiLCJkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvbkZyb21NZXRhTGVtbWFNZXRhdGhlb3JlbU5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZSIsImRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlIiwiZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZSIsImVxdWl2YWxlbmNlRnJvbUVxdWl2YWxlbmNlTm9kZSIsImVycm9yRnJvbUVycm9yTm9kZSIsImZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiaHlwb3RoZXNlc0Zyb21IeXBvdGhlc2lzTm9kZXMiLCJoeXBvdGhlc2lzRnJvbUh5cG90aGVzaXNOb2RlIiwiaHlwcG90aGVzaXNGcm9tSHlwb3RoZXNpc05vZGUiLCJpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSIsImp1ZGdlbWVudEZvbVN0YXRlbWVudE5vZGUiLCJqdWRnZW1lbnRGcm9tSnVkZ2VtZW50Tm9kZSIsImxhYmVsRnJvbUxhYmVsTm9kZSIsImxhYmVsRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZSIsImxhYmVsc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlIiwibGFiZWxzRnJvbUxhYmVsTm9kZXMiLCJsYWJlbHNGcm9tUnVsZU5vZGUiLCJsZW1tYUZyb21MZW1tYU5vZGUiLCJsZW1tYUZyb21TZWN0aW9uTm9kZSIsIm1ldGFMZW1tYUZyb21NZXRhTGVtbWFOb2RlIiwibWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlIiwibWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXRoZW9yZW1Gcm9tTWV0YUxlbW1hTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21Bc3N1bXB0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlIiwibWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwibmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwicGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJOYW1lRnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlck5vZGVzIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByZWZpeGVkRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJlZml4ZWRGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInByZW1pc2VGcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlc0Zyb21QcmVtaXNlTm9kZXMiLCJwcmVtaXNlc0Zyb21SdWxlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUiLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInByb29mRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUiLCJwcm9vZkZyb21NZXRhTGVtbWFNZXRhdGhlb3JlbU5vZGUiLCJwcm9vZkZyb21Qcm9vZk5vZGUiLCJwcm9vZkZyb21SdWxlTm9kZSIsInByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0aWVzRnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tU3RlcE5vZGUiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInJ1bGZGcm9tUnVsZU5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlIiwic2VjdGlvbkZyb21TZWN0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlIiwic2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlIiwic3RhdGVtZW50RnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlIiwic3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlIiwic3RhdGVtZW50RnJvbVByZW1pc2VOb2RlIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudEZyb21TdGVwTm9kZSIsInN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN0ZXBGcm9tU3RlcE5vZGUiLCJzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlIiwic3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUiLCJzdXBlclR5cGVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlc0Zyb21TdXBlclR5cGVOb2RlcyIsInN1cHBvc2l0aW9uRnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlIiwic3VwcG9zaXRpb25zRnJvbU1ldGFMZW1tYU1ldGF0aGVvcmVtTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyIsInRlcm1Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJ0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwidGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZSIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJ0aGVvcmVtRnJvbVNlY3Rpb25Ob2RlIiwidGhlb3JlbUZyb21UaGVvcmVtTm9kZSIsInR5cGVBc3NlcnRpbkZyb21TdGF0ZW1lbnROb2RlIiwidHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbVR5cGVOb2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1Ob2RlIiwidmFyaWFibGVGcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiY29udGV4dCIsInR5cGUiLCJiYXNlVHlwZSIsIlR5cGUiLCJlbGVtZW50cyIsInR5cGVOYW1lIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImdldFR5cGVQcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJwcmVmaXhOYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsInRlcm1Ob2RlIiwiVGVybSIsIm5vZGVBc1N0cmluZyIsInRlcm0iLCJzdGVwTm9kZSIsIlN0ZXAiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGVwIiwicnVsZU5vZGUiLCJwcm9vZiIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImNvbmNsdXNpb25Gcm9tUnVsZU5vZGUiLCJydWxlU3RyaW5nIiwicnVsc1N0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24iLCJydWxlIiwiUnVsZSIsImxhYmVsTm9kZSIsIkxhYmVsIiwibWV0YXZhcmlhYmxlIiwibGFiZWwiLCJlcnJvck5vZGUiLCJFcnJvciIsImVycm9yIiwibGVtbWFOb2RlIiwiTGVtbWEiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlIiwiZGVkdWN0aW9uIiwic3VwcG9zaXRpb25zIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJsZW1tYSIsImZyYW1lTm9kZSIsIkZyYW1lIiwiYXNzdW1wdGlvbnMiLCJmcmFtZSIsInByb29mTm9kZSIsIlByb29mIiwiZGVyaXZhdGlvbiIsImF4aW9tTm9kZSIsIkF4aW9tIiwiYXhpb20iLCJzZWN0aW9uTm9kZSIsImh5cG90aGVzaXNOb2RlcyIsImdldEh5cG90aGVzaXNOb2RlcyIsInRoZW9yZW0iLCJjb25qZWN0dXJlIiwic2VjdGlvblN0cmluZyIsInNlY3Rpb25TdHJpbmdGcm9tSHlwb3RoZXNlc0F4aW9tTGVtbWFUaGVvcmVtQW5kQ29uamVjdHVyZSIsInNlY3Rpb24iLCJTZWN0aW9uIiwicHJlbWlzZU5vZGUiLCJQcmVtaXNlIiwicHJvY2VkdXJlQ2FsbCIsInByZW1pc2UiLCJ0aGVvcmVtTm9kZSIsIlRoZW9yZW0iLCJlcXVhbGl0eU5vZGUiLCJFcXVhbGl0eSIsImxlZnRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJlcXVhbGl0eSIsIm1ldGFUeXBlTm9kZSIsIk1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJwcm9wZXJ0eU5vZGUiLCJQcm9wZXJ0eSIsInByb3BlcnR5TmFtZSIsImdldFByb3BlcnR5TmFtZSIsInByb3BlcnR5IiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJpZGVudGlmaWVyIiwicHJvcGVydHlSZWxhdGlvbnMiLCJ2YXJpYWJsZSIsInN1YnByb29mTm9kZSIsIlN1YlByb29mIiwic3ViRGVyaXZhdGlvbiIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZTdHJpbmdGcm9tU3VicHJvb2ZOb2RlIiwic3VicHJvb2YiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0RXF1YWxpdHlOb2RlIiwibGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwicmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsImRlZHVjdGlvbk5vZGUiLCJEZWR1Y3Rpb24iLCJTdGF0ZW1lbnQiLCJzaWduYXR1cmVOb2RlIiwiU2lnbmF0dXJlIiwidGVybXMiLCJyZWZlcmVuY2VOb2RlIiwiUmVmZXJlbmNlIiwiY29uamVjdHVyZU5vZGUiLCJDb25qZWN0dXJlIiwianVkZ2VtZW50Tm9kZSIsIkp1ZGdlbWVudCIsImFzc3VtcHRpb24iLCJqdWRnZW1lbnQiLCJtZXRhTGVtbWFOb2RlIiwiTWV0YUxlbW1hIiwibWV0YUxlbW1hTWV0YXRob3JlbU5vZGUiLCJzdWJzdGl0dXRpb25zIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJtZXRhTGVtbWEiLCJwYXJhbWV0ZXJOb2RlIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyTmFtZSIsImdldFBhcmFtZXRlck5hbWUiLCJwYXJhbWV0ZXIiLCJoeXBvdGhlc2VOb2RlIiwiSHlwb3Roc2lzIiwiY29uY2x1c2lvbk5vZGUiLCJDb25jbHVzaW9uIiwiY29uY2x1c2lub05vZGUiLCJjb25jbHVzaW5vIiwiYXNzdW1wdGlvbk5vZGUiLCJBc3N1bXB0aW9uIiwiZGVyaXZhdGlvbk5vZGUiLCJEZXJpdmF0aW9uIiwic3RlcHNPclN1YnByb29mcyIsInR5cGVQcmVmaXhOb2RlIiwiVHlwZVByZWZpeCIsInRlcm1Gcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlRnJvbVR5cGVQcmVmaXhOb2RlIiwidHlwZVByZWZpeCIsIm1ldGF0aGVvcmVtTm9kZSIsIk1ldGF0ZWhvcmVtIiwibWV0YXRoZW9yZW0iLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwicmVmZXJlbmNlU3RyaW5nIiwiaW5zdGFudGlhdGVSZWZlcmVuY2UiLCJoeXBvdGhlc2lzTm9kZSIsIkh5cG90aGVzaXMiLCJoeXBvdGhlc2lzIiwic3VwcG9zaXRpb25Ob2RlIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImVxdWl2YWxlbmNlTm9kZSIsIkVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VTdHJpbmciLCJlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyIsImVxdWl2YWxlbmNlIiwicHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsImdldE5hbWUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN1YkRlcml2YXRpb25Ob2RlIiwiU3ViRGVyaXZhdGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwiVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJwYXJhbWV0ZXJzIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyIsInN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBPclN1YnByb29mIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInByZWZpeGVkIiwiaXNQcmVmaXhlZCIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJEZWZpbmVkQXNzZXJ0aW9uIiwibmVnYXRlZCIsImlzTmVnYXRlZCIsImRlZmluZWRBc3NlcnRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIlByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJUZXJtU3Vic3RpdHV0aW9uIiwidGVybVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJQcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJzdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsIlNhdGlzZmllc0Fzc2VydGlvbiIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3IiLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iLCJTaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJzaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwicmVzb2x2ZWQiLCJzdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsInNldE1ldGFUeXBlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJnZXRQcm9vZk5vZGUiLCJnZXRBeGlvbU5vZGUiLCJnZXRMZW1tYU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldFRoZW9yZW1Ob2RlIiwiZ2V0RnJhbWVOb2RlIiwiZ2V0RGVyaXZhdGlvbk5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Q29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlIiwiZ2V0Q29uY2x1c2lvbk5vZGUiLCJnZXRKdWRnZW1lbnROb2RlIiwiZ2V0VGVybU5vZGUiLCJnZXRUeXBlTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsInN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlIiwiaXNTdGVwTm9kZSIsImdldEFzc3VtcHRpb25Ob2RlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJzdWJEZXJ2aWF0aW9uIiwiZ2V0U3ViRGVyaXZhdGlvbk5vZGUiLCJnZXRUeXBlQXNzZXJ0aW9uTm9kZSIsImdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSIsImlzU3VicHJvb2ZOb2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0TGFiZWxOb2RlIiwiZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwic3RlcE9yU3VicHJvb2ZOb2RlcyIsImdldFN0ZXBPclN1YnByb29mTm9kZXMiLCJtYXAiLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0UHJvcGVydHlOb2RlIiwiZ2V0U2lnbmF0dXJlTm9kZSIsImdldERlZHVjdGlvbk5vZGUiLCJnZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwiZ2V0VHlwZVByZWZpeE5vZGUiLCJDb21iaW5hdG9yIiwiZ2V0TWV0YVR5cGVOb2RlIiwiZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJDb25zdHJ1Y3RvciIsInRlcm1Ob2RlcyIsImxhYmVsTm9kZXMiLCJwcmVtaXNlTm9kZXMiLCJzdGF0ZW1lbnROb2RlcyIsInN1cGVyVHlwZU5vZGVzIiwic3VwZXJUeXBlTm9kZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJwdXNoIiwicGFyYW1ldGVyTm9kZXMiLCJhc3N1bXB0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbk5vZGVzIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwiZ2V0TGFiZWxOb2RlcyIsImdldEFzc3VtcHRpb25Ob2RlcyIsImdldFRlcm1Ob2RlcyIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsImdldFN0YXRlbWVudE5vZGVzIiwiZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwiZ2V0U3VwZXJUeXBlTm9kZXMiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF1N0RnQkE7ZUFBQUE7O1FBbGpEQUM7ZUFBQUE7O1FBMm5CQUM7ZUFBQUE7O1FBMnpCQUM7ZUFBQUE7O1FBbURBQztlQUFBQTs7UUE3dURBQztlQUFBQTs7UUEwbkJBQztlQUFBQTs7UUE1RkFDO2VBQUFBOztRQSs4QkFDO2VBQUFBOztRQXg1QkFDO2VBQUFBOztRQTNWQUM7ZUFBQUE7O1FBVkFDO2VBQUFBOztRQThnQkFDO2VBQUFBOztRQVpBQztlQUFBQTs7UUFsa0JBQztlQUFBQTs7UUEyWkFDO2VBQUFBOztRQXE5QkFDO2VBQUFBOztRQXhqQ0FDO2VBQUFBOztRQWsxQkFDO2VBQUFBOztRQXlSQUM7ZUFBQUE7O1FBMThDQUM7ZUFBQUE7O1FBNHhDQUM7ZUFBQUE7O1FBLy9CQUM7ZUFBQUE7O1FBbXdCQUM7ZUFBQUE7O1FBMTVCQUM7ZUFBQUE7O1FBK2JBQztlQUFBQTs7UUFscEJBQztlQUFBQTs7UUE0REFDO2VBQUFBOztRQTBOQUM7ZUFBQUE7O1FBaFlBQztlQUFBQTs7UUF1cUNBQztlQUFBQTs7UUFwSEFDO2VBQUFBOztRQXpoQ0FDO2VBQUFBOztRQTJsQ0FDO2VBQUFBOztRQXJZQUM7ZUFBQUE7O1FBMVBBQztlQUFBQTs7UUE2eEJBQztlQUFBQTs7UUEyY0FDO2VBQUFBOztRQTE4Q0FDO2VBQUFBOztRQXVGQUM7ZUFBQUE7O1FBNmZBQztlQUFBQTs7UUFoREFDO2VBQUFBOztRQXprQkFDO2VBQUFBOztRQXpQQUM7ZUFBQUE7O1FBcXdDQUM7ZUFBQUE7O1FBd2xCQUM7ZUFBQUE7O1FBaExBQztlQUFBQTs7UUFtR0FD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