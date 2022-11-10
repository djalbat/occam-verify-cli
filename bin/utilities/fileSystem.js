"use strict";

const { FileReleaseContext, DirectoryReleaseContext } = require("../../lib/index"),  ///
      { Entries, fileSystemUtilities : occamFileSystemUtilities } = require("occam-file-system"),
      { loggingUtilities, fileSystemUtilities : necessaryFileSystemUtilities } = require("necessary");

const callbacks = require("../callbacks");

const { log } = loggingUtilities,
      { loadRelease } = occamFileSystemUtilities,
      { readFile, isEntryFile } = necessaryFileSystemUtilities;

function releaseContextFromReleaseNameAndShortenedVersion(releaseName, shortenedVersion, context, callback) {
  const projectsDirectoryPath = process.cwd(), ///
        entryPath = `${projectsDirectoryPath}/${releaseName}`,
        entryFile = isEntryFile(entryPath);

  let releaseContext = entryFile ?
                         fileReleaseContextFromEntryPath(entryPath) :
                           directoryReleaseContextFromReleaseNameAndProjectsDirectoryPath(releaseName, projectsDirectoryPath);

  const releaseMatchesShortedVersion = checkReleaseMatchesShortenedVersion(releaseContext, shortenedVersion);

  if (!releaseMatchesShortedVersion) {
    releaseContext = null;
  }

  callback(releaseContext);
}

module.exports = {
  releaseContextFromReleaseNameAndShortenedVersion
};

function fileReleaseContextFromEntryPath(entryPath) {
  const filePath = entryPath, ///
        content = readFile(filePath),
        releaseJSONString = content,  ///
        releaseJSON = JSON.parse(releaseJSONString),
        { context } = releaseJSON,
        contextJSON = context;  ///

  let { entries } = releaseJSON;

  const json = entries; ///

  entries = Entries.fromJSON(json);

  const fileReleaseContext = FileReleaseContext.fromLogNameEntriesCallbacksAndContextJSON(log, name, entries, callbacks, contextJSON),
        releaseContext = fileReleaseContext;  ///

  return releaseContext;
}

function checkReleaseMatchesShortenedVersion(releaseContext, shortenedVersion) {
  const entries = releaseContext.getEntries(),
        releaseMatchesShortedVersion = entries.matchShortenedVersion(shortenedVersion);

  if (!releaseMatchesShortedVersion) {
    const version = releaseContext.getVersion(),
          releaseName = releaseContext.getReleaseName(),
          versionString = version.toString(),
          shortenedVersionString = shortenedVersion.toString();

    releaseContext.error(`The '${releaseName}' package's version of ${versionString} does not match the dependency's shortened version of ${shortenedVersionString}.`);
  }

  return releaseMatchesShortedVersion;
}

function directoryReleaseContextFromReleaseNameAndProjectsDirectoryPath(releaseName, projectsDirectoryPath) {
  let releaseContext = null;

  const topmostDirectoryName = releaseName, ///
        release = loadRelease(topmostDirectoryName, projectsDirectoryPath);

  if (release !== null) {
    const name = release.getName(),
          entries = release.getEntries(),
          directoryReleaseContext = DirectoryReleaseContext.fromLogNameEntriesAndCallbacks(log, name, entries, callbacks);

    releaseContext = directoryReleaseContext; ///
  }

  return releaseContext;
}
