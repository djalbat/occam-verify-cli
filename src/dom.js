"use strict";

const dom = WeakMap;

export function domAssigned(Class) {
  const { name } = Class;

  Object.assign(dom, {
    [name]: Class
  });

  return Class;
}

export default dom;
