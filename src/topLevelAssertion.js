"use strict";

import { arrayUtilities } from "necessary";

import shim from "./shim";

import { EMPTY_STRING } from "./constants";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { labelsFromJSON,
         labelsToLabelsJSON,
         consequentFromJSON,
         suppositionsFromJSON,
         substitutionsFromJSON,
         consequentToConsequentJSON,
         suppositionsToSuppositionsJSON,
         substitutionsToSubstitutionsJSON } from "./utilities/json";
import LocalContext from "./context/local";

const { extract, reverse, backwardsEvery } = arrayUtilities;

const proofNodeQuery = nodeQuery("/*/proof"),
      labelNodesQuery = nodesQuery("/*/label"),
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

  getStatement() { return this.proof.getStatement(); }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.labels.some((label) => {
      const metavariableNodeMatches = label.matchMetavariableNode(metavariableNode);

      if (metavariableNodeMatches) {
        return true;
      }
    });

    return metavariableNodeMatches;
  }

  unifyStatement(statement, localContext) {
    let statementUnified;

    const { Substitutions } = shim,
      substitutions = Substitutions.fromNothing(),
      consequentUnified = this.unifyConsequent(statement, substitutions, localContext);

    if (consequentUnified) {
      const suppositionsUnified = this.unifySupposition(substitutions, localContext);

      if (suppositionsUnified) {
        const substitutionsResolved = substitutions.areResolved();

        statementUnified = substitutionsResolved; ///
      }
    }

    return statementUnified;
  }

  unifyConsequent(statement, substitutions, localContext) {
    let consequentUnified;

    const consequentString = this.consequent.getString();

    localContext.trace(`Unifying the '${consequentString}' consequent...`);

    const statementUnified = this.consequent.unifyStatement(statement, substitutions, localContext);  ///

    consequentUnified = statementUnified; ///

    if (consequentUnified) {
      localContext.debug(`...unified the '${consequentString}' consequent`);
    }

    return consequentUnified;
  }

  unifySupposition(substitutions, localContext) {
    let proofSteps = localContext.getProofSteps();

    proofSteps = reverse(proofSteps); ///

    const suppositionsUnified = backwardsEvery(this.suppositions, (supposition) => {
      const suppositionUnified = this.unifyPremise(supposition, proofSteps, substitutions, localContext);

      if (suppositionUnified) {
        return true;
      }
    });

    return suppositionsUnified;
  }

  unifyPremise(supposition, proofSteps, substitutions, localContext) {
    let suppositionUnified  =false;

    const suppositionString = supposition.getString();

    localContext.trace(`Unifying the '${suppositionString}' supposition...`);

    const suppositionResolvedIndependently = supposition.resolveIndependently(substitutions, localContext);

    if (suppositionResolvedIndependently) {
      suppositionUnified = true;
    } else {
      const proofStep = extract(proofSteps, (proofStep) => {
        const proofStepUnified = supposition.unifyProofStep(proofStep, substitutions, localContext);

        if (proofStepUnified) {
          return true;
        }
      });

      if (proofStep !== null) {
        suppositionUnified = true;
      }
    }

    if (suppositionUnified) {
      localContext.debug(`...unified the '${suppositionString}' supposition.`);
    }

    return suppositionUnified;
  }

  verify() {
    let verified = false;

    const labelsVerifiedWhenDeclared = this.labels.every((label) => {
      const labelVVerifiedWhenDeclared = label.verifyWhenDeclared(this.fileContext);

      if (labelVVerifiedWhenDeclared) {
        return true;
      }
    });

    if (labelsVerifiedWhenDeclared) {
      const localContext = LocalContext.fromFileContext(this.fileContext),
            suppositionsVerified = this.suppositions.every((supposition) => {
              const suppositionVerified = supposition.verify(localContext);

              if (suppositionVerified) {
                return true;
              }
            });

      if (suppositionsVerified) {
        const consequentVerified = this.consequent.verify(localContext);

        if (consequentVerified) {
          if (this.proof === null) {
            verified = true;
          } else {
            const proofVerified = this.proof.verify(this.substitutions, this.consequent, localContext);

            verified = proofVerified; ///
          }
        }
      }
    }

    return verified;
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
    const { Label, Proof, Consequent, Supposition, Substitutions } = shim,
          proofNode = proofNodeQuery(node),
          labelNodes = labelNodesQuery(node),
          consequentNode = consequentNodeQuery(node),
          suppositionNodes = suppositionNodesQuery(node),
          labels = labelNodes.map((labelNode) => {
            const label = Label.fromLabelNode(labelNode, fileContext);

            return label;
          }),
          substitutions = Substitutions.fromNothing(),
          suppositions = suppositionNodes.map((suppositionNode) => {
            const supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);

            return supposition;
          }),
          consequent = Consequent.fromConsequentNode(consequentNode, fileContext),
          proof = Proof.fromProofNode(proofNode, fileContext),
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
                 `${labelString}, ${labelString}`;

    return string;
  }, EMPTY_STRING);

  return string;
}

