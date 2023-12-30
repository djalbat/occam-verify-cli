"use strict";

import Conjecture from "../conjecture";
import verifyProof from "../verify/proof";
import LocalContext from "../context/local";
import verifyLabels from "../verify/labels";
import verifyConsequent from "./consequent";
import verifySupposition from "./supposition";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const proofNodeQuery = nodeQuery("/conjecture/proof!"),
      labelNodesQuery = nodesQuery("/conjecture/labels/label"),
      consequentNodeQuery = nodeQuery("/conjecture/consequent!"),
      suppositionsNodeQuery = nodesQuery("/conjecture/supposition");

export default function verifyConjecture(conjectureNode, fileContext) {
  let conjectureVerified = false;

  const labelNodes = labelNodesQuery(conjectureNode),
        labelsString = fileContext.nodesAsString(labelNodes),
        localContext = LocalContext.fromFileContext(fileContext);

  fileContext.trace(`Verifying the '${labelsString}' conjecture...`, conjectureNode);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const suppositions = [],
          suppositionNodes = suppositionsNodeQuery(conjectureNode),
          suppositionsVerified = suppositionNodes.every((suppositionNode) => {
            const suppositionVerified = verifySupposition(suppositionNode, suppositions, localContext);

            if (suppositionVerified) {
              return true;
            }
          });

    if (suppositionsVerified) {
      const consequents = [],
            consequentNode = consequentNodeQuery(conjectureNode),
            consequentVerified = verifyConsequent(consequentNode, consequents, localContext);

      if (consequentVerified) {
        const proofNode = proofNodeQuery(conjectureNode),
              firstConsequent = first(consequents),
              consequent = firstConsequent; ///

        verifyProof(proofNode, consequent, localContext);

        const conjecture = Conjecture.fromLabelsSuppositionsConsequentAndLocalContext(labels, suppositions, consequent, localContext);

        fileContext.addConjecture(conjecture);

        conjectureVerified = true;
      }
    }
  }

  if (conjectureVerified) {
    fileContext.debug(`...verified the '${labelsString}' conjecture.`, conjectureNode);
  }

  return conjectureVerified;
}
