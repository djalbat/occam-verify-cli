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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEVwaGVtZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZXBoZW1lcmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbmFtZSB9ID0ganNvbjtcblxuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICBuYW1lID0gbmFtZUpTT047ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICAgIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cztcblxuICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAganNvbiA9IHR5cGU7ICAvLy9cblxuICAgIGNvbnN0IHsgbmFtZSwgcHJlZml4TmFtZSB9ID0ganNvbjtcblxuICAgIHR5cGUgPSBmaW5kVHlwZUJ5TmFtZUFuZFByZWZpeE5hbWUobmFtZSwgcHJlZml4TmFtZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBmcmFtZSB9ID0ganNvbjtcblxuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBmcmFtZUpTT04gPSBmcmFtZTsgIC8vL1xuXG4gICAganNvbiA9IGZyYW1lSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHM7XG5cbiAgICBmcmFtZSA9IEZyYW1lLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBuZWdhdGVkIH0gPSBqc29uO1xuXG4gIHJldHVybiBuZWdhdGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSBtZXRhVHlwZTsgIC8vL1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgbWV0YVR5cGUgPSBmaW5kTWV0YVR5cGVCeU5hbWUobmFtZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN0YXRlbWVudCA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICBqc29uID0gc3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBkZWR1Y3Rpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uOyAgLy8vXG5cbiAganNvbiA9IGRlZHVjdGlvbkpTT047ICAvLy9cblxuICBkZWR1Y3Rpb24gPSBEZWR1Y3Rpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc2lnbmF0dXJlID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc2lnbmF0dXJlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTaWduYXR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHNpZ25hdHVyZUpTT04gPSBzaWduYXR1cmU7ICAvLy9cblxuICAgIGpzb24gPSBzaWduYXR1cmVKU09OOyAvLy9cblxuICAgIHNpZ25hdHVyZSA9IFNpZ25hdHVyZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJlZmVyZW5jZSB9ID0ganNvbjtcblxuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2U7ICAvLy9cblxuICBqc29uID0gcmVmZXJlbmNlSlNPTjsgLy8vXG5cbiAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBpZGVudGlmaWVyIH0gPSBqc29uO1xuXG4gIGNvbnN0IGlkZW50aWZpZXJKU09OID0gaWRlbnRpZmllcjsgIC8vL1xuXG4gIGlkZW50aWZpZXIgPSBpZGVudGlmaWVySlNPTjsgIC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb2NlZHVyZUNhbGwgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGw7ICAvLy9cblxuICAgIGpzb24gPSBwcm9jZWR1cmVDYWxsSlNPTjsgLy8vXG5cbiAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2VKU09OID0gcHJvY2VkdXJlUmVmZXJlbmNlOyAgLy8vXG5cbiAganNvbiA9IHByb2NlZHVyZVJlZmVyZW5jZUpTT047ICAvLy9cblxuICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBQcm9jZWR1cmVSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzRnJvbUpTT04oanNvbiwgdHlwZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyB0eXBlczogdHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZSB9ID0gZWxlbWVudHM7XG5cbiAgdHlwZXNKU09OLmZvckVhY2goKHR5cGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0ZXJtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0ZXJtc0pTT04gPSB0ZXJtczsgLy8vXG5cbiAgdGVybXMgPSB0ZXJtc0pTT04ubWFwKCh0ZXJtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBydWxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFJ1bGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBydWxlc0pTT04gPSBydWxlczsgLy8vXG5cbiAgcnVsZXMgPSBydWxlc0pTT04ubWFwKChydWxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBydWxlSlNPTiwgIC8vL1xuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbCB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbGFiZWxKU09OID0gbGFiZWw7ICAvLy9cblxuICBqc29uID0gbGFiZWxKU09OOyAvLy9cblxuICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZnJhbWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzLFxuICAgIGZyYW1lc0pTT04gPSBmcmFtZXM7IC8vL1xuXG4gIGZyYW1lcyA9IGZyYW1lc0pTT04ubWFwKChmcmFtZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gZnJhbWVKU09OLCAgLy8vXG4gICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGF4aW9tcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEF4aW9tIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXhpb21zSlNPTiA9IGF4aW9tczsgLy8vXG5cbiAgYXhpb21zID0gYXhpb21zSlNPTi5tYXAoKGF4aW9tSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBheGlvbUpTT04sICAvLy9cbiAgICAgICAgICBheGlvbSA9IEF4aW9tLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByZW1pc2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzOyAgLy8vXG5cbiAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcmVtaXNlSlNPTiwgLy8vXG4gICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVGhlb3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zOyAvLy9cblxuICB0aGVvcmVtcyA9IHRoZW9yZW1zSlNPTi5tYXAoKHRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXM7IC8vL1xuXG4gIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0pTT04ubWFwKCh2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGVxdWFsaXRpZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBFcXVhbGl0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGVxdWFsaXRpZXNKU09OID0gZXF1YWxpdGllczsgLy8vXG5cbiAgZXF1YWxpdGllcyA9IGVxdWFsaXRpZXNKU09OLm1hcCgoZXF1YWxpdHlKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGVxdWFsaXR5SlNPTiwgIC8vL1xuICAgICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH0pO1xuXG4gIHJldHVybiBlcXVhbGl0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvcGVydGllcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByb3BlcnR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzOyAvLy9cblxuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04ubWFwKChwcm9wZXJ0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJvcGVydHlKU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IHN1cGVyVHlwZXM6IHN1cGVyVHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTi5tYXAoKHN1cGVyVHlwZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIHsgbmFtZSwgcHJlZml4TmFtZSB9ID0ganNvbixcbiAgICAgICAgICAgICAgICB0eXBlID0gZmluZFR5cGVCeU5hbWVBbmRQcmVmaXhOYW1lKG5hbWUsIHByZWZpeE5hbWUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBoeXBvdGhlc2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgSHlwb3RoZXNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlczsgIC8vL1xuXG4gIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzSlNPTi5tYXAoKGh5cG90aGVzaXNKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGh5cG90aGVzaXNKU09OLCAvLy9cbiAgICAgICAgICBoeXBvdGhlc2lzID0gSHlwb3RoZXNpcy5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9KTtcblxuICByZXR1cm4gaHlwb3RoZXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHBhcmFtZXRlcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnM7IC8vL1xuXG4gIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzSlNPTi5tYXAoKHBhcmFtZXRlckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcGFyYW1ldGVySlNPTiwgIC8vL1xuICAgICAgICAgIHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsganVkZ2VtZW50cyB9ID0ganNvbjtcblxuICBjb25zdCB7IEp1ZGdlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50czsgLy8vXG5cbiAganVkZ2VtZW50cyA9IGp1ZGdlbWVudHNKU09OLm1hcCgoanVkZ2VtZW50SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBqdWRnZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganVkZ2VtZW50ID0gSnVkZ2VtZW50LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGp1ZGdlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnRzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3RhdGVtZW50c0pTT04gPSBzdGF0ZW1lbnRzOyAvLy9cblxuICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0pTT04ubWFwKChzdGF0ZW1lbnRKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGFzc2VydGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlQXNzZXJ0aW9uLCBEZWZpbmVkQXNzZXJ0aW9uLCBQcm9wZXJ0eUFzc2VydGlvbiwgU3VicHJvb2ZBc3NlcnRpb24sIFNhdGlzZmllc0Fzc2VydGlvbiwgQ29udGFpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zOyAvLy9cblxuICBhc3NlcnRpb25zID0gYXNzZXJ0aW9uc0pTT04ubWFwKChhc3NlcnRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGFzc2VydGlvbkpTT04sICAvLy9cbiAgICAgICAgICBhc3NlcnRpb24gPSBUeXBlQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIERlZmluZWRBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgUHJvcGVydHlBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgU3VicHJvb2ZBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgU2F0aXNmaWVzQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIENvbnRhaW5lZEFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH0pO1xuXG4gIHJldHVybiBhc3NlcnRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcmVmZXJlbmNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJlZmVyZW5jZXNKU09OID0gcmVmZXJlbmNlczsgLy8vXG5cbiAgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZXNKU09OLm1hcCgocmVmZXJlbmNlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSByZWZlcmVuY2VKU09OLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uamVjdHVyZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXM7IC8vL1xuXG4gIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLm1hcCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uamVjdHVyZUpTT04sICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29tYmluYXRvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnM7IC8vL1xuXG4gIGNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNKU09OLm1hcCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29tYmluYXRvckpTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXNzdW1wdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBBc3N1bXB0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnM7IC8vL1xuXG4gIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNKU09OLm1hcCgoYXNzdW1wdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXNzdW1wdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uID0gQXNzdW1wdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4ZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHR5cGVQcmVmaXhlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGVQcmVmaXggfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzOyAvLy9cblxuICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLm1hcCgodHlwZVByZWZpeEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZVByZWZpeEpTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ID0gVHlwZVByZWZpeC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25zdHJ1Y3RvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnM7IC8vL1xuXG4gIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04ubWFwKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zOyAvLy9cblxuICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLm1hcCgobWV0YXRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN1cHBvc2l0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3Vic3RpdHV0aW9ucyA9IFtdIH0gPSBqc29uOyAgLy8vXG5cbiAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnMsICAvLy9cbiAgICAgICAgU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uOyAvLy9cblxuICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04ubWFwKChzdWJzdGl0dXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBTdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXM7IC8vL1xuXG4gIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTi5tYXAoKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSBjb250ZXh0O1xuXG4gICh7Y29udGV4dH0gPSBqc29uKTtcblxuICBqc29uID0gY29udGV4dDsgLy8vXG5cbiAgY29udGV4dCA9IHJlbGVhc2VDb250ZXh0OyAvLy9cblxuICBjb25zdCBlbXBoZW1lcmFsQ29udGV4dCA9IEVwaGVtZXJhbENvbnRleHQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGVtcGhlbWVyYWxDb250ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb3BlcnR5UmVsYXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHlSZWxhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zSlNPTiA9IHByb3BlcnR5UmVsYXRpb25zOyAvLy9cblxuICBwcm9wZXJ0eVJlbGF0aW9ucyA9IHByb3BlcnR5UmVsYXRpb25zSlNPTi5tYXAoKHByb3BlcnR5UmVsYXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByb3BlcnR5UmVsYXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IFByb3BlcnR5UmVsYXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZVRvTmFtZUpTT04obmFtZSkge1xuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICByZXR1cm4gbmFtZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtVG9UZXJtSlNPTih0ZXJtKSB7XG4gIGNvbnN0IHRlcm1KU09OID0gKHRlcm0gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHRlcm0udG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0ZXJtSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVUb1R5cGVKU09OKHR5cGUpIHtcbiAgY29uc3QgdHlwZUpTT04gPSAodHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgdHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVUb0ZyYW1lSlNPTihmcmFtZSkge1xuICBjb25zdCBmcmFtZUpTT04gPSAoZnJhbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICBmcmFtZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBmcmFtZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbFRvTGFiZWxKU09OKGxhYmVsKSB7XG4gIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gIHJldHVybiBsYWJlbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVG9OZWdhdGVkSlNPTihuZWdhdGVkKSB7XG4gIGNvbnN0IG5lZ2F0ZWRKU09OID0gbmVnYXRlZDsgIC8vL1xuXG4gIHJldHVybiBuZWdhdGVkSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04obWV0YVR5cGUpIHtcbiAgY29uc3QgbWV0YVR5cGVKU09OID0gKG1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gbWV0YVR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlVG9SZWZlcmVuY2VKU09OKHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gIHJldHVybiByZWZlcmVuY2VKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHN0YXRlbWVudCkge1xuICBjb25zdCBzdGF0ZW1lbnRKU09OID0gKHN0YXRlbWVudCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnQudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHN0YXRlbWVudEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04oZGVkdWN0aW9uKSB7XG4gIGNvbnN0IGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04oc2lnbmF0dXJlKSB7XG4gIGNvbnN0IHNpZ25hdHVyZUpTT04gPSAoc2lnbmF0dXJlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gc2lnbmF0dXJlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OKGlkZW50aWZpZXIpIHtcbiAgY29uc3QgaWRlbnRpZmllckpTT04gPSBpZGVudGlmaWVyOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXJKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04oY29uY2x1c2lvbikge1xuICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTihwcm92aXNpb25hbCkge1xuICBjb25zdCBwcm92aXNpb25hbEpTT04gPSBwcm92aXNpb25hbDsgIC8vL1xuXG4gIHJldHVybiBwcm92aXNpb25hbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04obWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTihwcm9jZWR1cmVDYWxsKSB7XG4gIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gKHByb2NlZHVyZUNhbGwgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZHVyZUNhbGwudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTihwcm9jZWR1cmVSZWZlcmVuY2UpIHtcbiAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlSlNPTiA9IHByb2NlZHVyZVJlZmVyZW5jZS50b0pTT04oKTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zVG9UZXJtc0pTT04odGVybXMpIHtcbiAgY29uc3QgdGVybXNKU09OID0gdGVybXMubWFwKCh0ZXJtKSA9PiB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHRlcm1KU09OO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNUb1R5cGVzSlNPTih0eXBlcykge1xuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gdHlwZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc1RvUnVsZXNKU09OKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVzSlNPTiA9IHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgIHJldHVybiBydWxlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpIHtcbiAgY29uc3QgZnJhbWVzSlNPTiA9IGZyYW1lcy5tYXAoKGZyYW1lKSA9PiB7XG4gICAgY29uc3QgZnJhbWVKU09OID0gZnJhbWUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gZnJhbWVKU09OO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICByZXR1cm4gYXhpb21KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzVG9QcmVtaXNlc0pTT04ocHJlbWlzZXMpIHtcbiAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNUb1RoZW9yZW1zSlNPTih0aGVvcmVtcykge1xuICBjb25zdCB0aGVvcmVtc0pTT04gPSB0aGVvcmVtcy5tYXAoKHRoZW9yZW0pID0+IHtcbiAgICBjb25zdCB0aGVvcmVtSlNPTiA9IHRoZW9yZW0udG9KU09OKCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbUpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odmFyaWFibGVzKSB7XG4gIGNvbnN0IHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTihoeXBvdGhlc2VzKSB7XG4gIGNvbnN0IGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlcy5tYXAoKGh5cG90aGVzaXMpID0+IHtcbiAgICBjb25zdCBoeXBvdGhlc2lzSlNPTiA9IGh5cG90aGVzaXMudG9KU09OKCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpc0pTT047XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHN1cGVyVHlwZXMpIHtcbiAgY29uc3Qgc3VwZXJUeXBlc0pTT04gPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZS50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBlclR5cGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTihwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlckpTT04gPSBwYXJhbWV0ZXIudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVySlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04ocHJvcGVydGllcykge1xuICBjb25zdCBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXMubWFwKChwcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5SlNPTiA9IHByb3BlcnR5LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04oanVkZ2VtZW50cykge1xuICBjb25zdCBqdWRnZW1lbnRzSlNPTiA9IGp1ZGdlbWVudHMubWFwKChqdWRnZW1lbnQpID0+IHtcbiAgICBjb25zdCBqdWRnZW1lbnRKU09OID0ganVkZ2VtZW50LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBqdWRnZW1lbnRzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OKGVxdWFsaXRpZXMpIHtcbiAgY29uc3QgZXF1YWxpdGllc0pTT04gPSBlcXVhbGl0aWVzLm1hcCgoZXF1YWxpdHkpID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eUpTT04gPSBlcXVhbGl0eS50b0pTT04oKTtcblxuICAgIHJldHVybiBlcXVhbGl0eUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBlcXVhbGl0aWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OKHN0YXRlbWVudHMpIHtcbiAgY29uc3Qgc3RhdGVtZW50c0pTT04gPSBzdGF0ZW1lbnRzLm1hcCgoc3RhdGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudC50b0pTT04oKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRKU09OO1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50c0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTihhc3NlcnRpb25zKSB7XG4gIGNvbnN0IGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9ucy5tYXAoKGFzc2VydGlvbikgPT4ge1xuICAgIGNvbnN0IGFzc2VydGlvbkpTT04gPSBhc3NlcnRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc2VydGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlc1RvUmVmZXJlbmNlc0pTT04ocmVmZXJlbmNlcykge1xuICBjb25zdCByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXMubWFwKChyZWZlcmVuY2UpID0+IHtcbiAgICBjb25zdCByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiByZWZlcmVuY2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04oY29uamVjdHVyZXMpIHtcbiAgY29uc3QgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVKU09OO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTihjb21iaW5hdG9ycykge1xuICBjb25zdCBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvckpTT047XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc1RvQXNzdW1wdGlvbnNKU09OKGFzc3VtcHRpb25zKSB7XG4gIGNvbnN0IGFzc3VtcHRpb25zSlNPTiA9IGFzc3VtcHRpb25zLm1hcCgoYXNzdW1wdGlvbikgPT4ge1xuICAgIGNvbnN0IGFzc3VtcHRpb25KU09OID0gYXNzdW1wdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTihzdXBwb3NpdGlvbnMpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25KU09OID0gc3VwcG9zaXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTihjb25zdHJ1Y3RvcnMpIHtcbiAgY29uc3QgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9ycy5tYXAoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgY29uc3QgY29uc3RydWN0b3JKU09OID0gY29uc3RydWN0b3IudG9KU09OKCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JKU09OO1xuICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTihtZXRhdGhlb3JlbXMpIHtcbiAgY29uc3QgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtcy5tYXAoKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1KU09OID0gbWV0YXRoZW9yZW0udG9KU09OKCk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1KU09OO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTih0eXBlUHJlZml4ZXMpIHtcbiAgY29uc3QgdHlwZVByZWZpeGVzSlNPTiA9IHR5cGVQcmVmaXhlcy5tYXAoKHR5cGVQcmVmaXgpID0+IHtcbiAgICBjb25zdCB0eXBlUHJlZml4SlNPTiA9IHR5cGVQcmVmaXgudG9KU09OKCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeEpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlUHJlZml4ZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04oc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnMubWFwKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25KU09OID0gc3Vic3RpdHV0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKG1ldGF2YXJpYWJsZXMpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzLm1hcCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04oKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uc1RvUHJvcGVydHlSZWxhdGlvbnNKU09OKHByb3BlcnR5UmVsYXRpb25zKSB7XG4gIGNvbnN0IHByb3BlcnR5UmVsYXRpb25zSlNPTiA9IHByb3BlcnR5UmVsYXRpb25zLm1hcCgocHJvcGVydHlSZWxhdGlvbikgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25KU09OID0gcHJvcGVydHlSZWxhdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25zSlNPTjtcbn1cblxuZnVuY3Rpb24gZmluZE1ldGFUeXBlQnlOYW1lKG5hbWUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZpbmRUeXBlQnlOYW1lQW5kUHJlZml4TmFtZShuYW1lLCBwcmVmaXhOYW1lLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IChwcmVmaXhOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhOYW1lfSR7bmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICByZXR1cm4gdHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJhc3NlcnRpb25zRnJvbUpTT04iLCJhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTiIsImFzc3VtcHRpb25zRnJvbUpTT04iLCJhc3N1bXB0aW9uc1RvQXNzdW1wdGlvbnNKU09OIiwiYXhpb21zRnJvbUpTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIiwiZXF1YWxpdGllc0Zyb21KU09OIiwiZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04iLCJmcmFtZUZyb21KU09OIiwiZnJhbWVUb0ZyYW1lSlNPTiIsImZyYW1lc0Zyb21KU09OIiwiZnJhbWVzVG9GcmFtZXNKU09OIiwiaHlwb3RoZXNlc0Zyb21KU09OIiwiaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04iLCJpZGVudGlmaWVyRnJvbUpTT04iLCJpZGVudGlmaWVyVG9JZGVudGlmaWVySlNPTiIsImp1ZGdlbWVudHNGcm9tSlNPTiIsImp1ZGdlbWVudHNUb0p1ZGdlbWVudHNKU09OIiwibGFiZWxGcm9tSlNPTiIsImxhYmVsVG9MYWJlbEpTT04iLCJsYWJlbHNGcm9tSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImxlbW1hc0Zyb21Ob3RoaW5nIiwibWV0YUxlbW1hc0Zyb21Ob3RoaW5nIiwibWV0YVR5cGVGcm9tSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJtZXRhdGhlb3JlbXNGcm9tSlNPTiIsIm1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwibWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04iLCJuYW1lRnJvbUpTT04iLCJuYW1lVG9OYW1lSlNPTiIsIm5lZ2F0ZWRGcm9tSlNPTiIsIm5lZ2F0ZWRUb05lZ2F0ZWRKU09OIiwicGFyYW1ldGVyc0Zyb21KU09OIiwicGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04iLCJwcmVtaXNlc0Zyb21KU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsInByb2NlZHVyZUNhbGxGcm9tSlNPTiIsInByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04iLCJwcm9wZXJ0aWVzRnJvbUpTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInByb3BlcnR5UmVsYXRpb25zRnJvbUpTT04iLCJwcm9wZXJ0eVJlbGF0aW9uc1RvUHJvcGVydHlSZWxhdGlvbnNKU09OIiwicHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTiIsInJlZmVyZW5jZUZyb21KU09OIiwicmVmZXJlbmNlVG9SZWZlcmVuY2VKU09OIiwicmVmZXJlbmNlc0Zyb21KU09OIiwicmVmZXJlbmNlc1RvUmVmZXJlbmNlc0pTT04iLCJydWxlc0Zyb21KU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsInNpZ25hdHVyZUZyb21KU09OIiwic2lnbmF0dXJlVG9TaWduYXR1cmVKU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRzRnJvbUpTT04iLCJzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwic3VwZXJUeXBlc0Zyb21KU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInRlcm1Gcm9tSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwidGVybXNGcm9tSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJ0aGVvcmVtc0Zyb21KU09OIiwidGhlb3JlbXNUb1RoZW9yZW1zSlNPTiIsInR5cGVGcm9tSlNPTiIsInR5cGVQcmVmaXhlc0Zyb21KU09OIiwidHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OIiwidHlwZVRvVHlwZUpTT04iLCJ0eXBlc0Zyb21KU09OIiwidHlwZXNUb1R5cGVzSlNPTiIsInZhcmlhYmxlc0Zyb21KU09OIiwidmFyaWFibGVzVG9WYXJpYWJsZXNKU09OIiwibGVtbWFzIiwibWV0YUxlbW1hcyIsImpzb24iLCJjb250ZXh0IiwibmFtZSIsIm5hbWVKU09OIiwidGVybSIsInRlcm1KU09OIiwiVGVybSIsImVsZW1lbnRzIiwiZnJvbUpTT04iLCJ0eXBlIiwicHJlZml4TmFtZSIsImZpbmRUeXBlQnlOYW1lQW5kUHJlZml4TmFtZSIsImZyYW1lIiwiZnJhbWVKU09OIiwiRnJhbWUiLCJuZWdhdGVkIiwibWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU5hbWUiLCJzdGF0ZW1lbnQiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRKU09OIiwiZGVkdWN0aW9uIiwiRGVkdWN0aW9uIiwiZGVkdWN0aW9uSlNPTiIsInNpZ25hdHVyZSIsIlNpZ25hdHVyZSIsInNpZ25hdHVyZUpTT04iLCJyZWZlcmVuY2UiLCJSZWZlcmVuY2UiLCJyZWZlcmVuY2VKU09OIiwiaWRlbnRpZmllciIsImlkZW50aWZpZXJKU09OIiwiY29uY2x1c2lvbiIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uSlNPTiIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJwcm9jZWR1cmVDYWxsIiwiUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInR5cGVzIiwidHlwZXNKU09OIiwiVHlwZSIsImZvckVhY2giLCJ0eXBlSlNPTiIsInB1c2giLCJ0ZXJtcyIsInRlcm1zSlNPTiIsIm1hcCIsInJ1bGVzIiwiUnVsZSIsInJ1bGVzSlNPTiIsInJ1bGVKU09OIiwicnVsZSIsImxhYmVsIiwiTGFiZWwiLCJsYWJlbEpTT04iLCJmcmFtZXMiLCJmcmFtZXNKU09OIiwibGFiZWxzIiwibGFiZWxzSlNPTiIsImF4aW9tcyIsIkF4aW9tIiwiYXhpb21zSlNPTiIsImF4aW9tSlNPTiIsImF4aW9tIiwicHJlbWlzZXMiLCJQcmVtaXNlIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZUpTT04iLCJwcmVtaXNlIiwidGhlb3JlbXMiLCJUaGVvcmVtIiwidGhlb3JlbXNKU09OIiwidGhlb3JlbUpTT04iLCJ0aGVvcmVtIiwidmFyaWFibGVzIiwiVmFyaWFibGUiLCJ2YXJpYWJsZXNKU09OIiwidmFyaWFibGVKU09OIiwidmFyaWFibGUiLCJlcXVhbGl0aWVzIiwiRXF1YWxpdHkiLCJlcXVhbGl0aWVzSlNPTiIsImVxdWFsaXR5SlNPTiIsImVxdWFsaXR5IiwicHJvcGVydGllcyIsIlByb3BlcnR5IiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0eUpTT04iLCJwcm9wZXJ0eSIsInN1cGVyVHlwZXMiLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZUpTT04iLCJzdXBlclR5cGUiLCJoeXBvdGhlc2VzIiwiSHlwb3RoZXNpcyIsImh5cG90aGVzZXNKU09OIiwiaHlwb3RoZXNpc0pTT04iLCJoeXBvdGhlc2lzIiwicGFyYW1ldGVycyIsIlBhcmFtZXRlciIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVySlNPTiIsInBhcmFtZXRlciIsImp1ZGdlbWVudHMiLCJKdWRnZW1lbnQiLCJqdWRnZW1lbnRzSlNPTiIsImp1ZGdlbWVudEpTT04iLCJqdWRnZW1lbnQiLCJzdGF0ZW1lbnRzIiwic3RhdGVtZW50c0pTT04iLCJhc3NlcnRpb25zIiwiVHlwZUFzc2VydGlvbiIsIkRlZmluZWRBc3NlcnRpb24iLCJQcm9wZXJ0eUFzc2VydGlvbiIsIlN1YnByb29mQXNzZXJ0aW9uIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwiYXNzZXJ0aW9uc0pTT04iLCJhc3NlcnRpb25KU09OIiwiYXNzZXJ0aW9uIiwicmVmZXJlbmNlcyIsInJlZmVyZW5jZXNKU09OIiwiY29uamVjdHVyZXMiLCJDb25qZWN0dXJlIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZUpTT04iLCJjb25qZWN0dXJlIiwiY29tYmluYXRvcnMiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvckpTT04iLCJjb21iaW5hdG9yIiwiYXNzdW1wdGlvbnMiLCJBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbnNKU09OIiwiYXNzdW1wdGlvbkpTT04iLCJhc3N1bXB0aW9uIiwidHlwZVByZWZpeGVzIiwiVHlwZVByZWZpeCIsInR5cGVQcmVmaXhlc0pTT04iLCJ0eXBlUHJlZml4SlNPTiIsInR5cGVQcmVmaXgiLCJjb25zdHJ1Y3RvcnMiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJjb25zdHJ1Y3RvciIsIm1ldGF0aGVvcmVtcyIsIk1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtSlNPTiIsIm1ldGF0aGVvcmVtIiwic3VwcG9zaXRpb25zIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25KU09OIiwic3VwcG9zaXRpb24iLCJzdWJzdGl0dXRpb25zIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uc0pTT04iLCJTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25KU09OIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXNKU09OIiwicmVsZWFzZUNvbnRleHQiLCJlbXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsIlByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uc0pTT04iLCJwcm9wZXJ0eVJlbGF0aW9uSlNPTiIsInByb3BlcnR5UmVsYXRpb24iLCJ0b0pTT04iLCJuZWdhdGVkSlNPTiIsIm1ldGFUeXBlSlNPTiIsInByb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWxKU09OIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE4ZGdCQTtlQUFBQTs7UUF3ZUFDO2VBQUFBOztRQW5hQUM7ZUFBQUE7O1FBMmNBQztlQUFBQTs7UUEvckJBQztlQUFBQTs7UUF5aUJBQztlQUFBQTs7UUFyVUFDO2VBQUFBOztRQWlkQUM7ZUFBQUE7O1FBcjBCQUM7ZUFBQUE7O1FBdW1CQUM7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