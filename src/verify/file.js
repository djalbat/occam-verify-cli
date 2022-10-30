"use strict";

import FileContext from "../context/file";

export default function verifyFile(filePath, releaseContext = this) {
  let fileVerified;

  releaseContext.debug(`Verifying the '${filePath}' file...`);

  const fileContext = FileContext.fromReleaseContextAndFilePath(releaseContext, filePath),
        topLevelDeclarationsVerified = fileContext.verifyTopLevelDeclarations()

  fileVerified = topLevelDeclarationsVerified;  ///

  if (topLevelDeclarationsVerified) {
    releaseContext.addFileContext(fileContext);

    releaseContext.info(`Verified the '${filePath}' file.`);
  }

  return fileVerified;
}
