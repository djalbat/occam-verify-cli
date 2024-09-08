"use strict";

import Axiom from "../axiom";
import LocalContext from "../context/local";
import verifyLabels from "../verify/labels";
import Substitutions from "../substitutions";
import verifyConsequent from "../verify/consequent";
import verifySuppositions from "../verify/suppositions";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/axiom/label"),
      consequentNodeQuery = nodeQuery("/axiom/consequent!"),
      suppositionsNodeQuery = nodesQuery("/axiom/supposition");

export default function verifyAxiom(axiomNode, fileContext) {
  let axiomVerified = false;

  const labelNodes = labelNodesQuery(axiomNode),
        labelsString = fileContext.nodesAsString(labelNodes);

  fileContext.trace(`Verifying the '${labelsString}' axiom...`, axiomNode);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const localContext = LocalContext.fromFileContext(fileContext),
          suppositions = [],
          suppositionNodes = suppositionsNodeQuery(axiomNode),
          suppositionsVerified = verifySuppositions(suppositionNodes, suppositions, localContext);

    if (suppositionsVerified) {
      const consequents = [],
            consequentNode = consequentNodeQuery(axiomNode),
            consequentVerified = verifyConsequent(consequentNode, consequents, localContext);

      if (consequentVerified) {
        const firstConsequent = first(consequents),
              substitutions = Substitutions.fromNothing(),
              consequent = firstConsequent, ///
              axiom = Axiom.fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, substitutions, fileContext);

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
