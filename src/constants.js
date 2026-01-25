"use strict";

import { levels } from "necessary";

const { TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL } = levels;

export const LEVELS = [
  TRACE_LEVEL,
  DEBUG_LEVEL,
  INFO_LEVEL,
  WARNING_LEVEL,
  ERROR_LEVEL
];

export const S = "s";
export const MISSING = "missing";
export const FUNCTION = "function";
export const UNDEFINED = "undefined";
export const PROVISIONAL = "Provisional";
export const EMPTY_STRING = "";
export const SINGLE_SPACE = " ";
export const PROVISIONALLY = "provisionally";
export const BASE_TYPE_SYMBOL = "<>";
export const OCCAM_VERIFY_CLI = "Occam Verify-CLI";
export const BRACKETED_TERM_DEPTH = 2;
export const BRACKETED_STATEMENT_DEPTH = 2;
