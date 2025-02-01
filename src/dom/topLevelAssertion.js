"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";

import { nodeQuery, nodesQuery } from "../utilities/query";
import { labelsFromJSON,
         labelsToLabelsJSON,
         deductionFromJSON,
         suppositionsFromJSON,
         deductionToDeductionJSON,
         suppositionsToSuppositionsJSON } from "../utilities/json";

const { reverse, extract, backwardsEvery } = arrayUtilities;

const proofNodeQuery = nodeQuery("/*/proof"),
      labelNodesQuery = nodesQuery("/*/labels/label"),
      deductionNodeQuery = nodeQuery("/*/deduction"),
      suppositionNodesQuery = nodesQuery("/*/supposition");

export default class TopLevelAssertion {
  constructor(fileContext, string, labels, suppositions, deduction, proof) {
    this.fileContext = fileContext;
    this.string = string;
    this.labels = labels;
    this.suppositions = suppositions;
    this.deduction = deduction;
    this.proof = proof;
  }

  getFileContext() {
    return this.fileContext;
  }

  getString() {
    return this.string;
  }

  getLabels() {
    return this.labels;
  }

  getSuppositions() {
    return this.suppositions;
  }

  getDeduction() {
    return this.deduction;
  }

  getProof() {
    return this.proof;
  }

  getStatement() { return this.deduction.getStatement(); }

  matchMetavariableName(metavariableName) {
    const metavariableNameMatches = this.labels.some((label) => {
      const metavariableNameMatches = label.matchMetavariableName(metavariableName);

      if (metavariableNameMatches) {
        return true;
      }
    });

    return metavariableNameMatches;
  }

  verify() {
    let verified = false;

    const labelsVerified = this.verifyLabels();

    if (labelsVerified) {
      const localContext = LocalContext.fromFileContext(this.fileContext),
            context = localContext, ///
            suppositionsVerified = this.suppositions.every((supposition) => {
              const suppositionVerified = supposition.verify(context);

              if (suppositionVerified) {
                return true;
              }
            });

      if (suppositionsVerified) {
        const deductionVerified = this.deduction.verify(context);

        if (deductionVerified) {
          if (this.proof === null) {
            verified = true;
          } else {
            const substitutions = Substitutions.fromNothing(),
                  proofVerified = this.proof.verify(substitutions, this.deduction, context);

            verified = proofVerified; ///
          }
        }
      }
    }

    return verified;
  }

  verifyLabels() {
    const labelsVerified = this.labels.every((label) => {
      const nameOnly = true,
            labelVerified = label.verify(nameOnly);

      if (labelVerified) {
        return true;
      }
    });

    return labelsVerified;
  }

