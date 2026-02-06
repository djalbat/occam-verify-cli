"use strict";

import { Dependency } from "occam-model";

import "../preamble";

import { EMPTY_STRING } from "../constants";
import { verifyRelease } from "../utilities/release";
import { releaseContextFromDependency } from "../utilities/fileSystem";
import { createReleaseContext, initialiseReleaseContext } from "../utilities/releaseContext";

export default function verifyAction(argument, log) {
  const name = trimTrailingSlash(argument), ///
        context = {},
        callback = async (context, filePath, lineIndex) => {
          debugger
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

  createReleaseContext(dependency, dependentNames, context, (error, success) => {
    if (error) {
      log.error(error);

      return;
    }

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
          releaseVerifies = verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap);

    if (!releaseVerifies) {
      log.warning(`The '${name}' project or package cannot be verified.`);

      return;
    }

    stopClock(now, log);
  });
}

function stopClock(now, log) {
  const then = now; ///

  now = Date.now();

  const seconds = Math.floor(now - then) / 1000;

  log.info(`Time ${seconds} seconds.`);
}

function startClock() {
  let now;

  now = Date.now();

  return now;
}

function trimTrailingSlash(string) {
  string = string.replace(/\/$/, EMPTY_STRING); ///

  return string;
}

