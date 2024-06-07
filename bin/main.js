"use strict";

const { Log } = require("../lib/index"); ///

const helpAction = require("./action/help"),
      verifyAction = require("./action/verify"),
      versionAction = require("./action/version");

const { NO_COMMAND_GIVEN_MESSAGE } = require("./messages"),
      { HELP_COMMAND, VERIFY_COMMAND, VERSION_COMMAND } = require("./commands"),
      { DEFAULT_TAIL, DEFAULT_FOLLOW, DEFAULT_LOG_LEVEL } = require("./defaults");

function main(command, argument, options) {
  const { tail = DEFAULT_TAIL,
          follow = DEFAULT_FOLLOW,
          logLevel = DEFAULT_LOG_LEVEL } = options;

  const log = Log.fromFollowAndLogLevel(follow, logLevel);

  switch (command) {
    case null: {
      console.log(NO_COMMAND_GIVEN_MESSAGE);

      process.exit(1);

      break;
    }

    case HELP_COMMAND: {
      helpAction();

      break;
    }

    case VERIFY_COMMAND: {
      verifyAction(argument, log);

      break;
    }

    case VERSION_COMMAND: {
      versionAction();

      break;
    }

    default: {
      argument = command; ///

      verifyAction(argument, log);

      break;
    }
  }

  if (!follow) {
    let messages = log.getMessages()

    const start = - tail;

    messages = messages.slice(start); ///

    messages.forEach((message) => {
      console.log(message);
    });
  }
}

module.exports = main;
