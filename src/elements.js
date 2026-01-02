"use strict";

const elements = {};

export function define(Class) {
  const { name } = Class;

  elements[name] = Class;

  return Class;
}

export default elements;
