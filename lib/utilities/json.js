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
    get ephemeralContextToEphemeralContextJSON () {
        return ephemeralContextToEphemeralContextJSON;
    },
    get equalitiesFromJSON () {
        return equalitiesFromJSON;
    },
    get equalitiesToEqualitiesJSON () {
        return equalitiesToEqualitiesJSON;
    },
    get frameFromJSON () {
        return frameFromJSON;
    },
    get frameToFrameJSON () {
        return frameToFrameJSON;
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
    get identifierFromJSON () {
        return identifierFromJSON;
    },
    get identifierToIdentifierJSON () {
        return identifierToIdentifierJSON;
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
    get metaLevelSubstitutionsFromJSON () {
        return metaLevelSubstitutionsFromJSON;
    },
    get metaLevelSubstitutionsToMetaLevelSubstitutionsJSON () {
        return metaLevelSubstitutionsToMetaLevelSubstitutionsJSON;
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
    get negatedFromJSON () {
        return negatedFromJSON;
    },
    get negatedToNegatedJSON () {
        return negatedToNegatedJSON;
    },
    get nominalTypeNameFromJSON () {
        return nominalTypeNameFromJSON;
    },
    get nominalTypeNameToNominalTypeNameJSON () {
        return nominalTypeNameToNominalTypeNameJSON;
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
    get propertyRelationsFromJSON () {
        return propertyRelationsFromJSON;
    },
    get propertyRelationsToPropertyRelationsJSON () {
        return propertyRelationsToPropertyRelationsJSON;
    },
    get provisionalFromJSON () {
        return provisionalFromJSON;
    },
    get provisionalToProvisionalJSON () {
        return provisionalToProvisionalJSON;
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
const _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
const _ephemeral = /*#__PURE__*/ _interop_require_default(require("../context/ephemeral"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function lemmasFromNothing() {
    const lemmas = [];
    return lemmas;
}
function metaLemmasFromNothing() {
    const metaLemmas = [];
    return metaLemmas;
}
function nameFromJSON(json, context) {
    let { name } = json;
    const nameJSON = name; ///
    name = nameJSON; ///
    return name;
}
function termFromJSON(json, context) {
    let { term } = json;
    if (term !== null) {
        const termJSON = term; ///
        json = termJSON; ///
        const { Term } = _elements.default;
        term = Term.fromJSON(json, context);
    }
    return term;
}
function typeFromJSON(json, context) {
    let { type } = json;
    if (type !== null) {
        json = type; ///
        const { string } = json, name = string; ///
        type = findTypeByName(name, context);
    }
    return type;
}
function labelFromJSON(json, context) {
    let { label } = json;
    const { Label } = _elements.default, labelJSON = label; ///
    json = labelJSON; ///
    label = Label.fromJSON(json, context);
    return label;
}
function frameFromJSON(json, context) {
    let { frame } = json;
    if (frame !== null) {
        const frameJSON = frame; ///
        json = frameJSON; ///
        const { Frame } = _elements.default;
        frame = Frame.fromJSON(json, context);
    }
    return frame;
}
function negatedFromJSON(json, context) {
    const { negated } = json;
    return negated;
}
function metaTypeFromJSON(json, context) {
    let { metaType } = json;
    if (metaType !== null) {
        json = metaType; ///
        const { string } = json, name = string; ///
        metaType = findMetaTypeByName(name, context);
    }
    return metaType;
}
function statementFromJSON(json, context) {
    let { statement = null } = json;
    if (statement !== null) {
        const { Statement } = _elements.default, statementJSON = statement; ///
        json = statementJSON; ///
        statement = Statement.fromJSON(json, context);
    }
    return statement;
}
function deductionFromJSON(json, context) {
    let { deduction } = json;
    const { Deduction } = _elements.default, deductionJSON = deduction; ///
    json = deductionJSON; ///
    deduction = Deduction.fromJSON(json, context);
    return deduction;
}
function signatureFromJSON(json, context) {
    let { signature = null } = json;
    if (signature !== null) {
        const { Signature } = _elements.default, signatureJSON = signature; ///
        json = signatureJSON; ///
        signature = Signature.fromJSON(json, context);
    }
    return signature;
}
function referenceFromJSON(json, context) {
    let { reference } = json;
    const { Reference } = _elements.default, referenceJSON = reference; ///
    json = referenceJSON; ///
    reference = Reference.fromJSON(json, context);
    return reference;
}
function identifierFromJSON(json, context) {
    let { identifier } = json;
    const identifierJSON = identifier; ///
    identifier = identifierJSON; ///
    return identifier;
}
function conclusionFromJSON(json, context) {
    let { conclusion } = json;
    const { Conclusion } = _elements.default, conclusionJSON = conclusion; ///
    json = conclusionJSON; ///
    conclusion = Conclusion.fromJSON(json, context);
    return conclusion;
}
function provisionalFromJSON(json, context) {
    const { provisional } = json;
    return provisional;
}
function metavariableFromJSON(json, context) {
    let { metavariable } = json;
    const { Metavariable } = _elements.default, metavariableJSON = metavariable; ///
    json = metavariableJSON; ///
    metavariable = Metavariable.fromJSON(json, context);
    return metavariable;
}
function procedureCallFromJSON(json, context) {
    let { procedureCall = null } = json;
    if (procedureCall !== null) {
        const { ProcedureCall } = _elements.default, procedureCallJSON = procedureCall; ///
        json = procedureCallJSON; ///
        procedureCall = ProcedureCall.fromJSON(json, context);
    }
    return procedureCall;
}
function nominalTypeNameFromJSON(json, context) {
    const { nominalTypeName } = json;
    return nominalTypeName;
}
function procedureReferenceFromJSON(json, context) {
    let { procedureReference } = json;
    const { ProcedureReference } = _elements.default, procedureReferenceJSON = procedureReference; ///
    json = procedureReferenceJSON; ///
    procedureReference = ProcedureReference.fromJSON(json, context);
    return procedureReference;
}
function typesFromJSON(json, types, context) {
    const { types: typesJSON } = json;
    const { Type } = _elements.default;
    typesJSON.forEach((typeJSON)=>{
        const json = typeJSON, type = Type.fromJSON(json, context);
        types.push(type);
    });
}
function termsFromJSON(json, context) {
    let { terms } = json;
    const { Term } = _elements.default, termsJSON = terms; ///
    terms = termsJSON.map((termJSON)=>{
        const json = termJSON, term = Term.fromJSON(json, context);
        return term;
    });
    return terms;
}
function rulesFromJSON(json, context) {
    let { rules } = json;
    const { Rule } = _elements.default, rulesJSON = rules; ///
    rules = rulesJSON.map((ruleJSON)=>{
        const json = ruleJSON, rule = Rule.fromJSON(json, context);
        return rule;
    });
    return rules;
}
function framesFromJSON(json, context) {
    let { frames } = json;
    const { Frame } = _elements.default, framesJSON = frames; ///
    frames = framesJSON.map((frameJSON)=>{
        const json = frameJSON, frame = Frame.fromJSON(json, context);
        return frame;
    });
    return frames;
}
function labelsFromJSON(json, context) {
    let { labels } = json;
    const { Label } = _elements.default, labelsJSON = labels; ///
    labels = labelsJSON.map((labelJSON)=>{
        const json = labelJSON, label = Label.fromJSON(json, context);
        return label;
    });
    return labels;
}
function axiomsFromJSON(json, context) {
    let { axioms } = json;
    const { Axiom } = _elements.default, axiomsJSON = axioms; ///
    axioms = axiomsJSON.map((axiomJSON)=>{
        const json = axiomJSON, axiom = Axiom.fromJSON(json, context);
        return axiom;
    });
    return axioms;
}
function premisesFromJSON(json, context) {
    let { premises } = json;
    const { Premise } = _elements.default, premisesJSON = premises; ///
    premises = premisesJSON.map((premiseJSON)=>{
        const json = premiseJSON, premise = Premise.fromJSON(json, context);
        return premise;
    });
    return premises;
}
function theoremsFromJSON(json, context) {
    let { theorems } = json;
    const { Theorem } = _elements.default, theoremsJSON = theorems; ///
    theorems = theoremsJSON.map((theoremJSON)=>{
        const json = theoremJSON, theorem = Theorem.fromJSON(json, context);
        return theorem;
    });
    return theorems;
}
function variablesFromJSON(json, context) {
    let { variables } = json;
    const { Variable } = _elements.default, variablesJSON = variables; ///
    variables = variablesJSON.map((variableJSON)=>{
        const json = variableJSON, variable = Variable.fromJSON(json, context);
        return variable;
    });
    return variables;
}
function equalitiesFromJSON(json, context) {
    let { equalities } = json;
    const { Equality } = _elements.default, equalitiesJSON = equalities; ///
    equalities = equalitiesJSON.map((equalityJSON)=>{
        const json = equalityJSON, equality = Equality.fromJSON(json, context);
        return equality;
    });
    return equalities;
}
function propertiesFromJSON(json, context) {
    let { properties } = json;
    const { Property } = _elements.default, propertiesJSON = properties; ///
    properties = propertiesJSON.map((propertyJSON)=>{
        const json = propertyJSON, property = Property.fromJSON(json, context);
        return property;
    });
    return properties;
}
function superTypesFromJSON(json, context) {
    const { superTypes: superTypesJSON } = json;
    const superTypes = superTypesJSON.map((superTypeJSON)=>{
        const json = superTypeJSON, { string } = json, name = string, type = findTypeByName(name, context), superType = type; ///
        return superType;
    });
    return superTypes;
}
function hypothesesFromJSON(json, context) {
    let { hypotheses } = json;
    const { Hypothesis } = _elements.default, hypothesesJSON = hypotheses; ///
    hypotheses = hypothesesJSON.map((hypothesisJSON)=>{
        const json = hypothesisJSON, hypothesis = Hypothesis.fromJSON(json, context);
        return hypothesis;
    });
    return hypotheses;
}
function parametersFromJSON(json, context) {
    let { parameters } = json;
    const { Parameter } = _elements.default, parametersJSON = parameters; ///
    parameters = parametersJSON.map((parameterJSON)=>{
        const json = parameterJSON, parameter = Parameter.fromJSON(json, context);
        return parameter;
    });
    return parameters;
}
function judgementsFromJSON(json, context) {
    let { judgements } = json;
    const { Judgement } = _elements.default, judgementsJSON = judgements; ///
    judgements = judgementsJSON.map((judgementJSON)=>{
        const json = judgementJSON, judgement = Judgement.fromJSON(json, context);
        return judgement;
    });
    return judgements;
}
function statementsFromJSON(json, context) {
    let { statements } = json;
    const { Statement } = _elements.default, statementsJSON = statements; ///
    statements = statementsJSON.map((statementJSON)=>{
        const json = statementJSON, statement = Statement.fromJSON(json, context);
        return statement;
    });
    return statements;
}
function assertionsFromJSON(json, context) {
    let { assertions } = json;
    const { TypeAssertion, DefinedAssertion, PropertyAssertion, SubproofAssertion, SatisfiesAssertion, ContainedAssertion } = _elements.default, assertionsJSON = assertions; ///
    assertions = assertionsJSON.map((assertionJSON)=>{
        const json = assertionJSON, assertion = TypeAssertion.fromJSON(json, context) || DefinedAssertion.fromJSON(json, context) || PropertyAssertion.fromJSON(json, context) || SubproofAssertion.fromJSON(json, context) || SatisfiesAssertion.fromJSON(json, context) || ContainedAssertion.fromJSON(json, context);
        return assertion;
    });
    return assertions;
}
function referencesFromJSON(json, context) {
    let { references } = json;
    const { Reference } = _elements.default, referencesJSON = references; ///
    references = referencesJSON.map((referenceJSON)=>{
        const json = referenceJSON, reference = Reference.fromJSON(json, context);
        return reference;
    });
    return references;
}
function conjecturesFromJSON(json, context) {
    let { conjectures } = json;
    const { Conjecture } = _elements.default, conjecturesJSON = conjectures; ///
    conjectures = conjecturesJSON.map((conjectureJSON)=>{
        const json = conjectureJSON, conjecture = Conjecture.fromJSON(json, context);
        return conjecture;
    });
    return conjectures;
}
function combinatorsFromJSON(json, context) {
    let { combinators } = json;
    const { Combinator } = _elements.default, combinatorsJSON = combinators; ///
    combinators = combinatorsJSON.map((combinatorJSON)=>{
        const json = combinatorJSON, combinator = Combinator.fromJSON(json, context);
        return combinator;
    });
    return combinators;
}
function assumptionsFromJSON(json, context) {
    let { assumptions } = json;
    const { Assumption } = _elements.default, assumptionsJSON = assumptions; ///
    assumptions = assumptionsJSON.map((assumptionJSON)=>{
        const json = assumptionJSON, assumption = Assumption.fromJSON(json, context);
        return assumption;
    });
    return assumptions;
}
function typePrefixesFromJSON(json, context) {
    let { typePrefixes } = json;
    const { TypePrefix } = _elements.default, typePrefixesJSON = typePrefixes; ///
    typePrefixes = typePrefixesJSON.map((typePrefixJSON)=>{
        const json = typePrefixJSON, typePrefix = TypePrefix.fromJSON(json, context);
        return typePrefix;
    });
    return typePrefixes;
}
function constructorsFromJSON(json, context) {
    let { constructors } = json;
    const { Constructor } = _elements.default, constructorsJSON = constructors; ///
    constructors = constructorsJSON.map((constructorJSON)=>{
        const json = constructorJSON, constructor = Constructor.fromJSON(json, context);
        return constructor;
    });
    return constructors;
}
function metatheoremsFromJSON(json, context) {
    let { metatheorems } = json;
    const { Metatheorem } = _elements.default, metatheoremsJSON = metatheorems; ///
    metatheorems = metatheoremsJSON.map((metatheoremJSON)=>{
        const json = metatheoremJSON, metatheorem = Metatheorem.fromJSON(json, context);
        return metatheorem;
    });
    return metatheorems;
}
function suppositionsFromJSON(json, context) {
    let { suppositions } = json;
    const { Supposition } = _elements.default, suppositionsJSON = suppositions; ///
    suppositions = suppositionsJSON.map((suppositionJSON)=>{
        const json = suppositionJSON, supposition = Supposition.fromJSON(json, context);
        return supposition;
    });
    return suppositions;
}
function substitutionsFromJSON(json, context) {
    let { substitutions } = json; ///
    const { StatementSubstitution } = _elements.default, substitutionsJSON = substitutions, Substitution = StatementSubstitution; ///
    substitutions = substitutionsJSON.map((substitutionJSON)=>{
        const json = substitutionJSON, substitution = Substitution.fromJSON(json, context);
        return substitution;
    });
    return substitutions;
}
function metavariablesFromJSON(json, context) {
    let { metavariables } = json;
    const { Metavariable } = _elements.default, metavariablesJSON = metavariables; ///
    metavariables = metavariablesJSON.map((metavariableJSON)=>{
        const json = metavariableJSON, metavariable = Metavariable.fromJSON(json, context);
        return metavariable;
    });
    return metavariables;
}
function ephemeralContextFromJSON(json, context) {
    const releaseContext = context;
    ({ context } = json);
    json = context; ///
    context = releaseContext; ///
    const emphemeralContext = _ephemeral.default.fromJSON(json, context);
    return emphemeralContext;
}
function propertyRelationsFromJSON(json, context) {
    let { propertyRelations } = json;
    const { PropertyRelation } = _elements.default, propertyRelationsJSON = propertyRelations; ///
    propertyRelations = propertyRelationsJSON.map((propertyRelationJSON)=>{
        const json = propertyRelationJSON, propertyRelation = PropertyRelation.fromJSON(json, context);
        return propertyRelation;
    });
    return propertyRelations;
}
function metaLevelSubstitutionsFromJSON(json, context) {
    let { metaLevelSubstitutions } = json; ///
    const { MetaLevelSubstitution } = _elements.default, metaLevelSubstitutionsJSON = metaLevelSubstitutions; ///
    metaLevelSubstitutions = metaLevelSubstitutionsJSON.map((metaLevelSubstitutionJSON)=>{
        const json = metaLevelSubstitutionJSON, metaLevelSubstitution = MetaLevelSubstitution.fromJSON(json, context);
        return metaLevelSubstitution;
    });
    return metaLevelSubstitutions;
}
function nameToNameJSON(name) {
    const nameJSON = name; ///
    return nameJSON;
}
function termToTermJSON(term) {
    const termJSON = term !== null ? term.toJSON() : null;
    return termJSON;
}
function typeToTypeJSON(type) {
    const typeJSON = type !== null ? type.toJSON() : null;
    return typeJSON;
}
function frameToFrameJSON(frame) {
    const frameJSON = frame !== null ? frame.toJSON() : null;
    return frameJSON;
}
function labelToLabelJSON(label) {
    const labelJSON = label.toJSON();
    return labelJSON;
}
function negatedToNegatedJSON(negated) {
    const negatedJSON = negated; ///
    return negatedJSON;
}
function metaTypeToMetaTypeJSON(metaType) {
    const metaTypeJSON = metaType !== null ? metaType.toJSON() : null;
    return metaTypeJSON;
}
function referenceToReferenceJSON(reference) {
    const referenceJSON = reference.toJSON();
    return referenceJSON;
}
function statementToStatementJSON(statement) {
    const statementJSON = statement !== null ? statement.toJSON() : null;
    return statementJSON;
}
function deductionToDeductionJSON(deduction) {
    const deductionJSON = deduction.toJSON();
    return deductionJSON;
}
function signatureToSignatureJSON(signature) {
    const signatureJSON = signature !== null ? signature.toJSON() : null;
    return signatureJSON;
}
function identifierToIdentifierJSON(identifier) {
    const identifierJSON = identifier; ///
    return identifierJSON;
}
function conclusionToConclusionJSON(conclusion) {
    const conclusionJSON = conclusion.toJSON();
    return conclusionJSON;
}
function provisionalToProvisionalJSON(provisional) {
    const provisionalJSON = provisional; ///
    return provisionalJSON;
}
function metavariableToMetavariableJSON(metavariable) {
    const metavariableJSON = metavariable.toJSON();
    return metavariableJSON;
}
function procedureCallToProcedureCallJSON(procedureCall) {
    const procedureCallJSON = procedureCall !== null ? procedureCall.toJSON() : null;
    return procedureCallJSON;
}
function nominalTypeNameToNominalTypeNameJSON(nominalTypeName) {
    const nominalTypeNameJSON = nominalTypeName; ///
    return nominalTypeNameJSON;
}
function ephemeralContextToEphemeralContextJSON(ephemeralContext) {
    const ephemeralContextJSON = ephemeralContext.toJSON();
    return ephemeralContextJSON;
}
function procedureReferenceToProcedureReferenceJSON(procedureReference) {
    const procedureReferenceJSON = procedureReference.toJSON();
    return procedureReferenceJSON;
}
function termsToTermsJSON(terms) {
    const termsJSON = terms.map((term)=>{
        const termJSON = term.toJSON();
        return termJSON;
    });
    return termsJSON;
}
function typesToTypesJSON(types) {
    const typesJSON = types.map((type)=>{
        const typeJSON = type.toJSON();
        return typeJSON;
    });
    return typesJSON;
}
function rulesToRulesJSON(rules) {
    const rulesJSON = rules.map((rule)=>{
        const ruleJSON = rule.toJSON();
        return ruleJSON;
    });
    return rulesJSON;
}
function labelsToLabelsJSON(labels) {
    const labelsJSON = labels.map((label)=>{
        const labelJSON = label.toJSON();
        return labelJSON;
    });
    return labelsJSON;
}
function framesToFramesJSON(frames) {
    const framesJSON = frames.map((frame)=>{
        const frameJSON = frame.toJSON();
        return frameJSON;
    });
    return framesJSON;
}
function axiomsToAxiomsJSON(axioms) {
    const axiomsJSON = axioms.map((axiom)=>{
        const axiomJSON = axiom.toJSON();
        return axiomJSON;
    });
    return axiomsJSON;
}
function premisesToPremisesJSON(premises) {
    const premisesJSON = premises.map((premise)=>{
        const premiseJSON = premise.toJSON();
        return premiseJSON;
    });
    return premisesJSON;
}
function theoremsToTheoremsJSON(theorems) {
    const theoremsJSON = theorems.map((theorem)=>{
        const theoremJSON = theorem.toJSON();
        return theoremJSON;
    });
    return theoremsJSON;
}
function variablesToVariablesJSON(variables) {
    const variablesJSON = variables.map((variable)=>{
        const variableJSON = variable.toJSON();
        return variableJSON;
    });
    return variablesJSON;
}
function hypothesesToHypothesesJSON(hypotheses) {
    const hypothesesJSON = hypotheses.map((hypothesis)=>{
        const hypothesisJSON = hypothesis.toJSON();
        return hypothesisJSON;
    });
    return hypothesesJSON;
}
function superTypesToSuperTypesJSON(superTypes) {
    const superTypesJSON = superTypes.map((superType)=>{
        const superTypeJSON = superType.toJSON();
        return superTypeJSON;
    });
    return superTypesJSON;
}
function parametersToParametersJSON(parameters) {
    const parametersJSON = parameters.map((parameter)=>{
        const parameterJSON = parameter.toJSON();
        return parameterJSON;
    });
    return parametersJSON;
}
function propertiesToPropertiesJSON(properties) {
    const propertiesJSON = properties.map((property)=>{
        const propertyJSON = property.toJSON();
        return propertyJSON;
    });
    return propertiesJSON;
}
function judgementsToJudgementsJSON(judgements) {
    const judgementsJSON = judgements.map((judgement)=>{
        const judgementJSON = judgement.toJSON();
        return judgementJSON;
    });
    return judgementsJSON;
}
function equalitiesToEqualitiesJSON(equalities) {
    const equalitiesJSON = equalities.map((equality)=>{
        const equalityJSON = equality.toJSON();
        return equalityJSON;
    });
    return equalitiesJSON;
}
function statementsToStatementsJSON(statements) {
    const statementsJSON = statements.map((statement)=>{
        const statementJSON = statement.toJSON();
        return statementJSON;
    });
    return statementsJSON;
}
function assertionsToAssertionsJSON(assertions) {
    const assertionsJSON = assertions.map((assertion)=>{
        const assertionJSON = assertion.toJSON();
        return assertionJSON;
    });
    return assertionsJSON;
}
function referencesToReferencesJSON(references) {
    const referencesJSON = references.map((reference)=>{
        const referenceJSON = reference.toJSON();
        return referenceJSON;
    });
    return referencesJSON;
}
function conjecturesToConjecturesJSON(conjectures) {
    const conjecturesJSON = conjectures.map((conjecture)=>{
        const conjectureJSON = conjecture.toJSON();
        return conjectureJSON;
    });
    return conjecturesJSON;
}
function combinatorsToCombinatorsJSON(combinators) {
    const combinatorsJSON = combinators.map((combinator)=>{
        const combinatorJSON = combinator.toJSON();
        return combinatorJSON;
    });
    return combinatorsJSON;
}
function assumptionsToAssumptionsJSON(assumptions) {
    const assumptionsJSON = assumptions.map((assumption)=>{
        const assumptionJSON = assumption.toJSON();
        return assumptionJSON;
    });
    return assumptionsJSON;
}
function suppositionsToSuppositionsJSON(suppositions) {
    const suppositionsJSON = suppositions.map((supposition)=>{
        const suppositionJSON = supposition.toJSON();
        return suppositionJSON;
    });
    return suppositionsJSON;
}
function constructorsToConstructorsJSON(constructors) {
    const constructorsJSON = constructors.map((constructor)=>{
        const constructorJSON = constructor.toJSON();
        return constructorJSON;
    });
    return constructorsJSON;
}
function metatheoremsToMetatheoremsJSON(metatheorems) {
    const metatheoremsJSON = metatheorems.map((metatheorem)=>{
        const metatheoremJSON = metatheorem.toJSON();
        return metatheoremJSON;
    });
    return metatheoremsJSON;
}
function typePrefixesToTypePrefixesJSON(typePrefixes) {
    const typePrefixesJSON = typePrefixes.map((typePrefix)=>{
        const typePrefixJSON = typePrefix.toJSON();
        return typePrefixJSON;
    });
    return typePrefixesJSON;
}
function substitutionsToSubstitutionsJSON(substitutions) {
    const substitutionsJSON = substitutions.map((substitution)=>{
        const substitutionJSON = substitution.toJSON();
        return substitutionJSON;
    });
    return substitutionsJSON;
}
function metavariablesToMetavariablesJSON(metavariables) {
    const metavariablesJSON = metavariables.map((metavariable)=>{
        const metavariableJSON = metavariable.toJSON();
        return metavariableJSON;
    });
    return metavariablesJSON;
}
function propertyRelationsToPropertyRelationsJSON(propertyRelations) {
    const propertyRelationsJSON = propertyRelations.map((propertyRelation)=>{
        const propertyRelationJSON = propertyRelation.toJSON();
        return propertyRelationJSON;
    });
    return propertyRelationsJSON;
}
function metaLevelSubstitutionsToMetaLevelSubstitutionsJSON(metaLevelSubstitutions) {
    const metaLevelSubstitutionsJSON = metaLevelSubstitutions.map((metaLevelSubstitution)=>{
        const metaLevelSubstitutionJSON = metaLevelSubstitution.toJSON();
        return metaLevelSubstitutionJSON;
    });
    return metaLevelSubstitutionsJSON;
}
function findTypeByName(name, context) {
    const typeName = name, type = context.findTypeByTypeName(typeName);
    return type;
}
function findMetaTypeByName(name, context) {
    const metaTypeName = name, metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEVwaGVtZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZXBoZW1lcmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbmFtZSB9ID0ganNvbjtcblxuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICBuYW1lID0gbmFtZUpTT047ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICAgIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cztcblxuICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAganNvbiA9IHR5cGU7ICAvLy9cblxuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIG5hbWUgPSBzdHJpbmc7ICAvLy9cblxuICAgIHR5cGUgPSBmaW5kVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGxhYmVsIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgIGxhYmVsSlNPTiA9IGxhYmVsOyAgLy8vXG5cbiAganNvbiA9IGxhYmVsSlNPTjsgLy8vXG5cbiAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZnJhbWUgfSA9IGpzb247XG5cbiAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgY29uc3QgZnJhbWVKU09OID0gZnJhbWU7ICAvLy9cblxuICAgIGpzb24gPSBmcmFtZUpTT047ICAvLy9cblxuICAgIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzO1xuXG4gICAgZnJhbWUgPSBGcmFtZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbmVnYXRlZCB9ID0ganNvbjtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBqc29uID0gbWV0YVR5cGU7ICAvLy9cblxuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIG5hbWUgPSBzdHJpbmc7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gZmluZE1ldGFUeXBlQnlOYW1lKG5hbWUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnQgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudDsgIC8vL1xuXG4gICAganNvbiA9IHN0YXRlbWVudEpTT047IC8vL1xuXG4gICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZGVkdWN0aW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRGVkdWN0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvbjsgIC8vL1xuXG4gIGpzb24gPSBkZWR1Y3Rpb25KU09OOyAgLy8vXG5cbiAgZGVkdWN0aW9uID0gRGVkdWN0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHNpZ25hdHVyZSA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHNpZ25hdHVyZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzaWduYXR1cmVKU09OID0gc2lnbmF0dXJlOyAgLy8vXG5cbiAgICBqc29uID0gc2lnbmF0dXJlSlNPTjsgLy8vXG5cbiAgICBzaWduYXR1cmUgPSBTaWduYXR1cmUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyByZWZlcmVuY2UgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlOyAgLy8vXG5cbiAganNvbiA9IHJlZmVyZW5jZUpTT047IC8vL1xuXG4gIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllckZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgaWRlbnRpZmllciB9ID0ganNvbjtcblxuICBjb25zdCBpZGVudGlmaWVySlNPTiA9IGlkZW50aWZpZXI7ICAvLy9cblxuICBpZGVudGlmaWVyID0gaWRlbnRpZmllckpTT047ICAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aXNpb25hbEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBwcm92aXNpb25hbCB9ID0ganNvbjtcblxuICByZXR1cm4gcHJvdmlzaW9uYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGU7ICAvLy9cblxuICBqc29uID0gbWV0YXZhcmlhYmxlSlNPTjsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVDYWxsID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbEpTT04gPSBwcm9jZWR1cmVDYWxsOyAgLy8vXG5cbiAgICBqc29uID0gcHJvY2VkdXJlQ2FsbEpTT047IC8vL1xuXG4gICAgcHJvY2VkdXJlQ2FsbCA9IFByb2NlZHVyZUNhbGwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbWluYWxUeXBlTmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBub21pbmFsVHlwZU5hbWUgfSA9IGpzb247XG5cbiAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlSlNPTiA9IHByb2NlZHVyZVJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSBwcm9jZWR1cmVSZWZlcmVuY2VKU09OOyAgLy8vXG5cbiAgcHJvY2VkdXJlUmVmZXJlbmNlID0gUHJvY2VkdXJlUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc0Zyb21KU09OKGpzb24sIHR5cGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgdHlwZXM6IHR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGUgfSA9IGVsZW1lbnRzO1xuXG4gIHR5cGVzSlNPTi5mb3JFYWNoKCh0eXBlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdHlwZXMucHVzaCh0eXBlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGVybXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGVybXNKU09OID0gdGVybXM7IC8vL1xuXG4gIHRlcm1zID0gdGVybXNKU09OLm1hcCgodGVybUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcnVsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSdWxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcnVsZXNKU09OID0gcnVsZXM7IC8vL1xuXG4gIHJ1bGVzID0gcnVsZXNKU09OLm1hcCgocnVsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBydWxlO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGZyYW1lcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEZyYW1lIH0gPSBlbGVtZW50cyxcbiAgICBmcmFtZXNKU09OID0gZnJhbWVzOyAvLy9cblxuICBmcmFtZXMgPSBmcmFtZXNKU09OLm1hcCgoZnJhbWVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGZyYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH0pO1xuXG4gIHJldHVybiBmcmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBheGlvbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBBeGlvbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGF4aW9tc0pTT04gPSBheGlvbXM7IC8vL1xuXG4gIGF4aW9tcyA9IGF4aW9tc0pTT04ubWFwKChheGlvbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXhpb21KU09OLCAgLy8vXG4gICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByZW1pc2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLm1hcCgocHJlbWlzZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJlbWlzZUpTT04sIC8vL1xuICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtczsgLy8vXG5cbiAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04ubWFwKCh0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIHRoZW9yZW0gPSBUaGVvcmVtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzOyAvLy9cblxuICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLm1hcCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBlcXVhbGl0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRXF1YWxpdHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXM7IC8vL1xuXG4gIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzSlNPTi5tYXAoKGVxdWFsaXR5SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBlcXVhbGl0eUpTT04sICAvLy9cbiAgICAgICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9KTtcblxuICByZXR1cm4gZXF1YWxpdGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb3BlcnRpZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcm9wZXJ0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllczsgLy8vXG5cbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNKU09OLm1hcCgocHJvcGVydHlKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByb3BlcnR5SlNPTiwgIC8vL1xuICAgICAgICAgIHByb3BlcnR5ID0gUHJvcGVydHkuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBzdXBlclR5cGVzOiBzdXBlclR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0pTT04ubWFwKChzdXBlclR5cGVKU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IHN1cGVyVHlwZUpTT04sICAvLy9cbiAgICAgICAgICAgICAgICB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgICBuYW1lID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgICAgdHlwZSA9IGZpbmRUeXBlQnlOYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBoeXBvdGhlc2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgSHlwb3RoZXNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlczsgIC8vL1xuXG4gIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzSlNPTi5tYXAoKGh5cG90aGVzaXNKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGh5cG90aGVzaXNKU09OLCAvLy9cbiAgICAgICAgICBoeXBvdGhlc2lzID0gSHlwb3RoZXNpcy5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9KTtcblxuICByZXR1cm4gaHlwb3RoZXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHBhcmFtZXRlcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnM7IC8vL1xuXG4gIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzSlNPTi5tYXAoKHBhcmFtZXRlckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcGFyYW1ldGVySlNPTiwgIC8vL1xuICAgICAgICAgIHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsganVkZ2VtZW50cyB9ID0ganNvbjtcblxuICBjb25zdCB7IEp1ZGdlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50czsgLy8vXG5cbiAganVkZ2VtZW50cyA9IGp1ZGdlbWVudHNKU09OLm1hcCgoanVkZ2VtZW50SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBqdWRnZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganVkZ2VtZW50ID0gSnVkZ2VtZW50LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGp1ZGdlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnRzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3RhdGVtZW50c0pTT04gPSBzdGF0ZW1lbnRzOyAvLy9cblxuICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0pTT04ubWFwKChzdGF0ZW1lbnRKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGFzc2VydGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlQXNzZXJ0aW9uLCBEZWZpbmVkQXNzZXJ0aW9uLCBQcm9wZXJ0eUFzc2VydGlvbiwgU3VicHJvb2ZBc3NlcnRpb24sIFNhdGlzZmllc0Fzc2VydGlvbiwgQ29udGFpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zOyAvLy9cblxuICBhc3NlcnRpb25zID0gYXNzZXJ0aW9uc0pTT04ubWFwKChhc3NlcnRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGFzc2VydGlvbkpTT04sICAvLy9cbiAgICAgICAgICBhc3NlcnRpb24gPSBUeXBlQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIERlZmluZWRBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgUHJvcGVydHlBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgU3VicHJvb2ZBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgU2F0aXNmaWVzQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIENvbnRhaW5lZEFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH0pO1xuXG4gIHJldHVybiBhc3NlcnRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcmVmZXJlbmNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJlZmVyZW5jZXNKU09OID0gcmVmZXJlbmNlczsgLy8vXG5cbiAgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZXNKU09OLm1hcCgocmVmZXJlbmNlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSByZWZlcmVuY2VKU09OLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uamVjdHVyZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXM7IC8vL1xuXG4gIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLm1hcCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uamVjdHVyZUpTT04sICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29tYmluYXRvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnM7IC8vL1xuXG4gIGNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNKU09OLm1hcCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29tYmluYXRvckpTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXNzdW1wdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBBc3N1bXB0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnM7IC8vL1xuXG4gIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNKU09OLm1hcCgoYXNzdW1wdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXNzdW1wdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uID0gQXNzdW1wdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4ZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHR5cGVQcmVmaXhlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGVQcmVmaXggfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzOyAvLy9cblxuICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLm1hcCgodHlwZVByZWZpeEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZVByZWZpeEpTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ID0gVHlwZVByZWZpeC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25zdHJ1Y3RvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnM7IC8vL1xuXG4gIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04ubWFwKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zOyAvLy9cblxuICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLm1hcCgobWV0YXRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN1cHBvc2l0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3Vic3RpdHV0aW9ucyB9ID0ganNvbjsgIC8vL1xuXG4gIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uOyAvLy9cblxuICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04ubWFwKChzdWJzdGl0dXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBTdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXM7IC8vL1xuXG4gIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTi5tYXAoKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSBjb250ZXh0O1xuXG4gICh7Y29udGV4dH0gPSBqc29uKTtcblxuICBqc29uID0gY29udGV4dDsgLy8vXG5cbiAgY29udGV4dCA9IHJlbGVhc2VDb250ZXh0OyAvLy9cblxuICBjb25zdCBlbXBoZW1lcmFsQ29udGV4dCA9IEVwaGVtZXJhbENvbnRleHQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGVtcGhlbWVyYWxDb250ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb3BlcnR5UmVsYXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHlSZWxhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zSlNPTiA9IHByb3BlcnR5UmVsYXRpb25zOyAvLy9cblxuICBwcm9wZXJ0eVJlbGF0aW9ucyA9IHByb3BlcnR5UmVsYXRpb25zSlNPTi5tYXAoKHByb3BlcnR5UmVsYXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByb3BlcnR5UmVsYXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IFByb3BlcnR5UmVsYXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxldmVsU3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YUxldmVsU3Vic3RpdHV0aW9ucyB9ID0ganNvbjsgIC8vL1xuXG4gIGNvbnN0IHsgTWV0YUxldmVsU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9uc0pTT04gPSBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zOyAvLy9cblxuICBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zID0gbWV0YUxldmVsU3Vic3RpdHV0aW9uc0pTT04ubWFwKChtZXRhTGV2ZWxTdWJzdGl0dXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICBtZXRhTGV2ZWxTdWJzdGl0dXRpb24gPSBNZXRhTGV2ZWxTdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YUxldmVsU3Vic3RpdHV0aW9uO1xuICB9KTtcblxuICByZXR1cm4gbWV0YUxldmVsU3Vic3RpdHV0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVUb05hbWVKU09OKG5hbWUpIHtcbiAgY29uc3QgbmFtZUpTT04gPSBuYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVRvVGVybUpTT04odGVybSkge1xuICBjb25zdCB0ZXJtSlNPTiA9ICh0ZXJtICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICB0ZXJtLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gdGVybUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlVG9UeXBlSlNPTih0eXBlKSB7XG4gIGNvbnN0IHR5cGVKU09OID0gKHR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0eXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lVG9GcmFtZUpTT04oZnJhbWUpIHtcbiAgY29uc3QgZnJhbWVKU09OID0gKGZyYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgZnJhbWUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gZnJhbWVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxUb0xhYmVsSlNPTihsYWJlbCkge1xuICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICByZXR1cm4gbGFiZWxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZFRvTmVnYXRlZEpTT04obmVnYXRlZCkge1xuICBjb25zdCBuZWdhdGVkSlNPTiA9IG5lZ2F0ZWQ7ICAvLy9cblxuICByZXR1cm4gbmVnYXRlZEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKG1ldGFUeXBlKSB7XG4gIGNvbnN0IG1ldGFUeXBlSlNPTiA9IChtZXRhVHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFUeXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIG1ldGFUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTihyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZS50b0pTT04oKTtcblxuICByZXR1cm4gcmVmZXJlbmNlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTihzdGF0ZW1lbnQpIHtcbiAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IChzdGF0ZW1lbnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50LnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKGRlZHVjdGlvbikge1xuICBjb25zdCBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHNpZ25hdHVyZSkge1xuICBjb25zdCBzaWduYXR1cmVKU09OID0gKHNpZ25hdHVyZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyVG9JZGVudGlmaWVySlNPTihpZGVudGlmaWVyKSB7XG4gIGNvbnN0IGlkZW50aWZpZXJKU09OID0gaWRlbnRpZmllcjsgIC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVySlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKGNvbmNsdXNpb24pIHtcbiAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04ocHJvdmlzaW9uYWwpIHtcbiAgY29uc3QgcHJvdmlzaW9uYWxKU09OID0gcHJvdmlzaW9uYWw7ICAvLy9cblxuICByZXR1cm4gcHJvdmlzaW9uYWxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04ocHJvY2VkdXJlQ2FsbCkge1xuICBjb25zdCBwcm9jZWR1cmVDYWxsSlNPTiA9IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZWR1cmVDYWxsLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsVHlwZU5hbWVUb05vbWluYWxUeXBlTmFtZUpTT04obm9taW5hbFR5cGVOYW1lKSB7XG4gIGNvbnN0IG5vbWluYWxUeXBlTmFtZUpTT04gPSBub21pbmFsVHlwZU5hbWU7ICAvLy9cblxuICByZXR1cm4gbm9taW5hbFR5cGVOYW1lSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OKGVwaGVtZXJhbENvbnRleHQpIHtcbiAgY29uc3QgZXBoZW1lcmFsQ29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0LnRvSlNPTigpO1xuXG4gIHJldHVybiBlcGhlbWVyYWxDb250ZXh0SlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTihwcm9jZWR1cmVSZWZlcmVuY2UpIHtcbiAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlSlNPTiA9IHByb2NlZHVyZVJlZmVyZW5jZS50b0pTT04oKTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zVG9UZXJtc0pTT04odGVybXMpIHtcbiAgY29uc3QgdGVybXNKU09OID0gdGVybXMubWFwKCh0ZXJtKSA9PiB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHRlcm1KU09OO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNUb1R5cGVzSlNPTih0eXBlcykge1xuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gdHlwZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc1RvUnVsZXNKU09OKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVzSlNPTiA9IHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgIHJldHVybiBydWxlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpIHtcbiAgY29uc3QgZnJhbWVzSlNPTiA9IGZyYW1lcy5tYXAoKGZyYW1lKSA9PiB7XG4gICAgY29uc3QgZnJhbWVKU09OID0gZnJhbWUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gZnJhbWVKU09OO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICByZXR1cm4gYXhpb21KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzVG9QcmVtaXNlc0pTT04ocHJlbWlzZXMpIHtcbiAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNUb1RoZW9yZW1zSlNPTih0aGVvcmVtcykge1xuICBjb25zdCB0aGVvcmVtc0pTT04gPSB0aGVvcmVtcy5tYXAoKHRoZW9yZW0pID0+IHtcbiAgICBjb25zdCB0aGVvcmVtSlNPTiA9IHRoZW9yZW0udG9KU09OKCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbUpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odmFyaWFibGVzKSB7XG4gIGNvbnN0IHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTihoeXBvdGhlc2VzKSB7XG4gIGNvbnN0IGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlcy5tYXAoKGh5cG90aGVzaXMpID0+IHtcbiAgICBjb25zdCBoeXBvdGhlc2lzSlNPTiA9IGh5cG90aGVzaXMudG9KU09OKCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpc0pTT047XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHN1cGVyVHlwZXMpIHtcbiAgY29uc3Qgc3VwZXJUeXBlc0pTT04gPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZS50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBlclR5cGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTihwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlckpTT04gPSBwYXJhbWV0ZXIudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVySlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04ocHJvcGVydGllcykge1xuICBjb25zdCBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXMubWFwKChwcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5SlNPTiA9IHByb3BlcnR5LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04oanVkZ2VtZW50cykge1xuICBjb25zdCBqdWRnZW1lbnRzSlNPTiA9IGp1ZGdlbWVudHMubWFwKChqdWRnZW1lbnQpID0+IHtcbiAgICBjb25zdCBqdWRnZW1lbnRKU09OID0ganVkZ2VtZW50LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBqdWRnZW1lbnRzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OKGVxdWFsaXRpZXMpIHtcbiAgY29uc3QgZXF1YWxpdGllc0pTT04gPSBlcXVhbGl0aWVzLm1hcCgoZXF1YWxpdHkpID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eUpTT04gPSBlcXVhbGl0eS50b0pTT04oKTtcblxuICAgIHJldHVybiBlcXVhbGl0eUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBlcXVhbGl0aWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OKHN0YXRlbWVudHMpIHtcbiAgY29uc3Qgc3RhdGVtZW50c0pTT04gPSBzdGF0ZW1lbnRzLm1hcCgoc3RhdGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudC50b0pTT04oKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRKU09OO1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50c0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTihhc3NlcnRpb25zKSB7XG4gIGNvbnN0IGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9ucy5tYXAoKGFzc2VydGlvbikgPT4ge1xuICAgIGNvbnN0IGFzc2VydGlvbkpTT04gPSBhc3NlcnRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc2VydGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlc1RvUmVmZXJlbmNlc0pTT04ocmVmZXJlbmNlcykge1xuICBjb25zdCByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXMubWFwKChyZWZlcmVuY2UpID0+IHtcbiAgICBjb25zdCByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiByZWZlcmVuY2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04oY29uamVjdHVyZXMpIHtcbiAgY29uc3QgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVKU09OO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTihjb21iaW5hdG9ycykge1xuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvckpTT047XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc1RvQXNzdW1wdGlvbnNKU09OKGFzc3VtcHRpb25zKSB7XG4gIGNvbnN0IGFzc3VtcHRpb25zSlNPTiA9IGFzc3VtcHRpb25zLm1hcCgoYXNzdW1wdGlvbikgPT4ge1xuICAgIGNvbnN0IGFzc3VtcHRpb25KU09OID0gYXNzdW1wdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTihzdXBwb3NpdGlvbnMpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25KU09OID0gc3VwcG9zaXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTihjb25zdHJ1Y3RvcnMpIHtcbiAgY29uc3QgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9ycy5tYXAoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgY29uc3QgY29uc3RydWN0b3JKU09OID0gY29uc3RydWN0b3IudG9KU09OKCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JKU09OO1xuICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTihtZXRhdGhlb3JlbXMpIHtcbiAgY29uc3QgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtcy5tYXAoKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1KU09OID0gbWV0YXRoZW9yZW0udG9KU09OKCk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1KU09OO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTih0eXBlUHJlZml4ZXMpIHtcbiAgY29uc3QgdHlwZVByZWZpeGVzSlNPTiA9IHR5cGVQcmVmaXhlcy5tYXAoKHR5cGVQcmVmaXgpID0+IHtcbiAgICBjb25zdCB0eXBlUHJlZml4SlNPTiA9IHR5cGVQcmVmaXgudG9KU09OKCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeEpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlUHJlZml4ZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04oc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnMubWFwKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25KU09OID0gc3Vic3RpdHV0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKG1ldGF2YXJpYWJsZXMpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzLm1hcCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04oKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uc1RvUHJvcGVydHlSZWxhdGlvbnNKU09OKHByb3BlcnR5UmVsYXRpb25zKSB7XG4gIGNvbnN0IHByb3BlcnR5UmVsYXRpb25zSlNPTiA9IHByb3BlcnR5UmVsYXRpb25zLm1hcCgocHJvcGVydHlSZWxhdGlvbikgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25KU09OID0gcHJvcGVydHlSZWxhdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZXZlbFN1YnN0aXR1dGlvbnNUb01ldGFMZXZlbFN1YnN0aXR1dGlvbnNKU09OKG1ldGFMZXZlbFN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgbWV0YUxldmVsU3Vic3RpdHV0aW9uc0pTT04gPSBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zLm1hcCgobWV0YUxldmVsU3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3QgbWV0YUxldmVsU3Vic3RpdHV0aW9uSlNPTiA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBtZXRhTGV2ZWxTdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gbWV0YUxldmVsU3Vic3RpdHV0aW9uc0pTT047XG59XG5cbmZ1bmN0aW9uIGZpbmRUeXBlQnlOYW1lKG5hbWUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIGZpbmRNZXRhVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgbWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuIl0sIm5hbWVzIjpbImFzc2VydGlvbnNGcm9tSlNPTiIsImFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OIiwiYXNzdW1wdGlvbnNGcm9tSlNPTiIsImFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04iLCJheGlvbXNGcm9tSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiIsImVxdWFsaXRpZXNGcm9tSlNPTiIsImVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OIiwiZnJhbWVGcm9tSlNPTiIsImZyYW1lVG9GcmFtZUpTT04iLCJmcmFtZXNGcm9tSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsImh5cG90aGVzZXNGcm9tSlNPTiIsImh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OIiwiaWRlbnRpZmllckZyb21KU09OIiwiaWRlbnRpZmllclRvSWRlbnRpZmllckpTT04iLCJqdWRnZW1lbnRzRnJvbUpTT04iLCJqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTiIsImxhYmVsRnJvbUpTT04iLCJsYWJlbFRvTGFiZWxKU09OIiwibGFiZWxzRnJvbUpTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbnNUb01ldGFMZXZlbFN1YnN0aXR1dGlvbnNKU09OIiwibWV0YVR5cGVGcm9tSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJtZXRhdGhlb3JlbXNGcm9tSlNPTiIsIm1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwibWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04iLCJuYW1lRnJvbUpTT04iLCJuYW1lVG9OYW1lSlNPTiIsIm5lZ2F0ZWRGcm9tSlNPTiIsIm5lZ2F0ZWRUb05lZ2F0ZWRKU09OIiwibm9taW5hbFR5cGVOYW1lRnJvbUpTT04iLCJub21pbmFsVHlwZU5hbWVUb05vbWluYWxUeXBlTmFtZUpTT04iLCJwYXJhbWV0ZXJzRnJvbUpTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwicHJvY2VkdXJlQ2FsbEZyb21KU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInByb3BlcnRpZXNGcm9tSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwicHJvcGVydHlSZWxhdGlvbnNGcm9tSlNPTiIsInByb3BlcnR5UmVsYXRpb25zVG9Qcm9wZXJ0eVJlbGF0aW9uc0pTT04iLCJwcm92aXNpb25hbEZyb21KU09OIiwicHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTiIsInJlZmVyZW5jZUZyb21KU09OIiwicmVmZXJlbmNlVG9SZWZlcmVuY2VKU09OIiwicmVmZXJlbmNlc0Zyb21KU09OIiwicmVmZXJlbmNlc1RvUmVmZXJlbmNlc0pTT04iLCJydWxlc0Zyb21KU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsInNpZ25hdHVyZUZyb21KU09OIiwic2lnbmF0dXJlVG9TaWduYXR1cmVKU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRzRnJvbUpTT04iLCJzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwic3VwZXJUeXBlc0Zyb21KU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInRlcm1Gcm9tSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwidGVybXNGcm9tSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJ0aGVvcmVtc0Zyb21KU09OIiwidGhlb3JlbXNUb1RoZW9yZW1zSlNPTiIsInR5cGVGcm9tSlNPTiIsInR5cGVQcmVmaXhlc0Zyb21KU09OIiwidHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OIiwidHlwZVRvVHlwZUpTT04iLCJ0eXBlc0Zyb21KU09OIiwidHlwZXNUb1R5cGVzSlNPTiIsInZhcmlhYmxlc0Zyb21KU09OIiwidmFyaWFibGVzVG9WYXJpYWJsZXNKU09OIiwibGVtbWFzIiwibWV0YUxlbW1hcyIsImpzb24iLCJjb250ZXh0IiwibmFtZSIsIm5hbWVKU09OIiwidGVybSIsInRlcm1KU09OIiwiVGVybSIsImVsZW1lbnRzIiwiZnJvbUpTT04iLCJ0eXBlIiwic3RyaW5nIiwiZmluZFR5cGVCeU5hbWUiLCJsYWJlbCIsIkxhYmVsIiwibGFiZWxKU09OIiwiZnJhbWUiLCJmcmFtZUpTT04iLCJGcmFtZSIsIm5lZ2F0ZWQiLCJtZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TmFtZSIsInN0YXRlbWVudCIsIlN0YXRlbWVudCIsInN0YXRlbWVudEpTT04iLCJkZWR1Y3Rpb24iLCJEZWR1Y3Rpb24iLCJkZWR1Y3Rpb25KU09OIiwic2lnbmF0dXJlIiwiU2lnbmF0dXJlIiwic2lnbmF0dXJlSlNPTiIsInJlZmVyZW5jZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZUpTT04iLCJpZGVudGlmaWVyIiwiaWRlbnRpZmllckpTT04iLCJjb25jbHVzaW9uIiwiQ29uY2x1c2lvbiIsImNvbmNsdXNpb25KU09OIiwicHJvdmlzaW9uYWwiLCJtZXRhdmFyaWFibGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVKU09OIiwicHJvY2VkdXJlQ2FsbCIsIlByb2NlZHVyZUNhbGwiLCJwcm9jZWR1cmVDYWxsSlNPTiIsIm5vbWluYWxUeXBlTmFtZSIsInByb2NlZHVyZVJlZmVyZW5jZSIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZVJlZmVyZW5jZUpTT04iLCJ0eXBlcyIsInR5cGVzSlNPTiIsIlR5cGUiLCJmb3JFYWNoIiwidHlwZUpTT04iLCJwdXNoIiwidGVybXMiLCJ0ZXJtc0pTT04iLCJtYXAiLCJydWxlcyIsIlJ1bGUiLCJydWxlc0pTT04iLCJydWxlSlNPTiIsInJ1bGUiLCJmcmFtZXMiLCJmcmFtZXNKU09OIiwibGFiZWxzIiwibGFiZWxzSlNPTiIsImF4aW9tcyIsIkF4aW9tIiwiYXhpb21zSlNPTiIsImF4aW9tSlNPTiIsImF4aW9tIiwicHJlbWlzZXMiLCJQcmVtaXNlIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZUpTT04iLCJwcmVtaXNlIiwidGhlb3JlbXMiLCJUaGVvcmVtIiwidGhlb3JlbXNKU09OIiwidGhlb3JlbUpTT04iLCJ0aGVvcmVtIiwidmFyaWFibGVzIiwiVmFyaWFibGUiLCJ2YXJpYWJsZXNKU09OIiwidmFyaWFibGVKU09OIiwidmFyaWFibGUiLCJlcXVhbGl0aWVzIiwiRXF1YWxpdHkiLCJlcXVhbGl0aWVzSlNPTiIsImVxdWFsaXR5SlNPTiIsImVxdWFsaXR5IiwicHJvcGVydGllcyIsIlByb3BlcnR5IiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0eUpTT04iLCJwcm9wZXJ0eSIsInN1cGVyVHlwZXMiLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZUpTT04iLCJzdXBlclR5cGUiLCJoeXBvdGhlc2VzIiwiSHlwb3RoZXNpcyIsImh5cG90aGVzZXNKU09OIiwiaHlwb3RoZXNpc0pTT04iLCJoeXBvdGhlc2lzIiwicGFyYW1ldGVycyIsIlBhcmFtZXRlciIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVySlNPTiIsInBhcmFtZXRlciIsImp1ZGdlbWVudHMiLCJKdWRnZW1lbnQiLCJqdWRnZW1lbnRzSlNPTiIsImp1ZGdlbWVudEpTT04iLCJqdWRnZW1lbnQiLCJzdGF0ZW1lbnRzIiwic3RhdGVtZW50c0pTT04iLCJhc3NlcnRpb25zIiwiVHlwZUFzc2VydGlvbiIsIkRlZmluZWRBc3NlcnRpb24iLCJQcm9wZXJ0eUFzc2VydGlvbiIsIlN1YnByb29mQXNzZXJ0aW9uIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwiYXNzZXJ0aW9uc0pTT04iLCJhc3NlcnRpb25KU09OIiwiYXNzZXJ0aW9uIiwicmVmZXJlbmNlcyIsInJlZmVyZW5jZXNKU09OIiwiY29uamVjdHVyZXMiLCJDb25qZWN0dXJlIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZUpTT04iLCJjb25qZWN0dXJlIiwiY29tYmluYXRvcnMiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvckpTT04iLCJjb21iaW5hdG9yIiwiYXNzdW1wdGlvbnMiLCJBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbnNKU09OIiwiYXNzdW1wdGlvbkpTT04iLCJhc3N1bXB0aW9uIiwidHlwZVByZWZpeGVzIiwiVHlwZVByZWZpeCIsInR5cGVQcmVmaXhlc0pTT04iLCJ0eXBlUHJlZml4SlNPTiIsInR5cGVQcmVmaXgiLCJjb25zdHJ1Y3RvcnMiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJjb25zdHJ1Y3RvciIsIm1ldGF0aGVvcmVtcyIsIk1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtSlNPTiIsIm1ldGF0aGVvcmVtIiwic3VwcG9zaXRpb25zIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25KU09OIiwic3VwcG9zaXRpb24iLCJzdWJzdGl0dXRpb25zIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uc0pTT04iLCJTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25KU09OIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXNKU09OIiwicmVsZWFzZUNvbnRleHQiLCJlbXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsIlByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uc0pTT04iLCJwcm9wZXJ0eVJlbGF0aW9uSlNPTiIsInByb3BlcnR5UmVsYXRpb24iLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb25zIiwiTWV0YUxldmVsU3Vic3RpdHV0aW9uIiwibWV0YUxldmVsU3Vic3RpdHV0aW9uc0pTT04iLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb25KU09OIiwibWV0YUxldmVsU3Vic3RpdHV0aW9uIiwidG9KU09OIiwibmVnYXRlZEpTT04iLCJtZXRhVHlwZUpTT04iLCJwcm92aXNpb25hbEpTT04iLCJub21pbmFsVHlwZU5hbWVKU09OIiwiZXBoZW1lcmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHRKU09OIiwidHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNmVnQkE7ZUFBQUE7O1FBb2dCQUM7ZUFBQUE7O1FBL2JBQztlQUFBQTs7UUF1ZUFDO2VBQUFBOztRQTV0QkFDO2VBQUFBOztRQXNrQkFDO2VBQUFBOztRQWpXQUM7ZUFBQUE7O1FBNmVBQztlQUFBQTs7UUFqMkJBQztlQUFBQTs7UUF1bkJBQztlQUFBQTs7UUFuUkFDO2VBQUFBOztRQW1mQUM7ZUFBQUE7O1FBbmJBQztlQUFBQTs7UUEyZEFDO2VB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