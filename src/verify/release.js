"use strict";

export default function verifyRelease(name, releaseContextMap) {
  const releaseContext = releaseContextMap[name],
        verified = releaseContext.isVerified();

  let releaseVerified = verified; ///

  if (!releaseVerified) {
    releaseContext.debug(`Verifying the '${name}' package...`);

    const dependencyReleasesVVerified = verifyDependencyReleases(releaseContext, releaseContextMap);

    if (dependencyReleasesVVerified) {
      const releaseFilesVerified = verifyReleaseFiles(releaseContext, releaseContextMap);

      if (releaseFilesVerified) {
        releaseVerified = true;
      }
    }
  }

  if (releaseVerified) {
    const verified = true;

    releaseContext.setVerified(verified);

    releaseContext.info(`Verified the '${name}' package.`);
  }

  return releaseVerified;
}

function verifyReleaseFiles(releaseContext, releaseContextMap) {
  const dependencies = releaseContext.getDependencies(),
        releaseContexts = dependencies.mapDependency((dependency) => {
          const name = dependency.getName(),
                releaseContext = releaseContextMap[name];

          return releaseContext;
        }),
        dependencyReleaseContexts = retrieveDependencyReleaseContexts(dependencies, releaseContextMap);

  releaseContext.initialise(releaseContexts, dependencyReleaseContexts);

  const filesVerified = releaseContext.verifyFiles(),
        releaseFilesVerified = filesVerified; ///

  return releaseFilesVerified;
}

function verifyDependencyReleases(releaseContext, releaseContextMap) {
  const dependencies = releaseContext.getDependencies(),
        dependencyReleasesVVerified = dependencies.everyDependency((dependency) => {
          const name = dependency.getName(),
                releaseVerified = verifyRelease(name, releaseContextMap);

          if (releaseVerified) {
            return true;
          }
        });

  return dependencyReleasesVVerified;
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
