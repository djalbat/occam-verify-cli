"use strict";

import { BREAKING_VERSION_CHANGE, ADDITIVE_VERSION_CHANGE, COSMETIC_VERSION_CHANGE } from "../versionChanges";

function updateVersion(version, versionChange) {
  switch (versionChange) {
    case BREAKING_VERSION_CHANGE:
      version.bumpMajorNumber();
      version.resetMinorNumber();
      version.resetPatchNumber();

      break;

    case ADDITIVE_VERSION_CHANGE:
      version.bumpMinorNumber();
      version.resetPatchNumber();

      break;

    case COSMETIC_VERSION_CHANGE:
      version.bumpPatchNumber();

      break;
  }
}

export default {
  updateVersion
};

