"use strict";

import MetaType from "./metaType";

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
    const nameMatches = (this.name === name);

    return nameMatches;
  }

  toJSON(tokens) {
    const metaTypeJSON = this.metaType.toJSON(tokens),
          name = this.name, ///
          metaType = metaTypeJSON,  ///
          json = {
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

    metaType = fileContext.findMetaTypeByMetaTypeName(metaTypeName); ///

    const metavariable = new Metavariable(name, metaType);

    return metavariable;
  }
}
