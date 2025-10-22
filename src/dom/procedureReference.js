"use strict";

import { domAssigned } from "../dom";

export default domAssigned(class ProcedureReference {
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

  static fromJSON(json, context) {
    const { name } = json,
          string = name,  ///
          procedureReference = new ProcedureReference(string, name);

    return procedureReference;
  }

  static name = "ProcedureReference";

  static fromProcedureCallNode(procedureCallNode, context) {
    const procedureName = procedureCallNode.getProcedureName(),
          name = procedureName, ///
          string = name,  ///
          procedureReference = new ProcedureReference(string, name);

    return procedureReference;
  }
});
