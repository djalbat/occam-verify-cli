"use strict";

export function stopClock(now, log) {
  const then = now; ///

  now = Date.now();

  const seconds = Math.floor(now - then) / 1000;

  log.info(`Time ${seconds} seconds.`);
}

export function startClock() {
  let now;

  now = Date.now();

  return now;
}

export default {
  stopClock,
  startClock
};
