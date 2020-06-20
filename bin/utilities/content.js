"use strict";

function trimDoubleQuotes(content) { return content.replace(/(^"|"$)/g, ""); } ///

module.exports = {
  trimDoubleQuotes
};
