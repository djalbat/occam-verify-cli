"use strict";

const { packageUtilities } = require("necessary");

const { OCCAM_VERIFY_CLI } = require("../constants");

const { getVersion } = packageUtilities;

function versionAction() {
  const version = getVersion(); ///

  console.log(`${OCCAM_VERIFY_CLI} version ${version}`);
}

module.exports = versionAction;
