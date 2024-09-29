"use strict";

import Metavariable from "./metavariable";

export default class Label {
  constructor(string, metavariable) {
    this.string = string;
    this.metavariable = metavariable;
  }

  getString() {
    return this.string;
  }

  getMetavariable() {
    return this.metavariable;
  }

  matchMetavariableNode(metavariableNode) { return this.metavariable.matchMetavariableNode(metavariableNode); }

  toJSON(fileContext) {
    const metavariableJSON = this.metavariable.toJSON(fileContext),
          metavariable = metavariableJSON,  ///
          string = this.string,
          json = {
            string,
            metavariable
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { string } = json;

    let { metavariable } = json;

    json = metavariable;  ///

    metavariable = Metavariable.fromJSON(json, fileContext);

    const label = new Label(string, metavariable);

    return label;
  }

  static fromLabelNodeAndMetavariable(labelNode, metavariable, fileContext) {
    const node = labelNode, ///
          string = fileContext.nodeAsString(node),
          label = new Label(string, metavariable);

    return label;
  }
}
