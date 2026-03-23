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
    get metaLevelAssumptionsFromJSON () {
        return metaLevelAssumptionsFromJSON;
    },
    get metaLevelAssumptionsToMetaLevelAssumptionsJSON () {
        return metaLevelAssumptionsToMetaLevelAssumptionsJSON;
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
    get substitutionFromSubstitutionJSON () {
        return substitutionFromSubstitutionJSON;
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
const _substitution = /*#__PURE__*/ _interop_require_default(require("../element/substitution"));
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
    const substitutionsJSON = substitutions; ///
    substitutions = substitutionsJSON.map((substitutionJSON)=>{
        const json = substitutionJSON, substitution = substitutionFromSubstitutionJSON(json, context);
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
function metaLevelAssumptionsFromJSON(json, context) {
    let { metaLevelAssumptions } = json;
    const { MetaLevelAssumption } = _elements.default, metaLevelAssumptionsJSON = metaLevelAssumptions; ///
    metaLevelAssumptions = metaLevelAssumptionsJSON.map((metaLevelAssumptionJSON)=>{
        const json = metaLevelAssumptionJSON, metaLevelAssumption = MetaLevelAssumption.fromJSON(json, context);
        return metaLevelAssumption;
    });
    return metaLevelAssumptions;
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
function substitutionFromSubstitutionJSON(json, context) {
    const { TermSubstitution, FrameSubstitution, StatementSubstitution, ReferenceSubstitution } = _elements.default, substitution = TermSubstitution.fromJSON(json, context) || FrameSubstitution.fromJSON(json, context) || StatementSubstitution.fromJSON(json, context) || ReferenceSubstitution.fromJSON(json, context);
    return substitution;
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
function metaLevelAssumptionsToMetaLevelAssumptionsJSON(metaLevelAssumptions) {
    const metaLevelAssumptionsJSON = metaLevelAssumptions.map((metaLevelAssumption)=>{
        const metaLevelAssumptionJSON = metaLevelAssumption.toJSON();
        return metaLevelAssumptionJSON;
    });
    return metaLevelAssumptionsJSON;
}
function findTypeByName(name, context) {
    const typeName = name, type = context.findTypeByTypeName(typeName);
    return type;
}
function findMetaTypeByName(name, context) {
    const metaTypeName = name, metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEVwaGVtZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZXBoZW1lcmFsXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9lbGVtZW50L3N1YnN0aXR1dGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBsZW1tYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhTGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICByZXR1cm4gbWV0YUxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG5hbWUgfSA9IGpzb247XG5cbiAgY29uc3QgbmFtZUpTT04gPSBuYW1lOyAgLy8vXG5cbiAgbmFtZSA9IG5hbWVKU09OOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0ZXJtIH0gPSBqc29uO1xuXG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtOyAgLy8vXG5cbiAgICBqc29uID0gdGVybUpTT047ICAvLy9cblxuICAgIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHM7XG5cbiAgICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSB0eXBlOyAgLy8vXG5cbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBuYW1lID0gc3RyaW5nOyAgLy8vXG5cbiAgICB0eXBlID0gZmluZFR5cGVCeU5hbWUobmFtZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbCB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICBsYWJlbEpTT04gPSBsYWJlbDsgIC8vL1xuXG4gIGpzb24gPSBsYWJlbEpTT047IC8vL1xuXG4gIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGZyYW1lIH0gPSBqc29uO1xuXG4gIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGZyYW1lSlNPTiA9IGZyYW1lOyAgLy8vXG5cbiAgICBqc29uID0gZnJhbWVKU09OOyAgLy8vXG5cbiAgICBjb25zdCB7IEZyYW1lIH0gPSBlbGVtZW50cztcblxuICAgIGZyYW1lID0gRnJhbWUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IG5lZ2F0ZWQgfSA9IGpzb247XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YVR5cGUgfSA9IGpzb247XG5cbiAgaWYgKG1ldGFUeXBlICE9PSBudWxsKSB7XG4gICAganNvbiA9IG1ldGFUeXBlOyAgLy8vXG5cbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBuYW1lID0gc3RyaW5nOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IGZpbmRNZXRhVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50ID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIGpzb24gPSBzdGF0ZW1lbnRKU09OOyAvLy9cblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGRlZHVjdGlvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb247ICAvLy9cblxuICBqc29uID0gZGVkdWN0aW9uSlNPTjsgIC8vL1xuXG4gIGRlZHVjdGlvbiA9IERlZHVjdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzaWduYXR1cmUgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAganNvbiA9IHNpZ25hdHVyZUpTT047IC8vL1xuXG4gICAgc2lnbmF0dXJlID0gU2lnbmF0dXJlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSByZWZlcmVuY2VKU09OOyAvLy9cblxuICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGlkZW50aWZpZXIgfSA9IGpzb247XG5cbiAgY29uc3QgaWRlbnRpZmllckpTT04gPSBpZGVudGlmaWVyOyAgLy8vXG5cbiAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgcHJvdmlzaW9uYWwgfSA9IGpzb247XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGUgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlOyAgLy8vXG5cbiAganNvbiA9IG1ldGF2YXJpYWJsZUpTT047IC8vL1xuXG4gIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlQ2FsbCA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbDsgIC8vL1xuXG4gICAganNvbiA9IHByb2NlZHVyZUNhbGxKU09OOyAvLy9cblxuICAgIHByb2NlZHVyZUNhbGwgPSBQcm9jZWR1cmVDYWxsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsVHlwZU5hbWVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbm9taW5hbFR5cGVOYW1lIH0gPSBqc29uO1xuXG4gIHJldHVybiBub21pbmFsVHlwZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb2NlZHVyZVJlZmVyZW5jZSB9ID0ganNvbjtcblxuICBjb25zdCB7IFByb2NlZHVyZVJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZUpTT04gPSBwcm9jZWR1cmVSZWZlcmVuY2U7ICAvLy9cblxuICBqc29uID0gcHJvY2VkdXJlUmVmZXJlbmNlSlNPTjsgIC8vL1xuXG4gIHByb2NlZHVyZVJlZmVyZW5jZSA9IFByb2NlZHVyZVJlZmVyZW5jZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tSlNPTihqc29uLCB0eXBlcywgY29udGV4dCkge1xuICBjb25zdCB7IHR5cGVzOiB0eXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cztcblxuICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHR5cGVzLnB1c2godHlwZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRlcm1zSlNPTiA9IHRlcm1zOyAvLy9cblxuICB0ZXJtcyA9IHRlcm1zSlNPTi5tYXAoKHRlcm1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHRlcm1KU09OLCAgLy8vXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJ1bGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUnVsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzOyAvLy9cblxuICBydWxlcyA9IHJ1bGVzSlNPTi5tYXAoKHJ1bGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHJ1bGVKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBmcmFtZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHMsXG4gICAgZnJhbWVzSlNPTiA9IGZyYW1lczsgLy8vXG5cbiAgZnJhbWVzID0gZnJhbWVzSlNPTi5tYXAoKGZyYW1lSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBmcmFtZUpTT04sICAvLy9cbiAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXhpb21zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXhpb20gfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbXNKU09OID0gYXhpb21zOyAvLy9cblxuICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUaGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuXG4gIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLm1hcCgodGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZXF1YWxpdGllcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEVxdWFsaXR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXF1YWxpdGllc0pTT04gPSBlcXVhbGl0aWVzOyAvLy9cblxuICBlcXVhbGl0aWVzID0gZXF1YWxpdGllc0pTT04ubWFwKChlcXVhbGl0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gZXF1YWxpdHlKU09OLCAgLy8vXG4gICAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXM7IC8vL1xuXG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTi5tYXAoKHByb3BlcnR5SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcm9wZXJ0eUpTT04sICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgc3VwZXJUeXBlczogc3VwZXJUeXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3Qgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLm1hcCgoc3VwZXJUeXBlSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgbmFtZSA9IHN0cmluZywgIC8vL1xuICAgICAgICAgICAgICAgIHR5cGUgPSBmaW5kVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgaHlwb3RoZXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEh5cG90aGVzaXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXM7ICAvLy9cblxuICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0pTT04ubWFwKChoeXBvdGhlc2lzSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBoeXBvdGhlc2lzSlNPTiwgLy8vXG4gICAgICAgICAgaHlwb3RoZXNpcyA9IEh5cG90aGVzaXMuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwYXJhbWV0ZXJzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzOyAvLy9cblxuICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0pTT04ubWFwKChwYXJhbWV0ZXJKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHBhcmFtZXRlckpTT04sICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGp1ZGdlbWVudHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBKdWRnZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBqdWRnZW1lbnRzSlNPTiA9IGp1ZGdlbWVudHM7IC8vL1xuXG4gIGp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzSlNPTi5tYXAoKGp1ZGdlbWVudEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0ganVkZ2VtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudCA9IEp1ZGdlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBqdWRnZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50cyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN0YXRlbWVudHNKU09OID0gc3RhdGVtZW50czsgLy8vXG5cbiAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNKU09OLm1hcCgoc3RhdGVtZW50SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBhc3NlcnRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZUFzc2VydGlvbiwgRGVmaW5lZEFzc2VydGlvbiwgUHJvcGVydHlBc3NlcnRpb24sIFN1YnByb29mQXNzZXJ0aW9uLCBTYXRpc2ZpZXNBc3NlcnRpb24sIENvbnRhaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9uczsgLy8vXG5cbiAgYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnNKU09OLm1hcCgoYXNzZXJ0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBhc3NlcnRpb25KU09OLCAgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uID0gVHlwZUFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBEZWZpbmVkQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFByb3BlcnR5QXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFN1YnByb29mQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFNhdGlzZmllc0Fzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBDb250YWluZWRBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzZXJ0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJlZmVyZW5jZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXM7IC8vL1xuXG4gIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzSlNPTi5tYXAoKHJlZmVyZW5jZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcmVmZXJlbmNlSlNPTiwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0pO1xuXG4gIHJldHVybiByZWZlcmVuY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbmplY3R1cmVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzOyAvLy9cblxuICBjb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzSlNPTi5tYXAoKGNvbmplY3R1cmVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbWJpbmF0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzOyAvLy9cblxuICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTi5tYXAoKGNvbWJpbmF0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGFzc3VtcHRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnM7IC8vL1xuXG4gIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNKU09OLm1hcCgoYXNzdW1wdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXNzdW1wdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uID0gQXNzdW1wdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4ZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHR5cGVQcmVmaXhlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGVQcmVmaXggfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzOyAvLy9cblxuICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLm1hcCgodHlwZVByZWZpeEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZVByZWZpeEpTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ID0gVHlwZVByZWZpeC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25zdHJ1Y3RvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnM7IC8vL1xuXG4gIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04ubWFwKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zOyAvLy9cblxuICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLm1hcCgobWV0YXRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN1cHBvc2l0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3Vic3RpdHV0aW9ucyB9ID0ganNvbjsgIC8vL1xuXG4gIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uRnJvbVN1YnN0aXR1dGlvbkpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXM7IC8vL1xuXG4gIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTi5tYXAoKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSBjb250ZXh0O1xuXG4gICh7Y29udGV4dH0gPSBqc29uKTtcblxuICBqc29uID0gY29udGV4dDsgLy8vXG5cbiAgY29udGV4dCA9IHJlbGVhc2VDb250ZXh0OyAvLy9cblxuICBjb25zdCBlbXBoZW1lcmFsQ29udGV4dCA9IEVwaGVtZXJhbENvbnRleHQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGVtcGhlbWVyYWxDb250ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb3BlcnR5UmVsYXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHlSZWxhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zSlNPTiA9IHByb3BlcnR5UmVsYXRpb25zOyAvLy9cblxuICBwcm9wZXJ0eVJlbGF0aW9ucyA9IHByb3BlcnR5UmVsYXRpb25zSlNPTi5tYXAoKHByb3BlcnR5UmVsYXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByb3BlcnR5UmVsYXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IFByb3BlcnR5UmVsYXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxldmVsQXNzdW1wdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGFMZXZlbEFzc3VtcHRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YUxldmVsQXNzdW1wdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zSlNPTiA9IG1ldGFMZXZlbEFzc3VtcHRpb25zOyAvLy9cblxuICBtZXRhTGV2ZWxBc3N1bXB0aW9ucyA9IG1ldGFMZXZlbEFzc3VtcHRpb25zSlNPTi5tYXAoKG1ldGFMZXZlbEFzc3VtcHRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGFMZXZlbEFzc3VtcHRpb25KU09OLCAgLy8vXG4gICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbiA9IE1ldGFMZXZlbEFzc3VtcHRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YUxldmVsQXNzdW1wdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFMZXZlbEFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZVRvTmFtZUpTT04obmFtZSkge1xuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICByZXR1cm4gbmFtZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtVG9UZXJtSlNPTih0ZXJtKSB7XG4gIGNvbnN0IHRlcm1KU09OID0gKHRlcm0gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHRlcm0udG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0ZXJtSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVUb1R5cGVKU09OKHR5cGUpIHtcbiAgY29uc3QgdHlwZUpTT04gPSAodHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgdHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVUb0ZyYW1lSlNPTihmcmFtZSkge1xuICBjb25zdCBmcmFtZUpTT04gPSAoZnJhbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICBmcmFtZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBmcmFtZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbFRvTGFiZWxKU09OKGxhYmVsKSB7XG4gIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gIHJldHVybiBsYWJlbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVG9OZWdhdGVkSlNPTihuZWdhdGVkKSB7XG4gIGNvbnN0IG5lZ2F0ZWRKU09OID0gbmVnYXRlZDsgIC8vL1xuXG4gIHJldHVybiBuZWdhdGVkSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04obWV0YVR5cGUpIHtcbiAgY29uc3QgbWV0YVR5cGVKU09OID0gKG1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gbWV0YVR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlVG9SZWZlcmVuY2VKU09OKHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gIHJldHVybiByZWZlcmVuY2VKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHN0YXRlbWVudCkge1xuICBjb25zdCBzdGF0ZW1lbnRKU09OID0gKHN0YXRlbWVudCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnQudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHN0YXRlbWVudEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04oZGVkdWN0aW9uKSB7XG4gIGNvbnN0IGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04oc2lnbmF0dXJlKSB7XG4gIGNvbnN0IHNpZ25hdHVyZUpTT04gPSAoc2lnbmF0dXJlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gc2lnbmF0dXJlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OKGlkZW50aWZpZXIpIHtcbiAgY29uc3QgaWRlbnRpZmllckpTT04gPSBpZGVudGlmaWVyOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXJKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04oY29uY2x1c2lvbikge1xuICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTihwcm92aXNpb25hbCkge1xuICBjb25zdCBwcm92aXNpb25hbEpTT04gPSBwcm92aXNpb25hbDsgIC8vL1xuXG4gIHJldHVybiBwcm92aXNpb25hbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04obWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTihwcm9jZWR1cmVDYWxsKSB7XG4gIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gKHByb2NlZHVyZUNhbGwgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZHVyZUNhbGwudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbWluYWxUeXBlTmFtZVRvTm9taW5hbFR5cGVOYW1lSlNPTihub21pbmFsVHlwZU5hbWUpIHtcbiAgY29uc3Qgbm9taW5hbFR5cGVOYW1lSlNPTiA9IG5vbWluYWxUeXBlTmFtZTsgIC8vL1xuXG4gIHJldHVybiBub21pbmFsVHlwZU5hbWVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04oZXBoZW1lcmFsQ29udGV4dCkge1xuICBjb25zdCBlcGhlbWVyYWxDb250ZXh0SlNPTiA9IGVwaGVtZXJhbENvbnRleHQudG9KU09OKCk7XG5cbiAgcmV0dXJuIGVwaGVtZXJhbENvbnRleHRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OKHByb2NlZHVyZVJlZmVyZW5jZSkge1xuICBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2VKU09OID0gcHJvY2VkdXJlUmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2VKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uRnJvbVN1YnN0aXR1dGlvbkpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24sIEZyYW1lU3Vic3RpdHV0aW9uLCBTdGF0ZW1lbnRTdWJzdGl0dXRpb24sIFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgRnJhbWVTdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFJlZmVyZW5jZVN1YnN0aXR1dGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcykge1xuICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtcy5tYXAoKHRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgICByZXR1cm4gdGVybUpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc1RvVHlwZXNKU09OKHR5cGVzKSB7XG4gIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04oKTtcblxuICAgIHJldHVybiB0eXBlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzVG9SdWxlc0pTT04ocnVsZXMpIHtcbiAgY29uc3QgcnVsZXNKU09OID0gcnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHJ1bGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9MYWJlbHNKU09OKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgIHJldHVybiBsYWJlbEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcykge1xuICBjb25zdCBmcmFtZXNKU09OID0gZnJhbWVzLm1hcCgoZnJhbWUpID0+IHtcbiAgICBjb25zdCBmcmFtZUpTT04gPSBmcmFtZS50b0pTT04oKTtcblxuICAgIHJldHVybiBmcmFtZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBmcmFtZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zVG9BeGlvbXNKU09OKGF4aW9tcykge1xuICBjb25zdCBheGlvbXNKU09OID0gYXhpb21zLm1hcCgoYXhpb20pID0+IHtcbiAgICBjb25zdCBheGlvbUpTT04gPSBheGlvbS50b0pTT04oKTtcblxuICAgIHJldHVybiBheGlvbUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHJldHVybiB0aGVvcmVtSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKGh5cG90aGVzZXMpIHtcbiAgY29uc3QgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzLm1hcCgoaHlwb3RoZXNpcykgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXNKU09OID0gaHlwb3RoZXNpcy50b0pTT04oKTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04oc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cGVyVHlwZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVySlNPTiA9IHBhcmFtZXRlci50b0pTT04oKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJKU09OO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTihwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlKU09OID0gcHJvcGVydHkudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlKU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTihqdWRnZW1lbnRzKSB7XG4gIGNvbnN0IGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50cy5tYXAoKGp1ZGdlbWVudCkgPT4ge1xuICAgIGNvbnN0IGp1ZGdlbWVudEpTT04gPSBqdWRnZW1lbnQudG9KU09OKCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGp1ZGdlbWVudHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04oZXF1YWxpdGllcykge1xuICBjb25zdCBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXMubWFwKChlcXVhbGl0eSkgPT4ge1xuICAgIGNvbnN0IGVxdWFsaXR5SlNPTiA9IGVxdWFsaXR5LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04oc3RhdGVtZW50cykge1xuICBjb25zdCBzdGF0ZW1lbnRzSlNPTiA9IHN0YXRlbWVudHMubWFwKChzdGF0ZW1lbnQpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OKGFzc2VydGlvbnMpIHtcbiAgY29uc3QgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zLm1hcCgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzZXJ0aW9uSlNPTiA9IGFzc2VydGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXNzZXJ0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTihyZWZlcmVuY2VzKSB7XG4gIGNvbnN0IHJlZmVyZW5jZXNKU09OID0gcmVmZXJlbmNlcy5tYXAoKHJlZmVyZW5jZSkgPT4ge1xuICAgIGNvbnN0IHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTihjb25qZWN0dXJlcykge1xuICBjb25zdCBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICBjb25zdCBjb25qZWN0dXJlSlNPTiA9IGNvbmplY3R1cmUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OKGNvbWJpbmF0b3JzKSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JKU09OID0gY29tYmluYXRvci50b0pTT04oKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ySlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04oYXNzdW1wdGlvbnMpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnMubWFwKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvbkpTT04gPSBhc3N1bXB0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKGNvbnN0cnVjdG9ycykge1xuICBjb25zdCBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvckpTT047XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKG1ldGF0aGVvcmVtcykge1xuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUpTT04gPSBtZXRhdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OKHR5cGVQcmVmaXhlcykge1xuICBjb25zdCB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzLm1hcCgodHlwZVByZWZpeCkgPT4ge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhKU09OID0gdHlwZVByZWZpeC50b0pTT04oKTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTihzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucy5tYXAoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04obWV0YXZhcmlhYmxlcykge1xuICBjb25zdCBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25zVG9Qcm9wZXJ0eVJlbGF0aW9uc0pTT04ocHJvcGVydHlSZWxhdGlvbnMpIHtcbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbnNKU09OID0gcHJvcGVydHlSZWxhdGlvbnMubWFwKChwcm9wZXJ0eVJlbGF0aW9uKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbkpTT04gPSBwcm9wZXJ0eVJlbGF0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YUxldmVsQXNzdW1wdGlvbnNUb01ldGFMZXZlbEFzc3VtcHRpb25zSlNPTihtZXRhTGV2ZWxBc3N1bXB0aW9ucykge1xuICBjb25zdCBtZXRhTGV2ZWxBc3N1bXB0aW9uc0pTT04gPSBtZXRhTGV2ZWxBc3N1bXB0aW9ucy5tYXAoKG1ldGFMZXZlbEFzc3VtcHRpb24pID0+IHtcbiAgICBjb25zdCBtZXRhTGV2ZWxBc3N1bXB0aW9uSlNPTiA9IG1ldGFMZXZlbEFzc3VtcHRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gbWV0YUxldmVsQXNzdW1wdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhTGV2ZWxBc3N1bXB0aW9uc0pTT047XG59XG5cbmZ1bmN0aW9uIGZpbmRUeXBlQnlOYW1lKG5hbWUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIGZpbmRNZXRhVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgbWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuIl0sIm5hbWVzIjpbImFzc2VydGlvbnNGcm9tSlNPTiIsImFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OIiwiYXNzdW1wdGlvbnNGcm9tSlNPTiIsImFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04iLCJheGlvbXNGcm9tSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiIsImVxdWFsaXRpZXNGcm9tSlNPTiIsImVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OIiwiZnJhbWVGcm9tSlNPTiIsImZyYW1lVG9GcmFtZUpTT04iLCJmcmFtZXNGcm9tSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsImh5cG90aGVzZXNGcm9tSlNPTiIsImh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OIiwiaWRlbnRpZmllckZyb21KU09OIiwiaWRlbnRpZmllclRvSWRlbnRpZmllckpTT04iLCJqdWRnZW1lbnRzRnJvbUpTT04iLCJqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTiIsImxhYmVsRnJvbUpTT04iLCJsYWJlbFRvTGFiZWxKU09OIiwibGFiZWxzRnJvbUpTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZXZlbEFzc3VtcHRpb25zRnJvbUpTT04iLCJtZXRhTGV2ZWxBc3N1bXB0aW9uc1RvTWV0YUxldmVsQXNzdW1wdGlvbnNKU09OIiwibWV0YVR5cGVGcm9tSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJtZXRhdGhlb3JlbXNGcm9tSlNPTiIsIm1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwibWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04iLCJuYW1lRnJvbUpTT04iLCJuYW1lVG9OYW1lSlNPTiIsIm5lZ2F0ZWRGcm9tSlNPTiIsIm5lZ2F0ZWRUb05lZ2F0ZWRKU09OIiwibm9taW5hbFR5cGVOYW1lRnJvbUpTT04iLCJub21pbmFsVHlwZU5hbWVUb05vbWluYWxUeXBlTmFtZUpTT04iLCJwYXJhbWV0ZXJzRnJvbUpTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwicHJvY2VkdXJlQ2FsbEZyb21KU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInByb3BlcnRpZXNGcm9tSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwicHJvcGVydHlSZWxhdGlvbnNGcm9tSlNPTiIsInByb3BlcnR5UmVsYXRpb25zVG9Qcm9wZXJ0eVJlbGF0aW9uc0pTT04iLCJwcm92aXNpb25hbEZyb21KU09OIiwicHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTiIsInJlZmVyZW5jZUZyb21KU09OIiwicmVmZXJlbmNlVG9SZWZlcmVuY2VKU09OIiwicmVmZXJlbmNlc0Zyb21KU09OIiwicmVmZXJlbmNlc1RvUmVmZXJlbmNlc0pTT04iLCJydWxlc0Zyb21KU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsInNpZ25hdHVyZUZyb21KU09OIiwic2lnbmF0dXJlVG9TaWduYXR1cmVKU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRzRnJvbUpTT04iLCJzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTiIsInN1YnN0aXR1dGlvbkZyb21TdWJzdGl0dXRpb25KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidHlwZUZyb21KU09OIiwidHlwZVByZWZpeGVzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInR5cGVzRnJvbUpTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwianNvbiIsImNvbnRleHQiLCJuYW1lIiwibmFtZUpTT04iLCJ0ZXJtIiwidGVybUpTT04iLCJUZXJtIiwiZWxlbWVudHMiLCJmcm9tSlNPTiIsInR5cGUiLCJzdHJpbmciLCJmaW5kVHlwZUJ5TmFtZSIsImxhYmVsIiwiTGFiZWwiLCJsYWJlbEpTT04iLCJmcmFtZSIsImZyYW1lSlNPTiIsIkZyYW1lIiwibmVnYXRlZCIsIm1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlOYW1lIiwic3RhdGVtZW50IiwiU3RhdGVtZW50Iiwic3RhdGVtZW50SlNPTiIsImRlZHVjdGlvbiIsIkRlZHVjdGlvbiIsImRlZHVjdGlvbkpTT04iLCJzaWduYXR1cmUiLCJTaWduYXR1cmUiLCJzaWduYXR1cmVKU09OIiwicmVmZXJlbmNlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlSlNPTiIsImlkZW50aWZpZXIiLCJpZGVudGlmaWVySlNPTiIsImNvbmNsdXNpb24iLCJDb25jbHVzaW9uIiwiY29uY2x1c2lvbkpTT04iLCJwcm92aXNpb25hbCIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJwcm9jZWR1cmVDYWxsIiwiUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxKU09OIiwibm9taW5hbFR5cGVOYW1lIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInR5cGVzIiwidHlwZXNKU09OIiwiVHlwZSIsImZvckVhY2giLCJ0eXBlSlNPTiIsInB1c2giLCJ0ZXJtcyIsInRlcm1zSlNPTiIsIm1hcCIsInJ1bGVzIiwiUnVsZSIsInJ1bGVzSlNPTiIsInJ1bGVKU09OIiwicnVsZSIsImZyYW1lcyIsImZyYW1lc0pTT04iLCJsYWJlbHMiLCJsYWJlbHNKU09OIiwiYXhpb21zIiwiQXhpb20iLCJheGlvbXNKU09OIiwiYXhpb21KU09OIiwiYXhpb20iLCJwcmVtaXNlcyIsIlByZW1pc2UiLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlSlNPTiIsInByZW1pc2UiLCJ0aGVvcmVtcyIsIlRoZW9yZW0iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtSlNPTiIsInRoZW9yZW0iLCJ2YXJpYWJsZXMiLCJWYXJpYWJsZSIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZUpTT04iLCJ2YXJpYWJsZSIsImVxdWFsaXRpZXMiLCJFcXVhbGl0eSIsImVxdWFsaXRpZXNKU09OIiwiZXF1YWxpdHlKU09OIiwiZXF1YWxpdHkiLCJwcm9wZXJ0aWVzIiwiUHJvcGVydHkiLCJwcm9wZXJ0aWVzSlNPTiIsInByb3BlcnR5SlNPTiIsInByb3BlcnR5Iiwic3VwZXJUeXBlcyIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlSlNPTiIsInN1cGVyVHlwZSIsImh5cG90aGVzZXMiLCJIeXBvdGhlc2lzIiwiaHlwb3RoZXNlc0pTT04iLCJoeXBvdGhlc2lzSlNPTiIsImh5cG90aGVzaXMiLCJwYXJhbWV0ZXJzIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJKU09OIiwicGFyYW1ldGVyIiwianVkZ2VtZW50cyIsIkp1ZGdlbWVudCIsImp1ZGdlbWVudHNKU09OIiwianVkZ2VtZW50SlNPTiIsImp1ZGdlbWVudCIsInN0YXRlbWVudHMiLCJzdGF0ZW1lbnRzSlNPTiIsImFzc2VydGlvbnMiLCJUeXBlQXNzZXJ0aW9uIiwiRGVmaW5lZEFzc2VydGlvbiIsIlByb3BlcnR5QXNzZXJ0aW9uIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJDb250YWluZWRBc3NlcnRpb24iLCJhc3NlcnRpb25zSlNPTiIsImFzc2VydGlvbkpTT04iLCJhc3NlcnRpb24iLCJyZWZlcmVuY2VzIiwicmVmZXJlbmNlc0pTT04iLCJjb25qZWN0dXJlcyIsIkNvbmplY3R1cmUiLCJjb25qZWN0dXJlc0pTT04iLCJjb25qZWN0dXJlSlNPTiIsImNvbmplY3R1cmUiLCJjb21iaW5hdG9ycyIsIkNvbWJpbmF0b3IiLCJjb21iaW5hdG9yc0pTT04iLCJjb21iaW5hdG9ySlNPTiIsImNvbWJpbmF0b3IiLCJhc3N1bXB0aW9ucyIsIkFzc3VtcHRpb24iLCJhc3N1bXB0aW9uc0pTT04iLCJhc3N1bXB0aW9uSlNPTiIsImFzc3VtcHRpb24iLCJ0eXBlUHJlZml4ZXMiLCJUeXBlUHJlZml4IiwidHlwZVByZWZpeGVzSlNPTiIsInR5cGVQcmVmaXhKU09OIiwidHlwZVByZWZpeCIsImNvbnN0cnVjdG9ycyIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsImNvbnN0cnVjdG9yIiwibWV0YXRoZW9yZW1zIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1KU09OIiwibWV0YXRoZW9yZW0iLCJzdXBwb3NpdGlvbnMiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbkpTT04iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbkpTT04iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0pTT04iLCJyZWxlYXNlQ29udGV4dCIsImVtcGhlbWVyYWxDb250ZXh0IiwiRXBoZW1lcmFsQ29udGV4dCIsInByb3BlcnR5UmVsYXRpb25zIiwiUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb25zSlNPTiIsInByb3BlcnR5UmVsYXRpb25KU09OIiwicHJvcGVydHlSZWxhdGlvbiIsIm1ldGFMZXZlbEFzc3VtcHRpb25zIiwiTWV0YUxldmVsQXNzdW1wdGlvbiIsIm1ldGFMZXZlbEFzc3VtcHRpb25zSlNPTiIsIm1ldGFMZXZlbEFzc3VtcHRpb25KU09OIiwibWV0YUxldmVsQXNzdW1wdGlvbiIsInRvSlNPTiIsIm5lZ2F0ZWRKU09OIiwibWV0YVR5cGVKU09OIiwicHJvdmlzaW9uYWxKU09OIiwibm9taW5hbFR5cGVOYW1lSlNPTiIsImVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0SlNPTiIsIlRlcm1TdWJzdGl0dXRpb24iLCJGcmFtZVN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQThlZ0JBO2VBQUFBOztRQTRnQkFDO2VBQUFBOztRQXZjQUM7ZUFBQUE7O1FBK2VBQztlQUFBQTs7UUFwdUJBQztlQUFBQTs7UUE4a0JBQztlQUFBQTs7UUF6V0FDO2VBQUFBOztRQXFmQUM7ZUFBQUE7O1FBejJCQUM7ZUFBQUE7O1FBcW5CQUM7ZUFBQUE7O1FBalJBQztlQUFBQTs7UUEyZkFDO2VBQUFBOztRQTNiQUM7ZUFBQUE7O1FBbWVBQztlQUFBQTs7UUExN0JBQztlQUFBQTs7UUFvcEJBQztlQUFBQTs7UUE5R0FDO2VBQUFBOztRQWtLQUM7ZUFBQUE7O1FBdGNBQztlQUFBQTs7UUF3bUJBQztlQUFBQTs7UUE5NUJBQztlQUFBQTs7UUE4cEJBQztlQUFBQTs7UUF4Y0FDO2VBQUFBOztRQW9tQkFDO2VBQUFBOztRQXBkQUM7ZUFBQUE7O1FBc2dCQUM7ZUFBQUE7O1FBL3dCQUM7ZUFBQUE7O1FBeW5CQUM7ZUFBQUE7O1FBaFZBQztlQUFBQTs7UUE4Z0JBQztlQUFBQTs7UUFqNkJBQztlQUFBQTs7UUFtckJBQztlQUFBQTs7UUFoY0FDO2VBQUFBOztRQTBrQkFDO2VBQUFBOztRQWwzQkFDO2VBQUFBOztRQU1BQztlQUFBQTs7UUFvckJBQztlQUFBQTs7UUFrYkFDO2VBQUFBOztRQXBoQ0FDO2VBQUFBOztRQTRwQkFDO2VBQUFBOztRQXZKQUM7ZUFBQUE7O1FBNmRBQztlQUFBQTs7UUE5M0JBQztlQUFBQTs7UUE4bUJB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