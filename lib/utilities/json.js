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
    superTypeToSuperTypeJSON: function() {
        return superTypeToSuperTypeJSON;
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
function conclusionFromJSON(json, fileContext) {
    var conclusion = json.conclusion;
    var Conclusion = _dom.default.Conclusion, conclusionJSON = conclusion; ///
    json = conclusionJSON; ///
    conclusion = Conclusion.fromJSON(json, fileContext);
    return conclusion;
}
function deductionFromJSON(json, fileContext) {
    var deduction = json.deduction;
    var Deduction = _dom.default.Deduction, deductionJSON = deduction; ///
    json = deductionJSON; ///
    deduction = Deduction.fromJSON(json, fileContext);
    return deduction;
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
function superTypeToSuperTypeJSON(superType) {
    var superTypeJSON = superType.toJSON();
    return superTypeJSON;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdGVybSB9ID0ganNvbjtcblxuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICBqc29uID0gdGVybUpTT047ICAvLy9cblxuICBjb25zdCB7IFRlcm0gfSA9IGRvbTtcblxuICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdHlwZSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gbWV0YVR5cGUsXG4gICAgICAgICAgbWV0YVR5cGVOYW1lID0gbmFtZTsgIC8vL1xuXG4gICAgbWV0YVR5cGUgPSBmaWxlQ29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50ID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICBqc29uID0gc3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHJlZmVyZW5jZSB9ID0ganNvbjtcblxuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlOyAgLy8vXG5cbiAganNvbiA9IHJlZmVyZW5jZUpTT047ICAvLy9cblxuICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGRvbSxcbiAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgZGVkdWN0aW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRGVkdWN0aW9uIH0gPSBkb20sXG4gICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb247ICAvLy9cblxuICBqc29uID0gZGVkdWN0aW9uSlNPTjsgIC8vL1xuXG4gIGRlZHVjdGlvbiA9IERlZHVjdGlvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlOyAgLy8vXG5cbiAganNvbiA9IG1ldGF2YXJpYWJsZUpTT047IC8vL1xuXG4gIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVDYWxsID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZG9tLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbDsgIC8vL1xuXG4gICAganNvbiA9IHByb2NlZHVyZUNhbGxKU09OOyAvLy9cblxuICAgIHByb2NlZHVyZUNhbGwgPSBQcm9jZWR1cmVDYWxsLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tSlNPTihqc29uLCB0eXBlcywgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyB0eXBlczogdHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZSB9ID0gZG9tO1xuXG4gIHR5cGVzSlNPTi5mb3JFYWNoKCh0eXBlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHR5cGVzLnB1c2godHlwZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBydWxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFJ1bGUgfSA9IGRvbSxcbiAgICAgICAgcnVsZXNKU09OID0gcnVsZXM7IC8vL1xuXG4gIHJ1bGVzID0gcnVsZXNKU09OLm1hcCgocnVsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IGRvbSxcbiAgICAgICAgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGF4aW9tcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEF4aW9tIH0gPSBkb20sXG4gICAgICAgIGF4aW9tc0pTT04gPSBheGlvbXM7IC8vL1xuXG4gIGF4aW9tcyA9IGF4aW9tc0pTT04ubWFwKChheGlvbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXhpb21KU09OLCAgLy8vXG4gICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHByZW1pc2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gZG9tLFxuICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLm1hcCgocHJlbWlzZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJlbWlzZUpTT04sIC8vL1xuICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVGhlb3JlbSB9ID0gZG9tLFxuICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtczsgLy8vXG5cbiAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04ubWFwKCh0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIHRoZW9yZW0gPSBUaGVvcmVtLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzOyAvLy9cblxuICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLm1hcCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHByb3BlcnRpZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcm9wZXJ0eSB9ID0gZG9tLFxuICAgICAgICBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXM7IC8vL1xuXG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTi5tYXAoKHByb3BlcnR5SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcm9wZXJ0eUpTT04sICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBzdXBlclR5cGVzOiBzdXBlclR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0pTT04ubWFwKChzdXBlclR5cGVKU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IHN1cGVyVHlwZUpTT04sICAvLy9cbiAgICAgICAgICAgICAgICB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBwYXJhbWV0ZXJzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgIHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVyczsgLy8vXG5cbiAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNKU09OLm1hcCgocGFyYW1ldGVySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwYXJhbWV0ZXJKU09OLCAgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb25qZWN0dXJlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IGRvbSxcbiAgICAgICAgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXM7IC8vL1xuXG4gIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLm1hcCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uamVjdHVyZUpTT04sICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb21iaW5hdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IGRvbSxcbiAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnM7IC8vL1xuXG4gIGNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNKU09OLm1hcCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29tYmluYXRvckpTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uc3RydWN0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IGRvbSxcbiAgICAgICAgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9yczsgLy8vXG5cbiAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzSlNPTi5tYXAoKGNvbnN0cnVjdG9ySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb25zdHJ1Y3RvckpTT04sICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF0aGVvcmVtIH0gPSBkb20sXG4gICAgICAgIG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXM7IC8vL1xuXG4gIG1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtc0pTT04ubWFwKChtZXRhdGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBNZXRhdGhlb3JlbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdXBwb3NpdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZG9tLFxuICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTi5tYXAoKHN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN1YnN0aXR1dGlvbnMgPSBbXSB9ID0ganNvbjsgIC8vL1xuXG4gIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucywgIC8vL1xuICAgICAgICBTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb247IC8vL1xuXG4gIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3Vic3RpdHV0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IFN1YnN0aXR1dGlvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlczsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNKU09OLm1hcCgobWV0YXZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBsZW1tYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhTGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICByZXR1cm4gbWV0YUxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Ub1Rlcm1KU09OKHRlcm0pIHtcbiAgY29uc3QgdGVybUpTT04gPSB0ZXJtLnRvSlNPTigpO1xuXG4gIHJldHVybiB0ZXJtSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVUb1R5cGVKU09OKHR5cGUpIHtcbiAgY29uc3QgdHlwZUpTT04gPSAodHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgdHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVUb01ldGFUeXBlSlNPTihtZXRhVHlwZSkge1xuICBjb25zdCBtZXRhVHlwZUpTT04gPSAobWV0YVR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhVHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICByZXR1cm4gbWV0YVR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlVG9TdXBlclR5cGVKU09OKHN1cGVyVHlwZSkge1xuICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gIHJldHVybiBzdXBlclR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHN0YXRlbWVudCkge1xuICBsZXQgc3RhdGVtZW50SlNPTiA9IG51bGw7XG5cbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQudG9KU09OKCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50SlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKGNvbmNsdXNpb24pIHtcbiAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTihkZWR1Y3Rpb24pIHtcbiAgY29uc3QgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvbi50b0pTT04oKTtcblxuICByZXR1cm4gZGVkdWN0aW9uSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTihtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04oKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OKHByb2NlZHVyZUNhbGwpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGxKU09OID0gbnVsbDtcblxuICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbC50b0pTT04oKTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzVG9UeXBlc0pTT04odHlwZXMpIHtcbiAgY29uc3QgdHlwZXNKU09OID0gdHlwZXMubWFwKCh0eXBlKSA9PiB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTigpO1xuXG4gICAgdHlwZSA9IHR5cGVKU09OOyAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9KTtcblxuICByZXR1cm4gdHlwZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNUb1J1bGVzSlNPTihydWxlcykge1xuICBjb25zdCBydWxlc0pTT04gPSBydWxlcy5tYXAoKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKCk7XG5cbiAgICBydWxlID0gcnVsZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNUb0xhYmVsc0pTT04obGFiZWxzKSB7XG4gIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVsc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNUb0F4aW9tc0pTT04oYXhpb21zKSB7XG4gIGNvbnN0IGF4aW9tc0pTT04gPSBheGlvbXMubWFwKChheGlvbSkgPT4ge1xuICAgIGNvbnN0IGF4aW9tSlNPTiA9IGF4aW9tLnRvSlNPTigpO1xuXG4gICAgYXhpb20gPSBheGlvbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzVG9QcmVtaXNlc0pTT04ocHJlbWlzZXMpIHtcbiAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNUb1RoZW9yZW1zSlNPTih0aGVvcmVtcykge1xuICBjb25zdCB0aGVvcmVtc0pTT04gPSB0aGVvcmVtcy5tYXAoKHRoZW9yZW0pID0+IHtcbiAgICBjb25zdCB0aGVvcmVtSlNPTiA9IHRoZW9yZW0udG9KU09OKCk7XG5cbiAgICB0aGVvcmVtID0gdGhlb3JlbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odmFyaWFibGVzKSB7XG4gIGNvbnN0IHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047ICAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTihzdXBlclR5cGVzKSB7XG4gIGNvbnN0IHN1cGVyVHlwZXNKU09OID0gc3VwZXJUeXBlcy5tYXAoKHN1cGVyVHlwZSkgPT4ge1xuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSBzdXBlclR5cGUudG9KU09OKCk7XG5cbiAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVKU09OOyAvLy9cblxuICAgIHJldHVybiBzdXBlclR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVySlNPTiA9IHBhcmFtZXRlci50b0pTT04oKTtcblxuICAgIHBhcmFtZXRlciA9IHBhcmFtZXRlckpTT047ICAvLy9cblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzLm1hcCgocHJvcGVydHkpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eUpTT04gPSBwcm9wZXJ0eS50b0pTT04oKTtcblxuICAgIHByb3BlcnR5ID0gcHJvcGVydHlKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04oY29uamVjdHVyZXMpIHtcbiAgY29uc3QgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTigpO1xuXG4gICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTihjb21iaW5hdG9ycykge1xuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKCk7XG5cbiAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04oc3VwcG9zaXRpb25zKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04oY29uc3RydWN0b3JzKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTigpO1xuXG4gICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04obWV0YXRoZW9yZW1zKSB7XG4gIGNvbnN0IG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXMubWFwKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLm1hcFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTihtZXRhdmFyaWFibGVzKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG4iXSwibmFtZXMiOlsiYXhpb21zRnJvbUpTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwibGFiZWxzRnJvbUpTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsIm1ldGFUeXBlRnJvbUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwicGFyYW1ldGVyc0Zyb21KU09OIiwicGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04iLCJwcmVtaXNlc0Zyb21KU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsInByb2NlZHVyZUNhbGxGcm9tSlNPTiIsInByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJyZWZlcmVuY2VGcm9tSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJydWxlc1RvUnVsZXNKU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiIsInN1cGVyVHlwZVRvU3VwZXJUeXBlSlNPTiIsInN1cGVyVHlwZXNGcm9tSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJ0ZXJtRnJvbUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidHlwZUZyb21KU09OIiwidHlwZVRvVHlwZUpTT04iLCJ0eXBlc0Zyb21KU09OIiwidHlwZXNUb1R5cGVzSlNPTiIsInZhcmlhYmxlc0Zyb21KU09OIiwidmFyaWFibGVzVG9WYXJpYWJsZXNKU09OIiwianNvbiIsImZpbGVDb250ZXh0IiwidGVybSIsInRlcm1KU09OIiwiVGVybSIsImRvbSIsImZyb21KU09OIiwidHlwZSIsIm5hbWUiLCJ0eXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJzdGF0ZW1lbnQiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRKU09OIiwicmVmZXJlbmNlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlSlNPTiIsImNvbmNsdXNpb24iLCJDb25jbHVzaW9uIiwiY29uY2x1c2lvbkpTT04iLCJkZWR1Y3Rpb24iLCJEZWR1Y3Rpb24iLCJkZWR1Y3Rpb25KU09OIiwibWV0YXZhcmlhYmxlIiwiTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlSlNPTiIsInByb2NlZHVyZUNhbGwiLCJQcm9jZWR1cmVDYWxsIiwicHJvY2VkdXJlQ2FsbEpTT04iLCJ0eXBlcyIsInR5cGVzSlNPTiIsIlR5cGUiLCJmb3JFYWNoIiwidHlwZUpTT04iLCJwdXNoIiwicnVsZXMiLCJSdWxlIiwicnVsZXNKU09OIiwibWFwIiwicnVsZUpTT04iLCJydWxlIiwibGFiZWxzIiwiTGFiZWwiLCJsYWJlbHNKU09OIiwibGFiZWxKU09OIiwibGFiZWwiLCJheGlvbXMiLCJBeGlvbSIsImF4aW9tc0pTT04iLCJheGlvbUpTT04iLCJheGlvbSIsInByZW1pc2VzIiwiUHJlbWlzZSIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwicHJlbWlzZSIsInRoZW9yZW1zIiwiVGhlb3JlbSIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1KU09OIiwidGhlb3JlbSIsInZhcmlhYmxlcyIsIlZhcmlhYmxlIiwidmFyaWFibGVzSlNPTiIsInZhcmlhYmxlSlNPTiIsInZhcmlhYmxlIiwicHJvcGVydGllcyIsIlByb3BlcnR5IiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0eUpTT04iLCJwcm9wZXJ0eSIsInN1cGVyVHlwZXMiLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZUpTT04iLCJzdXBlclR5cGVOYW1lIiwic3VwZXJUeXBlIiwicGFyYW1ldGVycyIsIlBhcmFtZXRlciIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVySlNPTiIsInBhcmFtZXRlciIsImNvbmplY3R1cmVzIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29uamVjdHVyZSIsImNvbWJpbmF0b3JzIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JKU09OIiwiY29tYmluYXRvciIsImNvbnN0cnVjdG9ycyIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsImNvbnN0cnVjdG9yIiwibWV0YXRoZW9yZW1zIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1KU09OIiwibWV0YXRoZW9yZW0iLCJzdXBwb3NpdGlvbnMiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbkpTT04iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zSlNPTiIsIlN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkpTT04iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwibWFwU3Vi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