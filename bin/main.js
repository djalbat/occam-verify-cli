"use strict";

const { arrayUtilities } = require("necessary"),
      { fileSystemUtilities } = require("occam-file-system"),
      { verifyRelease, releaseContextUtilities } = require("../lib/index");

const { log } = require("./utilities/logging"),
      { PERIOD } = require("./constants"),
      { callbacksFromLog } = require("./utilities/callbacks");

const { first } = arrayUtilities,
      { loadRelease } = fileSystemUtilities,
      { createReleaseContext } = releaseContextUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { releaseName = firstCommand } = options, ///
        releaseContextMap = {},
        shortenedVersion = null,
        dependentNames = [],
        callbacks = callbacksFromLog(log),
        context = {
          log,
          callbacks,
          createRelease,
          releaseContextMap
        };

  createReleaseContext(releaseName, dependentNames, shortenedVersion, context, (error) => {
    if (error) {
      ///

      return;
    }

    verifyRelease(releaseName, releaseContextMap);
  });
}

module.exports = main;

function createRelease(name, callback, context) {
  const topmostDirectoryName = name, ///
        projectsDirectoryPath = PERIOD, ///
        release = loadRelease(topmostDirectoryName, projectsDirectoryPath);

  callback(release);
}
