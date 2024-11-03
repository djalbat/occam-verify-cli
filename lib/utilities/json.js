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
    var statement = json.statement;
    var Statement = _dom.default.Statement, statementJSON = statement; ///
    json = statementJSON; ///
    statement = Statement.fromJSON(json, fileContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IFN0YXRlbWVudFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgY29uc3QgdGVybUpTT04gPSB0ZXJtOyAgLy8vXG5cbiAganNvbiA9IHRlcm1KU09OOyAgLy8vXG5cbiAgY29uc3QgeyBUZXJtIH0gPSBkb207XG5cbiAgdGVybSA9IFRlcm0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHR5cGUsXG4gICAgICAgICAgdHlwZU5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IG1ldGFUeXBlLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gZmlsZUNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN1cGVyVHlwZSB9ID0ganNvbjtcblxuICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlOyAgLy8vXG5cbiAganNvbiA9IHN1cGVyVHlwZUpTT047IC8vL1xuXG4gIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIHN1cGVyVHlwZSA9IHR5cGU7IC8vL1xuXG4gIHJldHVybiBzdXBlclR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnQgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudDsgIC8vL1xuXG4gIGpzb24gPSBzdGF0ZW1lbnRKU09OOyAvLy9cblxuICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGRvbSxcbiAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc2VxdWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbnNlcXVlbnQgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25zZXF1ZW50IH0gPSBkb20sXG4gICAgICAgIGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudDsgIC8vL1xuXG4gIGpzb24gPSBjb25zZXF1ZW50SlNPTjsgIC8vL1xuXG4gIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29uc2VxdWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlOyAgLy8vXG5cbiAganNvbiA9IG1ldGF2YXJpYWJsZUpTT047IC8vL1xuXG4gIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzRnJvbUpTT04oanNvbiwgdHlwZXMsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgdHlwZXM6IHR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGUgfSA9IGRvbTtcblxuICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcnVsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSdWxlIH0gPSBkb20sXG4gICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzOyAvLy9cblxuICBydWxlcyA9IHJ1bGVzSlNPTi5tYXAoKHJ1bGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHJ1bGVKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIChydWxlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IGRvbSxcbiAgICAgICAgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGF4aW9tcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEF4aW9tIH0gPSBkb20sXG4gICAgICAgIGF4aW9tc0pTT04gPSBheGlvbXM7IC8vL1xuXG4gIGF4aW9tcyA9IGF4aW9tc0pTT04ubWFwKChheGlvbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXhpb21KU09OLCAgLy8vXG4gICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKGF4aW9tKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBkb20sXG4gICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzOyAgLy8vXG5cbiAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcmVtaXNlSlNPTiwgLy8vXG4gICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUaGVvcmVtIH0gPSBkb20sXG4gICAgICAgIHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zOyAvLy9cblxuICB0aGVvcmVtcyA9IHRoZW9yZW1zSlNPTi5tYXAoKHRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuICh0aGVvcmVtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiAodmFyaWFibGUpO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBjb25qZWN0dXJlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IGRvbSxcbiAgICAgICAgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXM7IC8vL1xuXG4gIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLm1hcCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uamVjdHVyZUpTT04sICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKGNvbmplY3R1cmUpO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IGNvbWJpbmF0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzOyAvLy9cblxuICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTi5tYXAoKGNvbWJpbmF0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIChjb21iaW5hdG9yKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgY29uc3RydWN0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnM7IC8vL1xuXG4gIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04ubWFwKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKGNvbnN0cnVjdG9yKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF0aGVvcmVtIH0gPSBkb20sXG4gICAgICAgIG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXM7IC8vL1xuXG4gIG1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtc0pTT04ubWFwKChtZXRhdGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBNZXRhdGhlb3JlbS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKG1ldGF0aGVvcmVtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IHN1cHBvc2l0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBkb20sXG4gICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3Vic3RpdHV0aW9ucyA9IFtdIH0gPSBqc29uOyAgLy8vXG5cbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLCAgLy8vXG4gICAgICAgIFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gU3Vic3RpdHV0aW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzOyAvLy9cblxuICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT04ubWFwKChtZXRhdmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIChtZXRhdmFyaWFibGUpO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICByZXR1cm4gbGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgcmV0dXJuIG1ldGFMZW1tYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtVG9UZXJtSlNPTih0ZXJtKSB7XG4gIGNvbnN0IHRlcm1KU09OID0gdGVybS50b0pTT04oKTtcblxuICByZXR1cm4gdGVybUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlVG9UeXBlSlNPTih0eXBlKSB7XG4gIGNvbnN0IHR5cGVKU09OID0gKHR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0eXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04obWV0YVR5cGUpIHtcbiAgY29uc3QgbWV0YVR5cGVKU09OID0gKG1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgcmV0dXJuIG1ldGFUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZVRvU3VwZXJUeXBlSlNPTihzdXBlclR5cGUpIHtcbiAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZS50b0pTT04oKTtcblxuICByZXR1cm4gc3VwZXJUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTihzdGF0ZW1lbnQpIHtcbiAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudC50b0pTT04oKTtcblxuICByZXR1cm4gc3RhdGVtZW50SlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKGNvbmNsdXNpb24pIHtcbiAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OKGNvbnNlcXVlbnQpIHtcbiAgY29uc3QgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50LnRvSlNPTigpO1xuXG4gIHJldHVybiBjb25zZXF1ZW50SlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTihtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04oKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzVG9UeXBlc0pTT04odHlwZXMpIHtcbiAgY29uc3QgdHlwZXNKU09OID0gdHlwZXMubWFwKCh0eXBlKSA9PiB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTigpO1xuXG4gICAgdHlwZSA9IHR5cGVKU09OOyAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9KTtcblxuICByZXR1cm4gdHlwZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNUb1J1bGVzSlNPTihydWxlcykge1xuICBjb25zdCBydWxlc0pTT04gPSBydWxlcy5tYXAoKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKCk7XG5cbiAgICBydWxlID0gcnVsZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNUb0xhYmVsc0pTT04obGFiZWxzKSB7XG4gIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVsc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNUb0F4aW9tc0pTT04oYXhpb21zKSB7XG4gIGNvbnN0IGF4aW9tc0pTT04gPSBheGlvbXMubWFwKChheGlvbSkgPT4ge1xuICAgIGNvbnN0IGF4aW9tSlNPTiA9IGF4aW9tLnRvSlNPTigpO1xuXG4gICAgYXhpb20gPSBheGlvbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzVG9QcmVtaXNlc0pTT04ocHJlbWlzZXMpIHtcbiAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNUb1RoZW9yZW1zSlNPTih0aGVvcmVtcykge1xuICBjb25zdCB0aGVvcmVtc0pTT04gPSB0aGVvcmVtcy5tYXAoKHRoZW9yZW0pID0+IHtcbiAgICBjb25zdCB0aGVvcmVtSlNPTiA9IHRoZW9yZW0udG9KU09OKCk7XG5cbiAgICB0aGVvcmVtID0gdGhlb3JlbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odmFyaWFibGVzKSB7XG4gIGNvbnN0IHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047ICAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OKGNvbmplY3R1cmVzKSB7XG4gIGNvbnN0IGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzLm1hcCgoY29uamVjdHVyZSkgPT4ge1xuICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04oKTtcblxuICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04oY29tYmluYXRvcnMpIHtcbiAgY29uc3QgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnMubWFwKChjb21iaW5hdG9yKSA9PiB7XG4gICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTigpO1xuXG4gICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JKU09OOyAvLy9cblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKGNvbnN0cnVjdG9ycykge1xuICBjb25zdCBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKG1ldGF0aGVvcmVtcykge1xuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUpTT04gPSBtZXRhdGhlb3JlbS50b0pTT04oKTtcblxuICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1KU09OOyAvLy9cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTihzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucy5tYXBTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04obWV0YXZhcmlhYmxlcykge1xuICBjb25zdCBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXNKU09OO1xufVxuIl0sIm5hbWVzIjpbImF4aW9tc0Zyb21KU09OIiwiYXhpb21zVG9BeGlvbXNKU09OIiwiY29tYmluYXRvcnNGcm9tSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImNvbmplY3R1cmVzRnJvbUpTT04iLCJjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OIiwiY29uc2VxdWVudEZyb21KU09OIiwiY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsImxhYmVsc0Zyb21KU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhVHlwZUZyb21KU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwicnVsZXNGcm9tSlNPTiIsInJ1bGVzVG9SdWxlc0pTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwic3VwZXJUeXBlRnJvbUpTT04iLCJzdXBlclR5cGVUb1N1cGVyVHlwZUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInRlcm1Gcm9tSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwidGhlb3JlbXNGcm9tSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ0eXBlRnJvbUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInR5cGVzRnJvbUpTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJqc29uIiwiZmlsZUNvbnRleHQiLCJ0ZXJtIiwidGVybUpTT04iLCJUZXJtIiwiZG9tIiwiZnJvbUpTT04iLCJ0eXBlIiwibmFtZSIsInR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwibWV0YVR5cGUiLCJtZXRhVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZUpTT04iLCJzdGF0ZW1lbnQiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRKU09OIiwiY29uY2x1c2lvbiIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uSlNPTiIsImNvbnNlcXVlbnQiLCJDb25zZXF1ZW50IiwiY29uc2VxdWVudEpTT04iLCJtZXRhdmFyaWFibGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVKU09OIiwidHlwZXMiLCJ0eXBlc0pTT04iLCJUeXBlIiwiZm9yRWFjaCIsInR5cGVKU09OIiwicHVzaCIsInJ1bGVzIiwiUnVsZSIsInJ1bGVzSlNPTiIsIm1hcCIsInJ1bGVKU09OIiwicnVsZSIsImxhYmVscyIsIkxhYmVsIiwibGFiZWxzSlNPTiIsImxhYmVsSlNPTiIsImxhYmVsIiwiYXhpb21zIiwiQXhpb20iLCJheGlvbXNKU09OIiwiYXhpb21KU09OIiwiYXhpb20iLCJwcmVtaXNlcyIsIlByZW1pc2UiLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlSlNPTiIsInByZW1pc2UiLCJ0aGVvcmVtcyIsIlRoZW9yZW0iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtSlNPTiIsInRoZW9yZW0iLCJ2YXJpYWJsZXMiLCJWYXJpYWJsZSIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZUpTT04iLCJ2YXJpYWJsZSIsImNvbmplY3R1cmVzIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29uamVjdHVyZSIsImNvbWJpbmF0b3JzIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvckpTT04iLCJjb21iaW5hdG9yIiwiQ29tYmluYXRvciIsImNvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJjb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIiwibWV0YXRoZW9yZW1zIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1KU09OIiwibWV0YXRoZW9yZW0iLCJzdXBwb3NpdGlvbnMiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbkpTT04iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zSlNPTiIsIlN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkpTT04iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwibWFwU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFnS2dCQSxjQUFjO2VBQWRBOztJQStRQUMsa0JBQWtCO2VBQWxCQTs7SUEvTEFDLG1CQUFtQjtlQUFuQkE7O0lBeVBBQyw0QkFBNEI7ZUFBNUJBOztJQTdaQUMsa0JBQWtCO2VBQWxCQTs7SUErU0FDLDBCQUEwQjtlQUExQkE7O0lBM0pBQyxtQkFBbUI7ZUFBbkJBOztJQTZQQUMsNEJBQTRCO2VBQTVCQTs7SUFwWUFDLGtCQUFrQjtlQUFsQkE7O0lBd1NBQywwQkFBMEI7ZUFBMUJBOztJQWxJQUMsb0JBQW9CO2VBQXBCQTs7SUFnUUFDLDhCQUE4QjtlQUE5QkE7O0lBL1dBQyxjQUFjO2VBQWRBOztJQXFSQUMsa0JBQWtCO2VBQWxCQTs7SUF2RkFD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