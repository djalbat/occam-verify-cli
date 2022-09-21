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
        type = types.find((type) => {
          const matches = type.matchTypeName(typeName);

          if (matches) {
            return true;
          }
        }) || null;

  return type;
}

function isTypePresentByTypeName(typeName) {
  const type = this.findTypeByTypeName(typeName),
        typePresent = (type !== null);

  return typePresent;
}

module.exports = {
  isLabelPresent,
  findTypeByTypeName,
  isTypePresentByTypeName
};
