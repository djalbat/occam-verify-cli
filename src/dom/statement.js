"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import LocalContext from "../context/local";
import verifyMixins from "../mixins/statement/verify";
import combinatorVerifier from "../verifier/combinator";
import StatementPartialContext from "../context/partial/statement";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { unifyStatement } from "../utilities/unification";
import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";
import { definedAssertionFromStatement, subproofAssertionFromStatement } from "../utilities/verification";

const { match, backwardsSome } = arrayUtilities;

const premiseStatementNodeQuery = nodeQuery("/premise/statement"),
      proofStepStatementNodeQuery = nodeQuery("/proofStep/statement"),
      conclusionStatementNodeQuery = nodeQuery("/conclusion/statement"),
      consequentStatementNodeQuery = nodeQuery("/consequent/statement"),
      suppositionStatementNodeQuery = nodeQuery("/supposition/statement");

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

  unifyIndependently(substitutions, context) {
    let unifiedIndependently = false;

    const statement = this; ///

    const definedAssertion = definedAssertionFromStatement(statement, context);

    if (definedAssertion !== null) {
      const statementString = this.string;

      context.trace(`Unifying the '${statementString}' statement independently...`);

      const definedAssertionUnifiedIndependently = definedAssertion.unifyIndependently(substitutions, context);

      unifiedIndependently = definedAssertionUnifiedIndependently; ///

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
    let statement = null;

    const premiseStatementNode = premiseStatementNodeQuery(premiseNode);

    if (premiseStatementNode !== null) {
      const statementNode = premiseStatementNode, ///
            localContext = LocalContext.fromFileContext(fileContext),
            context = localContext;  ///

      statement = statementFromStatementNode(statementNode, context);
    }

    return statement;
  }

  static fromProofStepNode(proofStepNode, fileContext) {
    let statement = null;

    const proofStepStatementNode = proofStepStatementNodeQuery(proofStepNode);

    if (proofStepStatementNode !== null) {
      const statementNode = proofStepStatementNode; ///

      statement = statementFromStatementNode(statementNode, fileContext);
    }

    return statement;
  }

  static fromStatementNode(statementNode, context) {
    const statement = statementFromStatementNode(statementNode, context);

    return statement;
  }

  static fromConclusionNode(conclusionNode, fileContext) {
    let statement = null;

    const conclusionStatementNode = conclusionStatementNodeQuery(conclusionNode);

    if (conclusionStatementNode !== null) {
      const statementNode = conclusionStatementNode,  ///
            localContext = LocalContext.fromFileContext(fileContext),
            context = localContext;  ///

      statement = statementFromStatementNode(statementNode, context);
    }

    return statement;
  }

  static fromConsequentNode(consequentNode, fileContext) {
    let statement = null;

    const consequentStatementNode = consequentStatementNodeQuery(consequentNode);

    if (consequentStatementNode !== null) {
      const statementNode = consequentStatementNode,  ///
            localContext = LocalContext.fromFileContext(fileContext),
            context = localContext;  ///

      statement = statementFromStatementNode(statementNode, context);
    }

    return statement;
  }

  static fromSuppositionNode(suppositionNode, fileContext) {
    let statement = null;

    const suppositionStatementNode = suppositionStatementNodeQuery(suppositionNode);

    if (suppositionStatementNode !== null) {
      const statementNode = suppositionStatementNode, ///
            localContext = LocalContext.fromFileContext(fileContext),
            context = localContext;  ///

      statement = statementFromStatementNode(statementNode, context);
    }

    return statement;
  }
});

function statementFromStatementNode(statementNode, context) {
  const { Statement } = dom,
        node = statementNode, ///
        tokens = context.nodeAsTokens(node),
        string = context.tokensAsString(tokens),
        statement = new Statement(string, node, tokens);

  return statement;
}