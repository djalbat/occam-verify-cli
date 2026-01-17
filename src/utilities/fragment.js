"use strict";

import FragmentContext from "../context/fragment";

export function withinFragment(innerFunction, context) {
  const fragmentContext = FragmentContext.fromNothing(context);

  context = fragmentContext;  ///

  return innerFunction(context);
}
