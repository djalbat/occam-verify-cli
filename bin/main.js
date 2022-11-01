"use strict";

const { verifyRelease } = require("../lib/index"),
      { arrayUtilities } = require("necessary"),
      { fileSystemUtilities } = require("occam-file-system")

const callbacks = require("./callbacks");

const { log } = require("./utilities/logging"),
      { PERIOD } = require("./constants"),
      { createReleaseContext } = require("./utilities/release");

const { first } = arrayUtilities,
      { loadRelease } = fileSystemUtilities;

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

function createRelease(name, callback) {
  const topmostDirectoryName = name, ///
        projectsDirectoryPath = PERIOD, ///
        release = loadRelease(topmostDirectoryName, projectsDirectoryPath);

  callback(release);
}
