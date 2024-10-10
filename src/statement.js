"use strict";

import shim from "./shim";
import unifyMixins from "./mixins/statement/unify";
import verifyMixins from "./mixins/statement/verify";
import StatementSubstitution from "./substitution/statement";
import statementAsCombinatorVerifier from "./verifier/statementAsCombinator";

import { STATEMENT_META_TYPE_NAME } from "./metaTypeNames";
import { statementNodeFromStatementString } from "./utilities/node";

class Statement {
  constructor(string, node, substitution) {
    this.string = string;
    this.node = node;
    this.substitution = substitution;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getSubstitution() {
    return this.substitution;
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
      const unified = unifyMixins.some((unifyMixin) => {
        const unified = unifyMixin(statement, assignments, stated, localContext);

        if (unified) {
          return true;
        }
      });

      verified = unified; ///
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

  verifyAtTopLevel(fileContext) {
    let verifiedAtTopLevel;

    const statementNode = this.node,  ///
          statementString = this.string;  ///

    fileContext.trace(`Verifying the '${statementString}' statement at top level...`);

    verifiedAtTopLevel = statementAsCombinatorVerifier.verifyStatement(statementNode, fileContext);

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${statementString}' statement at top level.`, statementNode);
    }

    return verifiedAtTopLevel;
  }

  verifyGivenMetaType(metaType, assignments, stated, localContext) {
    let verifiedGivenMetaType = false;

    const metaTypeString = metaType.getString(),
          statementString = this.string;  ///

    localContext.trace(`Verifying the '${statementString}' given the '${metaTypeString}' meta-type...`);

    const metaTypeName = metaType.getName();

    if (metaTypeName === STATEMENT_META_TYPE_NAME) {
      const verified = this.verify(assignments, stated, localContext)

      verifiedGivenMetaType = verified; ///
    }

    if (verifiedGivenMetaType) {
      localContext.debug(`...verified the '${statementString}' given the '${metaTypeString}' meta-type.`);
    }

    return verifiedGivenMetaType;
  }

  toJSON() {
    const substitutionJSON = (this.substitution !== null) ?
                                this.substitution.toJSON() :
                                  null,
          substitution = substitutionJSON,  ///
          string = this.string, ///
          json = {
            substitution,
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
          node = statementNode;  ///

    let { substitution } = json;

    json = substitution;  ///

    const statementSubstitution = StatementSubstitution.fromJSON(json, fileContext);

    substitution = statementSubstitution; ///

    const statement = new Statement(string, node, substitution);

    return statement;
  }

  static fromStatementNode(statementNode, localContext) {
    let statement = null;

    if (statementNode !== null) {
      const node = statementNode, ///
          string = localContext.nodeAsString(node),
          statementSubstitution = StatementSubstitution.fromStatementNode(statementNode, localContext),
          substitution = statementSubstitution; ///

      statement = new Statement(string, node, substitution);
    }

    return statement;
  }
}

Object.assign(shim, {
  Statement
});

Object.assign(Statement.prototype, unifyMixins);

export default Statement;

