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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEVwaGVtZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZXBoZW1lcmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbmFtZSB9ID0ganNvbjtcblxuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICBuYW1lID0gbmFtZUpTT047ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICAgIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cztcblxuICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAganNvbiA9IHR5cGU7ICAvLy9cblxuICAgIGNvbnN0IHsgbmFtZSwgcHJlZml4TmFtZSB9ID0ganNvbjtcblxuICAgIHR5cGUgPSBmaW5kVHlwZUJ5TmFtZUFuZFByZWZpeE5hbWUobmFtZSwgcHJlZml4TmFtZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBmcmFtZSB9ID0ganNvbjtcblxuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBmcmFtZUpTT04gPSBmcmFtZTsgIC8vL1xuXG4gICAganNvbiA9IGZyYW1lSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHM7XG5cbiAgICBmcmFtZSA9IEZyYW1lLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBuZWdhdGVkIH0gPSBqc29uO1xuXG4gIHJldHVybiBuZWdhdGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSBtZXRhVHlwZTsgIC8vL1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgbWV0YVR5cGUgPSBmaW5kTWV0YVR5cGVCeU5hbWUobmFtZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN0YXRlbWVudCA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICBqc29uID0gc3RhdGVtZW50SlNPTjsgLy8vXG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBkZWR1Y3Rpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uOyAgLy8vXG5cbiAganNvbiA9IGRlZHVjdGlvbkpTT047ICAvLy9cblxuICBkZWR1Y3Rpb24gPSBEZWR1Y3Rpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc2lnbmF0dXJlID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc2lnbmF0dXJlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTaWduYXR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHNpZ25hdHVyZUpTT04gPSBzaWduYXR1cmU7ICAvLy9cblxuICAgIGpzb24gPSBzaWduYXR1cmVKU09OOyAvLy9cblxuICAgIHNpZ25hdHVyZSA9IFNpZ25hdHVyZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJlZmVyZW5jZSB9ID0ganNvbjtcblxuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2U7ICAvLy9cblxuICBqc29uID0gcmVmZXJlbmNlSlNPTjsgLy8vXG5cbiAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBpZGVudGlmaWVyIH0gPSBqc29uO1xuXG4gIGNvbnN0IGlkZW50aWZpZXJKU09OID0gaWRlbnRpZmllcjsgIC8vL1xuXG4gIGlkZW50aWZpZXIgPSBpZGVudGlmaWVySlNPTjsgIC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gIGpzb24gPSBtZXRhdmFyaWFibGVKU09OOyAvLy9cblxuICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb2NlZHVyZUNhbGwgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGw7ICAvLy9cblxuICAgIGpzb24gPSBwcm9jZWR1cmVDYWxsSlNPTjsgLy8vXG5cbiAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbFR5cGVOYW1lRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IG5vbWluYWxUeXBlTmFtZSB9ID0ganNvbjtcblxuICByZXR1cm4gbm9taW5hbFR5cGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcm9jZWR1cmVSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2VKU09OID0gcHJvY2VkdXJlUmVmZXJlbmNlOyAgLy8vXG5cbiAganNvbiA9IHByb2NlZHVyZVJlZmVyZW5jZUpTT047ICAvLy9cblxuICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBQcm9jZWR1cmVSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzRnJvbUpTT04oanNvbiwgdHlwZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyB0eXBlczogdHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZSB9ID0gZWxlbWVudHM7XG5cbiAgdHlwZXNKU09OLmZvckVhY2goKHR5cGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0ZXJtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0ZXJtc0pTT04gPSB0ZXJtczsgLy8vXG5cbiAgdGVybXMgPSB0ZXJtc0pTT04ubWFwKCh0ZXJtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBydWxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFJ1bGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBydWxlc0pTT04gPSBydWxlczsgLy8vXG5cbiAgcnVsZXMgPSBydWxlc0pTT04ubWFwKChydWxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBydWxlSlNPTiwgIC8vL1xuICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbCB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbGFiZWxKU09OID0gbGFiZWw7ICAvLy9cblxuICBqc29uID0gbGFiZWxKU09OOyAvLy9cblxuICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZnJhbWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzLFxuICAgIGZyYW1lc0pTT04gPSBmcmFtZXM7IC8vL1xuXG4gIGZyYW1lcyA9IGZyYW1lc0pTT04ubWFwKChmcmFtZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gZnJhbWVKU09OLCAgLy8vXG4gICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGF4aW9tcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEF4aW9tIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXhpb21zSlNPTiA9IGF4aW9tczsgLy8vXG5cbiAgYXhpb21zID0gYXhpb21zSlNPTi5tYXAoKGF4aW9tSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBheGlvbUpTT04sICAvLy9cbiAgICAgICAgICBheGlvbSA9IEF4aW9tLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9KTtcblxuICByZXR1cm4gYXhpb21zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByZW1pc2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzOyAgLy8vXG5cbiAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcmVtaXNlSlNPTiwgLy8vXG4gICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVGhlb3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zOyAvLy9cblxuICB0aGVvcmVtcyA9IHRoZW9yZW1zSlNPTi5tYXAoKHRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXM7IC8vL1xuXG4gIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0pTT04ubWFwKCh2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGVxdWFsaXRpZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBFcXVhbGl0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGVxdWFsaXRpZXNKU09OID0gZXF1YWxpdGllczsgLy8vXG5cbiAgZXF1YWxpdGllcyA9IGVxdWFsaXRpZXNKU09OLm1hcCgoZXF1YWxpdHlKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGVxdWFsaXR5SlNPTiwgIC8vL1xuICAgICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH0pO1xuXG4gIHJldHVybiBlcXVhbGl0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvcGVydGllcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByb3BlcnR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzOyAvLy9cblxuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04ubWFwKChwcm9wZXJ0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJvcGVydHlKU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IHN1cGVyVHlwZXM6IHN1cGVyVHlwZXNKU09OIH0gPSBqc29uO1xuXG4gIGNvbnN0IHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTi5tYXAoKHN1cGVyVHlwZUpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgICAgICAgIHsgbmFtZSwgcHJlZml4TmFtZSB9ID0ganNvbixcbiAgICAgICAgICAgICAgICB0eXBlID0gZmluZFR5cGVCeU5hbWVBbmRQcmVmaXhOYW1lKG5hbWUsIHByZWZpeE5hbWUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdGhlc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBoeXBvdGhlc2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgSHlwb3RoZXNpcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlczsgIC8vL1xuXG4gIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzSlNPTi5tYXAoKGh5cG90aGVzaXNKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGh5cG90aGVzaXNKU09OLCAvLy9cbiAgICAgICAgICBoeXBvdGhlc2lzID0gSHlwb3RoZXNpcy5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9KTtcblxuICByZXR1cm4gaHlwb3RoZXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHBhcmFtZXRlcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnM7IC8vL1xuXG4gIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzSlNPTi5tYXAoKHBhcmFtZXRlckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcGFyYW1ldGVySlNPTiwgIC8vL1xuICAgICAgICAgIHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsganVkZ2VtZW50cyB9ID0ganNvbjtcblxuICBjb25zdCB7IEp1ZGdlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50czsgLy8vXG5cbiAganVkZ2VtZW50cyA9IGp1ZGdlbWVudHNKU09OLm1hcCgoanVkZ2VtZW50SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBqdWRnZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganVkZ2VtZW50ID0gSnVkZ2VtZW50LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGp1ZGdlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdGF0ZW1lbnRzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3RhdGVtZW50c0pTT04gPSBzdGF0ZW1lbnRzOyAvLy9cblxuICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0pTT04ubWFwKChzdGF0ZW1lbnRKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGFzc2VydGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlQXNzZXJ0aW9uLCBEZWZpbmVkQXNzZXJ0aW9uLCBQcm9wZXJ0eUFzc2VydGlvbiwgU3VicHJvb2ZBc3NlcnRpb24sIFNhdGlzZmllc0Fzc2VydGlvbiwgQ29udGFpbmVkQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zOyAvLy9cblxuICBhc3NlcnRpb25zID0gYXNzZXJ0aW9uc0pTT04ubWFwKChhc3NlcnRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGFzc2VydGlvbkpTT04sICAvLy9cbiAgICAgICAgICBhc3NlcnRpb24gPSBUeXBlQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIERlZmluZWRBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgUHJvcGVydHlBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgU3VicHJvb2ZBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgU2F0aXNmaWVzQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIENvbnRhaW5lZEFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH0pO1xuXG4gIHJldHVybiBhc3NlcnRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcmVmZXJlbmNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJlZmVyZW5jZXNKU09OID0gcmVmZXJlbmNlczsgLy8vXG5cbiAgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZXNKU09OLm1hcCgocmVmZXJlbmNlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSByZWZlcmVuY2VKU09OLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uamVjdHVyZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25qZWN0dXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXM7IC8vL1xuXG4gIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLm1hcCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uamVjdHVyZUpTT04sICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9KTtcblxuICByZXR1cm4gY29uamVjdHVyZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29tYmluYXRvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnM7IC8vL1xuXG4gIGNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNKU09OLm1hcCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29tYmluYXRvckpTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXNzdW1wdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBBc3N1bXB0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnM7IC8vL1xuXG4gIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNKU09OLm1hcCgoYXNzdW1wdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXNzdW1wdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uID0gQXNzdW1wdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4ZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHR5cGVQcmVmaXhlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGVQcmVmaXggfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzOyAvLy9cblxuICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLm1hcCgodHlwZVByZWZpeEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZVByZWZpeEpTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ID0gVHlwZVByZWZpeC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25zdHJ1Y3RvcnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnM7IC8vL1xuXG4gIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04ubWFwKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXRoZW9yZW1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zOyAvLy9cblxuICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLm1hcCgobWV0YXRoZW9yZW1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN1cHBvc2l0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3Vic3RpdHV0aW9ucyA9IFtdIH0gPSBqc29uOyAgLy8vXG5cbiAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnMsICAvLy9cbiAgICAgICAgU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uOyAvLy9cblxuICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04ubWFwKChzdWJzdGl0dXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBTdWJzdGl0dXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXM7IC8vL1xuXG4gIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTi5tYXAoKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSBjb250ZXh0O1xuXG4gICh7Y29udGV4dH0gPSBqc29uKTtcblxuICBqc29uID0gY29udGV4dDsgLy8vXG5cbiAgY29udGV4dCA9IHJlbGVhc2VDb250ZXh0OyAvLy9cblxuICBjb25zdCBlbXBoZW1lcmFsQ29udGV4dCA9IEVwaGVtZXJhbENvbnRleHQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGVtcGhlbWVyYWxDb250ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb3BlcnR5UmVsYXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHlSZWxhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb3BlcnR5UmVsYXRpb25zSlNPTiA9IHByb3BlcnR5UmVsYXRpb25zOyAvLy9cblxuICBwcm9wZXJ0eVJlbGF0aW9ucyA9IHByb3BlcnR5UmVsYXRpb25zSlNPTi5tYXAoKHByb3BlcnR5UmVsYXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByb3BlcnR5UmVsYXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IFByb3BlcnR5UmVsYXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZVRvTmFtZUpTT04obmFtZSkge1xuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICByZXR1cm4gbmFtZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtVG9UZXJtSlNPTih0ZXJtKSB7XG4gIGNvbnN0IHRlcm1KU09OID0gKHRlcm0gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHRlcm0udG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0ZXJtSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVUb1R5cGVKU09OKHR5cGUpIHtcbiAgY29uc3QgdHlwZUpTT04gPSAodHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgdHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVUb0ZyYW1lSlNPTihmcmFtZSkge1xuICBjb25zdCBmcmFtZUpTT04gPSAoZnJhbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICBmcmFtZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBmcmFtZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbFRvTGFiZWxKU09OKGxhYmVsKSB7XG4gIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gIHJldHVybiBsYWJlbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVG9OZWdhdGVkSlNPTihuZWdhdGVkKSB7XG4gIGNvbnN0IG5lZ2F0ZWRKU09OID0gbmVnYXRlZDsgIC8vL1xuXG4gIHJldHVybiBuZWdhdGVkSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04obWV0YVR5cGUpIHtcbiAgY29uc3QgbWV0YVR5cGVKU09OID0gKG1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gbWV0YVR5cGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlVG9SZWZlcmVuY2VKU09OKHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VKU09OID0gcmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gIHJldHVybiByZWZlcmVuY2VKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHN0YXRlbWVudCkge1xuICBjb25zdCBzdGF0ZW1lbnRKU09OID0gKHN0YXRlbWVudCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnQudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHN0YXRlbWVudEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04oZGVkdWN0aW9uKSB7XG4gIGNvbnN0IGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04oc2lnbmF0dXJlKSB7XG4gIGNvbnN0IHNpZ25hdHVyZUpTT04gPSAoc2lnbmF0dXJlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gc2lnbmF0dXJlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OKGlkZW50aWZpZXIpIHtcbiAgY29uc3QgaWRlbnRpZmllckpTT04gPSBpZGVudGlmaWVyOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXJKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04oY29uY2x1c2lvbikge1xuICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb24udG9KU09OKCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTihwcm92aXNpb25hbCkge1xuICBjb25zdCBwcm92aXNpb25hbEpTT04gPSBwcm92aXNpb25hbDsgIC8vL1xuXG4gIHJldHVybiBwcm92aXNpb25hbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04obWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTihwcm9jZWR1cmVDYWxsKSB7XG4gIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gKHByb2NlZHVyZUNhbGwgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZHVyZUNhbGwudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbWluYWxUeXBlTmFtZVRvTm9taW5hbFR5cGVOYW1lSlNPTihub21pbmFsVHlwZU5hbWUpIHtcbiAgY29uc3Qgbm9taW5hbFR5cGVOYW1lSlNPTiA9IG5vbWluYWxUeXBlTmFtZTsgIC8vL1xuXG4gIHJldHVybiBub21pbmFsVHlwZU5hbWVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OKHByb2NlZHVyZVJlZmVyZW5jZSkge1xuICBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2VKU09OID0gcHJvY2VkdXJlUmVmZXJlbmNlLnRvSlNPTigpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2VKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcykge1xuICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtcy5tYXAoKHRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm0udG9KU09OKCk7XG5cbiAgICByZXR1cm4gdGVybUpTT047XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc1RvVHlwZXNKU09OKHR5cGVzKSB7XG4gIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04oKTtcblxuICAgIHJldHVybiB0eXBlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzVG9SdWxlc0pTT04ocnVsZXMpIHtcbiAgY29uc3QgcnVsZXNKU09OID0gcnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHJ1bGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9MYWJlbHNKU09OKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgIHJldHVybiBsYWJlbEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBsYWJlbHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcykge1xuICBjb25zdCBmcmFtZXNKU09OID0gZnJhbWVzLm1hcCgoZnJhbWUpID0+IHtcbiAgICBjb25zdCBmcmFtZUpTT04gPSBmcmFtZS50b0pTT04oKTtcblxuICAgIHJldHVybiBmcmFtZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBmcmFtZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zVG9BeGlvbXNKU09OKGF4aW9tcykge1xuICBjb25zdCBheGlvbXNKU09OID0gYXhpb21zLm1hcCgoYXhpb20pID0+IHtcbiAgICBjb25zdCBheGlvbUpTT04gPSBheGlvbS50b0pTT04oKTtcblxuICAgIHJldHVybiBheGlvbUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHJldHVybiB0aGVvcmVtSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKGh5cG90aGVzZXMpIHtcbiAgY29uc3QgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzLm1hcCgoaHlwb3RoZXNpcykgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXNKU09OID0gaHlwb3RoZXNpcy50b0pTT04oKTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04oc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cGVyVHlwZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVySlNPTiA9IHBhcmFtZXRlci50b0pTT04oKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJKU09OO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTihwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlKU09OID0gcHJvcGVydHkudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlKU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTihqdWRnZW1lbnRzKSB7XG4gIGNvbnN0IGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50cy5tYXAoKGp1ZGdlbWVudCkgPT4ge1xuICAgIGNvbnN0IGp1ZGdlbWVudEpTT04gPSBqdWRnZW1lbnQudG9KU09OKCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGp1ZGdlbWVudHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04oZXF1YWxpdGllcykge1xuICBjb25zdCBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXMubWFwKChlcXVhbGl0eSkgPT4ge1xuICAgIGNvbnN0IGVxdWFsaXR5SlNPTiA9IGVxdWFsaXR5LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04oc3RhdGVtZW50cykge1xuICBjb25zdCBzdGF0ZW1lbnRzSlNPTiA9IHN0YXRlbWVudHMubWFwKChzdGF0ZW1lbnQpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OKGFzc2VydGlvbnMpIHtcbiAgY29uc3QgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zLm1hcCgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzZXJ0aW9uSlNPTiA9IGFzc2VydGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXNzZXJ0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTihyZWZlcmVuY2VzKSB7XG4gIGNvbnN0IHJlZmVyZW5jZXNKU09OID0gcmVmZXJlbmNlcy5tYXAoKHJlZmVyZW5jZSkgPT4ge1xuICAgIGNvbnN0IHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTihjb25qZWN0dXJlcykge1xuICBjb25zdCBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICBjb25zdCBjb25qZWN0dXJlSlNPTiA9IGNvbmplY3R1cmUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OKGNvbWJpbmF0b3JzKSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JKU09OID0gY29tYmluYXRvci50b0pTT04oKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ySlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04oYXNzdW1wdGlvbnMpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnMubWFwKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvbkpTT04gPSBhc3N1bXB0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKGNvbnN0cnVjdG9ycykge1xuICBjb25zdCBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvckpTT047XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKG1ldGF0aGVvcmVtcykge1xuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUpTT04gPSBtZXRhdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdGhlb3JlbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OKHR5cGVQcmVmaXhlcykge1xuICBjb25zdCB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzLm1hcCgodHlwZVByZWZpeCkgPT4ge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhKU09OID0gdHlwZVByZWZpeC50b0pTT04oKTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTihzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucy5tYXAoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04obWV0YXZhcmlhYmxlcykge1xuICBjb25zdCBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25zVG9Qcm9wZXJ0eVJlbGF0aW9uc0pTT04ocHJvcGVydHlSZWxhdGlvbnMpIHtcbiAgY29uc3QgcHJvcGVydHlSZWxhdGlvbnNKU09OID0gcHJvcGVydHlSZWxhdGlvbnMubWFwKChwcm9wZXJ0eVJlbGF0aW9uKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbkpTT04gPSBwcm9wZXJ0eVJlbGF0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbnNKU09OO1xufVxuXG5mdW5jdGlvbiBmaW5kTWV0YVR5cGVCeU5hbWUobmFtZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhVHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZnVuY3Rpb24gZmluZFR5cGVCeU5hbWVBbmRQcmVmaXhOYW1lKG5hbWUsIHByZWZpeE5hbWUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gKHByZWZpeE5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeE5hbWV9JHtuYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuIl0sIm5hbWVzIjpbImFzc2VydGlvbnNGcm9tSlNPTiIsImFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OIiwiYXNzdW1wdGlvbnNGcm9tSlNPTiIsImFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04iLCJheGlvbXNGcm9tSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJlcXVhbGl0aWVzRnJvbUpTT04iLCJlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTiIsImZyYW1lRnJvbUpTT04iLCJmcmFtZVRvRnJhbWVKU09OIiwiZnJhbWVzRnJvbUpTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJoeXBvdGhlc2VzRnJvbUpTT04iLCJoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTiIsImlkZW50aWZpZXJGcm9tSlNPTiIsImlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OIiwianVkZ2VtZW50c0Zyb21KU09OIiwianVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04iLCJsYWJlbEZyb21KU09OIiwibGFiZWxUb0xhYmVsSlNPTiIsImxhYmVsc0Zyb21KU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJtZXRhVHlwZUZyb21KU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsIm5hbWVGcm9tSlNPTiIsIm5hbWVUb05hbWVKU09OIiwibmVnYXRlZEZyb21KU09OIiwibmVnYXRlZFRvTmVnYXRlZEpTT04iLCJub21pbmFsVHlwZU5hbWVGcm9tSlNPTiIsIm5vbWluYWxUeXBlTmFtZVRvTm9taW5hbFR5cGVOYW1lSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJwcm9wZXJ0eVJlbGF0aW9uc0Zyb21KU09OIiwicHJvcGVydHlSZWxhdGlvbnNUb1Byb3BlcnR5UmVsYXRpb25zSlNPTiIsInByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04iLCJyZWZlcmVuY2VGcm9tSlNPTiIsInJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTiIsInJlZmVyZW5jZXNGcm9tSlNPTiIsInJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OIiwicnVsZXNGcm9tSlNPTiIsInJ1bGVzVG9SdWxlc0pTT04iLCJzaWduYXR1cmVGcm9tSlNPTiIsInNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50c0Zyb21KU09OIiwic3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiIsInN1cGVyVHlwZXNGcm9tSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJ0ZXJtRnJvbUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsInRlcm1zRnJvbUpTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwidGhlb3JlbXNGcm9tSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ0eXBlRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNGcm9tSlNPTiIsInR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTiIsInR5cGVUb1R5cGVKU09OIiwidHlwZXNGcm9tSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImxlbW1hcyIsIm1ldGFMZW1tYXMiLCJqc29uIiwiY29udGV4dCIsIm5hbWUiLCJuYW1lSlNPTiIsInRlcm0iLCJ0ZXJtSlNPTiIsIlRlcm0iLCJlbGVtZW50cyIsImZyb21KU09OIiwidHlwZSIsInByZWZpeE5hbWUiLCJmaW5kVHlwZUJ5TmFtZUFuZFByZWZpeE5hbWUiLCJmcmFtZSIsImZyYW1lSlNPTiIsIkZyYW1lIiwibmVnYXRlZCIsIm1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlOYW1lIiwic3RhdGVtZW50IiwiU3RhdGVtZW50Iiwic3RhdGVtZW50SlNPTiIsImRlZHVjdGlvbiIsIkRlZHVjdGlvbiIsImRlZHVjdGlvbkpTT04iLCJzaWduYXR1cmUiLCJTaWduYXR1cmUiLCJzaWduYXR1cmVKU09OIiwicmVmZXJlbmNlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlSlNPTiIsImlkZW50aWZpZXIiLCJpZGVudGlmaWVySlNPTiIsImNvbmNsdXNpb24iLCJDb25jbHVzaW9uIiwiY29uY2x1c2lvbkpTT04iLCJtZXRhdmFyaWFibGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVKU09OIiwicHJvY2VkdXJlQ2FsbCIsIlByb2NlZHVyZUNhbGwiLCJwcm9jZWR1cmVDYWxsSlNPTiIsIm5vbWluYWxUeXBlTmFtZSIsInByb2NlZHVyZVJlZmVyZW5jZSIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZVJlZmVyZW5jZUpTT04iLCJ0eXBlcyIsInR5cGVzSlNPTiIsIlR5cGUiLCJmb3JFYWNoIiwidHlwZUpTT04iLCJwdXNoIiwidGVybXMiLCJ0ZXJtc0pTT04iLCJtYXAiLCJydWxlcyIsIlJ1bGUiLCJydWxlc0pTT04iLCJydWxlSlNPTiIsInJ1bGUiLCJsYWJlbCIsIkxhYmVsIiwibGFiZWxKU09OIiwiZnJhbWVzIiwiZnJhbWVzSlNPTiIsImxhYmVscyIsImxhYmVsc0pTT04iLCJheGlvbXMiLCJBeGlvbSIsImF4aW9tc0pTT04iLCJheGlvbUpTT04iLCJheGlvbSIsInByZW1pc2VzIiwiUHJlbWlzZSIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwicHJlbWlzZSIsInRoZW9yZW1zIiwiVGhlb3JlbSIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1KU09OIiwidGhlb3JlbSIsInZhcmlhYmxlcyIsIlZhcmlhYmxlIiwidmFyaWFibGVzSlNPTiIsInZhcmlhYmxlSlNPTiIsInZhcmlhYmxlIiwiZXF1YWxpdGllcyIsIkVxdWFsaXR5IiwiZXF1YWxpdGllc0pTT04iLCJlcXVhbGl0eUpTT04iLCJlcXVhbGl0eSIsInByb3BlcnRpZXMiLCJQcm9wZXJ0eSIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydHlKU09OIiwicHJvcGVydHkiLCJzdXBlclR5cGVzIiwic3VwZXJUeXBlc0pTT04iLCJzdXBlclR5cGVKU09OIiwic3VwZXJUeXBlIiwiaHlwb3RoZXNlcyIsIkh5cG90aGVzaXMiLCJoeXBvdGhlc2VzSlNPTiIsImh5cG90aGVzaXNKU09OIiwiaHlwb3RoZXNpcyIsInBhcmFtZXRlcnMiLCJQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJzSlNPTiIsInBhcmFtZXRlckpTT04iLCJwYXJhbWV0ZXIiLCJqdWRnZW1lbnRzIiwiSnVkZ2VtZW50IiwianVkZ2VtZW50c0pTT04iLCJqdWRnZW1lbnRKU09OIiwianVkZ2VtZW50Iiwic3RhdGVtZW50cyIsInN0YXRlbWVudHNKU09OIiwiYXNzZXJ0aW9ucyIsIlR5cGVBc3NlcnRpb24iLCJEZWZpbmVkQXNzZXJ0aW9uIiwiUHJvcGVydHlBc3NlcnRpb24iLCJTdWJwcm9vZkFzc2VydGlvbiIsIlNhdGlzZmllc0Fzc2VydGlvbiIsIkNvbnRhaW5lZEFzc2VydGlvbiIsImFzc2VydGlvbnNKU09OIiwiYXNzZXJ0aW9uSlNPTiIsImFzc2VydGlvbiIsInJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzSlNPTiIsImNvbmplY3R1cmVzIiwiQ29uamVjdHVyZSIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29uamVjdHVyZSIsImNvbWJpbmF0b3JzIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JKU09OIiwiY29tYmluYXRvciIsImFzc3VtcHRpb25zIiwiQXNzdW1wdGlvbiIsImFzc3VtcHRpb25zSlNPTiIsImFzc3VtcHRpb25KU09OIiwiYXNzdW1wdGlvbiIsInR5cGVQcmVmaXhlcyIsIlR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4ZXNKU09OIiwidHlwZVByZWZpeEpTT04iLCJ0eXBlUHJlZml4IiwiY29uc3RydWN0b3JzIiwiQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JKU09OIiwiY29uc3RydWN0b3IiLCJtZXRhdGhlb3JlbXMiLCJNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdGhlb3JlbUpTT04iLCJtZXRhdGhlb3JlbSIsInN1cHBvc2l0aW9ucyIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uSlNPTiIsInN1cHBvc2l0aW9uIiwic3Vic3RpdHV0aW9ucyIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbnNKU09OIiwiU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uSlNPTiIsInN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzSlNPTiIsInJlbGVhc2VDb250ZXh0IiwiZW1waGVtZXJhbENvbnRleHQiLCJFcGhlbWVyYWxDb250ZXh0IiwicHJvcGVydHlSZWxhdGlvbnMiLCJQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbnNKU09OIiwicHJvcGVydHlSZWxhdGlvbkpTT04iLCJwcm9wZXJ0eVJlbGF0aW9uIiwidG9KU09OIiwibmVnYXRlZEpTT04iLCJtZXRhVHlwZUpTT04iLCJwcm92aXNpb25hbCIsInByb3Zpc2lvbmFsSlNPTiIsIm5vbWluYWxUeXBlTmFtZUpTT04iLCJtZXRhVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW9lZ0JBO2VBQUFBOztRQThlQUM7ZUFBQUE7O1FBemFBQztlQUFBQTs7UUFpZEFDO2VBQUFBOztRQXJzQkFDO2VBQUFBOztRQStpQkFDO2VBQUFBOztRQTNVQUM7ZUFBQUE7O1FBdWRBQztlQUFBQTs7UUFqMUJBQztlQUFBQTs7UUE2bUJBQztlQUFBQTs7UUFuUUFDO2VBQUFBOztRQTZkQUM7ZUFBQUE7O1FBN1pBQztlQUFBQTs7UUFxY0FDO2VBQUFBOztRQWw2QkFDO2VBQUFBOztRQTRvQkFDO2VBQUFBOztRQTlGQUM7ZUFBQUE7O1FBclNBQztlQUFBQTs7UUF5a0JBQztlQUFBQTs7UUFyNEJBQztlQUFBQTs7UUFxcEJBQztlQUFBQTs7UUF6YkFDO2VBQUFBOztRQXFrQkFDO2VBQUFBOztRQXRiQUM7ZUFBQUE7O1FBd2VBQztlQUFBQTs7UUF2dkJBQztlQUFBQTs7UUFpbkJBQztlQUFBQTs7UUFsVUFDO2VBQUFBOztRQWdmQUM7ZUFBQUE7O1FBNXFCQUM7ZUFBQUE7O1FBOGNBQztlQUFBQTs7UUFqYkFDO2VBQUFBOztRQTJpQkFDO2VBQUFBOztRQTMwQkFDO2VBQUFBOztRQU1BQztlQUFBQTs7UUFvRUFDO2VBQUFBOztRQW1wQkFDO2VBQUFBOztRQXpJQUM7ZUFBQUE7O1FBK2JBQztlQUFBQTs7UUE1MkJBQztlQUFBQTs7UUE0bUJBQztlQUFBQTs7UUE5SUFDO2VBQUFBOztRQTRhQUM7ZUFBQUE7O1FBcmlDQUM7ZUFBQUE7O1FBdXFCQUM7ZUFBQUE7O1FBL21CQUM7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