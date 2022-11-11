"use strict";

const { FileReleaseContext, DirectoryReleaseContext } = require("../../lib/index"),  ///
      { fileSystemUtilities : necessaryFileSystemUtilities } = require("necessary"),
      { Entries, fileSystemUtilities : occamFileSystemUtilities } = require("occam-file-system");

const callbacks = require("../callbacks");

const { loadRelease } = occamFileSystemUtilities,
      { readFile, isEntryFile } = necessaryFileSystemUtilities;

function releaseContextFromReleaseNameAndShortenedVersion(dependency, context, callback) {
  const projectsDirectoryPath = process.cwd(), ///
        dependencyName = dependency.getName(),
        entryPath = `${projectsDirectoryPath}/${dependencyName}`,
        entryFile = isEntryFile(entryPath);

  let releaseContext;

  try {
    releaseContext = entryFile ?
                       fileReleaseContextFromDependencyAndProjectsDirectoryPath(dependency, projectsDirectoryPath, context) :
                         directoryReleaseContextFromDependencyAndProjectsDirectoryPath(dependency, projectsDirectoryPath, context);
  } catch (error) {
    const releaseContext = null;

    callback(error, releaseContext);
  }

  if (releaseContext !== null) {
    const releaseMatchesShortedVersion = checkReleaseMatchesDependency(dependency, releaseContext, context);

    if (!releaseMatchesShortedVersion) {
      releaseContext = null;
    }
  }

  const error = null;

  callback(error, releaseContext);
}

module.exports = {
  releaseContextFromReleaseNameAndShortenedVersion
};

function checkReleaseMatchesDependency(dependency, releaseContext, context) {
  const entries = releaseContext.getEntries(),
        shortenedVersion = dependency.getShortedVersion(),
        releaseMatchesShortedVersion = entries.matchShortenedVersion(shortenedVersion);

  if (!releaseMatchesShortedVersion) {
    const { log } = context,
          version = releaseContext.getVersion(),
          versionString = version.toString(),
          dependencyName = dependency.getName(),
          shortenedVersionString = shortenedVersion.toString();

    log.error(`The '${dependencyName}' dependency's version of ${versionString} does not match the required shortened version of ${shortenedVersionString}.`);
  }

  return releaseMatchesShortedVersion;
}

function fileReleaseContextFromDependencyAndProjectsDirectoryPath(dependency, projectsDirectoryPath, context) {
  let releaseContext;

  const { log } = context,
        dependencyName = dependency.getName(),
        filePath = `${projectsDirectoryPath}/${dependencyName}`,
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
        topmostDirectoryName = dependencyName, ///
        release = loadRelease(topmostDirectoryName, projectsDirectoryPath);

  if (release !== null) {
    const { log } = context,
          name = dependencyName, ///
          entries = release.getEntries(),
          directoryReleaseContext = DirectoryReleaseContext.fromLogNameEntriesAndCallbacks(log, name, entries, callbacks);

    releaseContext = directoryReleaseContext; ///
  }

  return releaseContext;
}
