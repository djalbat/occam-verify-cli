"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";

import { EMPTY_STRING } from "../constants";
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
  constructor(fileContext, string, labels, substitutions, suppositions, consequent, proof) {
    this.fileContext = fileContext;
    this.string = string;
    this.labels = labels;
    this.substitutions = substitutions;
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

  getSubstitutions() {
    return this.substitutions;
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

  matchStatementNode(statementNode) { return this.consequent.matchStatementNode(statementNode); }

  matchMetavariableName(metavariableName) {
    const metavariableNameMatches = this.labels.some((label) => {
      const metavariableNameMatches = label.matchMetavariableName(metavariableName);

      if (metavariableNameMatches) {
        return true;
      }
    });

    return metavariableNameMatches;
  }

  unifyReference(reference, context) {
    let referenceUnified;

    const referenceString = reference.getString(),
          axiomLemmaTheoremConjecture = this, ///
          axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();

    context.trace(`Unifying the '${referenceString}' reference with the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture...`);

    const substitutions = Substitutions.fromNothing(),
          fileContext = this.getFileContext(),
          localContext = LocalContext.fromFileContext(fileContext),
          generalContext = localContext,  ///
          specificContext = context, ///
          labelUnified = this.labels.some((label) => {
            substitutions.clear();

            const referenceUnified = reference.unifyLabel(label, substitutions, generalContext, specificContext);

            if (referenceUnified) {
              return true;
            }
          });

    referenceUnified = labelUnified;  ///

    if (referenceUnified) {
      context.debug(`...unified the '${referenceString}' reference with the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture.`);
    }

    return referenceUnified;
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

  unifyStatementWithConsequent(statement, substitutions, generalContext, specificContext) {
    let consequentUnified;

    const statementUnified = this.consequent.unifyStatement(statement, substitutions, generalContext, specificContext);  ///

    consequentUnified = statementUnified; ///

    return consequentUnified;
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
            const proofVerified = this.proof.verify(this.substitutions, this.consequent, context);

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
            labelVVerifiedWhenDeclared = label.verifyWhenDeclared(this.fileContext, nameOnly);

      if (labelVVerifiedWhenDeclared) {
        return true;
      }
    });

    return labelsVerified;
  }

  toJSON() {
    const labelsJSON = labelsToLabelsJSON(this.labels),
          consequentJSON = consequentToConsequentJSON(this.consequent),
          suppositionsJSON = suppositionsToSuppositionsJSON(this.suppositions),
          substitutionsJSON = substitutionsToSubstitutionsJSON(this.substitutions),
          labels = labelsJSON,  ///
          consequent = consequentJSON,  ///
          suppositions = suppositionsJSON,  ///
          substitutions = substitutionsJSON,  ///
          json = {
            labels,
            consequent,
            suppositions,
            substitutions
          };

    return json;
  }

  static fromJSON(Class, json, fileContext) {
    const labels = labelsFromJSON(json, fileContext),
          consequent = consequentFromJSON(json, fileContext),
          suppositions = suppositionsFromJSON(json, fileContext),
          substitutions = substitutionsFromJSON(json, fileContext),
          string = stringFromLabels(labels),
          proof = null,
          topLevelAssertion = new Class(fileContext, string, labels, substitutions, suppositions, consequent, proof);

    return topLevelAssertion;
  }

  static fromNode(Class, node, fileContext) {
    const labels = labelsFromNode(node, fileContext),
          substitutions = Substitutions.fromNothing(),
          suppositions = suppositionsFromNode(node, fileContext),
          consequent = consequentFromNode(node, fileContext),
          proof = proofFromNode(node, fileContext),
          string = stringFromLabels(labels),
          metaLemma = new Class(fileContext, string, labels, substitutions, suppositions, consequent, proof);

    return metaLemma;
  }
}

export function stringFromLabels(labels) {
  const string = labels.reduce((string, label) => {
    const labelString = label.getString();

    string = (string === EMPTY_STRING) ?
               labelString: ///
                 `${string},${labelString}`;

    return string;
  }, EMPTY_STRING);

  return string;
}

function proofFromNode(node, fileContext) {
  const { Proof } = dom,
        proofNode = proofNodeQuery(node),
        proof = Proof.fromProofNode(proofNode, fileContext);

  return proof;
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

function consequentFromNode(node, fileContext) {
  const { Consequent } = dom,
        consequentNode = consequentNodeQuery(node),
        consequent = Consequent.fromConsequentNode(consequentNode, fileContext);

  return consequent;
}

function suppositionsFromNode(node, fileContext) {
  const { Supposition } = dom,
        suppositionNodes = suppositionNodesQuery(node),
        suppositions = suppositionNodes.map((suppositionNode) => {
          const supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);

          return supposition;
        });

  return suppositions;
}

