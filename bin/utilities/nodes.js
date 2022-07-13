"use strict";

const { nodeAsString } = require("../utilities/node");

function nodesAsString(nodes) {
  const string = nodes.reduce((string, node) => {
    const nodeString = nodeAsString(node);

    if (string === null) {
      string = nodeString;  ///
    } else {
      string = `${string},${nodeString}`;
    }

    return string;
  }, null);

  return string;
}
module.exports = {
  nodesAsString
};
