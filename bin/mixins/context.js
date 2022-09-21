"use strict";

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

function findTypeByTypeName(typeName) {
  const types = this.getTypes(),
        type = types.find((type) => type.matchTypeName(typeName));

  return type;
}

function isTypePresentByTypeName(typeName) {
  const type = this.findTypeByTypeName(typeName),
        typePresent = (type !== undefined);

  return typePresent;
}

module.exports = {
  isLabelPresent,
  findTypeByTypeName,
  isTypePresentByTypeName
};
