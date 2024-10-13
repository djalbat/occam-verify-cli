"use strict";

import { arrayUtilities } from "necessary";

import { FUNCTION } from "../constants";

const { last } = arrayUtilities;

export function isLastRemainingArgumentFunction(remainingArguments) {
  let lastRemainingArgumentFunction = false;

  const remainingArgumentsLength = remainingArguments.length;

  if (remainingArgumentsLength > 0) {
    const lastRemainingArgument = last(remainingArguments);

    lastRemainingArgumentFunction = (typeof lastRemainingArgument === FUNCTION);
  }

  return lastRemainingArgumentFunction;
}
