"use strict";

const { verifyRelease } = require("../lib/index"),
      { arrayUtilities } = require("necessary");

const loadReleaseContexts = require("./loadReleaseContexts");

const { first } = arrayUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { releaseName = firstCommand } = options; ///

  const releaseContextMap = loadReleaseContexts(releaseName);

  verifyRelease(releaseName, releaseContextMap);
}

module.exports = main;
