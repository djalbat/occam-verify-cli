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
function labelFromJSON(json, context) {
    let { label } = json;
    const { Label } = _elements.default, labelJSON = label; ///
    json = labelJSON; ///
    label = Label.fromJSON(json, context);
    return label;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEVwaGVtZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZXBoZW1lcmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbmFtZSB9ID0ganNvbjtcblxuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICBuYW1lID0gbmFtZUpTT047ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICAgIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cztcblxuICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAganNvbiA9IHR5cGU7ICAvLy9cblxuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIG5hbWUgPSBzdHJpbmc7ICAvLy9cblxuICAgIHR5cGUgPSBmaW5kVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGZyYW1lIH0gPSBqc29uO1xuXG4gIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGZyYW1lSlNPTiA9IGZyYW1lOyAgLy8vXG5cbiAgICBqc29uID0gZnJhbWVKU09OOyAgLy8vXG5cbiAgICBjb25zdCB7IEZyYW1lIH0gPSBlbGVtZW50cztcblxuICAgIGZyYW1lID0gRnJhbWUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IG5lZ2F0ZWQgfSA9IGpzb247XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YVR5cGUgfSA9IGpzb247XG5cbiAgaWYgKG1ldGFUeXBlICE9PSBudWxsKSB7XG4gICAganNvbiA9IG1ldGFUeXBlOyAgLy8vXG5cbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBuYW1lID0gc3RyaW5nOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IGZpbmRNZXRhVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50ID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIGpzb24gPSBzdGF0ZW1lbnRKU09OOyAvLy9cblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGRlZHVjdGlvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb247ICAvLy9cblxuICBqc29uID0gZGVkdWN0aW9uSlNPTjsgIC8vL1xuXG4gIGRlZHVjdGlvbiA9IERlZHVjdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzaWduYXR1cmUgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAganNvbiA9IHNpZ25hdHVyZUpTT047IC8vL1xuXG4gICAgc2lnbmF0dXJlID0gU2lnbmF0dXJlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSByZWZlcmVuY2VKU09OOyAvLy9cblxuICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGlkZW50aWZpZXIgfSA9IGpzb247XG5cbiAgY29uc3QgaWRlbnRpZmllckpTT04gPSBpZGVudGlmaWVyOyAgLy8vXG5cbiAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgcHJvdmlzaW9uYWwgfSA9IGpzb247XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGUgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlOyAgLy8vXG5cbiAganNvbiA9IG1ldGF2YXJpYWJsZUpTT047IC8vL1xuXG4gIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlQ2FsbCA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbDsgIC8vL1xuXG4gICAganNvbiA9IHByb2NlZHVyZUNhbGxKU09OOyAvLy9cblxuICAgIHByb2NlZHVyZUNhbGwgPSBQcm9jZWR1cmVDYWxsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsVHlwZU5hbWVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbm9taW5hbFR5cGVOYW1lIH0gPSBqc29uO1xuXG4gIHJldHVybiBub21pbmFsVHlwZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb2NlZHVyZVJlZmVyZW5jZSB9ID0ganNvbjtcblxuICBjb25zdCB7IFByb2NlZHVyZVJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZUpTT04gPSBwcm9jZWR1cmVSZWZlcmVuY2U7ICAvLy9cblxuICBqc29uID0gcHJvY2VkdXJlUmVmZXJlbmNlSlNPTjsgIC8vL1xuXG4gIHByb2NlZHVyZVJlZmVyZW5jZSA9IFByb2NlZHVyZVJlZmVyZW5jZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tSlNPTihqc29uLCB0eXBlcywgY29udGV4dCkge1xuICBjb25zdCB7IHR5cGVzOiB0eXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cztcblxuICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHR5cGVzLnB1c2godHlwZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRlcm1zSlNPTiA9IHRlcm1zOyAvLy9cblxuICB0ZXJtcyA9IHRlcm1zSlNPTi5tYXAoKHRlcm1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHRlcm1KU09OLCAgLy8vXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJ1bGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUnVsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzOyAvLy9cblxuICBydWxlcyA9IHJ1bGVzSlNPTi5tYXAoKHJ1bGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHJ1bGVKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGxhYmVsIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBsYWJlbEpTT04gPSBsYWJlbDsgIC8vL1xuXG4gIGpzb24gPSBsYWJlbEpTT047IC8vL1xuXG4gIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBmcmFtZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHMsXG4gICAgZnJhbWVzSlNPTiA9IGZyYW1lczsgLy8vXG5cbiAgZnJhbWVzID0gZnJhbWVzSlNPTi5tYXAoKGZyYW1lSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBmcmFtZUpTT04sICAvLy9cbiAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXhpb21zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXhpb20gfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbXNKU09OID0gYXhpb21zOyAvLy9cblxuICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUaGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuXG4gIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLm1hcCgodGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZXF1YWxpdGllcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEVxdWFsaXR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXF1YWxpdGllc0pTT04gPSBlcXVhbGl0aWVzOyAvLy9cblxuICBlcXVhbGl0aWVzID0gZXF1YWxpdGllc0pTT04ubWFwKChlcXVhbGl0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gZXF1YWxpdHlKU09OLCAgLy8vXG4gICAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXM7IC8vL1xuXG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTi5tYXAoKHByb3BlcnR5SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcm9wZXJ0eUpTT04sICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgc3VwZXJUeXBlczogc3VwZXJUeXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3Qgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLm1hcCgoc3VwZXJUeXBlSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgbmFtZSA9IHN0cmluZywgIC8vL1xuICAgICAgICAgICAgICAgIHR5cGUgPSBmaW5kVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgaHlwb3RoZXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEh5cG90aGVzaXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXM7ICAvLy9cblxuICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0pTT04ubWFwKChoeXBvdGhlc2lzSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBoeXBvdGhlc2lzSlNPTiwgLy8vXG4gICAgICAgICAgaHlwb3RoZXNpcyA9IEh5cG90aGVzaXMuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwYXJhbWV0ZXJzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzOyAvLy9cblxuICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0pTT04ubWFwKChwYXJhbWV0ZXJKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHBhcmFtZXRlckpTT04sICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGp1ZGdlbWVudHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBKdWRnZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBqdWRnZW1lbnRzSlNPTiA9IGp1ZGdlbWVudHM7IC8vL1xuXG4gIGp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzSlNPTi5tYXAoKGp1ZGdlbWVudEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0ganVkZ2VtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudCA9IEp1ZGdlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBqdWRnZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50cyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN0YXRlbWVudHNKU09OID0gc3RhdGVtZW50czsgLy8vXG5cbiAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNKU09OLm1hcCgoc3RhdGVtZW50SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBhc3NlcnRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZUFzc2VydGlvbiwgRGVmaW5lZEFzc2VydGlvbiwgUHJvcGVydHlBc3NlcnRpb24sIFN1YnByb29mQXNzZXJ0aW9uLCBTYXRpc2ZpZXNBc3NlcnRpb24sIENvbnRhaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9uczsgLy8vXG5cbiAgYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnNKU09OLm1hcCgoYXNzZXJ0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBhc3NlcnRpb25KU09OLCAgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uID0gVHlwZUFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBEZWZpbmVkQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFByb3BlcnR5QXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFN1YnByb29mQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFNhdGlzZmllc0Fzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBDb250YWluZWRBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzZXJ0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJlZmVyZW5jZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXM7IC8vL1xuXG4gIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzSlNPTi5tYXAoKHJlZmVyZW5jZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcmVmZXJlbmNlSlNPTiwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0pO1xuXG4gIHJldHVybiByZWZlcmVuY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbmplY3R1cmVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzOyAvLy9cblxuICBjb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzSlNPTi5tYXAoKGNvbmplY3R1cmVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbWJpbmF0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzOyAvLy9cblxuICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTi5tYXAoKGNvbWJpbmF0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGFzc3VtcHRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFzc3VtcHRpb25zSlNPTiA9IGFzc3VtcHRpb25zOyAvLy9cblxuICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zSlNPTi5tYXAoKGFzc3VtcHRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGFzc3VtcHRpb25KU09OLCAgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IEFzc3VtcHRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0eXBlUHJlZml4ZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZVByZWZpeGVzSlNPTiA9IHR5cGVQcmVmaXhlczsgLy8vXG5cbiAgdHlwZVByZWZpeGVzID0gdHlwZVByZWZpeGVzSlNPTi5tYXAoKHR5cGVQcmVmaXhKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHR5cGVQcmVmaXhKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeCA9IFR5cGVQcmVmaXguZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uc3RydWN0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzOyAvLy9cblxuICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLm1hcCgoY29uc3RydWN0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF0aGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtczsgLy8vXG5cbiAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTi5tYXAoKG1ldGF0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdXBwb3NpdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN1YnN0aXR1dGlvbnMgfSA9IGpzb247ICAvLy9cblxuICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucywgIC8vL1xuICAgICAgICBTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb247IC8vL1xuXG4gIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3Vic3RpdHV0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IFN1YnN0aXR1dGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlczsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNKU09OLm1hcCgobWV0YXZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgKHtjb250ZXh0fSA9IGpzb24pO1xuXG4gIGpzb24gPSBjb250ZXh0OyAvLy9cblxuICBjb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7IC8vL1xuXG4gIGNvbnN0IGVtcGhlbWVyYWxDb250ZXh0ID0gRXBoZW1lcmFsQ29udGV4dC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvcGVydHlSZWxhdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcm9wZXJ0eVJlbGF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbnNKU09OID0gcHJvcGVydHlSZWxhdGlvbnM7IC8vL1xuXG4gIHByb3BlcnR5UmVsYXRpb25zID0gcHJvcGVydHlSZWxhdGlvbnNKU09OLm1hcCgocHJvcGVydHlSZWxhdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJvcGVydHlSZWxhdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gUHJvcGVydHlSZWxhdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lVG9OYW1lSlNPTihuYW1lKSB7XG4gIGNvbnN0IG5hbWVKU09OID0gbmFtZTsgIC8vL1xuXG4gIHJldHVybiBuYW1lSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Ub1Rlcm1KU09OKHRlcm0pIHtcbiAgY29uc3QgdGVybUpTT04gPSAodGVybSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgdGVybS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHRlcm1KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVRvVHlwZUpTT04odHlwZSkge1xuICBjb25zdCB0eXBlSlNPTiA9ICh0eXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICB0eXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gdHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZVRvRnJhbWVKU09OKGZyYW1lKSB7XG4gIGNvbnN0IGZyYW1lSlNPTiA9IChmcmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIGZyYW1lSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsVG9MYWJlbEpTT04obGFiZWwpIHtcbiAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgcmV0dXJuIGxhYmVsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRUb05lZ2F0ZWRKU09OKG5lZ2F0ZWQpIHtcbiAgY29uc3QgbmVnYXRlZEpTT04gPSBuZWdhdGVkOyAgLy8vXG5cbiAgcmV0dXJuIG5lZ2F0ZWRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVUb01ldGFUeXBlSlNPTihtZXRhVHlwZSkge1xuICBjb25zdCBtZXRhVHlwZUpTT04gPSAobWV0YVR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhVHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBtZXRhVHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04ocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2UudG9KU09OKCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04oc3RhdGVtZW50KSB7XG4gIGNvbnN0IHN0YXRlbWVudEpTT04gPSAoc3RhdGVtZW50ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudC50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gc3RhdGVtZW50SlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTihkZWR1Y3Rpb24pIHtcbiAgY29uc3QgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvbi50b0pTT04oKTtcblxuICByZXR1cm4gZGVkdWN0aW9uSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTihzaWduYXR1cmUpIHtcbiAgY29uc3Qgc2lnbmF0dXJlSlNPTiA9IChzaWduYXR1cmUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBzaWduYXR1cmVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllclRvSWRlbnRpZmllckpTT04oaWRlbnRpZmllcikge1xuICBjb25zdCBpZGVudGlmaWVySlNPTiA9IGlkZW50aWZpZXI7ICAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllckpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTihjb25jbHVzaW9uKSB7XG4gIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbi50b0pTT04oKTtcblxuICByZXR1cm4gY29uY2x1c2lvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OKHByb3Zpc2lvbmFsKSB7XG4gIGNvbnN0IHByb3Zpc2lvbmFsSlNPTiA9IHByb3Zpc2lvbmFsOyAgLy8vXG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTihtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04oKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OKHByb2NlZHVyZUNhbGwpIHtcbiAgY29uc3QgcHJvY2VkdXJlQ2FsbEpTT04gPSAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbC50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbFR5cGVOYW1lVG9Ob21pbmFsVHlwZU5hbWVKU09OKG5vbWluYWxUeXBlTmFtZSkge1xuICBjb25zdCBub21pbmFsVHlwZU5hbWVKU09OID0gbm9taW5hbFR5cGVOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04ocHJvY2VkdXJlUmVmZXJlbmNlKSB7XG4gIGNvbnN0IHByb2NlZHVyZVJlZmVyZW5jZUpTT04gPSBwcm9jZWR1cmVSZWZlcmVuY2UudG9KU09OKCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc1RvVGVybXNKU09OKHRlcm1zKSB7XG4gIGNvbnN0IHRlcm1zSlNPTiA9IHRlcm1zLm1hcCgodGVybSkgPT4ge1xuICAgIGNvbnN0IHRlcm1KU09OID0gdGVybS50b0pTT04oKTtcblxuICAgIHJldHVybiB0ZXJtSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzVG9UeXBlc0pTT04odHlwZXMpIHtcbiAgY29uc3QgdHlwZXNKU09OID0gdHlwZXMubWFwKCh0eXBlKSA9PiB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHR5cGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gdHlwZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNUb1J1bGVzSlNPTihydWxlcykge1xuICBjb25zdCBydWxlc0pTT04gPSBydWxlcy5tYXAoKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcnVsZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBydWxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNUb0xhYmVsc0pTT04obGFiZWxzKSB7XG4gIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVsc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZXNUb0ZyYW1lc0pTT04oZnJhbWVzKSB7XG4gIGNvbnN0IGZyYW1lc0pTT04gPSBmcmFtZXMubWFwKChmcmFtZSkgPT4ge1xuICAgIGNvbnN0IGZyYW1lSlNPTiA9IGZyYW1lLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGZyYW1lSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYW1lc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNUb0F4aW9tc0pTT04oYXhpb21zKSB7XG4gIGNvbnN0IGF4aW9tc0pTT04gPSBheGlvbXMubWFwKChheGlvbSkgPT4ge1xuICAgIGNvbnN0IGF4aW9tSlNPTiA9IGF4aW9tLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGF4aW9tSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHByZW1pc2VzKSB7XG4gIGNvbnN0IHByZW1pc2VzSlNPTiA9IHByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS50b0pTT04oKTtcblxuICAgIHJldHVybiBwcmVtaXNlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1zVG9UaGVvcmVtc0pTT04odGhlb3JlbXMpIHtcbiAgY29uc3QgdGhlb3JlbXNKU09OID0gdGhlb3JlbXMubWFwKCh0aGVvcmVtKSA9PiB7XG4gICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHRoZW9yZW1KU09OO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OKHZhcmlhYmxlcykge1xuICBjb25zdCB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzLm1hcCgodmFyaWFibGUpID0+IHtcbiAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04oKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04oaHlwb3RoZXNlcykge1xuICBjb25zdCBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXMubWFwKChoeXBvdGhlc2lzKSA9PiB7XG4gICAgY29uc3QgaHlwb3RoZXNpc0pTT04gPSBoeXBvdGhlc2lzLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXNKU09OO1xuICB9KTtcblxuICByZXR1cm4gaHlwb3RoZXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTihzdXBlclR5cGVzKSB7XG4gIGNvbnN0IHN1cGVyVHlwZXNKU09OID0gc3VwZXJUeXBlcy5tYXAoKHN1cGVyVHlwZSkgPT4ge1xuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSBzdXBlclR5cGUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04ocGFyYW1ldGVycykge1xuICBjb25zdCBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnMubWFwKChwYXJhbWV0ZXIpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJKU09OID0gcGFyYW1ldGVyLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlckpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzLm1hcCgocHJvcGVydHkpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eUpTT04gPSBwcm9wZXJ0eS50b0pTT04oKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudHNUb0p1ZGdlbWVudHNKU09OKGp1ZGdlbWVudHMpIHtcbiAgY29uc3QganVkZ2VtZW50c0pTT04gPSBqdWRnZW1lbnRzLm1hcCgoanVkZ2VtZW50KSA9PiB7XG4gICAgY29uc3QganVkZ2VtZW50SlNPTiA9IGp1ZGdlbWVudC50b0pTT04oKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRKU09OO1xuICB9KTtcblxuICByZXR1cm4ganVkZ2VtZW50c0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTihlcXVhbGl0aWVzKSB7XG4gIGNvbnN0IGVxdWFsaXRpZXNKU09OID0gZXF1YWxpdGllcy5tYXAoKGVxdWFsaXR5KSA9PiB7XG4gICAgY29uc3QgZXF1YWxpdHlKU09OID0gZXF1YWxpdHkudG9KU09OKCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHlKU09OO1xuICB9KTtcblxuICByZXR1cm4gZXF1YWxpdGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTihzdGF0ZW1lbnRzKSB7XG4gIGNvbnN0IHN0YXRlbWVudHNKU09OID0gc3RhdGVtZW50cy5tYXAoKHN0YXRlbWVudCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQudG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04oYXNzZXJ0aW9ucykge1xuICBjb25zdCBhc3NlcnRpb25zSlNPTiA9IGFzc2VydGlvbnMubWFwKChhc3NlcnRpb24pID0+IHtcbiAgICBjb25zdCBhc3NlcnRpb25KU09OID0gYXNzZXJ0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBhc3NlcnRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OKHJlZmVyZW5jZXMpIHtcbiAgY29uc3QgcmVmZXJlbmNlc0pTT04gPSByZWZlcmVuY2VzLm1hcCgocmVmZXJlbmNlKSA9PiB7XG4gICAgY29uc3QgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZS50b0pTT04oKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VKU09OO1xuICB9KTtcblxuICByZXR1cm4gcmVmZXJlbmNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OKGNvbmplY3R1cmVzKSB7XG4gIGNvbnN0IGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzLm1hcCgoY29uamVjdHVyZSkgPT4ge1xuICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04oKTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04oY29tYmluYXRvcnMpIHtcbiAgY29uc3QgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnMubWFwKChjb21iaW5hdG9yKSA9PiB7XG4gICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JKU09OO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTihhc3N1bXB0aW9ucykge1xuICBjb25zdCBhc3N1bXB0aW9uc0pTT04gPSBhc3N1bXB0aW9ucy5tYXAoKGFzc3VtcHRpb24pID0+IHtcbiAgICBjb25zdCBhc3N1bXB0aW9uSlNPTiA9IGFzc3VtcHRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04oc3VwcG9zaXRpb25zKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04oY29uc3RydWN0b3JzKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ySlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04obWV0YXRoZW9yZW1zKSB7XG4gIGNvbnN0IG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXMubWFwKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04odHlwZVByZWZpeGVzKSB7XG4gIGNvbnN0IHR5cGVQcmVmaXhlc0pTT04gPSB0eXBlUHJlZml4ZXMubWFwKCh0eXBlUHJlZml4KSA9PiB7XG4gICAgY29uc3QgdHlwZVByZWZpeEpTT04gPSB0eXBlUHJlZml4LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhKU09OO1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLm1hcCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTihtZXRhdmFyaWFibGVzKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbnNUb1Byb3BlcnR5UmVsYXRpb25zSlNPTihwcm9wZXJ0eVJlbGF0aW9ucykge1xuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uc0pTT04gPSBwcm9wZXJ0eVJlbGF0aW9ucy5tYXAoKHByb3BlcnR5UmVsYXRpb24pID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uSlNPTiA9IHByb3BlcnR5UmVsYXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uc0pTT047XG59XG5cbmZ1bmN0aW9uIGZpbmRUeXBlQnlOYW1lKG5hbWUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIGZpbmRNZXRhVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgbWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuIl0sIm5hbWVzIjpbImFzc2VydGlvbnNGcm9tSlNPTiIsImFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OIiwiYXNzdW1wdGlvbnNGcm9tSlNPTiIsImFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04iLCJheGlvbXNGcm9tSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJlcXVhbGl0aWVzRnJvbUpTT04iLCJlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTiIsImZyYW1lRnJvbUpTT04iLCJmcmFtZVRvRnJhbWVKU09OIiwiZnJhbWVzRnJvbUpTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJoeXBvdGhlc2VzRnJvbUpTT04iLCJoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTiIsImlkZW50aWZpZXJGcm9tSlNPTiIsImlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OIiwianVkZ2VtZW50c0Zyb21KU09OIiwianVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04iLCJsYWJlbEZyb21KU09OIiwibGFiZWxUb0xhYmVsSlNPTiIsImxhYmVsc0Zyb21KU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhVHlwZUZyb21KU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsIm5hbWVGcm9tSlNPTiIsIm5hbWVUb05hbWVKU09OIiwibmVnYXRlZEZyb21KU09OIiwibmVnYXRlZFRvTmVnYXRlZEpTT04iLCJub21pbmFsVHlwZU5hbWVGcm9tSlNPTiIsIm5vbWluYWxUeXBlTmFtZVRvTm9taW5hbFR5cGVOYW1lSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJwcm9wZXJ0eVJlbGF0aW9uc0Zyb21KU09OIiwicHJvcGVydHlSZWxhdGlvbnNUb1Byb3BlcnR5UmVsYXRpb25zSlNPTiIsInByb3Zpc2lvbmFsRnJvbUpTT04iLCJwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIiwicmVmZXJlbmNlRnJvbUpTT04iLCJyZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04iLCJyZWZlcmVuY2VzRnJvbUpTT04iLCJyZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJydWxlc1RvUnVsZXNKU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsInN0YXRlbWVudHNGcm9tSlNPTiIsInN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidHlwZUZyb21KU09OIiwidHlwZVByZWZpeGVzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInR5cGVzRnJvbUpTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwianNvbiIsImNvbnRleHQiLCJuYW1lIiwibmFtZUpTT04iLCJ0ZXJtIiwidGVybUpTT04iLCJUZXJtIiwiZWxlbWVudHMiLCJmcm9tSlNPTiIsInR5cGUiLCJzdHJpbmciLCJmaW5kVHlwZUJ5TmFtZSIsImZyYW1lIiwiZnJhbWVKU09OIiwiRnJhbWUiLCJuZWdhdGVkIiwibWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU5hbWUiLCJzdGF0ZW1lbnQiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRKU09OIiwiZGVkdWN0aW9uIiwiRGVkdWN0aW9uIiwiZGVkdWN0aW9uSlNPTiIsInNpZ25hdHVyZSIsIlNpZ25hdHVyZSIsInNpZ25hdHVyZUpTT04iLCJyZWZlcmVuY2UiLCJSZWZlcmVuY2UiLCJyZWZlcmVuY2VKU09OIiwiaWRlbnRpZmllciIsImlkZW50aWZpZXJKU09OIiwiY29uY2x1c2lvbiIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uSlNPTiIsInByb3Zpc2lvbmFsIiwibWV0YXZhcmlhYmxlIiwiTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlSlNPTiIsInByb2NlZHVyZUNhbGwiLCJQcm9jZWR1cmVDYWxsIiwicHJvY2VkdXJlQ2FsbEpTT04iLCJub21pbmFsVHlwZU5hbWUiLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJQcm9jZWR1cmVSZWZlcmVuY2UiLCJwcm9jZWR1cmVSZWZlcmVuY2VKU09OIiwidHlwZXMiLCJ0eXBlc0pTT04iLCJUeXBlIiwiZm9yRWFjaCIsInR5cGVKU09OIiwicHVzaCIsInRlcm1zIiwidGVybXNKU09OIiwibWFwIiwicnVsZXMiLCJSdWxlIiwicnVsZXNKU09OIiwicnVsZUpTT04iLCJydWxlIiwibGFiZWwiLCJMYWJlbCIsImxhYmVsSlNPTiIsImZyYW1lcyIsImZyYW1lc0pTT04iLCJsYWJlbHMiLCJsYWJlbHNKU09OIiwiYXhpb21zIiwiQXhpb20iLCJheGlvbXNKU09OIiwiYXhpb21KU09OIiwiYXhpb20iLCJwcmVtaXNlcyIsIlByZW1pc2UiLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlSlNPTiIsInByZW1pc2UiLCJ0aGVvcmVtcyIsIlRoZW9yZW0iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtSlNPTiIsInRoZW9yZW0iLCJ2YXJpYWJsZXMiLCJWYXJpYWJsZSIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZUpTT04iLCJ2YXJpYWJsZSIsImVxdWFsaXRpZXMiLCJFcXVhbGl0eSIsImVxdWFsaXRpZXNKU09OIiwiZXF1YWxpdHlKU09OIiwiZXF1YWxpdHkiLCJwcm9wZXJ0aWVzIiwiUHJvcGVydHkiLCJwcm9wZXJ0aWVzSlNPTiIsInByb3BlcnR5SlNPTiIsInByb3BlcnR5Iiwic3VwZXJUeXBlcyIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlSlNPTiIsInN1cGVyVHlwZSIsImh5cG90aGVzZXMiLCJIeXBvdGhlc2lzIiwiaHlwb3RoZXNlc0pTT04iLCJoeXBvdGhlc2lzSlNPTiIsImh5cG90aGVzaXMiLCJwYXJhbWV0ZXJzIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJKU09OIiwicGFyYW1ldGVyIiwianVkZ2VtZW50cyIsIkp1ZGdlbWVudCIsImp1ZGdlbWVudHNKU09OIiwianVkZ2VtZW50SlNPTiIsImp1ZGdlbWVudCIsInN0YXRlbWVudHMiLCJzdGF0ZW1lbnRzSlNPTiIsImFzc2VydGlvbnMiLCJUeXBlQXNzZXJ0aW9uIiwiRGVmaW5lZEFzc2VydGlvbiIsIlByb3BlcnR5QXNzZXJ0aW9uIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJDb250YWluZWRBc3NlcnRpb24iLCJhc3NlcnRpb25zSlNPTiIsImFzc2VydGlvbkpTT04iLCJhc3NlcnRpb24iLCJyZWZlcmVuY2VzIiwicmVmZXJlbmNlc0pTT04iLCJjb25qZWN0dXJlcyIsIkNvbmplY3R1cmUiLCJjb25qZWN0dXJlc0pTT04iLCJjb25qZWN0dXJlSlNPTiIsImNvbmplY3R1cmUiLCJjb21iaW5hdG9ycyIsIkNvbWJpbmF0b3IiLCJjb21iaW5hdG9yc0pTT04iLCJjb21iaW5hdG9ySlNPTiIsImNvbWJpbmF0b3IiLCJhc3N1bXB0aW9ucyIsIkFzc3VtcHRpb24iLCJhc3N1bXB0aW9uc0pTT04iLCJhc3N1bXB0aW9uSlNPTiIsImFzc3VtcHRpb24iLCJ0eXBlUHJlZml4ZXMiLCJUeXBlUHJlZml4IiwidHlwZVByZWZpeGVzSlNPTiIsInR5cGVQcmVmaXhKU09OIiwidHlwZVByZWZpeCIsImNvbnN0cnVjdG9ycyIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsImNvbnN0cnVjdG9yIiwibWV0YXRoZW9yZW1zIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1KU09OIiwibWV0YXRoZW9yZW0iLCJzdXBwb3NpdGlvbnMiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbkpTT04iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25zSlNPTiIsIlN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkpTT04iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0pTT04iLCJyZWxlYXNlQ29udGV4dCIsImVtcGhlbWVyYWxDb250ZXh0IiwiRXBoZW1lcmFsQ29udGV4dCIsInByb3BlcnR5UmVsYXRpb25zIiwiUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb25zSlNPTiIsInByb3BlcnR5UmVsYXRpb25KU09OIiwicHJvcGVydHlSZWxhdGlvbiIsInRvSlNPTiIsIm5lZ2F0ZWRKU09OIiwibWV0YVR5cGVKU09OIiwicHJvdmlzaW9uYWxKU09OIiwibm9taW5hbFR5cGVOYW1lSlNPTiIsInR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTZlZ0JBO2VBQUFBOztRQThlQUM7ZUFBQUE7O1FBemFBQztlQUFBQTs7UUFpZEFDO2VBQUFBOztRQXRzQkFDO2VBQUFBOztRQWdqQkFDO2VBQUFBOztRQTNVQUM7ZUFBQUE7O1FBdWRBQztlQUFBQTs7UUF4MUJBQztlQUFBQTs7UUFvbkJBQztlQUFBQTs7UUFuUUFDO2VBQUFBOztRQTZkQUM7ZUFBQUE7O1FBN1pBQztlQUFBQTs7UUFxY0FDO2VBQUFBOztRQXo2QkFDO2VBQUFBOztRQW1wQkFDO2VBQUFBOztRQTlGQUM7ZUFBQUE7O1FBdFNBQztlQUFBQTs7UUEwa0JBQztlQUFBQTs7UUE3NEJBQztlQUFBQTs7UUE2cEJBQztlQUFBQTs7UUExYkFDO2VBQUFBOztRQXNrQkFDO2VBQUFBOztRQXRiQUM7ZUFBQUE7O1FBd2VBQztlQUFBQTs7UUE5dkJBQztlQUFBQTs7UUF3bkJBQztlQUFBQTs7UUFsVUFDO2VBQUFBOztRQWdmQUM7ZUFBQUE7O1FBN3FCQUM7ZUFBQUE7O1FBK2NBQztlQUFBQTs7UUFsYkFDO2VBQUFBOztRQTRpQkFDO2VBQUFBOztRQXAxQkFDO2VBQUFBOztRQU1BQztlQUFBQTs7UUFxRUFDO2VBQUFBOztRQTJwQkFDO2VBQUFBOztRQXpJQUM7ZUFBQUE7O1FBK2JBQztlQUFBQTs7UUE3MkJBQztlQUFBQTs7UUE2bUJBQztlQUFBQTs7UUE5SUFDO2VBQUFBOztRQTRhQUM7ZUFBQUE7O1FBOWlDQUM7ZUFBQUE7O1FBZ3JCQUM7ZUFBQUE7O1FBdm5C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