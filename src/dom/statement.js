"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import verifyMixins from "../mixins/statement/verify";
import combinatorVerifier from "../verifier/combinator";
import StatementPartialContext from "../context/partial/statement";

import { domAssigned } from "../dom";
import { unifyStatement } from "../utilities/unification";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";
import { definedAssertionFromStatement, subproofAssertionFromStatement, containedAssertionFromStatement } from "../utilities/verification";

const { match, backwardsSome } = arrayUtilities;

const statementNodeQuery = nodeQuery("/*/statement"),
      statementTermNodesQuery = nodesQuery("/statement//term"),
      statementFrameNodesQuery = nodesQuery("/statement//frame");

export default domAssigned(class Statement {
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
    const statementString = statement.getString(),
          equalTo = (statementString === this.string);

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

  unifySubproof(subproof, substitutions, generalContext, specificContext) {
    let subproofUnified = false;

    const context = specificContext,  ///
          statement = this, ///
          subproofAssertion = subproofAssertionFromStatement(statement, context);

    if (subproofAssertion !== null) {
      const subproofString = subproof.getString(),
            subproofAssertionString = subproofAssertion.getString();

      specificContext.trace(`Unifying the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion...`);

      const subproofStatements = subproof.getStatements(),
            subproofAssertionStatements = subproofAssertion.getStatements();

      subproofUnified = match(subproofAssertionStatements, subproofStatements, (subproofAssertionStatement, subproofStatement) => {
        const generalStatement = subproofAssertionStatement,  ///
              specificStatement = subproofStatement,  ///
              statementUnified = unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext);

        if (statementUnified) {
          return true;
        }
      });

      if (subproofUnified) {
        specificContext.debug(`...unified the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion.`);
      }
    }

    return subproofUnified;
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

  unifyIndependently(substitutions, generalContext, specificContext) {
    let unifiedIndependently = false;

    const context = specificContext,  ///
          statement = this; ///

    const definedAssertion = definedAssertionFromStatement(statement, context),
          containedAssertion = containedAssertionFromStatement(statement, context);

    if ((definedAssertion !== null) || (containedAssertion !== null)) {
      const statementString = this.string;

      specificContext.trace(`Unifying the '${statementString}' statement independently...`);

      if (definedAssertion !== null) {
        const definedAssertionUnifiedIndependently = definedAssertion.unifyIndependently(substitutions, context);

        unifiedIndependently = definedAssertionUnifiedIndependently; ///
      }

      if (containedAssertion !== null) {
        const containedAssertionUnifiedIndependently = containedAssertion.unifyIndependently(substitutions, context);

        unifiedIndependently = containedAssertionUnifiedIndependently; ///
      }

      if (unifiedIndependently) {
        specificContext.debug(`...unified the '${statementString}' statement independently.`);
      }
    }

    return unifiedIndependently;
  }

  unifyWithProofStepSubproofs(proofStepSubproofs, context) {
    let unifiedWithProofSteps;

    unifiedWithProofSteps = backwardsSome(proofStepSubproofs, (proofStepSubproof) => {
      const statement = this, ///
            statementUnified =proofStepSubproof.unifyStatement(statement, context);

      if (statementUnified) {
        return true;
      }
    });

    return unifiedWithProofSteps;
  }

  verify(assignments, stated, context) {
    let verified;

    const statementString = this.string;  ///

    context.trace(`Verifying the '${statementString}' statement...`);

    verified = verifyMixins.some((verifyMixin) => {
      const statement = this, ///
            verified = verifyMixin(statement, assignments, stated, context);

      if (verified) {
        return true;
      }
    });

    if (verified) {
      context.debug(`...verified the '${statementString}' statement.`);
    }

    return verified;
  }

  verifyWhenDeclared(fileContext) {
    let verifiedWhenDeclared;

    const statementNode = this.node,  ///
          statementString = this.string;  ///

    fileContext.trace(`Verifying the '${statementString}' statement when declared...`);

    verifiedWhenDeclared = combinatorVerifier.verifyStatement(statementNode, fileContext);

    if (verifiedWhenDeclared) {
      fileContext.debug(`...verified the '${statementString}' statement when declared.`);
    }

    return verifiedWhenDeclared;
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

  static name = "Statement";

  static fromJSON(json, fileContext) {
    const { string } = json,
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          statementPartialContext = StatementPartialContext.fromStringLexerAndParser(string, lexer, parser),
          node = statementPartialContext.getNode(),
          tokens = statementPartialContext.getTokens(),
          statement = new Statement(string, node, tokens);

    return statement;
  }

  static fromPremiseNode(premiseNode, fileContext) {
    const node = premiseNode, ///
          statement = statementFromNode(node, fileContext);

    return statement;
  }

  static fromProofStepNode(proofStepNode, fileContext) {
    const node = proofStepNode, ///
          statement = statementFromNode(node, fileContext);

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

  static fromConclusionNode(conclusionNode, fileContext) {
    const node = conclusionNode, ///
          statement = statementFromNode(node, fileContext);

    return statement;
  }

  static fromConsequentNode(consequentNode, fileContext) {
    const node = consequentNode, ///
          statement = statementFromNode(node, fileContext);

    return statement;
  }

  static fromSuppositionNode(suppositionNode, fileContext) {
    const node = suppositionNode, ///
          statement = statementFromNode(node, fileContext);

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
});

function statementFromNode(node, fileContext) {
  let statement = null;

  const statementNode = statementNodeQuery(node);

  if (statementNode !== null) {
    const { Statement } = dom,
          node = statementNode, ///
          tokens = fileContext.nodeAsTokens(node),
          string = fileContext.tokensAsString(tokens);

    statement = new Statement(string, node, tokens);
  }

  return statement;
}