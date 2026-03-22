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
function findTypeByName(name, context) {
    const typeName = name, type = context.findTypeByTypeName(typeName);
    return type;
}
function findMetaTypeByName(name, context) {
    const metaTypeName = name, metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEVwaGVtZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZXBoZW1lcmFsXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9lbGVtZW50L3N1YnN0aXR1dGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBsZW1tYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhTGVtbWFzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICByZXR1cm4gbWV0YUxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG5hbWUgfSA9IGpzb247XG5cbiAgY29uc3QgbmFtZUpTT04gPSBuYW1lOyAgLy8vXG5cbiAgbmFtZSA9IG5hbWVKU09OOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0ZXJtIH0gPSBqc29uO1xuXG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtOyAgLy8vXG5cbiAgICBqc29uID0gdGVybUpTT047ICAvLy9cblxuICAgIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHM7XG5cbiAgICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSB0eXBlOyAgLy8vXG5cbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBuYW1lID0gc3RyaW5nOyAgLy8vXG5cbiAgICB0eXBlID0gZmluZFR5cGVCeU5hbWUobmFtZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbCB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICBsYWJlbEpTT04gPSBsYWJlbDsgIC8vL1xuXG4gIGpzb24gPSBsYWJlbEpTT047IC8vL1xuXG4gIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGZyYW1lIH0gPSBqc29uO1xuXG4gIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGZyYW1lSlNPTiA9IGZyYW1lOyAgLy8vXG5cbiAgICBqc29uID0gZnJhbWVKU09OOyAgLy8vXG5cbiAgICBjb25zdCB7IEZyYW1lIH0gPSBlbGVtZW50cztcblxuICAgIGZyYW1lID0gRnJhbWUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IG5lZ2F0ZWQgfSA9IGpzb247XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YVR5cGUgfSA9IGpzb247XG5cbiAgaWYgKG1ldGFUeXBlICE9PSBudWxsKSB7XG4gICAganNvbiA9IG1ldGFUeXBlOyAgLy8vXG5cbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBuYW1lID0gc3RyaW5nOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IGZpbmRNZXRhVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50ID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIGpzb24gPSBzdGF0ZW1lbnRKU09OOyAvLy9cblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGRlZHVjdGlvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb247ICAvLy9cblxuICBqc29uID0gZGVkdWN0aW9uSlNPTjsgIC8vL1xuXG4gIGRlZHVjdGlvbiA9IERlZHVjdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzaWduYXR1cmUgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAganNvbiA9IHNpZ25hdHVyZUpTT047IC8vL1xuXG4gICAgc2lnbmF0dXJlID0gU2lnbmF0dXJlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSByZWZlcmVuY2VKU09OOyAvLy9cblxuICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGlkZW50aWZpZXIgfSA9IGpzb247XG5cbiAgY29uc3QgaWRlbnRpZmllckpTT04gPSBpZGVudGlmaWVyOyAgLy8vXG5cbiAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgcHJvdmlzaW9uYWwgfSA9IGpzb247XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGUgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlOyAgLy8vXG5cbiAganNvbiA9IG1ldGF2YXJpYWJsZUpTT047IC8vL1xuXG4gIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlQ2FsbCA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbDsgIC8vL1xuXG4gICAganNvbiA9IHByb2NlZHVyZUNhbGxKU09OOyAvLy9cblxuICAgIHByb2NlZHVyZUNhbGwgPSBQcm9jZWR1cmVDYWxsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsVHlwZU5hbWVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbm9taW5hbFR5cGVOYW1lIH0gPSBqc29uO1xuXG4gIHJldHVybiBub21pbmFsVHlwZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb2NlZHVyZVJlZmVyZW5jZSB9ID0ganNvbjtcblxuICBjb25zdCB7IFByb2NlZHVyZVJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZUpTT04gPSBwcm9jZWR1cmVSZWZlcmVuY2U7ICAvLy9cblxuICBqc29uID0gcHJvY2VkdXJlUmVmZXJlbmNlSlNPTjsgIC8vL1xuXG4gIHByb2NlZHVyZVJlZmVyZW5jZSA9IFByb2NlZHVyZVJlZmVyZW5jZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tSlNPTihqc29uLCB0eXBlcywgY29udGV4dCkge1xuICBjb25zdCB7IHR5cGVzOiB0eXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cztcblxuICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHR5cGVzLnB1c2godHlwZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRlcm1zSlNPTiA9IHRlcm1zOyAvLy9cblxuICB0ZXJtcyA9IHRlcm1zSlNPTi5tYXAoKHRlcm1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHRlcm1KU09OLCAgLy8vXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJ1bGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUnVsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzOyAvLy9cblxuICBydWxlcyA9IHJ1bGVzSlNPTi5tYXAoKHJ1bGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHJ1bGVKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBmcmFtZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHMsXG4gICAgZnJhbWVzSlNPTiA9IGZyYW1lczsgLy8vXG5cbiAgZnJhbWVzID0gZnJhbWVzSlNPTi5tYXAoKGZyYW1lSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBmcmFtZUpTT04sICAvLy9cbiAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXhpb21zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXhpb20gfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbXNKU09OID0gYXhpb21zOyAvLy9cblxuICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUaGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuXG4gIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLm1hcCgodGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZXF1YWxpdGllcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEVxdWFsaXR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXF1YWxpdGllc0pTT04gPSBlcXVhbGl0aWVzOyAvLy9cblxuICBlcXVhbGl0aWVzID0gZXF1YWxpdGllc0pTT04ubWFwKChlcXVhbGl0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gZXF1YWxpdHlKU09OLCAgLy8vXG4gICAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXM7IC8vL1xuXG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTi5tYXAoKHByb3BlcnR5SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcm9wZXJ0eUpTT04sICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgc3VwZXJUeXBlczogc3VwZXJUeXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3Qgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLm1hcCgoc3VwZXJUeXBlSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgbmFtZSA9IHN0cmluZywgIC8vL1xuICAgICAgICAgICAgICAgIHR5cGUgPSBmaW5kVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgaHlwb3RoZXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEh5cG90aGVzaXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXM7ICAvLy9cblxuICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0pTT04ubWFwKChoeXBvdGhlc2lzSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBoeXBvdGhlc2lzSlNPTiwgLy8vXG4gICAgICAgICAgaHlwb3RoZXNpcyA9IEh5cG90aGVzaXMuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwYXJhbWV0ZXJzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzOyAvLy9cblxuICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0pTT04ubWFwKChwYXJhbWV0ZXJKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHBhcmFtZXRlckpTT04sICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGp1ZGdlbWVudHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBKdWRnZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBqdWRnZW1lbnRzSlNPTiA9IGp1ZGdlbWVudHM7IC8vL1xuXG4gIGp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzSlNPTi5tYXAoKGp1ZGdlbWVudEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0ganVkZ2VtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudCA9IEp1ZGdlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBqdWRnZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50cyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN0YXRlbWVudHNKU09OID0gc3RhdGVtZW50czsgLy8vXG5cbiAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNKU09OLm1hcCgoc3RhdGVtZW50SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBhc3NlcnRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZUFzc2VydGlvbiwgRGVmaW5lZEFzc2VydGlvbiwgUHJvcGVydHlBc3NlcnRpb24sIFN1YnByb29mQXNzZXJ0aW9uLCBTYXRpc2ZpZXNBc3NlcnRpb24sIENvbnRhaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9uczsgLy8vXG5cbiAgYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnNKU09OLm1hcCgoYXNzZXJ0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBhc3NlcnRpb25KU09OLCAgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uID0gVHlwZUFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBEZWZpbmVkQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFByb3BlcnR5QXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFN1YnByb29mQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFNhdGlzZmllc0Fzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBDb250YWluZWRBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzZXJ0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJlZmVyZW5jZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXM7IC8vL1xuXG4gIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzSlNPTi5tYXAoKHJlZmVyZW5jZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcmVmZXJlbmNlSlNPTiwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0pO1xuXG4gIHJldHVybiByZWZlcmVuY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbmplY3R1cmVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzOyAvLy9cblxuICBjb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzSlNPTi5tYXAoKGNvbmplY3R1cmVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbWJpbmF0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzOyAvLy9cblxuICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTi5tYXAoKGNvbWJpbmF0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGFzc3VtcHRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFzc3VtcHRpb25zSlNPTiA9IGFzc3VtcHRpb25zOyAvLy9cblxuICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zSlNPTi5tYXAoKGFzc3VtcHRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGFzc3VtcHRpb25KU09OLCAgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IEFzc3VtcHRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0eXBlUHJlZml4ZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZVByZWZpeGVzSlNPTiA9IHR5cGVQcmVmaXhlczsgLy8vXG5cbiAgdHlwZVByZWZpeGVzID0gdHlwZVByZWZpeGVzSlNPTi5tYXAoKHR5cGVQcmVmaXhKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHR5cGVQcmVmaXhKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeCA9IFR5cGVQcmVmaXguZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uc3RydWN0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzOyAvLy9cblxuICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLm1hcCgoY29uc3RydWN0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF0aGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtczsgLy8vXG5cbiAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTi5tYXAoKG1ldGF0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdXBwb3NpdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN1YnN0aXR1dGlvbnMgfSA9IGpzb247ICAvLy9cblxuICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnM7IC8vL1xuXG4gIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3Vic3RpdHV0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbkZyb21TdWJzdGl0dXRpb25KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzOyAvLy9cblxuICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT04ubWFwKChtZXRhdmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gY29udGV4dDtcblxuICAoe2NvbnRleHR9ID0ganNvbik7XG5cbiAganNvbiA9IGNvbnRleHQ7IC8vL1xuXG4gIGNvbnRleHQgPSByZWxlYXNlQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgZW1waGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0eVJlbGF0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByb3BlcnR5UmVsYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uc0pTT04gPSBwcm9wZXJ0eVJlbGF0aW9uczsgLy8vXG5cbiAgcHJvcGVydHlSZWxhdGlvbnMgPSBwcm9wZXJ0eVJlbGF0aW9uc0pTT04ubWFwKChwcm9wZXJ0eVJlbGF0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcm9wZXJ0eVJlbGF0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBQcm9wZXJ0eVJlbGF0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVUb05hbWVKU09OKG5hbWUpIHtcbiAgY29uc3QgbmFtZUpTT04gPSBuYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVRvVGVybUpTT04odGVybSkge1xuICBjb25zdCB0ZXJtSlNPTiA9ICh0ZXJtICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICB0ZXJtLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gdGVybUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlVG9UeXBlSlNPTih0eXBlKSB7XG4gIGNvbnN0IHR5cGVKU09OID0gKHR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0eXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lVG9GcmFtZUpTT04oZnJhbWUpIHtcbiAgY29uc3QgZnJhbWVKU09OID0gKGZyYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgZnJhbWUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gZnJhbWVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxUb0xhYmVsSlNPTihsYWJlbCkge1xuICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICByZXR1cm4gbGFiZWxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZFRvTmVnYXRlZEpTT04obmVnYXRlZCkge1xuICBjb25zdCBuZWdhdGVkSlNPTiA9IG5lZ2F0ZWQ7ICAvLy9cblxuICByZXR1cm4gbmVnYXRlZEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKG1ldGFUeXBlKSB7XG4gIGNvbnN0IG1ldGFUeXBlSlNPTiA9IChtZXRhVHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFUeXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIG1ldGFUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTihyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZS50b0pTT04oKTtcblxuICByZXR1cm4gcmVmZXJlbmNlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTihzdGF0ZW1lbnQpIHtcbiAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IChzdGF0ZW1lbnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50LnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKGRlZHVjdGlvbikge1xuICBjb25zdCBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHNpZ25hdHVyZSkge1xuICBjb25zdCBzaWduYXR1cmVKU09OID0gKHNpZ25hdHVyZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyVG9JZGVudGlmaWVySlNPTihpZGVudGlmaWVyKSB7XG4gIGNvbnN0IGlkZW50aWZpZXJKU09OID0gaWRlbnRpZmllcjsgIC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVySlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKGNvbmNsdXNpb24pIHtcbiAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04ocHJvdmlzaW9uYWwpIHtcbiAgY29uc3QgcHJvdmlzaW9uYWxKU09OID0gcHJvdmlzaW9uYWw7ICAvLy9cblxuICByZXR1cm4gcHJvdmlzaW9uYWxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04ocHJvY2VkdXJlQ2FsbCkge1xuICBjb25zdCBwcm9jZWR1cmVDYWxsSlNPTiA9IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZWR1cmVDYWxsLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsVHlwZU5hbWVUb05vbWluYWxUeXBlTmFtZUpTT04obm9taW5hbFR5cGVOYW1lKSB7XG4gIGNvbnN0IG5vbWluYWxUeXBlTmFtZUpTT04gPSBub21pbmFsVHlwZU5hbWU7ICAvLy9cblxuICByZXR1cm4gbm9taW5hbFR5cGVOYW1lSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OKGVwaGVtZXJhbENvbnRleHQpIHtcbiAgY29uc3QgZXBoZW1lcmFsQ29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0LnRvSlNPTigpO1xuXG4gIHJldHVybiBlcGhlbWVyYWxDb250ZXh0SlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTihwcm9jZWR1cmVSZWZlcmVuY2UpIHtcbiAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlSlNPTiA9IHByb2NlZHVyZVJlZmVyZW5jZS50b0pTT04oKTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbkZyb21TdWJzdGl0dXRpb25KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uLCBGcmFtZVN1YnN0aXR1dGlvbiwgU3RhdGVtZW50U3Vic3RpdHV0aW9uLCBSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSBUZXJtU3Vic3RpdHV0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIEZyYW1lU3Vic3RpdHV0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBSZWZlcmVuY2VTdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zVG9UZXJtc0pTT04odGVybXMpIHtcbiAgY29uc3QgdGVybXNKU09OID0gdGVybXMubWFwKCh0ZXJtKSA9PiB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHRlcm1KU09OO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNUb1R5cGVzSlNPTih0eXBlcykge1xuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gdHlwZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc1RvUnVsZXNKU09OKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVzSlNPTiA9IHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgIHJldHVybiBydWxlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpIHtcbiAgY29uc3QgZnJhbWVzSlNPTiA9IGZyYW1lcy5tYXAoKGZyYW1lKSA9PiB7XG4gICAgY29uc3QgZnJhbWVKU09OID0gZnJhbWUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gZnJhbWVKU09OO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICByZXR1cm4gYXhpb21KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzVG9QcmVtaXNlc0pTT04ocHJlbWlzZXMpIHtcbiAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNUb1RoZW9yZW1zSlNPTih0aGVvcmVtcykge1xuICBjb25zdCB0aGVvcmVtc0pTT04gPSB0aGVvcmVtcy5tYXAoKHRoZW9yZW0pID0+IHtcbiAgICBjb25zdCB0aGVvcmVtSlNPTiA9IHRoZW9yZW0udG9KU09OKCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbUpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odmFyaWFibGVzKSB7XG4gIGNvbnN0IHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTihoeXBvdGhlc2VzKSB7XG4gIGNvbnN0IGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlcy5tYXAoKGh5cG90aGVzaXMpID0+IHtcbiAgICBjb25zdCBoeXBvdGhlc2lzSlNPTiA9IGh5cG90aGVzaXMudG9KU09OKCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpc0pTT047XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHN1cGVyVHlwZXMpIHtcbiAgY29uc3Qgc3VwZXJUeXBlc0pTT04gPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZS50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBlclR5cGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTihwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlckpTT04gPSBwYXJhbWV0ZXIudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVySlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04ocHJvcGVydGllcykge1xuICBjb25zdCBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXMubWFwKChwcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5SlNPTiA9IHByb3BlcnR5LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04oanVkZ2VtZW50cykge1xuICBjb25zdCBqdWRnZW1lbnRzSlNPTiA9IGp1ZGdlbWVudHMubWFwKChqdWRnZW1lbnQpID0+IHtcbiAgICBjb25zdCBqdWRnZW1lbnRKU09OID0ganVkZ2VtZW50LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBqdWRnZW1lbnRzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OKGVxdWFsaXRpZXMpIHtcbiAgY29uc3QgZXF1YWxpdGllc0pTT04gPSBlcXVhbGl0aWVzLm1hcCgoZXF1YWxpdHkpID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eUpTT04gPSBlcXVhbGl0eS50b0pTT04oKTtcblxuICAgIHJldHVybiBlcXVhbGl0eUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBlcXVhbGl0aWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OKHN0YXRlbWVudHMpIHtcbiAgY29uc3Qgc3RhdGVtZW50c0pTT04gPSBzdGF0ZW1lbnRzLm1hcCgoc3RhdGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudC50b0pTT04oKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRKU09OO1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50c0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTihhc3NlcnRpb25zKSB7XG4gIGNvbnN0IGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9ucy5tYXAoKGFzc2VydGlvbikgPT4ge1xuICAgIGNvbnN0IGFzc2VydGlvbkpTT04gPSBhc3NlcnRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc2VydGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlc1RvUmVmZXJlbmNlc0pTT04ocmVmZXJlbmNlcykge1xuICBjb25zdCByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXMubWFwKChyZWZlcmVuY2UpID0+IHtcbiAgICBjb25zdCByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiByZWZlcmVuY2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04oY29uamVjdHVyZXMpIHtcbiAgY29uc3QgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVKU09OO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTihjb21iaW5hdG9ycykge1xuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvckpTT047XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc1RvQXNzdW1wdGlvbnNKU09OKGFzc3VtcHRpb25zKSB7XG4gIGNvbnN0IGFzc3VtcHRpb25zSlNPTiA9IGFzc3VtcHRpb25zLm1hcCgoYXNzdW1wdGlvbikgPT4ge1xuICAgIGNvbnN0IGFzc3VtcHRpb25KU09OID0gYXNzdW1wdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTihzdXBwb3NpdGlvbnMpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25KU09OID0gc3VwcG9zaXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTihjb25zdHJ1Y3RvcnMpIHtcbiAgY29uc3QgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9ycy5tYXAoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgY29uc3QgY29uc3RydWN0b3JKU09OID0gY29uc3RydWN0b3IudG9KU09OKCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JKU09OO1xuICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTihtZXRhdGhlb3JlbXMpIHtcbiAgY29uc3QgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtcy5tYXAoKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1KU09OID0gbWV0YXRoZW9yZW0udG9KU09OKCk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1KU09OO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTih0eXBlUHJlZml4ZXMpIHtcbiAgY29uc3QgdHlwZVByZWZpeGVzSlNPTiA9IHR5cGVQcmVmaXhlcy5tYXAoKHR5cGVQcmVmaXgpID0+IHtcbiAgICBjb25zdCB0eXBlUHJlZml4SlNPTiA9IHR5cGVQcmVmaXgudG9KU09OKCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeEpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlUHJlZml4ZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04oc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnMubWFwKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25KU09OID0gc3Vic3RpdHV0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKG1ldGF2YXJpYWJsZXMpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzLm1hcCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04oKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uc1RvUHJvcGVydHlSZWxhdGlvbnNKU09OKHByb3BlcnR5UmVsYXRpb25zKSB7XG4gIGNvbnN0IHByb3BlcnR5UmVsYXRpb25zSlNPTiA9IHByb3BlcnR5UmVsYXRpb25zLm1hcCgocHJvcGVydHlSZWxhdGlvbikgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25KU09OID0gcHJvcGVydHlSZWxhdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25zSlNPTjtcbn1cblxuZnVuY3Rpb24gZmluZFR5cGVCeU5hbWUobmFtZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gZmluZE1ldGFUeXBlQnlOYW1lKG5hbWUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG4iXSwibmFtZXMiOlsiYXNzZXJ0aW9uc0Zyb21KU09OIiwiYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04iLCJhc3N1bXB0aW9uc0Zyb21KU09OIiwiYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTiIsImF4aW9tc0Zyb21KU09OIiwiYXhpb21zVG9BeGlvbXNKU09OIiwiY29tYmluYXRvcnNGcm9tSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImNvbmplY3R1cmVzRnJvbUpTT04iLCJjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OIiwiY29uc3RydWN0b3JzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiIsImVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIiwiZXF1YWxpdGllc0Zyb21KU09OIiwiZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04iLCJmcmFtZUZyb21KU09OIiwiZnJhbWVUb0ZyYW1lSlNPTiIsImZyYW1lc0Zyb21KU09OIiwiZnJhbWVzVG9GcmFtZXNKU09OIiwiaHlwb3RoZXNlc0Zyb21KU09OIiwiaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04iLCJpZGVudGlmaWVyRnJvbUpTT04iLCJpZGVudGlmaWVyVG9JZGVudGlmaWVySlNPTiIsImp1ZGdlbWVudHNGcm9tSlNPTiIsImp1ZGdlbWVudHNUb0p1ZGdlbWVudHNKU09OIiwibGFiZWxGcm9tSlNPTiIsImxhYmVsVG9MYWJlbEpTT04iLCJsYWJlbHNGcm9tSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImxlbW1hc0Zyb21Ob3RoaW5nIiwibWV0YUxlbW1hc0Zyb21Ob3RoaW5nIiwibWV0YVR5cGVGcm9tSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJtZXRhdGhlb3JlbXNGcm9tSlNPTiIsIm1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwibWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04iLCJuYW1lRnJvbUpTT04iLCJuYW1lVG9OYW1lSlNPTiIsIm5lZ2F0ZWRGcm9tSlNPTiIsIm5lZ2F0ZWRUb05lZ2F0ZWRKU09OIiwibm9taW5hbFR5cGVOYW1lRnJvbUpTT04iLCJub21pbmFsVHlwZU5hbWVUb05vbWluYWxUeXBlTmFtZUpTT04iLCJwYXJhbWV0ZXJzRnJvbUpTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwicHJvY2VkdXJlQ2FsbEZyb21KU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInByb3BlcnRpZXNGcm9tSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwicHJvcGVydHlSZWxhdGlvbnNGcm9tSlNPTiIsInByb3BlcnR5UmVsYXRpb25zVG9Qcm9wZXJ0eVJlbGF0aW9uc0pTT04iLCJwcm92aXNpb25hbEZyb21KU09OIiwicHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTiIsInJlZmVyZW5jZUZyb21KU09OIiwicmVmZXJlbmNlVG9SZWZlcmVuY2VKU09OIiwicmVmZXJlbmNlc0Zyb21KU09OIiwicmVmZXJlbmNlc1RvUmVmZXJlbmNlc0pTT04iLCJydWxlc0Zyb21KU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsInNpZ25hdHVyZUZyb21KU09OIiwic2lnbmF0dXJlVG9TaWduYXR1cmVKU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRzRnJvbUpTT04iLCJzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTiIsInN1YnN0aXR1dGlvbkZyb21TdWJzdGl0dXRpb25KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidHlwZUZyb21KU09OIiwidHlwZVByZWZpeGVzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInR5cGVzRnJvbUpTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwianNvbiIsImNvbnRleHQiLCJuYW1lIiwibmFtZUpTT04iLCJ0ZXJtIiwidGVybUpTT04iLCJUZXJtIiwiZWxlbWVudHMiLCJmcm9tSlNPTiIsInR5cGUiLCJzdHJpbmciLCJmaW5kVHlwZUJ5TmFtZSIsImxhYmVsIiwiTGFiZWwiLCJsYWJlbEpTT04iLCJmcmFtZSIsImZyYW1lSlNPTiIsIkZyYW1lIiwibmVnYXRlZCIsIm1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlOYW1lIiwic3RhdGVtZW50IiwiU3RhdGVtZW50Iiwic3RhdGVtZW50SlNPTiIsImRlZHVjdGlvbiIsIkRlZHVjdGlvbiIsImRlZHVjdGlvbkpTT04iLCJzaWduYXR1cmUiLCJTaWduYXR1cmUiLCJzaWduYXR1cmVKU09OIiwicmVmZXJlbmNlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlSlNPTiIsImlkZW50aWZpZXIiLCJpZGVudGlmaWVySlNPTiIsImNvbmNsdXNpb24iLCJDb25jbHVzaW9uIiwiY29uY2x1c2lvbkpTT04iLCJwcm92aXNpb25hbCIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJwcm9jZWR1cmVDYWxsIiwiUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxKU09OIiwibm9taW5hbFR5cGVOYW1lIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInR5cGVzIiwidHlwZXNKU09OIiwiVHlwZSIsImZvckVhY2giLCJ0eXBlSlNPTiIsInB1c2giLCJ0ZXJtcyIsInRlcm1zSlNPTiIsIm1hcCIsInJ1bGVzIiwiUnVsZSIsInJ1bGVzSlNPTiIsInJ1bGVKU09OIiwicnVsZSIsImZyYW1lcyIsImZyYW1lc0pTT04iLCJsYWJlbHMiLCJsYWJlbHNKU09OIiwiYXhpb21zIiwiQXhpb20iLCJheGlvbXNKU09OIiwiYXhpb21KU09OIiwiYXhpb20iLCJwcmVtaXNlcyIsIlByZW1pc2UiLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlSlNPTiIsInByZW1pc2UiLCJ0aGVvcmVtcyIsIlRoZW9yZW0iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtSlNPTiIsInRoZW9yZW0iLCJ2YXJpYWJsZXMiLCJWYXJpYWJsZSIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZUpTT04iLCJ2YXJpYWJsZSIsImVxdWFsaXRpZXMiLCJFcXVhbGl0eSIsImVxdWFsaXRpZXNKU09OIiwiZXF1YWxpdHlKU09OIiwiZXF1YWxpdHkiLCJwcm9wZXJ0aWVzIiwiUHJvcGVydHkiLCJwcm9wZXJ0aWVzSlNPTiIsInByb3BlcnR5SlNPTiIsInByb3BlcnR5Iiwic3VwZXJUeXBlcyIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlSlNPTiIsInN1cGVyVHlwZSIsImh5cG90aGVzZXMiLCJIeXBvdGhlc2lzIiwiaHlwb3RoZXNlc0pTT04iLCJoeXBvdGhlc2lzSlNPTiIsImh5cG90aGVzaXMiLCJwYXJhbWV0ZXJzIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJKU09OIiwicGFyYW1ldGVyIiwianVkZ2VtZW50cyIsIkp1ZGdlbWVudCIsImp1ZGdlbWVudHNKU09OIiwianVkZ2VtZW50SlNPTiIsImp1ZGdlbWVudCIsInN0YXRlbWVudHMiLCJzdGF0ZW1lbnRzSlNPTiIsImFzc2VydGlvbnMiLCJUeXBlQXNzZXJ0aW9uIiwiRGVmaW5lZEFzc2VydGlvbiIsIlByb3BlcnR5QXNzZXJ0aW9uIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJDb250YWluZWRBc3NlcnRpb24iLCJhc3NlcnRpb25zSlNPTiIsImFzc2VydGlvbkpTT04iLCJhc3NlcnRpb24iLCJyZWZlcmVuY2VzIiwicmVmZXJlbmNlc0pTT04iLCJjb25qZWN0dXJlcyIsIkNvbmplY3R1cmUiLCJjb25qZWN0dXJlc0pTT04iLCJjb25qZWN0dXJlSlNPTiIsImNvbmplY3R1cmUiLCJjb21iaW5hdG9ycyIsIkNvbWJpbmF0b3IiLCJjb21iaW5hdG9yc0pTT04iLCJjb21iaW5hdG9ySlNPTiIsImNvbWJpbmF0b3IiLCJhc3N1bXB0aW9ucyIsIkFzc3VtcHRpb24iLCJhc3N1bXB0aW9uc0pTT04iLCJhc3N1bXB0aW9uSlNPTiIsImFzc3VtcHRpb24iLCJ0eXBlUHJlZml4ZXMiLCJUeXBlUHJlZml4IiwidHlwZVByZWZpeGVzSlNPTiIsInR5cGVQcmVmaXhKU09OIiwidHlwZVByZWZpeCIsImNvbnN0cnVjdG9ycyIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsImNvbnN0cnVjdG9yIiwibWV0YXRoZW9yZW1zIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1KU09OIiwibWV0YXRoZW9yZW0iLCJzdXBwb3NpdGlvbnMiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbkpTT04iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbkpTT04iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0pTT04iLCJyZWxlYXNlQ29udGV4dCIsImVtcGhlbWVyYWxDb250ZXh0IiwiRXBoZW1lcmFsQ29udGV4dCIsInByb3BlcnR5UmVsYXRpb25zIiwiUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb25zSlNPTiIsInByb3BlcnR5UmVsYXRpb25KU09OIiwicHJvcGVydHlSZWxhdGlvbiIsInRvSlNPTiIsIm5lZ2F0ZWRKU09OIiwibWV0YVR5cGVKU09OIiwicHJvdmlzaW9uYWxKU09OIiwibm9taW5hbFR5cGVOYW1lSlNPTiIsImVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0SlNPTiIsIlRlcm1TdWJzdGl0dXRpb24iLCJGcmFtZVN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQThlZ0JBO2VBQUFBOztRQTRmQUM7ZUFBQUE7O1FBdmJBQztlQUFBQTs7UUErZEFDO2VBQUFBOztRQXB0QkFDO2VBQUFBOztRQThqQkFDO2VBQUFBOztRQXpWQUM7ZUFBQUE7O1FBcWVBQztlQUFBQTs7UUF6MUJBQztlQUFBQTs7UUFxbUJBQztlQUFBQTs7UUFqUUFDO2VBQUFBOztRQTJlQUM7ZUFBQUE7O1FBM2FBQztlQUFBQTs7UUFtZEFDO2VBQUFBOztRQTE2QkFDO2VBQUFBOztRQW9vQkFDO2VBQUFBOztRQTlGQUM7ZUFBQUE7O1FBa0pBQztlQUFBQTs7UUF0YkFDO2VBQUFBOztRQXdsQkFDO2VBQUFBOztRQTk0QkFDO2VBQUFBOztRQThvQkFDO2VBQUFBOztRQXhiQUM7ZUFBQUE7O1FBb2xCQUM7ZUFBQUE7O1FBcGNBQztlQUFBQTs7UUFzZkFDO2VBQUFBOztRQS92QkFDO2VBQUFBOztRQXltQkFDO2VBQUFBOztRQWhVQUM7ZUFBQUE7O1FBOGZBQztlQUFBQTs7UUFqNUJBQztlQUFBQTs7UUFtcUJBQztlQUFBQTs7UUFoYkFDO2VBQUFBOztRQTBqQkFDO2VBQUFBOztRQWwyQkFDO2VBQUFBOztRQU1BQztlQUFBQTs7UUFrRkFDO2VBQUFBOztRQTRvQkFDO2VBQUFBOztRQXZJQUM7ZUFBQUE7O1FBNmNBQztlQUFBQTs7UUE5MkJBQztlQUFBQTs7UUE4bEJBQztlQUFBQTs7UUE5SUFDO2VBQUFBOztRQTRiQUM7ZUFBQUE7O1FBNWpDQUM7ZUFBQUE7O1FBOHFCQUM7ZUFBQUE7O1FBeG1CQUM7ZUFBQUE7O1FBNG9CQUM7ZUFBQUE7O1FBdGdCQUM7ZUFBQUE7O1FBZ2xCQUM7ZUFBQUE7O1FBaFhBQztlQUFBQTs7UUEwZkFDO2VBQUFBOztRQTFtQkFDO2VBQUFB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