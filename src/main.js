"use strict";

import { Log } from "occam-furtle";

import helpAction from "./action/help";
import verifyAction from "./action/verify";
import versionAction from "./action/version";

import { NO_COMMAND_GIVEN_MESSAGE } from "./messages";
import { HELP_COMMAND, VERIFY_COMMAND, VERSION_COMMAND } from "./commands";
import { DEFAULT_TAIL, DEFAULT_FOLLOW, DEFAULT_LOG_LEVEL } from "./defaults";

export default function main(command, argument, options) {
  const { tail = DEFAULT_TAIL,
          follow = DEFAULT_FOLLOW,
          logLevel = DEFAULT_LOG_LEVEL } = options;

  const log = Log.fromFollowAndLogLevel(follow, logLevel);

  switch (command) {
    case null: {
      console.log(NO_COMMAND_GIVEN_MESSAGE);

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
