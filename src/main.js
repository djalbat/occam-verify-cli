"use strict";

import { Log } from "occam-languages";

import helpAction from "./action/help";
import verifyAction from "./action/verify";
import versionAction from "./action/version";

import { startClock, stopClock } from "./utilities/clock";
import { NO_COMMAND_GIVEN_MESSAGE } from "./messages";
import { HELP_COMMAND, VERIFY_COMMAND, VERSION_COMMAND } from "./commands";
import { DEFAULT_TAIL, DEFAULT_FOLLOW, DEFAULT_LOG_LEVEL } from "./defaults";

export default function main(command, argument, options) {
  switch (command) {
    case null: {
      console.log(NO_COMMAND_GIVEN_MESSAGE);

      break;
    }

    case HELP_COMMAND: {
      helpAction();

      break;
    }

    case VERSION_COMMAND: {
      versionAction();

      break;
    }

    case VERIFY_COMMAND: {
      const name = argument;  ///

      verify(name, options);

      break;
    }

    default: {
      const name = command; ///

      verify(name, options);

      break;
    }
  }
}

function verify(name, options) {
  const { tail = DEFAULT_TAIL, follow = DEFAULT_FOLLOW, logLevel = DEFAULT_LOG_LEVEL } = options,
        log = Log.fromFollowAndLogLevel(follow, logLevel);

  let now = startClock();

  verifyAction(name, log)
    .then(() => {
      stopClock(now, log);

      if (!follow) {
        let messages = log.getMessages()

        const start = - tail;

        messages = messages.slice(start); ///

        messages.forEach((message) => {
          console.log(message);
        });
      }
    });
}
