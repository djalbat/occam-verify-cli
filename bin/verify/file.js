'use strict';

const lexers = require('occam-lexers'),
      parsers = require('occam-parsers'),
      necessary = require('necessary');

const verifyTopmostNode = require('../verify/node/topmost');

const { fileSystemUtilities } = necessary,
      { FlorenceParser } = parsers,
      { FlorenceLexer } = lexers,
      { readFile } = fileSystemUtilities;

const florenceLexer = FlorenceLexer.fromNothing(),
      florenceParser = FlorenceParser.fromNothing();

function verifyFile(fileName, context) {
  const fileContent = readFile(fileName),
        content = fileContent,  ///
        tokens = florenceLexer.tokenise(content),
        node = florenceParser.parse(tokens),
        topmostNode = node; ///

  verifyTopmostNode(topmostNode, context);
}

module.exports = verifyFile;
