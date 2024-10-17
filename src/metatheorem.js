"use strict";

import Label from "./label";
import Proof from "./proof";
import Consequent from "./consequent";
import Supposition from "./supposition";
import LocalContext from "./context/local";
import Substitution from "./substitution";
import Substitutions from "./substitutions";
import TopLevelAssertion from "./topLevelAssertion";

import { nodeQuery, nodesQuery } from "./utilities/query";
import { substitutionsToSubstitutionsJSON } from "./metaLemma";
import { labelsFromJSON,
         stringFromLabels,
         labelsToLabelJSON,
         consequentFromJSON,
         suppositionsFromJSON,
         suppositionsToSuppositionsJSON } from "./topLevelAssertion";

const proofNodeQuery = nodeQuery("/metatheorem/proof"),
      labelNodesQuery = nodesQuery("/metatheorem/label"),
      consequentNodeQuery = nodeQuery("/metatheorem/consequent"),
      suppositionNodesQuery = nodesQuery("/metatheorem/supposition");

export default class Metatheorem extends TopLevelAssertion {
  constructor(fileContext, string, labels, suppositions, consequent, proof, substitutions) {
    super(fileContext, string, labels, suppositions, consequent, proof);

    this.substitutions = substitutions;
  }

  getSubstitutions() {
    return this.substitutions;
  }

  verify() {
    let verified = false;

    const metatheoremString = this.string;  ///

    this.fileContext.trace(`Verifying the '${metatheoremString}' metatheorem...`);

    const labelsVerifiedAtTopLevel = this.labels.every((label) => {
      const labelVVerifiedAtTopLevel = label.verifyAtTopLevel(this.fileContext);

      if (labelVVerifiedAtTopLevel) {
        return true;
      }
    });

    if (labelsVerifiedAtTopLevel) {
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
          const proofVerified = this.proof.verify(this.substitutions, this.consequent, localContext);

          if (proofVerified) {
            const metatheorem = this;  ///

            this.fileContext.addMetatheorem(metatheorem);

            verified = true;
          }
        }
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${metatheoremString}' metatheorem.`);
    }

    return verified;
  }

  toJSON() {
    const labelsJSON = labelsToLabelJSON(this.labels),
          suppositionsJSON = suppositionsToSuppositionsJSON(this.suppositions),
          consequentJSON = this.consequent.toJSON(),
          substitutionsJSON = substitutionsToSubstitutionsJSON(this.substitutions),
          labels = labelsJSON,  ///
          suppositions = suppositionsJSON,  ///
          consequent = consequentJSON,  ///
          substitutions = substitutionsJSON,  ///
          json = {
            labels,
            suppositions,
            consequent,
            substitutions
          };

    return json;
  }


  static fromJSON(json, fileContext) {
    const labels = labelsFromJSON(json, fileContext),
          suppositions = suppositionsFromJSON(json, fileContext),
          consequent = consequentFromJSON(json, fileContext),
          substitutions = substitutionsFromJSON(json, fileContext),
          string = stringFromLabels(labels),
          proof = null,
          topLevelAssertion = new Metatheorem(fileContext, string, labels, suppositions, consequent, proof, substitutions);

    return topLevelAssertion;
  }

  static fromMetatheoremNode(metatheoremNode, fileContext) {
    const proofNode = proofNodeQuery(metatheoremNode),
          labelNodes = labelNodesQuery(metatheoremNode),
          consequentNode = consequentNodeQuery(metatheoremNode),
          suppositionNodes = suppositionNodesQuery(metatheoremNode),
          labels = labelNodes.map((labelNode) => {
            const label = Label.fromLabelNode(labelNode, fileContext);

            return label;
          }),
          suppositions = suppositionNodes.map((suppositionNode) => {
            const supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);

            return supposition;
          }),
          consequent = Consequent.fromConsequentNode(consequentNode, fileContext),
          proof = Proof.fromProofNode(proofNode, fileContext),
          string = stringFromLabels(labels),
          substitutions = Substitutions.fromNothing(),
          metatheorem = new Metatheorem(fileContext, string, labels, suppositions, consequent, proof, substitutions);

    return metatheorem;
  }
}

export function substitutionsFromJSON(json, fileContext) {
  let { substitutions } = json;

  const substitutionsJSON = substitutions;  ///

  substitutions = substitutionsJSON.map((substitutionJSON) => {
    const json = substitutionJSON,  ///
          substitution = Substitution.fromJSON(json, fileContext);

    return substitution;
  });

  return substitutions;
}
