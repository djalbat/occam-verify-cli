"use strict";

const { ReleaseContext } = require("../../lib/index"), ///
      { Entries, fileSystemUtilities : occamFileSystemUtilities } = require("occam-file-system"),
      { pathUtilities, fileSystemUtilities : necessaryFileSystemUtilities } = require("necessary");

const { loadProject } = occamFileSystemUtilities,
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

  let releaseContext = null;

  try {
    const { log } = context;

    if (entryFile) {
      const filePath = entryPath, ///
            content = readFile(filePath),
            jsonString = content, ///
            json = JSON.parse(jsonString);

      releaseContext = releaseContextFromLogAndJSON(log, json);
    } else {
      const projectName = dependencyName, ///
            project = loadProject(projectName, projectsDirectoryPath);

      if (project !== null) {
        releaseContext = releaseContextFromLogAndProject(log, project);
      }
    }
  } catch (error) {
    callback(error, releaseContext);

    return;
  }

  const error = null;

  callback(error, releaseContext);
}

module.exports = {
  releaseContextFromDependencyAndDependentNames
};

function releaseContextFromLogAndJSON(log, json) {
  const { name, context } = json;

  let { entries } = json;

  json = entries; ///

  entries = Entries.fromJSON(json);

  json = context; ///

  const releaseContext = ReleaseContext.fromLogJSONNameAndEntries(log, json, name, entries);

  return releaseContext;
}

function releaseContextFromLogAndProject(log, project) {
  const json = null,
        name = project.getName(),
        entries = project.getEntries(),
        releaseContext = ReleaseContext.fromLogJSONNameAndEntries(log, json, name, entries);

  return releaseContext;
}
