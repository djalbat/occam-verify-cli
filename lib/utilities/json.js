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
function findTypeByName(name, context) {
    const typeName = name, type = context.findTypeByTypeName(typeName);
    return type;
}
function findMetaTypeByName(name, context) {
    const metaTypeName = name, metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEVwaGVtZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZXBoZW1lcmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbmFtZSB9ID0ganNvbjtcblxuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICBuYW1lID0gbmFtZUpTT047ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICAgIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cztcblxuICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAganNvbiA9IHR5cGU7ICAvLy9cblxuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIG5hbWUgPSBzdHJpbmc7ICAvLy9cblxuICAgIHR5cGUgPSBmaW5kVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGxhYmVsIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgIGxhYmVsSlNPTiA9IGxhYmVsOyAgLy8vXG5cbiAganNvbiA9IGxhYmVsSlNPTjsgLy8vXG5cbiAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZnJhbWUgfSA9IGpzb247XG5cbiAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgY29uc3QgZnJhbWVKU09OID0gZnJhbWU7ICAvLy9cblxuICAgIGpzb24gPSBmcmFtZUpTT047ICAvLy9cblxuICAgIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzO1xuXG4gICAgZnJhbWUgPSBGcmFtZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbmVnYXRlZCB9ID0ganNvbjtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBqc29uID0gbWV0YVR5cGU7ICAvLy9cblxuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIG5hbWUgPSBzdHJpbmc7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gZmluZE1ldGFUeXBlQnlOYW1lKG5hbWUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnQgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudDsgIC8vL1xuXG4gICAganNvbiA9IHN0YXRlbWVudEpTT047IC8vL1xuXG4gICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZGVkdWN0aW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRGVkdWN0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvbjsgIC8vL1xuXG4gIGpzb24gPSBkZWR1Y3Rpb25KU09OOyAgLy8vXG5cbiAgZGVkdWN0aW9uID0gRGVkdWN0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHNpZ25hdHVyZSA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHNpZ25hdHVyZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzaWduYXR1cmVKU09OID0gc2lnbmF0dXJlOyAgLy8vXG5cbiAgICBqc29uID0gc2lnbmF0dXJlSlNPTjsgLy8vXG5cbiAgICBzaWduYXR1cmUgPSBTaWduYXR1cmUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyByZWZlcmVuY2UgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlOyAgLy8vXG5cbiAganNvbiA9IHJlZmVyZW5jZUpTT047IC8vL1xuXG4gIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllckZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgaWRlbnRpZmllciB9ID0ganNvbjtcblxuICBjb25zdCBpZGVudGlmaWVySlNPTiA9IGlkZW50aWZpZXI7ICAvLy9cblxuICBpZGVudGlmaWVyID0gaWRlbnRpZmllckpTT047ICAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aXNpb25hbEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBwcm92aXNpb25hbCB9ID0ganNvbjtcblxuICByZXR1cm4gcHJvdmlzaW9uYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGU7ICAvLy9cblxuICBqc29uID0gbWV0YXZhcmlhYmxlSlNPTjsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVDYWxsID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbEpTT04gPSBwcm9jZWR1cmVDYWxsOyAgLy8vXG5cbiAgICBqc29uID0gcHJvY2VkdXJlQ2FsbEpTT047IC8vL1xuXG4gICAgcHJvY2VkdXJlQ2FsbCA9IFByb2NlZHVyZUNhbGwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbWluYWxUeXBlTmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBub21pbmFsVHlwZU5hbWUgfSA9IGpzb247XG5cbiAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlSlNPTiA9IHByb2NlZHVyZVJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSBwcm9jZWR1cmVSZWZlcmVuY2VKU09OOyAgLy8vXG5cbiAgcHJvY2VkdXJlUmVmZXJlbmNlID0gUHJvY2VkdXJlUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc0Zyb21KU09OKGpzb24sIHR5cGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgdHlwZXM6IHR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGUgfSA9IGVsZW1lbnRzO1xuXG4gIHR5cGVzSlNPTi5mb3JFYWNoKCh0eXBlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdHlwZXMucHVzaCh0eXBlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGVybXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGVybXNKU09OID0gdGVybXM7IC8vL1xuXG4gIHRlcm1zID0gdGVybXNKU09OLm1hcCgodGVybUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcnVsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSdWxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcnVsZXNKU09OID0gcnVsZXM7IC8vL1xuXG4gIHJ1bGVzID0gcnVsZXNKU09OLm1hcCgocnVsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBydWxlO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGZyYW1lcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEZyYW1lIH0gPSBlbGVtZW50cyxcbiAgICBmcmFtZXNKU09OID0gZnJhbWVzOyAvLy9cblxuICBmcmFtZXMgPSBmcmFtZXNKU09OLm1hcCgoZnJhbWVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGZyYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH0pO1xuXG4gIHJldHVybiBmcmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBheGlvbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBBeGlvbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGF4aW9tc0pTT04gPSBheGlvbXM7IC8vL1xuXG4gIGF4aW9tcyA9IGF4aW9tc0pTT04ubWFwKChheGlvbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXhpb21KU09OLCAgLy8vXG4gICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByZW1pc2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLm1hcCgocHJlbWlzZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJlbWlzZUpTT04sIC8vL1xuICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtczsgLy8vXG5cbiAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04ubWFwKCh0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIHRoZW9yZW0gPSBUaGVvcmVtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzOyAvLy9cblxuICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLm1hcCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBlcXVhbGl0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRXF1YWxpdHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXM7IC8vL1xuXG4gIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzSlNPTi5tYXAoKGVxdWFsaXR5SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBlcXVhbGl0eUpTT04sICAvLy9cbiAgICAgICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9KTtcblxuICByZXR1cm4gZXF1YWxpdGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb3BlcnRpZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcm9wZXJ0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllczsgLy8vXG5cbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNKU09OLm1hcCgocHJvcGVydHlKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByb3BlcnR5SlNPTiwgIC8vL1xuICAgICAgICAgIHByb3BlcnR5ID0gUHJvcGVydHkuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBzdXBlclR5cGVzOiBzdXBlclR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0pTT04ubWFwKChzdXBlclR5cGVKU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IHN1cGVyVHlwZUpTT04sICAvLy9cbiAgICAgICAgICAgICAgICB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgICBuYW1lID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgICAgdHlwZSA9IGZpbmRUeXBlQnlOYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBoeXBvdGhlc2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgSHlwb3RoZXNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlczsgIC8vL1xuXG4gIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzSlNPTi5tYXAoKGh5cG90aGVzaXNKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGh5cG90aGVzaXNKU09OLCAvLy9cbiAgICAgICAgICBoeXBvdGhlc2lzID0gSHlwb3RoZXNpcy5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9KTtcblxuICByZXR1cm4gaHlwb3RoZXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHBhcmFtZXRlcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnM7IC8vL1xuXG4gIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzSlNPTi5tYXAoKHBhcmFtZXRlckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcGFyYW1ldGVySlNPTiwgIC8vL1xuICAgICAgICAgIHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsganVkZ2VtZW50cyB9ID0ganNvbjtcblxuICBjb25zdCB7IEp1ZGdlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50czsgLy8vXG5cbiAganVkZ2VtZW50cyA9IGp1ZGdlbWVudHNKU09OLm1hcCgoanVkZ2VtZW50SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBqdWRnZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganVkZ2VtZW50ID0gSnVkZ2VtZW50LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGp1ZGdlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnRzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3RhdGVtZW50c0pTT04gPSBzdGF0ZW1lbnRzOyAvLy9cblxuICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0pTT04ubWFwKChzdGF0ZW1lbnRKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGFzc2VydGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlQXNzZXJ0aW9uLCBEZWZpbmVkQXNzZXJ0aW9uLCBQcm9wZXJ0eUFzc2VydGlvbiwgU3VicHJvb2ZBc3NlcnRpb24sIFNhdGlzZmllc0Fzc2VydGlvbiwgQ29udGFpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zOyAvLy9cblxuICBhc3NlcnRpb25zID0gYXNzZXJ0aW9uc0pTT04ubWFwKChhc3NlcnRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGFzc2VydGlvbkpTT04sICAvLy9cbiAgICAgICAgICBhc3NlcnRpb24gPSBUeXBlQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIERlZmluZWRBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgUHJvcGVydHlBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgU3VicHJvb2ZBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgU2F0aXNmaWVzQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIENvbnRhaW5lZEFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH0pO1xuXG4gIHJldHVybiBhc3NlcnRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcmVmZXJlbmNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJlZmVyZW5jZXNKU09OID0gcmVmZXJlbmNlczsgLy8vXG5cbiAgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZXNKU09OLm1hcCgocmVmZXJlbmNlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSByZWZlcmVuY2VKU09OLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uamVjdHVyZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXM7IC8vL1xuXG4gIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLm1hcCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uamVjdHVyZUpTT04sICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29tYmluYXRvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnM7IC8vL1xuXG4gIGNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNKU09OLm1hcCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29tYmluYXRvckpTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXNzdW1wdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBBc3N1bXB0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnM7IC8vL1xuXG4gIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNKU09OLm1hcCgoYXNzdW1wdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXNzdW1wdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uID0gQXNzdW1wdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4ZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHR5cGVQcmVmaXhlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGVQcmVmaXggfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzOyAvLy9cblxuICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLm1hcCgodHlwZVByZWZpeEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZVByZWZpeEpTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ID0gVHlwZVByZWZpeC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25zdHJ1Y3RvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnM7IC8vL1xuXG4gIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04ubWFwKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zOyAvLy9cblxuICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLm1hcCgobWV0YXRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN1cHBvc2l0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3Vic3RpdHV0aW9ucyB9ID0ganNvbjsgIC8vL1xuXG4gIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uOyAvLy9cblxuICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04ubWFwKChzdWJzdGl0dXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBTdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXM7IC8vL1xuXG4gIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTi5tYXAoKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSBjb250ZXh0O1xuXG4gICh7Y29udGV4dH0gPSBqc29uKTtcblxuICBqc29uID0gY29udGV4dDsgLy8vXG5cbiAgY29udGV4dCA9IHJlbGVhc2VDb250ZXh0OyAvLy9cblxuICBjb25zdCBlbXBoZW1lcmFsQ29udGV4dCA9IEVwaGVtZXJhbENvbnRleHQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGVtcGhlbWVyYWxDb250ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb3BlcnR5UmVsYXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHlSZWxhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zSlNPTiA9IHByb3BlcnR5UmVsYXRpb25zOyAvLy9cblxuICBwcm9wZXJ0eVJlbGF0aW9ucyA9IHByb3BlcnR5UmVsYXRpb25zSlNPTi5tYXAoKHByb3BlcnR5UmVsYXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByb3BlcnR5UmVsYXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IFByb3BlcnR5UmVsYXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZVRvTmFtZUpTT04obmFtZSkge1xuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICByZXR1cm4gbmFtZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtVG9UZXJtSlNPTih0ZXJtKSB7XG4gIGNvbnN0IHRlcm1KU09OID0gKHRlcm0gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHRlcm0udG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0ZXJtSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVUb1R5cGVKU09OKHR5cGUpIHtcbiAgY29uc3QgdHlwZUpTT04gPSAodHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgdHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVUb0ZyYW1lSlNPTihmcmFtZSkge1xuICBjb25zdCBmcmFtZUpTT04gPSAoZnJhbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICBmcmFtZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBmcmFtZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbFRvTGFiZWxKU09OKGxhYmVsKSB7XG4gIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gIHJldHVybiBsYWJlbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVG9OZWdhdGVkSlNPTihuZWdhdGVkKSB7XG4gIGNvbnN0IG5lZ2F0ZWRKU09OID0gbmVnYXRlZDsgIC8vL1xuXG4gIHJldHVybiBuZWdhdGVkSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04obWV0YVR5cGUpIHtcbiAgY29uc3QgbWV0YVR5cGVKU09OID0gKG1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gbWV0YVR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlVG9SZWZlcmVuY2VKU09OKHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gIHJldHVybiByZWZlcmVuY2VKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHN0YXRlbWVudCkge1xuICBjb25zdCBzdGF0ZW1lbnRKU09OID0gKHN0YXRlbWVudCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnQudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHN0YXRlbWVudEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04oZGVkdWN0aW9uKSB7XG4gIGNvbnN0IGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04oc2lnbmF0dXJlKSB7XG4gIGNvbnN0IHNpZ25hdHVyZUpTT04gPSAoc2lnbmF0dXJlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gc2lnbmF0dXJlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OKGlkZW50aWZpZXIpIHtcbiAgY29uc3QgaWRlbnRpZmllckpTT04gPSBpZGVudGlmaWVyOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXJKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04oY29uY2x1c2lvbikge1xuICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTihwcm92aXNpb25hbCkge1xuICBjb25zdCBwcm92aXNpb25hbEpTT04gPSBwcm92aXNpb25hbDsgIC8vL1xuXG4gIHJldHVybiBwcm92aXNpb25hbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04obWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTihwcm9jZWR1cmVDYWxsKSB7XG4gIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gKHByb2NlZHVyZUNhbGwgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZHVyZUNhbGwudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbWluYWxUeXBlTmFtZVRvTm9taW5hbFR5cGVOYW1lSlNPTihub21pbmFsVHlwZU5hbWUpIHtcbiAgY29uc3Qgbm9taW5hbFR5cGVOYW1lSlNPTiA9IG5vbWluYWxUeXBlTmFtZTsgIC8vL1xuXG4gIHJldHVybiBub21pbmFsVHlwZU5hbWVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04oZXBoZW1lcmFsQ29udGV4dCkge1xuICBjb25zdCBlcGhlbWVyYWxDb250ZXh0SlNPTiA9IGVwaGVtZXJhbENvbnRleHQudG9KU09OKCk7XG5cbiAgcmV0dXJuIGVwaGVtZXJhbENvbnRleHRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OKHByb2NlZHVyZVJlZmVyZW5jZSkge1xuICBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2VKU09OID0gcHJvY2VkdXJlUmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2VKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcykge1xuICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtcy5tYXAoKHRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgICByZXR1cm4gdGVybUpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc1RvVHlwZXNKU09OKHR5cGVzKSB7XG4gIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04oKTtcblxuICAgIHJldHVybiB0eXBlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzVG9SdWxlc0pTT04ocnVsZXMpIHtcbiAgY29uc3QgcnVsZXNKU09OID0gcnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHJ1bGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9MYWJlbHNKU09OKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgIHJldHVybiBsYWJlbEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcykge1xuICBjb25zdCBmcmFtZXNKU09OID0gZnJhbWVzLm1hcCgoZnJhbWUpID0+IHtcbiAgICBjb25zdCBmcmFtZUpTT04gPSBmcmFtZS50b0pTT04oKTtcblxuICAgIHJldHVybiBmcmFtZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBmcmFtZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zVG9BeGlvbXNKU09OKGF4aW9tcykge1xuICBjb25zdCBheGlvbXNKU09OID0gYXhpb21zLm1hcCgoYXhpb20pID0+IHtcbiAgICBjb25zdCBheGlvbUpTT04gPSBheGlvbS50b0pTT04oKTtcblxuICAgIHJldHVybiBheGlvbUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHJldHVybiB0aGVvcmVtSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKGh5cG90aGVzZXMpIHtcbiAgY29uc3QgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzLm1hcCgoaHlwb3RoZXNpcykgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXNKU09OID0gaHlwb3RoZXNpcy50b0pTT04oKTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04oc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cGVyVHlwZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVySlNPTiA9IHBhcmFtZXRlci50b0pTT04oKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJKU09OO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTihwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlKU09OID0gcHJvcGVydHkudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlKU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTihqdWRnZW1lbnRzKSB7XG4gIGNvbnN0IGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50cy5tYXAoKGp1ZGdlbWVudCkgPT4ge1xuICAgIGNvbnN0IGp1ZGdlbWVudEpTT04gPSBqdWRnZW1lbnQudG9KU09OKCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGp1ZGdlbWVudHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04oZXF1YWxpdGllcykge1xuICBjb25zdCBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXMubWFwKChlcXVhbGl0eSkgPT4ge1xuICAgIGNvbnN0IGVxdWFsaXR5SlNPTiA9IGVxdWFsaXR5LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04oc3RhdGVtZW50cykge1xuICBjb25zdCBzdGF0ZW1lbnRzSlNPTiA9IHN0YXRlbWVudHMubWFwKChzdGF0ZW1lbnQpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OKGFzc2VydGlvbnMpIHtcbiAgY29uc3QgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zLm1hcCgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzZXJ0aW9uSlNPTiA9IGFzc2VydGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXNzZXJ0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTihyZWZlcmVuY2VzKSB7XG4gIGNvbnN0IHJlZmVyZW5jZXNKU09OID0gcmVmZXJlbmNlcy5tYXAoKHJlZmVyZW5jZSkgPT4ge1xuICAgIGNvbnN0IHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTihjb25qZWN0dXJlcykge1xuICBjb25zdCBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICBjb25zdCBjb25qZWN0dXJlSlNPTiA9IGNvbmplY3R1cmUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OKGNvbWJpbmF0b3JzKSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JKU09OID0gY29tYmluYXRvci50b0pTT04oKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ySlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04oYXNzdW1wdGlvbnMpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnMubWFwKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvbkpTT04gPSBhc3N1bXB0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKGNvbnN0cnVjdG9ycykge1xuICBjb25zdCBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvckpTT047XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKG1ldGF0aGVvcmVtcykge1xuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUpTT04gPSBtZXRhdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OKHR5cGVQcmVmaXhlcykge1xuICBjb25zdCB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzLm1hcCgodHlwZVByZWZpeCkgPT4ge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhKU09OID0gdHlwZVByZWZpeC50b0pTT04oKTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTihzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucy5tYXAoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04obWV0YXZhcmlhYmxlcykge1xuICBjb25zdCBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25zVG9Qcm9wZXJ0eVJlbGF0aW9uc0pTT04ocHJvcGVydHlSZWxhdGlvbnMpIHtcbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbnNKU09OID0gcHJvcGVydHlSZWxhdGlvbnMubWFwKChwcm9wZXJ0eVJlbGF0aW9uKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbkpTT04gPSBwcm9wZXJ0eVJlbGF0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbnNKU09OO1xufVxuXG5mdW5jdGlvbiBmaW5kVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiBmaW5kTWV0YVR5cGVCeU5hbWUobmFtZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhVHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJhc3NlcnRpb25zRnJvbUpTT04iLCJhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTiIsImFzc3VtcHRpb25zRnJvbUpTT04iLCJhc3N1bXB0aW9uc1RvQXNzdW1wdGlvbnNKU09OIiwiYXhpb21zRnJvbUpTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIiwiZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04iLCJlcXVhbGl0aWVzRnJvbUpTT04iLCJlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTiIsImZyYW1lRnJvbUpTT04iLCJmcmFtZVRvRnJhbWVKU09OIiwiZnJhbWVzRnJvbUpTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJoeXBvdGhlc2VzRnJvbUpTT04iLCJoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTiIsImlkZW50aWZpZXJGcm9tSlNPTiIsImlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OIiwianVkZ2VtZW50c0Zyb21KU09OIiwianVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04iLCJsYWJlbEZyb21KU09OIiwibGFiZWxUb0xhYmVsSlNPTiIsImxhYmVsc0Zyb21KU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhVHlwZUZyb21KU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsIm5hbWVGcm9tSlNPTiIsIm5hbWVUb05hbWVKU09OIiwibmVnYXRlZEZyb21KU09OIiwibmVnYXRlZFRvTmVnYXRlZEpTT04iLCJub21pbmFsVHlwZU5hbWVGcm9tSlNPTiIsIm5vbWluYWxUeXBlTmFtZVRvTm9taW5hbFR5cGVOYW1lSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJwcm9wZXJ0eVJlbGF0aW9uc0Zyb21KU09OIiwicHJvcGVydHlSZWxhdGlvbnNUb1Byb3BlcnR5UmVsYXRpb25zSlNPTiIsInByb3Zpc2lvbmFsRnJvbUpTT04iLCJwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIiwicmVmZXJlbmNlRnJvbUpTT04iLCJyZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04iLCJyZWZlcmVuY2VzRnJvbUpTT04iLCJyZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJydWxlc1RvUnVsZXNKU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsInN0YXRlbWVudHNGcm9tSlNPTiIsInN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidHlwZUZyb21KU09OIiwidHlwZVByZWZpeGVzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInR5cGVzRnJvbUpTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwianNvbiIsImNvbnRleHQiLCJuYW1lIiwibmFtZUpTT04iLCJ0ZXJtIiwidGVybUpTT04iLCJUZXJtIiwiZWxlbWVudHMiLCJmcm9tSlNPTiIsInR5cGUiLCJzdHJpbmciLCJmaW5kVHlwZUJ5TmFtZSIsImxhYmVsIiwiTGFiZWwiLCJsYWJlbEpTT04iLCJmcmFtZSIsImZyYW1lSlNPTiIsIkZyYW1lIiwibmVnYXRlZCIsIm1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlOYW1lIiwic3RhdGVtZW50IiwiU3RhdGVtZW50Iiwic3RhdGVtZW50SlNPTiIsImRlZHVjdGlvbiIsIkRlZHVjdGlvbiIsImRlZHVjdGlvbkpTT04iLCJzaWduYXR1cmUiLCJTaWduYXR1cmUiLCJzaWduYXR1cmVKU09OIiwicmVmZXJlbmNlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlSlNPTiIsImlkZW50aWZpZXIiLCJpZGVudGlmaWVySlNPTiIsImNvbmNsdXNpb24iLCJDb25jbHVzaW9uIiwiY29uY2x1c2lvbkpTT04iLCJwcm92aXNpb25hbCIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJwcm9jZWR1cmVDYWxsIiwiUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxKU09OIiwibm9taW5hbFR5cGVOYW1lIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInR5cGVzIiwidHlwZXNKU09OIiwiVHlwZSIsImZvckVhY2giLCJ0eXBlSlNPTiIsInB1c2giLCJ0ZXJtcyIsInRlcm1zSlNPTiIsIm1hcCIsInJ1bGVzIiwiUnVsZSIsInJ1bGVzSlNPTiIsInJ1bGVKU09OIiwicnVsZSIsImZyYW1lcyIsImZyYW1lc0pTT04iLCJsYWJlbHMiLCJsYWJlbHNKU09OIiwiYXhpb21zIiwiQXhpb20iLCJheGlvbXNKU09OIiwiYXhpb21KU09OIiwiYXhpb20iLCJwcmVtaXNlcyIsIlByZW1pc2UiLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlSlNPTiIsInByZW1pc2UiLCJ0aGVvcmVtcyIsIlRoZW9yZW0iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtSlNPTiIsInRoZW9yZW0iLCJ2YXJpYWJsZXMiLCJWYXJpYWJsZSIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZUpTT04iLCJ2YXJpYWJsZSIsImVxdWFsaXRpZXMiLCJFcXVhbGl0eSIsImVxdWFsaXRpZXNKU09OIiwiZXF1YWxpdHlKU09OIiwiZXF1YWxpdHkiLCJwcm9wZXJ0aWVzIiwiUHJvcGVydHkiLCJwcm9wZXJ0aWVzSlNPTiIsInByb3BlcnR5SlNPTiIsInByb3BlcnR5Iiwic3VwZXJUeXBlcyIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlSlNPTiIsInN1cGVyVHlwZSIsImh5cG90aGVzZXMiLCJIeXBvdGhlc2lzIiwiaHlwb3RoZXNlc0pTT04iLCJoeXBvdGhlc2lzSlNPTiIsImh5cG90aGVzaXMiLCJwYXJhbWV0ZXJzIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJKU09OIiwicGFyYW1ldGVyIiwianVkZ2VtZW50cyIsIkp1ZGdlbWVudCIsImp1ZGdlbWVudHNKU09OIiwianVkZ2VtZW50SlNPTiIsImp1ZGdlbWVudCIsInN0YXRlbWVudHMiLCJzdGF0ZW1lbnRzSlNPTiIsImFzc2VydGlvbnMiLCJUeXBlQXNzZXJ0aW9uIiwiRGVmaW5lZEFzc2VydGlvbiIsIlByb3BlcnR5QXNzZXJ0aW9uIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJDb250YWluZWRBc3NlcnRpb24iLCJhc3NlcnRpb25zSlNPTiIsImFzc2VydGlvbkpTT04iLCJhc3NlcnRpb24iLCJyZWZlcmVuY2VzIiwicmVmZXJlbmNlc0pTT04iLCJjb25qZWN0dXJlcyIsIkNvbmplY3R1cmUiLCJjb25qZWN0dXJlc0pTT04iLCJjb25qZWN0dXJlSlNPTiIsImNvbmplY3R1cmUiLCJjb21iaW5hdG9ycyIsIkNvbWJpbmF0b3IiLCJjb21iaW5hdG9yc0pTT04iLCJjb21iaW5hdG9ySlNPTiIsImNvbWJpbmF0b3IiLCJhc3N1bXB0aW9ucyIsIkFzc3VtcHRpb24iLCJhc3N1bXB0aW9uc0pTT04iLCJhc3N1bXB0aW9uSlNPTiIsImFzc3VtcHRpb24iLCJ0eXBlUHJlZml4ZXMiLCJUeXBlUHJlZml4IiwidHlwZVByZWZpeGVzSlNPTiIsInR5cGVQcmVmaXhKU09OIiwidHlwZVByZWZpeCIsImNvbnN0cnVjdG9ycyIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsImNvbnN0cnVjdG9yIiwibWV0YXRoZW9yZW1zIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1KU09OIiwibWV0YXRoZW9yZW0iLCJzdXBwb3NpdGlvbnMiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbkpTT04iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25zSlNPTiIsIlN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkpTT04iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0pTT04iLCJyZWxlYXNlQ29udGV4dCIsImVtcGhlbWVyYWxDb250ZXh0IiwiRXBoZW1lcmFsQ29udGV4dCIsInByb3BlcnR5UmVsYXRpb25zIiwiUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb25zSlNPTiIsInByb3BlcnR5UmVsYXRpb25KU09OIiwicHJvcGVydHlSZWxhdGlvbiIsInRvSlNPTiIsIm5lZ2F0ZWRKU09OIiwibWV0YVR5cGVKU09OIiwicHJvdmlzaW9uYWxKU09OIiwibm9taW5hbFR5cGVOYW1lSlNPTiIsImVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0SlNPTiIsInR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTZlZ0JBO2VBQUFBOztRQW9mQUM7ZUFBQUE7O1FBL2FBQztlQUFBQTs7UUF1ZEFDO2VBQUFBOztRQTVzQkFDO2VBQUFBOztRQXNqQkFDO2VBQUFBOztRQWpWQUM7ZUFBQUE7O1FBNmRBQztlQUFBQTs7UUFqMUJBQztlQUFBQTs7UUF1bUJBQztlQUFBQTs7UUFuUUFDO2VBQUFBOztRQW1lQUM7ZUFBQUE7O1FBbmFBQztlQUFBQTs7UUEyY0FDO2VBQUFBOztRQWw2QkFDO2VBQUFBOztRQXNvQkFDO2VBQUFBOztRQTlGQUM7ZUFBQUE7O1FBa0pBQztlQUFBQTs7UUF4YkFDO2VBQUFBOztRQWdsQkFDO2VBQUFBOztRQXQ0QkFDO2VBQUFBOztRQWdwQkFDO2VBQUFBOztRQTFiQUM7ZUFBQUE7O1FBNGtCQUM7ZUFBQUE7O1FBNWJBQztlQUFBQTs7UUE4ZUFDO2VBQUFBOztRQXZ2QkFDO2VBQUFBOztRQTJtQkFDO2VBQUFB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