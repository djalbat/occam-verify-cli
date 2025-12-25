"use strict";

import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";
import { metavariableNameFromMetavariableNode } from "../utilities/metavariable";

const termNodeQuery = nodeQuery("/term"),
      frameNodeQuery = nodeQuery("/frame"),
      statementNodeQuery = nodeQuery("/statement"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!"),
      assumptionMetavariableNodeQuery = nodeQuery("/assumption/metavariable!"),
      frameAssumptionMetavariableNodeQuery = nodeQuery("/frame/assumption!/metavariable!");

class MetaLevelUnifier extends Unifier {
  unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext) {
    let unifiesAtMetaLevel;

    const nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

    unifiesAtMetaLevel = nonTerminalNodeUnifies; ///

    return unifiesAtMetaLevel;
  }

  static maps = [
    {
      generalNodeQuery: assumptionMetavariableNodeQuery,
      specificNodeQuery: assumptionMetavariableNodeQuery,
      unify: (generalAssumptionMetavariableNode, specificAssumptionMetavariableNode, substitutions, generalContext, specificContext) => {
        let referenceUnifies;

        let context,
            metavariableNode;

        context = generalContext; ///

        metavariableNode = generalAssumptionMetavariableNode;  ///

        const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
              metavariable = context.findMetavariableByMetavariableName(metavariableName);

        context = specificContext;  ///

        metavariableNode = specificAssumptionMetavariableNode; ///

        const reference = context.findReferenceByMetavariableNode(metavariableNode);

        referenceUnifies = metavariable.unifyReference(reference, substitutions, generalContext, specificContext);

        return referenceUnifies;
      }
    },
    {
      generalNodeQuery: statementMetavariableNodeQuery,
      specificNodeQuery: statementNodeQuery,
      unify: (generalStatementMetavariableNode, specificStatementNode, substitutions, generalContext, specificContext) => {
        let statementUnifies;

        let context,
            statementNode;

        context = generalContext; ///

        const metavariableNode = generalStatementMetavariableNode,  ///
              metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
              metavariable = context.findMetavariableByMetavariableName(metavariableName),
              metavariableNodeParentNode = metavariableNode.getParentNode();

        statementNode = metavariableNodeParentNode; ///

        const frameSubstitutionNode = statementNode.getFrameSubstitutionNode(),
              termSubstitutionNode = statementNode.getTermSubstitutionNode(),
              substitutionNode = (frameSubstitutionNode || termSubstitutionNode),
              substitution = (substitutionNode !== null) ?
                               context.findSubstitutionBySubstitutionNode(substitutionNode) :
                                 null;

        context = specificContext; ///

        statementNode = specificStatementNode;  ///

        const statement = context.findStatementByStatementNode(statementNode);

        statementUnifies = metavariable.unifyStatement(statement, substitution, substitutions, generalContext, specificContext);

        return statementUnifies;
      }
    },
    {
      generalNodeQuery: frameAssumptionMetavariableNodeQuery,
      specificNodeQuery: frameNodeQuery,
      unify: (generalFrameAssumptionMetavariableNode, specificFrameNode, substitutions, generalContext, specificContext) => {
        let frameUnifies;

        const frameNode = specificFrameNode, ///
              metavariableNode = generalFrameAssumptionMetavariableNode,  ///
              metavariableName = metavariableNameFromMetavariableNode(metavariableNode);

        let context;

        context = generalContext; ///

        const metavariable = context.findMetavariableByMetavariableName(metavariableName);

        context = specificContext;  ///

        const frame = context.findFrameByFrameNode(frameNode);

        frameUnifies = metavariable.unifyFrame(frame, substitutions, generalContext, specificContext);

        return frameUnifies;
      }
    },
    {
      generalNodeQuery: termVariableNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) => {
        let termUnifies;

        const termNode = specificTermNode, ///
              variableNode = generalTermVariableNode, ///
              variableIdentifier = variableNode.getVariableIdentifier();

        let context;

        context = generalContext; ///

        const variable = context.findVariableByVariableIdentifier(variableIdentifier);

        context = specificContext;  ///

        const term = context.findTermByTermNode(termNode);

        termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);

        return termUnifies;
      }
    }
  ];
}

const metaLevelUnifier = new MetaLevelUnifier();

export default metaLevelUnifier;
