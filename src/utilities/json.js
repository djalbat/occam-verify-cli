"use strict";

import shim from "../shim";

export function termFromJSON(json, fileContext) {
  let { term } = json;

  const termJSON = term;  ///

  json = termJSON;  ///

  const { Term } = shim;

  term = Term.fromJSON(json, fileContext);

  return term;
}

export function typeFromJSON(json, fileContext) {
  let { type } = json;

  const { name } = type,
        typeName = name;  ///

  type = fileContext.findTypeByTypeName(typeName);

  return type;
}

export function metaTypeFromJSON(json, fileContext) {
  let { metaType } = json;

  if (metaType !== null) {
    const { name } = metaType,
          metaTypeName = name;  ///

    metaType = fileContext.findMetaTypeByMetaTypeName(metaTypeName);
  }

  return metaType;
}

export function superTypeFromJSON(json, fileContext) {
  let { superType } = json;

  const superTypeJSON = superType;  ///

  json = superTypeJSON; ///

  const { name } = json,
        typeName = name,  ///
        type = fileContext.findTypeByTypeName(typeName);

  superType = type; ///

  return superType;
}

export function statementFromJSON(json, fileContext) {
  let { statement } = json;

  const { Statement } = shim,
        statementJSON = statement;  ///

  json = statementJSON; ///

  statement = Statement.fromJSON(json, fileContext);

  return statement;
}

export function conclusionFromJSON(json, fileContext) {
  let { conclusion } = json;

  const { Conclusion } = shim,
        conclusionJSON = conclusion;  ///

  json = conclusionJSON;  ///

  conclusion = Conclusion.fromJSON(json, fileContext);

  return conclusion;
}

export function consequentFromJSON(json, fileContext) {
  let { consequent } = json;

  const { Consequent } = shim,
        consequentJSON = consequent;  ///

  json = consequentJSON;  ///

  consequent = Consequent.fromJSON(json, fileContext);

  return consequent;
}

export function metavariableFromJSON(json, fileContext) {
  let { metavariable } = json;

  const { Metavariable } = shim,
        metavariableJSON = metavariable;  ///

  json = metavariableJSON; ///

  metavariable = Metavariable.fromJSON(json, fileContext);

  return metavariable;
}

export function unqualifiedStatementFromJSON(json, fileContext) {
  let { unqualifiedStatement } = json;

  const { UnqualifiedStatement } = shim,
        unqualifiedStatementJSON = unqualifiedStatement;  ///

  json = unqualifiedStatementJSON; ///

  unqualifiedStatement = UnqualifiedStatement.fromJSON(json, fileContext);

  return unqualifiedStatement;
}

export function typesFromJSON(json, fileContext) {
  let { types } = json;

  const typesJSON = types; ///
        types = typesJSON.map((typeJSON) => {
          const { Type } = shim,
                json = typeJSON,  ///
                type = Type.fromJSON(json, fileContext);

          return (type);
        });

  return types;
}

export function rulesFromJSON(json, fileContext) {
  let { rules } = json;

  const rulesJSON = rules; ///
        rules = rulesJSON.map((ruleJSON) => {
          const { Rule } = shim,
                json = ruleJSON,  ///
                rule = Rule.fromJSON(json, fileContext);

          return (rule);
        });

  return rules;
}

export function labelsFromJSON(json, fileContext) {
  let { labels } = json;

  const { Label } = shim,
        labelsJSON = labels;  ///

  labels = labelsJSON.map((labelJSON) => {
    const json = labelJSON, ///
          label = Label.fromJSON(json, fileContext);

    return label;
  });

  return labels;
}

export function axiomsFromJSON(json, fileContext) {
  let { axioms } = json;

  const axiomsJSON = axioms; ///
        axioms = axiomsJSON.map((axiomJSON) => {
          const { Axiom } = shim,
                json = axiomJSON,  ///
                axiom = Axiom.fromJSON(json, fileContext);

          return (axiom);
        });

  return axioms;
}

export function premisesFromJSON(json, fileContext) {
  let { premises } = json;

  const { Premise } = shim,
        premisesJSON = premises;  ///

  premises = premisesJSON.map((premiseJSON) => {
    const json = premiseJSON, ///
          premise = Premise.fromJSON(json, fileContext);

    return premise;
  });

  return premises;
}

