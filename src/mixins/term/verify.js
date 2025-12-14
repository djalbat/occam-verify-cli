"use strict";

import ontology from "../../ontology";

function unifyWithBracketedConstructor(term, context, verifyAhead) {
  let unifiedWithBracketedConstructor;

  const { BracketedConstructor } = ontology,
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

function verifyTermAsVariable(term, context, verifyAhead) {
  let termVerifiesAsVariable = false;

  const { Variable } = ontology,
        termNode = term.getNode(),
        singularVariableNode = termNode.getSingularVariableNode();

  if (singularVariableNode !== null) {
    let variable;

    const termString = term.getString(),
          variableNode = singularVariableNode;  ///

    variable = Variable.fromVariableNode(variableNode, context);

    context.trace(`Verifying the '${termString}' term as a variable...`);

    const variableVerifies = variable.verify(context);

    if (variableVerifies) {
      let verifiesAhead;

      const variableIdentifier = variable.getIdentifier();

      variable = context.findVariableByVariableIdentifier(variableIdentifier);

      const type = variable.getType();

      term.setType(type);

      verifiesAhead = verifyAhead();

      termVerifiesAsVariable = verifiesAhead; ///
    }

    if (termVerifiesAsVariable) {
      context.debug(`...verified the '${termString}' term as a variable.`);
    }
  }

  return termVerifiesAsVariable;
}

const verifyMixins = [
  unifyWithBracketedConstructor,
  unifyWithConstructors,
  verifyTermAsVariable
];

export default verifyMixins;
