"use strict";

import shim from "./shim";
import unifyMixins from "./mixins/statement/unify";
import verifyMixins from "./mixins/statement/verify";
import LocalContext from "./context/local";
import resolveMixins from "./mixins/statement/resolve";
import metaLevelUnifier from "./unifier/metaLevel";
import statementAsCombinatorVerifier from "./verifier/statementAsCombinator";

import { nodeQuery, nodesQuery } from "./utilities/query";
import { STATEMENT_META_TYPE_NAME } from "./metaTypeNames";
import { statementTokensFromUnqualifiedStatementTokens, unqualifiedStatementTokensFromUnqualifiedStatementString } from "./utilities/tokens";
import { statementNodeFromUnqualifiedStatementNode,
         unqualifiedStatementStringFromStatementString,
         unqualifiedStatementNodeFromUnqualifiedStatementTokens } from "./utilities/node";

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

  isTermContained(term, localContext) {
    let termContained;

    const termString = term.getString(),
          statementString = this.string;  ///

    localContext.trace(`Is the '${termString}' term contained in the '${statementString}' statement...`);

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
      localContext.debug(`...the '${termString}' term is contained in the '${statementString}' statement.`);
    }

    return termContained;
  }

  isFrameContained(frame, localContext) {
    let frameContained;

    const frameString = frame.getString(),
          statementString = this.string;  ///

    localContext.trace(`Is the '${frameString}' frame contained in the '${statementString}' statement...`);

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
      localContext.debug(`...the '${frameString}' frame is contained in the '${statementString}' statement.`);
    }

    return frameContained;
  }

  matchStatementNode(statementNode) {
    const statementNodeMatches = this.node.match(statementNode);

    return statementNodeMatches;
  }

  resolveIndependently(substitutions, localContextA, localContextB) {
    let resolvedIndependently;

    const statement = this, ///
          statementString = this.string;  ///

    localContextB.trace(`Resolving the '${statementString}' statement independently...`);

    const context = localContextA;  ///

    localContextA = LocalContext.fromContextAndTokens(context, this.tokens);

    const resolved = resolveMixins.some((resolveMixin) => {
      const resolved = resolveMixin(statement, substitutions, localContextA, localContextB);

      if (resolved) {
        return true;
      }
    });

    resolvedIndependently = resolved; ///

    if (resolvedIndependently) {
      localContextB.debug(`...resolved the '${statementString}' statement independently.`);
    }

    return resolvedIndependently;
  }

  unifyStatement(statement, substitutions, localContextA, localContextB) {
    let statementUnified;

    const statementA = this,  ///
          statementB = statement, ///
          statementAString = statementA.getString(),
          statementBString = statementB.getString();

    localContextB.trace(`Unifying the '${statementBString}' statement with the '${statementAString}' statement...`);

    const statementNodeA = statementA.getNode(),  ///
          statementNodeB = statementB.getNode(),  ///
          context = localContextA,  ///
          nodeA = statementNodeA, ///
          nodeB = statementNodeB; ///

    localContextA = LocalContext.fromContextAndTokens(context, this.tokens);

    const unifiedAtMetaLevel = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

    statementUnified = unifiedAtMetaLevel; ///

    if (statementUnified) {
      localContextB.debug(`...unified the '${statementBString}' statement with the '${statementAString}' statement.`);
    }

    return statementUnified;
  }

  verify(assignments, stated, localContext) {
    let verified = false;

    const statement = this, ///
          statementString = this.string;  ///

    localContext.trace(`Verifying the '${statementString}' statement...`);

    if (!verified) {
      verified = verifyMixins.some((verifyMixin) => {
        const verified = verifyMixin(statement, assignments, stated, localContext);

        if (verified) {
          return true;
        }
      });
    }

    if (!verified) {
      const unified = unifyMixins.some((unifyMixin) => {
        const unified = unifyMixin(statement, assignments, stated, localContext);

        if (unified) {
          return true;
        }
      });

      verified = unified; ///
    }

    if (verified) {
      localContext.debug(`...verified the '${statementString}' statement.`);
    }

    return verified;
  }

  verifyWhenDeclared(fileContext) {
    let verifiedAtTopLevel;

    const statementNode = this.node,  ///
          statementString = this.string;  ///

    fileContext.trace(`Verifying the '${statementString}' statement when declared...`);

    verifiedAtTopLevel = statementAsCombinatorVerifier.verifyStatement(statementNode, fileContext);

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${statementString}' statement when declared.`);
    }

    return verifiedAtTopLevel;
  }

  verifyGivenMetaType(metaType, assignments, stated, localContext) {
    let verifiedGivenMetaType = false;

    const metaTypeString = metaType.getString(),
          statementString = this.string;  ///

    localContext.trace(`Verifying the '${statementString}' statement given the '${metaTypeString}' meta-type...`);

    const metaTypeName = metaType.getName();

    if (metaTypeName === STATEMENT_META_TYPE_NAME) {
      const verified = this.verify(assignments, stated, localContext)

      verifiedGivenMetaType = verified; ///
    }

    if (verifiedGivenMetaType) {
      localContext.debug(`...verified the '${statementString}' statement given the '${metaTypeString}' meta-type.`);
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
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          statementString = string, ///
          unqualifiedStatementString = unqualifiedStatementStringFromStatementString(statementString),
          unqualifiedStatementTokens = unqualifiedStatementTokensFromUnqualifiedStatementString(unqualifiedStatementString, lexer),
          unqualifiedStatementNode = unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser),
          statementTokens = statementTokensFromUnqualifiedStatementTokens(unqualifiedStatementTokens),
          statementNode = statementNodeFromUnqualifiedStatementNode(unqualifiedStatementNode),
          node = statementNode,  ///
          tokens = statementTokens, ///
          statement = new Statement(string, node, tokens);

    return statement;
  }

  static fromStatementNode(statementNode, localContext) {
    let statement = null;

    if (statementNode !== null) {
      const node = statementNode, ///
            tokens = localContext.nodeAsTokens(node),
            string = localContext.tokensAsString(tokens);

      statement = new Statement(string, node, tokens);
    }

    return statement;
  }

  static fromDefinedAssertionNode(definedAssertionNode, localContext) {
    const statementNode = statementNodeQuery(definedAssertionNode),
          node = statementNode, ///
          tokens = localContext.nodeAsTokens(node),
          string = localContext.tokensAsString(tokens),
          statement = new Statement(string, node, tokens);

    return statement;
  }

  static fromContainedAssertionNode(containedAssertionNode, localContext) {
    const statementNode = statementNodeQuery(containedAssertionNode),
          node = statementNode, ///
          tokens = localContext.nodeAsTokens(node),
          string = localContext.tokensAsString(tokens),
          statement = new Statement(string, node, tokens);

    return statement;
  }
}

Object.assign(Statement.prototype, unifyMixins);

Object.assign(shim, {
  Statement
});

export default Statement;

