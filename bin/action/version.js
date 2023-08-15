"use strict";

const { OCCAM_VERIFY_CLI } = require("../constants"),
      { getPackageVersion } = require("../utilities/packageJSON");

function versionAction() {
  const packageVersion = getPackageVersion(),
        version = packageVersion; ///

  console.log(`${OCCAM_VERIFY_CLI} version ${version}`);

  process.exit();
}

module.exports = versionAction;
