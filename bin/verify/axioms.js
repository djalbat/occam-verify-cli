"use strict";

const verifyAxiom = require("../verify/axiom");

const { nodesQuery } = require("../utilities/query");

const axiomNodesQuery = nodesQuery("/*/axiom");

function verifyAxioms(fileContext) {
  let axiomsVerified;

  const node = fileContext.getNode(),
        axiomNodes = axiomNodesQuery(node);

  axiomsVerified = axiomNodes.every((axiomNode) => verifyAxiom(axiomNode, fileContext));

  return axiomsVerified;
}

module.exports = verifyAxioms;
