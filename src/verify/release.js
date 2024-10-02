"use strict";

import verifyFiles from "../verify/files";

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
          const verified = releaseContext.isVerified();

          if (verified) {
            releaseVerified = true;
          } else {
            releaseContext.info(`Verifying the '${releaseName}' project...`);

            const releaseFilesVerified = verifyReleaseFiles(releaseContext);

            if (releaseFilesVerified) {
              const verified = true;

              releaseContext.setVerified(verified);

              releaseVerified = verified; ///
            }

            if (releaseVerified) {
              releaseContext.info(`...verified the '${releaseName}' project.`);
            }
          }
        }
      }
    }
  }

  return releaseVerified;
}

function verifyReleaseFiles(releaseContext) {
  const filesVerified = verifyFiles(releaseContext),
        releaseFilesVerified = filesVerified; ///

  return releaseFilesVerified;
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
