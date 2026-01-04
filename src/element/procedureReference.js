"use strict";

import { define } from "../elements";

export default define(class ProcedureReference {
  constructor(context, string, node, name) {
    this.context = context;
    this.string = string;
    this.node = node;
    this.name = name;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getName() {
    return this.name;
  }

  toJSON() {
    const name = this.name,
          json = {
            name
          };

    return json;
  }

  static name = "ProcedureReference";

  static fromJSON(json, context) {
    const { name } = json,
          string = name,  ///
          procedureReference = new ProcedureReference(string, name);

    return procedureReference;
  }
});
