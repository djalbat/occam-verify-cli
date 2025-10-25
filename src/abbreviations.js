"use strict";

import { HELP_OPTION, TAIL_OPTION, FOLLOW_OPTION, VERSION_OPTION, LOG_LEVEL_OPTION } from "./options";

const h = HELP_OPTION,
      t = TAIL_OPTION,
      f = FOLLOW_OPTION,
      v = VERSION_OPTION,
      l = LOG_LEVEL_OPTION

const abbreviations = {
  h,
  t,
  f,
  v,
  l
};

export default abbreviations;
