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
    get satisfiableFromJSON () {
        return satisfiableFromJSON;
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
function satisfiableFromJSON(json, fileContext) {
    var satisfiable = json.satisfiable;
    return satisfiable;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdGVybSB9ID0ganNvbjtcblxuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICBqc29uID0gdGVybUpTT047ICAvLy9cblxuICBjb25zdCB7IFRlcm0gfSA9IGRvbTtcblxuICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdHlwZSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gbWV0YVR5cGUsXG4gICAgICAgICAgbWV0YVR5cGVOYW1lID0gbmFtZTsgIC8vL1xuXG4gICAgbWV0YVR5cGUgPSBmaWxlQ29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50ID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICBqc29uID0gc3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHJlZmVyZW5jZSB9ID0ganNvbjtcblxuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlOyAgLy8vXG5cbiAganNvbiA9IHJlZmVyZW5jZUpTT047ICAvLy9cblxuICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBkZWR1Y3Rpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGRvbSxcbiAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvbjsgIC8vL1xuXG4gIGpzb24gPSBkZWR1Y3Rpb25KU09OOyAgLy8vXG5cbiAgZGVkdWN0aW9uID0gRGVkdWN0aW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0aXNmaWFibGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IHNhdGlzZmlhYmxlIH0gPSBqc29uO1xuXG4gIHJldHVybiBzYXRpc2ZpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZG9tLFxuICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGUgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlQ2FsbCA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGRvbSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGw7ICAvLy9cblxuICAgIGpzb24gPSBwcm9jZWR1cmVDYWxsSlNPTjsgLy8vXG5cbiAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzRnJvbUpTT04oanNvbiwgdHlwZXMsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgdHlwZXM6IHR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGUgfSA9IGRvbTtcblxuICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcnVsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSdWxlIH0gPSBkb20sXG4gICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzOyAvLy9cblxuICBydWxlcyA9IHJ1bGVzSlNPTi5tYXAoKHJ1bGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHJ1bGVKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBkb20sXG4gICAgICAgIGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBheGlvbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBBeGlvbSB9ID0gZG9tLFxuICAgICAgICBheGlvbXNKU09OID0gYXhpb21zOyAvLy9cblxuICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByZW1pc2UgfSA9IGRvbSxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRoZW9yZW0gfSA9IGRvbSxcbiAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuXG4gIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLm1hcCgodGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzOyAvLy9cblxuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04ubWFwKChwcm9wZXJ0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJvcGVydHlKU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgc3VwZXJUeXBlczogc3VwZXJUeXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3Qgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLm1hcCgoc3VwZXJUeXBlSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgICAgICAgIHN1cGVyVHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcGFyYW1ldGVycyB9ID0ganNvbjtcblxuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnM7IC8vL1xuXG4gIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzSlNPTi5tYXAoKHBhcmFtZXRlckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcGFyYW1ldGVySlNPTiwgIC8vL1xuICAgICAgICAgIHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uamVjdHVyZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBkb20sXG4gICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzOyAvLy9cblxuICBjb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzSlNPTi5tYXAoKGNvbmplY3R1cmVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29tYmluYXRvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBkb20sXG4gICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzOyAvLy9cblxuICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTi5tYXAoKGNvbWJpbmF0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbnN0cnVjdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBkb20sXG4gICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnM7IC8vL1xuXG4gIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04ubWFwKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdGhlb3JlbSB9ID0gZG9tLFxuICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zOyAvLy9cblxuICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLm1hcCgobWV0YXRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3VwcG9zaXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGRvbSxcbiAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdWJzdGl0dXRpb25zID0gW10gfSA9IGpzb247ICAvLy9cblxuICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnMsICAvLy9cbiAgICAgICAgU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uOyAvLy9cblxuICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04ubWFwKChzdWJzdGl0dXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBTdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXM7IC8vL1xuXG4gIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTi5tYXAoKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICByZXR1cm4gbGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgcmV0dXJuIG1ldGFMZW1tYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtVG9UZXJtSlNPTih0ZXJtKSB7XG4gIGNvbnN0IHRlcm1KU09OID0gdGVybS50b0pTT04oKTtcblxuICByZXR1cm4gdGVybUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlVG9UeXBlSlNPTih0eXBlKSB7XG4gIGNvbnN0IHR5cGVKU09OID0gKHR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0eXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04obWV0YVR5cGUpIHtcbiAgY29uc3QgbWV0YVR5cGVKU09OID0gKG1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgcmV0dXJuIG1ldGFUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTihzdGF0ZW1lbnQpIHtcbiAgbGV0IHN0YXRlbWVudEpTT04gPSBudWxsO1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50LnRvSlNPTigpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTihjb25jbHVzaW9uKSB7XG4gIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbi50b0pTT04oKTtcblxuICByZXR1cm4gY29uY2x1c2lvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04oZGVkdWN0aW9uKSB7XG4gIGNvbnN0IGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04obWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTihwcm9jZWR1cmVDYWxsKSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsSlNPTiA9IG51bGw7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGwudG9KU09OKCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc1RvVHlwZXNKU09OKHR5cGVzKSB7XG4gIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04oKTtcblxuICAgIHR5cGUgPSB0eXBlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzVG9SdWxlc0pTT04ocnVsZXMpIHtcbiAgY29uc3QgcnVsZXNKU09OID0gcnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTigpO1xuXG4gICAgcnVsZSA9IHJ1bGVKU09OOyAvLy9cblxuICAgIHJldHVybiBydWxlO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9MYWJlbHNKU09OKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgIHJldHVybiBsYWJlbEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zVG9BeGlvbXNKU09OKGF4aW9tcykge1xuICBjb25zdCBheGlvbXNKU09OID0gYXhpb21zLm1hcCgoYXhpb20pID0+IHtcbiAgICBjb25zdCBheGlvbUpTT04gPSBheGlvbS50b0pTT04oKTtcblxuICAgIGF4aW9tID0gYXhpb21KU09OOyAvLy9cblxuICAgIHJldHVybiBheGlvbTtcbiAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHByZW1pc2VzKSB7XG4gIGNvbnN0IHByZW1pc2VzSlNPTiA9IHByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS50b0pTT04oKTtcblxuICAgIHJldHVybiBwcmVtaXNlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1zVG9UaGVvcmVtc0pTT04odGhlb3JlbXMpIHtcbiAgY29uc3QgdGhlb3JlbXNKU09OID0gdGhlb3JlbXMubWFwKCh0aGVvcmVtKSA9PiB7XG4gICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgdGhlb3JlbSA9IHRoZW9yZW1KU09OOyAvLy9cblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OKHZhcmlhYmxlcykge1xuICBjb25zdCB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzLm1hcCgodmFyaWFibGUpID0+IHtcbiAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04oKTtcblxuICAgIHZhcmlhYmxlID0gdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04oc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlO1xuICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTihwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlckpTT04gPSBwYXJhbWV0ZXIudG9KU09OKCk7XG5cbiAgICBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTihwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlKU09OID0gcHJvcGVydHkudG9KU09OKCk7XG5cbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5SlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OKGNvbmplY3R1cmVzKSB7XG4gIGNvbnN0IGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzLm1hcCgoY29uamVjdHVyZSkgPT4ge1xuICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04oKTtcblxuICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04oY29tYmluYXRvcnMpIHtcbiAgY29uc3QgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnMubWFwKChjb21iaW5hdG9yKSA9PiB7XG4gICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTigpO1xuXG4gICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JKU09OOyAvLy9cblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKGNvbnN0cnVjdG9ycykge1xuICBjb25zdCBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKG1ldGF0aGVvcmVtcykge1xuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUpTT04gPSBtZXRhdGhlb3JlbS50b0pTT04oKTtcblxuICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1KU09OOyAvLy9cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTihzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucy5tYXBTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04obWV0YXZhcmlhYmxlcykge1xuICBjb25zdCBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXNKU09OO1xufVxuIl0sIm5hbWVzIjpbImF4aW9tc0Zyb21KU09OIiwiYXhpb21zVG9BeGlvbXNKU09OIiwiY29tYmluYXRvcnNGcm9tSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImNvbmplY3R1cmVzRnJvbUpTT04iLCJjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OIiwiY29uc3RydWN0b3JzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsImxhYmVsc0Zyb21KU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhVHlwZUZyb21KU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsInByb3BlcnRpZXNGcm9tSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwicmVmZXJlbmNlRnJvbUpTT04iLCJydWxlc0Zyb21KU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsInNhdGlzZmlhYmxlRnJvbUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwic3VwZXJUeXBlc0Zyb21KU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInRlcm1Gcm9tSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwidGhlb3JlbXNGcm9tSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ0eXBlRnJvbUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInR5cGVzRnJvbUpTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJqc29uIiwiZmlsZUNvbnRleHQiLCJ0ZXJtIiwidGVybUpTT04iLCJUZXJtIiwiZG9tIiwiZnJvbUpTT04iLCJ0eXBlIiwibmFtZSIsInR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwibWV0YVR5cGUiLCJtZXRhVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsInN0YXRlbWVudCIsIlN0YXRlbWVudCIsInN0YXRlbWVudEpTT04iLCJyZWZlcmVuY2UiLCJSZWZlcmVuY2UiLCJyZWZlcmVuY2VKU09OIiwiZGVkdWN0aW9uIiwiRGVkdWN0aW9uIiwiZGVkdWN0aW9uSlNPTiIsInNhdGlzZmlhYmxlIiwiY29uY2x1c2lvbiIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uSlNPTiIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJwcm9jZWR1cmVDYWxsIiwiUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxKU09OIiwidHlwZXMiLCJ0eXBlc0pTT04iLCJUeXBlIiwiZm9yRWFjaCIsInR5cGVKU09OIiwicHVzaCIsInJ1bGVzIiwiUnVsZSIsInJ1bGVzSlNPTiIsIm1hcCIsInJ1bGVKU09OIiwicnVsZSIsImxhYmVscyIsIkxhYmVsIiwibGFiZWxzSlNPTiIsImxhYmVsSlNPTiIsImxhYmVsIiwiYXhpb21zIiwiQXhpb20iLCJheGlvbXNKU09OIiwiYXhpb21KU09OIiwiYXhpb20iLCJwcmVtaXNlcyIsIlByZW1pc2UiLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlSlNPTiIsInByZW1pc2UiLCJ0aGVvcmVtcyIsIlRoZW9yZW0iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtSlNPTiIsInRoZW9yZW0iLCJ2YXJpYWJsZXMiLCJWYXJpYWJsZSIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZUpTT04iLCJ2YXJpYWJsZSIsInByb3BlcnRpZXMiLCJQcm9wZXJ0eSIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydHlKU09OIiwicHJvcGVydHkiLCJzdXBlclR5cGVzIiwic3VwZXJUeXBlc0pTT04iLCJzdXBlclR5cGVKU09OIiwic3VwZXJUeXBlTmFtZSIsInN1cGVyVHlwZSIsInBhcmFtZXRlcnMiLCJQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJzSlNPTiIsInBhcmFtZXRlckpTT04iLCJwYXJhbWV0ZXIiLCJjb25qZWN0dXJlcyIsIkNvbmplY3R1cmUiLCJjb25qZWN0dXJlc0pTT04iLCJjb25qZWN0dXJlSlNPTiIsImNvbmplY3R1cmUiLCJjb21iaW5hdG9ycyIsIkNvbWJpbmF0b3IiLCJjb21iaW5hdG9yc0pTT04iLCJjb21iaW5hdG9ySlNPTiIsImNvbWJpbmF0b3IiLCJjb25zdHJ1Y3RvcnMiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJjb25zdHJ1Y3RvciIsIm1ldGF0aGVvcmVtcyIsIk1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtSlNPTiIsIm1ldGF0aGVvcmVtIiwic3VwcG9zaXRpb25zIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25KU09OIiwic3VwcG9zaXRpb24iLCJzdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc0pTT04iLCJTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25KU09OIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXNKU09OIiwibGVtbWFzIiwibWV0YUxlbW1hcyIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1hcFN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBa0xnQkE7ZUFBQUE7O1FBd1VBQztlQUFBQTs7UUF6TUFDO2VBQUFBOztRQXVTQUM7ZUFBQUE7O1FBNWZBQztlQUFBQTs7UUFnV0FDO2VBQUFBOztRQTNKQUM7ZUFBQUE7O1FBMlNBQztlQUFBQTs7UUEzUUFDO2VBQUFBOztRQTZTQUM7ZUFBQUE7O1FBcmlCQUM7ZUFBQUE7O1FBeVhBQztlQUFBQTs7UUFoU0FDO2VBQUFBOztRQThVQUM7ZUFBQUE7O1FBL0ZBQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBdlhBQztlQUFBQTs7UUEyWUFDO2VBQUFBOztRQTFGQUM7ZUFBQUE7O1FBeVNBQztlQUFBQTs7UUFqaEJBQztlQUFBQTs7UUErVkFDO2VBQUFBOztRQXZFQUM7ZUFBQUE7O1FBK1FBQztlQUFBQTs7UUEvWEFDO2VBQUFBOztRQW1TQUM7ZUFBQUE7O1FBbFhBQztlQUFBQTs7UUFvVUFDO2VBQUFBOztRQWhaQUM7ZUFBQUE7O1FBd1ZBQztlQUFBQTs7UUE1TkFDO2VBQUFBOztRQThVQUM7ZUFBQUE7O1FBcGdCQUM7ZUFBQUE7O1FBc0ZBQztlQUFBQTs7UUFrVkFDO2VBQUFBOztRQTlZQUM7ZUFBQUE7O1FBekNBQztlQUFBQTs7UUFxWUFDO2VBQUFBOztRQWpFQUM7ZUFBQUE7O1FBcVJBQztlQUFBQTs7UUFwWUFDO2VBQUFBOztRQXNTQUM7ZUFBQUE7O1FBdk1BQztlQUFBQTs7UUFtUUFDO2VBQUFBOztRQS9sQkFDO2VBQUFBOztRQXdaQUM7ZUFBQUE7O1FBM01BQztlQUFBQTs7UUE4VEFDO2VBQUFBOztRQTdmQUM7ZUFBQUE7O1FBZ1pBQztlQUFBQTs7UUE5UkFDO2VBQUFBOztRQW1WQUM7ZUFBQUE7O1FBdFBBQztlQUFBQTs7UUEwVEFDO2VBQUFBOzs7MERBMWhCQTtnRUFDa0I7Ozs7OztBQUUzQixTQUFTVCxhQUFhVSxJQUFJLEVBQUVDLFdBQVc7SUFDNUMsSUFBSSxBQUFFQyxPQUFTRixLQUFURTtJQUVOLElBQU1DLFdBQVdELE1BQU8sR0FBRztJQUUzQkYsT0FBT0csVUFBVyxHQUFHO0lBRXJCLElBQU0sQUFBRUMsT0FBU0MsWUFBRyxDQUFaRDtJQUVSRixPQUFPRSxLQUFLRSxRQUFRLENBQUNOLE1BQU1DO0lBRTNCLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTUixhQUFhTSxJQUFJLEVBQUVDLFdBQVc7SUFDNUMsSUFBSSxBQUFFTSxPQUFTUCxLQUFUTztJQUVOLElBQUlBLFNBQVMsTUFBTTtRQUNqQixJQUFNLEFBQUVDLE9BQVNELEtBQVRDLE1BQ0ZDLFdBQVdELE1BQU8sR0FBRztRQUUzQkQsT0FBT04sWUFBWVMsa0JBQWtCLENBQUNEO0lBQ3hDO0lBRUEsT0FBT0Y7QUFDVDtBQUVPLFNBQVM3QyxpQkFBaUJzQyxJQUFJLEVBQUVDLFdBQVc7SUFDaEQsSUFBSSxBQUFFVSxXQUFhWCxLQUFiVztJQUVOLElBQUlBLGFBQWEsTUFBTTtRQUNyQixJQUFNLEFBQUVILE9BQVNHLFNBQVRILE1BQ0ZJLGVBQWVKLE1BQU8sR0FBRztRQUUvQkcsV0FBV1YsWUFBWVksMEJBQTBCLENBQUNEO0lBQ3BEO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVM3QixrQkFBa0JrQixJQUFJLEVBQUVDLFdBQVc7SUFDakQsc0JBQTJCRCxLQUFyQmMsV0FBQUEseUNBQVk7SUFFbEIsSUFBSUEsY0FBYyxNQUFNO1FBQ3RCLElBQU0sQUFBRUMsWUFBY1YsWUFBRyxDQUFqQlUsV0FDRkMsZ0JBQWdCRixXQUFZLEdBQUc7UUFFckNkLE9BQU9nQixlQUFlLEdBQUc7UUFFekJGLFlBQVlDLFVBQVVULFFBQVEsQ0FBQ04sTUFBTUM7SUFDdkM7SUFFQSxPQUFPYTtBQUNUO0FBRU8sU0FBU3BDLGtCQUFrQnNCLElBQUksRUFBRUMsV0FBVztJQUNqRCxJQUFJLEFBQUVnQixZQUFjakIsS0FBZGlCO0lBRU4sSUFBTSxBQUFFQyxZQUFjYixZQUFHLENBQWpCYSxXQUNGQyxnQkFBZ0JGLFdBQVksR0FBRztJQUVyQ2pCLE9BQU9tQixlQUFnQixHQUFHO0lBRTFCRixZQUFZQyxVQUFVWixRQUFRLENBQUNOLE1BQU1DO0lBRXJDLE9BQU9nQjtBQUNUO0FBRU8sU0FBUzdELGtCQUFrQjRDLElBQUksRUFBRUMsV0FBVztJQUNqRCxJQUFJLEFBQUVtQixZQUFjcEIsS0FBZG9CO0lBRU4sSUFBTSxBQUFFQyxZQUFjaEIsWUFBRyxDQUFqQmdCLFdBQ0ZDLGdCQUFnQkYsV0FBWSxHQUFHO0lBRXJDcEIsT0FBT3NCLGVBQWdCLEdBQUc7SUFFMUJGLFlBQVlDLFVBQVVmLFFBQVEsQ0FBQ04sTUFBTUM7SUFFckMsT0FBT21CO0FBQ1Q7QUFFTyxTQUFTdkMsb0JBQW9CbUIsSUFBSSxFQUFFQyxXQUFXO0lBQ25ELElBQU0sQUFBRXNCLGNBQWdCdkIsS0FBaEJ1QjtJQUVSLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTekUsbUJBQW1Ca0QsSUFBSSxFQUFFQyxXQUFXO0lBQ2xELElBQUksQUFBRXVCLGFBQWV4QixLQUFmd0I7SUFFTixJQUFNLEFBQUVDLGFBQWVwQixZQUFHLENBQWxCb0IsWUFDRkMsaUJBQWlCRixZQUFhLEdBQUc7SUFFdkN4QixPQUFPMEIsZ0JBQWlCLEdBQUc7SUFFM0JGLGFBQWFDLFdBQVduQixRQUFRLENBQUNOLE1BQU1DO0lBRXZDLE9BQU91QjtBQUNUO0FBRU8sU0FBUzFELHFCQUFxQmtDLElBQUksRUFBRUMsV0FBVztJQUNwRCxJQUFJLEFBQUUwQixlQUFpQjNCLEtBQWpCMkI7SUFFTixJQUFNLEFBQUVDLGVBQWlCdkIsWUFBRyxDQUFwQnVCLGNBQ0ZDLG1CQUFtQkYsY0FBZSxHQUFHO0lBRTNDM0IsT0FBTzZCLGtCQUFrQixHQUFHO0lBRTVCRixlQUFlQyxhQUFhdEIsUUFBUSxDQUFDTixNQUFNQztJQUUzQyxPQUFPMEI7QUFDVDtBQUVPLFNBQVNyRCxzQkFBc0IwQixJQUFJLEVBQUVDLFdBQVc7SUFDckQsMEJBQStCRCxLQUF6QjhCLGVBQUFBLGlEQUFnQjtJQUV0QixJQUFJQSxrQkFBa0IsTUFBTTtRQUMxQixJQUFNLEFBQUVDLGdCQUFrQjFCLFlBQUcsQ0FBckIwQixlQUNGQyxvQkFBb0JGLGVBQWdCLEdBQUc7UUFFN0M5QixPQUFPZ0MsbUJBQW1CLEdBQUc7UUFFN0JGLGdCQUFnQkMsY0FBY3pCLFFBQVEsQ0FBQ04sTUFBTUM7SUFDL0M7SUFFQSxPQUFPNkI7QUFDVDtBQUVPLFNBQVNsQyxjQUFjSSxJQUFJLEVBQUVpQyxLQUFLLEVBQUVoQyxXQUFXO0lBQ3BELElBQVFnQyxBQUFPQyxZQUFjbEMsS0FBckJpQztJQUVSLElBQU0sQUFBRUUsT0FBUzlCLFlBQUcsQ0FBWjhCO0lBRVJELFVBQVVFLE9BQU8sQ0FBQyxTQUFDQztRQUNqQixJQUFNckMsU0FBT3FDLFVBQ1A5QixPQUFPNEIsS0FBSzdCLFFBQVEsQ0FBQ04sUUFBTUM7UUFFakNnQyxNQUFNSyxJQUFJLENBQUMvQjtJQUNiO0FBQ0Y7QUFFTyxTQUFTNUIsY0FBY3FCLElBQUksRUFBRUMsV0FBVztJQUM3QyxJQUFJLEFBQUVzQyxRQUFVdkMsS0FBVnVDO0lBRU4sSUFBTSxBQUFFQyxPQUFTbkMsWUFBRyxDQUFabUMsTUFDRkMsWUFBWUYsT0FBTyxHQUFHO0lBRTVCQSxRQUFRRSxVQUFVQyxHQUFHLENBQUMsU0FBQ0M7UUFDckIsSUFBTTNDLFNBQU8yQyxVQUNQQyxPQUFPSixLQUFLbEMsUUFBUSxDQUFDTixRQUFNQztRQUVqQyxPQUFPMkM7SUFDVDtJQUVBLE9BQU9MO0FBQ1Q7QUFFTyxTQUFTakYsZUFBZTBDLElBQUksRUFBRUMsV0FBVztJQUM5QyxJQUFJLEFBQUU0QyxTQUFXN0MsS0FBWDZDO0lBRU4sSUFBTSxBQUFFQyxRQUFVekMsWUFBRyxDQUFieUMsT0FDRkMsYUFBYUYsUUFBUyxHQUFHO0lBRS9CQSxTQUFTRSxXQUFXTCxHQUFHLENBQUMsU0FBQ007UUFDdkIsSUFBTWhELFNBQU9nRCxXQUNQQyxRQUFRSCxNQUFNeEMsUUFBUSxDQUFDTixRQUFNQztRQUVuQyxPQUFPZ0Q7SUFDVDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTbkcsZUFBZXNELElBQUksRUFBRUMsV0FBVztJQUM5QyxJQUFJLEFBQUVpRCxTQUFXbEQsS0FBWGtEO0lBRU4sSUFBTSxBQUFFQyxRQUFVOUMsWUFBRyxDQUFiOEMsT0FDRkMsYUFBYUYsUUFBUSxHQUFHO0lBRTlCQSxTQUFTRSxXQUFXVixHQUFHLENBQUMsU0FBQ1c7UUFDdkIsSUFBTXJELFNBQU9xRCxXQUNQQyxRQUFRSCxNQUFNN0MsUUFBUSxDQUFDTixRQUFNQztRQUVuQyxPQUFPcUQ7SUFDVDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTOUUsaUJBQWlCNEIsSUFBSSxFQUFFQyxXQUFXO0lBQ2hELElBQUksQUFBRXNELFdBQWF2RCxLQUFidUQ7SUFFTixJQUFNLEFBQUVDLFVBQVluRCxZQUFHLENBQWZtRCxTQUNGQyxlQUFlRixVQUFXLEdBQUc7SUFFbkNBLFdBQVdFLGFBQWFmLEdBQUcsQ0FBQyxTQUFDZ0I7UUFDM0IsSUFBTTFELFNBQU8wRCxhQUNQQyxVQUFVSCxRQUFRbEQsUUFBUSxDQUFDTixRQUFNQztRQUV2QyxPQUFPMEQ7SUFDVDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTL0QsaUJBQWlCUSxJQUFJLEVBQUVDLFdBQVc7SUFDaEQsSUFBSSxBQUFFMkQsV0FBYTVELEtBQWI0RDtJQUVOLElBQU0sQUFBRUMsVUFBWXhELFlBQUcsQ0FBZndELFNBQ0ZDLGVBQWVGLFVBQVUsR0FBRztJQUVsQ0EsV0FBV0UsYUFBYXBCLEdBQUcsQ0FBQyxTQUFDcUI7UUFDM0IsSUFBTS9ELFNBQU8rRCxhQUNQQyxVQUFVSCxRQUFRdkQsUUFBUSxDQUFDTixRQUFNQztRQUV2QyxPQUFPK0Q7SUFDVDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTOUQsa0JBQWtCRSxJQUFJLEVBQUVDLFdBQVc7SUFDakQsSUFBSSxBQUFFZ0UsWUFBY2pFLEtBQWRpRTtJQUVOLElBQU0sQUFBRUMsV0FBYTdELFlBQUcsQ0FBaEI2RCxVQUNGQyxnQkFBZ0JGLFdBQVcsR0FBRztJQUVwQ0EsWUFBWUUsY0FBY3pCLEdBQUcsQ0FBQyxTQUFDMEI7UUFDN0IsSUFBTXBFLFNBQU9vRSxjQUNQQyxXQUFXSCxTQUFTNUQsUUFBUSxDQUFDTixRQUFNQztRQUV6QyxPQUFPb0U7SUFDVDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTekYsbUJBQW1Cd0IsSUFBSSxFQUFFQyxXQUFXO0lBQ2xELElBQUksQUFBRXFFLGFBQWV0RSxLQUFmc0U7SUFFTixJQUFNLEFBQUVDLFdBQWFsRSxZQUFHLENBQWhCa0UsVUFDRkMsaUJBQWlCRixZQUFZLEdBQUc7SUFFdENBLGFBQWFFLGVBQWU5QixHQUFHLENBQUMsU0FBQytCO1FBQy9CLElBQU16RSxTQUFPeUUsY0FDUEMsV0FBV0gsU0FBU2pFLFFBQVEsQ0FBQ04sUUFBTUM7UUFFekMsT0FBT3lFO0lBQ1Q7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBU3BGLG1CQUFtQmMsSUFBSSxFQUFFQyxXQUFXO0lBQ2xELElBQVEwRSxBQUFZQyxpQkFBbUI1RSxLQUEvQjJFO0lBRVIsSUFBTUEsYUFBYUMsZUFBZWxDLEdBQUcsQ0FBQyxTQUFDbUM7UUFDL0IsSUFBTTdFLFNBQU82RSxlQUNQLEFBQUVyRSxPQUFTUixPQUFUUSxNQUNGc0UsZ0JBQWdCdEUsTUFDaEJ1RSxZQUFZOUUsWUFBWVMsa0JBQWtCLENBQUNvRTtRQUVqRCxPQUFPQztJQUNUO0lBRU4sT0FBT0o7QUFDVDtBQUVPLFNBQVN6RyxtQkFBbUI4QixJQUFJLEVBQUVDLFdBQVc7SUFDbEQsSUFBSSxBQUFFK0UsYUFBZWhGLEtBQWZnRjtJQUVOLElBQU0sQUFBRUMsWUFBYzVFLFlBQUcsQ0FBakI0RSxXQUNGQyxpQkFBaUJGLFlBQVksR0FBRztJQUV0Q0EsYUFBYUUsZUFBZXhDLEdBQUcsQ0FBQyxTQUFDeUM7UUFDL0IsSUFBTW5GLFNBQU9tRixlQUNQQyxZQUFZSCxVQUFVM0UsUUFBUSxDQUFDTixRQUFNQztRQUUzQyxPQUFPbUY7SUFDVDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTaEksb0JBQW9CZ0QsSUFBSSxFQUFFQyxXQUFXO0lBQ25ELElBQUksQUFBRW9GLGNBQWdCckYsS0FBaEJxRjtJQUVOLElBQU0sQUFBRUMsYUFBZWpGLFlBQUcsQ0FBbEJpRixZQUNGQyxrQkFBa0JGLGFBQWEsR0FBRztJQUV4Q0EsY0FBY0UsZ0JBQWdCN0MsR0FBRyxDQUFDLFNBQUM4QztRQUNqQyxJQUFNeEYsU0FBT3dGLGdCQUNQQyxhQUFhSCxXQUFXaEYsUUFBUSxDQUFDTixRQUFNQztRQUU3QyxPQUFPd0Y7SUFDVDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTekksb0JBQW9Cb0QsSUFBSSxFQUFFQyxXQUFXO0lBQ25ELElBQUksQUFBRXlGLGNBQWdCMUYsS0FBaEIwRjtJQUVOLElBQU0sQUFBRUMsYUFBZXRGLFlBQUcsQ0FBbEJzRixZQUNGQyxrQkFBa0JGLGFBQWEsR0FBRztJQUV4Q0EsY0FBY0UsZ0JBQWdCbEQsR0FBRyxDQUFDLFNBQUNtRDtRQUNqQyxJQUFNN0YsU0FBTzZGLGdCQUNQQyxhQUFhSCxXQUFXckYsUUFBUSxDQUFDTixRQUFNQztRQUU3QyxPQUFPNkY7SUFDVDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTeEkscUJBQXFCOEMsSUFBSSxFQUFFQyxXQUFXO0lBQ3BELElBQUksQUFBRThGLGVBQWlCL0YsS0FBakIrRjtJQUVOLElBQU0sQUFBRUMsY0FBZ0IzRixZQUFHLENBQW5CMkYsYUFDRkMsbUJBQW1CRixjQUFjLEdBQUc7SUFFMUNBLGVBQWVFLGlCQUFpQnZELEdBQUcsQ0FBQyxTQUFDd0Q7UUFDbkMsSUFBTWxHLFNBQU9rRyxpQkFDUEMsY0FBY0gsWUFBWTFGLFFBQVEsQ0FBQ04sUUFBTUM7UUFFL0MsT0FBT2tHO0lBQ1Q7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBU25JLHFCQUFxQm9DLElBQUksRUFBRUMsV0FBVztJQUNwRCxJQUFJLEFBQUVtRyxlQUFpQnBHLEtBQWpCb0c7SUFFTixJQUFNLEFBQUVDLGNBQWdCaEcsWUFBRyxDQUFuQmdHLGFBQ0ZDLG1CQUFtQkYsY0FBYyxHQUFHO0lBRTFDQSxlQUFlRSxpQkFBaUI1RCxHQUFHLENBQUMsU0FBQzZEO1FBQ25DLElBQU12RyxTQUFPdUcsaUJBQ1BDLGNBQWNILFlBQVkvRixRQUFRLENBQUNOLFFBQU1DO1FBRS9DLE9BQU91RztJQUNUO0lBRUEsT0FBT0o7QUFDVDtBQUVPLFNBQVNoSCxxQkFBcUJZLElBQUksRUFBRUMsV0FBVztJQUNwRCxJQUFJLEFBQUV3RyxlQUFpQnpHLEtBQWpCeUc7SUFFTixJQUFNLEFBQUVDLGNBQWdCckcsWUFBRyxDQUFuQnFHLGFBQ0ZDLG1CQUFtQkYsY0FBZSxHQUFHO0lBRTNDQSxlQUFlRSxpQkFBaUJqRSxHQUFHLENBQUMsU0FBQ2tFO1FBQ25DLElBQU01RyxTQUFPNEcsaUJBQ1BDLGNBQWNILFlBQVlwRyxRQUFRLENBQUNOLFFBQU1DO1FBRS9DLE9BQU80RztJQUNUO0lBRUEsT0FBT0o7QUFDVDtBQUVPLFNBQVN6SCxzQkFBc0JnQixJQUFJLEVBQUVDLFdBQVc7SUFDckQsMEJBQTZCRCxLQUF2QjhHLGVBQUFBLGlEQUFnQixFQUFFLHdCQUFZLEdBQUc7SUFFdkMsSUFBTUMsb0JBQW9CRCxlQUNwQkUsZUFBZUMsa0JBQXFCLEVBQUUsR0FBRztJQUUvQ0gsZ0JBQWdCQyxrQkFBa0JyRSxHQUFHLENBQUMsU0FBQ3dFO1FBQ3JDLElBQU1sSCxTQUFPa0gsa0JBQ1BDLGVBQWVILGFBQWExRyxRQUFRLENBQUNOLFFBQU1DO1FBRWpELE9BQU9rSDtJQUNUO0lBRUEsT0FBT0w7QUFDVDtBQUVPLFNBQVM5SSxzQkFBc0JnQyxJQUFJLEVBQUVDLFdBQVc7SUFDckQsSUFBSSxBQUFFbUgsZ0JBQWtCcEgsS0FBbEJvSDtJQUVOLElBQU0sQUFBRXhGLGVBQWlCdkIsWUFBRyxDQUFwQnVCLGNBQ0Z5RixvQkFBb0JELGVBQWUsR0FBRztJQUU1Q0EsZ0JBQWdCQyxrQkFBa0IzRSxHQUFHLENBQUMsU0FBQ2I7UUFDckMsSUFBTTdCLFNBQU82QixrQkFDUEYsZUFBZUMsYUFBYXRCLFFBQVEsQ0FBQ04sUUFBTUM7UUFFakQsT0FBTzBCO0lBQ1Q7SUFFQSxPQUFPeUY7QUFDVDtBQUVPLFNBQVM1SjtJQUNkLElBQU04SixTQUFTLEVBQUU7SUFFakIsT0FBT0E7QUFDVDtBQUVPLFNBQVM3SjtJQUNkLElBQU04SixhQUFhLEVBQUU7SUFFckIsT0FBT0E7QUFDVDtBQUVPLFNBQVNoSSxlQUFlVyxJQUFJO0lBQ2pDLElBQU1DLFdBQVdELEtBQUtzSCxNQUFNO0lBRTVCLE9BQU9ySDtBQUNUO0FBRU8sU0FBU1IsZUFBZVksSUFBSTtJQUNqQyxJQUFNOEIsV0FBVyxBQUFDOUIsU0FBUyxPQUNSQSxLQUFLaUgsTUFBTSxLQUNUO0lBRXJCLE9BQU9uRjtBQUNUO0FBRU8sU0FBUzFFLHVCQUF1QmdELFFBQVE7SUFDN0MsSUFBTThHLGVBQWUsQUFBQzlHLGFBQWEsT0FDWkEsU0FBUzZHLE1BQU0sS0FDYjtJQUN6QixPQUFPQztBQUNUO0FBRU8sU0FBUzFJLHlCQUF5QitCLFNBQVM7SUFDaEQsSUFBSUUsZ0JBQWdCO0lBRXBCLElBQUlGLGNBQWMsTUFBTTtRQUN0QkUsZ0JBQWdCRixVQUFVMEcsTUFBTTtJQUNsQztJQUVBLE9BQU94RztBQUNUO0FBRU8sU0FBU2pFLDJCQUEyQnlFLFVBQVU7SUFDbkQsSUFBTUUsaUJBQWlCRixXQUFXZ0csTUFBTTtJQUV4QyxPQUFPOUY7QUFDVDtBQUVPLFNBQVNyRSx5QkFBeUIrRCxTQUFTO0lBQ2hELElBQU1FLGdCQUFnQkYsVUFBVW9HLE1BQU07SUFFdEMsT0FBT2xHO0FBQ1Q7QUFFTyxTQUFTdkQsK0JBQStCNEQsWUFBWTtJQUN6RCxJQUFNRSxtQkFBbUJGLGFBQWE2RixNQUFNO0lBRTVDLE9BQU8zRjtBQUNUO0FBRU8sU0FBU3RELGlDQUFpQ3VELGFBQWE7SUFDNUQsSUFBSUUsb0JBQW9CO0lBRXhCLElBQUlGLGtCQUFrQixNQUFNO1FBQzFCRSxvQkFBb0JGLGNBQWMwRixNQUFNO0lBQzFDO0lBRUEsT0FBT3hGO0FBQ1Q7QUFFTyxTQUFTbkMsaUJBQWlCb0MsS0FBSztJQUNwQyxJQUFNQyxZQUFZRCxNQUFNUyxHQUFHLENBQUMsU0FBQ25DO1FBQzNCLElBQU04QixXQUFXOUIsS0FBS2lILE1BQU07UUFFNUJqSCxPQUFPOEIsVUFBVSxHQUFHO1FBRXBCLE9BQU85QjtJQUNUO0lBRUEsT0FBTzJCO0FBQ1Q7QUFFTyxTQUFTdEQsaUJBQWlCMkQsS0FBSztJQUNwQyxJQUFNRSxZQUFZRixNQUFNRyxHQUFHLENBQUMsU0FBQ0U7UUFDM0IsSUFBTUQsV0FBV0MsS0FBSzRFLE1BQU07UUFFNUI1RSxPQUFPRCxVQUFVLEdBQUc7UUFFcEIsT0FBT0M7SUFDVDtJQUVBLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTbEYsbUJBQW1Cc0YsTUFBTTtJQUN2QyxJQUFNRSxhQUFhRixPQUFPSCxHQUFHLENBQUMsU0FBQ087UUFDN0IsSUFBTUQsWUFBWUMsTUFBTXVFLE1BQU07UUFFOUIsT0FBT3hFO0lBQ1Q7SUFFQSxPQUFPRDtBQUNUO0FBRU8sU0FBU3BHLG1CQUFtQnVHLE1BQU07SUFDdkMsSUFBTUUsYUFBYUYsT0FBT1IsR0FBRyxDQUFDLFNBQUNZO1FBQzdCLElBQU1ELFlBQVlDLE1BQU1rRSxNQUFNO1FBRTlCbEUsUUFBUUQsV0FBVyxHQUFHO1FBRXRCLE9BQU9DO0lBQ1Q7SUFFQSxPQUFPRjtBQUNUO0FBRU8sU0FBUy9FLHVCQUF1QmtGLFFBQVE7SUFDN0MsSUFBTUUsZUFBZUYsU0FBU2IsR0FBRyxDQUFDLFNBQUNpQjtRQUNqQyxJQUFNRCxjQUFjQyxRQUFRNkQsTUFBTTtRQUVsQyxPQUFPOUQ7SUFDVDtJQUVBLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTaEUsdUJBQXVCbUUsUUFBUTtJQUM3QyxJQUFNRSxlQUFlRixTQUFTbEIsR0FBRyxDQUFDLFNBQUNzQjtRQUNqQyxJQUFNRCxjQUFjQyxRQUFRd0QsTUFBTTtRQUVsQ3hELFVBQVVELGFBQWEsR0FBRztRQUUxQixPQUFPQztJQUNUO0lBRUEsT0FBT0Y7QUFDVDtBQUVPLFNBQVMvRCx5QkFBeUJrRSxTQUFTO0lBQ2hELElBQU1FLGdCQUFnQkYsVUFBVXZCLEdBQUcsQ0FBQyxTQUFDMkI7UUFDbkMsSUFBTUQsZUFBZUMsU0FBU21ELE1BQU07UUFFcENuRCxXQUFXRCxjQUFlLEdBQUc7UUFFN0IsT0FBT0M7SUFDVDtJQUVBLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTaEYsMkJBQTJCd0YsVUFBVTtJQUNuRCxJQUFNQyxpQkFBaUJELFdBQVdqQyxHQUFHLENBQUMsU0FBQ3FDO1FBQ3JDLElBQU1GLGdCQUFnQkUsVUFBVXlDLE1BQU07UUFFdEN6QyxZQUFZRixlQUFlLEdBQUc7UUFFOUIsT0FBT0U7SUFDVDtJQUVBLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTekcsMkJBQTJCNkcsVUFBVTtJQUNuRCxJQUFNRSxpQkFBaUJGLFdBQVd0QyxHQUFHLENBQUMsU0FBQzBDO1FBQ3JDLElBQU1ELGdCQUFnQkMsVUFBVW9DLE1BQU07UUFFdENwQyxZQUFZRCxlQUFnQixHQUFHO1FBRS9CLE9BQU9DO0lBQ1Q7SUFFQSxPQUFPRjtBQUNUO0FBRU8sU0FBU3pHLDJCQUEyQjZGLFVBQVU7SUFDbkQsSUFBTUUsaUJBQWlCRixXQUFXNUIsR0FBRyxDQUFDLFNBQUNnQztRQUNyQyxJQUFNRCxlQUFlQyxTQUFTOEMsTUFBTTtRQUVwQzlDLFdBQVdELGNBQWUsR0FBRztRQUU3QixPQUFPQztJQUNUO0lBRUEsT0FBT0Y7QUFDVDtBQUVPLFNBQVN2SCw2QkFBNkJvSSxXQUFXO0lBQ3RELElBQU1FLGtCQUFrQkYsWUFBWTNDLEdBQUcsQ0FBQyxTQUFDK0M7UUFDdkMsSUFBTUQsaUJBQWlCQyxXQUFXK0IsTUFBTTtRQUV4Qy9CLGFBQWFELGdCQUFnQixHQUFHO1FBRWhDLE9BQU9DO0lBQ1Q7SUFFQSxPQUFPRjtBQUNUO0FBRU8sU0FBUzFJLDZCQUE2QjZJLFdBQVc7SUFDdEQsSUFBTUUsa0JBQWtCRixZQUFZaEQsR0FBRyxDQUFDLFNBQUNvRDtRQUN2QyxJQUFNRCxpQkFBaUJDLFdBQVcwQixNQUFNO1FBRXhDMUIsYUFBYUQsZ0JBQWdCLEdBQUc7UUFFaEMsT0FBT0M7SUFDVDtJQUVBLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTdkcsK0JBQStCb0gsWUFBWTtJQUN6RCxJQUFNRSxtQkFBbUJGLGFBQWEvRCxHQUFHLENBQUMsU0FBQ21FO1FBQ3pDLElBQU1ELGtCQUFrQkMsWUFBWVcsTUFBTTtRQUUxQyxPQUFPWjtJQUNUO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVN4SiwrQkFBK0I0SSxZQUFZO0lBQ3pELElBQU1FLG1CQUFtQkYsYUFBYXJELEdBQUcsQ0FBQyxTQUFDeUQ7UUFDekMsSUFBTUQsa0JBQWtCQyxZQUFZcUIsTUFBTTtRQUUxQ3JCLGNBQWNELGlCQUFrQixHQUFHO1FBRW5DLE9BQU9DO0lBQ1Q7SUFFQSxPQUFPRjtBQUNUO0FBRU8sU0FBU3BJLCtCQUErQnVJLFlBQVk7SUFDekQsSUFBTUUsbUJBQW1CRixhQUFhMUQsR0FBRyxDQUFDLFNBQUM4RDtRQUN6QyxJQUFNRCxrQkFBa0JDLFlBQVlnQixNQUFNO1FBRTFDaEIsY0FBY0QsaUJBQWlCLEdBQUc7UUFFbEMsT0FBT0M7SUFDVDtJQUVBLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTckgsaUNBQWlDNkgsYUFBYTtJQUM1RCxJQUFNQyxvQkFBb0JELGNBQWNZLGVBQWUsQ0FBQyxTQUFDUDtRQUN2RCxJQUFNRCxtQkFBbUJDLGFBQWFLLE1BQU07UUFFNUMsT0FBT047SUFDVDtJQUVBLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTOUksaUNBQWlDbUosYUFBYTtJQUM1RCxJQUFNQyxvQkFBb0JELGNBQWMxRSxHQUFHLENBQUMsU0FBQ2Y7UUFDM0MsSUFBTUUsbUJBQW1CRixhQUFhNkYsTUFBTTtRQUU1QzdGLGVBQWVFLGtCQUFtQixHQUFHO1FBRXJDLE9BQU9GO0lBQ1Q7SUFFQSxPQUFPMEY7QUFDVCJ9