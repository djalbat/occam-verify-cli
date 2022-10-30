"use strict";

import FileContext from "../context/file";
import verifyTopLevelDeclarations from "../verify/topLevelDeclarations";

export default function verifyFile(filePath, releaseContext) {
  let fileVerified;

  releaseContext.debug(`Verifying the '${filePath}' file...`);

  const fileContext = FileContext.fromReleaseContextAndFilePath(releaseContext, filePath),
        context = fileContext,  ///
        topLevelDeclarationsVerified = verifyTopLevelDeclarations(fileContext, context);

  fileVerified = topLevelDeclarationsVerified;  ///

  if (topLevelDeclarationsVerified) {
    releaseContext.addFileContext(fileContext);

    releaseContext.info(`Verified the '${filePath}' file.`);
  }

  return fileVerified;
}
