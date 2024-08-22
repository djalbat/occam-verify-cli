"use strict";

import termAgainstConstructorNodesVerifier from "../verifier/nodes/termAgainstConstructor";

export default function verifyArgumentAgainstArgument(argumentNodeA, argumentNodeB, localContext, verifyAhead) {
  let argumentVerifiedAgainstArgument;

  const nonTerminalNodeA = argumentNodeA, ///
        nonTerminalNodeB = argumentNodeB, ///
        nonTerminalNodeVerified = termAgainstConstructorNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);

  argumentVerifiedAgainstArgument = nonTerminalNodeVerified; ///

  return argumentVerifiedAgainstArgument;
}
