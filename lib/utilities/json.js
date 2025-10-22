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
    get procedureNameFromJSON () {
        return procedureNameFromJSON;
    },
    get propertiesFromJSON () {
        return propertiesFromJSON;
    },
    get propertiesToPropertiesJSON () {
        return propertiesToPropertiesJSON;
    },
    get referenceFromJSON () {
        return referenceFromJSON;
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
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termFromJSON(json, context) {
    var term = json.term;
    var termJSON = term; ///
    json = termJSON; ///
    var Term = _dom.default.Term;
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
        var Statement = _dom.default.Statement, statementJSON = statement; ///
        json = statementJSON; ///
        statement = Statement.fromJSON(json, context);
    }
    return statement;
}
function referenceFromJSON(json, context) {
    var reference = json.reference;
    var Reference = _dom.default.Reference, referenceJSON = reference; ///
    json = referenceJSON; ///
    reference = Reference.fromJSON(json, context);
    return reference;
}
function deductionFromJSON(json, context) {
    var deduction = json.deduction;
    var Deduction = _dom.default.Deduction, deductionJSON = deduction; ///
    json = deductionJSON; ///
    deduction = Deduction.fromJSON(json, context);
    return deduction;
}
function signatureFromJSON(json, context) {
    var _json_signature = json.signature, signature = _json_signature === void 0 ? null : _json_signature;
    if (signature !== null) {
        var Signature = _dom.default.Signature, signatureJSON = signature; ///
        json = signatureJSON; ///
        signature = Signature.fromJSON(json, context);
    }
    return signature;
}
function conclusionFromJSON(json, context) {
    var conclusion = json.conclusion;
    var Conclusion = _dom.default.Conclusion, conclusionJSON = conclusion; ///
    json = conclusionJSON; ///
    conclusion = Conclusion.fromJSON(json, context);
    return conclusion;
}
function metavariableFromJSON(json, context) {
    var metavariable = json.metavariable;
    var Metavariable = _dom.default.Metavariable, metavariableJSON = metavariable; ///
    json = metavariableJSON; ///
    metavariable = Metavariable.fromJSON(json, context);
    return metavariable;
}
function procedureCallFromJSON(json, context) {
    var _json_procedureCall = json.procedureCall, procedureCall = _json_procedureCall === void 0 ? null : _json_procedureCall;
    if (procedureCall !== null) {
        var ProcedureCall = _dom.default.ProcedureCall, procedureCallJSON = procedureCall; ///
        json = procedureCallJSON; ///
        procedureCall = ProcedureCall.fromJSON(json, context);
    }
    return procedureCall;
}
function procedureNameFromJSON(json, context) {
    var procedureName = json.procedureName;
    return procedureName;
}
function typesFromJSON(json, types, context) {
    var typesJSON = json.types;
    var Type = _dom.default.Type;
    typesJSON.forEach(function(typeJSON) {
        var _$json = typeJSON, type = Type.fromJSON(_$json, context);
        types.push(type);
    });
}
function termsFromJSON(json, context) {
    var terms = json.terms;
    var Term = _dom.default.Term, termsJSON = terms; ///
    terms = termsJSON.map(function(termJSON) {
        var _$json = termJSON, term = Term.fromJSON(_$json, context);
        return term;
    });
    return terms;
}
function rulesFromJSON(json, context) {
    var rules = json.rules;
    var Rule = _dom.default.Rule, rulesJSON = rules; ///
    rules = rulesJSON.map(function(ruleJSON) {
        var _$json = ruleJSON, rule = Rule.fromJSON(_$json, context);
        return rule;
    });
    return rules;
}
function labelFromJSON(json, context) {
    var label = json.label;
    var Label = _dom.default.Label, labelJSON = label; ///
    json = labelJSON; ///
    label = Label.fromJSON(json, context);
    return label;
}
function labelsFromJSON(json, context) {
    var labels = json.labels;
    var Label = _dom.default.Label, labelsJSON = labels; ///
    labels = labelsJSON.map(function(labelJSON) {
        var _$json = labelJSON, label = Label.fromJSON(_$json, context);
        return label;
    });
    return labels;
}
function axiomsFromJSON(json, context) {
    var axioms = json.axioms;
    var Axiom = _dom.default.Axiom, axiomsJSON = axioms; ///
    axioms = axiomsJSON.map(function(axiomJSON) {
        var _$json = axiomJSON, axiom = Axiom.fromJSON(_$json, context);
        return axiom;
    });
    return axioms;
}
function premisesFromJSON(json, context) {
    var premises = json.premises;
    var Premise = _dom.default.Premise, premisesJSON = premises; ///
    premises = premisesJSON.map(function(premiseJSON) {
        var _$json = premiseJSON, premise = Premise.fromJSON(_$json, context);
        return premise;
    });
    return premises;
}
function theoremsFromJSON(json, context) {
    var theorems = json.theorems;
    var Theorem = _dom.default.Theorem, theoremsJSON = theorems; ///
    theorems = theoremsJSON.map(function(theoremJSON) {
        var _$json = theoremJSON, theorem = Theorem.fromJSON(_$json, context);
        return theorem;
    });
    return theorems;
}
function variablesFromJSON(json, context) {
    var variables = json.variables;
    var Variable = _dom.default.Variable, variablesJSON = variables; ///
    variables = variablesJSON.map(function(variableJSON) {
        var _$json = variableJSON, variable = Variable.fromJSON(_$json, context);
        return variable;
    });
    return variables;
}
function propertiesFromJSON(json, context) {
    var properties = json.properties;
    var Property = _dom.default.Property, propertiesJSON = properties; ///
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
    var Hypothesis = _dom.default.Hypothesis, hypothesesJSON = hypotheses; ///
    hypotheses = hypothesesJSON.map(function(hypothesisJSON) {
        var _$json = hypothesisJSON, hypothesis = Hypothesis.fromJSON(_$json, context);
        return hypothesis;
    });
    return hypotheses;
}
function parametersFromJSON(json, context) {
    var parameters = json.parameters;
    var Parameter = _dom.default.Parameter, parametersJSON = parameters; ///
    parameters = parametersJSON.map(function(parameterJSON) {
        var _$json = parameterJSON, parameter = Parameter.fromJSON(_$json, context);
        return parameter;
    });
    return parameters;
}
function conjecturesFromJSON(json, context) {
    var conjectures = json.conjectures;
    var Conjecture = _dom.default.Conjecture, conjecturesJSON = conjectures; ///
    conjectures = conjecturesJSON.map(function(conjectureJSON) {
        var _$json = conjectureJSON, conjecture = Conjecture.fromJSON(_$json, context);
        return conjecture;
    });
    return conjectures;
}
function combinatorsFromJSON(json, context) {
    var combinators = json.combinators;
    var Combinator = _dom.default.Combinator, combinatorsJSON = combinators; ///
    combinators = combinatorsJSON.map(function(combinatorJSON) {
        var _$json = combinatorJSON, combinator = Combinator.fromJSON(_$json, context);
        return combinator;
    });
    return combinators;
}
function typePrefixesFromJSON(json, context) {
    var typePrefixes = json.typePrefixes;
    var TypePrefix = _dom.default.TypePrefix, typePrefixesJSON = typePrefixes; ///
    typePrefixes = typePrefixesJSON.map(function(typePrefixJSON) {
        var _$json = typePrefixJSON, typePrefix = TypePrefix.fromJSON(_$json, context);
        return typePrefix;
    });
    return typePrefixes;
}
function constructorsFromJSON(json, context) {
    var constructors = json.constructors;
    var Constructor = _dom.default.Constructor, constructorsJSON = constructors; ///
    constructors = constructorsJSON.map(function(constructorJSON) {
        var _$json = constructorJSON, constructor = Constructor.fromJSON(_$json, context);
        return constructor;
    });
    return constructors;
}
function metatheoremsFromJSON(json, context) {
    var metatheorems = json.metatheorems;
    var Metatheorem = _dom.default.Metatheorem, metatheoremsJSON = metatheorems; ///
    metatheorems = metatheoremsJSON.map(function(metatheoremJSON) {
        var _$json = metatheoremJSON, metatheorem = Metatheorem.fromJSON(_$json, context);
        return metatheorem;
    });
    return metatheorems;
}
function suppositionsFromJSON(json, context) {
    var suppositions = json.suppositions;
    var Supposition = _dom.default.Supposition, suppositionsJSON = suppositions; ///
    suppositions = suppositionsJSON.map(function(suppositionJSON) {
        var _$json = suppositionJSON, supposition = Supposition.fromJSON(_$json, context);
        return supposition;
    });
    return suppositions;
}
function substitutionsFromJSON(json, context) {
    var _json_substitutions = json.substitutions, substitutions = _json_substitutions === void 0 ? [] : _json_substitutions; ///
    var StatementSubstitution = _dom.default.StatementSubstitution, substitutionsJSON = substitutions, Substitution = StatementSubstitution; ///
    substitutions = substitutionsJSON.map(function(substitutionJSON) {
        var _$json = substitutionJSON, substitution = Substitution.fromJSON(_$json, context);
        return substitution;
    });
    return substitutions;
}
function metavariablesFromJSON(json, context) {
    var metavariables = json.metavariables;
    var Metavariable = _dom.default.Metavariable, metavariablesJSON = metavariables; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0ZXJtIH0gPSBqc29uO1xuXG4gIGNvbnN0IHRlcm1KU09OID0gdGVybTsgIC8vL1xuXG4gIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gZG9tO1xuXG4gIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSB0eXBlOyAgLy8vXG5cbiAgICBjb25zdCB7IG5hbWUsIHByZWZpeE5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gKHByZWZpeE5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhOYW1lfSR7bmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOyAvLy9cblxuICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSBtZXRhVHlwZTsgIC8vL1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnQgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIGpzb24gPSBzdGF0ZW1lbnRKU09OOyAvLy9cblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJlZmVyZW5jZSB9ID0ganNvbjtcblxuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlOyAgLy8vXG5cbiAganNvbiA9IHJlZmVyZW5jZUpTT047ICAvLy9cblxuICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZGVkdWN0aW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRGVkdWN0aW9uIH0gPSBkb20sXG4gICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb247ICAvLy9cblxuICBqc29uID0gZGVkdWN0aW9uSlNPTjsgIC8vL1xuXG4gIGRlZHVjdGlvbiA9IERlZHVjdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzaWduYXR1cmUgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZG9tLFxuICAgICAgICAgIHNpZ25hdHVyZUpTT04gPSBzaWduYXR1cmU7ICAvLy9cblxuICAgIGpzb24gPSBzaWduYXR1cmVKU09OOyAvLy9cblxuICAgIHNpZ25hdHVyZSA9IFNpZ25hdHVyZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZG9tLFxuICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGU7ICAvLy9cblxuICBqc29uID0gbWV0YXZhcmlhYmxlSlNPTjsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVDYWxsID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZG9tLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbDsgIC8vL1xuXG4gICAganNvbiA9IHByb2NlZHVyZUNhbGxKU09OOyAvLy9cblxuICAgIHByb2NlZHVyZUNhbGwgPSBQcm9jZWR1cmVDYWxsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVOYW1lRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IHByb2NlZHVyZU5hbWUgfSA9IGpzb247XG5cbiAgcmV0dXJuIHByb2NlZHVyZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc0Zyb21KU09OKGpzb24sIHR5cGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgdHlwZXM6IHR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGUgfSA9IGRvbTtcblxuICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHR5cGVzLnB1c2godHlwZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gZG9tLFxuICAgICAgICB0ZXJtc0pTT04gPSB0ZXJtczsgLy8vXG5cbiAgdGVybXMgPSB0ZXJtc0pTT04ubWFwKCh0ZXJtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBydWxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFJ1bGUgfSA9IGRvbSxcbiAgICAgICAgcnVsZXNKU09OID0gcnVsZXM7IC8vL1xuXG4gIHJ1bGVzID0gcnVsZXNKU09OLm1hcCgocnVsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBydWxlO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbGFiZWwgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZG9tLFxuICAgICAgICBsYWJlbEpTT04gPSBsYWJlbDsgIC8vL1xuXG4gIGpzb24gPSBsYWJlbEpTT047IC8vL1xuXG4gIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZG9tLFxuICAgICAgICBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGF4aW9tcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEF4aW9tIH0gPSBkb20sXG4gICAgICAgIGF4aW9tc0pTT04gPSBheGlvbXM7IC8vL1xuXG4gIGF4aW9tcyA9IGF4aW9tc0pTT04ubWFwKChheGlvbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXhpb21KU09OLCAgLy8vXG4gICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByZW1pc2UgfSA9IGRvbSxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUaGVvcmVtIH0gPSBkb20sXG4gICAgICAgIHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zOyAvLy9cblxuICB0aGVvcmVtcyA9IHRoZW9yZW1zSlNPTi5tYXAoKHRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzOyAvLy9cblxuICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLm1hcCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzOyAvLy9cblxuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04ubWFwKChwcm9wZXJ0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJvcGVydHlKU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IHN1cGVyVHlwZXM6IHN1cGVyVHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTi5tYXAoKHN1cGVyVHlwZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIHsgbmFtZSwgcHJlZml4TmFtZSB9ID0ganNvbixcbiAgICAgICAgICAgICAgICBub21pbmFsU3VwZXJUeXBlTmFtZSA9IChwcmVmaXhOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeE5hbWV9JHtuYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLCAvLy9cbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBoeXBvdGhlc2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgSHlwb3RoZXNpcyB9ID0gZG9tLFxuICAgICAgICBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXM7ICAvLy9cblxuICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0pTT04ubWFwKChoeXBvdGhlc2lzSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBoeXBvdGhlc2lzSlNPTiwgLy8vXG4gICAgICAgICAgaHlwb3RoZXNpcyA9IEh5cG90aGVzaXMuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwYXJhbWV0ZXJzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgIHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVyczsgLy8vXG5cbiAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNKU09OLm1hcCgocGFyYW1ldGVySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwYXJhbWV0ZXJKU09OLCAgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uamVjdHVyZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBkb20sXG4gICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzOyAvLy9cblxuICBjb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzSlNPTi5tYXAoKGNvbmplY3R1cmVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbWJpbmF0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZG9tLFxuICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9yczsgLy8vXG5cbiAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04ubWFwKChjb21iaW5hdG9ySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb21iaW5hdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZVByZWZpeGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZVByZWZpeCB9ID0gZG9tLFxuICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzOyAvLy9cblxuICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLm1hcCgodHlwZVByZWZpeEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZVByZWZpeEpTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ID0gVHlwZVByZWZpeC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25zdHJ1Y3RvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZG9tLFxuICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzOyAvLy9cblxuICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLm1hcCgoY29uc3RydWN0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF0aGVvcmVtIH0gPSBkb20sXG4gICAgICAgIG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXM7IC8vL1xuXG4gIG1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtc0pTT04ubWFwKChtZXRhdGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBNZXRhdGhlb3JlbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3VwcG9zaXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGRvbSxcbiAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3Vic3RpdHV0aW9ucyA9IFtdIH0gPSBqc29uOyAgLy8vXG5cbiAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGRvbSxcbiAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLCAgLy8vXG4gICAgICAgIFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gU3Vic3RpdHV0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlczsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNKU09OLm1hcCgobWV0YXZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVRvVGVybUpTT04odGVybSkge1xuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgcmV0dXJuIHRlcm1KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVRvVHlwZUpTT04odHlwZSkge1xuICBjb25zdCB0eXBlSlNPTiA9ICh0eXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0eXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsVG9MYWJlbEpTT04obGFiZWwpIHtcbiAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgcmV0dXJuIGxhYmVsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04obWV0YVR5cGUpIHtcbiAgY29uc3QgbWV0YVR5cGVKU09OID0gKG1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgcmV0dXJuIG1ldGFUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTihzdGF0ZW1lbnQpIHtcbiAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IChzdGF0ZW1lbnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50LnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKGRlZHVjdGlvbikge1xuICBjb25zdCBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHNpZ25hdHVyZSkge1xuICBjb25zdCBzaWduYXR1cmVKU09OID0gKHNpZ25hdHVyZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTihjb25jbHVzaW9uKSB7XG4gIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbi50b0pTT04oKTtcblxuICByZXR1cm4gY29uY2x1c2lvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04obWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTihwcm9jZWR1cmVDYWxsKSB7XG4gIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gKHByb2NlZHVyZUNhbGwgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZHVyZUNhbGwudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzVG9UeXBlc0pTT04odHlwZXMpIHtcbiAgY29uc3QgdHlwZXNKU09OID0gdHlwZXMubWFwKCh0eXBlKSA9PiB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTigpO1xuXG4gICAgdHlwZSA9IHR5cGVKU09OOyAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9KTtcblxuICByZXR1cm4gdHlwZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcykge1xuICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtcy5tYXAoKHRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgICB0ZXJtID0gdGVybUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc1RvUnVsZXNKU09OKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVzSlNPTiA9IHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKGh5cG90aGVzZXMpIHtcbiAgY29uc3QgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzLm1hcCgoaHlwb3RoZXNpcykgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXNKU09OID0gaHlwb3RoZXNpcy50b0pTT04oKTtcblxuICAgIGh5cG90aGVzaXMgPSBoeXBvdGhlc2lzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04oc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlO1xuICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTihwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlckpTT04gPSBwYXJhbWV0ZXIudG9KU09OKCk7XG5cbiAgICBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTihwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlKU09OID0gcHJvcGVydHkudG9KU09OKCk7XG5cbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5SlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04odHlwZVByZWZpeGVzKSB7XG4gIGNvbnN0IHR5cGVQcmVmaXhlc0pTT04gPSB0eXBlUHJlZml4ZXMubWFwKCh0eXBlUHJlZml4KSA9PiB7XG4gICAgY29uc3QgdHlwZVByZWZpeEpTT04gPSB0eXBlUHJlZml4LnRvSlNPTigpO1xuXG4gICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhKU09OOyAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04oY29uamVjdHVyZXMpIHtcbiAgY29uc3QgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTigpO1xuXG4gICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTihjb21iaW5hdG9ycykge1xuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKCk7XG5cbiAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04oc3VwcG9zaXRpb25zKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04oY29uc3RydWN0b3JzKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTigpO1xuXG4gICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04obWV0YXRoZW9yZW1zKSB7XG4gIGNvbnN0IG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXMubWFwKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLm1hcFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTihtZXRhdmFyaWFibGVzKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG4iXSwibmFtZXMiOlsiYXhpb21zRnJvbUpTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwiaHlwb3RoZXNlc0Zyb21KU09OIiwiaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04iLCJsYWJlbEZyb21KU09OIiwibGFiZWxUb0xhYmVsSlNPTiIsImxhYmVsc0Zyb21KU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhVHlwZUZyb21KU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZU5hbWVGcm9tSlNPTiIsInByb3BlcnRpZXNGcm9tSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwicmVmZXJlbmNlRnJvbUpTT04iLCJydWxlc0Zyb21KU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsInNpZ25hdHVyZUZyb21KU09OIiwic2lnbmF0dXJlVG9TaWduYXR1cmVKU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiIsInN1cGVyVHlwZXNGcm9tSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJ0ZXJtRnJvbUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsInRlcm1zRnJvbUpTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwidGhlb3JlbXNGcm9tSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ0eXBlRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNGcm9tSlNPTiIsInR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTiIsInR5cGVUb1R5cGVKU09OIiwidHlwZXNGcm9tSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImpzb24iLCJjb250ZXh0IiwidGVybSIsInRlcm1KU09OIiwiVGVybSIsImRvbSIsImZyb21KU09OIiwidHlwZSIsIm5hbWUiLCJwcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJzdGF0ZW1lbnQiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRKU09OIiwicmVmZXJlbmNlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlSlNPTiIsImRlZHVjdGlvbiIsIkRlZHVjdGlvbiIsImRlZHVjdGlvbkpTT04iLCJzaWduYXR1cmUiLCJTaWduYXR1cmUiLCJzaWduYXR1cmVKU09OIiwiY29uY2x1c2lvbiIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uSlNPTiIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJwcm9jZWR1cmVDYWxsIiwiUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlTmFtZSIsInR5cGVzIiwidHlwZXNKU09OIiwiVHlwZSIsImZvckVhY2giLCJ0eXBlSlNPTiIsInB1c2giLCJ0ZXJtcyIsInRlcm1zSlNPTiIsIm1hcCIsInJ1bGVzIiwiUnVsZSIsInJ1bGVzSlNPTiIsInJ1bGVKU09OIiwicnVsZSIsImxhYmVsIiwiTGFiZWwiLCJsYWJlbEpTT04iLCJsYWJlbHMiLCJsYWJlbHNKU09OIiwiYXhpb21zIiwiQXhpb20iLCJheGlvbXNKU09OIiwiYXhpb21KU09OIiwiYXhpb20iLCJwcmVtaXNlcyIsIlByZW1pc2UiLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlSlNPTiIsInByZW1pc2UiLCJ0aGVvcmVtcyIsIlRoZW9yZW0iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtSlNPTiIsInRoZW9yZW0iLCJ2YXJpYWJsZXMiLCJWYXJpYWJsZSIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZUpTT04iLCJ2YXJpYWJsZSIsInByb3BlcnRpZXMiLCJQcm9wZXJ0eSIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydHlKU09OIiwicHJvcGVydHkiLCJzdXBlclR5cGVzIiwic3VwZXJUeXBlc0pTT04iLCJzdXBlclR5cGVKU09OIiwibm9taW5hbFN1cGVyVHlwZU5hbWUiLCJzdXBlclR5cGUiLCJoeXBvdGhlc2VzIiwiSHlwb3RoZXNpcyIsImh5cG90aGVzZXNKU09OIiwiaHlwb3RoZXNpc0pTT04iLCJoeXBvdGhlc2lzIiwicGFyYW1ldGVycyIsIlBhcmFtZXRlciIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVySlNPTiIsInBhcmFtZXRlciIsImNvbmplY3R1cmVzIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29uamVjdHVyZSIsImNvbWJpbmF0b3JzIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JKU09OIiwiY29tYmluYXRvciIsInR5cGVQcmVmaXhlcyIsIlR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4ZXNKU09OIiwidHlwZVByZWZpeEpTT04iLCJ0eXBlUHJlZml4IiwiY29uc3RydWN0b3JzIiwiQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JKU09OIiwiY29uc3RydWN0b3IiLCJtZXRhdGhlb3JlbXMiLCJNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdGhlb3JlbUpTT04iLCJtZXRhdGhlb3JlbSIsInN1cHBvc2l0aW9ucyIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uSlNPTiIsInN1cHBvc2l0aW9uIiwic3Vic3RpdHV0aW9ucyIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbnNKU09OIiwiU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uSlNPTiIsInN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzSlNPTiIsImxlbW1hcyIsIm1ldGFMZW1tYXMiLCJ0b0pTT04iLCJtZXRhVHlwZUpTT04iLCJtYXBTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW1PZ0JBO2VBQUFBOztRQWlZQUM7ZUFBQUE7O1FBaFBBQztlQUFBQTs7UUFzV0FDO2VBQUFBOztRQWhuQkFDO2VBQUFBOztRQXdiQUM7ZUFBQUE7O1FBOUxBQztlQUFBQTs7UUEwV0FDO2VBQUFBOztRQTFUQUM7ZUFBQUE7O1FBNFZBQztlQUFBQTs7UUFscUJBQztlQUFBQTs7UUFzY0FDO2VBQUFBOztRQWhOQUM7ZUFBQUE7O1FBOFVBQztlQUFB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