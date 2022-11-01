"use strict";

const { levels } = require("necessary"),
      { Callbacks } = require("../../lib/index");

const { HALT_MESSAGE, BEGIN_MESSAGE, COMPLETED_MESSAGE } = require("../messages");

const { TRACE_LEVEL } = levels;

function callbacksFromLog(log) {
  const level = TRACE_LEVEL;

  function halt(filePath, leastLineIndex, greatestLineIndex) {
    let message = HALT_MESSAGE;

    message = messageFromMessageFilePathLeastLineIndexAndGreatestLineIndex(message, filePath, leastLineIndex, greatestLineIndex);

    log(level, message);
  }

  function begin(filePath, leastLineIndex, greatestLineIndex) {
    let message = BEGIN_MESSAGE;

    message = messageFromMessageFilePathLeastLineIndexAndGreatestLineIndex(message, filePath, leastLineIndex, greatestLineIndex);

    log(level, message);
  }

  function complete(filePath, leastLineIndex, greatestLineIndex) {
    let message = COMPLETED_MESSAGE;

    message = messageFromMessageFilePathLeastLineIndexAndGreatestLineIndex(message, filePath, leastLineIndex, greatestLineIndex);

    log(level, message);
  }

  const callbacks = Callbacks.fromHaltBeginAndComplete(halt, begin, complete);

  return callbacks;
}


module.exports = {
  callbacksFromLog
};

function messageFromMessageFilePathLeastLineIndexAndGreatestLineIndex(message, filePath, leastLineIndex, greatestLineIndex) {
  if (leastLineIndex === greatestLineIndex) {
    const lineIndex = leastLineIndex; ///

    message = `'${filePath}' : [${lineIndex}] - ${message}`;
  } else {
    message = `'${filePath}' : [${leastLineIndex}-${greatestLineIndex}] - ${message}`;
  }

  return message;
}
