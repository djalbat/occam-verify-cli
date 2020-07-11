"use strict";

const Error = require("../error"),
      queries = require("../miscellaneous/queries"),
      FileContext = require("../context/file"),
      PackageContext = require("../context/package"),
      lineIndexUtilities = require("../utilities/lineIndex"),
      verifyAxiomOrDeclaration = require("../verify/axiomOrDeclaration");

const { lineIndexFromNodeAndTokens } = lineIndexUtilities,
      { axiomOrDeclarationNodesQuery } = queries;

function verifyFile(filePath, packageContext = PackageContext.fromNothing()) {
  const fileContext = FileContext.fromPackageContextAndFilePath(packageContext, filePath);

  try {
    const node = fileContext.getNode(),
          axiomOrDeclarationNodes = axiomOrDeclarationNodesQuery(node);

    axiomOrDeclarationNodes.forEach((axiomOrDeclarationNode) => verifyAxiomOrDeclaration(axiomOrDeclarationNode, fileContext));
  } catch (error) {
    if (!(error instanceof Error)) {
      throw error;
    } else {
      const tokens = fileContext.getTokens(),
            errorNode = error.getNode(),
            errorMessage = error.getMessage(),
            lineIndex = lineIndexFromNodeAndTokens(errorNode, tokens),
            lineNumber = lineIndex + 1;

      console.log(`${filePath}:${lineNumber}: ${errorMessage}`);

      process.exit();
    }
  }

  return fileContext;
}

module.exports = verifyFile;
