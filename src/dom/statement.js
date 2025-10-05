"use strict";

import { arrayUtilities } from "necessary";

import verifyMixins from "../mixins/statement/verify";
import StatementPartialContext from "../context/partial/statement";

import { domAssigned } from "../dom";
import { unifyStatement } from "../utilities/unification";
import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";
import { statementFromStatementNode } from "../utilities/node";
import { stripBracketsFromStatementNode } from "../utilities/brackets";
import { definedAssertionFromStatement, containedAssertionFromStatement, subproofAssertionFromStatement } from "../utilities/context";

const { match, backwardsSome } = arrayUtilities;

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

    context.trace(`Is the '${termString}' term contained in the '${statementString}' statement...`, this.node);

    const termNode = term.getNode(),
          statementNode = this.node,
          statementNodeTermNodes = statementNode.getTermNodes();

    termContained = statementNodeTermNodes.some((statementNodeTermNode) => {  ///
      const termNodeMatchesStatementNodeTermNode = termNode.match(statementNodeTermNode);

      if (termNodeMatchesStatementNodeTermNode) {
        return true;
      }
    });

    if (termContained) {
      context.debug(`...the '${termString}' term is contained in the '${statementString}' statement.`, this.node);
    }

    return termContained;
  }

  isFrameContained(frame, context) {
    let frameContained;

    const frameString = frame.getString(),
          statementString = this.string;  ///

    context.trace(`Is the '${frameString}' frame contained in the '${statementString}' statement...`, this.node);

    const frameNode = frame.getNode(),
          statementNode = this.node,
          statementNodeFrameNodes = statementNode.getFrameNodes();

    frameContained = statementNodeFrameNodes.some((statementNodeFrameNode) => {  ///
      const frameNodeMatchesStatementNodeFrameNode = frameNode.match(statementNodeFrameNode);

      if (frameNodeMatchesStatementNodeFrameNode) {
        return true;
      }
    });

    if (frameContained) {
      context.debug(`...the '${frameString}' frame is contained in the '${statementString}' statement.`, this.node);
    }

    return frameContained;
  }

  verify(assignments, stated, context) {
    let verifies;

    const statementString = this.string;  ///

    context.trace(`Verifying the '${statementString}' statement...`, this.node);

    verifies = verifyMixins.some((verifyMixin) => {
      const statement = this, ///
            verifies = verifyMixin(statement, assignments, stated, context);

      if (verifies) {
        return true;
      }
    });

    if (verifies) {
      context.debug(`...verified the '${statementString}' statement.`, this.node);
    }

    return verifies;
  }

  verifyGivenMetaType(metaType, assignments, stated, context) {
    let verifiesGivenMetaType = false;

    const metaTypeString = metaType.getString(),
          statementString = this.string;  ///

    context.trace(`Verifying the '${statementString}' statement given the '${metaTypeString}' meta-type...`, this.node);

    const metaTypeName = metaType.getName();

    if (metaTypeName === STATEMENT_META_TYPE_NAME) {
      const verifies = this.verify(assignments, stated, context)

      verifiesGivenMetaType = verifies; ///
    }

    if (verifiesGivenMetaType) {
      context.debug(`...verified the '${statementString}' statement given the '${metaTypeString}' meta-type.`, this.node);
    }

    return verifiesGivenMetaType;
  }

  unifySubproof(subproof, substitutions, generalContext, specificContext) {
    let subproofUnifies = false;

    const context = specificContext,  ///
          statement = this, ///
          subproofAssertion = subproofAssertionFromStatement(statement, context);

    if (subproofAssertion !== null) {
      const subproofString = subproof.getString(),
            subproofAssertionString = subproofAssertion.getString();

      specificContext.trace(`Unifying the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion...`);

      const subproofStatements = subproof.getStatements(),
            subproofAssertionStatements = subproofAssertion.getStatements();

      subproofUnifies = match(subproofAssertionStatements, subproofStatements, (subproofAssertionStatement, subproofStatement) => {
        const generalStatement = subproofAssertionStatement,  ///
              specificStatement = subproofStatement,  ///
              statementUnifies = unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext);

        if (statementUnifies) {
          return true;
        }
      });

      if (subproofUnifies) {
        specificContext.debug(`...unified the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion.`);
      }
    }

    return subproofUnifies;
  }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnifies;

    const generalStatement = this,  ///
          specificStatement = statement, ///
          generalStatementString = generalStatement.getString(),
          specificStatementString = specificStatement.getString();

    specificContext.trace(`Unifying the '${specificStatementString}' statement with the '${generalStatementString}' statement...`);

    statementUnifies = unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext);

    if (statementUnifies) {
      specificContext.debug(`...unified the '${specificStatementString}' statement with the '${generalStatementString}' statement.`);
    }

    return statementUnifies;
  }

  unifyIndependently(substitutions, context) {
    let unifiesIndependently = false;

    const statement = this, ///
          statementString = this.string;  ///

    context.trace(`Unifying the '${statementString}' statement independently...`);

    const definedAssertion = definedAssertionFromStatement(statement, context),
          containedAssertion = containedAssertionFromStatement(statement, context);

    if (definedAssertion !== null) {
      const definedAssertionUnifiesIndependently = definedAssertion.unifyIndependently(substitutions, context);

      unifiesIndependently = definedAssertionUnifiesIndependently; ///
    }

    if (containedAssertion !== null) {
      const containedAssertionUnifiesIndependently = containedAssertion.unifyIndependently(substitutions, context);

      unifiesIndependently = containedAssertionUnifiesIndependently; ///
    }

    if (unifiesIndependently) {
      context.debug(`...unified the '${statementString}' statement independently.`);
    }

    return unifiesIndependently;
  }

  equateWithStepsOrSubproofs(stepsOrSubproofs, context) {
    let equatesWithStepsOrSubproofs;

    equatesWithStepsOrSubproofs = backwardsSome(stepsOrSubproofs, (stepOrSubproof) => {
      const statement = this, ///
            statementUnifies = stepOrSubproof.equateWithStatement(statement, context);

      if (statementUnifies) {
        return true;
      }
    });

    return equatesWithStepsOrSubproofs;
  }

  toJSON() {
    const string = this.string, ///
          json = {
            string
          };

    return json;
  }

  static name = "Statement";

  static fromJSON(json, context) {
    const { string } = json,
          lexer = context.getLexer(),
          parser = context.getParser(),
          statementPartialContext = StatementPartialContext.fromStringLexerAndParser(string, lexer, parser),
          node = statementPartialContext.getNode(),
          tokens = statementPartialContext.getTokens(),
          statement = new Statement(string, node, tokens);

    return statement;
  }

  static fromStepNode(stepNode, context) {
    let statement = null;

    const statementNode = stepNode.getStatementNode();

    if (statementNode !== null) {
      statement = statementFromStatementNode(statementNode, context);
    }

    return statement;
  }

  static fromPremiseNode(premiseNode, context) {
    let statement = null;

    const statementNode = premiseNode.getStatementNode();

    if (statementNode !== null) {
      statement = statementFromStatementNode(statementNode, context);
    }

    return statement;
  }

  static fromStatementNode(statementNode, context) {
    const statement = statementFromStatementNode(statementNode, context);

    return statement;
  }

  static fromDeductionNode(deductionNode, context) {
    let statement = null;

    const statementNode = deductionNode.getStatementNode();

    if (statementNode !== null) {
      statement = statementFromStatementNode(statementNode, context);
    }

    return statement;
  }

  static fromHypothesisNode(hypothesisNode, context) {
    let statement = null;

    const statementNode = hypothesisNode.getStatementNode();

    if (statementNode !== null) {
      statement = statementFromStatementNode(statementNode, context);
    }

    return statement;
  }

  static fromConclusionNode(conclusionNode, context) {
    let statement = null;

    const statementNode = conclusionNode.getStatementNode();

    if (statementNode !== null) {
      statement = statementFromStatementNode(statementNode, context);
    }

    return statement;
  }

  static fromSuppositionNode(suppositionNode, context) {
    let statement = null;

    const statementNode = suppositionNode.getStatementNode();

    if (statementNode !== null) {
      statement = statementFromStatementNode(statementNode, context);
    }

    return statement;
  }

  static fromDeclarationNode(declarationNode, context) {
    let statement = null;

    let statementNode;

    statementNode = declarationNode.getStatementNode(); ///

    if (statementNode !== null) {
      statementNode = stripBracketsFromStatementNode(statementNode);  ///

      statement = statementFromStatementNode(statementNode, context);
    }

    return statement;
  }

  static fromContainedAssertionNode(containedAssertionNode, context) {
    let statement = null;

    const statementNode = containedAssertionNode.getStatementNode();

    if (statementNode !== null) {
      statement = statementFromStatementNode(statementNode, context);
    }

    return statement;
  }

  static fromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
    const statementNode = combinatorDeclarationNode.getStatementNode(),
          statement = statementFromStatementNode(statementNode, context);

    return statement;
  }
});
