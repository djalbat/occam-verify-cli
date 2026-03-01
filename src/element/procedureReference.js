"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { literally } from "../utilities/context";
import { nameFromJSON, nameToNameJSON } from "../utilities/json";
import { instantiateProcedureReference } from "../process/instantiate";

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
    const nameJSON = nameToNameJSON(this.name),
          name = nameJSON,  ///
          string = this.getString(),
          json = {
            string,
            name
          };

    return json;
  }

  static name = "ProcedureReference";

  static fromJSON(json, context) {
    const procedureReference = literally((context) => {
      const { string } = json,
            procedureReferenceNode = instantiateProcedureReference(string, context),
            node = procedureReferenceNode,  ///
            name = nameFromJSON(json, context),
            procedureReference = new ProcedureReference(context, string, node, name);

      return procedureReference;
    }, context);

    return procedureReference;
  }
});
