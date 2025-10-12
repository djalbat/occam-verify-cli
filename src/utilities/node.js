"use strict";

import dom from "../dom";

import { objectType } from "../dom/type";

export function typeFromTypeNode(typeNode, context) {
  let type;

  if (typeNode === null) {
    type = objectType;
  } else {
    const { Type } = dom,
          typeName = typeNode.getTypeName(),
          typePrefixName = typeNode.getTypePrefixName(),
          nominalTypeName = typeNode.getNominalTypeName(),
          string = nominalTypeName,  ///
          name = typeName,  ///
          prefixName = typePrefixName,  ///
          superTypes = null,
          properties = null,
          provisional = null;

    type = new Type(string, name, prefixName, superTypes, properties, provisional);
  }

  return type;
}

export function termFromTermNode(termNode, context) {
  const { Term } = dom,
        node = termNode,  ///
        string = context.nodeAsString(node),
        type = null,
        term = new Term(string, node, type);

  return term;
}

export function statementFromStatementNode(statementNode, context) {
  const { Statement } = dom,
        node = statementNode, ///
        tokens = context.nodeAsTokens(node),
        string = context.tokensAsString(tokens),
        statement = new Statement(string, node, tokens);

  return statement;
}

export function termsFromTermNodes(termNodes, context) {
  const terms = termNodes.map((termNode) => {
          const term = termFromTermNode(termNode, context);

          return term;
        });

  return terms;
}

export function variableFromTerm(term, context) {
  let variable = null;

  const termNode = term.getNode(),
        singularVariableNode = termNode.getSingularVariableNode();

  if (singularVariableNode !== null) {
    const { Variable } = dom,
          variableNode = singularVariableNode;  ///

    variable = Variable.fromVariableNode(variableNode, context);

    const type = term.getType();

    variable.setType(type);
  }

  return variable;
}

export function stringFromTerms(terms) {
  const termsString = terms.reduce((termsString, term) => {
          const termString = term.getString();

          termsString = (termsString !== null) ?
                         `${termsString}, ${termString}` :
                           termString;

          return termsString;
        }, null),
        string = `[${termsString}]`;

  return string;
}
