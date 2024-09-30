"use strict";

import shim from "./shim";
import unifyMixins from "./mixins/unify";
import statementAsCombinatorVerifier from "./verifier/statementAsCombinator";

import { statementNodeFromStatementString } from "./utilities/node";
import { unifyWithCombinators, unifyWithBracketedCombinator } from "./mixins/unify";
import { FRAME_META_TYPE_NAME, REFERENCE_META_TYPE_NAME, STATEMENT_META_TYPE_NAME } from "./metaTypeNames";
import { verifyAsMetavariable,
         verifyAsEquality,
         verifyAsFrame,
         verifyAsJudgement,
         verifyAsDeclaration,
         verifyAsTypeAssertion,
         verifyAsDefinedAssertion,
         verifyAsSubproofAssertion,
         verifyAsContainedAssertion } from "./mixins/verify";

const unifyFunctions = [
        unifyWithBracketedCombinator,
        unifyWithCombinators
      ],
      verifyFunctions = [
        verifyAsMetavariable,
        verifyAsEquality,
        verifyAsFrame,
        verifyAsJudgement,
        verifyAsDeclaration,
        verifyAsTypeAssertion,
        verifyAsDefinedAssertion,
        verifyAsSubproofAssertion,
        verifyAsContainedAssertion
      ];

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

  unify(assignments, stated, localContext) {
    let unified;

    const statement = this, ///
          statementString = this.string;  ///

    localContext.trace(`Unifying the '${statementString}' statement...`);

    unified = unifyFunctions.some((unifyFunction) => {
      const unified = unifyFunction(statement, assignments, stated, localContext);

      if (unified) {
        return true;
      }
    });

    if (unified) {
      localContext.debug(`...unified the '${statementString}' statement.`);
    }

    return unified;
  }

  verify(assignments, stated, localContext) {
    let verified;

    const statement = this, ///
          statementString = this.string;  ///

    localContext.trace(`Verifying the '${statementString}' statement...`);

    verified = verifyFunctions.some((verifyFunction) => {
      const verified = verifyFunction(statement, assignments, stated, localContext);

      if (verified) {
        return true;
      }
    });

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

  static fromStatementNode(statementNode, fileContext) {
    const node = statementNode, ///
          string = fileContext.nodeAsString(node),
          statement = new Statement(string, node);

    return statement;
  }
}

Object.assign(shim, {
  Statement
});

Object.assign(Statement.prototype, unifyMixins);

export default Statement;

