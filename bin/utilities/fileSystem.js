"use strict";

const { FileReleaseContext, DirectoryReleaseContext } = require("../../lib/index"), ///
      { Entries, fileSystemUtilities : occamFileSystemUtilities } = require("occam-file-system"),
      { pathUtilities, arrayUtilities, fileSystemUtilities : necessaryFileSystemUtilities } = require("necessary");

const callbacks = require("../callbacks");

const { last } = arrayUtilities,
      { loadProject } = occamFileSystemUtilities,
      { concatenatePaths } = pathUtilities,
      { readFile, isEntryFile, checkEntryExists } = necessaryFileSystemUtilities;

function releaseContextFromDependencyAndDependentNames(dependency, dependentNames, context, callback) {
  const projectsDirectoryPath = process.cwd(), ///
        dependencyName = dependency.getName(),
        entryPath = concatenatePaths(projectsDirectoryPath, dependencyName),
        entryExists = checkEntryExists(entryPath);

  if (!entryExists) {
    const error = null,
          releaseContext = null;

    callback(error, releaseContext);

    return;
  }

  const entryFile = isEntryFile(entryPath);

  let releaseContext;

  try {
    releaseContext = entryFile ?
                       fileReleaseContextFromDependencyAndProjectsDirectoryPath(dependency, projectsDirectoryPath, context) :
                         directoryReleaseContextFromDependencyAndProjectsDirectoryPath(dependency, projectsDirectoryPath, context);
  } catch (error) {
    const releaseContext = null;

    callback(error, releaseContext);

    return;
  }

  if (releaseContext !== null) {
    const releaseMatchesShortedVersion = checkReleaseMatchesDependency(dependency, dependentNames, releaseContext, context);

    if (!releaseMatchesShortedVersion) {
      releaseContext = null;
    }
  }

  const error = null;

  callback(error, releaseContext);
}

module.exports = {
  releaseContextFromDependencyAndDependentNames
};

function checkReleaseMatchesDependency(dependency, dependentNames, releaseContext, context) {
  let releaseMatchesShortedVersion = true;

  const entries = releaseContext.getEntries(),
        shortenedVersion = dependency.getShortedVersion();

  if (shortenedVersion !== null) {
    releaseMatchesShortedVersion = entries.matchShortenedVersion(shortenedVersion);

    if (!releaseMatchesShortedVersion) {
      const { log } = context,
            version = releaseContext.getVersion(),
            versionString = version.toString(),
            lastDependentName = last(dependentNames),
            dependentName = lastDependentName,  ///
            dependencyName = dependency.getName(),
            shortenedVersionString = shortenedVersion.toString();

      log.error(`Version mismatch: '${dependentName}' requires '${dependencyName}' to be version ${shortenedVersionString}.0 or higher but version ${versionString} has been supplied.`);
    }
  }

  return releaseMatchesShortedVersion;
}

function fileReleaseContextFromDependencyAndProjectsDirectoryPath(dependency, projectsDirectoryPath, context) {
  let releaseContext;

  const { log } = context,
        dependencyName = dependency.getName(),
        filePath = concatenatePaths(projectsDirectoryPath, dependencyName),
        content = readFile(filePath),
        releaseJSONString = content,  ///
        releaseJSON = JSON.parse(releaseJSONString);

  ({ context } = releaseJSON);

  const contextJSON = context;  ///

  let { entries } = releaseJSON;

  const json = entries; ///

  entries = Entries.fromJSON(json);

  const name = dependencyName, ///
        fileReleaseContext = FileReleaseContext.fromLogNameEntriesCallbacksAndContextJSON(log, name, entries, callbacks, contextJSON);

  releaseContext = fileReleaseContext;  ///

  return releaseContext;
}

function directoryReleaseContextFromDependencyAndProjectsDirectoryPath(dependency, projectsDirectoryPath, context) {
  let releaseContext = null;

  const dependencyName = dependency.getName(),
        projectName = dependencyName, ///
        project = loadProject(projectName, projectsDirectoryPath);

  if (project !== null) {
    const { log } = context,
          name = project.getName(),
          entries = project.getEntries(),
          directoryReleaseContext = DirectoryReleaseContext.fromLogNameEntriesAndCallbacks(log, name, entries, callbacks);

    releaseContext = directoryReleaseContext; ///
  }

  return releaseContext;
}
