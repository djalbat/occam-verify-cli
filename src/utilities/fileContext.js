"use strict";

import { filePathUtilities } from "occam-model";
import { FurtleFileContext } from "occam-furtle";
import { NominalFileContext } from "occam-nominal";

const { isFilePathFurtleFilePath, isFilePathNominalFilePath } = filePathUtilities;

export function FileContextFromFilePath(filePath) {
  let FileContext = null;

  const filePathFurtleFilePath = isFilePathFurtleFilePath(filePath),
        filePathNominalFilePath = isFilePathNominalFilePath(filePath);

  if (false) {
    ///
  } else if (filePathFurtleFilePath) {
    FileContext = FurtleFileContext;  ///
  } else if (filePathNominalFilePath) {
    FileContext = NominalFileContext; ///
  }

  return FileContext;
}

export default {
  FileContextFromFilePath
};
