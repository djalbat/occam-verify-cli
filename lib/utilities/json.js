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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termFromJSON(json, fileContext) {
    var term = json.term;
    var termJSON = term; ///
    json = termJSON; ///
    var Term = _shim.default.Term;
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
    var statement = json.statement;
    var Statement = _shim.default.Statement, statementJSON = statement; ///
    json = statementJSON; ///
    statement = Statement.fromJSON(json, fileContext);
    return statement;
}
function conclusionFromJSON(json, fileContext) {
    var conclusion = json.conclusion;
    var Conclusion = _shim.default.Conclusion, conclusionJSON = conclusion; ///
    json = conclusionJSON; ///
    conclusion = Conclusion.fromJSON(json, fileContext);
    return conclusion;
}
function consequentFromJSON(json, fileContext) {
    var consequent = json.consequent;
    var Consequent = _shim.default.Consequent, consequentJSON = consequent; ///
    json = consequentJSON; ///
    consequent = Consequent.fromJSON(json, fileContext);
    return consequent;
}
function metavariableFromJSON(json, fileContext) {
    var metavariable = json.metavariable;
    var Metavariable = _shim.default.Metavariable, metavariableJSON = metavariable; ///
    json = metavariableJSON; ///
    metavariable = Metavariable.fromJSON(json, fileContext);
    return metavariable;
}
function typesFromJSON(json, types, fileContext) {
    var typesJSON = json.types;
    var Type = _shim.default.Type;
    typesJSON.forEach(function(typeJSON) {
        var _$json = typeJSON, type = Type.fromJSON(_$json, fileContext);
        types.push(type);
    });
}
function rulesFromJSON(json, fileContext) {
    var rules = json.rules;
    var Rule = _shim.default.Rule, rulesJSON = rules; ///
    rules = rulesJSON.map(function(ruleJSON) {
        var _$json = ruleJSON, rule = Rule.fromJSON(_$json, fileContext);
        return rule;
    });
    return rules;
}
function labelsFromJSON(json, fileContext) {
    var labels = json.labels;
    var Label = _shim.default.Label, labelsJSON = labels; ///
    labels = labelsJSON.map(function(labelJSON) {
        var _$json = labelJSON, label = Label.fromJSON(_$json, fileContext);
        return label;
    });
    return labels;
}
function axiomsFromJSON(json, fileContext) {
    var axioms = json.axioms;
    var Axiom = _shim.default.Axiom, axiomsJSON = axioms; ///
    axioms = axiomsJSON.map(function(axiomJSON) {
        var _$json = axiomJSON, axiom = Axiom.fromJSON(_$json, fileContext);
        return axiom;
    });
    return axioms;
}
function premisesFromJSON(json, fileContext) {
    var premises = json.premises;
    var Premise = _shim.default.Premise, premisesJSON = premises; ///
    premises = premisesJSON.map(function(premiseJSON) {
        var _$json = premiseJSON, premise = Premise.fromJSON(_$json, fileContext);
        return premise;
    });
    return premises;
}
function theoremsFromJSON(json, fileContext) {
    var theorems = json.theorems;
    var Theorem = _shim.default.Theorem, theoremsJSON = theorems; ///
    theorems = theoremsJSON.map(function(theoremJSON) {
        var _$json = theoremJSON, theorem = Theorem.fromJSON(_$json, fileContext);
        return theorem;
    });
    return theorems;
}
function variablesFromJSON(json, fileContext) {
    var variables = json.variables;
    var Variable = _shim.default.Variable, variablesJSON = variables; ///
    variables = variablesJSON.map(function(variableJSON) {
        var _$json = variableJSON, variable = Variable.fromJSON(_$json, fileContext);
        return variable;
    });
    return variables;
}
function conjecturesFromJSON(json, fileContext) {
    var conjectures = json.conjectures;
    var Conjecture = _shim.default.Conjecture, conjecturesJSON = conjectures; ///
    conjectures = conjecturesJSON.map(function(conjectureJSON) {
        var _$json = conjectureJSON, conjecture = Conjecture.fromJSON(_$json, fileContext);
        return conjecture;
    });
    return conjectures;
}
function combinatorsFromJSON(json, fileContext) {
    var combinators = json.combinators;
    var Combinator = _shim.default.Combinator, combinatorsJSON = combinators; ///
    combinators = combinatorsJSON.map(function(combinatorJSON) {
        var _$json = combinatorJSON, combinator = Combinator.fromJSON(_$json, fileContext);
        return combinator;
    });
    return combinators;
}
function constructorsFromJSON(json, fileContext) {
    var constructors = json.constructors;
    var Constructor = _shim.default.Constructor, constructorsJSON = constructors; ///
    constructors = constructorsJSON.map(function(constructorJSON) {
        var _$json = constructorJSON, constructor = Constructor.fromJSON(_$json, fileContext);
        return constructor;
    });
    return constructors;
}
function metatheoremsFromJSON(json, fileContext) {
    var metatheorems = json.metatheorems;
    var Metatheorem = _shim.default.Metatheorem, metatheoremsJSON = metatheorems; ///
    metatheorems = metatheoremsJSON.map(function(metatheoremJSON) {
        var _$json = metatheoremJSON, metatheorem = Metatheorem.fromJSON(_$json, fileContext);
        return metatheorem;
    });
    return metatheorems;
}
function suppositionsFromJSON(json, fileContext) {
    var suppositions = json.suppositions;
    var Supposition = _shim.default.Supposition, suppositionsJSON = suppositions; ///
    suppositions = suppositionsJSON.map(function(suppositionJSON) {
        var _$json = suppositionJSON, supposition = Supposition.fromJSON(_$json, fileContext);
        return supposition;
    });
    return suppositions;
}
function substitutionsFromJSON(json, fileContext) {
    var _json_substitutions = json.substitutions, substitutions = _json_substitutions === void 0 ? [] : _json_substitutions; ///
    var StatementSubstitution = _shim.default.StatementSubstitution, substitutionsJSON = substitutions, Substitution = StatementSubstitution; ///
    substitutions = substitutionsJSON.map(function(substitutionJSON) {
        var _$json = substitutionJSON, substitution = Substitution.fromJSON(_$json, fileContext);
        return substitution;
    });
    return substitutions;
}
function metavariablesFromJSON(json, fileContext) {
    var metavariables = json.metavariables;
    var Metavariable = _shim.default.Metavariable, metavariablesJSON = metavariables; ///
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
    var statementJSON = statement.toJSON();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0ZXJtIH0gPSBqc29uO1xuXG4gIGNvbnN0IHRlcm1KU09OID0gdGVybTsgIC8vL1xuXG4gIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gc2hpbTtcblxuICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdHlwZSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gbWV0YVR5cGUsXG4gICAgICAgICAgbWV0YVR5cGVOYW1lID0gbmFtZTsgIC8vL1xuXG4gICAgbWV0YVR5cGUgPSBmaWxlQ29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3VwZXJUeXBlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHN1cGVyVHlwZUpTT04gPSBzdXBlclR5cGU7ICAvLy9cblxuICBqc29uID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICB0eXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgc3VwZXJUeXBlID0gdHlwZTsgLy8vXG5cbiAgcmV0dXJuIHN1cGVyVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN0YXRlbWVudCB9ID0ganNvbjtcblxuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudDsgIC8vL1xuXG4gIGpzb24gPSBzdGF0ZW1lbnRKU09OOyAvLy9cblxuICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IHNoaW0sXG4gICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnNlcXVlbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb25zZXF1ZW50IH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uc2VxdWVudCB9ID0gc2hpbSxcbiAgICAgICAgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50OyAgLy8vXG5cbiAganNvbiA9IGNvbnNlcXVlbnRKU09OOyAgLy8vXG5cbiAgY29uc2VxdWVudCA9IENvbnNlcXVlbnQuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBjb25zZXF1ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlOyAgLy8vXG5cbiAganNvbiA9IG1ldGF2YXJpYWJsZUpTT047IC8vL1xuXG4gIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzRnJvbUpTT04oanNvbiwgdHlwZXMsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgdHlwZXM6IHR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGUgfSA9IHNoaW07XG5cbiAgdHlwZXNKU09OLmZvckVhY2goKHR5cGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdHlwZXMucHVzaCh0eXBlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHJ1bGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUnVsZSB9ID0gc2hpbSxcbiAgICAgICAgcnVsZXNKU09OID0gcnVsZXM7IC8vL1xuXG4gIHJ1bGVzID0gcnVsZXNKU09OLm1hcCgocnVsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKHJ1bGUpO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gc2hpbSxcbiAgICAgICAgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGF4aW9tcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEF4aW9tIH0gPSBzaGltLFxuICAgICAgICBheGlvbXNKU09OID0gYXhpb21zOyAvLy9cblxuICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIChheGlvbSk7XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHByZW1pc2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gc2hpbSxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRoZW9yZW0gfSA9IHNoaW0sXG4gICAgICAgIHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zOyAvLy9cblxuICB0aGVvcmVtcyA9IHRoZW9yZW1zSlNPTi5tYXAoKHRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuICh0aGVvcmVtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgIHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXM7IC8vL1xuXG4gIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0pTT04ubWFwKCh2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKHZhcmlhYmxlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uamVjdHVyZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBzaGltLFxuICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlczsgLy8vXG5cbiAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04ubWFwKChjb25qZWN0dXJlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiAoY29uamVjdHVyZSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29tYmluYXRvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBzaGltLFxuICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9yczsgLy8vXG5cbiAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04ubWFwKChjb21iaW5hdG9ySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb21iaW5hdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiAoY29tYmluYXRvcik7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbnN0cnVjdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBzaGltLFxuICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzOyAvLy9cblxuICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLm1hcCgoY29uc3RydWN0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIChjb25zdHJ1Y3Rvcik7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdGhlb3JlbSB9ID0gc2hpbSxcbiAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtczsgLy8vXG5cbiAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTi5tYXAoKG1ldGF0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiAobWV0YXRoZW9yZW0pO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3VwcG9zaXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IHNoaW0sXG4gICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3Vic3RpdHV0aW9ucyA9IFtdIH0gPSBqc29uOyAgLy8vXG5cbiAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IHNoaW0sXG4gICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucywgIC8vL1xuICAgICAgICBTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb247IC8vL1xuXG4gIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3Vic3RpdHV0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IFN1YnN0aXR1dGlvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXM7IC8vL1xuXG4gIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTi5tYXAoKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKG1ldGF2YXJpYWJsZSk7XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBsZW1tYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhTGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICByZXR1cm4gbWV0YUxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Ub1Rlcm1KU09OKHRlcm0pIHtcbiAgY29uc3QgdGVybUpTT04gPSB0ZXJtLnRvSlNPTigpO1xuXG4gIHJldHVybiB0ZXJtSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVUb1R5cGVKU09OKHR5cGUpIHtcbiAgY29uc3QgdHlwZUpTT04gPSAodHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgdHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVUb01ldGFUeXBlSlNPTihtZXRhVHlwZSkge1xuICBjb25zdCBtZXRhVHlwZUpTT04gPSAobWV0YVR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhVHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICByZXR1cm4gbWV0YVR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlVG9TdXBlclR5cGVKU09OKHN1cGVyVHlwZSkge1xuICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gIHJldHVybiBzdXBlclR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHN0YXRlbWVudCkge1xuICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50LnRvSlNPTigpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04oY29uY2x1c2lvbikge1xuICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04oY29uc2VxdWVudCkge1xuICBjb25zdCBjb25zZXF1ZW50SlNPTiA9IGNvbnNlcXVlbnQudG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbnNlcXVlbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNUb1R5cGVzSlNPTih0eXBlcykge1xuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc1RvUnVsZXNKU09OKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVzSlNPTiA9IHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04oY29uamVjdHVyZXMpIHtcbiAgY29uc3QgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTigpO1xuXG4gICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTihjb21iaW5hdG9ycykge1xuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKCk7XG5cbiAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04oc3VwcG9zaXRpb25zKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04oY29uc3RydWN0b3JzKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTigpO1xuXG4gICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04obWV0YXRoZW9yZW1zKSB7XG4gIGNvbnN0IG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXMubWFwKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLm1hcFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTihtZXRhdmFyaWFibGVzKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG4iXSwibmFtZXMiOlsiYXhpb21zRnJvbUpTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb25zZXF1ZW50RnJvbUpTT04iLCJjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwibGFiZWxzRnJvbUpTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsIm1ldGFUeXBlRnJvbUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJydWxlc0Zyb21KU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJzdXBlclR5cGVGcm9tSlNPTiIsInN1cGVyVHlwZVRvU3VwZXJUeXBlSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0aGVvcmVtc0Zyb21KU09OIiwidGhlb3JlbXNUb1RoZW9yZW1zSlNPTiIsInR5cGVGcm9tSlNPTiIsInR5cGVUb1R5cGVKU09OIiwidHlwZXNGcm9tSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImpzb24iLCJmaWxlQ29udGV4dCIsInRlcm0iLCJ0ZXJtSlNPTiIsIlRlcm0iLCJzaGltIiwiZnJvbUpTT04iLCJ0eXBlIiwibmFtZSIsInR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwibWV0YVR5cGUiLCJtZXRhVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZUpTT04iLCJzdGF0ZW1lbnQiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRKU09OIiwiY29uY2x1c2lvbiIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uSlNPTiIsImNvbnNlcXVlbnQiLCJDb25zZXF1ZW50IiwiY29uc2VxdWVudEpTT04iLCJtZXRhdmFyaWFibGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVKU09OIiwidHlwZXMiLCJ0eXBlc0pTT04iLCJUeXBlIiwiZm9yRWFjaCIsInR5cGVKU09OIiwicHVzaCIsInJ1bGVzIiwiUnVsZSIsInJ1bGVzSlNPTiIsIm1hcCIsInJ1bGVKU09OIiwicnVsZSIsImxhYmVscyIsIkxhYmVsIiwibGFiZWxzSlNPTiIsImxhYmVsSlNPTiIsImxhYmVsIiwiYXhpb21zIiwiQXhpb20iLCJheGlvbXNKU09OIiwiYXhpb21KU09OIiwiYXhpb20iLCJwcmVtaXNlcyIsIlByZW1pc2UiLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlSlNPTiIsInByZW1pc2UiLCJ0aGVvcmVtcyIsIlRoZW9yZW0iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtSlNPTiIsInRoZW9yZW0iLCJ2YXJpYWJsZXMiLCJWYXJpYWJsZSIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZUpTT04iLCJ2YXJpYWJsZSIsImNvbmplY3R1cmVzIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29uamVjdHVyZSIsImNvbWJpbmF0b3JzIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JKU09OIiwiY29tYmluYXRvciIsImNvbnN0cnVjdG9ycyIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsImNvbnN0cnVjdG9yIiwibWV0YXRoZW9yZW1zIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1KU09OIiwibWV0YXRoZW9yZW0iLCJzdXBwb3NpdGlvbnMiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbkpTT04iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25zSlNPTiIsIlN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkpTT04iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwibWFwU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE2SmdCQSxjQUFjO2VBQWRBOztJQWtSQUMsa0JBQWtCO2VBQWxCQTs7SUFsTUFDLG1CQUFtQjtlQUFuQkE7O0lBNFBBQyw0QkFBNEI7ZUFBNUJBOztJQWhhQUMsa0JBQWtCO2VBQWxCQTs7SUFrVEFDLDBCQUEwQjtlQUExQkE7O0lBOUpBQyxtQkFBbUI7ZUFBbkJBOztJQWdRQUMsNEJBQTRCO2VBQTVCQTs7SUF2WUFDLGtCQUFrQjtlQUFsQkE7O0lBMlNBQywwQkFBMEI7ZUFBMUJBOztJQXBJQUMsb0JBQW9CO2VBQXBCQTs7SUFrUUFDLDhCQUE4QjtlQUE5QkE7O0lBbFhBQyxjQUFjO2VBQWRBOztJQXdSQUMsa0JBQWtCO2VBQWxCQTs7SUF2RkFDLGlCQUFpQjtlQUFqQkE7O0lBTUFDLHFCQUFx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