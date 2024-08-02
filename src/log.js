"use strict";

import { levels } from "necessary";

import { leastLineIndexFromNodeAndTokens, greatestLineIndexFromNodeAndTokens } from "./utilities/lineIndex";

const { TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL, FATAL_LEVEL } = levels;

export default class Log {
  constructor(messages, logLevel, follow) {
    this.messages = messages;
    this.logLevel = logLevel;
    this.follow = follow;
  }

  getMessages() {
    return this.messages;
  }

  getLogLevel() {
    return this.logLevel;
  }

  getFollow() {
    return this.follow;
  }

  trace(message, node, tokens, filePath) {
    const level = TRACE_LEVEL;

    this.write(level, message, node, tokens, filePath);
  }

  debug(message, node, tokens, filePath) {
    const level = DEBUG_LEVEL;

    this.write(level, message, node, tokens, filePath);
  }

  info(message, node, tokens, filePath) {
    const level = INFO_LEVEL;

    this.write(level, message, node, tokens, filePath);
  }

  warning(message, node, tokens, filePath) {
    const level = WARNING_LEVEL;

    this.write(level, message, node, tokens, filePath);
  }

  error(message, node, tokens, filePath) {
    const level = ERROR_LEVEL;

    this.write(level, message, node, tokens, filePath);
  }

  fatal(message, node, tokens, filePath) {
    const level = FATAL_LEVEL;

    this.write(level, message, node, tokens, filePath);
  }

  write(level, message, node, tokens, filePath) {
    const levels = [
            TRACE_LEVEL,
            DEBUG_LEVEL,
            INFO_LEVEL,
            WARNING_LEVEL,
            ERROR_LEVEL,
            FATAL_LEVEL,
          ],
          levelIndex = levels.indexOf(level),
          logLevelIndex = levels.indexOf(this.logLevel);

    if (levelIndex < logLevelIndex) {
      return;
    }

    message = formatMessage(level, message, node, tokens, filePath);  ///

    this.follow ?
      console.log(message) :
        this.messages.push(message);
  }

  static fromNothing() {
    const messages = [],
          logLevel = TRACE_LEVEL,
          follow = false,
          log = new Log(messages, logLevel, follow);

    return log;
  }

  static fromFollowAndLogLevel(follow, logLevel) {
    const messages = follow ?
                       null :
                         [],
          log = new Log(messages, logLevel, follow);

    return log;
  }
}

function formatMessage(level, message, node = null, tokens = null, filePath = null) {
  const upperCaseLevel = level.toUpperCase();

  if ((node === null) || (tokens === null)) {
    message = `${upperCaseLevel}: ${filePath} - ${message}`;
  } else {
    const leastLineIndex = leastLineIndexFromNodeAndTokens(node, tokens),
          leastLineNumber = leastLineIndex, ///
          greatestLineIndex = greatestLineIndexFromNodeAndTokens(node, tokens),
          greatestLineNumber = greatestLineIndex; ///

    if (leastLineNumber === greatestLineNumber) {
      const lineNumber = leastLineNumber; ///

      message = `${upperCaseLevel}: ${filePath} (${lineNumber}) - ${message}`;
    } else {
      message = `${upperCaseLevel}: ${filePath} (${leastLineNumber}-${greatestLineNumber}) - ${message}`;
    }
  }

  return message;
}
