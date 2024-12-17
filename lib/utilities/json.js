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
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
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
    var combinatorsJSON = combinators; ///
    combinators = combinatorsJSON.map(function(combinatorJSON) {
        var _$json = combinatorJSON, combinator = _combinator.default.fromJSON(_$json, fileContext);
        return combinator;
    });
    return combinators;
}
function constructorsFromJSON(json, fileContext) {
    var constructors = json.constructors;
    var constructorsJSON = constructors; ///
    constructors = constructorsJSON.map(function(constructorJSON) {
        var _$json = constructorJSON, constructor = _constructor.default.fromJSON(_$json, fileContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IFN0YXRlbWVudFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgY29uc3QgdGVybUpTT04gPSB0ZXJtOyAgLy8vXG5cbiAganNvbiA9IHRlcm1KU09OOyAgLy8vXG5cbiAgY29uc3QgeyBUZXJtIH0gPSBkb207XG5cbiAgdGVybSA9IFRlcm0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHR5cGUsXG4gICAgICAgICAgdHlwZU5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IG1ldGFUeXBlLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gZmlsZUNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN1cGVyVHlwZSB9ID0ganNvbjtcblxuICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlOyAgLy8vXG5cbiAganNvbiA9IHN1cGVyVHlwZUpTT047IC8vL1xuXG4gIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIHN1cGVyVHlwZSA9IHR5cGU7IC8vL1xuXG4gIHJldHVybiBzdXBlclR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnQgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudDsgIC8vL1xuXG4gICAganNvbiA9IHN0YXRlbWVudEpTT047IC8vL1xuXG4gICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGRvbSxcbiAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc2VxdWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbnNlcXVlbnQgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25zZXF1ZW50IH0gPSBkb20sXG4gICAgICAgIGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudDsgIC8vL1xuXG4gIGpzb24gPSBjb25zZXF1ZW50SlNPTjsgIC8vL1xuXG4gIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29uc2VxdWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlOyAgLy8vXG5cbiAganNvbiA9IG1ldGF2YXJpYWJsZUpTT047IC8vL1xuXG4gIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVDYWxsID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZG9tLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbDsgIC8vL1xuXG4gICAganNvbiA9IHByb2NlZHVyZUNhbGxKU09OOyAvLy9cblxuICAgIHByb2NlZHVyZUNhbGwgPSBQcm9jZWR1cmVDYWxsLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tSlNPTihqc29uLCB0eXBlcywgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyB0eXBlczogdHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZSB9ID0gZG9tO1xuXG4gIHR5cGVzSlNPTi5mb3JFYWNoKCh0eXBlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHR5cGVzLnB1c2godHlwZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBydWxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFJ1bGUgfSA9IGRvbSxcbiAgICAgICAgcnVsZXNKU09OID0gcnVsZXM7IC8vL1xuXG4gIHJ1bGVzID0gcnVsZXNKU09OLm1hcCgocnVsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKHJ1bGUpO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZG9tLFxuICAgICAgICBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgYXhpb21zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXhpb20gfSA9IGRvbSxcbiAgICAgICAgYXhpb21zSlNPTiA9IGF4aW9tczsgLy8vXG5cbiAgYXhpb21zID0gYXhpb21zSlNPTi5tYXAoKGF4aW9tSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBheGlvbUpTT04sICAvLy9cbiAgICAgICAgICBheGlvbSA9IEF4aW9tLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiAoYXhpb20pO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByZW1pc2UgfSA9IGRvbSxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRoZW9yZW0gfSA9IGRvbSxcbiAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuXG4gIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLm1hcCgodGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKHRoZW9yZW0pO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzOyAvLy9cblxuICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLm1hcCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuICh2YXJpYWJsZSk7XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbmplY3R1cmVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZG9tLFxuICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlczsgLy8vXG5cbiAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04ubWFwKChjb25qZWN0dXJlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiAoY29uamVjdHVyZSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29tYmluYXRvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnM7IC8vL1xuXG4gIGNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNKU09OLm1hcCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29tYmluYXRvckpTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKGNvbWJpbmF0b3IpO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb25zdHJ1Y3RvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9yczsgLy8vXG5cbiAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzSlNPTi5tYXAoKGNvbnN0cnVjdG9ySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb25zdHJ1Y3RvckpTT04sICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiAoY29uc3RydWN0b3IpO1xuICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXRoZW9yZW0gfSA9IGRvbSxcbiAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtczsgLy8vXG5cbiAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTi5tYXAoKG1ldGF0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiAobWV0YXRoZW9yZW0pO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3VwcG9zaXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGRvbSxcbiAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdWJzdGl0dXRpb25zID0gW10gfSA9IGpzb247ICAvLy9cblxuICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnMsICAvLy9cbiAgICAgICAgU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uOyAvLy9cblxuICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04ubWFwKChzdWJzdGl0dXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBTdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXM7IC8vL1xuXG4gIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTi5tYXAoKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKG1ldGF2YXJpYWJsZSk7XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBsZW1tYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhTGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICByZXR1cm4gbWV0YUxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Ub1Rlcm1KU09OKHRlcm0pIHtcbiAgY29uc3QgdGVybUpTT04gPSB0ZXJtLnRvSlNPTigpO1xuXG4gIHJldHVybiB0ZXJtSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVUb1R5cGVKU09OKHR5cGUpIHtcbiAgY29uc3QgdHlwZUpTT04gPSAodHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgdHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVUb01ldGFUeXBlSlNPTihtZXRhVHlwZSkge1xuICBjb25zdCBtZXRhVHlwZUpTT04gPSAobWV0YVR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhVHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICByZXR1cm4gbWV0YVR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlVG9TdXBlclR5cGVKU09OKHN1cGVyVHlwZSkge1xuICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gIHJldHVybiBzdXBlclR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHN0YXRlbWVudCkge1xuICBsZXQgc3RhdGVtZW50SlNPTiA9IG51bGw7XG5cbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQudG9KU09OKCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50SlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKGNvbmNsdXNpb24pIHtcbiAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OKGNvbnNlcXVlbnQpIHtcbiAgY29uc3QgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50LnRvSlNPTigpO1xuXG4gIHJldHVybiBjb25zZXF1ZW50SlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTihtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04oKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OKHByb2NlZHVyZUNhbGwpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGxKU09OID0gbnVsbDtcblxuICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbC50b0pTT04oKTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzVG9UeXBlc0pTT04odHlwZXMpIHtcbiAgY29uc3QgdHlwZXNKU09OID0gdHlwZXMubWFwKCh0eXBlKSA9PiB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTigpO1xuXG4gICAgdHlwZSA9IHR5cGVKU09OOyAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9KTtcblxuICByZXR1cm4gdHlwZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNUb1J1bGVzSlNPTihydWxlcykge1xuICBjb25zdCBydWxlc0pTT04gPSBydWxlcy5tYXAoKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKCk7XG5cbiAgICBydWxlID0gcnVsZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNUb0xhYmVsc0pTT04obGFiZWxzKSB7XG4gIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVsc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNUb0F4aW9tc0pTT04oYXhpb21zKSB7XG4gIGNvbnN0IGF4aW9tc0pTT04gPSBheGlvbXMubWFwKChheGlvbSkgPT4ge1xuICAgIGNvbnN0IGF4aW9tSlNPTiA9IGF4aW9tLnRvSlNPTigpO1xuXG4gICAgYXhpb20gPSBheGlvbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzVG9QcmVtaXNlc0pTT04ocHJlbWlzZXMpIHtcbiAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNUb1RoZW9yZW1zSlNPTih0aGVvcmVtcykge1xuICBjb25zdCB0aGVvcmVtc0pTT04gPSB0aGVvcmVtcy5tYXAoKHRoZW9yZW0pID0+IHtcbiAgICBjb25zdCB0aGVvcmVtSlNPTiA9IHRoZW9yZW0udG9KU09OKCk7XG5cbiAgICB0aGVvcmVtID0gdGhlb3JlbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odmFyaWFibGVzKSB7XG4gIGNvbnN0IHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047ICAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OKGNvbmplY3R1cmVzKSB7XG4gIGNvbnN0IGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzLm1hcCgoY29uamVjdHVyZSkgPT4ge1xuICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04oKTtcblxuICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04oY29tYmluYXRvcnMpIHtcbiAgY29uc3QgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnMubWFwKChjb21iaW5hdG9yKSA9PiB7XG4gICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTigpO1xuXG4gICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JKU09OOyAvLy9cblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKGNvbnN0cnVjdG9ycykge1xuICBjb25zdCBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKG1ldGF0aGVvcmVtcykge1xuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUpTT04gPSBtZXRhdGhlb3JlbS50b0pTT04oKTtcblxuICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1KU09OOyAvLy9cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTihzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucy5tYXBTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04obWV0YXZhcmlhYmxlcykge1xuICBjb25zdCBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXNKU09OO1xufVxuIl0sIm5hbWVzIjpbImF4aW9tc0Zyb21KU09OIiwiYXhpb21zVG9BeGlvbXNKU09OIiwiY29tYmluYXRvcnNGcm9tSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImNvbmplY3R1cmVzRnJvbUpTT04iLCJjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OIiwiY29uc2VxdWVudEZyb21KU09OIiwiY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsImxhYmVsc0Zyb21KU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhVHlwZUZyb21KU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwicHJvY2VkdXJlQ2FsbEZyb21KU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJydWxlc0Zyb21KU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJzdXBlclR5cGVGcm9tSlNPTiIsInN1cGVyVHlwZVRvU3VwZXJUeXBlSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0aGVvcmVtc0Zyb21KU09OIiwidGhlb3JlbXNUb1RoZW9yZW1zSlNPTiIsInR5cGVGcm9tSlNPTiIsInR5cGVUb1R5cGVKU09OIiwidHlwZXNGcm9tSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImpzb24iLCJmaWxlQ29udGV4dCIsInRlcm0iLCJ0ZXJtSlNPTiIsIlRlcm0iLCJkb20iLCJmcm9tSlNPTiIsInR5cGUiLCJuYW1lIiwidHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJtZXRhVHlwZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlSlNPTiIsInN0YXRlbWVudCIsIlN0YXRlbWVudCIsInN0YXRlbWVudEpTT04iLCJjb25jbHVzaW9uIiwiQ29uY2x1c2lvbiIsImNvbmNsdXNpb25KU09OIiwiY29uc2VxdWVudCIsIkNvbnNlcXVlbnQiLCJjb25zZXF1ZW50SlNPTiIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJwcm9jZWR1cmVDYWxsIiwiUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxKU09OIiwidHlwZXMiLCJ0eXBlc0pTT04iLCJUeXBlIiwiZm9yRWFjaCIsInR5cGVKU09OIiwicHVzaCIsInJ1bGVzIiwiUnVsZSIsInJ1bGVzSlNPTiIsIm1hcCIsInJ1bGVKU09OIiwicnVsZSIsImxhYmVscyIsIkxhYmVsIiwibGFiZWxzSlNPTiIsImxhYmVsSlNPTiIsImxhYmVsIiwiYXhpb21zIiwiQXhpb20iLCJheGlvbXNKU09OIiwiYXhpb21KU09OIiwiYXhpb20iLCJwcmVtaXNlcyIsIlByZW1pc2UiLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlSlNPTiIsInByZW1pc2UiLCJ0aGVvcmVtcyIsIlRoZW9yZW0iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtSlNPTiIsInRoZW9yZW0iLCJ2YXJpYWJsZXMiLCJWYXJpYWJsZSIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZUpTT04iLCJ2YXJpYWJsZSIsImNvbmplY3R1cmVzIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29uamVjdHVyZSIsImNvbWJpbmF0b3JzIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvckpTT04iLCJjb21iaW5hdG9yIiwiQ29tYmluYXRvciIsImNvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJjb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIiwibWV0YXRoZW9yZW1zIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1KU09OIiwibWV0YXRoZW9yZW0iLCJzdXBwb3NpdGlvbnMiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbkpTT04iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zSlNPTiIsIlN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkpTT04iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwibWFwU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFpTGdCQSxjQUFjO2VBQWRBOztJQTZSQUMsa0JBQWtCO2VBQWxCQTs7SUE3TUFDLG1CQUFtQjtlQUFuQkE7O0lBdVFBQyw0QkFBNEI7ZUFBNUJBOztJQTFiQUMsa0JBQWtCO2VBQWxCQTs7SUFrVUFDLDBCQUEwQjtlQUExQkE7O0lBL0pBQyxtQkFBbUI7ZUFBbkJBOztJQTJRQUMsNEJBQTRCO2VBQTVCQTs7SUFqYUFDLGtCQUFrQjtlQUFsQkE7O0lBMlRBQywwQkFBMEI7ZUFBMUJBOztJQXRJQUMsb0JBQW9CO2VBQXBCQTs7SUE4UUFDLDhCQUE4QjtlQUE5QkE7O0lBN1hBQyxjQUFjO2VBQWRBOztJQW1TQUMsa0JBQWtCO2VBQWxCQTs7SUFyR0FDLGlCQUFpQjtlQUFqQkE7O0lBTUFDLHFCQUFxQjtlQUFyQkE7O0lBblVBQyxnQkFBZ0I7ZUFBaEJBOztJQXVWQUMsc0JBQXNCO2VBQXRCQTs7SUExRkFDLG9CQUFvQjtl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