"use strict";

import Theorem from "../theorem";
// import verifyProof from "../verify/proof";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";
import verifyConsequent from "../verify/consequent";
// import verifySuppositions from "../verify/suppositions";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const proofNodeQuery = nodeQuery("/theorem/proof!"),
      labelNodesQuery = nodesQuery("/theorem/label"),
      consequentNodeQuery = nodeQuery("/theorem/consequent!"),
      suppositionsNodeQuery = nodesQuery("/theorem/supposition");

export default function verifyTheorem(theoremNode, fileContext) {
  let theoremVerified = false;

  const labelNodes = labelNodesQuery(theoremNode),
        labelsString = fileContext.nodesAsString(labelNodes);

  fileContext.trace(`Verifying the '${labelsString}' theorem...`, theoremNode);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const localContext = LocalContext.fromFileContext(fileContext),
          suppositions = [],
          suppositionNodes = suppositionsNodeQuery(theoremNode),
          suppositionsVerified = verifySuppositions(suppositionNodes, suppositions, localContext);

    if (suppositionsVerified) {
      const consequents = [],
            consequentNode = consequentNodeQuery(theoremNode),
            consequentVerified = verifyConsequent(consequentNode, consequents, localContext);

      if (consequentVerified) {
        const proofNode = proofNodeQuery(theoremNode),
              firstConsequent = first(consequents),
              consequent = firstConsequent, ///
              statementNode = consequent.getStatementNode(),
              substitutions = Substitutions.fromNothing(),
              proofVerified = verifyProof(proofNode, statementNode, substitutions, localContext);

        if (proofVerified) {
          const substitutions = Substitutions.fromNothing(),
                theorem = Theorem.fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, substitutions, fileContext);

          fileContext.addTheorem(theorem);

          theoremVerified = true;
        }
      }
    }
  }

  if (theoremVerified) {
    fileContext.debug(`...verified the '${labelsString}' theorem.`, theoremNode);
  }

  return theoremVerified;
}
