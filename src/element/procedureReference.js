"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class ProcedureReference extends Element {
  constructor(context, string, node, name) {
    super(context, string, node);
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getProcedureReferenceNode() {
    const node = this.getNode(),
          procedureReferenceNode = node;  ///

    return procedureReferenceNode;
  }

  getProcedureName() {
    const procedureName = this.name;  ///

    return procedureName;
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
          node = null,
          procedureReference = new ProcedureReference(context, string, node, name);

    return procedureReference;
  }
});
