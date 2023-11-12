"use strict";

import verifyFiles from "../verify/files";

export default function verifyRelease(releaseName, releaseContextMap) {
  let releaseVerified = false;

  const releaseContext = releaseContextMap[releaseName];

  if (releaseContext !== null) {
    const dependencyReleasesVVerified = verifyDependencyReleases(releaseContext, releaseContextMap);

    if (dependencyReleasesVVerified) {
      const verified = releaseContext.isVerified();

      if (verified) {
        releaseVerified = true;
      } else {
        releaseContext.debug(`Verifying the '${releaseName}' project...`);

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

  return releaseVerified;
}

function verifyReleaseFiles(releaseContext) {
  const filesVerified = verifyFiles(releaseContext),
        releaseFilesVerified = filesVerified; ///

  return releaseFilesVerified;
}

function verifyDependencyReleases(releaseContext, releaseContextMap) {
  const dependencies = releaseContext.getDependencies(),
        dependencyReleasesVVerified = dependencies.everyDependency((dependency) => {
          const name = dependency.getName(),
                releaseName = name, ///
                releaseVerified = verifyRelease(releaseName, releaseContextMap);

          if (releaseVerified) {
            return true;
          }
        });

  return dependencyReleasesVVerified;
}
