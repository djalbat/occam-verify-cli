"use strict";

import { baseTypeFromNothing } from "../utilities/type";

export function termsStringFromTerms(terms) {
  const termsString = terms.reduce((termsString, term) => {
    const termString = term.getString();

    termsString = (termsString !== null) ?
                   `${termsString}, ${termString}` :
                      termString;

    return termsString;
  }, null);

  return termsString;
}

export function framesStringFromFrames(frames) {
  const framesString = frames.reduce((framesString, frame) => {
    const frameString = frame.getString();

    framesString = (framesString !== null) ?
                    `${framesString}, ${frameString}` :
                       frameString;

    return framesString;
  }, null);

  return framesString;
}

export function labelsStringFromLabels(labels) {
  const labelsString = labels.reduce((labelsString, label) => {
    const labelString = label.getString();

    labelsString = (labelsString === null) ?
                     labelString: ///
                      `${labelsString}, ${labelString}`;

    return labelsString;
  }, null);

  return labelsString;
}

export function premisesStringFromPremises(premises) {
  const premisesString = premises.reduce((premisesString, premise) => {
    const premiseString = premise.getString();

    premisesString = (premisesString !== null) ?
                       `${premisesString}, ${premiseString}` :
                         premiseString;  ///

    return premisesString;
  }, null);

  return premisesString;
}

export function hypothesesStringFromHypotheses(hypotheses) {
  const hypothesesString = hypotheses.reduce((hypothesesString, hypothesis) => {
    const hypothesisString = hypothesis.getString();

    hypothesesString = (hypothesesString !== null) ?
                          `${hypothesesString}, ${hypothesisString}` :
                            hypothesisString;  ///

    return hypothesesString;
  }, null);

  return hypothesesString;
}

export function superTypesStringFromSuperTypes(superTypes) {
  const baseType = baseTypeFromNothing(),
        superTypesString = superTypes.reduce((superTypesString, superType) => {
          if (superType !== baseType) {
            const superTypeString = superType.getString();

            superTypesString = (superTypesString === null) ?
                                 `'${superTypeString}'` :
                                   `${superTypesString}, '${superTypeString}'`;
          }

          return superTypesString;
        }, null);

  return superTypesString;
}

export function parametersStringFromParameters(parameters) {
  const parametersString = parameters.reduce((parametersString, parameter) => {
    const parameterString = parameter.getString();

    parametersString = (parametersString === null) ?
                         parameterString : ///
                          `${parametersString}, ${parameterString}`;

    return parametersString;
  }, null);

  return parametersString;
}

export function assumptionsStringFromAssumptions(assumptions) {
  const assumptionsString = assumptions.reduce((assumptionsString, assumption) => {
    const assumptionString = assumption.getString();

    assumptionsString = (assumptionsString === null) ?
                          assumptionString: ///
                           `${assumptionsString}, ${assumptionString}`;

    return assumptionsString;
  }, null);

  return assumptionsString;
}

export function suppositionsStringFromSuppositions(suppositions) {
  const suppositionsString = suppositions.reduce((suppositionsString, supposition) => {
    const suppositionString = supposition.getString();

    suppositionsString = (suppositionsString === null) ?
                           suppositionString: ///
                            `${suppositionsString}, ${suppositionString}`;

    return suppositionsString;
  }, null);

  return suppositionsString;
}

export function substitutionsStringFromSubstitutions(substitutions) {
  const substitutionsString = substitutions.reduce((substitutionsString, substitution) => {
    const substitutionString = substitution.getString();

    substitutionsString = (substitutionsString === null) ?
                             substitutionString : ///
                              `${substitutionsString}, ${substitutionString}`;

    return substitutionsString;
  }, null);

  return substitutionsString;
}

export function signatureStringFromTerms(terms) {
  const termsString = termsStringFromTerms(terms),
        signatureString = `[${termsString}]`;

  return signatureString;
}

export function equivalenceStringFromTerms(terms) {
  const termsString = termsStringFromTerms(terms),
        equivalenceString = termsString;  ///

  return equivalenceString;
}

export function termSubstitutionStringFromTermAndVariable(term, variable) {
  const termString = term.getString(),
        variableString = variable.getString(),
        termSubstitutionString = `[${termString} for ${variableString}]`;

  return termSubstitutionString;
}

