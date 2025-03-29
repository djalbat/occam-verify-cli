"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import LocalContext from "../context/local";
import verifyMixins from "../mixins/statement/verify";
import StatementPartialContext from "../context/partial/statement";

import { domAssigned } from "../dom";
import { unifyStatement } from "../utilities/unification";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";
import { stripBracketsFromStatementNode } from "../utilities/brackets";
import { definedAssertionFromStatement, containedAssertionFromStatement, subproofAssertionFromStatement } from "../utilities/context";

const { match, backwardsSome } = arrayUtilities;

const stepStatementNodeQuery = nodeQuery("/step/statement"),
      statementTermNodesQuery = nodesQuery("/statement//term"),
      statementFrameNodesQuery = nodesQuery("/statement//frame"),
      premiseStatementNodeQuery = nodeQuery("/premise/statement"),
      deductionStatementNodeQuery = nodeQuery("/deduction/statement"),
      conclusionStatementNodeQuery = nodeQuery("/conclusion/statement"),
      suppositionStatementNodeQuery = nodeQuery("/supposition/statement"),
      declarationStatementNodeQuery = nodeQuery("/declaration/statement"),
      containedAssertionStatementNodeQuery = nodeQuery("/containedAssertion/statement"),
      combinatorDeclarationStatementNodeQuery = nodeQuery("/combinatorDeclaration/statement");

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

    const statement = this, ///
          statementString = this.string;  ///

    context.trace(`Unifying the '${statementString}' statement independently...`);

    const definedAssertion = definedAssertionFromStatement(statement, context),
          containedAssertion = containedAssertionFromStatement(statement, context);

    if (definedAssertion !== null) {
      const definedAssertionUnifiedIndependently = definedAssertion.unifyIndependently(substitutions, context);

      unifiedIndependently = definedAssertionUnifiedIndependently; ///
    }

    if (containedAssertion !== null) {
      const containedAssertionUnifiedIndependently = containedAssertion.unifyIndependently(substitutions, context);

      unifiedIndependently = containedAssertionUnifiedIndependently; ///
    }

    if (unifiedIndependently) {
      context.debug(`...unified the '${statementString}' statement independently.`);
    }

    return unifiedIndependently;
  }

  unifyWithStepsOrSubproofs(stepsOrSubproofs, context) {
    let unifiedWithSteps;

    unifiedWithSteps = backwardsSome(stepsOrSubproofs, (stepOrSubproof) => {
      const statement = this, ///
            statementUnified =stepOrSubproof.unifyStatement(statement, context);

      if (statementUnified) {
        return true;
      }
    });

    return unifiedWithSteps;
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

  static fromStepNode(stepNode, fileContext) {
    let statement = null;

    const stepStatementNode = stepStatementNodeQuery(stepNode);

    if (stepStatementNode !== null) {
      const statementNode = stepStatementNode; ///

      statement = statementFromStatementNode(statementNode, fileContext);
    }

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

  static fromStatementNode(statementNode, context) {
    const statement = statementFromStatementNode(statementNode, context);

    return statement;
  }

  static fromDeductionNode(deductionNode, fileContext) {
    let statement = null;

    const deductionStatementNode = deductionStatementNodeQuery(deductionNode);

    if (deductionStatementNode !== null) {
      const statementNode = deductionStatementNode,  ///
            localContext = LocalContext.fromFileContext(fileContext),
            context = localContext;  ///

      statement = statementFromStatementNode(statementNode, context);
    }

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

  static fromDeclarationNode(declarationNode, fileContext) {
    let statementNode;

    const declarationStatementNode = declarationStatementNodeQuery(declarationNode);

    statementNode = declarationStatementNode; ///

    statementNode = stripBracketsFromStatementNode(statementNode);  ///

    const localContext = LocalContext.fromFileContext(fileContext),
          context = localContext, ///
          statement = statementFromStatementNode(statementNode, context);

    return statement;
  }

  static fromContainedAssertionNode(containedAssertionNode, fileContext) {
    let statement = null;

    const containedAssertionStatementNode = containedAssertionStatementNodeQuery(containedAssertionNode);

    if (containedAssertionStatementNode !== null) {
      const statementNode = containedAssertionStatementNode, ///
            localContext = LocalContext.fromFileContext(fileContext),
            context = localContext;  ///

      statement = statementFromStatementNode(statementNode, context);
    }

    return statement;
  }

  static fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
    let statement = null;

    const combinatorDeclarationStatementNode = combinatorDeclarationStatementNodeQuery(combinatorDeclarationNode);

    if (combinatorDeclarationStatementNode !== null) {
      const statementNode = combinatorDeclarationStatementNode, ///
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