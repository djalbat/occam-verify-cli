"use strict";

import { levels } from "necessary";
import {EMPTY_STRING} from "./constants";

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

  trace(message, filePath, lineIndex = null) {
    const level = TRACE_LEVEL;

    this.write(level, message, filePath, lineIndex);
  }

  debug(message, filePath, lineIndex = null) {
    const level = DEBUG_LEVEL;

    this.write(level, message, filePath, lineIndex);
  }

  info(message, filePath, lineIndex = null) {
    const level = INFO_LEVEL;

    this.write(level, message, filePath, lineIndex);
  }

  warning(message, filePath, lineIndex = null) {
    const level = WARNING_LEVEL;

    this.write(level, message, filePath, lineIndex);
  }

  error(message, filePath, lineIndex = null) {
    const level = ERROR_LEVEL;

    this.write(level, message, filePath, lineIndex);
  }

  write(level, message, filePath, lineIndex) {
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

    message = formatMessage(level, message, filePath, lineIndex);  ///

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

function formatMessage(level, message, filePath = null, lineIndex = null) {
  let formattedMessage = EMPTY_STRING;

  const upperCaseLevel = level.toUpperCase();

  formattedMessage += `${upperCaseLevel}:`;

  if (filePath !== null) {
    formattedMessage += ` ${filePath}`;
  }

  if (lineIndex !== null) {
    formattedMessage += ` [${lineIndex}]`;
  }

  formattedMessage += ` - ${message}`;

  message = formattedMessage; ///

  return message;
}
