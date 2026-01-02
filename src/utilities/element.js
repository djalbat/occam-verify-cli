"use strict";

import elements from "../elements";

import { baseType } from "../element/type";
import { bracketedConstructorTermString,
         bracketedCombinatorStatementString,
         instantiateBracketedConstructorTerm,
         instantiateBracketedCombinatorStatement } from "../process/instantiate";

export function typeFromTypeNode(typeNode, context) {
  let type;

  if (typeNode === null) {
    type = baseType;
  } else {
    const { Type } = elements,
          typeName = typeNode.getTypeName(),
          typePrefixName = typeNode.getTypePrefixName(),
          nominalTypeName = typeNode.getNominalTypeName(),
          string = nominalTypeName,  ///
          node = typeNode,  ///
          name = typeName,  ///
          prefixName = typePrefixName,  ///
          superTypes = null,
          properties = null,
          provisional = null;

    type = new Type(string, node, name, prefixName, superTypes, properties, provisional);
  }

  return type;
}

export function termFromTermNode(termNode, context) {
  const { Term } = elements,
        node = termNode,  ///
        string = context.nodeAsString(node),
        type = null,
        term = new Term(string, node, type);

  return term;
}

export function frameFromFrameNode(frameNode, context) {
  const { Frame } = elements,
        node = frameNode, ///
        string = context.nodeAsString(node),
        assumptions = assumptionsFromFrameNode(frameNode, context),
        frame = new Frame(string, node, assumptions);

  return frame;
}

export function metaTypeFromMetaTypeNode(metaTypeNode, context) {
  const { MetaType } = elements,
        node = metaTypeNode,  ///
        string = context.nodeAsString(node),
        metaTypeName = metaTypeNode.getMetaTypeName(),
        name = metaTypeName,  ///
        metaType = new MetaType(string, node, name);

  return metaType;
}

export function propertyFromPropertyNode(propertyNode, context) {
  const { Property } = elements,
        node = propertyNode, ///
        string = context.nodeAsString(node),
        propertyName = propertyNode.getPropertyName(),
        nominalTypeName = null,
        name = propertyName,  ///
        property = new Property(string, node, name, nominalTypeName);

  return property;
}

export function statementFromStatementNode(statementNode, context) {
  const { Statement } = elements,
        node = statementNode, ///
        string = context.nodeAsString(node),
        statement = new Statement(string, node);

  return statement;
}

export function signatureFromSignatureNode(signatureNode, context) {
  const { Signature } = elements,
        node = signatureNode, ///
        string = context.nodeAsString(node),
        terms = termsFromSignatureNode(signatureNode, context),
        signature = new Signature(string, node, terms);

  return signature;
}

export function referenceFromReferenceNode(referenceNode, context) {
  const { Reference } = elements,
        node = referenceNode, ///
        string = context.nodeAsString(node),
        metavariable = metavariableFromReferenceNode(referenceNode, context),
        reference = new Reference(string, node, metavariable);

  return reference;
}

export function assumptionFromAssumptionNode(assumptionNode, context) {
  const { Assumption } = elements,
        node = assumptionNode, ///
        string = context.nodeAsString(node),
        statement = statementFromAssumptionNode(assumptionNode, context),
        reference = referenceFromAssumptionNode(assumptionNode, context),
        assumption = new Assumption(string, node, statement, reference);

  return assumption;
}

export function typePrefixFromTypePrefixNode(typePrefixNode, context) {
  const { TypePrefix } = elements,
        node = typePrefixNode, ///
        string = context.nodeAsString(node),
        term = termFromTypePrefixNode(typePrefixNode, context),
        type = typeFromTypePrefixNode(typePrefixNode, context),
        typePrefix = new TypePrefix(string, node, term, type);

  return typePrefix;
}

export function metavariableFromMetavariableNode(metavariableNode, context) {
  const { Metavariable } = elements,
        node = metavariableNode,  ///
        string = context.nodeAsString(node),
        metavariableName = metavariableNode.getMetavariableName(),
        name = metavariableName,  ///
        type = null,
        metaType = null,
        metavariable = new Metavariable(string, node, name, type, metaType);

  return metavariable;
}

