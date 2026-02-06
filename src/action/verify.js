"use strict";

import { Dependency } from "occam-model";

import "../preamble";

import { verifyRelease } from "../utilities/release";
import { startClock, stopClock } from "../utilities/clock";
import { releaseContextFromDependency } from "../utilities/fileSystem";
import { createReleaseContext, initialiseReleaseContext } from "../utilities/releaseContext";

export default async function verifyAction(argument, log) {
  const name = argument, ///
        context = {},
        callback = async (context, filePath, lineIndex) => {
          ///
        },
        dependency = Dependency.fromName(name),
        dependentNames = [],
        releaseContextMap = {};

  Object.assign(context, {
    log,
    callback,
    releaseContextMap,
    releaseContextFromDependency
  });

  let now = startClock();

  // try {
    const success = await createReleaseContext(dependency, dependentNames, context);

    if (!success) {
      log.warning(`The '${name}' project or package cannot be created.`);

      return;
    }

    const releaseName = name, ///
          releaseContext = releaseContextMap[releaseName],
          released = releaseContext.isReleased();

    if (released) {
      log.warning(`The '${name}' package does not need to be verified.`);

      return;
    }

    initialiseReleaseContext(dependency, context);

    const dependentName = null,
          dependentReleased = false,
          releaseVerifies = await verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap);

    if (!releaseVerifies) {
      log.warning(`The '${name}' project or package cannot be verified.`);

      return;
    }

    stopClock(now, log);
  // }
  // catch (error) {
  //   log.error(error);
  // }
}
