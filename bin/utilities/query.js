"use strict";

const { Query } = require("occam-dom");

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

module.exports = {
  nodeQuery,
  nodesQuery
};
