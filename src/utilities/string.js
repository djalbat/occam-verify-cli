"use strict";

import { baseType } from "../element/type";

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

export function hypothesesStringFromHypotheses(hypotheses, context) {
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
  const superTypesString = superTypes.reduce((superTypesString, superType) => {
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
                          assumptionString :
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

export function subproofStringFromSubproof(subproof) {
  const lastStep = subproof.getLastStep(),
        suppositions = subproof.getSuppositions(),
        lastStepString = lastStep.getString(),
        suppositionsString = suppositionsStringFromSuppositions(suppositions),
        subproofString = `[${suppositionsString}] ... ${lastStepString}`;

  return subproofString;
}

export function rulsStringFromLabelsPremisesAndConclusion(labels, premises, conclusion) {
  const premisesString = premisesStringFromPremises(premises),
        conclusionString = conclusion.getString(),
        labelsString = labelsStringFromLabels(labels),
        ruleString = (premisesString !== null) ?
                       `${labelsString} :: [${premisesString}] ... ${conclusionString}` :
                         `${labelsString} :: ${conclusionString}`;

  return ruleString;
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

export function sectionStringFromHypothesesAxiomLemmaTheoremAndConjecture(hypotheses, axiom, lemma, theorem, conjecture, context) {
  const axiomLemmaTheoremOrConjecture = (axiom || lemma || theorem || conjecture),
        axiomLemmaTheoremOrConjectureString = axiomLemmaTheoremOrConjecture.getString(),
        hypothesesString = hypothesesStringFromHypotheses(hypotheses, context),
        sectionString = (axiomLemmaTheoremOrConjectureString !== null) ?
                          `[${hypothesesString}]::: ${axiomLemmaTheoremOrConjectureString}` :
                            `[${hypothesesString}]::: `;

  return sectionString;
}

export function metaLemmaMetatheoremStringFromLabelSuppositionsAndDeduction(label, suppositions, deduction) {
  const suppositionsString = suppositionsStringFromSuppositions(suppositions),
        deductionString = deduction.getString(),
        labelString = label.getString(),
        metaLemmaMetatheoremString = (suppositionsString !== null) ?
                                       `${labelString} :: [${suppositionsString}] ... ${deductionString}` :
                                         `${labelString} :: ${deductionString}`;

  return metaLemmaMetatheoremString;
}

export function axiomLemmaTheoremConjectureStringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction) {
  let axiomLemmaTheoremConjectureString;

  const suppositionsString = suppositionsStringFromSuppositions(suppositions),
        deductionString = deduction.getString(),
        labelsString = labelsStringFromLabels(labels);

  if (labelsString !== null) {
    axiomLemmaTheoremConjectureString = (suppositionsString !== null) ?
                                          `${labelsString} :: [${suppositionsString}] ... ${deductionString}` :
                                            `${labelsString} :: ${deductionString}`;
  } else {
    axiomLemmaTheoremConjectureString = (suppositionsString !== null) ?
                                         `[${suppositionsString}] ... ${deductionString}` :
                                            deductionString;
  }

  return axiomLemmaTheoremConjectureString;
}
