"use strict";

import shim from "./shim";
import unifyMixins from "./mixins/statement/unify";
import verifyMixins from "./mixins/statement/verify";
import statementAsCombinatorVerifier from "./verifier/statementAsCombinator";

import { statementNodeFromStatementString } from "./utilities/node";
import { FRAME_META_TYPE_NAME, REFERENCE_META_TYPE_NAME, STATEMENT_META_TYPE_NAME } from "./metaTypeNames";

class Statement {
  constructor(string, node) {
    this.string = string;
    this.node = node;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  isEqualTo(statement) {
    const node = statement.getNode(),
          matches = this.node.match(node),
          equalTo = matches;  ///

    return equalTo;
  }

  verify(assignments, stated, localContext) {
    let verified = false;

    const statement = this, ///
          statementString = this.string;  ///

    localContext.trace(`Verifying the '${statementString}' statement...`);

    if (!verified) {
      verified = unifyMixins.some((unifyMixin) => { ///
        const unified = unifyMixin(statement, assignments, stated, localContext);

        if (unified) {
          return true;
        }
      });
    }

    if (!verified) {
      verified = verifyMixins.some((verifyMixin) => {
        const verified = verifyMixin(statement, assignments, stated, localContext);

        if (verified) {
          return true;
        }
      });
    }

    if (verified) {
      localContext.debug(`...verified the '${statementString}' statement.`);
    }

    return verified;
  }

  unifyWithMetaType(metaType, assignments, stated, localContext) {
    let unifiedWithMetaType;

    const verifiedGivenMetaType = this.verifyGivenMetaType(metaType, assignments, stated, localContext);

    unifiedWithMetaType = verifiedGivenMetaType;  ///

    return unifiedWithMetaType;
  }

  verifyAsCombinator(localContext) {
    let verifiedAsCombinator;

    const statementNode = this.node,  ///
          statementString = this.string;  ///

    localContext.trace(`Verifying the '${statementString}' statement as a combinator...`);

    verifiedAsCombinator = statementAsCombinatorVerifier.verifyStatement(statementNode, localContext);

    if (verifiedAsCombinator) {
      localContext.debug(`...verified the '${statementString}' statement as a combinator.`, statementNode);
    }

    return verifiedAsCombinator;
  }

  verifyGivenMetaType(metaType, assignments, stated, localContext) {
    let verifiedGivenMetaType;

    const metaTypeName = metaType.getName();

    switch (metaTypeName) {
      case FRAME_META_TYPE_NAME:
      case REFERENCE_META_TYPE_NAME: {
        debugger

        // verifiedGivenMetaType = false;
        //
        // const metavariableNode = metavariableNodeQuery(statementNode);
        //
        // if (metavariableNode !== null) {
        //   const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
        //     metavariable = localContext.findMetavariableByMetavariableName(metavariableName);
        //
        //   if (metavariable !== null) {
        //     const metavariableMetaType = metavariable.getMetaType();
        //
        //     if (metavariableMetaType === metaType) {
        //       verifiedGivenMetaType = true;
        //     }
        //   }
        // }

        break;
      }

      case STATEMENT_META_TYPE_NAME: {
        const verified = this.verify(assignments, stated, localContext)

        verifiedGivenMetaType = verified; ///

        break;
      }
    }

    return verifiedGivenMetaType;
  }

  toJSON(fileContext) {
    const string = this.string, ///
          json = {
            string
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { string } = json,
          statementString = string, ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          node = statementNode,  ///
          statement = new Statement(string, node);

    return statement;
  }

  static fromStatementNode(statementNode, localContext) {
    let statement;

    if (statementNode !== null) {
      const node = statementNode, ///
            string = localContext.nodeAsString(node);

      statement = new Statement(string, node);
    }

    return statement;
  }
}

Object.assign(shim, {
  Statement
});

Object.assign(Statement.prototype, unifyMixins);

export default Statement;

