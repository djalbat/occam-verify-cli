"use strict";

import verifyType from "../../verify/type";
import verifyRule from "../../verify/rule";
import verifyAxiom from "../../verify/axiom";
import verifyLabel from "../../verify/label";
import verifyLabels from "../../verify/labels";
import verifyVariable from "../../verify/variable";
import verifyTypeDeclaration from "../../verify/declaration/type";
import verifyTermAsConstructor from "../../verify/termAsConstructor";
import verifyTopLevelDeclaration from "../../verify/declaration/topLevel";
import verifyVariableDeclaration from "../../verify/declaration/variable";
import verifyTopLevelDeclarations from "../../verify/topLevelDeclarations";
import verifyStatementAsCombinator from "../../verify/statementAsCombinator";
import verifyCombinatorDeclaration from "../../verify/declaration/combinator";
import verifyConstructorDeclaration from "../../verify/declaration/constructor";

const fileContextMixins = {
  verifyType,
  verifyRule,
  verifyAxiom,
  verifyLabel,
  verifyLabels,
  verifyVariable,
  verifyTypeDeclaration,
  verifyTermAsConstructor,
  verifyTopLevelDeclaration,
  verifyVariableDeclaration,
  verifyTopLevelDeclarations,
  verifyStatementAsCombinator,
  verifyCombinatorDeclaration,
  verifyConstructorDeclaration
};

export default fileContextMixins;
