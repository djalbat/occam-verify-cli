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
var _node = /*#__PURE__*/ _interop_require_default(require("occam-parsers/lib/mixins/node"));
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
function suppositionsFromAxiomLemmaTheoremConjectureNode(axiomLemmaTheoremConjectureNode, context) {
    var suppositionNodes = axiomLemmaTheoremConjectureNode.getSuppositionNodes(), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context);
    return suppositions;
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
function _typeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    var type = null;
    var typeNode = metavariableDeclarationNode.getTypeNode();
    if (typeNode !== null) {
        var nominalTypeName = typeNode.getNominalTypeName();
        type = context.findTypeByNominalTypeName(nominalTypeName);
    }
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBiYXNlVHlwZSB9IGZyb20gXCIuLi9lbGVtZW50L3R5cGVcIjtcbmltcG9ydCB7IHN1YnByb29mU3RyaW5nRnJvbVN1YnByb29mTm9kZSwgc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgbm9kZSBmcm9tIFwib2NjYW0tcGFyc2Vycy9saWIvbWl4aW5zL25vZGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgdHlwZSA9IGJhc2VUeXBlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBub21pbmFsVHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gdHlwZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBub2RlLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGVwTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwID0gbmV3IFN0ZXAoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hcm9tQXhpb21Ob2RlKGxlbW1hTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExlbW1hIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSA9IGxlbW1hTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIG5vZGUgPSBsZW1tYU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBsZW1tYSA9IG5ldyBMZW1tYShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiBsZW1tYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHMsXG4gICAgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zKTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvb2YgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvb2ZOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgZGVyaXZhdGlvbiA9IGRlcml2YXRpb25Gcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb29mID0gbmV3IFByb29mKHN0cmluZywgbm9kZSwgZGVyaXZhdGlvbik7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21Gcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEF4aW9tIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSA9IGF4aW9tTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIG5vZGUgPSBheGlvbU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICBheGlvbSA9IG5ldyBBeGlvbShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiBheGlvbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1yb21BeGlvbU5vZGUodGhlb3JlbU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUaGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSA9IHRoZW9yZW1Ob2RlLCAgLy8vXG4gICAgICAgIHByb29mID0gcHJvb2ZGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgbm9kZSA9IHRoZW9yZW1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgdGhlb3JlbSA9IG5ldyBUaGVvcmVtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgcmV0dXJuIHRoZW9yZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlcm9tQXhpb21Ob2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUgPSBjb25qZWN0dXJlTm9kZSwgIC8vL1xuICAgICAgICBwcm9vZiA9IHByb29mRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgIG5vZGUgPSBjb25qZWN0dXJlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgIGNvbmplY3R1cmUgPSBuZXcgQ29uamVjdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gIHJldHVybiBjb25qZWN0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdHlGcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVxdWFsaXR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KHN0cmluZywgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgcmV0dXJuIGVxdWFsaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGFUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGFUeXBlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICBuYW1lID0gbWV0YVR5cGVOYW1lLCAgLy8vXG4gICAgICAgIG1ldGFUeXBlID0gbmV3IE1ldGFUeXBlKHN0cmluZywgbm9kZSwgbmFtZSk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb3BlcnR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5vZGUuZ2V0UHJvcGVydHlOYW1lKCksXG4gICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBwcm9wZXJ0eU5hbWUsICAvLy9cbiAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoc3RyaW5nLCBub2RlLCBuYW1lLCBub21pbmFsVHlwZU5hbWUpO1xuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YlByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mTm9kZSwgLy8vXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2ZTdHJpbmdGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN1YnByb29mU3RyaW5nLCAgLy8vXG4gICAgICAgIHN1YnByb29mID0gbmV3IFN1YlByb29mKHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKTtcblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICBjb25zdCBlcXVhbGl0eU5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEVxdWFsaXR5Tm9kZSgpO1xuXG4gIGlmIChlcXVhbGl0eU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBub2RlID0gZXF1YWxpdHlOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG5cbiAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuICB9XG5cbiAgcmV0dXJuIGVxdWFsaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZWR1Y3Rpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWR1Y3Rpb24gPSBuZXcgRGVkdWN0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzaWduYXR1cmVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShzdHJpbmcsIG5vZGUsIHRlcm1zKTtcblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lub0Zyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW5vTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGVsZW1lbnRzLFxuICAgIG5vZGUgPSBjb25jbHVzaW5vTm9kZSwgLy8vXG4gICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpbm9Ob2RlLCBjb250ZXh0KSxcbiAgICBjb25jbHVzaW5vID0gbmV3IENvbmNsdXNpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBjb25jbHVzaW5vO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IG5ldyBBc3N1bXB0aW9uKHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZhdGlvbkZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlcml2YXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZGVyaXZhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZXJpdmF0aW9uID0gbmV3IERlcml2YXRpb24oc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICByZXR1cm4gZGVyaXZhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlUHJlZml4ID0gbmV3IFR5cGVQcmVmaXgoc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgbWV0YVR5cGUgPSBudWxsLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSwgbWV0YVR5cGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3ViRGVyaXZhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdWJEZXJpdmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3ViRGVyaXZhdGlvbiA9IG5ldyBTdWJEZXJpdmF0aW9uKHN0cmluZywgbm9kZSwgc3RlcHNPclN1YnByb29mcyk7XG5cbiAgcmV0dXJuIHN1YkRlcml2YXRpb247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlQXNzZXJ0aW9uID0gbmV3IFR5cGVBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzT3JTdWJwcm9vZkZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXAgPSBzdGVwRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdWJwcm9vZiA9IHN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwT3JTdWJwcm9vZiA9IChzdGVwIHx8IHN1YnByb29mKTtcblxuICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJlZml4ZWQgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJlZml4ZWQoKTtcblxuICByZXR1cm4gcHJlZml4ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlZEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVmaXhlZCA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJlZml4ZWQoKTtcblxuICByZXR1cm4gcHJlZml4ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVmaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlSZWxhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IG5ldyBQcm9wZXJ0eVJlbGF0aW9uKHN0cmluZywgbm9kZSwgcHJvcGVydHksIHRlcm0pO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHZhcmlhYmxlKTtcblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBmcmFtZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gbmV3IFByb3BlcnR5QXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29udGFpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBuZXcgQ29udGFpbmVkQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTYXRpc2ZpZXNBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBuZXcgU2F0aXNmaWVzQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgc2lnbmF0dXJlLCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFsYmUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IFZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWxiZSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZVByZWZpeERlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb24gPSBuZXcgVHlwZVByZWZpeERlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZVByZWZpeCk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21iaW5hdG9yRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29tYmluYXRvckRlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29tYmluYXRvcik7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVmaXhlZCA9IHByZWZpeGVkRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IG5ldyBTaW1wbGVUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcmVmaXhlZCk7XG5cbiAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICBzdWJzdGl0dXRpb24gPSBudWxsO1xuICB9XG5cbiAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlLFxuICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZXNvbHZlZCwgc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBuZXcgUmVmZXJlbmNlU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVmZXJlbmNlLCBtZXRhdmFyaWFibGUpO1xuXG4gIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29uc3RydWN0b3IpO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbXBsZXhUeXBlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJlZml4ZWQgPSBwcmVmaXhlZEZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBuZXcgQ29tcGxleFR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHByZWZpeGVkKTtcblxuICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWxiZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhbGJlKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0ZXBOb2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gc3RlcE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gIGlmIChyZWZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZhdGlvbkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBkZXJpdmF0aW9uID0gbnVsbDtcblxuICBjb25zdCBkZXJpdmF0aW9uTm9kZSA9IHByb29mTm9kZS5nZXREZXJpdmF0aW9uTm9kZSgpO1xuXG4gIGlmIChkZXJpdmF0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlcml2YXRpb24gPSBkZXJpdmF0aW9uRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZXJpdmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZS5nZXRUeXBlTm9kZSgpO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwT3JTdWJwcm9vZk5vZGUoc3RlcE9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwID0gbnVsbDtcblxuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVTdGVwTm9kZSA9IHN0ZXBPclN1YnByb29mTm9kZS5pc1N0ZXBOb2RlKCk7XG5cbiAgaWYgKHN0ZXBPclN1YnByb29mTm9kZVN0ZXBOb2RlKSB7XG4gICAgY29uc3Qgc3RlcE5vZGUgPSBzdGVwT3JTdWJwcm9vZk5vZGU7ICAvLy9cblxuICAgIHN0ZXAgPSBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllcjsgIC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gZGVkdWN0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lub05vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpbm9Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgYXNzdW1wdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEFzc3VtcHRpb25Ob2RlKCk7XG5cbiAgaWYgKGFzc3VtcHRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGFzc3VtcHRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJEZXJpdmF0aW9uRnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN1YkRlcnZpYXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHN1YkRlcml2YXRpb25Ob2RlID0gc3VicHJvb2ZOb2RlLmdldFN1YkRlcml2YXRpb25Ob2RlKCk7XG5cbiAgaWYgKHN1YkRlcml2YXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc3ViRGVydmlhdGlvbiA9IHN1YkRlcml2YXRpb25Gcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN1YkRlcnZpYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlQXNzZXJ0aW5Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VHlwZUFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZU5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyYWlibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0ZXBOb2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdWJwcm9vZk9yU3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZiA9IG51bGw7XG5cbiAgY29uc3Qgc3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSA9IHN1YnByb29mT3JTdWJwcm9vZk5vZGUuaXNTdWJwcm9vZk5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHN1YnByb29mT3JTdWJwcm9vZk5vZGU7ICAvLy9cblxuICAgIHN1YnByb29mID0gc3VicHJvb2ZGcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZyYW1lID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpXG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvcGVydHkgPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHByb3BlcnR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBkZWZpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBkZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc09yU3VicHJvb2ZzRnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBPclN1YnByb29mTm9kZXMgPSBkZXJpdmF0aW9uTm9kZS5nZXRTdGVwT3JTdWJwcm9vZk5vZGVzKCksXG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwT3JTdWJwcm9vZk5vZGVzLm1hcCgoc3RlcE9yU3VicHJvb2ZOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBzdGVwc09yU3VicHJvb2ZGcm9tU3RlcE9yU3VicHJvb2ZOb2RlKHN0ZXBPclN1YnByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcE9yU3VicHJvb2Y7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwc09yU3VicHJvb2ZzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eUFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAocHJvcGVydHlBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7MFxuICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb250YWluZWRBc3NlcnRpb24gPSBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5ID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZS5nZXRQcm9wZXJ0eU5vZGUoKTtcblxuICBpZiAocHJvcGVydHlOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpO1xuXG4gIGlmIChzaWduYXR1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNPclN1YnByb29mc0Zyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwT3JTdWJwcm9vZk5vZGVzID0gc3ViRGVyaXZhdGlvbk5vZGUuZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcygpLFxuICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gc3RlcE9yU3VicHJvb2ZOb2Rlcy5tYXAoKHN0ZXBPclN1YnByb29mTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mID0gc3RlcHNPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZShzdGVwT3JTdWJwcm9vZk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXBPclN1YnByb29mO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHNPclN1YnByb29mcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldFJlZmVyZW5jZU5vZGUoKTtcblxuICBpZiAocmVmZXJlbmNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlUHJlZml4ID0gbnVsbDtcblxuICBjb25zdCB0eXBlUHJlZml4Tm9kZSA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZVByZWZpeE5vZGUoKTtcblxuICBpZiAodHlwZVByZWZpeE5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZVByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb21iaW5hdG9yID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3Ioc3RhdGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YVR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGFUeXBlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhVHlwZU5vZGUoKTtcblxuICBpZiAobWV0YVR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvcGVydHlSZWxhdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKTtcblxuICBpZiAocHJvcGVydHlSZWxhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb25zdHJ1Y3RvciA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3IodGVybSk7XG4gIH1cblxuICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgY29uc3QgcHJvb2ZOb2RlID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSwgY29udGV4dCkge1xuICBsZXQgZGVkdWN0aW9uID0gbnVsbDtcblxuICBjb25zdCBkZWR1Y3Rpb25Ob2RlID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCk7XG5cbiAgaWYgKGRlZHVjdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gIGNvbnN0IHNpZ25hdHVyZU5vZGUgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlLmdldFNpZ25hdHVyZU5vZGUoKTtcblxuICBpZiAoc2lnbmF0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25Ob2RlcyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHtcbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tU3RhdGVtZW50Tm9kZXMoc3RhdGVtZW50Tm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbVN1cGVyVHlwZU5vZGVzKHN1cGVyVHlwZU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cGVyVHlwZXMgPSBzdXBlclR5cGVOb2Rlcy5tYXAoKHN1cGVyVHlwZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB0eXBlTm9kZSA9IHN1cGVyVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSB0eXBlOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KSxcbiAgICAgICAgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3Qgc3VwZXJUeXBlID0gYmFzZVR5cGU7IC8vL1xuXG4gICAgc3VwZXJUeXBlcy5wdXNoKHN1cGVyVHlwZSk7XG4gIH1cblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2Rlcyhhc3N1bXB0aW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uTm9kZXMubWFwKChhc3N1bXB0aW9uTm9kZSkgPT4ge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uTm9kZXMubWFwKChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc0Zyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMocHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb3BlcnRpZXMgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMubWFwKChwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZXMgPSBzaWduYXR1cmVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUFzc3VtcHRpb25Ob2Rlcyhhc3N1bXB0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBzdWJwcm9vZk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGVzKCksXG4gICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbVN0YXRlbWVudE5vZGVzKHN0YXRlbWVudE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlcyhwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdXBlclR5cGVOb2RlcyA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFN1cGVyVHlwZU5vZGVzKCksXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbVN1cGVyVHlwZU5vZGVzKHN1cGVyVHlwZU5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21BeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVOb2RlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlcyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gX3R5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuIl0sIm5hbWVzIjpbIl90eXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsImFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uc0Zyb21Bc3N1bXB0aW9uTm9kZXMiLCJhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUiLCJheGlvbUZyb21BeGlvbU5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb25jbHVzaW5vRnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uamVjdHVyZXJvbUF4aW9tTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJkZWR1Y3Rpb25Gcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSIsImRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImRlcml2YXRpb25Gcm9tRGVyaXZhdGlvbk5vZGUiLCJkZXJpdmF0aW9uRnJvbVByb29mTm9kZSIsImVxdWFsaXR5RnJvbUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5RnJvbVN0YXRlbWVudE5vZGUiLCJmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiZnJhbWVGcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21GcmFtZU5vZGUiLCJmcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiaWRlbnRpZmllckZyb21WYXJpYWxiZU5vZGUiLCJsYWJlbHNGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSIsImxhYmVsc0Zyb21MYWJlbE5vZGVzIiwibGVtbWFyb21BeGlvbU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUiLCJtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwicHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJvb2ZGcm9tQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSIsInByb29mRnJvbVByb29mTm9kZSIsInByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0aWVzRnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbVN0ZXBOb2RlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0ZXBOb2RlIiwic2lnbmF0dXJlRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUiLCJzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudEZyb21EZWR1Y3Rpb25Ob2RlIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudEZyb21TdGVwTm9kZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50c0Zyb21TdGF0ZW1lbnROb2RlcyIsInN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBGcm9tU3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcHNPclN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN0ZXBzT3JTdWJwcm9vZnNGcm9tRGVyaXZhdGlvbk5vZGUiLCJzdGVwc09yU3VicHJvb2ZzRnJvbVN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvbkZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Gcm9tU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mRnJvbVN0ZXBPclN1YnByb29mTm9kZSIsInN1YnByb29mRnJvbVN1YnByb29mTm9kZSIsInN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdXBlclR5cGVzRnJvbVN1cGVyVHlwZU5vZGVzIiwic3VwcG9zaXRpb25zRnJvbUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZU5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VicHJvb2ZOb2RlIiwic3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMiLCJ0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwidGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiLCJ0ZXJtc0Zyb21UZXJtTm9kZXMiLCJ0aGVvcmVtcm9tQXhpb21Ob2RlIiwidHlwZUFzc2VydGluRnJvbVN0YXRlbWVudE5vZGUiLCJ0eXBlQXNzZXJ0aW9uRnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbVR5cGVOb2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhOb2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiYmFzZVR5cGUiLCJUeXBlIiwiZWxlbWVudHMiLCJ0eXBlTmFtZSIsImdldFR5cGVOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJnZXRUeXBlUHJlZml4TmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwicHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwic3RlcE5vZGUiLCJTdGVwIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RlcCIsImxlbW1hTm9kZSIsIkxlbW1hIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlTm9kZSIsInByb29mIiwibGFiZWxzIiwiZGVkdWN0aW9uIiwic3VwcG9zaXRpb25zIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsInN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJsZW1tYSIsImZyYW1lTm9kZSIsIkZyYW1lIiwiYXNzdW1wdGlvbnMiLCJmcmFtZSIsInByb29mTm9kZSIsIlByb29mIiwiZGVyaXZhdGlvbiIsImF4aW9tTm9kZSIsIkF4aW9tIiwiYXhpb20iLCJ0aGVvcmVtTm9kZSIsIlRoZW9yZW0iLCJ0aGVvcmVtIiwiY29uamVjdHVyZU5vZGUiLCJDb25qZWN0dXJlIiwiY29uamVjdHVyZSIsImVxdWFsaXR5Tm9kZSIsIkVxdWFsaXR5IiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImVxdWFsaXR5IiwibWV0YVR5cGVOb2RlIiwiTWV0YVR5cGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsInByb3BlcnR5Tm9kZSIsIlByb3BlcnR5IiwicHJvcGVydHlOYW1lIiwiZ2V0UHJvcGVydHlOYW1lIiwicHJvcGVydHkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsImlkZW50aWZpZXIiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsInZhcmlhYmxlIiwic3VicHJvb2ZOb2RlIiwiU3ViUHJvb2YiLCJzdWJEZXJpdmF0aW9uIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZlN0cmluZ0Zyb21TdWJwcm9vZk5vZGUiLCJzdWJwcm9vZiIsInN0YXRlbWVudE5vZGUiLCJnZXRFcXVhbGl0eU5vZGUiLCJsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJyaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwiZGVkdWN0aW9uTm9kZSIsIkRlZHVjdGlvbiIsIlN0YXRlbWVudCIsInNpZ25hdHVyZU5vZGUiLCJTaWduYXR1cmUiLCJ0ZXJtcyIsInJlZmVyZW5jZU5vZGUiLCJSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGUiLCJjb25jbHVzaW5vTm9kZSIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW5vIiwiYXNzdW1wdGlvbk5vZGUiLCJBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsImRlcml2YXRpb25Ob2RlIiwiRGVyaXZhdGlvbiIsInN0ZXBzT3JTdWJwcm9vZnMiLCJ0eXBlUHJlZml4Tm9kZSIsIlR5cGVQcmVmaXgiLCJ0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlIiwidHlwZUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVQcmVmaXgiLCJtZXRhdmFyaWFibGVOb2RlIiwiTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJzdWJEZXJpdmF0aW9uTm9kZSIsIlN1YkRlcml2YXRpb24iLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsIlR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uIiwic3RlcE9yU3VicHJvb2ZOb2RlIiwic3RlcE9yU3VicHJvb2YiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJlZml4ZWQiLCJpc1ByZWZpeGVkIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIkRlZmluZWRBc3NlcnRpb24iLCJuZWdhdGVkIiwiaXNOZWdhdGVkIiwiZGVmaW5lZEFzc2VydGlvbiIsInByb3BlcnR5UmVsYXRpb25Ob2RlIiwiUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsIlByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJTdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJDb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwidmFyaWFsYmUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsIlR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb21iaW5hdG9yRGVjbGFyYXRpb24iLCJjb21iaW5hdG9yIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwiU2ltcGxlVHlwZURlY2xhcmF0aW9uIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbiIsInVuZGVmaW5lZCIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInJlc29sdmVkIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFsYmUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsImdldFN0YXRlbWVudE5vZGUiLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0RGVyaXZhdGlvbk5vZGUiLCJnZXRUZXJtTm9kZSIsImdldFR5cGVOb2RlIiwic3RlcE9yU3VicHJvb2ZOb2RlU3RlcE5vZGUiLCJpc1N0ZXBOb2RlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwianVkZ2VtZW50Tm9kZSIsImdldEFzc3VtcHRpb25Ob2RlIiwic3ViRGVydmlhdGlvbiIsImdldFN1YkRlcml2YXRpb25Ob2RlIiwiZ2V0VHlwZUFzc2VydGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmFpYmxlTm9kZSIsImdldEZyYW1lTm9kZSIsImdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZk9yU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZPclN1YnByb29mTm9kZVN1YnByb29mTm9kZSIsImlzU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJzdGVwT3JTdWJwcm9vZk5vZGVzIiwiZ2V0U3RlcE9yU3VicHJvb2ZOb2RlcyIsIm1hcCIsImdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsImdldFByb3BlcnR5Tm9kZSIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRUeXBlUHJlZml4Tm9kZSIsIkNvbWJpbmF0b3IiLCJnZXRNZXRhVHlwZU5vZGUiLCJnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIkNvbnN0cnVjdG9yIiwiZ2V0UHJvb2ZOb2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwidGVybU5vZGVzIiwibGFiZWxOb2RlcyIsImxhYmVsTm9kZSIsImxhYmVsIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwic3RhdGVtZW50Tm9kZXMiLCJzdXBlclR5cGVOb2RlcyIsInN1cGVyVHlwZU5vZGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwicHVzaCIsImFzc3VtcHRpb25Ob2RlcyIsInN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25Gcm9tU3VwcG9zaXRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwiZ2V0QXNzdW1wdGlvbk5vZGVzIiwiZ2V0U3RhdGVtZW50Tm9kZXMiLCJnZXRQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJnZXRTdXBlclR5cGVOb2RlcyIsImdldExhYmVsTm9kZXMiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF1MUNnQkE7ZUFBQUE7O1FBL2tDQUM7ZUFBQUE7O1FBdVpBQztlQUFBQTs7UUFzbUJBQztlQUFBQTs7UUFxQ0FDO2VBQUFBOztRQWh0Q0FDO2VBQUFBOztRQW1YQUM7ZUFBQUE7O1FBa29CQUM7ZUFBQUE7O1FBdGtCQUM7ZUFB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