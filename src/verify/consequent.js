"use strict";

import Consequent from "../consequent";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const statementNodeQuery = nodeQuery("/consequent/unqualifiedStatement!/statement!");

export default function verifyConsequent(consequentNode, consequents, proofContext) {
  let consequentVerified = false;

  proofContext.begin(consequentNode);

  const consequentString = nodeAsString(consequentNode);

  proofContext.debug(`Verifying the ${consequentString} consequent...`);

  const statementNode = statementNodeQuery(consequentNode);

  if (statementNode !== null) {
    const consequent = Consequent.fromStatementNode(statementNode);

    consequents.push(consequent);

    consequentVerified = true;
  }

  consequentVerified ?
    proofContext.complete(consequentNode) :
      proofContext.halt(consequentNode);

  return consequentVerified;
}
