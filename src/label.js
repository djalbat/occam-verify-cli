"use strict";

import Metavariable from "./metavariable";

import { nodeQuery } from "./utilities/query";

const metavariableNodeQuery = nodeQuery("//label/metavariable");

export default class Label {
  constructor(metavariable) {
    this.metavariable = metavariable;
  }

  getString() { return this.metavariable.getString(); }

  getMetavariable() {
    return this.metavariable;
  }

  matchMetavariableNode(metavariableNode) { return this.metavariable.matchMetavariableNode(metavariableNode); }

  verify(fileContext) {
    let verified = false;

    const labelString = this.string;  ///

    fileContext.trace(`Verifying the '${labelString}' label...`);

    const metavariableNode = this.metavariable.getNode(),
          labelPresent = fileContext.isLabelPresentByMetavariableNode(metavariableNode);

    if (labelPresent) {
      fileContext.debug(`The '${labelString}' label is already present.`);
    } else {
      verified = true;
    }

    if (verified) {
      fileContext.debug(`...verified the '${labelString}' label.`);
    }

    return verified;
  }

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

  static fromLabelNode(labelNode, fileContext) {
    const metavariableNode = metavariableNodeQuery(labelNode),
          metavariable = Metavariable.fromMetavariableNode(metavariableNode, fileContext),
          label = new Label(metavariable);

    return label;
  }
}