export function typeAssertionFromTypeAssertionNode(typeAssertionNode, context) {
  const { TypeAssertion } = elements,
        node = typeAssertionNode, ///
        string = context.nodeAsString(node),
        term = termFromTypeAssertionNode(typeAssertionNode, context),
        type = typeFromTypeAssertionNode(typeAssertionNode, context),
        typeAssertion = new TypeAssertion(string, node, term, type);

  return typeAssertion;
}

export function prefixedFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
  const prefixed = simpleTypeDeclarationNode.isPrefixed();

  return prefixed;
}

export function prefixedFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
  const prefixed = complexTypeDeclarationNode.isPrefixed();

  return prefixed;
}

export function definedAssertionFromDefinedAssertionNode(definedAssertionNode, context) {
  const { DefinedAssertion } = elements,
        node = definedAssertionNode,  ///
        string = context.nodeAsString(node),
        negated = definedAssertionNode.isNegated(),
        term = termFromDefinedAssertionNode(definedAssertionNode, context),
        frame = frameFromDefinedAssertionNode(definedAssertionNode, context),
        definedAssertion = new DefinedAssertion(string, node, term, frame, negated);

  return definedAssertion;
}

export function propertyRelationFromPropertyRelationNode(propertyRelationNode, context) {
  const { PropertyRelation } = elements,
        node = propertyRelationNode,  ///
        string = context.nodeAsString(node),
        property = propertyFromPropertyRelationNode(propertyRelationNode, context),
        term = termFromPropertyRelationNode(propertyRelationNode, context),
        propertyRelation = new PropertyRelation(string, node, property, term);

  return propertyRelation;
}

export function propertyAssertionFromPropertyAssertionNode(propertyAssertionNode, context) {
  const { PropertyAssertion } = elements,
        node = propertyAssertionNode,  ///
        string = context.nodeAsString(node),
        term = termFromPropertyAssertionNode(propertyAssertionNode, context),
        propertyRelation = propertyRelationFromPropertyAssertionNode(propertyAssertionNode, context),
        propertyAssertion = new PropertyAssertion(string, node, term, propertyRelation);

  return propertyAssertion;
}

export function subproofAssertionFromSubproofAssertionNode(subproofAssertionNode, context) {
  const { SubproofAssertion } = elements,
        node = subproofAssertionNode, ///
        string = context.nodeAsString(node),
        statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context),
        subproofAssertion = new SubproofAssertion(string, node, statements);

  return subproofAssertion;
}

export function containedAssertionFromContainedAssertionNode(containedAssertionNode, context) {
  const { ContainedAssertion } = elements,
        node = containedAssertionNode,  ///
        string = context.nodeAsString(node),
        negated = containedAssertionNode.isNegated(),
        term = termFromContainedAssertionNode(containedAssertionNode, context),
        frame = frameFromContainedAssertionNode(containedAssertionNode, context),
        statement = statementFromContainedAssertionNode(containedAssertionNode, context),
        containedAssertion = new ContainedAssertion(string, node, term, frame, negated, statement);

  return containedAssertion;
}

export function satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
  const { SatisfiesAssertion } = elements,
        node = satisfiesAssertionNode,  ///
        string = context.nodeAsString(node),
        signature = signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context),
        reference = referenceFromSatisfiesAssertionNode(satisfiesAssertionNode, context),
        satisfiesAssertion = new SatisfiesAssertion(string, node, signature, reference);

  return satisfiesAssertion;
}

export function typePrefixDeclarationFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
  const { TypePrefixDeclaration } = elements,
        node = typePrefixDeclarationNode, ///
        string = context.nodeAsString(node),  ///
        typePrefix = typePrefixFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context),
        typePrefixDeclaration = new TypePrefixDeclaration(context, node, string, typePrefix);

  return typePrefixDeclaration;
}

export function combinatorDeclarationFromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
  const { CombinatorDeclaration } = elements,
        node = combinatorDeclarationNode, ///
        string = context.nodeAsString(node),
        combinator = combinatorFromCombinatorDeclarationNode(combinatorDeclarationNode, context),
        combinatorDeclaration = new CombinatorDeclaration(context, node, string, combinator);

  return combinatorDeclaration;
}

export function simpleTypeDeclarationFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
  const { SimpleTypeDeclaration } = elements,
        node = simpleTypeDeclarationNode, ///
        string = context.nodeAsString(node),
        type = typeFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context),
        prefixed = prefixedFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context),
        simpleTypeDeclaration = new SimpleTypeDeclaration(context, node, string, type, prefixed);

  return simpleTypeDeclaration;
}

