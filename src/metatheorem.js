"use strict";

import shim from "./shim";
import TopLevelAssertion from "./topLevelAssertion";

import { stringFromLabels } from "./topLevelAssertion";
import { labelsFromJSON,
         labelsToLabelsJSON,
         consequentFromJSON,
         suppositionsFromJSON,
         substitutionsFromJSON,
         consequentToConsequentJSON,
         suppositionsToSuppositionsJSON,
         substitutionsToSubstitutionsJSON } from "./utilities/json";

class Metatheorem extends TopLevelAssertion {
  verify() {
    let verified;

    const fileContext = this.getFileContext(),
          metatheoremString = this.string;  ///

    fileContext.trace(`Verifying the '${metatheoremString}' metatheorem...`);

    verified = super.verify();

    if (verified) {
      const metaTheorem = this; ///

      fileContext.addMetatheorem(metaTheorem);

      fileContext.debug(`...verified the '${metatheoremString}' metatheorem.`);
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

  static fromJSON(json, fileContext) {
    const labels = labelsFromJSON(json, fileContext),
          consequent = consequentFromJSON(json, fileContext),
          suppositions = suppositionsFromJSON(json, fileContext),
          substitutions = substitutionsFromJSON(json, fileContext),
          string = stringFromLabels(labels),
          proof = null,
          topLevelAssertion = new Metatheorem(fileContext, string, labels, suppositions, consequent, proof, substitutions);

    return topLevelAssertion;
  }

  static fromMetatheoremNode(metatheoremNode, fileContext) { return TopLevelAssertion.fromNode(Metatheorem, metatheoremNode, fileContext); }
}

Object.assign(shim, {
  Metatheorem
});

export default Metatheorem;
