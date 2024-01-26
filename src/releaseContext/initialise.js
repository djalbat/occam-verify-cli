"use strict";

export default function initialiseReleaseContext(dependency, dependentName, dependentReleased, context) {
  let releaseContextInitialised = false;

  const { releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext === null) {
    const { log } = context;

    log.error(`Unable to initialise the '${dependencyName}' dependency's context because it has not been created.`);
  } else {
    const initialised = releaseContext.isInitialised();

    if (initialised) {
      releaseContextInitialised = true;
    } else {
      const released = releaseContext.isReleased();

      if (!released && dependentReleased) {
        const { log } = context;

        log.error(`Unable to initialise the '${dependencyName}' dependency's context because its '${dependentName}' dependent is a package.`);
      } else {
        const dependencies = releaseContext.getDependencies();

        dependentName = dependencyName;  ///

        dependentReleased = released;  ///

        releaseContextInitialised = dependencies.everyDependency((dependency) => {  ///
          const releaseContextInitialised = initialiseReleaseContext(dependency, dependentName, dependentReleased, context);

          if (releaseContextInitialised) {
            return true;
          }
        });

        if (releaseContextInitialised) {
          const releaseContexts = retrieveReleaseContexts(dependency, context);

          releaseContext.initialise(releaseContexts);
        }
      }
    }
  }

  return releaseContextInitialised;
}

function retrieveReleaseContexts(dependency, context, releaseContexts = []) {
  const { releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName],
        releaseContextsIncludesReleaseContext = releaseContexts.includes(releaseContext);

  if (releaseContextsIncludesReleaseContext) {
    return;
  }

  releaseContexts.push(releaseContext);

  const dependencies = releaseContext.getDependencies();

  dependencies.forEachDependency((dependency) => {
    retrieveReleaseContexts(dependency, context, releaseContexts);
  });

  return releaseContexts;
}
