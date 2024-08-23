"use strict";

import MetaType from "../metaType";

import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";

class StatementMetaType extends MetaType {
  static fromNothing() {
    const name = STATEMENT_META_TYPE_NAME,
          statementMetaType = new StatementMetaType(name);

    return statementMetaType;
  }
}

const statementMetaType = StatementMetaType.fromNothing();

export default statementMetaType;
