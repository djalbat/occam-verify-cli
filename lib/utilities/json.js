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
        const { name, prefixName } = json, nominalTypeName = prefixName !== null ? `${prefixName}${name}` : name; ///
        type = context.findTypeByNominalTypeName(nominalTypeName);
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
        const { name } = json, metaTypeName = name; ///
        metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
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
        const json = superTypeJSON, { name, prefixName } = json, nominalSuperTypeName = prefixName !== null ? `${prefixName}${name}` : name, superType = context.findTypeByNominalTypeName(nominalSuperTypeName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEVwaGVtZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZXBoZW1lcmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbmFtZSB9ID0ganNvbjtcblxuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICBuYW1lID0gbmFtZUpTT047ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICAgIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cztcblxuICAgIHRlcm0gPSBUZXJtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAganNvbiA9IHR5cGU7ICAvLy9cblxuICAgIGNvbnN0IHsgbmFtZSwgcHJlZml4TmFtZSB9ID0ganNvbixcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSAocHJlZml4TmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeE5hbWV9JHtuYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU7IC8vL1xuXG4gICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZnJhbWUgfSA9IGpzb247XG5cbiAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgY29uc3QgZnJhbWVKU09OID0gZnJhbWU7ICAvLy9cblxuICAgIGpzb24gPSBmcmFtZUpTT047ICAvLy9cblxuICAgIGNvbnN0IHsgRnJhbWUgfSA9IGVsZW1lbnRzO1xuXG4gICAgZnJhbWUgPSBGcmFtZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbmVnYXRlZCB9ID0ganNvbjtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBqc29uID0gbWV0YVR5cGU7ICAvLy9cblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50ID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIGpzb24gPSBzdGF0ZW1lbnRKU09OOyAvLy9cblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGRlZHVjdGlvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb247ICAvLy9cblxuICBqc29uID0gZGVkdWN0aW9uSlNPTjsgIC8vL1xuXG4gIGRlZHVjdGlvbiA9IERlZHVjdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzaWduYXR1cmUgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAganNvbiA9IHNpZ25hdHVyZUpTT047IC8vL1xuXG4gICAgc2lnbmF0dXJlID0gU2lnbmF0dXJlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSByZWZlcmVuY2VKU09OOyAvLy9cblxuICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGlkZW50aWZpZXIgfSA9IGpzb247XG5cbiAgY29uc3QgaWRlbnRpZmllckpTT04gPSBpZGVudGlmaWVyOyAgLy8vXG5cbiAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGUgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlOyAgLy8vXG5cbiAganNvbiA9IG1ldGF2YXJpYWJsZUpTT047IC8vL1xuXG4gIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlQ2FsbCA9IG51bGwgfSA9IGpzb247XG5cbiAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbDsgIC8vL1xuXG4gICAganNvbiA9IHByb2NlZHVyZUNhbGxKU09OOyAvLy9cblxuICAgIHByb2NlZHVyZUNhbGwgPSBQcm9jZWR1cmVDYWxsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb2NlZHVyZVJlZmVyZW5jZSB9ID0ganNvbjtcblxuICBjb25zdCB7IFByb2NlZHVyZVJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZUpTT04gPSBwcm9jZWR1cmVSZWZlcmVuY2U7ICAvLy9cblxuICBqc29uID0gcHJvY2VkdXJlUmVmZXJlbmNlSlNPTjsgIC8vL1xuXG4gIHByb2NlZHVyZVJlZmVyZW5jZSA9IFByb2NlZHVyZVJlZmVyZW5jZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tSlNPTihqc29uLCB0eXBlcywgY29udGV4dCkge1xuICBjb25zdCB7IHR5cGVzOiB0eXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cztcblxuICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHR5cGVzLnB1c2godHlwZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm1zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRlcm1zSlNPTiA9IHRlcm1zOyAvLy9cblxuICB0ZXJtcyA9IHRlcm1zSlNPTi5tYXAoKHRlcm1KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHRlcm1KU09OLCAgLy8vXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJ1bGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUnVsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzOyAvLy9cblxuICBydWxlcyA9IHJ1bGVzSlNPTi5tYXAoKHJ1bGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHJ1bGVKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGxhYmVsIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBsYWJlbEpTT04gPSBsYWJlbDsgIC8vL1xuXG4gIGpzb24gPSBsYWJlbEpTT047IC8vL1xuXG4gIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBmcmFtZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBGcmFtZSB9ID0gZWxlbWVudHMsXG4gICAgZnJhbWVzSlNPTiA9IGZyYW1lczsgLy8vXG5cbiAgZnJhbWVzID0gZnJhbWVzSlNPTi5tYXAoKGZyYW1lSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBmcmFtZUpTT04sICAvLy9cbiAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH0pO1xuXG4gIHJldHVybiBmcmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpb21zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBheGlvbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBBeGlvbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGF4aW9tc0pTT04gPSBheGlvbXM7IC8vL1xuXG4gIGF4aW9tcyA9IGF4aW9tc0pTT04ubWFwKChheGlvbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXhpb21KU09OLCAgLy8vXG4gICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZW1pc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByZW1pc2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLm1hcCgocHJlbWlzZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcHJlbWlzZUpTT04sIC8vL1xuICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFRoZW9yZW0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtczsgLy8vXG5cbiAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04ubWFwKCh0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgIHRoZW9yZW0gPSBUaGVvcmVtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH0pO1xuXG4gIHJldHVybiB0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzOyAvLy9cblxuICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLm1hcCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBlcXVhbGl0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgRXF1YWxpdHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXM7IC8vL1xuXG4gIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzSlNPTi5tYXAoKGVxdWFsaXR5SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBlcXVhbGl0eUpTT04sICAvLy9cbiAgICAgICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9KTtcblxuICByZXR1cm4gZXF1YWxpdGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHByb3BlcnRpZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcm9wZXJ0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllczsgLy8vXG5cbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNKU09OLm1hcCgocHJvcGVydHlKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByb3BlcnR5SlNPTiwgIC8vL1xuICAgICAgICAgIHByb3BlcnR5ID0gUHJvcGVydHkuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBzdXBlclR5cGVzOiBzdXBlclR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0pTT04ubWFwKChzdXBlclR5cGVKU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IHN1cGVyVHlwZUpTT04sICAvLy9cbiAgICAgICAgICAgICAgICB7IG5hbWUsIHByZWZpeE5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgbm9taW5hbFN1cGVyVHlwZU5hbWUgPSAocHJlZml4TmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhOYW1lfSR7bmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxTdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdXBlclR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgaHlwb3RoZXNlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEh5cG90aGVzaXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXM7ICAvLy9cblxuICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0pTT04ubWFwKChoeXBvdGhlc2lzSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBoeXBvdGhlc2lzSlNPTiwgLy8vXG4gICAgICAgICAgaHlwb3RoZXNpcyA9IEh5cG90aGVzaXMuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwYXJhbWV0ZXJzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzOyAvLy9cblxuICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0pTT04ubWFwKChwYXJhbWV0ZXJKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHBhcmFtZXRlckpTT04sICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGp1ZGdlbWVudHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBKdWRnZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBqdWRnZW1lbnRzSlNPTiA9IGp1ZGdlbWVudHM7IC8vL1xuXG4gIGp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzSlNPTi5tYXAoKGp1ZGdlbWVudEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0ganVkZ2VtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudCA9IEp1ZGdlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBqdWRnZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50cyB9ID0ganNvbjtcblxuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN0YXRlbWVudHNKU09OID0gc3RhdGVtZW50czsgLy8vXG5cbiAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNKU09OLm1hcCgoc3RhdGVtZW50SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBhc3NlcnRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZUFzc2VydGlvbiwgRGVmaW5lZEFzc2VydGlvbiwgUHJvcGVydHlBc3NlcnRpb24sIFN1YnByb29mQXNzZXJ0aW9uLCBTYXRpc2ZpZXNBc3NlcnRpb24sIENvbnRhaW5lZEFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9uczsgLy8vXG5cbiAgYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnNKU09OLm1hcCgoYXNzZXJ0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBhc3NlcnRpb25KU09OLCAgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uID0gVHlwZUFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBEZWZpbmVkQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFByb3BlcnR5QXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFN1YnByb29mQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIFNhdGlzZmllc0Fzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBDb250YWluZWRBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzZXJ0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHJlZmVyZW5jZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXM7IC8vL1xuXG4gIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzSlNPTi5tYXAoKHJlZmVyZW5jZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcmVmZXJlbmNlSlNPTiwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0pO1xuXG4gIHJldHVybiByZWZlcmVuY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbmplY3R1cmVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uamVjdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzOyAvLy9cblxuICBjb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzSlNPTi5tYXAoKGNvbmplY3R1cmVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbWJpbmF0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzOyAvLy9cblxuICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTi5tYXAoKGNvbWJpbmF0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGFzc3VtcHRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFzc3VtcHRpb25zSlNPTiA9IGFzc3VtcHRpb25zOyAvLy9cblxuICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zSlNPTi5tYXAoKGFzc3VtcHRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGFzc3VtcHRpb25KU09OLCAgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IEFzc3VtcHRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVByZWZpeGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyB0eXBlUHJlZml4ZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZVByZWZpeGVzSlNPTiA9IHR5cGVQcmVmaXhlczsgLy8vXG5cbiAgdHlwZVByZWZpeGVzID0gdHlwZVByZWZpeGVzSlNPTi5tYXAoKHR5cGVQcmVmaXhKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHR5cGVQcmVmaXhKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeCA9IFR5cGVQcmVmaXguZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgY29uc3RydWN0b3JzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzOyAvLy9cblxuICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLm1hcCgoY29uc3RydWN0b3JKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF0aGVvcmVtcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF0aGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtczsgLy8vXG5cbiAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTi5tYXAoKG1ldGF0aGVvcmVtSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXRoZW9yZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdXBwb3NpdGlvbnMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN1YnN0aXR1dGlvbnMgPSBbXSB9ID0ganNvbjsgIC8vL1xuXG4gIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLCAgLy8vXG4gICAgICAgIFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gU3Vic3RpdHV0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzOyAvLy9cblxuICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT04ubWFwKChtZXRhdmFyaWFibGVKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gY29udGV4dDtcblxuICAoe2NvbnRleHR9ID0ganNvbik7XG5cbiAganNvbiA9IGNvbnRleHQ7IC8vL1xuXG4gIGNvbnRleHQgPSByZWxlYXNlQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgZW1waGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5UmVsYXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0eVJlbGF0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFByb3BlcnR5UmVsYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uc0pTT04gPSBwcm9wZXJ0eVJlbGF0aW9uczsgLy8vXG5cbiAgcHJvcGVydHlSZWxhdGlvbnMgPSBwcm9wZXJ0eVJlbGF0aW9uc0pTT04ubWFwKChwcm9wZXJ0eVJlbGF0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcm9wZXJ0eVJlbGF0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBQcm9wZXJ0eVJlbGF0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVUb05hbWVKU09OKG5hbWUpIHtcbiAgY29uc3QgbmFtZUpTT04gPSBuYW1lOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybVRvVGVybUpTT04odGVybSkge1xuICBjb25zdCB0ZXJtSlNPTiA9ICh0ZXJtICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICB0ZXJtLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gdGVybUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlVG9UeXBlSlNPTih0eXBlKSB7XG4gIGNvbnN0IHR5cGVKU09OID0gKHR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiB0eXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lVG9GcmFtZUpTT04oZnJhbWUpIHtcbiAgY29uc3QgZnJhbWVKU09OID0gKGZyYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgZnJhbWUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gZnJhbWVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxUb0xhYmVsSlNPTihsYWJlbCkge1xuICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICByZXR1cm4gbGFiZWxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZFRvTmVnYXRlZEpTT04obmVnYXRlZCkge1xuICBjb25zdCBuZWdhdGVkSlNPTiA9IG5lZ2F0ZWQ7ICAvLy9cblxuICByZXR1cm4gbmVnYXRlZEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKG1ldGFUeXBlKSB7XG4gIGNvbnN0IG1ldGFUeXBlSlNPTiA9IChtZXRhVHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFUeXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIG1ldGFUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTihyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZS50b0pTT04oKTtcblxuICByZXR1cm4gcmVmZXJlbmNlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTihzdGF0ZW1lbnQpIHtcbiAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IChzdGF0ZW1lbnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50LnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKGRlZHVjdGlvbikge1xuICBjb25zdCBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHNpZ25hdHVyZSkge1xuICBjb25zdCBzaWduYXR1cmVKU09OID0gKHNpZ25hdHVyZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyVG9JZGVudGlmaWVySlNPTihpZGVudGlmaWVyKSB7XG4gIGNvbnN0IGlkZW50aWZpZXJKU09OID0gaWRlbnRpZmllcjsgIC8vL1xuXG4gIHJldHVybiBpZGVudGlmaWVySlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKGNvbmNsdXNpb24pIHtcbiAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04ocHJvdmlzaW9uYWwpIHtcbiAgY29uc3QgcHJvdmlzaW9uYWxKU09OID0gcHJvdmlzaW9uYWw7ICAvLy9cblxuICByZXR1cm4gcHJvdmlzaW9uYWxKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04ocHJvY2VkdXJlQ2FsbCkge1xuICBjb25zdCBwcm9jZWR1cmVDYWxsSlNPTiA9IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZWR1cmVDYWxsLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04ocHJvY2VkdXJlUmVmZXJlbmNlKSB7XG4gIGNvbnN0IHByb2NlZHVyZVJlZmVyZW5jZUpTT04gPSBwcm9jZWR1cmVSZWZlcmVuY2UudG9KU09OKCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc1RvVGVybXNKU09OKHRlcm1zKSB7XG4gIGNvbnN0IHRlcm1zSlNPTiA9IHRlcm1zLm1hcCgodGVybSkgPT4ge1xuICAgIGNvbnN0IHRlcm1KU09OID0gdGVybS50b0pTT04oKTtcblxuICAgIHJldHVybiB0ZXJtSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzVG9UeXBlc0pTT04odHlwZXMpIHtcbiAgY29uc3QgdHlwZXNKU09OID0gdHlwZXMubWFwKCh0eXBlKSA9PiB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHR5cGVKU09OO1xuICB9KTtcblxuICByZXR1cm4gdHlwZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNUb1J1bGVzSlNPTihydWxlcykge1xuICBjb25zdCBydWxlc0pTT04gPSBydWxlcy5tYXAoKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcnVsZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBydWxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNUb0xhYmVsc0pTT04obGFiZWxzKSB7XG4gIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVsc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZXNUb0ZyYW1lc0pTT04oZnJhbWVzKSB7XG4gIGNvbnN0IGZyYW1lc0pTT04gPSBmcmFtZXMubWFwKChmcmFtZSkgPT4ge1xuICAgIGNvbnN0IGZyYW1lSlNPTiA9IGZyYW1lLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGZyYW1lSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYW1lc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlvbXNUb0F4aW9tc0pTT04oYXhpb21zKSB7XG4gIGNvbnN0IGF4aW9tc0pTT04gPSBheGlvbXMubWFwKChheGlvbSkgPT4ge1xuICAgIGNvbnN0IGF4aW9tSlNPTiA9IGF4aW9tLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGF4aW9tSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGF4aW9tc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHByZW1pc2VzKSB7XG4gIGNvbnN0IHByZW1pc2VzSlNPTiA9IHByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS50b0pTT04oKTtcblxuICAgIHJldHVybiBwcmVtaXNlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZW9yZW1zVG9UaGVvcmVtc0pTT04odGhlb3JlbXMpIHtcbiAgY29uc3QgdGhlb3JlbXNKU09OID0gdGhlb3JlbXMubWFwKCh0aGVvcmVtKSA9PiB7XG4gICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHRoZW9yZW1KU09OO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OKHZhcmlhYmxlcykge1xuICBjb25zdCB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzLm1hcCgodmFyaWFibGUpID0+IHtcbiAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04oKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04oaHlwb3RoZXNlcykge1xuICBjb25zdCBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXMubWFwKChoeXBvdGhlc2lzKSA9PiB7XG4gICAgY29uc3QgaHlwb3RoZXNpc0pTT04gPSBoeXBvdGhlc2lzLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXNKU09OO1xuICB9KTtcblxuICByZXR1cm4gaHlwb3RoZXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTihzdXBlclR5cGVzKSB7XG4gIGNvbnN0IHN1cGVyVHlwZXNKU09OID0gc3VwZXJUeXBlcy5tYXAoKHN1cGVyVHlwZSkgPT4ge1xuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSBzdXBlclR5cGUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04ocGFyYW1ldGVycykge1xuICBjb25zdCBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnMubWFwKChwYXJhbWV0ZXIpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJKU09OID0gcGFyYW1ldGVyLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlckpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzLm1hcCgocHJvcGVydHkpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eUpTT04gPSBwcm9wZXJ0eS50b0pTT04oKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudHNUb0p1ZGdlbWVudHNKU09OKGp1ZGdlbWVudHMpIHtcbiAgY29uc3QganVkZ2VtZW50c0pTT04gPSBqdWRnZW1lbnRzLm1hcCgoanVkZ2VtZW50KSA9PiB7XG4gICAgY29uc3QganVkZ2VtZW50SlNPTiA9IGp1ZGdlbWVudC50b0pTT04oKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRKU09OO1xuICB9KTtcblxuICByZXR1cm4ganVkZ2VtZW50c0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTihlcXVhbGl0aWVzKSB7XG4gIGNvbnN0IGVxdWFsaXRpZXNKU09OID0gZXF1YWxpdGllcy5tYXAoKGVxdWFsaXR5KSA9PiB7XG4gICAgY29uc3QgZXF1YWxpdHlKU09OID0gZXF1YWxpdHkudG9KU09OKCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHlKU09OO1xuICB9KTtcblxuICByZXR1cm4gZXF1YWxpdGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTihzdGF0ZW1lbnRzKSB7XG4gIGNvbnN0IHN0YXRlbWVudHNKU09OID0gc3RhdGVtZW50cy5tYXAoKHN0YXRlbWVudCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQudG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04oYXNzZXJ0aW9ucykge1xuICBjb25zdCBhc3NlcnRpb25zSlNPTiA9IGFzc2VydGlvbnMubWFwKChhc3NlcnRpb24pID0+IHtcbiAgICBjb25zdCBhc3NlcnRpb25KU09OID0gYXNzZXJ0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBhc3NlcnRpb25zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OKHJlZmVyZW5jZXMpIHtcbiAgY29uc3QgcmVmZXJlbmNlc0pTT04gPSByZWZlcmVuY2VzLm1hcCgocmVmZXJlbmNlKSA9PiB7XG4gICAgY29uc3QgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZS50b0pTT04oKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VKU09OO1xuICB9KTtcblxuICByZXR1cm4gcmVmZXJlbmNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OKGNvbmplY3R1cmVzKSB7XG4gIGNvbnN0IGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzLm1hcCgoY29uamVjdHVyZSkgPT4ge1xuICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04oKTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04oY29tYmluYXRvcnMpIHtcbiAgY29uc3QgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnMubWFwKChjb21iaW5hdG9yKSA9PiB7XG4gICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JKU09OO1xuICB9KTtcblxuICByZXR1cm4gY29tYmluYXRvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTihhc3N1bXB0aW9ucykge1xuICBjb25zdCBhc3N1bXB0aW9uc0pTT04gPSBhc3N1bXB0aW9ucy5tYXAoKGFzc3VtcHRpb24pID0+IHtcbiAgICBjb25zdCBhc3N1bXB0aW9uSlNPTiA9IGFzc3VtcHRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04oc3VwcG9zaXRpb25zKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04oY29uc3RydWN0b3JzKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ySlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04obWV0YXRoZW9yZW1zKSB7XG4gIGNvbnN0IG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXMubWFwKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04odHlwZVByZWZpeGVzKSB7XG4gIGNvbnN0IHR5cGVQcmVmaXhlc0pTT04gPSB0eXBlUHJlZml4ZXMubWFwKCh0eXBlUHJlZml4KSA9PiB7XG4gICAgY29uc3QgdHlwZVByZWZpeEpTT04gPSB0eXBlUHJlZml4LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhKU09OO1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLm1hcCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTihtZXRhdmFyaWFibGVzKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlSZWxhdGlvbnNUb1Byb3BlcnR5UmVsYXRpb25zSlNPTihwcm9wZXJ0eVJlbGF0aW9ucykge1xuICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uc0pTT04gPSBwcm9wZXJ0eVJlbGF0aW9ucy5tYXAoKHByb3BlcnR5UmVsYXRpb24pID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uSlNPTiA9IHByb3BlcnR5UmVsYXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uc0pTT047XG59XG4iXSwibmFtZXMiOlsiYXNzZXJ0aW9uc0Zyb21KU09OIiwiYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04iLCJhc3N1bXB0aW9uc0Zyb21KU09OIiwiYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTiIsImF4aW9tc0Zyb21KU09OIiwiYXhpb21zVG9BeGlvbXNKU09OIiwiY29tYmluYXRvcnNGcm9tSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImNvbmplY3R1cmVzRnJvbUpTT04iLCJjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OIiwiY29uc3RydWN0b3JzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiIsImVxdWFsaXRpZXNGcm9tSlNPTiIsImVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OIiwiZnJhbWVGcm9tSlNPTiIsImZyYW1lVG9GcmFtZUpTT04iLCJmcmFtZXNGcm9tSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsImh5cG90aGVzZXNGcm9tSlNPTiIsImh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OIiwiaWRlbnRpZmllckZyb21KU09OIiwiaWRlbnRpZmllclRvSWRlbnRpZmllckpTT04iLCJqdWRnZW1lbnRzRnJvbUpTT04iLCJqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTiIsImxhYmVsRnJvbUpTT04iLCJsYWJlbFRvTGFiZWxKU09OIiwibGFiZWxzRnJvbUpTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsIm1ldGFUeXBlRnJvbUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwibmFtZUZyb21KU09OIiwibmFtZVRvTmFtZUpTT04iLCJuZWdhdGVkRnJvbUpTT04iLCJuZWdhdGVkVG9OZWdhdGVkSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJwcm9wZXJ0eVJlbGF0aW9uc0Zyb21KU09OIiwicHJvcGVydHlSZWxhdGlvbnNUb1Byb3BlcnR5UmVsYXRpb25zSlNPTiIsInByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04iLCJyZWZlcmVuY2VGcm9tSlNPTiIsInJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTiIsInJlZmVyZW5jZXNGcm9tSlNPTiIsInJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OIiwicnVsZXNGcm9tSlNPTiIsInJ1bGVzVG9SdWxlc0pTT04iLCJzaWduYXR1cmVGcm9tSlNPTiIsInNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50c0Zyb21KU09OIiwic3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiIsInN1cGVyVHlwZXNGcm9tSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJ0ZXJtRnJvbUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsInRlcm1zRnJvbUpTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwidGhlb3JlbXNGcm9tSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ0eXBlRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNGcm9tSlNPTiIsInR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTiIsInR5cGVUb1R5cGVKU09OIiwidHlwZXNGcm9tSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImxlbW1hcyIsIm1ldGFMZW1tYXMiLCJqc29uIiwiY29udGV4dCIsIm5hbWUiLCJuYW1lSlNPTiIsInRlcm0iLCJ0ZXJtSlNPTiIsIlRlcm0iLCJlbGVtZW50cyIsImZyb21KU09OIiwidHlwZSIsInByZWZpeE5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwiZnJhbWUiLCJmcmFtZUpTT04iLCJGcmFtZSIsIm5lZ2F0ZWQiLCJtZXRhVHlwZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwic3RhdGVtZW50IiwiU3RhdGVtZW50Iiwic3RhdGVtZW50SlNPTiIsImRlZHVjdGlvbiIsIkRlZHVjdGlvbiIsImRlZHVjdGlvbkpTT04iLCJzaWduYXR1cmUiLCJTaWduYXR1cmUiLCJzaWduYXR1cmVKU09OIiwicmVmZXJlbmNlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlSlNPTiIsImlkZW50aWZpZXIiLCJpZGVudGlmaWVySlNPTiIsImNvbmNsdXNpb24iLCJDb25jbHVzaW9uIiwiY29uY2x1c2lvbkpTT04iLCJtZXRhdmFyaWFibGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVKU09OIiwicHJvY2VkdXJlQ2FsbCIsIlByb2NlZHVyZUNhbGwiLCJwcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZSIsIlByb2NlZHVyZVJlZmVyZW5jZSIsInByb2NlZHVyZVJlZmVyZW5jZUpTT04iLCJ0eXBlcyIsInR5cGVzSlNPTiIsIlR5cGUiLCJmb3JFYWNoIiwidHlwZUpTT04iLCJwdXNoIiwidGVybXMiLCJ0ZXJtc0pTT04iLCJtYXAiLCJydWxlcyIsIlJ1bGUiLCJydWxlc0pTT04iLCJydWxlSlNPTiIsInJ1bGUiLCJsYWJlbCIsIkxhYmVsIiwibGFiZWxKU09OIiwiZnJhbWVzIiwiZnJhbWVzSlNPTiIsImxhYmVscyIsImxhYmVsc0pTT04iLCJheGlvbXMiLCJBeGlvbSIsImF4aW9tc0pTT04iLCJheGlvbUpTT04iLCJheGlvbSIsInByZW1pc2VzIiwiUHJlbWlzZSIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwicHJlbWlzZSIsInRoZW9yZW1zIiwiVGhlb3JlbSIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1KU09OIiwidGhlb3JlbSIsInZhcmlhYmxlcyIsIlZhcmlhYmxlIiwidmFyaWFibGVzSlNPTiIsInZhcmlhYmxlSlNPTiIsInZhcmlhYmxlIiwiZXF1YWxpdGllcyIsIkVxdWFsaXR5IiwiZXF1YWxpdGllc0pTT04iLCJlcXVhbGl0eUpTT04iLCJlcXVhbGl0eSIsInByb3BlcnRpZXMiLCJQcm9wZXJ0eSIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydHlKU09OIiwicHJvcGVydHkiLCJzdXBlclR5cGVzIiwic3VwZXJUeXBlc0pTT04iLCJzdXBlclR5cGVKU09OIiwibm9taW5hbFN1cGVyVHlwZU5hbWUiLCJzdXBlclR5cGUiLCJoeXBvdGhlc2VzIiwiSHlwb3RoZXNpcyIsImh5cG90aGVzZXNKU09OIiwiaHlwb3RoZXNpc0pTT04iLCJoeXBvdGhlc2lzIiwicGFyYW1ldGVycyIsIlBhcmFtZXRlciIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVySlNPTiIsInBhcmFtZXRlciIsImp1ZGdlbWVudHMiLCJKdWRnZW1lbnQiLCJqdWRnZW1lbnRzSlNPTiIsImp1ZGdlbWVudEpTT04iLCJqdWRnZW1lbnQiLCJzdGF0ZW1lbnRzIiwic3RhdGVtZW50c0pTT04iLCJhc3NlcnRpb25zIiwiVHlwZUFzc2VydGlvbiIsIkRlZmluZWRBc3NlcnRpb24iLCJQcm9wZXJ0eUFzc2VydGlvbiIsIlN1YnByb29mQXNzZXJ0aW9uIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwiYXNzZXJ0aW9uc0pTT04iLCJhc3NlcnRpb25KU09OIiwiYXNzZXJ0aW9uIiwicmVmZXJlbmNlcyIsInJlZmVyZW5jZXNKU09OIiwiY29uamVjdHVyZXMiLCJDb25qZWN0dXJlIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZUpTT04iLCJjb25qZWN0dXJlIiwiY29tYmluYXRvcnMiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvckpTT04iLCJjb21iaW5hdG9yIiwiYXNzdW1wdGlvbnMiLCJBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbnNKU09OIiwiYXNzdW1wdGlvbkpTT04iLCJhc3N1bXB0aW9uIiwidHlwZVByZWZpeGVzIiwiVHlwZVByZWZpeCIsInR5cGVQcmVmaXhlc0pTT04iLCJ0eXBlUHJlZml4SlNPTiIsInR5cGVQcmVmaXgiLCJjb25zdHJ1Y3RvcnMiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJjb25zdHJ1Y3RvciIsIm1ldGF0aGVvcmVtcyIsIk1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtSlNPTiIsIm1ldGF0aGVvcmVtIiwic3VwcG9zaXRpb25zIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25KU09OIiwic3VwcG9zaXRpb24iLCJzdWJzdGl0dXRpb25zIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uc0pTT04iLCJTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25KU09OIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXNKU09OIiwicmVsZWFzZUNvbnRleHQiLCJlbXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsIlByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uc0pTT04iLCJwcm9wZXJ0eVJlbGF0aW9uSlNPTiIsInByb3BlcnR5UmVsYXRpb24iLCJ0b0pTT04iLCJuZWdhdGVkSlNPTiIsIm1ldGFUeXBlSlNPTiIsInByb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWxKU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFvZWdCQTtlQUFBQTs7UUF3ZUFDO2VBQUFBOztRQW5hQUM7ZUFBQUE7O1FBMmNBQztlQUFBQTs7UUFqc0JBQztlQUFBQTs7UUEyaUJBQztlQUFBQTs7UUFyVUFDO2VBQUFBOztRQWlkQUM7ZUFBQUE7O1FBdjBCQUM7ZUFBQUE7O1FBeW1CQUM7ZUFBQUE7O1FBblFBQztlQUFBQTs7UUF1ZEFDO2VBQUFBOztRQXZaQUM7ZUFBQUE7O1FBK2JBQztlQUFBQTs7UUF4NUJBQztlQUFBQTs7UUF3b0JBQztlQUFBQTs7UUE5RkFDO2VBQUFBOztRQXZTQUM7ZUFBQUE7O1FBcWtCQUM7ZUFBQUE7O1FBNTNCQUM7ZUFBQUE7O1FBa3BCQUM7ZUFBQUE7O1FBM2JBQztlQUFBQTs7UUFpa0JBQztlQUFBQTs7UUFoYkFDO2VBQUFBOztRQWtlQUM7ZUFBQUE7O1FBN3VCQUM7ZUFBQUE7O1FBNm1CQUM7ZUFBQUE7O1FBbFVBQztlQUFBQTs7UUEwZUFDO2VBQUFBOztRQXhxQkFDO2VBQUFBOztRQWdkQUM7ZUFBQUE7O1FBbmJBQztlQUFBQTs7UUF1aUJBQztlQUFBQTs7UUFyMEJBQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBdUVBQztlQUFBQTs7UUFncEJBQztlQUFBQTs7UUF6SUFDO2VBQUFBOztRQXliQUM7ZUFBQUE7O1FBbDJCQUM7ZUFBQUE7O1FBd21CQUM7ZUFBQUE7O1FBOUlBQztlQUFBQTs7UUFzYUFDO2VBQUFBOztRQS9oQ0FDO2VBQUFBOztRQXVxQkFDO2VBQUFBOztRQTVtQkFDO2VBQUFBOztRQWdwQkFDO2VBQUFBOztRQXhTQUM7ZUFBQUE7O1FBc2VBQztlQUFBQTs7UUF2bEJBQztlQUFBQTs7UUFxaUJBQztlQUFBQTs7UUEzcUJBQztlQUFBQTs7UUFpbUJBQztlQUFBQTs7UUFsbEJBQztlQUFBQTs7UUEwbEJBQztlQUFBQTs7UUFuYUFDO2VBQUFBOztRQWlpQkFDO2VBQUFBOztRQTVQQUM7ZUFBQUE7O1FBa1pBQztlQUFBQTs7UUF4U0FDO2VBQUFBOztRQXRvQkFDO2VBQUFBOztRQThsQkFDO2VBQUFBOztRQWpQQUM7ZUFBQUE7O1FBNmRBQztlQUFBQTs7UUFodUJBQztlQUFBQTs7UUEwa0JBQztlQUFBQTs7UUFuc0JBQztlQUFBQTs7UUFpb0JBQztlQUFBQTs7UUE3cEJBQztlQUFBQTs7UUErb0JBQztlQUFBQTs7UUE1UkFDO2VBQUFBOztRQThlQUM7ZUFBQUE7O1FBelVBQztlQUFBQTs7UUE2YUFDO2VBQUFBOztRQW5wQkFDO2VBQUFBOztRQTZmQUM7ZUFBQUE7O1FBdlNBQztlQUFBQTs7UUFxWkFDO2VBQUFBOztRQW4rQkFDO2VBQUFBOztRQW1xQkFDO2VBQUFBOztRQXhkQUM7ZUFBQUE7O1FBc2tCQUM7ZUFBQUE7O1FBemRBQztlQUFBQTs7UUEraEJBQztlQUFBQTs7UUF2MEJBQztlQUFBQTs7UUE4Z0JBQztlQUFBQTs7UUFtZUFDO2VBQUFBOztRQXRWQUM7ZUFBQUE7O1FBN2VBQztlQUFBQTs7UUE2bEJBQztlQUFBQTs7UUFuZEFDO2VBQUFBOztRQXloQkFDO2VBQUFBOzs7aUVBMTNCSztrRUFDUTs7Ozs7O0FBRXRCLFNBQVMxRDtJQUNkLE1BQU0yRCxTQUFTLEVBQUU7SUFFakIsT0FBT0E7QUFDVDtBQUVPLFNBQVMxRDtJQUNkLE1BQU0yRCxhQUFhLEVBQUU7SUFFckIsT0FBT0E7QUFDVDtBQUVPLFNBQVNsRCxhQUFhbUQsSUFBSSxFQUFFQyxPQUFPO0lBQ3hDLElBQUksRUFBRUMsSUFBSSxFQUFFLEdBQUdGO0lBRWYsTUFBTUcsV0FBV0QsTUFBTyxHQUFHO0lBRTNCQSxPQUFPQyxVQUFXLEdBQUc7SUFFckIsT0FBT0Q7QUFDVDtBQUVPLFNBQVNsQixhQUFhZ0IsSUFBSSxFQUFFQyxPQUFPO0lBQ3hDLElBQUksRUFBRUcsSUFBSSxFQUFFLEdBQUdKO0lBRWYsSUFBSUksU0FBUyxNQUFNO1FBQ2pCLE1BQU1DLFdBQVdELE1BQU8sR0FBRztRQUUzQkosT0FBT0ssVUFBVyxHQUFHO1FBRXJCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLGlCQUFRO1FBRXpCSCxPQUFPRSxLQUFLRSxRQUFRLENBQUNSLE1BQU1DO0lBQzdCO0lBRUEsT0FBT0c7QUFDVDtBQUVPLFNBQVNkLGFBQWFVLElBQUksRUFBRUMsT0FBTztJQUN4QyxJQUFJLEVBQUVRLElBQUksRUFBRSxHQUFHVDtJQUVmLElBQUlTLFNBQVMsTUFBTTtRQUNqQlQsT0FBT1MsTUFBTyxHQUFHO1FBRWpCLE1BQU0sRUFBRVAsSUFBSSxFQUFFUSxVQUFVLEVBQUUsR0FBR1YsTUFDdkJXLGtCQUFrQixBQUFDRCxlQUFlLE9BQ2IsR0FBR0EsYUFBYVIsTUFBTSxHQUNuQkEsTUFBTSxHQUFHO1FBRXZDTyxPQUFPUixRQUFRVyx5QkFBeUIsQ0FBQ0Q7SUFDM0M7SUFFQSxPQUFPRjtBQUNUO0FBRU8sU0FBU3BGLGNBQWMyRSxJQUFJLEVBQUVDLE9BQU87SUFDekMsSUFBSSxFQUFFWSxLQUFLLEVBQUUsR0FBR2I7SUFFaEIsSUFBSWEsVUFBVSxNQUFNO1FBQ2xCLE1BQU1DLFlBQVlELE9BQVEsR0FBRztRQUU3QmIsT0FBT2MsV0FBWSxHQUFHO1FBRXRCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdSLGlCQUFRO1FBRTFCTSxRQUFRRSxNQUFNUCxRQUFRLENBQUNSLE1BQU1DO0lBQy9CO0lBRUEsT0FBT1k7QUFDVDtBQUVPLFNBQVM5RCxnQkFBZ0JpRCxJQUFJLEVBQUVDLE9BQU87SUFDM0MsTUFBTSxFQUFFZSxPQUFPLEVBQUUsR0FBR2hCO0lBRXBCLE9BQU9nQjtBQUNUO0FBRU8sU0FBUzNFLGlCQUFpQjJELElBQUksRUFBRUMsT0FBTztJQUM1QyxJQUFJLEVBQUVnQixRQUFRLEVBQUUsR0FBR2pCO0lBRW5CLElBQUlpQixhQUFhLE1BQU07UUFDckJqQixPQUFPaUIsVUFBVyxHQUFHO1FBRXJCLE1BQU0sRUFBRWYsSUFBSSxFQUFFLEdBQUdGLE1BQ1hrQixlQUFlaEIsTUFBTyxHQUFHO1FBRS9CZSxXQUFXaEIsUUFBUWtCLDBCQUEwQixDQUFDRDtJQUNoRDtJQUVBLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTM0Msa0JBQWtCMEIsSUFBSSxFQUFFQyxPQUFPO0lBQzdDLElBQUksRUFBRW1CLFlBQVksSUFBSSxFQUFFLEdBQUdwQjtJQUUzQixJQUFJb0IsY0FBYyxNQUFNO1FBQ3RCLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdkLGlCQUFRLEVBQ3hCZSxnQkFBZ0JGLFdBQVksR0FBRztRQUVyQ3BCLE9BQU9zQixlQUFlLEdBQUc7UUFFekJGLFlBQVlDLFVBQVViLFFBQVEsQ0FBQ1IsTUFBTUM7SUFDdkM7SUFFQSxPQUFPbUI7QUFDVDtBQUVPLFNBQVNwRyxrQkFBa0JnRixJQUFJLEVBQUVDLE9BQU87SUFDN0MsSUFBSSxFQUFFc0IsU0FBUyxFQUFFLEdBQUd2QjtJQUVwQixNQUFNLEVBQUV3QixTQUFTLEVBQUUsR0FBR2pCLGlCQUFRLEVBQ3hCa0IsZ0JBQWdCRixXQUFZLEdBQUc7SUFFckN2QixPQUFPeUIsZUFBZ0IsR0FBRztJQUUxQkYsWUFBWUMsVUFBVWhCLFFBQVEsQ0FBQ1IsTUFBTUM7SUFFckMsT0FBT3NCO0FBQ1Q7QUFFTyxTQUFTbkQsa0JBQWtCNEIsSUFBSSxFQUFFQyxPQUFPO0lBQzdDLElBQUksRUFBRXlCLFlBQVksSUFBSSxFQUFFLEdBQUcxQjtJQUUzQixJQUFJMEIsY0FBYyxNQUFNO1FBQ3RCLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdwQixpQkFBUSxFQUN4QnFCLGdCQUFnQkYsV0FBWSxHQUFHO1FBRXJDMUIsT0FBTzRCLGVBQWUsR0FBRztRQUV6QkYsWUFBWUMsVUFBVW5CLFFBQVEsQ0FBQ1IsTUFBTUM7SUFDdkM7SUFFQSxPQUFPeUI7QUFDVDtBQUVPLFNBQVM1RCxrQkFBa0JrQyxJQUFJLEVBQUVDLE9BQU87SUFDN0MsSUFBSSxFQUFFNEIsU0FBUyxFQUFFLEdBQUc3QjtJQUVwQixNQUFNLEVBQUU4QixTQUFTLEVBQUUsR0FBR3ZCLGlCQUFRLEVBQ3hCd0IsZ0JBQWdCRixXQUFZLEdBQUc7SUFFckM3QixPQUFPK0IsZUFBZSxHQUFHO0lBRXpCRixZQUFZQyxVQUFVdEIsUUFBUSxDQUFDUixNQUFNQztJQUVyQyxPQUFPNEI7QUFDVDtBQUVPLFNBQVNsRyxtQkFBbUJxRSxJQUFJLEVBQUVDLE9BQU87SUFDOUMsSUFBSSxFQUFFK0IsVUFBVSxFQUFFLEdBQUdoQztJQUVyQixNQUFNaUMsaUJBQWlCRCxZQUFhLEdBQUc7SUFFdkNBLGFBQWFDLGdCQUFpQixHQUFHO0lBRWpDLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTdEgsbUJBQW1Cc0YsSUFBSSxFQUFFQyxPQUFPO0lBQzlDLElBQUksRUFBRWlDLFVBQVUsRUFBRSxHQUFHbEM7SUFFckIsTUFBTSxFQUFFbUMsVUFBVSxFQUFFLEdBQUc1QixpQkFBUSxFQUN6QjZCLGlCQUFpQkYsWUFBYSxHQUFHO0lBRXZDbEMsT0FBT29DLGdCQUFpQixHQUFHO0lBRTNCRixhQUFhQyxXQUFXM0IsUUFBUSxDQUFDUixNQUFNQztJQUV2QyxPQUFPaUM7QUFDVDtBQUVPLFNBQVN6RixxQkFBcUJ1RCxJQUFJLEVBQUVDLE9BQU87SUFDaEQsSUFBSSxFQUFFb0MsWUFBWSxFQUFFLEdBQUdyQztJQUV2QixNQUFNLEVBQUVzQyxZQUFZLEVBQUUsR0FBRy9CLGlCQUFRLEVBQzNCZ0MsbUJBQW1CRixjQUFlLEdBQUc7SUFFM0NyQyxPQUFPdUMsa0JBQWtCLEdBQUc7SUFFNUJGLGVBQWVDLGFBQWE5QixRQUFRLENBQUNSLE1BQU1DO0lBRTNDLE9BQU9vQztBQUNUO0FBRU8sU0FBU2hGLHNCQUFzQjJDLElBQUksRUFBRUMsT0FBTztJQUNqRCxJQUFJLEVBQUV1QyxnQkFBZ0IsSUFBSSxFQUFFLEdBQUd4QztJQUUvQixJQUFJd0Msa0JBQWtCLE1BQU07UUFDMUIsTUFBTSxFQUFFQyxhQUFhLEVBQUUsR0FBR2xDLGlCQUFRLEVBQzVCbUMsb0JBQW9CRixlQUFnQixHQUFHO1FBRTdDeEMsT0FBTzBDLG1CQUFtQixHQUFHO1FBRTdCRixnQkFBZ0JDLGNBQWNqQyxRQUFRLENBQUNSLE1BQU1DO0lBQy9DO0lBRUEsT0FBT3VDO0FBQ1Q7QUFFTyxTQUFTakYsMkJBQTJCeUMsSUFBSSxFQUFFQyxPQUFPO0lBQ3RELElBQUksRUFBRTBDLGtCQUFrQixFQUFFLEdBQUczQztJQUU3QixNQUFNLEVBQUU0QyxrQkFBa0IsRUFBRSxHQUFHckMsaUJBQVEsRUFDakNzQyx5QkFBeUJGLG9CQUFxQixHQUFHO0lBRXZEM0MsT0FBTzZDLHdCQUF5QixHQUFHO0lBRW5DRixxQkFBcUJDLG1CQUFtQnBDLFFBQVEsQ0FBQ1IsTUFBTUM7SUFFdkQsT0FBTzBDO0FBQ1Q7QUFFTyxTQUFTakQsY0FBY00sSUFBSSxFQUFFOEMsS0FBSyxFQUFFN0MsT0FBTztJQUNoRCxNQUFNLEVBQUU2QyxPQUFPQyxTQUFTLEVBQUUsR0FBRy9DO0lBRTdCLE1BQU0sRUFBRWdELElBQUksRUFBRSxHQUFHekMsaUJBQVE7SUFFekJ3QyxVQUFVRSxPQUFPLENBQUMsQ0FBQ0M7UUFDakIsTUFBTWxELE9BQU9rRCxVQUNQekMsT0FBT3VDLEtBQUt4QyxRQUFRLENBQUNSLE1BQU1DO1FBRWpDNkMsTUFBTUssSUFBSSxDQUFDMUM7SUFDYjtBQUNGO0FBRU8sU0FBU3ZCLGNBQWNjLElBQUksRUFBRUMsT0FBTztJQUN6QyxJQUFJLEVBQUVtRCxLQUFLLEVBQUUsR0FBR3BEO0lBRWhCLE1BQU0sRUFBRU0sSUFBSSxFQUFFLEdBQUdDLGlCQUFRLEVBQ25COEMsWUFBWUQsT0FBTyxHQUFHO0lBRTVCQSxRQUFRQyxVQUFVQyxHQUFHLENBQUMsQ0FBQ2pEO1FBQ3JCLE1BQU1MLE9BQU9LLFVBQ1BELE9BQU9FLEtBQUtFLFFBQVEsQ0FBQ1IsTUFBTUM7UUFFakMsT0FBT0c7SUFDVDtJQUVBLE9BQU9nRDtBQUNUO0FBRU8sU0FBU2xGLGNBQWM4QixJQUFJLEVBQUVDLE9BQU87SUFDekMsSUFBSSxFQUFFc0QsS0FBSyxFQUFFLEdBQUd2RDtJQUVoQixNQUFNLEVBQUV3RCxJQUFJLEVBQUUsR0FBR2pELGlCQUFRLEVBQ25Ca0QsWUFBWUYsT0FBTyxHQUFHO0lBRTVCQSxRQUFRRSxVQUFVSCxHQUFHLENBQUMsQ0FBQ0k7UUFDckIsTUFBTTFELE9BQU8wRCxVQUNQQyxPQUFPSCxLQUFLaEQsUUFBUSxDQUFDUixNQUFNQztRQUVqQyxPQUFPMEQ7SUFDVDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTeEgsY0FBY2lFLElBQUksRUFBRUMsT0FBTztJQUN6QyxJQUFJLEVBQUUyRCxLQUFLLEVBQUUsR0FBRzVEO0lBRWhCLE1BQU0sRUFBRTZELEtBQUssRUFBRSxHQUFHdEQsaUJBQVEsRUFDcEJ1RCxZQUFZRixPQUFRLEdBQUc7SUFFN0I1RCxPQUFPOEQsV0FBVyxHQUFHO0lBRXJCRixRQUFRQyxNQUFNckQsUUFBUSxDQUFDUixNQUFNQztJQUU3QixPQUFPMkQ7QUFDVDtBQUVPLFNBQVNySSxlQUFleUUsSUFBSSxFQUFFQyxPQUFPO0lBQzFDLElBQUksRUFBRThELE1BQU0sRUFBRSxHQUFHL0Q7SUFFakIsTUFBTSxFQUFFZSxLQUFLLEVBQUUsR0FBR1IsaUJBQVEsRUFDeEJ5RCxhQUFhRCxRQUFRLEdBQUc7SUFFMUJBLFNBQVNDLFdBQVdWLEdBQUcsQ0FBQyxDQUFDeEM7UUFDdkIsTUFBTWQsT0FBT2MsV0FDWEQsUUFBUUUsTUFBTVAsUUFBUSxDQUFDUixNQUFNQztRQUUvQixPQUFPWTtJQUNUO0lBRUEsT0FBT2tEO0FBQ1Q7QUFFTyxTQUFTOUgsZUFBZStELElBQUksRUFBRUMsT0FBTztJQUMxQyxJQUFJLEVBQUVnRSxNQUFNLEVBQUUsR0FBR2pFO0lBRWpCLE1BQU0sRUFBRTZELEtBQUssRUFBRSxHQUFHdEQsaUJBQVEsRUFDcEIyRCxhQUFhRCxRQUFTLEdBQUc7SUFFL0JBLFNBQVNDLFdBQVdaLEdBQUcsQ0FBQyxDQUFDUTtRQUN2QixNQUFNOUQsT0FBTzhELFdBQ1BGLFFBQVFDLE1BQU1yRCxRQUFRLENBQUNSLE1BQU1DO1FBRW5DLE9BQU8yRDtJQUNUO0lBRUEsT0FBT0s7QUFDVDtBQUVPLFNBQVMzSixlQUFlMEYsSUFBSSxFQUFFQyxPQUFPO0lBQzFDLElBQUksRUFBRWtFLE1BQU0sRUFBRSxHQUFHbkU7SUFFakIsTUFBTSxFQUFFb0UsS0FBSyxFQUFFLEdBQUc3RCxpQkFBUSxFQUNwQjhELGFBQWFGLFFBQVEsR0FBRztJQUU5QkEsU0FBU0UsV0FBV2YsR0FBRyxDQUFDLENBQUNnQjtRQUN2QixNQUFNdEUsT0FBT3NFLFdBQ1BDLFFBQVFILE1BQU01RCxRQUFRLENBQUNSLE1BQU1DO1FBRW5DLE9BQU9zRTtJQUNUO0lBRUEsT0FBT0o7QUFDVDtBQUVPLFNBQVNoSCxpQkFBaUI2QyxJQUFJLEVBQUVDLE9BQU87SUFDNUMsSUFBSSxFQUFFdUUsUUFBUSxFQUFFLEdBQUd4RTtJQUVuQixNQUFNLEVBQUV5RSxPQUFPLEVBQUUsR0FBR2xFLGlCQUFRLEVBQ3RCbUUsZUFBZUYsVUFBVyxHQUFHO0lBRW5DQSxXQUFXRSxhQUFhcEIsR0FBRyxDQUFDLENBQUNxQjtRQUMzQixNQUFNM0UsT0FBTzJFLGFBQ1BDLFVBQVVILFFBQVFqRSxRQUFRLENBQUNSLE1BQU1DO1FBRXZDLE9BQU8yRTtJQUNUO0lBRUEsT0FBT0o7QUFDVDtBQUVPLFNBQVNwRixpQkFBaUJZLElBQUksRUFBRUMsT0FBTztJQUM1QyxJQUFJLEVBQUU0RSxRQUFRLEVBQUUsR0FBRzdFO0lBRW5CLE1BQU0sRUFBRThFLE9BQU8sRUFBRSxHQUFHdkUsaUJBQVEsRUFDdEJ3RSxlQUFlRixVQUFVLEdBQUc7SUFFbENBLFdBQVdFLGFBQWF6QixHQUFHLENBQUMsQ0FBQzBCO1FBQzNCLE1BQU1oRixPQUFPZ0YsYUFDUEMsVUFBVUgsUUFBUXRFLFFBQVEsQ0FBQ1IsTUFBTUM7UUFFdkMsT0FBT2dGO0lBQ1Q7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBU2pGLGtCQUFrQkksSUFBSSxFQUFFQyxPQUFPO0lBQzdDLElBQUksRUFBRWlGLFNBQVMsRUFBRSxHQUFHbEY7SUFFcEIsTUFBTSxFQUFFbUYsUUFBUSxFQUFFLEdBQUc1RSxpQkFBUSxFQUN2QjZFLGdCQUFnQkYsV0FBVyxHQUFHO0lBRXBDQSxZQUFZRSxjQUFjOUIsR0FBRyxDQUFDLENBQUMrQjtRQUM3QixNQUFNckYsT0FBT3FGLGNBQ1BDLFdBQVdILFNBQVMzRSxRQUFRLENBQUNSLE1BQU1DO1FBRXpDLE9BQU9xRjtJQUNUO0lBRUEsT0FBT0o7QUFDVDtBQUVPLFNBQVMvSixtQkFBbUI2RSxJQUFJLEVBQUVDLE9BQU87SUFDOUMsSUFBSSxFQUFFc0YsVUFBVSxFQUFFLEdBQUd2RjtJQUVyQixNQUFNLEVBQUV3RixRQUFRLEVBQUUsR0FBR2pGLGlCQUFRLEVBQ3ZCa0YsaUJBQWlCRixZQUFZLEdBQUc7SUFFdENBLGFBQWFFLGVBQWVuQyxHQUFHLENBQUMsQ0FBQ29DO1FBQy9CLE1BQU0xRixPQUFPMEYsY0FDUEMsV0FBV0gsU0FBU2hGLFFBQVEsQ0FBQ1IsTUFBTUM7UUFFekMsT0FBTzBGO0lBQ1Q7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBUzlILG1CQUFtQnVDLElBQUksRUFBRUMsT0FBTztJQUM5QyxJQUFJLEVBQUUyRixVQUFVLEVBQUUsR0FBRzVGO0lBRXJCLE1BQU0sRUFBRTZGLFFBQVEsRUFBRSxHQUFHdEYsaUJBQVEsRUFDdkJ1RixpQkFBaUJGLFlBQVksR0FBRztJQUV0Q0EsYUFBYUUsZUFBZXhDLEdBQUcsQ0FBQyxDQUFDeUM7UUFDL0IsTUFBTS9GLE9BQU8rRixjQUNQQyxXQUFXSCxTQUFTckYsUUFBUSxDQUFDUixNQUFNQztRQUV6QyxPQUFPK0Y7SUFDVDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTaEgsbUJBQW1Cb0IsSUFBSSxFQUFFQyxPQUFPO0lBQzlDLE1BQU0sRUFBRWdHLFlBQVlDLGNBQWMsRUFBRSxHQUFHbEc7SUFFdkMsTUFBTWlHLGFBQWFDLGVBQWU1QyxHQUFHLENBQUMsQ0FBQzZDO1FBQy9CLE1BQU1uRyxPQUFPbUcsZUFDUCxFQUFFakcsSUFBSSxFQUFFUSxVQUFVLEVBQUUsR0FBR1YsTUFDdkJvRyx1QkFBdUIsQUFBQzFGLGVBQWUsT0FDZCxHQUFHQSxhQUFhUixNQUFNLEdBQ25CQSxNQUM1Qm1HLFlBQVlwRyxRQUFRVyx5QkFBeUIsQ0FBQ3dGO1FBRXBELE9BQU9DO0lBQ1Q7SUFFTixPQUFPSjtBQUNUO0FBRU8sU0FBU3hLLG1CQUFtQnVFLElBQUksRUFBRUMsT0FBTztJQUM5QyxJQUFJLEVBQUVxRyxVQUFVLEVBQUUsR0FBR3RHO0lBRXJCLE1BQU0sRUFBRXVHLFVBQVUsRUFBRSxHQUFHaEcsaUJBQVEsRUFDekJpRyxpQkFBaUJGLFlBQWEsR0FBRztJQUV2Q0EsYUFBYUUsZUFBZWxELEdBQUcsQ0FBQyxDQUFDbUQ7UUFDL0IsTUFBTXpHLE9BQU95RyxnQkFDUEMsYUFBYUgsV0FBVy9GLFFBQVEsQ0FBQ1IsTUFBTUM7UUFFN0MsT0FBT3lHO0lBQ1Q7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBU3JKLG1CQUFtQitDLElBQUksRUFBRUMsT0FBTztJQUM5QyxJQUFJLEVBQUUwRyxVQUFVLEVBQUUsR0FBRzNHO0lBRXJCLE1BQU0sRUFBRTRHLFNBQVMsRUFBRSxHQUFHckcsaUJBQVEsRUFDeEJzRyxpQkFBaUJGLFlBQVksR0FBRztJQUV0Q0EsYUFBYUUsZUFBZXZELEdBQUcsQ0FBQyxDQUFDd0Q7UUFDL0IsTUFBTTlHLE9BQU84RyxlQUNQQyxZQUFZSCxVQUFVcEcsUUFBUSxDQUFDUixNQUFNQztRQUUzQyxPQUFPOEc7SUFDVDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTOUssbUJBQW1CbUUsSUFBSSxFQUFFQyxPQUFPO0lBQzlDLElBQUksRUFBRStHLFVBQVUsRUFBRSxHQUFHaEg7SUFFckIsTUFBTSxFQUFFaUgsU0FBUyxFQUFFLEdBQUcxRyxpQkFBUSxFQUN4QjJHLGlCQUFpQkYsWUFBWSxHQUFHO0lBRXRDQSxhQUFhRSxlQUFlNUQsR0FBRyxDQUFDLENBQUM2RDtRQUMvQixNQUFNbkgsT0FBT21ILGVBQ1BDLFlBQVlILFVBQVV6RyxRQUFRLENBQUNSLE1BQU1DO1FBRTNDLE9BQU9tSDtJQUNUO0lBRUEsT0FBT0o7QUFDVDtBQUVPLFNBQVN4SSxtQkFBbUJ3QixJQUFJLEVBQUVDLE9BQU87SUFDOUMsSUFBSSxFQUFFb0gsVUFBVSxFQUFFLEdBQUdySDtJQUVyQixNQUFNLEVBQUVxQixTQUFTLEVBQUUsR0FBR2QsaUJBQVEsRUFDeEIrRyxpQkFBaUJELFlBQVksR0FBRztJQUV0Q0EsYUFBYUMsZUFBZWhFLEdBQUcsQ0FBQyxDQUFDaEM7UUFDL0IsTUFBTXRCLE9BQU9zQixlQUNQRixZQUFZQyxVQUFVYixRQUFRLENBQUNSLE1BQU1DO1FBRTNDLE9BQU9tQjtJQUNUO0lBRUEsT0FBT2lHO0FBQ1Q7QUFFTyxTQUFTbk4sbUJBQW1COEYsSUFBSSxFQUFFQyxPQUFPO0lBQzlDLElBQUksRUFBRXNILFVBQVUsRUFBRSxHQUFHdkg7SUFFckIsTUFBTSxFQUFFd0gsYUFBYSxFQUFFQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQixFQUFFQyxrQkFBa0IsRUFBRUMsa0JBQWtCLEVBQUUsR0FBR3RILGlCQUFRLEVBQzVIdUgsaUJBQWlCUCxZQUFZLEdBQUc7SUFFdENBLGFBQWFPLGVBQWV4RSxHQUFHLENBQUMsQ0FBQ3lFO1FBQy9CLE1BQU0vSCxPQUFPK0gsZUFDUEMsWUFBWVIsY0FBY2hILFFBQVEsQ0FBQ1IsTUFBTUMsWUFDNUJ3SCxpQkFBaUJqSCxRQUFRLENBQUNSLE1BQU1DLFlBQ2hDeUgsa0JBQWtCbEgsUUFBUSxDQUFDUixNQUFNQyxZQUNqQzBILGtCQUFrQm5ILFFBQVEsQ0FBQ1IsTUFBTUMsWUFDakMySCxtQkFBbUJwSCxRQUFRLENBQUNSLE1BQU1DLFlBQ2xDNEgsbUJBQW1CckgsUUFBUSxDQUFDUixNQUFNQztRQUVyRCxPQUFPK0g7SUFDVDtJQUVBLE9BQU9UO0FBQ1Q7QUFFTyxTQUFTdkosbUJBQW1CZ0MsSUFBSSxFQUFFQyxPQUFPO0lBQzlDLElBQUksRUFBRWdJLFVBQVUsRUFBRSxHQUFHakk7SUFFckIsTUFBTSxFQUFFOEIsU0FBUyxFQUFFLEdBQUd2QixpQkFBUSxFQUN4QjJILGlCQUFpQkQsWUFBWSxHQUFHO0lBRXRDQSxhQUFhQyxlQUFlNUUsR0FBRyxDQUFDLENBQUN2QjtRQUMvQixNQUFNL0IsT0FBTytCLGVBQ1BGLFlBQVlDLFVBQVV0QixRQUFRLENBQUNSLE1BQU1DO1FBRTNDLE9BQU80QjtJQUNUO0lBRUEsT0FBT29HO0FBQ1Q7QUFFTyxTQUFTck4sb0JBQW9Cb0YsSUFBSSxFQUFFQyxPQUFPO0lBQy9DLElBQUksRUFBRWtJLFdBQVcsRUFBRSxHQUFHbkk7SUFFdEIsTUFBTSxFQUFFb0ksVUFBVSxFQUFFLEdBQUc3SCxpQkFBUSxFQUN6QjhILGtCQUFrQkYsYUFBYSxHQUFHO0lBRXhDQSxjQUFjRSxnQkFBZ0IvRSxHQUFHLENBQUMsQ0FBQ2dGO1FBQ2pDLE1BQU10SSxPQUFPc0ksZ0JBQ1BDLGFBQWFILFdBQVc1SCxRQUFRLENBQUNSLE1BQU1DO1FBRTdDLE9BQU9zSTtJQUNUO0lBRUEsT0FBT0o7QUFDVDtBQUVPLFNBQVMzTixvQkFBb0J3RixJQUFJLEVBQUVDLE9BQU87SUFDL0MsSUFBSSxFQUFFdUksV0FBVyxFQUFFLEdBQUd4STtJQUV0QixNQUFNLEVBQUV5SSxVQUFVLEVBQUUsR0FBR2xJLGlCQUFRLEVBQ3pCbUksa0JBQWtCRixhQUFhLEdBQUc7SUFFeENBLGNBQWNFLGdCQUFnQnBGLEdBQUcsQ0FBQyxDQUFDcUY7UUFDakMsTUFBTTNJLE9BQU8ySSxnQkFDUEMsYUFBYUgsV0FBV2pJLFFBQVEsQ0FBQ1IsTUFBTUM7UUFFN0MsT0FBTzJJO0lBQ1Q7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBU3BPLG9CQUFvQjRGLElBQUksRUFBRUMsT0FBTztJQUMvQyxJQUFJLEVBQUU0SSxXQUFXLEVBQUUsR0FBRzdJO0lBRXRCLE1BQU0sRUFBRThJLFVBQVUsRUFBRSxHQUFHdkksaUJBQVEsRUFDekJ3SSxrQkFBa0JGLGFBQWEsR0FBRztJQUV4Q0EsY0FBY0UsZ0JBQWdCekYsR0FBRyxDQUFDLENBQUMwRjtRQUNqQyxNQUFNaEosT0FBT2dKLGdCQUNQQyxhQUFhSCxXQUFXdEksUUFBUSxDQUFDUixNQUFNQztRQUU3QyxPQUFPZ0o7SUFDVDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTdEoscUJBQXFCUyxJQUFJLEVBQUVDLE9BQU87SUFDaEQsSUFBSSxFQUFFaUosWUFBWSxFQUFFLEdBQUdsSjtJQUV2QixNQUFNLEVBQUVtSixVQUFVLEVBQUUsR0FBRzVJLGlCQUFRLEVBQ3pCNkksbUJBQW1CRixjQUFjLEdBQUc7SUFFMUNBLGVBQWVFLGlCQUFpQjlGLEdBQUcsQ0FBQyxDQUFDK0Y7UUFDbkMsTUFBTXJKLE9BQU9xSixnQkFDUEMsYUFBYUgsV0FBVzNJLFFBQVEsQ0FBQ1IsTUFBTUM7UUFFN0MsT0FBT3FKO0lBQ1Q7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBU3BPLHFCQUFxQmtGLElBQUksRUFBRUMsT0FBTztJQUNoRCxJQUFJLEVBQUVzSixZQUFZLEVBQUUsR0FBR3ZKO0lBRXZCLE1BQU0sRUFBRXdKLFdBQVcsRUFBRSxHQUFHakosaUJBQVEsRUFDMUJrSixtQkFBbUJGLGNBQWMsR0FBRztJQUUxQ0EsZUFBZUUsaUJBQWlCbkcsR0FBRyxDQUFDLENBQUNvRztRQUNuQyxNQUFNMUosT0FBTzBKLGlCQUNQQyxjQUFjSCxZQUFZaEosUUFBUSxDQUFDUixNQUFNQztRQUUvQyxPQUFPMEo7SUFDVDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTaE4scUJBQXFCeUQsSUFBSSxFQUFFQyxPQUFPO0lBQ2hELElBQUksRUFBRTJKLFlBQVksRUFBRSxHQUFHNUo7SUFFdkIsTUFBTSxFQUFFNkosV0FBVyxFQUFFLEdBQUd0SixpQkFBUSxFQUMxQnVKLG1CQUFtQkYsY0FBYyxHQUFHO0lBRTFDQSxlQUFlRSxpQkFBaUJ4RyxHQUFHLENBQUMsQ0FBQ3lHO1FBQ25DLE1BQU0vSixPQUFPK0osaUJBQ1BDLGNBQWNILFlBQVlySixRQUFRLENBQUNSLE1BQU1DO1FBRS9DLE9BQU8rSjtJQUNUO0lBRUEsT0FBT0o7QUFDVDtBQUVPLFNBQVM5SyxxQkFBcUJrQixJQUFJLEVBQUVDLE9BQU87SUFDaEQsSUFBSSxFQUFFZ0ssWUFBWSxFQUFFLEdBQUdqSztJQUV2QixNQUFNLEVBQUVrSyxXQUFXLEVBQUUsR0FBRzNKLGlCQUFRLEVBQzFCNEosbUJBQW1CRixjQUFlLEdBQUc7SUFFM0NBLGVBQWVFLGlCQUFpQjdHLEdBQUcsQ0FBQyxDQUFDOEc7UUFDbkMsTUFBTXBLLE9BQU9vSyxpQkFDUEMsY0FBY0gsWUFBWTFKLFFBQVEsQ0FBQ1IsTUFBTUM7UUFFL0MsT0FBT29LO0lBQ1Q7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBU3ZMLHNCQUFzQnNCLElBQUksRUFBRUMsT0FBTztJQUNqRCxJQUFJLEVBQUVxSyxnQkFBZ0IsRUFBRSxFQUFFLEdBQUd0SyxNQUFPLEdBQUc7SUFFdkMsTUFBTSxFQUFFdUsscUJBQXFCLEVBQUUsR0FBR2hLLGlCQUFRLEVBQ3BDaUssb0JBQW9CRixlQUNwQkcsZUFBZUYsdUJBQXVCLEdBQUc7SUFFL0NELGdCQUFnQkUsa0JBQWtCbEgsR0FBRyxDQUFDLENBQUNvSDtRQUNyQyxNQUFNMUssT0FBTzBLLGtCQUNQQyxlQUFlRixhQUFhakssUUFBUSxDQUFDUixNQUFNQztRQUVqRCxPQUFPMEs7SUFDVDtJQUVBLE9BQU9MO0FBQ1Q7QUFFTyxTQUFTM04sc0JBQXNCcUQsSUFBSSxFQUFFQyxPQUFPO0lBQ2pELElBQUksRUFBRTJLLGFBQWEsRUFBRSxHQUFHNUs7SUFFeEIsTUFBTSxFQUFFc0MsWUFBWSxFQUFFLEdBQUcvQixpQkFBUSxFQUMzQnNLLG9CQUFvQkQsZUFBZSxHQUFHO0lBRTVDQSxnQkFBZ0JDLGtCQUFrQnZILEdBQUcsQ0FBQyxDQUFDZjtRQUNyQyxNQUFNdkMsT0FBT3VDLGtCQUNQRixlQUFlQyxhQUFhOUIsUUFBUSxDQUFDUixNQUFNQztRQUVqRCxPQUFPb0M7SUFDVDtJQUVBLE9BQU91STtBQUNUO0FBRU8sU0FBUzFQLHlCQUF5QjhFLElBQUksRUFBRUMsT0FBTztJQUNwRCxNQUFNNkssaUJBQWlCN0s7SUFFdEIsQ0FBQSxFQUFDQSxPQUFPLEVBQUMsR0FBR0QsSUFBRztJQUVoQkEsT0FBT0MsU0FBUyxHQUFHO0lBRW5CQSxVQUFVNkssZ0JBQWdCLEdBQUc7SUFFN0IsTUFBTUMsb0JBQW9CQyxrQkFBZ0IsQ0FBQ3hLLFFBQVEsQ0FBQ1IsTUFBTUM7SUFFMUQsT0FBTzhLO0FBQ1Q7QUFFTyxTQUFTcE4sMEJBQTBCcUMsSUFBSSxFQUFFQyxPQUFPO0lBQ3JELElBQUksRUFBRWdMLGlCQUFpQixFQUFFLEdBQUdqTDtJQUU1QixNQUFNLEVBQUVrTCxnQkFBZ0IsRUFBRSxHQUFHM0ssaUJBQVEsRUFDL0I0Syx3QkFBd0JGLG1CQUFtQixHQUFHO0lBRXBEQSxvQkFBb0JFLHNCQUFzQjdILEdBQUcsQ0FBQyxDQUFDOEg7UUFDN0MsTUFBTXBMLE9BQU9vTCxzQkFDUEMsbUJBQW1CSCxpQkFBaUIxSyxRQUFRLENBQUNSLE1BQU1DO1FBRXpELE9BQU9vTDtJQUNUO0lBRUEsT0FBT0o7QUFDVDtBQUVPLFNBQVNuTyxlQUFlb0QsSUFBSTtJQUNqQyxNQUFNQyxXQUFXRCxNQUFPLEdBQUc7SUFFM0IsT0FBT0M7QUFDVDtBQUVPLFNBQVNsQixlQUFlbUIsSUFBSTtJQUNqQyxNQUFNQyxXQUFXLEFBQUNELFNBQVMsT0FDUkEsS0FBS2tMLE1BQU0sS0FDVDtJQUVyQixPQUFPakw7QUFDVDtBQUVPLFNBQVNaLGVBQWVnQixJQUFJO0lBQ2pDLE1BQU15QyxXQUFXLEFBQUN6QyxTQUFTLE9BQ1JBLEtBQUs2SyxNQUFNLEtBQ1Q7SUFFckIsT0FBT3BJO0FBQ1Q7QUFFTyxTQUFTNUgsaUJBQWlCdUYsS0FBSztJQUNwQyxNQUFNQyxZQUFZLEFBQUNELFVBQVUsT0FDVEEsTUFBTXlLLE1BQU0sS0FDVjtJQUV0QixPQUFPeEs7QUFDVDtBQUVPLFNBQVM5RSxpQkFBaUI0SCxLQUFLO0lBQ3BDLE1BQU1FLFlBQVlGLE1BQU0wSCxNQUFNO0lBRTlCLE9BQU94SDtBQUNUO0FBRU8sU0FBUzlHLHFCQUFxQmdFLE9BQU87SUFDMUMsTUFBTXVLLGNBQWN2SyxTQUFVLEdBQUc7SUFFakMsT0FBT3VLO0FBQ1Q7QUFFTyxTQUFTalAsdUJBQXVCMkUsUUFBUTtJQUM3QyxNQUFNdUssZUFBZSxBQUFDdkssYUFBYSxPQUNaQSxTQUFTcUssTUFBTSxLQUNiO0lBRXpCLE9BQU9FO0FBQ1Q7QUFFTyxTQUFTek4seUJBQXlCOEQsU0FBUztJQUNoRCxNQUFNRSxnQkFBZ0JGLFVBQVV5SixNQUFNO0lBRXRDLE9BQU92SjtBQUNUO0FBRU8sU0FBU3hELHlCQUF5QjZDLFNBQVM7SUFDaEQsTUFBTUUsZ0JBQWdCLEFBQUNGLGNBQWMsT0FDYkEsVUFBVWtLLE1BQU0sS0FDZDtJQUUxQixPQUFPaEs7QUFDVDtBQUVPLFNBQVNyRyx5QkFBeUJzRyxTQUFTO0lBQ2hELE1BQU1FLGdCQUFnQkYsVUFBVStKLE1BQU07SUFFdEMsT0FBTzdKO0FBQ1Q7QUFFTyxTQUFTcEQseUJBQXlCcUQsU0FBUztJQUNoRCxNQUFNRSxnQkFBZ0IsQUFBQ0YsY0FBYyxPQUNiQSxVQUFVNEosTUFBTSxLQUNkO0lBRTFCLE9BQU8xSjtBQUNUO0FBRU8sU0FBU2hHLDJCQUEyQm9HLFVBQVU7SUFDbkQsTUFBTUMsaUJBQWlCRCxZQUFhLEdBQUc7SUFFdkMsT0FBT0M7QUFDVDtBQUVPLFNBQVN0SCwyQkFBMkJ1SCxVQUFVO0lBQ25ELE1BQU1FLGlCQUFpQkYsV0FBV29KLE1BQU07SUFFeEMsT0FBT2xKO0FBQ1Q7QUFFTyxTQUFTdkUsNkJBQTZCNE4sV0FBVztJQUN0RCxNQUFNQyxrQkFBa0JELGFBQWMsR0FBRztJQUV6QyxPQUFPQztBQUNUO0FBRU8sU0FBU2hQLCtCQUErQjJGLFlBQVk7SUFDekQsTUFBTUUsbUJBQW1CRixhQUFhaUosTUFBTTtJQUU1QyxPQUFPL0k7QUFDVDtBQUVPLFNBQVNqRixpQ0FBaUNrRixhQUFhO0lBQzVELE1BQU1FLG9CQUFvQixBQUFDRixrQkFBa0IsT0FDakJBLGNBQWM4SSxNQUFNLEtBQ2xCO0lBRTlCLE9BQU81STtBQUNUO0FBRU8sU0FBU2xGLDJDQUEyQ21GLGtCQUFrQjtJQUMzRSxNQUFNRSx5QkFBeUJGLG1CQUFtQjJJLE1BQU07SUFFeEQsT0FBT3pJO0FBQ1Q7QUFFTyxTQUFTMUQsaUJBQWlCaUUsS0FBSztJQUNwQyxNQUFNQyxZQUFZRCxNQUFNRSxHQUFHLENBQUMsQ0FBQ2xEO1FBQzNCLE1BQU1DLFdBQVdELEtBQUtrTCxNQUFNO1FBRTVCLE9BQU9qTDtJQUNUO0lBRUEsT0FBT2dEO0FBQ1Q7QUFFTyxTQUFTMUQsaUJBQWlCbUQsS0FBSztJQUNwQyxNQUFNQyxZQUFZRCxNQUFNUSxHQUFHLENBQUMsQ0FBQzdDO1FBQzNCLE1BQU15QyxXQUFXekMsS0FBSzZLLE1BQU07UUFFNUIsT0FBT3BJO0lBQ1Q7SUFFQSxPQUFPSDtBQUNUO0FBRU8sU0FBUzVFLGlCQUFpQm9GLEtBQUs7SUFDcEMsTUFBTUUsWUFBWUYsTUFBTUQsR0FBRyxDQUFDLENBQUNLO1FBQzNCLE1BQU1ELFdBQVdDLEtBQUsySCxNQUFNO1FBRTVCLE9BQU81SDtJQUNUO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVN2SCxtQkFBbUIrSCxNQUFNO0lBQ3ZDLE1BQU1DLGFBQWFELE9BQU9YLEdBQUcsQ0FBQyxDQUFDTTtRQUM3QixNQUFNRSxZQUFZRixNQUFNMEgsTUFBTTtRQUU5QixPQUFPeEg7SUFDVDtJQUVBLE9BQU9JO0FBQ1Q7QUFFTyxTQUFTMUksbUJBQW1CdUksTUFBTTtJQUN2QyxNQUFNQyxhQUFhRCxPQUFPVCxHQUFHLENBQUMsQ0FBQ3pDO1FBQzdCLE1BQU1DLFlBQVlELE1BQU15SyxNQUFNO1FBRTlCLE9BQU94SztJQUNUO0lBRUEsT0FBT2tEO0FBQ1Q7QUFFTyxTQUFTekosbUJBQW1CNEosTUFBTTtJQUN2QyxNQUFNRSxhQUFhRixPQUFPYixHQUFHLENBQUMsQ0FBQ2lCO1FBQzdCLE1BQU1ELFlBQVlDLE1BQU0rRyxNQUFNO1FBRTlCLE9BQU9oSDtJQUNUO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVNqSCx1QkFBdUJvSCxRQUFRO0lBQzdDLE1BQU1FLGVBQWVGLFNBQVNsQixHQUFHLENBQUMsQ0FBQ3NCO1FBQ2pDLE1BQU1ELGNBQWNDLFFBQVEwRyxNQUFNO1FBRWxDLE9BQU8zRztJQUNUO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVNyRix1QkFBdUJ3RixRQUFRO0lBQzdDLE1BQU1FLGVBQWVGLFNBQVN2QixHQUFHLENBQUMsQ0FBQzJCO1FBQ2pDLE1BQU1ELGNBQWNDLFFBQVFxRyxNQUFNO1FBRWxDLE9BQU90RztJQUNUO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVNsRix5QkFBeUJxRixTQUFTO0lBQ2hELE1BQU1FLGdCQUFnQkYsVUFBVTVCLEdBQUcsQ0FBQyxDQUFDZ0M7UUFDbkMsTUFBTUQsZUFBZUMsU0FBU2dHLE1BQU07UUFFcEMsT0FBT2pHO0lBQ1Q7SUFFQSxPQUFPRDtBQUNUO0FBRU8sU0FBUzFKLDJCQUEyQjRLLFVBQVU7SUFDbkQsTUFBTUUsaUJBQWlCRixXQUFXaEQsR0FBRyxDQUFDLENBQUNvRDtRQUNyQyxNQUFNRCxpQkFBaUJDLFdBQVc0RSxNQUFNO1FBRXhDLE9BQU83RTtJQUNUO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVMzSCwyQkFBMkJvSCxVQUFVO0lBQ25ELE1BQU1DLGlCQUFpQkQsV0FBVzNDLEdBQUcsQ0FBQyxDQUFDK0M7UUFDckMsTUFBTUYsZ0JBQWdCRSxVQUFVaUYsTUFBTTtRQUV0QyxPQUFPbkY7SUFDVDtJQUVBLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTaEosMkJBQTJCeUosVUFBVTtJQUNuRCxNQUFNRSxpQkFBaUJGLFdBQVdyRCxHQUFHLENBQUMsQ0FBQ3lEO1FBQ3JDLE1BQU1ELGdCQUFnQkMsVUFBVXVFLE1BQU07UUFFdEMsT0FBT3hFO0lBQ1Q7SUFFQSxPQUFPRDtBQUNUO0FBRU8sU0FBU25KLDJCQUEyQmtJLFVBQVU7SUFDbkQsTUFBTUUsaUJBQWlCRixXQUFXdEMsR0FBRyxDQUFDLENBQUMwQztRQUNyQyxNQUFNRCxlQUFlQyxTQUFTc0YsTUFBTTtRQUVwQyxPQUFPdkY7SUFDVDtJQUVBLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTaEssMkJBQTJCa0wsVUFBVTtJQUNuRCxNQUFNRSxpQkFBaUJGLFdBQVcxRCxHQUFHLENBQUMsQ0FBQzhEO1FBQ3JDLE1BQU1ELGdCQUFnQkMsVUFBVWtFLE1BQU07UUFFdEMsT0FBT25FO0lBQ1Q7SUFFQSxPQUFPRDtBQUNUO0FBRU8sU0FBUzlMLDJCQUEyQm1LLFVBQVU7SUFDbkQsTUFBTUUsaUJBQWlCRixXQUFXakMsR0FBRyxDQUFDLENBQUNxQztRQUNyQyxNQUFNRCxlQUFlQyxTQUFTMkYsTUFBTTtRQUVwQyxPQUFPNUY7SUFDVDtJQUVBLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTaEgsMkJBQTJCNEksVUFBVTtJQUNuRCxNQUFNQyxpQkFBaUJELFdBQVcvRCxHQUFHLENBQUMsQ0FBQ2xDO1FBQ3JDLE1BQU1FLGdCQUFnQkYsVUFBVWtLLE1BQU07UUFFdEMsT0FBT2hLO0lBQ1Q7SUFFQSxPQUFPZ0c7QUFDVDtBQUVPLFNBQVNuTiwyQkFBMkJvTixVQUFVO0lBQ25ELE1BQU1PLGlCQUFpQlAsV0FBV2pFLEdBQUcsQ0FBQyxDQUFDMEU7UUFDckMsTUFBTUQsZ0JBQWdCQyxVQUFVc0QsTUFBTTtRQUV0QyxPQUFPdkQ7SUFDVDtJQUVBLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTN0osMkJBQTJCZ0ssVUFBVTtJQUNuRCxNQUFNQyxpQkFBaUJELFdBQVczRSxHQUFHLENBQUMsQ0FBQ3pCO1FBQ3JDLE1BQU1FLGdCQUFnQkYsVUFBVXlKLE1BQU07UUFFdEMsT0FBT3ZKO0lBQ1Q7SUFFQSxPQUFPbUc7QUFDVDtBQUVPLFNBQVNyTiw2QkFBNkJzTixXQUFXO0lBQ3RELE1BQU1FLGtCQUFrQkYsWUFBWTdFLEdBQUcsQ0FBQyxDQUFDaUY7UUFDdkMsTUFBTUQsaUJBQWlCQyxXQUFXK0MsTUFBTTtRQUV4QyxPQUFPaEQ7SUFDVDtJQUVBLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTNU4sNkJBQTZCK04sV0FBVztJQUN0RCxNQUFNRSxrQkFBa0JGLFlBQVlsRixHQUFHLENBQUMsQ0FBQ3NGO1FBQ3ZDLE1BQU1ELGlCQUFpQkMsV0FBVzBDLE1BQU07UUFFeEMsT0FBTzNDO0lBQ1Q7SUFFQSxPQUFPRDtBQUNUO0FBRU8sU0FBU3JPLDZCQUE2QndPLFdBQVc7SUFDdEQsTUFBTUUsa0JBQWtCRixZQUFZdkYsR0FBRyxDQUFDLENBQUMyRjtRQUN2QyxNQUFNRCxpQkFBaUJDLFdBQVdxQyxNQUFNO1FBRXhDLE9BQU90QztJQUNUO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVNoSywrQkFBK0JrTCxZQUFZO0lBQ3pELE1BQU1FLG1CQUFtQkYsYUFBYTNHLEdBQUcsQ0FBQyxDQUFDK0c7UUFDekMsTUFBTUQsa0JBQWtCQyxZQUFZaUIsTUFBTTtRQUUxQyxPQUFPbEI7SUFDVDtJQUVBLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTcFAsK0JBQStCd08sWUFBWTtJQUN6RCxNQUFNRSxtQkFBbUJGLGFBQWFqRyxHQUFHLENBQUMsQ0FBQ3FHO1FBQ3pDLE1BQU1ELGtCQUFrQkMsWUFBWTJCLE1BQU07UUFFMUMsT0FBTzVCO0lBQ1Q7SUFFQSxPQUFPRDtBQUNUO0FBRU8sU0FBU2pOLCtCQUErQm9OLFlBQVk7SUFDekQsTUFBTUUsbUJBQW1CRixhQUFhdEcsR0FBRyxDQUFDLENBQUMwRztRQUN6QyxNQUFNRCxrQkFBa0JDLFlBQVlzQixNQUFNO1FBRTFDLE9BQU92QjtJQUNUO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVN0SywrQkFBK0IwSixZQUFZO0lBQ3pELE1BQU1FLG1CQUFtQkYsYUFBYTVGLEdBQUcsQ0FBQyxDQUFDZ0c7UUFDekMsTUFBTUQsaUJBQWlCQyxXQUFXZ0MsTUFBTTtRQUV4QyxPQUFPakM7SUFDVDtJQUVBLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTekssaUNBQWlDMkwsYUFBYTtJQUM1RCxNQUFNRSxvQkFBb0JGLGNBQWNoSCxHQUFHLENBQUMsQ0FBQ3FIO1FBQzNDLE1BQU1ELG1CQUFtQkMsYUFBYVcsTUFBTTtRQUU1QyxPQUFPWjtJQUNUO0lBRUEsT0FBT0Y7QUFDVDtBQUVPLFNBQVM1TixpQ0FBaUNnTyxhQUFhO0lBQzVELE1BQU1DLG9CQUFvQkQsY0FBY3RILEdBQUcsQ0FBQyxDQUFDakI7UUFDM0MsTUFBTUUsbUJBQW1CRixhQUFhaUosTUFBTTtRQUU1QyxPQUFPL0k7SUFDVDtJQUVBLE9BQU9zSTtBQUNUO0FBRU8sU0FBU2pOLHlDQUF5Q3FOLGlCQUFpQjtJQUN4RSxNQUFNRSx3QkFBd0JGLGtCQUFrQjNILEdBQUcsQ0FBQyxDQUFDK0g7UUFDbkQsTUFBTUQsdUJBQXVCQyxpQkFBaUJDLE1BQU07UUFFcEQsT0FBT0Y7SUFDVDtJQUVBLE9BQU9EO0FBQ1QifQ==