export function constructorDeclarationFromConstructorDeclarationNode(constructorDeclarationNode, context) {
  const { ConstructorDeclaration } = elements,
        node = constructorDeclarationNode, ///
        string = context.nodeAsString(node),
        constructor = constructorFromConstructorDeclarationNode(constructorDeclarationNode, context),
        constructorDeclaration = new ConstructorDeclaration(context, node, string, constructor);

  return constructorDeclaration;
}

export function complexTypeDeclarationFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
  const { ComplexTypeDeclaration } = elements,
        node = complexTypeDeclarationNode,  ///
        string = context.nodeAsString(node),
        type = typeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context),
        prefixed = prefixedFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context),
        complexTypeDeclaration = new ComplexTypeDeclaration(context, node, string, type, prefixed);

  return complexTypeDeclaration;
}

export function metavariableDeclarationFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
  const { MetavariableDeclaration } = elements,
        node = metavariableDeclarationNode,  ///
        string = context.nodeAsString(node),
        metavarialbe = metavariableFromMetavariableNode(metavariableDeclarationNode, context),
        metavariableDeclaration = new MetavariableDeclaration(context, node, string, metavarialbe);

  return metavariableDeclaration;
}

export function termFromTypeAssertionNode(typeAssertionNode, context) {
  let term = null;

  const termNode = typeAssertionNode.getTermNode();

  if (termNode !== null) {
    term = termFromTermNode(termNode, context);
  }

  return term;
}

export function typeFromTypeAssertionNode(typeAssertionNode, context) {
  let type = null;

  const typeNode = typeAssertionNode.getTypeNode();

  if (typeNode !== null) {
    type = typeFromTypeNode(typeNode, context);
  }

  return type;
}

export function statementFromAssumptionNode(assumptionNode, context) {
  let statement = null;

  const statementNode = assumptionNode.getStatementNode();

  if (statementNode !== null) {
    statement = statementFromStatementNode(statementNode, context);
  }

  return statement;
}

export function referenceFromAssumptionNode(assumptionNode, context) {
  let reference = null;

  const referenceNode = assumptionNode.getReferenceNode();

  if (referenceNode !== null) {
    reference = referenceFromReferenceNode(referenceNode, context);
  }

  return reference;
}

export function termFromDefinedAssertionNode(definedAssertionNode, context) {
  let term = null;

  const termNode = definedAssertionNode.getTermNode();

  if (termNode !== null) {
    term = termFromTermNode(termNode, context);
  }

  return term;
}

export function termFromPropertyRelationNode(propertyRelationNode, context) {
  let term = null;

  const termNode = propertyRelationNode.getTermNode();

  if (termNode !== null) {
    term = termFromTermNode(termNode, context);
  }

  return term;
}

export function typeAssertinFromStatementNode(statementNode, context) {
  let typeAssertion = null;

  const typeAssertionNode = statementNode.getTypeAssertionNode();

  if (typeAssertionNode !== null) {
    typeAssertion = typeAssertionFromTypeAssertionNode(typeAssertionNode, context);
  }

  return typeAssertion;
}

export function metavariableFromReferenceNode(referenceNode, context) {
  let metavariable = null;

  const metavariableNode = referenceNode.getTermNode();

  if (metavariableNode !== null) {
    metavariable = metavariableFromMetavaraibleNode(metavariableNode, context);
  }

  return metavariable;
}

export function frameFromDefinedAssertionNode(definedAssertionNode, context) {
  let frame = null;

  const frameNode = definedAssertionNode.getTermNode();

  if (frameNode !== null) {
    frame = frameFromFrameNode(frameNode, context);
  }

  return frame;
}

export function termFromPropertyAssertionNode(propertyAssertionNode, context) {
  let term = null;

  const termNode = propertyAssertionNode.getTermNode();

  if (termNode !== null) {
    term = termFromTermNode(termNode, context);
  }

  return term;
}

export function satisfiesAssertionFromStepNode(stepNode, context) {
  let satisfiesAssertion = null;

  const satisfiesAssertionNode = stepNode.getSatisfiedAssertionNode();

  if (satisfiesAssertionNode !== null) {
    satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
  }

  return satisfiesAssertion;
}

