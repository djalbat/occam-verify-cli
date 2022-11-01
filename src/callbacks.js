"use strict";

const HALT_MESSAGE = "Halted verification.",
      BEGIN_MESSAGE = "Begun verification...",
      COMPLETED_MESSAGE = "...completed verification.";

class Callbacks {
  constructor(halt, begin, complete) {
    this.halt = halt;
    this.begin = begin;
    this.complete = complete;
  }

  getHalt() {
    return this.halt;
  }

  getBegin() {
    return this.begin;
  }

  getComplete() {
    return this.complete;
  }

  static fromHaltBeginAndComplete(halt, begin, complete) {
    const callbacks = new Callbacks(halt, begin, complete);

    return callbacks;
  }
}

Object.assign(Callbacks, {
  HALT_MESSAGE,
  BEGIN_MESSAGE,
  COMPLETED_MESSAGE
});

export default Callbacks;
