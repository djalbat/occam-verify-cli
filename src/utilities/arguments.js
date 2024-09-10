"use strict";

import { last } from "./array";
import { FUNCTION } from "../constants";

export function isLastRemainingArgumentFunction(remainingArguments) {
  let lastRemainingArgumentFunction = false;

  const remainingArgumentsLength = remainingArguments.length;

  if (remainingArgumentsLength > 0) {
    const lastRemainingArgument = last(remainingArguments);

    lastRemainingArgumentFunction = (typeof lastRemainingArgument === FUNCTION);
  }

  return lastRemainingArgumentFunction;
}
