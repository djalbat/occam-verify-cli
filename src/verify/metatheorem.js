"use strict";

import verifyProof from "../verify/proof";
import Metatheorem from "../metatheorem";
import verifyLabels from "../verify/labels";
import LocalContext from "../context/local";
import verifyConsequent from "../verify/consequent";
import verifySuppositions from "../verify/suppositions";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/metatheorem/label"),
      proofNodeQuery = nodeQuery("/metatheorem/proof!"),
      consequentNodeQuery = nodeQuery("/metatheorem/consequent!"),
      suppositionsNodeQuery = nodesQuery("/metatheorem/supposition");

export default function verifyMetatheorem(metatheoremNode, fileContext) {
  let metatheoremVerified = false;

  const labelNodes = labelNodesQuery(metatheoremNode),
        labelsString = fileContext.nodesAsString(labelNodes);

  fileContext.trace(`Verifying the '${labelsString}' metatheorem...`, metatheoremNode);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const localContext = LocalContext.fromFileContext(fileContext),
          suppositions = [],
          suppositionNodes = suppositionsNodeQuery(metatheoremNode),
          suppositionsVerified = verifySuppositions(suppositionNodes, suppositions, localContext);

    if (suppositionsVerified) {
      const consequents = [],
            consequentNode = consequentNodeQuery(metatheoremNode),
            consequentVerified = verifyConsequent(consequentNode, consequents, localContext);

      if (consequentVerified) {
        const proofNode = proofNodeQuery(metatheoremNode),
              firstConsequent = first(consequents),
              consequent = firstConsequent, ///
              substitutions = [],
              statementNode = consequent.getStatementNode(),
              proofVerified = verifyProof(proofNode, statementNode, substitutions, localContext);

        if (proofVerified) {
          const metatheorem = Metatheorem.fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, substitutions, fileContext);

          fileContext.addMetatheorem(metatheorem);

          metatheoremVerified = true;
        }
      }
    }
  }

  if (metatheoremVerified) {
    fileContext.debug(`...verified the '${labelsString}' metatheorem.`, metatheoremNode);
  }

  return metatheoremVerified;
}