export function theoremsFromJSON(json, fileContext) {
  let { theorems } = json;

  const theoremsJSON = theorems; ///
        theorems = theoremsJSON.map((theoremJSON) => {
          const { Theorem } = shim,
                json = theoremJSON,  ///
                theorem = Theorem.fromJSON(json, fileContext);

          return (theorem);
        });

  return theorems;
}

export function variablesFromJSON(json, fileContext) {
  let { variables } = json;

  const variablesJSON = variables; ///
        variables = variablesJSON.map((variableJSON) => {
          const { Variable } = shim,
                json = variableJSON,  ///
                variable = Variable.fromJSON(json, fileContext);

          return (variable);
        });

  return variables;
}

export function conjecturesFromJSON(json, fileContext) {
  let { conjectures } = json;

  const conjecturesJSON = conjectures; ///
        conjectures = conjecturesJSON.map((conjectureJSON) => {
          const { Conjecture } = shim,
                json = conjectureJSON,  ///
                conjecture = Conjecture.fromJSON(json, fileContext);

          return (conjecture);
        });

  return conjectures;
}

export function combinatorsFromJSON(json, fileContext) {
  let { combinators } = json;

  const combinatorsJSON = combinators; ///
        combinators = combinatorsJSON.map((combinatorJSON) => {
          const { Combinator } = shim,
                json = combinatorJSON,  ///
                combinator = Combinator.fromJSON(json, fileContext);

          return (combinator);
        });

  return combinators;
}

export function constructorsFromJSON(json, fileContext) {
  let { constructors } = json;

  const constructorsJSON = constructors; ///
        constructors = constructorsJSON.map((constructorJSON) => {
          const { Constructor } = shim,
                json = constructorJSON,  ///
                constructor = Constructor.fromJSON(json, fileContext);

          return (constructor);
        });

  return constructors;
}

export function metatheoremsFromJSON(json, fileContext) {
  let { metatheorems } = json;

  const metatheoremsJSON = metatheorems; ///
        metatheorems = metatheoremsJSON.map((metatheoremJSON) => {
          const { Metatheorem } = shim,
                json = metatheoremJSON,  ///
                metatheorem = Metatheorem.fromJSON(json, fileContext);

          return (metatheorem);
        });

  return metatheorems;
}

export function suppositionsFromJSON(json, fileContext) {
  let { suppositions } = json;

  const { Supposition } = shim,
        suppositionsJSON = suppositions;  ///

  suppositions = suppositionsJSON.map((suppositionJSON) => {
    const json = suppositionJSON, ///
          supposition = Supposition.fromJSON(json, fileContext);

    return supposition;
  });

  return suppositions;
}

export function substitutionsFromJSON(json, fileContext) {
  let { substitutions } = json;

  const { Substitution } = shim,
        substitutionsJSON = substitutions;  ///

  substitutions = substitutionsJSON.map((substitutionJSON) => {
    const json = substitutionJSON,  ///
          substitution = Substitution.fromJSON(json, fileContext);

    return substitution;
  });

  return substitutions;
}

export function metavariablesFromJSON(json, fileContext) {
  let { metavariables } = json;

  const metavariablesJSON = metavariables; ///
        metavariables = metavariablesJSON.map((metavariableJSON) => {
          const { Metavariable } = shim,
                json = metavariableJSON,  ///
                metavariable = Metavariable.fromJSON(json, fileContext);

          return (metavariable);
        });

  return metavariables;
}

export function lemmasFromNothing() {
  const lemmas = [];

  return lemmas;
}

export function metaLemmasFromNothing() {
  const metaLemmas =[];

  return metaLemmas;
}

export function termToTermJSON(term) {
  const termJSON = term.toJSON();

  return termJSON;
}

export function typeToTypeJSON(type) {
  const typeJSON = type.toJSON();

  return typeJSON;
}

export function metaTypeToMetaTypeJSON(metaType) {
  const metaTypeJSON = (metaType !== null) ?
                         metaType.toJSON() :
                           null;
  return metaTypeJSON;
}

export function superTypeToSuperTypeJSON(superType) {
  const superTypeJSON = superType.toJSON();

  return superTypeJSON;
}

