"use strict";

const { FileReleaseContext, DirectoryReleaseContext } = require("../../lib/index"),  ///
      { fileSystemUtilities : necessaryFileSystemUtilities } = require("necessary"),
      { Entries, fileSystemUtilities : occamFileSystemUtilities } = require("occam-file-system");

const callbacks = require("../callbacks");

const { loadRelease } = occamFileSystemUtilities,
      { readFile, isEntryFile } = necessaryFileSystemUtilities;

function releaseContextFromReleaseNameAndShortenedVersion(releaseName, shortenedVersion, context, callback) {
  const projectsDirectoryPath = process.cwd(), ///
        entryPath = `${projectsDirectoryPath}/${releaseName}`,
        entryFile = isEntryFile(entryPath);

  let releaseContext;

  try {
    releaseContext = entryFile ?
                       fileReleaseContextFromEntryPath(entryPath, context) :
                         directoryReleaseContextFromReleaseNameAndProjectsDirectoryPath(releaseName, projectsDirectoryPath, context);
  } catch (error) {
    const releaseContext = null;

    callback(error, releaseContext);
  }

  if (releaseContext !== null) {
    const releaseMatchesShortedVersion = checkReleaseMatchesShortenedVersion(releaseContext, shortenedVersion, context);

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

function fileReleaseContextFromEntryPath(entryPath, context) {
  let releaseContext;

  const { log } = context,
        filePath = entryPath, ///
        content = readFile(filePath),
        releaseJSONString = content,  ///
        releaseJSON = JSON.parse(releaseJSONString);

  ({ context } = releaseJSON);

  const contextJSON = context;  ///

  let { entries } = releaseJSON;

  const json = entries; ///

  entries = Entries.fromJSON(json);

  const fileReleaseContext = FileReleaseContext.fromLogNameEntriesCallbacksAndContextJSON(log, name, entries, callbacks, contextJSON);

  releaseContext = fileReleaseContext;  ///

  return releaseContext;
}

function checkReleaseMatchesShortenedVersion(releaseContext, shortenedVersion, context) {
  const entries = releaseContext.getEntries(),
        releaseMatchesShortedVersion = entries.matchShortenedVersion(shortenedVersion);

  if (!releaseMatchesShortedVersion) {
    const { log } = context,
          version = releaseContext.getVersion(),
          releaseName = releaseContext.getReleaseName(),
          versionString = version.toString(),
          shortenedVersionString = shortenedVersion.toString();

    log.error(`The '${releaseName}' package's version of ${versionString} does not match the dependency's shortened version of ${shortenedVersionString}.`);
  }

  return releaseMatchesShortedVersion;
}

function directoryReleaseContextFromReleaseNameAndProjectsDirectoryPath(releaseName, projectsDirectoryPath, context) {
  let releaseContext = null;

  const topmostDirectoryName = releaseName, ///
        release = loadRelease(topmostDirectoryName, projectsDirectoryPath);

  if (release !== null) {
    const { log } = context,
          name = releaseName, ///
          entries = release.getEntries(),
          directoryReleaseContext = DirectoryReleaseContext.fromLogNameEntriesAndCallbacks(log, name, entries, callbacks);

    releaseContext = directoryReleaseContext; ///
  }

  return releaseContext;
}
