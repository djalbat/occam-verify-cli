"use strict";

const { Query } = require("occam-dom");

function nodeQuery(expression) {
  const query = Query.fromExpression(expression);

  return function(node) {
    if (node !== null) {
      const nodes = query.execute(node);

      node = nodes.shift() || null; ///
    }

    return node;
  };
}

function nodesQuery(expression) {
  const query = Query.fromExpression(expression);

  return function(node) {
    let nodes = null;

    if (node !== null) {
      nodes = query.execute(node);
    }

    return nodes;
  };
}

module.exports = {
  nodeQuery,
  nodesQuery
};
