"use strict";

const structure = {};

export function define(Class) {
  const { name } = Class;

  structure[name] = Class;

  return Class;
}

export default structure;
