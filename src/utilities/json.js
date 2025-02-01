"use strict";

import dom from "../dom";
import StatementSubstitution from "../substitution/statement";

export function termFromJSON(json, fileContext) {
  let { term } = json;

  const termJSON = term;  ///

  json = termJSON;  ///

  const { Term } = dom;

  term = Term.fromJSON(json, fileContext);

  return term;
}

export function typeFromJSON(json, fileContext) {
  let { type } = json;

  if (type !== null) {
    const { name } = type,
          typeName = name;  ///

    type = fileContext.findTypeByTypeName(typeName);
  }

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

export function statementFromJSON(json, fileContext) {
  let { statement = null } = json;

  if (statement !== null) {
    const { Statement } = dom,
          statementJSON = statement;  ///

    json = statementJSON; ///

    statement = Statement.fromJSON(json, fileContext);
  }

  return statement;
}

export function referenceFromJSON(json, fileContext) {
  let { reference } = json;

  const { Reference } = dom,
        referenceJSON = reference;  ///

  json = referenceJSON;  ///

  reference = Reference.fromJSON(json, fileContext);

  return reference;
}

export function conclusionFromJSON(json, fileContext) {
  let { conclusion } = json;

  const { Conclusion } = dom,
        conclusionJSON = conclusion;  ///

  json = conclusionJSON;  ///

  conclusion = Conclusion.fromJSON(json, fileContext);

  return conclusion;
}

export function deductionFromJSON(json, fileContext) {
  let { deduction } = json;

  const { Deduction } = dom,
        deductionJSON = deduction;  ///

  json = deductionJSON;  ///

  deduction = Deduction.fromJSON(json, fileContext);

  return deduction;
}

export function metavariableFromJSON(json, fileContext) {
  let { metavariable } = json;

  const { Metavariable } = dom,
        metavariableJSON = metavariable;  ///

  json = metavariableJSON; ///

  metavariable = Metavariable.fromJSON(json, fileContext);

  return metavariable;
}

export function procedureCallFromJSON(json, fileContext) {
  let { procedureCall = null } = json;

  if (procedureCall !== null) {
    const { ProcedureCall } = dom,
          procedureCallJSON = procedureCall;  ///

    json = procedureCallJSON; ///

    procedureCall = ProcedureCall.fromJSON(json, fileContext);
  }

  return procedureCall;
}

export function typesFromJSON(json, types, fileContext) {
  const { types: typesJSON } = json;

  const { Type } = dom;

  typesJSON.forEach((typeJSON) => {
    const json = typeJSON,  ///
          type = Type.fromJSON(json, fileContext);

    types.push(type);
  });
}

export function rulesFromJSON(json, fileContext) {
  let { rules } = json;

  const { Rule } = dom,
        rulesJSON = rules; ///

  rules = rulesJSON.map((ruleJSON) => {
    const json = ruleJSON,  ///
          rule = Rule.fromJSON(json, fileContext);

    return rule;
  });

  return rules;
}

export function labelsFromJSON(json, fileContext) {
  let { labels } = json;

  const { Label } = dom,
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

  const { Axiom } = dom,
        axiomsJSON = axioms; ///

  axioms = axiomsJSON.map((axiomJSON) => {
    const json = axiomJSON,  ///
          axiom = Axiom.fromJSON(json, fileContext);

    return axiom;
  });

  return axioms;
}

export function premisesFromJSON(json, fileContext) {
  let { premises } = json;

  const { Premise } = dom,
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

  const { Theorem } = dom,
        theoremsJSON = theorems; ///

  theorems = theoremsJSON.map((theoremJSON) => {
    const json = theoremJSON,  ///
          theorem = Theorem.fromJSON(json, fileContext);

    return theorem;
  });

  return theorems;
}

export function variablesFromJSON(json, fileContext) {
  let { variables } = json;

  const { Variable } = dom,
        variablesJSON = variables; ///

  variables = variablesJSON.map((variableJSON) => {
    const json = variableJSON,  ///
          variable = Variable.fromJSON(json, fileContext);

    return variable;
  });

  return variables;
}

export function propertiesFromJSON(json, fileContext) {
  let { properties } = json;

  const { Property } = dom,
        propertiesJSON = properties; ///

  properties = propertiesJSON.map((propertyJSON) => {
    const json = propertyJSON,  ///
          property = Property.fromJSON(json, fileContext);

    return property;
  });

  return properties;
}

export function superTypesFromJSON(json, fileContext) {
  const { superTypes: superTypesJSON } = json;

  const superTypes = superTypesJSON.map((superTypeJSON) => {
          const json = superTypeJSON,  ///
                { name } = json,
                superTypeName = name,  ///
                superType = fileContext.findTypeByTypeName(superTypeName);

          return superType;
        });

  return superTypes;
}

export function parametersFromJSON(json, fileContext) {
  let { parameters } = json;

  const { Parameter } = dom,
        parametersJSON = parameters; ///

  parameters = parametersJSON.map((parameterJSON) => {
    const json = parameterJSON,  ///
          parameter = Parameter.fromJSON(json, fileContext);

    return parameter;
  });

  return parameters;
}

export function conjecturesFromJSON(json, fileContext) {
  let { conjectures } = json;

  const { Conjecture } = dom,
        conjecturesJSON = conjectures; ///

  conjectures = conjecturesJSON.map((conjectureJSON) => {
    const json = conjectureJSON,  ///
          conjecture = Conjecture.fromJSON(json, fileContext);

    return conjecture;
  });

  return conjectures;
}

export function combinatorsFromJSON(json, fileContext) {
  let { combinators } = json;

  const { Combinator } = dom,
        combinatorsJSON = combinators; ///

  combinators = combinatorsJSON.map((combinatorJSON) => {
    const json = combinatorJSON,  ///
          combinator = Combinator.fromJSON(json, fileContext);

    return combinator;
  });

  return combinators;
}

export function constructorsFromJSON(json, fileContext) {
  let { constructors } = json;

  const { Constructor } = dom,
        constructorsJSON = constructors; ///

  constructors = constructorsJSON.map((constructorJSON) => {
    const json = constructorJSON,  ///
          constructor = Constructor.fromJSON(json, fileContext);

    return constructor;
  });

  return constructors;
}

export function metatheoremsFromJSON(json, fileContext) {
  let { metatheorems } = json;

  const { Metatheorem } = dom,
        metatheoremsJSON = metatheorems; ///

  metatheorems = metatheoremsJSON.map((metatheoremJSON) => {
    const json = metatheoremJSON,  ///
          metatheorem = Metatheorem.fromJSON(json, fileContext);

    return metatheorem;
  });

  return metatheorems;
}

export function suppositionsFromJSON(json, fileContext) {
  let { suppositions } = json;

  const { Supposition } = dom,
        suppositionsJSON = suppositions;  ///

  suppositions = suppositionsJSON.map((suppositionJSON) => {
    const json = suppositionJSON, ///
          supposition = Supposition.fromJSON(json, fileContext);

    return supposition;
  });

  return suppositions;
}

export function substitutionsFromJSON(json, fileContext) {
  let { substitutions = [] } = json;  ///

  const substitutionsJSON = substitutions,  ///
        Substitution = StatementSubstitution; ///

  substitutions = substitutionsJSON.map((substitutionJSON) => {
    const json = substitutionJSON,  ///
          substitution = Substitution.fromJSON(json, fileContext);

    return substitution;
  });

  return substitutions;
}

export function metavariablesFromJSON(json, fileContext) {
  let { metavariables } = json;

  const { Metavariable } = dom,
        metavariablesJSON = metavariables; ///

  metavariables = metavariablesJSON.map((metavariableJSON) => {
    const json = metavariableJSON,  ///
          metavariable = Metavariable.fromJSON(json, fileContext);

    return metavariable;
  });

  return metavariables;
}

export function lemmasFromNothing() {
  const lemmas = [];

  return lemmas;
}

export function metaLemmasFromNothing() {
  const metaLemmas = [];

  return metaLemmas;
}

export function termToTermJSON(term) {
  const termJSON = term.toJSON();

  return termJSON;
}

export function typeToTypeJSON(type) {
  const typeJSON = (type !== null) ?
                     type.toJSON() :
                       null;

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
  let statementJSON = null;

  if (statement !== null) {
    statementJSON = statement.toJSON();
  }

  return statementJSON;
}

export function conclusionToConclusionJSON(conclusion) {
  const conclusionJSON = conclusion.toJSON();

  return conclusionJSON;
}

export function deductionToDeductionJSON(deduction) {
  const deductionJSON = deduction.toJSON();

  return deductionJSON;
}

export function metavariableToMetavariableJSON(metavariable) {
  const metavariableJSON = metavariable.toJSON();

  return metavariableJSON;
}

export function procedureCallToProcedureCallJSON(procedureCall) {
  let procedureCallJSON = null;

  if (procedureCall !== null) {
    procedureCallJSON = procedureCall.toJSON();
  }

  return procedureCallJSON;
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

export function superTypesToSuperTypesJSON(superTypes) {
  const superTypesJSON = superTypes.map((superType) => {
    const superTypeJSON = superType.toJSON();

    superType = superTypeJSON; ///

    return superType;
  });

  return superTypesJSON;
}

export function parametersToParametersJSON(parameters) {
  const parametersJSON = parameters.map((parameter) => {
    const parameterJSON = parameter.toJSON();

    parameter = parameterJSON;  ///

    return parameter;
  });

  return parametersJSON;
}

export function propertiesToPropertiesJSON(properties) {
  const propertiesJSON = properties.map((property) => {
    const propertyJSON = property.toJSON();

    property = propertyJSON;  ///

    return property;
  });

  return propertiesJSON;
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
