"use strict";

import Axiom from "../axiom";
import LocalContext from "../context/local";
import verifyLabels from "../verify/labels";
import verifyConsequent from "../verify/consequent";
import verifySuppositions from "../verify/suppositions";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/axiom/labels/label"),
      consequentNodeQuery = nodeQuery("/axiom/consequent!"),
      suppositionsNodeQuery = nodesQuery("/axiom/supposition");

export default function verifyAxiom(axiomNode, fileContext) {
  let axiomVerified = false;

  const labelNodes = labelNodesQuery(axiomNode),
        labelsString = fileContext.nodesAsString(labelNodes),
        localContext = LocalContext.fromFileContext(fileContext);

  fileContext.trace(`Verifying the '${labelsString}' axiom...`, axiomNode);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const suppositions = [],
          suppositionNodes = suppositionsNodeQuery(axiomNode),
          suppositionsVerified = verifySuppositions(suppositionNodes, suppositions, localContext);

    if (suppositionsVerified) {
      const consequents = [],
            consequentNode = consequentNodeQuery(axiomNode),
            consequentVerified = verifyConsequent(consequentNode, consequents, localContext);

      if (consequentVerified) {
        const firstConsequent = first(consequents),
              consequent = firstConsequent, ///
              axiom = Axiom.fromLabelsSuppositionsConsequentAndLocalContext(labels, suppositions, consequent, localContext);

        fileContext.addAxiom(axiom);

        axiomVerified = true;
      }
    }
  }

  if (axiomVerified) {
    fileContext.debug(`...verified the '${labelsString}' axiom.`, axiomNode);
  }

  return axiomVerified;
}
