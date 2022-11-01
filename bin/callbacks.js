"use strict";

const { levels } = require("necessary"),
      { Callbacks } = require("../lib/index"),
      { loggingUtilities } = require("necessary");

const { HALT_MESSAGE, BEGIN_MESSAGE, COMPLETED_MESSAGE } = require("./messages");

const { log } = loggingUtilities,
      { TRACE_LEVEL } = levels;

function halt(filePath, leastLineIndex, greatestLineIndex) { logMessage(HALT_MESSAGE, filePath, leastLineIndex, greatestLineIndex); } ///

function begin(filePath, leastLineIndex, greatestLineIndex) { logMessage(BEGIN_MESSAGE, filePath, leastLineIndex, greatestLineIndex); } ///

function complete(filePath, leastLineIndex, greatestLineIndex) { logMessage(COMPLETED_MESSAGE, filePath, leastLineIndex, greatestLineIndex); }  ///

const callbacks = Callbacks.fromHaltBeginAndComplete(halt, begin, complete);

module.exports = callbacks;

function logMessage(message, filePath, leastLineIndex, greatestLineIndex) {
  if (leastLineIndex === greatestLineIndex) {
    const lineIndex = leastLineIndex; ///

    message = `'${filePath}' : [${lineIndex}] - ${message}`;
  } else {
    message = `'${filePath}' : [${leastLineIndex}-${greatestLineIndex}] - ${message}`;
  }

  const level = TRACE_LEVEL;

  log(message, level);

  return message;
}
