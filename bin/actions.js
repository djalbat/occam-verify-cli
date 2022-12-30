"use strict";

const helpAction = require("./action/help"),
      verifyAction = require("./action/verify"),
      versionAction = require("./action/version");

const { DEFAULT_HELP, DEFAULT_VERSION, DEFAULT_LOG_LEVEL } = require("./defaults"),
      { HELP_COMMAND,
        VERIFY_COMMAND,
        VERSION_COMMAND } = require("./commands");

function actions(command, argument, options) {
  const commandMissing = (command === null),
        { help = DEFAULT_HELP,
          version = DEFAULT_VERSION,
          logLevel = DEFAULT_LOG_LEVEL } = options;

  if (false) {
    ///
  } else if (help) {
    command = HELP_COMMAND;
  } else if (version) {
    command = VERSION_COMMAND;
  } else if (commandMissing) {
    command = HELP_COMMAND;
  }

  switch (command) {
    case HELP_COMMAND : helpAction(); break;
    case VERIFY_COMMAND : verifyAction(argument, logLevel); break;
    case VERSION_COMMAND : versionAction(); break;

    default:
      argument = command; ///

      verifyAction(argument, logLevel);
  }
}

module.exports = actions;