export function termFromContainedAssertionNode(containedAssertionNode, context) {
  let term = null;

  const termNode = containedAssertionNode.getTermNode();

  if (termNode !== null) {
    term = termFromTermNode(termNode, context);
  }

  return term;
}

export function frameFromContainedAssertionNode(containedAssertionNode, context) {
  let frame = null;

  const frameNode = containedAssertionNode.getFrameNode();

  if (frameNode !== null) {
    frame = frameFromFrameNode(frameNode, context)
  }

  return frame;
}

export function propertyFromPropertyRelationNode(propertyRelationNode, context) {
  let property = null;

  const propertyNode = propertyRelationNode.getTermNode();

  if (propertyNode !== null) {
    property = propertyFromPropertyNode(propertyNode, context);
  }

  return property;
}

export function definedAssertionFromStatementNode(statementNode, context) {
  let definedAssertion = null;

  const definedAssertionNode = statementNode.getDefinedAssertionNode();

  if (definedAssertionNode !== null) {
    definedAssertion = definedAssertionFromDefinedAssertionNode(definedAssertionNode, context);
  }

  return definedAssertion;
}

export function typeFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
  let type = null;

  const typeNode = simpleTypeDeclarationNode.getTypeNode();

  if (typeNode !== null) {
    type = typeFromTypeNode(typeNode, context);
  }

  return type;
}

export function propertyAssertionFromStatementNode(statementNode, context) {
  let propertyAssertion = null;

  const propertyAssertionNode = statementNode.getPropertyAssertionNode();

  if (propertyAssertionNode !== null) {
    propertyAssertion = propertyAssertionFromPropertyAssertionNode(propertyAssertionNode, context);
  }

  return propertyAssertion;
}

export function subproofAssertionFromStatementNode(statementNode, context) {
  let subproofAssertion = null;

  const subproofAssertionNode = statementNode.getSubproofAssertionNode();

  if (subproofAssertionNode !== null) {
    subproofAssertion = subproofAssertionFromSubproofAssertionNode(subproofAssertionNode, context);
  }

  return subproofAssertion;
}

export function typeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
  let type = null;

  const typeNode = complexTypeDeclarationNode.getTypeNode();

  if (typeNode !== null) {
    type = typeFromTypeNode(typeNode, context);
  }

  return type;
}

export function containedAssertionFromStatementNode(statementNode, context) {0
  let containedAssertion = null;

  const containedAssertionNode = statementNode.getContainedAssertionNode();

  if (containedAssertionNode !== null) {
    containedAssertion = containedAssertionFromContainedAssertionNode(containedAssertionNode, context);
  }

  return containedAssertion;
}

export function statementFromContainedAssertionNode(containedAssertionNode, context) {
  let statement = null;

  const statementNode = containedAssertionNode.getStatementNode();

  if (statementNode !== null) {
    statement = statementFromStatementNode(statementNode, context);
  }

  return statement;
}

export function satisfiesAssertionFromStatementNode(statementNode, context) {
  let satisfiesAssertion = null;

  const satisfiesAssertionNode = statementNode.getSatisfiedAssertionNode();

  if (satisfiesAssertionNode !== null) {
    satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
  }

  return satisfiesAssertion;
}

export function propertyFromPropertyDeclarationNode(propertyDeclarationNode, context) {
  let property = null;

  const propertyNode = propertyDeclarationNode.getPropertyNode();

  if (propertyNode !== null) {
    property = propertyFromPropertyNode(propertyNode, context);
  }

  return property;
}

export function signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
  let signature = null;

  const signatureNode = satisfiesAssertionNode.getSignatureNode();

  if (signatureNode !== null) {
    signature = signatureFromSignatureNode(signatureNode, context);
  }

  return signature;
}

export function referenceFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
  let reference = null;

  const referenceNode = satisfiesAssertionNode.getReferenceNode();

  if (referenceNode !== null) {
    reference = referenceFromReferenceNode(referenceNode, context);
  }

  return reference;
}

export function typePrefixFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
  let typePrefix = null;

  const typePrefixNode = typePrefixDeclarationNode.getTypePrefixNode();

  if (typePrefixNode !== null) {
    typePrefix = typePrefixFromTypePrefixNode(typePrefixNode, context);
  }

  return typePrefix;
}

