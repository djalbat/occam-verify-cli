"use strict";

const { arrayUtilities } = require("necessary"),
      { fileSystemUtilities } = require("occam-file-system"),
      { verifyRelease, releaseContextUtilities } = require("../lib/index");

const callbacks = require("./callbacks");

const { log } = require("./utilities/logging"),
      { PERIOD } = require("./constants");

const { first } = arrayUtilities,
      { loadRelease } = fileSystemUtilities,
      { createReleaseContext } = releaseContextUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { name = firstCommand } = options, ///
        releaseContextMap = {},
        shortenedVersion = null,
        dependentNames = [],
        connection = null,  ///
        context = {
          log,
          callbacks,
          createRelease,
          releaseContextMap
        };

  createReleaseContext(connection, name, dependentNames, shortenedVersion, context, (error) => {
    if (error) {
      ///

      return;
    }

    verifyRelease(name, releaseContextMap);
  });
}

module.exports = main;

function createRelease(name, callback, context) {
  const topmostDirectoryName = name, ///
        projectsDirectoryPath = PERIOD, ///
        release = loadRelease(topmostDirectoryName, projectsDirectoryPath);

  callback(release);
}
