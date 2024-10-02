"use strict";

import { levels } from "necessary";

import { leastLineIndexFromNodeAndTokens, greatestLineIndexFromNodeAndTokens } from "./utilities/message";

const { TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL } = levels;

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

  trace(message, filePath) {
    const level = TRACE_LEVEL;

    this.write(level, message, filePath);
  }

  debug(message, filePath) {
    const level = DEBUG_LEVEL;

    this.write(level, message, filePath);
  }

  info(message, filePath) {
    const level = INFO_LEVEL;

    this.write(level, message, filePath);
  }

  warning(message, filePath) {
    const level = WARNING_LEVEL;

    this.write(level, message, filePath);
  }

  error(message, filePath) {
    const level = ERROR_LEVEL;

    this.write(level, message, filePath);
  }

  write(level, message, filePath) {
    const levels = [
            TRACE_LEVEL,
            DEBUG_LEVEL,
            INFO_LEVEL,
            WARNING_LEVEL,
            ERROR_LEVEL
          ],
          levelIndex = levels.indexOf(level),
          logLevelIndex = levels.indexOf(this.logLevel);

    if (levelIndex < logLevelIndex) {
      return;
    }

    message = formatMessage(level, message, filePath);  ///

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

function formatMessage(level, message, filePath = null) {
  const upperCaseLevel = level.toUpperCase();

  message = (filePath !== null) ?
            `${upperCaseLevel}: ${filePath} - ${message}`:
              `${upperCaseLevel}: ${message}`;

  return message;
}
