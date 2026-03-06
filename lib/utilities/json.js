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
        const { name, prefixName } = json;
        type = findTypeByNameAndPrefixName(name, prefixName, context);
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
        const { name } = json;
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
        const json = superTypeJSON, { name, prefixName } = json, type = findTypeByNameAndPrefixName(name, prefixName, context), superType = type; ///
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
function findMetaTypeByName(name, context) {
    const metaTypeName = name, metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
    return metaType;
}
function findTypeByNameAndPrefixName(name, prefixName, context) {
    const nominalTypeName = prefixName !== null ? `${prefixName}${name}` : name, type = context.findTypeByNominalTypeName(nominalTypeName);
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEVwaGVtZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZXBoZW1lcmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbmFtZSB9ID0ganNvbjtcblxuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICBuYW1lID0gbmFtZUpTT047ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICAgIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cztcblxuICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAganNvbiA9IHR5cGU7ICAvLy9cblxuICAgIGNvbnN0IHsgbmFtZSwgcHJlZml4TmFtZSB9ID0ganNvbjtcblxuICAgIHR5cGUgPSBmaW5kVHlwZUJ5TmFtZUFuZFByZWZpeE5hbWUobmFtZSwgcHJlZml4TmFtZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBmcmFtZSB9ID0ganNvbjtcblxuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBmcmFtZUpTT04gPSBmcmFtZTsgIC8vL1xuXG4gICAganNvbiA9IGZyYW1lSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHM7XG5cbiAgICBmcmFtZSA9IEZyYW1lLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBuZWdhdGVkIH0gPSBqc29uO1xuXG4gIHJldHVybiBuZWdhdGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSBtZXRhVHlwZTsgIC8vL1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgbWV0YVR5cGUgPSBmaW5kTWV0YVR5cGVCeU5hbWUobmFtZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN0YXRlbWVudCA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICBqc29uID0gc3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBkZWR1Y3Rpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uOyAgLy8vXG5cbiAganNvbiA9IGRlZHVjdGlvbkpTT047ICAvLy9cblxuICBkZWR1Y3Rpb24gPSBEZWR1Y3Rpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc2lnbmF0dXJlID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc2lnbmF0dXJlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTaWduYXR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHNpZ25hdHVyZUpTT04gPSBzaWduYXR1cmU7ICAvLy9cblxuICAgIGpzb24gPSBzaWduYXR1cmVKU09OOyAvLy9cblxuICAgIHNpZ25hdHVyZSA9IFNpZ25hdHVyZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJlZmVyZW5jZSB9ID0ganNvbjtcblxuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2U7ICAvLy9cblxuICBqc29uID0gcmVmZXJlbmNlSlNPTjsgLy8vXG5cbiAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBpZGVudGlmaWVyIH0gPSBqc29uO1xuXG4gIGNvbnN0IGlkZW50aWZpZXJKU09OID0gaWRlbnRpZmllcjsgIC8vL1xuXG4gIGlkZW50aWZpZXIgPSBpZGVudGlmaWVySlNPTjsgIC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3Zpc2lvbmFsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IHByb3Zpc2lvbmFsIH0gPSBqc29uO1xuXG4gIHJldHVybiBwcm92aXNpb25hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb2NlZHVyZUNhbGwgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGw7ICAvLy9cblxuICAgIGpzb24gPSBwcm9jZWR1cmVDYWxsSlNPTjsgLy8vXG5cbiAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbFR5cGVOYW1lRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IG5vbWluYWxUeXBlTmFtZSB9ID0ganNvbjtcblxuICByZXR1cm4gbm9taW5hbFR5cGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2VKU09OID0gcHJvY2VkdXJlUmVmZXJlbmNlOyAgLy8vXG5cbiAganNvbiA9IHByb2NlZHVyZVJlZmVyZW5jZUpTT047ICAvLy9cblxuICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBQcm9jZWR1cmVSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzRnJvbUpTT04oanNvbiwgdHlwZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyB0eXBlczogdHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZSB9ID0gZWxlbWVudHM7XG5cbiAgdHlwZXNKU09OLmZvckVhY2goKHR5cGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0ZXJtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0ZXJtc0pTT04gPSB0ZXJtczsgLy8vXG5cbiAgdGVybXMgPSB0ZXJtc0pTT04ubWFwKCh0ZXJtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBydWxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFJ1bGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBydWxlc0pTT04gPSBydWxlczsgLy8vXG5cbiAgcnVsZXMgPSBydWxlc0pTT04ubWFwKChydWxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBydWxlSlNPTiwgIC8vL1xuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbCB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbGFiZWxKU09OID0gbGFiZWw7ICAvLy9cblxuICBqc29uID0gbGFiZWxKU09OOyAvLy9cblxuICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZnJhbWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzLFxuICAgIGZyYW1lc0pTT04gPSBmcmFtZXM7IC8vL1xuXG4gIGZyYW1lcyA9IGZyYW1lc0pTT04ubWFwKChmcmFtZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gZnJhbWVKU09OLCAgLy8vXG4gICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGF4aW9tcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEF4aW9tIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXhpb21zSlNPTiA9IGF4aW9tczsgLy8vXG5cbiAgYXhpb21zID0gYXhpb21zSlNPTi5tYXAoKGF4aW9tSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBheGlvbUpTT04sICAvLy9cbiAgICAgICAgICBheGlvbSA9IEF4aW9tLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByZW1pc2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzOyAgLy8vXG5cbiAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcmVtaXNlSlNPTiwgLy8vXG4gICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVGhlb3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zOyAvLy9cblxuICB0aGVvcmVtcyA9IHRoZW9yZW1zSlNPTi5tYXAoKHRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXM7IC8vL1xuXG4gIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0pTT04ubWFwKCh2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGVxdWFsaXRpZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBFcXVhbGl0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGVxdWFsaXRpZXNKU09OID0gZXF1YWxpdGllczsgLy8vXG5cbiAgZXF1YWxpdGllcyA9IGVxdWFsaXRpZXNKU09OLm1hcCgoZXF1YWxpdHlKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGVxdWFsaXR5SlNPTiwgIC8vL1xuICAgICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH0pO1xuXG4gIHJldHVybiBlcXVhbGl0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvcGVydGllcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByb3BlcnR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzOyAvLy9cblxuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04ubWFwKChwcm9wZXJ0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJvcGVydHlKU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IHN1cGVyVHlwZXM6IHN1cGVyVHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTi5tYXAoKHN1cGVyVHlwZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIHsgbmFtZSwgcHJlZml4TmFtZSB9ID0ganNvbixcbiAgICAgICAgICAgICAgICB0eXBlID0gZmluZFR5cGVCeU5hbWVBbmRQcmVmaXhOYW1lKG5hbWUsIHByZWZpeE5hbWUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBoeXBvdGhlc2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgSHlwb3RoZXNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlczsgIC8vL1xuXG4gIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzSlNPTi5tYXAoKGh5cG90aGVzaXNKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGh5cG90aGVzaXNKU09OLCAvLy9cbiAgICAgICAgICBoeXBvdGhlc2lzID0gSHlwb3RoZXNpcy5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9KTtcblxuICByZXR1cm4gaHlwb3RoZXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHBhcmFtZXRlcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnM7IC8vL1xuXG4gIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzSlNPTi5tYXAoKHBhcmFtZXRlckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcGFyYW1ldGVySlNPTiwgIC8vL1xuICAgICAgICAgIHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsganVkZ2VtZW50cyB9ID0ganNvbjtcblxuICBjb25zdCB7IEp1ZGdlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50czsgLy8vXG5cbiAganVkZ2VtZW50cyA9IGp1ZGdlbWVudHNKU09OLm1hcCgoanVkZ2VtZW50SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBqdWRnZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganVkZ2VtZW50ID0gSnVkZ2VtZW50LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGp1ZGdlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnRzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3RhdGVtZW50c0pTT04gPSBzdGF0ZW1lbnRzOyAvLy9cblxuICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0pTT04ubWFwKChzdGF0ZW1lbnRKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGFzc2VydGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlQXNzZXJ0aW9uLCBEZWZpbmVkQXNzZXJ0aW9uLCBQcm9wZXJ0eUFzc2VydGlvbiwgU3VicHJvb2ZBc3NlcnRpb24sIFNhdGlzZmllc0Fzc2VydGlvbiwgQ29udGFpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zOyAvLy9cblxuICBhc3NlcnRpb25zID0gYXNzZXJ0aW9uc0pTT04ubWFwKChhc3NlcnRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGFzc2VydGlvbkpTT04sICAvLy9cbiAgICAgICAgICBhc3NlcnRpb24gPSBUeXBlQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIERlZmluZWRBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgUHJvcGVydHlBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgU3VicHJvb2ZBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgU2F0aXNmaWVzQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIENvbnRhaW5lZEFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH0pO1xuXG4gIHJldHVybiBhc3NlcnRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcmVmZXJlbmNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJlZmVyZW5jZXNKU09OID0gcmVmZXJlbmNlczsgLy8vXG5cbiAgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZXNKU09OLm1hcCgocmVmZXJlbmNlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSByZWZlcmVuY2VKU09OLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uamVjdHVyZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXM7IC8vL1xuXG4gIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLm1hcCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uamVjdHVyZUpTT04sICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29tYmluYXRvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnM7IC8vL1xuXG4gIGNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNKU09OLm1hcCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29tYmluYXRvckpTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXNzdW1wdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBBc3N1bXB0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnM7IC8vL1xuXG4gIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNKU09OLm1hcCgoYXNzdW1wdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXNzdW1wdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uID0gQXNzdW1wdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4ZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHR5cGVQcmVmaXhlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGVQcmVmaXggfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzOyAvLy9cblxuICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLm1hcCgodHlwZVByZWZpeEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZVByZWZpeEpTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ID0gVHlwZVByZWZpeC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25zdHJ1Y3RvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnM7IC8vL1xuXG4gIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04ubWFwKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zOyAvLy9cblxuICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLm1hcCgobWV0YXRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN1cHBvc2l0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3Vic3RpdHV0aW9ucyA9IFtdIH0gPSBqc29uOyAgLy8vXG5cbiAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnMsICAvLy9cbiAgICAgICAgU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uOyAvLy9cblxuICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04ubWFwKChzdWJzdGl0dXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBTdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXM7IC8vL1xuXG4gIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTi5tYXAoKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSBjb250ZXh0O1xuXG4gICh7Y29udGV4dH0gPSBqc29uKTtcblxuICBqc29uID0gY29udGV4dDsgLy8vXG5cbiAgY29udGV4dCA9IHJlbGVhc2VDb250ZXh0OyAvLy9cblxuICBjb25zdCBlbXBoZW1lcmFsQ29udGV4dCA9IEVwaGVtZXJhbENvbnRleHQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGVtcGhlbWVyYWxDb250ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb3BlcnR5UmVsYXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHlSZWxhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zSlNPTiA9IHByb3BlcnR5UmVsYXRpb25zOyAvLy9cblxuICBwcm9wZXJ0eVJlbGF0aW9ucyA9IHByb3BlcnR5UmVsYXRpb25zSlNPTi5tYXAoKHByb3BlcnR5UmVsYXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByb3BlcnR5UmVsYXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IFByb3BlcnR5UmVsYXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZVRvTmFtZUpTT04obmFtZSkge1xuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICByZXR1cm4gbmFtZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtVG9UZXJtSlNPTih0ZXJtKSB7XG4gIGNvbnN0IHRlcm1KU09OID0gKHRlcm0gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHRlcm0udG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0ZXJtSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVUb1R5cGVKU09OKHR5cGUpIHtcbiAgY29uc3QgdHlwZUpTT04gPSAodHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgdHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVUb0ZyYW1lSlNPTihmcmFtZSkge1xuICBjb25zdCBmcmFtZUpTT04gPSAoZnJhbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICBmcmFtZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBmcmFtZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbFRvTGFiZWxKU09OKGxhYmVsKSB7XG4gIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gIHJldHVybiBsYWJlbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVG9OZWdhdGVkSlNPTihuZWdhdGVkKSB7XG4gIGNvbnN0IG5lZ2F0ZWRKU09OID0gbmVnYXRlZDsgIC8vL1xuXG4gIHJldHVybiBuZWdhdGVkSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04obWV0YVR5cGUpIHtcbiAgY29uc3QgbWV0YVR5cGVKU09OID0gKG1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gbWV0YVR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlVG9SZWZlcmVuY2VKU09OKHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gIHJldHVybiByZWZlcmVuY2VKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHN0YXRlbWVudCkge1xuICBjb25zdCBzdGF0ZW1lbnRKU09OID0gKHN0YXRlbWVudCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnQudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHN0YXRlbWVudEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04oZGVkdWN0aW9uKSB7XG4gIGNvbnN0IGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04oc2lnbmF0dXJlKSB7XG4gIGNvbnN0IHNpZ25hdHVyZUpTT04gPSAoc2lnbmF0dXJlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gc2lnbmF0dXJlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OKGlkZW50aWZpZXIpIHtcbiAgY29uc3QgaWRlbnRpZmllckpTT04gPSBpZGVudGlmaWVyOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXJKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04oY29uY2x1c2lvbikge1xuICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTihwcm92aXNpb25hbCkge1xuICBjb25zdCBwcm92aXNpb25hbEpTT04gPSBwcm92aXNpb25hbDsgIC8vL1xuXG4gIHJldHVybiBwcm92aXNpb25hbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04obWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTihwcm9jZWR1cmVDYWxsKSB7XG4gIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gKHByb2NlZHVyZUNhbGwgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZHVyZUNhbGwudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbWluYWxUeXBlTmFtZVRvTm9taW5hbFR5cGVOYW1lSlNPTihub21pbmFsVHlwZU5hbWUpIHtcbiAgY29uc3Qgbm9taW5hbFR5cGVOYW1lSlNPTiA9IG5vbWluYWxUeXBlTmFtZTsgIC8vL1xuXG4gIHJldHVybiBub21pbmFsVHlwZU5hbWVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OKHByb2NlZHVyZVJlZmVyZW5jZSkge1xuICBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2VKU09OID0gcHJvY2VkdXJlUmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2VKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcykge1xuICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtcy5tYXAoKHRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgICByZXR1cm4gdGVybUpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc1RvVHlwZXNKU09OKHR5cGVzKSB7XG4gIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04oKTtcblxuICAgIHJldHVybiB0eXBlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzVG9SdWxlc0pTT04ocnVsZXMpIHtcbiAgY29uc3QgcnVsZXNKU09OID0gcnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHJ1bGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9MYWJlbHNKU09OKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgIHJldHVybiBsYWJlbEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcykge1xuICBjb25zdCBmcmFtZXNKU09OID0gZnJhbWVzLm1hcCgoZnJhbWUpID0+IHtcbiAgICBjb25zdCBmcmFtZUpTT04gPSBmcmFtZS50b0pTT04oKTtcblxuICAgIHJldHVybiBmcmFtZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBmcmFtZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zVG9BeGlvbXNKU09OKGF4aW9tcykge1xuICBjb25zdCBheGlvbXNKU09OID0gYXhpb21zLm1hcCgoYXhpb20pID0+IHtcbiAgICBjb25zdCBheGlvbUpTT04gPSBheGlvbS50b0pTT04oKTtcblxuICAgIHJldHVybiBheGlvbUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHJldHVybiB0aGVvcmVtSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKGh5cG90aGVzZXMpIHtcbiAgY29uc3QgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzLm1hcCgoaHlwb3RoZXNpcykgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXNKU09OID0gaHlwb3RoZXNpcy50b0pTT04oKTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04oc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cGVyVHlwZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVySlNPTiA9IHBhcmFtZXRlci50b0pTT04oKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJKU09OO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTihwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlKU09OID0gcHJvcGVydHkudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlKU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTihqdWRnZW1lbnRzKSB7XG4gIGNvbnN0IGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50cy5tYXAoKGp1ZGdlbWVudCkgPT4ge1xuICAgIGNvbnN0IGp1ZGdlbWVudEpTT04gPSBqdWRnZW1lbnQudG9KU09OKCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGp1ZGdlbWVudHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04oZXF1YWxpdGllcykge1xuICBjb25zdCBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXMubWFwKChlcXVhbGl0eSkgPT4ge1xuICAgIGNvbnN0IGVxdWFsaXR5SlNPTiA9IGVxdWFsaXR5LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04oc3RhdGVtZW50cykge1xuICBjb25zdCBzdGF0ZW1lbnRzSlNPTiA9IHN0YXRlbWVudHMubWFwKChzdGF0ZW1lbnQpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OKGFzc2VydGlvbnMpIHtcbiAgY29uc3QgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zLm1hcCgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzZXJ0aW9uSlNPTiA9IGFzc2VydGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXNzZXJ0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTihyZWZlcmVuY2VzKSB7XG4gIGNvbnN0IHJlZmVyZW5jZXNKU09OID0gcmVmZXJlbmNlcy5tYXAoKHJlZmVyZW5jZSkgPT4ge1xuICAgIGNvbnN0IHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTihjb25qZWN0dXJlcykge1xuICBjb25zdCBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICBjb25zdCBjb25qZWN0dXJlSlNPTiA9IGNvbmplY3R1cmUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OKGNvbWJpbmF0b3JzKSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JKU09OID0gY29tYmluYXRvci50b0pTT04oKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ySlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04oYXNzdW1wdGlvbnMpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnMubWFwKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvbkpTT04gPSBhc3N1bXB0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKGNvbnN0cnVjdG9ycykge1xuICBjb25zdCBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvckpTT047XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKG1ldGF0aGVvcmVtcykge1xuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUpTT04gPSBtZXRhdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OKHR5cGVQcmVmaXhlcykge1xuICBjb25zdCB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzLm1hcCgodHlwZVByZWZpeCkgPT4ge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhKU09OID0gdHlwZVByZWZpeC50b0pTT04oKTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTihzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucy5tYXAoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04obWV0YXZhcmlhYmxlcykge1xuICBjb25zdCBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25zVG9Qcm9wZXJ0eVJlbGF0aW9uc0pTT04ocHJvcGVydHlSZWxhdGlvbnMpIHtcbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbnNKU09OID0gcHJvcGVydHlSZWxhdGlvbnMubWFwKChwcm9wZXJ0eVJlbGF0aW9uKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbkpTT04gPSBwcm9wZXJ0eVJlbGF0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbnNKU09OO1xufVxuXG5mdW5jdGlvbiBmaW5kTWV0YVR5cGVCeU5hbWUobmFtZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhVHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZnVuY3Rpb24gZmluZFR5cGVCeU5hbWVBbmRQcmVmaXhOYW1lKG5hbWUsIHByZWZpeE5hbWUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gKHByZWZpeE5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeE5hbWV9JHtuYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuIl0sIm5hbWVzIjpbImFzc2VydGlvbnNGcm9tSlNPTiIsImFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OIiwiYXNzdW1wdGlvbnNGcm9tSlNPTiIsImFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04iLCJheGlvbXNGcm9tSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJlcXVhbGl0aWVzRnJvbUpTT04iLCJlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTiIsImZyYW1lRnJvbUpTT04iLCJmcmFtZVRvRnJhbWVKU09OIiwiZnJhbWVzRnJvbUpTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJoeXBvdGhlc2VzRnJvbUpTT04iLCJoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTiIsImlkZW50aWZpZXJGcm9tSlNPTiIsImlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OIiwianVkZ2VtZW50c0Zyb21KU09OIiwianVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04iLCJsYWJlbEZyb21KU09OIiwibGFiZWxUb0xhYmVsSlNPTiIsImxhYmVsc0Zyb21KU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhVHlwZUZyb21KU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsIm5hbWVGcm9tSlNPTiIsIm5hbWVUb05hbWVKU09OIiwibmVnYXRlZEZyb21KU09OIiwibmVnYXRlZFRvTmVnYXRlZEpTT04iLCJub21pbmFsVHlwZU5hbWVGcm9tSlNPTiIsIm5vbWluYWxUeXBlTmFtZVRvTm9taW5hbFR5cGVOYW1lSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJwcm9wZXJ0eVJlbGF0aW9uc0Zyb21KU09OIiwicHJvcGVydHlSZWxhdGlvbnNUb1Byb3BlcnR5UmVsYXRpb25zSlNPTiIsInByb3Zpc2lvbmFsRnJvbUpTT04iLCJwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIiwicmVmZXJlbmNlRnJvbUpTT04iLCJyZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04iLCJyZWZlcmVuY2VzRnJvbUpTT04iLCJyZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJydWxlc1RvUnVsZXNKU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsInN0YXRlbWVudHNGcm9tSlNPTiIsInN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidHlwZUZyb21KU09OIiwidHlwZVByZWZpeGVzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInR5cGVzRnJvbUpTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwianNvbiIsImNvbnRleHQiLCJuYW1lIiwibmFtZUpTT04iLCJ0ZXJtIiwidGVybUpTT04iLCJUZXJtIiwiZWxlbWVudHMiLCJmcm9tSlNPTiIsInR5cGUiLCJwcmVmaXhOYW1lIiwiZmluZFR5cGVCeU5hbWVBbmRQcmVmaXhOYW1lIiwiZnJhbWUiLCJmcmFtZUpTT04iLCJGcmFtZSIsIm5lZ2F0ZWQiLCJtZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TmFtZSIsInN0YXRlbWVudCIsIlN0YXRlbWVudCIsInN0YXRlbWVudEpTT04iLCJkZWR1Y3Rpb24iLCJEZWR1Y3Rpb24iLCJkZWR1Y3Rpb25KU09OIiwic2lnbmF0dXJlIiwiU2lnbmF0dXJlIiwic2lnbmF0dXJlSlNPTiIsInJlZmVyZW5jZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZUpTT04iLCJpZGVudGlmaWVyIiwiaWRlbnRpZmllckpTT04iLCJjb25jbHVzaW9uIiwiQ29uY2x1c2lvbiIsImNvbmNsdXNpb25KU09OIiwicHJvdmlzaW9uYWwiLCJtZXRhdmFyaWFibGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVKU09OIiwicHJvY2VkdXJlQ2FsbCIsIlByb2NlZHVyZUNhbGwiLCJwcm9jZWR1cmVDYWxsSlNPTiIsIm5vbWluYWxUeXBlTmFtZSIsInByb2NlZHVyZVJlZmVyZW5jZSIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZVJlZmVyZW5jZUpTT04iLCJ0eXBlcyIsInR5cGVzSlNPTiIsIlR5cGUiLCJmb3JFYWNoIiwidHlwZUpTT04iLCJwdXNoIiwidGVybXMiLCJ0ZXJtc0pTT04iLCJtYXAiLCJydWxlcyIsIlJ1bGUiLCJydWxlc0pTT04iLCJydWxlSlNPTiIsInJ1bGUiLCJsYWJlbCIsIkxhYmVsIiwibGFiZWxKU09OIiwiZnJhbWVzIiwiZnJhbWVzSlNPTiIsImxhYmVscyIsImxhYmVsc0pTT04iLCJheGlvbXMiLCJBeGlvbSIsImF4aW9tc0pTT04iLCJheGlvbUpTT04iLCJheGlvbSIsInByZW1pc2VzIiwiUHJlbWlzZSIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwicHJlbWlzZSIsInRoZW9yZW1zIiwiVGhlb3JlbSIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1KU09OIiwidGhlb3JlbSIsInZhcmlhYmxlcyIsIlZhcmlhYmxlIiwidmFyaWFibGVzSlNPTiIsInZhcmlhYmxlSlNPTiIsInZhcmlhYmxlIiwiZXF1YWxpdGllcyIsIkVxdWFsaXR5IiwiZXF1YWxpdGllc0pTT04iLCJlcXVhbGl0eUpTT04iLCJlcXVhbGl0eSIsInByb3BlcnRpZXMiLCJQcm9wZXJ0eSIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydHlKU09OIiwicHJvcGVydHkiLCJzdXBlclR5cGVzIiwic3VwZXJUeXBlc0pTT04iLCJzdXBlclR5cGVKU09OIiwic3VwZXJUeXBlIiwiaHlwb3RoZXNlcyIsIkh5cG90aGVzaXMiLCJoeXBvdGhlc2VzSlNPTiIsImh5cG90aGVzaXNKU09OIiwiaHlwb3RoZXNpcyIsInBhcmFtZXRlcnMiLCJQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJzSlNPTiIsInBhcmFtZXRlckpTT04iLCJwYXJhbWV0ZXIiLCJqdWRnZW1lbnRzIiwiSnVkZ2VtZW50IiwianVkZ2VtZW50c0pTT04iLCJqdWRnZW1lbnRKU09OIiwianVkZ2VtZW50Iiwic3RhdGVtZW50cyIsInN0YXRlbWVudHNKU09OIiwiYXNzZXJ0aW9ucyIsIlR5cGVBc3NlcnRpb24iLCJEZWZpbmVkQXNzZXJ0aW9uIiwiUHJvcGVydHlBc3NlcnRpb24iLCJTdWJwcm9vZkFzc2VydGlvbiIsIlNhdGlzZmllc0Fzc2VydGlvbiIsIkNvbnRhaW5lZEFzc2VydGlvbiIsImFzc2VydGlvbnNKU09OIiwiYXNzZXJ0aW9uSlNPTiIsImFzc2VydGlvbiIsInJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzSlNPTiIsImNvbmplY3R1cmVzIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29uamVjdHVyZSIsImNvbWJpbmF0b3JzIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JKU09OIiwiY29tYmluYXRvciIsImFzc3VtcHRpb25zIiwiQXNzdW1wdGlvbiIsImFzc3VtcHRpb25zSlNPTiIsImFzc3VtcHRpb25KU09OIiwiYXNzdW1wdGlvbiIsInR5cGVQcmVmaXhlcyIsIlR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4ZXNKU09OIiwidHlwZVByZWZpeEpTT04iLCJ0eXBlUHJlZml4IiwiY29uc3RydWN0b3JzIiwiQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JKU09OIiwiY29uc3RydWN0b3IiLCJtZXRhdGhlb3JlbXMiLCJNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdGhlb3JlbUpTT04iLCJtZXRhdGhlb3JlbSIsInN1cHBvc2l0aW9ucyIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uSlNPTiIsInN1cHBvc2l0aW9uIiwic3Vic3RpdHV0aW9ucyIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbnNKU09OIiwiU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uSlNPTiIsInN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzSlNPTiIsInJlbGVhc2VDb250ZXh0IiwiZW1waGVtZXJhbENvbnRleHQiLCJFcGhlbWVyYWxDb250ZXh0IiwicHJvcGVydHlSZWxhdGlvbnMiLCJQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbnNKU09OIiwicHJvcGVydHlSZWxhdGlvbkpTT04iLCJwcm9wZXJ0eVJlbGF0aW9uIiwidG9KU09OIiwibmVnYXRlZEpTT04iLCJtZXRhVHlwZUpTT04iLCJwcm92aXNpb25hbEpTT04iLCJub21pbmFsVHlwZU5hbWVKU09OIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUEwZWdCQTtlQUFBQTs7UUE4ZUFDO2VBQUFBOztRQXphQUM7ZUFBQUE7O1FBaWRBQztlQUFBQTs7UUFyc0JBQztlQUFBQTs7UUEraUJBQztlQUFBQTs7UUEzVUFDO2VBQUFBOztRQXVkQUM7ZUFBQUE7O1FBdjFCQUM7ZUFBQUE7O1FBbW5CQUM7ZUFBQUE7O1FBblFBQztlQUFBQTs7UUE2ZEFDO2VBQUFBOztRQTdaQUM7ZUFBQUE7O1FBcWNBQztlQUFBQTs7UUF4NkJBQztlQUFBQTs7UUFrcEJBQztlQUFBQTs7UUE5RkFDO2VBQUFBOztRQXJTQUM7ZUFBQUE7O1FBeWtCQUM7ZUFBQUE7O1FBMzRCQUM7ZUFBQUE7O1FBMnBCQUM7ZUFBQUE7O1FBemJBQztlQUFBQTs7UUFxa0JBQztlQUFBQTs7UUF0YkFDO2VBQUFBOztRQXdlQUM7ZUFBQUE7O1FBN3ZCQUM7ZUFBQUE7O1FBdW5CQUM7ZUFBQUE7O1FBbFVBQztlQUFBQTs7UUFnZkFDO2VBQUFBOztRQTVxQkFDO2VBQUFBOztRQThjQUM7ZUFBQUE7O1FBamJBQztlQUFBQTs7UUEyaUJBQztlQUFBQTs7UUFqMUJBQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBb0VBQztlQUFBQTs7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