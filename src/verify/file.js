"use strict";

import FileContext from "../context/file";
import topLevelVerifier from "../verifier/topLevel";

export default function verifyFile(filePath, releaseContext) {
  let fileVerified = false;

  releaseContext.debug(`Verifying the '${filePath}' file...`);

  const fileContext = FileContext.fromFilePathAndReleaseContext(filePath, releaseContext),
        node = fileContext.getNode();

  if (node !== null) {
    const verified = topLevelVerifier.verify(node, fileContext);

    if (verified) {
      releaseContext.addFileContext(fileContext);

      fileVerified = true;
    }
  }

  if (fileVerified) {
    releaseContext.info(`...verified the '${filePath}' file.`);
  }

  return fileVerified;
}