export function rulsStringFromLabelsPremisesAndConclusion(labels, premises, conclusion) {
  const premisesString = premisesStringFromPremises(premises),
        conclusionString = conclusion.getString(),
        labelsString = labelsStringFromLabels(labels),
        ruleString = (premisesString !== null) ?
                       `${labelsString} :: [${premisesString}]...${conclusionString}` :
                         `${labelsString} :: ${conclusionString}`;

  return ruleString;
}

export function sectionStringFromHypothesesTopLevelAssertion(hypotheses, axiom, lemma, theorem, conjecture) {
  const topLevelAssertion = (axiom || lemma || theorem || conjecture),
        topLevelAssertionString = topLevelAssertion.getString(),
        hypothesesString = hypothesesStringFromHypotheses(hypotheses),
        sectionString = (topLevelAssertionString !== null) ?
                          `[${hypothesesString}]::: ${topLevelAssertionString}` :
                            `[${hypothesesString}]::: `;

  return sectionString;
}

export function subproofStringFromSuppositionsAndSubDerivation(suppositions, subDerivation) {
  const lastProofAssertion = subDerivation.getLastProofAssertion(),
        suppositionsString = suppositionsStringFromSuppositions(suppositions),
        lastProofAssertionString = lastProofAssertion.getString(),
        subproofString = `[${suppositionsString}]...${lastProofAssertionString}`;

  return subproofString;
}

export function frameSubstitutionStringFromFrameAndMetavariable(frame, metavariable) {
  const frameString = frame.getString(),
        metavariableString = metavariable.getString(),
        string = `[${frameString} for [${metavariableString}]]`;

  return string;
}

export function typeStringFromTypeNameTypePrefixNameAndSuperTypes(typeName, typePrefixName, superTypes) {
  let typeString;

  typeString = (typePrefixName !== null) ?
                 `${typePrefixName}${typeName}`:
                   typeName;

  const superTypesString = superTypesStringFromSuperTypes(superTypes);

  if (superTypesString !== null) {
    typeString = `${typeString}:${superTypesString}`;
  }

  return typeString;
}

export function procedureCallStringFromProcedureReferenceAndParameters(procedureReference, parameters) {
  const procedureReferenceName = procedureReference.getName(),
        parametersString = parametersStringFromParameters(parameters),
        procedureCallString = `${procedureReferenceName}(${parametersString})`;

  return procedureCallString;
}

export function statementSubstitutionStringFromStatementAndMetavariable(statement, metavariable) {
  const statementString = statement.getString(),
        metavariableString = metavariable.getString(),
        statementSubstitutionString = `[${statementString} for ${metavariableString}]`;

  return statementSubstitutionString;
}

export function referenceSubstitutionStringFromReferenceAndMetavariable(reference, metavariable) {
  const referenceString = reference.getString(),
        metavariableString = metavariable.getString(),
        referenceSubstitutionString = `[${referenceString} for ${metavariableString}]`;

  return referenceSubstitutionString;
}

export function topLevelAssertionStringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction) {
  let topLevelAssertionString;

  const suppositionsString = suppositionsStringFromSuppositions(suppositions),
        deductionString = deduction.getString(),
        labelsString = labelsStringFromLabels(labels);

  if (labelsString !== null) {
    topLevelAssertionString = (suppositionsString !== null) ?
                               `${labelsString} :: [${suppositionsString}]...${deductionString}` :
                                 `${labelsString} :: ${deductionString}`;
  } else {
    topLevelAssertionString = (suppositionsString !== null) ?
                               `[${suppositionsString}]...${deductionString}` :
                                  deductionString;
  }

  return topLevelAssertionString;
}

export function topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction(label, suppositions, deduction) {
  const suppositionsString = suppositionsStringFromSuppositions(suppositions),
        deductionString = deduction.getString(),
        labelString = label.getString(),
        topLevelMetaAssertionString = (suppositionsString !== null) ?
                                       `${labelString} :: [${suppositionsString}]...${deductionString}` :
                                         `${labelString} :: ${deductionString}`;

  return topLevelMetaAssertionString;
}

export function statementSubstitutionStringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution) {
  const statementString = statement.getString(),
        metavariableString = metavariable.getString(),
        substitutionString = substitution.getString(),
        statementSubstitutionString = `[${statementString} for ${metavariableString}${substitutionString}]`;

  return statementSubstitutionString;
}
