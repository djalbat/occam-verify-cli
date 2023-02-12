"use strict";

import MetaType from "./metaType";

import { METAVARIABLE_KIND } from "./kinds";

export default class Metavariable {
  constructor(name, metaType) {
    this.name = name;
    this.metaType = metaType;
  }

  getName() {
    return this.name;
  }

  getMetaType() {
    return this.metaType;
  }

  matchName(name) {
    const matchesName = (this.name === name);

    return matchesName;
  }

  toJSON(tokens) {
    const metaTypeJSON = this.metaType.toJSON(tokens),
          kind = METAVARIABLE_KIND,
          name = this.name, ///
          metaType = metaTypeJSON,  ///
          json = {
            kind,
            name,
            metaType
          };

    return json;
  }

  asString(tokens) {
    const metaTypeName = this.metaType.getName(),
          string = `${this.name}:${metaTypeName}`;

    return string;
  }

  static fromNameAndMetaType(name, metaType) {
    const metavariable = new Metavariable(name, metaType);

    return metavariable;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { name } = json;

    let { metaType } = json;

    json = metaType;  ///

    metaType = MetaType.fromJSONAndFileContext(json, fileContext);

    const metaTypeName = metaType.getName();

    metaType = fileContext.findTypeByTypeName(metaTypeName); ///

    const metavariable = new Metavariable(name, metaType);

    return metavariable;
  }
}
