"use strict";

import shim from "./shim";
import unifyMixins from "./mixins/statement/unify";
import verifyMixins from "./mixins/statement/verify";
import LocalContext from "./context/local";
import metaLevelUnifier from "./unifier/metaLevel";
import statementAsCombinatorVerifier from "./verifier/statementAsCombinator";

import { nodeQuery, nodesQuery } from "./utilities/query";
import { STATEMENT_META_TYPE_NAME } from "./metaTypeNames";
import { statementTokensFromUnqualifiedStatementTokens, unqualifiedStatementTokensFromUnqualifiedStatementString } from "./utilities/tokens";
import { statementNodeFromUnqualifiedStatementNode,
         unqualifiedStatementStringFromStatementString,
         unqualifiedStatementNodeFromUnqualifiedStatementTokens } from "./utilities/node";

const statementNodeQuery = nodeQuery("/*//statement"),
      statementVariableNodesQuery = nodesQuery("/statement//variable"),
      statementMetavariableNodesQuery = nodesQuery("/statement//metavariable");

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

  isVariableContained(variable, localContext) {
    let variableContained;

    const variableString = variable.getString(),
          statementString = this.string;  ///

    localContext.trace(`Is the '${variableString}' variable contained in the '${statementString}' statement...`);

    const variableNode = variable.getNode(),
          statementNode = this.node,
          statementVariableNodes = statementVariableNodesQuery(statementNode);

    variableContained = statementVariableNodes.some((statementVariableNode) => {  ///
      const variableNodeMatchesStatementVariableNode = variableNode.match(statementVariableNode);

      if (variableNodeMatchesStatementVariableNode) {
        return true;
      }
    });

    if (variableContained) {
      localContext.debug(`...the '${variableString}' variable is contained in the '${statementString}' statement.`);
    }

    return variableContained;
  }

  isMetavariableContained(metavariable, localContext) {
    let metavariableContained;

    const metavariableString = metavariable.getString(),
          statementString = this.string;  ///

    localContext.trace(`Is the '${metavariableString}' metavariable contained in the '${statementString}' statement...`);

    const metavariableNode = metavariable.getNode(),
          statementNode = this.node,
          statementMetavariableNodes = statementMetavariableNodesQuery(statementNode);

    metavariableContained = statementMetavariableNodes.some((statementMetavariableNode) => {  ///
      const metavariableNodeMatchesStatementMetavariableNode = metavariableNode.match(statementMetavariableNode);

      if (metavariableNodeMatchesStatementMetavariableNode) {
        return true;
      }
    });

    if (metavariableContained) {
      localContext.debug(`...the '${metavariableString}' metavariable is contained in the '${statementString}' statement.`);
    }

    return metavariableContained;
  }

  matchStatementNode(statementNode) {
    const statementNodeMatches = this.node.match(statementNode);

    return statementNodeMatches;
  }

  unifyStatement(statement, substitutions, localContextA, localContextB) {
    let statementUnified;

    const statementA = this,  ///
          statementB = statement, ///
          statementAString = statementA.getString(),
          statementBString = statementB.getString();

    localContextB.trace(`Unifying the '${statementBString}' statement with the '${statementAString}' statement...`);

    const statementANode = statementA.getNode(),
          statementBNode = statementB.getNode(),
          context = localContextA,  ///
          nodeA = statementANode, ///
          nodeB = statementBNode; ///

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

