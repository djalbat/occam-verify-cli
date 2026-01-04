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
    get conjectureromAxiomNode () {
        return conjectureromAxiomNode;
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
    get frameSubstitutionFromFrameSubstitutionNode () {
        return frameSubstitutionFromFrameSubstitutionNode;
    },
    get frameSubstitutionFromStatementNode () {
        return frameSubstitutionFromStatementNode;
    },
    get identifierFromVarialbeNode () {
        return identifierFromVarialbeNode;
    },
    get labelsFromAxiomLemmaTheoremConjectureNode () {
        return labelsFromAxiomLemmaTheoremConjectureNode;
    },
    get labelsFromLabelNodes () {
        return labelsFromLabelNodes;
    },
    get lemmaromAxiomNode () {
        return lemmaromAxiomNode;
    },
    get metaTypeFromMetaTypeNode () {
        return metaTypeFromMetaTypeNode;
    },
    get metaTypeFromMetavariableDeclarationNode () {
        return metaTypeFromMetavariableDeclarationNode;
    },
    get metavariableDeclarationFromMetavariableDeclarationNode () {
        return metavariableDeclarationFromMetavariableDeclarationNode;
    },
    get metavariableFromFrameSubstitutionNode () {
        return metavariableFromFrameSubstitutionNode;
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
    get metavariableFromStatementSubstitutionNode () {
        return metavariableFromStatementSubstitutionNode;
    },
    get prefixedFromComplexTypeDeclarationNode () {
        return prefixedFromComplexTypeDeclarationNode;
    },
    get prefixedFromSimpleTypeDeclarationNode () {
        return prefixedFromSimpleTypeDeclarationNode;
    },
    get proofFromAxiomLemmaTheoremConjectureNode () {
        return proofFromAxiomLemmaTheoremConjectureNode;
    },
    get proofFromProofNode () {
        return proofFromProofNode;
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
    get satisfiesAssertionFromSatisfiesAssertionNode () {
        return satisfiesAssertionFromSatisfiesAssertionNode;
    },
    get satisfiesAssertionFromStatementNode () {
        return satisfiesAssertionFromStatementNode;
    },
    get satisfiesAssertionFromStepNode () {
        return satisfiesAssertionFromStepNode;
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
    get statementFromConclusionNode () {
        return statementFromConclusionNode;
    },
    get statementFromContainedAssertionNode () {
        return statementFromContainedAssertionNode;
    },
    get statementFromDeductionNode () {
        return statementFromDeductionNode;
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
    get suppositionsFromAxiomLemmaTheoremConjectureNode () {
        return suppositionsFromAxiomLemmaTheoremConjectureNode;
    },
    get suppositionsFromSubproofNode () {
        return suppositionsFromSubproofNode;
    },
    get suppositionsFromSuppositionNodes () {
        return suppositionsFromSuppositionNodes;
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
    get theoremromAxiomNode () {
        return theoremromAxiomNode;
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
        type = new Type(string, node, name, prefixName, superTypes, properties, provisional);
    }
    return type;
}
function termFromTermNode(termNode, context) {
    var Term = _elements.default.Term, node = termNode, string = context.nodeAsString(node), type = null, term = new Term(string, node, type);
    return term;
}
function stepFromStepNode(stepNode, context) {
    var Step = _elements.default.Step, node = stepNode, string = context.nodeAsString(node), statement = statementFromStepNode(stepNode, context), reference = referenceFromStepNode(stepNode, context), satisfiesAssertion = satisfiesAssertionFromStepNode(stepNode, context), step = new Step(context, string, node, statement, reference, satisfiesAssertion);
    return step;
}
function lemmaromAxiomNode(lemmaNode, context) {
    var Lemma = _elements.default.Lemma, axiomLemmaTheoremConjectureNode = lemmaNode, proof = proofFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), labels = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), hypotheses = [], node = lemmaNode, string = (0, _string.stringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), lemma = new Lemma(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return lemma;
}
function frameFromFrameNode(frameNode, context) {
    var Frame = _elements.default.Frame, node = frameNode, string = context.nodeAsString(node), assumptions = assumptionsFromFrameNode(frameNode, context), frame = new Frame(string, node, assumptions);
    return frame;
}
function proofFromProofNode(proofNode, context) {
    var Proof = _elements.default.Proof, node = proofNode, string = null, derivation = derivationFromProofNode(proofNode, context), proof = new Proof(string, node, derivation);
    return proof;
}
function axiomFromAxiomNode(axiomNode, context) {
    var Axiom = _elements.default.Axiom, axiomLemmaTheoremConjectureNode = axiomNode, proof = null, labels = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), hypotheses = [], node = axiomNode, string = (0, _string.stringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), axiom = new Axiom(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return axiom;
}
function theoremromAxiomNode(theoremNode, context) {
    var Theorem = _elements.default.Theorem, axiomLemmaTheoremConjectureNode = theoremNode, proof = proofFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), labels = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), hypotheses = [], node = theoremNode, string = (0, _string.stringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), theorem = new Theorem(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return theorem;
}
function conjectureromAxiomNode(conjectureNode, context) {
    var Conjecture = _elements.default.Conjecture, axiomLemmaTheoremConjectureNode = conjectureNode, proof = proofFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), labels = labelsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), deduction = deductionFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), suppositions = suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), signature = signatureFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context), hypotheses = [], node = conjectureNode, string = (0, _string.stringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), conjecture = new Conjecture(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
    return conjecture;
}
function equalityFromEqualityNode(equalityNode, context) {
    var Equality1 = _elements.default.Equality, node = equalityNode, string = context.nodeAsString(node), leftTermNode = equalityNode.getLeftTermNode(), rightTermNode = equalityNode.getRightTermNode(), leftTerm = termFromTermNode(leftTermNode, context), rightTerm = termFromTermNode(rightTermNode, context), equality = new Equality1(string, leftTerm, rightTerm);
    return equality;
}
function metaTypeFromMetaTypeNode(metaTypeNode, context) {
    var MetaType = _elements.default.MetaType, node = metaTypeNode, string = context.nodeAsString(node), metaTypeName = metaTypeNode.getMetaTypeName(), name = metaTypeName, metaType = new MetaType(string, node, name);
    return metaType;
}
function propertyFromPropertyNode(propertyNode, context) {
    var Property = _elements.default.Property, node = propertyNode, string = context.nodeAsString(node), propertyName = propertyNode.getPropertyName(), nominalTypeName = null, name = propertyName, property = new Property(string, node, name, nominalTypeName);
    return property;
}
function variableFromVariableNode(variableNode, context) {
    var Variable = _elements.default.Variable, node = variableNode, string = context.nodeAsString(node), type = null, identifier = identifierFromVarialbeNode(variableNode, context), propertyRelations = [], variable = new Variable(string, node, type, identifier, propertyRelations);
    return variable;
}
function subproofFromSubproofNode(subproofNode, context) {
    var SubProof = _elements.default.SubProof, node = subproofNode, suppositions = suppositionsFromSubproofNode(subproofNode, context), subDerivation = subDerivationFromSubproofNode(subproofNode, context), subproofString = (0, _string.subproofStringFromSubproofNode)(subproofNode, context), string = subproofString, subproof = new SubProof(string, node, suppositions, subDerivation);
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
    var Statement = _elements.default.Statement, node = statementNode, string = context.nodeAsString(node), statement = new Statement(string, node);
    return statement;
}
function signatureFromSignatureNode(signatureNode, context) {
    var Signature = _elements.default.Signature, node = signatureNode, string = context.nodeAsString(node), terms = termsFromSignatureNode(signatureNode, context), signature = new Signature(string, node, terms);
    return signature;
}
function referenceFromReferenceNode(referenceNode, context) {
    var Reference = _elements.default.Reference, node = referenceNode, string = context.nodeAsString(node), metavariable = metavariableFromReferenceNode(referenceNode, context), reference = new Reference(string, node, metavariable);
    return reference;
}
function conclusinoFromConclusionNode(conclusinoNode, context) {
    var Conclusion = _elements.default.Conclusion, node = conclusinoNode, string = context.nodeAsString(node), statement = statementFromConclusionNode(conclusinoNode, context), conclusino = new Conclusion(context, string, node, statement);
    return conclusino;
}
function assumptionFromAssumptionNode(assumptionNode, context) {
    var Assumption = _elements.default.Assumption, node = assumptionNode, string = context.nodeAsString(node), statement = statementFromAssumptionNode(assumptionNode, context), reference = referenceFromAssumptionNode(assumptionNode, context), assumption = new Assumption(string, node, statement, reference);
    return assumption;
}
function derivationFromDerivationNode(derivationNode, context) {
    var Derivation = _elements.default.Derivation, node = derivationNode, string = null, stepsOrSubproofs = stepsOrSubproofsFromDerivationNode(derivationNode, context), derivation = new Derivation(string, node, stepsOrSubproofs);
    return derivation;
}
function typePrefixFromTypePrefixNode(typePrefixNode, context) {
    var TypePrefix = _elements.default.TypePrefix, node = typePrefixNode, string = context.nodeAsString(node), term = termFromTypePrefixNode(typePrefixNode, context), type = typeFromTypePrefixNode(typePrefixNode, context), typePrefix = new TypePrefix(string, node, term, type);
    return typePrefix;
}
function equivalenceFromEquivalenceNode(equivalenceNode, context) {
    var Equivalence = _elements.default.Equivalence, node = equivalenceNode, terms = termsFromEquivalenceNode(equivalenceNode, context), equivalenceString = (0, _string.equivalenceStringFromTerms)(terms), string = equivalenceString, equivalence = new Equivalence(context, string, node, terms);
    return equivalence;
}
function metavariableFromMetavariableNode(metavariableNode, context) {
    var Metavariable = _elements.default.Metavariable, node = metavariableNode, string = context.nodeAsString(node), metavariableName = metavariableNode.getMetavariableName(), name = metavariableName, type = null, metaType = null, metavariable = new Metavariable(string, node, name, type, metaType);
    return metavariable;
}
function subDerivationFromSubDerivationNode(subDerivationNode, context) {
    var SubDerivation = _elements.default.SubDerivation, node = subDerivationNode, string = null, stepsOrSubproofs = stepsOrSubproofsFromSubDerivationNode(subDerivationNode, context), subDerivation = new SubDerivation(string, node, stepsOrSubproofs);
    return subDerivation;
}
function typeAssertionFromTypeAssertionNode(typeAssertionNode, context) {
    var TypeAssertion = _elements.default.TypeAssertion, node = typeAssertionNode, string = context.nodeAsString(node), term = termFromTypeAssertionNode(typeAssertionNode, context), type = typeFromTypeAssertionNode(typeAssertionNode, context), typeAssertion = new TypeAssertion(string, node, term, type);
    return typeAssertion;
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
    var DefinedAssertion = _elements.default.DefinedAssertion, node = definedAssertionNode, string = context.nodeAsString(node), negated = definedAssertionNode.isNegated(), term = termFromDefinedAssertionNode(definedAssertionNode, context), frame = frameFromDefinedAssertionNode(definedAssertionNode, context), definedAssertion = new DefinedAssertion(string, node, term, frame, negated);
    return definedAssertion;
}
function propertyRelationFromPropertyRelationNode(propertyRelationNode, context) {
    var PropertyRelation = _elements.default.PropertyRelation, node = propertyRelationNode, string = context.nodeAsString(node), property = propertyFromPropertyRelationNode(propertyRelationNode, context), term = termFromPropertyRelationNode(propertyRelationNode, context), propertyRelation = new PropertyRelation(string, node, property, term);
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
    var PropertyAssertion = _elements.default.PropertyAssertion, node = propertyAssertionNode, string = context.nodeAsString(node), term = termFromPropertyAssertionNode(propertyAssertionNode, context), propertyRelation = propertyRelationFromPropertyAssertionNode(propertyAssertionNode, context), propertyAssertion = new PropertyAssertion(string, node, term, propertyRelation);
    return propertyAssertion;
}
function subproofAssertionFromSubproofAssertionNode(subproofAssertionNode, context) {
    var SubproofAssertion = _elements.default.SubproofAssertion, node = subproofAssertionNode, string = context.nodeAsString(node), statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context), subproofAssertion = new SubproofAssertion(string, node, statements);
    return subproofAssertion;
}
function containedAssertionFromContainedAssertionNode(containedAssertionNode, context) {
    var ContainedAssertion = _elements.default.ContainedAssertion, node = containedAssertionNode, string = context.nodeAsString(node), negated = containedAssertionNode.isNegated(), term = termFromContainedAssertionNode(containedAssertionNode, context), frame = frameFromContainedAssertionNode(containedAssertionNode, context), statement = statementFromContainedAssertionNode(containedAssertionNode, context), containedAssertion = new ContainedAssertion(string, node, term, frame, negated, statement);
    return containedAssertion;
}
function satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    var SatisfiesAssertion = _elements.default.SatisfiesAssertion, node = satisfiesAssertionNode, string = context.nodeAsString(node), signature = signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context), reference = referenceFromSatisfiesAssertionNode(satisfiesAssertionNode, context), satisfiesAssertion = new SatisfiesAssertion(string, node, signature, reference);
    return satisfiesAssertion;
}
function variableDeclarationFromVariableDeclarationNode(variableDeclarationNode, context) {
    var VariableDeclaration = _elements.default.VariableDeclaration, node = variableDeclarationNode, string = context.nodeAsString(node), varialbe = variableFromVariableNode(variableDeclarationNode, context), variableDeclaration = new VariableDeclaration(context, string, node, varialbe);
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
    var StatementSubstitution = _elements.default.StatementSubstitution, node = statementSubstitutionNode, string = context.nodeAsString(node), resolved = true, statement = statementFromStatementSubstitutionNode(statementSubstitutionNode, context), metavariable = metavariableFromStatementSubstitutionNode(statementSubstitutionNode, context), statementSubstitution = new StatementSubstitution(context, string, node, resolved, statement, metavariable, substitution);
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
    var MetavariableDeclaration = _elements.default.MetavariableDeclaration, node = metavariableDeclarationNode, string = context.nodeAsString(node), metavarialbe = metavariableFromMetavariableNode(metavariableDeclarationNode, context), metavariableDeclaration = new MetavariableDeclaration(context, string, node, metavarialbe);
    return metavariableDeclaration;
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
function derivationFromProofNode(proofNode, context) {
    var derivation = null;
    var derivationNode = proofNode.getDerivationNode();
    if (derivationNode !== null) {
        derivation = derivationFromDerivationNode(derivationNode, context);
    }
    return derivation;
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
function stepFromStepOrSubproofNode(stepOrSubproofNode, context) {
    var step = null;
    var stepOrSubproofNodeStepNode = stepOrSubproofNode.isStepNode();
    if (stepOrSubproofNodeStepNode) {
        var stepNode = stepOrSubproofNode; ///
        step = stepFromStepNode(stepNode, context);
    }
    return step;
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
    var referenceNode = assumptionNode.getReferenceNode();
    if (referenceNode !== null) {
        reference = referenceFromReferenceNode(referenceNode, context);
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
    var metavariableNode = referenceNode.getTermNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavaraibleNode(metavariableNode, context);
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
function frameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    var frame = null;
    var frameNode = frameSubstitutionNode.getFrameNode();
    if (frameNode !== null) {
        frame = frameFromFrameNode(frameNode, context);
    }
    return frame;
}
function satisfiesAssertionFromStepNode(stepNode, context) {
    var satisfiesAssertion = null;
    var satisfiesAssertionNode = stepNode.getSatisfiedAssertionNode();
    if (satisfiesAssertionNode !== null) {
        satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
    }
    return satisfiesAssertion;
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
function definedAssertionFromStatementNode(statementNode, context) {
    var definedAssertion = null;
    var definedAssertionNode = statementNode.getDefinedAssertionNode();
    if (definedAssertionNode !== null) {
        definedAssertion = definedAssertionFromDefinedAssertionNode(definedAssertionNode, context);
    }
    return definedAssertion;
}
function typeFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    var type = null;
    var typeNode = simpleTypeDeclarationNode.getTypeNode();
    if (typeNode !== null) {
        type = typeFromTypeNode(typeNode, context);
    }
    return type;
}
function termSubstitutionFromStatementNode(statementNode, context) {
    var termSubstitution = null;
    var termSubstitutionNode = statementNode.getTermSubstitutionNode();
    if (termSubstitutionNode !== null) {
        termSubstitution = termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context);
    }
    return termSubstitution;
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
function typeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var type = null;
    var typeNode = complexTypeDeclarationNode.getTypeNode();
    if (typeNode !== null) {
        type = typeFromTypeNode(typeNode, context);
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
function statementFromContainedAssertionNode(containedAssertionNode, context) {
    var statement = null;
    var statementNode = containedAssertionNode.getStatementNode();
    if (statementNode !== null) {
        statement = statementFromStatementNode(statementNode, context);
    }
    return statement;
}
function satisfiesAssertionFromStatementNode(statementNode, context) {
    var satisfiesAssertion = null;
    var satisfiesAssertionNode = statementNode.getSatisfiedAssertionNode();
    if (satisfiesAssertionNode !== null) {
        satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
    }
    return satisfiesAssertion;
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
    var referenceNode = satisfiesAssertionNode.getReferenceNode();
    if (referenceNode !== null) {
        reference = referenceFromReferenceNode(referenceNode, context);
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
function proofFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context) {
    var proof = null;
    var proofNode = axiomLemmaTheoremConjectureNode.getProofNode();
    if (proofNode !== null) {
        proof = proofFromProofNode(proofNode, context);
    }
    return proof;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBiYXNlVHlwZSB9IGZyb20gXCIuLi9lbGVtZW50L3R5cGVcIjtcbmltcG9ydCB7IGVxdWl2YWxlbmNlU3RyaW5nRnJvbVRlcm1zLFxuICAgICAgICAgc3VicHJvb2ZTdHJpbmdGcm9tU3VicHJvb2ZOb2RlLFxuICAgICAgICAgc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIHR5cGUgPSBiYXNlVHlwZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IHR5cGVOb2RlLmdldFR5cGVQcmVmaXhOYW1lKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gbm9taW5hbFR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IHR5cGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IG51bGwsXG4gICAgICAgICAgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBudWxsO1xuXG4gICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbm9kZSwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RlcE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcCA9IG5ldyBTdGVwKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbik7XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXJvbUF4aW9tTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMZW1tYSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUgPSBsZW1tYU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICBub2RlID0gbGVtbWFOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgbGVtbWEgPSBuZXcgTGVtbWEoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gbGVtbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzLFxuICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucyk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb29mTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIGRlcml2YXRpb24gPSBkZXJpdmF0aW9uRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9vZiA9IG5ldyBQcm9vZihzdHJpbmcsIG5vZGUsIGRlcml2YXRpb24pO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tRnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBeGlvbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUgPSBheGlvbU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICBub2RlID0gYXhpb21Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgYXhpb20gPSBuZXcgQXhpb20oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gYXhpb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtcm9tQXhpb21Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGhlb3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUgPSB0aGVvcmVtTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIG5vZGUgPSB0aGVvcmVtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIHRoZW9yZW0gPSBuZXcgVGhlb3JlbShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiB0aGVvcmVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXJvbUF4aW9tTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlID0gY29uamVjdHVyZU5vZGUsICAvLy9cbiAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICBub2RlID0gY29uamVjdHVyZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBjb25qZWN0dXJlID0gbmV3IENvbmplY3R1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICByZXR1cm4gY29uamVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXR5RnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcXVhbGl0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcXVhbGl0eU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgIGxlZnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShzdHJpbmcsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhVHlwZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhVHlwZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTm9kZS5nZXRNZXRhVHlwZU5hbWUoKSxcbiAgICAgICAgbmFtZSA9IG1ldGFUeXBlTmFtZSwgIC8vL1xuICAgICAgICBtZXRhVHlwZSA9IG5ldyBNZXRhVHlwZShzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOb2RlLmdldFByb3BlcnR5TmFtZSgpLFxuICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBudWxsLFxuICAgICAgICBuYW1lID0gcHJvcGVydHlOYW1lLCAgLy8vXG4gICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KHN0cmluZywgbm9kZSwgbmFtZSwgbm9taW5hbFR5cGVOYW1lKTtcblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tVmFyaWFsYmVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zID0gW10sXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgdHlwZSwgaWRlbnRpZmllciwgcHJvcGVydHlSZWxhdGlvbnMpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJQcm9vZiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdWJwcm9vZk5vZGUsIC8vL1xuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YkRlcml2YXRpb24gPSBzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdWJwcm9vZlN0cmluZywgIC8vL1xuICAgICAgICBzdWJwcm9vZiA9IG5ldyBTdWJQcm9vZihzdHJpbmcsIG5vZGUsIHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbik7XG5cbiAgcmV0dXJuIHN1YnByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRFcXVhbGl0eU5vZGUoKTtcblxuICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpO1xuXG4gICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcbiAgfVxuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVkdWN0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVkdWN0aW9uID0gbmV3IERlZHVjdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaWduYXR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2lnbmF0dXJlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpbm9Gcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lub05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBlbGVtZW50cyxcbiAgICBub2RlID0gY29uY2x1c2lub05vZGUsIC8vL1xuICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW5vTm9kZSwgY29udGV4dCksXG4gICAgY29uY2x1c2lubyA9IG5ldyBDb25jbHVzaW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29uY2x1c2lubztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBc3N1bXB0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlKTtcblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZXJpdmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlcml2YXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVyaXZhdGlvbiA9IG5ldyBEZXJpdmF0aW9uKHN0cmluZywgbm9kZSwgc3RlcHNPclN1YnByb29mcyk7XG5cbiAgcmV0dXJuIGRlcml2YXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZVByZWZpeCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0eXBlUHJlZml4Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZVByZWZpeCA9IG5ldyBUeXBlUHJlZml4KHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXF1aXZhbGVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXF1aXZhbGVuY2VOb2RlLCAvLy9cbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXF1aXZhbGVuY2VTdHJpbmcgPSBlcXVpdmFsZW5jZVN0cmluZ0Zyb21UZXJtcyh0ZXJtcyksXG4gICAgICAgIHN0cmluZyA9IGVxdWl2YWxlbmNlU3RyaW5nLCAvLy9cbiAgICAgICAgZXF1aXZhbGVuY2UgPSBuZXcgRXF1aXZhbGVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBtZXRhVHlwZSA9IG51bGwsXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdWJEZXJpdmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YkRlcml2YXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJEZXJpdmF0aW9uID0gbmV3IFN1YkRlcml2YXRpb24oc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gc3ViRGVyaXZhdGlvbjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZUFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGVBc3NlcnRpb24gPSBuZXcgVHlwZUFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpO1xuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcCA9IHN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXBPclN1YnByb29mID0gKHN0ZXAgfHwgc3VicHJvb2YpO1xuXG4gIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeGVkRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVmaXhlZCA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcmVmaXhlZCgpO1xuXG4gIHJldHVybiBwcmVmaXhlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeGVkRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZWZpeGVkID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcmVmaXhlZCgpO1xuXG4gIHJldHVybiBwcmVmaXhlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWZpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBuZXcgRGVmaW5lZEFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKTtcblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eVJlbGF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gbmV3IFByb3BlcnR5UmVsYXRpb24oc3RyaW5nLCBub2RlLCBwcm9wZXJ0eSwgdGVybSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdmFyaWFibGUpO1xuXG4gIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBuZXcgUHJvcGVydHlBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcblxuICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VicHJvb2ZBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudHMpO1xuXG4gIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb250YWluZWRBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IG5ldyBDb250YWluZWRBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNhdGlzZmllc0Fzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IG5ldyBTYXRpc2ZpZXNBc3NlcnRpb24oc3RyaW5nLCBub2RlLCBzaWduYXR1cmUsIHJlZmVyZW5jZSk7XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWxiZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgVmFyaWFibGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhbGJlKTtcblxuICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhEZWNsYXJhdGlvbkZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4RGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLCAgLy8vXG4gICAgICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbiA9IG5ldyBUeXBlUHJlZml4RGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlUHJlZml4KTtcblxuICByZXR1cm4gdHlwZVByZWZpeERlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbWJpbmF0b3JEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb21iaW5hdG9yRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBjb21iaW5hdG9yKTtcblxuICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNpbXBsZVR5cGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByZWZpeGVkID0gcHJlZml4ZWRGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uID0gbmV3IFNpbXBsZVR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHByZWZpeGVkKTtcblxuICByZXR1cm4gc2ltcGxlVHlwZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb250ZXh0ID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHN1YnN0aXR1dGlvbiA9IG51bGw7XG4gIH1cblxuICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZXNvbHZlZCA9IHRydWUsXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlc29sdmVkLCBzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG5ldyBSZWZlcmVuY2VTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uID0gbmV3IENvbnN0cnVjdG9yRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBjb25zdHJ1Y3Rvcik7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVmaXhlZCA9IHByZWZpeGVkRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IG5ldyBDb21wbGV4VHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgcHJlZml4ZWQpO1xuXG4gIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhbGJlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFsYmUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RlcE5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBzdGVwTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmF0aW9uRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlcml2YXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGRlcml2YXRpb25Ob2RlID0gcHJvb2ZOb2RlLmdldERlcml2YXRpb25Ob2RlKCk7XG5cbiAgaWYgKGRlcml2YXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZGVyaXZhdGlvbiA9IGRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlcml2YXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXAgPSBudWxsO1xuXG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlID0gc3RlcE9yU3VicHJvb2ZOb2RlLmlzU3RlcE5vZGUoKTtcblxuICBpZiAoc3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUpIHtcbiAgICBjb25zdCBzdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZTsgIC8vL1xuXG4gICAgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyRnJvbVZhcmlhbGJlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBkZWR1Y3Rpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW5vTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29uY2x1c2lub05vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldFJlZmVyZW5jZU5vZGUoKTtcblxuICBpZiAocmVmZXJlbmNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0QXNzdW1wdGlvbk5vZGUoKTtcblxuICBpZiAoYXNzdW1wdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3ViRGVydmlhdGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc3ViRGVyaXZhdGlvbk5vZGUgPSBzdWJwcm9vZk5vZGUuZ2V0U3ViRGVyaXZhdGlvbk5vZGUoKTtcblxuICBpZiAoc3ViRGVyaXZhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJEZXJ2aWF0aW9uID0gc3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3ViRGVydmlhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVBc3NlcnRpbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUeXBlQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJhaWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RlcE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN1YnByb29mT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mID0gbnVsbDtcblxuICBjb25zdCBzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlID0gc3VicHJvb2ZPclN1YnByb29mTm9kZS5pc1N1YnByb29mTm9kZSgpO1xuXG4gIGlmIChzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZPclN1YnByb29mTm9kZTsgIC8vL1xuXG4gICAgc3VicHJvb2YgPSBzdWJwcm9vZkZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dClcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eSA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAocHJvcGVydHlOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZmluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGRlZmluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChkZWZpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE9yU3VicHJvb2ZOb2RlcyA9IGRlcml2YXRpb25Ob2RlLmdldFN0ZXBPclN1YnByb29mTm9kZXMoKSxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBPclN1YnByb29mTm9kZXMubWFwKChzdGVwT3JTdWJwcm9vZk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwT3JTdWJwcm9vZjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5QXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHswXG4gIGxldCBjb250YWluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IGNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvcGVydHkgPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLmdldFByb3BlcnR5Tm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eU5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2lnbmF0dXJlID0gbnVsbDtcblxuICBjb25zdCBzaWduYXR1cmVOb2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCk7XG5cbiAgaWYgKHNpZ25hdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldFJlZmVyZW5jZU5vZGUoKTtcblxuICBpZiAocmVmZXJlbmNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZXMgPSBzdWJEZXJpdmF0aW9uTm9kZS5nZXRTdGVwT3JTdWJwcm9vZk5vZGVzKCksXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwT3JTdWJwcm9vZk5vZGVzLm1hcCgoc3RlcE9yU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBzdGVwc09yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwc09yU3VicHJvb2ZzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChyZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVQcmVmaXggPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVQcmVmaXhOb2RlID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZS5nZXRUeXBlUHJlZml4Tm9kZSgpO1xuXG4gIGlmICh0eXBlUHJlZml4Tm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbWJpbmF0b3IgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZWxlbWVudHMsXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihzdGF0ZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhVHlwZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YVR5cGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldE1ldGFUeXBlTm9kZSgpO1xuXG4gIGlmIChtZXRhVHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eVJlbGF0aW9uID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZS5nZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eVJlbGF0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbnN0cnVjdG9yID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcih0ZXJtKTtcbiAgfVxuXG4gIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb29mID0gbnVsbDtcblxuICBjb25zdCBwcm9vZk5vZGUgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLmdldFByb29mTm9kZSgpO1xuXG4gIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBkZWR1Y3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0IGRlZHVjdGlvbk5vZGUgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLmdldERlZHVjdGlvbk5vZGUoKTtcblxuICBpZiAoZGVkdWN0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpO1xuXG4gIGlmIChzaWduYXR1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCB0ZXJtcyA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzKHN0YXRlbWVudE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21TdXBlclR5cGVOb2RlcyhzdXBlclR5cGVOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVzID0gc3VwZXJUeXBlTm9kZXMubWFwKChzdXBlclR5cGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBzdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gdHlwZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSksXG4gICAgICAgIHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IHN1cGVyVHlwZSA9IGJhc2VUeXBlOyAvLy9cblxuICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbk5vZGVzLm1hcCgoYXNzdW1wdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbkZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0aWVzID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLm1hcCgocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gc2lnbmF0dXJlTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlcyA9IGZyYW1lTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMoYXNzdW1wdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21FcXVpdmFsZW5jZU5vZGUoZXF1aXZhbGVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IGVxdWl2YWxlbmNlTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gc3VicHJvb2ZOb2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlcygpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyhzdGF0ZW1lbnROb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcygpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMocHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwZXJUeXBlTm9kZXMgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRTdXBlclR5cGVOb2RlcygpLFxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21TdXBlclR5cGVOb2RlcyhzdXBlclR5cGVOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25Ob2RlcyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gX3R5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuIl0sIm5hbWVzIjpbIl90eXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsImFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMiLCJhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUiLCJheGlvbUZyb21BeGlvbU5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb25jbHVzaW5vRnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uamVjdHVyZXJvbUF4aW9tTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJkZWR1Y3Rpb25Gcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSIsImRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUiLCJkZXJpdmF0aW9uRnJvbVByb29mTm9kZSIsImVxdWFsaXR5RnJvbUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5RnJvbVN0YXRlbWVudE5vZGUiLCJlcXVpdmFsZW5jZUZyb21FcXVpdmFsZW5jZU5vZGUiLCJmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21GcmFtZU5vZGUiLCJmcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUiLCJsYWJlbHNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSIsImxhYmVsc0Zyb21MYWJlbE5vZGVzIiwibGVtbWFyb21BeGlvbU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwicHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJvb2ZGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSIsInByb29mRnJvbVByb29mTm9kZSIsInByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0aWVzRnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbVN0ZXBOb2RlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlIiwic2lnbmF0dXJlRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUiLCJzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudEZyb21TdGVwTm9kZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyIsInN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcHNPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUiLCJzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN1YnByb29mRnJvbVN1YnByb29mTm9kZSIsInN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdXBlclR5cGVzRnJvbVN1cGVyVHlwZU5vZGVzIiwic3VwcG9zaXRpb25zRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlIiwic3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMiLCJ0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwidGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1zRnJvbUVxdWl2YWxlbmNlTm9kZSIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJ0aGVvcmVtcm9tQXhpb21Ob2RlIiwidHlwZUFzc2VydGluRnJvbVN0YXRlbWVudE5vZGUiLCJ0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbVR5cGVOb2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiYmFzZVR5cGUiLCJUeXBlIiwiZWxlbWVudHMiLCJ0eXBlTmFtZSIsImdldFR5cGVOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJnZXRUeXBlUHJlZml4TmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwicHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwic3RlcE5vZGUiLCJTdGVwIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RlcCIsImxlbW1hTm9kZSIsIkxlbW1hIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSIsInByb29mIiwibGFiZWxzIiwiZGVkdWN0aW9uIiwic3VwcG9zaXRpb25zIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsInN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJsZW1tYSIsImZyYW1lTm9kZSIsIkZyYW1lIiwiYXNzdW1wdGlvbnMiLCJmcmFtZSIsInByb29mTm9kZSIsIlByb29mIiwiZGVyaXZhdGlvbiIsImF4aW9tTm9kZSIsIkF4aW9tIiwiYXhpb20iLCJ0aGVvcmVtTm9kZSIsIlRoZW9yZW0iLCJ0aGVvcmVtIiwiY29uamVjdHVyZU5vZGUiLCJDb25qZWN0dXJlIiwiY29uamVjdHVyZSIsImVxdWFsaXR5Tm9kZSIsIkVxdWFsaXR5IiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImVxdWFsaXR5IiwibWV0YVR5cGVOb2RlIiwiTWV0YVR5cGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsInByb3BlcnR5Tm9kZSIsIlByb3BlcnR5IiwicHJvcGVydHlOYW1lIiwiZ2V0UHJvcGVydHlOYW1lIiwicHJvcGVydHkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsImlkZW50aWZpZXIiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsInZhcmlhYmxlIiwic3VicHJvb2ZOb2RlIiwiU3ViUHJvb2YiLCJzdWJEZXJpdmF0aW9uIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZlN0cmluZ0Zyb21TdWJwcm9vZk5vZGUiLCJzdWJwcm9vZiIsInN0YXRlbWVudE5vZGUiLCJnZXRFcXVhbGl0eU5vZGUiLCJsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJyaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwiZGVkdWN0aW9uTm9kZSIsIkRlZHVjdGlvbiIsIlN0YXRlbWVudCIsInNpZ25hdHVyZU5vZGUiLCJTaWduYXR1cmUiLCJ0ZXJtcyIsInJlZmVyZW5jZU5vZGUiLCJSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGUiLCJjb25jbHVzaW5vTm9kZSIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW5vIiwiYXNzdW1wdGlvbk5vZGUiLCJBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsImRlcml2YXRpb25Ob2RlIiwiRGVyaXZhdGlvbiIsInN0ZXBzT3JTdWJwcm9vZnMiLCJ0eXBlUHJlZml4Tm9kZSIsIlR5cGVQcmVmaXgiLCJ0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlIiwidHlwZUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVQcmVmaXgiLCJlcXVpdmFsZW5jZU5vZGUiLCJFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlU3RyaW5nIiwiZXF1aXZhbGVuY2VTdHJpbmdGcm9tVGVybXMiLCJlcXVpdmFsZW5jZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN1YkRlcml2YXRpb25Ob2RlIiwiU3ViRGVyaXZhdGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwiVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJzdGVwT3JTdWJwcm9vZk5vZGUiLCJzdGVwT3JTdWJwcm9vZiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVmaXhlZCIsImlzUHJlZml4ZWQiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiRGVmaW5lZEFzc2VydGlvbiIsIm5lZ2F0ZWQiLCJpc05lZ2F0ZWQiLCJkZWZpbmVkQXNzZXJ0aW9uIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiVGVybVN1YnN0aXR1dGlvbiIsInRlcm1TdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIlN1YnByb29mQXNzZXJ0aW9uIiwic3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIkNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWxiZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3IiLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iLCJTaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJzaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uIiwidW5kZWZpbmVkIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwicmVzb2x2ZWQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWxiZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXREZXJpdmF0aW9uTm9kZSIsImdldFRlcm1Ob2RlIiwiZ2V0VHlwZU5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSIsImlzU3RlcE5vZGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJqdWRnZW1lbnROb2RlIiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJzdWJEZXJ2aWF0aW9uIiwiZ2V0U3ViRGVyaXZhdGlvbk5vZGUiLCJnZXRUeXBlQXNzZXJ0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyYWlibGVOb2RlIiwiZ2V0RnJhbWVOb2RlIiwiZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mT3JTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlU3VicHJvb2ZOb2RlIiwiaXNTdWJwcm9vZk5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsInN0ZXBPclN1YnByb29mTm9kZXMiLCJnZXRTdGVwT3JTdWJwcm9vZk5vZGVzIiwibWFwIiwiZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiZ2V0UHJvcGVydHlOb2RlIiwiZ2V0U2lnbmF0dXJlTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsImdldFR5cGVQcmVmaXhOb2RlIiwiQ29tYmluYXRvciIsImdldE1ldGFUeXBlTm9kZSIsImdldFByb3BlcnR5UmVsYXRpb25Ob2RlIiwiQ29uc3RydWN0b3IiLCJnZXRQcm9vZk5vZGUiLCJnZXREZWR1Y3Rpb25Ob2RlIiwidGVybU5vZGVzIiwibGFiZWxOb2RlcyIsImxhYmVsTm9kZSIsImxhYmVsIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwic3RhdGVtZW50Tm9kZXMiLCJzdXBlclR5cGVOb2RlcyIsInN1cGVyVHlwZU5vZGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwicHVzaCIsImFzc3VtcHRpb25Ob2RlcyIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uRnJvbVN1cHBvc2l0aW9uTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsImdldEFzc3VtcHRpb25Ob2RlcyIsImdldFRlcm1Ob2RlcyIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsImdldFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsImdldFN1cGVyVHlwZU5vZGVzIiwiZ2V0TGFiZWxOb2RlcyIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTAyQ2dCQTtlQUFBQTs7UUFqbUNBQztlQUFBQTs7UUFrYUFDO2VBQUFBOztRQStsQkFDO2VBQUFBOztRQXFDQUM7ZUFBQUE7O1FBcHRDQUM7ZUFBQUE7O1FBOFhBQztlQUFBQTs7UUFrb0JBQztlQUFBQTs7UUF0a0JBQztlQUFBQTs7UUF0UkFDO2VBQUFBOztRQXBJQUM7ZUFBQUE7O1FBZ1pBQztlQUFBQTs7UUF1bkJBQztlQUFBQTs7UUFydEJBQztlQUFBQTs7UUEraEJBQztlQUFBQTs7UUFxUEFDO2VBQUFB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