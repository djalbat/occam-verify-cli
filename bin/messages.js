"use strict";

const { levels } = require("necessary");

const { TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL, FATAL_LEVEL } = levels;

class Messages {
  constructor(entries, logLevel) {
    this.entries = entries;
    this.logLevel = logLevel;
  }

  getEntries() {
    return this.entries;
  }

  getLogLevel() {
    return this.logLevel;
  }

  addMessage(level, message) {
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

    const entry = Entry.fromLevelAndMessage(level, message);

    this.entries.push(entry);
  }

  toConsole() {
    this.entries.forEach((entry) => {
      entry.toConsole();
    });
  }

  static fromLogLevel(logLevel) {
    const entries = [],
          messages = new Messages(entries, logLevel);

    return messages;
  }
}

module.exports = Messages;

class Entry {
  constructor(level, message) {
    this.level = level;
    this.message = message;
  }

  getLevel() {
    return this.level;
  }

  getMessage() {
    return this.message;
  }

  toConsole() {
    const upperCaseLevel = this.level.toUpperCase(),
          message = `${upperCaseLevel}: ${this.message}`;

    console.log(message);
  }

  static fromLevelAndMessage(level, message) {
    const entry = new Entry(level, message);

    return entry;
  }
}
