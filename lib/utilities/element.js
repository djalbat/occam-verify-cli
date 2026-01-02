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
    get assumptionsFromFrameNode () {
        return assumptionsFromFrameNode;
    },
    get bracketedCombinatorFromNothing () {
        return bracketedCombinatorFromNothing;
    },
    get bracketedConstructorFfromNothing () {
        return bracketedConstructorFfromNothing;
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
    get definedAssertionFromDefinedAssertionNode () {
        return definedAssertionFromDefinedAssertionNode;
    },
    get definedAssertionFromStatementNode () {
        return definedAssertionFromStatementNode;
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
    get metaTypeFromMetaTypeNode () {
        return metaTypeFromMetaTypeNode;
    },
    get metaTypeFromMetavariableDeclarationNode () {
        return metaTypeFromMetavariableDeclarationNode;
    },
    get metavariableDeclarationFromMetavariableDeclarationNode () {
        return metavariableDeclarationFromMetavariableDeclarationNode;
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
    get prefixedFromComplexTypeDeclarationNode () {
        return prefixedFromComplexTypeDeclarationNode;
    },
    get prefixedFromSimpleTypeDeclarationNode () {
        return prefixedFromSimpleTypeDeclarationNode;
    },
    get propertiesFromComplexTypeDeclarationNode () {
        return propertiesFromComplexTypeDeclarationNode;
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
    get referenceFromSatisfiesAssertionNode () {
        return referenceFromSatisfiesAssertionNode;
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
    get statementFromContainedAssertionNode () {
        return statementFromContainedAssertionNode;
    },
    get statementFromStatementNode () {
        return statementFromStatementNode;
    },
    get statementsFromSubproofAssertionNode () {
        return statementsFromSubproofAssertionNode;
    },
    get subproofAssertionFromStatementNode () {
        return subproofAssertionFromStatementNode;
    },
    get subproofAssertionFromSubproofAssertionNode () {
        return subproofAssertionFromSubproofAssertionNode;
    },
    get superTypesFromComplexTypeDeclarationNode () {
        return superTypesFromComplexTypeDeclarationNode;
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
    get termFromTypeAssertionNode () {
        return termFromTypeAssertionNode;
    },
    get termsFromSignatureNode () {
        return termsFromSignatureNode;
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
    }
});
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _type = require("../element/type");
var _instantiate = require("../process/instantiate");
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
function frameFromFrameNode(frameNode, context) {
    var Frame = _elements.default.Frame, node = frameNode, string = context.nodeAsString(node), assumptions = assumptionsFromFrameNode(frameNode, context), frame = new Frame(string, node, assumptions);
    return frame;
}
function metaTypeFromMetaTypeNode(metaTypeNode, context) {
    var MetaType = _elements.default.MetaType, node = metaTypeNode, string = context.nodeAsString(node), metaTypeName = metaTypeNode.getMetaTypeName(), name = metaTypeName, metaType = new MetaType(string, node, name);
    return metaType;
}
function propertyFromPropertyNode(propertyNode, context) {
    var Property = _elements.default.Property, node = propertyNode, string = context.nodeAsString(node), propertyName = propertyNode.getPropertyName(), nominalTypeName = null, name = propertyName, property = new Property(string, node, name, nominalTypeName);
    return property;
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
function assumptionFromAssumptionNode(assumptionNode, context) {
    var Assumption = _elements.default.Assumption, node = assumptionNode, string = context.nodeAsString(node), statement = statementFromAssumptionNode(assumptionNode, context), reference = referenceFromAssumptionNode(assumptionNode, context), assumption = new Assumption(string, node, statement, reference);
    return assumption;
}
function typePrefixFromTypePrefixNode(typePrefixNode, context) {
    var TypePrefix = _elements.default.TypePrefix, node = typePrefixNode, string = context.nodeAsString(node), term = termFromTypePrefixNode(typePrefixNode, context), type = typeFromTypePrefixNode(typePrefixNode, context), typePrefix = new TypePrefix(string, node, term, type);
    return typePrefix;
}
function metavariableFromMetavariableNode(metavariableNode, context) {
    var Metavariable = _elements.default.Metavariable, node = metavariableNode, string = context.nodeAsString(node), metavariableName = metavariableNode.getMetavariableName(), name = metavariableName, type = null, metaType = null, metavariable = new Metavariable(string, node, name, type, metaType);
    return metavariable;
}
function typeAssertionFromTypeAssertionNode(typeAssertionNode, context) {
    var TypeAssertion = _elements.default.TypeAssertion, node = typeAssertionNode, string = context.nodeAsString(node), term = termFromTypeAssertionNode(typeAssertionNode, context), type = typeFromTypeAssertionNode(typeAssertionNode, context), typeAssertion = new TypeAssertion(string, node, term, type);
    return typeAssertion;
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
function typePrefixDeclarationFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
    var TypePrefixDeclaration = _elements.default.TypePrefixDeclaration, node = typePrefixDeclarationNode, string = context.nodeAsString(node), typePrefix = typePrefixFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context), typePrefixDeclaration = new TypePrefixDeclaration(context, node, string, typePrefix);
    return typePrefixDeclaration;
}
function combinatorDeclarationFromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
    var CombinatorDeclaration = _elements.default.CombinatorDeclaration, node = combinatorDeclarationNode, string = context.nodeAsString(node), combinator = combinatorFromCombinatorDeclarationNode(combinatorDeclarationNode, context), combinatorDeclaration = new CombinatorDeclaration(context, node, string, combinator);
    return combinatorDeclaration;
}
function simpleTypeDeclarationFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    var SimpleTypeDeclaration = _elements.default.SimpleTypeDeclaration, node = simpleTypeDeclarationNode, string = context.nodeAsString(node), type = typeFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), prefixed = prefixedFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), simpleTypeDeclaration = new SimpleTypeDeclaration(context, node, string, type, prefixed);
    return simpleTypeDeclaration;
}
function constructorDeclarationFromConstructorDeclarationNode(constructorDeclarationNode, context) {
    var ConstructorDeclaration = _elements.default.ConstructorDeclaration, node = constructorDeclarationNode, string = context.nodeAsString(node), constructor = constructorFromConstructorDeclarationNode(constructorDeclarationNode, context), constructorDeclaration = new ConstructorDeclaration(context, node, string, constructor);
    return constructorDeclaration;
}
function complexTypeDeclarationFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var ComplexTypeDeclaration = _elements.default.ComplexTypeDeclaration, node = complexTypeDeclarationNode, string = context.nodeAsString(node), type = typeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), prefixed = prefixedFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), complexTypeDeclaration = new ComplexTypeDeclaration(context, node, string, type, prefixed);
    return complexTypeDeclaration;
}
function metavariableDeclarationFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    var MetavariableDeclaration = _elements.default.MetavariableDeclaration, node = metavariableDeclarationNode, string = context.nodeAsString(node), metavarialbe = metavariableFromMetavariableNode(metavariableDeclarationNode, context), metavariableDeclaration = new MetavariableDeclaration(context, node, string, metavarialbe);
    return metavariableDeclaration;
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
function satisfiesAssertionFromStepNode(stepNode, context) {
    var satisfiesAssertion = null;
    var satisfiesAssertionNode = stepNode.getSatisfiedAssertionNode();
    if (satisfiesAssertionNode !== null) {
        satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
    }
    return satisfiesAssertion;
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
function metavariableFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    var metavariable = null;
    var metavariableNode = metavariableDeclarationNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }
    return metavariable;
}
function bracketedCombinatorFromNothing() {
    var Statement = _elements.default.Statement, BracketedCombinator = _elements.default.BracketedCombinator, bracketedCombinatorStatementNode = (0, _instantiate.instantiateBracketedCombinatorStatement)(), string = _instantiate.bracketedCombinatorStatementString, node = bracketedCombinatorStatementNode, statement = new Statement(string, node), bracketedCombinator = new BracketedCombinator(statement);
    return bracketedCombinator;
}
function bracketedConstructorFfromNothing() {
    var Term = _elements.default.Term, bracketedConstructorTermNode = (0, _instantiate.instantiateBracketedConstructorTerm)(), string = _instantiate.bracketedConstructorTermString, node = bracketedConstructorTermNode, type = null, term = new Term(string, node, type), bracketedConstructor = new BracketedConstructor(term);
    return bracketedConstructor;
}
function termsFromSignatureNode(signatureNode, context) {
    var termNodes = signatureNode.getAssumptionNodes(), terms = termNodes.map(function(termNode) {
        var term = termFromTermNode(termNode, context);
        return term;
    });
    return terms;
}
function assumptionsFromFrameNode(frameNode, context) {
    var assumptionNodes = frameNode.getAssumptionNodes(), assumptions = assumptionNodes.map(function(assumptionNode) {
        var assumption = assumptionFromAssumptionNode(assumptionNode, context);
        return assumption;
    });
    return assumptions;
}
function statementsFromSubproofAssertionNode(subproofAssertionNode, context) {
    var statementNodes = subproofAssertionNode.getStatementNodes(), statements = statementNodes.map(function(statementNode) {
        var statement = statementFromStatementNode(statementNode, context);
        return statement;
    });
    return statements;
}
function propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var propertyDeclarationNodes = complexTypeDeclarationNode.getPropertyDeclarationNodes(), properties = propertyDeclarationNodes.map(function(propertyDeclarationNode) {
        var property = propertyFromPropertyDeclarationNode(propertyDeclarationNode, context);
        return property;
    });
    return properties;
}
function superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    var superTypeNodes = complexTypeDeclarationNode.getSuperTypeNodes(), superTypes = superTypeNodes.map(function(superTypeNode) {
        var typeNode = superTypeNode, type = typeFromTypeNode(typeNode, context), superType = type; ///
        return superType;
    }), superTypesLength = superTypes.length;
    if (superTypesLength === 0) {
        var superType = _type.baseType; ///
        superTypes.push(superType);
    }
    return superTypes;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBiYXNlVHlwZSB9IGZyb20gXCIuLi9lbGVtZW50L3R5cGVcIjtcbmltcG9ydCB7IGJyYWNrZXRlZENvbnN0cnVjdG9yVGVybVN0cmluZyxcbiAgICAgICAgIGJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnRTdHJpbmcsXG4gICAgICAgICBpbnN0YW50aWF0ZUJyYWNrZXRlZENvbnN0cnVjdG9yVGVybSxcbiAgICAgICAgIGluc3RhbnRpYXRlQnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIHR5cGUgPSBiYXNlVHlwZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IHR5cGVOb2RlLmdldFR5cGVQcmVmaXhOYW1lKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gbm9taW5hbFR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IHR5cGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IG51bGwsXG4gICAgICAgICAgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBudWxsO1xuXG4gICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbm9kZSwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zKTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YVR5cGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbWV0YVR5cGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgIG5hbWUgPSBtZXRhVHlwZU5hbWUsICAvLy9cbiAgICAgICAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUoc3RyaW5nLCBub2RlLCBuYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5Tm9kZS5nZXRQcm9wZXJ0eU5hbWUoKSxcbiAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IHByb3BlcnR5TmFtZSwgIC8vL1xuICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIG5vZGUsIG5hbWUsIG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzaWduYXR1cmVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShzdHJpbmcsIG5vZGUsIHRlcm1zKTtcblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IG5ldyBBc3N1bXB0aW9uKHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFR5cGVQcmVmaXggfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdHlwZVByZWZpeE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGVQcmVmaXggPSBuZXcgVHlwZVByZWZpeChzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpO1xuXG4gIHJldHVybiB0eXBlUHJlZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBtZXRhVHlwZSA9IG51bGwsXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlQXNzZXJ0aW9uID0gbmV3IFR5cGVBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKTtcblxuICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeGVkRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwcmVmaXhlZCA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcmVmaXhlZCgpO1xuXG4gIHJldHVybiBwcmVmaXhlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeGVkRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByZWZpeGVkID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcmVmaXhlZCgpO1xuXG4gIHJldHVybiBwcmVmaXhlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZWRBc3NlcnRpb25Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWZpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBuZXcgRGVmaW5lZEFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKTtcblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eVJlbGF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gbmV3IFByb3BlcnR5UmVsYXRpb24oc3RyaW5nLCBub2RlLCBwcm9wZXJ0eSwgdGVybSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHlBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gbmV3IFByb3BlcnR5QXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN1YnByb29mQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29udGFpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBuZXcgQ29udGFpbmVkQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTYXRpc2ZpZXNBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBuZXcgU2F0aXNmaWVzQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgc2lnbmF0dXJlLCByZWZlcmVuY2UpO1xuXG4gIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZVByZWZpeERlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeEZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb24gPSBuZXcgVHlwZVByZWZpeERlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdHlwZVByZWZpeCk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21iaW5hdG9yRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29tYmluYXRvckRlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgY29tYmluYXRvcik7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVmaXhlZCA9IHByZWZpeGVkRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IG5ldyBTaW1wbGVUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgbm9kZSwgc3RyaW5nLCB0eXBlLCBwcmVmaXhlZCk7XG5cbiAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uID0gbmV3IENvbnN0cnVjdG9yRGVjbGFyYXRpb24oY29udGV4dCwgbm9kZSwgc3RyaW5nLCBjb25zdHJ1Y3Rvcik7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmVmaXhlZCA9IHByZWZpeGVkRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IG5ldyBDb21wbGV4VHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdHlwZSwgcHJlZml4ZWQpO1xuXG4gIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbWV0YXZhcmlhbGJlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgbm9kZSwgc3RyaW5nLCBtZXRhdmFyaWFsYmUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZUFzc2VydGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlQXNzZXJ0aW5Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VHlwZUFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZU5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyYWlibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RlcE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KVxuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5ID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmIChwcm9wZXJ0eU5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZmluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGRlZmluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChkZWZpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGRlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIHR5cGUgPSB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9wZXJ0eUFzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKTtcblxuICBpZiAocHJvcGVydHlBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZSA9IHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7MFxuICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb250YWluZWRBc3NlcnRpb24gPSBjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5ID0gbnVsbDtcblxuICBjb25zdCBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZS5nZXRQcm9wZXJ0eU5vZGUoKTtcblxuICBpZiAocHJvcGVydHlOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpO1xuXG4gIGlmIChzaWduYXR1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2VOb2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4RnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZVByZWZpeCA9IG51bGw7XG5cbiAgY29uc3QgdHlwZVByZWZpeE5vZGUgPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLmdldFR5cGVQcmVmaXhOb2RlKCk7XG5cbiAgaWYgKHR5cGVQcmVmaXhOb2RlICE9PSBudWxsKSB7XG4gICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29tYmluYXRvciA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKHN0YXRlbWVudCk7XG4gIH1cblxuICByZXR1cm4gY29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGFUeXBlID0gbnVsbDtcblxuICBjb25zdCBtZXRhVHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YVR5cGVOb2RlKCk7XG5cbiAgaWYgKG1ldGFUeXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb3BlcnR5UmVsYXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IHByb3BlcnR5UmVsYXRpb25Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLmdldFByb3BlcnR5UmVsYXRpb25Ob2RlKCk7XG5cbiAgaWYgKHByb3BlcnR5UmVsYXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvckZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgY29uc3RydWN0b3IgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHRlcm0pO1xuICB9XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZENvbWJpbmF0b3JGcm9tTm90aGluZygpIHtcbiAgY29uc3QgeyBTdGF0ZW1lbnQsIEJyYWNrZXRlZENvbWJpbmF0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGluc3RhbnRpYXRlQnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudCgpLFxuICAgICAgICBzdHJpbmcgPSBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIG5vZGUgPSBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlKSxcbiAgICAgICAgYnJhY2tldGVkQ29tYmluYXRvciA9IG5ldyBCcmFja2V0ZWRDb21iaW5hdG9yKHN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIGJyYWNrZXRlZENvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRDb25zdHJ1Y3RvckZmcm9tTm90aGluZygpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSA9IGluc3RhbnRpYXRlQnJhY2tldGVkQ29uc3RydWN0b3JUZXJtKCksXG4gICAgICAgIHN0cmluZyA9IGJyYWNrZXRlZENvbnN0cnVjdG9yVGVybVN0cmluZywgIC8vL1xuICAgICAgICBub2RlID0gYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgbm9kZSwgdHlwZSksXG4gICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yID0gbmV3IEJyYWNrZXRlZENvbnN0cnVjdG9yKHRlcm0pO1xuXG4gIHJldHVybiBicmFja2V0ZWRDb25zdHJ1Y3Rvcjtcbn1cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZXMgPSBzaWduYXR1cmVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHRlcm07XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25Ob2Rlcy5tYXAoKGFzc3VtcHRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGFzc3VtcHRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlcygpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMubWFwKChwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3VwZXJUeXBlTm9kZXMgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRTdXBlclR5cGVOb2RlcygpLFxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlTm9kZXMubWFwKChzdXBlclR5cGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBzdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICB0eXBlID0gdHlwZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gdHlwZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSksXG4gICAgICAgIHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IHN1cGVyVHlwZSA9IGJhc2VUeXBlOyAvLy9cblxuICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBfdHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlTm9kZSgpO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbiJdLCJuYW1lcyI6WyJfdHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlIiwiYnJhY2tldGVkQ29tYmluYXRvckZyb21Ob3RoaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3JGZnJvbU5vdGhpbmciLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JGcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsIm1ldGFUeXBlRnJvbU1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlIiwicHJlZml4ZWRGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJwcmVmaXhlZEZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RlcE5vZGUiLCJzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50c0Zyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3VwZXJUeXBlc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJ0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybUZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiLCJ0eXBlQXNzZXJ0aW5Gcm9tU3RhdGVtZW50Tm9kZSIsInR5cGVBc3NlcnRpb25Gcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhGcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlTm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiYmFzZVR5cGUiLCJUeXBlIiwiZWxlbWVudHMiLCJ0eXBlTmFtZSIsImdldFR5cGVOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJnZXRUeXBlUHJlZml4TmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwicHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwiZnJhbWVOb2RlIiwiRnJhbWUiLCJhc3N1bXB0aW9ucyIsImZyYW1lIiwibWV0YVR5cGVOb2RlIiwiTWV0YVR5cGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsInByb3BlcnR5Tm9kZSIsIlByb3BlcnR5IiwicHJvcGVydHlOYW1lIiwiZ2V0UHJvcGVydHlOYW1lIiwicHJvcGVydHkiLCJzdGF0ZW1lbnROb2RlIiwiU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic2lnbmF0dXJlTm9kZSIsIlNpZ25hdHVyZSIsInRlcm1zIiwic2lnbmF0dXJlIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZSIsImFzc3VtcHRpb25Ob2RlIiwiQXNzdW1wdGlvbiIsImFzc3VtcHRpb24iLCJ0eXBlUHJlZml4Tm9kZSIsIlR5cGVQcmVmaXgiLCJ0ZXJtRnJvbVR5cGVQcmVmaXhOb2RlIiwidHlwZUZyb21UeXBlUHJlZml4Tm9kZSIsInR5cGVQcmVmaXgiLCJtZXRhdmFyaWFibGVOb2RlIiwiTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsIlR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInByZWZpeGVkIiwiaXNQcmVmaXhlZCIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJEZWZpbmVkQXNzZXJ0aW9uIiwibmVnYXRlZCIsImlzTmVnYXRlZCIsImRlZmluZWRBc3NlcnRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIlByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIlN1YnByb29mQXNzZXJ0aW9uIiwic3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIkNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3IiLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iLCJTaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJzaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJDb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwibWV0YXZhcmlhbGJlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJnZXRUZXJtTm9kZSIsImdldFR5cGVOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXRUeXBlQXNzZXJ0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyYWlibGVOb2RlIiwic3RlcE5vZGUiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiZ2V0RnJhbWVOb2RlIiwiZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJnZXRQcm9wZXJ0eU5vZGUiLCJnZXRTaWduYXR1cmVOb2RlIiwiZ2V0VHlwZVByZWZpeE5vZGUiLCJDb21iaW5hdG9yIiwiZ2V0TWV0YVR5cGVOb2RlIiwiZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJDb25zdHJ1Y3RvciIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJCcmFja2V0ZWRDb21iaW5hdG9yIiwiYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJpbnN0YW50aWF0ZUJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnQiLCJicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50U3RyaW5nIiwiYnJhY2tldGVkQ29tYmluYXRvciIsImJyYWNrZXRlZENvbnN0cnVjdG9yVGVybU5vZGUiLCJpbnN0YW50aWF0ZUJyYWNrZXRlZENvbnN0cnVjdG9yVGVybSIsImJyYWNrZXRlZENvbnN0cnVjdG9yVGVybVN0cmluZyIsImJyYWNrZXRlZENvbnN0cnVjdG9yIiwiQnJhY2tldGVkQ29uc3RydWN0b3IiLCJ0ZXJtTm9kZXMiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJtYXAiLCJhc3N1bXB0aW9uTm9kZXMiLCJzdGF0ZW1lbnROb2RlcyIsImdldFN0YXRlbWVudE5vZGVzIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwiZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwic3VwZXJUeXBlTm9kZXMiLCJnZXRTdXBlclR5cGVOb2RlcyIsInN1cGVyVHlwZU5vZGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwicHVzaCIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWl3QmdCQTtlQUFBQTs7UUF2cEJBQztlQUFBQTs7UUErbEJBQztlQUFBQTs7UUFyQ0FDO2VBQUFBOztRQVdBQztlQUFBQTs7UUE3YkFDO2VBQUFBOztRQTRXQUM7ZUFBQUE7O1FB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