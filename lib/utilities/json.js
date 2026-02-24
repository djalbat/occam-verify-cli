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
var _metaTypes = require("../metaTypes");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSB9IGZyb20gXCIuLi9tZXRhVHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgY29uc3QgdGVybUpTT04gPSB0ZXJtOyAgLy8vXG5cbiAganNvbiA9IHRlcm1KU09OOyAgLy8vXG5cbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cztcblxuICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICBqc29uID0gdHlwZTsgIC8vL1xuXG4gICAgY29uc3QgeyBuYW1lLCBwcmVmaXhOYW1lIH0gPSBqc29uLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IChwcmVmaXhOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJlZml4TmFtZX0ke25hbWV9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTsgLy8vXG5cbiAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBqc29uID0gbWV0YVR5cGU7ICAvLy9cblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50ID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIGpzb24gPSBzdGF0ZW1lbnRKU09OOyAvLy9cblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGRlZHVjdGlvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb247ICAvLy9cblxuICBqc29uID0gZGVkdWN0aW9uSlNPTjsgIC8vL1xuXG4gIGRlZHVjdGlvbiA9IERlZHVjdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzaWduYXR1cmUgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAganNvbiA9IHNpZ25hdHVyZUpTT047IC8vL1xuXG4gICAgc2lnbmF0dXJlID0gU2lnbmF0dXJlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSByZWZlcmVuY2VKU09OOyAvLy9cblxuICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGU7ICAvLy9cblxuICBqc29uID0gbWV0YXZhcmlhYmxlSlNPTjsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVDYWxsID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbEpTT04gPSBwcm9jZWR1cmVDYWxsOyAgLy8vXG5cbiAgICBqc29uID0gcHJvY2VkdXJlQ2FsbEpTT047IC8vL1xuXG4gICAgcHJvY2VkdXJlQ2FsbCA9IFByb2NlZHVyZUNhbGwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlSlNPTiA9IHByb2NlZHVyZVJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSBwcm9jZWR1cmVSZWZlcmVuY2VKU09OOyAgLy8vXG5cbiAgcHJvY2VkdXJlUmVmZXJlbmNlID0gUHJvY2VkdXJlUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc0Zyb21KU09OKGpzb24sIHR5cGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgdHlwZXM6IHR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGUgfSA9IGVsZW1lbnRzO1xuXG4gIHR5cGVzSlNPTi5mb3JFYWNoKCh0eXBlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdHlwZXMucHVzaCh0eXBlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGVybXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGVybXNKU09OID0gdGVybXM7IC8vL1xuXG4gIHRlcm1zID0gdGVybXNKU09OLm1hcCgodGVybUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcnVsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSdWxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcnVsZXNKU09OID0gcnVsZXM7IC8vL1xuXG4gIHJ1bGVzID0gcnVsZXNKU09OLm1hcCgocnVsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBydWxlO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbGFiZWwgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxhYmVsSlNPTiA9IGxhYmVsOyAgLy8vXG5cbiAganNvbiA9IGxhYmVsSlNPTjsgLy8vXG5cbiAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGZyYW1lcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEZyYW1lIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lczsgLy8vXG5cbiAgZnJhbWVzID0gZnJhbWVzSlNPTi5tYXAoKGZyYW1lSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBmcmFtZUpTT04sICAvLy9cbiAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXhpb21zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXhpb20gfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbXNKU09OID0gYXhpb21zOyAvLy9cblxuICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUaGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuXG4gIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLm1hcCgodGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvcGVydGllcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByb3BlcnR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzOyAvLy9cblxuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04ubWFwKChwcm9wZXJ0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJvcGVydHlKU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IHN1cGVyVHlwZXM6IHN1cGVyVHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTi5tYXAoKHN1cGVyVHlwZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIHsgbmFtZSwgcHJlZml4TmFtZSB9ID0ganNvbixcbiAgICAgICAgICAgICAgICBub21pbmFsU3VwZXJUeXBlTmFtZSA9IChwcmVmaXhOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeE5hbWV9JHtuYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLCAvLy9cbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBoeXBvdGhlc2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgSHlwb3RoZXNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlczsgIC8vL1xuXG4gIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzSlNPTi5tYXAoKGh5cG90aGVzaXNKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGh5cG90aGVzaXNKU09OLCAvLy9cbiAgICAgICAgICBoeXBvdGhlc2lzID0gSHlwb3RoZXNpcy5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9KTtcblxuICByZXR1cm4gaHlwb3RoZXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHBhcmFtZXRlcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnM7IC8vL1xuXG4gIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzSlNPTi5tYXAoKHBhcmFtZXRlckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcGFyYW1ldGVySlNPTiwgIC8vL1xuICAgICAgICAgIHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbmplY3R1cmVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzOyAvLy9cblxuICBjb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzSlNPTi5tYXAoKGNvbmplY3R1cmVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbWJpbmF0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzOyAvLy9cblxuICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTi5tYXAoKGNvbWJpbmF0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0eXBlUHJlZml4ZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZVByZWZpeGVzSlNPTiA9IHR5cGVQcmVmaXhlczsgLy8vXG5cbiAgdHlwZVByZWZpeGVzID0gdHlwZVByZWZpeGVzSlNPTi5tYXAoKHR5cGVQcmVmaXhKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHR5cGVQcmVmaXhKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeCA9IFR5cGVQcmVmaXguZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uc3RydWN0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzOyAvLy9cblxuICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLm1hcCgoY29uc3RydWN0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF0aGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtczsgLy8vXG5cbiAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTi5tYXAoKG1ldGF0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdXBwb3NpdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN1YnN0aXR1dGlvbnMgPSBbXSB9ID0ganNvbjsgIC8vL1xuXG4gIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLCAgLy8vXG4gICAgICAgIFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gU3Vic3RpdHV0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzOyAvLy9cblxuICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT04ubWFwKChtZXRhdmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbW1hc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICByZXR1cm4gbGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxlbW1hc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgcmV0dXJuIG1ldGFMZW1tYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtVG9UZXJtSlNPTih0ZXJtKSB7XG4gIGNvbnN0IHRlcm1KU09OID0gdGVybS50b0pTT04oKTtcblxuICByZXR1cm4gdGVybUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlVG9UeXBlSlNPTih0eXBlKSB7XG4gIGNvbnN0IHR5cGVKU09OID0gKHR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxUb0xhYmVsSlNPTihsYWJlbCkge1xuICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICByZXR1cm4gbGFiZWxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVUb01ldGFUeXBlSlNPTihtZXRhVHlwZSkge1xuICBjb25zdCBtZXRhVHlwZUpTT04gPSAobWV0YVR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhVHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBtZXRhVHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04ocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2UudG9KU09OKCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04oc3RhdGVtZW50KSB7XG4gIGNvbnN0IHN0YXRlbWVudEpTT04gPSAoc3RhdGVtZW50ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudC50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gc3RhdGVtZW50SlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTihkZWR1Y3Rpb24pIHtcbiAgY29uc3QgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvbi50b0pTT04oKTtcblxuICByZXR1cm4gZGVkdWN0aW9uSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTihzaWduYXR1cmUpIHtcbiAgY29uc3Qgc2lnbmF0dXJlSlNPTiA9IChzaWduYXR1cmUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBzaWduYXR1cmVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04oY29uY2x1c2lvbikge1xuICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04ocHJvY2VkdXJlQ2FsbCkge1xuICBjb25zdCBwcm9jZWR1cmVDYWxsSlNPTiA9IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZWR1cmVDYWxsLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04ocHJvY2VkdXJlUmVmZXJlbmNlKSB7XG4gIGNvbnN0IHByb2NlZHVyZVJlZmVyZW5jZUpTT04gPSBwcm9jZWR1cmVSZWZlcmVuY2UudG9KU09OKCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc1RvVHlwZXNKU09OKHR5cGVzKSB7XG4gIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04oKTtcblxuICAgIHR5cGUgPSB0eXBlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zVG9UZXJtc0pTT04odGVybXMpIHtcbiAgY29uc3QgdGVybXNKU09OID0gdGVybXMubWFwKCh0ZXJtKSA9PiB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtLnRvSlNPTigpO1xuXG4gICAgdGVybSA9IHRlcm1KU09OOyAvLy9cblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNUb1J1bGVzSlNPTihydWxlcykge1xuICBjb25zdCBydWxlc0pTT04gPSBydWxlcy5tYXAoKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKCk7XG5cbiAgICBydWxlID0gcnVsZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZXNUb0ZyYW1lc0pTT04oZnJhbWVzKSB7XG4gIGNvbnN0IGZyYW1lc0pTT04gPSBmcmFtZXMubWFwKChmcmFtZSkgPT4ge1xuICAgIGNvbnN0IGZyYW1lSlNPTiA9IGZyYW1lLnRvSlNPTigpO1xuXG4gICAgZnJhbWUgPSBmcmFtZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKGh5cG90aGVzZXMpIHtcbiAgY29uc3QgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzLm1hcCgoaHlwb3RoZXNpcykgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXNKU09OID0gaHlwb3RoZXNpcy50b0pTT04oKTtcblxuICAgIGh5cG90aGVzaXMgPSBoeXBvdGhlc2lzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04oc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlO1xuICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTihwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlckpTT04gPSBwYXJhbWV0ZXIudG9KU09OKCk7XG5cbiAgICBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTihwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlKU09OID0gcHJvcGVydHkudG9KU09OKCk7XG5cbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5SlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04odHlwZVByZWZpeGVzKSB7XG4gIGNvbnN0IHR5cGVQcmVmaXhlc0pTT04gPSB0eXBlUHJlZml4ZXMubWFwKCh0eXBlUHJlZml4KSA9PiB7XG4gICAgY29uc3QgdHlwZVByZWZpeEpTT04gPSB0eXBlUHJlZml4LnRvSlNPTigpO1xuXG4gICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhKU09OOyAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04oY29uamVjdHVyZXMpIHtcbiAgY29uc3QgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTigpO1xuXG4gICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTihjb21iaW5hdG9ycykge1xuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKCk7XG5cbiAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04oc3VwcG9zaXRpb25zKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04oY29uc3RydWN0b3JzKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTigpO1xuXG4gICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04obWV0YXRoZW9yZW1zKSB7XG4gIGNvbnN0IG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXMubWFwKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbUpTT047IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLm1hcFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTihtZXRhdmFyaWFibGVzKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG4iXSwibmFtZXMiOlsiYXhpb21zRnJvbUpTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwiZnJhbWVzRnJvbUpTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJoeXBvdGhlc2VzRnJvbUpTT04iLCJoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTiIsImxhYmVsRnJvbUpTT04iLCJsYWJlbFRvTGFiZWxKU09OIiwibGFiZWxzRnJvbUpTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsIm1ldGFUeXBlRnJvbUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwicGFyYW1ldGVyc0Zyb21KU09OIiwicGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04iLCJwcmVtaXNlc0Zyb21KU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsInByb2NlZHVyZUNhbGxGcm9tSlNPTiIsInByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04iLCJwcm9wZXJ0aWVzRnJvbUpTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInJlZmVyZW5jZUZyb21KU09OIiwicmVmZXJlbmNlVG9SZWZlcmVuY2VKU09OIiwicnVsZXNGcm9tSlNPTiIsInJ1bGVzVG9SdWxlc0pTT04iLCJzaWduYXR1cmVGcm9tSlNPTiIsInNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidHlwZUZyb21KU09OIiwidHlwZVByZWZpeGVzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInR5cGVzRnJvbUpTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJqc29uIiwiY29udGV4dCIsInRlcm0iLCJ0ZXJtSlNPTiIsIlRlcm0iLCJlbGVtZW50cyIsImZyb21KU09OIiwidHlwZSIsIm5hbWUiLCJwcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJzdGF0ZW1lbnQiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRKU09OIiwiZGVkdWN0aW9uIiwiRGVkdWN0aW9uIiwiZGVkdWN0aW9uSlNPTiIsInNpZ25hdHVyZSIsIlNpZ25hdHVyZSIsInNpZ25hdHVyZUpTT04iLCJyZWZlcmVuY2UiLCJSZWZlcmVuY2UiLCJyZWZlcmVuY2VKU09OIiwiY29uY2x1c2lvbiIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uSlNPTiIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJwcm9jZWR1cmVDYWxsIiwiUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInR5cGVzIiwidHlwZXNKU09OIiwiVHlwZSIsImZvckVhY2giLCJ0eXBlSlNPTiIsInB1c2giLCJ0ZXJtcyIsInRlcm1zSlNPTiIsIm1hcCIsInJ1bGVzIiwiUnVsZSIsInJ1bGVzSlNPTiIsInJ1bGVKU09OIiwicnVsZSIsImxhYmVsIiwiTGFiZWwiLCJsYWJlbEpTT04iLCJmcmFtZXMiLCJGcmFtZSIsImZyYW1lc0pTT04iLCJmcmFtZUpTT04iLCJmcmFtZSIsImxhYmVscyIsImxhYmVsc0pTT04iLCJheGlvbXMiLCJBeGlvbSIsImF4aW9tc0pTT04iLCJheGlvbUpTT04iLCJheGlvbSIsInByZW1pc2VzIiwiUHJlbWlzZSIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwicHJlbWlzZSIsInRoZW9yZW1zIiwiVGhlb3JlbSIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1KU09OIiwidGhlb3JlbSIsInZhcmlhYmxlcyIsIlZhcmlhYmxlIiwidmFyaWFibGVzSlNPTiIsInZhcmlhYmxlSlNPTiIsInZhcmlhYmxlIiwicHJvcGVydGllcyIsIlByb3BlcnR5IiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0eUpTT04iLCJwcm9wZXJ0eSIsInN1cGVyVHlwZXMiLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZUpTT04iLCJub21pbmFsU3VwZXJUeXBlTmFtZSIsInN1cGVyVHlwZSIsImh5cG90aGVzZXMiLCJIeXBvdGhlc2lzIiwiaHlwb3RoZXNlc0pTT04iLCJoeXBvdGhlc2lzSlNPTiIsImh5cG90aGVzaXMiLCJwYXJhbWV0ZXJzIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJKU09OIiwicGFyYW1ldGVyIiwiY29uamVjdHVyZXMiLCJDb25qZWN0dXJlIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZUpTT04iLCJjb25qZWN0dXJlIiwiY29tYmluYXRvcnMiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvckpTT04iLCJjb21iaW5hdG9yIiwidHlwZVByZWZpeGVzIiwiVHlwZVByZWZpeCIsInR5cGVQcmVmaXhlc0pTT04iLCJ0eXBlUHJlZml4SlNPTiIsInR5cGVQcmVmaXgiLCJjb25zdHJ1Y3RvcnMiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJjb25zdHJ1Y3RvciIsIm1ldGF0aGVvcmVtcyIsIk1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtSlNPTiIsIm1ldGF0aGVvcmVtIiwic3VwcG9zaXRpb25zIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25KU09OIiwic3VwcG9zaXRpb24iLCJzdWJzdGl0dXRpb25zIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uc0pTT04iLCJTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25KU09OIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXNKU09OIiwibGVtbWFzIiwibWV0YUxlbW1hcyIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1hcFN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNFBnQkE7ZUFBQUE7O1FBMFpBQztlQUFBQTs7UUF6UUFDO2VBQUFBOztRQStYQUM7ZUFBQUE7O1FBaHFCQUM7ZUFBQUE7O1FBc2RBQztlQUFBQTs7UUFyTUFDO2VBQUFBOztRQW1ZQUM7ZUFBQUE7O1FBblZBQztlQUFBQTs7UUFxWEFDO2VBQUFBOztRQS90QkFDO2VBQUFBOztRQWlmQUM7ZUFBQUE7O1FBeFZBQztlQUFBQTs7UUFvYUFDO2VBQUFBOztRQW5TQUM7ZUFBQUE7O1FBdVdBQztlQUFBQTs7UUFyZkFDO2VBQUFBOztRQXlVQUM7ZUFBQUE7O1FBNVNBQztlQUFBQTs7UUFnYUFDO2VBQUFBOztRQTlJQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOztRQS9kQUM7ZUFBQUE7O1FBeWZBQztlQUFBQTs7UUFqR0FDO2VBQUFBOztRQWlYQUM7ZUFBQUE7O1FBcnJCQUM7ZUFBQUE7O1FBK2NBQztlQUFBQTs7UUExRkFDO2VBQUFBOztRQXNWQUM7ZUFBQUE7O1FBdmRBQztlQUFBQTs7UUErV0FDO2VBQUFBOztRQWhkQUM7ZUFBQUE7O1FBc1pB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