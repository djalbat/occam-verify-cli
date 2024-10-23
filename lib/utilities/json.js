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
    typesJSON.forEach(function(typeJSON) {
        var Type = _shim.default.Type, _$json = typeJSON, type = Type.fromJSON(_$json, fileContext);
        types.push(type);
    });
}
function rulesFromJSON(json, fileContext) {
    var rules = json.rules;
    var rulesJSON = rules; ///
    rules = rulesJSON.map(function(ruleJSON) {
        var Rule = _shim.default.Rule, _$json = ruleJSON, rule = Rule.fromJSON(_$json, fileContext);
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
    var axiomsJSON = axioms; ///
    axioms = axiomsJSON.map(function(axiomJSON) {
        var Axiom = _shim.default.Axiom, _$json = axiomJSON, axiom = Axiom.fromJSON(_$json, fileContext);
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
    var theoremsJSON = theorems; ///
    theorems = theoremsJSON.map(function(theoremJSON) {
        var Theorem = _shim.default.Theorem, _$json = theoremJSON, theorem = Theorem.fromJSON(_$json, fileContext);
        return theorem;
    });
    return theorems;
}
function variablesFromJSON(json, fileContext) {
    var variables = json.variables;
    var variablesJSON = variables; ///
    variables = variablesJSON.map(function(variableJSON) {
        var Variable = _shim.default.Variable, _$json = variableJSON, variable = Variable.fromJSON(_$json, fileContext);
        return variable;
    });
    return variables;
}
function conjecturesFromJSON(json, fileContext) {
    var conjectures = json.conjectures;
    var conjecturesJSON = conjectures; ///
    conjectures = conjecturesJSON.map(function(conjectureJSON) {
        var Conjecture = _shim.default.Conjecture, _$json = conjectureJSON, conjecture = Conjecture.fromJSON(_$json, fileContext);
        return conjecture;
    });
    return conjectures;
}
function combinatorsFromJSON(json, fileContext) {
    var combinators = json.combinators;
    var combinatorsJSON = combinators; ///
    combinators = combinatorsJSON.map(function(combinatorJSON) {
        var Combinator = _shim.default.Combinator, _$json = combinatorJSON, combinator = Combinator.fromJSON(_$json, fileContext);
        return combinator;
    });
    return combinators;
}
function constructorsFromJSON(json, fileContext) {
    var constructors = json.constructors;
    var constructorsJSON = constructors; ///
    constructors = constructorsJSON.map(function(constructorJSON) {
        var Constructor = _shim.default.Constructor, _$json = constructorJSON, constructor = Constructor.fromJSON(_$json, fileContext);
        return constructor;
    });
    return constructors;
}
function metatheoremsFromJSON(json, fileContext) {
    var metatheorems = json.metatheorems;
    var metatheoremsJSON = metatheorems; ///
    metatheorems = metatheoremsJSON.map(function(metatheoremJSON) {
        var Metatheorem = _shim.default.Metatheorem, _$json = metatheoremJSON, metatheorem = Metatheorem.fromJSON(_$json, fileContext);
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
    var Substitution = _shim.default.Substitution, substitutionsJSON = substitutions; ///
    substitutions = substitutionsJSON.map(function(substitutionJSON) {
        var _$json = substitutionJSON, substitution = Substitution.fromJSON(_$json, fileContext);
        return substitution;
    });
    return substitutions;
}
function metavariablesFromJSON(json, fileContext) {
    var metavariables = json.metavariables;
    var metavariablesJSON = metavariables; ///
    metavariables = metavariablesJSON.map(function(metavariableJSON) {
        var Metavariable = _shim.default.Metavariable, _$json = metavariableJSON, metavariable = Metavariable.fromJSON(_$json, fileContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0ZXJtIH0gPSBqc29uO1xuXG4gIGNvbnN0IHRlcm1KU09OID0gdGVybTsgIC8vL1xuXG4gIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gc2hpbTtcblxuICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBjb25zdCB7IG5hbWUgfSA9IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lID0gbmFtZTsgIC8vL1xuXG4gIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IG1ldGFUeXBlLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gZmlsZUNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN1cGVyVHlwZSB9ID0ganNvbjtcblxuICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlOyAgLy8vXG5cbiAganNvbiA9IHN1cGVyVHlwZUpTT047IC8vL1xuXG4gIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIHN1cGVyVHlwZSA9IHR5cGU7IC8vL1xuXG4gIHJldHVybiBzdXBlclR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnQgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICBqc29uID0gc3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBzaGltLFxuICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zZXF1ZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uc2VxdWVudCB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbnNlcXVlbnQgfSA9IHNoaW0sXG4gICAgICAgIGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudDsgIC8vL1xuXG4gIGpzb24gPSBjb25zZXF1ZW50SlNPTjsgIC8vL1xuXG4gIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29uc2VxdWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHVucXVhbGlmaWVkU3RhdGVtZW50IH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiA9IHVucXVhbGlmaWVkU3RhdGVtZW50OyAgLy8vXG5cbiAganNvbiA9IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tSlNPTihqc29uLCB0eXBlcywgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyB0eXBlczogdHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIHR5cGVzSlNPTi5mb3JFYWNoKCh0eXBlSlNPTikgPT4ge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcnVsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgcnVsZXNKU09OID0gcnVsZXM7IC8vL1xuICAgICAgICBydWxlcyA9IHJ1bGVzSlNPTi5tYXAoKHJ1bGVKU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBSdWxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGpzb24gPSBydWxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiAocnVsZSk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBzaGltLFxuICAgICAgICBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgYXhpb21zIH0gPSBqc29uO1xuXG4gIGNvbnN0IGF4aW9tc0pTT04gPSBheGlvbXM7IC8vL1xuICAgICAgICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBBeGlvbSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBqc29uID0gYXhpb21KU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gKGF4aW9tKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBzaGltLFxuICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLm1hcCgocHJlbWlzZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJlbWlzZUpTT04sIC8vL1xuICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zOyAvLy9cbiAgICAgICAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04ubWFwKCh0aGVvcmVtSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgVGhlb3JlbSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gKHRoZW9yZW0pO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG4gICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0pTT04ubWFwKCh2YXJpYWJsZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiAodmFyaWFibGUpO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb25qZWN0dXJlcyB9ID0ganNvbjtcblxuICBjb25zdCBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlczsgLy8vXG4gICAgICAgIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLm1hcCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IENvbmplY3R1cmUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIChjb25qZWN0dXJlKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb21iaW5hdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9yczsgLy8vXG4gICAgICAgIGNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNKU09OLm1hcCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIChjb21iaW5hdG9yKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uc3RydWN0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnM7IC8vL1xuICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLm1hcCgoY29uc3RydWN0b3JKU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zOyAvLy9cbiAgICAgICAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTi5tYXAoKG1ldGF0aGVvcmVtSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgTWV0YXRoZW9yZW0gfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAganNvbiA9IG1ldGF0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIChtZXRhdGhlb3JlbSk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdXBwb3NpdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gc2hpbSxcbiAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdWJzdGl0dXRpb25zID0gW10gfSA9IGpzb247ICAvLy9cblxuICBjb25zdCB7IFN1YnN0aXR1dGlvbiB9ID0gc2hpbSxcbiAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zOyAgLy8vXG5cbiAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gU3Vic3RpdHV0aW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzOyAvLy9cbiAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNKU09OLm1hcCgobWV0YXZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGpzb24gPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiAobWV0YXZhcmlhYmxlKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVRvVGVybUpTT04odGVybSkge1xuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgcmV0dXJuIHRlcm1KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVRvVHlwZUpTT04odHlwZSkge1xuICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIHR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVUb01ldGFUeXBlSlNPTihtZXRhVHlwZSkge1xuICBjb25zdCBtZXRhVHlwZUpTT04gPSAobWV0YVR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhVHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICByZXR1cm4gbWV0YVR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlVG9TdXBlclR5cGVKU09OKHN1cGVyVHlwZSkge1xuICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gIHJldHVybiBzdXBlclR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHN0YXRlbWVudCkge1xuICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50LnRvSlNPTigpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04oY29uY2x1c2lvbikge1xuICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04oY29uc2VxdWVudCkge1xuICBjb25zdCBjb25zZXF1ZW50SlNPTiA9IGNvbnNlcXVlbnQudG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbnNlcXVlbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTih1bnF1YWxpZmllZFN0YXRlbWVudCkge1xuICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudEpTT04gPSB1bnF1YWxpZmllZFN0YXRlbWVudC50b0pTT04oKTtcblxuICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNUb1R5cGVzSlNPTih0eXBlcykge1xuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc1RvUnVsZXNKU09OKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVzSlNPTiA9IHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04oY29uamVjdHVyZXMpIHtcbiAgY29uc3QgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTigpO1xuXG4gICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTihjb21iaW5hdG9ycykge1xuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKCk7XG5cbiAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04oc3VwcG9zaXRpb25zKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04oY29uc3RydWN0b3JzKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTigpO1xuXG4gICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04obWV0YXRoZW9yZW1zKSB7XG4gIGNvbnN0IG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXMubWFwKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLm1hcFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTihtZXRhdmFyaWFibGVzKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG4iXSwibmFtZXMiOlsiYXhpb21zRnJvbUpTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb25zZXF1ZW50RnJvbUpTT04iLCJjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwibGFiZWxzRnJvbUpTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsIm1ldGFUeXBlRnJvbUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJydWxlc0Zyb21KU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJzdXBlclR5cGVGcm9tSlNPTiIsInN1cGVyVHlwZVRvU3VwZXJUeXBlSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0aGVvcmVtc0Zyb21KU09OIiwidGhlb3JlbXNUb1RoZW9yZW1zSlNPTiIsInR5cGVGcm9tSlNPTiIsInR5cGVUb1R5cGVKU09OIiwidHlwZXNGcm9tSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTiIsInZhcmlhYmxlc0Zyb21KU09OIiwidmFyaWFibGVzVG9WYXJpYWJsZXNKU09OIiwianNvbiIsImZpbGVDb250ZXh0IiwidGVybSIsInRlcm1KU09OIiwiVGVybSIsInNoaW0iLCJmcm9tSlNPTiIsInR5cGUiLCJuYW1lIiwidHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJtZXRhVHlwZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlSlNPTiIsInN0YXRlbWVudCIsIlN0YXRlbWVudCIsInN0YXRlbWVudEpTT04iLCJjb25jbHVzaW9uIiwiQ29uY2x1c2lvbiIsImNvbmNsdXNpb25KU09OIiwiY29uc2VxdWVudCIsIkNvbnNlcXVlbnQiLCJjb25zZXF1ZW50SlNPTiIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudCIsIlVucXVhbGlmaWVkU3RhdGVtZW50IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIiwidHlwZXMiLCJ0eXBlc0pTT04iLCJmb3JFYWNoIiwidHlwZUpTT04iLCJUeXBlIiwicHVzaCIsInJ1bGVzIiwicnVsZXNKU09OIiwibWFwIiwicnVsZUpTT04iLCJSdWxlIiwicnVsZSIsImxhYmVscyIsIkxhYmVsIiwibGFiZWxzSlNPTiIsImxhYmVsSlNPTiIsImxhYmVsIiwiYXhpb21zIiwiYXhpb21zSlNPTiIsImF4aW9tSlNPTiIsIkF4aW9tIiwiYXhpb20iLCJwcmVtaXNlcyIsIlByZW1pc2UiLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlSlNPTiIsInByZW1pc2UiLCJ0aGVvcmVtcyIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1KU09OIiwiVGhlb3JlbSIsInRoZW9yZW0iLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZXNKU09OIiwidmFyaWFibGVKU09OIiwiVmFyaWFibGUiLCJ2YXJpYWJsZSIsImNvbmplY3R1cmVzIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZUpTT04iLCJDb25qZWN0dXJlIiwiY29uamVjdHVyZSIsImNvbWJpbmF0b3JzIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvckpTT04iLCJDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImNvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwibWV0YXRoZW9yZW1zIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtSlNPTiIsIk1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW0iLCJzdXBwb3NpdGlvbnMiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbkpTT04iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbkpTT04iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwibWFwU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFzS2dCQSxjQUFjO2VBQWRBOztJQTZRQUMsa0JBQWtCO2VBQWxCQTs7SUFqTUFDLG1CQUFtQjtlQUFuQkE7O0lBMlBBQyw0QkFBNEI7ZUFBNUJBOztJQXRhQUMsa0JBQWtCO2VBQWxCQTs7SUFrVEFDLDBCQUEwQjtlQUExQkE7O0lBdEpBQyxtQkFBbUI7ZUFBbkJBOztJQThQQUMsNEJBQTRCO2VBQTVCQTs7SUE3WUFDLGtCQUFrQjtlQUFsQkE7O0lBMlNBQywwQkFBMEI7ZUFBMUJBOztJQTlIQUMsb0JBQW9CO2VBQXBCQTs7SUFrUUFDLDhCQUE4QjtlQUE5QkE7O0lBN1dBQyxjQUFjO2VBQWRBOztJQW1SQUMsa0JBQWtCO2VBQWxCQTs7SUEzRkFDLGlCQUFpQjtlQUFqQkE7O0lBTUFDLHFCQUFxQjtlQUFyQkE7O0lBdlRBQyxnQkFBZ0I7ZUFBaEJBOztJQXlVQUMsc0JB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