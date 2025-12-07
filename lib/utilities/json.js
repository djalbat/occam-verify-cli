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
    get axiomsFromJSON () {
        return axiomsFromJSON;
    },
    get axiomsToAxiomsJSON () {
        return axiomsToAxiomsJSON;
    },
    get combinatorsFromJSON () {
        return combinatorsFromJSON;
    },
    get combinatorsToCombinatorsJSON () {
        return combinatorsToCombinatorsJSON;
    },
    get conclusionFromJSON () {
        return conclusionFromJSON;
    },
    get conclusionToConclusionJSON () {
        return conclusionToConclusionJSON;
    },
    get conjecturesFromJSON () {
        return conjecturesFromJSON;
    },
    get conjecturesToConjecturesJSON () {
        return conjecturesToConjecturesJSON;
    },
    get constructorsFromJSON () {
        return constructorsFromJSON;
    },
    get constructorsToConstructorsJSON () {
        return constructorsToConstructorsJSON;
    },
    get deductionFromJSON () {
        return deductionFromJSON;
    },
    get deductionToDeductionJSON () {
        return deductionToDeductionJSON;
    },
    get hypothesesFromJSON () {
        return hypothesesFromJSON;
    },
    get hypothesesToHypothesesJSON () {
        return hypothesesToHypothesesJSON;
    },
    get labelFromJSON () {
        return labelFromJSON;
    },
    get labelToLabelJSON () {
        return labelToLabelJSON;
    },
    get labelsFromJSON () {
        return labelsFromJSON;
    },
    get labelsToLabelsJSON () {
        return labelsToLabelsJSON;
    },
    get lemmasFromNothing () {
        return lemmasFromNothing;
    },
    get metaLemmasFromNothing () {
        return metaLemmasFromNothing;
    },
    get metaTypeFromJSON () {
        return metaTypeFromJSON;
    },
    get metaTypeToMetaTypeJSON () {
        return metaTypeToMetaTypeJSON;
    },
    get metatheoremsFromJSON () {
        return metatheoremsFromJSON;
    },
    get metatheoremsToMetatheoremsJSON () {
        return metatheoremsToMetatheoremsJSON;
    },
    get metavariableFromJSON () {
        return metavariableFromJSON;
    },
    get metavariableToMetavariableJSON () {
        return metavariableToMetavariableJSON;
    },
    get metavariablesFromJSON () {
        return metavariablesFromJSON;
    },
    get metavariablesToMetavariablesJSON () {
        return metavariablesToMetavariablesJSON;
    },
    get parametersFromJSON () {
        return parametersFromJSON;
    },
    get parametersToParametersJSON () {
        return parametersToParametersJSON;
    },
    get premisesFromJSON () {
        return premisesFromJSON;
    },
    get premisesToPremisesJSON () {
        return premisesToPremisesJSON;
    },
    get procedureCallFromJSON () {
        return procedureCallFromJSON;
    },
    get procedureCallToProcedureCallJSON () {
        return procedureCallToProcedureCallJSON;
    },
    get procedureReferenceFromJSON () {
        return procedureReferenceFromJSON;
    },
    get procedureReferenceToProcedureReferenceJSON () {
        return procedureReferenceToProcedureReferenceJSON;
    },
    get propertiesFromJSON () {
        return propertiesFromJSON;
    },
    get propertiesToPropertiesJSON () {
        return propertiesToPropertiesJSON;
    },
    get rulesFromJSON () {
        return rulesFromJSON;
    },
    get rulesToRulesJSON () {
        return rulesToRulesJSON;
    },
    get signatureFromJSON () {
        return signatureFromJSON;
    },
    get signatureToSignatureJSON () {
        return signatureToSignatureJSON;
    },
    get statementFromJSON () {
        return statementFromJSON;
    },
    get statementToStatementJSON () {
        return statementToStatementJSON;
    },
    get substitutionsFromJSON () {
        return substitutionsFromJSON;
    },
    get substitutionsToSubstitutionsJSON () {
        return substitutionsToSubstitutionsJSON;
    },
    get superTypesFromJSON () {
        return superTypesFromJSON;
    },
    get superTypesToSuperTypesJSON () {
        return superTypesToSuperTypesJSON;
    },
    get suppositionsFromJSON () {
        return suppositionsFromJSON;
    },
    get suppositionsToSuppositionsJSON () {
        return suppositionsToSuppositionsJSON;
    },
    get termFromJSON () {
        return termFromJSON;
    },
    get termToTermJSON () {
        return termToTermJSON;
    },
    get termsFromJSON () {
        return termsFromJSON;
    },
    get termsToTermsJSON () {
        return termsToTermsJSON;
    },
    get theoremsFromJSON () {
        return theoremsFromJSON;
    },
    get theoremsToTheoremsJSON () {
        return theoremsToTheoremsJSON;
    },
    get typeFromJSON () {
        return typeFromJSON;
    },
    get typePrefixesFromJSON () {
        return typePrefixesFromJSON;
    },
    get typePrefixesToTypePrefixesJSON () {
        return typePrefixesToTypePrefixesJSON;
    },
    get typeToTypeJSON () {
        return typeToTypeJSON;
    },
    get typesFromJSON () {
        return typesFromJSON;
    },
    get typesToTypesJSON () {
        return typesToTypesJSON;
    },
    get variablesFromJSON () {
        return variablesFromJSON;
    },
    get variablesToVariablesJSON () {
        return variablesToVariablesJSON;
    }
});
var _ontology = /*#__PURE__*/ _interop_require_default(require("../ontology"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termFromJSON(json, context) {
    var term = json.term;
    var termJSON = term; ///
    json = termJSON; ///
    var Term = _ontology.default.Term;
    term = Term.fromJSON(json, context);
    return term;
}
function typeFromJSON(json, context) {
    var type = json.type;
    if (type !== null) {
        json = type; ///
        var name = json.name, prefixName = json.prefixName, nominalTypeName = prefixName !== null ? "".concat(prefixName).concat(name) : name; ///
        type = context.findTypeByNominalTypeName(nominalTypeName);
    }
    return type;
}
function metaTypeFromJSON(json, context) {
    var metaType = json.metaType;
    if (metaType !== null) {
        json = metaType; ///
        var name = json.name, metaTypeName = name; ///
        metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
    }
    return metaType;
}
function statementFromJSON(json, context) {
    var _json_statement = json.statement, statement = _json_statement === void 0 ? null : _json_statement;
    if (statement !== null) {
        var Statement = _ontology.default.Statement, statementJSON = statement; ///
        json = statementJSON; ///
        statement = Statement.fromJSON(json, context);
    }
    return statement;
}
function deductionFromJSON(json, context) {
    var deduction = json.deduction;
    var Deduction = _ontology.default.Deduction, deductionJSON = deduction; ///
    json = deductionJSON; ///
    deduction = Deduction.fromJSON(json, context);
    return deduction;
}
function signatureFromJSON(json, context) {
    var _json_signature = json.signature, signature = _json_signature === void 0 ? null : _json_signature;
    if (signature !== null) {
        var Signature = _ontology.default.Signature, signatureJSON = signature; ///
        json = signatureJSON; ///
        signature = Signature.fromJSON(json, context);
    }
    return signature;
}
function conclusionFromJSON(json, context) {
    var conclusion = json.conclusion;
    var Conclusion = _ontology.default.Conclusion, conclusionJSON = conclusion; ///
    json = conclusionJSON; ///
    conclusion = Conclusion.fromJSON(json, context);
    return conclusion;
}
function metavariableFromJSON(json, context) {
    var metavariable = json.metavariable;
    var Metavariable = _ontology.default.Metavariable, metavariableJSON = metavariable; ///
    json = metavariableJSON; ///
    metavariable = Metavariable.fromJSON(json, context);
    return metavariable;
}
function procedureCallFromJSON(json, context) {
    var _json_procedureCall = json.procedureCall, procedureCall = _json_procedureCall === void 0 ? null : _json_procedureCall;
    if (procedureCall !== null) {
        var ProcedureCall = _ontology.default.ProcedureCall, procedureCallJSON = procedureCall; ///
        json = procedureCallJSON; ///
        procedureCall = ProcedureCall.fromJSON(json, context);
    }
    return procedureCall;
}
function procedureReferenceFromJSON(json, context) {
    var procedureReference = json.procedureReference;
    var ProcedureReference = _ontology.default.ProcedureReference, procedureReferenceJSON = procedureReference; ///
    json = procedureReferenceJSON; ///
    procedureReference = ProcedureReference.fromJSON(json, context);
    return procedureReference;
}
function typesFromJSON(json, types, context) {
    var typesJSON = json.types;
    var Type = _ontology.default.Type;
    typesJSON.forEach(function(typeJSON) {
        var _$json = typeJSON, type = Type.fromJSON(_$json, context);
        types.push(type);
    });
}
function termsFromJSON(json, context) {
    var terms = json.terms;
    var Term = _ontology.default.Term, termsJSON = terms; ///
    terms = termsJSON.map(function(termJSON) {
        var _$json = termJSON, term = Term.fromJSON(_$json, context);
        return term;
    });
    return terms;
}
function rulesFromJSON(json, context) {
    var rules = json.rules;
    var Rule = _ontology.default.Rule, rulesJSON = rules; ///
    rules = rulesJSON.map(function(ruleJSON) {
        var _$json = ruleJSON, rule = Rule.fromJSON(_$json, context);
        return rule;
    });
    return rules;
}
function labelFromJSON(json, context) {
    var label = json.label;
    var Label = _ontology.default.Label, labelJSON = label; ///
    json = labelJSON; ///
    label = Label.fromJSON(json, context);
    return label;
}
function labelsFromJSON(json, context) {
    var labels = json.labels;
    var Label = _ontology.default.Label, labelsJSON = labels; ///
    labels = labelsJSON.map(function(labelJSON) {
        var _$json = labelJSON, label = Label.fromJSON(_$json, context);
        return label;
    });
    return labels;
}
function axiomsFromJSON(json, context) {
    var axioms = json.axioms;
    var Axiom = _ontology.default.Axiom, axiomsJSON = axioms; ///
    axioms = axiomsJSON.map(function(axiomJSON) {
        var _$json = axiomJSON, axiom = Axiom.fromJSON(_$json, context);
        return axiom;
    });
    return axioms;
}
function premisesFromJSON(json, context) {
    var premises = json.premises;
    var Premise = _ontology.default.Premise, premisesJSON = premises; ///
    premises = premisesJSON.map(function(premiseJSON) {
        var _$json = premiseJSON, premise = Premise.fromJSON(_$json, context);
        return premise;
    });
    return premises;
}
function theoremsFromJSON(json, context) {
    var theorems = json.theorems;
    var Theorem = _ontology.default.Theorem, theoremsJSON = theorems; ///
    theorems = theoremsJSON.map(function(theoremJSON) {
        var _$json = theoremJSON, theorem = Theorem.fromJSON(_$json, context);
        return theorem;
    });
    return theorems;
}
function variablesFromJSON(json, context) {
    var variables = json.variables;
    var Variable = _ontology.default.Variable, variablesJSON = variables; ///
    variables = variablesJSON.map(function(variableJSON) {
        var _$json = variableJSON, variable = Variable.fromJSON(_$json, context);
        return variable;
    });
    return variables;
}
function propertiesFromJSON(json, context) {
    var properties = json.properties;
    var Property = _ontology.default.Property, propertiesJSON = properties; ///
    properties = propertiesJSON.map(function(propertyJSON) {
        var _$json = propertyJSON, property = Property.fromJSON(_$json, context);
        return property;
    });
    return properties;
}
function superTypesFromJSON(json, context) {
    var superTypesJSON = json.superTypes;
    var superTypes = superTypesJSON.map(function(superTypeJSON) {
        var _$json = superTypeJSON, name = _$json.name, prefixName = _$json.prefixName, nominalSuperTypeName = prefixName !== null ? "".concat(prefixName).concat(name) : name, superType = context.findTypeByNominalTypeName(nominalSuperTypeName);
        return superType;
    });
    return superTypes;
}
function hypothesesFromJSON(json, context) {
    var hypotheses = json.hypotheses;
    var Hypothesis = _ontology.default.Hypothesis, hypothesesJSON = hypotheses; ///
    hypotheses = hypothesesJSON.map(function(hypothesisJSON) {
        var _$json = hypothesisJSON, hypothesis = Hypothesis.fromJSON(_$json, context);
        return hypothesis;
    });
    return hypotheses;
}
function parametersFromJSON(json, context) {
    var parameters = json.parameters;
    var Parameter = _ontology.default.Parameter, parametersJSON = parameters; ///
    parameters = parametersJSON.map(function(parameterJSON) {
        var _$json = parameterJSON, parameter = Parameter.fromJSON(_$json, context);
        return parameter;
    });
    return parameters;
}
function conjecturesFromJSON(json, context) {
    var conjectures = json.conjectures;
    var Conjecture = _ontology.default.Conjecture, conjecturesJSON = conjectures; ///
    conjectures = conjecturesJSON.map(function(conjectureJSON) {
        var _$json = conjectureJSON, conjecture = Conjecture.fromJSON(_$json, context);
        return conjecture;
    });
    return conjectures;
}
function combinatorsFromJSON(json, context) {
    var combinators = json.combinators;
    var Combinator = _ontology.default.Combinator, combinatorsJSON = combinators; ///
    combinators = combinatorsJSON.map(function(combinatorJSON) {
        var _$json = combinatorJSON, combinator = Combinator.fromJSON(_$json, context);
        return combinator;
    });
    return combinators;
}
function typePrefixesFromJSON(json, context) {
    var typePrefixes = json.typePrefixes;
    var TypePrefix = _ontology.default.TypePrefix, typePrefixesJSON = typePrefixes; ///
    typePrefixes = typePrefixesJSON.map(function(typePrefixJSON) {
        var _$json = typePrefixJSON, typePrefix = TypePrefix.fromJSON(_$json, context);
        return typePrefix;
    });
    return typePrefixes;
}
function constructorsFromJSON(json, context) {
    var constructors = json.constructors;
    var Constructor = _ontology.default.Constructor, constructorsJSON = constructors; ///
    constructors = constructorsJSON.map(function(constructorJSON) {
        var _$json = constructorJSON, constructor = Constructor.fromJSON(_$json, context);
        return constructor;
    });
    return constructors;
}
function metatheoremsFromJSON(json, context) {
    var metatheorems = json.metatheorems;
    var Metatheorem = _ontology.default.Metatheorem, metatheoremsJSON = metatheorems; ///
    metatheorems = metatheoremsJSON.map(function(metatheoremJSON) {
        var _$json = metatheoremJSON, metatheorem = Metatheorem.fromJSON(_$json, context);
        return metatheorem;
    });
    return metatheorems;
}
function suppositionsFromJSON(json, context) {
    var suppositions = json.suppositions;
    var Supposition = _ontology.default.Supposition, suppositionsJSON = suppositions; ///
    suppositions = suppositionsJSON.map(function(suppositionJSON) {
        var _$json = suppositionJSON, supposition = Supposition.fromJSON(_$json, context);
        return supposition;
    });
    return suppositions;
}
function substitutionsFromJSON(json, context) {
    var _json_substitutions = json.substitutions, substitutions = _json_substitutions === void 0 ? [] : _json_substitutions; ///
    var StatementSubstitution = _ontology.default.StatementSubstitution, substitutionsJSON = substitutions, Substitution = StatementSubstitution; ///
    substitutions = substitutionsJSON.map(function(substitutionJSON) {
        var _$json = substitutionJSON, substitution = Substitution.fromJSON(_$json, context);
        return substitution;
    });
    return substitutions;
}
function metavariablesFromJSON(json, context) {
    var metavariables = json.metavariables;
    var Metavariable = _ontology.default.Metavariable, metavariablesJSON = metavariables; ///
    metavariables = metavariablesJSON.map(function(metavariableJSON) {
        var _$json = metavariableJSON, metavariable = Metavariable.fromJSON(_$json, context);
        return metavariable;
    });
    return metavariables;
}
function lemmasFromNothing() {
    var lemmas = [];
    return lemmas;
}
function metaLemmasFromNothing() {
    var metaLemmas = [];
    return metaLemmas;
}
function termToTermJSON(term) {
    var termJSON = term.toJSON();
    return termJSON;
}
function typeToTypeJSON(type) {
    var typeJSON = type !== null ? type.toJSON() : null;
    return typeJSON;
}
function labelToLabelJSON(label) {
    var labelJSON = label.toJSON();
    return labelJSON;
}
function metaTypeToMetaTypeJSON(metaType) {
    var metaTypeJSON = metaType !== null ? metaType.toJSON() : null;
    return metaTypeJSON;
}
function statementToStatementJSON(statement) {
    var statementJSON = statement !== null ? statement.toJSON() : null;
    return statementJSON;
}
function deductionToDeductionJSON(deduction) {
    var deductionJSON = deduction.toJSON();
    return deductionJSON;
}
function signatureToSignatureJSON(signature) {
    var signatureJSON = signature !== null ? signature.toJSON() : null;
    return signatureJSON;
}
function conclusionToConclusionJSON(conclusion) {
    var conclusionJSON = conclusion.toJSON();
    return conclusionJSON;
}
function metavariableToMetavariableJSON(metavariable) {
    var metavariableJSON = metavariable.toJSON();
    return metavariableJSON;
}
function procedureCallToProcedureCallJSON(procedureCall) {
    var procedureCallJSON = procedureCall !== null ? procedureCall.toJSON() : null;
    return procedureCallJSON;
}
function procedureReferenceToProcedureReferenceJSON(procedureReference) {
    var procedureReferenceJSON = procedureReference.toJSON();
    return procedureReferenceJSON;
}
function typesToTypesJSON(types) {
    var typesJSON = types.map(function(type) {
        var typeJSON = type.toJSON();
        type = typeJSON; ///
        return type;
    });
    return typesJSON;
}
function termsToTermsJSON(terms) {
    var termsJSON = terms.map(function(term) {
        var termJSON = term.toJSON();
        term = termJSON; ///
        return term;
    });
    return termsJSON;
}
function rulesToRulesJSON(rules) {
    var rulesJSON = rules.map(function(rule) {
        var ruleJSON = rule.toJSON();
        rule = ruleJSON; ///
        return rule;
    });
    return rulesJSON;
}
function labelsToLabelsJSON(labels) {
    var labelsJSON = labels.map(function(label) {
        var labelJSON = label.toJSON();
        return labelJSON;
    });
    return labelsJSON;
}
function axiomsToAxiomsJSON(axioms) {
    var axiomsJSON = axioms.map(function(axiom) {
        var axiomJSON = axiom.toJSON();
        axiom = axiomJSON; ///
        return axiom;
    });
    return axiomsJSON;
}
function premisesToPremisesJSON(premises) {
    var premisesJSON = premises.map(function(premise) {
        var premiseJSON = premise.toJSON();
        return premiseJSON;
    });
    return premisesJSON;
}
function theoremsToTheoremsJSON(theorems) {
    var theoremsJSON = theorems.map(function(theorem) {
        var theoremJSON = theorem.toJSON();
        theorem = theoremJSON; ///
        return theorem;
    });
    return theoremsJSON;
}
function variablesToVariablesJSON(variables) {
    var variablesJSON = variables.map(function(variable) {
        var variableJSON = variable.toJSON();
        variable = variableJSON; ///
        return variable;
    });
    return variablesJSON;
}
function hypothesesToHypothesesJSON(hypotheses) {
    var hypothesesJSON = hypotheses.map(function(hypothesis) {
        var hypothesisJSON = hypothesis.toJSON();
        hypothesis = hypothesisJSON; ///
        return hypothesis;
    });
    return hypothesesJSON;
}
function superTypesToSuperTypesJSON(superTypes) {
    var superTypesJSON = superTypes.map(function(superType) {
        var superTypeJSON = superType.toJSON();
        superType = superTypeJSON; ///
        return superType;
    });
    return superTypesJSON;
}
function parametersToParametersJSON(parameters) {
    var parametersJSON = parameters.map(function(parameter) {
        var parameterJSON = parameter.toJSON();
        parameter = parameterJSON; ///
        return parameter;
    });
    return parametersJSON;
}
function propertiesToPropertiesJSON(properties) {
    var propertiesJSON = properties.map(function(property) {
        var propertyJSON = property.toJSON();
        property = propertyJSON; ///
        return property;
    });
    return propertiesJSON;
}
function typePrefixesToTypePrefixesJSON(typePrefixes) {
    var typePrefixesJSON = typePrefixes.map(function(typePrefix) {
        var typePrefixJSON = typePrefix.toJSON();
        typePrefix = typePrefixJSON; ///
        return typePrefix;
    });
    return typePrefixesJSON;
}
function conjecturesToConjecturesJSON(conjectures) {
    var conjecturesJSON = conjectures.map(function(conjecture) {
        var conjectureJSON = conjecture.toJSON();
        conjecture = conjectureJSON; ///
        return conjecture;
    });
    return conjecturesJSON;
}
function combinatorsToCombinatorsJSON(combinators) {
    var combinatorsJSON = combinators.map(function(combinator) {
        var combinatorJSON = combinator.toJSON();
        combinator = combinatorJSON; ///
        return combinator;
    });
    return combinatorsJSON;
}
function suppositionsToSuppositionsJSON(suppositions) {
    var suppositionsJSON = suppositions.map(function(supposition) {
        var suppositionJSON = supposition.toJSON();
        return suppositionJSON;
    });
    return suppositionsJSON;
}
function constructorsToConstructorsJSON(constructors) {
    var constructorsJSON = constructors.map(function(constructor) {
        var constructorJSON = constructor.toJSON();
        constructor = constructorJSON; ///
        return constructor;
    });
    return constructorsJSON;
}
function metatheoremsToMetatheoremsJSON(metatheorems) {
    var metatheoremsJSON = metatheorems.map(function(metatheorem) {
        var metatheoremJSON = metatheorem.toJSON();
        metatheorem = metatheoremJSON; ///
        return metatheorem;
    });
    return metatheoremsJSON;
}
function substitutionsToSubstitutionsJSON(substitutions) {
    var substitutionsJSON = substitutions.mapSubstitution(function(substitution) {
        var substitutionJSON = substitution.toJSON();
        return substitutionJSON;
    });
    return substitutionsJSON;
}
function metavariablesToMetavariablesJSON(metavariables) {
    var metavariablesJSON = metavariables.map(function(metavariable) {
        var metavariableJSON = metavariable.toJSON();
        metavariable = metavariableJSON; ///
        return metavariable;
    });
    return metavariablesJSON;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGVybSB9ID0ganNvbjtcblxuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICBqc29uID0gdGVybUpTT047ICAvLy9cblxuICBjb25zdCB7IFRlcm0gfSA9IG9udG9sb2d5O1xuXG4gIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSB0eXBlOyAgLy8vXG5cbiAgICBjb25zdCB7IG5hbWUsIHByZWZpeE5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gKHByZWZpeE5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhOYW1lfSR7bmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOyAvLy9cblxuICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSBtZXRhVHlwZTsgIC8vL1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnQgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudDsgIC8vL1xuXG4gICAganNvbiA9IHN0YXRlbWVudEpTT047IC8vL1xuXG4gICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZGVkdWN0aW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRGVkdWN0aW9uIH0gPSBvbnRvbG9neSxcbiAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvbjsgIC8vL1xuXG4gIGpzb24gPSBkZWR1Y3Rpb25KU09OOyAgLy8vXG5cbiAgZGVkdWN0aW9uID0gRGVkdWN0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHNpZ25hdHVyZSA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHNpZ25hdHVyZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICBzaWduYXR1cmVKU09OID0gc2lnbmF0dXJlOyAgLy8vXG5cbiAgICBqc29uID0gc2lnbmF0dXJlSlNPTjsgLy8vXG5cbiAgICBzaWduYXR1cmUgPSBTaWduYXR1cmUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb2NlZHVyZUNhbGwgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGw7ICAvLy9cblxuICAgIGpzb24gPSBwcm9jZWR1cmVDYWxsSlNPTjsgLy8vXG5cbiAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcm9jZWR1cmVSZWZlcmVuY2UgfSA9IG9udG9sb2d5LFxuICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2VKU09OID0gcHJvY2VkdXJlUmVmZXJlbmNlOyAgLy8vXG5cbiAganNvbiA9IHByb2NlZHVyZVJlZmVyZW5jZUpTT047ICAvLy9cblxuICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBQcm9jZWR1cmVSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzRnJvbUpTT04oanNvbiwgdHlwZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyB0eXBlczogdHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZSB9ID0gb250b2xvZ3k7XG5cbiAgdHlwZXNKU09OLmZvckVhY2goKHR5cGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0ZXJtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRlcm0gfSA9IG9udG9sb2d5LFxuICAgICAgICB0ZXJtc0pTT04gPSB0ZXJtczsgLy8vXG5cbiAgdGVybXMgPSB0ZXJtc0pTT04ubWFwKCh0ZXJtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBydWxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFJ1bGUgfSA9IG9udG9sb2d5LFxuICAgICAgICBydWxlc0pTT04gPSBydWxlczsgLy8vXG5cbiAgcnVsZXMgPSBydWxlc0pTT04ubWFwKChydWxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBydWxlSlNPTiwgIC8vL1xuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbCB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBvbnRvbG9neSxcbiAgICAgICAgbGFiZWxKU09OID0gbGFiZWw7ICAvLy9cblxuICBqc29uID0gbGFiZWxKU09OOyAvLy9cblxuICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IG9udG9sb2d5LFxuICAgICAgICBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGF4aW9tcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEF4aW9tIH0gPSBvbnRvbG9neSxcbiAgICAgICAgYXhpb21zSlNPTiA9IGF4aW9tczsgLy8vXG5cbiAgYXhpb21zID0gYXhpb21zSlNPTi5tYXAoKGF4aW9tSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBheGlvbUpTT04sICAvLy9cbiAgICAgICAgICBheGlvbSA9IEF4aW9tLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByZW1pc2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gb250b2xvZ3ksXG4gICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzOyAgLy8vXG5cbiAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcmVtaXNlSlNPTiwgLy8vXG4gICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVGhlb3JlbSB9ID0gb250b2xvZ3ksXG4gICAgICAgIHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zOyAvLy9cblxuICB0aGVvcmVtcyA9IHRoZW9yZW1zSlNPTi5tYXAoKHRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgIHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXM7IC8vL1xuXG4gIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0pTT04ubWFwKCh2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb3BlcnRpZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcm9wZXJ0eSB9ID0gb250b2xvZ3ksXG4gICAgICAgIHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllczsgLy8vXG5cbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNKU09OLm1hcCgocHJvcGVydHlKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByb3BlcnR5SlNPTiwgIC8vL1xuICAgICAgICAgIHByb3BlcnR5ID0gUHJvcGVydHkuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBzdXBlclR5cGVzOiBzdXBlclR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0pTT04ubWFwKChzdXBlclR5cGVKU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IHN1cGVyVHlwZUpTT04sICAvLy9cbiAgICAgICAgICAgICAgICB7IG5hbWUsIHByZWZpeE5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgbm9taW5hbFN1cGVyVHlwZU5hbWUgPSAocHJlZml4TmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhOYW1lfSR7bmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxTdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgaHlwb3RoZXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEh5cG90aGVzaXMgfSA9IG9udG9sb2d5LFxuICAgICAgICBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXM7ICAvLy9cblxuICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0pTT04ubWFwKChoeXBvdGhlc2lzSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBoeXBvdGhlc2lzSlNPTiwgLy8vXG4gICAgICAgICAgaHlwb3RoZXNpcyA9IEh5cG90aGVzaXMuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwYXJhbWV0ZXJzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBvbnRvbG9neSxcbiAgICAgICAgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzOyAvLy9cblxuICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0pTT04ubWFwKChwYXJhbWV0ZXJKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHBhcmFtZXRlckpTT04sICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25qZWN0dXJlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IG9udG9sb2d5LFxuICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlczsgLy8vXG5cbiAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04ubWFwKChjb25qZWN0dXJlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb21iaW5hdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IG9udG9sb2d5LFxuICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9yczsgLy8vXG5cbiAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04ubWFwKChjb21iaW5hdG9ySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb21iaW5hdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZVByZWZpeGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZVByZWZpeCB9ID0gb250b2xvZ3ksXG4gICAgICAgIHR5cGVQcmVmaXhlc0pTT04gPSB0eXBlUHJlZml4ZXM7IC8vL1xuXG4gIHR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlc0pTT04ubWFwKCh0eXBlUHJlZml4SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0eXBlUHJlZml4SlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXggPSBUeXBlUHJlZml4LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlUHJlZml4ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbnN0cnVjdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBvbnRvbG9neSxcbiAgICAgICAgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9yczsgLy8vXG5cbiAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzSlNPTi5tYXAoKGNvbnN0cnVjdG9ySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb25zdHJ1Y3RvckpTT04sICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdGhlb3JlbSB9ID0gb250b2xvZ3ksXG4gICAgICAgIG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXM7IC8vL1xuXG4gIG1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtc0pTT04ubWFwKChtZXRhdGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBNZXRhdGhlb3JlbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3VwcG9zaXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTi5tYXAoKHN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdWJzdGl0dXRpb25zID0gW10gfSA9IGpzb247ICAvLy9cblxuICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucywgIC8vL1xuICAgICAgICBTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb247IC8vL1xuXG4gIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3Vic3RpdHV0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IFN1YnN0aXR1dGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlczsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNKU09OLm1hcCgobWV0YXZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVRvVGVybUpTT04odGVybSkge1xuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgcmV0dXJuIHRlcm1KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVRvVHlwZUpTT04odHlwZSkge1xuICBjb25zdCB0eXBlSlNPTiA9ICh0eXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0eXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsVG9MYWJlbEpTT04obGFiZWwpIHtcbiAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgcmV0dXJuIGxhYmVsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04obWV0YVR5cGUpIHtcbiAgY29uc3QgbWV0YVR5cGVKU09OID0gKG1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgcmV0dXJuIG1ldGFUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTihzdGF0ZW1lbnQpIHtcbiAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IChzdGF0ZW1lbnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50LnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKGRlZHVjdGlvbikge1xuICBjb25zdCBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHNpZ25hdHVyZSkge1xuICBjb25zdCBzaWduYXR1cmVKU09OID0gKHNpZ25hdHVyZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTihjb25jbHVzaW9uKSB7XG4gIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbi50b0pTT04oKTtcblxuICByZXR1cm4gY29uY2x1c2lvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04obWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTihwcm9jZWR1cmVDYWxsKSB7XG4gIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gKHByb2NlZHVyZUNhbGwgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZHVyZUNhbGwudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTihwcm9jZWR1cmVSZWZlcmVuY2UpIHtcbiAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlSlNPTiA9IHByb2NlZHVyZVJlZmVyZW5jZS50b0pTT04oKTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzVG9UeXBlc0pTT04odHlwZXMpIHtcbiAgY29uc3QgdHlwZXNKU09OID0gdHlwZXMubWFwKCh0eXBlKSA9PiB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTigpO1xuXG4gICAgdHlwZSA9IHR5cGVKU09OOyAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9KTtcblxuICByZXR1cm4gdHlwZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcykge1xuICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtcy5tYXAoKHRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgICB0ZXJtID0gdGVybUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc1RvUnVsZXNKU09OKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVzSlNPTiA9IHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKGh5cG90aGVzZXMpIHtcbiAgY29uc3QgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzLm1hcCgoaHlwb3RoZXNpcykgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXNKU09OID0gaHlwb3RoZXNpcy50b0pTT04oKTtcblxuICAgIGh5cG90aGVzaXMgPSBoeXBvdGhlc2lzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04oc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlO1xuICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTihwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlckpTT04gPSBwYXJhbWV0ZXIudG9KU09OKCk7XG5cbiAgICBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTihwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlKU09OID0gcHJvcGVydHkudG9KU09OKCk7XG5cbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5SlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04odHlwZVByZWZpeGVzKSB7XG4gIGNvbnN0IHR5cGVQcmVmaXhlc0pTT04gPSB0eXBlUHJlZml4ZXMubWFwKCh0eXBlUHJlZml4KSA9PiB7XG4gICAgY29uc3QgdHlwZVByZWZpeEpTT04gPSB0eXBlUHJlZml4LnRvSlNPTigpO1xuXG4gICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhKU09OOyAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04oY29uamVjdHVyZXMpIHtcbiAgY29uc3QgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTigpO1xuXG4gICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTihjb21iaW5hdG9ycykge1xuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKCk7XG5cbiAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04oc3VwcG9zaXRpb25zKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04oY29uc3RydWN0b3JzKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTigpO1xuXG4gICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04obWV0YXRoZW9yZW1zKSB7XG4gIGNvbnN0IG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXMubWFwKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLm1hcFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTihtZXRhdmFyaWFibGVzKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG4iXSwibmFtZXMiOlsiYXhpb21zRnJvbUpTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwiaHlwb3RoZXNlc0Zyb21KU09OIiwiaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04iLCJsYWJlbEZyb21KU09OIiwibGFiZWxUb0xhYmVsSlNPTiIsImxhYmVsc0Zyb21KU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhVHlwZUZyb21KU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJydWxlc0Zyb21KU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsInNpZ25hdHVyZUZyb21KU09OIiwic2lnbmF0dXJlVG9TaWduYXR1cmVKU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiIsInN1cGVyVHlwZXNGcm9tSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJ0ZXJtRnJvbUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsInRlcm1zRnJvbUpTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwidGhlb3JlbXNGcm9tSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ0eXBlRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNGcm9tSlNPTiIsInR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTiIsInR5cGVUb1R5cGVKU09OIiwidHlwZXNGcm9tSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImpzb24iLCJjb250ZXh0IiwidGVybSIsInRlcm1KU09OIiwiVGVybSIsIm9udG9sb2d5IiwiZnJvbUpTT04iLCJ0eXBlIiwibmFtZSIsInByZWZpeE5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwibWV0YVR5cGUiLCJtZXRhVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsInN0YXRlbWVudCIsIlN0YXRlbWVudCIsInN0YXRlbWVudEpTT04iLCJkZWR1Y3Rpb24iLCJEZWR1Y3Rpb24iLCJkZWR1Y3Rpb25KU09OIiwic2lnbmF0dXJlIiwiU2lnbmF0dXJlIiwic2lnbmF0dXJlSlNPTiIsImNvbmNsdXNpb24iLCJDb25jbHVzaW9uIiwiY29uY2x1c2lvbkpTT04iLCJtZXRhdmFyaWFibGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVKU09OIiwicHJvY2VkdXJlQ2FsbCIsIlByb2NlZHVyZUNhbGwiLCJwcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZSIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZVJlZmVyZW5jZUpTT04iLCJ0eXBlcyIsInR5cGVzSlNPTiIsIlR5cGUiLCJmb3JFYWNoIiwidHlwZUpTT04iLCJwdXNoIiwidGVybXMiLCJ0ZXJtc0pTT04iLCJtYXAiLCJydWxlcyIsIlJ1bGUiLCJydWxlc0pTT04iLCJydWxlSlNPTiIsInJ1bGUiLCJsYWJlbCIsIkxhYmVsIiwibGFiZWxKU09OIiwibGFiZWxzIiwibGFiZWxzSlNPTiIsImF4aW9tcyIsIkF4aW9tIiwiYXhpb21zSlNPTiIsImF4aW9tSlNPTiIsImF4aW9tIiwicHJlbWlzZXMiLCJQcmVtaXNlIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZUpTT04iLCJwcmVtaXNlIiwidGhlb3JlbXMiLCJUaGVvcmVtIiwidGhlb3JlbXNKU09OIiwidGhlb3JlbUpTT04iLCJ0aGVvcmVtIiwidmFyaWFibGVzIiwiVmFyaWFibGUiLCJ2YXJpYWJsZXNKU09OIiwidmFyaWFibGVKU09OIiwidmFyaWFibGUiLCJwcm9wZXJ0aWVzIiwiUHJvcGVydHkiLCJwcm9wZXJ0aWVzSlNPTiIsInByb3BlcnR5SlNPTiIsInByb3BlcnR5Iiwic3VwZXJUeXBlcyIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlSlNPTiIsIm5vbWluYWxTdXBlclR5cGVOYW1lIiwic3VwZXJUeXBlIiwiaHlwb3RoZXNlcyIsIkh5cG90aGVzaXMiLCJoeXBvdGhlc2VzSlNPTiIsImh5cG90aGVzaXNKU09OIiwiaHlwb3RoZXNpcyIsInBhcmFtZXRlcnMiLCJQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJzSlNPTiIsInBhcmFtZXRlckpTT04iLCJwYXJhbWV0ZXIiLCJjb25qZWN0dXJlcyIsIkNvbmplY3R1cmUiLCJjb25qZWN0dXJlc0pTT04iLCJjb25qZWN0dXJlSlNPTiIsImNvbmplY3R1cmUiLCJjb21iaW5hdG9ycyIsIkNvbWJpbmF0b3IiLCJjb21iaW5hdG9yc0pTT04iLCJjb21iaW5hdG9ySlNPTiIsImNvbWJpbmF0b3IiLCJ0eXBlUHJlZml4ZXMiLCJUeXBlUHJlZml4IiwidHlwZVByZWZpeGVzSlNPTiIsInR5cGVQcmVmaXhKU09OIiwidHlwZVByZWZpeCIsImNvbnN0cnVjdG9ycyIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsImNvbnN0cnVjdG9yIiwibWV0YXRoZW9yZW1zIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1KU09OIiwibWV0YXRoZW9yZW0iLCJzdXBwb3NpdGlvbnMiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbkpTT04iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25zSlNPTiIsIlN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkpTT04iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwibWFwU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE2TmdCQTtlQUFBQTs7UUF1WUFDO2VBQUFBOztRQXRQQUM7ZUFBQUE7O1FBNFdBQztlQUFBQTs7UUE3bkJBQztlQUFBQTs7UUErYkFDO2VBQUFBOztRQTlMQUM7ZUFBQUE7O1FBZ1hBQztlQUFBQTs7UUFoVUFDO2VBQUFBOztRQWtXQUM7ZUFBQUE7O1FBL3FCQUM7ZUFBQUE7O1FBNmNBQztlQUFBQTs7UUFoTkFDO2VBQUFBOztRQW9WQUM7ZUFBQUE7O1FBbGRBQztlQUFBQTs7UUF5VEFDO2VBQUFBOztRQTVTQUM7ZUFBQUE7O1FBNllBQztlQUFBQTs7UUEzSEFDO2VBQUFBOztRQU1BQztlQUFBQTs7UUFsY0FDO2VBQUFBOztRQTRkQUM7ZUFBQUE7O1FBakdBQztlQUFBQTs7UUE4VkFDO2VBQUFBOztRQWxwQkFDO2VBQUFBOztRQXdiQUM7ZUFBQUE7O1FBbkZBQztlQUFBQTs7UUFtVUFDO2VBQUFBOztRQXBjQUM7ZUFBQUE7O1FBNFZBQztlQUFBQTs7UUE3YkFDO2VBQUFBOztRQW1ZQUM7ZUFBQUE7O1FBemZBQztlQUFBQTs7UUFpYkFDO2VBQUFBOztRQWxhQUM7ZUFBQUE7O1FBMGFBQztlQUFBQTs7UUFuUkFDO2VBQUFBOztRQXlaQUM7ZUFBQUE7O1FBdGdCQUM7ZUFBQUE7O1FBOFpBQztlQUFBQTs7UUFoZ0JBQztlQUFBQTs7UUFzY0FDO2VBQUFBOztRQWxlQUM7ZUFBQUE7O1FBb2RBQztlQUFBQTs7UUF4RUFDO2VBQUFBOztRQTBVQUM7ZUFBQUE7O1FBM2RBQztlQUFBQTs7UUFpWEFDO2VBQUFBOztRQWhQQUM7ZUFBQUE7O1FBd1RBQztlQUFBQTs7UUFsdUJBQztlQUFBQTs7UUF1ZUFDO2VBQUFBOztRQTNVQUM7ZUFBQUE7O1FBa2FBQztl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