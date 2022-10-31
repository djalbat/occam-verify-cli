"use strict";

function halt(node) { this.context.halt(node); }

function begin(node) { this.context.begin(node); }

function complete(node) { this.context.complete(node); }

const callbacksMixins = {
  halt,
  begin,
  complete
};

export default callbacksMixins;
