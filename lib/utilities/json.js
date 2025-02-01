"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    axiomsFromJSON: function() {
        return axiomsFromJSON;
    },
    axiomsToAxiomsJSON: function() {
        return axiomsToAxiomsJSON;
    },
    combinatorsFromJSON: function() {
        return combinatorsFromJSON;
    },
    combinatorsToCombinatorsJSON: function() {
        return combinatorsToCombinatorsJSON;
    },
    conclusionFromJSON: function() {
        return conclusionFromJSON;
    },
    conclusionToConclusionJSON: function() {
        return conclusionToConclusionJSON;
    },
    conjecturesFromJSON: function() {
        return conjecturesFromJSON;
    },
    conjecturesToConjecturesJSON: function() {
        return conjecturesToConjecturesJSON;
    },
    constructorsFromJSON: function() {
        return constructorsFromJSON;
    },
    constructorsToConstructorsJSON: function() {
        return constructorsToConstructorsJSON;
    },
    deductionFromJSON: function() {
        return deductionFromJSON;
    },
    deductionToDeductionJSON: function() {
        return deductionToDeductionJSON;
    },
    labelsFromJSON: function() {
        return labelsFromJSON;
    },
    labelsToLabelsJSON: function() {
        return labelsToLabelsJSON;
    },
    lemmasFromNothing: function() {
        return lemmasFromNothing;
    },
    metaLemmasFromNothing: function() {
        return metaLemmasFromNothing;
    },
    metaTypeFromJSON: function() {
        return metaTypeFromJSON;
    },
    metaTypeToMetaTypeJSON: function() {
        return metaTypeToMetaTypeJSON;
    },
    metatheoremsFromJSON: function() {
        return metatheoremsFromJSON;
    },
    metatheoremsToMetatheoremsJSON: function() {
        return metatheoremsToMetatheoremsJSON;
    },
    metavariableFromJSON: function() {
        return metavariableFromJSON;
    },
    metavariableToMetavariableJSON: function() {
        return metavariableToMetavariableJSON;
    },
    metavariablesFromJSON: function() {
        return metavariablesFromJSON;
    },
    metavariablesToMetavariablesJSON: function() {
        return metavariablesToMetavariablesJSON;
    },
    parametersFromJSON: function() {
        return parametersFromJSON;
    },
    parametersToParametersJSON: function() {
        return parametersToParametersJSON;
    },
    premisesFromJSON: function() {
        return premisesFromJSON;
    },
    premisesToPremisesJSON: function() {
        return premisesToPremisesJSON;
    },
    procedureCallFromJSON: function() {
        return procedureCallFromJSON;
    },
    procedureCallToProcedureCallJSON: function() {
        return procedureCallToProcedureCallJSON;
    },
    propertiesFromJSON: function() {
        return propertiesFromJSON;
    },
    propertiesToPropertiesJSON: function() {
        return propertiesToPropertiesJSON;
    },
    referenceFromJSON: function() {
        return referenceFromJSON;
    },
    rulesFromJSON: function() {
        return rulesFromJSON;
    },
    rulesToRulesJSON: function() {
        return rulesToRulesJSON;
    },
    satisfyingFromJSON: function() {
        return satisfyingFromJSON;
    },
    statementFromJSON: function() {
        return statementFromJSON;
    },
    statementToStatementJSON: function() {
        return statementToStatementJSON;
    },
    substitutionsFromJSON: function() {
        return substitutionsFromJSON;
    },
    substitutionsToSubstitutionsJSON: function() {
        return substitutionsToSubstitutionsJSON;
    },
    superTypesFromJSON: function() {
        return superTypesFromJSON;
    },
    superTypesToSuperTypesJSON: function() {
        return superTypesToSuperTypesJSON;
    },
    suppositionsFromJSON: function() {
        return suppositionsFromJSON;
    },
    suppositionsToSuppositionsJSON: function() {
        return suppositionsToSuppositionsJSON;
    },
    termFromJSON: function() {
        return termFromJSON;
    },
    termToTermJSON: function() {
        return termToTermJSON;
    },
    theoremsFromJSON: function() {
        return theoremsFromJSON;
    },
    theoremsToTheoremsJSON: function() {
        return theoremsToTheoremsJSON;
    },
    typeFromJSON: function() {
        return typeFromJSON;
    },
    typeToTypeJSON: function() {
        return typeToTypeJSON;
    },
    typesFromJSON: function() {
        return typesFromJSON;
    },
    typesToTypesJSON: function() {
        return typesToTypesJSON;
    },
    variablesFromJSON: function() {
        return variablesFromJSON;
    },
    variablesToVariablesJSON: function() {
        return variablesToVariablesJSON;
    }
});
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../substitution/statement"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termFromJSON(json, fileContext) {
    var term = json.term;
    var termJSON = term; ///
    json = termJSON; ///
    var Term = _dom.default.Term;
    term = Term.fromJSON(json, fileContext);
    return term;
}
function typeFromJSON(json, fileContext) {
    var type = json.type;
    if (type !== null) {
        var name = type.name, typeName = name; ///
        type = fileContext.findTypeByTypeName(typeName);
    }
    return type;
}
function metaTypeFromJSON(json, fileContext) {
    var metaType = json.metaType;
    if (metaType !== null) {
        var name = metaType.name, metaTypeName = name; ///
        metaType = fileContext.findMetaTypeByMetaTypeName(metaTypeName);
    }
    return metaType;
}
function statementFromJSON(json, fileContext) {
    var _json_statement = json.statement, statement = _json_statement === void 0 ? null : _json_statement;
    if (statement !== null) {
        var Statement = _dom.default.Statement, statementJSON = statement; ///
        json = statementJSON; ///
        statement = Statement.fromJSON(json, fileContext);
    }
    return statement;
}
function referenceFromJSON(json, fileContext) {
    var reference = json.reference;
    var Reference = _dom.default.Reference, referenceJSON = reference; ///
    json = referenceJSON; ///
    reference = Reference.fromJSON(json, fileContext);
    return reference;
}
function deductionFromJSON(json, fileContext) {
    var deduction = json.deduction;
    var Deduction = _dom.default.Deduction, deductionJSON = deduction; ///
    json = deductionJSON; ///
    deduction = Deduction.fromJSON(json, fileContext);
    return deduction;
}
function satisfyingFromJSON(json, fileContext) {
    var satisfying = json.satisfying;
    return satisfying;
}
function conclusionFromJSON(json, fileContext) {
    var conclusion = json.conclusion;
    var Conclusion = _dom.default.Conclusion, conclusionJSON = conclusion; ///
    json = conclusionJSON; ///
    conclusion = Conclusion.fromJSON(json, fileContext);
    return conclusion;
}
function metavariableFromJSON(json, fileContext) {
    var metavariable = json.metavariable;
    var Metavariable = _dom.default.Metavariable, metavariableJSON = metavariable; ///
    json = metavariableJSON; ///
    metavariable = Metavariable.fromJSON(json, fileContext);
    return metavariable;
}
function procedureCallFromJSON(json, fileContext) {
    var _json_procedureCall = json.procedureCall, procedureCall = _json_procedureCall === void 0 ? null : _json_procedureCall;
    if (procedureCall !== null) {
        var ProcedureCall = _dom.default.ProcedureCall, procedureCallJSON = procedureCall; ///
        json = procedureCallJSON; ///
        procedureCall = ProcedureCall.fromJSON(json, fileContext);
    }
    return procedureCall;
}
function typesFromJSON(json, types, fileContext) {
    var typesJSON = json.types;
    var Type = _dom.default.Type;
    typesJSON.forEach(function(typeJSON) {
        var _$json = typeJSON, type = Type.fromJSON(_$json, fileContext);
        types.push(type);
    });
}
function rulesFromJSON(json, fileContext) {
    var rules = json.rules;
    var Rule = _dom.default.Rule, rulesJSON = rules; ///
    rules = rulesJSON.map(function(ruleJSON) {
        var _$json = ruleJSON, rule = Rule.fromJSON(_$json, fileContext);
        return rule;
    });
    return rules;
}
function labelsFromJSON(json, fileContext) {
    var labels = json.labels;
    var Label = _dom.default.Label, labelsJSON = labels; ///
    labels = labelsJSON.map(function(labelJSON) {
        var _$json = labelJSON, label = Label.fromJSON(_$json, fileContext);
        return label;
    });
    return labels;
}
function axiomsFromJSON(json, fileContext) {
    var axioms = json.axioms;
    var Axiom = _dom.default.Axiom, axiomsJSON = axioms; ///
    axioms = axiomsJSON.map(function(axiomJSON) {
        var _$json = axiomJSON, axiom = Axiom.fromJSON(_$json, fileContext);
        return axiom;
    });
    return axioms;
}
function premisesFromJSON(json, fileContext) {
    var premises = json.premises;
    var Premise = _dom.default.Premise, premisesJSON = premises; ///
    premises = premisesJSON.map(function(premiseJSON) {
        var _$json = premiseJSON, premise = Premise.fromJSON(_$json, fileContext);
        return premise;
    });
    return premises;
}
function theoremsFromJSON(json, fileContext) {
    var theorems = json.theorems;
    var Theorem = _dom.default.Theorem, theoremsJSON = theorems; ///
    theorems = theoremsJSON.map(function(theoremJSON) {
        var _$json = theoremJSON, theorem = Theorem.fromJSON(_$json, fileContext);
        return theorem;
    });
    return theorems;
}
function variablesFromJSON(json, fileContext) {
    var variables = json.variables;
    var Variable = _dom.default.Variable, variablesJSON = variables; ///
    variables = variablesJSON.map(function(variableJSON) {
        var _$json = variableJSON, variable = Variable.fromJSON(_$json, fileContext);
        return variable;
    });
    return variables;
}
function propertiesFromJSON(json, fileContext) {
    var properties = json.properties;
    var Property = _dom.default.Property, propertiesJSON = properties; ///
    properties = propertiesJSON.map(function(propertyJSON) {
        var _$json = propertyJSON, property = Property.fromJSON(_$json, fileContext);
        return property;
    });
    return properties;
}
function superTypesFromJSON(json, fileContext) {
    var superTypesJSON = json.superTypes;
    var superTypes = superTypesJSON.map(function(superTypeJSON) {
        var _$json = superTypeJSON, name = _$json.name, superTypeName = name, superType = fileContext.findTypeByTypeName(superTypeName);
        return superType;
    });
    return superTypes;
}
function parametersFromJSON(json, fileContext) {
    var parameters = json.parameters;
    var Parameter = _dom.default.Parameter, parametersJSON = parameters; ///
    parameters = parametersJSON.map(function(parameterJSON) {
        var _$json = parameterJSON, parameter = Parameter.fromJSON(_$json, fileContext);
        return parameter;
    });
    return parameters;
}
function conjecturesFromJSON(json, fileContext) {
    var conjectures = json.conjectures;
    var Conjecture = _dom.default.Conjecture, conjecturesJSON = conjectures; ///
    conjectures = conjecturesJSON.map(function(conjectureJSON) {
        var _$json = conjectureJSON, conjecture = Conjecture.fromJSON(_$json, fileContext);
        return conjecture;
    });
    return conjectures;
}
function combinatorsFromJSON(json, fileContext) {
    var combinators = json.combinators;
    var Combinator = _dom.default.Combinator, combinatorsJSON = combinators; ///
    combinators = combinatorsJSON.map(function(combinatorJSON) {
        var _$json = combinatorJSON, combinator = Combinator.fromJSON(_$json, fileContext);
        return combinator;
    });
    return combinators;
}
function constructorsFromJSON(json, fileContext) {
    var constructors = json.constructors;
    var Constructor = _dom.default.Constructor, constructorsJSON = constructors; ///
    constructors = constructorsJSON.map(function(constructorJSON) {
        var _$json = constructorJSON, constructor = Constructor.fromJSON(_$json, fileContext);
        return constructor;
    });
    return constructors;
}
function metatheoremsFromJSON(json, fileContext) {
    var metatheorems = json.metatheorems;
    var Metatheorem = _dom.default.Metatheorem, metatheoremsJSON = metatheorems; ///
    metatheorems = metatheoremsJSON.map(function(metatheoremJSON) {
        var _$json = metatheoremJSON, metatheorem = Metatheorem.fromJSON(_$json, fileContext);
        return metatheorem;
    });
    return metatheorems;
}
function suppositionsFromJSON(json, fileContext) {
    var suppositions = json.suppositions;
    var Supposition = _dom.default.Supposition, suppositionsJSON = suppositions; ///
    suppositions = suppositionsJSON.map(function(suppositionJSON) {
        var _$json = suppositionJSON, supposition = Supposition.fromJSON(_$json, fileContext);
        return supposition;
    });
    return suppositions;
}
function substitutionsFromJSON(json, fileContext) {
    var _json_substitutions = json.substitutions, substitutions = _json_substitutions === void 0 ? [] : _json_substitutions; ///
    var substitutionsJSON = substitutions, Substitution = _statement.default; ///
    substitutions = substitutionsJSON.map(function(substitutionJSON) {
        var _$json = substitutionJSON, substitution = Substitution.fromJSON(_$json, fileContext);
        return substitution;
    });
    return substitutions;
}
function metavariablesFromJSON(json, fileContext) {
    var metavariables = json.metavariables;
    var Metavariable = _dom.default.Metavariable, metavariablesJSON = metavariables; ///
    metavariables = metavariablesJSON.map(function(metavariableJSON) {
        var _$json = metavariableJSON, metavariable = Metavariable.fromJSON(_$json, fileContext);
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
function conclusionToConclusionJSON(conclusion) {
    var conclusionJSON = conclusion.toJSON();
    return conclusionJSON;
}
function deductionToDeductionJSON(deduction) {
    var deductionJSON = deduction.toJSON();
    return deductionJSON;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdGVybSB9ID0ganNvbjtcblxuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICBqc29uID0gdGVybUpTT047ICAvLy9cblxuICBjb25zdCB7IFRlcm0gfSA9IGRvbTtcblxuICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdHlwZSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gbWV0YVR5cGUsXG4gICAgICAgICAgbWV0YVR5cGVOYW1lID0gbmFtZTsgIC8vL1xuXG4gICAgbWV0YVR5cGUgPSBmaWxlQ29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50ID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICBqc29uID0gc3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHJlZmVyZW5jZSB9ID0ganNvbjtcblxuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlOyAgLy8vXG5cbiAganNvbiA9IHJlZmVyZW5jZUpTT047ICAvLy9cblxuICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBkZWR1Y3Rpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGRvbSxcbiAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvbjsgIC8vL1xuXG4gIGpzb24gPSBkZWR1Y3Rpb25KU09OOyAgLy8vXG5cbiAgZGVkdWN0aW9uID0gRGVkdWN0aW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmeWluZ0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgc2F0aXNmeWluZyB9ID0ganNvbjtcblxuICByZXR1cm4gc2F0aXNmeWluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZG9tLFxuICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGUgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlQ2FsbCA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGRvbSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGw7ICAvLy9cblxuICAgIGpzb24gPSBwcm9jZWR1cmVDYWxsSlNPTjsgLy8vXG5cbiAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzRnJvbUpTT04oanNvbiwgdHlwZXMsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgdHlwZXM6IHR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGUgfSA9IGRvbTtcblxuICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcnVsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSdWxlIH0gPSBkb20sXG4gICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzOyAvLy9cblxuICBydWxlcyA9IHJ1bGVzSlNPTi5tYXAoKHJ1bGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHJ1bGVKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBkb20sXG4gICAgICAgIGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBheGlvbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBBeGlvbSB9ID0gZG9tLFxuICAgICAgICBheGlvbXNKU09OID0gYXhpb21zOyAvLy9cblxuICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByZW1pc2UgfSA9IGRvbSxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRoZW9yZW0gfSA9IGRvbSxcbiAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuXG4gIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLm1hcCgodGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzOyAvLy9cblxuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04ubWFwKChwcm9wZXJ0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJvcGVydHlKU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgc3VwZXJUeXBlczogc3VwZXJUeXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3Qgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLm1hcCgoc3VwZXJUeXBlSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgICAgICAgIHN1cGVyVHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcGFyYW1ldGVycyB9ID0ganNvbjtcblxuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnM7IC8vL1xuXG4gIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzSlNPTi5tYXAoKHBhcmFtZXRlckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcGFyYW1ldGVySlNPTiwgIC8vL1xuICAgICAgICAgIHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uamVjdHVyZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBkb20sXG4gICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzOyAvLy9cblxuICBjb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzSlNPTi5tYXAoKGNvbmplY3R1cmVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29tYmluYXRvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBkb20sXG4gICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzOyAvLy9cblxuICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTi5tYXAoKGNvbWJpbmF0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbnN0cnVjdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBkb20sXG4gICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnM7IC8vL1xuXG4gIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04ubWFwKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdGhlb3JlbSB9ID0gZG9tLFxuICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zOyAvLy9cblxuICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLm1hcCgobWV0YXRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3VwcG9zaXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGRvbSxcbiAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdWJzdGl0dXRpb25zID0gW10gfSA9IGpzb247ICAvLy9cblxuICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnMsICAvLy9cbiAgICAgICAgU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uOyAvLy9cblxuICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04ubWFwKChzdWJzdGl0dXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBTdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXM7IC8vL1xuXG4gIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTi5tYXAoKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICByZXR1cm4gbGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgcmV0dXJuIG1ldGFMZW1tYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtVG9UZXJtSlNPTih0ZXJtKSB7XG4gIGNvbnN0IHRlcm1KU09OID0gdGVybS50b0pTT04oKTtcblxuICByZXR1cm4gdGVybUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlVG9UeXBlSlNPTih0eXBlKSB7XG4gIGNvbnN0IHR5cGVKU09OID0gKHR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0eXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04obWV0YVR5cGUpIHtcbiAgY29uc3QgbWV0YVR5cGVKU09OID0gKG1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgcmV0dXJuIG1ldGFUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTihzdGF0ZW1lbnQpIHtcbiAgbGV0IHN0YXRlbWVudEpTT04gPSBudWxsO1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50LnRvSlNPTigpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTihjb25jbHVzaW9uKSB7XG4gIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbi50b0pTT04oKTtcblxuICByZXR1cm4gY29uY2x1c2lvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04oZGVkdWN0aW9uKSB7XG4gIGNvbnN0IGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04obWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTihwcm9jZWR1cmVDYWxsKSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsSlNPTiA9IG51bGw7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGwudG9KU09OKCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc1RvVHlwZXNKU09OKHR5cGVzKSB7XG4gIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04oKTtcblxuICAgIHR5cGUgPSB0eXBlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzVG9SdWxlc0pTT04ocnVsZXMpIHtcbiAgY29uc3QgcnVsZXNKU09OID0gcnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTigpO1xuXG4gICAgcnVsZSA9IHJ1bGVKU09OOyAvLy9cblxuICAgIHJldHVybiBydWxlO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9MYWJlbHNKU09OKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgIHJldHVybiBsYWJlbEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zVG9BeGlvbXNKU09OKGF4aW9tcykge1xuICBjb25zdCBheGlvbXNKU09OID0gYXhpb21zLm1hcCgoYXhpb20pID0+IHtcbiAgICBjb25zdCBheGlvbUpTT04gPSBheGlvbS50b0pTT04oKTtcblxuICAgIGF4aW9tID0gYXhpb21KU09OOyAvLy9cblxuICAgIHJldHVybiBheGlvbTtcbiAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHByZW1pc2VzKSB7XG4gIGNvbnN0IHByZW1pc2VzSlNPTiA9IHByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS50b0pTT04oKTtcblxuICAgIHJldHVybiBwcmVtaXNlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1zVG9UaGVvcmVtc0pTT04odGhlb3JlbXMpIHtcbiAgY29uc3QgdGhlb3JlbXNKU09OID0gdGhlb3JlbXMubWFwKCh0aGVvcmVtKSA9PiB7XG4gICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgdGhlb3JlbSA9IHRoZW9yZW1KU09OOyAvLy9cblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OKHZhcmlhYmxlcykge1xuICBjb25zdCB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzLm1hcCgodmFyaWFibGUpID0+IHtcbiAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04oKTtcblxuICAgIHZhcmlhYmxlID0gdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04oc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlO1xuICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTihwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlckpTT04gPSBwYXJhbWV0ZXIudG9KU09OKCk7XG5cbiAgICBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTihwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlKU09OID0gcHJvcGVydHkudG9KU09OKCk7XG5cbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5SlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OKGNvbmplY3R1cmVzKSB7XG4gIGNvbnN0IGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzLm1hcCgoY29uamVjdHVyZSkgPT4ge1xuICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04oKTtcblxuICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04oY29tYmluYXRvcnMpIHtcbiAgY29uc3QgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnMubWFwKChjb21iaW5hdG9yKSA9PiB7XG4gICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTigpO1xuXG4gICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JKU09OOyAvLy9cblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKGNvbnN0cnVjdG9ycykge1xuICBjb25zdCBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKG1ldGF0aGVvcmVtcykge1xuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUpTT04gPSBtZXRhdGhlb3JlbS50b0pTT04oKTtcblxuICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1KU09OOyAvLy9cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTihzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucy5tYXBTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04obWV0YXZhcmlhYmxlcykge1xuICBjb25zdCBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXNKU09OO1xufVxuIl0sIm5hbWVzIjpbImF4aW9tc0Zyb21KU09OIiwiYXhpb21zVG9BeGlvbXNKU09OIiwiY29tYmluYXRvcnNGcm9tSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImNvbmplY3R1cmVzRnJvbUpTT04iLCJjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OIiwiY29uc3RydWN0b3JzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsImxhYmVsc0Zyb21KU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhVHlwZUZyb21KU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsInByb3BlcnRpZXNGcm9tSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwicmVmZXJlbmNlRnJvbUpTT04iLCJydWxlc0Zyb21KU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsInNhdGlzZnlpbmdGcm9tSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0aGVvcmVtc0Zyb21KU09OIiwidGhlb3JlbXNUb1RoZW9yZW1zSlNPTiIsInR5cGVGcm9tSlNPTiIsInR5cGVUb1R5cGVKU09OIiwidHlwZXNGcm9tSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImpzb24iLCJmaWxlQ29udGV4dCIsInRlcm0iLCJ0ZXJtSlNPTiIsIlRlcm0iLCJkb20iLCJmcm9tSlNPTiIsInR5cGUiLCJuYW1lIiwidHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJtZXRhVHlwZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwic3RhdGVtZW50IiwiU3RhdGVtZW50Iiwic3RhdGVtZW50SlNPTiIsInJlZmVyZW5jZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZUpTT04iLCJkZWR1Y3Rpb24iLCJEZWR1Y3Rpb24iLCJkZWR1Y3Rpb25KU09OIiwic2F0aXNmeWluZyIsImNvbmNsdXNpb24iLCJDb25jbHVzaW9uIiwiY29uY2x1c2lvbkpTT04iLCJtZXRhdmFyaWFibGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVKU09OIiwicHJvY2VkdXJlQ2FsbCIsIlByb2NlZHVyZUNhbGwiLCJwcm9jZWR1cmVDYWxsSlNPTiIsInR5cGVzIiwidHlwZXNKU09OIiwiVHlwZSIsImZvckVhY2giLCJ0eXBlSlNPTiIsInB1c2giLCJydWxlcyIsIlJ1bGUiLCJydWxlc0pTT04iLCJtYXAiLCJydWxlSlNPTiIsInJ1bGUiLCJsYWJlbHMiLCJMYWJlbCIsImxhYmVsc0pTT04iLCJsYWJlbEpTT04iLCJsYWJlbCIsImF4aW9tcyIsIkF4aW9tIiwiYXhpb21zSlNPTiIsImF4aW9tSlNPTiIsImF4aW9tIiwicHJlbWlzZXMiLCJQcmVtaXNlIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZUpTT04iLCJwcmVtaXNlIiwidGhlb3JlbXMiLCJUaGVvcmVtIiwidGhlb3JlbXNKU09OIiwidGhlb3JlbUpTT04iLCJ0aGVvcmVtIiwidmFyaWFibGVzIiwiVmFyaWFibGUiLCJ2YXJpYWJsZXNKU09OIiwidmFyaWFibGVKU09OIiwidmFyaWFibGUiLCJwcm9wZXJ0aWVzIiwiUHJvcGVydHkiLCJwcm9wZXJ0aWVzSlNPTiIsInByb3BlcnR5SlNPTiIsInByb3BlcnR5Iiwic3VwZXJUeXBlcyIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlSlNPTiIsInN1cGVyVHlwZU5hbWUiLCJzdXBlclR5cGUiLCJwYXJhbWV0ZXJzIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJKU09OIiwicGFyYW1ldGVyIiwiY29uamVjdHVyZXMiLCJDb25qZWN0dXJlIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZUpTT04iLCJjb25qZWN0dXJlIiwiY29tYmluYXRvcnMiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvckpTT04iLCJjb21iaW5hdG9yIiwiY29uc3RydWN0b3JzIiwiQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JKU09OIiwiY29uc3RydWN0b3IiLCJtZXRhdGhlb3JlbXMiLCJNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdGhlb3JlbUpTT04iLCJtZXRhdGhlb3JlbSIsInN1cHBvc2l0aW9ucyIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uSlNPTiIsInN1cHBvc2l0aW9uIiwic3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNKU09OIiwiU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uSlNPTiIsInN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzSlNPTiIsImxlbW1hcyIsIm1ldGFMZW1tYXMiLCJ0b0pTT04iLCJtZXRhVHlwZUpTT04iLCJtYXBTdWJzdGl0dXRp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