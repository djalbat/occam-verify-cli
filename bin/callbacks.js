"use strict";

const { Callbacks } = require("../lib/index"),
      { loggingUtilities } = require("necessary");

const { log } = loggingUtilities,
      { trace } = log,
      { HALT_MESSAGE, BEGIN_MESSAGE, COMPLETED_MESSAGE } = Callbacks;

function halt(filePath, leastLineIndex, greatestLineIndex) {
  let message = HALT_MESSAGE;

  message = formatMessage(message, filePath, leastLineIndex, greatestLineIndex); ///

  trace(message);
}

function begin(filePath, leastLineIndex, greatestLineIndex) {
  let message = BEGIN_MESSAGE;

  message = formatMessage(message, filePath, leastLineIndex, greatestLineIndex); ///

  trace(message);
}

function complete(filePath, leastLineIndex, greatestLineIndex) {
  let message = COMPLETED_MESSAGE;

  message = formatMessage(message, filePath, leastLineIndex, greatestLineIndex); ///

  trace(message);
}

const callbacks = Callbacks.fromHaltBeginAndComplete(halt, begin, complete);

module.exports = callbacks;

function formatMessage(message, filePath, leastLineIndex, greatestLineIndex) {
  if (leastLineIndex === greatestLineIndex) {
    const lineIndex = leastLineIndex; ///

    message = `'${filePath}' : [${lineIndex}] - ${message}`;
  } else {
    message = `'${filePath}' : [${leastLineIndex}-${greatestLineIndex}] - ${message}`;
  }

  return message;
}
