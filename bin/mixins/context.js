"use strict";

const queries = require("../miscellaneous/queries");

const { nameTerminalNodeQuery } = queries;

function findTypeByName(name) {
  const types = this.getTypes(),
        type = types.find((type) => type.matchName(name));

  return type;
}

function findTypeByTypeName(typeName) {
  const types = this.getTypes(),
        type = types.find((type) => type.matchTypeName(typeName));

  return type;
}

function findTypeByConstructorNameNode(constructorNameNode) {
  const constructorNameTerminalNode = nameTerminalNodeQuery(constructorNameNode),
        constructorNameTerminalNodeContent = constructorNameTerminalNode.getContent(),
        name = constructorNameTerminalNodeContent, ///
        type = this.findTypeByName(name);

  return type;
}

function isLabelPresent(label) {
  const axioms = this.getAxioms(),
        labelPresent = axioms.some((axiom) => {
          const labels = axiom.getLabels(),
                labelsIncludesLabel = labels.includes(label);

          if (labelsIncludesLabel) {
            return true;
          }
        });

  return labelPresent;
}

function isTypePresentByName(name) {
  const type = this.findTypeByName(name),
        typePresent = (type !== undefined);

  return typePresent;
}

function isTypePresentByTypeName(typeName) {
  const type = this.findTypeByTypeName(typeName),
        typePresent = (type !== undefined);

  return typePresent;
}

module.exports = {
  findTypeByName,
  findTypeByTypeName,
  findTypeByConstructorNameNode,
  isLabelPresent,
  isTypePresentByName,
  isTypePresentByTypeName
};
