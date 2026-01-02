"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get axiomsFromJSON () {
        return axiomsFromJSON;
    },
    get axiomsToAxiomsJSON () {
        return axiomsToAxiomsJSON;
    },
    get combinatorsFromJSON () {
        return combinatorsFromJSON;
    },
    get combinatorsToCombinatorsJSON () {
        return combinatorsToCombinatorsJSON;
    },
    get conclusionFromJSON () {
        return conclusionFromJSON;
    },
    get conclusionToConclusionJSON () {
        return conclusionToConclusionJSON;
    },
    get conjecturesFromJSON () {
        return conjecturesFromJSON;
    },
    get conjecturesToConjecturesJSON () {
        return conjecturesToConjecturesJSON;
    },
    get constructorsFromJSON () {
        return constructorsFromJSON;
    },
    get constructorsToConstructorsJSON () {
        return constructorsToConstructorsJSON;
    },
    get deductionFromJSON () {
        return deductionFromJSON;
    },
    get deductionToDeductionJSON () {
        return deductionToDeductionJSON;
    },
    get framesFromJSON () {
        return framesFromJSON;
    },
    get framesToFramesJSON () {
        return framesToFramesJSON;
    },
    get hypothesesFromJSON () {
        return hypothesesFromJSON;
    },
    get hypothesesToHypothesesJSON () {
        return hypothesesToHypothesesJSON;
    },
    get labelFromJSON () {
        return labelFromJSON;
    },
    get labelToLabelJSON () {
        return labelToLabelJSON;
    },
    get labelsFromJSON () {
        return labelsFromJSON;
    },
    get labelsToLabelsJSON () {
        return labelsToLabelsJSON;
    },
    get lemmasFromNothing () {
        return lemmasFromNothing;
    },
    get metaLemmasFromNothing () {
        return metaLemmasFromNothing;
    },
    get metaTypeFromJSON () {
        return metaTypeFromJSON;
    },
    get metaTypeToMetaTypeJSON () {
        return metaTypeToMetaTypeJSON;
    },
    get metatheoremsFromJSON () {
        return metatheoremsFromJSON;
    },
    get metatheoremsToMetatheoremsJSON () {
        return metatheoremsToMetatheoremsJSON;
    },
    get metavariableFromJSON () {
        return metavariableFromJSON;
    },
    get metavariableToMetavariableJSON () {
        return metavariableToMetavariableJSON;
    },
    get metavariablesFromJSON () {
        return metavariablesFromJSON;
    },
    get metavariablesToMetavariablesJSON () {
        return metavariablesToMetavariablesJSON;
    },
    get parametersFromJSON () {
        return parametersFromJSON;
    },
    get parametersToParametersJSON () {
        return parametersToParametersJSON;
    },
    get premisesFromJSON () {
        return premisesFromJSON;
    },
    get premisesToPremisesJSON () {
        return premisesToPremisesJSON;
    },
    get procedureCallFromJSON () {
        return procedureCallFromJSON;
    },
    get procedureCallToProcedureCallJSON () {
        return procedureCallToProcedureCallJSON;
    },
    get procedureReferenceFromJSON () {
        return procedureReferenceFromJSON;
    },
    get procedureReferenceToProcedureReferenceJSON () {
        return procedureReferenceToProcedureReferenceJSON;
    },
    get propertiesFromJSON () {
        return propertiesFromJSON;
    },
    get propertiesToPropertiesJSON () {
        return propertiesToPropertiesJSON;
    },
    get referenceFromJSON () {
        return referenceFromJSON;
    },
    get referenceToReferenceJSON () {
        return referenceToReferenceJSON;
    },
    get rulesFromJSON () {
        return rulesFromJSON;
    },
    get rulesToRulesJSON () {
        return rulesToRulesJSON;
    },
    get signatureFromJSON () {
        return signatureFromJSON;
    },
    get signatureToSignatureJSON () {
        return signatureToSignatureJSON;
    },
    get statementFromJSON () {
        return statementFromJSON;
    },
    get statementToStatementJSON () {
        return statementToStatementJSON;
    },
    get substitutionsFromJSON () {
        return substitutionsFromJSON;
    },
    get substitutionsToSubstitutionsJSON () {
        return substitutionsToSubstitutionsJSON;
    },
    get superTypesFromJSON () {
        return superTypesFromJSON;
    },
    get superTypesToSuperTypesJSON () {
        return superTypesToSuperTypesJSON;
    },
    get suppositionsFromJSON () {
        return suppositionsFromJSON;
    },
    get suppositionsToSuppositionsJSON () {
        return suppositionsToSuppositionsJSON;
    },
    get termFromJSON () {
        return termFromJSON;
    },
    get termToTermJSON () {
        return termToTermJSON;
    },
    get termsFromJSON () {
        return termsFromJSON;
    },
    get termsToTermsJSON () {
        return termsToTermsJSON;
    },
    get theoremsFromJSON () {
        return theoremsFromJSON;
    },
    get theoremsToTheoremsJSON () {
        return theoremsToTheoremsJSON;
    },
    get typeFromJSON () {
        return typeFromJSON;
    },
    get typePrefixesFromJSON () {
        return typePrefixesFromJSON;
    },
    get typePrefixesToTypePrefixesJSON () {
        return typePrefixesToTypePrefixesJSON;
    },
    get typeToTypeJSON () {
        return typeToTypeJSON;
    },
    get typesFromJSON () {
        return typesFromJSON;
    },
    get typesToTypesJSON () {
        return typesToTypesJSON;
    },
    get variablesFromJSON () {
        return variablesFromJSON;
    },
    get variablesToVariablesJSON () {
        return variablesToVariablesJSON;
    }
});
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termFromJSON(json, context) {
    var term = json.term;
    var termJSON = term; ///
    json = termJSON; ///
    var Term = _elements.default.Term;
    term = Term.fromJSON(json, context);
    return term;
}
function typeFromJSON(json, context) {
    var type = json.type;
    if (type !== null) {
        json = type; ///
        var name = json.name, prefixName = json.prefixName, nominalTypeName = prefixName !== null ? "".concat(prefixName).concat(name) : name; ///
        type = context.findTypeByNominalTypeName(nominalTypeName);
    }
    return type;
}
function metaTypeFromJSON(json, context) {
    var metaType = json.metaType;
    if (metaType !== null) {
        json = metaType; ///
        var name = json.name, metaTypeName = name; ///
        metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
    }
    return metaType;
}
function statementFromJSON(json, context) {
    var _json_statement = json.statement, statement = _json_statement === void 0 ? null : _json_statement;
    if (statement !== null) {
        var Statement = _elements.default.Statement, statementJSON = statement; ///
        json = statementJSON; ///
        statement = Statement.fromJSON(json, context);
    }
    return statement;
}
function deductionFromJSON(json, context) {
    var deduction = json.deduction;
    var Deduction = _elements.default.Deduction, deductionJSON = deduction; ///
    json = deductionJSON; ///
    deduction = Deduction.fromJSON(json, context);
    return deduction;
}
function signatureFromJSON(json, context) {
    var _json_signature = json.signature, signature = _json_signature === void 0 ? null : _json_signature;
    if (signature !== null) {
        var Signature = _elements.default.Signature, signatureJSON = signature; ///
        json = signatureJSON; ///
        signature = Signature.fromJSON(json, context);
    }
    return signature;
}
function referenceFromJSON(json, context) {
    var reference = json.reference;
    var Reference = _elements.default.Reference, referenceJSON = reference; ///
    json = referenceJSON; ///
    reference = Reference.fromJSON(json, context);
    return reference;
}
function conclusionFromJSON(json, context) {
    var conclusion = json.conclusion;
    var Conclusion = _elements.default.Conclusion, conclusionJSON = conclusion; ///
    json = conclusionJSON; ///
    conclusion = Conclusion.fromJSON(json, context);
    return conclusion;
}
function metavariableFromJSON(json, context) {
    var metavariable = json.metavariable;
    var Metavariable = _elements.default.Metavariable, metavariableJSON = metavariable; ///
    json = metavariableJSON; ///
    metavariable = Metavariable.fromJSON(json, context);
    return metavariable;
}
function procedureCallFromJSON(json, context) {
    var _json_procedureCall = json.procedureCall, procedureCall = _json_procedureCall === void 0 ? null : _json_procedureCall;
    if (procedureCall !== null) {
        var ProcedureCall = _elements.default.ProcedureCall, procedureCallJSON = procedureCall; ///
        json = procedureCallJSON; ///
        procedureCall = ProcedureCall.fromJSON(json, context);
    }
    return procedureCall;
}
function procedureReferenceFromJSON(json, context) {
    var procedureReference = json.procedureReference;
    var ProcedureReference = _elements.default.ProcedureReference, procedureReferenceJSON = procedureReference; ///
    json = procedureReferenceJSON; ///
    procedureReference = ProcedureReference.fromJSON(json, context);
    return procedureReference;
}
function typesFromJSON(json, types, context) {
    var typesJSON = json.types;
    var Type = _elements.default.Type;
    typesJSON.forEach(function(typeJSON) {
        var _$json = typeJSON, type = Type.fromJSON(_$json, context);
        types.push(type);
    });
}
function termsFromJSON(json, context) {
    var terms = json.terms;
    var Term = _elements.default.Term, termsJSON = terms; ///
    terms = termsJSON.map(function(termJSON) {
        var _$json = termJSON, term = Term.fromJSON(_$json, context);
        return term;
    });
    return terms;
}
function rulesFromJSON(json, context) {
    var rules = json.rules;
    var Rule = _elements.default.Rule, rulesJSON = rules; ///
    rules = rulesJSON.map(function(ruleJSON) {
        var _$json = ruleJSON, rule = Rule.fromJSON(_$json, context);
        return rule;
    });
    return rules;
}
function labelFromJSON(json, context) {
    var label = json.label;
    var Label = _elements.default.Label, labelJSON = label; ///
    json = labelJSON; ///
    label = Label.fromJSON(json, context);
    return label;
}
function framesFromJSON(json, context) {
    var frames = json.frames;
    var Frame = _elements.default.Frame, framesJSON = frames; ///
    frames = framesJSON.map(function(frameJSON) {
        var _$json = frameJSON, frame = Frame.fromJSON(_$json, context);
        return frame;
    });
    return frames;
}
function labelsFromJSON(json, context) {
    var labels = json.labels;
    var Label = _elements.default.Label, labelsJSON = labels; ///
    labels = labelsJSON.map(function(labelJSON) {
        var _$json = labelJSON, label = Label.fromJSON(_$json, context);
        return label;
    });
    return labels;
}
function axiomsFromJSON(json, context) {
    var axioms = json.axioms;
    var Axiom = _elements.default.Axiom, axiomsJSON = axioms; ///
    axioms = axiomsJSON.map(function(axiomJSON) {
        var _$json = axiomJSON, axiom = Axiom.fromJSON(_$json, context);
        return axiom;
    });
    return axioms;
}
function premisesFromJSON(json, context) {
    var premises = json.premises;
    var Premise = _elements.default.Premise, premisesJSON = premises; ///
    premises = premisesJSON.map(function(premiseJSON) {
        var _$json = premiseJSON, premise = Premise.fromJSON(_$json, context);
        return premise;
    });
    return premises;
}
function theoremsFromJSON(json, context) {
    var theorems = json.theorems;
    var Theorem = _elements.default.Theorem, theoremsJSON = theorems; ///
    theorems = theoremsJSON.map(function(theoremJSON) {
        var _$json = theoremJSON, theorem = Theorem.fromJSON(_$json, context);
        return theorem;
    });
    return theorems;
}
function variablesFromJSON(json, context) {
    var variables = json.variables;
    var Variable = _elements.default.Variable, variablesJSON = variables; ///
    variables = variablesJSON.map(function(variableJSON) {
        var _$json = variableJSON, variable = Variable.fromJSON(_$json, context);
        return variable;
    });
    return variables;
}
function propertiesFromJSON(json, context) {
    var properties = json.properties;
    var Property = _elements.default.Property, propertiesJSON = properties; ///
    properties = propertiesJSON.map(function(propertyJSON) {
        var _$json = propertyJSON, property = Property.fromJSON(_$json, context);
        return property;
    });
    return properties;
}
function superTypesFromJSON(json, context) {
    var superTypesJSON = json.superTypes;
    var superTypes = superTypesJSON.map(function(superTypeJSON) {
        var _$json = superTypeJSON, name = _$json.name, prefixName = _$json.prefixName, nominalSuperTypeName = prefixName !== null ? "".concat(prefixName).concat(name) : name, superType = context.findTypeByNominalTypeName(nominalSuperTypeName);
        return superType;
    });
    return superTypes;
}
function hypothesesFromJSON(json, context) {
    var hypotheses = json.hypotheses;
    var Hypothesis = _elements.default.Hypothesis, hypothesesJSON = hypotheses; ///
    hypotheses = hypothesesJSON.map(function(hypothesisJSON) {
        var _$json = hypothesisJSON, hypothesis = Hypothesis.fromJSON(_$json, context);
        return hypothesis;
    });
    return hypotheses;
}
function parametersFromJSON(json, context) {
    var parameters = json.parameters;
    var Parameter = _elements.default.Parameter, parametersJSON = parameters; ///
    parameters = parametersJSON.map(function(parameterJSON) {
        var _$json = parameterJSON, parameter = Parameter.fromJSON(_$json, context);
        return parameter;
    });
    return parameters;
}
function conjecturesFromJSON(json, context) {
    var conjectures = json.conjectures;
    var Conjecture = _elements.default.Conjecture, conjecturesJSON = conjectures; ///
    conjectures = conjecturesJSON.map(function(conjectureJSON) {
        var _$json = conjectureJSON, conjecture = Conjecture.fromJSON(_$json, context);
        return conjecture;
    });
    return conjectures;
}
function combinatorsFromJSON(json, context) {
    var combinators = json.combinators;
    var Combinator = _elements.default.Combinator, combinatorsJSON = combinators; ///
    combinators = combinatorsJSON.map(function(combinatorJSON) {
        var _$json = combinatorJSON, combinator = Combinator.fromJSON(_$json, context);
        return combinator;
    });
    return combinators;
}
function typePrefixesFromJSON(json, context) {
    var typePrefixes = json.typePrefixes;
    var TypePrefix = _elements.default.TypePrefix, typePrefixesJSON = typePrefixes; ///
    typePrefixes = typePrefixesJSON.map(function(typePrefixJSON) {
        var _$json = typePrefixJSON, typePrefix = TypePrefix.fromJSON(_$json, context);
        return typePrefix;
    });
    return typePrefixes;
}
function constructorsFromJSON(json, context) {
    var constructors = json.constructors;
    var Constructor = _elements.default.Constructor, constructorsJSON = constructors; ///
    constructors = constructorsJSON.map(function(constructorJSON) {
        var _$json = constructorJSON, constructor = Constructor.fromJSON(_$json, context);
        return constructor;
    });
    return constructors;
}
function metatheoremsFromJSON(json, context) {
    var metatheorems = json.metatheorems;
    var Metatheorem = _elements.default.Metatheorem, metatheoremsJSON = metatheorems; ///
    metatheorems = metatheoremsJSON.map(function(metatheoremJSON) {
        var _$json = metatheoremJSON, metatheorem = Metatheorem.fromJSON(_$json, context);
        return metatheorem;
    });
    return metatheorems;
}
function suppositionsFromJSON(json, context) {
    var suppositions = json.suppositions;
    var Supposition = _elements.default.Supposition, suppositionsJSON = suppositions; ///
    suppositions = suppositionsJSON.map(function(suppositionJSON) {
        var _$json = suppositionJSON, supposition = Supposition.fromJSON(_$json, context);
        return supposition;
    });
    return suppositions;
}
function substitutionsFromJSON(json, context) {
    var _json_substitutions = json.substitutions, substitutions = _json_substitutions === void 0 ? [] : _json_substitutions; ///
    var StatementSubstitution = _elements.default.StatementSubstitution, substitutionsJSON = substitutions, Substitution = StatementSubstitution; ///
    substitutions = substitutionsJSON.map(function(substitutionJSON) {
        var _$json = substitutionJSON, substitution = Substitution.fromJSON(_$json, context);
        return substitution;
    });
    return substitutions;
}
function metavariablesFromJSON(json, context) {
    var metavariables = json.metavariables;
    var Metavariable = _elements.default.Metavariable, metavariablesJSON = metavariables; ///
    metavariables = metavariablesJSON.map(function(metavariableJSON) {
        var _$json = metavariableJSON, metavariable = Metavariable.fromJSON(_$json, context);
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
function labelToLabelJSON(label) {
    var labelJSON = label.toJSON();
    return labelJSON;
}
function metaTypeToMetaTypeJSON(metaType) {
    var metaTypeJSON = metaType !== null ? metaType.toJSON() : null;
    return metaTypeJSON;
}
function referenceToReferenceJSON(reference) {
    var referenceJSON = reference.toJSON();
    return referenceJSON;
}
function statementToStatementJSON(statement) {
    var statementJSON = statement !== null ? statement.toJSON() : null;
    return statementJSON;
}
function deductionToDeductionJSON(deduction) {
    var deductionJSON = deduction.toJSON();
    return deductionJSON;
}
function signatureToSignatureJSON(signature) {
    var signatureJSON = signature !== null ? signature.toJSON() : null;
    return signatureJSON;
}
function conclusionToConclusionJSON(conclusion) {
    var conclusionJSON = conclusion.toJSON();
    return conclusionJSON;
}
function metavariableToMetavariableJSON(metavariable) {
    var metavariableJSON = metavariable.toJSON();
    return metavariableJSON;
}
function procedureCallToProcedureCallJSON(procedureCall) {
    var procedureCallJSON = procedureCall !== null ? procedureCall.toJSON() : null;
    return procedureCallJSON;
}
function procedureReferenceToProcedureReferenceJSON(procedureReference) {
    var procedureReferenceJSON = procedureReference.toJSON();
    return procedureReferenceJSON;
}
function typesToTypesJSON(types) {
    var typesJSON = types.map(function(type) {
        var typeJSON = type.toJSON();
        type = typeJSON; ///
        return type;
    });
    return typesJSON;
}
function termsToTermsJSON(terms) {
    var termsJSON = terms.map(function(term) {
        var termJSON = term.toJSON();
        term = termJSON; ///
        return term;
    });
    return termsJSON;
}
function rulesToRulesJSON(rules) {
    var rulesJSON = rules.map(function(rule) {
        var ruleJSON = rule.toJSON();
        rule = ruleJSON; ///
        return rule;
    });
    return rulesJSON;
}
function framesToFramesJSON(frames) {
    var framesJSON = frames.map(function(frame) {
        var frameJSON = frame.toJSON();
        frame = frameJSON; ///
        return frame;
    });
    return framesJSON;
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
function hypothesesToHypothesesJSON(hypotheses) {
    var hypothesesJSON = hypotheses.map(function(hypothesis) {
        var hypothesisJSON = hypothesis.toJSON();
        hypothesis = hypothesisJSON; ///
        return hypothesis;
    });
    return hypothesesJSON;
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
function typePrefixesToTypePrefixesJSON(typePrefixes) {
    var typePrefixesJSON = typePrefixes.map(function(typePrefix) {
        var typePrefixJSON = typePrefix.toJSON();
        typePrefix = typePrefixJSON; ///
        return typePrefix;
    });
    return typePrefixesJSON;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGVybSB9ID0ganNvbjtcblxuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICBqc29uID0gdGVybUpTT047ICAvLy9cblxuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzO1xuXG4gIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSB0eXBlOyAgLy8vXG5cbiAgICBjb25zdCB7IG5hbWUsIHByZWZpeE5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gKHByZWZpeE5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhOYW1lfSR7bmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOyAvLy9cblxuICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSBtZXRhVHlwZTsgIC8vL1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnQgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudDsgIC8vL1xuXG4gICAganNvbiA9IHN0YXRlbWVudEpTT047IC8vL1xuXG4gICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZGVkdWN0aW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRGVkdWN0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvbjsgIC8vL1xuXG4gIGpzb24gPSBkZWR1Y3Rpb25KU09OOyAgLy8vXG5cbiAgZGVkdWN0aW9uID0gRGVkdWN0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHNpZ25hdHVyZSA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHNpZ25hdHVyZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzaWduYXR1cmVKU09OID0gc2lnbmF0dXJlOyAgLy8vXG5cbiAgICBqc29uID0gc2lnbmF0dXJlSlNPTjsgLy8vXG5cbiAgICBzaWduYXR1cmUgPSBTaWduYXR1cmUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyByZWZlcmVuY2UgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlOyAgLy8vXG5cbiAganNvbiA9IHJlZmVyZW5jZUpTT047IC8vL1xuXG4gIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb2NlZHVyZUNhbGwgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGw7ICAvLy9cblxuICAgIGpzb24gPSBwcm9jZWR1cmVDYWxsSlNPTjsgLy8vXG5cbiAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2VKU09OID0gcHJvY2VkdXJlUmVmZXJlbmNlOyAgLy8vXG5cbiAganNvbiA9IHByb2NlZHVyZVJlZmVyZW5jZUpTT047ICAvLy9cblxuICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBQcm9jZWR1cmVSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzRnJvbUpTT04oanNvbiwgdHlwZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyB0eXBlczogdHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZSB9ID0gZWxlbWVudHM7XG5cbiAgdHlwZXNKU09OLmZvckVhY2goKHR5cGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0ZXJtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0ZXJtc0pTT04gPSB0ZXJtczsgLy8vXG5cbiAgdGVybXMgPSB0ZXJtc0pTT04ubWFwKCh0ZXJtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBydWxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFJ1bGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBydWxlc0pTT04gPSBydWxlczsgLy8vXG5cbiAgcnVsZXMgPSBydWxlc0pTT04ubWFwKChydWxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBydWxlSlNPTiwgIC8vL1xuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbCB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbGFiZWxKU09OID0gbGFiZWw7ICAvLy9cblxuICBqc29uID0gbGFiZWxKU09OOyAvLy9cblxuICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZnJhbWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBmcmFtZXNKU09OID0gZnJhbWVzOyAvLy9cblxuICBmcmFtZXMgPSBmcmFtZXNKU09OLm1hcCgoZnJhbWVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGZyYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH0pO1xuXG4gIHJldHVybiBmcmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBheGlvbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBBeGlvbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGF4aW9tc0pTT04gPSBheGlvbXM7IC8vL1xuXG4gIGF4aW9tcyA9IGF4aW9tc0pTT04ubWFwKChheGlvbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXhpb21KU09OLCAgLy8vXG4gICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByZW1pc2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLm1hcCgocHJlbWlzZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJlbWlzZUpTT04sIC8vL1xuICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtczsgLy8vXG5cbiAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04ubWFwKCh0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIHRoZW9yZW0gPSBUaGVvcmVtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzOyAvLy9cblxuICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLm1hcCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXM7IC8vL1xuXG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTi5tYXAoKHByb3BlcnR5SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcm9wZXJ0eUpTT04sICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgc3VwZXJUeXBlczogc3VwZXJUeXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3Qgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLm1hcCgoc3VwZXJUeXBlSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgeyBuYW1lLCBwcmVmaXhOYW1lIH0gPSBqc29uLFxuICAgICAgICAgICAgICAgIG5vbWluYWxTdXBlclR5cGVOYW1lID0gKHByZWZpeE5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJlZml4TmFtZX0ke25hbWV9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsIC8vL1xuICAgICAgICAgICAgICAgIHN1cGVyVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsU3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGh5cG90aGVzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBIeXBvdGhlc2lzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzOyAgLy8vXG5cbiAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNKU09OLm1hcCgoaHlwb3RoZXNpc0pTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gaHlwb3RoZXNpc0pTT04sIC8vL1xuICAgICAgICAgIGh5cG90aGVzaXMgPSBIeXBvdGhlc2lzLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcGFyYW1ldGVycyB9ID0ganNvbjtcblxuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVyczsgLy8vXG5cbiAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNKU09OLm1hcCgocGFyYW1ldGVySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwYXJhbWV0ZXJKU09OLCAgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uamVjdHVyZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXM7IC8vL1xuXG4gIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLm1hcCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uamVjdHVyZUpTT04sICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29tYmluYXRvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnM7IC8vL1xuXG4gIGNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNKU09OLm1hcCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29tYmluYXRvckpTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4ZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHR5cGVQcmVmaXhlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGVQcmVmaXggfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzOyAvLy9cblxuICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLm1hcCgodHlwZVByZWZpeEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZVByZWZpeEpTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ID0gVHlwZVByZWZpeC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25zdHJ1Y3RvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnM7IC8vL1xuXG4gIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04ubWFwKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zOyAvLy9cblxuICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLm1hcCgobWV0YXRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN1cHBvc2l0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3Vic3RpdHV0aW9ucyA9IFtdIH0gPSBqc29uOyAgLy8vXG5cbiAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnMsICAvLy9cbiAgICAgICAgU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uOyAvLy9cblxuICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04ubWFwKChzdWJzdGl0dXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBTdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXM7IC8vL1xuXG4gIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTi5tYXAoKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBsZW1tYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhTGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICByZXR1cm4gbWV0YUxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Ub1Rlcm1KU09OKHRlcm0pIHtcbiAgY29uc3QgdGVybUpTT04gPSB0ZXJtLnRvSlNPTigpO1xuXG4gIHJldHVybiB0ZXJtSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVUb1R5cGVKU09OKHR5cGUpIHtcbiAgY29uc3QgdHlwZUpTT04gPSAodHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gdHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbFRvTGFiZWxKU09OKGxhYmVsKSB7XG4gIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gIHJldHVybiBsYWJlbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKG1ldGFUeXBlKSB7XG4gIGNvbnN0IG1ldGFUeXBlSlNPTiA9IChtZXRhVHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFUeXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG4gIHJldHVybiBtZXRhVHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04ocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2UudG9KU09OKCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04oc3RhdGVtZW50KSB7XG4gIGNvbnN0IHN0YXRlbWVudEpTT04gPSAoc3RhdGVtZW50ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudC50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gc3RhdGVtZW50SlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTihkZWR1Y3Rpb24pIHtcbiAgY29uc3QgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvbi50b0pTT04oKTtcblxuICByZXR1cm4gZGVkdWN0aW9uSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTihzaWduYXR1cmUpIHtcbiAgY29uc3Qgc2lnbmF0dXJlSlNPTiA9IChzaWduYXR1cmUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBzaWduYXR1cmVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04oY29uY2x1c2lvbikge1xuICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04ocHJvY2VkdXJlQ2FsbCkge1xuICBjb25zdCBwcm9jZWR1cmVDYWxsSlNPTiA9IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZWR1cmVDYWxsLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04ocHJvY2VkdXJlUmVmZXJlbmNlKSB7XG4gIGNvbnN0IHByb2NlZHVyZVJlZmVyZW5jZUpTT04gPSBwcm9jZWR1cmVSZWZlcmVuY2UudG9KU09OKCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc1RvVHlwZXNKU09OKHR5cGVzKSB7XG4gIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04oKTtcblxuICAgIHR5cGUgPSB0eXBlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zVG9UZXJtc0pTT04odGVybXMpIHtcbiAgY29uc3QgdGVybXNKU09OID0gdGVybXMubWFwKCh0ZXJtKSA9PiB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtLnRvSlNPTigpO1xuXG4gICAgdGVybSA9IHRlcm1KU09OOyAvLy9cblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNUb1J1bGVzSlNPTihydWxlcykge1xuICBjb25zdCBydWxlc0pTT04gPSBydWxlcy5tYXAoKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKCk7XG5cbiAgICBydWxlID0gcnVsZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZXNUb0ZyYW1lc0pTT04oZnJhbWVzKSB7XG4gIGNvbnN0IGZyYW1lc0pTT04gPSBmcmFtZXMubWFwKChmcmFtZSkgPT4ge1xuICAgIGNvbnN0IGZyYW1lSlNPTiA9IGZyYW1lLnRvSlNPTigpO1xuXG4gICAgZnJhbWUgPSBmcmFtZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKGh5cG90aGVzZXMpIHtcbiAgY29uc3QgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzLm1hcCgoaHlwb3RoZXNpcykgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXNKU09OID0gaHlwb3RoZXNpcy50b0pTT04oKTtcblxuICAgIGh5cG90aGVzaXMgPSBoeXBvdGhlc2lzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04oc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlO1xuICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTihwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlckpTT04gPSBwYXJhbWV0ZXIudG9KU09OKCk7XG5cbiAgICBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTihwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlKU09OID0gcHJvcGVydHkudG9KU09OKCk7XG5cbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5SlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04odHlwZVByZWZpeGVzKSB7XG4gIGNvbnN0IHR5cGVQcmVmaXhlc0pTT04gPSB0eXBlUHJlZml4ZXMubWFwKCh0eXBlUHJlZml4KSA9PiB7XG4gICAgY29uc3QgdHlwZVByZWZpeEpTT04gPSB0eXBlUHJlZml4LnRvSlNPTigpO1xuXG4gICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhKU09OOyAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04oY29uamVjdHVyZXMpIHtcbiAgY29uc3QgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTigpO1xuXG4gICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTihjb21iaW5hdG9ycykge1xuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKCk7XG5cbiAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04oc3VwcG9zaXRpb25zKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04oY29uc3RydWN0b3JzKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTigpO1xuXG4gICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04obWV0YXRoZW9yZW1zKSB7XG4gIGNvbnN0IG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXMubWFwKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLm1hcFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTihtZXRhdmFyaWFibGVzKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG4iXSwibmFtZXMiOlsiYXhpb21zRnJvbUpTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwiZnJhbWVzRnJvbUpTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJoeXBvdGhlc2VzRnJvbUpTT04iLCJoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTiIsImxhYmVsRnJvbUpTT04iLCJsYWJlbFRvTGFiZWxKU09OIiwibGFiZWxzRnJvbUpTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsIm1ldGFUeXBlRnJvbUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwicGFyYW1ldGVyc0Zyb21KU09OIiwicGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04iLCJwcmVtaXNlc0Zyb21KU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsInByb2NlZHVyZUNhbGxGcm9tSlNPTiIsInByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04iLCJwcm9wZXJ0aWVzRnJvbUpTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInJlZmVyZW5jZUZyb21KU09OIiwicmVmZXJlbmNlVG9SZWZlcmVuY2VKU09OIiwicnVsZXNGcm9tSlNPTiIsInJ1bGVzVG9SdWxlc0pTT04iLCJzaWduYXR1cmVGcm9tSlNPTiIsInNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidHlwZUZyb21KU09OIiwidHlwZVByZWZpeGVzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInR5cGVzRnJvbUpTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJqc29uIiwiY29udGV4dCIsInRlcm0iLCJ0ZXJtSlNPTiIsIlRlcm0iLCJlbGVtZW50cyIsImZyb21KU09OIiwidHlwZSIsIm5hbWUiLCJwcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJzdGF0ZW1lbnQiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRKU09OIiwiZGVkdWN0aW9uIiwiRGVkdWN0aW9uIiwiZGVkdWN0aW9uSlNPTiIsInNpZ25hdHVyZSIsIlNpZ25hdHVyZSIsInNpZ25hdHVyZUpTT04iLCJyZWZlcmVuY2UiLCJSZWZlcmVuY2UiLCJyZWZlcmVuY2VKU09OIiwiY29uY2x1c2lvbiIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uSlNPTiIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJwcm9jZWR1cmVDYWxsIiwiUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInR5cGVzIiwidHlwZXNKU09OIiwiVHlwZSIsImZvckVhY2giLCJ0eXBlSlNPTiIsInB1c2giLCJ0ZXJtcyIsInRlcm1zSlNPTiIsIm1hcCIsInJ1bGVzIiwiUnVsZSIsInJ1bGVzSlNPTiIsInJ1bGVKU09OIiwicnVsZSIsImxhYmVsIiwiTGFiZWwiLCJsYWJlbEpTT04iLCJmcmFtZXMiLCJGcmFtZSIsImZyYW1lc0pTT04iLCJmcmFtZUpTT04iLCJmcmFtZSIsImxhYmVscyIsImxhYmVsc0pTT04iLCJheGlvbXMiLCJBeGlvbSIsImF4aW9tc0pTT04iLCJheGlvbUpTT04iLCJheGlvbSIsInByZW1pc2VzIiwiUHJlbWlzZSIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwicHJlbWlzZSIsInRoZW9yZW1zIiwiVGhlb3JlbSIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1KU09OIiwidGhlb3JlbSIsInZhcmlhYmxlcyIsIlZhcmlhYmxlIiwidmFyaWFibGVzSlNPTiIsInZhcmlhYmxlSlNPTiIsInZhcmlhYmxlIiwicHJvcGVydGllcyIsIlByb3BlcnR5IiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0eUpTT04iLCJwcm9wZXJ0eSIsInN1cGVyVHlwZXMiLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZUpTT04iLCJub21pbmFsU3VwZXJUeXBlTmFtZSIsInN1cGVyVHlwZSIsImh5cG90aGVzZXMiLCJIeXBvdGhlc2lzIiwiaHlwb3RoZXNlc0pTT04iLCJoeXBvdGhlc2lzSlNPTiIsImh5cG90aGVzaXMiLCJwYXJhbWV0ZXJzIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJKU09OIiwicGFyYW1ldGVyIiwiY29uamVjdHVyZXMiLCJDb25qZWN0dXJlIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZUpTT04iLCJjb25qZWN0dXJlIiwiY29tYmluYXRvcnMiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvckpTT04iLCJjb21iaW5hdG9yIiwidHlwZVByZWZpeGVzIiwiVHlwZVByZWZpeCIsInR5cGVQcmVmaXhlc0pTT04iLCJ0eXBlUHJlZml4SlNPTiIsInR5cGVQcmVmaXgiLCJjb25zdHJ1Y3RvcnMiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJjb25zdHJ1Y3RvciIsIm1ldGF0aGVvcmVtcyIsIk1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtSlNPTiIsIm1ldGF0aGVvcmVtIiwic3VwcG9zaXRpb25zIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25KU09OIiwic3VwcG9zaXRpb24iLCJzdWJzdGl0dXRpb25zIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uc0pTT04iLCJTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25KU09OIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXNKU09OIiwibGVtbWFzIiwibWV0YUxlbW1hcyIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1hcFN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBMFBnQkE7ZUFBQUE7O1FBeVpBQztlQUFBQTs7UUF4UUFDO2VBQUFBOztRQThYQUM7ZUFBQUE7O1FBL3BCQUM7ZUFBQUE7O1FBcWRBQztlQUFBQTs7UUFwTUFDO2VBQUFBOztRQWtZQUM7ZUFBQUE7O1FBbFZBQztlQUFBQTs7UUFvWEFDO2VBQUFBOztRQTl0QkFDO2VBQUFBOztRQWdmQUM7ZUFBQUE7O1FBdlZBQztlQUFBQTs7UUFtYUFDO2VBQUFBOztRQWxTQUM7ZUFBQUE7O1FBc1dBQztlQUFBQTs7UUFwZkFDO2VBQUFBOztRQXlVQUM7ZUFBQUE7O1FBNVNBQztlQUFBQTs7UUErWkFDO2VBQUFBOztRQTdJQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOztRQS9kQUM7ZUFBQUE7O1FBeWZBQztlQUFBQTs7UUFqR0FDO2VBQUFBOztRQWdYQUM7ZUFBQUE7O1FBcHJCQUM7ZUFBQUE7O1FBOGNBQztlQUFBQTs7UUF6RkFDO2VBQUFBOztRQXFWQUM7ZUFBQUE7O1FBdGRBQztlQUFBQTs7UUE4V0FDO2VBQUFBOztRQS9jQUM7ZUFBQUE7O1FBcVpBQztlQUFBQTs7UUEzaEJBQztlQUFBQTs7UUF1Y0FDO2VBQUFBOztRQXhiQUM7ZUFBQUE7O1FBZ2NBQztlQUFBQTs7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