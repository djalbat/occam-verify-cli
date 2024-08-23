"use strict";

import Conjecture from "../conjecture";
import verifyProof from "../verify/proof";
import LocalContext from "../context/local";
import verifyLabels from "../verify/labels";
import verifyConsequent from "../verify/consequent";
import verifySuppositions from "../verify/suppositions";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const proofNodeQuery = nodeQuery("/conjecture/proof!"),
      labelsNodeQuery = nodeQuery("/conjecture/labels!"),
      consequentNodeQuery = nodeQuery("/conjecture/consequent!"),
      suppositionsNodeQuery = nodesQuery("/conjecture/supposition");

export default function verifyConjecture(conjectureNode, fileContext) {
  let conjectureVerified = false;

  const labelsNode = labelsNodeQuery(conjectureNode),
        labelsString = fileContext.nodeAsString(labelsNode),
        localContext = LocalContext.fromFileContext(fileContext);

  fileContext.trace(`Verifying the '${labelsString}' conjecture...`, conjectureNode);

  const labels = [],
        labelsVerified = verifyLabels(labelsNode, labels, fileContext);

  if (labelsVerified) {
    const suppositions = [],
          suppositionNodes = suppositionsNodeQuery(conjectureNode),
          suppositionsVerified = verifySuppositions(suppositionNodes, suppositions, localContext);

    if (suppositionsVerified) {
      const consequents = [],
            consequentNode = consequentNodeQuery(conjectureNode),
            consequentVerified = verifyConsequent(consequentNode, consequents, localContext);

      if (consequentVerified) {
        const proofNode = proofNodeQuery(conjectureNode),
              firstConsequent = first(consequents),
              consequent = firstConsequent; ///

        if (proofNode !== null) {
          verifyProof(proofNode, consequent, localContext);
        }

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
