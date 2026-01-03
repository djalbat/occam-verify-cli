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

export function signatureStringFromTerms(terms) {
  const termsString = termsStringFromTerms(terms),
        signatureString = `[${termsString}]`;

  return signatureString;
}

export function subproofStringFromSubproof(subproof) {
  const suppositionStatementsOrNonsenseString = suppositionStatementOrNonsenseStringFromSubproofNode(subproofNode, context),
        lastStatementOrNonsenseString = lastStatementOrNonsenseStringFromSubproofNode(subproofNode, context),
        subproofString = `[${suppositionStatementsOrNonsenseString}] ... ${lastStatementOrNonsenseString}`;

  return subproofString;
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

    suppositionsString = (suppositionsString !== null) ?
                          `${suppositionsString}, ${suppositionString}` :
                            suppositionString;  ///

    return suppositionsString;
  }, null);

  return suppositionsString;
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

function suppositionStatementOrNonsenseStringFromSubproofNode(subproofNode, context) {
  const suppositionNodes = subproofNode.getSuppositionNodes(),
        suppositionStatementsOrNonsenseString = suppositionNodes.reduce((suppositionStatementsOrNonsenseString, suppositionNode) => {
          const suppositionOrStepNode = suppositionNode,  ///
                statementOrNonsenseString = statementOrNonsenseStringFromSuppositionOrStepNode(suppositionOrStepNode, context),
                suppositionStatementOrNonsenseString = statementOrNonsenseString; ///

          suppositionStatementsOrNonsenseString = (suppositionStatementsOrNonsenseString !== null) ?
                                                    `${suppositionStatementsOrNonsenseString}, ${suppositionStatementOrNonsenseString}` :
                                                      suppositionStatementOrNonsenseString; ///

          return suppositionStatementsOrNonsenseString;
        }, null);

  return suppositionStatementsOrNonsenseString;
}

function statementOrNonsenseStringFromSuppositionOrStepNode(suppositionOrStepNode, context) {
  let statementOrNonsenseString;

  const nonsenseNode = suppositionOrStepNode.getNonsenseNode(),
        statementNode = suppositionOrStepNode.getStatementNode();

  if (false) {
    ///
  } else if (nonsenseNode !== null) {
    const nonsenseString = context.nodeAsString(nonsenseNode);

    statementOrNonsenseString = nonsenseString; ///
  } else if (statementNode !== null) {
    const statementString = context.nodeAsString(statementNode);

    statementOrNonsenseString = statementString;  ///
  }

  return statementOrNonsenseString;
}

function lastStatementOrNonsenseStringFromSubproofNode(subproofNode, context) {
  const lastStepNode = subproofNode.getLastStepNode(),
        suppositionOrStepNode = lastStepNode, ///
        statementOrNonsenseString = statementOrNonsenseStringFromSuppositionOrStepNode(suppositionOrStepNode, context),
        lastStatementOrNonsenseString = statementOrNonsenseString; ///

  return lastStatementOrNonsenseString;
}
