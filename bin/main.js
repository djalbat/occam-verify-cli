"use strict";

const { verifyRelease } = require("../lib/index"),
      { arrayUtilities } = require("necessary");

const { createReleaseContext } = require("./utilities/release");

const { first } = arrayUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { name = firstCommand } = options, ///
        shortenedVersion = null,
        releaseContextMap = {},
        releaseContext = createReleaseContext(name, shortenedVersion, releaseContextMap);

  if (releaseContext !== null) {
    verifyRelease(name, releaseContextMap);
  }
}

module.exports = main;
