"use strict";

import { releaseContextUtilities } from "occam-languages";
import { fileSystemUtilities as occamFileSystemUtilities } from "occam-file-system";
import { pathUtilities, fileSystemUtilities as necessaryFileSystemUtilities } from "necessary";

const { loadProject } = occamFileSystemUtilities,
      { concatenatePaths } = pathUtilities,
      { readFile, isEntryFile, checkEntryExists } = necessaryFileSystemUtilities,
      { releaseContextFromJSON, releaseContextFromProject } = releaseContextUtilities;

export async function releaseContextFromDependency(dependency, context) {
  let releaseContext = null;

  const projectsDirectoryPath = process.cwd(), ///
        dependencyName = dependency.getName(),
        entryPath = concatenatePaths(projectsDirectoryPath, dependencyName),
        entryExists = checkEntryExists(entryPath);

  if (entryExists) {
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

      releaseContext = releaseContextFromProject(project, context);
    }
  }

  return releaseContext;
}

export default {
  releaseContextFromDependency
};
