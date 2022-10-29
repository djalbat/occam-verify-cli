"use strict";

const { verifyRelease } = require("../lib/index"),
      { arrayUtilities } = require("necessary");

const { createReleaseContext } = require("./utilities/release");

const { first } = arrayUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { releaseName = firstCommand } = options, ///
        releaseContextMap = {};

  createReleaseContext(releaseName, releaseContextMap);

  const releaseContext = releaseContextMap[releaseName];

  if (releaseContext !== null) {
    verifyRelease(releaseName, releaseContextMap);
  }
}

module.exports = main;
