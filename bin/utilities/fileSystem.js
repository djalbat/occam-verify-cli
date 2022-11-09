"use strict";

const { DirectoryReleaseContext } = require("../../lib/index"),  ///
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
                           releaseContextFromFile(name, projectsDirectoryPath) :
                             releaseContextFromDirectory(name, projectsDirectoryPath);

  callback(releaseContext);
}

module.exports = {
  releaseContextFromReleaseName
};

function releaseContextFromFile(name, projectsDirectoryPath) {
  let releaseContext = null;

  const filePath = `${projectsDirectoryPath}/${name}`,
        content = readFile(filePath),
        releaseJSONString = content,  ///
        releaseJSON = JSON.parse(releaseJSONString);

  let { entries } = releaseJSON;

  const json = entries; ///

  entries = Entries.fromJSON(json);


  return releaseContext;
}

function releaseContextFromDirectory(name, projectsDirectoryPath) {
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
