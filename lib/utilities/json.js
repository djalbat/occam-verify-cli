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
    unqualifiedStatementFromJSON: function() {
        return unqualifiedStatementFromJSON;
    },
    unqualifiedStatementToUnqualifiedStatementJSON: function() {
        return unqualifiedStatementToUnqualifiedStatementJSON;
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
    var name = type.name, typeName = name; ///
    type = fileContext.findTypeByTypeName(typeName);
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
function unqualifiedStatementFromJSON(json, fileContext) {
    var unqualifiedStatement = json.unqualifiedStatement;
    var UnqualifiedStatement = _shim.default.UnqualifiedStatement, unqualifiedStatementJSON = unqualifiedStatement; ///
    json = unqualifiedStatementJSON; ///
    unqualifiedStatement = UnqualifiedStatement.fromJSON(json, fileContext);
    return unqualifiedStatement;
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
    var Substitution = _shim.default.StatementForMetavariableSubstitution, substitutionsJSON = substitutions; ///
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
    var typeJSON = type.toJSON();
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
function unqualifiedStatementToUnqualifiedStatementJSON(unqualifiedStatement) {
    var unqualifiedStatementJSON = unqualifiedStatement.toJSON();
    return unqualifiedStatementJSON;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0ZXJtIH0gPSBqc29uO1xuXG4gIGNvbnN0IHRlcm1KU09OID0gdGVybTsgIC8vL1xuXG4gIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gc2hpbTtcblxuICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBjb25zdCB7IG5hbWUgfSA9IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lID0gbmFtZTsgIC8vL1xuXG4gIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IG1ldGFUeXBlLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gZmlsZUNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN1cGVyVHlwZSB9ID0ganNvbjtcblxuICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlOyAgLy8vXG5cbiAganNvbiA9IHN1cGVyVHlwZUpTT047IC8vL1xuXG4gIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIHN1cGVyVHlwZSA9IHR5cGU7IC8vL1xuXG4gIHJldHVybiBzdXBlclR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnQgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICBqc29uID0gc3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBzaGltLFxuICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zZXF1ZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uc2VxdWVudCB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbnNlcXVlbnQgfSA9IHNoaW0sXG4gICAgICAgIGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudDsgIC8vL1xuXG4gIGpzb24gPSBjb25zZXF1ZW50SlNPTjsgIC8vL1xuXG4gIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29uc2VxdWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHVucXVhbGlmaWVkU3RhdGVtZW50IH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiA9IHVucXVhbGlmaWVkU3RhdGVtZW50OyAgLy8vXG5cbiAganNvbiA9IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tSlNPTihqc29uLCB0eXBlcywgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyB0eXBlczogdHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZSB9ID0gc2hpbTtcblxuICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcnVsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSdWxlIH0gPSBzaGltLFxuICAgICAgICBydWxlc0pTT04gPSBydWxlczsgLy8vXG5cbiAgcnVsZXMgPSBydWxlc0pTT04ubWFwKChydWxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBydWxlSlNPTiwgIC8vL1xuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiAocnVsZSk7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBzaGltLFxuICAgICAgICBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgYXhpb21zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXhpb20gfSA9IHNoaW0sXG4gICAgICAgIGF4aW9tc0pTT04gPSBheGlvbXM7IC8vL1xuXG4gIGF4aW9tcyA9IGF4aW9tc0pTT04ubWFwKChheGlvbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXhpb21KU09OLCAgLy8vXG4gICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKGF4aW9tKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBzaGltLFxuICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLm1hcCgocHJlbWlzZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJlbWlzZUpTT04sIC8vL1xuICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVGhlb3JlbSB9ID0gc2hpbSxcbiAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuXG4gIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLm1hcCgodGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKHRoZW9yZW0pO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiAodmFyaWFibGUpO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb25qZWN0dXJlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IHNoaW0sXG4gICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzOyAvLy9cblxuICBjb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzSlNPTi5tYXAoKGNvbmplY3R1cmVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIChjb25qZWN0dXJlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb21iaW5hdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IHNoaW0sXG4gICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzOyAvLy9cblxuICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTi5tYXAoKGNvbWJpbmF0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIChjb21iaW5hdG9yKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uc3RydWN0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IHNoaW0sXG4gICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnM7IC8vL1xuXG4gIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04ubWFwKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKGNvbnN0cnVjdG9yKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF0aGVvcmVtIH0gPSBzaGltLFxuICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zOyAvLy9cblxuICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLm1hcCgobWV0YXRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIChtZXRhdGhlb3JlbSk7XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdXBwb3NpdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gc2hpbSxcbiAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdWJzdGl0dXRpb25zID0gW10gfSA9IGpzb247ICAvLy9cblxuICBjb25zdCB7IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjogU3Vic3RpdHV0aW9uIH0gPSBzaGltLCAgLy8vXG4gICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uczsgIC8vL1xuXG4gIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3Vic3RpdHV0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IFN1YnN0aXR1dGlvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXM7IC8vL1xuXG4gIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTi5tYXAoKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKG1ldGF2YXJpYWJsZSk7XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBsZW1tYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhTGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICByZXR1cm4gbWV0YUxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Ub1Rlcm1KU09OKHRlcm0pIHtcbiAgY29uc3QgdGVybUpTT04gPSB0ZXJtLnRvSlNPTigpO1xuXG4gIHJldHVybiB0ZXJtSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVUb1R5cGVKU09OKHR5cGUpIHtcbiAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTigpO1xuXG4gIHJldHVybiB0eXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04obWV0YVR5cGUpIHtcbiAgY29uc3QgbWV0YVR5cGVKU09OID0gKG1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgcmV0dXJuIG1ldGFUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZVRvU3VwZXJUeXBlSlNPTihzdXBlclR5cGUpIHtcbiAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZS50b0pTT04oKTtcblxuICByZXR1cm4gc3VwZXJUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTihzdGF0ZW1lbnQpIHtcbiAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudC50b0pTT04oKTtcblxuICByZXR1cm4gc3RhdGVtZW50SlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKGNvbmNsdXNpb24pIHtcbiAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OKGNvbnNlcXVlbnQpIHtcbiAgY29uc3QgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50LnRvSlNPTigpO1xuXG4gIHJldHVybiBjb25zZXF1ZW50SlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTihtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04oKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucXVhbGlmaWVkU3RhdGVtZW50VG9VbnF1YWxpZmllZFN0YXRlbWVudEpTT04odW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnQudG9KU09OKCk7XG5cbiAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzVG9UeXBlc0pTT04odHlwZXMpIHtcbiAgY29uc3QgdHlwZXNKU09OID0gdHlwZXMubWFwKCh0eXBlKSA9PiB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTigpO1xuXG4gICAgdHlwZSA9IHR5cGVKU09OOyAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9KTtcblxuICByZXR1cm4gdHlwZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNUb1J1bGVzSlNPTihydWxlcykge1xuICBjb25zdCBydWxlc0pTT04gPSBydWxlcy5tYXAoKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKCk7XG5cbiAgICBydWxlID0gcnVsZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNUb0xhYmVsc0pTT04obGFiZWxzKSB7XG4gIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVsc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNUb0F4aW9tc0pTT04oYXhpb21zKSB7XG4gIGNvbnN0IGF4aW9tc0pTT04gPSBheGlvbXMubWFwKChheGlvbSkgPT4ge1xuICAgIGNvbnN0IGF4aW9tSlNPTiA9IGF4aW9tLnRvSlNPTigpO1xuXG4gICAgYXhpb20gPSBheGlvbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzVG9QcmVtaXNlc0pTT04ocHJlbWlzZXMpIHtcbiAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNUb1RoZW9yZW1zSlNPTih0aGVvcmVtcykge1xuICBjb25zdCB0aGVvcmVtc0pTT04gPSB0aGVvcmVtcy5tYXAoKHRoZW9yZW0pID0+IHtcbiAgICBjb25zdCB0aGVvcmVtSlNPTiA9IHRoZW9yZW0udG9KU09OKCk7XG5cbiAgICB0aGVvcmVtID0gdGhlb3JlbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odmFyaWFibGVzKSB7XG4gIGNvbnN0IHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047ICAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OKGNvbmplY3R1cmVzKSB7XG4gIGNvbnN0IGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzLm1hcCgoY29uamVjdHVyZSkgPT4ge1xuICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04oKTtcblxuICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04oY29tYmluYXRvcnMpIHtcbiAgY29uc3QgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnMubWFwKChjb21iaW5hdG9yKSA9PiB7XG4gICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTigpO1xuXG4gICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JKU09OOyAvLy9cblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKGNvbnN0cnVjdG9ycykge1xuICBjb25zdCBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKG1ldGF0aGVvcmVtcykge1xuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUpTT04gPSBtZXRhdGhlb3JlbS50b0pTT04oKTtcblxuICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1KU09OOyAvLy9cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTihzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucy5tYXBTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04obWV0YXZhcmlhYmxlcykge1xuICBjb25zdCBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXNKU09OO1xufVxuIl0sIm5hbWVzIjpbImF4aW9tc0Zyb21KU09OIiwiYXhpb21zVG9BeGlvbXNKU09OIiwiY29tYmluYXRvcnNGcm9tSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImNvbmplY3R1cmVzRnJvbUpTT04iLCJjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OIiwiY29uc2VxdWVudEZyb21KU09OIiwiY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsImxhYmVsc0Zyb21KU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhVHlwZUZyb21KU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwicnVsZXNGcm9tSlNPTiIsInJ1bGVzVG9SdWxlc0pTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwic3VwZXJUeXBlRnJvbUpTT04iLCJzdXBlclR5cGVUb1N1cGVyVHlwZUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInRlcm1Gcm9tSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwidGhlb3JlbXNGcm9tSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ0eXBlRnJvbUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInR5cGVzRnJvbUpTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9VbnF1YWxpZmllZFN0YXRlbWVudEpTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImpzb24iLCJmaWxlQ29udGV4dCIsInRlcm0iLCJ0ZXJtSlNPTiIsIlRlcm0iLCJzaGltIiwiZnJvbUpTT04iLCJ0eXBlIiwibmFtZSIsInR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwibWV0YVR5cGUiLCJtZXRhVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZUpTT04iLCJzdGF0ZW1lbnQiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRKU09OIiwiY29uY2x1c2lvbiIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uSlNPTiIsImNvbnNlcXVlbnQiLCJDb25zZXF1ZW50IiwiY29uc2VxdWVudEpTT04iLCJtZXRhdmFyaWFibGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVKU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJVbnF1YWxpZmllZFN0YXRlbWVudCIsInVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiIsInR5cGVzIiwidHlwZXNKU09OIiwiVHlwZSIsImZvckVhY2giLCJ0eXBlSlNPTiIsInB1c2giLCJydWxlcyIsIlJ1bGUiLCJydWxlc0pTT04iLCJtYXAiLCJydWxlSlNPTiIsInJ1bGUiLCJsYWJlbHMiLCJMYWJlbCIsImxhYmVsc0pTT04iLCJsYWJlbEpTT04iLCJsYWJlbCIsImF4aW9tcyIsIkF4aW9tIiwiYXhpb21zSlNPTiIsImF4aW9tSlNPTiIsImF4aW9tIiwicHJlbWlzZXMiLCJQcmVtaXNlIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZUpTT04iLCJwcmVtaXNlIiwidGhlb3JlbXMiLCJUaGVvcmVtIiwidGhlb3JlbXNKU09OIiwidGhlb3JlbUpTT04iLCJ0aGVvcmVtIiwidmFyaWFibGVzIiwiVmFyaWFibGUiLCJ2YXJpYWJsZXNKU09OIiwidmFyaWFibGVKU09OIiwidmFyaWFibGUiLCJjb25qZWN0dXJlcyIsIkNvbmplY3R1cmUiLCJjb25qZWN0dXJlc0pTT04iLCJjb25qZWN0dXJlSlNPTiIsImNvbmplY3R1cmUiLCJjb21iaW5hdG9ycyIsIkNvbWJpbmF0b3IiLCJjb21iaW5hdG9yc0pTT04iLCJjb21iaW5hdG9ySlNPTiIsImNvbWJpbmF0b3IiLCJjb25zdHJ1Y3RvcnMiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJjb25zdHJ1Y3RvciIsIm1ldGF0aGVvcmVtcyIsIk1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtSlNPTiIsIm1ldGF0aGVvcmVtIiwic3VwcG9zaXRpb25zIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25KU09OIiwic3VwcG9zaXRpb24iLCJzdWJzdGl0dXRpb25zIiwiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25KU09OIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXNKU09OIiwibGVtbWFzIiwibWV0YUxlbW1hcyIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1hcFN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBd0tnQkEsY0FBYztlQUFkQTs7SUFxUkFDLGtCQUFrQjtlQUFsQkE7O0lBck1BQyxtQkFBbUI7ZUFBbkJBOztJQStQQUMsNEJBQTRCO2VBQTVCQTs7SUFoYkFDLGtCQUFrQjtlQUFsQkE7O0lBNFRBQywwQkFBMEI7ZUFBMUJBOztJQTNKQUMsbUJBQW1CO2VBQW5CQTs7SUFtUUFDLDRCQUE0QjtlQUE1QkE7O0lBdlpBQyxrQkFBa0I7ZUFBbEJBOztJQXFUQUMsMEJBQTBCO2VBQTFCQTs7SUFqSUFDLG9CQUFvQjtlQUFwQkE7O0lBcVFBQyw4QkFBOEI7ZUFBOUJBOztJQXJYQUMsY0FBYztlQUFkQTs7SUEyUkFDLGtCQUFrQjtlQUFsQkE7O0lBM0ZBQyxpQkFBaUI7ZUFBakJBOztJQU1BQyxxQkFBcUI7ZUFBckJBOztJQWpVQUMsZ0JBQWdCO2VBQWhCQTs7SUFtVkFDLHNCQUFzQjtlQUF0QkE7O0lBeEZBQyxvQkFBb0I7ZUFBcEJBOztJQWlRQUMsOEJBQThCO2VBQTlCQTs7SUF4YkFDLG9CQUFvQjtlQUFwQkE7O0lBOFNBQyw4QkFBOEI7ZUFBOUJBOztJQXZFQUMscUJBQXFCO2VBQXJCQTs7SUF1T0FDLGdDQUFnQztlQUFoQ0E7O0lBdlhBQyxnQkFBZ0I7ZUFBaEJBOztJQWlSQUMsc0JBQXNCO2VBQXRCQTs7SUFqVUFDLGFBQWE7ZUFBYkE7O0lBK1JBQyxnQkFBZ0I7ZUFBaEJBOztJQTdXQUMsaUJBQWlC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