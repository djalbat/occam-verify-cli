"use strict";

import verifyFiles from "../verify/files";

export default function verifyRelease(releaseName, releaseContextMap, releaseContexts = []) {
  const releaseContext = releaseContextMap[releaseName],
        verified = releaseContext.isVerified()

  let releaseVerified = verified; ///

  if (!releaseVerified) {
    releaseContext.debug(`Verifying the '${releaseName}' package...`);

    const dependencies = releaseContext.getDependencies(),
          dependencyReleasesVVerified = dependencies.everyDependency((dependency) => {
            const name = dependency.getName(),
                  releaseName = name,  ///
                  releaseVerified = verifyRelease(releaseName, releaseContextMap, releaseContexts);

            if (releaseVerified) {
              return true;
            }
          });

    if (dependencyReleasesVVerified) {
      const releaseContexts = dependencies.mapDependency((dependency) => {
              const name = dependency.getName(),
                    releaseName = name, ///
                    releaseContext = releaseContextMap[releaseName];

              return releaseContext;
            });

      const dependencyReleaseContexts = retrieveDependencyReleaseContexts(dependencies, releaseContextMap);

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

function retrieveDependencyReleaseContexts(dependencies, releaseContextMap, dependencyReleaseContexts = []) {
  dependencies.forEach((dependency) => {
    const dependencyName = dependency.getName(),
          dependencyReleaseName = dependencyName, ///
          dependencyReleaseContext = releaseContextMap[dependencyReleaseName],
          dependencyReleaseContextsIncludesDependencyReleaseContext = dependencyReleaseContexts.includes(dependencyReleaseContext);

    if (!dependencyReleaseContextsIncludesDependencyReleaseContext) {
      const releaseContext = dependencyReleaseContext,  ///
            dependencies = releaseContext.getDependencies();

      retrieveDependencyReleaseContexts(dependencies, releaseContextMap, dependencyReleaseContexts);

      dependencyReleaseContexts.push(dependencyReleaseContext);
    }
  });

  return dependencyReleaseContexts;
}
