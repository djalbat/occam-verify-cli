"use strict";

import verifyFiles from "../verify/files";

export default function verifyRelease(releaseName, releaseContextMap) {
  const releaseContext = releaseContextMap[releaseName],
        verified = releaseContext.isVerified();

  let releaseVerified = verified; ///

  if (!releaseVerified) {
    releaseContext.debug(`Verifying the '${releaseName}' package...`);

    const dependencyReleasesVVerified = verifyDependencyReleases(releaseContext, releaseContextMap);

    if (dependencyReleasesVVerified) {
      const releaseFilesVerified = verifyReleaseFiles(releaseContext);

      if (releaseFilesVerified) {
        releaseVerified = true;
      }
    }
  }

  if (releaseVerified) {
    const verified = true;

    releaseContext.setVerified(verified);

    releaseContext.info(`Verified the '${releaseName}' package.`);
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
