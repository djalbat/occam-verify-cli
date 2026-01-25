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
var _occamfurtle = require("occam-furtle");
var _metaTypes = require("../metaTypes");
function termFromJSON(json, context) {
    var term = json.term;
    var termJSON = term; ///
    json = termJSON; ///
    var Term = _occamfurtle.elements.Term;
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
        metaType = (0, _metaTypes.findMetaTypeByMetaTypeName)(metaTypeName);
    }
    return metaType;
}
function statementFromJSON(json, context) {
    var _json_statement = json.statement, statement = _json_statement === void 0 ? null : _json_statement;
    if (statement !== null) {
        var Statement = _occamfurtle.elements.Statement, statementJSON = statement; ///
        json = statementJSON; ///
        statement = Statement.fromJSON(json, context);
    }
    return statement;
}
function deductionFromJSON(json, context) {
    var deduction = json.deduction;
    var Deduction = _occamfurtle.elements.Deduction, deductionJSON = deduction; ///
    json = deductionJSON; ///
    deduction = Deduction.fromJSON(json, context);
    return deduction;
}
function signatureFromJSON(json, context) {
    var _json_signature = json.signature, signature = _json_signature === void 0 ? null : _json_signature;
    if (signature !== null) {
        var Signature = _occamfurtle.elements.Signature, signatureJSON = signature; ///
        json = signatureJSON; ///
        signature = Signature.fromJSON(json, context);
    }
    return signature;
}
function referenceFromJSON(json, context) {
    var reference = json.reference;
    var Reference = _occamfurtle.elements.Reference, referenceJSON = reference; ///
    json = referenceJSON; ///
    reference = Reference.fromJSON(json, context);
    return reference;
}
function conclusionFromJSON(json, context) {
    var conclusion = json.conclusion;
    var Conclusion = _occamfurtle.elements.Conclusion, conclusionJSON = conclusion; ///
    json = conclusionJSON; ///
    conclusion = Conclusion.fromJSON(json, context);
    return conclusion;
}
function metavariableFromJSON(json, context) {
    var metavariable = json.metavariable;
    var Metavariable = _occamfurtle.elements.Metavariable, metavariableJSON = metavariable; ///
    json = metavariableJSON; ///
    metavariable = Metavariable.fromJSON(json, context);
    return metavariable;
}
function procedureCallFromJSON(json, context) {
    var _json_procedureCall = json.procedureCall, procedureCall = _json_procedureCall === void 0 ? null : _json_procedureCall;
    if (procedureCall !== null) {
        var ProcedureCall = _occamfurtle.elements.ProcedureCall, procedureCallJSON = procedureCall; ///
        json = procedureCallJSON; ///
        procedureCall = ProcedureCall.fromJSON(json, context);
    }
    return procedureCall;
}
function procedureReferenceFromJSON(json, context) {
    var procedureReference = json.procedureReference;
    var ProcedureReference = _occamfurtle.elements.ProcedureReference, procedureReferenceJSON = procedureReference; ///
    json = procedureReferenceJSON; ///
    procedureReference = ProcedureReference.fromJSON(json, context);
    return procedureReference;
}
function typesFromJSON(json, types, context) {
    var typesJSON = json.types;
    var Type = _occamfurtle.elements.Type;
    typesJSON.forEach(function(typeJSON) {
        var _$json = typeJSON, type = Type.fromJSON(_$json, context);
        types.push(type);
    });
}
function termsFromJSON(json, context) {
    var terms = json.terms;
    var Term = _occamfurtle.elements.Term, termsJSON = terms; ///
    terms = termsJSON.map(function(termJSON) {
        var _$json = termJSON, term = Term.fromJSON(_$json, context);
        return term;
    });
    return terms;
}
function rulesFromJSON(json, context) {
    var rules = json.rules;
    var Rule = _occamfurtle.elements.Rule, rulesJSON = rules; ///
    rules = rulesJSON.map(function(ruleJSON) {
        var _$json = ruleJSON, rule = Rule.fromJSON(_$json, context);
        return rule;
    });
    return rules;
}
function labelFromJSON(json, context) {
    var label = json.label;
    var Label = _occamfurtle.elements.Label, labelJSON = label; ///
    json = labelJSON; ///
    label = Label.fromJSON(json, context);
    return label;
}
function framesFromJSON(json, context) {
    var frames = json.frames;
    var Frame = _occamfurtle.elements.Frame, framesJSON = frames; ///
    frames = framesJSON.map(function(frameJSON) {
        var _$json = frameJSON, frame = Frame.fromJSON(_$json, context);
        return frame;
    });
    return frames;
}
function labelsFromJSON(json, context) {
    var labels = json.labels;
    var Label = _occamfurtle.elements.Label, labelsJSON = labels; ///
    labels = labelsJSON.map(function(labelJSON) {
        var _$json = labelJSON, label = Label.fromJSON(_$json, context);
        return label;
    });
    return labels;
}
function axiomsFromJSON(json, context) {
    var axioms = json.axioms;
    var Axiom = _occamfurtle.elements.Axiom, axiomsJSON = axioms; ///
    axioms = axiomsJSON.map(function(axiomJSON) {
        var _$json = axiomJSON, axiom = Axiom.fromJSON(_$json, context);
        return axiom;
    });
    return axioms;
}
function premisesFromJSON(json, context) {
    var premises = json.premises;
    var Premise = _occamfurtle.elements.Premise, premisesJSON = premises; ///
    premises = premisesJSON.map(function(premiseJSON) {
        var _$json = premiseJSON, premise = Premise.fromJSON(_$json, context);
        return premise;
    });
    return premises;
}
function theoremsFromJSON(json, context) {
    var theorems = json.theorems;
    var Theorem = _occamfurtle.elements.Theorem, theoremsJSON = theorems; ///
    theorems = theoremsJSON.map(function(theoremJSON) {
        var _$json = theoremJSON, theorem = Theorem.fromJSON(_$json, context);
        return theorem;
    });
    return theorems;
}
function variablesFromJSON(json, context) {
    var variables = json.variables;
    var Variable = _occamfurtle.elements.Variable, variablesJSON = variables; ///
    variables = variablesJSON.map(function(variableJSON) {
        var _$json = variableJSON, variable = Variable.fromJSON(_$json, context);
        return variable;
    });
    return variables;
}
function propertiesFromJSON(json, context) {
    var properties = json.properties;
    var Property = _occamfurtle.elements.Property, propertiesJSON = properties; ///
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
    var Hypothesis = _occamfurtle.elements.Hypothesis, hypothesesJSON = hypotheses; ///
    hypotheses = hypothesesJSON.map(function(hypothesisJSON) {
        var _$json = hypothesisJSON, hypothesis = Hypothesis.fromJSON(_$json, context);
        return hypothesis;
    });
    return hypotheses;
}
function parametersFromJSON(json, context) {
    var parameters = json.parameters;
    var Parameter = _occamfurtle.elements.Parameter, parametersJSON = parameters; ///
    parameters = parametersJSON.map(function(parameterJSON) {
        var _$json = parameterJSON, parameter = Parameter.fromJSON(_$json, context);
        return parameter;
    });
    return parameters;
}
function conjecturesFromJSON(json, context) {
    var conjectures = json.conjectures;
    var Conjecture = _occamfurtle.elements.Conjecture, conjecturesJSON = conjectures; ///
    conjectures = conjecturesJSON.map(function(conjectureJSON) {
        var _$json = conjectureJSON, conjecture = Conjecture.fromJSON(_$json, context);
        return conjecture;
    });
    return conjectures;
}
function combinatorsFromJSON(json, context) {
    var combinators = json.combinators;
    var Combinator = _occamfurtle.elements.Combinator, combinatorsJSON = combinators; ///
    combinators = combinatorsJSON.map(function(combinatorJSON) {
        var _$json = combinatorJSON, combinator = Combinator.fromJSON(_$json, context);
        return combinator;
    });
    return combinators;
}
function typePrefixesFromJSON(json, context) {
    var typePrefixes = json.typePrefixes;
    var TypePrefix = _occamfurtle.elements.TypePrefix, typePrefixesJSON = typePrefixes; ///
    typePrefixes = typePrefixesJSON.map(function(typePrefixJSON) {
        var _$json = typePrefixJSON, typePrefix = TypePrefix.fromJSON(_$json, context);
        return typePrefix;
    });
    return typePrefixes;
}
function constructorsFromJSON(json, context) {
    var constructors = json.constructors;
    var Constructor = _occamfurtle.elements.Constructor, constructorsJSON = constructors; ///
    constructors = constructorsJSON.map(function(constructorJSON) {
        var _$json = constructorJSON, constructor = Constructor.fromJSON(_$json, context);
        return constructor;
    });
    return constructors;
}
function metatheoremsFromJSON(json, context) {
    var metatheorems = json.metatheorems;
    var Metatheorem = _occamfurtle.elements.Metatheorem, metatheoremsJSON = metatheorems; ///
    metatheorems = metatheoremsJSON.map(function(metatheoremJSON) {
        var _$json = metatheoremJSON, metatheorem = Metatheorem.fromJSON(_$json, context);
        return metatheorem;
    });
    return metatheorems;
}
function suppositionsFromJSON(json, context) {
    var suppositions = json.suppositions;
    var Supposition = _occamfurtle.elements.Supposition, suppositionsJSON = suppositions; ///
    suppositions = suppositionsJSON.map(function(suppositionJSON) {
        var _$json = suppositionJSON, supposition = Supposition.fromJSON(_$json, context);
        return supposition;
    });
    return suppositions;
}
function substitutionsFromJSON(json, context) {
    var _json_substitutions = json.substitutions, substitutions = _json_substitutions === void 0 ? [] : _json_substitutions; ///
    var StatementSubstitution = _occamfurtle.elements.StatementSubstitution, substitutionsJSON = substitutions, Substitution = StatementSubstitution; ///
    substitutions = substitutionsJSON.map(function(substitutionJSON) {
        var _$json = substitutionJSON, substitution = Substitution.fromJSON(_$json, context);
        return substitution;
    });
    return substitutions;
}
function metavariablesFromJSON(json, context) {
    var metavariables = json.metavariables;
    var Metavariable = _occamfurtle.elements.Metavariable, metavariablesJSON = metavariables; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZWxlbWVudHMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCB7IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGVybSB9ID0ganNvbjtcblxuICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICBqc29uID0gdGVybUpTT047ICAvLy9cblxuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzO1xuXG4gIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSB0eXBlOyAgLy8vXG5cbiAgICBjb25zdCB7IG5hbWUsIHByZWZpeE5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gKHByZWZpeE5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhOYW1lfSR7bmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOyAvLy9cblxuICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSBtZXRhVHlwZTsgIC8vL1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50ID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIGpzb24gPSBzdGF0ZW1lbnRKU09OOyAvLy9cblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGRlZHVjdGlvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb247ICAvLy9cblxuICBqc29uID0gZGVkdWN0aW9uSlNPTjsgIC8vL1xuXG4gIGRlZHVjdGlvbiA9IERlZHVjdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzaWduYXR1cmUgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAganNvbiA9IHNpZ25hdHVyZUpTT047IC8vL1xuXG4gICAgc2lnbmF0dXJlID0gU2lnbmF0dXJlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSByZWZlcmVuY2VKU09OOyAvLy9cblxuICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGU7ICAvLy9cblxuICBqc29uID0gbWV0YXZhcmlhYmxlSlNPTjsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVDYWxsID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbEpTT04gPSBwcm9jZWR1cmVDYWxsOyAgLy8vXG5cbiAgICBqc29uID0gcHJvY2VkdXJlQ2FsbEpTT047IC8vL1xuXG4gICAgcHJvY2VkdXJlQ2FsbCA9IFByb2NlZHVyZUNhbGwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlSlNPTiA9IHByb2NlZHVyZVJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSBwcm9jZWR1cmVSZWZlcmVuY2VKU09OOyAgLy8vXG5cbiAgcHJvY2VkdXJlUmVmZXJlbmNlID0gUHJvY2VkdXJlUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc0Zyb21KU09OKGpzb24sIHR5cGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgdHlwZXM6IHR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGUgfSA9IGVsZW1lbnRzO1xuXG4gIHR5cGVzSlNPTi5mb3JFYWNoKCh0eXBlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdHlwZXMucHVzaCh0eXBlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGVybXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGVybXNKU09OID0gdGVybXM7IC8vL1xuXG4gIHRlcm1zID0gdGVybXNKU09OLm1hcCgodGVybUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcnVsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSdWxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcnVsZXNKU09OID0gcnVsZXM7IC8vL1xuXG4gIHJ1bGVzID0gcnVsZXNKU09OLm1hcCgocnVsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBydWxlO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbGFiZWwgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxhYmVsSlNPTiA9IGxhYmVsOyAgLy8vXG5cbiAganNvbiA9IGxhYmVsSlNPTjsgLy8vXG5cbiAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGZyYW1lcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEZyYW1lIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lczsgLy8vXG5cbiAgZnJhbWVzID0gZnJhbWVzSlNPTi5tYXAoKGZyYW1lSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBmcmFtZUpTT04sICAvLy9cbiAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXhpb21zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXhpb20gfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbXNKU09OID0gYXhpb21zOyAvLy9cblxuICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUaGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuXG4gIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLm1hcCgodGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvcGVydGllcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByb3BlcnR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzOyAvLy9cblxuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04ubWFwKChwcm9wZXJ0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJvcGVydHlKU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IHN1cGVyVHlwZXM6IHN1cGVyVHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTi5tYXAoKHN1cGVyVHlwZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIHsgbmFtZSwgcHJlZml4TmFtZSB9ID0ganNvbixcbiAgICAgICAgICAgICAgICBub21pbmFsU3VwZXJUeXBlTmFtZSA9IChwcmVmaXhOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeE5hbWV9JHtuYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLCAvLy9cbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBoeXBvdGhlc2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgSHlwb3RoZXNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlczsgIC8vL1xuXG4gIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzSlNPTi5tYXAoKGh5cG90aGVzaXNKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGh5cG90aGVzaXNKU09OLCAvLy9cbiAgICAgICAgICBoeXBvdGhlc2lzID0gSHlwb3RoZXNpcy5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9KTtcblxuICByZXR1cm4gaHlwb3RoZXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHBhcmFtZXRlcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnM7IC8vL1xuXG4gIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzSlNPTi5tYXAoKHBhcmFtZXRlckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcGFyYW1ldGVySlNPTiwgIC8vL1xuICAgICAgICAgIHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbmplY3R1cmVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzOyAvLy9cblxuICBjb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzSlNPTi5tYXAoKGNvbmplY3R1cmVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbWJpbmF0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzOyAvLy9cblxuICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTi5tYXAoKGNvbWJpbmF0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0eXBlUHJlZml4ZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZVByZWZpeGVzSlNPTiA9IHR5cGVQcmVmaXhlczsgLy8vXG5cbiAgdHlwZVByZWZpeGVzID0gdHlwZVByZWZpeGVzSlNPTi5tYXAoKHR5cGVQcmVmaXhKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHR5cGVQcmVmaXhKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeCA9IFR5cGVQcmVmaXguZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uc3RydWN0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzOyAvLy9cblxuICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLm1hcCgoY29uc3RydWN0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF0aGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtczsgLy8vXG5cbiAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTi5tYXAoKG1ldGF0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdXBwb3NpdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN1YnN0aXR1dGlvbnMgPSBbXSB9ID0ganNvbjsgIC8vL1xuXG4gIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLCAgLy8vXG4gICAgICAgIFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gU3Vic3RpdHV0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzOyAvLy9cblxuICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT04ubWFwKChtZXRhdmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICByZXR1cm4gbGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgcmV0dXJuIG1ldGFMZW1tYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtVG9UZXJtSlNPTih0ZXJtKSB7XG4gIGNvbnN0IHRlcm1KU09OID0gdGVybS50b0pTT04oKTtcblxuICByZXR1cm4gdGVybUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlVG9UeXBlSlNPTih0eXBlKSB7XG4gIGNvbnN0IHR5cGVKU09OID0gKHR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxUb0xhYmVsSlNPTihsYWJlbCkge1xuICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICByZXR1cm4gbGFiZWxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVUb01ldGFUeXBlSlNPTihtZXRhVHlwZSkge1xuICBjb25zdCBtZXRhVHlwZUpTT04gPSAobWV0YVR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhVHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICByZXR1cm4gbWV0YVR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlVG9SZWZlcmVuY2VKU09OKHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gIHJldHVybiByZWZlcmVuY2VKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHN0YXRlbWVudCkge1xuICBjb25zdCBzdGF0ZW1lbnRKU09OID0gKHN0YXRlbWVudCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnQudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHN0YXRlbWVudEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04oZGVkdWN0aW9uKSB7XG4gIGNvbnN0IGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04oc2lnbmF0dXJlKSB7XG4gIGNvbnN0IHNpZ25hdHVyZUpTT04gPSAoc2lnbmF0dXJlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gc2lnbmF0dXJlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKGNvbmNsdXNpb24pIHtcbiAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTihtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04oKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OKHByb2NlZHVyZUNhbGwpIHtcbiAgY29uc3QgcHJvY2VkdXJlQ2FsbEpTT04gPSAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbC50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OKHByb2NlZHVyZVJlZmVyZW5jZSkge1xuICBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2VKU09OID0gcHJvY2VkdXJlUmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2VKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNUb1R5cGVzSlNPTih0eXBlcykge1xuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc1RvVGVybXNKU09OKHRlcm1zKSB7XG4gIGNvbnN0IHRlcm1zSlNPTiA9IHRlcm1zLm1hcCgodGVybSkgPT4ge1xuICAgIGNvbnN0IHRlcm1KU09OID0gdGVybS50b0pTT04oKTtcblxuICAgIHRlcm0gPSB0ZXJtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzVG9SdWxlc0pTT04ocnVsZXMpIHtcbiAgY29uc3QgcnVsZXNKU09OID0gcnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTigpO1xuXG4gICAgcnVsZSA9IHJ1bGVKU09OOyAvLy9cblxuICAgIHJldHVybiBydWxlO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcykge1xuICBjb25zdCBmcmFtZXNKU09OID0gZnJhbWVzLm1hcCgoZnJhbWUpID0+IHtcbiAgICBjb25zdCBmcmFtZUpTT04gPSBmcmFtZS50b0pTT04oKTtcblxuICAgIGZyYW1lID0gZnJhbWVKU09OOyAvLy9cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYW1lc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNUb0xhYmVsc0pTT04obGFiZWxzKSB7XG4gIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVsc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNUb0F4aW9tc0pTT04oYXhpb21zKSB7XG4gIGNvbnN0IGF4aW9tc0pTT04gPSBheGlvbXMubWFwKChheGlvbSkgPT4ge1xuICAgIGNvbnN0IGF4aW9tSlNPTiA9IGF4aW9tLnRvSlNPTigpO1xuXG4gICAgYXhpb20gPSBheGlvbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzVG9QcmVtaXNlc0pTT04ocHJlbWlzZXMpIHtcbiAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNUb1RoZW9yZW1zSlNPTih0aGVvcmVtcykge1xuICBjb25zdCB0aGVvcmVtc0pTT04gPSB0aGVvcmVtcy5tYXAoKHRoZW9yZW0pID0+IHtcbiAgICBjb25zdCB0aGVvcmVtSlNPTiA9IHRoZW9yZW0udG9KU09OKCk7XG5cbiAgICB0aGVvcmVtID0gdGhlb3JlbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odmFyaWFibGVzKSB7XG4gIGNvbnN0IHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047ICAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTihoeXBvdGhlc2VzKSB7XG4gIGNvbnN0IGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlcy5tYXAoKGh5cG90aGVzaXMpID0+IHtcbiAgICBjb25zdCBoeXBvdGhlc2lzSlNPTiA9IGh5cG90aGVzaXMudG9KU09OKCk7XG5cbiAgICBoeXBvdGhlc2lzID0gaHlwb3RoZXNpc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHN1cGVyVHlwZXMpIHtcbiAgY29uc3Qgc3VwZXJUeXBlc0pTT04gPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZS50b0pTT04oKTtcblxuICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04ocGFyYW1ldGVycykge1xuICBjb25zdCBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnMubWFwKChwYXJhbWV0ZXIpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJKU09OID0gcGFyYW1ldGVyLnRvSlNPTigpO1xuXG4gICAgcGFyYW1ldGVyID0gcGFyYW1ldGVySlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04ocHJvcGVydGllcykge1xuICBjb25zdCBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXMubWFwKChwcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5SlNPTiA9IHByb3BlcnR5LnRvSlNPTigpO1xuXG4gICAgcHJvcGVydHkgPSBwcm9wZXJ0eUpTT047ICAvLy9cblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OKHR5cGVQcmVmaXhlcykge1xuICBjb25zdCB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzLm1hcCgodHlwZVByZWZpeCkgPT4ge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhKU09OID0gdHlwZVByZWZpeC50b0pTT04oKTtcblxuICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4SlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OKGNvbmplY3R1cmVzKSB7XG4gIGNvbnN0IGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzLm1hcCgoY29uamVjdHVyZSkgPT4ge1xuICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04oKTtcblxuICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04oY29tYmluYXRvcnMpIHtcbiAgY29uc3QgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnMubWFwKChjb21iaW5hdG9yKSA9PiB7XG4gICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTigpO1xuXG4gICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JKU09OOyAvLy9cblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKGNvbnN0cnVjdG9ycykge1xuICBjb25zdCBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKG1ldGF0aGVvcmVtcykge1xuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUpTT04gPSBtZXRhdGhlb3JlbS50b0pTT04oKTtcblxuICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1KU09OOyAvLy9cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTihzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucy5tYXBTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04obWV0YXZhcmlhYmxlcykge1xuICBjb25zdCBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXNKU09OO1xufVxuIl0sIm5hbWVzIjpbImF4aW9tc0Zyb21KU09OIiwiYXhpb21zVG9BeGlvbXNKU09OIiwiY29tYmluYXRvcnNGcm9tSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImNvbmplY3R1cmVzRnJvbUpTT04iLCJjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OIiwiY29uc3RydWN0b3JzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsImZyYW1lc0Zyb21KU09OIiwiZnJhbWVzVG9GcmFtZXNKU09OIiwiaHlwb3RoZXNlc0Zyb21KU09OIiwiaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04iLCJsYWJlbEZyb21KU09OIiwibGFiZWxUb0xhYmVsSlNPTiIsImxhYmVsc0Zyb21KU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhVHlwZUZyb21KU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJyZWZlcmVuY2VGcm9tSlNPTiIsInJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJydWxlc1RvUnVsZXNKU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwic3VwZXJUeXBlc0Zyb21KU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInRlcm1Gcm9tSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwidGVybXNGcm9tSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJ0aGVvcmVtc0Zyb21KU09OIiwidGhlb3JlbXNUb1RoZW9yZW1zSlNPTiIsInR5cGVGcm9tSlNPTiIsInR5cGVQcmVmaXhlc0Zyb21KU09OIiwidHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OIiwidHlwZVRvVHlwZUpTT04iLCJ0eXBlc0Zyb21KU09OIiwidHlwZXNUb1R5cGVzSlNPTiIsInZhcmlhYmxlc0Zyb21KU09OIiwidmFyaWFibGVzVG9WYXJpYWJsZXNKU09OIiwianNvbiIsImNvbnRleHQiLCJ0ZXJtIiwidGVybUpTT04iLCJUZXJtIiwiZWxlbWVudHMiLCJmcm9tSlNPTiIsInR5cGUiLCJuYW1lIiwicHJlZml4TmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJtZXRhVHlwZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwic3RhdGVtZW50IiwiU3RhdGVtZW50Iiwic3RhdGVtZW50SlNPTiIsImRlZHVjdGlvbiIsIkRlZHVjdGlvbiIsImRlZHVjdGlvbkpTT04iLCJzaWduYXR1cmUiLCJTaWduYXR1cmUiLCJzaWduYXR1cmVKU09OIiwicmVmZXJlbmNlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlSlNPTiIsImNvbmNsdXNpb24iLCJDb25jbHVzaW9uIiwiY29uY2x1c2lvbkpTT04iLCJtZXRhdmFyaWFibGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVKU09OIiwicHJvY2VkdXJlQ2FsbCIsIlByb2NlZHVyZUNhbGwiLCJwcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZSIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZVJlZmVyZW5jZUpTT04iLCJ0eXBlcyIsInR5cGVzSlNPTiIsIlR5cGUiLCJmb3JFYWNoIiwidHlwZUpTT04iLCJwdXNoIiwidGVybXMiLCJ0ZXJtc0pTT04iLCJtYXAiLCJydWxlcyIsIlJ1bGUiLCJydWxlc0pTT04iLCJydWxlSlNPTiIsInJ1bGUiLCJsYWJlbCIsIkxhYmVsIiwibGFiZWxKU09OIiwiZnJhbWVzIiwiRnJhbWUiLCJmcmFtZXNKU09OIiwiZnJhbWVKU09OIiwiZnJhbWUiLCJsYWJlbHMiLCJsYWJlbHNKU09OIiwiYXhpb21zIiwiQXhpb20iLCJheGlvbXNKU09OIiwiYXhpb21KU09OIiwiYXhpb20iLCJwcmVtaXNlcyIsIlByZW1pc2UiLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlSlNPTiIsInByZW1pc2UiLCJ0aGVvcmVtcyIsIlRoZW9yZW0iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtSlNPTiIsInRoZW9yZW0iLCJ2YXJpYWJsZXMiLCJWYXJpYWJsZSIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZUpTT04iLCJ2YXJpYWJsZSIsInByb3BlcnRpZXMiLCJQcm9wZXJ0eSIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydHlKU09OIiwicHJvcGVydHkiLCJzdXBlclR5cGVzIiwic3VwZXJUeXBlc0pTT04iLCJzdXBlclR5cGVKU09OIiwibm9taW5hbFN1cGVyVHlwZU5hbWUiLCJzdXBlclR5cGUiLCJoeXBvdGhlc2VzIiwiSHlwb3RoZXNpcyIsImh5cG90aGVzZXNKU09OIiwiaHlwb3RoZXNpc0pTT04iLCJoeXBvdGhlc2lzIiwicGFyYW1ldGVycyIsIlBhcmFtZXRlciIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVySlNPTiIsInBhcmFtZXRlciIsImNvbmplY3R1cmVzIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29uamVjdHVyZSIsImNvbWJpbmF0b3JzIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JKU09OIiwiY29tYmluYXRvciIsInR5cGVQcmVmaXhlcyIsIlR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4ZXNKU09OIiwidHlwZVByZWZpeEpTT04iLCJ0eXBlUHJlZml4IiwiY29uc3RydWN0b3JzIiwiQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JKU09OIiwiY29uc3RydWN0b3IiLCJtZXRhdGhlb3JlbXMiLCJNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdGhlb3JlbUpTT04iLCJtZXRhdGhlb3JlbSIsInN1cHBvc2l0aW9ucyIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uSlNPTiIsInN1cHBvc2l0aW9uIiwic3Vic3RpdHV0aW9ucyIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbnNKU09OIiwiU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uSlNPTiIsInN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzSlNPTiIsImxlbW1hcyIsIm1ldGFMZW1tYXMiLCJ0b0pTT04iLCJtZXRhVHlwZUpTT04iLCJtYXBTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTRQZ0JBO2VBQUFBOztRQXlaQUM7ZUFBQUE7O1FBeFFBQztlQUFBQTs7UUE4WEFDO2VBQUFBOztRQS9wQkFDO2VBQUFBOztRQXFkQUM7ZUFBQUE7O1FBcE1BQztlQUFBQTs7UUFrWUFDO2VBQUFBOztRQWxWQUM7ZUFBQUE7O1FBb1hBQztlQUFBQTs7UUE5dEJBQztlQUFBQTs7UUFnZkFDO2VBQUFBOztRQXZWQUM7ZUFBQUE7O1FBbWFBQztlQUFBQTs7UUFsU0FDO2VBQUFBOztRQXNXQUM7ZUFBQUE7O1FBcGZBQztlQUFBQTs7UUF5VUFDO2VBQUFBOztRQTVTQUM7ZUFBQUE7O1FBK1pBQztlQUFBQTs7UUE3SUFDO2VBQUFBOztRQU1BQztlQUFBQTs7UUEvZEFDO2VBQUFBOztRQXlmQUM7ZUFBQUE7O1FBakdBQztlQUFBQTs7UUFnWEFDO2VBQUFBOztRQXByQkFDO2VBQUFBOztRQThjQUM7ZUFBQUE7O1FBekZBQztlQUFBQTs7UUFxVkFDO2VBQUFBOztRQXRkQUM7ZUFBQUE7O1FBOFdBQztlQUFBQTs7UUEvY0FDO2VBQUFBOztRQXFaQUM7ZUFB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