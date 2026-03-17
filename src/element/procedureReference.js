"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateProcedureReference } from "../process/instantiate";
import { nameFromProcedureReferenceNode } from "../utilities/element";

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
    const string = this.getString(),
          json = {
            string
          };

    return json;
  }

  static name = "ProcedureReference";

  static fromJSON(json, context) {
    return instantiate((context) => {
      const { string } = json,
            procedureReferenceNode = instantiateProcedureReference(string, context),
            node = procedureReferenceNode,  ///
            name = nameFromProcedureReferenceNode(procedureReferenceNode, context);

      context = null;

      const procedureReference = new ProcedureReference(context, string, node, name);

      return procedureReference;
    }, context);
  }
});
