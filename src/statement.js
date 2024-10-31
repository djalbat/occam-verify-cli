"use strict";

import shim from "./shim";
import unifyMixins from "./mixins/statement/unify";
import verifyMixins from "./mixins/statement/verify";
import resolveMixins from "./mixins/statement/resolve";
import combinatorVerifier from "./verifier/combinator";
import StatementNodeAndTokens from "./nodeAndTokens/statement";

import { unifyStatement } from "./utilities/unification";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { STATEMENT_META_TYPE_NAME } from "./metaTypeNames";

const statementNodeQuery = nodeQuery("/*//statement"),
      statementTermNodesQuery = nodesQuery("/statement//term"),
      statementFrameNodesQuery = nodesQuery("/statement//frame");

class Statement {
  constructor(string, node, tokens) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  isEqualTo(statement) {
    const node = statement.getNode(),
          matches = this.node.match(node),
          equalTo = matches;  ///

    return equalTo;
  }

  isTermContained(term, context) {
    let termContained;

    const termString = term.getString(),
          statementString = this.string;  ///

    context.trace(`Is the '${termString}' term contained in the '${statementString}' statement...`);

    const termNode = term.getNode(),
          statementNode = this.node,
          statementTermNodes = statementTermNodesQuery(statementNode);

    termContained = statementTermNodes.some((statementTermNode) => {  ///
      const termNodeMatchesStatementVariableNode = termNode.match(statementTermNode);

      if (termNodeMatchesStatementVariableNode) {
        return true;
      }
    });

    if (termContained) {
      context.debug(`...the '${termString}' term is contained in the '${statementString}' statement.`);
    }

    return termContained;
  }

  isFrameContained(frame, context) {
    let frameContained;

    const frameString = frame.getString(),
          statementString = this.string;  ///

    context.trace(`Is the '${frameString}' frame contained in the '${statementString}' statement...`);

    const frameNode = frame.getNode(),
          statementNode = this.node,
          statementFrameNodes = statementFrameNodesQuery(statementNode);

    frameContained = statementFrameNodes.some((statementFrameNode) => {  ///
      const frameNodeMatchesStatementMetavariableNode = frameNode.match(statementFrameNode);

      if (frameNodeMatchesStatementMetavariableNode) {
        return true;
      }
    });

    if (frameContained) {
      context.debug(`...the '${frameString}' frame is contained in the '${statementString}' statement.`);
    }

    return frameContained;
  }

  matchStatementNode(statementNode) {
    const statementNodeMatches = this.node.match(statementNode);

    return statementNodeMatches;
  }

  unifyIndependently(substitutions, generalContext, specificContext) {
    let unifiedIndependently;

    const statementString = this.string;  ///

    specificContext.trace(`Unifying the '${statementString}' statement independently...`);

    const resolved = resolveMixins.some((resolveMixin) => {
      const statement = this, ///
            resolved = resolveMixin(statement, substitutions, generalContext, specificContext);

      if (resolved) {
        return true;
      }
    });

    unifiedIndependently = resolved; ///

    if (unifiedIndependently) {
      specificContext.debug(`...unified the '${statementString}' statement independently.`);
    }

    return unifiedIndependently;
  }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnified;

    const generalStatement = this,  ///
          specificStatement = statement, ///
          generalStatementString = generalStatement.getString(),
          specificStatementString = specificStatement.getString();

    specificContext.trace(`Unifying the '${specificStatementString}' statement with the '${generalStatementString}' statement...`);

    statementUnified = unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext);

    if (statementUnified) {
      specificContext.debug(`...unified the '${specificStatementString}' statement with the '${generalStatementString}' statement.`);
    }

    return statementUnified;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const statementString = this.string;  ///

    context.trace(`Verifying the '${statementString}' statement...`);

    if (!verified) {
      verified = verifyMixins.some((verifyMixin) => {
        const statement = this, ///
              verified = verifyMixin(statement, assignments, stated, context);

        if (verified) {
          return true;
        }
      });
    }

    if (!verified) {
      const unified = unifyMixins.some((unifyMixin) => {
        const statement = this, ///
              unified = unifyMixin(statement, assignments, stated, context);

        if (unified) {
          return true;
        }
      });

      verified = unified; ///
    }

    if (verified) {
      context.debug(`...verified the '${statementString}' statement.`);
    }

    return verified;
  }

  verifyWhenDeclared(fileContext) {
    let verifiedAtTopLevel;

    const statementNode = this.node,  ///
          statementString = this.string;  ///

    fileContext.trace(`Verifying the '${statementString}' statement when declared...`);

    verifiedAtTopLevel = combinatorVerifier.verifyStatement(statementNode, fileContext);

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${statementString}' statement when declared.`);
    }

    return verifiedAtTopLevel;
  }

  verifyGivenMetaType(metaType, assignments, stated, context) {
    let verifiedGivenMetaType = false;

    const metaTypeString = metaType.getString(),
          statementString = this.string;  ///

    context.trace(`Verifying the '${statementString}' statement given the '${metaTypeString}' meta-type...`);

    const metaTypeName = metaType.getName();

    if (metaTypeName === STATEMENT_META_TYPE_NAME) {
      const verified = this.verify(assignments, stated, context)

      verifiedGivenMetaType = verified; ///
    }

    if (verifiedGivenMetaType) {
      context.debug(`...verified the '${statementString}' statement given the '${metaTypeString}' meta-type.`);
    }

    return verifiedGivenMetaType;
  }

  toJSON() {
    const string = this.string, ///
          json = {
            string
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { string } = json,
          context = fileContext,  ///
          statementNodeAndTokens = StatementNodeAndTokens.fromString(string, context),
          node = statementNodeAndTokens.getNode(),
          tokens = statementNodeAndTokens.getTokens(),
          statement = new Statement(string, node, tokens);

    return statement;
  }

  static fromStatementNode(statementNode, context) {
    let statement = null;

    if (statementNode !== null) {
      const node = statementNode, ///
            tokens = context.nodeAsTokens(node),
            string = context.tokensAsString(tokens);

      statement = new Statement(string, node, tokens);
    }

    return statement;
  }

  static fromDefinedAssertionNode(definedAssertionNode, context) {
    const statementNode = statementNodeQuery(definedAssertionNode),
          node = statementNode, ///
          tokens = context.nodeAsTokens(node),
          string = context.tokensAsString(tokens),
          statement = new Statement(string, node, tokens);

    return statement;
  }

  static fromContainedAssertionNode(containedAssertionNode, context) {
    const statementNode = statementNodeQuery(containedAssertionNode),
          node = statementNode, ///
          tokens = context.nodeAsTokens(node),
          string = context.tokensAsString(tokens),
          statement = new Statement(string, node, tokens);

    return statement;
  }
}

Object.assign(Statement.prototype, unifyMixins);

Object.assign(shim, {
  Statement
});

export default Statement;

