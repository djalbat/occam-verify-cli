"use strict";

import { define } from "../structure";

export default define(class ProcedureReference {
  constructor(string, name) {
    this.string = string;
    this.name = name;
  }

  getString() {
    return this.string;
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

  static fromProcedureCallNode(procedureCallNode, context) {
    const procedureName = procedureCallNode.getProcedureName(),
          name = procedureName, ///
          string = name,  ///
          procedureReference = new ProcedureReference(string, name);

    return procedureReference;
  }
});
