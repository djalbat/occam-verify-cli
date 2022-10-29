"use strict";

import verifyFiles from "../verify/files";

export default function verifyRelease(name, releaseContextMap, releaseContexts = []) {
  const releaseContext = releaseContextMap[name],
        verified = releaseContext.isVerified()

  let releaseVerified = verified; ///

  if (!releaseVerified) {
    releaseContext.debug(`Verifying the '${name}' package...`);

    const dependencies = releaseContext.getDependencies(),
          dependencyReleasesVVerified = dependencies.everyDependency((dependency) => {
            const name = dependency.getName(),
                  releaseVerified = verifyRelease(name, releaseContextMap, releaseContexts);

            if (releaseVerified) {
              return true;
            }
          });

    if (dependencyReleasesVVerified) {
      const releaseContexts = dependencies.mapDependency((dependency) => {
              const name = dependency.getName(),
                    releaseContext = releaseContextMap[name];

              return releaseContext;
            }),
            dependencyReleaseContexts = retrieveDependencyReleaseContexts(dependencies, releaseContextMap);

      releaseContext.initialise(releaseContexts, dependencyReleaseContexts);

      const filesVerified = verifyFiles(releaseContext);

      releaseVerified = filesVerified;  ///

      if (releaseVerified) {
        releaseContexts.push(releaseContext);

        releaseContext.info(`Verified the '${name}' package.`);
      }
    }
  }

  return releaseVerified;
}

function retrieveDependencyReleaseContexts(dependencies, releaseContextMap, dependencyReleaseContexts = []) {
  dependencies.forEachDependency((dependency) => {
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
