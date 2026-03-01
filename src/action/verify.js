"use strict";

import "../preamble";

import { Dependency } from "occam-model";
import { verificationUtilities, ReleaseContext } from "occam-languages";

import { FileContextFromFilePath } from "../utilities/fileContext";
import { releaseContextFromDependency } from "../utilities/releaseContext";

const { createReleaseContext, verifyReleaseContext, initialiseReleaseContext } = verificationUtilities;

export default async function verifyAction(name, log) {
  const callback = async (context, filePath, lineIndex) => {
          ///
        },
        releaseContextMap = {},
        context = {
          log,
          callback,
          releaseContextMap,
          FileContextFromFilePath,
          releaseContextFromDependency
        }

  // try {
    const dependentNames = [],
          dependency = Dependency.fromName(name),
          releaseContextCreated = await createReleaseContext(dependency, dependentNames, context);

    if (!releaseContextCreated) {
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
          releaseContextVerifies = await verifyReleaseContext(releaseName, dependentName, dependentReleased, releaseContextMap);

    if (!releaseContextVerifies) {
      log.warning(`The '${name}' project or package cannot be verified.`);

      return;
    }

    const json = releaseContext.toJSON(),
          entries = releaseContext.getEntries(),
          customGrammar = releaseContext.getCustomGrammar(),
          releaseContexts = [
            releaseContext
          ];

    ReleaseContext.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar).initialise(releaseContexts, FileContextFromFilePath);


  // }
  // catch (error) {
  //   log.error(error);
  // }
}
