"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import {nameToNameJSON} from "../utilities/json";

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
    debugger
  }
});
