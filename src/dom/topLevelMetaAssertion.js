"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";
import TopLevelAssertion from "./topLevelAssertion";

import { nodeQuery } from "../utilities/query";
import { proofFromNode, consequentFromNode, suppositionsFromNode, labelsStringFromLabels } from "./topLevelAssertion";
import { labelsFromJSON,
         labelsToLabelsJSON,
         consequentFromJSON,
         suppositionsFromJSON,
         substitutionsFromJSON,
         consequentToConsequentJSON,
         suppositionsToSuppositionsJSON,
         substitutionsToSubstitutionsJSON } from "../utilities/json";

const { first } = arrayUtilities;

const labelNodeQuery = nodeQuery("/metatheorem/label");

export default class TopLevelMetaAssertion extends TopLevelAssertion {
  constructor(fileContext, string, labels, suppositions, consequent, proof, substitutions) {
    super(fileContext, string, labels, suppositions, consequent, proof);

    this.substitutions = substitutions;
  }

  getSubstitutions() {
    return this.substitutions;
  }

  getLabel() {
    const labels = this.getLabels(),
          firstLabel = first(labels),
          label = firstLabel; ///

    return label;
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
      const nameOnly = false,
            labelVerified = label.verify(nameOnly);

      if (labelVerified) {
        return true;
      }
    });

    return labelsVerified;
  }

  verifyWhenStated(statement, reference, context) {
    let verifiedWhenStated;

    debugger

    return verifiedWhenStated;
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
          substitutions = substitutionsFromJSON(json, fileContext),
          labelsString = labelsStringFromLabels(labels),
          suppositions = suppositionsFromJSON(json, fileContext),
          consequent = consequentFromJSON(json, fileContext),
          proof = null,
          string = labelsString,  ///
          topLevelAssertion = new Class(fileContext, string, labels, suppositions, consequent, proof, substitutions);

    return topLevelAssertion;
  }

  static fromNode(Class, node, fileContext) {
    const labels = labelsFromNode(node, fileContext),
          substitutions = Substitutions.fromNothing(),
          labelsString = labelsStringFromLabels(labels),
          suppositions = suppositionsFromNode(node, fileContext),
          consequent = consequentFromNode(node, fileContext),
          proof = proofFromNode(node, fileContext),
          string = labelsString,  ///
          metaLemma = new Class(fileContext, string, labels, suppositions, consequent, proof, substitutions);

    return metaLemma;
  }
}

function labelsFromNode(node, fileContext) {
  const { Label } = dom,
        labelNode = labelNodeQuery(node),
        label = Label.fromLabelNode(labelNode, fileContext),
        labels = [
          label
        ];

  return labels;
}
