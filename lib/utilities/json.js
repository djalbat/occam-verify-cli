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
function superTypesFromJSON(json, fileContext) {
    var superTypesJSON = json.superTypes;
    var Type = _dom.default.Type, superTypes = superTypesJSON.map(function(superTypeJSON) {
        var _$json = superTypeJSON, type = Type.fromJSON(_$json, fileContext), superType = type; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdGVybSB9ID0ganNvbjtcblxuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICBqc29uID0gdGVybUpTT047ICAvLy9cblxuICBjb25zdCB7IFRlcm0gfSA9IGRvbTtcblxuICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdHlwZSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gbWV0YVR5cGUsXG4gICAgICAgICAgbWV0YVR5cGVOYW1lID0gbmFtZTsgIC8vL1xuXG4gICAgbWV0YVR5cGUgPSBmaWxlQ29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3VwZXJUeXBlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHN1cGVyVHlwZUpTT04gPSBzdXBlclR5cGU7ICAvLy9cblxuICBqc29uID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICB0eXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgc3VwZXJUeXBlID0gdHlwZTsgLy8vXG5cbiAgcmV0dXJuIHN1cGVyVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN0YXRlbWVudCA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudDsgIC8vL1xuXG4gICAganNvbiA9IHN0YXRlbWVudEpTT047IC8vL1xuXG4gICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyByZWZlcmVuY2UgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGRvbSxcbiAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSByZWZlcmVuY2VKU09OOyAgLy8vXG5cbiAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBkb20sXG4gICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnNlcXVlbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb25zZXF1ZW50IH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uc2VxdWVudCB9ID0gZG9tLFxuICAgICAgICBjb25zZXF1ZW50SlNPTiA9IGNvbnNlcXVlbnQ7ICAvLy9cblxuICBqc29uID0gY29uc2VxdWVudEpTT047ICAvLy9cblxuICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnNlcXVlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGUgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlQ2FsbCA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGRvbSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGw7ICAvLy9cblxuICAgIGpzb24gPSBwcm9jZWR1cmVDYWxsSlNPTjsgLy8vXG5cbiAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzRnJvbUpTT04oanNvbiwgdHlwZXMsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgdHlwZXM6IHR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGUgfSA9IGRvbTtcblxuICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcnVsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSdWxlIH0gPSBkb20sXG4gICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzOyAvLy9cblxuICBydWxlcyA9IHJ1bGVzSlNPTi5tYXAoKHJ1bGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHJ1bGVKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBkb20sXG4gICAgICAgIGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBheGlvbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBBeGlvbSB9ID0gZG9tLFxuICAgICAgICBheGlvbXNKU09OID0gYXhpb21zOyAvLy9cblxuICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByZW1pc2UgfSA9IGRvbSxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRoZW9yZW0gfSA9IGRvbSxcbiAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuXG4gIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLm1hcCgodGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzOyAvLy9cblxuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04ubWFwKChwcm9wZXJ0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJvcGVydHlKU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgc3VwZXJUeXBlczogc3VwZXJUeXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTi5tYXAoKHN1cGVyVHlwZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHBhcmFtZXRlcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzOyAvLy9cblxuICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0pTT04ubWFwKChwYXJhbWV0ZXJKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHBhcmFtZXRlckpTT04sICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbmplY3R1cmVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZG9tLFxuICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlczsgLy8vXG5cbiAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04ubWFwKChjb25qZWN0dXJlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbWJpbmF0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZG9tLFxuICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9yczsgLy8vXG5cbiAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04ubWFwKChjb21iaW5hdG9ySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb21iaW5hdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb25zdHJ1Y3RvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZG9tLFxuICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzOyAvLy9cblxuICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLm1hcCgoY29uc3RydWN0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXRoZW9yZW0gfSA9IGRvbSxcbiAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtczsgLy8vXG5cbiAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTi5tYXAoKG1ldGF0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN1cHBvc2l0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBkb20sXG4gICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3Vic3RpdHV0aW9ucyA9IFtdIH0gPSBqc29uOyAgLy8vXG5cbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLCAgLy8vXG4gICAgICAgIFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gU3Vic3RpdHV0aW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzOyAvLy9cblxuICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT04ubWFwKChtZXRhdmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVRvVGVybUpTT04odGVybSkge1xuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgcmV0dXJuIHRlcm1KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVRvVHlwZUpTT04odHlwZSkge1xuICBjb25zdCB0eXBlSlNPTiA9ICh0eXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICB0eXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gdHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKG1ldGFUeXBlKSB7XG4gIGNvbnN0IG1ldGFUeXBlSlNPTiA9IChtZXRhVHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFUeXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG4gIHJldHVybiBtZXRhVHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVUb1N1cGVyVHlwZUpTT04oc3VwZXJUeXBlKSB7XG4gIGNvbnN0IHN1cGVyVHlwZUpTT04gPSBzdXBlclR5cGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04oc3RhdGVtZW50KSB7XG4gIGxldCBzdGF0ZW1lbnRKU09OID0gbnVsbDtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudC50b0pTT04oKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04oY29uY2x1c2lvbikge1xuICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04oY29uc2VxdWVudCkge1xuICBjb25zdCBjb25zZXF1ZW50SlNPTiA9IGNvbnNlcXVlbnQudG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbnNlcXVlbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04ocHJvY2VkdXJlQ2FsbCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbEpTT04gPSBudWxsO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbEpTT04gPSBwcm9jZWR1cmVDYWxsLnRvSlNPTigpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNUb1R5cGVzSlNPTih0eXBlcykge1xuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc1RvUnVsZXNKU09OKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVzSlNPTiA9IHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHN1cGVyVHlwZXMpIHtcbiAgY29uc3Qgc3VwZXJUeXBlc0pTT04gPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZS50b0pTT04oKTtcblxuICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04ocGFyYW1ldGVycykge1xuICBjb25zdCBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnMubWFwKChwYXJhbWV0ZXIpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJKU09OID0gcGFyYW1ldGVyLnRvSlNPTigpO1xuXG4gICAgcGFyYW1ldGVyID0gcGFyYW1ldGVySlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04ocHJvcGVydGllcykge1xuICBjb25zdCBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXMubWFwKChwcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5SlNPTiA9IHByb3BlcnR5LnRvSlNPTigpO1xuXG4gICAgcHJvcGVydHkgPSBwcm9wZXJ0eUpTT047ICAvLy9cblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTihjb25qZWN0dXJlcykge1xuICBjb25zdCBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICBjb25zdCBjb25qZWN0dXJlSlNPTiA9IGNvbmplY3R1cmUudG9KU09OKCk7XG5cbiAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OKGNvbWJpbmF0b3JzKSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JKU09OID0gY29tYmluYXRvci50b0pTT04oKTtcblxuICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9ySlNPTjsgLy8vXG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTihzdXBwb3NpdGlvbnMpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25KU09OID0gc3VwcG9zaXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTihjb25zdHJ1Y3RvcnMpIHtcbiAgY29uc3QgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9ycy5tYXAoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgY29uc3QgY29uc3RydWN0b3JKU09OID0gY29uc3RydWN0b3IudG9KU09OKCk7XG5cbiAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9ySlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTihtZXRhdGhlb3JlbXMpIHtcbiAgY29uc3QgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtcy5tYXAoKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1KU09OID0gbWV0YXRoZW9yZW0udG9KU09OKCk7XG5cbiAgICBtZXRhdGhlb3JlbSA9IG1ldGF0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04oc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnMubWFwU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25KU09OID0gc3Vic3RpdHV0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKG1ldGF2YXJpYWJsZXMpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzLm1hcCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04oKTtcblxuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT047ICAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzSlNPTjtcbn1cbiJdLCJuYW1lcyI6WyJheGlvbXNGcm9tSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbnNlcXVlbnRGcm9tSlNPTiIsImNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OIiwiY29uc3RydWN0b3JzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04iLCJsYWJlbHNGcm9tSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImxlbW1hc0Zyb21Ob3RoaW5nIiwibWV0YUxlbW1hc0Zyb21Ob3RoaW5nIiwibWV0YVR5cGVGcm9tSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJtZXRhdGhlb3JlbXNGcm9tSlNPTiIsIm1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwibWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04iLCJwYXJhbWV0ZXJzRnJvbUpTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwicHJvY2VkdXJlQ2FsbEZyb21KU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9wZXJ0aWVzRnJvbUpTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInJlZmVyZW5jZUZyb21KU09OIiwicnVsZXNGcm9tSlNPTiIsInJ1bGVzVG9SdWxlc0pTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwic3VwZXJUeXBlRnJvbUpTT04iLCJzdXBlclR5cGVUb1N1cGVyVHlwZUpTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0aGVvcmVtc0Zyb21KU09OIiwidGhlb3JlbXNUb1RoZW9yZW1zSlNPTiIsInR5cGVGcm9tSlNPTiIsInR5cGVUb1R5cGVKU09OIiwidHlwZXNGcm9tSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImpzb24iLCJmaWxlQ29udGV4dCIsInRlcm0iLCJ0ZXJtSlNPTiIsIlRlcm0iLCJkb20iLCJmcm9tSlNPTiIsInR5cGUiLCJuYW1lIiwidHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJtZXRhVHlwZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlSlNPTiIsInN0YXRlbWVudCIsIlN0YXRlbWVudCIsInN0YXRlbWVudEpTT04iLCJyZWZlcmVuY2UiLCJSZWZlcmVuY2UiLCJyZWZlcmVuY2VKU09OIiwiY29uY2x1c2lvbiIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uSlNPTiIsImNvbnNlcXVlbnQiLCJDb25zZXF1ZW50IiwiY29uc2VxdWVudEpTT04iLCJtZXRhdmFyaWFibGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVKU09OIiwicHJvY2VkdXJlQ2FsbCIsIlByb2NlZHVyZUNhbGwiLCJwcm9jZWR1cmVDYWxsSlNPTiIsInR5cGVzIiwidHlwZXNKU09OIiwiVHlwZSIsImZvckVhY2giLCJ0eXBlSlNPTiIsInB1c2giLCJydWxlcyIsIlJ1bGUiLCJydWxlc0pTT04iLCJtYXAiLCJydWxlSlNPTiIsInJ1bGUiLCJsYWJlbHMiLCJMYWJlbCIsImxhYmVsc0pTT04iLCJsYWJlbEpTT04iLCJsYWJlbCIsImF4aW9tcyIsIkF4aW9tIiwiYXhpb21zSlNPTiIsImF4aW9tSlNPTiIsImF4aW9tIiwicHJlbWlzZXMiLCJQcmVtaXNlIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZUpTT04iLCJwcmVtaXNlIiwidGhlb3JlbXMiLCJUaGVvcmVtIiwidGhlb3JlbXNKU09OIiwidGhlb3JlbUpTT04iLCJ0aGVvcmVtIiwidmFyaWFibGVzIiwiVmFyaWFibGUiLCJ2YXJpYWJsZXNKU09OIiwidmFyaWFibGVKU09OIiwidmFyaWFibGUiLCJwcm9wZXJ0aWVzIiwiUHJvcGVydHkiLCJwcm9wZXJ0aWVzSlNPTiIsInByb3BlcnR5SlNPTiIsInByb3BlcnR5Iiwic3VwZXJUeXBlcyIsInN1cGVyVHlwZXNKU09OIiwicGFyYW1ldGVycyIsIlBhcmFtZXRlciIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVySlNPTiIsInBhcmFtZXRlciIsImNvbmplY3R1cmVzIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29uamVjdHVyZSIsImNvbWJpbmF0b3JzIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JKU09OIiwiY29tYmluYXRvciIsImNvbnN0cnVjdG9ycyIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsImNvbnN0cnVjdG9yIiwibWV0YXRoZW9yZW1zIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1KU09OIiwibWV0YXRoZW9yZW0iLCJzdXBwb3NpdGlvbnMiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbkpTT04iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zSlNPTiIsIlN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkpTT04iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwibWFwU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE0TGdCQSxjQUFjO2VBQWRBOztJQThVQUMsa0JBQWtCO2VBQWxCQTs7SUEvTUFDLG1CQUFtQjtlQUFuQkE7O0lBNlNBQyw0QkFBNEI7ZUFBNUJBOztJQS9nQkFDLGtCQUFrQjtlQUFsQkE7O0lBbVhBQywwQkFBMEI7ZUFBMUJBOztJQWpLQUMsbUJBQW1CO2VBQW5CQTs7SUFpVEFDLDRCQUE0QjtlQUE1QkE7O0lBdGZBQyxrQkFBa0I7ZUFBbEJBOztJQTRXQUMsMEJBQTBCO2VBQTFCQTs7SUF2SUFDLG9CQUFvQjtlQUFwQkE7O0lBbVRBQyw4QkFBOEI7ZUFBOUJBOztJQWxkQUMsY0FBYztlQUFkQTs7SUFvVkFDLGtCQUFrQjtlQUFsQkE7O0lBckdBQyxpQkFBaUI7ZUFBakJBOztJQU1BQyxxQkFBcUI7ZUFBckJBOztJQWpZQUMsZ0JBQWdCO2VBQWhCQTs7SUFxWkFDLHNCQUFzQjtlQUF0QkE7O0lBMUZBQyxvQkFBb0I7ZUFBcEJBOztJQStTQUMsOEJBQThCO2VBQTlCQTs7SUF2aEJBQyxvQkFBb0I7ZUFBcEJBOztJQXFXQUMsOEJBQThCO2VBQTlCQTs7SUE3RUFDLHFCQUFxQjtlQUFyQkE7O0lBcVJBQyxnQ0FBZ0M7ZUFBaENBOztJQXJZQUMsa0JBQWtC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