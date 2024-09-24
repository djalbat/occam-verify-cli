"use strict";

import Substitution from "../substitution";
import TermForVariableSubstitution from "../substitution/termForVariable";
import FrameForMetavariableSubstitution from "../substitution/frameForMetavariable";

import { nodeQuery } from "../utilities/query";
import { stripBracketsFromStatement } from "../utilities/brackets";

const statementNodeQuery = nodeQuery("/substitution/statement!"),
      metavariableNodeQuery = nodeQuery("/*/metavariable!");

export default class StatementForMetavariableSubstitution extends Substitution {
  constructor(statementNode, metavariableNode, substitution) {
    super();

    this.statementNode = statementNode;
    this.metavariableNode = metavariableNode;
    this.substitution = substitution;
  }

  getStatementNode() {
    return this.statementNode;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  getSubstitution() {
    return this.substitution;
  }

  getNode() {
    const node = this.statementNode;  ///

    return node;
  }

  isSimple() {
    const simple = (this.substitution === null);

    return simple;
  }

  transformed(substitutions) {
    let transformedSubstitution = null;

    const transformedStatementNode = transformStatementNode(this.statementNode, substitutions);

    if (transformedStatementNode !== null) {
      const substitution = null,
            statementNode = transformedStatementNode, ///
            metavariableNode = this.metavariableNode, ///
            statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution);

      transformedSubstitution = statementForMetavariableSubstitution;  ///
    }

    return transformedSubstitution;
  }

  matchStatementNode(statementNode) {
    statementNode = stripBracketsFromStatement(statementNode); ///

    const statementNodeMatches = this.statementNode.match(statementNode);

    return statementNodeMatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.metavariableNode.match(metavariableNode);

    return metavariableNodeMatches;
  }

  matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
    const metavariableNodeAndSubstitutionNodeMatches = false;

    return metavariableNodeAndSubstitutionNodeMatches;
  }

  asString(localContextA, localContextB) {
    let string;

    const statementNodeB = this.statementNode,  ///
          statementStringB = localContextB.nodeAsString(statementNodeB),
          metavariableNodeA = this.metavariableNode,  ///
          metavariableStringA = localContextA.nodeAsString(metavariableNodeA);

    if (this.substitution === null) {
      string = `[${statementStringB} for ${metavariableStringA}]`;
    } else {
      const substitutionString = this.substitution.asString(localContextA, localContextA);

      string = `[${statementStringB} for ${metavariableStringA}${substitutionString}]`;
    }

    return string;
  }

  // static fromSubstitutionNode(substitutionNode) {
  //   let statementForMetavariableSubstitution = null;
  //
  //   let statementNode = statementNodeQuery(substitutionNode),
  //       metavariableNode = metavariableNodeQuery(substitutionNode);
  //
  //   if (statementNode !== null) {
  //     statementNode = stripBracketsFromStatement(statementNode); ///
  //
  //     const substitution = null;
  //
  //     statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution);
  //   }
  //
  //   return statementForMetavariableSubstitution;
  // }

  static fromStatementNodeAndMetavariableNode(statementNode, metavariableNode) {
    statementNode = stripBracketsFromStatement(statementNode); ///

    const substitution = null,
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution);

    return statementForMetavariableSubstitution;
  }

  static fromStatementNodeMetavariableNodeAndSubstitutionNode(statementNode, metavariableNode, substitutionNode) {
    statementNode = stripBracketsFromStatement(statementNode); ///

    const substitution = substitutionFromSubstitutionNode(substitutionNode),
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution);

    return statementForMetavariableSubstitution;
  }
}

function substitutionFromSubstitutionNode(substitutionNode) {
  let substitution = null;

  if (substitution === null) {
    const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionNode(substitutionNode);

    if (termForVariableSubstitution !== null) {
      substitution = termForVariableSubstitution; ///
    }
  }

  if (substitution === null) {
    const frameForMetavariableSubstitution = FrameForMetavariableSubstitution.fromSubstitutionNode(substitutionNode);

    if (frameForMetavariableSubstitution !== null) {
      substitution = frameForMetavariableSubstitution;  ///
    }
  }

  return substitution;
}

function transformStatementNode(statementNode, substitutions) {
  let transformedStatementNode = null;

  const metavariableNode = metavariableNodeQuery(statementNode);

  if (metavariableNode !== null) {
    substitutions.someSubstitution((substitution) => {
      const substitutionMatchesVariableNode = substitution.matchMetavariableNode(metavariableNode);

      if (substitutionMatchesVariableNode) {
        const statementNode = substitution.getStatementNode();

        transformedStatementNode = statementNode; ////

        return true;
      }
    });
  }

  return transformedStatementNode;
}
