"use strict";

function verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap) {
  let releaseVerifies = false;

  const releaseContext = releaseContextMap[releaseName];

  if (releaseContext !== null) {
    const released = releaseContext.isReleased();

    if (released) {
      releaseVerifies = true;
    } else {
      if (dependentReleased) {
        releaseContext.warning(`The '${releaseName}' project cannot be verifies because its '${dependentName}' dependent is a package.`);
      } else {
        const dependentName = releaseName,  ///
              dependentReleased = released, ///
              dependencyReleasesVVerifies = verifyDependencyReleases(releaseContext, dependentName, dependentReleased, releaseContextMap);

        if (dependencyReleasesVVerifies) {
          const releaseContextVerified = releaseContext.isVerified();

          if (releaseContextVerified) {
            releaseVerifies = true;
          } else {
            releaseContext.info(`Verifying the '${releaseName}' project...`);

            const releaseContextVerifies = releaseContext.verify();

            if (releaseContextVerifies) {
              releaseContext.info(`...verified the '${releaseName}' project.`);

              releaseVerifies = true;
            }
          }
        }
      }
    }
  }

  return releaseVerifies;
}

export default {
  verifyRelease
};

function verifyDependencyReleases(releaseContext, dependentName, dependentReleased, releaseContextMap) {
  const dependencies = releaseContext.getDependencies(),
        dependencyReleasesVVerifies = dependencies.everyDependency((dependency) => {
          const name = dependency.getName(),
                releaseName = name, ///
                releaseVerifies = verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap);

          if (releaseVerifies) {
            return true;
          }
        });

  return dependencyReleasesVVerifies;
}
