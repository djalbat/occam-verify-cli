"use strict";

import dom from "../../dom";

function unifyWithBracketedConstructor(term, context, verifyAhead) {
  let unifiesWithBracketedConstructor;

  const { BracketedConstructor } = dom,
        bracketedConstructor = BracketedConstructor.fromNothing();

  unifiesWithBracketedConstructor = bracketedConstructor.unifyTerm(term, context, verifyAhead);

  return unifiesWithBracketedConstructor;
}

function unifyWithConstructors(term, context, verifyAhead) {
  let unifiesWithConstructors;

  const constructors = context.getConstructors();

  unifiesWithConstructors = constructors.some((constructor) => {
    const unifiesWithConstructor = constructor.unifyTerm(term, context, verifyAhead);

    if (unifiesWithConstructor) {
      return true;
    }
  });

  return unifiesWithConstructors;
}

function verifyTermAsVariable(term, context, verifyAhead) {
  let termVerifiesAsVariable = false;

  const { Variable } = dom,
        termNode = term.getNode(),
        singularVariableNode = termNode.getSingularVariableNode();

  if (singularVariableNode !== null) {
    const variableNode = singularVariableNode,
          variable = Variable.fromVariableNode(variableNode, context),
          termString = term.getString();

    context.trace(`Verifying the '${termString}' term as a variable...`);

    const variableVerifies = variable.verify(context);

    if (variableVerifies) {
      let verifiesAhead;

      const variableName = variable.getName();

      variable = context.findVariableByVariableName(variableName);

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
