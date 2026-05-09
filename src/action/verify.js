"use strict";

import { arrayUtilities } from "necessary";
import { verificationUtilities, releaseContextUtilities } from "occam-languages";

import { FileContextFromFilePath } from "../utilities/fileContext";

const { last } = arrayUtilities,
      { releaseContextFromDependency } = releaseContextUtilities,
      { createReleaseContexts, verifyReleaseContexts, initialiseReleaseContexts } = verificationUtilities;

export default async function verifyAction(name, log) {
  const callback = async (context, breakPoint) => {
          ///
        },
        dependencyName = name,  ///
        releaseContexts = [],
        projectsDirectoryPath = process.cwd(),
        context = {
          log,
          callback,
          releaseContexts,
          projectsDirectoryPath,
          FileContextFromFilePath,
          releaseContextFromDependency
        }

  try {
    const releaseContextCreated = await createReleaseContexts(dependencyName, context);

    if (!releaseContextCreated) {
      log.warning(`The '${name}' project or package cannot be created.`);

      return;
    }

    const lastReleaseContext = last(releaseContexts),
          releaseContext = lastReleaseContext,  ///
          released = releaseContext.isReleased();

    if (released) {
      log.warning(`The '${name}' package does not need to be verified.`);

      return;
    }

    initialiseReleaseContexts(context);

    const releaseContextsVerify = await verifyReleaseContexts(context);

    if (!releaseContextsVerify) {
      log.warning(`The '${name}' project or package cannot be verified.`);

      return;
    }
  }
  catch (error) {
    log.error(error);
  }
}
