"use strict";

import "../preamble";

import { Dependency } from "occam-model";
import { verificationUtilities, ReleaseContext } from "occam-languages";

import { FileContextFromFilePath } from "../utilities/fileContext";
import { releaseContextFromDependency } from "../utilities/releaseContext";

const { createReleaseContexts, verifyReleaseContexts, initialiseReleaseContexts } = verificationUtilities;

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

    const dependency = Dependency.fromName(name),
          releaseContextCreated = await createReleaseContexts(dependency, context);

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

    const releaseContextsInitialised = initialiseReleaseContexts(dependency, context);

    if (!releaseContextsInitialised) {
      log.warning(`The '${name}' project or package cannot be initialised.`);

      return;
    }

    const releaseContextsVerify = await verifyReleaseContexts(dependency, releaseContextMap);

    if (!releaseContextsVerify) {
      log.warning(`The '${name}' project or package cannot be verified.`);

      return;
    }

    const json = releaseContext.toJSON(),
          entries = releaseContext.getEntries(),
          customGrammar = releaseContext.getCustomGrammar(),
          dependencyReleaseContexts = releaseContext.getDependencyReleaseContexts(),
          releaseContexts = [
            releaseContext,
            ...dependencyReleaseContexts
          ];

    ReleaseContext.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar).initialise(releaseContexts, FileContextFromFilePath);

  // }
  // catch (error) {
  //   log.error(error);
  // }
}
