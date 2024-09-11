"use strict";

export default function verifyReleaseContext(dependency, dependentName, dependentReleased, context) {
  let releaseContextInitialised = false;

  const { releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext === null) {
    const { log } = context;

    log.error(`Unable to verify the '${dependencyName}' dependency's context because it has not been created.`);
  } else {
    const verified = releaseContext.isInitialised();

    if (verified) {
      releaseContextInitialised = true;
    } else {
      const released = releaseContext.isReleased();

      if (!released && dependentReleased) {
        const { log } = context;

        log.error(`Unable to verify the '${dependencyName}' dependency's context because its '${dependentName}' dependent is a package.`);
      } else {
        const dependencies = releaseContext.getDependencies();

        dependentName = dependencyName;  ///

        dependentReleased = released;  ///

        releaseContextInitialised = dependencies.everyDependency((dependency) => {  ///
          const releaseContextInitialised = verifyReleaseContext(dependency, dependentName, dependentReleased, context);

          if (releaseContextInitialised) {
            return true;
          }
        });

        if (releaseContextInitialised) {
          const releaseContexts = retrieveReleaseContexts(releaseContext, releaseContextMap);

          releaseContext.verify(releaseContexts);
        }
      }
    }
  }

  return releaseContextInitialised;
}

function retrieveReleaseContexts(releaseContext, releaseContextMap) {
  const releaseContexts = [],
        remainingReleaseContext = releaseContext,  ///
        remainingReleaseContexts = [
          remainingReleaseContext
        ];

  let remainingReleaseContextsLength = remainingReleaseContexts.length;

  while (remainingReleaseContextsLength > 0) {
    const remainingReleaseContext = remainingReleaseContexts.shift(),
          releaseContext = remainingReleaseContext;  ///

    releaseContexts.push(releaseContext);

    const dependencies = releaseContext.getDependencies();

    dependencies.forEachDependency((dependency) => {
      const dependencyName = dependency.getName(),
            releaseName = dependencyName, ///
            releaseContext = releaseContextMap[releaseName],
            releaseContextsIncludesReleaseContext = releaseContexts.includes(releaseContext),
            remainingReleaseContextsIncludesReleaseContext = remainingReleaseContexts.includes(releaseContext);

      if (!releaseContextsIncludesReleaseContext && !remainingReleaseContextsIncludesReleaseContext) {
        const remainingReleaseContext = releaseContext; ///

        remainingReleaseContexts.push(remainingReleaseContext);
      }
    });

    remainingReleaseContextsLength = remainingReleaseContexts.length;
  }

  return releaseContexts;
}
