"use strict";

const { Callbacks } = require("../lib/index");

const { HALT_MESSAGE, BEGIN_MESSAGE, COMPLETED_MESSAGE } = require("./messages");

function halt(filePath, leastLineIndex, greatestLineIndex) { message(HALT_MESSAGE, filePath, leastLineIndex, greatestLineIndex); }  ///

function begin(filePath, leastLineIndex, greatestLineIndex) { message(BEGIN_MESSAGE, filePath, leastLineIndex, greatestLineIndex); }  ///

function complete(filePath, leastLineIndex, greatestLineIndex) { message(COMPLETED_MESSAGE, filePath, leastLineIndex, greatestLineIndex); }  ///

const callbacks = Callbacks.fromHaltBeginAndComplete(halt, begin, complete);

module.exports = callbacks;

function message(message, filePath, leastLineIndex, greatestLineIndex) {
  if (leastLineIndex === greatestLineIndex) {
    const lineIndex = leastLineIndex; ///

    message = `'${filePath}' : [${lineIndex}] - ${message}`;
  } else {
    message = `'${filePath}' : [${leastLineIndex}-${greatestLineIndex}] - ${message}`;
  }

  console.log(message);
}
