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
    get substitutionsToCSubstitutionsJSON () {
        return substitutionsToCSubstitutionsJSON;
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
    const termJSON = term; ///
    json = termJSON; ///
    const { Term } = _elements.default;
    term = Term.fromJSON(json, context);
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
function nameToNameJSON(name) {
    const nameJSON = name; ///
    return nameJSON;
}
function termToTermJSON(term) {
    const termJSON = term.toJSON();
    return termJSON;
}
function typeToTypeJSON(type) {
    const typeJSON = type !== null ? type.toJSON() : null;
    return typeJSON;
}
function labelToLabelJSON(label) {
    const labelJSON = label.toJSON();
    return labelJSON;
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
function conclusionToConclusionJSON(conclusion) {
    const conclusionJSON = conclusion.toJSON();
    return conclusionJSON;
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
        type = typeJSON; ///
        return type;
    });
    return typesJSON;
}
function rulesToRulesJSON(rules) {
    const rulesJSON = rules.map((rule)=>{
        const ruleJSON = rule.toJSON();
        rule = ruleJSON; ///
        return rule;
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
        axiom = axiomJSON; ///
        return axiom;
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
        theorem = theoremJSON; ///
        return theorem;
    });
    return theoremsJSON;
}
function variablesToVariablesJSON(variables) {
    const variablesJSON = variables.map((variable)=>{
        const variableJSON = variable.toJSON();
        variable = variableJSON; ///
        return variable;
    });
    return variablesJSON;
}
function hypothesesToHypothesesJSON(hypotheses) {
    const hypothesesJSON = hypotheses.map((hypothesis)=>{
        const hypothesisJSON = hypothesis.toJSON();
        hypothesis = hypothesisJSON; ///
        return hypothesis;
    });
    return hypothesesJSON;
}
function superTypesToSuperTypesJSON(superTypes) {
    const superTypesJSON = superTypes.map((superType)=>{
        const superTypeJSON = superType.toJSON();
        superType = superTypeJSON; ///
        return superType;
    });
    return superTypesJSON;
}
function parametersToParametersJSON(parameters) {
    const parametersJSON = parameters.map((parameter)=>{
        const parameterJSON = parameter.toJSON();
        parameter = parameterJSON; ///
        return parameter;
    });
    return parametersJSON;
}
function propertiesToPropertiesJSON(properties) {
    const propertiesJSON = properties.map((property)=>{
        const propertyJSON = property.toJSON();
        property = propertyJSON; ///
        return property;
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
        conjecture = conjectureJSON; ///
        return conjecture;
    });
    return conjecturesJSON;
}
function combinatorsToCombinatorsJSON(combinators) {
    const combinatorsJSON = combinators.map((combinator)=>{
        const combinatorJSON = combinator.toJSON();
        combinator = combinatorJSON; ///
        return combinator;
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
        constructor = constructorJSON; ///
        return constructor;
    });
    return constructorsJSON;
}
function metatheoremsToMetatheoremsJSON(metatheorems) {
    const metatheoremsJSON = metatheorems.map((metatheorem)=>{
        const metatheoremJSON = metatheorem.toJSON();
        metatheorem = metatheoremJSON; ///
        return metatheorem;
    });
    return metatheoremsJSON;
}
function typePrefixesToTypePrefixesJSON(typePrefixes) {
    const typePrefixesJSON = typePrefixes.map((typePrefix)=>{
        const typePrefixJSON = typePrefix.toJSON();
        typePrefix = typePrefixJSON; ///
        return typePrefix;
    });
    return typePrefixesJSON;
}
function substitutionsToSubstitutionsJSON(substitutions) {
    const substitutionsJSON = substitutions.mapSubstitution((substitution)=>{
        const substitutionJSON = substitution.toJSON();
        return substitutionJSON;
    });
    return substitutionsJSON;
}
function metavariablesToMetavariablesJSON(metavariables) {
    const metavariablesJSON = metavariables.map((metavariable)=>{
        const metavariableJSON = metavariable.toJSON();
        metavariable = metavariableJSON; ///
        return metavariable;
    });
    return metavariablesJSON;
}
function substitutionsToCSubstitutionsJSON(substitutiions) {
    const substitutionsJSON = substitutiions.map((substitution)=>{
        const substitutionJSON = substitution.toJSON();
        return substitutionJSON;
    });
    return substitutionsJSON;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEVwaGVtZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZXBoZW1lcmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgcmV0dXJuIGxlbW1hcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFMZW1tYXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gIHJldHVybiBtZXRhTGVtbWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbmFtZSB9ID0ganNvbjtcblxuICBjb25zdCBuYW1lSlNPTiA9IG5hbWU7ICAvLy9cblxuICBuYW1lID0gbmFtZUpTT047ICAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgY29uc3QgdGVybUpTT04gPSB0ZXJtOyAgLy8vXG5cbiAganNvbiA9IHRlcm1KU09OOyAgLy8vXG5cbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cztcblxuICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICBqc29uID0gdHlwZTsgIC8vL1xuXG4gICAgY29uc3QgeyBuYW1lLCBwcmVmaXhOYW1lIH0gPSBqc29uLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IChwcmVmaXhOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJlZml4TmFtZX0ke25hbWV9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTsgLy8vXG5cbiAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBqc29uID0gbWV0YVR5cGU7ICAvLy9cblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3RhdGVtZW50ID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIGpzb24gPSBzdGF0ZW1lbnRKU09OOyAvLy9cblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGRlZHVjdGlvbiB9ID0ganNvbjtcblxuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb247ICAvLy9cblxuICBqc29uID0gZGVkdWN0aW9uSlNPTjsgIC8vL1xuXG4gIGRlZHVjdGlvbiA9IERlZHVjdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzaWduYXR1cmUgPSBudWxsIH0gPSBqc29uO1xuXG4gIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAganNvbiA9IHNpZ25hdHVyZUpTT047IC8vL1xuXG4gICAgc2lnbmF0dXJlID0gU2lnbmF0dXJlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSByZWZlcmVuY2VKU09OOyAvLy9cblxuICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGU7ICAvLy9cblxuICBqc29uID0gbWV0YXZhcmlhYmxlSlNPTjsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9jZWR1cmVDYWxsID0gbnVsbCB9ID0ganNvbjtcblxuICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbEpTT04gPSBwcm9jZWR1cmVDYWxsOyAgLy8vXG5cbiAgICBqc29uID0gcHJvY2VkdXJlQ2FsbEpTT047IC8vL1xuXG4gICAgcHJvY2VkdXJlQ2FsbCA9IFByb2NlZHVyZUNhbGwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvY2VkdXJlUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlSlNPTiA9IHByb2NlZHVyZVJlZmVyZW5jZTsgIC8vL1xuXG4gIGpzb24gPSBwcm9jZWR1cmVSZWZlcmVuY2VKU09OOyAgLy8vXG5cbiAgcHJvY2VkdXJlUmVmZXJlbmNlID0gUHJvY2VkdXJlUmVmZXJlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc0Zyb21KU09OKGpzb24sIHR5cGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgdHlwZXM6IHR5cGVzSlNPTiB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGUgfSA9IGVsZW1lbnRzO1xuXG4gIHR5cGVzSlNPTi5mb3JFYWNoKCh0eXBlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdHlwZXMucHVzaCh0eXBlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGVybXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGVybXNKU09OID0gdGVybXM7IC8vL1xuXG4gIHRlcm1zID0gdGVybXNKU09OLm1hcCgodGVybUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcnVsZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBSdWxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcnVsZXNKU09OID0gcnVsZXM7IC8vL1xuXG4gIHJ1bGVzID0gcnVsZXNKU09OLm1hcCgocnVsZUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBydWxlO1xuICB9KTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbGFiZWwgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxhYmVsSlNPTiA9IGxhYmVsOyAgLy8vXG5cbiAganNvbiA9IGxhYmVsSlNPTjsgLy8vXG5cbiAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGZyYW1lcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEZyYW1lIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lczsgLy8vXG5cbiAgZnJhbWVzID0gZnJhbWVzSlNPTi5tYXAoKGZyYW1lSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBmcmFtZUpTT04sICAvLy9cbiAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXhpb21zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgQXhpb20gfSA9IGVsZW1lbnRzLFxuICAgICAgICBheGlvbXNKU09OID0gYXhpb21zOyAvLy9cblxuICBheGlvbXMgPSBheGlvbXNKU09OLm1hcCgoYXhpb21KU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBUaGVvcmVtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXM7IC8vL1xuXG4gIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLm1hcCgodGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9KTtcblxuICByZXR1cm4gdGhlb3JlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlczsgLy8vXG5cbiAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgZXF1YWxpdGllcyB9ID0ganNvbjtcblxuICBjb25zdCB7IEVxdWFsaXR5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXF1YWxpdGllc0pTT04gPSBlcXVhbGl0aWVzOyAvLy9cblxuICBlcXVhbGl0aWVzID0gZXF1YWxpdGllc0pTT04ubWFwKChlcXVhbGl0eUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gZXF1YWxpdHlKU09OLCAgLy8vXG4gICAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBwcm9wZXJ0aWVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXM7IC8vL1xuXG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTi5tYXAoKHByb3BlcnR5SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwcm9wZXJ0eUpTT04sICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgc3VwZXJUeXBlczogc3VwZXJUeXBlc0pTT04gfSA9IGpzb247XG5cbiAgY29uc3Qgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLm1hcCgoc3VwZXJUeXBlSlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICAgICAgeyBuYW1lLCBwcmVmaXhOYW1lIH0gPSBqc29uLFxuICAgICAgICAgICAgICAgIG5vbWluYWxTdXBlclR5cGVOYW1lID0gKHByZWZpeE5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJlZml4TmFtZX0ke25hbWV9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsIC8vL1xuICAgICAgICAgICAgICAgIHN1cGVyVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsU3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGh5cG90aGVzZXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBIeXBvdGhlc2lzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzOyAgLy8vXG5cbiAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNKU09OLm1hcCgoaHlwb3RoZXNpc0pTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gaHlwb3RoZXNpc0pTT04sIC8vL1xuICAgICAgICAgIGh5cG90aGVzaXMgPSBIeXBvdGhlc2lzLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH0pO1xuXG4gIHJldHVybiBoeXBvdGhlc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgcGFyYW1ldGVycyB9ID0ganNvbjtcblxuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVyczsgLy8vXG5cbiAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNKU09OLm1hcCgocGFyYW1ldGVySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBwYXJhbWV0ZXJKU09OLCAgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBqdWRnZW1lbnRzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgSnVkZ2VtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAganVkZ2VtZW50c0pTT04gPSBqdWRnZW1lbnRzOyAvLy9cblxuICBqdWRnZW1lbnRzID0ganVkZ2VtZW50c0pTT04ubWFwKChqdWRnZW1lbnRKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGp1ZGdlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqdWRnZW1lbnQgPSBKdWRnZW1lbnQuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9KTtcblxuICByZXR1cm4ganVkZ2VtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IHN0YXRlbWVudHMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdGF0ZW1lbnRzSlNPTiA9IHN0YXRlbWVudHM7IC8vL1xuXG4gIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzSlNPTi5tYXAoKHN0YXRlbWVudEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgYXNzZXJ0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IFR5cGVBc3NlcnRpb24sIERlZmluZWRBc3NlcnRpb24sIFByb3BlcnR5QXNzZXJ0aW9uLCBTdWJwcm9vZkFzc2VydGlvbiwgU2F0aXNmaWVzQXNzZXJ0aW9uLCBDb250YWluZWRBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBhc3NlcnRpb25zSlNPTiA9IGFzc2VydGlvbnM7IC8vL1xuXG4gIGFzc2VydGlvbnMgPSBhc3NlcnRpb25zSlNPTi5tYXAoKGFzc2VydGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXNzZXJ0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGFzc2VydGlvbiA9IFR5cGVBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgRGVmaW5lZEFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eUFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBTdWJwcm9vZkFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICBTYXRpc2ZpZXNBc3NlcnRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgQ29udGFpbmVkQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc2VydGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyByZWZlcmVuY2VzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcmVmZXJlbmNlc0pTT04gPSByZWZlcmVuY2VzOyAvLy9cblxuICByZWZlcmVuY2VzID0gcmVmZXJlbmNlc0pTT04ubWFwKChyZWZlcmVuY2VKU09OKSA9PiB7XG4gICAgY29uc3QganNvbiA9IHJlZmVyZW5jZUpTT04sICAvLy9cbiAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9KTtcblxuICByZXR1cm4gcmVmZXJlbmNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmplY3R1cmVzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb25qZWN0dXJlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbmplY3R1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlczsgLy8vXG5cbiAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04ubWFwKChjb25qZWN0dXJlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmF0b3JzRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBjb21iaW5hdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9yczsgLy8vXG5cbiAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04ubWFwKChjb21iaW5hdG9ySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb21iaW5hdG9ySlNPTiwgIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb21iaW5hdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBhc3N1bXB0aW9ucyB9ID0ganNvbjtcblxuICBjb25zdCB7IEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBhc3N1bXB0aW9uc0pTT04gPSBhc3N1bXB0aW9uczsgLy8vXG5cbiAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0pTT04ubWFwKChhc3N1bXB0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBhc3N1bXB0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGFzc3VtcHRpb24gPSBBc3N1bXB0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVQcmVmaXhlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZVByZWZpeGVzIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgVHlwZVByZWZpeCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHR5cGVQcmVmaXhlc0pTT04gPSB0eXBlUHJlZml4ZXM7IC8vL1xuXG4gIHR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlc0pTT04ubWFwKCh0eXBlUHJlZml4SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSB0eXBlUHJlZml4SlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXggPSBUeXBlUHJlZml4LmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlUHJlZml4ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RvcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGxldCB7IGNvbnN0cnVjdG9ycyB9ID0ganNvbjtcblxuICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9yczsgLy8vXG5cbiAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzSlNPTi5tYXAoKGNvbnN0cnVjdG9ySlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBjb25zdHJ1Y3RvckpTT04sICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9KTtcblxuICByZXR1cm4gY29uc3RydWN0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBtZXRhdGhlb3JlbXMgfSA9IGpzb247XG5cbiAgY29uc3QgeyBNZXRhdGhlb3JlbSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXM7IC8vL1xuXG4gIG1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtc0pTT04ubWFwKChtZXRhdGhlb3JlbUpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gbWV0YXRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBNZXRhdGhlb3JlbS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgc3VwcG9zaXRpb25zIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTi5tYXAoKHN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBzdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBsZXQgeyBzdWJzdGl0dXRpb25zID0gW10gfSA9IGpzb247ICAvLy9cblxuICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9ucywgIC8vL1xuICAgICAgICBTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb247IC8vL1xuXG4gIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gc3Vic3RpdHV0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IFN1YnN0aXR1dGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YXZhcmlhYmxlcyB9ID0ganNvbjtcblxuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlczsgLy8vXG5cbiAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNKU09OLm1hcCgobWV0YXZhcmlhYmxlSlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgKHtjb250ZXh0fSA9IGpzb24pO1xuXG4gIGpzb24gPSBjb250ZXh0OyAvLy9cblxuICBjb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7IC8vL1xuXG4gIGNvbnN0IGVtcGhlbWVyYWxDb250ZXh0ID0gRXBoZW1lcmFsQ29udGV4dC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lVG9OYW1lSlNPTihuYW1lKSB7XG4gIGNvbnN0IG5hbWVKU09OID0gbmFtZTsgIC8vL1xuXG4gIHJldHVybiBuYW1lSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Ub1Rlcm1KU09OKHRlcm0pIHtcbiAgY29uc3QgdGVybUpTT04gPSB0ZXJtLnRvSlNPTigpO1xuXG4gIHJldHVybiB0ZXJtSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVUb1R5cGVKU09OKHR5cGUpIHtcbiAgY29uc3QgdHlwZUpTT04gPSAodHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gdHlwZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbFRvTGFiZWxKU09OKGxhYmVsKSB7XG4gIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gIHJldHVybiBsYWJlbEpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKG1ldGFUeXBlKSB7XG4gIGNvbnN0IG1ldGFUeXBlSlNPTiA9IChtZXRhVHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFUeXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIG1ldGFUeXBlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTihyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZS50b0pTT04oKTtcblxuICByZXR1cm4gcmVmZXJlbmNlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTihzdGF0ZW1lbnQpIHtcbiAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IChzdGF0ZW1lbnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50LnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKGRlZHVjdGlvbikge1xuICBjb25zdCBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uLnRvSlNPTigpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb25KU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHNpZ25hdHVyZSkge1xuICBjb25zdCBzaWduYXR1cmVKU09OID0gKHNpZ25hdHVyZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTihjb25jbHVzaW9uKSB7XG4gIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbi50b0pTT04oKTtcblxuICByZXR1cm4gY29uY2x1c2lvbkpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04obWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZUpTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTihwcm9jZWR1cmVDYWxsKSB7XG4gIGNvbnN0IHByb2NlZHVyZUNhbGxKU09OID0gKHByb2NlZHVyZUNhbGwgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZHVyZUNhbGwudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTihwcm9jZWR1cmVSZWZlcmVuY2UpIHtcbiAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlSlNPTiA9IHByb2NlZHVyZVJlZmVyZW5jZS50b0pTT04oKTtcblxuICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zVG9UZXJtc0pTT04odGVybXMpIHtcbiAgY29uc3QgdGVybXNKU09OID0gdGVybXMubWFwKCh0ZXJtKSA9PiB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHRlcm1KU09OO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNUb1R5cGVzSlNPTih0eXBlcykge1xuICBjb25zdCB0eXBlc0pTT04gPSB0eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKCk7XG5cbiAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc1RvUnVsZXNKU09OKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVzSlNPTiA9IHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvTGFiZWxzSlNPTihsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICByZXR1cm4gbGFiZWxKU09OO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWxzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpIHtcbiAgY29uc3QgZnJhbWVzSlNPTiA9IGZyYW1lcy5tYXAoKGZyYW1lKSA9PiB7XG4gICAgY29uc3QgZnJhbWVKU09OID0gZnJhbWUudG9KU09OKCk7XG5cbiAgICByZXR1cm4gZnJhbWVKU09OO1xuICB9KTtcblxuICByZXR1cm4gZnJhbWVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aW9tc1RvQXhpb21zSlNPTihheGlvbXMpIHtcbiAgY29uc3QgYXhpb21zSlNPTiA9IGF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gYXhpb207XG4gIH0pO1xuXG4gIHJldHVybiBheGlvbXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTihwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoZW9yZW1zKSB7XG4gIGNvbnN0IHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04oKTtcblxuICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1zSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKGh5cG90aGVzZXMpIHtcbiAgY29uc3QgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzLm1hcCgoaHlwb3RoZXNpcykgPT4ge1xuICAgIGNvbnN0IGh5cG90aGVzaXNKU09OID0gaHlwb3RoZXNpcy50b0pTT04oKTtcblxuICAgIGh5cG90aGVzaXMgPSBoeXBvdGhlc2lzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfSk7XG5cbiAgcmV0dXJuIGh5cG90aGVzZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04oc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlLnRvSlNPTigpO1xuXG4gICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlO1xuICB9KTtcblxuICByZXR1cm4gc3VwZXJUeXBlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTihwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlckpTT04gPSBwYXJhbWV0ZXIudG9KU09OKCk7XG5cbiAgICBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTihwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlKU09OID0gcHJvcGVydHkudG9KU09OKCk7XG5cbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5SlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTihqdWRnZW1lbnRzKSB7XG4gIGNvbnN0IGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50cy5tYXAoKGp1ZGdlbWVudCkgPT4ge1xuICAgIGNvbnN0IGp1ZGdlbWVudEpTT04gPSBqdWRnZW1lbnQudG9KU09OKCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGp1ZGdlbWVudHNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04oZXF1YWxpdGllcykge1xuICBjb25zdCBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXMubWFwKChlcXVhbGl0eSkgPT4ge1xuICAgIGNvbnN0IGVxdWFsaXR5SlNPTiA9IGVxdWFsaXR5LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5SlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04oc3RhdGVtZW50cykge1xuICBjb25zdCBzdGF0ZW1lbnRzSlNPTiA9IHN0YXRlbWVudHMubWFwKChzdGF0ZW1lbnQpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50LnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OKGFzc2VydGlvbnMpIHtcbiAgY29uc3QgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zLm1hcCgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzZXJ0aW9uSlNPTiA9IGFzc2VydGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXNzZXJ0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTihyZWZlcmVuY2VzKSB7XG4gIGNvbnN0IHJlZmVyZW5jZXNKU09OID0gcmVmZXJlbmNlcy5tYXAoKHJlZmVyZW5jZSkgPT4ge1xuICAgIGNvbnN0IHJlZmVyZW5jZUpTT04gPSByZWZlcmVuY2UudG9KU09OKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZXNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTihjb25qZWN0dXJlcykge1xuICBjb25zdCBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICBjb25zdCBjb25qZWN0dXJlSlNPTiA9IGNvbmplY3R1cmUudG9KU09OKCk7XG5cbiAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUpTT047IC8vL1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH0pO1xuXG4gIHJldHVybiBjb25qZWN0dXJlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OKGNvbWJpbmF0b3JzKSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JKU09OID0gY29tYmluYXRvci50b0pTT04oKTtcblxuICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9ySlNPTjsgLy8vXG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbWJpbmF0b3JzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04oYXNzdW1wdGlvbnMpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnMubWFwKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvbkpTT04gPSBhc3N1bXB0aW9uLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKGNvbnN0cnVjdG9ycykge1xuICBjb25zdCBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH0pO1xuXG4gIHJldHVybiBjb25zdHJ1Y3RvcnNKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKG1ldGF0aGVvcmVtcykge1xuICBjb25zdCBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUpTT04gPSBtZXRhdGhlb3JlbS50b0pTT04oKTtcblxuICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1KU09OOyAvLy9cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04odHlwZVByZWZpeGVzKSB7XG4gIGNvbnN0IHR5cGVQcmVmaXhlc0pTT04gPSB0eXBlUHJlZml4ZXMubWFwKCh0eXBlUHJlZml4KSA9PiB7XG4gICAgY29uc3QgdHlwZVByZWZpeEpTT04gPSB0eXBlUHJlZml4LnRvSlNPTigpO1xuXG4gICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhKU09OOyAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9KTtcblxuICByZXR1cm4gdHlwZVByZWZpeGVzSlNPTjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zLm1hcFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTihtZXRhdmFyaWFibGVzKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc0pTT047XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRpb25zVG9DU3Vic3RpdHV0aW9uc0pTT04oc3Vic3RpdHV0aWlvbnMpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpaW9ucy5tYXAoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNKU09OO1xufVxuIl0sIm5hbWVzIjpbImFzc2VydGlvbnNGcm9tSlNPTiIsImFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OIiwiYXNzdW1wdGlvbnNGcm9tSlNPTiIsImFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04iLCJheGlvbXNGcm9tSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJlcXVhbGl0aWVzRnJvbUpTT04iLCJlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTiIsImZyYW1lc0Zyb21KU09OIiwiZnJhbWVzVG9GcmFtZXNKU09OIiwiaHlwb3RoZXNlc0Zyb21KU09OIiwiaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04iLCJqdWRnZW1lbnRzRnJvbUpTT04iLCJqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTiIsImxhYmVsRnJvbUpTT04iLCJsYWJlbFRvTGFiZWxKU09OIiwibGFiZWxzRnJvbUpTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsIm1ldGFUeXBlRnJvbUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwibmFtZUZyb21KU09OIiwibmFtZVRvTmFtZUpTT04iLCJwYXJhbWV0ZXJzRnJvbUpTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwicHJvY2VkdXJlQ2FsbEZyb21KU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInByb3BlcnRpZXNGcm9tSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwicmVmZXJlbmNlRnJvbUpTT04iLCJyZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04iLCJyZWZlcmVuY2VzRnJvbUpTT04iLCJyZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJydWxlc1RvUnVsZXNKU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsInN0YXRlbWVudHNGcm9tSlNPTiIsInN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc1RvQ1N1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwidGVybUZyb21KU09OIiwidGVybVRvVGVybUpTT04iLCJ0ZXJtc0Zyb21KU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidHlwZUZyb21KU09OIiwidHlwZVByZWZpeGVzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInR5cGVzRnJvbUpTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJsZW1tYXMiLCJtZXRhTGVtbWFzIiwianNvbiIsImNvbnRleHQiLCJuYW1lIiwibmFtZUpTT04iLCJ0ZXJtIiwidGVybUpTT04iLCJUZXJtIiwiZWxlbWVudHMiLCJmcm9tSlNPTiIsInR5cGUiLCJwcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJzdGF0ZW1lbnQiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRKU09OIiwiZGVkdWN0aW9uIiwiRGVkdWN0aW9uIiwiZGVkdWN0aW9uSlNPTiIsInNpZ25hdHVyZSIsIlNpZ25hdHVyZSIsInNpZ25hdHVyZUpTT04iLCJyZWZlcmVuY2UiLCJSZWZlcmVuY2UiLCJyZWZlcmVuY2VKU09OIiwiY29uY2x1c2lvbiIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uSlNPTiIsIm1ldGF2YXJpYWJsZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUpTT04iLCJwcm9jZWR1cmVDYWxsIiwiUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwicHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsInR5cGVzIiwidHlwZXNKU09OIiwiVHlwZSIsImZvckVhY2giLCJ0eXBlSlNPTiIsInB1c2giLCJ0ZXJtcyIsInRlcm1zSlNPTiIsIm1hcCIsInJ1bGVzIiwiUnVsZSIsInJ1bGVzSlNPTiIsInJ1bGVKU09OIiwicnVsZSIsImxhYmVsIiwiTGFiZWwiLCJsYWJlbEpTT04iLCJmcmFtZXMiLCJGcmFtZSIsImZyYW1lc0pTT04iLCJmcmFtZUpTT04iLCJmcmFtZSIsImxhYmVscyIsImxhYmVsc0pTT04iLCJheGlvbXMiLCJBeGlvbSIsImF4aW9tc0pTT04iLCJheGlvbUpTT04iLCJheGlvbSIsInByZW1pc2VzIiwiUHJlbWlzZSIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwicHJlbWlzZSIsInRoZW9yZW1zIiwiVGhlb3JlbSIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1KU09OIiwidGhlb3JlbSIsInZhcmlhYmxlcyIsIlZhcmlhYmxlIiwidmFyaWFibGVzSlNPTiIsInZhcmlhYmxlSlNPTiIsInZhcmlhYmxlIiwiZXF1YWxpdGllcyIsIkVxdWFsaXR5IiwiZXF1YWxpdGllc0pTT04iLCJlcXVhbGl0eUpTT04iLCJlcXVhbGl0eSIsInByb3BlcnRpZXMiLCJQcm9wZXJ0eSIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydHlKU09OIiwicHJvcGVydHkiLCJzdXBlclR5cGVzIiwic3VwZXJUeXBlc0pTT04iLCJzdXBlclR5cGVKU09OIiwibm9taW5hbFN1cGVyVHlwZU5hbWUiLCJzdXBlclR5cGUiLCJoeXBvdGhlc2VzIiwiSHlwb3RoZXNpcyIsImh5cG90aGVzZXNKU09OIiwiaHlwb3RoZXNpc0pTT04iLCJoeXBvdGhlc2lzIiwicGFyYW1ldGVycyIsIlBhcmFtZXRlciIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVySlNPTiIsInBhcmFtZXRlciIsImp1ZGdlbWVudHMiLCJKdWRnZW1lbnQiLCJqdWRnZW1lbnRzSlNPTiIsImp1ZGdlbWVudEpTT04iLCJqdWRnZW1lbnQiLCJzdGF0ZW1lbnRzIiwic3RhdGVtZW50c0pTT04iLCJhc3NlcnRpb25zIiwiVHlwZUFzc2VydGlvbiIsIkRlZmluZWRBc3NlcnRpb24iLCJQcm9wZXJ0eUFzc2VydGlvbiIsIlN1YnByb29mQXNzZXJ0aW9uIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwiYXNzZXJ0aW9uc0pTT04iLCJhc3NlcnRpb25KU09OIiwiYXNzZXJ0aW9uIiwicmVmZXJlbmNlcyIsInJlZmVyZW5jZXNKU09OIiwiY29uamVjdHVyZXMiLCJDb25qZWN0dXJlIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZUpTT04iLCJjb25qZWN0dXJlIiwiY29tYmluYXRvcnMiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvckpTT04iLCJjb21iaW5hdG9yIiwiYXNzdW1wdGlvbnMiLCJBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbnNKU09OIiwiYXNzdW1wdGlvbkpTT04iLCJhc3N1bXB0aW9uIiwidHlwZVByZWZpeGVzIiwiVHlwZVByZWZpeCIsInR5cGVQcmVmaXhlc0pTT04iLCJ0eXBlUHJlZml4SlNPTiIsInR5cGVQcmVmaXgiLCJjb25zdHJ1Y3RvcnMiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJjb25zdHJ1Y3RvciIsIm1ldGF0aGVvcmVtcyIsIk1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtSlNPTiIsIm1ldGF0aGVvcmVtIiwic3VwcG9zaXRpb25zIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25KU09OIiwic3VwcG9zaXRpb24iLCJzdWJzdGl0dXRpb25zIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uc0pTT04iLCJTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25KU09OIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXNKU09OIiwicmVsZWFzZUNvbnRleHQiLCJlbXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJ0b0pTT04iLCJtZXRhVHlwZUpTT04iLCJtYXBTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpaW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBa2NnQkE7ZUFBQUE7O1FBOGNBQztlQUFBQTs7UUF6WUFDO2VBQUFBOztRQXFiQUM7ZUFBQUE7O1FBM3FCQUM7ZUFBQUE7O1FBbWdC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