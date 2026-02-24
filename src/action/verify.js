"use strict";

import "../preamble";

import { Dependency } from "occam-model";
import { releaseContextUtilities } from "occam-languages";

import { FileContextFromFilePath } from "../utilities/fileContext";
import { releaseContextFromDependency } from "../utilities/releaseContext";

const { createReleaseContext, verifyReleaseContext, initialiseReleaseContext, releaseContextFromJSON } = releaseContextUtilities;

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
          success = await createReleaseContext(dependency, dependentNames, context);

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
          releaseVerifies = await verifyReleaseContext(releaseName, dependentName, dependentReleased, releaseContextMap);

    if (!releaseVerifies) {
      log.warning(`The '${name}' project or package cannot be verified.`);

      return;
    }

    let json = releaseContext.toJSON(),
        entries = releaseContext.getEntries();

    (() => {

      let context;

      const entriesJSON = entries.toJSON();

      entries = entriesJSON;  ///

      context = json; ///

      json = {
        name,
        entries,
        context
      };

      context = {
        log,
        callback
      };

      const releaseContext = releaseContextFromJSON(json, context),
            releaseContexts = [
              releaseContext
            ];

      releaseContext.initialise(releaseContexts, FileContextFromFilePath);

    })();


  // }
  // catch (error) {
  //   log.error(error);
  // }
}
