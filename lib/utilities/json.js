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
    consequentFromJSON: function() {
        return consequentFromJSON;
    },
    consequentToConsequentJSON: function() {
        return consequentToConsequentJSON;
    },
    constructorsFromJSON: function() {
        return constructorsFromJSON;
    },
    constructorsToConstructorsJSON: function() {
        return constructorsToConstructorsJSON;
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
    superTypeFromJSON: function() {
        return superTypeFromJSON;
    },
    superTypeToSuperTypeJSON: function() {
        return superTypeToSuperTypeJSON;
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
function superTypeFromJSON(json, fileContext) {
    var superType = json.superType;
    var superTypeJSON = superType; ///
    json = superTypeJSON; ///
    var name = json.name, typeName = name, type = fileContext.findTypeByTypeName(typeName);
    superType = type; ///
    return superType;
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
function consequentFromJSON(json, fileContext) {
    var consequent = json.consequent;
    var Consequent = _dom.default.Consequent, consequentJSON = consequent; ///
    json = consequentJSON; ///
    consequent = Consequent.fromJSON(json, fileContext);
    return consequent;
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
function consequentToConsequentJSON(consequent) {
    var consequentJSON = consequent.toJSON();
    return consequentJSON;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdGVybSB9ID0ganNvbjtcblxuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICBqc29uID0gdGVybUpTT047ICAvLy9cblxuICBjb25zdCB7IFRlcm0gfSA9IGRvbTtcblxuICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdHlwZSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gbWV0YVR5cGUsXG4gICAgICAgICAgbWV0YVR5cGVOYW1lID0gbmFtZTsgIC8vL1xuXG4gICAgbWV0YVR5cGUgPSBmaWxlQ29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3VwZXJUeXBlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHN1cGVyVHlwZUpTT04gPSBzdXBlclR5cGU7ICAvLy9cblxuICBqc29uID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICB0eXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgc3VwZXJUeXBlID0gdHlwZTsgLy8vXG5cbiAgcmV0dXJuIHN1cGVyVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN0YXRlbWVudCA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudDsgIC8vL1xuXG4gICAganNvbiA9IHN0YXRlbWVudEpTT047IC8vL1xuXG4gICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyByZWZlcmVuY2UgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGRvbSxcbiAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSByZWZlcmVuY2VKU09OOyAgLy8vXG5cbiAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBkb20sXG4gICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnNlcXVlbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb25zZXF1ZW50IH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uc2VxdWVudCB9ID0gZG9tLFxuICAgICAgICBjb25zZXF1ZW50SlNPTiA9IGNvbnNlcXVlbnQ7ICAvLy9cblxuICBqc29uID0gY29uc2VxdWVudEpTT047ICAvLy9cblxuICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnNlcXVlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGUgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlQ2FsbCA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGRvbSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGw7ICAvLy9cblxuICAgIGpzb24gPSBwcm9jZWR1cmVDYWxsSlNPTjsgLy8vXG5cbiAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzRnJvbUpTT04oanNvbiwgdHlwZXMsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgdHlwZXM6IHR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGUgfSA9IGRvbTtcblxuICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcnVsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSdWxlIH0gPSBkb20sXG4gICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzOyAvLy9cblxuICBydWxlcyA9IHJ1bGVzSlNPTi5tYXAoKHJ1bGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHJ1bGVKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBkb20sXG4gICAgICAgIGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBheGlvbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBBeGlvbSB9ID0gZG9tLFxuICAgICAgICBheGlvbXNKU09OID0gYXhpb21zOyAvLy9cblxuICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByZW1pc2UgfSA9IGRvbSxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRoZW9yZW0gfSA9IGRvbSxcbiAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuXG4gIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLm1hcCgodGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzOyAvLy9cblxuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04ubWFwKChwcm9wZXJ0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJvcGVydHlKU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHBhcmFtZXRlcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzOyAvLy9cblxuICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0pTT04ubWFwKChwYXJhbWV0ZXJKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHBhcmFtZXRlckpTT04sICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbmplY3R1cmVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZG9tLFxuICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlczsgLy8vXG5cbiAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04ubWFwKChjb25qZWN0dXJlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbWJpbmF0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZG9tLFxuICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9yczsgLy8vXG5cbiAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04ubWFwKChjb21iaW5hdG9ySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb21iaW5hdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb25zdHJ1Y3RvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZG9tLFxuICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzOyAvLy9cblxuICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLm1hcCgoY29uc3RydWN0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXRoZW9yZW0gfSA9IGRvbSxcbiAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtczsgLy8vXG5cbiAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTi5tYXAoKG1ldGF0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN1cHBvc2l0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBkb20sXG4gICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3Vic3RpdHV0aW9ucyA9IFtdIH0gPSBqc29uOyAgLy8vXG5cbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLCAgLy8vXG4gICAgICAgIFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gU3Vic3RpdHV0aW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzOyAvLy9cblxuICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT04ubWFwKChtZXRhdmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVRvVGVybUpTT04odGVybSkge1xuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgcmV0dXJuIHRlcm1KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVRvVHlwZUpTT04odHlwZSkge1xuICBjb25zdCB0eXBlSlNPTiA9ICh0eXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICB0eXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gdHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKG1ldGFUeXBlKSB7XG4gIGNvbnN0IG1ldGFUeXBlSlNPTiA9IChtZXRhVHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFUeXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG4gIHJldHVybiBtZXRhVHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVUb1N1cGVyVHlwZUpTT04oc3VwZXJUeXBlKSB7XG4gIGNvbnN0IHN1cGVyVHlwZUpTT04gPSBzdXBlclR5cGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04oc3RhdGVtZW50KSB7XG4gIGxldCBzdGF0ZW1lbnRKU09OID0gbnVsbDtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudC50b0pTT04oKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04oY29uY2x1c2lvbikge1xuICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04oY29uc2VxdWVudCkge1xuICBjb25zdCBjb25zZXF1ZW50SlNPTiA9IGNvbnNlcXVlbnQudG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbnNlcXVlbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04ocHJvY2VkdXJlQ2FsbCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbEpTT04gPSBudWxsO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbEpTT04gPSBwcm9jZWR1cmVDYWxsLnRvSlNPTigpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNUb1R5cGVzSlNPTih0eXBlcykge1xuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc1RvUnVsZXNKU09OKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVzSlNPTiA9IHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVySlNPTiA9IHBhcmFtZXRlci50b0pTT04oKTtcblxuICAgIHBhcmFtZXRlciA9IHBhcmFtZXRlckpTT047ICAvLy9cblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzLm1hcCgocHJvcGVydHkpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eUpTT04gPSBwcm9wZXJ0eS50b0pTT04oKTtcblxuICAgIHByb3BlcnR5ID0gcHJvcGVydHlKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04oY29uamVjdHVyZXMpIHtcbiAgY29uc3QgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTigpO1xuXG4gICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTihjb21iaW5hdG9ycykge1xuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKCk7XG5cbiAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04oc3VwcG9zaXRpb25zKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04oY29uc3RydWN0b3JzKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTigpO1xuXG4gICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04obWV0YXRoZW9yZW1zKSB7XG4gIGNvbnN0IG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXMubWFwKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLm1hcFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTihtZXRhdmFyaWFibGVzKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG4iXSwibmFtZXMiOlsiYXhpb21zRnJvbUpTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb25zZXF1ZW50RnJvbUpTT04iLCJjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwibGFiZWxzRnJvbUpTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsIm1ldGFUeXBlRnJvbUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwicGFyYW1ldGVyc0Zyb21KU09OIiwicGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04iLCJwcmVtaXNlc0Zyb21KU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsInByb2NlZHVyZUNhbGxGcm9tSlNPTiIsInByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJyZWZlcmVuY2VGcm9tSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJydWxlc1RvUnVsZXNKU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiIsInN1cGVyVHlwZUZyb21KU09OIiwic3VwZXJUeXBlVG9TdXBlclR5cGVKU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJ0ZXJtRnJvbUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidHlwZUZyb21KU09OIiwidHlwZVRvVHlwZUpTT04iLCJ0eXBlc0Zyb21KU09OIiwidHlwZXNUb1R5cGVzSlNPTiIsInZhcmlhYmxlc0Zyb21KU09OIiwidmFyaWFibGVzVG9WYXJpYWJsZXNKU09OIiwianNvbiIsImZpbGVDb250ZXh0IiwidGVybSIsInRlcm1KU09OIiwiVGVybSIsImRvbSIsImZyb21KU09OIiwidHlwZSIsIm5hbWUiLCJ0eXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVKU09OIiwic3RhdGVtZW50IiwiU3RhdGVtZW50Iiwic3RhdGVtZW50SlNPTiIsInJlZmVyZW5jZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZUpTT04iLCJjb25jbHVzaW9uIiwiQ29uY2x1c2lvbiIsImNvbmNsdXNpb25KU09OIiwiY29uc2VxdWVudCIsIkNvbnNlcXVlbnQiLCJjb25zZXF1ZW50SlNPTiIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJwcm9jZWR1cmVDYWxsIiwiUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxKU09OIiwidHlwZXMiLCJ0eXBlc0pTT04iLCJUeXBlIiwiZm9yRWFjaCIsInR5cGVKU09OIiwicHVzaCIsInJ1bGVzIiwiUnVsZSIsInJ1bGVzSlNPTiIsIm1hcCIsInJ1bGVKU09OIiwicnVsZSIsImxhYmVscyIsIkxhYmVsIiwibGFiZWxzSlNPTiIsImxhYmVsSlNPTiIsImxhYmVsIiwiYXhpb21zIiwiQXhpb20iLCJheGlvbXNKU09OIiwiYXhpb21KU09OIiwiYXhpb20iLCJwcmVtaXNlcyIsIlByZW1pc2UiLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlSlNPTiIsInByZW1pc2UiLCJ0aGVvcmVtcyIsIlRoZW9yZW0iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtSlNPTiIsInRoZW9yZW0iLCJ2YXJpYWJsZXMiLCJWYXJpYWJsZSIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZUpTT04iLCJ2YXJpYWJsZSIsInByb3BlcnRpZXMiLCJQcm9wZXJ0eSIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydHlKU09OIiwicHJvcGVydHkiLCJwYXJhbWV0ZXJzIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJKU09OIiwicGFyYW1ldGVyIiwiY29uamVjdHVyZXMiLCJDb25qZWN0dXJlIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZUpTT04iLCJjb25qZWN0dXJlIiwiY29tYmluYXRvcnMiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvckpTT04iLCJjb21iaW5hdG9yIiwiY29uc3RydWN0b3JzIiwiQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JKU09OIiwiY29uc3RydWN0b3IiLCJtZXRhdGhlb3JlbXMiLCJNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdGhlb3JlbUpTT04iLCJtZXRhdGhlb3JlbSIsInN1cHBvc2l0aW9ucyIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uSlNPTiIsInN1cHBvc2l0aW9uIiwic3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNKU09OIiwiU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uSlNPTiIsInN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzSlNPTiIsImxlbW1hcyIsIm1ldGFMZW1tYXMiLCJ0b0pTT04iLCJtZXRhVHlwZUpTT04iLCJtYXBTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTRMZ0JBLGNBQWM7ZUFBZEE7O0lBK1RBQyxrQkFBa0I7ZUFBbEJBOztJQS9NQUMsbUJBQW1CO2VBQW5CQTs7SUFpU0FDLDRCQUE0QjtlQUE1QkE7O0lBcGZBQyxrQkFBa0I7ZUFBbEJBOztJQW9XQUMsMEJBQTBCO2VBQTFCQTs7SUFqS0FDLG1CQUFtQjtlQUFuQkE7O0lBcVNBQyw0QkFBNEI7ZUFBNUJBOztJQTNkQUMsa0JBQWtCO2VBQWxCQTs7SUE2VkFDLDBCQUEwQjtlQUExQkE7O0lBdklBQyxvQkFBb0I7ZUFBcEJBOztJQXVTQUMsOEJBQThCO2VBQTlCQTs7SUF2YkFDLGNBQWM7ZUFBZEE7O0lBcVVBQyxrQkFBa0I7ZUFBbEJBOztJQXJHQUMsaUJBQWlCO2VBQWpCQTs7SUFNQUMscUJBQXFCO2VBQXJCQTs7SUFsWEFDLGdCQUFnQjtlQUFoQkE7O0lBc1lBQyxzQkFBc0I7ZUFBdEJBOztJ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