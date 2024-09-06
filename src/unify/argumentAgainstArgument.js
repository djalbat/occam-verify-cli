"use strict";

import termAgainstConstructorUnifier from "../unifier/termAgainstConstructor";

export default function unifyArgumentAgainstArgument(argumentNodeA, argumentNodeB, localContext, unifyAhead) {
  let argumentUnifiedAgainstArgument;

  const nonTerminalNodeA = argumentNodeA, ///
        nonTerminalNodeB = argumentNodeB, ///
        nonTerminalNodeVerified = termAgainstConstructorUnifier.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);

  argumentUnifiedAgainstArgument = nonTerminalNodeVerified; ///

  return argumentUnifiedAgainstArgument;
}
