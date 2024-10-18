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
function typesFromJSON(json, fileContext) {
    var types = json.types;
    var typesJSON = types; ///
    types = typesJSON.map(function(typeJSON) {
        var Type = _shim.default.Type, _$json = typeJSON, type = Type.fromJSON(_$json, fileContext);
        return type;
    });
    return types;
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
    var substitutions = json.substitutions;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0ZXJtIH0gPSBqc29uO1xuXG4gIGNvbnN0IHRlcm1KU09OID0gdGVybTsgIC8vL1xuXG4gIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gc2hpbTtcblxuICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBjb25zdCB7IG5hbWUgfSA9IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lID0gbmFtZTsgIC8vL1xuXG4gIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IG1ldGFUeXBlLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gZmlsZUNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN1cGVyVHlwZSB9ID0ganNvbjtcblxuICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlOyAgLy8vXG5cbiAganNvbiA9IHN1cGVyVHlwZUpTT047IC8vL1xuXG4gIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIHN1cGVyVHlwZSA9IHR5cGU7IC8vL1xuXG4gIHJldHVybiBzdXBlclR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnQgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICBqc29uID0gc3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBzaGltLFxuICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zZXF1ZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uc2VxdWVudCB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbnNlcXVlbnQgfSA9IHNoaW0sXG4gICAgICAgIGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudDsgIC8vL1xuXG4gIGpzb24gPSBjb25zZXF1ZW50SlNPTjsgIC8vL1xuXG4gIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29uc2VxdWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHVucXVhbGlmaWVkU3RhdGVtZW50IH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiA9IHVucXVhbGlmaWVkU3RhdGVtZW50OyAgLy8vXG5cbiAganNvbiA9IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0eXBlcyB9ID0ganNvbjtcblxuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlczsgLy8vXG4gICAgICAgIHR5cGVzID0gdHlwZXNKU09OLm1hcCgodHlwZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IFR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAganNvbiA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuICh0eXBlKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBydWxlcyB9ID0ganNvbjtcblxuICBjb25zdCBydWxlc0pTT04gPSBydWxlczsgLy8vXG4gICAgICAgIHJ1bGVzID0gcnVsZXNKU09OLm1hcCgocnVsZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IFJ1bGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAganNvbiA9IHJ1bGVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIChydWxlKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IHNoaW0sXG4gICAgICAgIGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBheGlvbXMgfSA9IGpzb247XG5cbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tczsgLy8vXG4gICAgICAgIGF4aW9tcyA9IGF4aW9tc0pTT04ubWFwKChheGlvbUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IEF4aW9tIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGpzb24gPSBheGlvbUpTT04sICAvLy9cbiAgICAgICAgICAgICAgICBheGlvbSA9IEF4aW9tLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiAoYXhpb20pO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXhpb21zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByZW1pc2UgfSA9IHNoaW0sXG4gICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzOyAgLy8vXG5cbiAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcmVtaXNlSlNPTiwgLy8vXG4gICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuICAgICAgICB0aGVvcmVtcyA9IHRoZW9yZW1zSlNPTi5tYXAoKHRoZW9yZW1KU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBUaGVvcmVtIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIHRoZW9yZW0gPSBUaGVvcmVtLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiAodGhlb3JlbSk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzOyAvLy9cbiAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuICh2YXJpYWJsZSk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbmplY3R1cmVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzOyAvLy9cbiAgICAgICAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04ubWFwKChjb25qZWN0dXJlSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBqc29uID0gY29uamVjdHVyZUpTT04sICAvLy9cbiAgICAgICAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gKGNvbmplY3R1cmUpO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbWJpbmF0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzOyAvLy9cbiAgICAgICAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04ubWFwKChjb21iaW5hdG9ySlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBqc29uID0gY29tYmluYXRvckpTT04sICAvLy9cbiAgICAgICAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gKGNvbWJpbmF0b3IpO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb25zdHJ1Y3RvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9yczsgLy8vXG4gICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04ubWFwKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGpzb24gPSBjb25zdHJ1Y3RvckpTT04sICAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiAoY29uc3RydWN0b3IpO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXM7IC8vL1xuICAgICAgICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLm1hcCgobWV0YXRoZW9yZW1KU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBNZXRhdGhlb3JlbSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBqc29uID0gbWV0YXRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXRoZW9yZW0gPSBNZXRhdGhlb3JlbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gKG1ldGF0aGVvcmVtKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN1cHBvc2l0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBzaGltLFxuICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTi5tYXAoKHN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN1YnN0aXR1dGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdWJzdGl0dXRpb24gfSA9IHNoaW0sXG4gICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uczsgIC8vL1xuXG4gIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3Vic3RpdHV0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IFN1YnN0aXR1dGlvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlczsgLy8vXG4gICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTi5tYXAoKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gKG1ldGF2YXJpYWJsZSk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBsZW1tYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhTGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IG1ldGFMZW1tYXMgPVtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVRvVGVybUpTT04odGVybSkge1xuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgcmV0dXJuIHRlcm1KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVRvVHlwZUpTT04odHlwZSkge1xuICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIHR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVUb01ldGFUeXBlSlNPTihtZXRhVHlwZSkge1xuICBjb25zdCBtZXRhVHlwZUpTT04gPSAobWV0YVR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhVHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICByZXR1cm4gbWV0YVR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlVG9TdXBlclR5cGVKU09OKHN1cGVyVHlwZSkge1xuICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gIHJldHVybiBzdXBlclR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHN0YXRlbWVudCkge1xuICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50LnRvSlNPTigpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04oY29uY2x1c2lvbikge1xuICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04oY29uc2VxdWVudCkge1xuICBjb25zdCBjb25zZXF1ZW50SlNPTiA9IGNvbnNlcXVlbnQudG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbnNlcXVlbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTih1bnF1YWxpZmllZFN0YXRlbWVudCkge1xuICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudEpTT04gPSB1bnF1YWxpZmllZFN0YXRlbWVudC50b0pTT04oKTtcblxuICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNUb1R5cGVzSlNPTih0eXBlcykge1xuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc1RvUnVsZXNKU09OKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVzSlNPTiA9IHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04oY29uamVjdHVyZXMpIHtcbiAgY29uc3QgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTigpO1xuXG4gICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTihjb21iaW5hdG9ycykge1xuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKCk7XG5cbiAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04oc3VwcG9zaXRpb25zKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04oY29uc3RydWN0b3JzKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTigpO1xuXG4gICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04obWV0YXRoZW9yZW1zKSB7XG4gIGNvbnN0IG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXMubWFwKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLm1hcFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTihtZXRhdmFyaWFibGVzKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG4iXSwibmFtZXMiOlsiYXhpb21zRnJvbUpTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb25zZXF1ZW50RnJvbUpTT04iLCJjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwibGFiZWxzRnJvbUpTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsIm1ldGFUeXBlRnJvbUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJydWxlc0Zyb21KU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJzdXBlclR5cGVGcm9tSlNPTiIsInN1cGVyVHlwZVRvU3VwZXJUeXBlSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0aGVvcmVtc0Zyb21KU09OIiwidGhlb3JlbXNUb1RoZW9yZW1zSlNPTiIsInR5cGVGcm9tSlNPTiIsInR5cGVUb1R5cGVKU09OIiwidHlwZXNGcm9tSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTiIsInZhcmlhYmxlc0Zyb21KU09OIiwidmFyaWFibGVzVG9WYXJpYWJsZXNKU09OIiwianNvbiIsImZpbGVDb250ZXh0IiwidGVybSIsInRlcm1KU09OIiwiVGVybSIsInNoaW0iLCJmcm9tSlNPTiIsInR5cGUiLCJuYW1lIiwidHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJtZXRhVHlwZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlSlNPTiIsInN0YXRlbWVudCIsIlN0YXRlbWVudCIsInN0YXRlbWVudEpTT04iLCJjb25jbHVzaW9uIiwiQ29uY2x1c2lvbiIsImNvbmNsdXNpb25KU09OIiwiY29uc2VxdWVudCIsIkNvbnNlcXVlbnQiLCJjb25zZXF1ZW50SlNPTiIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudCIsIlVucXVhbGlmaWVkU3RhdGVtZW50IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIiwidHlwZXMiLCJ0eXBlc0pTT04iLCJtYXAiLCJ0eXBlSlNPTiIsIlR5cGUiLCJydWxlcyIsInJ1bGVzSlNPTiIsInJ1bGVKU09OIiwiUnVsZSIsInJ1bGUiLCJsYWJlbHMiLCJMYWJlbCIsImxhYmVsc0pTT04iLCJsYWJlbEpTT04iLCJsYWJlbCIsImF4aW9tcyIsImF4aW9tc0pTT04iLCJheGlvbUpTT04iLCJBeGlvbSIsImF4aW9tIiwicHJlbWlzZXMiLCJQcmVtaXNlIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZUpTT04iLCJwcmVtaXNlIiwidGhlb3JlbXMiLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtSlNPTiIsIlRoZW9yZW0iLCJ0aGVvcmVtIiwidmFyaWFibGVzIiwidmFyaWFibGVzSlNPTiIsInZhcmlhYmxlSlNPTiIsIlZhcmlhYmxlIiwidmFyaWFibGUiLCJjb25qZWN0dXJlcyIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVKU09OIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmUiLCJjb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JKU09OIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJjb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JKU09OIiwiQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsIm1ldGF0aGVvcmVtcyIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdGhlb3JlbUpTT04iLCJNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtIiwic3VwcG9zaXRpb25zIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25KU09OIiwic3VwcG9zaXRpb24iLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25KU09OIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXNKU09OIiwibGVtbWFzIiwibWV0YUxlbW1hcyIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1hcFN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBeUtnQkEsY0FBYztlQUFkQTs7SUE2UUFDLGtCQUFrQjtlQUFsQkE7O0lBak1BQyxtQkFBbUI7ZUFBbkJBOztJQTJQQUMsNEJBQTRCO2VBQTVCQTs7SUF6YUFDLGtCQUFrQjtlQUFsQkE7O0lBcVRBQywwQkFBMEI7ZUFBMUJBOztJQXRKQUMsbUJBQW1CO2VBQW5CQTs7SUE4UEFDLDRCQUE0QjtlQUE1QkE7O0lBaFpBQyxrQkFBa0I7ZUFBbEJBOztJQThTQUMsMEJBQTBCO2VBQTFCQTs7SUE5SEFDLG9CQUFvQjtlQUFwQkE7O0lBa1FBQyw4QkFBOEI7ZUFBOUJBOztJQTdXQUMsY0FBYztlQUFkQTs7SUFtUkFDLGtCQUFrQjtlQUFsQkE7O0lBM0ZBQyxpQkFBaUI7ZUFBakJBOztJQU1BQyxxQkFBcUI7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