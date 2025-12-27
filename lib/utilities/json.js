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
var _structure = /*#__PURE__*/ _interop_require_default(require("../structure"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termFromJSON(json, context) {
    var term = json.term;
    var termJSON = term; ///
    json = termJSON; ///
    var Term = _structure.default.Term;
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
        var Statement = _structure.default.Statement, statementJSON = statement; ///
        json = statementJSON; ///
        statement = Statement.fromJSON(json, context);
    }
    return statement;
}
function deductionFromJSON(json, context) {
    var deduction = json.deduction;
    var Deduction = _structure.default.Deduction, deductionJSON = deduction; ///
    json = deductionJSON; ///
    deduction = Deduction.fromJSON(json, context);
    return deduction;
}
function signatureFromJSON(json, context) {
    var _json_signature = json.signature, signature = _json_signature === void 0 ? null : _json_signature;
    if (signature !== null) {
        var Signature = _structure.default.Signature, signatureJSON = signature; ///
        json = signatureJSON; ///
        signature = Signature.fromJSON(json, context);
    }
    return signature;
}
function referenceFromJSON(json, context) {
    var reference = json.reference;
    var Reference = _structure.default.Reference, referenceJSON = reference; ///
    json = referenceJSON; ///
    reference = Reference.fromJSON(json, context);
    return reference;
}
function conclusionFromJSON(json, context) {
    var conclusion = json.conclusion;
    var Conclusion = _structure.default.Conclusion, conclusionJSON = conclusion; ///
    json = conclusionJSON; ///
    conclusion = Conclusion.fromJSON(json, context);
    return conclusion;
}
function metavariableFromJSON(json, context) {
    var metavariable = json.metavariable;
    var Metavariable = _structure.default.Metavariable, metavariableJSON = metavariable; ///
    json = metavariableJSON; ///
    metavariable = Metavariable.fromJSON(json, context);
    return metavariable;
}
function procedureCallFromJSON(json, context) {
    var _json_procedureCall = json.procedureCall, procedureCall = _json_procedureCall === void 0 ? null : _json_procedureCall;
    if (procedureCall !== null) {
        var ProcedureCall = _structure.default.ProcedureCall, procedureCallJSON = procedureCall; ///
        json = procedureCallJSON; ///
        procedureCall = ProcedureCall.fromJSON(json, context);
    }
    return procedureCall;
}
function procedureReferenceFromJSON(json, context) {
    var procedureReference = json.procedureReference;
    var ProcedureReference = _structure.default.ProcedureReference, procedureReferenceJSON = procedureReference; ///
    json = procedureReferenceJSON; ///
    procedureReference = ProcedureReference.fromJSON(json, context);
    return procedureReference;
}
function typesFromJSON(json, types, context) {
    var typesJSON = json.types;
    var Type = _structure.default.Type;
    typesJSON.forEach(function(typeJSON) {
        var _$json = typeJSON, type = Type.fromJSON(_$json, context);
        types.push(type);
    });
}
function termsFromJSON(json, context) {
    var terms = json.terms;
    var Term = _structure.default.Term, termsJSON = terms; ///
    terms = termsJSON.map(function(termJSON) {
        var _$json = termJSON, term = Term.fromJSON(_$json, context);
        return term;
    });
    return terms;
}
function rulesFromJSON(json, context) {
    var rules = json.rules;
    var Rule = _structure.default.Rule, rulesJSON = rules; ///
    rules = rulesJSON.map(function(ruleJSON) {
        var _$json = ruleJSON, rule = Rule.fromJSON(_$json, context);
        return rule;
    });
    return rules;
}
function labelFromJSON(json, context) {
    var label = json.label;
    var Label = _structure.default.Label, labelJSON = label; ///
    json = labelJSON; ///
    label = Label.fromJSON(json, context);
    return label;
}
function framesFromJSON(json, context) {
    var frames = json.frames;
    var Frame = _structure.default.Frame, framesJSON = frames; ///
    frames = framesJSON.map(function(frameJSON) {
        var _$json = frameJSON, frame = Frame.fromJSON(_$json, context);
        return frame;
    });
    return frames;
}
function labelsFromJSON(json, context) {
    var labels = json.labels;
    var Label = _structure.default.Label, labelsJSON = labels; ///
    labels = labelsJSON.map(function(labelJSON) {
        var _$json = labelJSON, label = Label.fromJSON(_$json, context);
        return label;
    });
    return labels;
}
function axiomsFromJSON(json, context) {
    var axioms = json.axioms;
    var Axiom = _structure.default.Axiom, axiomsJSON = axioms; ///
    axioms = axiomsJSON.map(function(axiomJSON) {
        var _$json = axiomJSON, axiom = Axiom.fromJSON(_$json, context);
        return axiom;
    });
    return axioms;
}
function premisesFromJSON(json, context) {
    var premises = json.premises;
    var Premise = _structure.default.Premise, premisesJSON = premises; ///
    premises = premisesJSON.map(function(premiseJSON) {
        var _$json = premiseJSON, premise = Premise.fromJSON(_$json, context);
        return premise;
    });
    return premises;
}
function theoremsFromJSON(json, context) {
    var theorems = json.theorems;
    var Theorem = _structure.default.Theorem, theoremsJSON = theorems; ///
    theorems = theoremsJSON.map(function(theoremJSON) {
        var _$json = theoremJSON, theorem = Theorem.fromJSON(_$json, context);
        return theorem;
    });
    return theorems;
}
function variablesFromJSON(json, context) {
    var variables = json.variables;
    var Variable = _structure.default.Variable, variablesJSON = variables; ///
    variables = variablesJSON.map(function(variableJSON) {
        var _$json = variableJSON, variable = Variable.fromJSON(_$json, context);
        return variable;
    });
    return variables;
}
function propertiesFromJSON(json, context) {
    var properties = json.properties;
    var Property = _structure.default.Property, propertiesJSON = properties; ///
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
    var Hypothesis = _structure.default.Hypothesis, hypothesesJSON = hypotheses; ///
    hypotheses = hypothesesJSON.map(function(hypothesisJSON) {
        var _$json = hypothesisJSON, hypothesis = Hypothesis.fromJSON(_$json, context);
        return hypothesis;
    });
    return hypotheses;
}
function parametersFromJSON(json, context) {
    var parameters = json.parameters;
    var Parameter = _structure.default.Parameter, parametersJSON = parameters; ///
    parameters = parametersJSON.map(function(parameterJSON) {
        var _$json = parameterJSON, parameter = Parameter.fromJSON(_$json, context);
        return parameter;
    });
    return parameters;
}
function conjecturesFromJSON(json, context) {
    var conjectures = json.conjectures;
    var Conjecture = _structure.default.Conjecture, conjecturesJSON = conjectures; ///
    conjectures = conjecturesJSON.map(function(conjectureJSON) {
        var _$json = conjectureJSON, conjecture = Conjecture.fromJSON(_$json, context);
        return conjecture;
    });
    return conjectures;
}
function combinatorsFromJSON(json, context) {
    var combinators = json.combinators;
    var Combinator = _structure.default.Combinator, combinatorsJSON = combinators; ///
    combinators = combinatorsJSON.map(function(combinatorJSON) {
        var _$json = combinatorJSON, combinator = Combinator.fromJSON(_$json, context);
        return combinator;
    });
    return combinators;
}
function typePrefixesFromJSON(json, context) {
    var typePrefixes = json.typePrefixes;
    var TypePrefix = _structure.default.TypePrefix, typePrefixesJSON = typePrefixes; ///
    typePrefixes = typePrefixesJSON.map(function(typePrefixJSON) {
        var _$json = typePrefixJSON, typePrefix = TypePrefix.fromJSON(_$json, context);
        return typePrefix;
    });
    return typePrefixes;
}
function constructorsFromJSON(json, context) {
    var constructors = json.constructors;
    var Constructor = _structure.default.Constructor, constructorsJSON = constructors; ///
    constructors = constructorsJSON.map(function(constructorJSON) {
        var _$json = constructorJSON, constructor = Constructor.fromJSON(_$json, context);
        return constructor;
    });
    return constructors;
}
function metatheoremsFromJSON(json, context) {
    var metatheorems = json.metatheorems;
    var Metatheorem = _structure.default.Metatheorem, metatheoremsJSON = metatheorems; ///
    metatheorems = metatheoremsJSON.map(function(metatheoremJSON) {
        var _$json = metatheoremJSON, metatheorem = Metatheorem.fromJSON(_$json, context);
        return metatheorem;
    });
    return metatheorems;
}
function suppositionsFromJSON(json, context) {
    var suppositions = json.suppositions;
    var Supposition = _structure.default.Supposition, suppositionsJSON = suppositions; ///
    suppositions = suppositionsJSON.map(function(suppositionJSON) {
        var _$json = suppositionJSON, supposition = Supposition.fromJSON(_$json, context);
        return supposition;
    });
    return suppositions;
}
function substitutionsFromJSON(json, context) {
    var _json_substitutions = json.substitutions, substitutions = _json_substitutions === void 0 ? [] : _json_substitutions; ///
    var StatementSubstitution = _structure.default.StatementSubstitution, substitutionsJSON = substitutions, Substitution = StatementSubstitution; ///
    substitutions = substitutionsJSON.map(function(substitutionJSON) {
        var _$json = substitutionJSON, substitution = Substitution.fromJSON(_$json, context);
        return substitution;
    });
    return substitutions;
}
function metavariablesFromJSON(json, context) {
    var metavariables = json.metavariables;
    var Metavariable = _structure.default.Metavariable, metavariablesJSON = metavariables; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHN0cnVjdHVyZSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0ZXJtIH0gPSBqc29uO1xuXG4gIGNvbnN0IHRlcm1KU09OID0gdGVybTsgIC8vL1xuXG4gIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gc3RydWN0dXJlO1xuXG4gIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSB0eXBlOyAgLy8vXG5cbiAgICBjb25zdCB7IG5hbWUsIHByZWZpeE5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gKHByZWZpeE5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhOYW1lfSR7bmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOyAvLy9cblxuICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSBtZXRhVHlwZTsgIC8vL1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnQgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIGpzb24gPSBzdGF0ZW1lbnRKU09OOyAvLy9cblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGRlZHVjdGlvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gc3RydWN0dXJlLFxuICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uOyAgLy8vXG5cbiAganNvbiA9IGRlZHVjdGlvbkpTT047ICAvLy9cblxuICBkZWR1Y3Rpb24gPSBEZWR1Y3Rpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc2lnbmF0dXJlID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc2lnbmF0dXJlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTaWduYXR1cmUgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICBzaWduYXR1cmVKU09OID0gc2lnbmF0dXJlOyAgLy8vXG5cbiAgICBqc29uID0gc2lnbmF0dXJlSlNPTjsgLy8vXG5cbiAgICBzaWduYXR1cmUgPSBTaWduYXR1cmUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyByZWZlcmVuY2UgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSByZWZlcmVuY2VKU09OOyAvLy9cblxuICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGUgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb2NlZHVyZUNhbGwgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbEpTT04gPSBwcm9jZWR1cmVDYWxsOyAgLy8vXG5cbiAgICBqc29uID0gcHJvY2VkdXJlQ2FsbEpTT047IC8vL1xuXG4gICAgcHJvY2VkdXJlQ2FsbCA9IFByb2NlZHVyZUNhbGwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZUpTT04gPSBwcm9jZWR1cmVSZWZlcmVuY2U7ICAvLy9cblxuICBqc29uID0gcHJvY2VkdXJlUmVmZXJlbmNlSlNPTjsgIC8vL1xuXG4gIHByb2NlZHVyZVJlZmVyZW5jZSA9IFByb2NlZHVyZVJlZmVyZW5jZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tSlNPTihqc29uLCB0eXBlcywgY29udGV4dCkge1xuICBjb25zdCB7IHR5cGVzOiB0eXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlIH0gPSBzdHJ1Y3R1cmU7XG5cbiAgdHlwZXNKU09OLmZvckVhY2goKHR5cGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0ZXJtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRlcm0gfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgdGVybXNKU09OID0gdGVybXM7IC8vL1xuXG4gIHRlcm1zID0gdGVybXNKU09OLm1hcCgodGVybUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcnVsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSdWxlIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzOyAvLy9cblxuICBydWxlcyA9IHJ1bGVzSlNPTi5tYXAoKHJ1bGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHJ1bGVKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGxhYmVsIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgbGFiZWxKU09OID0gbGFiZWw7ICAvLy9cblxuICBqc29uID0gbGFiZWxKU09OOyAvLy9cblxuICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZnJhbWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRnJhbWUgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lczsgLy8vXG5cbiAgZnJhbWVzID0gZnJhbWVzSlNPTi5tYXAoKGZyYW1lSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBmcmFtZUpTT04sICAvLy9cbiAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gc3RydWN0dXJlLFxuICAgICAgICBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGF4aW9tcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEF4aW9tIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgIGF4aW9tc0pTT04gPSBheGlvbXM7IC8vL1xuXG4gIGF4aW9tcyA9IGF4aW9tc0pTT04ubWFwKChheGlvbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXhpb21KU09OLCAgLy8vXG4gICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByZW1pc2UgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUaGVvcmVtIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgIHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zOyAvLy9cblxuICB0aGVvcmVtcyA9IHRoZW9yZW1zSlNPTi5tYXAoKHRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gc3RydWN0dXJlLFxuICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzOyAvLy9cblxuICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLm1hcCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzOyAvLy9cblxuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04ubWFwKChwcm9wZXJ0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJvcGVydHlKU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IHN1cGVyVHlwZXM6IHN1cGVyVHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTi5tYXAoKHN1cGVyVHlwZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIHsgbmFtZSwgcHJlZml4TmFtZSB9ID0ganNvbixcbiAgICAgICAgICAgICAgICBub21pbmFsU3VwZXJUeXBlTmFtZSA9IChwcmVmaXhOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeE5hbWV9JHtuYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLCAvLy9cbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBoeXBvdGhlc2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgSHlwb3RoZXNpcyB9ID0gc3RydWN0dXJlLFxuICAgICAgICBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXM7ICAvLy9cblxuICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0pTT04ubWFwKChoeXBvdGhlc2lzSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBoeXBvdGhlc2lzSlNPTiwgLy8vXG4gICAgICAgICAgaHlwb3RoZXNpcyA9IEh5cG90aGVzaXMuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwYXJhbWV0ZXJzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgIHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVyczsgLy8vXG5cbiAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNKU09OLm1hcCgocGFyYW1ldGVySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwYXJhbWV0ZXJKU09OLCAgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uamVjdHVyZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzOyAvLy9cblxuICBjb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzSlNPTi5tYXAoKGNvbmplY3R1cmVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbWJpbmF0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gc3RydWN0dXJlLFxuICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9yczsgLy8vXG5cbiAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04ubWFwKChjb21iaW5hdG9ySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb21iaW5hdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZVByZWZpeGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZVByZWZpeCB9ID0gc3RydWN0dXJlLFxuICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzOyAvLy9cblxuICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLm1hcCgodHlwZVByZWZpeEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZVByZWZpeEpTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ID0gVHlwZVByZWZpeC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25zdHJ1Y3RvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gc3RydWN0dXJlLFxuICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzOyAvLy9cblxuICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLm1hcCgoY29uc3RydWN0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF0aGVvcmVtIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgIG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXM7IC8vL1xuXG4gIG1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtc0pTT04ubWFwKChtZXRhdGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBNZXRhdGhlb3JlbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3VwcG9zaXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3Vic3RpdHV0aW9ucyA9IFtdIH0gPSBqc29uOyAgLy8vXG5cbiAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLCAgLy8vXG4gICAgICAgIFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gU3Vic3RpdHV0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlczsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNKU09OLm1hcCgobWV0YXZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVRvVGVybUpTT04odGVybSkge1xuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgcmV0dXJuIHRlcm1KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVRvVHlwZUpTT04odHlwZSkge1xuICBjb25zdCB0eXBlSlNPTiA9ICh0eXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0eXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsVG9MYWJlbEpTT04obGFiZWwpIHtcbiAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgcmV0dXJuIGxhYmVsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04obWV0YVR5cGUpIHtcbiAgY29uc3QgbWV0YVR5cGVKU09OID0gKG1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgcmV0dXJuIG1ldGFUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTihyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZS50b0pTT04oKTtcblxuICByZXR1cm4gcmVmZXJlbmNlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTihzdGF0ZW1lbnQpIHtcbiAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IChzdGF0ZW1lbnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50LnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKGRlZHVjdGlvbikge1xuICBjb25zdCBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHNpZ25hdHVyZSkge1xuICBjb25zdCBzaWduYXR1cmVKU09OID0gKHNpZ25hdHVyZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTihjb25jbHVzaW9uKSB7XG4gIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbi50b0pTT04oKTtcblxuICByZXR1cm4gY29uY2x1c2lvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04obWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTihwcm9jZWR1cmVDYWxsKSB7XG4gIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gKHByb2NlZHVyZUNhbGwgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZHVyZUNhbGwudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTihwcm9jZWR1cmVSZWZlcmVuY2UpIHtcbiAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlSlNPTiA9IHByb2NlZHVyZVJlZmVyZW5jZS50b0pTT04oKTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzVG9UeXBlc0pTT04odHlwZXMpIHtcbiAgY29uc3QgdHlwZXNKU09OID0gdHlwZXMubWFwKCh0eXBlKSA9PiB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTigpO1xuXG4gICAgdHlwZSA9IHR5cGVKU09OOyAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9KTtcblxuICByZXR1cm4gdHlwZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcykge1xuICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtcy5tYXAoKHRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgICB0ZXJtID0gdGVybUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc1RvUnVsZXNKU09OKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVzSlNPTiA9IHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpIHtcbiAgY29uc3QgZnJhbWVzSlNPTiA9IGZyYW1lcy5tYXAoKGZyYW1lKSA9PiB7XG4gICAgY29uc3QgZnJhbWVKU09OID0gZnJhbWUudG9KU09OKCk7XG5cbiAgICBmcmFtZSA9IGZyYW1lSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH0pO1xuXG4gIHJldHVybiBmcmFtZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9MYWJlbHNKU09OKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgIHJldHVybiBsYWJlbEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zVG9BeGlvbXNKU09OKGF4aW9tcykge1xuICBjb25zdCBheGlvbXNKU09OID0gYXhpb21zLm1hcCgoYXhpb20pID0+IHtcbiAgICBjb25zdCBheGlvbUpTT04gPSBheGlvbS50b0pTT04oKTtcblxuICAgIGF4aW9tID0gYXhpb21KU09OOyAvLy9cblxuICAgIHJldHVybiBheGlvbTtcbiAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHByZW1pc2VzKSB7XG4gIGNvbnN0IHByZW1pc2VzSlNPTiA9IHByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS50b0pTT04oKTtcblxuICAgIHJldHVybiBwcmVtaXNlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1zVG9UaGVvcmVtc0pTT04odGhlb3JlbXMpIHtcbiAgY29uc3QgdGhlb3JlbXNKU09OID0gdGhlb3JlbXMubWFwKCh0aGVvcmVtKSA9PiB7XG4gICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgdGhlb3JlbSA9IHRoZW9yZW1KU09OOyAvLy9cblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OKHZhcmlhYmxlcykge1xuICBjb25zdCB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzLm1hcCgodmFyaWFibGUpID0+IHtcbiAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04oKTtcblxuICAgIHZhcmlhYmxlID0gdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04oaHlwb3RoZXNlcykge1xuICBjb25zdCBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXMubWFwKChoeXBvdGhlc2lzKSA9PiB7XG4gICAgY29uc3QgaHlwb3RoZXNpc0pTT04gPSBoeXBvdGhlc2lzLnRvSlNPTigpO1xuXG4gICAgaHlwb3RoZXNpcyA9IGh5cG90aGVzaXNKU09OOyAvLy9cblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9KTtcblxuICByZXR1cm4gaHlwb3RoZXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTihzdXBlclR5cGVzKSB7XG4gIGNvbnN0IHN1cGVyVHlwZXNKU09OID0gc3VwZXJUeXBlcy5tYXAoKHN1cGVyVHlwZSkgPT4ge1xuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSBzdXBlclR5cGUudG9KU09OKCk7XG5cbiAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVKU09OOyAvLy9cblxuICAgIHJldHVybiBzdXBlclR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVySlNPTiA9IHBhcmFtZXRlci50b0pTT04oKTtcblxuICAgIHBhcmFtZXRlciA9IHBhcmFtZXRlckpTT047ICAvLy9cblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzLm1hcCgocHJvcGVydHkpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eUpTT04gPSBwcm9wZXJ0eS50b0pTT04oKTtcblxuICAgIHByb3BlcnR5ID0gcHJvcGVydHlKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTih0eXBlUHJlZml4ZXMpIHtcbiAgY29uc3QgdHlwZVByZWZpeGVzSlNPTiA9IHR5cGVQcmVmaXhlcy5tYXAoKHR5cGVQcmVmaXgpID0+IHtcbiAgICBjb25zdCB0eXBlUHJlZml4SlNPTiA9IHR5cGVQcmVmaXgudG9KU09OKCk7XG5cbiAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeEpTT047IC8vL1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlUHJlZml4ZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTihjb25qZWN0dXJlcykge1xuICBjb25zdCBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICBjb25zdCBjb25qZWN0dXJlSlNPTiA9IGNvbmplY3R1cmUudG9KU09OKCk7XG5cbiAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OKGNvbWJpbmF0b3JzKSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JKU09OID0gY29tYmluYXRvci50b0pTT04oKTtcblxuICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9ySlNPTjsgLy8vXG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTihzdXBwb3NpdGlvbnMpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25KU09OID0gc3VwcG9zaXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTihjb25zdHJ1Y3RvcnMpIHtcbiAgY29uc3QgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9ycy5tYXAoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgY29uc3QgY29uc3RydWN0b3JKU09OID0gY29uc3RydWN0b3IudG9KU09OKCk7XG5cbiAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9ySlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTihtZXRhdGhlb3JlbXMpIHtcbiAgY29uc3QgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtcy5tYXAoKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1KU09OID0gbWV0YXRoZW9yZW0udG9KU09OKCk7XG5cbiAgICBtZXRhdGhlb3JlbSA9IG1ldGF0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04oc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnMubWFwU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25KU09OID0gc3Vic3RpdHV0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKG1ldGF2YXJpYWJsZXMpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzLm1hcCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04oKTtcblxuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT047ICAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzSlNPTjtcbn1cbiJdLCJuYW1lcyI6WyJheGlvbXNGcm9tSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJmcmFtZXNGcm9tSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsImh5cG90aGVzZXNGcm9tSlNPTiIsImh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OIiwibGFiZWxGcm9tSlNPTiIsImxhYmVsVG9MYWJlbEpTT04iLCJsYWJlbHNGcm9tSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImxlbW1hc0Zyb21Ob3RoaW5nIiwibWV0YUxlbW1hc0Zyb21Ob3RoaW5nIiwibWV0YVR5cGVGcm9tSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJtZXRhdGhlb3JlbXNGcm9tSlNPTiIsIm1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwibWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04iLCJwYXJhbWV0ZXJzRnJvbUpTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwicHJvY2VkdXJlQ2FsbEZyb21KU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInByb3BlcnRpZXNGcm9tSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwicmVmZXJlbmNlRnJvbUpTT04iLCJyZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04iLCJydWxlc0Zyb21KU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsInNpZ25hdHVyZUZyb21KU09OIiwic2lnbmF0dXJlVG9TaWduYXR1cmVKU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiIsInN1cGVyVHlwZXNGcm9tSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJ0ZXJtRnJvbUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsInRlcm1zRnJvbUpTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwidGhlb3JlbXNGcm9tSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ0eXBlRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNGcm9tSlNPTiIsInR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTiIsInR5cGVUb1R5cGVKU09OIiwidHlwZXNGcm9tSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImpzb24iLCJjb250ZXh0IiwidGVybSIsInRlcm1KU09OIiwiVGVybSIsInN0cnVjdHVyZSIsImZyb21KU09OIiwidHlwZSIsIm5hbWUiLCJwcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJzdGF0ZW1lbnQiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRKU09OIiwiZGVkdWN0aW9uIiwiRGVkdWN0aW9uIiwiZGVkdWN0aW9uSlNPTiIsInNpZ25hdHVyZSIsIlNpZ25hdHVyZSIsInNpZ25hdHVyZUpTT04iLCJyZWZlcmVuY2UiLCJSZWZlcmVuY2UiLCJyZWZlcmVuY2VKU09OIiwiY29uY2x1c2lvbiIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uSlNPTiIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJwcm9jZWR1cmVDYWxsIiwiUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInR5cGVzIiwidHlwZXNKU09OIiwiVHlwZSIsImZvckVhY2giLCJ0eXBlSlNPTiIsInB1c2giLCJ0ZXJtcyIsInRlcm1zSlNPTiIsIm1hcCIsInJ1bGVzIiwiUnVsZSIsInJ1bGVzSlNPTiIsInJ1bGVKU09OIiwicnVsZSIsImxhYmVsIiwiTGFiZWwiLCJsYWJlbEpTT04iLCJmcmFtZXMiLCJGcmFtZSIsImZyYW1lc0pTT04iLCJmcmFtZUpTT04iLCJmcmFtZSIsImxhYmVscyIsImxhYmVsc0pTT04iLCJheGlvbXMiLCJBeGlvbSIsImF4aW9tc0pTT04iLCJheGlvbUpTT04iLCJheGlvbSIsInByZW1pc2VzIiwiUHJlbWlzZSIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwicHJlbWlzZSIsInRoZW9yZW1zIiwiVGhlb3JlbSIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1KU09OIiwidGhlb3JlbSIsInZhcmlhYmxlcyIsIlZhcmlhYmxlIiwidmFyaWFibGVzSlNPTiIsInZhcmlhYmxlSlNPTiIsInZhcmlhYmxlIiwicHJvcGVydGllcyIsIlByb3BlcnR5IiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0eUpTT04iLCJwcm9wZXJ0eSIsInN1cGVyVHlwZXMiLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZUpTT04iLCJub21pbmFsU3VwZXJUeXBlTmFtZSIsInN1cGVyVHlwZSIsImh5cG90aGVzZXMiLCJIeXBvdGhlc2lzIiwiaHlwb3RoZXNlc0pTT04iLCJoeXBvdGhlc2lzSlNPTiIsImh5cG90aGVzaXMiLCJwYXJhbWV0ZXJzIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJKU09OIiwicGFyYW1ldGVyIiwiY29uamVjdHVyZXMiLCJDb25qZWN0dXJlIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZUpTT04iLCJjb25qZWN0dXJlIiwiY29tYmluYXRvcnMiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvckpTT04iLCJjb21iaW5hdG9yIiwidHlwZVByZWZpeGVzIiwiVHlwZVByZWZpeCIsInR5cGVQcmVmaXhlc0pTT04iLCJ0eXBlUHJlZml4SlNPTiIsInR5cGVQcmVmaXgiLCJjb25zdHJ1Y3RvcnMiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJjb25zdHJ1Y3RvciIsIm1ldGF0aGVvcmVtcyIsIk1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtSlNPTiIsIm1ldGF0aGVvcmVtIiwic3VwcG9zaXRpb25zIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25KU09OIiwic3VwcG9zaXRpb24iLCJzdWJzdGl0dXRpb25zIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uc0pTT04iLCJTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25KU09OIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXNKU09OIiwibGVtbWFzIiwibWV0YUxlbW1hcyIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1hcFN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBMFBnQkE7ZUFBQUE7O1FBeVpBQztlQUFBQTs7UUF4UUFDO2VBQUFBOztRQThYQUM7ZUFBQUE7O1FBL3BCQUM7ZUFBQUE7O1FBcWRBQztlQUFBQTs7UUFwTUFDO2VBQUFBOztRQWtZQUM7ZUFBQUE7O1FBbFZBQztlQUFBQTs7UUFvWEFDO2VBQUFBOztRQTl0QkFDO2VBQUFBOztRQWdmQUM7ZUFBQUE7O1FBdlZBQztlQUFBQTs7UUFtYUFDO2VBQUFBOztRQWxTQUM7ZUFBQUE7O1FBc1dBQztlQUFBQTs7UUFwZkFDO2VBQUFBOztRQXlVQUM7ZUFBQUE7O1FBNVNBQztlQUFBQTs7UUErWkFDO2VBQUFBOztRQTdJQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOztRQS9kQUM7ZUFBQUE7O1FBeWZBQztlQUFBQTs7UUFqR0FDO2VBQUFBOztRQWdYQUM7ZUFBQUE7O1FBcHJCQUM7ZUFBQUE7O1FBOGNBQztlQUFBQTs7UUF6RkFDO2VBQUFBOztRQXFWQUM7ZUFBQUE7O1FBdGRBQztlQUFBQTs7UUE4V0FDO2VBQUFBOztRQS9jQUM7ZUFBQUE7O1FBcVpBQztlQUFBQTs7UUEzaEJBQztlQUFBQTs7UUF1Y0FDO2VB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