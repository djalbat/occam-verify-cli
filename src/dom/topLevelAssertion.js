"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";

import { nodeQuery, nodesQuery } from "../utilities/query";
import { labelsFromJSON,
         labelsToLabelsJSON,
         consequentFromJSON,
         suppositionsFromJSON,
         substitutionsFromJSON,
         consequentToConsequentJSON,
         suppositionsToSuppositionsJSON,
         substitutionsToSubstitutionsJSON } from "../utilities/json";

const { reverse, extract, backwardsEvery } = arrayUtilities;

const proofNodeQuery = nodeQuery("/*/proof"),
      labelNodesQuery = nodesQuery("/*/labels/label"),
      consequentNodeQuery = nodeQuery("/*/consequent"),
      suppositionNodesQuery = nodesQuery("/*/supposition");

export default class TopLevelAssertion {
  constructor(fileContext, string, labels, suppositions, consequent, proof) {
    this.fileContext = fileContext;
    this.string = string;
    this.labels = labels;
    this.suppositions = suppositions;
    this.consequent = consequent;
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

  getConsequent() {
    return this.consequent;
  }

  getProof() {
    return this.proof;
  }

  getStatement() { return this.consequent.getStatement(); }

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
        const consequentVerified = this.consequent.verify(context);

        if (consequentVerified) {
          if (this.proof === null) {
            verified = true;
          } else {
            const substitutions = Substitutions.fromNothing(),
                  proofVerified = this.proof.verify(substitutions, this.consequent, context);

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
            statementUnifiedWithConsequent = this.unifyStatementWithConsequent(statement, substitutions, generalContext, specificContext);

      statementUnified = statementUnifiedWithConsequent;  ///
    }

    if (statementUnified) {
      context.debug(`...unified the '${statementString}' statement with the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture.`);
    }

    return statementUnified;
  }

  unifyStatementWithConsequent(statement, substitutions, generalContext, specificContext) {
    let consequentUnified;

    const statementUnified = this.consequent.unifyStatement(statement, substitutions, generalContext, specificContext);  ///

    consequentUnified = statementUnified; ///

    return consequentUnified;
  }

  unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, context) {
    let statementAndProofStepSubproofsUnified = false;

    const localContext = LocalContext.fromFileContext(this.fileContext),
          generalContext = localContext, ///
          specificContext = context; ///

    const substitutions = Substitutions.fromNothing(),
          statementUnifiedWithConsequent = this.unifyStatementWithConsequent(statement, substitutions, generalContext, specificContext);

    if (statementUnifiedWithConsequent) {
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
          consequentJSON = consequentToConsequentJSON(this.consequent),
          suppositionsJSON = suppositionsToSuppositionsJSON(this.suppositions),
          labels = labelsJSON,  ///
          consequent = consequentJSON,  ///
          suppositions = suppositionsJSON,  ///
          json = {
            labels,
            consequent,
            suppositions
          };

    return json;
  }

  static fromJSON(Class, json, fileContext) {
    const labels = labelsFromJSON(json, fileContext),
          suppositions = suppositionsFromJSON(json, fileContext),
          consequent = consequentFromJSON(json, fileContext),
          proof = null,
          string = stringFromLabelsAndConsequent(labels, consequent),
          topLevelAssertion = new Class(fileContext, string, labels, suppositions, consequent, proof);

    return topLevelAssertion;
  }

  static fromNode(Class, node, fileContext) {
    const labels = labelsFromNode(node, fileContext),
          suppositions = suppositionsFromNode(node, fileContext),
          consequent = consequentFromNode(node, fileContext),
          proof = proofFromNode(node, fileContext),
          string = stringFromLabelsAndConsequent(labels, consequent),
          metaLemma = new Class(fileContext, string, labels, suppositions, consequent, proof);

    return metaLemma;
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

export function consequentFromNode(node, fileContext) {
  const { Consequent } = dom,
        consequentNode = consequentNodeQuery(node),
        consequent = Consequent.fromConsequentNode(consequentNode, fileContext);

  return consequent;
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
                        `${labelsString},${labelString}`;

    return labelsString;
  }, null);

  return labelsString;
}

export function stringFromLabelsAndConsequent(labels, consequent) {
  const consequentString = consequent.getString(),
        labelsString = labelsStringFromLabels(labels),
        string = `${labelsString} :: ${consequentString}`;

  return string;
}
