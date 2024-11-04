"use strict";

const dom = {};

export function domAssigned(Class) {
  const { name } = Class;

  dom[name] = Class;

  return Class;
}

export default dom;
