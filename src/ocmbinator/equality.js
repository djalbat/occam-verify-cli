"use strict";

import Combinator from "../combinator";
import CombinatorReleaseContext from "../context/release/combinator";

import { OBJECT_TYPE_NAME } from "../typeNames";
import { statementNodeFromStatementString } from "../utilities/string";

class EqualityCombinator extends Combinator {
  static fromNothing() {
    const statementString = `${OBJECT_TYPE_NAME} = ${OBJECT_TYPE_NAME}`,
          releaseContext = CombinatorReleaseContext, ///
          statementNode = statementNodeFromStatementString(statementString, releaseContext),
          equalityCombinator = new EqualityCombinator(statementNode);

    return equalityCombinator;
  }
}

const equalityCombinator = EqualityCombinator.fromNothing();

export default equalityCombinator;
