"use strict";

import verifyFile from "../../verify/file";
import verifyFiles from "../../verify/files";

const releaseContextMixins = {
  verifyFile,
  verifyFiles
};

export default releaseContextMixins;
