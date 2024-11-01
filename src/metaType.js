"use strict";

import shim from "./shim";

import { nodeQuery } from "./utilities/query";
import { metaTypeNameFromMetaTypeNode } from "./utilities/name";
import { FRAME_META_TYPE_NAME, REFERENCE_META_TYPE_NAME, STATEMENT_META_TYPE_NAME } from "./metaTypeNames";

const metaTypeNodeQuery = nodeQuery("/metavariableDeclaration/metaType");

class MetaType {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getString() {
    const string = this.name; ///

    return string;
  }

  isEqualTo(metaType) {
    const equalTo = (this === metaType);

    return equalTo;
  }

  matchMetaTypeName(metaTypeName) {
    const metaTypeNameMatches = (metaTypeName === this.name);

    return metaTypeNameMatches;
  }

  toJSON() {
    const name = this.name,
          json = {
            name
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { name } = json,
          metaTypeName = name,  ///
          metaType = metaTypeFromMetaTypeName(metaTypeName);

    return metaType;
  }

  static fromMetaTypeNode(metaTypeNode, context) {
    const metaTypeName = metaTypeNameFromMetaTypeNode(metaTypeNode),
          metaType = metaTypeFromMetaTypeName(metaTypeName);

    return metaType;
  }

  static fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
    const metatypeNode = metaTypeNodeQuery(metavariableDeclarationNode),
          metaTypeName = metaTypeNameFromMetaTypeNode(metatypeNode),
          metaType = fileContext.findMetaTypeByMetaTypeName(metaTypeName);

    return metaType;
  }
}

Object.assign(shim, {
  MetaType
});

export default MetaType;

class FrameMetaType extends MetaType {
  static fromNothing() {
    const name = FRAME_META_TYPE_NAME,
          frameMetaType = new FrameMetaType(name);

    return frameMetaType;
  }
}

class ReferenceMetaType extends MetaType {
  static fromNothing() {
    const name = REFERENCE_META_TYPE_NAME,
          referenceMetaType = new ReferenceMetaType(name);

    return referenceMetaType;
  }
}

class StatementMetaType extends MetaType {
  static fromNothing() {
    const name = STATEMENT_META_TYPE_NAME,
          statementMetaType = new StatementMetaType(name);

    return statementMetaType;
  }
}

export const frameMetaType = FrameMetaType.fromNothing();
export const referenceMetaType = ReferenceMetaType.fromNothing();
export const statementMetaType = StatementMetaType.fromNothing();

function metaTypeFromMetaTypeName(metaTypeName) {
  let metaType;

  switch (metaTypeName) {
    case FRAME_META_TYPE_NAME: {
      metaType = frameMetaType; ///

      break;
    }

    case REFERENCE_META_TYPE_NAME: {
      metaType = referenceMetaType; ///

      break;
    }

    case STATEMENT_META_TYPE_NAME: {
      metaType = statementMetaType; ///

      break;
    }
  }

  return metaType;
}
