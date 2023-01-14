"use strict";

import Consequence from "../consequence";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const statementNodeQuery = nodeQuery("/consequence/unqualifiedStatement!/statement!");

export default function verifyConsequence(consequenceNode, consequences, proofContext) {
  let consequenceVerified = false;

  proofContext.begin(consequenceNode);

  const consequenceString = nodeAsString(consequenceNode);

  proofContext.debug(`Verifying the ${consequenceString} consequence...`);

  const statementNode = statementNodeQuery(consequenceNode);

  if (statementNode !== null) {
    const consequence = Consequence.fromStatementNode(statementNode);

    consequences.push(consequence);

    consequenceVerified = true;
  }

  consequenceVerified ?
    proofContext.complete(consequenceNode) :
      proofContext.halt(consequenceNode);

  return consequenceVerified;
}
