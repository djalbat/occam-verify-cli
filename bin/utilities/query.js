"use strict";

const { Query } = require("occam-dom");

const uniqueChildNodeQuery = nodeQuery("/*/*|@*!");

function nodeQuery(expression) {
  const query = Query.fromExpression(expression);

  return function(node) {
    const nodes = query.execute(node);

    node = nodes.shift(); ///

    return node;
  };
}

function nodesQuery(expression) {
  const query = Query.fromExpression(expression);

  return function(node) {
    const nodes = query.execute(node);

    return nodes;
  };
}

function parentNodeQuery(parentNode, query) {
  let node = query(parentNode);

  if (node === undefined) {
    node = parentNode;  ///

    const uniqueChildNode = uniqueChildNodeQuery(node);

    parentNode = uniqueChildNode; ///

    if (parentNode !== undefined) {
      parentNode = parentNodeQuery(parentNode, query);
    }
  }

  return parentNode;
}

module.exports = {
  nodeQuery,
  nodesQuery,
  parentNodeQuery
};
