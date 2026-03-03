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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEVwaGVtZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZXBoZW1lcmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbmFtZSB9ID0ganNvbjtcblxuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICBuYW1lID0gbmFtZUpTT047ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICAgIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cztcblxuICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAganNvbiA9IHR5cGU7ICAvLy9cblxuICAgIGNvbnN0IHsgbmFtZSwgcHJlZml4TmFtZSB9ID0ganNvbjtcblxuICAgIHR5cGUgPSBmaW5kVHlwZUJ5TmFtZUFuZFByZWZpeE5hbWUobmFtZSwgcHJlZml4TmFtZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBmcmFtZSB9ID0ganNvbjtcblxuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBmcmFtZUpTT04gPSBmcmFtZTsgIC8vL1xuXG4gICAganNvbiA9IGZyYW1lSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHM7XG5cbiAgICBmcmFtZSA9IEZyYW1lLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBuZWdhdGVkIH0gPSBqc29uO1xuXG4gIHJldHVybiBuZWdhdGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSBtZXRhVHlwZTsgIC8vL1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgbWV0YVR5cGUgPSBmaW5kTWV0YVR5cGVCeU5hbWUobmFtZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN0YXRlbWVudCA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICBqc29uID0gc3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBkZWR1Y3Rpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uOyAgLy8vXG5cbiAganNvbiA9IGRlZHVjdGlvbkpTT047ICAvLy9cblxuICBkZWR1Y3Rpb24gPSBEZWR1Y3Rpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc2lnbmF0dXJlID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc2lnbmF0dXJlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTaWduYXR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHNpZ25hdHVyZUpTT04gPSBzaWduYXR1cmU7ICAvLy9cblxuICAgIGpzb24gPSBzaWduYXR1cmVKU09OOyAvLy9cblxuICAgIHNpZ25hdHVyZSA9IFNpZ25hdHVyZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJlZmVyZW5jZSB9ID0ganNvbjtcblxuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2U7ICAvLy9cblxuICBqc29uID0gcmVmZXJlbmNlSlNPTjsgLy8vXG5cbiAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBpZGVudGlmaWVyIH0gPSBqc29uO1xuXG4gIGNvbnN0IGlkZW50aWZpZXJKU09OID0gaWRlbnRpZmllcjsgIC8vL1xuXG4gIGlkZW50aWZpZXIgPSBpZGVudGlmaWVySlNPTjsgIC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb2NlZHVyZUNhbGwgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGw7ICAvLy9cblxuICAgIGpzb24gPSBwcm9jZWR1cmVDYWxsSlNPTjsgLy8vXG5cbiAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2VKU09OID0gcHJvY2VkdXJlUmVmZXJlbmNlOyAgLy8vXG5cbiAganNvbiA9IHByb2NlZHVyZVJlZmVyZW5jZUpTT047ICAvLy9cblxuICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBQcm9jZWR1cmVSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzRnJvbUpTT04oanNvbiwgdHlwZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyB0eXBlczogdHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZSB9ID0gZWxlbWVudHM7XG5cbiAgdHlwZXNKU09OLmZvckVhY2goKHR5cGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0ZXJtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0ZXJtc0pTT04gPSB0ZXJtczsgLy8vXG5cbiAgdGVybXMgPSB0ZXJtc0pTT04ubWFwKCh0ZXJtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBydWxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFJ1bGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBydWxlc0pTT04gPSBydWxlczsgLy8vXG5cbiAgcnVsZXMgPSBydWxlc0pTT04ubWFwKChydWxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBydWxlSlNPTiwgIC8vL1xuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbCB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbGFiZWxKU09OID0gbGFiZWw7ICAvLy9cblxuICBqc29uID0gbGFiZWxKU09OOyAvLy9cblxuICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZnJhbWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzLFxuICAgIGZyYW1lc0pTT04gPSBmcmFtZXM7IC8vL1xuXG4gIGZyYW1lcyA9IGZyYW1lc0pTT04ubWFwKChmcmFtZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gZnJhbWVKU09OLCAgLy8vXG4gICAgICBmcmFtZSA9IEZyYW1lLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXhpb21zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXhpb20gfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbXNKU09OID0gYXhpb21zOyAvLy9cblxuICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUaGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuXG4gIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLm1hcCgodGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZXF1YWxpdGllcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEVxdWFsaXR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXF1YWxpdGllc0pTT04gPSBlcXVhbGl0aWVzOyAvLy9cblxuICBlcXVhbGl0aWVzID0gZXF1YWxpdGllc0pTT04ubWFwKChlcXVhbGl0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gZXF1YWxpdHlKU09OLCAgLy8vXG4gICAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXM7IC8vL1xuXG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTi5tYXAoKHByb3BlcnR5SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcm9wZXJ0eUpTT04sICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgc3VwZXJUeXBlczogc3VwZXJUeXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3Qgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLm1hcCgoc3VwZXJUeXBlSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgeyBuYW1lLCBwcmVmaXhOYW1lIH0gPSBqc29uLFxuICAgICAgICAgICAgICAgIHR5cGUgPSBmaW5kVHlwZUJ5TmFtZUFuZFByZWZpeE5hbWUobmFtZSwgcHJlZml4TmFtZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gdHlwZTsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGh5cG90aGVzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBIeXBvdGhlc2lzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzOyAgLy8vXG5cbiAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNKU09OLm1hcCgoaHlwb3RoZXNpc0pTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gaHlwb3RoZXNpc0pTT04sIC8vL1xuICAgICAgICAgIGh5cG90aGVzaXMgPSBIeXBvdGhlc2lzLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcGFyYW1ldGVycyB9ID0ganNvbjtcblxuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVyczsgLy8vXG5cbiAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNKU09OLm1hcCgocGFyYW1ldGVySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwYXJhbWV0ZXJKU09OLCAgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBqdWRnZW1lbnRzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgSnVkZ2VtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAganVkZ2VtZW50c0pTT04gPSBqdWRnZW1lbnRzOyAvLy9cblxuICBqdWRnZW1lbnRzID0ganVkZ2VtZW50c0pTT04ubWFwKChqdWRnZW1lbnRKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGp1ZGdlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqdWRnZW1lbnQgPSBKdWRnZW1lbnQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9KTtcblxuICByZXR1cm4ganVkZ2VtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN0YXRlbWVudHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdGF0ZW1lbnRzSlNPTiA9IHN0YXRlbWVudHM7IC8vL1xuXG4gIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzSlNPTi5tYXAoKHN0YXRlbWVudEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXNzZXJ0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGVBc3NlcnRpb24sIERlZmluZWRBc3NlcnRpb24sIFByb3BlcnR5QXNzZXJ0aW9uLCBTdWJwcm9vZkFzc2VydGlvbiwgU2F0aXNmaWVzQXNzZXJ0aW9uLCBDb250YWluZWRBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBhc3NlcnRpb25zSlNPTiA9IGFzc2VydGlvbnM7IC8vL1xuXG4gIGFzc2VydGlvbnMgPSBhc3NlcnRpb25zSlNPTi5tYXAoKGFzc2VydGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXNzZXJ0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGFzc2VydGlvbiA9IFR5cGVBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgRGVmaW5lZEFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eUFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBTdWJwcm9vZkFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBTYXRpc2ZpZXNBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgQ29udGFpbmVkQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc2VydGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyByZWZlcmVuY2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcmVmZXJlbmNlc0pTT04gPSByZWZlcmVuY2VzOyAvLy9cblxuICByZWZlcmVuY2VzID0gcmVmZXJlbmNlc0pTT04ubWFwKChyZWZlcmVuY2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHJlZmVyZW5jZUpTT04sICAvLy9cbiAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9KTtcblxuICByZXR1cm4gcmVmZXJlbmNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25qZWN0dXJlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlczsgLy8vXG5cbiAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04ubWFwKChjb25qZWN0dXJlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb21iaW5hdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9yczsgLy8vXG5cbiAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04ubWFwKChjb21iaW5hdG9ySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb21iaW5hdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBhc3N1bXB0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBhc3N1bXB0aW9uc0pTT04gPSBhc3N1bXB0aW9uczsgLy8vXG5cbiAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0pTT04ubWFwKChhc3N1bXB0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBhc3N1bXB0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGFzc3VtcHRpb24gPSBBc3N1bXB0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZVByZWZpeGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZVByZWZpeCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHR5cGVQcmVmaXhlc0pTT04gPSB0eXBlUHJlZml4ZXM7IC8vL1xuXG4gIHR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlc0pTT04ubWFwKCh0eXBlUHJlZml4SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0eXBlUHJlZml4SlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXggPSBUeXBlUHJlZml4LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlUHJlZml4ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbnN0cnVjdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9yczsgLy8vXG5cbiAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzSlNPTi5tYXAoKGNvbnN0cnVjdG9ySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb25zdHJ1Y3RvckpTT04sICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdGhlb3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXM7IC8vL1xuXG4gIG1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtc0pTT04ubWFwKChtZXRhdGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBNZXRhdGhlb3JlbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3VwcG9zaXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTi5tYXAoKHN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdWJzdGl0dXRpb25zID0gW10gfSA9IGpzb247ICAvLy9cblxuICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucywgIC8vL1xuICAgICAgICBTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb247IC8vL1xuXG4gIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3Vic3RpdHV0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IFN1YnN0aXR1dGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlczsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNKU09OLm1hcCgobWV0YXZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgKHtjb250ZXh0fSA9IGpzb24pO1xuXG4gIGpzb24gPSBjb250ZXh0OyAvLy9cblxuICBjb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7IC8vL1xuXG4gIGNvbnN0IGVtcGhlbWVyYWxDb250ZXh0ID0gRXBoZW1lcmFsQ29udGV4dC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVJlbGF0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvcGVydHlSZWxhdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcm9wZXJ0eVJlbGF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbnNKU09OID0gcHJvcGVydHlSZWxhdGlvbnM7IC8vL1xuXG4gIHByb3BlcnR5UmVsYXRpb25zID0gcHJvcGVydHlSZWxhdGlvbnNKU09OLm1hcCgocHJvcGVydHlSZWxhdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJvcGVydHlSZWxhdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gUHJvcGVydHlSZWxhdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lVG9OYW1lSlNPTihuYW1lKSB7XG4gIGNvbnN0IG5hbWVKU09OID0gbmFtZTsgIC8vL1xuXG4gIHJldHVybiBuYW1lSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Ub1Rlcm1KU09OKHRlcm0pIHtcbiAgY29uc3QgdGVybUpTT04gPSAodGVybSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgdGVybS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHRlcm1KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVRvVHlwZUpTT04odHlwZSkge1xuICBjb25zdCB0eXBlSlNPTiA9ICh0eXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICB0eXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gdHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZVRvRnJhbWVKU09OKGZyYW1lKSB7XG4gIGNvbnN0IGZyYW1lSlNPTiA9IChmcmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIGZyYW1lSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsVG9MYWJlbEpTT04obGFiZWwpIHtcbiAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgcmV0dXJuIGxhYmVsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRUb05lZ2F0ZWRKU09OKG5lZ2F0ZWQpIHtcbiAgY29uc3QgbmVnYXRlZEpTT04gPSBuZWdhdGVkOyAgLy8vXG5cbiAgcmV0dXJuIG5lZ2F0ZWRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVUb01ldGFUeXBlSlNPTihtZXRhVHlwZSkge1xuICBjb25zdCBtZXRhVHlwZUpTT04gPSAobWV0YVR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhVHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBtZXRhVHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04ocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2UudG9KU09OKCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04oc3RhdGVtZW50KSB7XG4gIGNvbnN0IHN0YXRlbWVudEpTT04gPSAoc3RhdGVtZW50ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudC50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gc3RhdGVtZW50SlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTihkZWR1Y3Rpb24pIHtcbiAgY29uc3QgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvbi50b0pTT04oKTtcblxuICByZXR1cm4gZGVkdWN0aW9uSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTihzaWduYXR1cmUpIHtcbiAgY29uc3Qgc2lnbmF0dXJlSlNPTiA9IChzaWduYXR1cmUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBzaWduYXR1cmVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllclRvSWRlbnRpZmllckpTT04oaWRlbnRpZmllcikge1xuICBjb25zdCBpZGVudGlmaWVySlNPTiA9IGlkZW50aWZpZXI7ICAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllckpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTihjb25jbHVzaW9uKSB7XG4gIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbi50b0pTT04oKTtcblxuICByZXR1cm4gY29uY2x1c2lvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OKHByb3Zpc2lvbmFsKSB7XG4gIGNvbnN0IHByb3Zpc2lvbmFsSlNPTiA9IHByb3Zpc2lvbmFsOyAgLy8vXG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTihtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04oKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OKHByb2NlZHVyZUNhbGwpIHtcbiAgY29uc3QgcHJvY2VkdXJlQ2FsbEpTT04gPSAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbC50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OKHByb2NlZHVyZVJlZmVyZW5jZSkge1xuICBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2VKU09OID0gcHJvY2VkdXJlUmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2VKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcykge1xuICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtcy5tYXAoKHRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgICByZXR1cm4gdGVybUpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc1RvVHlwZXNKU09OKHR5cGVzKSB7XG4gIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04oKTtcblxuICAgIHJldHVybiB0eXBlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzVG9SdWxlc0pTT04ocnVsZXMpIHtcbiAgY29uc3QgcnVsZXNKU09OID0gcnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHJ1bGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9MYWJlbHNKU09OKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgIHJldHVybiBsYWJlbEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcykge1xuICBjb25zdCBmcmFtZXNKU09OID0gZnJhbWVzLm1hcCgoZnJhbWUpID0+IHtcbiAgICBjb25zdCBmcmFtZUpTT04gPSBmcmFtZS50b0pTT04oKTtcblxuICAgIHJldHVybiBmcmFtZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBmcmFtZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zVG9BeGlvbXNKU09OKGF4aW9tcykge1xuICBjb25zdCBheGlvbXNKU09OID0gYXhpb21zLm1hcCgoYXhpb20pID0+IHtcbiAgICBjb25zdCBheGlvbUpTT04gPSBheGlvbS50b0pTT04oKTtcblxuICAgIHJldHVybiBheGlvbUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHJldHVybiB0aGVvcmVtSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKGh5cG90aGVzZXMpIHtcbiAgY29uc3QgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzLm1hcCgoaHlwb3RoZXNpcykgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXNKU09OID0gaHlwb3RoZXNpcy50b0pTT04oKTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04oc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cGVyVHlwZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVySlNPTiA9IHBhcmFtZXRlci50b0pTT04oKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJKU09OO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTihwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlKU09OID0gcHJvcGVydHkudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlKU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTihqdWRnZW1lbnRzKSB7XG4gIGNvbnN0IGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50cy5tYXAoKGp1ZGdlbWVudCkgPT4ge1xuICAgIGNvbnN0IGp1ZGdlbWVudEpTT04gPSBqdWRnZW1lbnQudG9KU09OKCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGp1ZGdlbWVudHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04oZXF1YWxpdGllcykge1xuICBjb25zdCBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXMubWFwKChlcXVhbGl0eSkgPT4ge1xuICAgIGNvbnN0IGVxdWFsaXR5SlNPTiA9IGVxdWFsaXR5LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04oc3RhdGVtZW50cykge1xuICBjb25zdCBzdGF0ZW1lbnRzSlNPTiA9IHN0YXRlbWVudHMubWFwKChzdGF0ZW1lbnQpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OKGFzc2VydGlvbnMpIHtcbiAgY29uc3QgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zLm1hcCgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzZXJ0aW9uSlNPTiA9IGFzc2VydGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXNzZXJ0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTihyZWZlcmVuY2VzKSB7XG4gIGNvbnN0IHJlZmVyZW5jZXNKU09OID0gcmVmZXJlbmNlcy5tYXAoKHJlZmVyZW5jZSkgPT4ge1xuICAgIGNvbnN0IHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTihjb25qZWN0dXJlcykge1xuICBjb25zdCBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICBjb25zdCBjb25qZWN0dXJlSlNPTiA9IGNvbmplY3R1cmUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OKGNvbWJpbmF0b3JzKSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JKU09OID0gY29tYmluYXRvci50b0pTT04oKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ySlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04oYXNzdW1wdGlvbnMpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnMubWFwKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvbkpTT04gPSBhc3N1bXB0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKGNvbnN0cnVjdG9ycykge1xuICBjb25zdCBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvckpTT047XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKG1ldGF0aGVvcmVtcykge1xuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUpTT04gPSBtZXRhdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OKHR5cGVQcmVmaXhlcykge1xuICBjb25zdCB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzLm1hcCgodHlwZVByZWZpeCkgPT4ge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhKU09OID0gdHlwZVByZWZpeC50b0pTT04oKTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTihzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucy5tYXAoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04obWV0YXZhcmlhYmxlcykge1xuICBjb25zdCBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25zVG9Qcm9wZXJ0eVJlbGF0aW9uc0pTT04ocHJvcGVydHlSZWxhdGlvbnMpIHtcbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbnNKU09OID0gcHJvcGVydHlSZWxhdGlvbnMubWFwKChwcm9wZXJ0eVJlbGF0aW9uKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbkpTT04gPSBwcm9wZXJ0eVJlbGF0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbnNKU09OO1xufVxuXG5mdW5jdGlvbiBmaW5kTWV0YVR5cGVCeU5hbWUobmFtZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhVHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZnVuY3Rpb24gZmluZFR5cGVCeU5hbWVBbmRQcmVmaXhOYW1lKG5hbWUsIHByZWZpeE5hbWUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gKHByZWZpeE5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeE5hbWV9JHtuYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuIl0sIm5hbWVzIjpbImFzc2VydGlvbnNGcm9tSlNPTiIsImFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OIiwiYXNzdW1wdGlvbnNGcm9tSlNPTiIsImFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04iLCJheGlvbXNGcm9tSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJlcXVhbGl0aWVzRnJvbUpTT04iLCJlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTiIsImZyYW1lRnJvbUpTT04iLCJmcmFtZVRvRnJhbWVKU09OIiwiZnJhbWVzRnJvbUpTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJoeXBvdGhlc2VzRnJvbUpTT04iLCJoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTiIsImlkZW50aWZpZXJGcm9tSlNPTiIsImlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OIiwianVkZ2VtZW50c0Zyb21KU09OIiwianVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04iLCJsYWJlbEZyb21KU09OIiwibGFiZWxUb0xhYmVsSlNPTiIsImxhYmVsc0Zyb21KU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhVHlwZUZyb21KU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsIm5hbWVGcm9tSlNPTiIsIm5hbWVUb05hbWVKU09OIiwibmVnYXRlZEZyb21KU09OIiwibmVnYXRlZFRvTmVnYXRlZEpTT04iLCJwYXJhbWV0ZXJzRnJvbUpTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwicHJvY2VkdXJlQ2FsbEZyb21KU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInByb3BlcnRpZXNGcm9tSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwicHJvcGVydHlSZWxhdGlvbnNGcm9tSlNPTiIsInByb3BlcnR5UmVsYXRpb25zVG9Qcm9wZXJ0eVJlbGF0aW9uc0pTT04iLCJwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIiwicmVmZXJlbmNlRnJvbUpTT04iLCJyZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04iLCJyZWZlcmVuY2VzRnJvbUpTT04iLCJyZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJydWxlc1RvUnVsZXNKU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsInN0YXRlbWVudHNGcm9tSlNPTiIsInN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidHlwZUZyb21KU09OIiwidHlwZVByZWZpeGVzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInR5cGVzRnJvbUpTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwianNvbiIsImNvbnRleHQiLCJuYW1lIiwibmFtZUpTT04iLCJ0ZXJtIiwidGVybUpTT04iLCJUZXJtIiwiZWxlbWVudHMiLCJmcm9tSlNPTiIsInR5cGUiLCJwcmVmaXhOYW1lIiwiZmluZFR5cGVCeU5hbWVBbmRQcmVmaXhOYW1lIiwiZnJhbWUiLCJmcmFtZUpTT04iLCJGcmFtZSIsIm5lZ2F0ZWQiLCJtZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TmFtZSIsInN0YXRlbWVudCIsIlN0YXRlbWVudCIsInN0YXRlbWVudEpTT04iLCJkZWR1Y3Rpb24iLCJEZWR1Y3Rpb24iLCJkZWR1Y3Rpb25KU09OIiwic2lnbmF0dXJlIiwiU2lnbmF0dXJlIiwic2lnbmF0dXJlSlNPTiIsInJlZmVyZW5jZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZUpTT04iLCJpZGVudGlmaWVyIiwiaWRlbnRpZmllckpTT04iLCJjb25jbHVzaW9uIiwiQ29uY2x1c2lvbiIsImNvbmNsdXNpb25KU09OIiwibWV0YXZhcmlhYmxlIiwiTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlSlNPTiIsInByb2NlZHVyZUNhbGwiLCJQcm9jZWR1cmVDYWxsIiwicHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJQcm9jZWR1cmVSZWZlcmVuY2UiLCJwcm9jZWR1cmVSZWZlcmVuY2VKU09OIiwidHlwZXMiLCJ0eXBlc0pTT04iLCJUeXBlIiwiZm9yRWFjaCIsInR5cGVKU09OIiwicHVzaCIsInRlcm1zIiwidGVybXNKU09OIiwibWFwIiwicnVsZXMiLCJSdWxlIiwicnVsZXNKU09OIiwicnVsZUpTT04iLCJydWxlIiwibGFiZWwiLCJMYWJlbCIsImxhYmVsSlNPTiIsImZyYW1lcyIsImZyYW1lc0pTT04iLCJsYWJlbHMiLCJsYWJlbHNKU09OIiwiYXhpb21zIiwiQXhpb20iLCJheGlvbXNKU09OIiwiYXhpb21KU09OIiwiYXhpb20iLCJwcmVtaXNlcyIsIlByZW1pc2UiLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlSlNPTiIsInByZW1pc2UiLCJ0aGVvcmVtcyIsIlRoZW9yZW0iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtSlNPTiIsInRoZW9yZW0iLCJ2YXJpYWJsZXMiLCJWYXJpYWJsZSIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZUpTT04iLCJ2YXJpYWJsZSIsImVxdWFsaXRpZXMiLCJFcXVhbGl0eSIsImVxdWFsaXRpZXNKU09OIiwiZXF1YWxpdHlKU09OIiwiZXF1YWxpdHkiLCJwcm9wZXJ0aWVzIiwiUHJvcGVydHkiLCJwcm9wZXJ0aWVzSlNPTiIsInByb3BlcnR5SlNPTiIsInByb3BlcnR5Iiwic3VwZXJUeXBlcyIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlSlNPTiIsInN1cGVyVHlwZSIsImh5cG90aGVzZXMiLCJIeXBvdGhlc2lzIiwiaHlwb3RoZXNlc0pTT04iLCJoeXBvdGhlc2lzSlNPTiIsImh5cG90aGVzaXMiLCJwYXJhbWV0ZXJzIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJKU09OIiwicGFyYW1ldGVyIiwianVkZ2VtZW50cyIsIkp1ZGdlbWVudCIsImp1ZGdlbWVudHNKU09OIiwianVkZ2VtZW50SlNPTiIsImp1ZGdlbWVudCIsInN0YXRlbWVudHMiLCJzdGF0ZW1lbnRzSlNPTiIsImFzc2VydGlvbnMiLCJUeXBlQXNzZXJ0aW9uIiwiRGVmaW5lZEFzc2VydGlvbiIsIlByb3BlcnR5QXNzZXJ0aW9uIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJDb250YWluZWRBc3NlcnRpb24iLCJhc3NlcnRpb25zSlNPTiIsImFzc2VydGlvbkpTT04iLCJhc3NlcnRpb24iLCJyZWZlcmVuY2VzIiwicmVmZXJlbmNlc0pTT04iLCJjb25qZWN0dXJlcyIsIkNvbmplY3R1cmUiLCJjb25qZWN0dXJlc0pTT04iLCJjb25qZWN0dXJlSlNPTiIsImNvbmplY3R1cmUiLCJjb21iaW5hdG9ycyIsIkNvbWJpbmF0b3IiLCJjb21iaW5hdG9yc0pTT04iLCJjb21iaW5hdG9ySlNPTiIsImNvbWJpbmF0b3IiLCJhc3N1bXB0aW9ucyIsIkFzc3VtcHRpb24iLCJhc3N1bXB0aW9uc0pTT04iLCJhc3N1bXB0aW9uSlNPTiIsImFzc3VtcHRpb24iLCJ0eXBlUHJlZml4ZXMiLCJUeXBlUHJlZml4IiwidHlwZVByZWZpeGVzSlNPTiIsInR5cGVQcmVmaXhKU09OIiwidHlwZVByZWZpeCIsImNvbnN0cnVjdG9ycyIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsImNvbnN0cnVjdG9yIiwibWV0YXRoZW9yZW1zIiwiTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1KU09OIiwibWV0YXRoZW9yZW0iLCJzdXBwb3NpdGlvbnMiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbkpTT04iLCJzdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25zSlNPTiIsIlN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkpTT04iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlc0pTT04iLCJyZWxlYXNlQ29udGV4dCIsImVtcGhlbWVyYWxDb250ZXh0IiwiRXBoZW1lcmFsQ29udGV4dCIsInByb3BlcnR5UmVsYXRpb25zIiwiUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb25zSlNPTiIsInByb3BlcnR5UmVsYXRpb25KU09OIiwicHJvcGVydHlSZWxhdGlvbiIsInRvSlNPTiIsIm5lZ2F0ZWRKU09OIiwibWV0YVR5cGVKU09OIiwicHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbEpTT04iLCJtZXRhVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQThkZ0JBO2VBQUFBOztRQXdlQUM7ZUFBQUE7O1FBbmFBQztlQUFBQTs7UUEyY0FDO2VBQUFBOztRQS9yQkFDO2VBQUFBOztRQXlpQkFDO2VBQUFBOztRQXJVQUM7ZUFBQUE7O1FBaWRBQztlQUFBQTs7UUFyMEJBQztlQUFBQTs7UUF1bUJBQztlQUFB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