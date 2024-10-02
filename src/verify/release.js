"use strict";

export default function verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap) {
  let releaseVerified = false;

  const releaseContext = releaseContextMap[releaseName];

  if (releaseContext !== null) {
    const released = releaseContext.isReleased();

    if (released) {
      releaseVerified = true;
    } else {
      if (dependentReleased) {
        releaseContext.warning(`The '${releaseName}' project cannot be verified because its '${dependentName}' dependent is a package.`);
      } else {
        const dependentName = releaseName,  ///
              dependentReleased = released, ///
              dependencyReleasesVVerified = verifyDependencyReleases(releaseContext, dependentName, dependentReleased, releaseContextMap);

        if (dependencyReleasesVVerified) {
          let releaseContextVerified;

          releaseContextVerified = releaseContext.isVerified();

          if (!releaseContextVerified) {
            releaseContext.info(`Verifying the '${releaseName}' project...`);

            releaseContextVerified = releaseContext.verify();

            if (releaseContextVerified) {
              releaseContext.info(`...verified the '${releaseName}' project.`);
            }
          }

          releaseVerified = releaseContextVerified; ///
        }
      }
    }
  }

  return releaseVerified;
}

function verifyDependencyReleases(releaseContext, dependentName, dependentReleased, releaseContextMap) {
  const dependencies = releaseContext.getDependencies(),
        dependencyReleasesVVerified = dependencies.everyDependency((dependency) => {
          const name = dependency.getName(),
                releaseName = name, ///
                releaseVerified = verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap);

          if (releaseVerified) {
            return true;
          }
        });

  return dependencyReleasesVVerified;
}
