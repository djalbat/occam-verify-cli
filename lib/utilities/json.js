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
    let { substitutions = [] } = json; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEVwaGVtZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZXBoZW1lcmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbmFtZSB9ID0ganNvbjtcblxuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICBuYW1lID0gbmFtZUpTT047ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICAgIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cztcblxuICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAganNvbiA9IHR5cGU7ICAvLy9cblxuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIG5hbWUgPSBzdHJpbmc7ICAvLy9cblxuICAgIHR5cGUgPSBmaW5kVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGZyYW1lIH0gPSBqc29uO1xuXG4gIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGZyYW1lSlNPTiA9IGZyYW1lOyAgLy8vXG5cbiAgICBqc29uID0gZnJhbWVKU09OOyAgLy8vXG5cbiAgICBjb25zdCB7IEZyYW1lIH0gPSBlbGVtZW50cztcblxuICAgIGZyYW1lID0gRnJhbWUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IG5lZ2F0ZWQgfSA9IGpzb247XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YVR5cGUgfSA9IGpzb247XG5cbiAgaWYgKG1ldGFUeXBlICE9PSBudWxsKSB7XG4gICAganNvbiA9IG1ldGFUeXBlOyAgLy8vXG5cbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBuYW1lID0gc3RyaW5nOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IGZpbmRNZXRhVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50ID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIGpzb24gPSBzdGF0ZW1lbnRKU09OOyAvLy9cblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGRlZHVjdGlvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb247ICAvLy9cblxuICBqc29uID0gZGVkdWN0aW9uSlNPTjsgIC8vL1xuXG4gIGRlZHVjdGlvbiA9IERlZHVjdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzaWduYXR1cmUgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAganNvbiA9IHNpZ25hdHVyZUpTT047IC8vL1xuXG4gICAgc2lnbmF0dXJlID0gU2lnbmF0dXJlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSByZWZlcmVuY2VKU09OOyAvLy9cblxuICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGlkZW50aWZpZXIgfSA9IGpzb247XG5cbiAgY29uc3QgaWRlbnRpZmllckpTT04gPSBpZGVudGlmaWVyOyAgLy8vXG5cbiAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgcHJvdmlzaW9uYWwgfSA9IGpzb247XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGUgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlOyAgLy8vXG5cbiAganNvbiA9IG1ldGF2YXJpYWJsZUpTT047IC8vL1xuXG4gIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlQ2FsbCA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbDsgIC8vL1xuXG4gICAganNvbiA9IHByb2NlZHVyZUNhbGxKU09OOyAvLy9cblxuICAgIHByb2NlZHVyZUNhbGwgPSBQcm9jZWR1cmVDYWxsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsVHlwZU5hbWVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbm9taW5hbFR5cGVOYW1lIH0gPSBqc29uO1xuXG4gIHJldHVybiBub21pbmFsVHlwZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb2NlZHVyZVJlZmVyZW5jZSB9ID0ganNvbjtcblxuICBjb25zdCB7IFByb2NlZHVyZVJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZUpTT04gPSBwcm9jZWR1cmVSZWZlcmVuY2U7ICAvLy9cblxuICBqc29uID0gcHJvY2VkdXJlUmVmZXJlbmNlSlNPTjsgIC8vL1xuXG4gIHByb2NlZHVyZVJlZmVyZW5jZSA9IFByb2NlZHVyZVJlZmVyZW5jZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tSlNPTihqc29uLCB0eXBlcywgY29udGV4dCkge1xuICBjb25zdCB7IHR5cGVzOiB0eXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cztcblxuICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHR5cGVzLnB1c2godHlwZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRlcm1zSlNPTiA9IHRlcm1zOyAvLy9cblxuICB0ZXJtcyA9IHRlcm1zSlNPTi5tYXAoKHRlcm1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHRlcm1KU09OLCAgLy8vXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJ1bGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUnVsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzOyAvLy9cblxuICBydWxlcyA9IHJ1bGVzSlNPTi5tYXAoKHJ1bGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHJ1bGVKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGxhYmVsIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBsYWJlbEpTT04gPSBsYWJlbDsgIC8vL1xuXG4gIGpzb24gPSBsYWJlbEpTT047IC8vL1xuXG4gIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBmcmFtZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHMsXG4gICAgZnJhbWVzSlNPTiA9IGZyYW1lczsgLy8vXG5cbiAgZnJhbWVzID0gZnJhbWVzSlNPTi5tYXAoKGZyYW1lSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBmcmFtZUpTT04sICAvLy9cbiAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXhpb21zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXhpb20gfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbXNKU09OID0gYXhpb21zOyAvLy9cblxuICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUaGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuXG4gIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLm1hcCgodGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZXF1YWxpdGllcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEVxdWFsaXR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXF1YWxpdGllc0pTT04gPSBlcXVhbGl0aWVzOyAvLy9cblxuICBlcXVhbGl0aWVzID0gZXF1YWxpdGllc0pTT04ubWFwKChlcXVhbGl0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gZXF1YWxpdHlKU09OLCAgLy8vXG4gICAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXM7IC8vL1xuXG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTi5tYXAoKHByb3BlcnR5SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcm9wZXJ0eUpTT04sICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgc3VwZXJUeXBlczogc3VwZXJUeXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3Qgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLm1hcCgoc3VwZXJUeXBlSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgbmFtZSA9IHN0cmluZywgIC8vL1xuICAgICAgICAgICAgICAgIHR5cGUgPSBmaW5kVHlwZUJ5TmFtZShuYW1lLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgaHlwb3RoZXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEh5cG90aGVzaXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXM7ICAvLy9cblxuICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0pTT04ubWFwKChoeXBvdGhlc2lzSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBoeXBvdGhlc2lzSlNPTiwgLy8vXG4gICAgICAgICAgaHlwb3RoZXNpcyA9IEh5cG90aGVzaXMuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwYXJhbWV0ZXJzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzOyAvLy9cblxuICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0pTT04ubWFwKChwYXJhbWV0ZXJKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHBhcmFtZXRlckpTT04sICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGp1ZGdlbWVudHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBKdWRnZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBqdWRnZW1lbnRzSlNPTiA9IGp1ZGdlbWVudHM7IC8vL1xuXG4gIGp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzSlNPTi5tYXAoKGp1ZGdlbWVudEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0ganVkZ2VtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudCA9IEp1ZGdlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBqdWRnZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50cyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN0YXRlbWVudHNKU09OID0gc3RhdGVtZW50czsgLy8vXG5cbiAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNKU09OLm1hcCgoc3RhdGVtZW50SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBhc3NlcnRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZUFzc2VydGlvbiwgRGVmaW5lZEFzc2VydGlvbiwgUHJvcGVydHlBc3NlcnRpb24sIFN1YnByb29mQXNzZXJ0aW9uLCBTYXRpc2ZpZXNBc3NlcnRpb24sIENvbnRhaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9uczsgLy8vXG5cbiAgYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnNKU09OLm1hcCgoYXNzZXJ0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBhc3NlcnRpb25KU09OLCAgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uID0gVHlwZUFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBEZWZpbmVkQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFByb3BlcnR5QXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFN1YnByb29mQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFNhdGlzZmllc0Fzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBDb250YWluZWRBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzZXJ0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJlZmVyZW5jZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXM7IC8vL1xuXG4gIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzSlNPTi5tYXAoKHJlZmVyZW5jZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcmVmZXJlbmNlSlNPTiwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0pO1xuXG4gIHJldHVybiByZWZlcmVuY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbmplY3R1cmVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzOyAvLy9cblxuICBjb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzSlNPTi5tYXAoKGNvbmplY3R1cmVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbWJpbmF0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzOyAvLy9cblxuICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTi5tYXAoKGNvbWJpbmF0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGFzc3VtcHRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFzc3VtcHRpb25zSlNPTiA9IGFzc3VtcHRpb25zOyAvLy9cblxuICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zSlNPTi5tYXAoKGFzc3VtcHRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGFzc3VtcHRpb25KU09OLCAgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IEFzc3VtcHRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0eXBlUHJlZml4ZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZVByZWZpeGVzSlNPTiA9IHR5cGVQcmVmaXhlczsgLy8vXG5cbiAgdHlwZVByZWZpeGVzID0gdHlwZVByZWZpeGVzSlNPTi5tYXAoKHR5cGVQcmVmaXhKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHR5cGVQcmVmaXhKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeCA9IFR5cGVQcmVmaXguZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uc3RydWN0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzOyAvLy9cblxuICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLm1hcCgoY29uc3RydWN0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF0aGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtczsgLy8vXG5cbiAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTi5tYXAoKG1ldGF0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdXBwb3NpdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN1YnN0aXR1dGlvbnMgPSBbXSB9ID0ganNvbjsgIC8vL1xuXG4gIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLCAgLy8vXG4gICAgICAgIFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gU3Vic3RpdHV0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzOyAvLy9cblxuICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT04ubWFwKChtZXRhdmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gY29udGV4dDtcblxuICAoe2NvbnRleHR9ID0ganNvbik7XG5cbiAganNvbiA9IGNvbnRleHQ7IC8vL1xuXG4gIGNvbnRleHQgPSByZWxlYXNlQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgZW1waGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0eVJlbGF0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByb3BlcnR5UmVsYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uc0pTT04gPSBwcm9wZXJ0eVJlbGF0aW9uczsgLy8vXG5cbiAgcHJvcGVydHlSZWxhdGlvbnMgPSBwcm9wZXJ0eVJlbGF0aW9uc0pTT04ubWFwKChwcm9wZXJ0eVJlbGF0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcm9wZXJ0eVJlbGF0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBQcm9wZXJ0eVJlbGF0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVUb05hbWVKU09OKG5hbWUpIHtcbiAgY29uc3QgbmFtZUpTT04gPSBuYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVRvVGVybUpTT04odGVybSkge1xuICBjb25zdCB0ZXJtSlNPTiA9ICh0ZXJtICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICB0ZXJtLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gdGVybUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlVG9UeXBlSlNPTih0eXBlKSB7XG4gIGNvbnN0IHR5cGVKU09OID0gKHR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0eXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lVG9GcmFtZUpTT04oZnJhbWUpIHtcbiAgY29uc3QgZnJhbWVKU09OID0gKGZyYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgZnJhbWUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gZnJhbWVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxUb0xhYmVsSlNPTihsYWJlbCkge1xuICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICByZXR1cm4gbGFiZWxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZFRvTmVnYXRlZEpTT04obmVnYXRlZCkge1xuICBjb25zdCBuZWdhdGVkSlNPTiA9IG5lZ2F0ZWQ7ICAvLy9cblxuICByZXR1cm4gbmVnYXRlZEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKG1ldGFUeXBlKSB7XG4gIGNvbnN0IG1ldGFUeXBlSlNPTiA9IChtZXRhVHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFUeXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIG1ldGFUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTihyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZS50b0pTT04oKTtcblxuICByZXR1cm4gcmVmZXJlbmNlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTihzdGF0ZW1lbnQpIHtcbiAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IChzdGF0ZW1lbnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50LnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKGRlZHVjdGlvbikge1xuICBjb25zdCBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHNpZ25hdHVyZSkge1xuICBjb25zdCBzaWduYXR1cmVKU09OID0gKHNpZ25hdHVyZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyVG9JZGVudGlmaWVySlNPTihpZGVudGlmaWVyKSB7XG4gIGNvbnN0IGlkZW50aWZpZXJKU09OID0gaWRlbnRpZmllcjsgIC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVySlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKGNvbmNsdXNpb24pIHtcbiAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04ocHJvdmlzaW9uYWwpIHtcbiAgY29uc3QgcHJvdmlzaW9uYWxKU09OID0gcHJvdmlzaW9uYWw7ICAvLy9cblxuICByZXR1cm4gcHJvdmlzaW9uYWxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04ocHJvY2VkdXJlQ2FsbCkge1xuICBjb25zdCBwcm9jZWR1cmVDYWxsSlNPTiA9IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZWR1cmVDYWxsLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsVHlwZU5hbWVUb05vbWluYWxUeXBlTmFtZUpTT04obm9taW5hbFR5cGVOYW1lKSB7XG4gIGNvbnN0IG5vbWluYWxUeXBlTmFtZUpTT04gPSBub21pbmFsVHlwZU5hbWU7ICAvLy9cblxuICByZXR1cm4gbm9taW5hbFR5cGVOYW1lSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTihwcm9jZWR1cmVSZWZlcmVuY2UpIHtcbiAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlSlNPTiA9IHByb2NlZHVyZVJlZmVyZW5jZS50b0pTT04oKTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zVG9UZXJtc0pTT04odGVybXMpIHtcbiAgY29uc3QgdGVybXNKU09OID0gdGVybXMubWFwKCh0ZXJtKSA9PiB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHRlcm1KU09OO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNUb1R5cGVzSlNPTih0eXBlcykge1xuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gdHlwZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc1RvUnVsZXNKU09OKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVzSlNPTiA9IHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgIHJldHVybiBydWxlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpIHtcbiAgY29uc3QgZnJhbWVzSlNPTiA9IGZyYW1lcy5tYXAoKGZyYW1lKSA9PiB7XG4gICAgY29uc3QgZnJhbWVKU09OID0gZnJhbWUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gZnJhbWVKU09OO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICByZXR1cm4gYXhpb21KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzVG9QcmVtaXNlc0pTT04ocHJlbWlzZXMpIHtcbiAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNUb1RoZW9yZW1zSlNPTih0aGVvcmVtcykge1xuICBjb25zdCB0aGVvcmVtc0pTT04gPSB0aGVvcmVtcy5tYXAoKHRoZW9yZW0pID0+IHtcbiAgICBjb25zdCB0aGVvcmVtSlNPTiA9IHRoZW9yZW0udG9KU09OKCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbUpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odmFyaWFibGVzKSB7XG4gIGNvbnN0IHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTihoeXBvdGhlc2VzKSB7XG4gIGNvbnN0IGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlcy5tYXAoKGh5cG90aGVzaXMpID0+IHtcbiAgICBjb25zdCBoeXBvdGhlc2lzSlNPTiA9IGh5cG90aGVzaXMudG9KU09OKCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpc0pTT047XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHN1cGVyVHlwZXMpIHtcbiAgY29uc3Qgc3VwZXJUeXBlc0pTT04gPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZS50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBlclR5cGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTihwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlckpTT04gPSBwYXJhbWV0ZXIudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVySlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04ocHJvcGVydGllcykge1xuICBjb25zdCBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXMubWFwKChwcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5SlNPTiA9IHByb3BlcnR5LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04oanVkZ2VtZW50cykge1xuICBjb25zdCBqdWRnZW1lbnRzSlNPTiA9IGp1ZGdlbWVudHMubWFwKChqdWRnZW1lbnQpID0+IHtcbiAgICBjb25zdCBqdWRnZW1lbnRKU09OID0ganVkZ2VtZW50LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBqdWRnZW1lbnRzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OKGVxdWFsaXRpZXMpIHtcbiAgY29uc3QgZXF1YWxpdGllc0pTT04gPSBlcXVhbGl0aWVzLm1hcCgoZXF1YWxpdHkpID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eUpTT04gPSBlcXVhbGl0eS50b0pTT04oKTtcblxuICAgIHJldHVybiBlcXVhbGl0eUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBlcXVhbGl0aWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OKHN0YXRlbWVudHMpIHtcbiAgY29uc3Qgc3RhdGVtZW50c0pTT04gPSBzdGF0ZW1lbnRzLm1hcCgoc3RhdGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudC50b0pTT04oKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRKU09OO1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50c0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTihhc3NlcnRpb25zKSB7XG4gIGNvbnN0IGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9ucy5tYXAoKGFzc2VydGlvbikgPT4ge1xuICAgIGNvbnN0IGFzc2VydGlvbkpTT04gPSBhc3NlcnRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc2VydGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlc1RvUmVmZXJlbmNlc0pTT04ocmVmZXJlbmNlcykge1xuICBjb25zdCByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXMubWFwKChyZWZlcmVuY2UpID0+IHtcbiAgICBjb25zdCByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiByZWZlcmVuY2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04oY29uamVjdHVyZXMpIHtcbiAgY29uc3QgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVKU09OO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTihjb21iaW5hdG9ycykge1xuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvckpTT047XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc1RvQXNzdW1wdGlvbnNKU09OKGFzc3VtcHRpb25zKSB7XG4gIGNvbnN0IGFzc3VtcHRpb25zSlNPTiA9IGFzc3VtcHRpb25zLm1hcCgoYXNzdW1wdGlvbikgPT4ge1xuICAgIGNvbnN0IGFzc3VtcHRpb25KU09OID0gYXNzdW1wdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTihzdXBwb3NpdGlvbnMpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25KU09OID0gc3VwcG9zaXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTihjb25zdHJ1Y3RvcnMpIHtcbiAgY29uc3QgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9ycy5tYXAoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgY29uc3QgY29uc3RydWN0b3JKU09OID0gY29uc3RydWN0b3IudG9KU09OKCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JKU09OO1xuICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTihtZXRhdGhlb3JlbXMpIHtcbiAgY29uc3QgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtcy5tYXAoKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1KU09OID0gbWV0YXRoZW9yZW0udG9KU09OKCk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1KU09OO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTih0eXBlUHJlZml4ZXMpIHtcbiAgY29uc3QgdHlwZVByZWZpeGVzSlNPTiA9IHR5cGVQcmVmaXhlcy5tYXAoKHR5cGVQcmVmaXgpID0+IHtcbiAgICBjb25zdCB0eXBlUHJlZml4SlNPTiA9IHR5cGVQcmVmaXgudG9KU09OKCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeEpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlUHJlZml4ZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04oc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnMubWFwKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25KU09OID0gc3Vic3RpdHV0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKG1ldGF2YXJpYWJsZXMpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzLm1hcCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04oKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uc1RvUHJvcGVydHlSZWxhdGlvbnNKU09OKHByb3BlcnR5UmVsYXRpb25zKSB7XG4gIGNvbnN0IHByb3BlcnR5UmVsYXRpb25zSlNPTiA9IHByb3BlcnR5UmVsYXRpb25zLm1hcCgocHJvcGVydHlSZWxhdGlvbikgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25KU09OID0gcHJvcGVydHlSZWxhdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25zSlNPTjtcbn1cblxuZnVuY3Rpb24gZmluZFR5cGVCeU5hbWUobmFtZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gZmluZE1ldGFUeXBlQnlOYW1lKG5hbWUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG4iXSwibmFtZXMiOlsiYXNzZXJ0aW9uc0Zyb21KU09OIiwiYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04iLCJhc3N1bXB0aW9uc0Zyb21KU09OIiwiYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTiIsImF4aW9tc0Zyb21KU09OIiwiYXhpb21zVG9BeGlvbXNKU09OIiwiY29tYmluYXRvcnNGcm9tSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImNvbmplY3R1cmVzRnJvbUpTT04iLCJjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OIiwiY29uc3RydWN0b3JzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiIsImVxdWFsaXRpZXNGcm9tSlNPTiIsImVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OIiwiZnJhbWVGcm9tSlNPTiIsImZyYW1lVG9GcmFtZUpTT04iLCJmcmFtZXNGcm9tSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsImh5cG90aGVzZXNGcm9tSlNPTiIsImh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OIiwiaWRlbnRpZmllckZyb21KU09OIiwiaWRlbnRpZmllclRvSWRlbnRpZmllckpTT04iLCJqdWRnZW1lbnRzRnJvbUpTT04iLCJqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTiIsImxhYmVsRnJvbUpTT04iLCJsYWJlbFRvTGFiZWxKU09OIiwibGFiZWxzRnJvbUpTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsIm1ldGFUeXBlRnJvbUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwibmFtZUZyb21KU09OIiwibmFtZVRvTmFtZUpTT04iLCJuZWdhdGVkRnJvbUpTT04iLCJuZWdhdGVkVG9OZWdhdGVkSlNPTiIsIm5vbWluYWxUeXBlTmFtZUZyb21KU09OIiwibm9taW5hbFR5cGVOYW1lVG9Ob21pbmFsVHlwZU5hbWVKU09OIiwicGFyYW1ldGVyc0Zyb21KU09OIiwicGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04iLCJwcmVtaXNlc0Zyb21KU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsInByb2NlZHVyZUNhbGxGcm9tSlNPTiIsInByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04iLCJwcm9wZXJ0aWVzRnJvbUpTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInByb3BlcnR5UmVsYXRpb25zRnJvbUpTT04iLCJwcm9wZXJ0eVJlbGF0aW9uc1RvUHJvcGVydHlSZWxhdGlvbnNKU09OIiwicHJvdmlzaW9uYWxGcm9tSlNPTiIsInByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04iLCJyZWZlcmVuY2VGcm9tSlNPTiIsInJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTiIsInJlZmVyZW5jZXNGcm9tSlNPTiIsInJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OIiwicnVsZXNGcm9tSlNPTiIsInJ1bGVzVG9SdWxlc0pTT04iLCJzaWduYXR1cmVGcm9tSlNPTiIsInNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50c0Zyb21KU09OIiwic3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiIsInN1cGVyVHlwZXNGcm9tSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJ0ZXJtRnJvbUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsInRlcm1zRnJvbUpTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwidGhlb3JlbXNGcm9tSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ0eXBlRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNGcm9tSlNPTiIsInR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTiIsInR5cGVUb1R5cGVKU09OIiwidHlwZXNGcm9tSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImxlbW1hcyIsIm1ldGFMZW1tYXMiLCJqc29uIiwiY29udGV4dCIsIm5hbWUiLCJuYW1lSlNPTiIsInRlcm0iLCJ0ZXJtSlNPTiIsIlRlcm0iLCJlbGVtZW50cyIsImZyb21KU09OIiwidHlwZSIsInN0cmluZyIsImZpbmRUeXBlQnlOYW1lIiwiZnJhbWUiLCJmcmFtZUpTT04iLCJGcmFtZSIsIm5lZ2F0ZWQiLCJtZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TmFtZSIsInN0YXRlbWVudCIsIlN0YXRlbWVudCIsInN0YXRlbWVudEpTT04iLCJkZWR1Y3Rpb24iLCJEZWR1Y3Rpb24iLCJkZWR1Y3Rpb25KU09OIiwic2lnbmF0dXJlIiwiU2lnbmF0dXJlIiwic2lnbmF0dXJlSlNPTiIsInJlZmVyZW5jZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZUpTT04iLCJpZGVudGlmaWVyIiwiaWRlbnRpZmllckpTT04iLCJjb25jbHVzaW9uIiwiQ29uY2x1c2lvbiIsImNvbmNsdXNpb25KU09OIiwicHJvdmlzaW9uYWwiLCJtZXRhdmFyaWFibGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVKU09OIiwicHJvY2VkdXJlQ2FsbCIsIlByb2NlZHVyZUNhbGwiLCJwcm9jZWR1cmVDYWxsSlNPTiIsIm5vbWluYWxUeXBlTmFtZSIsInByb2NlZHVyZVJlZmVyZW5jZSIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZVJlZmVyZW5jZUpTT04iLCJ0eXBlcyIsInR5cGVzSlNPTiIsIlR5cGUiLCJmb3JFYWNoIiwidHlwZUpTT04iLCJwdXNoIiwidGVybXMiLCJ0ZXJtc0pTT04iLCJtYXAiLCJydWxlcyIsIlJ1bGUiLCJydWxlc0pTT04iLCJydWxlSlNPTiIsInJ1bGUiLCJsYWJlbCIsIkxhYmVsIiwibGFiZWxKU09OIiwiZnJhbWVzIiwiZnJhbWVzSlNPTiIsImxhYmVscyIsImxhYmVsc0pTT04iLCJheGlvbXMiLCJBeGlvbSIsImF4aW9tc0pTT04iLCJheGlvbUpTT04iLCJheGlvbSIsInByZW1pc2VzIiwiUHJlbWlzZSIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwicHJlbWlzZSIsInRoZW9yZW1zIiwiVGhlb3JlbSIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1KU09OIiwidGhlb3JlbSIsInZhcmlhYmxlcyIsIlZhcmlhYmxlIiwidmFyaWFibGVzSlNPTiIsInZhcmlhYmxlSlNPTiIsInZhcmlhYmxlIiwiZXF1YWxpdGllcyIsIkVxdWFsaXR5IiwiZXF1YWxpdGllc0pTT04iLCJlcXVhbGl0eUpTT04iLCJlcXVhbGl0eSIsInByb3BlcnRpZXMiLCJQcm9wZXJ0eSIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydHlKU09OIiwicHJvcGVydHkiLCJzdXBlclR5cGVzIiwic3VwZXJUeXBlc0pTT04iLCJzdXBlclR5cGVKU09OIiwic3VwZXJUeXBlIiwiaHlwb3RoZXNlcyIsIkh5cG90aGVzaXMiLCJoeXBvdGhlc2VzSlNPTiIsImh5cG90aGVzaXNKU09OIiwiaHlwb3RoZXNpcyIsInBhcmFtZXRlcnMiLCJQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJzSlNPTiIsInBhcmFtZXRlckpTT04iLCJwYXJhbWV0ZXIiLCJqdWRnZW1lbnRzIiwiSnVkZ2VtZW50IiwianVkZ2VtZW50c0pTT04iLCJqdWRnZW1lbnRKU09OIiwianVkZ2VtZW50Iiwic3RhdGVtZW50cyIsInN0YXRlbWVudHNKU09OIiwiYXNzZXJ0aW9ucyIsIlR5cGVBc3NlcnRpb24iLCJEZWZpbmVkQXNzZXJ0aW9uIiwiUHJvcGVydHlBc3NlcnRpb24iLCJTdWJwcm9vZkFzc2VydGlvbiIsIlNhdGlzZmllc0Fzc2VydGlvbiIsIkNvbnRhaW5lZEFzc2VydGlvbiIsImFzc2VydGlvbnNKU09OIiwiYXNzZXJ0aW9uSlNPTiIsImFzc2VydGlvbiIsInJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzSlNPTiIsImNvbmplY3R1cmVzIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29uamVjdHVyZSIsImNvbWJpbmF0b3JzIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JKU09OIiwiY29tYmluYXRvciIsImFzc3VtcHRpb25zIiwiQXNzdW1wdGlvbiIsImFzc3VtcHRpb25zSlNPTiIsImFzc3VtcHRpb25KU09OIiwiYXNzdW1wdGlvbiIsInR5cGVQcmVmaXhlcyIsIlR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4ZXNKU09OIiwidHlwZVByZWZpeEpTT04iLCJ0eXBlUHJlZml4IiwiY29uc3RydWN0b3JzIiwiQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JKU09OIiwiY29uc3RydWN0b3IiLCJtZXRhdGhlb3JlbXMiLCJNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdGhlb3JlbUpTT04iLCJtZXRhdGhlb3JlbSIsInN1cHBvc2l0aW9ucyIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uSlNPTiIsInN1cHBvc2l0aW9uIiwic3Vic3RpdHV0aW9ucyIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbnNKU09OIiwiU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uSlNPTiIsInN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzSlNPTiIsInJlbGVhc2VDb250ZXh0IiwiZW1waGVtZXJhbENvbnRleHQiLCJFcGhlbWVyYWxDb250ZXh0IiwicHJvcGVydHlSZWxhdGlvbnMiLCJQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbnNKU09OIiwicHJvcGVydHlSZWxhdGlvbkpTT04iLCJwcm9wZXJ0eVJlbGF0aW9uIiwidG9KU09OIiwibmVnYXRlZEpTT04iLCJtZXRhVHlwZUpTT04iLCJwcm92aXNpb25hbEpTT04iLCJub21pbmFsVHlwZU5hbWVKU09OIiwidHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNmVnQkE7ZUFBQUE7O1FBOGVBQztlQUFBQTs7UUF6YUFDO2VBQUFBOztRQWlkQUM7ZUFBQUE7O1FBdHNCQUM7ZUFBQUE7O1FBZ2pCQUM7ZUFBQUE7O1FBM1VBQztlQUFBQTs7UUF1ZEFDO2VBQUFBOztRQXgxQkFDO2VBQUFBOztRQW9uQkFDO2VBQUFBOztRQW5RQUM7ZUFBQUE7O1FBNmRBQztlQUFBQTs7UUE3WkFDO2VBQUFBOztRQXFjQUM7ZUFBQUE7O1FBejZCQUM7ZUFBQUE7O1FBbXBCQUM7ZUFBQUE7O1FBOUZBQztlQUFBQTs7UUF0U0FDO2VBQUFBOztRQTBrQkFDO2VBQUFBOztRQTc0QkFDO2VBQUFBOztRQTZwQkFDO2VBQUFBOztRQTFiQUM7ZUFBQUE7O1FBc2tCQUM7ZUFBQUE7O1FBdGJBQztlQUFBQTs7UUF3ZUFDO2VBQUFBOztRQTl2QkFDO2VBQUFBOztRQXduQkFDO2VBQUFBOztRQWxVQUM7ZUFBQUE7O1FBZ2ZBQztlQUFBQTs7UUE3cUJBQztlQUFBQTs7UUErY0FDO2VBQUFBOztRQWxiQUM7ZUFBQUE7O1FBNGlCQUM7ZUFBQUE7O1FBcDFCQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOztRQXFFQUM7ZUFBQUE7O1FBMnBCQUM7ZUFBQUE7O1FBeklBQztlQUFBQTs7UUErYkFDO2VBQUFBOztRQTcyQkFDO2VBQUFBOztRQTZtQkFDO2VBQUFBOztRQTlJQUM7ZUFBQUE7O1FBNGFBQztlQUFBQTs7UUE5aUNBQztlQUFBQTs7UUFnckJBQztlQUFBQTs7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