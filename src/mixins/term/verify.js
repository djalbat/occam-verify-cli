"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable!");

function unifyWithBracketedConstructor(term, context, verifyAhead) {
  let unifiedWithBracketedConstructor;

  const { BracketedConstructor } = dom,
        bracketedConstructor = BracketedConstructor.fromNothing();

  unifiedWithBracketedConstructor = bracketedConstructor.unifyTerm(term, context, verifyAhead);

  return unifiedWithBracketedConstructor;
}

function unifyWithConstructors(term, context, verifyAhead) {
  let unifiedWithConstructors;

  const constructors = context.getConstructors();

  unifiedWithConstructors = constructors.some((constructor) => {
    const unifiedWithConstructor = constructor.unifyTerm(term, context, verifyAhead);

    if (unifiedWithConstructor) {
      return true;
    }
  });

  return unifiedWithConstructors;
}

function verifyTermAsVariable(term, localContext, verifyAhead) {
  let termVerifiedAsVariable = false;

  const { Variable } = dom,
        context = localContext, ///
        termNode = term.getNode(),
        variableNode = variableNodeQuery(termNode),
        variable = Variable.fromVariableNode(variableNode, context);

  if (variable !== null) {
    const termString = term.getString();

    localContext.trace(`Verifying the '${termString}' term as a variable...`);

    const variableVerified = variable.verify(localContext);

    if (variableVerified) {
      let verifiedAhead;

      const type = variable.getType();

      term.setType(type);

      verifiedAhead = verifyAhead();

      termVerifiedAsVariable = verifiedAhead; ///
    }

    if (termVerifiedAsVariable) {
      localContext.debug(`...verified the '${termString}' term as a variable.`);
    }
  }

  return termVerifiedAsVariable;
}

function verifyAsPropertyRelation(term, context, verifyAhead) {
  let verifiedAsPropertyRelation = false;

  const { PropertyRelation } = dom,
        termNode = term.getNode(),
        propertyRelation = PropertyRelation.fromTermNode(termNode, context);

  if (propertyRelation !== null) {
    const termString = term.getString();

    context.trace(`Verifying the '${termString}' term as a property relation...`);

    const propertyRelationVerified = propertyRelation.verify(context);

    if (propertyRelationVerified) {
      let verifiedAhead;

      const type = propertyRelation.getType();

      term.setType(type);

      verifiedAhead = verifyAhead();

      verifiedAsPropertyRelation = verifiedAhead; ///
    }

    if (verifiedAsPropertyRelation) {
      context.debug(`...verified the '${termString}' statement as a property relation.`);
    }
  }

  return verifiedAsPropertyRelation;
}

const verifyMixins = [
  unifyWithBracketedConstructor,
  unifyWithConstructors,
  verifyTermAsVariable,
  verifyAsPropertyRelation
];

export default verifyMixins;
