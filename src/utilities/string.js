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
