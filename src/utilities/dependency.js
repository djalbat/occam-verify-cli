"use strict";

import { asynchronousUtilities } from "occam-furtle";

const { asyncEvery  } = asynchronousUtilities;

export async function asyncEveryDependency(dependencies, callback) {
  const array = dependencies.getArray();

  return await asyncEvery(array, callback);
}
