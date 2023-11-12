"use strict";

import Combinator from "../../combinator";
import verifyTerm from "../../verify/term";
import NodeVerifier from "../../verifier/node";
import verifyStatement from "../../verify/statement";

import { typeNameFromTypeNode } from "../../utilities/query";
import { TYPE_RULE_NAME, TERM_RULE_NAME, STATEMENT_RULE_NAME } from "../../ruleNames";

class StatementAsCombinatorNodeVerifier extends NodeVerifier {
  verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const ruleName = nonTerminalNode.getRuleName();

    switch (ruleName) {
      case TYPE_RULE_NAME: {
        const typeNode = nonTerminalNode, ///
              typeVerified = verifyType(typeNode, fileContext, verifyAhead),
              typeNodeVerified = typeVerified;  ///

        nonTerminalNodeVerified = typeNodeVerified; ///

        break;
      }

      case TERM_RULE_NAME: {
        const termNode = nonTerminalNode, ///
              standaloneTermVerified = verifyStandaloneTerm(termNode, fileContext, verifyAhead),
              termNodeVerified = standaloneTermVerified;  ///

        nonTerminalNodeVerified = termNodeVerified; ///

        break;
      }

      case STATEMENT_RULE_NAME: {
        const statementNode = nonTerminalNode, ///
              standaloneStatementVerified = verifyStandaloneStatement(statementNode, fileContext, verifyAhead),
              statementNodeVerified = standaloneStatementVerified; ///

        nonTerminalNodeVerified = statementNodeVerified; ///

        break;
      }

      default: {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead); ///

        break;
      }
    }

    return nonTerminalNodeVerified;
  }

}

const statementAsCombinatorNodeVerifier = new StatementAsCombinatorNodeVerifier();

export default statementAsCombinatorNodeVerifier;

function verifyType(typeNode, fileContext, verifyAhead) {
  let typeVerified = false;

  const typeString = fileContext.nodeAsString(typeNode);

  fileContext.trace(`Verifying the '${typeString}' type...`);

  const typeName = typeNameFromTypeNode(typeNode),
        typePresent = fileContext.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    fileContext.info(`The type '${typeName}' not present.`, typeNode);
  } else {
    typeVerified = true;
  }

  if (typeVerified) {
    fileContext.debug(`...verified the '${typeString}' type.`);
  }

  return typeVerified;
}

function verifyStandaloneTerm(termNode, fileContext, verifyAhead) {
  let standaloneTermVerified;

  const termString = fileContext.nodeAsString(termNode);

  fileContext.trace(`Verifying the '${termString}' standalone term...`);

  const types = [],
        context = fileContext,  ///
        termVerified = verifyTerm(termNode, types, context, verifyAhead);

  standaloneTermVerified = termVerified;  ///

  if (standaloneTermVerified) {
    fileContext.debug(`...verified the '${termString}' standalone term.`);
  }

  return standaloneTermVerified;
}

function verifyStandaloneStatement(statementNode, fileContext, verifyAhead) {
  let standaloneStatementVerified;

  const statementString = fileContext.nodeAsString(statementNode);

  fileContext.trace(`Verifying the '${statementString}' standalone statement...`);

  const context = fileContext,  ///
        derived = false,
        assignments = [],
        statementVerified = verifyStatement(statementNode, assignments, derived, context, verifyAhead);

  if (statementVerified) {
    const tokens = fileContext.getTokens(),
          combinator = Combinator.fromStatementNodeAndTokens(statementNode, tokens);

    fileContext.addCombinator(combinator);

    standaloneStatementVerified = true;
  }

  if (standaloneStatementVerified) {
    fileContext.debug(`...verified the '${statementString}' standalone statement.`);
  }

  return standaloneStatementVerified;
}
