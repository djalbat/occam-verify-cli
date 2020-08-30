"use strict";

const dom = require("occam-dom");

const { Query } = dom;

const verifyAxiom = require("../verify/axiom");

const axiomNodesQuery = Query.fromExpression("/document/axiom", 2);

function verifyAxioms(fileContext) {
  let axiomsVerified;

  const node = fileContext.getNode(),
        axiomNodes = axiomNodesQuery.execute(node);

  axiomsVerified = axiomNodes.every((axiomNode) => verifyAxiom(axiomNode, fileContext));

  return axiomsVerified;
}

module.exports = verifyAxioms;
