"use strict";

const ontology = {};

export function define(Class) {
  const { name } = Class;

  ontology[name] = Class;

  return Class;
}

export default ontology;
