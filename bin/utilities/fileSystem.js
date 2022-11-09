"use strict";

const { FileReleaseContext, DirectoryReleaseContext } = require("../../lib/index"),  ///
      { Entries, fileSystemUtilities : occamFileSystemUtilities } = require("occam-file-system"),
      { loggingUtilities, fileSystemUtilities : necessaryFileSystemUtilities } = require("necessary");

const callbacks = require("../callbacks");

const { log } = loggingUtilities,
      { loadRelease } = occamFileSystemUtilities,
      { readFile, isEntryFile } = necessaryFileSystemUtilities;

function releaseContextFromReleaseName(name, context, callback) {
  const projectsDirectoryPath = process.cwd(), ///
        entryPath = `${projectsDirectoryPath}/${name}`,
        entryFile = isEntryFile(entryPath),
        releaseContext = entryFile ?
                           fileReleaseContextFromNameAndProjectsDirectoryPath(name, projectsDirectoryPath) :
                             directoryReleaseContextFromNameAndProjectsDirectoryPath(name, projectsDirectoryPath);

  callback(releaseContext);
}

module.exports = {
  releaseContextFromReleaseName
};

function fileReleaseContextFromNameAndProjectsDirectoryPath(name, projectsDirectoryPath) {
  const filePath = `${projectsDirectoryPath}/${name}`,
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

function directoryReleaseContextFromNameAndProjectsDirectoryPath(name, projectsDirectoryPath) {
  let releaseContext = null;

  const topmostDirectoryName = name, ///
        release = loadRelease(topmostDirectoryName, projectsDirectoryPath);

  if (release !== null) {
    const name = release.getName(),
          entries = release.getEntries(),
          directoryReleaseContext = DirectoryReleaseContext.fromLogNameEntriesAndCallbacks(log, name, entries, callbacks);

    releaseContext = directoryReleaseContext; ///
  }

  return releaseContext;
}
