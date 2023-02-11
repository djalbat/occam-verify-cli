"use strict";

import Conjecture from "../conjecture";
import verifyProof from "../verify/proof";
import ProofContext from "../context/proof";
import verifyLabels from "../verify/labels";
import verifySupposition from "./supposition";
import verifyConsequence from "./consequence";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";
import proof from "../context/proof";

const proofNodeQuery = nodeQuery("/conjecture/proof!"),
      labelNodesQuery = nodesQuery("/conjecture/label"),
      consequenceNodeQuery = nodeQuery("/conjecture/consequence!"),
      suppositionsNodeQuery = nodesQuery("/conjecture/supposition");

export default function verifyConjecture(conjectureNode, fileContext) {
  let conjectureVerified = false;

  const labelNodes = labelNodesQuery(conjectureNode),
        labelsString = fileContext.nodesAsString(labelNodes),
        proofContext = ProofContext.fromFileContext(fileContext);

  fileContext.debug(`Verifying the '${labelsString}' conjecture...`, conjectureNode);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const suppositions = [],
          suppositionNodes = suppositionsNodeQuery(conjectureNode),
          suppositionsVerified = suppositionNodes.every((suppositionNode) => {
            const suppositionVerified = verifySupposition(suppositionNode, suppositions, proofContext);

            if (suppositionVerified) {
              return true;
            }
          });

    if (suppositionsVerified) {
      const consequences = [],
            consequenceNode = consequenceNodeQuery(conjectureNode),
            consequenceVerified = verifyConsequence(consequenceNode, consequences, proofContext);

      if (consequenceVerified) {
        const proofNode = proofNodeQuery(conjectureNode),
              firstConsequence = first(consequences),
              consequence = firstConsequence; ///

        verifyProof(proofNode, consequence, proofContext);

        const conjecture = Conjecture.fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext);

        fileContext.addConjecture(conjecture);

        conjectureVerified = true;
      }
    }
  }

  if (conjectureVerified) {
    fileContext.info(`Verified the '${labelsString}' conjecture.`, conjectureNode);
  }

  return conjectureVerified;
}
