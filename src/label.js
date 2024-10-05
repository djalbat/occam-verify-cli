"use strict";

import Metavariable from "./metavariable";

import { nodeQuery } from "./utilities/query";

const metavariableNodeQuery = nodeQuery("//label/metavariable");

export default class Label {
  constructor(metavariable) {
    this.metavariable = metavariable;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getString() { return this.metavariable.getString(); }

  matchMetavariableNode(metavariableNode) { return this.metavariable.matchMetavariableNode(metavariableNode); }

  verifyAtTopLevel(fileContext) {
    let verifiedAtTopLevel = false;

    const labelString = this.getString(); ///

    fileContext.trace(`Verifying the '${labelString}' label at top level...`);

    const metavariableNode = this.metavariable.getNode(),
          labelPresent = fileContext.isLabelPresentByMetavariableNode(metavariableNode);

    if (labelPresent) {
      fileContext.debug(`The '${labelString}' label is already present.`);
    } else {
      verifiedAtTopLevel = true;
    }

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verifiedAtTopLevel the '${labelString}' label at top level.`);
    }

    return verifiedAtTopLevel;
  }

  toJSON() {
    const metavariableJSON = this.metavariable.toJSON(),
          metavariable = metavariableJSON,  ///
          json = {
            metavariable
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    let { metavariable } = json;

    json = metavariable;  ///

    metavariable = Metavariable.fromJSON(json, fileContext);

    const label = new Label(metavariable);

    return label;
  }

  static fromLabelNode(labelNode, fileContext) {
    const metavariableNode = metavariableNodeQuery(labelNode),
          metavariable = Metavariable.fromMetavariableNode(metavariableNode, fileContext),
          label = new Label(metavariable);

    return label;
  }
}
