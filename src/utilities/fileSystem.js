"use strict";

import { fileSystemUtilities as occamFileSystemUtilities } from "occam-file-system";
import { pathUtilities, fileSystemUtilities as necessaryFileSystemUtilities } from "necessary";

import { releaseContextFromJSON, releaseContextFromProject } from "../utilities/releaseContext";

const { loadProject } = occamFileSystemUtilities,
      { concatenatePaths } = pathUtilities,
      { readFile, isEntryFile, checkEntryExists } = necessaryFileSystemUtilities;

export function releaseContextFromDependency(dependency, context, callback) {
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

  let releaseContext = null;

  try {
    const entryFile = isEntryFile(entryPath);

    if (entryFile) {
      const filePath = entryPath, ///
            content = readFile(filePath),
            jsonString = content, ///
            json = JSON.parse(jsonString);

      releaseContext = releaseContextFromJSON(json, context);
    } else {
      const projectName = dependencyName, ///
        project = loadProject(projectName, projectsDirectoryPath);

      if (project !== null) {
        releaseContext = releaseContextFromProject(project, context);
      }
    }
  } catch (error) {
    callback(error, releaseContext);

    return;
  }

  const error = null;

  callback(error, releaseContext);
}

export default {
  releaseContextFromDependency
};
