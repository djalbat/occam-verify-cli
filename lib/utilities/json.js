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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0ZXJtIH0gPSBqc29uO1xuXG4gIGNvbnN0IHRlcm1KU09OID0gdGVybTsgIC8vL1xuXG4gIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gc2hpbTtcblxuICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBjb25zdCB7IG5hbWUgfSA9IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lID0gbmFtZTsgIC8vL1xuXG4gIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IG1ldGFUeXBlLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gZmlsZUNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN1cGVyVHlwZSB9ID0ganNvbjtcblxuICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlOyAgLy8vXG5cbiAganNvbiA9IHN1cGVyVHlwZUpTT047IC8vL1xuXG4gIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIHN1cGVyVHlwZSA9IHR5cGU7IC8vL1xuXG4gIHJldHVybiBzdXBlclR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnQgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICBqc29uID0gc3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBzaGltLFxuICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zZXF1ZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uc2VxdWVudCB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbnNlcXVlbnQgfSA9IHNoaW0sXG4gICAgICAgIGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudDsgIC8vL1xuXG4gIGpzb24gPSBjb25zZXF1ZW50SlNPTjsgIC8vL1xuXG4gIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29uc2VxdWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHVucXVhbGlmaWVkU3RhdGVtZW50IH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiA9IHVucXVhbGlmaWVkU3RhdGVtZW50OyAgLy8vXG5cbiAganNvbiA9IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tSlNPTihqc29uLCB0eXBlcywgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyB0eXBlczogdHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIHR5cGVzSlNPTi5mb3JFYWNoKCh0eXBlSlNPTikgPT4ge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcnVsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgcnVsZXNKU09OID0gcnVsZXM7IC8vL1xuICAgICAgICBydWxlcyA9IHJ1bGVzSlNPTi5tYXAoKHJ1bGVKU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBSdWxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGpzb24gPSBydWxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiAocnVsZSk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBzaGltLFxuICAgICAgICBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgYXhpb21zIH0gPSBqc29uO1xuXG4gIGNvbnN0IGF4aW9tc0pTT04gPSBheGlvbXM7IC8vL1xuICAgICAgICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBBeGlvbSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBqc29uID0gYXhpb21KU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gKGF4aW9tKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBzaGltLFxuICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLm1hcCgocHJlbWlzZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJlbWlzZUpTT04sIC8vL1xuICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zOyAvLy9cbiAgICAgICAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04ubWFwKCh0aGVvcmVtSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgVGhlb3JlbSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gKHRoZW9yZW0pO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG4gICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0pTT04ubWFwKCh2YXJpYWJsZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiAodmFyaWFibGUpO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb25qZWN0dXJlcyB9ID0ganNvbjtcblxuICBjb25zdCBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlczsgLy8vXG4gICAgICAgIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLm1hcCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IENvbmplY3R1cmUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIChjb25qZWN0dXJlKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb21iaW5hdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9yczsgLy8vXG4gICAgICAgIGNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNKU09OLm1hcCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIChjb21iaW5hdG9yKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uc3RydWN0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnM7IC8vL1xuICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLm1hcCgoY29uc3RydWN0b3JKU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zOyAvLy9cbiAgICAgICAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTi5tYXAoKG1ldGF0aGVvcmVtSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgTWV0YXRoZW9yZW0gfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAganNvbiA9IG1ldGF0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIChtZXRhdGhlb3JlbSk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdXBwb3NpdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gc2hpbSxcbiAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdWJzdGl0dXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3Vic3RpdHV0aW9uIH0gPSBzaGltLFxuICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnM7ICAvLy9cblxuICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04ubWFwKChzdWJzdGl0dXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBTdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXM7IC8vL1xuICAgICAgICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT04ubWFwKChtZXRhdmFyaWFibGVKU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAganNvbiA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIChtZXRhdmFyaWFibGUpO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICByZXR1cm4gbGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgcmV0dXJuIG1ldGFMZW1tYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtVG9UZXJtSlNPTih0ZXJtKSB7XG4gIGNvbnN0IHRlcm1KU09OID0gdGVybS50b0pTT04oKTtcblxuICByZXR1cm4gdGVybUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlVG9UeXBlSlNPTih0eXBlKSB7XG4gIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04oKTtcblxuICByZXR1cm4gdHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKG1ldGFUeXBlKSB7XG4gIGNvbnN0IG1ldGFUeXBlSlNPTiA9IChtZXRhVHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFUeXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG4gIHJldHVybiBtZXRhVHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVUb1N1cGVyVHlwZUpTT04oc3VwZXJUeXBlKSB7XG4gIGNvbnN0IHN1cGVyVHlwZUpTT04gPSBzdXBlclR5cGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04oc3RhdGVtZW50KSB7XG4gIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQudG9KU09OKCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTihjb25jbHVzaW9uKSB7XG4gIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbi50b0pTT04oKTtcblxuICByZXR1cm4gY29uY2x1c2lvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTihjb25zZXF1ZW50KSB7XG4gIGNvbnN0IGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudC50b0pTT04oKTtcblxuICByZXR1cm4gY29uc2VxdWVudEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04obWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OKHVucXVhbGlmaWVkU3RhdGVtZW50KSB7XG4gIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiA9IHVucXVhbGlmaWVkU3RhdGVtZW50LnRvSlNPTigpO1xuXG4gIHJldHVybiB1bnF1YWxpZmllZFN0YXRlbWVudEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc1RvVHlwZXNKU09OKHR5cGVzKSB7XG4gIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04oKTtcblxuICAgIHR5cGUgPSB0eXBlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzVG9SdWxlc0pTT04ocnVsZXMpIHtcbiAgY29uc3QgcnVsZXNKU09OID0gcnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTigpO1xuXG4gICAgcnVsZSA9IHJ1bGVKU09OOyAvLy9cblxuICAgIHJldHVybiBydWxlO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9MYWJlbHNKU09OKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgIHJldHVybiBsYWJlbEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zVG9BeGlvbXNKU09OKGF4aW9tcykge1xuICBjb25zdCBheGlvbXNKU09OID0gYXhpb21zLm1hcCgoYXhpb20pID0+IHtcbiAgICBjb25zdCBheGlvbUpTT04gPSBheGlvbS50b0pTT04oKTtcblxuICAgIGF4aW9tID0gYXhpb21KU09OOyAvLy9cblxuICAgIHJldHVybiBheGlvbTtcbiAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHByZW1pc2VzKSB7XG4gIGNvbnN0IHByZW1pc2VzSlNPTiA9IHByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS50b0pTT04oKTtcblxuICAgIHJldHVybiBwcmVtaXNlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1zVG9UaGVvcmVtc0pTT04odGhlb3JlbXMpIHtcbiAgY29uc3QgdGhlb3JlbXNKU09OID0gdGhlb3JlbXMubWFwKCh0aGVvcmVtKSA9PiB7XG4gICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgdGhlb3JlbSA9IHRoZW9yZW1KU09OOyAvLy9cblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OKHZhcmlhYmxlcykge1xuICBjb25zdCB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzLm1hcCgodmFyaWFibGUpID0+IHtcbiAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04oKTtcblxuICAgIHZhcmlhYmxlID0gdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTihjb25qZWN0dXJlcykge1xuICBjb25zdCBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICBjb25zdCBjb25qZWN0dXJlSlNPTiA9IGNvbmplY3R1cmUudG9KU09OKCk7XG5cbiAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OKGNvbWJpbmF0b3JzKSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JKU09OID0gY29tYmluYXRvci50b0pTT04oKTtcblxuICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9ySlNPTjsgLy8vXG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTihzdXBwb3NpdGlvbnMpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25KU09OID0gc3VwcG9zaXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTihjb25zdHJ1Y3RvcnMpIHtcbiAgY29uc3QgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9ycy5tYXAoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgY29uc3QgY29uc3RydWN0b3JKU09OID0gY29uc3RydWN0b3IudG9KU09OKCk7XG5cbiAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9ySlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTihtZXRhdGhlb3JlbXMpIHtcbiAgY29uc3QgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtcy5tYXAoKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1KU09OID0gbWV0YXRoZW9yZW0udG9KU09OKCk7XG5cbiAgICBtZXRhdGhlb3JlbSA9IG1ldGF0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04oc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnMubWFwU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25KU09OID0gc3Vic3RpdHV0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKG1ldGF2YXJpYWJsZXMpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzLm1hcCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04oKTtcblxuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT047ICAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzSlNPTjtcbn1cbiJdLCJuYW1lcyI6WyJheGlvbXNGcm9tSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbnNlcXVlbnRGcm9tSlNPTiIsImNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OIiwiY29uc3RydWN0b3JzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04iLCJsYWJlbHNGcm9tSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImxlbW1hc0Zyb21Ob3RoaW5nIiwibWV0YUxlbW1hc0Zyb21Ob3RoaW5nIiwibWV0YVR5cGVGcm9tSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJtZXRhdGhlb3JlbXNGcm9tSlNPTiIsIm1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwibWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04iLCJwcmVtaXNlc0Zyb21KU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJydWxlc1RvUnVsZXNKU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiIsInN1cGVyVHlwZUZyb21KU09OIiwic3VwZXJUeXBlVG9TdXBlclR5cGVKU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJ0ZXJtRnJvbUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidHlwZUZyb21KU09OIiwidHlwZVRvVHlwZUpTT04iLCJ0eXBlc0Zyb21KU09OIiwidHlwZXNUb1R5cGVzSlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50RnJvbUpTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJqc29uIiwiZmlsZUNvbnRleHQiLCJ0ZXJtIiwidGVybUpTT04iLCJUZXJtIiwic2hpbSIsImZyb21KU09OIiwidHlwZSIsIm5hbWUiLCJ0eXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVKU09OIiwic3RhdGVtZW50IiwiU3RhdGVtZW50Iiwic3RhdGVtZW50SlNPTiIsImNvbmNsdXNpb24iLCJDb25jbHVzaW9uIiwiY29uY2x1c2lvbkpTT04iLCJjb25zZXF1ZW50IiwiQ29uc2VxdWVudCIsImNvbnNlcXVlbnRKU09OIiwibWV0YXZhcmlhYmxlIiwiTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlSlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50IiwiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudEpTT04iLCJ0eXBlcyIsInR5cGVzSlNPTiIsImZvckVhY2giLCJ0eXBlSlNPTiIsIlR5cGUiLCJwdXNoIiwicnVsZXMiLCJydWxlc0pTT04iLCJtYXAiLCJydWxlSlNPTiIsIlJ1bGUiLCJydWxlIiwibGFiZWxzIiwiTGFiZWwiLCJsYWJlbHNKU09OIiwibGFiZWxKU09OIiwibGFiZWwiLCJheGlvbXMiLCJheGlvbXNKU09OIiwiYXhpb21KU09OIiwiQXhpb20iLCJheGlvbSIsInByZW1pc2VzIiwiUHJlbWlzZSIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwicHJlbWlzZSIsInRoZW9yZW1zIiwidGhlb3JlbXNKU09OIiwidGhlb3JlbUpTT04iLCJUaGVvcmVtIiwidGhlb3JlbSIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZUpTT04iLCJWYXJpYWJsZSIsInZhcmlhYmxlIiwiY29uamVjdHVyZXMiLCJjb25qZWN0dXJlc0pTT04iLCJjb25qZWN0dXJlSlNPTiIsIkNvbmplY3R1cmUiLCJjb25qZWN0dXJlIiwiY29tYmluYXRvcnMiLCJjb21iaW5hdG9yc0pTT04iLCJjb21iaW5hdG9ySlNPTiIsIkNvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiY29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJtZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1KU09OIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbSIsInN1cHBvc2l0aW9ucyIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uSlNPTiIsInN1cHBvc2l0aW9uIiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uSlNPTiIsInN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzSlNPTiIsImxlbW1hcyIsIm1ldGFMZW1tYXMiLCJ0b0pTT04iLCJtZXRhVHlwZUpTT04iLCJtYXBTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXNLZ0JBLGNBQWM7ZUFBZEE7O0lBNlFBQyxrQkFBa0I7ZUFBbEJBOztJQWpNQUMsbUJBQW1CO2VBQW5CQTs7SUEyUEFDLDRCQUE0QjtlQUE1QkE7O0lBdGFBQyxrQkFBa0I7ZUFBbEJBOztJQWtUQUMsMEJBQTBCO2VBQTFCQTs7SUF0SkFDLG1CQUFtQjtlQUFuQkE7O0lBOFBBQyw0QkFBNEI7ZUFBNUJBOztJQTdZQUMsa0JBQWtCO2VBQWxCQTs7SUEyU0FDLDBCQUEwQjtlQUExQkE7O0lBOUhBQyxvQkFBb0I7ZUFBcEJBOztJQWtRQUMsOEJBQThCO2VBQTlCQTs7SUE3V0FDLGNBQWM7ZUFBZEE7O0lBbVJBQyxrQkFBa0I7ZUFBbEJBOztJQTNGQUMsaUJBQWlCO2VBQWpCQTs7SUFNQUMscUJBQXFCO2VBQXJCQTs7SUF2VEFDLGdCQUFnQjtlQUFoQkE7O0lBeVVBQyxzQkFBc0I7ZUFBdEJB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