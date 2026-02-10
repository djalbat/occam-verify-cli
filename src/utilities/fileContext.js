"use strict";

import { filePathUtilities } from "occam-model";
import { FurtleFileContext } from "occam-furtle";

import NominalFileContext from "../context/file/nominal";

const { isFilePathFurtleFilePath, isFilePathNominalFilePath } = filePathUtilities;

export function FileContextFromFilePath(filePath) {
  let FileContext;

  const filePathFurtleFilePath = isFilePathFurtleFilePath(filePath),
    filePathNominalFilePath = isFilePathNominalFilePath(filePath);

  if (filePathFurtleFilePath) {
    FileContext = FurtleFileContext;  ///
  }

  if (filePathNominalFilePath) {
    FileContext = NominalFileContext; ///
  }

  return FileContext;
}
