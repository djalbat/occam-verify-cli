"use strict";

import verifyFiles from "../verify/files";

export default function verifyRelease(releaseName, releaseContextMap, releaseContexts = []) {
  const releaseContext = releaseContextMap[releaseName];

  let releaseVerified = releaseContext.isReleaseVerified();

  if (!releaseVerified) {
    releaseContext.debug(`Verifying the '${releaseName}' package...`);

    const dependencyReleaseNames = releaseContext.getDependencyReleaseNames(),
          dependencyReleasesVVerified = dependencyReleaseNames.every((dependencyReleaseName) => {
            const releaseName = dependencyReleaseName,  ///
                  releaseVerified = verifyRelease(releaseName, releaseContextMap, releaseContexts);

            if (releaseVerified) {
              return true;
            }
          });

    if (dependencyReleasesVVerified) {
      const releaseNames = dependencyReleaseNames,  ///
            releaseContexts = releaseNames.map((releaseName) => {
              const releaseContext = releaseContextMap[releaseName];

              return releaseContext;
            });

      const dependencyReleaseContexts = retrieveDependencyReleaseContexts(dependencyReleaseNames, releaseContextMap);

      releaseContext.initialise(releaseContexts, dependencyReleaseContexts);

      const filesVerified = verifyFiles(releaseContext);

      releaseVerified = filesVerified;  ///

      if (releaseVerified) {
        releaseContexts.push(releaseContext);

        releaseContext.info(`Verified the '${releaseName}' release.`);
      }
    }
  }

  return releaseVerified;
}

function retrieveDependencyReleaseContexts(dependencyReleaseNames, releaseContextMap, dependencyReleaseContexts = []) {
  dependencyReleaseNames.forEach((dependencyReleaseName) => {
    const dependencyReleaseContext = releaseContextMap[dependencyReleaseName],
          dependencyReleaseContextsIncludesDependencyReleaseContext = dependencyReleaseContexts.includes(dependencyReleaseContext);

    if (!dependencyReleaseContextsIncludesDependencyReleaseContext) {
      const releaseContext = dependencyReleaseContext,  ///
            dependencyReleaseNames = releaseContext.getDependencyReleaseNames();

      retrieveDependencyReleaseContexts(dependencyReleaseNames, releaseContextMap, dependencyReleaseContexts);

      dependencyReleaseContexts.push(dependencyReleaseContext);
    }
  });

  return dependencyReleaseContexts;
}
