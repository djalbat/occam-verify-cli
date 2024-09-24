"use strict";

import bracketedTermNode from "../node/term/bracketed";
import bracketedFrameNode from "../node/frame/bracketed";
import bracketedStatementNode from "../node/statement/bracketed";

import { nodeQuery } from "../utilities/query";
import { BRACKETED_TERM_DEPTH, BRACKETED_FRAME_DEPTH, BRACKETED_STATEMENT_DEPTH } from "../constants";

const bracketedTermChildNodeQuery = nodeQuery("/term/argument/term!"),
      bracketedStatementChildNodeQuery = nodeQuery("/statement/metaArgument/statement!");

export function stripBracketsFromTerm(statementNode) {
  const bracketedTermChildNode = bracketedTermChildNodeFromTermNode(statementNode);

  if (bracketedTermChildNode !== null) {
    statementNode = bracketedTermChildNode;  ///
  }

  return statementNode;
}

export function stripBracketsFromFrame(frameNode) {
  const bracketedFrameChildNode = bracketedFrameChildNodeFromFrameNode(frameNode);

  if (bracketedFrameChildNode !== null) {
    frameNode = bracketedFrameChildNode;  ///
  }

  return frameNode;
}

export function stripBracketsFromStatement(statementNode) {
  const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

  if (bracketedStatementChildNode !== null) {
    statementNode = bracketedStatementChildNode;  ///
  }

  return statementNode;
}

function bracketedTermChildNodeFromTermNode(termNode) {
  let bracketedTermChildNode = null;

  const depth = BRACKETED_TERM_DEPTH,
        termNodeMatchBracketedTermNode = termNode.match(bracketedTermNode, depth);

  if (termNodeMatchBracketedTermNode) {
    bracketedTermChildNode = bracketedTermChildNodeQuery(termNode);
  }

  return bracketedTermChildNode;
}

function bracketedFrameChildNodeFromFrameNode(frameNode) {
  let bracketedFrameChildNode = null;

  const depth = BRACKETED_FRAME_DEPTH,
        frameNodeMatchBracketedFrameNode = frameNode.match(bracketedFrameNode, depth);

  if (frameNodeMatchBracketedFrameNode) {
    bracketedFrameChildNode = bracketedFrameChildNodeQuery(frameNode);
  }

  return bracketedFrameChildNode;
}

function bracketedStatementChildNodeFromStatementNode(statementNode) {
  let bracketedStatementChildNode = null;

  const depth = BRACKETED_STATEMENT_DEPTH,
        statementNodeMatchBracketedStatementNode = statementNode.match(bracketedStatementNode, depth);

  if (statementNodeMatchBracketedStatementNode) {
    bracketedStatementChildNode = bracketedStatementChildNodeQuery(statementNode);
  }

  return bracketedStatementChildNode;
}