export function combinatorFromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
  let combinator = null;

  const statementNode = combinatorDeclarationNode.getStatementNode();

  if (statementNode !== null) {
    const { Combinator } = elements,
      statement = statementFromStatementNode(statementNode, context);

    combinator = new Combinator(statement);
  }

  return combinator;
}

export function metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
  let metaType = null;

  const metaTypeNode = metavariableDeclarationNode.getMetaTypeNode();

  if (metaTypeNode !== null) {
    metaType = metaTypeFromMetaTypeNode(metaTypeNode, context);
  }

  return metaType;
}

export function propertyRelationFromPropertyAssertionNode(propertyAssertionNode, context) {
  let propertyRelation = null;

  const propertyRelationNode = propertyAssertionNode.getPropertyRelationNode();

  if (propertyRelationNode !== null) {
    propertyRelation = propertyRelationFromPropertyRelationNode(propertyRelationNode, context);
  }

  return propertyRelation;
}

export function constructorFromConstructorDeclarationNode(constructorDeclarationNode, context) {
  let constructor = null;

  const termNode = constructorDeclarationNode.getStatementNode();

  if (termNode !== null) {
    const { Constructor } = elements,
          term = termFromTermNode(termNode, context);

    constructor = new Constructor(term);
  }

  return constructor;
}

export function metavariableFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
  let metavariable = null;

  const metavariableNode = metavariableDeclarationNode.getMetavariableNode();

  if (metavariableNode !== null) {
    metavariable = metavariableFromMetavariableNode(metavariableNode, context);
  }

  return metavariable;
}





export function bracketedCombinatorFromNothing() {
  const { Statement, BracketedCombinator } = elements,
        bracketedCombinatorStatementNode = instantiateBracketedCombinatorStatement(),
        string = bracketedCombinatorStatementString,  ///
        node = bracketedCombinatorStatementNode, ///
        statement = new Statement(string, node),
        bracketedCombinator = new BracketedCombinator(statement);

  return bracketedCombinator;
}

export function bracketedConstructorFfromNothing() {
  const { Term } = elements,
        bracketedConstructorTermNode = instantiateBracketedConstructorTerm(),
        string = bracketedConstructorTermString,  ///
        node = bracketedConstructorTermNode,  ///
        type = null,
        term = new Term(string, node, type),
        bracketedConstructor = new BracketedConstructor(term);

  return bracketedConstructor;
}




export function termsFromSignatureNode(signatureNode, context) {
  const termNodes = signatureNode.getAssumptionNodes(),
        terms = termNodes.map((termNode) => {
          const term = termFromTermNode(termNode, context);

          return term;
        });

  return terms;
}

export function assumptionsFromFrameNode(frameNode, context) {
  const assumptionNodes = frameNode.getAssumptionNodes(),
        assumptions = assumptionNodes.map((assumptionNode) => {
          const assumption = assumptionFromAssumptionNode(assumptionNode, context);

          return assumption;
        });

  return assumptions;
}

export function statementsFromSubproofAssertionNode(subproofAssertionNode, context) {
  const statementNodes = subproofAssertionNode.getStatementNodes(),
        statements = statementNodes.map((statementNode) => {
          const statement = statementFromStatementNode(statementNode, context);

          return statement;
        });

  return statements;
}

export function propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
  const propertyDeclarationNodes = complexTypeDeclarationNode.getPropertyDeclarationNodes(),
        properties = propertyDeclarationNodes.map((propertyDeclarationNode) => {
          const property = propertyFromPropertyDeclarationNode(propertyDeclarationNode, context);

          return property;
        });

  return properties;
}

export function superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
  const superTypeNodes = complexTypeDeclarationNode.getSuperTypeNodes(),
        superTypes = superTypeNodes.map((superTypeNode) => {
          const typeNode = superTypeNode, ///
                type = typeFromTypeNode(typeNode, context),
                superType = type;  ///

          return superType;
        }),
        superTypesLength = superTypes.length;

  if (superTypesLength === 0) {
    const superType = baseType; ///

    superTypes.push(superType);
  }

  return superTypes;
}




export function _typeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
  let type = null;

  const typeNode = metavariableDeclarationNode.getTypeNode();

  if (typeNode !== null) {
    const nominalTypeName = typeNode.getNominalTypeName();

    type = context.findTypeByNominalTypeName(nominalTypeName);
  }

  return type;
}