export function statementToStatementJSON(statement) {
  const statementJSON = statement.toJSON();

  return statementJSON;
}

export function conclusionToConclusionJSON(conclusion) {
  const conclusionJSON = conclusion.toJSON();

  return conclusionJSON;
}

export function consequentToConsequentJSON(consequent) {
  const consequentJSON = consequent.toJSON();

  return consequentJSON;
}

export function metavariableToMetavariableJSON(metavariable) {
  const metavariableJSON = metavariable.toJSON();

  return metavariableJSON;
}

export function unqualifiedStatementToUnqualifiedStatementJSON(unqualifiedStatement) {
  const unqualifiedStatementJSON = unqualifiedStatement.toJSON();

  return unqualifiedStatementJSON;
}

export function typesToTypesJSON(types) {
  const typesJSON = types.map((type) => {
    const typeJSON = type.toJSON();

    type = typeJSON; ///

    return type;
  });

  return typesJSON;
}

export function rulesToRulesJSON(rules) {
  const rulesJSON = rules.map((rule) => {
    const ruleJSON = rule.toJSON();

    rule = ruleJSON; ///

    return rule;
  });

  return rulesJSON;
}

export function labelsToLabelsJSON(labels) {
  const labelsJSON = labels.map((label) => {
    const labelJSON = label.toJSON();

    return labelJSON;
  });

  return labelsJSON;
}

export function axiomsToAxiomsJSON(axioms) {
  const axiomsJSON = axioms.map((axiom) => {
    const axiomJSON = axiom.toJSON();

    axiom = axiomJSON; ///

    return axiom;
  });

  return axiomsJSON;
}

export function premisesToPremisesJSON(premises) {
  const premisesJSON = premises.map((premise) => {
    const premiseJSON = premise.toJSON();

    return premiseJSON;
  });

  return premisesJSON;
}

export function theoremsToTheoremsJSON(theorems) {
  const theoremsJSON = theorems.map((theorem) => {
    const theoremJSON = theorem.toJSON();

    theorem = theoremJSON; ///

    return theorem;
  });

  return theoremsJSON;
}

export function variablesToVariablesJSON(variables) {
  const variablesJSON = variables.map((variable) => {
    const variableJSON = variable.toJSON();

    variable = variableJSON;  ///

    return variable;
  });

  return variablesJSON;
}

export function conjecturesToConjecturesJSON(conjectures) {
  const conjecturesJSON = conjectures.map((conjecture) => {
    const conjectureJSON = conjecture.toJSON();

    conjecture = conjectureJSON; ///

    return conjecture;
  });

  return conjecturesJSON;
}

export function combinatorsToCombinatorsJSON(combinators) {
  const combinatorsJSON = combinators.map((combinator) => {
    const combinatorJSON = combinator.toJSON();

    combinator = combinatorJSON; ///

    return combinator;
  });

  return combinatorsJSON;
}

export function suppositionsToSuppositionsJSON(suppositions) {
  const suppositionsJSON = suppositions.map((supposition) => {
    const suppositionJSON = supposition.toJSON();

    return suppositionJSON;
  });

  return suppositionsJSON;
}

export function constructorsToConstructorsJSON(constructors) {
  const constructorsJSON = constructors.map((constructor) => {
    const constructorJSON = constructor.toJSON();

    constructor = constructorJSON;  ///

    return constructor;
  });

  return constructorsJSON;
}

export function metatheoremsToMetatheoremsJSON(metatheorems) {
  const metatheoremsJSON = metatheorems.map((metatheorem) => {
    const metatheoremJSON = metatheorem.toJSON();

    metatheorem = metatheoremJSON; ///

    return metatheorem;
  });

  return metatheoremsJSON;
}

export function substitutionsToSubstitutionsJSON(substitutions) {
  const substitutionsJSON = substitutions.mapSubstitution((substitution) => {
    const substitutionJSON = substitution.toJSON();

    return substitutionJSON;
  });

  return substitutionsJSON;
}

export function metavariablesToMetavariablesJSON(metavariables) {
  const metavariablesJSON = metavariables.map((metavariable) => {
    const metavariableJSON = metavariable.toJSON();

    metavariable = metavariableJSON;  ///

    return metavariable;
  });

  return metavariablesJSON;
}
