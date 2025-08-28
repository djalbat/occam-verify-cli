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
        var name = type.name, typeName = name; ///
        type = context.findTypeByTypeName(typeName);
    }
    return type;
}
function metaTypeFromJSON(json, context) {
    var metaType = json.metaType;
    if (metaType !== null) {
        var name = metaType.name, metaTypeName = name; ///
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
        var _$json = superTypeJSON, name = _$json.name, superTypeName = name, superType = context.findTypeByTypeName(superTypeName);
        return superType;
    });
    return superTypes;
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
    var statementJSON = null;
    if (statement !== null) {
        statementJSON = statement.toJSON();
    }
    return statementJSON;
}
function deductionToDeductionJSON(deduction) {
    var deductionJSON = deduction.toJSON();
    return deductionJSON;
}
function signatureToSignatureJSON(signature) {
    var signatureJSON = null;
    if (signature !== null) {
        signatureJSON = signature.toJSON();
    }
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
    var procedureCallJSON = null;
    if (procedureCall !== null) {
        procedureCallJSON = procedureCall.toJSON();
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0ZXJtIH0gPSBqc29uO1xuXG4gIGNvbnN0IHRlcm1KU09OID0gdGVybTsgIC8vL1xuXG4gIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gZG9tO1xuXG4gIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdHlwZSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IG1ldGFUeXBlLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnQgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIGpzb24gPSBzdGF0ZW1lbnRKU09OOyAvLy9cblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJlZmVyZW5jZSB9ID0ganNvbjtcblxuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlOyAgLy8vXG5cbiAganNvbiA9IHJlZmVyZW5jZUpTT047ICAvLy9cblxuICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZGVkdWN0aW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRGVkdWN0aW9uIH0gPSBkb20sXG4gICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb247ICAvLy9cblxuICBqc29uID0gZGVkdWN0aW9uSlNPTjsgIC8vL1xuXG4gIGRlZHVjdGlvbiA9IERlZHVjdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzaWduYXR1cmUgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZG9tLFxuICAgICAgICAgIHNpZ25hdHVyZUpTT04gPSBzaWduYXR1cmU7ICAvLy9cblxuICAgIGpzb24gPSBzaWduYXR1cmVKU09OOyAvLy9cblxuICAgIHNpZ25hdHVyZSA9IFNpZ25hdHVyZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZG9tLFxuICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGU7ICAvLy9cblxuICBqc29uID0gbWV0YXZhcmlhYmxlSlNPTjsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVDYWxsID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZG9tLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbDsgIC8vL1xuXG4gICAganNvbiA9IHByb2NlZHVyZUNhbGxKU09OOyAvLy9cblxuICAgIHByb2NlZHVyZUNhbGwgPSBQcm9jZWR1cmVDYWxsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc0Zyb21KU09OKGpzb24sIHR5cGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgdHlwZXM6IHR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGUgfSA9IGRvbTtcblxuICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHR5cGVzLnB1c2godHlwZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gZG9tLFxuICAgICAgICB0ZXJtc0pTT04gPSB0ZXJtczsgLy8vXG5cbiAgdGVybXMgPSB0ZXJtc0pTT04ubWFwKCh0ZXJtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBydWxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFJ1bGUgfSA9IGRvbSxcbiAgICBydWxlc0pTT04gPSBydWxlczsgLy8vXG5cbiAgcnVsZXMgPSBydWxlc0pTT04ubWFwKChydWxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBydWxlSlNPTiwgIC8vL1xuICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGxhYmVsIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IGRvbSxcbiAgICAgICAgbGFiZWxKU09OID0gbGFiZWw7ICAvLy9cblxuICBqc29uID0gbGFiZWxKU09OOyAvLy9cblxuICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IGRvbSxcbiAgICAgICAgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBheGlvbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBBeGlvbSB9ID0gZG9tLFxuICAgICAgICBheGlvbXNKU09OID0gYXhpb21zOyAvLy9cblxuICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBkb20sXG4gICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzOyAgLy8vXG5cbiAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcmVtaXNlSlNPTiwgLy8vXG4gICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVGhlb3JlbSB9ID0gZG9tLFxuICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtczsgLy8vXG5cbiAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04ubWFwKCh0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIHRoZW9yZW0gPSBUaGVvcmVtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvcGVydGllcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByb3BlcnR5IH0gPSBkb20sXG4gICAgICAgIHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllczsgLy8vXG5cbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNKU09OLm1hcCgocHJvcGVydHlKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByb3BlcnR5SlNPTiwgIC8vL1xuICAgICAgICAgIHByb3BlcnR5ID0gUHJvcGVydHkuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBzdXBlclR5cGVzOiBzdXBlclR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0pTT04ubWFwKChzdXBlclR5cGVKU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IHN1cGVyVHlwZUpTT04sICAvLy9cbiAgICAgICAgICAgICAgICB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcGFyYW1ldGVycyB9ID0ganNvbjtcblxuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnM7IC8vL1xuXG4gIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzSlNPTi5tYXAoKHBhcmFtZXRlckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcGFyYW1ldGVySlNPTiwgIC8vL1xuICAgICAgICAgIHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbmplY3R1cmVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZG9tLFxuICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlczsgLy8vXG5cbiAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04ubWFwKChjb25qZWN0dXJlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb21iaW5hdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IGRvbSxcbiAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnM7IC8vL1xuXG4gIGNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNKU09OLm1hcCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29tYmluYXRvckpTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbnN0cnVjdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBkb20sXG4gICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnM7IC8vL1xuXG4gIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04ubWFwKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXRoZW9yZW0gfSA9IGRvbSxcbiAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtczsgLy8vXG5cbiAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTi5tYXAoKG1ldGF0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdXBwb3NpdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZG9tLFxuICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTi5tYXAoKHN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdWJzdGl0dXRpb25zID0gW10gfSA9IGpzb247ICAvLy9cblxuICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZG9tLFxuICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnMsICAvLy9cbiAgICAgICAgU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uOyAvLy9cblxuICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04ubWFwKChzdWJzdGl0dXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBTdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzOyAvLy9cblxuICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT04ubWFwKChtZXRhdmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICByZXR1cm4gbGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgcmV0dXJuIG1ldGFMZW1tYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtVG9UZXJtSlNPTih0ZXJtKSB7XG4gIGNvbnN0IHRlcm1KU09OID0gdGVybS50b0pTT04oKTtcblxuICByZXR1cm4gdGVybUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlVG9UeXBlSlNPTih0eXBlKSB7XG4gIGNvbnN0IHR5cGVKU09OID0gKHR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0eXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsVG9MYWJlbEpTT04obGFiZWwpIHtcbiAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgcmV0dXJuIGxhYmVsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04obWV0YVR5cGUpIHtcbiAgY29uc3QgbWV0YVR5cGVKU09OID0gKG1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgcmV0dXJuIG1ldGFUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTihzdGF0ZW1lbnQpIHtcbiAgbGV0IHN0YXRlbWVudEpTT04gPSBudWxsO1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50LnRvSlNPTigpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04oZGVkdWN0aW9uKSB7XG4gIGNvbnN0IGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04oc2lnbmF0dXJlKSB7XG4gIGxldCBzaWduYXR1cmVKU09OID0gbnVsbDtcblxuICBpZiAoc2lnbmF0dXJlICE9PSBudWxsKSB7XG4gICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZS50b0pTT04oKTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04oY29uY2x1c2lvbikge1xuICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04ocHJvY2VkdXJlQ2FsbCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbEpTT04gPSBudWxsO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbEpTT04gPSBwcm9jZWR1cmVDYWxsLnRvSlNPTigpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNUb1R5cGVzSlNPTih0eXBlcykge1xuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc1RvVGVybXNKU09OKHRlcm1zKSB7XG4gIGNvbnN0IHRlcm1zSlNPTiA9IHRlcm1zLm1hcCgodGVybSkgPT4ge1xuICAgIGNvbnN0IHRlcm1KU09OID0gdGVybS50b0pTT04oKTtcblxuICAgIHRlcm0gPSB0ZXJtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzVG9SdWxlc0pTT04ocnVsZXMpIHtcbiAgY29uc3QgcnVsZXNKU09OID0gcnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTigpO1xuXG4gICAgcnVsZSA9IHJ1bGVKU09OOyAvLy9cblxuICAgIHJldHVybiBydWxlO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9MYWJlbHNKU09OKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgIHJldHVybiBsYWJlbEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zVG9BeGlvbXNKU09OKGF4aW9tcykge1xuICBjb25zdCBheGlvbXNKU09OID0gYXhpb21zLm1hcCgoYXhpb20pID0+IHtcbiAgICBjb25zdCBheGlvbUpTT04gPSBheGlvbS50b0pTT04oKTtcblxuICAgIGF4aW9tID0gYXhpb21KU09OOyAvLy9cblxuICAgIHJldHVybiBheGlvbTtcbiAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHByZW1pc2VzKSB7XG4gIGNvbnN0IHByZW1pc2VzSlNPTiA9IHByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS50b0pTT04oKTtcblxuICAgIHJldHVybiBwcmVtaXNlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1zVG9UaGVvcmVtc0pTT04odGhlb3JlbXMpIHtcbiAgY29uc3QgdGhlb3JlbXNKU09OID0gdGhlb3JlbXMubWFwKCh0aGVvcmVtKSA9PiB7XG4gICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgdGhlb3JlbSA9IHRoZW9yZW1KU09OOyAvLy9cblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OKHZhcmlhYmxlcykge1xuICBjb25zdCB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzLm1hcCgodmFyaWFibGUpID0+IHtcbiAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04oKTtcblxuICAgIHZhcmlhYmxlID0gdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04oc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlO1xuICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTihwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlckpTT04gPSBwYXJhbWV0ZXIudG9KU09OKCk7XG5cbiAgICBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTihwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlKU09OID0gcHJvcGVydHkudG9KU09OKCk7XG5cbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5SlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OKGNvbmplY3R1cmVzKSB7XG4gIGNvbnN0IGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzLm1hcCgoY29uamVjdHVyZSkgPT4ge1xuICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04oKTtcblxuICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04oY29tYmluYXRvcnMpIHtcbiAgY29uc3QgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnMubWFwKChjb21iaW5hdG9yKSA9PiB7XG4gICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTigpO1xuXG4gICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JKU09OOyAvLy9cblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKGNvbnN0cnVjdG9ycykge1xuICBjb25zdCBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKG1ldGF0aGVvcmVtcykge1xuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUpTT04gPSBtZXRhdGhlb3JlbS50b0pTT04oKTtcblxuICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1KU09OOyAvLy9cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTihzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucy5tYXBTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04obWV0YXZhcmlhYmxlcykge1xuICBjb25zdCBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXNKU09OO1xufVxuIl0sIm5hbWVzIjpbImF4aW9tc0Zyb21KU09OIiwiYXhpb21zVG9BeGlvbXNKU09OIiwiY29tYmluYXRvcnNGcm9tSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImNvbmplY3R1cmVzRnJvbUpTT04iLCJjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OIiwiY29uc3RydWN0b3JzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsImxhYmVsRnJvbUpTT04iLCJsYWJlbFRvTGFiZWxKU09OIiwibGFiZWxzRnJvbUpTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsIm1ldGFUeXBlRnJvbUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwicGFyYW1ldGVyc0Zyb21KU09OIiwicGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04iLCJwcmVtaXNlc0Zyb21KU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsInByb2NlZHVyZUNhbGxGcm9tSlNPTiIsInByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJyZWZlcmVuY2VGcm9tSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJydWxlc1RvUnVsZXNKU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwic3VwZXJUeXBlc0Zyb21KU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInRlcm1Gcm9tSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwidGVybXNGcm9tSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJ0aGVvcmVtc0Zyb21KU09OIiwidGhlb3JlbXNUb1RoZW9yZW1zSlNPTiIsInR5cGVGcm9tSlNPTiIsInR5cGVUb1R5cGVKU09OIiwidHlwZXNGcm9tSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImpzb24iLCJjb250ZXh0IiwidGVybSIsInRlcm1KU09OIiwiVGVybSIsImRvbSIsImZyb21KU09OIiwidHlwZSIsIm5hbWUiLCJ0eXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJzdGF0ZW1lbnQiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRKU09OIiwicmVmZXJlbmNlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlSlNPTiIsImRlZHVjdGlvbiIsIkRlZHVjdGlvbiIsImRlZHVjdGlvbkpTT04iLCJzaWduYXR1cmUiLCJTaWduYXR1cmUiLCJzaWduYXR1cmVKU09OIiwiY29uY2x1c2lvbiIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uSlNPTiIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJwcm9jZWR1cmVDYWxsIiwiUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxKU09OIiwidHlwZXMiLCJ0eXBlc0pTT04iLCJUeXBlIiwiZm9yRWFjaCIsInR5cGVKU09OIiwicHVzaCIsInRlcm1zIiwidGVybXNKU09OIiwibWFwIiwicnVsZXMiLCJSdWxlIiwicnVsZXNKU09OIiwicnVsZUpTT04iLCJydWxlIiwibGFiZWwiLCJMYWJlbCIsImxhYmVsSlNPTiIsImxhYmVscyIsImxhYmVsc0pTT04iLCJheGlvbXMiLCJBeGlvbSIsImF4aW9tc0pTT04iLCJheGlvbUpTT04iLCJheGlvbSIsInByZW1pc2VzIiwiUHJlbWlzZSIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwicHJlbWlzZSIsInRoZW9yZW1zIiwiVGhlb3JlbSIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1KU09OIiwidGhlb3JlbSIsInZhcmlhYmxlcyIsIlZhcmlhYmxlIiwidmFyaWFibGVzSlNPTiIsInZhcmlhYmxlSlNPTiIsInZhcmlhYmxlIiwicHJvcGVydGllcyIsIlByb3BlcnR5IiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0eUpTT04iLCJwcm9wZXJ0eSIsInN1cGVyVHlwZXMiLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZUpTT04iLCJzdXBlclR5cGVOYW1lIiwic3VwZXJUeXBlIiwicGFyYW1ldGVycyIsIlBhcmFtZXRlciIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVySlNPTiIsInBhcmFtZXRlciIsImNvbmplY3R1cmVzIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29uamVjdHVyZSIsImNvbWJpbmF0b3JzIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JKU09OIiwiY29tYmluYXRvciIsImNvbnN0cnVjdG9ycyIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsImNvbnN0cnVjdG9yIiwibWV0YXRoZW9yZW1zIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1KU09OIiwibWV0YXRoZW9yZW0iLCJzdXBwb3NpdGlvbnMiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbkpTT04iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25zSlNPTiIsIlN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkpTT04iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwibWFwU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF1TmdCQTtlQUFBQTs7UUFxV0FDO2VBQUFBOztRQXRPQUM7ZUFBQUE7O1FBb1VBQztlQUFBQTs7UUF0akJBQztlQUFBQTs7UUFvWkFDO2VBQUFBOztRQWxMQUM7ZUFBQUE7O1FBd1VBQztlQUFBQTs7UUF4U0FDO2VBQUFBOztRQTBVQUM7ZUFBQUE7O1FBeG1CQUM7ZUFBQUE7O1FBZ2FBQztlQUFBQTs7UUE5U0FDO2VBQUFBOztRQXVSQUM7ZUFBQUE7O1FBMVFBQztlQUFBQTs7UUEyV0FDO2VBQUFBOztRQTNIQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOztRQTlaQUM7ZUFBQUE7O1FBd2JBQztlQUFBQTs7UUFqR0FDO2VBQUFBOztRQXNVQUM7ZUFBQUE7O1FBM2tCQUM7ZUFBQUE7O1FBNllBQztlQUFBQTs7UUF2RkFDO2VBQUFBOztRQTJTQUM7ZUFBQUE7O1FBNVpBQztlQUFBQTs7UUFnVUFDO2VBQUFBOztRQS9ZQUM7ZUFBQUE7O1FBaVdBQztlQUFBQTs7UUExY0FDO2VBQUFBOztRQXNZQUM7ZUFBQUE7O1FBN09BQztlQUFBQTs7UUEyV0FDO2VBQUFBOztRQXZrQkFDO2VBQUFBOztRQStHQUM7ZUFBQUE7O1FBNFhBQztlQUFBQTs7UUFqZEFDO2VBQUFBOztRQXlaQUM7ZUFBQUE7O1FBbGNBQztlQUFBQTs7UUFrYkFDO2VBQUFBOztRQXhFQUM7ZUFBQUE7O1FBa1RBQztlQUFBQTs7UUFqYUFDO2VBQUFBOztRQW1VQUM7ZUFB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