"use strict";

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
  isLabelPresent,
  isTypePresentByName,
  isTypePresentByTypeName
};
