"use strict";

import { levels } from "necessary";

import { leastLineIndexFromNodeAndTokens, greatestLineIndexFromNodeAndTokens } from "./utilities/tokens";

const { TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL, FATAL_LEVEL } = levels;

export default class Log {
  constructor(messages, logLevel, following) {
    this.messages = messages;
    this.logLevel = logLevel;
    this.following = following;
  }

  getMessages() {
    return this.messages;
  }

  getLogLevel() {
    return this.logLevel;
  }

  isFollowing() {
    return this.following;
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

    this.messages.push(message);

    if (this.following) {
      console.log(message);
    }
  }

  static fromLogLevel(logLevel) {
    const messages = [],
          following = true,
          log = new Log(messages, logLevel, following);

    return log;
  }
}

function formatMessage(level, message, node, tokens, filePath) {
  const upperCaseLevel = level.toUpperCase();

  if (node === null) {
    message = `${upperCaseLevel}: ${message}`;
  } else {
    const leastLineIndex = leastLineIndexFromNodeAndTokens(node, tokens),
          greatestLineIndex = greatestLineIndexFromNodeAndTokens(node, tokens);

    if (leastLineIndex === greatestLineIndex) {
      const lineIndex = leastLineIndex; ///

      message = `${upperCaseLevel}: ${filePath} (${lineIndex}) - ${message}`;
    } else {
      message = `${upperCaseLevel}: ${filePath} (${leastLineIndex}-${greatestLineIndex}) - ${message}`;
    }
  }

  return message;
}
