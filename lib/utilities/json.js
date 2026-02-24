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
    get assertionsFromJSON () {
        return assertionsFromJSON;
    },
    get assertionsToAssertionsJSON () {
        return assertionsToAssertionsJSON;
    },
    get assumptionsFromJSON () {
        return assumptionsFromJSON;
    },
    get assumptionsToAssumptionsJSON () {
        return assumptionsToAssumptionsJSON;
    },
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
    get ephemeralContextFromJSON () {
        return ephemeralContextFromJSON;
    },
    get equalitiesFromJSON () {
        return equalitiesFromJSON;
    },
    get equalitiesToEqualitiesJSON () {
        return equalitiesToEqualitiesJSON;
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
    get judgementsFromJSON () {
        return judgementsFromJSON;
    },
    get judgementsToJudgementsJSON () {
        return judgementsToJudgementsJSON;
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
    get nameFromJSON () {
        return nameFromJSON;
    },
    get nameToNameJSON () {
        return nameToNameJSON;
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
    get referencesFromJSON () {
        return referencesFromJSON;
    },
    get referencesToReferencesJSON () {
        return referencesToReferencesJSON;
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
    get statementsFromJSON () {
        return statementsFromJSON;
    },
    get statementsToStatementsJSON () {
        return statementsToStatementsJSON;
    },
    get substitutionsFromJSON () {
        return substitutionsFromJSON;
    },
    get substitutionsToCSubstitutionsJSON () {
        return substitutionsToCSubstitutionsJSON;
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
var _ephemeral = /*#__PURE__*/ _interop_require_default(require("../context/ephemeral"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function lemmasFromNothing() {
    var lemmas = [];
    return lemmas;
}
function metaLemmasFromNothing() {
    var metaLemmas = [];
    return metaLemmas;
}
function nameFromJSON(json, context) {
    var name = json.name;
    var nameJSON = name; ///
    name = nameJSON; ///
    return name;
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
function equalitiesFromJSON(json, context) {
    var equalities = json.equalities;
    var Equality = _elements.default.Equality, equalitiesJSON = equalities; ///
    equalities = equalitiesJSON.map(function(equalityJSON) {
        var _$json = equalityJSON, equality = Equality.fromJSON(_$json, context);
        return equality;
    });
    return equalities;
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
function judgementsFromJSON(json, context) {
    var judgements = json.judgements;
    var Judgement = _elements.default.Judgement, judgementsJSON = judgements; ///
    judgements = judgementsJSON.map(function(judgementJSON) {
        var _$json = judgementJSON, judgement = Judgement.fromJSON(_$json, context);
        return judgement;
    });
    return judgements;
}
function statementsFromJSON(json, context) {
    var statements = json.statements;
    var Statement = _elements.default.Statement, statementsJSON = statements; ///
    statements = statementsJSON.map(function(statementJSON) {
        var _$json = statementJSON, statement = Statement.fromJSON(_$json, context);
        return statement;
    });
    return statements;
}
function assertionsFromJSON(json, context) {
    var assertions = json.assertions;
    var Assertion = _elements.default.Assertion, assertionsJSON = assertions; ///
    assertions = assertionsJSON.map(function(assertionJSON) {
        var _$json = assertionJSON, assertion = Assertion.fromJSON(_$json, context);
        return assertion;
    });
    return assertions;
}
function referencesFromJSON(json, context) {
    var references = json.references;
    var Assertion = _elements.default.Assertion, referencesJSON = references; ///
    references = referencesJSON.map(function(referenceJSON) {
        var _$json = referenceJSON, reference = Assertion.fromJSON(_$json, context);
        return reference;
    });
    return references;
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
function assumptionsFromJSON(json, context) {
    var assumptions = json.assumptions;
    var Assumption = _elements.default.Assumption, assumptionsJSON = assumptions; ///
    assumptions = assumptionsJSON.map(function(assumptionJSON) {
        var _$json = assumptionJSON, assumption = Assumption.fromJSON(_$json, context);
        return assumption;
    });
    return assumptions;
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
function ephemeralContextFromJSON(json, context) {
    var releaseContext = context;
    context = json.context;
    json = context; ///
    context = releaseContext; ///
    var emphemeralContext = _ephemeral.default.fromJSON(json, context);
    return emphemeralContext;
}
function nameToNameJSON(name) {
    var nameJSON = name; ///
    return nameJSON;
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
function termsToTermsJSON(terms) {
    var termsJSON = terms.map(function(term) {
        var termJSON = term.toJSON();
        return termJSON;
    });
    return termsJSON;
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
function framesToFramesJSON(frames) {
    var framesJSON = frames.map(function(frame) {
        var frameJSON = frame.toJSON();
        return frameJSON;
    });
    return framesJSON;
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
function judgementsToJudgementsJSON(judgements) {
    var judgementsJSON = judgements.map(function(judgement) {
        var judgementJSON = judgement.toJSON();
        return judgementJSON;
    });
    return judgementsJSON;
}
function equalitiesToEqualitiesJSON(equalities) {
    var equalitiesJSON = equalities.map(function(equality) {
        var equalityJSON = equality.toJSON();
        return equalityJSON;
    });
    return equalitiesJSON;
}
function statementsToStatementsJSON(statements) {
    var statementsJSON = statements.map(function(statement) {
        var statementJSON = statement.toJSON();
        return statementJSON;
    });
    return statementsJSON;
}
function assertionsToAssertionsJSON(assertions) {
    var assertionsJSON = assertions.map(function(assertion) {
        var assertionJSON = assertion.toJSON();
        return assertionJSON;
    });
    return assertionsJSON;
}
function referencesToReferencesJSON(references) {
    var referencesJSON = references.map(function(reference) {
        var referenceJSON = reference.toJSON();
        return referenceJSON;
    });
    return referencesJSON;
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
function assumptionsToAssumptionsJSON(assumptions) {
    var assumptionsJSON = assumptions.map(function(assumption) {
        var assumptionJSON = assumption.toJSON();
        return assumptionJSON;
    });
    return assumptionsJSON;
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
function typePrefixesToTypePrefixesJSON(typePrefixes) {
    var typePrefixesJSON = typePrefixes.map(function(typePrefix) {
        var typePrefixJSON = typePrefix.toJSON();
        typePrefix = typePrefixJSON; ///
        return typePrefix;
    });
    return typePrefixesJSON;
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
function substitutionsToCSubstitutionsJSON(substitutiions) {
    var substitutionsJSON = substitutiions.map(function(substitution) {
        var substitutionJSON = substitution.toJSON();
        return substitutionJSON;
    });
    return substitutionsJSON;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEVwaGVtZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZXBoZW1lcmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbmFtZSB9ID0ganNvbjtcblxuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICBuYW1lID0gbmFtZUpTT047ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgY29uc3QgdGVybUpTT04gPSB0ZXJtOyAgLy8vXG5cbiAganNvbiA9IHRlcm1KU09OOyAgLy8vXG5cbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cztcblxuICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICBqc29uID0gdHlwZTsgIC8vL1xuXG4gICAgY29uc3QgeyBuYW1lLCBwcmVmaXhOYW1lIH0gPSBqc29uLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IChwcmVmaXhOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJlZml4TmFtZX0ke25hbWV9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTsgLy8vXG5cbiAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBqc29uID0gbWV0YVR5cGU7ICAvLy9cblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50ID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIGpzb24gPSBzdGF0ZW1lbnRKU09OOyAvLy9cblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGRlZHVjdGlvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb247ICAvLy9cblxuICBqc29uID0gZGVkdWN0aW9uSlNPTjsgIC8vL1xuXG4gIGRlZHVjdGlvbiA9IERlZHVjdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzaWduYXR1cmUgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAganNvbiA9IHNpZ25hdHVyZUpTT047IC8vL1xuXG4gICAgc2lnbmF0dXJlID0gU2lnbmF0dXJlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSByZWZlcmVuY2VKU09OOyAvLy9cblxuICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGU7ICAvLy9cblxuICBqc29uID0gbWV0YXZhcmlhYmxlSlNPTjsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVDYWxsID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbEpTT04gPSBwcm9jZWR1cmVDYWxsOyAgLy8vXG5cbiAgICBqc29uID0gcHJvY2VkdXJlQ2FsbEpTT047IC8vL1xuXG4gICAgcHJvY2VkdXJlQ2FsbCA9IFByb2NlZHVyZUNhbGwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlSlNPTiA9IHByb2NlZHVyZVJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSBwcm9jZWR1cmVSZWZlcmVuY2VKU09OOyAgLy8vXG5cbiAgcHJvY2VkdXJlUmVmZXJlbmNlID0gUHJvY2VkdXJlUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc0Zyb21KU09OKGpzb24sIHR5cGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgdHlwZXM6IHR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGUgfSA9IGVsZW1lbnRzO1xuXG4gIHR5cGVzSlNPTi5mb3JFYWNoKCh0eXBlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdHlwZXMucHVzaCh0eXBlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGVybXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGVybXNKU09OID0gdGVybXM7IC8vL1xuXG4gIHRlcm1zID0gdGVybXNKU09OLm1hcCgodGVybUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcnVsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSdWxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcnVsZXNKU09OID0gcnVsZXM7IC8vL1xuXG4gIHJ1bGVzID0gcnVsZXNKU09OLm1hcCgocnVsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBydWxlO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbGFiZWwgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxhYmVsSlNPTiA9IGxhYmVsOyAgLy8vXG5cbiAganNvbiA9IGxhYmVsSlNPTjsgLy8vXG5cbiAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGZyYW1lcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEZyYW1lIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lczsgLy8vXG5cbiAgZnJhbWVzID0gZnJhbWVzSlNPTi5tYXAoKGZyYW1lSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBmcmFtZUpTT04sICAvLy9cbiAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXhpb21zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXhpb20gfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbXNKU09OID0gYXhpb21zOyAvLy9cblxuICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUaGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuXG4gIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLm1hcCgodGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZXF1YWxpdGllcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEVxdWFsaXR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXF1YWxpdGllc0pTT04gPSBlcXVhbGl0aWVzOyAvLy9cblxuICBlcXVhbGl0aWVzID0gZXF1YWxpdGllc0pTT04ubWFwKChlcXVhbGl0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gZXF1YWxpdHlKU09OLCAgLy8vXG4gICAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXM7IC8vL1xuXG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTi5tYXAoKHByb3BlcnR5SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcm9wZXJ0eUpTT04sICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgc3VwZXJUeXBlczogc3VwZXJUeXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3Qgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLm1hcCgoc3VwZXJUeXBlSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgeyBuYW1lLCBwcmVmaXhOYW1lIH0gPSBqc29uLFxuICAgICAgICAgICAgICAgIG5vbWluYWxTdXBlclR5cGVOYW1lID0gKHByZWZpeE5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJlZml4TmFtZX0ke25hbWV9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsIC8vL1xuICAgICAgICAgICAgICAgIHN1cGVyVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsU3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGh5cG90aGVzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBIeXBvdGhlc2lzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzOyAgLy8vXG5cbiAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNKU09OLm1hcCgoaHlwb3RoZXNpc0pTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gaHlwb3RoZXNpc0pTT04sIC8vL1xuICAgICAgICAgIGh5cG90aGVzaXMgPSBIeXBvdGhlc2lzLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcGFyYW1ldGVycyB9ID0ganNvbjtcblxuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVyczsgLy8vXG5cbiAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNKU09OLm1hcCgocGFyYW1ldGVySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwYXJhbWV0ZXJKU09OLCAgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBqdWRnZW1lbnRzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgSnVkZ2VtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAganVkZ2VtZW50c0pTT04gPSBqdWRnZW1lbnRzOyAvLy9cblxuICBqdWRnZW1lbnRzID0ganVkZ2VtZW50c0pTT04ubWFwKChqdWRnZW1lbnRKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGp1ZGdlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqdWRnZW1lbnQgPSBKdWRnZW1lbnQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9KTtcblxuICByZXR1cm4ganVkZ2VtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN0YXRlbWVudHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdGF0ZW1lbnRzSlNPTiA9IHN0YXRlbWVudHM7IC8vL1xuXG4gIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzSlNPTi5tYXAoKHN0YXRlbWVudEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXNzZXJ0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9uczsgLy8vXG5cbiAgYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnNKU09OLm1hcCgoYXNzZXJ0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBhc3NlcnRpb25KU09OLCAgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uID0gQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc2VydGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyByZWZlcmVuY2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcmVmZXJlbmNlc0pTT04gPSByZWZlcmVuY2VzOyAvLy9cblxuICByZWZlcmVuY2VzID0gcmVmZXJlbmNlc0pTT04ubWFwKChyZWZlcmVuY2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHJlZmVyZW5jZUpTT04sICAvLy9cbiAgICAgICAgICByZWZlcmVuY2UgPSBBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9KTtcblxuICByZXR1cm4gcmVmZXJlbmNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25qZWN0dXJlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlczsgLy8vXG5cbiAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04ubWFwKChjb25qZWN0dXJlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb21iaW5hdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9yczsgLy8vXG5cbiAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04ubWFwKChjb21iaW5hdG9ySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb21iaW5hdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBhc3N1bXB0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBhc3N1bXB0aW9uc0pTT04gPSBhc3N1bXB0aW9uczsgLy8vXG5cbiAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0pTT04ubWFwKChhc3N1bXB0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBhc3N1bXB0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGFzc3VtcHRpb24gPSBBc3N1bXB0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZVByZWZpeGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZVByZWZpeCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHR5cGVQcmVmaXhlc0pTT04gPSB0eXBlUHJlZml4ZXM7IC8vL1xuXG4gIHR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlc0pTT04ubWFwKCh0eXBlUHJlZml4SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0eXBlUHJlZml4SlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXggPSBUeXBlUHJlZml4LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlUHJlZml4ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbnN0cnVjdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9yczsgLy8vXG5cbiAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzSlNPTi5tYXAoKGNvbnN0cnVjdG9ySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb25zdHJ1Y3RvckpTT04sICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdGhlb3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXM7IC8vL1xuXG4gIG1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtc0pTT04ubWFwKChtZXRhdGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBNZXRhdGhlb3JlbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3VwcG9zaXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTi5tYXAoKHN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdWJzdGl0dXRpb25zID0gW10gfSA9IGpzb247ICAvLy9cblxuICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucywgIC8vL1xuICAgICAgICBTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb247IC8vL1xuXG4gIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3Vic3RpdHV0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IFN1YnN0aXR1dGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlczsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNKU09OLm1hcCgobWV0YXZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgKHtjb250ZXh0fSA9IGpzb24pO1xuXG4gIGpzb24gPSBjb250ZXh0OyAvLy9cblxuICBjb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7IC8vL1xuXG4gIGNvbnN0IGVtcGhlbWVyYWxDb250ZXh0ID0gRXBoZW1lcmFsQ29udGV4dC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lVG9OYW1lSlNPTihuYW1lKSB7XG4gIGNvbnN0IG5hbWVKU09OID0gbmFtZTsgIC8vL1xuXG4gIHJldHVybiBuYW1lSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Ub1Rlcm1KU09OKHRlcm0pIHtcbiAgY29uc3QgdGVybUpTT04gPSB0ZXJtLnRvSlNPTigpO1xuXG4gIHJldHVybiB0ZXJtSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVUb1R5cGVKU09OKHR5cGUpIHtcbiAgY29uc3QgdHlwZUpTT04gPSAodHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gdHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbFRvTGFiZWxKU09OKGxhYmVsKSB7XG4gIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gIHJldHVybiBsYWJlbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKG1ldGFUeXBlKSB7XG4gIGNvbnN0IG1ldGFUeXBlSlNPTiA9IChtZXRhVHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFUeXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIG1ldGFUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTihyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZS50b0pTT04oKTtcblxuICByZXR1cm4gcmVmZXJlbmNlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTihzdGF0ZW1lbnQpIHtcbiAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IChzdGF0ZW1lbnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50LnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKGRlZHVjdGlvbikge1xuICBjb25zdCBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHNpZ25hdHVyZSkge1xuICBjb25zdCBzaWduYXR1cmVKU09OID0gKHNpZ25hdHVyZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTihjb25jbHVzaW9uKSB7XG4gIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbi50b0pTT04oKTtcblxuICByZXR1cm4gY29uY2x1c2lvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04obWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTihwcm9jZWR1cmVDYWxsKSB7XG4gIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gKHByb2NlZHVyZUNhbGwgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZHVyZUNhbGwudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTihwcm9jZWR1cmVSZWZlcmVuY2UpIHtcbiAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlSlNPTiA9IHByb2NlZHVyZVJlZmVyZW5jZS50b0pTT04oKTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zVG9UZXJtc0pTT04odGVybXMpIHtcbiAgY29uc3QgdGVybXNKU09OID0gdGVybXMubWFwKCh0ZXJtKSA9PiB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHRlcm1KU09OO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNUb1R5cGVzSlNPTih0eXBlcykge1xuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc1RvUnVsZXNKU09OKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVzSlNPTiA9IHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpIHtcbiAgY29uc3QgZnJhbWVzSlNPTiA9IGZyYW1lcy5tYXAoKGZyYW1lKSA9PiB7XG4gICAgY29uc3QgZnJhbWVKU09OID0gZnJhbWUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gZnJhbWVKU09OO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKGh5cG90aGVzZXMpIHtcbiAgY29uc3QgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzLm1hcCgoaHlwb3RoZXNpcykgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXNKU09OID0gaHlwb3RoZXNpcy50b0pTT04oKTtcblxuICAgIGh5cG90aGVzaXMgPSBoeXBvdGhlc2lzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04oc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlO1xuICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTihwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlckpTT04gPSBwYXJhbWV0ZXIudG9KU09OKCk7XG5cbiAgICBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTihwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlKU09OID0gcHJvcGVydHkudG9KU09OKCk7XG5cbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5SlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTihqdWRnZW1lbnRzKSB7XG4gIGNvbnN0IGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50cy5tYXAoKGp1ZGdlbWVudCkgPT4ge1xuICAgIGNvbnN0IGp1ZGdlbWVudEpTT04gPSBqdWRnZW1lbnQudG9KU09OKCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGp1ZGdlbWVudHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04oZXF1YWxpdGllcykge1xuICBjb25zdCBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXMubWFwKChlcXVhbGl0eSkgPT4ge1xuICAgIGNvbnN0IGVxdWFsaXR5SlNPTiA9IGVxdWFsaXR5LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04oc3RhdGVtZW50cykge1xuICBjb25zdCBzdGF0ZW1lbnRzSlNPTiA9IHN0YXRlbWVudHMubWFwKChzdGF0ZW1lbnQpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OKGFzc2VydGlvbnMpIHtcbiAgY29uc3QgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zLm1hcCgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzZXJ0aW9uSlNPTiA9IGFzc2VydGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXNzZXJ0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTihyZWZlcmVuY2VzKSB7XG4gIGNvbnN0IHJlZmVyZW5jZXNKU09OID0gcmVmZXJlbmNlcy5tYXAoKHJlZmVyZW5jZSkgPT4ge1xuICAgIGNvbnN0IHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTihjb25qZWN0dXJlcykge1xuICBjb25zdCBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICBjb25zdCBjb25qZWN0dXJlSlNPTiA9IGNvbmplY3R1cmUudG9KU09OKCk7XG5cbiAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OKGNvbWJpbmF0b3JzKSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JKU09OID0gY29tYmluYXRvci50b0pTT04oKTtcblxuICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9ySlNPTjsgLy8vXG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04oYXNzdW1wdGlvbnMpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnMubWFwKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvbkpTT04gPSBhc3N1bXB0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKGNvbnN0cnVjdG9ycykge1xuICBjb25zdCBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKG1ldGF0aGVvcmVtcykge1xuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUpTT04gPSBtZXRhdGhlb3JlbS50b0pTT04oKTtcblxuICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1KU09OOyAvLy9cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04odHlwZVByZWZpeGVzKSB7XG4gIGNvbnN0IHR5cGVQcmVmaXhlc0pTT04gPSB0eXBlUHJlZml4ZXMubWFwKCh0eXBlUHJlZml4KSA9PiB7XG4gICAgY29uc3QgdHlwZVByZWZpeEpTT04gPSB0eXBlUHJlZml4LnRvSlNPTigpO1xuXG4gICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhKU09OOyAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLm1hcFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTihtZXRhdmFyaWFibGVzKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zVG9DU3Vic3RpdHV0aW9uc0pTT04oc3Vic3RpdHV0aWlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpaW9ucy5tYXAoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNKU09OO1xufVxuIl0sIm5hbWVzIjpbImFzc2VydGlvbnNGcm9tSlNPTiIsImFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OIiwiYXNzdW1wdGlvbnNGcm9tSlNPTiIsImFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04iLCJheGlvbXNGcm9tSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJlcXVhbGl0aWVzRnJvbUpTT04iLCJlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTiIsImZyYW1lc0Zyb21KU09OIiwiZnJhbWVzVG9GcmFtZXNKU09OIiwiaHlwb3RoZXNlc0Zyb21KU09OIiwiaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04iLCJqdWRnZW1lbnRzRnJvbUpTT04iLCJqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTiIsImxhYmVsRnJvbUpTT04iLCJsYWJlbFRvTGFiZWxKU09OIiwibGFiZWxzRnJvbUpTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsIm1ldGFUeXBlRnJvbUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwibmFtZUZyb21KU09OIiwibmFtZVRvTmFtZUpTT04iLCJwYXJhbWV0ZXJzRnJvbUpTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwicHJvY2VkdXJlQ2FsbEZyb21KU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInByb3BlcnRpZXNGcm9tSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwicmVmZXJlbmNlRnJvbUpTT04iLCJyZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04iLCJyZWZlcmVuY2VzRnJvbUpTT04iLCJyZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJydWxlc1RvUnVsZXNKU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsInN0YXRlbWVudHNGcm9tSlNPTiIsInN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc1RvQ1N1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidHlwZUZyb21KU09OIiwidHlwZVByZWZpeGVzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInR5cGVzRnJvbUpTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwianNvbiIsImNvbnRleHQiLCJuYW1lIiwibmFtZUpTT04iLCJ0ZXJtIiwidGVybUpTT04iLCJUZXJtIiwiZWxlbWVudHMiLCJmcm9tSlNPTiIsInR5cGUiLCJwcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJzdGF0ZW1lbnQiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRKU09OIiwiZGVkdWN0aW9uIiwiRGVkdWN0aW9uIiwiZGVkdWN0aW9uSlNPTiIsInNpZ25hdHVyZSIsIlNpZ25hdHVyZSIsInNpZ25hdHVyZUpTT04iLCJyZWZlcmVuY2UiLCJSZWZlcmVuY2UiLCJyZWZlcmVuY2VKU09OIiwiY29uY2x1c2lvbiIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uSlNPTiIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJwcm9jZWR1cmVDYWxsIiwiUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInR5cGVzIiwidHlwZXNKU09OIiwiVHlwZSIsImZvckVhY2giLCJ0eXBlSlNPTiIsInB1c2giLCJ0ZXJtcyIsInRlcm1zSlNPTiIsIm1hcCIsInJ1bGVzIiwiUnVsZSIsInJ1bGVzSlNPTiIsInJ1bGVKU09OIiwicnVsZSIsImxhYmVsIiwiTGFiZWwiLCJsYWJlbEpTT04iLCJmcmFtZXMiLCJGcmFtZSIsImZyYW1lc0pTT04iLCJmcmFtZUpTT04iLCJmcmFtZSIsImxhYmVscyIsImxhYmVsc0pTT04iLCJheGlvbXMiLCJBeGlvbSIsImF4aW9tc0pTT04iLCJheGlvbUpTT04iLCJheGlvbSIsInByZW1pc2VzIiwiUHJlbWlzZSIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwicHJlbWlzZSIsInRoZW9yZW1zIiwiVGhlb3JlbSIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1KU09OIiwidGhlb3JlbSIsInZhcmlhYmxlcyIsIlZhcmlhYmxlIiwidmFyaWFibGVzSlNPTiIsInZhcmlhYmxlSlNPTiIsInZhcmlhYmxlIiwiZXF1YWxpdGllcyIsIkVxdWFsaXR5IiwiZXF1YWxpdGllc0pTT04iLCJlcXVhbGl0eUpTT04iLCJlcXVhbGl0eSIsInByb3BlcnRpZXMiLCJQcm9wZXJ0eSIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydHlKU09OIiwicHJvcGVydHkiLCJzdXBlclR5cGVzIiwic3VwZXJUeXBlc0pTT04iLCJzdXBlclR5cGVKU09OIiwibm9taW5hbFN1cGVyVHlwZU5hbWUiLCJzdXBlclR5cGUiLCJoeXBvdGhlc2VzIiwiSHlwb3RoZXNpcyIsImh5cG90aGVzZXNKU09OIiwiaHlwb3RoZXNpc0pTT04iLCJoeXBvdGhlc2lzIiwicGFyYW1ldGVycyIsIlBhcmFtZXRlciIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVySlNPTiIsInBhcmFtZXRlciIsImp1ZGdlbWVudHMiLCJKdWRnZW1lbnQiLCJqdWRnZW1lbnRzSlNPTiIsImp1ZGdlbWVudEpTT04iLCJqdWRnZW1lbnQiLCJzdGF0ZW1lbnRzIiwic3RhdGVtZW50c0pTT04iLCJhc3NlcnRpb25zIiwiQXNzZXJ0aW9uIiwiYXNzZXJ0aW9uc0pTT04iLCJhc3NlcnRpb25KU09OIiwiYXNzZXJ0aW9uIiwicmVmZXJlbmNlcyIsInJlZmVyZW5jZXNKU09OIiwiY29uamVjdHVyZXMiLCJDb25qZWN0dXJlIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZUpTT04iLCJjb25qZWN0dXJlIiwiY29tYmluYXRvcnMiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvckpTT04iLCJjb21iaW5hdG9yIiwiYXNzdW1wdGlvbnMiLCJBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbnNKU09OIiwiYXNzdW1wdGlvbkpTT04iLCJhc3N1bXB0aW9uIiwidHlwZVByZWZpeGVzIiwiVHlwZVByZWZpeCIsInR5cGVQcmVmaXhlc0pTT04iLCJ0eXBlUHJlZml4SlNPTiIsInR5cGVQcmVmaXgiLCJjb25zdHJ1Y3RvcnMiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJjb25zdHJ1Y3RvciIsIm1ldGF0aGVvcmVtcyIsIk1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtSlNPTiIsIm1ldGF0aGVvcmVtIiwic3VwcG9zaXRpb25zIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25KU09OIiwic3VwcG9zaXRpb24iLCJzdWJzdGl0dXRpb25zIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uc0pTT04iLCJTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25KU09OIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXNKU09OIiwicmVsZWFzZUNvbnRleHQiLCJlbXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJ0b0pTT04iLCJtZXRhVHlwZUpTT04iLCJtYXBTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpaW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBa2NnQkE7ZUFBQUE7O1FBeWNBQztlQUFBQTs7UUF6WUFDO2VBQUFBOztRQXFiQUM7ZUFBQUE7O1FBdHFCQUM7ZUFBQUE7O1FBOGZBQztlQUFBQTs7UUE3UkFDO2VBQUFBOztRQXliQUM7ZUFBQUE7O1FBMXlCQUM7ZUFBQUE7O1FBOGpCQUM7ZUFBQUE7O1FBN05BQztlQUFBQTs7UUE2YkFDO2VBQUFBOztRQTdYQUM7ZUFBQUE7O1FBeWFBQztlQUFBQTs7UUFuM0JBQztlQUFBQTs7UUF5bEJBQztlQUFBQTs7UUE5REFDO2VBQUFBOztRQWxTQUM7ZUFBQUE7O1FBc2lCQUM7ZUFBQUE7O1FBdG9CQUM7ZUFBQUE7O1FBb2hCQUM7ZUFBQUE7O1FBbllBQztlQUFBQTs7UUEyYkFDO2VBQUFBOztRQTNaQUM7ZUFBQUE7O1FBMmNBQztlQUFBQTs7UUF6b0JBQztlQUFBQTs7UUFpYkFDO2VBQUFBOztRQXBaQUM7ZUFBQUE7O1FBMGZBQztlQUFBQTs7UUF0dkJBQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBK0NBQztlQUFBQTs7UUFpbUJBQztlQUFBQTs7UUF6R0FDO2VBQUFBOztRQXFhQUM7ZUFBQUE7O1FBejBCQUM7ZUFBQUE7O1FBdWpCQUM7ZUFBQUE7O1FBbEdBQztlQUFBQTs7UUFzWkFDO2VBQUFBOztRQXgrQkFDO2VBQUFBOztRQWduQkFDO2VBQUFBOztRQS9PQUM7ZUFBQUE7O1FBbWNBQztlQUFBQTs7UUFwakJBQztlQUFBQTs7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