  unifyStatement(statement, context) {
    let statementUnified;

    const statementString = statement.getString(),
          axiomLemmaTheoremConjecture = this, ///
          axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture...`);

    const suppositions = this.getSuppositions(),
          suppositionsLength = suppositions.length;

    if (suppositionsLength === 0) {
      const substitutions = Substitutions.fromNothing(),
            localContext = LocalContext.fromFileContext(this.fileContext),
            generalContext = localContext,  ///
            specificContext = context,  ///
            statementUnifiedWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);

      statementUnified = statementUnifiedWithDeduction;  ///
    }

    if (statementUnified) {
      context.debug(`...unified the '${statementString}' statement with the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture.`);
    }

    return statementUnified;
  }

  unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext) {
    let deductionUnified;

    const statementUnified = this.deduction.unifyStatement(statement, substitutions, generalContext, specificContext);  ///

    deductionUnified = statementUnified; ///

    return deductionUnified;
  }

  unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, context) {
    let statementAndProofStepSubproofsUnified = false;

    const localContext = LocalContext.fromFileContext(this.fileContext),
          generalContext = localContext, ///
          specificContext = context; ///

    const substitutions = Substitutions.fromNothing(),
          statementUnifiedWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);

    if (statementUnifiedWithDeduction) {
      const proofStepSubproofsUnifiedWithSuppositions = this.unifyProofStepSubproofsWithSuppositions(proofStepSubproofs, substitutions, generalContext, specificContext);

      if (proofStepSubproofsUnifiedWithSuppositions) {
        const substitutionsResolved = substitutions.areResolved();

        statementAndProofStepSubproofsUnified = substitutionsResolved; ///
      }
    }

    return statementAndProofStepSubproofsUnified;
  }

  unifyProofStepSubproofsWithSupposition(proofStepSubproofs, supposition, substitutions, generalContext, specificContext) {
    let proofStepSubproofsUnifiedWithSupposition  =false;

    const context = specificContext,  ///
          suppositionUnifiedIndependently = supposition.unifyIndependently(substitutions, context);

    if (suppositionUnifiedIndependently) {
      proofStepSubproofsUnifiedWithSupposition = true;
    } else {
      const proofStep = extract(proofStepSubproofs, (proofStepSubproof) => {
        const proofStepUnified = supposition.unifyProofStepSubproof(proofStepSubproof, substitutions, generalContext, specificContext);

        if (proofStepUnified) {
          return true;
        }
      }) || null;

      if (proofStep !== null) {
        proofStepSubproofsUnifiedWithSupposition = true;
      }
    }

    return proofStepSubproofsUnifiedWithSupposition;
  }

  unifyProofStepSubproofsWithSuppositions(proofStepSubproofs, substitutions, generalContext, specificContext) {
    proofStepSubproofs = reverse(proofStepSubproofs); ///

    const proofStepSubproofsUnifiedWithSuppositions = backwardsEvery(this.suppositions, (supposition) => {
      const proofStepSubproofsUnifiedWithSupposition = this.unifyProofStepSubproofsWithSupposition(proofStepSubproofs, supposition, substitutions, generalContext, specificContext);

      if (proofStepSubproofsUnifiedWithSupposition) {
        return true;
      }
    });

    return proofStepSubproofsUnifiedWithSuppositions;
  }

  toJSON() {
    const labelsJSON = labelsToLabelsJSON(this.labels),
          deductionJSON = deductionToDeductionJSON(this.deduction),
          suppositionsJSON = suppositionsToSuppositionsJSON(this.suppositions),
          labels = labelsJSON,  ///
          deduction = deductionJSON,  ///
          suppositions = suppositionsJSON,  ///
          json = {
            labels,
            deduction,
            suppositions
          };

    return json;
  }

  static fromJSON(Class, json, fileContext) {
    const labels = labelsFromJSON(json, fileContext),
          suppositions = suppositionsFromJSON(json, fileContext),
          deduction = deductionFromJSON(json, fileContext),
          proof = null,
          string = stringFromLabelsAndDeduction(labels, deduction),
          topLevelAssertion = new Class(fileContext, string, labels, suppositions, deduction, proof);

    return topLevelAssertion;
  }

  static fromNode(Class, node, fileContext) {
    const labels = labelsFromNode(node, fileContext),
          suppositions = suppositionsFromNode(node, fileContext),
          deduction = deductionFromNode(node, fileContext),
          proof = proofFromNode(node, fileContext),
          string = stringFromLabelsAndDeduction(labels, deduction),
          topLevelAssertion = new Class(fileContext, string, labels, suppositions, deduction, proof);

    return topLevelAssertion;
  }
}

function labelsFromNode(node, fileContext) {
  const { Label } = dom,
        labelNodes = labelNodesQuery(node),
        labels = labelNodes.map((labelNode) => {
          const label = Label.fromLabelNode(labelNode, fileContext);

          return label;
        });

  return labels;
}

export function proofFromNode(node, fileContext) {
  const { Proof } = dom,
        proofNode = proofNodeQuery(node),
        proof = Proof.fromProofNode(proofNode, fileContext);

  return proof;
}

export function deductionFromNode(node, fileContext) {
  const { Deduction } = dom,
        deductionNode = deductionNodeQuery(node),
        deduction = Deduction.fromDeductionNode(deductionNode, fileContext);

  return deduction;
}

export function suppositionsFromNode(node, fileContext) {
  const { Supposition } = dom,
        suppositionNodes = suppositionNodesQuery(node),
        suppositions = suppositionNodes.map((suppositionNode) => {
          const supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);

          return supposition;
        });

  return suppositions;
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

export function stringFromLabelsAndDeduction(labels, deduction) {
  const deductionString = deduction.getString(),
        labelsString = labelsStringFromLabels(labels),
        string = (labelsString === null) ?
                   deductionString : ///
                    `${labelsString} :: ${deductionString}`;

  return string;
}
