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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0ZXJtIH0gPSBqc29uO1xuXG4gIGNvbnN0IHRlcm1KU09OID0gdGVybTsgIC8vL1xuXG4gIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gc2hpbTtcblxuICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBjb25zdCB7IG5hbWUgfSA9IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lID0gbmFtZTsgIC8vL1xuXG4gIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IG1ldGFUeXBlLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gZmlsZUNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN1cGVyVHlwZSB9ID0ganNvbjtcblxuICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlOyAgLy8vXG5cbiAganNvbiA9IHN1cGVyVHlwZUpTT047IC8vL1xuXG4gIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIHN1cGVyVHlwZSA9IHR5cGU7IC8vL1xuXG4gIHJldHVybiBzdXBlclR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnQgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICBqc29uID0gc3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBzaGltLFxuICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zZXF1ZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uc2VxdWVudCB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbnNlcXVlbnQgfSA9IHNoaW0sXG4gICAgICAgIGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudDsgIC8vL1xuXG4gIGpzb24gPSBjb25zZXF1ZW50SlNPTjsgIC8vL1xuXG4gIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29uc2VxdWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHVucXVhbGlmaWVkU3RhdGVtZW50IH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiA9IHVucXVhbGlmaWVkU3RhdGVtZW50OyAgLy8vXG5cbiAganNvbiA9IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0eXBlcyB9ID0ganNvbjtcblxuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlczsgLy8vXG4gICAgICAgIHR5cGVzID0gdHlwZXNKU09OLm1hcCgodHlwZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IFR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAganNvbiA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuICh0eXBlKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBydWxlcyB9ID0ganNvbjtcblxuICBjb25zdCBydWxlc0pTT04gPSBydWxlczsgLy8vXG4gICAgICAgIHJ1bGVzID0gcnVsZXNKU09OLm1hcCgocnVsZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IFJ1bGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAganNvbiA9IHJ1bGVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIChydWxlKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IHNoaW0sXG4gICAgICAgIGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBheGlvbXMgfSA9IGpzb247XG5cbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tczsgLy8vXG4gICAgICAgIGF4aW9tcyA9IGF4aW9tc0pTT04ubWFwKChheGlvbUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IEF4aW9tIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGpzb24gPSBheGlvbUpTT04sICAvLy9cbiAgICAgICAgICAgICAgICBheGlvbSA9IEF4aW9tLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiAoYXhpb20pO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXhpb21zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByZW1pc2UgfSA9IHNoaW0sXG4gICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzOyAgLy8vXG5cbiAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcmVtaXNlSlNPTiwgLy8vXG4gICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuICAgICAgICB0aGVvcmVtcyA9IHRoZW9yZW1zSlNPTi5tYXAoKHRoZW9yZW1KU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBUaGVvcmVtIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIHRoZW9yZW0gPSBUaGVvcmVtLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiAodGhlb3JlbSk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzOyAvLy9cbiAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuICh2YXJpYWJsZSk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbmplY3R1cmVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzOyAvLy9cbiAgICAgICAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04ubWFwKChjb25qZWN0dXJlSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBqc29uID0gY29uamVjdHVyZUpTT04sICAvLy9cbiAgICAgICAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gKGNvbmplY3R1cmUpO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbWJpbmF0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzOyAvLy9cbiAgICAgICAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04ubWFwKChjb21iaW5hdG9ySlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBqc29uID0gY29tYmluYXRvckpTT04sICAvLy9cbiAgICAgICAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gKGNvbWJpbmF0b3IpO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb25zdHJ1Y3RvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9yczsgLy8vXG4gICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04ubWFwKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGpzb24gPSBjb25zdHJ1Y3RvckpTT04sICAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiAoY29uc3RydWN0b3IpO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXM7IC8vL1xuICAgICAgICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLm1hcCgobWV0YXRoZW9yZW1KU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBNZXRhdGhlb3JlbSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBqc29uID0gbWV0YXRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXRoZW9yZW0gPSBNZXRhdGhlb3JlbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gKG1ldGF0aGVvcmVtKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN1cHBvc2l0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBzaGltLFxuICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTi5tYXAoKHN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN1YnN0aXR1dGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdWJzdGl0dXRpb24gfSA9IHNoaW0sXG4gICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uczsgIC8vL1xuXG4gIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3Vic3RpdHV0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IFN1YnN0aXR1dGlvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlczsgLy8vXG4gICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTi5tYXAoKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gKG1ldGF2YXJpYWJsZSk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVRvVGVybUpTT04odGVybSkge1xuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgcmV0dXJuIHRlcm1KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVRvVHlwZUpTT04odHlwZSkge1xuICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIHR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVUb01ldGFUeXBlSlNPTihtZXRhVHlwZSkge1xuICBjb25zdCBtZXRhVHlwZUpTT04gPSAobWV0YVR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhVHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICByZXR1cm4gbWV0YVR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlVG9TdXBlclR5cGVKU09OKHN1cGVyVHlwZSkge1xuICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gIHJldHVybiBzdXBlclR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHN0YXRlbWVudCkge1xuICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50LnRvSlNPTigpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04oY29uY2x1c2lvbikge1xuICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04oY29uc2VxdWVudCkge1xuICBjb25zdCBjb25zZXF1ZW50SlNPTiA9IGNvbnNlcXVlbnQudG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbnNlcXVlbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTih1bnF1YWxpZmllZFN0YXRlbWVudCkge1xuICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudEpTT04gPSB1bnF1YWxpZmllZFN0YXRlbWVudC50b0pTT04oKTtcblxuICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNUb1R5cGVzSlNPTih0eXBlcykge1xuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc1RvUnVsZXNKU09OKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVzSlNPTiA9IHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04oY29uamVjdHVyZXMpIHtcbiAgY29uc3QgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTigpO1xuXG4gICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTihjb21iaW5hdG9ycykge1xuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKCk7XG5cbiAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04oc3VwcG9zaXRpb25zKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04oY29uc3RydWN0b3JzKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTigpO1xuXG4gICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04obWV0YXRoZW9yZW1zKSB7XG4gIGNvbnN0IG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXMubWFwKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLm1hcFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTihtZXRhdmFyaWFibGVzKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG4iXSwibmFtZXMiOlsiYXhpb21zRnJvbUpTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb25zZXF1ZW50RnJvbUpTT04iLCJjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwibGFiZWxzRnJvbUpTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJtZXRhVHlwZUZyb21KU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwicnVsZXNGcm9tSlNPTiIsInJ1bGVzVG9SdWxlc0pTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwic3VwZXJUeXBlRnJvbUpTT04iLCJzdXBlclR5cGVUb1N1cGVyVHlwZUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInRlcm1Gcm9tSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwidGhlb3JlbXNGcm9tSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ0eXBlRnJvbUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInR5cGVzRnJvbUpTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9VbnF1YWxpZmllZFN0YXRlbWVudEpTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImpzb24iLCJmaWxlQ29udGV4dCIsInRlcm0iLCJ0ZXJtSlNPTiIsIlRlcm0iLCJzaGltIiwiZnJvbUpTT04iLCJ0eXBlIiwibmFtZSIsInR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwibWV0YVR5cGUiLCJtZXRhVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZUpTT04iLCJzdGF0ZW1lbnQiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRKU09OIiwiY29uY2x1c2lvbiIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uSlNPTiIsImNvbnNlcXVlbnQiLCJDb25zZXF1ZW50IiwiY29uc2VxdWVudEpTT04iLCJtZXRhdmFyaWFibGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVKU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJVbnF1YWxpZmllZFN0YXRlbWVudCIsInVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiIsInR5cGVzIiwidHlwZXNKU09OIiwibWFwIiwidHlwZUpTT04iLCJUeXBlIiwicnVsZXMiLCJydWxlc0pTT04iLCJydWxlSlNPTiIsIlJ1bGUiLCJydWxlIiwibGFiZWxzIiwiTGFiZWwiLCJsYWJlbHNKU09OIiwibGFiZWxKU09OIiwibGFiZWwiLCJheGlvbXMiLCJheGlvbXNKU09OIiwiYXhpb21KU09OIiwiQXhpb20iLCJheGlvbSIsInByZW1pc2VzIiwiUHJlbWlzZSIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwicHJlbWlzZSIsInRoZW9yZW1zIiwidGhlb3JlbXNKU09OIiwidGhlb3JlbUpTT04iLCJUaGVvcmVtIiwidGhlb3JlbSIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZUpTT04iLCJWYXJpYWJsZSIsInZhcmlhYmxlIiwiY29uamVjdHVyZXMiLCJjb25qZWN0dXJlc0pTT04iLCJjb25qZWN0dXJlSlNPTiIsIkNvbmplY3R1cmUiLCJjb25qZWN0dXJlIiwiY29tYmluYXRvcnMiLCJjb21iaW5hdG9yc0pTT04iLCJjb21iaW5hdG9ySlNPTiIsIkNvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiY29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJtZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1KU09OIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbSIsInN1cHBvc2l0aW9ucyIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uSlNPTiIsInN1cHBvc2l0aW9uIiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uSlNPTiIsInN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzSlNPTiIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1hcFN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBeUtnQkEsY0FBYztlQUFkQTs7SUFpUUFDLGtCQUFrQjtlQUFsQkE7O0lBckxBQyxtQkFBbUI7ZUFBbkJBOztJQStPQUMsNEJBQTRCO2VBQTVCQTs7SUE3WkFDLGtCQUFrQjtlQUFsQkE7O0lBeVNBQywwQkFBMEI7ZUFBMUJBOztJQTFJQUMsbUJBQW1CO2VBQW5CQTs7SUFrUEFDLDRCQUE0QjtlQUE1QkE7O0lBcFlBQyxrQkFBa0I7ZUFBbEJBOztJQWtTQUMsMEJBQTBCO2VBQTFCQTs7SUFsSEFDLG9CQUFvQjtlQUFwQkE7O0lBc1BBQyw4QkFBOEI7ZUFBOUJBOztJQWpXQUMsY0FBYztlQUFkQTs7SUF1UUFDLGtCQUFrQjtlQUFsQkE7O0lBbllBQyxnQkFBZ0I7ZUFBaEJBOztJQWdVQUMsc0JBQXNCO2VBQXRCQTs7SUExRUFDLG9CQUFvQjtlQUFwQkE7O0lBbVBBQyw4QkFBOEI7ZUFBOUJBOztJQXJhQUMsb0JBQW9CO2VBQXBCQTs7SUEyUkFDLDhCQUE4QjtlQUE5QkE7O0lBMURBQyxxQkFBcUI7ZUFBckJBOztJQTBOQUMsZ0NBQWdDO2VBQWhDQTs7SUFwV0FDLGdCQUFnQjtlQUFoQkE7O0lBOFBBQyxzQkFBc0I7ZUFBdEJBOztJQTVTQUMsYUFBYTtlQUFiQTs7SUEwUUFDLGdCQUFnQjtlQUFoQkE7O0lBMVZBQyxpQkFBaUI7ZUFBakJBOztJ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