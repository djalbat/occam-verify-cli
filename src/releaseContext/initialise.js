"use strict";

export default function initialiseReleaseContext(dependency, dependentName, dependentReleased, context) {
  let releaseContextInitialised = false;

  const { releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext === null) {
    const { log } = context;

    log.warning(`Unable to initialise the '${dependencyName}' ontext because it has not been created.`);
  } else {
    releaseContextInitialised = releaseContext.isInitialised();

    if (!releaseContextInitialised) {
      const released = releaseContext.isReleased();

      if (!released && dependentReleased) {
        const { log } = context;

        log.warning(`Unable to initialise the '${dependencyName}' dependency's context because its '${dependentName}' dependent is a package.`);
      } else {
        const dependencyReleaseContextsInitialised = initialiseDependencyReleaseContexts(dependency, releaseContext, released, context);

        if (dependencyReleaseContextsInitialised) {
          const { log } = context,
                releaseContexts = retrieveReleaseContexts(releaseContext, releaseContextMap);

          log.debug(`Initialising the '${dependencyName}' context...`);

          releaseContextInitialised = releaseContext.initialise(releaseContexts);

          releaseContextInitialised ?
            log.info(`...initialised the '${dependencyName}' context.`) :
              log.warning(`...unable to initialise the '${dependencyName}' context.`);
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

function initialiseDependencyReleaseContexts(dependency, releaseContext, released, context) {
  const dependencyName = dependency.getName(),
        dependentName = dependencyName,  ///
        dependencies = releaseContext.getDependencies(),
        dependentReleased = released,  ///
        dependencyReleaseContextsInitialised = dependencies.everyDependency((dependency) => {  ///
          const releaseContextInitialised = initialiseReleaseContext(dependency, dependentName, dependentReleased, context);

          if (releaseContextInitialised) {
            return true;
          }
        });

  return dependencyReleaseContextsInitialised;
}