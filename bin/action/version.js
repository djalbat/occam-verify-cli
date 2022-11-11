"use strict";

const { VERIFY_CLI } = require("../constants"),
      { getPackageVersion } = require("../utilities/packageJSON");

function versionAction() {
  const packageVersion = getPackageVersion(),
        version = packageVersion; ///

  console.log(`${VERIFY_CLI} version ${version}`);

  process.exit();
}

module.exports = versionAction;
